import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║        ZEISS ZX1 Distagon T* 35mm f/2                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2018/0180842 A1, Example 1 (Pretorius / Carl Zeiss AG).   ║
 * ║  Compact full-frame fixed-lens-camera Distagon with dual floating inner    ║
 * ║  focus, a fixed front compound lens, and a fixed rear bi-aspheric element. ║
 * ║  8 elements / 5 air-spaced groups, 4 aspherical surfaces.                  ║
 * ║                                                                            ║
 * ║  NOTE ON FILTER STACK:                                                     ║
 * ║    Patent Table 1 surfaces AF17-AF20 are two flat BK7 (Schott) plates      ║
 * ║    that ¶0064 excludes from the camera lens but uses in the design. They   ║
 * ║    are modeled in `rearPlates` (traced, not drawn): 1.20 mm + 0.50 mm air  ║
 * ║    + 0.80 mm + 2.00 mm to IMG. Surface AF16 keeps the patent's 0.50 mm     ║
 * ║    gap to the first plate. The patent names the glass without nd/vd;       ║
 * ║    N-BK7 catalog values (1.51680 / 64.17) are used, as for the elements.   ║
 * ║                                                                            ║
 * ║  NOTE ON GLASS DATA:                                                       ║
 * ║    The patent table names OHARA glass types but omits nd/vd columns.       ║
 * ║    Values below use OHARA catalog data matched to the patent trade names.  ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                   ║
 * ║    Non-stop semi-diameters are patent-listed Table 1 values; the stop      ║
 * ║    radius is derived from the design f-number.                             ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-zx1-distagon-35mm-f2",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS DISTAGON T* 35mm f/2 (Zeiss ZX1)",
  subtitle: "US 2018/0180842 A1 Example 1 — Pretorius / Carl Zeiss AG",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: ["8 elements / 5 groups", "f = 35.000 mm", "F/2.0", "2ω ≈ 63.5°", "4 aspherical surfaces"],
    elementCount: 8,
    groupCount: 5,
    focalLengthMm: { marketing: 35, design: 35.00036 },
    fNumber: { marketing: 2, design: 1.97642 },
  },

  source: {
    patentNumber: "US 2018/0180842 A1",
    patentYear: 2018,
    authors: ["Marco Pretorius"],
    assignees: ["Carl Zeiss AG"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.42,
      focalLengthMm: -15.46,
      glass: "S-TIH6 (OHARA)",
      role: "Front negative element of subgroup 11; entrance-pupil placement and front chromatic correction.",
      cemented: "D1",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 46.02,
      focalLengthMm: 19.95,
      glass: "S-LAM61 (OHARA)",
      role: "Positive partner in the weakly negative front doublet; corrects L1 chromatic power while preserving the near-front entrance pupil.",
      cemented: "D1",
      nC: 1.71533,
      nF: 1.73097,
      ng: 1.73979,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: 24.08,
      glass: "S-NPH1 (OHARA)",
      role: "High-index positive singlet of subgroup 12; supplies most of the first compound lens convergence.",
      nC: 1.79801,
      nF: 1.83351,
      ng: 1.8559,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.52,
      focalLengthMm: -13.8,
      glass: "S-TIH1 (OHARA)",
      role: "Negative front element of movable subgroup 21; forms the principal diverging focus doublet.",
      cemented: "D2",
      nC: 1.71033,
      nF: 1.73463,
      ng: 1.74933,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.59522,
      vd: 67.74,
      focalLengthMm: 25.24,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog anomalous partial dispersion, Δθg,F ≈ +0.0123.",
      role: "Low-dispersion/APD positive partner to L4 in the negative movable focus doublet.",
      cemented: "D2",
      dPgF: 0.0123,
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.62,
      focalLengthMm: 52.83,
      glass: "S-LAH59 (OHARA)",
      role: "Object-side positive element of movable subgroup 22; adds convergence before the rear molded asphere pair.",
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Bi-Aspheric Positive",
      nd: 1.59522,
      vd: 67.74,
      focalLengthMm: 41.93,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog anomalous partial dispersion, Δθg,F ≈ +0.0123.",
      role: "Bi-aspheric low-dispersion/APD positive image-side element of movable subgroup 22; contributes exit-pupil control and field correction.",
      dPgF: 0.0123,
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Bi-Aspheric Negative Meniscus",
      nd: 1.73077,
      vd: 40.51,
      focalLengthMm: -23.28,
      glass: "L-LAM69 (OHARA)",
      role: "Fixed rear bi-aspheric negative corrector; sets the exit-pupil position before the sensor filter stack.",
      nC: 1.72542,
      nF: 1.74346,
      ng: 1.75379,
    },
  ],

  surfaces: [
    { label: "1", R: -23.3193, d: 1.6, sd: 8.55, medium: 1 },
    { label: "2", R: 27.53319, d: 5.5, sd: 9.38782, medium: 2 },
    { label: "3", R: -27.53319, d: 0.2, sd: 9.80123 },
    { label: "4", R: 24.9203, d: 4.4, sd: 10.12667, medium: 3 },
    { label: "5", R: -81.82505, d: 1.3, sd: 9.87401 },
    // US 2018/0180842 A1 Table 1, Aperture row prints semi-diameter 9.10000 mm.
    // Radius derived from the design f-number.
    { label: "STO", R: "flat" },
    { label: "6", R: -32.17761, d: 1.1, sd: 7.65, medium: 4 },
    { label: "7", R: 14.49702, d: 4.1, sd: 7.88802, medium: 5 },
    { label: "8", R: 370.02251, sd: 8.1 },
    { label: "9", R: 44.10411, d: 3.0, sd: 11.73325, medium: 6 },
    { label: "10", R: -1857.77292, d: 8.71275, sd: 11.94034 },
    {
      label: "11A",
      R: "flat",
      d: 5.4,
      sd: 13.80054,
      medium: 7,
      asphere: { K: 0, A4: -4.8992092861e-5, A6: 6.1949699715e-10, A8: -1.2500220906e-9, A10: 5.6567321954e-12 },
    },
    {
      label: "12A",
      R: -24.95694,
      sd: 14.53752,
      asphere: { K: 0, A4: -1.066253035e-5, A6: -9.6382651819e-9, A8: -6.8821065476e-10, A10: 3.3476497962e-12 },
    },
    {
      label: "13A",
      R: -17.01007,
      d: 2.5,
      sd: 14.96886,
      medium: 8,
      asphere: { K: 0, A4: 1.0710823842e-5, A6: 3.2153423282e-8, A8: 3.3940082833e-10, A10: -7.052430311e-13 },
    },
    // Last surface AF16: patent gap to the first filter plate (AF17)
    {
      label: "14A",
      R: "flat",
      d: 0.5,
      sd: 18.4762,
      asphere: { K: 0, A4: -3.5706165113e-5, A6: -9.4676861855e-9, A8: 1.2368357029e-10, A10: -2.3643105236e-13 },
    },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "Dual floating inner focus: subgroups 21 and 22 move independently behind the fixed stop while the first compound lens and rear bi-asphere remain fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    STO: { label: "AF7", values: [[4.8048, 4.12952]] },
    "8": { label: "AF10", values: [[4.26298, 0.8]] },
    "12A": { label: "AF14", values: [[5.11947, 9.25773]] },
  },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Filter plates 60 (patent Table 1 AF17-AF20): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.2,
      nd: 1.5168,
      vd: 64.17,
      glass: "N-BK7 (Schott)",
      gapAfterMm: 0.5,
      sd: 20.465,
      source: "US 2018/0180842 A1, Example 1 Table 1 surfaces AF17-AF18 (BK7_Schott)",
    },
    {
      thicknessMm: 0.8,
      nd: 1.5168,
      vd: 64.17,
      glass: "N-BK7 (Schott)",
      gapAfterMm: 2.0,
      sd: 20.86325,
      source: "US 2018/0180842 A1, Example 1 Table 1 surfaces AF19-AF20 (BK7_Schott)",
    },
  ],

  groups: [
    { text: "G1 / 11", fromSurface: "1", toSurface: "3" },
    { text: "G2 / 12", fromSurface: "4", toSurface: "5" },
    { text: "G3 / 21", fromSurface: "6", toSurface: "8" },
    { text: "G4 / 22", fromSurface: "9", toSurface: "12A" },
    { text: "G5 / 30", fromSurface: "13A", toSurface: "14A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.78 },
} satisfies LensDataV2Input;

export default LENS_DATA;
