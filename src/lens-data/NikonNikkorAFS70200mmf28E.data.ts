import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 70-200mm f/2.8E FL ED VR           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2019/097669 A1, Example 1 (Nikon / ITO Tomoki).  ║
 * ║  Five-group telephoto zoom, all-spherical (Example 1).             ║
 * ║  22 elements / 18 groups, 0 aspherical surfaces.                  ║
 * ║  6 ED + 1 fluorite + 1 HRI (nd > 2.0) elements.                  ║
 * ║  Focus: internal focus via G4 movement.                           ║
 * ║                                                                    ║
 * ║  Internal zoom (constant overall length 246 mm).                  ║
 * ║  Zoom variable gaps: D1 (surf 5), D2 (surf 13) — zoom only.      ║
 * ║  Focus variable gaps: D3 (surf 25), D4 (surf 30) — zoom + focus. ║
 * ║  BF (surf 41) constant at 54.000 mm across all positions.         ║
 * ║  Reversing groups: D3 (non-monotonic), D4 (non-monotonic).        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated via combined marginal + chief ray trace               ║
 * ║    (offAxisFieldFrac = 0.60) across all zoom/focus positions,      ║
 * ║    with 8% mechanical clearance, then refined against Nikon's      ║
 * ║    lens-construction diagram.  G1 capped at 36.5 mm (77 mm        ║
 * ║    filter thread).  Tele-end vignetting correction applied.        ║
 * ║    All elements validated: ET ≥ 0.7 mm, sd/|R| < 0.90,            ║
 * ║    cross-gap sag checked at all zoom positions.                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-afs-70-200-f28e-fl",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 70-200mm f/2.8E FL ED VR",
  subtitle: "WO 2019/097669 A1 EXAMPLE 1 — NIKON / ITO TOMOKI",
  specs: [
    "22 ELEMENTS / 18 GROUPS",
    "f = 70–200 mm (design 71.5–196.0 mm)",
    "F/2.8 (design F/2.9)",
    "6 ED + 1 FL + 1 HRI",
    "ALL SPHERICAL",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [70, 200] as [number, number],
  focalLengthDesign: [71.5, 196.0] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  patentYear: 2019,
  elementCount: 22,
  groupCount: 18,

  /* ── Elements ── */
  elements: [
    // ── G1: Front Objective (fixed, f = +143.95 mm) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.95,
      vd: 29.37,
      fl: -327.1,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "Front negative meniscus; reduces off-axis aberrations via high-index lanthanum glass",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 165.2,
      glass: "FCD1 (HOYA) / S-FPL51 family",
      apd: "inferred" as const,
      apdNote: "ED glass, anomalous partial dispersion (FCD1 family)",
      role: "Cemented to L11; achromatic correction with anomalous dispersion for secondary spectrum",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.433852,
      vd: 95.25,
      fl: 243.4,
      glass: "Fluorite (CaF₂)",
      apd: "patent" as const,
      apdNote: "Fluorite — extreme anomalous partial dispersion, νd = 95.25",
      role: "Fluorite element for superior secondary-spectrum correction at maximum beam height",
    },

    // ── G2: Variator (moves during zoom, f = −45.57 mm) ──
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.71999,
      vd: 50.27,
      fl: -93.9,
      glass: "S-LAM51 (OHARA)",
      apd: false,
      role: "Leading variator element; progressive beam bending via meniscus form",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.34,
      fl: -92.2,
      glass: "S-PHM52 (OHARA) / PCD4 (HOYA)",
      apd: false,
      role: "Strong negative power for zoom range; phosphate crown limits chromatic variation during zoom",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.83,
      fl: 86.8,
      glass: "N-SF57 (Schott) / S-TIH53 (OHARA)",
      apd: false,
      role: "Anomalous positive-power flint within negative group; higher-order chromatic and Petzval correction",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.603,
      vd: 65.44,
      fl: -96.8,
      glass: "S-PHM53 (OHARA)",
      apd: false,
      role: "Additional negative power; phosphate crown limits chromatic variation across zoom travel",
    },

    // ── G3: Relay (fixed, f = +94.46 mm) ──
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.73,
      fl: 128.0,
      glass: "S-LAH55VS (OHARA) / TAFD5G (HOYA)",
      apd: false,
      role: "First element after stop; moderate positive power with favorable Petzval contribution",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Plano-Convex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 152.3,
      glass: "K-VC89 (Sumita) / J-PSKH1 (HIKARI)",
      apd: "inferred" as const,
      apdNote: "ED glass, anomalous partial dispersion",
      role: "ED element; plano-convex form minimizes spherical aberration for near-collimated beams",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 119.6,
      glass: "FCD1 (HOYA) / S-FPL51 family",
      apd: "inferred" as const,
      apdNote: "ED glass (FCD1 family)",
      role: "Second FCD1 ED element; positive power with very low dispersion for relay chromatic correction",
    },
    {
      id: 11,
      name: "L34",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.12,
      fl: -70.1,
      glass: "TAFD55 (HOYA) / S-LAH99 (OHARA)",
      apd: false,
      apdNote: "HRI element (nd > 2.0)",
      role: "High Refractive Index element; strong negative power for Petzval flattening with gentle surface curvatures",
    },
    {
      id: 12,
      name: "L35",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.90265,
      vd: 35.73,
      fl: 47.5,
      glass: "LaH family (no exact catalog match)",
      apd: false,
      role: "Positive element of cemented field-flattening corrector at G3 exit",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L36",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.98,
      fl: -44.0,
      glass: "E-FL5 (HOYA) / S-TIL25 (OHARA)",
      apd: false,
      role: "Negative element of cemented corrector; net doublet power is weakly negative (f ≈ −1420 mm)",
      cemented: "D2",
    },

    // ── G4: Focusing Group (moves during zoom and focus, f = +58.20 mm) ──
    {
      id: 14,
      name: "L41",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 89.7,
      glass: "FCD1 (HOYA) / S-FPL51 family",
      apd: "inferred" as const,
      apdNote: "ED glass (FCD1 family)",
      role: "ED element in focusing group; maintains chromatic performance across focus range",
    },
    {
      id: 15,
      name: "L42",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.95,
      vd: 29.37,
      fl: -89.9,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "High-index negative meniscus; paired with L43 for achromatic focusing doublet",
      cemented: "D3",
    },
    {
      id: 16,
      name: "L43",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: 57.1,
      glass: "K-VC89 (Sumita) / J-PSKH1 (HIKARI)",
      apd: "inferred" as const,
      apdNote: "ED glass",
      role: "ED element cemented to L42; net positive doublet (f ≈ +170 mm) maintains color correction through focus",
      cemented: "D3",
    },

    // ── G5: VR Group (fixed overall, VR subgroup shifts laterally, f = −109.09 mm) ──
    {
      id: 17,
      name: "L51",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -98.7,
      glass: "S-LAH65VS (OHARA) / TAF3D (HOYA)",
      apd: false,
      role: "Leading G5 element; negative power diverges converging beam from G4",
    },
    {
      id: 18,
      name: "L52",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.83,
      fl: 61.2,
      glass: "N-SF57 (Schott) / S-TIH53 (OHARA)",
      apd: false,
      role: "VR subgroup (part 1); positive element of decentering-corrected achromatic doublet",
      cemented: "D4",
    },
    {
      id: 19,
      name: "L53",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.71999,
      vd: 50.27,
      fl: -41.3,
      glass: "S-LAM51 (OHARA)",
      apd: false,
      role: "VR subgroup (part 1); cemented to L52 — net doublet f ≈ −138 mm",
      cemented: "D4",
    },
    {
      id: 20,
      name: "L54",
      label: "Element 20",
      type: "Plano-Concave Negative",
      nd: 1.95375,
      vd: 32.33,
      fl: -71.9,
      glass: "TAFD45 (HOYA) / S-LAH98 (OHARA)",
      apd: false,
      role: "VR subgroup (part 2); flat front + curved rear — shifts laterally with L52+L53 for image stabilization",
    },
    {
      id: 21,
      name: "L55",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 108.0,
      glass: "K-VC89 (Sumita) / J-PSKH1 (HIKARI)",
      apd: "inferred" as const,
      apdNote: "ED glass",
      role: "Third K-VC89 ED element; corrects chromatic shifts introduced by VR lateral decentering",
    },
    {
      id: 22,
      name: "L56",
      label: "Element 22",
      type: "Positive Meniscus",
      nd: 1.71999,
      vd: 50.27,
      fl: 100.4,
      glass: "S-LAM51 (OHARA)",
      apd: false,
      role: "Final element; positive meniscus controls back-focal field curvature",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Front Objective (fixed) ──
    { label: "1", R: 127.304, d: 2.8, nd: 1.95, elemId: 1, sd: 36.5 }, // L11 front
    { label: "2", R: 89.338, d: 9.9, nd: 1.49782, elemId: 2, sd: 36.5 }, // L12 front (cemented junction)
    { label: "3", R: -998.249, d: 0.1, nd: 1.0, elemId: 0, sd: 36.5 }, // air
    { label: "4", R: 92.013, d: 7.7, nd: 1.433852, elemId: 3, sd: 35.0 }, // L13 front
    { label: "5", R: 696.987, d: 3.014, nd: 1.0, elemId: 0, sd: 35.0 }, // air → D1

    // ── G2: Variator (moves during zoom) ──
    { label: "6", R: 67.306, d: 2.4, nd: 1.71999, elemId: 4, sd: 24.0 }, // L21 front
    { label: "7", R: 33.224, d: 10.25, nd: 1.0, elemId: 0, sd: 21.0 }, // air
    { label: "8", R: -131.888, d: 2.0, nd: 1.618, elemId: 5, sd: 21.0 }, // L22 front
    { label: "9", R: 100.859, d: 2.0, nd: 1.0, elemId: 0, sd: 22.5 }, // air
    { label: "10", R: 53.85, d: 4.4, nd: 1.84666, elemId: 6, sd: 21.5 }, // L23 front
    { label: "11", R: 193.868, d: 3.55, nd: 1.0, elemId: 0, sd: 18.2 }, // air
    { label: "12", R: -73.371, d: 2.2, nd: 1.603, elemId: 7, sd: 18.2 }, // L24 front
    { label: "13", R: 288.683, d: 50.598, nd: 1.0, elemId: 0, sd: 20.8 }, // air → D2

    // ── G3: Relay (fixed) ──
    { label: "STO", R: 1e15, d: 2.5, nd: 1.0, elemId: 0, sd: 12.3 }, // aperture stop
    { label: "15", R: 581.555, d: 3.7, nd: 1.83481, elemId: 8, sd: 23.0 }, // L31 front
    { label: "16", R: -130.482, d: 0.2, nd: 1.0, elemId: 0, sd: 23.0 }, // air
    { label: "17", R: 90.329, d: 3.85, nd: 1.59319, elemId: 9, sd: 22.5 }, // L32 front
    { label: "18", R: 1e15, d: 0.2, nd: 1.0, elemId: 0, sd: 22.5 }, // air (plano rear)
    { label: "19", R: 52.765, d: 4.9, nd: 1.49782, elemId: 10, sd: 21.5 }, // L33 front
    { label: "20", R: 448.658, d: 2.043, nd: 1.0, elemId: 0, sd: 18.4 }, // air
    { label: "21", R: -118.745, d: 2.2, nd: 2.001, elemId: 11, sd: 18.4 }, // L34 front
    { label: "22", R: 173.228, d: 4.55, nd: 1.0, elemId: 0, sd: 20.2 }, // air
    { label: "23", R: 114.635, d: 5.75, nd: 1.90265, elemId: 12, sd: 20.4 }, // L35 front
    { label: "24", R: -66.799, d: 2.2, nd: 1.58144, elemId: 13, sd: 20.4 }, // L36 front (cemented junction)
    { label: "25", R: 41.996, d: 16.922, nd: 1.0, elemId: 0, sd: 20.0 }, // air → D3

    // ── G4: Focusing Group (moves during zoom and focus) ──
    { label: "26", R: 57.835, d: 4.8, nd: 1.49782, elemId: 14, sd: 18.8 }, // L41 front
    { label: "27", R: -190.076, d: 0.1, nd: 1.0, elemId: 0, sd: 18.5 }, // air
    { label: "28", R: 44.19, d: 2.0, nd: 1.95, elemId: 15, sd: 18.5 }, // L42 front
    { label: "29", R: 28.478, d: 5.55, nd: 1.59319, elemId: 16, sd: 17.0 }, // L43 front (cemented junction)
    { label: "30", R: 166.406, d: 1.903, nd: 1.0, elemId: 0, sd: 17.0 }, // air → D4

    // ── G5: VR Group (fixed overall; L52+L53+L54 shift laterally for VR) ──
    { label: "31", R: 52.698, d: 1.8, nd: 1.804, elemId: 17, sd: 17.5 }, // L51 front
    { label: "32", R: 31.187, d: 5.15, nd: 1.0, elemId: 0, sd: 17.0 }, // air
    { label: "33", R: 102.833, d: 3.35, nd: 1.84666, elemId: 18, sd: 16.4 }, // L52 front
    { label: "34", R: -102.758, d: 1.6, nd: 1.71999, elemId: 19, sd: 16.4 }, // L53 front (cemented junction)
    { label: "35", R: 42.059, d: 2.583, nd: 1.0, elemId: 0, sd: 13.7 }, // air
    { label: "36", R: 1e15, d: 1.6, nd: 1.95375, elemId: 20, sd: 13.7 }, // L54 front (flat = plano)
    { label: "37", R: 68.581, d: 3.75, nd: 1.0, elemId: 0, sd: 16.0 }, // air
    { label: "38", R: 101.229, d: 3.85, nd: 1.59319, elemId: 21, sd: 17.0 }, // L55 front
    { label: "39", R: -172.177, d: 0.15, nd: 1.0, elemId: 0, sd: 17.0 }, // air
    { label: "40", R: 47.985, d: 3.9, nd: 1.71999, elemId: 22, sd: 17.5 }, // L56 front
    { label: "41", R: 137.994, d: 54.0, nd: 1.0, elemId: 0, sd: 17.0 }, // air → BF (constant)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings ──
   *  Zoom lens format: one [d_inf, d_close] pair per zoom position.
   *  D1 and D2 are zoom-only (identical inf/close values).
   *  D3 and D4 are zoom + focus.
   *  BF = 54.000 mm constant — not a variable gap.
   *
   *  Non-monotonic gaps:
   *    D3 at infinity: 16.922 → 14.105 → 16.921 (dips at mid-zoom)
   *    D4 at infinity:  1.903 →  4.720 →  1.903  (peaks at mid-zoom)
   */
  var: {
    "5": [
      [3.014, 3.014],
      [34.034, 34.034],
      [50.952, 50.952],
    ], // D1 — zoom only
    "13": [
      [50.598, 50.598],
      [19.577, 19.577],
      [2.66, 2.66],
    ], // D2 — zoom only
    "25": [
      [16.922, 14.966],
      [14.105, 7.506],
      [16.921, 2.928],
    ], // D3 — zoom + focus
    "30": [
      [1.903, 3.858],
      [4.72, 11.318],
      [1.903, 15.897],
    ], // D4 — zoom + focus
  },

  varLabels: [
    ["5", "D1"],
    ["13", "D2"],
    ["25", "D3"],
    ["30", "D4"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [71.5, 135.0, 196.0],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FIXED)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (ZOOM)", fromSurface: "6", toSurface: "13" },
    { text: "G3 (FIXED)", fromSurface: "STO", toSurface: "25" },
    { text: "G4 (FOCUS)", fromSurface: "26", toSurface: "30" },
    { text: "G5 (VR)", fromSurface: "31", toSurface: "41" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "23", toSurface: "25" },
    { text: "D3", fromSurface: "28", toSurface: "30" },
    { text: "D4", fromSurface: "33", toSurface: "35" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.1,
  focusDescription:
    "Internal focus — G4 moves toward the object along the optical axis. Front element does not rotate; overall length constant.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
