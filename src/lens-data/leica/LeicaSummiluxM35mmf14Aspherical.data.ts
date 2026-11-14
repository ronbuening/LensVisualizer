import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — LEICA SUMMILUX-M 35mm f/1.4 ASPHERICAL (v1 correlation)     ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 5,161,060 A, FIG. 1 preferred embodiment (job-card Example 1).║
 * ║ 9 elements / 5 components; aspherical source surfaces 4 and 13.          ║
 * ║ Native prescription coordinates are e-line ne / νe.                      ║
 * ║ No dimensional scale change is applied.                                  ║
 * ║                                                                            ║
 * ║ ASPHERES: the patent uses p(s)=ΣK(n)(s²/2)^n over the chord s from the    ║
 * ║ vertex (s² = h² + p²) and states K(1)=1/Rvertex. LensVisualizer uses      ║
 * ║ R=1/K(1) with K=-1 plus A4–A20 fitted (least squares) to that implicit   ║
 * ║ law over each clear radius; residual < 1e-5 µm. Not printed values.      ║
 * ║                                                                            ║
 * ║ APERTURE: the patent publishes the stop plane and K=1.4 but no physical  ║
 * ║ stop diameter. The stop radius is derived from the design f-number,      ║
 * ║ f/1.4, through this implemented equation-consistent prescription. This   ║
 * ║ is modeled calibration, not independent diaphragm evidence.              ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: no source SDs are published. Modeled SDs are based on    ║
 * ║ exact-ray envelopes (full on-axis pupil and the default 0.6-field bundle)║
 * ║ and the relative clear-aperture ordering visible in patent FIG. 1. They  ║
 * ║ pass the Stage-2 portable edge, rim-slope, conic, gap, and containment    ║
 * ║ checks. Production LensVisualizer render diagnostics remain integration.  ║
 * ║                                                                            ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. The source provides one prescription  ║
 * ║ plus 0.7 m / about 1:17.5 performance statements, but no movement law.    ║
 * ║                                                                            ║
 * ║ SOURCE DISCREPANCIES RETAINED:                                             ║
 * ║ - prose intercept distance 19 mm vs tabulated surface-15 spacing 19.595 mm║
 * ║ - prose/claim calls G5 negative; this tabulated model computes slightly + ║
 * ║ - printed asphere radii are rounded relative to the stated K(1)=1/R rule  ║
 * ║ Product 11873 correlation is strong but not manufacturer-confirmed here.  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Image plane kept as a best-focus plane (LENS_DATA_SPEC Image-Plane
 * Consistency): paraxial offset +0.041496 mm (18 depths; BFL 19.636496
 * against the published 19.595 mm intercept); real-ray axial best focus
 * −0.045 mm. FIG. 2's on-axis 546 nm transverse aberration is drawn near this
 * plane: it rises slightly and crosses zero at a quarter to a third of the
 * plotted aperture. The model crosses at 26 % of the pupil at 19.595 mm, at
 * 60 % at real-ray best focus, and never at paraxial focus.
 */

