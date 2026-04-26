/**
 * Nikon Ai Nikkor 135mm f/2
 *
 * Patent:      US 4,062,630 · Sei Matsui · Nippon Kogaku K.K. · 1977
 * Embodiment:  Example V (Claim 8)
 * Type:        Tele-Sonnar / Ernostar variant — 6 elements in 4 groups
 * Production:  NEW Nikkor 135mm f/2 (1976) → Ai Nikkor 135mm f/2 (1977) → Ai-S Nikkor 135mm f/2 (1981)
 *
 * Prescription is at patent scale (f = 100 mm). The production lens is
 * uniformly scaled by ×1.35 to f = 135 mm. All R, d, sd values below
 * are at patent scale.
 *
 * Focusing:    Unit focus (entire optical assembly translates).
 *              Only the back focal distance changes.
 * Stop:        Between Groups II and III (d₅ gap, 2.59 mm).
 *              Patent does not specify; inferred from Fig. 1 iris placement.
 *              Split as 2.09 mm (r₅ → STO) + 0.50 mm (STO → r₆).
 *
 * Glass IDs are inferential from nd/νd catalog matching; see analysis.
 */

import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "nikon-ai-nikkor-135f2",
  name: "NIKON AI Nikkor 135mm f/2",
  maker: "Nikon",
  subtitle: "US 4,062,630 · Example V",
  specs: [
    "6 elements / 4 groups",
    "Ai Nikkor 135mm f/2 (1977–2005)",
    "f = 100 mm patent (×1.35 → 135 mm production)",
    "Tele-Sonnar / Ernostar variant",
  ],

  focalLengthMarketing: 135,
  focalLengthDesign: 100,
  apertureMarketing: 2,
  apertureDesign: 2,
  patentYear: 1977,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 48.1,
      fl: 98.1,
      glass: "HOYA NBFD3 (717/481)",
      role: "Front positive meniscus — primary converging element, bears full EP diameter",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62606,
      vd: 39.1,
      fl: -94.9,
      glass: "HOYA FD60 (626/391)",
      cemented: "D1",
      role: "Flint component of achromatic doublet (Group II); Δν = 22.1 vs L3",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.2,
      fl: 42.1,
      glass: "OHARA S-BAL35 / HOYA BACD5 (589/612)",
      cemented: "D1",
      role: "Crown component of achromatic doublet (Group II); strongest positive element in system",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.74,
      vd: 28.2,
      fl: 47.0,
      glass: "HOYA FD110 (740/282)",
      cemented: "D2",
      role: "Dense flint positive in monochromatic correction doublet (Group III); near-isochromatic with L5",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      fl: -19.0,
      glass: "HOYA E-FD1 / Schott SF1 (717/295)",
      cemented: "D2",
      role: "Dense flint negative in monochromatic correction doublet; g-line spherical aberration corrector",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: 98.2,
      glass: "HOYA E-FD1 / Schott SF1 (717/295)",
      role: "Rear positive element — field curvature and astigmatism control; same glass as L5",
    },
  ],

  surfaces: [
    // ── Group I: L1 ──
    { label: "1", R: 58.015, d: 8.22, nd: 1.717, elemId: 1, sd: 25.9 },
    { label: "2", R: 311.111, d: 0.37, nd: 1.0, elemId: 0, sd: 25.0 },

    // ── Group II: L2 + L3 cemented doublet (D1) ──
    { label: "3", R: 38.148, d: 2.74, nd: 1.62606, elemId: 2, sd: 25.0 },
    { label: "4", R: 22.593, d: 13.26, nd: 1.58913, elemId: 3, sd: 20.3 },
    { label: "5", R: 200.0, d: 2.09, nd: 1.0, elemId: 0, sd: 18.7 },

    // ── Aperture stop (STO position inferred from Fig. 1 iris placement) ──
    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 16.2 },

    // ── Group III: L4 + L5 cemented doublet (D2) ──
    { label: "6", R: 1e15, d: 8.89, nd: 1.74, elemId: 4, sd: 17.2 },
    { label: "7", R: -34.815, d: 1.19, nd: 1.71736, elemId: 5, sd: 14.1 },
    { label: "8", R: 22.797, d: 25.11, nd: 1.0, elemId: 0, sd: 13.7 },

    // ── Group IV: L6 ──
    { label: "9", R: 63.661, d: 8.89, nd: 1.71736, elemId: 6, sd: 9.3 },
    { label: "10", R: 624.694, d: 29.22, nd: 1.0, elemId: 0, sd: 8.8 },
  ],

  asph: {},

  var: {
    "10": [29.22, 42.62],
  },
  varLabels: [["10", "BF"]],
  focusDescription: "Unit focusing — entire optical assembly translates forward; only BFD changes",

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1.3,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 32,

  scFill: 0.55,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
