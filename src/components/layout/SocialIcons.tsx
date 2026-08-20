// lucide-react no longer ships brand/logo icons, so these three social
// marks are small local SVGs instead.
import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23 12s0-3.4-.43-5.03a2.9 2.9 0 0 0-2.04-2.06C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.53.41A2.9 2.9 0 0 0 1.43 6.97C1 8.6 1 12 1 12s0 3.4.43 5.03a2.9 2.9 0 0 0 2.04 2.06c1.63.41 8.53.41 8.53.41s6.9 0 8.53-.41a2.9 2.9 0 0 0 2.04-2.06C23 15.4 23 12 23 12Z" />
      <path d="M9.8 15.3V8.7l5.8 3.3-5.8 3.3Z" fill="#171712" />
    </svg>
  );
}
