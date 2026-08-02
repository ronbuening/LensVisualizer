/**
 * errorBeacon — lightweight production error telemetry via GoatCounter events.
 *
 * Reports runtime errors as synthetic GoatCounter events under `/_error/<key>`
 * so error rates and offending lens keys become visible in the existing
 * analytics dashboard without new infrastructure. Messages are sanitized
 * (URLs, emails, and long opaque tokens stripped) and truncated before
 * sending. Startup events wait briefly for the async analytics script, and
 * beacons are deduped and capped per session so a render loop cannot flood
 * analytics.
 */

const MAX_MESSAGE_LENGTH = 120;
const MAX_KEY_LENGTH = 60;
const MAX_BEACONS_PER_SESSION = 20;
const RETRY_INTERVAL_MS = 100;
const RETRY_LIMIT = 300;

interface ErrorBeacon {
  path: string;
  title: string;
  event: true;
}

const sentPaths = new Set<string>();
const pendingBeacons = new Map<string, ErrorBeacon>();
let retryTimer: number | null = null;
let retryAttempts = 0;

/**
 * Strip potential PII and noise from an error message before it leaves the
 * browser: URLs, email addresses, and long opaque tokens (stack fragments,
 * base64 blobs, file paths) are replaced with placeholders, whitespace is
 * collapsed, and the result is truncated.
 *
 * @param message - raw error message
 * @returns sanitized message safe to send to analytics
 */
export function sanitizeErrorMessage(message: string): string {
  const cleaned = message
    .replace(/https?:\/\/\S+/gi, "<url>")
    .replace(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g, "<email>")
    .replace(/\S{40,}/g, "<token>")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.length > MAX_MESSAGE_LENGTH ? `${cleaned.slice(0, MAX_MESSAGE_LENGTH - 1)}…` : cleaned;
}

/**
 * Reduce a component name or lens key to a safe synthetic-path segment.
 *
 * @param key - component name or lens key
 * @returns lowercase slug limited to URL-safe characters
 */
export function errorBeaconKey(key: string): string {
  const slug = key
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, MAX_KEY_LENGTH);
  return slug || "unknown";
}

function describeError(error: unknown): string {
  if (error instanceof Error) return error.message || error.name;
  if (typeof error === "string") return error;
  try {
    return String(error);
  } catch {
    return "unserializable error";
  }
}

function sendErrorBeacon(beacon: ErrorBeacon): boolean {
  if (typeof window === "undefined" || !window.goatcounter?.count) return false;
  try {
    window.goatcounter.count(beacon);
    return true;
  } catch {
    return false;
  }
}

function stopRetryTimer(): void {
  if (retryTimer !== null && typeof window !== "undefined") window.clearInterval(retryTimer);
  retryTimer = null;
  retryAttempts = 0;
}

function flushPendingBeacons(): void {
  for (const [path, beacon] of pendingBeacons) {
    if (!sendErrorBeacon(beacon)) continue;
    pendingBeacons.delete(path);
    sentPaths.add(path);
  }
  if (pendingBeacons.size === 0) stopRetryTimer();
}

function schedulePendingBeaconFlush(): void {
  if (typeof window === "undefined" || retryTimer !== null) return;
  retryTimer = window.setInterval(() => {
    retryAttempts += 1;
    flushPendingBeacons();
    if (retryAttempts >= RETRY_LIMIT) stopRetryTimer();
  }, RETRY_INTERVAL_MS);
}

/**
 * Send one GoatCounter event for a runtime error. No-op outside production
 * builds, for repeat errors on the same synthetic path, and once the
 * per-session cap is reached. If the async analytics script is still loading,
 * retain the event for up to 30 seconds and flush it once count() is ready.
 *
 * @param source - where the error was caught (boundary or listener name)
 * @param error - the caught error or rejection reason
 * @param lensKey - offending lens key when known; preferred as the path segment
 */
export function reportErrorBeacon(source: string, error: unknown, lensKey?: string): void {
  if (!import.meta.env.PROD) return;
  if (typeof window === "undefined") return;
  flushPendingBeacons();
  const path = `/_error/${errorBeaconKey(lensKey || source)}`;
  if (sentPaths.has(path) || pendingBeacons.has(path)) return;
  if (sentPaths.size + pendingBeacons.size >= MAX_BEACONS_PER_SESSION) return;

  const beacon: ErrorBeacon = {
    path,
    title: sanitizeErrorMessage(`${source}: ${describeError(error)}`),
    event: true,
  };
  if (sendErrorBeacon(beacon)) {
    sentPaths.add(path);
    return;
  }

  pendingBeacons.set(path, beacon);
  schedulePendingBeaconFlush();
}

/**
 * Register window-level listeners so uncaught errors and unhandled promise
 * rejections outside React error boundaries are also beaconed.
 */
export function installGlobalErrorBeacons(): void {
  if (typeof window === "undefined") return;
  window.addEventListener("error", (event) => {
    reportErrorBeacon("window-error", event.error ?? event.message);
  });
  window.addEventListener("unhandledrejection", (event) => {
    reportErrorBeacon("unhandled-rejection", event.reason);
  });
}

/** Reset per-session dedupe state — for tests only. */
export function resetErrorBeaconSessionForTests(): void {
  stopRetryTimer();
  sentPaths.clear();
  pendingBeacons.clear();
}
