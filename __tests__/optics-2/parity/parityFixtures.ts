export type Optics2MigrationRuleId =
  | "additive-optics-2"
  | "legacy-reference"
  | "lens-data-input-contract"
  | "exact-tracing-only"
  | "no-trace-mode-rollout"
  | "temporary-internal-selector-only"
  | "compare-before-callers-move";

export interface Optics2MigrationRule {
  id: Optics2MigrationRuleId;
  rule: string;
}

export const OPTICS_2_STAGE_01_MIGRATION_RULES: readonly Optics2MigrationRule[] = [
  { id: "additive-optics-2", rule: "src/optics-2 is additive until final migration." },
  { id: "legacy-reference", rule: "src/optics remains the parity reference and production engine." },
  { id: "lens-data-input-contract", rule: "The lens-data authoring contract remains LensDataInput." },
  { id: "exact-tracing-only", rule: "Exact surface tracing remains the only trace path." },
  { id: "no-trace-mode-rollout", rule: "Do not introduce mode, traceMode, or per-lens rollout fields." },
  { id: "temporary-internal-selector-only", rule: "Any engine selector is internal and temporary." },
  { id: "compare-before-callers-move", rule: "Tests compare behavior before app callers move." },
];

export type ParityFixtureRole =
  | "ordinary-prime"
  | "fast-aspheric-prime"
  | "rectilinear-zoom"
  | "fisheye"
  | "perspective-control"
  | "aberration-control"
  | "glass-coverage"
  | "folded-reference";

export type GlassCoverageKind = "sellmeier" | "line-indices" | "abbe-fallback" | "constant-fallback";

export type ParityStateTag =
  | "infinity-focus"
  | "close-focus"
  | "wide-open"
  | "stopped-down"
  | "center-field"
  | "off-axis-field"
  | "wide-zoom"
  | "mid-zoom"
  | "tele-zoom";

export interface ParitySliderState {
  id: string;
  label: string;
  focusT: number;
  zoomT: number;
  apertureT: number;
  fieldFraction: number;
  aberrationT?: number;
  tags: readonly ParityStateTag[];
}

export interface ParityFixture {
  key: string;
  label: string;
  roles: readonly ParityFixtureRole[];
  states: readonly ParitySliderState[];
  glassCoverage?: readonly GlassCoverageKind[];
  notes?: string;
}

const PRIME_STATE_MATRIX: readonly ParitySliderState[] = [
  {
    id: "infinity-wide-open-center",
    label: "Infinity focus, wide open, center field",
    focusT: 0,
    zoomT: 0,
    apertureT: 0,
    fieldFraction: 0,
    tags: ["infinity-focus", "wide-open", "center-field"],
  },
  {
    id: "infinity-stopped-down-off-axis",
    label: "Infinity focus, stopped down, off-axis field",
    focusT: 0,
    zoomT: 0,
    apertureT: 0.55,
    fieldFraction: 0.7,
    tags: ["infinity-focus", "stopped-down", "off-axis-field"],
  },
  {
    id: "close-wide-open-off-axis",
    label: "Close focus, wide open, off-axis field",
    focusT: 1,
    zoomT: 0,
    apertureT: 0,
    fieldFraction: 0.7,
    tags: ["close-focus", "wide-open", "off-axis-field"],
  },
  {
    id: "close-stopped-down-center",
    label: "Close focus, stopped down, center field",
    focusT: 1,
    zoomT: 0,
    apertureT: 0.55,
    fieldFraction: 0,
    tags: ["close-focus", "stopped-down", "center-field"],
  },
];

const ZOOM_STATE_MATRIX: readonly ParitySliderState[] = [
  {
    id: "wide-infinity-wide-open-center",
    label: "Wide zoom, infinity focus, wide open, center field",
    focusT: 0,
    zoomT: 0,
    apertureT: 0,
    fieldFraction: 0,
    tags: ["wide-zoom", "infinity-focus", "wide-open", "center-field"],
  },
  {
    id: "wide-close-stopped-down-off-axis",
    label: "Wide zoom, close focus, stopped down, off-axis field",
    focusT: 1,
    zoomT: 0,
    apertureT: 0.55,
    fieldFraction: 0.7,
    tags: ["wide-zoom", "close-focus", "stopped-down", "off-axis-field"],
  },
  {
    id: "mid-infinity-stopped-down-center",
    label: "Middle zoom, infinity focus, stopped down, center field",
    focusT: 0,
    zoomT: 0.5,
    apertureT: 0.55,
    fieldFraction: 0,
    tags: ["mid-zoom", "infinity-focus", "stopped-down", "center-field"],
  },
  {
    id: "mid-close-wide-open-off-axis",
    label: "Middle zoom, close focus, wide open, off-axis field",
    focusT: 1,
    zoomT: 0.5,
    apertureT: 0,
    fieldFraction: 0.7,
    tags: ["mid-zoom", "close-focus", "wide-open", "off-axis-field"],
  },
  {
    id: "tele-infinity-wide-open-off-axis",
    label: "Tele zoom, infinity focus, wide open, off-axis field",
    focusT: 0,
    zoomT: 1,
    apertureT: 0,
    fieldFraction: 0.7,
    tags: ["tele-zoom", "infinity-focus", "wide-open", "off-axis-field"],
  },
  {
    id: "tele-close-stopped-down-center",
    label: "Tele zoom, close focus, stopped down, center field",
    focusT: 1,
    zoomT: 1,
    apertureT: 0.55,
    fieldFraction: 0,
    tags: ["tele-zoom", "close-focus", "stopped-down", "center-field"],
  },
];

