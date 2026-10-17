import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PENTAX SMC DA 17-70mm f/4 AL [IF] SDM                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 7,804,652 B2, Embodiment 4 (Masakazu Saori / Hoya).            ║
 * ║  Unscaled patent prescription: 17.50 / 35.00 / 67.89 mm at f/4.1.          ║
 * ║  Five functional zoom groups (+ − + − +); 17 physical elements in          ║
 * ║  12 air-separated assemblies; two hybrid resin aspherical elements.        ║
 * ║                                                                            ║
 * ║  MATERIAL MODEL: The two bonded resin layers are separate refractive        ║
 * ║  records, so `elements` contains 19 material layers while `elementCount`    ║
 * ║  retains the patent/manufacturer physical count of 17.                      ║
 * ║                                                                            ║
 * ║  ZOOM MODEL: Published infinity states only. Variable gaps are D5, D17,     ║
 * ║  D22, D25, and BFD. D22 is split at the published stop location:           ║
 * ║  surface 22 → STO = 1.41 mm; STO → surface 23 = D22 − 1.41 mm.              ║
 * ║  The patent describes a G2 imageward/objectward U-turn, but its turning     ║
 * ║  point is not tabulated; no extra control point is invented.                ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION. The production lens is           ║
 * ║  inner-focusing, but the patent gives no close-focus prescription or        ║
 * ║  mechanism constraints. Every zoom-state focus pair is therefore identical.║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: Not published. Figure 13 supplies the relative element      ║
 * ║  proportions; exact meridional tracing of the full-field chief ray, full     ║
 * ║  axial marginal ray, and default 0.6-field bundle at all zoom states sets    ║
 * ║  the clearance floor. The result is checked for edge thickness, actual rim  ║
 * ║  slope, cross-gap intrusion, and off-axis containment. The stop radius is   ║
 * ║  derived from the design f-number at each station, including the wide-state ║
 * ║  f/4.1 target; the middle and tele openings are larger.                     ║
 * ║  L3 (surfaces 4/5) was raised to the 24.4 mm rim Figure 13 draws, which    ║
 * ║  passes the traced chief ray to the APS-C corner at every zoom state       ║
 * ║  (2026-09-24 field-coverage audit).                                        ║
 * ║                                                                            ║
 * ║  No scale factor, cover glass, filter, dummy plane, or mechanical part      ║
 * ║  is included. The patent publishes no nC, nF, ng, or dPgF data.             ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "pentax-da-17-70mm-f4-al-if-sdm",
  maker: "Pentax",
  name: "PENTAX SMC DA 17-70mm f/4 AL [IF] SDM",
  subtitle: "US 7,804,652 B2 EMBODIMENT 4 — STRONG PRODUCTION CORRELATION",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: [
      "17 ELEMENTS / 12 GROUPS",
      "DESIGN 17.50–67.89 mm",
      "F/4.1 MODELED",
      "2ω = 80.6°–23.2°",
      "2 HYBRID ASPHERICAL ELEMENTS",
    ],
    elementCount: 17,
    groupCount: 12,
    focalLengthMm: { marketing: [17, 70], design: [17.5006, 67.8703] },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "US 7,804,652 B2",
    patentYear: 2010,
    authors: ["Masakazu Saori"],
    assignees: ["Hoya Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -172.3482,
      glass: "847238 — dense flint (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 138.6423,
      glass: "713539 — LAC8/S-LAL8-class lanthanum crown (code equivalent)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus, convex to object",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 115.278,
      glass: "773496 — high-index lanthanum flint (vendor unresolved)",
    },
    {
      id: 4,
      name: "L4r",
      label: "Element 4 resin layer",
      type: "Hybrid Resin Negative Meniscus (1× Asph)",
      nd: 1.527,
      vd: 43.7,
      focalLengthMm: -341.4156,
      glass: "Unmatched (hybrid aspherical resin nd=1.52700, vd=43.7)",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4g",
      label: "Element 4 glass substrate",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -21.8019,
      glass: "804466 — high-index lanthanum flint (vendor unresolved)",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -34.721,
      glass: "804466 — high-index lanthanum flint (vendor unresolved)",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -79.9033,
      glass: "834372 — dense lanthanum flint (vendor unresolved)",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: 26.5302,
      glass: "593353 — flint (vendor unresolved)",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -22.5496,
      glass: "804466 — high-index lanthanum flint (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.7,
      focalLengthMm: 41.1325,
      glass: "785257 — dense flint (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      focalLengthMm: 32.9268,
      glass: "567428 — light flint (vendor unresolved)",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      focalLengthMm: 23.48,
      glass: "589612 — barium crown (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -25.579,
      glass: "805254 — dense flint (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus, convex to image",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 28.2004,
      glass: "847238 — dense flint (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -17.4062,
      glass: "804466 — high-index lanthanum flint (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 40.0198,
      glass: "487702 — fluor crown (vendor unresolved)",
    },
    {
      id: 17,
      name: "L16r",
      label: "Element 16 resin layer",
      type: "Hybrid Resin Positive Meniscus (1× Asph)",
      nd: 1.52972,
      vd: 42.7,
      focalLengthMm: 401.1494,
      glass: "Unmatched (hybrid aspherical resin nd=1.52972, vd=42.7)",
      cemented: "H2",
    },
    {
      id: 18,
      name: "L16g",
      label: "Element 16 glass substrate",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -37.5119,
      glass: "805254 — dense flint (vendor unresolved)",
      cemented: "H2",
    },
    {
      id: 19,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 36.4522,
      glass: "487702 — fluor crown (vendor unresolved)",
      cemented: "H2",
    },
  ],

  surfaces: [
    { label: "1", R: 285.09, d: 1.8, sd: 26.0, medium: 1 },
    { label: "2", R: 96.239, d: 5.19, sd: 24.5, medium: 2 },
    { label: "3", R: 3559.161, d: 0.1, sd: 23.0 },
    { label: "4", R: 49.493, d: 5.49, sd: 24.4, medium: 3 },
    { label: "5", R: 106.028, sd: 24.4 },

    {
      label: "6A",
      R: 199.217,
      d: 0.1,
      sd: 13.2,
      medium: 4,
      asphere: { K: 0, A4: 2.3425e-5, A6: -5.5109e-8, A8: 1.3114e-10 },
    },
    { label: "7", R: 94.524, d: 1.2, sd: 13.2, medium: 5 },
    { label: "8", R: 14.703, d: 5.47, sd: 10.4 },
    { label: "9", R: -91.784, d: 1.0, sd: 9.5, medium: 6 },
    { label: "10", R: 40.312, d: 1.27, sd: 9.0 },
    { label: "11", R: -792.605, d: 0.9, sd: 8.8, medium: 7 },
    { label: "12", R: 72.794, d: 0.15, sd: 8.7 },
    { label: "13", R: 30.191, d: 6.49, sd: 8.7, medium: 8 },
    { label: "14", R: -30.191, d: 1.04, sd: 7.8 },
    { label: "15", R: -18.411, d: 1.0, sd: 7.8, medium: 9 },
    { label: "16", R: 1216.028, d: 2.3, sd: 8.5, medium: 10 },
    { label: "17", R: -33.13, sd: 8.9 },

    { label: "18", R: 48.029, d: 3.67, sd: 9.7, medium: 11 },
    { label: "19", R: -29.724, d: 0.1, sd: 9.8 },
    { label: "20", R: 32.462, d: 4.53, sd: 9.7, medium: 12 },
    { label: "21", R: -22.857, d: 1.0, sd: 9.5, medium: 13 },
    { label: "22", R: 212.245, d: 1.41, sd: 9.3 },
    { label: "STO", R: "flat" },

    { label: "23", R: -31.431, d: 2.8, sd: 8.3, medium: 14 },
    { label: "24", R: -14.123, d: 1.0, sd: 8.5, medium: 15 },
    { label: "25", R: 1587.5, sd: 8.9 },

    { label: "26", R: 43.935, d: 4.56, sd: 11.0, medium: 16 },
    { label: "27", R: -33.898, d: 0.1, sd: 11.2 },
    {
      label: "28A",
      R: -7107.317,
      d: 0.1,
      sd: 11.2,
      medium: 17,
      asphere: { K: 0, A4: -1.9525e-5, A6: -9.1623e-9, A8: 0 },
    },
    { label: "29", R: -206.329, d: 1.0, sd: 11.2, medium: 18 },
    { label: "30", R: 35.46, d: 5.23, sd: 11.3, medium: 19 },
    { label: "31", R: -33.899, sd: 11.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 17.5, label: "Wide" },
      { focalLengthMm: 35.0 },
      { focalLengthMm: 67.89, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.28,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the production lens uses inner focusing, but Embodiment 4 publishes only " +
      "infinity zoom states. Focus endpoint spacings are intentionally identical at every zoom position.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [3.1, 3.1],
        [18.13, 18.13],
        [33.7, 33.7],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [16.92, 16.92],
        [6.68, 6.68],
        [1.0, 1.0],
      ],
    },
    STO: {
      label: "D22 − 1.41",
      values: [
        [2.56, 2.56],
        [10.32, 10.32],
        [14.93, 14.93],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [13.39, 13.39],
        [5.62, 5.62],
        [1.0, 1.0],
      ],
    },
    "31": {
      label: "BF",
      values: [
        [39.04, 39.04],
        [49.45, 49.45],
        [64.38, 64.38],
      ],
    },
  },

  aperture: { nominalFNumber: 4.1, fStops: [4.1, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "17" },
    { text: "G3 (+)", fromSurface: "18", toSurface: "22" },
    { text: "G4 (−)", fromSurface: "23", toSurface: "25" },
    { text: "G5 (+)", fromSurface: "26", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
    { text: "H2", fromSurface: "28A", toSurface: "31" },
  ],

  layout: { scFill: 0.62, yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
