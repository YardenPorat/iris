import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ClockFilled = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 64 64" ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.6666 32C58.6666 46.7276 46.7275 58.6667 31.9999 58.6667C17.2723 58.6667 5.33325 46.7276 5.33325 32C5.33325 17.2724 17.2723 5.33334 31.9999 5.33334C46.7275 5.33334 58.6666 17.2724 58.6666 32ZM31.9999 16C33.4727 16 34.6666 17.1939 34.6666 18.6667V30.6666L44.2667 37.8667C45.4449 38.7503 45.6837 40.4218 44.8001 41.6C43.9164 42.7782 42.245 43.017 41.0667 42.1333L30.4313 34.1567C30.3624 34.1066 30.2961 34.0532 30.2325 33.9969C29.9941 33.7863 29.8015 33.5408 29.6567 33.274C29.4504 32.8954 29.3333 32.4614 29.3333 32V31.9987V31.9972V18.6667C29.3333 17.1939 30.5272 16 31.9999 16Z"
      />
    </svg>
  )
);