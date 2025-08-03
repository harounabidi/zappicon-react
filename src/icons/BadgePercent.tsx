import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgePercent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#badge-percent_svg__a)">
      <path
        d="M15.466 2.095c-1.656-2.46-5.276-2.46-6.932 0l-.394.586-.693-.136c-2.91-.569-5.47 1.992-4.902 4.902l.136.693-.586.394c-2.46 1.656-2.46 5.276 0 6.932l.586.394-.136.693c-.569 2.91 1.992 5.47 4.902 4.902l.693-.136.394.586c1.656 2.46 5.276 2.46 6.932 0l.394-.586.693.136c2.91.569 5.47-1.992 4.902-4.902l-.136-.693.586-.394c2.46-1.656 2.46-5.276 0-6.932l-.586-.394.136-.693c.569-2.91-1.992-5.47-4.902-4.902l-.693.136z"
        opacity={0.4}
      />
      <path d="M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0M8.5 9.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M14.5 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </g>
    <defs>
      <clipPath id="badge-percent_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgePercent;
