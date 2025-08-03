import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircleDuotoneLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#check-circle-duotone-line_svg__a)">
      <path
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11"
        opacity={0.4}
      />
      <path d="M16.854 9.354a.5.5 0 0 0-.708-.708L10.5 14.293l-2.646-2.647a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
      <path
        fillRule="evenodd"
        d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="check-circle-duotone-line_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckCircleDuotoneLine;
