import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,622,227 Example I, normalized dimensions scaled by 24.
 * Exact source signs and dimensions checked against PDF p4; Fig.1 on p2.
 * Nikon's Tale14 verifies CRC narrowing at L6/L7, but not travel magnitudes.
 * Rims, midpoint stop placement and 0.7mm CRC contraction are estimates.
 * The finite image gap is solved at a 0.30m object-to-image distance.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-24f28",
  maker: "Nikon",
  name: "NIKON NIKKOR-N AUTO 24mm f/2.8",
  subtitle: "US 3,622,227 Example I — Nippon Kogaku / Yoshiyuki Shimizu",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 24.0 mm", "F/2.8", "2ω ≈ 84°", "ALL SPHERICAL"],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: 24, design: 24.0 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: { patentNumber: "US 3,622,227", patentYear: 1971, authors: ["Yoshiyuki Shimizu"], assignees: [] },

  /* ── Elements ──
   *  9 elements, front to rear. Five glass types.
   *  L4+L5 cemented (doublet D1), L7+L8 cemented (doublet D2).
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: -54.0,
      glass: "N-SK16 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Front negative meniscus (convex→obj). Establishes retrofocus divergence; patent cites L1's negative crown power as primary chromatic correction contributor.",
    },

    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 72.5,
      glass: "N-SK16 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Symmetric biconvex (r₃ = −r₄). Weak positive power partially offsets front group's negative power; symmetric shape minimizes coma contribution.",
    },

    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: -28.0,
      glass: "N-SK16 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Strongly negative meniscus (convex→obj). Tightest radius in front group (r₆). Condition (2) governs r₆ for internal coma correction of oblique rays.",
    },

    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      focalLengthMm: 17.3,
      glass: "F2 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Strongest positive element. Flint glass in positive role (reversed from standard achromat). Cemented with L5; The L4/L5 cemented interface has a reference-index step of −0.10181; a comparison with nonadjacent SK16 does not describe that interface.",
      cemented: "D1",
    },

    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 59.0,
      focalLengthMm: -76.7,
      glass: "E-C3 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Completes first cemented doublet. Large Δn at junction (0.102) provides dispersive correction. Low-index crown in negative role.",
      cemented: "D1",
    },

    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1, // Inferred same medium as L7: Example I omits the L6 Abbe entry.
      focalLengthMm: -29.9,
      glass: "S-TIH23 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Central corrector of reversed Tessar. Condition (1) centers it between positive subgroups; Condition (3) governs bending (|r₁₀|>|r₁₁|) for internal coma. Near stop → minimal astigmatism contribution.",
    },

    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: -29.1,
      glass: "S-TIH23 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Negative half of second cemented doublet. Condition (4) governs junction r₁₃: (n₈−n₇)/r₁₃ < 0 for Petzval and coma correction.",
      cemented: "D2",
    },

    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 18.8,
      glass: "N-SK16 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Positive half of second cemented doublet. Large Δn at junction (0.164). D2 overall is meniscus concave toward object.",
      cemented: "D2",
    },

    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      focalLengthMm: 50.4,
      glass: "LAF2 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Final element. Asymmetric biconvex — weak front, strong rear. Lanthanum flint provides high power with moderate dispersion. Field-flattening and final convergence to f=24mm.",
    },
  ],

  /* ── Surface prescription ──
   *  Scaled ×24.0 from patent (f=1.0 → f≈24mm).
   *  Stop inserted in d₉ gap at midpoint (inferred from FIG. 1).
   *  Positive signs for r5, r6 and r13 are directly visible in the source table.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  // All-spherical design
  surfaces: [
    // ── Front group (negative): L1, L2, L3 ──
    { label: "1", R: 60, d: 2.7, sd: 23.5, medium: 1 }, // L1 front
    { label: "2", R: 21.4992, d: 6.3, sd: 19.0 }, // L1 rear → air
    { label: "3", R: 90, d: 5.5008, sd: 15.9, medium: 2 }, // L2 front
    { label: "4", R: -90, d: 0.1008, sd: 15.9 }, // L2 rear → air
    { label: "5", R: 30, d: 2.7, sd: 12.0, medium: 3 }, // L3 front  [sign corrected: +]
    { label: "6", R: 10.9992, d: 9.7992, sd: 9.8 }, // L3 rear → air  [sign corrected: +]

    // ── Rear group (positive): D1(L4+L5), L6, D2(L7+L8), L9 ──
    { label: "7", R: 25.2504, d: 4.0008, sd: 8.5, medium: 4 }, // L4 front (D1)
    { label: "8", R: -18.5808, d: 3, sd: 8.0, medium: 5 }, // L4→L5 junction (D1)
    { label: "9", R: -34.9008, d: 1.2504, sd: 7.5 }, // L5 rear → air

    // ── Aperture stop — STO position inferred from FIG. 1, midpoint of d₉ ──
    { label: "STO", R: "flat", d: 1.2504 },

    { label: "10", R: -85.0008, d: 5.2992, sd: 7.5, medium: 6 }, // L6 front
    { label: "11", R: 32.4, sd: 8.0 }, // L6 rear → air  [CRC variable gap]
    { label: "12", R: -120, d: 1.0008, sd: 8.5, medium: 7 }, // L7 front (D2)
    { label: "13", R: 28.1496, d: 5.4, sd: 10.0, medium: 8 }, // L7→L8 junction (D2)  [sign corrected: +]
    { label: "14", R: -19.9992, d: 0.1008, sd: 10.0 }, // L8 rear → air
    { label: "15", R: 192, d: 3.4992, sd: 11.5, medium: 9 }, // L9 front
    { label: "16", R: -46.6152, sd: 12.0 }, // L9 rear → BFD
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    description:
      "CRC: L6–L7 separation narrows, as Nikon documents. The 0.70 mm contraction is estimated; rear travel 2.92 mm is solved for a 0.30 m object-to-image endpoint. Intermediate distances are approximate.",
  },

  /* (moved from var) ── Variable air spacings (CRC focus) ──
   *  CRC system: d₁₁ (L6–L7 gap) narrows at close focus,
   *  BFD (d₁₆) increases correspondingly.
   *  Close-focus values are ESTIMATES — patent provides infinity only.
   *  The rear image gap solves the complete finite conjugate at 0.30m; CRC contraction is assumed.
   */
  gaps: {
    "11": { label: "CRC (estimated)", values: [[2.3496, 1.6496]] }, // CRC gap: narrows at close focus (estimated)
    "16": { label: "BF (modeled)", values: [[37.4328, 40.356735014059566]] }, // BFD: increases at close focus (estimated)
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (L1–L6)", fromSurface: "1", toSurface: "11" },
    { text: "REAR (L7–L9)", fromSurface: "12", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" }, // L4+L5 cemented
    { text: "D2", fromSurface: "12", toSurface: "14" }, // L7+L8 cemented
  ],

  /* ── Layout tuning ──
   *  Retrofocus lenses have large front elements and long BFD.
   *  scFill and yScFill tuned for this aspect ratio.
   */
  layout: { scFill: 0.55, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
