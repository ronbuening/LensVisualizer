import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const testsRoot = fileURLToPath(new URL(".", import.meta.url));

/**
 * Component tests must declare the jsdom environment on their first line —
 * the vitest default here is node, and a missing pragma fails at runtime with
 * confusing "document is not defined" errors instead of at review time.
 *
 * SSR-only tests that intentionally run under node (react-helmet-async only
 * fills its server context when no DOM is present) are listed here.
 */
const NODE_ENVIRONMENT_TSX_TESTS = new Set(["src/components/SEOHead.test.tsx"]);

// Assembled at runtime: writing the pragma literally would make vitest's
// environment scanner run THIS file under jsdom.
const JSDOM_PRAGMA = ["// @vitest", "-environment jsdom"].join("");

function collectTsxTests(dir: string): string[] {
  const found: string[] = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) found.push(...collectTsxTests(path));
    else if (name.endsWith(".test.tsx")) found.push(path);
  }
  return found;
}

describe("test-suite conventions", () => {
  it("every .test.tsx starts with the jsdom environment pragma", () => {
    const offenders = collectTsxTests(testsRoot)
      .filter((path) => !NODE_ENVIRONMENT_TSX_TESTS.has(relative(testsRoot, path)))
      .filter((path) => !readFileSync(path, "utf-8").startsWith(JSDOM_PRAGMA));
    expect(
      offenders.map((path) => relative(testsRoot, path)),
      `add \`${JSDOM_PRAGMA}\` as the first line, or allowlist genuine node-environment tests above`,
    ).toEqual([]);
  });
});
