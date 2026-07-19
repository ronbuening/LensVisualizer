import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED VR             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2021/0026133 A1, Example 4, Table 4 (Nikon).           ║
 * ║  Patent prescription is entered at its native scale: f = 72.1, 135.0,   ║
 * ║  and 292.1 mm. No scaling has been applied.                             ║
 * ║                                                                            ║
 * ║  14 glass elements in 10 construction groups. Four zoom groups are       ║
 * ║  annotated as G1(+), G2(-), G3(+), and G4(+). Example 4 contains no      ║
 * ║  aspherical surfaces.                                                     ║
 * ║                                                                            ║
 * ║  Zoom variable gaps: D5, D10, D12, and BF.                               ║
 * ║  Focus: patent prose identifies G3/L31 as the objectward-moving focus    ║
 * ║  group, but Example 4 publishes only infinity-focus zoom spacing data.   ║
 * ║  Close-focus travel is therefore not modeled; zoom-only gaps use         ║
 * ║  identical [infinity, close] values at each zoom point.                  ║
 * ║                                                                            ║
 * ║  Semi-diameters are inferred. They were constrained by paraxial marginal ║
 * ║  and chief-ray envelopes, element edge thickness, front/rear SD ratio,   ║
 * ║  sd/|R| < 0.90, and signed cross-gap sag intrusion. The tightest         ║
 * ║  clearance is the L22 rear to L23 front air gap.                         ║
 * ║                                                                            ║
 * ║  Only the optical prescription is included: no sensor cover glass,       ║
 * ║  external filters, barrel mechanics, or VR actuator mechanics.           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-afp-dx-70-300-f4563g",
  maker: "Nikon",
  name: "NIKON AF-P DX NIKKOR 70-300mm f/4.5-6.3 G ED VR",
  subtitle: "US 2021/0026133 A1 Example 4 — Nikon",
  specs: [
    "70-300 mm marketed; 72.1-292.1 mm patent",
    "f/4.5-6.3 marketed; f/4.707-6.494 patent",
    "14 elements / 10 construction groups",
    "One ED-class element; no aspherical surfaces",
    "DX / APS-C image height 14.75 mm",
  ],

  focalLengthMarketing: [70, 300],
  focalLengthDesign: [72.0979, 292.1056],
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 2021/0026133 A1",
  patentAuthors: ["Masashi Yamashita", "Tomoki Ito", "Hiroshi Yabumoto", "Hiroshi Yamamoto", "Satoshi Miwa", "Keisuke Tsubonoya", "Ayumu Makida", "Takeru Uehara"],
  patentAssignees: ["Nikon Corp"],
  patentYear: 2021,
  elementCount: 14,
  groupCount: 10,

  zoomPositions: [72.1, 135.0, 292.1],
  zoomLabels: ["Wide", "Tele"],
  nominalFno: [4.5, 4.8, 6.3],
  closeFocusM: 1.1,
  maxFstop: 32,
  fstopSeries: [4.5, 5.6, 6.3, 8, 11, 16, 22, 32],
  apertureBlades: 7,
  focusDescription:
    "Internal focus by G3/L31 per patent prose; Example 4 publishes infinity zoom spacings only, so close-focus travel is not modeled in this transcription.",

  scFill: 0.58,
  yScFill: 0.46,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 63.88,
      fl: 150.7,
      glass: "517639 - crown glass (J-BK7 code match; patent nd=1.51680, vd=63.88)",
      apd: false,
      role: "Front positive collector in G1.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.61155,
      vd: 31.26,
      fl: -98.7,
      glass: "612313 — anomalous-dispersion flint class (patent nd=1.61155, νd=31.26, θgF=0.618; no exact public catalog match)",
      apd: "patent",
      apdNote: "Patent-listed θgF = 0.618; θgF + 0.00316νd = 0.7168.",
      role: "Specified LZ glass in the front cemented achromat.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.51742,
      vd: 52.2,
      fl: 87.5,
      glass: "E-CF6 (Hoya) — medium-dispersion crown (517522)",
      apd: false,
      role: "Positive partner for L12 in the G1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.52,
      fl: -26.6,
      glass: "S-LAL14 (OHARA) — lanthanum crown (697555)",
      apd: false,
      role: "Negative component of the G2 variator doublet.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.74,
      fl: 35.7,
      glass: "J-SFH1 (Hikari) — anomalous-dispersion dense flint (808227)",
      apd: false,
      role: "High-index dense-flint partner in the G2 variator doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.85026,
      vd: 32.35,
      fl: -48.2,
      glass: "J-LASF021 (Hikari) — dense lanthanum flint (850324)",
      apd: false,
      role: "Rear negative element of the G2 variator group.",
    },
    {
      id: 7,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.22,
      fl: 70.5,
      glass: "S-BAL35 (OHARA) — barium crown (589612)",
      apd: false,
      role: "Single-element internal focusing group G3.",
    },
    {
      id: 8,
      name: "L41",
      label: "L41",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.73,
      fl: 40.4,
      glass: "J-FK01A (Hikari) — ED fluorophosphate crown (497817)",
      apd: false,
      role: "ED-class positive element in the front doublet of G4.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L42",
      label: "L42",
      type: "Biconcave Negative",
      nd: 1.85026,
      vd: 32.35,
      fl: -38.7,
      glass: "J-LASF021 (Hikari) — dense lanthanum flint (850324)",
      apd: false,
      role: "Dense-flint partner for L41 in the ED rear corrector.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 70.0,
      glass: "J-FK5 (Hikari) — low-dispersion crown (487703)",
      apd: false,
      role: "Positive relay element ahead of the stop.",
    },
    {
      id: 11,
      name: "L44",
      label: "L44",
      type: "Positive Meniscus",
      nd: 1.801,
      vd: 34.92,
      fl: 28.3,
      glass: "J-LAF016 (Hikari) — dense flint / lanthanum-flint (801349)",
      apd: false,
      role: "Positive post-stop correction element.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L45",
      label: "L45",
      type: "Biconcave Negative",
      nd: 1.7,
      vd: 48.11,
      fl: -15.9,
      glass: "J-LAF01 (Hikari) — high-index flint (700481)",
      apd: false,
      role: "Negative partner in the post-stop cemented pair.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L46",
      label: "L46",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.03,
      fl: 35.8,
      glass: "F5 (Schott) — medium-index flint (603380)",
      apd: false,
      role: "Rear positive relay and field-shape correction element.",
    },
    {
      id: 14,
      name: "L47",
      label: "L47",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -67.8,
      glass: "S-LAH66 (OHARA) — high-index lanthanum (773496)",
      apd: false,
      role: "Final negative meniscus for field and ray-angle control.",
    },
  ],

  surfaces: [
    { label: "1", R: 93.841, d: 5.6, nd: 1.5168, elemId: 1, sd: 27.6 },
    { label: "2", R: -447.915, d: 0.2, nd: 1.0, elemId: 0, sd: 27.0 },
    { label: "3", R: 112.303, d: 1.7, nd: 1.61155, elemId: 2, sd: 24.8 },
    { label: "4", R: 39.024, d: 8.0, nd: 1.51742, elemId: 3, sd: 24.2 },
    { label: "5", R: 262.5, d: 2.306, nd: 1.0, elemId: 0, sd: 23.8 },
    { label: "6", R: -239.035, d: 1.3, nd: 1.6968, elemId: 4, sd: 12.6 },
    { label: "7", R: 20.159, d: 4.0, nd: 1.80809, elemId: 5, sd: 12.0 },
    { label: "8", R: 61.046, d: 2.038, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "9", R: -54.537, d: 1.4, nd: 1.85026, elemId: 6, sd: 10.2 },
    { label: "10", R: 167.455, d: 32.727, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "11", R: 102.636, d: 3.4, nd: 1.58913, elemId: 7, sd: 13.8 },
    { label: "12", R: -68.899, d: 10.112, nd: 1.0, elemId: 0, sd: 13.3 },
    { label: "13", R: 39.218, d: 5.5, nd: 1.497, elemId: 8, sd: 12.0 },
    { label: "14", R: -39.212, d: 1.3, nd: 1.85026, elemId: 9, sd: 11.6 },
    { label: "15", R: 207.543, d: 0.2, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "16", R: 51.63, d: 3.7, nd: 1.48749, elemId: 10, sd: 11.4 },
    { label: "17", R: -98.216, d: 0.9, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "STO", R: 1e15, d: 23.297, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "19", R: -79.941, d: 3.3, nd: 1.801, elemId: 11, sd: 10.4 },
    { label: "20", R: -17.991, d: 1.0, nd: 1.7, elemId: 12, sd: 10.4 },
    { label: "21", R: 29.977, d: 2.0, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "22", R: 35.573, d: 3.5, nd: 1.60342, elemId: 13, sd: 10.4 },
    { label: "23", R: -52.781, d: 6.6996, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "24", R: -20.538, d: 1.2, nd: 1.7725, elemId: 14, sd: 10.3 },
    { label: "25", R: -34.657, d: 43.294, nd: 1.0, elemId: 0, sd: 10.1 },
  ],

  asph: {},

  var: {
    "5": [
      [2.306, 2.306],
      [36.768, 36.768],
      [51.599, 51.599],
    ],
    "10": [
      [32.727, 32.727],
      [21.603, 21.603],
      [2.157, 2.157],
    ],
    "12": [
      [10.112, 10.112],
      [13.56, 13.56],
      [16.367, 16.367],
    ],
    "25": [
      [43.294, 43.294],
      [45.652, 45.652],
      [70.374, 70.374],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["12", "D12"],
    ["25", "BF"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6", toSurface: "10" },
    { text: "G3 (+ focus)", fromSurface: "11", toSurface: "12" },
    { text: "G4 (+)", fromSurface: "13", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
