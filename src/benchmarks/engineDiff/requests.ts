/**
 * Request lists for the engine differential harness.
 *
 * A tier is a deterministic list of lens × state × request-family triples, built from facts about the prescriptions
 * alone so both engines under comparison receive the same list, and so does every shard a tier is split into. This
 * module holds the constants that define what each family asks of the engine (pupil fractions, field fractions, job
 * names) and knows nothing about the engine itself; `captureEntry.ts` carries the requests out.
 */

/* ── Vocabulary ── */

/** One payload family. A request names one, and a capture answers it with one record. */
export type RequestFamily =
  | "composition"
  | "build"
  | "layout"
  | "traces"
  | "fieldGeometry"
  | "chiefSolves"
  | "analysis"
  | "mtf";

/** Viewer controls of one lens state: normalized sliders, and lens movement in physical units. */
export interface CaptureState {
  /** 0 at the first zoom station, 1 at the last; ignored by primes. */
  zoomT: number;
  /** 0 at infinity, 1 at close focus. */
  focusT: number;
  /** Aberration-control ring position; 0 is the corrected setting. */
  aberrationT: number;
  /** 0 wide open, 1 at the smallest marked aperture. */
  stopdownT: number;
  shiftMm: number;
  tiltDeg: number;
}

/** A catalog lens, or a host lens with a detachable teleconverter mounted. */
export interface LensRef {
  key: string;
  teleconverter?: string;
}

/** One unit of capture work. `state` is null for the families that describe the lens rather than a state. */
export interface CaptureRequest {
  lens: LensRef;
  state: CaptureState | null;
  family: RequestFamily;
  /** Which of its family's requests this is, where a family has more than one: an id from `MTF_VARIANTS`. */
  variant?: string;
}

/**
 * What a tier reads of one catalog lens: its authored stations, and the features the stage tier picks its analysis
 * lenses by. Every member is a fact of the prescription, so any engine handed the same catalog builds the same list.
 */
export interface CatalogLens {
  key: string;
  /** Authored zoom station count (1 for a prime). */
  zoomStations: number;
  /** Authored focus keyframes as focus-slider positions, infinity first: the slider's two ends unless it names more. */
  focusPositions: readonly number[];
  /**
   * The aberration-control ring, or null without one. A centered ring runs from -1 to 1 about its corrected
   * setting; a two-position ring from 0, corrected, to 1.
   */
  aberrationControl: "centered" | "two-position" | null;
  /** The declared projection kind, or null for a lens that declares none. */
  projection: string | null;
  /** The lens declares an optical path or a surface that does not refract: a mirror or folded system. */
  folded: boolean;
  perspectiveControl: boolean;
  /** Some surface is diffractive. */
  diffractive: boolean;
  /** Some element absorbs in its bulk. */
  absorbing: boolean;
  /** The maker of a lens that carries rear plates, or null for a lens with none. */
  rearPlateMaker: string | null;
}

/** What a tier needs to know about the prescriptions it is built for. */
export interface RequestCatalog {
  /** Every lens to cover. */
  lenses: readonly CatalogLens[];
  /** Every host and converter the fit predicate allows; a tier chooses which of them it covers. */
  pairs: readonly { host: string; teleconverter: string }[];
  /**
   * Lenses whose prescription is new or differs from the one under comparison. Tier P asks more of these than of
   * the rest; a list built for one catalog alone leaves this out.
   */
  changedLensKeys?: readonly string[];
  /** Teleconverters whose prescription is new or differs. Tier P asks every pair one of them forms. */
  changedTeleconverterKeys?: readonly string[];
}

/**
 * Identity of a lens reference in records and reports.
 *
 * The harness names a pair itself, as `host+converter`, rather than use the key the engine gives the composed
 * prescription: a record must pair up across two engines even if one of them changes that key.
 *
 * @param lens - a catalog lens or a host + converter pair
 * @returns the lens key, or `host+converter`
 */
export function lensId(lens: LensRef): string {
  return lens.teleconverter ? `${lens.key}+${lens.teleconverter}` : lens.key;
}

/**
 * Identity of a state, derived from its values so the same controls get the same id in every tier.
 *
 * @param state - a lens state, or null for a lens-level request
 * @returns a stable text key
 */
