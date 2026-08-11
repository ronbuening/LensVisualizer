import type { LensDataInput } from "../../types/optics.js";

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
 * ║  split as 11.25 mm + 12.75 mm. STO sd = 14.536343 mm is then solved     ║
 * ║  paraxially so the entrance pupil gives the modeled nominal f/2.0.      ║
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
  key: "minolta-af-100mm-f2",
  maker: "Minolta",
  name: "MINOLTA AF 100mm f/2",
  subtitle: "JP1987-244010 A Example 2 — Minolta Co., Ltd.",
  specs: ["7 ELEMENTS / 6 GROUPS", "100mm f/2", "1.0m MFD", "FLOATING FOCUS", "9-BLADE DIAPHRAGM"],

  /* ── Marketing / design metadata ── */
  focalLengthMarketing: 100,
  focalLengthDesign: 98.502381,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1987-244010 A",
  patentAuthors: ["Naoshi Okada", "Hisashi Tokumaru"],
  patentAssignees: ["Minolta Co., Ltd."],
  patentYear: 1987,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.93,
      fl: 70.903641,
      glass: "713539 — optical-glass coordinate class (vendor unresolved)",
      apd: false,
      role: "Front positive collector in the moving L1-L6 assembly.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 51.83,
      fl: 109.639349,
      glass: "694518 — optical-glass coordinate class (vendor unresolved)",
      apd: false,
      role: "Second positive element ahead of the negative pre-stop element.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.42,
      fl: -38.742679,
      glass: "SF1 (SCHOTT catalog equivalent; patent 717294; production supplier unspecified)",
      apd: false,
      role: "Strong negative element immediately ahead of the aperture stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.65446,
      vd: 33.66,
      fl: -44.798592,
      glass: "FD9 (HOYA catalog equivalent; patent 654337; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Negative member of the cemented L4-L5 pair behind the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.781,
      vd: 44.55,
      fl: 53.104056,
      glass: "781446 — high-index mid-dispersion glass (catalog unresolved)",
      apd: false,
      cemented: "D1",
      role: "Positive member of the weakly net-negative cemented L4-L5 pair.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.05,
      fl: 121.695372,
      glass: "S-LAH60 (OHARA catalog equivalent; patent 834371; production supplier unspecified)",
      apd: false,
      role: "Rear positive element of the moving L1-L6 assembly.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.31,
      fl: 463.237152,
      glass: "720503 — optical-glass coordinate class (vendor unresolved)",
      apd: false,
      role: "Weak positive fixed rear element used by the published floating-focus mechanism.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 43.815, d: 9.0, nd: 1.713, elemId: 1, sd: 25.6 },
    { label: "2", R: 300.574, d: 0.28, nd: 1.0, elemId: 0, sd: 25.6 },
    { label: "3", R: 36.76, d: 6.5, nd: 1.6935, elemId: 2, sd: 23.2 },
    { label: "4", R: 66.013, d: 3.47, nd: 1.0, elemId: 0, sd: 23.2 },
    { label: "5", R: 181.625, d: 3.5, nd: 1.71736, elemId: 3, sd: 19.2 },
    // Patent d6 = 24.000 mm; STO station inferred from Fig. 4 and split without changing total d6.
    { label: "6", R: 23.91, d: 11.25, nd: 1.0, elemId: 0, sd: 19.2 },
    { label: "STO", R: 1e15, d: 12.75, nd: 1.0, elemId: 0, sd: 14.536343 },
    { label: "7", R: -41.083, d: 3.7, nd: 1.65446, elemId: 4, sd: 15.2 },
    // Cemented L4->L5 interface: downstream element L5 owns the junction.
    { label: "8", R: 106.036, d: 10.7, nd: 1.781, elemId: 5, sd: 15.2 },
    { label: "9", R: -65.103, d: 0.2, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "10", R: 177.062, d: 4.5, nd: 1.834, elemId: 6, sd: 15.3 },
    { label: "11", R: -235.06, d: 0.88, nd: 1.0, elemId: 0, sd: 15.3 },
    { label: "12", R: 480.757, d: 4.0, nd: 1.72, elemId: 7, sd: 15.3 },
    // Patent omits d13; this is the derived infinity paraxial BFD to the image plane.
    { label: "13", R: -1085.328, d: 47.041149, nd: 1.0, elemId: 0, sd: 15.3 },
  ],

  /* ── All-spherical design ── */
  asph: {},

  /* ── Published floating-focus spacing ── */
  var: {
    "11": [0.88, 16.339],
  },
  varLabels: [["11", "D11"]],

  groups: [],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription:
    "PUBLISHED — L1-L6 translate together relative to fixed L7 and the image plane; patent d11 increases from 0.880 mm at infinity to 16.339 mm at close focus (β ≈ -0.126).",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 9,

  /* ── Layout ── */
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
