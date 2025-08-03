import * as React from "react";
import type { SVGProps } from "react";
const SvgVectorSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" opacity={0.4}>
      <path d="M5.75 4.25a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75M4.25 5.75A.75.75 0 0 1 5 6.5v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75M19.75 5.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75M5.75 19.75A.75.75 0 0 1 6.5 19h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75" />
    </g>
    <path
      fill="currentColor"
      d="M18.75 1.5A1.75 1.75 0 0 0 17 3.25v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-2a1.75 1.75 0 0 0-1.75-1.75zM18.75 17A1.75 1.75 0 0 0 17 18.75v2c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-2A1.75 1.75 0 0 0 20.75 17zM3.25 17a1.75 1.75 0 0 0-1.75 1.75v2c0 .966.784 1.75 1.75 1.75h2A1.75 1.75 0 0 0 7 20.75v-2A1.75 1.75 0 0 0 5.25 17zM3.25 1.5A1.75 1.75 0 0 0 1.5 3.25v2C1.5 6.216 2.284 7 3.25 7h2A1.75 1.75 0 0 0 7 5.25v-2A1.75 1.75 0 0 0 5.25 1.5z"
    />
  </svg>
);
export default SvgVectorSquare;