export function stateId(state: CaptureState | null): string {
  if (!state) return "lens";
  const { zoomT, focusT, aberrationT, stopdownT, shiftMm, tiltDeg } = state;
  return `zoom=${zoomT} focus=${focusT} aberration=${aberrationT} stopdown=${stopdownT} shift=${shiftMm} tilt=${tiltDeg}`;
}

/** Infinity focus, first zoom station, wide open, corrected, no movement: the state a lens page opens in. */
export const DEFAULT_STATE: CaptureState = Object.freeze({
  zoomT: 0,
  focusT: 0,
  aberrationT: 0,
  stopdownT: 0,
  shiftMm: 0,
  tiltDeg: 0,
});

/* ── What each family asks ── */

/** Channels at which chromatic rays are traced and surface indices are evaluated. */
export const CHROMATIC_CHANNELS = ["R", "G", "B", "V"] as const;

/** Chief rays are solved at these fractions of the analysis half-field (the one the viewer passes to analyses). */
export const CHIEF_FIELD_FRACTIONS = [0, 0.5, 1] as const;

/*
 * Ray fans, as fractions of the wide-open entrance-pupil semi-diameter. They are fixed here rather than read from a
 * lens's display fractions, so a change to how a lens is drawn does not change what is compared. No fraction is 1:
 * a ray at the pupil rim sits on the stop edge, where a last-bit difference flips it between passing and clipped.
 * The on-axis fan is lopsided because a rotationally symmetric lens gives mirror-image rays at ±f.
 */
export const ON_AXIS_PUPIL_FRACTIONS = [0, 0.3, 0.6, 0.9, -0.75] as const;
/** Meridional fan about the chief ray at the edge of the field, where rims vignette and clipped hits appear. */
export const OFF_AXIS_FIELD_FRACTION = 1;
export const OFF_AXIS_PUPIL_FRACTIONS = [-0.8, -0.4, 0, 0.4, 0.8] as const;
/** Sagittal fan about the chief ray at mid-field: true skew rays that mostly pass. */
export const SKEW_FIELD_FRACTION = 0.5;
export const SKEW_PUPIL_FRACTIONS = [0.3, 0.6, 0.9, -0.75] as const;
/** On-axis fan traced once per chromatic channel. */
export const CHROMATIC_PUPIL_FRACTIONS = [0.5, 0.85] as const;

/*
 * The height in mm, and the slope, of the two near-axis rays the engine builds its pupil constants from: a marginal
 * ray at this height along the axis, and a chief ray through the first vertex at this slope. The engine divides what
 * each returns by the same number, and takes another value, with no flag anywhere, when one of them fails. It is
 * copied from the four places the engine writes it, which export no constant: `realEpDelta` in both branches of
 * `buildLens` (`src/optics/runtimeLens.ts`), and `delta` in `computeFieldGeometryAtState2`
 * (`src/optics/field/chiefRay.ts`) and in `computeStatePupilBaselines` (`src/optics/pupilAberration.ts`).
 */
export const NEAR_AXIS_PROBE_DELTA = 1e-4;

/*
 * Readouts the viewer computes beside the analysis context, asked the way its components ask. The numbers below are
 * the components' own, copied because a capture bundle holds no component.
 */
/** Marginal fractions the diagram's LoCA readout tries, outermost first, ahead of the lens's own ray fractions. */
export const LOCA_READOUT_FRACTIONS = [0.97, 0.95, 0.9, 0.85, 0.8] as const;
/** Width in px that the LoCA inset gives its bars at its default size. */
export const LOCA_INSET_BAR_WIDTH_PX = 86;
/** Heights at which the aspheric overlay's click readout is asked, as fractions of the surface's semi-diameter. */
export const ASPHERIC_READOUT_FRACTIONS = [0.25, 0.5, 0.75, 1] as const;

