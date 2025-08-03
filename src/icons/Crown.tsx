import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.416 5.723a.5.5 0 0 0-.832 0l-3.471 5.206a.5.5 0 0 1-.673.152L3.257 8.57a.5.5 0 0 0-.75.511l1.582 9.493A3.5 3.5 0 0 0 7.541 21.5h8.918a3.5 3.5 0 0 0 3.452-2.925l1.582-9.493a.5.5 0 0 0-.75-.51L16.56 11.08a.5.5 0 0 1-.673-.152z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10 4.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M.5 7.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M19.5 7.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3.618 15.75h16.764l-.25 1.5H3.868z"
    />
  </svg>
);
export default SvgCrown;
