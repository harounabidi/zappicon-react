import * as React from "react";
import type { SVGProps } from "react";
const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" opacity={0.4}>
      <path d="M1 12a8 8 0 0 1 8-8h8.5a1 1 0 1 1 0 2H9a6 6 0 0 0-4.925 9.428 1 1 0 0 1-1.64 1.144A7.97 7.97 0 0 1 1 12M20.173 7.18a1 1 0 0 1 1.393.248A8 8 0 0 1 15 20H6.499a1 1 0 1 1 0-2H15a6 6 0 0 0 4.925-9.428 1 1 0 0 1 .248-1.392" />
    </g>
    <path
      fill="currentColor"
      d="M14.293 7.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L16.586 5zM9.707 16.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L7.414 19z"
    />
  </svg>
);
export default SvgRepeat;
