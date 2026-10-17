import { describe, expect, it } from "vitest";
import { lensDataVersion } from "../../../src/optics/lensDataConversion.js";

const CATALOG = import.meta.glob<{ default: object }>("../../../src/lens-data/**/*.{data,teleconverter}.ts", {
  eager: true,
});

describe("catalog schema version", () => {
  it("discovers catalog files", () => {
    expect(Object.keys(CATALOG).length).toBeGreaterThan(0);
  });

  it.each(Object.entries(CATALOG).sort(([a], [b]) => a.localeCompare(b)))("%s is V2", (_path, file) => {
    expect(lensDataVersion(file.default), "Run npm run organize:lens-data and review the conversion report").toBe(2);
  });
});
