import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 35mm f/1.4 L VCM                                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent: US 2024/0302626 A1, Numerical Example 2                         ║
 * ║  (Takashi Ode, Takahiro Hatada / Canon).                                 ║
 * ║  Production correlation: Canon RF35mm F1.4 L VCM.                        ║
 * ║  14 physical elements / 11 air-separated groups; 3 aspherical surfaces.  ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent states that B2 and  ║
 * ║  B4 move independently toward the object at close focus, but it publishes ║
 * ║  no numerical close-focus spacing table for Example 2. `var` is therefore ║
 * ║  intentionally empty; the product MFD is metadata only.                   ║
 * ║                                                                            ║
 * ║  PRESCRIPTION NORMALIZATION:                                               ║
 * ║    • Source flare-cut planes 10 and 19 are inactive, power-neutral planes ║
 * ║      (patent ¶0081) and are omitted. Their air spaces are folded into      ║
 * ║      source 9→11 (3.800 mm) and source 18→20 (0.758 mm).                  ║
 * ║    • No uniform scale is applied: s = 1. The marketed 35 mm / f/1.4       ║
 * ║      identity remains separate from the patent/model design values.       ║
 * ║    • Table 4 gives more precise base radii for aspheric source surfaces   ║
 * ║      2, 22, and 23; those radii are used here.                             ║
 * ║    • The printed sag equation ends at A12, but Table 4 explicitly gives   ║
 * ║      A14. The tabulated A14 term is retained as the numerical source.      ║
 * ║                                                                            ║
 * ║  STOP / SEMI-DIAMETER MODEL:                                               ║
 * ║    • Patent Φ is defined as effective diameter, not physical clear         ║
 * ║      aperture. Optical-surface sd values use Φ/2 as the source-derived     ║
 * ║      starting model, not as a claim about manufactured clear aperture.     ║
 * ║    • The stop radius is derived from the patent design f-number (f/1.46).  ║
 * ║      Patent Table 3 (Numerical Example 2) prints SP Φ=27.298 mm; this is   ║
 * ║      not treated as a physical diaphragm diameter.                         ║
 * ║    • Source surface 26 uses sd=16.85 mm rather than Φ/2=17.0725 mm. Φ is ║
 * ║      only an effective diameter; 16.85 mm is a conservative clearance     ║
 * ║      adjustment that passes gapSagFrac=0.90 at the 26→27 air gap without  ║
 * ║      layout concealment.                                                   ║
 * ║                                                                            ║
 * ║  SPECTRAL MODEL:                                                           ║
 * ║    Patent nd/νd values are retained exactly. nC/nF/ng values are           ║
 * ║    catalog-proxy data from the closest defensible OHARA or HOYA coordinate ║
 * ║    matches documented in the audit. They are dispersion-model proxies,     ║
 * ║    not claims that Canon used those suppliers or exact melts.              ║
 * ║                                                                            ║
 * ║  NOTE ON PARTIAL DISPERSION:                                               ║
 * ║    The patent prints no PgF / θgF and states no normal line of its own     ║
 * ║    (Table 3 carries nd and νd only). `dPgF` is PgF minus the engine's      ║
 * ║    normal line (0.6438 − 0.001682·νd), with PgF = (ng − nF)/(nF − nC)      ║
 * ║    taken from each element's authored proxy indices. It is not the OHARA   ║
 * ║    or HOYA catalog ΔPgF, which each vendor quotes against its own normal   ║
 * ║    line. L11 and L14 were already within 0.0003 of the engine-line value   ║
 * ║    and keep their four-decimal figures.                                    ║
 * ║                                                                            ║
 * ║  FIELD MODEL:                                                              ║
 * ║    imageFormat records the production full-frame format. Example 2 itself ║
 * ║    publishes maximum image height 20.03 mm and half-angle 30.5°, smaller  ║
 * ║    than a 36×24 mm corner. No scale or projection override is introduced; ║
 * ║    the source-field mismatch is retained explicitly for later analysis.   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: all Example 2 Table 3/4 values match, including the more
 * precise aspheric base radii. EFL 33.942092 vs printed 34.0 and BFL
 * 15.360904 vs 15.444 leave −0.083096 mm offset. Paragraph 0079 defines
 * back focus as paraxial, not a designer best-focus convention. Keep the
 * printed prescription; no rear plate or supported single misprint explains it.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-35mm-f14-l-vcm",
  maker: "Canon",
  name: "CANON RF 35mm f/1.4 L VCM",
  subtitle: "US 2024/0302626 A1 — Numerical Example 2 production correlation",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 11 GROUPS",
      "35 mm f/1.4 (marketing)",
      "f = 34.0 mm, F/1.46 (patent)",
      "2ω = 61.0° (patent)",
      "3 ASPHERICAL SURFACES / 2 ASPHERICAL ELEMENTS",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 35, design: 33.94209188 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "US 2024/0302626 A1",
    patentYear: 2024,
    authors: ["Takashi Ode", "Takahiro Hatada"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.583,
      vd: 59.38,
      focalLengthMm: -60.726202,
      glass: "S-BAL42 (OHARA) coordinate proxy; patent vendor unresolved",
      dPgF: -0.000135,
      nC: 1.58014,
      nF: 1.58996,
      ng: 1.5953,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.516,
      vd: 64.14,
      focalLengthMm: -45.725707,
      glass: "S-BSL7 (OHARA) coordinate proxy; patent vendor unresolved",
      dPgF: -0.001755,
      nC: 1.51386,
      nF: 1.52191,
      ng: 1.52621,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.764,
      vd: 48.49,
      focalLengthMm: 26.222833,
      glass: "S-LAH96 (OHARA) coordinate proxy; patent vendor unresolved",
      cemented: "C1",
      dPgF: -0.002875,
      nC: 1.75913,
      nF: 1.77488,
      ng: 1.78369,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.855,
      vd: 24.8,
      focalLengthMm: -61.675756,
      glass: "S-NBH56 (OHARA) coordinate proxy; patent vendor unresolved",
      cemented: "C1",
      dPgF: 0.010040,
      nC: 1.84488,
      nF: 1.87935,
      ng: 1.90045,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 25.46,
      focalLengthMm: 72.73077,
      glass: "TAFD40 (HOYA) coordinate proxy; patent vendor unresolved",
      dPgF: 0.012608,
      nC: 1.98941,
      nF: 2.02872,
      ng: 2.05284,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.595,
      vd: 67.74,
      focalLengthMm: 85.074102,
      glass: "S-FPM2 (OHARA) coordinate proxy; patent vendor unresolved",
      dPgF: 0.013938,
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.77,
      vd: 29.74,
      focalLengthMm: -108.650028,
      glass: "NBFD29 (HOYA) coordinate proxy; patent vendor unresolved",
      dPgF: 0.001360,
      nC: 1.76293,
      nF: 1.78884,
      ng: 1.80426,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 154.170372,
      glass: "S-FPL51 (OHARA) coordinate proxy; patent vendor unresolved",
      apd: "inferred",
      apdNote:
        "First of the two patent 1.497/81.54 elements correlated with Canon's published two-UD production count. The patent prints no PgF; the S-FPL51 proxy's authored nC/nF/ng give PgF = 0.5386 (OHARA's catalog ΔPgF +0.0280 is against OHARA's own normal line), runtime dPgF +0.03194.",
      role: "First product-correlated UD element in the moving B4 unit.",
      cemented: "C2",
      dPgF: 0.031938,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.77,
      vd: 29.74,
      focalLengthMm: -26.841416,
      glass: "NBFD29 (HOYA) coordinate proxy; patent vendor unresolved",
      cemented: "C2",
      dPgF: 0.001360,
      nC: 1.76293,
      nF: 1.78884,
      ng: 1.80426,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 43.211274,
      glass: "S-FPL51 (OHARA) coordinate proxy; patent vendor unresolved",
      apd: "inferred",
      apdNote:
        "Second of the two patent 1.497/81.54 elements correlated with Canon's published two-UD production count. The patent prints no PgF; the S-FPL51 proxy's authored nC/nF/ng give PgF = 0.5386 (OHARA's catalog ΔPgF +0.0280 is against OHARA's own normal line), runtime dPgF +0.03194.",
      role: "Second product-correlated UD element in the moving B4 unit.",
      dPgF: 0.031938,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.804,
      vd: 46.53,
      focalLengthMm: 43.854817,
      glass: "S-LAH65VS (OHARA) coordinate proxy; patent vendor unresolved",
      dPgF: -0.0085,
      nC: 1.79882,
      nF: 1.8161,
      ng: 1.82573,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 32.796527,
      glass: "TAFD55 (HOYA) coordinate proxy; patent vendor unresolved",
      cemented: "C3",
      dPgF: 0.004906,
      nC: 1.99105,
      nF: 2.0254,
      ng: 2.046,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.77,
      vd: 29.74,
      focalLengthMm: -27.98411,
      glass: "NBFD29 (HOYA) coordinate proxy; patent vendor unresolved",
      cemented: "C3",
      dPgF: 0.001360,
      nC: 1.76293,
      nF: 1.78884,
      ng: 1.80426,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.613,
      vd: 44.27,
      focalLengthMm: -201.545627,
      glass: "S-NBM51 (OHARA) coordinate proxy; patent vendor unresolved",
      dPgF: -0.0065,
      nC: 1.60925,
      nF: 1.62311,
      ng: 1.63091,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 360.451, d: 1.9, sd: 19.195, medium: 1 },
    {
      label: "2A",
      R: 32.17448,
      d: 11.511,
      sd: 16.7705,
      asphere: {
        K: 0,
        A4: 1.697231e-6,
        A6: -9.598092e-9,
        A8: 1.251928e-10,
        A10: -6.39375e-13,
        A12: 1.679648e-15,
        A14: -1.671035e-18,
      },
    },
    { label: "3", R: -30.402, d: 1.05, sd: 16.326, medium: 2 },
    { label: "4", R: 106.61, d: 0.5, sd: 16.8515 },
    { label: "5", R: 75.064, d: 11.371, sd: 17.077, medium: 3 },
    { label: "6", R: -25.535, d: 1.4, sd: 17.0985, medium: 4 },
    { label: "7", R: -50.76, d: 0.2, sd: 17.346 },
    { label: "8", R: 146.103, d: 3.873, sd: 17.603, medium: 5 },
    { label: "9", R: -143.19, d: 3.8, sd: 17.6025 },
    { label: "11", R: 34.518, d: 4.646, sd: 16.457, medium: 6 },
    { label: "12", R: 103.07, d: 1.5, sd: 15.9865 },
    { label: "13", R: 51.466, d: 1.5, sd: 15.1095, medium: 7 },
    { label: "14", R: 31.46, d: 6.316, sd: 14.239 },
    // US 2024/0302626 A1, Numerical Example 2 Table 3, SP surface 15: printed effective
    // diameter 27.298 mm at the stop.
    { label: "STO", R: "flat", d: 11.81 },
    { label: "16", R: -26.046, d: 2.759, sd: 11.829, medium: 8 },
    { label: "17", R: -20.122, d: 1.1, sd: 11.902, medium: 9 },
    { label: "18", R: -779.954, d: 0.758, sd: 12.607 },
    { label: "20", R: 59.443, d: 9.185, sd: 15.418, medium: 10 },
    { label: "21", R: -31.899, d: 2.186, sd: 16.3975 },
    {
      label: "22A",
      R: 89.50277,
      d: 7.114,
      sd: 18.5895,
      medium: 11,
      asphere: { K: 0, A4: -4.587706e-6, A6: 1.115432e-9, A8: -8.943226e-12, A10: -4.870968e-15, A12: 0, A14: 0 },
    },
    {
      label: "23A",
      R: -56.11754,
      d: 1.5,
      sd: 18.9725,
      asphere: { K: 0, A4: 3.931361e-6, A6: 1.682398e-9, A8: -8.682252e-12, A10: 5.83728e-15, A12: 0, A14: 0 },
    },
    { label: "24", R: 69.336, d: 7.684, sd: 19.087, medium: 12 },
    { label: "25", R: -58.895, d: 1.1, sd: 18.831, medium: 13 },
    { label: "26", R: 34.256, d: 6.839, sd: 16.85 },
    { label: "27", R: -83.829, d: 1.5, sd: 17.1115, medium: 14 },
    { label: "28", R: -262.53, d: 15.444, sd: 17.45 },
  ],

  /* (moved from var) Infinity-only prescription: no numerical close-focus state is published. */
  focus: {
    closeFocusM: 0.28,
    description:
      "Patent Example 2 publishes only the infinity prescription. " +
      "B2 and B4 move independently toward the object during close focusing; " +
      "no numerical close-focus gaps are published, so no internal focus reconstruction is authored. " +
      "The 0.28 m close-focus value is Canon production metadata.",
  },

  aperture: { nominalFNumber: 1.46, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 11 },

  groups: [
    { text: "B1", fromSurface: "1", toSurface: "9" },
    { text: "B2 (OBJECTWARD FOCUS)", fromSurface: "11", toSurface: "12" },
    { text: "B3", fromSurface: "13", toSurface: "14" },
    { text: "B4 (OBJECTWARD FOCUS)", fromSurface: "16", toSurface: "23A" },
    { text: "B5", fromSurface: "24", toSurface: "28" },
  ],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "16", toSurface: "18" },
    { text: "C3", fromSurface: "24", toSurface: "26" },
  ],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
