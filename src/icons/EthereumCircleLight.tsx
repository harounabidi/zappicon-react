import * as React from "react";
import type { SVGProps } from "react";
const SvgEthereumCircleLight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ethereum-circle-light_svg__a)"
      clipRule="evenodd"
    >
      <path d="m12.823 6.571 2.968 4.92a1.5 1.5 0 0 1-.04 1.613l-2.95 4.384-.006.009c-.391.527-1.22.601-1.61-.027l-2.938-4.366a1.5 1.5 0 0 1-.04-1.613l2.971-4.92A.96.96 0 0 1 12 6.083c.341 0 .646.188.822.488m-3.75 5.422L12 7.145l2.925 4.847-2.927 1.673zm5.191 1.529-1.769 1.01a1 1 0 0 1-.992 0l-1.77-1.01L12 16.889z" />
      <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5" />
    </g>
    <defs>
      <clipPath id="ethereum-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEthereumCircleLight;
