import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — HD PENTAX-D FA★ 50mm F1.4 SDM AW                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0250367 A1, Example 1 (Minoru Murayama).    ║
 * ║  Fast full-frame K-mount standard lens; modified-Gauss rear group ║
 * ║  with a preceding aberration-correction/front-converter group.     ║
 * ║  15 elements / 9 air-separated groups, 2 aspherical surfaces.      ║
 * ║  Focus: G1 fixed; G2 translates toward the object as a rigid unit. ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 26-27 are a 2.000 mm sensor cover plate         ║
 * ║    (nd = 1.51633) followed by BF = 1.000 mm. Per project spec,     ║
 * ║    the cover plate is excluded; surface 25A folds D25 + 2/n + BF  ║
 * ║    into an air-equivalent final gap: 39.628974 mm at infinity and ║
 * ║    49.024974 mm at the short-distance focus state.                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not list clear apertures. Semi-diameters below  ║
 * ║    were estimated from paraxial marginal/chief-ray envelopes at    ║
 * ║    the rendered off-axis field, then reduced where required by     ║
 * ║    edge-thickness, element-ratio, and cross-gap sag constraints.   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design. It        ║
 * ║  excludes sensor cover glass, filters, and mechanical components.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "pentax-dfa-50mm-f14-sdm-aw",
  maker: "PENTAX",
  name: "PENTAX HD D FA* 50mm f/1.4 SDM AW",
  subtitle: "US 2019/0250367 A1 Example 1 — Murayama",
  specs: [
    "15 elements / 9 groups",
    "f = 49.57 mm design",
    "F1.45 design / F1.4 nominal",
    "2ω = 47°",
    "2 aspherical surfaces",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 49.567,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  lensMounts: ["pentax-k"],
  imageFormat: "135-full-frame",
  patentYear: 2019,
  elementCount: 15,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "G1a front positive",
      type: "Weak Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      fl: 308.0,
      glass: "F5-class dense flint (HOYA E-F5 / Schott F-type equivalent)",
      apd: false,
      role: "Weak front positive of the negative G1a cemented component; supports lateral color correction.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "G1a rear negative",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.3,
      fl: -60.7,
      glass: "S-NBM51 / N-KZFS4 class (613443)",
      apd: false,
      role: "Strong negative member of G1a; its image-side concave surface is the R1aN surface in the patent conditions.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "G1b high-index positive",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      fl: 43.0,
      glass: "TAFD35 (HOYA, 911353; patent rounds νd to 35.2)",
      apd: false,
      role: "High-index positive lens in the first G1b cemented doublet; satisfies the n12P condition.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L14",
      label: "G1b cemented negative",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.3,
      fl: -62.0,
      glass: "S-NBM51 / N-KZFS4 class (613443)",
      apd: false,
      role: "Achromatizing negative partner for L13; the cemented pair remains net positive.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L21",
      label: "G1b negative component front",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      fl: -45.3,
      glass: "Niobium dense flint class (OHARA S-NBH8 class)",
      apd: false,
      role: "Negative member of the second G1b cemented component; spreads front-group negative power.",
      cemented: "D3",
    },
    {
      id: 6,
      name: "L22",
      label: "G1b anomalous crown",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 105.2,
      glass: "S-PHM52 (OHARA, 618634)",
      apd: "inferred",
      dPgF: 0.0052,
      apdNote: "Mild positive ΔPgF inferred from the catalog S-PHM52 match; front-group secondary-spectrum trim.",
      role: "Positive low-dispersion partner in the net-negative G1b cemented component.",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L23",
      label: "G1b rear positive",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 55.8,
      glass: "S-LAH55 / TAFD5F class (835427)",
      apd: false,
      role: "Rear positive singlet of G1b; re-converges the bundle before G2.",
    },
    {
      id: 8,
      name: "L31",
      label: "G2a leading positive",
      type: "Positive Meniscus",
      nd: 1.8515,
      vd: 40.8,
      fl: 112.5,
      glass: "OHARA S-LAH89 class",
      apd: false,
      role: "Leading positive lens of G2a; contributes to the ν2aP average in the patent conditions.",
    },
    {
      id: 9,
      name: "L32",
      label: "G2a ED positive",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 53.8,
      glass: "OHARA S-FPM2 / ED fluorophosphate class",
      apd: "patent",
      dPgF: 0.0144,
      apdNote: "Uses the same nd/νd class as the patent's θgF22 = 0.5442 ED positive; ΔPgF ≈ +0.0144.",
      role: "ED positive in the G2a cemented lens; primary secondary-spectrum corrector before the stop.",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L33",
      label: "G2a flint negative",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      fl: -43.3,
      glass: "F5-class dense flint (HOYA E-F5 / Schott F-type equivalent)",
      apd: false,
      role: "Negative cemented partner to L32; image-facing concave surface is noted in the patent description of G2a.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L41",
      label: "G2b object-side negative",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      fl: -34.9,
      glass: "F5-class dense flint (HOYA E-F5 / Schott F-type equivalent)",
      apd: false,
      role: "Negative member of the object-side cemented lens behind the stop.",
      cemented: "D5",
    },
    {
      id: 12,
      name: "L42",
      label: "G2b ED positive",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      fl: 40.8,
      glass: "OHARA S-FPM2 / ED fluorophosphate class",
      apd: "patent",
      dPgF: 0.0144,
      apdNote: "Patent condition lens: νd22 = 67.74, θgF22 = 0.5442; ΔPgF ≈ +0.0144.",
      role: "ED positive in G2b; explicit secondary-spectrum correction element in the patent conditions.",
      cemented: "D5",
    },
    {
      id: 13,
      name: "L43",
      label: "G2b high-index meniscus",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 111.7,
      glass: "S-LAH58 / TAFD30 class (883408)",
      apd: false,
      role: "Positive meniscus with convex image-side surface; satisfies the n2P condition.",
      cemented: "D6",
    },
    {
      id: 14,
      name: "L44",
      label: "G2b image-side negative",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      fl: -40.4,
      glass: "OHARA S-TIL26 class",
      apd: false,
      role: "Negative partner in the image-side cemented lens; helps balance the symmetric stop-flanking correction.",
      cemented: "D6",
    },
    {
      id: 15,
      name: "L51",
      label: "Rear double-sided asphere",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7725,
      vd: 49.5,
      fl: 36.9,
      glass: "773495 - moldable lanthanum crown class (patent nd=1.77250, νd=49.5)",
      apd: false,
      role: "Strong final positive collector; both surfaces are aspherical for spherical, coma, and astigmatism correction.",
    },
  ],

  surfaces: [
    { label: "1", R: 292.188, d: 4.368, nd: 1.60342, elemId: 1, sd: 33.0 },
    { label: "2", R: -508.04, d: 2.4, nd: 1.6134, elemId: 2, sd: 32.0 },
    { label: "3", R: 40.248, d: 6.809, nd: 1.0, elemId: 0, sd: 26.0 },
    { label: "4", R: 99.387, d: 11.193, nd: 1.91082, elemId: 3, sd: 27.4 },
    { label: "5", R: -61.124, d: 1.95, nd: 1.6134, elemId: 4, sd: 27.2 },
    { label: "6", R: 102.032, d: 8.974, nd: 1.0, elemId: 0, sd: 22.4 },
    { label: "7", R: -50.023, d: 1.75, nd: 1.72047, elemId: 5, sd: 22.4 },
    { label: "8", R: 95.253, d: 6.188, nd: 1.618, elemId: 6, sd: 26.5 },
    { label: "9", R: -199.658, d: 0.1, nd: 1.0, elemId: 0, sd: 26.3 },
    { label: "10", R: 99.222, d: 8.352, nd: 1.83481, elemId: 7, sd: 26.3 },
    { label: "11", R: -84.561, d: 10.407, nd: 1.0, elemId: 0, sd: 26.1 },
    { label: "12", R: 54.801, d: 4.434, nd: 1.8515, elemId: 8, sd: 25.8 },
    { label: "13", R: 123.303, d: 0.183, nd: 1.0, elemId: 0, sd: 25.4 },
    { label: "14", R: 53.021, d: 8.578, nd: 1.59522, elemId: 9, sd: 22.0 },
    { label: "15", R: -75.909, d: 1.55, nd: 1.60342, elemId: 10, sd: 21.6 },
    { label: "16", R: 40.154, d: 6.141, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "STO", R: 1e15, d: 3.791, nd: 1.0, elemId: 0, sd: 15.32 },
    { label: "18", R: -45.293, d: 1.27, nd: 1.60342, elemId: 11, sd: 16.5 },
    { label: "19", R: 39.736, d: 7.837, nd: 1.59522, elemId: 12, sd: 16.8 },
    { label: "20", R: -57.921, d: 0.978, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "21", R: -41.379, d: 3.134, nd: 1.883, elemId: 13, sd: 18.0 },
    { label: "22", R: -30.183, d: 1.25, nd: 1.56732, elemId: 14, sd: 17.5 },
    { label: "23", R: 96.931, d: 0.632, nd: 1.0, elemId: 0, sd: 17.8 },
    { label: "24A", R: 67.722, d: 6.658, nd: 1.7725, elemId: 15, sd: 18.4 },
    { label: "25A", R: -47.005, d: 39.628974, nd: 1.0, elemId: 0, sd: 18.7 },
  ],

  asph: {
    "24A": {
      K: 0,
      A4: -0.3057e-5,
      A6: -0.256e-8,
      A8: 0.1404e-10,
      A10: -0.3622e-13,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: 0.2344e-5,
      A6: -0.4523e-8,
      A8: 0.1659e-10,
      A10: -0.3687e-13,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "11": [10.407, 1.012],
    "25A": [39.628974, 49.024974],
  },

  varLabels: [
    ["11", "D11"],
    ["25A", "BF (air-equivalent)"],
  ],

  groups: [
    { text: "G1a", fromSurface: "1", toSurface: "3" },
    { text: "G1b", fromSurface: "4", toSurface: "11" },
    { text: "G2a", fromSurface: "12", toSurface: "16" },
    { text: "G2b", fromSurface: "18", toSurface: "25A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
    { text: "D3", fromSurface: "7", toSurface: "9" },
    { text: "D4", fromSurface: "14", toSurface: "16" },
    { text: "D5", fromSurface: "18", toSurface: "20" },
    { text: "D6", fromSurface: "21", toSurface: "23" },
  ],

  closeFocusM: 0.4,
  focusDescription:
    "Rear-group unit focusing. The first group is stationary; the complete second group translates toward the object. Patent Example 1 changes D11 from 10.407 mm to 1.012 mm and the folded air-equivalent back focus from 39.628974 mm to 49.024974 mm.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.53,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
