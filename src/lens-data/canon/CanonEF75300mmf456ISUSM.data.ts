import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Canon EF 75-300mm f/4-5.6 IS USM; JP H08-062541 A, Numerical Example 2.
 * 15 spherical elements / 10 air-separated groups / 6 zoom groups (+ - + - + -).
 * Production correlation is inferred from element count, section, range and the G2 IS layout.
 * Source radii, glass indices/Abbe values and the five Table 3 zoom gaps are used unchanged.
 * No scaling, cover glass, aspheric coefficient, near-focus state or IS decentering is added.
 * R16 is the source stop, 3.0 mm behind R15. The stop radius is derived at each zoom station
 * from the design f-numbers f/4.1, f/4.7, f/5.8 (the aberration-plot apertures), not the
 * marketed f/4-5.6. A derived radius does not establish the unpublished physical diameter.
 * Image gaps (after R26) at the three printed stations, 41.50/52.17/62.10 mm, are the
 * computed paraxial back focus rounded to 0.01 mm; the patent prints no back focus.
 * ZOOM STATIONS: 3 printed (76.12 / 135.00 / 291.49 mm, Table 3; US 2001/0030809 A1
 * Example 9 prints the same three rows) + 13 solved. ¶0026 keeps G2 and G4 fixed, so
 * D10 + D16 = 35.30 mm and the G4-to-image distance stay constant. At the solved stations
 * D5 and D10 (G1 and G3 with the stop) and D18 (G5) follow quadratics in
 * s = ln(f/fW)/ln(fT/fW) through the three printed rows; D23 and the image gap are then
 * solved so G6 brings the paraxial image to the fixed image plane. They are calculated
 * first-order states, not cam data. Linear interpolation between stations leaves at most
 * 0.14 mm paraxial defocus (12.7 mm with the printed rows alone). G5 reverses near 160 mm,
 * as the printed D18 values require. nominalFno at solved stations holds the iris radius on
 * a straight line between the printed-station radii (12.91 to 12.74 mm).
 * All clear radii are estimates, guided by the axial/field bundle and Canon's
 * section. Front 28 mm radius fits behind the 58 mm filter; off-axis vignetting
 * is expected. R7 is limited to 13.7 mm by the thin R7-R8 air lens.
 * Every var entry repeats its infinity value: the patent gives no focus state.
 * Source N/nu leave the reference wavelength unstated. Glasses remain Unmatched;
 * dispersion uses approximate d-line Abbe estimates, with catalog classes left inactive.
 * The two conditional fo/fr values remain unresolved (see sourceErrata).
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-75-300mm-f4-56-is-usm",
  maker: "Canon",
  name: "CANON EF 75-300mm f/4-5.6 IS USM",
  subtitle: "JP H08-062541 A, Example 2 — inferred production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 10 GROUPS",
      "DESIGN f = 76.12–291.49 mm",
      "DESIGN F/4.1–5.8",
      "ALL SPHERICAL",
      "G2 IMAGE STABILIZATION",
    ],
    elementCount: 15,
    groupCount: 10,
    focalLengthMm: { marketing: [75, 300], design: [76.1174798344741, 291.49914720355235] },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "JP H08-062541 A",
    patentYear: 1996,
    authors: ["Shingo Hayakawa"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Paragraphs 33–35 define fo/fr using G1 and combined G1+G2. Evaluated literally, the prescription gives 1.979514 / 0.637265 at wide / tele rather than the printed 0.335 / 1.068, while it reproduces the stated focal lengths. No radius, index or zoom gap is altered to force the ratios.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: -221.388082194,
      glass: "Unmatched (source wavelength unspecified; S-TIH6 is a possible d-line catalog class)",
      role: "Negative front member of the G1 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.2,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: 134.257507689,
      glass: "Unmatched (source wavelength unspecified; S-BSL7 is a possible d-line catalog class)",
      role: "Positive crown partner of the G1 doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.2,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: 208.963244531,
      glass: "Unmatched (source wavelength unspecified; S-BSL7 is a possible d-line catalog class)",
      role: "Air-separated positive G1 singlet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: -59.952879469,
      glass: "Unmatched (source wavelength unspecified; LAH66 is a possible d-line catalog class)",
      role: "Front negative singlet of the laterally moving IS group G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.51633,
      vd: 64.2,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: -46.655589497,
      glass: "Unmatched (source wavelength unspecified; S-BSL7 is a possible d-line catalog class)",
      role: "Negative crown member of the rear G2 doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: 72.533408228,
      glass: "Unmatched (source wavelength unspecified; S-TIH53 is a possible d-line catalog class)",
      role: "Positive dense-flint member of the G2 doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: 58.515790906,
      glass: "Unmatched (source wavelength unspecified; S-BSM14 is a possible d-line catalog class)",
      role: "Positive G3 crown singlet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: 60.552442335,
      glass: "Unmatched (source wavelength unspecified; S-FSL5 is a possible d-line catalog class)",
      role: "Positive low-dispersion crown member of the G3 doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: -55.247823581,
      glass: "Unmatched (source wavelength unspecified; S-LAH60 is a possible d-line catalog class)",
      role: "Negative high-index partner of the G3 doublet before the stop.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: -410.971972268,
      glass: "Unmatched (source wavelength unspecified; S-BSM14 is a possible d-line catalog class)",
      role: "Weak negative, image-convex G4 singlet; fixed during zoom.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: 57.128704261,
      glass: "Unmatched (source wavelength unspecified; S-BSM14 is a possible d-line catalog class)",
      role: "Positive crown member of the G5 doublet.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: -102.809620703,
      glass: "Unmatched (source wavelength unspecified; S-TIH6 is a possible d-line catalog class)",
      role: "Negative flint member of the G5 doublet.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.2,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: 147.955687663,
      glass: "Unmatched (source wavelength unspecified; S-BSL7 is a possible d-line catalog class)",
      role: "Object-convex positive G5 singlet.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: -30.699716691,
      glass: "Unmatched (source wavelength unspecified; LAH66 is a possible d-line catalog class)",
      role: "Negative lanthanum-glass member of the rear G6 doublet.",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReferenceNote:
        "Source N/nu do not name a wavelength. Tracing uses an approximate d-line Abbe convention; the possible catalog class does not resolve to a spectral curve until the source reference is established.",
      focalLengthMm: 66.040722027,
      glass: "Unmatched (source wavelength unspecified; S-TIH6 is a possible d-line catalog class)",
      role: "Object-convex positive flint member of G6.",
      cemented: "D5",
    },
  ],

  surfaces: [
    { label: "1", R: 104.82, d: 2.8, sd: 28, medium: 1 },
    { label: "2", R: 65.22, d: 6.6, sd: 28, medium: 2 },
    { label: "3", R: 1064.41, d: 0.2, sd: 28 },
    { label: "4", R: 157.35, d: 4.6, sd: 28, medium: 3 },
    { label: "5", R: -339.86, sd: 28 },
    { label: "6", R: -172.44, d: 1.5, sd: 15, medium: 4 },
    { label: "7", R: 63.56, d: 4.9, sd: 13.7 },
    { label: "8", R: -34.89, d: 1.5, sd: 15, medium: 5 },
    { label: "9", R: 78.96, d: 3.5, sd: 15, medium: 6 },
    { label: "10", R: -270.7, sd: 15 },
    { label: "11", R: 63.23, d: 4.4, sd: 15.5, medium: 7 },
    { label: "12", R: -77.78, d: 0.2, sd: 15.5 },
    { label: "13", R: 57.33, d: 4.8, sd: 15.5, medium: 8 },
    { label: "14", R: -59.18, d: 1.5, sd: 15.5, medium: 9 },
    { label: "15", R: 210.5, d: 3.0, sd: 15.5 },
    { label: "STO", R: "flat" },
    { label: "17", R: -58.16, d: 2.5, sd: 14, medium: 10 },
    { label: "18", R: -77.22, sd: 14 },
    { label: "19", R: 177.2, d: 4.2, sd: 16, medium: 11 },
    { label: "20", R: -42.39, d: 1.5, sd: 16, medium: 12 },
    { label: "21", R: -88.25, d: 0.2, sd: 16 },
    { label: "22", R: 56.85, d: 2.8, sd: 16, medium: 13 },
    { label: "23", R: 218.49, sd: 16 },
    { label: "24", R: -44.17, d: 1.5, sd: 15.5, medium: 14 },
    { label: "25", R: 51.97, d: 3.3, sd: 15.5, medium: 15 },
    { label: "26", R: 2229.01, sd: 15.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 76.12, nominalFNumber: 4.1, label: "Wide", published: true },
      { focalLengthMm: 85.11, nominalFNumber: 4.23, published: false },
      { focalLengthMm: 95.16, nominalFNumber: 4.34, published: false },
      { focalLengthMm: 105.16, nominalFNumber: 4.45, published: false },
      { focalLengthMm: 120.11, nominalFNumber: 4.58, published: false },
      { focalLengthMm: 135.0, nominalFNumber: 4.7, published: true },
      { focalLengthMm: 147.88, nominalFNumber: 4.8, published: false },
      { focalLengthMm: 161.72, nominalFNumber: 4.9, published: false },
      { focalLengthMm: 175.56, nominalFNumber: 4.99, published: false },
      { focalLengthMm: 189.41, nominalFNumber: 5.08, published: false },
      { focalLengthMm: 204.27, nominalFNumber: 5.19, published: false },
      { focalLengthMm: 219.18, nominalFNumber: 5.29, published: false },
      { focalLengthMm: 236.15, nominalFNumber: 5.4, published: false },
      { focalLengthMm: 254.25, nominalFNumber: 5.53, published: false },
      { focalLengthMm: 272.52, nominalFNumber: 5.66, published: false },
      { focalLengthMm: 291.49, nominalFNumber: 5.8, label: "Tele", published: true },
    ],
  },

  focus: {
    closeFocusM: 1.5,
    description:
      "Infinity focus only. The patent tabulates infinity states at 76.12, 135.00 and 291.49 mm and gives no near-focus state, so focus movement is not modeled; the production lens focuses to 1.5 m with a micro USM motor. The 13 intermediate zoom stations are solved: G2 and G4 stay fixed, G1, G3 and G5 follow smooth paths through the printed rows, and G6 is placed to keep the image on the fixed image plane. They are calculated states, not Canon cam data. The back focus at the printed stations is computed (41.50 / 52.17 / 62.10 mm); the patent does not print it. IS decentering of G2 is not modeled.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [4, 4],
        [10.341, 10.341],
        [16.401, 16.401],
        [21.571, 21.571],
        [28.051, 28.051],
        [33.38, 33.38],
        [37.266, 37.266],
        [40.875, 40.875],
        [43.992, 43.992],
        [46.707, 46.707],
        [49.247, 49.247],
        [51.469, 51.469],
        [53.667, 53.667],
        [55.684, 55.684],
        [57.435, 57.435],
        [59, 59],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [31.3, 31.3],
        [29.44, 29.44],
        [27.466, 27.466],
        [25.604, 25.604],
        [22.995, 22.995],
        [20.57, 20.57],
        [18.607, 18.607],
        [16.606, 16.606],
        [14.714, 14.714],
        [12.917, 12.917],
        [11.087, 11.087],
        [9.344, 9.344],
        [7.464, 7.464],
        [5.571, 5.571],
        [3.768, 3.768],
        [2, 2],
      ],
    },
    STO: {
      label: "D16",
      values: [
        [4, 4],
        [5.86, 5.86],
        [7.834, 7.834],
        [9.696, 9.696],
        [12.305, 12.305],
        [14.73, 14.73],
        [16.693, 16.693],
        [18.694, 18.694],
        [20.586, 20.586],
        [22.383, 22.383],
        [24.213, 24.213],
        [25.956, 25.956],
        [27.836, 27.836],
        [29.729, 29.729],
        [31.532, 31.532],
        [33.3, 33.3],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [23.8, 23.8],
        [22.182, 22.182],
        [20.812, 20.812],
        [19.802, 19.802],
        [18.785, 18.785],
        [18.2, 18.2],
        [17.948, 17.948],
        [17.874, 17.874],
        [17.958, 17.958],
        [18.164, 18.164],
        [18.492, 18.492],
        [18.905, 18.905],
        [19.455, 19.455],
        [20.11, 20.11],
        [20.823, 20.823],
        [21.6, 21.6],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [22.4, 22.4],
        [21.423, 21.423],
        [20.484, 20.484],
        [19.643, 19.643],
        [18.476, 18.476],
        [17.35, 17.35],
        [16.379, 16.379],
        [15.315, 15.315],
        [14.222, 14.222],
        [13.097, 13.097],
        [11.853, 11.853],
        [10.569, 10.569],
        [9.069, 9.069],
        [7.434, 7.434],
        [5.755, 5.755],
        [3.99, 3.99],
      ],
    },
    "26": {
      label: "Back focus (computed)",
      values: [
        [41.5, 41.5],
        [44.099, 44.099],
        [46.412, 46.412],
        [48.265, 48.265],
        [50.455, 50.455],
        [52.17, 52.17],
        [53.389, 53.389],
        [54.524, 54.524],
        [55.529, 55.529],
        [56.446, 56.446],
        [57.36, 57.36],
        [58.227, 58.227],
        [59.173, 59.173],
        [60.151, 60.151],
        [61.115, 61.115],
        [62.1, 62.1],
      ],
    },
  },

  aperture: { fStops: [4.1, 4.7, 5.8, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2 IS", fromSurface: "6", toSurface: "10" },
    { text: "G3", fromSurface: "11", toSurface: "15" },
    { text: "G4", fromSurface: "17", toSurface: "18" },
    { text: "G5", fromSurface: "19", toSurface: "23" },
    { text: "G6", fromSurface: "24", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5", fromSurface: "24", toSurface: "26" },
  ],

  layout: { scFill: 0.68, yScFill: 0.66 },
} satisfies LensDataV2Input;

export default LENS_DATA;
