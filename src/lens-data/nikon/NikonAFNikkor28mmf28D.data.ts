import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║            LENS DATA — Nikon AF Nikkor 28mm f/2.8D                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,557,473, Third Embodiment / Table 5, FIG. 3.    ║
 * ║  Nikon compact all-spherical retrofocus wide-angle formula.         ║
 * ║  6 elements / 6 groups, 0 aspherical surfaces.                     ║
 * ║                                                                    ║
 * ║  Focus: the patent publishes only the infinity prescription.        ║
 * ║  This file models close focus as first-order unit extension by      ║
 * ║  varying only the final back-focus gap. The computed 0.25 m metric  ║
 * ║  reference state gives m≈0.178, matching Nikon's published 0.18×.   ║
 * ║  This is not a production focus-group prescription.                 ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: none. Patent f=28.6 mm is used directly.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: patent does not list clear apertures.      ║
 * ║  SDs were estimated from paraxial marginal/chief-ray heights,       ║
 * ║  spherical rim limits, element edge thickness, and cross-gap sag.   ║
 * ║  The close L4/L5 air lens is deliberately diameter-limited to keep  ║
 * ║  signed sag intrusion below 90% of the 1.15 mm air gap.             ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and simplified variable focus gap                ║
 * ║    ✗ Sensor glass, filters, and mechanical parts are not included   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-nikkor-28mm-f28d",
  maker: "Nikon",
  name: "Nikon AF Nikkor 28mm f/2.8D",
  subtitle: "US 5,557,473, Third Embodiment — Nikon / Sugiyama & Sato",
  specs: ["6 elements / 6 groups", "f = 28.60 mm", "F/2.86 design", "2ω = 75.4°", "all-spherical retrofocus"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.6012,
  apertureMarketing: 2.8,
  apertureDesign: 2.86,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,557,473",
  patentAuthors: ["Yoshikazu Sugiyama", "Haruo Sato"],
  patentAssignees: ["Nikon Corp"],
  patentYear: 1996,
  elementCount: 6,
  groupCount: 6,
  apertureBlades: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.64831,
      vd: 33.8,
      fl: 204.49,
      glass: "SF2-class dense flint (648/338; exact catalog identity uncertain)",
      role: "Weak front positive element; gently bends off-axis chief rays before the strong negative meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6516,
      vd: 58.5,
      fl: -31.65,
      glass: "S-LAL7 (OHARA)",
      role: "Dominant front-group negative element; establishes retrofocus divergence while limiting chromatic spread.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.79668,
      vd: 45.4,
      fl: 23.98,
      glass: "797454 — unmatched high-index lanthanum dense flint (patent nd=1.79668, νd=45.4; no exact public catalog match)",
      role: "Strong first rear-group converger; begins recovery from the front group's divergent beam.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      fl: -18.28,
      glass: "SF56A (SCHOTT)",
      role: "Rear-group negative Petzval and chromatic-correction element immediately behind the aperture stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: 44.04,
      glass: "S-LAL14 (OHARA)",
      role: "Positive meniscus, concave to the object side; contributes final convergence and field correction.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 54.0,
      fl: 42.82,
      glass: "S-LAL8 (OHARA)",
      role: "Final positive element; completes convergence and sets the rear vertex distance.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 137.071, d: 3.0, nd: 1.64831, elemId: 1, sd: 23.5 },
    { label: "2", R: -4003.097, d: 0.2, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "3", R: 62.375, d: 2.0, nd: 1.6516, elemId: 2, sd: 16.9 },
    { label: "4", R: 15.301, d: 21.1, nd: 1.0, elemId: 0, sd: 13.6 },
    { label: "S1", R: 1e15, d: 1.1, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "6", R: 26.626, d: 6.3, nd: 1.79668, elemId: 3, sd: 12.0 },
    { label: "7", R: -60.568, d: 1.4, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "STO", R: 1e15, d: 3.6, nd: 1.0, elemId: 0, sd: 7.128875 },
    { label: "9", R: -26.792, d: 5.6, nd: 1.7847, elemId: 4, sd: 8.3 },
    { label: "10", R: 33.729, d: 1.15, nd: 1.0, elemId: 0, sd: 6.85 },
    { label: "11", R: -77.113, d: 2.2, nd: 1.6968, elemId: 5, sd: 6.85 },
    { label: "12", R: -22.209, d: 0.1, nd: 1.0, elemId: 0, sd: 7.3 },
    { label: "13", R: 84.648, d: 3.0, nd: 1.713, elemId: 6, sd: 12.0 },
    { label: "14", R: -47.047, d: 38.09, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  /* Patent has no close-focus spacing table. Unit-extension equivalent for 0.25 m object distance from image plane. */
  var: {
    "14": [38.09, 43.166531],
  },
  varLabels: [["14", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "4" },
    { text: "G2", fromSurface: "6", toSurface: "14" },
  ],

  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.25,
  focusDescription:
    "Patent publishes only the infinity prescription; close focus is modeled as first-order unit extension " +
    "by increasing BF from 38.09 mm to 43.17 mm at a 0.25 m metric reference state.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.56,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
