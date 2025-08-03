import * as React from "react";
import type { SVGProps } from "react";
const SvgChartColumnFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 1a1 1 0 0 1 1 1v16.5A2.5 2.5 0 0 0 5.5 21H22a1 1 0 1 1 0 2H5.5A4.5 4.5 0 0 1 1 18.5V2a1 1 0 0 1 1-1"
    />
    <path
      fill="currentColor"
      d="M7 17v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0M12 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1M15 17v-6a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0M19 17a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0z"
    />
  </svg>
);
export default SvgChartColumnFilled;
