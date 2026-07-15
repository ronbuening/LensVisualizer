import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║                    LENS DATA — SONY E 20mm f/2.8                       ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0204265 A1, Numerical Example 4 (Sony / Sunaga). ║
 * ║  Patent prescription transcribed without scaling.                      ║
 * ║                                                                          ║
 * ║  The patent names six lenses (L1–L6) in four power groups (+/−/+/−).   ║
 * ║  Sony specifies 6 elements / 6 groups for the production SEL20F28.      ║
 * ║  The `elements` array contains seven material entries because the thin   ║
 * ║  aspherical resin layer bonded to L1 is modeled explicitly;              ║
 * ║  `elementCount` remains the manufacturer's six-lens count.               ║
 * ║                                                                          ║
 * ║  Focus: rear focus by imageward translation of G4 (L6).                 ║
 * ║  Patent variable gaps: D12 1.20→2.41 mm; BF 17.59→16.38 mm.            ║
 * ║                                                                          ║
 * ║  Semi-diameters were estimated from the traced ray envelope, then tuned  ║
 * ║  to reproduce the stepped rear-group silhouette in patent FIG. 10. The  ║
 * ║  bonded resin layer is intentionally thin.                               ║
 * ║                                                                          ║
 * ║  The rounded short-distance patent spacings do not reproduce β = −0.122 ║
 * ║  exactly in a first-order trace; the tabulated spacings are preserved.   ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-e-20f28",
  maker: "Sony",
  name: "SONY E 20mm f/2.8",
  subtitle: "US 2014/0204265 A1 — NUMERICAL EXAMPLE 4",
  specs: [
    "6 ELEMENTS / 6 GROUPS",
    "4 POWER GROUPS (+/−/+/−)",
    "f = 20.421 mm (DESIGN)",
    "F/2.89 (DESIGN)",
    "2ω = 71.96°",
    "5 ASPHERICAL SURFACES / 3 LENSES",
  ],

  focalLengthMarketing: 20,
  focalLengthDesign: 20.42057,
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  lensMounts: ["sony-fe"],
  imageFormat: "aps-c",
  patentYear: 2014,
  elementCount: 6,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1 glass substrate",
      type: "Negative Meniscus",
      nd: 1.567,
      vd: 42.84,
      fl: -26.22,
      glass: "S-TIL26 (OHARA; 567/428 catalog match)",
      apd: false,
      cemented: "H1",
      role: "Negative front meniscus and substrate for the bonded aspherical resin layer.",
    },
    {
      id: 2,
      name: "L1r",
      label: "L1 aspherical resin layer",
      type: "Negative Resin Meniscus (1× Asph)",
      nd: 1.534,
      vd: 41.71,
      fl: -173.92,
      glass: "Unmatched (proprietary aspherical resin; patent nd=1.534, νd=41.71)",
      apd: false,
      cemented: "H1",
      role: "Thin bonded layer that supplies the aspherical outer face of the L1 composite.",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.5,
      fl: 16.276,
      glass: "S-LAH65VS (OHARA; 804/465 catalog match)",
      apd: false,
      role: "Strong positive member of G1; offsets the negative hybrid front element.",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.689,
      vd: 31.16,
      fl: -14.498,
      glass: "E-FD8 class (HOYA; 689/312 catalog-code match)",
      apd: false,
      role: "Strong negative and doubly aspherical front member of G2.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.729,
      vd: 54.67,
      fl: 21.207,
      glass: "S-LAL18 (OHARA; 729/547 catalog match)",
      apd: false,
      role: "Positive, lower-dispersion partner to L3 within the net-negative G2.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.821,
      vd: 42.71,
      fl: 14.204,
      glass: "M-TAFD51 (HOYA; 821/427 catalog match)",
      apd: false,
      role: "Strong positive relay forming the entire third power group.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.847,
      vd: 23.78,
      fl: -24.693,
      glass: "S-TIH53 (OHARA; 847/238 catalog match)",
      apd: false,
      role: "Single-element negative rear-focus group.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 100.0, d: 0.7, nd: 1.567, elemId: 1, sd: 5.2 },
    { label: "2", R: 12.91, d: 0.08, nd: 1.534, elemId: 2, sd: 5.0 },
    { label: "3A", R: 11.31, d: 0.9, nd: 1.0, elemId: 0, sd: 5.0 },
    { label: "4", R: 12.47, d: 1.62, nd: 1.804, elemId: 3, sd: 4.8 },
    { label: "5", R: 249.73, d: 1.44, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "STO", R: 1e15, d: 4.05, nd: 1.0, elemId: 0, sd: 3.490863 },
    { label: "7A", R: -6.02, d: 0.75, nd: 1.689, elemId: 4, sd: 5.3 },
    { label: "8A", R: -15.92, d: 0.3, nd: 1.0, elemId: 0, sd: 5.7 },
    { label: "9", R: -29.58, d: 3.5, nd: 1.729, elemId: 5, sd: 6.4 },
    { label: "10", R: -10.66, d: 0.2, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "11A", R: 22.1, d: 3.75, nd: 1.821, elemId: 6, sd: 8.2 },
    { label: "12A", R: -22.8, d: 1.2, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "13", R: -50.87, d: 0.85, nd: 1.847, elemId: 7, sd: 7.8 },
    { label: "14", R: 35.79, d: 17.59, nd: 1.0, elemId: 0, sd: 7.8 },
  ],

  /* ── Aspherical surfaces ──
   * Patent Expression 1 uses the standard conic convention:
   * K = 0 sphere; K = −1 paraboloid.
   */
  asph: {
    "3A": {
      K: 0,
      A4: -3.8544e-5,
      A6: -9.2082e-7,
      A8: 8.5792e-9,
      A10: -4.6597e-11,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: -0.6857,
      A4: -5.3036e-4,
      A6: 2.5638e-5,
      A8: 9.0164e-8,
      A10: -2.5389e-8,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 0,
      A4: -6.8401e-4,
      A6: 4.1185e-5,
      A8: -8.6459e-7,
      A10: 6.1843e-9,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: -0.9098,
      A4: -2.1495e-4,
      A6: 1.8334e-6,
      A8: 2.0282e-9,
      A10: -6.7158e-11,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 3.4624e-5,
      A6: -1.7483e-6,
      A8: 3.5493e-8,
      A10: -1.8422e-10,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Focus variables ── */
  var: {
    "12A": [1.2, 2.41],
    "14": [17.59, 16.38],
  },
  varLabels: [
    ["12A", "D12"],
    ["14", "BF"],
  ],
  focusDescription: "Rear focus: G4 (L6) moves 1.21 mm imageward from infinity to the patent short-distance state.",

  /* ── Diagram annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "7A", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "11A", toSurface: "12A" },
    { text: "G4 (− / FOCUS)", fromSurface: "13", toSurface: "14" },
  ],
  doublets: [{ text: "H1", fromSurface: "1", toSurface: "3A" }],

  /* ── Product and viewer configuration ── */
  closeFocusM: 0.2,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 7,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
