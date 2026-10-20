import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Sony Vario-Tessar T* FE 24-70mm F4 ZA OSS (SEL2470Z) correlation; the patent does not name the product.
 * Source: US 2015/0085165 A1, Example 3, Tables 7-9; 12 elements / 10 groups.
 * 9 aspheres on 5 elements; K maps directly to the published kappa. Scale = 1.
 * Zoom: the three published infinity rows (wide/middle/tele). Zoom gaps: d3, d9, d19, d21, BF.
 * Focus: reconstructed. The patent names G4 (L11) as the focusing group but prints no close-focus rows.
 * G4 moves imageward 0.943 / 1.860 / 2.793 mm (wide/middle/tele), conserving d19 + d21, to reach
 * Sony's 0.4 m MFD measured from the printed image plane; BF stays fixed.
 * Semi-diameters are estimates, not published clear apertures: read from Fig. 13 (wide, 12.2 px/mm
 * at 310 dpi) and checked by real-ray trace. 4A is set to pass the full-frame corner chief ray at
 * wide at both focus ends. L4 and L5 are drawn about 15 mm tall but stay at 12.8: L3's rear face
 * would cross L4's front near 13.6 mm, and lowering 5A below 14.7 mm cuts the engine's paraxial
 * half-field below 41.4 degrees (patent: 42.42). The outer L3 block in the figure is a flat land.
 * Iris radii are inferred from the patent's F/4.10 at each zoom station.
 * Printed radii and image gaps are retained. Computed d-line paraxial BFD exceeds the printed Bf
 * by +0.116 / +0.122 / +0.007 mm at wide/middle/tele. The printed Bf matches the on-axis
 * best-focus plane at wide and middle (paraxial offsets -0.121 / -0.112 mm), and Example 1 of the
 * same patent shows the same pattern, so the printed plane is kept as the patent's best-focus plane.
 * Glass coordinate classes do not identify supplier or melt; catalog spectra are proxies.
 * The patent lists no cover glass or filter plate, and none is added.
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-vario-tessar-t-fe-24-70-f4-za-oss",
  maker: "Sony",
  name: "SONY VARIO-TESSAR T* FE 24-70mm f/4 ZA OSS",
  subtitle: "US 2015/0085165 A1, Example 3 — inferred production correlation",
  visible: true,

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "12 ELEMENTS / 10 GROUPS",
      "DESIGN f = 24.72-67.90 mm",
      "DESIGN F/4.10",
      "9 ASPHERICAL SURFACES / 5 ELEMENTS",
    ],
    elementCount: 12,
    groupCount: 10,
    focalLengthMm: { marketing: [24, 70], design: [24.712006381004198, 67.8583392197399] },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "US 2015/0085165 A1",
    patentYear: 2015,
    authors: ["Masaki Maruyama", "Masaharu Hosoi", "Hiroshi Koizumi"],
    assignees: ["Sony Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -252.60140359793738,
      glass: "847238 — high-index dense flint class",
      role: "Negative front member of the cemented G1 doublet",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.39,
      indexReference: "d",
      focalLengthMm: 75.64356324441908,
      glass: "618634 — low-dispersion crown class",
      role: "Positive rear member of the cemented G1 doublet",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.88202,
      vd: 37.22,
      indexReference: "d",
      focalLengthMm: -19.564338074455932,
      glass: "882372 — high-index glass class",
      role: "Strongest negative element of the G2 variator",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      focalLengthMm: -89.93471560163486,
      glass: "773496 — lanthanum glass class",
      role: "Second negative element of the G2 variator",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      indexReference: "d",
      focalLengthMm: 47.47552022841267,
      glass: "946180 — high-dispersion flint class",
      role: "Positive high-dispersion rear element of G2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.88202,
      vd: 37.22,
      indexReference: "d",
      focalLengthMm: 44.92774619637569,
      glass: "882372 — high-index glass class",
      role: "Positive front element of G3, just behind the stop",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7725,
      vd: 49.47,
      indexReference: "d",
      focalLengthMm: 81.57823027495685,
      glass: "773495 — lanthanum glass class",
      role: "Optical SteadyShot element; shifts perpendicular to the axis for blur correction",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      focalLengthMm: -14.378593631052217,
      glass: "755275 — dense flint class",
      role: "Negative front member of the cemented L8/L9 doublet in G3",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 23.93044258769817,
      glass: "497816 — ED fluorophosphate class",
      apd: "inferred",
      apdNote:
        "Sony's single production ED position; the patent nd/vd row maps to an ED fluorophosphate class, but publishes no partial-dispersion value.",
      role: "Positive ED member of the cemented L8/L9 doublet in G3",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.73077,
      vd: 40.5,
      indexReference: "d",
      focalLengthMm: 22.94916945374652,
      glass: "731405 — lanthanum glass class",
      role: "Positive rear element of G3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.7725,
      vd: 49.47,
      indexReference: "d",
      focalLengthMm: -38.9181244438494,
      glass: "773495 — lanthanum glass class",
      role: "Focusing group G4; moves toward the image for close focus",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Plano-Concave",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      focalLengthMm: -1232.0662987951318,
      glass: "487704 — low-dispersion crown class",
      role: "Weak negative rear group G5; moves with G3 during zooming",
    },
  ],

  surfaces: [
    { label: "1", R: 57.18, d: 1.9, sd: 28, medium: 1 },
    { label: "2", R: 44.43, d: 9.83, sd: 28, medium: 2 },
    { label: "3", R: 820.41, sd: 28 },
    {
      label: "4A",
      R: 373.87,
      d: 1.2,
      sd: 15.65,
      medium: 3,
      asphere: { K: 9.399, A4: 5.0545e-6, A6: -1.9085e-8, A8: 1.4671e-11, A10: 1.2449e-14 },
    },
    {
      label: "5A",
      R: 16.47,
      d: 7.88,
      sd: 15.3,
      asphere: { A4: -2.643e-6, A6: 6.2786e-9, A8: -1.484e-10, A10: -9.8534e-13 },
    },
    { label: "6", R: -79.42, d: 0.8, sd: 12.8, medium: 4 },
    { label: "7", R: 557.23, d: 0.4, sd: 12.8 },
    { label: "8", R: 38.58, d: 3.8, sd: 12.8, medium: 5 },
    { label: "9", R: 260.63, sd: 12.8 },
    { label: "STO", R: "flat", d: 1.5 },
    {
      label: "11A",
      R: 24.33,
      d: 2.18,
      sd: 10.5,
      medium: 6,
      asphere: { A4: -1.7333e-6, A6: -4.3031e-7, A8: 5.3145e-9, A10: -1.9092e-11 },
    },
    {
      label: "12A",
      R: 60.38,
      d: 2.84,
      sd: 10.5,
      asphere: { A4: 1.3809e-6, A6: -5.7456e-7, A8: 7.7232e-9, A10: -3.1256e-11 },
    },
    { label: "13", R: 286.45, d: 1.74, sd: 10.2, medium: 7 },
    {
      label: "14A",
      R: -80.58,
      d: 3.4,
      sd: 10.2,
      asphere: { A4: -6.4561e-7, A6: 1.9499e-7, A8: -3.0532e-9, A10: 1.6155e-11 },
    },
    { label: "15", R: -38.17, d: 0.9, sd: 9.6, medium: 8 },
    { label: "16", R: 15.33, d: 4.73, sd: 9.6, medium: 9 },
    { label: "17", R: -47.62, d: 3.36, sd: 9.6 },
    {
      label: "18A",
      R: 38.52,
      d: 5.32,
      sd: 12.5,
      medium: 10,
      asphere: { A4: -2.0025e-5, A6: 6.1888e-8, A8: -7.0364e-10, A10: 4.4094e-13 },
    },
    { label: "19A", R: -27.97, sd: 12.5, asphere: { A4: 1.5915e-6, A6: 5.6216e-8, A8: -1.0189e-9, A10: 1.1571e-12 } },
    {
      label: "20A",
      R: 134.26,
      d: 0.8,
      sd: 11.8,
      medium: 11,
      asphere: { A4: -2.7694e-6, A6: 1.7991e-7, A8: -3.24e-9, A10: 1.305e-11 },
    },
    { label: "21A", R: 24.5, sd: 11.8, asphere: { A4: -3.7192e-6, A6: 1.0869e-7, A8: -2.4497e-9, A10: 1.009e-11 } },
    { label: "22", R: -600.62, d: 2, sd: 14.6, medium: 12 },
    { label: "23", R: "flat", sd: 14.6 },
  ],

  zoom: {
    stations: [{ focalLengthMm: 24.72 }, { focalLengthMm: 47 }, { focalLengthMm: 67.9 }],
    apertureModel: "from-nominal-fno",
  },

  focus: {
    closeFocusM: 0.4,
    description:
      "Inner focus by G4 (L11), the group the patent names for focusing. The patent prints infinity spacings only, so the close-focus state is reconstructed: G4 moves toward the image by 0.94 mm at wide, 1.86 mm at middle and 2.79 mm at tele, keeping d19 + d21 constant, to reach Sony's 0.4 m minimum focus distance. The back focus does not change. Computed magnification at 0.4 m is 0.08× / 0.14× / 0.20×.",
  },

  gaps: {
    "3": {
      label: "d3",
      values: [
        [0.8, 0.8],
        [15.69, 15.69],
        [26.16, 26.16],
      ],
    },
    "9": {
      label: "d9",
      values: [
        [22.44, 22.44],
        [7.35, 7.35],
        [2.16, 2.16],
      ],
    },
    // G3 → G4: zoom + reconstructed focus; d19 + d21 is conserved at each zoom state.
    "19A": {
      label: "d19",
      values: [
        [5.86, 6.803],
        [3.59, 5.4498],
        [2, 4.7932],
      ],
    },
    // G4 → G5: zoom + reconstructed focus.
    "21A": {
      label: "d21",
      values: [
        [5.58, 4.637],
        [7.84, 5.9802],
        [9.44, 6.6468],
      ],
    },
    "23": {
      label: "BF",
      values: [
        [21.95, 21.95],
        [35.79, 35.79],
        [45.74, 45.74],
      ],
    },
  },

  aperture: { nominalFNumber: 4.1, fStops: [4.1, 5.6, 8, 11, 16, 22], blades: 7 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4A", toSurface: "9" },
    { text: "G3", fromSurface: "11A", toSurface: "19A" },
    { text: "G4", fromSurface: "20A", toSurface: "21A" },
    { text: "G5", fromSurface: "22", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
