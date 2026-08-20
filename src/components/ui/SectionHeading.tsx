import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "text-balance font-medium tracking-tight text-ink",
          align === "center" ? "mx-auto max-w-3xl" : "",
          "text-3xl sm:text-4xl lg:text-[2.75rem]"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "text-pretty text-base text-muted sm:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
