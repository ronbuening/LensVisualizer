import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS OLYMPIA-SONNAR 180mm f/2.8       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 1,268,404 Example 2 (Konschack & Lange, Zeiss).  ║
 * ║  Four-element, four-group telephoto Sonnar for Contarex SLR.      ║
 * ║  4 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens translates).                      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent data normalised to f = 1.  All R, d, and sd values      ║
 * ║    scaled ×180 to match the 180 mm production focal length.       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal-ray trace at f/2.8 with ~8–10%         ║
 * ║    mechanical clearance. Front element constrained by 67 mm       ║
 * ║    filter thread (~33 mm max SD). Significant natural vignetting  ║
 * ║    at the field corners is expected for this fast telephoto.       ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: Table II / claim 2 values match at uniform scale ×180.
 * Printed Schnittweite 0.4126 becomes 74.268 mm, while paraxial BFL is
 * 74.367782 mm (offset +0.099782); EFL is 180.055230 versus nominal 180.
 * No plate or transcription error found. The patent does not establish a
 * designer best-focus convention; retain its printed image distance.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "zeiss-olympia-sonnar-180f28-contarex",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS OLYMPIA-SONNAR 180mm f/2.8",
  subtitle: "DE 1,268,404 EXAMPLE 2 — KONSCHACK & LANGE / CARL ZEISS",

  catalog: {
    lensMounts: ["zeiss-contarex"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 4 GROUPS", "f ≈ 180.1 mm", "F/2.8", "2ω ≈ 13.7°", "ALL SPHERICAL"],
    elementCount: 4,
    groupCount: 4,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 180, design: 180.1 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "DE 1,268,404",
    patentYear: 1968,
    authors: ["Erwin Konschack", "Günther Lange"],
    assignees: ["Carl-Zeiss-Stiftung"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      focalLengthMm: 125.8,
      glass: "SK16 (Schott)",
      apd: false,
      role: "Front positive — near-plano-convex form (r2 ≈ flat); convex face toward subject minimises spherical aberration",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      focalLengthMm: 174.0,
      glass: "SK16 (Schott)",
      apd: false,
      role: "Second positive meniscus — adds converging power to front group; concave side faces rear",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: -52.2,
      glass: "SF56A / SF11 (Schott, 785261)",
      apd: false,
      role: "Strong negative diverger — provides telephoto compression, primary chromatic correction, and Petzval flattening",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.53,
      focalLengthMm: 151.5,
      glass: "SF4 (Schott)",
      apd: false,
      role: "Rear positive in dense flint glass — unconventional choice for Gauss error (secondary spectrum) control",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 76.014, d: 15.732, sd: 33.0, medium: 1 }, // L1 front
    { label: "2", R: 2658.366, d: 0.054, sd: 31.0 }, // L1 rear → air
    { label: "3", R: 60.381, d: 10.872, sd: 30.5, medium: 2 }, // L2 front
    { label: "4", R: 127.611, d: 14.904, sd: 27.0 }, // L2 rear → air
    { label: "5", R: "flat", d: 5.814, sd: 20.5, medium: 3 }, // L3 front (flat)
    { label: "6", R: 40.9392, d: 17.0, sd: 19.0 }, // L3 rear → air
    { label: "STO", R: "flat", d: 31.33 }, // Aperture stop — position inferred from Fig. 2
    { label: "7", R: 344.448, d: 4.932, sd: 15.0, medium: 4 }, // L4 front
    { label: "8", R: -170.1828, sd: 14.5 }, // L4 rear → image (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.8,
    description: "Unit focus — entire four-element assembly translates forward via quick-focusing helicoid.",
  },

  /* (moved from var) ── Variable air spacings (unit focus — BFD only) ── */
  gaps: { "8": { label: "BF", values: [[74.268, 96.67]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT GROUP", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
