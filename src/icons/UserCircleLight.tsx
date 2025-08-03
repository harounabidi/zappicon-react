import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircleLight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#user-circle-light_svg__a)"
      clipRule="evenodd"
    >
      <path d="M12 7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-2.5 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0" />
      <path d="M12 23.5a11.45 11.45 0 0 0 6.943-2.331A11.48 11.48 0 0 0 23.5 12C23.5 5.649 18.351.5 12 .5S.5 5.649.5 12 5.649 23.5 12 23.5m0-22C6.201 1.5 1.5 6.201 1.5 12c0 3.223 1.452 6.107 3.739 8.034 1.517-2.24 4.355-3.534 6.76-3.534 2.407 0 5.245 1.294 6.763 3.533A10.48 10.48 0 0 0 22.5 12c0-5.799-4.701-10.5-10.5-10.5m0 21c-2.216 0-4.271-.686-5.965-1.858C7.335 18.682 9.864 17.5 12 17.5s4.665 1.182 5.965 3.142A10.45 10.45 0 0 1 12 22.5" />
    </g>
    <defs>
      <clipPath id="user-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserCircleLight;
