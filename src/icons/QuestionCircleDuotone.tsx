import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestionCircleDuotone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#question-circle-duotone_svg__a)">
      <path
        d="M12 .25C5.51.25.25 5.51.25 12S5.51 23.75 12 23.75 23.75 18.49 23.75 12 18.49.25 12 .25"
        opacity={0.4}
      />
      <path d="M10.25 9.5a1.75 1.75 0 1 1 2.978 1.247c-.034.033-.114.088-.315.205l-.059.034a6 6 0 0 0-.59.373c-.49.36-1.014.94-1.014 1.891a.75.75 0 0 0 1.5 0c0-.298.128-.48.401-.682.136-.1.281-.183.455-.284l.064-.037c.17-.098.42-.243.61-.431a3.25 3.25 0 1 0-5.345-1.233.75.75 0 0 0 1.414-.5 1.8 1.8 0 0 1-.099-.583M12 15.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </g>
    <defs>
      <clipPath id="question-circle-duotone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuestionCircleDuotone;
