// FujifilmXF50f1.data.ts
// FUJIFILM FUJINON XF 50mm f/1.0 R WR
// Patent: US 2021/0231927 A1 (Kawamura & Cho, Fujifilm Corporation)
// Example 3 — 12 elements in 9 groups, inner focus (G2 moves)
//
// Prescription at patent scale (f ≈ 49.549 mm). Not rescaled to marketed 50 mm.
// Semi-diameters estimated via combined marginal + chief ray trace at f/1.03,
// ω = 15.7°, constrained by 77 mm filter thread and edge thickness ≥ 0.5 mm.
// 2026-09-08: Fig. 7 optical-rim review supports a 13 mm aspheric rim.
// Remaining SDs are estimates, not proof of production vignetting.
// Optical member PP (Table 9 surfaces 23–24: 2.850 mm, nd 1.51680, νd 64.20,
// θgF 0.53430) and its 1.000 mm air gap to the image plane are modeled in
// `rearPlates` (traced, not drawn). Surface 22 keeps the patent DD[22] to PP.
//
// Aspherical surfaces use the patent's KA convention: KA = 1 + K.
// Patent KA = 1.0 → K = 0 (spherical base conic). Patent coefficients extend
// to 20th order and include odd-power terms. The exact A4–A20 coefficients
// are transcribed below; A3 = 0 on both surfaces and is omitted.

