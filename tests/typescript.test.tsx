import React from "react"
import type { SVGProps } from "react"
import AddressCardDuotone from "../src/icons/AddressCardDuotone"

describe("TypeScript Types", () => {
  it("icon components accept SVGProps", () => {
    // This test passes if TypeScript compilation succeeds
    const props: SVGProps<SVGSVGElement> & { [key: string]: any } = {
      width: 24,
      height: 24,
      fill: "currentColor",
      className: "test-class",
      "data-testid": "typescript-test",
      onClick: () => {},
    }

    // Type checking - this should compile without errors
    const element = <AddressCardDuotone {...props} />
    expect(element).toBeDefined()
  })

  it("icon components work with React.ComponentProps", () => {
    // Test using React.ComponentProps type
    const props: React.ComponentProps<typeof AddressCardDuotone> = {
      width: "100%",
      height: "auto",
      style: { color: "red" },
    }

    const element = <AddressCardDuotone {...props} />
    expect(element).toBeDefined()
  })

  it("icon components accept ref", () => {
    const ref = React.createRef<SVGSVGElement>()
    const element = <AddressCardDuotone ref={ref} />
    expect(element).toBeDefined()
  })
})
