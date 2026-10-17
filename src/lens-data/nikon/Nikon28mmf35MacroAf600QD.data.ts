import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * The stop radius is derived from the design f-number, f/3.54; this is not an independently
 * published diaphragm diameter.
 *
 * Semi-diameters are modeled, not patent-published. They were sized from exact spherical ray
 * tracing for the inferred stop, the default on-axis and 0.6-field diagram bundles, plus chief
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
  schema: 2,
  key: "nikon-af600-28mm-f35",
  maker: "Nikon",
  name: "NIKON 28mm f/3.5 (Nikon AF600 / AF600 QD)",
  subtitle: "JP H06-235857 A Example 2 — scaled ×0.28; AF600/AF600 QD correlation",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: ["3 ELEMENTS / 3 GROUPS", "f ≈ 27.998 mm", "F/3.54 DESIGN / f/3.5 MARKETED", "2ω = 74.6°", "ALL-SPHERICAL"],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: { marketing: 28, design: 27.998393 },
    fNumber: { marketing: 3.5, design: 3.54 },
  },

  source: {
    patentNumber: "JP H06-235857 A",
    patentYear: 1994,
    authors: ["Kouichi Ohshita"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.77279,
      vd: 49.4,
      indexReference: "d",
      focalLengthMm: 25.658699,
      glass: "S-LAH66-class (coordinate-compatible spectral proxy; supplier unproven)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.2,
      indexReference: "d",
      focalLengthMm: -10.309454,
      glass: "N-SF8-class (coordinate-compatible spectral proxy; supplier unproven)",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.84042,
      vd: 43.3,
      indexReference: "d",
      focalLengthMm: 11.516071,
      glass: "Unmatched (840433-class; no compatible catalog curve)",
      diagramLabel: "L3",
    },
  ],

  surfaces: [
    { label: "1", R: 9.14956, d: 2.9036, sd: 5.45, medium: 1 },
    { label: "2", R: 14.6384, d: 1.064, sd: 4.3 },
    { label: "3", R: -23.09804, d: 0.9688, sd: 4.26, medium: 2 },
    { label: "4", R: 10.43168, d: 0.4844, sd: 4.05 },
    { label: "5", R: 18.69336, d: 2.8056, sd: 5, medium: 3 },
    { label: "6", R: -18.69336, d: 1.02, sd: 5 },
    // Rear-stop station inferred from patent Fig. 3; radius derived from the design f-number, FN = 3.54.
    { label: "STO", R: "flat", d: 22.318 },
  ],

  focus: { closeFocusM: 0.35, description: "Not modeled; Nikon documents unit focusing with a fixed rear stop." },

  aperture: { nominalFNumber: 3.54, fStops: [3.5, 4, 5.6, 8, 11, 16] },

  groups: [],
  doublets: [],

  layout: { yScFill: 0.4 },

  checks: { gapSagFrac: 0.98 },
} satisfies LensDataV2Input;

export default LENS_DATA;
