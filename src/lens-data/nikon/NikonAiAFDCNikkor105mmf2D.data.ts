import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI AF DC-NIKKOR 105mm f/2 D                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 4,908,639 A, Example 1 / Table 1 (Nikon Corporation).   ║
 * ║  Six separated spherical elements in six groups; d-line prescription.       ║
 * ║                                                                              ║
 * ║  FOCUS STATUS — PUBLISHED:                                                   ║
 * ║    The patent publishes corrected infinity and corrected 1:30 finite states. ║
 * ║    The finite row is D0 = 3100.497 mm from object to surface 1. With the     ║
 * ║    modeled image plane 127.5752 mm behind surface 1, the normalized          ║
 * ║    image-plane-referenced endpoint is 3.2280722 m. Nikon's marketed MFD is   ║
 * ║    0.9 m; no internal spacing is invented for that production endpoint.      ║
 * ║                                                                              ║
 * ║  DC CONTROL:                                                                 ║
 * ║    The patent also publishes 1:30 under- and over-corrected states. The      ║
 * ║    aberrationControl triples reproduce those two rows exactly at the finite  ║
 * ║    published focus state. LensVisualizer necessarily layers the same DC      ║
 * ║    deltas at intermediate focus positions; those off-plane combinations are ║
 * ║    a disclosed mechanism-constrained visualization, not a published 2-D law.║
 * ║                                                                              ║
 * ║  STOP INFERENCE:                                                             ║
 * ║    Figure 3 labels stop S but gives no numeric axial coordinate or diameter. ║
 * ║    Its rendered scale places S at z ≈ 36.0 mm from surface 1. This model     ║
 * ║    keeps STO fixed at that station while G2 and GR execute the               ║
 * ║    patent-published DC motions. The stop radius is derived from the design   ║
 * ║    f-number, f/2. Stop position and diameter are modeling inferences, not    ║
 * ║    source-tabulated values.                                                  ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS:                                                             ║
 * ║    Derived from the metrically consistent Figure 3 section and checked       ║
 * ║    against marginal/chief-ray envelopes. E3's drawn edge is about 20.0 mm;   ║
 * ║    its modeled clear SD is reduced to 19.5 mm so the S4-S5 2.5 mm air gap    ║
 * ║    retains the current validator's 10% visible-clearance margin.             ║
 * ║                                                                              ║
 * ║  GLASS:                                                                      ║
 * ║    The patent supplies only nd and vd. Source coordinates are retained and    ║
 * ║    compatible catalog curves are qualified spectral proxies; no production   ║
 * ║    melt identity, source nC/nF/ng, dPgF, or APO behavior is asserted.         ║
 * ║                                                                              ║
 * ║  No scaling. No aspheres. No cemented interfaces. The production manual      ║
 * ║  mentions protective glass; it is excluded from this patent optical model.   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer references:
 * - https://www.nikonusa.com/p/af-dc-nikkor-105mm-f2d/1932/overview
 * - https://download.nikonimglib.com/archive2/MDXKK00KX4kn0262kin065ixa945/AFDC105_2D_%2827_DL%2902.pdf
 * - https://imaging.nikon.com/imaging/information/story/0059/index.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-ai-af-dc-nikkor-105mm-f2d",
  maker: "Nikon",
  name: "NIKON AI AF DC-NIKKOR 105mm f/2 D",
  subtitle: "US 4,908,639 A Example 1 — patent-correlated DC / rear-focus design",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "6 ELEMENTS / 6 GROUPS",
      "105 mm f/2",
      "PATENT EFL ≈ 104.944 mm; 2ω = 23°",
      "NIKON FX AoV 23°20′; PRODUCT MFD 0.9 m",
      "PUBLISHED MODEL FOCUS ENDPOINT 3.228 m",
      "REAR FOCUS + DEFOCUS IMAGE CONTROL",
      "ALL-SPHERICAL",
    ],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 105, design: 104.944017 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "US 4,908,639 A",
    patentYear: 1990,
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
      nd: 1.670249,
      vd: 57.53,
      indexReference: "d",
      focalLengthMm: 79.449492,
      glass: "670575 — J-LAK02 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive first group G1; front collector and principal positive-power element.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.72,
      indexReference: "d",
      focalLengthMm: 120.613524,
      glass: "694537 — H-LaK6A (CDGM) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive member of G2 preceding the negative DC-control element.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.08,
      indexReference: "d",
      focalLengthMm: -42.522864,
      glass: "689311 — S-TIM28 (OHARA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Negative member completing G2; G1-to-G2 spacing controls spherical aberration and coma.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.46,
      indexReference: "d",
      focalLengthMm: -62.157172,
      glass: "717295 — supplier-neutral optical glass code",
      apd: false,
      role: "Front negative member of the moving rear-focus group GR.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.76684,
      vd: 46.8,
      indexReference: "d",
      focalLengthMm: 87.173975,
      glass: "767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive middle member of rear-focus group GR.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.796681,
      vd: 45.37,
      indexReference: "d",
      focalLengthMm: 83.162594,
      glass: "797454 — J-LASF017 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive final member of rear-focus group GR.",
      diagramLabel: "L6",
    },
  ],

  /* ── Surface prescription ──
   * Patent surface numbers are preserved. STO is the only inserted plane.
   * The inferred stop station is z = 36.0 mm from surface 1. At the corrected
   * state this splits patent d6 into surface 6 → STO = 8.0 mm and STO → GR =
   * 22.0 mm. DC motion varies both sub-gaps so the inferred stop stays fixed.
   */
  surfaces: [
    { label: "1", R: 48.0, d: 10.0, sd: 27.3, medium: 1 },
    { label: "2", R: 446.083, d: 5.0, sd: 27.3 },
    { label: "3", R: 38.635, d: 7.5, sd: 22.6, medium: 2 },
    { label: "4", R: 66.09, d: 2.5, sd: 22.6 },
    { label: "5", R: 255.958, d: 3.0, sd: 19.5, medium: 3 },
    { label: "6", R: 26.161, d: 8.0, sd: 19.5 },
    { label: "STO", R: "flat" },
    { label: "7", R: -31.507, d: 3.0, sd: 16.8, medium: 4 },
    { label: "8", R: -111.66, d: 4.0, sd: 16.8 },
    { label: "9", R: -94.587, d: 4.8, sd: 18.0, medium: 5 },
    { label: "10", R: -40.03, d: 0.2, sd: 18.0 },
    { label: "11", R: 112.887, d: 4.8, sd: 17.7, medium: 6 },
    { label: "12", R: -157.361, sd: 17.7 },
  ],

  /*
   * closeFocusM is the nearest internally modeled state, not Nikon's production MFD.
   * Patent D0 is first-surface-referenced: 3.1004970 m + 0.1275752 m track = 3.2280722 m.
   */
  focus: {
    closeFocusM: 3.2280722,
    description:
      "Published rear-focus model from corrected infinity to the patent 1:30 state (D0 3100.497 mm; 3.2280722 m object-to-image-plane). Nikon's production MFD is 0.9 m and is not internally reconstructed. Published DC under/over rows are exact at 1:30 with the Figure-3-inferred stop held at z = 36.0 mm; off-plane focus×DC combinations are disclosed constrained visualization states.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) Corrected-focus motion. Patent d2 remains 5.0000 at both published corrected states. */
  gaps: { STO: { label: "STO→GR", values: [[22.0, 17.2089]] }, "12": { label: "BF", values: [[52.7752, 57.5663]] } },

  aperture: { nominalFNumber: 2.0, fStops: [2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  /*
   * Signed DC control. Under/center/over deltas reproduce patent positions 3/2/4
   * exactly at the published 1:30 focus state. Figure 3 places S outside G2 and
   * the patent names only G2 and GR as DC movers, so the inferred STO station is
   * held fixed while the two halves of d6 vary around it. Base values match the
   * corrected infinity state.
   */
  aberrationControl: {
    label: "DC",
    description:
      "Exact published under/center/over states at the 1:30 focus row; the same deltas outside that row are a constrained visualization, not a published continuous law.",
    minLabel: "R / UNDER",
    centerLabel: "0 / CORRECTED",
    maxLabel: "F / OVER",
    step: 0.001,
    gaps: {
      "2": { label: "G1→G2", values: [5.2, 5.0, 4.9] },
      "6": { label: "G2→STO", values: [7.8, 8.0, 8.1] },
      STO: { label: "STO→GR", values: [22.3613, 22.0, 21.8204] },
      "12": { label: "BF", values: [52.4139, 52.7752, 52.9548] },
    },
  },

  groups: [
    { text: "G1 (+) / FIXED", fromSurface: "1", toSurface: "2" },
    { text: "G2 (−) / DC", fromSurface: "3", toSurface: "6" },
    { text: "GR (+) / FOCUS → OBJ / DC", fromSurface: "7", toSurface: "12" },
  ],
  doublets: [],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
