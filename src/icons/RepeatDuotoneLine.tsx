import * as React from "react";
import type { SVGProps } from "react";
const SvgRepeatDuotoneLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 19.5h6a7.5 7.5 0 0 0 0-15H9a7.5 7.5 0 0 0 0 15"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M14.646 8.354a.5.5 0 0 1 0-.708L16.793 5.5H9a6.5 6.5 0 0 0-5.335 10.214.5.5 0 1 1-.82.572A7.5 7.5 0 0 1 9 4.5h7.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0M9.354 15.646a.5.5 0 0 1 0 .708L7.207 18.5H15a6.5 6.5 0 0 0 5.335-10.214.5.5 0 0 1 .82-.572A7.5 7.5 0 0 1 15 19.5H7.207l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0"
    />
  </svg>
);
export default SvgRepeatDuotoneLine;
