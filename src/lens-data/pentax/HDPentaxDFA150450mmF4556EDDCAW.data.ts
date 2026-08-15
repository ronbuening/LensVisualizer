import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — HD PENTAX-D FA 150–450mm F4.5–5.6 ED DC AW                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2016/0327774 A1, Numerical Embodiment 1 (Minoru Murayama).     ║
 * ║ Correlation target: production HD PENTAX-D FA 150–450mm F4.5–5.6 ED DC   ║
 * ║ AW. Patent design values are not scaled to the marketed endpoints.         ║
 * ║                                                                              ║
 * ║ 18 elements / 14 physical groups; all spherical; five power groups G1–G5. ║
 * ║ Zoom gaps: D6, D9, D17/STO, D26 and BF. G3 and the stop are stationary     ║
 * ║ relative to the image plane within source rounding; no zoom reversal.       ║
 * ║                                                                              ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes infinity    ║
 * ║ zoom states and states that negative G5 moves imageward for closer focus.  ║
 * ║ Close-focus values below were solved at the official 2.0 m MFD with G5     ║
 * ║ alone translating. At each zoom position D26 increases and BF decreases by ║
 * ║ the same amount, conserving D26 + BF. These close-focus rows are not        ║
 * ║ patent-published spacings.                                                   ║
 * ║                                                                              ║
 * ║ Stop: patent surface 17; fixed 15.000 mm semi-diameter inferred from the    ║
 * ║ published FNO values and independently checked at all three zoom states.    ║
 * ║                                                                              ║
 * ║ Semi-diameters: not published. They were derived from W/M/T marginal-ray   ║
 * ║ envelopes at infinity and reconstructed close focus, checked against the    ║
 * ║ patent optical sections (Figs. 1 and 4), including the Fig. 1 L54 profile, ║
 * ║ and the production 86 mm filter /                                              ║
 * ║ 95 mm barrel envelope, then tightened only where the current 0.90 shared-  ║
 * ║ band cross-gap rule requires it. No layout control is used to hide invalid ║
 * ║ geometry.                                                                    ║
 * ║                                                                              ║
 * ║ Glass: the patent publishes only d-line nd/νd coordinates, not vendors or  ║
 * ║ trade names. A fresh six-vendor Stage-4 audit found source-precision        ║
 * ║ ambiguity, so all elements use vendor-neutral six-digit coordinate labels  ║
 * ║ and omit vendor-specific line indices / dPgF.                               ║
 * ║                                                                              ║
 * ║ Manufacturer identity/spec sources:                                          ║
 * ║ https://www.ricoh-imaging.co.jp/english/products/lens/k/telephoto/          ║
 * ║   hdpentax-dfa-150-450/                                                      ║
 * ║ https://news.ricoh-imaging.co.jp/rim_info2/2015/20150205_019076.html        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "hd-pentax-d-fa-150-450-f45-56-ed-dc-aw",
  maker: "Pentax",
  name: "PENTAX HD D FA 150-450mm f/4.5-5.6 ED DC AW",
  subtitle: "US 2016/0327774 A1 Numerical Embodiment 1 — production correlation",
  specs: [
    "Marketed 150–450mm f/4.5–5.6",
    "Design f = 153.50–440.00 mm",
    "Design F/4.6–5.7",
    "18 elements / 14 groups",
    "35 mm full-frame · Y = 21.64 mm",
  ],

  focalLengthMarketing: [150, 450],
  focalLengthDesign: [153.5, 440],
  apertureMarketing: 4.5,
  apertureDesign: 4.6,
  lensMounts: ["pentax-k"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2016/0327774 A1",
  patentAuthors: ["Minoru Murayama"],
  patentAssignees: ["Ricoh Imaging Company, Ltd."],
  patentYear: 2016,
  elementCount: 18,
  groupCount: 14,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.3,
      fl: -318.9279,
      glass: "750353 (vendor unresolved; patent nd/νd coordinate)",
      role: "Negative front corrector in positive G1.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 316.4014,
      glass: "497816 (vendor unresolved; patent nd/νd coordinate)",
      role: "Low-dispersion positive element in G1.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      fl: 259.9572,
      glass: "538747 (vendor unresolved; patent nd/νd coordinate)",
      role: "Second low-dispersion positive element completing G1.",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.71736,
      vd: 29.5,
      fl: 113.0373,
      glass: "717295 (vendor unresolved; patent nd/νd coordinate)",
      cemented: "D21-22",
      role: "Positive half of the negative G2 cemented doublet.",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 22",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44.2,
      fl: -66.4889,
      glass: "786442 (vendor unresolved; patent nd/νd coordinate)",
      cemented: "D21-22",
      role: "Negative half of G2; the cemented pair is net negative.",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 31",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      fl: 149.6148,
      glass: "516641 (vendor unresolved; patent nd/νd coordinate)",
      role: "Front positive element of weak negative G3.",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 32",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.9,
      fl: -80.6611,
      glass: "806409 (vendor unresolved; patent nd/νd coordinate)",
      role: "Negative element in stationary G3.",
    },
    {
      id: 8,
      name: "L33",
      label: "Element 33",
      type: "Biconvex Positive",
      nd: 1.6398,
      vd: 34.5,
      fl: 52.635,
      glass: "S-TIM27 (OHARA catalog equivalent for patent 640345; production supplier unspecified)",
      cemented: "D33-34",
      role: "Positive half of the net-positive rear cemented pair in G3.",
    },
    {
      id: 9,
      name: "L34",
      label: "Element 34",
      type: "Biconcave Negative",
      nd: 1.757,
      vd: 47.8,
      fl: -57.9983,
      glass: "757478 (vendor unresolved; patent nd/νd coordinate)",
      cemented: "D33-34",
      role: "Negative half of the G3 rear cemented pair.",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 41",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -175.7332,
      glass: "717295 (vendor unresolved; patent nd/νd coordinate)",
      role: "Negative leading element of strong positive G4.",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 42",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 81.4105,
      glass: "618634 (vendor unresolved; patent nd/νd coordinate)",
      role: "Primary positive power contributor in G4.",
    },
    {
      id: 12,
      name: "L43",
      label: "Element 43",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      fl: 60.486,
      glass: "589612 (vendor unresolved; patent nd/νd coordinate)",
      cemented: "D43-44",
      role: "Positive half of a nearly afocal cemented pair in G4.",
    },
    {
      id: 13,
      name: "L44",
      label: "Element 44",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.3,
      fl: -58.2959,
      glass: "750353 (vendor unresolved; patent nd/νd coordinate)",
      cemented: "D43-44",
      role: "Negative half of the weak net-negative G4 cemented pair.",
    },
    {
      id: 14,
      name: "L45",
      label: "Element 45",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.9,
      fl: 92.8805,
      glass: "658509 (vendor unresolved; patent nd/νd coordinate)",
      role: "Rear positive element completing G4.",
    },
    {
      id: 15,
      name: "L51",
      label: "Element 51",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -91.174,
      glass: "835427 (vendor unresolved; patent nd/νd coordinate)",
      role: "Front negative element of the rear-focus group G5.",
    },
    {
      id: 16,
      name: "L52",
      label: "Element 52",
      type: "Biconvex Positive",
      nd: 1.71736,
      vd: 29.5,
      fl: 60.9111,
      glass: "717295 (vendor unresolved; patent nd/νd coordinate)",
      cemented: "D52-53",
      role: "Positive half of the G5 cemented doublet.",
    },
    {
      id: 17,
      name: "L53",
      label: "Element 53",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: -146.8564,
      glass: "497816 (vendor unresolved; patent nd/νd coordinate)",
      cemented: "D52-53",
      role: "Low-dispersion negative partner in the G5 cemented doublet.",
    },
    {
      id: 18,
      name: "L54",
      label: "Element 54",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -58.8375,
      glass: "804466 (vendor unresolved; patent nd/νd coordinate)",
      role: "Rearmost negative element of focusing group G5.",
    },
  ],

  surfaces: [
    { label: "1", R: 316.957, d: 2.966, nd: 1.7495, elemId: 1, sd: 40.5 },
    { label: "2", R: 135.722, d: 0.45, nd: 1.0, elemId: 0, sd: 38.6 },
    { label: "3", R: 145.847, d: 8.089, nd: 1.497, elemId: 2, sd: 39.0 },
    { label: "4", R: 1973.988, d: 0.1, nd: 1.0, elemId: 0, sd: 39.0 },
    { label: "5", R: 159.562, d: 8.683, nd: 1.53775, elemId: 3, sd: 39.5 },
    { label: "6", R: -1106.779, d: 19.995, nd: 1.0, elemId: 0, sd: 39.5 },
    { label: "7", R: 93.601, d: 4.547, nd: 1.71736, elemId: 4, sd: 18.8 },
    { label: "8", R: -594.28, d: 1.6, nd: 1.7859, elemId: 5, sd: 18.8 },
    { label: "9", R: 57.359, d: 50.87, nd: 1.0, elemId: 0, sd: 18.8 },
    { label: "10", R: 79.178, d: 6.05, nd: 1.51633, elemId: 6, sd: 17.5 },
    { label: "11", R: -3090.887, d: 1.775, nd: 1.0, elemId: 0, sd: 16.75 },
    { label: "12", R: -86.7, d: 1.45, nd: 1.8061, elemId: 7, sd: 17.0 },
    { label: "13", R: 261.975, d: 1.75, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "14", R: 51.537, d: 7.015, nd: 1.6398, elemId: 8, sd: 17.0 },
    { label: "15", R: -92.009, d: 1.563, nd: 1.757, elemId: 9, sd: 17.0 },
    { label: "16", R: 84.591, d: 4.7, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "STO", R: 1e15, d: 26.239, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "18", R: 303.474, d: 1.703, nd: 1.71736, elemId: 10, sd: 18.2 },
    { label: "19", R: 88.857, d: 0.7, nd: 1.0, elemId: 0, sd: 17.7 },
    { label: "20", R: 136.264, d: 6.071, nd: 1.618, elemId: 11, sd: 18.3 },
    { label: "21", R: -78.404, d: 0.885, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "22", R: 504.407, d: 7.164, nd: 1.58913, elemId: 12, sd: 18.5 },
    { label: "23", R: -38.141, d: 1.4, nd: 1.7495, elemId: 13, sd: 18.5 },
    { label: "24", R: -304.892, d: 0.1, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "25", R: 85.399, d: 6.254, nd: 1.65844, elemId: 14, sd: 18.3 },
    { label: "26", R: -209.169, d: 29.522, nd: 1.0, elemId: 0, sd: 18.3 },
    { label: "27", R: 195.066, d: 1.3, nd: 1.83481, elemId: 15, sd: 13.8 },
    { label: "28", R: 54.584, d: 2.158, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "29", R: 1009.436, d: 4.614, nd: 1.71736, elemId: 16, sd: 13.3 },
    { label: "30", R: -45.585, d: 1.684, nd: 1.497, elemId: 17, sd: 13.3 },
    { label: "31", R: -122.906, d: 14.518, nd: 1.0, elemId: 0, sd: 13.3 },
    { label: "32", R: -52.996, d: 1.3, nd: 1.804, elemId: 18, sd: 12.4 },
    { label: "33", R: 445.364, d: 50.74, nd: 1.0, elemId: 0, sd: 12.4 },
  ],

  asph: {},

  var: {
    "6": [
      [19.995, 19.995],
      [82.586, 82.586],
      [133.054, 133.054],
    ],
    "9": [
      [50.87, 50.87],
      [27.22, 27.22],
      [3.5, 3.5],
    ],
    STO: [
      [26.239, 26.239],
      [21.425, 21.425],
      [8.433, 8.433],
    ],
    "26": [
      [29.522, 33.6425063942762],
      [18.749, 26.955504916436514],
      [1.9, 16.166494988940382],
    ],
    "33": [
      [50.74, 46.619493605723804],
      [66.32, 58.11349508356348],
      [96.17, 81.90350501105962],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["9", "D9"],
    ["STO", "D17"],
    ["26", "D26"],
    ["33", "BF"],
  ],

  zoomPositions: [153.5, 260, 440],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (−)", fromSurface: "7", toSurface: "9" },
    { text: "G3 (−)", fromSurface: "10", toSurface: "16" },
    { text: "G4 (+)", fromSurface: "18", toSurface: "26" },
    { text: "G5 (−)", fromSurface: "27", toSurface: "33" },
  ],

  doublets: [
    { text: "D21-22", fromSurface: "7", toSurface: "9" },
    { text: "D33-34", fromSurface: "14", toSurface: "16" },
    { text: "D43-44", fromSurface: "22", toSurface: "24" },
    { text: "D52-53", fromSurface: "29", toSurface: "31" },
  ],

  closeFocusM: 2.0,
  focusDescription: "CONSTRAINED_RECONSTRUCTION: the patent publishes infinity zoom states and specifies G5 rear focus. Close-focus values are code-solved at the official 2.0 m MFD with only G5 moving imageward; D26 + BF is conserved at each zoom position. These close-focus spacings are not patent-published.",

  nominalFno: [4.6, 5.1, 5.7],
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 27,

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
