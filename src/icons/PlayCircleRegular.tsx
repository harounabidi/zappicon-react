import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCircleRegular = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#play-circle-regular_svg__a)"
      clipRule="evenodd"
    >
      <path d="M11.382 7.517c-1.3-.758-2.932.18-2.932 1.685v5.596c0 1.505 1.632 2.443 2.932 1.685l4.801-2.798c1.291-.752 1.291-2.617 0-3.37zM9.95 9.202a.45.45 0 0 1 .677-.389l4.801 2.798a.45.45 0 0 1 0 .778l-4.801 2.798a.45.45 0 0 1-.677-.389z" />
      <path d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12" />
    </g>
    <defs>
      <clipPath id="play-circle-regular_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayCircleRegular;
