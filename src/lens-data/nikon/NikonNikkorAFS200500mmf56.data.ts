import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 200-500mm f/5.6E ED VR                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2014-209144 A, Example 2 (Nikon / Tamron).          ║
 * ║  Super-telephoto zoom with VR (L2B). All-spherical design.           ║
 * ║  19 elements / 12 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: internal focus, negative L5 doublet moves toward the image.  ║
 * ║                                                                      ║
 * ║  Zoom variable gaps (zoom only): D5, D16, D19, D24.                  ║
 * ║  Focus variable gaps (zoom + focus): D25, D28.                       ║
 * ║  Zoom motion (Fig. 5 arrows + ¶0044 gaps, wide→tele, all toward the  ║
 * ║  object, monotonic): L1 75.38 mm, L3 21.82 mm, L4 10.97 mm, stop     ║
 * ║  38.65 mm, L5 40.99 mm (infinity). L2 and L6 fixed (dashed lines;    ║
 * ║  bf constant). Example 2 does NOT keep L4 fixed (claim 5 option).    ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING: None. Patent prescription is at production focal   ║
 * ║  lengths (205.04–486.97 mm). No scaling applied.                     ║
 * ║                                                                      ║
 * ║  NOTE ON APERTURE: one iris (zoom.apertureModel "fixed-iris"). ¶0016 ║
 * ║  says the independently moving stop keeps the iris diameter          ║
 * ║  constant; a real-ray trace confirms one iris radius                 ║
 * ║  (14.05–14.06 mm) reproduces the patent FNo 4.62 / 5.24 / 5.78 at    ║
 * ║  every station. The marketed constant f/5.6 is a production          ║
 * ║  diaphragm limit, not part of the patent example.                    ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: Patent provides no SDs. Values follow exact ║
 * ║  marginal/chief-ray envelopes at all three stations (FNo 4.62–5.78,  ║
 * ║  Y = 21.633 mm, ω 5.90–2.49°), checked against the Fig. 5 section    ║
 * ║  (scale 3.40 px/mm at 400 dpi, S1→IP = 309.32 mm). L1 ≈ 45.7, L2A    ║
 * ║  ≈ 19.3, L3 ≈ 25.0, L4 ≈ 24.4, stop ≈ 13.7, L5 ≈ 14.1, L6 ≈ 17.6 /   ║
 * ║  17.2 mm in the figure. L6 raised to 17.5 / 17.2 mm (old 10.0 / 6.5  ║
 * ║  blocked the full-field chief ray). L2B is held at 17.4–17.7 mm by   ║
 * ║  the 2.0 mm S11→S12 air gap (figure ≈ 19.3 mm); gapSagFrac = 0.96    ║
 * ║  lets S11 clear the f/4.62 axial bundle (17.33 mm).                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-afs-200-500f56e",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 200-500mm f/5.6 E ED VR",
  subtitle: "JP 2014-209144 A EXAMPLE 2 — NIKON / TAMRON",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "19 ELEMENTS / 12 GROUPS",
      "f = 205–487 mm",
      "F/4.62–5.78 (patent); F/5.6 (marketed)",
      "2ω ≈ 11.8–5.0°",
      "ALL SPHERICAL",
      "3 ED ELEMENTS",
    ],
    elementCount: 19,
    groupCount: 12,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: [200, 500], design: [205.04, 486.97] },
    fNumber: { marketing: 5.6, design: 4.62 },
  },

  source: {
    patentNumber: "JP 2014-209144 A",
    patentYear: 2014,
    authors: ["Taku Matsuo", "Takeshi Suzuki", "Haruo Sato", "Hisayuki Yamanaka"],
    assignees: ["Nikon Corporation", "Tamron Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -211.8,
      glass: "S-LAH65 (OHARA)",
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
      focalLengthMm: 205.2,
      glass: "J-FKH1 (Hikari) — ED fluorophosphate crown (498826)",
      apd: "inferred",
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
      focalLengthMm: 236.7,
      glass: "J-FKH1 (Hikari) — ED fluorophosphate crown (498826)",
      apd: "inferred",
      apdNote: "vd = 82.57, fluorophosphate crown family with anomalous partial dispersion",
      role: "Standalone positive singlet in front group; ED chromatic correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.60342,
      vd: 38.01,
      focalLengthMm: 115.7,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "Positive meniscus (both radii concave to object) cemented to L5 in the L2A subgroup",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -57.4,
      glass: "S-LAL18 (OHARA; exact patent coordinate match)",
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
      focalLengthMm: -71.6,
      glass: "517522 — crown (patent nd=1.51742, νd=52.15)",
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
      focalLengthMm: 104.1,
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
      focalLengthMm: -143.2,
      glass: "NBF1 (HOYA; exact 743492 coordinate)",
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
      focalLengthMm: 45.2,
      glass: "N-SK2 (Schott)",
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
      focalLengthMm: -59.3,
      glass: "N-SSK5 (Schott) — extra dense crown (658509)",
      apd: false,
      role: "Negative meniscus in L2C doublet",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -209.5,
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
      focalLengthMm: 71.6,
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
      focalLengthMm: 99.0,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA) [ED]",
      apd: "inferred",
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
      focalLengthMm: -97.2,
      glass: "NBFD10 (HOYA catalog equivalent for patent 834373; production supplier unspecified)",
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
      focalLengthMm: 139.2,
      glass: "NBF1 (HOYA; exact 743492 coordinate)",
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
      focalLengthMm: 97.2,
      glass: "E-FD2 (HOYA; exact 648338 coordinate)",
      apd: false,
      role: "Dense flint; positive element in focus doublet (G5)",
      cemented: "D7",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -42.8,
      glass: "S-LAL18 (OHARA; exact patent coordinate match)",
      apd: false,
      role: "Crown-negative in reversed focus doublet (G5)",
      cemented: "D7",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.58144,
      vd: 40.89,
      focalLengthMm: 131.4,
      glass: "E-FL5 (HOYA)",
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
      focalLengthMm: -121.7,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "Negative field-flattening singlet in fixed rear group (G6)",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // G1 (L1): Front objective — E1+E2 cemented doublet + E3 singlet
    { label: "1", R: 436.4287, d: 3.0, sd: 45.5, medium: 1 },
    { label: "2", R: 122.113, d: 11.5, sd: 45.5, medium: 2 },
    { label: "3", R: -605.0947, d: 0.3, sd: 45.5 },
    { label: "4", R: 125.4694, d: 11.0, sd: 45.5, medium: 3 },
    { label: "5", R: -1875.0633, sd: 44.0 }, // d5 = var wide∞

    // G2/L2A: E4+E5 cemented doublet (fixed during zoom)
    { label: "6", R: -496.2416, d: 4.1, sd: 18.5, medium: 4 },
    { label: "7", R: -61.4135, d: 1.5, sd: 18.5, medium: 5 },
    { label: "8", R: 132.4791, d: 5.1, sd: 18.5 },

    // G2/L2B (VR group): E6+E7 cemented doublet + E8 singlet
    // SDs held at 17.4–17.7 by the 2.0 mm S11→S12 air gap (gapSagFrac 0.96); Fig. 5 draws ≈19.3
    { label: "9", R: -188.3876, d: 1.5, sd: 17.5, medium: 6 },
    { label: "10", R: 46.2336, d: 3.8, sd: 17.5, medium: 7 },
    { label: "11", R: 99.3055, d: 2.0, sd: 17.4 },
    { label: "12", R: -411.8858, d: 1.7, sd: 17.7, medium: 8 },
    { label: "13", R: 143.7588, d: 3.0, sd: 17.7 },

    // G2/L2C: E9+E10 cemented doublet
    { label: "14", R: 153.9724, d: 9.5, sd: 19.5, medium: 9 },
    { label: "15", R: -32.5888, d: 1.7, sd: 20.5, medium: 10 },
    { label: "16", R: -200.7252, sd: 20.5 }, // d16 = var wide∞

    // G3 (L3): E11+E12 cemented doublet (moves 21.82 mm toward object, wide→tele)
    { label: "17", R: 121.8569, d: 1.7, sd: 24.0, medium: 11 },
    { label: "18", R: 73.6444, d: 10.0, sd: 24.0, medium: 12 },
    { label: "19", R: -63.3839, sd: 24.5 }, // d19 = var wide∞

    // G4 (L4): E13+E14 cemented doublet + E15 singlet (moves 10.97 mm toward object, wide→tele)
    { label: "20", R: 524.006, d: 7.6, sd: 24.5, medium: 13 },
    { label: "21", R: -54.0683, d: 1.7, sd: 24.0, medium: 14 },
    { label: "22", R: -164.5813, d: 0.2, sd: 24.0 },
    { label: "23", R: 69.2565, d: 4.3, sd: 24.0, medium: 15 },
    { label: "24", R: 203.8076, sd: 23.0 }, // d24 = var wide∞

    // Aperture stop (moves independently during zoom)
    { label: "STO", R: "flat" }, // d25 = var wide∞

    // G5 (L5): E16+E17 cemented doublet — focus group
    { label: "26", R: 151.8781, d: 3.1, sd: 13.5, medium: 16 },
    { label: "27", R: -106.5949, d: 1.1, sd: 13.0, medium: 17 },
    { label: "28", R: 44.3402, sd: 13.0 }, // d28 = var wide∞

    // G6 (L6): E18 singlet + E19 singlet (fixed); SDs from Fig. 5 (≈17.6 / 17.2 mm)
    { label: "29", R: -96.2691, d: 5.0, sd: 17.5, medium: 18 },
    { label: "30", R: -43.4021, d: 21.0392, sd: 17.5 },
    { label: "31", R: -40.3878, d: 1.5, sd: 17.2, medium: 19 },
    { label: "32", R: -68.1862, d: 54.3185, sd: 17.2 }, // bf (constant)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Variable air spacings ──
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
    // (moved from publishedStations) The close-focus row is source-tabulated.
    /* (moved from nominalFno) ── Aperture configuration ──
     *  Patent Example 2: FNo = 4.62 / 5.24 / 5.78 with a constant iris (¶0016); the fixed-iris model
     *  reproduces all three (stop radius 14.05–14.06 mm). Production: constant f/5.6, minimum f/32.
     */
    stations: [
      { focalLengthMm: 205.04, nominalFNumber: 4.62, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 299.98, nominalFNumber: 5.24, published: true, publishedFocus: [1] },
      { focalLengthMm: 486.97, nominalFNumber: 5.78, label: "Tele", published: true, publishedFocus: [1] },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 2.2,
    description: "Internal focus via G5 (L5) axial translation toward image. G5 is a negative cemented doublet.",
  },

  gaps: {
    // Zoom-only gaps (identical inf/close)
    "5": {
      label: "D5",
      values: [
        [52.077, 52.077],
        [83.8845, 83.8845],
        [127.4543, 127.4543],
      ],
    },
    "16": {
      label: "D16",
      values: [
        [23.8204, 23.8204],
        [10.7208, 10.7208],
        [2.0, 2.0],
      ],
    },
    "19": {
      label: "D19",
      values: [
        [1.5, 1.5],
        [8.8128, 8.8128],
        [12.3467, 12.3467],
      ],
    },
    "24": {
      label: "D24",
      values: [
        [32.6377, 32.6377],
        [23.5524, 23.5524],
        [4.9613, 4.9613],
      ],
    },
    // Zoom + focus gaps
    STO: {
      label: "D25",
      values: [
        [8.2078, 13.6845],
        [11.153, 21.5022],
        [5.8667, 26.1835],
      ],
    },
    "28": {
      label: "D28",
      values: [
        [19.8179, 14.3413],
        [31.7449, 21.3957],
        [60.8092, 40.4924],
      ],
    },
  },

  aperture: { fStops: [4.62, 5.6, 6.3, 8, 11, 16, 22, 32], maxFNumber: 32 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+) L1", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) L2 [fixed]", fromSurface: "6", toSurface: "16" },
    { text: "G3 (+) L3", fromSurface: "17", toSurface: "19" },
    { text: "G4 (+) L4", fromSurface: "20", toSurface: "24" },
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

  layout: { scFill: 0.48, yScFill: 0.5 },

  /* ── Layout tuning ── */
  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
