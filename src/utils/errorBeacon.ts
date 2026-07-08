/**
 * errorBeacon — lightweight production error telemetry via GoatCounter events.
 *
 * Reports runtime errors as synthetic GoatCounter events under `/_error/<key>`
 * so error rates and offending lens keys become visible in the existing
 * analytics dashboard without new infrastructure. Messages are sanitized
 * (URLs, emails, and long opaque tokens stripped) and truncated before
 * sending, and beacons are deduped and capped per session so a render loop
 * cannot flood analytics.
 */

const MAX_MESSAGE_LENGTH = 120;
const MAX_KEY_LENGTH = 60;
const MAX_BEACONS_PER_SESSION = 20;

const sentPaths = new Set<string>();

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

/**
 * Send one GoatCounter event for a runtime error. No-op outside production
 * builds, when the analytics script is unavailable, for repeat errors on the
 * same synthetic path, and once the per-session cap is reached.
 *
 * @param source - where the error was caught (boundary or listener name)
 * @param error - the caught error or rejection reason
 * @param lensKey - offending lens key when known; preferred as the path segment
 */
export function reportErrorBeacon(source: string, error: unknown, lensKey?: string): void {
  if (!import.meta.env.PROD) return;
  if (typeof window === "undefined" || !window.goatcounter?.count) return;
  const path = `/_error/${errorBeaconKey(lensKey || source)}`;
  if (sentPaths.has(path) || sentPaths.size >= MAX_BEACONS_PER_SESSION) return;
  sentPaths.add(path);
  try {
    window.goatcounter.count({
      path,
      title: sanitizeErrorMessage(`${source}: ${describeError(error)}`),
      event: true,
    });
  } catch {
    /* Telemetry must never throw back into the app. */
  }
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
  sentPaths.clear();
}
