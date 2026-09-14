import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 50mm f/2 R WR                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 10,168,507 B2, Example 4 (FUJIFILM Corporation).       ║
 * ║ 9 elements / 7 air-separated groups; 2 aspherical surfaces.       ║
 * ║ Focus: only G2/L21 moves imageward toward near focus.             ║
 * ║                                                                    ║
 * ║ Prescription normalization: the patent's rear plane-parallel PP   ║
 * ║ (20.28 mm air + 2.85 mm at nd=1.51742 + 1.10 mm air) is omitted  ║
 * ║ per project scope and replaced by 23.258187976960897 mm of air,   ║
 * ║ preserving its first-order reduced-angle translation. No uniform  ║
 * ║ focal-length scaling is applied.                                  ║
 * ║                                                                    ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. Infinity and 1 m are    ║
 * ║ patent-published states. The 0.39 m endpoint is reconstructed     ║
 * ║ from FUJIFILM's sensor-plane MFD with the patent mechanism        ║
 * ║ constraint DD[12]+DD[14]=11.53 mm and only G2 moving. The solved ║
 * ║ endpoint is DD[12]=7.464571581644397 mm and                       ║
 * ║ DD[14]=4.065428418355603 mm. It is not a patent-published state. ║
 * ║ `focusPositions` keeps the published 1 m row as a keyframe; its   ║
 * ║ normalized 0.39 UI coordinate follows the source distance label  ║
 * ║ and does not assert identical patent/product distance datums.     ║
 * ║                                                                    ║
 * ║ Stop: the patent gives the axial stop plane but not its diameter. ║
 * ║ STO.sd=8.787699140614816 mm is a model calibration to the         ║
 * ║ published infinity FNo=2.06 using the verified entrance-pupil     ║
 * ║ scale. Agreement with f/2.06 therefore is not independent proof  ║
 * ║ of a physical diaphragm diameter.                                 ║
 * ║                                                                    ║
 * ║ Semi-diameters: modeled from exact meridional ray envelopes over  ║
 * ║ infinity, 1 m, reconstructed 0.39 m, and two intermediate focus  ║
 * ║ states. On-axis rays fill the calibrated stop; off-axis samples   ║
 * ║ use the project's 0.6 field fraction and default pupil fractions. ║
 * ║ A nominal 10% clearance was rounded upward to 0.05 mm. Surfaces   ║
 * ║ 5 and 10 are locally gap-limited to preserve the default 90%      ║
 * ║ shared-band air-gap clearance while remaining outside all sampled ║
 * ║ ray envelopes. These SDs are modeled, not patent-published.       ║
 * ║                                                                    ║
 * ║ Asphere convention: the patent uses sqrt(1-KA*C^2*h^2);          ║
 * ║ LensVisualizer uses sqrt(1-(1+K)*(h/R)^2), so K=KA-1.            ║
 * ║ Example 4 has KA=1 on both aspheres, hence K=0. All supported     ║
 * ║ nonzero A3-A20 orders are retained; A3 is zero and omitted.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "fujifilm-fujinon-xf-50mm-f2-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 50mm f/2 R WR",
  subtitle: "US 10,168,507 B2 Example 4 — strong inferential production correlation",
  specs: [
    "9 ELEMENTS / 7 GROUPS",
    "50 mm f/2 (MARKETED)",
    "f = 48.52 mm / F2.06 (DESIGN)",
    "2ω = 32.2° AT INFINITY",
    "2 ASPHERICAL SURFACES",
    "INNER FOCUS",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 48.51905374381968,
  apertureMarketing: 2,
  apertureDesign: 2.06,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 10,168,507 B2",
  patentAuthors: ["Ryosuke Nagami", "Tetsuya Ori"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2019,
  elementCount: 9,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 46.696434942080025,
      glass: "744449/744448 LAF2/LAM2 class (supplier unspecified)",
      role: "Front positive element in G1a.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: 71.9151067243277,
      glass: "744449/744448 LAF2/LAM2 class (supplier unspecified)",
      role: "Second positive element in G1a.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Plano-Concave Negative",
      nd: 1.6398,
      vd: 34.5,
      indexReference: "d",
      fl: -26.50203188496405,
      glass: "640345 S-TIM27 class (supplier unspecified)",
      role: "Negative element completing G1a ahead of the stop.",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element L14",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.4971,
      vd: 81.6,
      indexReference: "d",
      fl: 51.35946006519035,
      glass: "497816 low-dispersion / ED class (supplier unspecified)",
      apd: "inferred",
      apdNote: "The compatible H-FK61 curve gives ΔPgF ≈ +0.031. The sole aspherical element also correlates with Fujifilm’s published ED asphere; neither identifies the patent glass supplier.",
      role: "Dual-asphere positive element immediately behind the stop in G1b.",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "Element L15",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.2,
      indexReference: "d",
      fl: -14.259986718882534,
      glass: "689312 dense-flint class (supplier unspecified)",
      role: "Negative member of the cemented L15+L16 pair in G1b.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L16",
      diagramLabel: "L16",
      label: "Element L16",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 39.2,
      indexReference: "d",
      fl: 13.566506018461423,
      glass: "H-ZLaF68N class (supplier unspecified)",
      role: "Positive member of the cemented L15+L16 pair in G1b.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: -39.248286724882334,
      glass: "S-FSL5 coordinate-compatible fluor-crown proxy (supplier unspecified)",
      role: "Single negative inner-focus element forming G2.",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      indexReference: "d",
      fl: -38.968583341378064,
      glass: "541472 QF8/FEL2/TIL2/LLF2 class (supplier unspecified)",
      role: "Negative member of the cemented L31+L32 pair forming G3.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L32",
      diagramLabel: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      fl: 22.384550577263486,
      glass: "729547/729545 LaK/LAL class (supplier unspecified)",
      role: "Positive member of the cemented L31+L32 pair forming G3.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 37.768, d: 4.1, nd: 1.744, elemId: 1, sd: 13.05 },
    { label: "2", R: -413.561, d: 0.61, nd: 1, elemId: 0, sd: 12.75 },
    { label: "3", R: 25.981, d: 3.64, nd: 1.744, elemId: 2, sd: 11.85 },
    { label: "4", R: 47.487, d: 1.25, nd: 1, elemId: 0, sd: 10.95 },
    { label: "5", R: 1e15, d: 1.05, nd: 1.6398, elemId: 3, sd: 10.25 },
    { label: "6", R: 16.956, d: 4.48, nd: 1, elemId: 0, sd: 9.8 },
    // Source surface 7. The SD is calibrated to the published infinity FNo=2.06; it is not source-published.
    { label: "STO", R: 1e15, d: 2.31, nd: 1, elemId: 0, sd: 8.787699140614816 },
    { label: "8A", R: 927.947, d: 3.31, nd: 1.4971, elemId: 4, sd: 9.7 },
    { label: "9A", R: -26.222, d: 0.9, nd: 1, elemId: 0, sd: 9.65 },
    // Surface 10 is gap-limited by the 0.90 mm air space after 9A; sampled-ray margin remains positive.
    { label: "10", R: -20.05, d: 2.01, nd: 1.68893, elemId: 5, sd: 9 },
    // Cemented L15→L16 junction: downstream element owns elemId and index.
    { label: "11", R: 20.05, d: 5.62, nd: 1.883, elemId: 6, sd: 10.4 },
    { label: "12", R: -25.848, d: 1.8, nd: 1, elemId: 0, sd: 10.5 },
    { label: "13", R: 715.279, d: 0.9, nd: 1.48749, elemId: 7, sd: 9.2 },
    { label: "14", R: 18.627, d: 9.73, nd: 1, elemId: 0, sd: 9.05 },
    { label: "15", R: -164.932, d: 1.18, nd: 1.54072, elemId: 8, sd: 10.35 },
    // Cemented L31→L32 junction: downstream element owns elemId and index.
    { label: "16", R: 24.218, d: 5.97, nd: 1.72916, elemId: 9, sd: 10.8 },
    // PP omitted; d is the air-equivalent surface-17-to-image spacing.
    { label: "17", R: -44.857, d: 23.258187976960897, nd: 1, elemId: 0, sd: 10.95 },
  ],

  asph: {
    "8A": {
      K: 0,
      A4: 3.8301909e-5,
      A5: -3.6448618e-5,
      A6: 1.0493217e-5,
      A7: -1.0237599e-6,
      A8: -6.022444e-8,
      A9: 9.1608206e-9,
      A10: 1.1092113e-9,
      A11: 4.8097099e-12,
      A12: -1.3618641e-11,
      A13: -1.2798017e-12,
      A14: -5.1088995e-14,
      A15: 1.5255626e-14,
      A16: 2.1919837e-15,
      A17: 9.4267473e-17,
      A18: -1.5217809e-17,
      A19: -4.1178124e-18,
      A20: 2.9826588e-19,
    },
    "9A": {
      K: 0,
      A4: 6.0101264e-5,
      A5: -3.5495717e-5,
      A6: 1.1205354e-5,
      A7: -1.4431655e-6,
      A8: 1.6798482e-9,
      A9: 1.1491915e-8,
      A10: 4.601869e-10,
      A11: -6.2653422e-11,
      A12: -1.1066471e-11,
      A13: -2.7818743e-13,
      A14: 3.6535628e-14,
      A15: 1.3125767e-14,
      A16: 2.0008474e-16,
      A17: 1.3360421e-17,
      A18: -8.9014757e-18,
      A19: -1.0615509e-18,
      A20: 9.9600882e-20,
    },
  },

  focusPositions: [0, 0.39, 1],
  var: {
    "12": [1.8, 3.51, 7.464571581644397],
    "14": [9.73, 8.02, 4.065428418355603],
  },
  varLabels: [
    ["12", "DD[12]"],
    ["14", "DD[14]"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "12" },
    { text: "G2 FOCUS", fromSurface: "13", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "17" },
  ],
  doublets: [
    { text: "D1", fromSurface: "10", toSurface: "12" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  closeFocusM: 0.39,
  focusDescription:
    "Inner focus: G2 (L21) moves toward the image. Infinity and 1 m states are published; the 0.39 m endpoint is reconstructed from the production minimum focus distance.",

  nominalFno: 2.06,
  fstopSeries: [2.06, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
