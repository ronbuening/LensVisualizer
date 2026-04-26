import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  MAKER_PREFIXES,
  collectLensData,
  collectRootLensMovePlan,
  deriveMakerSlug,
  organizeRootLensFiles,
} from "../scripts/lens-data-lib.mjs";
import runtimeMakerPrefixes from "../src/generated/maker-prefixes.json";

function createTempLensDataDir() {
  const rootDir = mkdtempSync(join(tmpdir(), "lens-data-scripts-"));
  const lensDataDir = join(rootDir, "src", "lens-data");
  mkdirSync(lensDataDir, { recursive: true });
  return { rootDir, lensDataDir };
}

function writeLensDataFile(filePath: string, { key, name, maker }: { key: string; name: string; maker?: string }) {
  writeFileSync(
    filePath,
    [
      'import type { LensDataInput } from "../types/optics.js";',
      "",
      "const LENS_DATA = {",
      `  key: "${key}",`,
      maker ? `  maker: "${maker}",` : null,
      `  name: "${name}",`,
      "  surfaces: [],",
      "  elements: [],",
      "} satisfies LensDataInput;",
      "",
      "export default LENS_DATA;",
      "",
    ]
      .filter((line): line is string => Boolean(line))
      .join("\n"),
    "utf-8",
  );
}

const tempRoots: string[] = [];

afterEach(() => {
  while (tempRoots.length > 0) {
    const rootDir = tempRoots.pop();
    if (rootDir) rmSync(rootDir, { recursive: true, force: true });
  }
});

describe("lens-data scripts", () => {
  it("keeps generated runtime maker prefixes in sync with the script source", () => {
    expect(runtimeMakerPrefixes).toEqual(MAKER_PREFIXES);
  });

  it("derives canonical maker slugs from maker fields and fallback names", () => {
    expect(deriveMakerSlug("Carl Zeiss Jena")).toBe("carl-zeiss-jena");
    expect(deriveMakerSlug("Carl Zeiss")).toBe("carl-zeiss-oberkochen");
    expect(deriveMakerSlug("Canon Demo Lens")).toBe("canon");
    expect(deriveMakerSlug("Acme Prototype 50 mm")).toBe("acme");
  });

  it("plans paired data and analysis moves into canonical maker folders", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);

    writeLensDataFile(join(lensDataDir, "TestLens.data.ts"), {
      key: "test-lens",
      maker: "Carl Zeiss Jena",
      name: "CARL ZEISS JENA TEST LENS",
    });
    writeFileSync(join(lensDataDir, "TestLens.analysis.md"), "# Test lens analysis\n", "utf-8");
    writeFileSync(join(lensDataDir, "defaults.ts"), "export default {};\n", "utf-8");

    const movePlan = collectRootLensMovePlan(lensDataDir);

    expect(movePlan).toHaveLength(1);
    expect(movePlan[0].makerSlug).toBe("carl-zeiss-jena");
    expect(movePlan[0].data.to).toBe(join(lensDataDir, "carl-zeiss-jena", "TestLens.data.ts"));
    expect(movePlan[0].analysis?.to).toBe(join(lensDataDir, "carl-zeiss-jena", "TestLens.analysis.md"));
  });

  it("falls back to the lens name when maker is omitted", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);

    writeLensDataFile(join(lensDataDir, "CanonDemo.data.ts"), {
      key: "canon-demo",
      name: "Canon Demo Lens",
    });

    const movePlan = collectRootLensMovePlan(lensDataDir);

    expect(movePlan).toHaveLength(1);
    expect(movePlan[0].makerSlug).toBe("canon");
    expect(movePlan[0].data.to).toBe(join(lensDataDir, "canon", "CanonDemo.data.ts"));
  });

  it("moves paired root-level lens files and then becomes a clean no-op", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);

    writeLensDataFile(join(lensDataDir, "TestLens.data.ts"), {
      key: "test-lens",
      maker: "Canon",
      name: "CANON TEST LENS",
    });
    writeFileSync(join(lensDataDir, "TestLens.analysis.md"), "# Test lens analysis\n", "utf-8");

    const firstRun = organizeRootLensFiles(lensDataDir, { log: () => undefined });
    expect(firstRun.movedLensCount).toBe(1);
    expect(firstRun.movedFileCount).toBe(2);
    expect(existsSync(join(lensDataDir, "canon", "TestLens.data.ts"))).toBe(true);
    expect(existsSync(join(lensDataDir, "canon", "TestLens.analysis.md"))).toBe(true);
    expect(existsSync(join(lensDataDir, "TestLens.data.ts"))).toBe(false);
    expect(readFileSync(join(lensDataDir, "canon", "TestLens.data.ts"), "utf-8")).toContain(
      'from "../../types/optics.js";',
    );

    const secondRun = organizeRootLensFiles(lensDataDir, { log: () => undefined });
    expect(secondRun.movedLensCount).toBe(0);
    expect(secondRun.movedFileCount).toBe(0);
  });

  it("refuses to overwrite an existing destination file", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);

    writeLensDataFile(join(lensDataDir, "TestLens.data.ts"), {
      key: "test-lens",
      maker: "Canon",
      name: "CANON TEST LENS",
    });
    mkdirSync(join(lensDataDir, "canon"), { recursive: true });
    writeLensDataFile(join(lensDataDir, "canon", "TestLens.data.ts"), {
      key: "test-lens-existing",
      maker: "Canon",
      name: "CANON EXISTING TEST LENS",
    });

    expect(() => organizeRootLensFiles(lensDataDir, { log: () => undefined })).toThrow(/destination already exists/);
  });

  it("preserves original published dates for lenses moved before the rename commit exists", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);

    mkdirSync(join(lensDataDir, "carl-zeiss-jena"), { recursive: true });
    const movedDataPath = join(lensDataDir, "carl-zeiss-jena", "TestLens.data.ts");
    const movedAnalysisPath = join(lensDataDir, "carl-zeiss-jena", "TestLens.analysis.md");
    writeLensDataFile(movedDataPath, {
      key: "test-lens",
      maker: "Carl Zeiss Jena",
      name: "CARL ZEISS JENA TEST LENS",
    });
    writeFileSync(movedAnalysisPath, "# Test lens analysis\n", "utf-8");

    const oldDataPath = join(lensDataDir, "TestLens.data.ts");
    const oldAnalysisPath = join(lensDataDir, "TestLens.analysis.md");
    const freshnessCalls: string[][] = [];

    const lenses = collectLensData({
      rootDir,
      lensDataDir,
      fallbackDate: "2026-04-24",
      trackedLensRecordsByKey: {
        "test-lens": {
          dataPath: oldDataPath,
          analysisPath: oldAnalysisPath,
        },
      },
      getFreshness: (paths) => {
        freshnessCalls.push(paths);

        if (paths.includes(oldDataPath)) {
          return { publishedOn: "2024-02-03", lastModified: "2026-04-16" };
        }
        if (paths.includes(oldAnalysisPath)) {
          return { publishedOn: "2024-02-03", lastModified: "2026-04-18" };
        }
        return { publishedOn: "2026-04-24", lastModified: "2026-04-24" };
      },
    });

    expect(lenses).toHaveLength(1);
    expect(lenses[0].freshness).toEqual({
      publishedOn: "2024-02-03",
      lastModified: "2026-04-18",
    });
    expect(freshnessCalls).toContainEqual([movedDataPath, oldDataPath]);
    expect(freshnessCalls).toContainEqual([movedAnalysisPath, oldAnalysisPath]);
    expect(readFileSync(movedAnalysisPath, "utf-8")).toContain("# Test lens analysis");
  });
});
