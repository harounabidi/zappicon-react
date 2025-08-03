import * as React from "react";
import type { SVGProps } from "react";
const SvgEthereumCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#ethereum-circle_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path d="m15.294 12.237-3.03 1.752a.54.54 0 0 1-.542 0l-3.027-1.752a.54.54 0 0 1-.196-.742l3.027-5.185a.542.542 0 0 1 .936 0l3.029 5.185a.54.54 0 0 1-.197.742m-.073.98-3.024 1.75a.41.41 0 0 1-.408 0l-3.021-1.75c-.1-.057-.208.06-.144.154l2.92 4.347c.215.32.685.32.9 0l2.921-4.348c.064-.095-.044-.21-.144-.152" />
    </g>
    <defs>
      <clipPath id="ethereum-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEthereumCircle;
