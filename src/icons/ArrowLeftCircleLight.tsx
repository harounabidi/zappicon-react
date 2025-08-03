import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftCircleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#arrow-left-circle-light_svg__a)">
      <path d="M11.354 7.646a.5.5 0 0 1 0 .708L8.207 11.5H17a.5.5 0 0 1 0 1H8.207l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0" />
      <path
        fillRule="evenodd"
        d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="arrow-left-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowLeftCircleLight;
