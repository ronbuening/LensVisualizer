/**
 * Capture entry of the engine differential harness.
 *
 * A driver bundles this file with Vite as an SSR entry, once per ref, and compares what the two bundles return. The
 * entry exports the bundle's own catalog as serialized prescriptions, and it evaluates serialized prescriptions it is
 * handed: a capture never reads its own catalog, so one ref's data can be run on the other ref's engine. Engine calls
 * go through `seamAdapter.ts`, request definitions come from `requests.ts`, and every result is normalized by
 * `payload.ts` into one record per lens, state and request family. The bundle also carries `compare.ts`, which the
 * driver calls on the records of two captures.
 */

import {
  createResultEncoder,
  decodeValue,
  encodeValue,
  normalizeAuthoredData,
  outcomeOf,
  projectBuildConstants,
  projectTrace,
  radiusOrFlat,
  recordAnalysisJob,
  semanticFingerprint,
  snapConjugate,
  type EncodedValue,
  type Outcome,
  type SemanticProjection,
} from "./payload.js";
import {
  ANALYSIS_CONTEXT_JOBS,
  ASPHERIC_READOUT_FRACTIONS,
  CHIEF_FIELD_FRACTIONS,
  CHROMATIC_CHANNELS,
  CHROMATIC_PUPIL_FRACTIONS,
  GROUP_MOVEMENT_MODES,
  LOCA_INSET_BAR_WIDTH_PX,
  LOCA_READOUT_FRACTIONS,
  NEAR_AXIS_PROBE_DELTA,
  OFF_AXIS_FIELD_FRACTION,
  OFF_AXIS_PUPIL_FRACTIONS,
  ON_AXIS_PUPIL_FRACTIONS,
  SKEW_FIELD_FRACTION,
  SKEW_PUPIL_FRACTIONS,
  lensId,
  mtfRequestOf,
  type CaptureRequest,
  type CaptureState,
  type CatalogLens,
  type LensRef,
  type RequestCatalog,
  type RequestFamily,
} from "./requests.js";
import {
  ownCatalogFiles,
  resolveOptionalSeam,
  resolveSeam,
  type EngineRay,
  type EngineSeam,
  type EngineTrace,
  type EngineTraceOptions,
  type LensData,
  type PreparedState,
  type RuntimeLens,
  type TeleconverterData,
} from "./seamAdapter.js";

import { capturePropagation, type PropagatedEvidenceMap } from "./propagation.js";

/* A driver sees only the built bundle, so everything it calls is exported from here. */
export {
  classifyCatalogChanges,
  comparePermittedPairs,
  createDifferentialRun,
  dataChangeOf,
  needsPropagation,
  parseDeclaredExceptions,
  renderDataImpactMarkdown,
  renderSummaryMarkdown,
} from "./compare.js";
export { decodeValue, encodeValue, sha256Hex } from "./payload.js";
export { lensId, shardRequests, stateId, tierRequests } from "./requests.js";
export { describeSeam } from "./seamAdapter.js";

/* ── Serialized catalog ── */

/** One authored prescription in the tagged encoding, as its module exports it and before any defaults. */
export interface SerializedPrescription {
  key: string;
  /** Source file relative to `src/lens-data/`; provenance for reports, never an input to a capture. */
  file: string;
  prescription: EncodedValue;
}

/** A catalog as data: hosts and converters apart, plus the pairs the exporting engine's fit predicate allows. */
export interface SerializedCatalog {
  lenses: SerializedPrescription[];
  teleconverters: SerializedPrescription[];
  pairs: { host: string; teleconverter: string }[];
}

function serializeFiles(files: Readonly<Record<string, unknown>>, kind: string): SerializedPrescription[] {
  const byKey = new Map<string, SerializedPrescription>();
  for (const [file, data] of Object.entries(files)) {
    const key = (data as { key?: unknown } | null)?.key;
    if (typeof key !== "string" || key === "") throw new Error(`engineDiff: ${kind} file ${file} exports no key`);
    const earlier = byKey.get(key);
    if (earlier) throw new Error(`engineDiff: ${kind} key "${key}" is exported by ${earlier.file} and ${file}`);
    byKey.set(key, { key, file, prescription: encodeValue(data) });
  }
  /* Code-unit order: glob order follows the file system, and a locale collation would follow the machine. */
  return [...byKey.values()].sort((a, b) => (a.key < b.key ? -1 : 1));
}

/**
 * Every host and converter of a serialized catalog that this bundle's fit predicate allows together.
 *
 * The predicate is engine code, so the pair list of a catalog is one engine's answer. A driver that compares two
 * engines asks each of them about the same prescriptions. An engine may be handed a prescription in a form it
 * predates, and the predicate may throw on it: what an engine cannot read it does not permit, and `unbuiltPairs`
 * says which pairs it cannot build.
 *
 * @param catalog - lens and teleconverter prescriptions from any ref
 * @returns the permitted pairs in the catalog's order: by host, then by converter
 */
