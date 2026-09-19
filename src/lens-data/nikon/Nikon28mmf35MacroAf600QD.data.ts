import type { LensDataInput } from "../../types/optics.js";

/**
 * Nikon 28 mm f/3.5 fixed-lens compact-camera candidate from JP H06-235857 A, Example 2.
 *
 * Source prescription: f = 100.0, Bf = 83.35, FN = 3.54, 2ω = 74.6°.
 * Uniform production normalization: all dimensional prescription values are scaled ×0.28, giving
 * a modeled EFL of approximately 27.9984 mm. The design is all-spherical, so no asphere
 * coefficient transformation is required.
 *
 * Stop modeling: Figure 3 establishes a rear stop but does not dimension its axial station or
 * diameter. The stop is placed 1.02 mm behind surface 6 from a documented figure-ratio estimate.
 * Its physical semi-diameter is calibrated to the modeled f/3.54 entrance pupil; this is not an
 * independently published diaphragm diameter.
 *
 * Semi-diameters are modeled, not patent-published. They were sized from exact spherical ray
 * tracing for the authored stop, the default on-axis and 0.6-field diagram bundles, plus chief
 * rays at the patent half-field of 37.3°. The unusually narrow L1-L2 air gap requires
 * gapSagFrac = 0.98; the modeled surfaces retain positive physical clearance at the shared rim.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION for internal spacings. Example 2 is a static prescription.
 * Nikon's official retrospective documents rigid whole-lens focus, about 2.7 mm extension to 0.35 m,
 * with the rear stop fixed; no internal spacing is reconstructed in var.
 *
 * Glass labels preserve patent nd/νd and qualify compatible catalog curves as spectral proxies;
 * no supplier identity or catalog-derived nC/nF/ng/dPgF values are asserted.
 */
const LENS_DATA = {
  key: "nikon-af600-28mm-f35",
  maker: "Nikon",
  name: "NIKON 28mm f/3.5 (Nikon AF600 / AF600 QD)",
  subtitle: "JP H06-235857 A Example 2 — scaled ×0.28; AF600/AF600 QD correlation",
  specs: [
    "3 ELEMENTS / 3 GROUPS",
    "f ≈ 27.998 mm",
    "F/3.54 DESIGN / f/3.5 MARKETED",
    "2ω = 74.6°",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 28,
  focalLengthDesign: 27.998393,
  apertureMarketing: 3.5,
  apertureDesign: 3.54,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "135-full-frame",
  patentNumber: "JP H06-235857 A",
  patentAuthors: ["Kouichi Ohshita"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1994,
  elementCount: 3,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.77279,
      vd: 49.4,
      indexReference: "d",
      fl: 25.658699,
      glass: "S-LAH66-class (coordinate-compatible spectral proxy; supplier unproven)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.2,
      indexReference: "d",
      fl: -10.309454,
      glass: "N-SF8-class (coordinate-compatible spectral proxy; supplier unproven)",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.84042,
      vd: 43.3,
      indexReference: "d",
      fl: 11.516071,
      glass: "Unmatched (840433-class; no compatible catalog curve)",
    },
  ],

  surfaces: [
    { label: "1", R: 9.14956, d: 2.9036, nd: 1.77279, elemId: 1, sd: 5.45 },
    { label: "2", R: 14.6384, d: 1.064, nd: 1.0, elemId: 0, sd: 4.3 },
    { label: "3", R: -23.09804, d: 0.9688, nd: 1.68893, elemId: 2, sd: 4.26 },
    { label: "4", R: 10.43168, d: 0.4844, nd: 1.0, elemId: 0, sd: 4.05 },
    { label: "5", R: 18.69336, d: 2.8056, nd: 1.84042, elemId: 3, sd: 5 },
    { label: "6", R: -18.69336, d: 1.02, nd: 1.0, elemId: 0, sd: 5 },
    // Rear-stop station inferred from patent Fig. 3; physical aperture calibrated to FN = 3.54.
    { label: "STO", R: 1e15, d: 22.318, nd: 1.0, elemId: 0, sd: 3.152041 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 0.35,
  focusDescription: "Not modeled; Nikon documents unit focusing with a fixed rear stop.",

  nominalFno: 3.54,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],

  gapSagFrac: 0.98,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
