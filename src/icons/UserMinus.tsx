import * as React from "react";
import type { SVGProps } from "react";
const SvgUserMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 14.25c-4.265 0-8.176 2.677-8.742 6.644A.75.75 0 0 0 1 21.75h16a.75.75 0 0 0 .742-.856C17.177 16.927 13.268 14.25 9 14.25"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M23 12.75a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5z"
    />
  </svg>
);
export default SvgUserMinus;
