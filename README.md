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

For optimal bundle size, import individual icons:

```jsx
import { SvgBellFilled } from "@harounabidi/zappicon"
import { SvgSearchRegular } from "@harounabidi/zappicon"
import { SvgHeartSimpleDuotone } from "@harounabidi/zappicon"

function MyComponent() {
  return (
    <div>
      <SvgBellFilled />
      <SvgSearchRegular />
      <SvgHeartSimpleDuotone />
    </div>
  )
}
```

### Barrel imports

You can also import from the main package:

```jsx
import {
  SvgBellFilled,
  SvgSearchRegular,
  SvgHeartSimpleDuotone,
} from "@harounabidi/zappicon"

function MyComponent() {
  return (
    <div>
      <SvgBellFilled />
      <SvgSearchRegular />
      <SvgHeartSimpleDuotone />
    </div>
  )
}
}
```

## Icon Variants

Each icon comes in 5 different variants:

- **Regular**: Standard outline style
- **Filled**: Solid fill style
- **Light**: Thin outline style
- **Duotone**: Two-tone style with opacity
- **DuotoneLine**: Duotone with line details

Example naming convention:

- `SvgBellRegular`
- `SvgBellFilled`
- `SvgBellLight`
- `SvgBellDuotone`
- `SvgBellDuotoneLine`

## Props

All icons accept standard SVG props:

```jsx
<SvgBellFilled
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

## Bundle Size Optimization

This library is built with modern bundling tools and supports tree-shaking out of the box:

```jsx
// ✅ Tree-shakeable - only includes SvgBellFilled
import { SvgBellFilled } from "@harounabidi/zappicon"

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
