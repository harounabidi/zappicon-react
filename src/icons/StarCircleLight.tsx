import * as React from "react";
import type { SVGProps } from "react";
const SvgStarCircleLight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#star-circle-light_svg__a)"
      clipRule="evenodd"
    >
      <path d="M13.013 7.136c-.409-.848-1.617-.848-2.026 0L9.92 9.346l-2.44.319c-.942.123-1.318 1.285-.626 1.935l1.779 1.671-.448 2.394c-.174.928.806 1.645 1.638 1.198L12 15.693l2.176 1.17c.832.447 1.812-.27 1.638-1.198l-.447-2.394 1.778-1.67c.692-.651.317-1.813-.625-1.936l-2.441-.319zm-1.126.435a.125.125 0 0 1 .226 0l1.065 2.21a1 1 0 0 0 .771.557l2.441.319a.125.125 0 0 1 .07.215l-1.778 1.67a1 1 0 0 0-.299.913l.448 2.393a.125.125 0 0 1-.182.133l-2.176-1.168a1 1 0 0 0-.946 0L9.35 15.98a.125.125 0 0 1-.182-.133l.448-2.393a1 1 0 0 0-.299-.912L7.54 10.872a.125.125 0 0 1 .07-.215l2.44-.319a1 1 0 0 0 .772-.557z" />
      <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12" />
    </g>
    <defs>
      <clipPath id="star-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarCircleLight;
