/** Inventory completeness must not be confused with verified optical configurations. */
import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { sourceStateInventory, sourceStateCandidates } from "../../scripts/source-state-inventory.mjs";

describe("source state inventory", () => {
  const entries = [
    { file: "reference/z.data.ts", data: { key: "z", visible: false } },
    { file: "maker/b.data.ts", data: { key: "b", visible: false } },
    { file: "maker/a.data.ts", data: { key: "a" } },
  ];
  it("sorts deterministically and keeps full counts under filters", () => {
    const all = sourceStateInventory(entries);
    expect(all.inventory).toEqual({ total: 3, visible: 1, hiddenProduction: 1, referenceFixtures: 1 });
    expect(all.lenses.map((l) => l.key)).toEqual(["a", "b", "z"]);
    expect(sourceStateInventory(entries, { lensKey: "b" }).lenses.map((l) => l.key)).toEqual(["b"]);
    expect(sourceStateInventory(entries, { limit: 1 }).inventory).toEqual(all.inventory);
    expect(sourceStateInventory(entries, { limit: 0 }).selected).toBe(0);
    expect(() => sourceStateInventory(entries, { lensKey: "missing" })).toThrow("Unknown lens");
    expect(() => sourceStateInventory(entries, { limit: NaN })).toThrow("Invalid inventory");
  });
  it("does not certify missing metadata or invent a moving focus endpoint", () => {
    expect(
      sourceStateInventory(entries).lenses.every((l) => l.states.length === 0 && l.unverifiedCandidates === 1),
    ).toBe(true);
    expect(
      sourceStateCandidates({
        zoomPositions: [24, 70],
        var: {
          "1": [
            [2, 2],
            [3, 3],
          ],
        },
      }),
    ).toEqual([
      { focusT: 0, zoomT: 0 },
      { focusT: 0, zoomT: 1 },
    ]);
    expect(
      sourceStateCandidates({ focusPositions: [0, 0.7, 1], var: { "1": [2, 3, 4] } }).map((c) => c.focusT),
    ).toEqual([0, 0.7, 1]);
  });
  it("runs the actual CLI and reconciles all source files including hidden entries", () => {
    const report = JSON.parse(
      execFileSync(
        "node",
        ["--import", "./scripts/ts-js-specifier-hook-register.mjs", "scripts/audit-mtf.mjs", "--source-states"],
        { encoding: "utf8", maxBuffer: 8 * 1024 * 1024 },
      ),
    );
    const files = readdirSync("src/lens-data", { recursive: true }).filter((f) => String(f).endsWith(".data.ts"));
    expect(report.inventory.total).toBe(files.length);
    expect(report.selected).toBe(files.length);
    expect(new Set(report.lenses.map((l: { key: string }) => l.key)).size).toBe(files.length);
    expect(report.inventory.visible + report.inventory.hiddenProduction + report.inventory.referenceFixtures).toBe(
      files.length,
    );
  });
});
