import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — KODAK WIDE-FIELD EKTAR 100mm f/6.3              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,518,719, Max Reiss / Eastman Kodak, Example 2.  ║
 * ║  Four simple meniscus elements in four air-spaced groups.          ║
 * ║  Topogon-family positive-negative-negative-positive architecture.   ║
 * ║  4 elements / 4 groups, all spherical.                             ║
 * ║  Focus: unit-focus model; only the final BFD varies.               ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent prescription is normalized to EF = 100 mm. No        ║
 * ║    production scaling is applied. The rounded prescription traces  ║
 * ║    to EFL = 100.086 mm.                                            ║
 * ║                                                                    ║
 * ║  NOTE ON R7:                                                       ║
 * ║    Fig. 2 appears to read R7 = -63.4, but the repeated text table, ║
 * ║    Claim 6 normalized value, and surface-power table all require   ║
 * ║    R7 = -68.4. The data uses -68.4.                                ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The patent states only that the diaphragm is closer to the       ║
 * ║    front component than to the rear in Examples 1 and 2, but not   ║
 * ║    more than twice as close. The 10.60 mm central airspace is       ║
 * ║    split as 4.00 mm before the stop and 6.60 mm after the stop.    ║
 * ║    Stop SD = 6.6845 mm gives f/6.3 by paraxial trace.              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. Semi-diameters     ║
 * ║    were inferred from the f/6.3 on-axis bundle, a 4x5-format       ║
 * ║    off-axis trace check, element edge thickness, and cross-gap     ║
 * ║    sag constraints. The opposed central-gap surfaces are capped at ║
 * ║    11.35 mm to keep their combined sag inside the 90% render       ║
 * ║    clearance budget for the 10.60 mm patent airspace. They are     ║
 * ║    visualization apertures, not measured mechanical clear          ║
 * ║    apertures.                                                      ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and unit-focus BFD variation                    ║
 * ║    ✗ No shutter, filter, lens board, or mechanical mount data      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "kodak-wide-field-ektar-100f63",
  maker: "Kodak",
  name: "KODAK WIDE-FIELD EKTAR 100mm f/6.3",
  subtitle: "US 2,518,719 Example 2 — Eastman Kodak / Max Reiss",
  specs: ["4 elements / 4 groups", "EFL 100.09 mm", "f/6.3", "All-spherical", "4x5 format model"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100.086,
  apertureMarketing: 6.3,
  apertureDesign: 6.3,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "4x5",
  patentNumber: "US 2,518,719",
  patentAuthors: ["Max Reiss"],
  patentAssignees: ["Eastman Kodak Company"],
  patentYear: 1950,
  elementCount: 4,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Lens I",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.3,
      fl: 70.91,
      glass: "N-SK16 (Schott, nearest modern catalog equivalent)",
      apd: false,
      role: "Front positive meniscus collector; crown-class partner for the front negative component.",
    },
    {
      id: 2,
      name: "L2",
      label: "Lens II",
      type: "Negative Meniscus",
      nd: 1.621,
      vd: 36.2,
      fl: -90.39,
      glass: "F2 (Schott, nearest modern catalog equivalent)",
      apd: false,
      role: "Front negative meniscus of the central pair; strong rear surface supplies major negative field-flattening power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Lens III",
      type: "Negative Meniscus",
      nd: 1.605,
      vd: 38.0,
      fl: -60.66,
      glass: "F5 (Schott, nearest modern catalog equivalent)",
      apd: false,
      role: "Rear negative meniscus; asymmetric counterpart to Lens II for coma and chromatic balancing.",
    },
    {
      id: 4,
      name: "L4",
      label: "Lens IV",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.3,
      fl: 47.0,
      glass: "N-SK16 (Schott, nearest modern catalog equivalent)",
      apd: false,
      role: "Rear positive meniscus collector; strongest standalone positive element in the design.",
    },
  ],

  surfaces: [
    { label: "1", R: 24.6, d: 4.89, nd: 1.62, elemId: 1, sd: 17.4 },
    { label: "2", R: 51.6, d: 0.65, nd: 1.0, elemId: 0, sd: 17.4 },
    { label: "3", R: 22.0, d: 2.2, nd: 1.621, elemId: 2, sd: 13.5 },
    { label: "4", R: 15.2, d: 4.0, nd: 1.0, elemId: 0, sd: 11.35 },
    { label: "STO", R: 1e15, d: 6.6, nd: 1.0, elemId: 0, sd: 6.6845 },
    { label: "5", R: -16.8, d: 2.04, nd: 1.605, elemId: 3, sd: 11.35 },
    { label: "6", R: -32.4, d: 0.81, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "7", R: -68.4, d: 4.07, nd: 1.62, elemId: 4, sd: 14.1 },
    { label: "8", R: -20.9, d: 89.00961, nd: 1.0, elemId: 0, sd: 14.1 },
  ],

  asph: {},

  var: {
    "8": [89.00961, 99.96037],
  },
  varLabels: [["8", "BF"]],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "6" },
    { text: "IV", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  focusDescription: "Unit-focus model. Patent gives infinity data only; close focus is represented by BFD extension.",
  closeFocusM: 1.0,
  nominalFno: 6.3,
  fstopSeries: [6.3, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.68,
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
