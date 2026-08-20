"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center py-28">
        <Container className="text-center">
          <p className="eyebrow text-muted">Something went wrong</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            We hit a snag loading this page
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Please try again, or head back to the homepage. If this keeps happening, get in touch and
            we&apos;ll help directly.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button onClick={reset} variant="primary" size="lg">
              Try Again
            </Button>
            <Button href="/" variant="outline" size="lg">
              Back to Home
            </Button>
          </div>
        </Container>
      </main>
    </>
  );
}
