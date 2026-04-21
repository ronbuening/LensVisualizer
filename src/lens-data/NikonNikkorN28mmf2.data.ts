import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Nikon Nikkor-N Auto 28mm f/2                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,736,049 Example 1 (Yoshiyuki Shimizu / Nikon). ║
 * ║  Retrofocus wide-angle, reversed Galilean converter + master lens. ║
 * ║  9 elements / 8 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: CRC — d9 (converter-to-master gap) varies with distance.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=100; all R, d, sd values scaled ×0.28 to f≈28 mm  ║
 * ║    production focal length.                                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined marginal ray (f/2) + chief ray (60%    ║
 * ║    field) trace with clearance multipliers, then constrained for   ║
 * ║    edge thickness ≥ 0.5 mm, sd/|R| < 0.90, and cross-gap sag     ║
 * ║    overlap. Tight gap between L7 rear and L8 front (d13 = 1.37mm) ║
 * ║    limits clear aperture in this region.                           ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent states stop S between L6 and L7. Position inferred from ║
 * ║    Fig. 1 — placed at ~60% through the d11 air gap.               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-n-28f2",
  maker: "Nikon",
  name: "NIKON NIKKOR-N AUTO 28mm f/2",
  subtitle: "US 3,736,049 EXAMPLE 1 — NIPPON KOGAKU / SHIMIZU",
  specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 27.8 mm (design)", "F/2.0", "2ω ≈ 74.5°", "ALL SPHERICAL"],

  focalLengthMarketing: 28,
  focalLengthDesign: 27.8,
  apertureMarketing: 2.0,
  apertureDesign: 2.0,
  patentYear: 1973,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.1,
      fl: -53.1,
      glass: "SK16 (Schott)",
      apd: false,
      role: "Front negative meniscus of reversed Galilean converter; diverges beam for wide field",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      fl: 93.1,
      glass: "LAF2 (Schott) / S-LAM2 (OHARA)",
      apd: false,
      role: "Corrects negative distortion from L1; nearly flat rear surface",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.1,
      fl: -41.8,
      glass: "SK16 (Schott)",
      apd: false,
      role: "Second negative meniscus; shares converter divergence with L1 to reduce SA and coma",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.5,
      fl: 23.6,
      glass: "LACL60 (HOYA) / equiv. LaK",
      apd: false,
      role: "Strongest positive element in converter; cemented to L5",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      fl: -50.7,
      glass: "BK7 (Schott) / S-BSL7 (OHARA)",
      apd: false,
      role: "Completes cemented doublet; large index step at junction provides SA correction at f/2",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 43.1,
      glass: "BK7 (Schott) / S-BSL7 (OHARA)",
      apd: false,
      role: "First element of master group M; asymmetric biconvex corrects inner coma per Condition (3)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      fl: -18.5,
      glass: "FDS9 (HOYA) / SF56A (Schott)",
      apd: false,
      role: "Strongest negative element; corrects SA from L6 and extends back focus per Conditions (4)/(5)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.74443,
      vd: 47.9,
      fl: 41.0,
      glass: "Discontinued LaF/LaK type (1970s)",
      apd: false,
      role: "Concave-to-object meniscus; bends divergent beam from L7 back toward convergence",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      fl: 43.9,
      glass: "LAK8 (Schott) / S-LAL8 (OHARA)",
      apd: false,
      role: "Final image-forming element; nearly flat front, strong rear surface provides final convergence",
    },
  ],

  /* ── Surface prescription ──
   *  Scaled from US 3,736,049 Example 1 at f=100 by ×0.28.
   *  Stop position inferred from Fig. 1 at ~60% through d11.
   */
  surfaces: [
    // ── Forward group C (reversed Galilean converter) ──
    { label: "1", R: 63.627, d: 3.133, nd: 1.62299, elemId: 1, sd: 15.0 }, // L1 front
    { label: "2", R: 21.343, d: 6.364, nd: 1.0, elemId: 0, sd: 15.0 }, // L1 rear → air
    { label: "3", R: 66.573, d: 4.602, nd: 1.744, elemId: 2, sd: 14.5 }, // L2 front
    { label: "4", R: 1667.889, d: 0.098, nd: 1.0, elemId: 0, sd: 14.5 }, // L2 rear → air
    { label: "5", R: 59.711, d: 1.958, nd: 1.62299, elemId: 3, sd: 13.5 }, // L3 front
    { label: "6", R: 17.916, d: 10.769, nd: 1.0, elemId: 0, sd: 13.5 }, // L3 rear → air
    { label: "7", R: 32.787, d: 6.56, nd: 1.7725, elemId: 4, sd: 13.8 }, // L4 front (cemented D1)
    { label: "8", R: -37.594, d: 4.408, nd: 1.5168, elemId: 5, sd: 13.8 }, // L4→L5 junction
    { label: "9", R: 89.947, d: 1.469, nd: 1.0, elemId: 0, sd: 13.8 }, // L5 rear → air (variable)

    // ── Rear group M (master lens) ──
    { label: "10", R: 83.217, d: 4.895, nd: 1.5168, elemId: 6, sd: 12.5 }, // L6 front
    { label: "11", R: -29.789, d: 3.407, nd: 1.0, elemId: 0, sd: 12.5 }, // L6 rear → air (to stop)
    { label: "STO", R: 1e15, d: 2.271, nd: 1.0, elemId: 0, sd: 8.9 }, // Aperture stop
    { label: "12", R: -18.797, d: 5.287, nd: 1.7847, elemId: 7, sd: 9.5 }, // L7 front
    { label: "13", R: 70.979, d: 1.371, nd: 1.0, elemId: 0, sd: 9.2 }, // L7 rear → air
    { label: "14", R: -68.531, d: 3.329, nd: 1.74443, elemId: 8, sd: 9.5 }, // L8 front
    { label: "15", R: -21.538, d: 0.098, nd: 1.0, elemId: 0, sd: 11.5 }, // L8 rear → air
    { label: "16", R: 245.147, d: 3.427, nd: 1.713, elemId: 9, sd: 11.5 }, // L9 front
    { label: "17", R: -35.643, d: 37.361, nd: 1.0, elemId: 0, sd: 11.5 }, // L9 rear → image (BFD)
  ],

  asph: {},

  /* ── Variable air spacings (CRC focus) ──
   *  d9: converter-to-master gap, decreases ~0.62mm at close focus.
   *  BFD: back focal distance, increases as lens moves toward subject.
   *  Patent: d9 change = −2.2mm at f=100 for β=−1/10 (0.3m close focus).
   *  Extension formula: f²/(D−f) = 27.8²/272.2 ≈ 2.84mm; BFD increase =
   *  2.84 + 0.616 (CRC differential) = 3.46mm → BFD_close ≈ 40.82mm.
   */
  var: {
    "9": [1.469, 0.853],
    "17": [37.361, 40.817],
  },

  varLabels: [
    ["9", "D9"],
    ["17", "BF"],
  ],

  groups: [
    { text: "C (CONVERTER)", fromSurface: "1", toSurface: "9" },
    { text: "M (MASTER)", fromSurface: "10", toSurface: "17" },
  ],

  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.3,
  focusDescription: "CRC (Close-Range Correction): d9 between converter and master groups varies with focus distance.",

  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.45,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
