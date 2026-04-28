import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJIFILM FUJINON XF 18mm f/2 R               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0240851 A1 Example 4 (Kawamura / Fujifilm).  ║
 * ║  Compact retrofocus wide-angle for X-mount APS-C.                  ║
 * ║  8 elements / 7 groups, 4 aspherical surfaces (2 glass-mold).      ║
 * ║  Focus: unit focusing (entire lens translates).                    ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL COEFFICIENTS:                                  ║
 * ║    The patent uses an extended polynomial including odd-order       ║
 * ║    terms (A3, A5, A7, ..., A15) in addition to standard even-      ║
 * ║    order terms.  Since this format supports only even-order         ║
 * ║    coefficients (A4–A14), all four aspherical surfaces have been   ║
 * ║    REFITTED to even-order-only polynomials via least-squares       ║
 * ║    optimization against the patent's full sag curve.  Max sag      ║
 * ║    error across all surfaces is < 0.00023 mm (sub-wavelength).     ║
 * ║    The refitted K values differ from the patent's KA − 1           ║
 * ║    because K absorbs some of the odd-order contribution.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  SDs estimated from        ║
 * ║    paraxial marginal + chief ray trace at the APS-C production     ║
 * ║    field (ω ≈ 37°), with 8% mechanical clearance.  S13A and S14A  ║
 * ║    anchored to patent Table 17 effective radii Re1 = 5.80,         ║
 * ║    Re2 = 6.96.  S12/S13A further constrained by cross-gap sag     ║
 * ║    intrusion at the 2.40 mm air gap.                               ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf18f2r",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 18mm f/2 R",
  subtitle: "US 2014/0240851 A1 Example 4 — Kawamura / Fujifilm",
  specs: [
    "8 ELEMENTS / 7 GROUPS",
    "f ≈ 18.8 mm",
    "F/2.06",
    "2ω ≈ 76.5°",
    "4 ASPHERICAL SURFACES (2 GLASS-MOLD ELEMENTS)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 18,
  focalLengthDesign: 18.844,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  patentYear: 2014,
  elementCount: 8,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.43,
      fl: -16.1,
      glass: "S-NSL36 (OHARA)",
      apd: false,
      role: "Front negative — defines retrofocus geometry, diverges field for wide-angle coverage",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.16,
      fl: 25.8,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Partially compensates L1 divergence, begins converging beam toward stop",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.79,
      fl: -22.3,
      glass: "E-FD2 (HOYA)",
      apd: false,
      cemented: "Ja",
      role: "Doublet flint — provides chromatic correction via high dispersion",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.57,
      fl: 20.4,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      cemented: "Ja",
      role: "Doublet crown — primary converging power, corrects longitudinal and lateral chromatic aberration",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.80348,
      vd: 40.45,
      fl: 26.5,
      glass: "S-LAH63 (OHARA, glass-mold)",
      apd: false,
      role: "Aspherical corrector — corrects higher-order spherical aberration at f/2 aperture",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.92286,
      vd: 18.9,
      fl: -15.5,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Field flattener — extreme-index dense flint controls Petzval sum and higher-order chromatic",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.80348,
      vd: 40.45,
      fl: -26.7,
      glass: "S-LAH63 (OHARA, glass-mold)",
      apd: false,
      role: "Patent 'Lens B' — aspherical meniscus balances spherical aberration, field curvature, and distortion",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.71,
      fl: 23.5,
      glass: "S-LAH55VS (OHARA)",
      apd: false,
      role: "Patent 'Lens A' — final convergence and exit pupil control for sensor telecentricity",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: -130.0, d: 1.0, nd: 1.517417, elemId: 1, sd: 11.0 },
    { label: "2", R: 8.9033, d: 2.2, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "3", R: 20.1515, d: 2.2, nd: 1.834, elemId: 2, sd: 6.8 },
    { label: "4", R: 296.1613, d: 1.5, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "STO", R: 1e15, d: 3.0, nd: 1.0, elemId: 0, sd: 5.4 },
    { label: "6", R: 24.734, d: 0.86, nd: 1.647689, elemId: 3, sd: 6.5 },
    { label: "7", R: 9.0025, d: 5.0, nd: 1.804, elemId: 4, sd: 6.5 },
    { label: "8", R: -24.1575, d: 0.36, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "9A", R: 57.6598, d: 2.21, nd: 1.80348, elemId: 5, sd: 6.3 },
    { label: "10A", R: -33.1452, d: 0.43, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "11", R: -147.1837, d: 0.8, nd: 1.92286, elemId: 6, sd: 5.5 },
    { label: "12", R: 15.9115, d: 2.4, nd: 1.0, elemId: 0, sd: 4.8 },
    { label: "13A", R: -7.2122, d: 1.7, nd: 1.80348, elemId: 7, sd: 4.8 },
    { label: "14A", R: -12.0, d: 0.86, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "15", R: 52.1174, d: 5.3, nd: 1.834807, elemId: 8, sd: 7.0 },
    { label: "16", R: -30.0118, d: 7.8, nd: 1.0, elemId: 0, sd: 8.0 },
  ],

  /* ── Aspherical coefficients ──
   *  REFITTED from patent's odd+even polynomial (A3–A16) to even-order-only (K, A4–A14).
   *  K values differ from direct KA − 1 conversion because the refit absorbs odd-order
   *  contributions into the conic and even polynomial terms.
   *  Max sag fitting error: < 0.00023 mm across all four surfaces.
   */
  asph: {
    "9A": {
      K: -674.58363251,
      A4: 2.396466289e-4,
      A6: -1.512296096e-5,
      A8: 5.533886067e-7,
      A10: -8.85660033e-9,
      A12: 2.429110355e-11,
      A14: 4.073476238e-13,
    },
    "10A": {
      K: -208.18298948,
      A4: -7.084194949e-4,
      A6: 4.173727713e-5,
      A8: -1.802316624e-6,
      A10: 5.542858977e-8,
      A12: -9.573094646e-10,
      A14: 6.698138304e-12,
    },
    "13A": {
      K: -13.73498625,
      A4: -3.027966226e-3,
      A6: 2.369874274e-4,
      A8: -1.180975859e-5,
      A10: 3.610338391e-7,
      A12: -6.139529993e-9,
      A14: 4.314906773e-11,
    },
    "14A": {
      K: -19.06183962,
      A4: -6.40949092e-4,
      A6: 5.052975405e-5,
      A8: -1.634066658e-6,
      A10: 3.135979108e-8,
      A12: -3.423886784e-10,
      A14: 1.622962653e-12,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focusing: entire lens translates, only BFD changes.
   *  Close-focus extension ≈ f²/(MFD − f) ≈ 2.2 mm at 0.18 m.
   */
  var: {
    "16": [7.8, 10.0],
  },

  varLabels: [["16", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "4" },
    { text: "G2", fromSurface: "6", toSurface: "16" },
  ],

  doublets: [{ text: "Ja", fromSurface: "6", toSurface: "8" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.18,
  focusDescription: "Unit focusing — entire optical assembly translates along the optical axis.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
