import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterRegular = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.25 4.121A2.87 2.87 0 0 1 4.121 1.25H19.88a2.871 2.871 0 0 1 2.03 4.902l-6.44 6.439a.75.75 0 0 0-.219.53V22a.75.75 0 0 1-1.219.586l-4.624-3.7a1.75 1.75 0 0 1-.657-1.367v-4.398a.75.75 0 0 0-.22-.53l-6.439-6.44a2.87 2.87 0 0 1-.841-2.03M4.121 2.75a1.371 1.371 0 0 0-.97 2.341l6.44 6.44c.422.421.659.994.659 1.59v4.398a.25.25 0 0 0 .094.196l3.406 2.724v-7.318c0-.596.237-1.169.659-1.59l6.44-6.44a1.371 1.371 0 0 0-.97-2.341z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilterRegular;
