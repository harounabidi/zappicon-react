import * as React from "react";
import type { SVGProps } from "react";
const SvgChartColumnRegular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 1.25a.75.75 0 0 1 .75.75v16.5a2.75 2.75 0 0 0 2.75 2.75H22a.75.75 0 0 1 0 1.5H5.5a4.25 4.25 0 0 1-4.25-4.25V2A.75.75 0 0 1 2 1.25"
    />
    <path
      fill="currentColor"
      d="M7.25 17v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0M11.25 7v10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0M15.25 17v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0M19.25 17a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0z"
    />
  </svg>
);
export default SvgChartColumnRegular;
