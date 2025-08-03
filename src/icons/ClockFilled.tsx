import * as React from "react";
import type { SVGProps } from "react";
const SvgClockFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clock-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12m12.5-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .352.636l4 2.5a.75.75 0 1 0 .796-1.272l-3.648-2.28z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clock-filled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockFilled;
