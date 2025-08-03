import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoinCircleLight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bitcoin-circle-light_svg__a)"
      clipRule="evenodd"
    >
      <path d="M8.75 8a.5.5 0 0 0 0 1h.586v6H8.75a.5.5 0 0 0 0 1H10v1a.5.5 0 0 0 1 0v-1h1v1a.5.5 0 0 0 1 0v-1h.5a2.25 2.25 0 0 0 .959-4.286A2.25 2.25 0 0 0 13 8.014V7a.5.5 0 0 0-1 0v1h-1V7a.5.5 0 0 0-1 0v1zm4.75 7a1.25 1.25 0 1 0 0-2.5h-3.164V15zm-3.164-6h2.414a1.25 1.25 0 0 1 .011 2.5h-2.425z" />
      <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12" />
    </g>
    <defs>
      <clipPath id="bitcoin-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBitcoinCircleLight;
