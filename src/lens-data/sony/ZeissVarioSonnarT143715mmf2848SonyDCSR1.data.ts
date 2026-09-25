// Root-level LensVisualizer draft for the fixed Stage 2 job.
// The output stem preserves the job-card "DCS-R1" token; public product metadata uses Sony's canonical "DSC-R1".
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CARL ZEISS VARIO-SONNAR T* 14.3-71.5mm f/2.8-4.8 (Sony DSC-R1)         ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2008/0218875 A1, Example 1.                                             ║
 * ║ Patent prescription retained unscaled: f = 14.71 / 32.0597 / 69.8725 mm.           ║
 * ║ Production correlation: Sony DSC-R1 fixed Carl Zeiss Vario-Sonnar T* 14.3-71.5 mm  ║
 * ║ f/2.8-4.8; strong correlation, not manufacturer confirmation of Example 1.          ║
 * ║                                                                                      ║
 * ║ Physical source construction: 12 lenses / 10 air-separated groups.                  ║
 * ║ Model construction: 14 ElementData entries because the two patent-described         ║
 * ║ composite aspheres (G3 and G5) contain distinct thin optical media.                 ║
 * ║ Five aspheric surfaces: 7A, 10A, 16A, 19A, 20A.                                    ║
 * ║                                                                                      ║
 * ║ Zoom: six moving functional groups GR1..GR6. Published infinity states only.         ║
 * ║ GR3 and GR5 move together to source-table precision. GR1's continuous cam reversal   ║
 * ║ is stated by the patent but is not bracketed by the three published Table 2 states. ║
 * ║ Focus: GR4/G8 is the patent focus group, but no numerical close-focus state is       ║
 * ║ published. Status is NO_INTERNAL_RECONSTRUCTION; all focus pairs below are identical.║
 * ║ closeFocusM = 0.35 m records the marketed minimum macro distance only.               ║
 * ║                                                                                      ║
 * ║ Rear plates: source surfaces 26-29 (LPF 2.010 mm nd 1.5523 νd 63.424, air 2.100;     ║
 * ║ plate 0.500 mm nd 1.5567 νd 58.649, air 1.000) are modeled in `rearPlates`           ║
 * ║ (traced, not drawn). D25 stores the physical Table 2 gap 2.000 / 9.935 / 21.801 mm;  ║
 * ║ the air-equivalent D25 + 4.716045 mm matches the former folded value exactly.        ║
 * ║                                                                                      ║
 * ║ Stop: axial position is published. Physical semi-diameter is not published.          ║
 * ║ sd = 6.5985 mm is a Stage 2 calibration to the three published f-number states.     ║
 * ║ nominalFno therefore stores the modeled values from this calibrated common stop,     ║
 * ║ not the patent's FNo column and not an independently measured diaphragm diameter.    ║
 * ║                                                                                      ║
 * ║ Semi-diameters are Stage 2 modeled apertures. They were sized from exact d-line      ║
 * ║ meridional tracing of the on-axis stop bundle plus the default 0.6-field off-axis   ║
 * ║ bundle using the canonical APS-C taxonomy field, then checked at the three published ║
 * ║ states and representative interpolated zoom states for edge thickness, actual rim   ║
 * ║ slope, conic domain, shared-band cross-gap intrusion, and ray containment.           ║
 * ║ Production render diagnostics passed at five zoom samples and both focus endpoints.      ║
 * ║ Surfaces 3-4 (G2) were raised to pass the traced chief ray to the patent's           ║
 * ║ Y = 13.0 mm image height (Figs. 2-4; stored as imageCircleMm = 26) at all three zoom ║
 * ║ states (2026-09-24 field-coverage audit).                                            ║
 * ║                                                                                      ║
 * ║ Glass labels preserve patent d-line classes/codes only. Catalog coordinate matches   ║
 * ║ do not establish supplier identity. No nC/nF/ng/dPgF data are authored.              ║
 * ║ The supplied US publication front page names no assignee; patentAssignees is [] per  ║
 * ║ source-publication semantics. Linked assignment evidence remains in the dossier.     ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

// SD audit: optical rims in local US20080218875A1 Fig. 1 (PDF p. 2).
// Enlarged G3/G4 and G8-G12 toward the figure; capped the G3 composite
// at 14.0/13.5 mm because a 15 mm shared rim makes the layer cross.
// G9 is capped at 8.3/8.4 mm before the front asphere turns over.
// Leader lines and the G2/G10 mechanical flanges are excluded.

