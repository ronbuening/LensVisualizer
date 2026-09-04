import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — SONY E 50mm f/1.8 OSS                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2012-242690 A, Example 2 (Sony / Tamron).                 ║
 * ║  Production correlation: Sony SEL50F18, APS-C E-mount, 9 elements /       ║
 * ║  8 groups, Optical SteadyShot, internal focusing.                          ║
 * ║  Design: 51.30 mm, f/1.85, all-spherical; no dimensional scaling.          ║
 * ║                                                                            ║
 * ║  Focus status: PUBLISHED. L221 is the single negative inner-focus element. ║
 * ║  The base table is the patent infinity state (D12=1.796, D14=11.829 mm);  ║
 * ║  the close endpoint is the patent 0.142× row (D12=6.599, D14=7.027 mm).   ║
 * ║  The published 0.025× row lies on the same rigid translation to <0.001 mm.║
 * ║                                                                            ║
 * ║  Sensor-cover normalization: patent surfaces 19-20 (2.0 mm, nd=1.5168     ║
 * ║  cover + 9.15 mm air) are omitted. Surface 18 therefore uses              ║
 * ║  5.0 + 2.0/1.5168 + 9.15 = 15.468565 mm to the modeled IMG plane.        ║
 * ║                                                                            ║
 * ║  Semi-diameters are inferred, not patent-published. They were constrained ║
 * ║  by d-line marginal/chief-ray envelopes at all three published focus      ║
 * ║  states, the configured 0.6-field off-axis fan, the ±0.43 mm L214 OSS    ║
 * ║  shift, direct Figure 8 silhouette comparison, and the 49 mm filter.      ║
 * ║  The stop SD is inferred from the verified EFL and patent f/1.85.          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-e-50mm-f18-oss",
  maker: "Sony",
  name: "SONY E 50mm f/1.8 OSS",
  subtitle: "JP 2012-242690 A, Example 2 — SEL50F18 production correlation",
  specs: [
    "9 ELEMENTS / 8 GROUPS",
    "50mm MARKETED / 51.30mm DESIGN",
    "f/1.8 MARKETED / f/1.85 DESIGN",
    "2ω = 30.86° (PATENT)",
    "OPTICAL STEADYSHOT / INNER FOCUS",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.3,
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  lensMounts: ["sony-fe"],
  imageFormat: "aps-c",
  patentNumber: "JP 2012-242690 A",
  patentAuthors: ["Toshihide Hayashi", "Naoki Miyagawa"],
  patentAssignees: ["Sony Corporation", "Tamron Co., Ltd."],
  patentYear: 2012,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L211",
      diagramLabel: "L211",
      label: "L211",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      fl: 46.539,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified; patent class 835427)",
      role: "Front positive collector in G21.",
    },
    {
      id: 2,
      name: "L212",
      diagramLabel: "L212",
      label: "L212",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      fl: 42.0,
      glass: "TAFD35 (HOYA catalog equivalent; production supplier unspecified; patent class 911353)",
      role: "High-index positive element in the Sonnar-type first group.",
    },
    {
      id: 3,
      name: "L213",
      diagramLabel: "L213",
      label: "L213",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.32,
      indexReference: "d",
      fl: -22.712,
      glass: "H-ZF4A (CDGM catalog equivalent; production supplier unspecified; patent class 728283)",
      role: "Negative correction element ahead of the OSS lens.",
    },
    {
      id: 4,
      name: "L214",
      diagramLabel: "L214",
      label: "L214 — OSS",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      indexReference: "d",
      fl: -56.691,
      glass: "NBFD15 (HOYA catalog equivalent; production supplier unspecified; patent class 806333)",
      role: "Single laterally translating Optical SteadyShot element.",
    },
    {
      id: 5,
      name: "L215",
      diagramLabel: "L215",
      label: "L215",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      fl: -53.492,
      glass: "J-SF03 (HIKARI catalog equivalent; production supplier unspecified; patent class 847238)",
      role: "Negative half of the cemented L215-L216 corrective doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L216",
      diagramLabel: "L216",
      label: "L216",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      fl: 18.03,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified; patent class 835427)",
      role: "Positive half of the cemented L215-L216 corrective doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L221",
      diagramLabel: "L221",
      label: "L221 — Focus",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.34,
      indexReference: "d",
      fl: -28.713,
      glass: "J-SK16 (HIKARI catalog equivalent; production supplier unspecified; patent class 620603)",
      role: "Single-element negative inner-focus group G22.",
    },
    {
      id: 8,
      name: "L231",
      diagramLabel: "L231",
      label: "L231",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      indexReference: "d",
      fl: 27.856,
      glass: "TAC8 (HOYA catalog equivalent; production supplier unspecified; patent class 729547)",
      role: "Positive rear-group relay element in G23.",
    },
    {
      id: 9,
      name: "L232",
      diagramLabel: "L232",
      label: "L232",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      indexReference: "d",
      fl: -102.039,
      glass: "J-SF6 (HIKARI catalog equivalent; production supplier unspecified; patent class 805255)",
      role: "Rear negative correction element in G23.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 44.8799, d: 4.8446, nd: 1.83481, elemId: 1, sd: 10.7 },
    { label: "2", R: -275.016, d: 0.4, nd: 1.0, elemId: 0, sd: 10.1 },
    { label: "3", R: 23.3824, d: 3.6557, nd: 1.91082, elemId: 2, sd: 10.0 },
    { label: "4", R: 55.6626, d: 1.0221, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "5", R: 263.1267, d: 0.9, nd: 1.72825, elemId: 3, sd: 9.0 },
    { label: "6", R: 15.5392, d: 6.1331, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "7", R: -140.202, d: 0.8, nd: 1.8061, elemId: 4, sd: 9.0 },
    { label: "8", R: 67.9694, d: 4.575, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 9.631 },
    { label: "10", R: 30.4655, d: 0.7, nd: 1.84666, elemId: 5, sd: 9.6 },
    { label: "11", R: 18.0217, d: 4.7707, nd: 1.83481, elemId: 6, sd: 9.6 },
    { label: "12", R: -80.3201, d: 1.796, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "13", R: -142.554, d: 0.7, nd: 1.62041, elemId: 7, sd: 8.5 },
    { label: "14", R: 20.3958, d: 11.829, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "15", R: 46.8341, d: 6.215, nd: 1.72916, elemId: 8, sd: 11.0 },
    { label: "16", R: -33.8583, d: 7.8104, nd: 1.0, elemId: 0, sd: 11.1 },
    { label: "17", R: -25.3869, d: 2.0, nd: 1.80518, elemId: 9, sd: 9.8 },
    { label: "18", R: -38.0301, d: 15.468565, nd: 1.0, elemId: 0, sd: 9.8 },
  ],

  asph: {},

  /* ── Published inner-focus movement ── */
  focusPositions: [0, 0.2054744288286138, 1],
  var: {
    "12": [1.796, 2.63, 6.599],
    "14": [11.829, 10.994, 7.027],
  },
  varLabels: [
    ["12", "D12"],
    ["14", "D14"],
  ],

  groups: [
    { text: "G21", fromSurface: "1", toSurface: "12" },
    { text: "G22 FOCUS", fromSurface: "13", toSurface: "14" },
    { text: "G23", fromSurface: "15", toSurface: "18" },
  ],
  doublets: [
    { text: "OSS", fromSurface: "7", toSurface: "8" },
    { text: "D1", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.457,
  focusDescription:
    "PUBLISHED — L221 translates imageward by 4.803 mm from infinity to the patent 0.142× row; " +
    "the normalized model conjugate is about 0.457 m. Sony's production 0.39 m / 0.16× endpoint is correlation " +
    "metadata only and is not used to reconstruct additional travel.",

  /* ── Aperture configuration ── */
  nominalFno: 1.85,
  fstopSeries: [1.85, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  /* ── Geometry / layout ── */
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
