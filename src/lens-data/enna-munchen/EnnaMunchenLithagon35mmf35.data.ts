import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — ENNA MÜNCHEN LITHAGON 35mm f/3.5             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,821,112, sole numerical example.                ║
 * ║  Four-member retrofocus wide-angle: front negative meniscus plus    ║
 * ║  air-spaced triplet.                                               ║
 * ║  4 elements / 4 groups, all spherical.                             ║
 * ║  Focus: unit focus; the patent gives only the infinity prescription.║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized to f=1.0. Radii, spacings,     ║
 * ║    BFD, and inferred semi-diameters are scaled ×35 for the          ║
 * ║    production 35 mm focal length.                                  ║
 * ║                                                                    ║
 * ║  NOTE ON BFD:                                                      ║
 * ║    The patent states s'=1.01941f. Independent paraxial tracing      ║
 * ║    from the rounded prescription gives s'=1.01943351f. The data  ║
 * ║    file uses the traced value (35.68017 mm) so the image plane     ║
 * ║    is at paraxial focus.                                           ║
 * ║                                                                    ║
 * ║  NOTE ON STOP AND SEMI-DIAMETERS:                                  ║
 * ║    The patent drawing shows the stop in l2 between L2 and L3 but    ║
 * ║    does not publish an axial stop coordinate or clear apertures.    ║
 * ║    l2 is split evenly around STO; STO sd is solved paraxially for   ║
 * ║    f/3.5. Element SDs are inferred from marginal/chief ray          ║
 * ║    envelopes and constrained by plausible mechanical clearances.    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and unit-focus BFD variation                     ║
 * ║    ✗ No filters, sensor cover glass, mount, barrel, or mechanics    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "enna-munchen-lithagon-35mm-f35",
  maker: "Enna München",
  name: "ENNA MÜNCHEN LITHAGON 35mm f/3.5",
  subtitle: "US 2,821,112 — Lautenbacher / Brendel, Enna-Werk",
  specs: ["4 elements / 4 groups", "f ≈ 35.0 mm", "F/3.5", "2ω ≈ 63.4°", "all-spherical"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.0008,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["exakta", "m42", "praktina"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,821,112",
  patentAuthors: ["Johann Lautenbacher", "Theodor Brendel"],
  patentAssignees: ["ENNA WERK OPTIK APELT"],
  patentYear: 1958,
  elementCount: 4,
  groupCount: 4,
  apertureBlades: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51821,
      vd: 65.2,
      fl: -127.02,
      glass: "Unmatched (518/652 crown class)",
      apd: false,
      role: "Front negative meniscus that provides the long-back-focus retrofocus layout.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.744,
      vd: 44.9,
      fl: 21.64,
      glass: "N-LAF2 (Schott, equivalent)",
      apd: false,
      role: "Front positive element of the rear triplet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      fl: -13.25,
      glass: "SF5 (Schott)",
      apd: false,
      role: "High-dispersion negative element of the rear triplet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.5,
      fl: 19.99,
      glass: "N-LAK7 (Schott)",
      apd: false,
      role: "Rear positive element of the triplet and final converging member.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 69.44, d: 1.75, nd: 1.51821, elemId: 1, sd: 20.0 },
    { label: "2", R: 33.5013, d: 26.6, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "3", R: 16.1, d: 3.15, nd: 1.744, elemId: 2, sd: 9.0 },
    { label: "4", R: 1e15, d: 1.75, nd: 1.0, elemId: 0, sd: 7.5 },
    // STO position inferred from Fig. 1; patent l2=0.100f is split 0.050f/0.050f around the stop.
    { label: "STO", R: 1e15, d: 1.75, nd: 1.0, elemId: 0, sd: 5.15746 },
    { label: "5", R: -18.83, d: 0.98, nd: 1.6727, elemId: 3, sd: 6.2 },
    { label: "6", R: 17.29, d: 2.1, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "7", R: 91.0, d: 3.29, nd: 1.6516, elemId: 4, sd: 8.3 },
    { label: "8", R: -14.9856, d: 35.68017, nd: 1.0, elemId: 0, sd: 8.3 },
  ],

  asph: {},

  var: {
    "8": [35.68017, 38.60566],
  },

  varLabels: [["8", "BF"]],

  groups: [
    { text: "M", fromSurface: "1", toSurface: "2" },
    { text: "T", fromSurface: "3", toSurface: "8" },
  ],

  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription: "Unit focus; only the back-focus gap changes in the data model.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.56,
  yScFill: 0.54,
} satisfies LensDataInput;

export default LENS_DATA;
