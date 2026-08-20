import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted-light transition-colors focus:border-ink focus:outline-none";

export function FieldLabel({ htmlFor, children, required }: { htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
      {children}
      {required ? <span className="text-muted"> *</span> : null}
    </label>
  );
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-red-600">
      {children}
    </p>
  );
}

export const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }>(
  ({ className, hasError, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(fieldBase, hasError && "border-red-400 focus:border-red-500", className)}
      {...props}
    />
  )
);
TextInput.displayName = "TextInput";

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }>(
  ({ className, hasError, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(fieldBase, "min-h-32 resize-y", hasError && "border-red-400 focus:border-red-500", className)}
      {...props}
    />
  )
);
TextArea.displayName = "TextArea";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }>(
  ({ className, hasError, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(fieldBase, "appearance-none bg-no-repeat pr-10", hasError && "border-red-400 focus:border-red-500", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b6b60' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
        backgroundPosition: "right 0.9rem center",
      }}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";
