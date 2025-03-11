import type { Preset, Rule } from '../types';
import { defaultTheme } from '../theme';


const layoutRules: Rule[] = [

  {
    name: 'display',
    pattern: /^(block|inline|inline-block|flex|inline-flex|grid|inline-grid|contents|hidden|none)$/,
    handler: ([className]) => `.${className} { display: ${className}; }`,
  },
  

  {
    name: 'flex',
    pattern: /^flex-(row|col|row-reverse|col-reverse)$/,
    handler: ([className, direction]) => {
      const value = direction === 'col' ? 'column' : 
                   direction === 'col-reverse' ? 'column-reverse' : direction;
      return `.${className} { display: flex; flex-direction: ${value}; }`;
    },
  },
  {
    name: 'flex-wrap',
    pattern: /^flex-(wrap|nowrap|wrap-reverse)$/,
    handler: ([className, wrap]) => `.${className} { flex-wrap: ${wrap}; }`,
  },
  {
    name: 'flex-grow-shrink',
    pattern: /^flex-(grow|shrink)(-\d+)?$/,
    handler: ([className, type, value]) => {
      const numValue = value ? value.substring(1) : '1';
      return `.${className} { flex-${type}: ${numValue}; }`;
    },
  },
  

  {
    name: 'grid-cols',
    pattern: /^grid-cols-(\d+)$/,
    handler: ([className, cols]) => `.${className} { display: grid; grid-template-columns: repeat(${cols}, minmax(0, 1fr)); }`,
  },
  {
    name: 'grid-rows',
    pattern: /^grid-rows-(\d+)$/,
    handler: ([className, rows]) => `.${className} { display: grid; grid-template-rows: repeat(${rows}, minmax(0, 1fr)); }`,
  },
  

  {
    name: 'gap',
    pattern: /^gap-(\d+|\d+\.\d+)$/,
    handler: ([className, size], { theme }) => {
      const value = theme.spacing?.[size] || `${size}rem`;
      return `.${className} { gap: ${value}; }`;
    },
  },
  

  {
    name: 'position',
    pattern: /^(static|relative|absolute|fixed|sticky)$/,
    handler: ([className]) => `.${className} { position: ${className}; }`,
  },
];


const spacingRules: Rule[] = [

  {
    name: 'margin',
    pattern: /^m([trblxy])?-(\d+|\d+\.\d+)$/,
    handler: ([className, direction, size], { theme }) => {
      const value = theme.spacing?.[size] || `${size}rem`;
      let prop = 'margin';
      
      if (direction) {
        switch (direction) {
          case 't': prop = 'margin-top'; break;
          case 'r': prop = 'margin-right'; break;
          case 'b': prop = 'margin-bottom'; break;
          case 'l': prop = 'margin-left'; break;
          case 'x': return `.${className} { margin-left: ${value}; margin-right: ${value}; }`;
          case 'y': return `.${className} { margin-top: ${value}; margin-bottom: ${value}; }`;
        }
      }
      
      return `.${className} { ${prop}: ${value}; }`;
    },
  },
  

  {
    name: 'padding',
    pattern: /^p([trblxy])?-(\d+|\d+\.\d+)$/,
    handler: ([className, direction, size], { theme }) => {
      const value = theme.spacing?.[size] || `${size}rem`;
      let prop = 'padding';
      
      if (direction) {
        switch (direction) {
          case 't': prop = 'padding-top'; break;
          case 'r': prop = 'padding-right'; break;
          case 'b': prop = 'padding-bottom'; break;
          case 'l': prop = 'padding-left'; break;
          case 'x': return `.${className} { padding-left: ${value}; padding-right: ${value}; }`;
          case 'y': return `.${className} { padding-top: ${value}; padding-bottom: ${value}; }`;
        }
      }
      
      return `.${className} { ${prop}: ${value}; }`;
    },
  },
];

const typographyRules: Rule[] = [

  {
    name: 'font-size',
    pattern: /^text-(xs|sm|base|lg|xl|\d+xl)$/,
    handler: ([className, size], { theme }) => {
      const value = theme.fontSizes?.[size];
      return value ? `.${className} { font-size: ${value}; }` : undefined;
    },
  },
  

  {
    name: 'font-weight',
    pattern: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
    handler: ([className, weight], { theme }) => {
      const value = theme.fontWeights?.[weight];
      return value ? `.${className} { font-weight: ${value}; }` : undefined;
    },
  },
  

  {
    name: 'line-height',
    pattern: /^leading-(none|tight|snug|normal|relaxed|loose)$/,
    handler: ([className, height], { theme }) => {
      const value = theme.lineHeights?.[height];
      return value ? `.${className} { line-height: ${value}; }` : undefined;
    },
  },
  

  {
    name: 'text-align',
    pattern: /^text-(left|center|right|justify)$/,
    handler: ([className, align]) => `.${className} { text-align: ${align}; }`,
  },
  

  {
    name: 'text-decoration',
    pattern: /^(underline|line-through|no-underline)$/,
    handler: ([className]) => {
      if (className === 'no-underline') {
        return `.${className} { text-decoration: none; }`;
      }
      return `.${className} { text-decoration: ${className}; }`;
    },
  },
];

