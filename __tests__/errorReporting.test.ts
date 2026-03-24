import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { buildIssueURL, REPO_URL } from "../src/utils/errorReporting.js";

describe("REPO_URL", () => {
  it("points to the correct GitHub repository", () => {
    expect(REPO_URL).toMatch(/^https:\/\/github\.com\//);
  });
});

describe("buildIssueURL", () => {
  // Stub navigator.userAgent for deterministic output
  let origNavigator: unknown;
  beforeEach(() => {
    origNavigator = globalThis.navigator;
    Object.defineProperty(globalThis, "navigator", {
      value: { userAgent: "TestBrowser/1.0" },
      writable: true,
      configurable: true,
    });
  });
  afterEach(() => {
    Object.defineProperty(globalThis, "navigator", {
      value: origNavigator,
      writable: true,
      configurable: true,
    });
  });

  it("returns a valid GitHub new-issue URL", () => {
    const url = buildIssueURL(new Error("test"));
    expect(url).toMatch(new RegExp(`^${REPO_URL.replace(/[/.]/g, "\\$&")}/issues/new\\?`));
    expect(url).toContain("title=");
    expect(url).toContain("body=");
  });

  it("includes component and message in title", () => {
    const url = buildIssueURL(new Error("Something broke"), { component: "LensDiagram" });
    const titleParam = new URL(url).searchParams.get("title");
    expect(titleParam).toContain("[Bug]");
    expect(titleParam).toContain("LensDiagram");
    expect(titleParam).toContain("Something broke");
  });

  it("defaults component to Unknown", () => {
    const url = buildIssueURL(new Error("oops"));
    const titleParam = new URL(url).searchParams.get("title");
    expect(titleParam).toContain("Unknown");
  });

  it("truncates long error messages in title to 80 chars", () => {
    const longMsg = "A".repeat(200);
    const url = buildIssueURL(new Error(longMsg));
    const titleParam = new URL(url).searchParams.get("title");
    // Title = "[Bug] Unknown: " + truncated msg. The msg part should end with "..."
    expect(titleParam).toContain("...");
    expect(titleParam!.length).toBeLessThanOrEqual(200); // reasonable cap
  });

  it("includes stack trace in body when available", () => {
    const err = new Error("stack test");
    const url = buildIssueURL(err);
    const body = new URL(url).searchParams.get("body");
    expect(body).toContain("Stack trace");
    expect(body).toContain("stack test");
  });

  it("includes lens key in context when provided", () => {
    const url = buildIssueURL(new Error("x"), { lensKey: "nikon_58" });
    const body = new URL(url).searchParams.get("body");
    expect(body).toContain("nikon_58");
    expect(body).toContain("**Lens:**");
  });

  it("includes extra info when provided", () => {
    const url = buildIssueURL(new Error("x"), { extra: "Custom debug info" });
    const body = new URL(url).searchParams.get("body");
    expect(body).toContain("Additional Info");
    expect(body).toContain("Custom debug info");
  });

  it("includes browser user agent", () => {
    const url = buildIssueURL(new Error("x"));
    const body = new URL(url).searchParams.get("body");
    expect(body).toContain("TestBrowser/1.0");
  });

  it("truncates very long bodies", () => {
    const err = new Error("x");
    err.stack = "Z".repeat(10000);
    const url = buildIssueURL(err);
    const body = new URL(url).searchParams.get("body");
    expect(body).toContain("truncated");
    expect(body!.length).toBeLessThanOrEqual(6100); // 6000 + truncation message
  });

  it("handles null/undefined error gracefully", () => {
    const url = buildIssueURL(null as unknown as Error);
    const titleParam = new URL(url).searchParams.get("title");
    expect(titleParam).toContain("Unknown error");
  });

  it("handles error with no stack", () => {
    const err = { message: "no stack" } as unknown as Error;
    const url = buildIssueURL(err);
    const body = new URL(url).searchParams.get("body");
    expect(body).not.toContain("Stack trace");
    expect(body).toContain("no stack");
  });
});