export function permittedPairs(
  catalog: Pick<SerializedCatalog, "lenses" | "teleconverters">,
): SerializedCatalog["pairs"] {
  const seam = resolveSeam();
  const pairs: SerializedCatalog["pairs"] = [];
  const converters = catalog.teleconverters.map((converter) => ({
    key: converter.key,
    data: catalogTeleconverterData(decodeValue(converter.prescription) as TeleconverterData),
  }));
  for (const host of catalog.lenses) {
    /* The catalog merge is engine code too: canonical ingest may refuse a host this engine cannot read. */
    const hostData = outcomeOf(() => catalogLensData(decodeValue(host.prescription) as LensData));
    if (!hostData.ok) continue;
    for (const converter of converters) {
      const fit = outcomeOf(() => seam.teleconverterCompatibility(hostData.value, converter.data));
      if (fit.ok && fit.value.ok) pairs.push({ host: host.key, teleconverter: converter.key });
    }
  }
  return pairs;
}

/**
 * Find the pairs, among those given, that this bundle's engine cannot compose and build.
 *
 * Each pair is asked for its build record, as a capture asks for it: the host takes this bundle's defaults, the
 * composer attaches the converter, and the composed prescription is built. A driver asks both engines about the
 * head's prescriptions, and a pair the base engine cannot build while the head engine can is an uncompared lens.
 * The answer is the pair's own. A host that does not build alone says nothing of its pairs, which are composed
 * from a host with defaults, and a pair that does not build says nothing of its converter's other pairs.
 *
 * @param catalog - lens and teleconverter prescriptions from any ref
 * @param pairs - the pairs to try; one named twice is built once
 * @returns what the engine said of each pair it could not build, by lens id
 * @throws when a pair names a lens or converter the catalog does not hold
 */
export function unbuiltPairs(catalog: SerializedCatalog, pairs: SerializedCatalog["pairs"]): Record<string, string> {
  const requests = new Map<string, CaptureRequest>();
  for (const { host, teleconverter } of pairs) {
    const lens = { key: host, teleconverter };
    requests.set(lensId(lens), { lens, state: null, family: "build" });
  }
  const unbuilt: Record<string, string> = {};
  for (const { lens, payload } of captureRecords(catalog, [...requests.values()])) {
    if (!payload.ok) unbuilt[lens] = `${payload.error.name}: ${payload.error.message}`;
  }
  return unbuilt;
}

/**
 * Export this bundle's own catalog: every lens (hidden ones included), every teleconverter, and every host and
 * converter pair this engine permits.
 *
 * @param options - `validateTeleconverters` requires every converter to pass this engine's ingest and, where
 * available, its V1 view when exporting the head catalog
 * @returns JSON-safe prescriptions sorted by key, and pairs sorted by host then converter
 * @throws when a catalog file has no key or repeats a key, or a required engine seam is missing
 * @throws when a prescription contains a value the tagged encoding cannot serialize
 * @throws when head validation has no teleconverter ingest
 * @throws when head validation finds an ingest or V1-view failure, naming each key and error
 */
export function exportCatalog({ validateTeleconverters = false } = {}): SerializedCatalog {
  const files = ownCatalogFiles();
  const lenses = serializeFiles(files.lenses, "lens");
  const teleconverters = serializeFiles(files.teleconverters, "teleconverter");
  if (validateTeleconverters) {
    const { ingestTeleconverter, teleconverterView } = resolveOptionalSeam();
    if (!ingestTeleconverter) throw new Error("engineDiff: the head engine has no teleconverter ingest");
    const refused: string[] = [];
    for (const { key, prescription } of teleconverters) {
      const read = outcomeOf(() => {
        const converter = ingestTeleconverter(decodeValue(prescription) as TeleconverterData);
        return teleconverterView ? teleconverterView(converter) : converter;
      });
      if (!read.ok) refused.push(`${key}: ${read.error.name}: ${read.error.message}`);
    }
    if (refused.length > 0) {
      throw new Error(`engineDiff: head catalog teleconverter cannot be read:\n${refused.join("\n")}`);
    }
  }
  return { lenses, teleconverters, pairs: permittedPairs({ lenses, teleconverters }) };
}

/**
 * Semantic fingerprints of a serialized catalog under this bundle's engine rules.
 *
 * The rules are the engine's canonical ingest, which a driver asks of the head's bundle alone: both catalogs are
 * fingerprinted by one engine, and a base that predates canonical ingest has none to offer.
 *
 * @param catalog - prescriptions from any ref
 * @returns fingerprint per lens key and per teleconverter key
 * @throws when this bundle's engine has no canonical ingest
 */
