import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 21a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v16a1 1 0 0 1-1 1"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1"
    />
  </svg>
);
export default SvgPlus;
