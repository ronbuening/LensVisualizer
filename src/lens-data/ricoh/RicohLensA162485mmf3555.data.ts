import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — RICOH LENS A16 24-85mm f/3.5-5.5 (Ricoh GXR A16) (Ricoh GXR A16)              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2012/0307375 A1, Embodiment 3 / FIG. 9 / Table 3.              ║
 * ║ Production correlation: Ricoh A16 camera unit; 11 elements / 9 groups,     ║
 * ║ six aspherical surfaces, APS-C. No uniform production/patent scale applied.║
 * ║                                                                              ║
 * ║ Source correction: patent surface 6 prints nd=1.77703 with “LLAH87”.       ║
 * ║ This model uses nd=1.77030, the OHARA L-LAH87 catalog value; that correction║
 * ║ independently restores the patent focal lengths and conditional results.    ║
 * ║                                                                              ║
 * ║ Rear plates: patent virtual filter/cover plates F (surfaces 22-25: 0.70 mm   ║
 * ║ nd 1.53770 / νd 66.60, 1.50 mm air, 0.70 mm nd 1.50000 / νd 64.00) are       ║
 * ║ modeled in `rearPlates` (traced, not drawn); surface 21 d is the physical    ║
 * ║ gap E to the first plate. The patent prints no surface-25 gap to FP: the     ║
 * ║ 0.500027 mm trailing gap is derived, not printed, from the previous          ║
 * ║ Gaussian image plane, and mid/tele E carry +0.00003 / +0.00008 mm so that    ║
 * ║ plane is unchanged. Physical track grows by 0.478 mm over the folded form.   ║
 * ║                                                                              ║
 * ║ Zoom: five power groups move; the stop moves with Group IV. GII and GIII    ║
 * ║ reverse physical direction around the intermediate state. Variable gaps:    ║
 * ║ s3=A, s9=B, s11=C, s17=D, s21=E (gap to plate F).                            ║
 * ║                                                                              ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes GIII-only   ║
 * ║ focusing but no finite-distance table. Close-focus pairs model 0.25 m from ║
 * ║ patent surface 1 with only L6 moving; B+C is conserved at each zoom state. ║
 * ║ Ricoh's production 0.25 m specification is measured from the physical lens ║
 * ║ front, so the close state is a mechanism-constrained approximation.         ║
 * ║                                                                              ║
 * ║ Semi-diameters: the patent publishes none. SDs are modeled clear apertures  ║
 * ║ sized from exact meridional field/pupil bundles at W/M/T, including the     ║
 * ║ reconstructed close states, with 0.75× the 14.3 mm patent image height as  ║
 * ║ a conservative field check. The 5/6A boundary is geometry-limited by the    ║
 * ║ 6.67902 mm air gap, so surface 5 remains 9.05 mm. Surfaces 4 and 13A use   ║
 * ║ 11.23 and 7.24 mm to contain the actual pupil-edge bundles. Edge thickness, ║
 * ║ actual rim slope, conic limits, shared-gap intrusion, and off-axis          ║
 * ║ containment are checked by the independent verification artifact.           ║
 * ║ Patent FIG. 9 proportions set the larger L9 rear edge and Group V rims.     ║
 * ║                                                                              ║
 * ║ Spectral fields: catalog line indices and dPgF are stored only for the two  ║
 * ║ source-named OHARA glasses (L-LAH87 and S-BSM71). Unnamed patent glasses    ║
 * ║ remain six-digit classes; vendor-specific line data is not invented.        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "ricoh-lens-a16-24-85-f35-55",
  maker: "Ricoh",
  name: "RICOH LENS A16 24-85mm f/3.5-5.5 (Ricoh GXR A16)",
  subtitle: "US 2012/0307375 A1 — Embodiment 3; Ricoh GXR camera-unit correlation",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "aps-c",
    specs: [
      "11 ELEMENTS / 9 GROUPS",
      "15.7-55.5 mm actual (24-85 mm equivalent)",
      "f/3.5-5.5 marketed; f/3.62-5.67 patent design",
      "6 ASPHERICAL SURFACES",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: [15.7, 55.5], design: [16.146288351807335, 53.84993101953503] },
    fNumber: { marketing: 3.5, design: 3.62 },
  },

  source: {
    patentNumber: "US 2012/0307375 A1",
    patentYear: 2012,
    authors: ["Yohei Takano", "Hiromichi Atsuumi"],
    // A1 front page omits the organization; same-application assignment predates publication.
    // Assignment-record evidence and dates are documented in the analysis/audit.
    assignees: ["Ricoh Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -115.441681,
      glass: "847238 class",
      role: "Negative front member of the positive first zoom group.",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 48.032244,
      glass: "773496 class",
      role: "Positive rear member of the cemented first zoom group.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: -13.618527,
      glass: "001291 class",
      role: "Strong negative member at the front of Group II.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.7703,
      vd: 47.4,
      focalLengthMm: -24.869371,
      glass: "L-LAH87 (OHARA)",
      role: "Double-sided aspherical negative member in Group II; patent nd typo corrected to the named OHARA glass.",
      diagramLabel: "L4",
      dPgF: -0.00784952,
      nC: 1.76542547,
      nF: 1.78167613,
      ng: 1.7907151,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 17.638549,
      glass: "847238 class",
      role: "Positive rear member completing the negative second zoom group.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6485,
      vd: 53.02,
      focalLengthMm: -49.571713,
      glass: "S-BSM71 (OHARA)",
      role: "Single-element negative Group III and the sole focusing lens.",
      diagramLabel: "L6",
      dPgF: 0.0001856,
      nC: 1.64481535,
      nF: 1.65704583,
      ng: 1.66383131,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      focalLengthMm: 20.443117,
      glass: "516641 class",
      role: "Double-sided aspherical positive front member of Group IV.",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.43,
      focalLengthMm: 22.707504,
      glass: "517524 class",
      role: "Positive member of the cemented pair in Group IV.",
      diagramLabel: "L8",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.16,
      focalLengthMm: -11.521427,
      glass: "834372 class",
      role: "Negative rear member of the cemented pair in Group IV.",
      diagramLabel: "L9",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58913,
      vd: 61.15,
      focalLengthMm: 18.878824,
      glass: "589612 class",
      role: "Double-sided aspherical positive member at the front of Group V.",
      diagramLabel: "L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.32,
      focalLengthMm: -32.079411,
      glass: "904313 class",
      role: "Negative rear member completing the positive fifth zoom group.",
      diagramLabel: "L11",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 44.83622, d: 1.3, sd: 17.36, medium: 1 },
    { label: "2", R: 30.32788, d: 5.8025, sd: 16.82, medium: 2 },
    { label: "3", R: 152.20233, sd: 15.67 },
    { label: "4", R: 55.56877, d: 0.97009, sd: 11.23, medium: 3 },
    { label: "5", R: 10.8511, d: 6.67902, sd: 9.05 },
    {
      label: "6A",
      R: -40.92454,
      d: 0.8,
      sd: 9.38,
      medium: 4,
      asphere: { K: 0, A4: -8.18151e-6, A6: -2.01833e-7, A8: 2.53333e-9, A10: -1.29107e-11, A12: 0, A14: 0 },
    },
    {
      label: "7A",
      R: 36.32245,
      d: 0.65885,
      sd: 9.41,
      asphere: { K: 0, A4: -3.23283e-5, A6: -1.88341e-7, A8: 1.96755e-9, A10: -1.43273e-11, A12: 0, A14: 0 },
    },
    { label: "8", R: 30.89732, d: 4.44422, sd: 9.62, medium: 5 },
    { label: "9", R: -26.99833, sd: 9.72 },
    { label: "10", R: -24.45877, d: 0.8, sd: 8.69, medium: 6 },
    { label: "11", R: -103.58339, sd: 8.63 },
    { label: "STO", R: "flat", d: 1.45008 },
    {
      label: "13A",
      R: 16.52481,
      d: 5.35383,
      sd: 7.24,
      medium: 7,
      asphere: { K: 0, A4: -3.22004e-5, A6: -9.60992e-7, A8: 1.55589e-8, A10: -2.82657e-10, A12: 0, A14: 0 },
    },
    {
      label: "14A",
      R: -25.99633,
      d: 0.1,
      sd: 7.56,
      asphere: { K: 0, A4: 3.53815e-6, A6: -8.66214e-7, A8: 1.17377e-8, A10: -2.24402e-10, A12: 0, A14: 0 },
    },
    { label: "15", R: 23.78029, d: 3.61747, sd: 7.24, medium: 8 },
    { label: "16", R: -22.01894, d: 1.45, sd: 7.14, medium: 9 },
    { label: "17", R: 17.55937, sd: 9.0 },
    {
      label: "18A",
      R: 19.8852,
      d: 5.3,
      sd: 10.8,
      medium: 10,
      asphere: { K: -1.27337, A4: -1.58768e-5, A6: -1.86624e-7, A8: 6.94712e-10, A10: -5.97184e-12, A12: 0, A14: 0 },
    },
    { label: "19A", R: -22.74438, d: 0.1, sd: 10.8, asphere: { K: 0, A4: 3.3164e-5, A6: -1.06067e-7, A8: -6.29723e-10, A10: 0, A12: 0, A14: 0 } },
    { label: "20", R: 53.58387, d: 0.8, sd: 9.2, medium: 11 },
    { label: "21", R: 18.67841, sd: 9.2 }, // E var — gap to plate F
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and constrained focus spacings ── */
    stations: [
      { focalLengthMm: 16.15, nominalFNumber: 3.62, label: "Wide" },
      { focalLengthMm: 29.49, nominalFNumber: 4.65 },
      { focalLengthMm: 53.85, nominalFNumber: 5.67, label: "Tele" },
    ],
  },

  /* ── Focus and aperture ── */
  focus: {
    closeFocusM: 0.25,
    description:
      "CONSTRAINED_RECONSTRUCTION: only Group III (L6) moves. Close-focus spacings are paraxially solved for a 0.25 m object distance from patent surface 1 with a fixed normalized image plane and exact B+C conservation; Ricoh's marketed 0.25 m MFD is measured from the physical lens front, so this is not a patent-published finite-focus state.",
  },

  gaps: {
    "3": {
      label: "A / G1-G2",
      values: [
        [0.44, 0.44],
        [8.87257, 8.87257],
        [22.67111, 22.67111],
      ],
    },
    "9": {
      label: "B / G2-G3 + focus",
      values: [
        [2.87666, 1.343833708076235],
        [3.12901, 1.2324875667335],
        [4.33617, 1.500321455620277],
      ],
    },
    "11": {
      label: "C / G3-STO + focus",
      values: [
        [19.29016, 20.82298629192377],
        [8.43762, 10.3341424332665],
        [2.59994, 5.435788544379723],
      ],
    },
    "17": {
      label: "D / G4-G5",
      values: [
        [6.18178, 6.18178],
        [3.32394, 3.32394],
        [1.65001, 1.65001],
      ],
    },
    "21": {
      label: "E / G5-plate F",
      values: [
        [27.38221, 27.38221],
        [39.661119, 39.661119],
        [51.816229, 51.816229],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16], blades: 9 },

  /* ── Virtual filter/cover plates F (patent surfaces 22–25): traced, not drawn ── */
  rearPlates: [
    {
      label: "F",
      thicknessMm: 0.7,
      nd: 1.5377,
      vd: 66.6,
      gapAfterMm: 1.5,
      source: "US 2012/0307375 A1, Embodiment 3 table surfaces 22–23",
    },
    {
      label: "F",
      thicknessMm: 0.7,
      nd: 1.5,
      vd: 64.0,
      gapAfterMm: 0.500027,
      source:
        "US 2012/0307375 A1, Embodiment 3 table surfaces 24–25; gap to FP derived, not printed (previous Gaussian image plane)",
    },
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "3" },
    { text: "II (-)", fromSurface: "4", toSurface: "9" },
    { text: "III (-) / FOCUS", fromSurface: "10", toSurface: "11" },
    { text: "IV (+)", fromSurface: "13A", toSurface: "17" },
    { text: "V (+)", fromSurface: "18A", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
