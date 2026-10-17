import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJINON XF 23mm F1.4 R                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0368926 A1 Example 4 (Suzuki / FUJIFILM).   ║
 * ║  Fast wide-angle prime for APS-C (Fujifilm X-mount).              ║
 * ║  11 elements / 8 groups, 1 aspherical element (2 asph surfaces).  ║
 * ║  Focus: inner focus — L21 + cemented triplet translate;           ║
 * ║         G1 and L25 remain fixed.                                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined marginal + chief ray paraxial trace     ║
 * ║    at f/1.45 and ω = 30.85°, with ~8% mechanical clearance,       ║
 * ║    then constrained by edge thickness, cross-gap sag intrusion,    ║
 * ║    and slope-based rim limits.  Not patent-listed.                 ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL SURFACES:                                      ║
 * ║    The patent prescribes aspherics using BOTH even and odd-order   ║
 * ║    polynomial terms (A3 through A20).  This data file includes    ║
 * ║    ONLY the even-order terms (A4, A6, … A20) because the current  ║
 * ║    renderer sag equation supports only even powers.  The omitted  ║
 * ║    odd-order terms (A3, A5, A7, A9, A11, A13, A15, A17, A19)     ║
 * ║    contribute asymmetric sag corrections — primarily coma.  The   ║
 * ║    rendered surface shape will therefore differ from the patent    ║
 * ║    prescription at the rim.  The L21 SDs are trimmed to the stable ║
 * ║    even-order model aperture to avoid rim-slope and gap artifacts. ║
 * ║                                                                    ║
 * ║  NOTE ON CONIC CONSTANT:                                           ║
 * ║    The patent's sag formula uses the κ (kappa) convention:         ║
 * ║      Z = Ch² / {1 + √(1 − κ·C²·h²)} + Σ Am·hᵐ                  ║
 * ║    where κ = 1 + K (standard conic constant).  The patent's       ║
 * ║    tabulated "K" = 0.10 is actually κ = 0.10, giving standard     ║
 * ║    K = −0.90 (near-paraboloid).  This file uses the standard K.   ║
 * ║                                                                    ║
 * ║  NOTE ON BACK FOCAL DISTANCE:                                      ║
 * ║    Table 7 lists D20 = 10.00 mm to the parallel plate PP          ║
 * ║    (surfaces 21–22: 2.80 mm, nd 1.51680, νd 64.2), modeled in     ║
 * ║    `rearPlates` (traced, not drawn).  D22 is not printed; the     ║
 * ║    0.754 mm PP → image gap is derived from Table 11 BF = 12.60    ║
 * ║    (air-equivalent): 12.60 − 10.00 − 2.80/1.5168.                 ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: mechanical parts (cover glass: `rearPlates`) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "fujinon-xf-23mm-f14-r",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 23mm f/1.4 R",
  subtitle: "US 2014/0368926 A1 EXAMPLE 4 — FUJIFILM / SUZUKI",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: ["11 ELEMENTS / 8 GROUPS", "f ≈ 23.7 mm", "F/1.4", "2ω ≈ 61.7°", "1 ASPHERICAL ELEMENT (2 SURFACES)"],
    elementCount: 11,
    groupCount: 8,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 23, design: 23.74 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "US 2014/0368926 A1",
    patentYear: 2014,
    authors: ["Takashi Suzuki"],
    assignees: ["Fujifilm Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L111",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -136.4,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Front field-widening negative; low-index crown minimizes surface reflections",
    },
    {
      id: 2,
      name: "L112",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.61293,
      vd: 37.0,
      focalLengthMm: -52.8,
      glass: "S-TIM3 (OHARA)",
      apd: false,
      role: "Principal diverger of G11; steep concave rear widens field coverage",
    },
    {
      id: 3,
      name: "L121",
      label: "Element 3",
      type: "Plano-Convex Positive",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 35.3,
      glass: "TAFD40 (HOYA)",
      apd: "patent",
      apdNote: "θgF = 0.6133, ΔθgF = +0.013 above normal line",
      role: "Ultra-high-index positive; anomalous partial dispersion corrects secondary spectrum",
      dPgF: 0.013,
    },
    {
      id: 4,
      name: "L122",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 20.4,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Workhorse positive in cemented doublet; primary chromatic correction",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L123",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      focalLengthMm: -14.2,
      glass: "S-NPH1 (OHARA)",
      apd: false,
      role: "Flint corrector in doublet; Petzval field curvature control",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L124",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 50.9,
      glass: "S-LAL8 (OHARA)",
      apd: false,
      role: "Last pre-stop element; controls marginal ray height entering stop",
    },
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.80348,
      vd: 40.4,
      focalLengthMm: -66.6,
      glass: "S-LAH63Q (OHARA, PGM)",
      apd: false,
      role: "Sole aspherical corrector; glass-molded; primary spherical aberration correction",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 14.1,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "First positive in cemented triplet; longitudinal chromatic correction",
      cemented: "T1",
    },
    {
      id: 9,
      name: "L23",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      focalLengthMm: -15.7,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Central negative in triplet; Δνd = 9.7 vs. positives",
      cemented: "T1",
    },
    {
      id: 10,
      name: "L24",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 20.9,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Rear positive in triplet; symmetric P-N-P for lateral chromatic correction",
      cemented: "T1",
    },
    {
      id: 11,
      name: "L25",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.8081,
      vd: 22.8,
      focalLengthMm: -82.4,
      glass: "S-NPH1 (OHARA)",
      apd: false,
      role: "Fixed negative field-flattener; suppresses aberration variation during focus",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Patent uses κ convention: tabulated K = κ = 1 + K_standard.
   *  Values below are converted to standard K (κ − 1).
   *
   *  Patent also uses odd-order terms (A3, A5, … A19) which are omitted here
   *  because the renderer sag equation supports only even powers (A4, A6, …).
   *  The omitted odd terms affect primarily coma correction.
   */
  surfaces: [
    // ── G11: Negative wide-angle corrector ──
    { label: "1", R: 96.198, d: 1.42, sd: 21.0, medium: 1 }, // L111 front
    { label: "2", R: 39.135, d: 4.0, sd: 18.0 }, // L111 rear → air
    { label: "3", R: 181.44, d: 1.3, sd: 18.0, medium: 2 }, // L112 front
    { label: "4", R: 27.399, d: 11.93, sd: 17.0 }, // L112 rear → air (largest gap, G11/G12 boundary)

    // ── G12: Positive convergence group ──
    { label: "5", R: 36.435, d: 4.08, sd: 16.0, medium: 3 }, // L121 front (TAFD40, APD)
    { label: "6", R: -1126.3, d: 1.94, sd: 15.5 }, // L121 rear → air
    { label: "7", R: 22.894, d: 5.15, sd: 12.5, medium: 4 }, // L122 front (cemented D1)
    { label: "8", R: -76.171, d: 3.5, sd: 10.5, medium: 5 }, // L122/L123 junction → L123 glass
    { label: "9", R: 13.753, d: 0.25, sd: 9.0 }, // L123 rear → air
    { label: "10", R: 14.851, d: 2.06, sd: 7.9, medium: 6 }, // L124 front
    { label: "11", R: 23.69, d: 2.65, sd: 8.5 }, // L124 rear → air

    // ── Aperture stop ──
    { label: "STO", R: "flat" }, // stop position from patent (surface 12)

    // ── G2: Positive focusing group ──
    {
      label: "13A",
      R: -8.922,
      d: 1.27,
      sd: 4.5,
      medium: 7,
      asphere: {
        K: -0.9,
        A4: 3.1604165e-4,
        A6: -1.9524496e-4,
        A8: -5.8469037e-6,
        A10: 1.2818564e-6,
        A12: -8.3124906e-8,
        A14: 2.7277112e-9,
        A16: -4.1473274e-11,
        A18: 6.6823865e-14,
        A20: 2.5445767e-15,
      },
    }, // L21 front (aspherical)
    {
      label: "14A",
      R: -11.386,
      d: 0.15,
      sd: 3.1,
      asphere: {
        K: -0.9,
        A4: 9.1351152e-4,
        A6: 4.1157887e-4,
        A8: 2.714366e-5,
        A10: -1.9425352e-6,
        A12: 4.2682107e-9,
        A14: 1.1746916e-9,
        A16: -2.063555e-11,
        A18: 7.1694592e-14,
        A20: 2.8985477e-16,
      },
    }, // L21 rear (aspherical) → air
    { label: "15", R: 155.26, d: 5.81, sd: 8.0, medium: 8 }, // L22 front (cemented T1)
    { label: "16", R: -13.316, d: 1.21, sd: 9.5, medium: 9 }, // L22/L23 junction → L23 glass
    { label: "17", R: 59.524, d: 5.56, sd: 9.8, medium: 10 }, // L23/L24 junction → L24 glass
    { label: "18", R: -25.586, sd: 11.0 }, // L24 rear → air

    // ── G2 fixed rear element ──
    { label: "19", R: -91.051, d: 1.2, sd: 11.5, medium: 11 }, // L25 front
    { label: "20", R: 249.64, d: 10.0, sd: 11.8 }, // L25 rear → patent D20 gap to plate PP
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.28,
    description: "Inner focus: L21 + cemented triplet (L22–L24) translate toward object; G1 and L25 fixed.",
  },

  /* (moved from var) ── Variable air spacings (inner focus) ──
   *  Focus group: L21 + cemented triplet (L22/L23/L24) translate as a unit.
   *  G1 (all of S1–S11) and L25 (S19–S20) remain fixed.
   *  Close focus = 0.28 m (Fujifilm spec).  Patent provides only infinity data;
   *  close-focus gaps estimated via paraxial conjugate matching (δ ≈ 2.20 mm).
   */
  gaps: { STO: { label: "D(STO)", values: [[7.13, 4.93]] }, "18": { label: "BF(G2)", values: [[0.9, 3.1]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.45, fStops: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Parallel plate PP (patent Table 7 surfaces 21–22): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.8,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 0.754,
      source:
        "US 2014/0368926 A1, Example 4 Table 7 surfaces 21–22; gap to image derived, not printed (Table 11 BF 12.60 air-equivalent − 10.00 − 2.80/1.5168)",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G11", fromSurface: "1", toSurface: "4" },
    { text: "G12", fromSurface: "5", toSurface: "11" },
    { text: "G2 (FOCUS)", fromSurface: "13A", toSurface: "18" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "T1", fromSurface: "15", toSurface: "18" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
