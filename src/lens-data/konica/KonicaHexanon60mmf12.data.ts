import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║         LENS DATA — KONICA HEXANON 60mm f/1.2 L                         ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP H11-160615 A, Example 1 (Konica / Toshiji Yamashita).  ║
 * ║ Patent design: 58.26 mm, F/1.24, 7 elements / 6 groups, all spherical.    ║
 * ║ Production correlation: Konica's 2000 technical report explicitly refers  ║
 * ║ to an L-mount-specification f60/F1.2; the patent-to-product link remains  ║
 * ║ a correlation rather than an explicit manufacturer declaration.          ║
 * ║                                                                            ║
 * ║ FOCUS STATUS: CONSTRAINED_RECONSTRUCTION.                                 ║
 * ║ The patent publishes D(STO→r10) = 6.70 mm at infinity and 7.90 mm at     ║
 * ║ β = -0.085, and states that the whole lens extends while the front/rear   ║
 * ║ spacing increases. With a fixed image plane, the paraxial solve gives a   ║
 * ║ close r14→IMG spacing of 33.547968454 mm and MFD 0.800033079 m. The       ║
 * ║ reconstructed close endpoint is represented by var["STO"] and var["14"].║
 * ║                                                                            ║
 * ║ SCALING: none. Patent dimensions are retained at s = 1. Marketed 60 mm /  ║
 * ║ f/1.2 and design 58.263500438 mm / F1.24 are kept separate.              ║
 * ║                                                                            ║
 * ║ GLASS: the patent publishes d-line nd / νd only and names no vendor or    ║
 * ║ melt. Six-digit coordinate classes are retained with qualified catalog-   ║
 * ║ equivalent coefficient proxies; nC, nF, ng, and dPgF remain omitted.      ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: not published. SDs are modeling inferences derived from   ║
 * ║ the F/1.24-calibrated marginal ray, 0.6-field paraxial ray sampling, the  ║
 * ║ patent optical section, and geometry limits. STO.sd = 13.160251111 mm is  ║
 * ║ the F-number-calibrated physical stop semi-diameter. Surface 8 requires   ║
 * ║ 15.04 mm to clear the wide-open marginal ray; its spherical rim slope is  ║
 * ║ 64.969°, so maxRimAngleDeg is explicitly set to 65.2° rather than using  ║
 * ║ the shared 64.2° default.                                                  ║
 * ║                                                                            ║
 * ║ Manufacturer correlation source:                                          ║
 * ║ https://research.konicaminolta.com/jp/pdf/technology_report/2000/pdf/83.pdf║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "konica-hexanon-60f12",
  maker: "Konica",
  name: "KONICA HEXANON 60mm f/1.2 L",
  subtitle: "JP H11-160615 A Example 1 — 58.26mm F1.24 patent design correlated to the L-mount 60mm f/1.2",
  specs: [
    "7 ELEMENTS / 6 GROUPS",
    "60mm MARKETED / 58.2635mm DESIGN EFL",
    "f/1.2 MARKETED / F1.24 DESIGN",
    "2ω = 40.53° (PATENT)",
    "OBJECTWARD FLOATING FOCUS — CONSTRAINED RECONSTRUCTION",
  ],

  focalLengthMarketing: 60,
  focalLengthDesign: 58.263500438,
  apertureMarketing: 1.2,
  apertureDesign: 1.24,
  lensMounts: ["leica-ltm"],
  imageFormat: "135-full-frame",
  patentNumber: "JP H11-160615 A",
  patentAuthors: ["Toshiji Yamashita"],
  patentAssignees: ["Konica Corporation"],
  patentYear: 1999,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 220.968637838,
      glass:
        "773496 class; J-LASF016 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Front positive meniscus; one of three positive menisci distributing the front-group power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 97.284870307,
      glass:
        "773496 class; J-LASF016 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Second positive meniscus in the front power-distribution sequence.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 73.560040014,
      glass:
        "773496 class; J-LASF016 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Strong third positive meniscus ahead of the negative L4 meniscus.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -33.097730032,
      glass: "847238 class; J-SF03 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Negative front-group meniscus controlling power balance and Petzval contribution before the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      fl: -24.105889512,
      glass: "699301 class; E-FD15 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Negative member of the cemented rear doublet immediately behind the stop.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8044,
      vd: 39.6,
      fl: 25.580512641,
      glass:
        "804396 class; S-LAH63Q catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Positive member of the cemented rear doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.9,
      fl: 68.48815946,
      glass: "806409 class; P-LASF47 catalog-equivalent coefficient proxy (production supplier unspecified)",
      role: "Final positive rear-group element.",
    },
  ],

  /* ── Surface prescription: Table 1 radii/spacings; r14 d is the computed infinity BFD ── */
  surfaces: [
    { label: "1", R: 82.212, d: 3.5, nd: 1.7725, elemId: 1, sd: 27.0 },
    { label: "2", R: 155.652, d: 0.2, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "3", R: 46.616, d: 5.5, nd: 1.7725, elemId: 2, sd: 25.0 },
    { label: "4", R: 116.453, d: 0.2, nd: 1.0, elemId: 0, sd: 24.0 },
    { label: "5", R: 24.282, d: 6.67, nd: 1.7725, elemId: 3, sd: 21.65 },
    { label: "6", R: 37.324, d: 2.0, nd: 1.0, elemId: 0, sd: 18.6 },
    { label: "7", R: 43.35, d: 2.34, nd: 1.84666, elemId: 4, sd: 16.55 },
    { label: "8", R: 16.599, d: 8.6, nd: 1.0, elemId: 0, sd: 15.04 },
    { label: "STO", R: 1e15, d: 6.7, nd: 1.0, elemId: 0, sd: 13.160251111 },
    { label: "10", R: -23.022, d: 1.83, nd: 1.69895, elemId: 5, sd: 14.5 },
    { label: "11", R: 64.89, d: 7.13, nd: 1.8044, elemId: 6, sd: 15.1 },
    { label: "12", R: -28.656, d: 0.2, nd: 1.0, elemId: 0, sd: 15.4 },
    { label: "13", R: 80.976, d: 3.4, nd: 1.8061, elemId: 7, sd: 16.0 },
    { label: "14", R: -170.243, d: 28.877994964, nd: 1.0, elemId: 0, sd: 16.0 },
  ],

  asph: {},

  /* Patent D is STO→r10. Rear image spacing is the constrained fixed-image reconstruction. */
  var: {
    STO: [6.7, 7.9],
    "14": [28.877994964, 33.547968454],
  },
  varLabels: [
    ["STO", "D"],
    ["14", "BF"],
  ],

  groups: [
    { text: "FRONT (+ / OBJECTWARD FOCUS)", fromSurface: "1", toSurface: "8" },
    { text: "REAR (+ / OBJECTWARD FOCUS)", fromSurface: "10", toSurface: "14" },
  ],
  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  closeFocusM: 0.800033079,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: JP H11-160615 Example 1 publishes D(STO→r10) = 6.70 mm at infinity and 7.90 mm at β = -0.085, with whole-lens extension plus increased front/rear spacing. A fixed-image paraxial solve gives r14→IMG = 33.547968454 mm at the close state and MFD = 0.800033079 m.",

  nominalFno: 1.24,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  maxRimAngleDeg: 65.2,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
