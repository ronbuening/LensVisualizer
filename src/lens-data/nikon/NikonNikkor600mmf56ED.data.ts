import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON NIKKOR 600mm f/5.6 ED — US 3,774,991 Example 2.
 *
 * The active prescription uses the Patent Office Certificate of Correction for r5: the Example-II body table prints
 * +244.820 mm, Claim 3 prints +224.820 mm, and the Certificate explicitly changes the body value to +224.820 mm.
 * No dimensional scaling is applied. The nine patent refracting surfaces are retained in source order.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes only the infinity prescription. Nikon documents the
 * separate focusing unit/AU-1 mechanism; the production 11 m minimum-focus distance is retained as product metadata,
 * but no finite-focus spacing law is invented.
 *
 * Stop: the patent does not publish a diaphragm plane or diameter. Nikon documents this focusing-unit family as using a
 * behind-the-lens diaphragm. The model therefore places one STO immediately behind patent surface 9; the 1.000 mm S9→STO
 * separation is a numerical modeling convention, not a measured mechanical station. The stop radius is derived from the
 * design f-number, f/5.6, and is not an independently measured iris. The verified Gaussian S9→image distance is
 * preserved by assigning the remaining rear distance to STO→IMG.
 *
 * Semi-diameters: the patent tabulates none. The modeled SDs are derived from exact spherical ray envelopes at infinity:
 * full on-axis pupil rays, a 60%-of-marketed-field bundle with stop fractions ±0.75/±0.375/0, the marketed-field chief
 * ray, and the patent 4° half-field chief ray. Values are rounded upward and then checked for edge thickness, rim slope,
 * cross-gap intrusion, and sampled off-axis containment. They are model apertures, not measured production clear apertures.
 *
 * Spectral data: Example II publishes helium-d-line nd/νd only. Vendor/melt identity is unresolved; nC, nF, ng, dPgF,
 * and APD flags are intentionally omitted. Coordinate/class labels must not be read as supplier attribution.
 *
 * Excluded: filters, cover glass, inactive dummy planes, and mechanical parts. No aspheres are present.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-nikkor-600mm-f56-ed",
  maker: "Nikon",
  name: "NIKON NIKKOR 600mm f/5.6 ED",
  subtitle: "US 3,774,991 Example 2 — Shimizu / Nippon Kogaku K.K.; strong production correlation",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "5 ELEMENTS / 4 GROUPS",
      "600mm f/5.6",
      "4°10′ MARKETED AOV",
      "8° PATENT DESIGN FIELD",
      "AU-1 FOCUSING UNIT",
    ],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 600, design: 599.998701206418 },
    fNumber: { marketing: 5.6, design: 5.6 },
  },

  source: {
    patentNumber: "US 3,774,991",
    patentYear: 1973,
    authors: ["Yoshiyuki Shimizu"],
    assignees: ["Nippon Kogaku K.K."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48606,
      vd: 81.5,
      indexReference: "d",
      focalLengthMm: 241.555444912453,
      glass: "Unmatched (486815 — fluophosphate crown; vendor unresolved)",
      role: "Low-dispersion front positive element specified by the patent as fluophosphoric-acid glass.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      focalLengthMm: -216.390466600516,
      glass: "744449 — lanthanum glass coordinate class (vendor unresolved)",
      role: "Negative lanthanum-glass member of the forward achromatic group.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.56965,
      vd: 49.5,
      indexReference: "d",
      focalLengthMm: 415.401182806719,
      glass: "570495 — barium flint glass coordinate class (vendor unresolved)",
      role: "Positive barium-flint member used with L1/L2 in the patent's secondary-spectrum correction strategy.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.52682,
      vd: 51.1,
      indexReference: "d",
      focalLengthMm: -116.173741556343,
      glass: "527511 — crown-flint coordinate (CF2 dispersion proxy; supplier unresolved)",
      role: "Negative front member of the cemented rear doublet.",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.62374,
      vd: 47,
      indexReference: "d",
      focalLengthMm: 131.581100267422,
      glass: "624470 — barium flint glass coordinate class (vendor unresolved)",
      role: "Positive rear member of the cemented rear doublet; the cemented pair has net negative paraxial power.",
      diagramLabel: "L5",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 200, d: 15, sd: 56, medium: 1 },
    { label: "2", R: -277.348, d: 6, sd: 56 },
    { label: "3", R: -277.348, d: 6, sd: 54, medium: 2 },
    { label: "4", R: 387.299, d: 1.5, sd: 54 },
    // Official source correction: body table +244.820 → Certificate / Claim 3 +224.820.
    { label: "5", R: 224.82, d: 10, sd: 53, medium: 3 },
    { label: "6", R: 4430.7, d: 254, sd: 53 },
    { label: "7", R: -93, d: 1.5, sd: 23, medium: 4 },
    // Cemented L4→L5 junction: downstream L5 owns the interface and post-surface index.
    { label: "8", R: 180, d: 6, sd: 23, medium: 5 },
    { label: "9", R: -148.925, d: 1, sd: 23 },
    // Inferred behind-the-lens stop; radius derived from the design f-number, f/5.6, not source-published.
    { label: "STO", R: "flat", d: 245.874734678866 },
  ],

  /* (moved from var) ── Focus ── */
  focus: {
    closeFocusM: 11,
    description:
      "Infinity prescription only. The production lens focuses to 11 m with a separate focusing unit; its AU-1 focus motion is not modeled.",
  },

  aperture: { nominalFNumber: 5.6, fStops: [5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
