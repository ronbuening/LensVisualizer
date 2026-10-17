import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON L35AF "PIKAICHI" 35mm f/2.8           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,457,596 Embodiment 1 (Wakamiya / Nippon        ║
 * ║  Kogaku K.K., 1984).                                              ║
 * ║  Modified Sonnar / behind-diaphragm, all-spherical.               ║
 * ║  5 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens translates) — production model;    ║
 * ║  the patent publishes infinity data only.                          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=100; all R, d, sd values scaled ×0.350007 to       ║
 * ║    production f≈35 mm (paraxial EFL 34.999 mm, BF 26.706 mm =     ║
 * ║    patent 76.3 × 0.35).                                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Rims follow the element  ║
 * ║    edge flats measured in Fig. 1, which is drawn to the scale of  ║
 * ║    Embodiment 1 (vertex spacings agree within ~0.1 mm):           ║
 * ║    L1 7.3, L2 6.25, L3 5.9, L4/L5 5.4 mm.  L2 rear (6.5) and the  ║
 * ║    L4/L5 doublet (6.0) keep their earlier estimates, within ~11 % ║
 * ║    of the figure.  L1 limits the 31.15° corner bundle.            ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent specifies "diaphragm most adjacent to the image side"   ║
 * ║    but tabulates no stop spacing.  STO placed 0.9 mm behind r9,   ║
 * ║    measured from the Fig. 1 diaphragm mark (model choice from a   ║
 * ║    figure measurement).  Production L35AF uses its programmed     ║
 * ║    leaf shutter as the iris (f/2.8–f/17).                         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-l35af-35f28",
  maker: "Nikon",
  name: "NIKON 35mm f/2.8 (Nikon L35AF)",
  subtitle: "US 4,457,596 EMBODIMENT 1 — NIPPON KOGAKU / WAKAMIYA",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "f ≈ 35.0 mm", "F/2.8", "2ω ≈ 62.3°", "ALL SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 35, design: 35.0 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 4,457,596",
    patentYear: 1984,
    authors: ["Koichi Wakamiya"],
    assignees: ["Nippon Kogaku K.K."],
  },

  /* ── Elements ──
   *  Patent gives nd/νd only; labels are catalog equivalents, supplier unspecified.
   *  L1: positive meniscus, convex to object — 713/540 (J-LAK8 / LAC8 / N-LAK8 class)
   *  L2: positive meniscus, convex to object — 773/494 (S-LAH66 class; same glass as L4)
   *  L3: biconcave negative — 689/311 (S-TIM28, exact code)
   *  L4: biconvex positive (cemented front) — 773/494 (same glass as L2)
   *  L5: negative meniscus, convex to image (cemented rear) — 620/604 (N-SK16 class)
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 54.0,
      focalLengthMm: 42.8,
      glass: "J-LAK8 (HIKARI catalog equivalent to patent 1.713/54.0; production supplier unspecified)",
      apd: false,
      role: "Front positive meniscus. Provides initial converging action; bending governed by condition (5) to balance spherical aberration against Petzval sum.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.77279,
      vd: 49.4,
      focalLengthMm: 35.2,
      glass: "S-LAH66 (OHARA catalog equivalent, nearest 773/496 row; patent 1.77279/49.4 has no exact catalog match)",
      apd: false,
      role: "Second positive meniscus. Same glass as L4; forms front positive group with L1 (f₁,₂ ≈ 19.9 mm). Bending controlled by condition (6) for field curvature.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      focalLengthMm: -12.9,
      glass: "S-TIM28 (OHARA catalog equivalent; exact 689311 coordinate match, production supplier unspecified)",
      apd: false,
      role: "Strongly negative biconcave. High-dispersion flint for chromatic correction; dispersion bounded by condition (2) to avoid chromatic coma.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.77279,
      vd: 49.4,
      focalLengthMm: 10.7,
      glass: "S-LAH66 (OHARA catalog equivalent, nearest 773/496 row; patent 1.77279/49.4 has no exact catalog match)",
      apd: false,
      role: "Front element of cemented positive doublet (f₄,₅ ≈ 20.8 mm). Bending governed by condition (8) for upper coma flare control.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.4,
      focalLengthMm: -21.4,
      glass: "N-SK16 (Schott catalog equivalent to patent 1.62041/60.4; production supplier unspecified)",
      apd: false,
      role: "Rear element of cemented doublet. Lower dispersion than L4 (condition 4: ν₄ < ν₅) corrects chromatic coma. Index ratio n₄/n₅ = 1.094 controls Petzval sum.",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ──
   *  Patent data at f=100 scaled ×0.350007 to production f≈35 mm.
   *  Sign convention: R > 0 → center of curvature to the right.
   *
   *  Diaphragm is behind all elements ("behind diaphragm lens").
   *  STO placed 0.9 mm behind r9, measured from the Fig. 1 diaphragm mark.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 11.191, d: 2.004, sd: 7.3, medium: 1 },
    { label: "2", R: 16.357, d: 0.2, sd: 7.3 },
    { label: "3", R: 13.53, d: 1.803, sd: 6.5, medium: 2 },
    { label: "4", R: 25.334, d: 0.852, sd: 6.5 },
    { label: "5", R: -92.528, d: 0.902, sd: 5.49, medium: 3 },
    { label: "6", R: 9.86, d: 1.503, sd: 5.8 },
    { label: "7", R: 29.283, d: 3.006, sd: 6.0, medium: 4 },
    { label: "8", R: -11.056, d: 0.802, sd: 6.0, medium: 5 },
    { label: "9", R: -67.351, d: 0.9, sd: 6.0 },
    // STO measured from the Fig. 1 diaphragm mark (0.9 mm behind r9); radius derived from the design f-number, f/2.8.
    { label: "STO", R: "flat" },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.8,
    description:
      "Unit focus — entire lens translates forward; calculated extension 1.69 mm at 0.8 m (patent gives infinity data only).",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Entire lens translates; only the back focal distance changes.
   *  Patent publishes infinity data only.  Close state calculated (paraxial)
   *  for a 0.8 m object-to-image distance: extension 1.688 mm.
   */
  gaps: { STO: { label: "BF", values: [[25.807, 27.495]] } },

  /* ── Aperture configuration ── */
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 17, // production programmed-shutter aperture range f/2.8–f/17
  },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (L1–L2)", fromSurface: "1", toSurface: "4" },
    { text: "REAR (L4–L5)", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
