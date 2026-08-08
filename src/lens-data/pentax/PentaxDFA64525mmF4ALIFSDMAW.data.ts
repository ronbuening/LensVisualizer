import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — smc PENTAX-D FA645 25mm F4 AL[IF] SDM AW                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,422,143 B2, Numerical Embodiment 1 / Example 1.      ║
 * ║  Production correlation: smc PENTAX-D FA645 25mm F4 AL[IF] SDM AW.      ║
 * ║  Patent model: 12 refractive elements; 3 aspherical surfaces.            ║
 * ║                                                                            ║
 * ║  FILTER NORMALIZATION:                                                     ║
 * ║    Patent OP surfaces 10–11 are a 3.00 mm n_d=1.51680 flat plate.        ║
 * ║    Filters/dummy plates are excluded from the ordinary sequential model.   ║
 * ║    Surface 9→12 is therefore 26.3478481013 mm of air, preserving the      ║
 * ║    plate region's paraxial reduced distance: 5.00 + 3/1.51680 + 19.37.   ║
 * ║    The normalized model track is 1.0221518987 mm shorter than the raw     ║
 * ║    patent physical track; source L=195.91 mm remains a patent fact.       ║
 * ║                                                                            ║
 * ║  FOCUS — CONSTRAINED_RECONSTRUCTION:                                      ║
 * ║    Patent text fixes R3–R7 (surfaces 16–22) as one rigid inner-focus      ║
 * ║    block translating toward the object. Official MFD=0.4 m supplies the   ║
 * ║    single scalar constraint. In the raw patent physical coordinates the    ║
 * ║    code-solved travel is 2.9823012970 mm objectward: STO→16 changes       ║
 * ║    9.38→6.3976987030 mm and surface 22→IMG changes                         ║
 * ║    62.01→64.9923012970 mm. The solution predicts 0.11241×, consistent    ║
 * ║    with the manufacturer's rounded 0.11× maximum reproduction ratio.      ║
 * ║    Because OP is omitted by air-equivalent normalization, closeFocusM      ║
 * ║    remains production metadata rather than a literal sum of modeled        ║
 * ║    axial coordinates.                                                       ║
 * ║                                                                            ║
 * ║  SCALING: none. Patent dimensions and asphere coefficients are unscaled.   ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: not published by the patent. SDs are modeled from exact   ║
 * ║    meridional ray envelopes: full f/4.1 pupil at 0.60× the patent 54.7°    ║
 * ║    half-field, full-field chief-ray containment, the patent optical        ║
 * ║    section, and the 90 mm production barrel diameter as a mechanical       ║
 * ║    ceiling. Figure 1 proportions set the larger F3–F5 outlines where       ║
 * ║    the traced envelope alone understated their relative diameter. The      ║
 * ║    stop SD is solved from the modeled f/4.1 entrance pupil.                 ║
 * ║    Edge thickness, actual rim slope, cross-gap intrusion, conic domain,    ║
 * ║    and both defined focus states were independently checked.               ║
 * ║                                                                            ║
 * ║  GLASS: the patent names no vendor. `glass` labels use six-digit           ║
 * ║    coordinate classes derived from the published n_d/ν_d pairs. No vendor  ║
 * ║    or melt identity is asserted. The patent supplies no per-element         ║
 * ║    nC/nF/ng or dPgF values, so those optional fields are not invented.      ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-dfa645-25mm-f4-al-if-sdm-aw",
  maker: "Pentax",
  name: "PENTAX SMC D FA645 25mm f/4 AL[IF] SDM AW",
  subtitle: "US 8,422,143 B2 Example 1 — Masakazu Saori; strong production correlation",
  specs: [
    "12 REFRACTIVE ELEMENTS / 7 MODELED GROUPS",
    "f = 25.6946 mm (DESIGN)",
    "F/4.1 (DESIGN)",
    "2ω = 109.4°",
    "3 ASPHERICAL SURFACES",
    "INNER FOCUS",
  ],

  focalLengthMarketing: 25,
  focalLengthDesign: 25.69457925693763,
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["pentax-645"],
  imageFormat: "645",
  patentNumber: "US 8,422,143 B2",
  patentAuthors: ["Masakazu Saori"],
  patentAssignees: ["Pentax Ricoh Imaging Company, Ltd."],
  patentYear: 2013,
  elementCount: 12,
  groupCount: 7,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 109.4,
    maxTraceFieldDeg: 54.7,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "F1",
      diagramLabel: "F1",
      label: "Front element F1",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -61.83826920811754,
      glass: "835427 — coordinate class (vendor not established)",
      role: "Front negative meniscus of the theoretical negative front group.",
    },
    {
      id: 2,
      name: "F2",
      diagramLabel: "F2",
      label: "Front element F2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.73077,
      vd: 40.5,
      fl: -81.6923247996356,
      glass: "731405 — coordinate class (vendor not established)",
      role: "Double-sided aspherical negative meniscus in the front retrofocus group.",
    },
    {
      id: 3,
      name: "F3",
      diagramLabel: "F3",
      label: "Front element F3",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.4,
      fl: -51.017672823234676,
      glass: "618634 — coordinate class (vendor not established)",
      role: "Biconcave negative element preceding the front cemented doublet.",
    },
    {
      id: 4,
      name: "F4",
      diagramLabel: "F4",
      label: "Front element F4",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      fl: 33.65635599790236,
      glass: "744449 — coordinate class (vendor not established)",
      cemented: "F4–F5",
      role: "Positive member of the front-group cemented doublet.",
    },
    {
      id: 5,
      name: "F5",
      diagramLabel: "F5",
      label: "Front element F5",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -74.01890986835208,
      glass: "835427 — coordinate class (vendor not established)",
      cemented: "F4–F5",
      role: "Negative member of the front-group cemented doublet.",
    },
    {
      id: 6,
      name: "R1",
      diagramLabel: "R1",
      label: "Rear element R1",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      fl: 27.488136638586486,
      glass: "648338 — coordinate class (vendor not established)",
      cemented: "R1–R2",
      role: "Positive member of the fixed rear-group cemented doublet ahead of the stop.",
    },
    {
      id: 7,
      name: "R2",
      diagramLabel: "R2",
      label: "Rear element R2",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -38.01790903047997,
      glass: "773496 — coordinate class (vendor not established)",
      cemented: "R1–R2",
      role: "Negative member of the fixed rear-group cemented doublet ahead of the stop.",
    },
    {
      id: 8,
      name: "R3",
      diagramLabel: "R3",
      label: "Focus element R3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 48.980619734764105,
      glass: "497816 — coordinate class (vendor not established)",
      cemented: "R3–R5",
      role: "Positive first member of the rigid R3–R7 inner-focus block.",
    },
    {
      id: 9,
      name: "R4",
      diagramLabel: "R4",
      label: "Focus element R4",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.3,
      fl: -23.15996995391677,
      glass: "806333 — coordinate class (vendor not established)",
      cemented: "R3–R5",
      role: "Negative middle member of the rigid R3–R5 cemented focus triplet.",
    },
    {
      id: 10,
      name: "R5",
      diagramLabel: "R5",
      label: "Focus element R5",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      fl: 29.395822902763175,
      glass: "487704 — coordinate class (vendor not established)",
      cemented: "R3–R5",
      role: "Positive rear member of the rigid R3–R5 cemented focus triplet.",
    },
    {
      id: 11,
      name: "R6",
      diagramLabel: "R6",
      label: "Focus element R6",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -34.77936390972613,
      glass: "835427 — coordinate class (vendor not established)",
      cemented: "R6–R7",
      role: "Negative first member of the rear cemented doublet in the focus block.",
    },
    {
      id: 12,
      name: "R7",
      diagramLabel: "R7",
      label: "Focus element R7",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58913,
      vd: 61.2,
      fl: 40.50261846311165,
      glass: "589613 — coordinate class (vendor not established)",
      cemented: "R6–R7",
      role: "Positive rear member of the focus block; image-side surface is aspherical.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 78.423, d: 3, nd: 1.83481, elemId: 1, sd: 40.5 },
    { label: "2", R: 30.589, d: 11, nd: 1, elemId: 0, sd: 27 },
    { label: "3A", R: 56.395, d: 7, nd: 1.73077, elemId: 2, sd: 25 },
    { label: "4A", R: 27.48, d: 16.17, nd: 1, elemId: 0, sd: 20.5 },
    { label: "5", R: -112.052, d: 2.5, nd: 1.618, elemId: 3, sd: 21.7 },
    { label: "6", R: 44.248, d: 5.16, nd: 1, elemId: 0, sd: 19.8 },
    { label: "7", R: 60.515, d: 11.92, nd: 1.744, elemId: 4, sd: 20.3 },
    { label: "8", R: -39.126, d: 2.5, nd: 1.83481, elemId: 5, sd: 20.3 },
    { label: "9", R: -109.767, d: 26.347848101265825, nd: 1, elemId: 0, sd: 20.3 },
    { label: "12", R: 55.742, d: 6, nd: 1.64769, elemId: 6, sd: 13 },
    { label: "13", R: -25.052, d: 1.2, nd: 1.7725, elemId: 7, sd: 12.5 },
    { label: "14", R: -173.995, d: 3.2, nd: 1, elemId: 0, sd: 12 },
    { label: "STO", R: 1e15, d: 9.38, nd: 1, elemId: 0, sd: 9.67333760012721 },
    { label: "16", R: 29.809, d: 7.4, nd: 1.497, elemId: 8, sd: 14.5 },
    { label: "17", R: -121.824, d: 1.2, nd: 1.8061, elemId: 9, sd: 14.5 },
    { label: "18", R: 22.145, d: 9, nd: 1.48749, elemId: 10, sd: 14.5 },
    { label: "19", R: -35.199, d: 1.3, nd: 1, elemId: 0, sd: 15 },
    { label: "20", R: -651.902, d: 1.2, nd: 1.83481, elemId: 11, sd: 15.5 },
    { label: "21", R: 30.413, d: 7.4, nd: 1.58913, elemId: 12, sd: 16 },
    { label: "22A", R: -100.773, d: 62.01, nd: 1, elemId: 0, sd: 16.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: 0,
      A4: 1.088e-5,
      A6: -4.936e-9,
      A8: 1.22e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: 7.529e-6,
      A6: -2.475e-9,
      A8: -3.269e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: 5.796e-6,
      A6: 2.608e-10,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (focus mechanism) ── */
  var: {
    STO: [9.38, 6.397698702994338],
    "22A": [62.01, 64.99230129700567],
  },
  varLabels: [
    ["STO", "D15 (FOCUS)"],
    ["22A", "BF"],
  ],

  /* ── Group and cemented-unit annotations ── */
  groups: [
    { text: "GF", fromSurface: "1", toSurface: "9" },
    { text: "GR", fromSurface: "12", toSurface: "22A" },
  ],
  doublets: [
    { text: "F4–F5", fromSurface: "7", toSurface: "9" },
    { text: "R1–R2", fromSurface: "12", toSurface: "14" },
    { text: "R3–R5", fromSurface: "16", toSurface: "19" },
    { text: "R6–R7", fromSurface: "20", toSurface: "22A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.4,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-prescribed rigid R3–R7 inner-focus block moves 2.982301297 mm objectward at the official 0.4 m MFD; reconstruction was solved in the raw patent physical coordinates before OP-filter air-equivalent normalization and predicts 0.11241× magnification.",

  /* ── Aperture configuration ── */
  nominalFno: 4.1,
  fstopSeries: [4.1, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  /* ── Layout tuning ── */
  yScFill: 0.64,
} satisfies LensDataInput;

export default LENS_DATA;
