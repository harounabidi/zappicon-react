import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 1a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.473 17.888q.782-.633 1.415-1.415l4.82 4.82a1 1 0 0 1-1.415 1.414z"
    />
  </svg>
);
export default SvgSearch;
