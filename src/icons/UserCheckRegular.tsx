import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCheckRegular = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M9 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M9 15.75c-3.734 0-6.824 2.323-7.257 5.356a.75.75 0 0 1-1.485-.212C.824 16.927 4.735 14.25 9 14.25s8.175 2.677 8.742 6.644a.75.75 0 0 1-1.485.212C15.824 18.073 12.735 15.75 9 15.75M23.53 9.53a.75.75 0 0 0-1.06-1.06l-3.97 3.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0z"
    />
  </svg>
);
export default SvgUserCheckRegular;
