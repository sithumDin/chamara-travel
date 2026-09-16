import Link from "next/link";
import { cn } from "@/lib/utils";

// The source artwork is navy-on-transparent. `dark` means "rendered over a
// light background, keep the navy" — omit it (or pass false) on any dark
// surface (footer, mobile nav, transparent header over the hero) and the
// logo is inverted to white via filter, since we only have one PNG.
export function Logo({
  className,
  imgClassName,
  dark,
  onClick,
}: {
  className?: string;
  imgClassName?: string;
  dark?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link href="/" onClick={onClick} className={cn("block shrink-0", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo.png"
        alt="Sri Lanka Tours with Chamara"
        width={2172}
        height={724}
        className={cn("h-12 w-auto sm:h-14", !dark && "brightness-0 invert", imgClassName)}
      />
    </Link>
  );
}
