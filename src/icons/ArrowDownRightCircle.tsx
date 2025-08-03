import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRightCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#arrow-down-right-circle_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path d="M15.5 16.25a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-1.5 0v3.69L9.03 7.97a.75.75 0 0 0-1.06 1.06l5.72 5.72H10a.75.75 0 0 0 0 1.5z" />
    </g>
    <defs>
      <clipPath id="arrow-down-right-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownRightCircle;
