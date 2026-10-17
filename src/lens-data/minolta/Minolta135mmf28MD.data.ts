import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Lens data - MINOLTA MD 135mm f/2.8
 *
 * Source: US 4,214,816, Example 1 / Table 1 (Tamikazu Yamaguchi; Minolta Camera Kabushiki Kaisha).
 * The patent prescription is normalized to f = 100 and is uniformly scaled by 1.35 for the modeled 135 mm class.
 * All radii, axial spacings, inferred semi-diameters, the inferred stop coordinate, and the derived infinity BFD are in
 * the scaled model. Refractive indices and Abbe values are unchanged. Example 1 is all-spherical, so there are no
 * aspheric coefficients to transform.
 *
 * Product correlation: the five-element/five-group Minolta 135mm f/2.8 MD documented by Minolta is a strong convergent
 * match, but the patent-to-production attribution is not manufacturer-confirmed. Mount, format, 1.5 m minimum focus,
 * and the marketed f/2.8 specification are product metadata rather than patent-prescription quantities.
 *
 * Stop model: the patent gives f/2.8 but no diaphragm position or diameter. Exactly one modeled STO is placed 4.25 mm
 * behind surface 8 inside the long D8 air space. The stop radius is derived from the design f-number, modeled f/2.8.
 * This is not independent evidence of the production diaphragm diameter.
 *
 * Semi-diameters: the patent publishes none. Element SDs are modeled from exact meridional ray envelopes with the
 * f/2.8 stop, then rounded outward. Coverage includes the full on-axis aperture, the LensVisualizer default off-axis
 * sampling at +/-5.4 degrees through pupil fractions up to +/-0.75, and +/-9 degree field samples through pupil
 * fractions up to +/-0.5. These are modeled clear apertures, not source-published mechanical dimensions.
 *
 * Focus: NO_INTERNAL_RECONSTRUCTION. The selected patent publishes one prescription state and no focus-moving spacings;
 * the production 1.5 m minimum-focus distance is retained only as required product metadata.
 *
 * Source discrepancy preserved in the dossier: the description prints NC < 1.7, while claim 1 prints NC > 1.7 and the
 * numerical examples require the latter. The implemented prescription does not alter the raw patent record.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-md-135f28",
  maker: "Minolta",
  name: "MINOLTA MD 135mm f/2.8",
  subtitle: "US 4,214,816 Example 1 - 1.35x scaled correlation; production attribution inferred",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 5 GROUPS", "135mm", "f/2.8", "18 DEG FULL FIELD", "ALL-SPHERICAL"],
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: { marketing: 135, design: 135.02239593742573 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 4,214,816",
    patentYear: 1980,
    authors: ["Tamikazu Yamaguchi"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6073,
      vd: 59.5,
      indexReference: "d",
      focalLengthMm: 98.86421765127527,
      glass: "K-SK7 (SUMITA) — coordinate-compatible crown spectral proxy; supplier unspecified",
      role: "Front positive meniscus, convex to the object side.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.67,
      vd: 57.1,
      indexReference: "d",
      focalLengthMm: 112.08753150956262,
      glass: "S-LAL52 — coordinate-compatible lanthanum-crown spectral proxy; supplier unspecified",
      role: "Second positive meniscus, convex to the object side.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: -465.3710845817501,
      glass: "673322 / SF5-class (supplier unspecified)",
      role: "First negative meniscus of the divided negative section.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: -44.97708067975109,
      glass: "755275 / SF4-class (supplier unspecified)",
      role: "Second negative meniscus of the divided negative section.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.8052,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 156.8655897864637,
      glass: "805254 / SF6-class (supplier unspecified)",
      role: "Rear positive element.",
    },
  ],

  surfaces: [
    { label: "1", R: 54.918, d: 7.02, sd: 24.3, medium: 1 },
    { label: "2", R: 612.63, d: 0.3105, sd: 24.3 },
    { label: "3", R: 45.3465, d: 7.02, sd: 22.5, medium: 2 },
    { label: "4", R: 107.352, d: 2.295, sd: 22.5 },
    { label: "5", R: 254.367, d: 5.805, sd: 20.7, medium: 3 },
    { label: "6", R: 139.05, d: 3.78, sd: 20.7 },
    { label: "7", R: 153.765, d: 7.425, sd: 17.0, medium: 4 },
    { label: "8", R: 27.243, d: 4.25, sd: 17.0 },
    { label: "STO", R: "flat", d: 28.555 },
    { label: "9", R: 87.9525, d: 2.43, sd: 14.4, medium: 5 },
    { label: "10", R: 286.065, d: 55.6839605027414, sd: 14.4 },
  ],

  focus: {
    closeFocusM: 1.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes no focus-moving spacing state; 1.5 m is product MFD metadata only.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22] },

  groups: [],
  doublets: [],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
