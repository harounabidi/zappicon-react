import * as React from "react";
import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 14.25c-4.265 0-8.176 2.677-8.742 6.644A.75.75 0 0 0 4 21.75h16a.75.75 0 0 0 .742-.856c-.566-3.967-4.475-6.644-8.741-6.644"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5"
    />
  </svg>
);
export default SvgUser;
