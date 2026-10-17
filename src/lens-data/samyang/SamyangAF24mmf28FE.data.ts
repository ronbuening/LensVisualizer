import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SAMYANG AF 24mm f/2.8 FE                                    ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: WO 2020/230915 A1, Example 1 / First Embodiment.                 ║
 * ║ Seven elements in seven air-separated groups; aspheres at 6A, 8A, 11A. ║
 * ║ Focus status: PUBLISHED. G21 (L51–L61) translates internally; D1/D2     ║
 * ║ preserve all three published focus rows.                                 ║
 * ║                                                                            ║
 * ║ Native patent scale is retained (s = 1.0). The production lens is       ║
 * ║ marketed as 24 mm f/2.8; the Example-1 paraxial EFL is 25.0263 mm and ║
 * ║ the patent infinity f-number is 2.892. Marketing and design fields are   ║
 * ║ intentionally separate.                                                   ║
 * ║                                                                            ║
 * ║ Patent surfaces 16–17 are an optional optical device (filter / cover     ║
 * ║ glass) and are excluded. Surface 15 therefore uses the patent's          ║
 * ║ published no-device "in Air" spacing of 23.467 mm to IMG.               ║
 * ║                                                                            ║
 * ║ The patent publishes no stop diameter or semi-diameters. The stop radius   ║
 * ║ is derived from the design f-number F/# = 2.892 and EFL = 25.026319 mm.    ║
 * ║ The independently traced paraxial entrance-pupil magnification is          ║
 * ║ EP/stop = 0.918207.                                                        ║
 * ║ Element semi-diameters are inferred from exact d-line ray footprints at  ║
 * ║ 0.60 × the patent infinity half-field over all three focus states, then ║
 * ║ constrained by edge thickness, actual rim slope, conic height, and      ║
 * ║ cross-gap intrusion. L21 is gap-limited at the 2→3 air space.            ║
 * ║                                                                            ║
 * ║ The patent does not publish per-element nC/nF/ng/dPgF and does not name ║
 * ║ glass vendors. Those fields are therefore not invented. Neutral classes ║
 * ║ or six-digit coordinates are used where defensible; L51 uses          ║
 * ║ a qualified S-TIM35 curve, without a production-identity claim.                       ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

