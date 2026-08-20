import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-xl font-semibold tracking-tight",
        dark ? "text-ink" : "text-white",
        className
      )}
    >
      chamara<span className={dark ? "text-muted" : "text-white/60"}>.</span>
    </Link>
  );
}
