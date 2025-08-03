import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#user-circle-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12a11.72 11.72 0 0 1-4.647 9.36A11.7 11.7 0 0 1 12 23.75a11.7 11.7 0 0 1-7.595-2.784A11.72 11.72 0 0 1 .25 12m8-1.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 16.25c2.395 0 5.204 1.24 6.807 3.414A10.2 10.2 0 0 1 12 22.25c-2.612 0-4.996-.977-6.806-2.586C6.796 17.489 9.605 16.25 12 16.25"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="user-circle-filled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserCircleFilled;
