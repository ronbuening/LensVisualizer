import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — LEICA SUMMILUX-M 50mm f/1.4 II
 *
 * Source: US 3,291,553, sole numerical example (job-card Example 1), Walter Mandler / Ernst Leitz GmbH
 * The patent prescription is normalized to focal length 1.0 and is uniformly scaled by 50.0× to millimeters.
 * All radii and axial spacings are scaled; the design is all-spherical, so no asphere coefficient scaling applies.
 *
 * Model construction notes:
 * - Exactly one STO is inserted inside source air gap a6. Its figure-derived axial location is modeled at 53% of a6
 *   from r6 toward r7 (5.63125 mm + 4.99375 mm = 10.625 mm). The source does not dimension this split.
 * - STO semi-diameter is calibrated from the published f/1.4 target with the implemented paraxial entrance-pupil model;
 *   it is not a source-published physical diaphragm diameter.
 * - The final d after surface 12 is the independently computed paraxial BFD at infinity, because the patent publishes
 *   no post-r12 image spacing.
 * - Surface semi-diameters are modeled, not patent-published. They are constrained by exact wide-open ray envelopes,
 *   current edge-thickness/rim-slope/cross-gap rules, and representative off-axis containment.
 * - Focus status is NO_INTERNAL_RECONSTRUCTION. The patent supplies one optical state only. closeFocusM is historical
 *   product metadata (1.0 m from a 1987 Leica M-system catalog) and does not imply authored focus spacings or motion.
 * - Glass strings are coordinate-compatible e-line classes only; supplier/melt identity and line-index data are unproven.
 */
const LENS_DATA = {
  key: "leica-summilux-m-50mm-f14-ii",
  maker: "Leica",
  name: "LEICA SUMMILUX-M 50mm f/1.4 II",
  subtitle: "US 3,291,553 — sole numerical example; correlated to the second Summilux-M 50 f/1.4 optical design",
  specs: ["7 ELEMENTS / 5 GROUPS", "50mm f/1.4", "ALL-SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.007230512909,
  apertureMarketing: 1.4,
  apertureDesign: 1.4,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,291,553",
  patentAuthors: ["Walter Mandler"],
  patentAssignees: ["Ernst Leitz GmbH"],
  patentYear: 1966,
  elementCount: 7,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7919,
      vd: 47.2,
      indexReference: "e",
      fl: 69.121569612815,
      glass: "Equivalent high-index lanthanum-flint class (S-LAH64 / N-LAF21 / J-LASF014; supplier/melt unproven)",
      apd: false,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7919,
      vd: 47.2,
      indexReference: "e",
      fl: 46.438164899708,
      glass: "Equivalent high-index lanthanum-flint class (S-LAH64 / N-LAF21 / J-LASF014; supplier/melt unproven)",
      apd: false,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7685,
      vd: 26.8,
      indexReference: "e",
      fl: -25.411928448195,
      glass: "Equivalent dense-flint class (S-TIH14 / N-SF14 / J-SF14; supplier/melt unproven)",
      apd: false,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7231,
      vd: 29.3,
      indexReference: "e",
      fl: -33.79071122132,
      glass: "Equivalent dense-flint class (S-TIH1 / N-SF1 / J-SF1; supplier/melt unproven)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7919,
      vd: 47.2,
      indexReference: "e",
      fl: 42.737001522989,
      glass: "Equivalent high-index lanthanum-flint class (S-LAH64 / N-LAF21 / J-LASF014; supplier/melt unproven)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7479,
      vd: 44.7,
      indexReference: "e",
      fl: 17.742164217856,
      glass: "Equivalent lanthanum-flint class (S-LAM2 / N-LAF2 / J-LAF2; supplier/melt unproven)",
      apd: false,
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7205,
      vd: 48.0,
      indexReference: "e",
      fl: -31.203694771036,
      glass: "Equivalent lanthanum-flint class (S-LAM3 / J-LAF3; supplier/melt unproven)",
      apd: false,
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 39.993601023836, d: 5.11, nd: 1.7919, elemId: 1, sd: 20.7 },
    { label: "2", R: 140.09526478005, d: 2.86, nd: 1.0, elemId: 0, sd: 20.35 },
    { label: "3", R: 21.006638097639, d: 5.62, nd: 1.7919, elemId: 2, sd: 15.4 },
    { label: "4", R: 43.200276481769, d: 0.725, nd: 1.0, elemId: 0, sd: 14.37 },
    { label: "5", R: 57.843590930125, d: 2.345, nd: 1.7685, elemId: 3, sd: 14.37 },
    { label: "6", R: 14.342675195778, d: 5.63125, nd: 1.0, elemId: 0, sd: 11.4 },
    // STO position inferred from the patent figure; source gap a6 is preserved exactly.
    { label: "STO", R: 1e15, d: 4.99375, nd: 1.0, elemId: 0, sd: 11.025291346029 },
    { label: "7", R: -18.446781036709, d: 1.16, nd: 1.7231, elemId: 4, sd: 11.2 },
    // Cemented junction: medium after surface 8 is L5, so elemId is the downstream element.
    { label: "8", R: -77.267810230258, d: 3.38, nd: 1.7919, elemId: 5, sd: 12.0 },
    { label: "9", R: -23.990020151617, d: 0.095, nd: 1.0, elemId: 0, sd: 12.25 },
    { label: "10", R: 94.232943837165, d: 6.76, nd: 1.7479, elemId: 6, sd: 11.93 },
    // Cemented junction: medium after surface 11 is L7, so elemId is the downstream element.
    { label: "11", R: -14.97005988024, d: 2.415, nd: 1.7205, elemId: 7, sd: 11.93 },
    { label: "12", R: -47.828582360819, d: 27.622864799826, nd: 1.0, elemId: 0, sd: 12.7 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  closeFocusM: 1.0,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — the patent supplies one optical state only; 1.0 m is historical product metadata and no focus motion is authored.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  offAxisFieldFrac: 0.6,
  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
