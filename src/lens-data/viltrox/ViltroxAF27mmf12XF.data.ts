import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VILTROX AF 27mm f/1.2 PRO XF                                                       ║
 * ╠════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Prescription source: CN 115840281 A, Example 4. The production correlation is inferred from    ║
 * ║  convergent architecture/specification evidence; the patent does not explicitly name the lens.   ║
 * ║  15 elements / 11 physical air-separated groups; five patent functional groups G1–G5.             ║
 * ║  Asphere: L54, both surfaces (source 26/27 → schema labels 26A/27A).                              ║
 * ║  Focus status: PUBLISHED. G4/L41 alone moves 5.09 mm imageward; D1 and D2 conserve 6.96 mm.       ║
 * ║                                                                                                    ║
 * No prescription scaling is applied. Source GL is traced via rearPlates:
 * 13.929 mm air + 2.8 mm glass (nd=1.517, vd=64.199) + 0.5 mm air.
 * It is hidden from the lens diagram; its physical dispersion is unresolved.
 * ║                                                                                                    ║
 * ║  Semi-diameters are MODELING INFERENCES because Example 4 publishes none. The stop radius is       ║
 * ║  derived from the design f-number, the patent's nominal f/1.2 at infinity. Lens-surface SDs were   ║
 * ║  derived from exact meridional d-line ray envelopes at infinity and the published nearest-focus    ║
 * ║  state, checked at the patent 27.6° half-field and at the viewer's 0.6-field sample, then limited  ║
 * ║  where required by positive edge thickness, actual rim slope, and the 0.90 cross-gap policy.       ║
 * ║  Full-field edge-pupil clipping is therefore modeled as physical vignetting rather than hidden     ║
 * ║  renderer trim.                                                                                    ║
 * ║                                                                                                    ║
 * The patent publishes nd/νd only. Named catalog curves are compatible spectral proxies;
 * production suppliers remain unresolved. No surrogate line indices or dPgF are authored.
 *
 * ║  Product metadata sources:                                                                         ║
 * ║    https://viltrox.com/products/viltrox-af-27mm-f-1-2-pro-xf-mount                               ║
 * ║    https://viltrox.com/blogs/insights/unleashing-creativity-with-the-viltrox-27mm-f1-2-xf-lens   ║
 * ║  Catalog sources: CDGM 2026 optical-glass database/catalog; HOYA 2026 optical-glass catalog.       ║
 * ╚════════════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF image-plane audit (2026-09-25): CN115840281A Example 4, Tables
 * 10–12 (PDF pp. 13–14), matches all R/d, nd/vd and aspheric coefficients.
 * Restoring physical GL leaves the paraxial offset +0.024627 mm unchanged.
 * EFL 27.706645 mm reproduces printed 27.7, but the source physical rear
 * distance 17.229 mm differs from its prescription BFL 17.253627 mm.
 * A small finite-aperture best-focus compromise is plausible, not stated
 * by the patent. Preserve the source plane and document the residual.
 */

/* SD review: CN115840281A, PDF p. 33, Fig. 4-1, 600 dpi, 2026-09-10 UTC.
 * Front-pair optical rims measured from Fig. 4-1: S1/S2 23.5 mm, S3 20.1 mm, S4 15.5 mm.
 * Remaining geometry-limited inferred SDs retained; mechanical blank edges excluded.
 * Catalog names denote compatible spectral proxies; patent nd/vd and supplier uncertainty are retained.
 */
