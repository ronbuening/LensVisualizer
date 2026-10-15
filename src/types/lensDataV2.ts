/**
 * Lens data V2 — the authored shape of a `schema: 2` lens or teleconverter file.
 *
 * V2 groups a file by consumer and authors every value the engine reads once (OPTICS_ENGINE_REWRITE_SPEC.md, Lens
 * data V2): a surface names its medium instead of carrying `elemId` and `nd`, a flat surface is `R: "flat"`, aspheres
 * are sparse and sit on their surface, every per-station fact lives on its zoom station, and variable gaps are keyed
 * by surface label with one row of thicknesses per station. A field the schema defaults may be left out; ingest
 * (`src/optics/prescription/ingestV2.ts`) applies the default (`src/optics/prescription/defaults.ts`) and records it
 * in provenance.
 *
 * The record shapes follow the canonical prescription (`src/optics/prescription/canonical.ts`), which is what a V2
 * file ingests to.
 */

import type { ImageFormatId, LensMountId } from "../utils/catalog/lensTaxonomy.js";
import type { AsphericCoefficients } from "./asphericSchema.js";
import type {
  AberrationVarRange,
  AnnotationData,
  DiffractivePhaseSurface,
  FiniteConjugate,
  LensProjectionConfig,
  OpticalConfigurationData,
  OpticalPathData,
  PerspectiveControlConfig,
  RearPlateData,
  RefractiveIndexReferenceLine,
  SourceErratum,
  SurfaceInteraction,
} from "./optics.js";

/* ── Prescription ── */

/** An index-bearing medium that belongs to no drawn element: a cement layer, or water ahead of the lens. */
export interface MediumV2Input {
  /** Referenced from `SurfaceV2Input.medium`; a string, so it cannot collide with an element id. */
  id: string;
  /** What the medium is, for a reader of the file. */
  name?: string;
  nd: number;
}

export interface SurfaceV2Input {
  label: string;
  /** Radius of curvature in mm, or `"flat"`. */
  R: number | "flat";
  /** Axial step to the next listed surface in mm. Left out on a variable gap, whose first value supplies it. */
  d?: number;
  /**
   * Clear semi-diameter in mm. Left out on a stop whose radius the engine derives from the design f-number or takes
   * from a station schedule; required everywhere else.
   */
  sd?: number;
  innerSd?: number;
  /** The medium after this surface: an element id, a `media` id, or left out for air. */
  medium?: number | string;
  /** Sparse aspheric terms; a term left out is zero. */
  asphere?: Partial<AsphericCoefficients>;
  diffractive?: DiffractivePhaseSurface;
  interaction?: SurfaceInteraction;
  stopPlacement?: "inside-element";
}

export interface ElementV2Input {
  id: number;
  name: string;
  label: string;
  type: string;
  nd: number;
  vd?: number;
  /** Spectral line of `nd` and `vd`; `"d"` when left out. */
  indexReference?: RefractiveIndexReferenceLine;
  indexReferenceNote?: string;
  /** Element focal length in mm, shown in the inspector. */
  focalLengthMm?: number;
  glass?: string;
  /** Anomalous partial dispersion claim; `false` when left out. */
  apd?: "patent" | "inferred" | false;
  apdNote?: string;
  role?: string;
  diagramLabel?: string;
  maxSdRatio?: number;
  absorptionCoefficientPerMm?: number;
  cemented?: string;
  dPgF?: number;
  nC?: number;
  nF?: number;
  ng?: number;
  /** Drawn span as `[from, to]` surface labels, where it is not the run of surfaces whose medium is this element. */
  span?: [string, string];
}

/* ── States ── */

export interface ZoomStationV2Input {
  focalLengthMm: number;
  /** Design f-number at this station, on a variable-aperture zoom: on every station or on none. */
  nominalFNumber?: number;
  /** Published physical stop semi-diameter in mm: on every station or on none. */
  stopSemiDiameter?: number;
  /** Object-to-image close distance in metres at this station, overriding `focus.closeFocusM`: every station or none. */
  closeFocusM?: number;
  /** Station label: on every station, or on the first and last alone. */
  label?: string;
  /** Whether the source tabulates this station's infinity row. */
  published?: boolean;
  /** Focus keyframe indices (>= 1) the source tabulates at this station, beyond infinity. */
  publishedFocus?: number[];
}

export interface ZoomV2Input {
  stations: ZoomStationV2Input[];
  /** `"from-nominal-fno"` when left out. */
  apertureModel?: "from-nominal-fno" | "fixed-iris";
  /** Zoom slider step; 0.004 when left out. */
  step?: number;
}

/** A source-certified finite conjugate, addressed by station and keyframe index. */
export interface ConjugateV2Input {
  /** Index into `zoom.stations`; 0 on a prime. */
  zoomStation: number;
  /** Index into `focus.keyframes`, never 0 (infinity). */
  keyframe: number;
  objectDistanceMm: number;
  distanceReference: FiniteConjugate["distanceReference"];
  source: string;
}

export interface FocusV2Input {
  closeFocusM: number;
  /** Normalized focus coordinate of each authored thickness, from 0 (infinity) to 1; `[0, 1]` when left out. */
  keyframes?: number[];
  /** Focus slider step; 0.004 when left out. */
  step?: number;
  description?: string;
  conjugates?: ConjugateV2Input[];
  /** On a prime: focus keyframe indices (>= 1) the source tabulates beyond infinity. A zoom's stations carry theirs. */
  published?: number[];
}

