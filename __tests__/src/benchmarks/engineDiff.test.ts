/**
 * Engine differential harness: the payload encoding and digests, the seam adapter, the request lists of the three
 * tiers and their shards, capture determinism, and the semantic fingerprint.
 *
 * Real catalog lenses appear here only as inputs to the harness. The assertions are about the harness (records are
 * reproducible, failures are recorded, fingerprints follow the engine's authority rules), never about a lens.
 */

import { describe, expect, it, vi } from "vitest";
import {
  captureRecords,
  catalogLensData,
  catalogTeleconverterData,
  exportCatalog,
  fingerprintCatalog,
  permittedPairs,
  requestCatalog,
  unbuiltPairs,
  type PayloadRecord,
  type SerializedCatalog,
} from "../../../src/benchmarks/engineDiff/captureEntry.js";
import { comparePermittedPairs, createDifferentialRun } from "../../../src/benchmarks/engineDiff/compare.js";
import {
  ECHO_DEFAULTS,
  FLAT_RADIUS_MARKER,
  SKIPPED_BACK_POINTER_TAG,
  columnize,
  createResultEncoder,
  decodeValue,
  encodeValue,
  normalizeAuthoredData,
  outcomeOf,
  projectBuildConstants,
  recordAnalysisJob,
  semanticFingerprint,
  sha256Hex,
  stopRadiusAuthority,
  type EncodedValue,
  type Outcome,
  type SemanticProjection,
} from "../../../src/benchmarks/engineDiff/payload.js";
import {
  ANALYSIS_CONTEXT_JOBS,
  BENCHMARK_LENS_KEYS,
  CHROMATIC_CHANNELS,
  DEFAULT_STATE,
  FEATURE_REPRESENTATIVES,
  MOVED_POSE,
  MTF_BENCHMARK_LENS_KEYS,
  MTF_METHODS,
  MTF_REQUEST,
  MTF_SPECTRA,
  MTF_VARIANTS,
  MTF_VARIANT_GRID,
  NEAR_AXIS_PROBE_DELTA,
  ON_AXIS_PUPIL_FRACTIONS,
  SEEDED_DRAW_COUNT,
  STOPPED_DOWN_T,
  estimateLensCosts,
  lensId,
  mtfRequestOf,
  shardRequests,
  stageAnalysisLenses,
  stateId,
  tierRequests,
  type CaptureRequest,
  type CaptureState,
  type CatalogLens,
  type RequestCatalog,
  type RequestFamily,
  type TierId,
} from "../../../src/benchmarks/engineDiff/requests.js";
import {
  describeSeam,
  ownCatalogFiles,
  resolveCapabilities,
  resolveOptionalCapabilities,
  resolveOptionalSeam,
  resolveSeam,
} from "../../../src/benchmarks/engineDiff/seamAdapter.js";
import * as seamAdapter from "../../../src/benchmarks/engineDiff/seamAdapter.js";
import { MTF_BENCHMARK_CASES, MTF_FINITE_BENCHMARK_CASE } from "../../../src/benchmarks/mtfCases.js";
import { BENCHMARK_SCENARIOS, DEFAULT_BENCHMARK_LENS_KEYS } from "../../../src/benchmarks/opticsRenderingBenchmark.js";
import buildLens, {
  ingestLens,
  ingestLensV1,
  ingestTeleconverter,
  toLensData,
  toTeleconverterData,
} from "../../../src/optics/buildLens.js";
import {
  ELEMENT_SCHEMA_DEFAULTS,
  LENS_SCHEMA_DEFAULTS,
  REAR_PLATE_SCHEMA_DEFAULTS,
  type SchemaDefault,
} from "../../../src/optics/prescription/defaults.js";
import { toLensDataInput } from "../../../src/optics/prescription/toLensData.js";
import { doLayout, traceRay } from "../../../src/optics/optics.js";
import type { MtfMethod, MtfSpectrum } from "../../../src/types/mtf.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";
import type { TeleconverterData } from "../../../src/types/teleconverter.js";
import { DEFAULT_MTF_PREFERENCES } from "../../../src/utils/state/mtfPreferences.js";
import { FIXTURE_PAIRS } from "../optics/prescription/ingestV2Fixtures.js";
import plainTwin from "./engineDiffFixtures/fingerprintTwinPlain.js";
import restyledTwin from "./engineDiffFixtures/fingerprintTwinRestyled.js";

const CATALOG = exportCatalog();
const REQUEST_CATALOG = requestCatalog(CATALOG);
const TIER_P = tierRequests("p", REQUEST_CATALOG);
const TIER_S = tierRequests("s", REQUEST_CATALOG);
const TIER_F = tierRequests("f", REQUEST_CATALOG);

const SERENAR = "canon-serenar-50f18";
/** A folded fixture with no image format: every perspective job throws on it, in a few milliseconds. */
const MAKSUTOV = "reference-maksutov-cassegrain-meniscus";
/** The one converter pair in Tier P: the analysis row's representative. */
const PAIR = FEATURE_REPRESENTATIVES.find(({ feature }) => feature === "converter-pair")!.lens;
const PAIR_ID = lensId(PAIR);

describe("analysis job capture shapes", () => {
  const samples = [{ fieldAngleDeg: -0, distortionPercent: 1.25 }];
  const metadata = { corner: { status: "unreachable", reason: "height-miss" }, cornerImageHeight: 21.65 };

  it("keeps an older engine's distortion array at the existing value path", () => {
    const jobs: Record<string, Outcome<unknown>> = {};
    const outcome = { ok: true, value: samples } as const;
    recordAnalysisJob(jobs, "computeDistortionCurve", outcome);
    expect(jobs).toEqual({ computeDistortionCurve: outcome });
    expect(jobs.computeDistortionCurve).toBe(outcome);
  });

  it.each([{ curve: samples }, { curve: [] }])(
    "records an envelope's samples and leaves its corner status out",
    ({ curve }) => {
      const jobs: Record<string, Outcome<unknown>> = {};
      const value = { samples: curve, ...metadata };
      recordAnalysisJob(jobs, "computeDistortionCurve", { ok: true, value });
      expect(jobs).toEqual({ computeDistortionCurve: { ok: true, value: curve } });
      expect(jobs.computeDistortionCurve.ok && jobs.computeDistortionCurve.value).toBe(curve);
      expect(value).toEqual({ samples: curve, ...metadata });
    },
  );

  it("preserves other jobs, errors and unrecognized distortion values", () => {
    for (const [job, outcome] of [
      ["computeOtherCurve", { ok: true, value: { samples, ...metadata } }],
      ["computeDistortionCurve", { ok: false, error: { name: "Error", message: "failed" } }],
      ["computeDistortionCurve", { ok: true, value: null }],
      ["computeDistortionCurve", { ok: true, value: { samples } }],
    ] as [string, Outcome<unknown>][]) {
      const jobs: Record<string, Outcome<unknown>> = {};
      recordAnalysisJob(jobs, job, outcome);
      expect(jobs).toEqual({ [job]: outcome });
      expect(jobs[job]).toBe(outcome);
    }
  });

  it("compares legacy and envelope sample numbers number by number, with no shape change", () => {
    const record = (value: unknown): PayloadRecord => {
      const jobs: Record<string, Outcome<unknown>> = {};
      recordAnalysisJob(jobs, "computeDistortionCurve", { ok: true, value });
      return {
        lens: "synthetic-distortion",
        state: DEFAULT_STATE,
        request: "analysis",
        payload: { ok: true, value: encodeValue({ jobs }) },
      };
    };
    const base = record(samples);
    const head = record({ samples: [{ ...samples[0], distortionPercent: 1.5 }], ...metadata });
    const run = createDifferentialRun({ changeClass: "c3", declaredExceptions: [], restricted: true });
    run.addLens({ lens: base.lens, dataChange: "unchanged", baseEngine: [base], headEngine: [head] });
    const { engine } = run.finish();
    expect(engine.numbersDiffering).toBe(1);
    expect(engine.quantities.percentage?.differing).toBe(1);
    expect(engine.differences.shape).toBe(0);
    expect(engine.transitionSamples).toEqual([]);
  });
});

const throughJson = (value: unknown): unknown =>
  decodeValue(JSON.parse(JSON.stringify(encodeValue(value))) as EncodedValue);

/** Tier P requests of the given lens ids, optionally narrowed to some families. */
function tierPRequests(ids: readonly string[], families?: readonly RequestFamily[]): CaptureRequest[] {
  return TIER_P.filter(
    (request) => ids.includes(lensId(request.lens)) && (!families || families.includes(request.family)),
  );
}

/** What tells one request of a list from every other. */
function requestIdentity({ lens, state, family, variant }: CaptureRequest): string {
  return `${lensId(lens)}|${stateId(state)}|${family}|${variant ?? ""}`;
}

/** One line per record: what it answers, and a digest of its bytes. Keeps a failure diff readable. */
function recordDigests(records: readonly PayloadRecord[]): string[] {
  return records.map(
    (record) => `${record.lens} | ${stateId(record.state)} | ${record.request} | ${sha256Hex(JSON.stringify(record))}`,
  );
}

function valueOf(record: PayloadRecord): unknown {
  if (!record.payload.ok) throw new Error(`${record.lens} ${record.request}: ${record.payload.error.message}`);
  return decodeValue(record.payload.value);
}

/** Paths in an encoded payload at which the result encoder skipped a back-pointer member. */
function skippedBackPointers(encoded: unknown, path = "payload", found: string[] = []): string[] {
  if (encoded === SKIPPED_BACK_POINTER_TAG) found.push(path);
  else if (encoded !== null && typeof encoded === "object") {
    for (const [key, member] of Object.entries(encoded)) skippedBackPointers(member, `${path}.${key}`, found);
  }
  return found;
}

function catalogOf(...lenses: LensDataInput[]): SerializedCatalog {
  return {
    lenses: lenses.map((lens) => ({ key: lens.key, file: "fixture", prescription: encodeValue(lens) })),
    teleconverters: [],
    pairs: [],
  };
}

/* ── payload.ts ── */

describe("engineDiff tagged encoding", () => {
  it("restores every leaf under Object.is after a trip through JSON text", () => {
    const value = {
      doubles: [0.1 + 0.2, Number.MIN_VALUE, Number.MAX_VALUE, 2 ** 53 + 2, 1e15, -1e-300, 123456789.12345679],
      zero: 0,
      negativeZero: -0,
      notANumber: Number.NaN,
      positiveInfinity: Number.POSITIVE_INFINITY,
      negativeInfinity: Number.NEGATIVE_INFINITY,
      nothing: null,
      text: ["", "plain", "$", "$-0", "$$NaN", "$undef", "naïve ±0.5"],
      holes: [1, undefined, null, 3],
      nested: { deep: [{ leaf: [-0, [Number.NaN]] }] },
      flags: [true, false],
    };

    const decoded = throughJson(value) as typeof value;

    expect(decoded).toStrictEqual(value);
    /* Spelled out, because the whole test rests on the matcher telling these apart. */
    expect(Object.is(decoded.negativeZero, -0)).toBe(true);
    expect(Object.is(decoded.zero, 0)).toBe(true);
    expect(decoded.notANumber).toBeNaN();
    expect(decoded.positiveInfinity).toBe(Number.POSITIVE_INFINITY);
    expect(decoded.negativeInfinity).toBe(Number.NEGATIVE_INFINITY);
    expect(decoded.nothing).toBeNull();
    expect(decoded.holes[1]).toBeUndefined();
    expect(decoded.holes[2]).toBeNull();
  });

  it("writes finite doubles as plain JSON numbers that parse back to the same bits", () => {
    /* Fixed xorshift32 seed: arbitrary bit patterns cover subnormals and every exponent, not just round values. */
    let seed = 0x9e3779b9;
    const next = () => {
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return seed >>> 0;
    };
    const words = new Uint32Array(2);
    const double = new Float64Array(words.buffer);
    const mismatches: number[] = [];
    let finite = 0;
    for (let i = 0; i < 20000; i++) {
      words[0] = next();
      words[1] = next();
      const value = double[0];
      if (!Number.isFinite(value)) continue;
      finite++;
      const encoded = encodeValue(value);
      if (typeof encoded !== "number" || !Object.is(throughJson(value), value)) mismatches.push(value);
    }
    expect(finite).toBeGreaterThan(19000);
    expect(mismatches).toEqual([]);
  });

  it("writes one text for one value, whatever the member order, and drops undefined and function members", () => {
    const text = JSON.stringify(
      encodeValue({ b: 1, a: undefined, call: () => 1, d: { z: 1, y: [2, { n: 1, m: 2 }] } }),
    );
    expect(text).toBe('{"b":1,"d":{"y":[2,{"m":2,"n":1}],"z":1}}');
    expect(JSON.stringify(encodeValue({ d: { y: [2, { m: 2, n: 1 }], z: 1 }, b: 1 }))).toBe(text);
  });

  it("writes typed arrays as arrays and keeps an own __proto__ member", () => {
    expect(encodeValue(new Float64Array([1, -0, Number.NaN]))).toEqual([1, "$-0", "$NaN"]);
    const parsed = JSON.parse('{"__proto__":{"x":1},"a":2}') as unknown;
    expect(JSON.stringify(encodeValue(parsed))).toBe('{"__proto__":{"x":1},"a":2}');
    expect(Object.keys(throughJson(parsed) as object)).toEqual(["__proto__", "a"]);
  });

  it("refuses values it cannot represent instead of writing something else", () => {
    const cyclic: { self?: unknown } = {};
    cyclic.self = cyclic;
    expect(() => encodeValue(cyclic)).toThrow(TypeError);
    expect(() => encodeValue({ entries: new Map([["a", 1]]) })).toThrow(TypeError);
    expect(() => encodeValue([new Set([1])])).toThrow(TypeError);
    expect(() => encodeValue({ big: 1n })).toThrow(TypeError);
    expect(() => encodeValue(Symbol("s"))).toThrow(TypeError);
    expect(() => decodeValue("$unknown")).toThrow(TypeError);
  });

  it("writes an object shared by two members at both places", () => {
    const point = [1, 2, 3];
    expect(encodeValue({ last: point, terminal: point })).toEqual({ last: [1, 2, 3], terminal: [1, 2, 3] });
  });
});

describe("engineDiff SHA-256", () => {
  it("matches the FIPS 180-4 example digests", () => {
    expect(sha256Hex("")).toBe("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
    expect(sha256Hex("abc")).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
    expect(sha256Hex("abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq")).toBe(
      "248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1",
    );
  });

  it("agrees with WebCrypto across the padding boundaries and on multi-byte text", async () => {
    const reference = async (bytes: Uint8Array<ArrayBuffer>) =>
      Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)), (byte) =>
        byte.toString(16).padStart(2, "0"),
      ).join("");
    const mismatches: number[] = [];
    /* 55, 56, 63 and 64 bytes are where the padding gains a block; the long inputs cross many blocks. */
    for (const length of [...Array.from({ length: 131 }, (_, index) => index), 1000, 65553]) {
      const bytes = Uint8Array.from({ length }, (_, index) => (index * 131 + length) & 0xff);
      if (sha256Hex(bytes) !== (await reference(bytes))) mismatches.push(length);
    }
    expect(mismatches).toEqual([]);
    const text = "f/2.8 — 50 mm ±0.5°";
    expect(sha256Hex(text)).toBe(await reference(new TextEncoder().encode(text)));
  });
});

