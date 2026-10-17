import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US20220026670A1 Example 3, Table 3 and Figure 3.
 * S2=24.908 mm is a reconstructed repair of the printed "0 224.908" row.
 * S12 is marked aspherical but coefficients are absent: spherical placeholder.
 * Filter S14–S15 (1.40 mm, nd 1.51633, νd 64.14) is modeled in `rearPlates`
 * (traced, not drawn); S13 keeps the printed 14.378 mm gap to the filter.
 * d15 is not printed: the 0.70 mm filter-to-image gap is the earlier
 * reconstruction (paraxial focus), not a published spacing.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "ricoh-gr3x-26f28",
  maker: "Ricoh",
  name: "RICOH GR LENS 26.1mm f/2.8 (Ricoh GR IIIx)",
  subtitle: "US 2022/0026670 A1 EXAMPLE 3 — KAZUYASU OHASHI",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "aps-c",
    specs: ["7 ELEMENTS / 5 GROUPS", "f = 26.05 mm", "F/2.87", "2ω = 56.6°", "2 MODELED ASPHERES; S12 UNRESOLVED"],
    elementCount: 7,
    groupCount: 5, // air-separated count (patent uses 4 power-groups; marketing counts 5)
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 26.1, design: 26.05 },
    fNumber: { marketing: 2.8, design: 2.87 },
  },

  source: {
    patentNumber: "US 2022/0026670 A1",
    patentYear: 2022,
    authors: ["Kazuyasu Ohashi"],
    assignees: ["Ricoh Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.854,
      vd: 40.38,
      focalLengthMm: 15.86,
      glass: "OHARA L-LAH85V (patent-listed)",
      apd: false,
      role: "Positive front element of cemented doublet D1; published front asphere",
      cemented: "D1",
      dPgF: -0.00708,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7888,
      vd: 28.43,
      focalLengthMm: -13.48,
      glass: "OHARA S-NBH58",
      apd: false,
      role: "Negative rear element of cemented doublet D1",
      cemented: "D1",
      dPgF: 0.00492,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.47,
      focalLengthMm: -25.89,
      glass: "OHARA S-TIM27",
      apd: false,
      role: "Negative singlet in group II",
      dPgF: 0.00638,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      focalLengthMm: 17.23,
      glass: "OHARA S-LAH58",
      apd: false,
      role: "Positive singlet in group II, before the stop",
      dPgF: -0.00854,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 9.12,
      glass: "J-LASKH2 — compatible counterpart; patent glass-name conflict",
      apd: false,
      role: "Positive front element of cemented doublet D2; patent glass-name row conflicts with its nd/vd",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.84,
      focalLengthMm: -13.4,
      glass: "OHARA S-TIL6",
      apd: false,
      role: "Negative rear element of cemented doublet D2",
      cemented: "D2",
      dPgF: 0.00145,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.9027,
      vd: 31.0,
      focalLengthMm: -64.86,
      glass: "OHARA L-LAH86 (patent-listed; Pg,F=0.5943)",
      apd: false,
      role: "Negative singlet forming group IV; rear asphere published, front asphere coefficients missing",
      dPgF: 0.00264,
    },
  ],

  /* ── Surface prescription ──
   *  Patent surface numbers: 1–15 (including filter and image).
   *  S13 → filter: printed 14.378 mm. Filter S14–S15 is in `rearPlates`.
   *  Air-equivalent BF = 14.378 + 1.40/1.51633 + 0.70 = 16.0012818714 mm.
   *  The final 0.70 mm is inferred from conjugate and total-track consistency;
   *  the table leaves d15 blank. Do not present it as a published spacing.
   *  S12 is marked aspherical but its coefficients are unpublished here.
   *  Its zero-coefficient spherical placeholder is an explicit limitation.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Group I: cemented doublet D1 (L1 + L2) ──
    {
      label: "1A",
      R: 9.247,
      d: 2.91,
      sd: 6.0,
      medium: 1,
      asphere: { K: 0, A4: -2.63557e-5, A6: -6.86204e-7, A8: 9.51319e-9, A10: -2.99238e-10 },
    }, // L1 front (published asphere)
    { label: "2", R: 24.908, d: 0.7, sd: 5.3, medium: 2 }, // L1→L2 cemented junction
    { label: "3", R: 7.36, d: 2.01, sd: 4.3 }, // L2 rear → air

    // ── Group II: L3 (negative) + L4 (positive) ──
    { label: "4", R: -22.769, d: 0.7, sd: 4.5, medium: 3 }, // L3 front
    { label: "5", R: 61.496, d: 0.1, sd: 4.2 }, // L3 rear → air (0.10 mm gap)
    { label: "6", R: 17.395, d: 2.32, sd: 4.5, medium: 4 }, // L4 front
    { label: "7", R: -113.651, d: 1.2, sd: 4.2 }, // L4 rear → air

    // ── Aperture stop ──
    { label: "STO", R: "flat", d: 1.2 }, // stop (patent S8)

    // ── Group III: cemented doublet D2 (L5 + L6) ──
    { label: "9", R: 24.522, d: 2.57, sd: 4.0, medium: 5 }, // L5 front
    { label: "10", R: -9.139, d: 0.6, sd: 4.0, medium: 6 }, // L5→L6 cemented junction
    { label: "11", R: 33.044, d: 1.15, sd: 4.0 }, // L6 rear → air

    // ── Group IV: L7 (negative meniscus, 2× asph) ──
    {
      label: "12A",
      R: -18.0,
      d: 1.0,
      sd: 4.8,
      medium: 7,
      // (moved from asph["12A"].K) Patent marks S12 aspherical (*) but publishes no coefficients for Ex. 3.
      // Zero coefficients are a spherical fallback, not a patent prescription.
      asphere: { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
    }, // Spherical placeholder for source-marked asphere; coefficients missing
    {
      label: "13A",
      R: -26.676,
      sd: 5.2,
      asphere: { K: 0, A4: 1.30975e-4, A6: -3.75252e-7, A8: 5.96446e-8, A10: -8.12812e-10 },
    }, // Published rear asphere → printed gap to filter
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.2, // Assumed finite endpoint, not a published patent station.
    description:
      "Reconstructed unit focus: all seven elements and the stop translate 4.85519 mm for an assumed 20 cm image-to-object distance. No finite patent focus schedule; S12 asphere coefficients remain unavailable.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates; only the gap to the filter changes.
   *  The source has no finite focus table. Closest station is reconstructed
   *  for the assumed 0.20 m image-to-object distance using the rounded lens
   *  matrix; extension 4.8551862252 mm. All optics and stop move together.
   *  Values are the physical S13 → filter gap (legacy air-equivalent minus
   *  (1.40/1.51633 + 0.70) mm).
   */
  gaps: { "13A": { label: "BF", values: [[14.378, 19.23318622521072]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.87, fStops: [2.87, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 16] },

  /* ── Filter (patent surfaces 14–15): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.4,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      gapAfterMm: 0.7,
      source:
        'US 2022/0026670 A1, Example 3 Table 3 surfaces 14–15 ("various filters"; d15 not printed, 0.70 mm is the earlier paraxial-focus reconstruction)',
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1A", toSurface: "3" },
    { text: "II", fromSurface: "4", toSurface: "7" },
    { text: "III", fromSurface: "9", toSurface: "11" },
    { text: "IV", fromSurface: "12A", toSurface: "13A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1A", toSurface: "3" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
