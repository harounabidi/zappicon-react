import * as React from "react";
import type { SVGProps } from "react";
const SvgCursorRegular = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.425 4.957C.61 2.754 2.755.61 4.957 1.425l15.997 5.913c2.504.926 2.352 4.519-.222 5.23l-5.715 1.577a1.25 1.25 0 0 0-.872.872l-1.577 5.715c-.711 2.574-4.304 2.726-5.23.222zm3.012-2.125c-1.001-.37-1.975.604-1.605 1.605l5.913 15.997c.421 1.138 2.054 1.069 2.377-.101l1.577-5.716a2.75 2.75 0 0 1 1.92-1.918l5.714-1.578c1.17-.322 1.239-1.955.1-2.376z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCursorRegular;
