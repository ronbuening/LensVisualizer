/**
 * NIKKOR-N 5cm f/1.1 — Nikon S-mount rangefinder
 *
 * Patent:   US 2,828,671 — Saburo Murakami (Nippon Kogaku K.K.)
 * Filed:    1957-01-03 (JP priority 1956-04-10), granted 1958-04-01
 * Design:   Modified double-Gauss, 9 elements in 6 components
 *
 * Prescription linearly rescaled from the patent's f = 100 mm example
 * to the production 50 mm focal length (scale factor 0.5).
 *
 * Correction applied — r₆:
 *   The patent consistently prints r₆ = +872.1 (both the worked example
 *   and Claim 3). This is a typographical error in the original 1958
 *   publication. Paraxial verification shows that r₆ ≈ +122.5 (exact:
 *   122.495) is required to reproduce the patent's own stated f_III = −823.7
 *   and system EFL = 100. All six component focal lengths agree to within
 *   0.1% with this correction.
 *
 * Semi-diameters estimated via combined marginal + chief ray trace
 * (23° half-field, f/1.1 EP), with ~8–10% mechanical clearance. Front
 * elements constrained to fit within 62 mm filter barrel.
 *
 * Stop position estimated from patent figure; placed at approximate
 * midpoint of the 25.2 mm air gap between Components III and IV
 * (d₇ split 12.6 / 12.6).
 */

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "nikon-5cm-f11",
  maker: "Nikon",
  name: "NIKON NIKKOR-N 5cm f/1.1",
  subtitle: "US 2,828,671 — Murakami 1958",
  focalLengthMarketing: 50,
  focalLengthDesign: 50.08,
  apertureMarketing: 1.1,
  apertureDesign: 1.1,
  patentYear: 1958,
  elementCount: 9,
  groupCount: 6,
  specs: ["9 elements / 6 groups", "Modified double-Gauss", "All-spherical", "Scaled 0.5× from f = 100 patent"],
  focusDescription: "Unit focus — entire lens translates; only back focal distance changes",

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6073,
      vd: 59.5,
      fl: 223.9,
      glass: "SK (Dense Crown), 607/595 — likely HIKARI equivalent",
      role: "Low-power front positive meniscus distributing convergence gently across the front group.",
    },
    {
      id: 2,
      name: "L21",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6073,
      vd: 59.5,
      fl: 169.45,
      glass: "SK (Dense Crown), 607/595 — same as L1",
      role: "Second front meniscus; works with L1 to gradually converge the marginal ray bundle before Component III.",
    },
    {
      id: 3,
      name: "L31",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.77,
      vd: 47.9,
      fl: 54.95,
      glass: "LaK/LaF (Lanthanum Crown/Flint), 770/479",
      cemented: "D1",
      role: "Strongest positive element in the front group; highest refractive index in the system (nd = 1.77). Lanthanum glass #1.",
    },
    {
      id: 4,
      name: "L32",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.4,
      fl: -39.25,
      glass: "LLF (Light Flint), 593/354",
      cemented: "D1",
      role: "Chromatic correction partner to L3 in cemented doublet D1; low Abbe number balances L3's positive power.",
    },
    {
      id: 5,
      name: "L41",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6483,
      vd: 33.8,
      fl: -24.7,
      glass: "F (Flint), 648/338",
      cemented: "D2",
      role: "Strongest negative element in the system; provides chromatic correction for the rear group immediately behind the stop.",
    },
    {
      id: 6,
      name: "L42",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.9,
      fl: 29.7,
      glass: "LaK (Lanthanum Crown), 717/479",
      cemented: "D2",
      role: "Strongest single positive element in the rear group; extraordinarily thick (20.5 mm). Lanthanum glass #2.",
    },
    {
      id: 7,
      name: "L51",
      label: "Element 7",
      type: "Plano-Convex",
      nd: 1.717,
      vd: 47.9,
      fl: 81.1,
      glass: "LaK (Lanthanum Crown), 717/479 — same as L6",
      role: "Principal power element of the rear group; plano-convex with flat rear contributing zero Seidel aberrations. Lanthanum glass #3.",
    },
    {
      id: 8,
      name: "L61",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.6259,
      vd: 35.6,
      fl: -248.75,
      glass: "LF (Light Flint), 626/356",
      cemented: "D3",
      role: "Very weak negative meniscus providing final chromatic fine-tuning with minimal Petzval contribution.",
    },
    {
      id: 9,
      name: "L62",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.6385,
      vd: 55.5,
      fl: 92.65,
      glass: "SK (Dense Crown), 639/555",
      cemented: "D3",
      role: "Rearmost element; achromatic corrector paired with L8 in cemented doublet D3.",
    },
  ],

  surfaces: [
    // ── Component I: L1 ──
    { label: "1", R: 83.8, d: 4.35, nd: 1.6073, elemId: 1, sd: 24.5 },
    { label: "2", R: 214.15, d: 0.3, nd: 1.0, elemId: 0, sd: 24.0 },
    // ── Component II: L2 ──
    { label: "3", R: 46.5, d: 4.25, nd: 1.6073, elemId: 2, sd: 24.0 },
    { label: "4", R: 81.9, d: 0.7, nd: 1.0, elemId: 0, sd: 22.75 },
    // ── Component III: L3 + L4 cemented (D1) ──
    { label: "5", R: 26.75, d: 9.7, nd: 1.77, elemId: 3, sd: 14.95 },
    { label: "6", R: 61.25, d: 2.05, nd: 1.5927, elemId: 4, sd: 18.5 }, // r₆ corrected from patent's 872.1
    { label: "7", R: 16.65, d: 6.3, nd: 1.0, elemId: 0, sd: 13.3 },
    // ── Aperture stop (inferred from figure, midpoint of 25.2 mm gap) ──
    { label: "STO", R: 1e15, d: 6.3, nd: 1.0, elemId: 0, sd: 13.9 },
    // ── Component IV: L5 + L6 cemented (D2) ──
    { label: "8", R: -21.3, d: 2.7, nd: 1.6483, elemId: 5, sd: 13.35 },
    { label: "9", R: 67.85, d: 10.25, nd: 1.717, elemId: 6, sd: 13.35 },
    { label: "10", R: -29.05, d: 0.3, nd: 1.0, elemId: 0, sd: 14.35 },
    // ── Component V: L7 ──
    { label: "11", R: 58.15, d: 5.5, nd: 1.717, elemId: 7, sd: 14.3 },
    { label: "12", R: 1e15, d: 0.3, nd: 1.0, elemId: 0, sd: 13.0 },
    // ── Component VI: L8 + L9 cemented (D3) ──
    { label: "13", R: 71.15, d: 1.45, nd: 1.6259, elemId: 8, sd: 12.9 },
    { label: "14", R: 48.45, d: 3.9, nd: 1.6385, elemId: 9, sd: 12.4 },
    { label: "15", R: 259.0, d: 22.79, nd: 1.0, elemId: 0, sd: 11.2 },
  ],

  asph: {},

  var: {
    "15": [22.79, 25.735],
  },
  varLabels: [["15", "BF"]],

  groups: [
    { text: "G1 (I)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (II)", fromSurface: "3", toSurface: "4" },
    { text: "G3 (III)", fromSurface: "5", toSurface: "7" },
    { text: "G4 (IV)", fromSurface: "8", toSurface: "10" },
    { text: "G5 (V)", fromSurface: "11", toSurface: "12" },
    { text: "G6 (VI)", fromSurface: "13", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.9,
  nominalFno: 1.1,
  fstopSeries: [1.1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
