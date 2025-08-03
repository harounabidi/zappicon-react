import * as React from "react";
import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.25a7.32 7.32 0 0 0-7.29 6.657l-.178 1.957a11.4 11.4 0 0 1-1.865 5.283l-.033.05a2.285 2.285 0 0 0 1.901 3.553h14.93a2.285 2.285 0 0 0 1.901-3.553l-.033-.05a11.4 11.4 0 0 1-1.865-5.283l-.178-1.957A7.32 7.32 0 0 0 12 1.25"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M9.026 19.85a.75.75 0 0 1 1.025.274 2.249 2.249 0 0 0 3.899 0 .75.75 0 0 1 1.298.751 3.749 3.749 0 0 1-6.496 0 .75.75 0 0 1 .274-1.024"
    />
  </svg>
);
export default SvgBell;