export function fingerprintCatalog(catalog: SerializedCatalog): {
  lenses: Record<string, string>;
  teleconverters: Record<string, string>;
} {
  const { ingestLens, ingestTeleconverter } = resolveOptionalSeam();
  if (!ingestLens || !ingestTeleconverter) {
    throw new Error("engineDiff: this engine has no canonical ingest; fingerprint catalogs with the head's bundle");
  }
  const fingerprints = (entries: readonly SerializedPrescription[], project: SemanticProjection) =>
    Object.fromEntries(
      entries.map(({ key, prescription }) => [key, semanticFingerprint(decodeValue(prescription) as object, project)]),
    );
  return {
    lenses: fingerprints(catalog.lenses, (lens) => ingestLens(lens as LensData).prescription),
    teleconverters: fingerprints(
      catalog.teleconverters,
      (converter) => ingestTeleconverter(converter as TeleconverterData).prescription,
    ),
  };
}

/**
 * A file's zoom station count and focus keyframes, as authored in either version: V1 lists `zoomPositions` and
 * `focusPositions`, V2 its `zoom.stations` and `focus.keyframes`.
 */
function authoredStations(data: Partial<LensData>): { stations: number; keyframes: unknown } {
  const v2 = data as { schema?: unknown; zoom?: { stations?: unknown }; focus?: { keyframes?: unknown } };
  if (v2.schema === 2) {
    return {
      stations: Array.isArray(v2.zoom?.stations) ? v2.zoom.stations.length : 1,
      keyframes: v2.focus?.keyframes,
    };
  }
  return {
    stations: Array.isArray(data.zoomPositions) ? data.zoomPositions.length : 1,
    keyframes: data.focusPositions,
  };
}

/**
 * Reduce a serialized catalog to what `tierRequests` needs.
 *
 * Each fact is read off the authored prescription the way the engine reads it, from a file of either version, and
 * none of them through the engine: a request list is built once, from the head's prescriptions, and handed to both
 * engines. Every feature but the stations sits at the same place in both versions.
 *
 * @param catalog - prescriptions from any ref
 * @returns each lens's authored stations and the features a tier chooses lenses by, and the pairs
 */
export function requestCatalog(catalog: SerializedCatalog): RequestCatalog {
  return {
    lenses: catalog.lenses.map(({ key, prescription }): CatalogLens => {
      const data = decodeValue(prescription) as Partial<LensData>;
      const { aberrationControl } = data;
      const { stations, keyframes: focusPositions } = authoredStations(data);
      return {
        key,
        zoomStations: stations,
        /* Fewer than two keyframes is no focus table: the engine interpolates between the slider's ends. */
        focusPositions:
          Array.isArray(focusPositions) && focusPositions.length >= 2 ? (focusPositions as number[]) : [0, 1],
        /* The engine reads a ring as centered by its center label. */
        aberrationControl: !aberrationControl
          ? null
          : aberrationControl.centerLabel != null
            ? "centered"
            : "two-position",
        projection: data.projection?.kind ?? null,
        folded:
          data.opticalPath != null ||
          (data.surfaces ?? []).some(
            (surface) => surface.interaction != null && surface.interaction.type !== "refract",
          ),
        perspectiveControl: data.perspectiveControl != null,
        diffractive: (data.surfaces ?? []).some((surface) => surface.diffractive != null),
        absorbing: (data.elements ?? []).some((element) => (element.absorptionCoefficientPerMm ?? 0) > 0),
        rearPlateMaker: (data.rearPlates?.length ?? 0) > 0 ? (data.maker ?? "") : null,
      };
    }),
    pairs: catalog.pairs,
  };
}

/* ── Capture ── */

/** One NDJSON-able payload record: what one request family returned for one lens state, or how it failed. */
export interface PayloadRecord {
  c2?: PropagatedEvidenceMap;
  /** `lensId` of the request's lens. */
  lens: string;
  state: CaptureState | null;
  request: RequestFamily;
  /** The request's variant, on the record of a request that names one. */
  variant?: string;
  payload: Outcome<EncodedValue>;
}

/**
 * A lens file as this engine's catalog hands it to the composer and the fit predicate. A ref that still has the V1
 * defaults object spreads it, as its catalog did; a later ref reads the file through canonical ingest and its V1
 * view, as its catalog does.
 *
 * @param authored - a lens file as authored
 * @returns the catalog's lens data, on this engine
 */
export function catalogLensData(authored: LensData): LensData {
  const { lensDefaults, ingestLens, lensView } = resolveOptionalSeam();
  if (lensDefaults) return { ...lensDefaults, ...authored } as LensData;
  if (ingestLens && lensView) return lensView(ingestLens(authored as Parameters<typeof ingestLens>[0]));
  throw new Error("engine-diff: this engine has neither the V1 lens defaults nor canonical ingest with its V1 view");
}

/**
 * A converter file as this engine's catalog hands it to the composer and the fit predicate: through canonical ingest
 * and its V1 view where the engine has them, so a V2 file reads, and as authored on an older ref.
 *
 * A file whose ingest or view fails is handed on as authored, preserving base-engine and base-data behavior. The
 * driver separately validates every head-catalog converter through the head's ingest and available V1 view at
 * export, before selecting pairs; either failure fails the run in every class, even when no pair uses that converter.
 *
 * @param authored - a converter file as authored
 * @returns the catalog's converter data, on this engine
 */
