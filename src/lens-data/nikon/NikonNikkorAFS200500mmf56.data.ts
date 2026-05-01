import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2014-209144 A, Example 2 (Nikon / Tamron).       ║
 * ║  Super-telephoto zoom with VR. All-spherical design.               ║
 * ║  19 elements / 12 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: Internal focus via G5 (L5) axial translation.              ║
 * ║                                                                    ║
 * ║  Zoom variable gaps (zoom only): D5, D16, D19, D24.               ║
 * ║  Focus variable gaps (zoom + focus): D25, D28.                     ║
 * ║  Reversing groups: D25 (non-monotonic across zoom).                ║
 * ║  Fixed groups during zoom: G2 (L2), G4 (L4), G6 (L6).            ║
 * ║  Moving groups during zoom: G1 (L1), G3 (L3), G5 (L5), Stop.     ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: None. Patent prescription is at production       ║
 * ║  focal lengths (205–487 mm). No scaling applied.                   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: Patent provides no SDs. Estimated via    ║
 * ║  paraxial marginal ray trace at each zoom position, taking the    ║
 * ║  maximum ray height across all positions with ~8% mechanical      ║
 * ║  clearance. Front group capped at 45.5 mm (95 mm filter thread).  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-afs-200-500f56e",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR",
  subtitle: "JP 2014-209144 A EXAMPLE 2 — NIKON / TAMRON",
  specs: [
    "19 ELEMENTS / 12 GROUPS",
    "f = 205–487 mm",
    "F/5.62–5.78 (optical); F/5.6 (marketed)",
    "2ω ≈ 11.8–5.0°",
    "ALL SPHERICAL",
    "3 ED ELEMENTS",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [200, 500] as [number, number],
  focalLengthDesign: [205.04, 486.97] as [number, number],
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  patentYear: 2014,
  elementCount: 19,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -211.8,
      glass: "NBFD11 (HOYA)",
      apd: false,
      role: "Negative chromatic corrector in front achromatic doublet",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 205.2,
      glass: "FPL51 variant [ED]",
      apd: "inferred" as const,
      apdNote: "vd = 82.57, fluorophosphate crown family with anomalous partial dispersion",
      role: "Primary positive power in front doublet; ED chromatic correction",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 236.7,
      glass: "FPL51 variant [ED]",
      apd: "inferred" as const,
      apdNote: "vd = 82.57, fluorophosphate crown family with anomalous partial dispersion",
      role: "Standalone positive singlet in front group; ED chromatic correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.01,
      fl: 115.7,
      glass: "S-TIM27 (OHARA)",
      apd: false,
      role: "Negative meniscus conditioning beam into VR group (L2A subgroup)",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      fl: -57.4,
      glass: "TAC4 (HOYA) / S-LAL18 (OHARA)",
      apd: false,
      role: "Strong negative power in L2A subgroup",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.15,
      fl: -71.6,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      role: "Low-index negative crown in VR doublet; lightweight for actuator",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      fl: 104.1,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "High-dispersion flint in VR doublet; chromatic correction for VR group",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7433,
      vd: 49.22,
      fl: -143.2,
      glass: "S-NBH51 (OHARA)",
      apd: false,
      role: "Negative singlet in VR group (L2B); adds decentering sensitivity",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.60738,
      vd: 56.82,
      fl: 45.2,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Positive compensator in L2C subgroup; cancels L2A+L2B aberrations",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.65844,
      vd: 50.85,
      fl: -59.3,
      glass: "S-BAH28 (OHARA)",
      apd: false,
      role: "Negative meniscus in L2C doublet",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.90366,
      vd: 31.31,
      fl: -209.5,
      glass: "S-LAH95 (OHARA)",
      apd: false,
      role: "Highest-index glass; chromatic corrector in compensator doublet (G3)",
      cemented: "D5",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 71.6,
      glass: "N-FK5 (Schott) / E-FEL1 (HOYA)",
      apd: false,
      role: "Low-dispersion positive power in compensator doublet (G3)",
      cemented: "D5",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 99.0,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA) [ED]",
      apd: "inferred" as const,
      apdNote: "vd = 81.61, fluorophosphate crown; third ED element",
      role: "Positive ED element in relay group (G4); secondary spectrum correction",
      cemented: "D6",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.34,
      fl: -97.2,
      glass: "S-LAH55V (OHARA) / TAFD5 (HOYA)",
      apd: false,
      role: "Negative chromatic partner in near-afocal ED doublet (G4)",
      cemented: "D6",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.7433,
      vd: 49.22,
      fl: 139.2,
      glass: "S-NBH51 (OHARA)",
      apd: false,
      role: "Positive singlet providing relay-group convergence before stop",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.84,
      fl: 97.2,
      glass: "E-ADF10 (HOYA)",
      apd: false,
      role: "Anomalous-dispersion flint; positive element in focus doublet (G5)",
      cemented: "D7",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      fl: -42.8,
      glass: "TAC4 (HOYA) / S-LAL18 (OHARA)",
      apd: false,
      role: "Crown-negative in reversed focus doublet (G5)",
      cemented: "D7",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.89,
      fl: 131.4,
      glass: "S-TIM2 (OHARA)",
      apd: false,
      role: "Weakly positive field-flattening singlet in fixed rear group (G6)",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -121.7,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "Negative field-flattening singlet in fixed rear group (G6)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // G1 (L1): Front objective — E1+E2 cemented doublet + E3 singlet
    { label: "1", R: 436.4287, d: 3.0, nd: 1.804, elemId: 1, sd: 45.5 },
    { label: "2", R: 122.113, d: 11.5, nd: 1.49782, elemId: 2, sd: 45.5 },
    { label: "3", R: -605.0947, d: 0.3, nd: 1.0, elemId: 0, sd: 45.5 },
    { label: "4", R: 125.4694, d: 11.0, nd: 1.49782, elemId: 3, sd: 45.5 },
    { label: "5", R: -1875.0633, d: 52.077, nd: 1.0, elemId: 0, sd: 44.0 }, // d5 = var wide∞

    // G2/L2A: E4+E5 cemented doublet (fixed during zoom)
    { label: "6", R: -496.2416, d: 4.1, nd: 1.60342, elemId: 4, sd: 18.5 },
    { label: "7", R: -61.4135, d: 1.5, nd: 1.72916, elemId: 5, sd: 18.5 },
    { label: "8", R: 132.4791, d: 5.1, nd: 1.0, elemId: 0, sd: 18.5 },

    // G2/L2B (VR group): E6+E7 cemented doublet + E8 singlet
    // SDs reduced to 17.5 to clear cross-gap sag at S11→S12 (2.0 mm gap)
    { label: "9", R: -188.3876, d: 1.5, nd: 1.51742, elemId: 6, sd: 17.5 },
    { label: "10", R: 46.2336, d: 3.8, nd: 1.80518, elemId: 7, sd: 17.5 },
    { label: "11", R: 99.3055, d: 2.0, nd: 1.0, elemId: 0, sd: 16.9 },
    { label: "12", R: -411.8858, d: 1.7, nd: 1.7433, elemId: 8, sd: 17.5 },
    { label: "13", R: 143.7588, d: 3.0, nd: 1.0, elemId: 0, sd: 17.5 },

    // G2/L2C: E9+E10 cemented doublet
    { label: "14", R: 153.9724, d: 9.5, nd: 1.60738, elemId: 9, sd: 19.5 },
    { label: "15", R: -32.5888, d: 1.7, nd: 1.65844, elemId: 10, sd: 20.5 },
    { label: "16", R: -200.7252, d: 23.8204, nd: 1.0, elemId: 0, sd: 20.5 }, // d16 = var wide∞

    // G3 (L3): E11+E12 cemented doublet (moves during zoom)
    { label: "17", R: 121.8569, d: 1.7, nd: 1.90366, elemId: 11, sd: 24.0 },
    { label: "18", R: 73.6444, d: 10.0, nd: 1.48749, elemId: 12, sd: 24.0 },
    { label: "19", R: -63.3839, d: 1.5, nd: 1.0, elemId: 0, sd: 24.5 }, // d19 = var wide∞

    // G4 (L4): E13+E14 cemented doublet + E15 singlet (fixed during zoom)
    { label: "20", R: 524.006, d: 7.6, nd: 1.497, elemId: 13, sd: 24.5 },
    { label: "21", R: -54.0683, d: 1.7, nd: 1.834, elemId: 14, sd: 24.0 },
    { label: "22", R: -164.5813, d: 0.2, nd: 1.0, elemId: 0, sd: 24.0 },
    { label: "23", R: 69.2565, d: 4.3, nd: 1.7433, elemId: 15, sd: 24.0 },
    { label: "24", R: 203.8076, d: 32.6377, nd: 1.0, elemId: 0, sd: 23.0 }, // d24 = var wide∞

    // Aperture stop (moves independently during zoom)
    { label: "STO", R: 1e15, d: 8.2078, nd: 1.0, elemId: 0, sd: 14.0 }, // d25 = var wide∞

    // G5 (L5): E16+E17 cemented doublet — focus group
    { label: "26", R: 151.8781, d: 3.1, nd: 1.64769, elemId: 16, sd: 13.5 },
    { label: "27", R: -106.5949, d: 1.1, nd: 1.72916, elemId: 17, sd: 13.0 },
    { label: "28", R: 44.3402, d: 19.8179, nd: 1.0, elemId: 0, sd: 13.0 }, // d28 = var wide∞

    // G6 (L6): E18 singlet + E19 singlet (fixed)
    { label: "29", R: -96.2691, d: 5.0, nd: 1.58144, elemId: 18, sd: 10.0 },
    { label: "30", R: -43.4021, d: 21.0392, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "31", R: -40.3878, d: 1.5, nd: 1.83481, elemId: 19, sd: 6.5 },
    { label: "32", R: -68.1862, d: 54.3185, nd: 1.0, elemId: 0, sd: 6.5 }, // bf (constant)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings ──
   *  Zoom positions: [205.04, 299.98, 486.97] mm
   *  Zoom-only gaps: d5, d16, d19, d24 (identical inf/close values)
   *  Zoom + focus gaps: d25, d28 (different inf/close values)
   *  bf is constant at 54.3185 mm across all states.
   *
   *  Focus conservation: d25 + d28 = const at each zoom position.
   *    Wide:  8.2078 + 19.8179 = 28.0257  |  13.6845 + 14.3413 = 28.0258 ✓
   *    Mid:  11.1530 + 31.7449 = 42.8979  |  21.5022 + 21.3957 = 42.8979 ✓
   *    Tele:  5.8667 + 60.8092 = 66.6759  |  26.1835 + 40.4924 = 66.6759 ✓
   */
  zoomPositions: [205.04, 299.98, 486.97],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    // Zoom-only gaps (identical inf/close)
    "5": [
      [52.077, 52.077],
      [83.8845, 83.8845],
      [127.4543, 127.4543],
    ],
    "16": [
      [23.8204, 23.8204],
      [10.7208, 10.7208],
      [2.0, 2.0],
    ],
    "19": [
      [1.5, 1.5],
      [8.8128, 8.8128],
      [12.3467, 12.3467],
    ],
    "24": [
      [32.6377, 32.6377],
      [23.5524, 23.5524],
      [4.9613, 4.9613],
    ],
    // Zoom + focus gaps
    STO: [
      [8.2078, 13.6845],
      [11.153, 21.5022],
      [5.8667, 26.1835],
    ],
    "28": [
      [19.8179, 14.3413],
      [31.7449, 21.3957],
      [60.8092, 40.4924],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["16", "D16"],
    ["19", "D19"],
    ["24", "D24"],
    ["STO", "D25"],
    ["28", "BF"],
  ] as [string, string][],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+) L1", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) L2 [fixed]", fromSurface: "6", toSurface: "16" },
    { text: "G3 (+) L3", fromSurface: "17", toSurface: "19" },
    { text: "G4 (+) L4 [fixed]", fromSurface: "20", toSurface: "24" },
    { text: "G5 (−) L5 [focus]", fromSurface: "26", toSurface: "28" },
    { text: "G6 L6 [fixed]", fromSurface: "29", toSurface: "32" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "14", toSurface: "16" },
    { text: "D5", fromSurface: "17", toSurface: "19" },
    { text: "D6", fromSurface: "20", toSurface: "22" },
    { text: "D7", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 2.2,
  focusDescription: "Internal focus via G5 (L5) axial translation toward image. G5 is a negative cemented doublet.",

  /* ── Aperture configuration ──
   *  Patent optical design: FNo = 4.62 (wide) to 5.78 (tele).
   *  Production lens: electromagnetic diaphragm constrains to constant f/5.6.
   *  Using patent optical values for accurate ray tracing.
   */
  nominalFno: [4.62, 5.24, 5.78] as number[],
  fstopSeries: [5.6, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
