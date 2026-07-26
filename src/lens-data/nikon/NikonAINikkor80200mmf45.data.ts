import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI ZOOM-NIKKOR 80-200mm f/4.5                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,223,981, Embodiment 1 (Nippon Kogaku K.K.).     ║
 * ║  Five functional groups in an afocal-variable-power plus relay      ║
 * ║  architecture; 12 elements / 9 air-separated components.           ║
 * ║  All 21 refracting surfaces are spherical.                          ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D10, D13.                                 ║
 * ║  Focus variable gap: D5 only.                                      ║
 * ║  Reversing group: the positive compensator reverses between the     ║
 * ║  middle and 200 mm states; piecewise interpolation preserves it.    ║
 * ║                                                                    ║
 * ║  FOCUS STATUS — CONSTRAINED_RECONSTRUCTION:                         ║
 * ║  The patent states that Group 1 focuses by axial translation but    ║
 * ║  publishes no finite-distance spacings. D5 close-focus values were  ║
 * ║  solved paraxially at the production lens's 1.8 m distance-scale    ║
 * ║  limit, measured from the focal plane. In relative coordinates,     ║
 * ║  increasing D5 is equivalent to moving only Group 1 objectward      ║
 * ║  while the relay and film plane remain fixed. This is not a         ║
 * ║  patent-published or factory cam law.                               ║
 * ║                                                                    ║
 * ║  SOURCE CORRECTION:                                                 ║
 * ║  The descriptive Embodiment 1 table's middle D5 value, 28.213 mm,  ║
 * ║  is retained. Claim 9 prints 28.313 mm, which breaks the fixed      ║
 * ║  relay-position sum by 0.100 mm and gives poorer cardinal matches.  ║
 * ║                                                                    ║
 * ║  NOTE ON STOP:                                                      ║
 * ║  Fig. 1 shows the stop in D13, but the table omits its split and     ║
 * ║  clear radius. The neutral STO is placed immediately before r14     ║
 * ║  (coincident with the r14 vertex), with a common 12.482215 mm       ║
 * ║  semi-diameter independently solved from the three f/4.5 states.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent omits clear apertures. SDs were inferred from the       ║
 * ║  paraxial marginal/chief-ray envelopes at the published fields,    ║
 * ║  the production 52 mm filter and 73 mm-class barrel envelope,       ║
 * ║  positive edge thickness, actual spherical rim slope, shared-band  ║
 * ║  cross-gap clearance at all zoom/focus states, and render trim.     ║
 * ║  The model intentionally retains plausible wide-open off-axis       ║
 * ║  pupil clipping rather than enlarging glass to force zero falloff.  ║
 * ║  A normalized FIG. 1 check enlarged the relay-front L6/L7 pair      ║
 * ║  from roughly 13.0-13.5 mm to 15.0 mm; other relative heights       ║
 * ║  agreed closely enough with the drawing to retain their SDs.        ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS DATA:                                                ║
 * ║  The patent publishes d-line index and Abbe number only. Glass      ║
 * ║  strings generally use six-digit classes rather than asserted      ║
 * ║  production vendors. Historical HIKARI E-LAF11 and J-LAK8 rows     ║
 * ║  reproduce L7/L8's d-line indices and published one-decimal Abbe   ║
 * ║  classes, so those coefficient-backed equivalents are identified.  ║
 * ║  nC, nF, ng, and dPgF remain unavailable and are not fabricated.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-ai-zoom-nikkor-80-200mm-f45",
  maker: "Nikon",
  name: "NIKON AI ZOOM-NIKKOR 80-200mm f/4.5",
  subtitle: "US 4,223,981 — Embodiment 1 (correlated 12-element / 9-group AI formula)",
  specs: [
    "12 ELEMENTS / 9 GROUPS",
    "COMPUTED EFL 80.102-199.912 mm",
    "F/4.5",
    "ALL-SPHERICAL",
    "FRONT-GROUP FOCUS",
  ],
  focalLengthMarketing: [80, 200],
  focalLengthDesign: [80.102454, 199.911568],
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,223,981",
  patentAuthors: ["Norio Mizutani", "Yoshinari Hamanishi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1980,
  elementCount: 12,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.8,
      fl: 179.346677,
      glass: "564608 — dense barium crown class (catalog vendor unspecified)",
      role: "Front positive singlet in the fixed-power focusing group.",
    },
    {
      id: 2,
      name: "L2a",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      fl: 121.366955,
      glass: "603607 — dense crown class (catalog vendor unspecified)",
      role: "Positive crown member of the rear cemented component in Group 1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L2b",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: -176.267613,
      glass: "805255 — dense flint class (catalog vendor unspecified)",
      role: "High-dispersion negative member that achromatizes the Group 1 cemented component.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L3a",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      fl: 59.636942,
      glass: "755275 — dense flint class (catalog vendor unspecified)",
      role: "Positive member of the net-negative variator doublet.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L3b",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      fl: -43.042315,
      glass: "517642 — borosilicate crown class (catalog vendor unspecified)",
      role: "Strong negative crown member of the variator doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L4",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.2,
      fl: -50.902132,
      glass: "589612 — dense barium crown class (catalog vendor unspecified)",
      role: "Air-spaced negative singlet completing the variator group.",
    },
    {
      id: 7,
      name: "L5a",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 45.096825,
      glass: "620603 — dense crown class (catalog vendor unspecified)",
      role: "Strong positive member of the reversing compensator doublet.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L5b",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.5,
      fl: -86.776824,
      glass: "755275 — dense flint class (catalog vendor unspecified)",
      role: "Negative flint member that moderates and achromatizes the compensator.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L6",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: 77.120025,
      glass: "517642 — borosilicate crown class (catalog vendor unspecified)",
      role: "Positive singlet at the front of the fixed relay system.",
    },
    {
      id: 10,
      name: "L7",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.75692,
      vd: 31.7,
      fl: -271.716856,
      glass: "E-LAF11 (HIKARI; historical 757316 match to patent 757317 class)",
      role: "Weak negative relay-front singlet with a coefficient-backed historical HIKARI class equivalent.",
    },
    {
      id: 11,
      name: "L8",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: -82.941232,
      glass: "J-LAK8 (HIKARI; 713540 match to patent 713539 class)",
      role: "Image-convex negative meniscus providing the rear relay's principal negative power.",
    },
    {
      id: 12,
      name: "L9",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59,
      fl: 89.228087,
      glass: "518590 — crown class (catalog vendor unspecified)",
      role: "Final positive singlet completing the weakly powered rear relay pair.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 131.893, d: 4.5, nd: 1.56384, elemId: 1, sd: 28.5 },
    { label: "2", R: -428.12, d: 0.1, nd: 1, elemId: 0, sd: 28 },
    { label: "3", R: 166.732, d: 7.3, nd: 1.60311, elemId: 2, sd: 27.5 },
    { label: "4", R: -128.331, d: 2, nd: 1.80518, elemId: 3, sd: 26.5 },
    { label: "5", R: -1348.93, d: 3.229, nd: 1, elemId: 0, sd: 25.5 },
    { label: "6", R: -280, d: 3.4, nd: 1.7552, elemId: 4, sd: 16.5 },
    { label: "7", R: -39, d: 0.9, nd: 1.5168, elemId: 5, sd: 16.2 },
    { label: "8", R: 52.182, d: 4.1, nd: 1, elemId: 0, sd: 12.6 },
    { label: "9", R: -39.47, d: 1.1, nd: 1.58913, elemId: 6, sd: 12.6 },
    { label: "10", R: 126.118, d: 32.195, nd: 1, elemId: 0, sd: 17 },
    { label: "11", R: 171.444, d: 4.15, nd: 1.62041, elemId: 7, sd: 14.4 },
    { label: "12", R: -33.125, d: 0.9, nd: 1.7552, elemId: 8, sd: 14.2 },
    { label: "13", R: -67.765, d: 19.006, nd: 1, elemId: 0, sd: 14.8 },
    // STO position inferred from Fig. 1; its vertex is coincident with r14.
    { label: "STO", R: 1e15, d: 0, nd: 1, elemId: 0, sd: 12.48221546 },
    { label: "14", R: 38.04, d: 5.3, nd: 1.5168, elemId: 9, sd: 15 },
    { label: "15", R: 795.392, d: 1, nd: 1, elemId: 0, sd: 15 },
    { label: "16", R: -151.741, d: 2, nd: 1.75692, elemId: 10, sd: 15 },
    { label: "17", R: -582, d: 55.8, nd: 1, elemId: 0, sd: 15 },
    { label: "18", R: -23.129, d: 2.4, nd: 1.713, elemId: 11, sd: 17.4 },
    { label: "19", R: -39.626, d: 0.2, nd: 1, elemId: 0, sd: 18 },
    { label: "20", R: 68.585, d: 5.3, nd: 1.51823, elemId: 12, sd: 18.2 },
    { label: "21", R: -138.19, d: 42.495, nd: 1, elemId: 0, sd: 18.8 },
  ],

  asph: {},

  /* ── Zoom and constrained focus reconstruction ── */
  zoomPositions: [80, 126.5, 200],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [3.229, 13.097762345],
      [28.213, 38.130810487],
      [44.014, 53.956507521],
    ],
    "10": [
      [32.195, 32.195],
      [20.247, 20.247],
      [1.355, 1.355],
    ],
    "13": [
      [19.006, 19.006],
      [5.97, 5.97],
      [9.06, 9.06],
    ],
  },
  varLabels: [
    ["5", "D5 / FOCUS"],
    ["10", "D10"],
    ["13", "D13"],
  ],
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: front Group 1 focusing. D5 close-focus values were code-solved at 1.8 m " +
    "from the focal plane while the relay and image plane remain fixed; the patent publishes no finite-focus " +
    "cam table.",

  /* ── Diagram annotations ── */
  groups: [
    { text: "G1 (+) / FOCUS", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-) / VARIATOR", fromSurface: "6", toSurface: "10" },
    { text: "G3 (+) / COMPENSATOR", fromSurface: "11", toSurface: "13" },
    { text: "G4 RELAY FRONT", fromSurface: "14", toSurface: "17" },
    { text: "G5 RELAY REAR", fromSurface: "18", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
  ],

  /* ── Product and display controls ── */
  closeFocusM: 1.8,
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  scFill: 0.62,
  yScFill: 0.64,
} satisfies LensDataInput;

export default LENS_DATA;
