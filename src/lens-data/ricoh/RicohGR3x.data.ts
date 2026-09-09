import type { LensDataInput } from "../../types/optics.js";

/**
 * US20220026670A1 Example 3, Table 3 and Figure 3.
 * S2=24.908 mm is a reconstructed repair of the printed "0 224.908" row.
 * S12 is marked aspherical but coefficients are absent: spherical placeholder.
 * Filters are excluded; rear air includes t/nd, not physical plate thickness.
 * The unlisted 0.70 mm post-filter gap is reconstructed, not published.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gr3x-26f28",
  maker: "Ricoh",
  name: "RICOH GR LENS 26.1mm f/2.8 (Ricoh GR IIIx)",
  subtitle: "US 2022/0026670 A1 EXAMPLE 3 — KAZUYASU OHASHI",
  specs: ["7 ELEMENTS / 5 GROUPS", "f = 26.05 mm", "F/2.87", "2ω = 56.6°", "2 MODELED ASPHERES; S12 UNRESOLVED"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 26.1,
  focalLengthDesign: 26.05,
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "US 2022/0026670 A1",
  patentAuthors: ["Kazuyasu Ohashi"],
  patentAssignees: ["Ricoh Co., Ltd."],
  patentYear: 2022,
  elementCount: 7,
  groupCount: 5, // air-separated count (patent uses 4 power-groups; marketing counts 5)

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.854,
      vd: 40.38,
      fl: 15.86,
      glass: "OHARA L-LAH85V (patent-listed)",
      apd: false,
      dPgF: -0.00708,
      role: "Positive front element of cemented doublet D1; published front asphere",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7888,
      vd: 28.43,
      fl: -13.48,
      glass: "OHARA S-NBH58",
      apd: false,
      dPgF: 0.00492,
      role: "Negative rear element of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.47,
      fl: -25.89,
      glass: "OHARA S-TIM27",
      apd: false,
      dPgF: 0.00638,
      role: "Negative singlet in group II",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 17.23,
      glass: "OHARA S-LAH58",
      apd: false,
      dPgF: -0.00854,
      role: "Positive singlet in group II, before the stop",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      fl: 9.12,
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
      fl: -13.4,
      glass: "OHARA S-TIL6",
      apd: false,
      dPgF: 0.00145,
      role: "Negative rear element of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.9027,
      vd: 31.0,
      fl: -64.86,
      glass: "OHARA L-LAH86 (patent-listed; Pg,F=0.5943)",
      apd: false,
      dPgF: 0.00264,
      role: "Negative singlet forming group IV; rear asphere published, front asphere coefficients missing",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surface numbers: 1–15 (including filter and image).
   *  Filter S14–S15 (1.40 mm, nd=1.51633) is omitted.
   *  Rear air = 14.378 + 1.40/1.51633 + 0.70 = 16.0012818714 mm.
   *  The final 0.70 mm is inferred from conjugate and total-track consistency;
   *  the table leaves d15 blank. Do not present it as a published spacing.
   *  S12 is marked aspherical but its coefficients are unpublished here.
   *  Its zero-coefficient spherical placeholder is an explicit limitation.
   */
  surfaces: [
    // ── Group I: cemented doublet D1 (L1 + L2) ──
    { label: "1A", R: 9.247, d: 2.91, nd: 1.854, elemId: 1, sd: 6.0 }, // L1 front (published asphere)
    { label: "2", R: 24.908, d: 0.7, nd: 1.7888, elemId: 2, sd: 5.3 }, // L1→L2 cemented junction
    { label: "3", R: 7.36, d: 2.01, nd: 1.0, elemId: 0, sd: 4.3 }, // L2 rear → air

    // ── Group II: L3 (negative) + L4 (positive) ──
    { label: "4", R: -22.769, d: 0.7, nd: 1.6398, elemId: 3, sd: 4.5 }, // L3 front
    { label: "5", R: 61.496, d: 0.1, nd: 1.0, elemId: 0, sd: 4.2 }, // L3 rear → air (0.10 mm gap)
    { label: "6", R: 17.395, d: 2.32, nd: 1.883, elemId: 4, sd: 4.5 }, // L4 front
    { label: "7", R: -113.651, d: 1.2, nd: 1.0, elemId: 0, sd: 4.2 }, // L4 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 1.2, nd: 1.0, elemId: 0, sd: 3.6 }, // stop (patent S8)

    // ── Group III: cemented doublet D2 (L5 + L6) ──
    { label: "9", R: 24.522, d: 2.57, nd: 1.755, elemId: 5, sd: 4.0 }, // L5 front
    { label: "10", R: -9.139, d: 0.6, nd: 1.53172, elemId: 6, sd: 4.0 }, // L5→L6 cemented junction
    { label: "11", R: 33.044, d: 1.15, nd: 1.0, elemId: 0, sd: 4.0 }, // L6 rear → air

    // ── Group IV: L7 (negative meniscus, 2× asph) ──
    { label: "12A", R: -18.0, d: 1.0, nd: 1.9027, elemId: 7, sd: 4.8 }, // Spherical placeholder for source-marked asphere; coefficients missing
    { label: "13A", R: -26.676, d: 16.001281871360455, nd: 1.0, elemId: 0, sd: 5.2 }, // Published rear asphere → air-equivalent image spacing
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 0,
      A4: -2.63557e-5,
      A6: -6.86204e-7,
      A8: 9.51319e-9,
      A10: -2.99238e-10,
      A12: 0,
      A14: 0,
    },
    "12A": {
      // Patent marks S12 aspherical (*) but publishes no coefficients for Ex. 3.
      // Zero coefficients are a spherical fallback, not a patent prescription.
      K: 0,
      A4: 0,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: 1.30975e-4,
      A6: -3.75252e-7,
      A8: 5.96446e-8,
      A10: -8.12812e-10,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates; only BFD changes.
   *  The source has no finite focus table. Closest station is reconstructed
   *  for the assumed 0.20 m image-to-object distance using the rounded lens
   *  matrix; extension 4.8551862252 mm. All optics and stop move together.
   */
  var: {
    "13A": [16.001281871360455, 20.856468096571174],
  },

  varLabels: [["13A", "BF"]],

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

  /* ── Focus configuration ── */
  closeFocusM: 0.2, // Assumed finite endpoint, not a published patent station.
  focusDescription: "Reconstructed unit focus: all seven elements and the stop translate 4.85519 mm for an assumed 20 cm image-to-object distance. No finite patent focus schedule; S12 asphere coefficients remain unavailable.",

  /* ── Aperture configuration ── */
  nominalFno: 2.87,
  fstopSeries: [2.87, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
