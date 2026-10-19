/**
 * Engine seam adapter for the differential harness.
 *
 * This file resolves the engine exports used by captures; `probePlugin.mjs` separately names the solver sites
 * instrumented only in temporary C2 bundles. The folder is made to be copied into a
 * checkout of an older ref and bundled there, where a static import of an engine file that ref lacks would fail the
 * build. Every engine module is therefore reached through an eager `import.meta.glob` with a literal pattern, which
 * yields nothing for a missing file, and every capability the capture needs is resolved by name from an ordered list
 * of candidate exports. A PR that renames or moves a seam export puts the new name first and keeps the old one
 * behind it, so the same adapter resolves at both refs.
 */

type EngineModule = Readonly<Record<string, unknown>>;

/* One glob per module, so a candidate below can only name a module that is listed here. */
const ENGINE_MODULES = {
  bokehAnalysis: import.meta.glob<EngineModule>("../../optics/analysis/bokeh/bokeh.ts", { eager: true }),
  legacyBokeh: import.meta.glob<EngineModule>("../../optics/aberration/bokeh.ts", { eager: true }),
  pupilAnalysis: import.meta.glob<EngineModule>("../../optics/analysis/pupils/pupilAberration.ts", { eager: true }),
  vignettingAnalysis: import.meta.glob<EngineModule>("../../optics/analysis/vignetting/vignetting.ts", { eager: true }),
  distortionAnalysis: import.meta.glob<EngineModule>("../../optics/analysis/distortion/distortion.ts", { eager: true }),
  comaAnalysis: import.meta.glob<EngineModule>("../../optics/analysis/aberration/coma.ts", { eager: true }),
  fieldCurvatureAnalysis: import.meta.glob<EngineModule>("../../optics/analysis/aberration/fieldCurvature.ts", {
    eager: true,
  }),
  sphericalAnalysis: import.meta.glob<EngineModule>("../../optics/analysis/aberration/spherical.ts", { eager: true }),
  bestFocusAnalysis: import.meta.glob<EngineModule>("../../optics/analysis/aberration/bestFocus.ts", { eager: true }),
  summaryGroupMovement: import.meta.glob<EngineModule>("../../optics/analysis/summary/groupMovement.ts", {
    eager: true,
  }),
  summaryCardinals: import.meta.glob<EngineModule>("../../optics/analysis/summary/cardinals.ts", { eager: true }),
  analysisRequest: import.meta.glob<EngineModule>("../../optics/analysis/request.ts", { eager: true }),
  aperture: import.meta.glob<EngineModule>("../../optics/aperture.ts", { eager: true }),
  apertureStop: import.meta.glob<EngineModule>("../../optics/apertureStop.ts", { eager: true }),
  asphericComparison: import.meta.glob<EngineModule>("../../optics/asphericComparison.ts", { eager: true }),
  buildLens: import.meta.glob<EngineModule>("../../optics/buildLens.ts", { eager: true }),
  cardinalElements: import.meta.glob<EngineModule>("../../optics/cardinalElements.ts", { eager: true }),
  chromaticRayFanScaling: import.meta.glob<EngineModule>("../../optics/chromaticRayFanScaling.ts", { eager: true }),
  compat: import.meta.glob<EngineModule>("../../optics/compat.ts", { eager: true }),
  constants: import.meta.glob<EngineModule>("../../optics/constants.ts", { eager: true }),
  geometry: import.meta.glob<EngineModule>("../../optics/geometry.ts", { eager: true }),
  layout: import.meta.glob<EngineModule>("../../optics/layout.ts", { eager: true }),
  lensDefaults: import.meta.glob<EngineModule>("../../lens-data/defaults.ts", { eager: true }),
  lensMovement: import.meta.glob<EngineModule>("../../optics/lensMovement.ts", { eager: true }),
  mtf: import.meta.glob<EngineModule>("../../optics/mtf.ts", { eager: true }),
  optics: import.meta.glob<EngineModule>("../../optics/optics.ts", { eager: true }),
  perspective: import.meta.glob<EngineModule>("../../optics/perspective/index.ts", { eager: true }),
  raySampling: import.meta.glob<EngineModule>("../../optics/raySampling.ts", { eager: true }),
  teleconverter: import.meta.glob<EngineModule>("../../optics/teleconverter.ts", { eager: true }),
};

