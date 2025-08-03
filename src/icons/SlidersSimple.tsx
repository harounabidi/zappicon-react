import * as React from "react";
import type { SVGProps } from "react";
const SvgSlidersSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" opacity={0.4}>
      <path d="M13 7.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5zM11 18.25a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5z" />
    </g>
    <path
      fill="currentColor"
      d="M5 2.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M19 13.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
    />
  </svg>
);
export default SvgSlidersSimple;
