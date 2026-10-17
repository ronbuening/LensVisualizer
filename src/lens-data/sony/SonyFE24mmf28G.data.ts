import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY FE 24mm f/2.8 G                                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2022-030896 A, Example 1 (Tamron / Sony).          ║
 * ║  Compact full-frame wide-angle prime with positive-positive-negative║
 * ║  group power distribution and inner focus by G2 translation.        ║
 * ║                                                                    ║
 * ║  Patent prescription: 8 lens elements / 7 air-separated groups.     ║
 * ║  Data representation: resin layers in the two hybrid aspheres are   ║
 * ║  explicit optical elements, so the `elements` array has 10 entries  ║
 * ║  while `elementCount` remains the patent/production count of 8.     ║
 * ║                                                                    ║
 * ║  Focus: G2 translates 1.542 mm toward the object from infinity to   ║
 * ║  0.18 m. Patent Table 3 labels the changing gaps as D(5)/D(7), but ║
 * ║  the surface table identifies them as D(11)/D(16).                 ║
 * ║                                                                    ║
 * ║  Note on cover glass: patent Table 1 surfaces 19-20 (cover glass   ║
 * ║  CG, 2.500 mm, nd 1.51680, νd 64.20) and the 1.000 mm air gap to   ║
 * ║  IMG are modeled in `rearPlates` (traced, not drawn). Surface 18   ║
 * ║  keeps the patent's 18.907 mm gap; air-equivalent BF = 21.555 mm.  ║
 * ║                                                                    ║
 * ║  Note on semi-diameters: clear apertures are patent-listed H values.║
 * ║  The stop radius is derived from f/2.8; patent Fno = 2.884.         ║
 * ║  The patent H = 5.769 mm is treated as the local                    ║
 * ║  clear/effective radius rather than the aperture stop diameter      ║
 * ║  used for entrance-pupil sizing.                                    ║
 * ║                                                                    ║
 * ║  Note on partial dispersion: the patent prints only ΔPgF, the      ║
 * ║  deviation from its own line through glasses C7 (PgF 0.5393,       ║
 * ║  νd 60.49) and F2 (PgF 0.5829, νd 36.30), i.e. ΔPgF = PgF −        ║
 * ║  0.648327 + 0.0018024·νd. `dPgF` is the implied PgF minus the      ║
 * ║  engine normal line (0.6438 − 0.001682·νd), not the patent ΔPgF,   ║
 * ║  which the analysis quotes: L5 +0.0374 → +0.032101, L7 +0.0369 →   ║
 * ║  +0.031607.                                                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the optical design. Filters,  ║
 * ║  motors, aperture blades, barrel, and mount mechanics are not      ║
 * ║  modeled; the cover glass is carried in `rearPlates`.              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-fe-24-f28-g",
  maker: "Sony",
  name: "SONY FE 24mm f/2.8 G",
  subtitle: "JP 2022-030896 A Example 1 — Tamron / Sony",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 7 GROUPS",
      "Patent f = 24.710 mm",
      "F/2.8 marketed; F/2.884 design",
      "2ω = 84.98° patent",
      "4 ASPHERICAL SURFACES",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 24, design: 24.709 },
    fNumber: { marketing: 2.8, design: 2.884 },
  },

  source: {
    patentNumber: "JP 2022-030896 A",
    patentYear: 2022,
    authors: ["Junichi Yamazoe", "Ryohei Tazaki"],
    assignees: ["Tamron Co., Ltd.", "Sony Group Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: -36.45,
      glass: "FC5 (HOYA, 487/704 code)",
      role: "Front negative meniscus of G1a; low-dispersion negative power for wide-angle beam spreading.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 glass body",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: -33.11,
      glass: "FC5 (HOYA, 487/704 code)",
      role: "Glass body of the first hybrid composite; provides the dominant negative power in G1a.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L2r",
      label: "Element 2 resin layer",
      type: "Aspherical Resin Layer",
      nd: 1.5361,
      vd: 41.21,
      focalLengthMm: 134.44,
      glass: "Proprietary optical resin (patent nd=1.53610, vd=41.21)",
      role: "Thin rear aspherical resin layer bonded to L2.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: 21.68,
      glass: "S-LAH55VS (OHARA) class",
      role: "Strong positive collecting element at the front of G1b.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.71,
      focalLengthMm: -21.65,
      glass: "S-NBH8 (OHARA) / KZFS-family short-flint class",
      role: "High-dispersion negative partner in the G1b cemented chromatic-correction doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 15.19,
      glass: "FCD1 (HOYA) / S-FPL51 (OHARA) class",
      apd: "patent",
      apdNote:
        "Patent ΔPgF = +0.0374 by the patent's line through C7 and F2 (PgF − 0.648327 + 0.0018024·νd), implying PgF = 0.5386; runtime dPgF +0.03210. Positive Lp used in conditional expression (4).",
      role: "Fluorophosphate ED positive element in the primary G1b achromatizing doublet.",
      cemented: "D1",
      dPgF: 0.032101,
    },
    {
      id: 7,
      name: "L6r",
      label: "Element 6 resin layer",
      type: "Aspherical Resin Layer",
      nd: 1.5361,
      vd: 41.21,
      focalLengthMm: -5448.67,
      glass: "Proprietary optical resin (patent nd=1.53610, vd=41.21)",
      role: "Thin front aspherical resin layer bonded to L6; nearly zero standalone power.",
      cemented: "H2",
    },
    {
      id: 8,
      name: "L6",
      label: "Element 6 glass body",
      type: "Negative Meniscus",
      nd: 1.54814,
      vd: 45.82,
      focalLengthMm: -69.15,
      glass: "S-TIL1 (OHARA) / LLF1 class",
      role: "Weak negative meniscus body in the moving G2 focus group.",
      cemented: "H2",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.4971,
      vd: 81.56,
      focalLengthMm: 25.4,
      glass: "FCD1B (HOYA) / S-FPL51 (OHARA) class",
      apd: "patent",
      apdNote:
        "Patent ΔPgF = +0.0369 by the patent's line through C7 and F2 (PgF − 0.648327 + 0.0018024·νd), implying PgF = 0.5382; runtime dPgF +0.03161.",
      role: "Positive ED meniscus and principal powered element of the moving G2 focus group.",
      dPgF: 0.031607,
    },
    {
      id: 10,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -25.62,
      glass: "S-TIL2 (OHARA) / FEL2 class",
      role: "Single negative rear group element; field-flattening and compacting rear negative group.",
    },
  ],

  surfaces: [
    { label: "1", R: 27.692, d: 0.9, sd: 8.93, medium: 1 },
    { label: "2", R: 10.708, d: 6.301, sd: 7.32 },
    { label: "3", R: -29.255, d: 0.7, sd: 5.64, medium: 2 },
    { label: "4", R: 36.278, d: 0.2, sd: 5.42, medium: 3 },
    { label: "5A", R: 72.902, d: 2.215, sd: 5.41, asphere: { K: 0, A4: 1.6217e-4, A6: 5.4176e-7, A8: 1.8017e-8, A10: 0, A12: 0, A14: 0 } },
    // Patent Table 1 [表1] prints H = 5.769 mm (effective radius) at the stop, surface 6 S.
    { label: "STO", R: "flat", d: 2.477 },
    { label: "7", R: 46.922, d: 2.834, sd: 6.76, medium: 4 },
    { label: "8", R: -28.663, d: 0.5, sd: 6.91 },
    { label: "9", R: 559.336, d: 0.8, sd: 6.89, medium: 5 },
    { label: "10", R: 15.165, d: 5.872, sd: 6.85, medium: 6 },
    { label: "11", R: -13.1, sd: 6.99 },
    {
      label: "12A",
      R: -11.559,
      d: 0.2,
      sd: 6.51,
      medium: 7,
      asphere: { K: 0, A4: 7.7335e-5, A6: -8.1694e-7, A8: 3.8172e-9, A10: 0, A12: 0, A14: 0 },
    },
    { label: "13", R: -11.675, d: 0.7, sd: 6.53, medium: 8 },
    { label: "14", R: -17.23, d: 2.222, sd: 6.8 },
    {
      label: "15A",
      R: -399.343,
      d: 4.468,
      sd: 7.94,
      medium: 9,
      asphere: { K: 0, A4: -1.201e-4, A6: 6.1727e-7, A8: -2.739e-9, A10: 0, A12: 0, A14: 0 },
    },
    { label: "16A", R: -12.285, sd: 8.47, asphere: { K: 0, A4: 3.8253e-5, A6: -3.5929e-9, A8: 1.6953e-9, A10: 0, A12: 0, A14: 0 } },
    { label: "17", R: -20.578, d: 1.0, sd: 8.8, medium: 10 },
    { label: "18", R: 43.11, d: 18.907, sd: 9.64 },
  ],

  focus: {
    closeFocusM: 0.18,
    description:
      "Inner focus: G2 translates 1.542 mm toward the object from infinity to 0.18 m; G1 and G3 remain fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "11": { label: "D(11)", values: [[4.52, 2.978]] }, "16A": { label: "D(16)", values: [[2.535, 4.077]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Cover glass CG (patent Table 1 surfaces 19–20): traced, not drawn ── */
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "JP 2022-030896 A, Example 1 Table 1 surfaces 19–20",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2 / IF", fromSurface: "12A", toSurface: "16A" },
    { text: "G3", fromSurface: "17", toSurface: "18" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "H2", fromSurface: "12A", toSurface: "14" },
  ],

  layout: { yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
