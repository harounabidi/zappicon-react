import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.957 1.425C2.755.61.611 2.755 1.425 4.957L7.34 20.954c.926 2.504 4.518 2.352 5.229-.222l1.578-5.715a1.25 1.25 0 0 1 .871-.872l5.715-1.578c2.574-.71 2.727-4.303.222-5.229z"
    />
  </svg>
);
export default SvgCursorFilled;
