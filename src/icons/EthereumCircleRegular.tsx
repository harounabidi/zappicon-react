import * as React from "react";
import type { SVGProps } from "react";
const SvgEthereumCircleRegular = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ethereum-circle-regular_svg__a)"
      clipRule="evenodd"
    >
      <path d="m12.93 6.507 2.968 4.92c.326.54.31 1.222-.043 1.746l-2.952 4.387-.008.011c-.435.586-1.37.68-1.816-.034l-2.936-4.364a1.63 1.63 0 0 1-.042-1.747l2.97-4.919c.198-.334.54-.549.93-.549.388 0 .731.215.929.55m-3.684 5.44L12 7.388l2.752 4.56L12 13.521zm4.616 1.949-1.305.745c-.346.198-.77.198-1.116 0l-1.305-.745 1.863 2.769z" />
      <path d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75" />
    </g>
    <defs>
      <clipPath id="ethereum-circle-regular_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEthereumCircleRegular;
