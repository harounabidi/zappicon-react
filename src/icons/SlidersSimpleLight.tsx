import * as React from "react";
import type { SVGProps } from "react";
const SvgSlidersSimpleLight = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M1.5 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13 7a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1zM11 18a.5.5 0 0 0 0-1H2a.5.5 0 0 0 0 1z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 14a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-2.5 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSlidersSimpleLight;
