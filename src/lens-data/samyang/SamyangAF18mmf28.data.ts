import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — SAMYANG AF 18mm f/2.8 FE                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2021/246545 A1, first embodiment (Samyang).       ║
 * ║  Compact full-frame rectilinear wide-angle design for Sony FE.     ║
 * ║  9 elements / 8 air-separated groups, 6 aspherical surfaces.       ║
 * ║  Focus: inner focus by G21 (L61 + L71) only; G11 and G31 fixed.   ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent Table 1 includes a rear plane-parallel filter/cover       ║
 * ║    plate after surface 18. Project convention excludes sensor       ║
 * ║    cover glass from `surfaces`, so surface 18 uses Table 3's        ║
 * ║    in-air rear spacing of 24.59 mm. The rounded prescription        ║
 * ║    independently traces to 24.611 mm paraxial BFD; the stored       ║
 * ║    value follows the patent's air-equivalent spacing.               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. Semi-diameters      ║
 * ║    below are estimated from paraxial marginal/chief-ray heights,    ║
 * ║    the Fig. 1 layout proportions, the 58 mm filter envelope,        ║
 * ║    aspheric conic limits, edge thickness, and cross-gap sag         ║
 * ║    clearance. The final pass narrows the focus group and rear        ║
 * ║    aspheric pair to follow the patent figure's visible taper. They  ║
 * ║    are renderer apertures, not manufacturer mechanical drawings.     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and refracting surfaces through final image     ║
 * ║    ✓ Aperture stop and variable focus gaps D1 / D2                 ║
 * ║    ✗ Excludes rear sensor cover glass / filter plate               ║
 * ║    ✗ Excludes barrel, motor, mount, and mechanical components      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "samyang-af-18mm-f28-fe",
  maker: "Samyang",
  name: "SAMYANG AF 18mm f/2.8 FE",
  subtitle: "WO 2021/246545 A1 — Example 1 / Samyang Optics",
  specs: [
    "9 elements / 8 groups",
    "f = 18.541 mm patent; 18.548 mm computed",
    "Fno = 2.85 design; f/2.8 marketed",
    "2ω = 100.1°",
    "3 aspherical / 3 ED / 2 HR elements",
  ],

  focalLengthMarketing: 18,
  focalLengthDesign: 18.548,
  apertureMarketing: 2.8,
  apertureDesign: 2.85,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentYear: 2021,
  elementCount: 9,
  groupCount: 8,
  apertureBlades: 7,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 100.1,
    maxTraceFieldDeg: 50.05,
  },

  focusDescription:
    "Inner focusing by the positive G21 group (L61 + L71). D1 decreases and D2 increases by 0.932 mm from infinity to 0.25 m, with G11 and G31 fixed.",

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front meniscus",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: -21.54,
      glass: "923209 dense flint (E-FDS1 / N-SF66 / H-ZF62 equivalent)",
      role: "Strong negative front collector for retrofocus back-focus extension.",
    },
    {
      id: 2,
      name: "L21",
      label: "L21 molded asphere",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.51423,
      vd: 63.699,
      fl: -66.45,
      glass: "Unmatched crown (514/637, PGM/BK7-family)",
      role: "Front-group aspheric correction of distortion and astigmatism.",
    },
    {
      id: 3,
      name: "L31",
      label: "L31 ED doublet front",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.6072,
      fl: -37.69,
      glass: "S-FPL51 / FCD1 class (ED fluorophosphate)",
      cemented: "D1",
      role: "Low-dispersion negative member of the front cemented doublet.",
    },
    {
      id: 4,
      name: "L41",
      label: "L41 HR doublet rear",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1342,
      fl: 16.6,
      glass: "001291 high-index lanthanum flint (TAFD55 / S-LAH99 class)",
      cemented: "D1",
      role: "High-index positive achromatizing partner for L31.",
    },
    {
      id: 5,
      name: "L51",
      label: "L51 rear ED meniscus",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6072,
      fl: 48.97,
      glass: "S-FPL51 / FCD1 class (ED fluorophosphate)",
      role: "Rear positive ED member of the fixed front group.",
    },
    {
      id: 6,
      name: "L61",
      label: "L61 focus asphere",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.83157,
      vd: 37.1993,
      fl: -44.42,
      glass: "S-LAH60 class (OHARA, close)",
      role: "Negative aspheric member of the moving focus group.",
    },
    {
      id: 7,
      name: "L71",
      label: "L71 focus ED positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6072,
      fl: 18.46,
      glass: "S-FPL51 / FCD1 class (ED fluorophosphate)",
      role: "Strong positive ED member dominating the focusing-group power.",
    },
    {
      id: 8,
      name: "L81",
      label: "L81 rear asphere",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.76951,
      vd: 49.2992,
      fl: 21.73,
      glass: "Unmatched lanthanum flint (770/493)",
      role: "Rear-group aspheric correction of residual astigmatism and distortion.",
    },
    {
      id: 9,
      name: "L91",
      label: "L91 field flattener",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      fl: -15.55,
      glass: "H-ZF4A class (CDGM, 728283 dense flint)",
      role: "Final negative field-flattener element.",
    },
  ],

  surfaces: [
    { label: "1", R: 25.899, d: 2.1, nd: 1.92286, elemId: 1, sd: 12.1 },
    { label: "2", R: 10.81, d: 4.998, nd: 1.0, elemId: 0, sd: 9.7 },
    { label: "3A", R: 61.208, d: 1.81, nd: 1.51423, elemId: 2, sd: 10.4 },
    { label: "4A", R: 21.709, d: 3.314, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "5", R: -123.315, d: 0.8, nd: 1.497, elemId: 3, sd: 8.7 },
    { label: "6", R: 22.134, d: 4.01, nd: 2.001, elemId: 4, sd: 9.6 },
    { label: "7", R: -60.582, d: 3.847, nd: 1.0, elemId: 0, sd: 9.7 },
    { label: "8", R: -40.26, d: 4.7, nd: 1.497, elemId: 5, sd: 8.8 },
    { label: "9", R: -15.756, d: 1.444, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "STO", R: 1e15, d: 4.666, nd: 1.0, elemId: 0, sd: 5.464 },
    { label: "11A", R: -19.9, d: 1.5, nd: 1.83157, elemId: 6, sd: 7.3 },
    { label: "12A", R: -44.623, d: 0.1, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "13", R: 70.193, d: 6.84, nd: 1.497, elemId: 7, sd: 8.1 },
    { label: "14", R: -10.215, d: 1.015, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "15A", R: -459.178, d: 3.77, nd: 1.76951, elemId: 8, sd: 9.0 },
    { label: "16A", R: -16.19, d: 0.15, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "17", R: -19.533, d: 0.7, nd: 1.72825, elemId: 9, sd: 10.3 },
    { label: "18", R: 27.335, d: 24.59, nd: 1.0, elemId: 0, sd: 11.1 },
  ],

  asph: {
    "3A": {
      K: 9.181343,
      A4: 2.265641e-4,
      A6: -2.349428e-6,
      A8: 1.5831092e-8,
      A10: -7.62145e-11,
      A12: 2.011977e-13,
      A14: 0,
    },
    "4A": {
      K: 2.030985,
      A4: 2.2840186e-4,
      A6: -2.5018168e-6,
      A8: 9.926601e-9,
      A10: -2.8220417e-11,
      A12: 4.1393623e-14,
      A14: 0,
    },
    "11A": {
      K: -2.535714,
      A4: -3.2364193e-5,
      A6: 4.2820552e-8,
      A8: -4.6609142e-8,
      A10: -5.5537973e-10,
      A12: 2.40072e-12,
      A14: 0,
    },
    "12A": {
      K: -4.354985,
      A4: 1.3354856e-4,
      A6: 1.0132676e-6,
      A8: -1.6043213e-8,
      A10: -5.498949e-10,
      A12: 7.7404421e-12,
      A14: 0,
    },
    "15A": {
      K: 10,
      A4: -2.9368249e-5,
      A6: 5.6907757e-8,
      A8: 2.8671109e-9,
      A10: 1.0762403e-11,
      A12: -1.960713e-13,
      A14: 0,
    },
    "16A": {
      K: -0.413514,
      A4: 1.5582113e-5,
      A6: -1.036763e-7,
      A8: 1.3333367e-9,
      A10: 2.341794e-11,
      A12: -1.7084264e-13,
      A14: 0,
    },
  },

  var: {
    STO: [4.666, 3.734],
    "14": [1.015, 1.947],
  },
  varLabels: [
    ["STO", "D1"],
    ["14", "D2"],
  ],

  groups: [
    { text: "G11 fixed", fromSurface: "1", toSurface: "9" },
    { text: "G21 focus", fromSurface: "11A", toSurface: "14" },
    { text: "G31 fixed", fromSurface: "15A", toSurface: "18" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  closeFocusM: 0.25,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  yScFill: 0.62,
  scFill: 0.6,
} satisfies LensDataInput;

export default LENS_DATA;
