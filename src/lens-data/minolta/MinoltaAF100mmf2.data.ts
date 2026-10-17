import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA AF 100mm f/2                                       ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: JP S62-244010 A, Example 2 (Minolta Co., Ltd.).         ║
 * ║  Production correlation: Minolta AF 100mm F2 service manual 2598-100.  ║
 * ║  7 elements / 6 groups; all 13 refracting surfaces are spherical.       ║
 * ║  Focus status: PUBLISHED. L1-L6 move together; L7 remains fixed.        ║
 * ║  Patent d11 changes 0.880 -> 16.339 mm; no internal reconstruction.     ║
 * ║                                                                          ║
 * ║  DESIGN NORMALIZATION:                                                   ║
 * ║  No scale factor is applied (s = 1). The patent prints f = 100.0 mm,    ║
 * ║  while the rounded prescription traces to EFL = 98.502381 mm.           ║
 * ║  The final r13->IMG spacing is the derived paraxial BFD, 47.041149 mm.  ║
 * ║                                                                          ║
 * ║  STOP INFERENCE:                                                         ║
 * ║  The patent draws S inside the 24.000 mm d6 gap but gives no numeric     ║
 * ║  station or diameter. Figure 4 places S at about z = 34.0 mm, so d6 is  ║
 * ║  split as 11.25 mm + 12.75 mm. The stop radius is then derived from the ║
 * ║  design f-number so the entrance pupil gives the modeled nominal f/2.0. ║
 * ║                                                                          ║
 * ║  SEMI-DIAMETERS:                                                         ║
 * ║  No patent clear apertures are tabulated. SDs are inferred from the      ║
 * ║  f/2 marginal bundle, the 135-format field, Fig. 4 proportions, and     ║
 * ║  exact meridional ray checks. They pass edge-thickness, rim-slope,       ║
 * ║  cross-gap, and default off-axis containment checks at both focus ends. ║
 * ║                                                                          ║
 * ║  GLASS:                                                                  ║
 * ║  The patent publishes d-line nd/νd only. Vendor identity is not stated. ║
 * ║  Six-digit coordinate labels are retained where defensible; L5 remains  ║
 * ║  explicitly unmatched. nC, nF, ng, and dPgF are omitted because the     ║
 * ║  selected source does not publish them.                                 ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "minolta-af-100mm-f2",
  maker: "Minolta",
  name: "MINOLTA AF 100mm f/2",
  subtitle: "JP 1987-244010 A Example 2 — Minolta Co., Ltd.",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 6 GROUPS", "100mm f/2", "1.0m MFD", "FLOATING FOCUS", "9-BLADE DIAPHRAGM"],
    elementCount: 7,
    groupCount: 6,
    /* ── Marketing / design metadata ── */
    focalLengthMm: { marketing: 100, design: 98.502381 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "JP 1987-244010 A",
    patentYear: 1987,
    authors: ["Naoshi Okada", "Hisashi Tokumaru"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.93,
      focalLengthMm: 70.903641,
      glass: "713539 — optical-glass coordinate class (vendor unresolved)",
      apd: false,
      role: "Front positive collector in the moving L1-L6 assembly.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 51.83,
      focalLengthMm: 109.639349,
      glass: "S-LAL58 (OHARA catalog equivalent; patent 694518; production supplier unspecified)",
      apd: false,
      role: "Second positive element ahead of the negative pre-stop element.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.42,
      focalLengthMm: -38.742679,
      glass: "SF1 (SCHOTT catalog equivalent; patent 717294; production supplier unspecified)",
      apd: false,
      role: "Strong negative element immediately ahead of the aperture stop.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.65446,
      vd: 33.66,
      focalLengthMm: -44.798592,
      glass: "FD9 (HOYA catalog equivalent; patent 654337; production supplier unspecified)",
      apd: false,
      role: "Negative member of the cemented L4-L5 pair behind the stop.",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.781,
      vd: 44.55,
      focalLengthMm: 53.104056,
      glass: "Unmatched (781446 high-index mid-dispersion glass; no compatible public coefficient row)",
      apd: false,
      role: "Positive member of the weakly net-negative cemented L4-L5 pair.",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.05,
      focalLengthMm: 121.695372,
      glass: "S-LAH60 (OHARA catalog equivalent; patent 834371; production supplier unspecified)",
      apd: false,
      role: "Rear positive element of the moving L1-L6 assembly.",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.31,
      focalLengthMm: 463.237152,
      glass: "720503 — optical-glass coordinate class (vendor unresolved)",
      apd: false,
      role: "Weak positive fixed rear element used by the published floating-focus mechanism.",
      diagramLabel: "L7",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── All-spherical design ── */
  surfaces: [
    { label: "1", R: 43.815, d: 9.0, sd: 25.6, medium: 1 },
    { label: "2", R: 300.574, d: 0.28, sd: 25.6 },
    { label: "3", R: 36.76, d: 6.5, sd: 23.2, medium: 2 },
    { label: "4", R: 66.013, d: 3.47, sd: 23.2 },
    { label: "5", R: 181.625, d: 3.5, sd: 19.2, medium: 3 },
    // Patent d6 = 24.000 mm; STO station inferred from Fig. 4 and split without changing total d6.
    { label: "6", R: 23.91, d: 11.25, sd: 19.2 },
    { label: "STO", R: "flat", d: 12.75 },
    { label: "7", R: -41.083, d: 3.7, sd: 15.2, medium: 4 },
    // Cemented L4->L5 interface: downstream element L5 owns the junction.
    { label: "8", R: 106.036, d: 10.7, sd: 15.2, medium: 5 },
    { label: "9", R: -65.103, d: 0.2, sd: 15.2 },
    { label: "10", R: 177.062, d: 4.5, sd: 15.3, medium: 6 },
    { label: "11", R: -235.06, sd: 15.3 },
    { label: "12", R: 480.757, d: 4.0, sd: 15.3, medium: 7 },
    // Patent omits d13; this is the derived infinity paraxial BFD to the image plane.
    { label: "13", R: -1085.328, d: 47.041149, sd: 15.3 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "PUBLISHED — L1-L6 translate together relative to fixed L7 and the image plane; patent d11 increases from 0.880 mm at infinity to 16.339 mm at close focus (β ≈ -0.126).",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published floating-focus spacing ── */
  gaps: { "11": { label: "D11", values: [[0.88, 16.339]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.0, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Layout ── */
  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
