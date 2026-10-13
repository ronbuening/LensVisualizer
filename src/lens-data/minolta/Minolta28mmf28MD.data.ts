import type { LensDataInput } from "../../types/optics.js";

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
 * ║ as 1.608348 mm + 2.314452 mm. The physical stop semi-diameter             ║
 * ║ 7.17457899 mm is calibrated to the published F/2.8 through the modeled   ║
 * ║ paraxial entrance pupil; it is not a published diaphragm dimension.       ║
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
  key: "minolta-md-28mm-f28-7-7",
  maker: "Minolta",
  name: "MINOLTA MD 28mm f/2.8 (7 elements / 7 groups)",
  subtitle: "US 3,973,832 Example 2 — inferred 7-element / 7-group MD-family correlation",
  specs: ["7 ELEMENTS / 7 GROUPS", "f = 27.9955 mm (DESIGN)", "F/2.8", "2ω = 76° (PATENT)", "ALL SPHERICAL"],

  focalLengthMarketing: 28,
  focalLengthDesign: 27.99547564,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,973,832",
  patentAuthors: ["Toshinobu Ogura", "Akiyoshi Nakamura"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1976,
  elementCount: 7,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "IA",
      label: "Element IA",
      type: "Negative Meniscus",
      nd: 1.6214,
      vd: 61.3,
      indexReference: "d",
      fl: -62.55067102,
      glass: "N-SK16 class (coordinate-compatible spectral proxy; native d 1.6214/61.3; supplier/melt unproven)",
      apd: false,
      role: "Front negative meniscus of patent component A.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "IIA",
      label: "Element IIA",
      type: "Negative Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      fl: -49.20337496,
      glass: "N-SK16 class (coordinate-compatible spectral proxy; coordinate code 620603; supplier/melt unproven)",
      apd: false,
      role: "Second negative meniscus of patent component A.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "IB",
      label: "Element IB",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      fl: 25.59914013,
      glass: "S-LAM3 class (coordinate-compatible spectral proxy; coordinate code 717479/480; supplier/melt unproven)",
      apd: false,
      role: "Positive second component B.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "IC",
      label: "Element IC",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 56.88487987,
      glass: "H-LaF3B class (coordinate-compatible spectral proxy; coordinate code 744449; supplier/melt unproven)",
      apd: false,
      role: "Front positive lens of rear component C.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "IIC",
      label: "Element IIC",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.6,
      indexReference: "d",
      fl: -16.39023234,
      glass: "SF4 class (coordinate-compatible spectral proxy; coordinate code 755276; supplier/melt unproven)",
      apd: false,
      role: "Negative second lens of rear component C.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "IIIC",
      label: "Element IIIC",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      fl: 30.26292139,
      glass: "LAC10 class (coordinate-compatible spectral proxy; coordinate code 720503; supplier/melt unproven)",
      apd: false,
      role: "Positive third lens of rear component C.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "IVC",
      label: "Element IVC",
      type: "Biconvex Positive",
      nd: 1.6214,
      vd: 61.3,
      indexReference: "d",
      fl: 68.70824059,
      glass: "N-SK16 class (coordinate-compatible spectral proxy; native d 1.6214/61.3; supplier/melt unproven)",
      apd: false,
      role: "Rear positive lens of patent component C.",
    },
  ],

  /* ── Surface prescription ──
   * Radii and source axial spacings are scaled ×28 from Example 2.
   * Source labels are retained in end-of-line comments.
   */
  surfaces: [
    { label: "1", R: 26.5524, d: 2.24, nd: 1.6214, elemId: 1, sd: 13.0 }, // A1 / dA1
    { label: "2", R: 15.2656, d: 4.76, nd: 1.0, elemId: 0, sd: 11.0 }, // A2 / dA2
    { label: "3", R: 35.364, d: 1.82, nd: 1.6204, elemId: 2, sd: 10.0 }, // A3 / dA3
    { label: "4", R: 16.0608, d: 11.606, nd: 1.0, elemId: 0, sd: 9.0 }, // A4 / dB0
    { label: "5", R: 26.7176, d: 8.68, nd: 1.717, elemId: 3, sd: 8.5 }, // B1 / dB1
    { label: "6", R: -50.6828, d: 1.608348, nd: 1.0, elemId: 0, sd: 8.0 }, // B2 / first 41% of dC0
    { label: "STO", R: 1e15, d: 2.314452, nd: 1.0, elemId: 0, sd: 7.17457899 }, // inferred stop in dC0
    { label: "7", R: -145.9556, d: 2.1476, nd: 1.744, elemId: 4, sd: 7.6 }, // C1 / dC1
    { label: "8", R: -33.0148, d: 2.7552, nd: 1.0, elemId: 0, sd: 7.5 }, // C2 / dC2
    { label: "9", R: -17.1136, d: 4.1076, nd: 1.7552, elemId: 5, sd: 7.0 }, // C3 / dC3
    { label: "10", R: 49.35, d: 0.8512, nd: 1.0, elemId: 0, sd: 6.41 }, // C4 / dC4
    { label: "11", R: -60.4352, d: 2.38, nd: 1.72, elemId: 6, sd: 7.0 }, // C5 / dC5
    { label: "12", R: -16.2792, d: 0.0896, nd: 1.0, elemId: 0, sd: 7.2 }, // C6 / dC6
    { label: "13", R: 259.378, d: 1.96, nd: 1.6214, elemId: 7, sd: 7.4 }, // C7 / dC7
    { label: "14", R: -50.96, d: 36.72681608, nd: 1.0, elemId: 0, sd: 7.5 }, // C8 / computed paraxial BFD
  ],

  asph: {},

  /* No internal focus law is published for Example 2. */
  var: {},
  varLabels: [],

  groups: [
    { text: "A", fromSurface: "1", toSurface: "4" },
    { text: "B", fromSurface: "5", toSurface: "6" },
    { text: "C", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  closeFocusM: 0.3,
  focusDescription:
    "Focus travel is not modeled: the patent publishes only the design/infinity prescription. The production 0.3 m minimum focus is metadata; no close-focus optical spacing law is modeled.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* Required per-lens layout field; no geometry-hiding overrides are used. */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
