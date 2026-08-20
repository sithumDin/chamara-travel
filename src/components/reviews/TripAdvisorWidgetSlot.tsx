// ---------------------------------------------------------------------------
// TRIPADVISOR WIDGET SLOT
//
// TripAdvisor does not offer a free public review API, so live reviews
// cannot be fetched at build/request time. Instead, use the official
// TripAdvisor Widget Center to generate an embeddable review widget:
//
//   1. Go to https://www.tripadvisor.com/Widgets/Create
//   2. Sign in as the business owner and choose a widget (e.g. "Review
//      Selector" or "Certificate of Excellence").
//   3. Configure it and copy the generated <script> + <div> embed snippet.
//   4. Paste that snippet in place of the placeholder <div> below.
//   5. Flip `features.showTripAdvisorWidget` to `true` in
//      /src/data/site-config.ts to render this slot on the Reviews section.
//
// This component intentionally does not fetch anything itself — the
// TripAdvisor script manages its own content once embedded.
// ---------------------------------------------------------------------------

export function TripAdvisorWidgetSlot() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
      {/* PASTE TRIPADVISOR WIDGET CENTER EMBED CODE HERE */}
      <p className="text-sm text-muted">
        TripAdvisor widget slot — paste your Widget Center embed code in{" "}
        <code className="rounded bg-paper px-1.5 py-0.5 text-xs">TripAdvisorWidgetSlot.tsx</code> and set{" "}
        <code className="rounded bg-paper px-1.5 py-0.5 text-xs">showTripAdvisorWidget</code> to{" "}
        <code className="rounded bg-paper px-1.5 py-0.5 text-xs">true</code>.
      </p>
    </div>
  );
}
