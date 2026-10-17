import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — OLYMPUS H.ZUIKO AUTO-W 24mm f/2.8               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,994,574, Embodiment 2 (Jihei Nakagawa / Olympus).║
 * ║  Full table: PDF p. 6; repeated in claim 3 on PDF pp. 7–8.         ║
 * ║  Seven components, eight elements, all spherical.                  ║
 * ║  Focus: non-patent unit-focus model; patent supplies infinity only.║
 * ║                                                                    ║
 * ║  NOTE ON IDENTIFICATION:                                           ║
 * ║    The production lens and patent converge on 24mm, f/2.8,         ║
 * ║    8 elements / 7 groups, and approximately 84–85° coverage.       ║
 * ║    Olympus did not publish a production surface prescription, so   ║
 * ║    this file is explicitly the scaled patent Embodiment 2 rather   ║
 * ║    than a claim of exact production conformance.                   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription normalized to f = 1.0; all radii and axial  ║
 * ║    thicknesses scaled ×24. The rounded patent data compute to      ║
 * ║    EFL = 23.99995 mm. The final BFD uses the independently traced  ║
 * ║    36.74858 mm value rather than the rounded 1.5313 × 24 value.    ║
 * ║                                                                    ║
 * ║  NOTE ON STOP:                                                     ║
 * ║    The patent does not tabulate stop position. The stop is placed  ║
 * ║    at the midpoint of d8, splitting its 1.9104 mm air gap equally. ║
 * ║    The stop radius is derived from the design f-number, f/2.8,     ║
 * ║    corresponding to an 8.57141 mm paraxial entrance-pupil          ║
 * ║    diameter.                                                       ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                    ║
 * ║    Close focus is modeled by increasing the last air gap from      ║
 * ║    36.74858 to 40.04999 mm. A thick-lens conjugate solution for a  ║
 * ║    0.25 m object distance measured from the image plane gives      ║
 * ║    3.30141 mm unit extension and m = −0.13756 (|m| ≈ 1:7.27).      ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS:                                                    ║
 * ║    Patent nd/vd pairs are matched to current OHARA S-series        ║
 * ║    equivalents. The S-prefix denotes modern eco formulations and  ║
 * ║    is not proof of the exact 1970s production melt. Catalog nC,    ║
 * ║    nF, and ng values are carried for equivalent spectral tracing. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list clear apertures. SDs were inferred from    ║
 * ║    combined marginal/chief-ray envelopes, the 49 mm filter limit, ║
 * ║    and renderer geometry constraints. The relative element heights║
 * ║    were then matched to patent FIG. 2, especially the narrower     ║
 * ║    L5 doublet and the renewed flare through L6-L7. Validation keeps║
 * ║    positive edge, ray-envelope, rim-slope, and air-gap clearances. ║
 * ║    Surfaces 1-3 were raised to pass the traced chief ray to the    ║
 * ║    full-frame corner (42.95°, just past the patent's ω = 42.5°)    ║
 * ║    (2026-09-24 field-coverage audit).                              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "olympus-zuiko-auto-w-24f28",
  maker: "Olympus",
  name: "OLYMPUS H.ZUIKO AUTO-W 24mm f/2.8 (US 3,994,574 Design)",
  subtitle: "US 3,994,574 EMBODIMENT 2 — OLYMPUS / JIHEI NAKAGAWA",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 7 GROUPS",
      "f = 23.99995 mm",
      "F/2.8",
      "2ω = 85° PATENT CURVES / 84° PRODUCTION SPEC",
      "ALL SPHERICAL",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 24, design: 23.99995 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,994,574",
    patentYear: 1976,
    authors: ["Jihei Nakagawa"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus, convex to object",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: 104.6162,
      glass: "S-LAL14 (OHARA; modern equivalent of legacy 697/556 class)",
      role: "Weak positive front collector; low-dispersion member of the patent's reversed front-group chromatic pairing.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus, convex to object",
      nd: 1.6129,
      vd: 37.0,
      focalLengthMm: -24.4245,
      glass: "S-TIM3 (OHARA; modern equivalent of legacy 613/370 class)",
      role: "Strong negative front-group element, closely spaced to L1 for lateral-chromatic correction.",
      nC: 1.60806,
      nF: 1.62463,
      ng: 1.63434,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus, convex to object",
      nd: 1.6385,
      vd: 55.4,
      focalLengthMm: -30.8701,
      glass: "S-BSM18 (OHARA; modern equivalent of legacy 639/554 class)",
      role: "Secondary negative element using crown-range dispersion under the patent's third/fourth-component condition.",
      nC: 1.63505,
      nF: 1.64658,
      ng: 1.65293,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus, convex to object",
      nd: 1.8052,
      vd: 25.4,
      focalLengthMm: 26.35,
      glass: "S-TIH6 (OHARA; modern equivalent of legacy 805/254 class)",
      role: "Thick positive, high-dispersion member completing the negative-power front group.",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 5,
      name: "L5a",
      label: "Element 5a",
      type: "Biconvex Positive",
      nd: 1.7292,
      vd: 54.7,
      focalLengthMm: 27.7638,
      glass: "S-LAL18 (OHARA; modern equivalent of legacy 729/547 class)",
      role: "Positive crown member of the cemented negative doublet behind the stop; focal length is standalone in air.",
      cemented: "D1",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
    },
    {
      id: 6,
      name: "L5b",
      label: "Element 5b",
      type: "Biconcave Negative",
      nd: 1.8052,
      vd: 25.4,
      focalLengthMm: -20.0174,
      glass: "S-TIH6 (OHARA; modern equivalent of legacy 805/254 class)",
      role: "Negative dense-flint member of the cemented doublet; focal length is standalone in air.",
      cemented: "D1",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus, concave to object",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: 33.7301,
      glass: "S-LAL14 (OHARA; modern equivalent of legacy 697/556 class)",
      role: "First positive rear meniscus; supplies convergence and helps balance astigmatism and Petzval curvature.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus, concave to object",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: 43.5632,
      glass: "S-LAL14 (OHARA; modern equivalent of legacy 697/556 class)",
      role: "Final positive meniscus; completes the rear relay and establishes the long back focal distance.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 49.1616, d: 2.94, sd: 13.0, medium: 1 },
    { label: "2", R: 147.2808, d: 0.0984, sd: 12.3 },
    { label: "3", R: 23.5944, d: 0.9792, sd: 9.9, medium: 2 },
    { label: "4", R: 9.0144, d: 3.5688, sd: 7.2 },
    { label: "5", R: 51.6384, d: 0.9792, sd: 6.9, medium: 3 },
    { label: "6", R: 14.16, d: 2.3232, sd: 6.6 },
    { label: "7", R: 20.4528, d: 13.2312, sd: 7.3, medium: 4 },
    { label: "8", R: 403.9752, d: 0.9552, sd: 6.3 },
    { label: "STO", R: "flat", d: 0.9552 },
    { label: "9", R: 120.1656, d: 4.2624, sd: 5.9, medium: 5 },
    { label: "10", R: -23.9832, d: 1.6656, sd: 6.0, medium: 6 },
    { label: "11", R: 50.6712, d: 0.9792, sd: 6.0 },
    { label: "12", R: -56.772, d: 1.9608, sd: 6.3, medium: 7 },
    { label: "13", R: -16.8576, d: 0.0984, sd: 6.7 },
    { label: "14", R: -112.896, d: 1.8816, sd: 7.0, medium: 8 },
    { label: "15", R: -24.0864, sd: 7.4 },
  ],

  /* ── Focus and aperture ── */
  focus: {
    closeFocusM: 0.25,
    description:
      "Non-patent unit-focus model: the complete optical assembly translates toward the object; the patent publishes only the infinity prescription.",
  },

  /* (moved from var) ── Variable air spacing (unit-focus model) ── */
  gaps: { "15": { label: "BF", values: [[36.748579, 40.049986]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT NEGATIVE GROUP", fromSurface: "1", toSurface: "8" },
    { text: "REAR POSITIVE GROUP", fromSurface: "9", toSurface: "15" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  layout: { scFill: 0.56, yScFill: 0.46 },

  /* ── Layout tuning ── */
  rays: { offAxisFieldFrac: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
