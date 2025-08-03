import * as React from "react";
import type { SVGProps } from "react";
const SvgUserRegular = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M8.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M4.743 21.106C5.176 18.073 8.266 15.75 12 15.75s6.823 2.323 7.257 5.356a.75.75 0 0 0 1.485-.212c-.567-3.967-4.476-6.644-8.742-6.644s-8.177 2.677-8.743 6.644a.75.75 0 0 0 1.485.212"
    />
  </svg>
);
export default SvgUserRegular;