/** One variable gap, keyed in `gaps` by the label of the surface it follows. */
export interface GapV2Input {
  /** Display label of the gap. */
  label?: string;
  /** Thickness in mm at `[zoomStation][focusKeyframe]`; a prime has one row. */
  values: number[][];
}

/** One gap of an aberration-control ring, keyed by the label of the surface it follows. */
export interface AberrationGapV2Input {
  label?: string;
  /** `[normal, max]`, `[min, center, max]`, or one such tuple per zoom station. */
  values: AberrationVarRange;
}

export interface AberrationControlV2Input {
  label: string;
  description?: string;
  minLabel?: string;
  centerLabel?: string;
  maxLabel?: string;
  step?: number;
  gaps: Record<string, AberrationGapV2Input>;
}

/* ── Aperture, catalog, source, display ── */

export interface ApertureV2Input {
  /** Design f-number of a prime or a constant-aperture zoom; a variable-aperture zoom states one per station. */
  nominalFNumber?: number;
  fStops: number[];
  /** 16 when left out. */
  maxFNumber?: number;
  /** Aperture slider step; 0.004 when left out. */
  step?: number;
  blades?: number;
  bladeRoundedness?: number;
}

/** A value as the source states it: a scalar, or `[wide, tele]` on a zoom. */
export type RangeValueV2 = number | [number, number];

export interface LensCatalogV2Input {
  lensMounts?: LensMountId[];
  imageFormat?: ImageFormatId;
  imageCircleMm?: number;
  specs?: string[];
  elementCount?: number;
  groupCount?: number;
  acceptsTeleconverters?: boolean;
  opticalConfiguration?: OpticalConfigurationData;
  focalLengthMm?: { marketing?: RangeValueV2; design?: RangeValueV2 };
  fNumber?: { marketing?: number; design?: number };
}

export interface SourceV2Input {
  patentNumber?: string;
  patentYear?: number;
  authors?: string[];
  assignees?: string[];
  errata?: SourceErratum[];
}

/** A teleconverter's source: as a lens's, without errata, which V1 holds for a lens alone. */
export type TeleconverterSourceV2Input = Omit<SourceV2Input, "errata">;

/** Diagram layout. Every member but `yScFill` has a schema default. */
export interface LayoutV2Input {
  svgW?: number;
  svgH?: number;
  scFill?: number;
  yScFill: number;
  maxAspectRatio?: number;
  lensShiftFrac?: number;
}

/** Ray fans the diagram draws and analyses read; every member has a schema default. */
export interface RaysV2Input {
  rayFractions?: number[];
  rayLeadFrac?: number;
  offAxisFieldFrac?: number;
  offAxisFractions?: number[];
}

/** Validation relaxations; every member has a schema default. */
export interface ChecksV2Input {
  gapSagFrac?: number;
  maxRimAngleDeg?: number;
}

/* ── Files ── */

/** A `schema: 2` lens file, as authored in `*.data.ts`. */
export interface LensDataV2Input {
  schema: 2;
  key: string;
  /** `null` records an unconfirmed maker; left out, the maker is inferred from the name. */
  maker?: string | null;
  name: string;
  subtitle?: string;
  /** `true` when left out. */
  visible?: boolean;
  publishedAt?: string;
  catalog?: LensCatalogV2Input;
  source?: SourceV2Input;
  elements: ElementV2Input[];
  media?: MediumV2Input[];
  surfaces: SurfaceV2Input[];
  /** Present on a zoom alone. */
  zoom?: ZoomV2Input;
  focus: FocusV2Input;
  gaps?: Record<string, GapV2Input>;
  aperture: ApertureV2Input;
  aberrationControl?: AberrationControlV2Input;
  projection?: LensProjectionConfig;
  opticalPath?: OpticalPathData;
  perspectiveControl?: PerspectiveControlConfig;
  rearPlates?: RearPlateData[];
  groups?: AnnotationData[];
  doublets?: AnnotationData[];
  layout: LayoutV2Input;
  rays?: RaysV2Input;
  checks?: ChecksV2Input;
}

/** A `schema: 2` teleconverter file, as authored in `*.teleconverter.ts`. It has no stop, states or display. */
export interface TeleconverterDataV2Input {
  schema: 2;
  key: string;
  maker?: string | null;
  name: string;
  subtitle?: string;
  visible?: boolean;
  publishedAt?: string;
  catalog: { lensMounts: LensMountId[]; specs?: string[]; elementCount?: number; groupCount?: number };
  source?: TeleconverterSourceV2Input;
  /** Nominal focal-length multiplier, e.g. 1.4 or 2. */
  magnification: number;
  /** Air-equivalent distance in mm from the converter's first vertex to the host's native image plane. */
  masterImageDistanceMm: number;
  universal?: boolean;
  /** Fastest host f-number whose axial beam the converter's clear apertures pass. */
  minHostFNumber?: number;
  incompatibleLensKeys?: string[];
  elements: ElementV2Input[];
  media?: MediumV2Input[];
  /** Refracting surfaces only, front to rear; no `STO`. */
  surfaces: SurfaceV2Input[];
  /** Plates behind the converter; they only convert the authored last gap to air-equivalent. */
  rearPlates?: RearPlateData[];
  groups?: AnnotationData[];
  doublets?: AnnotationData[];
}
