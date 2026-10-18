import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * PANASONIC LUMIX S 14-28mm f/4-5.6 MACRO — US 2024/0192475 A1, Example 1.
 * Patent millimetres and d-line indices, unscaled; no printed value is altered.
 * Fourteen lens elements in ten groups. The patent prints the four 0.01 mm adhesive layers
 * (nd 1.56732, νd 42.8) inside L5–L6, L7–L8, L11–L12 and L13–L14; they are modeled as printed,
 * which gives eighteen element entries. The layer entries C1–C4 carry no `cemented` tag, so the
 * inspector counts D1–D4 as two-element doublets. Their diagramLabel C1–C4 stands in for ids 15–18 in
 * the element-number row; an empty label does not hide a layer cleanly, because the row packer still
 * reserves its slot and leaves 12 and 14 floating over a gap.
 * Focus: NO_INTERNAL_RECONSTRUCTION. Only the three printed infinity stations are modeled and each
 * focus vector repeats its infinity value. G3 focuses toward the image, but the patent prints no
 * finite-focus spacings. closeFocusM is Panasonic's marketed 0.15 m minimum focus distance; it is
 * not modeled.
 * Zoom between the printed stations is piecewise-linear interpolation of the printed gaps, not a
 * published cam; the paraxial focus error at the printed image plane reaches -0.672669 mm in
 * 401 zoom samples.
 * Paragraph 0025 defines the middle focal length as the geometric mean of the end focal lengths
 * (19.7993 mm); Table 3A prints 19.8039 mm, which the middle prescription reproduces, so the table
 * is kept (see sourceErrata).
 * CG: the printed 2.1 mm cover plate is in rearPlates. Dummy surface 32 is dropped and
 * gapAfterMm = 1.02728 mm (the printed 1.000 mm plus the wide BF 0.02728 mm). d29 carries each
 * station's printed BF minus the wide BF, so the image position is as printed and the plate sits
 * at most 0.08764 mm from its tabulated position.
 * SEMI-DIAMETERS: estimated from the Figure 1 optical curves (not flanges; 0.098 mm/px, wide panel
 * governing, mid/tele panels as cross-check) and floor-checked by exact real-ray trace at all three
 * stations. Joint steps follow the drawing: L6 5.5 under L5 5.7, L7 5.8 under a square-cut L8 7.0.
 * Surface 2 (15.2) and 4A (12.2) are as drawn. At 15.2 mm L1's rear rim meets L2's front rim, as the
 * figure seats them; its rim angle is 70.9°, hence maxRimAngleDeg 71. At 12.2 mm 4A stands just above
 * L3, and the 4A→5 gap is 93.2 % used at the shared 12.0 mm band, hence gapSagFrac 0.94. Neither
 * pair of faces crosses.
 * The stop position is printed; its radius is derived from the design f-number at each zoom station,
 * not a published iris diameter.
 * Aspheres 3/4/18/19: the patent's K is the standard conic constant of the (1 + K) form; even orders
 * A4–A14, coefficients in mm^(1-order).
 * Glass names are nd/νd catalog matches; neither supplier nor melt is established. L3 is HOYA FCD505,
 * whose catalog dispersion formula gives the printed nd 1.59283. L2, L4, L5, L6, L10 and L14 have no
 * catalog row and are labelled Unmatched; Example 2 prints different values in the same positions.
 * dPgF is the matched catalog glass's P_g,F measured from the engine's normal line.
 * The special-glass tags and apertureBlades follow Panasonic's specification page, which gives counts
 * (three ED, one aspherical ED, one aspherical, one UHR; seven blades), not element positions.
 */