describe("engineDiff result encoder", () => {
  const hit = (z: number, extra: object = {}) => ({
    surfaceIndex: 0,
    point: [0, 1, z],
    residual: -0,
    effectiveTolerance: 1e-12,
    clipped: false,
    failureReason: null,
    ...extra,
  });
  const trace = (z: number, diagnostics: object = {}, hitExtra: object = {}) => ({
    status: "ok",
    hits: [hit(z, hitExtra), hit(z + 1, hitExtra)],
    terminalPoint: [0, 1, z + 1],
    diagnostics: { terminationReason: "sequential-return", loopDetected: false, loopKey: null, ...diagnostics },
  });

  it("marks object back-pointers as skipped, drops computed identity strings, and keeps text that shares a name", () => {
    const encode = createResultEncoder();
    const result = { lens: { S: [1, 2] }, state: { z: [0] }, source: "Table 1", cacheKey: "k:0.1:2", value: 1 };
    const encoded = encode(result);
    expect(encoded).toEqual({
      lens: SKIPPED_BACK_POINTER_TAG,
      state: SKIPPED_BACK_POINTER_TAG,
      source: "Table 1",
      value: 1,
    });
    expect(skippedBackPointers({ payload: encoded }, "record")).toEqual([
      "record.payload.lens",
      "record.payload.state",
    ]);
    /* The marker survives JSON and decoding, and a real string of the same text is not mistaken for one. */
    expect(decodeValue(JSON.parse(JSON.stringify(encoded)) as EncodedValue)).toMatchObject({
      lens: SKIPPED_BACK_POINTER_TAG,
    });
    expect(skippedBackPointers(encode({ note: SKIPPED_BACK_POINTER_TAG }))).toEqual([]);
    /* The lossless encoding is for prescriptions, which have no back-pointers to skip. */
    expect(encodeValue(result)).toHaveProperty("lens");
  });

  it("stores hits column-wise, with an undefined member read as absent", () => {
    expect(
      columnize([
        { a: 1, clipReason: undefined },
        { a: 2, b: [1, 2] },
      ]),
    ).toEqual({
      count: 2,
      columns: { a: [1, 2], b: [null, [1, 2]] },
    });
  });

  it("replaces each nested trace carrier with its status, hit count and a digest", () => {
    const encode = createResultEncoder();
    const ray = trace(5);
    const posed = { localTrace: ray, cameraTrace: ray, reachedSensor: true };
    const encoded = encode({
      usableSampleCount: 1,
      samples: [
        {
          status: "usable",
          sensorPoint: [0, 1, 2],
          fieldSample: { status: "usable", chiefTrace: posed, pupilBundle: { samples: [{ trace: posed }] } },
          rays: [{ sensorPoint: [0, 1, -0], trace: posed }],
          stopTrace: ray,
        },
      ],
    }) as { samples: Record<string, unknown>[] };

    /* Every residual of the fixture is zero, so the largest share of a tolerance is too, and every hit was
     * accepted at 1e-12 mm. */
    const hex = expect.stringMatching(/^[0-9a-f]{64}$/);
    const digest = (hitCount: number) => ({
      status: "ok",
      hitCount,
      hash: hex,
      outcome: hex,
      residualShare: 0,
      largestTolerance: 1e-12,
    });
    expect(encoded.samples[0]).toEqual({
      status: "usable",
      sensorPoint: [0, 1, 2],
      /* The field sample itself stays readable. Its pupil bundle is one digest that counts the hits of every trace
       * under it (here one posed trace of two 2-hit traces) and has no status of its own. */
      fieldSample: { status: "usable", chiefTrace: digest(4), pupilBundle: { ...digest(4), status: null } },
      rays: [{ sensorPoint: [0, 1, "$-0"], trace: digest(4) }],
      stopTrace: digest(2),
    });
  });

  it("digests a pupil bundle by its content, and only a member that holds one", () => {
    const encode = createResultEncoder();
    const bundle = (z: number) => ({ kind: "meridional", samples: [{ weight: 1, trace: trace(z) }] });
    const hashOf = (value: object) =>
      (encode({ pupilBundle: value }) as { pupilBundle: { hash: string } }).pupilBundle.hash;
    expect(hashOf(bundle(5))).toBe(hashOf(bundle(5)));
    expect(hashOf(bundle(5 * (1 + Number.EPSILON)))).not.toBe(hashOf(bundle(5)));
    expect(hashOf({ ...bundle(5), kind: "circular" })).not.toBe(hashOf(bundle(5)));
    /* A sampling request shares the member name and carries no samples; it is written out. */
    const request = { kind: "meridional", pupilSemiDiameterMm: 4, fractions: [0, 0.5] };
    expect(encode({ pupilBundle: request, samples: [bundle(5)] })).toEqual({
      pupilBundle: request,
      samples: [{ kind: "meridional", samples: [{ weight: 1, trace: expect.objectContaining({ hitCount: 2 }) }] }],
    });
  });

  it("digests content, not identity: one changed hit coordinate changes the hash, a loop key does not", () => {
    const hashOf = (value: object) => (createResultEncoder()(value) as { hash: string }).hash;
    const base = hashOf(trace(5));
    expect(hashOf(trace(5))).toBe(base);
    expect(hashOf(trace(5 * (1 + Number.EPSILON)))).not.toBe(base);
    expect(hashOf(trace(5, { terminationReason: "clipped" }))).not.toBe(base);
    expect(hashOf(trace(5, { loopKey: "1:2:3.25" }))).toBe(base);
    /* The sequential tracer writes `clipReason: undefined` on every hit; the generalized tracer omits the key. */
    expect(hashOf(trace(5, {}, { clipReason: undefined }))).toBe(base);
    expect(hashOf(trace(5, {}, { clipReason: "semi-diameter" }))).not.toBe(base);
  });

  it("writes an outcome beside the hash that follows the discrete members alone", () => {
    type Digest = { hash: string; outcome: string; hitCount: number };
    const digestOf = (value: object) => createResultEncoder()(value) as unknown as Digest;
    const base = digestOf(trace(5));
    expect(base.outcome).toMatch(/^[0-9a-f]{64}$/);
    expect(base.outcome).not.toBe(base.hash);

    /* Numbers a budget would be set on: a coordinate by one ulp or by a millimetre, an effective tolerance in its
     * last bits, and the sign of a zero. Each changes the hash and leaves the outcome. */
    const budgeted = [
      trace(5 * (1 + Number.EPSILON)),
      trace(6),
      trace(5, {}, { effectiveTolerance: 1e-12 * (1 + 2 * Number.EPSILON) }),
      trace(5, {}, { residual: 0 }),
    ];
    for (const moved of budgeted) {
      expect(digestOf(moved).hash).not.toBe(base.hash);
      expect(digestOf(moved).outcome).toBe(base.outcome);
    }

    /* Everything else: a flag, a status, a reason, a label, a number that is no longer finite or no longer there,
     * a surface index, a member that came or went, and one hit fewer. Each changes the outcome. */
    const discrete: Record<string, object> = {
      flag: trace(5, {}, { clipped: true }),
      status: { ...trace(5), status: "clipped" },
      reason: trace(5, { terminationReason: "clipped" }),
      label: trace(5, {}, { clipReason: "semi-diameter" }),
      nonFinite: trace(5, {}, { residual: Number.NaN }),
      infinite: trace(5, {}, { point: [0, Number.POSITIVE_INFINITY, 5] }),
      nulled: trace(5, {}, { residual: null, effectiveTolerance: null }),
      index: trace(5, {}, { surfaceIndex: 1 }),
      member: { ...trace(5), reachedImagePlane: false },
      shorter: { ...trace(5), hits: [hit(5)] },
    };
    const unmoved = Object.keys(discrete).filter((change) => digestOf(discrete[change]).outcome === base.outcome);
    expect(unmoved).toEqual([]);
    expect(new Set(Object.values(discrete).map((value) => digestOf(value).outcome)).size).toBe(10);

    /* The outcome of a carrier follows the outcomes of the carriers inside it, never their hashes: a posed pair
     * and a pupil bundle keep theirs when a coordinate moves, and lose it to a flag, or to the status of one ray
     * of the bundle while every hit count stands. */
    const posed = (ray: object) => ({ localTrace: ray, cameraTrace: ray, reachedSensor: true });
    const bundle = (ray: object, status = "usable") => ({
      pupilBundle: {
        kind: "circular",
        samples: [{ status, pupilUv: { u: 0.5, v: 0 }, weight: 0.5, trace: posed(ray) }],
      },
    });
    const bundleOf = (value: object) =>
      (createResultEncoder()(value) as unknown as { pupilBundle: Digest }).pupilBundle;
    for (const [carrier, digest] of [
      [posed, digestOf],
      [bundle, bundleOf],
    ] as [(ray: object) => object, (value: object) => Digest][]) {
      const whole = digest(carrier(trace(5)));
      expect(digest(carrier(trace(6))).hash).not.toBe(whole.hash);
      expect(digest(carrier(trace(6))).outcome).toBe(whole.outcome);
      expect(digest(carrier(trace(5, {}, { clipped: true }))).outcome).not.toBe(whole.outcome);
    }
    const missed = bundleOf(bundle(trace(5), "missed-sensor"));
    expect(missed.hitCount).toBe(bundleOf(bundle(trace(5))).hitCount);
    expect(missed.outcome).not.toBe(bundleOf(bundle(trace(5))).outcome);
    /* A sample's pupil position is where the ray was asked, and is kept; its weight is a ratio, and is masked. */
    const sampled = (sample: object) =>
      bundleOf({ pupilBundle: { kind: "circular", samples: [{ pupilUv: { u: 0.5, v: 0 }, weight: 0.5, ...sample }] } });
    expect(sampled({ pupilUv: { u: 0.5 * (1 + Number.EPSILON), v: 0 } }).outcome).not.toBe(sampled({}).outcome);
    expect(sampled({ weight: 0.25 }).outcome).toBe(sampled({}).outcome);
  });

  it("writes the largest residual share of a tolerance that any hit inside a carrier takes", () => {
    /* Shares that are powers of two, so each quotient is exact. */
    const tolerance = 1e-12;
    const ray = (z: number, share: number | null, heldTo: number | null = tolerance) =>
      trace(z, {}, { residual: share === null ? null : share * tolerance, effectiveTolerance: heldTo });
    const shareOf = (value: object) => (createResultEncoder()(value) as { residualShare: unknown }).residualShare;
    expect(shareOf(ray(5, 0.5))).toBe(0.5);
    expect(shareOf(ray(5, -0.25))).toBe(0.25);
    expect(shareOf(ray(5, 2))).toBe(2);
    /* The share is of the hit's own tolerance, which a stalled root relaxes. */
    expect(shareOf(ray(5, 2, 4 * tolerance))).toBe(0.5);
    expect(shareOf({ ...ray(5, 0.5), hits: [hit(5, { residual: tolerance }), hit(6, { residual: -0 })] })).toBe(1);
    /* A fallback point carries neither member; a trace of such points alone has no share to give. */
    expect(shareOf(ray(5, null, null))).toBeNull();
    expect(shareOf({ ...ray(5, 0.5), hits: [] })).toBeNull();
    /* A residual with no contract to meet has broken it, as the comparison reads a hit it can see. */
    expect(shareOf(ray(5, Number.NaN))).toBe("$+Inf");
    expect(shareOf(ray(5, 0.5, 0))).toBe("$+Inf");

    /* A carrier takes the largest of the carriers inside it, whether it digested them itself or found them
     * digested already: here the bundle comes first, and the posed pair after it shares its quiet trace. */
    const [quiet, loud] = [ray(5, 0.125), ray(7, -0.5)];
    const encoded = createResultEncoder()({
      fieldSample: {
        pupilBundle: {
          kind: "circular",
          samples: [
            { trace: { localTrace: quiet, cameraTrace: quiet } },
            { trace: { localTrace: quiet, cameraTrace: loud } },
          ],
        },
      },
      chiefTrace: { localTrace: quiet, cameraTrace: quiet },
      later: { localTrace: loud, cameraTrace: ray(9, null, null) },
    }) as unknown as Record<string, { residualShare: unknown; pupilBundle: { residualShare: unknown } }>;
    expect(encoded.fieldSample.pupilBundle.residualShare).toBe(0.5);
    expect(encoded.chiefTrace.residualShare).toBe(0.125);
    expect(encoded.later.residualShare).toBe(0.5);
  });

  it("writes the largest effective tolerance of any hit inside a carrier", () => {
    /* A residual share is of the tolerance its own hit recorded, so the tolerance has to be held as well. */
    const ray = (z: number, ...tolerances: (number | null)[]) => ({
      ...trace(z),
      hits: tolerances.map((effectiveTolerance, index) => hit(z + index, { effectiveTolerance })),
    });
    const toleranceOf = (value: object) =>
      (createResultEncoder()(value) as { largestTolerance: unknown }).largestTolerance;
    expect(toleranceOf(ray(5, 1e-12, 1e-12))).toBe(1e-12);
    expect(toleranceOf(ray(5, 1e-12, 3.7e-12, 2e-12))).toBe(3.7e-12);
    /* A fallback point has no tolerance; a trace of such points alone, or of no hits, has none to give. */
    expect(toleranceOf(ray(5, null, 2e-12))).toBe(2e-12);
    expect(toleranceOf(ray(5, null, null))).toBeNull();
    expect(toleranceOf(ray(5))).toBeNull();
    /* A tolerance that is not a number at all stays one: it is no bound, and no larger one may stand in for it. */
    expect(toleranceOf(ray(5, 1e-12, Number.NaN, 2e-12))).toBe("$NaN");

    /* A carrier takes the largest of the carriers inside it, digested there or found digested already, as it
     * takes their largest share. */
    const [quiet, stalled] = [ray(5, 1e-12), ray(7, 1e-12, 5e-12)];
    const encoded = createResultEncoder()({
      fieldSample: {
        pupilBundle: {
          kind: "circular",
          samples: [
            { trace: { localTrace: quiet, cameraTrace: quiet } },
            { trace: { localTrace: quiet, cameraTrace: stalled } },
          ],
        },
      },
      chiefTrace: { localTrace: quiet, cameraTrace: quiet },
      later: { localTrace: stalled, cameraTrace: ray(9, null) },
    }) as unknown as Record<string, { largestTolerance: unknown; pupilBundle: { largestTolerance: unknown } }>;
    expect(encoded.fieldSample.pupilBundle.largestTolerance).toBe(5e-12);
    expect(encoded.chiefTrace.largestTolerance).toBe(1e-12);
    expect(encoded.later.largestTolerance).toBe(5e-12);
  });

  it("records a throw as an outcome with the error's discriminating member", () => {
    class SectionError extends Error {
      readonly section = "coma";
      constructor() {
        super("unavailable while the lens is moved");
        this.name = "AnalysisSectionUnavailableError";
      }
    }
    expect(outcomeOf(() => 3)).toEqual({ ok: true, value: 3 });
    expect(
      outcomeOf(() => {
        throw new SectionError();
      }),
    ).toEqual({
      ok: false,
      error: {
        name: "AnalysisSectionUnavailableError",
        message: "unavailable while the lens is moved",
        section: "coma",
      },
    });
    expect(
      outcomeOf(() => {
        throw "plain text";
      }),
    ).toEqual({ ok: false, error: { name: "NonError", message: "plain text" } });
  });
});

/* ── seamAdapter.ts ── */

describe("engineDiff seam adapter", () => {
  const candidates = {
    traceRay: [
      ["trace", "traceRay"],
      ["compat", "traceEngineRay2"],
    ],
    buildLens: [["buildLens", "default"]],
  } as const;
  const older = { compat: { traceEngineRay2: "old trace" }, buildLens: { default: "build" } };

  it("takes the first candidate export that exists", () => {
    const { exports, sources } = resolveCapabilities({ ...older, trace: { traceRay: "new trace" } }, candidates);
    expect(exports).toEqual({ traceRay: "new trace", buildLens: "build" });
    expect(sources).toEqual({ traceRay: "trace.traceRay", buildLens: "buildLens.default" });
  });

  it("falls back to an older name when the newer module or export is missing at a ref", () => {
    expect(resolveCapabilities(older, candidates).sources.traceRay).toBe("compat.traceEngineRay2");
    expect(resolveCapabilities({ ...older, trace: {} }, candidates).sources.traceRay).toBe("compat.traceEngineRay2");
  });

  it("names every capability it cannot resolve in one error", () => {
    expect(() => resolveCapabilities({ compat: {} }, candidates)).toThrow(
      /2 capability\(ies\).*traceRay \(tried trace\.traceRay, compat\.traceEngineRay2\); buildLens \(tried buildLens\.default\)/,
    );
  });

  it("resolves every capability against this checkout", () => {
    const seam = resolveSeam();
    const optional = resolveOptionalSeam();
    const sources = describeSeam();
    const absent = Object.keys(sources).filter(
      (capability) => sources[capability as keyof typeof sources] === "absent",
    );
    expect(Object.keys(sources).sort()).toEqual([...Object.keys(seam), ...Object.keys(optional), ...absent].sort());
    expect(sources.traceRay).toBe("compat.traceEngineRay2");
    expect(seam.buildLens).toBe(buildLens);
    /* From S2.P2.T1 canonical ingest reads a file of either version by its schema. */
    expect(optional).toEqual({
      ingestLens,
      ingestTeleconverter,
      lensView: toLensData,
      teleconverterView: toTeleconverterData,
    });
    expect(sources.ingestLens).toBe("buildLens.ingestLens");
    expect(sources.ingestTeleconverter).toBe("buildLens.ingestTeleconverter");
    /* S2.P1.T2 deleted the V1 defaults object; the catalog merge at this checkout is ingest and the V1 view. */
    expect(absent).toEqual(["lensDefaults"]);
  });

  it("leaves out an optional capability a ref lacks, without failing the rest", () => {
    const optionalCandidates = { ingest: [["buildLens", "ingestLensV1"]], ...candidates } as const;
    const { exports, sources } = resolveOptionalCapabilities(older, optionalCandidates);
    expect(exports).toEqual({ traceRay: "old trace", buildLens: "build" });
    expect(sources).toEqual({ ingest: "absent", traceRay: "compat.traceEngineRay2", buildLens: "buildLens.default" });
    expect(Object.hasOwn(exports, "ingest")).toBe(false);
  });
});

/* ── requests.ts and the catalog export ── */

