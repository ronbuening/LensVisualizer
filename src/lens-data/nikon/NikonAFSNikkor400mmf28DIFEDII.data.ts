import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI AF-S NIKKOR ED 400mm f/2.8D II IF                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 6,239,919 B1, Example 4 / Embodiment 4 (Susumu Sato,       ║
 * ║ Nikon Corporation). The active prescription is kept at the patent scale.   ║
 * ║ 11 elements / 9 air-separated groups, all spherical.                       ║
 * ║                                                                            ║
 * ║ Production correlation: Nikon's official specification is 11 elements /    ║
 * ║ 9 groups plus one protective glass, with ED at element positions 1, 2,     ║
 * ║ and 5, no aspheres, internal focusing, and 3.5 m AF / 3.4 m MF minimum     ║
 * ║ focus. Those structural markers match Example 4.                           ║
 * ║                                                                            ║
 * ║ Source correction: Table 4 marks d11 and d16 as variable, while the         ║
 * ║ following focus table mislabels the same rows d13 and d18. The modeled      ║
 * ║ variables are therefore d11 and d16; their sum remains constant.            ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The source train publishes a      ║
 * ║ 3.8 m checkpoint with 10.85845 mm G2 imageward travel. The production       ║
 * ║ endpoint is 3.4 m MF. Because the ordinary LensVisualizer model excludes    ║
 * ║ the source front/rear plates and field stop, the active normalized model    ║
 * ║ is re-solved after plate omission: G2 travel = 12.3331402826 mm, with       ║
 * ║ d11 = 36.9284702826 mm and d16 = 15.1103997174 mm at 3.4 m. This is         ║
 * ║ 0.0100719967 mm less than the full-source-train 3.4 m reconstruction.       ║
 * ║                                                                            ║
 * ║ Rear reference-plane normalization: the source field stop and rear          ║
 * ║ 2.0 mm nd=1.5168 filter are omitted. Direct air-equivalent normalization    ║
 * ║ gives 114.0571854008 mm from source surface 23 to image; the stored final   ║
 * ║ gap is the independently solved 114.0572584255 mm that closes the rounded   ║
 * ║ printed prescription paraxially (73.0 nm difference).                      ║
 * ║                                                                            ║
 * ║ Stop: the patent does not publish the physical S1 diameter. STO sd is       ║
 * ║ inferred from the published FNO=2.88 and the verified entrance-pupil        ║
 * ║ magnification; diameter = 40.1309443166 mm.                                 ║
 * ║                                                                            ║
 * ║ Semi-diameters: source effective diameters anchor surface 3 (phi1/2 =       ║
 * ║ 68.1 mm) and surface 12 (phi2/2 = 21.7 mm). Remaining SDs are inferred      ║
 * ║ from Fig. 10 proportions and paraxial marginal-ray envelopes, then reduced  ║
 * ║ only where required by current edge-thickness, rim-slope, shared-band       ║
 * ║ cross-gap, off-axis containment, and render-trim geometry rules.            ║
 * ║ Fig. 10 specifically supports terminal L33 SDs of 15.5 / 16.0 mm instead    ║
 * ║ of the earlier 21.0 / 21.5 mm estimate.                                     ║
 * ║                                                                            ║
 * ║ Glass discipline: Table 4 publishes only d-line nd/nu_d coordinates. Nikon  ║
 * ║ identifies elements 1, 2, and 5 as ED, but does not identify glass vendors. ║
 * ║ Compatible catalog equivalents provide dispersion curves without asserting  ║
 * ║ production suppliers. nC/nF/ng/dPgF remain unauthored source values.         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-ai-af-s-nikkor-400mm-f28d-if-ed-ii",
  maker: "Nikon",
  name: "NIKON AI AF-S NIKKOR ED 400mm f/2.8D II IF",
  subtitle: "US 6,239,919 B1 — Example 4; constrained active-model close-focus reconstruction",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "400 mm marketed / 391.999 mm design",
    "f/2.8 marketed / F/2.88 design",
    "3 ED ELEMENTS",
    "6°10′ marketed angle of view",
    "INTERNAL FOCUS",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 391.99875522948963,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 6,239,919 B1",
  patentAuthors: ["Susumu Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2001,
  elementCount: 11,
  groupCount: 9,

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
      fl: 302.68714776251915,
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
      fl: 270.1401513050027,
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
      fl: -230.75949152200684,
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
      fl: -219.5821834152949,
      glass: "J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)",
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
      fl: 113.31270068251617,
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
      fl: -74.01510575281803,
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
      fl: 68.80684811738912,
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
      fl: -54.42832058122178,
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
      fl: 124.7336054756045,
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
      fl: -110.96283043667925,
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
      fl: 104.0427960716621,
      glass: "S-BSM81 catalog equivalent (patent 640600; production supplier unspecified)",
      role: "Rear positive element of stationary G3; source surface 22 has finite R=+46,400 mm.",
    },
  ],

  /* ── Active surface prescription ──
   * Patent surfaces 1-2 (front plate), 24 (field stop), and 25-26 (rear plate)
   * are omitted. Source surface 17 is retained as STO.
   */
  surfaces: [
    { label: "3", R: 187.1041, d: 20.1, nd: 1.49782, elemId: 1, sd: 68.1 },
    { label: "4", R: -746.4748, d: 0.6, nd: 1.0, elemId: 0, sd: 67.0 },
    { label: "5", R: 200.0582, d: 20.1, nd: 1.49782, elemId: 2, sd: 66.0 },
    { label: "6", R: -396.5666, d: 2.1, nd: 1.0, elemId: 0, sd: 65.0 },
    { label: "7", R: -372.8865, d: 7.0, nd: 1.787971, elemId: 3, sd: 64.0 },
    { label: "8", R: 357.8219, d: 106.4, nd: 1.0, elemId: 0, sd: 63.0 },
    { label: "9", R: 78.174, d: 4.6, nd: 1.796681, elemId: 4, sd: 40.5 },
    { label: "10", R: 52.62, d: 17.0, nd: 1.49782, elemId: 5, sd: 39.0 },
    { label: "11", R: 699.21, d: 24.59533, nd: 1.0, elemId: 0, sd: 38.5 },
    { label: "12", R: -490.708, d: 2.5, nd: 1.80384, elemId: 6, sd: 21.7 },
    { label: "13", R: 67.859, d: 4.45, nd: 1.0, elemId: 0, sd: 20.1 },
    { label: "14", R: -227.924, d: 6.7, nd: 1.805182, elemId: 7, sd: 20.8 },
    { label: "15", R: -45.153, d: 2.3, nd: 1.64, elemId: 8, sd: 20.8 },
    { label: "16", R: 155.456, d: 27.44354, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "STO", R: 1e15, d: 1.3, nd: 1.0, elemId: 0, sd: 20.065472158304672 },
    { label: "18", R: 263.755, d: 4.6, nd: 1.6968, elemId: 9, sd: 20.8 },
    { label: "19", R: -128.703, d: 2.24, nd: 1.0, elemId: 0, sd: 20.1 },
    { label: "20", R: -58.397, d: 2.9, nd: 1.80384, elemId: 10, sd: 20.5 },
    { label: "21", R: -172.863, d: 0.6, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "22", R: 46400.0, d: 5.5, nd: 1.64, elemId: 11, sd: 15.5 },
    { label: "23", R: -66.68, d: 114.05725842548244, nd: 1.0, elemId: 0, sd: 16.0 },
  ],

  asph: {},

  /* G2 translates imageward; d11 grows while d16 shrinks by exactly the same amount. */
  var: {
    "11": [24.59533, 36.928470282588265],
    "16": [27.44354, 15.110399717411731],
  },
  varLabels: [
    ["11", "D11"],
    ["16", "D16"],
  ],

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

  closeFocusM: 3.4,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: G2 alone translates imageward with D11 + D16 conserved. The patent publishes a 3.8 m checkpoint; the active no-filter model is code-solved to Nikon's 3.4 m MF limit after reference-plane normalization.",

  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  /* Preserve approximately physical X/Y proportions; this is not a geometry workaround. */
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
