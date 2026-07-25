import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM TCL-X100 33mm f/2 (FUJIFILM X100)                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2015/0226942 A1, Example 1 (Takashi Suzuki / FUJIFILM Corp.).   ║
 * ║ Model: four-element front teleconverter plus the published eight-element   ║
 * ║ X100 master lens; 12 elements / 10 air-separated groups.                   ║
 * ║                                                                            ║
 * ║ Production correlation is inferred rather than stated by the patent. The   ║
 * ║ mounted design computes to f = 32.8180507068 mm and f/2.05, with 1.38375×  ║
 * ║ focal-length magnification, consistent with Fujifilm's approximately 1.4×  ║
 * ║ TCL-X100 specification and 50 mm-equivalent field on the X100 series.       ║
 * ║                                                                            ║
 * ║ Scale: none. Patent dimensions and coefficients are retained as published.  ║
 * ║ The patent's asphere denominator uses K_A rather than standard conic K;     ║
 * ║ both published K_A = 0 values are converted to standard K = -1. Odd radial ║
 * ║ orders A3, A5, ... A19 are preserved exactly under the updated schema.      ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes one static   ║
 * ║ infinity prescription and no mechanism-constrained focus schedule. The     ║
 * ║ 0.14 m closeFocusM value is Fujifilm's product-level minimum distance and   ║
 * ║ does not create variable internal spacings in this model.                   ║
 * ║                                                                            ║
 * ║ Rear normalization: patent cover/filter plate PP is excluded. Its optical  ║
 * ║ effect is folded into the final air-equivalent M15-to-image spacing of      ║
 * ║ 5.6208142155 mm.                                                           ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent supplies none. SDs are a disclosed constrained   ║
 * ║ model derived from d-line ray envelopes, the published field and stop,      ║
 * ║ the official 67 mm filter thread, and the Figure 1 optical section. The     ║
 * ║ converter rear triplet and master L35 were widened toward the drawing.      ║
 * ║ All values were checked                                                       ║
 * ║ for edge thickness, actual rim slope, conic limits, cross-gap intrusion,    ║
 * ║ off-axis containment, and zero hidden-trim proxy.                           ║
 * ║                                                                            ║
 * ║ Manufacturer references:                                                   ║
 * ║ https://www.fujifilm-x.com/global/products/accessories/tcl-x100ii/          ║
 * ║ https://digitalcamera-support-en.fujifilm.com/digitalcameraengpcdetail      ║
 * ║   ?aid=000004138                                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "fujifilm-x100-tcl-x100",
  maker: "Fujifilm",
  name: "FUJIFILM TCL-X100 33mm f/2 (Fujifilm X100)",
  subtitle: "US 2015/0226942 A1 Example 1 — production correlation inferred",
  specs: [
    "12 ELEMENTS / 10 GROUPS",
    "f = 32.818 mm (design)",
    "F/2.05 (design)",
    "2ω = 44.4°",
    "1.38375× CONVERSION",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 33,
  focalLengthDesign: 32.8180507068,
  apertureMarketing: 2,
  apertureDesign: 2.05,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "US 2015/0226942 A1",
  patentAuthors: ["Takashi Suzuki"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2015,
  elementCount: 12,
  groupCount: 10,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 44.4,
    maxTraceFieldDeg: 22.2,
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Teleconverter L11",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 97.5031768604,
      glass: "S-FSL5 (OHARA; exact 487702 coordinate match)",
      apd: false,
      role: "Positive front collector forming the teleconverter front group G1.",
    },
    {
      id: 2,
      name: "L21",
      label: "Teleconverter L21",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -52.8657281071,
      glass: "S-TIH53 (OHARA; exact 847238 coordinate match)",
      apd: false,
      role: "High-index, high-dispersion first negative element of converter rear group G2.",
    },
    {
      id: 3,
      name: "L22",
      label: "Teleconverter L22",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -38.5913203095,
      glass: "S-LAL14 (OHARA; exact 697555 coordinate match)",
      apd: false,
      role: "Low-dispersion negative partner in converter rear group G2.",
    },
    {
      id: 4,
      name: "L23",
      label: "Teleconverter L23",
      type: "Positive Meniscus",
      nd: 1.5927,
      vd: 35.3,
      fl: 31.1496984001,
      glass: "S-FTM16 (OHARA; exact 593353 coordinate match)",
      apd: false,
      role: "Positive rear element completing the net-negative converter rear group G2.",
    },
    {
      id: 5,
      name: "L31",
      label: "Master L31",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.8,
      fl: -21.4136448442,
      glass: "S-TIH13 / E-FD13 class (741278 coordinate)",
      apd: false,
      role: "Negative front component of the master-lens cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L32",
      label: "Master L32",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 12.8919405985,
      glass: "S-LAH58 (OHARA; exact 883408 coordinate match)",
      apd: false,
      role: "Strong positive rear component of the master-lens front doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L33",
      label: "Master L33",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 46.7681972588,
      glass: "S-LAH58 (OHARA; exact 883408 coordinate match)",
      apd: false,
      role: "Positive post-stop meniscus in the master lens.",
    },
    {
      id: 8,
      name: "L34",
      label: "Master L34",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      fl: -9.4969586061,
      glass: "S-FTM16 (OHARA; exact 593353 coordinate match)",
      apd: false,
      role: "Strong negative front component of the central cemented pair.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L35",
      label: "Master L35",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 9.8800362639,
      glass: "S-LAH58 (OHARA; exact 883408 coordinate match)",
      apd: false,
      role: "Strong positive rear component of the central cemented pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L36",
      label: "Master L36",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.56865,
      vd: 58.6,
      fl: 178.3055413925,
      glass: "Unmatched (nd=1.56865, νd=58.6; no authoritative catalog match)",
      apd: false,
      role: "Weak positive molded asphere pair controlling higher-order aberrations.",
    },
    {
      id: 11,
      name: "L37",
      label: "Master L37",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      fl: -21.9603702904,
      glass: "S-NPH1 (OHARA; exact 808228 coordinate match)",
      apd: false,
      role: "High-dispersion negative rear corrector.",
    },
    {
      id: 12,
      name: "L38",
      label: "Master L38",
      type: "Plano-Convex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 52.8063420159,
      glass: "S-LAH58 (OHARA; exact 883408 coordinate match)",
      apd: false,
      role: "Positive plano-convex field-side element adjacent to the normalized image space.",
    },
  ],

  surfaces: [
    { label: "1", R: 34.15, d: 11.03, nd: 1.48749, elemId: 1, sd: 24.1 },
    { label: "2", R: 108.46, d: 13.94, nd: 1, elemId: 0, sd: 24.1 },
    { label: "3", R: 75.067, d: 1.7, nd: 1.84666, elemId: 2, sd: 14 },
    { label: "4", R: 27.749, d: 0.96, nd: 1, elemId: 0, sd: 14 },
    { label: "5", R: 36.827, d: 4.01, nd: 1.6968, elemId: 3, sd: 13 },
    { label: "6", R: 14.847, d: 1.05, nd: 1, elemId: 0, sd: 13 },
    { label: "7", R: 15.456, d: 4.68, nd: 1.5927, elemId: 4, sd: 11.8 },
    { label: "8", R: 84.22, d: 6.7, nd: 1, elemId: 0, sd: 11.8 },
    { label: "9", R: 29.787, d: 0.91, nd: 1.74077, elemId: 5, sd: 7.3 },
    { label: "10", R: 10.216, d: 3.07, nd: 1.883, elemId: 6, sd: 7.3 },
    { label: "11", R: 85.567, d: 0.9, nd: 1, elemId: 0, sd: 7.3 },
    { label: "STO", R: 1e15, d: 5.01, nd: 1, elemId: 0, sd: 5.1915021168 },
    { label: "13", R: -15.211, d: 1.7, nd: 1.883, elemId: 7, sd: 6.4 },
    { label: "14", R: -11.699, d: 0.3, nd: 1, elemId: 0, sd: 5.4 },
    { label: "15", R: -10.059, d: 0.91, nd: 1.5927, elemId: 8, sd: 7.2 },
    { label: "16", R: 13.211, d: 7.36, nd: 1.883, elemId: 9, sd: 8.5 },
    { label: "17", R: -18.976, d: 0.2, nd: 1, elemId: 0, sd: 9.1 },
    { label: "18A", R: 47.945, d: 2.5, nd: 1.56865, elemId: 10, sd: 8.5 },
    { label: "19A", R: 89.234, d: 5.13, nd: 1, elemId: 0, sd: 8.5 },
    { label: "20", R: -12.593, d: 1.1, nd: 1.8081, elemId: 11, sd: 10.2 },
    { label: "21", R: -45.06, d: 0.2, nd: 1, elemId: 0, sd: 10.2 },
    { label: "22", R: 46.628, d: 2.88, nd: 1.883, elemId: 12, sd: 12.6 },
    { label: "23", R: 1e15, d: 5.6208142155, nd: 1, elemId: 0, sd: 12.6 },
  ],

  asph: {
    "18A": {
      K: -1,
      A3: 1.359265e-4,
      A4: 3.7162356e-6,
      A5: -6.5383916e-5,
      A6: 1.2224508e-5,
      A7: -6.7024023e-7,
      A8: -7.0851318e-8,
      A9: -1.4834043e-9,
      A10: 4.694365e-10,
      A11: 7.0944713e-11,
      A12: 4.0056802e-12,
      A13: -2.5358331e-13,
      A14: -6.2786396e-14,
      A15: -7.2519329e-15,
      A16: -6.2665147e-16,
      A17: -1.2454499e-16,
      A18: 7.5045399e-18,
      A19: 9.487108e-18,
      A20: -7.9734604e-19,
    },
    "19A": {
      K: -1,
      A3: -3.6381176e-4,
      A4: 1.5137686e-3,
      A5: -1.4708597e-3,
      A6: 6.8718645e-4,
      A7: -1.7619011e-4,
      A8: 2.2970993e-5,
      A9: -1.2455617e-6,
      A10: 1.7608222e-7,
      A11: -6.3140576e-8,
      A12: 5.2054679e-9,
      A13: 6.6772864e-10,
      A14: -9.4611209e-11,
      A15: -3.2254693e-12,
      A16: 5.9858623e-13,
      A17: 2.3337864e-14,
      A18: -1.1788037e-15,
      A19: -3.5021994e-16,
      A20: 1.8725398e-17,
    },
  },

  var: {},
  varLabels: [],

  groups: [
    { text: "TC G1", fromSurface: "1", toSurface: "2" },
    { text: "TC G2", fromSurface: "3", toSurface: "8" },
    { text: "MASTER", fromSurface: "9", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  closeFocusM: 0.14,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: static infinity prescription; marketed 0.14 m MFD does not drive variable spacings.",

  nominalFno: 2.05,
  fstopSeries: [2.05, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
