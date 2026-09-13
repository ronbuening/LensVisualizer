import type { LensDataInput } from "../../types/optics.js";

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
 * behind-the-lens diaphragm. The model therefore places one STO immediately behind patent surface 9; the 1.000 mm
 * S9→STO separation is a numerical modeling convention, not a measured mechanical station. STO sd is calibrated with
 * an exact spherical Snell trace from the modeled f/5.6 entrance-pupil radius and is not an independently measured iris.
 * The verified Gaussian S9→image distance is preserved by assigning the remaining rear distance to STO→IMG.
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
  key: "nikon-nikkor-600mm-f56-ed",
  maker: "Nikon",
  name: "NIKON NIKKOR 600mm f/5.6 ED",
  subtitle: "US 3,774,991 Example 2 — Shimizu / Nippon Kogaku K.K.; strong production correlation",
  specs: [
    "5 ELEMENTS / 4 GROUPS",
    "600mm f/5.6",
    "4°10′ MARKETED AOV",
    "8° PATENT DESIGN FIELD",
    "AU-1 FOCUSING UNIT",
  ],

  focalLengthMarketing: 600,
  focalLengthDesign: 599.998701206418,
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,774,991",
  patentAuthors: ["Yoshiyuki Shimizu"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1973,
  elementCount: 5,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48606,
      vd: 81.5,
      indexReference: "d",
      fl: 241.555444912453,
      glass: "Unmatched (486815 — fluophosphate crown; vendor unresolved)",
      role: "Low-dispersion front positive element specified by the patent as fluophosphoric-acid glass.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: -216.390466600516,
      glass: "744449 — lanthanum glass coordinate class (vendor unresolved)",
      role: "Negative lanthanum-glass member of the forward achromatic group.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.56965,
      vd: 49.5,
      indexReference: "d",
      fl: 415.401182806719,
      glass: "570495 — barium flint glass coordinate class (vendor unresolved)",
      role: "Positive barium-flint member used with L1/L2 in the patent's secondary-spectrum correction strategy.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.52682,
      vd: 51.1,
      indexReference: "d",
      fl: -116.173741556343,
      glass: "527511 — crown-flint coordinate (CF2 dispersion proxy; supplier unresolved)",
      cemented: "D1",
      role: "Negative front member of the cemented rear doublet.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.62374,
      vd: 47,
      indexReference: "d",
      fl: 131.581100267422,
      glass: "624470 — barium flint glass coordinate class (vendor unresolved)",
      cemented: "D1",
      role: "Positive rear member of the cemented rear doublet; the cemented pair has net negative paraxial power.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 200, d: 15, nd: 1.48606, elemId: 1, sd: 56 },
    { label: "2", R: -277.348, d: 6, nd: 1, elemId: 0, sd: 56 },
    { label: "3", R: -277.348, d: 6, nd: 1.744, elemId: 2, sd: 54 },
    { label: "4", R: 387.299, d: 1.5, nd: 1, elemId: 0, sd: 54 },
    // Official source correction: body table +244.820 → Certificate / Claim 3 +224.820.
    { label: "5", R: 224.82, d: 10, nd: 1.56965, elemId: 3, sd: 53 },
    { label: "6", R: 4430.7, d: 254, nd: 1, elemId: 0, sd: 53 },
    { label: "7", R: -93, d: 1.5, nd: 1.52682, elemId: 4, sd: 23 },
    // Cemented L4→L5 junction: downstream L5 owns the interface and post-surface index.
    { label: "8", R: 180, d: 6, nd: 1.62374, elemId: 5, sd: 23 },
    { label: "9", R: -148.925, d: 1, nd: 1, elemId: 0, sd: 23 },
    // Inferred behind-the-lens stop. Physical radius is f/5.6-calibrated, not source-published.
    { label: "STO", R: 1e15, d: 245.874734678866, nd: 1, elemId: 0, sd: 22.047760372003 },
  ],

  asph: {},

  /* ── Focus ── */
  var: {},
  varLabels: [],
  closeFocusM: 11,
  focusDescription:
    "Infinity prescription only. The production lens focuses to 11 m with a separate focusing unit; its AU-1 focus motion is not modeled.",

  groups: [
    { text: "FORWARD ACHROMATIC GROUP", fromSurface: "1", toSurface: "6" },
    { text: "REAR GROUP", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "L4+L5", fromSurface: "7", toSurface: "9" }],

  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
