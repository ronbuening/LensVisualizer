import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 500mm f/4 E FL ED VR                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2015-215560 A, Example 1 (Nikon Corporation).                 ║
 * ║  Native patent scale; no uniform scaling is applied.                       ║
 * ║  16 active elements / 12 air-separated groups; all surfaces spherical.     ║
 * ║                                                                            ║
 * ║  Focus status: PUBLISHED. G2 translates imageward while d11 + d16 remains  ║
 * ║  50.610 mm. Infinity, intermediate, and near are exact focus keyframes.    ║
 * ║  The published intermediate row is reproduced by linear interpolation at   ║
 * ║  focus t = 0.2102460786 (d11 = 17.427, d16 = 33.183 mm).                  ║
 * ║                                                                            ║
 * ║  MODEL NORMALIZATION: patent protective filter glass FLG (surfaces 1–2)    ║
 * ║  is omitted as permitted by source ¶0064. The rear air spacing is      ║
 * ║  therefore normalized from patent Bf = 87.772 mm to 87.868557 mm so the    ║
 * ║  active prescription remains focused at infinity. This changes the active  ║
 * ║  model EFL from the complete patent system's 490.000 mm to 489.459688 mm.  ║
 * ║                                                                            ║
 * Source optionality: ¶0064, PDF p. 16, 「これを備えない構成としてもよい」
 * permits a configuration without FLG; the EFL/BF recalibration below remains a model choice.
 *
 * ║  STOP: the patent fixes S between G2 and G3. The stop radius is derived    ║
 * ║  from the design f-number, patent FNO = 4.122.                             ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: inferred from Example-1 Fig. 1, Nikon's production lens   ║
 * ║  construction drawing, the modeled entrance pupil, and paraxial marginal/ ║
 * ║  chief-ray envelopes. They were then reduced where required by the current ║
 * ║  edge-thickness and shared-gap sag constraints. The s13→s14 gap uses a   ║
 * ║  disclosed gapSagFrac = 0.93: at the chosen 22.2 mm shared radius the      ║
 * ║  surfaces retain 0.283 mm of real axial clearance, while passing the       ║
 * ║  independently traced wide-open marginal ray. No mathematical overlap is   ║
 * ║  accepted and no renderer-only trim is used as a geometry substitute.      ║
 * ║                                                                            ║
 * ║  GLASS / SPECTRAL DATA: Table 1 supplies d-line nd/vd and theta_gF      ║
 * ║  rounded to two decimals (±0.005), not vendor names or C/F/g indices.    ║
 * ║  dPgF stores each printed theta_gF center minus 0.6438 − 0.001682·vd;   ║
 * ║  its extra decimals express conversion, not source precision. Compatible ║
 * ║  current catalog curves supply qualified spectral proxies. L23's current ║
 * ║  J-KZFH4 curve post-dates filing; no historical supplier is asserted.      ║
 * ║                                                                            ║
 * ║  SOURCE DISCREPANCY: Table 1 lists condition (4) as 0.81, but the published║
 * ║  infinity prescription gives f/f12 = 0.742306552. The listed 0.81 is       ║
 * ║  reproduced by substituting the intermediate-focus d11; no data field is   ║
 * ║  altered to force the erroneous tabulated value.                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Product metadata / construction source:
 * https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_500mmf_4e_fl_ed_vr/
 * Nikon launch source:
 * https://www.nikon.com/company/news/2015/0702_lens_01/
 * CaF2 dispersion source: I. H. Malitson, Applied Optics 2 (1963), 1103–1107.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-af-s-nikkor-500mm-f4e-fl-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 500mm f/4 E FL ED VR",
  subtitle: "JP 2015-215560 A Example 1 — FLG omitted; active rear focus normalized",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["16 ELEMENTS / 12 GROUPS", "2 FLUORITE + 3 ED", "MODELED f = 489.460 mm", "F/4.122", "2ω = 5.035°"],
    elementCount: 16,
    groupCount: 12,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: 500, design: 489.459688 },
    fNumber: { marketing: 4, design: 4.122 },
  },

  source: {
    patentNumber: "JP 2015-215560 A",
    example: { label: "Example 1", id: "1" },
    patentYear: 2015,
    authors: ["Masashi Yamashita", "Satoshi Miwa"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — Fluorite",
      type: "Plano-Convex Positive",
      nd: 1.43385,
      vd: 95.25,
      focalLengthMm: 459.039299,
      glass: "Calcium fluoride (CaF2 crystal; Nikon-correlated)",
      apd: "inferred",
      apdNote: "Fluorite assignment from Nikon's two-fluorite production specification and this patent coordinate.",
      role: "Front positive collector; one of the two production-correlated fluorite elements.",
      dPgF: 0.05641050, // Patent θgF 0.54 ±0.005; converted to the engine baseline.
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — Fluorite",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      focalLengthMm: 224.087353,
      glass: "Calcium fluoride (CaF2 crystal; Nikon-correlated)",
      apd: "inferred",
      apdNote: "Fluorite assignment from Nikon's two-fluorite production specification and this patent coordinate.",
      role: "Second front-group positive collector; one of the two production-correlated fluorite elements.",
      dPgF: 0.05641050, // Patent θgF 0.54 ±0.005; converted to the engine baseline.
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      focalLengthMm: -338.744576,
      glass: "613445 class (HIKARI J-KZFH1 catalog-coordinate proxy)",
      role: "Front-group negative corrector; qualified current catalog curve and source-rounded partial dispersion.",
      dPgF: -0.00901828, // Patent θgF 0.56 ±0.005; converted to the engine baseline.
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Negative Meniscus, convex to object",
      nd: 1.6968,
      vd: 55.52,
      focalLengthMm: -161.158073,
      glass: "697555 class (HIKARI J-LAK14 catalog-coordinate proxy)",
      role: "Negative member of the rear G1 cemented pair.",
      cemented: "D1",
      dPgF: -0.01041536, // Patent θgF 0.54 ±0.005; converted to the engine baseline.
    },
    {
      id: 5,
      name: "L15",
      label: "L15 — ED class",
      type: "Positive Meniscus, convex to object",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 109.492952,
      glass: "498826 ED class (HIKARI J-FKH1 catalog-coordinate proxy)",
      apd: "inferred",
      apdNote: "ED assignment inferred from Nikon's three-ED production specification and the patent's 498826 class.",
      role: "Positive cemented partner of L14; one of the three production-correlated ED-class elements.",
      cemented: "D1",
      dPgF: 0.03508274, // Patent θgF 0.54 ±0.005; converted to the engine baseline.
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Plano-Concave Negative",
      nd: 1.834,
      vd: 37.18,
      focalLengthMm: -98.58717,
      glass: "834372 class (HIKARI J-LASF010 catalog-coordinate proxy)",
      role: "Leading negative element of the moving G2 internal-focus group.",
      dPgF: -0.00126324, // Patent θgF 0.58 ±0.005; converted to the engine baseline.
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus, concave to object",
      nd: 1.80809,
      vd: 22.74,
      focalLengthMm: 151.725029,
      glass: "808227 high-dispersion class (HIKARI J-SFH1 catalog-coordinate proxy)",
      role: "Positive high-dispersion member of the moving G2 cemented pair; satisfies patent condition (2).",
      cemented: "D2",
      dPgF: 0.02444868, // Patent θgF 0.63 ±0.005; converted to the engine baseline.
    },
    {
      id: 8,
      name: "L23",
      label: "L23 — 553551 class",
      type: "Plano-Concave Negative",
      nd: 1.55298,
      vd: 55.07,
      focalLengthMm: -171.288293,
      glass:
        "J-KZFH4 catalog-equivalent spectral proxy (patent 553551; current glass post-dates filing; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Patent condition (5) identifies the anomalous-partial-dispersion design property: printed θgF 0.54 ±0.005 gives −0.011166753 ±0.005 under its line, below −0.001. Current J-KZFH4 is only a post-filing coordinate proxy; historical identity is unasserted.",
      role: "Negative G2 cemented partner governed by patent conditions (3) and (5).",
      cemented: "D2",
      dPgF: -0.01117226, // Patent θgF 0.54 ±0.005; converted to the engine baseline.
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Negative Meniscus, convex to object",
      nd: 1.80809,
      vd: 22.74,
      focalLengthMm: -115.189996,
      glass: "808227 high-dispersion class (HIKARI J-SFH1 catalog-coordinate proxy)",
      role: "Negative front member of the positive G3a cemented pair.",
      cemented: "D3",
      dPgF: 0.02444868, // Patent θgF 0.63 ±0.005; converted to the engine baseline.
    },
    {
      id: 10,
      name: "L32",
      label: "L32 — ED class",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 79.685959,
      glass: "498826 ED class (HIKARI J-FKH1 catalog-coordinate proxy)",
      apd: "inferred",
      apdNote: "ED assignment inferred from Nikon's three-ED production specification and the patent's 498826 class.",
      role: "Positive G3a cemented partner; one of the three production-correlated ED-class elements.",
      cemented: "D3",
      dPgF: 0.03508274, // Patent θgF 0.54 ±0.005; converted to the engine baseline.
    },
    {
      id: 11,
      name: "L33",
      label: "L33",
      type: "Biconcave Negative",
      nd: 1.62299,
      vd: 58.12,
      focalLengthMm: -186.957194,
      glass: "623581 class (HOYA BACD15 catalog-coordinate proxy)",
      role: "Leading negative element of the laterally shifting G3b VR group.",
      dPgF: -0.00604216, // Patent θgF 0.54 ±0.005; converted to the engine baseline.
    },
    {
      id: 12,
      name: "L34",
      label: "L34",
      type: "Positive Meniscus, concave to object",
      nd: 1.61266,
      vd: 44.46,
      focalLengthMm: 81.7496,
      glass: "613445 class (HIKARI J-KZFH1 catalog-coordinate proxy)",
      role: "Positive member of the G3b VR cemented pair.",
      cemented: "D4",
      dPgF: -0.00901828, // Patent θgF 0.56 ±0.005; converted to the engine baseline.
    },
    {
      id: 13,
      name: "L35",
      label: "L35 — ED class",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: -52.475028,
      glass: "498826 ED class (HIKARI J-FKH1 catalog-coordinate proxy)",
      apd: "inferred",
      apdNote: "ED assignment inferred from Nikon's three-ED production specification and the patent's 498826 class.",
      role: "Negative cemented partner in the G3b VR group; one of the three production-correlated ED-class elements.",
      cemented: "D4",
      dPgF: 0.03508274, // Patent θgF 0.54 ±0.005; converted to the engine baseline.
    },
    {
      id: 14,
      name: "L36",
      label: "L36",
      type: "Biconvex Positive",
      nd: 1.61266,
      vd: 44.46,
      focalLengthMm: 54.142554,
      glass: "613445 class (HIKARI J-KZFH1 catalog-coordinate proxy)",
      role: "First positive relay element of G3c.",
      dPgF: -0.00901828, // Patent θgF 0.56 ±0.005; converted to the engine baseline.
    },
    {
      id: 15,
      name: "L37",
      label: "L37",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.73,
      focalLengthMm: -33.107808,
      glass: "835427 class (HIKARI J-LASF05 catalog-coordinate proxy)",
      role: "Negative rear-relay corrector in G3c.",
      dPgF: -0.01192814, // Patent θgF 0.56 ±0.005; converted to the engine baseline.
    },
    {
      id: 16,
      name: "L38",
      label: "L38",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 34.92,
      focalLengthMm: 54.837817,
      glass: "801349 class (HIKARI J-LAF016 catalog-coordinate proxy)",
      role: "Final positive relay element of G3c.",
      dPgF: 0.00493544, // Patent θgF 0.59 ±0.005; converted to the engine baseline.
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "3", R: 199.1542, d: 13.2, sd: 66.0, medium: 1 },
    { label: "4", R: "flat", d: 80.9, sd: 65.0 },
    { label: "5", R: 121.5321, d: 15.5, sd: 51.5, medium: 2 },
    { label: "6", R: -467.2393, d: 2.0, sd: 51.0 },
    { label: "7", R: -468.0783, d: 5.2, sd: 47.5, medium: 3 },
    { label: "8", R: 374.4208, d: 56.52, sd: 47.5 },
    { label: "9", R: 78.9162, d: 3.5, sd: 34.0, medium: 4 },
    { label: "10", R: 45.502, d: 11.0, sd: 33.0, medium: 5 },
    { label: "11", R: 253.2743, sd: 31.25 },
    { label: "12", R: "flat", d: 2.5, sd: 23.5, medium: 6 },
    { label: "13", R: 82.2217, d: 3.94, sd: 22.8 },
    { label: "14", R: -408.7548, d: 3.9, sd: 22.2, medium: 7 },
    { label: "15", R: -94.719, d: 2.5, sd: 22.5, medium: 8 },
    { label: "16", R: "flat", sd: 23.0 },
    { label: "STO", R: "flat", d: 25.55 },
    { label: "18", R: 96.5675, d: 1.8, sd: 17.5, medium: 9 },
    { label: "19", R: 47.002, d: 5.5, sd: 17.5, medium: 10 },
    { label: "20", R: -244.3862, d: 4.5, sd: 17.5 },
    { label: "21", R: -634.042, d: 1.8, sd: 17.0, medium: 11 },
    { label: "22", R: 142.8386, d: 1.65, sd: 16.4 },
    { label: "23", R: -256.019, d: 4.7, sd: 16.4, medium: 12 },
    { label: "24", R: -42.182, d: 1.8, sd: 18.0, medium: 13 },
    { label: "25", R: 69.591, d: 4.5, sd: 18.0 },
    { label: "26", R: 45.6956, d: 6.7, sd: 18.5, medium: 14 },
    { label: "27", R: -114.2817, d: 12.908, sd: 18.5 },
    { label: "28", R: -62.3322, d: 1.8, sd: 17.5, medium: 15 },
    { label: "29", R: 50.3097, d: 1.654, sd: 17.5 },
    { label: "30", R: 63.8316, d: 4.9, sd: 18.0, medium: 16 },
    // Rear air normalized after omitting patent protective filter glass FLG (surfaces 1–2).
    { label: "31", R: -136.0401, d: 87.868557, sd: 18.0 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 3.588203,
    /* ── Published internal-focus keyframes ── */
    keyframes: [0, 0.23802029005870562, 1],
    description:
      "PUBLISHED internal focus: G2 (surfaces 12–16) translates imageward with d11 14.505→28.403 mm and d16 36.105→22.207 mm; d11+d16 remains 50.610 mm and the stop is fixed. The patent intermediate row (17.427/33.183 mm) lies exactly at t=0.210246 of this motion. FLG is omitted and the rear air is normalized to 87.868557 mm; the resulting modeled near focal-plane distance is 3.588203 m versus Nikon's rounded 3.6 m specification.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "11": { label: "D11 (G1→G2)", values: [[14.505, 17.427, 28.403]] },
    "16": { label: "D16 (G2→STO)", values: [[36.105, 33.183, 22.207]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.122, fStops: [4.122, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  /* ── Patent functional-group annotations ── */
  groups: [
    { text: "G1", fromSurface: "3", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "16" },
    { text: "G3a", fromSurface: "18", toSurface: "20" },
    { text: "G3b", fromSurface: "21", toSurface: "25" },
    { text: "G3c", fromSurface: "26", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  layout: { yScFill: 0.55 },

  /* ── Geometry/render policy and layout ── */
  checks: { gapSagFrac: 0.93 },
} satisfies LensDataV2Input;

export default LENS_DATA;
