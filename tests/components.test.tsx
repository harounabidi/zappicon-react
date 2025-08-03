import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Icon Components", () => {
  describe("Basic Rendering", () => {
    it("renders AddressCardDuotone without crashing", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(<AddressCardDuotone data-testid='address-card-icon' />)
      const icon = screen.getByTestId("address-card-icon")
      expect(icon).toBeInTheDocument()
    })

    it("renders AlarmClockFilled without crashing", async () => {
      const { AlarmClockFilled } = await import("../src/index")
      render(<AlarmClockFilled data-testid='alarm-clock-icon' />)
      const icon = screen.getByTestId("alarm-clock-icon")
      expect(icon).toBeInTheDocument()
    })

    it("renders BellRegular without crashing", async () => {
      const { BellRegular } = await import("../src/index")
      render(<BellRegular data-testid='bell-icon' />)
      const icon = screen.getByTestId("bell-icon")
      expect(icon).toBeInTheDocument()
    })
  })

  describe("SVG Properties", () => {
    it("renders as an SVG element", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(<AddressCardDuotone data-testid='svg-icon' />)
      const icon = screen.getByTestId("svg-icon")
      expect(icon.tagName).toBe("svg")
    })

    it("has default SVG attributes", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(<AddressCardDuotone data-testid='svg-icon' />)
      const icon = screen.getByTestId("svg-icon")

      expect(icon).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg")
      expect(icon).toHaveAttribute("viewBox", "0 0 24 24")
      expect(icon).toHaveAttribute("width", "1em")
      expect(icon).toHaveAttribute("height", "1em")
      expect(icon).toHaveAttribute("fill", "none")
    })
  })

  describe("Props Handling", () => {
    it("accepts and applies custom width and height", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(
        <AddressCardDuotone
          data-testid='custom-size-icon'
          width='32'
          height='32'
        />
      )
      const icon = screen.getByTestId("custom-size-icon")

      expect(icon).toHaveAttribute("width", "32")
      expect(icon).toHaveAttribute("height", "32")
    })

    it("accepts and applies custom className", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(
        <AddressCardDuotone
          data-testid='custom-class-icon'
          className='custom-icon-class'
        />
      )
      const icon = screen.getByTestId("custom-class-icon")

      expect(icon).toHaveClass("custom-icon-class")
    })

    it("accepts and applies custom fill color", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(<AddressCardDuotone data-testid='custom-fill-icon' fill='red' />)
      const icon = screen.getByTestId("custom-fill-icon")

      expect(icon).toHaveAttribute("fill", "red")
    })

    it("accepts and applies style prop", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      const customStyle = { color: "blue", fontSize: "2rem" }
      render(
        <AddressCardDuotone data-testid='styled-icon' style={customStyle} />
      )
      const icon = screen.getByTestId("styled-icon")

      expect(icon).toHaveStyle("color: blue")
      expect(icon).toHaveStyle("font-size: 2rem")
    })
  })

  describe("Event Handlers", () => {
    it("handles onClick events", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      const handleClick = jest.fn()
      render(
        <AddressCardDuotone
          data-testid='clickable-icon'
          onClick={handleClick}
        />
      )
      const icon = screen.getByTestId("clickable-icon")

      fireEvent.click(icon)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("handles onMouseEnter events", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      const handleMouseEnter = jest.fn()
      render(
        <AddressCardDuotone
          data-testid='hoverable-icon'
          onMouseEnter={handleMouseEnter}
        />
      )
      const icon = screen.getByTestId("hoverable-icon")

      fireEvent.mouseEnter(icon)
      expect(handleMouseEnter).toHaveBeenCalledTimes(1)
    })
  })

  describe("Accessibility", () => {
    it("supports aria-label for screen readers", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(
        <AddressCardDuotone
          data-testid='accessible-icon'
          aria-label='Address card icon'
        />
      )
      const icon = screen.getByTestId("accessible-icon")

      expect(icon).toHaveAttribute("aria-label", "Address card icon")
    })

    it("supports role attribute", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(<AddressCardDuotone data-testid='role-icon' role='img' />)
      const icon = screen.getByTestId("role-icon")

      expect(icon).toHaveAttribute("role", "img")
    })

    it("can be made focusable with tabIndex", async () => {
      const { AddressCardDuotone } = await import("../src/index")
      render(<AddressCardDuotone data-testid='focusable-icon' tabIndex={0} />)
      const icon = screen.getByTestId("focusable-icon")

      expect(icon).toHaveAttribute("tabindex", "0")
    })
  })
})