import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-xf50-f1",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 50mm f/1.0 R WR",
  subtitle: "US 2021/0231927 A1 — Example 3",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "12 elements / 9 groups",
      "1 aspherical element (2 aspherical surfaces)",
      "2 ED elements",
      "Inner focus (G2 moves)",
      "f = 49.549 mm  FNo = 1.03  2ω = 31.4°",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: 50, design: 49.549 },
    fNumber: { marketing: 1.0, design: 1.03 },
  },

  source: {
    patentNumber: "US 2021/0231927 A1",
    patentYear: 2021,
    authors: ["Daiki Kawamura", "Michio Cho"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1 (L1a)",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.23,
      focalLengthMm: -76.1,
      glass: "S-TIL2 (catalog-compatible model; supplier unspecified)",
      apdNote: "Patent Table 9 θgF=0.56780; ΔPgF converted to the runtime normal line.",
      role: "Front negative element — concave first surface diverges the on-axis beam before L1b. Part of the wide-conversion sub-structure (Gs1) that suppresses sagittal coma at the ~48 mm entrance pupil.",
      dPgF: 0.00344086,
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2 (L1b) — ED ①",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 74.3,
      glass: "593686 ED class; J-PSKH1 catalog spectral proxy (patent dPgF retained)",
      apd: "patent",
      apdNote: "Patent Table 9 θgF=0.54414; ΔPgF converted to the runtime normal line.",
      role: "LB positive lens (patent designation). Second unit (Gs2) of the wide-conversion structure. Reconverges the divergent beam from L1a. Low-dispersion ED glass corrects longitudinal chromatic aberration.",
      dPgF: 0.01575884,
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3 (L1c) — ED ②",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 86.5,
      glass: "593686 ED class; J-PSKH1 catalog spectral proxy (patent dPgF retained)",
      apd: "patent",
      apdNote: "Patent Table 9 θgF=0.54414; ΔPgF converted to the runtime normal line.",
      role: "LC positive lens (patent designation). Shares the positive-power burden with L1b in low-dispersion glass, keeping curvatures moderate to suppress spherical aberration.",
      dPgF: 0.01575884,
    },
    {
      id: 4,
      name: "L1d",
      label: "Element 4 (L1d) — LA",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.47,
      focalLengthMm: 158.4,
      glass: "S-NPH3 (catalog-compatible model; supplier unspecified)",
      apd: "patent",
      apdNote: "Patent Table 9 θgF=0.65993; ΔPgF converted to the runtime normal line.",
      role: "LA positive lens — the patent's core innovation element. Strongly anomalous partial dispersion balances the ED elements' secondary spectrum. Very high nd (1.959) prevents excessive surface curvatures.",
      dPgF: 0.04551454,
    },
    {
      id: 5,
      name: "L1e",
      label: "Element 5 (L1e)",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.52,
      focalLengthMm: 114.7,
      glass: "TAF4 (HOYA) / N-LAF21 class (788475 lanthanum flint; catalog equivalent, supplier unspecified)",
      apdNote: "Patent Table 9 θgF=0.55545; ΔPgF converted to the runtime normal line.",
      role: "Positive component of cemented doublet D1. Contributes chromatic correction within G1 and controls Petzval sum.",
      cemented: "D1",
      dPgF: -0.00842136,
    },
    {
      id: 6,
      name: "L1f",
      label: "Element 6 (L1f)",
      type: "Negative Meniscus",
      nd: 1.89286,
      vd: 20.36,
      focalLengthMm: -74.8,
      glass: "893204 NPH class; S-NPH4 catalog spectral proxy (production supplier unspecified)",
      apdNote: "Patent Table 9 θgF=0.63944; ΔPgF converted to the runtime normal line.",
      role: "Negative flint component of doublet D1. Strong anomalous dispersion (ΔθgF = +0.031) aids secondary spectrum correction. Net doublet power is weakly negative (f ≈ −431 mm), contributing field-flattening Petzval curvature.",
      cemented: "D1",
      dPgF: 0.02988552,
    },
    {
      id: 7,
      name: "L1g",
      label: "Element 7 (L1g)",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: -40.9,
      glass: "S-NPH1 (catalog-compatible model; supplier unspecified)",
      apdNote: "Patent Table 9 θgF=0.63073; ΔPgF converted to the runtime normal line.",
      role: "Last element of G1 before the stop. Strongest negative power in G1 — provides Petzval field flattening and shapes the pupil geometry entering the stop.",
      dPgF: 0.02521232,
    },
    {
      id: 8,
      name: "L2a",
      label: "Element 8 (L2a) — Aspherical",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.68863,
      vd: 31.2,
      focalLengthMm: -97.5,
      glass: "NbF/SF (nd=1.689, νd=31.2)",
      apdNote: "Patent Table 9 θgF=0.60109; ΔPgF converted to the runtime normal line.",
      role: "Sole aspherical element — both surfaces carry the patent's exact odd/even A4–A20 polynomial figuring. Primary corrector for residual spherical aberration and higher-order coma. Positioned immediately behind the stop.",
      dPgF: 0.00976840,
    },
    {
      id: 9,
      name: "L2b",
      label: "Element 9 (L2b)",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 39.22,
      focalLengthMm: 22.3,
      glass: "LaF (nd=1.883, νd=39.2)",
      apdNote: "Patent Table 9 θgF=0.57295; ΔPgF converted to the runtime normal line.",
      role: "Positive crown of cemented doublet D2 in the focusing group. Paired with L2c for chromatic correction that remains stable during focus travel.",
      cemented: "D2",
      dPgF: -0.00488196,
    },
    {
      id: 10,
      name: "L2c",
      label: "Element 10 (L2c)",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      focalLengthMm: -23.3,
      glass: "E-FD15 (HOYA) / SF15 class (699301 dense flint; exact coordinate, supplier unspecified)",
      apdNote: "Patent Table 9 θgF=0.60174; ΔPgF converted to the runtime normal line.",
      role: "Negative flint of doublet D2. Nearly afocal combined power (f ≈ +306 mm) — acts as a chromatic corrector with minimal net power change during focusing.",
      cemented: "D2",
      dPgF: 0.00848410,
    },
    {
      id: 11,
      name: "L2d",
      label: "Element 11 (L2d)",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 39.22,
      focalLengthMm: 19.4,
      glass: "LaF (nd=1.883, νd=39.2)",
      apdNote: "Patent Table 9 θgF=0.57295; ΔPgF converted to the runtime normal line.",
      role: "Positive crown of cemented doublet D3 — the primary power-carrying doublet of G2. Dominates focus sensitivity.",
      cemented: "D3",
      dPgF: -0.00488196,
    },
    {
      id: 12,
      name: "L2e",
      label: "Element 12 (L2e)",
      type: "Negative Meniscus",
      nd: 1.62005,
      vd: 36.35,
      focalLengthMm: -55.3,
      glass: "J-F2 (Hikari) / F2 class (620364 flint; exact coordinate, supplier unspecified)",
      apdNote: "Patent Table 9 θgF=0.58602; ΔPgF converted to the runtime normal line.",
      role: "Negative meniscus of doublet D3. Combined doublet f ≈ +31 mm — provides final beam convergence toward the image plane.",
      cemented: "D3",
      dPgF: 0.00336070,
    },
  ],

  surfaces: [
    // ─── G1: First lens group (stationary) ───
    // L1a — Biconcave negative
    { label: "1", R: -138.62827, d: 2.4, sd: 30.0, medium: 1 },
    { label: "2", R: 58.55723, d: 10.03, sd: 30.0 },
    // L1b — Biconvex positive (ED ①)
    { label: "3", R: 75.89616, d: 11.8, sd: 30.5, medium: 2 },
    { label: "4", R: -105.01257, d: 0.2, sd: 30.5 },
    // L1c — Positive meniscus (ED ②)
    { label: "5", R: 45.45982, d: 10.8, sd: 30.0, medium: 3 },
    { label: "6", R: 399.21443, d: 0.6, sd: 28.5 },
    // L1d — Positive meniscus (LA lens)
    { label: "7", R: 44.95362, d: 4.32, sd: 27.5, medium: 4 },
    { label: "8", R: 63.84817, d: 0.6, sd: 25.5 },
    // L1e + L1f — Cemented doublet D1
    { label: "9", R: 36.12697, d: 5.27, sd: 21.0, medium: 5 },
    { label: "10", R: 60.177, d: 1.8, sd: 21.0, medium: 6 },
    { label: "11", R: 31.65635, d: 4.565, sd: 20.0 },
    // L1g — Negative meniscus
    { label: "12", R: 177.12407, d: 1.52, sd: 16.5, medium: 7 },
    { label: "13", R: 27.86122, d: 6.406, sd: 16.0 },
    // ─── Aperture stop ───
    { label: "STO", R: "flat" },
    // ─── G2: Second lens group (moves during focus) ───
    // L2a — Aspherical negative meniscus (concave toward object)
    {
      label: "15A",
      R: -14.64464,
      d: 2.55,
      sd: 13.0,
      medium: 8,
      // Patent sag: Z = C·h²/{1+√(1−KA·C²·h²)} + Σ Am·h^m, m=3..20
      // Exact Table 12 coefficients; KA = 1.0 → K = 0 and zero A3 terms are omitted.
      asphere: {
        K: 0,
        A4: 5.0823068e-5,
        A6: -1.1665918e-6,
        A8: -8.5462646e-9,
        A10: 5.8946218e-10,
        A12: -7.4371184e-12,
        A14: 3.7621265e-14,
        A16: -2.5668735e-17,
        A18: -4.3536351e-19,
        A20: 1.1528202e-21,
        A5: 5.6696216e-6,
        A7: 2.3011235e-7,
        A9: -3.987199e-9,
        A11: 6.8551648e-12,
        A13: 3.9451971e-13,
        A15: -4.2785117e-15,
        A17: 1.8252095e-17,
        A19: -2.9072588e-20,
      },
    },
    {
      label: "16A",
      R: -18.73058,
      d: 0.2,
      sd: 13.0,
      asphere: {
        K: 0,
        A4: 3.9661172e-5,
        A6: -1.924187e-6,
        A8: 2.7709406e-8,
        A10: -2.2702122e-11,
        A12: -3.5432557e-12,
        A14: 4.3918443e-14,
        A16: -2.5005394e-16,
        A18: 7.1579377e-19,
        A20: -8.3059544e-22,
        A5: 7.3155985e-6,
        A7: 2.0632606e-7,
        A9: -6.9926396e-9,
        A11: 9.8429055e-11,
        A13: -7.7218349e-13,
        A15: 3.5209637e-15,
        A17: -8.7077803e-18,
        A19: 9.0040531e-21,
      },
    },
    // L2b + L2c — Cemented doublet D2
    { label: "17", R: 49.66071, d: 6.45, sd: 15.0, medium: 9 },
    { label: "18", R: -32.522, d: 1.21, sd: 15.0, medium: 10 },
    { label: "19", R: 32.522, d: 0.82, sd: 13.6 },
    // L2d + L2e — Cemented doublet D3
    { label: "20", R: 42.22428, d: 8.8, sd: 16.0, medium: 11 },
    { label: "21", R: -28.754, d: 1.21, sd: 16.0, medium: 12 },
    // Last surface: patent DD[22] to the optical member PP
    { label: "22", R: -178.14293, sd: 16.0 },
  ],

  focus: {
    closeFocusM: 0.7,
    description:
      "Patent Example 3: G2 moves 4.441 mm toward the object; G1 and stop remain fixed. Source close focus is 0.700 m from object to the image plane, which the model reproduces with the sensor plate traced physically. Intermediate movement is interpolated.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { STO: { label: "Stop–G2", values: [[11.466, 7.025]] }, "22": { label: "G2–PP", values: [[14.401, 18.842]] } },

  aperture: { nominalFNumber: 1.03, fStops: [1.0, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16 },

  /* ── Optical member PP (patent Table 9 surfaces 23–24): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      dPgF: -0.0015156,
      gapAfterMm: 1.0,
      source: "US 2021/0231927 A1, Example 3 Table 9 surfaces 23–24 (patent θgF 0.53430)",
    },
  ],

  groups: [
    { text: "G1 — stationary", fromSurface: "1", toSurface: "13" },
    { text: "G2 — focus (moves ←)", fromSurface: "15A", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  layout: { scFill: 0.5, yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
