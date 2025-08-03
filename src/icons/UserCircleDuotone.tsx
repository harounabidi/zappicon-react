import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircleDuotone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#user-circle-duotone_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path d="M12 6.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M12 16.25c-2.658 0-5.825 1.526-7.288 4.163l-.316.569.52.393A11.7 11.7 0 0 0 12 23.75c2.66 0 5.115-.885 7.085-2.375l.519-.393-.316-.57c-1.463-2.636-4.63-4.162-7.288-4.162" />
    </g>
    <defs>
      <clipPath id="user-circle-duotone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserCircleDuotone;
