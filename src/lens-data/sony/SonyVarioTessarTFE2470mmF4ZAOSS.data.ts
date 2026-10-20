import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DIAGNOSTIC_ONLY. User-authorized literal-source exploration; no production-readiness gate.
 * Sony Vario-Tessar T* FE 24-70mm F4 ZA OSS correlation; not a manufacturer-confirmed prescription.
 * Source: US 2015/0085165 A1, Example 3, Tables 7-9; 12 elements / 10 groups.
 * 9 aspheres on 5 elements; K maps directly to published kappa. Scale = 1.
 * NO_INTERNAL_RECONSTRUCTION: only infinity zoom rows are published. Marketing MFD is 0.4 m.
 * Zoom gaps: d3,d9,d19,d21,BF; repeated focus slots invent no internal motion.
 * Semidiameters are modeled ray/section estimates, not published clear apertures.
 * Physical iris radii are inferred from nominal F/4.10 at each source zoom station.
 * Published source radii and image gaps retained. Computed d-line BFD differs from Table9
 * by +0.115575/+0.121967/+0.006766 mm at wide/middle/tele. No refocusing correction applied.
 * Glass coordinate classes do not identify supplier/melt; catalog spectra are proxies.
 * No source-listed cover/filter plate; optional generic patent prose does not authorize inventing one.
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-vario-tessar-t-fe-24-70mm-f4-za-oss-diagnostic",
  maker: "Sony",
  name: "SONY VARIO-TESSAR T* FE 24–70mm f/4 ZA OSS [DIAGNOSTIC ONLY]",
  subtitle: "DIAGNOSTIC_ONLY — LITERAL US 2015/0085165 A1 EXAMPLE 3 — SOURCE RESIDUALS UNRESOLVED",
  visible: false,

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "DIAGNOSTIC ONLY — NOT A VERIFIED PRODUCTION MODEL",
      "12 ELEMENTS / 10 GROUPS",
      "5 FUNCTIONAL ZOOM GROUPS",
      "9 ASPHERICAL SURFACES",
      "INFINITY-ONLY PATENT MODEL",
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
      role: "G1 negative member",
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
      role: "G1 positive member",
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
      role: "G2 negative variator",
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
      role: "G2 negative member",
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
      role: "G2 positive member",
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
      role: "G3 positive lead",
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
      role: "G3 positive blur-correction element",
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
      role: "G3 negative cemented member",
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
      glass: "497816 — low-dispersion crown class",
      role: "G3 positive low-dispersion cemented member",
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
      role: "G3 positive rear",
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
      role: "G4 negative axial focus element; motion unmodeled",
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
      role: "G5 weak negative rear",
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
      sd: 15.3,
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
      sd: 9.7,
      medium: 6,
      asphere: { A4: -1.7333e-6, A6: -4.3031e-7, A8: 5.3145e-9, A10: -1.9092e-11 },
    },
    {
      label: "12A",
      R: 60.38,
      d: 2.84,
      sd: 9.7,
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
    { label: "15", R: -38.17, d: 0.9, sd: 8.5, medium: 8 },
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
    { label: "22", R: -600.62, d: 2, sd: 13, medium: 12 },
    { label: "23", R: "flat", sd: 13 },
  ],

  zoom: {
    stations: [{ focalLengthMm: 24.72 }, { focalLengthMm: 47 }, { focalLengthMm: 67.9 }],
    apertureModel: "from-nominal-fno",
  },

  focus: {
    closeFocusM: 0.4,
    description:
      "DIAGNOSTIC_ONLY. NO_INTERNAL_RECONSTRUCTION: the patent identifies G4/L11 axial focusing but publishes only infinity zoom spacings. Focus slots repeat infinity values; 0.4 m is marketed MFD only. Zoom interpolation and F/4.10-derived iris schedule are modeled, not published motions or diameters.",
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
    "19A": {
      label: "d19",
      values: [
        [5.86, 5.86],
        [3.59, 3.59],
        [2, 2],
      ],
    },
    "21A": {
      label: "d21",
      values: [
        [5.58, 5.58],
        [7.84, 7.84],
        [9.44, 9.44],
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
