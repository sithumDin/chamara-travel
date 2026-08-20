import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { inquirySchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { sendInquiryEmails } from "@/lib/email";

export async function POST(request: Request) {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const result = inquirySchema.safeParse(json);
  if (!result.success) {
    return NextResponse.json(
      { message: "Please check the form for errors and try again.", issues: result.error.issues },
      { status: 400 }
    );
  }

  const data = result.data;

  // Honeypot tripped — silently accept without sending email, to avoid
  // tipping off bots while not wasting a real send.
  if (data.honeypot) {
    return NextResponse.json({ message: "ok" }, { status: 200 });
  }

  try {
    await sendInquiryEmails(data);
  } catch (error) {
    console.error("Failed to send inquiry emails:", error);
    return NextResponse.json(
      { message: "We couldn't send your inquiry right now. Please email us directly or try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Inquiry received." }, { status: 200 });
}