// The 2026-09-09 Figure 1 optical-rim audit increased L71 to 10.3 mm; gap-limited L21 is retained.
const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "samyang-af-24mm-f2p8-fe",
  maker: "Samyang",
  name: "SAMYANG AF 24mm f/2.8 FE",
  subtitle: "WO 2020/230915 A1 — Example 1 / First Embodiment; native patent scale",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "7 ELEMENTS / 7 GROUPS",
      "24 mm MARKETING / 25.026 mm DESIGN",
      "f/2.8 MARKETING / f/2.892 DESIGN",
      "3 ASPHERICAL SURFACES",
      "INTERNAL FOCUS",
    ],
    elementCount: 7,
    groupCount: 7,
    /* Manufacturer marketing metadata: LK Samyang AF 24mm F2.8 FE product page. */
    focalLengthMm: { marketing: 24, design: 25.026319 },
    fNumber: { marketing: 2.8, design: 2.892 },
  },

  source: {
    patentNumber: "WO 2020/230915 A1",
    patentYear: 2020,
    authors: ["Moon-Kyung Kim"],
    assignees: ["Samyang Optics Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -37.261287,
      glass: "437951 — very-low-dispersion crown class (FCD100 coordinate; vendor unresolved)",
      role: "Front negative meniscus in fixed first group G11.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.98613,
      vd: 16.48,
      focalLengthMm: -47.223088,
      glass: "986165 — very-high-index flint class (FDS16-W coordinate; vendor unresolved)",
      role: "High-index negative element in fixed first group G11.",
      diagramLabel: "L21",
    },
    {
      id: 3,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.80755,
      vd: 40.89,
      focalLengthMm: 13.00782,
      glass: "808409 — high-index class (catalog identity unresolved)",
      role: "Strong positive element in G11; rear surface 6A is aspherical.",
      diagramLabel: "L31",
    },
    {
      id: 4,
      name: "L41",
      label: "Element L41",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.51815,
      vd: 64.03,
      focalLengthMm: -39.579499,
      glass: "J-BK7A catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      role: "Rear element of fixed first group G11; rear surface 8A is aspherical.",
      diagramLabel: "L41",
    },
    {
      id: 5,
      name: "L51",
      label: "Element L51",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.69815,
      vd: 31.19,
      focalLengthMm: -79.130657,
      glass: "S-TIM35 catalog-equivalent (patent coordinates retained; production supplier unspecified)",
      role: "Front element of moving focus group G21; rear surface 11A is aspherical.",
      diagramLabel: "L51",
    },
    {
      id: 6,
      name: "L61",
      label: "Element L61",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 16.644163,
      glass: "773496 — high-index class (cross-vendor coordinate)",
      role: "Strong positive rear element of moving focus group G21.",
      diagramLabel: "L61",
    },
    {
      id: 7,
      name: "L71",
      label: "Element L71",
      type: "Plano-Concave Negative",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -33.472033,
      glass: "923209 — very-high-index dense-flint class (cross-vendor coordinate)",
      role: "Fixed third-group field-side negative element G31.",
      diagramLabel: "L71",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) Patent Formula 7 uses the standard (1+K) conic convention. */
  surfaces: [
    { label: "1", R: 47.29, d: 0.7, sd: 8.85, medium: 1 },
    { label: "2", R: 12.058, d: 4.558, sd: 8.85 },
    { label: "3", R: -20.539, d: 1.1, sd: 7.5, medium: 2 },
    { label: "4", R: -37.723, d: 0.3, sd: 7.5 },
    { label: "5", R: 20.001, d: 3.638, sd: 7.7, medium: 3 },
    {
      label: "6A",
      R: -20.326,
      d: 0.1,
      sd: 7.7,
      asphere: { K: -52.01448, A4: -1.21e-4, A6: 2.21e-6, A8: -2.6e-8, A10: 1.42e-10, A12: 0, A14: 0 },
    },
    { label: "7", R: 18.751, d: 1.1, sd: 6.3, medium: 4 },
    {
      label: "8A",
      R: 9.599,
      d: 2.037,
      sd: 6.3,
      asphere: { K: -10.05487, A4: 3.41e-4, A6: 1.27e-6, A8: -1.94e-7, A10: 3.56e-9, A12: 0, A14: 0 },
    },
    { label: "STO", R: "flat" },
    { label: "10", R: -10.324, d: 2.724, sd: 7.45, medium: 5 },
    {
      label: "11A",
      R: -14.074,
      d: 0.1,
      sd: 7.45,
      asphere: { K: 0.60401, A4: 2.06e-4, A6: 4.04e-7, A8: 3.52e-8, A10: -3.62e-10, A12: 0, A14: 0 },
    },
    { label: "12", R: -187.408, d: 5.142, sd: 9.0, medium: 6 },
    { label: "13", R: -12.176, sd: 9.0 },
    { label: "14", R: "flat", d: 0.7, sd: 10.3, medium: 7 },
    { label: "15", R: 30.89, d: 23.467, sd: 10.3 },
  ],

  /* Production MFD is 0.24 m; the patent's close row is labeled TL=0.2m. */
  focus: {
    closeFocusM: 0.24,
    /*
     * Published focus states: infinity, MAG=-1/40, TL=0.2m.
     * The middle focusT is the normalized published G21 travel fraction
     * 0.22644 / 1.08634. It is an interpolation coordinate, not an object-distance
     * claim, because the patent's D0/TL reference-plane statements conflict.
     */
    keyframes: [0, 0.208443029, 1],
    description:
      "Published internal focus: G21 (L51–L61) translates 1.08634 mm objectward from infinity to the patent TL=0.2m row; " +
      "D1 and D2 preserve all three published spacing states. closeFocusM=0.24 m is the production specification and is " +
      "not asserted to share the patent's ambiguous D0/TL reference plane.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    STO: { label: "D1", values: [[4.33946, 4.11302, 3.25312]] },
    "13": { label: "D2", values: [[2.13342, 2.35986, 3.21976]] },
  },

  aperture: { nominalFNumber: 2.892, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  groups: [
    { text: "G11", fromSurface: "1", toSurface: "8A" },
    { text: "G21 (FOCUS)", fromSurface: "10", toSurface: "13" },
    { text: "G31", fromSurface: "14", toSurface: "15" },
  ],
  doublets: [],

  /* Layout-only value; no geometry constraint is relaxed or hidden. */
  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
