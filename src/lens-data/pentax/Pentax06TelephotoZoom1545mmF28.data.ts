import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — PENTAX-06 TELEPHOTO ZOOM 15-45mm f/2.8                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 9,784,950 B2, Example 1 / Numerical Embodiment 1. ║
 * ║ Production correlation: PENTAX-06 TELEPHOTO ZOOM.                  ║
 * ║ 14 elements / 10 groups, all spherical.                            ║
 * ║                                                                    ║
 * ║ Zoom: patent infinity-focus gaps d5, d12, and d16 are retained at ║
 * ║ f = 15.50, 21.49, and 44.04 mm. G1 and G4 are stationary in the  ║
 * ║ patent model; G2 and G3 move imageward from wide to tele.          ║
 * ║                                                                    ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent specifies     ║
 * ║ L13/G1b as the sole focusing element and its objectward direction ║
 * ║ but publishes no finite-focus spacing table. Close-focus pairs     ║
 * ║ solve the one-DOF mechanism to the manufacturer's 1.0 m MFD while ║
 * ║ keeping the image plane fixed and conserving d3 + d5 at each zoom ║
 * ║ state. Reconstructed tele magnification is 0.049176x, consistent  ║
 * ║ with the marketed approximately 0.05x value.                       ║
 * ║                                                                    ║
 * ║ Filter normalization: patent OP surfaces 26-27 are excluded. The  ║
 * ║ surface-25 rear gap is the independently verified air-equivalent  ║
 * ║ spacing to the same paraxial image plane at each zoom state.       ║
 * ║                                                                    ║
 * ║ Stop: patent surface 13 is STO. Its clear diameter is unpublished;║
 * ║ sd = 3.93 mm is back-solved from patent FNO = 2.9. With this stop,║
 * ║ modeled F/# is 2.89605 / 2.90173 / 2.90268 (wide/mid/tele).       ║
 * ║ nominalFno therefore uses the exact modeled base-state value.      ║
 * ║                                                                    ║
 * ║ Semi-diameters: the patent publishes none. Element SDs were        ║
 * ║ derived from exact spherical ray tracing across all three zoom     ║
 * ║ states at infinity and reconstructed close focus, using on-axis   ║
 * ║ marginal rays, a 0.60-field off-axis bundle, and the edge chief   ║
 * ║ ray, then given conservative mechanical clearance. Surfaces       ║
 * ║ 22-25 were enlarged after direct Figure 1 silhouette comparison.  ║
 * ║                                                                    ║
 * ║ Glass: nd/vd are the patent d-line values. nC/nF/ng/dPgF are      ║
 * ║ catalog-derived OHARA line/partial-dispersion data for the matched║
 * ║ glass identity and do not replace the patent prescription.         ║
 * ║                                                                    ║
 * ║ Source contradiction retained: Table 19 prints TL/ST2 = 4.88 for ║
 * ║ Example 1, but Table 2 independently gives 75.55/17.24 = 4.38225.║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-06-telephoto-zoom-15-45-f28",
  maker: "Pentax",
  name: "PENTAX-06 TELEPHOTO ZOOM 15-45mm f/2.8",
  subtitle: "US 9,784,950 B2 Example 1 — production correlation; constrained finite-focus reconstruction",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "MARKETED 15-45mm f/2.8",
    "DESIGN f = 15.50-44.04 mm; FNO = 2.9",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [15, 45],
  focalLengthDesign: [15.499333329526033, 44.04304861291281],
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["pentax-q"],
  imageFormat: "1/1.7-inch-type",
  patentNumber: "US 9,784,950 B2",
  patentAuthors: ["Masakazu Saori", "Yoshimitsu Ohara"],
  patentAssignees: ["Ricoh Imaging Company, Ltd."],
  patentYear: 2017,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      fl: -130.68395955718785,
      glass: "S-NPH1 (OHARA)",
      nC: 1.79801,
      nF: 1.83351,
      ng: 1.8559,
      dPgF: 0.0261,
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 62.37348789648064,
      glass: "S-FPL51 (OHARA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 69.90630145636763,
      glass: "S-FSL5 (OHARA)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      dPgF: 0.0022,
      apd: "patent",
      apdNote: "Patent identifies S-FSL5 as anomalous-dispersion glass; OHARA dPgF = +0.0022.",
    },
    {
      id: 4,
      name: "L21",
      diagramLabel: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -31.393232884801392,
      glass: "S-LAL18 (OHARA)",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
      dPgF: -0.0086,
    },
    {
      id: 5,
      name: "L22",
      diagramLabel: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -12.16824377904468,
      glass: "S-LAL18 (OHARA)",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
      dPgF: -0.0086,
    },
    {
      id: 6,
      name: "L23",
      diagramLabel: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 18.530262092970098,
      glass: "S-TIH53 (OHARA)",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      dPgF: 0.0175,
      cemented: "D2",
    },
    {
      id: 7,
      name: "L24",
      diagramLabel: "L24",
      label: "L24",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -33.765094395635174,
      glass: "S-LAH66 (OHARA)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      dPgF: -0.0092,
      cemented: "D2",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 12.779601318424918,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      dPgF: -0.0082,
      cemented: "D3",
    },
    {
      id: 9,
      name: "L32",
      diagramLabel: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.3,
      fl: -22.331077664908438,
      glass: "S-LAH71 (OHARA)",
      nC: 1.84259,
      nF: 1.86893,
      ng: 1.88456,
      dPgF: 0.0036,
      cemented: "D3",
    },
    {
      id: 10,
      name: "L41",
      diagramLabel: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 35.64911547349989,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      dPgF: -0.0082,
    },
    {
      id: 11,
      name: "L42",
      diagramLabel: "L42",
      label: "L42",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 20.421528012951335,
      glass: "S-FPL51 (OHARA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      cemented: "D4",
    },
    {
      id: 12,
      name: "L43",
      diagramLabel: "L43",
      label: "L43",
      type: "Negative Meniscus",
      nd: 1.72342,
      vd: 38,
      fl: -14.081552121453045,
      glass: "S-BAH28 (OHARA)",
      nC: 1.71782,
      nF: 1.73688,
      ng: 1.748,
      dPgF: 0.0035,
      cemented: "D4",
    },
    {
      id: 13,
      name: "L44",
      diagramLabel: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.5,
      fl: 21.01496221202795,
      glass: "S-PHM53 (OHARA)",
      nC: 1.60019,
      nF: 1.6094,
      ng: 1.61438,
      dPgF: 0.0045,
    },
    {
      id: 14,
      name: "L45",
      diagramLabel: "L45",
      label: "L45",
      type: "Negative Meniscus",
      nd: 1.56732,
      vd: 42.8,
      fl: -44.22035543353423,
      glass: "S-TIL26 (OHARA)",
      nC: 1.56339,
      nF: 1.57664,
      ng: 1.58423,
      dPgF: 0.0009,
    },
  ],

  /* ── Surfaces: patent 1-25; OP filter omitted ── */
  surfaces: [
    { label: "1", R: 45.554, d: 1.2, nd: 1.8081, elemId: 1, sd: 12.6 },
    { label: "2", R: 31.451, d: 4.3, nd: 1.497, elemId: 2, sd: 12.3 },
    { label: "3", R: -2061.947, d: 4.8, nd: 1, elemId: 0, sd: 12.1 },
    { label: "4", R: 31.427, d: 3.3, nd: 1.48749, elemId: 3, sd: 11.5 },
    { label: "5", R: 390, d: 1.65, nd: 1, elemId: 0, sd: 11.1 },
    { label: "6", R: -273.977, d: 1, nd: 1.72916, elemId: 4, sd: 4.1 },
    { label: "7", R: 25.016, d: 1, nd: 1, elemId: 0, sd: 3.9 },
    { label: "8", R: -24.825, d: 1, nd: 1.72916, elemId: 5, sd: 3.8 },
    { label: "9", R: 14.042, d: 1, nd: 1, elemId: 0, sd: 3.9 },
    { label: "10", R: 13.805, d: 2.3, nd: 1.84666, elemId: 6, sd: 4.1 },
    { label: "11", R: 106.188, d: 1, nd: 1.7725, elemId: 7, sd: 4.1 },
    { label: "12", R: 20.854, d: 9.67, nd: 1, elemId: 0, sd: 4.1 },
    { label: "STO", R: 1e15, d: 0.9, nd: 1, elemId: 0, sd: 3.93 },
    { label: "14", R: 60.94, d: 2.6, nd: 1.6968, elemId: 8, sd: 4.5 },
    { label: "15", R: -10.246, d: 1, nd: 1.85026, elemId: 9, sd: 4.6 },
    { label: "16", R: -23.254, d: 10.48, nd: 1, elemId: 0, sd: 4.7 },
    { label: "17", R: 19.427, d: 2.2, nd: 1.6968, elemId: 10, sd: 5.4 },
    { label: "18", R: 85, d: 0.3, nd: 1, elemId: 0, sd: 5.3 },
    { label: "19", R: 9.058, d: 3, nd: 1.497, elemId: 11, sd: 5.2 },
    { label: "20", R: 74.966, d: 1, nd: 1.72342, elemId: 12, sd: 4.8 },
    { label: "21", R: 8.918, d: 5.2, nd: 1, elemId: 0, sd: 4.4 },
    { label: "22", R: 20.735, d: 2.3, nd: 1.603, elemId: 13, sd: 5.2 },
    { label: "23", R: -31.228, d: 2.5, nd: 1, elemId: 0, sd: 5.1 },
    { label: "24", R: -9.86, d: 1, nd: 1.56732, elemId: 14, sd: 5.1 },
    { label: "25", R: -16.841, d: 10.529475462274664, nd: 1, elemId: 0, sd: 5.2 },
  ],

  asph: {},

  /* ── Zoom and constrained focus ── */
  zoomPositions: [15.5, 21.49, 44.04],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "3": [
      [4.8, 2.012830927981135],
      [4.8, 2.0128460876784238],
      [4.8, 2.012933471167882],
    ],
    "5": [
      [1.65, 4.437169072018865],
      [9.04, 11.827153912321576],
      [18.89, 21.677066528832118],
    ],
    "12": [
      [9.67, 9.67],
      [8, 8],
      [1.69, 1.69],
    ],
    "16": [
      [10.48, 10.48],
      [4.76, 4.76],
      [1.22, 1.22],
    ],
    "25": [
      [10.529475462274664, 10.529475462274664],
      [10.524527852113646, 10.524527852113646],
      [10.496007798274823, 10.496007798274823],
    ],
  },
  varLabels: [
    ["3", "D3 (FOCUS)"],
    ["5", "D5 (ZOOM + FOCUS)"],
    ["12", "D12 (ZOOM)"],
    ["16", "D16 (ZOOM)"],
    ["25", "BF (OP-NORM)"],
  ],
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: L13 alone moves approximately 2.787 mm objectward from infinity to the " +
    "manufacturer 1.0 m MFD. D3 decreases and D5 increases by equal amounts at each zoom position, preserving " +
    "their adjacent-gap sum. The patent publishes the mechanism and direction but no finite-focus spacing table.",

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6", toSurface: "12" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "16" },
    { text: "G4 (+)", fromSurface: "17", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 1,
  nominalFno: 2.8960512919208967,
  fstopSeries: [2.8, 4, 5.6, 8],
  apertureBlades: 5,
  maxFstop: 8,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
