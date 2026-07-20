import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                 LENS DATA — CANON 50mm f/1.2                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,836,102, Example 2 (Hiroshi Ito / Canon Camera         ║
 * ║  Company, Inc.). Modified high-aperture double-Gauss.                     ║
 * ║  7 elements / 5 groups, all spherical.                                    ║
 * ║  Focus: unit focus; the complete objective translates.                    ║
 * ║                                                                            ║
 * ║  SCALING:                                                                  ║
 * ║    The patent prescription is normalized to f = 100. All radii, axial     ║
 * ║    distances, BFDs, focal lengths, and inferred semi-diameters are scaled ║
 * ║    ×0.5 for the marketed 50 mm lens. The rounded patent table computes    ║
 * ║    EFL = 50.512979 mm after this nominal scaling.                          ║
 * ║                                                                            ║
 * ║  PATENT TYPOGRAPHY:                                                        ║
 * ║    The principal Example 2 table gives n7 = 1.6935. Claim 4 prints        ║
 * ║    n7 = 1.6435, which violates Claim 2 and shifts the computed EFL to      ║
 * ║    52.344779 mm after scaling. The principal-table value is used.         ║
 * ║                                                                            ║
 * ║  SPECTRAL REFERENCE AND GLASS LABELS:                                      ║
 * ║    The patent calls the reference the D-line and tabulates only rounded   ║
 * ║    index/Abbe pairs. Exact or near-exact catalog coordinate equivalents   ║
 * ║    provide dispersion for L2-L5; the non-unique 694535 glass in L1/L6/L7  ║
 * ║    remains unmatched. No original 1955 melt or vendor is asserted.        ║
 * ║                                                                            ║
 * ║  APERTURE STOP:                                                            ║
 * ║    The patent locates D within the r7-r8 air gap but does not publish its ║
 * ║    exact station or diameter. At the required f/1.2 rim, the stop plane   ║
 * ║    is centered between the opposing spherical profiles: 6.455948 mm      ║
 * ║    after r7 and 4.199052 mm before r8. Stop SD = 10.662193 mm gives an    ║
 * ║    entrance-pupil diameter of 42.094150 mm at EFL = 50.512979 mm.         ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS:                                                           ║
 * ║    The patent supplies none. Values are inferred from the f/1.2 marginal  ║
 * ║    ray, the patent cross-section, and the production lens's 55 mm filter  ║
 * ║    thread. They retain at least 0.50 mm axial thickness over each shared  ║
 * ║    clear band, keep element SD ratios ≤ 1.25 and sd/|R| < 0.90, and       ║
 * ║    satisfy the signed 90% cross-gap sag-intrusion limit.                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-50f12-1956",
  maker: "Canon",
  name: "CANON 50mm f/1.2",
  subtitle: "US 2,836,102 Example 2 — Hiroshi Ito / Canon Camera Co., Inc.",
  specs: ["7 ELEMENTS / 5 GROUPS", "50 mm (DESIGN 50.513 mm)", "F/1.2", "2ω = 40°", "ALL-SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.512979,
  apertureMarketing: 1.2,
  lensMounts: ["leica-ltm"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,836,102",
  patentAuthors: ["Hiroshi Ito"],
  patentAssignees: ["Canon Camera Co., Inc."],
  patentYear: 1958,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.5,
      fl: 105.644794,
      glass: "Unmatched (694535 lanthanum crown; H-LaK6A/LAC13/S-LAL13 candidates are non-unique)",
      apd: false,
      role: "First half of the split positive front collector; convex toward the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7173,
      vd: 47.9,
      fl: 105.814527,
      glass: "S-LAM3 (OHARA; 717479 coordinate equivalent, original Canon melt not identified)",
      apd: false,
      role: "Second half of the split front collector; nearly equal standalone power to L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.6385,
      vd: 55.5,
      fl: 35.202908,
      glass: "K-SK18 (Sumita; 639555 exact coordinate equivalent, original Canon melt not identified)",
      apd: false,
      role: "Positive crown component of the front cemented negative meniscus.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7174,
      vd: 29.5,
      fl: -17.529482,
      glass: "S-TIH1 (OHARA; 717295 coordinate equivalent, original Canon melt not identified)",
      apd: false,
      role: "High-dispersion negative partner; the L3-L4 cemented net is negative.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5174,
      vd: 52.5,
      fl: -26.478792,
      glass: "S-NSL36 (OHARA; 517524 close coordinate equivalent to patent 517525, original Canon melt not identified)",
      apd: false,
      role: "Negative front element of the rear cemented meniscus.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.5,
      fl: 27.893319,
      glass: "Unmatched (694535 lanthanum crown; H-LaK6A/LAC13/S-LAL13 candidates are non-unique)",
      apd: false,
      role: "Positive partner of L5; the cemented L5-L6 net is only weakly positive.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.5,
      fl: 45.227211,
      glass: "Unmatched (694535 lanthanum crown; H-LaK6A/LAC13/S-LAL13 candidates are non-unique)",
      apd: false,
      role: "Rear positive singlet and final converging component.",
    },
  ],

  /* ── Surface prescription, object to image ── */
  surfaces: [
    { label: "1", R: 47.0, d: 4.5, nd: 1.6935, elemId: 1, sd: 23.2 },
    { label: "2", R: 125.965, d: 0.105, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "3", R: 34.495, d: 4.0, nd: 1.7173, elemId: 2, sd: 21.3 },
    { label: "4", R: 60.17, d: 0.48, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "5", R: 25.48, d: 10.24, nd: 1.6385, elemId: 3, sd: 19.0 },
    { label: "6", R: -160.85, d: 2.195, nd: 1.7174, elemId: 4, sd: 15.25 },
    { label: "7", R: 13.72, d: 6.455948, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "STO", R: 1e15, d: 4.199052, nd: 1.0, elemId: 0, sd: 10.662193 },
    { label: "8", R: -21.51, d: 1.065, nd: 1.5174, elemId: 5, sd: 11.5 },
    { label: "9", R: 38.37, d: 6.2, nd: 1.6935, elemId: 6, sd: 13.0 },
    { label: "10", R: -36.43, d: 1.065, nd: 1.0, elemId: 0, sd: 13.7 },
    { label: "11", R: 90.79, d: 3.585, nd: 1.6935, elemId: 7, sd: 13.7 },
    { label: "12", R: -47.145, d: 21.072291, nd: 1.0, elemId: 0, sd: 13.7 },
  ],

  asph: {},

  /* Unit focus is represented optically by increasing the rear BFD. */
  var: {
    "12": [21.072291, 23.878321],
  },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 1.0,
  focusDescription: "Unit focusing: the complete objective translates; the model varies only the rear BFD.",
  nominalFno: 1.2,
  apertureBlades: 11,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
