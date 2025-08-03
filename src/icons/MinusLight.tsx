import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusLight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.5 12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h16a.5.5 0 0 1 .5.5"
    />
  </svg>
);
export default SvgMinusLight;
