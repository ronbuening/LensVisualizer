import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON ZOOM-NIKKOR 5.6-16.8mm f/2.7-4.8 (Nikon COOLPIX SQ)              ║
 * ╠══════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2003/0072085 A1, Example 1 (Mizuguchi / Shibayama, Nikon).    ║
 * ║  Patent design: 7 elements / 6 air-separated groups / 3 power groups,          ║
 * ║  negative-positive-positive, with aspheres on source surfaces 8 and 13.         ║
 * ║                                                                                ║
 * ║  Product correlation: qualified, not manufacturer-confirmed. Nikon's COOLPIX    ║
 * ║  SQ specifications broadly match the format, element/group count, and timing,   ║
 * ║  but Nikon's later lens-history article says the production SQ focuses with     ║
 * ║  group 1 whereas this patent says G3 focuses toward the object.                 ║
 * ║                                                                                ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes only the        ║
 * ║  qualitative G3 focus direction and no finite-focus spacing row, so `var`       ║
 * ║  preserves zoom-only infinity spacings with identical focus endpoints.          ║
 * ║  `closeFocusM` is production normal-mode metadata only; it does not calibrate   ║
 * ║  an internal focus law.                                                         ║
 * ║                                                                                ║
 * ║  Zoom variable gaps: source d6 and d12 at f = 5.97, 10.00, 16.88 mm.           ║
 * ║  G1 reverses between the intermediate and telephoto stations; G2 moves         ║
 * ║  monotonically objectward relative to fixed G3.                                ║
 * ║                                                                                ║
 * ║  Aperture: the source publishes FNO but no physical diaphragm diameter.         ║
 * ║  `zoomApertureModel: "from-nominal-fno"` therefore infers the iris schedule    ║
 * ║  from modeled EFL and the three source FNO stations. `STO.sd` is the inferred  ║
 * ║  wide-state physical stop semi-diameter, not a patent-published dimension.      ║
 * ║                                                                                ║
 * ║  Semi-diameters: modeled from exact meridional ray geometry at the patent's     ║
 * ║  maximum image height Y = 3.52 mm, constrained by edge thickness, actual rim    ║
 * ║  slope, conic domain, shared-band gap clearance, and the relative diameter      ║
 * ║  ordering visible in patent Fig. 1. The wide-edge bundle is intentionally       ║
 * ║  vignetted by front-group geometry; L12 is the first finite-SD clip. These SDs ║
 * ║  are not source-published clear apertures.                                      ║
 * ║                                                                                ║
 * ║  Source rear plate: retained via rearPlates with 0.6 mm before, 2.17 mm glass,
 * ║  and the 2.142 mm mean physical trailing gap recovered from rounded TL rows.
 * ║                                                                                ║
 * ║  Scaling: none (s = 1). Patent conic κ maps to LensVisualizer K = κ - 1;       ║
 * ║  the published C4/C6/C8/C10 coefficients are unchanged at unit scale.          ║
 * ╚══════════════════════════════════════════════════════════════════════════════════╝
 */

