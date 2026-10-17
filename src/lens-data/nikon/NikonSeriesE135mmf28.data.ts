import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON SERIES E 135mm f/2.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,303,314, Embodiment 3 / Claim 4 (Matsui, Nikon).║
 * ║  Four-component Ernostar-type compact telephoto.                   ║
 * ║  4 elements / 4 groups, all spherical, no cemented interfaces.     ║
 * ║  Focus: unit focusing; only the rear image-space gap changes.      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized to f = 100. All radii, axial  ║
 * ║    thicknesses, air gaps, BFD, and inferred semi-diameters are      ║
 * ║    scaled ×1.35 to represent the production 135 mm lens. The        ║
 * ║    resulting paraxial EFL is 135.095 mm from rounded patent data.   ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The patent locates the stop between L3 and L4 but does not       ║
 * ║    tabulate its exact axial position. The stop is inferred from     ║
 * ║    Fig. 1 and implemented by splitting d6 = 31.111 into 13.000      ║
 * ║    + 18.111 in patent-normalized units.                            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Semi-diameters are inferred from on-axis f/2.8 marginal rays,    ║
 * ║    the 52 mm production filter thread constraint, element           ║
 * ║    front/rear SD ratio ≤ 1.25, edge thickness, and cross-gap sag    ║
 * ║    clearance checks. The first element is intentionally close to    ║
 * ║    the physical front-aperture limit; wide-open off-axis diagonal   ║
 * ║    rays vignette, as expected for this compact telephoto layout.    ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS:                                                    ║
 * ║    The patent prints νd = 58.6 for L1/L2 with nd = 1.62041.         ║
 * ║    Although SK16-family catalog glass shares that nd at νd ≈ 60.3, ║
 * ║    neither the patent nor its certificate corrects the Abbe number. ║
 * ║    L1/L2 therefore preserve the patent dispersion as unresolved     ║
 * ║    620586 code-family glass rather than using SK16 Sellmeier data.  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces                                   ║
 * ║    ✓ Inferred aperture stop and variable focus BFD                 ║
 * ║    ✗ Sensor glass, filters, barrel, hood, and mount mechanics      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-series-e-135mm-f28",
  maker: "Nikon",
  name: "NIKON SERIES E 135mm f/2.8",
  subtitle: "US 4,303,314 Embodiment 3 — Sei Matsui / Nippon Kogaku",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 4 GROUPS", "f ≈ 135.1 mm", "F/2.8", "2ω = 18.1°", "ALL SPHERICAL"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 135, design: 135.095 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 4,303,314",
    patentYear: 1981,
    authors: ["Sei Matsui"],
    assignees: ["Nippon Kogaku K.K."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 58.6,
      focalLengthMm: 103.96,
      glass: "620586 — patent crown glass (nd=1.62041, νd=58.6; no catalog match verified)",
      apd: false,
      role: "Front positive meniscus; most of its power is carried by the strongly convex object-side surface.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 58.6,
      focalLengthMm: 102.34,
      glass: "620586 — patent crown glass (nd=1.62041, νd=58.6; no catalog match verified)",
      apd: false,
      role: "Second positive collector; with L1 it forms the strong front group required by patent condition I.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.52,
      focalLengthMm: -43.33,
      glass: "S-TIH1 (OHARA)",
      apd: false,
      role: "Strong negative diverger; the rear surface supplies the largest single-surface power in the system.",
      nC: 1.71033,
      nF: 1.73463,
      ng: 1.74933,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: 195.18,
      glass: "785261 — dense flint (line-index backfill; patent nd=1.78470, νd=26.1)",
      apd: false,
      role: "Weak rear positive meniscus after the stop; completes the focal length and helps balance field curvature and distortion.",
      nC: 1.77605,
      nF: 1.80615,
      ng: 1.82449,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 57.50055, d: 6.75, sd: 25.785, medium: 1 },
    { label: "2", R: 506.12715, d: 1.30005, sd: 25.515 },
    { label: "3", R: 40.5, d: 13.2003, sd: 24.57, medium: 2 },
    { label: "4", R: 97.88445, d: 2.4003, sd: 23.22 },
    { label: "5", R: 201.83445, d: 7.5006, sd: 21.6, medium: 3 },
    { label: "6", R: 26.5194, d: 17.55, sd: 20.52 },
    { label: "STO", R: "flat", d: 24.44985 },
    { label: "7", R: 95.80005, d: 2.6001, sd: 18.9, medium: 4 },
    { label: "8", R: 252.75645, sd: 18.225 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.5,
    description:
      "Unit focus. Patent gives the infinity prescription only; production-scaled BF increases from 49.110 mm at infinity to 64.118 mm at the 1.5 m MFD.",
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: { "8": { label: "BF", values: [[49.11042, 64.11762]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 7 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  /* ── Layout tuning ── */
  layout: { scFill: 0.58, yScFill: 0.54 },
} satisfies LensDataV2Input;

export default LENS_DATA;
