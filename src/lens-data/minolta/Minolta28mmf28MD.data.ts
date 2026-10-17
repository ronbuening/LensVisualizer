import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MINOLTA MD 28mm f/2.8 (7-element / 7-group variant)          ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 3,973,832, Example 2 (Ogura / Nakamura, Minolta).             ║
 * ║ Production correlation: inferred 7/7 MD W Rokkor 28mm f/2.8 family       ║
 * ║ variant; the patent does not name the commercial lens, and this model     ║
 * ║ does not represent the later 5/5 MD redesign.                             ║
 * ║                                                                            ║
 * ║ Uniform scale: patent f = 1 prescription × 28.0 mm/unit.                  ║
 * ║ Computed design EFL from the rounded prescription: 27.99547564 mm.        ║
 * ║ Final-surface d is the computed rear-vertex paraxial BFD                  ║
 * ║ (36.72681608 mm), not the patent header's rounded 1.31 × 28 = 36.68 mm.   ║
 * ║                                                                            ║
 * ║ Stop model: Fig. 2 shows the iris inside dC0 but gives no coordinate.      ║
 * ║ The stop is modeled 41% of the B2→C1 axial gap from B2, estimated from    ║
 * ║ the rendered figure centerline. The scaled dC0 = 3.9228 mm is conserved   ║
 * ║ as 1.608348 mm + 2.314452 mm. The stop radius is derived from the design  ║
 * ║ f-number, the published F/2.8; it is not a published diaphragm dimension. ║
 * ║                                                                            ║
 * ║ Semi-diameters: no clear apertures are published. The values below are    ║
 * ║ MODELED from exact meridional ray geometry, the Fig. 2 envelope, and the  ║
 * ║ current edge/rim/shared-gap policy. They are not source measurements.      ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent supplies only the     ║
 * ║ design/infinity state. The production 0.3 m minimum focus is retained as  ║
 * ║ marketed metadata; no close-focus optical spacing law is invented.        ║
 * ║                                                                            ║
 * ║ Glass: the patent publishes refractive-index/Abbe coordinates, not       ║
 * ║ suppliers or spectral line indices. They are interpreted here as d-line   ║
 * ║ nd/νd; class/code labels preserve supplier uncertainty. IA and IVC use an N-SK16 spectral proxy while remaining ║
 * ║ at source coordinates 1.6214 / 61.3; supplier identity is unproven.                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "minolta-md-28mm-f28-7-7",
  maker: "Minolta",
  name: "MINOLTA MD 28mm f/2.8 (7 elements / 7 groups)",
  subtitle: "US 3,973,832 Example 2 — inferred 7-element / 7-group MD-family correlation",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 7 GROUPS", "f = 27.9955 mm (DESIGN)", "F/2.8", "2ω = 76° (PATENT)", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: 28, design: 27.99547564 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,973,832",
    patentYear: 1976,
    authors: ["Toshinobu Ogura", "Akiyoshi Nakamura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element IA",
      type: "Negative Meniscus",
      nd: 1.6214,
      vd: 61.3,
      indexReference: "d",
      focalLengthMm: -62.55067102,
      glass: "N-SK16 class (coordinate-compatible spectral proxy; native d 1.6214/61.3; supplier/melt unproven)",
      apd: false,
      role: "Front negative meniscus of patent component A.",
      diagramLabel: "IA",
    },
    {
      id: 2,
      name: "L2",
      label: "Element IIA",
      type: "Negative Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: -49.20337496,
      glass: "N-SK16 class (coordinate-compatible spectral proxy; coordinate code 620603; supplier/melt unproven)",
      apd: false,
      role: "Second negative meniscus of patent component A.",
      diagramLabel: "IIA",
    },
    {
      id: 3,
      name: "L3",
      label: "Element IB",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      focalLengthMm: 25.59914013,
      glass: "S-LAM3 class (coordinate-compatible spectral proxy; coordinate code 717479/480; supplier/melt unproven)",
      apd: false,
      role: "Positive second component B.",
      diagramLabel: "IB",
    },
    {
      id: 4,
      name: "L4",
      label: "Element IC",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      focalLengthMm: 56.88487987,
      glass: "H-LaF3B class (coordinate-compatible spectral proxy; coordinate code 744449; supplier/melt unproven)",
      apd: false,
      role: "Front positive lens of rear component C.",
      diagramLabel: "IC",
    },
    {
      id: 5,
      name: "L5",
      label: "Element IIC",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.6,
      indexReference: "d",
      focalLengthMm: -16.39023234,
      glass: "SF4 class (coordinate-compatible spectral proxy; coordinate code 755276; supplier/melt unproven)",
      apd: false,
      role: "Negative second lens of rear component C.",
      diagramLabel: "IIC",
    },
    {
      id: 6,
      name: "L6",
      label: "Element IIIC",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      focalLengthMm: 30.26292139,
      glass: "LAC10 class (coordinate-compatible spectral proxy; coordinate code 720503; supplier/melt unproven)",
      apd: false,
      role: "Positive third lens of rear component C.",
      diagramLabel: "IIIC",
    },
    {
      id: 7,
      name: "L7",
      label: "Element IVC",
      type: "Biconvex Positive",
      nd: 1.6214,
      vd: 61.3,
      indexReference: "d",
      focalLengthMm: 68.70824059,
      glass: "N-SK16 class (coordinate-compatible spectral proxy; native d 1.6214/61.3; supplier/melt unproven)",
      apd: false,
      role: "Rear positive lens of patent component C.",
      diagramLabel: "IVC",
    },
  ],

  /* ── Surface prescription ──
   * Radii and source axial spacings are scaled ×28 from Example 2.
   * Source labels are retained in end-of-line comments.
   */
  surfaces: [
    { label: "1", R: 26.5524, d: 2.24, sd: 13.0, medium: 1 }, // A1 / dA1
    { label: "2", R: 15.2656, d: 4.76, sd: 11.0 }, // A2 / dA2
    { label: "3", R: 35.364, d: 1.82, sd: 10.0, medium: 2 }, // A3 / dA3
    { label: "4", R: 16.0608, d: 11.606, sd: 9.0 }, // A4 / dB0
    { label: "5", R: 26.7176, d: 8.68, sd: 8.5, medium: 3 }, // B1 / dB1
    { label: "6", R: -50.6828, d: 1.608348, sd: 8.0 }, // B2 / first 41% of dC0
    { label: "STO", R: "flat", d: 2.314452 }, // inferred stop in dC0
    { label: "7", R: -145.9556, d: 2.1476, sd: 7.6, medium: 4 }, // C1 / dC1
    { label: "8", R: -33.0148, d: 2.7552, sd: 7.5 }, // C2 / dC2
    { label: "9", R: -17.1136, d: 4.1076, sd: 7.0, medium: 5 }, // C3 / dC3
    { label: "10", R: 49.35, d: 0.8512, sd: 6.41 }, // C4 / dC4
    { label: "11", R: -60.4352, d: 2.38, sd: 7.0, medium: 6 }, // C5 / dC5
    { label: "12", R: -16.2792, d: 0.0896, sd: 7.2 }, // C6 / dC6
    { label: "13", R: 259.378, d: 1.96, sd: 7.4, medium: 7 }, // C7 / dC7
    { label: "14", R: -50.96, d: 36.72681608, sd: 7.5 }, // C8 / computed paraxial BFD
  ],

  /* (moved from var) No internal focus law is published for Example 2. */
  focus: {
    closeFocusM: 0.3,
    description:
      "Focus travel is not modeled: the patent publishes only the design/infinity prescription. The production 0.3 m minimum focus is metadata; no close-focus optical spacing law is modeled.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "A", fromSurface: "1", toSurface: "4" },
    { text: "B", fromSurface: "5", toSurface: "6" },
    { text: "C", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  /* Required per-lens layout field; no geometry-hiding overrides are used. */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