/* The same modules as types. A type query is erased before bundling, so it types a capability at the head and loads
 * nothing at any ref. */
interface EngineModuleTypes {
  bokehAnalysis: typeof import("../../optics/analysis.js");
  legacyBokeh: typeof import("../../optics/analysis.js");
  pupilAnalysis: typeof import("../../optics/analysis.js");
  vignettingAnalysis: typeof import("../../optics/analysis.js");
  distortionAnalysis: typeof import("../../optics/analysis.js");
  comaAnalysis: typeof import("../../optics/analysis.js");
  fieldCurvatureAnalysis: typeof import("../../optics/analysis.js");
  sphericalAnalysis: typeof import("../../optics/analysis.js");
  bestFocusAnalysis: typeof import("../../optics/analysis.js");
  summaryGroupMovement: typeof import("../../optics/analysis.js");
  summaryCardinals: typeof import("../../optics/analysis.js");
  analysisRequest: typeof import("../../optics/analysis.js");
  aperture: typeof import("../../optics/aperture.js");
  apertureStop: typeof import("../../optics/apertureStop.js");
  asphericComparison: typeof import("../../optics/asphericComparison.js");
  buildLens: typeof import("../../optics/buildLens.js");
  cardinalElements: typeof import("../../optics/cardinalElements.js");
  chromaticRayFanScaling: typeof import("../../optics/chromaticRayFanScaling.js");
  compat: typeof import("../../optics/compat.js");
  constants: typeof import("../../optics/constants.js");
  geometry: typeof import("../../optics/geometry.js");
  layout: typeof import("../../optics/layout.js");
  /* Deleted in S2.P1.T2, so it has no type to query at the head; older refs still export the V1 defaults object. */
  lensDefaults: { readonly default: Readonly<Record<string, unknown>> };
  lensMovement: typeof import("../../optics/lensMovement.js");
  mtf: typeof import("../../optics/mtf.js");
  optics: typeof import("../../optics/optics.js");
  perspective: typeof import("../../optics/perspective/index.js");
  raySampling: typeof import("../../optics/raySampling.js");
  teleconverter: typeof import("../../optics/teleconverter.js");
}

type EngineModuleId = keyof typeof ENGINE_MODULES & keyof EngineModuleTypes;
type SeamCandidate = readonly [module: EngineModuleId, exportName: string];

/*
 * Capability -> candidate exports, tried in order. The first candidate is the name at the head and gives the
 * capability its type; any later ones are names an older ref still uses.
 *
 * Full hits exist only behind `compat.ts` today, and the perspective trace context only behind the deep
 * `perspective/index.ts`; no top-level barrel exports either yet. The `legacy*` entries reach the second
 * implementations that still sit beside the prepared-state engine (the RuntimeLens layout, the
 * overlay's departure and best-fit helpers and the LoCA inset's bar scaling), so a payload notices when either copy drifts.
 */
