import type { SVGProps } from 'react';

export function SignStampIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="28" cy="28" r="27.5" stroke="currentColor" strokeOpacity="0.08" />
      <path
        d="M21.4407 34.5996L21.4384 34.5986L21.4375 34.6026L21.4407 34.5996Z"
        fill="currentColor"
      />
      <path
        d="M28.5 36H21C19.8954 36 19 35.1046 19 34V22C19 20.8954 19.8954 20 21 20H35C36.1046 20 37 20.8954 37 22V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 28H33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23 32H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M35 32L37 34L41 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}
