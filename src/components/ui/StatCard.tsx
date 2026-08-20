export function StatCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-surface p-6 sm:p-7">
      <p className="eyebrow text-muted">{label}</p>
      <p className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">{value}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
