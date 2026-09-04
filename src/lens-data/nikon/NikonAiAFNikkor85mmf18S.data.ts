import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI AF NIKKOR 85mm f/1.8 S                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,812,027 A, Example 1 (Masaaki Yanagisawa / Nikon).       ║
 * ║ Six-element, six-group all-spherical modified-Gauss rear-focus design.      ║
 * ║ Focus status: PUBLISHED. L4-L6 translate 12.6617 mm objectward as a rigid   ║
 * ║ rear group while the image plane remains fixed.                             ║
 * ║                                                                            ║
 * ║ STOP MODEL: The patent tabulates neither stop coordinate nor aperture.      ║
 * ║ A 300-dpi measurement of Figure 1 places the stop about 9.4 mm after       ║
 * ║ surface 6 within the published d6 air space. Patent d6 is therefore split  ║
 * ║ into 9.4000 mm + 18.2330 mm at infinity. The physical stop semi-diameter   ║
 * ║ 13.716100 mm is solved so the modeled entrance pupil gives f/1.800000.      ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: Not published. SDs are modeling inferences constrained by  ║
 * ║ the patent optical section, 135-format image height, exact meridional       ║
 * ║ on-axis marginal rays, and the default 0.6-field / 0.75-pupil off-axis     ║
 * ║ bundles at both published focus endpoints. Geometry was checked for edge    ║
 * ║ thickness, actual spherical rim slope, shared-gap intrusion, stop clearance,║
 * ║ and ray containment.                                                        ║
 * ║                                                                            ║
 * ║ GLASS: The patent publishes d-line nd and νd only. Source coordinates are   ║
 * ║ retained and compatible catalog curves are qualified spectral proxies.     ║
 * ║ Production identity and source nC, nF, ng, and dPgF remain unresolved.     ║
 * ║                                                                            ║
 * ║ SCALING: None. Patent millimeters are retained. No aspheres are present.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-ai-af-nikkor-85f18s",
  maker: "Nikon",
  name: "NIKON AI AF NIKKOR 85mm f/1.8 S",
  subtitle: "US 4,812,027 A — Example 1; strong production correlation to the 1988 Ai AF Nikkor 85mm f/1.8S",
  specs: ["6 ELEMENTS / 6 GROUPS", "85 mm", "F/1.8", "2ω = 28°", "REAR FOCUS"],

  focalLengthMarketing: 85,
  focalLengthDesign: 84.869191,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,812,027 A",
  patentAuthors: ["Masaaki Yanagisawa"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1989,
  elementCount: 6,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.76684,
      vd: 46.76,
      indexReference: "d",
      fl: 66.765692,
      glass: "767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Front positive meniscus of the fixed forward group GF.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.28,
      indexReference: "d",
      fl: 86.903878,
      glass: "720503 — J-LAK10 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Second positive meniscus of the fixed forward group GF.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.07,
      indexReference: "d",
      fl: -34.077315,
      glass: "785261 — SF56A (SCHOTT) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Strong negative meniscus completing the fixed forward group GF.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62588,
      vd: 35.64,
      indexReference: "d",
      fl: -52.500981,
      glass: "626356 — F1 (SUMITA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Front negative meniscus of the translating rear group GR.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.76,
      indexReference: "d",
      fl: 74.568347,
      glass: "694538 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive meniscus of the translating rear group GR; pairs with L4 across the negative air lens.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.76684,
      vd: 46.76,
      indexReference: "d",
      fl: 67.721001,
      glass: "767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Rear biconvex positive element completing the translating rear group GR.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 42.082, d: 8.8, nd: 1.76684, elemId: 1, sd: 24.0 },
    { label: "2", R: 214.882, d: 0.2, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "3", R: 32.583, d: 7.8, nd: 1.72, elemId: 2, sd: 20.8 },
    { label: "4", R: 61.173, d: 1.6, nd: 1.0, elemId: 0, sd: 18.4 },
    { label: "5", R: 112.4, d: 3.2, nd: 1.7847, elemId: 3, sd: 18.1 },
    { label: "6", R: 21.331, d: 9.4, nd: 1.0, elemId: 0, sd: 14.8 },
    // STO position inferred from Figure 1; approximately 9.4 mm after surface 6 within patent d6.
    { label: "STO", R: 1e15, d: 18.233, nd: 1.0, elemId: 0, sd: 13.7161 },
    { label: "7", R: -24.8, d: 2.4, nd: 1.62588, elemId: 4, sd: 13.8 },
    { label: "8", R: -104.881, d: 2.0, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "9", R: -69.065, d: 5.0, nd: 1.6935, elemId: 5, sd: 15.0 },
    { label: "10", R: -30.448, d: 0.2, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "11", R: 87.287, d: 5.0, nd: 1.76684, elemId: 6, sd: 16.4 },
    { label: "12", R: -125.021, d: 38.208, nd: 1.0, elemId: 0, sd: 16.4 },
  ],

  asph: {},

  /* ── Published rear-focus motion ── */
  var: {
    STO: [18.233, 5.5713],
    "12": [38.208, 50.8697],
  },
  varLabels: [
    ["STO", "D6 (rear portion)"],
    ["12", "BF"],
  ],

  groups: [
    { text: "GF (+) / FIXED", fromSurface: "1", toSurface: "6" },
    { text: "GR (+) / FOCUS → OBJ", fromSurface: "7", toSurface: "12" },
  ],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.85,
  focusDescription:
    "Published rear focus: L4-L6 translate 12.6617 mm objectward as a rigid group. The inferred fixed stop splits patent d6, so STO-to-L4 changes 18.2330→5.5713 mm while BF changes 38.2080→50.8697 mm; the fixed image plane is preserved and the computed close conjugate is 0.849892 m from the image plane.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout ── */
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
