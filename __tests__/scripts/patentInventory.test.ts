/**
 * Round trip between `scripts/update-patent-inventory.mjs`, which writes the committed patent filename
 * manifest, and `parsePatentInventory` in `reports/glassScanLib.ts`, which the patent-dependent report
 * scans read in CI. The two sides are separate files (an .mjs script and a TypeScript library), so this
 * pins the shared format and the add-only default that protects the list from partial checkouts.
 */
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execPath } from "node:process";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";
import { parsePatentInventory, PATENT_INVENTORY_PATH } from "../../reports/glassScanLib.js";

const SCRIPT = fileURLToPath(new URL("../../scripts/update-patent-inventory.mjs", import.meta.url));
const roots: string[] = [];

function checkout(pdfs: string[]): string {
  const root = mkdtempSync(join(tmpdir(), "patent-inventory-"));
  roots.push(root);
  mkdirSync(join(root, "patents"));
  for (const name of pdfs) writeFileSync(join(root, "patents", name), "");
  return root;
}

function run(root: string, ...args: string[]) {
  return spawnSync(execPath, [SCRIPT, ...args], { cwd: root, encoding: "utf8" });
}

const manifest = (root: string) => parsePatentInventory(readFileSync(join(root, PATENT_INVENTORY_PATH), "utf8"));

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe("patent inventory manifest", () => {
  it("records only PDF filenames, sorted, behind comment lines the parser skips", () => {
    const root = checkout(["US7158320.pdf", "JPA 1987244010-000000.pdf", "DE_1228820_B.PDF", "notes.txt"]);
    expect(run(root).status).toBe(0);
    expect(readFileSync(join(root, PATENT_INVENTORY_PATH), "utf8").startsWith("# ")).toBe(true);
    expect(manifest(root)).toEqual(["DE_1228820_B.PDF", "JPA 1987244010-000000.pdf", "US7158320.pdf"]);
  });

  it("adds names without dropping recorded ones unless --prune is passed", () => {
    const root = checkout(["A1.pdf", "B2.pdf"]);
    run(root);
    rmSync(join(root, "patents", "A1.pdf"));
    writeFileSync(join(root, "patents", "C3.pdf"), "");

    expect(run(root).status).toBe(0);
    expect(manifest(root)).toEqual(["A1.pdf", "B2.pdf", "C3.pdf"]);

    expect(run(root, "--prune").status).toBe(0);
    expect(manifest(root)).toEqual(["B2.pdf", "C3.pdf"]);
  });

  it("refuses to write when the checkout holds no PDFs", () => {
    const root = checkout([]);
    const result = run(root);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("no PDFs");
  });
});
