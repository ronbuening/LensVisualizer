import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 400mm f/2.8 L IS III USM                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0041605 A1, Example 2 / Numerical Data 2.                   ║
 * ║  Correlation to the production lens is inferred from focal length/aperture,        ║
 * ║  architecture, focus/IS arrangement, patent timing, and Canon product data.         ║
 * ║  Active model: 16 elements / 12 air-separated groups, all spherical.                ║
 * ║                                                                                    ║
 * ║  REAR FILTER PLATE: patent surfaces 30–31 are the explicit rear glass block G      ║
 * ║  (filter): 2.20 mm, nd 1.51633, νd 64.14, θgF 0.5353. It is drawn as a             ║
 * ║  plane-parallel plate element, not counted in elementCount, with a ray-trace       ║
 * ║  estimated semi-diameter (the patent lists none); surface 29 keeps the patent d29  ║
 * ║  = 7.77 mm and 60.70 mm of air follows the plate. Air-equivalent BF for reference: ║
 * ║  7.77 + 2.20/1.51633 + 60.70 = 69.920872 mm.                                       ║
 * ║                                                                                    ║
 * ║  SCALING: none (s = 1). The patent publishes f = 392.00 mm; the rounded             ║
 * ║  prescription independently traces to EFL = 391.938134284 mm. The marketed         ║
 * ║  400 mm focal length remains separate metadata.                                     ║
 * ║                                                                                    ║
 * ║  FOCUS STATUS — CONSTRAINED_RECONSTRUCTION: the patent publishes only that L2      ║
 * ║  translates axially while L3 stays fixed; it does not publish finite-focus gaps.    ║
 * ║  The close state is a one-DOF paraxial solve constrained to Canon's rounded 2.5 m  ║
 * ║  MFD. L2 moves +19.0782676028358 mm imageward. The adjacent air gaps remain        ║
 * ║  complementary, preserving 5.00 + 36.49 = 41.49 mm exactly.                        ║
 * ║                                                                                    ║
 * ║  STOP: patent surface 14. The patent gives F/2.90 but no stop diameter. The stop   ║
 * ║  radius is derived from the design f-number.                                       ║
 * ║                                                                                    ║
 * ║  SEMI-DIAMETERS: not published. They are model values derived from paraxial        ║
 * ║  marginal/chief rays, the Example 2 section (Fig. 2A), edge-thickness and actual   ║
 * ║  rim-slope limits, shared-gap sag clearance, default off-axis containment, and      ║
 * ║  the production barrel envelope. They are not represented as patent dimensions.    ║
 * ║                                                                                    ║
 * ║  SPECTRAL FIELDS: original Numerical Data 2 supplies nd/vd and θgF for all 17 media, including G.    ║
 * ║  Source θgF is retained as dPgF=θgF−(0.6438−0.001682*vd); no C/F/g line indices are published.      ║
 * ║  Catalog-anchored per-lens C/F/g reconstructions were removed in the 2026-10-30 original review.    ║
 * ║  Compatible catalog curves are qualified spectral proxies, never historical supplier/chemistry proof. ║
 * ║                                                                                    ║
 * ║  SOURCE ISSUES CARRIED FORWARD: patent conditions (3), (5), (12), and (15) contain ║
 * ║  text/table or reference-plane inconsistencies documented in the Stage-2 audit.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-400mm-f28l-is-iii-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/2.8 L IS III USM",
  subtitle: "US 2019/0041605 A1 — Example 2 / Numerical Data 2; production correlation inferred",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 active elements / 12 groups (plus rear filter plate G)",
      "Patent f = 392.00 mm; traced EFL = 391.938 mm",
      "Design F/2.90; 2ω = 6.32°",
      "Imageward L2 inner focus; transverse L3B image-stabilization group",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: 400, design: 391.9381342837631 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 2019/0041605 A1",
    example: { label: "Numerical Data 2", id: "2" },
    patentYear: 2019,
    authors: ["Shinichiro Saito", "Makoto Nakahara"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "The original retains conditional-expression contradictions: paragraph 0048 defines fG1P/f1 while Table 1 uses the system-focal-length denominator; Table 1 labels fG1N=-167.402 mm, inconsistent with the first negative element at surfaces 5–6. Paragraph0031/claim1 bounds and the physical/air-equivalent dF2/LD conventions also differ. These are unresolved source expression/reference-plane issues, with every Numerical Data 2 R/d/nd/vd/θgF retained literally; see the audit.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1-1",
      label: "Element 1 (G1P)",
      type: "Positive Meniscus",
      nd: 1.59522,
      vd: 67.74,
      indexReference: "d",
      focalLengthMm: 332.6981606470374,
      glass: "OHARA S-FPM2 spectral proxy (source supplier and chemistry unresolved)",
      role: "G1P; front positive collector in L1.",
      // Original Numerical Data 2 θgF = 0.5442; converted to the engine normal line.
      dPgF: 0.01433868,
    },
    {
      id: 2,
      name: "L1-2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 167.4020472725746,
      glass: "HOYA FCD100 spectral proxy (source supplier and chemistry unresolved)",
      role: "Positive element in L1.",
      // Original Numerical Data 2 θgF = 0.5326; converted to the engine normal line.
      dPgF: 0.0487582,
    },
    {
      id: 3,
      name: "L1-3",
      label: "Element 3 (G1N)",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      indexReference: "d",
      focalLengthMm: -73.27894105201612,
      glass: "HOYA NBFD15 spectral proxy (source supplier and chemistry unresolved)",
      role: "G1N; first negative element in L1.",
      // Original Numerical Data 2 θgF = 0.5881; converted to the engine normal line.
      dPgF: 0.00026014,
    },
    {
      id: 4,
      name: "L1-4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 170.4782608695652,
      glass: "HOYA FCD100 spectral proxy (source supplier and chemistry unresolved)",
      role: "Positive element in L1.",
      // Original Numerical Data 2 θgF = 0.5326; converted to the engine normal line.
      dPgF: 0.0487582,
    },
    {
      id: 5,
      name: "L1-5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.89286,
      vd: 20.36,
      indexReference: "d",
      focalLengthMm: 153.33380448283245,
      glass: "OHARA S-NPH4 spectral proxy (source supplier and chemistry unresolved)",
      role: "Positive element in L1.",
      // Original Numerical Data 2 θgF = 0.6393; converted to the engine normal line.
      dPgF: 0.02974552,
    },
    {
      id: 6,
      name: "L1-6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.16,
      indexReference: "d",
      focalLengthMm: -116.38089062191953,
      glass: "OHARA S-LAH60 spectral proxy (source supplier and chemistry unresolved)",
      role: "Negative member of the L1 cemented pair D1.",
      cemented: "D1",
      // Original Numerical Data 2 θgF = 0.5776; converted to the engine normal line.
      dPgF: -0.00369688,
    },
    {
      id: 7,
      name: "L1-7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 126.56565137767268,
      glass: "HOYA FCD100 spectral proxy (source supplier and chemistry unresolved)",
      role: "Positive member of the L1 cemented pair D1.",
      cemented: "D1",
      // Original Numerical Data 2 θgF = 0.5326; converted to the engine normal line.
      dPgF: 0.0487582,
    },
    {
      id: 8,
      name: "L2-1",
      label: "Element 8 (Focus)",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.4,
      indexReference: "d",
      focalLengthMm: -87.75681851096051,
      glass: "HOYA PCD4 spectral proxy (source supplier and chemistry unresolved)",
      role: "Negative L2 focus element; translates axially as the sole focusing degree of freedom.",
      // Original Numerical Data 2 θgF = 0.5395; converted to the engine normal line.
      dPgF: 0.0023388,
    },
    {
      id: 9,
      name: "L3A-1",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.89286,
      vd: 20.36,
      indexReference: "d",
      focalLengthMm: -218.07237617576658,
      glass: "OHARA S-NPH4 spectral proxy (source supplier and chemistry unresolved)",
      role: "Negative member of the L3A cemented pair D2.",
      cemented: "D2",
      // Original Numerical Data 2 θgF = 0.6393; converted to the engine normal line.
      dPgF: 0.02974552,
    },
    {
      id: 10,
      name: "L3A-2",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.43,
      indexReference: "d",
      focalLengthMm: 76.07832078486643,
      glass: "OHARA S-NSL36 spectral proxy (source supplier and chemistry unresolved)",
      role: "Positive member of the L3A cemented pair D2.",
      cemented: "D2",
      // Original Numerical Data 2 θgF = 0.5564; converted to the engine normal line.
      dPgF: 0.00078726,
    },
    {
      id: 11,
      name: "L3B-1",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.27,
      indexReference: "d",
      focalLengthMm: 66.16059033585888,
      glass: "HOYA NBFD15 spectral proxy (source supplier and chemistry unresolved)",
      role: "Positive member of the L3B cemented pair D3 in the transverse IS sub-unit.",
      cemented: "D3",
      // Original Numerical Data 2 θgF = 0.5881; converted to the engine normal line.
      dPgF: 0.00026014,
    },
    {
      id: 12,
      name: "L3B-2",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.53775,
      vd: 74.7,
      indexReference: "d",
      focalLengthMm: -52.072369890754814,
      glass: "OHARA S-FPM3 spectral proxy (source supplier and chemistry unresolved)",
      role: "Negative member of the L3B cemented pair D3 in the transverse IS sub-unit.",
      cemented: "D3",
      // Original Numerical Data 2 θgF = 0.5392; converted to the engine normal line.
      dPgF: 0.0210454,
    },
    {
      id: 13,
      name: "L3B-3",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.68,
      indexReference: "d",
      focalLengthMm: -51.17711715171082,
      glass: "OHARA S-LAL18 spectral proxy (source supplier and chemistry unresolved)",
      role: "Negative element completing the L3B transverse IS sub-unit.",
      // Original Numerical Data 2 θgF = 0.5444; converted to the engine normal line.
      dPgF: -0.00742824,
    },
    {
      id: 14,
      name: "L3C-1",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.68,
      indexReference: "d",
      focalLengthMm: 187.3305518488731,
      glass: "OHARA S-NBH5 spectral proxy (source supplier and chemistry unresolved)",
      role: "Positive element in the fixed L3C rear sub-unit.",
      // Original Numerical Data 2 θgF = 0.5737; converted to the engine normal line.
      dPgF: -0.00335824,
    },
    {
      id: 15,
      name: "L3C-2",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.71,
      indexReference: "d",
      focalLengthMm: 46.09159982540862,
      glass: "OHARA S-NBH8 spectral proxy (source supplier and chemistry unresolved)",
      role: "Positive member of the fixed L3C cemented pair D4.",
      cemented: "D4",
      // Original Numerical Data 2 θgF = 0.5834; converted to the engine normal line.
      dPgF: -0.00201778,
    },
    {
      id: 16,
      name: "L3C-3",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.76,
      indexReference: "d",
      focalLengthMm: -86.93653999147789,
      glass: "OHARA S-NPH1 spectral proxy (source supplier and chemistry unresolved)",
      role: "Negative member of the fixed L3C cemented pair D4.",
      cemented: "D4",
      // Original Numerical Data 2 θgF = 0.6307; converted to the engine normal line.
      dPgF: 0.02518232,
    },
    {
      id: 17,
      name: "G",
      label: "Drop-in filter G",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.14,
      indexReference: "d",
      glass: "OHARA S-BSL7 spectral proxy (source supplier and chemistry unresolved)",
      role: "Plane-parallel filter plate of the patent prescription (US 2019/0041605 A1, Numerical Data 2 surfaces 30–31; patent θgF 0.5353), retained as the working-system filter representation. The original calls G a glass block/filter but does not define holder ownership; a production drop-in-holder identity is a correlation interpretation. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
      // Original Numerical Data 2 θgF = 0.5353; converted to the engine normal line.
      dPgF: -0.00062,
    },
  ],

  /* ── Surface prescription: US 2019/0041605 A1, Numerical Data 2 ── */
  surfaces: [
    { label: "1", R: 154.557, d: 14.23, sd: 69.5, medium: 1 },
    { label: "2", R: 679.875, d: 120.54, sd: 69.5 },
    { label: "3", R: 94.858, d: 14.3, sd: 40, medium: 2 },
    { label: "4", R: -305.077, d: 0.17, sd: 38.4 },
    { label: "5", R: -287.52, d: 1.5, sd: 38.4, medium: 3 },
    { label: "6", R: 74.517, d: 2.79, sd: 39 },
    { label: "7", R: 74.499, d: 11.84, sd: 36.5, medium: 4 },
    { label: "8", R: "flat", d: 17.88, sd: 36.5 },
    { label: "9", R: 67.131, d: 5.78, sd: 32, medium: 5 },
    { label: "10", R: 126.369, d: 1.51, sd: 32 },
    { label: "11", R: 70.332, d: 2.0, sd: 29.5, medium: 6 },
    { label: "12", R: 40.254, d: 10.32, sd: 29.5, medium: 7 },
    { label: "13", R: 136.354, d: 6.96, sd: 29.5 },
    { label: "STO", R: "flat" },
    { label: "15", R: -565.896, d: 1.6, sd: 23.2, medium: 8 },
    { label: "16", R: 60.047, sd: 23.2 },
    { label: "17", R: 100.609, d: 1.4, sd: 18.5, medium: 9 },
    { label: "18", R: 65.898, d: 7.56, sd: 18.5, medium: 10 },
    { label: "19", R: -93.94, d: 1.0, sd: 18.5 },
    { label: "20", R: 93.498, d: 5.02, sd: 16.5, medium: 11 },
    { label: "21", R: -121.171, d: 1.2, sd: 16.5, medium: 12 },
    { label: "22", R: 36.544, d: 5.43, sd: 15.2 },
    { label: "23", R: -82.448, d: 1.2, sd: 15.2, medium: 13 },
    { label: "24", R: 68.589, d: 3.01, sd: 17.5 },
    { label: "25", R: 137.981, d: 4.68, sd: 17.5, medium: 14 },
    { label: "26", R: -1080.069, d: 6.25, sd: 17.5 },
    { label: "27", R: 71.025, d: 10.18, sd: 20, medium: 15 },
    { label: "28", R: -58.624, d: 1.5, sd: 20, medium: 16 },
    { label: "29", R: -358.198, d: 7.77, sd: 20 },
    // Drop-in filter G (US 2019/0041605 A1, Numerical Data 2 surfaces 30–31), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    { label: "30", R: "flat", d: 2.2, sd: 21.5, medium: 17 },
    { label: "31", R: "flat", d: 60.7, sd: 21.5 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 2.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent publishes L2 axial focusing with L3 fixed but no finite-focus spacing table. The close endpoint is a one-DOF code solve to Canon's rounded 2.5 m MFD: L2 shifts +19.0782676028358 mm imageward while the adjacent gaps preserve 41.49 mm exactly. The model predicts |m| = 0.176031 at 2.5 m; Canon's rounded 0.17× value reverses to about 2.5795 m in this patent prescription.",
  },

  /* (moved from var) ── Focus: one-DOF constrained reconstruction of L2 translation ── */
  gaps: {
    STO: { label: "L1–L2", values: [[5.0, 24.0782676028358]] },
    "16": { label: "L2–L3", values: [[36.49, 17.4117323971642]] },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  /* ── Patent unit annotations; L3A/L3B/L3C boundaries follow Fig. 2A brackets ── */
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "13" },
    { text: "L2 (FOCUS)", fromSurface: "15", toSurface: "16" },
    { text: "L3A", fromSurface: "17", toSurface: "19" },
    { text: "L3B (IS)", fromSurface: "20", toSurface: "24" },
    { text: "L3C", fromSurface: "25", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4", fromSurface: "27", toSurface: "29" },
  ],

  /* Layout only; geometry validity is established independently of these controls. */
  layout: { yScFill: 0.54 },
} satisfies LensDataV2Input;

export default LENS_DATA;
