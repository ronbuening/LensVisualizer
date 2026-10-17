import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY FE 85mm F1.4 GM II (SEL85F14GM2)       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2025/239028 A1, Example 2 (Sony Group Corp).     ║
 * ║  Three-group inner-focus 85mm f/1.4 portrait prime for E-mount.   ║
 * ║  14 elements / 11 groups, 3 aspherical surfaces (2 XA elements).  ║
 * ║  Focus: inner focus — G2 (L5–L10) translates as a unit.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent Table 6 lists φi full diameters; non-stop `sd` stores    ║
 * ║    half that.                                                      ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent Table 6 surfaces 27–28 (cover glass GC, 2.50 mm,        ║
 * ║    nd 1.51680, νd 64.2) and the 1.00 mm air gap to IMG are        ║
 * ║    modeled in `rearPlates` (traced, not drawn). Surface 26 keeps  ║
 * ║    the patent's 12.86 mm gap to the cover glass.                  ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS LABELS:                                             ║
 * ║    Patent Table 6 gives nd/νd rather than vendor names. Labels    ║
 * ║    below use exact/near catalog matches where they round-trip,    ║
 * ║    and six-digit patent codes where no catalog entry exists.      ║
 * ║    L8 is S-PHM52 (618/634), not the 593/670 S-FPM2-class glass.  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: mechanical parts (cover glass: `rearPlates`)  ║
 * ║    ✗ DO NOT include: parent/donor designs (use final design only) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-fe-85-f14-gm-ii",
  maker: "Sony",
  name: "SONY FE 85mm f/1.4 GM II",
  subtitle: "WO 2025/239028 A1 Example 2 — Sony Group / Yamagishi, Tasaki, Kumisawa",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 11 GROUPS",
      "f ≈ 82.5 mm",
      "F/1.46",
      "2ω ≈ 29.4°",
      "3 ASPHERICAL SURFACES (2 XA ELEMENTS)",
      "2 ED ELEMENTS",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 85, design: 82.45 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "WO 2025/239028 A1",
    patentYear: 2025,
    authors: ["Masakazu Yamagishi", "Ryohei Tazaki", "Yuma Kumisawa"],
    assignees: ["Sony Group Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 195.9,
      glass: "PBH21 (OHARA; historical 923209)",
      apd: false,
      role: "High-index dense flint front collector; gentle curvatures reduce higher-order SA at f/1.4.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 157.1,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate crown; positive ΔPgF for secondary-spectrum correction.",
      role: "First ED element; air-spaced achromat partner with L1 for primary + secondary spectrum correction in G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.53775,
      vd: 74.7,
      focalLengthMm: 101.1,
      glass: "S-FPM3 (OHARA)",
      apd: "inferred",
      apdNote: "ED phosphate crown; complements S-FPL51 for chromatic correction in G1.",
      role: "Second ED element; strongest positive power in G1, low primary chromatic contribution.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.2,
      focalLengthMm: -45.9,
      glass: "S-NBH56 class (OHARA; patent nd=1.85451, νd=25.2)",
      apd: false,
      role: "Dense flint negative meniscus at image side of G1; achromatizes against L2–L3 and corrects coma during focusing (¶0049).",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -36.9,
      glass: "S-NBH5 (OHARA)",
      apd: false,
      role: "Negative front of cemented doublet 2A in focus group G2; concave-toward-object front surface facilitates coma correction during focus travel (¶0046).",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.85108,
      vd: 40.1,
      focalLengthMm: 64.0,
      glass: "S-LAH89 class (OHARA; patent nd=1.85108, νd=40.1)",
      apd: false,
      role: "Positive rear of doublet 2A; rear surface S12A carries aspherical correction (XA element 1) targeting SA and coma at f/1.4.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.3,
      focalLengthMm: 43.5,
      glass: "S-LAH98 (OHARA)",
      apd: false,
      role: "Strongest positive singlet in the system (component 2B); ultra-high-index S-LAH98 minimizes curvatures and focus-group mass for fast AF.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 100.2,
      glass: "S-PHM52 (OHARA)",
      apd: "inferred",
      apdNote:
        "S-PHM52 phosphate crown; catalog positive partial-dispersion anomaly contributes to secondary-spectrum correction within the moving G2.",
      role: "Positive crown front of cemented doublet 2F; high-Abbe phosphate crown provides low-dispersion positive power and contributes anomalous partial dispersion for chromatic stability during focus travel.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      focalLengthMm: -34.5,
      glass: "NBFD29 (HOYA, 770297)",
      apd: false,
      role: "Negative flint rear of doublet 2F; L8+L9 pair (f = −53.4 mm) provides local achromatization within the focus group, stabilizing chromatic correction across the focus range.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 49.8,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "Rear positive singlet of G2 (component 2R); works with L7 to deliver net positive power (f_G2 = +70.1 mm) before the fixed rear group.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85108,
      vd: 40.1,
      focalLengthMm: 91.6,
      glass: "S-LAH89 class (OHARA; patent nd=1.85108, νd=40.1)",
      apd: false,
      role: "Double-asphere XA element 2 (subgroup 3F); both surfaces carry independent aspherical corrections for high-order SA and coma control near the image end. Same glass as L6.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.98613,
      vd: 16.5,
      focalLengthMm: 121.7,
      glass: "986165 — ultra-high-index dense flint (patent nd=1.98613, νd=16.5)",
      apd: false,
      role: "Ultra-high-index dense flint (nd ≈ 1.986) in rear cemented doublet; provides maximum refraction per unit curvature for field-flattening and lateral color correction.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.4,
      focalLengthMm: -58.2,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "Negative flint partner in rear doublet; wide Δnd = 0.393 at junction enables strong lateral-color correction.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.86966,
      vd: 20.0,
      focalLengthMm: -139.9,
      glass: "870200 — dense flint (patent nd=1.86966, νd=20.0)",
      apd: false,
      role: "Final field flattener; high-dispersion dense flint meniscus (convex to image) for peripheral lateral color correction.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── G1 (fixed front group: L1–L4 + Stop) ──
    { label: "1", R: 56.98, d: 5.03, sd: 30.49, medium: 1 },
    { label: "2", R: 79.671, d: 0.8, sd: 29.67 },
    { label: "3", R: 58.403, d: 7.98, sd: 28.525, medium: 2 },
    { label: "4", R: 221.447, d: 0.66, sd: 27.43 },
    { label: "5", R: 35.668, d: 9.45, sd: 23.425, medium: 3 },
    { label: "6", R: 94.026, d: 0.52, sd: 21.68 },
    { label: "7", R: 111.08, d: 1.4, sd: 21.605, medium: 4 },
    { label: "8", R: 28.803, d: 10.63, sd: 18.8 },
    // Patent Table 6 prints a 36.49 mm effective diameter at the stop.
    { label: "STO", R: "flat" },

    // ── G2 (moving focus group: L5–L10) ──
    // Cemented doublet 2A: L5 + L6
    { label: "10", R: -54.134, d: 1.1, sd: 15.83, medium: 5 },
    { label: "11", R: 44.001, d: 4.17, sd: 16.035, medium: 6 },
    {
      label: "12A",
      R: 218.667,
      d: 0.2,
      sd: 16.01,
      asphere: {
        K: 0,
        A4: 2.87645e-6,
        A6: 1.79055e-9,
        A8: -7.16993e-12,
        A10: 2.33133e-14,
        A12: 3.45355e-17,
        A14: -3.79047e-19,
        A16: 6.33165e-22,
      },
    },
    // Component 2B: L7
    { label: "13", R: 47.112, d: 6.62, sd: 16.2, medium: 7 },
    { label: "14", R: -325.0, d: 0.2, sd: 15.75 },
    // Cemented doublet 2F: L8 + L9
    { label: "15", R: 275.212, d: 3.42, sd: 15.42, medium: 8 },
    { label: "16", R: -79.543, d: 1.1, sd: 15.085, medium: 9 },
    { label: "17", R: 40.184, d: 5.16, sd: 14.165 },
    // Component 2R: L10
    { label: "18", R: 88.519, d: 6.82, sd: 15.64, medium: 10 },
    { label: "19", R: -70.582, sd: 16.165 },

    // ── G3 (fixed rear group: L11–L14) ──
    // Subgroup 3F: L11 (double asphere)
    {
      label: "20A",
      R: 112.275,
      d: 3.81,
      sd: 17.29,
      medium: 11,
      asphere: {
        K: 0,
        A4: -3.31585e-6,
        A6: 1.68587e-11,
        A8: 1.86104e-11,
        A10: -1.39458e-13,
        A12: 4.4863e-16,
        A14: -8.188e-19,
        A16: 8.21856e-22,
      },
    },
    {
      label: "21A",
      R: -251.309,
      d: 0.2,
      sd: 17.29,
      asphere: {
        K: 0,
        A4: -2.88127e-6,
        A6: -3.98961e-9,
        A8: 5.20659e-11,
        A10: -2.658e-13,
        A12: 6.89388e-16,
        A14: -9.35107e-19,
        A16: 6.49146e-22,
      },
    },
    // Subgroup 3R: L12+L13 cemented + L14
    { label: "22", R: 410.0, d: 7.39, sd: 17.14, medium: 12 },
    { label: "23", R: -168.209, d: 1.1, sd: 16.905, medium: 13 },
    { label: "24", R: 43.461, d: 6.98, sd: 16.525 },
    { label: "25", R: -47.076, d: 1.1, sd: 16.615, medium: 14 },
    // Last surface: patent gap to the cover glass GC
    { label: "26", R: -77.61, d: 12.86, sd: 17.155 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.85,
    description:
      "Inner focus — G2 (L5–L10, 6 elements) translates 11.17 mm toward object. G1 and G3 fixed. XD linear motor drive.",
    // (moved from publishedStations) Patent read 2026-10-06: Close-focus gaps (d9 = 7.02, d19 = 14.60) are the patent's tabulated 846 mm shooting-
    // distance row for Example 2 (WO 2025/239028 A1, Table 8), unscaled.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (inner focus) ──
   *  G1 and G3 fixed; G2 translates as a unit toward object for close focus.
   *  d9 (STO → G2 front) narrows; d19 (G2 rear → G3 front) widens.
   *  Focus travel = 11.17 mm, exactly conserved (Δd9 + Δd19 = 0).
   */
  gaps: { STO: { label: "D9", values: [[18.19, 7.02]] }, "19": { label: "BF", values: [[3.43, 14.6]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.46, fStops: [1.46, 1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16] },

  /* ── Cover glass GC (patent Table 6 surfaces 27–28): traced, not drawn ── */
  rearPlates: [
    {
      label: "GC",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "WO 2025/239028 A1, Example 2 Table 6 surfaces 27–28",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (fixed)", fromSurface: "1", toSurface: "STO" },
    { text: "G2 (focus)", fromSurface: "10", toSurface: "19" },
    { text: "G3 (fixed)", fromSurface: "20A", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "10", toSurface: "12A" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
