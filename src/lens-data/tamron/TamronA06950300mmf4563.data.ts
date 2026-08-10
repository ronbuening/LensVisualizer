import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — TAMRON 50-300mm f/4.5-6.3 Di III VC VXD                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: US 2024/0295723 A1, Example 1 (Tamron Co., Ltd.).           ║
 * ║ Production correlation: Tamron A069; Sony E full-frame, 19 elements /      ║
 * ║ 14 groups, VC, and VXD inner focus. The patent/product relationship is a   ║
 * ║ modeling correlation supported by architecture, focal/aperture range,       ║
 * ║ stabilization/focus mechanism, and chronology; the patent does not name     ║
 * ║ Model A069.                                                                 ║
 * ║                                                                            ║
 * ║ NO SCALE: s = 1.000000. Patent design values are retained independently     ║
 * ║ from the marketed 50-300mm f/4.5-6.3 specification.                        ║
 * ║                                                                            ║
 * ║ ZOOM: published infinity-focus Example 1 states only. D5, D14, D25, D28,   ║
 * ║ and D34 vary with zoom; D25 and D28 reverse at the intermediate state.     ║
 * ║                                                                            ║
 * ║ FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: the patent states that G4        ║
 * ║ (cemented L15+L16) moves imageward toward near focus, but Example 1 gives   ║
 * ║ no close-focus D25/D28 values. Every authored [d_inf, d_close] pair is      ║
 * ║ therefore identical. Production MOD values remain metadata only.            ║
 * ║                                                                            ║
 * ║ SENSOR COVER GLASS: source surfaces 35-36 are omitted. The 2.500 mm plate  ║
 * ║ (nd=1.516798) is replaced by 2.500/1.516798 = 1.648208924 mm of air, plus  ║
 * ║ the source 1.000 mm rear air spacing. Authored surface 34 therefore uses    ║
 * ║ D34 + 2.648208924 mm to the project image plane.                            ║
 * ║                                                                            ║
 * ║ STOP: the patent publishes the stop plane and design FNO but not a physical ║
 * ║ stop diameter. The stored wide-state STO sd=10.201416 mm is an exact-ray    ║
 * ║ seed inferred from the modeled F/4.635 entrance pupil; LensVisualizer        ║
 * ║ derives zoom-state stop geometry from nominalFno.                           ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: Example 1 publishes none. Values below are inferred from    ║
 * ║ exact spherical marginal/chief-ray envelopes at all three zoom states, the  ║
 * ║ published field angles/image height, the runtime off-axis sampling pattern, ║
 * ║ the 67 mm production filter envelope, and the patent optical section. The    ║
 * ║ G2-G5 silhouettes follow the relative clear-aperture profile in Figure 1;    ║
 * ║ steep and closely spaced surfaces are capped by the geometry checks. They    ║
 * ║ were then constrained by positive edge thickness, actual spherical rim      ║
 * ║ slope, shared-band cross-gap intrusion, off-axis clipping location, and     ║
 * ║ render-trim-equivalent checks. No layout control is used to conceal invalid ║
 * ║ geometry.                                                                   ║
 * ║                                                                            ║
 * ║ GLASS: the patent supplies nd/vd only and names no vendor. Neutral six-digit║
 * ║ coordinate classes and explicitly qualified catalog equivalents are used.   ║
 * ║ nC/nF/ng/dPgF are intentionally omitted from the authored data because       ║
 * ║ catalog equivalents are dispersion models, not production identifications.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "tamron-a069-50-300mm-f4-5-6-3-di-iii-vc-vxd",
  maker: "Tamron",
  name: "TAMRON 50-300mm f/4.5-6.3 Di III VC VXD",
  subtitle: "US 2024/0295723 A1 — Example 1 / Tamron A069 correlation",
  specs: [
    "19 ELEMENTS / 14 GROUPS",
    "PATENT f = 51.509-290.867 mm",
    "PATENT F/4.635-6.489",
    "2ω = 45.833°-8.230°",
    "ALL SPHERICAL",
    "G2V VC / G4 INNER FOCUS",
  ],

  focalLengthMarketing: [50, 300],
  focalLengthDesign: [51.5094, 290.8673],
  apertureMarketing: 4.5,
  apertureDesign: 4.635,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2024/0295723 A1",
  patentAuthors: ["Takahiko Sakai"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2024,
  elementCount: 19,
  groupCount: 14,

  /* ── Elements ──
   * Focal lengths are independently computed standalone in-air element powers
   * from the authored patent radii, center thicknesses, and d-line indices.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.804198,
      vd: 46.5,
      fl: -151.404242,
      glass: "804465 class (vendor unresolved)",
      role: "Negative member of the front cemented pair in positive group G1.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.437001,
      vd: 95.1,
      fl: 145.365021,
      glass: "437951 class (vendor unresolved)",
      role: "Very-low-dispersion positive member of the front cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.437001,
      vd: 95.1,
      fl: 140.124067,
      glass: "437951 class (vendor unresolved)",
      role: "Very-low-dispersion positive element completing G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.696802,
      vd: 55.46,
      fl: -50.816713,
      glass: "697555 class (vendor unresolved)",
      role: "Leading negative element of zoom group G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.496997,
      vd: 81.61,
      fl: -102.335294,
      glass: "497816 class (vendor unresolved)",
      role: "Low-dispersion negative element in G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.64769,
      vd: 33.84,
      fl: 66.026965,
      glass: "648338 class (vendor unresolved)",
      role: "Positive counterpower within the net-negative G2 variator.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.1,
      fl: -26.112133,
      glass: "S-LAL19 (OHARA catalog-equivalent; production supplier unspecified)",
      role: "Negative member of the cemented vibration-compensation subgroup G2V.",
      cemented: "G2V",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.858833,
      vd: 30.0,
      fl: 49.341013,
      glass: "859300 class (vendor unresolved)",
      role: "Positive member of the cemented vibration-compensation subgroup G2V.",
      cemented: "G2V",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.691002,
      vd: 54.82,
      fl: 49.217424,
      glass: "691548 class (vendor unresolved)",
      role: "Positive relay element at the front of G3A, immediately before the stop.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.496997,
      vd: 81.61,
      fl: 35.215602,
      glass: "497816 class (vendor unresolved)",
      role: "Low-dispersion positive member of the first post-stop cemented pair.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.903658,
      vd: 31.31,
      fl: -29.229289,
      glass: "904313 class (vendor unresolved)",
      role: "Dense negative member completing the G3A post-stop cemented pair.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.720467,
      vd: 34.71,
      fl: 40.037609,
      glass: "720347 class (vendor unresolved)",
      role: "Positive element at the front of G3B.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.54072,
      vd: 47.2,
      fl: 29.06386,
      glass: "541472 class (vendor unresolved)",
      role: "Positive member of the rear G3B cemented pair.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.95,
      vd: 29.37,
      fl: -25.182114,
      glass: "950294 class (vendor unresolved)",
      role: "High-index negative member completing G3B.",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.921189,
      vd: 23.96,
      fl: 36.654496,
      glass: "921240 class (vendor unresolved)",
      role: "Positive member of the cemented negative G4 focusing group.",
      cemented: "G4",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.79952,
      vd: 42.24,
      fl: -19.351972,
      glass: "800422 class (vendor unresolved)",
      role: "Dominant negative member of the cemented G4 focusing group.",
      cemented: "G4",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.575006,
      vd: 41.51,
      fl: 30.642519,
      glass: "575415 class (vendor unresolved)",
      role: "Positive leading element of rear group G5.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Negative",
      nd: 1.900433,
      vd: 37.37,
      fl: -38.680412,
      glass: "900374 class (vendor unresolved)",
      role: "High-index negative element in G5.",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.870705,
      vd: 40.73,
      fl: -57.600137,
      glass: "871407 class (vendor unresolved)",
      role: "Final negative meniscus in G5 ahead of the image plane.",
    },
  ],

  /* ── Surface prescription ──
   * Source surfaces 1-34 retained. Source surface 17 is the aperture stop and
   * is labeled STO. Source CG surfaces 35-36 are omitted as described above.
   */
  surfaces: [
    { label: "1", R: 128.0, d: 1.2, nd: 1.804198, elemId: 1, sd: 28.8 },
    { label: "2", R: 62.14, d: 6.51, nd: 1.437001, elemId: 2, sd: 27.5 },
    { label: "3", R: 2760.0, d: 0.15, nd: 1.0, elemId: 0, sd: 25.5 },
    { label: "4", R: 67.8, d: 6.5, nd: 1.437001, elemId: 3, sd: 25.8 },
    { label: "5", R: -613.9, d: 5.3235, nd: 1.0, elemId: 0, sd: 25.2 },
    { label: "6", R: 82.2, d: 1.2, nd: 1.696802, elemId: 4, sd: 17.0 },
    { label: "7", R: 24.6, d: 9.0, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "8", R: -72.7, d: 0.9, nd: 1.496997, elemId: 5, sd: 14.0 },
    { label: "9", R: 170.0, d: 0.6, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "10", R: 39.3, d: 3.1, nd: 1.64769, elemId: 6, sd: 12.7 },
    { label: "11", R: 470.0, d: 2.2, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "12", R: -46.45, d: 0.8, nd: 1.72916, elemId: 7, sd: 13.8 },
    { label: "13", R: 32.5, d: 2.6, nd: 1.858833, elemId: 8, sd: 13.8 },
    { label: "14", R: 134.3, d: 31.2606, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "15", R: 49.6, d: 3.25, nd: 1.691002, elemId: 9, sd: 13.5 },
    { label: "16", R: -105.3, d: 2.2, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "STO", R: 1e15, d: 1.4, nd: 1.0, elemId: 0, sd: 10.201416 },
    { label: "18", R: 41.46, d: 5.31, nd: 1.496997, elemId: 10, sd: 12.9 },
    { label: "19", R: -29.0, d: 0.8, nd: 1.903658, elemId: 11, sd: 12.9 },
    { label: "20", R: 300.0, d: 11.7, nd: 1.0, elemId: 0, sd: 12.9 },
    { label: "21", R: 130.7, d: 3.5, nd: 1.720467, elemId: 12, sd: 13.0 },
    { label: "22", R: -36.6, d: 1.81, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "23", R: 35.2, d: 4.56, nd: 1.54072, elemId: 13, sd: 11.3 },
    { label: "24", R: -27.1, d: 0.8, nd: 1.95, elemId: 14, sd: 11.3 },
    { label: "25", R: 207.0, d: 2.6417, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "26", R: 2217.6, d: 2.4, nd: 1.921189, elemId: 15, sd: 11.5 },
    { label: "27", R: -34.27, d: 0.8, nd: 1.79952, elemId: 16, sd: 11.5 },
    { label: "28", R: 28.5, d: 15.6249, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "29", R: 35.5, d: 6.9, nd: 1.575006, elemId: 17, sd: 14.5 },
    { label: "30", R: -32.5, d: 1.0, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "31", R: -41.89, d: 0.8, nd: 1.900433, elemId: 18, sd: 14.5 },
    { label: "32", R: 208.5, d: 6.44, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "33", R: -23.4, d: 1.0, nd: 1.870705, elemId: 19, sd: 15.0 },
    { label: "34", R: -44.74, d: 20.648208924326, nd: 1.0, elemId: 0, sd: 15.0 },
  ],

  asph: {},

  /* ── Published infinity-focus zoom states only ── */
  zoomPositions: [51.5094, 149.9986, 290.8673],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "5": [
      [5.3235, 5.3235],
      [48.3564, 48.3564],
      [71.4334, 71.4334],
    ],
    "14": [
      [31.2606, 31.2606],
      [5.4903, 5.4903],
      [1.2, 1.2],
    ],
    "25": [
      [2.6417, 2.6417],
      [10.5699, 10.5699],
      [2.5627, 2.5627],
    ],
    "28": [
      [15.6249, 15.6249],
      [12.6338, 12.6338],
      [16.5133, 16.5133],
    ],
    "34": [
      [20.648208924326, 20.648208924326],
      [25.425708924326, 25.425708924326],
      [41.027408924326, 41.027408924326],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["14", "D14"],
    ["25", "D25"],
    ["28", "D28"],
    ["34", "BF (CG air-equivalent)"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-) / VC", fromSurface: "6", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "15", toSurface: "25" },
    { text: "G4 (-) / FOCUS", fromSurface: "26", toSurface: "28" },
    { text: "G5 (-)", fromSurface: "29", toSurface: "34" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "G2V / VC", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
    { text: "G4 / FOCUS", fromSurface: "26", toSurface: "28" },
  ],

  closeFocusM: 0.22,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION. Example 1 publishes only infinity-focus zoom spacings. G4 (cemented L15+L16) is the focusing group and moves toward the image side at nearer distances, but no close-focus D25/D28 values are published; all focus pairs therefore remain identical. Tamron's production MOD is 0.22 m at wide and 0.9 m at tele and is not used to invent internal travel.",

  nominalFno: [4.635, 5.567, 6.489],
  fstopSeries: [4.5, 5.6, 6.3, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  scFill: 0.5,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
