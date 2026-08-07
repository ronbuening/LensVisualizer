import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — MAMIYA N 210mm f/8 L                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2000-028919 A, Example 1 (Hideyuki Suga / Mamiya-OP).     ║
 * ║  Seven-element, five-group, all-spherical medium-telephoto prescription.    ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes infinity   ║
 * ║  data only; no close-focus spacing or internal motion has been invented.    ║
 * ║                                                                            ║
 * ║  SCALE: The patent example has f = 100.06 mm. All dimensional prescription ║
 * ║  values are scaled by s = 210 / 100.06 = 2.098740755546672. Indices and    ║
 * ║  Abbe numbers are unchanged. No aspheres are present.                      ║
 * ║                                                                            ║
 * ║  SOURCE CORRECTIONS: JP 2000-028919 A prints R4 and R6 as positive. The    ║
 * ║  later family grant JP 4187311 B2 prints both negative, and those signs are ║
 * ║  independently required to reproduce the stated focal length and patent    ║
 * ║  conditions. The modeled values are therefore R4 < 0 and R6 < 0.           ║
 * ║                                                                            ║
 * ║  STOP: The patent draws S inside d5 but gives no coordinate. Its position   ║
 * ║  is inferred from Figure 1 at 0.483 of d5 after surface 5. The physical    ║
 * ║  stop radius is solved paraxially for the modeled f/8.15 entrance pupil.    ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent does not tabulate clear apertures. Values were  ║
 * ║  constrained by the Figure 1 element-height proportions, paraxial and exact ║
 * ║  meridional ray bundles, edge thickness, rim slope, cross-gap clearance,    ║
 * ║  off-axis containment, and zero required render trim in the standalone      ║
 * ║  Stage 2 audit. They remain modeling inferences, not patent dimensions.     ║
 * ║                                                                            ║
 * ║  GLASS: The patent publishes nd/νd but no line-index or partial-dispersion  ║
 * ║  table. L2's APD tag is inferred from its 497816 fluorophosphate-crown      ║
 * ║  class; it does not identify a production melt or assert a system APO label.║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "mamiya-n-210mm-f8-l",
  maker: "Mamiya",
  name: "MAMIYA N 210mm f/8 L",
  subtitle: "JP 2000-028919 A Example 1 — scaled production correlation",
  specs: [
    "7 ELEMENTS / 5 GROUPS",
    "f = 209.958 mm (SCALED DESIGN)",
    "F/8.15 MODELED / f/8 MARKETED",
    "2ω = 24.38°",
    "ALL-SPHERICAL TELEPHOTO",
  ],

  focalLengthMarketing: 210,
  focalLengthDesign: 209.958369574,
  apertureMarketing: 8,
  apertureDesign: 8.15,
  lensMounts: ["mamiya-7"],
  imageFormat: "6x7",
  patentNumber: "JP 2000-028919 A",
  patentAuthors: ["Hideyuki Suga"],
  patentAssignees: ["Mamiya-OP Co., Ltd."],
  patentYear: 2000,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus, convex to object",
      nd: 1.4875,
      vd: 70.2,
      fl: 114.401921881,
      glass: "487702/704 fluor-crown class (catalog equivalent not unique)",
      apd: false,
      role: "Front positive collector in the converging group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 85.537214185,
      glass: "497816 low-dispersion fluorophosphate-crown class",
      apd: "inferred",
      apdNote:
        "ED/APD fluorophosphate-crown class inferred from nd = 1.49700 and νd = 81.6; " +
        "the patent publishes no partial-dispersion table.",
      role: "Low-dispersion positive member of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.757,
      vd: 47.8,
      fl: -64.842405125,
      glass: "757478 lanthanum-flint class",
      apd: false,
      role: "Negative member of the front cemented doublet; moderates front-group power and color.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus, concave to object",
      nd: 1.6989,
      vd: 30.1,
      fl: 203.461570915,
      glass: "699301 dense-flint class",
      apd: false,
      role: "Weak positive lead element of the net-diverging rear group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6031,
      vd: 60.6,
      fl: -41.241552822,
      glass: "603606/607 dense-crown class",
      apd: false,
      role: "Strong negative member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 56.261031522,
      glass: "773496 lanthanum-flint class",
      apd: false,
      role: "Positive member of the rear cemented doublet; balances L5 and the rear-group divergence.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus, concave to object",
      nd: 1.7618,
      vd: 26.5,
      fl: -244.95684106,
      glass: "762265/266 dense-flint class",
      apd: false,
      role: "Rear negative meniscus controlling the final conjugate and field behavior.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 52.905056966, d: 5.309814112, nd: 1.4875, elemId: 1, sd: 15.5 },
    { label: "2", R: 995.684589246, d: 0.503697781, nd: 1, elemId: 0, sd: 15.5 },
    { label: "3", R: 45.301319208, d: 5.120927444, nd: 1.497, elemId: 2, sd: 14.5 },
    { label: "4", R: -664.524285429, d: 2.287627424, nd: 1.757, elemId: 3, sd: 14.5 },
    { label: "5", R: 53.079252449, d: 27.298719768, nd: 1, elemId: 0, sd: 14.5 },
    // STO position inferred from JP 2000-028919 A Figure 1 at 0.483 of d5 after surface 5.
    { label: "STO", R: 1e15, d: 29.220368779, nd: 1, elemId: 0, sd: 8.940884694 },
    { label: "6", R: -876.371177294, d: 4.071557066, nd: 1.6989, elemId: 4, sd: 15.5 },
    { label: "7", R: -122.581151309, d: 10.157905257, nd: 1, elemId: 0, sd: 15.5 },
    { label: "8", R: -38.19498301, d: 3.651808915, nd: 1.6031, elemId: 5, sd: 22.5 },
    { label: "9", R: 73.875674595, d: 6.61103338, nd: 1.7725, elemId: 6, sd: 22.5 },
    { label: "10", R: -101.451029382, d: 3.043174096, nd: 1, elemId: 0, sd: 22.5 },
    { label: "11", R: -68.649810114, d: 6.799920048, nd: 1.7618, elemId: 7, sd: 24.5 },
    { label: "12", R: -113.254347392, d: 73.666247345, nd: 1, elemId: 0, sd: 24.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1 FRONT", fromSurface: "1", toSurface: "5" },
    { text: "G2 REAR", fromSurface: "6", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 7,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent publishes only the infinity prescription and no moving spacings. " +
    "The marketed 7 m minimum focus distance is retained as metadata, not as an invented optical state.",

  nominalFno: 8.15,
  fstopSeries: [8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.58,
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
