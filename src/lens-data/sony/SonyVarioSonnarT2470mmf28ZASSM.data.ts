import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY VARIO-SONNAR T* 24-70mm f/2.8 ZA SSM                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2008/0198475 A1, Example 3 / third numerical embodiment, Tables 7-9.   ║
 * ║ 17 physical elements / 13 air-separated groups / 2 aspherical surfaces.           ║
 * ║ Zoom groups: Gr1 positive, Gr2 negative, Gr3 positive, Gr4 positive.               ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that Gr2 alone focuses ║
 * ║ but publishes no finite-distance spacing table. Close states below solve Gr2-only  ║
 * ║ translation at Sony's 0.34 m MFD while conserving d6+d14 and fixing the sensor.    ║
 * ║                                                                                    ║
 * ║ SOURCE CORRECTIONS / MODELING DECISIONS                                            ║
 * ║ - r7 is +98.067 mm. The rendered Table 7 page governs over a minus-sign OCR error. ║
 * ║ - Table 8 prints tele d6=26.688 mm. The model uses 27.688 mm, matching the exact    ║
 * ║   duplicate prescription in US 2008/0165428 A1 and restoring f≈67.95 mm.           ║
 * ║ - Four 0.010 mm patent cement-media rows are not modeled as synthetic elements.    ║
 * ║   Their thicknesses are folded into the downstream physical element: r3, r18, r30,║
 * ║   and r32 are omitted, while G2/G9/G15/G16 center thicknesses become 7.710, 8.550, ║
 * ║   8.110, and 1.460 mm. Cemented junctions carry the downstream element index/id.   ║
 * ║ - r35-to-image d is a computed paraxial BFD; the patent does not tabulate it.      ║
 * ║ - Gr2 reverses slightly from wide to mid, then moves objectward toward tele.       ║
 * ║ - No uniform scaling is applied.                                                    ║
 * ║                                                                                    ║
 * ║ SEMI-DIAMETERS                                                                     ║
 * ║ The patent publishes no clear-aperture table. SDs are inferred from the modeled    ║
 * ║ wide-open marginal/chief-ray envelope, Y'=21.6 mm coverage, Fig. 9 proportions,    ║
 * ║ and geometry limits, then independently checked for edge thickness, actual rim     ║
 * ║ slope, cross-gap intrusion, full-field chief-ray containment, and geometric       ║
 * ║ clearance relevant to render trim. STO.sd is the inferred wide-state base radius.  ║
 * ║ Zoom-state wide-open stop radii are governed by nominalFno.                         ║
 * ║                                                                                    ║
 * ║ GLASS / SPECTRAL DATA                                                              ║
 * ║ The patent publishes nd and νd but no vendor names or line indices. Glass names,   ║
 * ║ nC/nF/ng, and dPgF are catalog representative matches and remain distinct from     ║
 * ║ patent prescription data. G4/G16 use an S-LAH66 representative curve: their       ║
 * ║ 1.77250/49.36 source pair combines the 773496 family's d-line index with the       ║
 * ║ S-LAH66 e-line Abbe number. The authored prescription values remain unchanged,     ║
 * ║ and the supplier is intentionally unresolved.                                      ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-vario-sonnar-t-24-70mm-f28-za-ssm",
  maker: "Sony",
  name: "SONY VARIO-SONNAR T* 24-70mm f/2.8 ZA SSM",
  subtitle: "US 2008/0198475 A1 Example 3 — corrected tele d6; constrained Gr2 focus reconstruction",
  specs: [
    "17 ELEMENTS / 13 GROUPS",
    "24-70mm",
    "f/2.8",
    "84°-34°",
    "2 ASPHERICAL SURFACES",
    "INNER FOCUS (Gr2)",
  ],

  focalLengthMarketing: [24, 70],
  focalLengthDesign: [24.703341, 67.96348],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2008/0198475 A1",
  patentAuthors: ["Tetsuya Arimoto", "Yasushi Yamamoto"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2008,
  elementCount: 17,
  groupCount: 13,

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "G1",
      label: "G1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -99.165442,
      glass: "S-TIH53 (OHARA) — 847238 class",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      dPgF: 0.0175,
      role: "Front negative member of the cemented Gr1 doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "G2",
      label: "G2",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: 97.461059,
      glass: "S-LAH55V (OHARA) — 835427 class representative",
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
      dPgF: -0.0075,
      role: "Positive member of the cemented Gr1 doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "G3",
      label: "G3",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: 103.038849,
      glass: "S-LAH55V (OHARA) — 835427 class representative",
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
      dPgF: -0.0075,
      role: "Rear positive meniscus of the positive first zoom group.",
    },
    {
      id: 4,
      name: "G4",
      label: "G4",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.7725,
      vd: 49.36,
      fl: -25.115016,
      glass: "773496 — S-LAH66 coordinate model (supplier unresolved; source νe=49.36)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      dPgF: -0.0092,
      role: "Front negative meniscus of the focusing/negative second zoom group; surface 7A is aspherical.",
    },
    {
      id: 5,
      name: "G5",
      label: "G5",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      fl: -26.635109,
      glass: "N-LASF44 (SCHOTT) — 804465 class",
      nC: 1.79901,
      nF: 1.8163,
      ng: 1.82594,
      dPgF: -0.0084,
      role: "Strong negative element in Gr2.",
    },
    {
      id: 6,
      name: "G6",
      label: "G6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 28.471182,
      glass: "S-TIH53 (OHARA) — 847238 class",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      dPgF: 0.0175,
      role: "Positive correction element inside the net-negative Gr2 focus group.",
    },
    {
      id: 7,
      name: "G7",
      label: "G7",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -62.350909,
      glass: "N-LAF34 (SCHOTT) — 773496 class",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79196,
      dPgF: -0.0085,
      role: "Rear negative meniscus of Gr2.",
    },
    {
      id: 8,
      name: "G8",
      label: "G8",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -53.948959,
      glass: "N-LASF31A (SCHOTT) — 883408 class",
      nC: 1.87656,
      nF: 1.89822,
      ng: 1.9105,
      dPgF: -0.0085,
      role: "Negative front member of the cemented positive doublet in Gr3.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "G9",
      label: "G9",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.34,
      fl: 26.12262,
      glass: "J-LAK10 (HIKARI) — 720503 class representative",
      nC: 1.715672,
      nF: 1.729995,
      ng: 1.737911,
      dPgF: -0.0073,
      role: "Positive rear member of the cemented Gr3 doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "G10",
      label: "G10",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: 88.728173,
      glass: "S-LAH55V (OHARA) — 835427 class representative",
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
      dPgF: -0.0075,
      role: "Positive relay element in Gr3.",
    },
    {
      id: 11,
      name: "G11",
      label: "G11",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.32,
      fl: -67.581251,
      glass: "N-LASF46B (SCHOTT) — 904313 class",
      nC: 1.89526,
      nF: 1.92411,
      ng: 1.9413,
      dPgF: 0.0045,
      role: "Rear negative meniscus of the positive third zoom group.",
    },
    {
      id: 12,
      name: "G12",
      label: "G12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 44.455813,
      glass: "S-FPL51 (OHARA) — 497816 class representative",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      role: "Low-dispersion positive element at the front of Gr4.",
    },
    {
      id: 13,
      name: "G13",
      label: "G13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 75.253008,
      glass: "S-FPL51 (OHARA) — 497816 class representative",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      role: "Second low-dispersion positive element in Gr4.",
    },
    {
      id: 14,
      name: "G14",
      label: "G14",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.32,
      fl: -46.772272,
      glass: "N-LASF46B (SCHOTT) — 904313 class",
      nC: 1.89526,
      nF: 1.92411,
      ng: 1.9413,
      dPgF: 0.0045,
      role: "Front negative member of the cemented negative triplet in Gr4.",
      cemented: "T1",
    },
    {
      id: 15,
      name: "G15",
      label: "G15",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 37.356356,
      glass: "N-FK5 (SCHOTT) — 487704 class representative",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
      dPgF: 0.0036,
      role: "Positive center member of the cemented negative triplet in Gr4.",
      cemented: "T1",
    },
    {
      id: 16,
      name: "G16",
      label: "G16",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.7725,
      vd: 49.36,
      fl: -27.939396,
      glass: "773496 — S-LAH66 coordinate model (supplier unresolved; source νe=49.36)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      dPgF: -0.0092,
      role: "Rear negative member of the cemented Gr4 triplet; surface 33A is aspherical.",
      cemented: "T1",
    },
    {
      id: 17,
      name: "G17",
      label: "G17",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.34,
      fl: 76.44147,
      glass: "NBFD10 (HOYA) — 834373 class",
      nC: 1.82742,
      nF: 1.84975,
      ng: 1.86268,
      dPgF: -0.0021,
      role: "Rear positive meniscus completing Gr4.",
    },
  ],

  /* ── Sequential optical surfaces ── */
  surfaces: [
    { label: "1", R: 504.081, d: 1.8, nd: 1.84666, elemId: 1, sd: 34.0 },
    { label: "2", R: 71.854, d: 7.71, nd: 1.83481, elemId: 2, sd: 32.0 },
    { label: "4", R: 584.881, d: 0.15, nd: 1.0, elemId: 0, sd: 31.0 },
    { label: "5", R: 50.971, d: 6.5, nd: 1.83481, elemId: 3, sd: 27.0 },
    { label: "6", R: 117.843, d: 2.778, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "7A", R: 98.067, d: 1.25, nd: 1.7725, elemId: 4, sd: 16.0 },
    { label: "8", R: 16.107, d: 9.33, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "9", R: -30.479, d: 1.0, nd: 1.8042, elemId: 5, sd: 11.0 },
    { label: "10", R: 73.121, d: 0.29, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "11", R: 49.985, d: 6.96, nd: 1.84666, elemId: 6, sd: 11.0 },
    { label: "12", R: -43.586, d: 2.66, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "13", R: -19.82, d: 1.0, nd: 1.7725, elemId: 7, sd: 10.5 },
    { label: "14", R: -34.419, d: 15.202, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "STO", R: 1e15, d: 1.7, nd: 1.0, elemId: 0, sd: 9.253019 },
    { label: "16", R: 44.559, d: 1.0, nd: 1.883, elemId: 8, sd: 12.5 },
    { label: "17", R: 22.781, d: 8.55, nd: 1.72, elemId: 9, sd: 12.5 },
    { label: "19", R: -90.909, d: 0.15, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "20", R: 141.075, d: 3.06, nd: 1.83481, elemId: 10, sd: 13.5 },
    { label: "21", R: -154.416, d: 2.02, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "22", R: -46.164, d: 1.1, nd: 1.90366, elemId: 11, sd: 13.5 },
    { label: "23", R: -191.269, d: 8.124, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "24", R: 36.148, d: 7.7, nd: 1.497, elemId: 12, sd: 15.5 },
    { label: "25", R: -52.812, d: 0.25, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "26", R: 66.234, d: 4.2, nd: 1.497, elemId: 13, sd: 15.0 },
    { label: "27", R: -84.106, d: 0.76, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "28", R: -100.0, d: 0.95, nd: 1.90366, elemId: 14, sd: 14.0 },
    { label: "29", R: 73.539, d: 8.11, nd: 1.48749, elemId: 15, sd: 13.5 },
    { label: "31", R: -23.33, d: 1.46, nd: 1.7725, elemId: 16, sd: 13.5 },
    { label: "33A", R: 296.121, d: 5.0, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "34", R: -61.29, d: 3.88, nd: 1.834, elemId: 17, sd: 15.0 },
    { label: "35", R: -32.148, d: 36.835196, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  asph: {
    "7A": {
      K: 0,
      A4: 1.2736009e-5,
      A6: -6.7365016e-9,
      A8: -7.1808301e-11,
      A10: 7.8825874e-13,
      A12: -2.6948768e-15,
      A14: 3.7189316e-18,
    },
    "33A": {
      K: 0,
      A4: 1.7495023e-5,
      A6: 3.8801483e-9,
      A8: -1.1234198e-10,
      A10: 1.0535738e-12,
      A12: -4.6012946e-15,
      A14: 7.3037374e-18,
    },
  },

  /* Gr2-only focus: d6 decreases and d14 increases by equal amounts; d23 and BFD are zoom-only. */
  var: {
    "6": [
      [2.778, 0.605423],
      [12.92, 10.162859],
      [27.688, 23.501529],
    ],
    "14": [
      [15.202, 17.374577],
      [7.708, 10.465141],
      [1.0, 5.186471],
    ],
    "23": [
      [8.124, 8.124],
      [3.25, 3.25],
      [0.5, 0.5],
    ],
    "35": [
      [36.835196, 36.835196],
      [48.345846, 48.345846],
      [65.305075, 65.305075],
    ],
  },
  varLabels: [
    ["6", "D6"],
    ["14", "D14"],
    ["23", "D23"],
    ["35", "BF"],
  ],

  zoomPositions: [24.7, 37.98, 67.95],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "Gr1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "Gr2 (−)", fromSurface: "7A", toSurface: "14" },
    { text: "Gr3 (+)", fromSurface: "16", toSurface: "23" },
    { text: "Gr4 (+)", fromSurface: "24", toSurface: "35" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "D2", fromSurface: "16", toSurface: "19" },
    { text: "T1", fromSurface: "28", toSurface: "33A" },
  ],

  closeFocusM: 0.34,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: Gr2 alone translates for focus, as stated by the patent. Close states are solved at " +
    "Sony's 0.34 m MFD with d6+d14 conserved at each zoom position; all other groups and the sensor plane stay fixed.",

  nominalFno: [2.88, 2.88, 2.9],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
