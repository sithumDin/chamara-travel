// ---------------------------------------------------------------------------
// TRIPADVISOR WIDGET SLOT
//
// Renders the Elfsight "Reviews from Tripadvisor" widget. The Elfsight
// platform script is loaded once via next/script and the widget mounts
// itself into the div below based on the app id.
// ---------------------------------------------------------------------------

import Script from "next/script";

export function TripAdvisorWidgetSlot() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" async />
      <div className="elfsight-app-fb055630-b092-451c-a71e-37dd72d1230d" data-elfsight-app-lazy />
    </>
  );
}