const SEAM_CANDIDATES = {
  computeBokehPreviewPair: [
    ["bokehAnalysis", "computeBokehPreviewPair"],
    ["compat", "computeBokehPreviewPairForState2"],
    ["compat", "computeBokehPreviewPair2"],
  ],
  computeBokehPreview: [
    ["bokehAnalysis", "computeBokehPreview"],
    ["compat", "computeBokehPreview2"],
  ],
  computeBokehFieldFootprint: [
    ["bokehAnalysis", "computeBokehFieldFootprint"],
    ["legacyBokeh", "computeBokehFieldFootprint"],
  ],
  buildBokehDensityGrid: [
    ["bokehAnalysis", "buildBokehDensityGrid"],
    ["compat", "buildBokehDensityGrid2"],
  ],
  describeBokehDefocusSide: [
    ["bokehAnalysis", "describeBokehDefocusSide"],
    ["compat", "describeBokehDefocusSide2"],
  ],
  // Captures dispatch these through the context at both refs; retain the old prepared exports.
  computeBothPupilAberrationProfiles: [
    ["pupilAnalysis", "computeBothPupilAberrationProfiles"],
    ["compat", "computeBothPupilAberrationProfilesForState2"],
    ["compat", "computeBothPupilAberrationProfiles2"],
  ],
  computePupilAberrationProfile: [
    ["pupilAnalysis", "computePupilAberrationProfile"],
    ["compat", "computePupilAberrationProfile2"],
  ],
  computeExitPupilAberrationProfile: [
    ["pupilAnalysis", "computeExitPupilAberrationProfile"],
    ["compat", "computeExitPupilAberrationProfile2"],
  ],
  computeVignettingCurve: [
    ["vignettingAnalysis", "computeVignettingCurve"],
    ["compat", "computeVignettingCurveForState2"],
    ["compat", "computeVignettingCurve2"],
  ],
  computeDistortionCurve: [
    ["distortionAnalysis", "computeDistortionCurve"],
    ["compat", "computeDistortionCurveForState2"],
  ],
  computeDistortionFieldGrid: [
    ["distortionAnalysis", "computeDistortionFieldGrid"],
    ["compat", "computeDistortionFieldGridForState2"],
  ],
  computeComaAnalysis: [
    ["comaAnalysis", "computeComaAnalysis"],
    ["compat", "computeComaAnalysisForState2"],
  ],
  computeFieldCurvature: [
    ["fieldCurvatureAnalysis", "computeFieldCurvature"],
    ["compat", "computeFieldCurvatureForState2"],
  ],
  computeFieldCurvatureBundle: [
    ["fieldCurvatureAnalysis", "computeFieldCurvatureBundle"],
    ["compat", "computeFieldCurvatureBundleForState2"],
  ],
  computeSphericalAberration: [
    ["sphericalAnalysis", "computeSphericalAberration"],
    ["compat", "computeSphericalAberrationForState2"],
  ],
  computeSAProfile: [
    ["sphericalAnalysis", "computeSAProfile"],
    ["compat", "computeSAProfileForState2"],
  ],
  computeSphericalAberrationBlurCharacter: [
    ["sphericalAnalysis", "computeSphericalAberrationBlurCharacter"],
    ["compat", "computeSphericalAberrationBlurCharacterForState2"],
  ],
  computeBestFocusZ: [
    ["bestFocusAnalysis", "computeBestFocusZ"],
    ["compat", "computeBestFocusZForState2"],
  ],
  flatRadiusThreshold: [
    ["geometry", "FLAT_R_THRESHOLD"],
    ["constants", "FLAT_R_THRESHOLD"],
  ],
  channelWavelengthNm: [["constants", "CHROMATIC_CHANNEL_WAVELENGTH_NM"]],
  buildLens: [["buildLens", "default"]],
  attachTeleconverter: [["teleconverter", "attachTeleconverter"]],
  teleconverterCompatibility: [["teleconverter", "teleconverterCompatibility"]],
  prepareState: [["compat", "prepareRuntimeState"]],
  traceRay: [["compat", "traceEngineRay2"]],
  channelIndexResolver: [["compat", "channelIndexResolverForState2"]],
  skewImagePlaneIntercept: [["optics", "skewImagePlaneIntercept"]],
  doLayout: [["optics", "doLayout"]],
  legacyDoLayout: [["layout", "doLayout"]],
  anchorLayoutToCamera: [["optics", "anchorLayoutToCamera"]],
  eflAtFocus: [["optics", "eflAtFocus"]],
  fopenAtZoom: [["optics", "fopenAtZoom"]],
  wideOpenStopAtZoom: [["apertureStop", "wideOpenStopAtZoom"]],
  fNumberAtStopdown: [["aperture", "fNumberAtStopdown"]],
  computeFieldGeometryAtState: [["optics", "computeFieldGeometryAtState"]],
  computeAnalysisFieldGeometryAtState: [["optics", "computeAnalysisFieldGeometryAtState"]],
  entrancePupilAtState: [["optics", "entrancePupilAtState"]],
  solveChiefRay: [["optics", "solveChiefRay"]],
  offsetVectorFieldRay: [["optics", "offsetVectorFieldRay"]],
  clampLensMovement: [["lensMovement", "clampLensMovement"]],
  createPerspectiveTraceContext: [["perspective", "createPerspectiveTraceContext"]],
  createAnalysisContext: [["compat", "createAnalysisComputationContext"]],
  analysisJobsForState: [["compat", "analysisJobsForState2"]],
  computeGroupMovementProfileForState: [
    ["summaryGroupMovement", "computeGroupMovementProfile"],
    ["compat", "computeGroupMovementProfileForState2"],
  ],
  computeCardinalElementsAtState: [
    ["summaryCardinals", "computeCardinalElements"],
    ["cardinalElements", "computeCardinalElementsAtState"],
  ],
  computeBestFitSphereR: [["compat", "computeBestFitSphereR2"]],
  computeDepartureProfile: [["compat", "computeDepartureProfile2"]],
  legacyComputeBestFitSphereR: [["asphericComparison", "computeBestFitSphereR"]],
  legacyComputeDepartureProfile: [["asphericComparison", "computeDepartureProfile"]],
  /* Readouts the viewer computes beside the analysis context: the working f-number, the chromatic tab's field-focus
   * summary, the diagram's LoCA readout with its inset bars, and the aspheric overlay's departure at a click. */
  effectiveFNumber: [["optics", "effectiveFNumber"]],
  summarizeChromaticFieldFocus: [
    ["fieldCurvatureAnalysis", "summarizeChromaticFieldFocus"],
    ["compat", "summarizeChromaticFieldFocus2"],
  ],
  computeLongitudinalChromaticFocus: [["optics", "computeLongitudinalChromaticFocus"]],
  obstructionAwareRayFractionsForDensity: [["raySampling", "obstructionAwareRayFractionsForDensity"]],
  computeLocaBarOffsets: [["compat", "computeLocaBarOffsets2"]],
  legacyComputeLocaBarOffsets: [["chromaticRayFanScaling", "computeLocaBarOffsets"]],
  computeAsphericDeparture: [["compat", "computeAsphericDeparture2"]],
  legacyComputeAsphericDeparture: [["asphericComparison", "computeAsphericDeparture"]],
  computeMtf: [["mtf", "computeMtf"]],
} as const satisfies Readonly<Record<string, readonly SeamCandidate[]>>;

