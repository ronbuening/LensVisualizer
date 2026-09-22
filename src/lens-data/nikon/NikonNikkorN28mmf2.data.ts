import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Nikon Nikkor-N Auto 28mm f/2                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,736,049 (granted 1973-05-29), the single worked ║
 * ║  embodiment (Yoshiyuki Shimizu / Nippon Kogaku K.K.).              ║
 * ║  Retrofocus wide-angle, reversed Galilean converter + master lens. ║
 * ║  9 elements / 8 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: CRC — d9 (converter-to-master gap) varies with distance.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100; all R, d, sd and variable gaps ×0.28 (the   ║
 * ║    28 mm production focal length). The printed table gives EFL    ║
 * ║    99.32 / BF 133.43 at f = 100 (27.807 / 37.36 here) and         ║
 * ║    reproduces the printed fc = 1406.3 exactly; the printed          ║
 * ║    f = 100.0 / B.F. = 136.1 are not reproduced by any single-row  ║
 * ║    correction, so the table is kept as printed (source conflict). ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent publishes no clear apertures. Rims are read from    ║
 * ║    Fig. 1 (18.5 px/mm at this scale from the r1–r17 vertex span)  ║
 * ║    and checked with an exact f/2 axial + 21.6 mm chief-ray trace: ║
 * ║    L1 front 22.0 (drawn flange; chief ray needs 18.3), L1 rear    ║
 * ║    16.0 (drawn 17.0, but at the printed R2 the rim would touch L2  ║
 * ║    above 16.4), L2 17.8, L3 front 15.8 / rear 13.5. L4–L6 and     ║
 * ║    L8 rear / L9 (drawn 12.5, 11.8, 10.5–11, 13.0) are kept within ║
 * ║    15 % of the drawing. L7 and L8 front are 9.74 mm: the f/2       ║
 * ║    marginal ray needs 9.71–9.72 there and the printed d13 = 1.371 ║
 * ║    lets r13 and r14 meet at 9.75 mm, so this gap is a near-contact ║
 * ║    (gapSagFrac 1) rather than the drawn 10.3 mm rims.              ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The stop S is drawn, not tabulated. Fig. 1 and the front-page  ║
 * ║    figure both place its tick 10 % of d11 behind the r11 vertex,  ║
 * ║    so d11 = 5.678 is split 0.568 (r11→STO) + 5.110 (STO→r12).     ║
 * ║    The L7 front rim then sits 2.4 mm behind the stop plane.       ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                    ║
 * ║    The patent publishes one close state: β = −1/10 with            ║
 * ║    Δd9 = −2.2 at f = 100 (−0.616 here). With the printed table     ║
 * ║    that state sits at 370 mm object-to-image (focus t = 0.81),    ║
 * ║    preserved exactly; the production 0.3 m MFD keyframe keeps d9  ║
 * ║    at the published close value (no further CRC travel is         ║
 * ║    published) and extends BF to focus at 300 mm (calculated).     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-n-28f2",
  maker: "Nikon",
  name: "NIKON NIKKOR-N AUTO 28mm f/2",
  subtitle: "US 3,736,049 SINGLE EMBODIMENT — NIPPON KOGAKU / SHIMIZU",
  specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 27.8 mm (design)", "F/2.0", "2ω ≈ 74.5°", "ALL SPHERICAL"],

  focalLengthMarketing: 28,
  focalLengthDesign: 27.8,
  apertureMarketing: 2.0,
  apertureDesign: 2.0,
  patentNumber: "US 3,736,049",
  patentAuthors: ["Yoshiyuki Shimizu"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1973,
  elementCount: 9,
  groupCount: 8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",

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
      glass: "S-BSM15 (OHARA)",
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
      glass: "S-BSM15 (OHARA)",
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
      glass: "E-LASF016 (Hikari) / J-LASF016 / LACL60 class",
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
      glass: "J-BK7A (HIKARI catalog equivalent; patent 1.51680 / 64.2, vendor unspecified)",
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
      glass: "J-BK7A (HIKARI catalog equivalent; patent 1.51680 / 64.2, vendor unspecified)",
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
      glass: "744479 — lanthanum flint (catalog unresolved; nd = 1.74443, νd = 47.9)",
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
   *  Scaled from the US 3,736,049 table (f = 100) by ×0.28.
   *  Stop position drawn only: Fig. 1 puts it 10 % of d11 behind r11.
   */
  surfaces: [
    // ── Forward group C (reversed Galilean converter) ──
    { label: "1", R: 63.627, d: 3.133, nd: 1.62299, elemId: 1, sd: 22.0 }, // L1 front
    { label: "2", R: 21.343, d: 6.364, nd: 1.0, elemId: 0, sd: 16.0 }, // L1 rear → air
    { label: "3", R: 66.573, d: 4.602, nd: 1.744, elemId: 2, sd: 17.8 }, // L2 front
    { label: "4", R: 1667.889, d: 0.098, nd: 1.0, elemId: 0, sd: 17.8 }, // L2 rear → air
    { label: "5", R: 59.711, d: 1.958, nd: 1.62299, elemId: 3, sd: 15.8 }, // L3 front
    { label: "6", R: 17.916, d: 10.769, nd: 1.0, elemId: 0, sd: 13.5 }, // L3 rear → air
    { label: "7", R: 32.787, d: 6.56, nd: 1.7725, elemId: 4, sd: 13.8 }, // L4 front (cemented D1)
    { label: "8", R: -37.594, d: 4.408, nd: 1.5168, elemId: 5, sd: 13.8 }, // L4→L5 junction
    { label: "9", R: 89.947, d: 1.469, nd: 1.0, elemId: 0, sd: 13.8 }, // L5 rear → air (variable)

    // ── Rear group M (master lens) ──
    { label: "10", R: 83.217, d: 4.895, nd: 1.5168, elemId: 6, sd: 12.5 }, // L6 front
    { label: "11", R: -29.789, d: 0.568, nd: 1.0, elemId: 0, sd: 12.5 }, // L6 rear → air (to stop)
    { label: "STO", R: 1e15, d: 5.11, nd: 1.0, elemId: 0, sd: 9.9 }, // Aperture stop (f/2 iris radius 9.89 at this station)
    { label: "12", R: -18.797, d: 5.287, nd: 1.7847, elemId: 7, sd: 9.74 }, // L7 front
    { label: "13", R: 70.979, d: 1.371, nd: 1.0, elemId: 0, sd: 9.74 }, // L7 rear → air (near-contact gap)
    { label: "14", R: -68.531, d: 3.329, nd: 1.74443, elemId: 8, sd: 9.74 }, // L8 front
    { label: "15", R: -21.538, d: 0.098, nd: 1.0, elemId: 0, sd: 11.5 }, // L8 rear → air
    { label: "16", R: 245.147, d: 3.427, nd: 1.713, elemId: 9, sd: 11.5 }, // L9 front
    { label: "17", R: -35.643, d: 37.361, nd: 1.0, elemId: 0, sd: 11.5 }, // L9 rear → image (BFD)
  ],

  asph: {},

  /* ── Variable air spacings (CRC focus) ──
   *  Keyframes: infinity; the published β = −1/10 state (Δd9 = −2.2 at
   *  f = 100 → −0.616 mm), which the printed table places at 370.35 mm
   *  object-to-image (t = 0.3/0.3704 = 0.81, BF 40.141 by paraxial solve);
   *  and the production 0.3 m MFD with d9 held at the published close
   *  value and BF 41.101 (calculated; the patent publishes no CRC travel
   *  beyond β = −1/10).
   */
  focusPositions: [0, 0.81, 1],
  var: {
    "9": [1.469, 0.853, 0.853],
    "17": [37.361, 40.141, 41.101],
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
  focusDescription:
    "CRC (Close-Range Correction): the converter-to-master gap d9 closes by the published 0.616 mm at β = −1/10 (≈0.37 m) while the whole lens extends; the 0.3 m production MFD keyframe holds that d9 and is calculated.",

  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* The printed d13 = 1.371 mm gap lets the L7 rear and L8 front rims meet at 9.75 mm,
   * 0.03 mm above the f/2 marginal ray; the rims are set at that near-contact height. */
  gapSagFrac: 1,

  scFill: 0.45,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
