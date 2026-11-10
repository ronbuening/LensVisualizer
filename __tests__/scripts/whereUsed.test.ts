/**
 * where-used answers from TypeScript's `findReferences` and a syntactic scan of scripts. This pins
 * the hop grep cannot follow — a barrel re-export — next to a direct import, on a five-file synthetic
 * project, so a TypeScript upgrade that changes alias resolution or reference grouping fails here
 * instead of silently dropping call sites from the tool's answer.
 */

import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { findUsages, type UsageSite } from "../../scripts/where-used.mjs";

const FIXTURE: Record<string, string> = {
  "tsconfig.json": JSON.stringify({
    compilerOptions: { target: "ES2022", lib: ["ES2022"], module: "ESNext", moduleResolution: "bundler", types: [] },
    include: ["src"],
  }),
  "src/impl.ts": "export function helper(): number {\n  return 1;\n}\n",
  "src/barrel.ts": 'export { helper } from "./impl.js";\n',
  "src/direct.ts": 'import { helper } from "./impl.js";\n\nexport const direct = helper();\n',
  "src/viaBarrel.ts": 'import { helper } from "./barrel.js";\n\nexport const viaBarrel = helper();\n',
  // Outside tsconfig's include, so only the script scan can see it.
  "scripts/tool.mjs": 'import { helper } from "../src/barrel.js";\n\nconsole.log(helper());\n',
};

let root = "";
const locations = (sites: UsageSite[]) => sites.map((site) => `${site.file}:${site.line}`);

beforeAll(() => {
  root = mkdtempSync(join(tmpdir(), "where-used-"));
  for (const [relativePath, text] of Object.entries(FIXTURE)) {
    mkdirSync(dirname(join(root, relativePath)), { recursive: true });
    writeFileSync(join(root, relativePath), text, "utf-8");
  }
});

afterAll(() => rmSync(root, { recursive: true, force: true }));

describe("where-used", () => {
  it("follows a symbol queried at its barrel back to the declaration and out to every caller", () => {
    const result = findUsages({ root, target: "src/barrel.ts", symbol: "helper" });
    expect(locations(result.declarations)).toEqual(["src/impl.ts:1"]);
    expect(locations(result.reexports)).toEqual(["src/barrel.ts:1"]);
    // Call sites only: the declaration and the import lines are not uses.
    expect(locations(result.references)).toEqual(["src/direct.ts:3", "src/viaBarrel.ts:3", "scripts/tool.mjs:3"]);
  });

  it("separates a file's direct importers from imports of its declarations through a barrel", () => {
    const result = findUsages({ root, target: "src/impl.ts" });
    expect(locations(result.references)).toEqual(["src/barrel.ts:1", "src/direct.ts:1"]);
    expect(locations(result.throughReexports)).toEqual(["src/viaBarrel.ts:1", "scripts/tool.mjs:1"]);
  });
});
