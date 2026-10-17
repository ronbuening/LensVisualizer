import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ slope, cross-gap intrusion, full-field chief-ray containment, and geometric        ║
 * ║ clearance relevant to render trim. The stop radius is derived from the design      ║
 * ║ f-number at each zoom station, using nominalFno.                                   ║
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
  schema: 2,
  key: "sony-vario-sonnar-t-24-70mm-f28-za-ssm",
  maker: "Sony",
  name: "SONY VARIO-SONNAR T* 24-70mm f/2.8 ZA SSM",
  subtitle: "US 2008/0198475 A1 Example 3 — corrected tele d6; constrained Gr2 focus reconstruction",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: ["17 ELEMENTS / 13 GROUPS", "24-70mm", "f/2.8", "84°-34°", "2 ASPHERICAL SURFACES", "INNER FOCUS (Gr2)"],
    elementCount: 17,
    groupCount: 13,
    focalLengthMm: { marketing: [24, 70], design: [24.703341, 67.96348] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 2008/0198475 A1",
    patentYear: 2008,
    authors: ["Tetsuya Arimoto", "Yasushi Yamamoto"],
    assignees: ["Sony Corporation"],
  },

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "G1",
      label: "G1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -99.165442,
      glass: "S-TIH53 (OHARA) — 847238 class",
      role: "Front negative member of the cemented Gr1 doublet.",
      diagramLabel: "G1",
      cemented: "D1",
      dPgF: 0.0175,
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 2,
      name: "G2",
      label: "G2",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: 97.461059,
      glass: "S-LAH55V (OHARA) — 835427 class representative",
      role: "Positive member of the cemented Gr1 doublet.",
      diagramLabel: "G2",
      cemented: "D1",
      dPgF: -0.0075,
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
    },
    {
      id: 3,
      name: "G3",
      label: "G3",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: 103.038849,
      glass: "S-LAH55V (OHARA) — 835427 class representative",
      role: "Rear positive meniscus of the positive first zoom group.",
      diagramLabel: "G3",
      dPgF: -0.0075,
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
    },
    {
      id: 4,
      name: "G4",
      label: "G4",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.7725,
      vd: 49.36,
      focalLengthMm: -25.115016,
      glass: "773496 — S-LAH66 coordinate model (supplier unresolved; source νe=49.36)",
      role: "Front negative meniscus of the focusing/negative second zoom group; surface 7A is aspherical.",
      diagramLabel: "G4",
      dPgF: -0.0092,
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 5,
      name: "G5",
      label: "G5",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -26.635109,
      glass: "N-LASF44 (SCHOTT) — 804465 class",
      role: "Strong negative element in Gr2.",
      diagramLabel: "G5",
      dPgF: -0.0084,
      nC: 1.79901,
      nF: 1.8163,
      ng: 1.82594,
    },
    {
      id: 6,
      name: "G6",
      label: "G6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 28.471182,
      glass: "S-TIH53 (OHARA) — 847238 class",
      role: "Positive correction element inside the net-negative Gr2 focus group.",
      diagramLabel: "G6",
      dPgF: 0.0175,
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 7,
      name: "G7",
      label: "G7",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -62.350909,
      glass: "N-LAF34 (SCHOTT) — 773496 class",
      role: "Rear negative meniscus of Gr2.",
      diagramLabel: "G7",
      dPgF: -0.0085,
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79196,
    },
    {
      id: 8,
      name: "G8",
      label: "G8",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -53.948959,
      glass: "883408 — S-LAH58 coordinate model (supplier unresolved)",
      role: "Negative front member of the cemented positive doublet in Gr3.",
      diagramLabel: "G8",
      cemented: "D2",
      dPgF: -0.0085,
      nC: 1.87656,
      nF: 1.89822,
      ng: 1.9105,
    },
    {
      id: 9,
      name: "G9",
      label: "G9",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.34,
      focalLengthMm: 26.12262,
      glass: "J-LAK10 (HIKARI) — 720503 class representative",
      role: "Positive rear member of the cemented Gr3 doublet.",
      diagramLabel: "G9",
      cemented: "D2",
      dPgF: -0.0073,
      nC: 1.715672,
      nF: 1.729995,
      ng: 1.737911,
    },
    {
      id: 10,
      name: "G10",
      label: "G10",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: 88.728173,
      glass: "S-LAH55V (OHARA) — 835427 class representative",
      role: "Positive relay element in Gr3.",
      diagramLabel: "G10",
      dPgF: -0.0075,
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
    },
    {
      id: 11,
      name: "G11",
      label: "G11",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.32,
      focalLengthMm: -67.581251,
      glass: "N-LASF46B (SCHOTT) — 904313 class",
      role: "Rear negative meniscus of the positive third zoom group.",
      diagramLabel: "G11",
      dPgF: 0.0045,
      nC: 1.89526,
      nF: 1.92411,
      ng: 1.9413,
    },
    {
      id: 12,
      name: "G12",
      label: "G12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 44.455813,
      glass: "S-FPL51 (OHARA) — 497816 class representative",
      role: "Low-dispersion positive element at the front of Gr4.",
      diagramLabel: "G12",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 13,
      name: "G13",
      label: "G13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 75.253008,
      glass: "S-FPL51 (OHARA) — 497816 class representative",
      role: "Second low-dispersion positive element in Gr4.",
      diagramLabel: "G13",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 14,
      name: "G14",
      label: "G14",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.32,
      focalLengthMm: -46.772272,
      glass: "N-LASF46B (SCHOTT) — 904313 class",
      role: "Front negative member of the cemented negative triplet in Gr4.",
      diagramLabel: "G14",
      cemented: "T1",
      dPgF: 0.0045,
      nC: 1.89526,
      nF: 1.92411,
      ng: 1.9413,
    },
    {
      id: 15,
      name: "G15",
      label: "G15",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: 37.356356,
      glass: "N-FK5 (SCHOTT) — 487704 class representative",
      role: "Positive center member of the cemented negative triplet in Gr4.",
      diagramLabel: "G15",
      cemented: "T1",
      dPgF: 0.0036,
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
    },
    {
      id: 16,
      name: "G16",
      label: "G16",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.7725,
      vd: 49.36,
      focalLengthMm: -27.939396,
      glass: "773496 — S-LAH66 coordinate model (supplier unresolved; source νe=49.36)",
      role: "Rear negative member of the cemented Gr4 triplet; surface 33A is aspherical.",
      diagramLabel: "G16",
      cemented: "T1",
      dPgF: -0.0092,
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 17,
      name: "G17",
      label: "G17",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.34,
      focalLengthMm: 76.44147,
      glass: "NBFD10 (HOYA) — 834373 class",
      role: "Rear positive meniscus completing Gr4.",
      diagramLabel: "G17",
      dPgF: -0.0021,
      nC: 1.82742,
      nF: 1.84975,
      ng: 1.86268,
    },
  ],

  /* ── Sequential optical surfaces ── */
  surfaces: [
    { label: "1", R: 504.081, d: 1.8, sd: 34.0, medium: 1 },
    { label: "2", R: 71.854, d: 7.71, sd: 32.0, medium: 2 },
    { label: "4", R: 584.881, d: 0.15, sd: 31.0 },
    { label: "5", R: 50.971, d: 6.5, sd: 27.0, medium: 3 },
    { label: "6", R: 117.843, sd: 25.0 },
    {
      label: "7A",
      R: 98.067,
      d: 1.25,
      sd: 16.0,
      medium: 4,
      asphere: {
        K: 0,
        A4: 1.2736009e-5,
        A6: -6.7365016e-9,
        A8: -7.1808301e-11,
        A10: 7.8825874e-13,
        A12: -2.6948768e-15,
        A14: 3.7189316e-18,
      },
    },
    { label: "8", R: 16.107, d: 9.33, sd: 13.2 },
    { label: "9", R: -30.479, d: 1.0, sd: 11.0, medium: 5 },
    { label: "10", R: 73.121, d: 0.29, sd: 11.0 },
    { label: "11", R: 49.985, d: 6.96, sd: 11.0, medium: 6 },
    { label: "12", R: -43.586, d: 2.66, sd: 10.5 },
    { label: "13", R: -19.82, d: 1.0, sd: 10.5, medium: 7 },
    { label: "14", R: -34.419, sd: 11.0 },
    { label: "STO", R: "flat", d: 1.7 },
    { label: "16", R: 44.559, d: 1.0, sd: 12.5, medium: 8 },
    { label: "17", R: 22.781, d: 8.55, sd: 12.5, medium: 9 },
    { label: "19", R: -90.909, d: 0.15, sd: 13.0 },
    { label: "20", R: 141.075, d: 3.06, sd: 13.5, medium: 10 },
    { label: "21", R: -154.416, d: 2.02, sd: 13.5 },
    { label: "22", R: -46.164, d: 1.1, sd: 13.5, medium: 11 },
    { label: "23", R: -191.269, sd: 14.0 },
    { label: "24", R: 36.148, d: 7.7, sd: 15.5, medium: 12 },
    { label: "25", R: -52.812, d: 0.25, sd: 15.5 },
    { label: "26", R: 66.234, d: 4.2, sd: 15.0, medium: 13 },
    { label: "27", R: -84.106, d: 0.76, sd: 14.5 },
    { label: "28", R: -100.0, d: 0.95, sd: 14.0, medium: 14 },
    { label: "29", R: 73.539, d: 8.11, sd: 13.5, medium: 15 },
    { label: "31", R: -23.33, d: 1.46, sd: 13.5, medium: 16 },
    {
      label: "33A",
      R: 296.121,
      d: 5.0,
      sd: 14.0,
      asphere: {
        K: 0,
        A4: 1.7495023e-5,
        A6: 3.8801483e-9,
        A8: -1.1234198e-10,
        A10: 1.0535738e-12,
        A12: -4.6012946e-15,
        A14: 7.3037374e-18,
      },
    },
    { label: "34", R: -61.29, d: 3.88, sd: 15.0, medium: 17 },
    { label: "35", R: -32.148, sd: 15.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 24.7, nominalFNumber: 2.88, label: "Wide" },
      { focalLengthMm: 37.98, nominalFNumber: 2.88 },
      { focalLengthMm: 67.95, nominalFNumber: 2.9, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.34,
    description:
      "CONSTRAINED_RECONSTRUCTION: Gr2 alone translates for focus, as stated by the patent. Close states are solved at " +
      "Sony's 0.34 m MFD with d6+d14 conserved at each zoom position; all other groups and the sensor plane stay fixed.",
  },

  /* (moved from var) Gr2-only focus: d6 decreases and d14 increases by equal amounts; d23 and BFD are zoom-only. */
  gaps: {
    "6": {
      label: "D6",
      values: [
        [2.778, 0.605423],
        [12.92, 10.162859],
        [27.688, 23.501529],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [15.202, 17.374577],
        [7.708, 10.465141],
        [1.0, 5.186471],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [8.124, 8.124],
        [3.25, 3.25],
        [0.5, 0.5],
      ],
    },
    "35": {
      label: "BF",
      values: [
        [36.835196, 36.835196],
        [48.345846, 48.345846],
        [65.305075, 65.305075],
      ],
    },
  },

  aperture: { fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

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

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