/** The analysis-context accessors, centered jobs first, then the six perspective jobs, in capture order. */
export const ANALYSIS_CONTEXT_JOBS = [
  "computeOpticalSummary",
  "computeDistortionCurve",
  "computeDistortionFieldGrid",
  "computeVignettingCurve",
  "computeBothPupilAberrationProfiles",
  "computeBokehPreviewPair",
  "computeBestFocusZ",
  "computeSphericalAberration",
  "computeSAProfile",
  "computeSphericalAberrationBlurCharacter",
  "computeFieldCurvatureBundle",
  "computeChromaticAnalysis",
  "computeChromaticRayFanAnalysis",
  "computeIntrinsicLongitudinalChromaticFocus",
  "computeComaAnalysis",
  "computePerspectiveFocusAnalysis",
  "computePerspectiveFieldAberrations",
  "computePerspectiveChromaticAnalysis",
  "computePerspectiveDistortionAnalysis",
  "computePerspectiveVignettingAnalysis",
  "computePerspectivePupilAnalysis",
] as const;

export const GROUP_MOVEMENT_MODES = ["focus", "zoom", "combined"] as const;

/** Every MTF method and spectrum the engine has. */
export const MTF_METHODS = ["geometric", "diffraction"] as const;
export const MTF_SPECTRA = ["reference", "cdf", "photopic"] as const;

/** What an MTF request fixes. The capture adds the state's aperture and movement. */
export interface MtfRequest {
  method: (typeof MTF_METHODS)[number];
  spectrum: (typeof MTF_SPECTRA)[number];
  focus: "design";
  /** Largest pupil grid side the engine may refine to. */
  maxGridSize: 32 | 64 | 128 | 256;
  fieldFractions: readonly number[];
}

/**
 * Geometric MTF at the smallest pupil grid, with the MTF benchmark's defaults for the rest: the reference
 * wavelength, the design image plane, and three fields. It is the `mtf` family's request when none is named.
 */
export const MTF_REQUEST: MtfRequest = Object.freeze({
  method: "geometric",
  spectrum: "reference",
  focus: "design",
  maxGridSize: 32,
  fieldFractions: [0, 0.5, 1],
});

/** The grid cap the viewer's MTF tab opens with (`DEFAULT_MTF_PREFERENCES`). */
export const MTF_VARIANT_GRID = 128;

/**
 * The named MTF requests: each method at each spectrum, refined up to the viewer's grid cap. A request names one
 * by `variant`, and its record carries the same id.
 */
export const MTF_VARIANTS: readonly { id: string; request: MtfRequest }[] = MTF_METHODS.flatMap((method) =>
  MTF_SPECTRA.map((spectrum) => ({
    id: `${method}/${spectrum}`,
    request: Object.freeze({ ...MTF_REQUEST, method, spectrum, maxGridSize: MTF_VARIANT_GRID }),
  })),
);

/**
 * The MTF request a capture request stands for.
 *
 * @param variant - an id from `MTF_VARIANTS`, or `undefined` for the family's own request
 * @returns the request
 * @throws when no variant has that id
 */
export function mtfRequestOf(variant: string | undefined): MtfRequest {
  if (variant === undefined) return MTF_REQUEST;
  const named = MTF_VARIANTS.find(({ id }) => id === variant);
  if (!named) throw new Error(`engineDiff: no MTF variant is named "${variant}"`);
  return named.request;
}

/* ── Tier P ── */

const LENS_FAMILIES: readonly RequestFamily[] = ["build"];
const STATE_FAMILIES: readonly RequestFamily[] = ["layout", "traces", "fieldGeometry", "chiefSolves"];
const ANALYSIS_FAMILIES: readonly RequestFamily[] = ["analysis", "mtf"];

/**
 * The rendering benchmark's lens set (`DEFAULT_BENCHMARK_LENS_KEYS`). Copied, not imported: that module pulls in
 * React and the component tree, which the capture bundle must build without.
 */
export const BENCHMARK_LENS_KEYS = [
  "canon-serenar-50f18",
  "apo-lanthar-50f2",
  "ricoh-gr3-28f28",
  "canon-rf-85f12l",
  "sony-fe-24-70mm-f28-gm-ii",
  "sony-fe-70-200mm-f28-gm-ii",
  "canon-rf100f28-macro",
  "nikon-pc-nikkor-19mm-f4e-ed",
  "canon-tse-50f28l-macro",
  "canon-ef-8-15mm-f4l-fisheye-usm",
  "fujifilm-gf-20-35mm-f4-r-wr",
  "leica-apo-vario-elmarit-sl-90-280-f28-4",
  "sigma-apo-macro-180mm-f28-os-hsm",
  "sigma-apo-macro-150mm-f28-os-hsm",
  "reference-maksutov-cassegrain-meniscus",
] as const;

/** One lens that carries an engine feature the benchmark set lacks, and the state that exercises it. */
export interface FeatureRepresentative {
  feature: string;
  lens: LensRef;
  /** Controls that differ from the default state, for a feature the default state leaves idle. */
  featureState?: Partial<CaptureState>;
}

/**
 * Feature representatives for the analysis row. Each is the catalog's clearest carrier of its feature: the
 * equidistant fisheye (the benchmark has only an equisolid zoom), the auto-path and longest explicit-order folded
 * lenses, the lens with the most diffractive surfaces, an absorbing element, rear plates with published rims, the
 * strongest converter on a variable-aperture host, the one lens with a patent-derived tilt pivot, the MTF
 * benchmark's finite-conjugate lens, a fixed-iris zoom with no other special feature, and a centered
 * aberration-control ring.
 */
export const FEATURE_REPRESENTATIVES: readonly FeatureRepresentative[] = [
  { feature: "fisheye", lens: { key: "nikon-fisheye-nikkor-6mm-f28" } },
  { feature: "folded-auto-path", lens: { key: "carl-zeiss-mirotar-500f45" } },
  { feature: "folded-explicit-order", lens: { key: "minolta-af-reflex-500mm-f8" } },
  { feature: "diffractive", lens: { key: "nikon-af-s-nikkor-300mm-f4e-pf-ed-vr" } },
  { feature: "bulk-absorption", lens: { key: "minolta-stf-135f28-t45" } },
  { feature: "rear-plates", lens: { key: "zeiss-zx1-distagon-35mm-f2" } },
  {
    feature: "converter-pair",
    lens: { key: "fujifilm-fujinon-xf-100-400mm-f45-56-r-lm-ois-wr", teleconverter: "fujifilm-xf2x-tc-wr" },
  },
  /* The rendering benchmark's moved pose, inside this lens's ±15 mm and ±8.5° ranges. */
  {
    feature: "perspective-control",
    lens: { key: "fujifilm-gf-30mm-f56-ts" },
    featureState: { shiftMm: 6, tiltDeg: 4 },
  },
  /* The lens's one finite conjugate is authored at close focus. */
  { feature: "finite-conjugate", lens: { key: "fujifilm-gf80-f17" }, featureState: { focusT: 1 } },
  { feature: "fixed-iris-zoom", lens: { key: "canon-ef-70-200f28l-is-usm" } },
  { feature: "aberration-control", lens: { key: "nikon-af-dc-nikkor-135mm-f2" }, featureState: { aberrationT: 1 } },
];

function requestsFor(
  lens: LensRef,
  states: readonly (CaptureState | null)[],
  families: readonly RequestFamily[],
): CaptureRequest[] {
  return states.flatMap((state) => families.map((family) => ({ lens, state, family })));
}

/**
 * Tier P, first row: every catalog lens, hidden ones included, at the first and last zoom station, focused at
 * infinity and wide open. Converter pairs are not in it; the second row carries one.
 */
function tierPStateRow(catalog: RequestCatalog): CaptureRequest[] {
  return catalog.lenses.flatMap(({ key, zoomStations }) => {
    const lens: LensRef = { key };
    const states = zoomStations >= 2 ? [DEFAULT_STATE, { ...DEFAULT_STATE, zoomT: 1 }] : [DEFAULT_STATE];
    return [...requestsFor(lens, [null], LENS_FAMILIES), ...requestsFor(lens, states, STATE_FAMILIES)];
  });
}

/**
 * Tier P, second row: every analysis job and a small geometric MTF on the benchmark lenses and the feature
 * representatives, each at the default state plus its feature state, and on every changed lens at the default
 * state, so a lens whose data moved goes through every request of the tier. A pair is changed when its host or its
 * converter is, so every permitted pair of a changed host or converter is in the row as well.
 *
 * The first row covers a representative that is a catalog lens. A converter pair is not a catalog lens, so this
 * row also asks it for its composition and for the first row's families at the default state.
 */
