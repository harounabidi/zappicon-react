import * as React from "react";
import type { SVGProps } from "react";
const SvgBankLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M12.5 6a.5.5 0 1 0-1 0v1.5a.5.5 0 0 0 1 0z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.646 1.993a3 3 0 0 0-3.293 0L2.29 7.287c-1.452.954-.777 3.213.96 3.213H20.75c1.737 0 2.413-2.26.96-3.213zm-2.744.836a2 2 0 0 1 2.195 0l8.063 5.294c.623.409.333 1.377-.412 1.377H3.252c-.745 0-1.034-.968-.412-1.377z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18.75 12.5a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5M14.75 13a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zM9.75 12.5a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5M5.75 13a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zM3 19a.5.5 0 0 1 .5-.5h17a.5.5 0 1 1 0 1h-17A.5.5 0 0 1 3 19M2 21.5a.5.5 0 0 0 0 1h20a.5.5 0 1 0 0-1z"
    />
  </svg>
);
export default SvgBankLight;
