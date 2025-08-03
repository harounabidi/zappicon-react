import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationPinLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.25A8.75 8.75 0 0 0 3.25 10c0 4.207 2.676 7.175 4.53 9.232l.162.18c.683.758 2.26 2.22 3.05 2.945.571.523 1.444.523 2.015 0 .79-.725 2.368-2.187 3.05-2.945l.155-.172c1.776-1.97 4.538-5.032 4.538-9.24A8.75 8.75 0 0 0 12 1.25"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M14.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </svg>
);
export default SvgLocationPinLine;
