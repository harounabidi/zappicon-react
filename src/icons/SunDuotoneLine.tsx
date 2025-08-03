import * as React from "react";
import type { SVGProps } from "react";
const SvgSunDuotoneLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      opacity={0.4}
    />
    <path fill="currentColor" d="M11.5 4.5a.5.5 0 1 0 1 0V2a.5.5 0 0 0-1 0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-4 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M22 12.5a.5.5 0 0 0 0-1h-2.5a.5.5 0 0 0 0 1zM1.5 12a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 0-1H2a.5.5 0 0 0-.5.5M12 22.5a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 1 1 1 0V22a.5.5 0 0 1-.5.5M19.425 5.283a.5.5 0 1 0-.707-.708L16.95 6.343a.5.5 0 0 0 .707.707zM5.282 4.575a.5.5 0 0 0-.707.708L6.343 7.05a.5.5 0 0 0 .707-.707zM7.05 17.657a.5.5 0 1 0-.707-.707l-1.768 1.768a.5.5 0 1 0 .707.707zM17.657 16.95a.5.5 0 1 0-.707.707l1.768 1.768a.5.5 0 1 0 .707-.707z"
    />
  </svg>
);
export default SvgSunDuotoneLine;
