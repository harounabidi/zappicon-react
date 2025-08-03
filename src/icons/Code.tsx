import * as React from "react";
import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" opacity={0.4}>
      <path d="M6.7 8.714a1 1 0 1 0-1.4-1.428l-4 3.92a1 1 0 0 0-.014 1.414l4 4.08a1 1 0 0 0 1.428-1.4l-3.3-3.366zM18.7 7.285a1 1 0 0 0-1.4 1.43l3.286 3.216-3.3 3.37a1 1 0 1 0 1.428 1.399l4-4.084A1 1 0 0 0 22.7 11.2z" />
    </g>
    <path
      fill="currentColor"
      d="M14.243 3.03a1 1 0 0 1 .727 1.213l-4 16a1 1 0 0 1-1.94-.485l4-16a1 1 0 0 1 1.213-.728"
    />
  </svg>
);
export default SvgCode;
