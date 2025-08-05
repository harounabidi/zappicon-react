# @harounabidi/zappicon

A comprehensive React icon library with tree-shaking support and multiple icon variants. Built with modern tooling and optimized for both CommonJS and ES modules.

## 🚀 Features

- **🌳 Tree-shakeable**: Import only the icons you need
- **📱 Multiple variants**: 5 different styles per icon
- **⚡ Modern builds**: Both CJS and ESM support
- **📘 TypeScript**: Full type definitions included
- **🎨 Customizable**: Standard SVG props support
- **📦 Optimized**: Minimal bundle impact

## Installation

```bash
npm install @harounabidi/zappicon
```

## Usage

### Tree-shakeable imports (Recommended)

For optimal bundle size, import individual icons. This will only include the specific icons you need:

```jsx
import { BellFilled } from "@harounabidi/zappicon"
import { SearchRegular } from "@harounabidi/zappicon"
import { HeartSimpleDuotone } from "@harounabidi/zappicon"

function MyComponent() {
  return (
    <div>
      <BellFilled />
      <SearchRegular />
      <HeartSimpleDuotone />
    </div>
  )
}
```

### Direct icon imports (Maximum tree-shaking)

For even better tree-shaking in some bundlers, you can import icons directly:

```jsx
import BellFilled from "@harounabidi/zappicon/icons/BellFilled"
import SearchRegular from "@harounabidi/zappicon/icons/SearchRegular"
import HeartSimpleDuotone from "@harounabidi/zappicon/icons/HeartSimpleDuotone"

function MyComponent() {
  return (
    <div>
      <BellFilled />
      <SearchRegular />
      <HeartSimpleDuotone />
    </div>
  )
}
```

### Barrel imports

You can also import from the main package, though this may result in larger bundles with some bundlers:

```jsx
import {
  BellFilled,
  SearchRegular,
  HeartSimpleDuotone,
} from "@harounabidi/zappicon"

function MyComponent() {
  return (
    <div>
      <BellFilled />
      <SearchRegular />
      <HeartSimpleDuotone />
    </div>
  )
}
```

## Bundle Size Comparison

The library is optimized for tree-shaking:

- **Individual icon**: ~891B (when importing single icons)
- **Full library**: ~85KB (when importing from main index)

Modern bundlers like Webpack, Rollup, and Vite will automatically tree-shake unused icons when using named imports.

## Icon Variants

Each icon comes in 5 different variants:

- **Regular**: Standard outline style (`BellRegular`)
- **Filled**: Solid fill style (`BellFilled`)
- **Light**: Thin outline style (`BellLight`)
- **Duotone**: Two-tone style with opacity (`BellDuotone`)
- **DuotoneLine**: Duotone with line details (`BellDuotoneLine`)

## Customization

All icons accept standard SVG props:

```jsx
<BellFilled
  width={24} // Custom width
  height={24} // Custom height
  fill='red' // Custom color
  className='icon' // CSS class
  onClick={handleClick} // Event handlers
  {...otherProps} // Any other SVG props
/>
```

## Available Icons

The library includes a comprehensive set of icons including:

- **UI Elements**: arrows, angles, carets, menu bars
- **Communication**: bell, message dots, phone, microphone
- **Media**: play, pause, stop, volume, camera
- **File & Data**: folder, file, upload, download
- **Commerce**: shopping cart, coins, credit card
- **Social**: heart, star, user, share
- **Navigation**: home, location, directions
- **Technology**: wifi, bluetooth, gear, code
- **And many more...**

## Tree-Shaking

This library is built with modern bundling tools and supports tree-shaking out of the box:

```jsx
// ✅ Tree-shakeable - only includes BellFilled
import { BellFilled } from "@harounabidi/zappicon"

// ✅ Also tree-shakeable with modern bundlers
import { SvgBellFilled, SvgSearchRegular } from "@harounabidi/zappicon"
```

## Build Information

- **CommonJS**: `dist/cjs/index.js` (1.38 MB)
- **ES Modules**: `dist/esm/index.js` (1.33 MB)
- **TypeScript**: `dist/index.d.ts`
- **Gzipped**: ~188 KB (full library)

## TypeScript Support

This library includes full TypeScript definitions for all icons and props:

```tsx
import { SvgBellFilled } from "@harounabidi/zappicon"
import type { SVGProps } from "react"

// All icons accept SVGProps<SVGSVGElement>
const MyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <SvgBellFilled {...props} />
}
```

## Development

Built with:

- **SVGR**: SVG to React component conversion
- **Rollup**: Modern bundling with tree-shaking
- **TypeScript**: Type safety and definitions
- **Dual output**: Both CJS and ESM builds
- **Semantic Release**: Automated versioning and publishing
