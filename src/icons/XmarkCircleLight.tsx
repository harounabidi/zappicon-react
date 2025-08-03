import * as React from "react";
import type { SVGProps } from "react";
const SvgXmarkCircleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#xmark-circle-light_svg__a)">
      <path d="M15.354 15.354a.5.5 0 0 1-.708 0L12 12.707l-2.646 2.647a.5.5 0 0 1-.708-.708L11.293 12 8.646 9.354a.5.5 0 1 1 .708-.708L12 11.293l2.646-2.647a.5.5 0 1 1 .708.708L12.707 12l2.647 2.646a.5.5 0 0 1 0 .708" />
      <path
        fillRule="evenodd"
        d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="xmark-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXmarkCircleLight;
