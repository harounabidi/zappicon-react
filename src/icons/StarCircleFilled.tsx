import * as React from "react";
import type { SVGProps } from "react";
const SvgStarCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#star-circle-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12m10.737-4.864c.409-.848 1.617-.848 2.026 0l1.066 2.21 2.44.319c.942.123 1.318 1.285.626 1.935l-1.779 1.671.448 2.394c.174.928-.806 1.645-1.638 1.198L12 15.693l-2.176 1.17c-.832.447-1.812-.27-1.638-1.198l.448-2.394-1.779-1.67c-.692-.651-.316-1.813.625-1.936l2.441-.319z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="star-circle-filled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarCircleFilled;
