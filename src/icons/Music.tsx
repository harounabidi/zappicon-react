import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.19 1.327a2 2 0 0 1 2.56 1.92V15.5a.75.75 0 0 1-1.5 0V8l-10.5 3.062V19.5a.75.75 0 0 1-1.5 0V6.58a2.75 2.75 0 0 1 1.98-2.64z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M20.602 13.156c-1.45-1.208-3.754-1.208-5.203 0-.744.62-1.149 1.465-1.149 2.344s.405 1.724 1.149 2.344c1.45 1.208 3.753 1.208 5.203 0 .743-.62 1.148-1.466 1.148-2.344 0-.879-.405-1.724-1.148-2.344M8.601 17.156c-1.45-1.208-3.753-1.208-5.202 0-.744.62-1.149 1.466-1.149 2.344s.405 1.724 1.149 2.344c1.45 1.208 3.753 1.208 5.202 0 .744-.62 1.149-1.466 1.149-2.344s-.405-1.724-1.149-2.344"
    />
  </svg>
);
export default SvgMusic;
