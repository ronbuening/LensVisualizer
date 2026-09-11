import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON GF 50mm f/3.5 R LM WR                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2020/0166730 A1, Example 1 (FUJIFILM Corporation).             ║
 * ║ 9 elements / 6 physical air-separated groups; 3 functional groups.        ║
 * ║ One aspherical element (L25), with aspherical surfaces 11A and 12A.        ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION.                                  ║
 * ║ Infinity and the 2000 mm object-to-surface-1 state are patent-published.   ║
 * ║ The 0.55 m production endpoint is code-solved with only G2 translating    ║
 * ║ objectward, preserving DD[4] + DD[12] = 12.22 mm.                         ║
 * ║                                                                            ║
 * ║ PP normalization: patent surfaces 17-18 are an optional filter/cover       ║
 * ║ plate and are omitted. Surface 16 therefore carries the patent's 22.01 mm ║
 * ║ air-equivalent Bf directly to the image plane.                             ║
 * ║ The 2000 mm keyframe focusT is referenced to the restored physical focal   ║
 * ║ plane before normalization against the production 0.55 m MFD.              ║
 * ║                                                                            ║
 * ║ Scaling: none. The 48.57 mm patent design is retained rather than scaled   ║
 * ║ to the marketed 50 mm focal length.                                        ║
 * ║                                                                            ║
 * ║ Semi-diameters: Example 1 publishes no clear-aperture table. SDs are       ║
 * ║ figure-guided from rendered Fig. 1, constrained by the FNo-anchored        ║
 * ║ marginal ray, the 30.2° design chief ray, edge thickness, actual rim       ║
 * ║ slope, shared-band cross-gap intrusion, and off-axis containment. The      ║
 * ║ S8 optical rim is 9.8 mm from Fig. 1 at 600 dpi; S7 remains 7.5 mm.       ║
 * ║                                                                            ║
 * ║ Glass: the patent supplies only nd/vd. Vendor provenance is not published, ║
 * ║ so elements retain six-digit coordinate classes. nC/nF/ng/dPgF are        ║
 * ║ intentionally omitted rather than inferred from catalog identities.        ║
 * ║                                                                            ║
 * ║ Production identity/specification sources:                                 ║
 * ║ https://www.fujifilm-x.com/global/products/lenses/gf50mmf35-r-lm-wr/      ║
 * ║ https://dl.fujifilm-x.com/support/manual/lenses/lens_gf50mmf35_r_lm_wr_manual_01.pdf ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinon-gf-50mm-f35-r-lm-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 50mm f/3.5 R LM WR",
  subtitle: "US 2020/0166730 A1 Example 1 — constrained 0.55 m focus reconstruction",
  specs: [
    "9 ELEMENTS / 6 GROUPS",
    "50 mm MARKETED / 48.57 mm DESIGN",
    "f/3.5 MARKETED / FNo 3.56 DESIGN",
    "57.4° MARKETED / 60.4° DESIGN",
    "1 ASPHERICAL ELEMENT / 2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 48.5718107949774,
  apertureMarketing: 3.5,
  apertureDesign: 3.56,
  lensMounts: ["fujifilm-g"],
  imageFormat: "44x33",
  patentNumber: "US 2020/0166730 A1",
  patentAuthors: ["Ryosuke Nagami", "Tetsuya Ori"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2020,
  elementCount: 9,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Negative Meniscus (convex to object)",
      nd: 1.64769,
      vd: 33.84,
      fl: -31.1588944784742,
      glass: "648338 class",
      role: "Negative member of the cemented G1 doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Positive Meniscus (convex to object)",
      nd: 1.8707,
      vd: 40.73,
      fl: 21.9052313631572,
      glass: "871407 class",
      role: "Positive member of the cemented G1 doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.61293,
      vd: 37.01,
      fl: -19.8888939219658,
      glass: "613370 class",
      role: "Negative front member of the first cemented pair in moving focus group G2.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L22",
      diagramLabel: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 39.22,
      fl: 14.6569594749403,
      glass: "883392 class",
      role: "Positive rear member of the first cemented pair in moving focus group G2.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L23",
      diagramLabel: "L23",
      label: "Element L23",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.83,
      fl: -21.9676180571308,
      glass: "548458 class",
      role: "Negative front member of the second cemented pair in moving focus group G2.",
      cemented: "D3",
    },
    {
      id: 6,
      name: "L24",
      diagramLabel: "L24",
      label: "Element L24",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.55,
      fl: 21.0071636606222,
      glass: "652585 class",
      role: "Positive rear member of the second cemented pair in moving focus group G2.",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L25",
      diagramLabel: "L25",
      label: "Element L25",
      type: "Negative Meniscus (2× Asph; convex to image)",
      nd: 1.7725,
      vd: 49.5,
      fl: -322.248421729342,
      glass: "773495 class",
      role: "Weak aspherical negative meniscus at the rear of moving focus group G2.",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Negative Meniscus (convex to image)",
      nd: 1.84667,
      vd: 23.79,
      fl: -36.9196663946305,
      glass: "847238 class",
      role: "Negative front member of fixed rear group G3.",
    },
    {
      id: 9,
      name: "L32",
      diagramLabel: "L32",
      label: "Element L32",
      type: "Plano-Convex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 62.4795204795205,
      glass: "001291 class",
      role: "High-index positive rear element of fixed rear group G3.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 80.042, d: 1.03, nd: 1.64769, elemId: 1, sd: 10.8 },
    { label: "2", R: 16.036, d: 3.44, nd: 1.8707, elemId: 2, sd: 10.3 },
    { label: "3", R: 90.657, d: 3.21, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "STO", R: 1e15, d: 6.76, nd: 1.0, elemId: 0, sd: 6.23287282501659 },
    { label: "5", R: -29.212, d: 1.01, nd: 1.61293, elemId: 3, sd: 8.5 },
    { label: "6", R: 21.196, d: 3.89, nd: 1.883, elemId: 4, sd: 9.0 },
    { label: "7", R: -30.375, d: 1.0, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "8", R: -16.556, d: 1.05, nd: 1.54814, elemId: 5, sd: 9.8 },
    { label: "9", R: 45.149, d: 5.26, nd: 1.6516, elemId: 6, sd: 10.0 },
    { label: "10", R: -18.741, d: 1.19, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "11A", R: -22.131, d: 1.5, nd: 1.7725, elemId: 7, sd: 12.2 },
    { label: "12A", R: -25.008, d: 5.46, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "13", R: -24.341, d: 3.63, nd: 1.84667, elemId: 8, sd: 16.0 },
    { label: "14", R: -117.508, d: 4.62, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "15", R: 1e15, d: 4.86, nd: 2.001, elemId: 9, sd: 21.5 },
    { label: "16", R: -62.542, d: 22.01, nd: 1.0, elemId: 0, sd: 22.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "11A": {
      K: 0,
      A4: 6.9329378e-5,
      A5: -1.1194555e-5,
      A6: 1.0209655e-6,
      A7: 4.710019e-8,
      A8: -4.7484147e-9,
      A9: -3.7046349e-10,
      A10: -1.6184739e-11,
      A11: 2.1199506e-12,
      A12: 1.9561961e-13,
      A13: 5.5631129e-15,
      A14: -2.0998957e-16,
      A15: 1.0517148e-16,
      A16: -1.6198261e-17,
      A17: -3.1633953e-18,
      A18: 3.6331743e-19,
      A19: -8.3331366e-21,
      A20: 2.3412194e-23,
    },
    "12A": {
      K: 0,
      A4: 9.3215004e-5,
      A5: -1.5152273e-5,
      A6: 1.6898484e-6,
      A7: 1.1019899e-8,
      A8: -5.9591306e-9,
      A9: -3.712065e-10,
      A10: 8.5503067e-12,
      A11: 2.0154094e-12,
      A12: 2.1470193e-13,
      A13: 5.7714951e-15,
      A14: -8.49189e-16,
      A15: -1.6311106e-16,
      A16: -5.2589862e-18,
      A17: -2.6370718e-20,
      A18: -1.6585141e-20,
      A19: 2.6087053e-20,
      A20: -1.4985752e-21,
    },
  },

  /* ── Focus mechanism ── */
  focusPositions: [0, 0.265586159886505, 1],
  var: {
    STO: [6.76, 6.03, 3.7816935793664],
    "12A": [5.46, 6.19, 8.4383064206336],
  },
  varLabels: [
    ["STO", "DD[4]"],
    ["12A", "DD[12]"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2 (FOCUS)", fromSurface: "5", toSurface: "12A" },
    { text: "G3", fromSurface: "13", toSurface: "16" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
    { text: "D3", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 0.55,
  focusDescription:
    "Inner focus: G1, the stop, and G3 remain fixed while G2 translates toward the object. Infinity and the 2000 mm object-to-surface-1 row are patent-published; the 0.55 m endpoint is a mechanism-constrained reconstruction after PP-to-air-equivalent rear-plane normalization. The intermediate focus coordinate uses the restored physical focal-plane distance before PP compression.",

  /* ── Aperture configuration ── */
  nominalFno: 3.56,
  fstopSeries: [3.56, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 9,

  /* ── Layout ── */
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
