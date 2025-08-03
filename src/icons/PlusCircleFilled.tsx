import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#plus-circle-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12M12 16.75a.75.75 0 0 1-.75-.75v-3.25H8a.75.75 0 0 1 0-1.5h3.25V8a.75.75 0 0 1 1.5 0v3.25H16a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-.75.75"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="plus-circle-filled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlusCircleFilled;
