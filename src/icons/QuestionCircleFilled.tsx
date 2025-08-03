import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestionCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#question-circle-filled_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12M12 7.75a1.75 1.75 0 0 0-1.65 2.333.75.75 0 0 1-1.415.5 3.25 3.25 0 1 1 5.345 1.233c-.19.188-.44.333-.61.43l-.064.038c-.174.1-.32.185-.455.284-.273.201-.401.384-.401.682a.75.75 0 0 1-1.5 0c0-.952.524-1.531 1.014-1.891.206-.151.424-.277.59-.373l.059-.034c.201-.117.281-.172.315-.205A1.75 1.75 0 0 0 12 7.75m-1 8.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="question-circle-filled_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuestionCircleFilled;
