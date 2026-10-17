import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — smc PENTAX-DA★ 50-135mm F2.8 ED [IF] SDM             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,289,274 B1, Embodiment 5 (Table 5).            ║
 * ║  Inventor: Masakazu Saori. Assignee: PENTAX Corporation.          ║
 * ║  Four-group telephoto zoom, +/−/+/+ power distribution.           ║
 * ║  18 elements / 14 groups, 0 aspherical surfaces, 3 ED elements.   ║
 * ║  Focus: Internal focus via sub-group 10R in stationary Group 1.   ║
 * ║                                                                    ║
 * ║  Internal zoom (constant overall length ≈180 mm front-to-image).  ║
 * ║    Groups 1 and 4 stationary; Groups 2 and 3 move.               ║
 * ║    Zoom variable gaps: D16, D21 (zoom only).                      ║
 * ║    Focus variable gaps: D5, D9 (zoom + focus).                    ║
 * ║    Reversing group: Group 3 (D21 non-monotonic across zoom).      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated from marginal ray envelope at F/2.9 across all   ║
 * ║    zoom positions, plus 8% mechanical clearance. No patent SDs    ║
 * ║    published. Front group constrained by 67 mm filter thread.     ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent publishes only infinity-focus variable gap data.         ║
 * ║    Close-focus gaps at MFD = 1.0 m computed by paraxial ray       ║
 * ║    trace (y-nu method), solving for the 10R translation that      ║
 * ║    places the image at the fixed sensor plane (BFD = 39.70 mm).   ║
 * ║    Computed tele magnification = −0.170, matching the             ║
 * ║    manufacturer's stated 0.17× maximum magnification.             ║
 * ║                                                                    ║
 * ║  NOTE ON DIAPHRAGMS:                                               ║
 * ║    Two diaphragms in the patent:                                   ║
 * ║      KS — variable-aperture (iris), 1.00 mm before surface 22.   ║
 * ║           Modeled as STO.                                         ║
 * ║      FS — fixed-aperture (flare stop), 3.50 mm after surface 26. ║
 * ║           Modeled as flat air surface labeled "FS".               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-da-50-135-f28",
  maker: "Pentax",
  name: "PENTAX DA* 50-135mm f/2.8 ED [IF] SDM",
  subtitle: "US 7,289,274 B1 Example 5 — PENTAX / Saori",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: [
      "18 ELEMENTS / 14 GROUPS",
      "f = 51.5–131.0 mm (patent) / 50–135 mm (marketing)",
      "F/2.8 (constant)",
      "3 ED ELEMENTS",
      "ALL-SPHERICAL",
    ],
    elementCount: 18,
    groupCount: 14,
    focalLengthMm: { marketing: [50, 135], design: [51.5, 131.0] },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 7,289,274 B1",
    patentYear: 2007,
    authors: ["Masakazu Saori"],
    assignees: ["Pentax Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.8,
      focalLengthMm: -164.4,
      glass: "S-LAM2 (OHARA)",
      apd: false,
      role: "Front negative meniscus; achromatic partner with L2",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 163.6,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Fluorophosphate crown; achromatic partner with L1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 184.2,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      apdNote: "ED fluorophosphate crown (νd = 81.6)",
      role: "ED element 1/3; secondary spectrum correction in front collector",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -269.7,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Dense flint in focus group; achromatic partner with L5",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 96.4,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Net positive power of focus group 10R; crown partner with L4",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -28.8,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "Strongest element; primary variator divergence driver",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -38.6,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Low-index crown in near-afocal chromatic corrector doublet",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 39.2,
      glass: "S-TIH53W (OHARA)",
      apd: false,
      role: "Highest-index glass in design; chromatic corrector in variator",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: -151.5,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Field flattener and coma corrector at rear of variator",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 113.4,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Symmetric biconvex (R17 = −R18); zero coma at unit conjugate",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 58.8,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      apdNote: "ED fluorophosphate crown (νd = 81.6)",
      role: "ED element 2/3; strongest chromatic corrector station (Δνd = 56.2 with L12)",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -88.7,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Dense flint; achromatizing partner with L11 in compensator",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 105.9,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Entrance to Group 4; converges beam after variable KS stop",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 37.6,
      glass: "S-FPL51 (OHARA)",
      apd: false,
      apdNote: "ED fluorophosphate crown (νd = 81.6)",
      role: "ED element 3/3; strongest positive element and primary relay chromatic corrector",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.65844,
      vd: 50.9,
      focalLengthMm: -30.1,
      glass: "N-SSK5 (Schott-equivalent, nd=1.65844, νd=50.9)",
      apd: false,
      role: "Petzval-sum corrector; net doublet with L14 is weakly negative",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.60562,
      vd: 43.7,
      focalLengthMm: 39.0,
      glass: "S-BAM4 (OHARA)",
      apd: false,
      role: "Primary image-forming power in rear sub-group 40R",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 35.0,
      focalLengthMm: -42.2,
      glass: "S-LAM66 (OHARA)",
      apd: false,
      role: "High-index field flattener; primary Petzval sum corrector for rear relay",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 202.0,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Weak field lens; telecentrizes exit beam for APS-C sensor",
    },
  ],

  /* ── Surfaces ── */
  /* (moved from asph) ── Aspherical coefficients (all-spherical design) ── */
  surfaces: [
    /* ── Group 1: Front collector — Sub-group 10F (fixed) ── */
    // D1 cemented doublet: L1 + L2
    { label: "1", R: 105.398, d: 2.3, sd: 24.4, medium: 1 }, // L1 front
    { label: "2", R: 56.082, d: 7.84, sd: 24.2, medium: 2 }, // L1→L2 junction
    { label: "3", R: 180.272, d: 0.1, sd: 23.8 }, // L2 rear → air
    // L3 singlet (ED)
    { label: "4", R: 66.104, d: 6.43, sd: 23.8, medium: 3 }, // L3 front
    { label: "5", R: 230.241, sd: 23.1 }, // L3 rear → air [FOCUS VAR: d5]

    /* ── Group 1: Sub-group 10R — focusing group ── */
    // L4 singlet
    { label: "6", R: 54.225, d: 2.0, sd: 21.2, medium: 4 }, // L4 front
    { label: "7", R: 42.675, d: 1.05, sd: 20.7 }, // L4 rear → air
    // L5 singlet
    { label: "8", R: 48.313, d: 8.82, sd: 20.6, medium: 5 }, // L5 front
    { label: "9", R: -1617.704, sd: 19.1 }, // L5 rear → air [ZOOM+FOCUS VAR: d9]

    /* ── Group 2: Variator (moves toward image on zoom-in) ── */
    // L6 singlet
    { label: "10", R: -181.711, d: 1.2, sd: 11.3, medium: 6 }, // L6 front
    { label: "11", R: 26.585, d: 4.85, sd: 11.1 }, // L6 rear → air
    // D2 cemented doublet: L7 + L8
    { label: "12", R: -50.615, d: 1.2, sd: 11.7, medium: 7 }, // L7 front
    { label: "13", R: 30.138, d: 3.6, sd: 11.9, medium: 8 }, // L7→L8 junction
    { label: "14", R: 311.871, d: 1.65, sd: 11.4 }, // L8 rear → air
    // L9 singlet
    { label: "15", R: -52.317, d: 1.1, sd: 11.4, medium: 9 }, // L9 front
    { label: "16", R: -100.273, sd: 12.5 }, // L9 rear → air [ZOOM VAR: d16]

    /* ── Group 3: Compensator (moves image-ward then object-ward) ── */
    // L10 singlet (symmetric biconvex)
    { label: "17", R: 174.749, d: 2.14, sd: 12.8, medium: 10 }, // L10 front
    { label: "18", R: -174.749, d: 1.06, sd: 13.0 }, // L10 rear → air
    // D3 cemented doublet: L11 (ED) + L12
    { label: "19", R: -4485.526, d: 4.73, sd: 13.1, medium: 11 }, // L11 front
    { label: "20", R: -29.038, d: 1.1, sd: 13.4, medium: 12 }, // L11→L12 junction
    { label: "21", R: -49.755, sd: 13.6 }, // L12 rear → air [ZOOM VAR: d21 – gap to KS]

    /* ── KS: Variable-aperture diaphragm (1.00 mm before patent surface 22) ── */
    { label: "STO", R: "flat", d: 1.0 },

    /* ── Group 4: Relay and field correction — Sub-group 40F ── */
    // L13 singlet
    { label: "22", R: 73.832, d: 2.65, sd: 13.6, medium: 13 }, // L13 front
    { label: "23", R: 743.114, d: 0.5, sd: 13.4 }, // L13 rear → air
    // D4 cemented doublet: L14 (ED) + L15
    { label: "24", R: 22.109, d: 7.93, sd: 13.4, medium: 14 }, // L14 front
    { label: "25", R: -105.602, d: 1.58, sd: 11.2, medium: 15 }, // L14→L15 junction
    { label: "26", R: 24.579, d: 3.5, sd: 10.8 }, // L15 rear → air [gap to FS]

    /* ── FS: Fixed-aperture diaphragm (3.50 mm behind patent surface 26) ── */
    { label: "FS", R: "flat", d: 11.07, sd: 10.4 },

    /* ── Group 4: Sub-group 40R — field correction ── */
    // L16 singlet
    { label: "27", R: 120.433, d: 5.2, sd: 9.3, medium: 16 }, // L16 front
    { label: "28", R: -28.928, d: 3.0, sd: 8.8 }, // L16 rear → air
    // L17 singlet
    { label: "29", R: -22.288, d: 1.24, sd: 7.8, medium: 17 }, // L17 front
    { label: "30", R: -67.039, d: 0.65, sd: 7.7 }, // L17 rear → air
    // L18 singlet (field lens)
    { label: "31", R: 95.907, d: 2.07, sd: 7.7, medium: 18 }, // L18 front
    { label: "32", R: 3646.801, d: 39.7, sd: 7.4 }, // L18 rear → image (BFD)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom positions ── */
    stations: [
      { focalLengthMm: 51.5, label: "Wide" },
      { focalLengthMm: 85.0 },
      { focalLengthMm: 131.0, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description: "Internal focus (IF) via sub-group 10R (L4 + L5); constant travel ≈13.5 mm across all focal lengths.",
  },

  /* (moved from var) ── Variable air spacings (zoom + focus) ──
   *  Focus mechanism: sub-group 10R (L4 + L5) translates toward the object
   *  when focusing from infinity to close. d5 decreases, d9 increases.
   *  Focus travel ≈ 13.53 mm (constant across zoom positions).
   *
   *  Zoom variable gaps: d16, d21 (zoom only — identical inf/close values).
   *  Focus variable gaps: d5, d9 (change with focus; d9 also with zoom).
   *  Gap conservation: d5 + d9 = const per zoom position (Groups 1 stationary).
   *                    d9 + d16 + d21_full = 34.52 mm (Groups 1,4 stationary).
   */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [15.23, 1.7],
        [15.23, 1.69],
        [15.23, 1.68],
      ],
    },
    "9": {
      label: "D9",
      values: [
        [2.3, 15.83],
        [19.73, 33.27],
        [29.44, 42.99],
      ],
    },
    "16": {
      label: "D16",
      values: [
        [19.04, 19.04],
        [11.78, 11.78],
        [1.5, 1.5],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [12.18, 12.18],
        [2.01, 2.01],
        [2.58, 2.58],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], blades: 9 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 — 10F", fromSurface: "1", toSurface: "5" },
    { text: "G1 — 10R (focus)", fromSurface: "6", toSurface: "9" },
    { text: "G2 (variator)", fromSurface: "10", toSurface: "16" },
    { text: "G3 (compensator)", fromSurface: "17", toSurface: "21" },
    { text: "G4 — 40F", fromSurface: "22", toSurface: "26" },
    { text: "G4 — 40R", fromSurface: "27", toSurface: "32" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
    { text: "D4", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.62, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
