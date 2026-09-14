import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S DX ZOOM-NIKKOR 18-70mm f/3.5-4.5G IF-ED        ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2005/0068636 A1, Example 1 (Satoshi Hayakawa / Nikon).       ║
 * ║ Native-scale d-line prescription; no dimensional scaling is applied.     ║
 * ║                                                                            ║
 * ║ Physical patent/production count: 15 elements / 13 groups.                ║
 * ║ Authored media entries: 16 because the thin aspherical resin layer on     ║
 * ║ L21 is modeled explicitly as a bonded optical medium.                      ║
 * ║ Power groups: + / - / + / - / + (G1-G5).                                 ║
 * ║                                                                            ║
 * ║ Zoom: published infinity-focus states at 18.7, 35.0, and 67.9 mm.         ║
 * ║   D5 and D14 vary with zoom and focus; D19 and D23 vary with zoom only.   ║
 * ║   The patent says G2 follows a gentle S-shaped zoom trajectory, but only  ║
 * ║   three numerical states are published; no additional trajectory knots    ║
 * ║   are invented.                                                             ║
 * ║                                                                            ║
 * ║ Stop normalization: the patent places S exactly 0.6 mm object-side of     ║
 * ║ surface 15. D14 is therefore split as surface 14 -> STO = D14 - 0.6 mm   ║
 * ║ and STO -> surface 15 = 0.6 mm without changing axial station.            ║
 * ║ nominalFno uses the modeled/patent values [3.6, 4.2, 4.6]. buildLens()    ║
 * ║ derives the zoom-dependent physical stop opening from these values.        ║
 * ║ The authored wide-state STO sd is the independent exact-Snell value.       ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that G2       ║
 * ║ focuses but publishes no close-focus spacing table. Close-focus rows are  ║
 * ║ independently solved at Nikon's 0.38 m MFD with a fixed image plane and  ║
 * ║ rigid G2 translation: D5 += delta and D14 -= delta.                       ║
 * ║                                                                            ║
 * ║ Rear spacing: Example 1 names BF but does not tabulate it numerically.     ║
 * ║ Surface 29 distances are independently recomputed d-line BFD values for   ║
 * ║ each published infinity zoom state and remain fixed during focus.          ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent gives none. SDs are derived from exact-Snell    ║
 * ║ marginal/chief-ray envelopes across the three zoom states, retaining the  ║
 * ║ full-field chief ray and a 60%-field pupil bundle with nominal ~5% ray     ║
 * ║ allowance where geometry permits. They are then constrained by edge       ║
 * ║ thickness, actual rim slope, the positive-K conic domain, shared-gap sag  ║
 * ║ intrusion, the published Fig. 2 silhouette, and Nikon's 67 mm filter      ║
 * ║ thread as a mechanical ceiling. The 0.28 mm L41-L42 air gap is the        ║
 * ║ binding vignetting boundary; no cemented junction is used as a clip.       ║
 * ║                                                                            ║
 * ║ Spectral discipline: the patent publishes nd/vd only. nC, nF, ng, and    ║
 * ║ dPgF are therefore not invented, and vendor-specific glass names are not  ║
 * ║ asserted where only coordinate classes are defensible.                     ║
 * ║                                                                            ║
 * ║ Excluded: sensor cover glass, filters, dummy/flare-cutter planes, and      ║
 * ║ mechanical parts. No folded path or inactive optical plane is present.     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-s-dx-zoom-nikkor-18-70-f35-45g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S DX ZOOM-NIKKOR 18-70mm f/3.5-4.5G IF-ED",
  subtitle: "US 2005/0068636 A1 Example 1 — close focus constrained reconstruction",
  specs: [
    "15 elements / 13 groups (physical count)",
    "18-70mm f/3.5-4.5 (production)",
    "18.7-67.9mm f/3.6-4.6 (Example 1)",
    "3 ED elements / 1 aspherical element (production)",
    "G2 internal focus",
    "Nikon F / DX",
  ],

  focalLengthMarketing: [18, 70],
  focalLengthDesign: [18.721115163028223, 67.90210769629809],
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 2005/0068636 A1",
  patentAuthors: ["Satoshi Hayakawa"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2005,
  elementCount: 15,
  groupCount: 13,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus (convex to object)",
      nd: 1.84666,
      vd: 23.8,
      fl: -144.34894525379718,
      glass: "847238 class",
      cemented: "D1",
      role: "Front negative member of the G1 cemented pair.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Positive Meniscus (convex to object)",
      nd: 1.64,
      vd: 60.1,
      fl: 97.8789564488297,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      cemented: "D1",
      role: "Positive rear member of the G1 cemented pair.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Positive Meniscus (convex to object)",
      nd: 1.713,
      vd: 53.9,
      fl: 104.24075703783411,
      glass: "713539 class",
      role: "Rear positive meniscus of G1.",
    },
    {
      id: 4,
      name: "L21r",
      label: "L21 Hybrid Resin Layer",
      type: "Hybrid Aspheric Resin Layer (1x Asph)",
      nd: 1.55389,
      vd: 38.1,
      fl: -197.98688612004725,
      glass: "Unmatched (hybrid aspheric resin; patent nd=1.55389, vd=38.1)",
      cemented: "H1",
      role: "Thin bonded aspherical resin layer on the object side of L21.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus (convex to object)",
      nd: 1.804,
      vd: 46.6,
      fl: -18.02281601523935,
      glass: "804466 class",
      cemented: "H1",
      role: "Front negative member of focusing group G2; carries the hybrid resin layer.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -19.291515941527567,
      glass: "804466 class",
      role: "Second negative element of G2.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive",
      nd: 1.79504,
      vd: 28.5,
      fl: 16.676447850215375,
      glass: "J-LAFH3 catalog equivalent (patent 795285; production supplier unspecified)",
      role: "Positive element within negative-power G2.",
    },
    {
      id: 8,
      name: "L24",
      label: "Element L24",
      type: "Negative Meniscus (concave to object)",
      nd: 1.804,
      vd: 46.6,
      fl: -44.57612578304723,
      glass: "804466 class",
      role: "Rear negative meniscus of G2.",
    },
    {
      id: 9,
      name: "L31",
      label: "Element L31",
      type: "Negative Meniscus (convex to object)",
      nd: 1.8044,
      vd: 39.6,
      fl: -27.22787734325821,
      glass: "804396 class",
      cemented: "D2",
      role: "Negative front member of the G3 cemented pair.",
    },
    {
      id: 10,
      name: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 26.169623708705405,
      glass: "J-FKH1 catalog equivalent (patent 498826; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "This very-high-Abbe position is one of three that correlate with Nikon's three-ED production specification; the patent does not identify a melt.",
      cemented: "D2",
      role: "Low-dispersion positive rear member of the G3 cemented pair.",
    },
    {
      id: 11,
      name: "L33",
      label: "Element L33",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      fl: 28.1495173435361,
      glass: "487704 class",
      role: "Rear positive element of G3.",
    },
    {
      id: 12,
      name: "L41",
      label: "Element L41",
      type: "Positive Meniscus (concave to object)",
      nd: 1.84666,
      vd: 23.8,
      fl: 34.418311737648395,
      glass: "847238 class",
      role: "Front positive meniscus of fixed negative-power G4.",
    },
    {
      id: 13,
      name: "L42",
      label: "Element L42",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -18.612047291442515,
      glass: "835427 class",
      role: "Rear negative element of fixed G4.",
    },
    {
      id: 14,
      name: "L51",
      label: "Element L51",
      type: "Positive Meniscus (concave to object)",
      nd: 1.49782,
      vd: 82.5,
      fl: 39.01650401721401,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "This very-high-Abbe position is one of three that correlate with Nikon's three-ED production specification; the patent does not identify a melt.",
      role: "Front low-dispersion positive meniscus of G5.",
    },
    {
      id: 15,
      name: "L52",
      label: "Element L52",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.5,
      fl: 41.336350895607346,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "This very-high-Abbe position is one of three that correlate with Nikon's three-ED production specification; the patent does not identify a melt.",
      role: "Second low-dispersion positive element of G5.",
    },
    {
      id: 16,
      name: "L53",
      label: "Element L53",
      type: "Negative Meniscus (concave to object)",
      nd: 1.80518,
      vd: 25.4,
      fl: -43.289002799360134,
      glass: "805254 class",
      role: "Rear negative meniscus of G5.",
    },
  ],

  surfaces: [
    { label: "1", R: 128.208, d: 1.8, nd: 1.84666, elemId: 1, sd: 25.0 },
    { label: "2", R: 62.167, d: 6.8, nd: 1.64, elemId: 2, sd: 24.0 },
    { label: "3", R: 7839.7782, d: 0.1, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "4", R: 42.7904, d: 5.3, nd: 1.713, elemId: 3, sd: 22.0 },
    { label: "5", R: 95.6571, d: 2.98, nd: 1.0, elemId: 0, sd: 21.0 },

    { label: "6A", R: 110.5079, d: 0.08, nd: 1.55389, elemId: 4, sd: 11.5 },
    { label: "7", R: 55.0277, d: 1.2, nd: 1.804, elemId: 5, sd: 11.5 },
    { label: "8", R: 11.3585, d: 5.9, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "9", R: -23.6967, d: 0.9, nd: 1.804, elemId: 6, sd: 8.4 },
    { label: "10", R: 45.6574, d: 0.3, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "11", R: 29.9481, d: 4.1, nd: 1.79504, elemId: 7, sd: 8.0 },
    { label: "12", R: -22.3485, d: 0.8, nd: 1.0, elemId: 0, sd: 7.9 },
    { label: "13", R: -15.5733, d: 0.8, nd: 1.804, elemId: 8, sd: 7.9 },
    { label: "14", R: -28.1711, d: 14.9, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "STO", R: 1e15, d: 0.6, nd: 1.0, elemId: 0, sd: 5.5550861674314 },

    { label: "15", R: 58.1769, d: 0.8, nd: 1.8044, elemId: 9, sd: 8.5 },
    { label: "16", R: 15.8142, d: 3.2, nd: 1.49782, elemId: 10, sd: 8.2 },
    { label: "17", R: -68.9654, d: 0.1, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "18", R: 21.2876, d: 3.1, nd: 1.48749, elemId: 11, sd: 8.6 },
    { label: "19", R: -36.772, d: 0.98, nd: 1.0, elemId: 0, sd: 8.6 },

    { label: "20", R: -344.6416, d: 2.2, nd: 1.84666, elemId: 12, sd: 10.0 },
    { label: "21", R: -26.9474, d: 0.28, nd: 1.0, elemId: 0, sd: 7.2 },
    { label: "22", R: -21.8702, d: 1.0, nd: 1.83481, elemId: 13, sd: 7.2 },
    { label: "23", R: 54.7759, d: 11.77, nd: 1.0, elemId: 0, sd: 10.0 },

    { label: "24", R: -1292.7371, d: 4.8, nd: 1.49782, elemId: 14, sd: 11.8 },
    { label: "25", R: -19.1593, d: 0.1, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "26", R: 54.2606, d: 4.7, nd: 1.49782, elemId: 15, sd: 12.0 },
    { label: "27", R: -32.1957, d: 1.1, nd: 1.0, elemId: 0, sd: 10.75 },
    { label: "28", R: -21.8468, d: 1.1, nd: 1.80518, elemId: 16, sd: 10.75 },
    { label: "29", R: -59.8511, d: 38.1001420169173, nd: 1.0, elemId: 0, sd: 12.2 },
  ],

  asph: {
    "6A": {
      K: 15.4398,
      A4: 2.5511e-5,
      A6: -7.9835e-9,
      A8: -2.6853e-10,
      A10: 2.206e-13,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [18.7, 35.0, 67.9],
  zoomStep: 0.004,
  zoomLabels: ["18.7 mm", "67.9 mm"],

  var: {
    "5": [
      [2.98, 1.5644771622541593],
      [15.56, 13.325567075532415],
      [31.36, 26.638587092359003],
    ],
    "14": [
      [14.9, 16.31552283774584],
      [7.23, 9.464432924467584],
      [2.24, 6.961412907640994],
    ],
    "19": [
      [0.98, 0.98],
      [6.94, 6.94],
      [10.68, 10.68],
    ],
    "23": [
      [11.77, 11.77],
      [5.82, 5.82],
      [2.07, 2.07],
    ],
    "29": [
      [38.1001420169173, 38.1001420169173],
      [44.051919079503065, 44.051919079503065],
      [47.793151318344925, 47.793151318344925],
    ],
  },

  varLabels: [
    ["5", "D5 (G1-G2)"],
    ["14", "D14 less 0.6 mm stop split"],
    ["19", "D19 (G3-G4)"],
    ["23", "D23 (G4-G5)"],
    ["29", "BF (computed)"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (- / focus)", fromSurface: "6A", toSurface: "14" },
    { text: "G3 (+ / stop)", fromSurface: "15", toSurface: "19" },
    { text: "G4 (- / fixed)", fromSurface: "20", toSurface: "23" },
    { text: "G5 (+)", fromSurface: "24", toSurface: "29" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  closeFocusM: 0.38,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent specifies G2 focusing but no close-focus spacings. Close states are code-solved at Nikon's 0.38 m MFD with a fixed image plane and rigid G2 translation (D5 += delta, physical D14 -= delta). G2 shifts objectward by 1.415523 mm at 18.7 mm, 2.234433 mm at 35.0 mm, and 4.721413 mm at 67.9 mm; the tele state gives paraxial |m| = 0.160020 versus Nikon's marketed 0.16 maximum reproduction ratio.",

  nominalFno: [3.6, 4.2, 4.6],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22, 32, 36],
  maxFstop: 36,
  apertureBlades: 7,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