type ExportOf<Candidate> = Candidate extends readonly [infer Module extends keyof EngineModuleTypes, infer Name]
  ? Name extends keyof EngineModuleTypes[Module]
    ? EngineModuleTypes[Module][Name]
    : never
  : never;

/** Every engine capability the capture calls, typed by the export its first candidate names. */
type ResolvedEngineSeam = {
  readonly [Capability in keyof typeof SEAM_CANDIDATES]: ExportOf<(typeof SEAM_CANDIDATES)[Capability][0]>;
};

/** The capture vocabulary stays stable while resolution bridges request and historical signatures. */
export type EngineSeam = Omit<
  ResolvedEngineSeam,
  | "computeGroupMovementProfileForState"
  | "computeCardinalElementsAtState"
  | "computeComaAnalysis"
  | "computeFieldCurvature"
  | "computeFieldCurvatureBundle"
> & {
  computeComaAnalysis: (
    state: ReturnType<ResolvedEngineSeam["prepareState"]>,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: NonNullable<
      Parameters<EngineModuleTypes["analysisRequest"]["createAnalysisRequest"]>[0]["fieldGeometry"]
    >,
    sampling?: Parameters<EngineModuleTypes["analysisRequest"]["createAnalysisRequest"]>[0]["sampling"],
  ) => ReturnType<ResolvedEngineSeam["computeComaAnalysis"]>;
  computeFieldCurvature: (
    state: ReturnType<ResolvedEngineSeam["prepareState"]>,
    currentEPSD: number,
    currentPhysStopSD: number,
    chromatic?: boolean,
    fieldGeometry?: NonNullable<
      Parameters<EngineModuleTypes["analysisRequest"]["createAnalysisRequest"]>[0]["fieldGeometry"]
    >,
  ) => ReturnType<ResolvedEngineSeam["computeFieldCurvature"]>;
  computeFieldCurvatureBundle: (
    state: ReturnType<ResolvedEngineSeam["prepareState"]>,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: NonNullable<
      Parameters<EngineModuleTypes["analysisRequest"]["createAnalysisRequest"]>[0]["fieldGeometry"]
    >,
  ) => ReturnType<ResolvedEngineSeam["computeFieldCurvatureBundle"]>;
  computeGroupMovementProfileForState: (
    state: ReturnType<ResolvedEngineSeam["prepareState"]>,
    mode: Parameters<ResolvedEngineSeam["computeGroupMovementProfileForState"]>[1],
  ) => ReturnType<ResolvedEngineSeam["computeGroupMovementProfileForState"]>;
  computeCardinalElementsAtState: (
    lens: ReturnType<ResolvedEngineSeam["buildLens"]>,
    focusT: number,
    zoomT: number,
    zPos: number[],
    imagePlaneZ: number,
    aberrationT?: number,
  ) => ReturnType<ResolvedEngineSeam["computeCardinalElementsAtState"]>;
};

