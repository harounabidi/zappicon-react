import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpCircleDuotoneLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#arrow-up-circle-duotone-line_svg__a)">
      <path
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11"
        opacity={0.4}
      />
      <path d="M16.354 11.354a.5.5 0 0 1-.708 0L12.5 8.207V17a.5.5 0 0 1-1 0V8.207l-3.146 3.147a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708" />
      <path
        fillRule="evenodd"
        d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="arrow-up-circle-duotone-line_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowUpCircleDuotoneLine;
