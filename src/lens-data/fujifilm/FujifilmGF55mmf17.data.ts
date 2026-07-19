import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJIFILM GF55mmF1.7 R WR                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2023/0341664 A1, Example 1, Tables 1–3.            ║
 * ║  Production match: FUJINON GF55mmF1.7 R WR.                         ║
 * ║  14 elements / 10 groups; four aspherical surfaces on two elements. ║
 * ║  Focus: G2 inner focus; G1 and G3 fixed relative to the image plane.║
 * ║                                                                    ║
 * ║  NOTE ON SENSOR COVER GLASS:                                        ║
 * ║    Patent surfaces 26–27 are the optical member PP / sensor cover.  ║
 * ║    Per project convention they are excluded from the surfaces array. ║
 * ║    Their optical path is folded into the final air-equivalent BFD:   ║
 * ║    17.4498 + 3.2000 / 1.51680 + 1.0582 = 20.6177046414 mm.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. SDs below are       ║
 * ║    conservative inferred rendering apertures, checked by paraxial   ║
 * ║    marginal/chief-ray tracing, edge-thickness limits, and air-gap   ║
 * ║    sag-intrusion constraints. They are not manufacturer-published   ║
 * ║    mechanical clear-aperture specifications.                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and variable focus gaps                          ║
 * ║    ✗ Sensor cover glass is not modeled as refracting surfaces       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "fujifilm-gf55mm-f17-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 55mm f/1.7 R WR",
  subtitle: "US 2023/0341664 A1 — Example 1",
  specs: ["55mm f/1.7", "14 elements / 10 groups", "2 aspherical + 2 ED elements", "G mount / 44×33 format"],

  focalLengthMarketing: 55,
  focalLengthDesign: 56.6715,
  apertureMarketing: 1.7,
  apertureDesign: 1.75,
  lensMounts: ["fujifilm-g"],
  imageFormat: "44x33",
  patentNumber: "US 2023/0341664 A1",
  patentAuthors: ["Yasutaka Shimada", "Shunsuke MIYAGISHIMA"],
  patentAssignees: ["Fujifilm Corp"],
  patentYear: 2023,
  elementCount: 14,
  groupCount: 10,
  apertureBlades: 11,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.45,
      fl: -81.74,
      glass: "FF5 (HOYA, 593-354 code)",
      role: "Weak negative front meniscus; sets the front collector geometry and contributes a mild negative front-group power.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.31,
      fl: 113.72,
      glass: "S-LAH98 (OHARA) / TAFD45 class",
      role: "High-index positive corrector in G1; offsets L11 while keeping G1 net weakly negative.",
    },
    {
      id: 3,
      name: "L21",
      label: "L21",
      type: "Positive Meniscus",
      nd: 2.05091,
      vd: 26.95,
      fl: 58.4,
      glass: "TAFD65 (HOYA, 051-269 code)",
      role: "Highest-index element in the lens and the first positive member of the moving focus group.",
    },
    {
      id: 4,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 82.97,
      glass: "FCD1 (HOYA) / S-FPL51 class",
      role: "First ED element; positive half of the pre-stop achromat in G2.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.7888,
      vd: 28.43,
      fl: -47.72,
      glass: "S-NBH58 (OHARA)",
      role: "Dense-flint negative partner cemented to L22; balances the high-Abbe ED positive.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L24",
      label: "L24",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.7721,
      vd: 49.3,
      fl: 65.4,
      glass: "772493 — molded lanthanum-crown class (no exact public catalog match)",
      role: "Post-stop aspherical positive meniscus; primary spherical-aberration and bokeh-transition corrector.",
    },
    {
      id: 7,
      name: "L25",
      label: "L25",
      type: "Biconcave Negative",
      nd: 1.62589,
      vd: 35.71,
      fl: -20.42,
      glass: "E-F1 (HOYA) / S-TIM1 class",
      role: "Strong post-stop negative member; starts the first negative-positive cemented pair behind the aperture.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L26",
      label: "L26",
      type: "Biconvex Positive",
      nd: 1.59283,
      vd: 68.63,
      fl: 23.6,
      glass: "FCD515 / FCD505 class (HOYA, 593-686 code)",
      role: "Second ED-class positive element; achromatizing partner to L25.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L27",
      label: "L27",
      type: "Biconcave Negative",
      nd: 1.7888,
      vd: 28.43,
      fl: -23.41,
      glass: "S-NBH58 (OHARA)",
      role: "Second dense-flint negative in G2; paired with the very high-index L28.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L28",
      label: "L28",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.43,
      fl: 24.99,
      glass: "TAFD40 / J-LASFH17 class (001-255 code)",
      role: "High-index positive exit member of the moving focus group.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.8485,
      vd: 43.79,
      fl: 33.87,
      glass: "J-LASFH22 (HIKARI, 849-438 code)",
      role: "Positive front member of the rear-group achromat; contributes lateral-color correction near the image side.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L32",
      label: "L32",
      type: "Biconcave Negative",
      nd: 1.59551,
      vd: 39.22,
      fl: -39.54,
      glass: "E-F8 (HOYA) / S-TIM8 class",
      role: "Negative partner of the G3 cemented achromat.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.23,
      fl: -157.97,
      glass: "E-FEL2 (HOYA) / S-TIL2 class",
      role: "Weak negative field-shaping meniscus ahead of the rear asphere.",
    },
    {
      id: 14,
      name: "L34",
      label: "L34",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.68863,
      vd: 31.2,
      fl: -885.24,
      glass: "M-FD80 / E-FD8 class (HOYA 689-312, close match)",
      role: "Near-afocal rear aspherical corrector for off-axis aberrations, field curvature, and distortion stability.",
    },
  ],

  surfaces: [
    { label: "1", R: 189.7752, d: 1.7, nd: 1.5927, elemId: 1, sd: 34.0 },
    { label: "2", R: 38.4658, d: 1.68, nd: 1.0, elemId: 0, sd: 33.5 },
    { label: "3", R: 39.4444, d: 4.37, nd: 1.95375, elemId: 2, sd: 26.0 },
    { label: "4", R: 58.6361, d: 15.47, nd: 1.0, elemId: 0, sd: 26.0 },
    { label: "5", R: 47.1747, d: 3.88, nd: 2.05091, elemId: 3, sd: 19.2 },
    { label: "6", R: 195.3507, d: 2.98, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "7", R: 46.9048, d: 4.47, nd: 1.497, elemId: 4, sd: 17.3 },
    { label: "8", R: -330.299, d: 1.22, nd: 1.7888, elemId: 5, sd: 17.3 },
    { label: "9", R: 42.5483, d: 4.26, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "STO", R: 1e15, d: 6.65, nd: 1.0, elemId: 0, sd: 13.7271 },
    { label: "11A", R: -67.7803, d: 3.88, nd: 1.7721, elemId: 6, sd: 16.6 },
    { label: "12A", R: -29.6594, d: 0.64, nd: 1.0, elemId: 0, sd: 16.6 },
    { label: "13", R: -28.4983, d: 1.17, nd: 1.62589, elemId: 7, sd: 16.0 },
    { label: "14", R: 23.5438, d: 12.44, nd: 1.59283, elemId: 8, sd: 16.0 },
    { label: "15", R: -27.7112, d: 0.7, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "16", R: -28.8287, d: 1.23, nd: 1.7888, elemId: 9, sd: 17.2 },
    { label: "17", R: 52.3351, d: 7.52, nd: 2.00069, elemId: 10, sd: 17.2 },
    { label: "18", R: -44.4459, d: 3.51, nd: 1.0, elemId: 0, sd: 17.2 },
    { label: "19", R: 94.8433, d: 7.76, nd: 1.8485, elemId: 11, sd: 19.0 },
    { label: "20", R: -39.6921, d: 1.36, nd: 1.59551, elemId: 12, sd: 19.0 },
    { label: "21", R: 58.6314, d: 5.06, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "22", R: -76.6425, d: 1.24, nd: 1.54072, elemId: 13, sd: 17.0 },
    { label: "23", R: -750.3849, d: 4.11, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "24A", R: -299.9968, d: 3.5, nd: 1.68863, elemId: 14, sd: 18.5 },
    { label: "25A", R: -593.4954, d: 20.6177046414, nd: 1.0, elemId: 0, sd: 18.5 },
  ],

  asph: {
    "11A": {
      K: 0,
      A4: -9.713474e-6,
      A6: -1.5209098e-7,
      A8: 3.5418863e-9,
      A10: -5.5997685e-11,
      A12: 5.5503196e-13,
      A14: -3.4564182e-15,
      A16: 1.3078108e-17,
      A18: -2.732998e-20,
      A20: 2.39775e-23,
    },
    "12A": {
      K: 0,
      A4: -1.9062669e-6,
      A6: -1.2250081e-7,
      A8: 2.8717554e-9,
      A10: -4.4123528e-11,
      A12: 4.2981705e-13,
      A14: -2.6519418e-15,
      A16: 1.0024634e-17,
      A18: -2.113945e-20,
      A20: 1.8963057e-23,
    },
    "24A": {
      K: 0,
      A4: -2.3970257e-5,
      A6: -9.8719288e-9,
      A8: -2.3513245e-11,
      A10: 7.9437317e-13,
      A12: -6.7634995e-15,
      A14: 2.801317e-17,
      A16: -5.8875024e-20,
      A18: 5.6671369e-23,
      A20: -1.505705e-26,
    },
    "25A": {
      K: 0,
      A4: -1.9100502e-5,
      A6: -2.9730877e-8,
      A8: 3.1883941e-10,
      A10: -1.9712131e-12,
      A12: 7.8749013e-15,
      A14: -2.0296268e-17,
      A16: 3.3821126e-20,
      A18: -3.3769127e-23,
      A20: 1.559849e-26,
    },
  },

  var: {
    "4": [15.47, 4.28],
    "18": [3.51, 14.7],
  },

  varLabels: [
    ["4", "DD[4] G1–G2"],
    ["18", "DD[18] G2–G3"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "4" },
    { text: "G2 / focus", fromSurface: "5", toSurface: "18" },
    { text: "G3", fromSurface: "19", toSurface: "25A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "Inner focusing: the eight-element G2 focus unit, including the aperture stop, moves 11.19 mm toward the object; G1 and G3 remain fixed relative to the image plane.",

  nominalFno: 1.7,
  fstopSeries: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.58,
  yScFill: 0.74,
} satisfies LensDataInput;

export default LENS_DATA;
