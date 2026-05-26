import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import {
  OPTICS_2_STAGE_01_MIGRATION_RULES,
  OPTICS_2_PARITY_FIXTURES,
  REQUIRED_FOLDED_REFERENCE_KEYS,
  parityFixtureKeys,
  type GlassCoverageKind,
  type ParityFixtureRole,
  type ParityStateTag,
} from "./parityFixtures.js";
import { OPTICS_2_PARITY_TOLERANCES, OPTICS_2_TOLERANCE_REASONS } from "./tolerances.js";
import {
  OPTICS_2_REQUIRED_BENCHMARK_CASES,
  runOpticsBenchmarkSuite,
  type OpticsBenchmarkCase,
} from "../../../src/optics-2/testing/benchmarkHarness.js";

const REQUIRED_ROLES: readonly ParityFixtureRole[] = [
  "ordinary-prime",
  "fast-aspheric-prime",
  "rectilinear-zoom",
  "fisheye",
  "perspective-control",
  "aberration-control",
  "glass-coverage",
  "folded-reference",
];

const REQUIRED_STATE_TAGS: readonly ParityStateTag[] = [
  "infinity-focus",
  "close-focus",
  "wide-open",
  "stopped-down",
  "center-field",
  "off-axis-field",
];

const REQUIRED_ZOOM_TAGS: readonly ParityStateTag[] = ["wide-zoom", "mid-zoom", "tele-zoom"];
const REQUIRED_GLASS_COVERAGE: readonly GlassCoverageKind[] = [
  "sellmeier",
  "line-indices",
  "abbe-fallback",
  "constant-fallback",
];

const SRC_MODULES = import.meta.glob<string>("../../../src/**/*.{ts,tsx}", {
  eager: true,
  query: "?raw",
  import: "default",
});

const OPTICS_2_MODULES = import.meta.glob<string>("../../../src/optics-2/**/*.ts", {
  eager: true,
  query: "?raw",
  import: "default",
});

function tagsForFixture(key: string): Set<ParityStateTag> {
  const fixture = OPTICS_2_PARITY_FIXTURES.find((item) => item.key === key);
  return new Set(fixture?.states.flatMap((state) => state.tags) ?? []);
}

