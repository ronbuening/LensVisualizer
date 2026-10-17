import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  Cover glass CG: patent surfaces 19-20 (2.0 mm, nd=1.5168, νd=64.2,        ║
 * ║  then 9.15 mm air to IMG) are modeled in `rearPlates` — traced, not        ║
 * ║  drawn. Surface 18 stores the printed physical d18 = 5.0 mm.               ║
 * ║                                                                            ║
 * ║  Semi-diameters are inferred, not patent-published. They were constrained ║
 * ║  by d-line marginal/chief-ray envelopes at all three published focus      ║
 * ║  states, the configured 0.6-field off-axis fan, the ±0.43 mm L214 OSS    ║
 * ║  shift, direct Figure 8 silhouette comparison, and the 49 mm filter.      ║
 * ║  The stop radius is derived from the design f-number, patent f/1.85, using ║
 * ║  the verified EFL.                                                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: Example 2 ¶0057–0059 matches all radii/gaps/glass values.
 * CG already preserves 5 + 2 mm glass (nd1.5168) + 9.15 mm physical path.
 * EFL 51.299977 matches 51.30, but paraxial focus is +0.045653 mm beyond
 * the published image plane. Finite-aperture best focus is closer to it;
 * designer intent is unproven, so preserve the printed gaps.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-e-50mm-f18-oss",
  maker: "Sony",
  name: "SONY E 50mm f/1.8 OSS",
  subtitle: "JP 2012-242690 A, Example 2 — SEL50F18 production correlation",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "50mm MARKETED / 51.30mm DESIGN",
      "f/1.8 MARKETED / f/1.85 DESIGN",
      "2ω = 30.86° (PATENT)",
      "OPTICAL STEADYSHOT / INNER FOCUS",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 50, design: 51.3 },
    fNumber: { marketing: 1.8, design: 1.85 },
  },

  source: {
    patentNumber: "JP 2012-242690 A",
    patentYear: 2012,
    authors: ["Toshihide Hayashi", "Naoki Miyagawa"],
    assignees: ["Sony Corporation", "Tamron Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L211",
      label: "L211",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: 46.539,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified; patent class 835427)",
      role: "Front positive collector in G21.",
      diagramLabel: "L211",
    },
    {
      id: 2,
      name: "L212",
      label: "L212",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      focalLengthMm: 42.0,
      glass: "TAFD35 (HOYA catalog equivalent; production supplier unspecified; patent class 911353)",
      role: "High-index positive element in the Sonnar-type first group.",
      diagramLabel: "L212",
    },
    {
      id: 3,
      name: "L213",
      label: "L213",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.32,
      indexReference: "d",
      focalLengthMm: -22.712,
      glass: "H-ZF4A (CDGM catalog equivalent; production supplier unspecified; patent class 728283)",
      role: "Negative correction element ahead of the OSS lens.",
      diagramLabel: "L213",
    },
    {
      id: 4,
      name: "L214",
      label: "L214 — OSS",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      indexReference: "d",
      focalLengthMm: -56.691,
      glass: "NBFD15 (HOYA catalog equivalent; production supplier unspecified; patent class 806333)",
      role: "Single laterally translating Optical SteadyShot element.",
      diagramLabel: "L214",
    },
    {
      id: 5,
      name: "L215",
      label: "L215",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -53.492,
      glass: "J-SF03 (HIKARI catalog equivalent; production supplier unspecified; patent class 847238)",
      role: "Negative half of the cemented L215-L216 corrective doublet.",
      diagramLabel: "L215",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L216",
      label: "L216",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: 18.03,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified; patent class 835427)",
      role: "Positive half of the cemented L215-L216 corrective doublet.",
      diagramLabel: "L216",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L221",
      label: "L221 — Focus",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.34,
      indexReference: "d",
      focalLengthMm: -28.713,
      glass: "J-SK16 (HIKARI catalog equivalent; production supplier unspecified; patent class 620603)",
      role: "Single-element negative inner-focus group G22.",
      diagramLabel: "L221",
    },
    {
      id: 8,
      name: "L231",
      label: "L231",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      indexReference: "d",
      focalLengthMm: 27.856,
      glass: "TAC8 (HOYA catalog equivalent; production supplier unspecified; patent class 729547)",
      role: "Positive rear-group relay element in G23.",
      diagramLabel: "L231",
    },
    {
      id: 9,
      name: "L232",
      label: "L232",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      indexReference: "d",
      focalLengthMm: -102.039,
      glass: "J-SF6 (HIKARI catalog equivalent; production supplier unspecified; patent class 805255)",
      role: "Rear negative correction element in G23.",
      diagramLabel: "L232",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 44.8799, d: 4.8446, sd: 10.7, medium: 1 },
    { label: "2", R: -275.016, d: 0.4, sd: 10.1 },
    { label: "3", R: 23.3824, d: 3.6557, sd: 10.0, medium: 2 },
    { label: "4", R: 55.6626, d: 1.0221, sd: 9.6 },
    { label: "5", R: 263.1267, d: 0.9, sd: 9.0, medium: 3 },
    { label: "6", R: 15.5392, d: 6.1331, sd: 9.0 },
    { label: "7", R: -140.202, d: 0.8, sd: 9.0, medium: 4 },
    { label: "8", R: 67.9694, d: 4.575, sd: 9.0 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "10", R: 30.4655, d: 0.7, sd: 9.6, medium: 5 },
    { label: "11", R: 18.0217, d: 4.7707, sd: 9.6, medium: 6 },
    { label: "12", R: -80.3201, sd: 9.6 },
    { label: "13", R: -142.554, d: 0.7, sd: 8.5, medium: 7 },
    { label: "14", R: 20.3958, sd: 8.5 },
    { label: "15", R: 46.8341, d: 6.215, sd: 11.0, medium: 8 },
    { label: "16", R: -33.8583, d: 7.8104, sd: 11.1 },
    { label: "17", R: -25.3869, d: 2.0, sd: 9.8, medium: 9 },
    { label: "18", R: -38.0301, d: 5.0, sd: 9.8 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.458,
    /* ── Published inner-focus movement ── */
    keyframes: [0, 0.2054744288286138, 1],
    description:
      "PUBLISHED — L221 translates imageward by 4.803 mm from infinity to the patent 0.142× row; " +
      "the physical model object-to-image conjugate is about 0.458 m. Sony's production 0.39 m / 0.16× endpoint is correlation " +
      "metadata only and is not used to reconstruct additional travel.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "12": { label: "D12", values: [[1.796, 2.63, 6.599]] },
    "14": { label: "D14", values: [[11.829, 10.994, 7.027]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.85, fStops: [1.85, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Cover glass CG (patent surfaces 19–20): traced, not drawn ── */
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.0,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 9.15,
      source: "JP 2012-242690 A, Example 2 surfaces 19–20",
    },
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

  /* ── Geometry / layout ── */
  layout: { yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
