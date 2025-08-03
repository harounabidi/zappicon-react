import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoinCircleDuotone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#bitcoin-circle-duotone_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path
        fillRule="evenodd"
        d="M10.5 6.375c.345 0 .625.28.625.625v.75h.75V7a.625.625 0 1 1 1.25 0v.778a2.5 2.5 0 0 1 1.707 3.856A2.5 2.5 0 0 1 13.5 16.25h-.375V17a.625.625 0 1 1-1.25 0v-.75h-.75V17a.625.625 0 1 1-1.25 0v-.75H8.75a.75.75 0 0 1 0-1.5h.336v-5.5H8.75a.75.75 0 0 1 0-1.5h1.125V7c0-.345.28-.625.625-.625m.086 2.875v2h2.174a1 1 0 0 0-.01-2zm0 3.5v2H13.5a1 1 0 1 0 0-2h-2.914"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="bitcoin-circle-duotone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBitcoinCircleDuotone;
