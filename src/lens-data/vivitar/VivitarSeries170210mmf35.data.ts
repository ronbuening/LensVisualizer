import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VIVITAR SERIES 1 70-210mm f/3.5 VMC MACRO FOCUSING AUTO ZOOM ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP S51-63635, Table 1; English counterpart US 3,817,600.          ║
 * ║  Native patent prescription, without focal-length scaling.                  ║
 * ║  15 elements / 10 air-separated groups / all spherical.                    ║
 * ║                                                                              ║
 * ║  Four principal power groups: positive / negative / negative / positive.    ║
 * ║  Zoom gaps: D5, D10, and D13; their endpoint sum is constant to 0.001 mm.   ║
 * ║  Normal focus: Group I moves objectward to approximately 1.8 m from r1.     ║
 * ║  Macro: at the tele endpoint, Groups II and III move objectward equally,    ║
 * ║  retaining D10 = 6.000 mm.                                                   ║
 * ║                                                                              ║
 * ║  FOCUS-MODE LIMITATION: LensDataInput currently provides one linear focus   ║
 * ║  interval per zoom position. The close endpoints below reproduce wide-end   ║
 * ║  normal focus and tele-end maximum macro focus. Intermediate focus-slider   ║
 * ║  positions do not reproduce the lens's two-stage front-focus/macro cam path.║
 * ║                                                                              ║
 * ║  BFD: the patent omits a final image-plane distance. A fixed 40.003152 mm    ║
 * ║  BFD is the mean of independently traced wide/tele paraxial BFL values      ║
 * ║  (39.991236 and 40.015068 mm), leaving only ±0.011916 mm endpoint defocus.  ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent gives no clear apertures. Values were inferred  ║
 * ║  from paraxial marginal/chief-ray envelopes, the production 67 mm accessory ║
 * ║  thread, patent-figure proportions, and renderer geometry constraints.      ║
 * ║                                                                              ║
 * ║  Glass names identify catalog equivalents, not proven production melts.     ║
 * ║  nC/nF/ng values are from the cited legacy SUMITA glass table; the patent   ║
 * ║  itself supplies only nd and νd.                                             ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "vivitar-series-1-70-210-f35",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 70-210mm f/3.5 VMC MACRO FOCUSING AUTO ZOOM",
  subtitle: "JP S51-63635 TABLE 1 — RINZŌ WATANABE / ELLIS I. BETENSKY",

  catalog: {
    lensMounts: ["m42", "minolta-sr", "canon-fl", "canon-fd", "nikon-f", "konica-ar", "olympus-om", "pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 10 GROUPS",
      "70-210mm (PATENT 70-205mm)",
      "f/3.5 (PATENT 1:3.65)",
      "MACRO 1:2.2 / 80 mm WORKING DISTANCE",
      "ALL-SPHERICAL",
    ],
    elementCount: 15,
    groupCount: 10,
    focalLengthMm: { marketing: [70, 210], design: [71.979219, 203.013778] },
    fNumber: { marketing: 3.5, design: 3.65 },
  },

  source: {
    patentNumber: "JP S51-63635 A",
    patentYear: 1976,
    authors: ["Rinzo Watanabe", "Ellis I. Betensky"],
    assignees: ["Kino Seimitsu Kogyo K.K."],
  },

  /* ── Elements ──
   * fl values are standalone thick-lens focal lengths in air. They do not
   * describe the in-situ power of a component while cemented to its partner.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -159.9,
      glass: "SF1 (SUMITA legacy catalog; HIKARI J-SF1 equivalent)",
      role: "Negative flint component of the positive front achromat.",
      cemented: "D1",
      nC: 1.71031,
      nF: 1.73462,
      ng: 1.74916,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      focalLengthMm: 114.4,
      glass: "SK5 (SUMITA legacy catalog; HIKARI J-SK5 equivalent)",
      role: "Positive crown component of the front achromat.",
      cemented: "D1",
      nC: 1.58619,
      nF: 1.59581,
      ng: 1.601,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.51009,
      vd: 63.4,
      focalLengthMm: 182.4,
      glass: "BK1 (SUMITA legacy catalog; OHARA BSL1 equivalent)",
      role: "Weak positive meniscus completing focusing Group I.",
      nC: 1.50762,
      nF: 1.51567,
      ng: 1.52,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.7,
      focalLengthMm: 76.4,
      glass: "SF11 (SUMITA legacy catalog; HIKARI J-SF11 equivalent)",
      role: "Positive dense-flint component of the nearly afocal Group II doublet.",
      cemented: "D2",
      nC: 1.77597,
      nF: 1.80649,
      ng: 1.82525,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.66672,
      vd: 48.4,
      focalLengthMm: -79.6,
      glass: "BAF11 (SUMITA legacy catalog; HIKARI J-BAF11 equivalent)",
      role: "Negative barium-flint component of the Group II achromat.",
      cemented: "D2",
      nC: 1.6626,
      nF: 1.67638,
      ng: 1.68412,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.66672,
      vd: 48.4,
      focalLengthMm: -60.3,
      glass: "BAF11 (SUMITA legacy catalog; HIKARI J-BAF11 equivalent)",
      role: "Principal negative-power singlet of variator Group II.",
      nC: 1.6626,
      nF: 1.67638,
      ng: 1.68412,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.52249,
      vd: 59.6,
      focalLengthMm: -37.7,
      glass: "K5 (SUMITA legacy catalog)",
      role: "Strong negative crown component of compensator Group III.",
      cemented: "D3",
      nC: 1.51982,
      nF: 1.52858,
      ng: 1.53335,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.62588,
      vd: 35.6,
      focalLengthMm: 68.1,
      glass: "F1 (SUMITA legacy catalog; HIKARI J-F1 equivalent)",
      role: "Positive flint partner setting the Group III chromatic balance.",
      cemented: "D3",
      nC: 1.62073,
      nF: 1.63829,
      ng: 1.64855,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70,
      focalLengthMm: 54,
      glass: "FK5 class (SUMITA legacy / HIKARI J-FK5)",
      role: "Low-index fluor-crown-class positive element in master Group IV.",
      cemented: "D4",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: -134.4,
      glass: "SF6 (SUMITA legacy catalog; HIKARI J-SF6 equivalent)",
      role: "Dense-flint achromatizing partner of L9.",
      cemented: "D4",
      nC: 1.7961,
      nF: 1.82773,
      ng: 1.84701,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70,
      focalLengthMm: 158.9,
      glass: "FK5 class (SUMITA legacy / HIKARI J-FK5)",
      role: "Weak positive fluor-crown-class relay element.",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70,
      focalLengthMm: 58.3,
      glass: "FK5 class (SUMITA legacy / HIKARI J-FK5)",
      role: "Positive low-index component of the second Group IV achromat.",
      cemented: "D5",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.64328,
      vd: 47.8,
      focalLengthMm: -77,
      glass: "BAF9 (SUMITA legacy catalog)",
      role: "Negative barium-flint partner preceding the aperture stop.",
      cemented: "D5",
      nC: 1.63926,
      nF: 1.65273,
      ng: 1.66034,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.697,
      vd: 48.5,
      focalLengthMm: -47.5,
      glass: "LAFN2 (SUMITA legacy; OHARA S-LAM59 equivalent)",
      role: "Strong negative lanthanum-flint element in the rear relay section.",
      nC: 1.6927,
      nF: 1.70708,
      ng: 1.71514,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.58921,
      vd: 41,
      focalLengthMm: 65.8,
      glass: "LF2 (SUMITA legacy catalog; OHARA PBL22 equivalent)",
      role: "Final positive singlet completing the rear negative subassembly.",
      nC: 1.58496,
      nF: 1.59934,
      ng: 1.6076,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 268.54, d: 1.9, sd: 31.8, medium: 1 },
    { label: "2", R: 80.13, d: 6.9, sd: 29.2, medium: 2 },
    { label: "3", R: -410.77, d: 0.3, sd: 29.2 },
    { label: "4", R: 90.6, d: 5.3, sd: 28.8, medium: 3 },
    { label: "5", R: 3376.49, sd: 28.8 },
    { label: "6", R: 222.96, d: 4.7, sd: 22.0, medium: 4 },
    { label: "7", R: -81.3, d: 1.3, sd: 22.0, medium: 5 },
    { label: "8", R: 154.03, d: 2.7, sd: 19.5 },
    { label: "9", R: -184.02, d: 1, sd: 19.5, medium: 6 },
    { label: "10", R: 51.53, sd: 16.0 },
    { label: "11", R: -47.69, d: 1, sd: 16.0, medium: 7 },
    { label: "12", R: 33.79, d: 4.8, sd: 17.5, medium: 8 },
    { label: "13", R: 153.92, sd: 17.5 },
    { label: "14", R: 88.43, d: 6.5, sd: 17.0, medium: 9 },
    { label: "15", R: -36.55, d: 1.46, sd: 17.0, medium: 10 },
    { label: "16", R: -56.17, d: 0.3, sd: 17.0 },
    { label: "17", R: 61.15, d: 3.87, sd: 17.0, medium: 11 },
    { label: "18", R: 284.27, d: 0.3, sd: 17.0 },
    { label: "19", R: 38.35, d: 6, sd: 17.0, medium: 12 },
    { label: "20", R: -104.13, d: 1.023, sd: 17.0, medium: 13 },
    // The source places the stop directly behind r21 but gives no distance. Model its aperture plane at 1.2 mm,
    // rounding the 1.194486 mm clear-cap sag upward to 0.1 mm for forward clearance. This is not an iris measurement.
    // Preserve the published 49.846 mm r21–r22 vertex gap; the stop radius is derived from the design f-number,
    // f/3.65 at the wide end.
    { label: "21", R: 94.78, d: 1.2, sd: 15 },
    { label: "STO", R: "flat", d: 48.646 },
    { label: "22", R: -20.19, d: 1.48, sd: 16.0, medium: 14 },
    { label: "23", R: -53.33, d: 0.267, sd: 16.0 },
    { label: "24", R: 135.84, d: 4, sd: 16.0, medium: 15 },
    { label: "25", R: -53.64, d: 40.003152, sd: 16.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 70, label: "Wide" },
      { focalLengthMm: 205, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.29,
    description:
      "Group I unit focus to about 2 m from the image plane; tele-end macro focus by equal objectward movement of Groups II and III at fixed 6.000 mm separation.",
  },

  /* (moved from var) ── Variable spacings ──
   * Wide close endpoint: Group I normal focus to 1.8 m from r1 (~2.0 m from image plane).
   * Tele close endpoint: maximum macro state, 80 mm object distance from r1.
   */
  gaps: {
    "5": {
      label: "D(I-II)",
      values: [
        [2.041, 11.461944992],
        [47.555, 11.780356017],
      ],
    },
    "10": {
      label: "D(II-III)",
      values: [
        [28.624, 28.624],
        [6, 6],
      ],
    },
    "13": {
      label: "D(III-IV)",
      values: [
        [24.389, 24.389],
        [1.5, 46.736703557],
      ],
    },
  },

  aperture: { nominalFNumber: 3.65, fStops: [3.65, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "GROUP I · FOCUS", fromSurface: "1", toSurface: "5" },
    { text: "GROUP II · VARIATOR", fromSurface: "6", toSurface: "10" },
    { text: "GROUP III · COMPENSATOR", fromSurface: "11", toSurface: "13" },
    { text: "GROUP IV · MASTER", fromSurface: "14", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "14", toSurface: "16" },
    { text: "D5", fromSurface: "19", toSurface: "21" },
  ],

  layout: { scFill: 0.63, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