export function catalogTeleconverterData(authored: TeleconverterData): TeleconverterData {
  const { ingestTeleconverter, teleconverterView } = resolveOptionalSeam();
  if (!ingestTeleconverter || !teleconverterView) return authored;
  const read = outcomeOf(() =>
    teleconverterView(ingestTeleconverter(authored as Parameters<typeof ingestTeleconverter>[0])),
  );
  return read.ok ? read.value : authored;
}

/**
 * Capture payload records for a request list.
 *
 * Each record is computed on a lens built for that record alone, from a prescription decoded for it. The engine
 * memoizes per lens object, and its chief-ray cache is keyed without the field geometry a caller passes, so a lens
 * shared between records could let one record's content depend on which other records were requested, or in what
 * order. A converter pair is composed here, by this bundle's composer on a host with this bundle's defaults.
 *
 * The records of a whole tier run to hundreds of megabytes, so a driver passes one lens's requests at a time and
 * writes each batch out before asking for the next.
 *
 * @param catalog - serialized prescriptions; every lens and converter a request names must be in it
 * @param requests - what to capture, in the order to return it
 * @param propagate - collect solver sensitivity in an instrumented C2 capture
 * @returns one record per request, in request order
 * @throws when a request names a lens or converter the catalog does not hold
 */
export function captureRecords(
  catalog: SerializedCatalog,
  requests: readonly CaptureRequest[],
  propagate = false,
): PayloadRecord[] {
  const seam = resolveSeam();
  const lenses = new Map(catalog.lenses.map((entry) => [entry.key, entry.prescription]));
  const teleconverters = new Map(catalog.teleconverters.map((entry) => [entry.key, entry.prescription]));
  /* Checked before any capture: recorded as an outcome, a missing prescription would fail alike on both engines
   * and compare equal. */
  const absent = requests.flatMap(({ lens }) => [
    ...(lenses.has(lens.key) ? [] : [`lens ${lens.key}`]),
    ...(!lens.teleconverter || teleconverters.has(lens.teleconverter) ? [] : [`teleconverter ${lens.teleconverter}`]),
  ]);
  if (absent.length > 0) {
    throw new Error(`engineDiff: the supplied catalog has no ${[...new Set(absent)].join(", ")}`);
  }

  const hostOf = (lens: LensRef) => decodeValue(lenses.get(lens.key) ?? null) as LensData;
  const converterOf = (key: string) =>
    catalogTeleconverterData(decodeValue(teleconverters.get(key) ?? null) as TeleconverterData);
  /* A bare lens goes to `buildLens` as authored, so a change to how the engine applies defaults shows as drift. */
  const buildFresh = (lens: LensRef): RuntimeLens =>
    seam.buildLens(
      lens.teleconverter
        ? seam.attachTeleconverter(catalogLensData(hostOf(lens)), converterOf(lens.teleconverter))
        : hostOf(lens),
    );

  /** The engine work of one request. A malformed request throws here, before anything is captured. */
  const workOf = ({ lens, state, family, variant }: CaptureRequest): (() => unknown) => {
    /* Only MTF is asked in more than one way; `mtfRequestOf` refuses a name it does not know. */
    if (family === "mtf") mtfRequestOf(variant);
    else if (variant !== undefined) {
      throw new Error(`engineDiff: ${family} was requested of ${lensId(lens)} as "${variant}", and has no variants`);
    }
    if (family === "composition") {
      const converterKey = lens.teleconverter;
      if (!converterKey) throw new Error(`engineDiff: composition was requested of ${lens.key}, which is not a pair`);
      return () => {
        const host = catalogLensData(hostOf(lens));
        const converter = converterOf(converterKey);
        return {
          compatibility: seam.teleconverterCompatibility(host, converter),
          /* The composer copies most of the host and the converter through. Normalized as the fingerprint reads a
           * file, the copy cannot move on a spelling the fingerprint treats as the same prescription. */
          prescription: normalizeAuthoredData(seam.attachTeleconverter(host, converter), seam.flatRadiusThreshold),
        };
      };
    }
    if (family === "build") {
      return () => projectBuildConstants(buildFresh(lens), CHROMATIC_CHANNELS, seam.flatRadiusThreshold);
    }
    if (!state) throw new Error(`engineDiff: ${family} was requested of ${lensId(lens)} without a lens state`);
    const capture = STATE_FAMILIES[family];
    return () => capture(seam, buildFresh(lens), state, variant);
  };

  const work = requests.map(workOf);
  return requests.map(({ lens, state, family, variant }, index): PayloadRecord => {
    const outcome = outcomeOf(work[index]);
    /* Prescription data is encoded without loss. Engine results go through the result encoder, which is made per
     * record so the trace digests of one record's jobs are computed once and then dropped. */
    const encode = family === "composition" || family === "build" ? encodeValue : createResultEncoder();
    const payload = outcome.ok ? { ok: true as const, value: encode(outcome.value) } : outcome;
    return {
      ...(propagate && payload.ok ? { c2: capturePropagation(work[index], family, payload.value) } : {}),
      lens: lensId(lens),
      state,
      request: family,
      ...(variant === undefined ? {} : { variant }),
      payload,
    };
  });
}

