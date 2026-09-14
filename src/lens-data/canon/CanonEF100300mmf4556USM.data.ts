import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 100-300mm f/4.5-5.6 USM                          ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Prescription: US 7,158,320 B2, Numerical Embodiment 3 (Akihiro Nishio; ║
 * ║  Canon Kabushiki Kaisha). The job card fixes this later patent example   ║
 * ║  as the modeled design; it is a design correlation, not provenance for   ║
 * ║  Canon's June 1990 production lens.                                      ║
 * ║                                                                            ║
 * ║  Model: 13 ordinary glass elements / 10 air-separated groups, plus one   ║
 * ║  optically active 0.10 mm patent-defined ITO/polyvinylcarbazole adhesive ║
 * ║  layer represented as its own medium entry. All selected-example         ║
 * ║  refracting surfaces are spherical.                                       ║
 * ║                                                                            ║
 * ║  Zoom: five functional units L1(+), L2(-), L3(+), L4(+), L5(-).          ║
 * ║  Published zoom-only variable gaps: D6, D10, D15, D20. The patent does   ║
 * ║  not tabulate D25/BFD; D25 below is the independently solved Gaussian    ║
 * ║  image distance from R25 for each published zoom state so the IMG plane  ║
 * ║  remains at focus. No zoom-group reversal is resolved at the three       ║
 * ║  published states.                                                        ║
 * ║                                                                            ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. Canon documents fourth-group  ║
 * ║  rear focusing for the production lens, but the selected patent example  ║
 * ║  publishes no finite-object spacings or focus travel. Every var pair      ║
 * ║  therefore preserves the infinity spacing; no close-focus motion is      ║
 * ║  invented. Production MFD 1.5 m is metadata only.                        ║
 * ║                                                                            ║
 * ║  F-number: nominalFno uses the state-specific patent chart values         ║
 * ║  4.65 / 5.21 / 5.80 because they control modeled stop/pupil geometry.    ║
 * ║  The Numerical Embodiment 3 heading instead prints 5.81 at tele; that    ║
 * ║  source discrepancy is retained here rather than silently normalized.    ║
 * ║                                                                            ║
 * ║  Scaling: none. Patent focal-length control points remain                 ║
 * ║  103.35 / 173.68 / 291.85 mm. Marketed 100-300 mm metadata is separate. ║
 * ║                                                                            ║
 * ║  Semi-diameters: not published. They were derived from the Stage-2       ║
 * ║  y-nu marginal/chief-ray envelope at all three zoom states. Each clear   ║
 * ║  aperture contains the full axial wide-open marginal ray and the default ║
 * ║  displayed off-axis fan (0.60 field, +/-0.75 pupil) with clearance, then ║
 * ║  was checked against edge thickness, spherical rim slope, shared-band    ║
 * ║  cross-gap intrusion, the patent Fig. 5 proportions, and Canon's 58 mm   ║
 * ║  production filter diameter. No layout override is used to hide geometry.║
 * ║                                                                            ║
 * ║  Glass labels use supplier-neutral coordinate classes and qualified      ║
 * ║  catalog-equivalent coefficient proxies. Patent nd/vd coordinates remain ║
 * ║  authoritative; no production supplier or partial-dispersion identity is ║
 * ║  inferred.                                                                ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-100300mm-f4556-usm",
  maker: "Canon",
  name: "CANON EF 100-300mm f/4.5-5.6 USM",
  subtitle: "US 7,158,320 B2 Example 3 — design correlation only; patent postdates the 1990 production lens",
  specs: [
    "13 ELEMENTS / 10 GROUPS",
    "100-300mm MARKETED",
    "PATENT EX. 3: 103.35-291.85mm",
    "PATENT FNO: 4.65-5.81 (FIG. 6C: 5.80 TELE)",
    "REAR FOCUS PRODUCTION LENS; NO CLOSE-FOCUS RECONSTRUCTION",
  ],

  focalLengthMarketing: [100, 300],
  focalLengthDesign: [103.355236694, 291.836243234],
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 7,158,320 B2",
  patentAuthors: ["Akihiro Nishio"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2007,
  elementCount: 13,
  groupCount: 10,

  /* ── Elements ──
   *  The ITO adhesive is an additional optically active modeled medium, not part of the 13-element production count.
   *  Six-digit labels are coordinate classes derived from the patent nd/vd values; vendor identity is intentionally
   *  unset.
   */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.805181,
      vd: 25.4,
      fl: -724.707237,
      glass: "805254 dense-flint class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      cemented: "C1",
      role: "Front member of the positive L1 cemented assembly.",
    },
    {
      id: 2,
      name: "ITO",
      label: "ITO adhesive layer",
      type: "Negative Meniscus Adhesive Layer",
      nd: 1.72104,
      vd: 12.55,
      fl: -892.818117,
      glass: "Unmatched (patent-defined 15% ITO/polyvinylcarbazole adhesive composite)",
      cemented: "C1",
      role: "Patent-defined 0.10 mm optically active adhesive between E1 and E2.",
    },
    {
      id: 3,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.2,
      fl: 132.21086,
      glass: "517642 crown class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      cemented: "C1",
      role: "Positive rear member of the front cemented assembly.",
    },
    {
      id: 4,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 255.316843,
      glass: "487702 low-index crown class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Rear positive member of zoom unit L1.",
    },
    {
      id: 5,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      fl: -29.364051,
      glass: "835427 lanthanum high-index class (vendor unspecified)",
      role: "Negative member of zoom unit L2.",
    },
    {
      id: 6,
      name: "E5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.846658,
      vd: 23.9,
      fl: 55.443045,
      glass: "847238/239 high-index flint class (vendor unspecified)",
      role: "Positive member completing zoom unit L2.",
    },
    {
      id: 7,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.846658,
      vd: 23.9,
      fl: -91.621896,
      glass: "847238/239 high-index flint class (vendor unspecified)",
      role: "Negative first member of zoom unit L3.",
    },
    {
      id: 8,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.7,
      fl: 52.655593,
      glass: "603607 dense-crown/SK14 class (vendor unspecified)",
      role: "Positive rear member of zoom unit L3.",
    },
    {
      id: 9,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 55.662694,
      glass: "487702 low-index crown class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      cemented: "C2",
      role: "Positive front member of the L4 cemented pair.",
    },
    {
      id: 10,
      name: "E9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -63.7568,
      glass: "834372/373 lanthanum high-index class (vendor unspecified)",
      cemented: "C2",
      role: "Negative rear member of the L4 cemented pair.",
    },
    {
      id: 11,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.607289,
      vd: 49.2,
      fl: 87.843277,
      glass: "BAF5-class coefficient proxy (patent 607492; production supplier unspecified)",
      role: "Positive rear member of zoom unit L4.",
    },
    {
      id: 12,
      name: "E11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      fl: -42.81983,
      glass: "835427 lanthanum high-index class (vendor unspecified)",
      role: "Negative front member of zoom unit L5.",
    },
    {
      id: 13,
      name: "E12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.834807,
      vd: 42.7,
      fl: -29.36343,
      glass: "835427 lanthanum high-index class (vendor unspecified)",
      cemented: "C3",
      role: "Negative front member of the rear cemented pair.",
    },
    {
      id: 14,
      name: "E13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.784718,
      vd: 25.7,
      fl: 33.004359,
      glass: "785257 dense-flint class (vendor unspecified)",
      cemented: "C3",
      role: "Positive rear member of the rear cemented pair.",
    },
  ],

  /* ── Surface prescription ──
   *  Source labels R1...R25 are retained except R11, which is the required single STO surface.
   *  R16's patent Abbe subscript typo is corrected only in the element mapping: nd=1.487490, vd=70.2 belongs to E8.
   */
  surfaces: [
    { label: "1", R: 137.517, d: 2.7, nd: 1.805181, elemId: 1, sd: 26.7 },
    { label: "2", R: 110.315, d: 0.1, nd: 1.72104, elemId: 2, sd: 26.4 },
    { label: "3", R: 94.141, d: 7.4, nd: 1.51633, elemId: 3, sd: 26.4 },
    { label: "4", R: -241.704, d: 0.2, nd: 1.0, elemId: 0, sd: 25.8 },
    { label: "5", R: 63.269, d: 4.4, nd: 1.48749, elemId: 4, sd: 25.8 },
    { label: "6", R: 125.749, d: 3.18, nd: 1.0, elemId: 0, sd: 24.7 },
    { label: "7", R: -70.692, d: 1.4, nd: 1.834807, elemId: 5, sd: 12.4 },
    { label: "8", R: 37.864, d: 3.6, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "9", R: 46.573, d: 3.5, nd: 1.846658, elemId: 6, sd: 13.0 },
    { label: "10", R: 5731.432, d: 25.9, nd: 1.0, elemId: 0, sd: 12.9 },
    { label: "STO", R: 1e15, d: 5.03, nd: 1.0, elemId: 0, sd: 12.263999865 },
    { label: "12", R: -244.087, d: 1.6, nd: 1.846658, elemId: 7, sd: 12.9 },
    { label: "13", R: 114.052, d: 2.6, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "14", R: 108.677, d: 4.8, nd: 1.603112, elemId: 8, sd: 13.5 },
    { label: "15", R: -44.123, d: 3.28, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "16", R: 76.581, d: 5.5, nd: 1.48749, elemId: 9, sd: 13.5 },
    { label: "17", R: -41.037, d: 1.8, nd: 1.834, elemId: 10, sd: 12.9 },
    { label: "18", R: -183.385, d: 0.2, nd: 1.0, elemId: 0, sd: 12.9 },
    { label: "19", R: 70.476, d: 3.4, nd: 1.607289, elemId: 11, sd: 12.9 },
    { label: "20", R: -215.479, d: 26.73, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "21", R: -246.027, d: 1.1, nd: 1.834807, elemId: 12, sd: 8.8 },
    { label: "22", R: 41.908, d: 1.0, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "23", R: 423.592, d: 1.2, nd: 1.834807, elemId: 13, sd: 8.7 },
    { label: "24", R: 23.142, d: 3.2, nd: 1.784718, elemId: 14, sd: 8.7 },
    { label: "25", R: 204.169, d: 44.50790941, nd: 1.0, elemId: 0, sd: 8.8 },
  ],

  asph: {},

  /* Zoom-only spacings. Because focus status is NO_INTERNAL_RECONSTRUCTION, every [infinity, close] pair is
   * identical.
   */
  var: {
    "6": [
      [3.18, 3.18],
      [29.07, 29.07],
      [51.68, 51.68],
    ],
    "10": [
      [25.9, 25.9],
      [10.05, 10.05],
      [2.66, 2.66],
    ],
    "15": [
      [3.28, 3.28],
      [19.13, 19.13],
      [26.53, 26.53],
    ],
    "20": [
      [26.73, 26.73],
      [17.28, 17.28],
      [1.73, 1.73],
    ],
    "25": [
      [44.50790941, 44.50790941],
      [53.963874527, 53.963874527],
      [69.498779575, 69.498779575],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["10", "D10"],
    ["15", "D15"],
    ["20", "D20"],
    ["25", "BF"],
  ],

  zoomPositions: [103.35, 173.68, 291.85],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "L2 (-)", fromSurface: "7", toSurface: "10" },
    { text: "L3 (+)", fromSurface: "12", toSurface: "15" },
    { text: "L4 (+)", fromSurface: "16", toSurface: "20" },
    { text: "L5 (-)", fromSurface: "21", toSurface: "25" },
  ],

  doublets: [
    { text: "C1 + ITO", fromSurface: "1", toSurface: "4" },
    { text: "C2", fromSurface: "16", toSurface: "18" },
    { text: "C3", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 1.5,
  focusDescription:
    "Production lens: fourth-group rear focus. Patent Example 3: no finite-object spacing table; " +
    "focus status NO_INTERNAL_RECONSTRUCTION, so only published infinity zoom states are modeled.",

  nominalFno: [4.65, 5.21, 5.8],
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32, 40],
  apertureBlades: 8,
  maxFstop: 40,

  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
