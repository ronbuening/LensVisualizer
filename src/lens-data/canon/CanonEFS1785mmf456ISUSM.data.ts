import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF-S 17-85mm f/4-5.6 IS USM                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2006/0023317 A1, Numerical Embodiment 1 (Makoto Fujimoto /     ║
 * ║ Canon Kabushiki Kaisha). The patent prescription is retained at scale      ║
 * ║ s = 1. Production correlation uses Canon's 17/12 construction, EF-S APS-C  ║
 * ║ identity, 0.35 m MFD, 0.20x maximum magnification, IS, and timing.          ║
 * ║                                                                              ║
 * ║ 17 elements / 12 groups; five powered units (+ - + - +); two aspherical   ║
 * ║ surfaces on E15 (patent surfaces 26/27).                                   ║
 * ║                                                                              ║
 * ║ Zoom positions: 17.55 / 35.00 / 82.48 mm. Patent infinity gaps d5, d13,   ║
 * ║ d14, d20, and d25 are transcribed exactly. d30 is the independently         ║
 * ║ computed Gaussian BFD required to keep the image plane conjugate at each    ║
 * ║ zoom state because Numerical Embodiment 1 publishes no d30 row.             ║
 * ║ d14 is keyed as STO because patent surface 14 is the aperture stop.         ║
 * ║                                                                              ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. Only L2 translates. At each       ║
 * ║ zoom state d5 + d13 is conserved and the image plane remains fixed. The     ║
 * ║ 0.35 m Canon MFD solutions require L2 to move objectward, contrary to       ║
 * ║ patent paragraph 0056; the tele solution independently gives 0.20214x.      ║
 * ║                                                                              ║
 * ║ Source discrepancy: paragraph 0054 says L4 moves imageward wide-to-tele,    ║
 * ║ while the fixed-image-plane numerical kinematics move L4 objectward by      ║
 * ║ about 4.86 mm. The numerical prescription is not altered to follow prose.   ║
 * ║                                                                              ║
 * ║ Maximum-aperture design states use Figure 2 values f/4.11, f/4.45, and      ║
 * ║ f/5.77. The header's rounded wide f/4.0 and the marketed f/4-5.6 range      ║
 * ║ remain metadata only. The stop radius is derived from the design f-number at ║
 * ║ each station; the traced wide-open iris radii are 4.637 / 5.463 / 4.877 mm.  ║
 * ║                                                                              ║
 * ║ Semi-diameters are inferred, not patent-published. They were derived from   ║
 * ║ full-pupil paraxial marginal/chief bundles through 0.60 x the published     ║
 * ║ 13.65 mm image height at all infinity and reconstructed 0.35 m states,      ║
 * ║ then expanded toward the Figure 1 silhouette where edge, rim-slope, conic,  ║
 * ║ and cross-gap limits permit. Figure 1 review enlarged E5 surfaces 8/9 to    ║
 * ║ 11.8/12.5 mm so its optical silhouette matches the visibly taller L2 member. ║
 * ║ Full-corner pupil vignetting is allowed outside the 0.60-field envelope.     ║
 * ║                                                                              ║
 * ║ Glass vendor identity is not asserted. The patent publishes only rounded    ║
 * ║ d-line nd/vd coordinates. Vendor-neutral six-digit coordinate classes let   ║
 * ║ the resolver use compatible catalog curves without asserting production     ║
 * ║ melts. nC, nF, ng, and dPgF remain omitted because the patent omits them.    ║
 * ║                                                                              ║
 * ║ No sensor cover glass, filter, dummy/flare-cutter plane, mechanical part,   ║
 * ║ folded path, or uniform scaling is included.                                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-efs-17-85mm-f4-5-6-is-usm",
  maker: "Canon",
  name: "CANON EF-S 17-85mm f/4-5.6 IS USM",
  subtitle: "US 2006/0023317 A1 Example 1 — constrained L2 close-focus reconstruction",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: [
      "17 ELEMENTS / 12 GROUPS",
      "17-85mm MARKETED / 17.55-82.48mm DESIGN",
      "f/4-5.6 MARKETED / f/4.11-5.77 MODELED",
      "0.35 m MFD / 0.20x MAX MAG",
      "IMAGE STABILIZER / INNER FOCUS",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 17,
    groupCount: 12,
    focalLengthMm: { marketing: [17, 85], design: [17.55, 82.48] },
    fNumber: { marketing: 4, design: 4.11 },
  },

  source: {
    patentNumber: "US 2006/0023317 A1",
    patentYear: 2006,
    authors: ["Makoto Fujimoto"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8467,
      vd: 23.9,
      focalLengthMm: -103.787953,
      glass: "847239 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Front component of the L1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.6031,
      vd: 60.6,
      focalLengthMm: 78.408224,
      glass: "603606 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Rear component of the L1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.734,
      vd: 51.5,
      focalLengthMm: 81.899735,
      glass: "734515 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Positive rear element of L1.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -14.220435,
      glass: "773496 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Strong negative front element of L2.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -23.306865,
      glass: "883408 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Negative element in the L2 focusing unit.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8052,
      vd: 25.4,
      focalLengthMm: 15.568187,
      glass: "805254 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Positive element in L2.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -27.696244,
      glass: "804466 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Rear negative element of L2.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.2,
      focalLengthMm: -26.270728,
      glass: "720502 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Front component of the first L3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.4875,
      vd: 70.2,
      focalLengthMm: 23.342132,
      glass: "487702 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Rear positive component of the first L3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.4875,
      vd: 70.2,
      focalLengthMm: 16.600005,
      glass: "487702 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Front positive component of the second L3 cemented pair.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.6889,
      vd: 31.1,
      focalLengthMm: -52.454987,
      glass: "689311 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Rear negative component of the second L3 cemented pair.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.8467,
      vd: 23.9,
      focalLengthMm: 28.304194,
      glass: "847239 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Positive component of the laterally moving L4a image-stabilizer doublet.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.762,
      vd: 40.1,
      focalLengthMm: -18.939534,
      glass: "762401 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Negative component of the L4a image-stabilizer doublet.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.6031,
      vd: 60.6,
      focalLengthMm: -65.253722,
      glass: "603606 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Single negative L4b element.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.5831,
      vd: 59.4,
      focalLengthMm: 24.048005,
      glass: "583594 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Positive G5a element with both surfaces aspherical.",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.4875,
      vd: 70.2,
      focalLengthMm: 80.747831,
      glass: "487702 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Positive G5b1 component of the weak-negative rear cemented pair.",
      cemented: "D5",
    },
    {
      id: 17,
      name: "E17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.8467,
      vd: 23.9,
      focalLengthMm: -42.325481,
      glass: "847239 optical-glass class (vendor unspecified)",
      apd: false,
      role: "Negative G5b2 component of the weak-negative rear cemented pair.",
      cemented: "D5",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 103.77, d: 1.4, sd: 25.5, medium: 1 },
    { label: "2", R: 47.288, d: 7.75, sd: 25.5, medium: 2 },
    { label: "3", R: "flat", d: 0.12, sd: 25.5 },
    { label: "4", R: 42.152, d: 5.6, sd: 24.0, medium: 3 },
    { label: "5", R: 133.136, sd: 22.0 },
    { label: "6", R: 154.643, d: 1.2, sd: 11.0, medium: 4 },
    { label: "7", R: 10.222, d: 5.02, sd: 8.15 },
    { label: "8", R: -92.741, d: 1.0, sd: 11.8, medium: 5 },
    { label: "9", R: 26.583, d: 0.15, sd: 12.5 },
    { label: "10", R: 16.82, d: 5.5, sd: 8.5, medium: 6 },
    { label: "11", R: -42.034, d: 0.05, sd: 6.85 },
    { label: "12", R: -39.123, d: 1.0, sd: 6.85, medium: 7 },
    { label: "13", R: 52.275, sd: 7.75 },
    { label: "STO", R: "flat" },
    { label: "15", R: 47.384, d: 0.8, sd: 6.75, medium: 8 },
    { label: "16", R: 13.423, d: 2.85, sd: 7.0, medium: 9 },
    { label: "17", R: -69.538, d: 0.15, sd: 7.5 },
    { label: "18", R: 22.286, d: 4.3, sd: 7.5, medium: 10 },
    { label: "19", R: -11.903, d: 0.9, sd: 7.8, medium: 11 },
    { label: "20", R: -18.297, sd: 8.5 },
    { label: "21", R: -64.282, d: 2.0, sd: 8.5, medium: 12 },
    { label: "22", R: -17.706, d: 0.8, sd: 8.5, medium: 13 },
    { label: "23", R: 79.572, d: 8.7, sd: 8.75 },
    { label: "24", R: -17.203, d: 1.2, sd: 10.5, medium: 14 },
    { label: "25", R: -31.365, sd: 11.0 },
    {
      label: "26A",
      R: 45.342,
      d: 8.25,
      sd: 14.5,
      medium: 15,
      asphere: { K: 2.291, A4: -7.384e-6, A6: 9.674e-9, A8: -1.371e-10, A10: 2.396e-13, A12: 8.332e-16, A14: 0 },
    },
    {
      label: "27A",
      R: -18.94,
      d: 2.01,
      sd: 15.5,
      asphere: { K: -0.1619, A4: 1.514e-5, A6: 3.849e-8, A8: -1.638e-10, A10: 3.147e-13, A12: 1.097e-15, A14: 0 },
    },
    { label: "28", R: -28.057, d: 3.5, sd: 13.5, medium: 16 },
    { label: "29", R: -17.051, d: 2.1, sd: 13.5, medium: 17 },
    { label: "30", R: -34.364, sd: 14.5 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and constrained focus spacings ── */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 17.55, nominalFNumber: 4.11, label: "Wide" },
      { focalLengthMm: 35.0, nominalFNumber: 4.45 },
      { focalLengthMm: 82.48, nominalFNumber: 5.77, label: "Tele" },
    ],
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.35,
    description:
      "CONSTRAINED_RECONSTRUCTION: L2-only focus solved at Canon's 0.35 m MFD with d5+d13 conserved and a fixed image plane. The numerical solution moves L2 objectward, opposite patent paragraph 0056; tele close focus predicts 0.20214x magnification.",
  },

  gaps: {
    "5": {
      label: "D5 / FOCUS",
      values: [
        [2.15, 1.0487781480941067],
        [14.6, 12.686322628426241],
        [29.74, 24.871995039508086],
      ],
    },
    "13": {
      label: "D13 / FOCUS",
      values: [
        [14.25, 15.351221851905894],
        [8.92, 10.833677371573758],
        [2.92, 7.788004960491914],
      ],
    },
    STO: {
      label: "D14",
      values: [
        [4.28, 4.28],
        [1.72, 1.72],
        [1.74, 1.74],
      ],
    },
    "20": {
      label: "D20",
      values: [
        [0.8, 0.8],
        [5.17, 5.17],
        [8.72, 8.72],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [8.51, 8.51],
        [4.14, 4.14],
        [0.59, 0.59],
      ],
    },
    "30": {
      label: "BF",
      values: [
        [38.08364034604823, 38.08364034604823],
        [45.2693624967593, 45.2693624967593],
        [50.866992562715936, 50.866992562715936],
      ],
    },
  },

  aperture: { fStops: [4, 4.5, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 6 },

  /* ── Group annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (- / FOCUS)", fromSurface: "6", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "15", toSurface: "20" },
    { text: "L4 (- / IS)", fromSurface: "21", toSurface: "25" },
    { text: "L5 (+)", fromSurface: "26A", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "L4a / IS", fromSurface: "21", toSurface: "23" },
    { text: "G5b", fromSurface: "28", toSurface: "30" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
