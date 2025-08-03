import * as IconLibrary from "../src/index"

describe("Package Exports", () => {
  it("exports all icon components", () => {
    // Check that the main export exists and has components
    expect(typeof IconLibrary).toBe("object")
    expect(Object.keys(IconLibrary).length).toBeGreaterThan(0)
  })

  it("exports AddressCardDuotone component", () => {
    expect(IconLibrary.AddressCardDuotone).toBeDefined()
    expect(typeof IconLibrary.AddressCardDuotone).toBe("function")
  })

  it("exports AlarmClockFilled component", () => {
    expect(IconLibrary.AlarmClockFilled).toBeDefined()
    expect(typeof IconLibrary.AlarmClockFilled).toBe("function")
  })

  it("exports BellRegular component", () => {
    expect(IconLibrary.BellRegular).toBeDefined()
    expect(typeof IconLibrary.BellRegular).toBe("function")
  })

  it("all exports are React components (functions)", () => {
    const iconNames = Object.keys(IconLibrary)
    iconNames.forEach((iconName) => {
      expect(typeof IconLibrary[iconName as keyof typeof IconLibrary]).toBe(
        "function"
      )
    })
  })

  it("exports contain icons with different variants", () => {
    const iconNames = Object.keys(IconLibrary)

    // Check for common variants
    const hasRegular = iconNames.some((name) => name.includes("Regular"))
    const hasFilled = iconNames.some((name) => name.includes("Filled"))
    const hasLight = iconNames.some((name) => name.includes("Light"))
    const hasDuotone = iconNames.some((name) => name.includes("Duotone"))

    expect(hasRegular).toBe(true)
    expect(hasFilled).toBe(true)
    expect(hasLight).toBe(true)
    expect(hasDuotone).toBe(true)
  })

  it("exports a reasonable number of icons", () => {
    const iconCount = Object.keys(IconLibrary).length
    // Should have hundreds of icons based on the icon library
    expect(iconCount).toBeGreaterThan(100)
    expect(iconCount).toBeLessThan(2000) // Reasonable upper bound
  })
})
