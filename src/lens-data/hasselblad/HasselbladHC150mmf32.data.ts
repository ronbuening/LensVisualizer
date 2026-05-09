import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — HASSELBLAD HC 150mm f/3.2                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2002/0075570 A1, Embodiment 1 (Yamakawa).        ║
 * ║  Three-group (positive–negative–positive) inner-focus telephoto    ║
 * ║  for the 645 format. All-spherical. Manufactured by Fujinon for   ║
 * ║  the Hasselblad H system.                                         ║
 * ║  9 elements / 3 groups (8 air-separated groups), 0 asph surfaces. ║
 * ║  Focus: inner focus by translating G2 (cemented doublet L5+L6).   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription normalized to f = 1 at the e-line           ║
 * ║    (λ = 546.1 nm). All R, d values scaled ×150 to the production  ║
 * ║    focal length of 150 mm. Glass indices converted from patent     ║
 * ║    Ne (e-line) to nd (d-line, 587.6 nm) using catalog values for  ║
 * ║    identified glasses and dispersion estimates for unmatched ones. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined marginal + chief ray traces at 60%      ║
 * ║    off-axis field with ~8% mechanical clearance. Front group SDs   ║
 * ║    constrained by the 77 mm production filter thread.              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hasselblad-hc-150-f32",
  maker: "Hasselblad",
  name: "HASSELBLAD HC 150mm f/3.2",
  subtitle: "US 2002/0075570 A1 Example 1 — Yamakawa / Fujinon",
  specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 150 mm", "F/3.2", "2ω ≈ 26.2°", "ALL-SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 150,
  focalLengthDesign: 149.9,
  apertureMarketing: 3.2,
  lensMounts: ["hasselblad-h"],
  imageFormat: "645",
  patentYear: 2002,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 91.5,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Front collector; lanthanum crown providing the primary converging power of G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 132.6,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      role: "First ED fluorophosphate crown in G1; primary achromatizing partner to L3.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.2,
      fl: -58.0,
      glass: "Dense flint (689/312 code, uncertain)",
      apd: false,
      role: "Sole negative element in G1; achromatizing flint partner to L2 and L4.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 161.7,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      role: "Second ED crown in G1; bookends L3 with L2 for balanced lateral color correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.67003,
      vd: 57.2,
      fl: -36.5,
      glass: "Lanthanum crown (670/572 code, uncertain; cf. H-LAK6A, CDGM)",
      apd: false,
      cemented: "G2",
      role: "Negative element of the cemented G2 focusing doublet; nearly flat front minimizes positional sensitivity.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: 67.5,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      cemented: "G2",
      role: "Positive partner in G2 cemented doublet; high-index lanthanum crown achromatizes the focusing group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.56093,
      vd: 45.3,
      fl: 83.4,
      glass: "Barium light flint (561/453 code, uncertain)",
      apd: false,
      role: "Front element of G3; reconverges the diverging cone from G2 toward the image.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.7,
      fl: -51.1,
      glass: "S-NBH8 (OHARA) — KZFS-class, ΔPgF ≈ −0.002",
      apd: false,
      nC: 1.71436,
      nF: 1.73511,
      ng: 1.74721,
      role: "KZFS-class anomalous-dispersion corrector in G3; reduces secondary spectrum for the 645 image circle.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 61.0,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Final element; strong positive meniscus convex to image for last convergence and mild field flattening.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: positive front group (L1–L4), fixed ──
    { label: "1", R: 63.514, d: 10.66, nd: 1.7725, elemId: 1, sd: 34.0 }, // L1 front
    { label: "2", R: 578.946, d: 0.24, nd: 1.0, elemId: 0, sd: 31.5 }, // L1 rear → air
    { label: "3", R: 45.837, d: 8.1, nd: 1.497, elemId: 2, sd: 28.0 }, // L2 front
    { label: "4", R: 141.823, d: 1.46, nd: 1.0, elemId: 0, sd: 24.5 }, // L2 rear → air
    { label: "5", R: 322.561, d: 3.05, nd: 1.68893, elemId: 3, sd: 22.0 }, // L3 front
    { label: "6", R: 35.397, d: 3.59, nd: 1.0, elemId: 0, sd: 20.5 }, // L3 rear → air
    { label: "7", R: 63.25, d: 5.0, nd: 1.497, elemId: 4, sd: 20.0 }, // L4 front
    { label: "8", R: 289.2, d: 4.99, nd: 1.0, elemId: 0, sd: 19.5 }, // L4 rear → air (var: G1→G2)

    // ── G2: negative focusing group (L5+L6 cemented), translates ──
    { label: "9", R: -1185.267, d: 1.8, nd: 1.67003, elemId: 5, sd: 18.0 }, // L5 front
    { label: "10", R: 25.005, d: 4.0, nd: 1.834, elemId: 6, sd: 17.0 }, // L5/L6 junction
    { label: "11", R: 41.733, d: 18.971, nd: 1.0, elemId: 0, sd: 16.0 }, // L6 rear → air (var: G2→STO)

    // ── Aperture stop (fixed, between G2 and G3) ──
    // STO position inferred from patent FIG. 1; placed at ~50% through the D11 gap.
    { label: "STO", R: 1e15, d: 18.971, nd: 1.0, elemId: 0, sd: 13.5 },

    // ── G3: positive relay group (L7–L9), fixed ──
    { label: "12", R: 121.041, d: 6.0, nd: 1.56093, elemId: 7, sd: 15.5 }, // L7 front
    { label: "13", R: -74.826, d: 5.57, nd: 1.0, elemId: 0, sd: 15.5 }, // L7 rear → air
    { label: "14", R: -33.056, d: 2.0, nd: 1.72047, elemId: 8, sd: 15.0 }, // L8 front
    { label: "15", R: -331.88, d: 0.48, nd: 1.0, elemId: 0, sd: 15.2 }, // L8 rear → air
    { label: "16", R: -198.496, d: 9.521, nd: 1.7725, elemId: 9, sd: 15.5 }, // L9 front
    { label: "17", R: -38.871, d: 76.842, nd: 1.0, elemId: 0, sd: 17.0 }, // L9 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (inner focus) ──
   *  G2 (L5+L6) translates along the optical axis.
   *  D8 (G1 rear → G2 front) increases; D11 (G2 rear → STO) decreases.
   *  The stop and G3 are fixed; gap from STO to L7 does not change.
   *  Close focus at production MFD ≈ 1.3 m (image plane to subject).
   */
  var: {
    "8": [4.99, 15.713],
    "11": [18.971, 8.248],
  },

  varLabels: [
    ["8", "D8 (G1→G2)"],
    ["11", "D11 (G2→STO)"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (−) Focus", fromSurface: "9", toSurface: "11" },
    { text: "G3 (+)", fromSurface: "12", toSurface: "17" },
  ],

  doublets: [{ text: "G2", fromSurface: "9", toSurface: "11" }],

  /* ── Focus configuration ── */
  closeFocusM: 1.3,
  focusDescription:
    "Inner focus — G2 (cemented doublet L5+L6) translates along the optical axis; G1, stop, and G3 are fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 3.2,
  fstopSeries: [3.2, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 45],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
