import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — PENTAX HD D FA 28-105mm f/3.5-5.6 ED DC WR                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: US 2017/0068075 A1, Numerical Embodiment 2, Tables 5–8.             ║
 * ║ Correlation target: HD PENTAX-D FA 28-105mm F3.5-5.6ED DC WR.                     ║
 * ║ Five-group positive-negative-positive-negative-positive zoom.                       ║
 * ║ 15 physical optical elements / 11 air-spaced groups / 3 aspherical surfaces.       ║
 * ║ The elements array has 16 material entries because the L21 hybrid lens is modeled   ║
 * ║ as its synthetic-resin aspherical layer plus its glass body; elementCount remains   ║
 * ║ the patent/product physical count of 15.                                             ║
 * ║                                                                                      ║
 * ║ Zoom states: 28.70, 54.99, and 102.38 mm at infinity.                               ║
 * ║ Zoom-only variable gaps: D5, D14, D20, D23, and BF (surface 28).                    ║
 * ║ G3, the diaphragm, and G5 move integrally to source precision; no group reverses.    ║
 * ║                                                                                      ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes infinity-focus zoom  ║
 * ║ states only. Every [infinity, close] pair is therefore identical. The manufacturer  ║
 * ║ 0.5 m minimum-focus specification is catalog metadata and is not used to invent      ║
 * ║ internal focus motion.                                                               ║
 * ║                                                                                      ║
 * ║ No scale factor is applied. Patent prescription dimensions and asphere coefficients  ║
 * ║ are retained directly. nominalFNumber uses the modeled patent values f/3.6, f/4.6,   ║
 * ║ and f/5.7 rather than the rounded marketing range f/3.5–5.6.                         ║
 * ║                                                                                      ║
 * ║ Semi-diameters are inferred, not patent-published. They enclose the maximum of the   ║
 * ║ full on-axis marginal bundle and the 0.6-field, ±0.75-pupil paraxial bundles over    ║
 * ║ all three zoom states with conservative allowance, then were checked against the     ║
 * ║ proportions in patent Figs. 7 and 10. G2 and G4 rim heights are silhouette-          ║
 * ║ tuned to Fig. 7 after the ray-envelope pass. The stop radius is derived from the     ║
 * ║ design f-number at wide and held at every station. The earlier fixed-opening         ║
 * ║ estimate was the mean radius implied independently by the three printed f-numbers.   ║
 * ║ Surfaces 1-3 and the hybrid front element (6A/7) were raised to pass the traced      ║
 * ║ chief ray to the patent's Y = 21.64 mm at every zoom state (2026-09-24 field-        ║
 * ║ coverage audit).                                                                     ║
 * ║                                                                                      ║
 * ║ Patent Table 5 publishes nd and νd only. nC, nF, ng, and dPgF are intentionally      ║
 * ║ omitted rather than inferred. Glass strings retain six-digit classes unless a vendor ║
 * ║ identity is uniquely defensible; the synthetic-resin layer is explicitly unmatched. ║
 * ║                                                                                      ║
 * ║ Manufacturer identity sources:                                                       ║
 * ║ https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/                    ║
 * ║   hdpentax-dfa-28-105/                                                               ║
 * ║ https://news.ricoh-imaging.co.jp/rim_info2/2016/20160218_019316.html                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-dfa-28-105-f3556-ed-dc-wr",
  maker: "Pentax",
  name: "PENTAX HD D FA 28-105mm f/3.5-5.6 ED DC WR",
  subtitle: "US 2017/0068075 A1 — Numerical Embodiment 2; production correlation inferred",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 11 GROUPS",
      "PATENT f = 28.70–102.38 mm",
      "PATENT f/3.6–5.7",
      "FULL FIELD = 76.2°–23.4°",
      "2 ASPHERICAL ELEMENTS / 3 ASPHERICAL SURFACES",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: [28, 105], design: [28.699795423, 102.366405003] },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: {
    patentNumber: "US 2017/0068075 A1",
    patentYear: 2017,
    authors: ["Tatsuyuki Onozaki"],
    assignees: ["Ricoh Imaging Company, Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "G1 front negative element",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -143.481680067,
      glass: "847238 — optical-glass class (vendor unresolved)",
      role: "Negative member of the front cemented pair.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "G1 cemented positive element",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: 111.875272635,
      glass: "816466 — optical-glass class (vendor unresolved)",
      role: "Positive member of the front cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "G1 rear positive element",
      type: "Positive Meniscus",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: 152.957725858,
      glass: "816466 — optical-glass class (vendor unresolved)",
      role: "Rear positive element of the first zoom group.",
    },
    {
      id: 4,
      name: "L21R",
      label: "L21 synthetic-resin aspherical layer",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.52972,
      vd: 42.7,
      focalLengthMm: -568.439038938,
      glass: "Unmatched (synthetic resin aspherical layer; nd=1.52972, νd=42.7)",
      role: "Thin molded resin layer forming the object-side asphere of the hybrid L21 element.",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L21G",
      label: "L21 glass body",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -21.724867859,
      glass: "883408 — optical-glass class (vendor unresolved)",
      role: "Glass substrate of the hybrid front member in G2.",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L22",
      label: "G2 biconcave negative element",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: -31.303872855,
      glass: "729547 — optical-glass class (vendor unresolved)",
      role: "Second negative member of the variator group.",
    },
    {
      id: 7,
      name: "L23",
      label: "G2 biconvex positive element",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: 20.930881697,
      glass: "728285 — optical-glass class (vendor unresolved)",
      role: "Positive chromatic and Petzval-balancing member within G2.",
    },
    {
      id: 8,
      name: "L24",
      label: "G2 rear negative element",
      type: "Negative Meniscus",
      nd: 1.788,
      vd: 47.4,
      focalLengthMm: -42.047761153,
      glass: "788474 — optical-glass class (vendor unresolved)",
      role: "Rear negative member of the variator group.",
    },
    {
      id: 9,
      name: "L31",
      label: "G3 front positive element",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 38.116745061,
      glass: "697555 — optical-glass class (vendor unresolved)",
      role: "Front positive member of the third group immediately behind the diaphragm.",
    },
    {
      id: 10,
      name: "L32",
      label: "G3 cemented negative element",
      type: "Negative Meniscus",
      nd: 1.8,
      vd: 29.9,
      focalLengthMm: -32.873033328,
      glass: "800299 — optical-glass class (OHARA S-NBH55 candidate; vendor unresolved)",
      role: "Negative member of the G3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L33",
      label: "G3 cemented positive low-dispersion element",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 24.247690947,
      glass: "497816 — ED crown class (S-FPL51/FCD1/N-PK52A/J-FK01A equivalents; vendor unresolved)",
      role: "Low-dispersion positive member; probable marketed ED element, with vendor identity unresolved.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L41",
      label: "G4 cemented negative element",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -25.34431691,
      glass: "603607 — optical-glass class (vendor unresolved)",
      role: "Negative member of the fourth-group cemented pair.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L42",
      label: "G4 cemented positive element",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 48.117573094,
      glass: "847238 — optical-glass class (vendor unresolved)",
      role: "Positive member of the fourth-group cemented pair.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L51",
      label: "G5 double-aspherical positive element",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58913,
      vd: 61.2,
      focalLengthMm: 31.91737139,
      glass: "589612 — optical-glass class (vendor unresolved)",
      role: "Two-sided aspherical positive element leading the fifth group.",
    },
    {
      id: 15,
      name: "L52",
      label: "G5 cemented negative element",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      focalLengthMm: -23.100717896,
      glass: "720347 — optical-glass class (S-NBH8/N-KZFS8 equivalents; vendor unresolved)",
      role: "Negative member of the rear cemented pair; no anomalous-dispersion assignment is made without line data.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L53",
      label: "G5 cemented positive element",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 33.669908695,
      glass: "618634 — optical-glass class (vendor unresolved)",
      role: "Final positive member of the rear cemented pair.",
      cemented: "D4",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 1208.96, d: 1.96, sd: 22.5, medium: 1 },
    { label: "2", R: 110.306, d: 5.07, sd: 21.7, medium: 2 },
    { label: "3", R: -518.616, d: 0.1, sd: 21.2 },
    { label: "4", R: 49.637, d: 3.91, sd: 19, medium: 3 },
    { label: "5", R: 79.494, sd: 18 },
    {
      label: "6A",
      R: 81.778,
      d: 0.15,
      sd: 11.4,
      medium: 4,
      asphere: { K: 0, A4: 1.315e-5, A6: 7.792e-9, A8: -1.085e-10, A10: 6.816e-13, A12: 0, A14: 0 },
    },
    { label: "7", R: 64.271, d: 1.1, sd: 11.4, medium: 5 },
    { label: "8", R: 14.655, d: 5.69, sd: 10.2 },
    { label: "9", R: -43.844, d: 0.82, sd: 9, medium: 6 },
    { label: "10", R: 47.989, d: 0.48, sd: 9 },
    { label: "11", R: 29.516, d: 4.71, sd: 8.8, medium: 7 },
    { label: "12", R: -29.402, d: 0.71, sd: 8.8 },
    { label: "13", R: -21.069, d: 0.8, sd: 8.8, medium: 8 },
    { label: "14", R: -58.831, sd: 8.8 },
    { label: "STO", R: "flat", d: 0.91 },
    { label: "16", R: 31.214, d: 2.75, sd: 8.8, medium: 9 },
    { label: "17", R: -171.68, d: 0.1, sd: 8.9 },
    { label: "18", R: 28.446, d: 1.04, sd: 8.9, medium: 10 },
    { label: "19", R: 13.443, d: 5.4, sd: 8.9, medium: 11 },
    { label: "20", R: -100.868, sd: 8.9 },
    { label: "21", R: -39.83, d: 0.8, sd: 7.8, medium: 12 },
    { label: "22", R: 24.992, d: 1.72, sd: 7.8, medium: 13 },
    { label: "23", R: 62.616, sd: 7.8 },
    {
      label: "24A",
      R: 63.837,
      d: 6,
      sd: 10.3,
      medium: 14,
      asphere: { K: 0, A4: -1.28e-5, A6: -1.703e-8, A8: 6.628e-10, A10: 4.269e-13, A12: 0, A14: 0 },
    },
    {
      label: "25A",
      R: -25.726,
      d: 0.77,
      sd: 10.8,
      asphere: { K: 0, A4: 9.22e-6, A6: 2.232e-8, A8: -1.534e-10, A10: 3.866e-12, A12: 0, A14: 0 },
    },
    { label: "26", R: -174.966, d: 1, sd: 10.8, medium: 15 },
    { label: "27", R: 18.437, d: 5.76, sd: 10.8, medium: 16 },
    { label: "28", R: 142.496, sd: 10.8 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 28.7, nominalFNumber: 3.6, label: "Wide" },
      { focalLengthMm: 54.99, nominalFNumber: 4.6 },
      { focalLengthMm: 102.38, nominalFNumber: 5.7, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes infinity-focus zoom states only. All modeled infinity/close pairs are identical; the manufacturer 0.5 m minimum-focus specification is metadata only.",
  },

  /* (moved from var) ── Zoom-only variable air spacings; close-focus pairs intentionally identical ── */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [3.978, 3.978],
        [21.488, 21.488],
        [38.964, 38.964],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [17.516, 17.516],
        [7.822, 7.822],
        [1.9, 1.9],
      ],
    },
    "20": {
      label: "D20",
      values: [
        [2.15, 2.15],
        [6.879, 6.879],
        [9.716, 9.716],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [9.416, 9.416],
        [4.688, 4.688],
        [1.85, 1.85],
      ],
    },
    "28": {
      label: "BF",
      values: [
        [43.84, 43.84],
        [57.56, 57.56],
        [75, 75],
      ],
    },
  },

  aperture: { fStops: [3.6, 4, 4.6, 5.6, 5.7, 8, 11, 16, 22, 32, 38], maxFNumber: 38, blades: 9 },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "16", toSurface: "20" },
    { text: "G4 (−)", fromSurface: "21", toSurface: "23" },
    { text: "G5 (+)", fromSurface: "24A", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
    { text: "D4", fromSurface: "26", toSurface: "28" },
  ],

  layout: { scFill: 0.55, yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
