import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetooth = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.571 22.904a1 1 0 0 0 1.062-.13l5.5-4.5a1 1 0 0 0 .074-1.481l-5.5-5.5a1 1 0 0 0-1.415 0l-6 6a1 1 0 1 0 1.415 1.414l4.292-4.293V22a1 1 0 0 0 .572.904M13 14.414l3.012 3.012L13 19.89z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.572 1.096a1 1 0 0 1 1.061.13l5.5 4.5a1 1 0 0 1 .074 1.481l-5.5 5.5a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L11 9.586V2a1 1 0 0 1 .572-.904M13 9.586l3.012-3.012L13 4.11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBluetooth;
