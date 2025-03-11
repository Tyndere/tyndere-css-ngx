"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  createGenerator: () => createGenerator,
  defaultTheme: () => defaultTheme,
  presetDefault: () => presetDefault
});
module.exports = __toCommonJS(index_exports);

// src/theme.ts
var defaultTheme = {
  // Color palette - modern, minimalist approach
  colors: {
    // Base colors
    transparent: "transparent",
    current: "currentColor",
    // Grayscale
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    // Primary colors
    primary: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    // Accent colors
    accent: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    // Semantic colors
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6"
  },
  // Spacing scale
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  // Typography
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  // Border radius
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none"
  }
};

// src/core/generator.ts
function resolveOptions(userConfig = {}) {
  return {
    presets: userConfig.presets || [],
    rules: userConfig.rules || [],
    theme: {
      ...defaultTheme,
      ...userConfig.theme
    },
    include: userConfig.include || [/\.(jsx?|tsx?|vue|svelte|astro|html)$/],
    exclude: userConfig.exclude || [/node_modules/]
  };
}
function createGenerator(userConfig = {}) {
  const options = resolveOptions(userConfig);
  const rules = [];
  for (const preset of options.presets) {
    rules.push(...preset.rules);
  }
  rules.push(...options.rules);
  const generator = {
    /**
     * Parses code to extract class names
     */
    parseClasses(code) {
      const classRegex = /class(Name)?=["']([^"']*)["']/g;
      const matches = Array.from(code.matchAll(classRegex));
      const classSet = /* @__PURE__ */ new Set();
      for (const match of matches) {
        const classString = match[2];
        const classes = classString.split(/\s+/).filter(Boolean);
        for (const cls of classes) {
          classSet.add(cls);
          if (cls.startsWith("hover-")) {
            const baseClass = cls.substring(6);
            classSet.add(baseClass);
          }
        }
      }
      return classSet;
    },
    /**
     * Matches a class name against defined rules
     */
    matchRules(className) {
      for (const rule of rules) {
        const match = className.match(rule.pattern);
        if (match) {
          return { rule, match };
        }
      }
      return void 0;
    },
    /**
     * Generates CSS from code
     */
    async generate(code) {
      const classes = generator.parseClasses(code);
      const matched = /* @__PURE__ */ new Set();
      const cssChunks = [];
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
        css: cssChunks.join("\n"),
        matched
      };
    }
  };
  return generator;
}

