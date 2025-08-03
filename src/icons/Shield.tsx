import * as React from "react";
import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.919 1.212a4.25 4.25 0 0 0-3.841 0L2.983 4.808A2.25 2.25 0 0 0 1.75 6.814V8.84c0 .503.102 1.492.216 2.465.267 2.262 1.14 4.396 2.456 6.233a16.74 16.74 0 0 0 5.851 5.087l.749.392c.611.32 1.341.32 1.953 0l.75-.393a16.75 16.75 0 0 0 5.848-5.082c1.319-1.84 2.194-3.977 2.461-6.243.115-.97.216-1.957.216-2.459V6.815a2.25 2.25 0 0 0-1.233-2.008z"
      opacity={0.4}
    />
  </svg>
);
export default SvgShield;
