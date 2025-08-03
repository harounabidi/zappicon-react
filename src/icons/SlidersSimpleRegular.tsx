import * as React from "react";
import type { SVGProps } from "react";
const SvgSlidersSimpleRegular = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M1.25 6.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M5 4.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13 7.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5zM11 18.25a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 13.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-2.25 3.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSlidersSimpleRegular;