// src/presets/default.ts
var layoutRules = [
  // Display
  {
    name: "display",
    pattern: /^(block|inline|inline-block|flex|inline-flex|grid|inline-grid|contents|hidden|none)$/,
    handler: ([className]) => `.${className} { display: ${className}; }`
  },
  // Flex
  {
    name: "flex",
    pattern: /^flex-(row|col|row-reverse|col-reverse)$/,
    handler: ([className, direction]) => {
      const value = direction === "col" ? "column" : direction === "col-reverse" ? "column-reverse" : direction;
      return `.${className} { display: flex; flex-direction: ${value}; }`;
    }
  },
  {
    name: "flex-wrap",
    pattern: /^flex-(wrap|nowrap|wrap-reverse)$/,
    handler: ([className, wrap]) => `.${className} { flex-wrap: ${wrap}; }`
  },
  {
    name: "flex-grow-shrink",
    pattern: /^flex-(grow|shrink)(-\d+)?$/,
    handler: ([className, type, value]) => {
      const numValue = value ? value.substring(1) : "1";
      return `.${className} { flex-${type}: ${numValue}; }`;
    }
  },
  // Grid
  {
    name: "grid-cols",
    pattern: /^grid-cols-(\d+)$/,
    handler: ([className, cols]) => `.${className} { display: grid; grid-template-columns: repeat(${cols}, minmax(0, 1fr)); }`
  },
  {
    name: "grid-rows",
    pattern: /^grid-rows-(\d+)$/,
    handler: ([className, rows]) => `.${className} { display: grid; grid-template-rows: repeat(${rows}, minmax(0, 1fr)); }`
  },
  // Gap
  {
    name: "gap",
    pattern: /^gap-(\d+|\d+\.\d+)$/,
    handler: ([className, size], { theme }) => {
      const value = theme.spacing?.[size] || `${size}rem`;
      return `.${className} { gap: ${value}; }`;
    }
  },
  // Positioning
  {
    name: "position",
    pattern: /^(static|relative|absolute|fixed|sticky)$/,
    handler: ([className]) => `.${className} { position: ${className}; }`
  }
];
var spacingRules = [
  // Margin
  {
    name: "margin",
    pattern: /^m([trblxy])?-(\d+|\d+\.\d+)$/,
    handler: ([className, direction, size], { theme }) => {
      const value = theme.spacing?.[size] || `${size}rem`;
      let prop = "margin";
      if (direction) {
        switch (direction) {
          case "t":
            prop = "margin-top";
            break;
          case "r":
            prop = "margin-right";
            break;
          case "b":
            prop = "margin-bottom";
            break;
          case "l":
            prop = "margin-left";
            break;
          case "x":
            return `.${className} { margin-left: ${value}; margin-right: ${value}; }`;
          case "y":
            return `.${className} { margin-top: ${value}; margin-bottom: ${value}; }`;
        }
      }
      return `.${className} { ${prop}: ${value}; }`;
    }
  },
  // Padding
  {
    name: "padding",
    pattern: /^p([trblxy])?-(\d+|\d+\.\d+)$/,
    handler: ([className, direction, size], { theme }) => {
      const value = theme.spacing?.[size] || `${size}rem`;
      let prop = "padding";
      if (direction) {
        switch (direction) {
          case "t":
            prop = "padding-top";
            break;
          case "r":
            prop = "padding-right";
            break;
          case "b":
            prop = "padding-bottom";
            break;
          case "l":
            prop = "padding-left";
            break;
          case "x":
            return `.${className} { padding-left: ${value}; padding-right: ${value}; }`;
          case "y":
            return `.${className} { padding-top: ${value}; padding-bottom: ${value}; }`;
        }
      }
      return `.${className} { ${prop}: ${value}; }`;
    }
  }
];
var typographyRules = [
  // Font size
  {
    name: "font-size",
    pattern: /^text-(xs|sm|base|lg|xl|\d+xl)$/,
    handler: ([className, size], { theme }) => {
      const value = theme.fontSizes?.[size];
      return value ? `.${className} { font-size: ${value}; }` : void 0;
    }
  },
  // Font weight
  {
    name: "font-weight",
    pattern: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
    handler: ([className, weight], { theme }) => {
      const value = theme.fontWeights?.[weight];
      return value ? `.${className} { font-weight: ${value}; }` : void 0;
    }
  },
  // Line height
  {
    name: "line-height",
    pattern: /^leading-(none|tight|snug|normal|relaxed|loose)$/,
    handler: ([className, height], { theme }) => {
      const value = theme.lineHeights?.[height];
      return value ? `.${className} { line-height: ${value}; }` : void 0;
    }
  },
  // Text alignment
  {
    name: "text-align",
    pattern: /^text-(left|center|right|justify)$/,
    handler: ([className, align]) => `.${className} { text-align: ${align}; }`
  },
  // Text decoration
  {
    name: "text-decoration",
    pattern: /^(underline|line-through|no-underline)$/,
    handler: ([className]) => {
      if (className === "no-underline") {
        return `.${className} { text-decoration: none; }`;
      }
      return `.${className} { text-decoration: ${className}; }`;
    }
  }
];
var colorRules = [
  // Text color
  {
    name: "text-color",
    pattern: /^text-([a-z]+)(?:-(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      if (!colorValue) return void 0;
      if (typeof colorValue === "string") {
        value = colorValue;
      } else if (shade && typeof colorValue === "object") {
        value = colorValue[shade];
      } else if (typeof colorValue === "object") {
        value = colorValue["500"] || Object.values(colorValue)[0];
      }
      return value ? `.${className} { color: ${value}; }` : void 0;
    }
  },
  // Background color
  {
    name: "background-color",
    pattern: /^bg-([a-z]+)(?:-(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      if (!colorValue) return void 0;
      if (typeof colorValue === "string") {
        value = colorValue;
      } else if (shade && typeof colorValue === "object") {
        value = colorValue[shade];
      } else if (typeof colorValue === "object") {
        value = colorValue["500"] || Object.values(colorValue)[0];
      }
      return value ? `.${className} { background-color: ${value}; }` : void 0;
    }
  }
];
var borderRules = [
  // Border width
  {
    name: "border-width",
    pattern: /^border(?:-(\d+))?$/,
    handler: ([className, width]) => {
      const value = width ? `${width}px` : "1px";
      return `.${className} { border-width: ${value}; border-style: solid; }`;
    }
  },
  // Border radius
  {
    name: "border-radius",
    pattern: /^rounded(?:-(none|sm|md|lg|xl|\d+xl|full))?$/,
    handler: ([className, radius], { theme }) => {
      const value = radius ? theme.borderRadius?.[radius] : theme.borderRadius?.DEFAULT;
      return value ? `.${className} { border-radius: ${value}; }` : void 0;
    }
  },
  // Border color
  {
    name: "border-color",
    pattern: /^border-([a-z]+)(?:-(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      if (!colorValue) return void 0;
      if (typeof colorValue === "string") {
        value = colorValue;
      } else if (shade && typeof colorValue === "object") {
        value = colorValue[shade];
      } else if (typeof colorValue === "object") {
        value = colorValue["500"] || Object.values(colorValue)[0];
      }
      return value ? `.${className} { border-color: ${value}; }` : void 0;
    }
  }
];
var shadowRules = [
  {
    name: "shadow",
    pattern: /^shadow(?:-(sm|md|lg|xl|\d+xl|inner|none))?$/,
    handler: ([className, size], { theme }) => {
      const value = size ? theme.shadows?.[size] : theme.shadows?.DEFAULT;
      return value ? `.${className} { box-shadow: ${value}; }` : void 0;
    }
  }
];
var hoverRules = [
  // Hover text color
  {
    name: "hover-text-color",
    pattern: /^hover-text-([a-z]+)(?:-?(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      if (!colorValue) return void 0;
      if (typeof colorValue === "string") {
        value = colorValue;
      } else if (shade && typeof colorValue === "object") {
        value = colorValue[shade];
      } else if (typeof colorValue === "object") {
        value = colorValue["500"] || Object.values(colorValue)[0];
      }
      return value ? `.${className}:hover { color: ${value}; }` : void 0;
    }
  },
  // Hover background color
  {
    name: "hover-background-color",
    pattern: /^hover-bg-([a-z]+)(?:-?(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      if (!colorValue) return void 0;
      if (typeof colorValue === "string") {
        value = colorValue;
      } else if (shade && typeof colorValue === "object") {
        value = colorValue[shade];
      } else if (typeof colorValue === "object") {
        value = colorValue["500"] || Object.values(colorValue)[0];
      }
      return value ? `.${className}:hover { background-color: ${value}; }` : void 0;
    }
  },
  // Hover text decoration
  {
    name: "hover-text-decoration",
    pattern: /^hover-(underline|line-through|no-underline)$/,
    handler: ([className, decoration]) => {
      if (decoration === "no-underline") {
        return `.${className}:hover { text-decoration: none; }`;
      }
      return `.${className}:hover { text-decoration: ${decoration}; }`;
    }
  }
];
var allRules = [
  ...layoutRules,
  ...spacingRules,
  ...typographyRules,
  ...colorRules,
  ...borderRules,
  ...shadowRules,
  ...hoverRules
];
var presetDefault = {
  name: "default",
  rules: allRules,
  theme: defaultTheme
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createGenerator,
  defaultTheme,
  presetDefault
});
//# sourceMappingURL=index.js.map