const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "viltrox-af-27mm-f12-pro-xf",
  maker: "Viltrox",
  name: "VILTROX AF 27mm f/1.2 PRO XF",
  subtitle: "CN 115840281 A Example 4 — production correlation to AF 27mm f/1.2 PRO XF",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "15 ELEMENTS / 11 GROUPS",
      "f = 27.7066 mm (DESIGN)",
      "F/1.2",
      "2ω = 55.2° (PATENT)",
      "1 ASPHERICAL ELEMENT / 2 ASPHERICAL SURFACES",
      "PUBLISHED INNER FOCUS",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: 27, design: 27.706644932113033 },
    fNumber: { marketing: 1.2, design: 1.2 },
  },

  source: {
    patentNumber: "CN 115840281 A",
    patentYear: 2023,
    authors: ["Liu Chen"],
    assignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  },

  /* ── Physical elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.923,
      vd: 20.88,
      focalLengthMm: 87.78089683366176,
      glass: "N-SF66 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.605,
      focalLengthMm: -57.50193936428703,
      glass: "H-FK61 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.541,
      vd: 47.201,
      focalLengthMm: -27.643292170650593,
      glass: "S-TIL2 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L21",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 25.426,
      focalLengthMm: 20.163423918662467,
      glass: "H-ZLaF90 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.593,
      vd: 68.342,
      focalLengthMm: 40.10113454728334,
      glass: "H-ZPK5 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L23",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L24",
      label: "L24",
      type: "Biconcave Negative",
      nd: 1.648,
      vd: 33.841,
      focalLengthMm: -17.814434226457355,
      glass: "H-ZF1 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L24",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L25",
      label: "L25",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 39.218,
      focalLengthMm: 35.84794306803668,
      glass: "H-ZLaF68L (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L25",
    },
    {
      id: 8,
      name: "L26",
      label: "L26",
      type: "Biconcave Negative",
      nd: 1.847,
      vd: 23.785,
      focalLengthMm: -14.48256966512536,
      glass: "H-ZF52 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L26",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L27",
      label: "L27",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.549,
      focalLengthMm: 19.659384192013835,
      glass: "TAF5 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L27",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.911,
      vd: 35.25,
      focalLengthMm: 32.11247872235829,
      glass: "TAFD35 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L31",
    },
    {
      id: 11,
      name: "L41",
      label: "L41",
      type: "Biconcave Negative",
      nd: 1.689,
      vd: 31.161,
      focalLengthMm: -36.09625727473254,
      glass: "J-SF8 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L41",
    },
    {
      id: 12,
      name: "L51",
      label: "L51",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.322,
      focalLengthMm: 18.158981391716683,
      glass: "S-LAH97 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L51",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L52",
      label: "L52",
      type: "Biconcave Negative",
      nd: 1.847,
      vd: 23.785,
      focalLengthMm: -17.930804902474733,
      glass: "H-ZF52 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L52",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L53",
      label: "L53",
      type: "Biconvex Positive",
      nd: 1.946,
      vd: 17.942,
      focalLengthMm: 25.104617304306263,
      glass: "H-ZF88 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L53",
    },
    {
      id: 15,
      name: "L54",
      label: "L54",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.822,
      vd: 42.715,
      focalLengthMm: -79.59615159146675,
      glass: "M-TAFD51 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L54",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical surfaces: patent uses the standard K convention ── */
  surfaces: [
    { label: "1", R: 48.6, d: 5.5, sd: 23.5, medium: 1 },
    { label: "2", R: 114.854, d: 0.15, sd: 23.5 },
    { label: "3", R: 44.69, d: 1.2, sd: 20.1, medium: 2 },
    { label: "4", R: 17.276, d: 12.73, sd: 15.5 },
    { label: "5", R: -38.008, d: 1.2, sd: 13.5, medium: 3 },
    { label: "6", R: 24.93, d: 7.214, sd: 13.5, medium: 4 },
    { label: "7", R: -90.666, d: 0.2, sd: 13.0 },
    { label: "8", R: -1676.832, d: 5.1, sd: 12.7, medium: 5 },
    { label: "9", R: -23.474, d: 1.0, sd: 12.2, medium: 6 },
    { label: "10", R: 23.094, d: 2.289, sd: 10.79 },
    { label: "11", R: 94.311, d: 3.6, sd: 11.2, medium: 7 },
    { label: "12", R: -46.792, d: 1.256, sd: 11.5 },
    { label: "13", R: -27.106, d: 1.0, sd: 11.5, medium: 8 },
    { label: "14", R: 22.786, d: 8.0, sd: 12.6, medium: 9 },
    { label: "15", R: -45.651, d: 3.019, sd: 13.0 },
    { label: "STO", R: "flat", d: 2.0 },
    { label: "17", R: 58.259, d: 4.9, sd: 15.0, medium: 10 },
    { label: "18", R: -56.405, sd: 15.0 },
    { label: "19", R: -549.404, d: 0.8, sd: 13.3, medium: 11 },
    { label: "20", R: 26.065, sd: 12.9 },
    { label: "21", R: 24.627, d: 6.5, sd: 12.4, medium: 12 },
    { label: "22", R: -27.416, d: 1.0, sd: 12.4, medium: 13 },
    { label: "23", R: 34.619, d: 6.157, sd: 12.4 },
    { label: "24", R: 36.502, d: 6.6, sd: 15.2, medium: 14 },
    { label: "25", R: -62.0, d: 1.842, sd: 15.2 },
    {
      label: "26A",
      R: 32.474,
      d: 1.6,
      sd: 14.2,
      medium: 15,
      asphere: { K: 0, A4: -4.681e-5, A6: -1.994e-7, A8: 1.171e-9, A10: -3.72e-12, A12: 3.2e-15 },
    },
    {
      label: "27A",
      R: 21.22,
      d: 13.929,
      sd: 14.0,
      asphere: { K: 0, A4: -4.079e-5, A6: -4.07e-8, A8: -3.876e-10, A10: 5.398e-12, A12: -1.781e-14 },
    },
  ],

  /* ── Product/control metadata ── */
  focus: {
    closeFocusM: 0.28,
    description:
      "PUBLISHED inner focus: patent G4/L41 translates 5.09 mm imageward; D1 (s18) changes 0.94→6.03 mm and D2 (s20) 6.02→0.93 mm. Patent Table 11 labels the near state 0.158 m at an undefined reference plane; closeFocusM uses Viltrox's 0.28 m sensor-referenced minimum shooting distance.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published focus movement ── */
  gaps: { "18": { label: "D1", values: [[0.94, 6.03]] }, "20": { label: "D2", values: [[6.02, 0.93]] } },

  aperture: { nominalFNumber: 1.2, fStops: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 11 },

  rearPlates: [
    {
      label: "GL",
      thicknessMm: 2.8,
      nd: 1.517,
      vd: 64.199,
      gapAfterMm: 0.5,
      source: "CN115840281A, Example 4 Table 10, surfaces 28–29",
    },
  ],

  /* ── Diagram annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "4" },
    { text: "G2", fromSurface: "5", toSurface: "15" },
    { text: "G3", fromSurface: "17", toSurface: "18" },
    { text: "G4 (FOCUS)", fromSurface: "19", toSurface: "20" },
    { text: "G5", fromSurface: "21", toSurface: "27A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
