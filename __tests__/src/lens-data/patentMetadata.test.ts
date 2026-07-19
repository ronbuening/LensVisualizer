import { describe, expect, it } from "vitest";
import type { LensDataInput } from "../../../src/types/optics.js";

const modules = import.meta.glob<{ default: LensDataInput }>("../../../src/lens-data/**/*.data.ts", { eager: true });

function expectCleanNames(path: string, field: "patentAuthors" | "patentAssignees", values: string[]): void {
  expect(new Set(values).size, `${path}: ${field} entries must be unique`).toBe(values.length);
  for (const value of values) {
    expect(value.trim(), `${path}: ${field} entries must be non-empty and trimmed`).toBe(value);
    expect(value, `${path}: ${field} must list every named party explicitly`).not.toMatch(/\bet al\.?\b/i);
  }
}

describe("lens patent metadata", () => {
  it("declares complete structured metadata on every patent-backed lens", () => {
    for (const [path, { default: data }] of Object.entries(modules)) {
      if (path.includes("/reference/")) continue;

      expect(data.patentNumber?.trim(), `${path}: patentNumber is required`).toBe(data.patentNumber);
      expect(Array.isArray(data.patentAuthors), `${path}: patentAuthors must be an array`).toBe(true);
      expect(Array.isArray(data.patentAssignees), `${path}: patentAssignees must be an array`).toBe(true);

      expectCleanNames(path, "patentAuthors", data.patentAuthors ?? []);
      expectCleanNames(path, "patentAssignees", data.patentAssignees ?? []);
    }
  });

  it("omits patent metadata from synthetic reference fixtures", () => {
    for (const [path, { default: data }] of Object.entries(modules)) {
      if (!path.includes("/reference/")) continue;

      expect(data.patentNumber, `${path}: patentNumber should be omitted`).toBeUndefined();
      expect(data.patentAuthors, `${path}: patentAuthors should be omitted`).toBeUndefined();
      expect(data.patentAssignees, `${path}: patentAssignees should be omitted`).toBeUndefined();
    }
  });
});
