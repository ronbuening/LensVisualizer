import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — PENTAX-02 STANDARD ZOOM 5-15mm f/2.8-4.5                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 8,824,059 B2, Example 1 / Numerical Embodiment 1.           ║
 * ║ Production correlation: PENTAX-02 STANDARD ZOOM, without scaling.       ║
 * ║ Patent physical count: 8 elements / 7 air-separated physical groups.    ║
 * ║ The elements array has 9 material entries because the L11 hybrid lens   ║
 * ║ is modeled as its glass substrate plus its bonded compound-resin layer.  ║
 * ║                                                                          ║
 * ║ Zoom: patent infinity-focus d7 and d9 are retained at f = 5.14, 10.00, ║
 * ║ and 14.83 mm. G1 and G2 reverse slightly between the intermediate and   ║
 * ║ tele states; STO moves integrally with G3.                               ║
 * ║                                                                          ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent specifies L21/G2   ║
 * ║ as the sole focusing group and imageward motion from infinity to finite ║
 * ║ focus, but publishes no finite-focus spacing table. The close pairs      ║
 * ║ below were re-solved from this active prescription to the                ║
 * ║ manufacturer's 0.3 m MFD, with G1/G3/image fixed and d7+d9 conserved.   ║
 * ║ Tele close-focus magnification is 0.057765x, consistent with the         ║
 * ║ manufacturer's rounded approximately 0.06x specification.               ║
 * ║                                                                          ║
 * ║ Rear plates: patent OP filter (surfaces 18-19) and CG cover glass          ║
 * ║ (surfaces 20-21), each 0.500 mm, nd 1.51633, vd 64.1, are modeled in       ║
 * ║ `rearPlates` (traced, not drawn). Surface 17A d is the patent d17          ║
 * ║ (9.264 / 15.248 / 20.989 mm), then OP, 0.620 air, CG, and fB = 0.530       ║
 * ║ to the image plane. Air-equivalent BF 11.073 / 17.057 / 22.798 mm;         ║
 * ║ source rounding leaves <= 0.006 mm residual against the powered BFL.       ║
 * ║                                                                          ║
 * ║ Stop: the patent publishes the stop plane but not its diameter. Its     ║
 * ║ radius is derived from the design f-number at each station.             ║
 * ║ Variable-aperture nominalFNumber values reproduce the                   ║
 * ║ patent design FNO 2.8 / 3.7 / 4.6.                                      ║
 * ║                                                                          ║
 * ║ Semi-diameters: not patent-published. They were derived by exact         ║
 * ║ spherical/aspherical tracing over all three zoom states at infinity and ║
 * ║ constrained close focus, using on-axis marginal rays, the default 0.60  ║
 * ║ field bundle, and the full-field chief ray, then given conservative      ║
 * ║ clearance. Geometry was checked for positive edge thickness, actual rim ║
 * ║ slope, conic domain, cross-gap intrusion, and ray containment.           ║
 * ║                                                                          ║
 * ║ Glass: nd/vd remain the patent d-line values. Generic six-digit classes ║
 * ║ are used only where the coordinate pair is defensible across catalogs;  ║
 * ║ three active glasses and the resin remain explicitly Unmatched. No       ║
 * ║ nC/nF/ng/dPgF fields are authored because the patent supplies none and  ║
 * ║ the generic/unmatched labels do not justify vendor-specific line data.   ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-02-standard-zoom-5-15-f28-45",
  maker: "Pentax",
  name: "PENTAX-02 STANDARD ZOOM 5-15mm f/2.8-4.5",
  subtitle: "US 8,824,059 B2 Example 1 — production correlation; constrained finite-focus reconstruction",

  catalog: {
    lensMounts: ["pentax-q"],
    imageFormat: "1-1.7-inch-type",
    specs: [
      "8 ELEMENTS / 7 PHYSICAL GROUPS",
      "MARKETED 5-15mm f/2.8-4.5",
      "DESIGN f = 5.139-14.825 mm; FNO = 2.8 / 3.7 / 4.6",
      "5 ASPHERICAL SURFACES",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: [5, 15], design: [5.1393252305906, 14.824615381962191] },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 8,824,059 B2",
    patentYear: 2014,
    authors: ["Koji Kato", "Masakazu Saori"],
    assignees: ["Pentax Ricoh Imaging Company, Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11G",
      label: "L11 glass substrate",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -51.66940375752023,
      glass: "773496 class",
      diagramLabel: "L11g",
      cemented: "H1",
    },
    {
      id: 2,
      name: "L11R",
      label: "L11 compound-resin layer",
      type: "Hybrid Resin Layer (1x Asph)",
      nd: 1.52972,
      vd: 42.7,
      focalLengthMm: -109.30428770135437,
      glass: "Unmatched (compound resin, nd=1.52972, vd=42.7)",
      diagramLabel: "L11r",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -35.52908006707872,
      glass: "804465 class",
      diagramLabel: "L12",
    },
    {
      id: 4,
      name: "L13",
      label: "L13",
      type: "Negative Meniscus",
      nd: 1.7493,
      vd: 51.1,
      focalLengthMm: -15.603799407675325,
      glass: "Unmatched (nd=1.74930, vd=51.1)",
      diagramLabel: "L13",
    },
    {
      id: 5,
      name: "L21",
      label: "L21 / G2 focus group",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 32.910129193744936,
      glass: "847238 class",
      diagramLabel: "L21",
    },
    {
      id: 6,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.49283,
      vd: 82.7,
      focalLengthMm: 14.11818149759749,
      glass: "Unmatched (nd=1.49283, vd=82.7)",
      diagramLabel: "L31",
    },
    {
      id: 7,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 15.396276930458113,
      glass: "497816 class",
      diagramLabel: "L32",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L33",
      label: "L33",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.3,
      focalLengthMm: -6.8857622023142,
      glass: "834373 class",
      diagramLabel: "L33",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L34",
      label: "L34",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.51885,
      vd: 65.8,
      focalLengthMm: 15.6218048602841,
      glass: "Unmatched (nd=1.51885, vd=65.8)",
      diagramLabel: "L34",
    },
  ],

  /* ── Surfaces: patent 1-17; OP and CG follow in `rearPlates` ── */
  surfaces: [
    { label: "1", R: 35.132, d: 1.637, sd: 10.4, medium: 1 },
    { label: "2", R: 18.306, d: 0.2, sd: 9, medium: 2 },
    {
      label: "3A",
      R: 13.856,
      d: 1.2,
      sd: 8.8,
      asphere: { K: 0, A4: -8.45e-5, A6: -5.227e-7, A8: 1.614e-10, A10: 0, A12: 0, A14: 0 },
    },
    { label: "4", R: 24.439, d: 1.2, sd: 8.5, medium: 3 },
    { label: "5", R: 12.884, d: 2.273, sd: 7.4 },
    { label: "6", R: 88.391, d: 1.2, sd: 7.1, medium: 4 },
    { label: "7", R: 10.266, sd: 6.2 },
    { label: "8", R: 20.063, d: 2.343, sd: 5.9, medium: 5 },
    { label: "9", R: 67.827, sd: 5.6 },
    { label: "STO", R: "flat", d: 1 },
    {
      label: "11A",
      R: 7.723,
      d: 6.242,
      sd: 3.95,
      medium: 6,
      asphere: { K: 0, A4: -6.956e-5, A6: -1.346e-6, A8: 0, A10: 0, A12: 0, A14: 0 },
    },
    {
      label: "12A",
      R: -51.491,
      d: 0.256,
      sd: 3.45,
      asphere: { K: 0, A4: 3.684e-4, A6: -7.856e-6, A8: 2.109e-7, A10: 0, A12: 0, A14: 0 },
    },
    { label: "13", R: 15.679, d: 2.216, sd: 3.4, medium: 7 },
    { label: "14", R: -14.245, d: 2.02, sd: 3.2, medium: 8 },
    { label: "15", R: 10.242, d: 0.271, sd: 3.05 },
    {
      label: "16A",
      R: 13.326,
      d: 2.256,
      sd: 3.1,
      medium: 9,
      asphere: { K: 0, A4: 5.583e-4, A6: -1.339e-5, A8: 0, A10: 0, A12: 0, A14: 0 },
    },
    {
      label: "17A",
      R: -19.493,
      sd: 3.15,
      asphere: { K: 0, A4: 6.541e-4, A6: 7.907e-6, A8: 0, A10: 0, A12: 0, A14: 0 },
    },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and constrained focus ── */
    stations: [
      { focalLengthMm: 5.14, nominalFNumber: 2.8, label: "Wide" },
      { focalLengthMm: 10, nominalFNumber: 3.7 },
      { focalLengthMm: 14.83, nominalFNumber: 4.6, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.3,
    description:
      "CONSTRAINED_RECONSTRUCTION: L21/G2 alone moves imageward from infinity to the manufacturer 0.3 m MFD. " +
      "D7 increases and D9 decreases by equal amounts at each zoom position, preserving their adjacent-gap sum. " +
      "The close pairs were re-solved on the active prescription (OP/CG stack air-equivalent); the patent publishes the " +
      "focus group and direction but no finite-focus spacing table.",
  },

  gaps: {
    "7": {
      label: "D7 (ZOOM + FOCUS)",
      values: [
        [6.822, 7.136863975883002],
        [5.367, 5.690537392886773],
        [5.091, 5.420879615045256],
      ],
    },
    "9": {
      label: "D9 (ZOOM + FOCUS)",
      values: [
        [22.449, 22.134136024117],
        [6.704, 6.380462607113227],
        [1.333, 1.0031203849547445],
      ],
    },
    "17A": {
      label: "D17 (TO OP)",
      values: [
        [9.264, 9.264],
        [15.248, 15.248],
        [20.989, 20.989],
      ],
    },
  },

  aperture: { fStops: [2.8, 4, 5.6, 8], maxFNumber: 8, blades: 5 },

  /* ── Optical filter OP and cover glass CG (patent surfaces 18–21): traced, not drawn ── */
  rearPlates: [
    {
      label: "OP",
      thicknessMm: 0.5,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      gapAfterMm: 0.62,
      source: "US 8,824,059 B2, Numerical Embodiment 1 Table 1 surfaces 18–19",
    },
    {
      label: "CG",
      thicknessMm: 0.5,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      gapAfterMm: 0.53,
      source: "US 8,824,059 B2, Numerical Embodiment 1 Table 1 surfaces 20–21; Table 2 fB = 0.53",
    },
  ],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (+)", fromSurface: "8", toSurface: "9" },
    { text: "G3 (+)", fromSurface: "11A", toSurface: "17A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "D1", fromSurface: "13", toSurface: "15" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
