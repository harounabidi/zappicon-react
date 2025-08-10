import { readdir, readFile, writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { parse } from "svgson"
import process from "process"
import { optimize } from "svgo"

const sourceDir = "icons"
const outputDir = "src/icons"

// Define the expected variants
const VARIANTS = ["light", "regular", "filled", "duotone", "duotone-line"]

async function convertSvgToReactComponent() {
  try {
    // Ensure output directory exists
    await mkdir(outputDir, { recursive: true })

    const files = await readdir(sourceDir)
    const svgFiles = files.filter((file) => file.endsWith(".svg"))

    console.log(`Found ${svgFiles.length} SVG files...`)

    // Group icons by base name
    const iconGroups = groupIconsByBaseName(svgFiles)

    console.log(
      `Generating ${
        Object.keys(iconGroups).length
      } icon components with variants...`
    )

    for (const [baseName, variants] of Object.entries(iconGroups)) {
      const tsPath = join(outputDir, `${baseName}.tsx`)

      // Process all variants for this icon
      const variantData = {}

      for (const [variant, filename] of Object.entries(variants)) {
        const svgPath = join(sourceDir, filename)
        const svgContent = await readFile(svgPath, "utf8")
        const optimizedSvg = optimize(svgContent).data
        const jsonObj = await parse(optimizedSvg, { camelcase: true })
        variantData[variant] = jsonObj
      }

      // Generate React component with variant support
      const componentName = toPascalCase(baseName)
      const tsContent = generateVariantComponent(componentName, variantData)

      await writeFile(tsPath, tsContent)
    }

    // Generate index file and types
    await generateIndexFile(Object.keys(iconGroups))
    await generateTypesFile()

    console.log(
      `✅ Generated ${
        Object.keys(iconGroups).length
      } icon components successfully!`
    )
    console.log(`📦 Generated index.ts and types.ts with all exports`)
  } catch (error) {
    console.error("Error generating files:", error)
    process.exit(1)
  }
}

function groupIconsByBaseName(svgFiles) {
  const groups = {}

  for (const file of svgFiles) {
    const baseName = extractBaseName(file)
    const variant = extractVariant(file)

    if (!groups[baseName]) {
      groups[baseName] = {}
    }

    if (variant && VARIANTS.includes(variant)) {
      groups[baseName][variant] = file
    }
  }

  // Filter out incomplete groups (missing variants)
  const completeGroups = {}
  for (const [baseName, variants] of Object.entries(groups)) {
    if (Object.keys(variants).length > 0) {
      completeGroups[baseName] = variants
    }
  }

  return completeGroups
}

function extractBaseName(filename) {
  // Remove .svg extension
  const nameWithoutExt = filename.replace(".svg", "")

  // Try to match common variant patterns
  for (const variant of VARIANTS) {
    const patterns = [
      new RegExp(`-${variant}$`, "i"),
      new RegExp(`_${variant}$`, "i"),
      new RegExp(`${variant}$`, "i"),
    ]

    for (const pattern of patterns) {
      if (pattern.test(nameWithoutExt)) {
        return nameWithoutExt.replace(pattern, "")
      }
    }
  }

  return nameWithoutExt
}

function extractVariant(filename) {
  const nameWithoutExt = filename.replace(".svg", "")

  for (const variant of VARIANTS) {
    const patterns = [
      new RegExp(`-${variant}$`, "i"),
      new RegExp(`_${variant}$`, "i"),
      new RegExp(`${variant}$`, "i"),
    ]

    for (const pattern of patterns) {
      if (pattern.test(nameWithoutExt)) {
        return variant
      }
    }
  }

  return "regular" // default variant
}

function generateVariantComponent(componentName, variantData) {
  const availableVariants = Object.keys(variantData)
  const defaultVariant = availableVariants.includes("regular")
    ? "regular"
    : availableVariants[0]

  let switchCases = ""
  for (const [variant, jsonObj] of Object.entries(variantData)) {
    const elementCode = renderSvgToCreateElement(jsonObj, "    ")
    switchCases += `    case '${variant}':\n      return ${elementCode};\n`
  }

  return `import * as React from "react";
import type { SVGProps } from "react";
import type { IconVariant } from "./types";

export interface ${componentName}Props extends SVGProps<SVGSVGElement> {
  variant?: IconVariant;
}

const ${componentName} = React.forwardRef<SVGSVGElement, ${componentName}Props>(
  ({ variant = '${defaultVariant}', ...props }, ref) => {
    switch (variant) {
${switchCases}    default:
      return ${renderSvgToCreateElement(variantData[defaultVariant], "      ")};
    }
  }
);

${componentName}.displayName = '${componentName}';

export default ${componentName};
`
}

function renderSvgToCreateElement(node, indent = "", key) {
  if (!node) return "null"

  const { name, type, value, attributes = {}, children = [] } = node

  if (type === "text") {
    return value ? JSON.stringify(value) : "null"
  }

  if (type !== "element") return "null"

  // Convert attributes to React props
  const props = {}

  // Add key prop if provided
  if (key !== undefined) {
    props.key = key
  }

  // Handle SVG root element specially
  if (name === "svg") {
    props.ref = "ref"
  }

  // Convert SVG attributes to React props
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "fill" && value === "#000") value = "currentColor"

    // For SVG root element, handle width/height specially to allow prop override
    if ((key === "width" || key === "height") && name === "svg") {
      // Use prop value if provided, otherwise use SVG attribute as fallback
      props[key] = `props.${key} ?? ${JSON.stringify(value)}`
      return
    }

    const propName = convertAttributeToReactProp(key)
    props[propName] = JSON.stringify(value)
  })

  // Build props object string
  let propsString = "{"
  const propEntries = Object.entries(props)

  if (name === "svg") {
    // For root SVG, we need to handle props carefully
    // We spread the remaining props (excluding width/height which we handle explicitly)
    propsString +=
      "...Object.fromEntries(Object.entries(props).filter(([key]) => !['width', 'height'].includes(key)))"
    if (propEntries.length > 1) {
      propsString += ", "
    }
  }

  propEntries.forEach(([key, value], index) => {
    if (key === "ref") {
      propsString += `ref`
    } else if (key === "key") {
      propsString += `key: ${value}`
    } else if (key === "width" || key === "height") {
      // These are handled with nullish coalescing
      propsString += `${key}: ${value}`
    } else {
      propsString += `${key}: ${value}`
    }
    if (index < propEntries.length - 1) {
      propsString += ", "
    }
  })

  propsString += "}"

  // Handle children
  if (children.length === 0) {
    return `React.createElement("${name}", ${propsString})`
  }

  const childrenCode = children
    .map((child, idx) => renderSvgToCreateElement(child, indent + "  ", idx))
    .filter((child) => child !== "null")

  if (childrenCode.length === 0) {
    return `React.createElement("${name}", ${propsString})`
  }

  const childrenString =
    childrenCode.length === 1
      ? childrenCode[0]
      : `[\n${indent}  ${childrenCode.join(`,\n${indent}  `)}\n${indent}]`

  return `React.createElement("${name}", ${propsString}, ${childrenString})`
}

async function generateIndexFile(iconNames) {
  const indexPath = join(outputDir, "index.ts")
  const exportStatements = iconNames
    .map((baseName) => {
      const componentName = toPascalCase(baseName)
      return `export { default as ${componentName} } from './${baseName}';`
    })
    .join("\n")

  const content = `export type { IconVariant } from './types';
${exportStatements}
`

  await writeFile(indexPath, content)
}

async function generateTypesFile() {
  const typesPath = join(outputDir, "types.ts")
  const content = `export type IconVariant = ${VARIANTS.map(
    (v) => `'${v}'`
  ).join(" | ")};
`
  await writeFile(typesPath, content)
}

function convertAttributeToReactProp(attr) {
  // Handle special cases
  const specialCases = {
    class: "className",
    for: "htmlFor",
    tabindex: "tabIndex",
    readonly: "readOnly",
    maxlength: "maxLength",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    rowspan: "rowSpan",
    colspan: "colSpan",
    usemap: "useMap",
    frameborder: "frameBorder",
    contenteditable: "contentEditable",
  }

  if (specialCases[attr]) {
    return specialCases[attr]
  }

  return attr
}

function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("")
}

convertSvgToReactComponent()
