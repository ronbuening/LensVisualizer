import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — SIGMA 45mm F2.8 DG DN | Contemporary             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2019-211703 A, Numerical Example 1, Sigma.        ║
 * ║  Compact full-frame mirrorless normal prime; positive G1, fixed    ║
 * ║  stop, positive moving G2, negative fixed G3.                      ║
 * ║  8 elements / 7 air-spaced groups, 4 aspherical surfaces on        ║
 * ║  2 aspherical glass elements.                                      ║
 * ║  Focus: internal focus by G2 only; d5 closes and d10 opens.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scaling applied. Patent design focal length is 43.93 mm;     ║
 * ║    marketed focal length is 45 mm.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent column 有効径 lists full effective diameters. Values ║
 * ║    below are stored as renderer semi-diameters, i.e. patent        ║
 * ║    effective diameter / 2.                                          ║
 * ║                                                                    ║
 * ║  NOTE ON FILTER / SENSOR GLASS:                                    ║
 * ║    Patent surfaces 17-18 are a plane-parallel filter plate         ║
 * ║    (d = 2.5000 mm, nd = 1.51633) followed by BF = 2.0000 mm.       ║
 * ║    Per project convention this filter is excluded from the         ║
 * ║    surfaces array and folded into the final air-equivalent gap:    ║
 * ║    d16 = 16.3216 + 2.5000 / 1.51633 + 2.0000 = 19.9703 mm.        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane║
 * ║    ✓ Aperture stop and variable focus gaps                         ║
 * ║    ✗ Does not include sensor glass, filter glass, barrel, mount,  ║
 * ║      actuator, hood, or aperture blade mechanics                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sigma-45mm-f28-dg-dn-contemporary",
  maker: "Sigma",
  name: "SIGMA 45mm F2.8 DG DN | Contemporary",
  subtitle: "JP 2019-211703 A — Numerical Example 1",
  specs: [
    "8 elements / 7 groups",
    "f = 43.93 mm design / 45 mm marketed",
    "F2.90 design / F2.8 marketed",
    "2ω = 51.10°",
    "4 aspherical surfaces on 2 elements",
    "Internal G2 focus, 3.480 mm travel",
  ],

  focalLengthMarketing: 45,
  focalLengthDesign: 43.93,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["l-mount", "sony-fe"],
  imageFormat: "135-full-frame",
  patentYear: 2019,
  elementCount: 8,
  groupCount: 7,
  apertureBlades: 7,
  apertureBladeRoundedness: 1,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.7725,
      vd: 49.5,
      fl: 35.62,
      glass: "M-TAF105 (HOYA)",
      apd: false,
      dPgF: -0.00733,
      role: "Aspherical high-index front collector; starts convergence and corrects spherical aberration/coma.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.15,
      fl: -50.02,
      glass: "E-CF6 (HOYA)",
      apd: false,
      dPgF: 0.00444,
      role: "Negative meniscus behind L1; relaxes marginal-ray angle before the stop and G2.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      fl: -14.26,
      glass: "E-FD15 (HOYA)",
      cemented: "D1",
      apd: false,
      dPgF: 0.00856,
      role: "High-dispersion negative member of the G2 cemented doublet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      fl: 16.6,
      glass: "TAFD32 (HOYA)",
      cemented: "D1",
      apd: false,
      dPgF: -0.006816,
      role: "High-index positive member of the G2 cemented doublet; achromatizes L3 and reduces decenter sensitivity.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58913,
      vd: 61.25,
      fl: 25.55,
      glass: "M-BACD5N (HOYA)",
      apd: false,
      dPgF: -0.00078,
      role: "Main positive power of the moving G2 focus group; aspheres stabilize spherical aberration and astigmatism through focus.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 38.26,
      fl: -39.19,
      glass: "S-NBH52V (OHARA)",
      apd: false,
      dPgF: -0.003762,
      role: "Strong negative front member of G3; expands the image circle and contributes negative Petzval power.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.75211,
      vd: 25.05,
      fl: -79.59,
      glass: "FF8 (HOYA)",
      apd: false,
      dPgF: 0.01586,
      role: "Rear negative meniscus for astigmatism and field-balance correction near the image side.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.98612,
      vd: 16.48,
      fl: 83.6,
      glass: "FDS16-W (HOYA)",
      apd: "patent",
      dPgF: 0.046934,
      apdNote: "PgF = 0.6656; ΔPgF = +0.0469 by the patent's normal-line formula.",
      role: "High-index, high-dispersion anomalous-dispersion positive rear element for lateral chromatic correction.",
    },
  ],

  surfaces: [
    { label: "1A", R: 23.3681, d: 3.7585, nd: 1.7725, elemId: 1, sd: 10.005 },
    { label: "2A", R: 144.1153, d: 0.308, nd: 1.0, elemId: 0, sd: 9.15 },
    { label: "3", R: 45.1236, d: 0.8, nd: 1.51742, elemId: 2, sd: 8.37 },
    { label: "4", R: 16.3472, d: 4.6499, nd: 1.0, elemId: 0, sd: 7.29 },
    { label: "STO", R: 1e15, d: 8.3114, nd: 1.0, elemId: 0, sd: 6.45 },
    { label: "6", R: -12.213, d: 0.8, nd: 1.69895, elemId: 3, sd: 6.425 },
    { label: "7", R: 55.6607, d: 4.2213, nd: 1.8707, elemId: 4, sd: 7.27 },
    { label: "8", R: -18.8353, d: 0.15, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "9A", R: 37.4761, d: 4.7493, nd: 1.58913, elemId: 5, sd: 8.95 },
    { label: "10A", R: -23.9712, d: 1.7666, nd: 1.0, elemId: 0, sd: 9.25 },
    { label: "11", R: 109.6497, d: 0.9857, nd: 1.673, elemId: 6, sd: 9.485 },
    { label: "12", R: 21.1832, d: 8.7012, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "13", R: -19.7354, d: 0.8, nd: 1.75211, elemId: 7, sd: 10.935 },
    { label: "14", R: -29.9543, d: 0.15, nd: 1.0, elemId: 0, sd: 11.83 },
    { label: "15", R: 95.8651, d: 2.5968, nd: 1.98612, elemId: 8, sd: 14.1 },
    { label: "16", R: -580.7065, d: 19.9703, nd: 1.0, elemId: 0, sd: 14.36 },
  ],

  asph: {
    "1A": {
      K: 0.7548,
      A4: -1.0943e-5,
      A6: -9.0526e-8,
      A8: 3.3856e-9,
      A10: -6.8374e-11,
      A12: 7.5676e-13,
      A14: -4.8496e-15,
      A16: 1.5425e-17,
      A18: -1.8709e-20,
      A20: 0,
    },
    "2A": {
      K: 0,
      A4: -2.3116e-6,
      A6: 1.4773e-7,
      A8: -4.0502e-9,
      A10: 7.7863e-11,
      A12: -9.6225e-13,
      A14: 6.369e-15,
      A16: -2.0898e-17,
      A18: 2.692e-20,
      A20: 0,
    },
    "9A": {
      K: -2.3178,
      A4: -2.4796e-6,
      A6: -9.6746e-9,
      A8: -5.6804e-10,
      A10: 3.744e-11,
      A12: -7.5858e-13,
      A14: 7.5576e-15,
      A16: -3.5787e-17,
      A18: 6.4474e-20,
      A20: 0,
    },
    "10A": {
      K: -2.65,
      A4: -4.7357e-6,
      A6: 1.597e-8,
      A8: 3.7484e-10,
      A10: -1.2512e-11,
      A12: 2.6612e-13,
      A14: -3.0274e-15,
      A16: 1.8357e-17,
      A18: -4.2619e-20,
      A20: 0,
    },
  },

  var: {
    STO: [8.3114, 4.8314],
    "10A": [1.7666, 5.2466],
  },

  varLabels: [
    ["STO", "G1/stop → G2"],
    ["10A", "G2 → G3"],
  ],

  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "4" },
    { text: "G2 focus", fromSurface: "6", toSurface: "10A" },
    { text: "G3", fromSurface: "11", toSurface: "16" },
  ],

  doublets: [{ text: "D1", fromSurface: "6", toSurface: "8" }],

  closeFocusM: 0.24,
  focusDescription:
    "Internal focusing by translating G2 (L3-L5) 3.480 mm toward the object; G1, stop, and G3 remain fixed.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.56,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
