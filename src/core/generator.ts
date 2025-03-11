import MagicString from 'magic-string';
import type { CSSngxOptions, CSSngxUserConfig, Generator, Preset, Rule, Theme } from '../types';
import { defaultTheme } from '../theme';


export function resolveOptions(userConfig: CSSngxUserConfig = {}): CSSngxOptions {
  return {
    presets: userConfig.presets || [],
    rules: userConfig.rules || [],
    theme: {
      ...defaultTheme,
      ...userConfig.theme,
    },
    include: userConfig.include || [/\.(jsx?|tsx?|vue|svelte|astro|html)$/],
    exclude: userConfig.exclude || [/node_modules/],
  };
}


export function createGenerator(userConfig: CSSngxUserConfig = {}): Generator {
  const options = resolveOptions(userConfig);
  const rules: Rule[] = [];
  

  for (const preset of options.presets) {
    rules.push(...preset.rules);
  }
  

  rules.push(...options.rules);
  
  const generator: Generator = {

    parseClasses(code: string): Set<string> {

      const classRegex = /class(Name)?=['"]([^'"]*)['"]|class(Name)?=\{['"]([^'"]*)['"]\}/g;
      const matches = Array.from(code.matchAll(classRegex));
      
      const classSet = new Set<string>();
      
      for (const match of matches) {

        const classString = match[2] || match[4] || '';
        const classes = classString.split(/\s+/).filter(Boolean);
        
        for (const cls of classes) {
          classSet.add(cls);
        }
      }
      
      return classSet;
    },
    

    matchRules(className: string) {
      for (const rule of rules) {
        const match = className.match(rule.pattern);
        if (match) {
          return { rule, match };
        }
      }
      return undefined;
    },
    

    async generate(code: string) {
      const classes = generator.parseClasses(code);
      const matched = new Set<string>();
      const cssChunks: string[] = [];
      
      for (const className of classes) {
        const result = generator.matchRules(className);
        
        if (result) {
          const { rule, match } = result;
          const cssOutput = rule.handler(match, { theme: options.theme, generator });
          
          if (cssOutput) {
            matched.add(className);
            
            if (Array.isArray(cssOutput)) {
              cssChunks.push(...cssOutput);
            } else {
              cssChunks.push(cssOutput);
            }
          }
        }
      }
      
      return {
        css: cssChunks.join('\n'),
        matched,
      };
    },
  };
  
  return generator;
}