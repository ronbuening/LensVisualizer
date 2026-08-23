import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON RF 70-200mm f/4 L IS USM                              ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2021/0033835 A1, Numerical Example 1 (Makoto Nakahara).  ║
 * ║ Production correlation: Canon RF70-200mm F4 L IS USM.                   ║
 * ║ 16 elements / 11 air-separated optical groups; all spherical.           ║
 * ║                                                                            ║
 * ║ Published infinity zoom states: 72.27 / 135.02 / 193.89 mm.             ║
 * ║ Zoom gaps: 5, 11, 14, 17, 22, 25, 29.                                   ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent gives focus         ║
 * ║ directions for L4 and L6 but no numerical close-focus spacing table;     ║
 * ║ therefore every authored var pair is infinity/infinity and focus motion  ║
 * ║ is not invented. Canon's 0.6 m MFD is retained only as product metadata. ║
 * ║                                                                            ║
 * ║ Surface 6 of the patent is an optically neutral air-air plane associated ║
 * ║ with the probable flare-cutting diaphragm FP. It is omitted from the     ║
 * ║ active sequential model. Its 1.55 mm following air space is merged into  ║
 * ║ patent d5, so authored gap 5 is 2.59 / 40.93 / 58.21 mm.                 ║
 * ║ Patent surface 12 is the sole aperture stop and is labeled STO.           ║
 * ║                                                                            ║
 * ║ The patent gives no stop diameter. STO.sd = 12.70 mm is the maximum      ║
 * ║ physical clear radius required by the three modeled wide-open states;     ║
 * ║ per-state active iris radii inferred from the paraxial entrance pupil are ║
 * ║ 9.2435 / 11.3557 / 12.6903 mm. nominalFno carries the published design   ║
 * ║ values 4.08 / 4.08 / 4.12; marketed aperture remains f/4.                ║
 * ║                                                                            ║
 * ║ Semi-diameters are modeled inferences because Example 1 publishes none.   ║
 * ║ They were derived from marginal/chief-ray envelopes at all three zoom     ║
 * ║ states, refined against Canon's official production block diagram, and    ║
 * ║ bounded by the 77 mm filter / 83.5 mm barrel envelope. D1 through D4      ║
 * ║ use common rim radii across each cemented pair, matching Figure 1 while   ║
 * ║ retaining positive edge thickness. Geometry was checked using actual     ║
 * ║ spherical sag/slope, shared-band cross-gap clearance,                     ║
 * ║ and off-axis bundle clipping; no obsolete sd/|R| rule was used.           ║
 * ║                                                                            ║
 * ║ The patent summary (¶0005) and claim 17 print an impossible positive-     ║
 * ║ lower-bound Q inequality; body ¶0026 and claim 1 are coherent. No source  ║
 * ║ inequality is silently repaired; this does not alter the prescription.    ║
 * ║                                                                            ║
 * ║ No scaling is applied. No sensor cover glass, filter, folded path, dummy  ║
 * ║ optical plate, or mechanical part is included.                            ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer sources used for product metadata:
 * https://www.usa.canon.com/support/p/rf70-200mm-f4-l-is-usm
 * https://global.canon/en/c-museum/product/rf501.html
 * HOYA spectral data for patent-explicit NBFD13:
 * https://www.hoya-opticalworld.com/english/datadownload/index.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf70-200mm-f4-l-is-usm",
  maker: "Canon",
  name: "CANON RF 70-200mm f/4 L IS USM",
  subtitle: "US 2021/0033835 A1 — Numerical Example 1 / production correlation",
  specs: [
    "16 ELEMENTS / 11 GROUPS",
    "4 UD-CLASS ELEMENTS",
    "PATENT f = 72.27–193.89 mm",
    "PATENT F/4.08–4.12",
    "MFD 0.6 m (product)",
    "9-BLADE DIAPHRAGM",
  ],

  focalLengthMarketing: [70, 200],
  focalLengthDesign: [72.27, 193.89],
  apertureMarketing: 4,
  apertureDesign: 4.08, // wide/middle design value; tele 4.12 is carried by nominalFno below
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2021/0033835 A1",
  patentAuthors: ["Makoto Nakahara"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2021,
  elementCount: 16,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L1-1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 211.780861,
      glass: "487702 — low-dispersion crown class (vendor unresolved)",
      role: "Front positive collector in L1.",
    },
    {
      id: 2,
      name: "L12",
      label: "L1-2",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.3,
      fl: -116.9495,
      glass: "613443 — medium-dispersion class (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L1-3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 95.103345,
      glass: "497815 — UD-class low-dispersion glass (vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      cemented: "D1",
      role: "One of four 1.49700 / 81.5 elements correlating with Canon's four-UD production count.",
    },
    {
      id: 4,
      name: "L21",
      label: "L2-1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      fl: -118.643135,
      glass: "516641 — crown class (vendor unresolved)",
    },
    {
      id: 5,
      name: "L22",
      label: "L2-2",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      fl: -40.893237,
      glass: "541472 — flint class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L2-3",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: 62.256614,
      glass: "001255 — high-index flint class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      label: "L3-1",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 49.467608,
      glass: "497815 — UD-class low-dispersion glass (vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "Positive L3/Lp unit; one of the four 1.49700 / 81.5 elements.",
    },
    {
      id: 8,
      name: "L41",
      label: "L4-1",
      type: "Biconcave Negative",
      nd: 1.76385,
      vd: 48.5,
      fl: -17.535654,
      glass: "764485 — lanthanum-crown class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L42",
      label: "L4-2 / Gp",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.7,
      fl: 24.195613,
      glass: "NBFD13 (HOYA)",
      cemented: "D3",
      apd: "patent",
      apdNote:
        "Patent ¶0033 explicitly names HOYA NBFD13 (νd = 40.73, θgF = 0.5671); current HOYA 2026 catalog ΔPgF = -0.0078.",
      dPgF: -0.0078,
      nC: 1.80022,
      nF: 1.82001,
      ng: 1.83123,
      role: "Patent positive lens Gp inside net-negative L4/Ln; chromatic-control element governed by conditions (1)–(4).",
    },
    {
      id: 10,
      name: "L51",
      label: "L5-1",
      type: "Negative Meniscus",
      nd: 2.0509,
      vd: 26.9,
      fl: -36.677549,
      glass: "051269 — very-high-index flint class (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L52",
      label: "L5-2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 37.770901,
      glass: "497815 — UD-class low-dispersion glass (vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      cemented: "D4",
      role: "One of the four 1.49700 / 81.5 elements.",
    },
    {
      id: 12,
      name: "L53",
      label: "L5-3",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 40.542379,
      glass: "835427 — lanthanum class (vendor unresolved)",
    },
    {
      id: 13,
      name: "L61",
      label: "L6-1",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -30.020722,
      glass: "835427 — lanthanum class (vendor unresolved)",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L62",
      label: "L6-2",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.5,
      fl: 74.628967,
      glass: "728285 — dense-flint class (vendor unresolved)",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L71",
      label: "L7-1",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: -84.739762,
      glass: "497815 — UD-class low-dispersion glass (vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "One of the four 1.49700 / 81.5 elements.",
    },
    {
      id: 16,
      name: "L72",
      label: "L7-2",
      type: "Biconvex Positive",
      nd: 1.85478,
      vd: 24.8,
      fl: 121.787626,
      glass: "855248 — high-index flint class (vendor unresolved)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 90.644, d: 5.0, nd: 1.48749, elemId: 1, sd: 30.0 },
    { label: "2", R: 729.457, d: 0.15, nd: 1.0, elemId: 0, sd: 29.5 },
    { label: "3", R: 118.536, d: 1.72, nd: 1.6134, elemId: 2, sd: 25.0 },
    { label: "4", R: 44.444, d: 7.63, nd: 1.497, elemId: 3, sd: 25.0 },
    { label: "5", R: 701.885, d: 2.59, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "7", R: 61.503, d: 1.45, nd: 1.51633, elemId: 4, sd: 16.0 },
    { label: "8", R: 30.444, d: 4.9, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "9", R: -46.693, d: 1.45, nd: 1.54072, elemId: 5, sd: 12.5 },
    { label: "10", R: 42.46, d: 2.4, nd: 2.00069, elemId: 6, sd: 12.5 },
    { label: "11", R: 129.562, d: 14.15, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "STO", R: 1e15, d: 0.27, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "13", R: 30.808, d: 5.46, nd: 1.497, elemId: 7, sd: 14.5 },
    { label: "14", R: -114.56, d: 5.42, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "15", R: -34.891, d: 0.76, nd: 1.76385, elemId: 8, sd: 12.8 },
    { label: "16", R: 21.946, d: 5.06, nd: 1.8061, elemId: 9, sd: 12.8 },
    { label: "17", R: -157.249, d: 9.21, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "18", R: 215.866, d: 0.86, nd: 2.0509, elemId: 10, sd: 14.5 },
    { label: "19", R: 32.638, d: 6.46, nd: 1.497, elemId: 11, sd: 14.5 },
    { label: "20", R: -41.283, d: 0.15, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "21", R: 40.548, d: 4.63, nd: 1.83481, elemId: 12, sd: 17.0 },
    { label: "22", R: -194.106, d: 18.91, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "23", R: -110.386, d: 0.9, nd: 1.83481, elemId: 13, sd: 15.0 },
    { label: "24", R: 32.543, d: 3.04, nd: 1.72825, elemId: 14, sd: 15.5 },
    { label: "25", R: 77.918, d: 15.94, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "26", R: -27.078, d: 1.55, nd: 1.497, elemId: 15, sd: 20.0 },
    { label: "27", R: -77.278, d: 0.15, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "28", R: 133.694, d: 2.87, nd: 1.85478, elemId: 16, sd: 21.5 },
    { label: "29", R: -465.663, d: 14.44, nd: 1.0, elemId: 0, sd: 21.5 },
  ],

  asph: {},

  /* ── Zoom-only variable air spacings; close-focus pairs intentionally equal ── */
  var: {
    "5": [
      [2.59, 2.59],
      [40.93, 40.93],
      [58.21, 58.21],
    ],
    "11": [
      [14.15, 14.15],
      [7.9, 7.9],
      [3.56, 3.56],
    ],
    "14": [
      [5.42, 5.42],
      [9.82, 9.82],
      [13.52, 13.52],
    ],
    "17": [
      [9.21, 9.21],
      [4.8, 4.8],
      [1.11, 1.11],
    ],
    "22": [
      [18.91, 18.91],
      [9.71, 9.71],
      [2.24, 2.24],
    ],
    "25": [
      [15.94, 15.94],
      [21.59, 21.59],
      [27.98, 27.98],
    ],
    "29": [
      [14.44, 14.44],
      [24.23, 24.23],
      [29.66, 29.66],
    ],
  },
  varLabels: [
    ["5", "D5 + FP"],
    ["11", "D11"],
    ["14", "D14"],
    ["17", "D17"],
    ["22", "D22"],
    ["25", "D25"],
    ["29", "SK / BF"],
  ],

  zoomPositions: [72.27, 135.02, 193.89],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "5" },
    { text: "L2", fromSurface: "7", toSurface: "11" },
    { text: "L3 (Lp)", fromSurface: "STO", toSurface: "14" },
    { text: "L4 (Ln)", fromSurface: "15", toSurface: "17" },
    { text: "L5", fromSurface: "18", toSurface: "22" },
    { text: "L6", fromSurface: "23", toSurface: "25" },
    { text: "L7 (LRn)", fromSurface: "26", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
    { text: "D5", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.6,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 1 publishes infinity zoom spacings and focus directions only. L4 focuses objectward and L6 imageward, but no numerical close-focus gap table is published; the data therefore models only the published infinity zoom states. Canon's 0.6 m MFD and dual Nano USM focus/floating mechanism are product metadata, not reconstructed spacings.",

  nominalFno: [4.08, 4.08, 4.12],
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
