import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * OLYMPUS M.ZUIKO DIGITAL ED 45mm f/1.2 PRO — JP 2019-023693 A, Numerical Example 1.
 * The patent applicant is Sigma Corporation (inventor Masakazu Hibino). The link to
 * the Olympus lens is not manufacturer-confirmed; it rests on construction. Of the
 * patent's four examples, Example 1 is the only one whose ED, HR and aspherical
 * element positions match Olympus's lens diagram (ED = L6; HR = L1, L2, L9, L11;
 * aspherical = L5).
 * 14 elements / 10 air-spaced groups, one aspherical surface (S10). Patent
 * millimetres and d-line indices; scale 1. The patent's sag equation uses (1 + K),
 * so K and A4–A10 are used as printed.
 * The patent design is 44.10 mm / F1.28; the marketed lens is 45 mm / F1.2.
 * PUBLISHED focus: the three printed states (INF, the 1:40 row labelled 40倍, and
 * 0.5 m) are kept with their printed gaps and object distances. Only the negative
 * element L10 (G3) moves, toward the image; the image plane is fixed. Positions
 * between the printed states are interpolated.
 * The printed 4 mm filter and the 1 mm air gap behind it are traced through
 * rearPlates at the printed distances, not folded into an air-equivalent gap.
 * SEMI-DIAMETERS: estimated from patent Figure 1; the patent prints no clear
 * apertures. The figure is drawn about 10 % taller than it is long (at 400 dpi,
 * 11.05 px/mm along the axis and 12.20 px/mm across it), so heights use the
 * vertical scale that makes the drawn surface curves fit the printed radii. The
 * figures of Examples 2–4 show the same stretch, and at that scale the drawn stop
 * mark equals the F1.28 stop radius (12.31 mm drawn, 12.36 mm traced). Rims
 * follow the curve endpoints, excluding the drawn flanges at S4, S6, S18 and
 * S23. S8 also ends at a drawn flange (curve end 12.7 mm) but carries the
 * cemented doublet's 15.3 mm rim, so that L4 draws as the square block of the
 * figure; no traced ray reaches S8 above 12.51 mm. The cemented triplet is drawn
 * square-cut at 17.1 mm, where L6 and L8 keep 1.1 mm edges. Every rim clears the
 * axial marginal ray at the three printed states with the iris fixed (least
 * margin 0.20 mm, S14 at 0.5 m) and the corner chief ray. No radius, spacing or
 * index was adjusted.
 * STOP: position printed; radius derived from the design f-number, the printed
 * 1.28 (nominalFNumber). It is not a measured diaphragm size.
 * GLASS: each element names the catalog glass at the patent's nd/νd; supplier and
 * melt are not identified. Each element traces on that catalog glass's dispersion
 * curve; dPgF is the catalog value measured from the line 0.6438 − 0.001682·νd.
 * No apochromatic claim is made.
 * SOURCE NOTES: condition (5) prints 43.82 where the printed νd give 43.83; ¶0046
 * calls G3 positive, while the claims, ¶0071 and the prescription make it negative.
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-mzuiko-digital-ed-45mm-f12-pro",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL ED 45mm f/1.2 PRO",
  subtitle: "JP 2019-023693 A, Example 1 — qualified production correlation",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "14 ELEMENTS / 10 GROUPS",
      "DESIGN f = 44.10 mm",
      "DESIGN F/1.28",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
      "PUBLISHED INNER FOCUS, THREE STATES",
    ],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: 45, design: 44.1 },
    fNumber: { marketing: 1.2, design: 1.28 },
  },

  source: {
    patentNumber: "JP 2019-023693 A",
    patentYear: 2019,
    authors: ["Masakazu Hibino"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex",
      nd: 1.95375,
      vd: 32.32,
      indexReference: "d",
      focalLengthMm: 67.960052,
      glass: "S-LAH98 (OHARA, coordinate equivalent)",
      apd: false,
      role: "Plano-convex front element of the fixed, weakly positive G1; an HR position in Olympus's diagram.",
      dPgF: 0.0011008268048301462,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 180.614377,
      glass: "E-FDS1 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Positive meniscus of fixed G1, convex to the object; an HR position in Olympus's diagram.",
      dPgF: 0.030290242252458133,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.84,
      indexReference: "d",
      focalLengthMm: -41.037395,
      glass: "E-FD2 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Negative meniscus closing fixed G1 just ahead of the stop; it leaves G1 only weakly positive.",
      dPgF: 0.005525645041737248,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.75211,
      vd: 25.05,
      indexReference: "d",
      focalLengthMm: -18.281049,
      glass: "FF8 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Negative front member of the cemented doublet G2a, the first lens behind the stop.",
      cemented: "C1",
      dPgF: 0.01754638740719472,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.85135,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: 24.045506,
      glass: "M-TAFD305 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Positive rear member of cemented G2a; its rear surface S10 is the only asphere, as in Olympus's diagram.",
      cemented: "C1",
      dPgF: -0.006833270180797935,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      indexReference: "d",
      focalLengthMm: 47.486961,
      glass: "FCD515 (HOYA, coordinate equivalent)",
      apd: "inferred",
      apdNote:
        "Olympus's lens diagram marks element 6 as the ED element; the patent's nd 1.59282 / νd 68.63 fits an FCD515-class low-dispersion glass, which the patent itself does not call anomalous.",
      role: "Low-dispersion positive front member of the G2b cemented triplet; the ED position in Olympus's diagram.",
      cemented: "C2",
      dPgF: 0.015751002430986927,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      indexReference: "d",
      focalLengthMm: -24.453757,
      glass: "S-NBH56 (OHARA, coordinate equivalent)",
      apd: false,
      role: "High-dispersion negative middle member of the G2b cemented triplet.",
      cemented: "C2",
      dPgF: 0.01020334718033511,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      indexReference: "d",
      focalLengthMm: 28.614498,
      glass: "TAFD32 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Positive rear member of the G2b cemented triplet.",
      cemented: "C2",
      dPgF: -0.00706334704585132,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 52.941265,
      glass: "E-FDS1 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Fixed positive element closing G2b, ahead of the focusing gap; an HR position in Olympus's diagram.",
      dPgF: 0.030290242252458133,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.56732,
      vd: 42.84,
      indexReference: "d",
      focalLengthMm: -51.999822,
      glass: "E-FL6 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Single negative focusing element (G3); it moves toward the image for near focus.",
      dPgF: 0.002595832687554145,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 28.175536,
      glass: "E-FDS1 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Positive front element of the fixed rear group G4; an HR position in Olympus's diagram.",
      dPgF: 0.030290242252458133,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      indexReference: "d",
      focalLengthMm: 44.402106,
      glass: "TAFD32 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Positive front member of the G4 cemented doublet; its front surface is nearly flat (R = 1000 mm).",
      cemented: "C3",
      dPgF: -0.00706334704585132,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.80809,
      vd: 22.76,
      indexReference: "d",
      focalLengthMm: -18.236023,
      glass: "FD225 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Negative rear member of the G4 cemented doublet.",
      cemented: "C3",
      dPgF: 0.023134620688329943,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.8707,
      vd: 40.73,
      indexReference: "d",
      focalLengthMm: 84.566799,
      glass: "TAFD32 (HOYA, coordinate equivalent)",
      apd: false,
      role: "Positive meniscus closing fixed G4, convex to the object; the last element before the filter.",
      dPgF: -0.00706334704585132,
    },
  ],

  surfaces: [
    { label: "1", R: 64.8169, d: 5.7367, sd: 23.6, medium: 1 },
    { label: "2", R: "flat", d: 0.5471, sd: 23.6 },
    { label: "3", R: 30.5121, d: 4.3742, sd: 18.8, medium: 2 },
    { label: "4", R: 34.7793, d: 3.5949, sd: 15.7 },
    { label: "5", R: 97.2682, d: 1.0, sd: 16.2, medium: 3 },
    { label: "6", R: 20.7908, d: 7.1072, sd: 13.4 },
    { label: "STO", R: "flat", d: 5.6691 },
    { label: "8", R: -27.7117, d: 1.0, sd: 15.3, medium: 4 },
    { label: "9", R: 27.7117, d: 7.5177, sd: 15.3, medium: 5 },
    {
      label: "10A",
      R: -68.5749,
      d: 0.1629,
      sd: 15.3,
      asphere: { K: 0, A4: 8.2798e-6, A6: 5.627e-9, A8: 9.9887e-12, A10: -5.9866e-15, A12: 0, A14: 0 },
    },
    { label: "11", R: 80.434, d: 6.5884, sd: 17.1, medium: 6 },
    { label: "12", R: -41.9887, d: 0.8, sd: 17.1, medium: 7 },
    { label: "13", R: 41.9887, d: 7.3908, sd: 17.1, medium: 8 },
    { label: "14", R: -56.2507, d: 0.15, sd: 17.1 },
    { label: "15", R: 153.3223, d: 4.4981, sd: 17.0, medium: 9 },
    { label: "16", R: -70.6979, sd: 17.0 },
    { label: "17", R: 80.4673, d: 0.7, sd: 14.8, medium: 10 },
    { label: "18", R: 21.5186, sd: 13.0 },
    { label: "19", R: 32.2679, d: 5.2311, sd: 13.3, medium: 11 },
    { label: "20", R: -123.4875, d: 0.3677, sd: 13.3 },
    { label: "21", R: 1000.0, d: 3.4186, sd: 12.5, medium: 12 },
    { label: "22", R: -40.1517, d: 0.8, sd: 12.5, medium: 13 },
    { label: "23", R: 23.4881, d: 2.2933, sd: 10.7 },
    { label: "24", R: 37.4085, d: 2.5209, sd: 11.8, medium: 14 },
    { label: "25", R: 73.6554, d: 13.5159, sd: 11.8 },
  ],

  focus: {
    closeFocusM: 0.5,
    keyframes: [0, 0.2717236983008302, 1],
    description:
      "PUBLISHED infinity, 1:40 and 0.5 m states (patent Example 1, variable-gap table). Inner focus: only the negative element L10 (G3) moves, 1.21 mm and 5.25 mm toward the image at the two printed near states, where the object is 1840 mm and 500 mm from the image plane; every other gap, the stop and the image plane stay fixed. The 0.5 m state matches the marketed minimum focus distance. Positions between the printed states are interpolated, and the iris is held at its infinity setting (the patent prints F1.30 and F1.34 for the near states).",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 1738.8853,
        distanceReference: "first-surface",
        source: "JP 2019-023693 A, Example 1, variable-distance table (p. 13): printed object distance and gaps",
      },
      {
        zoomStation: 0,
        keyframe: 2,
        objectDistanceMm: 398.7806,
        distanceReference: "first-surface",
        source: "JP 2019-023693 A, Example 1, variable-distance table (p. 13): printed object distance and gaps",
      },
    ],
    published: [1, 2],
  },

  gaps: {
    "16": { label: "d16", values: [[1.7, 2.9131, 6.9499]] },
    "18": { label: "d18", values: [[9.5346, 8.3215, 4.2847]] },
  },

  aperture: { nominalFNumber: 1.28, fStops: [1.28, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  rearPlates: [
    {
      label: "OF",
      thicknessMm: 4.0,
      nd: 1.5168,
      vd: 64.2,
      glass: "BSC7 (HOYA, coordinate equivalent)",
      indexReference: "d",
      dPgF: -0.001534821416379395,
      gapAfterMm: 1.0,
      source:
        "JP 2019-023693 A, Example 1, surfaces 26–27: 4 mm filter plate and 1 mm air gap to the image, as printed; dispersion follows a BSC7-type curve at the printed nd/νd",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2a", fromSurface: "8", toSurface: "10A" },
    { text: "G2b", fromSurface: "11", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "25" },
  ],
  doublets: [
    { text: "C1", fromSurface: "8", toSurface: "10A" },
    { text: "C2", fromSurface: "11", toSurface: "14" },
    { text: "C3", fromSurface: "21", toSurface: "23" },
  ],

  layout: { yScFill: 0.9 },
} satisfies LensDataV2Input;

export default LENS_DATA;
