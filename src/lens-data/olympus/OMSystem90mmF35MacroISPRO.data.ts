/**
 * OM SYSTEM M.ZUIKO DIGITAL ED 90mm f/3.5 MACRO IS PRO
 * JP 2024-066164 A, Example 1. R, d, Nd and νd are as printed (scale 1, d-line).
 * The match to the production lens is inferred from the published construction
 * and specifications; the manufacturer has not confirmed it.
 *
 * FOCUS: all four printed magnification states (infinity, 0.5x, 1x, 2x) are
 * kept. Focus-scale labels are derived from the rounded paraxial magnification
 * of each state; they are not published object distances. The small residual
 * defocus that the rounded table leaves at each state is kept, and the file
 * has no finiteConjugates entry.
 *
 * REAR PLATE: the camera-side plate OF is in rearPlates; surface 32 keeps its
 * printed 30.649 mm air gap.
 *
 * GROUPS: bracket labels follow Fig. 2. G1, G2 and G3 are labelled whole; the
 * fixed fourth group carries the figure's three subgroup brackets, G4a (L12),
 * G4b (L13 to L15, the image-stabilizing unit, labelled G4b/IS) and G4c (L16
 * to L18). D1 to D5 are the five cemented pairs; D9, D14, D15 and D20 in the
 * focus panel are the patent's own names for the four variable air gaps.
 *
 * SEMI-DIAMETERS: estimated from patent Fig. 2 (both panels read at the native
 * 452 dpi, 0.0898 mm/px from the vertex spans) and floor-checked by exact
 * real-ray trace at the four published focus states; no clear apertures are
 * published. Rims keep the drawn steps: L1 stands above L2, and the front
 * member above the rear one at the L3/L4, L6/L7, L13/L14 and L17/L18 joints
 * (each junction carries the smaller member's value, so the taller member
 * renders with a tapered rim). Surface 25 stops at 9.1 mm, where the figure
 * ends the concave face in a flat land; L14's blank is drawn to 10.0 mm.
 * With the iris held at its infinity size the 2x on-axis object beam is
 * limited by L5's drawn rim, not by the stop.
 *
 * STOP: radius derived from the design f-number, Fig. 3A's FNO 3.638 (the
 * table rounds to 3.64); this is not independent evidence of the iris size.
 * The printed finite-state FNO values 2.71 / 1.61 / 0.51 (figures 2.714 /
 * 1.607 / 0.509) are recorded but not imposed. Fig. 2(B) draws the 2x stop at
 * 6.6 ± 0.15 mm half-height against 9.3 mm at infinity; the model keeps the
 * infinity iris at every focus state. The full-aperture ends of the
 * spherical-aberration curves in Figs. 3 and 4 (about -0.15, +0.02 and
 * -0.27 mm at 0.5x, 1x and 2x) are reproduced with stops of 7.8, 7.0 and
 * 6.5 mm, the sizes the printed FNO values imply; the derived 9.172 mm
 * infinity iris would give +0.32 and +0.23 mm at 1x and 2x.
 *
 * CLOSE-FOCUS ANALYSIS LIMITS: ray fans at 1x and 2x are sparse. The off-axis
 * chromatic spread can fall back to the chief ray alone, the spherical-
 * aberration summary is unavailable, the near-focus bokeh preview may keep only
 * 7–13 of 337 points, and some panels send collimated light through the
 * close-focus configuration. Finite-object MTF is unavailable and off-axis
 * behavior for a finite object is not established. Rays that miss a clear
 * aperture are blocked; the fraction that passes is a geometric count, not
 * measured throughput.
 *
 * GLASS: catalog names are spectral analogues that match the printed nd/νd.
 * No supplier, melt, nC/nF/ng or apochromatic performance is asserted. The apd
 * tags on L5 and L10 (Super ED class) and on L2, L3, L8 and L11 (ED class) are
 * class-level matches to the maker's published element counts.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "om-system-mzuiko-digital-ed-90mm-f35-macro-is-pro",
  maker: "Olympus",
  name: "OM SYSTEM M.ZUIKO DIGITAL ED 90mm f/3.5 MACRO IS PRO",
  subtitle: "JP 2024-066164 A, Example 1 — production correlation unconfirmed",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    imageCircleMm: 21.64,
    specs: ["18 ELEMENTS / 13 GROUPS", "DESIGN f = 88.21 mm", "DESIGN F/3.64", "ALL SPHERICAL", "FOCUS TO 2× (PATENT)"],
    elementCount: 18,
    groupCount: 13,
    acceptsTeleconverters: true, // OM SYSTEM lists MC-14 / MC-20 teleconverter compatibility
    focalLengthMm: { marketing: 90, design: 88.21 },
    fNumber: { marketing: 3.5, design: 3.638 },
  },

  source: {
    patentNumber: "JP 2024-066164 A",
    patentYear: 2024,
    authors: ["Yasuharu Yamada"],
    assignees: ["OM Digital Solutions Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.23,
      indexReference: "d",
      focalLengthMm: -153.862232,
      glass: "S-FSL5",
      role: "Negative meniscus, convex to the object, at the front of the fixed first group.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      indexReference: "d",
      focalLengthMm: 79.887679,
      glass: "FCD515",
      apd: "inferred",
      apdNote:
        "νd 68.62 glass, tagged by class as one of the four ED elements the maker lists by count only; no maker construction diagram was viewed.",
      role: "First positive element of the fixed first group.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      indexReference: "d",
      focalLengthMm: 44.543648,
      glass: "FCD515",
      apd: "inferred",
      apdNote:
        "νd 68.62 glass, tagged by class as one of the four ED elements the maker lists by count only; no maker construction diagram was viewed.",
      role: "Positive member of the cemented doublet D1 in the fixed first group.",
      diagramLabel: "L3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      focalLengthMm: -57.584823,
      glass: "TAFD55",
      role: "High-index negative meniscus cemented behind L3 in D1.",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.66,
      indexReference: "d",
      focalLengthMm: 58.407209,
      glass: "S-FPL55",
      apd: "inferred",
      apdNote:
        "νd 94.66 glass, tagged by class as one of the two Super ED elements the maker lists by count only; no maker construction diagram was viewed.",
      role: "Last positive element of the fixed first group, ahead of the moving negative group.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: 48.811801,
      glass: "S-TIH53",
      role: "Positive meniscus at the front of the negative focus group G2, cemented to L7 as D2.",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.53,
      indexReference: "d",
      focalLengthMm: -30.66185,
      glass: "S-LAL14",
      role: "Biconcave negative member of D2 in the focus group G2.",
      diagramLabel: "L7",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: -40.510485,
      glass: "S-FPL51",
      apd: "inferred",
      apdNote:
        "νd 81.54 glass, tagged by class as one of the four ED elements the maker lists by count only; no maker construction diagram was viewed.",
      role: "Biconcave rear element of the negative focus group G2, ahead of the stop.",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.7888,
      vd: 28.43,
      indexReference: "d",
      focalLengthMm: -84.756305,
      glass: "S-NBH58",
      role: "Negative meniscus leading the positive focus group G3 behind the stop, cemented to L10 as D3.",
      diagramLabel: "L9",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.66,
      indexReference: "d",
      focalLengthMm: 45.910808,
      glass: "S-FPL55",
      apd: "inferred",
      apdNote:
        "νd 94.66 glass, tagged by class as one of the two Super ED elements the maker lists by count only; no maker construction diagram was viewed.",
      role: "Positive member of D3 in the focus group G3.",
      diagramLabel: "L10",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 56.079833,
      glass: "FCD1",
      apd: "inferred",
      apdNote:
        "νd 81.61 glass, tagged by class as one of the four ED elements the maker lists by count only; no maker construction diagram was viewed.",
      role: "Positive rear element of the focus group G3.",
      diagramLabel: "L11",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.43,
      indexReference: "d",
      focalLengthMm: -103.012633,
      glass: "S-NSL36",
      role: "Negative element forming subgroup G4a at the front of the fixed rear group.",
      diagramLabel: "L12",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.85478,
      vd: 24.8,
      indexReference: "d",
      focalLengthMm: 34.994067,
      glass: "S-NBH56",
      role: "Positive member of the cemented doublet D4 in the image-stabilizing subgroup G4b.",
      diagramLabel: "L13",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.53996,
      vd: 59.46,
      indexReference: "d",
      focalLengthMm: -26.128026,
      glass: "S-BAL12",
      role: "Negative member of D4 in the image-stabilizing subgroup G4b.",
      diagramLabel: "L14",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.26,
      indexReference: "d",
      focalLengthMm: -34.130568,
      glass: "S-TIM2",
      role: "Biconcave rear element of the image-stabilizing subgroup G4b.",
      diagramLabel: "L15",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      indexReference: "d",
      focalLengthMm: 57.334056,
      glass: "TAFD37",
      role: "High-index positive element opening the positive rear subgroup G4c.",
      diagramLabel: "L16",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.14,
      indexReference: "d",
      focalLengthMm: 28.037757,
      glass: "S-BAL35",
      role: "Positive member of the last cemented doublet D5 in G4c.",
      diagramLabel: "L17",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Negative",
      nd: 1.7888,
      vd: 28.43,
      indexReference: "d",
      focalLengthMm: -37.315522,
      glass: "S-NBH58",
      role: "Negative rear member of D5, the last element ahead of the camera-side plate.",
      diagramLabel: "L18",
      cemented: "D5",
    },
  ],

  surfaces: [
    { label: "1", R: 91.306, d: 1.5, sd: 14.8, medium: 1 },
    { label: "2", R: 40.957, d: 1.46, sd: 14.8 },
    { label: "3", R: 75.642, d: 3.76, sd: 14.5, medium: 2 },
    { label: "4", R: -124.317, d: 0.2, sd: 14.5 },
    { label: "5", R: 94.361, d: 5.57, sd: 13.9, medium: 3 },
    { label: "6", R: -35.862, d: 1.35, sd: 13.5, medium: 4 },
    { label: "7", R: -96.697, d: 0.15, sd: 13.5 },
    { label: "8", R: 40.338, d: 4.8, sd: 12.7, medium: 5 },
    { label: "9", R: -67.714, sd: 12.7 },
    { label: "10", R: -578.5881, d: 2.99, sd: 11.3, medium: 6 },
    { label: "11", R: -38.6633, d: 0.8, sd: 11, medium: 7 },
    { label: "12", R: 48.1594, d: 2.38, sd: 11 },
    { label: "13", R: -53.8124, d: 0.85, sd: 10.3, medium: 8 },
    { label: "14", R: 32.3387, sd: 10.3 },
    { label: "STO", R: "flat" },
    { label: "16", R: 60.7248, d: 1.1, sd: 11.6, medium: 9 },
    { label: "17", R: 31.5673, d: 4.95, sd: 11.6, medium: 10 },
    { label: "18", R: -52.9997, d: 0.15, sd: 11.6 },
    { label: "19", R: 43.9932, d: 4.0, sd: 11.5, medium: 11 },
    { label: "20", R: -73.7617, sd: 11.5 },
    { label: "21", R: -280.79, d: 0.85, sd: 10.7, medium: 12 },
    { label: "22", R: 65.8571, d: 3.0288, sd: 10.7 },
    { label: "23", R: 44.0764, d: 3.155, sd: 10.2, medium: 13 },
    { label: "24", R: -90.011, d: 0.8, sd: 10, medium: 14 },
    { label: "25", R: 16.7825, d: 4.3, sd: 9.1 },
    { label: "26", R: -36.6931, d: 0.8, sd: 9.8, medium: 15 },
    { label: "27", R: 50.4154, d: 2.8736, sd: 9.8 },
    { label: "28", R: 80.7376, d: 2.9, sd: 11, medium: 16 },
    { label: "29", R: -140.7367, d: 0.2, sd: 11 },
    { label: "30", R: 25.1562, d: 6.65, sd: 11.5, medium: 17 },
    { label: "31", R: -43.3887, d: 1.0, sd: 11.2, medium: 18 },
    { label: "32", R: 92.4526, d: 30.649, sd: 11.2 },
  ],

  focus: {
    closeFocusM: 0.22353846416012554,
    keyframes: [0, 0.6872097510190636, 0.8947806709924443, 1.0],
    description:
      "PUBLISHED: the patent prints four states (infinity, 0.5×, 1× and 2×). G2 moves toward the image and G3 toward the object as focus closes. Distance labels are derived from the paraxial magnification of each printed state, not from printed object distances; between the printed states the gaps are interpolated linearly, which is not a verified focus cam. The iris is sized at infinity and held fixed, so the patent's finite-state f-numbers are not imposed. At 1× and 2× some analysis panels trace few rays or fall back to collimated light.",
    published: [1, 2, 3],
  },

  gaps: {
    "9": { label: "D9", values: [[1.1931, 5.4051, 10.595, 18.2238]] },
    "14": { label: "D14", values: [[21.6627, 17.4507, 12.2607, 4.632]] },
    STO: { label: "D15", values: [[27.7204, 20.445, 13.8691, 2.8945]] },
    "20": { label: "D20", values: [[3.5261, 10.8015, 17.3774, 28.352]] },
  },

  aperture: { nominalFNumber: 3.638, fStops: [3.638, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  rearPlates: [
    {
      label: "OF",
      thicknessMm: 4.1082,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      indexReference: "d",
      gapAfterMm: 2.045,
      source: "JP 2024-066164 A, Example 1, paragraph 0119 and surfaces 33–35.",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9" },
    { text: "G2", fromSurface: "10", toSurface: "14" },
    { text: "G3", fromSurface: "16", toSurface: "20" },
    { text: "G4a", fromSurface: "21", toSurface: "22" },
    { text: "G4b/IS", fromSurface: "23", toSurface: "27" },
    { text: "G4c", fromSurface: "28", toSurface: "32" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
    { text: "D5", fromSurface: "30", toSurface: "32" },
  ],

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
