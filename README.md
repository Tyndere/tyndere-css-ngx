# CSSngx

A modern, minimalist atomic CSS engine similar to UnoCSS.

## Features

- **Atomic CSS Utilities**: Generate CSS on-demand from utility classes
- **Modern & Minimalist**: Clean, modern design aesthetic with a minimalist approach
- **Highly Customizable**: Extend with your own rules and themes
- **TypeScript Support**: Built with TypeScript for better developer experience
- **Framework Agnostic**: Works with any JavaScript framework or vanilla HTML

## Installation

```bash
npm install cssngx
```

## Usage

### Basic Usage

```js
import { createGenerator, presetDefault } from 'cssngx';

// Create a generator with the default preset
const generator = createGenerator({
  presets: [presetDefault],
});

// Generate CSS from your HTML/JSX/Vue template
const { css } = await generator.generate(`
  <div class="flex-col gap-4 p-4 rounded bg-primary-500 text-white">
    <h1 class="text-2xl font-bold">Hello, CSSngx!</h1>
    <p class="text-base">A modern, minimalist atomic CSS engine</p>
  </div>
`);

console.log(css);
```

### Custom Configuration

```js
import { createGenerator, presetDefault, defaultTheme } from 'cssngx';

// Create a generator with custom configuration
const generator = createGenerator({
  presets: [presetDefault],
  // Extend the default theme
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      brand: {
        500: '#ff4785',
        600: '#e6346e',
      },
    },
  },
  // Add custom rules
  rules: [
    {
      name: 'custom-rule',
      pattern: /^custom-(.+)$/,
      handler: ([className, value]) => `.${className} { custom-property: ${value}; }`,
    },
  ],
});
```

## Available Utility Classes

CSSngx comes with a wide range of utility classes for common CSS properties:

### Layout

- `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden`, `none`
- `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse`
- `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`
- `grid-cols-{1-12}`, `grid-rows-{1-12}`
- `gap-{size}`
- `static`, `relative`, `absolute`, `fixed`, `sticky`

### Spacing

- `m-{size}`, `mt-{size}`, `mr-{size}`, `mb-{size}`, `ml-{size}`, `mx-{size}`, `my-{size}`
- `p-{size}`, `pt-{size}`, `pr-{size}`, `pb-{size}`, `pl-{size}`, `px-{size}`, `py-{size}`

### Typography

- `text-{xs|sm|base|lg|xl|2xl|3xl...}`
- `font-{thin|extralight|light|normal|medium|semibold|bold|extrabold|black}`
- `leading-{none|tight|snug|normal|relaxed|loose}`
- `text-{left|center|right|justify}`
- `underline`, `line-through`, `no-underline`

### Colors

- `text-{color}-{shade?}`
- `bg-{color}-{shade?}`
- `border-{color}-{shade?}`

### Borders

- `border`, `border-{width}`
- `rounded`, `rounded-{none|sm|md|lg|xl|2xl|3xl|full}`

### Shadows

- `shadow`, `shadow-{sm|md|lg|xl|2xl|inner|none}`

## License

MIT# tyndere-css-ngx
# tyndere-css-ngx
