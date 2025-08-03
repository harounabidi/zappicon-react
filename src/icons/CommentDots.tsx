import * as React from "react";
import type { SVGProps } from "react";
const SvgCommentDots = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 2.042.57 3.952 1.56 5.58l-.783 2.15c-.507 1.396.847 2.75 2.243 2.242l2.15-.782c1.628.99 3.538 1.56 5.58 1.56 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M16 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgCommentDots;
