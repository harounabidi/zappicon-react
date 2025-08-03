import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" opacity={0.4}>
      <path d="M22.543 10.807c-2.324-6.47-8.877-8.788-14.215-6.943a.75.75 0 0 0-.285 1.24l11.529 11.528a.75.75 0 0 0 1.119-.066c.76-.964 1.39-2.09 1.852-3.373a3.53 3.53 0 0 0 0-2.386M6.47 5.409a.75.75 0 0 0-.97-.078C3.75 6.595 2.312 8.426 1.457 10.807a3.53 3.53 0 0 0 0 2.386c2.758 7.68 11.46 9.505 17.043 5.476a.75.75 0 0 0 .091-1.139z" />
    </g>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l7.04 7.041A4.23 4.23 0 0 0 7.75 12c0 2.35 1.9 4.25 4.25 4.25.904 0 1.74-.281 2.429-.76l7.04 7.04a.75.75 0 1 0 1.061-1.06zm10.812 12.932-3.744-3.744A2.74 2.74 0 0 0 9.25 12 2.747 2.747 0 0 0 12 14.75c.488 0 .945-.126 1.342-.348"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16.243 12.243q.007-.12.007-.243a4.246 4.246 0 0 0-4.493-4.243z"
    />
  </svg>
);
export default SvgEyeSlash;
