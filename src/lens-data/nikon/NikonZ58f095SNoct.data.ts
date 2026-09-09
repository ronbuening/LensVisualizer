import type { LensDataInput } from "../../types/optics.js";

/** WO2019229849A1 Example 1; original table pp.21–23, equation p.20, Figure1 p.46.
 * Source surfaces/aspheres retained except separate filter rows29–30 omitted.
 * Final gap includes their equivalent-air propagation; compound lens members remain.
 * Figure rims exclude mechanical shoulders, with constrained facing S3/S4 optical radii.
 * Catalog names identify inferred coordinate counterparts, not production suppliers.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-58f095-noct",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 58mm f/0.95 S Noct",
  subtitle: "WO2019/229849 A1 EXAMPLE 1 — NIKON / TSUBONOYA, HARADA, TAKE",
  specs: ["17 ELEMENTS / 10 GROUPS", "f = 59.62 mm", "F/0.98", "2ω = 39.96°", "3 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 58,
  focalLengthDesign: 59.62,
  apertureMarketing: 0.95,
  apertureDesign: 0.98,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2019/229849 A1",
  patentAuthors: ["Keisuke Tsubonoya", "Hiroki Harada", "Toshinori Take"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2019,
  elementCount: 17,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.90265,
      vd: 35.77,
      fl: 106.97,
      glass: "903358 class; J-LASFH9 catalog spectral proxy (production supplier unspecified) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Da",
      role: "Front positive member of cemented Da with an aspheric object-side surface.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.552981,
      vd: 55.07,
      fl: -85.70,
      glass: "553551 class; J-KZFH4 catalog spectral proxy (patent dPgF retained) (inferred coordinate counterpart)",
      apd: "patent",
      dPgF: -0.00650226, apdNote: "Patent PgF=0.54467; deviation from runtime normal line 0.6438−0.001682νd is −0.00650226",
      cemented: "Da",
      role: "Negative member of Da; source partial dispersion lies below the runtime normal line.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      fl: -96.72,
      glass: "KZFS-type (near N-KZFS4 / S-NBM51) (inferred coordinate counterpart)",
      apd: "patent",
      dPgF: -0.00505828, apdNote: "Patent PgF=0.56396; deviation from runtime normal line is −0.00505828",
      cemented: "Db",
      role: "Negative member of Db; shares source glass coordinates and partial dispersion with L25.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 126.47,
      glass: "Coordinate counterpart (near S-FPM2 / FCD10; used ×3) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Db",
      role: "Positive member of Db; shares source coordinates with L22 and L23.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.8485,
      vd: 43.79,
      fl: 83.24,
      glass: "J-LASFH22 (Hikari, patent nd/vd match) (inferred coordinate counterpart)",
      apd: false,
      role: "Positive singlet at the entrance to G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 115.19,
      glass: "593679 class; J-PSKH1 catalog spectral proxy (production supplier unspecified) (inferred coordinate counterpart)",
      apd: false,
      role: "Positive singlet with a weak but finite rear curvature.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 123.54,
      glass: "593679 class; J-PSKH1 catalog spectral proxy (production supplier unspecified) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Jc",
      role: "Positive member of cemented Jc before the stop.",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.33,
      fl: -42.61,
      glass: "High-dispersion flint (near S-NBH53V; used ×2) (inferred coordinate counterpart)",
      apd: false,
      dPgF: 0.00054906, apdNote: "Patent PgF=0.58997; deviation from runtime normal line is +0.00054906, near normal",
      cemented: "Jc",
      role: "Negative member of Jc; source partial dispersion is near the runtime normal line.",
    },
    {
      id: 9,
      name: "L25",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      fl: -46.66,
      glass: "613445 class; J-KZFH1 catalog spectral proxy (patent dPgF retained) (inferred coordinate counterpart)",
      apd: "patent",
      dPgF: -0.00505828, apdNote: "Patent PgF=0.56396; deviation from runtime normal line is −0.00505828",
      cemented: "Jd",
      role: "Negative member of Jd after the stop; shares source coordinates with L13.",
    },
    {
      id: 10,
      name: "L26",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 72.81,
      glass: "Coordinate counterpart (near S-FPL51 / FCD1) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Jd",
      role: "Positive member of Jd with the highest source Abbe number in this example.",
    },
    {
      id: 11,
      name: "L27",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.69,
      fl: 50.56,
      glass: "S-LAH58 (OHARA); used ×3 (inferred coordinate counterpart)",
      apd: false,
      role: "Positive singlet in G2; shares source glass coordinates with L31 and L33.",
    },
    {
      id: 12,
      name: "L28",
      label: "Element 12",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.95375,
      vd: 32.33,
      fl: 51.79,
      glass: "S-LAH98 (OHARA) / TAFD45 (HOYA) (inferred coordinate counterpart)",
      apd: false,
      cemented: "De",
      role: "Positive member of De with an aspheric front face and the highest source index.",
    },
    {
      id: 13,
      name: "L29",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.33,
      fl: -40.94,
      glass: "738323 class; J-KZFH9 catalog spectral proxy (patent dPgF retained) (inferred coordinate counterpart)",
      apd: false,
      dPgF: 0.00054906, apdNote: "Patent PgF=0.58997; deviation from runtime normal line is +0.00054906, near normal",
      cemented: "De",
      role: "Negative member of De; its rear face bounds the variable D22 focus gap.",
    },
    {
      id: 14,
      name: "L31",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.69,
      fl: 50.71,
      glass: "S-LAH58 (OHARA; same as L27) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Df",
      role: "Positive member of the first fixed rear doublet Df.",
    },
    {
      id: 15,
      name: "L32",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      fl: -47.48,
      glass: "E-FD15 (HOYA, patent nd/vd match) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Df",
      role: "Negative member of Df with the lowest source Abbe number in this example.",
    },
    {
      id: 16,
      name: "L33",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.69,
      fl: 46.23,
      glass: "S-LAH58 (OHARA; same as L27) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Dg",
      role: "Positive member of the final fixed doublet Dg.",
    },
    {
      id: 17,
      name: "L34",
      label: "Element 17",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.765538,
      vd: 46.76,
      fl: -50.18,
      glass: "Q-LASFPH2S (Hikari, patent nd/vd match) (inferred coordinate counterpart)",
      apd: false,
      cemented: "Dg",
      role: "Final negative member with a fourteenth-order aspheric exit surface; fabrication method is unspecified.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1 (front corrector, negative): doublet Da (L11+L12), doublet Db (L13+L14) ──
    { label: "1A", R: 108.488, d: 7.65, nd: 1.90265, elemId: 1, sd: 33.5 }, // L11 front [asph]
    { label: "2", R: -848.55, d: 2.8, nd: 1.552981, elemId: 2, sd: 33 }, // L11→L12 junction
    { label: "3", R: 50.252, d: 18.12, nd: 1.0, elemId: 0, sd: 28.7 }, // L12 rear → air
    { label: "4", R: -60.72, d: 2.8, nd: 1.61266, elemId: 3, sd: 28.7 }, // L13 front
    { label: "5", R: 2497.5, d: 9.15, nd: 1.59319, elemId: 4, sd: 33 }, // L13→L14 junction
    { label: "6", R: -77.239, d: 0.4, nd: 1.0, elemId: 0, sd: 33 }, // L14 rear → air
    // ── G2 (master group, positive): L21, L22, Jc (L23+L24), [STO], Jd (L25+L26), L27, De (L28+L29) ──
    { label: "7", R: 113.763, d: 10.95, nd: 1.8485, elemId: 5, sd: 35.3 }, // L21 front
    { label: "8", R: -178.06, d: 0.4, nd: 1.0, elemId: 0, sd: 35.3 }, // L21 rear → air
    { label: "9", R: 70.659, d: 9.74, nd: 1.59319, elemId: 6, sd: 32.3 }, // L22 front
    { label: "10", R: -1968.5, d: 0.2, nd: 1.0, elemId: 0, sd: 32.3 }, // L22 rear → air
    { label: "11", R: 289.687, d: 8.0, nd: 1.59319, elemId: 7, sd: 29.5 }, // L23 front
    { label: "12", R: -97.087, d: 2.8, nd: 1.738, elemId: 8, sd: 29.5 }, // L23→L24 junction
    { label: "13", R: 47.074, d: 8.7, nd: 1.0, elemId: 0, sd: 25 }, // L24 rear → air
    { label: "STO", R: 1e15, d: 5.29, nd: 1.0, elemId: 0, sd: 24.8 }, // Aperture stop (patent surface 14)
    { label: "15", R: -95.23, d: 2.2, nd: 1.61266, elemId: 9, sd: 24.8 }, // L25 front
    { label: "16", R: 41.204, d: 11.55, nd: 1.49782, elemId: 10, sd: 24.8 }, // L25→L26 junction
    { label: "17", R: -273.092, d: 0.2, nd: 1.0, elemId: 0, sd: 24.8 }, // L26 rear → air
    { label: "18", R: 76.173, d: 9.5, nd: 1.883, elemId: 11, sd: 25.5 }, // L27 front
    { label: "19", R: -101.575, d: 0.2, nd: 1.0, elemId: 0, sd: 25.5 }, // L27 rear → air
    { label: "20A", R: 176.128, d: 7.45, nd: 1.95375, elemId: 12, sd: 23.3 }, // L28 front [asph]
    { label: "21", R: -67.221, d: 1.8, nd: 1.738, elemId: 13, sd: 22.8 }, // L28→L29 junction
    { label: "22", R: 55.51, d: 2.68, nd: 1.0, elemId: 0, sd: 19.5 }, // L29 rear → D22 [variable]
    // ── GR (rear corrector, weakly positive): doublet Df (L31+L32), doublet Dg (L33+L34) ──
    { label: "23", R: 71.413, d: 6.35, nd: 1.883, elemId: 14, sd: 19.5 }, // L31 front
    { label: "24", R: -115.025, d: 1.81, nd: 1.69895, elemId: 15, sd: 19.5 }, // L31→L32 junction
    { label: "25", R: 46.943, d: 0.8, nd: 1.0, elemId: 0, sd: 19.5 }, // L32 rear → air
    { label: "26", R: 55.281, d: 9.11, nd: 1.883, elemId: 16, sd: 19.2 }, // L33 front
    { label: "27", R: -144.041, d: 3.0, nd: 1.765538, elemId: 17, sd: 19.2 }, // L33→L34 junction
    { label: "28A", R: 52.858, d: 16.554852320675106, nd: 1.0, elemId: 0, sd: 19.2 }, // L34 rear [asph] → equivalent air to image: 14.5 + 1.6/1.5168 + 1
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 0,
      A4: -3.82177e-7,
      A6: -6.06486e-11,
      A8: -3.80172e-15,
      A10: -1.32266e-18,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: -1.15028e-6,
      A6: -4.51771e-10,
      A8: 2.7267e-13,
      A10: -7.66812e-17,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: 3.18645e-6,
      A6: -1.14718e-8,
      A8: 7.74567e-11,
      A10: -2.24225e-13,
      A12: 3.3479e-16,
      A14: -1.7047e-19,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire GF (surfaces 1A–22) translates toward object.
   *  GR (surfaces 23–28A) remains fixed.
   *  D22 = GF→GR air gap; increases from 2.68 mm (∞) to 21.29 mm (0.5 m).
   */
  var: {
    "22": [2.68, 21.29],
  },

  varLabels: [["22", "D22"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1A", toSurface: "6" },
    { text: "G2 (+)", fromSurface: "7", toSurface: "22" },
    { text: "GR (+)", fromSurface: "23", toSurface: "28A" },
  ],

  doublets: [
    { text: "Da", fromSurface: "1A", toSurface: "3" },
    { text: "Db", fromSurface: "4", toSurface: "6" },
    { text: "Jc", fromSurface: "11", toSurface: "13" },
    { text: "Jd", fromSurface: "15", toSurface: "17" },
    { text: "De", fromSurface: "20A", toSurface: "22" },
    { text: "Df", fromSurface: "23", toSurface: "25" },
    { text: "Dg", fromSurface: "26", toSurface: "28A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.4993674976187823,
  focusDescription:
    "Source near station beta−0.194 corresponds to about 49.94 cm in the filter-omitted model. GF and stop move 18.61 mm objectward; GR stays fixed. Intermediate motion is interpolated.",

  /* ── Aperture configuration ── */
  nominalFno: 0.98,
  fstopSeries: [0.98, 1.0, 1.1, 1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
