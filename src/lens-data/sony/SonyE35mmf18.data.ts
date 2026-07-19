import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║              LENS DATA — Sony E 35mm F1.8 OSS                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2014-89352 A, Example 1 (Tamron / Sakai).        ║
 * ║  Compact APS-C positive-negative-positive inner-focus standard.    ║
 * ║  Patent lens count: 8 elements / 6 groups. The L113 hybrid         ║
 * ║  composite is modeled as resin + glass media, so this data file    ║
 * ║  contains 9 optical media entries for 8 patent lens elements.      ║
 * ║  Aspherics: surfaces 4A, 15A, 16A.                                ║
 * ║  Focus: G12 / L121 translates image-ward; G11 and G13 fixed.       ║
 * ║  Stabilization: L131 decenters perpendicular to the optical axis.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: none. Patent Example 1 is already f ≈ 35 mm.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: patent does not publish clear apertures.  ║
 * ║  SDs are estimated from paraxial on-axis marginal rays, full-field ║
 * ║  chief rays, the patent cross-section, filter-thread constraint,   ║
 * ║  edge-thickness checks, and signed cross-gap sag checks. Rear      ║
 * ║  group SDs intentionally imply ordinary wide-open off-axis          ║
 * ║  mechanical vignetting rather than full marginal-ray clearance.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-e-35mm-f18-oss",
  maker: "Sony",
  name: "SONY E 35mm f/1.8 OSS",
  subtitle: "JP 2014-89352 A Example 1 — Tamron / Sakai",
  specs: ["8 elements / 6 groups", "f = 34.914 mm", "F1.861 design", "2ω = 44.664°", "3 aspherical surfaces"],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.914,
  apertureMarketing: 1.8,
  apertureDesign: 1.861,
  lensMounts: ["sony-fe"],
  imageFormat: "aps-c",
  patentNumber: "JP 2014-089352 A",
  patentAuthors: ["Takahiko Sakai"],
  patentAssignees: ["Tamron Co Ltd"],
  patentYear: 2014,
  elementCount: 8,
  groupCount: 6,
  apertureBlades: 7,
  apertureBladeRoundedness: 1,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L111",
      label: "L111 front negative",
      type: "Biconcave Negative",
      nd: 1.762,
      vd: 26.609,
      fl: -18.13,
      glass: "FD140 / S-TIH14 class (762/266 heavy flint)",
      apd: false,
      cemented: "D1",
      role: "Concave-to-object heavy-flint prefix element for distortion control and front-doublet color balance.",
    },
    {
      id: 2,
      name: "L112",
      label: "L112 front positive",
      type: "Biconvex Positive",
      nd: 1.835,
      vd: 42.722,
      fl: 21.55,
      glass: "TAFD5G / TAFD5F / S-LAH55VS class (835/427)",
      apd: false,
      cemented: "D1",
      role: "Positive lanthanum-dense-flint partner in the weakly negative front cemented doublet.",
    },
    {
      id: 3,
      name: "L113r",
      label: "L113 composite resin layer",
      type: "Composite Aspheric Resin Layer",
      nd: 1.54,
      vd: 41.2,
      fl: 560.05,
      glass: "UV-curable optical resin (patent nd=1.540, νd=41.200)",
      apd: false,
      cemented: "H1",
      role: "Thin replicated composite-aspheric layer on the object-side face of L113.",
    },
    {
      id: 4,
      name: "L113g",
      label: "L113 high-index body",
      type: "Biconvex Positive",
      nd: 1.911,
      vd: 35.25,
      fl: 25.67,
      glass: "TAFD35L / TAFD35 class (HOYA 911/353)",
      apd: false,
      cemented: "H1",
      role: "Strong front-group positive body; carries most of G11 positive power with the resin aspheric surface.",
    },
    {
      id: 5,
      name: "L121",
      label: "L121 focus group",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.608,
      fl: -29.59,
      glass: "FCD1 / S-FPL51 class (ED fluorocrown, 497/816)",
      apd: "inferred",
      apdNote: "Catalog ED fluorocrown class; patent publishes nd/vd only, so no patent dPgF is assigned.",
      role: "Single-element negative ED inner-focus group; moves image-ward for close focus.",
    },
    {
      id: 6,
      name: "L131",
      label: "L131 OSS group",
      type: "Positive Meniscus",
      nd: 1.911,
      vd: 35.25,
      fl: 98.77,
      glass: "TAFD35L / TAFD35 class (HOYA 911/353)",
      apd: false,
      role: "Weak positive stabilization element decentered perpendicular to the optical axis.",
    },
    {
      id: 7,
      name: "L132",
      label: "L132 rear doublet positive",
      type: "Biconvex Positive",
      nd: 1.911,
      vd: 35.25,
      fl: 12.65,
      glass: "TAFD35L / TAFD35 class (HOYA 911/353)",
      apd: false,
      cemented: "D2",
      role: "Strong positive member of the rear cemented doublet; the pair is net negative in isolation.",
    },
    {
      id: 8,
      name: "L133",
      label: "L133 rear doublet negative",
      type: "Biconcave Negative",
      nd: 1.762,
      vd: 26.609,
      fl: -10.66,
      glass: "FD140 / S-TIH14 class (762/266 heavy flint)",
      apd: false,
      cemented: "D2",
      role: "Heavy-flint negative member of the rear cemented doublet; provides rear-group color and aberration balance.",
    },
    {
      id: 9,
      name: "L134",
      label: "L134 rear aspheric",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.851,
      vd: 40.105,
      fl: 37.52,
      glass: "M-TAFD305 / M-TAFD315 class (moldable 851/401)",
      apd: false,
      role: "Terminal two-surface aspheric field-correction element.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: -28.141, d: 2.386, nd: 1.762, elemId: 1, sd: 13.6 },
    { label: "2", R: 28.141, d: 4.99, nd: 1.835, elemId: 2, sd: 12.6 },
    { label: "3", R: -45.876, d: 0.3, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "4A", R: 27.04, d: 0.2, nd: 1.54, elemId: 3, sd: 12.4 },
    { label: "5", R: 29.618, d: 4.23, nd: 1.911, elemId: 4, sd: 12.4 },
    { label: "6", R: -103.468, d: 2.572, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "STO", R: 1e15, d: 1.799, nd: 1.0, elemId: 0, sd: 8.702 },
    { label: "8", R: 204.507, d: 0.95, nd: 1.497, elemId: 5, sd: 9.2 },
    { label: "9", R: 13.699, d: 8.353, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "10", R: 45.273, d: 1.839, nd: 1.911, elemId: 6, sd: 11.9 },
    { label: "11", R: 89.356, d: 1.697, nd: 1.0, elemId: 0, sd: 11.9 },
    { label: "12", R: 233.694, d: 4.949, nd: 1.911, elemId: 7, sd: 9.2 },
    { label: "13", R: -12.0, d: 1.273, nd: 1.762, elemId: 8, sd: 9.2 },
    { label: "14", R: 26.307, d: 0.826, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "15A", R: 28.017, d: 2.995, nd: 1.851, elemId: 9, sd: 10.0 },
    { label: "16A", R: 217.238, d: 18.14, nd: 1.0, elemId: 0, sd: 10.3 },
  ],

  asph: {
    "4A": { K: 0, A4: -1.759e-5, A6: -2.541e-8, A8: 2.14e-11, A10: 0, A12: 0, A14: 0 },
    "15A": { K: 0, A4: 4.393e-5, A6: -5.539e-8, A8: 1.026e-9, A10: -4.0e-13, A12: 0, A14: 0 },
    "16A": { K: 0, A4: 6.097e-5, A6: -6.809e-8, A8: 1.937e-9, A10: -2.882e-12, A12: 0, A14: 0 },
  },

  var: {
    STO: [1.799, 4.719],
    "9": [8.353, 5.434],
  },
  varLabels: [
    ["STO", "D(7)"],
    ["9", "D(9)"],
  ],

  groups: [
    { text: "G11", fromSurface: "1", toSurface: "STO" },
    { text: "G12 / Focus", fromSurface: "8", toSurface: "9" },
    { text: "G13 / OSS", fromSurface: "10", toSurface: "16A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "4A", toSurface: "6" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
  ],

  focusDescription: "Single-element inner focus: G12 / L121 moves image-ward; G11 and G13 remain fixed.",
  closeFocusM: 0.3,
  nominalFno: 1.8,
  maxFstop: 22,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  scFill: 0.56,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
