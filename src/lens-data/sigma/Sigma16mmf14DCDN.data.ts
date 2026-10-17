import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Sigma 16mm F1.4 DC DN | Contemporary            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2018-205527 A, Numerical Example 1 (Sigma).       ║
 * ║  Large-aperture APS-C wide-angle mirrorless prime.                 ║
 * ║  16 elements / 13 groups, 2 aspherical surfaces.                   ║
 * ║  Focus: single positive G3 element translates object-ward.          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALE:                                                     ║
 * ║    No focal-length normalization has been applied. The patent       ║
 * ║    prescription computes to f = 16.446 mm and also extrapolates     ║
 * ║    to Sigma's published 0.25 m / 1:9.9 close-focus specification.   ║
 * ║    The production 16 mm value is treated as the marketed nominal    ║
 * ║    focal length.                                                    ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 31-32 are a 2.0000 mm plane-parallel plate      ║
 * ║    (nd 1.51680, νd 64.20) plus BF = 1.0000 mm. It is modeled in    ║
 * ║    `rearPlates` (traced, not drawn); surface 30 keeps the patent   ║
 * ║    d30 = 15.5341 mm to the plate.                                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear-aperture data. Semi-diameters are         ║
 * ║    paraxial estimates constrained by f/1.46 axial rays, 0.35-field  ║
 * ║    displayed off-axis rays, edge thickness, sd/|R| < 0.90, and      ║
 * ║    cross-gap sag intrusion <= 90% of the air gap. Surfaces 1-3      ║
 * ║    were raised to pass the traced chief ray to the patent's         ║
 * ║    Y = 14.20 mm APS-C corner (2026-09-24 field-coverage audit).     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-16mm-f14-dc-dn",
  maker: "Sigma",
  name: "SIGMA 16mm f/1.4 DC DN | Contemporary",
  subtitle: "JP 2018-205527 A Example 1 — Sigma / Ochiai & Sato",

  catalog: {
    lensMounts: ["l-mount", "canon-ef-m", "canon-rf", "fujifilm-x", "micro-four-thirds", "nikon-z", "sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "16 elements / 13 groups",
      "f = 16.446 mm design; 16 mm marketed",
      "F/1.46 design; F1.4 marketed",
      "2ω = 84.21° at Y = 14.20 mm",
      "3 FLD / 2 SLD / 2 molded aspherical elements",
    ],
    elementCount: 16,
    groupCount: 13,
    focalLengthMm: { marketing: 16, design: 16.446 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2018-205527 A",
    patentYear: 2018,
    authors: ["Hiromichi Ochiai", "Ryosuke Sato"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: 349.76,
      glass: "BSC7 / N-BK7-class borosilicate crown (517/642)",
      role: "Weak positive front meniscus in the negative G1A collector.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: -32.6,
      glass: "TAFD55-class high-index glass (001/291)",
      role: "High-index diverging meniscus in the front collector.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.25,
      focalLengthMm: -69.66,
      glass: "M-BACD5N-class molded barium crown (589/613)",
      role: "Front-group negative meniscus with image-side molded asphere.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -59.08,
      glass: "FCD100-class FLD fluorite-equivalent glass (437/951)",
      apd: "inferred",
      apdNote: "Sigma-published FLD element; patent gives nd/vd but not line-index data.",
      role: "Negative FLD member of the rear G1A cemented color-correction doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L15",
      label: "Element L15",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 54.54,
      glass: "TAFD55-class high-index glass (001/291)",
      role: "High-index positive partner in the rear G1A cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L16",
      label: "Element L16",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: 55.79,
      glass: "TAFD35-class high-index lanthanum glass (911/353)",
      role: "High-index positive member of G1Bp.",
    },
    {
      id: 7,
      name: "L17",
      label: "Element L17",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 53.78,
      glass: "FCD100-class FLD fluorite-equivalent glass (437/951)",
      apd: "inferred",
      apdNote: "Sigma-published FLD element; patent gives nd/vd but not line-index data.",
      role: "Low-dispersion positive member of G1Bp ahead of the stop.",
    },
    {
      id: 8,
      name: "L18",
      label: "Element L18",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.15,
      focalLengthMm: -47.14,
      glass: "E-CF6 (HOYA)",
      role: "First negative member of G1Bm.",
    },
    {
      id: 9,
      name: "L19",
      label: "Element L19",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.17,
      focalLengthMm: -63.56,
      glass: "E-FD5 (HOYA)",
      role: "Rear negative meniscus of G1Bm.",
    },
    {
      id: 10,
      name: "L21",
      label: "Element L21",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: 27.45,
      glass: "FCD505 (HOYA, SLD low-dispersion crown)",
      apd: "inferred",
      apdNote: "Sigma-published SLD element; patent gives nd/vd but not line-index data.",
      role: "Principal positive member of the G2 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L22",
      label: "Element L22",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.33,
      focalLengthMm: -65.59,
      glass: "S-LAM7 (OHARA)",
      role: "Achromatizing negative member of the G2 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 45.38,
      glass: "M-LAC130-class molded lanthanum crown (694/532)",
      role: "Rear positive G2 element carrying the second image-side asphere.",
    },
    {
      id: 13,
      name: "L31",
      label: "Element L31",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: 85.41,
      glass: "FCD505 (HOYA, SLD low-dispersion crown)",
      apd: "inferred",
      apdNote: "Sigma-published SLD element; patent gives nd/vd but not line-index data.",
      role: "Single-element positive inner-focus group.",
    },
    {
      id: 14,
      name: "L41",
      label: "Element L41",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: -45.9,
      glass: "SF6 / S-TIH6-class dense flint (805/255)",
      role: "Front negative member of G4.",
    },
    {
      id: 15,
      name: "L42",
      label: "Element L42",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 38.35,
      glass: "FCD100-class FLD fluorite-equivalent glass (437/951)",
      apd: "inferred",
      apdNote: "Sigma-published FLD element; patent gives nd/vd but not line-index data.",
      role: "FLD positive member of the rear G4 cemented doublet.",
      cemented: "D3",
    },
    {
      id: 16,
      name: "L43",
      label: "Element L43",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.32,
      focalLengthMm: -56.66,
      glass: "S-LAH95 (OHARA)",
      role: "High-index negative rear member of the G4 cemented doublet.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 125.246, d: 2.9671, sd: 21, medium: 1 },
    { label: "2", R: 404.5429, d: 0.5, sd: 20.5 },
    { label: "3", R: 34.369, d: 1.4, sd: 16, medium: 2 },
    { label: "4", R: 16.3986, d: 5.0945, sd: 14.4 },
    { label: "5", R: 26, d: 1.5, sd: 13.8, medium: 3 },
    {
      label: "6A",
      R: 15.576,
      d: 10.6088,
      sd: 13.45,
      asphere: {
        K: -1.28713,
        A4: 3.03098e-5,
        A6: -1.10729e-7,
        A8: 1.95111e-9,
        A10: -1.86588e-11,
        A12: 9.78438e-14,
        A14: -2.62044e-16,
        A16: 2.69032e-19,
      },
    },
    { label: "7", R: -30.5, d: 1.0319, sd: 14.8, medium: 4 },
    { label: "8", R: 170.0033, d: 2.9642, sd: 14.8, medium: 5 },
    { label: "9", R: -79.7237, d: 7.2064, sd: 14.8 },
    { label: "10", R: 60.8883, d: 3.0231, sd: 15.2, medium: 6 },
    { label: "11", R: -300, d: 0.8578, sd: 15.2 },
    { label: "12", R: 85, d: 5.6577, sd: 14.8, medium: 7 },
    { label: "13", R: -31.8218, d: 1.0735, sd: 14.8 },
    { label: "14", R: -60.7984, d: 0.9, sd: 13.4, medium: 8 },
    { label: "15", R: 40.9323, d: 5.7178, sd: 12.2 },
    { label: "16", R: -20.3273, d: 0.9, sd: 11.42, medium: 9 },
    { label: "17", R: -39.4374, d: 1.4174, sd: 12.2 },
    { label: "STO", R: "flat", d: 0.9946 },
    { label: "19", R: 68.6066, d: 10.3, sd: 15, medium: 10 },
    { label: "20", R: -20.14, d: 0.9, sd: 15, medium: 11 },
    { label: "21", R: -34.7714, d: 0.15, sd: 15 },
    { label: "22", R: 55.4013, d: 5.5346, sd: 15.2, medium: 12 },
    {
      label: "23A",
      R: -69.8881,
      sd: 15.2,
      asphere: { K: 0, A4: 1.05989e-5, A6: -8.95266e-9, A8: 8.67772e-12, A10: 3.4706e-14, A12: -1.6182e-16, A14: 0, A16: 0 },
    },
    { label: "24", R: 25, d: 2.7637, sd: 14, medium: 13 },
    { label: "25", R: 47.3486, sd: 14 },
    { label: "26", R: 35.4444, d: 0.9, sd: 11.2, medium: 14 },
    { label: "27", R: 17.8877, d: 3.7091, sd: 10.45 },
    { label: "28", R: 660, d: 6.0973, sd: 10.45, medium: 15 },
    { label: "29", R: -17.1474, d: 0.9, sd: 10.8, medium: 16 },
    { label: "30", R: -26.4237, d: 15.5341, sd: 11 },
  ],

  focus: {
    closeFocusM: 0.25,
    keyframes: [0, 0.33549152620017336, 1],
    description:
      "Single-element inner focus: G3 / L31 moves toward the object. The patent beta=-1/40 row is exact, followed by a constrained endpoint matching Sigma's published 0.25 m / 1:9.9 specification.",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: {
    "23A": { label: "G2-G3", values: [[3.3044, 2.8751, 1.6090594577]] },
    "25": { label: "G3-G4", values: [[2.0917, 2.521, 3.7870405423]] },
  },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 1.8, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9, bladeRoundedness: 0.8 },

  /* ── Cover glass (patent surfaces 31–32): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 2.0,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "JP 2018-205527 A, Numerical Example 1 surfaces 31–32",
    },
  ],

  groups: [
    { text: "G1A", fromSurface: "1", toSurface: "9" },
    { text: "G1Bp", fromSurface: "10", toSurface: "13" },
    { text: "G1Bm", fromSurface: "14", toSurface: "17" },
    { text: "G2", fromSurface: "19", toSurface: "23A" },
    { text: "G3 IF", fromSurface: "24", toSurface: "25" },
    { text: "G4", fromSurface: "26", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "19", toSurface: "21" },
    { text: "D3", fromSurface: "28", toSurface: "30" },
  ],

  layout: { scFill: 0.68, yScFill: 0.58 },

  rays: { offAxisFieldFrac: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
