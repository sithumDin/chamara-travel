import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center py-28">
        <Container className="text-center">
          <p className="eyebrow text-muted">404</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            This page has wandered off the map
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to planning your trip.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button href="/tours" variant="outline" size="lg">
              View Tour Packages
            </Button>
          </div>
        </Container>
      </main>
    </>
  );
}