/* ── State families ── */

type StateFamily = Exclude<RequestFamily, "composition" | "build">;
type StateCapture = (seam: EngineSeam, lens: RuntimeLens, state: CaptureState, variant?: string) => unknown;

/**
 * Field geometry and aperture at a state, by the viewer's arithmetic: the slider's f-number scales the wide-open
 * stop and entrance-pupil semi-diameters alike.
 */
function apertureAtState(seam: EngineSeam, lens: RuntimeLens, state: CaptureState) {
  const { focusT, zoomT, aberrationT, stopdownT } = state;
  const fieldGeometry = seam.computeAnalysisFieldGeometryAtState(focusT, zoomT, lens, aberrationT);
  const wideOpenFNumber = seam.fopenAtZoom(zoomT, lens);
  const fNumber = seam.fNumberAtStopdown(stopdownT, zoomT, lens);
  const wideOpenStopSemiDiameterMm = seam.wideOpenStopAtZoom(zoomT, lens);
  const wideOpenPupil = seam.entrancePupilAtState(
    wideOpenStopSemiDiameterMm,
    focusT,
    zoomT,
    lens,
    fieldGeometry,
    aberrationT,
  );
  return {
    fieldGeometry,
    wideOpenPupil,
    fNumber,
    stopSemiDiameterMm: (wideOpenStopSemiDiameterMm * wideOpenFNumber) / fNumber,
    pupilSemiDiameterMm: (wideOpenPupil.epSD * wideOpenFNumber) / fNumber,
  };
}

const captureLayout: StateCapture = (seam, lens, { focusT, zoomT, aberrationT }) => {
  const prepared = seam.prepareState(lens, focusT, zoomT, aberrationT);
  return {
    ...seam.doLayout(focusT, zoomT, lens, aberrationT),
    totalTrack: prepared.totalTrack,
    imagePlane: prepared.imagePlane,
    /* The state's own radii: the stop follows the zoom schedule here, which the build constants do not show. */
    surfaceSemiDiameters: prepared.surfaces.map((surface) => surface.sd),
    /* The RuntimeLens layout that the older analysis modules still call. */
    legacy: seam.legacyDoLayout(focusT, zoomT, lens, aberrationT),
  };
};

const captureFieldGeometry: StateCapture = (seam, lens, state) => {
  const { focusT, zoomT, aberrationT } = state;
  const raw = seam.computeFieldGeometryAtState(focusT, zoomT, lens, aberrationT);
  const { fieldGeometry, wideOpenPupil, stopSemiDiameterMm, pupilSemiDiameterMm } = apertureAtState(seam, lens, state);
  return { raw, analysis: fieldGeometry, wideOpenPupil, stopSemiDiameterMm, pupilSemiDiameterMm };
};

const captureChiefSolves: StateCapture = (seam, lens, { focusT, zoomT, aberrationT }) => {
  const fieldGeometry = seam.computeAnalysisFieldGeometryAtState(focusT, zoomT, lens, aberrationT);
  return {
    halfFieldDeg: fieldGeometry.halfFieldDeg,
    solves: CHIEF_FIELD_FRACTIONS.map((fieldFraction) => {
      const fieldAngleDeg = fieldFraction * fieldGeometry.halfFieldDeg;
      const solve = seam.solveChiefRay(fieldAngleDeg, focusT, zoomT, lens, fieldGeometry, aberrationT);
      return { fieldFraction, fieldAngleDeg, ...solve };
    }),
  };
};

/**
 * Where a completed ray meets the image plane, as `[x, y]` in mm.
 *
 * A generalized (folded) trace ends on the image plane. A sequential trace ends on the last surface's vertex plane,
 * and the engine's callers carry it across the last gap with `skewImagePlaneIntercept`; so does this.
 */
function imagePoint(seam: EngineSeam, prepared: PreparedState, trace: EngineTrace): readonly number[] | null {
  if (trace.status !== "ok") return null;
  if (trace.reachedImagePlane) return [trace.terminalPoint[0], trace.terminalPoint[1]];
  if (trace.diagnostics.terminationReason !== "sequential-return") return null;
  const landing = seam.skewImagePlaneIntercept(
    trace.x,
    trace.y,
    trace.ux,
    trace.uy,
    prepared.z[trace.returnVertexIndex],
    prepared.imgZ,
  );
  return landing ? [landing.x, landing.y] : null;
}

/**
 * Two near-axis probes on the production tracer, launched as the state's field geometry launches its basis rays.
 *
 * Each height at the stop divided by NEAR_AXIS_PROBE_DELTA is that geometry's yRatio or b, bit for bit. A failed
 * probe records its status instead of hiding the engine's fallback behind a nearly equal pupil constant. The launch
 * is copied from computeFieldGeometryAtState2's slopeRayForState and inferLeadDistance2. Keep it in step with them.
 * The probes have their own outcome because reading a changed prepared state may throw without losing the fans.
 * Folded lenses have no probe: their generalized stop search is not exposed by the seam.
 *
 * @param seam - the engine seam
 * @param lens - the built lens
 * @param prepared - the prepared state at the record's controls
 * @returns the production probes' outcome, or applicable: false for a folded lens
 */
