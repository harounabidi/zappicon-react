import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#play-circle-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12m8.7-2.798a1.45 1.45 0 0 1 2.18-1.253l4.801 2.798c.96.56.96 1.947 0 2.506l-4.8 2.798a1.45 1.45 0 0 1-2.181-1.253z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="play-circle-filled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayCircleFilled;
