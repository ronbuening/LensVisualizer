import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — LEICA SUMMILUX-M 35mm f/1.4 ASPHERICAL (v1 correlation)     ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 5,161,060 A, FIG. 1 preferred embodiment (job-card Example 1).║
 * ║ 9 elements / 5 components; aspherical source surfaces 4 and 13.          ║
 * ║ Native prescription coordinates are e-line ne / νe.                      ║
 * ║ No dimensional scale change is applied.                                  ║
 * ║                                                                            ║
 * ║ ASPHERES: the patent uses p(s)=ΣK(n)(s²/2)^n and states K(1)=1/Rvertex.  ║
 * ║ LensVisualizer therefore uses R=1/K(1), K=-1 as an algebraic carrier,    ║
 * ║ and A_(2n)=K(n)/2^n for n>=2. K=-1 is not a patent conic claim.           ║
 * ║                                                                            ║
 * ║ APERTURE: the patent publishes the stop plane and K=1.4 but no physical  ║
 * ║ stop diameter. STO sd=9.7547730405 mm is calibrated from this implemented║
 * ║ equation-consistent prescription so the paraxial entrance pupil gives    ║
 * ║ f/1.4. This is modeled calibration, not independent diaphragm evidence.   ║
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
 */

const LENS_DATA = {
  key: "leica-summilux-m-35mm-f14-aspherical",
  maker: "Leica",
  name: "LEICA SUMMILUX-M 35mm f/1.4 ASPHERICAL",
  subtitle: "US 5,161,060 A — FIG. 1 preferred embodiment; inferred correlation to Leica 11873",
  specs: [
    "9 ELEMENTS / 5 GROUPS",
    "35mm MARKETING; EFL ≈ 35.412mm",
    "f/1.4 (CALIBRATED STOP)",
    "64° PUBLISHED FULL FIELD",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.41172228163587,
  apertureMarketing: 1.4,
  apertureDesign: 1.4,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,161,060 A",
  patentAuthors: ["Walter Watz"],
  patentAssignees: ["Leica Camera GmbH"],
  patentYear: 1992,
  elementCount: 9,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "30",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.503,
      vd: 56.1,
      indexReference: "e",
      fl: -40.1995677520623,
      glass: "S-FTL10 class (coordinate-compatible spectral proxy; native e 1.503/56.1; supplier/melt unproven)",
      cemented: "G1",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "32",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.82,
      vd: 45.1,
      indexReference: "e",
      fl: 28.381578700730543,
      glass: "TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven)",
      cemented: "G1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "34",
      label: "Element 3",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.82,
      vd: 45.1,
      indexReference: "e",
      fl: 23.923721645688538,
      glass: "TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven)",
      cemented: "G2",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "36",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.694,
      vd: 31,
      indexReference: "e",
      fl: -18.422232230934757,
      glass: "N-SF8 class (coordinate-compatible spectral proxy; native e 1.694/31; supplier/melt unproven)",
      cemented: "G2",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "38",
      label: "Element 5",
      type: "Positive Meniscus (concave to object)",
      nd: 1.792,
      vd: 47.2,
      indexReference: "e",
      fl: 59.64438212939319,
      glass: "N-LAF21 class (coordinate-compatible spectral proxy; native e 1.792/47.2; supplier/melt unproven)",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "40",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.652,
      vd: 33.6,
      indexReference: "e",
      fl: -26.711215410698497,
      glass: "SF2 class (coordinate-compatible spectral proxy; native e 1.652/33.6; supplier/melt unproven)",
      cemented: "G4",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "42",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.82,
      vd: 45.1,
      indexReference: "e",
      fl: 22.469051791476744,
      glass: "TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven)",
      cemented: "G4",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "44",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.82,
      vd: 45.1,
      indexReference: "e",
      fl: 25.85952214277832,
      glass: "TAFD10 class (coordinate-compatible spectral proxy; native e 1.82/45.1; supplier/melt unproven)",
      cemented: "G5",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "46",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.624,
      vd: 36.1,
      indexReference: "e",
      fl: -24.788499876377877,
      glass: "F2 class (coordinate-compatible spectral proxy; native e 1.624/36.1; supplier/melt unproven)",
      cemented: "G5",
    },
  ],

  surfaces: [
    { label: "1", R: -110.114, d: 2.01, nd: 1.503, elemId: 1, sd: 16.8 },
    { label: "2", R: 24.92, d: 7.4, nd: 1.82, elemId: 2, sd: 16.8 },
    { label: "3", R: -305, d: 0.1, nd: 1, elemId: 0, sd: 16.8 },
    { label: "4A", R: 28.34627813368105, d: 6.07, nd: 1.82, elemId: 3, sd: 12.6 },
    { label: "5", R: -57.56, d: 1.61, nd: 1.694, elemId: 4, sd: 12.6 },
    { label: "6", R: 16.624, d: 4.34, nd: 1, elemId: 0, sd: 12.6 },
    { label: "STO", R: 1e15, d: 1.66, nd: 1, elemId: 0, sd: 9.754773040485604 },
    { label: "8", R: -197.204, d: 6.07, nd: 1.792, elemId: 5, sd: 10.2 },
    { label: "9", R: -38.628, d: 1.5, nd: 1, elemId: 0, sd: 10.2 },
    { label: "10", R: -21.142, d: 1.72, nd: 1.652, elemId: 6, sd: 12 },
    { label: "11", R: 101.985, d: 5.86, nd: 1.82, elemId: 7, sd: 12 },
    { label: "12", R: -21.905, d: 0.11, nd: 1, elemId: 0, sd: 12 },
    { label: "13A", R: 60.02761270184285, d: 5.94, nd: 1.82, elemId: 8, sd: 14.2 },
    { label: "14", R: -31.325, d: 2.05, nd: 1.624, elemId: 9, sd: 14.2 },
    { label: "15", R: 31.325, d: 19.595, nd: 1, elemId: 0, sd: 14.2 },
  ],

  asph: {
    "4A": {
      K: -1,
      A4: -9.7585e-6,
      A6: -3.925875e-8,
      A8: 3.2073125e-10,
      A10: -2.1098125e-12,
      A12: 4.71109375e-15,
      A14: 0,
    },
    "13A": {
      K: -1,
      A4: -5.85875e-6,
      A6: 4.007375e-9,
      A8: 1.285e-11,
      A10: -1.7418125e-13,
      A12: 3.7078125e-16,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],

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

  closeFocusM: 0.7,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — one published optical state only; 0.7 m and about 1:17.5 are source performance statements, not an authored movement law.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
