import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON 1 NIKKOR VR 10-30mm f/3.5-5.6 PD-ZOOM                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2018/0196240 A1, Example 11 / Table 11 (Nikon).          ║
 * ║  Active model: 9 elements / 7 air-separated groups; 7 aspherical          ║
 * ║  surfaces on 4 elements; no scaling; source surfaces 1-17 retained.       ║
 * ║                                                                              ║
 * ║  Zoom positions: 10.20 / 20.00 / 29.40 mm source control states.          ║
 * ║  Zoom gaps: D6, D13, D15. G1 reverses between W-M and M-T.                ║
 * ║  Focus: PUBLISHED. G3 moves imageward from infinity to D=200 mm;          ║
 * ║  D13 increases while D15 decreases. No additional focus states are        ║
 * ║  reconstructed. BF remains 13.30 mm in all published states.              ║
 * ║                                                                              ║
 * ║  Stop: source surface 10 is the sole aperture stop. The patent gives no   ║
 * ║  stop diameter. The stop radius is derived from the design f-number and   ║
 * ║  held at every zoom station; it is not a published diaphragm measurement. ║
 * ║  nominalFNumber stores the modeled W/M/T values from the original         ║
 * ║  fixed-iris calibration against the Table 11 W/T f-numbers.               ║
 * ║                                                                              ║
 * ║  Semi-diameters: not published. Modeled SDs were derived from exact       ║
 * ║  meridional ray envelopes, source endpoint field angles, Fig. 30A/B       ║
 * ║  proportions, and current edge/rim/gap constraints. They pass the Stage 2 ║
 * ║  geometry checks; the 2026-09-26 production render-trim sweep passes. ║
 * ║                                                                              ║
 * ║  Source discrepancy: Table 11 prints W TL=63.0 mm, but the actual W       ║
 * ║  prescription spacings sum to 59.995 mm and independently reproduce EFL   ║
 * ║  and BFD. No +3.005 mm spacing is inserted here.                           ║
 * ║                                                                              ║
 * ║  Marketing vs design: production is marketed as 10-30mm f/3.5-5.6.       ║
 * ║  This Example 11 model is 10.2-29.4 mm and approximately f/3.60-6.41.     ║
 * ║  The current scalar fNumber.marketing/fNumber.design fields are omitted   ║
 * ║  rather than flattening variable endpoint values.                          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-1-nikkor-vr-10-30mm-f35-56-pd-zoom",
  maker: "Nikon",
  name: "NIKON 1 NIKKOR VR 10-30mm f/3.5-5.6 PD-ZOOM",
  subtitle: "US 2018/0196240 A1 Example 11 — strong production correlation; not manufacturer-confirmed",

  catalog: {
    lensMounts: ["nikon-1"],
    imageFormat: "1-inch-type",
    specs: [
      "9 ELEMENTS / 7 GROUPS",
      "10-30mm MARKETED; 10.2-29.4mm PATENT",
      "f/3.5-5.6 MARKETED; f/3.60-6.41 MODELED",
      "4 ASPHERICAL ELEMENTS / 7 ASPHERICAL SURFACES",
      "0.2 m MFD",
    ],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: [10, 30], design: [10.191560132801747, 29.366454164301768] },
  },

  source: {
    patentNumber: "US 2018/0196240 A1",
    patentYear: 2018,
    authors: ["Makoto Fujimoto", "Takeshi Umeda"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.3,
      indexReference: "d",
      focalLengthMm: -17.337902958409725,
      glass: "S-PHM52 (supplier-neutral catalog proxy)",
      apd: false,
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.623,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: -24.882459574093122,
      glass: "S-BSM15 (supplier-neutral catalog proxy)",
      apd: false,
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 25.5,
      indexReference: "d",
      focalLengthMm: 29.540130836887673,
      glass: "TAFD40 (supplier-neutral catalog proxy)",
      apd: false,
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.619,
      vd: 63.9,
      indexReference: "d",
      focalLengthMm: 10.90888608244395,
      glass: "M-PCD4 (supplier-neutral catalog proxy)",
      apd: false,
      diagramLabel: "L21",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Negative Meniscus",
      nd: 1.603,
      vd: 38.0,
      indexReference: "d",
      focalLengthMm: -21.242846681005943,
      glass: "S-TIM5 (supplier-neutral catalog proxy)",
      apd: false,
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Negative Meniscus",
      nd: 1.583,
      vd: 46.5,
      indexReference: "d",
      focalLengthMm: -19.50233543829944,
      glass: "S-BAM3 (supplier-neutral catalog proxy)",
      apd: false,
      diagramLabel: "L23",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L24",
      label: "L24",
      type: "Biconvex Positive",
      nd: 1.498,
      vd: 82.6,
      indexReference: "d",
      focalLengthMm: 11.078160513680805,
      glass: "J-FKH1 (supplier-neutral catalog proxy)",
      apd: "inferred",
      apdNote:
        "ED-class inference from the coordinate-compatible J-FKH1 curve (catalog dPgF approximately +0.0337); not patent-measured partial dispersion or proof of production glass identity.",
      diagramLabel: "L24",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.619,
      vd: 63.9,
      indexReference: "d",
      focalLengthMm: -23.47856945940605,
      glass: "M-PCD4 (supplier-neutral catalog proxy)",
      apd: false,
      diagramLabel: "L31",
    },
    {
      id: 9,
      name: "L41",
      label: "L41",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.517,
      vd: 63.9,
      indexReference: "d",
      focalLengthMm: 34.9840776221714,
      glass: "N-BK7 (supplier-neutral catalog proxy)",
      apd: false,
      diagramLabel: "L41",
    },
  ],

  surfaces: [
    { label: "1", R: 131.926, d: 0.8, sd: 8.4, medium: 1 },
    { label: "2", R: 9.887, d: 2.207, sd: 6.8 },
    {
      label: "3A",
      R: 22.899,
      d: 1.0,
      sd: 6.9,
      medium: 2,
      asphere: {
        K: 0,
        A4: -3.833e-4,
        A6: 9.067e-6,
        A8: -6.487e-8,
        A10: 7.866e-11,
        A12: 0,
        A14: 0,
      },
    },
    {
      label: "4A",
      R: 9.089,
      d: 0.862,
      sd: 6.3,
      asphere: {
        K: 0,
        A4: -5.554e-4,
        A6: 8.416e-6,
        A8: -3.144e-8,
        A10: -7.595e-10,
        A12: 0,
        A14: 0,
      },
    },
    { label: "5", R: 11.594, d: 1.892, sd: 6.4, medium: 3 },
    { label: "6", R: 17.515, sd: 6.1 },
    {
      label: "7A",
      R: 15.735,
      d: 3.218,
      sd: 4.9,
      medium: 4,
      asphere: {
        K: 0,
        A4: -6.517e-5,
        A6: -1.259e-6,
        A8: 3.629e-8,
        A10: 8.838e-11,
        A12: 0,
        A14: 0,
      },
    },
    { label: "8", R: -10.904, d: 0.8, sd: 4.7, medium: 5 },
    { label: "9", R: -75.326, d: 2.678, sd: 4.5 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "11", R: 16.112, d: 0.8, sd: 3.9, medium: 6 },
    { label: "12", R: 6.544, d: 2.114, sd: 3.9, medium: 7 },
    { label: "13", R: -31.376, sd: 3.9 },
    {
      label: "14A",
      R: 39.745,
      d: 0.8,
      sd: 4.0,
      medium: 8,
      asphere: {
        K: 0,
        A4: 8.336e-4,
        A6: -3.542e-5,
        A8: 1.312e-7,
        A10: 3.038e-8,
        A12: 0,
        A14: 0,
      },
    },
    {
      label: "15A",
      R: 10.56,
      sd: 4.0,
      asphere: {
        K: 0,
        A4: 1.164e-3,
        A6: -4.103e-5,
        A8: 8.025e-7,
        A10: -4.76e-9,
        A12: 0,
        A14: 0,
      },
    },
    {
      label: "16A",
      R: -23.03,
      d: 2.584,
      sd: 6.5,
      medium: 9,
      asphere: {
        K: 0,
        A4: 1.801e-4,
        A6: 1.181e-6,
        A8: -3.912e-8,
        A10: 1.795e-11,
        A12: 0,
        A14: 0,
      },
    },
    {
      label: "17A",
      R: -10.518,
      d: 13.3,
      sd: 6.7,
      asphere: {
        K: 0,
        A4: 1.621e-4,
        A6: 1.593e-6,
        A8: -2.352e-8,
        A10: -1.206e-10,
        A12: 0,
        A14: 0,
      },
    },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 10.2, nominalFNumber: 3.596331920009204, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 20.0, nominalFNumber: 5.046339542821676, published: true, publishedFocus: [1] },
      { focalLengthMm: 29.4, nominalFNumber: 6.406521031094748, label: "Tele", published: true, publishedFocus: [1] },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 0.2,
    description: "PUBLISHED: G3 moves imageward to the Table 11 D=200 mm state; no extra focus states.",
  },

  gaps: {
    "6": {
      label: "D6",
      values: [
        [18.51, 18.51],
        [6.32, 6.32],
        [2.14, 2.14],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [1.57, 1.98],
        [6.56, 8.15],
        [11.21, 14.4],
      ],
    },
    "15A": {
      label: "D15",
      values: [
        [5.36, 4.95],
        [8.74, 7.16],
        [11.31, 8.12],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7A", toSurface: "13" },
    { text: "G3", fromSurface: "14A", toSurface: "15A" },
    { text: "G4", fromSurface: "16A", toSurface: "17A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7A", toSurface: "9" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
  ],

  layout: { yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
