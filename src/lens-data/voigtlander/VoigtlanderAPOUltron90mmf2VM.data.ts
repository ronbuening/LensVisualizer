import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER APO-ULTRON 90mm f/2 VM                          ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2026-8235 A, Example 1 (Cosina Co., Ltd.; Yuki Shibata).      ║
 * ║ Production correlation: 8 elements / 7 groups, 90mm-class f/2,          ║
 * ║ 27.4° field, six marketed APD positions, and matching all-spherical     ║
 * ║ topology. No uniform scaling is applied.                                 ║
 * ║                                                                          ║
 * ║ Focus status: PUBLISHED. The patent publishes infinity and 800mm-object  ║
 * ║ states. Unit focus is represented in the camera-fixed model by varying   ║
 * ║ only the rear image-space gap (surface 16): 27.39997mm → 38.36529mm.     ║
 * ║ No internal movement is reconstructed.                                   ║
 * ║                                                                          ║
 * ║ Semi-diameters: the patent does not tabulate clear apertures. The STO    ║
 * ║ radius is inferred paraxially from the published F/2.05 (11.423277mm).   ║
 * ║ Element SDs follow the relative rim-height sequence in patent Figure 1,   ║
 * ║ constrained by marginal/chief-ray envelopes and published image height.  ║
 * ║ They were checked for edge                                                ║
 * ║ thickness, actual spherical rim slope, shared-band cross-gap intrusion,  ║
 * ║ off-axis clipping location, and render-trim geometry.                    ║
 * ║                                                                          ║
 * ║ Spectral data: nd/νd are patent d-line values. L15 carries the patent's  ║
 * ║ directly published ΔθgF = 0.0313 in dPgF. No per-element nC, nF, or ng   ║
 * ║ values are published, so none are invented.                              ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "voigtlander-apo-ultron-vm-90mm-f2",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER APO-ULTRON 90mm f/2 VM",
  subtitle: "JP 2026-8235 A Example 1 — unscaled production correlation",
  specs: [
    "8 ELEMENTS / 7 GROUPS",
    "90mm f/2 (MARKETED)",
    "f = 87.28mm / F2.05 (DESIGN)",
    "27.4° ANGLE OF VIEW",
    "6 / 8 APD GLASS ELEMENTS",
    "ALL SPHERICAL / UNIT FOCUS",
  ],

  focalLengthMarketing: 90,
  focalLengthDesign: 87.26494,
  apertureMarketing: 2,
  apertureDesign: 2.05,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2026-8235 A",
  patentAuthors: ["Yuki Shibata"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2026,
  elementCount: 8,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus, convex to object",
      nd: 1.60311,
      vd: 60.69,
      fl: 173.870249,
      glass: "BACD14 / J-SK14 / K-SK14 class (603607; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production lens diagram marks L11 as abnormal-partial-dispersion glass; " +
        "the mapping is inferred from the matching Example 1 topology.",
      role: "Front positive collector and pupil-forming meniscus.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.497,
      vd: 81.61,
      fl: 99.997912,
      glass: "FCD1 / N-PK52A / H-FK61 class (497816; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production lens diagram marks this element as abnormal-partial-dispersion glass; " +
        "the mapping is inferred from the matching Example 1 topology.",
      role: "Low-dispersion front positive element contributing primary axial-color control.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus, convex to object",
      nd: 1.497,
      vd: 81.61,
      fl: 90.127289,
      glass: "FCD1 / N-PK52A / H-FK61 class (497816; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production lens diagram marks this element as abnormal-partial-dispersion glass; " +
        "the mapping is inferred from the matching Example 1 topology.",
      role: "Second low-dispersion positive collector ahead of the negative correction section.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus, convex to object",
      nd: 1.68893,
      vd: 31.16,
      fl: -125.236731,
      glass: "M-FD80 / J-SF8 / H-ZF10 class (689312; vendor unresolved)",
      apd: false,
      role: "Weak negative meniscus balancing the three front positive elements before J1.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 63.344277,
      glass: "N-SF66 / E-FDS1 / H-ZF62 class (923209; vendor unresolved)",
      apd: "patent",
      apdNote: "Patent θgF = 0.639 and ΔθgF = +0.0313; stored numerically as dPgF.",
      dPgF: 0.0313,
      role: "High-index anomalous-dispersion positive member of the negative cemented doublet J1.",
      cemented: "J1",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.74,
      fl: -22.791322,
      glass: "NBFD29 (HOYA)",
      apd: "inferred",
      apdNote:
        "Production lens diagram marks this element as abnormal-partial-dispersion glass; " +
        "the mapping is inferred from the matching Example 1 topology.",
      role: "Strong negative member of J1; the cemented pair has net negative power near the stop.",
      cemented: "J1",
    },
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.82,
      fl: 44.257819,
      glass: "J-K3 (HIKARI)",
      apd: false,
      role: "Post-stop positive relay element forming the positive G2 group.",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Negative Meniscus, convex to image",
      nd: 1.437,
      vd: 95.1,
      fl: -77.161259,
      glass: "FCD100 / H-FK95 class (437951; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production lens diagram marks this element as abnormal-partial-dispersion glass; " +
        "the mapping is inferred from the matching Example 1 topology.",
      role: "Low-dispersion negative rear field element forming G3.",
    },
  ],

  surfaces: [
    { label: "1", R: 87.907, d: 4.04, nd: 1.60311, elemId: 1, sd: 23 },
    { label: "2", R: 534.257, d: 0.2, nd: 1, elemId: 0, sd: 23 },
    { label: "3", R: 32.865, d: 6.68, nd: 1.497, elemId: 2, sd: 21 },
    { label: "4", R: 90.48, d: 0.3, nd: 1, elemId: 0, sd: 21 },
    { label: "5", R: 37.52, d: 5.99, nd: 1.497, elemId: 3, sd: 18.5 },
    { label: "6", R: 218.824, d: 2.27, nd: 1, elemId: 0, sd: 18.5 },
    { label: "7", R: 2532.276, d: 1.6, nd: 1.68893, elemId: 4, sd: 16.5 },
    { label: "8", R: 83.415, d: 2.56, nd: 1, elemId: 0, sd: 16.5 },
    { label: "9", R: 270.511, d: 4.56, nd: 1.92286, elemId: 5, sd: 16 },
    { label: "10", R: -73.97, d: 1.4, nd: 1.77047, elemId: 6, sd: 16 },
    { label: "11", R: 23.216, d: 7, nd: 1, elemId: 0, sd: 16 },
    { label: "STO", R: 1e15, d: 9.01, nd: 1, elemId: 0, sd: 11.423277 },
    { label: "13", R: 45.076, d: 4.58, nd: 1.51823, elemId: 7, sd: 12.3 },
    { label: "14", R: -45.076, d: 8.95, nd: 1, elemId: 0, sd: 12.3 },
    { label: "15", R: -30.274, d: 1.25, nd: 1.437, elemId: 8, sd: 12 },
    { label: "16", R: -300, d: 27.39997, nd: 1, elemId: 0, sd: 12 },
  ],

  asph: {},

  var: {
    "16": [27.39997, 38.36529],
  },
  varLabels: [["16", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2", fromSurface: "13", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "16" },
  ],
  doublets: [{ text: "J1", fromSurface: "9", toSurface: "11" }],

  closeFocusM: 0.9,
  focusDescription:
    "PUBLISHED unit focus: the complete optical system extends toward the object. " +
    "The camera-fixed model varies only the surface-16 rear gap from 27.39997mm at infinity " +
    "to 38.36529mm at the patent's 800mm object distance (|β| = 0.126); " +
    "no internal movement is reconstructed.",

  nominalFno: 2.05,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 12,

  yScFill: 0.65,
} satisfies LensDataInput;

export default LENS_DATA;
