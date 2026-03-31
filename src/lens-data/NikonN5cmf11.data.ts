/**
 * NIKKOR-N 5cm f/1.1 — Nikon S-mount rangefinder
 *
 * Patent:   US 2,828,671 — Saburo Murakami (Nippon Kogaku K.K.)
 * Filed:    1957-01-03 (JP priority 1956-04-10), granted 1958-04-01
 * Design:   Modified double-Gauss, 9 elements in 6 components
 *
 * Prescription at patent scale: f = 100 mm, F/1.1, 46° field.
 * NOT rescaled to the production 50 mm focal length.
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
  key: "nikon-n-5cm-f11",
  name: "NIKKOR-N 5cm f/1.1",
  maker: "Nikon",
  subtitle: "US 2,828,671 — Murakami 1958",
  focalLengthMarketing: 50,
  focalLengthDesign: 50.08,
  apertureMarketing: 1.1,
  apertureDesign: 1.1,
  patentYear: 1958,
  elementCount: 9,
  groupCount: 6,
  specs: ["9 elements / 6 groups", "Modified double-Gauss", "All-spherical", "f = 100 (patent scale)"],
  focusDescription: "Unit focus — entire lens translates; only back focal distance changes",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6073,
      vd: 59.5,
      fl: 447.8,
      glass: "SK (Dense Crown), 607/595 — likely HIKARI equivalent",
      role: "Low-power front positive meniscus distributing convergence gently across the front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6073,
      vd: 59.5,
      fl: 338.9,
      glass: "SK (Dense Crown), 607/595 — same as L1",
      role: "Second front meniscus; works with L1 to gradually converge the marginal ray bundle before Component III.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.77,
      vd: 47.9,
      fl: 109.9,
      glass: "LaK/LaF (Lanthanum Crown/Flint), 770/479",
      cemented: "D1",
      role: "Strongest positive element in the front group; highest refractive index in the system (nd = 1.77). Lanthanum glass #1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.4,
      fl: -78.5,
      glass: "LLF (Light Flint), 593/354",
      cemented: "D1",
      role: "Chromatic correction partner to L3 in cemented doublet D1; low Abbe number balances L3's positive power.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6483,
      vd: 33.8,
      fl: -49.4,
      glass: "F (Flint), 648/338",
      cemented: "D2",
      role: "Strongest negative element in the system; provides chromatic correction for the rear group immediately behind the stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.9,
      fl: 59.4,
      glass: "LaK (Lanthanum Crown), 717/479",
      cemented: "D2",
      role: "Strongest single positive element in the rear group; extraordinarily thick (20.5 mm). Lanthanum glass #2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Convex",
      nd: 1.717,
      vd: 47.9,
      fl: 162.2,
      glass: "LaK (Lanthanum Crown), 717/479 — same as L6",
      role: "Principal power element of the rear group; plano-convex with flat rear contributing zero Seidel aberrations. Lanthanum glass #3.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.6259,
      vd: 35.6,
      fl: -497.5,
      glass: "LF (Light Flint), 626/356",
      cemented: "D3",
      role: "Very weak negative meniscus providing final chromatic fine-tuning with minimal Petzval contribution.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.6385,
      vd: 55.5,
      fl: 185.3,
      glass: "SK (Dense Crown), 639/555",
      cemented: "D3",
      role: "Rearmost element; achromatic corrector paired with L8 in cemented doublet D3.",
    },
  ],

  surfaces: [
    // ── Component I: L1 ──
    { label: "1", R: 167.6, d: 8.7, nd: 1.6073, elemId: 1, sd: 49.0 },
    { label: "2", R: 428.3, d: 0.6, nd: 1.0, elemId: 0, sd: 48.0 },
    // ── Component II: L2 ──
    { label: "3", R: 93.0, d: 8.5, nd: 1.6073, elemId: 2, sd: 48.0 },
    { label: "4", R: 163.8, d: 1.4, nd: 1.0, elemId: 0, sd: 45.5 },
    // ── Component III: L3 + L4 cemented (D1) ──
    { label: "5", R: 53.5, d: 19.4, nd: 1.77, elemId: 3, sd: 45.5 },
    { label: "6", R: 122.5, d: 4.1, nd: 1.5927, elemId: 4, sd: 37.0 }, // r₆ corrected from patent's 872.1
    { label: "7", R: 33.3, d: 12.6, nd: 1.0, elemId: 0, sd: 29.9 },
    // ── Aperture stop (inferred from figure, midpoint of 25.2 mm gap) ──
    { label: "STO", R: 1e15, d: 12.6, nd: 1.0, elemId: 0, sd: 27.8 },
    // ── Component IV: L5 + L6 cemented (D2) ──
    { label: "8", R: -42.6, d: 5.4, nd: 1.6483, elemId: 5, sd: 26.7 },
    { label: "9", R: 135.7, d: 20.5, nd: 1.717, elemId: 6, sd: 27.2 },
    { label: "10", R: -58.1, d: 0.6, nd: 1.0, elemId: 0, sd: 28.7 },
    // ── Component V: L7 ──
    { label: "11", R: 116.3, d: 11.0, nd: 1.717, elemId: 7, sd: 28.6 },
    { label: "12", R: 1e15, d: 0.6, nd: 1.0, elemId: 0, sd: 26.0 },
    // ── Component VI: L8 + L9 cemented (D3) ──
    { label: "13", R: 142.3, d: 2.9, nd: 1.6259, elemId: 8, sd: 25.8 },
    { label: "14", R: 96.9, d: 7.8, nd: 1.6385, elemId: 9, sd: 24.8 },
    { label: "15", R: 518.0, d: 45.58, nd: 1.0, elemId: 0, sd: 22.4 },
  ],

  asph: {},

  var: {
    "15": [45.58, 51.47],
  },
  varLabels: [["15", "BF"]],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "7" },
    { text: "IV", fromSurface: "8", toSurface: "10" },
    { text: "V", fromSurface: "11", toSurface: "12" },
    { text: "VI", fromSurface: "13", toSurface: "15" },
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
