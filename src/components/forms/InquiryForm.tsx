"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { inquirySchema, type InquiryFormValues } from "@/lib/validation";
import { countries } from "@/data/countries";
import { tours } from "@/data/tours";
import { siteConfig } from "@/data/site-config";
import { FieldLabel, FieldError, TextInput, TextArea, Select } from "@/components/ui/fields";
import { Button } from "@/components/ui/Button";
import { fireInquiryConversion } from "@/lib/tracking";

type SubmitState = "idle" | "loading" | "success" | "error";

export function InquiryForm({ defaultTour }: { defaultTour?: string }) {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      interestedTour: defaultTour ?? "",
      adults: 2,
      children: 0,
      consent: undefined,
      honeypot: "",
    },
  });

  async function onSubmit(values: InquiryFormValues) {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      fireInquiryConversion();
      reset({ interestedTour: defaultTour ?? "", adults: 2, children: 0, consent: undefined, honeypot: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-ink" aria-hidden="true" />
        <h3 className="text-xl font-medium text-ink">Thank you — your inquiry is in!</h3>
        <p className="max-w-sm text-sm text-muted">
          We&apos;ve emailed you a confirmation. Our team will reply within 24 hours with a tailored plan.
        </p>
        <Button variant="outline" size="md" className="mt-2" onClick={() => setStatus("idle")}>
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="fullName" required>
            Full Name
          </FieldLabel>
          <TextInput id="fullName" hasError={!!errors.fullName} {...register("fullName")} autoComplete="name" />
          <FieldError>{errors.fullName?.message}</FieldError>
        </div>
        <div>
          <FieldLabel htmlFor="email" required>
            Email
          </FieldLabel>
          <TextInput id="email" type="email" hasError={!!errors.email} {...register("email")} autoComplete="email" />
          <FieldError>{errors.email?.message}</FieldError>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="phone">Phone / WhatsApp</FieldLabel>
          <TextInput id="phone" type="tel" placeholder="+1 555 123 4567" {...register("phone")} autoComplete="tel" />
          <FieldError>{errors.phone?.message}</FieldError>
        </div>
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
      </div>

      <div>
        <FieldLabel htmlFor="interestedTour" required>
          Interested Tour
        </FieldLabel>
        <Select id="interestedTour" hasError={!!errors.interestedTour} defaultValue={defaultTour ?? ""} {...register("interestedTour")}>
          <option value="" disabled>
            Select a tour
          </option>
          {tours.map((t) => (
            <option key={t.slug} value={t.title}>
              {t.title}
            </option>
          ))}
          <option value="Custom trip">Custom trip</option>
        </Select>
        <FieldError>{errors.interestedTour?.message}</FieldError>
      </div>

      <div className="grid gap-5 sm:grid-cols-4">
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="arrivalDate">Arrival Date</FieldLabel>
          <TextInput id="arrivalDate" type="date" {...register("arrivalDate")} />
        </div>
        <div>
          <FieldLabel htmlFor="numberOfDays"># of Days</FieldLabel>
          <TextInput id="numberOfDays" type="number" min={1} max={60} {...register("numberOfDays")} />
        </div>
        <div>
          <FieldLabel htmlFor="adults" required>
            Adults
          </FieldLabel>
          <TextInput id="adults" type="number" min={1} max={50} hasError={!!errors.adults} {...register("adults", { valueAsNumber: true })} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-4">
        <div>
          <FieldLabel htmlFor="children">Children</FieldLabel>
          <TextInput id="children" type="number" min={0} max={50} {...register("children", { valueAsNumber: true })} />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="message" required>
          Tell us about your trip
        </FieldLabel>
        <TextArea
          id="message"
          hasError={!!errors.message}
          placeholder="Dates you have in mind, places you'd love to see, pace you prefer, special occasions..."
          {...register("message")}
        />
        <FieldError>{errors.message?.message}</FieldError>
      </div>

      {/* Honeypot — hidden from real visitors, bots often fill every field */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div>
        <label htmlFor="consent" className="flex items-start gap-3 text-sm text-ink-soft">
          <input
            id="consent"
            type="checkbox"
            className="mt-0.5 size-4 rounded border-border text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
            {...register("consent")}
          />
          <span>
            I agree to be contacted by {siteConfig.businessName} about my inquiry, in line with the{" "}
            <a href="/privacy-policy" className="underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        <FieldError>{errors.consent?.message}</FieldError>
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
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}
