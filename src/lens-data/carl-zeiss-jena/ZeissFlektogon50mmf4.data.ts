import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CARL ZEISS JENA FLEKTOGON 50mm f/4
 * Data source: DE 1 157 000, Claim 8 / Example 1 / Fig. 1.
 * 7 elements / 4 air-separated groups, all spherical.
 * Production correlation: strong but not manufacturer-confirmed
 * as the patent/example used in the production Flektogon 4/50.
 *
 * SCALING: the patent is normalized to f = 100. Every source
 * radius, axial spacing, image-plane distance, and modeled SD is
 * represented at uniform scale s = 0.5. Indices and Abbe numbers
 * are unchanged. No asphere coefficient transform is applicable.
 *
 * STOP: the patent publishes f/4 but no physical stop position or
 * diameter. The model inserts one STO at the midpoint of the
 * scaled l3 air gap between source surfaces r7 and r8, splitting
 * 4.170 mm into 2.085 + 2.085 mm. The stop radius is derived from
 * the design f-number (f/4). This is a modeling inference, not an
 * independently published diaphragm.
 *
 * SEMI-DIAMETERS: not published. Modeled SDs were constructed from
 * exact spherical ray envelopes using the original paraxially calibrated f/4 stop and
 * the 78° manufacturer-catalog full-field fact, then constrained by
 * positive edge thickness, actual rim slope, and air-gap intrusion.
 * Exact sampling is clear through ±37° for pupil fractions to
 * ±0.95; the outermost 39° samples show expected corner vignetting.
 * The front 38.5 mm SD also remains below the catalog's 90 mm
 * slip-on mechanical diameter.
 *
 * FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent supplies one static
 * infinity prescription. closeFocusM = 0.50 m is manufacturer-
 * catalog metadata only; no internal close-focus spacing is modeled.
 *
 * GLASS: the patent gives native d-line nd/νd coordinates only.
 * Supplier identities are unresolved; class/code labels are used.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "zeiss-flektogon-50mm-f4",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA FLEKTOGON 50mm f/4",
  subtitle: "DE 1 157 000 Example 1 — ×0.5 scaled patent model; production correlation inferred",

  catalog: {
    lensMounts: ["pentacon-six"],
    imageFormat: "6x6",
    specs: ["7 ELEMENTS / 4 GROUPS", "f ≈ 50.00 mm", "F/4", "ALL-SPHERICAL", "6×6 FORMAT"],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: { marketing: 50, design: 49.999544002841 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "DE 1 157 000",
    patentYear: 1963,
    authors: ["Wolf Dannberg", "Eberhard Dietzsch"],
    assignees: ["Jenoptik Jena GmbH"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.69806,
      vd: 53.6,
      indexReference: "d",
      focalLengthMm: 102.957357064502,
      glass: "N-LAK14 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      role: "Positive front component of the cemented negative front part.",
      cemented: "I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.54212,
      vd: 59.6,
      indexReference: "d",
      focalLengthMm: -39.645847564237,
      glass: "BAK2 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      role: "Negative rear component of the cemented diverging front part.",
      cemented: "I",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.68169,
      vd: 41.9,
      indexReference: "d",
      focalLengthMm: 61.523827890532,
      glass: "682419 class (supplier unresolved)",
      role: "First positive collecting member IIa.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.68169,
      vd: 41.9,
      indexReference: "d",
      focalLengthMm: 344.365236400675,
      glass: "682419 class (supplier unresolved)",
      role: "Weak positive meniscus forming collecting member IIb.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.67254,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: -18.859121688849,
      glass: "SF5 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      role: "Negative front component of the cemented rear triplet.",
      cemented: "IIc",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.5004,
      vd: 65.2,
      indexReference: "d",
      focalLengthMm: 46.12931706215,
      glass: "BK4 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      role: "Low-index positive middle component of the cemented rear triplet.",
      cemented: "IIc",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.68078,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 29.865226175911,
      glass: "681472 class (supplier unresolved)",
      role: "Positive rear component of the cemented rear triplet.",
      cemented: "IIc",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── All-spherical design ── */
  surfaces: [
    { label: "1", R: 165.89, d: 11.375, sd: 38.5, medium: 1 },
    { label: "2", R: -123.235, d: 3.035, sd: 38.5, medium: 2 },
    { label: "3", R: 26.2585, d: 38.11, sd: 23.2 },
    { label: "4", R: 52.14, d: 3.505, sd: 15.5, medium: 3 },
    { label: "5", R: -208.55, d: 0.19, sd: 15.5 },
    { label: "6", R: 30.3345, d: 9.67, sd: 15.5, medium: 4 },
    { label: "7", R: 30.3345, d: 2.085, sd: 15.5 },
    { label: "STO", R: "flat", d: 2.085 },
    { label: "8", R: -52.61, d: 1.705, sd: 8.7, medium: 5 },
    { label: "9", R: 16.9305, d: 5.31, sd: 10.5, medium: 6 },
    { label: "10", R: 56.875, d: 3.79, sd: 11.8, medium: 7 },
    { label: "11", R: -30.7895, d: 61.665, sd: 11.7 },
  ],

  focus: {
    closeFocusM: 0.5,
    /* ── Focus ── */
    description: "Infinity prescription only; the patent gives no focus travel. The production lens focuses to 0.50 m.",
  },

  /* ── Aperture ── */
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16] },

  /* ── Diagram annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "3" },
    { text: "IIa", fromSurface: "4", toSurface: "5" },
    { text: "IIb", fromSurface: "6", toSurface: "7" },
    { text: "IIc", fromSurface: "8", toSurface: "11" },
  ],
  doublets: [{ text: "I", fromSurface: "1", toSurface: "3" }],

  /* ── Layout ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
