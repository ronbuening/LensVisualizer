import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY FE 24mm f/1.4 GM                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP WO2019/073744 A1, Numerical Example 1.            ║
 * ║  Production match: Sony FE 24mm F1.4 GM / SEL24F14GM.              ║
 * ║  13 elements / 10 air-spaced groups; four aspherical surfaces.     ║
 * ║  Focus: GR2 translates as a unit by 5.03 mm toward the object.      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scale factor has been applied. The patent design is           ║
 * ║    f = 23.66 mm and is paired with the marketed 24 mm production    ║
 * ║    specification through metadata fields.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. Semi-diameters      ║
 * ║    below were estimated by combined paraxial marginal/chief-ray      ║
 * ║    tracing at offAxisFieldFrac = 0.4, then limited by element       ║
 * ║    edge thickness, element SD ratio, the tight S20-S21 air gap,     ║
 * ║    and the project sd/|R| < 0.90 spherical rim convention. The       ║
 * ║    second surface of L11 is the binding front-group constraint.      ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS IDENTIFICATION:                                      ║
 * ║    Catalog names are nd/νd matches where public catalogs support    ║
 * ║    them. L11 is retained as a Hoya MC-TAF115-class close match,     ║
 * ║    not an exact catalog assertion. L27 is explicitly marked         ║
 * ║    Unmatched because the patent nd = 1.85235, νd = 40.1 does not    ║
 * ║    resolve cleanly to an authoritative public OHARA/HOYA/SCHOTT     ║
 * ║    entry.                                                          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and variable focus gaps                         ║
 * ║    ✗ Sensor cover glass, filters, and mechanical parts omitted     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sony-fe-24mm-f14-gm",
  maker: "Sony",
  name: "SONY FE 24mm f/1.4 GM",
  subtitle: "JP WO2019/073744 A1 — Numerical Example 1",
  specs: [
    "13 elements / 10 groups",
    "f = 23.66 mm patent design",
    "F/1.44 design aperture",
    "2ω = 84.72° patent field",
    "4 aspherical surfaces on 2 elements",
    "GR2 unit internal focus",
  ],

  focalLengthMarketing: 24,
  focalLengthDesign: 23.67403163152936,
  apertureMarketing: 1.4,
  apertureDesign: 1.44,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2019/073744 A1",
  patentAuthors: ["Takuya Kato", "Kota Omiya", "Hiroyuki Matsumoto"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2019,
  elementCount: 13,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front XA element",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.77002,
      vd: 49.4,
      fl: -39.29,
      glass: "MC-TAF115 class (Hoya; close match, stored nd=1.77002)",
      role: "Large negative front asphere; sets the retrofocus entrance geometry and helps suppress peripheral distortion.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 ED negative element",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.6,
      fl: -67.54,
      glass: "S-FPL51 (OHARA)",
      cemented: "D1",
      role: "Low-dispersion negative member of the front cemented doublet.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 high-index positive element",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 38.92,
      glass: "S-LAH99 class (OHARA)",
      cemented: "D1",
      role: "High-index positive partner for L12; makes the front doublet weakly positive while correcting lateral color.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14 dense-flint negative element",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.7,
      fl: -49.25,
      glass: "S-TIH11 (OHARA)",
      role: "Front-group dense-flint negative element; balances chromatic and off-axis aberration before L15.",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 pre-stop positive element",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.1,
      fl: 43.85,
      glass: "TAFD33 class (Hoya)",
      role: "Strong positive element immediately before the aperture stop; controls beam diameter entering the focus group.",
    },
    {
      id: 6,
      name: "L21",
      label: "L21 ED positive element",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 48.35,
      glass: "S-FPL51 (OHARA)",
      cemented: "D2",
      role: "Low-dispersion positive member of the first GR2a cemented doublet.",
    },
    {
      id: 7,
      name: "L22",
      label: "L22 dense-flint negative element",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      fl: -36.88,
      glass: "S-TIH13 (OHARA)",
      cemented: "D2",
      role: "High-dispersion negative partner for L21; the cemented pair is weakly negative in situ.",
    },
    {
      id: 8,
      name: "L23",
      label: "L23 ED positive element",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 30.41,
      glass: "S-FPL51 (OHARA)",
      cemented: "D3",
      role: "Symmetric ED positive element in the second GR2a cemented doublet.",
    },
    {
      id: 9,
      name: "L24",
      label: "L24 flint negative meniscus",
      type: "Negative Meniscus",
      nd: 1.738,
      vd: 32.3,
      fl: -43.21,
      glass: "S-NBH53V (OHARA)",
      cemented: "D3",
      role: "Negative meniscus partner for L23; completes the positive-power GR2a achromatizing section.",
    },
    {
      id: 10,
      name: "L25",
      label: "L25 high-index positive element",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 29.81,
      glass: "S-LAH99 class (OHARA)",
      role: "Strongest positive single element in GR2; satisfies the patent high-index condition for nd2ap.",
    },
    {
      id: 11,
      name: "L26",
      label: "L26 rear-subgroup negative meniscus",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.8,
      fl: -55.6,
      glass: "N-SF2 (SCHOTT)",
      role: "First negative component of GR2b; helps place negative power at the image side of the focus group.",
    },
    {
      id: 12,
      name: "L27",
      label: "L27 rear XA element",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.85235,
      vd: 40.1,
      fl: -126.92,
      glass: "Unmatched (lanthanum flint, 852/401; no exact public catalog match)",
      role: "Rear negative asphere; peripheral negative-power increase corrects field curvature and distortion in GR2b.",
    },
    {
      id: 13,
      name: "L31",
      label: "L31 fixed rear element",
      type: "Biconvex Positive",
      nd: 1.61997,
      vd: 63.9,
      fl: 165.59,
      glass: "PCD40 (Hoya)",
      role: "Weak fixed rear positive element; patent describes this optional third group as useful for dust sealing.",
    },
  ],

  surfaces: [
    { label: "1A", R: 47.284, d: 2.0, nd: 1.77002, elemId: 1, sd: 16.3 },
    { label: "2A", R: 18.11, d: 13.76, nd: 1.0, elemId: 0, sd: 16.2 },
    { label: "3", R: -98.7, d: 1.45, nd: 1.497, elemId: 2, sd: 16.5 },
    { label: "4", R: 51.12, d: 5.26, nd: 2.001, elemId: 3, sd: 16.4 },
    { label: "5", R: -155.4, d: 6.08, nd: 1.0, elemId: 0, sd: 16.2 },
    { label: "6", R: -40.64, d: 1.2, nd: 1.78472, elemId: 4, sd: 15.4 },
    { label: "7", R: 800.0, d: 6.73, nd: 1.0, elemId: 0, sd: 15.3 },
    { label: "8", R: 164.76, d: 4.88, nd: 1.881, elemId: 5, sd: 16.3 },
    { label: "9", R: -49.76, d: 2.86, nd: 1.0, elemId: 0, sd: 16.2 },
    { label: "STO", R: 1e15, d: 7.87, nd: 1.0, elemId: 0, sd: 15.07 },
    { label: "11", R: 25.45, d: 7.62, nd: 1.497, elemId: 6, sd: 17.2 },
    { label: "12", R: -388.44, d: 1.25, nd: 1.74077, elemId: 7, sd: 16.8 },
    { label: "13", R: 29.43, d: 0.4, nd: 1.0, elemId: 0, sd: 15.6 },
    { label: "14", R: 28.52, d: 9.69, nd: 1.497, elemId: 8, sd: 15.65 },
    { label: "15", R: -28.52, d: 1.25, nd: 1.738, elemId: 9, sd: 15.65 },
    { label: "16", R: -275.22, d: 0.3, nd: 1.0, elemId: 0, sd: 15.6 },
    { label: "17", R: 33.42, d: 5.19, nd: 2.001, elemId: 10, sd: 16.3 },
    { label: "18", R: -256.66, d: 2.33, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "19", R: 133.09, d: 1.0, nd: 1.64769, elemId: 11, sd: 14.1 },
    { label: "20", R: 28.26, d: 4.86, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "21A", R: -300.0, d: 1.4, nd: 1.85235, elemId: 12, sd: 12.8 },
    { label: "22A", R: 169.545, d: 2.91, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "23", R: 113.29, d: 2.5, nd: 1.61997, elemId: 13, sd: 12.4 },
    { label: "24", R: -1085.07, d: 15.51, nd: 1.0, elemId: 0, sd: 12.2 },
  ],

  asph: {
    "1A": {
      K: 0,
      A4: 2.6794e-7,
      A6: -1.545e-8,
      A8: 3.5857e-11,
      A10: -4.8835e-14,
      A12: 2.6703e-17,
      A14: 0,
    },
    "2A": {
      K: -3.6126e-1,
      A4: 4.4434e-6,
      A6: -1.39e-8,
      A8: -8.7422e-12,
      A10: 1.3708e-13,
      A12: -3.2811e-16,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: -6.4801e-5,
      A6: 2.2496e-7,
      A8: 6.4591e-10,
      A10: -9.7531e-12,
      A12: 2.1426e-14,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: -2.7344e-5,
      A6: 2.8107e-7,
      A8: 6.165e-10,
      A10: -7.7377e-12,
      A12: 1.5239e-14,
      A14: 0,
    },
  },

  var: {
    STO: [7.87, 2.84],
    "22A": [2.91, 7.94],
  },
  varLabels: [
    ["STO", "d10"],
    ["22A", "d22"],
  ],

  groups: [
    { text: "GR1 fixed", fromSurface: "1A", toSurface: "9" },
    { text: "GR2 focus", fromSurface: "11", toSurface: "22A" },
    { text: "GR3 fixed", fromSurface: "23", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  focusDescription:
    "Internal focus by unit translation of GR2: d10 closes from 7.87 mm to 2.84 mm while d22 opens from 2.91 mm to 7.94 mm, moving GR2 5.03 mm toward the object at close focus.",
  closeFocusM: 0.24,
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 11,

  offAxisFieldFrac: 0.4,
  scFill: 0.58,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
