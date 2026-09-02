import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON ZOOM-NIKKOR ED 200-400mm f/4                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,452,513 A, Example 3 / Third Embodiment.                 ║
 * ║ Patent prescription retained at scale 1: 15 elements / 10 components,     ║
 * ║ organized as four functional groups G1(+), G2(-), G3(+), G4(+).           ║
 * ║                                                                            ║
 * ║ ZOOM MODEL:                                                                ║
 * ║   Published infinity endpoint gaps are D5, D11, and D14 at 200/400 mm.    ║
 * ║   Only the endpoints are published. LensVisualizer therefore interpolates ║
 * ║   linearly between them; this is a visualization approximation, not a      ║
 * ║   recovered continuous cam trajectory.                                    ║
 * ║                                                                            ║
 * ║ FOCUS STATUS — CONSTRAINED_RECONSTRUCTION:                                 ║
 * ║   The patent publishes G1-only first focusing and nearer worked states,    ║
 * ║   while Nikon's 1984 brochure gives a 4 m production minimum distance.    ║
 * ║   The 4 m endpoint is code-solved with G1-only motion. In this sequential  ║
 * ║   coordinate model the equivalent relative motion appears only in D5:     ║
 * ║     200 mm: 50.635 -> 73.1738734442 mm                                    ║
 * ║     400 mm: 111.267 -> 133.8047587663 mm                                  ║
 * ║                                                                            ║
 * ║ STOP INFERENCE:                                                            ║
 * ║   Example 3 does not tabulate the stop. A single STO is inserted in the   ║
 * ║   66 mm air gap after r20. Its station, 9.0498951219 mm after r20, is     ║
 * ║   solved from the patent's h∞ = -25.966 mm and y = 21.6 mm wide-end       ║
 * ║   chief-ray condition. STO sd = 19.3048822919 mm is then calibrated to   ║
 * ║   modeled f/4 at both published zoom endpoints.                            ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS:                                                            ║
 * ║   Not published. SDs are inferred from f/4 marginal/chief-ray envelopes, ║
 * ║   a 600-dpi review of patent Fig. 15, and current edge-thickness, rim-     ║
 * ║   slope, and cross-gap constraints. G2-G4 were enlarged toward the figure ║
 * ║   where geometry allowed; the front doublet and G2/L22 gap remain limited.║
 * ║                                                                            ║
 * ║ GLASS / SPECTRAL DATA:                                                     ║
 * ║   Table 5 supplies n and ν only. indexReference="d" is a catalog-supported ║
 * ║   inference. Glass strings preserve the patent coordinates and may name  ║
 * ║   compatible curves, but production suppliers remain unspecified.        ║
 * ║   nC/nF/ng/dPgF are omitted because the embodiment does not publish them. ║
 * ║                                                                            ║
 * ║ No aspheres, filters, cover glass, dummy planes, or folded path.          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-ais-zoom-nikkor-ed-200-400mm-f4",
  maker: "Nikon",
  name: "NIKON ZOOM-NIKKOR ED 200-400mm f/4",
  subtitle: "US 4,452,513 A — Example 3 / Third Embodiment; 4 m focus constrained reconstruction",
  specs: ["15 ELEMENTS / 10 GROUPS", "200-400mm", "F/4", "4 m MFD", "135 FORMAT"],

  focalLengthMarketing: [200, 400],
  focalLengthDesign: [200.0013176295, 400.0021083881],
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,452,513 A",
  patentAuthors: ["Yoshinari Hamanishi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1984,
  elementCount: 15,
  groupCount: 10,

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "L11a",
      label: "L11a",
      diagramLabel: "L11a",
      type: "Negative Meniscus",
      nd: 1.75692,
      vd: 31.7,
      indexReference: "d",
      fl: -457.2625809,
      glass: "757317 — E-LAF11 catalog equivalent (production supplier unspecified)",
      cemented: "L11",
      role: "G1 focusing-group front element.",
    },
    {
      id: 2,
      name: "L11b",
      label: "L11b",
      diagramLabel: "L11b",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.3,
      indexReference: "d",
      fl: 214.8621834,
      glass: "498823 — J-FKH1 catalog equivalent (production supplier unspecified)",
      cemented: "L11",
      role: "G1 low-dispersion positive element cemented to L11a.",
    },
    {
      id: 3,
      name: "L12",
      label: "L12",
      diagramLabel: "L12",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.3,
      indexReference: "d",
      fl: 850.3297921,
      glass: "498823 — J-FKH1 catalog equivalent (production supplier unspecified)",
      role: "G1 rear positive singlet.",
    },
    {
      id: 4,
      name: "L2a",
      label: "L2a",
      diagramLabel: "L2a",
      type: "Biconcave Negative",
      nd: 1.78797,
      vd: 47.5,
      indexReference: "d",
      fl: -130.3630239,
      glass: "788475 — lanthanum-flint class (vendor unresolved)",
      cemented: "L21",
      role: "G2 variator; front member of the cemented negative triplet.",
    },
    {
      id: 5,
      name: "L2b",
      label: "L2b",
      diagramLabel: "L2b",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.6,
      indexReference: "d",
      fl: 83.90080807,
      glass: "755276 — SF4 catalog equivalent (production supplier unspecified)",
      cemented: "L21",
      role: "G2 variator; positive middle member of the cemented triplet.",
    },
    {
      id: 6,
      name: "L2c",
      label: "L2c",
      diagramLabel: "L2c",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      fl: -101.4640425,
      glass: "517641 — BK7 class (vendor unresolved)",
      cemented: "L21",
      role: "G2 variator; rear member of the cemented negative triplet.",
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      diagramLabel: "L22",
      type: "Negative Meniscus",
      nd: 1.80218,
      vd: 44.7,
      indexReference: "d",
      fl: -150.2418393,
      glass: "802447 — M-TAF31 catalog equivalent (production supplier unspecified)",
      role: "G2 negative singlet completing the divergent variator group.",
    },
    {
      id: 8,
      name: "L3a",
      label: "L3a",
      diagramLabel: "L3a",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.3,
      indexReference: "d",
      fl: 101.4313885,
      glass: "498823 — J-FKH1 catalog equivalent (production supplier unspecified)",
      cemented: "L3",
      role: "G3 compensator positive member.",
    },
    {
      id: 9,
      name: "L3b",
      label: "L3b",
      diagramLabel: "L3b",
      type: "Negative Meniscus",
      nd: 1.75692,
      vd: 31.7,
      indexReference: "d",
      fl: -204.8458848,
      glass: "757317 — E-LAF11 catalog equivalent (production supplier unspecified)",
      cemented: "L3",
      role: "G3 compensator negative member.",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      diagramLabel: "L41",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.3,
      indexReference: "d",
      fl: 93.452806,
      glass: "498823 — J-FKH1 catalog equivalent (production supplier unspecified)",
      role: "G4 relay front positive singlet.",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      diagramLabel: "L42",
      type: "Negative Meniscus",
      nd: 1.78797,
      vd: 47.5,
      indexReference: "d",
      fl: -136.8506924,
      glass: "788475 — lanthanum-flint class (vendor unresolved)",
      role: "G4 relay negative singlet.",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      diagramLabel: "L43",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      fl: 435.8177766,
      glass: "517641 — BK7 class (vendor unresolved)",
      role: "G4 relay positive meniscus ahead of the inferred stop gap.",
    },
    {
      id: 13,
      name: "L44",
      label: "L44",
      diagramLabel: "L44",
      type: "Negative Meniscus",
      nd: 1.77279,
      vd: 49.4,
      indexReference: "d",
      fl: -52.44321176,
      glass: "773494 — M-TAF1 catalog equivalent (production supplier unspecified)",
      role: "G4 rear negative singlet.",
    },
    {
      id: 14,
      name: "L45a",
      label: "L45a",
      diagramLabel: "L45a",
      type: "Negative Meniscus",
      nd: 1.7335,
      vd: 51.1,
      indexReference: "d",
      fl: -173.306886,
      glass: "734511 — TAC4 catalog equivalent (production supplier unspecified)",
      cemented: "L45",
      role: "G4 rear cemented component front member.",
    },
    {
      id: 15,
      name: "L45b",
      label: "L45b",
      diagramLabel: "L45b",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.8,
      indexReference: "d",
      fl: 54.90036337,
      glass: "581408 — PBL25 catalog equivalent (production supplier unspecified)",
      cemented: "L45",
      role: "G4 rear cemented component positive member.",
    },
  ],

  /* ── Sequential optical surfaces ── */
  surfaces: [
    { label: "1", R: 239.867, d: 3.3, nd: 1.75692, elemId: 1, sd: 53.0 },
    { label: "2", R: 140.839, d: 14.0, nd: 1.49782, elemId: 2, sd: 52.5 },
    { label: "3", R: -430.0, d: 0.2, nd: 1.0, elemId: 0, sd: 52.5 },
    { label: "4", R: 155.0, d: 7.0, nd: 1.49782, elemId: 3, sd: 50.0 },
    { label: "5", R: 240.871, d: 50.635, nd: 1.0, elemId: 0, sd: 50.0 },
    { label: "6", R: -366.2, d: 2.5, nd: 1.78797, elemId: 4, sd: 30.0 },
    { label: "7", R: 143.2, d: 8.0, nd: 1.7552, elemId: 5, sd: 30.0 },
    { label: "8", R: -110.916, d: 2.2, nd: 1.5168, elemId: 6, sd: 30.0 },
    { label: "9", R: 100.127, d: 7.5, nd: 1.0, elemId: 0, sd: 30.0 },
    { label: "10", R: -117.97, d: 2.5, nd: 1.80218, elemId: 7, sd: 26.7 },
    { label: "11", R: -5626.023, d: 56.297, nd: 1.0, elemId: 0, sd: 26.7 },
    { label: "12", R: 184.117, d: 10.0, nd: 1.49782, elemId: 8, sd: 30.8 },
    { label: "13", R: -68.32, d: 1.9, nd: 1.75692, elemId: 9, sd: 30.8 },
    { label: "14", R: -123.6, d: 15.464, nd: 1.0, elemId: 0, sd: 30.8 },
    { label: "15", R: 70.18, d: 11.0, nd: 1.49782, elemId: 10, sd: 31.0 },
    { label: "16", R: -130.821, d: 10.0, nd: 1.0, elemId: 0, sd: 31.0 },
    { label: "17", R: -96.159, d: 3.0, nd: 1.78797, elemId: 11, sd: 32.0 },
    { label: "18", R: -900.35, d: 0.6, nd: 1.0, elemId: 0, sd: 32.0 },
    { label: "19", R: 37.0, d: 6.5, nd: 1.5168, elemId: 12, sd: 32.0 },
    { label: "20", R: 41.623, d: 9.0498951219, nd: 1.0, elemId: 0, sd: 32.0 },
    // STO station inferred from Example 3 h∞=-25.966 mm and y=21.6 mm, then calibrated to modeled f/4.
    { label: "STO", R: 1e15, d: 56.9501048781, nd: 1.0, elemId: 0, sd: 19.3048822919 },
    { label: "21", R: -26.71, d: 2.5, nd: 1.77279, elemId: 13, sd: 19.5 },
    { label: "22", R: -81.538, d: 0.1, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "23", R: 168.0, d: 2.0, nd: 1.7335, elemId: 14, sd: 19.5 },
    { label: "24", R: 72.0, d: 6.5, nd: 1.58144, elemId: 15, sd: 19.5 },
    { label: "25", R: -55.442, d: 69.828, nd: 1.0, elemId: 0, sd: 19.5 },
  ],

  asph: {},

  /* ── Zoom and focus variable spacings ── */
  var: {
    "5": [
      [50.635, 73.1738734442],
      [111.267, 133.8047587663],
    ],
    "11": [
      [56.297, 56.297],
      [3.155, 3.155],
    ],
    "14": [
      [15.464, 15.464],
      [7.975, 7.975],
    ],
  },
  varLabels: [
    ["5", "D5 — G1/G2"],
    ["11", "D11 — G2/G3"],
    ["14", "D14 — G3/G4"],
  ],

  zoomPositions: [200, 400],
  zoomStep: 0.004,
  zoomLabels: ["200 mm", "400 mm"],

  /* ── Functional-group and cemented-component annotations ── */
  groups: [
    { text: "G1 (+) / OBJECTWARD FOCUS", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) / VARIATOR", fromSurface: "6", toSurface: "11" },
    { text: "G3 (+) / COMPENSATOR", fromSurface: "12", toSurface: "14" },
    { text: "G4 (+) / RELAY", fromSurface: "15", toSurface: "25" },
  ],
  doublets: [
    { text: "L11", fromSurface: "1", toSurface: "3" },
    { text: "L21", fromSurface: "6", toSurface: "9" },
    { text: "L3", fromSurface: "12", toSurface: "14" },
    { text: "L45", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 4.0,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: production 4 m MFD modeled by G1-only first focusing; " +
    "the code-solved relative motion is represented by D5 at the 200 mm and 400 mm endpoints. " +
    "The patent's nearer 2.5 m/1.4 m worked states are verification references, not production focus states.",

  /* ── Aperture configuration ── */
  nominalFno: 4.0,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  /* ── Layout ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
