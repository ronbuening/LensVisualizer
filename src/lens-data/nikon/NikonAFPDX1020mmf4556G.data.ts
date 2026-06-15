import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR                         ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO2021039813A1 / US20220269056A1, Example 2, Table 2.              ║
 * ║  Four-group negative-positive-negative-positive DX retrofocus zoom.              ║
 * ║  Production lens: 14 elements / 11 groups, with 3 aspherical elements.           ║
 * ║  Hybrid composite resin layers are modeled as separate optical material records, ║
 * ║  so the elements array has 16 records even though the production count is 14.     ║
 * ║                                                                                    ║
 * ║  Zoom variable gaps: D10, D20, D24, and BF.                                      ║
 * ║  Focus: G3 inner-focus pair L31-L32 moves image-side toward close focus.         ║
 * ║  Table 2 publishes only infinity zoom spacing; close-focus gaps below are a      ║
 * ║  first-order paraxial model fitted to Nikon's official 0.22 m MFD and fixed      ║
 * ║  image plane, not a patent-published cam table.                                  ║
 * ║                                                                                    ║
 * ║  No production scaling was applied: Table 2 is already a 10.31–19.39 mm design.  ║
 * ║  Semi-diameters are conservative renderer clear apertures inferred from paraxial ║
 * ║  marginal/chief-ray envelopes and constrained by edge-thickness and cross-gap    ║
 * ║  sag checks. They are not manufacturer-published clear apertures.                ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-p-dx-10-20mm-f45-56g-vr",
  maker: "Nikon",
  name: "NIKON AF-P DX NIKKOR 10-20mm f/4.5-5.6 G VR",
  subtitle: "WO2021039813A1 / US20220269056A1 Example 2",
  specs: [
    "10-20 mm DX zoom",
    "14 elements / 11 groups; 3 aspherical elements",
    "Patent f = 10.310 / 14.992 / 19.394 mm",
    "Patent FNO = 4.625 / 5.233 / 5.828",
    "G3 internal focus; L23 VR group",
  ],

  focalLengthMarketing: [10, 20],
  focalLengthDesign: [10.30993, 19.39397],
  apertureMarketing: 4.5,
  apertureDesign: 4.625,
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentYear: 2021,
  elementCount: 14,
  groupCount: 11,
  apertureBlades: 7,
  apertureBladeRoundedness: 0.7,

  elements: [
    {
      id: 1,
      name: "L11g",
      label: "L11 glass body",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -31.83,
      glass: "J-LASF016 / N-LAF34 class (catalog-equivalent high-index lanthanum flint)",
      cemented: "H1",
      role: "Glass substrate of the first composite negative meniscus in the retrofocus front group.",
    },
    {
      id: 2,
      name: "L11r",
      label: "L11 resin layer",
      type: "Composite resin asphere",
      nd: 1.56093,
      vd: 36.64,
      fl: -79.44,
      glass: "Resin / polymer layer (patent-specified)",
      cemented: "H1",
      role: "Thin molded resin layer carrying the image-side aspherical surface of L11.",
    },
    {
      id: 3,
      name: "L12r",
      label: "L12 resin layer",
      type: "Composite resin asphere",
      nd: 1.55389,
      vd: 38.09,
      fl: -484.48,
      glass: "Resin / polymer layer (patent-specified)",
      cemented: "H2",
      role: "Thin molded resin layer carrying the object-side aspherical surface of L12.",
    },
    {
      id: 4,
      name: "L12g",
      label: "L12 glass body",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.97,
      fl: -36.86,
      glass: "J-LASF03 / N-LASF43 class (catalog-equivalent dense lanthanum flint)",
      cemented: "H2",
      role: "Glass substrate of the second composite negative meniscus in G1.",
    },
    {
      id: 5,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.68348,
      vd: 54.8,
      fl: -56.71,
      glass: "683548 - patent-specified glass (theta_gF=0.5501; unresolved)",
      apd: "patent",
      apdNote: "Patent partial-dispersion condition: θgF = 0.5501; θgF − (0.6418 − 0.00168νd) = +0.0004.",
      role: "Conditioned negative element in G1 for lateral-color and field correction.",
    },
    {
      id: 6,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.71736,
      vd: 29.57,
      fl: 32.54,
      glass: "J-SF1 (Hikari-equivalent dense flint)",
      role: "Positive balancing element at the rear of the net-negative first zoom group.",
    },
    {
      id: 7,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.38,
      fl: 13.75,
      glass: "J-SF10 (Hikari-equivalent dense flint)",
      cemented: "D1",
      role: "Positive member of the pre-stop correcting doublet in G2.",
    },
    {
      id: 8,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      fl: -11.03,
      glass: "TAFD35 / TAFD35L (Hoya-equivalent high-index flint)",
      cemented: "D1",
      role: "High-index negative member of the pre-stop correcting doublet in G2.",
    },
    {
      id: 9,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 63.88,
      fl: 54.75,
      glass: "BK7-family crown (patent nd=1.51680, νd=63.88)",
      role: "Weak positive meniscus immediately before the stop; patent VR/decentering group.",
    },
    {
      id: 10,
      name: "L24",
      label: "L24",
      type: "Biconvex Positive",
      nd: 1.53172,
      vd: 48.78,
      fl: 17.22,
      glass: "J-LLF6 (Hikari-equivalent light flint)",
      cemented: "D2",
      role: "Positive post-stop member of the principal G2 cemented doublet.",
    },
    {
      id: 11,
      name: "L25",
      label: "L25",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      fl: -49.18,
      glass: "TAFD35 / TAFD35L (Hoya-equivalent high-index flint)",
      cemented: "D2",
      role: "High-index negative member of the post-stop G2 doublet.",
    },
    {
      id: 12,
      name: "L31",
      label: "L31",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      fl: -24.69,
      glass: "TAFD35 / TAFD35L (Hoya-equivalent high-index flint)",
      role: "Main negative member of the internal focusing group G3.",
    },
    {
      id: 13,
      name: "L32",
      label: "L32",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 63.88,
      fl: 46.77,
      glass: "BK7-family crown (patent nd=1.51680, νd=63.88)",
      role: "Positive meniscus following L31 in the internal focusing group.",
    },
    {
      id: 14,
      name: "L41",
      label: "L41",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.5311,
      vd: 55.91,
      fl: 148.46,
      glass: "531559 - patent-specified crown-like glass (theta_gF=0.5684; unresolved)",
      role: "Weak positive rear-group meniscus with image-side field-correction asphere.",
    },
    {
      id: 15,
      name: "L42",
      label: "L42",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      fl: -19.93,
      glass: "TAFD35 / TAFD35L (Hoya-equivalent high-index flint)",
      cemented: "D3",
      role: "Negative member of the final rear cemented doublet.",
    },
    {
      id: 16,
      name: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 19.12,
      glass: "J-FK5 (Hikari-equivalent low-dispersion fluor-crown)",
      cemented: "D3",
      role: "Low-dispersion positive member of the final rear cemented doublet.",
    },
  ],

  surfaces: [
    { label: "1", R: 72.2152, d: 2.4, nd: 1.7725, elemId: 1, sd: 13.6 },
    { label: "2", R: 18.0784, d: 0.2, nd: 1.56093, elemId: 2, sd: 12.5 },
    { label: "3A", R: 12.8098, d: 13.5, nd: 1.0, elemId: 0, sd: 11.35 },
    { label: "4A", R: 38.7253, d: 0.2, nd: 1.55389, elemId: 3, sd: 11.6 },
    { label: "5", R: 33.7793, d: 1.5, nd: 1.8061, elemId: 4, sd: 11.8 },
    { label: "6", R: 15.4957, d: 6.413, nd: 1.0, elemId: 0, sd: 11.6 },
    { label: "7", R: -222.7658, d: 1.3, nd: 1.68348, elemId: 5, sd: 12.0 },
    { label: "8", R: 47.0349, d: 0.1, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "9", R: 25.7276, d: 4.15, nd: 1.71736, elemId: 6, sd: 12.0 },
    { label: "10", R: -234.9661, d: 25.062, nd: 1.0, elemId: 0, sd: 12.0 },

    { label: "11", R: 1e15, d: 1.1, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "12", R: 24.5947, d: 2.55, nd: 1.72825, elemId: 7, sd: 6.7 },
    { label: "13", R: -16.154, d: 0.8, nd: 1.91082, elemId: 8, sd: 6.45 },
    { label: "14", R: 27.1775, d: 1.92, nd: 1.0, elemId: 0, sd: 6.3 },
    { label: "15", R: -248.1745, d: 1.58, nd: 1.5168, elemId: 9, sd: 6.0 },
    { label: "16", R: -25.4538, d: 1.455, nd: 1.0, elemId: 0, sd: 5.5 },
    { label: "STO", R: 1e15, d: 1.802, nd: 1.0, elemId: 0, sd: 4.846 },
    { label: "18", R: 21.5078, d: 3.28, nd: 1.53172, elemId: 10, sd: 5.7 },
    { label: "19", R: -15.0998, d: 0.9, nd: 1.91082, elemId: 11, sd: 6.1 },
    { label: "20", R: -23.4243, d: 1.457, nd: 1.0, elemId: 0, sd: 6.4 },

    { label: "21", R: -112.1885, d: 0.8, nd: 1.91082, elemId: 12, sd: 6.7 },
    { label: "22", R: 28.2245, d: 0.697, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "23", R: 18.6097, d: 1.83, nd: 1.5168, elemId: 13, sd: 7.0 },
    { label: "24", R: 78.161, d: 5.723, nd: 1.0, elemId: 0, sd: 7.3 },

    { label: "25", R: -60.8267, d: 1.35, nd: 1.5311, elemId: 14, sd: 8.8 },
    { label: "26A", R: -34.6017, d: 0.6, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "27", R: -134.5982, d: 0.8, nd: 1.91082, elemId: 15, sd: 9.1 },
    { label: "28", R: 21.0465, d: 5.6, nd: 1.48749, elemId: 16, sd: 9.2 },
    { label: "29", R: -15.2651, d: 38.107, nd: 1.0, elemId: 0, sd: 9.5 },
  ],

  asph: {
    "3A": {
      K: -0.961,
      A4: -1.1e-5,
      A6: -2.98e-8,
      A8: 1.59e-10,
      A10: 2.68e-13,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: -0.792,
      A4: -3.6e-6,
      A6: 8.87e-8,
      A8: 2.1e-10,
      A10: -2.3e-13,
      A12: 0,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: 5.66e-5,
      A6: 5.08e-8,
      A8: -2.05e-9,
      A10: 3.5e-11,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [10.30993, 14.99222, 19.39397],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],
  nominalFno: [4.5, 5.1, 5.6],

  var: {
    "10": [
      [25.062, 25.062],
      [8.757, 8.757],
      [0.77, 0.77],
    ],
    "20": [
      [1.457, 2.120666],
      [2.644, 3.910275],
      [3.179, 5.243406],
    ],
    "24": [
      [5.723, 5.059334],
      [4.536, 3.269725],
      [4.001, 1.936594],
    ],
    "29": [
      [38.107, 38.107],
      [45.676, 45.676],
      [53.47, 53.47],
    ],
  },
  varLabels: [
    ["10", "D10"],
    ["20", "D20"],
    ["24", "D24"],
    ["29", "BF"],
  ],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (+)", fromSurface: "11", toSurface: "20" },
    { text: "G3 IF (-)", fromSurface: "21", toSurface: "24" },
    { text: "G4 (+)", fromSurface: "25", toSurface: "29" },
  ],
  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "H2", fromSurface: "4A", toSurface: "6" },
    { text: "D1", fromSurface: "12", toSurface: "14" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "D3", fromSurface: "27", toSurface: "29" },
  ],

  focusDescription:
    "Internal focus by G3 (L31-L32) moving image-side. Close-focus gaps are paraxially inferred from the official 0.22 m MFD because Example 2 publishes only infinity zoom spacings.",
  closeFocusM: 0.22,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 29],
  maxFstop: 29,
  scFill: 0.55,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
