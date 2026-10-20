import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY FE 16-35mm f/2.8 GM                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2018/139160 A1, Numerical Example 4 (Fig. 13,       ║
 * ║    Tables 13–16, 21–22), Sony Corporation (Katou, Nose).             ║
 * ║  Five-group negative-lead (− + + + −) full-frame wide-angle zoom.    ║
 * ║  16 elements / 13 groups (Sony count); L2 is a glass + resin hybrid  ║
 * ║    asphere, modeled as two entries (17 element entries).             ║
 * ║  7 aspherical surfaces on 5 elements (L1 ×2, L2 resin, L7 ×2, L10,   ║
 * ║    L16).                                                             ║
 * ║  Focus: patent floating inner focus — G2 (L5) and G4 (L8–L10) move   ║
 * ║    image-ward ([0021]). The patent publishes infinity states only,   ║
 * ║    so the close-focus spacings repeat the infinity spacings at       ║
 * ║    every zoom station and no focus travel is modeled.                ║
 * ║                                                                      ║
 * ║  Zoom variable gaps: D9 = D(1), D11 = D(2), DSTO = D(3),             ║
 * ║    D21A = D(4), D31 = D(5) (zoom only in this model).                ║
 * ║  Reversing groups: G2 vertex moves object-ward then slightly back    ║
 * ║    (−105.93 → −109.05 → −108.85 mm from the image plane).            ║
 * ║  G1 ends 14.44 mm further image-ward at tele than at wide.           ║
 * ║                                                                      ║
 * ║  NOTE ON SOURCE CORRECTION: Table 13 prints s25 Nd 1.969970 (νd      ║
 * ║    81.6), which matches no glass, gives f = 7.91 mm at wide against  ║
 * ║    the stated 16.5 mm, and makes G5 positive (+48.5 mm) against the  ║
 * ║    negative fifth group of claim 1. The model uses 1.496997, the     ║
 * ║    value of the same ED element in Examples 2 and 5; it reproduces   ║
 * ║    the stated f and Table 22 5G = −80.40 mm (source.errata).         ║
 * ║  NOTE ON EFL: the printed prescription computes 16.52 / 22.96 /      ║
 * ║    34.02 mm (+0.22 to +0.24% vs Table 16) with paraxial image        ║
 * ║    residuals of +0.11 / +0.09 / +0.01 mm. Values are not edited.     ║
 * ║  NOTE ON ASPHERES: printed numerator y²c² read as standard y²c;      ║
 * ║    (1+K) conic form, K used directly; A4–A12 as published.           ║
 * ║  NOTE ON SCALING: none (patent scale).                               ║
 * ║  NOTE ON SEMI-DIAMETERS: not tabulated. Element radii are scaled     ║
 * ║    from the to-scale Fig. 13 section (13.13 px/mm fit, ±0.15 mm)     ║
 * ║    and checked against real f/2.88 axial and field rays. L3 (18.0)   ║
 * ║    sits under the drawn 18.4 mm for the s5A→s6 gap-sag limit.        ║
 * ║    L15's rear face s29 stops at 12.2 mm because it would cross       ║
 * ║    L16's front face near 12.6 mm; L16 is square at 13.0 mm, level    ║
 * ║    with L14/L15 as Fig. 13 draws it.                                 ║
 * ║  NOTE ON STOP: s16 (IRIS) position is published; its diameter is     ║
 * ║    not. The iris is sized for f/2.88 at each zoom station            ║
 * ║    (semi-diameter 9.165 / 11.410 / 14.965 mm, wide to tele).         ║
 * ║  Rear plate: cover glass s32–s33 in rearPlates; s31 d is D(5).       ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-fe-16-35mm-f28-gm",
  maker: "Sony",
  name: "SONY FE 16-35mm f/2.8 GM",
  subtitle: "WO 2018/139160 A1, Example 4 — production correlation",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 13 GROUPS",
      "DESIGN f = 16.5–33.95 mm",
      "DESIGN F/2.88",
      "7 ASPHERICAL SURFACES / 5 ELEMENTS",
    ],
    elementCount: 16,
    groupCount: 13,
    focalLengthMm: { marketing: [16, 35], design: [16.5, 33.95] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "WO 2018/139160 A1",
    patentYear: 2018,
    authors: ["Kouji Katou", "Hiromichi Nose"],
    assignees: ["Sony Corporation"],
    errata: [
      {
        status: "corrected",
        surface: "25",
        field: "nd",
        printed: 1.96997,
        applied: 1.496997,
        evidence: ["sibling-example", "source-summary", "claims"],
        note: "Table 13 prints 1.969970 at νd 81.6; Examples 2 (surfaces 20, 23) and 5 (surface 24) print 1.496997 / 81.6 for the same ED element. The printed value gives f = 7.91 / 9.61 / 12.17 mm against the stated 16.5 / 22.91 / 33.95 mm and a positive fifth group (+48.5 mm) against claim 1's negative one; 1.496997 gives 16.52 / 22.96 / 34.02 mm and G5 = −80.40 mm (Table 22).",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.768015,
      vd: 49.2,
      focalLengthMm: -38.4,
      glass: "M-TAF101 (HOYA)",
      apd: false,
      role: "Front negative meniscus asphere of G1; leads the retrofocus layout and controls wide-end distortion.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.834805,
      vd: 42.7,
      focalLengthMm: -104.9,
      glass: "S-LAH55V (OHARA) / TAFD5F (HOYA)",
      apd: false,
      role: "Glass body of the L2 hybrid asphere; second negative meniscus of G1.",
      diagramLabel: "L2",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L2r",
      label: "Element 2 resin layer",
      type: "Resin Layer (1× Asph)",
      nd: 1.5342,
      vd: 41.7,
      focalLengthMm: 2723,
      glass: "Unmatched (UV-cured resin layer of hybrid asphere, nd 1.5342 / νd 41.7)",
      apd: false,
      role: "Thin aspheric resin layer bonded to the rear of L2 (patent [0113]); carries the s5 asphere.",
      diagramLabel: "L2r",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -44.4,
      glass: "S-LAH66 (OHARA) / TAF1 (HOYA)",
      apd: false,
      role: "Biconcave negative element completing the strong negative power of G1.",
      diagramLabel: "L3",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.912366,
      vd: 21.9,
      focalLengthMm: 72.6,
      glass: "Unmatched (dense titanium flint, nd 1.912366 / νd 21.9; nearest catalog row outside runtime window)",
      apd: false,
      role: "High-dispersion positive meniscus closing G1; chromatic partner to the negative G1 elements.",
      diagramLabel: "L4",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.658436,
      vd: 50.9,
      focalLengthMm: 66.5,
      glass: "S-BSM25 (OHARA) / BACED5 (HOYA)",
      apd: false,
      role: "Sole element of G2, the first focus group (moves image-ward when focusing close).",
      diagramLabel: "L5",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.834287,
      vd: 39.1,
      focalLengthMm: -82.3,
      glass: "Unmatched (lanthanum flint, nd 1.834287 / νd 39.1)",
      apd: false,
      role: "Negative meniscus, convex to the image, leading G3 ahead of the stop.",
      diagramLabel: "L6",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      focalLengthMm: 68.1,
      glass: "M-BACD12 (HOYA) / L-BAL42 (OHARA)",
      apd: false,
      role: "Double-aspheric positive element immediately ahead of the stop; near-pupil spherical aberration control.",
      diagramLabel: "L7",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.723417,
      vd: 38,
      focalLengthMm: -87.3,
      glass: "S-BAH28 (OHARA) / BAFD8 (HOYA)",
      apd: false,
      role: "Negative meniscus front component of the G4 cemented doublet.",
      diagramLabel: "L8",
      cemented: "C1",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.487489,
      vd: 70.4,
      focalLengthMm: 56,
      glass: "S-FSL5 (OHARA) / FC5 (HOYA)",
      apd: false,
      role: "Low-dispersion positive rear component of the G4 doublet.",
      diagramLabel: "L9",
      cemented: "C1",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 52.5,
      glass: "M-LAC130 (HOYA) / J-LAK13 (HIKARI)",
      apd: false,
      role: "Aspheric biconvex element closing G4, the second (floating) focus group.",
      diagramLabel: "L10",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.550084,
      vd: 75.5,
      focalLengthMm: 39.4,
      glass: "FCD705 (HOYA) class, ED fluorophosphate",
      apd: "inferred",
      apdNote: "FCD705-class fluorophosphate coordinate at one of the two rear-group ED positions in Sony's diagram; the patent gives nd/νd only.",
      role: "ED positive front component of the first G5 doublet; lateral-color correction.",
      diagramLabel: "L11",
      cemented: "C2",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.901747,
      vd: 34.6,
      focalLengthMm: -22,
      glass: "Unmatched (lanthanum dense flint, nd 1.901747 / νd 34.6)",
      apd: false,
      role: "Strong biconcave negative rear component of the first G5 doublet.",
      diagramLabel: "L12",
      cemented: "C2",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.496997,
      vd: 81.6,
      focalLengthMm: 34.1,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA), ED fluorophosphate",
      apd: "inferred",
      apdNote:
        "S-FPL51/FCD1-class coordinate at the second rear-group ED position in Sony's diagram (index corrected from the printed 1.969970, see source errata).",
      role: "ED biconvex singlet of G5; principal positive low-dispersion element of the rear group.",
      diagramLabel: "L13",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 25.1,
      glass: "E-FDS1 (HOYA) / H-ZF62 (CDGM)",
      apd: false,
      role: "Very high-index, high-dispersion positive front component of the second G5 doublet.",
      diagramLabel: "L14",
      cemented: "C3",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.903658,
      vd: 31.3,
      focalLengthMm: -18.8,
      glass: "TAFD25 (HOYA) / H-ZLaF75A (CDGM)",
      apd: false,
      role: "Biconcave negative rear component of the second G5 doublet.",
      diagramLabel: "L15",
      cemented: "C3",
    },
    {
      id: 17,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.882023,
      vd: 37.2,
      focalLengthMm: -79.6,
      glass: "M-TAFD307 (HOYA)",
      apd: false,
      role: "Rear aspheric negative element; field flattening and off-axis correction ahead of the sensor.",
      diagramLabel: "L16",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 351.608,
      d: 2.8,
      sd: 29.2,
      medium: 1,
      asphere: { K: 1.0, A4: 1.68e-5, A6: -2.85e-8, A8: 2.87e-11, A10: -1.66e-14, A12: 4.23e-18 },
    },
    {
      label: "2A",
      R: 27.11,
      d: 6.265,
      sd: 19.8,
      asphere: { K: 0.205, A4: 1.13e-5, A6: 6.52e-9, A8: -2.52e-11, A10: -5.69e-14 },
    },
    { label: "3", R: 38.181, d: 1.86, sd: 21.1, medium: 2 },
    { label: "4", R: 26.0, d: 0.15, sd: 21.1, medium: 3 }, // L2 glass / resin junction
    {
      label: "5A",
      R: 26.42,
      d: 10.24,
      sd: 21.1,
      asphere: { K: -0.81, A4: 9.84e-6, A6: -2.71e-8, A8: 5.12e-11, A10: 8.45e-14 },
    },
    { label: "6", R: -101.224, d: 1.8, sd: 18.0, medium: 4 },
    { label: "7", R: 52.228, d: 0.4, sd: 18.0 },
    { label: "8", R: 52.162, d: 4.022, sd: 17.6, medium: 5 },
    { label: "9", R: 236.214, sd: 17.6 }, // D(1)
    { label: "10", R: 104.61, d: 3.85, sd: 14.5, medium: 6 },
    { label: "11", R: -74.272, sd: 14.5 }, // D(2)
    { label: "12", R: -48.0, d: 1.1, sd: 14.9, medium: 7 },
    { label: "13", R: -161.271, d: 0.4, sd: 14.9 },
    { label: "14A", R: 41.935, d: 4.058, sd: 15.6, medium: 8, asphere: { A4: -5.38e-6, A6: -7.41e-9 } },
    { label: "15A", R: -726.966, d: 3.1, sd: 15.6, asphere: { A4: -2.09e-6, A6: -7.1e-9, A8: 1.14e-12 } },
    { label: "STO", R: "flat" }, // patent s16 IRIS; D(3)
    { label: "17", R: 34.858, d: 1.6, sd: 16.3, medium: 9 },
    { label: "18", R: 22.03, d: 6.543, sd: 16.3, medium: 10 }, // L8 / L9 junction
    { label: "19", R: 103.207, d: 0.4, sd: 16.3 },
    { label: "20", R: 79.712, d: 4.173, sd: 15.5, medium: 11 },
    { label: "21A", R: -65.576, sd: 15.5, asphere: { A4: 3.62e-6, A6: -3.59e-9, A8: -3.4e-12 } }, // D(4)
    { label: "22", R: 131.01, d: 5.174, sd: 13.0, medium: 12 },
    { label: "23", R: -25.597, d: 1.5, sd: 13.0, medium: 13 }, // L11 / L12 junction
    { label: "24", R: 90.717, d: 0.4, sd: 13.0 },
    { label: "25", R: 29.497, d: 6.118, sd: 13.5, medium: 14 }, // Table 13 prints nd 1.969970; corrected to 1.496997 (source.errata)
    { label: "26", R: -36.964, d: 0.4, sd: 13.5 },
    { label: "27", R: 156.819, d: 4.72, sd: 13.0, medium: 15 },
    { label: "28", R: -26.738, d: 1.0, sd: 13.0, medium: 16 }, // L14 / L15 junction
    { label: "29", R: 47.217, d: 2.811, sd: 12.2 },
    {
      label: "30A",
      R: -1106.462,
      d: 1.5,
      sd: 13.0,
      medium: 17,
      asphere: { A4: -2.77e-5, A6: -3.94e-8, A8: -2.35e-10 },
    },
    { label: "31", R: 75.0, sd: 13.0 }, // D(5): physical gap to cover glass
  ],

  zoom: {
    stations: [
      { focalLengthMm: 16.5, label: "16 mm" },
      { focalLengthMm: 22.91 },
      { focalLengthMm: 33.95, label: "35 mm" },
    ],
    apertureModel: "from-nominal-fno",
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.28,
    description:
      "Floating inner focus: the patent moves G2 (L5) and G4 (L8–L10) toward the image when focusing close, matching Sony's two-motor floating system. The patent tabulates infinity focus only and does not give the travel of either group, so the model has no focus travel; 0.28 m is Sony's marketed minimum focus distance.",
  },

  gaps: {
    "9": {
      label: "D(1) G1–G2",
      values: [
        [21.06, 21.06],
        [9.43, 9.43],
        [3.7, 3.7],
      ],
    },
    "11": {
      label: "D(2) G2–G3",
      values: [
        [20.76, 20.76],
        [19.16, 19.16],
        [8.82, 8.82],
      ],
    },
    STO: {
      label: "D(3) STO–G4",
      values: [
        [10.91, 10.91],
        [5.38, 5.38],
        [2.5, 2.5],
      ],
    },
    "21A": {
      label: "D(4) G4–G5",
      values: [
        [4.49, 4.49],
        [6.96, 6.96],
        [9.35, 9.35],
      ],
    },
    "31": {
      label: "D(5) G5–CG",
      values: [
        [17.42, 17.42],
        [25.2, 25.2],
        [35.83, 35.83],
      ],
    },
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.8, 3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 11 },

  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.5,
      nd: 1.516798,
      vd: 64.2,
      glass: "S-BSL7 (OHARA) / N-BK7 (Schott)",
      gapAfterMm: 1.0,
      source: "WO 2018/139160 A1, Example 4 Table 13 surfaces 32–33; BF = 1.00 mm from Table 16",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "9" },
    { text: "G2 focus", fromSurface: "10", toSurface: "11" },
    { text: "G3", fromSurface: "12", toSurface: "15A" },
    { text: "G4 focus", fromSurface: "17", toSurface: "21A" },
    { text: "G5", fromSurface: "22", toSurface: "31" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "C1", fromSurface: "17", toSurface: "19" },
    { text: "C2", fromSurface: "22", toSurface: "24" },
    { text: "C3", fromSurface: "27", toSurface: "29" },
  ],

  layout: { scFill: 0.62, yScFill: 0.6 },
} satisfies LensDataV2Input;

export default LENS_DATA;