const LENS_DATA = {
  schema: 2,
  key: "panasonic-lumix-s-14-28mm-f4-56-macro",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S 14-28mm f/4-5.6 MACRO",
  subtitle: "US 2024/0192475 A1, Example 1 — selected production correlation",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 10 GROUPS",
      "DESIGN f = 14.56–26.93 mm",
      "DESIGN F/4.14–5.68",
      "4 ASPHERICAL SURFACES / 2 ELEMENTS",
      "INFINITY-ONLY MODEL",
    ],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: [14, 28], design: [14.5582, 26.9273] },
    fNumber: { marketing: 4, design: 4.13947 },
  },

  source: {
    patentNumber: "US 2024/0192475 A1",
    patentYear: 2024,
    authors: ["Takahiro Kitada"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
    errata: [
      {
        status: "unresolved",
        note: "Paragraph 0025 defines the middle focal length as the geometric mean of the wide and tele focal lengths, which is 19.7993 mm, but Table 3A prints 19.8039 mm. The middle-station prescription computes to 19.8032 mm and so supports the table; the printed spacings and focal length are used unchanged.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      focalLengthMm: -31.545281,
      glass: "N-LASF44 (SCHOTT; HOYA TAF3D shares the coordinate; supplier unconfirmed)",
      apdNote: "dPgF is N-LASF44's catalog P_g,F (0.5572) measured from the engine's normal line.",
      role: "Negative meniscus at the front of the negative first group",
      dPgF: -0.008387,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus (2× Asph), convex to object",
      nd: 1.5338,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: -41.54453,
      glass:
        "Unmatched (Panasonic moulding material 1.53380/55.6; no catalog row; line indices from US 2017/0059832 A1)",
      apdNote:
        "nC, nF and ng are the values Panasonic prints for this nd/νd material in US 2017/0059832 A1 (Table 23, P_g,F 0.56232); this patent prints nd and νd only.",
      role: "Negative meniscus of the first group, aspherical on both faces",
      dPgF: 0.01204,
      nC: 1.531,
      nF: 1.5406,
      ng: 1.546,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.59283,
      vd: 68.6,
      indexReference: "d",
      focalLengthMm: -42.160801,
      glass: "FCD505 (HOYA; catalog dispersion formula gives the printed nd 1.59283; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Class-level match to one of the three ED lenses Panasonic lists without positions: FCD505 (νd 68.6) has a catalog P_g,F of 0.5443, 0.016 above the engine's normal line.",
      role: "Low-dispersion biconcave negative element of the first group; the element of the patent's condition (2)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.67196,
      vd: 31.5,
      indexReference: "d",
      focalLengthMm: 30.560387,
      glass: "Unmatched (patent dense-flint class; nd 1.67196, nu 31.5)",
      role: "Biconvex positive rear element of the negative first group",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus, convex to object",
      nd: 1.77319,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -17.955396,
      glass: "Unmatched (patent high-index crown class; nd 1.77319, nu 49.6)",
      role: "Negative front element of the cemented doublet D1, directly behind the stop in the second group",
      cemented: "D1",
    },
    {
      id: 15,
      name: "C1",
      label: "L5–L6 cement layer",
      type: "Optical Cement Layer",
      nd: 1.56732,
      vd: 42.8,
      indexReference: "d",
      glass: "Optical cement (patent nd=1.56732, vd=42.8)",
      role: "Cement layer of the L5–L6 doublet D1: the 0.01 mm adhesive layer printed in the patent prescription; not counted as a lens element",
      diagramLabel: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.70147,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: 8.559519,
      glass: "Unmatched (patent high-index flint class; nd 1.70147, nu 40.9)",
      role: "Strong positive rear element of the cemented doublet D1 in the second group",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 2.001,
      vd: 29.1,
      indexReference: "d",
      focalLengthMm: -7.955411,
      glass: "S-LAH99 (OHARA; coordinate equivalent; supplier unconfirmed)",
      apdNote: "dPgF is S-LAH99's catalog P_g,F (0.5997) measured from the engine's normal line.",
      role: "High-index (nd 2.001) negative front element of the cemented doublet D2 in the second group",
      cemented: "D2",
      dPgF: 0.004846,
    },
    {
      id: 16,
      name: "C2",
      label: "L7–L8 cement layer",
      type: "Optical Cement Layer",
      nd: 1.56732,
      vd: 42.8,
      indexReference: "d",
      glass: "Optical cement (patent nd=1.56732, vd=42.8)",
      role: "Cement layer of the L7–L8 doublet D2: the 0.01 mm adhesive layer printed in the patent prescription; not counted as a lens element",
      diagramLabel: "C2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 26.994793,
      glass: "FCD1 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Class-level match to one of the three ED lenses Panasonic lists without positions (FCD1 / N-PK52A class, νd 81.6); dPgF is FCD1's catalog P_g,F (0.5389) measured from the engine's normal line.",
      role: "Low-dispersion positive rear element of the cemented doublet D2 in the second group",
      cemented: "D2",
      dPgF: 0.032351,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.55332,
      vd: 71.7,
      indexReference: "d",
      focalLengthMm: 19.032983,
      glass: "M-FCD500 (HOYA moulding glass; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Class-level match to the aspherical ED lens Panasonic lists without a position: L9 is the only aspherical low-dispersion element (M-FCD500 class, νd 71.7); dPgF is M-FCD500's catalog P_g,F (0.5404) measured from the engine's normal line.",
      role: "Low-dispersion biconvex positive element of the second group, aspherical on both faces",
      dPgF: 0.017199,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus, convex to image",
      nd: 1.81012,
      vd: 21.2,
      indexReference: "d",
      focalLengthMm: 63.839831,
      glass: "Unmatched (patent dense-flint class; nd 1.81012, nu 21.2)",
      role: "Weak positive meniscus at the rear of the positive second group",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18.0,
      indexReference: "d",
      focalLengthMm: 23.167973,
      glass: "FDS18 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apdNote:
        "dPgF is FDS18's P_g,F (0.6546, from its catalog dispersion formula) measured from the engine's normal line.",
      role: "High-dispersion positive front element of the focusing doublet D3 (third group); the element of the patent's condition (5)",
      cemented: "D3",
      dPgF: 0.041043,
    },
    {
      id: 17,
      name: "C3",
      label: "L11–L12 cement layer",
      type: "Optical Cement Layer",
      nd: 1.56732,
      vd: 42.8,
      indexReference: "d",
      glass: "Optical cement (patent nd=1.56732, vd=42.8)",
      role: "Cement layer of the L11–L12 doublet D3: the 0.01 mm adhesive layer printed in the patent prescription; not counted as a lens element",
      diagramLabel: "C3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.92119,
      vd: 24.0,
      indexReference: "d",
      focalLengthMm: -13.644434,
      glass: "FDS24 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apdNote: "dPgF is FDS24's catalog P_g,F (0.6202) measured from the engine's normal line.",
      role: "Negative rear element of the focusing doublet D3 (third group)",
      cemented: "D3",
      dPgF: 0.016768,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus, convex to image",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 31.658998,
      glass: "FCD1 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Class-level match to one of the three ED lenses Panasonic lists without positions (FCD1 / N-PK52A class, νd 81.6); dPgF is FCD1's catalog P_g,F (0.5389) measured from the engine's normal line.",
      role: "Low-dispersion positive front element of the rear doublet D4 (fourth group); the element of the patent's condition (6)",
      cemented: "D4",
      dPgF: 0.032351,
    },
    {
      id: 18,
      name: "C4",
      label: "L13–L14 cement layer",
      type: "Optical Cement Layer",
      nd: 1.56732,
      vd: 42.8,
      indexReference: "d",
      glass: "Optical cement (patent nd=1.56732, vd=42.8)",
      role: "Cement layer of the L13–L14 doublet D4: the 0.01 mm adhesive layer printed in the patent prescription; not counted as a lens element",
      diagramLabel: "C4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus, convex to image",
      nd: 1.80309,
      vd: 35.2,
      indexReference: "d",
      focalLengthMm: -29.007237,
      glass: "Unmatched (patent dense-flint class; nd 1.80309, nu 35.2)",
      role: "Negative meniscus rear element of the rear doublet D4 (fourth group)",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 45.7963, d: 1.5, sd: 21, medium: 1 },
    { label: "2", R: 16.087, d: 5.1028, sd: 15.2 },
    {
      label: "3A",
      R: 23.2364,
      d: 3.4,
      sd: 14.8,
      medium: 2,
      asphere: {
        K: 0.910375,
        A4: 2.25898e-5,
        A6: -4.12855e-7,
        A8: 3.68903e-9,
        A10: -2.27397e-11,
        A12: 7.14463e-14,
        A14: -9.62268e-17,
      },
    },
    {
      label: "4A",
      R: 10.7692,
      d: 9.0826,
      sd: 12.2,
      asphere: {
        K: -0.949882,
        A4: 6.97194e-5,
        A6: -9.8961e-7,
        A8: 1.51689e-8,
        A10: -1.43321e-10,
        A12: 6.56888e-13,
        A14: -1.20294e-15,
      },
    },
    { label: "5", R: -59.5333, d: 1.2, sd: 12, medium: 3 },
    { label: "6", R: 43.4044, d: 0.4646, sd: 12 },
    { label: "7", R: 28.0987, d: 5.1922, sd: 11.5, medium: 4 },
    { label: "8", R: -70.6255, sd: 11.5 },
    { label: "STO", R: "flat", d: 1.4 },
    { label: "10", R: 16.9182, d: 1.5, sd: 5.7, medium: 5 },
    { label: "11", R: 7.3307, d: 0.01, sd: 5.7, medium: 15 },
    { label: "12", R: 7.3307, d: 6.438, sd: 5.5, medium: 6 },
    { label: "13", R: -21.1683, d: 0.6751, sd: 5.5 },
    { label: "14", R: -16.1812, d: 0.6, sd: 5.8, medium: 7 },
    { label: "15", R: 15.971, d: 0.01, sd: 5.8, medium: 16 },
    { label: "16", R: 15.971, d: 3.435, sd: 7.0, medium: 8 },
    { label: "17", R: -77.8886, d: 0.2, sd: 7.0 },
    {
      label: "18A",
      R: 46.0805,
      d: 5.9482,
      sd: 8.3,
      medium: 9,
      asphere: { K: 0, A4: -6.56399e-5, A6: 2.10293e-8, A8: 2.51435e-9, A10: 2.03077e-11, A12: 0, A14: 0 },
    },
    {
      label: "19A",
      R: -13.0235,
      d: 0.2,
      sd: 8.3,
      asphere: { K: 0, A4: 6.18242e-6, A6: -1.38698e-7, A8: 9.61955e-11, A10: -3.43267e-11, A12: 4.15133e-13, A14: 0 },
    },
    { label: "20", R: -344.2959, d: 1.97, sd: 9, medium: 10 },
    { label: "21", R: -45.0789, sd: 9 },
    { label: "22", R: 69.4141, d: 3.8658, sd: 9, medium: 11 },
    { label: "23", R: -31.1606, d: 0.01, sd: 9, medium: 17 },
    { label: "24", R: -31.1606, d: 0.6, sd: 9, medium: 12 },
    { label: "25", R: 21.2612, sd: 9 },
    { label: "26", R: -74.087, d: 7.7974, sd: 11, medium: 13 },
    { label: "27", R: -13.4317, d: 0.01, sd: 11, medium: 18 },
    { label: "28", R: -13.4317, d: 1.2, sd: 11, medium: 14 },
    { label: "29", R: -32.9843, sd: 12.7 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 14.5582, nominalFNumber: 4.13947, label: "Wide" },
      { focalLengthMm: 19.8039, nominalFNumber: 4.78588 },
      { focalLengthMm: 26.9273, nominalFNumber: 5.6802, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.15,
    description:
      "NO_INTERNAL_RECONSTRUCTION. The patent prints three infinity-focus zoom stations (14.56, 19.80 and 26.93 mm) and only those are modeled, so the focus control moves nothing. The third group, the L11–L12 doublet, focuses toward the image for near objects, but no finite-focus spacings are printed. The 0.15 m minimum focus distance (0.5× at the long end) is Panasonic's marketed figure and is not modeled. Between the printed stations the zoom gaps are linearly interpolated; this is not a published cam, and the paraxial focus sits up to 0.67 mm off the printed image plane between the middle and long-end stations.",
  },

  gaps: {
    "8": {
      label: "d8",
      values: [
        [20.3915, 20.3915],
        [9.7847, 9.7847],
        [2.1029, 2.1029],
      ],
    },
    "21": {
      label: "d21",
      values: [
        [2.8898, 2.8898],
        [2.1657, 2.1657],
        [1.4543, 1.4543],
      ],
    },
    "25": {
      label: "d25",
      values: [
        [6.6091, 6.6091],
        [7.8261, 7.8261],
        [8.0849, 8.0849],
      ],
    },
    "29": {
      label: "d29",
      values: [
        [13.4, 13.4],
        [19.92211, 19.92211],
        [30.28406, 30.28406],
      ],
    },
  },

  aperture: { fStops: [4.13947, 4.78588, 5.6802, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.1,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7 (SCHOTT; HOYA BSC7 shares the coordinate; supplier unconfirmed)",
      indexReference: "d",
      dPgF: -0.000916,
      gapAfterMm: 1.02728,
      source:
        "US 2024/0192475 A1, Example 1, Table 1 surfaces 30–32 and Table 3A; the printed back-focus differences between zoom stations are carried in d29.",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "STO", toSurface: "21" },
    { text: "G3", fromSurface: "22", toSurface: "25" },
    { text: "G4", fromSurface: "26", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "10", toSurface: "13" },
    { text: "D2", fromSurface: "14", toSurface: "17" },
    { text: "D3", fromSurface: "22", toSurface: "25" },
    { text: "D4", fromSurface: "26", toSurface: "29" },
  ],

  layout: { yScFill: 0.72 },

  checks: {
    gapSagFrac: 0.94, // admits the drawn S4A rim (12.2 mm) beside L3; the faces do not cross
    maxRimAngleDeg: 71, // admits the drawn rear rim of L1 (S2, 15.2 mm)
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
