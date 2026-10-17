import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI AF NIKKOR 85mm f/1.8 S                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,812,027 A, Example 1 (Masaaki Yanagisawa / Nikon).       ║
 * ║ Six-element, six-group all-spherical modified-Gauss rear-focus design.      ║
 * ║ Focus status: PUBLISHED. L4-L6 translate 12.6617 mm objectward as a rigid   ║
 * ║ rear group while the image plane remains fixed.                             ║
 * ║                                                                            ║
 * ║ STOP MODEL: The patent tabulates neither stop coordinate nor aperture. A   ║
 * ║ 300-dpi measurement of Figure 1 places the stop about 9.4 mm after surface ║
 * ║ 6 within the published d6 air space. Patent d6 is therefore split into     ║
 * ║ 9.4000 mm + 18.2330 mm at infinity. The stop radius is derived from the    ║
 * ║ design f-number, f/1.8.                                                    ║
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
  schema: 2,
  key: "nikon-ai-af-nikkor-85f18s",
  maker: "Nikon",
  name: "NIKON AI AF NIKKOR 85mm f/1.8 S",
  subtitle: "US 4,812,027 A — Example 1; strong production correlation to the 1988 Ai AF Nikkor 85mm f/1.8S",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 6 GROUPS", "85 mm", "F/1.8", "2ω = 28°", "REAR FOCUS"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 85, design: 84.869191 },
    fNumber: { marketing: 1.8, design: 1.8 },
  },

  source: {
    patentNumber: "US 4,812,027 A",
    patentYear: 1989,
    authors: ["Masaaki Yanagisawa"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.76684,
      vd: 46.76,
      indexReference: "d",
      focalLengthMm: 66.765692,
      glass: "767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Front positive meniscus of the fixed forward group GF.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.28,
      indexReference: "d",
      focalLengthMm: 86.903878,
      glass: "720503 — J-LAK10 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Second positive meniscus of the fixed forward group GF.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.07,
      indexReference: "d",
      focalLengthMm: -34.077315,
      glass: "785261 — SF56A (SCHOTT) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Strong negative meniscus completing the fixed forward group GF.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62588,
      vd: 35.64,
      indexReference: "d",
      focalLengthMm: -52.500981,
      glass: "626356 — F1 (SUMITA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Front negative meniscus of the translating rear group GR.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.76,
      indexReference: "d",
      focalLengthMm: 74.568347,
      glass: "694538 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive meniscus of the translating rear group GR; pairs with L4 across the negative air lens.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.76684,
      vd: 46.76,
      indexReference: "d",
      focalLengthMm: 67.721001,
      glass: "767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Rear biconvex positive element completing the translating rear group GR.",
      diagramLabel: "L6",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 42.082, d: 8.8, sd: 24.0, medium: 1 },
    { label: "2", R: 214.882, d: 0.2, sd: 23.0 },
    { label: "3", R: 32.583, d: 7.8, sd: 20.8, medium: 2 },
    { label: "4", R: 61.173, d: 1.6, sd: 18.4 },
    { label: "5", R: 112.4, d: 3.2, sd: 18.1, medium: 3 },
    { label: "6", R: 21.331, d: 9.4, sd: 14.8 },
    // STO position inferred from Figure 1; approximately 9.4 mm after surface 6 within patent d6.
    { label: "STO", R: "flat" },
    { label: "7", R: -24.8, d: 2.4, sd: 13.8, medium: 4 },
    { label: "8", R: -104.881, d: 2.0, sd: 14.8 },
    { label: "9", R: -69.065, d: 5.0, sd: 15.0, medium: 5 },
    { label: "10", R: -30.448, d: 0.2, sd: 15.5 },
    { label: "11", R: 87.287, d: 5.0, sd: 16.4, medium: 6 },
    { label: "12", R: -125.021, sd: 16.4 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.85,
    description:
      "Published rear focus: L4-L6 translate 12.6617 mm objectward as a rigid group. The inferred fixed stop splits patent d6, so STO-to-L4 changes 18.2330→5.5713 mm while BF changes 38.2080→50.8697 mm; the fixed image plane is preserved and the computed close conjugate is 0.849892 m from the image plane.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published rear-focus motion ── */
  gaps: {
    STO: { label: "D6 (rear portion)", values: [[18.233, 5.5713]] },
    "12": { label: "BF", values: [[38.208, 50.8697]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.8, fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "GF (+) / FIXED", fromSurface: "1", toSurface: "6" },
    { text: "GR (+) / FOCUS → OBJ", fromSurface: "7", toSurface: "12" },
  ],
  doublets: [],

  /* ── Layout ── */
  layout: { yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
