import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER COLOR-SKOPAR 105mm f/3.5                       ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,573,511 A, Example 1 (Albrecht Wilhelm Tronnier).     ║
 * ║  Production correlation: Voigtländer Color-Skopar 105mm f/3.5 for       ║
 * ║  fixed-lens 6×9 cameras. The patent prescription is normalized to       ║
 * ║  100mm EFL; every dimensional value is uniformly scaled ×1.05.          ║
 * ║  Four elements / three groups, all spherical; L3-L4 is cemented.        ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION.                               ║
 * ║  The patent publishes one infinity prescription and no finite-focus      ║
 * ║  spacing table. The production close-focus figure is metadata only;      ║
 * ║  no focus variable gaps are invented.                                    ║
 * ║                                                                            ║
 * ║  STOP MODEL: The patent publishes only the combined R4-to-R5 gap.        ║
 * ║  The split at STO is inferred from Fig. 1: 5.32625mm before the stop     ║
 * ║  and 2.53321mm after it. Their sum preserves the scaled 7.85946mm gap.   ║
 * ║  The stop radius is derived from the design f-number, f/3.5.             ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent supplies none. Values are inferred from      ║
 * ║  the f/3.5 marginal bundle, the viewer default field bundle, and      ║
 * ║  full-format chief/marginal checks. They preserve positive edge       ║
 * ║  thickness, acceptable rim slopes, cross-gap clearance, and zero      ║
 * ║  predicted render trim in the modeled infinity state. A 600 dpi Figure 1 ║
 * ║  audit increased the plane rear rim and the two smaller members to match ║
 * ║  the drawing's stepped front/center/rear proportions.                    ║
 * ║                                                                            ║
 * ║  GLASS: The patent gives d-line nd and C-F mean dispersion for every    ║
 * ║  element. νd is printed for L1-L3 and derived for L4. No vendor/type     ║
 * ║  name or per-element nC, nF, ng, or dPgF is published, so the glass      ║
 * ║  strings retain coordinate classes/codes rather than a catalog melt.     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "voigtlander-color-skopar-105mm-f35",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 105mm f/3.5 (Voigtländer Bessa II)",
  subtitle: "US 2,573,511 A Example 1 — uniformly scaled ×1.05 production correlation",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "6x9",
    specs: ["4 ELEMENTS / 3 GROUPS", "f = 104.999mm", "F/3.5", "2ω ≈ 51.35°", "ALL-SPHERICAL"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { marketing: 105, design: 104.9990862687 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "US 2,573,511 A",
    patentYear: 1951,
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Voigtländer & Sohn AG"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.62166,
      vd: 60.3,
      focalLengthMm: 57.3812855902,
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
      role: "Front positive collector; its plane rear face bounds the first negative air lens.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.57911,
      vd: 41.7,
      focalLengthMm: -36.0790950817,
      glass: "J-LF5 (Hikari catalog equivalent; production supplier unspecified)",
      role: "Strong negative middle element immediately before the aperture stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.57911,
      vd: 41.7,
      focalLengthMm: -50.4444632325,
      glass: "J-LF5 (Hikari catalog equivalent; production supplier unspecified)",
      role: "Negative front component of the cemented rear doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6577,
      vd: 50.7876447876,
      focalLengthMm: 28.7236376695,
      glass: "J-SSK5 (Hikari catalog equivalent; production supplier unspecified)",
      role: "High-power positive rear component; the L3-L4 cemented group is net positive.",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ──
   * Uniform scale factor: 1.05. Flat patent R2 is represented by R = 1e15.
   * The R6 cemented junction carries downstream element L4's elemId and index.
   */
  surfaces: [
    { label: "1", R: 35.67165, d: 6.49719, sd: 18.5, medium: 1 },
    { label: "2", R: "flat", d: 7.33551, sd: 18.0 },
    { label: "3", R: -65.80602, d: 2.619855, sd: 14.0, medium: 2 },
    { label: "4", R: 31.060785, d: 5.32625, sd: 14.0 },
    // STO position inferred from Fig. 1; the combined surface-4-to-surface-5 gap remains exactly 7.85946mm.
    { label: "STO", R: "flat", d: 2.53321 },
    { label: "5", R: 1706.87475, d: 2.305485, sd: 15.5, medium: 3 },
    { label: "6", R: 28.707105, d: 8.5988595, sd: 15.5, medium: 4 },
    { label: "7", R: -48.68493, d: 87.52275, sd: 15.5 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Production camera focusing is documented to approximately 1.0m, but US 2,573,511 A publishes only the infinity prescription; no focus gaps are modeled (NO_INTERNAL_RECONSTRUCTION).",
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
