import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 16mm f/1.4 R WR                           ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2016/0282590 A1, Example 1 (FUJIFILM Corporation).        ║
 * ║ Native-scale d-line prescription; 13 elements / 11 physical groups.       ║
 * ║ Four aspherical surfaces on L12 and L23.                                  ║
 * ║ Focus status: PUBLISHED. G1 is fixed; G2 and G3 move objectward on         ║
 * ║ distinct paths. Infinity, middle, and close spacings are patent Table 3.   ║
 * ║ Only focusPositions[1] is inferred from the solved conjugate-distance      ║
 * ║ ratio; it is a UI interpolation coordinate, not a published mechanism     ║
 * ║ coordinate.                                                                ║
 * ║                                                                            ║
 * ║ PP normalization: optional patent plate PP (2.8500 mm, nd=1.51680) and    ║
 * ║ its 2.1206 mm rear air gap are omitted. S25 d/var preserve the patent     ║
 * ║ image plane with DD25 + 2.8500/1.51680 + 2.1206 air-equivalent spacing.   ║
 * ║                                                                            ║
 * ║ Stop: patent surface 16 fixes the axial stop position but not its size.    ║
 * ║ STO sd=7.71377475 mm is inferred from the infinity design FNo=1.44.       ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent does not tabulate clear apertures. SDs were     ║
 * ║ inferred from the native-scale Figure 1 silhouette and ray envelopes, then ║
 * ║ checked by code for edge thickness, actual rim slope, conic limits,        ║
 * ║ shared-band cross-gap clearance, and exact 0.6-field ray containment in    ║
 * ║ all three published focus states.                                          ║
 * ║                                                                            ║
 * ║ Glass: nd/nu_d are patent values. Catalog names marked class/inferred are  ║
 * ║ coordinate matches, not supplier identities. No nC/nF/ng/dPgF fields are  ║
 * ║ authored because the patent does not publish per-element line data.        ║
 * ║                                                                            ║
 * ║ Manufacturer metadata: FUJIFILM XF16mmF1.4 R WR specifications/manual;    ║
 * ║ marketed 16 mm, F1.4, X mount, APS-C, 0.15 m MFD, 0.21× maximum ratio.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Product specifications:
 * https://dl.fujifilm-x.com/support/manual/lenses/lens_xf14_xf16_xf23_manual_02.pdf
 * Release record:
 * https://mall-jp.fujifilm.com/shop/g/g16641210/
 */

