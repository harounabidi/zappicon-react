import * as React from "react";
import type { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.504 1.726C6.171.374 3.25 2.058 3.25 4.754v14.488c0 2.696 2.921 4.38 5.254 3.028l12.504-7.243c2.328-1.349 2.328-4.71 0-6.057z"
      opacity={0.4}
    />
  </svg>
);
export default SvgPlay;