describe("Optics 2 Stage 01 migration policy", () => {
  it("locks the Stage 01 migration rules in an importable place", () => {
    expect(OPTICS_2_STAGE_01_MIGRATION_RULES.map((rule) => rule.id)).toEqual([
      "additive-optics-2",
      "legacy-reference",
      "lens-data-input-contract",
      "exact-tracing-only",
      "no-trace-mode-rollout",
      "temporary-internal-selector-only",
      "compare-before-callers-move",
    ]);
  });

  it("keeps production source imports off src/optics-2 during Stage 01", () => {
    const offenders = Object.entries(SRC_MODULES)
      .filter(([file]) => !file.includes("/src/optics-2/"))
      .filter(([, source]) => /from\s+["'][^"']*optics-2|import\s*\([^)]*optics-2/.test(source))
      .map(([file]) => file);

    expect(offenders).toEqual([]);
  });

  it("creates the additive src/optics-2 testing island without a production engine entry point", () => {
    expect(Object.keys(OPTICS_2_MODULES)).toContain("../../../src/optics-2/testing/benchmarkHarness.ts");
    expect(Object.keys(OPTICS_2_MODULES)).not.toContain("../../../src/optics-2/index.ts");
  });
});

describe("Optics 2 parity fixture matrix", () => {
  it("contains unique, catalog-backed fixture keys", () => {
    const keys = parityFixtureKeys();
    expect(new Set(keys).size).toBe(keys.length);
    for (const key of keys) {
      expect(LENS_CATALOG[key], key).toBeDefined();
    }
  });

  it("covers every required fixture role", () => {
    const roles = new Set(OPTICS_2_PARITY_FIXTURES.flatMap((fixture) => fixture.roles));
    for (const role of REQUIRED_ROLES) {
      expect(roles.has(role), role).toBe(true);
    }
  });

  it("includes every hidden folded reference fixture", () => {
    const keys = new Set(parityFixtureKeys());
    for (const key of REQUIRED_FOLDED_REFERENCE_KEYS) {
      expect(keys.has(key), key).toBe(true);
    }
  });

  it("gives each ordinary fixture the required focus, aperture, and field states", () => {
    const ordinaryFixtures = OPTICS_2_PARITY_FIXTURES.filter((fixture) => fixture.roles.includes("ordinary-prime"));
    for (const fixture of ordinaryFixtures) {
      const tags = tagsForFixture(fixture.key);
      for (const tag of REQUIRED_STATE_TAGS) {
        expect(tags.has(tag), `${fixture.key} ${tag}`).toBe(true);
      }
    }
  });

  it("gives each zoom fixture wide, middle, and tele zoom states", () => {
    const zoomFixtures = OPTICS_2_PARITY_FIXTURES.filter((fixture) => fixture.roles.includes("rectilinear-zoom"));
    for (const fixture of zoomFixtures) {
      const tags = tagsForFixture(fixture.key);
      for (const tag of REQUIRED_ZOOM_TAGS) {
        expect(tags.has(tag), `${fixture.key} ${tag}`).toBe(true);
      }
    }
  });

  it("declares every required glass coverage path", () => {
    const coverage = new Set(OPTICS_2_PARITY_FIXTURES.flatMap((fixture) => fixture.glassCoverage ?? []));
    for (const kind of REQUIRED_GLASS_COVERAGE) {
      expect(coverage.has(kind), kind).toBe(true);
    }
  });

  it("builds every fixture through the current src/optics reference engine", () => {
    for (const fixture of OPTICS_2_PARITY_FIXTURES) {
      const lens = buildLens(LENS_CATALOG[fixture.key]);
      expect(lens.data.key).toBe(fixture.key);
      expect(lens.N).toBeGreaterThan(0);
      expect(Object.isFrozen(lens)).toBe(true);
    }
  });
});

describe("Optics 2 named tolerances", () => {
  it("names every non-strict tolerance reason", () => {
    const allowedReasons = new Set(OPTICS_2_TOLERANCE_REASONS);
    for (const group of Object.values(OPTICS_2_PARITY_TOLERANCES)) {
      for (const tolerance of Object.values(group)) {
        if (tolerance.reason) expect(allowedReasons.has(tolerance.reason)).toBe(true);
      }
    }
  });
});

describe("Optics 2 benchmark harness scaffold", () => {
  it("lists the required benchmark case families", () => {
    expect(OPTICS_2_REQUIRED_BENCHMARK_CASES.map((benchmarkCase) => benchmarkCase.id)).toEqual([
      "sequential-on-axis-1000",
      "skew-1000",
      "off-axis-display-ray-fan",
      "chromatic-fan",
      "distortion-grid",
      "vignetting-curve",
      "bokeh-spot-grid",
      "folded-fixture-trace",
    ]);
  });

  it("can produce informational old-engine output before optics-2 exists", () => {
    let clock = 0;
    const benchmarkCases: readonly OpticsBenchmarkCase[] = [
      {
        name: "1,000 sequential on-axis traces",
        lensKey: "nikkor-z-50f18s",
        sliderState: { focusT: 0, zoomT: 0, apertureT: 0, fieldFraction: 0 },
        iterations: 1000,
        run: () => ({ successfulTraceCount: 1000, clippedTraceCount: 0, failedTraceCount: 0 }),
      },
    ];

    const results = runOpticsBenchmarkSuite(benchmarkCases, {
      oldEngine: { id: "old", label: "src/optics", context: {} },
      sampleCount: 1,
      warmupCount: 0,
      now: () => clock++,
    });

    expect(results).toEqual([
      {
        caseName: "1,000 sequential on-axis traces",
        lensKey: "nikkor-z-50f18s",
        sliderState: { focusT: 0, zoomT: 0, apertureT: 0, fieldFraction: 0 },
        oldMedianTimeMs: 1,
        newMedianTimeMs: null,
        worstTimeMs: 1,
        successfulTraceCount: 1000,
        clippedTraceCount: 0,
        failedTraceCount: 0,
        status: "new-engine-missing",
      },
    ]);
  });
});

describe("Optics 2 buildLens parity", () => {
  it.skip("compares buildLens against missing buildLens2 from src/optics-2/buildLens", () => {});
});
