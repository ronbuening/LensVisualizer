// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  errorBeaconKey,
  installGlobalErrorBeacons,
  reportErrorBeacon,
  resetErrorBeaconSessionForTests,
  sanitizeErrorMessage,
} from "../../../src/utils/errorBeacon.js";

function installGoatCounterMock() {
  const count = vi.fn();
  window.goatcounter = { count };
  return count;
}

afterEach(() => {
  vi.unstubAllEnvs();
  resetErrorBeaconSessionForTests();
  delete window.goatcounter;
});

describe("sanitizeErrorMessage", () => {
  it("strips URLs, emails, and long opaque tokens", () => {
    const message = sanitizeErrorMessage(
      "Failed to fetch https://example.com/secret?id=42 for user@example.com token aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    );
    expect(message).toBe("Failed to fetch <url> for <email> token <token>");
  });

  it("collapses whitespace and truncates long messages", () => {
    const message = sanitizeErrorMessage(`${"word ".repeat(60)}\n\tend`);
    expect(message.length).toBeLessThanOrEqual(120);
    expect(message).not.toMatch(/\s{2}|\n/);
  });
});

describe("errorBeaconKey", () => {
  it("slugifies component names and lens keys into path-safe segments", () => {
    expect(errorBeaconKey("CanonTSE90mmf28L")).toBe("canontse90mmf28l");
    expect(errorBeaconKey("Lens Diagram / Panel!")).toBe("lens-diagram-panel");
    expect(errorBeaconKey("///")).toBe("unknown");
  });
});

describe("reportErrorBeacon", () => {
  it("does nothing outside production builds", () => {
    const count = installGoatCounterMock();
    reportErrorBeacon("error-boundary", new Error("boom"));
    expect(count).not.toHaveBeenCalled();
  });

  it("sends one sanitized GoatCounter event per synthetic path in production", () => {
    vi.stubEnv("PROD", true);
    const count = installGoatCounterMock();

    reportErrorBeacon("lens-diagram-panel", new Error("trace failed"), "CanonTSE90mmf28L");
    reportErrorBeacon("lens-diagram-panel", new Error("trace failed again"), "CanonTSE90mmf28L");

    expect(count).toHaveBeenCalledTimes(1);
    expect(count).toHaveBeenCalledWith({
      path: "/_error/canontse90mmf28l",
      title: "lens-diagram-panel: trace failed",
      event: true,
    });
  });

  it("falls back to the source name when no lens key is given", () => {
    vi.stubEnv("PROD", true);
    const count = installGoatCounterMock();

    reportErrorBeacon("error-boundary", "string reason");

    expect(count).toHaveBeenCalledWith({
      path: "/_error/error-boundary",
      title: "error-boundary: string reason",
      event: true,
    });
  });
});

describe("installGlobalErrorBeacons", () => {
  it("beacons window error and unhandledrejection events", () => {
    vi.stubEnv("PROD", true);
    const count = installGoatCounterMock();
    installGlobalErrorBeacons();

    window.dispatchEvent(new ErrorEvent("error", { error: new Error("uncaught boom") }));
    // jsdom lacks a PromiseRejectionEvent constructor; a plain event with a reason field matches the listener's usage.
    const rejection = new Event("unhandledrejection") as Event & { reason?: unknown };
    rejection.reason = new Error("rejected boom");
    window.dispatchEvent(rejection);

    expect(count).toHaveBeenCalledWith({
      path: "/_error/window-error",
      title: "window-error: uncaught boom",
      event: true,
    });
    expect(count).toHaveBeenCalledWith({
      path: "/_error/unhandled-rejection",
      title: "unhandled-rejection: rejected boom",
      event: true,
    });
  });
});
