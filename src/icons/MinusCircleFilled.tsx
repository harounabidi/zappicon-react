import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#minus-circle-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12m15.75.75a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="minus-circle-filled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMinusCircleFilled;
