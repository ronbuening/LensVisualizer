import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — PENTAX SUPER-TAKUMAR 35mm f/2                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Prescription source: US 3,506,336, preferred embodiment.          ║
 * ║  The patent does not name the commercial lens; the association     ║
 * ║  with the compact eight-element Super-Takumar 35mm f/2 is a        ║
 * ║  convergent production identification documented in the analysis.  ║
 * ║                                                                    ║
 * ║  PRESCRIPTION AND SCALING:                                         ║
 * ║    Table 1 and Claim 1 contain the same 15-surface prescription    ║
 * ║    at F = 100. Every radius and axial lens dimension is scaled     ║
 * ║    uniformly ×0.35. Computed production-scale EFL: 34.999868 mm.   ║
 * ║                                                                    ║
 * ║  FOCUS MODEL:                                                      ║
 * ║    The patent supplies only the infinity prescription. The data    ║
 * ║    model translates the complete optical assembly as a unit to     ║
 * ║    reach the manufacturer-listed 0.40 m minimum distance. The      ║
 * ║    paraxial solution is 3.997056 mm extension and 40.383684 mm     ║
 * ║    close-focus BFD.                                                 ║
 * ║                                                                    ║
 * ║  APERTURE STOP:                                                    ║
 * ║    The patent specifies only that the diaphragm lies between L4   ║
 * ║    and L5. The model divides that 6.30 mm scaled gap equally. A    ║
 * ║    9.207362 mm physical stop semi-diameter gives an f/2 entrance   ║
 * ║    pupil for this assumed stop station.                             ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS:                                                   ║
 * ║    The patent omits clear apertures. Values are inferred from      ║
 * ║    paraxial marginal/chief-ray envelopes and checked against the   ║
 * ║    49 mm filter envelope, edge thickness, spherical rim angle,     ║
 * ║    element diameter ratios, cross-gap clearance, and Figure 1.     ║
 * ║                                                                    ║
 * ║  GLASS ANNOTATIONS:                                                ║
 * ║    Names are nearest current OHARA catalog counterparts to the     ║
 * ║    patent nd/νd pairs. They are dispersion proxies, not claims     ║
 * ║    about undocumented 1960s production melts.                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-super-takumar-35mm-f2",
  maker: "Pentax",
  name: "PENTAX SUPER-TAKUMAR 35mm f/2",
  subtitle: "US 3,506,336 — YASUO TAKAHASHI / ASAHI OPTICAL",
  specs: ["8 ELEMENTS / 7 GROUPS", "f = 35.000 mm", "f/2", "ANGLE OF VIEW 62°", "ALL-SPHERICAL"],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.999868,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["m42"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,506,336",
  patentAuthors: ["Yasuo Takahashi"],
  patentAssignees: ["Asahi Kogaku Kogyo Co Ltd"],
  patentYear: 1970,
  elementCount: 8,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.2,
      fl: -58.334,
      glass: "S-BAL35 (OHARA current counterpart; Δνd = -0.06; historical melt unconfirmed)",
      apd: false,
      role: "Front negative retrofocus element; establishes the extended back-focus geometry.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.762,
      vd: 40.3,
      fl: 153.435,
      glass: "S-LAM55 (OHARA current counterpart; Δνd = -0.20; historical melt unconfirmed)",
      apd: false,
      role: "Weak positive transition element ahead of the principal positive lens.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.77252,
      vd: 49.6,
      fl: 38.569,
      glass: "S-LAH66 (OHARA current counterpart; Δnd = -0.00002, Δνd ≈ 0.00; historical melt unconfirmed)",
      apd: false,
      role: "Primary positive-power element in the front portion of the main group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.53172,
      vd: 48.9,
      fl: 612.389,
      glass: "S-TIL6 (OHARA current counterpart; Δνd = -0.06; historical melt unconfirmed)",
      apd: false,
      role: "Nearly afocal meniscus used chiefly for aberration balancing before the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.7,
      fl: -22.039,
      glass: "S-TIH13 (OHARA current counterpart; Δνd = +0.09; historical melt unconfirmed)",
      apd: false,
      role: "Strong dispersive negative element in the rear correction section.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -32.136,
      glass: "S-LAH60V (OHARA current counterpart; Δνd = +0.01; historical melt unconfirmed)",
      apd: false,
      role: "Negative component of the cemented rear doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.77252,
      vd: 49.6,
      fl: 18.901,
      glass: "S-LAH66 (OHARA current counterpart; Δnd = -0.00002, Δνd ≈ 0.00; historical melt unconfirmed)",
      apd: false,
      role: "Positive component of the cemented rear doublet; the complete doublet is net positive.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.77252,
      vd: 49.6,
      fl: 60.923,
      glass: "S-LAH66 (OHARA current counterpart; Δnd = -0.00002, Δνd ≈ 0.00; historical melt unconfirmed)",
      apd: false,
      role: "Rear positive meniscus completing the main positive group and field correction.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 157.5, d: 2.45, nd: 1.58913, elemId: 1, sd: 22.5 },
    { label: "2", R: 28.04795, d: 16.45, nd: 1.0, elemId: 0, sd: 21.4 },
    { label: "3", R: -805.0, d: 3.5, nd: 1.762, elemId: 2, sd: 16.9 },
    { label: "4", R: -102.2819, d: 0.7, nd: 1.0, elemId: 0, sd: 16.4 },
    { label: "5", R: 33.495, d: 6.3, nd: 1.77252, elemId: 3, sd: 16.1 },
    { label: "6", R: -247.6138, d: 0.35, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "7", R: 28.0, d: 2.8, nd: 1.53172, elemId: 4, sd: 13.2 },
    { label: "8", R: 29.5708, d: 3.15, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "STO", R: 1e15, d: 3.15, nd: 1.0, elemId: 0, sd: 9.207362 },
    { label: "9", R: -32.025, d: 2.275, nd: 1.74077, elemId: 5, sd: 11.5 },
    { label: "10", R: 34.30875, d: 2.8, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "11", R: 350.0, d: 1.4, nd: 1.834, elemId: 6, sd: 12.2 },
    { label: "12", R: 24.85, d: 6.65, nd: 1.77252, elemId: 7, sd: 12.6 },
    { label: "13", R: -31.2739, d: 0.175, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "14", R: -210.0, d: 3.5, nd: 1.77252, elemId: 8, sd: 16.0 },
    { label: "15", R: -38.7268, d: 36.386628, nd: 1.0, elemId: 0, sd: 16.4 },
  ],

  asph: {},

  /* ── Unit-focus model ── */
  var: {
    "15": [36.386628, 40.383684],
  },
  varLabels: [["15", "BF"]],
  focusDescription:
    "Unit-focus model: the complete optical assembly translates. The patent supplies only infinity data; close focus is paraxially derived for the manufacturer-specified 0.40 m MFD.",

  /* ── Diagram annotations ── */
  groups: [
    { text: "FRONT NEGATIVE", fromSurface: "1", toSurface: "2" },
    { text: "POSITIVE MAIN GROUP", fromSurface: "3", toSurface: "15" },
  ],
  doublets: [{ text: "D1", fromSurface: "11", toSurface: "13" }],

  /* ── Product / UI parameters ── */
  closeFocusM: 0.4,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  yScFill: 0.64,
} satisfies LensDataInput;

export default LENS_DATA;
