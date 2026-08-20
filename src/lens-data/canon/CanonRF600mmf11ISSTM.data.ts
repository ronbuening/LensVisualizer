import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 600mm f/11 IS STM                                 ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2020-173349 A, Numerical Example 1.                         ║
 * ║  Correlation target: production Canon RF600mm F11 IS STM.               ║
 * ║  Patent model: 10 elements / 7 air-separated groups; 3 focus units;      ║
 * ║  one diffractive phase surface at S2; no geometric aspheres; no scaling. ║
 * ║                                                                            ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. The patent's printed          ║
 * ║  infinity gaps d5=16.25 mm and d7=22.19 mm contradict its own EFL, BFD, ║
 * ║  principal-point, and entrance-pupil data. Under the published single-L2 ║
 * ║  translation constraint d5+d7=38.44 mm, Stage 1 solved d5=18.4407559 mm ║
 * ║  and d7=19.9992441 mm. This file uses the disclosed source-precision     ║
 * ║  base d5=18.44 mm / d7=20.00 mm and retains the published near row       ║
 * ║  d5=3.50 mm / d7=34.94 mm.                                               ║
 * ║                                                                            ║
 * ║  The source-precision base computes EFL=581.639114 mm; the patent prints ║
 * ║  581.65 mm. Marketing remains separate at 600 mm / fixed f/11.           ║
 * ║  nominalFno is the patent/model value 11.31 and controls stop geometry.  ║
 * ║                                                                            ║
 * ║  Surface 2 carries the patent's rotationally symmetric diffractive phase ║
 * ║  polynomial at a disclosed d-line reference wavelength (587.6 nm),       ║
 * ║  diffraction order +1. It is not a geometric asphere and is not entered  ║
 * ║  in `asph`.                                                               ║
 * ║                                                                            ║
 * ║  Semi-diameters are modeling values, not patent clear apertures. The     ║
 * ║  patent publishes none. They were derived from sequential y-nu marginal  ║
 * ║  and chief-ray envelopes at infinity and the published near-focus row,   ║
 * ║  using the default 0.60× field as a containment target, then constrained ║
 * ║  by element edge thickness, actual rim slope, shared-gap sag intrusion,  ║
 * ║  the production 82 mm filter diameter, and rendered Fig. 1 proportions. ║
 * ║  A 600 dpi Fig. 1 audit tightens E3 to 12.2 mm and E4 to 12.7 mm;       ║
 * ║  the fixed stop remains pupil-calibrated rather than figure-measured.    ║
 * ║  The front element is the intended vignetting boundary for the extreme   ║
 * ║  off-axis pupil edge; default LensVisualizer fractions remain contained. ║
 * ║                                                                            ║
 * ║  Glass note: the patent supplies nd and vd only. Vendor identity and     ║
 * ║  nC/nF/ng/dPgF are unresolved, so elements retain six-digit class labels ║
 * ║  and no vendor spectral data are invented.                               ║
 * ║                                                                            ║
 * ║  Production optical IS is product metadata only; Example 1 publishes no  ║
 * ║  decentered stabilization motion, so no IS optical movement is modeled.  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf600mmf11-is-stm",
  maker: "Canon",
  name: "CANON RF 600mm f/11 IS STM",
  subtitle: "JP 2020-173349 A — Numerical Example 1; production correlation to RF600mm F11 IS STM",
  specs: [
    "10 ELEMENTS / 7 GROUPS",
    "600mm f/11 (MARKETED)",
    "EXAMPLE 1: 581.65mm f/11.31",
    "S2 DIFFRACTIVE PHASE SURFACE",
    "SINGLE-ELEMENT INNER FOCUS",
  ],
  focalLengthMarketing: 600,
  focalLengthDesign: 581.639114,
  apertureMarketing: 11,
  apertureDesign: 11.31,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2020-173349 A",
  patentAuthors: ["Maki Yokoya", "Tomohiro Ino"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2020,
  elementCount: 10,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 89.475284,
      glass: "487702 class (vendor unresolved)",
      cemented: "D1",
      role: "Front positive element; the rear cemented interface also carries the DO phase interaction.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.59551,
      vd: 39.2,
      fl: -246.071357,
      glass: "596392 class (vendor unresolved)",
      cemented: "D1",
      role: "Negative partner in the front cemented DO group.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -97.028769,
      glass: "835427 class (vendor unresolved)",
      role: "Rear element of fixed positive lens unit L1.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 201.044124,
      glass: "487702 class (vendor unresolved)",
      role: "Single translating positive focus element forming lens unit L2.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.90043,
      vd: 37.4,
      fl: -23.602837,
      glass: "900374 class (vendor unresolved)",
      cemented: "D2",
      role: "Negative member of the first rear cemented doublet in lens unit L3.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.7,
      fl: 27.148865,
      glass: "654397 class (vendor unresolved)",
      cemented: "D2",
      role: "Positive member of the first rear cemented doublet in lens unit L3.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.7,
      fl: 28.539796,
      glass: "654397 class (vendor unresolved)",
      cemented: "D3",
      role: "Positive member of the second rear cemented doublet in lens unit L3.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.6,
      fl: -34.943037,
      glass: "593686 class (vendor unresolved)",
      cemented: "D3",
      role: "Negative member of the second rear cemented doublet in lens unit L3.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.5,
      fl: -39.371451,
      glass: "804465 class (vendor unresolved)",
      role: "Air-spaced negative rear corrector in lens unit L3.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      fl: 98.012225,
      glass: "596392 class (vendor unresolved)",
      role: "Final positive rear element ahead of the long back-focus space.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 56.252, d: 12.2, nd: 1.48749, elemId: 1, sd: 29.0 },
    {
      label: "2",
      R: -180.408,
      d: 2.77,
      nd: 1.59551,
      elemId: 2,
      sd: 29.0,
      diffractive: {
        kind: "radial-polynomial",
        referenceWavelengthNm: 587.6,
        diffractionOrder: 1,
        terms: [
          { radialPower: 2, coefficient: -4.69717e-5 },
          { radialPower: 4, coefficient: 1.13471e-8 },
          { radialPower: 6, coefficient: -2.69625e-12 },
          { radialPower: 8, coefficient: -4.35136e-15 },
          { radialPower: 10, coefficient: 2.95662e-18 },
        ],
      },
    },
    { label: "3", R: 785.004, d: 59.15, nd: 1.0, elemId: 0, sd: 29.0 },
    { label: "4", R: -42.901, d: 1.3, nd: 1.83481, elemId: 3, sd: 12.2 },
    { label: "5", R: -92.466, d: 18.44, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "6", R: 98.007, d: 2.09, nd: 1.48749, elemId: 4, sd: 12.7 },
    { label: "7", R: 1e15, d: 20.0, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "STO", R: 1e15, d: 6.44, nd: 1.0, elemId: 0, sd: 8.31053 },
    { label: "9", R: -42.741, d: 1.0, nd: 1.90043, elemId: 5, sd: 8.7 },
    { label: "10", R: 42.741, d: 3.85, nd: 1.65412, elemId: 6, sd: 8.7 },
    { label: "11", R: -29.3, d: 12.2, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "12", R: 107.876, d: 3.7, nd: 1.65412, elemId: 7, sd: 8.2 },
    { label: "13", R: -22.269, d: 0.8, nd: 1.59282, elemId: 8, sd: 8.2 },
    { label: "14", R: 300.803, d: 0.64, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "15", R: -75.518, d: 0.8, nd: 1.804, elemId: 9, sd: 8.2 },
    { label: "16", R: 54.756, d: 1.33, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "17", R: 63.816, d: 2.1, nd: 1.59551, elemId: 10, sd: 8.3 },
    { label: "18", R: -675.205, d: 138.06, nd: 1.0, elemId: 0, sd: 8.3 },
  ],

  asph: {},

  /* Disclosed constrained reconstruction at infinity; published close-focus row retained. */
  var: {
    "5": [18.44, 3.5],
    "7": [20.0, 34.94],
  },
  varLabels: [
    ["5", "D5"],
    ["7", "D7"],
  ],

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (+) FOCUS", fromSurface: "6", toSurface: "7" },
    { text: "L3 (-)", fromSurface: "STO", toSurface: "18" },
  ],
  doublets: [
    { text: "D1 / DO", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "12", toSurface: "14" },
  ],

  closeFocusM: 4.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: inner focus by the single positive L2 element (S6-S7), moving objectward " +
    "toward close focus. The patent's raw infinity d5/d7=16.25/22.19 mm is internally inconsistent; " +
    "the authored infinity base is the disclosed source-precision 18.44/20.00 mm solution under d5+d7=38.44 mm. " +
    "The close endpoint is the published 3.50/34.94 mm row and computes about 4.49474 m object-to-image distance.",

  nominalFno: 11.31,
  fstopSeries: [11.31],
  maxFstop: 11.31,

  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