function tierPAnalysisRow(catalog: RequestCatalog): CaptureRequest[] {
  const known = new Set([
    ...catalog.lenses.map((lens) => lens.key),
    ...catalog.pairs.map((pair) => lensId({ key: pair.host, teleconverter: pair.teleconverter })),
  ]);
  const representatives: FeatureRepresentative[] = [
    ...BENCHMARK_LENS_KEYS.map((key) => ({ feature: "benchmark", lens: { key } })),
    ...FEATURE_REPRESENTATIVES,
  ];
  const named = new Set(representatives.map(({ lens }) => lensId(lens)));
  const changedLenses = new Set(catalog.changedLensKeys);
  const changedConverters = new Set(catalog.changedTeleconverterKeys);
  for (const key of changedLenses) {
    if (!named.has(key)) representatives.push({ feature: "changed", lens: { key } });
  }
  for (const { host, teleconverter } of catalog.pairs) {
    const lens: LensRef = { key: host, teleconverter };
    if ((changedLenses.has(host) || changedConverters.has(teleconverter)) && !named.has(lensId(lens))) {
      representatives.push({ feature: "changed", lens });
    }
  }
  /* A representative that has left the catalog would shrink this row without anyone noticing. */
  const missing = representatives.map(({ lens }) => lensId(lens)).filter((id) => !known.has(id));
  if (missing.length > 0) {
    throw new Error(`engineDiff Tier P: representative lens(es) not in the catalog: ${missing.join(", ")}`);
  }
  return representatives.flatMap(({ lens, featureState }) => [
    ...(lens.teleconverter
      ? [
          ...requestsFor(lens, [null], ["composition", ...LENS_FAMILIES]),
          ...requestsFor(lens, [DEFAULT_STATE], STATE_FAMILIES),
        ]
      : []),
    ...requestsFor(
      lens,
      featureState ? [DEFAULT_STATE, { ...DEFAULT_STATE, ...featureState }] : [DEFAULT_STATE],
      ANALYSIS_FAMILIES,
    ),
  ]);
}

/* ── Tiers S and F ── */

/**
 * The one stopped-down aperture of the stage and full tiers, as an aperture-slider position: the `stopdownT` of the
 * rendering benchmark's stopped scenario (`stopped-close` in `BENCHMARK_SCENARIOS`).
 */
export const STOPPED_DOWN_T = 0.5;

/**
 * The pose a perspective-control lens is analysed in besides the centered one: the rendering benchmark's moved
 * pose, as in Tier P. The capture clamps it to each lens's own ranges, as the viewer does, so a shift-only lens is
 * shifted and not tilted.
 */
export const MOVED_POSE = Object.freeze({ shiftMm: 6, tiltDeg: 4 });

/**
 * The MTF benchmark's cases by lens key: `MTF_BENCHMARK_CASES`, then `MTF_FINITE_BENCHMARK_CASE`, which
 * `src/benchmarks/mtfCases.ts` names by file. Copied, not imported: this folder imports nothing outside itself.
 */
export const MTF_BENCHMARK_LENS_KEYS = [
  "canon-serenar-50f18",
  "sony-fe-24-70mm-f28-gm-ii",
  "sony-fe-1224f28-gm",
  "sony-fe-28-70mm-f2-gm",
  "fujifilm-gf80-f17",
] as const;

/** How many lenses the stage tier draws from the part of the catalog no stratum names, and the seed of the draw. */
export const SEEDED_DRAW_COUNT = 10;
const SEEDED_DRAW_SEED = 0x51a6e5;

function codeUnitOrder(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * A lens key's score in the seeded draw: FNV-1a over the key's code units, started from the seed, then the
 * murmur3 finalizer, so keys that share a maker's prefix do not score alike.
 */
function seededScore(key: string, seed: number): number {
  let hash = (0x811c9dc5 ^ seed) >>> 0;
  for (let index = 0; index < key.length; index++) {
    hash = Math.imul(hash ^ key.charCodeAt(index), 0x01000193);
  }
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0xc2b2ae35);
  return (hash ^ (hash >>> 16)) >>> 0;
}

/**
 * Draw keys by a fixed seed.
 *
 * Each key is scored by itself and the lowest scores are taken, so the draw does not depend on the order or the
 * number of the keys offered: a lens added to the catalog changes it only by scoring among the lowest itself.
 *
 * @param keys - the keys to draw from
 * @param count - how many to take
 * @returns the drawn keys, lowest score first
 */
