import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.25 12A2.747 2.747 0 0 1 12 9.25 2.747 2.747 0 0 1 14.75 12 2.747 2.747 0 0 1 12 14.75 2.747 2.747 0 0 1 9.25 12"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.457 10.807c3.62-10.076 17.467-10.076 21.086 0 .276.77.276 1.616 0 2.386-3.62 10.076-17.467 10.076-21.086 0a3.53 3.53 0 0 1 0-2.386M12 7.75c-2.35 0-4.25 1.9-4.25 4.25s1.9 4.25 4.25 4.25 4.25-1.9 4.25-4.25-1.9-4.25-4.25-4.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEyeFilled;
