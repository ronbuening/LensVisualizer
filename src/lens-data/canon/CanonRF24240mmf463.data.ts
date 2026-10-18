import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON RF 24-240mm F4-6.3 IS USM             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0142167 A1, Numerical Data 1 (Example 1),   ║
 * ║  Canon / Kikuchi. Native patent scale (f = 24.72–232.80 mm).      ║
 * ║  Example 1 is the only 24–240 class example (Ex. 2 and 3 reach    ║
 * ║  295 / 280 mm; Ex. 4 and 5 are 24–200 mm four-unit designs).      ║
 * ║  Positive-lead 6-unit zoom: + − + + − − (LR = L4+L5+L6).         ║
 * ║  21 elements / 15 groups, 2 aspherical surfaces (1 element).      ║
 * ║                                                                    ║
 * ║  Zoom motion (FIG. 1 arrows, gap table): every unit moves toward  ║
 * ║  the object from wide to tele; none reverses. D31 and D34 are     ║
 * ║  individually non-monotonic (3.73→4.64→1.50, 15.54→14.63→17.77)  ║
 * ║  but D31 + D34 = 19.27 mm at all three stations, so L4 and L6     ║
 * ║  move as one (derived) while L5 floats between them. Total        ║
 * ║  length 142.00 → 183.82 → 214.00 mm.                              ║
 * ║                                                                    ║
 * ║  Focus: L5 (L18+L19 cemented) moves image-ward (¶0053, arrow 5c). ║
 * ║  The patent publishes no close-focus spacings, so the var pairs   ║
 * ║  are identical and the focus slider does not move any unit.       ║
 * ║  closeFocusM = 0.5 m is Canon's wide-end MFD (0.78 m at tele).    ║
 * ║                                                                    ║
 * ║  Back focus: the patent BF (= d37) is air-equivalent with no      ║
 * ║  glass block listed; stored as-is (infinity defocus ≤ 0.011 mm).  ║
 * ║  Aspheres: patent uses the standard (1 + k) conic form; k = 0 on  ║
 * ║  both surfaces, so K = 0.                                          ║
 * ║                                                                    ║
 * ║  Aperture: nominal F4.12 / 5.66 / 6.41. No iris diameters are     ║
 * ║  published, so the iris schedule is inferred from the FNO values  ║
 * ║  (radii: 6.63 / 7.64 / 8.16 mm).                                  ║
 * ║  The Numerical Data 1 patent surface table prints a stop          ║
 * ║  effective diameter of 16.32 mm (8.16 mm radius), equal to the    ║
 * ║  inferred tele iris radius.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Every sd is the patent's tabulated effective diameter / 2      ║
 * ║    (2026-09-23 audit removed earlier enlargements of up to        ║
 * ║    +1.25 mm in units 2 and 3 that had no patent basis). Unit-3    ║
 * ║    diameters equal the tele axial beam; a real trace at the       ║
 * ║    patent field angles shows no axial clipping or chief-ray       ║
 * ║    blocking.                                                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf24-240-f4-63",
  maker: "Canon",
  name: "CANON RF 24-240mm f/4-6.3 IS USM",
  subtitle: "US 2020/0142167 A1 EXAMPLE 1 — CANON / KIKUCHI",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "21 ELEMENTS / 15 GROUPS",
      "f ≈ 24.7–232.8 mm",
      "F/4.12–6.41",
      "2ω ≈ 75.1–10.6°",
      "2 ASPHERICAL SURFACES (1 ELEMENT)",
      "2 UD (ULTRA-LOW DISPERSION) ELEMENTS",
    ],
    elementCount: 21,
    groupCount: 15,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: [24, 240], design: [24.72, 232.8] },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2020/0142167 A1",
    patentYear: 2020,
    authors: ["Shohei Kikuchi"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -160.9,
      glass: "S-LAH95 type (903/313)",
      apd: false,
      role: "Front collector — high-index negative meniscus for SA / field curvature control",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 126.6,
      glass: "S-FPL51 type (497/815)",
      apd: "inferred",
      apdNote: "UD (Ultra-low Dispersion) — fluorophosphate crown, νd = 81.5",
      role: "Achromatic partner to L1 — UD element for primary chromatic correction",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 123.7,
      glass: "S-PHM52 type (618/634)",
      apd: false,
      role: "Front group positive power contributor; meniscus form for SA correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.8515,
      vd: 40.8,
      focalLengthMm: -26.5,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      role: "Variator — primary negative power element with strong rear curvature",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.8515,
      vd: 40.8,
      focalLengthMm: -29.5,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      role: "Variator — second negative element for beam divergence",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 25.1,
      glass: "E-FDS1 (HOYA)",
      apd: false,
      role: "Variator chromatic corrector — high-dispersion positive for LoCA control",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -40.3,
      glass: "S-LAH66 type (773/496)",
      apd: false,
      role: "Variator trailing negative — shapes exit beam and corrects higher-order aberrations",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.5,
      focalLengthMm: 34.5,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Subunit X front — converges beam entering the IS unit",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Plano-Convex Positive",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: 34.1,
      glass: "PBL25 (OHARA catalog equivalent; patent code 581408, vendor unspecified)",
      apd: false,
      role: "Subunit X achromat positive — cemented to L10",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Plano-Concave Negative",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: -20.5,
      glass: "S-LAH99 (OHARA catalog equivalent; patent code 001291, vendor unspecified)",
      apd: false,
      role: "Subunit X achromat negative — ultra-high index for compact power",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: -40.9,
      glass: "TAFD40 (HOYA catalog equivalent; patent code 001255, vendor unspecified)",
      apd: false,
      role: "IS doublet negative — shifts ⊥ to axis for image stabilization",
      cemented: "D5",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 43.7,
      focalLengthMm: 20.6,
      glass: "S-LAM52 (OHARA; 720/437)",
      apd: false,
      role: "IS doublet positive — provides net positive power to IS subunit Y",
      cemented: "D5",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: -31.0,
      glass: "S-LAH99 (OHARA catalog equivalent; patent code 001291, vendor unspecified)",
      apd: false,
      role: "Subunit Z — amplifies IS angular correction, reduces required shift distance",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      focalLengthMm: 105.0,
      glass: "Unmatched (531559; material not stated in patent, resin-class coordinate; patent nd=1.53110, vd=55.9)",
      apd: false,
      role: "Aspherical relay element — corrects SA, coma, and field curvature across zoom",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -99.6,
      glass: "S-NBH56 (OHARA)",
      apd: false,
      role: "Relay achromat negative — cemented to L16",
      cemented: "D6",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 39.3,
      glass: "FCD515 (HOYA catalog-equivalent; production supplier unspecified)",
      apd: false,
      role: "Relay achromat positive — primary chromatic correction for unit 4",
      cemented: "D6",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 47.0,
      glass: "S-FPL51 type (497/815)",
      apd: "inferred",
      apdNote: "UD (Ultra-low Dispersion) — fluorophosphate crown, νd = 81.5",
      role: "Second UD element — chromatic correction where off-axis rays diverge",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 166.3,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Focus doublet front — cemented to L19, moves image-ward for close focus",
      cemented: "D7",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.4,
      focalLengthMm: -40.0,
      glass: "S-BSM18 (OHARA)",
      apd: false,
      role: "Focus doublet rear — provides negative power for rear focus mechanism",
      cemented: "D7",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -32.0,
      glass: "S-LAH55 (OHARA; exact 835427 coordinate match, patent vendor unspecified)",
      apd: false,
      role: "Field corrector negative — field flattening and telecentricity",
      cemented: "D8",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 43.2,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Field corrector positive — residual chromatic and field curvature correction",
      cemented: "D8",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Unit 1: Front Positive Collector (f = +103.63 mm) ──
    { label: "1", R: 131.399, d: 1.85, sd: 28.415, medium: 1 }, // L1 front
    { label: "2", R: 68.561, d: 8.49, sd: 27.72, medium: 2 }, // L1→L2 junction
    { label: "3", R: -730.653, d: 0.15, sd: 27.56 }, // L2 rear → air
    { label: "4", R: 68.792, d: 6.48, sd: 26.76, medium: 3 }, // L3 front
    { label: "5", R: 664.437, sd: 26.38 }, // L3 rear → air (zoom var)

    // ── Unit 2: Variator (f = −16.74 mm) ──
    { label: "6", R: 243.528, d: 1.28, sd: 13.795, medium: 4 }, // L4 front
    { label: "7", R: 20.583, d: 4.73, sd: 11.19 }, // L4 rear → air
    { label: "8", R: -56.381, d: 1.09, sd: 10.985, medium: 5 }, // L5 front
    { label: "9", R: 45.818, d: 0.46, sd: 10.39 }, // L5 rear → air
    { label: "10", R: 35.871, d: 4.51, sd: 10.29, medium: 6 }, // L6 front
    { label: "11", R: -61.247, d: 0.84, sd: 9.82 }, // L6 rear → air
    { label: "12", R: -32.368, d: 1.03, sd: 9.725, medium: 7 }, // L7 front
    { label: "13", R: 821.472, sd: 9.32 }, // L7 rear → air (zoom var)

    // ── Unit 3: Correction Group with IS — XYZ (f = +60.67 mm) ──
    // US 2020/0142167 A1, Numerical Data 1 surface table, surface 14: printed effective
    // diameter 16.32 mm at the stop.
    { label: "STO", R: "flat", d: 0.35 }, // Aperture stop
    // Subunit X (positive, f = +55.81 mm)
    { label: "15", R: 27.034, d: 3.05, sd: 8.515, medium: 8 }, // L8 front
    { label: "16", R: -852.68, d: 0.15, sd: 8.46 }, // L8 rear → air
    { label: "17", R: 19.84, d: 3.53, sd: 8.325, medium: 9 }, // L9 front
    { label: "18", R: "flat", d: 0.82, sd: 7.975, medium: 10 }, // L9→L10 junction (flat)
    { label: "19", R: 20.522, d: 2.7, sd: 7.605 }, // L10 rear → air
    // Subunit Y (positive, IS shift element, f = +41.45 mm)
    { label: "20", R: 35.803, d: 0.8, sd: 7.75, medium: 11 }, // L11 front
    { label: "21", R: 18.888, d: 3.99, sd: 7.63, medium: 12 }, // L11→L12 junction
    { label: "22", R: -63.451, d: 2.27, sd: 7.595 }, // L12 rear → air
    // Subunit Z (negative, f = −30.98 mm)
    { label: "23", R: -26.036, d: 0.8, sd: 7.4, medium: 13 }, // L13 front
    { label: "24", R: -164.761, sd: 7.55 }, // L13 rear → air (zoom var)

    // ── Unit 4: Relay / Compensator (f = +22.87 mm) ──
    {
      label: "25A",
      R: 45.628,
      d: 2.42,
      sd: 10.79,
      medium: 14,
      asphere: { K: 0, A4: -3.69428e-6, A6: -1.81514e-7, A8: 1.12707e-9, A10: -1.37724e-11, A12: 4.19334e-14, A14: 0 },
    }, // L14 front (asph)
    {
      label: "26A",
      R: 246.555,
      d: 0.9,
      sd: 11.285,
      asphere: { K: 0, A4: 2.68822e-5, A6: -1.85641e-7, A8: 9.59349e-10, A10: -1.18429e-11, A12: 3.67346e-14, A14: 0 },
    }, // L14 rear (asph) → air
    { label: "27", R: -170.519, d: 1.25, sd: 11.375, medium: 15 }, // L15 front
    { label: "28", R: 170.589, d: 5.53, sd: 11.91, medium: 16 }, // L15→L16 junction
    { label: "29", R: -26.647, d: 0.15, sd: 12.54 }, // L16 rear → air
    { label: "30", R: 45.538, d: 6.19, sd: 13.64, medium: 17 }, // L17 front
    { label: "31", R: -45.788, sd: 13.69 }, // L17 rear → air (zoom var)

    // ── Unit 5: Focus Group (f = −53.51 mm) ──
    { label: "32", R: 93.245, d: 1.81, sd: 12.785, medium: 18 }, // L18 front
    { label: "33", R: 304.63, d: 1.1, sd: 12.635, medium: 19 }, // L18→L19 junction
    { label: "34", R: 23.508, sd: 12.06 }, // L19 rear → air (zoom var)

    // ── Unit 6: Rear Field Corrector (f = −138.27 mm) ──
    { label: "35", R: -53.59, d: 1.28, sd: 13.595, medium: 20 }, // L20 front
    { label: "36", R: 53.854, d: 4.88, sd: 14.63, medium: 21 }, // L20→L21 junction
    { label: "37", R: -109.597, sd: 15.0 }, // L21 rear → BFD (zoom var)
  ],

  zoom: {
    /* (moved from zoomPositions) ── Variable air spacings (zoom only — no close-focus data in patent) ──
     *  All 6 inter-unit gaps change during zooming. Patent does not provide
     *  close-focus spacings, so all entries use identical inf/close pairs.
     *  Focus is via L5 (unit 5): d31 expands, d34 contracts when focusing close.
     */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 24.72, nominalFNumber: 4.12, label: "Wide" },
      { focalLengthMm: 85.0, nominalFNumber: 5.66 },
      { focalLengthMm: 232.8, nominalFNumber: 6.41, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.5,
    description:
      "Rear inner focus via unit 5 (L18+L19 cemented doublet). L5 moves toward image for close focus. Canon Nano USM actuator.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.34, 1.34],
        [32.74, 32.74],
        [59.28, 59.28],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [22.25, 22.25],
        [8.64, 8.64],
        [2.35, 2.35],
      ],
    },
    "24": {
      label: "D24",
      values: [
        [8.46, 8.46],
        [3.21, 3.21],
        [1.0, 1.0],
      ],
    },
    "31": {
      label: "D31",
      values: [
        [3.73, 3.73],
        [4.64, 4.64],
        [1.5, 1.5],
      ],
    },
    "34": {
      label: "D34",
      values: [
        [15.54, 15.54],
        [14.63, 14.63],
        [17.77, 17.77],
      ],
    },
    "37": {
      label: "BF",
      values: [
        [15.78, 15.78],
        [45.06, 45.06],
        [57.2, 57.2],
      ],
    },
  },

  aperture: { fStops: [4.12, 4.5, 5, 5.6, 6.3, 7.1, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Group annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (−)", fromSurface: "6", toSurface: "13" },
    { text: "L3 / XYZ (+)", fromSurface: "STO", toSurface: "24" },
    { text: "L4 (+)", fromSurface: "25A", toSurface: "31" },
    { text: "L5 (−) FOCUS", fromSurface: "32", toSurface: "34" },
    { text: "L6 (−)", fromSurface: "35", toSurface: "37" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D4", fromSurface: "17", toSurface: "19" },
    { text: "D5 (IS)", fromSurface: "20", toSurface: "22" },
    { text: "D6", fromSurface: "27", toSurface: "29" },
    { text: "D7 (Focus)", fromSurface: "32", toSurface: "34" },
    { text: "D8", fromSurface: "35", toSurface: "37" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
