import { spawnSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";
import {
  MAKER_PREFIXES,
  collectLensData,
  collectLensDataAsync,
  collectRootLensMovePlan,
  deriveMakerSlug,
  organizeRootLensFiles,
} from "../../scripts/lens-data-lib.mjs";
import { evaluateLensDataSource } from "../../scripts/lens-data-ast.mjs";
import { FIXTURE_PAIRS } from "../src/optics/prescription/ingestV2Fixtures.js";
import { PRIME_MEMBERS, v1LensFile } from "./convertLensDataFixtures.js";
import runtimeMakerPrefixes from "../../src/generated/maker-prefixes.json";

function createTempLensDataDir() {
  const rootDir = mkdtempSync(join(tmpdir(), "lens-data-scripts-"));
  const lensDataDir = join(rootDir, "src", "lens-data");
  mkdirSync(lensDataDir, { recursive: true });
  for (const directory of ["types", "optics", "utils"]) {
    symlinkSync(fileURLToPath(new URL(`../../src/${directory}`, import.meta.url)), join(rootDir, "src", directory));
  }
  symlinkSync(fileURLToPath(new URL("../../node_modules", import.meta.url)), join(rootDir, "node_modules"));
  return { rootDir, lensDataDir };
}

function writeLensDataFile(
  filePath: string,
  { key, name, maker }: { key: string; name: string; maker?: string | null },
) {
  const members = PRIME_MEMBERS.replace('key: "fixture-prime"', `key: "${key}"`).replace(
    'name: "Fixture 50mm f/2"',
    `name: "${name}"`,
  );
  const source = v1LensFile(`${members}\n  maker: ${JSON.stringify(maker)},`);
  writeFileSync(filePath, source.replace("../../types/", "../types/"), "utf-8");
}

/** Run the actual entry point against an isolated catalog, keeping its helpers in the repository. */
function runScript(rootDir: string, entry: string) {
  const scripts = join(rootDir, "scripts");
  mkdirSync(scripts, { recursive: true });
  for (const name of readdirSync(fileURLToPath(new URL("../../scripts/", import.meta.url)))) {
    const source = fileURLToPath(new URL(`../../scripts/${name}`, import.meta.url));
    if (name === entry) copyFileSync(source, join(scripts, name));
    else symlinkSync(source, join(scripts, name));
  }
  return spawnSync("node", [join(scripts, entry)], { encoding: "utf8", timeout: 60_000 });
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

  it("preserves explicit unknown makers when organizing branded prescriptions", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);
    writeLensDataFile(join(lensDataDir, "Prototype.data.ts"), {
      key: "prototype",
      name: "CANON prototype",
      maker: null,
    });
    expect(deriveMakerSlug("CANON prototype", null)).toBe("unattributed");
    expect(collectRootLensMovePlan(lensDataDir)[0].makerSlug).toBe("unattributed");
  });

  it("derives canonical maker slugs from maker fields and fallback names", () => {
    expect(deriveMakerSlug("Carl Zeiss Jena")).toBe("carl-zeiss-jena");
    expect(deriveMakerSlug("Carl Zeiss")).toBe("carl-zeiss-oberkochen");
    expect(deriveMakerSlug("Canon Demo Lens")).toBe("canon");
    expect(deriveMakerSlug("Laowa 12mm f/2.8 Zero-D")).toBe("laowa");
    expect(deriveMakerSlug("Venus Optics Laowa 24mm f/14 2X Macro Probe")).toBe("laowa");
    expect(deriveMakerSlug("Rodenstock Grandagon-N 90mm f/4.5")).toBe("rodenstock");
    expect(deriveMakerSlug("G. Rodenstock Eurynar 165mm f/4.5")).toBe("rodenstock");
    expect(deriveMakerSlug("P. Angénieux Retrofocus Type R1 35mm f/2.5")).toBe("p.-angénieux");
    expect(deriveMakerSlug("Agfa Color-Solinar 50mm f/2.8")).toBe("agfa");
    expect(deriveMakerSlug("Enna Munchen Lithagon 35mm f/2.8")).toBe("enna-munchen");
    expect(deriveMakerSlug("Meyer Optic Goerlitz Trioplan 100mm f/2.8")).toBe("meyer-optik-goerlitz");
    expect(deriveMakerSlug("Rokinon 14mm f/2.8")).toBe("samyang");
    expect(deriveMakerSlug("Samsung NX 30mm f/2")).toBe("samsung");
    expect(deriveMakerSlug("Tokina AT-X 90mm f/2.5 Macro")).toBe("tokina");
    expect(deriveMakerSlug("Yashinon 50mm f/1.7")).toBe("yashica");
    expect(deriveMakerSlug("Nikkor-S Auto 50mm f/1.4")).toBe("nikon");
    expect(deriveMakerSlug("Voigtlander Nokton 50mm f/1.2")).toBe("voigtlander");
    expect(deriveMakerSlug("Schneider Kreuznach Super-Angulon 90mm f/8")).toBe("schneider-kreuznach");
    expect(deriveMakerSlug("Rokkor-PG 58mm f/1.2")).toBe("minolta");
    expect(deriveMakerSlug("Zuiko Auto-W 21mm f/2")).toBe("olympus");
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

  it("converts and files a root-level V1 lens with its analysis, then becomes a clean no-op", async () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);

    writeLensDataFile(join(lensDataDir, "TestLens.data.ts"), {
      key: "test-lens",
      maker: "Canon",
      name: "CANON TEST LENS",
    });
    writeFileSync(join(lensDataDir, "TestLens.analysis.md"), "# Test lens analysis\n", "utf-8");

    const firstRun = await organizeRootLensFiles(lensDataDir, { log: () => undefined });
    expect(firstRun.movedLensCount).toBe(1);
    expect(firstRun.movedFileCount).toBe(2);
    expect(existsSync(join(lensDataDir, "canon", "TestLens.data.ts"))).toBe(true);
    expect(existsSync(join(lensDataDir, "canon", "TestLens.analysis.md"))).toBe(true);
    expect(existsSync(join(lensDataDir, "TestLens.data.ts"))).toBe(false);
    expect(readFileSync(join(lensDataDir, "canon", "TestLens.data.ts"), "utf-8")).toContain(
      'from "../../types/lensDataV2.js";',
    );

    const secondRun = await organizeRootLensFiles(lensDataDir, { log: () => undefined });
    expect(secondRun.movedLensCount).toBe(0);
    expect(secondRun.movedFileCount).toBe(0);
  });

  it("refuses to overwrite an existing destination file", async () => {
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

    await expect(organizeRootLensFiles(lensDataDir, { log: () => undefined })).rejects.toThrow(
      /destination already exists/,
    );
  });

  it.each(["lens", "teleconverter"] as const)("converts a V1 %s already under a maker folder in place", (kind) => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);
    mkdirSync(join(lensDataDir, "fixture"));
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.kind === kind)!;
    const suffix = kind === "lens" ? "data" : "teleconverter";
    const type = kind === "lens" ? "LensDataInput" : "TeleconverterData";
    const path = join(lensDataDir, "fixture", `Fixture.${suffix}.ts`);
    writeFileSync(
      path,
      `import type { ${type} } from "../../types/optics.js";\nconst DATA = ${JSON.stringify(pair.v1)} satisfies ${type};\nexport default DATA;\n`,
    );
    const result = runScript(rootDir, "organize-lens-data.mjs");
    expect(result.status, result.stderr).toBe(0);
    expect(evaluateLensDataSource(readFileSync(path, "utf8"))).toEqual(pair.v2);
    expect(result.stderr).toContain(`Fixture.${suffix}.ts`);
    if (kind === "lens") expect(result.stdout).toContain(`Fixture.${suffix}.ts`);
  });

  it("converts and files a root-level V1 teleconverter", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.kind === "teleconverter")!;
    const path = join(lensDataDir, "Fixture.teleconverter.ts");
    writeFileSync(
      path,
      `import type { TeleconverterData } from "../types/optics.js";\nconst DATA = ${JSON.stringify(pair.v1)} satisfies TeleconverterData;\nexport default DATA;\n`,
    );
    const result = runScript(rootDir, "organize-lens-data.mjs");
    expect(result.status, result.stderr).toBe(0);
    const filed = join(lensDataDir, deriveMakerSlug(pair.v1.name, pair.v1.maker), "Fixture.teleconverter.ts");
    expect(evaluateLensDataSource(readFileSync(filed, "utf8"))).toEqual(pair.v2);
    expect(readFileSync(filed, "utf8")).toContain('from "../../types/lensDataV2.js";');
    expect(existsSync(path)).toBe(false);
  });

  it.each(["lens", "teleconverter"] as const)(
    "converts an archived root-level V1 %s with unchanged maker-folder imports",
    (kind) => {
      const { rootDir, lensDataDir } = createTempLensDataDir();
      tempRoots.push(rootDir);
      const pair = FIXTURE_PAIRS.find((candidate) => candidate.kind === kind)!;
      const suffix = kind === "lens" ? "data" : "teleconverter";
      const type = kind === "lens" ? "LensDataInput" : "TeleconverterData";
      const path = join(lensDataDir, `Archived.${suffix}.ts`);
      writeFileSync(
        path,
        `import type { ${type} } from "../../types/optics.js";\nconst DATA = ${JSON.stringify(pair.v1)} satisfies ${type};\nexport default DATA;\n`,
      );
      const result = runScript(rootDir, "organize-lens-data.mjs");
      expect(result.status, result.stderr).toBe(0);
      const filed = join(lensDataDir, deriveMakerSlug(pair.v1.name, pair.v1.maker), `Archived.${suffix}.ts`);
      const converted = readFileSync(filed, "utf8");
      expect(evaluateLensDataSource(converted)).toEqual(pair.v2);
      expect(converted).toContain('from "../../types/lensDataV2.js";');
      expect(existsSync(path)).toBe(false);
    },
  );

  it("leaves archived root files byte-identical when one conversion is refused", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);
    const path = join(lensDataDir, "Refused.data.ts");
    const source = v1LensFile(PRIME_MEMBERS + '\n  unknownField: "refuse me",');
    writeFileSync(path, source);
    const acceptedPath = join(lensDataDir, "Accepted.data.ts");
    const acceptedSource = v1LensFile(PRIME_MEMBERS);
    writeFileSync(acceptedPath, acceptedSource);
    const result = runScript(rootDir, "organize-lens-data.mjs");
    expect(result.status).not.toBe(0);
    expect(result.stderr).toMatch(/Refused.data.ts/);
    expect(result.stderr).toMatch(/unknownField/);
    expect(readFileSync(path, "utf8")).toBe(source);
    expect(readFileSync(acceptedPath, "utf8")).toBe(acceptedSource);
    expect(result.stderr).toContain("1 would convert to V2");
    expect(existsSync(join(lensDataDir, "fixture"))).toBe(false);
  });

  it("leaves a V2 catalog byte-identical", () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);
    mkdirSync(join(lensDataDir, "fixture"));
    const paths = FIXTURE_PAIRS.map((pair, index) => {
      const path = join(lensDataDir, "fixture", `${index}.${pair.kind === "lens" ? "data" : "teleconverter"}.ts`);
      const text = `export default ${JSON.stringify(pair.v2)};\n`;
      writeFileSync(path, text);
      return { path, text };
    });
    const result = runScript(rootDir, "organize-lens-data.mjs");
    expect(result.status, result.stderr).toBe(0);
    for (const { path, text } of paths) expect(readFileSync(path, "utf8")).toBe(text);
  });

  it.each(["data", "teleconverter"])("metadata refuses a V1 .%s.ts without writing inputs or outputs", (suffix) => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);
    const path = join(lensDataDir, `Archived.${suffix}.ts`);
    const source = 'export default { key: "archived", name: "Archived" };\n';
    writeFileSync(path, source);
    const generated = join(rootDir, "src", "generated");
    mkdirSync(generated);
    const sentinel = join(generated, "maker-prefixes.json");
    writeFileSync(sentinel, "unchanged\n");
    const result = runScript(rootDir, "generate-build-metadata.mjs");
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain(`Archived.${suffix}.ts is V1`);
    expect(result.stderr).toContain("npm run organize:lens-data");
    expect(readFileSync(path, "utf8")).toBe(source);
    expect(readFileSync(sentinel, "utf8")).toBe("unchanged\n");
    expect(readdirSync(generated)).toEqual(["maker-prefixes.json"]);
  });

  it("collects quoted TypeScript metadata keys in both build collectors", async () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);
    const dataPath = join(lensDataDir, "Quoted.data.ts");
    writeFileSync(
      dataPath,
      `const LENS_DATA = {
      "schema": 2, "key": "quoted-lens", "name": "CANON QUOTED", "maker": "Canon",
      "catalog": { "lensMounts": ["canon-ef"], "imageFormat": "135-full-frame" },
      "publishedAt": "2026-10-03T01:00:00Z", "visible": false
    };
    export default LENS_DATA;`,
    );
    const options = {
      rootDir,
      lensDataDir,
      fallbackDate: "2026-10-03",
      trackedLensRecordsByKey: {},
      getFreshness: () => ({ publishedOn: "2026-10-03", lastModified: "2026-10-03" }),
    };
    const records = collectLensData(options);
    expect(await collectLensDataAsync(options)).toEqual(records);
    expect(records).toHaveLength(1);
    expect(records[0]).toMatchObject({
      key: "quoted-lens",
      name: "CANON QUOTED",
      makerSlug: "canon",
      visible: false,
      lensMountIds: ["canon-ef"],
      imageFormatId: "135-full-frame",
      freshness: { publishedAt: "2026-10-03T01:00:00.000Z" },
    });
  });

  it("publishes replacement models consistently in both collectors without losing later modifications", async () => {
    const { rootDir, lensDataDir } = createTempLensDataDir();
    tempRoots.push(rootDir);
    const dataPath = join(lensDataDir, "Replacement.data.ts");
    const writePublication = (timestamp: string) =>
      writeFileSync(
        dataPath,
        `const LENS_DATA = { key: "replacement", name: "TEST REPLACEMENT", publishedAt: "${timestamp}" };\n` +
          "export default LENS_DATA;",
      );
    writePublication("2026-09-14T12:06:25Z");
    const options = {
      rootDir,
      lensDataDir,
      fallbackDate: "2026-09-15",
      trackedLensRecordsByKey: {},
      getFreshness: () => ({
        publishedOn: "2020-01-01",
        publishedAt: "2020-01-01T00:00:00Z",
        publishedCommit: "original",
        lastModified: "2026-09-15",
        lastModifiedAt: "2026-09-15T09:00:00Z",
        lastModifiedCommit: "later",
      }),
    };
    const sync = collectLensData(options);
    expect(await collectLensDataAsync(options)).toEqual(sync);
    expect(sync[0].freshness).toEqual({
      publishedOn: "2026-09-14",
      publishedAt: "2026-09-14T12:06:25.000Z",
      lastModified: "2026-09-15",
      lastModifiedAt: "2026-09-15T09:00:00Z",
      lastModifiedCommit: "later",
    });
    const old = collectLensData({
      ...options,
      getFreshness: () => ({ publishedOn: "2020-01-01", lastModified: "2020-01-01" }),
    });
    expect(old[0].freshness.lastModified).toBe("2026-09-14");
    for (const invalid of ["2026-09-14", "2026-02-30T00:00:00Z", "2026-09-14T12:00:00-04:00"]) {
      writePublication(invalid);
      expect(() => collectLensData(options)).toThrow(/Invalid lens publishedAt/);
      await expect(collectLensDataAsync(options)).rejects.toThrow(/Invalid lens publishedAt/);
    }
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
