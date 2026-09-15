import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — LEICA DC VARIO-ELMARIT 4.5-108mm f/2.8 (Panasonic Lumix DMC-FZ300) ║
 * ╠══════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2015/0103211 A1, Numerical Example 1 / Embodiment 1.                ║
 * ║ Production correlation is strong but not manufacturer-confirmed: the patent     ║
 * ║ example is 4.6399-103.0950 mm at about f/2.900, while Panasonic markets         ║
 * ║ 4.5-108 mm f/2.8. No uniform focal-length scale is applied.                     ║
 * ║                                                                                  ║
 * ║ 14 physical elements / 11 air-separated groups; 9 aspherical surfaces on        ║
 * ║ 5 elements. Six functional zoom units have signs + - + - + -.                   ║
 * ║                                                                                  ║
 * ║ NORMALIZATION:                                                                   ║
 * ║ - The rear plane-parallel OLPF/sensor-face plate P is omitted. Its first-order  ║
 * ║   path is folded into a state-specific air-equivalent rear gap.                  ║
 * ║ - The three published 0.01000 mm adhesive layers are collapsed to direct        ║
 * ║   cemented junctions. Each 0.01000 mm is added to the downstream element        ║
 * ║   thickness so downstream vertex stations are preserved.                        ║
 * ║ - Removing the finite-index adhesive changes power slightly; each infinity      ║
 * ║   state therefore uses the Stage-1 code-solved rear refocus correction.          ║
 * ║                                                                                  ║
 * ║ ZOOM: W/M/T infinity states are preserved. G4 reverses between W→M and M→T.     ║
 * ║ The rounded patent table also implies tiny G6 motion despite prose calling G6    ║
 * ║ fixed; the tabulated states are preserved rather than forced stationary.         ║
 * ║                                                                                  ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent states that G4 moves imageward     ║
 * ║ for close focus but publishes no close-focus spacing rows. Every authored        ║
 * ║ focus pair is therefore identical; no internal focus travel is invented.         ║
 * ║                                                                                  ║
 * ║ APERTURE: physical diaphragm diameter is not published. nominalFno preserves     ║
 * ║ the W/M/T modeled/calibrated targets; the state-specific effective stop openings ║
 * ║ are inferred from the final model. STO.sd=5.8 mm is a modeled maximum mechanical ║
 * ║ clear semi-diameter, not a patent-published diaphragm radius.                    ║
 * ║                                                                                  ║
 * ║ SEMI-DIAMETERS: modeled from exact meridional Snell tracing of the final data    ║
 * ║ prescription. Sizing contains full on-axis marginal rays and representative      ║
 * ║ off-axis rays at 0.6× the patent half-field through all W/M/T states plus        ║
 * ║ midpoints of W-M and M-T. Values are not patent-published clear apertures.       ║
 * ╚══════════════════════════════════════════════════════════════════════════════════╝
 */

