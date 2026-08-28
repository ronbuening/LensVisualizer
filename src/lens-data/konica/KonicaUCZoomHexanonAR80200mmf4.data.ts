import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — KONICA UC ZOOM HEXANON AR 80–200mm f/4                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JPS51-37247A (JP1976-037247), Example 1, Hideo Shizume /          ║
 * ║ Konishiroku Photo Industry Co., Ltd.                                      ║
 * ║ 14 elements / 10 groups, all spherical. No scale factor is applied.       ║
 * ║                                                                            ║
 * ║ ZOOM MODEL                                                                 ║
 * ║ - Patent print order for the variable gaps is tele -> wide; this file      ║
 * ║   normalizes them to ascending wide -> tele zoom positions.                ║
 * ║ - Patent d13 is split by the inferred aperture stop: r13->STO plus         ║
 * ║   STO->r14 = 2.530 mm. The two parts sum to the published d13 at each      ║
 * ║   endpoint.                                                                ║
 * ║ - The patent's raw surface table computes EFL = 80.879304 / 199.749083 mm  ║
 * ║   and BFD = 49.502094 / 49.487008 mm, rather than the printed              ║
 * ║   f = 79.925 / 196.158 mm and fB = 48.523 mm. No refracting surface is     ║
 * ║   altered. `zoomPositions` retains the printed patent endpoint values,     ║
 * ║   while `focalLengthDesign` stores the independently traced EFLs. The      ║
 * ║   model uses the traced paraxial BFDs for r24->IMG.                         ║
 * ║                                                                            ║
 * ║ FOCUS MODEL — CONSTRAINED_RECONSTRUCTION                                  ║
 * ║ - The patent specifies close focusing by moving only the front positive    ║
 * ║   component toward the object. The patent gives no close-focus spacing     ║
 * ║   table. A common 27.690051647 mm extension is code-solved from the        ║
 * ║   manufacturer's 0.7 m film-plane MFD; no additional internal motion is    ║
 * ║   modeled.                                                                 ║
 * ║                                                                            ║
 * ║ STOP / SEMI-DIAMETERS                                                      ║
 * ║ - Stop station is inferred from Fig. 1: 2.530 mm objectward of r14.        ║
 * ║   Stop radius 15.628207312 mm is the mean endpoint radius that gives the   ║
 * ║   raw prescription approximately f/4 at both zoom endpoints.               ║
 * ║ - Lens semi-diameters are inferred, because the patent publishes none.     ║
 * ║   They are constrained by paraxial marginal/chief rays, the 21.6 mm        ║
 * ║   image-height evidence, the optical section, the 62 mm production filter  ║
 * ║   size, positive edge thickness, actual spherical rim slope, and all-state ║
 * ║   cross-gap clearance.                                                      ║
 * ║ - The r7-r8 air lens is physically tight. gapSagFrac = 0.98 is used only   ║
 * ║   for this lens: at the shared 14.9 mm band it retains 0.176 mm real       ║
 * ║   axial clearance while avoiding artificial stop-down of the tele marginal ║
 * ║   ray. This is a geometry tolerance, not a layout/render concealment.       ║
 * ║                                                                            ║
 * ║ GLASS DATA                                                                 ║
 * ║ - The patent publishes only nd and vd. Glass strings use neutral six-digit ║
 * ║   coordinate-compatible catalog curves as supplier-neutral coefficient     ║
 * ║   proxies. nC, nF, ng, and dPgF remain unauthored, and no proxy asserts a   ║
 * ║   historical production melt.                                               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "konica-uc-zoom-hexanon-ar-80-200-f4",
  maker: "Konica",
  name: "KONICA UC ZOOM HEXANON AR 80–200mm f/4",
  subtitle: "JPS51-37247A Example 1 — raw prescription with disclosed stop/focus reconstruction",
  specs: ["14 ELEMENTS / 10 GROUPS", "80–200mm f/4", "0.7 m MFD", "ALL SPHERICAL"],

  focalLengthMarketing: [80, 200],
  focalLengthDesign: [80.87930415610688, 199.74908322312632],
  apertureMarketing: 4,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JPS51-37247A",
  patentAuthors: ["Hideo Shizume"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1976,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1a",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -157.46368877051538,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Front negative member of the cemented pair in the positive focusing component F1.",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 1b",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      fl: 100.8986769473202,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Positive rear member of the front cemented pair; the pair is positive net.",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: 162.60693489330663,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      role: "Positive singlet completing the front focusing component F1.",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: -67.78176463845728,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      role: "Negative singlet at the front of the variator component F2.",
    },
    {
      id: 5,
      name: "L4a",
      label: "Element 4a",
      type: "Biconcave Negative",
      nd: 1.62299,
      vd: 58.2,
      fl: -34.46303962366176,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Strong negative member of the cemented pair in variator F2.",
    },
    {
      id: 6,
      name: "L4b",
      label: "Element 4b",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 58.9235702608087,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Positive high-index partner in the net-negative cemented pair of F2.",
    },
    {
      id: 7,
      name: "L5a",
      label: "Element 5a",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      fl: 64.0342119016787,
      glass: "S-BSM15 catalog-equivalent coefficient proxy (patent 623582; production supplier unspecified)",
      apd: false,
      cemented: "D3",
      role: "Positive front member of the compensator component F3.",
    },
    {
      id: 8,
      name: "L5b",
      label: "Element 5b",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -170.64768472062443,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
      cemented: "D3",
      role: "Negative high-index rear member of the positive compensator doublet F3.",
    },
    {
      id: 9,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.54077,
      vd: 47.2,
      fl: 154.31011535467894,
      glass: "S-TIL2 catalog-equivalent coefficient proxy (patent 541472; production supplier unspecified)",
      apd: false,
      role: "Positive singlet immediately behind the aperture stop in rear component F4.",
    },
    {
      id: 10,
      name: "L7a",
      label: "Element 7a",
      type: "Biconvex Positive",
      nd: 1.53172,
      vd: 48.9,
      fl: 49.78192028653342,
      glass:
        "S-TIL6 catalog-equivalent coefficient proxy (patent 532489 at nd 1.53172; production supplier unspecified)",
      apd: false,
      cemented: "D4",
      role: "Strong positive front member of the cemented pair in rear component F4.",
    },
    {
      id: 11,
      name: "L7b",
      label: "Element 7b",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -44.22327280529317,
      glass: "E-FD4 catalog-equivalent coefficient proxy (patent 755275; production supplier unspecified)",
      apd: false,
      cemented: "D4",
      role: "Negative high-index partner of the weakly positive cemented pair in F4.",
    },
    {
      id: 12,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.53177,
      vd: 48.9,
      fl: 52.24814420341493,
      glass:
        "S-TIL6 catalog-equivalent coefficient proxy (patent 532489 at nd 1.53177; production supplier unspecified)",
      apd: false,
      role: "Positive first singlet of the final three-singlet component F5.",
    },
    {
      id: 13,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.7432,
      vd: 49.4,
      fl: -24.558290523536698,
      glass: "S-LAM60 catalog-equivalent coefficient proxy (patent 743494; production supplier unspecified)",
      apd: false,
      role: "Strong negative middle singlet of F5.",
    },
    {
      id: 14,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      fl: 59.05561552874483,
      glass: "S-TIL26 catalog-equivalent coefficient proxy (patent 567428; production supplier unspecified)",
      apd: false,
      role: "Positive final singlet before the image plane.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 300.239, d: 2.0, nd: 1.80518, elemId: 1, sd: 26.5 },
    { label: "2", R: 88.878, d: 6.1, nd: 1.62299, elemId: 2, sd: 26.5 },
    { label: "3", R: -209.061, d: 0.1, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "4", R: 79.669, d: 4.5, nd: 1.62299, elemId: 3, sd: 26.5 },
    { label: "5", R: 364.975, d: 2.535, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "6", R: 360.022, d: 1.4, nd: 1.62299, elemId: 4, sd: 18.5 },
    { label: "7", R: 37.738, d: 5.85, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "8", R: -43.86, d: 1.2, nd: 1.62299, elemId: 5, sd: 14.9 },
    { label: "9", R: 42.5, d: 3.6, nd: 1.80518, elemId: 6, sd: 17.2 },
    { label: "10", R: 392.427, d: 33.846, nd: 1.0, elemId: 0, sd: 17.2 },
    { label: "11", R: 120.028, d: 4.5, nd: 1.62299, elemId: 7, sd: 17.0 },
    { label: "12", R: -58.892, d: 1.5, nd: 1.80518, elemId: 8, sd: 17.0 },
    { label: "13", R: -104.239, d: 9.061, nd: 1.0, elemId: 0, sd: 17.0 },
    // STO position is inferred from patent Fig. 1; 9.061 + 2.530 = published wide d13 = 11.591 mm.
    { label: "STO", R: 1e15, d: 2.53, nd: 1.0, elemId: 0, sd: 15.628207312428374 },
    { label: "14", R: 71.579, d: 3.0, nd: 1.54077, elemId: 9, sd: 16.5 },
    { label: "15", R: 495.913, d: 0.1, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "16", R: 30.407, d: 13.0, nd: 1.53172, elemId: 10, sd: 16.5 },
    { label: "17", R: -174.099, d: 2.0, nd: 1.7552, elemId: 11, sd: 16.5 },
    { label: "18", R: 41.529, d: 30.0, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "19", R: 49.454, d: 4.5, nd: 1.53177, elemId: 12, sd: 11.5 },
    { label: "20", R: -61.404, d: 2.0, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "21", R: -29.989, d: 1.5, nd: 1.7432, elemId: 13, sd: 14.0 },
    { label: "22", R: 47.628, d: 3.0, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "23", R: 48.034, d: 5.0, nd: 1.56732, elemId: 14, sd: 14.0 },
    { label: "24", R: -106.58, d: 49.502094162047726, nd: 1.0, elemId: 0, sd: 14.0 },
  ],

  asph: {},

  /* ── Zoom + constrained focus spacings ── */
  var: {
    "5": [
      [2.535, 30.2250516470292],
      [36.375, 64.0650516470292],
    ],
    "10": [
      [33.846, 33.846],
      [0.381, 0.381],
    ],
    "13": [
      [9.061, 9.061],
      [8.686, 8.686],
    ],
    "24": [
      [49.502094162047726, 49.502094162047726],
      [49.48700818160646, 49.48700818160646],
    ],
  },
  varLabels: [
    ["5", "D5 (ZOOM + FOCUS)"],
    ["10", "D10 (ZOOM)"],
    ["13", "D13→STO (ZOOM)"],
    ["24", "BF (NORMALIZED)"],
  ],

  zoomPositions: [79.925, 196.158],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "F1", fromSurface: "1", toSurface: "5" },
    { text: "F2", fromSurface: "6", toSurface: "10" },
    { text: "F3", fromSurface: "11", toSurface: "13" },
    { text: "F4", fromSurface: "14", toSurface: "18" },
    { text: "F5", fromSurface: "19", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
  ],

  closeFocusM: 0.7,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: front positive component only; common 27.690051647 mm objectward extension solved from the 0.7 m film-plane MFD. Patent supplies no close-focus spacing table.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16],

  gapSagFrac: 0.98,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
