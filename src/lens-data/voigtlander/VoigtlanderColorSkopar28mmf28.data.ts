import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — COLOR-SKOPAR 28mm f/2.8 Aspherical              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2024-107941 A, Example 3 (Cosina).               ║
 * ║  Production correlation: Voigtländer COLOR-SKOPAR 28mm f/2.8     ║
 * ║  Aspherical optical family in VM and L39 mounts.                  ║
 * ║  8 elements / 5 groups, 2 aspherical surfaces.                    ║
 * ║                                                                    ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION:                        ║
 * ║    The patent publishes only the infinity prescription and gives   ║
 * ║    no focus-spacing table or group-motion law. The 0.5 m and       ║
 * ║    0.7 m production endpoints are retained as product metadata,    ║
 * ║    but no unverified internal or unit-focus motion is authored.     ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scaling is applied. The marketed 28 mm designation and the   ║
 * ║    computed 28.900239 mm design EFL remain separate.               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent provides no clear-aperture table. Surface SDs are     ║
 * ║    inferred from the calibrated F/2.85 stop, exact marginal/chief   ║
 * ║    ray envelopes through 60% of the verified full field, Cosina's  ║
 * ║    patent Fig. 6 proportions, and geometry limits. The front L1/J1 ║
 * ║    apertures use the figure's 1.31:1 rim-height ratio, with equal   ║
 * ║    6.2 mm semi-diameters across all three J1 surfaces.              ║
 * ║    They are modeling values, not patent-transcribed apertures.      ║
 * ║                                                                    ║
 * ║  The patent omits sensor cover glass, filters, and dust plates;     ║
 * ║  none are inserted. The final 19.545 mm air spacing is preserved.  ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS CATALOG MATCHES:                                    ║
 * ║    Names and line data are catalog matches to the stored nd/νd,    ║
 * ║    not confirmation of the melts used in production.               ║
 * ║                                                                    ║
 * ║  NOTE ON PARTIAL DISPERSION:                                       ║
 * ║    The patent prints no PgF and defines no ΔPgF line. `dPgF` is    ║
 * ║    PgF of the stored nC/nF/ng minus the engine's normal line       ║
 * ║    (0.6438 − 0.001682·νd), not HOYA's catalog ΔPg,F, which HOYA    ║
 * ║    states against its own C7–F2 line (≈ 0.6484 − 0.0018·νd).       ║
 * ║    L5/L6 keep −0.0093, within 0.0003 of the engine-line value.     ║
 * ║    The trace uses nC/nF/ng, so `dPgF` is an annotation here.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "color-skopar-28f28",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 28mm f/2.8 Aspherical",
  subtitle: "JP 2024-107941 A EXAMPLE 3 — COSINA",

  catalog: {
    lensMounts: ["leica-m", "leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 5 GROUPS", "f ≈ 28.900 mm", "F/2.85", "2ω ≈ 74.8°", "2 ASPHERICAL SURFACES"],
    elementCount: 8,
    groupCount: 5,
    focalLengthMm: { marketing: 28, design: 28.900239 },
    fNumber: { marketing: 2.8, design: 2.85 },
  },

  source: {
    patentNumber: "JP 2024-107941 A",
    patentYear: 2024,
    authors: ["Yoshihisa Yomogida", "Yuki Shibata"],
    assignees: ["Cosina Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.51633,
      vd: 64.14,
      focalLengthMm: -42.5185,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Weak front negative element that opens the wide-angle ray bundle before the first cemented group.",
      nC: 1.51386,
      nF: 1.52191,
      ng: 1.52621,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: 13.2557,
      glass: "TAFD35L (HOYA)",
      apd: false,
      role: "Strong positive member of the front cemented doublet J1.",
      cemented: "J1",
      dPgF: -0.001079,
      nC: 1.90324,
      nF: 1.92907,
      ng: 1.94414,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -24.8557,
      glass: "FDS90-SG (HOYA; FDS90 has identical optical constants)",
      apd: "inferred",
      apdNote:
        "Cosina marks the corresponding production-diagram position as extraordinary partial dispersion; the patent correlation remains inferential. The patent prints no PgF; the stored nC/nF/ng give PgF = 0.6191, runtime dPgF +0.01530 (HOYA's catalog ΔPg,F +0.0137 is against HOYA's own line).",
      role: "Negative, strongly dispersive rear member of J1; the cemented interface carries this downstream element.",
      cemented: "J1",
      dPgF: 0.015299,
      nC: 1.83649,
      nF: 1.87209,
      ng: 1.89413,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      focalLengthMm: -13.149,
      glass: "E-FD8 (HOYA)",
      apd: "inferred",
      apdNote:
        "Cosina marks the corresponding production-diagram position as extraordinary partial dispersion; the patent correlation remains inferential. The patent prints no PgF; the stored nC/nF/ng give PgF = 0.5988, runtime dPgF +0.00744 (HOYA's catalog ΔPg,F +0.0067 is against HOYA's own line).",
      role: "Strong negative front member of the nearly afocal rear cemented doublet J2.",
      cemented: "J2",
      dPgF: 0.007435,
      nC: 1.68251,
      nF: 1.70462,
      ng: 1.71786,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.81,
      focalLengthMm: 14.8205,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "Positive rear member of J2; balances L4 while retaining a weakly negative cemented net power.",
      cemented: "J2",
      dPgF: -0.0093,
      nC: 1.87657,
      nF: 1.89821,
      ng: 1.91045,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.81,
      focalLengthMm: 15.0851,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "Strong positive front member of the rear cemented doublet J3.",
      cemented: "J3",
      dPgF: -0.0093,
      nC: 1.87657,
      nF: 1.89821,
      ng: 1.91045,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.84,
      focalLengthMm: -24.1265,
      glass: "E-FD2 (HOYA)",
      apd: false,
      role: "Negative rear member of J3; moderates the positive assembly before the final field-correcting element.",
      cemented: "J3",
      dPgF: 0.005595,
      nC: 1.6421,
      nF: 1.66124,
      ng: 1.67258,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: -197.7419,
      glass: "806-407 class (HOYA NBFD13 / M-NBFD130; process unresolved)",
      apd: false,
      role: "Weak negative final meniscus with two aspherical surfaces for field and chief-ray control; catalog process variant unresolved.",
    },
  ],

  /* ── Surface prescription — JP 2024-107941 A, Table 3, Example 3 ── */
  /* (moved from asph) ── Aspherical coefficients — standard K convention, no scale transform ── */
  surfaces: [
    { label: "1", R: -561.322, d: 1.0, sd: 8.1, medium: 1 },
    { label: "2", R: 22.861, d: 1.591, sd: 8.1 },
    { label: "3", R: 18.267, d: 3.21, sd: 6.2, medium: 2 },
    { label: "4", R: -32.627, d: 1.265, sd: 6.2, medium: 3 },
    { label: "5", R: 60.333, d: 2.106, sd: 6.2 },
    { label: "STO", R: "flat", d: 2.75 },
    { label: "7", R: -13.657, d: 0.9, sd: 6.8, medium: 4 },
    { label: "8", R: 27.628, d: 3.35, sd: 7.0, medium: 5 },
    { label: "9", R: -23.45, d: 0.35, sd: 7.1 },
    { label: "10", R: 40.924, d: 4.299, sd: 8.8, medium: 6 },
    { label: "11", R: -18.775, d: 1.0, sd: 8.9, medium: 7 },
    { label: "12", R: 95.133, d: 3.528, sd: 9.4 },
    {
      label: "13A",
      R: -30.146,
      d: 1.835,
      sd: 11.2,
      medium: 8,
      asphere: { K: 0, A4: -5.44398e-5, A6: 8.9129e-8, A8: 1.02105e-9, A10: -6.55705e-12, A12: 0, A14: 0 },
    },
    {
      label: "14A",
      R: -38.187,
      d: 19.545,
      sd: 11.2,
      asphere: { K: 0, A4: 8.38722e-6, A6: 1.42099e-7, A8: 1.6189e-9, A10: -1.25184e-11, A12: 2.04616e-14, A14: 0 },
    },
  ],

  /* (moved from var) ── Focus: patent infinity state only; no reconstructed variable gaps ── */
  focus: {
    closeFocusM: 0.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION: Example 3 publishes only infinity data. The optical family has 0.5 m (VM Type II) and 0.7 m (VM Type I/L39) production endpoints, but no focus motion is modeled.",
  },

  /* ── Aperture and viewer controls ── */
  aperture: { nominalFNumber: 2.85, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], blades: 10 },

  /* ── Group and cemented-assembly annotations ── */
  groups: [
    { text: "Gf", fromSurface: "1", toSurface: "5" },
    { text: "Gr", fromSurface: "7", toSurface: "14A" },
  ],
  doublets: [
    { text: "J1", fromSurface: "3", toSurface: "5" },
    { text: "J2", fromSurface: "7", toSurface: "9" },
    { text: "J3", fromSurface: "10", toSurface: "12" },
  ],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