const LENS_DATA = {
  schema: 2,
  key: "leica-summilux-m-35mm-f14-aspherical",
  maker: "Leica",
  name: "LEICA SUMMILUX-M 35mm f/1.4 ASPHERICAL",
  subtitle: "US 5,161,060 A — FIG. 1 preferred embodiment; inferred correlation to Leica 11873",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 5 GROUPS",
      "35mm MARKETING; EFL ≈ 35.412mm",
      "f/1.4 (CALIBRATED STOP)",
      "64° PUBLISHED FULL FIELD",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 9,
    groupCount: 5,
    focalLengthMm: { marketing: 35, design: 35.41172228163587 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "US 5,161,060 A",
    example: { label: "Sole example", id: null },
    patentYear: 1992,
    authors: ["Walter Watz"],
    assignees: ["Leica Camera GmbH"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.503,
      vd: 56.1,
      indexReference: "e",
      focalLengthMm: -40.1995677520623,
      glass: "S-FTL10 class (coordinate-compatible spectral proxy; native e 1.503/56.1; supplier/melt unproven)",
      diagramLabel: "30",
      cemented: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.82,
      vd: 45.1,
      indexReference: "e",
      focalLengthMm: 28.381578700730543,
      glass: "TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven)",
      diagramLabel: "32",
      cemented: "G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.82,
      vd: 45.1,
      indexReference: "e",
      focalLengthMm: 23.923721645688538,
      glass: "TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven)",
      diagramLabel: "34",
      cemented: "G2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.694,
      vd: 31,
      indexReference: "e",
      focalLengthMm: -18.422232230934757,
      glass: "N-SF8 class (coordinate-compatible spectral proxy; native e 1.694/31; supplier/melt unproven)",
      diagramLabel: "36",
      cemented: "G2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus (concave to object)",
      nd: 1.792,
      vd: 47.2,
      indexReference: "e",
      focalLengthMm: 59.64438212939319,
      glass: "N-LAF21 class (coordinate-compatible spectral proxy; native e 1.792/47.2; supplier/melt unproven)",
      diagramLabel: "38",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.652,
      vd: 33.6,
      indexReference: "e",
      focalLengthMm: -26.711215410698497,
      glass: "SF2 class (coordinate-compatible spectral proxy; native e 1.652/33.6; supplier/melt unproven)",
      diagramLabel: "40",
      cemented: "G4",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.82,
      vd: 45.1,
      indexReference: "e",
      focalLengthMm: 22.469051791476744,
      glass: "TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven)",
      diagramLabel: "42",
      cemented: "G4",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.82,
      vd: 45.1,
      indexReference: "e",
      focalLengthMm: 25.85952214277832,
      glass: "TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven)",
      diagramLabel: "44",
      cemented: "G5",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.624,
      vd: 36.1,
      indexReference: "e",
      focalLengthMm: -24.788499876377877,
      glass: "F2 class (coordinate-compatible spectral proxy; native e 1.624/36.1; supplier/melt unproven)",
      diagramLabel: "46",
      cemented: "G5",
    },
  ],

  surfaces: [
    { label: "1", R: -110.114, d: 2.01, sd: 16.8, medium: 1 },
    { label: "2", R: 24.92, d: 7.4, sd: 16.8, medium: 2 },
    { label: "3", R: -305, d: 0.1, sd: 16.8 },
    {
      label: "4A",
      R: 28.34627813368105,
      d: 6.07,
      sd: 12.6,
      medium: 3,
      // K = -1 plus A4–A20 fitted (least squares) to the patent's chord law over the clear radius; not printed values.
      asphere: {
        K: -1,
        A4: -0.000004270330164888788,
        A6: -4.799941771676951e-8,
        A8: 2.5717007664108087e-10,
        A10: -1.521722448526045e-12,
        A12: 7.887500301297801e-16,
        A14: 4.302406366051071e-18,
        A16: 4.378254029830555e-20,
        A18: -8.036784091990732e-23,
        A20: -4.048100207442673e-26,
      },
    },
    { label: "5", R: -57.56, d: 1.61, sd: 12.6, medium: 4 },
    { label: "6", R: 16.624, d: 4.34, sd: 12.6 },
    { label: "STO", R: "flat", d: 1.66 },
    { label: "8", R: -197.204, d: 6.07, sd: 10.2, medium: 5 },
    { label: "9", R: -38.628, d: 1.5, sd: 10.2 },
    { label: "10", R: -21.142, d: 1.72, sd: 12, medium: 6 },
    { label: "11", R: 101.985, d: 5.86, sd: 12, medium: 7 },
    { label: "12", R: -21.905, d: 0.11, sd: 12 },
    {
      label: "13A",
      R: 60.02761270184285,
      d: 5.94,
      sd: 14.2,
      medium: 8,
      // K = -1 plus A4–A20 fitted (least squares) to the patent's chord law over the clear radius; not printed values.
      asphere: {
        K: -1,
        A4: -0.000005280842246332671,
        A6: 2.461343605047417e-9,
        A8: 1.527448013744133e-11,
        A10: -1.7079014960741882e-13,
        A12: 2.838222197893344e-16,
        A14: 2.830118784387705e-19,
        A16: -1.9235682919069156e-22,
        A18: 5.804681244062897e-26,
        A20: -2.3948586414689003e-28,
      },
    },
    { label: "14", R: -31.325, d: 2.05, sd: 14.2, medium: 9 },
    { label: "15", R: 31.325, d: 19.595, sd: 14.2 },
  ],

  focus: {
    closeFocusM: 0.7,
    description:
      "Focus travel is not modeled: one published optical state only; 0.7 m and about 1:17.5 are source performance statements, not an authored movement law.",
  },

  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4A", toSurface: "6" },
    { text: "G3", fromSurface: "8", toSurface: "9" },
    { text: "G4", fromSurface: "10", toSurface: "12" },
    { text: "G5", fromSurface: "13A", toSurface: "15" },
  ],
  doublets: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4A", toSurface: "6" },
    { text: "G4", fromSurface: "10", toSurface: "12" },
    { text: "G5", fromSurface: "13A", toSurface: "15" },
  ],

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
