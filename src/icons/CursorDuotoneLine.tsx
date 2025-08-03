import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorDuotoneLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.128 4.697c-.592-1.602.967-3.16 2.569-2.569l15.997 5.914c1.821.673 1.71 3.286-.162 3.803l-5.714 1.577a2 2 0 0 0-1.396 1.395l-1.577 5.716c-.517 1.871-3.13 1.982-3.803.16z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.66 4.87C.92 2.868 2.868.92 4.87 1.66l15.997 5.913c2.277.842 2.139 4.108-.201 4.753l-5.715 1.578a1.5 1.5 0 0 0-1.046 1.046l-1.578 5.716c-.646 2.34-3.912 2.478-4.754.201zm2.864-2.273c-1.202-.444-2.37.725-1.927 1.927L8.511 20.52c.505 1.366 2.464 1.283 2.852-.12l1.578-5.716a2.5 2.5 0 0 1 1.744-1.744l5.715-1.577c1.403-.388 1.486-2.347.12-2.852z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCursorDuotoneLine;