describe("engineDiff catalog export", () => {
  const files = ownCatalogFiles();

  it("serializes every lens and teleconverter file, hidden ones included, in key order", () => {
    expect(CATALOG.lenses).toHaveLength(Object.keys(files.lenses).length);
    expect(CATALOG.teleconverters).toHaveLength(Object.keys(files.teleconverters).length);
    expect(CATALOG.teleconverters.length).toBeGreaterThan(0);
    const keys = CATALOG.lenses.map((lens) => lens.key);
    expect(keys).toEqual([...keys].sort());
    expect(CATALOG.lenses.some(({ prescription }) => (decodeValue(prescription) as LensData).visible === false)).toBe(
      true,
    );
  });

  it("round-trips each authored prescription through JSON text, non-finite values included", () => {
    const offenders: string[] = [];
    let nonFinite = 0;
    for (const entry of [...CATALOG.lenses, ...CATALOG.teleconverters]) {
      const authored = files.lenses[entry.file] ?? files.teleconverters[entry.file];
      const text = JSON.stringify(entry.prescription);
      if (text.includes('"$+Inf"') || text.includes('"$NaN"')) nonFinite++;
      try {
        /* toEqual, not toStrictEqual: a member authored as `undefined` is written as an absent key by design. */
        expect(decodeValue(JSON.parse(text) as EncodedValue)).toEqual(authored);
      } catch {
        offenders.push(entry.file);
      }
    }
    expect(offenders).toEqual([]);
    /* Plain JSON would turn these into null; the catalog holds at least one. */
    expect(nonFinite).toBeGreaterThan(0);
  });

  it("validates head converters even without pairs, and leaves base refusals as authored", () => {
    /* A converter can be refused without any pair build seeing it. Keep the guard independent of pair selection. */
    const fixture = FIXTURE_PAIRS.find((pair) => pair.kind === "teleconverter")!;
    const malformed = { ...fixture.v2, catalog: { ...fixture.v2.catalog, lensMounts: null as never } };
    expect(() => ingestTeleconverter(malformed)).not.toThrow();
    const files = vi.spyOn(seamAdapter, "ownCatalogFiles");
    try {
      for (const valid of [fixture.v1, fixture.v2]) {
        files.mockReturnValue({ lenses: {}, teleconverters: { "fixture.teleconverter.ts": valid } });
        expect(exportCatalog({ validateTeleconverters: true })).toEqual(exportCatalog());
        expect(exportCatalog().pairs).toEqual([]);
      }
      for (const refused of [{ ...fixture.v2, unknownField: true }, { ...fixture.v1, schema: 3 }, malformed]) {
        files.mockReturnValue({ lenses: {}, teleconverters: { "fixture.teleconverter.ts": refused } });
        const result = outcomeOf(() => toTeleconverterData(ingestTeleconverter(refused)));
        expect(result.ok).toBe(false);
        if (result.ok) throw new Error("the fixture's ingest or view must fail");
        expect(() => exportCatalog({ validateTeleconverters: true })).toThrow(
          `${refused.key}: ${result.error.name}: ${result.error.message}`,
        );
        expect(exportCatalog().teleconverters[0].prescription).toEqual(encodeValue(refused));
        expect(catalogTeleconverterData(refused as TeleconverterData)).toBe(refused);
      }
    } finally {
      files.mockRestore();
    }
    expect(exportCatalog({ validateTeleconverters: true })).toEqual(CATALOG);
  });

  it("lists exactly the pairs the fit predicate allows, as host and converter keys", () => {
    const seam = resolveSeam();
    const lenses = new Map(CATALOG.lenses.map((lens) => [lens.key, decodeValue(lens.prescription) as LensData]));
    expect(CATALOG.pairs.length).toBeGreaterThan(0);
    const expected = CATALOG.lenses.flatMap((host) =>
      CATALOG.teleconverters
        .filter(
          (converter) =>
            seam.teleconverterCompatibility(
              catalogLensData(lenses.get(host.key)!),
              catalogTeleconverterData(decodeValue(converter.prescription) as TeleconverterData),
            ).ok,
        )
        .map((converter) => ({ host: host.key, teleconverter: converter.key })),
    );
    expect(CATALOG.pairs).toEqual(expected);
    /* The same question of a catalog that is handed in: how a driver asks another engine about these prescriptions. */
    expect(permittedPairs(CATALOG)).toEqual(expected);
    const { host } = expected[0];
    const withoutHost = { ...CATALOG, lenses: CATALOG.lenses.filter((lens) => lens.key !== host) };
    expect(permittedPairs(withoutHost)).toEqual(expected.filter((pair) => pair.host !== host));
    expect(permittedPairs({ ...CATALOG, teleconverters: [] })).toEqual([]);
  });

  it("permits no pair of a prescription the engine cannot read, and says which pairs it cannot build", () => {
    /* An engine may be handed a prescription in a form it predates. The predicate throws on a host with no
     * surfaces and on a converter with no mounts; neither may end the question. */
    const idOf = ({ host, teleconverter }: SerializedCatalog["pairs"][number]) => lensId({ key: host, teleconverter });
    const { host, teleconverter } = CATALOG.pairs[0];
    const edited = (
      kind: "lenses" | "teleconverters",
      key: string,
      edit: (data: Record<string, unknown>) => unknown,
    ): SerializedCatalog => ({
      ...CATALOG,
      [kind]: CATALOG[kind].map((entry) =>
        entry.key === key
          ? { ...entry, prescription: encodeValue(edit(decodeValue(entry.prescription) as never)) }
          : entry,
      ),
    });
    const unreadable = ({ surfaces: _surfaces, lensMounts: _lensMounts, ...rest }: Record<string, unknown>) => ({
      ...rest,
      schema: 2,
    });
    const reshaped: SerializedCatalog = {
      ...edited("lenses", host, unreadable),
      teleconverters: edited("teleconverters", teleconverter, unreadable).teleconverters,
    };
    const lost = (pair: SerializedCatalog["pairs"][number]) =>
      pair.host === host || pair.teleconverter === teleconverter;
    expect(permittedPairs(reshaped)).toEqual(CATALOG.pairs.filter((pair) => !lost(pair)));

    /* Each pair is asked for its build record, and the answer is the pair's own: every pair of the unreadable
     * host and of the unreadable converter, and no other. */
    expect(unbuiltPairs(CATALOG, CATALOG.pairs)).toEqual({});
    const unbuilt = unbuiltPairs(reshaped, CATALOG.pairs);
    expect(Object.keys(unbuilt).sort()).toEqual(CATALOG.pairs.filter(lost).map(idOf).sort());
    expect(CATALOG.pairs.some((pair) => pair.teleconverter === teleconverter && pair.host !== host)).toBe(true);
    for (const said of Object.values(unbuilt)) expect(said).toMatch(/^\w*Error: ./);
    /* It is what a capture records for the pair's build constants, so a run that meets the pair finds the same. */
    for (const pair of CATALOG.pairs) {
      const [build] = captureRecords(reshaped, [
        { lens: { key: pair.host, teleconverter: pair.teleconverter }, state: null, family: "build" },
      ]);
      expect(build.payload.ok, idOf(pair)).toBe(!Object.hasOwn(unbuilt, idOf(pair)));
      if (!build.payload.ok) {
        expect(`${build.payload.error.name}: ${build.payload.error.message}`).toBe(unbuilt[idOf(pair)]);
      }
    }
    /* Only the pairs asked about are tried, and one named twice is built once. */
    expect(unbuiltPairs(reshaped, [])).toEqual({});
    expect(unbuiltPairs(reshaped, [CATALOG.pairs[0], CATALOG.pairs[0]])).toEqual({
      [idOf(CATALOG.pairs[0])]: unbuilt[idOf(CATALOG.pairs[0])],
    });

    /* A host that does not build alone says nothing of its pairs. The composer drops a host's sibling
     * configurations, so a host whose own are in a form the engine cannot read still composes and builds. */
    const hostAlone = edited("lenses", host, (data) => ({
      ...toLensDataInput(ingestLens(data as unknown as LensDataInput)),
      opticalConfiguration: "in another form",
    }));
    const [alone] = captureRecords(hostAlone, [{ lens: { key: host }, state: null, family: "build" }]);
    expect(alone.payload.ok).toBe(false);
    expect(unbuiltPairs(hostAlone, CATALOG.pairs)).toEqual({});
    /* Nor does one pair that does not build say anything of its converter's other pairs. */
    const onePair = edited("teleconverters", teleconverter, (data) => ({ ...data, incompatibleLensKeys: [host] }));
    expect(unbuiltPairs(onePair, CATALOG.pairs)).toEqual({
      [idOf(CATALOG.pairs[0])]: expect.stringMatching(/^TeleconverterAttachError: .*excluded$/),
    });

    expect(() => unbuiltPairs(CATALOG, [{ host: "engine-diff-absent", teleconverter }])).toThrow(
      "the supplied catalog has no lens engine-diff-absent",
    );
  });
});

describe("engineDiff Tier P requests", () => {
  const zoomKeys = new Set(
    requestCatalog(CATALOG)
      .lenses.filter((lens) => lens.zoomStations >= 2)
      .map((lens) => lens.key),
  );
  const familiesByLensState = new Map<string, RequestFamily[]>();
  for (const request of TIER_P) {
    const lensState = `${lensId(request.lens)}|${stateId(request.state)}`;
    familiesByLensState.set(lensState, [...(familiesByLensState.get(lensState) ?? []), request.family]);
  }
  const familiesAt = (id: string, state: string) => familiesByLensState.get(`${id}|${state}`) ?? [];
  const LAST_ZOOM = stateId({ ...DEFAULT_STATE, zoomT: 1 });
  const stateFamilies: RequestFamily[] = ["layout", "traces", "fieldGeometry", "chiefSolves"];

  it("is the same list on every build, grouped by lens in code-unit order, with no duplicates", () => {
    expect(tierRequests("p", requestCatalog(exportCatalog()))).toEqual(TIER_P);
    const ids = TIER_P.map((request) => lensId(request.lens));
    expect(ids).toEqual([...ids].sort());
    const identities = TIER_P.map((request) => `${lensId(request.lens)}|${stateId(request.state)}|${request.family}`);
    expect(new Set(identities).size).toBe(identities.length);
  });

  it("asks every catalog lens for build constants and the state families at the first and last zoom station", () => {
    const offenders: string[] = [];
    for (const { key } of CATALOG.lenses) {
      const lensLevel = familiesAt(key, stateId(null));
      const first = familiesAt(key, stateId(DEFAULT_STATE)).filter((family) => stateFamilies.includes(family));
      const last = familiesAt(key, LAST_ZOOM);
      const complete =
        JSON.stringify(lensLevel) === JSON.stringify(["build"]) &&
        JSON.stringify(first) === JSON.stringify(stateFamilies) &&
        JSON.stringify(last) === JSON.stringify(zoomKeys.has(key) ? stateFamilies : []);
      if (!complete) offenders.push(key);
    }
    expect(offenders).toEqual([]);
    expect(zoomKeys.size).toBeGreaterThan(0);
    expect(zoomKeys.size).toBeLessThan(CATALOG.lenses.length);
  });

  it("covers one converter pair, in the analysis row, with its composition and the first row's families", () => {
    const pairIds = TIER_P.filter((request) => request.lens.teleconverter).map((request) => lensId(request.lens));
    expect([...new Set(pairIds)]).toEqual([PAIR_ID]);
    /* The catalog permits more pairs than that; the rest are another tier's. */
    expect(CATALOG.pairs.length).toBeGreaterThan(1);
    expect(familiesAt(PAIR_ID, stateId(null))).toEqual(["composition", "build"]);
    expect(familiesAt(PAIR_ID, stateId(DEFAULT_STATE))).toEqual([...stateFamilies, "analysis", "mtf"]);
    /* Its host is a zoom, and the pair is asked at the default state alone. */
    expect(zoomKeys.has(PAIR.key)).toBe(true);
    expect(pairIds).toHaveLength(8);
  });

  it("asks the benchmark lenses and feature representatives for every analysis job and MTF", () => {
    const analysed = TIER_P.filter((request) => request.family === "analysis");
    const representatives = [
      ...BENCHMARK_LENS_KEYS.map((key) => ({ key })),
      ...FEATURE_REPRESENTATIVES.map((r) => r.lens),
    ];
    expect(representatives).toHaveLength(26);
    expect(new Set(analysed.map((request) => lensId(request.lens)))).toEqual(new Set(representatives.map(lensId)));
    /* One default state each, plus the three states that put a feature to work. */
    expect(analysed).toHaveLength(29);
    expect(analysed.filter((request) => stateId(request.state) !== stateId(DEFAULT_STATE)).map((r) => r.state)).toEqual(
      expect.arrayContaining([
        { ...DEFAULT_STATE, shiftMm: 6, tiltDeg: 4 },
        { ...DEFAULT_STATE, focusT: 1 },
        { ...DEFAULT_STATE, aberrationT: 1 },
      ]),
    );
    expect(TIER_P.filter((request) => request.family === "mtf").map((r) => [r.lens, r.state])).toEqual(
      analysed.map((r) => [r.lens, r.state]),
    );
  });

  it("sends a changed lens through every request of the tier", () => {
    /* A lens of the first row only, and one the analysis row already carries. */
    const plain = CATALOG.lenses
      .map((lens) => lens.key)
      .find((key) => !familiesAt(key, stateId(DEFAULT_STATE)).includes("analysis"))!;
    const changed = tierRequests("p", { ...requestCatalog(CATALOG), changedLensKeys: [plain, SERENAR, plain] });
    const known = new Set(TIER_P.map((request) => JSON.stringify(request)));
    const added = changed.filter((request) => !known.has(JSON.stringify(request)));
    expect(added).toEqual([
      { lens: { key: plain }, state: DEFAULT_STATE, family: "analysis" },
      { lens: { key: plain }, state: DEFAULT_STATE, family: "mtf" },
    ]);
    expect(changed).toHaveLength(TIER_P.length + 2);
    /* Its requests stay together, the first row's ahead of the added ones. */
    const families = changed.filter((request) => request.lens.key === plain).map((request) => request.family);
    expect(families.slice(0, 5)).toEqual(["build", ...stateFamilies]);
    expect(families.slice(-2)).toEqual(["analysis", "mtf"]);
    expect(() => tierRequests("p", { ...requestCatalog(CATALOG), changedLensKeys: ["engine-diff-absent"] })).toThrow(
      "engine-diff-absent",
    );
  });

  it("sends every pair of a changed converter or host through the tier as well", () => {
    /** What the tier asks beyond its own list when the given keys are named as changed. */
    const added = (changed: { changedLensKeys?: string[]; changedTeleconverterKeys?: string[] }) => {
      const list = tierRequests("p", { ...requestCatalog(CATALOG), ...changed });
      expect(new Set(list.map((request) => JSON.stringify(request))).size).toBe(list.length);
      const known = new Set(TIER_P.map((request) => JSON.stringify(request)));
      return list.filter((request) => !known.has(JSON.stringify(request)));
    };
    const idsOf = (requests: readonly CaptureRequest[]) => [...new Set(requests.map(({ lens }) => lensId(lens)))];
    const pairIds = (pairs: typeof CATALOG.pairs) =>
      pairs.map(({ host, teleconverter }) => lensId({ key: host, teleconverter })).sort();

    /* A converter other than the representative's: the tier names none of its pairs by itself. */
    const converter = CATALOG.pairs.find((pair) => pair.teleconverter !== PAIR.teleconverter)!.teleconverter;
    const formed = CATALOG.pairs.filter((pair) => pair.teleconverter === converter);
    expect(formed.length).toBeGreaterThan(1);
    const byConverter = added({ changedTeleconverterKeys: [converter] });
    /* Each pair is asked what the representative pair is: its composition and every family, at the default state. */
    const atDefaultState: RequestFamily[] = [...stateFamilies, "analysis", "mtf"];
    const everything: [typeof DEFAULT_STATE | null, RequestFamily][] = [
      [null, "composition"],
      [null, "build"],
      ...atDefaultState.map((family): [typeof DEFAULT_STATE, RequestFamily] => [DEFAULT_STATE, family]),
    ];
    expect(byConverter.map(({ lens, state, family }) => [lensId(lens), state, family])).toEqual(
      pairIds(formed).flatMap((id) => everything.map(([state, family]) => [id, state, family])),
    );

    /* A changed host takes its pairs with it. */
    const { host } = formed[0];
    expect(idsOf(added({ changedLensKeys: [host] })).sort()).toEqual(
      [host, ...pairIds(CATALOG.pairs.filter((pair) => pair.host === host))].sort(),
    );
    /* The representative pair is in the tier already; its converter adds the other pairs it forms. */
    expect(idsOf(added({ changedTeleconverterKeys: [PAIR.teleconverter!] })).sort()).toEqual(
      pairIds(CATALOG.pairs.filter((pair) => pair.teleconverter === PAIR.teleconverter)).filter((id) => id !== PAIR_ID),
    );
    /* A converter that forms no pair has nothing to be asked through. */
    expect(added({ changedTeleconverterKeys: ["engine-diff-absent"] })).toEqual([]);
  });

  it("keeps its copies of the benchmark lens set and the analysis accessors equal to the engine's", () => {
    /* requests.ts can import neither: the capture bundle is built without React and without naming the engine. */
    expect([...BENCHMARK_LENS_KEYS]).toEqual([...DEFAULT_BENCHMARK_LENS_KEYS]);

    const seam = resolveSeam();
    const lens = seam.buildLens(
      decodeValue(CATALOG.lenses.find((entry) => entry.key === SERENAR)!.prescription) as LensData,
    );
    const preparedState = seam.prepareState(lens, 0, 0);
    const context = seam.createAnalysisContext({
      preparedState,
      dynamicEFL: seam.eflAtFocus(0, 0, lens),
      currentEPSD: lens.EP.epSD,
      currentPhysStopSD: lens.stopPhysSD,
      perspectiveTraceContext: seam.createPerspectiveTraceContext({
        preparedState,
        movement: { shiftMm: 0, tiltDeg: 0 },
      }),
    });
    /* Every `compute*` function of a context that has its perspective half: the centered and the perspective jobs. */
    const accessors = Object.entries(context)
      .filter(([name, member]) => name.startsWith("compute") && typeof member === "function")
      .map(([name]) => name);
    expect(accessors.sort()).toEqual([...ANALYSIS_CONTEXT_JOBS].sort());
  });

  it("refuses to build when a representative has left the catalog", () => {
    const { lenses, pairs } = requestCatalog(CATALOG);
    expect(() => tierRequests("p", { lenses: lenses.filter((lens) => lens.key !== SERENAR), pairs })).toThrow(SERENAR);
    expect(() => tierRequests("p", { lenses, pairs: [] })).toThrow(/fujifilm-xf2x-tc-wr/);
  });

  it("names representatives that still carry their feature", () => {
    /* A representative whose data loses the feature would keep its row and quietly stop covering it. */
    const lenses = new Map(
      CATALOG.lenses.map((lens) => [
        lens.key,
        toLensDataInput(ingestLens(decodeValue(lens.prescription) as LensDataInput)),
      ]),
    );
    const carries: Record<string, (data: LensDataInput, state: Partial<typeof DEFAULT_STATE>) => boolean> = {
      fisheye: (data) => data.projection !== undefined && data.projection.kind !== "rectilinear",
      "folded-auto-path": (data) => data.opticalPath?.mode === "auto",
      "folded-explicit-order": (data) => (data.opticalPath?.surfaceOrder?.length ?? 0) > 0,
      diffractive: (data) => data.surfaces.some((surface) => surface.diffractive),
      "bulk-absorption": (data) => data.elements.some((element) => element.absorptionCoefficientPerMm),
      "rear-plates": (data) => (data.rearPlates?.length ?? 0) > 0,
      "converter-pair": (data) => data.acceptsTeleconverters === true,
      "perspective-control": (data, state) => {
        const [minShift, maxShift] = data.perspectiveControl?.shiftRangeMm ?? [0, 0];
        const [minTilt, maxTilt] = data.perspectiveControl?.tiltRangeDeg ?? [0, 0];
        const { shiftMm = 0, tiltDeg = 0 } = state;
        return shiftMm > minShift && shiftMm < maxShift && tiltDeg > minTilt && tiltDeg < maxTilt && tiltDeg !== 0;
      },
      "finite-conjugate": (data, state) =>
        (data.finiteConjugates ?? []).some((conjugate) => conjugate.focusT === state.focusT),
      "fixed-iris-zoom": (data) => data.zoomApertureModel === "fixed-iris",
      "aberration-control": (data, state) => data.aberrationControl !== undefined && state.aberrationT !== 0,
    };
    const offenders = FEATURE_REPRESENTATIVES.filter(({ feature, lens, featureState }) => {
      const data = lenses.get(lens.key);
      return !data || !carries[feature](data, featureState ?? {});
    }).map(({ feature }) => feature);
    expect(offenders).toEqual([]);
    expect(Object.keys(carries).sort()).toEqual(FEATURE_REPRESENTATIVES.map(({ feature }) => feature).sort());
  });
});

describe("engineDiff request catalog", () => {
  it("reads each lens's stations, ring and path as the built lens has them", () => {
    const seam = resolveSeam();
    const offenders: string[] = [];
    REQUEST_CATALOG.lenses.forEach((facts, index) => {
      const lens = seam.buildLens(decodeValue(CATALOG.lenses[index].prescription) as LensData);
      const ring = lens.aberrationControl;
      const agrees =
        facts.key === CATALOG.lenses[index].key &&
        facts.zoomStations === (lens.zoomPositions?.length ?? 1) &&
        JSON.stringify(facts.focusPositions) === JSON.stringify(lens.focusPositions) &&
        facts.aberrationControl === (!ring ? null : ring.centerLabel != null ? "centered" : "two-position") &&
        facts.folded === lens.isFoldedOptics &&
        facts.perspectiveControl === (lens.perspectiveControl !== null) &&
        (facts.projection === null || facts.projection === lens.projection.kind);
      if (!agrees) offenders.push(facts.key);
    });
    expect(offenders).toEqual([]);
  });

  it("finds every feature the stage tier chooses lenses by somewhere in the catalog", () => {
    /* A feature no lens carried would leave its stratum empty, and the reader below it untested. */
    const { lenses } = REQUEST_CATALOG;
    expect(new Set(lenses.map((lens) => lens.aberrationControl))).toEqual(new Set([null, "centered", "two-position"]));
    expect(new Set(lenses.map((lens) => lens.projection)).size).toBeGreaterThan(2);
    expect(new Set(lenses.map((lens) => lens.rearPlateMaker)).size).toBeGreaterThan(2);
    for (const feature of ["folded", "perspectiveControl", "diffractive", "absorbing"] as const) {
      const carriers = lenses.filter((lens) => lens[feature]).length;
      expect(carriers).toBeGreaterThan(0);
      expect(carriers).toBeLessThan(lenses.length / 10);
    }
    expect(lenses.some((lens) => lens.focusPositions.length > 2)).toBe(true);
    expect(lenses.every((lens) => lens.focusPositions[0] === 0 && lens.focusPositions.at(-1) === 1)).toBe(true);
  });
});

