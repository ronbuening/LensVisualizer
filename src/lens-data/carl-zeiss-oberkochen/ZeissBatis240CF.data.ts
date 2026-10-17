/* JP 2019-191502 A, Example 1. 9 elements / 8 groups; six aspheres.
Research correlation with ZEISS Batis 2/40 CF; not manufacturer-confirmed.
PUBLISHED focus endpoints; no reconstructed marketing MFD.
Scale 1.0. Patent epsilon maps to K=epsilon-1. All published nonzero coefficients retained.
Stop radius derived from the design f-number F/2.0834, not an independently published aperture.
NAMES: the patent calls its five lens groups L1-L5 (FIG. 1, paragraph 0047, reference-sign list) and names no single
element, so the group brackets read L1-L5 and the elements are E1-E9.
NOTE ON SEMI-DIAMETERS: the patent prints no clear apertures. Rims are estimated from patent FIG. 1 (infinity
panel, 11.2 px/mm at 400 dpi; scale set by 16 vertex crossings, and the drawn stop opening reads 12.1 mm against the
derived 12.159 mm): E2 16.0, E3 13.2, E4 14.7, E5 12.7, E6 12.3, E7/E8 13.2, E9 14.2. E1 (19.2; figure 19.7) is
the as-authored value, within measurement noise of the figure. The figure draws every element square-cut, so each
carries one height on both faces; the flat lands it draws beyond the curve ends on the E1 rear, E3 front, E5 rear,
E8 rear and E9 front (curve ends 12.5) cannot be rendered. Floor-checked by real-ray trace: the stop-filling axial
beam clears every rim from infinity to the close endpoint (least margin 0.03 mm at 7A at close focus) and the corner
chief ray is clear; off-axis vignetting at the drawn rims is retained (the patent's own FIG. 2B fans are truncated
more than the model's). With both E9 faces at 14.2 the engine's paraxial half-field estimate is 28.68 deg (27.52 deg
with the front at 13.0); no real ray inside the patent's 27.44 deg field reaches surface 17 above 12.6 mm.
Patent source image plane is retained despite Gaussian focus offsets.
No source-listed rear plates. The patent heads its index column Nd and states the d-line, but the printed values
are e-line indices paired with d-line Abbe numbers: five of the nine equal HOYA/OHARA catalog ne to five decimals
(FCD1 1.49845, FDS90 1.85505, M-PCD51 1.59412, M-FCD1 1.49856, S-NBH56 1.86290). The printed values are stored
unchanged and all nine elements are e-referenced (indexReference "e"). The five carry their catalog names and trace
on catalog curves anchored to the printed index; E2, E5, E8 and E9 match no vendor row and stay Unmatched on the Abbe
estimate. The vd slot keeps the printed d-line Abbe number (catalog ve is 0.2 to 0.4 lower), which understates the
estimated dispersion of the four Unmatched elements by under 1 %. All nine must share one reference: leaving the four
d-referenced traces them at C/F beside C'/F' and moves the red and blue foci about 0.2 mm.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "zeiss-batis-40mm-f2-cf",
  maker: "Carl Zeiss Oberkochen",
  name: "ZEISS BATIS 40mm f/2 CF",
  subtitle: "JP 2019-191502 A, Example 1 — Tamron patent; research correlation with ZEISS Batis 2/40 CF",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 41.19 mm",
      "DESIGN F/2.08",
      "2ω = 54.9°",
      "6 ASPHERICAL SURFACES / 3 ELEMENTS",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 40, design: 41.19475402570067 },
    fNumber: { marketing: 2, design: 2.0834 },
  },

  source: {
    patentNumber: "JP 2019-191502 A",
    patentYear: 2019,
    authors: ["Naoyuki Sato"],
    assignees: ["Tamron Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.49845,
      vd: 81.61,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -56.98843859,
      glass: "FCD1 (HOYA; catalog ne 1.49845, vd 81.61 as printed; supplier unconfirmed)",
      role: "Front negative element of the fixed positive group L1: a nearly flat front and a strongly concave rear, both aspherical.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.94136,
      vd: 21.13,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 52.28456991,
      glass: "Unmatched (printed coordinates; no vendor row at either the d or the e line)",
      apd: "patent",
      apdNote:
        "Patent Table 1 lists this element's g-F anomalous dispersion (G1dPgF) as 0.0282, the limit of condition (3), beside vd 20.88 where the prescription prints 21.13. The pair equals HOYA E-FDS1's catalog deviation, so it is on HOYA's line: P_g,F = 0.0282 + 0.6483 - 0.0018 x 20.88 = 0.6389, which is +0.0307 from the engine's normal line at the printed vd 21.13. ZEISS's construction diagram also marks the element special glass.",
      role: "Positive element completing the fixed group L1; the patent's conditions (3) and (4) bound its anomalous dispersion and Abbe number.",
      dPgF: 0.0307,
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.85505,
      vd: 23.78,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -45.75756786,
      glass: "FDS90-SG (HOYA; catalog ne 1.85505, vd 23.78 as printed; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Patent Table 1 lists this element's g-F anomalous dispersion (G2dPgF) as 0.0137 with vd 23.78, satisfying condition (5); both figures are HOYA's catalog values for FDS90, so the deviation is on HOYA's line, not the engine's. ZEISS's construction diagram also marks the element special glass.",
      role: "Negative meniscus, concave to the object, leading the first focus group L2; the patent's conditions (5) and (6) apply to it.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.59412,
      vd: 67.02,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 26.0129493,
      glass: "M-PCD51 (HOYA; catalog ne 1.59412, vd 67.02 as printed; supplier unconfirmed)",
      role: "Double-aspheric biconvex element carrying the positive power of the first focus group L2; moves with E3 toward the object for close focus.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.80655,
      vd: 25.3,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -38.61053884,
      glass: "Unmatched (printed coordinates; no vendor row at either the d or the e line)",
      role: "Negative meniscus, convex to the object, forming the fixed group L3 directly behind the aperture stop.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.49856,
      vd: 81.56,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 37.52379197,
      glass: "M-FCD1 (HOYA; catalog ne 1.49856, vd 81.56 as printed; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ZEISS's construction diagram marks this element special glass; anomalous partial dispersion is inferred from that marking, not a patent designation.",
      role: "Double-aspheric biconvex singlet forming the second focus group L4; moves toward the object by more than L2.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.8629,
      vd: 24.8,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 43.70662239,
      glass: "S-NBH56 (OHARA; catalog ne 1.86290, vd 24.80 as printed; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ZEISS's construction diagram marks this element special glass; anomalous partial dispersion is inferred from that marking, not a patent designation.",
      role: "Positive meniscus, convex to the object, cemented to E8 at the front of the fixed negative group L5.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.65965,
      vd: 33.72,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -31.96427666,
      glass: "Unmatched (printed coordinates; no vendor row at either the d or the e line)",
      apd: "inferred",
      apdNote:
        "ZEISS's construction diagram marks this element special glass; anomalous partial dispersion is inferred from that marking, not a patent designation.",
      role: "Negative meniscus, convex to the object, cemented behind E7 in the fixed group L5.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.61599,
      vd: 38.71,
      indexReference: "e",
      indexReferenceNote:
        "Patent heads this column Nd, but five of its nine indices equal catalog e-line values; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -91.954741,
      glass: "Unmatched (printed coordinates; no vendor row at either the d or the e line)",
      role: "Rear negative meniscus, concave to the object, closing the fixed negative group L5 ahead of the image plane.",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: -1212.5063,
      d: 1.4,
      sd: 19.2,
      medium: 1,
      asphere: { K: 0, A4: 6.40958e-06, A6: -2.02463e-08, A8: 3.45386e-11, A10: -2.75776e-14, A12: 0, A14: 0 },
    },
    {
      label: "2A",
      R: 29.0985,
      d: 12.4057,
      sd: 19.2,
      asphere: { K: 0, A4: 5.65334e-06, A6: -1.4367e-08, A8: 1.97422e-11, A10: -2.41721e-14, A12: 0, A14: 0 },
    },
    { label: "3", R: 170.9861, d: 4.9865, sd: 16, medium: 2 },
    { label: "4", R: -68.1355, sd: 16 },
    { label: "5", R: -35.978, d: 1.2, sd: 13.2, medium: 3 },
    { label: "6", R: -454.1711, d: 2.5504, sd: 13.2 },
    {
      label: "7A",
      R: 25.9693,
      d: 8.1222,
      sd: 14.7,
      medium: 4,
      asphere: { K: 0, A4: -1.19932e-05, A6: -3.89527e-09, A8: -2.76725e-11, A10: 1.24792e-13, A12: 0, A14: 0 },
    },
    {
      label: "8A",
      R: -33.7218,
      sd: 14.7,
      asphere: { K: 0, A4: 1.26852e-05, A6: -1.31319e-08, A8: 1.35488e-11, A10: 8.33317e-14, A12: 0, A14: 0 },
    },
    { label: "STO", R: "flat", d: 0.2 },
    { label: "10", R: 104.2271, d: 1.0224, sd: 12.7, medium: 5 },
    { label: "11", R: 23.8723, sd: 12.7 },
    {
      label: "12A",
      R: 43.8452,
      d: 5.6989,
      sd: 12.3,
      medium: 6,
      asphere: { K: 0, A4: -1.84977e-06, A6: -5.69701e-09, A8: -3.09555e-11, A10: 6.56866e-14, A12: 0, A14: 0 },
    },
    {
      label: "13A",
      R: -31.2197,
      sd: 12.3,
      asphere: { K: 0.9661200000000001, A4: 6.29488e-06, A6: 4.80463e-11, A8: 2.02382e-11, A10: -5.09673e-14, A12: 0, A14: 0 },
    },
    { label: "14", R: 33.3772, d: 5.9035, sd: 13.2, medium: 7 },
    { label: "15", R: 266.453, d: 1.2815, sd: 13.2, medium: 8 },
    { label: "16", R: 19.5017, d: 12.2639, sd: 13.2 },
    { label: "17", R: -20.7323, d: 1.2, sd: 14.2, medium: 9 },
    { label: "18", R: -33.4231, d: 17.5658, sd: 14.2 },
  ],

  focus: {
    closeFocusM: 0.2349601,
    description:
      "PUBLISHED inner focus: L2 (E3-E4) and L4 (E6) move toward the object by 3.5169 and 4.3500 mm between the patent's infinity and close endpoints; L1, the stop, L3 and L5 stay fixed. At the close endpoint the object is 134.5124 mm ahead of the first vertex, 0.2349601 m from the image plane. Intermediate positions are interpolated, not a measured production cam. Source image-plane offsets from Gaussian focus are retained.",
  },

  gaps: {
    "4": { label: "D4", values: [[6.1277, 2.6108]] },
    "8A": { label: "D8", values: [[2.7571, 6.274]] },
    "11": { label: "D11", values: [[15.5621, 11.2121]] },
    "13A": { label: "D13", values: [[0.2, 4.55]] },
  },

  aperture: { nominalFNumber: 2.0834, fStops: [2.0834, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "L1", fromSurface: "1A", toSurface: "4" },
    { text: "L2 focus", fromSurface: "5", toSurface: "8A" },
    { text: "L3", fromSurface: "10", toSurface: "11" },
    { text: "L4 focus", fromSurface: "12A", toSurface: "13A" },
    { text: "L5", fromSurface: "14", toSurface: "18" },
  ],
  doublets: [{ text: "D1", fromSurface: "14", toSurface: "16" }],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
