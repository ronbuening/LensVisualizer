import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS TESSAR 50mm f/3.5                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: Swiss Patent CH 314381 Example 1 (Carl Zeiss,        ║
 * ║  Heidenheim a.d. Brenz / Lange & Richter, priority 1952).         ║
 * ║  Classic Tessar four-element / three-group design.                 ║
 * ║  4 elements / 3 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire lens translates).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription at f ≈ 100 mm; all R, d, and sd values     ║
 * ║    scaled ×0.500005 to f = 50 mm production (Contax IIa/IIIa).   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  SDs estimated from       ║
 * ║    combined marginal + chief ray trace at 60% of the half-field   ║
 * ║    (±14.4°), plus 5% mechanical clearance.  Front element SD      ║
 * ║    constrained by edge-thickness minimum (≥ 0.5 mm).  The stop    ║
 * ║    radius is derived from the design f-number (f/3.5).             ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent states the diaphragm sits in the second air gap (b)     ║
 * ║    but gives no exact axial position.  Stop placed at 71% of      ║
 * ║    the gap (1.75 mm from r₄, 0.72 mm from r₅ at production) to  ║
 * ║    satisfy cross-gap sag clearance from the strongly curved r₄    ║
 * ║    surface (R = +12.75 mm).  This is consistent with patent       ║
 * ║    Fig. 1, which shows the iris closer to the rear doublet.       ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ║    ✗ DO NOT include: parent/donor designs (use final design only) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "carl-zeiss-tessar-50f35",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS TESSAR 50mm f/3.5",
  subtitle: "CH 314381 EXAMPLE 1 — CARL ZEISS / LANGE & RICHTER",

  catalog: {
    lensMounts: ["exakta", "m42", "leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 3 GROUPS", "f ≈ 50.0 mm", "F/3.5", "2ω ≈ 48°", "ALL SPHERICAL"],
    elementCount: 4,
    groupCount: 3,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 50 },
    fNumber: { marketing: 3.5 },
  },

  source: {
    patentNumber: "CH 314381",
    patentYear: 1956,
    authors: ["Günther Lange", "Robert Richter"],
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
      vd: 60.3,
      focalLengthMm: 25.35,
      glass: "N-SK16 (Schott)",
      apd: false,
      role: "Front collecting element; positive meniscus form reduces oblique aberrations vs biconvex L1 of early Tessars",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.59551,
      vd: 39.2,
      focalLengthMm: -15.57,
      glass: "E-F8 (HOYA catalog-equivalent to historical Schott F8; patent supplier unspecified)",
      apd: false,
      role: "Asymmetric biconcave diverging element; principal field-flattener via strong negative Petzval contribution; |R₃|/|R₄| = 2.74",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: -19.37,
      glass: "LF5 (Schott)",
      apd: false,
      role: "Front element of rear cemented doublet; thin negative meniscus providing steeply curved cement surface for chromatic correction",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.2,
      focalLengthMm: 12.08,
      glass: "N-BAF10 (Schott)",
      apd: false,
      role: "Rear element of cemented doublet; thick biconvex workhorse carrying 87.8% of doublet thickness; highest-index glass in the design (near the patent's 1.70 ceiling)",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 15.1504, d: 3.059, sd: 8.5, medium: 1 }, // L1 front (convex)
    { label: "2", R: 380.5629, d: 3.1735, sd: 7.5 }, // L1 rear (≈ flat) → air
    { label: "3", R: -34.9075, d: 0.889, sd: 6.2, medium: 2 }, // L2 front (concave)
    { label: "4", R: 12.7473, d: 1.75, sd: 6.0 }, // L2 rear (concave) → air
    { label: "STO", R: "flat", d: 0.7165 }, // Stop — 71% into gap b, away from deeply curved r₄
    { label: "5", R: 329.5545, d: 0.8605, sd: 6.1, medium: 3 }, // L3 front (≈ flat)
    { label: "6", R: 10.8813, d: 6.2136, sd: 6.3, medium: 4 }, // L3/L4 cement junction
    { label: "7", R: -24.3598, sd: 7.0 }, // L4 rear (convex) → BFD
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description: "Unit focusing — entire optical assembly translates axially as a rigid body.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ── */
  gaps: { "7": { label: "BF", values: [[41.23, 43.87]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III–IV", fromSurface: "5", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
