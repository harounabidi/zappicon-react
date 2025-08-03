import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRotateRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3c2.027 0 3.895.67 5.4 1.799.608.457 1.306 1.15 1.927 1.867.625.723 1.115 1.402 1.336 1.81a1 1 0 1 0 1.758-.953c-.32-.591-.916-1.396-1.582-2.166-.672-.775-1.474-1.583-2.238-2.157A10.96 10.96 0 0 0 12 1C5.925 1 1 5.925 1 12s4.925 11 11 11c4.927 0 9.095-3.238 10.496-7.7a1 1 0 1 0-1.908-.6A9 9 0 0 1 12 21a9 9 0 1 1 0-18"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22 9h-5.5a1 1 0 1 1 0-2H21V2.5a1 1 0 1 1 2 0V8a1 1 0 0 1-1 1"
    />
  </svg>
);
export default SvgArrowRotateRight;
