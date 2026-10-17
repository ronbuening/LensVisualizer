import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY FE PZ 16-35mm f/4 G                                            ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2023-44106 A, Example 5 (Sony Group Corporation).                ║
 * ║ Production correlation is inferred; the patent does not name SELP1635G.          ║
 * ║ 13 elements / 12 air-separated optical groups; five kinematic groups (GR1-GR5). ║
 * ║ Eight aspherical surfaces: 3A, 4A, 9A, 10A, 17A, 18A, 23A, 24A.                 ║
 * ║                                                                                    ║
 * ║ Zoom: PUBLISHED. GR1 and GR5 are fixed; GR2, GR3, and GR4 move objectward from  ║
 * ║ wide to tele. D8 and D24 are zoom-only. D14 and D18A vary with zoom and focus.  ║
 * ║ The rounded prescription sums to 103.81 mm versus patent L = 103.82 mm; no       ║
 * ║ spacing was altered to absorb that 0.01 mm source-precision residual.             ║
 * ║                                                                                    ║
 * ║ Focus: PUBLISHED. GR3 moves objectward from infinity to the patent's close state. ║
 * ║ Table 23 publishes the close rows at raw d0 = 279 mm. The external reference     ║
 * ║ plane of d0 is not normalized to Sony's marketed 0.28 m wide / 0.24 m tele MFD;  ║
 * ║ no close-focus reconstruction is applied.                                         ║
 * ║                                                                                    ║
 * ║ Scaling: none. All R, d, sd, and asphere coefficients are native patent values.  ║
 * ║ Semi-diameters: patent effective diameters phi / 2. Patent Table 21              ║
 * ║ prints phi(STO) = 15.50 mm: an effective clear-aperture envelope, not a claimed  ║
 * ║ physical iris opening. The stop radius is derived from the design f-number       ║
 * ║ at each zoom station; nominalFno = 4.12 is the modeled wide-open f-number.       ║
 * ║                                                                                    ║
 * ║ Glass: the patent publishes nd/vd only and names no vendors. Conservative         ║
 * ║ coordinate-class labels are used. nC, nF, ng, and dPgF are intentionally omitted ║
 * ║ because vendor-specific spectral data cannot be assigned without inventing glass ║
 * ║ identity.                                                                          ║
 * ║                                                                                    ║
 * ║ Source contradiction: condition (8) is printed without absolute-value bars, but  ║
 * ║ Example 5 Table 62 reports the positive magnitude. Prescription values are not    ║
 * ║ changed to resolve that textual contradiction.                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-fe-pz-16-35-f4-g",
  maker: "Sony",
  name: "SONY FE PZ 16-35mm f/4 G",
  subtitle: "JP 2023-44106 A, Example 5 — inferred production correlation",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "13 ELEMENTS / 12 GROUPS",
      "16.48-33.96 mm PATENT ZOOM STATES",
      "F/4.12 MODELED",
      "100.24°-65.00° PUBLISHED FULL FIELD",
      "8 ASPHERICAL SURFACES",
    ],
    elementCount: 13,
    groupCount: 12,
    focalLengthMm: { marketing: [16, 35], design: [16.48708045, 33.96336323] },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "JP 2023-44106 A",
    patentYear: 2023,
    authors: ["Kohei Uemura", "Tetsuichiro Okumura", "Naoki Miyagawa"],
    assignees: ["Sony Group Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -35.874032,
      glass: "835427 class (vendor unresolved)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Neg. Meniscus (2x Asph)",
      nd: 1.58313,
      vd: 59.5,
      focalLengthMm: -54.289791,
      glass: "583595 class (vendor unresolved)",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: -46.090358,
      glass: "497816 class (vendor unresolved)",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.85451,
      vd: 25.2,
      focalLengthMm: 46.700432,
      glass: "855252 class (vendor unresolved)",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.58313,
      vd: 59.5,
      focalLengthMm: 42.204882,
      glass: "583595 class (vendor unresolved)",
      diagramLabel: "L21",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -53.101032,
      glass: "806333 class (vendor unresolved)",
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.4586,
      vd: 90.2,
      focalLengthMm: 24.644994,
      glass: "459902 class (vendor unresolved)",
      diagramLabel: "L23",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.7,
      focalLengthMm: -56.563369,
      glass: "770297 class (vendor unresolved)",
      diagramLabel: "L31",
    },
    {
      id: 9,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.4971,
      vd: 81.6,
      focalLengthMm: 29.012292,
      glass: "497816 class (source nd 1.49710; vendor unresolved)",
      diagramLabel: "L32",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18,
      focalLengthMm: 84.932872,
      glass: "946180 class (vendor unresolved)",
      diagramLabel: "L41",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.2,
      focalLengthMm: -36.208816,
      glass: "911353 class (source vd rounded 35.2; vendor unresolved)",
      diagramLabel: "L42",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: -57.555988,
      glass: "851401 class (vendor unresolved)",
      diagramLabel: "L43",
    },
    {
      id: 13,
      name: "L51",
      label: "L51",
      type: "Positive Meniscus",
      nd: 1.90043,
      vd: 37.4,
      focalLengthMm: 82.558417,
      glass: "900374 class (vendor unresolved)",
      diagramLabel: "L51",
    },
  ],

  /* ── Surface prescription: Example 5 Table 21, native millimeters ── */
  /* (moved from asph) ── Aspheres: Example 5 Table 24; patent k maps directly to standard K ── */
  surfaces: [
    { label: "1", R: 41.45, d: 1.5, sd: 19.35, medium: 1 },
    { label: "2", R: 17.1, d: 5.52, sd: 14.735 },
    {
      label: "3A",
      R: 27.918,
      d: 1.1,
      sd: 14.205,
      medium: 2,
      asphere: { K: 0, A4: 1.29886e-5, A6: -6.46453e-8, A8: 8.41667e-11, A10: -7.32985e-14, A12: 0, A14: 0 },
    },
    {
      label: "4A",
      R: 14.62,
      d: 7.24,
      sd: 12.565,
      asphere: { K: -0.99515, A4: 3.4781e-5, A6: -3.24962e-8, A8: -1.13527e-10, A10: -2.50732e-13, A12: 0, A14: 0 },
    },
    { label: "5", R: -141.4, d: 0.9, sd: 12.38, medium: 3 },
    { label: "6", R: 27.393, d: 0.3, sd: 11.735 },
    { label: "7", R: 25.1, d: 3.27, sd: 11.73, medium: 4 },
    { label: "8", R: 63.59, sd: 11.4 },
    {
      label: "9A",
      R: 28.219,
      d: 2.9,
      sd: 8.28,
      medium: 5,
      asphere: { K: 0, A4: -7.4038e-6, A6: 3.87602e-8, A8: -1.67778e-10, A10: -7.25665e-12, A12: 0, A14: 0 },
    },
    {
      label: "10A",
      R: -185.198,
      d: 6.3,
      sd: 7.95,
      asphere: { K: 0, A4: 1.65677e-6, A6: 7.49726e-8, A8: -8.61905e-10, A10: -3.0699e-12, A12: 0, A14: 0 },
    },
    // Patent Table 21 prints phi(STO) = 15.50 mm, an effective clear-aperture envelope, not a claimed iris opening.
    { label: "STO", R: "flat", d: 3.61 },
    { label: "12", R: 27.95, d: 0.7, sd: 7.95, medium: 6 },
    // Cemented L22 -> L23 junction: downstream element L23 owns the interface.
    { label: "13", R: 16.72, d: 4.65, sd: 7.79, medium: 7 },
    { label: "14", R: -31.83, sd: 7.77 },
    { label: "15", R: -13.73, d: 0.7, sd: 6.965, medium: 8 },
    { label: "16", R: -20.49, d: 0.2, sd: 7.195 },
    {
      label: "17A",
      R: 172.723,
      d: 3.7,
      sd: 7.25,
      medium: 9,
      asphere: { K: 0, A4: -8.0272e-7, A6: 1.30215e-7, A8: -2.07992e-9, A10: 2.32326e-11, A12: 0, A14: 0 },
    },
    {
      label: "18A",
      R: -15.624,
      sd: 7.45,
      asphere: { K: 0, A4: 2.20397e-5, A6: 1.35487e-7, A8: -1.00338e-9, A10: 1.73469e-11, A12: 0, A14: 0 },
    },
    { label: "19", R: -24.09, d: 1.73, sd: 8.175, medium: 10 },
    { label: "20", R: -19.18, d: 0.26, sd: 8.42 },
    { label: "21", R: -32.01, d: 0.7, sd: 8.36, medium: 11 },
    { label: "22", R: -1100, d: 1.34, sd: 8.57 },
    {
      label: "23A",
      R: -44.594,
      d: 0.8,
      sd: 8.635,
      medium: 12,
      asphere: { K: 0, A4: -5.24839e-5, A6: 2.46939e-7, A8: -3.0344e-9, A10: 5.75983e-12, A12: 0, A14: 0 },
    },
    {
      label: "24A",
      R: -500,
      sd: 9.165,
      asphere: { K: 0, A4: -1.35885e-5, A6: 2.87394e-7, A8: -2.51767e-9, A10: 7.77274e-12, A12: 0, A14: 0 },
    },
    { label: "25", R: -67.27, d: 3.0, sd: 15.07, medium: 13 },
    { label: "26", R: -36.06, d: 20.58, sd: 15.5 },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 16.48, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 22.87, published: true, publishedFocus: [1] },
      { focalLengthMm: 33.96, label: "Tele", published: true, publishedFocus: [1] },
    ],
  },

  /* ── Focus and aperture configuration ── */
  // Sony's production specification is 0.28 m wide / 0.24 m tele; this scalar records the marketed minimum.
  // The var close rows above remain the patent's independent published d0 = 279 mm state and are not reconstructed.
  focus: {
    closeFocusM: 0.24,
    description:
      "PUBLISHED internal focus: GR3 moves objectward. Patent Table 23 supplies infinity and d0=279 mm close spacings at all three zoom states; the external d0 reference plane is unresolved, so no reconstruction to the production 0.28 m wide / 0.24 m tele MFD is applied.",
  },

  /* (moved from var) ── Published zoom/focus variable gaps: Example 5 Table 23 ── */
  gaps: {
    "8": {
      label: "D8 — zoom",
      values: [
        [21.35, 21.35],
        [12.47, 12.47],
        [2.1, 2.1],
      ],
    },
    "14": {
      label: "D14 — focus",
      values: [
        [5.76, 4.82],
        [6.74, 5.45],
        [7.22, 5.2],
      ],
    },
    "18A": {
      label: "D18 — focus",
      values: [
        [3.19, 4.14],
        [4.36, 5.66],
        [9.25, 11.28],
      ],
    },
    "24A": {
      label: "D24 — zoom",
      values: [
        [2.51, 2.51],
        [9.24, 9.24],
        [14.24, 14.24],
      ],
    },
  },

  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Patent kinematic-group and cemented-doublet annotations ── */
  groups: [
    { text: "GR1", fromSurface: "1", toSurface: "8" },
    { text: "GR2", fromSurface: "9A", toSurface: "14" },
    { text: "GR3", fromSurface: "15", toSurface: "18A" },
    { text: "GR4", fromSurface: "19", toSurface: "24A" },
    { text: "GR5", fromSurface: "25", toSurface: "26" },
  ],
  doublets: [{ text: "D1", fromSurface: "12", toSurface: "14" }],

  /* ── Layout ── */
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
