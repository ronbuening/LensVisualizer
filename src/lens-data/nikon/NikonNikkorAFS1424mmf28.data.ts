import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — NIKON AF-S NIKKOR 14-24mm f/2.8G ED
 *
 * Data source: US 7,359,125 B2, Example 1 (Yoko Kimura, Haruo Sato / Nikon), Table 1 and Fig. 1.
 * Two-group negative-leading (retrofocus) zoom: G1 (−) surfaces 1–11, G2 (+) surfaces 12–27.
 * Production count 14 elements / 11 groups, 2 ED elements, 3 aspherical elements. The model has 15
 * element entries because the 0.3 mm layer (surfaces 6–7, nd 1.55389 / νd 38.09) is the resin shell of
 * a hybrid aspherical element; it is an optically distinct medium and does not add to elementCount.
 * The resin identification is inferred from its thickness and index pair; the patent lists only n and ν.
 *
 * ZOOM: variable gaps D11 (G1–G2) and Bf. Source stations f = 14.4 / 18.0 / 23.8 mm, FNO 2.88 at
 * all three, ω = 57.36° / 50.29° / 41.92° (Figs. 2A–2C). From wide to tele G1 moves 15.46 mm toward
 * the image (TL 175.00 → 165.29 → 159.54 mm; a fitted TL(f) minimum lies near f ≈ 26 mm, beyond the
 * tele end, so there is no reversal inside the range) and G2 moves 15.27 mm toward the object
 * (Bf 38.70 → 53.97 mm), matching the Fig. 1 trajectories. No reversing groups.
 *
 * FOCUS: L1 (the E7+E8 cemented doublet, patent "first positive lens component L1") moves toward the
 * image; D11 + D14 is conserved at every station. Table 1 publishes infinity, β = −0.025 and close
 * (object-to-image R = 300 mm) rows at all three stations. The β = −0.025 conjugates differ by station
 * (object-to-image 711.77 / 847.81 / 1075.73 mm), so focusPositions carries one keyframe per station
 * conjugate; each station's own published row is exact and its other two intermediate values are
 * interpolated on x = a·u / (1 − b·u) through that station's two published finite states.
 *
 * NOTE ON APERTURE: FNO is 2.88 at every station while the stop rides in G2, so the physical iris must
 * open toward tele. The patent lists no iris diameters; zoom.apertureModel infers the station radii
 * (about 9.16 / 9.89 / 11.15 mm) from f/2.88. The Fig. 1 stop ticks start at the neighbouring lens
 * rims (about 12.8 mm); they are a drawing symbol, not an iris radius.
 *
 * NOTE ON SEMI-DIAMETERS: the patent publishes no clear apertures. G1 rims follow the optical extent of
 * the curved surfaces in Fig. 1 (wide panel, axis vertical, scale 0.1202 mm/px at 300 dpi from the
 * 175.00 mm front-vertex-to-image distance), excluding the drawn flat mounting annuli: S1 41.0,
 * S3 29.5, S4A 25.2, S5 25.0 mm (L3 front; its cemented rear stops at about 20.4 mm behind a flat
 * step). The exact wide-end chief ray for Y = 21.6 mm (ω = 57.36°) needs 37.5 / 28.6 / 27.0 / 22.9 /
 * 20.8 mm on S1–S5. S2 stays at 29.0 mm (figure 30.9 mm, R = 32.27 mm) because of the renderer's rim
 * slope limit; the chief ray needs 28.6 mm there. S6–S11 and all G2 rims are estimates that agree with
 * Fig. 1 within about 15 % and are retained.
 *
 * NOTE ON CONIC CONSTANTS: the patent uses κ with S(y) = (y²/r)/[1 + √(1 − κ·y²/r²)] + ΣCn·yⁿ, so
 * K = κ − 1 (κ = 1 is a sphere).
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-afs-14-24f28",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 14-24mm f/2.8 G ED",
  subtitle: "US 7,359,125 B2 EXAMPLE 1 — KIMURA & SATO / NIKON",
  visible: true,

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 11 GROUPS (+ HYBRID RESIN LAYER)",
      "f = 14.4–23.8 mm",
      "F/2.88",
      "2ω = 114.7°–83.8°",
      "3 ASPHERICAL SURFACES · 2 ED ELEMENTS",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: [14, 24], design: [14.4, 23.8] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 7,359,125 B2",
    patentYear: 2008,
    authors: ["Yoko Kimura", "Haruo Sato"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      focalLengthMm: -91.3,
      glass: "S-LAH65V (OHARA catalog equivalent)",
      apd: false,
      role: "Front field-flattening meniscus; high-index lanthanum crown reduces Petzval curvature",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.6779,
      vd: 55.34,
      focalLengthMm: -71.1,
      glass: "S-LAL12 (OHARA catalog equivalent)",
      apd: false,
      role: "Aspherical meniscus; primary corrector for field curvature and distortion across the ultra-wide field",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.741,
      vd: 52.67,
      focalLengthMm: -51.9,
      glass: "LAK011 (HIKARI catalog equivalent)",
      apd: false,
      role: "Glass body of the hybrid aspherical element (resin shell E4 carries surface 7A); negative meniscus convex to object",
      cemented: "J1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 3 resin layer",
      type: "Pos. Meniscus (Asph resin layer)",
      nd: 1.55389,
      vd: 38.09,
      focalLengthMm: 357.6,
      glass: "554381 — hybrid-asphere resin layer (inferred; patent nd=1.55389, νd=38.09; not catalog glass)",
      apd: false,
      role: "0.3 mm resin shell bonded to L3, carrying the strong aspherical exit surface 7A (K = −7.38) of the hybrid aspherical element",
      cemented: "J1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: -56.1,
      glass: "J-FKH1 (HIKARI catalog equivalent)",
      apd: "inferred",
      apdNote: "Fluorophosphate ED glass (patent nd=1.49782, νd=82.52); ED element #1",
      role: "First ED element; provides negative power with minimal chromatic contribution due to very high Abbe number",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8044,
      vd: 39.59,
      focalLengthMm: 48.1,
      glass: "S-LAH63 (OHARA)",
      apd: false,
      role: "Sole positive element in G1; forms an achromatic sub-unit with E5 (ED glass) to control lateral chromatic aberration",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -54.9,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "Front element of focusing doublet L1; negative meniscus convex to object",
      cemented: "J2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.62374,
      vd: 47.04,
      focalLengthMm: 32.1,
      glass: "E-BAF8 (HIKARI catalog equivalent)",
      apd: false,
      role: "Rear element of focusing doublet L1; positive meniscus with nearly flat rear (R = 611.6 mm)",
      cemented: "J2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: 110.8,
      glass: "J-BK7A (HIKARI catalog equivalent)",
      apd: false,
      role: "L2 — gently positive meniscus convex to image; provides symmetric spherical aberration correction near the stop",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -27.7,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "L3 — strongest single element; biconcave for sagittal field and sagittal coma correction",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.57099,
      vd: 50.8,
      focalLengthMm: 42.4,
      glass: "S-BAL2 (OHARA)",
      apd: false,
      role: "Moderately powered positive element; counterbalances E10's divergence in a triplet-like sub-unit",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.772789,
      vd: 49.45,
      focalLengthMm: -56.9,
      glass: "Unmatched (lanthanum crown; patent nd=1.772789, νd=49.45; no catalog glass at this index)",
      apd: false,
      role: "Front element of achromatic corrector doublet; negative meniscus convex to object",
      cemented: "J3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 26.3,
      glass: "J-FKH1 (HIKARI catalog equivalent)",
      apd: "inferred",
      apdNote: "Fluorophosphate ED glass (patent nd=1.49782, νd=82.52); ED element #2",
      role: "Second ED element; primary achromatic corrector in G2 paired with E12",
      cemented: "J3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.94,
      focalLengthMm: -25.7,
      glass: "S-LAH53 (OHARA)",
      apd: false,
      role: "Front element of near-afocal corrector doublet; negative meniscus (nearly plano front)",
      cemented: "J4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58913,
      vd: 61.18,
      focalLengthMm: 26.6,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Rear element with aspherical exit surface; near-afocal doublet acts as field-flattening / coma corrector plate",
      cemented: "J4",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Patent convention: κ in Z(y) = (y²/R) / [1 + √(1 − κ·y²/R²)] + Σ Cn·yⁿ
   *  Standard convention: K = κ − 1
   */
  surfaces: [
    // ── G1: Negative front group (5 physical elements incl. hybrid L3 + resin, 5 air-separated groups) ──
    { label: "1", R: 60.3937, d: 3.5, sd: 41.0, medium: 1 },
    { label: "2", R: 32.2703, d: 7.0835, sd: 29.0 },
    { label: "3", R: 35.5, d: 4.0, sd: 29.5, medium: 2 },
    {
      label: "4A",
      R: 19.5117,
      d: 12.8951,
      sd: 25.2,
      asphere: {
        K: -0.9087, // κ = 0.0913
        A4: -5.1181e-7,
        A6: 7.1056e-10,
        A8: -1.9817e-11,
        A10: 1.9226e-14,
        A12: -6.0945e-18,
      },
    },
    { label: "5", R: 87.0449, d: 2.5, sd: 25.0, medium: 3 },
    { label: "6", R: 26.3306, d: 0.3, sd: 20.5, medium: 4 },
    {
      label: "7A",
      R: 30.2448,
      d: 12.6887,
      sd: 20.0,
      asphere: {
        K: -7.3795, // κ = −6.3795
        A4: 4.2239e-5,
        A6: -7.8972e-8,
        A8: 2.9788e-10,
        A10: -5.9331e-13,
        A12: 6.0285e-16,
        A14: -7.4037e-20,
      },
    },
    { label: "8", R: -67.993, d: 2.5896, sd: 18.4, medium: 5 },
    { label: "9", R: 48.0626, d: 2.0, sd: 18.0 },
    { label: "10", R: 48.488, d: 5.9634, sd: 18.6, medium: 6 },
    { label: "11", R: -181.2948, sd: 18.4 }, // d = var (zoom gap)

    // ── G2: Positive rear group (9 elements, 6 air-separated groups) ──
    // L1 focusing doublet (E7 + E8)
    { label: "12", R: 34.6184, d: 1.0, sd: 13.8, medium: 7 },
    { label: "13", R: 19.4637, d: 5.2931, sd: 13.1, medium: 8 },
    { label: "14", R: 611.599, sd: 12.8 }, // d = var (focus gap)

    // Aperture stop; radius derived from the design f-number at each zoom station.
    { label: "STO", R: "flat", d: 1.6689 },

    // L2 — positive meniscus (E9)
    { label: "16", R: -265.5383, d: 2.6545, sd: 11.8, medium: 9 },
    { label: "17", R: -47.2569, d: 9.0744, sd: 12.1 },

    // L3 — biconcave negative (E10)
    { label: "18", R: -27.9322, d: 1.6819, sd: 13.6, medium: 10 },
    { label: "19", R: 138.6775, d: 0.1, sd: 14.0 },

    // E11 — biconvex positive
    { label: "20", R: 35.6745, d: 4.4701, sd: 12.8, medium: 11 },
    { label: "21", R: -71.8719, d: 0.1, sd: 13.2 },

    // Cemented doublet E12 + E13 (achromatic corrector with ED glass)
    { label: "22", R: 27.2079, d: 1.3817, sd: 14.0, medium: 12 },
    { label: "23", R: 16.4317, d: 8.491, sd: 13.0, medium: 13 },
    { label: "24", R: -53.0, d: 1.721, sd: 14.2 },

    // Cemented doublet E14 + E15 (near-afocal corrector with aspherical rear)
    { label: "25", R: 1336.7107, d: 1.0, sd: 14.6, medium: 14 },
    { label: "26", R: 20.3824, d: 6.3537, sd: 13.7, medium: 15 },
    {
      label: "27A",
      R: -60.1135,
      sd: 14.8,
      asphere: {
        K: 5.0164, // κ = 6.0164
        A4: 1.9855e-5,
        A6: 6.9569e-9,
        A8: 1.5384e-10,
        A10: -5.8393e-13,
      },
    }, // d = Bf (zoom only)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Variable air spacings ──
     *  3 zoom positions: W (14.4mm), M (18.0mm), T (23.8mm)
     *  Variable gaps: D11 (zoom+focus), D14 (focus only), BF (zoom only)
     *  focusPositions = 0.3 m ÷ each station's β = −0.025 object-to-image distance (T, M, W in increasing
     *  order). Per station: [∞, u_T, u_M, u_W, close]; the entry at the station's own coordinate is the
     *  published β = −0.025 row, the other two intermediates are interpolated.
     */
    // (moved from publishedStations) Source-tabulated focus rows differ by zoom station.
    stations: [
      { focalLengthMm: 14.4, label: "Wide", published: true, publishedFocus: [3, 4] },
      { focalLengthMm: 18.0, published: true, publishedFocus: [2, 4] },
      { focalLengthMm: 23.8, label: "Tele", published: true, publishedFocus: [1, 4] },
    ],
    // Physical iris schedule inferred by tracing the source f/2.88 entrance pupil at each zoom station.
    apertureModel: "from-nominal-fno",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    keyframes: [0, 0.2789, 0.3539, 0.4215, 1],
    description:
      "Internal focus via the patent's L1 (E7+E8 cemented doublet), which moves toward the image: 4.43 mm (wide) to 4.01 mm (18 mm and tele) from infinity to a 300 mm object-to-image distance.",
  },

  gaps: {
    "11": {
      label: "D11",
      values: [
        [31.93, 32.695, 32.941, 33.18, 36.36],
        [16.37, 17.099, 17.33, 17.554, 20.38],
        [1.2, 1.95, 2.186, 2.413, 5.21],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [5.86, 5.095, 4.849, 4.61, 1.43],
        [5.86, 5.131, 4.9, 4.676, 1.85],
        [5.86, 5.11, 4.874, 4.647, 1.85],
      ],
    },
    "27A": {
      label: "BF",
      values: [
        [38.7, 38.7, 38.7, 38.7, 38.7],
        [44.55, 44.55, 44.55, 44.55, 44.55],
        [53.97, 53.97, 53.97, 53.97, 53.97],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−) Neg. Front", fromSurface: "1", toSurface: "11" },
    { text: "G2 (+) Pos. Rear", fromSurface: "12", toSurface: "27A" },
  ],
  doublets: [
    { text: "J1", fromSurface: "5", toSurface: "7A" },
    { text: "J2", fromSurface: "12", toSurface: "14" },
    { text: "J3", fromSurface: "22", toSurface: "24" },
    { text: "J4", fromSurface: "25", toSurface: "27A" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
