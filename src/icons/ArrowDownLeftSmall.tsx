import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownLeftSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.793 19.207a1 1 0 0 0 1.414 0l13.5-13.5a1 1 0 0 0-1.414-1.414l-13.5 13.5a1 1 0 0 0 0 1.414"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M4 19a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6v-7a1 1 0 1 0-2 0z"
    />
  </svg>
);
export default SvgArrowDownLeftSmall;
