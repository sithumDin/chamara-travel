import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="py-28">
      <Container>
        <Skeleton className="h-10 w-2/3 max-w-lg" />
        <Skeleton className="mt-4 h-5 w-1/2 max-w-sm" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="aspect-[4/3] w-full" />
          ))}
        </div>
      </Container>
    </div>
  );
}
