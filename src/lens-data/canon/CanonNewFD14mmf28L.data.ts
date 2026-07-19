import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON NEW FD 14mm f/2.8 L                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S57-64716A / JPS57-64716A, sole numerical example. ║
 * ║  Canon retrofocus ultra-wide-angle lens patent by Ikemori Keiji.    ║
 * ║  14 elements / 10 groups, one polished glass aspherical surface.    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription is normalized near f = 1. Independent        ║
 * ║    paraxial trace gives EFL = 0.999615788, so all R and d values    ║
 * ║    are scaled ×14.005381029 to produce EFL ≈ 14.000 mm.                ║
 * ║                                                                    ║
 * ║  NOTE ON STOP PLACEMENT:                                            ║
 * ║    The patent table gives D16 as one air gap between R16 and R17.   ║
 * ║    The figure places the diaphragm inside that gap; D16 is split    ║
 * ║    evenly here. Stop SD is chosen from the traced f/2.8 entrance    ║
 * ║    pupil, not from a patent-listed aperture diameter.               ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                     ║
 * ║    Canon's production description states that the lens uses a       ║
 * ║    floating mechanism. The patent publishes no close-focus spacing  ║
 * ║    table, so this file models the verified infinity-focus state     ║
 * ║    only and does not invent floating-group travel.                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Patent semi-diameters are not published. These SDs are inferred  ║
 * ║    for LensVisualizer rendering from marginal/chief-ray envelopes   ║
 * ║    and then constrained by edge thickness, signed cross-gap sag,    ║
 * ║    sd/|R| < 0.90, and element SD ratio ≤ 1.25. They are not Canon   ║
 * ║    mechanical clear-aperture specifications.                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop                                                  ║
 * ║    ✗ No sensor glass, filters, barrel parts, mount parts, or hood   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-new-fd-14mm-f28-l",
  maker: "Canon",
  name: "CANON NEW FD 14mm f/2.8 L",
  subtitle: "JP S57-64716A — Canon / Ikemori Keiji",
  specs: ["14 elements / 10 groups", "f ≈ 14.0 mm", "F/2.8", "2ω = 114°", "1 aspherical surface"],

  focalLengthMarketing: 14,
  focalLengthDesign: 14,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["canon-fd"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S57-64716 A",
  patentAuthors: ["Keiji Ikemori"],
  patentAssignees: ["Canon Inc"],
  patentYear: 1982,
  elementCount: 14,
  groupCount: 10,
  apertureBlades: 6,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 114,
    maxTraceFieldDeg: 57,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -102.01,
      glass: "LAC14 (Hoya)",
      role: "First large negative meniscus of the retrofocus front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.60311,
      vd: 60.7,
      fl: -1166.65,
      glass: "BACD14 (Hoya)",
      role: "Weak negative meniscus carrying the sole aspherical surface on R3.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -47.9,
      glass: "LAC14 (Hoya)",
      role: "Strong negative meniscus in the divergent front group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -42.75,
      glass: "TAF1 (Hoya)",
      role: "High-index negative meniscus completing the divergent first group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -19.81,
      glass: "LAC14 (Hoya)",
      cemented: "G5",
      role: "Negative member of the first rear cemented doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      fl: 18.44,
      glass: "E-F8 (Hoya)",
      cemented: "G5",
      role: "Positive flint member of the first rear cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.54814,
      vd: 45.8,
      fl: 17.12,
      glass: "E-FEL1 (Hoya; S-TIL1 equivalent)",
      cemented: "G6",
      role: "Strong positive member of the main rear collecting doublet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -72.29,
      glass: "TAF1 (Hoya)",
      cemented: "G6",
      role: "Negative meniscus cemented to L7; balances spherical and field aberrations.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -39.15,
      glass: "TAF1 (Hoya)",
      role: "Pre-stop negative meniscus with concavity toward the object.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.6668,
      vd: 33,
      fl: 33.78,
      glass: "Dense flint 667/330 (modern CDGM H-ZF39 equivalent; historical supplier unconfirmed)",
      cemented: "G8",
      role: "Positive dense-flint member immediately behind the stop.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.3,
      fl: -28.2,
      glass: "E-F2 (Hoya)",
      cemented: "G8",
      role: "Negative flint member of the weak negative post-stop doublet.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.92286,
      vd: 21.3,
      fl: -28.67,
      glass: "E-FDS1 class (Hoya; patent νd retained)",
      cemented: "G9",
      role: "Ultra-dense flint member of the rear chromatic-correction doublet.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      fl: 24.44,
      glass: "S-FSL5 (Ohara)",
      cemented: "G9",
      role: "Low-index fluorite-crown partner for L12.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 42.9,
      glass: "S-LAH65V (Ohara)",
      role: "Final high-index positive field-flattening element.",
    },
  ],

  surfaces: [
    { label: "1", R: 42.002138, d: 3.039168, nd: 1.6968, elemId: 1, sd: 27.5 },
    { label: "2", R: 25.615842, d: 11.302342, nd: 1, elemId: 0, sd: 22.8 },
    { label: "3A", R: 57.492089, d: 5.714195, nd: 1.60311, elemId: 2, sd: 18.2 },
    { label: "4", R: 51.161657, d: 0.140054, nd: 1, elemId: 0, sd: 15.2 },
    { label: "5", R: 30.783828, d: 1.66664, nd: 1.6968, elemId: 3, sd: 15 },
    { label: "6", R: 15.658016, d: 6.946669, nd: 1, elemId: 0, sd: 14 },
    { label: "7", R: 41.609987, d: 1.27449, nd: 1.7725, elemId: 4, sd: 12.5 },
    { label: "8", R: 18.164979, d: 5.476104, nd: 1, elemId: 0, sd: 12 },
    { label: "9", R: 298.734777, d: 1.470565, nd: 1.6968, elemId: 5, sd: 10.5 },
    { label: "10", R: 13.165058, d: 9.327584, nd: 1.59551, elemId: 6, sd: 10.5 },
    { label: "11", R: -48.724721, d: 2.478952, nd: 1, elemId: 0, sd: 10 },
    { label: "12", R: 52.114023, d: 8.45925, nd: 1.54814, elemId: 7, sd: 10 },
    { label: "13", R: -10.784143, d: 1.470565, nd: 1.7725, elemId: 8, sd: 9.2 },
    { label: "14", R: -14.15944, d: 0.980377, nd: 1, elemId: 0, sd: 9 },
    { label: "15", R: -14.383526, d: 0.882339, nd: 1.7725, elemId: 9, sd: 8 },
    { label: "16", R: -28.164821, d: 0.882339, nd: 1, elemId: 0, sd: 7.5 },
    { label: "STO", R: 1000000000000000, d: 0.882339, nd: 1, elemId: 0, sd: 6.134 },
    { label: "17", R: 275.149716, d: 9.817772, nd: 1.6668, elemId: 10, sd: 7.8 },
    { label: "18", R: -24.187293, d: 2.170834, nd: 1.62004, elemId: 11, sd: 8.8 },
    { label: "19", R: 65.223059, d: 0.630242, nd: 1, elemId: 0, sd: 7.55 },
    { label: "20", R: -230.668626, d: 0.784301, nd: 1.92286, elemId: 12, sd: 7.55 },
    { label: "21", R: 29.929499, d: 5.434088, nd: 1.48749, elemId: 13, sd: 9.4 },
    { label: "22", R: -18.613151, d: 0.098038, nd: 1, elemId: 0, sd: 9.4 },
    { label: "23", R: 1429.65529, d: 2.885108, nd: 1.804, elemId: 14, sd: 10.2 },
    { label: "24", R: -35.307566, d: 36.98621, nd: 1, elemId: 0, sd: 10.5 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: 1.015592341423e-5,
      A6: 3.210491021308e-9,
      A8: -1.220464662922e-11,
      A10: 2.532240469025e-14,
      A12: 0,
      A14: 0,
    },
  },
  var: {},
  varLabels: [],

  groups: [
    { text: "I: negative front group", fromSurface: "1", toSurface: "8" },
    { text: "II: positive rear group", fromSurface: "9", toSurface: "24" },
  ],
  doublets: [
    { text: "G5", fromSurface: "9", toSurface: "11" },
    { text: "G6", fromSurface: "12", toSurface: "14" },
    { text: "G8", fromSurface: "17", toSurface: "19" },
    { text: "G9", fromSurface: "20", toSurface: "22" },
  ],

  focusDescription:
    "Infinity prescription from JP S57-64716A. Production lens uses floating correction, but the patent gives no close-focus variable spacings.",
  closeFocusM: 0.25,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.66,
  yScFill: 0.72,
  offAxisFieldFrac: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
