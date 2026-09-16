import { siteConfig } from "@/data/site-config";
import type { InquiryFormValues, ReviewFormValues } from "./validation";

async function getGmailTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;
  if (!user || !pass) {
    throw new Error(
      "GMAIL_USER / GMAIL_PASS are not set. Add them to .env.local (see .env.example) to enable inquiry emails."
    );
  }
  const nodemailerSpecifier = "nodemailer";
  const { default: nodemailer } = await import(/* webpackIgnore: true */ nodemailerSpecifier);
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
    // Force IPv4 — avoids slow/failed connections on networks where IPv6
    // is advertised but not actually routable to smtp.gmail.com.
    family: 4,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 12px;color:#6b6b64;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:8px 12px;color:#171712;font-size:14px;">${value}</td>
    </tr>`;
}

function businessNotificationHtml(data: InquiryFormValues) {
  const travellers = `${data.adults} adult${data.adults === 1 ? "" : "s"}${
    data.children ? `, ${data.children} child${data.children === 1 ? "" : "ren"}` : ""
  }`;

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f7f7f4;padding:32px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ececE6;">
      <div style="background:#171712;padding:24px 28px;">
        <p style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">New Trip Inquiry</p>
        <p style="margin:4px 0 0;color:#c8c8c0;font-size:13px;">${siteConfig.businessName}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", escapeHtml(data.fullName))}
        ${row("Email", `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`)}
        ${row("Phone / WhatsApp", escapeHtml(data.phone || "—"))}
        ${row("Country", escapeHtml(data.country))}
        ${row("Interested Tour", escapeHtml(data.interestedTour))}
        ${row("Arrival Date", escapeHtml(data.arrivalDate || "Not specified"))}
        ${row("Trip Length", data.numberOfDays ? `${data.numberOfDays} days` : "Not specified")}
        ${row("Travellers", travellers)}
      </table>
      <div style="padding:16px 12px 24px;">
        <p style="margin:0 0 6px;padding:0 12px;color:#6b6b64;font-size:13px;">Message</p>
        <p style="margin:0;padding:12px;background:#f7f7f4;border-radius:12px;color:#171712;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
          data.message
        )}</p>
      </div>
    </div>
  </div>`;
}

function guestThankYouHtml(data: InquiryFormValues) {
  const travellers = `${data.adults} adult${data.adults === 1 ? "" : "s"}${
    data.children ? `, ${data.children} child${data.children === 1 ? "" : "ren"}` : ""
  }`;

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f7f7f4;padding:32px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ececE6;">
      <div style="background:#171712;padding:32px 28px;">
        <p style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">Thank you, ${escapeHtml(
          data.fullName.split(" ")[0] || data.fullName
        )}!</p>
      </div>
      <div style="padding:28px;">
        <p style="margin:0 0 16px;color:#171712;font-size:15px;line-height:1.7;">
          We've received your inquiry about <strong>${escapeHtml(
            data.interestedTour
          )}</strong> and will get back to you within 24 hours with a tailored plan.
        </p>
        <p style="margin:0 0 20px;color:#171712;font-size:15px;line-height:1.7;">
          In the meantime, feel free to reach out directly on WhatsApp at
          <strong>${escapeHtml(siteConfig.phone)}</strong> if you have any urgent questions.
        </p>
        <p style="margin:0 0 6px;color:#6b6b64;font-size:13px;">Here's a summary of what you sent us</p>
        <table style="width:100%;border-collapse:collapse;background:#f7f7f4;border-radius:12px;overflow:hidden;">
          ${row("Tour", escapeHtml(data.interestedTour))}
          ${row("Arrival Date", escapeHtml(data.arrivalDate || "Not specified"))}
          ${row("Trip Length", data.numberOfDays ? `${data.numberOfDays} days` : "Not specified")}
          ${row("Travellers", travellers)}
          ${row("Phone / WhatsApp", escapeHtml(data.phone || "—"))}
        </table>
        <div style="padding:16px 0 0;">
          <p style="margin:0 0 6px;color:#6b6b64;font-size:13px;">Your message</p>
          <p style="margin:0;padding:12px;background:#f7f7f4;border-radius:12px;color:#171712;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
            data.message
          )}</p>
        </div>
        <p style="margin:20px 0 0;color:#6b6b64;font-size:14px;">— ${escapeHtml(siteConfig.businessName)}</p>
      </div>
    </div>
  </div>`;
}

export async function sendInquiryEmails(data: InquiryFormValues) {
  const transporter = await getGmailTransporter();
  const fromAddress = `${siteConfig.businessName} <${process.env.GMAIL_USER}>`;

  await Promise.all([
    transporter.sendMail({
      from: fromAddress,
      to: siteConfig.email,
      replyTo: data.email,
      subject: `New Inquiry: ${data.interestedTour} — ${data.fullName}`,
      html: businessNotificationHtml(data),
    }),
    transporter.sendMail({
      from: fromAddress,
      to: data.email,
      subject: `We've received your inquiry — ${siteConfig.businessName}`,
      html: guestThankYouHtml(data),
    }),
  ]);
}

function reviewNotificationHtml(data: ReviewFormValues) {
  const stars = "★".repeat(data.rating) + "☆".repeat(5 - data.rating);

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f7f7f4;padding:32px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ececE6;">
      <div style="background:#171712;padding:24px 28px;">
        <p style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">New Website Review Submitted</p>
        <p style="margin:4px 0 0;color:#c8c8c0;font-size:13px;">Review this before adding it to the live site</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", escapeHtml(data.guestName))}
        ${row("Email", `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`)}
        ${row("Country", escapeHtml(data.country))}
        ${row("Rating", `${stars} (${data.rating}/5)`)}
        ${row("Tour", escapeHtml(data.tourSlug || "Not specified"))}
      </table>
      <div style="padding:16px 12px 24px;">
        <p style="margin:0 0 6px;padding:0 12px;color:#6b6b64;font-size:13px;">Review Text</p>
        <p style="margin:0;padding:12px;background:#f7f7f4;border-radius:12px;color:#171712;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
          data.text
        )}</p>
      </div>
    </div>
  </div>`;
}

function reviewThankYouHtml(data: ReviewFormValues) {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f7f7f4;padding:32px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ececE6;">
      <div style="background:#171712;padding:32px 28px;">
        <p style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">Thank you, ${escapeHtml(
          data.guestName.split(" ")[0] || data.guestName
        )}!</p>
      </div>
      <div style="padding:28px;">
        <p style="margin:0;color:#171712;font-size:15px;line-height:1.7;">
          We've received your review and really appreciate you taking the time to share it. Our team will read it
          over and add it to the site shortly.
        </p>
        <p style="margin:16px 0 0;color:#6b6b64;font-size:14px;">— ${escapeHtml(siteConfig.businessName)}</p>
      </div>
    </div>
  </div>`;
}

export async function sendReviewEmails(data: ReviewFormValues) {
  const transporter = await getGmailTransporter();
  const fromAddress = `${siteConfig.businessName} <${process.env.GMAIL_USER}>`;

  await Promise.all([
    transporter.sendMail({
      from: fromAddress,
      to: siteConfig.email,
      replyTo: data.email,
      subject: `New Review Submitted — ${data.guestName} (${data.rating}/5)`,
      html: reviewNotificationHtml(data),
    }),
    transporter.sendMail({
      from: fromAddress,
      to: data.email,
      subject: `Thanks for your review — ${siteConfig.businessName}`,
      html: reviewThankYouHtml(data),
    }),
  ]);
}
