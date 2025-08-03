import * as React from "react";
import type { SVGProps } from "react";
const SvgPercentCircleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#percent-circle-light_svg__a)">
      <path d="M15.354 9.354a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708zM8.75 9.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M14.5 13.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" />
      <path
        fillRule="evenodd"
        d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="percent-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPercentCircleLight;
