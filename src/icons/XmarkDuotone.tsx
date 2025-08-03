import * as React from "react";
import type { SVGProps } from "react";
const SvgXmarkDuotone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.707 19.707a1 1 0 0 1-1.414 0l-14-14a1 1 0 0 1 1.414-1.414l14 14a1 1 0 0 1 0 1.414"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19.707 4.293a1 1 0 0 1 0 1.414l-14 14a1 1 0 0 1-1.414-1.414l14-14a1 1 0 0 1 1.414 0"
    />
  </svg>
);
export default SvgXmarkDuotone;
