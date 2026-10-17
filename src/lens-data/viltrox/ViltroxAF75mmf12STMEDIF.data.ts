import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VILTROX AF 75mm f/1.2 PRO                                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: CN 114755806 A, Example 1 (深圳市雷影光电科技有限公司 / 刘瑞军).   ║
 * ║ Production correlation: Viltrox AF 75mm F1.2 Pro, APS-C, 16/11.           ║
 * ║                                                                            ║
 * ║ PRESCRIPTION STATUS: CONSTRAINED_SOURCE_ERROR_RECONSTRUCTION               ║
 * ║ FOCUS STATUS: CONSTRAINED_RECONSTRUCTION                                   ║
 * ║                                                                            ║
 * ║ Source correction before normalization:                                    ║
 * ║   raw surface 10 R = +26.573 mm -> reconstructed +36.573 mm.              ║
 * ║   This is the single source-radius correction applied to the model.         ║
 * ║                                                                            ║
 * ║ Uniform normalization:                                                     ║
 * ║   s = 0.9922588071791335, applied to all active radii and spacings so     ║
 * ║   the corrected printed-index model reproduces the patent infinity EFL    ║
 * ║   of 75.50 mm. Indices and Abbe numbers are unchanged. No aspheres exist. ║
 * ║                                                                            ║
 * ║ Rear-plane handling:                                                       ║
 * ║   Patent GL and inactive surface 31 are omitted. Patent prose/Fig. 1 call ║
 * ║   GL plane-parallel, while Table 1 gives R29 = +180.619 mm. The final     ║
 * ║   image plane is code-solved at 7.420455809 mm behind scaled surface 28.  ║
 * ║                                                                            ║
 * ║ Focus reconstruction:                                                      ║
 * ║   The patent publishes L9-only internal focusing with D1 + D2 conserved.  ║
 * ║   The patent 0.7 m close row is inconsistent with the corrected model.    ║
 * ║   The close state is therefore code-solved to the production 0.88 m MFD: ║
 * ║   D1 = 13.695167378 mm, D2 = 1.913063659 mm, L9 travel = 10.877152366 mm.║
 * ║                                                                            ║
 * ║ Aperture: modeled/design F/1.27 from the rendered Example-1 aberration     ║
 * ║ plots; marketed aperture remains F/1.2. The physical stop diameter is not  ║
 * ║ printed. The stop radius is derived from the design f-number using an      ║
 * ║ exact marginal ray.                                                        ║
 * ║                                                                            ║
 * ║ Semi-diameters: inferred from the optical rims of patent Figure 1.      ║
 * ║ S20/S21 are capped at 11.0 mm by the table-derived air-gap geometry.     ║
 * ║ Finite-aperture ray clipping is retained, not removed by enlarging rims. ║
 * ║ Figure 1 conflicts with the table in the rear group, especially L16:    ║
 * ║ its printed 0.51 mm center thickness yields a thin meniscus. No SD can   ║
 * ║ reproduce the drawing's thick, nearly plano-convex L16 from those rows. ║
 * ║                                                                            ║
 * ║ Glass discipline: the patent publishes only rounded two-decimal nd/vd.    ║
 * ║ Glass strings use compatible spectral proxies or Unmatched coordinate       ║
 * ║ classes. nC/nF/ng/dPgF are intentionally NOT invented; no vendor glass    ║
 * ║ identity or anomalous-partial-dispersion claim is made.                    ║
 * ║                                                                            ║
 * ║ Surviving patent/model contradictions remain disclosed: condition (1),    ║
 * ║ condition (5), the published close EFL/distance, L12/L13/L15 sign prose,  ║
 * ║ and the GL shape. No additional fitting is applied to force agreement.     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

/* SD review: CN114755806A, PDF p. 12, Fig. 1, 600 dpi, 2026-09-10 UTC.
 * Inferred rims follow the drawing where compatible with Table 1 geometry.
 * Table/figure conflicts remain explicit; L16 is a real element, distinct from omitted GL.
 * Catalog names denote compatible spectral proxies; patent nd/vd and supplier uncertainty are retained.
 */
