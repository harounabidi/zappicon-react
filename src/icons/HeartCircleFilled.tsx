import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#heart-circle-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12M14.2 7.5c-1.008 0-1.817.797-2.2 1.25-.383-.453-1.192-1.25-2.2-1.25C8.036 7.5 7 9 7 10.737 7 14 11 16.25 12 16.75c1-.5 5-2.75 5-6.013C17 9 15.964 7.5 14.2 7.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="heart-circle-filled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartCircleFilled;
