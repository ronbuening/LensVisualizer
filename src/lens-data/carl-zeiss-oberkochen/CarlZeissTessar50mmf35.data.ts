import type { LensDataInput } from "../../types/optics.js";

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
 * ║    constrained by edge-thickness minimum (≥ 0.5 mm).  Stop SD    ║
 * ║    set by f/3.5 entrance pupil requirement.                        ║
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
  key: "carl-zeiss-tessar-50f35",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS TESSAR 50mm f/3.5",
  subtitle: "CH 314381 EXAMPLE 1 — CARL ZEISS / LANGE & RICHTER",
  specs: ["4 ELEMENTS / 3 GROUPS", "f ≈ 50.0 mm", "F/3.5", "2ω ≈ 48°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  apertureMarketing: 3.5,
  patentYear: 1956,
  elementCount: 4,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 25.35,
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
      fl: -15.57,
      glass: "F8 historical (Schott, discontinued)",
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
      fl: -19.37,
      glass: "LF5 (Schott)",
      apd: false,
      cemented: "D1",
      role: "Front element of rear cemented doublet; thin negative meniscus providing steeply curved cement surface for chromatic correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.2,
      fl: 12.08,
      glass: "N-BAF10 (Schott)",
      apd: false,
      cemented: "D1",
      role: "Rear element of cemented doublet; thick biconvex workhorse carrying 87.8% of doublet thickness; highest-index glass in the design (near the patent's 1.70 ceiling)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 15.1504, d: 3.059, nd: 1.62041, elemId: 1, sd: 8.5 }, // L1 front (convex)
    { label: "2", R: 380.5629, d: 3.1735, nd: 1.0, elemId: 0, sd: 7.5 }, // L1 rear (≈ flat) → air
    { label: "3", R: -34.9075, d: 0.889, nd: 1.59551, elemId: 2, sd: 6.2 }, // L2 front (concave)
    { label: "4", R: 12.7473, d: 1.75, nd: 1.0, elemId: 0, sd: 6.0 }, // L2 rear (concave) → air
    { label: "STO", R: 1e15, d: 0.7165, nd: 1.0, elemId: 0, sd: 5.73 }, // Stop — 71% into gap b, away from deeply curved r₄
    { label: "5", R: 329.5545, d: 0.8605, nd: 1.58144, elemId: 3, sd: 6.1 }, // L3 front (≈ flat)
    { label: "6", R: 10.8813, d: 6.2136, nd: 1.67003, elemId: 4, sd: 6.3 }, // L3/L4 cement junction
    { label: "7", R: -24.3598, d: 41.23, nd: 1.0, elemId: 0, sd: 7.0 }, // L4 rear (convex) → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ── */
  var: {
    "7": [41.23, 43.87],
  },

  varLabels: [["7", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III–IV", fromSurface: "5", toSurface: "7" },
  ],

  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription: "Unit focusing — entire optical assembly translates axially as a rigid body.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
