import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 716,035, sole symmetric example, normalized f=100 interpreted as mm.
 * The drawing explicitly identifies d3=8.1 as air and d4=1.6 as central glass.
 * Source nD is used as an approximate modern nd; Abbe numbers are estimates.
 * Semi-diameters and the 1.6-unit stop offset are inferred from the drawing
 * with ray/edge feasibility allowances. The patent gives no focus schedule.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "heliar-symmetric-1902",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER HELIAR (Symmetric) f/4",
  subtitle: "US 716,035 — Harting / Voigtländer & Sohn AG (1902)",
  visible: true,

  catalog: {
    lensMounts: ["large-format-lens-board"],
    specs: ["5 ELEMENTS / 3 GROUPS", "f = 100 (normalized)", "F/4.0", "2ω ≈ 43.6°", "ALL SPHERICAL"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { marketing: 100, design: 100.0 },
    fNumber: { marketing: 4.0, design: 4.0 },
  },

  source: {
    patentNumber: "US 716,035",
    patentYear: 1902,
    authors: ["Carl August Hans Harting"],
    assignees: ["Voigtländer & Sohn AG"],
  },

  /* ── Elements ──
   *  Five elements: front cemented doublet (a + b), central biconcave (c),
   *  rear cemented doublet (b′ + a′). Symmetric optical layout, with
   *  the aperture stop just behind the central element.
   *  Only two glass types used: Glass I (nD=1.5638) and Glass II (nD=1.6080); supplier unspecified.
   */
  elements: [
    {
      id: 1,
      name: "La",
      label: "Element a (front)",
      type: "Negative Meniscus",
      nd: 1.5638,
      vd: 42.0,
      focalLengthMm: -122.9,
      glass: "Unmatched Glass I (patent nD; estimated Abbe 42; supplier unspecified)",
      apd: false,
      role: "Dispersive (flint) component of front achromatic doublet. Weak negative power; meniscus shape contributes to field flattening.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "Lb",
      label: "Element b (front)",
      type: "Biconvex Positive",
      nd: 1.608,
      vd: 57.0,
      focalLengthMm: 40.6,
      glass: "Unmatched Glass II (patent nD; estimated Abbe 57; supplier unspecified)",
      apd: false,
      role: "Primary positive power-contributor. The higher-index, lower-dispersion medium pairs with element a; the glass-air rear surface also contributes positive power.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "Lc",
      label: "Element c (central)",
      type: "Biconcave Negative",
      nd: 1.5638,
      vd: 42.0,
      focalLengthMm: -39.7,
      glass: "Unmatched Glass I (patent nD; estimated Abbe 42; supplier unspecified)",
      apd: false,
      role: "Central negative element (Cooke Triplet inheritance). Controls Petzval sum, spherical aberration balance, and power leverage. Its dispersive negative power also contributes to the system chromatic balance.",
    },
    {
      id: 4,
      name: "Lb'",
      label: "Element b′ (rear)",
      type: "Biconvex Positive",
      nd: 1.608,
      vd: 57.0,
      focalLengthMm: 40.6,
      glass: "Unmatched Glass II (patent nD; estimated Abbe 57; supplier unspecified)",
      apd: false,
      role: "Mirror image of element b. Primary positive power in rear group.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "La'",
      label: "Element a′ (rear)",
      type: "Negative Meniscus",
      nd: 1.5638,
      vd: 42.0,
      focalLengthMm: -122.9,
      glass: "Unmatched Glass I (patent nD; estimated Abbe 42; supplier unspecified)",
      apd: false,
      role: "Mirror image of element a. Dispersive component of rear achromatic doublet.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ──
   *  Symmetric optical design: rear surfaces mirror the front surfaces.
   *  The patent places the shutter directly behind the central lens; it
   *  is rendered here 1.6 units behind S5 within the 8.1-unit rear air gap.
   *  Patent sign convention matches the standard (R > 0 → CoC to the right).
   *
   *  Cemented doublet patterns:
   *    Front (D1): S1 = a front (elemId: 1), S2 = a|b junction (elemId: 2), S3 = b rear (elemId: 0)
   *    Rear (D2):  S6 = b′ front (elemId: 4), S7 = b′|a′ junction (elemId: 5), S8 = a′ rear (elemId: 0)
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  All-spherical design — no aspherical surfaces.
   */
  surfaces: [
    /* ── Front cemented doublet (D1: a + b) ── */
    { label: "1", R: 41.0, d: 1.6, sd: 13.5, medium: 1 }, // a front
    { label: "2", R: 25.76, d: 3.6, sd: 12.5, medium: 2 }, // a|b cement junction
    { label: "3", R: -583.8, d: 8.1, sd: 12.5 }, // b rear → air

    /* ── Central biconcave (c) ── */
    { label: "4", R: -44.76, d: 1.6, sd: 11.5, medium: 3 }, // c front
    { label: "5", R: 44.76, d: 1.6, sd: 11.5 }, // c rear → stop

    /* ── Aperture stop ── */
    { label: "STO", R: "flat", d: 6.5 }, // stop → rear doublet

    /* ── Rear cemented doublet (D2: b′ + a′) ── */
    { label: "6", R: 583.8, d: 3.6, sd: 12.5, medium: 4 }, // b′ front
    { label: "7", R: -25.76, d: 1.6, sd: 12.5, medium: 5 }, // b′|a′ cement junction
    { label: "8", R: -41.0, sd: 13.5 }, // a′ rear → air (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Inferred unit focus — all groups and the stop move together by 12.72 mm. The modeled 1.0 m endpoint is object-to-image distance at 100 mm scale; no focus schedule is published. Intermediate distance labels are approximate.",
  },

  /* (moved from var) ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire lens moves as a rigid body. Only the back focal
   *  distance (surface 8 → image plane) changes.
   *  Inferred close focus is solved by paraxial propagation at 1.0 m
   *  object-to-image distance, including the 28.2 mm optical assembly.
   *  The patent itself specifies neither close focus nor travel.
   */
  gaps: { "8": { label: "BF (modeled)", values: [[85.52, 98.23772450719136]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.0, fStops: [4, 4.5, 5.6, 8, 11, 16, 22, 32] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FRONT)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (CENTER)", fromSurface: "4", toSurface: "5" },
    { text: "G3 (REAR)", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
