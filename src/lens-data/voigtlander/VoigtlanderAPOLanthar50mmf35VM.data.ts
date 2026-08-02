import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER APO-LANTHAR 50mm f/3.5 TYPE II VM                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2025-108279 A, Example 1 (Cosina Co., Ltd.).              ║
 * ║  Native-scale 49.10 mm f/3.56 all-spherical prescription.                  ║
 * ║  8 elements / 6 groups, 0 aspherical surfaces.                             ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION.                                 ║
 * ║  The patent publishes whole-lens unit focus but no finite-distance table.  ║
 * ║  No variable spacing or close-focus optical state is encoded.              ║
 * ║  Type II reaches 0.35 m and Type I reaches 0.45 m mechanically.            ║
 * ║                                                                              ║
 * ║  SCALING: none. All radii, spacings, and image-plane coordinates retain    ║
 * ║  the patent's native millimeter scale.                                      ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent omits clear apertures. Surface SDs were derived ║
 * ║  from Cosina's official optical-section SVG by fitting its axial vertices  ║
 * ║  to the patent prescription (9.310868 px/mm), then checked against exact   ║
 * ║  spherical on-axis and 0.6-field ray envelopes. The stop SD is inferred    ║
 * ║  from the modeled f/3.56 entrance pupil.                                    ║
 * ║                                                                              ║
 * ║  GLASS: the patent publishes only nd and νd. Generic six-digit/class labels║
 * ║  are used because vendor identity is not unique. Cosina's diagram marks    ║
 * ║  L1, L4, L6, and L8 as anomalous-partial-dispersion elements, but the      ║
 * ║  source supplies no nC, nF, ng, or dPgF values; none are invented here.     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "voigtlander-apo-lanthar-50mm-f35-vm",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER APO-LANTHAR 50mm f/3.5 Type II VM",
  subtitle: "JP 2025-108279 A Example 1 — shared Type I / Type II optical prescription",
  specs: [
    "8 ELEMENTS / 6 GROUPS",
    "f = 49.101 mm (DESIGN)",
    "F/3.56 (DESIGN)",
    "2ω = 47.88° (PATENT)",
    "4 APD ELEMENTS (MANUFACTURER-MARKED)",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 49.101170846,
  apertureMarketing: 3.5,
  apertureDesign: 3.56,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2025-108279 A",
  patentAuthors: ["Yoshihisa Yomogida", "Yuki Shibata"],
  patentAssignees: ["株式会社コシナ"],
  patentYear: 2025,
  elementCount: 8,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.48749,
      vd: 70.44,
      fl: -96.247194,
      glass: "487704 — low-dispersion crown; vendor identity not unique",
      apd: "inferred",
      apdNote:
        "Cosina's optical section marks L1 as anomalous partial dispersion; the patent supplies no line indices or dPgF.",
      role: "Outer negative meniscus preceding the partially symmetric positive core.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.81,
      fl: 61.211191,
      glass: "883408 — high-index lanthanum crown; vendor identity not unique",
      apd: false,
      role: "High-index front-core positive meniscus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      fl: 17.606467,
      glass: "729547 — lanthanum crown; vendor identity not unique",
      apd: false,
      role: "Positive member of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      fl: -15.657185,
      glass: "603380 — F5-class flint; vendor identity not unique",
      apd: "inferred",
      apdNote:
        "Cosina's optical section marks L4 as anomalous partial dispersion; the patent supplies no line indices or dPgF.",
      role: "Negative member of the front cemented doublet, concave toward the stop.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.84,
      fl: -35.343945,
      glass: "567428 — FL6/S-TIL26-class light flint; vendor identity not unique",
      apd: false,
      role: "Negative member of the rear cemented doublet, concave toward the stop.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 65.800658,
      glass: "497816 — FCD1/S-FPL51/N-PK52A-class fluorophosphate crown; vendor identity not unique",
      apd: "inferred",
      apdNote:
        "Cosina's optical section marks L6 as anomalous partial dispersion; the patent supplies no line indices or dPgF.",
      role: "Very-low-dispersion positive member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.94,
      fl: 28.497104,
      glass: "713539 — LAK8/LAC8-class lanthanum crown; vendor identity not unique",
      apd: false,
      role: "Rear-core positive collector preceding the final negative meniscus.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus, convex to image",
      nd: 1.68893,
      vd: 31.16,
      fl: -127.948064,
      glass: "689312 — FD8/SF8/S-TIM28-class dense flint; vendor identity not unique",
      apd: "inferred",
      apdNote:
        "Cosina's optical section marks L8 as anomalous partial dispersion; the patent supplies no line indices or dPgF.",
      role: "Outer negative meniscus following the partially symmetric positive core.",
    },
  ],

  surfaces: [
    { label: "1", R: 25.402, d: 1.1, nd: 1.48749, elemId: 1, sd: 10.63 },
    { label: "2", R: 16.246, d: 2.67, nd: 1.0, elemId: 0, sd: 9.34 },
    { label: "3", R: 27.07, d: 2.81, nd: 1.883, elemId: 2, sd: 9.41 },
    { label: "4", R: 51.591, d: 0.46, nd: 1.0, elemId: 0, sd: 8.22 },
    { label: "5", R: 16.622, d: 5.07, nd: 1.72916, elemId: 3, sd: 7.77 },
    { label: "6", R: -49.139, d: 1.13, nd: 1.60342, elemId: 4, sd: 7.76 },
    { label: "7", R: 11.798, d: 4.41, nd: 1.0, elemId: 0, sd: 5.84 },
    { label: "STO", R: 1e15, d: 3.49, nd: 1.0, elemId: 0, sd: 5.197982 },
    { label: "9", R: -34.603, d: 1.5, nd: 1.56732, elemId: 5, sd: 6.13 },
    { label: "10", R: 48.429, d: 3.56, nd: 1.497, elemId: 6, sd: 6.99 },
    { label: "11", R: -98.252, d: 2.3, nd: 1.0, elemId: 0, sd: 6.99 },
    { label: "12", R: 344.13, d: 5.03, nd: 1.713, elemId: 7, sd: 8.33 },
    { label: "13", R: -21.462, d: 1.46, nd: 1.0, elemId: 0, sd: 9.58 },
    { label: "14", R: -21.458, d: 1.6, nd: 1.68893, elemId: 8, sd: 9.27 },
    { label: "15", R: -29.225, d: 33.14, nd: 1.0, elemId: 0, sd: 10.63 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1F", fromSurface: "3", toSurface: "7" },
    { text: "G1B", fromSurface: "9", toSurface: "13" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  closeFocusM: 0.35,
  focusDescription:
    "Published whole-lens unit focus; no finite-distance optical state is encoded. Type II reaches 0.35 m and Type I reaches 0.45 m with the same prescription.",

  nominalFno: 3.56,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 10,
  maxFstop: 22,

  scFill: 0.55,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
