import type { LensDataInput } from "../../types/optics.js";

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
  key: "nikon-series-e-135mm-f28",
  maker: "Nikon",
  name: "NIKON SERIES E 135mm f/2.8",
  subtitle: "US 4,303,314 Embodiment 3 — Sei Matsui / Nippon Kogaku",
  specs: ["4 ELEMENTS / 4 GROUPS", "f ≈ 135.1 mm", "F/2.8", "2ω = 18.1°", "ALL SPHERICAL"],

  focalLengthMarketing: 135,
  focalLengthDesign: 135.095,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,303,314",
  patentAuthors: ["Sei Matsui"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1981,
  elementCount: 4,
  groupCount: 4,
  apertureBlades: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 58.6,
      fl: 103.96,
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
      fl: 102.34,
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
      fl: -43.33,
      glass: "S-TIH1 (OHARA)",
      apd: false,
      nC: 1.71033,
      nF: 1.73463,
      ng: 1.74933,
      role: "Strong negative diverger; the rear surface supplies the largest single-surface power in the system.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.1,
      fl: 195.18,
      glass: "785261 — dense flint (line-index backfill; patent nd=1.78470, νd=26.1)",
      apd: false,
      nC: 1.77605,
      nF: 1.80615,
      ng: 1.82449,
      role: "Weak rear positive meniscus after the stop; completes the focal length and helps balance field curvature and distortion.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 57.50055, d: 6.75, nd: 1.62041, elemId: 1, sd: 25.785 },
    { label: "2", R: 506.12715, d: 1.30005, nd: 1.0, elemId: 0, sd: 25.515 },
    { label: "3", R: 40.5, d: 13.2003, nd: 1.62041, elemId: 2, sd: 24.57 },
    { label: "4", R: 97.88445, d: 2.4003, nd: 1.0, elemId: 0, sd: 23.22 },
    { label: "5", R: 201.83445, d: 7.5006, nd: 1.71736, elemId: 3, sd: 21.6 },
    { label: "6", R: 26.5194, d: 17.55, nd: 1.0, elemId: 0, sd: 20.52 },
    { label: "STO", R: 1e15, d: 24.44985, nd: 1.0, elemId: 0, sd: 12.285 },
    { label: "7", R: 95.80005, d: 2.6001, nd: 1.7847, elemId: 4, sd: 18.9 },
    { label: "8", R: 252.75645, d: 49.11042, nd: 1.0, elemId: 0, sd: 18.225 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings ── */
  var: {
    "8": [49.11042, 64.11762],
  },

  varLabels: [["8", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "8" },
  ],

  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 1.5,
  focusDescription:
    "Unit focus. Patent gives the infinity prescription only; production-scaled BF increases from 49.110 mm at infinity to 64.118 mm at the 1.5 m MFD.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  /* ── Layout tuning ── */
  scFill: 0.58,
  yScFill: 0.54,
} satisfies LensDataInput;

export default LENS_DATA;
