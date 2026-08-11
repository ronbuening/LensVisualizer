import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MINOLTA AF 135mm f/2.8 [T4.5] STF                                                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP H11-231209 A (JP1999-231209), Example 1, Minolta Co., Ltd.; inventor Yoshinobu Kudo.                ║
 * ║ Eight elements / six air-separated groups. All prescription surfaces are spherical or plano.                   ║
 * ║ Patent label AS is the aperture stop and is encoded as STO; it is not an aspherical surface.                   ║
 * ║                                                                                                                  ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes d7 = 14.397 -> 18.198 mm and beta = -0.25,      ║
 * ║ but not BFD. The infinity BFD is paraxially computed as 46.8001558213 mm; the close BFD is code-solved from    ║
 * ║ beta = -0.25 as 80.0072944971 mm. This yields MFD = 0.8717293806 m and an implied front/rear movement ratio    ║
 * ║ 1.114463:1, consistent with the patent's rounded 1.11:1 value.                                                   ║
 * ║                                                                                                                  ║
 * ║ No uniform scaling is applied. Individual patent rows are authoritative: d1...d14 sum to 93.877 mm, while the  ║
 * ║ Example 1 summary prints 93.86 mm. The 0.017 mm source arithmetic discrepancy is preserved in the audit.        ║
 * ║                                                                                                                  ║
 * ║ The patent does not publish clear semi-diameters or the physical stop diameter. STO sd = 14.3790636652 mm is    ║
 * ║ derived from modeled EFL and FNO = 2.83. Other sd values are derived from exact spherical meridional ray        ║
 * ║ envelopes over the full Y' = 21.6 mm field at infinity and the beta = -0.25 close state, then checked against  ║
 * ║ edge thickness, actual rim slope, cross-gap intrusion, and off-axis containment.                                 ║
 * ║                                                                                                                  ║
 * ║ L5 + L6 are the active apodization filter and remain in the prescription. L5 is absorbing ND glass with         ║
 * ║ alpha = 0.55 mm^-1; exact ray path length through it now weights bokeh and relative illumination. L6 is the     ║
 * ║ near-index compensator. The patent gives no nC, nF, ng, or dPgF values, so none are invented.                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-stf-135f28-t45",
  maker: "Minolta",
  name: "MINOLTA AF 135mm f/2.8 [T4.5] STF",
  subtitle: "JP1999-231209 A, Example 1 — Minolta AF 135mm STF production-design correlation",
  specs: [
    "8 ELEMENTS / 6 GROUPS",
    "135mm f/2.8 [T4.5] STF",
    "MODELED EFL 135.001536 mm",
    "2ω ≈ 18.18° AT Y′ = 21.6 mm",
    "0.87 m MFD / 0.25×",
    "POWERED 2-ELEMENT APODIZATION FILTER",
  ],

  focalLengthMarketing: 135,
  focalLengthDesign: 135.0015363444206,
  apertureMarketing: 2.8,
  apertureDesign: 2.83,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1999-231209 A",
  patentAuthors: ["Yoshinobu Kudo"],
  patentAssignees: ["Minolta Co., Ltd."],
  patentYear: 1999,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.60311,
      vd: 60.74,
      fl: 124.45988294009383,
      glass: "603607 — crown class (vendor unresolved)",
      role: "Front positive collector; plano rear surface is patent r2.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.72342,
      vd: 37.99,
      fl: -144.94680707085612,
      glass: "723380 — dense barium-flint class (vendor unresolved)",
      role: "Negative member of the cemented L2/L3 pair in Gr1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: 64.17936459492185,
      glass: "517642 — crown class (vendor unresolved)",
      role: "Positive member of the cemented L2/L3 pair in Gr1.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.61293,
      vd: 36.96,
      fl: -52.31297893278733,
      glass: "613370 — flint class (vendor unresolved)",
      role: "Rear negative element of Gr1 immediately before the variable inter-group gap.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Plano-Concave Absorbing ND",
      nd: 1.5069,
      vd: 58.94,
      fl: -40.897612941408575,
      glass: "Unmatched (absorbing ND glass; nd=1.50690, νd=58.94, α=0.55)",
      absorptionCoefficientPerMm: 0.55,
      role: "Absorbing plano-concave member of the active apodization filter.",
      cemented: "AF",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.50137,
      vd: 56.46,
      fl: 41.348704549534276,
      glass: "501565 — crown class (K10-family equivalent; vendor unresolved)",
      role: "Near-index compensator cemented to L5; AF net power remains small and negative.",
      cemented: "AF",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.11,
      fl: 55.32360617164056,
      glass: "S-BAL35 (OHARA catalog equivalent; patent 589611; production supplier unspecified)",
      role: "Positive front element of rear group Gr2.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.29,
      fl: -70.46073541232649,
      glass: "620603 — dense-crown class (vendor unresolved)",
      role: "Rear negative meniscus completing Gr2.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 75.063, d: 9.0, nd: 1.60311, elemId: 1, sd: 34.0 },
    { label: "2", R: 1e15, d: 0.25, nd: 1.0, elemId: 0, sd: 34.0 },
    { label: "3", R: 37.102, d: 3.0, nd: 1.72342, elemId: 2, sd: 28.0 },
    { label: "4", R: 26.475, d: 16.0, nd: 1.5168, elemId: 3, sd: 23.7 },
    { label: "5", R: 104.186, d: 2.05, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "6", R: 678.979, d: 2.0, nd: 1.61293, elemId: 4, sd: 21.0 },
    { label: "7", R: 30.584, d: 14.397, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 14.3790636652 },
    { label: "9", R: 1e15, d: 0.3, nd: 1.5069, elemId: 5, sd: 15.0 },
    { label: "10", R: 20.731, d: 9.33, nd: 1.50137, elemId: 6, sd: 16.0 },
    { label: "11", R: 1e15, d: 17.25, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "12", R: 97.643, d: 7.5, nd: 1.58913, elemId: 7, sd: 20.0 },
    { label: "13", R: -47.53, d: 9.5, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "14", R: -41.707, d: 1.8, nd: 1.62041, elemId: 8, sd: 18.5 },
    { label: "15", R: -923.182, d: 46.800155821336546, nd: 1.0, elemId: 0, sd: 18.5 },
  ],

  asph: {},

  /* ── Focus reconstruction ── */
  var: {
    "7": [14.397, 18.198],
    "15": [46.800155821336546, 80.00729449712114],
  },
  varLabels: [
    ["7", "D7"],
    ["15", "BF"],
  ],

  groups: [
    { text: "Gr1", fromSurface: "1", toSurface: "7" },
    { text: "AF", fromSurface: "9", toSurface: "11" },
    { text: "Gr2", fromSurface: "12", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "AF", fromSurface: "9", toSurface: "11" },
  ],

  closeFocusM: 0.87,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent d7 changes 14.397→18.198 mm; BF is solved from β=-0.25 as 46.800156→80.007294 mm. The implied front/rear movement ratio is 1.114463:1 versus the patent's rounded 1.11:1.",

  nominalFno: 2.83,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 31],
  maxFstop: 31,
  apertureBlades: 9,

  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
