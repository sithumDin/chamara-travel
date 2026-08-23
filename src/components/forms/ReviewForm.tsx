"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle, Star } from "lucide-react";
import { reviewSchema, type ReviewFormValues } from "@/lib/validation";
import { countries } from "@/data/countries";
import { tours } from "@/data/tours";
import { FieldLabel, FieldError, TextInput, TextArea, Select } from "@/components/ui/fields";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ReviewForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 0, tourSlug: "", honeypot: "" },
  });

  async function onSubmit(values: ReviewFormValues) {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset({ rating: 0, tourSlug: "", honeypot: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-ink" aria-hidden="true" />
        <h3 className="text-xl font-medium text-ink">Thank you for your review!</h3>
        <p className="max-w-sm text-sm text-muted">
          We&apos;ve received it and will add it to the site after a quick read-through.
        </p>
        <Button variant="outline" size="md" className="mt-2" onClick={() => setStatus("idle")}>
          Write Another Review
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        <div>
          <FieldLabel htmlFor="guestName" required>
            Your Name
          </FieldLabel>
          <TextInput id="guestName" hasError={!!errors.guestName} {...register("guestName")} autoComplete="name" />
          <FieldError>{errors.guestName?.message}</FieldError>
        </div>
        <div>
          <FieldLabel htmlFor="email" required>
            Email
          </FieldLabel>
          <TextInput id="email" type="email" hasError={!!errors.email} {...register("email")} autoComplete="email" />
          <FieldError>{errors.email?.message}</FieldError>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        <div>
          <FieldLabel htmlFor="country" required>
            Country
          </FieldLabel>
          <Select id="country" hasError={!!errors.country} defaultValue="" {...register("country")}>
            <option value="" disabled>
              Select your country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
          <FieldError>{errors.country?.message}</FieldError>
        </div>
        <div>
          <FieldLabel htmlFor="tourSlug">Which Tour?</FieldLabel>
          <Select id="tourSlug" defaultValue="" {...register("tourSlug")}>
            <option value="">Not listed / other</option>
            {tours.map((t) => (
              <option key={t.slug} value={t.title}>
                {t.title}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="rating" required>
          Your Rating
        </FieldLabel>
        <Controller
          control={control}
          name="rating"
          render={({ field }) => (
            <div className="flex items-center gap-1" role="radiogroup" aria-label="Rating out of 5">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-label={`${value} star${value === 1 ? "" : "s"}`}
                  aria-pressed={field.value >= value}
                  onClick={() => field.onChange(value)}
                  className="p-1"
                >
                  <Star
                    className={cn(
                      "size-7 transition-colors",
                      field.value >= value ? "fill-ink text-ink" : "text-border"
                    )}
                  />
                </button>
              ))}
            </div>
          )}
        />
        <FieldError>{errors.rating?.message}</FieldError>
      </div>

      <div>
        <FieldLabel htmlFor="text" required>
          Your Review
        </FieldLabel>
        <TextArea
          id="text"
          hasError={!!errors.text}
          placeholder="How was your trip? What stood out, and what would you tell a friend considering booking?"
          {...register("text")}
        />
        <FieldError>{errors.text?.message}</FieldError>
      </div>

      {/* Honeypot — hidden from real visitors, bots often fill every field */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="reviewWebsite">Leave this field empty</label>
        <input id="reviewWebsite" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {status === "error" ? (
        <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Review"
        )}
      </Button>
    </form>
  );
}