describe("engineDiff on V2 prescriptions", () => {
  /* A three-station zoom with three focus keyframes, and a host with the converter it fits, in both versions. */
  const FAMILIES = ["zoom with focus keyframes", "converter host"];
  const fixtureCatalog = (version: "v1" | "v2"): SerializedCatalog => {
    const lenses = FIXTURE_PAIRS.filter((pair) => FAMILIES.includes(pair.family)).map((pair) => pair[version]);
    const converter = FIXTURE_PAIRS.find((pair) => pair.kind === "teleconverter")![version];
    const catalog: SerializedCatalog = {
      lenses: lenses.map((lens) => ({ key: lens.key, file: "fixture", prescription: encodeValue(lens) })),
      teleconverters: [{ key: converter.key, file: "fixture", prescription: encodeValue(converter) }],
      pairs: [],
    };
    return { ...catalog, pairs: permittedPairs(catalog) };
  };

  /**
   * Tier S of the catalog with a fixture set added, cut down to the fixture lenses' requests. Every tier names
   * catalog lenses, so a fixture set alone has no tier; its station rows come from its own facts either way.
   */
  const fixtureRequests = (catalog: SerializedCatalog) => {
    const fixtures = requestCatalog(catalog);
    return tierRequests("s", {
      lenses: [...REQUEST_CATALOG.lenses, ...fixtures.lenses],
      pairs: [...REQUEST_CATALOG.pairs, ...fixtures.pairs],
    }).filter((request) => request.lens.key.startsWith("fixture-"));
  };

  it("derives the same request list and the same permitted pairs from a V2 set as from its V1 twin", () => {
    const [v1, v2] = [fixtureCatalog("v1"), fixtureCatalog("v2")];
    expect(v1.pairs).toEqual([{ host: "fixture-converter-host", teleconverter: "test-teleconverter" }]);
    expect(v2.pairs).toEqual(v1.pairs);
    expect(requestCatalog(v2)).toEqual(requestCatalog(v1));
    expect(requestCatalog(v1).lenses.find((lens) => lens.key === "fixture-zoom-focus-keyframes")).toMatchObject({
      zoomStations: 3,
      focusPositions: [0, 0.5, 1],
    });
    const requests = fixtureRequests(v1);
    expect(requests.filter((request) => request.lens.teleconverter).length).toBeGreaterThan(0);
    expect(fixtureRequests(v2)).toEqual(requests);
  });

  it("captures the same records from a V2 set as from its V1 twin", () => {
    const [v1, v2] = [fixtureCatalog("v1"), fixtureCatalog("v2")];
    const requests = fixtureRequests(v1);
    const records = captureRecords(v1, requests);
    /* A record per request, in order, each successful: a capture that returned nothing, or failed alike on both
     * twins, would compare equal too. */
    const row = (lens: string, state: CaptureState | null, family: string, variant?: string) =>
      `${lens} | ${stateId(state)} | ${family} | ${variant ?? ""}`;
    expect(records.map((record) => row(record.lens, record.state, record.request, record.variant))).toEqual(
      requests.map((request) => row(lensId(request.lens), request.state, request.family, request.variant)),
    );
    expect(records.filter((record) => !record.payload.ok)).toEqual([]);
    /* The kinds the comparison stands for: the pair's composition and analysis, a build of each lens and of the pair,
     * and every lens's state rows, the zoom's at each of its three stations and three focus keyframes. */
    const families = (lens: string) =>
      new Set(records.filter((record) => record.lens === lens).map((record) => record.request));
    const perLens = ["build", "layout", "traces", "fieldGeometry", "chiefSolves"];
    expect(families("fixture-converter-host+test-teleconverter")).toEqual(
      new Set(["composition", ...perLens, "analysis"]),
    );
    expect(families("fixture-converter-host")).toEqual(new Set(perLens));
    expect(families("fixture-zoom-focus-keyframes")).toEqual(new Set(perLens));
    const zoomStates = records
      .filter((record) => record.lens === "fixture-zoom-focus-keyframes" && record.state)
      .map((record) => `${record.state!.zoomT}/${record.state!.focusT}`);
    expect(new Set(zoomStates)).toEqual(
      new Set([0, 0.5, 1].flatMap((zoomT) => [0, 0.5, 1].map((focusT) => `${zoomT}/${focusT}`))),
    );
    expect(recordDigests(captureRecords(v2, requests))).toEqual(recordDigests(records));
  });
});

describe("engineDiff Tier S and Tier F requests", () => {
  const stateFamilies: RequestFamily[] = ["layout", "traces", "fieldGeometry", "chiefSolves"];
  const facts = new Map(REQUEST_CATALOG.lenses.map((lens) => [lens.key, lens]));
  const pairRefs = CATALOG.pairs.map(({ host, teleconverter }) => ({ key: host, teleconverter }));
  const stratified = stageAnalysisLenses(REQUEST_CATALOG);
  const strataOf = new Map(stratified.map(({ lens, strata }) => [lensId(lens), strata]));

  /** Per lens id, the state ids at which a tier asks the given families and nothing else of that set. */
  function statesAsked(tier: readonly CaptureRequest[], families: readonly RequestFamily[]): Map<string, string[]> {
    const familiesAt = new Map<string, Map<string, RequestFamily[]>>();
    for (const request of tier) {
      if (!families.includes(request.family) || request.variant !== undefined) continue;
      const states = familiesAt.get(lensId(request.lens)) ?? new Map<string, RequestFamily[]>();
      familiesAt.set(lensId(request.lens), states);
      states.set(stateId(request.state), [...(states.get(stateId(request.state)) ?? []), request.family]);
    }
    const asked = new Map<string, string[]>();
    for (const [id, states] of familiesAt) {
      const complete = [...states.values()].every((found) => JSON.stringify(found) === JSON.stringify(families));
      asked.set(id, complete ? [...states.keys()] : ["some state lacks a family"]);
    }
    return asked;
  }

  /* The states written out again from the tier table, not through the module's helpers. */
  const stations = (lens: CatalogLens): CaptureState[] =>
    Array.from({ length: lens.zoomStations }, (_, index) =>
      index === 0 ? 0 : index / (lens.zoomStations - 1),
    ).flatMap((zoomT) => lens.focusPositions.map((focusT) => ({ ...DEFAULT_STATE, zoomT, focusT })));
  const ringPositions = (lens: CatalogLens) =>
    lens.aberrationControl === "centered" ? [0, -1, 1] : lens.aberrationControl === "two-position" ? [0, 1] : [0];
  const firstRowStates = (lens: CatalogLens) =>
    stations(lens).flatMap((station) =>
      [0, STOPPED_DOWN_T].flatMap((stopdownT) =>
        ringPositions(lens).map((aberrationT) => stateId({ ...station, stopdownT, aberrationT })),
      ),
    );
  const analysedStates = (lens: CatalogLens, stopdownTs: readonly number[]) =>
    stations(lens).flatMap((station) =>
      stopdownTs.flatMap((stopdownT) => [
        stateId({ ...station, stopdownT }),
        ...(lens.perspectiveControl ? [stateId({ ...station, stopdownT, ...MOVED_POSE })] : []),
      ]),
    );
  /** Lens ids whose asked states are not the expected ones, in order. */
  const mismatches = (asked: Map<string, string[]>, expected: Map<string, string[]>) =>
    [...new Set([...asked.keys(), ...expected.keys()])].filter(
      (id) => JSON.stringify(asked.get(id)) !== JSON.stringify(expected.get(id)),
    );
  const everyLensAndPair = (statesOf: (lens: CatalogLens) => string[]) =>
    new Map([
      ...REQUEST_CATALOG.lenses.map((lens): [string, string[]] => [lens.key, statesOf(lens)]),
      ...pairRefs.map((pair): [string, string[]] => [lensId(pair), statesOf(facts.get(pair.key)!)]),
    ]);

  it("are the same lists on every build and for any order of the catalog, grouped by lens, with no duplicates", () => {
    const rebuilt = requestCatalog(exportCatalog());
    const reversed: RequestCatalog = {
      lenses: [...REQUEST_CATALOG.lenses].reverse(),
      pairs: [...REQUEST_CATALOG.pairs].reverse(),
    };
    for (const [tier, list] of [
      ["s", TIER_S],
      ["f", TIER_F],
    ] as const) {
      expect(tierRequests(tier, rebuilt)).toEqual(list);
      expect(tierRequests(tier, reversed)).toEqual(list);
      const ids = list.map((request) => lensId(request.lens));
      expect(ids).toEqual([...ids].sort());
      expect(new Set(list.map(requestIdentity)).size).toBe(list.length);
    }
  });

  it("ask every lens and every pair, at every authored station wide open and stopped down, for Tier P's first row", () => {
    const expected = everyLensAndPair(firstRowStates);
    expect(mismatches(statesAsked(TIER_S, stateFamilies), expected)).toEqual([]);
    expect(mismatches(statesAsked(TIER_F, stateFamilies), expected)).toEqual([]);

    /* Build constants of every lens; a pair is not a catalog lens, so its composition as well. */
    const lensLevel = new Map<string, RequestFamily[]>();
    for (const request of TIER_S) {
      if (request.state === null) {
        lensLevel.set(lensId(request.lens), [...(lensLevel.get(lensId(request.lens)) ?? []), request.family]);
      }
    }
    expect(
      [...lensLevel].filter(([id, found]) => found.join() !== (id.includes("+") ? "composition,build" : "build")),
    ).toEqual([]);
    expect(lensLevel.size).toBe(CATALOG.lenses.length + CATALOG.pairs.length);

    /* A prime with no focus table: its two focus ends, each wide open and stopped down. */
    expect(expected.get(SERENAR)).toEqual(
      [
        [0, 0],
        [0, STOPPED_DOWN_T],
        [1, 0],
        [1, STOPPED_DOWN_T],
      ].map(([focusT, stopdownT]) => stateId({ ...DEFAULT_STATE, focusT, stopdownT })),
    );
    /* Every Tier P first-row state is among them: the first and last zoom station at infinity, wide open. */
    const tierP = statesAsked(TIER_P, stateFamilies);
    expect(
      CATALOG.lenses.filter(({ key }) => !tierP.get(key)!.every((state) => expected.get(key)!.includes(state))),
    ).toEqual([]);
  });

  it("ask an aberration-control lens at both ends of its ring, and at the center where it has one", () => {
    const ringStates = (key: string) =>
      new Set(
        TIER_S.filter((request) => request.lens.key === key && request.family === "traces").map(
          (request) => request.state!.aberrationT,
        ),
      );
    const rings = REQUEST_CATALOG.lenses.filter((lens) => lens.aberrationControl !== null);
    expect(rings.filter((lens) => lens.aberrationControl === "centered").map((lens) => ringStates(lens.key))).toEqual(
      rings.filter((lens) => lens.aberrationControl === "centered").map(() => new Set([0, -1, 1])),
    );
    expect(
      rings.filter((lens) => lens.aberrationControl === "two-position").map((lens) => ringStates(lens.key)),
    ).toEqual(rings.filter((lens) => lens.aberrationControl === "two-position").map(() => new Set([0, 1])));
    expect(ringStates(SERENAR)).toEqual(new Set([0]));
  });

  it("choose the stage tier's analysis lenses by stratum, from the catalog alone", () => {
    const chosenFor = (stratum: string) =>
      stratified
        .filter(({ strata }) => strata.includes(stratum))
        .map(({ lens }) => lensId(lens))
        .sort();
    const carriers = (carries: (lens: CatalogLens) => boolean) =>
      REQUEST_CATALOG.lenses.filter(carries).map((lens) => lens.key);

    expect(chosenFor("folded")).toEqual(carriers((lens) => lens.folded));
    expect(chosenFor("perspective-control")).toEqual(carriers((lens) => lens.perspectiveControl));
    expect(chosenFor("diffractive")).toEqual(carriers((lens) => lens.diffractive));
    expect(chosenFor("absorbing")).toEqual(carriers((lens) => lens.absorbing));
    expect(chosenFor("converter-pair")).toEqual(pairRefs.map(lensId).sort());
    /* Every lens Tier P analyses: the benchmark set, and each feature's representative under its feature. */
    expect(chosenFor("benchmark")).toEqual([...BENCHMARK_LENS_KEYS].sort());
    expect(FEATURE_REPRESENTATIVES.map(({ feature }) => chosenFor(`feature:${feature}`))).toEqual(
      FEATURE_REPRESENTATIVES.map(({ lens }) => [lensId(lens)]),
    );

    /* One lens per projection kind and per rear-plate maker: the first in key order that carries it. */
    for (const [stratum, valueOf] of [
      ["projection", (lens: CatalogLens) => lens.projection],
      ["rear-plate-maker", (lens: CatalogLens) => lens.rearPlateMaker],
    ] as const) {
      const values = [...new Set(REQUEST_CATALOG.lenses.map(valueOf))].filter((value) => value !== null);
      expect(values.map((value) => chosenFor(`${stratum}:${value}`))).toEqual(
        values.map((value) => [REQUEST_CATALOG.lenses.find((lens) => valueOf(lens) === value)!.key]),
      );
    }

    /* The seeded draw takes its lenses from those no stratum names, and not simply the first in key order. */
    const drawn = chosenFor("seeded-draw");
    expect(drawn).toHaveLength(SEEDED_DRAW_COUNT);
    expect(drawn.map((id) => strataOf.get(id))).toEqual(drawn.map(() => ["seeded-draw"]));
    const offered = REQUEST_CATALOG.lenses
      .map((lens) => lens.key)
      .filter((key) => !strataOf.has(key) || drawn.includes(key));
    expect(drawn).not.toEqual(offered.slice(0, SEEDED_DRAW_COUNT));
    /* A lens outside the draw leaving the catalog, or the catalog arriving in another order, changes nothing. */
    const undrawn = offered.find((key) => !drawn.includes(key));
    const without = REQUEST_CATALOG.lenses.filter((lens) => lens.key !== undrawn);
    expect(without).toHaveLength(REQUEST_CATALOG.lenses.length - 1);
    expect(stageAnalysisLenses({ lenses: without.reverse(), pairs: REQUEST_CATALOG.pairs })).toEqual(stratified);
    /* One that was drawn is replaced by one lens, and the other nine stay. */
    const redrawn = stageAnalysisLenses({
      lenses: REQUEST_CATALOG.lenses.filter((lens) => lens.key !== drawn[0]),
      pairs: REQUEST_CATALOG.pairs,
    }).map(({ lens }) => lensId(lens));
    expect(redrawn.filter((id) => !strataOf.has(id))).toHaveLength(1);
    expect(stratified.map(({ lens }) => lensId(lens)).filter((id) => !redrawn.includes(id))).toEqual([drawn[0]]);
  });

  it("analyse the stratified lenses in Tier S and every lens in Tier F, a perspective-control lens moved as well", () => {
    /* Tier P's second row is in both tiers, and adds a representative's feature state where no station is one. */
    const withFeatureStates = (states: Map<string, string[]>) => {
      for (const { lens, featureState } of FEATURE_REPRESENTATIVES) {
        const state = stateId({ ...DEFAULT_STATE, ...featureState });
        const asked = states.get(lensId(lens))!;
        if (!asked.includes(state)) asked.push(state);
      }
      return states;
    };
    const analysed = statesAsked(TIER_S, ["analysis"]);
    const expected = withFeatureStates(
      new Map(
        stratified.map(({ lens }): [string, string[]] => [lensId(lens), analysedStates(facts.get(lens.key)!, [0])]),
      ),
    );
    expect(mismatches(analysed, expected)).toEqual([]);
    /* The ring's far end is such a state: a station has the ring at its corrected setting. */
    const ring = FEATURE_REPRESENTATIVES.find(({ feature }) => feature === "aberration-control")!;
    expect(analysed.get(ring.lens.key)).toContain(stateId({ ...DEFAULT_STATE, ...ring.featureState }));
    expect(analysedStates(facts.get(ring.lens.key)!, [0])).not.toContain(
      stateId({ ...DEFAULT_STATE, ...ring.featureState }),
    );
    expect(analysed.size).toBe(stratified.length);
    /* The moved pose is Tier P's, and a tilt-shift lens is analysed centered and moved at each station. */
    const tiltShift = FEATURE_REPRESENTATIVES.find(({ feature }) => feature === "perspective-control")!;
    expect(tiltShift.featureState).toEqual(MOVED_POSE);
    expect(analysed.get(tiltShift.lens.key)).toEqual(
      [0, 1].flatMap((focusT) => [
        stateId({ ...DEFAULT_STATE, focusT }),
        stateId({ ...DEFAULT_STATE, focusT, ...MOVED_POSE }),
      ]),
    );

    expect(
      mismatches(
        statesAsked(TIER_F, ["analysis"]),
        withFeatureStates(everyLensAndPair((lens) => analysedStates(lens, [0, STOPPED_DOWN_T]))),
      ),
    ).toEqual([]);
  });

  it("ask every named MTF request of the MTF benchmark's lenses, at their authored stations", () => {
    const mtf = TIER_S.filter((request) => request.family === "mtf" && request.variant !== undefined);
    expect(new Set(mtf.map((request) => lensId(request.lens)))).toEqual(new Set(MTF_BENCHMARK_LENS_KEYS));
    const offenders = MTF_BENCHMARK_LENS_KEYS.filter((key) => {
      const asked = mtf.filter((request) => request.lens.key === key).map((r) => `${stateId(r.state)}|${r.variant}`);
      const expected = stations(facts.get(key)!).flatMap((state) =>
        MTF_VARIANTS.map(({ id }) => `${stateId(state)}|${id}`),
      );
      return JSON.stringify(asked) !== JSON.stringify(expected);
    });
    expect(offenders).toEqual([]);
    /* The benchmark's own states are among them: the reference state, and close focus for its finite case. */
    const statesOf = (key: string) => mtf.filter((request) => request.lens.key === key).map((r) => stateId(r.state));
    expect(statesOf(SERENAR)).toContain(stateId(DEFAULT_STATE));
    expect(statesOf(MTF_BENCHMARK_LENS_KEYS.at(-1)!)).toContain(stateId({ ...DEFAULT_STATE, focusT: 1 }));
    /* The family's own request, the small geometric one, is asked where Tier P asks it and nowhere else. */
    const small = (tier: readonly CaptureRequest[]) =>
      tier.filter((request) => request.family === "mtf" && request.variant === undefined).map(requestIdentity);
    expect(small(TIER_S)).toEqual(small(TIER_P));
    expect(small(TIER_F)).toEqual(small(TIER_P));
  });

  it("hold every request of Tier S in Tier F, which differs in its analysis row alone", () => {
    const full = new Set(TIER_F.map(requestIdentity));
    expect(TIER_S.filter((request) => !full.has(requestIdentity(request)))).toEqual([]);
    const notAnalysis = (request: CaptureRequest) => request.family !== "analysis";
    expect(TIER_F.filter(notAnalysis)).toEqual(TIER_S.filter(notAnalysis));
    expect(TIER_F.length).toBeGreaterThan(TIER_S.length);
  });

  it("hold every request of Tier P in Tier S, for a changed lens and a changed converter as well", () => {
    const missingFrom = (larger: readonly CaptureRequest[], smaller: readonly CaptureRequest[]) => {
      const held = new Set(larger.map(requestIdentity));
      return smaller.filter((request) => !held.has(requestIdentity(request)));
    };
    expect(missingFrom(TIER_S, TIER_P)).toEqual([]);
    expect(TIER_S.length).toBeGreaterThan(TIER_P.length);
    /* Every lens Tier P analyses is among the stage tier's analysis lenses, at its stations and not one state. */
    const analysedIn = (tier: readonly CaptureRequest[]) =>
      new Set(tier.filter((request) => request.family === "analysis").map((request) => lensId(request.lens)));
    expect([...analysedIn(TIER_P)].filter((id) => !strataOf.has(id))).toEqual([]);
    expect(statesAsked(TIER_S, ["analysis"]).get(SERENAR)).toEqual(
      [0, 1].map((focusT) => stateId({ ...DEFAULT_STATE, focusT })),
    );

    /* What Tier P asks of changed data, the larger tiers ask too: a lens no row analyses, and a converter's pairs. */
    const plain = REQUEST_CATALOG.lenses.map((lens) => lens.key).find((key) => !strataOf.has(key))!;
    const changed: RequestCatalog = {
      ...REQUEST_CATALOG,
      changedLensKeys: [plain],
      changedTeleconverterKeys: [
        REQUEST_CATALOG.pairs.find((pair) => pair.teleconverter !== PAIR.teleconverter)!.teleconverter,
      ],
    };
    const [p, s, f] = (["p", "s", "f"] as const).map((tier) => tierRequests(tier, changed));
    expect(p.length).toBeGreaterThan(TIER_P.length);
    expect(missingFrom(s, p)).toEqual([]);
    expect(missingFrom(f, s)).toEqual([]);
    expect(s.filter((request) => request.lens.key === plain && request.family === "analysis")).toHaveLength(1);
    expect(new Set(s.map(requestIdentity)).size).toBe(s.length);
  });

  it("ask a pair that only one engine permits, when the list is built from the pairs of both", () => {
    /* The head engine's predicate drops a pair. From its answer alone the tier would not name the pair at all. */
    const lost = REQUEST_CATALOG.pairs.find(
      ({ host, teleconverter }) => lensId({ key: host, teleconverter }) !== PAIR_ID,
    )!;
    const kept = REQUEST_CATALOG.pairs.filter((pair) => pair !== lost);
    const lostId = lensId({ key: lost.host, teleconverter: lost.teleconverter });
    const fromHeadAlone = tierRequests("s", { ...REQUEST_CATALOG, pairs: kept });
    expect(fromHeadAlone.filter((request) => lensId(request.lens) === lostId)).toEqual([]);
    const { requested, differences } = comparePermittedPairs({
      headEngine: kept,
      baseEngine: REQUEST_CATALOG.pairs,
      baseData: kept,
    });
    expect(differences.baseEngineOnly).toEqual([lostId]);
    /* From both answers the list is what it is when the engines agree, the lost pair's every request included. */
    expect(tierRequests("s", { ...REQUEST_CATALOG, pairs: requested })).toEqual(TIER_S);
    expect(TIER_S.filter((request) => lensId(request.lens) === lostId).length).toBeGreaterThan(8);
  });

  it("keep their copies of the benchmark scenario, lens lists and MTF options equal to the sources", () => {
    const stopped = BENCHMARK_SCENARIOS.find(({ id }) => id === "stopped-close")!;
    expect(STOPPED_DOWN_T).toBe(stopped.stopdownT);
    expect(MOVED_POSE).toEqual(stopped.movement);

    /* The MTF benchmark names its cases by file; a tier names lenses by key. */
    const keyOfFile = new Map(CATALOG.lenses.map((lens) => [lens.file, lens.key]));
    expect([...MTF_BENCHMARK_LENS_KEYS]).toEqual(
      [...MTF_BENCHMARK_CASES, MTF_FINITE_BENCHMARK_CASE].map((file) => keyOfFile.get(file)),
    );

    /* Every member of the engine's two unions must be written here, or this file does not compile. */
    const methods: Record<MtfMethod, true> = { geometric: true, diffraction: true };
    const spectra: Record<MtfSpectrum, true> = { reference: true, cdf: true, photopic: true };
    expect([...MTF_METHODS].sort()).toEqual(Object.keys(methods).sort());
    expect([...MTF_SPECTRA].sort()).toEqual(Object.keys(spectra).sort());
    expect(MTF_VARIANT_GRID).toBe(DEFAULT_MTF_PREFERENCES.maxGridSize);

    expect(MTF_VARIANTS.map(({ id }) => id)).toEqual([
      "geometric/reference",
      "geometric/cdf",
      "geometric/photopic",
      "diffraction/reference",
      "diffraction/cdf",
      "diffraction/photopic",
    ]);
    for (const { id, request } of MTF_VARIANTS) {
      const [method, spectrum] = id.split("/");
      expect(request).toEqual({ ...MTF_REQUEST, method, spectrum, maxGridSize: MTF_VARIANT_GRID });
      expect(mtfRequestOf(id)).toBe(request);
    }
    expect(mtfRequestOf(undefined)).toBe(MTF_REQUEST);
    expect(() => mtfRequestOf("geometric/x-ray")).toThrow('no MTF variant is named "geometric/x-ray"');
    expect(() => mtfRequestOf("toString")).toThrow("no MTF variant");
  });

  it("refuse to build when a lens they name has left the catalog", () => {
    const { lenses, pairs } = REQUEST_CATALOG;
    const without = (key: string): RequestCatalog => ({ lenses: lenses.filter((lens) => lens.key !== key), pairs: [] });
    /* A benchmark lens that is in no other row of the stage tier, and a feature representative. */
    const benchmark = BENCHMARK_LENS_KEYS[1];
    expect(MTF_BENCHMARK_LENS_KEYS).not.toContain(benchmark);
    expect(() => tierRequests("s", without(benchmark))).toThrow(
      `benchmark or representative lens(es) not in the catalog: ${benchmark}`,
    );
    const representative = FEATURE_REPRESENTATIVES[0].lens.key;
    expect(() => tierRequests("s", { lenses: lenses.filter((lens) => lens.key !== representative), pairs })).toThrow(
      `benchmark or representative lens(es) not in the catalog: ${representative}`,
    );
    /* A lens of the MTF row, and the host of a pair. */
    expect(MTF_BENCHMARK_LENS_KEYS).toContain(SERENAR);
    expect(() => tierRequests("s", without(SERENAR))).toThrow(`not in the catalog: ${SERENAR}`);
    expect(() => tierRequests("f", without(SERENAR))).toThrow(`not in the catalog: ${SERENAR}`);
    const host = pairs[0].host;
    expect(() => tierRequests("s", { lenses: lenses.filter((lens) => lens.key !== host), pairs })).toThrow(
      `not in the catalog: ${host}`,
    );
  });
});