// SD review (2026-09-15): exact local patent Fig. 1 optical rims; see the audit sidecar.
// Revised apertures remain estimates; radii, spacings and calibrated stop are unchanged.
const LENS_DATA = {
  key: "leica-dc-vario-elmarit-4p5-108mm-f28-panasonic-fz300",
  maker: "Panasonic",
  name: "LEICA DC VARIO-ELMARIT 4.5-108mm f/2.8 (Panasonic Lumix DMC-FZ300)",
  subtitle: "US 2015/0103211 A1 Example 1 — strong probable FZ300 correlation; native patent scale",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "NORMALIZED MODEL 4.640-103.140mm",
    "MODELED f/2.9006-2.9001",
    "9 ASPHERICAL SURFACES / 5 ASPHERICAL ELEMENTS",
    "NO INTERNAL FOCUS RECONSTRUCTION",
  ],

  focalLengthMarketing: [4.5, 108],
  focalLengthDesign: [4.639720496655491, 103.1400440014463],
  apertureMarketing: 2.8,
  apertureDesign: 2.90063,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1/2.3-inch-type",
  patentNumber: "US 2015/0103211 A1",
  patentAuthors: ["Takakazu Bito", "Hiroaki Suzuki", "Yoshiaki Kurioka", "Yusuke Yonetani"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2015,
  elementCount: 14,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: -189.0815831422155,
      glass: "847238 high-index flint class; supplier unresolved",
      cemented: "D1",
      role: "G1 negative meniscus, convex toward the object; cemented to L2.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 95.41288813813308,
      glass: "497816 low-dispersion class; supplier unresolved",
      cemented: "D1",
      role: "G1 positive cemented partner; its modeled thickness includes the collapsed 0.01000 mm adhesive layer.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.6,
      indexReference: "d",
      fl: 125.0190222134822,
      glass: "FCD505-compatible low-dispersion class; supplier unresolved",
      role: "Rear positive meniscus of G1, convex toward the object.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.88202,
      vd: 37.2,
      indexReference: "d",
      fl: -14.222558738807788,
      glass: "882372 mold-glass class; supplier unresolved",
      role: "Front negative meniscus of G2; both surfaces are aspherical.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -11.082305677991865,
      glass: "773496 lanthanum-crown class; supplier unresolved",
      cemented: "D2",
      role: "G2 negative member cemented to L6.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      indexReference: "d",
      fl: 11.126343056653631,
      glass: "923209 dense-flint class; supplier unresolved",
      cemented: "D2",
      role: "G2 positive cemented partner; its modeled thickness includes the collapsed 0.01000 mm adhesive layer.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: -41.53662241764126,
      glass: "847238 high-index flint class; supplier unresolved",
      role: "Rear negative meniscus of G2, convex toward the image side.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58332,
      vd: 59.1,
      indexReference: "d",
      fl: 29.432918891095614,
      glass: "M-BACD12 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Front positive meniscus of G3; both surfaces are aspherical.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      fl: 15.427573640878348,
      glass: "487704/48770x low-dispersion crown class; supplier unresolved",
      cemented: "D3",
      role: "G3 positive member cemented to L10.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      indexReference: "d",
      fl: -10.932042550624535,
      glass: "648338 flint class; supplier unresolved",
      cemented: "D3",
      role: "G3 negative cemented partner; its modeled thickness includes the collapsed 0.01000 mm adhesive layer.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.51776,
      vd: 69.9,
      indexReference: "d",
      fl: 16.648798841783996,
      glass: "PCS1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Rear positive element of G3; both surfaces are aspherical.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: -34.867957001555084,
      glass: "497816 low-dispersion class; supplier unresolved",
      role: "Sole element of G4; the patent identifies G4 as the focusing unit.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.51776,
      vd: 69.9,
      indexReference: "d",
      fl: 12.832823126081859,
      glass: "PCS1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Sole positive element of G5; both surfaces are aspherical.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.5441,
      vd: 56.1,
      indexReference: "d",
      fl: -13.509557450592323,
      glass: "Unmatched (nd=1.54410, νd=56.1; current six-vendor sweep)",
      role: "Sole negative element of G6; its object-side surface is aspherical.",
    },
  ],

  surfaces: [
    { label: "1", R: 80.3864, d: 1.4, nd: 1.84666, elemId: 1, sd: 22.7 },
    { label: "2", R: 53.0873, d: 5.9257, nd: 1.497, elemId: 2, sd: 22.3 },
    { label: "4", R: -427.7536, d: 0.15, nd: 1.0, elemId: 0, sd: 22.3 },
    { label: "5", R: 47.3115, d: 3.5449, nd: 1.59282, elemId: 3, sd: 21.5 },
    { label: "6", R: 127.1777, d: 0.5, nd: 1.0, elemId: 0, sd: 21.4 },
    { label: "7A", R: 1000.0, d: 0.7, nd: 1.88202, elemId: 4, sd: 7.7 },
    { label: "8A", R: 12.3851, d: 4.581, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "9", R: -28.3905, d: 0.55, nd: 1.7725, elemId: 5, sd: 7.7 },
    { label: "10", R: 12.3607, d: 3.6897, nd: 1.92286, elemId: 6, sd: 7.7 },
    { label: "12", R: -51.9617, d: 1.2698, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "13", R: -17.75, d: 0.55, nd: 1.84666, elemId: 7, sd: 7.2 },
    { label: "14", R: -36.3481, d: 32.7666, nd: 1.0, elemId: 0, sd: 7.2 },
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 5.8 },
    { label: "16A", R: 14.091, d: 2.6306, nd: 1.58332, elemId: 8, sd: 6.4 },
    { label: "17A", R: 73.197, d: 2.4431, nd: 1.0, elemId: 0, sd: 6.3 },
    { label: "18", R: 14.3186, d: 4.2, nd: 1.48749, elemId: 9, sd: 6.2 },
    { label: "19", R: -14.3186, d: 0.81, nd: 1.64769, elemId: 10, sd: 6.0 },
    { label: "21", R: 14.3186, d: 2.0317, nd: 1.0, elemId: 0, sd: 5.7 },
    { label: "22A", R: 14.0569, d: 3.8069, nd: 1.51776, elemId: 11, sd: 5.95 },
    { label: "23A", R: -20.2282, d: 1.5008, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "24", R: 90.8839, d: 0.9956, nd: 1.497, elemId: 12, sd: 4.7 },
    { label: "25", R: 14.5013, d: 4.7802, nd: 1.0, elemId: 0, sd: 4.6 },
    { label: "26A", R: 10.7551, d: 3.3, nd: 1.51776, elemId: 13, sd: 4.7 },
    { label: "27A", R: -15.5641, d: 2.684, nd: 1.0, elemId: 0, sd: 4.5 },
    { label: "28A", R: -11.552, d: 0.8736, nd: 1.5441, elemId: 14, sd: 4.0 },
    { label: "29", R: 20.7491, d: 2.3802988429508094, nd: 1.0, elemId: 0, sd: 3.8 },
  ],

  asph: {
    "7A": {
      K: 0,
      A4: 5.35704e-5,
      A6: 4.65344e-7,
      A8: -7.25267e-9,
      A10: 2.2211e-11,
      A12: 8.30852e-15,
      A14: 0,
    },
    "8A": {
      K: 0,
      A4: 5.50272e-5,
      A6: 3.09902e-7,
      A8: 3.07019e-8,
      A10: -2.86257e-10,
      A12: -4.52816e-13,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 3.488e-6,
      A6: -1.42689e-6,
      A8: 1.35938e-7,
      A10: -3.63061e-9,
      A12: 4.2087e-11,
      A14: -1.53813e-16,
    },
    "17A": {
      K: 0,
      A4: 2.92293e-5,
      A6: -2.39842e-6,
      A8: 2.21752e-7,
      A10: -6.29904e-9,
      A12: 7.24108e-11,
      A14: -5.87135e-16,
    },
    "22A": {
      K: 0,
      A4: -1.48035e-4,
      A6: -4.24178e-7,
      A8: 5.45212e-8,
      A10: -1.39274e-9,
      A12: 0,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: 2.14264e-5,
      A6: -4.49634e-7,
      A8: 4.61173e-8,
      A10: -1.19672e-9,
      A12: 0,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: -1.62288e-4,
      A6: 6.30224e-6,
      A8: -2.17877e-7,
      A10: 4.94955e-10,
      A12: 0,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: 2.3725e-4,
      A6: 7.41232e-6,
      A8: -4.10461e-7,
      A10: 4.09234e-9,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: 1.55938e-3,
      A6: -4.44918e-5,
      A8: 1.30805e-6,
      A10: -1.79649e-8,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "6": [
      [0.5, 0.5],
      [22.767, 22.767],
      [51.7865, 51.7865],
    ],
    "14": [
      [32.7666, 32.7666],
      [5.2446, 5.2446],
      [0.5, 0.5],
    ],
    "23A": [
      [1.5008, 1.5008],
      [14.2646, 14.2646],
      [6.7433, 6.7433],
    ],
    "25": [
      [4.7802, 4.7802],
      [5.2935, 5.2935],
      [18.1364, 18.1364],
    ],
    "27A": [
      [2.684, 2.684],
      [1.9034, 1.9034],
      [0.8074, 0.8074],
    ],
    "29": [
      [2.3802988429508094, 2.3802988429508094],
      [2.3980895553813415, 2.3980895553813415],
      [2.375995668499565, 2.375995668499565],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["14", "D14"],
    ["23A", "D23"],
    ["25", "D25"],
    ["27A", "D27"],
    ["29", "BF (normalized)"],
  ],

  zoomPositions: [4.6399, 21.8698, 103.095],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (-)", fromSurface: "7A", toSurface: "14" },
    { text: "G3 (+ / OIS)", fromSurface: "16A", toSurface: "23A" },
    { text: "G4 (- / FOCUS)", fromSurface: "24", toSurface: "25" },
    { text: "G5 (+)", fromSurface: "26A", toSurface: "27A" },
    { text: "G6 (-)", fromSurface: "28A", toSurface: "29" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "D2", fromSurface: "9", toSurface: "12" },
    { text: "D3", fromSurface: "18", toSurface: "21" },
  ],

  closeFocusM: 0.01,
  focusDescription:
    "Not modeled — the patent publishes only infinity-focus W/M/T states. G4 moves imageward for close focus, but no close-focus spacings are authored. The 0.01 m value records Panasonic's macro/MF wide-angle minimum; every focus pair remains identical.",

  nominalFno: [2.90063, 2.9002, 2.90012],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
