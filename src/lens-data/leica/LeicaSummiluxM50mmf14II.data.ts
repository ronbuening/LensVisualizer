import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * - The stop radius is derived from the design f-number, the published f/1.4 target; it is not a source-published
 *   physical diaphragm diameter.
 * - The final d after surface 12 is the independently computed paraxial BFD at infinity, because the patent publishes
 *   no post-r12 image spacing.
 * - Surface semi-diameters are modeled, not patent-published. They are constrained by exact wide-open ray envelopes,
 *   current edge-thickness/rim-slope/cross-gap rules, and representative off-axis containment.
 * - Focus status is NO_INTERNAL_RECONSTRUCTION. The patent supplies one optical state only. closeFocusM is historical
 *   product metadata (1.0 m from a 1987 Leica M-system catalog) and does not imply authored focus spacings or motion.
 * - Glass strings are coordinate-compatible e-line classes only; supplier/melt identity and line-index data are unproven.
 */
const LENS_DATA = {
  schema: 2,
  key: "leica-summilux-m-50mm-f14-ii",
  maker: "Leica",
  name: "LEICA SUMMILUX-M 50mm f/1.4 II",
  subtitle: "US 3,291,553 — sole numerical example; correlated to the second Summilux-M 50 f/1.4 optical design",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 5 GROUPS", "50mm f/1.4", "ALL-SPHERICAL"],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 50, design: 50.007230512909 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "US 3,291,553",
    patentYear: 1966,
    authors: ["Walter Mandler"],
    assignees: ["Ernst Leitz GmbH"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7919,
      vd: 47.2,
      indexReference: "e",
      focalLengthMm: 69.121569612815,
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
      focalLengthMm: 46.438164899708,
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
      focalLengthMm: -25.411928448195,
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
      focalLengthMm: -33.79071122132,
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
      focalLengthMm: 42.737001522989,
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
      focalLengthMm: 17.742164217856,
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
      focalLengthMm: -31.203694771036,
      glass: "Equivalent lanthanum-flint class (S-LAM3 / J-LAF3; supplier/melt unproven)",
      apd: false,
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 39.993601023836, d: 5.11, sd: 20.7, medium: 1 },
    { label: "2", R: 140.09526478005, d: 2.86, sd: 20.35 },
    { label: "3", R: 21.006638097639, d: 5.62, sd: 15.4, medium: 2 },
    { label: "4", R: 43.200276481769, d: 0.725, sd: 14.37 },
    { label: "5", R: 57.843590930125, d: 2.345, sd: 14.37, medium: 3 },
    { label: "6", R: 14.342675195778, d: 5.63125, sd: 11.4 },
    // STO position inferred from the patent figure; source gap a6 is preserved exactly.
    { label: "STO", R: "flat", d: 4.99375 },
    { label: "7", R: -18.446781036709, d: 1.16, sd: 11.2, medium: 4 },
    // Cemented junction: medium after surface 8 is L5, so elemId is the downstream element.
    { label: "8", R: -77.267810230258, d: 3.38, sd: 12.0, medium: 5 },
    { label: "9", R: -23.990020151617, d: 0.095, sd: 12.25 },
    { label: "10", R: 94.232943837165, d: 6.76, sd: 11.93, medium: 6 },
    // Cemented junction: medium after surface 11 is L7, so elemId is the downstream element.
    { label: "11", R: -14.97005988024, d: 2.415, sd: 11.93, medium: 7 },
    { label: "12", R: -47.828582360819, d: 27.622864799826, sd: 12.7 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Focus travel is not modeled: the patent supplies one optical state only; 1.0 m is historical product metadata and no focus motion is authored.",
  },

  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  layout: { yScFill: 0.36 },

  rays: { offAxisFieldFrac: 0.6 },
} satisfies LensDataV2Input;

export default LENS_DATA;