describe("engineDiff shards", () => {
  const tiers: [TierId, CaptureRequest[]][] = [
    ["p", TIER_P],
    ["s", TIER_S],
    ["f", TIER_F],
  ];
  const lensIds = (requests: readonly CaptureRequest[]) => [
    ...new Set(requests.map((request) => lensId(request.lens))),
  ];

  it.each(tiers)("splits tier %s into disjoint parts that together are the tier", (_tier, requests) => {
    const tierIds = lensIds(requests);
    for (const count of [1, 2, 3, 5, 8, 16, 32, 64]) {
      const shards = Array.from({ length: count }, (_, index) =>
        shardRequests(requests, { index: index + 1, count }, REQUEST_CATALOG),
      );

      /* Complete and disjoint: every request of the tier is in exactly one shard, and nothing else is in any. */
      const dealt = shards.flat();
      expect(dealt).toHaveLength(requests.length);
      expect(new Set(dealt)).toEqual(new Set(requests));

      /* By lens: no lens id is in two shards, so no lens's records straddle two runs. */
      const shardIds = shards.map(lensIds);
      expect(shardIds.flat()).toHaveLength(tierIds.length);
      expect(new Set(shardIds.flat())).toEqual(new Set(tierIds));

      /* Balancing changes membership, but preserves capture order. */
      shards.forEach((shard, index) => {
        const ids = new Set(shardIds[index]);
        expect(shard).toEqual(requests.filter((request) => ids.has(lensId(request.lens))));
      });
    }
  });

  it("assigns deterministically regardless of request and catalog enumeration", () => {
    const count = 5;
    const reversedCatalog = { ...REQUEST_CATALOG, lenses: [...REQUEST_CATALOG.lenses].reverse() };
    for (let index = 1; index <= count; index++) {
      const expected = lensIds(shardRequests(TIER_S, { index, count }, REQUEST_CATALOG));
      expect(lensIds(shardRequests([...TIER_S].reverse(), { index, count }, reversedCatalog)).sort()).toEqual(expected);
    }
    /* Equal costs use code-unit order (uppercase before lowercase), then the lowest shard index. */
    const keys = ["z", "a", "Z", "A"];
    const catalog = { lenses: keys.map((key) => ({ ...REQUEST_CATALOG.lenses[0], key })), pairs: [] };
    const requests = keys.map((key): CaptureRequest => ({ lens: { key }, state: null, family: "build" }));
    expect(lensIds(shardRequests(requests, { index: 1, count: 2 }, catalog)).sort()).toEqual(["A", "a"]);
  });

  it("keeps a heavy lens apart from the many cheap lenses a count split would give it", () => {
    const keys = ["heavy", ...Array.from({ length: 12 }, (_, i) => `light-${i}`)];
    const catalog = { lenses: keys.map((key) => ({ ...REQUEST_CATALOG.lenses[0], key, projection: null })), pairs: [] };
    const requests = keys.flatMap((key): CaptureRequest[] => [
      { lens: { key }, state: null, family: "build" },
      { lens: { key }, state: DEFAULT_STATE, family: key === "heavy" ? "analysis" : "layout" },
    ]);
    const heavyShard = shardRequests(requests, { index: 1, count: 3 }, catalog);
    expect(lensIds(heavyShard)).toEqual(["heavy"]);
    expect(estimateLensCosts(requests, catalog).get("heavy")).toBeGreaterThan(12 * 2);
  });

  it("leaves a shard empty when there are fewer lenses than shards, and refuses a shard that is not i of n", () => {
    const one = TIER_P.filter((request) => request.lens.key === SERENAR);
    expect(shardRequests(one, { index: 1, count: 3 }, REQUEST_CATALOG)).toEqual(one);
    expect(shardRequests(one, { index: 2, count: 3 }, REQUEST_CATALOG)).toEqual([]);
    expect(shardRequests([], { index: 1, count: 1 }, REQUEST_CATALOG)).toEqual([]);
    for (const [index, count] of [
      [0, 4],
      [5, 4],
      [1, 0],
      [1.5, 4],
      [1, 2.5],
      [Number.NaN, 4],
      [-1, -1],
    ]) {
      expect(() => shardRequests(TIER_P, { index, count }, REQUEST_CATALOG)).toThrow("is not i/n with 1 <= i <= n");
    }
  });
});

/* ── captureEntry.ts ── */

