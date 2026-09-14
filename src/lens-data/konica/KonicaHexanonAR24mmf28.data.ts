import type { LensDataInput } from "../../types/optics.js";

/**
 * KONICA HEXANON AR 24mm f/2.8 — JP1980-087117 Example 1.
 *
 * Source prescription: JP S55-87117 A, Example 1, normalized by the patent to f = 1,
 * F/2.8, 2ω = 84°, fB = 1.497. Patent-listed radii and axial spacings are uniformly
 * scaled by s = 24.0 mm to correlate with the production Konica Hexanon AR 24mm f/2.8.
 * Semi-diameters are inferred directly in the scaled model; the patent lists no clear
 * apertures. There are no aspheres, so no coefficient scaling is required. The final surface d uses
 * the Gaussian BFD recomputed from the rounded scaled array (35.9196911325 mm), rather
 * than the patent header's rounded 1.497 × 24 = 35.928 mm, so the authored infinity
 * image plane is self-consistent with the actual prescription.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes no focus-spacing table
 * or internal-focus mechanism. The production MFD of 0.25 m is retained as manufacturer
 * metadata only; no close-focus optical state is invented.
 *
 * Stop model: the patent gives F/2.8 but no diaphragm location or physical diameter.
 * The required LensVisualizer STO is modeled at the midpoint of the published d8 air gap
 * between L4 and L5. Its sd = 5.898969 mm is independently calibrated from the paraxial
 * entrance pupil so the scaled prescription models f/2.800000. This is a modeling
 * inference, not a patent-listed stop position.
 *
 * Semi-diameters are inferred rather than source-listed. They contain the exact on-axis
 * wide-open marginal rays, the 42° full-field chief ray, and the project-default 25.2°
 * off-axis bundle (0.6 × 42° at pupil fractions ±0.75, ±0.375, 0), then are constrained
 * by edge thickness, actual spherical rim slope, cross-gap intrusion, and patent Fig. 1
 * section proportions. The d12/d13 clear apertures are cross-gap-limited and therefore
 * carry less mechanical margin than the other surfaces.
 *
 * Glass policy: the patent supplies d-line nd/νd coordinates only and names no vendor.
 * The glass strings therefore use six-digit coordinate classes rather than vendor-specific
 * identities. nC, nF, ng, and dPgF are omitted because the patent does not publish them.
 *
 * Manufacturer correlation source: Konica Division / Berkey Marketing Companies,
 * "Konica 24mm f2.8 Automatic Ultra Wide Angle Hexanon Lens" (1980), Cat. No. 703-169.
 */

const LENS_DATA = {
  key: "konica-hexanon-ar-24mm-f2-8",
  maker: "Konica",
  name: "KONICA HEXANON AR 24mm f/2.8",
  subtitle: "JP1980-087117 Example 1 — f=1 prescription scaled ×24 to the 24mm production lens",
  specs: ["8 ELEMENTS / 8 GROUPS", "24mm", "f/2.8", "2ω = 84°", "ALL-SPHERICAL"],

  focalLengthMarketing: 24,
  focalLengthDesign: 23.99938196114942,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1980-087117 A",
  patentAuthors: ["Toshiko Shimokura"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1980,
  elementCount: 8,
  groupCount: 8,

  elements: [
    {
      id: 1,
      diagramLabel: "L1",
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 93.65926734404185,
      glass: "697555 — lanthanum crown class (source vendor unspecified)",
      role: "Front positive meniscus of the retrofocus front section.",
    },
    {
      id: 2,
      diagramLabel: "L2",
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: -25.53567357176385,
      glass: "S-BAL35 catalog-equivalent curve (patent 589611; production supplier unspecified)",
      role: "First negative meniscus in the net-negative L1-L3 front section.",
    },
    {
      id: 3,
      diagramLabel: "L3",
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: -56.65150883488047,
      glass: "S-BAL35 catalog-equivalent curve (patent 589611; production supplier unspecified)",
      role: "Second negative meniscus in the net-negative L1-L3 front section.",
    },
    {
      id: 4,
      diagramLabel: "L4",
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.7847,
      vd: 26.2,
      fl: 57.08678475850644,
      glass: "785262 — dense flint class (source vendor unspecified)",
      role: "Thick positive central element separating the front and rear sections.",
    },
    {
      id: 5,
      diagramLabel: "L5",
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 24.882076321854736,
      glass: "697555 — lanthanum crown class (source vendor unspecified)",
      role: "Strong positive element at the front of the rear correcting section.",
    },
    {
      id: 6,
      diagramLabel: "L6",
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -25.42910360755568,
      glass: "805254 — dense flint class (source vendor unspecified)",
      role: "Negative rear-section element paired with the surrounding positive power.",
    },
    {
      id: 7,
      diagramLabel: "L7",
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6516,
      vd: 58.6,
      fl: 37.16923680746582,
      glass: "J-LAK7R catalog-equivalent curve (patent 652586; production supplier unspecified)",
      role: "Positive meniscus in the rear correcting section.",
    },
    {
      id: 8,
      diagramLabel: "L8",
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 65.11149123013199,
      glass: "697555 — lanthanum crown class (source vendor unspecified)",
      role: "Final positive element ahead of the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 46.9416, d: 3.276, nd: 1.6968, elemId: 1, sd: 15.0 },
    { label: "2", R: 162.4272, d: 0.0984, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "3", R: 32.7504, d: 1.5888, nd: 1.58913, elemId: 2, sd: 11.6 },
    { label: "4", R: 10.1232, d: 2.2824, nd: 1.0, elemId: 0, sd: 8.25 },
    { label: "5", R: 14.3712, d: 1.488, nd: 1.58913, elemId: 3, sd: 8.0 },
    { label: "6", R: 9.66, d: 4.1688, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "7", R: 44.796, d: 10.716, nd: 1.7847, elemId: 4, sd: 6.6 },
    { label: "8", R: 1e15, d: 1.7364, nd: 1.0, elemId: 0, sd: 6.15 },
    { label: "STO", R: 1e15, d: 1.7364, nd: 1.0, elemId: 0, sd: 5.898969 },
    { label: "9", R: 71.4528, d: 3.9696, nd: 1.6968, elemId: 5, sd: 6.7 },
    { label: "10", R: -22.3704, d: 0.0984, nd: 1.0, elemId: 0, sd: 6.85 },
    { label: "11", R: -51.8832, d: 1.1904, nd: 1.80518, elemId: 6, sd: 6.75 },
    { label: "12", R: 34.1688, d: 1.3392, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "13", R: -37.7112, d: 2.3808, nd: 1.6516, elemId: 7, sd: 6.4 },
    { label: "14", R: -15.1152, d: 0.0984, nd: 1.0, elemId: 0, sd: 7.3 },
    { label: "15", R: 90.3096, d: 2.0832, nd: 1.6968, elemId: 8, sd: 7.8 },
    { label: "16", R: -90.3096, d: 35.91969113246681, nd: 1.0, elemId: 0, sd: 8.0 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 0.25,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: JP1980-087117 Example 1 publishes only the infinity prescription. " +
    "The production minimum focus distance is 0.25 m from the film plane; no internal focus movement is modeled.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
