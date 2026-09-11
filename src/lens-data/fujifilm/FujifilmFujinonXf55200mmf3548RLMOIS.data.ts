import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — Fujifilm Fujinon XF 55-200mm f/3.5-4.8 R LM OIS           ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: DE 11 2013 006 887 B4, Example 1, Tables 1-3.                    ║
 * ║  Production correlation: FUJINON XF55-200mmF3.5-4.8 R LM OIS.             ║
 * ║  The patent does not name the retail lens; the correlation is inferred.    ║
 * ║                                                                              ║
 * ║  Native patent scale is retained. The patent's 56.68-194.28 mm source      ║
 * ║  stations are not uniformly scalable to the marketed 55-200 mm endpoints.  ║
 * ║  Independent paraxial tracing gives 56.6983-194.3379 mm.                   ║
 * ║                                                                              ║
 * ║  14 glass elements / 10 air-separated physical units. Patent functional    ║
 * ║  zoom groups: G1(+) G2(-) G3(+) G4(+) G5(-) G6(+). Exactly one stop,       ║
 * ║  source surface S11, lies between G2 and G3 and tracks G3 during zoom.      ║
 * ║                                                                              ║
 * ║  ZOOM: DD5, DD10, DD17, DD20, DD23 use the three published infinity       ║
 * ║  states. No sampled reversal occurs. G6 remains fixed to the image plane.  ║
 * ║                                                                              ║
 * ║  FOCUS STATUS — CONSTRAINED_RECONSTRUCTION: the patent publishes axial     ║
 * ║  focusing by G4 and objectward G4 motion toward near focus, but no finite-  ║
 * ║  focus spacing table. The close rows below solve the first-order conjugate  ║
 * ║  at the manufacturer's 1.1 m sensor-referenced MFD with G4 as the sole     ║
 * ║  moving group. DD17 decreases and DD20 increases by equal amounts,          ║
 * ║  preserving the G3-to-G5 envelope at every zoom station.                    ║
 * ║                                                                              ║
 * ║  OIS: the patent assigns transverse stabilization to G2. No numerical G2   ║
 * ║  decenter range is published, so no stabilization displacement is modeled. ║
 * ║                                                                              ║
 * ║  STOP: the physical stop radius is not published. sd = 9.460132942 mm is   ║
 * ║  inferred jointly from all three source f-numbers. With that common stop,   ║
 * ║  independent pupil tracing gives modeled f/3.563144, f/4.169123, and        ║
 * ║  f/4.976649; these modeled values are used for nominalFno.                  ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent publishes no clear-aperture table. SDs are      ║
 * ║  conservative modeled apertures derived from exact marginal/chief-ray       ║
 * ║  envelopes at all authored zoom/focus states, then checked for positive     ║
 * ║  edge thickness, actual rim slope, conic domain, cross-gap intrusion,       ║
 * ║  and off-axis containment. They are not source-published mechanical sizes.  ║
 * ║                                                                              ║
 * ║  REAR PLATES: patent PP surfaces S26-S31 represent cover/filter plates and  ║
 * ║  are omitted. S25-to-image is replaced by the verified paraxial air-         ║
 * ║  equivalent distance 23.313560574 mm.                                      ║
 * ║                                                                              ║
 * ║  GLASS: patent nd/vd coordinates are d-line values. Catalog names are       ║
 * ║  compatible spectral proxies, not proof of supplier. L31 uses D-LAF79-25 within the shared coordinate
 * ║  guard. Catalog curves supply dispersion directly; no copied catalog line indices override them.
 * ║  Fig. 1, PDF p25 at 600 dpi: L61 optical rims measure about 14.5 mm. S24/S25 were enlarged from 11 mm;
 * ║  the remaining SDs retain their modeled ray-clearance bounds. Plates and leader lines were excluded.
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer references:
 * - https://www.fujifilm-x.com/products/lenses/xf55-200mmf35-48-r-lm-ois/
 * - https://dl.fujifilm-x.com/support/manual/lenses/lens_xf10-24_xf18-55_xf55-200_manual_02.pdf
 * Glass reference: https://www.ohara-inc.co.jp/en/product/01000/
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-xf-55-200mm-f35-48-r-lm-ois",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 55-200mm f/3.5-4.8 R LM OIS",
  subtitle: "DE 11 2013 006 887 B4 Example 1 — inferred production correlation",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "6 FUNCTIONAL ZOOM GROUPS",
    "DESIGN f = 56.70-194.34 mm",
    "MODELED f/3.563-f/4.977",
    "2 ASPHERICAL SURFACES (1 ELEMENT)",
    "G4 INNER FOCUS / G2 OIS",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [55, 200],
  focalLengthDesign: [56.698317505, 194.337932167],
  apertureMarketing: 3.5,
  apertureDesign: 3.563144254,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "DE 11 2013 006 887 B4",
  patentAuthors: ["Tetsuya Ori", "Michio Cho"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2018,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements: source labels L11-L61 ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.58913,
      vd: 61.14,
      fl: 158.636803422,
      glass: "S-BAL35 (OHARA; coordinate match, supplier unspecified)",
      role: "G1 front positive collector",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.75,
      fl: -104.283110663,
      glass: "S-TIL25 (OHARA; coordinate match, supplier unspecified)",
      role: "G1 negative component of front cemented pair",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      fl: 78.517681098,
      glass: "S-FPL51 (OHARA; coordinate match, supplier unspecified)",
      apd: "inferred",
      apdNote: "APD inferred from the coordinate-compatible S-FPL51 catalog dispersion curve; the patent does not identify the supplier or publish this element’s partial dispersion.",
      role: "Low-dispersion positive component completing G1 cemented pair",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      diagramLabel: "L21",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.76,
      fl: -41.781454988,
      glass: "S-LAH58 (OHARA; coordinate match, supplier unspecified)",
      role: "G2 negative variator and transverse OIS group component",
    },
    {
      id: 5,
      name: "L22",
      diagramLabel: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.68,
      fl: -27.103509099,
      glass: "S-LAL18 (OHARA legacy; coordinate match, supplier unspecified)",
      role: "G2 negative component of cemented variator pair",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      diagramLabel: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: 46.59792675,
      glass: "923209 - dense flint class (supplier unresolved)",
      role: "G2 high-index positive component of cemented variator pair",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      diagramLabel: "L31",
      label: "Element 7",
      type: "Positive Meniscus (2x Asph)",
      nd: 1.72777,
      vd: 40.33,
      fl: 54.543964019,
      glass: "728403 — D-LAF79-25 compatible spectral proxy; patent vendor unspecified",
      role: "G3 post-stop double-sided asphere for spherical-aberration control",
    },
    {
      id: 8,
      name: "L32",
      diagramLabel: "L32",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.93,
      fl: 40.005886427,
      glass: "S-FPL53 (OHARA; coordinate match, supplier unspecified)",
      apd: "inferred",
      apdNote: "APD inferred from the coordinate-compatible S-FPL53 catalog dispersion curve; the patent does not identify the supplier or publish this element’s partial dispersion.",
      role: "G3 ultra-low-dispersion positive element",
    },
    {
      id: 9,
      name: "L33",
      diagramLabel: "L33",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -48.601494877,
      glass: "S-TIH53 (OHARA; coordinate match, supplier unspecified)",
      role: "G3 rear negative meniscus for high-order spherical-aberration control",
    },
    {
      id: 10,
      name: "L41",
      diagramLabel: "L41",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.7432,
      vd: 49.34,
      fl: 23.839718955,
      glass: "S-LAM60 (OHARA; coordinate match, supplier unspecified)",
      role: "G4 positive component of the translating inner-focus doublet",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L42",
      diagramLabel: "L42",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.801,
      vd: 34.97,
      fl: -38.487261624,
      glass: "S-LAM66 (OHARA; coordinate match, supplier unspecified)",
      role: "G4 negative component of the translating inner-focus doublet",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L51",
      diagramLabel: "L51",
      label: "Element 12",
      type: "Plano-Convex Positive",
      nd: 1.92286,
      vd: 18.9,
      fl: 73.884446178,
      glass: "S-NPH2 (OHARA; coordinate match, supplier unspecified)",
      role: "G5 positive component of the cemented negative group",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L52",
      diagramLabel: "L52",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.68,
      fl: -27.052498306,
      glass: "S-LAL18 (OHARA legacy; coordinate match, supplier unspecified)",
      role: "G5 negative component completing the cemented negative group",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L61",
      diagramLabel: "L61",
      label: "Element 14",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.23,
      fl: 113.976081561,
      glass: "S-FSL5 (OHARA; coordinate match, supplier unspecified)",
      role: "G6 fixed rear positive relay / chief-ray-angle moderating element",
    },
  ],

  /* ── Active sequential prescription ──
   * Cemented junctions carry the downstream element's elemId and index.
   */
  surfaces: [
    { label: "1", R: 93.4577, d: 4.3, nd: 1.58913, elemId: 1, sd: 25.0 },
    { label: "2", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 24.5 },
    { label: "3", R: 103.1337, d: 1.71, nd: 1.58144, elemId: 2, sd: 23.5 },
    { label: "4", R: 37.952, d: 7.15, nd: 1.497, elemId: 3, sd: 22.0 },
    { label: "5", R: 1295.9911, d: 14.332, nd: 1.0, elemId: 0, sd: 21.8 },
    { label: "6", R: -114.4807, d: 0.84, nd: 1.883, elemId: 4, sd: 9 },
    { label: "7", R: 54.623, d: 1.998, nd: 1.0, elemId: 0, sd: 9 },
    { label: "8", R: -39.704, d: 0.85, nd: 1.72916, elemId: 5, sd: 9 },
    { label: "9", R: 39.704, d: 2.2, nd: 1.92286, elemId: 6, sd: 9 },
    { label: "10", R: 503.7335, d: 15.857, nd: 1.0, elemId: 0, sd: 9 },
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 9.46013294201424 },
    { label: "12A", R: 35.2473, d: 3.2, nd: 1.72777, elemId: 7, sd: 10.5 },
    { label: "13A", R: 302.5188, d: 6.51, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "14", R: 68.0514, d: 5.7, nd: 1.43875, elemId: 8, sd: 12.0 },
    { label: "15", R: -23.0494, d: 0.3, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "16", R: 40.9271, d: 1.0, nd: 1.84666, elemId: 9, sd: 11.8 },
    { label: "17", R: 20.289, d: 6.488, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "18", R: 28.8457, d: 3.86, nd: 1.7432, elemId: 10, sd: 10.8 },
    { label: "19", R: -43.307, d: 0.85, nd: 1.801, elemId: 11, sd: 10.8 },
    { label: "20", R: 107.9227, d: 15.478, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "21", R: 1e15, d: 2.61, nd: 1.92286, elemId: 12, sd: 9.5 },
    { label: "22", R: -68.185, d: 1.1, nd: 1.72916, elemId: 13, sd: 9.5 },
    { label: "23", R: 27.9438, d: 6.213, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "24", R: 1e15, d: 3.58, nd: 1.48749, elemId: 14, sd: 14.5 },
    { label: "25", R: -55.5622, d: 23.31356057356319, nd: 1.0, elemId: 0, sd: 14.5 },
  ],

  /* Fujifilm patent convention: sqrt(1 - KA*c^2*h^2); project K = KA - 1, so KA=1 -> K=0. */
  asph: {
    "12A": {
      K: 0,
      A3: -1.214998e-5,
      A4: 4.7067069e-6,
      A5: -3.4603603e-6,
      A6: 4.1742359e-7,
      A7: -1.8773629e-8,
      A8: -1.2486166e-9,
      A9: 9.5621054e-11,
      A10: -5.6719225e-12,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A3: 8.2860572e-7,
      A4: 1.5620405e-5,
      A5: 4.0098895e-7,
      A6: -3.0524648e-7,
      A7: 4.2803201e-8,
      A8: -4.0112483e-10,
      A9: -3.4720627e-10,
      A10: 1.4077889e-11,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom and constrained-focus model ── */
  zoomPositions: [56.68, 104.94, 194.28],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [14.332, 14.332],
      [36.233, 36.233],
      [51.7, 51.7],
    ],
    "10": [
      [15.857, 15.857],
      [10.029, 10.029],
      [3.968, 3.968],
    ],
    "17": [
      [6.488, 4.949520674313484],
      [15.986, 11.89275643431448],
      [26.427, 16.28021309265678],
    ],
    "20": [
      [15.478, 17.016479325686518],
      [11.858, 15.951243565685521],
      [3.53, 13.67678690734322],
    ],
    "23": [
      [6.213, 6.213],
      [16.113, 16.113],
      [30.932, 30.932],
    ],
  },
  varLabels: [
    ["5", "DD[5] G1-G2"],
    ["10", "DD[10] G2-STO"],
    ["17", "DD[17] G3-G4 / FOCUS"],
    ["20", "DD[20] G4-G5 / FOCUS"],
    ["23", "DD[23] G5-G6"],
  ],
  focusDescription:
    "Modeled inner focus: G4 alone moves toward the object, with near positions inferred from Fujifilm’s 1.1 m minimum focus at each zoom station. The patent identifies G2 as the stabilization group; lateral stabilization motion is not modeled.",

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "5" },
    { text: "G2 - / OIS", fromSurface: "6", toSurface: "10" },
    { text: "G3 +", fromSurface: "12A", toSurface: "17" },
    { text: "G4 + / FOCUS", fromSurface: "18", toSurface: "20" },
    { text: "G5 -", fromSurface: "21", toSurface: "23" },
    { text: "G6 + / FIXED", fromSurface: "24", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Aperture / focus / diagram ── */
  closeFocusM: 1.1,
  nominalFno: [3.563144254383741, 4.169123177464849, 4.976648717314403],
  maxFstop: 22,
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  apertureBladeRoundedness: 1,
  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
