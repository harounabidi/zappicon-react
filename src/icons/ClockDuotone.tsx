import * as React from "react";
import type { SVGProps } from "react";
const SvgClockDuotone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#clock-duotone_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path d="M12 5.25a.75.75 0 0 1 .75.75v5.584l3.648 2.28a.75.75 0 1 1-.796 1.272l-4-2.5A.75.75 0 0 1 11.25 12V6a.75.75 0 0 1 .75-.75" />
    </g>
    <defs>
      <clipPath id="clock-duotone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockDuotone;