/* Engine value types the capture handles, taken from the seam so no other file names an engine module. */
export type RuntimeLens = ReturnType<EngineSeam["buildLens"]>;
export type LensData = Parameters<EngineSeam["buildLens"]>[0];
export type TeleconverterData = Parameters<EngineSeam["attachTeleconverter"]>[1];
export type PreparedState = ReturnType<EngineSeam["prepareState"]>;
export type EngineRay = Parameters<EngineSeam["traceRay"]>[1];
export type EngineTraceOptions = NonNullable<Parameters<EngineSeam["traceRay"]>[2]> & { capture?: "diagnostics" };
export type EngineTrace = ReturnType<EngineSeam["traceRay"]> & {
  hits: NonNullable<ReturnType<EngineSeam["traceRay"]>["hits"]>;
  diagnostics: NonNullable<ReturnType<EngineSeam["traceRay"]>["diagnostics"]>;
};

/**
 * Resolve each capability to the first candidate export that exists.
 *
 * @param modules - loaded modules by id; an id whose file does not exist at this ref is absent or `undefined`
 * @param candidates - ordered `[module id, export name]` pairs per capability
 * @returns the resolved exports, and the `module.export` each one came from
 * @throws one error that names every capability with no candidate at this ref
 */
export function resolveCapabilities<Capability extends string>(
  modules: Readonly<Record<string, EngineModule | undefined>>,
  candidates: Readonly<Record<Capability, readonly (readonly [module: string, exportName: string])[]>>,
): { exports: Record<Capability, unknown>; sources: Record<Capability, string> } {
  const exports = {} as Record<Capability, unknown>;
  const sources = {} as Record<Capability, string>;
  const unresolved: string[] = [];
  for (const capability of Object.keys(candidates) as Capability[]) {
    const found = candidates[capability].find(([module, name]) => modules[module]?.[name] !== undefined);
    if (found) {
      exports[capability] = modules[found[0]]?.[found[1]];
      sources[capability] = `${found[0]}.${found[1]}`;
    } else {
      const tried = candidates[capability].map(([module, name]) => `${module}.${name}`).join(", ");
      unresolved.push(`${capability} (tried ${tried})`);
    }
  }
  if (unresolved.length > 0) {
    throw new Error(
      `engineDiff seam: ${unresolved.length} capability(ies) have no export at this ref: ${unresolved.join("; ")}. ` +
        "Add the export's current name to SEAM_CANDIDATES in seamAdapter.ts.",
    );
  }
  return { exports, sources };
}

let resolved: { seam: EngineSeam; sources: Record<keyof EngineSeam, string> } | undefined;

function loadedModules(): Record<string, EngineModule | undefined> {
  /* Each glob holds at most one module, keyed by its path. */
  return Object.fromEntries(Object.entries(ENGINE_MODULES).map(([id, matches]) => [id, Object.values(matches)[0]]));
}

