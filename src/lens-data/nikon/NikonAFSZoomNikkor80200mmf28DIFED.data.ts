import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI AF-S ZOOM-NIKKOR 80-200mm f/2.8 D IF-ED                   ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2000-19398 A, Example 1 (Nikon Corporation / Susumu Sato).            ║
 * ║ Strong production correlation to the marketed 80-200mm f/2.8 D IF-ED.           ║
 * ║ 18 elements / 14 air-spaced groups; all spherical; native patent scale.          ║
 * ║ Functional power sequence: G1 positive, G2 negative, G3 positive, G4 positive.   ║
 * ║ G2 and G3 move for zoom; G3 reverses direction between mid and tele.             ║
 * ║ G1 (G1F + G1R) and G4 remain fixed during zoom; G1R moves only for focus.       ║
 * ║                                                                                   ║
 * ║ FOCUS — CONSTRAINED_RECONSTRUCTION                                               ║
 * ║ The patent requires rigid translation of rear subgroup G1R only. The published   ║
 * ║ close-focus d5 shift is 8.59615 mm, while its published d9 increase is            ║
 * ║ 8.60325 mm, a 0.00710 mm internal contradiction. This model preserves the        ║
 * ║ published close d5 = 8.48886 mm and applies the same rigid 8.59615 mm shift to   ║
 * ║ d9, giving close d9 = 10.59521 / 24.64596 / 31.46770 mm. The raw patent d9      ║
 * ║ values 10.60231 / 24.65306 / 31.47480 mm are retained in the audit only.        ║
 * ║                                                                                   ║
 * ║ ZOOM CONTROL COLUMNS                                                              ║
 * ║ zoomPositions preserve the patent table headings 81.55 / 135 / 194 mm. The      ║
 * ║ tele column independently computes to EFL = 195.999955682 mm; this source-table  ║
 * ║ contradiction is preserved rather than silently relabeling the control column.   ║
 * ║ Infinity spacings otherwise reproduce the patent table exactly.                   ║
 * ║ Between the three published zoom columns, LensVisualizer uses its standard        ║
 * ║ piecewise-linear spacing interpolation. That visualization is not asserted as     ║
 * ║ Nikon's actual continuous cam law or as an exact finite-conjugate reconstruction. ║
 * ║                                                                                   ║
 * ║ APERTURE / PUPIL                                                                  ║
 * ║ Table 1 rounds FNO to 2.9; the Example 1 aberration figures print FNO = 2.88.    ║
 * ║ nominalFno therefore uses the independently verified modeled value 2.88. The     ║
 * ║ physical STO semi-diameter 18.801412058 mm is inferred by solving the wide-state ║
 * ║ entrance pupil for f/2.88 and reproduces approximately f/2.88 at all three       ║
 * ║ zoom control columns.                                                             ║
 * ║                                                                                   ║
 * ║ SEMI-DIAMETERS                                                                    ║
 * ║ Patent Table 1 publishes effective diameters at surfaces 1, 6, 10, and 17;      ║
 * ║ those are retained exactly as sd = 35.75, 28.00, 17.40, and 18.40 mm. Other     ║
 * ║ SDs are modeling values constrained by the Example 1 optical section, paraxial   ║
 * ║ marginal bundles, edge thickness, actual spherical rim slope, shared-band        ║
 * ║ cross-gap intrusion, and off-axis containment. They are not patent source data.  ║
 * ║                                                                                   ║
 * ║ GLASS                                                                             ║
 * ║ The patent publishes nd/vd coordinates only. Compatible coefficient-backed       ║
 * ║ catalog equivalents model dispersion without asserting production suppliers.     ║
 * ║ No patent nC/nF/ng/dPgF values or APD claim is authored.                          ║
 * ║                                                                                   ║
 * ║ No cover glass, filter, dummy plane, mechanical part, folded path, or asphere is ║
 * ║ included. Surface 22 is the single active aperture stop and is labeled STO.       ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-afs-zoom-nikkor-80-200mm-f28d-if-ed",
  maker: "Nikon",
  name: "NIKON AI AF-S ZOOM-NIKKOR 80-200mm f/2.8 D IF-ED",
  subtitle: "JP 2000-19398 A Example 1 — strong production correlation",
  specs: [
    "18 ELEMENTS / 14 GROUPS",
    "MARKETED 80-200mm f/2.8",
    "DESIGN EFL ≈ 81.55-196.00mm",
    "MODELED f/2.88",
    "5 ED ELEMENTS",
  ],

  focalLengthMarketing: [80, 200],
  focalLengthDesign: [81.549920824, 195.999955682],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2000-19398 A",
  patentAuthors: ["Susumu Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2000,
  elementCount: 18,
  groupCount: 14,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.805182,
      vd: 25.41,
      fl: -384.355197,
      glass: "805254 — optical-position class (vendor unproven)",
      cemented: "D01",
      role: "G1F front negative member of the cemented positive component.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 196.583024,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      cemented: "D01",
      role: "G1F positive ED-class member of the front cemented component.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 383.837282,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      role: "G1F positive ED-class singlet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.82,
      fl: -508.114145,
      glass: "847238 — optical-position class (vendor unproven)",
      role: "Front negative member of the translating G1R focus subgroup.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.41,
      fl: 109.328876,
      glass: "487704 — optical-position class (vendor unproven)",
      role: "Rear positive member of the translating G1R focus subgroup.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.796681,
      vd: 45.37,
      fl: -46.928561,
      glass: "J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)",
      role: "G2 negative variator member.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.41,
      fl: -48.906317,
      glass: "487704 — optical-position class (vendor unproven)",
      cemented: "D02",
      role: "G2 negative member of the cemented component.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.82,
      fl: 46.386461,
      glass: "847238 — optical-position class (vendor unproven)",
      cemented: "D02",
      role: "G2 positive member of the cemented component.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.796681,
      vd: 45.37,
      fl: -75.437214,
      glass: "J-LASF017 catalog equivalent (patent 797454; production supplier unspecified)",
      role: "Rear negative G2 variator member.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 131.264963,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      role: "Front positive ED-class member of G3.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 77.025752,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      cemented: "D03",
      role: "Positive ED-class member of the G3 cemented component.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 45,
      fl: -91.665206,
      glass: "H-LaF3B catalog equivalent (patent 744450; production supplier unspecified)",
      cemented: "D03",
      role: "Negative member of the G3 cemented component.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.787971,
      vd: 47.47,
      fl: 155.18881,
      glass: "788475 — optical-position class (vendor unproven)",
      role: "Front positive member of the fixed G4 master group.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 103.56798,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      cemented: "D04",
      role: "Positive ED-class member of the G4 cemented component.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.27,
      fl: -80.938391,
      glass: "620363 — optical-position class (vendor unproven)",
      cemented: "D04",
      role: "Negative member of the G4 cemented component.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.531721,
      vd: 48.97,
      fl: 95.921995,
      glass: "S-TIL6 catalog equivalent (patent 532490; production supplier unspecified)",
      role: "Positive G4 relay member.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.80384,
      vd: 33.89,
      fl: -59.17065,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Negative rear G4 member.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.772789,
      vd: 49.45,
      fl: 80.42655,
      glass: "773495 — optical-position class (vendor unproven)",
      role: "Final positive G4 member.",
    },
  ],

  /* ── Surface prescription: JP 2000-19398 A, Example 1, Table 1 ── */
  surfaces: [
    { label: "1", R: 97.0939, d: 3.8, nd: 1.805182, elemId: 1, sd: 35.75 },
    { label: "2", R: 72.6165, d: 10.4, nd: 1.49782, elemId: 2, sd: 35.75 },
    { label: "3", R: 268.0849, d: 0.1, nd: 1, elemId: 0, sd: 35.75 },
    { label: "4", R: 157.7721, d: 5.3, nd: 1.49782, elemId: 3, sd: 33.5 },
    { label: "5", R: 894.9563, d: 17.08501, nd: 1, elemId: 0, sd: 33 },
    { label: "6", R: 50.7516, d: 2.2, nd: 1.84666, elemId: 4, sd: 28 },
    { label: "7", R: 44.4939, d: 1.81, nd: 1, elemId: 0, sd: 26.1 },
    { label: "8", R: 53.1452, d: 9, nd: 1.48749, elemId: 5, sd: 26.1 },
    { label: "9", R: 17654.599, d: 1.99906, nd: 1, elemId: 0, sd: 26.2 },
    { label: "10", R: 365.8054, d: 1.5, nd: 1.796681, elemId: 6, sd: 17.4 },
    { label: "11", R: 33.8586, d: 7.52, nd: 1, elemId: 0, sd: 16.1 },
    { label: "12", R: -51.2952, d: 1.8, nd: 1.48749, elemId: 7, sd: 16.1 },
    { label: "13", R: 45.0578, d: 6, nd: 1.84666, elemId: 8, sd: 16.6 },
    { label: "14", R: -287.2535, d: 2.11, nd: 1, elemId: 0, sd: 16.7 },
    { label: "15", R: -60.5102, d: 1.8, nd: 1.796681, elemId: 9, sd: 16.7 },
    { label: "16", R: 8969.214, d: 32.0553, nd: 1, elemId: 0, sd: 17.2 },
    { label: "17", R: 165.9894, d: 4.5, nd: 1.49782, elemId: 10, sd: 18.4 },
    { label: "18", R: -106.8038, d: 0.2, nd: 1, elemId: 0, sd: 18.6 },
    { label: "19", R: 772.1751, d: 7.1, nd: 1.49782, elemId: 11, sd: 18.6 },
    { label: "20", R: -40.2253, d: 2, nd: 1.744, elemId: 12, sd: 18.8 },
    { label: "21", R: -100.1483, d: 3.43076, nd: 1, elemId: 0, sd: 19 },
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 18.801412058 },
    { label: "23", R: 78.6671, d: 3.5, nd: 1.787971, elemId: 13, sd: 19.2 },
    { label: "24", R: 216.2251, d: 0.2, nd: 1, elemId: 0, sd: 19 },
    { label: "25", R: 39.9627, d: 6, nd: 1.49782, elemId: 14, sd: 19 },
    { label: "26", R: 168.823, d: 4.4, nd: 1.62004, elemId: 15, sd: 18.1 },
    { label: "27", R: 38.2994, d: 30.5, nd: 1, elemId: 0, sd: 17.5 },
    { label: "28", R: 272.261, d: 5, nd: 1.531721, elemId: 16, sd: 14.5 },
    { label: "29", R: -62.3609, d: 14.8, nd: 1, elemId: 0, sd: 14.2 },
    { label: "30", R: -36.5028, d: 1.9, nd: 1.80384, elemId: 17, sd: 11.2 },
    { label: "31", R: -160.6086, d: 0.2, nd: 1, elemId: 0, sd: 11.2 },
    { label: "32", R: 137.3427, d: 4.6, nd: 1.772789, elemId: 18, sd: 11 },
    { label: "33", R: -111.8713, d: 57.01947, nd: 1, elemId: 0, sd: 10.8 },
  ],

  asph: {},

  /* ── Zoom + focus variable spacings ── */
  var: {
    "5": [
      [17.08501, 8.48886],
      [17.08501, 8.48886],
      [17.08501, 8.48886],
    ],
    "9": [
      [1.99906, 10.59521],
      [16.04981, 24.64596],
      [22.87155, 31.4677],
    ],
    "16": [
      [32.0553, 32.0553],
      [18.13596, 18.13596],
      [1.61457, 1.61457],
    ],
    "21": [
      [3.43076, 3.43076],
      [3.29935, 3.29935],
      [12.99901, 12.99901],
    ],
  },
  varLabels: [
    ["5", "D5 / G1F-G1R"],
    ["9", "D9 / G1R-G2"],
    ["16", "D16 / G2-G3"],
    ["21", "D21 / G3-STO"],
  ],

  zoomPositions: [81.55, 135, 194],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1F", fromSurface: "1", toSurface: "5" },
    { text: "G1R / FOCUS", fromSurface: "6", toSurface: "9" },
    { text: "G2 / VARIATOR", fromSurface: "10", toSurface: "16" },
    { text: "G3 / COMPENSATOR", fromSurface: "17", toSurface: "21" },
    { text: "G4 / MASTER", fromSurface: "23", toSurface: "33" },
  ],
  doublets: [
    { text: "D01", fromSurface: "1", toSurface: "3" },
    { text: "D02", fromSurface: "12", toSurface: "14" },
    { text: "D03", fromSurface: "19", toSurface: "21" },
    { text: "D04", fromSurface: "25", toSurface: "27" },
  ],

  closeFocusM: 1.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: rear G1 subgroup L4-L5 translates 8.59615 mm toward the object for the 1.5 m close state at the three published zoom control columns. The patent close-focus d9 row is inconsistent with its rigid-group mechanism by 0.00710 mm; d9 is corrected to 10.59521 / 24.64596 / 31.46770 mm so the d5+d9 sum remains constant at each control column. G2 and G3 remain at their published zoom positions during focus. Between source columns, the viewer's piecewise-linear spacing interpolation is visualization only and is not asserted as the actual Nikon cam law or an exact 1.5 m conjugate.",

  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
