import { z } from "zod";

// Shared schema used by both the client-side inquiry form (React Hook Form)
// and the /api/inquiry route handler, so validation never drifts out of sync.
export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  country: z.string().trim().min(1, "Please select your country"),
  interestedTour: z.string().trim().min(1, "Please select a tour"),
  arrivalDate: z.string().trim().optional().or(z.literal("")),
  numberOfDays: z.string().trim().max(4).optional().or(z.literal("")),
  adults: z.number().int().min(1, "At least 1 adult is required").max(50),
  children: z.number().int().min(0).max(50),
  message: z.string().trim().min(10, "Please tell us a little about your trip").max(3000),
  consent: z.literal(true, {
    error: "Please confirm you agree to be contacted",
  }),
  // Honeypot — must stay empty. Real users never see or fill this field.
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

// Shared schema used by both the client-side review form (React Hook Form)
// and the /api/review route handler. Submissions are emailed to the business
// owner for manual moderation — see src/data/reviews.ts for why reviews are
// never auto-published from user input.
export const reviewSchema = z.object({
  guestName: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  country: z.string().trim().min(1, "Please select your country"),
  rating: z.number().int().min(1, "Please choose a rating").max(5),
  tourSlug: z.string().trim().optional().or(z.literal("")),
  text: z.string().trim().min(20, "Please share a few more details about your trip").max(2000),
  // Honeypot — must stay empty. Real users never see or fill this field.
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;
