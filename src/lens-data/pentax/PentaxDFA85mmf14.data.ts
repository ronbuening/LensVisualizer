import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ HD PENTAX-D FA★ 85mm F1.4 ED SDM AW                                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2020/0301101 A1, Numerical Example 3.               ║
 * ║ Large-aperture positive/positive DSLR medium-telephoto design.      ║
 * ║ 12 elements / 10 groups, two aspherical surfaces on the last lens.  ║
 * ║ Focus: rear focus; patent publishes infinity separations only.      ║
 * ║                                                                      ║
 * ║ NOTE ON COVER GLASS:                                                 ║
 * ║   Patent surfaces 24-25 are a 2.00 mm flat cover glass at nd=1.51633 ║
 * ║   followed by fB=0.50 mm. Per project convention, the cover glass is ║
 * ║   excluded from the surfaces array and folded into the final BFD:    ║
 * ║   d23A = 38.06 + 2.00/1.51633 + 0.50 = 39.878974 mm.                ║
 * ║                                                                      ║
 * ║ NOTE ON SEMI-DIAMETERS:                                             ║
 * ║   The patent does not publish clear apertures. SDs were estimated by ║
 * ║   paraxial marginal/chief-ray trace, then constrained by the 82 mm    ║
 * ║   filter thread, sd/|R| < 0.90, edge thickness, signed cross-gap sag, ║
 * ║   and element front/rear SD ratio. The wide-open full diagonal is     ║
 * ║   intentionally mechanically vignetted, as expected for this class.  ║
 * ║                                                                      ║
 * ║ IMPORTANT: This file describes only the optical design. It excludes  ║
 * ║ sensor cover glass, filters, motors, barrel, diaphragm blades, and   ║
 * ║ other mechanical components.                                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "pentax-dfa-85mm-f14",
  maker: "Pentax",
  name: "PENTAX HD D FA* 85mm f/1.4 ED SDM AW",
  subtitle: "US 2020/0301101 A1 — Numerical Example 3",
  specs: [
    "12 elements / 10 groups",
    "f = 83.41 mm design; 85 mm marketed",
    "F1.46 design; F1.4 marketed",
    "2ω = 29.0° design; 28.5° marketed",
    "2 aspherical surfaces",
  ],

  focalLengthMarketing: 85,
  focalLengthDesign: 83.41,
  apertureMarketing: 1.4,
  apertureDesign: 1.46,
  lensMounts: ["pentax-k"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2020/0301101 A1",
  patentAuthors: ["Yoichi Nomura"],
  patentAssignees: [],
  patentYear: 2020,
  elementCount: 12,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.3,
      fl: -120.9,
      glass: "S-NBM51 (OHARA)",
      apd: "inferred",
      dPgF: -0.006,
      apdNote: "θg,F catalog value gives ΔPgF ≈ -0.006; front negative APD partner.",
      role: "Concave-front negative compensator; establishes the front-group divergence, distortion balance, and Petzval correction.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95.0,
      fl: 215.4,
      glass: "S-FPL53 (OHARA) / FCD100 class",
      apd: "inferred",
      dPgF: 0.05,
      apdNote: "Super-ED fluorophosphate; θg,F catalog value gives ΔPgF ≈ +0.050.",
      role: "First low-dispersion positive lens of G1; primary axial-color and secondary-spectrum corrector.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 330.5,
      glass: "S-LAH58 (OHARA)",
      role: "High-index positive member in G1; raises average positive-lens index for Petzval and field-curvature control.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95.0,
      fl: 231.9,
      glass: "S-FPL53 (OHARA) / FCD100 class",
      apd: "inferred",
      dPgF: 0.05,
      apdNote: "Super-ED fluorophosphate; θg,F catalog value gives ΔPgF ≈ +0.050.",
      role: "Second Super-ED positive in G1; reinforces axial-color correction while preserving modest front-group power.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 21",
      type: "Positive Meniscus",
      nd: 1.8707,
      vd: 40.7,
      fl: 98.0,
      glass: "TAFD32 (HOYA, 871/407 lanthanum class)",
      role: "High-index positive meniscus beginning G2a; converges the beam toward the stop and balances the ED element behind it.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 22",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 95.0,
      fl: 102.7,
      glass: "S-FPL53 (OHARA) / FCD100 class",
      apd: "inferred",
      dPgF: 0.05,
      apdNote: "Third Super-ED element; θg,F catalog value gives ΔPgF ≈ +0.050.",
      role: "Low-dispersion positive near the stop, where marginal-ray height gives strong axial-color leverage.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 23",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 38.3,
      fl: -37.5,
      glass: "S-NBH52V (OHARA)",
      role: "High-dispersion negative meniscus that locally achromatizes G2a and forms the object-side wall of the stop air lens.",
    },
    {
      id: 8,
      name: "L24′",
      label: "Element 24′",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 38.3,
      fl: -25.5,
      glass: "S-NBH52V (OHARA)",
      cemented: "D1",
      role: "Negative half of the first rear cemented doublet; forms the rear wall of the biconvex stop air lens.",
    },
    {
      id: 9,
      name: "L25′",
      label: "Element 25′",
      type: "Biconvex Positive",
      nd: 1.8919,
      vd: 37.1,
      fl: 24.5,
      glass: "S-LAH92 (OHARA)",
      cemented: "D1",
      role: "Very high-index dense-lanthanum positive in G2b; contributes rear-group power and Petzval correction.",
    },
    {
      id: 10,
      name: "L26′",
      label: "Element 26′",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      fl: -27.0,
      glass: "S-NBH53V (OHARA)",
      cemented: "D2",
      role: "High-dispersion negative half of the second rear cemented doublet.",
    },
    {
      id: 11,
      name: "L27′",
      label: "Element 27′",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 27.8,
      glass: "S-LAH55V (OHARA)",
      cemented: "D2",
      role: "High-index positive half of the second rear doublet; achromatizing and field-flattening partner to L26′.",
    },
    {
      id: 12,
      name: "L28′",
      label: "Element 28′",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 123.0,
      glass: "M-LAC130 / MP-LAC130 (HOYA, moldable lanthanum crown)",
      role: "Last positive double-aspheric element; trims residual spherical aberration, coma, astigmatism, and field curvature.",
    },
  ],

  surfaces: [
    { label: "1", R: -189.565, d: 3.0, nd: 1.6134, elemId: 1, sd: 40.0 },
    { label: "2", R: 122.53, d: 1.01, nd: 1.0, elemId: 0, sd: 40.0 },
    { label: "3", R: 100.426, d: 10.6, nd: 1.43875, elemId: 2, sd: 40.0 },
    { label: "4", R: -1550.216, d: 3.14, nd: 1.0, elemId: 0, sd: 40.0 },
    { label: "5", R: 200.965, d: 5.07, nd: 1.883, elemId: 3, sd: 40.0 },
    { label: "6", R: 637.929, d: 0.5, nd: 1.0, elemId: 0, sd: 40.0 },
    { label: "7", R: 106.673, d: 8.51, nd: 1.43875, elemId: 4, sd: 40.0 },
    { label: "8", R: -2149.801, d: 23.43, nd: 1.0, elemId: 0, sd: 40.0 },
    { label: "9", R: 46.311, d: 7.31, nd: 1.8707, elemId: 5, sd: 28.0 },
    { label: "10", R: 93.871, d: 0.3, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "11", R: 37.788, d: 10.88, nd: 1.43875, elemId: 6, sd: 24.0 },
    { label: "12", R: 213.732, d: 0.93, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "13", R: 238.884, d: 2.5, nd: 1.673, elemId: 7, sd: 22.0 },
    { label: "14", R: 22.724, d: 8.9, nd: 1.0, elemId: 0, sd: 19.7 },
    { label: "STO", R: 1e15, d: 4.81, nd: 1.0, elemId: 0, sd: 15.784 },
    { label: "16", R: -42.077, d: 1.3, nd: 1.673, elemId: 8, sd: 17.2 },
    { label: "17", R: 29.272, d: 8.62, nd: 1.8919, elemId: 9, sd: 17.2 },
    { label: "18", R: -74.73, d: 1.44, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "19", R: -48.21, d: 1.3, nd: 1.738, elemId: 10, sd: 17.8 },
    { label: "20", R: 34.393, d: 8.38, nd: 1.83481, elemId: 11, sd: 18.0 },
    { label: "21", R: -63.703, d: 0.25, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "22A", R: 206.484, d: 3.46, nd: 1.6935, elemId: 12, sd: 22.5 },
    { label: "23A", R: -144.341, d: 39.87897410194351, nd: 1.0, elemId: 0, sd: 22.7 },
  ],

  asph: {
    "22A": {
      K: 0,
      A4: -0.101e-5,
      A6: -0.7022e-8,
      A8: 0.7043e-11,
      A10: -0.5523e-14,
      A12: -0.4109e-17,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: 0.1762e-5,
      A6: -0.64e-8,
      A8: 0.1058e-10,
      A10: -0.6034e-14,
      A12: 0,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2a", fromSurface: "9", toSurface: "14" },
    { text: "G2b", fromSurface: "16", toSurface: "23A" },
  ],
  doublets: [
    { text: "24′+25′", fromSurface: "16", toSurface: "18" },
    { text: "26′+27′", fromSurface: "19", toSurface: "21" },
  ],

  focusDescription:
    "Rear focus: the patent states that G1 is fixed and G2 moves toward the object for close focus; no close-focus variable-gap table is published, so this data file carries the verified infinity prescription only.",
  closeFocusM: 0.85,
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  scFill: 0.64,
  yScFill: 0.78,
  offAxisFieldFrac: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
