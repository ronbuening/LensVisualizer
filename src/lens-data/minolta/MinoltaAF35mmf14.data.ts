import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║             LENS DATA — MINOLTA AF 35mm f/1.4                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,806,003, Example 2 (Mukai / Tokumaru; Minolta). ║
 * ║  Production correlation: original Minolta AF / Maxxum AF 35/1.4.  ║
 * ║  10 elements / 8 air-separated groups, one aspherical surface.    ║
 * ║                                                                    ║
 * ║  SCALE: the patent is normalized to f=100. All dimensional values ║
 * ║  are scaled ×0.35 to the marketed 35 mm focal length. Polynomial  ║
 * ║  asphere terms use A_p,scaled=A_p,patent/0.35^(p-1); K is fixed.   ║
 * ║                                                                    ║
 * ║  FOCUS STATUS: CONSTRAINED_RECONSTRUCTION. GI is fixed. GII       ║
 * ║  (E4–E6) and GIII (E7–E10) move objectward, with x3=1.43*x2,     ║
 * ║  using the embodiment-specific Table-2 R=1.43 branch and          ║
 * ║  beta=-0.175. The image plane is fixed. The patent's Fig. 7 text  ║
 * ║  instead states R=1.15; that source contradiction is preserved.   ║
 * ║                                                                    ║
 * ║  STOP: Table 2 does not numerically split d11 or give a stop      ║
 * ║  diameter. Fig. 5 places S within d11 and the prose states that S ║
 * ║  moves with GII. The model places S approximately one-third of    ║
 * ║  d11 imageward of r11, based on the figure. r11→STO therefore     ║
 * ║  stays fixed during focus; STO→r12 carries the remaining d11      ║
 * ║  change. STO semi-diameter is solved paraxially so the modeled    ║
 * ║  entrance pupil gives the patent FNO=1.45.                         ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: Example 2 publishes no aperture heights. SDs are ║
 * ║  inferred from the Fig. 5 silhouette, the f/1.45 marginal bundle, ║
 * ║  full-field chief rays, and exact meridional traces at the         ║
 * ║  viewer's default 0.6-field / ±0.75-pupil rays. They are then     ║
 * ║  constrained by edge thickness, actual rim slope, shared-gap      ║
 * ║  intrusion, and both infinity and reconstructed close states.     ║
 * ║  The r11/r12 boundary SDs are 13.5 mm to clear the close state.    ║
 * ║                                                                    ║
 * ║  GLASS: the patent gives only Nd/vd and no vendor. Glass strings   ║
 * ║  therefore use conservative code/class, proxy, or Unmatched labels.║
 * ║  nC, nF, ng, and dPgF are intentionally omitted: the patent does  ║
 * ║  not publish them and no vendor identity is established.          ║
 * ║                                                                    ║
 * ║  SOURCE ERRORS PRESERVED IN AUDIT: printed Sigma-d=229.577 vs     ║
 * ║  229.308 from the individual spacings; Table-2 -f1/f2=3.000 vs   ║
 * ║  1.995057 computed; condition-(3) 0.25/0.35 upper-limit conflict; ║
 * ║  and the R=1.43 / R=1.15 close-focus contradiction.               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-af-35mm-f14",
  maker: "Minolta",
  name: "MINOLTA AF 35mm f/1.4",
  subtitle: "US 4,806,003 — Example 2; production-correlated, 0.35× scaled",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "35mm MARKETED / 34.983 mm DESIGN",
    "f/1.4 MARKETED / F/1.45 DESIGN",
    "2ω = 64° PATENT FIELD",
    "1 ASPHERICAL SURFACE",
    "DOUBLE-FLOATING REAR FOCUS",
  ],
  focalLengthMarketing: 35,
  focalLengthDesign: 34.983445722,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,806,003",
  patentAuthors: ["Hiromu Mukai", "Hisashi Tokumaru"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1989,
  elementCount: 10,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "L1 / Element 1",
      type: "Negative Meniscus",
      nd: 1.6228,
      vd: 56.98,
      indexReference: "d",
      fl: -69.653802,
      glass: "623570 SK10-class (vendor unresolved)",
      role: "Front negative meniscus of fixed negative group GI.",
    },
    {
      id: 2,
      name: "E2",
      label: "L2 / Element 2",
      type: "Biconcave Negative",
      nd: 1.6172,
      vd: 54,
      indexReference: "d",
      fl: -56.793881,
      glass: "617540 SSK1-class (vendor unresolved)",
      role: "Second negative element of fixed group GI.",
    },
    {
      id: 3,
      name: "E3",
      label: "L3 / Element 3",
      type: "Biconvex Positive",
      nd: 1.7885,
      vd: 45.68,
      indexReference: "d",
      fl: 49.743878,
      glass: "Unmatched (nd=1.78850, vd=45.68)",
      role: "Positive rear element of fixed group GI.",
    },
    {
      id: 4,
      name: "E4",
      label: "L4 / Element 4",
      type: "Biconvex Positive",
      nd: 1.7885,
      vd: 45.68,
      indexReference: "d",
      fl: 67.005266,
      glass: "Unmatched (nd=1.78850, vd=45.68)",
      role: "Positive front element of moving group GII.",
    },
    {
      id: 5,
      name: "E5",
      label: "L5a / Element 5",
      type: "Biconvex Positive",
      nd: 1.765,
      vd: 46.25,
      indexReference: "d",
      fl: 24.667375,
      glass: "Q-LASFPH2S coefficient proxy (supplier unspecified; patent 1.76500/46.25)",
      cemented: "D1",
      role: "Positive constituent of the weakly negative cemented L5 component in GII.",
    },
    {
      id: 6,
      name: "E6",
      label: "L5b / Element 6",
      type: "Biconcave Negative",
      nd: 1.72342,
      vd: 37.88,
      indexReference: "d",
      fl: -20.812694,
      glass: "723380 BAF/BASF-class (vendor unresolved)",
      cemented: "D1",
      role: "Negative constituent of the weakly negative cemented L5 component in GII.",
    },
    {
      id: 7,
      name: "E7",
      label: "L6a / Element 7",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.51,
      indexReference: "d",
      fl: -21.20495,
      glass: "755275 SF4/TIH4-class (vendor unresolved)",
      cemented: "D2",
      role: "High-dispersion negative constituent of the cemented L6 component in GIII.",
    },
    {
      id: 8,
      name: "E8",
      label: "L6b / Element 8",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      fl: 34.38138,
      glass: "720503 LAK10/LAC10-class (vendor unresolved)",
      cemented: "D2",
      role: "Low-dispersion positive constituent of the negative cemented L6 component in GIII.",
    },
    {
      id: 9,
      name: "E9",
      label: "L7 / Element 9",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      fl: 209.74434,
      glass: "720503 LAK10/LAC10-class (vendor unresolved)",
      role: "Weak positive meniscus in GIII; rear surface r16 is aspherical.",
    },
    {
      id: 10,
      name: "E10",
      label: "L8 / Element 10",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      fl: 44.020599,
      glass: "720503 LAK10/LAC10-class (vendor unresolved)",
      role: "Rear positive element of GIII.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 83.9531, d: 1.8774, nd: 1.6228, elemId: 1, sd: 20.5 },
    { label: "2", R: 28.35595, d: 10.0562, nd: 1, elemId: 0, sd: 19.1 },
    { label: "3", R: -100.19065, d: 1.9719, nd: 1.6172, elemId: 2, sd: 18.3 },
    { label: "4", R: 54.32175, d: 3.45065, nd: 1, elemId: 0, sd: 18.3 },
    { label: "5", R: 54.4131, d: 6.4085, nd: 1.7885, elemId: 3, sd: 19.2 },
    { label: "6", R: -133.20755, d: 7.88725, nd: 1, elemId: 0, sd: 19.2 },
    { label: "7", R: 62.13445, d: 5.817, nd: 1.7885, elemId: 4, sd: 17.9 },
    { label: "8", R: -338.3898, d: 0.19705, nd: 1, elemId: 0, sd: 17.6 },
    { label: "9", R: 40.1443, d: 9.85915, nd: 1.765, elemId: 5, sd: 16.9 },
    { label: "10", R: -31.81885, d: 1.97225, nd: 1.72342, elemId: 6, sd: 16.9 },
    { label: "11", R: 29.3237, d: 3.943683333333333, nd: 1, elemId: 0, sd: 13.5 },
    // Stop position inferred from Fig. 5: approximately 1/3 of the original d11 gap from r11 toward r12.
    { label: "STO", R: 1e15, d: 7.887366666666666, nd: 1, elemId: 0, sd: 12.684073075931 },
    { label: "12", R: -20.0179, d: 1.9719, nd: 1.7552, elemId: 7, sd: 13.5 },
    { label: "13", R: 83.45645, d: 6.4085, nd: 1.72, elemId: 8, sd: 15.2 },
    { label: "14", R: -34.06235, d: 0.19705, nd: 1, elemId: 0, sd: 15.2 },
    { label: "15", R: -86.32715, d: 3.45065, nd: 1.72, elemId: 9, sd: 16 },
    { label: "16A", R: -55.84705, d: 0.19705, nd: 1, elemId: 0, sd: 16 },
    { label: "17", R: 403.96055, d: 6.70425, nd: 1.72, elemId: 10, sd: 17 },
    { label: "18", R: -34.1544, d: 36.740699721252, nd: 1, elemId: 0, sd: 17 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "16A": {
      K: 0,
      A4: 6.822390670553938e-6,
      A6: 6.993847801511277e-9,
      A8: -7.272227436818725e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (focus mechanism) ── */
  var: {
    "6": [7.88725, 2.982297621638],
    STO: [7.887366666667, 5.778237143971],
    "18": [36.740699721252, 43.75478162231],
  },
  varLabels: [
    ["6", "D6"],
    ["STO", "D11 (STO→GIII)"],
    ["18", "BF"],
  ],

  /* ── Group and cemented-component annotations ── */
  groups: [
    { text: "GI", fromSurface: "1", toSurface: "6" },
    { text: "GII", fromSurface: "7", toSurface: "11" },
    { text: "GIII", fromSurface: "12", toSurface: "18" },
  ],
  doublets: [
    { text: "L5", fromSurface: "9", toSurface: "11" },
    { text: "L6", fromSurface: "12", toSurface: "14" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: GI is fixed; GII (E4-E6) and GIII (E7-E10) translate objectward with x3/x2=1.43 from Table 2, solved to beta=-0.175 at a fixed image plane. The stop moves with GII. The reconstructed image-plane-to-object distance is 0.30874 m; Minolta specifies 0.3 m minimum focus. Fig. 7 text states R=1.15, contradicting Table 2 and therefore not used for the primary model.",

  /* ── Aperture configuration ── */
  nominalFno: 1.45,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
