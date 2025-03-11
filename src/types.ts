export interface Theme {
  colors?: Record<string, string | Record<string, string>>;
  spacing?: Record<string, string>;
  fontSizes?: Record<string, string>;
  fontWeights?: Record<string, string | number>;
  lineHeights?: Record<string, string | number>;
  borderRadius?: Record<string, string>;
  breakpoints?: Record<string, string>;
  shadows?: Record<string, string>;
  [key: string]: any;
}

export interface RuleContext {
  theme: Theme;
  generator: Generator;
}

export type RuleHandler = (match: RegExpMatchArray, context: RuleContext) => string | string[] | undefined;

export interface Rule {
  name?: string;
  pattern: RegExp;
  handler: RuleHandler;
}

export interface Preset {
  name: string;
  rules: Rule[];
  theme?: Theme;
}

export interface CSSngxUserConfig {
  presets?: Preset[];
  rules?: Rule[];
  theme?: Theme;
  include?: RegExp[];
  exclude?: RegExp[];
}

export interface CSSngxOptions extends CSSngxUserConfig {
  presets: Preset[];
  rules: Rule[];
  theme: Theme;
  include: RegExp[];
  exclude: RegExp[];
}

export interface Generator {
  generate: (code: string) => Promise<{ css: string; matched: Set<string> }>;
  parseClasses: (code: string) => Set<string>;
  matchRules: (className: string) => { rule: Rule; match: RegExpMatchArray } | undefined;
}