import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoCircleRegular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#info-circle-regular_svg__a)">
      <path d="M11 7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M10.5 10.25a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z" />
      <path
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="info-circle-regular_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInfoCircleRegular;
