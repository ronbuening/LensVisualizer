import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 400mm f/2.8 L IS III USM                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0041605 A1, Example 2 / Numerical Data 2.                   ║
 * ║  Correlation to the production lens is inferred from focal length/aperture,        ║
 * ║  architecture, focus/IS arrangement, patent timing, and Canon product data.         ║
 * ║  Active model: 16 elements / 12 air-separated groups, all spherical.                ║
 * ║                                                                                    ║
 * ║  FILTER NORMALIZATION: Patent surfaces 30–31 are the explicit rear glass block G   ║
 * ║  (filter) and are excluded. Its optical effect is folded into surface 29's final    ║
 * ║  air spacing: 7.77 + 2.20/1.51633 + 60.70 = 69.92087151213786 mm.                 ║
 * ║                                                                                    ║
 * ║  SCALING: none (s = 1). The patent publishes f = 392.00 mm; the rounded             ║
 * ║  prescription independently traces to EFL = 391.938134284 mm. The marketed         ║
 * ║  400 mm focal length remains separate metadata.                                     ║
 * ║                                                                                    ║
 * ║  FOCUS STATUS — CONSTRAINED_RECONSTRUCTION: the patent publishes only that L2      ║
 * ║  translates axially while L3 stays fixed; it does not publish finite-focus gaps.    ║
 * ║  The close state is a one-DOF paraxial solve constrained to Canon's rounded 2.5 m  ║
 * ║  MFD. L2 moves +19.0782676028358 mm imageward. The adjacent air gaps remain        ║
 * ║  complementary, preserving 5.00 + 36.49 = 41.49 mm exactly.                        ║
 * ║                                                                                    ║
 * ║  STOP: patent surface 14. The patent gives F/2.90 but no stop diameter. The stop    ║
 * ║  semi-diameter 23.60807790141111 mm is calibrated from the independently traced    ║
 * ║  EFL and the published F/2.90.                                                       ║
 * ║                                                                                    ║
 * ║  SEMI-DIAMETERS: not published. They are model values derived from paraxial        ║
 * ║  marginal/chief rays, the Example 2 section (Fig. 2A), edge-thickness and actual   ║
 * ║  rim-slope limits, shared-gap sag clearance, default off-axis containment, and      ║
 * ║  the production barrel envelope. They are not represented as patent dimensions.    ║
 * ║                                                                                    ║
 * ║  SPECTRAL FIELDS: the patent publishes nd, νd, and θgF but not nC/nF/ng. Each       ║
 * ║  element's line indices below are a catalog-anchored reconstruction: the nearest    ║
 * ║  defensible vendor glass supplies the C–d–F dispersion split, while the patent's   ║
 * ║  nd/νd and θgF are preserved exactly. dPgF is computed from the Schott normal-line ║
 * ║  definition. Qualified class/proxy labels are retained where vendor identity is     ║
 * ║  not defensible from the patent alone. No APO identity is asserted.                 ║
 * ║                                                                                    ║
 * ║  SOURCE ISSUES CARRIED FORWARD: patent conditions (3), (5), (12), and (15) contain ║
 * ║  text/table or reference-plane inconsistencies documented in the Stage-2 audit.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-400mm-f28l-is-iii-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/2.8 L IS III USM",
  subtitle: "US 2019/0041605 A1 — Example 2 / Numerical Data 2; production correlation inferred",
  specs: [
    "16 active elements / 12 groups (rear filter omitted)",
    "Patent f = 392.00 mm; traced EFL = 391.938 mm",
    "Design F/2.90; 2ω = 6.32°",
    "Imageward L2 inner focus; transverse L3B image-stabilization group",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 391.9381342837631,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2019/0041605 A1",
  patentAuthors: ["Shinichiro Saito", "Makoto Nakahara"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2019,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1-1",
      label: "Element 1 (G1P)",
      type: "Positive Meniscus",
      nd: 1.59522,
      vd: 67.74,
      fl: 332.6981606470374,
      glass: "595677 class; optical proxy S-FPM2 (OHARA)",
      nC: 1.5925509623,
      nF: 1.6013377943,
      ng: 1.6061195883,
      dPgF: 0.01433868,
      role: "G1P; front positive collector in L1.",
    },
    {
      id: 2,
      name: "L1-2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 167.4020472725746,
      glass: "437951 ultra-low-dispersion class; spectral proxy FCD100 (HOYA)",
      nC: 1.4355914826,
      nF: 1.4401866456,
      ng: 1.4426340294,
      dPgF: 0.0487582,
      role: "Positive element in L1.",
    },
    {
      id: 3,
      name: "L1-3",
      label: "Element 3 (G1N)",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      fl: -73.27894105201612,
      glass: "806333 dense-flint class; spectral proxy NBFD15 (HOYA)",
      nC: 1.7990173588,
      nF: 1.823246394,
      ng: 1.8374954896,
      dPgF: 0.00026014,
      role: "G1N; first negative element in L1.",
    },
    {
      id: 4,
      name: "L1-4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 170.4782608695652,
      glass: "437951 ultra-low-dispersion class; spectral proxy FCD100 (HOYA)",
      nC: 1.4355914826,
      nF: 1.4401866456,
      ng: 1.4426340294,
      dPgF: 0.0487582,
      role: "Positive element in L1.",
    },
    {
      id: 5,
      name: "L1-5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.89286,
      vd: 20.36,
      fl: 153.33380448283245,
      glass: "S-NPH4 catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.8804789739,
      nF: 1.9243326084,
      ng: 1.952368237,
      dPgF: 0.02974552,
      role: "Positive element in L1.",
    },
    {
      id: 6,
      name: "L1-6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.16,
      fl: -116.38089062191953,
      glass: "S-LAH60 catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.8273789711,
      nF: 1.8498224587,
      ng: 1.8627858172,
      dPgF: -0.00369688,
      role: "Negative member of the L1 cemented pair D1.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L1-7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: 126.56565137767268,
      glass: "437951 ultra-low-dispersion class; spectral proxy FCD100 (HOYA)",
      nC: 1.4355914826,
      nF: 1.4401866456,
      ng: 1.4426340294,
      dPgF: 0.0487582,
      role: "Positive member of the L1 cemented pair D1.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L2-1",
      label: "Element 8 (Focus)",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.4,
      fl: -87.75681851096051,
      glass: "618634 phosphate-crown class; spectral proxy PCD4 (HOYA)",
      nC: 1.6150307207,
      nF: 1.6247783548,
      ng: 1.6300372033,
      dPgF: 0.0023388,
      role: "Negative L2 focus element; translates axially as the sole focusing degree of freedom.",
    },
    {
      id: 9,
      name: "L3A-1",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.89286,
      vd: 20.36,
      fl: -218.07237617576658,
      glass: "S-NPH4 catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.8804789739,
      nF: 1.9243326084,
      ng: 1.952368237,
      dPgF: 0.02974552,
      role: "Negative member of the L3A cemented pair D2.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L3A-2",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.43,
      fl: 76.07832078486643,
      glass: "S-NSL36 catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.5144403691,
      nF: 1.5243091465,
      ng: 1.5298001343,
      dPgF: 0.00078726,
      role: "Positive member of the L3A cemented pair D2.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L3B-1",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.27,
      fl: 66.16059033585888,
      glass: "806333 dense-flint class; spectral proxy NBFD15 (HOYA)",
      nC: 1.7990173588,
      nF: 1.823246394,
      ng: 1.8374954896,
      dPgF: 0.00026014,
      role: "Positive member of the L3B cemented pair D3 in the transverse IS sub-unit.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L3B-2",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.53775,
      vd: 74.7,
      fl: -52.072369890754814,
      glass: "S-FPM3 catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.5355503681,
      nF: 1.5427491633,
      ng: 1.5466307537,
      dPgF: 0.0210454,
      role: "Negative member of the L3B cemented pair D3 in the transverse IS sub-unit.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L3B-3",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.68,
      fl: -51.17711715171082,
      glass: "S-LAL18 legacy catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.7251015095,
      nF: 1.7384365497,
      ng: 1.7456961456,
      dPgF: -0.00742824,
      role: "Negative element completing the L3B transverse IS sub-unit.",
    },
    {
      id: 14,
      name: "L3C-1",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.68,
      fl: 187.3305518488731,
      glass: "S-NBH5 catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.6492285523,
      nF: 1.6657134313,
      ng: 1.6751708064,
      dPgF: -0.00335824,
      role: "Positive element in the fixed L3C rear sub-unit.",
    },
    {
      id: 15,
      name: "L3C-2",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.71,
      fl: 46.09159982540862,
      glass: "S-NBH8 catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.7143679885,
      nF: 1.7351248309,
      ng: 1.7472343728,
      dPgF: -0.00201778,
      role: "Positive member of the fixed L3C cemented pair D4.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L3C-3",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.76,
      fl: -86.93653999147789,
      glass: "S-NPH1 catalog equivalent (OHARA; production supplier unspecified)",
      nC: 1.7980085014,
      nF: 1.8335137739,
      ng: 1.8559069492,
      dPgF: 0.02518232,
      role: "Negative member of the fixed L3C cemented pair D4.",
      cemented: "D4",
    },
  ],

  /* ── Surface prescription: US 2019/0041605 A1, Numerical Data 2 ── */
  surfaces: [
    { label: "1", R: 154.557, d: 14.23, nd: 1.59522, elemId: 1, sd: 71.0 },
    { label: "2", R: 679.875, d: 120.54, nd: 1.0, elemId: 0, sd: 71.0 },
    { label: "3", R: 94.858, d: 14.3, nd: 1.437, elemId: 2, sd: 43.0 },
    { label: "4", R: -305.077, d: 0.17, nd: 1.0, elemId: 0, sd: 38.4 },
    { label: "5", R: -287.52, d: 1.5, nd: 1.8061, elemId: 3, sd: 38.4 },
    { label: "6", R: 74.517, d: 2.79, nd: 1.0, elemId: 0, sd: 39.0 },
    { label: "7", R: 74.499, d: 11.84, nd: 1.437, elemId: 4, sd: 39.0 },
    { label: "8", R: 1e15, d: 17.88, nd: 1.0, elemId: 0, sd: 38.5 },
    { label: "9", R: 67.131, d: 5.78, nd: 1.89286, elemId: 5, sd: 35.0 },
    { label: "10", R: 126.369, d: 1.51, nd: 1.0, elemId: 0, sd: 34.5 },
    { label: "11", R: 70.332, d: 2.0, nd: 1.834, elemId: 6, sd: 31.5 },
    { label: "12", R: 40.254, d: 10.32, nd: 1.437, elemId: 7, sd: 29.5 },
    { label: "13", R: 136.354, d: 6.96, nd: 1.0, elemId: 0, sd: 29.5 },
    { label: "STO", R: 1e15, d: 5.0, nd: 1.0, elemId: 0, sd: 23.60807790141111 },
    { label: "15", R: -565.896, d: 1.6, nd: 1.618, elemId: 8, sd: 23.2 },
    { label: "16", R: 60.047, d: 36.49, nd: 1.0, elemId: 0, sd: 23.2 },
    { label: "17", R: 100.609, d: 1.4, nd: 1.89286, elemId: 9, sd: 23.2 },
    { label: "18", R: 65.898, d: 7.56, nd: 1.51742, elemId: 10, sd: 23.2 },
    { label: "19", R: -93.94, d: 1.0, nd: 1.0, elemId: 0, sd: 23.2 },
    { label: "20", R: 93.498, d: 5.02, nd: 1.8061, elemId: 11, sd: 22.0 },
    { label: "21", R: -121.171, d: 1.2, nd: 1.53775, elemId: 12, sd: 22.0 },
    { label: "22", R: 36.544, d: 5.43, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "23", R: -82.448, d: 1.2, nd: 1.72916, elemId: 13, sd: 15.2 },
    { label: "24", R: 68.589, d: 3.01, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "25", R: 137.981, d: 4.68, nd: 1.65412, elemId: 14, sd: 23.5 },
    { label: "26", R: -1080.069, d: 6.25, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "27", R: 71.025, d: 10.18, nd: 1.72047, elemId: 15, sd: 24.0 },
    { label: "28", R: -58.624, d: 1.5, nd: 1.8081, elemId: 16, sd: 24.0 },
    { label: "29", R: -358.198, d: 69.92087151213786, nd: 1.0, elemId: 0, sd: 24.0 },
  ],

  asph: {},

  /* ── Focus: one-DOF constrained reconstruction of L2 translation ── */
  var: {
    STO: [5.0, 24.0782676028358],
    "16": [36.49, 17.4117323971642],
  },
  varLabels: [
    ["STO", "L1–L2"],
    ["16", "L2–L3"],
  ],
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent publishes L2 axial focusing with L3 fixed but no finite-focus spacing table. The close endpoint is a one-DOF code solve to Canon's rounded 2.5 m MFD: L2 shifts +19.0782676028358 mm imageward while the adjacent gaps preserve 41.49 mm exactly. The model predicts |m| = 0.176031 at 2.5 m; Canon's rounded 0.17× value reverses to about 2.5795 m in this patent prescription.",

  /* ── Patent unit annotations; L3A/L3B/L3C boundaries follow Fig. 2A brackets ── */
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "13" },
    { text: "L2 (FOCUS)", fromSurface: "15", toSurface: "16" },
    { text: "L3A", fromSurface: "17", toSurface: "19" },
    { text: "L3B (IS)", fromSurface: "20", toSurface: "24" },
    { text: "L3C", fromSurface: "25", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 2.5,
  nominalFno: 2.9,
  fstopSeries: [2.9, 4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  /* Layout only; geometry validity is established independently of these controls. */
  yScFill: 0.54,
} satisfies LensDataInput;

export default LENS_DATA;