describe("engineDiff capture", () => {
  /* A prime, a zoom, a vector-launched fisheye, an auto-path folded lens and the converter pair. */
  const stateRowLenses = [
    SERENAR,
    "sony-fe-24-70mm-f28-gm-ii",
    "nikon-fisheye-nikkor-6mm-f28",
    "carl-zeiss-mirotar-500f45",
    PAIR_ID,
  ];
  const requests = [
    ...tierPRequests(stateRowLenses, ["composition", "build", "layout", "traces", "fieldGeometry", "chiefSolves"]),
    ...tierPRequests([SERENAR, MAKSUTOV], ["analysis", "mtf"]),
  ];
  const records = captureRecords(CATALOG, requests);

  it("returns one record per request, in order, each a plain JSON object", () => {
    expect(records.map((record) => [record.lens, record.state, record.request])).toEqual(
      requests.map((request) => [lensId(request.lens), request.state, request.family]),
    );
    for (const record of records) {
      expect(Object.keys(record)).toEqual(["lens", "state", "request", "payload"]);
      expect(JSON.parse(JSON.stringify(record))).toEqual(record);
    }
    expect(records.filter((record) => !record.payload.ok)).toEqual([]);
  });

  it("captures the same bytes on a second run, and one request at a time in reverse order", () => {
    const first = recordDigests(records);
    expect(recordDigests(captureRecords(CATALOG, requests))).toEqual(first);
    const reversed = [...requests].reverse().map((request) => captureRecords(CATALOG, [request])[0]);
    expect(recordDigests(reversed.reverse())).toEqual(first);
  });

  it("keeps full hits column-wise with each hit's residual and effective tolerance", () => {
    const traces = valueOf(records.find((record) => record.lens === SERENAR && record.request === "traces")!) as {
      onAxis: { rays: { status: string; terminalPoint: number[]; imagePoint: number[]; hits: Hits }[] };
      chromatic: { rays: Record<string, unknown[]> };
    };
    interface Hits {
      count: number;
      columns: Record<string, unknown[]>;
    }
    const ray = traces.onAxis.rays[1];
    expect(ray.status).toBe("ok");
    expect(ray.hits.count).toBeGreaterThan(2);
    for (const column of ["surfaceIndex", "point", "normal", "residual", "effectiveTolerance", "clipped"]) {
      expect(ray.hits.columns[column]).toHaveLength(ray.hits.count);
    }
    expect(ray.hits.columns.point.at(-1)).toEqual(ray.terminalPoint);
    expect(ray.imagePoint).toHaveLength(2);
    expect(Object.keys(traces.chromatic.rays)).toEqual([...CHROMATIC_CHANNELS].sort());
    expect(traces).not.toHaveProperty("legacy");
    expect(traces).not.toHaveProperty("nearAxisProbes.legacy");
    const seam = resolveSeam();
    expect(seam).not.toHaveProperty("legacyTraceRay");
    expect(seam).not.toHaveProperty("legacyTraceToImage");
  });

  it("launches its full-hit rays exactly as the public slope tracer does", () => {
    const traces = valueOf(records.find((record) => record.lens === SERENAR && record.request === "traces")!) as {
      stopSemiDiameterMm: number;
      pupilSemiDiameterMm: number;
      onAxis: { rays: { y: number; uy: number }[] };
    };
    const lens = buildLens(
      decodeValue(CATALOG.lenses.find((entry) => entry.key === SERENAR)!.prescription) as LensData,
    );
    const zPos = doLayout(0, 0, lens).z;
    const mismatches = ON_AXIS_PUPIL_FRACTIONS.filter((fraction, index) => {
      const height = fraction * traces.pupilSemiDiameterMm;
      const expected = traceRay(height, 0, zPos, 0, 0, traces.stopSemiDiameterMm, true, lens);
      const captured = traces.onAxis.rays[index];
      return !Object.is(captured.y, expected.y) || !Object.is(captured.uy, expected.u);
    });
    expect(mismatches).toEqual([]);
  });

  it("probes the production tracer's two near-axis basis rays and finds each returned", () => {
    interface Probes {
      applicable: boolean;
      prepared?: { ok: boolean; value: Record<"marginal" | "chief", { y: number }> };
    }
    const folded = "carl-zeiss-mirotar-500f45";
    const probed = records.filter((record) => record.request === "traces");
    expect([...new Set(probed.map((record) => record.lens))].sort()).toEqual([...stateRowLenses].sort());
    for (const record of probed) {
      const where = `${record.lens} at ${stateId(record.state)}`;
      const { nearAxisProbes } = valueOf(record) as { nearAxisProbes: Probes };
      if (!nearAxisProbes.applicable) {
        /* The engine finds a folded lens's stop by a search the seam does not have, so the record says so. */
        expect(record.lens, where).toBe(folded);
        expect(nearAxisProbes, where).toEqual({ applicable: false });
        continue;
      }
      expect(record.lens, where).not.toBe(folded);
      const returnedPrepared = { status: "ok", failureReason: null, y: expect.any(Number) };
      expect(nearAxisProbes, where).toEqual({
        applicable: true,
        prepared: { ok: true, value: { marginal: returnedPrepared, chief: returnedPrepared } },
      });
      /* On the prepared tracer the probes are the very rays the state's field geometry divides: each height at the
       * stop, over the probe height, is that geometry's ratio bit for bit. */
      const geometry = records.find(
        (entry) =>
          entry.lens === record.lens &&
          entry.request === "fieldGeometry" &&
          stateId(entry.state) === stateId(record.state),
      )!;
      const { raw } = valueOf(geometry) as { raw: { yRatio: number; b: number } };
      const { marginal, chief } = nearAxisProbes.prepared!.value;
      expect(Object.is(marginal.y / NEAR_AXIS_PROBE_DELTA, raw.yRatio), where).toBe(true);
      expect(Object.is(chief.y / NEAR_AXIS_PROBE_DELTA, raw.b), where).toBe(true);
    }
  });

  it("records a probe launch that throws as an outcome of that tracer's probes, and keeps the record", () => {
    /* The prepared launch is copied from the engine and reads a prepared state's own members, so an engine change
     * can make it throw on one side of a run. That costs the comparison those two probes and nothing else. */
    const request = requests.find(({ lens, family }) => lensId(lens) === SERENAR && family === "traces")!;
    const whole = valueOf(records.find((record) => record.lens === SERENAR && record.request === "traces")!) as {
      nearAxisProbes: Record<string, unknown>;
    };
    const seam = resolveSeam();
    const traceRay = seam.traceRay;
    /* Only the prepared probes ask that tracer to stop at the stop. */
    const spy = vi.spyOn(seam, "traceRay").mockImplementation((state, ray, options) => {
      if (options?.stopAt !== undefined) throw new TypeError("first.profile.sag is not a function");
      return traceRay(state, ray, options);
    });
    let record: PayloadRecord;
    try {
      [record] = captureRecords(CATALOG, [request]);
    } finally {
      spy.mockRestore();
    }
    expect(record.payload.ok).toBe(true);
    const value = valueOf(record) as typeof whole;
    expect(value.nearAxisProbes).toEqual({
      ...whole.nearAxisProbes,
      prepared: { ok: false, error: { name: "TypeError", message: "first.profile.sag is not a function" } },
    });
    expect({ ...value, nearAxisProbes: null }).toEqual({ ...whole, nearAxisProbes: null });
  });

  it("composes a pair itself and records the composed prescription as the fingerprint reads a file", () => {
    const composition = valueOf(
      records.find((record) => record.lens === PAIR_ID && record.request === "composition")!,
    ) as {
      compatibility: { ok: boolean };
      prescription: { surfaces: { label: string; R: unknown; sd?: number }[] };
    };
    const seam = resolveSeam();
    const host = decodeValue(CATALOG.lenses.find((entry) => entry.key === PAIR.key)!.prescription) as LensData;
    const converter = catalogTeleconverterData(
      decodeValue(
        CATALOG.teleconverters.find((entry) => entry.key === PAIR.teleconverter)!.prescription,
      ) as TeleconverterData,
    );
    const composed = seam.attachTeleconverter(catalogLensData(host), converter);
    expect(composition.compatibility.ok).toBe(true);
    expect(composition.prescription).toEqual(throughJson(normalizeAuthoredData(composed, seam.flatRadiusThreshold)));
    expect(composition.prescription.surfaces.length).toBeGreaterThan(host.surfaces.length);
    /* The host's flat surfaces and its derived stop radius are in the composed prescription, in normalized form. */
    const { surfaces } = composition.prescription;
    expect(surfaces.filter((surface) => surface.R === FLAT_RADIUS_MARKER).length).toBeGreaterThan(0);
    expect(
      surfaces.filter((surface) => typeof surface.R === "number" && Math.abs(surface.R) > seam.flatRadiusThreshold),
    ).toEqual([]);
    expect(stopRadiusAuthority(composed)).toBe("derived");
    expect(surfaces.find((surface) => surface.label === "STO")).not.toHaveProperty("sd");
  });

  it("keeps every field of a built lens in its build record, the copied and defaulted ones included", () => {
    const seam = resolveSeam();
    /* A zoom with a close-focus distance per station, an f-stop series of its own, and rear plates. */
    const lens = seam.buildLens(
      decodeValue(CATALOG.lenses.find((entry) => entry.key === "fuji-xf-16-55-f28")!.prescription) as LensData,
    );
    const recordOf = (built: object) =>
      JSON.stringify(encodeValue(projectBuildConstants(built, CHROMATIC_CHANNELS, seam.flatRadiusThreshold)));
    const record = recordOf(lens);

    /* Each of these is a field the engine fills from the prescription or a lens default, or filters. A lens that
     * differs in one of them alone must give another record. */
    expect(lens.data.elements.length).toBeGreaterThan(lens.elements.length);
    const changed: Record<string, unknown> = {
      maxFstop: lens.maxFstop * 2,
      fstopSeries: undefined,
      closeFocusM: lens.closeFocusM * 2,
      zoomCloseFocusM: lens.zoomCloseFocusM!.map((distance) => distance * 2),
      focusStep: lens.focusStep * 2,
      apertureStep: lens.apertureStep * 2,
      rayFractions: lens.rayFractions.slice(1),
      offAxisFractions: lens.offAxisFractions.slice(1),
      offAxisFieldFrac: lens.offAxisFieldFrac / 2,
      svgW: lens.svgW + 1,
      gapSagFrac: lens.gapSagFrac / 2,
      /* The synthetic rear plates no longer filtered out of the drawn elements. */
      elements: lens.data.elements,
      focusDescription: `${lens.focusDescription ?? ""}~`,
      data: { ...lens.data, scFill: lens.data.scFill / 2 },
    };
    expect(Object.keys(changed).filter((field) => !(field in lens))).toEqual([]);
    expect(Object.keys(changed).filter((field) => recordOf({ ...lens, [field]: changed[field] }) === record)).toEqual(
      [],
    );
    /* Nothing of the lens is left out: every field is in the record under its own name, bar the one renamed. */
    const written = Object.keys(JSON.parse(record) as object);
    const expected = Object.entries(lens)
      .filter(([, value]) => value !== undefined)
      .map(([field]) => (field === "asphByIdx" ? "asphericSurfaceIndexes" : field));
    expect(written).toEqual(expected.sort());

    /* `data` is written as the fingerprint reads a file: a flat radius as its marker, a derived stop radius left out. */
    const { surfaces } = (JSON.parse(record) as { data: { surfaces: { label: string; R: unknown; sd?: number }[] } })
      .data;
    expect(surfaces).toHaveLength(lens.S.length);
    expect(surfaces.filter((surface) => surface.R === FLAT_RADIUS_MARKER).length).toBeGreaterThan(0);
    expect(
      surfaces.filter((surface) => typeof surface.R === "number" && Math.abs(surface.R) > seam.flatRadiusThreshold),
    ).toEqual([]);
    expect(stopRadiusAuthority(lens.data)).not.toBe("authored");
    expect(surfaces.find((surface) => surface.label === "STO")).not.toHaveProperty("sd");

    /* A surface of `S` is the engine's own copy of its prescription surface, and `data` holds the prescription's.
     * A member the engine alone changed must give another record: the inner radius of an annular mirror, an
     * interaction, a diffractive phase, the placement of an embedded stop, a curved radius. */
    type Surface = (typeof lens.S)[number];
    const built = (key: string) =>
      seam.buildLens(decodeValue(CATALOG.lenses.find((entry) => entry.key === key)!.prescription) as LensData);
    const surfaceChanges: [key: string, member: keyof Surface, change: (surface: Surface) => Partial<Surface>][] = [
      ["carl-zeiss-mirotar-500f45", "innerSd", (surface) => ({ innerSd: surface.innerSd! * 1.01 })],
      [
        "carl-zeiss-mirotar-500f45",
        "interaction",
        (surface) => ({ interaction: { ...surface.interaction!, type: "refract" } }),
      ],
      [
        "nikon-af-s-nikkor-300mm-f4e-pf-ed-vr",
        "diffractive",
        ({ diffractive }) => ({
          diffractive: {
            ...diffractive!,
            terms: diffractive!.terms.map((term) => ({ ...term, coefficient: term.coefficient * (1 + 1e-12) })),
          },
        }),
      ],
      ["zeiss-hologon-15f8", "stopPlacement", () => ({ stopPlacement: undefined })],
      ["fuji-xf-16-55-f28", "R", (surface) => ({ R: surface.R * (1 + Number.EPSILON) })],
    ];
    const curved = (surface: Surface) => Math.abs(surface.R) <= seam.flatRadiusThreshold;
    const unmoved = surfaceChanges.filter(([key, member, change]) => {
      const original = built(key);
      const index = original.S.findIndex((surface) =>
        member === "R" ? curved(surface) : surface[member] !== undefined,
      );
      expect(index, `${key} has a surface with ${member}`).toBeGreaterThanOrEqual(0);
      const S = original.S.map((surface, at) => (at === index ? { ...surface, ...change(surface) } : surface));
      return recordOf({ ...original, S }) === recordOf(original);
    });
    expect(unmoved.map(([key, member]) => `${key} ${member}`)).toEqual([]);
    /* A flat radius is written as its marker, in `S` as in `data`: the engine hands a flat radius back as it was
     * spelled, and its spellings share a fingerprint. */
    const flat = lens.S.findIndex((surface) => Math.abs(surface.R) > seam.flatRadiusThreshold);
    expect(flat).toBeGreaterThanOrEqual(0);
    const respelled = lens.S.map((surface, at) => (at === flat ? { ...surface, R: -2 * surface.R } : surface));
    expect(recordOf({ ...lens, S: respelled })).toBe(record);
    const { S } = JSON.parse(record) as { S: { R: unknown }[] };
    expect(S[flat].R).toBe(FLAT_RADIUS_MARKER);
    expect(S.filter((surface) => typeof surface.R === "number")).toHaveLength(lens.S.filter(curved).length);
  });

  it("runs every analysis job and records a throwing job as an outcome instead of dropping it", () => {
    type Jobs = Record<string, { ok: boolean; error?: { name: string; message: string } }>;
    const jobsOf = (lens: string) =>
      (valueOf(records.find((record) => record.lens === lens && record.request === "analysis")!) as { jobs: Jobs })
        .jobs;
    const expectedJobs = [
      ...ANALYSIS_CONTEXT_JOBS,
      "computeFieldCurvature",
      "groupMovement.focus",
      "groupMovement.zoom",
      "groupMovement.combined",
      "cardinalElements",
      "asphericComparison",
      "effectiveFNumber",
      "chromaticFieldFocusSummary",
      "longitudinalChromaticFocus",
      "locaBarOffsets",
    ].sort();

    const serenar = jobsOf(SERENAR);
    expect(Object.keys(serenar)).toEqual(expectedJobs);
    expect(Object.values(serenar).filter((job) => !job.ok)).toEqual([]);

    const maksutov = jobsOf(MAKSUTOV);
    expect(Object.keys(maksutov)).toEqual(expectedJobs);
    expect(maksutov.computePerspectiveFocusAnalysis).toEqual({
      ok: false,
      error: { name: "PerspectiveFieldSamplingError", message: expect.any(String) },
    });
    expect(maksutov.computeOpticalSummary.ok).toBe(true);
  });

  it("records the readouts the viewer computes beside the analysis context", () => {
    const { jobs } = valueOf(records.find((record) => record.lens === SERENAR && record.request === "analysis")!) as {
      jobs: Record<string, { ok: boolean; value: unknown }>;
    };
    const seam = resolveSeam();
    const lens = buildLens(
      decodeValue(CATALOG.lenses.find((entry) => entry.key === SERENAR)!.prescription) as LensData,
    );

    /* Focused at infinity the working f-number is the marked one. */
    expect(jobs.effectiveFNumber).toEqual({ ok: true, value: seam.fNumberAtStopdown(0, 0, lens) });

    /* The chromatic tab's summary, of the field-curvature bundle the context returned. */
    const bundle = jobs.computeFieldCurvatureBundle.value as { chromaticFieldCurvature: object };
    const summary = jobs.chromaticFieldFocusSummary.value as { fields: { tangential: { spreadMm: number } }[] };
    expect(summary).toEqual(throughJson(seam.summarizeChromaticFieldFocus(bundle.chromaticFieldCurvature as never)));
    expect(summary.fields.length).toBeGreaterThan(0);
    expect(summary.fields[0].tangential.spreadMm).toBeGreaterThan(0);

    /* The diagram's LoCA readout tries its own marginal fractions first, and its inset draws one bar a channel. */
    const loca = jobs.longitudinalChromaticFocus.value as {
      marginalFraction: number;
      channels: string[];
      spread: { axialIntercepts: Record<string, number> };
    };
    expect(loca.channels).toEqual([...CHROMATIC_CHANNELS]);
    expect(loca.marginalFraction).toBe(0.97);
    const bars = jobs.locaBarOffsets.value as {
      barOffsets: Record<string, number>;
      mag: number;
      legacy: { barOffsets: Record<string, number> };
    };
    expect(Object.keys(bars.barOffsets)).toEqual(Object.keys(loca.spread.axialIntercepts));
    expect(bars.barOffsets.G).toBe(0);
    expect(bars.legacy.barOffsets).toEqual(bars.barOffsets);
    expect(bars.mag).toBeGreaterThan(0);
  });

  it("reads the aspheric departure at fixed heights, against the base sphere and the best fit", () => {
    const key = "zeiss-zx1-distagon-35mm-f2";
    const [record] = captureRecords(CATALOG, tierPRequests([key], ["analysis"]));
    type Readout = Record<"baseSphere" | "bestFitSphere", { h: number; delta: number }[]>;
    type Fit = { surfaceIndex: number; readout: Readout; legacy: { readout: Readout } };
    const fits = (valueOf(record) as { jobs: { asphericComparison: { value: Fit[] } } }).jobs.asphericComparison.value;
    const lens = buildLens(decodeValue(CATALOG.lenses.find((entry) => entry.key === key)!.prescription) as LensData);
    expect(fits.length).toBeGreaterThan(0);
    for (const { surfaceIndex, readout, legacy } of fits) {
      const { sd } = lens.S[surfaceIndex];
      const readouts = [
        readout.baseSphere,
        readout.bestFitSphere,
        legacy.readout.baseSphere,
        legacy.readout.bestFitSphere,
      ];
      for (const samples of readouts) {
        expect(samples.map((sample) => sample.h)).toEqual([0.25, 0.5, 0.75, 1].map((fraction) => fraction * sd));
      }
      /* An asphere departs from its own base sphere away from the axis. */
      expect(readout.baseSphere.at(-1)!.delta).not.toBe(0);
    }
    /* A lens with aspheres is where a member named like an engine back-pointer would be skipped; none is. */
    expect(skippedBackPointers(record.payload)).toEqual([]);
  });

  it("digests the traces and pupil bundles inside perspective results and keeps a field sample readable", () => {
    const record = records.find((entry) => entry.lens === SERENAR && entry.request === "analysis")!;
    const text = JSON.stringify(record);
    /* Whole, this record is over 100 MB of text; a raw hit list anywhere in it would show as a `hits` array. */
    expect(text.length).toBeLessThan(8e6);
    expect(text).not.toContain('"hits":[');
    expect(text).not.toContain('"cacheKey"');
    const focus = (valueOf(record) as { jobs: Record<string, { value: { samples: Record<string, unknown>[] } }> }).jobs
      .computePerspectiveFocusAnalysis.value;
    const digest = (status: unknown) => ({
      status,
      hitCount: expect.any(Number),
      hash: expect.stringMatching(/^[0-9a-f]{64}$/),
      outcome: expect.stringMatching(/^[0-9a-f]{64}$/),
      residualShare: expect.any(Number),
      largestTolerance: expect.any(Number),
    });
    expect(focus.samples[0].sensorPoint).toHaveLength(3);
    /* The sample's own numbers and both solves are values a budget can be set on; only the rays are digests. */
    expect(focus.samples[0].fieldSample).toMatchObject({
      status: "usable",
      sensorPoint: [expect.any(Number), expect.any(Number), expect.any(Number)],
      actualSensorIntercept: [expect.any(Number), expect.any(Number), expect.any(Number)],
      chiefTrace: digest("ok"),
      chiefSolve: {
        launchOffsetMm: expect.any(Number),
        stopResidualMm: expect.any(Number),
        rootSolve: { status: "converged", iterations: expect.any(Number), evaluations: expect.any(Number) },
        stopTrace: digest("ok"),
        chiefTrace: digest("ok"),
      },
      sensorSolve: { status: "converged", iterations: expect.any(Number), evaluations: expect.any(Number) },
      pupilBundle: digest(null),
    });

    /* Every digest of the record, wherever it sits, carries all six members. */
    const digests: Record<string, unknown>[] = [];
    const collect = (value: unknown): void => {
      if (value === null || typeof value !== "object") return;
      const members = value as Record<string, unknown>;
      if (typeof members.hash === "string" && typeof members.hitCount === "number") digests.push(members);
      for (const member of Object.values(members)) collect(member);
    };
    collect(valueOf(record));
    expect(digests.length).toBeGreaterThan(1000);
    expect(
      digests.filter(
        (entry) => Object.keys(entry).sort().join() !== "hash,hitCount,largestTolerance,outcome,residualShare,status",
      ),
    ).toEqual([]);
    expect(
      digests.filter((entry) => !/^[0-9a-f]{64}$/.test(String(entry.outcome)) || entry.outcome === entry.hash),
    ).toEqual([]);
    /* A trace that failed before its first hit has no hit to speak for it, and gives neither number. Every other
     * digest gives both: the largest residual behind it as a share of its tolerance, which the engine's own
     * contract keeps at or under 1, and the largest of those tolerances, which is never below the 1e-12 mm target. */
    const hitless = digests.filter((entry) => entry.hitCount === 0);
    expect(hitless.length).toBeGreaterThan(0);
    expect(hitless.filter((entry) => entry.residualShare !== null || entry.largestTolerance !== null)).toEqual([]);
    const held = digests.filter((entry) => entry.hitCount !== 0);
    const isNumber = (value: unknown): value is number => typeof value === "number";
    expect(held.filter((entry) => !isNumber(entry.residualShare) || !isNumber(entry.largestTolerance))).toEqual([]);
    const shares = held.map((entry) => entry.residualShare as number);
    expect(shares.filter((share) => !(share >= 0 && share <= 1))).toEqual([]);
    expect(Math.max(...shares)).toBeGreaterThan(0);
    expect(held.filter((entry) => !((entry.largestTolerance as number) >= 1e-12))).toEqual([]);
  });

  it("skips no back-pointer in the analysis and MTF records it captured", () => {
    /* The skip goes by member name. A marker here means an engine result has gained a member under one of those
     * names, and that it is being left out of the comparison: look at it before accepting the record. */
    const inspected = records.filter((record) => record.request === "analysis" || record.request === "mtf");
    expect(inspected.map((record) => record.lens)).toEqual(expect.arrayContaining([SERENAR, MAKSUTOV]));
    expect(
      inspected.flatMap((record) => skippedBackPointers(record.payload, `${record.lens} ${record.request}`)),
    ).toEqual([]);
  });

  it("requests geometric MTF at the 32-cell grid", () => {
    const mtf = valueOf(records.find((record) => record.lens === SERENAR && record.request === "mtf")!) as {
      options: Record<string, unknown>;
      result: { support: { available: boolean }; fields: { gridSize: number }[] };
    };
    expect(mtf.options).toMatchObject({ method: "geometric", spectrum: "reference", focus: "design", maxGridSize: 32 });
    expect(mtf.result.support.available).toBe(true);
    expect(mtf.result.fields).toHaveLength(3);
    expect(Math.max(...mtf.result.fields.map((field) => field.gridSize))).toBeLessThanOrEqual(32);
  });

  it(
    "answers a named MTF request with its method, spectrum and grid, and names it on the record",
    { timeout: 120_000 },
    () => {
      const requests = TIER_S.filter(
        (request) =>
          request.variant !== undefined &&
          request.lens.key === SERENAR &&
          stateId(request.state) === stateId(DEFAULT_STATE),
      );
      expect(requests.map((request) => [request.family, request.variant])).toEqual(
        MTF_VARIANTS.map(({ id }) => ["mtf", id]),
      );
      const named = captureRecords(CATALOG, requests);
      named.forEach((record, index) => {
        const { id, request } = MTF_VARIANTS[index];
        expect(Object.keys(record)).toEqual(["lens", "state", "request", "variant", "payload"]);
        expect(record).toMatchObject({ lens: SERENAR, request: "mtf", variant: id });
        const mtf = valueOf(record) as { options: object; result: { support: { available: boolean } } };
        expect(mtf.options).toMatchObject({ ...request, fieldFractions: [...request.fieldFractions] });
        expect(mtf.result).toMatchObject({ method: request.method, support: { available: true } });
      });
      /* Six different computations, each repeatable, and none of them the family's own request. */
      const digests = recordDigests(named.map((record) => ({ ...record, variant: undefined })));
      expect(new Set(digests).size).toBe(MTF_VARIANTS.length);
      expect(recordDigests(captureRecords(CATALOG, requests))).toEqual(recordDigests(named));
      const plain = records.find((record) => record.lens === SERENAR && record.request === "mtf")!;
      expect(plain).not.toHaveProperty("variant");
      expect(digests).not.toContain(recordDigests([plain])[0]);
    },
  );

  it("records a lens that does not build as an outcome", () => {
    const broken = { ...plainTwin, key: "engine-diff-broken", surfaces: plainTwin.surfaces.slice(1) };
    const records = captureRecords(catalogOf(broken), [
      { lens: { key: broken.key }, state: null, family: "build" },
      { lens: { key: broken.key }, state: DEFAULT_STATE, family: "traces" },
    ]);
    for (const record of records) {
      expect(record.payload).toEqual({
        ok: false,
        error: { name: "Error", message: expect.stringContaining(broken.key) },
      });
    }
  });

  it("refuses a request it cannot carry out, before capturing anything", () => {
    /* Recorded as outcomes, these would fail alike on both engines and compare equal. */
    const catalog = catalogOf(plainTwin);
    const lens = { key: plainTwin.key };
    expect(() => captureRecords(catalog, [{ lens: { key: SERENAR }, state: null, family: "build" }])).toThrow(
      `no lens ${SERENAR}`,
    );
    expect(() =>
      captureRecords(catalog, [{ lens: { ...lens, teleconverter: "absent-converter" }, state: null, family: "build" }]),
    ).toThrow("no teleconverter absent-converter");
    expect(() => captureRecords(catalog, [{ lens, state: null, family: "traces" }])).toThrow("without a lens state");
    expect(() => captureRecords(catalog, [{ lens, state: null, family: "composition" }])).toThrow("not a pair");
    const named = (family: RequestFamily, variant: string) => [{ lens, state: DEFAULT_STATE, family, variant }];
    expect(() => captureRecords(catalog, named("mtf", "geometric/x-ray"))).toThrow("no MTF variant is named");
    expect(() => captureRecords(catalog, named("traces", "geometric/reference"))).toThrow("has no variants");
  });
});

