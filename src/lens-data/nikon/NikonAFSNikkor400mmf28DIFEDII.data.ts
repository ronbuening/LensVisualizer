import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 6,239,919 B1, Example 4 / Table 4 / Fig. 10; unscaled source prescription.
 * Production correlation: AF-S400 mm f/2.8D IF-ED II; eleven powered elements in nine groups.
 * Thirteen drawn/traced optical pieces include the restored front S1/S2 filter (5 mm, nd 1.5168/vd 64.10,
 * then printed1 mm gap) and the existing rear S25/S26 filter (2 mm, same source pair, then Bf83.53862 mm).
 * Front sd72.5 mm is the full-field/focus beam floor 68.9700 mm plus 5%, rounded upward to 0.5 mm.
 * Inactive field stop S24 remains folded out: d23+d24=29.2 mm plus the existing0.0000730246 mm reference-plane
 * normalization. Physical S1-to-image track is383.767563 mm; infinity EFL/BFL are unchanged by the front plane.
 * Source focus-table labels d13/d18 are inconsistent with the explicitly variable d11/d16 surface rows.
 * The previous constrained3.4 m reconstruction retains its G2 travel12.3331402826 mm and all powered spacings;
 * restoring the front plate gives the disclosed3.402385 m full object-to-image conjugate, with unchanged magnification.
 * Fig. 10 and nominal beams restore terminal L33 caps 20.5/20.5 mm. S13 grows only20.1→20.2 mm: a20.4 mm cap
 * exceeds the unchanged90% gap policy (4.05373>4.005 mm; policy radius 20.279316, contact radius 21.354113 mm).
 * All faces were inspected; shallow-profile ink and ray contamination do not establish an additional flat cap end.
 * All13 source d-line nd/vd pairs are retained; catalog curves are qualified spectral proxies, especially the
 * approximate J-LASF017 counterpart for source 1.796681/45.37. No source partial/line-index datum is invented.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-ai-af-s-nikkor-400mm-f28d-if-ed-ii",
  maker: "Nikon",
  name: "NIKON AI AF-S NIKKOR 400mm f/2.8 D IF-ED II",
  subtitle: "US 6,239,919 B1 — Example 4; constrained active-model close-focus reconstruction",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 9 GROUPS",
      "400 mm marketed / 391.999 mm design",
      "f/2.8 marketed / F/2.88 design",
      "3 ED ELEMENTS",
      "6°10′ marketed angle of view",
      "INTERNAL FOCUS",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 400, design: 391.99875522948963 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 6,239,919 B1",
    example: { label: "Example 4", id: "4" },
    patentYear: 2001,
    authors: ["Susumu Sato"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — ED",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      indexReference: "d",
      focalLengthMm: 302.68714776251915,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published production positions G1-1, G1-2, and G1-5.",
      role: "First positive element of G1F; Nikon identifies production element position 1 as ED.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — ED",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      indexReference: "d",
      focalLengthMm: 270.1401513050027,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published production positions G1-1, G1-2, and G1-5.",
      role: "Second positive element of G1F; Nikon identifies production element position 2 as ED.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.787971,
      vd: 47.47,
      indexReference: "d",
      focalLengthMm: -230.75949152200684,
      glass: "TAF4 catalog equivalent (patent 788475; production supplier unspecified)",
      role: "Negative element completing G1F.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Negative Meniscus, convex to object",
      nd: 1.796681,
      vd: 45.37,
      indexReference: "d",
      focalLengthMm: -219.5821834152949,
      glass: "797454 source class (J-LASF017 approximate spectral proxy; production supplier unspecified)",
      role: "Negative member of the cemented positive G1R doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 — ED",
      type: "Positive Meniscus, convex to object",
      nd: 1.49782,
      vd: 82.52,
      indexReference: "d",
      focalLengthMm: 113.31270068251617,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published production positions G1-1, G1-2, and G1-5.",
      role: "Positive member of the cemented G1R doublet; Nikon identifies production element position 5 as ED.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.80384,
      vd: 33.89,
      indexReference: "d",
      focalLengthMm: -74.01510575281803,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Front negative element of the translating G2 focus group.",
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus, concave to object",
      nd: 1.805182,
      vd: 25.41,
      indexReference: "d",
      focalLengthMm: 68.80684811738912,
      glass: "SF6 catalog equivalent (patent 805254; production supplier unspecified)",
      role: "Positive member of the cemented negative G2 doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L23",
      label: "L23",
      type: "Negative Meniscus, concave to object",
      nd: 1.64,
      vd: 60.03,
      indexReference: "d",
      focalLengthMm: -54.42832058122178,
      glass: "S-BSM81 catalog equivalent (patent 640600; production supplier unspecified)",
      role: "Negative member of the cemented negative G2 doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: 124.7336054756045,
      glass: "K-LaK14 catalog equivalent (patent 697556; production supplier unspecified)",
      role: "First positive element of stationary G3.",
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus, concave to object",
      nd: 1.80384,
      vd: 33.89,
      indexReference: "d",
      focalLengthMm: -110.96283043667925,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Negative middle element of stationary G3.",
    },
    {
      id: 11,
      name: "L33",
      label: "L33",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.03,
      indexReference: "d",
      focalLengthMm: 104.0427960716621,
      glass: "S-BSM81 catalog equivalent (patent 640600; production supplier unspecified)",
      role: "Rear positive element of stationary G3; source surface 22 has finite R=+46,400 mm.",
    },
    {
      id: 12,
      name: "F",
      label: "Slip-in filter F",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      glass: "J-BK7A",
      role: "Plane-parallel filter plate of the patent prescription (US 6,239,919 B1, Example 4 Table 4 surfaces 25–26), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
    {
      id: 13,
      name: "FF",
      label: "Front plane-glass filter",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      glass: "J-BK7A catalog-equivalent spectral proxy (source front filter; production supplier unspecified)",
      role: "Printed source surfaces 1–2, restored as a drawn/traced front filter. Excluded from the 11 powered-element catalog count. Its unprinted aperture is inferred from the full-field/focus beam floor plus 5%, rounded upward to 0.5 mm.",
    },
  ],

  /* ── Active surface prescription ──
   * Patent front surfaces 1-2 are restored; field stop24 remains folded out; d23
   * spans patent d23 + d24 to the rear filter (surfaces 25-26, drawn as a
   * plane-parallel plate element).
   * Source surface 17 is retained as STO.
   */
  surfaces: [
    // Source front plane-glass filter; unprinted rim inferred from full-field/focus beams.
    { label: "1", R: "flat", d: 5, sd: 72.5, medium: 13 },
    { label: "2", R: "flat", d: 1, sd: 72.5 },
    { label: "3", R: 187.1041, d: 20.1, sd: 68.1, medium: 1 },
    { label: "4", R: -746.4748, d: 0.6, sd: 67.0 },
    { label: "5", R: 200.0582, d: 20.1, sd: 66.0, medium: 2 },
    { label: "6", R: -396.5666, d: 2.1, sd: 65.0 },
    { label: "7", R: -372.8865, d: 7.0, sd: 64.0, medium: 3 },
    { label: "8", R: 357.8219, d: 106.4, sd: 63.0 },
    { label: "9", R: 78.174, d: 4.6, sd: 40.5, medium: 4 },
    { label: "10", R: 52.62, d: 17.0, sd: 39.0, medium: 5 },
    { label: "11", R: 699.21, sd: 38.5 },
    { label: "12", R: -490.708, d: 2.5, sd: 21.7, medium: 6 },
    { label: "13", R: 67.859, d: 4.45, sd: 20.2 },
    { label: "14", R: -227.924, d: 6.7, sd: 20.8, medium: 7 },
    { label: "15", R: -45.153, d: 2.3, sd: 20.8, medium: 8 },
    { label: "16", R: 155.456, sd: 20.5 },
    { label: "STO", R: "flat", d: 1.3 },
    { label: "18", R: 263.755, d: 4.6, sd: 20.8, medium: 9 },
    { label: "19", R: -128.703, d: 2.24, sd: 20.1 },
    { label: "20", R: -58.397, d: 2.9, sd: 20.5, medium: 10 },
    { label: "21", R: -172.863, d: 0.6, sd: 20.5 },
    { label: "22", R: 46400.0, d: 5.5, sd: 20.5, medium: 11 },
    { label: "23", R: -66.68, d: 29.20007302463857, sd: 20.5 }, // patent d23 + d24 → filter
    // Slip-in filter F (US 6,239,919 B1, Example 4 Table 4 surfaces 25–26), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: Bf 83.53862
    { label: "25", R: "flat", d: 2.0, sd: 19, medium: 12 },
    { label: "26", R: "flat", d: 83.53862, sd: 19 }, // slip-in filter → image plane
  ],

  focus: {
    closeFocusM: 3.4,
    description:
      "CONSTRAINED_RECONSTRUCTION: G2 alone translates imageward with D11 + D16 conserved. The patent publishes a 3.8 m checkpoint; the motion was solved to Nikon's 3.4 m MF limit before restoration of the printed front filter. That motion is retained; the source-complete finite conjugate differs slightly (see analysis).",
  },

  /* (moved from var) G2 translates imageward; d11 grows while d16 shrinks by exactly the same amount. */
  gaps: {
    "11": { label: "D11", values: [[24.59533, 36.928470282588265]] },
    "16": { label: "D16", values: [[27.44354, 15.110399717411731]] },
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1F", fromSurface: "3", toSurface: "8" },
    { text: "G1R", fromSurface: "9", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "18", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
  ],

  /* Preserve approximately physical X/Y proportions; this is not a geometry workaround. */
  layout: { yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
