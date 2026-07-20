import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — LEICA SUMMICRON-R 50 mm f/2                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,123,144, Example 8 (Mandler / Edwards / Wagner).║
 * ║  Four-component, six-element, all-spherical Gauss objective.        ║
 * ║  6 elements / 4 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focus represented by a back-focus-only variable gap.   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent Example 8 is normalized to f = 100. All R, d, and sd     ║
 * ║    values below are scaled ×0.525 to the official 52.5 mm focal    ║
 * ║    length published for the production Summicron-R 50 mm f/2.      ║
 * ║                                                                    ║
 * ║  NOTE ON REFRACTIVE DATA:                                          ║
 * ║    The patent table uses e-line refractive constants (ne / νe).    ║
 * ║    The LensData schema names these fields nd / vd, so the patent   ║
 * ║    e-line values are stored there verbatim and identified in the   ║
 * ║    glass annotations.                                              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. SDs were estimated from       ║
 * ║    paraxial f/2 marginal and chief-ray envelopes, then constrained ║
 * ║    for positive edge thickness, ≤1.25 element SD ratio, and        ║
 * ║    cross-gap sag clearance. The off-axis display field is set      ║
 * ║    conservatively because the production data sheet shows full-    ║
 * ║    aperture vignetting at the edge of the 35 mm frame.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "leica-summicron-r-50mm-f2",
  maker: "Leica",
  name: "LEICA SUMMICRON-R 50mm f/2",
  subtitle: "US 4,123,144 Example 8 — Mandler / Edwards / Wagner",
  specs: [
    "6 elements / 4 groups",
    "52.5 mm design focal length",
    "f/2",
    "45° patent full field",
    "All-spherical Gauss objective",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 52.5,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["leica-r"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,123,144",
  patentAuthors: ["Walter Mandler", "Garry Edwards", "Erich Wagner"],
  patentAssignees: ["Ernst Leitz GmbH"],
  patentYear: 1978,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7343,
      vd: 28.19,
      fl: 74.32,
      glass: "Unmatched (Schott SF10 e-line constants; patent ne=1.73430, ve=28.19 stored as nd/vd)",
      role: "Front positive meniscus and first collector; high-index flint keeps curvature moderate under the matched-radius constraint.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex",
      nd: 1.67133,
      vd: 41.64,
      fl: 30.84,
      glass: "ZBaF17 / BaSF6-class (CDGM/Schott equivalent; patent ne/νe values stored as nd/vd)",
      cemented: "D1",
      role: "Positive member of the front cemented meniscus doublet; provides paired positive power before the flat bond interface.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave",
      nd: 1.7919,
      vd: 25.55,
      fl: -19.05,
      glass: "Unmatched (Schott SF11 e-line constants; patent ne=1.79190, ve=25.55 stored as nd/vd)",
      cemented: "D1",
      role: "High-dispersion negative member of the front doublet; supplies most of the front doublet divergence and chromatic correction leverage.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave",
      nd: 1.65222,
      vd: 33.6,
      fl: -23.13,
      glass: "Unmatched (Schott SF2 e-line constants; patent ne=1.65222, ve=33.60 stored as nd/vd)",
      cemented: "D2",
      role: "Negative member of the rear cemented meniscus doublet; balances the front negative member across the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex",
      nd: 1.79227,
      vd: 47.15,
      fl: 26.13,
      glass: "Unmatched (LaF21/N-LAF21-class lanthanum flint; patent ne=1.79227, νe=47.15)",
      cemented: "D2",
      role: "High-index, moderate-dispersion positive member of the rear doublet; nearly cancels L4 in group power while maintaining correction leverage.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex",
      nd: 1.79227,
      vd: 47.15,
      fl: 54.42,
      glass: "Unmatched (LaF21/N-LAF21-class lanthanum flint; patent ne=1.79227, νe=47.15)",
      role: "Rear positive element with a planar object-facing surface; completes the FIG. 2 three-pair matched-radius form.",
    },
  ],

  surfaces: [
    { label: "1", R: 43.11825, d: 4.02675, nd: 1.7343, elemId: 1, sd: 16.8 },
    { label: "2", R: 197.25825, d: 0.1995, nd: 1.0, elemId: 0, sd: 15.7 },
    { label: "3", R: 20.70075, d: 7.245, nd: 1.67133, elemId: 2, sd: 15.6 },
    { label: "4", R: 1e15, d: 1.30725, nd: 1.7919, elemId: 3, sd: 12.5 },
    { label: "5", R: 15.0885, d: 6.342, nd: 1.0, elemId: 0, sd: 11.1 },
    { label: "STO", R: 1e15, d: 6.741, nd: 1.0, elemId: 0, sd: 9.12 },
    { label: "7", R: -15.0885, d: 1.008, nd: 1.65222, elemId: 4, sd: 10.2 },
    { label: "8", R: 1e15, d: 5.26575, nd: 1.79227, elemId: 5, sd: 10.5 },
    { label: "9", R: -20.70075, d: 0.1995, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "10", R: 1e15, d: 3.72225, nd: 1.79227, elemId: 6, sd: 12.3 },
    { label: "11", R: -43.11825, d: 37.67925, nd: 1.0, elemId: 0, sd: 12.5 },
  ],

  asph: {},
  var: {
    "11": [37.67925, 44.67925],
  },
  varLabels: [["11", "BF"]],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "7", toSurface: "9" },
    { text: "IV", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "Unit focus; the full optical cell translates as one rigid assembly. The close-focus BF value adds 7.0 mm, derived from Leica's 1:7.5 reproduction-ratio specification at 52.5 mm.",
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  offAxisFieldFrac: 0.4,
  scFill: 0.55,
  yScFill: 0.54,
} satisfies LensDataInput;

export default LENS_DATA;