const LENS_DATA = {
  key: "carl-zeiss-vario-sonnar-t-143-715mm-f28-48-sony-dsc-r1",
  maker: "Sony",
  name: "SONY ZEISS VARIO-SONNAR T* 14.3-71.5mm f/2.8-4.8 (Sony Cyber-shot DSC-R1)",
  subtitle: "US 2008/0218875 A1 Example 1 — unscaled patent design; strong DSC-R1 correlation",
  specs: [
    "12 PHYSICAL ELEMENTS / 10 GROUPS",
    "PATENT f = 14.71-69.8725 mm",
    "MARKETED 14.3-71.5 mm f/2.8-4.8",
    "MODELED MAX APERTURE f/2.865-f/5.037",
    "5 ASPHERICAL SURFACES",
    "INFINITY-FOCUS ZOOM STATES ONLY",
  ],

  focalLengthMarketing: [14.3, 71.5],
  focalLengthDesign: [14.722970051869138, 69.85319684814056],
  apertureMarketing: 2.8,
  apertureDesign: 2.8646783257041806,
  lensMounts: ["fixed-lens-camera"],
  imageCircleMm: 26, // Figs. 2-4 plot to Y = 13.0 mm; DSC-R1 sensor 21.5 x 14.4 mm (25.9 mm diagonal)
  imageFormat: "aps-c",
  patentNumber: "US 2008/0218875 A1",
  patentAuthors: ["Daisuke Kuroda", "Masafumi Sueyoshi", "Kazuya Watanabe"],
  patentAssignees: [],
  patentYear: 2008,
  elementCount: 12,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "G1",
      diagramLabel: "G1",
      label: "G1",
      type: "Positive Meniscus",
      nd: 1.5891,
      vd: 61.253,
      indexReference: "d",
      fl: 135.53131243191189,
      glass: "M-BACD5N — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "GR1 positive front group.",
    },
    {
      id: 2,
      name: "G2",
      diagramLabel: "G2",
      label: "G2",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -25.459606221044133,
      glass: "J-LASF016 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Front negative member of GR2.",
    },
    {
      id: 3,
      name: "G3b",
      diagramLabel: "G3",
      label: "G3 glass body",
      type: "Negative Meniscus Carrier",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -47.7936997984393,
      glass: "J-LASF016 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Glass body of patent lens G3 in GR2.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "G3c",
      diagramLabel: "G3c",
      label: "G3 composite asphere layer",
      type: "Composite Asphere Layer",
      nd: 1.5361,
      vd: 41.207,
      indexReference: "d",
      fl: -161.87286455509124,
      glass: "Unmatched (composite asphere layer; bulk-glass supplier unresolved)",
      role: "Thin model medium carrying source surface 7A, the numerical-table composite asphere of patent lens G3; ¶0056 calls it object-side, conflicting with Tables 1/3.",
      cemented: "H1",
    },
    {
      id: 5,
      name: "G4",
      diagramLabel: "G4",
      label: "G4",
      type: "Positive Meniscus",
      nd: 1.9229,
      vd: 20.88,
      indexReference: "d",
      fl: 60.962996646642644,
      glass: "PBH21 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Rear positive member of GR2.",
    },
    {
      id: 6,
      name: "G5c",
      diagramLabel: "G5c",
      label: "G5 composite asphere layer",
      type: "Composite Asphere Layer",
      nd: 1.5146,
      vd: 49.961,
      indexReference: "d",
      fl: 319.9066115187076,
      glass: "Unmatched (composite asphere layer; bulk-glass supplier unresolved)",
      role: "Thin object-side model medium carrying the composite aspheric surface of patent lens G5.",
      cemented: "H2",
    },
    {
      id: 7,
      name: "G5b",
      diagramLabel: "G5",
      label: "G5 glass body",
      type: "Biconvex Positive Carrier",
      nd: 1.618,
      vd: 63.396,
      indexReference: "d",
      fl: 31.372485591298627,
      glass: "S-PHM52 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Glass body of patent lens G5 in GR3.",
      cemented: "H2",
    },
    {
      id: 8,
      name: "G6",
      diagramLabel: "G6",
      label: "G6",
      type: "Negative Meniscus",
      nd: 1.9037,
      vd: 31.319,
      indexReference: "d",
      fl: -19.495888164667114,
      glass: "N-LASF46B — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Negative front member of the GR3 cemented pair.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "G7",
      diagramLabel: "G7",
      label: "G7",
      type: "Biconvex Positive",
      nd: 1.623,
      vd: 58.122,
      indexReference: "d",
      fl: 14.749870018766272,
      glass: "BACD15 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Positive rear member of the GR3 cemented pair; rear surface 16A is aspheric.",
      cemented: "D1",
    },
    {
      id: 10,
      name: "G8",
      diagramLabel: "G8",
      label: "G8",
      type: "Biconcave Negative",
      nd: 1.9037,
      vd: 31.319,
      indexReference: "d",
      fl: -34.62014785582276,
      glass: "N-LASF46B — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Single negative GR4 focusing lens identified by the patent.",
    },
    {
      id: 11,
      name: "G9",
      diagramLabel: "G9",
      label: "G9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5831,
      vd: 59.461,
      indexReference: "d",
      fl: 47.67264032536814,
      glass: "M-BACD12 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "GR5 positive compensator with aspheric surfaces on both sides.",
    },
    {
      id: 12,
      name: "G10",
      diagramLabel: "G10",
      label: "G10",
      type: "Negative Meniscus",
      nd: 1.835,
      vd: 42.984,
      indexReference: "d",
      fl: -21.802649009835672,
      glass: "TAFD5 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Negative front member of the GR6 cemented pair.",
      cemented: "D2",
    },
    {
      id: 13,
      name: "G11",
      diagramLabel: "G11",
      label: "G11",
      type: "Positive Meniscus",
      nd: 1.8467,
      vd: 23.785,
      indexReference: "d",
      fl: 89.3585032012077,
      glass: "FDS90 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Positive rear member of the GR6 cemented pair.",
      cemented: "D2",
    },
    {
      id: 14,
      name: "G12",
      diagramLabel: "G12",
      label: "G12",
      type: "Biconvex Positive",
      nd: 1.9229,
      vd: 20.88,
      indexReference: "d",
      fl: 47.91079222824414,
      glass: "PBH21 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Rear positive lens within the net-negative GR6 relay group.",
    },
  ],

  surfaces: [
    { label: "1", R: 66.358, d: 5.185, nd: 1.5891, elemId: 1, sd: 23.5 },
    { label: "2", R: 381.552, d: 1.0, nd: 1.0, elemId: 0, sd: 22.8 },

    { label: "3", R: 160.929, d: 1.7, nd: 1.7725, elemId: 2, sd: 18.7 },
    { label: "4", R: 17.445, d: 6.091, nd: 1.0, elemId: 0, sd: 14.1 },

    { label: "5", R: 60.914, d: 1.7, nd: 1.7725, elemId: 3, sd: 14 },
    { label: "6", R: 22.708, d: 0.2, nd: 1.5361, elemId: 4, sd: 13.5 },
    { label: "7A", R: 17.943, d: 4.984, nd: 1.0, elemId: 0, sd: 13.5 },

    { label: "8", R: 33.443, d: 5.0, nd: 1.9229, elemId: 5, sd: 14.5 },
    { label: "9", R: 76.538, d: 36.851, nd: 1.0, elemId: 0, sd: 14 },

    { label: "10A", R: 20.244, d: 0.2, nd: 1.5146, elemId: 6, sd: 8.3 },
    { label: "11", R: 23.005, d: 4.555, nd: 1.618, elemId: 7, sd: 8.3 },
    { label: "12", R: -113.994, d: 4.441, nd: 1.0, elemId: 0, sd: 8.0 },

    { label: "STO", R: 1e15, d: 3.0, nd: 1.0, elemId: 0, sd: 6.5985 },

    { label: "14", R: 28.726, d: 1.2, nd: 1.9037, elemId: 8, sd: 6.9 },
    { label: "15", R: 10.704, d: 5.5, nd: 1.623, elemId: 9, sd: 6.6 },
    { label: "16A", R: -52.125, d: 3.937, nd: 1.0, elemId: 0, sd: 6.3 },

    { label: "17", R: -1000.0, d: 1.0, nd: 1.9037, elemId: 10, sd: 7.7 },
    { label: "18", R: 32.312, d: 6.037, nd: 1.0, elemId: 0, sd: 7.7 },

    { label: "19A", R: 70.952, d: 2.525, nd: 1.5831, elemId: 11, sd: 8.3 },
    { label: "20A", R: -45.105, d: 4.829, nd: 1.0, elemId: 0, sd: 8.4 },

    { label: "21", R: -13.563, d: 1.2, nd: 1.835, elemId: 12, sd: 10.4 },
    { label: "22", R: -55.331, d: 1.839, nd: 1.8467, elemId: 13, sd: 11.8 },
    { label: "23", R: -32.446, d: 1.0, nd: 1.0, elemId: 0, sd: 12.2 },

    { label: "24", R: 61.394, d: 2.916, nd: 1.9229, elemId: 14, sd: 13.2 },
    { label: "25", R: -154.436, d: 2.0, nd: 1.0, elemId: 0, sd: 13.4 }, // D25 var — gap to the LPF
  ],

  /* ── LPF and rear plate (patent surfaces 26–29): traced, not drawn ── */
  rearPlates: [
    {
      label: "LPF",
      thicknessMm: 2.01,
      nd: 1.5523,
      vd: 63.424,
      glass: "N-PSK3",
      gapAfterMm: 2.1,
      source: "US 2008/0218875 A1, Example 1 Table 1 surfaces 26–27",
    },
    {
      thicknessMm: 0.5,
      nd: 1.5567,
      vd: 58.649,
      glass: "BAL15Y",
      gapAfterMm: 1.0,
      source: "US 2008/0218875 A1, Example 1 Table 1 surfaces 28–29",
    },
  ],

  asph: {
    "7A": {
      K: -0.1092,
      A4: -2.822e-5,
      A6: -6.366e-8,
      A8: 6.44e-11,
      A10: -7.54e-13,
      A12: 0,
      A14: 0,
    },
    "10A": {
      K: 0,
      A4: -2.071e-5,
      A6: -2.457e-8,
      A8: -3.06e-10,
      A10: 2.03e-12,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0.2549,
      A4: 3.84e-6,
      A6: -2.542e-8,
      A8: -2.74e-9,
      A10: 2.67e-11,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: 2.296e-5,
      A6: -4.8e-7,
      A8: 9.29e-9,
      A10: -1.23e-10,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: 6.366e-6,
      A6: -6.296e-7,
      A8: 1.12e-8,
      A10: -1.35e-10,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "2": [
      [1.0, 1.0],
      [21.214, 21.214],
      [43.456, 43.456],
    ],
    "9": [
      [36.851, 36.851],
      [13.343, 13.343],
      [1.366, 1.366],
    ],
    "16A": [
      [3.937, 3.937],
      [4.579, 4.579],
      [2.544, 2.544],
    ],
    "18": [
      [6.037, 6.037],
      [5.394, 5.394],
      [7.43, 7.43],
    ],
    "20A": [
      [4.829, 4.829],
      [7.977, 7.977],
      [15.086, 15.086],
    ],
    "25": [
      [2.0, 2.0],
      [9.935, 9.935],
      [21.801, 21.801],
    ],
  },

  varLabels: [
    ["2", "D2"],
    ["9", "D9"],
    ["16A", "D16"],
    ["18", "D18"],
    ["20A", "D20"],
    ["25", "D25"],
  ],

  zoomPositions: [14.71, 32.0597, 69.8725],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "GR1", fromSurface: "1", toSurface: "2" },
    { text: "GR2", fromSurface: "3", toSurface: "9" },
    { text: "GR3", fromSurface: "10A", toSurface: "16A" },
    { text: "GR4", fromSurface: "17", toSurface: "18" },
    { text: "GR5", fromSurface: "19A", toSurface: "20A" },
    { text: "GR6", fromSurface: "21", toSurface: "25" },
  ],

  doublets: [
    { text: "H1", fromSurface: "5", toSurface: "7A" },
    { text: "H2", fromSurface: "10A", toSurface: "12" },
    { text: "D1", fromSurface: "14", toSurface: "16A" },
    { text: "D2", fromSurface: "21", toSurface: "23" },
  ],

  closeFocusM: 0.35,
  focusDescription:
    "Patent-published infinity zoom states only. GR4/G8 is the axial focusing group, but no numerical close-focus spacing is published; no internal focus reconstruction is authored, and every focus pair is identical. The 0.35 m closeFocusM value records the marketed minimum macro distance rather than a modeled close-focus state.",

  nominalFno: [2.8646783257041806, 3.7174215126729098, 5.03730193692091],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