function resolveOnce(): { seam: EngineSeam; sources: Record<keyof EngineSeam, string> } {
  if (!resolved) {
    const modules = loadedModules();
    const { exports, sources } = resolveCapabilities(modules, SEAM_CANDIDATES);
    // Only the harness bridges old signatures: payload jobs and their order stay unchanged.
    const makeRequest = (state: PreparedState) => {
      const lens = state.lens.constants;
      const createRequest = modules.analysisRequest!
        .createAnalysisRequest as EngineModuleTypes["analysisRequest"]["createAnalysisRequest"];
      return createRequest({
        preparedState: state,
        dynamicEFL: lens.EFL,
        currentEPSD: lens.EP.epSD,
        currentPhysStopSD: lens.stopPhysSD,
      });
    };
    const fieldRequest = (
      state: PreparedState,
      currentEPSD: number,
      currentPhysStopSD: number,
      fieldGeometry: Parameters<EngineSeam["computeFieldCurvature"]>[4],
    ) => {
      const createRequest = modules.analysisRequest!
        .createAnalysisRequest as EngineModuleTypes["analysisRequest"]["createAnalysisRequest"];
      return createRequest({
        preparedState: state,
        dynamicEFL: state.lens.constants.EFL,
        currentEPSD,
        currentPhysStopSD,
        fieldGeometry,
      });
    };
    if (sources.computeComaAnalysis.startsWith("comaAnalysis.")) {
      const compute = exports.computeComaAnalysis as ResolvedEngineSeam["computeComaAnalysis"];
      exports.computeComaAnalysis = ((state, currentEPSD, currentPhysStopSD, fieldGeometry, sampling) => {
        const createRequest = modules.analysisRequest!
          .createAnalysisRequest as EngineModuleTypes["analysisRequest"]["createAnalysisRequest"];
        return compute(
          createRequest({
            preparedState: state,
            dynamicEFL: state.lens.constants.EFL,
            currentEPSD,
            currentPhysStopSD,
            fieldGeometry,
            sampling,
          }),
        );
      }) satisfies EngineSeam["computeComaAnalysis"];
    }
    if (sources.computeFieldCurvature.startsWith("fieldCurvatureAnalysis.")) {
      const compute = exports.computeFieldCurvature as ResolvedEngineSeam["computeFieldCurvature"];
      exports.computeFieldCurvature = ((state, currentEPSD, currentPhysStopSD, chromatic = false, fieldGeometry) =>
        compute(
          fieldRequest(state, currentEPSD, currentPhysStopSD, fieldGeometry),
          chromatic,
        )) satisfies EngineSeam["computeFieldCurvature"];
    }
    if (sources.computeFieldCurvatureBundle.startsWith("fieldCurvatureAnalysis.")) {
      const compute = exports.computeFieldCurvatureBundle as ResolvedEngineSeam["computeFieldCurvatureBundle"];
      exports.computeFieldCurvatureBundle = ((state, currentEPSD, currentPhysStopSD, fieldGeometry) =>
        compute(
          fieldRequest(state, currentEPSD, currentPhysStopSD, fieldGeometry),
        )) satisfies EngineSeam["computeFieldCurvatureBundle"];
    }
    if (sources.computeGroupMovementProfileForState.startsWith("summaryGroupMovement.")) {
      const compute =
        exports.computeGroupMovementProfileForState as ResolvedEngineSeam["computeGroupMovementProfileForState"];
      exports.computeGroupMovementProfileForState = ((state, mode) =>
        compute(makeRequest(state), mode)) satisfies EngineSeam["computeGroupMovementProfileForState"];
    }
    if (sources.computeCardinalElementsAtState.startsWith("summaryCardinals.")) {
      const compute = exports.computeCardinalElementsAtState as ResolvedEngineSeam["computeCardinalElementsAtState"];
      const prepare = exports.prepareState as EngineSeam["prepareState"];
      exports.computeCardinalElementsAtState = ((lens, focusT, zoomT, zPos, imagePlaneZ, aberrationT = 0) =>
        compute(makeRequest(prepare(lens, focusT, zoomT, aberrationT)), {
          zPos,
          imagePlaneZ,
        })) satisfies EngineSeam["computeCardinalElementsAtState"];
    }
    resolved = { seam: exports as EngineSeam, sources };
  }
  return resolved;
}

/**
 * The engine seam of the ref this bundle was built at.
 *
 * Resolution is deferred to the first call, so a bundle whose engine lacks a capability still loads and reports all
 * that is missing in one error.
 *
 * @returns the resolved engine exports
 * @throws when any capability has no candidate export at this ref
 */
export function resolveSeam(): EngineSeam {
  return resolveOnce().seam;
}

/*
 * Capabilities a ref may lack. Each resolves to `undefined` at a ref without any candidate instead of failing the
 * bundle, and the same candidate order rules apply.
 * - Canonical ingest is asked of the head's bundle alone: a driver fingerprints both catalogs with the head. From
 *   S2.P2.T1 it reads a file of either version by its `schema`; a ref before that reads V1 alone.
 * - The catalog merge is asked of every bundle, each for its own: a ref before S2.P1.T2 spreads its V1 defaults
 *   object, and a later one has no such object and reads lens data through canonical ingest and its V1 view. A
 *   converter file is read the same way where the ref has the converter's view, and as authored where it has not.
 */
