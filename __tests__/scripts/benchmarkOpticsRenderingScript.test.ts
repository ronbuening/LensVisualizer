import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";
import { build } from "vite";
import { describe, expect, it } from "vitest";
import { prepareHistoricalSeam } from "../../scripts/base-worktree.mjs";
import {
  BENCHMARK_RUN_RETENTION_TRIGGER,
  parseArgs,
  pruneOldBenchmarkRunFiles,
} from "../../scripts/benchmark-optics-rendering.mjs";

function withTempRunsDir<T>(callback: (runsDir: string) => T): T {
  const root = mkdtempSync(join(tmpdir(), "benchmark-retention-"));
  try {
    return callback(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

function writeRunFile(runsDir: string, index: number): string {
  const name = `2026-05-27T12-${String(index).padStart(2, "0")}-00Z-test.json`;
  writeFileSync(join(runsDir, name), "{}\n", "utf8");
  return name;
}

describe("benchmark optics rendering script retention", () => {
  it("leaves fewer-than-threshold run files untouched", () => {
    withTempRunsDir((runsDir) => {
      const names = Array.from({ length: BENCHMARK_RUN_RETENTION_TRIGGER - 1 }, (_, index) =>
        writeRunFile(runsDir, index),
      );

      expect(pruneOldBenchmarkRunFiles(runsDir)).toEqual([]);
      expect(readdirSync(runsDir).sort()).toEqual(names.sort());
    });
  });

  it("removes oldest JSON run files once the threshold is reached", () => {
    withTempRunsDir((runsDir) => {
      const names = Array.from({ length: BENCHMARK_RUN_RETENTION_TRIGGER + 2 }, (_, index) =>
        writeRunFile(runsDir, index),
      );
      writeFileSync(join(runsDir, "README.md"), "ignore me\n", "utf8");

      const removed = pruneOldBenchmarkRunFiles(runsDir);
      const remaining = readdirSync(runsDir).sort();

      expect(removed.map((path) => basename(path))).toEqual(names.slice(0, 3));
      expect(remaining).toEqual([...names.slice(3), "README.md"].sort());
    });
  });
});

describe("benchmark optics rendering command line", () => {
  const plain = {
    dryRun: false,
    reportOnly: false,
    iterations: undefined,
    warmups: undefined,
    base: null,
    heavy: false,
    memory: false,
  };

  it("runs the whole matrix on the working tree when given nothing", () => {
    expect(parseArgs([])).toEqual(plain);
    expect(parseArgs(["--iterations=5", "--warmups=2"])).toEqual({ ...plain, iterations: 5, warmups: 2 });
    expect(parseArgs(["--dry-run"])).toEqual({ ...plain, dryRun: true });
    expect(parseArgs(["--report-only"])).toEqual({ ...plain, reportOnly: true });
  });

  it("takes the base of a paired run after its flag or after an equals sign", () => {
    const paired = { ...plain, base: "d49857ae", heavy: true, iterations: 15, warmups: 2 };

    expect(parseArgs(["--base", "d49857ae", "--heavy", "--iterations=15", "--warmups=2"])).toEqual(paired);
    expect(parseArgs(["--base=d49857ae", "--heavy", "--iterations=15", "--warmups=2"])).toEqual(paired);
    expect(parseArgs(["--iterations=15", "--warmups=2", "--heavy", "--base", "d49857ae"])).toEqual(paired);
    expect(parseArgs(["--base=optics-rewrite/s1"]).base).toBe("optics-rewrite/s1");
    expect(parseArgs(["--memory", "--heavy", "--base", "HEAD"])).toEqual({
      ...plain,
      base: "HEAD",
      heavy: true,
      memory: true,
    });
  });

  it("refuses what it cannot run, and says why", () => {
    expect(() => parseArgs(["--base"])).toThrow("--base needs a ref.");
    expect(() => parseArgs(["--base="])).toThrow("--base needs a ref.");
    expect(() => parseArgs(["--base", "--heavy"])).toThrow("--base needs a ref.");
    expect(() => parseArgs(["d49857ae"])).toThrow("Unknown benchmark argument: d49857ae");
    expect(() => parseArgs(["--verbose"])).toThrow("Unknown benchmark argument: --verbose");
    expect(() => parseArgs(["--iterations=0"])).toThrow("--iterations must be an integer >= 1.");
    expect(() => parseArgs(["--warmups=-1"])).toThrow("--warmups must be an integer >= 0.");
    expect(() => parseArgs(["--dry-run", "--report-only"])).toThrow("cannot be used together");
    expect(() => parseArgs(["--report-only", "--heavy"])).toThrow("--report-only rebuilds the trend report");
    expect(() => parseArgs(["--memory", "--iterations=3"])).toThrow("--memory runs the memory session alone");
    expect(() => parseArgs(["--memory", "--dry-run"])).toThrow("--memory runs the memory session alone");
  });
});

describe("benchmark child pass", () => {
  /* A stand-in for a built bundle: its entry function reports one cell and returns the options it was given, the
   * progress hook as its type. */
  const BUNDLE = `export async function runOpticsRenderingBenchmark(options) {
  await options.onCell?.({ lensKey: "lens", scenarioId: "default", index: 0, count: 1 });
  return { ...options, onCell: typeof options.onCell };
}
`;
  const options = { createdAt: "2026-01-01T00:00:00.000Z", iterations: 2, label: "a progress label" };

  /**
   * Run `scripts/benchmark-child.mjs` on the stand-in bundle.
   *
   * @param pass - the pass to run
   * @returns what the pass wrote to its result file
   */
  function childResult(pass: string): unknown {
    const dir = mkdtempSync(join(tmpdir(), "benchmark-child-"));
    try {
      const bundlePath = join(dir, "bundle.mjs");
      const resultPath = join(dir, "result.json");
      writeFileSync(bundlePath, BUNDLE, "utf8");
      execFileSync(
        "node",
        [
          "scripts/benchmark-child.mjs",
          pass,
          JSON.stringify({ bundleUrl: `file://${bundlePath}`, options }),
          resultPath,
        ],
        { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
      );
      return JSON.parse(readFileSync(resultPath, "utf8"));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }

  it("times a plain run on one bundle and keeps no samples, as a record under runs/ has none", () => {
    expect(childResult("plain")).toEqual({ createdAt: options.createdAt, iterations: 2, onCell: "function" });
  });

  it("keeps the samples of a paired or heavy run's timed pass", () => {
    expect(childResult("timed")).toEqual({
      createdAt: options.createdAt,
      iterations: 2,
      keepSamples: true,
      onCell: "function",
    });
  });

  it("refuses a pass it does not know", () => {
    expect(() => childResult("profile")).toThrow("Unknown benchmark pass: profile");
  });
});

/* Fixed pre-Stage-7 module surface. Adding a head-only runtime import to the copied
 * entry must fail this bundle even in CI checkouts that lack the timing-base objects. */
const BASE_EXPORTS: Readonly<Record<string, readonly string[]>> = {
  "optics/apertureStop.ts": ["wideOpenStopAtZoom"],
  "optics/buildLens.ts": ["default"],
  "optics/compat.ts": ["prepareRuntimeState", "createAnalysisComputationContext"],
  "optics/cardinalElements.ts": ["computeCardinalElementsAtState"],
  "optics/optics.ts": [
    "anchorLayoutToCamera",
    "computeAnalysisFieldGeometryAtState",
    "computeChromaticRayFanSpread",
    "conjugateK",
    "doLayout",
    "effectiveFNumber",
    "eflAtFocus",
    "entrancePupilAtState",
    "fopenAtZoom",
    "offsetVectorFieldRay",
    "traceRay",
    "traceRayChromatic",
    "traceRayVector",
    "traceRayVectorChromatic",
  ],
  "optics/diagramGeometry.ts": ["computeElementShapes", "createCoordinateTransforms"],
  "optics/lensMovement.ts": ["clampLensMovement", "createLensMovementTransform"],
  "optics/perspective/index.ts": [
    "cameraDirectionForDiagramField",
    "computePerspectiveMovementViewportExtent",
    "createPerspectiveTraceContext",
    "tracePerspectiveDiagramFan",
  ],
  "optics/raySampling.ts": ["obstructionAwareRayFractionsForDensity"],
  "optics/analysis/analysisQuality.ts": ["analysisSamplingForQuality"],
  "utils/perfProbe.ts": ["resetPerfProbe"],
  "utils/catalog/lensCatalog.ts": ["LENS_CATALOG"],
  "utils/theme/themes.ts": ["default"],
  "components/diagram/DiagramSVG.tsx": ["default"],
  "components/display/analysis/AberrationsPanel.tsx": ["default"],
  "components/display/analysis/ComaTab.tsx": ["default"],
  ...Object.fromEntries(
    [
      "AstigmatismSection",
      "ComaPreviewSection",
      "FieldCurvatureSection",
      "MeridionalComaSection",
      "SagittalComaSection",
      "SphericalAberrationSection",
    ].map((name) => [`components/display/analysis/aberrations/${name}.tsx`, ["default"]]),
  ),
  "components/hooks/offAxisRayUtils.ts": ["computeOffAxisTraceGeometry"],
  "components/hooks/raySegmentUtils.ts": ["compileRaySegment", "filterChannels"],
};

describe("benchmark base compatibility", () => {
  it(
    "bundles the head entry against a pre-request engine and forwards its original arguments",
    { timeout: 120_000 },
    async () => {
      const root = mkdtempSync(join(tmpdir(), "benchmark-base-fixture-"));
      const src = join(root, "src");
      const put = (file: string, text: string) => {
        const path = join(src, file);
        mkdirSync(join(path, ".."), { recursive: true });
        writeFileSync(path, text);
      };
      try {
        cpSync(resolve("src/benchmarks"), join(src, "benchmarks"), { recursive: true });
        symlinkSync(resolve("node_modules"), join(root, "node_modules"));
        for (const [file, names] of Object.entries(BASE_EXPORTS)) {
          put(
            file,
            names
              .map((name) =>
                name === "default" ? "export default (...args) => args;" : `export const ${name} = (...args) => args;`,
              )
              .join("\n"),
          );
        }
        const jobNames = [
          "computeSphericalAberration",
          "computeSAProfile",
          "computeSphericalAberrationBlurCharacter",
          "computeBestFocusZ",
          "computeFieldCurvature",
          "computeFieldCurvatureBundle",
          "computeComaAnalysis",
          "computeOpticalSummary",
          "computeDistortionCurve",
          "computeDistortionFieldGrid",
          "computeVignettingCurve",
          "computeBothPupilAberrationProfiles",
          "computeBokehPreviewPair",
        ];
        put(
          "optics/analysis/analysisJobs.ts",
          `export const analysisJobsForState2 = {${jobNames.map((name) => `${name}: (...args) => args`).join(",")}};`,
        );
        put(
          "benchmarks/baseFixture.ts",
          `
        export * from "./opticsRenderingBenchmark.tsx";
        export { analysisJobs, computeCardinalElements, createFreshAnalysisContext } from "./benchmarkSeam.ts";
      `,
        );
        prepareHistoricalSeam(root);
        const outDir = join(root, "out");
        await build({
          configFile: false,
          root,
          logLevel: "silent",
          build: {
            ssr: join(src, "benchmarks/baseFixture.ts"),
            outDir,
            copyPublicDir: false,
            rollupOptions: { output: { format: "es", entryFileNames: "baseFixture.mjs" } },
          },
          ssr: { noExternal: true },
        });
        const output = execFileSync(
          "node",
          [
            "--input-type=module",
            "-e",
            `
        const seam = await import(${JSON.stringify(join(outDir, "baseFixture.mjs"))});
        const p = { preparedState: { focusT: .2, zoomT: .3, aberrationT: .4 }, dynamicEFL: 50,
          currentEPSD: 10, currentPhysStopSD: 8, fieldGeometry: { halfFieldDeg: 12 },
          sampling: { pupilAberrationSampleCount: 7, sphericalBlurRingSamples: [1, 8] } };
        console.log(JSON.stringify({
          jobs: Object.fromEntries(Object.keys(seam.analysisJobs).map((name) =>
            [name, seam.analysisJobs[name](p, name === "computeFieldCurvature" ? true : "base-result")])),
          cardinals: seam.computeCardinalElements(p, { zPos: [0, 20], imagePlaneZ: 40 }, "lens"),
          fresh: seam.createFreshAnalysisContext(p),
        }));
      `,
          ],
          { encoding: "utf8" },
        );
        const { jobs, cardinals, fresh } = JSON.parse(output);
        const state = { focusT: 0.2, zoomT: 0.3, aberrationT: 0.4 };
        const field = { halfFieldDeg: 12 };
        const sampling = { pupilAberrationSampleCount: 7, sphericalBlurRingSamples: [1, 8] };
        for (const name of ["computeSphericalAberration", "computeSAProfile", "computeBestFocusZ"]) {
          expect(jobs[name]).toEqual([state, 10, 8]);
        }
        expect(jobs.computeSphericalAberrationBlurCharacter).toEqual([state, 10, 8, "base-result", sampling]);
        expect(jobs.computeFieldCurvature).toEqual([state, 10, 8, true, field, sampling]);
        for (const name of ["computeFieldCurvatureBundle", "computeComaAnalysis", "computeVignettingCurve"]) {
          expect(jobs[name]).toEqual([state, 10, 8, field, sampling]);
        }
        expect(jobs.computeOpticalSummary).toEqual([state, 50, 10, 8, field]);
        expect(jobs.computeDistortionCurve).toEqual([state, 50, 8, field, sampling]);
        expect(jobs.computeDistortionFieldGrid).toEqual([state, 8, field, sampling]);
        expect(jobs.computeBothPupilAberrationProfiles).toEqual([state, 7, field]);
        expect(jobs.computeBokehPreviewPair).toEqual([state, 10, 8, sampling]);
        expect(cardinals).toEqual(["lens", 0.2, 0.3, [0, 20], 40, 0.4]);
        expect(fresh).toEqual([
          {
            preparedState: state,
            dynamicEFL: 50,
            currentEPSD: 10,
            currentPhysStopSD: 8,
            fieldGeometry: field,
            sampling,
          },
        ]);
      } finally {
        rmSync(root, { recursive: true, force: true });
      }
    },
  );
});
