import * as React from "react";
import type { SVGProps } from "react";
const SvgStopwatchRegular = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 9a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 2.25v1.528a9.7 9.7 0 0 1 5.32 2.091l1.4-1.4a.75.75 0 1 1 1.06 1.061L19.17 6.892A9.72 9.72 0 0 1 21.75 13.5c0 5.385-4.365 9.75-9.75 9.75s-9.75-4.365-9.75-9.75c0-5.132 3.966-9.339 9-9.722V2.25H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5zm-9 11.25a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopwatchRegular;
