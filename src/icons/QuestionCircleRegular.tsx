import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestionCircleRegular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#question-circle-regular_svg__a)">
      <path d="M11 16.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M10.25 9.5a1.75 1.75 0 1 1 2.978 1.247c-.034.033-.114.088-.315.205l-.059.034a6 6 0 0 0-.59.373c-.49.36-1.014.94-1.014 1.891a.75.75 0 0 0 1.5 0c0-.298.128-.48.401-.682.136-.1.281-.183.455-.284l.064-.037c.17-.098.42-.243.61-.431a3.25 3.25 0 1 0-5.345-1.233.75.75 0 0 0 1.414-.5 1.8 1.8 0 0 1-.099-.583" />
      <path
        fillRule="evenodd"
        d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="question-circle-regular_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuestionCircleRegular;
