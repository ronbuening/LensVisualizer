import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — CANON EF 28-70mm f/3.5-4.5 II                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP H01-189622 A, Numerical Example 1 (Canon).             ║
 * ║  Three kinematic groups: negative / positive / weak positive.      ║
 * ║  10 elements / 9 air-spaced groups; one aspherical surface.        ║
 * ║                                                                    ║
 * ║  PRESCRIPTION STATUS:                                               ║
 * ║    The rendered patent and later grant print R17 = -11.61 mm and   ║
 * ║    R21 = -141.79 mm. Those values fail the published G2 focal      ║
 * ║    length and all three system EFLs. The locked Stage 1 repair     ║
 * ║    uses R17 = -36.74 mm and R21 = -37.76 mm. These are author      ║
 * ║    inferences, not an official erratum.                            ║
 * ║    R18 is an optically neutral moving flare-cutter plane. It is    ║
 * ║    omitted, and its published D18 is added to D17 at each state.   ║
 * ║                                                                    ║
 * ║  SCALING:                                                           ║
 * ║    None. Source EFLs are 29.09 / 50.0 / 67.89 mm; the corrected    ║
 * ║    model computes 29.083448799 / 49.998100427 / 67.894369753 mm.   ║
 * ║    Scale factor s = 1.0. Radii, thicknesses, SDs, and image-plane  ║
 * ║    coordinates are unscaled. A_p,scaled = A_p,patent / s^(p-1),  ║
 * ║    so the R4A coefficients are unchanged; K is unchanged.          ║
 * ║                                                                    ║
 * ║  ZOOM AND FOCUS:                                                    ║
 * ║    Zoom-only gaps: D17_model = D17 + D18 and rear BFD.             ║
 * ║    Focus gap: D6. G1 performs front-group focusing.                ║
 * ║    Focus model: CONSTRAINED_RECONSTRUCTION. The patent publishes   ║
 * ║    infinity spacings only. Close-focus D6 values were solved by    ║
 * ║    paraxial imaging at the official rounded 0.39 m MFD, treating  ║
 * ║    that distance as image plane to object plane. The tele result   ║
 * ║    is 0.218918×, consistent with the rounded 0.22× product value.  ║
 * ║    The MFD reference-plane convention and retail rounding remain   ║
 * ║    limitations; these values are not a published production cam.  ║
 * ║                                                                    ║
 * ║  APERTURE MODEL:                                                    ║
 * ║    The patent publishes design f/3.6 wide and f/4.6 tele. Runtime  ║
 * ║    nominalFno follows the marketed f/3.5-4.5 specification, with   ║
 * ║    an explicitly inferred f/4.0 middle control point. Stop SD is   ║
 * ║    inferred by exact tracing from [3.5, 4.0, 4.5]; no stop clear   ║
 * ║    diameter is patent-published.                                  ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS:                                                    ║
 * ║    The patent publishes no clear apertures. SDs are inferred from  ║
 * ║    exact marginal/chief-ray envelopes over all zoom and modeled    ║
 * ║    focus states, the 135-format field, the official 52 mm filter   ║
 * ║    limit, the patent section drawing, positive element edge        ║
 * ║    thickness, actual rim slope, shared-band air-gap clearance,     ║
 * ║    cemented-interface compatibility, and zero hidden render trim.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-28-70mm-f35-45-ii",
  maker: "Canon",
  name: "CANON EF 28-70mm f/3.5-4.5 II",
  subtitle: "JP H01-189622 A — Numerical Example 1 (correlated and repaired patent prescription)",
  specs: [
    "10 ELEMENTS / 9 GROUPS",
    "DESIGN EFL 29.083-67.894 mm",
    "DESIGN f/3.6-4.6",
    "1 ASPHERICAL SURFACE",
    "FRONT-GROUP FOCUS",
  ],
  focalLengthMarketing: [28, 70],
  focalLengthDesign: [29.083448799, 67.894369753],
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP H01-189622 A",
  patentAuthors: ["Sadatoshi Takahashi"],
  patentAssignees: ["Canon Inc."],
  patentYear: 1989,
  elementCount: 10,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (convex to object)",
      nd: 1.834,
      vd: 37.2,
      fl: -38.32276059,
      glass: "834372 — dense lanthanum flint (catalog vendor unresolved)",
      role: "Strong front negative member of G1; expands the wide-angle field before the corrective rear members.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -65.238044111,
      glass: "583594 — barium/dense crown (catalog vendor unresolved)",
      role: "Lower-index negative element carrying the R4A asphere; moderates wide-angle aberrations in G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus (convex to object)",
      nd: 1.80518,
      vd: 25.4,
      fl: 57.125120653,
      glass: "805254 — dense flint (catalog vendor unresolved)",
      role: "Positive rear member that balances the two negative elements while leaving G1 net negative.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.6,
      fl: 51.970334537,
      glass: "652585 — lanthanum crown (catalog vendor unresolved)",
      role: "Pre-stop positive member of G2 and principal front collector for the positive variator group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus (convex to object)",
      nd: 1.48749,
      vd: 70.2,
      fl: 93.012637283,
      glass: "487702 — low-index fluor/light crown (catalog vendor unresolved)",
      role: "Low-dispersion post-stop positive member of G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (convex to object)",
      nd: 1.48749,
      vd: 70.2,
      fl: 60.371789681,
      glass: "487702 — low-index fluor/light crown (catalog vendor unresolved)",
      role: "Second low-dispersion positive member reinforcing G2 power after the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      fl: -19.17854567,
      glass: "847239 — very dense high-dispersion flint (catalog vendor unresolved)",
      role: "Strong negative corrector inside G2, paired in air with the following positive singlet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.5,
      fl: 38.808139451,
      glass: "755275 — dense flint (catalog vendor unresolved)",
      role: "Rear positive member completing the corrected net-positive G2 assembly.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus (convex to image)",
      nd: 1.834,
      vd: 37.2,
      fl: -152.250261052,
      glass: "834372 — dense lanthanum flint (catalog vendor unresolved)",
      role: "Negative front component of the fixed, weakly positive rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus (convex to image)",
      nd: 1.60311,
      vd: 60.7,
      fl: 130.397935962,
      glass: "603607 — dense crown (catalog vendor unresolved)",
      role: "Positive rear component that leaves the fixed cemented doublet with weak net positive power.",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 48.61, d: 1.9, nd: 1.834, elemId: 1, sd: 16.0 },
    { label: "2", R: 18.94, d: 8.2, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "3", R: -181.44, d: 2.0, nd: 1.58313, elemId: 2, sd: 14.5 },
    { label: "4A", R: 48.33, d: 1.9, nd: 1.0, elemId: 0, sd: 14.6 },
    { label: "5", R: 35.69, d: 3.7, nd: 1.80518, elemId: 3, sd: 14.8 },
    { label: "6", R: 151.92, d: 32.482, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "7", R: 37.83, d: 3.1, nd: 1.6516, elemId: 4, sd: 10.2 },
    { label: "8", R: -312.56, d: 1.9, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "STO", R: 1e15, d: 0.7, nd: 1.0, elemId: 0, sd: 8.273310313 },
    { label: "10", R: 24.59, d: 3.85, nd: 1.48749, elemId: 5, sd: 10.2 },
    { label: "11", R: 50.97, d: 0.28, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "12", R: 20.69, d: 4.4, nd: 1.48749, elemId: 6, sd: 9.7 },
    { label: "13", R: 64.81, d: 1.07, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "14", R: -211.31, d: 2.9, nd: 1.84666, elemId: 7, sd: 8.5 },
    { label: "15", R: 17.7, d: 2.4, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "16", R: 140.47, d: 2.6, nd: 1.7552, elemId: 8, sd: 8.6 },
    { label: "17", R: -36.74, d: 2.675, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "19", R: -45.0, d: 1.8, nd: 1.834, elemId: 9, sd: 11.8 },
    { label: "20", R: -70.97, d: 2.3, nd: 1.60311, elemId: 10, sd: 12.0 },
    { label: "21", R: -37.76, d: 37.723823459, nd: 1.0, elemId: 0, sd: 12.2 },
  ],

  asph: {
    "4A": {
      K: 0,
      A4: -3.886e-6,
      A6: -1.883e-9,
      A8: -3.39e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom and focus ── */
  zoomPositions: [29.09, 50.0, 67.89],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "6": [
      [32.482, 39.011825727],
      [9.303, 15.703985415],
      [0.807, 7.336672846],
    ],
    "17": [
      [2.675, 2.675],
      [19.743, 19.743],
      [34.35, 34.35],
    ],
    "21": [
      [37.723823459, 37.723823459],
      [37.721319957, 37.721319957],
      [37.716715209, 37.716715209],
    ],
  },
  varLabels: [
    ["6", "D6 / FOCUS"],
    ["17", "D17 + D18"],
    ["21", "BF"],
  ],
  focusDescription:
    "Front-group focus (G1). The patent publishes infinity zoom spacings only; close-focus D6 values are a constrained paraxial reconstruction solved at the official rounded 0.39 m MFD, with the image-plane reference assumed. The reconstruction is not a published production cam law.",

  /* ── Diagram annotations ── */
  groups: [
    { text: "G1 (-) / FOCUS", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+) / ZOOM", fromSurface: "7", toSurface: "17" },
    { text: "G3 (weak +) / FIXED", fromSurface: "19", toSurface: "21" },
  ],
  doublets: [{ text: "D1", fromSurface: "19", toSurface: "21" }],

  /* ── Product and display controls ── */
  closeFocusM: 0.39,
  nominalFno: [3.5, 4.0, 4.5],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22, 29],
  maxFstop: 29,
  apertureBlades: 5,
  yScFill: 0.7,
} satisfies LensDataInput;

export default LENS_DATA;