const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "viltrox-af-75mm-f12-pro",
  maker: "Viltrox",
  name: "VILTROX AF 75mm f/1.2 PRO",
  subtitle: "CN 114755806 A Example 1 — constrained source-error reconstruction",
  // Withhold from the public catalog until the Table 1 / Figure 1 conflicts are resolved.
  visible: false,

  catalog: {
    lensMounts: ["sony-fe", "nikon-z", "fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "16 ELEMENTS / 11 GROUPS",
      "f = 75.50 mm DESIGN / 75 mm MARKETED",
      "F/1.27 DESIGN / F/1.2 MARKETED",
      "2ω = 21.40° PATENT / 21.35° MARKETED",
      "L9 INNER FOCUS",
      "ALL SPHERICAL",
      "RECONSTRUCTED PRESCRIPTION",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: 75, design: 75.5 },
    fNumber: { marketing: 1.2, design: 1.27 },
  },

  source: {
    patentNumber: "CN 114755806 A",
    patentYear: 2022,
    authors: ["Liu Ruijun"],
    assignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.92,
      vd: 20.88,
      focalLengthMm: 90.967019,
      glass: "N-SF66 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Front high-index positive collector; manufacturer-correlated high-index position.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.59,
      vd: 68.62,
      focalLengthMm: 98.516654,
      glass: "FCD505 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Positive member of the L2+L3 cemented pair; manufacturer-correlated ED-colored position.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 32.17,
      focalLengthMm: -74.121684,
      glass: "H-ZF2 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Negative cemented partner to L2.",
      diagramLabel: "L3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59,
      vd: 68.62,
      focalLengthMm: 43.514390,
      glass: "FCD505 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Strong positive member of the L4+L5 cemented pair; manufacturer-correlated ED-colored position.",
      diagramLabel: "L4",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.85,
      vd: 23.78,
      focalLengthMm: -44.763587,
      glass: "Unmatched (847238 class; patent nd=1.85, νd=23.78)",
      apd: false,
      role: "Dense negative cemented partner to L4.",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Weak Positive Meniscus",
      nd: 2,
      vd: 29.13,
      focalLengthMm: 1802.789171,
      glass: "TAFD55 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "High-index weak positive meniscus; source surface 10 corrected before normalization.",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7,
      vd: 30.05,
      focalLengthMm: -57.491450,
      glass: "E-FD15 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Negative pre-stop correction element.",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Plano-Convex Positive",
      nd: 1.83,
      vd: 42.72,
      focalLengthMm: 55.284357,
      glass: "Unmatched (835427 class; patent nd=1.83, νd=42.72)",
      apd: false,
      role: "Positive rear member of fixed front group G1 immediately before the stop.",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.52,
      vd: 64.2,
      focalLengthMm: -57.103339,
      glass: "Unmatched (517642 class; patent nd=1.52, νd=64.20)",
      apd: false,
      role: "Sole moving internal-focus element; translates imageward as focus approaches 0.88 m.",
      diagramLabel: "L9",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59,
      vd: 68.62,
      focalLengthMm: 39.934554,
      glass: "FCD505 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Positive member of the first rear cemented pair; manufacturer-correlated ED-colored position.",
      diagramLabel: "L10",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.85,
      vd: 23.78,
      focalLengthMm: -27.008977,
      glass: "Unmatched (847238 class; patent nd=1.85, νd=23.78)",
      apd: false,
      role: "Negative cemented partner to L10.",
      diagramLabel: "L11",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Plano-Concave Negative",
      nd: 1.83,
      vd: 42.72,
      focalLengthMm: -50.221446,
      glass: "Unmatched (835427 class; patent nd=1.83, νd=42.72)",
      apd: false,
      role: "Front member of D4; standalone sign is negative despite the patent's positive-element prose.",
      diagramLabel: "L12",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 32.17,
      focalLengthMm: 36.199428,
      glass: "H-ZF2 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Rear member of D4; standalone sign is positive despite the patent's negative-element prose.",
      diagramLabel: "L13",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 2,
      vd: 29.13,
      focalLengthMm: 138.399992,
      glass: "TAFD55 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "High-index positive member of D5; manufacturer-correlated high-index position.",
      diagramLabel: "L14",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.62,
      vd: 36.3,
      focalLengthMm: 37.372444,
      glass: "E-F2 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Rear member of D5; standalone sign is positive despite the patent's negative-element prose.",
      diagramLabel: "L15",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.95,
      vd: 17.98,
      focalLengthMm: 347.725867,
      glass: "Unmatched (946180 class; patent nd=1.95, νd=17.98)",
      apd: false,
      role: "Final high-index element. Table 1 gives a 0.51 mm-thick meniscus; Figure 1 draws a thicker element with a nearly flat rear face. The model retains the table geometry.",
      diagramLabel: "L16",
    },
  ],

  /* ── Surface prescription: final normalized infinity state ── */
  surfaces: [
    { label: "1", R: 75.060409728, d: 7.243489292, sd: 29.2, medium: 1 },
    { label: "2", R: 694.302340301, d: 0.297677642, sd: 29.2 },
    { label: "3", R: 53.667309845, d: 7.372482937, sd: 26.6, medium: 2 },
    { label: "4", R: 664.134695786, d: 1.488388211, sd: 26.6, medium: 3 },
    { label: "5", R: 46.164841004, d: 2.232582316, sd: 26.6 },
    { label: "6", R: 35.329374830, d: 11.480434399, sd: 22.3, medium: 4 },
    { label: "7", R: -82.608522474, d: 1.190710569, sd: 22.3, medium: 5 },
    { label: "8", R: 71.006040242, d: 0.148838821, sd: 22.3 },
    { label: "9", R: 38.054117514, d: 5.060519917, sd: 19.7, medium: 6 },
    { label: "10", R: 36.289881355, d: 2.867627953, sd: 19.7 },
    { label: "11", R: 66.684753136, d: 1.289936449, sd: 18.1, medium: 7 },
    { label: "12", R: 24.897757990, d: 5.129978033, sd: 18.1 },
    { label: "13", R: 45.886016279, d: 5.179590973, sd: 16.2, medium: 8 },
    { label: "14", R: "flat", d: 1.984517614, sd: 16.2 },
    { label: "STO", R: "flat" },
    { label: "16", R: 604.304466489, d: 0.793807046, sd: 13.8, medium: 9 },
    { label: "17", R: 28.290290851, sd: 13.8 },
    { label: "18", R: 52.833812447, d: 4.693384158, sd: 11.4, medium: 10 },
    { label: "19", R: -41.124166264, d: 0.992258807, sd: 11.4, medium: 11 },
    { label: "20", R: 52.546057393, d: 1.319704214, sd: 11 },
    { label: "21", R: "flat", d: 0.148838821, sd: 11, medium: 12 },
    { label: "22", R: 41.683800231, d: 6.052778724, sd: 12.7, medium: 13 },
    { label: "23", R: -54.622855076, d: 0.992258807, sd: 12.7 },
    { label: "24", R: 35.926714632, d: 0.922800691, sd: 13.3, medium: 14 },
    { label: "25", R: 47.899309399, d: 5.715410729, sd: 13.3, medium: 15 },
    { label: "26", R: -42.832835930, d: 0.992258807, sd: 13.3 },
    { label: "27", R: 33.792365937, d: 0.506051992, sd: 13.2, medium: 16 },
    { label: "28", R: 37.368466678, d: 7.420455809, sd: 13.2 },
  ],

  focus: {
    closeFocusM: 0.88,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent-published L9-only internal focus retained with D1+D2 conserved; " +
      "close endpoint code-solved to the production 0.88 m MFD (D1 13.695167378 mm, D2 1.913063659 mm). " +
      "The patent 0.7 m / 77.29 mm row is not reproduced by the corrected normalized prescription.",
  },

  /* (moved from var) ── L9-only focus reconstruction; D1 + D2 is conserved ── */
  gaps: {
    STO: { label: "D1", values: [[2.818015012, 13.695167378]] },
    "17": { label: "D2", values: [[12.790216025, 1.913063659]] },
  },

  aperture: { nominalFNumber: 1.27, fStops: [1.27, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 11 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "14" },
    { text: "FOCUS L9", fromSurface: "16", toSurface: "17" },
    { text: "G2", fromSurface: "18", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "24", toSurface: "26" },
  ],

  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
