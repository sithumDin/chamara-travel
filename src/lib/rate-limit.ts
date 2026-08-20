// Simple in-memory fixed-window rate limiter for the /api/inquiry route.
//
// Good enough to stop naive spam/bot floods on a single long-running server
// (e.g. a Vercel instance under normal load keeps this module warm between
// requests). It resets on cold starts, so it is not a substitute for a
// shared store (Upstash Redis, etc.) if you later run at high scale across
// many concurrent serverless instances.

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, { count: number; windowStart: number }>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(key, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}
