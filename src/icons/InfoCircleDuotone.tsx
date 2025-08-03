import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoCircleDuotone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#info-circle-duotone_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path d="M12 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M10.5 10.25a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z" />
    </g>
    <defs>
      <clipPath id="info-circle-duotone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInfoCircleDuotone;
