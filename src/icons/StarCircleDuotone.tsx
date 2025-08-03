import * as React from "react";
import type { SVGProps } from "react";
const SvgStarCircleDuotone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#star-circle-duotone_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path d="M13.014 7.136a1.125 1.125 0 0 0-2.027 0L9.92 9.346l-2.44.319c-.942.123-1.318 1.285-.626 1.935l1.779 1.671-.448 2.394c-.174.928.806 1.645 1.638 1.198L12 15.693l2.176 1.17c.832.447 1.812-.27 1.638-1.198l-.447-2.394 1.778-1.67c.692-.651.317-1.813-.625-1.936l-2.441-.319z" />
    </g>
    <defs>
      <clipPath id="star-circle-duotone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarCircleDuotone;