const LENS_DATA = {
  key: "fujifilm-fujinon-xf-16mm-f14-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 16mm f/1.4 R WR",
  subtitle: "US 2016/0282590 A1 Example 1 — native-scale production correlation",
  specs: [
    "13 ELEMENTS / 11 GROUPS",
    "16 mm f/1.4 (MARKETED)",
    "f = 16.475660 mm / FNo = 1.44 (DESIGN)",
    "81.8° DESIGN FULL FIELD",
    "4 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 16,
  focalLengthDesign: 16.47566007184229,
  apertureMarketing: 1.4,
  apertureDesign: 1.44,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2016/0282590 A1",
  patentAuthors: ["Hiroki Saito", "Takashi Suzuki"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2016,
  elementCount: 13,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      apd: "inferred",
      apdNote: "Compatible J-SF03 catalog curve gives dPgF approximately 0.01772; patent publishes nd/vd only. APD is a proxy inference, not a production material identification.",
      fl: -43.551861,
      glass: "847238 — high-index flint class (vendor indeterminate)",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.37,
      fl: -56.805960,
      glass: "S-BAL42 class (OHARA; patent vendor unspecified)",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.24,
      fl: -52.276778,
      glass: "S-FSL5 class (OHARA; patent vendor unspecified)",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 2.00100,
      vd: 29.13,
      fl: 29.021076,
      glass: "001291 — high-index lanthanum-flint class (vendor indeterminate)",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.43,
      fl: -78.099495,
      glass: "S-NSL36 class (OHARA; coordinate match)",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L16",
      diagramLabel: "L16",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.88300,
      vd: 40.76,
      fl: 33.900634,
      glass: "S-LAH58 class (OHARA; patent vendor unspecified)",
    },
    {
      id: 7,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.81600,
      vd: 46.62,
      fl: 30.669791,
      glass: "S-LAH59 class (OHARA; patent vendor unspecified)",
    },
    {
      id: 8,
      name: "L22",
      diagramLabel: "L22",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 18.90,
      apd: "inferred",
      apdNote: "Compatible H-ZF72A catalog curve gives dPgF approximately 0.03786; patent publishes nd/vd only. APD is a proxy inference, not a production material identification.",
      fl: -26.940753,
      glass: "923189 — high-index flint class (vendor indeterminate)",
    },
    {
      id: 9,
      name: "L23",
      diagramLabel: "L23",
      label: "Element 9",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.80348,
      vd: 40.45,
      fl: -305.775435,
      glass: "Unmatched (nd=1.80348, nu_d=40.45; no defensible current public-catalog identity)",
    },
    {
      id: 10,
      name: "L24",
      diagramLabel: "L24",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      apd: "inferred",
      apdNote: "Compatible FCD515 catalog curve gives dPgF approximately 0.01573; patent publishes nd/vd only. APD is a proxy inference, not a production material identification.",
      fl: 27.531683,
      glass: "593686 — low-dispersion class (HOYA FCD505/FCD515 unresolved by nd/nu_d)",
      cemented: "C2",
    },
    {
      id: 11,
      name: "L25",
      diagramLabel: "L25",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.79,
      fl: -63.794482,
      glass: "S-TIM22 class (OHARA; coordinate match)",
      cemented: "C2",
    },
    {
      id: 12,
      name: "L26",
      diagramLabel: "L26",
      label: "Element 12",
      type: "Plano-Convex Positive",
      nd: 1.49700,
      vd: 81.61,
      apd: "inferred",
      apdNote: "Compatible H-FK61 catalog curve gives dPgF approximately 0.03148; patent publishes nd/vd only. APD is a proxy inference, not a production material identification.",
      fl: 34.940443,
      glass: "497816 — low-dispersion/ED class (vendor indeterminate)",
    },
    {
      id: 13,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.94595,
      vd: 17.98,
      apd: "inferred",
      apdNote: "Compatible FDS18 catalog curve gives dPgF approximately 0.04101; patent publishes nd/vd only. APD is a proxy inference, not a production material identification.",
      fl: -98.195602,
      glass: "946180 — high-index flint class (vendor indeterminate)",
    },
  ],

  surfaces: [
    { label: "1", R: 38.3268, d: 2.2000, nd: 1.84666, elemId: 1, sd: 20 },
    { label: "2", R: 18.2985, d: 6.4628, nd: 1.0, elemId: 0, sd: 15.7 },
    { label: "3A", R: 101.4033, d: 1.8000, nd: 1.58313, elemId: 2, sd: 17.4 },
    { label: "4A", R: 24.8055, d: 8.1652, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "5", R: -54.0691, d: 1.2000, nd: 1.48749, elemId: 3, sd: 16.1 },
    { label: "6", R: 48.5554, d: 0.7482, nd: 1.0, elemId: 0, sd: 14 },
    { label: "7", R: 70.2046, d: 5.4400, nd: 2.00100, elemId: 4, sd: 15.1 },
    { label: "8", R: -47.6350, d: 1.3800, nd: 1.51742, elemId: 5, sd: 15.1 },
    { label: "9", R: 269.0688, d: 0.1436, nd: 1.0, elemId: 0, sd: 15.1 },
    { label: "10", R: 28.1259, d: 5.3500, nd: 1.88300, elemId: 6, sd: 14.9 },
    { label: "11", R: 424.0469, d: 5.5671, nd: 1.0, elemId: 0, sd: 14.9 },
    { label: "12", R: 23.0504, d: 3.3200, nd: 1.81600, elemId: 7, sd: 10.3 },
    { label: "13", R: 273.0245, d: 0.1300, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "14", R: 49.5397, d: 1.0000, nd: 1.92286, elemId: 8, sd: 10.1 },
    { label: "15", R: 16.3940, d: 4.3829, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "STO", R: 1e15, d: 3.8277, nd: 1.0, elemId: 0, sd: 7.713774749562 }, // patent stop position; sd inferred from infinity FNo
    { label: "17A", R: -11.7384, d: 1.8700, nd: 1.80348, elemId: 9, sd: 9 },
    { label: "18A", R: -13.2023, d: 1.1383, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "19", R: -29.6767, d: 4.5200, nd: 1.59282, elemId: 10, sd: 9 },
    { label: "20", R: -11.1270, d: 1.3000, nd: 1.64769, elemId: 11, sd: 9.5 },
    { label: "21", R: -15.9271, d: 0.1300, nd: 1.0, elemId: 0, sd: 9.3 },
    { label: "22", R: 1e15, d: 6.0100, nd: 1.49700, elemId: 12, sd: 11.8 },
    { label: "23", R: -17.3654, d: 1.0017, nd: 1.0, elemId: 0, sd: 10.9 },
    { label: "24", R: 125.9601, d: 2.8000, nd: 1.94595, elemId: 13, sd: 12.2 },
    { label: "25", R: 52.8849, d: 17.744055696203, nd: 1.0, elemId: 0, sd: 12.1 }, // DD25 + PP air-equivalent + PP rear air
  ],

  asph: {
    "3A": {
      K: 2.0752596,
      A3: -2.65317480e-04,
      A4: 1.12981170e-04,
      A5: 4.10267740e-05,
      A6: -9.45556540e-06,
      A7: 6.14952850e-07,
      A8: -9.26077340e-10,
      A9: -3.20788170e-10,
      A10: -1.00291110e-10,
      A11: 1.07747640e-12,
      A12: 3.31836040e-13,
      A13: 1.99930120e-14,
      A14: -1.57000080e-15,
      A15: -8.12198830e-17,
      A16: 2.03517290e-18,
      A17: 3.81886310e-19,
      A18: -1.12509580e-20,
      A19: -3.02462450e-22,
      A20: 1.04935450e-23,
    },
    "4A": {
      K: -0.00423896,
      A3: -3.49579070e-04,
      A4: 1.14317460e-04,
      A5: 5.62309750e-05,
      A6: -1.36256260e-05,
      A7: 1.04810890e-06,
      A8: -1.41160310e-08,
      A9: -8.73869140e-10,
      A10: -1.18031060e-10,
      A11: 5.49178780e-12,
      A12: 4.56661300e-13,
      A13: 1.26084060e-14,
      A14: -2.84848820e-15,
      A15: -7.25137130e-17,
      A16: 5.65534640e-18,
      A17: 5.32699600e-19,
      A18: -2.41523880e-20,
      A19: -4.48611060e-22,
      A20: 2.23842820e-23,
    },
    "17A": {
      K: -0.51438177,
      A3: -1.35575240e-05,
      A4: 4.00452570e-06,
      A5: -2.71706850e-05,
      A6: 8.92469580e-06,
      A7: -4.66642640e-07,
      A8: -1.43156160e-07,
      A9: 9.74088520e-09,
      A10: 7.51304580e-09,
      A11: -2.09959640e-10,
      A12: -3.43066120e-10,
      A13: 4.18584360e-11,
      A14: -7.36628980e-13,
      A15: 1.92274670e-13,
      A16: -3.96197070e-14,
      A17: -1.69503000e-15,
      A18: 6.02555680e-16,
      A19: -3.25377370e-17,
      A20: 4.40635320e-19,
    },
    "18A": {
      K: -0.21846116,
      A3: 7.08777250e-05,
      A4: 4.32872590e-05,
      A5: 2.10669970e-05,
      A6: -5.39885280e-06,
      A7: 6.46388730e-07,
      A8: 1.36003750e-07,
      A9: -7.81075960e-09,
      A10: -5.09421830e-09,
      A11: 6.91239770e-11,
      A12: 1.93294200e-10,
      A13: -2.07214340e-11,
      A14: 1.38928550e-13,
      A15: -9.55898300e-14,
      A16: 2.05997680e-14,
      A17: 1.09518530e-15,
      A18: -3.16334470e-16,
      A19: 1.37786480e-17,
      A20: -4.49166620e-20,
    },
  },

  focusPositions: [0, 0.24994136650337306, 1],
  var: {
    "11": [5.5671, 5.0428, 2.3627],
    "23": [1.0017, 1.066, 1.9168],
    "25": [17.74405569620253, 18.20405569620253, 20.03335569620253],
  },
  varLabels: [
    ["11", "DD11"],
    ["23", "DD23"],
    ["25", "AIR-EQUIV BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "23" },
    { text: "G3", fromSurface: "24", toSurface: "25" },
  ],
  doublets: [
    { text: "C1", fromSurface: "7", toSurface: "9" },
    { text: "C2", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 0.15,
  focusDescription: "PUBLISHED floating focus: G1 fixed; G2 and G3 move objectward on distinct paths. Infinity/middle/close spacings are patent Table 3; focusPositions[1]=0.2499413665 is a solved UI coordinate. Optional PP is omitted with air-equivalent S25 rear spacing.",

  nominalFno: 1.44,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
