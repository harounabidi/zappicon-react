import * as React from "react";
import type { SVGProps } from "react";
const SvgWifiSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#wifi-slash_svg__a)">
      <g opacity={0.4}>
        <path d="M12 5a15.3 15.3 0 0 0-3.38.374 1 1 0 1 1-.443-1.95A17.3 17.3 0 0 1 12 3c4.569 0 8.725 1.75 11.714 4.8a1 1 0 1 1-1.428 1.4C19.686 6.546 16.05 5 12 5M6.318 4.992a1 1 0 0 1-.494 1.326A13.8 13.8 0 0 0 1.714 9.2 1 1 0 0 1 .286 7.8 15.8 15.8 0 0 1 4.992 4.5a1 1 0 0 1 1.326.493M12 15c-1.224 0-2.244.46-3.067 1.23a1 1 0 0 1-1.366-1.46C8.725 13.685 10.224 13 12 13a6.3 6.3 0 0 1 3.246.877 1 1 0 1 1-1.017 1.722A4.3 4.3 0 0 0 12 15" />
      </g>
      <path d="M1.707.293A1 1 0 0 0 .293 1.707l7.186 7.186a12 12 0 0 0-3.666 2.379 1 1 0 0 0 1.374 1.453 10 10 0 0 1 3.852-2.272l13.254 13.254a1 1 0 0 0 1.414-1.414L10.052 8.638l-.027-.027zM12.055 8.954a1 1 0 0 1 1.091-.899 11.9 11.9 0 0 1 7.041 3.219 1 1 0 0 1-1.374 1.452 9.9 9.9 0 0 0-5.858-2.68 1 1 0 0 1-.9-1.092" />
      <path d="M10.75 19a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" />
    </g>
    <defs>
      <clipPath id="wifi-slash_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWifiSlash;
