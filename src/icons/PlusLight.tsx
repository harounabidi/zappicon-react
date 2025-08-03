import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusLight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 20a.5.5 0 0 0 1 0v-7.5H20a.5.5 0 0 0 0-1h-7.5V4a.5.5 0 0 0-1 0v7.5H4a.5.5 0 0 0 0 1h7.5z"
    />
  </svg>
);
export default SvgPlusLight;
