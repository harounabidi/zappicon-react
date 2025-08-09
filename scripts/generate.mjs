import { readdir, readFile, writeFile, mkdir } from "fs/promises"
import { join } from "path"
import svgson from "svgson"
import process from "process"

const sourceDir = "icons"
const outputDir = "src/icons"

async function convertSvgToTs() {
  try {
    // Ensure output directory exists
    await mkdir(outputDir, { recursive: true })

    const files = await readdir(sourceDir)
    const svgFiles = files.filter((file) => file.endsWith(".svg"))

    console.log(`Generationg ${svgFiles.length} SVG files to TypeScript...`)

    for (const file of svgFiles) {
      const svgPath = join(sourceDir, file)
      const tsPath = join(outputDir, file.replace(".svg", ".tsx"))

      const svgContent = await readFile(svgPath, "utf8")
      const jsonObj = await svgson.parse(svgContent, { camelcase: true })

      // Generate React component using React.createElement
      const componentName = toPascalCase(file.replace(".svg", ""))
      const elementCode = renderSvgToCreateElement(jsonObj, "  ")

      const tsContent = `import * as React from "react";
import type { SVGProps } from "react";

const ${componentName} = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return ${elementCode};
});

${componentName}.displayName = '${componentName}';

export default ${componentName};
`
      await writeFile(tsPath, tsContent)
    }

    // Generate index file for easy imports
    const indexPath = join(outputDir, "index.ts")
    const exportStatements = svgFiles
      .map((file) => {
        const componentName = toPascalCase(file.replace(".svg", ""))
        const fileName = file.replace(".svg", "")
        return `export { default as ${componentName} } from './${fileName}';`
      })
      .join("\n")

    await writeFile(indexPath, exportStatements)

    console.log(`✅ Generated ${svgFiles.length} files successfully!`)
    console.log(`📦 Generated index.ts with all exports`)
  } catch (error) {
    console.error("Error generating files:", error)
    process.exit(1)
  }
}

// Removed duplicate declaration
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

  // Handle special root svg element
  if (name === "svg") {
    props.ref = "ref"
    // Spread props for root element, but skip width and height
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === "width" || key === "height") return
      // Replace #000 with currentColor for fill attribute
      if (key === "fill" && value === "#000") value = "currentColor"
      const propName = convertAttributeToReactProp(key)
      props[propName] = JSON.stringify(value)
    })
  } else {
    // Convert SVG attributes to React props for non-root elements
    Object.entries(attributes).forEach(([key, value]) => {
      // Replace #000 with currentColor for fill attribute
      if (key === "fill" && value === "#000") value = "currentColor"
      const propName = convertAttributeToReactProp(key)
      props[propName] = JSON.stringify(value)
    })
  }

  // Build props object string
  let propsString = "{"
  const propEntries = Object.entries(props)

  if (name === "svg") {
    // For root SVG, spread props first, then add specific attributes
    propsString += "...props"
    if (propEntries.length > 1) {
      // More than just ref
      propsString += ", "
    }
  }

  propEntries.forEach(([key, value], index) => {
    if (key === "ref") {
      propsString += `ref`
    } else if (key === "key") {
      propsString += `key: ${value}`
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

convertSvgToTs()