const OPTIONAL_SEAM_CANDIDATES = {
  ingestLens: [
    ["buildLens", "ingestLens"],
    ["buildLens", "ingestLensV1"],
  ],
  ingestTeleconverter: [
    ["buildLens", "ingestTeleconverter"],
    ["buildLens", "ingestTeleconverterV1"],
  ],
  lensView: [["buildLens", "toLensData"]],
  teleconverterView: [["buildLens", "toTeleconverterData"]],
  lensDefaults: [["lensDefaults", "default"]],
} as const satisfies Readonly<Record<string, readonly SeamCandidate[]>>;

/** Capabilities a ref may lack, typed by the export their first candidate names. */
export type OptionalEngineSeam = {
  readonly [Capability in keyof typeof OPTIONAL_SEAM_CANDIDATES]?: ExportOf<
    (typeof OPTIONAL_SEAM_CANDIDATES)[Capability][0]
  >;
};

/**
 * Resolve each optional capability to the first candidate export that exists, or leave it out.
 *
 * @param modules - loaded modules by id; an id whose file does not exist at this ref is absent or `undefined`
 * @param candidates - ordered `[module id, export name]` pairs per capability
 * @returns the exports that resolved, and per capability its `module.export` or `"absent"`
 */
export function resolveOptionalCapabilities<Capability extends string>(
  modules: Readonly<Record<string, EngineModule | undefined>>,
  candidates: Readonly<Record<Capability, readonly (readonly [module: string, exportName: string])[]>>,
): { exports: Partial<Record<Capability, unknown>>; sources: Record<Capability, string> } {
  const exports: Partial<Record<Capability, unknown>> = {};
  const sources = {} as Record<Capability, string>;
  for (const capability of Object.keys(candidates) as Capability[]) {
    const found = candidates[capability].find(([module, name]) => modules[module]?.[name] !== undefined);
    sources[capability] = found ? `${found[0]}.${found[1]}` : "absent";
    if (found) exports[capability] = modules[found[0]]?.[found[1]];
  }
  return { exports, sources };
}

let optionalResolved: { seam: OptionalEngineSeam; sources: Record<keyof OptionalEngineSeam, string> } | undefined;

function resolveOptionalOnce(): { seam: OptionalEngineSeam; sources: Record<keyof OptionalEngineSeam, string> } {
  if (!optionalResolved) {
    const { exports, sources } = resolveOptionalCapabilities(loadedModules(), OPTIONAL_SEAM_CANDIDATES);
    optionalResolved = { seam: exports as OptionalEngineSeam, sources };
  }
  return optionalResolved;
}

/**
 * The optional capabilities of this ref's engine; a capability the ref lacks is absent.
 *
 * @returns the exports that resolved
 */
export function resolveOptionalSeam(): OptionalEngineSeam {
  return resolveOptionalOnce().seam;
}

/**
 * Report which export each capability resolved to, for a run log and for telling two refs apart. An optional
 * capability the ref lacks reads `"absent"`.
 *
 * @returns capability name -> `module.export`
 */
export function describeSeam(): Record<keyof EngineSeam | keyof OptionalEngineSeam, string> {
  return { ...resolveOnce().sources, ...resolveOptionalOnce().sources };
}

/* The bundle's own catalog, read the way the app's catalog modules read it. Only the catalog export uses these;
 * captures evaluate the prescriptions they are handed. */
const LENS_FILES = import.meta.glob<unknown>("../../lens-data/**/*.data.ts", { eager: true, import: "default" });
const TELECONVERTER_FILES = import.meta.glob<unknown>("../../lens-data/**/*.teleconverter.ts", {
  eager: true,
  import: "default",
});
const LENS_DATA_ROOT = "../../lens-data/";

function byDataFile(files: Readonly<Record<string, unknown>>): Record<string, unknown> {
  return Object.fromEntries(Object.entries(files).map(([path, data]) => [path.slice(LENS_DATA_ROOT.length), data]));
}

/**
 * Authored default exports of every lens and teleconverter file at this ref, before any defaults.
 *
 * @returns prescriptions keyed by file path relative to `src/lens-data/`
 */
export function ownCatalogFiles(): { lenses: Record<string, unknown>; teleconverters: Record<string, unknown> } {
  return { lenses: byDataFile(LENS_FILES), teleconverters: byDataFile(TELECONVERTER_FILES) };
}
