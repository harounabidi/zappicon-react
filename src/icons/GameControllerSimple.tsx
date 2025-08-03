import * as React from "react";
import type { SVGProps } from "react";
const SvgGameControllerSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 6.5a7.5 7.5 0 1 0 0 15h8a7.5 7.5 0 0 0 0-15z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17.75 2a.75.75 0 0 0-1.5 0c0 .69-.56 1.25-1.25 1.25h-1A2.75 2.75 0 0 0 11.25 6v1a.75.75 0 0 0 1.5 0V6c0-.69.56-1.25 1.25-1.25h1A2.75 2.75 0 0 0 17.75 2M17.5 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M14 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8.75 12a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H10a.75.75 0 0 0 0-1.5H8.75z"
    />
  </svg>
);
export default SvgGameControllerSimple;