// Patent optical-rim and compatible glass review: see the sibling .audit.md (2026-10-02 UTC).
const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-zoom-nikkor-56-168-f27-48-coolpix-sq",
  maker: "Nikon",
  name: "NIKON ZOOM-NIKKOR 5.6-16.8mm f/2.7-4.8 (Nikon COOLPIX SQ)",
  subtitle: "US 2003/0072085 A1 Example 1 — qualified COOLPIX SQ correlation",
  specs: [
    "7 ELEMENTS / 6 GROUPS",
    "3 POWER GROUPS: NEGATIVE / POSITIVE / POSITIVE",
    "DESIGN f = 5.97-16.88 mm",
    "DESIGN F/2.87-5.22",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [5.6, 16.8],
  focalLengthDesign: [5.973871682, 16.878610506],
  imageFormat: "1-2.7-inch-type",
  apertureMarketing: 2.7, // Wide-end scalar; the marketed f/2.7-4.8 range is retained in the name/specs.
  lensMounts: ["fixed-lens-camera"],
  patentNumber: "US 2003/0072085 A1",
  patentAuthors: ["Keiko Mizuguchi", "Atsushi Shibayama"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2003,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.17,
      indexReference: "d",
      fl: -14.906415,
      glass: "834372 — glass class (supplier unresolved)",
      role: "Object-side negative meniscus in the negative first power group G1.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.58,
      indexReference: "d",
      fl: -12.182925,
      glass: "804466 — glass class (supplier unresolved)",
      role: "Second negative element in G1.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      indexReference: "d",
      fl: 14.134546,
      glass: "805254 — dense-flint class (supplier unresolved)",
      role: "Positive meniscus completing the negative first power group G1.",
    },
    {
      id: 4,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.62,
      indexReference: "d",
      fl: 11.834466,
      glass: "J-SK12 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Aspherical positive element at the object side of positive group G2.",
    },
    {
      id: 5,
      name: "L22",
      diagramLabel: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.58,
      indexReference: "d",
      fl: 5.565384,
      glass: "804466 — glass class (supplier unresolved)",
      cemented: "D1",
      role: "Positive component of the cemented L22/L23 pair in G2.",
    },
    {
      id: 6,
      name: "L23",
      diagramLabel: "L23",
      label: "Element L23",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      indexReference: "d",
      fl: -3.842524,
      glass: "699301 — glass class (supplier unresolved)",
      cemented: "D1",
      role: "Negative component of the cemented L22/L23 pair in G2.",
    },
    {
      id: 7,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.62,
      indexReference: "d",
      fl: 15.624766,
      glass: "J-SK12 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Single positive element forming the fixed third power group G3 during zooming.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 19.1828, d: 1.1, nd: 1.834, elemId: 1, sd: 6.0 },
    { label: "2", R: 7.3466, d: 1.75, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "3", R: -143.678, d: 1.0, nd: 1.804, elemId: 2, sd: 4.4 },
    { label: "4", R: 10.5443, d: 0.8, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "5", R: 10.4893, d: 2.3, nd: 1.80518, elemId: 3, sd: 4.4 },
    { label: "6", R: 120.8022, d: 13.451, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "STO", R: 1e15, d: 0.4, nd: 1.0, elemId: 0, sd: 2.398481261 },
    { label: "8A", R: 9.692, d: 2.0, nd: 1.58313, elemId: 4, sd: 3.0 },
    { label: "9", R: -22.1432, d: 0.1, nd: 1.0, elemId: 0, sd: 3.0 },
    { label: "10", R: 7.4756, d: 2.55, nd: 1.804, elemId: 5, sd: 3.0 },
    { label: "11", R: -9.4517, d: 0.9, nd: 1.69895, elemId: 6, sd: 3.0 },
    { label: "12", R: 3.8988, d: 5.078, nd: 1.0, elemId: 0, sd: 3.0 },
    { label: "13A", R: 25.703, d: 2.5, nd: 1.58313, elemId: 7, sd: 4.5 },
    { label: "14", R: -13.609, d: 0.6, nd: 1.0, elemId: 0, sd: 4.5 },
  ],

  /* ── Aspherical coefficients ── */
  rearPlates: [{ label: "CG", thicknessMm: 2.17, nd: 1.51633, vd: 64.14, indexReference: "d", glass: "N-BK7 — coordinate-compatible spectral proxy (supplier unresolved)", gapAfterMm: 2.142, source: "US 2003/0072085 A1, Example 1 Table 1 surfaces 15–16; mean trailing gap recovered from rounded TL rows" }],

  asph: {
    "8A": {
      K: -1.9643,
      A4: -4.4432e-5,
      A6: -1.037e-5,
      A8: 1.3375e-6,
      A10: -8.9536e-8,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 15.8196,
      A4: -4.5173e-4,
      A6: 2.2717e-5,
      A8: -1.5258e-6,
      A10: 3.3056e-8,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom-only variable air spacings; no finite-focus reconstruction ── */
  var: {
    "6": [
      [13.451, 13.451],
      [6.223, 6.223],
      [1.853, 1.853],
    ],
    "12": [
      [5.078, 5.078],
      [9.655, 9.655],
      [17.474, 17.474],
    ],
  },
  varLabels: [
    ["6", "d6"],
    ["12", "d12"],
  ],

  zoomPositions: [5.97, 10.0, 16.88],
  zoomLabels: ["Wide", "Tele"],
  zoomApertureModel: "from-nominal-fno",

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "8A", toSurface: "12" },
    { text: "G3", fromSurface: "13A", toSurface: "14" },
  ],
  doublets: [{ text: "L22/L23", fromSurface: "10", toSurface: "12" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription: "Only infinity-focus zoom states are modeled. The patent gives no finite-focus spacings, and its G3 focus direction differs from Nikon’s production description of G1 focusing.",

  /* ── Aperture configuration ── */
  nominalFno: [2.87, 3.73, 5.22],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout ── */
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
