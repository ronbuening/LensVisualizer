import type { LensDataV2Input } from "../../types/lensDataV2.js";

/* US 2025/0334778 A1 Numerical Example 2, Sigma Corporation / Ryosuke Sato.
 * Source-native 17 elements / 13 groups, eight aspheric surfaces, unit scale.
 * PUBLISHED focus endpoints: infinity and 1477 mm heading (1477.4622 mm from
 * printed spacings). G2/G4 move objectward. Interpolation is an approximation;
 * no production 0.28 m cam law is inferred. The literal gap pairs leave a
 * -0.0004 mm shift of nominally fixed G3; its cause is unresolved and no
 * gap correction is made.
 * SEMI-DIAMETERS: estimated from Figure 6 (PDF p7 at 300 dpi, 18.36 px/mm from
 * the tabulated vertex spacings) and floor-checked by exact ray trace; not
 * published clear apertures. Concave faces 4 and 29 end where the figure's flat
 * annulus begins (17.7 and 14.7 mm), so L2 and L16 draw a chamfered edge; faces
 * 2 and 9 keep the drawn rim height. G4 follows its drawn 19.3-19.5 mm rim and
 * L17 its 16.3 mm rim. L4's front face 7 follows its drawn 15.2 mm rim; its
 * rear face 8 stays at 14.5 mm (bowl end 14.0 mm, axial ray 14.09 mm), because
 * the gap rule against face 9 rejects more than 14.6 mm there. STO location is
 * published; its radius is derived from the design f-number F1.24 by exact
 * tracing.
 * LABELS: the patent names groups G1, G2, G3 (G3a / stop S / G3b), G4, G5 and
 * no individual elements, so the brackets use its group notation and L1-L17
 * are sequential. apd "patent" on L6, L11 and L15 follows paragraphs 0061-0070
 * and 0101-0111, which specify high-anomalous-dispersion glass for the positive
 * lenses of conditions (9), (8) and (2).
 * Absolute source PgF is converted to dPgF using the engine normal line,
 * 0.6438 - 0.001682*vd. No spectral line indices or glass supplier are invented.
 * No source-listed rear plate or dummy plane exists. No source correction.
 * Factory-prescription identity is unconfirmed; production correlation only.
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-35mm-f12-dg-ii-art",
  maker: "Sigma",
  name: "SIGMA 35mm f/1.2 DG II | Art",
  subtitle: "US 2025/0334778 A1 — Numerical Example 2; production construction correlation",

  catalog: {
    lensMounts: ["l-mount", "sony-fe"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.26,
    specs: ["17 ELEMENTS / 13 GROUPS", "DESIGN f = 34.60 mm", "DESIGN F/1.24", "8 ASPHERICAL SURFACES / 4 ELEMENTS"],
    elementCount: 17,
    groupCount: 13,
    focalLengthMm: { marketing: 35, design: 34.6005730731 },
    fNumber: { marketing: 1.2, design: 1.24 },
  },

  source: {
    patentNumber: "US 2025/0334778 A1",
    patentYear: 2025,
    authors: ["Ryosuke Sato"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: 265.451863,
      glass: "FD225 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed front group G1 (the whole group; patent group f = +265.45 mm); standalone positive power.",
      dPgF: 0.02318232,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -61.024396,
      glass: "E-FEL2 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Front focus group G2, which moves toward the object for close focus; standalone negative power.",
      dPgF: 0.0033904,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: 56.06063,
      glass: "NBFD13 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Front focus group G2, which moves toward the object for close focus; standalone positive power.",
      dPgF: -0.00589214,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: -51.990103,
      glass: "FC5 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed group G3, negative sub-group G3a ahead of the stop; standalone negative power.",
      dPgF: 0.00528008,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      focalLengthMm: -37.039241,
      glass: "E-FD15 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed group G3, negative sub-group G3a ahead of the stop; standalone negative power.",
      cemented: "D1",
      dPgF: 0.0095441,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.94594,
      vd: 17.98,
      focalLengthMm: 56.236396,
      glass: "FDS18-W class (HOYA coordinate equivalent; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Patent ¶0101–0103 and ¶0109–0111: the lowest-Abbe positive lens of G3 is a high-index, high-dispersion glass with high anomalous dispersion; condition (9) θgF − 0.6483 + 0.0018·νd > 0.0200, printed 0.0387 for Example 2. Source θgF 0.6546; runtime dPgF +0.04104.",
      role: "Fixed group G3, negative sub-group G3a ahead of the stop; standalone positive power. The lowest-Abbe positive lens of G3 in patent condition (9).",
      cemented: "D1",
      dPgF: 0.04104236,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.77377,
      vd: 47.17,
      focalLengthMm: 41.779603,
      glass: "M-TAF401 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed group G3, positive sub-group G3b behind the stop; standalone positive power.",
      dPgF: -0.00876006,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7888,
      vd: 28.43,
      focalLengthMm: -38.423866,
      glass: "S-NBH58 class (OHARA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed group G3, positive sub-group G3b behind the stop; standalone negative power.",
      cemented: "D2",
      dPgF: 0.00491926,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 60.657377,
      glass: "TAC6L class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed group G3, positive sub-group G3b behind the stop; standalone positive power.",
      cemented: "D2",
      dPgF: -0.00849776,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -67.576374,
      glass: "NBFD25 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed group G3, positive sub-group G3b behind the stop; standalone negative power.",
      cemented: "D3",
      dPgF: 0.0088023,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 36.7992,
      glass: "FCD515 class (HOYA coordinate equivalent; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Patent ¶0101–0108: the highest-Abbe positive lens of G3 is a low-index, low-dispersion glass with high anomalous dispersion; condition (8) θgF − 0.6483 + 0.0018·νd > 0.0120, printed 0.0192 for Example 2. Source θgF 0.5440; runtime dPgF +0.01562. Sigma lists one SLD element without naming its position; this FCD515-class lens is the likely one, by inference only.",
      role: "Fixed group G3, positive sub-group G3b behind the stop; standalone positive power. The highest-Abbe positive lens of G3 in patent condition (8).",
      cemented: "D3",
      dPgF: 0.01561884,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      focalLengthMm: -169.899519,
      glass: "E-FD15 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Rear focus group G4, which moves toward the object for close focus; standalone negative power.",
      dPgF: 0.0095441,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.7645,
      vd: 49.09,
      focalLengthMm: 38.688914,
      glass: "L-LAH91 class (OHARA coordinate equivalent; supplier unconfirmed)",
      role: "Rear focus group G4, which moves toward the object for close focus; standalone positive power.",
      dPgF: -0.00843062,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 102.710602,
      glass: "TAC6L class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed rear group G5; standalone positive power.",
      dPgF: -0.00849776,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.98612,
      vd: 16.48,
      focalLengthMm: 43.43823,
      glass: "FDS16-W class (HOYA coordinate equivalent; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Patent ¶0061–0070: the lowest-Abbe positive lens of G5 is a high-index, high-dispersion glass with high anomalous dispersion; conditions (2) θgF − 0.6483 + 0.0018·νd > 0.0250 and (3) νd < 24.00, printed 0.0470 and 16.48 for Example 2. Source θgF 0.6656; runtime dPgF +0.04952.",
      role: "Fixed rear group G5; standalone positive power. The lowest-Abbe positive lens of G5 in patent conditions (2)–(3).",
      cemented: "D4",
      dPgF: 0.04951936,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.7888,
      vd: 28.43,
      focalLengthMm: -23.411813,
      glass: "S-NBH58 class (OHARA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed rear group G5; standalone negative power.",
      cemented: "D4",
      dPgF: 0.00491926,
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative (2x Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: -169.956281,
      glass: "M-TAFD305 class (HOYA coordinate equivalent; supplier unconfirmed)",
      role: "Fixed rear group G5; standalone negative power.",
      dPgF: -0.0068518,
    },
  ],

  surfaces: [
    { label: "1", R: 82.3764, d: 3.9192, sd: 29.5, medium: 1 },
    { label: "2", R: 130.8893, sd: 29.5 },
    { label: "3", R: 114.6913, d: 0.9, sd: 22.5, medium: 2 },
    { label: "4", R: 25.5542, d: 6.8043, sd: 17.7 },
    {
      label: "5A",
      R: 56.8249,
      d: 5.0982,
      sd: 18.4,
      medium: 3,
      asphere: { K: 0, A4: -1.99816e-06, A6: -1.32897e-09, A8: -2.08157e-11, A10: 3.9595e-15, A12: 0, A14: 0 },
    },
    {
      label: "6A",
      R: -211.8812,
      sd: 18.4,
      asphere: { K: 0, A4: -4.72277e-07, A6: -3.3885e-10, A8: -2.11984e-11, A10: 2.3176e-14, A12: 0, A14: 0 },
    },
    { label: "7", R: -148.2676, d: 1.1795, sd: 15.2, medium: 4 },
    { label: "8", R: 30.65, d: 7.5007, sd: 14.5 },
    { label: "9", R: -36.554, d: 1.7147, sd: 18.0, medium: 5 },
    { label: "10", R: 90.4412, d: 4.6177, sd: 18.0, medium: 6 },
    { label: "11", R: -125.9694, d: 0.8682, sd: 18.5 },
    { label: "STO", R: "flat", d: 2.1148 },
    {
      label: "13A",
      R: 90.0023,
      d: 9.1378,
      sd: 21.5,
      medium: 7,
      asphere: { K: 0, A4: -1.03559e-06, A6: -1.87709e-09, A8: -7.13483e-12, A10: 1.19593e-14, A12: 0, A14: 0 },
    },
    {
      label: "14A",
      R: -48.2139,
      d: 0.2057,
      sd: 21.5,
      asphere: { K: 0, A4: 7.7168e-07, A6: -1.40925e-09, A8: -8.22545e-12, A10: 9.14549e-15, A12: 0, A14: 0 },
    },
    { label: "15", R: -138.5636, d: 1.0225, sd: 21.1, medium: 8 },
    { label: "16", R: 38.9207, d: 6.5952, sd: 21.4, medium: 9 },
    { label: "17", R: 240.3404, d: 0.6848, sd: 21.4 },
    { label: "18", R: 52.3045, d: 1.0136, sd: 21.5, medium: 10 },
    { label: "19", R: 27.2, d: 12.8779, sd: 20.8, medium: 11 },
    { label: "20", R: -90.7789, sd: 20.8 },
    { label: "21", R: -848.1912, d: 0.9, sd: 19.5, medium: 12 },
    { label: "22", R: 138.144, d: 0.15, sd: 19.5 },
    {
      label: "23A",
      R: 46.2651,
      d: 7.6904,
      sd: 19.3,
      medium: 13,
      asphere: { K: 0, A4: -1.71933e-06, A6: 7.19596e-10, A8: -1.65373e-11, A10: 1.66871e-14, A12: 0, A14: 0 },
    },
    {
      label: "24A",
      R: -76.0969,
      sd: 19.3,
      asphere: { K: 0, A4: 3.82753e-06, A6: -5.16977e-09, A8: -8.71093e-12, A10: 1.35974e-14, A12: 0, A14: 0 },
    },
    { label: "25", R: 296.4918, d: 3.4967, sd: 18.9, medium: 14 },
    { label: "26", R: -104.4793, d: 0.1532, sd: 18.9 },
    { label: "27", R: 820.4806, d: 4.6992, sd: 17.8, medium: 15 },
    { label: "28", R: -45.0663, d: 1.0168, sd: 17.8, medium: 16 },
    { label: "29", R: 31.6, d: 5.3461, sd: 14.7 },
    {
      label: "30A",
      R: -169.2643,
      d: 1.2141,
      sd: 16.3,
      medium: 17,
      asphere: { K: 0, A4: 2.91423e-05, A6: -2.82416e-07, A8: 6.89447e-10, A10: -5.1977e-13, A12: 0, A14: 0 },
    },
    {
      label: "31A",
      R: 1000.0,
      d: 17.4972,
      sd: 16.3,
      asphere: { K: 0, A4: 4.31949e-05, A6: -2.72422e-07, A8: 7.46965e-10, A10: -4.3181e-13, A12: -6.05302e-16, A14: 0 },
    },
  ],

  focus: {
    closeFocusM: 1.4774622,
    keyframes: [0, 1],
    description:
      "Published two-group inner focus: G2 (L2–L3) moves 0.5258 mm and G4 (L12–L13) 0.6211 mm toward the object between infinity and the patent's 1.477 m test state. G1, G3 (G3a, stop, G3b) and G5 stay fixed, apart from a −0.0004 mm G3 residual in the printed gaps. Intermediate gaps are linearly interpolated; nothing is extrapolated to the marketed 0.28 m MFD.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 1348.7267,
        distanceReference: "first-surface",
        source: "US 2025/0334778 A1, Numerical Example 2, PDF p43, Variable distance data: d0 and d2/d6/d20/d24/BF.",
      },
    ],
  },

  gaps: {
    "2": { label: "D2", values: [[7.5696, 7.0438]] },
    "6A": { label: "D6", values: [[3.5035, 4.0289]] },
    "20": { label: "D20", values: [[6.9518, 6.3311]] },
    "24A": { label: "D24", values: [[2.2921, 2.9132]] },
  },

  aperture: {
    nominalFNumber: 1.24,
    fStops: [1.24, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 11,
    bladeRoundedness: 1,
  },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (+) focus", fromSurface: "3", toSurface: "6A" },
    { text: "G3a (−)", fromSurface: "7", toSurface: "11" },
    { text: "G3b (+)", fromSurface: "13A", toSurface: "20" },
    { text: "G4 (+) focus", fromSurface: "21", toSurface: "24A" },
    { text: "G5 (−)", fromSurface: "25", toSurface: "31A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "27", toSurface: "29" },
  ],

  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