function nearAxisProbes(seam: EngineSeam, lens: RuntimeLens, prepared: PreparedState) {
  if (lens.isFoldedOptics) return { applicable: false };
  const delta = NEAR_AXIS_PROBE_DELTA;

  const preparedProbes = () => {
    /* `inferLeadDistance2`: clear of the rim of a tilted first plane, or of the first surface's sag at its rim, and
     * never less than 1 mm. */
    const first = prepared.surfaces[0];
    const tilt = first.interaction.normal;
    const lead = tilt
      ? Math.abs(tilt[2]) > 1e-12
        ? Math.max(1, Math.abs((first.sd * tilt[1]) / tilt[2]) + 1)
        : Math.max(1, 2 * first.sd + 1)
      : Math.max(1, Math.abs(first.profile.sag(first.sd)) + 1);
    const stopAt = prepared.lens.stop.surfaceIndex;
    const probe = (y0: number, u0: number) => {
      const scale = 1 / Math.hypot(0, u0, 1);
      const trace = seam.traceRay(
        prepared,
        { origin: [0, y0 - u0 * lead, prepared.z[0] - lead], direction: [0, u0 * scale, scale] },
        { stopAt },
      );
      /* The height at the stop as the engine reads it: not a number once the trace has failed. */
      const y = trace.failureReason === null ? trace.y : Number.NaN;
      return { status: trace.status, failureReason: trace.failureReason, y };
    };
    return { marginal: probe(delta, 0), chief: probe(0, delta) };
  };

  return {
    applicable: true,
    prepared: outcomeOf(preparedProbes),
  };
}

const captureTraces: StateCapture = (seam, lens, state) => {
  const { focusT, zoomT, aberrationT } = state;
  const prepared = seam.prepareState(lens, focusT, zoomT, aberrationT);
  const { fieldGeometry, stopSemiDiameterMm, pupilSemiDiameterMm } = apertureAtState(seam, lens, state);

  /* The public slope tracers launch one ray lead ahead of the first vertex, in the lens frame, with these options.
   * Launched the same way, the full-hit tracer follows the same rays bit for bit and returns their hits as well. */
  const launchZ = prepared.z[0] - lens.rayLead;
  const slopeRay = (x0: number, y0: number, ux: number, uy: number): EngineRay => ({
    origin: [x0 - ux * lens.rayLead, y0 - uy * lens.rayLead, launchZ],
    direction: [ux, uy, 1],
  });
  const options: EngineTraceOptions = {
    checkSemiDiameter: true,
    stopSemiDiameter: stopSemiDiameterMm,
    ghost: true,
    stopOnClip: true,
  };
  const trace = (ray: EngineRay, extra: Partial<EngineTraceOptions> = {}) => {
    const result = seam.traceRay(prepared, ray, { ...options, ...extra });
    return { ...projectTrace(result), imagePoint: imagePoint(seam, prepared, result) };
  };

  /** A fan about the chief ray solved at a fraction of the analysis half-field, offset in or across the meridian. */
  const fanAboutChief = (fieldFraction: number, pupilFractions: readonly number[], sagittal: boolean) => {
    const fieldAngleDeg = fieldFraction * fieldGeometry.halfFieldDeg;
    const chief = seam.solveChiefRay(fieldAngleDeg, focusT, zoomT, lens, fieldGeometry, aberrationT);
    const { vectorLaunch } = chief;
    return {
      fieldFraction,
      fieldAngleDeg,
      launchSurface: chief.launchSurface,
      pupilFractions,
      rays: pupilFractions.map((fraction) => {
        const offsetMm = fraction * pupilSemiDiameterMm;
        if (!vectorLaunch) {
          return trace(
            sagittal
              ? slopeRay(offsetMm, chief.yLaunch, 0, chief.uField)
              : slopeRay(0, chief.yLaunch + offsetMm, 0, chief.uField),
          );
        }
        /* Fisheye and near-90° fields have no finite slope; they launch from the bounding sphere along a vector. */
        const ray = seam.offsetVectorFieldRay(vectorLaunch, sagittal ? offsetMm : 0, sagittal ? 0 : offsetMm);
        return trace(
          { origin: ray.origin, direction: ray.direction },
          { directionNormalized: false, launchBoundT: ray.launchBoundT },
        );
      }),
    };
  };

  return {
    stopSemiDiameterMm,
    pupilSemiDiameterMm,
    onAxis: {
      pupilFractions: ON_AXIS_PUPIL_FRACTIONS,
      rays: ON_AXIS_PUPIL_FRACTIONS.map((fraction) => trace(slopeRay(0, fraction * pupilSemiDiameterMm, 0, 0))),
    },
    offAxis: fanAboutChief(OFF_AXIS_FIELD_FRACTION, OFF_AXIS_PUPIL_FRACTIONS, false),
    skew: fanAboutChief(SKEW_FIELD_FRACTION, SKEW_PUPIL_FRACTIONS, true),
    chromatic: {
      pupilFractions: CHROMATIC_PUPIL_FRACTIONS,
      rays: Object.fromEntries(
        CHROMATIC_CHANNELS.map((channel) => {
          const channelOptions = {
            indexAtSurface: seam.channelIndexResolver(prepared, channel),
            wavelengthNm: seam.channelWavelengthNm[channel],
          };
          return [
            channel,
            CHROMATIC_PUPIL_FRACTIONS.map((fraction) =>
              trace(slopeRay(0, fraction * pupilSemiDiameterMm, 0, 0), channelOptions),
            ),
          ];
        }),
      ),
    },
    nearAxisProbes: nearAxisProbes(seam, lens, prepared),
  };
};

