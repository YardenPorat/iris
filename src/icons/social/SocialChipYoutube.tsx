import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const SocialChipYoutube = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <rect width={20} height={20} rx={2} ry={2} fill="red" />
      <path
        d="M8.42 12.18l4-2.08-4-2.1zM10 5h2.71c.87 0 1.5 0 1.91.08h1.13l.24.07.23.11a1.4 1.4 0 0 1 .26.16 1.7 1.7 0 0 1 .24.22l.13.16a2 2 0 0 1 .24.48 2.87 2.87 0 0 1 .22.85c.05.35.08.73.11 1.13s0 .72 0 .95v1.46a16.38 16.38 0 0 1-.15 2.42 3.06 3.06 0 0 1-.2.83 2.26 2.26 0 0 1-.27.51l-.12.14a1.26 1.26 0 0 1-.24.22 1 1 0 0 1-.26.16 2 2 0 0 1-.23.1l-.24.07h-.53q-2.09.15-5.22.15l-3-.05-1.66.16h-.71l-.45-.08a2.51 2.51 0 0 1-.43-.18 1.62 1.62 0 0 1-.47-.34l-.13-.15a3.67 3.67 0 0 1-.24-.49 3.24 3.24 0 0 1-.22-.84c0-.36-.08-.74-.1-1.14s0-.72 0-.94V9.68a16.25 16.25 0 0 1 .15-2.41 3.25 3.25 0 0 1 .21-.83 2.16 2.16 0 0 1 .27-.52l.11-.14.24-.22a1.83 1.83 0 0 1 .26-.16L4 5.29l.24-.07h.53Q6.82 5 10 5z"
        fill="#fff"
      />
    </svg>
  ),
);