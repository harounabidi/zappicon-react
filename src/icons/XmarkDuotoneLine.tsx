import * as React from "react";
import type { SVGProps } from "react";
const SvgXmarkDuotoneLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.354 19.354a.5.5 0 0 1-.708 0l-14-14a.5.5 0 1 1 .708-.708l14 14a.5.5 0 0 1 0 .708"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19.354 4.646a.5.5 0 0 1 0 .708l-14 14a.5.5 0 0 1-.708-.708l14-14a.5.5 0 0 1 .708 0"
    />
  </svg>
);
export default SvgXmarkDuotoneLine;
