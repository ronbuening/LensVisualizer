import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * smc PENTAX-FA★ 300mm F2.8 ED [IF] — JP H06-138385 A (Koichi Maruyama, Asahi Kogaku Kogyo), Example 1: Table 1
 * (prescription), Table 2 (focus states), Fig. 1 (infinity section), Fig. 3 (section at the 500 mm state).
 * Scale: the patent is normalized to f = 100. Every radius, thickness, gap, rim and the printed fB is multiplied by 3;
 * there are no aspheric surfaces. R, d, n and ν are the printed Example 1 values; n is the d-line index (588 nm, ¶0036).
 * Calculated EFL 299.995 mm (printed f = 100.00). The printed fB 24.86 (74.58 mm) is kept as the air from the plate's
 * rear face to the image plane; the Gaussian back focus is 74.563 mm, a −0.017 mm residual left as printed.
 * Plate: surfaces 16–17 (0.67 native, n 1.51633, ν 64.1) are drawn as the lens's 43 mm rear filter. The patent does not
 * name the plate; the identification follows Ricoh's 7-group / 10-element count and 43 mm filter.
 * Focus: only group 3 (L6/L7) moves (claim 1, abstract). Table 2 prints the infinity state and an object distance of 500
 * (1500 mm) with f = 77.83 (233.49 mm), M = −0.253, d9 = 12.35 and d12 = 10.91. The distance is object to image plane:
 * that reading reproduces M = −0.2528 and focuses within 0.016 mm of the infinity image plane, while object to first
 * vertex would give M = −0.193 and leave 14 mm of defocus. Intermediate keyframes put group 3 at ten equal steps of its
 * 26.07 mm travel; their focus coordinates follow the paraxial conjugate law and are not a factory cam. Ricoh rates the
 * production lens at 2.0 m and 0.17×, so the patent state is closer than the marketed minimum focus.
 * Stop: the patent prints none. The iris is inferred in d9, 5.6 mm behind r9 and fixed with group 2: the middle of the
 * 9.3 mm of air between the rims of r9 (sag +0.97 mm) and r10 (sag −0.68 mm) at infinity, where group 3 is closest.
 * Group 3 moves away from it, so the iris clears the focus group at every position (iris to r10 rim 4.70 mm at infinity,
 * 30.77 mm at the close state). Ahead of group 3 the iris stays the aperture stop at every focus: behind group 3, its
 * F/2.8 beam at the close state would need group 2 about 15 % wider than Fig. 1 draws it. The iris radius (25.80 mm)
 * is derived from the F/2.8 design f-number.
 * Semi-diameters: not printed. Measured from Fig. 1 (the front-page drawing; its vertex spacings are Example 1's) at
 * 804 dpi, 26.56 px/mm from the r1–r17 vertex span (70.33 mm native), confirmed on d4, d6 and d9. Fig. 1 draws every
 * element just outside the F/2.8 axial beam: L1 54.5 (beam 53.57; Ø109 mm, inside the 112 mm front protective filter),
 * L2 50.5 (49.79), L4/L5 31.7 (31.56), L6/L7 25.4 (24.98), L8/L9 19.4 (16.51), each one height across the element as
 * drawn. L3 keeps its earlier 47.1 mm (Fig. 1: 46.9). The filter (Fig. 1: 19.7) is sized by ray trace as the spec sets for
 * drop-in filters: 19.47 mm highest ray at either focus end, plus 5 %, rounded up to 20.5 mm.
 * Lands: Fig. 1 ends the concave rear caps of L3 (r6) and L7 (r12) short of the element edge, with a stroke square to the
 * axis, at q = 0.92 and 0.86 of the edge radius (43.3 and 21.7 mm). Both are inferred rim cuts, moved out to clear every
 * traced F/2.8 beam at any focus by the spec margin: r6 at 5.32 mm depth (cut radius 44.05 mm), r12 at 4.87 mm (21.99 mm).
 * Glass: Ricoh names thin ED glass in the first and second elements, so L1 and L2 (1.49700/81.6) carry the FCD1 /
 * S-FPL51 class label and an inferred anomalous-dispersion tag. The other pairs are left unassigned and traced from
 * nd/νd alone.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-fa-star-300mm-f28-ed-if",
  maker: "Pentax",
  name: "PENTAX SMC FA* 300mm f/2.8 ED [IF]",
  subtitle: "JP H06-138385 A, Example 1 — probable production correlation",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    elementCount: 10,
    groupCount: 7,
    focalLengthMm: {
      marketing: 300,
      design: 300,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    closeFocusM: { marketing: 2.0 },
    specs: ["10 ELEMENTS / 7 GROUPS", "DESIGN f = 300.00 mm", "DESIGN F/2.8", "ALL SPHERICAL", "2 ED ELEMENTS"],
  },
  source: {
    patentNumber: "JP H06-138385 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1994,
    authors: ["Koichi Maruyama"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      glass: "FCD1 (HOYA) / S-FPL51 class ED",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate class; the patent lists nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: 253.47,
      role: "Front ED collector of group 1; the strongest positive element in the front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      glass: "FCD1 (HOYA) / S-FPL51 class ED",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate class; the patent lists nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: 297.68,
      role: "Second ED positive, convex to the object; shares the front group's convergence with L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.72047,
      vd: 34.7,
      glass: "S-NBH8 (OHARA; coordinate equivalent, supplier unconfirmed)",
      focalLengthMm: -256.84,
      role: "Flint negative closing group 1; achromatizes the two ED crowns.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.2,
      glass: "S-LAH51 (OHARA; coordinate equivalent, supplier unconfirmed)",
      focalLengthMm: -117.08,
      cemented: "C1",
      role: "High-index negative of the group 2 doublet; its index step to L5 (condition 7) overcorrects spherical aberration to hold close-range sharpness.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.2,
      glass: "S-BAL35 (OHARA; coordinate equivalent, supplier unconfirmed)",
      focalLengthMm: 80.65,
      cemented: "C1",
      role: "Crown positive of the fixed group 2 doublet, just ahead of the iris.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      glass: "S-TIH6 (OHARA; coordinate equivalent, supplier unconfirmed)",
      focalLengthMm: 158.44,
      cemented: "C2",
      role: "Dense-flint positive of the negative focusing doublet (group 3); moves toward the image for close focus.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.57099,
      vd: 50.8,
      glass: "S-BAL2 (OHARA; coordinate equivalent, supplier unconfirmed)",
      focalLengthMm: -59.74,
      cemented: "C2",
      role: "Negative half of the focusing doublet; its Abbe ratio to L6 (condition 9) keeps color steady as the group moves.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.2,
      glass: "S-LAL13 (OHARA; coordinate equivalent, supplier unconfirmed)",
      focalLengthMm: 63.87,
      cemented: "C3",
      role: "Positive of the fixed rear doublet (group 4).",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      glass: "S-TIL2 (OHARA; coordinate equivalent, supplier unconfirmed)",
      focalLengthMm: -86.88,
      cemented: "C3",
      role: "Negative of the rear doublet; its index step to L8 (condition 5) lets distortion and spherical aberration be corrected without overcorrecting the field.",
    },
    {
      id: 10,
      name: "F",
      label: "Rear filter F",
      diagramLabel: "F",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7 (OHARA; coordinate equivalent, supplier unconfirmed)",
      role: "Plane plate of the patent prescription (surfaces 16–17), drawn as the lens's 43 mm rear filter; the design is computed with it in place. Counted in Ricoh's 10 elements.",
    },
  ],
  surfaces: [
    { label: "1", R: 143.625, d: 15.0, sd: 54.5, medium: 1 },
    { label: "2", R: -989.622, d: 1.8, sd: 54.5 },
    { label: "3", R: 113.373, d: 12.0, sd: 50.5, medium: 2 },
    { label: "4", R: 468.099, d: 9.0, sd: 50.5 },
    { label: "5", R: "flat", d: 5.7, sd: 47.1, medium: 3 },
    { label: "6", R: 185.046, d: 52.2, sd: 47.1, rimCutDepthMm: 5.32 },
    { label: "7", R: 86.745, d: 3.0, sd: 31.7, medium: 4 },
    { label: "8", R: 43.971, d: 13.8, sd: 31.7, medium: 5 },
    { label: "9", R: 521.037, d: 5.6, sd: 31.7 },
    { label: "STO", R: "flat" },
    { label: "10", R: -475.518, d: 5.1, sd: 25.4, medium: 6 },
    { label: "11", R: -101.067, d: 3.3, sd: 25.4, medium: 7 },
    { label: "12", R: 52.101, sd: 25.4, rimCutDepthMm: 4.87 },
    { label: "13", R: 112.14, d: 6.6, sd: 19.4, medium: 8 },
    { label: "14", R: -71.448, d: 2.7, sd: 19.4, medium: 9 },
    { label: "15", R: 138.99, d: 9.0, sd: 19.4 },
    { label: "16", R: "flat", d: 2.01, sd: 20.5, medium: 10 },
    { label: "17", R: "flat", d: 74.58, sd: 20.5 },
  ],
  focus: {
    closeFocusM: 1.5,
    keyframes: [0, 0.1342, 0.2584, 0.3739, 0.4816, 0.5822, 0.6764, 0.7648, 0.848, 0.9263, 1],
    published: [10],
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 10,
        objectDistanceMm: 1500,
        distanceReference: "image-plane",
        source:
          "JP H06-138385 A, Example 1, Table 2: object distance 500 with f = 77.83, M = −0.253, d9 = 12.35, d12 = 10.91 (×3). The distance is object to image plane; it reproduces the printed M.",
      },
    ],
    description:
      "PUBLISHED inner focus: the cemented L6/L7 group (G3) moves 26.07 mm toward the image while G1, G2, the iris, G4 and the rear filter stay fixed. Infinity and the patent's 1.5 m state (object to image, M = −0.253) are printed; positions between follow the paraxial conjugate law. The patent state is closer than the production lens's 2.0 m minimum focus (0.17×).",
  },
  gaps: {
    STO: {
      label: "D9 (iris–G3)",
      values: [[5.38, 7.987, 10.594, 13.201, 15.808, 18.415, 21.022, 23.629, 26.236, 28.843, 31.45]],
    },
    "12": {
      label: "D12",
      values: [[58.8, 56.193, 53.586, 50.979, 48.372, 45.765, 43.158, 40.551, 37.944, 35.337, 32.73]],
    },
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  layout: {
    yScFill: 0.78,
  },
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+)", fromSurface: "7", toSurface: "9" },
    { text: "G3 (−)", fromSurface: "10", toSurface: "12" },
    { text: "G4 (+)", fromSurface: "13", toSurface: "15" },
  ],
  doublets: [
    { text: "C1", fromSurface: "7", toSurface: "9" },
    { text: "C2", fromSurface: "10", toSurface: "12" },
    { text: "C3", fromSurface: "13", toSurface: "15" },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
