import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#play-circle_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path d="M11.13 7.949a1.45 1.45 0 0 0-2.18 1.253v5.596a1.45 1.45 0 0 0 2.18 1.253l4.801-2.798a1.45 1.45 0 0 0 0-2.506z" />
    </g>
    <defs>
      <clipPath id="play-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayCircle;
