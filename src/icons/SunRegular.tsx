import * as React from "react";
import type { SVGProps } from "react";
const SvgSunRegular = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.25 4.5a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-1.5 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M22 12.75a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5zM1.25 12c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0-.75.75M12 22.75a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0V22a.75.75 0 0 1-.75.75M5.46 4.399a.75.75 0 0 0-1.061 1.06l1.767 1.768a.75.75 0 0 0 1.061-1.06zM19.601 5.46a.75.75 0 1 0-1.06-1.061l-1.768 1.767a.75.75 0 0 0 1.06 1.061zM7.227 17.834a.75.75 0 1 0-1.06-1.061l-1.768 1.768a.75.75 0 0 0 1.06 1.06zM17.834 16.773a.75.75 0 1 0-1.061 1.06l1.768 1.768a.75.75 0 0 0 1.06-1.06z"
    />
  </svg>
);
export default SvgSunRegular;