const colorRules: Rule[] = [

  {
    name: 'text-color',
    pattern: /^text-([a-z]+)(?:-(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      
      if (!colorValue) return undefined;
      
      if (typeof colorValue === 'string') {
        value = colorValue;
      } else if (shade && typeof colorValue === 'object') {
        value = colorValue[shade];
      } else if (typeof colorValue === 'object') {
        value = colorValue['500'] || Object.values(colorValue)[0];
      }
      
      return value ? `.${className} { color: ${value}; }` : undefined;
    },
  },
  

  {
    name: 'background-color',
    pattern: /^bg-([a-z]+)(?:-(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      
      if (!colorValue) return undefined;
      
      if (typeof colorValue === 'string') {
        value = colorValue;
      } else if (shade && typeof colorValue === 'object') {
        value = colorValue[shade];
      } else if (typeof colorValue === 'object') {
        value = colorValue['500'] || Object.values(colorValue)[0];
      }
      
      return value ? `.${className} { background-color: ${value}; }` : undefined;
    },
  },
];

const borderRules: Rule[] = [

  {
    name: 'border-width',
    pattern: /^border(?:-(\d+))?$/,
    handler: ([className, width]) => {
      const value = width ? `${width}px` : '1px';
      return `.${className} { border-width: ${value}; border-style: solid; }`;
    },
  },
  

  {
    name: 'border-radius',
    pattern: /^rounded(?:-(none|sm|md|lg|xl|\d+xl|full))?$/,
    handler: ([className, radius], { theme }) => {
      const value = radius ? theme.borderRadius?.[radius] : theme.borderRadius?.DEFAULT;
      return value ? `.${className} { border-radius: ${value}; }` : undefined;
    },
  },
  

  {
    name: 'border-color',
    pattern: /^border-([a-z]+)(?:-(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      
      if (!colorValue) return undefined;
      
      if (typeof colorValue === 'string') {
        value = colorValue;
      } else if (shade && typeof colorValue === 'object') {
        value = colorValue[shade];
      } else if (typeof colorValue === 'object') {
        value = colorValue['500'] || Object.values(colorValue)[0];
      }
      
      return value ? `.${className} { border-color: ${value}; }` : undefined;
    },
  },
];

const shadowRules: Rule[] = [
  {
    name: 'shadow',
    pattern: /^shadow(?:-(sm|md|lg|xl|\d+xl|inner|none))?$/,
    handler: ([className, size], { theme }) => {
      const value = size ? theme.shadows?.[size] : theme.shadows?.DEFAULT;
      return value ? `.${className} { box-shadow: ${value}; }` : undefined;
    },
  },
];

const hoverRules: Rule[] = [

  {
    name: 'hover-text-color',
    pattern: /^hover-text-([a-z]+)(?:-?(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      
      if (!colorValue) return undefined;
      
      if (typeof colorValue === 'string') {
        value = colorValue;
      } else if (shade && typeof colorValue === 'object') {
        value = colorValue[shade];
      } else if (typeof colorValue === 'object') {
        value = colorValue['500'] || Object.values(colorValue)[0];
      }
      
      return value ? `.${className}:hover { color: ${value}; }` : undefined;
    },
  },
  

  {
    name: 'hover-background-color',
    pattern: /^hover-bg-([a-z]+)(?:-?(\d+))?$/,
    handler: ([className, color, shade], { theme }) => {
      let value;
      const colorValue = theme.colors?.[color];
      
      if (!colorValue) return undefined;
      
      if (typeof colorValue === 'string') {
        value = colorValue;
      } else if (shade && typeof colorValue === 'object') {
        value = colorValue[shade];
      } else if (typeof colorValue === 'object') {
        value = colorValue['500'] || Object.values(colorValue)[0];
      }
      
      return value ? `.${className}:hover { background-color: ${value}; }` : undefined;
    },
  },
  

  {
    name: 'hover-text-decoration',
    pattern: /^hover-(underline|line-through|no-underline)$/,
    handler: ([className, decoration]) => {
      if (decoration === 'no-underline') {
        return `.${className}:hover { text-decoration: none; }`;
      }
      return `.${className}:hover { text-decoration: ${decoration}; }`;
    },
  },
];

const allRules: Rule[] = [
  ...layoutRules,
  ...spacingRules,
  ...typographyRules,
  ...colorRules,
  ...borderRules,
  ...shadowRules,
  ...hoverRules,
];

export const presetDefault: Preset = {
  name: 'default',
  rules: allRules,
  theme: defaultTheme,
};