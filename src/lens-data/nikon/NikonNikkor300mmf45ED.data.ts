import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — NIKON NIKKOR 300mm f/4.5 ED
 *
 * Source prescription: US 3,774,991, Example I (Yoshiyuki Shimizu / Nippon Kogaku K.K.).
 * Correlation to the production Nikkor 300mm f/4.5 ED is strong but is not manufacturer-confirmed patent attribution.
 *
 * 6 physical elements / 4 air-separated groups. All source surfaces are spherical. Uniform scale s = 1.
 *
 * MODEL COMPLETIONS:
 * - The patent omits the image-plane spacing. Surface 10 therefore uses the independently computed Gaussian BFD
 *   of 70.05348978527317 mm; this is a modeled image-plane completion, not a published d10.
 * - The patent omits the aperture-stop plane and physical diameter. A single air STO is modeled 1.0 mm after source
 *   surface 7, splitting published d7 = 119.3 mm into 1.0 + 118.3 mm without changing source axial stations.
 *   The authored STO sd = 30.25936025030129 mm is calibrated by exact Snell tracing to the published/model F/4.5.
 *   Agreement with F/4.5 is calibration, not independent evidence of a production diaphragm diameter.
 * - Surface semi-diameters are modeled from exact spherical ray envelopes through the calibrated stop, including
 *   the published 4.2° edge half-field, then checked for edge thickness, rim slope, shared-gap intrusion, and
 *   off-axis containment. They are not patent clear-aperture values.
 * - Because those modeled semi-diameters are not source field stops, the published rectilinear field is declared
 *   explicitly as 8.4° full / 4.2° half field instead of allowing runtime coverage to be inferred from modeled SDs.
 *
 * FOCUS:
 * - NO_INTERNAL_RECONSTRUCTION. The production minimum focus distance is 4.0 m from a Nikon Nikkor brochure table.
 *   No patent focus-spacing row exists, so no internal or rear-gap focus law is authored.
 *
 * GLASS:
 * - The patent gives d-line nd/νd coordinates and glass classes but no supplier. Generic class/six-digit labels are
 *   retained; modern catalog line indices are not transferred to the vendor-unresolved patent elements.
 */

const LENS_DATA = {
  key: "nikon-nikkor-300mm-f45-ed",
  maker: "Nikon",
  name: "NIKON NIKKOR 300mm f/4.5 ED",
  subtitle: "US 3,774,991 Example I — strong production correlation; attribution not manufacturer-confirmed",
  specs: ["6 ELEMENTS / 4 GROUPS", "f = 300.0 mm", "F/4.5", "2ω = 8.4°", "ALL-SPHERICAL"],

  focalLengthMarketing: 300,
  focalLengthDesign: 299.99959642476347,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 8.4,
    maxTraceFieldDeg: 4.2,
  },
  patentNumber: "US 3,774,991",
  patentAuthors: ["Yoshiyuki Shimizu"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1973,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48606,
      vd: 81.5,
      indexReference: "d",
      fl: 129.95191377916726,
      glass: "486815 - fluophosphate crown class (vendor unresolved)",
      role: "Low-dispersion positive front element in the forward achromatic assembly.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: -91.40259769579879,
      glass: "744449 - lanthanum glass class (vendor unresolved)",
      role: "Negative lanthanum-class element of the first cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6393,
      vd: 45,
      indexReference: "d",
      fl: 251.9171058367256,
      glass: "639450 - barium flint class (vendor unresolved)",
      role: "Positive barium-flint-class partner cemented to L2.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.48606,
      vd: 81.5,
      indexReference: "d",
      fl: 218.43653056270327,
      glass: "486815 - fluophosphate crown class (vendor unresolved)",
      role: "Second low-dispersion positive element completing the forward assembly.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: -53.76045292981103,
      glass: "620603 - SK16-class crown (vendor unresolved)",
      role: "Negative element of the widely separated rear cemented group.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      fl: 100.0394403937781,
      glass: "620363 - F2-class flint (vendor unresolved)",
      role: "Positive partner in the rear cemented pair; the pair is net negative.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 106, d: 11, nd: 1.48606, elemId: 1, sd: 35.6 },
    { label: "2", R: -151, d: 4, nd: 1, elemId: 0, sd: 35.4 },
    { label: "3", R: -144, d: 3, nd: 1.744, elemId: 2, sd: 34 },
    { label: "4", R: 130, d: 12, nd: 1.6393, elemId: 3, sd: 33 },
    { label: "5", R: 650, d: 1, nd: 1, elemId: 0, sd: 32.2 },
    { label: "6", R: 95, d: 7.7, nd: 1.48606, elemId: 4, sd: 31.6 },
    { label: "7", R: 878.8, d: 1, nd: 1, elemId: 0, sd: 30.7 },
    { label: "STO", R: 1e15, d: 118.3, nd: 1, elemId: 0, sd: 30.25936025030129 },
    { label: "8", R: -43, d: 1, nd: 1.62041, elemId: 5, sd: 18.1 },
    { label: "9", R: 150, d: 3.5, nd: 1.62004, elemId: 6, sd: 18.5 },
    { label: "10", R: -104.82, d: 70.05348978527317, nd: 1, elemId: 0, sd: 18.6 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 4,
  focusDescription:
    "Infinity prescription only. The production lens focuses to 4 m by whole-lens movement; the patent supplies no finite-focus spacings.",

  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
