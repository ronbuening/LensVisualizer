import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 24mm f/1.4 L VCM                                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2025-15010 A, Numerical Example 3.                          ║
 * ║  Correlation target: production Canon RF24mm F1.4 L VCM.                ║
 * ║  Patent model: 15 elements / 11 air-separated components, grouped into  ║
 * ║  five functional lens groups; 2 aspherical surfaces; no scaling.        ║
 * ║                                                                            ║
 * ║  Focus status: PUBLISHED. L2 moves imageward and L4 moves objectward.    ║
 * ║  The source publishes four focus rows:                                   ║
 * ║    β=0.00:   d9=1.20, d11=8.91, d15=6.78, d22=1.85 mm                  ║
 * ║    β=-0.022: d9=1.69, d11=8.41, d15=6.40, d22=2.23 mm                  ║
 * ║    β=-0.10:  d9=3.37, d11=6.73, d15=5.08, d22=3.55 mm                  ║
 * ║    β=-0.17:  d9=4.82, d11=5.28, d15=3.91, d22=4.73 mm                  ║
 * ║  LensDataInput stores prime-lens focus as infinity/close endpoint pairs, ║
 * ║  so `var` contains the first and last published rows. The two published  ║
 * ║  intermediate rows are retained here and in the audit and are verified  ║
 * ║  independently by the Stage-2 calculation script.                       ║
 * ║                                                                            ║
 * ║  The patent prints f=24.72 mm and Fno=1.46. The rounded prescription     ║
 * ║  independently computes EFL=24.713123 mm at infinity. Marketing remains ║
 * ║  separate at 24 mm / f/1.4. nominalFno=1.46 controls pupil geometry.     ║
 * ║                                                                            ║
 * ║  Patent GB surfaces 28-29 are a separate optical block/filter equivalent ║
 * ║  and are excluded. Their optical effect is normalized to a 15.18 mm      ║
 * ║  air-equivalent spacing from surface 27 to IMG, preserving patent BF/TL. ║
 * ║                                                                            ║
 * ║  Semi-diameters are modeling values, not patent clear apertures. The     ║
 * ║  patent publishes none. They were derived from the patent Fig. 5 section ║
 * ║  and calibrated stop/pupil geometry, then checked with exact meridional  ║
 * ║  ray envelopes in all four published focus states plus edge thickness,   ║
 * ║  actual rim slope, shared-gap intrusion, conic limits, and render-trim   ║
 * ║  proxies. A 600 dpi Figure 5 audit refined the cemented E9/E10 rim from  ║
 * ║  13.5 to 11.7 mm. The physical stop radius is calibrated to F/1.46 and   ║
 * ║  is therefore inferred rather than independently published.              ║
 * ║                                                                            ║
 * ║  Glass note: the patent supplies nd and νd only. Vendor identity and     ║
 * ║  nC/nF/ng/dPgF are unresolved, so elements retain coordinate-class       ║
 * ║  labels and no vendor spectral data are imported.                        ║
 * ║                                                                            ║
 * ║  The patent permits optional lateral L3 stabilization, but Canon lists   ║
 * ║  optical IS as not provided on the production lens. No IS motion is      ║
 * ║  authored. Patent Table 1's BF/f=0.47 is retained only in the audit;     ║
 * ║  published BF/f=15.18/24.72=0.61408.                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-24mm-f14-l-vcm",
  maker: "Canon",
  name: "CANON RF 24mm f/1.4 L VCM",
  subtitle: "JP 2025-15010 A — Numerical Example 3; production correlation to RF24mm F1.4 L VCM",
  specs: [
    "15 ELEMENTS / 11 GROUPS",
    "24mm f/1.4 (MARKETED)",
    "EXAMPLE 3: 24.72mm f/1.46",
    "2 ASPHERICAL SURFACES",
    "PUBLISHED TWO-GROUP INTERNAL FOCUS",
  ],
  focalLengthMarketing: 24,
  focalLengthDesign: 24.713123,
  apertureMarketing: 1.4,
  apertureDesign: 1.46,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2025-15010 A",
  patentAuthors: ["Kenji Shinohara", "Yuki Matsuba"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2025,
  elementCount: 15,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: -52.148246,
      glass: "593670 class (vendor unresolved)",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.8,
      fl: -35.631525,
      glass: "548458 light-flint class (vendor unresolved)",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      fl: 24.869542,
      glass: "764485 high-index crown class (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: -57.252937,
      glass: "855248 high-index flint class (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      fl: 43.795312,
      glass: "001255 high-index class (vendor unresolved)",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      fl: -167.877978,
      glass: "620363 flint class (vendor unresolved)",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      fl: 27.259062,
      glass: "764485 high-index crown class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.7,
      fl: -33.678789,
      glass: "720347 special-flint class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 55.175782,
      glass: "497816 low-dispersion class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      fl: -20.214523,
      glass: "770297 high-index flint class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 39.737184,
      glass: "497816 low-dispersion class (vendor unresolved)",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.804,
      vd: 46.5,
      fl: 37.876794,
      glass: "804465 high-index crown class (vendor unresolved)",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      fl: 53.875285,
      glass: "923209 high-index flint class (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      fl: -36.93535,
      glass: "770297 high-index flint class (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      fl: -170.525195,
      glass: "654397 special-flint class (vendor unresolved)",
    },
  ],

  /* ── Surfaces, object to image ── */
  surfaces: [
    { label: "1", R: 72.288, d: 1.3, nd: 1.59349, elemId: 1, sd: 19.1 },
    { label: "2", R: 21.526, d: 13.44, nd: 1.0, elemId: 0, sd: 19.1 },
    { label: "3", R: -29.716, d: 1.22, nd: 1.54814, elemId: 2, sd: 15.5 },
    { label: "4", R: 57.813, d: 3.61, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "5", R: 84.776, d: 10.56, nd: 1.76385, elemId: 3, sd: 16.0 },
    { label: "6", R: -23.162, d: 1.3, nd: 1.85478, elemId: 4, sd: 16.0 },
    { label: "7", R: -45.112, d: 0.19, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "8", R: 60.45, d: 4.94, nd: 2.00069, elemId: 5, sd: 16.0 },
    { label: "9", R: -152.845, d: 1.2, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "10", R: 147.08, d: 1.49, nd: 1.62004, elemId: 6, sd: 15.4 },
    { label: "11", R: 60.717, d: 8.91, nd: 1.0, elemId: 0, sd: 15.4 },
    { label: "STO", R: 1e15, d: 1.99, nd: 1.0, elemId: 0, sd: 12.877511407324 },
    { label: "13", R: 1242.125, d: 7.29, nd: 1.76385, elemId: 7, sd: 13.5 },
    { label: "14", R: -21.123, d: 1.09, nd: 1.72047, elemId: 8, sd: 13.5 },
    { label: "15", R: -166.674, d: 6.78, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "16", R: -33.613, d: 5.21, nd: 1.497, elemId: 9, sd: 11.7 },
    { label: "17", R: -15.879, d: 1.0, nd: 1.77047, elemId: 10, sd: 11.7 },
    { label: "18", R: 834.948, d: 1.99, nd: 1.0, elemId: 0, sd: 11.7 },
    { label: "19", R: 49.688, d: 8.75, nd: 1.497, elemId: 11, sd: 17.1 },
    { label: "20", R: -30.861, d: 0.2, nd: 1.0, elemId: 0, sd: 17.1 },
    { label: "21A", R: 80.138, d: 7.0, nd: 1.804, elemId: 12, sd: 17.2 },
    { label: "22A", R: -47.206, d: 1.85, nd: 1.0, elemId: 0, sd: 17.2 },
    { label: "23", R: 130.745, d: 4.3, nd: 1.92286, elemId: 13, sd: 16.5 },
    { label: "24", R: -78.962, d: 1.25, nd: 1.77047, elemId: 14, sd: 16.5 },
    { label: "25", R: 44.799, d: 4.93, nd: 1.0, elemId: 0, sd: 15.6 },
    { label: "26", R: -80.385, d: 1.2, nd: 1.65412, elemId: 15, sd: 15.6 },
    { label: "27", R: -289.464, d: 15.18, nd: 1.0, elemId: 0, sd: 15.6 },
  ],

  /* ── Aspheres: standard LensVisualizer K convention; K=0 is spherical base ── */
  asph: {
    "21A": {
      K: 0,
      A4: -7.6813e-6,
      A6: -9.12882e-10,
      A8: 2.65012e-11,
      A10: -7.89662e-14,
      A12: 1.31928e-16,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: 4.42473e-6,
      A6: -2.12367e-9,
      A8: 3.53558e-11,
      A10: -6.57718e-14,
      A12: 1.35297e-16,
      A14: 0,
    },
  },

  /* ── Published focus endpoints; intermediate source rows are in the header/audit ── */
  var: {
    "9": [1.2, 4.82],
    "11": [8.91, 5.28],
    "15": [6.78, 3.91],
    "22A": [1.85, 4.73],
  },
  varLabels: [
    ["9", "D9"],
    ["11", "D11"],
    ["15", "D15"],
    ["22A", "D22"],
  ],
  focusDescription:
    "PUBLISHED — L2 moves imageward and L4 moves objectward. `var` stores the patent infinity and " +
    "β=-0.17 endpoints; the β=-0.022 and β=-0.10 rows remain in the header/audit and are independently verified.",

  /* ── Patent functional groups and cemented components ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "9" },
    { text: "L2 (-) FOCUS", fromSurface: "10", toSurface: "11" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "15" },
    { text: "L4 (+) FOCUS", fromSurface: "16", toSurface: "22A" },
    { text: "L5 (-)", fromSurface: "23", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.24,
  nominalFno: 1.46,
  fstopSeries: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.58,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