function seededDraw(keys: readonly string[], count: number): string[] {
  return keys
    .map((key) => ({ key, score: seededScore(key, SEEDED_DRAW_SEED) }))
    .sort((a, b) => a.score - b.score || codeUnitOrder(a.key, b.key))
    .slice(0, count)
    .map(({ key }) => key);
}

/** A lens of the stage tier's analysis row, and every stratum that names it. */
export interface StratifiedLens {
  lens: LensRef;
  strata: string[];
}

/**
 * The stage tier's analysis lenses: a stratified part of the catalog.
 *
 * In it are one lens per declared projection kind, every folded lens, every perspective-control lens, every
 * diffractive and every absorbing lens, one lens per maker among those with rear plates, every converter pair, every
 * lens Tier P analyses (the benchmark lenses and the feature representatives), and ten more drawn by a fixed seed
 * from the lenses none of those names. "One per" is the first in key order. The choice reads nothing but the
 * catalog it is given, so both engines of a run and every shard of it make the same one.
 *
 * @param catalog - the lenses and converter pairs to choose from
 * @returns the chosen lenses and pairs in the order chosen, each with its strata
 * @throws when a benchmark lens or a feature representative is not in the catalog
 */
export function stageAnalysisLenses(catalog: RequestCatalog): StratifiedLens[] {
  const lenses = [...catalog.lenses].sort((a, b) => codeUnitOrder(a.key, b.key));
  const chosen = new Map<string, StratifiedLens>();
  const choose = (lens: LensRef, stratum: string) => {
    const entry = chosen.get(lensId(lens));
    if (entry) entry.strata.push(stratum);
    else chosen.set(lensId(lens), { lens, strata: [stratum] });
  };
  const chooseFirstPer = (name: string, valueOf: (lens: CatalogLens) => string | null) => {
    const seen = new Set<string>();
    for (const lens of lenses) {
      const value = valueOf(lens);
      if (value === null || seen.has(value)) continue;
      seen.add(value);
      choose({ key: lens.key }, `${name}:${value}`);
    }
  };
  const chooseEvery = (name: string, carries: (lens: CatalogLens) => boolean) => {
    for (const lens of lenses) if (carries(lens)) choose({ key: lens.key }, name);
  };

  chooseFirstPer("projection", (lens) => lens.projection);
  chooseEvery("folded", (lens) => lens.folded);
  chooseEvery("perspective-control", (lens) => lens.perspectiveControl);
  chooseEvery("diffractive", (lens) => lens.diffractive);
  chooseEvery("absorbing", (lens) => lens.absorbing);
  chooseFirstPer("rear-plate-maker", (lens) => lens.rearPlateMaker);
  const pairs = catalog.pairs.map(({ host, teleconverter }): LensRef => ({ key: host, teleconverter }));
  for (const pair of pairs.sort((a, b) => codeUnitOrder(lensId(a), lensId(b)))) choose(pair, "converter-pair");

  /* Tier P's analysis lenses, so the stage tier analyses whatever the pull-request tier does. One that has left the
   * catalog would shrink this row without anyone noticing. */
  const known = new Set([...lenses.map((lens) => lens.key), ...pairs.map(lensId)]);
  const missing = [...BENCHMARK_LENS_KEYS, ...FEATURE_REPRESENTATIVES.map(({ lens }) => lensId(lens))].filter(
    (id) => !known.has(id),
  );
  if (missing.length > 0) {
    throw new Error(
      `engineDiff Tier S: benchmark or representative lens(es) not in the catalog: ${missing.join(", ")}`,
    );
  }
  for (const key of BENCHMARK_LENS_KEYS) choose({ key }, "benchmark");
  for (const { feature, lens } of FEATURE_REPRESENTATIVES) choose(lens, `feature:${feature}`);

  const unnamed = lenses.map((lens) => lens.key).filter((key) => !chosen.has(key));
  for (const key of seededDraw(unnamed, SEEDED_DRAW_COUNT)) choose({ key }, "seeded-draw");
  return [...chosen.values()];
}

