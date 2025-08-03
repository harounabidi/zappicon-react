import * as React from "react";
import type { SVGProps } from "react";
const SvgAtRegular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.75 12a9.25 9.25 0 0 1 18.5 0c0 1.173-.212 2.138-.587 2.813-.362.652-.868 1.03-1.54 1.126-.667.095-1.239-.15-1.666-.606a2.73 2.73 0 0 1-.707-1.833V8.25a.75.75 0 0 0-1.5 0v.286a4.75 4.75 0 1 0 .325 6.592c.189.456.455.876.788 1.231.719.766 1.762 1.238 2.972 1.065 1.205-.172 2.085-.885 2.64-1.882.54-.973.775-2.215.775-3.542 0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75a.75.75 0 0 0 0-1.5A9.25 9.25 0 0 1 2.75 12m12.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAtRegular;
