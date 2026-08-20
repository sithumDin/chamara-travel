// Renders a single JSON-LD <script> tag. Pass any schema.org object built
// with the helpers in src/lib/schema.ts, or a hand-built object.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
