import { cn } from "@/lib/utils";

// Colors each word from dim to bright based on an external 0-1 progress
// value, so a parent can drive the reveal from whatever scroll math it
// needs (e.g. a pinned full-bleed section) rather than this component
// tracking its own position in the page.
export function ScrollBrightenText({
  text,
  progress,
  className,
  dimClassName = "text-white/25",
  brightClassName = "text-white",
}: {
  text: string;
  progress: number;
  className?: string;
  dimClassName?: string;
  brightClassName?: string;
}) {
  const words = text.split(" ");
  const litCount = Math.round(progress * words.length);

  return (
    <p className={className}>
      {words.map((word, i) => (
        <span key={i} className={cn("transition-colors duration-300", i < litCount ? brightClassName : dimClassName)}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
