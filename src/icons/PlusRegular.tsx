import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusRegular = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 20a.75.75 0 0 0 1.5 0v-7.25H20a.75.75 0 0 0 0-1.5h-7.25V4a.75.75 0 0 0-1.5 0v7.25H4a.75.75 0 0 0 0 1.5h7.25z"
    />
  </svg>
);
export default SvgPlusRegular;