/**
 * Best-fit sphere, departure profile and click readout of every aspheric surface, from the prepared-state profiles
 * and again from the surface math the overlay uses.
 */
function asphericComparison(seam: EngineSeam, lens: RuntimeLens) {
  return Object.entries(lens.asphByIdx).map(([key, coefficients]) => {
    const surfaceIndex = Number(key);
    const { R, sd } = lens.S[surfaceIndex];
    const bestFitRadius = seam.computeBestFitSphereR(R, coefficients, sd);
    const legacyBestFitRadius = seam.legacyComputeBestFitSphereR(R, coefficients, sd);
    /* The overlay reads the departure at the height of a click, against the base sphere or the best fit, whichever
     * it is showing. The heights here are fixed fractions of the semi-diameter. */
    const readout = (departureAt: EngineSeam["computeAsphericDeparture"], fitRadius: number) => {
      const against = (sphereRadius: number) =>
        ASPHERIC_READOUT_FRACTIONS.map((fraction) => {
          const h = fraction * sd;
          return { h, delta: departureAt(h, sphereRadius, R, coefficients) };
        });
      return { baseSphere: against(R), bestFitSphere: against(fitRadius) };
    };
    /* A flat-base asphere gets its authored radius back as the best fit, at whatever magnitude and sign the file
     * spells flat with. The departure is computed from the number; the record says only that the fit is flat. */
    return {
      surfaceIndex,
      bestFitRadius: radiusOrFlat(bestFitRadius, seam.flatRadiusThreshold),
      departure: seam.computeDepartureProfile(bestFitRadius, R, coefficients, sd),
      readout: readout(seam.computeAsphericDeparture, bestFitRadius),
      legacy: {
        bestFitRadius: radiusOrFlat(legacyBestFitRadius, seam.flatRadiusThreshold),
        departure: seam.legacyComputeDepartureProfile(legacyBestFitRadius, R, coefficients, sd),
        readout: readout(seam.legacyComputeAsphericDeparture, legacyBestFitRadius),
      },
    };
  });
}

/**
 * The marginal fractions the diagram's LoCA readout tries, outermost first: its own fixed ones, then the heights of
 * the lens's drawn ray fan that an obstruction leaves open.
 */
function locaReadoutFractions(seam: EngineSeam, lens: RuntimeLens, pupilSemiDiameterMm: number): number[] {
  const fractions: number[] = [...LOCA_READOUT_FRACTIONS];
  const drawn = seam.obstructionAwareRayFractionsForDensity(lens, lens.rayFractions, "normal", pupilSemiDiameterMm);
  for (const fraction of drawn) {
    const height = Math.abs(fraction);
    if (height > 1e-12 && !fractions.some((value) => Math.abs(value - height) < 1e-12)) fractions.push(height);
  }
  return fractions.sort((a, b) => b - a);
}