/** Every authored zoom × focus station of a lens, wide open. Zoom station `i` of `n` sits at `i / (n - 1)`. */
function authoredStations({ zoomStations, focusPositions }: CatalogLens): CaptureState[] {
  const zoomTs =
    zoomStations >= 2 ? Array.from({ length: zoomStations }, (_, index) => index / (zoomStations - 1)) : [0];
  return zoomTs.flatMap((zoomT) => focusPositions.map((focusT) => ({ ...DEFAULT_STATE, zoomT, focusT })));
}

/**
 * States of the first row of the stage and full tiers: every authored station, wide open and stopped down, with
 * the aberration-control ring at its corrected setting and at each end. A centered ring has two ends beside its
 * center; a two-position ring has no center, and its far end is the only other position.
 */
function stationStates(lens: CatalogLens): CaptureState[] {
  const ringPositions =
    lens.aberrationControl === "centered" ? [0, -1, 1] : lens.aberrationControl === "two-position" ? [0, 1] : [0];
  return authoredStations(lens).flatMap((station) =>
    [0, STOPPED_DOWN_T].flatMap((stopdownT) =>
      ringPositions.map((aberrationT) => ({ ...station, stopdownT, aberrationT })),
    ),
  );
}

/**
 * States a lens is analysed in: every authored station at each given aperture, and for a perspective-control lens
 * each of those again in the moved pose.
 */
function analysisStates(lens: CatalogLens, stopdownTs: readonly number[]): CaptureState[] {
  return authoredStations(lens).flatMap((station) =>
    stopdownTs.flatMap((stopdownT) => {
      const state = { ...station, stopdownT };
      return lens.perspectiveControl ? [state, { ...state, ...MOVED_POSE }] : [state];
    }),
  );
}

/** The catalog's lenses by key. A pair is asked at its host's stations, so a row looks a pair's host up here too. */
function lensesByKey(catalog: RequestCatalog): (key: string) => CatalogLens {
  const lenses = new Map(catalog.lenses.map((lens) => [lens.key, lens]));
  return (key) => {
    const lens = lenses.get(key);
    if (!lens) throw new Error(`engineDiff: a tier names a lens that is not in the catalog: ${key}`);
    return lens;
  };
}

/**
 * Tiers S and F, first row: everything Tier P's first row asks, of every catalog lens at every state of
 * `stationStates`, and of every permitted converter pair at every such state of its host. A pair is not a catalog
 * lens, so it is also asked for its composition.
 */
function stationStateRow(catalog: RequestCatalog): CaptureRequest[] {
  const lensOf = lensesByKey(catalog);
  return [
    ...catalog.lenses.flatMap((lens) => {
      const ref: LensRef = { key: lens.key };
      return [...requestsFor(ref, [null], LENS_FAMILIES), ...requestsFor(ref, stationStates(lens), STATE_FAMILIES)];
    }),
    ...catalog.pairs.flatMap(({ host, teleconverter }) => {
      const ref: LensRef = { key: host, teleconverter };
      return [
        ...requestsFor(ref, [null], ["composition", ...LENS_FAMILIES]),
        ...requestsFor(ref, stationStates(lensOf(host)), STATE_FAMILIES),
      ];
    }),
  ];
}

/**
 * Tier S, second row: every analysis job on the stratified lenses and pairs, at their authored stations wide open,
 * and for a perspective-control lens in the moved pose as well. Tier P's own second row, which the tier holds too,
 * adds the state that puts each representative's feature to work.
 */
function stageAnalysisRow(catalog: RequestCatalog): CaptureRequest[] {
  const lensOf = lensesByKey(catalog);
  return stageAnalysisLenses(catalog).flatMap(({ lens }) =>
    requestsFor(lens, analysisStates(lensOf(lens.key), [0]), ["analysis"]),
  );
}

/**
 * Tiers S and F, MTF row: every named MTF request on the MTF benchmark's lenses, at their authored stations wide
 * open. The benchmark's own states are among those: the first zoom station at infinity, and close focus for its
 * finite case. Tier P's small geometric request is not one of these; it comes with Tier P's second row.
 */
