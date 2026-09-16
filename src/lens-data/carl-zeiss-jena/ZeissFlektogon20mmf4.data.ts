import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — Carl Zeiss Jena Flektogon 20 mm f/4
 * Data source: GB 978,797 Example 1 (VEB Carl Zeiss Jena).
 * Strong production correlation to the Flektogon 4/20; the
 * patent/example attribution is not manufacturer-confirmed.
 * 10 elements / 6 air-separated components, all spherical/plane.
 *
 * NOTE ON SCALING:
 * Example 1 is normalized to f = 1.0. Source radii, axial
 * spacings, and published image spacing are scaled ×20 for the
 * correlated 20 mm production model. The inferred stop position
 * and modeled semi-diameters are defined in the scaled model;
 * the patent does not publish source dimensions for them.
 * There are no aspherical coefficients to transform.
 *
 * NOTE ON STOP / APERTURE:
 * The patent drawing places fp inside l4 but gives no axial
 * split or physical diameter. l4 = 0.472 mm after scaling is
 * split at its midpoint (0.236 + 0.236 mm), consistent with the
 * schematic drawing. STO sd = 4.629028138633326 mm is a
 * paraxial calibration to the patent's published f/4 state.
 * Agreement with f/4 therefore does not independently verify
 * diaphragm size.
 *
 * NOTE ON SEMI-DIAMETERS:
 * The patent publishes no clear apertures. SDs follow the optical rims of
 * GB 978,797 page 6, constrained by curvature and air-gap clearance. The
 * front envelope and central doublet are wider than the initial ray-envelope
 * estimate; rear faces 4/6 retain smaller feasible rims. See the audit log.
 *
 * NOTE ON FOCUS:
 * NO_INTERNAL_RECONSTRUCTION. The patent publishes one fixed
 * prescription only. Production MFD 0.16 m is retained as
 * metadata; no internal or unit-focus travel is invented.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "czj-flektogon-20-f4",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA FLEKTOGON 20mm f/4",
  subtitle: "GB 978,797 Example 1 — strong Flektogon 4/20 correlation; attribution not manufacturer-confirmed",
  specs: ["10 ELEMENTS / 6 GROUPS", "f = 20.002 mm", "F/4", "2ω ≈ 93°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 20,
  focalLengthDesign: 20.002308307378506,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["m42", "exakta"],
  imageFormat: "135-full-frame",
  patentNumber: "GB 978,797",
  patentAuthors: ["Wolf Dannberg", "Eberhard Dietzsch"],
  patentAssignees: ["VEB Carl Zeiss Jena"],
  patentYear: 1964,
  elementCount: 10,
  groupCount: 6,

  // GB 978,797 states the available image field is approximately 93°.
  // The rectilinear override keeps the authored coverage tied to that source value
  // rather than the slightly wider 135-format paraxial diagonal estimate.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 93,
    maxTraceFieldDeg: 46.5,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.6,
      indexReference: "d",
      fl: 162.878,
      glass: "S-LAL13 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      role: "Weak positive front meniscus; first component of the patent's net divergent three-component front section.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6935,
      vd: 53.6,
      indexReference: "d",
      fl: -49.59,
      glass: "S-LAL13 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      role: "Negative meniscus; second component of the front divergent section.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6935,
      vd: 53.6,
      indexReference: "d",
      fl: -22.502,
      glass: "S-LAL13 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      role: "Negative meniscus; third component of the front divergent section.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62,
      vd: 60.3,
      indexReference: "d",
      fl: -32.056,
      glass: "620603 — dense-crown class (supplier/melt unestablished)",
      apd: false,
      cemented: "G4",
      role: "Negative front member of the first rear cemented pair.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.55,
      vd: 45.4,
      indexReference: "d",
      fl: 30.945,
      glass: "550454 — light-flint class (supplier/melt unestablished)",
      apd: false,
      cemented: "G4",
      role: "Positive plano-convex rear member of the first rear cemented pair.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.728,
      vd: 38,
      indexReference: "d",
      fl: -33.365,
      glass: "Unmatched (728380; nearest current dense-barium-flint family outside Δn=0.003)",
      apd: false,
      cemented: "G5",
      role: "Negative front member of the second rear cemented pair.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.61,
      vd: 38,
      indexReference: "d",
      fl: 10.479,
      glass: "610380 — flint class (supplier/melt unestablished)",
      apd: false,
      cemented: "G5",
      role: "Strong positive rear member of the second rear cemented pair.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.678,
      vd: 32.2,
      indexReference: "d",
      fl: -7.915,
      glass: "Unmatched (678322; nearest SF5/ZF2 coordinate family outside Δn=0.003)",
      apd: false,
      cemented: "G6",
      role: "Strong negative front member of the rear cemented triplet.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.516,
      vd: 56.8,
      indexReference: "d",
      fl: 22.178,
      glass: "516568 — crown class (supplier/melt unestablished)",
      apd: false,
      cemented: "G6",
      role: "Positive middle member of the rear cemented triplet.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.678,
      vd: 50.8,
      indexReference: "d",
      fl: 14.969,
      glass: "Unmatched (678508; no coordinate-compatible current catalog glass located)",
      apd: false,
      cemented: "G6",
      role: "Positive rear member of the rear cemented triplet.",
    },
  ],

  /* ── Surface prescription ──
   *  GB 978,797 Example 1 scaled uniformly ×20 from f = 1.0.
   *  Source l4 is split symmetrically around the inferred STO:
   *    surface 9 → STO = 0.236 mm; STO → surface 10 = 0.236 mm.
   */
  surfaces: [
    { label: "1", R: 64.4, d: 5.39, nd: 1.6935, elemId: 1, sd: 29 },
    { label: "2", R: 144.68, d: 0.094, nd: 1, elemId: 0, sd: 29 },
    { label: "3", R: 23.81, d: 2.08, nd: 1.6935, elemId: 2, sd: 19 },
    { label: "4", R: 13.566, d: 5.862, nd: 1, elemId: 0, sd: 12 },
    { label: "5", R: 33.52, d: 1.892, nd: 1.6935, elemId: 3, sd: 13 },
    { label: "6", R: 10.402, d: 5.2, nd: 1, elemId: 0, sd: 8.6 },
    { label: "7", R: 126.04, d: 2.836, nd: 1.62, elemId: 4, sd: 10 },
    { label: "8", R: 17.02, d: 12.198, nd: 1.55, elemId: 5, sd: 10 },
    { label: "9", R: 1e15, d: 0.236, nd: 1, elemId: 0, sd: 10 },
    { label: "STO", R: 1e15, d: 0.236, nd: 1, elemId: 0, sd: 4.629028138633326 },
    { label: "10", R: 14.534, d: 2.174, nd: 1.728, elemId: 6, sd: 5.9 },
    { label: "11", R: 8.52, d: 4.444, nd: 1.61, elemId: 7, sd: 5.9 },
    { label: "12", R: -20.538, d: 1.75, nd: 1, elemId: 0, sd: 5.9 },
    { label: "13", R: -15.356, d: 0.992, nd: 1.678, elemId: 8, sd: 5 },
    { label: "14", R: 8.464, d: 2.08, nd: 1.516, elemId: 9, sd: 5.6 },
    { label: "15", R: 29.786, d: 3.168, nd: 1.678, elemId: 10, sd: 5.9 },
    { label: "16", R: -14.732, d: 36.13, nd: 1, elemId: 0, sd: 6.3 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Focus movement ── */
  var: {},
  varLabels: [],

  /* ── Group and cemented-pair annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "12" },
    { text: "G6", fromSurface: "13", toSurface: "16" },
  ],
  doublets: [
    { text: "G4", fromSurface: "7", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.16,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — GB 978,797 publishes one fixed prescription only. Production MFD 0.16 m is metadata; no focus travel is modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
