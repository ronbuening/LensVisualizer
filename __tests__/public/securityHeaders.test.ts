import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const headers = readFileSync(new URL("../../public/_headers", import.meta.url).pathname, "utf8");

describe("deployment security headers", () => {
  it.each([
    "Content-Security-Policy:",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "script-src 'self'",
    "X-Content-Type-Options: nosniff",
    "Referrer-Policy: strict-origin-when-cross-origin",
    "Permissions-Policy:",
  ])("includes %s", (directive) => expect(headers).toContain(directive));

  it("does not permit inline scripts or dynamic code evaluation", () => {
    const scriptPolicy = headers.match(/script-src ([^;]+)/)?.[1];
    expect(scriptPolicy).not.toMatch(/'unsafe-inline'|'unsafe-eval'/);
  });

  it.each(["https://gc.zgo.at", "https://static.cloudflareinsights.com"])(
    "allows the deployed analytics script %s",
    (source) => expect(headers.match(/script-src ([^;]+)/)?.[1]).toContain(source),
  );

  it.each(["https://ronbuening.goatcounter.com", "https://cloudflareinsights.com"])(
    "allows the deployed analytics endpoint %s",
    (source) => expect(headers.match(/connect-src ([^;]+)/)?.[1]).toContain(source),
  );

  it.each(["/feeds/lenses.xml", "/feeds/articles.xml", "/feeds/changelog.xml"])(
    "serves %s with the RSS MIME type",
    (path) => {
      const escapedPath = path.replaceAll("/", "\\/");
      expect(headers).toMatch(new RegExp(`${escapedPath}\\s+Content-Type: application/rss\\+xml; charset=UTF-8`));
    },
  );
});
