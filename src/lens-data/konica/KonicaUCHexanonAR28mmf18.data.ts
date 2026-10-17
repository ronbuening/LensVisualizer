import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — KONICA UC HEXANON AR 28mm f/1.8                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 1976-026535, Example 1 (Konishiroku Photo Industry Co., Ltd.).       ║
 * ║ Patent design: 8 elements / 8 air-spaced groups / 16 spherical refracting       ║
 * ║ surfaces; retrofocus architecture with an L2–L4 floating middle group.          ║
 * ║                                                                                ║
 * ║ SCALE: The patent is normalized to f = 1. All dimensional prescription values  ║
 * ║ are scaled uniformly by s = 28.0 for production correlation. This preserves    ║
 * ║ the patent normalization rather than forcing the rounded table to EFL = 28 mm. ║
 * ║ The resulting modeled EFL is 28.1585 mm; marketed focal length is 28 mm.        ║
 * ║                                                                                ║
 * ║ APERTURE: Example 1 publishes F2. The production lens is marketed as f/1.8.    ║
 * ║ nominalFno/apertureDesign therefore use the patent/model f/2.0; f/1.8 is kept  ║
 * ║ only in apertureMarketing and the display name.                                ║
 * ║                                                                                ║
 * ║ STOP MODEL: Figure 1 places the iris in patent gap d10 between r10 and r11,    ║
 * ║ but does not tabulate its station or diameter. The modeled STO is placed at    ║
 * ║ 20% of d10 measured rearward from r10 (figure-based estimate). The stop radius ║
 * ║ is derived from the design f-number, f/2.0 for the scaled Example 1 EFL.       ║
 * ║                                                                                ║
 * ║ FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION for the production 0.18 m endpoint.   ║
 * ║ The patent publishes an M = 1/6 floating state (d2 = 0.2875, d8 = 0.1189 in   ║
 * ║ normalized units), translating L2–L4 by +0.0357 while conserving d2 + d8.      ║
 * ║ It does not publish the complete focusing extension/cam needed to map that     ║
 * ║ state to the production 0.18 m MFD. Runtime focus var is therefore omitted.    ║
 * ║                                                                                ║
 * ║ SEMI-DIAMETERS: Not tabulated by the patent. SDs are inferred from the clean   ║
 * ║ optical rims in Figure 1, the paraxial f/2 pupil, exact meridional checks at   ║
 * ║ 0.60 × 38° field, and the edge/slope/cross-gap geometry rules. The 600-dpi     ║
 * ║ audit normalized L2–L5 against the L1 rim and gave L6/L7 a common 9.6 mm      ║
 * ║ rim, the largest rounded shared value that preserves the thin r12→r13 air     ║
 * ║ gap. L8 remains visibly larger, matching the source silhouette, and default   ║
 * ║ off-axis sampled rays still pass.                                               ║
 * ║                                                                                ║
 * ║ GLASS: The patent publishes only nd/νd and no vendor, nC, nF, ng, or dPgF.     ║
 * ║ Coordinate-compatible, coefficient-backed catalog curves are used only as      ║
 * ║ supplier-neutral optical proxies; none asserts the historical production melt. ║
 * ╚══════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "konica-uc-hexanon-ar-28mm-f1-8",
  maker: "Konica",
  name: "KONICA UC HEXANON AR 28mm f/1.8",
  subtitle: "JP 1976-026535 Example 1 — patent f/2.0 design correlated to the production 28mm f/1.8",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 8 GROUPS",
      "MODELED EFL 28.1585 mm",
      "PATENT DESIGN f/2.0",
      "PATENT 2ω = 76°",
      "MARKETED 28mm f/1.8",
    ],
    elementCount: 8,
    groupCount: 8,
    focalLengthMm: { marketing: 28, design: 28.158466 },
    fNumber: { marketing: 1.8, design: 2 },
  },

  source: {
    patentNumber: "JP 1976-026535 A",
    patentYear: 1976,
    authors: ["Toshiko Shimokura"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: -63.3599,
      glass: "S-BAL35 catalog-equivalent coefficient proxy (patent 589611; production supplier unspecified)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: 88.7137,
      glass: "E-FD2 catalog-equivalent coefficient proxy (patent 648338; production supplier unspecified)",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: -38.4795,
      glass: "S-BAL35 catalog-equivalent coefficient proxy (patent 589611; production supplier unspecified)",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      focalLengthMm: 42.8077,
      glass: "LAC10 catalog-equivalent coefficient proxy (patent 720503; production supplier unspecified)",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 45.1063,
      glass: "LAC8 catalog-equivalent coefficient proxy (patent 713539; production supplier unspecified)",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -20.0467,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.7,
      focalLengthMm: 41.706,
      glass: "K-LaK14 catalog-equivalent coefficient proxy (patent 697557; production supplier unspecified)",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 44.1725,
      glass: "S-LAH51 catalog-equivalent coefficient proxy (patent 786442; production supplier unspecified)",
      diagramLabel: "L8",
    },
  ],

  /* ── Surface prescription ──
   * Raw patent radii/thicknesses are scaled ×28. The r10→r11 source gap is split
   * by the inferred STO; its two modeled pieces sum exactly to 5.8492 mm.
   * Final surface d = published B.F. 1.37 × 28 = 38.36 mm.
   */
  surfaces: [
    { label: "1", R: 69.8964, d: 1.9796, sd: 21.5, medium: 1 },
    { label: "2", R: 24.0772, d: 7.0504, sd: 19.5 },
    { label: "3", R: 105.5208, d: 5.0792, sd: 15.4, medium: 2 },
    { label: "4", R: -123.7656, d: 0.28, sd: 15.4 },
    { label: "5", R: 70.6132, d: 1.6996, sd: 13.1, medium: 3 },
    { label: "6", R: 17.0072, d: 8.4588, sd: 13.1 },
    { label: "7", R: 28.2884, d: 9.2988, sd: 10.2, medium: 4 },
    { label: "8", R: 296.8308, d: 4.3288, sd: 10.2 },
    { label: "9", R: "flat", d: 4.3988, sd: 10, medium: 5 },
    { label: "10", R: -32.1608, d: 1.16984, sd: 10 },
    { label: "STO", R: "flat", d: 4.67936 },
    { label: "11", R: -20.5604, d: 4.7992, sd: 9.6, medium: 6 },
    { label: "12", R: 82.9164, d: 1.3804, sd: 9.6 },
    { label: "13", R: -68.0652, d: 4.0012, sd: 9.6, medium: 7 },
    { label: "14", R: -20.8572, d: 0.2996, sd: 9.6 },
    { label: "15", R: 131.6672, d: 4.0992, sd: 13.3, medium: 8 },
    { label: "16", R: -46.4996, d: 38.36, sd: 13.3 },
  ],

  /* ── Focus configuration ── */
  /* (moved from var)
   * Source-published M = 1/6 floating state, audit-only:
   *   d2: 7.0504 → 8.0500 mm
   *   d8: 4.3288 → 3.3292 mm
   * Runtime `var` is intentionally empty so the viewer does not falsely map this
   * source state to the production 0.18 m minimum-focus endpoint.
   */
  focus: {
    closeFocusM: 0.18,
    description:
      "Production MFD is 0.18 m from the film plane. JP 1976-026535 Example 1 publishes only an M=1/6 state in which L2–L4 shifts 0.9996 mm imageward; the complete focusing extension/cam to 0.18 m is not published, so no runtime internal focus reconstruction is authored.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "L1 (− / FIXED)", fromSurface: "1", toSurface: "2" },
    { text: "L2–L4 (+ / FLOAT → IMG)", fromSurface: "3", toSurface: "8" },
    { text: "L5–L8 (+ / FIXED)", fromSurface: "9", toSurface: "16" },
  ],
  doublets: [],

  /* ── Layout ── */
  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