const captureAnalysis: StateCapture = (seam, lens, state) => {
  const { focusT, zoomT, aberrationT } = state;
  const { fieldGeometry, fNumber, stopSemiDiameterMm, pupilSemiDiameterMm } = apertureAtState(seam, lens, state);
  const prepared = seam.prepareState(lens, focusT, zoomT, aberrationT);
  const dynamicEFL = seam.eflAtFocus(focusT, zoomT, lens, aberrationT);
  /* As the viewer does: surface positions are anchored to the reference state's image plane, and the requested
   * movement is clamped to the lens's own ranges, before the lens is posed. */
  const camera = seam.anchorLayoutToCamera(seam.doLayout(0, 0, lens), seam.doLayout(focusT, zoomT, lens, aberrationT));
  const movement = seam.clampLensMovement(lens, { shiftMm: state.shiftMm, tiltDeg: state.tiltDeg });
  const perspectiveTraceContext = seam.createPerspectiveTraceContext({
    preparedState: prepared,
    cameraZPos: camera.z,
    movement: { shiftMm: movement.shiftMm, tiltDeg: movement.tiltDeg },
    tiltPivot: movement.config?.tiltPivot,
  });
  const context = seam.createAnalysisContext({
    preparedState: prepared,
    dynamicEFL,
    currentEPSD: pupilSemiDiameterMm,
    currentPhysStopSD: stopSemiDiameterMm,
    fieldGeometry,
    analysisQuality: "settled",
    perspectiveTraceContext,
  });

  /* Jobs run in this order on one context, as the drawer's sections share one. A job that throws (a centered
   * section while the lens is moved, a perspective job on a lens with no image format) is an outcome of its own. */
  const jobs: Record<string, Outcome<unknown>> = {};
  for (const job of ANALYSIS_CONTEXT_JOBS)
    recordAnalysisJob(
      jobs,
      job,
      outcomeOf(() => context[job]()),
    );
  /* The single field-curvature job has no context accessor; the seam bridges its request and historical entries. */
  jobs.computeFieldCurvature = outcomeOf(() =>
    seam.computeFieldCurvature(prepared, pupilSemiDiameterMm, stopSemiDiameterMm, false, fieldGeometry),
  );
  for (const mode of GROUP_MOVEMENT_MODES) {
    jobs[`groupMovement.${mode}`] = outcomeOf(() => seam.computeGroupMovementProfileForState(prepared, mode));
  }
  jobs.cardinalElements = outcomeOf(() =>
    seam.computeCardinalElementsAtState(lens, focusT, zoomT, camera.z, camera.imgZ, aberrationT),
  );
  jobs.asphericComparison = outcomeOf(() => asphericComparison(seam, lens));

  /* Readouts the viewer computes beside the context, each called as the component that shows it calls it: the
   * working f-number of the header, the chromatic tab's summary of the field-curvature bundle, and the diagram's
   * LoCA readout with the bars of its inset. */
  jobs.effectiveFNumber = outcomeOf(() => seam.effectiveFNumber(fNumber, focusT, zoomT, lens, aberrationT));
  jobs.chromaticFieldFocusSummary = outcomeOf(() =>
    seam.summarizeChromaticFieldFocus(context.computeFieldCurvatureBundle().chromaticFieldCurvature),
  );
  const loca = outcomeOf(() =>
    seam.computeLongitudinalChromaticFocus(
      lens,
      camera.z,
      focusT,
      zoomT,
      pupilSemiDiameterMm,
      stopSemiDiameterMm,
      aberrationT,
      { channels: CHROMATIC_CHANNELS, longitudinalFractions: locaReadoutFractions(seam, lens, pupilSemiDiameterMm) },
    ),
  );
  jobs.longitudinalChromaticFocus = loca;
  jobs.locaBarOffsets = outcomeOf(() => {
    const crossings = loca.ok ? loca.value?.spread.axialIntercepts : undefined;
    if (!crossings) return null;
    /* The inset measures from the G line's crossing, or from the middle of the crossings it has. */
    const z = Object.values(crossings);
    const reference = crossings.G ?? (z.length > 0 ? (Math.min(...z) + Math.max(...z)) / 2 : camera.imgZ);
    /* The inset itself calls the older module, which is `legacy` here; the bars are drawn at the lens's own scale. */
    const bars = [crossings, reference, LOCA_INSET_BAR_WIDTH_PX, lens.SC] as const;
    return { ...seam.computeLocaBarOffsets(...bars), legacy: seam.legacyComputeLocaBarOffsets(...bars) };
  });

  return {
    inputs: { dynamicEFL, fieldGeometry, stopSemiDiameterMm, pupilSemiDiameterMm, movementActive: movement.active },
    jobs,
  };
};

const captureMtf: StateCapture = (seam, lens, state, variant) => {
  const { focusT, zoomT, aberrationT } = state;
  const { stopSemiDiameterMm, pupilSemiDiameterMm } = apertureAtState(seam, lens, state);
  const movement = seam.clampLensMovement(lens, { shiftMm: state.shiftMm, tiltDeg: state.tiltDeg });
  const options = {
    ...mtfRequestOf(variant),
    pupilSemiDiameterMm,
    stopSemiDiameterMm,
    /* MTF takes no pose. The viewer passes this flag, and a moved lens is reported unavailable instead. */
    movementActive: movement.active,
  };
  const prepared = seam.prepareState(lens, focusT, zoomT, aberrationT);
  // The seam bridges request inputs while retaining these historical payload options and their order.
  const result = seam.computeMtf(prepared, options);
  /* The support record hands the authored conjugate back; its coordinates are recorded as the station it names. */
  const { support } = result as { support?: { conjugate?: unknown } };
  if (!support?.conjugate) return { options, result };
  const conjugate = snapConjugate(support.conjugate, lens.focusPositions, lens.data.zoomPositions?.length ?? 1);
  return { options, result: { ...result, support: { ...support, conjugate } } };
};

const STATE_FAMILIES: Record<StateFamily, StateCapture> = {
  layout: captureLayout,
  traces: captureTraces,
  fieldGeometry: captureFieldGeometry,
  chiefSolves: captureChiefSolves,
  analysis: captureAnalysis,
  mtf: captureMtf,
};
