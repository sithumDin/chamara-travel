import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary: "bg-ink text-white hover:bg-ink-soft",
  white: "bg-white text-ink hover:bg-white/90",
  outline: "bg-transparent text-ink border border-ink/20 hover:border-ink/60",
  "outline-white": "bg-transparent text-white border border-white/40 hover:border-white",
  accent:
    "bg-accent text-white shadow-lg shadow-accent/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-deep hover:shadow-xl hover:shadow-accent/40",
} as const;

const sizeClasses = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
} as const;

type Variant = keyof typeof variantClasses;
type Size = keyof typeof sizeClasses;

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
