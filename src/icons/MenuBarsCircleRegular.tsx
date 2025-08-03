import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuBarsCircleRegular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#menu-bars-circle-regular_svg__a)">
      <path d="M8 7.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 15.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" />
      <path
        fillRule="evenodd"
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="menu-bars-circle-regular_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMenuBarsCircleRegular;
