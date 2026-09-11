import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 35mm f/1.4 L II USM                                                               ║
 * ╠════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2015/0098138 A1, Numerical Example 2 (Takashi Shirasuna / Canon Kabushiki Kaisha).           ║
 * ║ Fixed 35 mm-class retrofocus prescription: 14 elements / 11 groups, 2 aspherical surfaces.              ║
 * ║ No scaling is applied; patent R, d, nd, vd, K, and asphere coefficients are preserved at s = 1.         ║
 * ║                                                                                                          ║
 * ║ FOCUS STATUS — CONSTRAINED_RECONSTRUCTION                                                               ║
 * ║ The patent publishes infinity focus only and states that positive unit L2 translates toward the object. ║
 * ║ Close focus is a one-DOF rigid-L2 reconstruction: d13 decreases while BF increases by the same amount.  ║
 * ║ Selected travel is 7.6242688101 mm, giving d13 = 0.0657311899 mm and BF = 46.6242688101 mm;            ║
 * ║ d13 + BF remains 46.69 mm. This code-solved state gives paraxial |m| = 0.21 and 0.28175 m focal-plane   ║
 * ║ to subject distance, consistent with Canon's rounded 0.21× / 0.28 m production specifications.         ║
 * ║ It is not a patent-published close-focus row.                                                            ║
 * ║                                                                                                          ║
 * ║ STOP / SEMI-DIAMETER MODEL                                                                               ║
 * ║ The patent does not publish clear apertures or stop diameter. STO sd = 13.2881528655 mm is inferred     ║
 * ║ from the patent F/1.45 and the prescription's computed entrance-pupil magnification. Surface SDs are     ║
 * ║ modeling apertures inferred from the on-axis marginal ray, the patent Fig. 3 aperture progression, and  ║
 * ║ 0.6-field paraxial bundles, then constrained by the current edge-thickness, actual-rim-slope, conic,    ║
 * ║ shared-band cross-gap, and cemented-interface containment rules. They are not patent dimensions.         ║
 * ║                                                                                                          ║
 * ║ GLASS / SPECTRAL MODEL                                                                                   ║
 * ║ The patent gives only nd and vd, not glass vendors or C/F/g-line indices. Glass strings therefore use   ║
 * ║ coordinate-compatible catalog curves without asserting production vendor identity. The engine evaluates
 * ║ those curves directly; copied catalog nC/nF/ng/dPgF fields are omitted because they override that path.
 * ║ Patent nd/vd remain authoritative. No patent-measured line indices are available for this example.
 * ║ Canon's production BR organic layer is not separately disclosed in this fixed numerical example and is  ║
 * ║ not synthesized here.                                                                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-35mm-f14l-ii-usm",
  maker: "Canon",
  name: "CANON EF 35mm f/1.4 L II USM",
  subtitle: "US 2015/0098138 A1 — Numerical Example 2; patent prescription correlated to the production lens",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "35.4218 mm DESIGN EFL",
    "F/1.45 MODELED",
    "62.843° DESIGN FIELD",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.421785862382364,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2015/0098138 A1",
  patentAuthors: ["Takashi Shirasuna"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2015,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus (rear asphere)",
      nd: 1.58313,
      vd: 59.4,
      fl: -88.63248231721546,
      glass: "583594 — BAL42 class (OHARA S-BAL42 spectral proxy; patent vendor unresolved)",
      role: "Front retrofocus negative meniscus in L1.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      fl: -70.42666560763331,
      glass: "487702 — FSL5/FK5 class (OHARA S-FSL5 spectral proxy; patent vendor unresolved)",
      role: "Second negative lens in L1.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      fl: 53.97741138784227,
      glass: "911353 — high-index low-dispersion class (CDGM H-ZLaF4LA spectral proxy; patent vendor unresolved)",
      role: "First positive lens in L1.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.8,
      fl: -57.93396725381917,
      glass: "532488 — TIL6/LLF6/QF6A class (OHARA S-TIL6 spectral proxy; patent vendor unresolved)",
      role: "Third negative lens in L1.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 87.96736790777001,
      glass: "497816 — FPL51/FCD1 class (OHARA S-FPL51 spectral proxy; patent vendor unresolved)",
      apd: "inferred",
      apdNote: "APD inferred from the coordinate-compatible S-FPL51 catalog dispersion curve; the patent does not identify the supplier or publish this element’s partial dispersion.",
      role: "Positive member of the L1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -107.02048632569362,
      glass: "805254 — TIH6/SF6 class (OHARA S-TIH6 spectral proxy; patent vendor unresolved)",
      role: "Negative member of the L1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 49.58650703805095,
      glass: "729547 — LAL18/TAC8 class (OHARA S-LAL18 spectral proxy; patent vendor unresolved)",
      role: "Rear positive lens of L1.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      fl: 50.24256227013308,
      glass: "911353 — high-index low-dispersion class (CDGM H-ZLaF4LA spectral proxy; patent vendor unresolved)",
      role: "Front positive lens of focusing sub-unit L2a.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 99.49597766387375,
      glass: "497816 — FPL51/FCD1 class (OHARA S-FPL51 spectral proxy; patent vendor unresolved)",
      apd: "inferred",
      apdNote: "APD inferred from the coordinate-compatible S-FPL51 catalog dispersion curve; the patent does not identify the supplier or publish this element’s partial dispersion.",
      role: "Positive member of the L2a cemented pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -31.811047703622574,
      glass: "654397 — NBH5/KZFS5 class (OHARA S-NBH5 spectral proxy; patent vendor unresolved)",
      role: "Negative member of the L2a cemented pair.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -32.84497502020549,
      glass: "805254 — TIH6/SF6 class (OHARA S-TIH6 spectral proxy; patent vendor unresolved)",
      role: "Negative member of the front cemented pair in L2b.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 283.93162872835086,
      glass: "729547 — LAL18/TAC8 class (OHARA S-LAL18 spectral proxy; patent vendor unresolved)",
      role: "Positive member of the front cemented pair in L2b.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 41.279525066891885,
      glass: "595677 — FPM2 class (OHARA S-FPM2 spectral proxy; patent vendor unresolved)",
      apd: "inferred",
      apdNote: "APD inferred from the coordinate-compatible S-FPM2 catalog dispersion curve; the patent does not identify the supplier or publish this element’s partial dispersion.",
      role: "Rear positive lens in L2b.",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Positive Meniscus (front asphere)",
      nd: 1.854,
      vd: 40.4,
      fl: 66.59970397196564,
      glass: "854404 — LAH85V class (OHARA L-LAH85V spectral proxy; patent vendor unresolved)",
      role: "Final positive lens in L2b.",
    },
  ],

  /* ── Surface prescription: Numerical Example 2 ── */
  surfaces: [
    { label: "1", R: 52.56, d: 3.67, nd: 1.58313, elemId: 1, sd: 26.0 },
    { label: "2A", R: 25.389, d: 13.24, nd: 1.0, elemId: 0, sd: 20.6 },
    { label: "3", R: -177.398, d: 1.93, nd: 1.48749, elemId: 2, sd: 20.6 },
    { label: "4", R: 42.723, d: 2.83, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "5", R: 78.61, d: 6.08, nd: 1.91082, elemId: 3, sd: 20.0 },
    { label: "6", R: -126.409, d: 4.36, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "7", R: -45.423, d: 1.84, nd: 1.53172, elemId: 4, sd: 19.8 },
    { label: "8", R: 97.064, d: 2.21, nd: 1.0, elemId: 0, sd: 19.8 },
    { label: "9", R: 75.538, d: 6.05, nd: 1.497, elemId: 5, sd: 19.6 },
    { label: "10", R: -101.033, d: 1.2, nd: 1.80518, elemId: 6, sd: 19.8 },
    { label: "11", R: 588.889, d: 0.2, nd: 1.0, elemId: 0, sd: 19.8 },
    { label: "12", R: 88.937, d: 7.1, nd: 1.72916, elemId: 7, sd: 19.1 },
    { label: "13", R: -58.874, d: 7.69, nd: 1.0, elemId: 0, sd: 19.1 },
    { label: "14", R: 46.182, d: 5.32, nd: 1.91082, elemId: 8, sd: 18.7 },
    { label: "15", R: -4754.766, d: 0.96, nd: 1.0, elemId: 0, sd: 18.7 },
    { label: "16", R: 200.189, d: 4.85, nd: 1.497, elemId: 9, sd: 17.4 },
    { label: "17", R: -65.143, d: 1.56, nd: 1.65412, elemId: 10, sd: 17.4 },
    { label: "18", R: 30.864, d: 5.83, nd: 1.0, elemId: 0, sd: 17.4 },
    { label: "STO", R: 1e15, d: 6.96, nd: 1.0, elemId: 0, sd: 13.288152865497793 },
    { label: "20", R: -21.936, d: 1.5, nd: 1.80518, elemId: 11, sd: 15.6 },
    { label: "21", R: -132.55, d: 3.2, nd: 1.72916, elemId: 12, sd: 15.6 },
    { label: "22", R: -81.634, d: 0.33, nd: 1.0, elemId: 0, sd: 15.6 },
    { label: "23", R: 83.033, d: 7.37, nd: 1.59522, elemId: 13, sd: 15.9 },
    { label: "24", R: -33.741, d: 0.15, nd: 1.0, elemId: 0, sd: 15.9 },
    { label: "25A", R: -139.898, d: 4.36, nd: 1.854, elemId: 14, sd: 17.8 },
    { label: "26", R: -41.017, d: 39.0, nd: 1.0, elemId: 0, sd: 17.8 },
  ],

  /* Patent uses the standard conic-constant convention; no K conversion is applied. */
  asph: {
    "2A": {
      K: 0,
      A4: -1.08011e-6,
      A6: -5.77575e-9,
      A8: 9.49534e-12,
      A10: -1.96264e-14,
      A12: 5.7798e-18,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: -7.38078e-6,
      A6: -2.8213e-9,
      A8: 6.15573e-12,
      A10: -3.38342e-14,
      A12: 3.92626e-17,
      A14: 0,
    },
  },

  /* L2 rigidly translates toward the object; the image plane stays fixed. */
  var: {
    "13": [7.69, 0.0657311898982158],
    "26": [39.0, 46.62426881010178],
  },
  varLabels: [
    ["13", "L1–L2 GAP"],
    ["26", "BF"],
  ],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "13" },
    { text: "L2a", fromSurface: "14", toSurface: "18" },
    { text: "L2b", fromSurface: "20", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  closeFocusM: 0.28,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent publishes infinity only and moves rigid L2 objectward. " +
    "The close state is code-solved with d13 7.69→0.065731 mm and BF 39.00→46.624269 mm, preserving " +
    "d13+BF=46.69 mm and reproducing the rounded Canon 0.21× / 0.28 m targets; it is not a published row.",

  nominalFno: 1.45,
  fstopSeries: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
