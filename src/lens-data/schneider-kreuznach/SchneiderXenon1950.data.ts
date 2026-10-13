import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER XENON 50mm f/1.9                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: CH 346706, Example 1 / Zahlentabelle A, Günter Klemt.            ║
 * ║  Six elements / four air-separated groups; all surfaces are spherical.    ║
 * ║                                                                            ║
 * ║  SCALE: Table A is published at f′ = 100 mm. Every dimensional optical    ║
 * ║  value is scaled ×0.5 for the fixed 50 mm job target. Indices and νd are  ║
 * ║  unchanged. No asphere coefficients exist.                                ║
 * ║                                                                            ║
 * ║  APERTURE: The patent publishes d5 = 21.21 mm as "Blendenraum" but gives ║
 * ║  no physical iris coordinate or diameter. After scaling, the 10.605 mm    ║
 * ║  r5→r6 air space is split equally around STO (5.3025 + 5.3025 mm). This   ║
 * ║  midpoint is a modeling inference, not a measured patent dimension. STO   ║
 * ║  sd is calibrated paraxially to the patent's f/2 design value. Agreement  ║
 * ║  with f/2 therefore does not independently verify an unpublished iris     ║
 * ║  diameter. The marketed f/1.9 designation remains separate.               ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: Estimated, not published. Fig. 1 supplies the optical ║
 * ║  rim proportions; spherical ray envelopes provide a clearance check.    ║
 * ║  Front and rear cemented rims use 12.0 and 10.7 mm respectively, with   ║
 * ║  reduced stop-facing apertures below the drawn bevels. See audit log.    ║
 * ║                                                                            ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. CH 346706 Table A has no focus-motion ║
 * ║  states. closeFocusM = 0.8 is retained only as secondary product-history  ║
 * ║  metadata; no internal spacing law is inferred from it.                   ║
 * ║                                                                            ║
 * ║  PRODUCT CORRELATION: The 50 mm / f/1.9 Xenon identification remains an  ║
 * ║  inference rather than manufacturer-confirmed attribution of Table A.     ║
 * ║  Format: the correlated production Xenon 1.9/50 covers 35 mm still film.  ║
 * ║  Production mount and exact patent/product attribution remain uncertain. ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "schneider-xenon-50f19",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH XENON 50mm f/1.9",
  subtitle: "CH 346706 — Example 1 / Table A; uniformly scaled ×0.5",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 50.003 mm", "DESIGN f/2.0 (marketed f/1.9)", "ALL-SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.00311336153039,
  lensMounts: ["exakta", "m42"],
  imageFormat: "135-full-frame",
  apertureMarketing: 1.9,
  apertureDesign: 2,
  patentNumber: "CH 346706",
  patentAuthors: ["Günter Klemt"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1960,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.2,
      indexReference: "d",
      fl: 61.40628,
      glass: "670472 — barium flint; H-ZBaF52 compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Front positive element of exchangeable subsystem I.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.69347,
      vd: 53.5,
      indexReference: "d",
      fl: 36.38799,
      glass: "LAC13 — compatible spectral proxy (historical supplier/melt unresolved)",
      cemented: "D1",
      role: "Positive member of the front cemented pair in subsystem I.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.66446,
      vd: 35.9,
      indexReference: "d",
      fl: -23.252703,
      glass: "664359 — BASF2-class barium flint (supplier not identified by patent)",
      cemented: "D1",
      role: "Negative member of the front cemented pair; completes exchangeable subsystem I.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.6,
      indexReference: "d",
      fl: -17.500451,
      glass: "640346 — TIM27/FD7/F51 dense-flint class (supplier not identified by patent)",
      cemented: "D2",
      role: "Negative member of the rear cemented pair in fixed subsystem II.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.8,
      indexReference: "d",
      fl: 22.51774,
      glass: "658508 — SSK5/BSM25/BACED-class crown (supplier not identified by patent)",
      cemented: "D2",
      role: "Positive member of the rear cemented pair in fixed subsystem II.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Near-Plano-Convex Positive",
      nd: 1.74472,
      vd: 44.7,
      indexReference: "d",
      fl: 50.26074,
      glass: "N-LAF2 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Rear positive element of fixed subsystem II.",
    },
  ],

  surfaces: [
    { label: "1", R: 27.415, d: 3.355, nd: 1.67003, elemId: 1, sd: 13.95 },
    { label: "2", R: 78.125, d: 0.635, nd: 1, elemId: 0, sd: 13.5 },
    { label: "3", R: 19.835, d: 4.465, nd: 1.69347, elemId: 2, sd: 12 },
    { label: "4", R: 84.16, d: 1.76, nd: 1.66446, elemId: 3, sd: 12 },
    { label: "5", R: 12.945, d: 5.3025, nd: 1, elemId: 0, sd: 9.8 },
    // STO position inferred as the midpoint of the scaled r5→r6 "Blendenraum"; no source iris coordinate is published.
    { label: "STO", R: 1e15, d: 5.3025, nd: 1, elemId: 0, sd: 8.833460260468508 },
    { label: "6", R: -15.1, d: 1.585, nd: 1.6398, elemId: 4, sd: 9.2 },
    { label: "7", R: 45.09, d: 5.94, nd: 1.65844, elemId: 5, sd: 10.7 },
    { label: "8", R: -20.935, d: 0.105, nd: 1, elemId: 0, sd: 10.7 },
    { label: "9", R: 1179.685, d: 2.625, nd: 1.74472, elemId: 6, sd: 11.7 },
    { label: "10", R: -38.62, d: 36.2, nd: 1, elemId: 0, sd: 11.85 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "5" },
    { text: "II", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 0.8,
  focusDescription:
    "Focus travel is not modeled. Table A publishes no focus-motion state; 0.8 m is secondary metadata only.",

  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