const FOLDED_STATE_MATRIX: readonly ParitySliderState[] = [
  {
    id: "folded-infinity-wide-open-center",
    label: "Folded reference, infinity focus, wide open, center field",
    focusT: 0,
    zoomT: 0,
    apertureT: 0,
    fieldFraction: 0,
    tags: ["infinity-focus", "wide-open", "center-field"],
  },
  {
    id: "folded-infinity-stopped-down-off-axis",
    label: "Folded reference, infinity focus, stopped down, off-axis field",
    focusT: 0,
    zoomT: 0,
    apertureT: 0.55,
    fieldFraction: 0.5,
    tags: ["infinity-focus", "stopped-down", "off-axis-field"],
  },
];

export const REQUIRED_FOLDED_REFERENCE_KEYS: readonly string[] = [
  "reference-annular-obscured-mirror",
  "reference-annular-ring-blocker",
  "reference-cassegrain-back-focus",
  "reference-gregorian-secondary",
  "reference-maksutov-cassegrain-meniscus",
  "reference-mangin-second-surface-mirror",
  "reference-newtonian-side-focus",
  "reference-spherical-primary-mirror",
];

export const OPTICS_2_PARITY_FIXTURES: readonly ParityFixture[] = [
  {
    key: "nikkor-z-50f18s",
    label: "Ordinary prime: NIKKOR Z 50mm f/1.8 S",
    roles: ["ordinary-prime", "glass-coverage"],
    glassCoverage: ["constant-fallback"],
    states: PRIME_STATE_MATRIX,
  },
  {
    key: "nikon-z-58f095-noct",
    label: "Fast/aspheric prime: NIKKOR Z 58mm f/0.95 S Noct",
    roles: ["ordinary-prime", "fast-aspheric-prime"],
    states: PRIME_STATE_MATRIX,
    notes: "Catalog key uses the existing lens slug for the Stage 01 requested Noct fixture.",
  },
  {
    key: "nikon-z-24-70f4s",
    label: "Rectilinear zoom: NIKKOR Z 24-70mm f/4 S",
    roles: ["rectilinear-zoom"],
    states: ZOOM_STATE_MATRIX,
  },
  {
    key: "canon-ef-8-15mm-f4l-fisheye-usm",
    label: "Fisheye zoom: Canon EF 8-15mm f/4L Fisheye USM",
    roles: ["fisheye"],
    states: ZOOM_STATE_MATRIX,
  },
  {
    key: "nikon-fisheye-nikkor-6mm-f28",
    label: "Fisheye prime: Nikon Fisheye-Nikkor 6mm f/2.8",
    roles: ["ordinary-prime", "fisheye"],
    states: PRIME_STATE_MATRIX,
  },
  {
    key: "nikon-pc-nikkor-19mm-f4e-ed",
    label: "Perspective-control lens: PC NIKKOR 19mm f/4E ED",
    roles: ["ordinary-prime", "perspective-control"],
    states: PRIME_STATE_MATRIX,
  },
  {
    key: "varisoft-rokkor-85f28",
    label: "Aberration-control lens: Minolta Varisoft Rokkor 85mm f/2.8",
    roles: ["ordinary-prime", "aberration-control"],
    states: PRIME_STATE_MATRIX.map((state) => ({
      ...state,
      aberrationT: state.id.includes("stopped-down") ? 0.75 : 0.25,
    })),
  },
  {
    key: "apo-lanthar-50f2",
    label: "Glass coverage: Voigtlander APO-Lanthar 50mm f/2",
    roles: ["ordinary-prime", "glass-coverage"],
    glassCoverage: ["sellmeier", "abbe-fallback"],
    states: PRIME_STATE_MATRIX,
  },
  {
    key: "sony-fe-16-35mm-f28-gm-ii",
    label: "Glass coverage: Sony FE 16-35mm f/2.8 GM II",
    roles: ["rectilinear-zoom", "glass-coverage"],
    glassCoverage: ["line-indices"],
    states: ZOOM_STATE_MATRIX,
  },
  ...REQUIRED_FOLDED_REFERENCE_KEYS.map(
    (key): ParityFixture => ({
      key,
      label: `Folded reference fixture: ${key}`,
      roles: ["folded-reference"],
      states: FOLDED_STATE_MATRIX,
    }),
  ),
];

export function parityFixtureKeys(): string[] {
  return OPTICS_2_PARITY_FIXTURES.map((fixture) => fixture.key);
}

export function parityStatesForFixture(key: string): readonly ParitySliderState[] {
  return OPTICS_2_PARITY_FIXTURES.find((fixture) => fixture.key === key)?.states ?? [];
}
