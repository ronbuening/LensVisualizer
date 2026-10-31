import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF-S 10-18mm f/4.5-5.6 IS STM — JP 2015-031869 A, Numerical Example 1.
 * Original-PDF shape/glass review 2026-10-30: source R/d, all 14 d-line pairs, both
 * aspheres through A12, source infinity gap rows, stop position and reconstructed focus
 * cam values are retained. Paragraphs 0057/0058 are on PDF p.9, prescription/summary on
 * pp.10-11, native Figure 1 on p.16 and corresponding Figure 2 on p.17.
 *
 * The prior 2026-05-19 table/glass audit and 2026-09-24 S1/4A clear-cap correction keep
 * their actual dates. This review adjusts 15 other inferred caps against Figure 1 and
 * adds resolved air shoulders S2 21.3 / clear 16.9, S4A 16.7 / clear 14.8, S6 10.1 / clear 8.2,
 * S7 9.4 / clear 8.2 mm. The JPEG section is native 1002x699 at about 200 ppi, 7.74 px/mm,
 * with practical +/-0.6 mm height uncertainty. No bonded-interface lands or cuts are added.
 * S6/S7 remain gap-limited: a trial clear 8.8 / 9.4 gives 6.19 mm sag versus 5.274 permitted
 * in the printed 5.86 mm air gap. No R/d/asphere/guard is tuned to fit a drawing.
 *
 * Printed-target restoration, separate from rim/glass changes: the source summary gives
 * Fno 4.64 / 5.19 / 5.71, confirmed at wide/tele by Figure 2. Prior 4.5 / 5.1 / 5.6 targets were
 * marketing-like values. Derived/paraxial iris authority remains; no physical stop size
 * is published. Aperture presets begin at the printed wide 4.64 target.
 *
 * Glass: paragraph 0057 explicitly defines nd/vd at the d line. Fourteen compatible catalog
 * curves are qualified spectral proxies after the 2026-10-31 E48R follow-up. Its production-correlated
 * PMo position does not establish a polymer species or manufacturing process. No material
 * C/F/g indices, partial dispersion or APD measurements are published. L11's UD/APD tag
 * is inferred from production correlation and its high-Abbe coordinate, not patent APD.
 * Historical suppliers, melts, chemistry, cement, coatings and manufacturing are unresolved.
 *
 * Only infinity gap states are source data. Existing L12 close cams (0.22 m target) and
 * linear zoom/focus interpolation are retained reconstructions, not source cam profiles.
 * Their current 65-zoom/21-focus first-order check retains up to 0.828 mm finite defocus;
 * no cam is retuned. IS transverse travel is not calibrated or modeled.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-efs-10-18-f4556-is-stm",
  maker: "Canon",
  name: "CANON EF-S 10-18mm f/4.5-5.6 IS STM",
  subtitle: "JP 2015-31869 A Example 1 — Canon / Nakahara",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: [
      "14 ELEMENTS / 11 GROUPS",
      "f = 10.30–17.46 mm",
      "F/4.64–5.71",
      "2ω = 106.0–76.1°",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: [10, 18], design: [10.3, 17.46] },
    fNumber: { marketing: 4.5, design: 4.64 },
  },

  source: {
    patentNumber: "JP 2015-031869 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2015,
    authors: ["Makoto Nakahara"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -37.6,
      glass: "S-LAH66 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "Front diverging element; high source index permits gentler curvature for given power",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.52996,
      vd: 55.8,
      focalLengthMm: -80.0,
      glass: "E48R (qualified spectral proxy; source composition unspecified; production PMo correlation only)",
      role: "Aspheric negative meniscus; production-correlated PMo position, with source composition and process unresolved",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -27.5,
      glass: "S-LAH66 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "Strongest negative element in Group 1; establishes wide field of view",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: -34.6,
      glass: "S-FPM2 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "Lower-dispersion negative member; catalog chemistry is not a source material determination",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.7,
      focalLengthMm: 27.9,
      glass: "S-NBH8 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "Sole positive element in Group 1; lower-Abbe positive member provides chromatic balance",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 160.4,
      glass: "S-FSL5 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "IS stabilization element (Ls); decenters perpendicular to axis for shake correction",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: -19.9,
      glass: "TAFD35 (HOYA) — qualified spectral proxy; historical identity unresolved",
      role: "Front element of cemented doublet D1; high-index dense flint",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: 14.5,
      glass: "S-TIM5 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "Rear element of doublet D1; cemented interface corrects coma and spherical aberration",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -10.6,
      glass: "S-LAH55 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "Front element of post-stop doublet D2; strong negative for field flattening",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: 14.3,
      glass: "S-TIM22 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "Rear positive member of doublet D2; lower source Abbe number",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 17.3,
      glass: "S-FPL51 (OHARA) — qualified spectral proxy; historical identity unresolved",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position with an S-FPL51-compatible d-line proxy; no source partial-dispersion or APD measurement is published",
      role: "Primary chromatic corrector; symmetric biconvex UD element providing strong positive power with minimal color",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: -26.7,
      glass: "TAFD35 (HOYA) — qualified spectral proxy; historical identity unresolved",
      role: "Focus group (LF); single element moves image-ward for close focus. STM driven.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: -16.8,
      glass: "TAFD35 (HOYA) — qualified spectral proxy; historical identity unresolved",
      role: "Front element of rear doublet D3; high-index dense flint",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 14.5,
      glass: "S-BAL42 (OHARA) — qualified spectral proxy; historical identity unresolved",
      role: "Rear aspheric member of doublet D3; historical chemistry and manufacturing process unresolved.",
      cemented: "D3",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    /* ── Group 1: Front negative group (L1–L5, surfaces 1–10) ── */
    { label: "1", R: 55.999, d: 1.2, sd: 21.3, medium: 1 },
    { label: "2", R: 18.939, d: 0.21, sd: 16.9, rimExtensionSd: 21.3 },
    { label: "3", R: 18.794, d: 3.0, sd: 16.7, medium: 2 },
    {
      label: "4A",
      R: 12.302,
      d: 13.97,
      sd: 14.8,
      rimExtensionSd: 16.7,
      asphere: {
        K: -4.75949e-1,
        A4: -3.84236e-5,
        A6: -7.6339e-8,
        A8: -6.26237e-10,
        A10: 3.48984e-12,
        A12: -1.12759e-14,
      },
    },
    { label: "5", R: 27.078, d: 0.85, sd: 10.1, medium: 3 },
    { label: "6", R: 11.734, d: 5.86, sd: 8.2, rimExtensionSd: 10.1 },
    { label: "7", R: -18.556, d: 0.86, sd: 8.2, rimExtensionSd: 9.4, medium: 4 },
    { label: "8", R: -193.388, d: 0.15, sd: 9.4 },
    { label: "9", R: 43.637, d: 3.35, sd: 9.4, medium: 5 },
    { label: "10", R: -36.162, sd: 9.1 }, // d10 variable (zoom only)

    /* ── Group 2: Main positive group (L6–L11, surfaces 11–21) ── */
    { label: "11", R: -51.134, d: 1.22, sd: 4.9, medium: 6 },
    { label: "12", R: -31.161, d: 1.29, sd: 4.9 },
    { label: "13", R: 24.67, d: 0.8, sd: 4.9, medium: 7 }, // D1 front (L7)
    { label: "14", R: 10.275, d: 2.98, sd: 4.9, medium: 8 }, // D1 junction → L8
    { label: "15", R: -52.144, d: 2.17, sd: 4.9 },
    { label: "STO", R: "flat", d: 4.04 }, // aperture stop
    { label: "17", R: -69.148, d: 0.8, sd: 5.6, medium: 9 }, // D2 front (L9)
    { label: "18", R: 10.223, d: 3.33, sd: 5.6, medium: 10 }, // D2 junction → L10
    { label: "19", R: -84.53, d: 0.15, sd: 5.6 },
    { label: "20", R: 16.445, d: 4.22, sd: 6.0, medium: 11 },
    { label: "21", R: -16.445, sd: 6.0 }, // d21 variable (zoom+focus)

    /* ── Group 3: Focus group (L12, surfaces 22–23) ── */
    { label: "22", R: -43.861, d: 0.7, sd: 6.2, medium: 12 },
    { label: "23", R: 54.842, sd: 6.2 }, // d23 variable (zoom+focus)

    /* ── Group 4: Rear positive group (L13+L14, surfaces 24–26A) ── */
    { label: "24", R: 83.184, d: 0.8, sd: 8.4, medium: 13 }, // D3 front (L13)
    { label: "25", R: 12.879, d: 7.14, sd: 8.4, medium: 14 }, // D3 junction → L14
    {
      label: "26A",
      R: -19.588,
      sd: 8.4,
      asphere: { K: 0, A4: 1.25041e-5, A6: -1.14292e-7, A8: 4.98491e-9, A10: -1.03089e-10, A12: 7.40509e-13 },
    }, // BFD; d26 variable (zoom only)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom lens fields ── */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 10.3, nominalFNumber: 4.64, label: "Wide" },
      { focalLengthMm: 13.96, nominalFNumber: 5.19 },
      { focalLengthMm: 17.46, nominalFNumber: 5.71, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.22,
    description:
      "Source infinity-only: L12 is the imageward focus group. Existing close gaps target 0.22 m as reconstructed finite-conjugate estimates; continuous zoom/focus interpolation is illustrative, not a published cam. STM drive is a production correlation.",
  },

  /* (moved from var) ── Variable air spacings ──
   *  d10, d26: zoom-only (identical inf/close at each zoom position).
   *  d21, d23: zoom + focus (L12 moves image-ward for close focus).
   *  Close-focus spacings solved via ABCD matrix at MFD = 0.22 m.
   */
  gaps: {
    "10": {
      label: "D10",
      values: [
        [18.12, 18.12],
        [7.58, 7.58],
        [1.64, 1.64],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [1.25, 1.53],
        [1.57, 2.01],
        [1.9, 2.54],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [3.8, 3.52],
        [3.48, 3.04],
        [3.15, 2.51],
      ],
    },
    "26A": {
      label: "BF",
      values: [
        [35.35, 35.35],
        [42.66, 42.66],
        [49.42, 49.42],
      ],
    },
  },

  aperture: { fStops: [4.64, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (+)", fromSurface: "11", toSurface: "21" },
    { text: "G3 (−) Focus", fromSurface: "22", toSurface: "23" },
    { text: "G4 (+)", fromSurface: "24", toSurface: "26A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "24", toSurface: "26A" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.45, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
