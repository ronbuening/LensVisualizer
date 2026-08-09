import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — RICOH LENS A16 24-85mm F3.5-5.5 (Ricoh GXR A16)              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2012/0307375 A1, Embodiment 3 / FIG. 9 / Table 3.              ║
 * ║ Production correlation: Ricoh A16 camera unit; 11 elements / 9 groups,     ║
 * ║ six aspherical surfaces, APS-C. No uniform production/patent scale applied.║
 * ║                                                                              ║
 * ║ Source correction: patent surface 6 prints nd=1.77703 with “LLAH87”.       ║
 * ║ This model uses nd=1.77030, the OHARA L-LAH87 catalog value; that correction║
 * ║ independently restores the patent focal lengths and conditional results.    ║
 * ║                                                                              ║
 * ║ Rear-plane normalization: patent virtual filter/cover plates 22-25 are      ║
 * ║ omitted. Surface 21 d is the air-equivalent distance to FP, including their ║
 * ║ reduced-thickness effect and the independently recovered ~0.500063 mm gap. ║
 * ║                                                                              ║
 * ║ Zoom: five power groups move; the stop moves with Group IV. GII and GIII    ║
 * ║ reverse physical direction around the intermediate state. Variable gaps:    ║
 * ║ s3=A, s9=B, s11=C, s17=D, s21=air-equivalent BFD.                          ║
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
  key: "ricoh-lens-a16-24-85-f35-55",
  maker: "Ricoh",
  name: "RICOH LENS A16 24-85mm f/3.5-5.5 (Ricoh GXR A16)",
  subtitle: "US 2012/0307375 A1 — Embodiment 3; strong production correlation",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "15.7-55.5 mm actual (24-85 mm equivalent)",
    "f/3.5-5.5 marketed; f/3.62-5.67 patent design",
    "6 ASPHERICAL SURFACES",
  ],
  focalLengthMarketing: [15.7, 55.5],
  focalLengthDesign: [16.146288351807335, 53.84993101953503],
  apertureMarketing: 3.5,
  apertureDesign: 3.62,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "US 2012/0307375 A1",
  patentAuthors: ["Yohei Takano", "Hiromichi Atsuumi"],
  patentAssignees: [], // The supplied US publication prints no assignee/applicant bibliographic block.
  patentYear: 2012,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -115.441681,
      glass: "847238 class",
      cemented: "D1",
      role: "Negative front member of the positive first zoom group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 48.032244,
      glass: "773496 class",
      cemented: "D1",
      role: "Positive rear member of the cemented first zoom group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      fl: -13.618527,
      glass: "001291 class",
      role: "Strong negative member at the front of Group II.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.7703,
      vd: 47.4,
      fl: -24.869371,
      glass: "L-LAH87 (OHARA)",
      nC: 1.76542547,
      nF: 1.78167613,
      ng: 1.7907151,
      dPgF: -0.00784952,
      role: "Double-sided aspherical negative member in Group II; patent nd typo corrected to the named OHARA glass.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 17.638549,
      glass: "847238 class",
      role: "Positive rear member completing the negative second zoom group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6485,
      vd: 53.02,
      fl: -49.571713,
      glass: "S-BSM71 (OHARA)",
      nC: 1.64481535,
      nF: 1.65704583,
      ng: 1.66383131,
      dPgF: 0.0001856,
      role: "Single-element negative Group III and the sole focusing lens.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      fl: 20.443117,
      glass: "516641 class",
      role: "Double-sided aspherical positive front member of Group IV.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.43,
      fl: 22.707504,
      glass: "517524 class",
      cemented: "D2",
      role: "Positive member of the cemented pair in Group IV.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.16,
      fl: -11.521427,
      glass: "834372 class",
      cemented: "D2",
      role: "Negative rear member of the cemented pair in Group IV.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58913,
      vd: 61.15,
      fl: 18.878824,
      glass: "589612 class",
      role: "Double-sided aspherical positive member at the front of Group V.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.32,
      fl: -32.079411,
      glass: "904313 class",
      role: "Negative rear member completing the positive fifth zoom group.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 44.83622, d: 1.3, nd: 1.84666, elemId: 1, sd: 17.36 },
    { label: "2", R: 30.32788, d: 5.8025, nd: 1.7725, elemId: 2, sd: 16.82 },
    { label: "3", R: 152.20233, d: 0.44, nd: 1.0, elemId: 0, sd: 15.67 },
    { label: "4", R: 55.56877, d: 0.97009, nd: 2.001, elemId: 3, sd: 11.23 },
    { label: "5", R: 10.8511, d: 6.67902, nd: 1.0, elemId: 0, sd: 9.05 },
    { label: "6A", R: -40.92454, d: 0.8, nd: 1.7703, elemId: 4, sd: 9.38 },
    { label: "7A", R: 36.32245, d: 0.65885, nd: 1.0, elemId: 0, sd: 9.41 },
    { label: "8", R: 30.89732, d: 4.44422, nd: 1.84666, elemId: 5, sd: 9.62 },
    { label: "9", R: -26.99833, d: 2.87666, nd: 1.0, elemId: 0, sd: 9.72 },
    { label: "10", R: -24.45877, d: 0.8, nd: 1.6485, elemId: 6, sd: 8.69 },
    { label: "11", R: -103.58339, d: 19.29016, nd: 1.0, elemId: 0, sd: 8.63 },
    { label: "STO", R: 1e15, d: 1.45008, nd: 1.0, elemId: 0, sd: 5.994031 },
    { label: "13A", R: 16.52481, d: 5.35383, nd: 1.51633, elemId: 7, sd: 7.24 },
    { label: "14A", R: -25.99633, d: 0.1, nd: 1.0, elemId: 0, sd: 7.56 },
    { label: "15", R: 23.78029, d: 3.61747, nd: 1.51742, elemId: 8, sd: 7.24 },
    { label: "16", R: -22.01894, d: 1.45, nd: 1.834, elemId: 9, sd: 7.14 },
    { label: "17", R: 17.55937, d: 6.18178, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "18A", R: 19.8852, d: 5.3, nd: 1.58913, elemId: 10, sd: 10.8 },
    { label: "19A", R: -22.74438, d: 0.1, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "20", R: 53.58387, d: 0.8, nd: 1.90366, elemId: 11, sd: 9.2 },
    { label: "21", R: 18.67841, d: 30.304129130519772, nd: 1.0, elemId: 0, sd: 9.2 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: -8.18151e-6,
      A6: -2.01833e-7,
      A8: 2.53333e-9,
      A10: -1.29107e-11,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: 0,
      A4: -3.23283e-5,
      A6: -1.88341e-7,
      A8: 1.96755e-9,
      A10: -1.43273e-11,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -3.22004e-5,
      A6: -9.60992e-7,
      A8: 1.55589e-8,
      A10: -2.82657e-10,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 3.53815e-6,
      A6: -8.66214e-7,
      A8: 1.17377e-8,
      A10: -2.24402e-10,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: -1.27337,
      A4: -1.58768e-5,
      A6: -1.86624e-7,
      A8: 6.94712e-10,
      A10: -5.97184e-12,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: 3.3164e-5,
      A6: -1.06067e-7,
      A8: -6.29723e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom and constrained focus spacings ── */
  zoomPositions: [16.15, 29.49, 53.85],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "3": [
      [0.44, 0.44],
      [8.87257, 8.87257],
      [22.67111, 22.67111],
    ],
    "9": [
      [2.87666, 1.343833708076235],
      [3.12901, 1.2324875667335],
      [4.33617, 1.500321455620277],
    ],
    "11": [
      [19.29016, 20.82298629192377],
      [8.43762, 10.3341424332665],
      [2.59994, 5.435788544379723],
    ],
    "17": [
      [6.18178, 6.18178],
      [3.32394, 3.32394],
      [1.65001, 1.65001],
    ],
    "21": [
      [30.304129130519772, 30.304129130519772],
      [42.583038149609486, 42.583038149609486],
      [54.73814753692398, 54.73814753692398],
    ],
  },
  varLabels: [
    ["3", "A / G1-G2"],
    ["9", "B / G2-G3 + focus"],
    ["11", "C / G3-STO + focus"],
    ["17", "D / G4-G5"],
    ["21", "BF / air-equivalent"],
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

  /* ── Focus and aperture ── */
  closeFocusM: 0.25,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: only Group III (L6) moves. Close-focus spacings are paraxially solved for a 0.25 m object distance from patent surface 1 with a fixed normalized image plane and exact B+C conservation; Ricoh's marketed 0.25 m MFD is measured from the physical lens front, so this is not a patent-published finite-focus state.",
  nominalFno: [3.62, 4.65, 5.67],
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  /* ── Layout ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
