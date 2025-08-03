import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPieSimpleDuotone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chart-pie-simple-duotone_svg__a)">
      <path
        d="M10.25 12.5V2.74l-.867.137C4.49 3.653.75 7.89.75 13c0 5.661 4.59 10.25 10.25 10.25 5.11 0 9.347-3.74 10.123-8.632l.138-.868H11.5c-.69 0-1.25-.56-1.25-1.25"
        opacity={0.4}
      />
      <path d="M11.532.761A1.234 1.234 0 0 0 10.25 2v10.5c0 .69.56 1.25 1.25 1.25H22c.682 0 1.27-.56 1.239-1.282C22.967 6.125 17.875 1.033 11.532.76" />
    </g>
    <defs>
      <clipPath id="chart-pie-simple-duotone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartPieSimpleDuotone;