/* ── Semantic fingerprint ── */

/* The respelling cases capture a lens's Tier P records three times; on CI runners that exceeds the default limit. */
describe("engineDiff semantic fingerprint", { timeout: 120_000 }, () => {
  const seam = resolveSeam();
  const projectLens: SemanticProjection = (lens) => ingestLens(lens as LensDataInput).prescription;
  const projectConverter: SemanticProjection = (converter) =>
    ingestTeleconverter(converter as Parameters<typeof ingestTeleconverter>[0]).prescription;
  const fingerprint = (lens: object) => semanticFingerprint(lens, projectLens);
  /** The plain twin with one edit applied to a private copy. */
  const edited = (edit: (lens: LensDataInput) => void): LensDataInput => {
    const copy: LensDataInput = structuredClone(plainTwin);
    edit(copy);
    return copy;
  };
  const base = fingerprint(plainTwin);
  // Respelling tests edit V1 syntax. Give an omitted derived stop radius a finite value to perturb as well.
  const authoredViews = new Map<string, LensData>();
  const authoredOf = (key: string): LensData => {
    let view = authoredViews.get(key);
    if (!view) {
      view = toLensDataInput(
        ingestLens(decodeValue(CATALOG.lenses.find((lens) => lens.key === key)!.prescription) as LensDataInput),
        { stopRadius: 1 },
      ) as LensData;
      authoredViews.set(key, view);
    }
    return structuredClone(view);
  };

  it("is shared by two files that differ only in comments, layout, key order and written-out defaults", () => {
    /* The twins really are different objects: other key order, explicit defaults, an `undefined` member. */
    expect(Object.keys(restyledTwin)).not.toEqual(Object.keys(plainTwin));
    expect(Object.keys(restyledTwin).length).toBeGreaterThan(Object.keys(plainTwin).length);
    expect("cemented" in restyledTwin.elements[0]).toBe(true);

    expect(fingerprint(restyledTwin)).toBe(base);
    expect(fingerprintCatalog(catalogOf(restyledTwin)).lenses[restyledTwin.key]).toBe(base);
  });

  it("goes with identical payloads: the engine cannot tell the twins apart either", () => {
    const families: RequestFamily[] = ["layout", "traces", "fieldGeometry", "chiefSolves", "analysis", "mtf"];
    const twinRequests: CaptureRequest[] = [
      { lens: { key: plainTwin.key }, state: null, family: "build" },
      ...families.map((family) => ({ lens: { key: plainTwin.key }, state: DEFAULT_STATE, family })),
    ];
    const plain = captureRecords(catalogOf(plainTwin), twinRequests);
    expect(plain.filter((record) => !record.payload.ok)).toEqual([]);
    expect(recordDigests(captureRecords(catalogOf(restyledTwin), twinRequests))).toEqual(recordDigests(plain));
  });

  /**
   * Capture the Tier P records of the given lens ids as authored, and again with lens `key` respelled.
   *
   * The respelling must be a real edit that the fingerprint does not see. The rules that let two spellings share a
   * fingerprint must then hold in the payloads too, or a format-only change fails on a record that only hands
   * authored data back.
   */
  const captureRespelled = (
    key: string,
    ids: readonly string[],
    respell: (lens: LensData) => void,
    prepare?: (lens: LensData) => void,
  ) => {
    const entry = CATALOG.lenses.find((lens) => lens.key === key)!;
    const authored = authoredOf(key);
    // V2 has no empty V1 containers or redundant station declarations; spell them out for these cases.
    prepare?.(authored);
    expect(fingerprint(authored), `${key}: the V1 test spelling keeps the catalog fingerprint`).toBe(
      fingerprint(decodeValue(entry.prescription) as object),
    );
    const respelled = structuredClone(authored);
    respell(respelled);
    expect(JSON.stringify(encodeValue(respelled)), `${key}: the respelling edits the file`).not.toBe(
      JSON.stringify(encodeValue(authored)),
    );
    expect(fingerprint(respelled), `${key}: the respelling keeps the fingerprint`).toBe(fingerprint(authored));

    const respelledCatalog: SerializedCatalog = {
      ...CATALOG,
      lenses: CATALOG.lenses.map((lens) =>
        lens === entry ? { ...entry, prescription: encodeValue(respelled) } : lens,
      ),
    };
    const requests = tierPRequests(ids);
    const authoredCatalog: SerializedCatalog = {
      ...CATALOG,
      lenses: CATALOG.lenses.map((lens) => (lens === entry ? { ...entry, prescription: encodeValue(authored) } : lens)),
    };
    const before = captureRecords(authoredCatalog, requests);
    expect(before.filter((record) => !record.payload.ok)).toEqual([]);
    expect(recordDigests(before)).toEqual(recordDigests(captureRecords(CATALOG, requests)));
    return { before, after: captureRecords(respelledCatalog, requests) };
  };

  /** Every flat radius written -2e15 instead of 1e15, and the authored stop radius of a derived stop changed. */
  const respellFlatAndStop = (lens: LensData) => {
    const flat = lens.surfaces.filter((surface) => Math.abs(surface.R) > seam.flatRadiusThreshold);
    expect(flat.length).toBeGreaterThan(1);
    for (const surface of flat) surface.R = -2e15;
    expect(stopRadiusAuthority(catalogLensData(lens))).toBe("derived");
    lens.surfaces.find((surface) => surface.label === "STO")!.sd *= 0.97;
  };

  it("keeps every Tier P record of a lens with flat-base aspheres when flat radii and the stop radius are respelled", () => {
    /* The rear-plates representative, so its Tier P records include the analysis jobs and MTF. */
    const key = "zeiss-zx1-distagon-35mm-f2";
    const { before, after } = captureRespelled(key, [key], respellFlatAndStop);
    expect(before.map((record) => record.request)).toEqual([
      "build",
      "layout",
      "traces",
      "fieldGeometry",
      "chiefSolves",
      "analysis",
      "mtf",
    ]);
    expect(recordDigests(after)).toEqual(recordDigests(before));

    /* Without a flat-base asphere the best-fit radius would be a computed number, and nothing here an echo. */
    const analysis = valueOf(before.find((record) => record.request === "analysis")!) as {
      jobs: { asphericComparison: { value: { bestFitRadius: unknown; legacy: { bestFitRadius: unknown } }[] } };
    };
    const fits = analysis.jobs.asphericComparison.value;
    expect(fits.filter((fit) => fit.bestFitRadius === FLAT_RADIUS_MARKER).length).toBeGreaterThan(0);
    expect(fits.filter((fit) => fit.legacy.bestFitRadius === FLAT_RADIUS_MARKER).length).toBeGreaterThan(0);
    expect(fits.filter((fit) => typeof fit.bestFitRadius === "number").length).toBeGreaterThan(0);
  });

  it("keeps every Tier P record of a converter host and of its pair under the same respelling", () => {
    const { before, after } = captureRespelled(PAIR.key, [PAIR.key, PAIR_ID], respellFlatAndStop);
    const requestsOf = (id: string) => before.filter((record) => record.lens === id).map((record) => record.request);
    expect(requestsOf(PAIR.key)).toContain("traces");
    expect(requestsOf(PAIR_ID)).toEqual([
      "composition",
      "build",
      "layout",
      "traces",
      "fieldGeometry",
      "chiefSolves",
      "analysis",
      "mtf",
    ]);
    expect(recordDigests(after)).toEqual(recordDigests(before));
  });

  /** The first catalog lens, in key order, whose authored data passes `test`. */
  const firstLens = (test: (lens: LensData) => boolean): string => {
    const found = CATALOG.lenses.find((entry) => test(authoredOf(entry.key)));
    expect(found, "the catalog has a lens to respell").toBeDefined();
    return found!.key;
  };
  type Respelling = [name: string, key: string, respell: (lens: LensData) => void, prepare?: (lens: LensData) => void];
  const elementsWith = (field: "apd" | "indexReference", value: unknown) => (lens: LensData) =>
    lens.elements.some((element) => element[field] === value);
  const withoutOnElements = (field: "apd" | "indexReference") => (lens: LensData) => {
    for (const element of lens.elements) if (element[field] === (field === "apd" ? false : "d")) delete element[field];
  };
  const aspheric = (lens: LensData) => Object.keys(lens.asph ?? {}).length > 0;
  /* One case per spelling pair the canonical prescription holds as one, beyond the flat radius and stop above. */
  const respellings: Respelling[] = [
    [
      "an optional zero aspheric term written out",
      firstLens(aspheric),
      (lens) => {
        const [label] = Object.keys(lens.asph!);
        lens.asph![label] = { ...lens.asph![label], A16: 0 };
      },
    ],
    [
      "an empty asph left out",
      firstLens((lens) => !aspheric(lens)),
      (lens) => delete lens.asph,
      (lens) => (lens.asph = {}),
    ],
    [
      "an empty var and varLabels left out",
      firstLens((lens) => Object.keys(lens.var ?? {}).length === 0 && (lens.varLabels?.length ?? 0) === 0),
      (lens) => {
        delete lens.var;
        delete lens.varLabels;
      },
      (lens) => {
        lens.var = {};
        lens.varLabels = [];
      },
    ],
    ["apd: false left out", firstLens(elementsWith("apd", false)), withoutOnElements("apd")],
    [
      'indexReference: "d" left out',
      firstLens(elementsWith("indexReference", "d")),
      withoutOnElements("indexReference"),
    ],
    [
      'a rear plate\'s indexReference: "d" left out',
      firstLens((lens) => (lens.rearPlates ?? []).some((plate) => plate.indexReference === "d")),
      (lens) => {
        for (const plate of lens.rearPlates!) if (plate.indexReference === "d") delete plate.indexReference;
      },
    ],
    ["zoomStep: 0.004 left out", firstLens((lens) => lens.zoomStep === 0.004), (lens) => delete lens.zoomStep],
    [
      'zoomApertureModel: "from-nominal-fno" left out',
      firstLens((lens) => lens.zoomApertureModel === "from-nominal-fno"),
      (lens) => delete lens.zoomApertureModel,
    ],
    [
      "focusPositions: [0, 1] left out",
      firstLens((lens) => JSON.stringify(lens.focusPositions) === "[0,1]"),
      (lens) => delete lens.focusPositions,
    ],
    [
      "a publishedStations.zoom that names every station left out",
      firstLens((lens) => {
        const { zoom, focus } = lens.publishedStations ?? {};
        return (
          focus !== undefined &&
          lens.zoomPositions !== undefined &&
          (zoom === undefined || zoom.length === lens.zoomPositions.length)
        );
      }),
      (lens) => delete lens.publishedStations!.zoom,
      (lens) => (lens.publishedStations!.zoom = lens.zoomPositions!.map((_, station) => station)),
    ],
    /* The schema default, every zoom station at infinity alone, in both spellings V1 validation accepts. */
    [
      "a declaration of every zoom station at infinity alone left out",
      firstLens((lens) => {
        const { zoom, focus } = lens.publishedStations ?? {};
        const every = lens.zoomPositions?.map((_, station) => station);
        return (
          focus === undefined &&
          every !== undefined &&
          (zoom === undefined || JSON.stringify(zoom) === JSON.stringify(every))
        );
      }),
      (lens) => delete lens.publishedStations,
      (lens) => (lens.publishedStations = { zoom: lens.zoomPositions!.map((_, station) => station) }),
    ],
    [
      "a missing publishedStations written as every zoom station",
      firstLens((lens) => (lens.zoomPositions?.length ?? 0) >= 2 && lens.publishedStations === undefined),
      (lens) => (lens.publishedStations = { zoom: lens.zoomPositions!.map((_, station) => station) }),
    ],
    [
      "one publishedStations.focus list written per zoom station",
      firstLens((lens) => {
        const focus = lens.publishedStations?.focus;
        return (lens.zoomPositions?.length ?? 0) >= 2 && focus !== undefined && !Array.isArray(focus[0]);
      }),
      (lens) => {
        const { zoom, focus } = lens.publishedStations!;
        lens.publishedStations!.focus = lens.zoomPositions!.map((_, station) =>
          zoom === undefined || zoom.includes(station) ? [...(focus as number[])] : [],
        );
      },
    ],
    [
      "a finite conjugate's focusT within the station tolerance",
      firstLens((lens) => (lens.finiteConjugates?.length ?? 0) > 0),
      (lens) => {
        const [conjugate] = lens.finiteConjugates!;
        conjugate.focusT -= 1e-12;
      },
    ],
  ];

  it.each(respellings)("keeps every Tier P record of a lens with %s", (_name, key, respell, prepare) => {
    const { before, after } = captureRespelled(key, [key], respell, prepare);
    expect(recordDigests(after)).toEqual(recordDigests(before));
  });

  /* An order of label pairs is no spelling: a V2 `gaps` object cannot carry one, so ingest refuses any but surface
   * order, and the records keep the file's order unsorted. */
  it.each<[name: string, key: string, reorder: (lens: LensData) => void, message: RegExp]>([
    [
      "varLabels",
      firstLens((lens) => (lens.varLabels?.length ?? 0) >= 2),
      (lens) => lens.varLabels!.reverse(),
      /varLabels\[1\] labels "[^"]+", which comes before "[^"]+" \(varLabels\[0\]\) in the surfaces/,
    ],
    [
      "the aberration ring's varLabels",
      firstLens((lens) => (lens.aberrationControl?.varLabels?.length ?? 0) >= 2),
      (lens) => lens.aberrationControl!.varLabels!.reverse(),
      /aberrationControl\.varLabels\[1\] labels "[^"]+", which comes before "[^"]+" \(aberrationControl\.varLabels\[0\]\)/,
    ],
  ])("refuses %s out of surface order", (_name, key, reorder, message) => {
    const authored = authoredOf(key);
    const reordered = structuredClone(authored);
    reorder(reordered);
    expect(() => ingestLensV1(reordered)).toThrow(message);
    expect(fingerprint(reordered)).not.toBe(fingerprint(authored));
  });

  it("gives the published-station spellings V1 validation refuses the fingerprint and echo of their valid twin", () => {
    /* An empty object, or an empty zoom or focus list, fails `validateLensData`, so `buildLens` gives no record to
     * capture for one. The engine's `publishedStationGrid` still reads each as its valid twin, and so do the
     * fingerprint and the echo. */
    const respelled = (key: string, declare: (lens: LensData) => LensData["publishedStations"]) => {
      const authored = authoredOf(key);
      const lens = structuredClone(authored);
      lens.publishedStations = declare(lens);
      expect(fingerprint(lens), `${key}: ${JSON.stringify(lens.publishedStations)}`).toBe(fingerprint(authored));
      expect(normalizeAuthoredData(lens, seam.flatRadiusThreshold)).toEqual(
        normalizeAuthoredData(authored, seam.flatRadiusThreshold),
      );
    };
    const undeclaredZoom = firstLens((lens) => (lens.zoomPositions?.length ?? 0) >= 2 && !lens.publishedStations);
    respelled(undeclaredZoom, () => ({}));
    respelled(undeclaredZoom, () => ({ zoom: [] }));
    respelled(undeclaredZoom, () => ({ focus: [] }));
    respelled(undeclaredZoom, (lens) => ({ focus: lens.zoomPositions!.map(() => []) }));
    const undeclaredPrime = firstLens((lens) => lens.zoomPositions === undefined && !lens.publishedStations);
    respelled(undeclaredPrime, () => ({}));
    respelled(undeclaredPrime, () => ({ focus: [] }));
    const everyWithRows = firstLens((lens) => {
      const { zoom, focus } = lens.publishedStations ?? {};
      return (
        focus !== undefined &&
        lens.zoomPositions !== undefined &&
        (zoom === undefined || zoom.length === lens.zoomPositions.length)
      );
    });
    respelled(everyWithRows, (lens) => ({ ...lens.publishedStations, zoom: [] }));
  });

  it("hides no value that differs from what its rule holds as one", () => {
    const echo = (lens: object) => normalizeAuthoredData(lens, seam.flatRadiusThreshold);

    /* A value other than the default survives every echo-default row, on the lens, an element and a rear plate. */
    const otherValues: Record<string, unknown> = {
      "lens.zoomApertureModel": "fixed-iris",
      "lens.zoomStep": 0.01,
      "lens.focusPositions": [0, 0.5, 1],
      "lens.publishedStations": { focus: [1] },
      "element.indexReference": "e",
      "element.apd": "inferred",
      "rearPlate.indexReference": "e",
    };
    const rows = Object.entries(ECHO_DEFAULTS).flatMap(([kind, list]) => list.map((row) => `${kind}.${row.v1Field}`));
    expect(Object.keys(otherValues).sort()).toEqual([...rows].sort());
    /* A prime: on a zoom, a focus row of `publishedStations` is spread over the stations. */
    const withPlates = authoredOf(
      firstLens((lens) => (lens.rearPlates?.length ?? 0) > 0 && lens.zoomPositions === undefined),
    );
    for (const [row, value] of Object.entries(otherValues)) {
      const [kind, field] = row.split(".");
      const lens = structuredClone(withPlates) as unknown as Record<string, unknown> & {
        elements: Record<string, unknown>[];
        rearPlates: Record<string, unknown>[];
      };
      const holder = kind === "lens" ? lens : kind === "element" ? lens.elements[0] : lens.rearPlates[0];
      holder[field] = structuredClone(value);
      const echoed = echo(lens) as typeof lens;
      const out = kind === "lens" ? echoed : kind === "element" ? echoed.elements[0] : echoed.rearPlates[0];
      expect(out[field], row).toEqual(value);
    }

    /* The build record's elements lose only the values their echo-default rows hold. */
    const projectedElements = projectBuildConstants(
      {
        elements: [
          { id: 1, name: "L1", nd: 1.5168, vd: 64.17, indexReference: "e", apd: "inferred" },
          { id: 2, name: "L2", nd: 1.7, vd: 30, indexReference: "d", apd: false },
        ],
      },
      CHROMATIC_CHANNELS,
      seam.flatRadiusThreshold,
    ).elements;
    expect(projectedElements).toEqual([
      { id: 1, name: "L1", nd: 1.5168, vd: 64.17, indexReference: "e", apd: "inferred" },
      { id: 2, name: "L2", nd: 1.7, vd: 30 },
    ]);

    /* A conjugate 1e-7 from its keyframe is beyond the validator's tolerance, so it is not snapped onto it. */
    const conjugateKey = firstLens((lens) => (lens.finiteConjugates?.length ?? 0) > 0);
    const offStation = structuredClone(authoredOf(conjugateKey));
    const [conjugate] = offStation.finiteConjugates!;
    conjugate.focusT += conjugate.focusT > 0.5 ? -1e-7 : 1e-7;
    expect((echo(offStation).finiteConjugates as typeof offStation.finiteConjugates)![0].focusT).toBe(conjugate.focusT);

    /* zoomT is measured in station index, as the validator measures it: on three stations, 1e-8 of an index is 5e-9
     * of zoomT. A conjugate within that is snapped onto its station, one beyond it or 1e-3 away is not. */
    const zoomConjugate = (zoomT: number) =>
      (echo({
        zoomPositions: [50, 60, 70],
        finiteConjugates: [{ ...conjugate, focusT: 1, zoomT }],
      }).finiteConjugates as typeof offStation.finiteConjugates)![0].zoomT;
    expect(zoomConjugate(0.5 + 4e-9)).toBe(0.5);
    expect(zoomConjugate(0.5 + 7.5e-9)).toBe(0.5 + 7.5e-9);
    expect(zoomConjugate(0.5 + 1e-3)).toBe(0.5 + 1e-3);
    expect(zoomConjugate(1e-12)).toBe(0);
    /* -0 is a station at 0, written as 0, on a zoom and on a prime; a prime's other values are no station. */
    expect(zoomConjugate(-0)).toBe(0);
    const primeConjugate = (zoomT: number) =>
      (echo({ finiteConjugates: [{ ...conjugate, focusT: 1, zoomT }] })
        .finiteConjugates as typeof offStation.finiteConjugates)![0].zoomT;
    expect(primeConjugate(-0)).toBe(0);
    expect(primeConjugate(1e-12)).toBe(1e-12);

    /* Only a derived or scheduled stop loses its semi-diameter: a stop the engine reads keeps it, and so does every
     * other surface and every rear plate, in the file and in the build record's data, where the plates are surfaces. */
    const plated = structuredClone(withPlates);
    plated.rearPlates![0].sd = 12.5;
    const echoed = echo(plated) as unknown as LensData;
    expect(echoed.rearPlates![0].sd).toBe(12.5);
    plated.surfaces.forEach((surface, index) => {
      if (surface.label !== "STO") expect(echoed.surfaces[index].sd, surface.label).toBe(surface.sd);
    });
    expect(stopRadiusAuthority(plated)).not.toBe("authored");
    expect(echoed.surfaces.find((surface) => surface.label === "STO")!.sd).toBeUndefined();
    const builtPlated = seam.buildLens(plated) as unknown as { elements: Record<string, unknown>[] };
    const projectedPlated = projectBuildConstants(builtPlated, CHROMATIC_CHANNELS, seam.flatRadiusThreshold);
    const builtData = projectedPlated.data as LensData;
    /* Every element of the build record keeps every member but a default its echo row holds. */
    const elementDefaults = new Map(ECHO_DEFAULTS.element.map((row) => [row.v1Field, JSON.stringify(row.value)]));
    builtPlated.elements.forEach((element, index) => {
      const kept = Object.fromEntries(
        Object.entries(element).filter(([field, value]) => elementDefaults.get(field) !== JSON.stringify(value)),
      );
      expect((projectedPlated.elements as unknown[])[index], String(element.name)).toEqual(kept);
    });
    const syntheticSurfaces = builtData.surfaces.filter((surface) => surface.synthetic === "rearPlate");
    expect(syntheticSurfaces.length).toBeGreaterThan(0);
    for (const surface of syntheticSurfaces) expect(surface.sd, surface.label).toBeGreaterThan(0);
    const readStop = authoredOf(firstLens((lens) => stopRadiusAuthority(lens) === "authored"));
    const readStopSd = readStop.surfaces.find((surface) => surface.label === "STO")!.sd;
    expect((echo(readStop) as unknown as LensData).surfaces.find((surface) => surface.label === "STO")!.sd).toBe(
      readStopSd,
    );

    /* `var` is dropped only when it holds no gap; one gap keeps it whole. */
    const oneGap = { var: { "2": [80, 84] }, varLabels: [["2", "BF"]] };
    expect(echo(oneGap)).toEqual(oneGap);
    expect(echo({ var: {} })).toEqual({});

    /* Label pairs come back in the order given, even an order ingest refuses: the records sort nothing. */
    const outOfOrder: [string, string][] = [
      ["2", "BF"],
      ["STO", "D0"],
    ];
    const indexedOutOfOrder: [number, string][] = [
      [2, "BF"],
      [0, "D0"],
    ];
    const reordered = {
      surfaces: [{ label: "STO" }, { label: "1A" }, { label: "2" }],
      var: { STO: [1, 1.5], "2": [80, 84] },
      varLabels: outOfOrder,
      aberrationControl: { label: "Spherical aberration", var: { STO: [1, 1.5, 2] }, varLabels: outOfOrder },
    };
    const reorderedEcho = echo(reordered) as typeof reordered;
    expect(reorderedEcho.varLabels).toEqual(outOfOrder);
    expect(reorderedEcho.aberrationControl.varLabels).toEqual(outOfOrder);
    const reorderedBuild = projectBuildConstants(
      {
        data: reordered,
        varLabels: indexedOutOfOrder,
        aberrationControl: { label: "Spherical aberration", varLabels: indexedOutOfOrder },
      },
      CHROMATIC_CHANNELS,
      seam.flatRadiusThreshold,
    ) as { data: typeof reordered; varLabels: unknown; aberrationControl: { varLabels: unknown } };
    expect(reorderedBuild.data.varLabels).toEqual(outOfOrder);
    expect(reorderedBuild.data.aberrationControl.varLabels).toEqual(outOfOrder);
    expect(reorderedBuild.varLabels).toEqual(indexedOutOfOrder);
    expect(reorderedBuild.aberrationControl.varLabels).toEqual(indexedOutOfOrder);

    /* The build record keeps every non-zero asphere term and every label pair, in the file's order. */
    const key = firstLens((lens) => aspheric(lens) && (lens.varLabels?.length ?? 0) >= 2);
    const authored = authoredOf(key);
    const [build] = captureRecords(CATALOG, [{ lens: { key }, state: null, family: "build" }]);
    const record = valueOf(build) as {
      data: { asph: Record<string, Record<string, number>>; varLabels: [string, string][] };
      varLabels: [number, string][];
    };
    for (const [label, entry] of Object.entries(authored.asph!)) {
      for (const [term, value] of Object.entries(entry)) {
        if (value !== 0) expect(record.data.asph[label][term], `${label}.${term}`).toBe(value);
      }
    }
    const indexed = (lens: LensData, pairs: [string, string][]) =>
      pairs.map(([label, text]) => [lens.surfaces.findIndex((surface) => surface.label === label), text]);
    expect(record.data.varLabels).toEqual(authored.varLabels);
    expect(record.varLabels).toEqual(indexed(authored, authored.varLabels!));

    const ringKey = firstLens((lens) => (lens.aberrationControl?.varLabels?.length ?? 0) >= 2);
    const ringAuthored = authoredOf(ringKey);
    const [ringBuild] = captureRecords(CATALOG, [{ lens: { key: ringKey }, state: null, family: "build" }]);
    const ringRecord = valueOf(ringBuild) as {
      data: { aberrationControl: { varLabels: [string, string][] } };
      aberrationControl: { varLabels: [number, string][] };
    };
    const ringLabels = ringAuthored.aberrationControl!.varLabels!;
    expect(ringRecord.data.aberrationControl.varLabels).toEqual(ringLabels);
    expect(ringRecord.aberrationControl.varLabels).toEqual(indexed(ringAuthored, ringLabels));
  });

  it("keeps the composition record of a pair whose host leaves its element defaults out", () => {
    const { before, after } = captureRespelled(PAIR.key, [PAIR.key, PAIR_ID], (lens) => {
      withoutOnElements("apd")(lens);
      withoutOnElements("indexReference")(lens);
    });
    expect(recordDigests(after)).toEqual(recordDigests(before));
  });

  it("copies the inline schema defaults exactly, so its echo rules follow the canonical prescription's", () => {
    /* The harness runs against engines that predate `prescription/defaults.ts`, so it keeps its own copy. */
    const copyOf = (rows: readonly SchemaDefault[]) =>
      rows
        .filter((row) => row.v1Applied === "engine")
        .map((row) => ({
          v1Field: row.v1Field,
          value: row.value,
          ...(row.authoredIsDefault?.(0) ? { falsyIsDefault: true } : {}),
        }));
    expect(ECHO_DEFAULTS).toEqual({
      lens: copyOf(LENS_SCHEMA_DEFAULTS),
      element: copyOf(ELEMENT_SCHEMA_DEFAULTS),
      rearPlate: copyOf(REAR_PLATE_SCHEMA_DEFAULTS),
    });
    /* A catalog row needs no copy: the engine merges it before any record hands data back. */
    expect(LENS_SCHEMA_DEFAULTS.filter((row) => row.v1Applied === "catalog").length).toBeGreaterThan(0);
  });

  it("changes with every value in the file, except the two the engine does not read", () => {
    /* Walk every leaf of the plain twin, change it by the smallest step, and see whether the fingerprint moves. */
    const unmoved: string[] = [];
    const visit = (node: unknown, path: (string | number)[]): void => {
      if (node !== null && typeof node === "object") {
        for (const [key, child] of Object.entries(node))
          visit(child, [...path, Array.isArray(node) ? Number(key) : key]);
        return;
      }
      const changed = edited((lens) => {
        let owner = lens as object as Record<string | number, unknown>;
        for (const step of path.slice(0, -1)) owner = owner[step] as Record<string | number, unknown>;
        const leaf = path[path.length - 1];
        if (typeof node === "number") owner[leaf] = node === 0 ? Number.MIN_VALUE : node * (1 + Number.EPSILON);
        else if (typeof node === "string") owner[leaf] = `${node}~`;
        else owner[leaf] = "set";
      });
      if (fingerprint(changed) === base) unmoved.push(path.join("."));
    };
    visit(plainTwin, []);

    /* The stop radius is derived on this lens, and a flat radius stays flat at any magnitude past the threshold. */
    expect(unmoved).toEqual(["surfaces.0.R", "surfaces.0.sd"]);
  });

  it("follows the engine's authority rules for flat radii, zero asphere terms and the sign of zero", () => {
    expect(fingerprint(edited((lens) => (lens.surfaces[0].R = -2e15)))).toBe(base);
    expect(fingerprint(edited((lens) => (lens.surfaces[0].R = 1e9)))).not.toBe(base);

    const asph = (lens: LensDataInput) => lens.asph as Record<string, Record<string, number>>;
    expect(fingerprint(edited((lens) => delete asph(lens)["1A"].A14))).toBe(base);
    expect(fingerprint(edited((lens) => (asph(lens)["1A"].A16 = 0)))).toBe(base);
    expect(fingerprint(edited((lens) => (asph(lens)["1A"].A8 = -0)))).toBe(base);
    expect(fingerprint(edited((lens) => (asph(lens)["1A"].A8 = 1e-14)))).not.toBe(base);
    /* An entry makes its surface aspheric to the engine and the UI even when every term is zero. */
    const allZero = edited((lens) => (asph(lens)["2"] = { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 }));
    expect(fingerprint(allZero)).not.toBe(base);
    expect(fingerprint(edited((lens) => (asph(lens)["2"] = {})))).toBe(fingerprint(allZero));

    expect(fingerprint(edited((lens) => (lens.surfaces[0].elemId = -0)))).toBe(base);
    expect(fingerprint(edited((lens) => (lens.subtitle = undefined)))).toBe(
      fingerprint(edited((lens) => delete lens.subtitle)),
    );
  });

  it("keeps a written-out default equal to an omitted one, and tells a changed default apart", () => {
    expect(fingerprint(edited((lens) => (lens.svgW = 1080)))).toBe(base);
    expect(fingerprint(edited((lens) => (lens.svgW = 1081)))).not.toBe(base);
    /* Defaults the engine applies inline count as their omission too. */
    expect(fingerprint(edited((lens) => (lens.elements[0].apd = false)))).toBe(base);
    expect(fingerprint(edited((lens) => (lens.elements[0].apd = "inferred")))).not.toBe(base);
    expect(fingerprint(edited((lens) => (lens.elements[0].indexReference = "d")))).toBe(base);
    expect(fingerprint(edited((lens) => (lens.elements[0].indexReference = "e")))).not.toBe(base);
    expect(fingerprint(edited((lens) => (lens.focusPositions = [0, 1])))).toBe(base);
    /* Fields nothing reads yet are still hashed: a converted file must carry them. */
    expect(fingerprint(edited((lens) => (lens.apertureBlades = 9)))).not.toBe(base);
    expect(fingerprint(edited((lens) => (lens.apertureBladeRoundedness = 0.5)))).not.toBe(base);
    /* `maker: null` records an unconfirmed maker; omission keeps name inference. */
    expect(fingerprint(edited((lens) => delete lens.maker))).not.toBe(base);
    /* An infinite focal length is not a missing one; plain JSON would write both as null. */
    expect(fingerprint(edited((lens) => (lens.elements[0].fl = Number.POSITIVE_INFINITY)))).not.toBe(
      fingerprint(edited((lens) => (lens.elements[0].fl = null as never))),
    );
  });

  it("gives a file the engine cannot ingest a fingerprint of its own instead of stopping", () => {
    /* Zoom labels on a prime have no station to live on, so canonical ingest refuses them. */
    const refused = edited((lens) => (lens.zoomLabels = ["wide"]));
    expect(() => ingestLensV1(refused)).toThrow(/zoomLabels/);
    expect(fingerprint(refused)).toMatch(/^[0-9a-f]{64}$/);
    expect(fingerprint(refused)).not.toBe(base);
    expect(fingerprint(structuredClone(refused))).toBe(fingerprint(refused));
    expect(fingerprint(edited((lens) => (lens.zoomLabels = ["tele"])))).not.toBe(fingerprint(refused));
  });

  it("hashes the STO semi-diameter only where the restated rule says the engine reads it", () => {
    /** The authority the rule assigns, and whether shrinking the authored STO radius moves the fingerprint. */
    const readsStopRadius = (setUp: (lens: LensDataInput) => void) => {
      const lens = edited(setUp);
      const shrunk = edited((copy) => {
        setUp(copy);
        copy.surfaces[0].sd *= 0.9;
      });
      return [stopRadiusAuthority(lens), fingerprint(lens) !== fingerprint(shrunk)];
    };
    /* A schedule needs zoom stations to live on. */
    const asZoomWithSchedule = (lens: LensDataInput) => {
      lens.zoomPositions = [50, 60];
      lens.var = {
        "2": [
          [80, 84],
          [80, 84],
        ],
      };
      lens.zoomStopSemiDiameters = [8, 9];
    };
    expect(readsStopRadius(() => {})).toEqual(["derived", false]);
    expect(readsStopRadius(asZoomWithSchedule)).toEqual(["schedule", false]);
    expect(readsStopRadius((lens) => (lens.surfaces[1].interaction = { type: "refract" }))).toEqual(["derived", false]);
    expect(readsStopRadius((lens) => (lens.surfaces[0].stopPlacement = "inside-element"))).toEqual(["authored", true]);
    expect(readsStopRadius((lens) => (lens.opticalPath = { mode: "auto" }))).toEqual(["authored", true]);
    expect(readsStopRadius((lens) => (lens.surfaces[2].interaction = { type: "reflect" }))).toEqual(["authored", true]);
    /* A folded lens keeps its authored stop even when it also carries a schedule. */
    expect(
      readsStopRadius((lens) => {
        lens.opticalPath = { mode: "auto" };
        asZoomWithSchedule(lens);
      }),
    ).toEqual(["authored", true]);
  });

  it("restates the stop-radius rule as the engine applies it, on every catalog lens", () => {
    /* `buildLens` exports no predicate for this rule. Shrink each authored STO semi-diameter and compare what the
     * engine built: the build constants must move exactly when the fingerprint does. */
    const built = (data: LensData) =>
      JSON.stringify(
        outcomeOf(() =>
          encodeValue(projectBuildConstants(seam.buildLens(data), CHROMATIC_CHANNELS, seam.flatRadiusThreshold)),
        ),
      );
    const offenders: string[] = [];
    const authorities = { authored: 0, schedule: 0, derived: 0 };
    for (const { key } of CATALOG.lenses) {
      const authored = authoredOf(key);
      const shrunk = structuredClone(authored);
      const stop = shrunk.surfaces.find((surface) => surface.label === "STO");
      if (!stop) {
        offenders.push(`${key}: no STO surface`);
        continue;
      }
      stop.sd *= 0.9;
      const engineReads = built(authored) !== built(shrunk);
      const fingerprintReads = fingerprint(authored) !== fingerprint(shrunk);
      authorities[stopRadiusAuthority(authored)]++;
      if (engineReads !== fingerprintReads)
        offenders.push(`${key}: engine ${engineReads}, fingerprint ${fingerprintReads}`);
    }
    expect(offenders).toEqual([]);
    /* Each branch of the rule is exercised by the catalog. */
    expect(Object.values(authorities).every((count) => count > 0)).toBe(true);
  });

  it("gives every catalog lens and teleconverter its own fingerprint", () => {
    const { lenses, teleconverters } = fingerprintCatalog(CATALOG);
    expect(new Set(Object.values(lenses)).size).toBe(CATALOG.lenses.length);
    expect(new Set(Object.values(teleconverters)).size).toBe(CATALOG.teleconverters.length);
    expect(teleconverters[PAIR.teleconverter!]).toBe(
      semanticFingerprint(
        decodeValue(CATALOG.teleconverters.find((entry) => entry.key === PAIR.teleconverter)!.prescription) as object,
        projectConverter,
      ),
    );
    expect(lenses[PAIR.key]).toBe(fingerprint(authoredOf(PAIR.key)));
  });
});
