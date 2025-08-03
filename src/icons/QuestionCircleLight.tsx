import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestionCircleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#question-circle-light_svg__a)">
      <path d="M11.125 16.5a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0M10 9.5a2 2 0 1 1 3.403 1.425c-.06.06-.168.13-.365.243l-.06.035a6 6 0 0 0-.566.357c-.454.334-.912.847-.912 1.69a.5.5 0 0 0 1 0c0-.407.194-.656.504-.883.146-.108.304-.2.476-.299l.06-.035c.175-.101.399-.232.565-.395A3 3 0 1 0 9.17 10.5a.5.5 0 0 0 .943-.333A2 2 0 0 1 10 9.5" />
      <path
        fillRule="evenodd"
        d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="question-circle-light_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuestionCircleLight;
