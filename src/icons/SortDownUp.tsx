import * as React from "react";
import type { SVGProps } from "react";
const SvgSortDownUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.386 14.059a2 2 0 0 0-2.772 0l-5.559 5.343C3.887 20.525 4.682 22.5 6.303 22.5h11.394c1.62 0 2.415-1.975 1.247-3.098z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13.386 9.941a2 2 0 0 1-2.772 0L5.055 4.598C3.887 3.474 4.682 1.5 6.303 1.5h11.394c1.62 0 2.415 1.974 1.247 3.098z"
    />
  </svg>
);
export default SvgSortDownUp;
