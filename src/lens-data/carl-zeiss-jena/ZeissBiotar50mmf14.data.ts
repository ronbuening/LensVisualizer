import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CARL ZEISS JENA BIOTAR 50mm f/1.4                               ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 1,786,916 Example 2 (Willy Merté / Carl Zeiss).         ║
 * ║  Six elements / four air-separated components; all surfaces spherical.    ║
 * ║                                                                            ║
 * ║  SCALE: The patent is normalized to focal length 100. All dimensional     ║
 * ║  prescription values are scaled uniformly ×0.5 for the 50 mm research    ║
 * ║  target. The rounded scaled prescription computes to EFL                  ║
 * ║  49.956745168 mm; it is not rescaled again to force exactly 50 mm.        ║
 * ║                                                                            ║
 * ║  STOP MODEL: The patent publishes f/1.4 but no physical stop station or   ║
 * ║  diameter. One modeled STO is inserted in the central r5→r6 air lens.     ║
 * ║  Its station is inferred by balancing the current shared-band gap-sag     ║
 * ║  margin for the modeled 10.8 mm inner-component semi-diameters. Its       ║
 * ║  11.522193288 mm semi-diameter is paraxially calibrated to the published  ║
 * ║  f/1.4 target. This is not an independently verified production iris.     ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: No clear apertures are published. The authored SDs are   ║
 * ║  modeled values constrained by exact meridional d-line tracing of the     ║
 * ║  default on-axis fan and a ±14.05° off-axis construction sample, plus     ║
 * ║  positive edge thickness, actual rim slope, and shared-band gap geometry. ║
 * ║  They are not production barrel dimensions. The calibrated full nominal  ║
 * ║  pupil is not claimed to be independently clear at every rim; the Stage 2 ║
 * ║  audit records this source/model limitation explicitly.                   ║
 * ║                                                                            ║
 * ║  IMAGE PLANE: No rear image distance is published. Surface 10 d is the    ║
 * ║  Gaussian infinity BFD recomputed from the scaled rounded prescription.   ║
 * ║                                                                            ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent publishes one static       ║
 * ║  prescription and no focusing mechanism or finite-conjugate state.        ║
 * ║  closeFocusM = 1.0 is only the finite schema/UI placeholder required by   ║
 * ║  LensDataInput; var is empty and 1.0 m is not a product MFD.              ║
 * ║                                                                            ║
 * ║  CORRELATION: ZEISS historical evidence supports the 1927 Biotar family   ║
 * ║  association, but does not manufacturer-confirm Example 2 as the exact    ║
 * ║  commercial 50 mm f/1.4 prescription. Mount and image format are omitted. ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-biotar-50f14",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA BIOTAR 50mm f/1.4",
  subtitle: "US 1,786,916 Example 2 — 0.5× patent scale; Biotar correlation qualified",
  specs: ["6 ELEMENTS / 4 GROUPS", "f = 49.9567 mm", "F/1.4", "ALL-SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 49.95674516822688,
  apertureMarketing: 1.4,
  apertureDesign: 1.4,
  patentNumber: "US 1,786,916",
  patentAuthors: ["Willy Merté"],
  patentAssignees: ["Carl-Zeiss-Stiftung"],
  patentYear: 1930,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "I",
      label: "Element I",
      type: "Positive Meniscus",
      nd: 1.64238,
      vd: 48.0,
      indexReference: "d",
      fl: 86.45379603250042,
      glass: "BAF9 — barium-flint dispersion proxy (vintage 642480; supplier unproven)",
      role: "Front collective meniscus forming the first positive component.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "II",
      label: "Element II",
      type: "Biconvex Positive",
      nd: 1.62306,
      vd: 56.9,
      indexReference: "d",
      fl: 34.77731009181846,
      glass: "N-SK10 — dense-crown dispersion proxy (623569; supplier unproven)",
      role: "Positive member of the first inner cemented component.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "III",
      label: "Element III",
      type: "Biconcave Negative",
      nd: 1.57566,
      vd: 41.2,
      indexReference: "d",
      fl: -23.952610833271063,
      glass: "QF3 — light-flint dispersion proxy (vintage 576412; supplier unproven)",
      role: "Negative member that makes the first inner cemented component net negative.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "IV",
      label: "Element IV",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      fl: -15.87492598917335,
      glass: "673322 — SF5-class dense flint (supplier unproven)",
      role: "Dense-flint negative member of the second inner cemented component.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "V",
      label: "Element V",
      type: "Biconvex Positive",
      nd: 1.64238,
      vd: 48.0,
      indexReference: "d",
      fl: 21.919537208596626,
      glass: "BAF9 — barium-flint dispersion proxy (vintage 642480; supplier unproven)",
      role: "Positive member paired with L4; the complete second inner component remains net negative.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "VI",
      label: "Element VI",
      type: "Biconvex Positive",
      nd: 1.64238,
      vd: 48.0,
      indexReference: "d",
      fl: 44.88815954445126,
      glass: "BAF9 — barium-flint dispersion proxy (vintage 642480; supplier unproven)",
      role: "Rear biconvex collective component.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 41.8, d: 5.375, nd: 1.64238, elemId: 1, sd: 19.5 },
    { label: "2", R: 160.5, d: 0.825, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "3", R: 22.4, d: 7.775, nd: 1.62306, elemId: 2, sd: 16.0 },
    { label: "4", R: -575.0, d: 2.525, nd: 1.57566, elemId: 3, sd: 14.7 },
    { label: "5", R: 14.15, d: 5.685929099359121, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "STO", R: 1e15, d: 3.7640709006408786, nd: 1.0, elemId: 0, sd: 11.522193288211447 },
    { label: "6", R: -19.25, d: 2.525, nd: 1.6727, elemId: 4, sd: 10.8 },
    { label: "7", R: 25.25, d: 10.61, nd: 1.64238, elemId: 5, sd: 13.0 },
    { label: "8", R: -26.6, d: 0.485, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "9", R: 53.0, d: 6.95, nd: 1.64238, elemId: 6, sd: 16.8 },
    { label: "10", R: -60.0, d: 32.66434646169834, nd: 1.0, elemId: 0, sd: 16.8 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1.0,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: US 1,786,916 Example 2 publishes one static prescription and no focus motion. closeFocusM = 1.0 m is only the finite schema/UI placeholder; no production MFD or focus spacing law is modeled.",
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