function variantMtfRow(catalog: RequestCatalog): CaptureRequest[] {
  const lensOf = lensesByKey(catalog);
  return MTF_BENCHMARK_LENS_KEYS.flatMap((key) =>
    authoredStations(lensOf(key)).flatMap((state) =>
      MTF_VARIANTS.map(({ id }): CaptureRequest => ({ lens: { key }, state, family: "mtf", variant: id })),
    ),
  );
}

/**
 * Tier F, second row: every analysis job on every catalog lens and every permitted pair, at every authored station
 * wide open and stopped down. It holds every request of Tier S's second row.
 */
function fullAnalysisRow(catalog: RequestCatalog): CaptureRequest[] {
  const lensOf = lensesByKey(catalog);
  const refs: LensRef[] = [
    ...catalog.lenses.map(({ key }) => ({ key })),
    ...catalog.pairs.map(({ host, teleconverter }) => ({ key: host, teleconverter })),
  ];
  return refs.flatMap((lens) => requestsFor(lens, analysisStates(lensOf(lens.key), [0, STOPPED_DOWN_T]), ["analysis"]));
}

/* ── Tiers ── */

/* Each tier is a list of rows. Tiers S and F hold Tier P's second row whole, and their first row holds every request
 * of Tier P's first, so whatever Tier P asks, of a changed lens or pair too, the larger tiers ask as well. Tier F is
 * Tier S with its analysis row widened to the whole catalog. */
const TIER_ROWS = {
  p: [tierPStateRow, tierPAnalysisRow],
  s: [stationStateRow, stageAnalysisRow, variantMtfRow, tierPAnalysisRow],
  f: [stationStateRow, fullAnalysisRow, variantMtfRow, tierPAnalysisRow],
} satisfies Record<string, readonly ((catalog: RequestCatalog) => CaptureRequest[])[]>;

export type TierId = keyof typeof TIER_ROWS;

/**
 * Build a tier's request list.
 *
 * Requests are grouped by lens, lenses in code-unit order of their id, so a driver can capture and write one lens at
 * a time and the order does not depend on how the catalog was enumerated.
 *
 * @param tier - tier id
 * @param catalog - the lenses and converter pairs to cover
 * @returns every request of the tier, with no duplicates
 * @throws when a lens the tier names explicitly is not in the catalog
 */
export function tierRequests(tier: TierId, catalog: RequestCatalog): CaptureRequest[] {
  /* Rows overlap where a tier holds a row of another: the first row to name a request keeps it. */
  const named = new Set<string>();
  const requests = TIER_ROWS[tier]
    .flatMap((row) => row(catalog))
    .filter(({ lens, state, family, variant }) => {
      const identity = `${lensId(lens)}|${stateId(state)}|${family}|${variant ?? ""}`;
      if (named.has(identity)) return false;
      named.add(identity);
      return true;
    });
  /* The sort is stable, so a lens keeps its rows, states and families in the order the rows listed them. */
  return requests.sort((a, b) => codeUnitOrder(lensId(a.lens), lensId(b.lens)));
}

/* ── Shards ── */

/** One part of a tier split across runners: part `index` of `count`, counted from 1. */
export interface Shard {
  index: number;
  count: number;
}

/**
 * The requests of one shard of a request list.
 *
 * A list is split by lens, never inside one: a driver compares lens by lens, and a lens's records must not
 * straddle two runs. The lens ids are put in code-unit order, whatever the order of the list, and dealt out in
 * turn, so the lens at position `k` falls in shard `k mod count`, plus one. Each shard gets its share of every
 * stretch of the alphabet, and with it of the makers whose lenses cost most.
 *
 * @param requests - a request list
 * @param shard - which part, of how many
 * @returns the shard's requests, in the order of the list
 * @throws when the shard is not `1 <= index <= count`, in whole numbers
 */
export function shardRequests(requests: readonly CaptureRequest[], shard: Shard): CaptureRequest[] {
  const { index, count } = shard;
  if (!(Number.isInteger(index) && Number.isInteger(count) && index >= 1 && index <= count)) {
    throw new Error(`engineDiff: shard ${index}/${count} is not i/n with 1 <= i <= n`);
  }
  const ids = [...new Set(requests.map((request) => lensId(request.lens)))].sort(codeUnitOrder);
  const inShard = new Set(ids.filter((_, position) => position % count === index - 1));
  return requests.filter((request) => inShard.has(lensId(request.lens)));
}
