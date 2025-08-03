import * as React from "react";
import type { SVGProps } from "react";
const SvgDroplet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.887 1.62a1.246 1.246 0 0 0-1.774 0C9.2 3.556 7.367 5.564 6.013 7.677 4.656 9.793 3.75 12.06 3.75 14.5c0 4.281 3.297 8.25 8.25 8.25s8.25-3.969 8.25-8.25c0-2.441-.906-4.707-2.263-6.824-1.355-2.113-3.187-4.121-5.1-6.055"
      opacity={0.4}
    />
  </svg>
);
export default SvgDroplet;
