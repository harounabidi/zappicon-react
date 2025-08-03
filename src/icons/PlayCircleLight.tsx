import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCircleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="currentColor"
      fillRule="evenodd"
      clipPath="url(#play-circle-light_svg__a)"
      clipRule="evenodd"
    >
      <path d="M11.256 7.733C10.123 7.073 8.7 7.89 8.7 9.202v5.596c0 1.312 1.423 2.13 2.556 1.469l4.801-2.798a1.7 1.7 0 0 0 0-2.938zM9.7 9.202a.7.7 0 0 1 1.053-.605l4.8 2.798a.7.7 0 0 1 0 1.21l-4.8 2.798a.7.7 0 0 1-1.053-.605z" />
      <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12" />
    </g>
    <defs>
      <clipPath id="play-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayCircleLight;
