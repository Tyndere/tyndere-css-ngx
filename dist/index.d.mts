/**
 * Core types for CSSngx
 */
interface Theme {
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
interface RuleContext {
    theme: Theme;
    generator: Generator;
}
type RuleHandler = (match: RegExpMatchArray, context: RuleContext) => string | string[] | undefined;
interface Rule {
    name?: string;
    pattern: RegExp;
    handler: RuleHandler;
}
interface Preset {
    name: string;
    rules: Rule[];
    theme?: Theme;
}
interface CSSngxUserConfig {
    presets?: Preset[];
    rules?: Rule[];
    theme?: Theme;
    include?: RegExp[];
    exclude?: RegExp[];
}
interface CSSngxOptions extends CSSngxUserConfig {
    presets: Preset[];
    rules: Rule[];
    theme: Theme;
    include: RegExp[];
    exclude: RegExp[];
}
interface Generator {
    generate: (code: string) => Promise<{
        css: string;
        matched: Set<string>;
    }>;
    parseClasses: (code: string) => Set<string>;
    matchRules: (className: string) => {
        rule: Rule;
        match: RegExpMatchArray;
    } | undefined;
}

/**
 * Core generator for CSSngx
 * Responsible for parsing utility classes and generating CSS
 */

/**
 * Creates a CSS generator instance
 */
declare function createGenerator(userConfig?: CSSngxUserConfig): Generator;

/**
 * Default theme for CSSngx
 * Defines the base styling variables and design tokens
 */

declare const defaultTheme: Theme;

/**
 * Default preset for CSSngx
 * Provides common utility classes for layout, typography, colors, and more
 */

declare const presetDefault: Preset;

export { type CSSngxOptions, type CSSngxUserConfig, type Rule, type RuleContext, type Theme, createGenerator, defaultTheme, presetDefault };
