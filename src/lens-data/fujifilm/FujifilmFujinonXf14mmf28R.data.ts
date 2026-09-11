import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 14mm f/2.8 R                            ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2015/0168694 A1, Example 1 (FUJIFILM Corporation).           ║
 * ║ Native-scale d-line prescription: 10 elements / 7 air-separated groups. ║
 * ║ Aspheres: source surfaces 3, 4, 14, and 15 (L12 and L34).               ║
 * ║                                                                            ║
 * ║ PP normalization: source surfaces 19–20 are the optional sensor-side     ║
 * ║ cover/filter proxy and are omitted. Surface 18 uses the Gaussian air     ║
 * ║ BFD independently recomputed from the rounded active prescription,       ║
 * ║ 13.3054559007 mm. Directly air-converting the published 11.46 mm air     ║
 * ║ gap plus 2.80 mm / 1.51680 PP gives 13.3059915612 mm; the 0.0005356605   ║
 * ║ mm difference is below the precision of the rounded source table.        ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that only    ║
 * ║ G3 moves objectward for close focus; FUJIFILM specifies 0.18 m MFD       ║
 * ║ measured from the sensor plane. The code-solved 0.18 m state moves G3    ║
 * ║ 1.7804202520 mm objectward: STO→G3 changes 4.0000000000→2.2195797480     ║
 * ║ mm and the rear air gap changes 13.3054559007→15.0858761527 mm, with    ║
 * ║ the image plane fixed. These close-focus spacings are reconstructed,     ║
 * ║ not patent-published.                                                      ║
 * ║                                                                            ║
 * ║ Glass policy: the patent publishes only nd/νd coordinates. The `glass`   ║
 * ║ strings use coordinate-compatible OHARA catalog equivalents to provide   ║
 * ║ a reproducible dispersion model; they are not assertions of FUJIFILM's   ║
 * ║ production melt/vendor identities. Runtime dispersion uses the compatible ║
 * ║ catalog curves; no catalog-derived line indices override those curves.   ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent does not tabulate apertures. SDs are inferred ║
 * ║ from the independently traced pupil/field envelopes, the exact 0.6-field ║
 * ║ default off-axis fan, the patent Fig. 1 silhouette, and the current      ║
 * ║ edge-thickness/rim-slope/cross-gap constraints. The 0.15 mm L34→L35     ║
 * ║ gap is the limiting shared-band clearance.                                ║
 * ║                                                                            ║
 * ║ No uniform scaling is applied. nominalFno = 2.88 is the patent/model     ║
 * ║ value used for stop and pupil geometry; the production marking is f/2.8. ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinon-xf-14mm-f28-r",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 14mm f/2.8 R",
  subtitle: "US 2015/0168694 A1 Example 1 — production correlation to XF14mmF2.8 R",
  specs: [
    "10 ELEMENTS / 7 GROUPS",
    "14 mm / 21 mm equivalent",
    "F2.8 marketed / F2.88 modeled",
    "90.8° marketed angle of view",
    "2 ASPHERICAL + 3 ED ELEMENTS (marketed)",
  ],

  focalLengthMarketing: 14,
  focalLengthDesign: 14.466432570923013,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2015/0168694 A1",
  patentAuthors: ["Takashi Suzuki", "Kenichi Sato", "Taiga Noda"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2015,
  elementCount: 10,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.57135,
      vd: 53.0,
      fl: -33.620727843504,
      glass: "S-BAL3 (OHARA equivalent; 571530 class)",
      role: "Object-side negative meniscus of G1.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58312,
      vd: 59.4,
      fl: -20.624867327918242,
      glass: "S-BAL42 (OHARA equivalent; 583594 class)",
      role: "Second negative meniscus of G1; double-sided asphere.",
    },
    {
      id: 3,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.88299,
      vd: 40.8,
      fl: 11.07889644728391,
      glass: "S-LAH58 (OHARA equivalent; 883408 class)",
      role: "Positive member of the cemented G2 doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L22",
      diagramLabel: "L22",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      fl: -20.92727287619095,
      glass: "S-FTM16 (OHARA equivalent; 593353 class)",
      role: "Negative member of the cemented G2 doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      fl: -17.617411017377513,
      glass: "S-TIL2 (OHARA equivalent; 541472 class)",
      role: "Negative member of the first cemented pair in G3.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L32",
      diagramLabel: "L32",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      apd: "inferred",
      apdNote: "Compatible S-FPL51 catalog curve gives dPgF approximately 0.03074; patent publishes nd/vd only. APD is a proxy inference, not a production material identification.",
      fl: 21.27961866283779,
      glass: "S-FPL51 (OHARA equivalent; 497816 class)",
      role: "Low-dispersion positive member of the first cemented pair in G3.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L33",
      diagramLabel: "L33",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.7,
      apd: "inferred",
      apdNote: "Compatible S-FPM2 catalog curve gives dPgF approximately 0.01431; patent publishes nd/vd only. APD is a proxy inference, not a production material identification.",
      fl: 20.19048614884039,
      glass: "S-FPM2 (OHARA equivalent; 595677 class)",
      role: "Positive low-dispersion singlet in G3.",
    },
    {
      id: 8,
      name: "L34",
      diagramLabel: "L34",
      label: "Element 8",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58312,
      vd: 59.4,
      fl: 44.516479576395554,
      glass: "S-BAL42 (OHARA equivalent; 583594 class)",
      role: "Positive meniscus in G3; double-sided asphere.",
    },
    {
      id: 9,
      name: "L35",
      diagramLabel: "L35",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 38.1,
      fl: -16.773600978491952,
      glass: "S-NBH52 (OHARA equivalent; 673382 class; NR)",
      role: "Negative member of the image-side cemented pair in G3.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L36",
      diagramLabel: "L36",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      apd: "inferred",
      apdNote: "Compatible S-FPL51 catalog curve gives dPgF approximately 0.03074; patent publishes nd/vd only. APD is a proxy inference, not a production material identification.",
      fl: 22.899663549956614,
      glass: "S-FPL51 (OHARA equivalent; 497816 class)",
      role: "Low-dispersion positive member of the image-side cemented pair in G3.",
      cemented: "D3",
    },
  ],

  /* ── Surface prescription: US 2015/0168694 A1, Example 1, source surfaces 1–18 ── */
  surfaces: [
    { label: "1", R: 45.47, d: 1.28, nd: 1.57135, elemId: 1, sd: 13.0 },
    { label: "2", R: 13.366, d: 5.87, nd: 1.0, elemId: 0, sd: 11.9 },
    { label: "3A", R: 34.115, d: 2.5, nd: 1.58312, elemId: 2, sd: 8.4 },
    { label: "4A", R: 8.652, d: 4.36, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "5", R: 19.242, d: 9.35, nd: 1.88299, elemId: 3, sd: 7.0 },
    { label: "6", R: -15.365, d: 1.04, nd: 1.5927, elemId: 4, sd: 5.6 },
    { label: "7", R: 65.976, d: 3.5, nd: 1.0, elemId: 0, sd: 5.0 },
    { label: "STO", R: 1e15, d: 4.0, nd: 1.0, elemId: 0, sd: 4.142787701151391 },
    { label: "9", R: -135.66, d: 0.81, nd: 1.54072, elemId: 5, sd: 5.0 },
    { label: "10", R: 10.267, d: 3.56, nd: 1.497, elemId: 6, sd: 5.2 },
    { label: "11", R: 310.98, d: 0.15, nd: 1.0, elemId: 0, sd: 5.9 },
    { label: "12", R: 16.67, d: 4.58, nd: 1.59522, elemId: 7, sd: 6.4 },
    { label: "13", R: -38.648, d: 3.48, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "14A", R: -31.646, d: 3.99, nd: 1.58312, elemId: 8, sd: 7.5 },
    { label: "15A", R: -14.923, d: 0.15, nd: 1.0, elemId: 0, sd: 8.1 },
    { label: "16", R: -24.453, d: 1.05, nd: 1.673, elemId: 9, sd: 8.1 },
    { label: "17", R: 21.331, d: 8.08, nd: 1.497, elemId: 10, sd: 9.0 },
    { label: "18", R: -21.331, d: 13.305455900668472, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  /* ── Aspheres: source-convention K = 0 converted to project K = -1 ── */
  asph: {
    "3A": {
      K: -1,
      A3: 1.0465349e-3,
      A4: -1.4397107e-3,
      A5: 1.0398983e-3,
      A6: -3.1920537e-4,
      A7: 9.8764948e-6,
      A8: 2.0049033e-5,
      A9: -4.523444e-6,
      A10: -1.2044515e-7,
      A11: 1.6644987e-7,
      A12: -1.5441504e-8,
      A13: -2.0089199e-9,
      A14: 4.2314856e-10,
      A15: -4.4798993e-12,
      A16: -4.0229593e-12,
      A17: 2.6771169e-13,
      A18: 8.864113e-15,
      A19: -1.468078e-15,
      A20: 4.1786408e-17,
    },
    "4A": {
      K: -1,
      A3: -2.0064589e-4,
      A4: 8.7627361e-4,
      A5: -4.6280566e-4,
      A6: 5.4357538e-5,
      A7: 5.3965805e-5,
      A8: -1.8881007e-5,
      A9: -1.2980213e-6,
      A10: 1.4300798e-6,
      A11: -9.878293e-8,
      A12: -4.7407088e-8,
      A13: 6.8759162e-9,
      A14: 6.8689587e-10,
      A15: -1.7107481e-10,
      A16: -1.262354e-12,
      A17: 1.9335761e-12,
      A18: -6.5410638e-14,
      A19: -8.3761467e-15,
      A20: 4.7807633e-16,
    },
    "14A": {
      K: -1,
      A3: 6.6209788e-4,
      A4: -3.0527109e-4,
      A5: -3.7260454e-4,
      A6: 5.0663981e-4,
      A7: -2.4264898e-4,
      A8: 3.8450732e-5,
      A9: 9.5922739e-6,
      A10: -4.7789385e-6,
      A11: 4.4093736e-7,
      A12: 1.0955244e-7,
      A13: -2.6889472e-8,
      A14: 5.1554995e-10,
      A15: 4.1805549e-10,
      A16: -4.3160704e-11,
      A17: -6.5726519e-13,
      A18: 3.3491667e-13,
      A19: -1.8401488e-14,
      A20: 2.8240933e-16,
    },
    "15A": {
      K: -1,
      A3: 1.8582591e-3,
      A4: -2.258189e-3,
      A5: 1.3297504e-3,
      A6: -2.6424215e-4,
      A7: -5.0654566e-5,
      A8: 2.8177517e-5,
      A9: -8.5212341e-7,
      A10: -1.1794696e-6,
      A11: 1.0703228e-7,
      A12: 3.2734368e-8,
      A13: -4.4313123e-9,
      A14: -5.5463438e-10,
      A15: 1.0524468e-10,
      A16: 4.0137487e-12,
      A17: -1.3923536e-12,
      A18: 2.3442922e-14,
      A19: 7.1987544e-15,
      A20: -3.4821496e-16,
    },
  },

  /* ── Focus reconstruction: only G3 translates; image plane fixed ── */
  var: {
    STO: [4.0, 2.2195797479604145],
    "18": [13.305455900668472, 15.085876152708057],
  },
  varLabels: [
    ["STO", "D8 (G3 front)"],
    ["18", "BF"],
  ],

  /* ── Group and cemented-pair annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "4A" },
    { text: "G2", fromSurface: "5", toSurface: "7" },
    { text: "G3", fromSurface: "9", toSurface: "18" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.18,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: only G3 moves 1.780420252 mm objectward from infinity to 0.18 m; " +
    "D8 and BF vary with a fixed image plane. Close-focus spacings are code-solved, not patent-published.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,

  /* ── Layout ── */
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
