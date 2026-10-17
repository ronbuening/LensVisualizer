import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY VARIO-TESSAR T* E 16-70mm f/4 ZA OSS                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 9,538,088 B2, Numerical Example 1 (Tadashi Yanagisawa / Sony). ║
 * ║ Production correlation: high confidence to Sony SEL1670Z; the patent does ║
 * ║ not name the product. Sony markets 16-70 mm f/4, 12 groups / 16 elements, ║
 * ║ four aspherical elements, one ED element, and Optical SteadyShot.          ║
 * ║                                                                            ║
 * ║ Patent model: 16 physical elements, 12 air-separated physical groups,     ║
 * ║ six functional zoom groups (GR1..GR6), six aspherical surfaces on four    ║
 * ║ elements. No scale factor is applied (s = 1.0).                           ║
 * ║                                                                            ║
 * ║ Zoom variable gaps: D5, D12, D18, D25, D27, D29.                          ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that GR5/L51  ║
 * ║ alone focuses but publishes no finite-focus spacings. Close-focus D25/D27 ║
 * ║ values were code-solved at Sony's 0.35 m sensor-plane MFD while keeping   ║
 * ║ the image plane fixed and conserving D25 + D27 = 10.000 mm at every zoom ║
 * ║ state. Telephoto reconstruction gives |m| ≈ 0.2322x versus Sony's 0.23x. ║
 * ║                                                                            ║
 * ║ Stop: surface 13 is published, but its physical diameter is not.           ║
 * ║ nominalFno = 4.12 is the published design value and drives the project's   ║
 * ║ zoom-dependent aperture model. The stop radius is derived from the design  ║
 * ║ f-number at each zoom station; prior paraxial stop radii were ≈4.03 /      ║
 * ║ 5.50 / 6.70 mm.                                                            ║
 * ║                                                                            ║
 * ║ Semi-diameters are MODELING VALUES because the patent publishes none.     ║
 * ║ They were derived from exact meridional marginal/chief-ray envelopes at   ║
 * ║ all three zoom states and both infinity/reconstructed-close focus, then   ║
 * ║ checked against the Figure 1 optical section. The envelope includes full  ║
 * ║ on-axis marginal rays, the default 0.6-field ±0.75-pupil fan, and an    ║
 * ║ 0.8-field stress fan; full-field chief/±0.375-pupil rays were also traced.║
 * ║ SDs were checked for edge thickness, actual aspheric rim slope, cross-gap ║
 * ║ intrusion, conic limits, and modeled off-axis containment.                ║
 * ║ Figure 1's taller rear-unit profile is reflected in refined GR4-GR6 rims; ║
 * ║ cemented GR4 surfaces remain capped where further growth crosses at edge. ║
 * ║                                                                            ║
 * ║ Glass names are conservative catalog classes/codes from nd/νd matching,   ║
 * ║ with qualified catalog-equivalent curves where the coordinates support   ║
 * ║ them. They are not vendor-procurement claims. The patent publishes no     ║
 * ║ per-glass nC, nF, ng, or dPgF values, so none are invented here.           ║
 * ║                                                                            ║
 * ║ SG (sensor sealing glass / filters) is explicitly omitted by the patent's ║
 * ║ numerical examples and is excluded here.                                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Sony product source: https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel1670z/specifications
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-vario-tessar-te-1670f4-za-oss",
  maker: "Sony",
  name: "SONY VARIO-TESSAR T* E 16-70mm f/4 ZA OSS",
  subtitle: "US 9,538,088 B2 Numerical Example 1 — high-confidence SEL1670Z correlation",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "16 ELEMENTS / 12 PHYSICAL GROUPS",
      "6 FUNCTIONAL ZOOM GROUPS",
      "16.48-67.90 mm DESIGN",
      "F/4.12 DESIGN",
      "6 ASPHERICAL SURFACES / 4 ASPHERICAL ELEMENTS",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: [16, 70], design: [16.48, 67.9] },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 9,538,088 B2",
    patentYear: 2017,
    authors: ["Tadashi Yanagisawa"],
    assignees: ["Sony Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -144.6528,
      glass: "847238 — dense flint class",
      role: "Negative front component of the GR1 cemented pair.",
      diagramLabel: "L11",
      cemented: "J1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.34,
      focalLengthMm: 109.5844,
      glass: "620603 — dense crown class",
      role: "Positive partner of the GR1 front cemented pair.",
      diagramLabel: "L12",
      cemented: "J1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 89.8363,
      glass: "729547 — lanthanum crown class",
      role: "Positive collector completing the first functional zoom group.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L21",
      label: "Element L21",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: -15.9168,
      glass: "851401 — high-index low-dispersion molding-glass class",
      role: "Strong negative aspheric front element of GR2.",
      diagramLabel: "L21",
    },
    {
      id: 5,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.35,
      focalLengthMm: -15.4384,
      glass: "NBFD10 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Negative component of the GR2 cemented correction pair.",
      diagramLabel: "L22",
      cemented: "J2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 12.577,
      glass: "847238 — dense flint class",
      role: "Strong positive partner of the GR2 cemented correction pair.",
      diagramLabel: "L23",
      cemented: "J2",
    },
    {
      id: 7,
      name: "L24",
      label: "Element L24",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8208,
      vd: 42.71,
      focalLengthMm: -36.958,
      glass: "821427 — TAFD51-class (legacy/source coordinate)",
      role: "Rear negative element of GR2; the image-side surface is aspherical.",
      diagramLabel: "L24",
    },
    {
      id: 8,
      name: "L31",
      label: "Element L31",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -36.9116,
      glass: "904313 — very-high-index flint class",
      role: "Negative front component of the GR3 cemented pair.",
      diagramLabel: "L31",
      cemented: "J3",
    },
    {
      id: 9,
      name: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.7433,
      vd: 49.22,
      focalLengthMm: 14.5349,
      glass: "743492 — lanthanum flint class",
      role: "Strong positive partner of the GR3 cemented pair.",
      diagramLabel: "L32",
      cemented: "J3",
    },
    {
      id: 10,
      name: "L33",
      label: "Element L33",
      type: "Negative Meniscus",
      nd: 1.80611,
      vd: 40.73,
      focalLengthMm: -32.0543,
      glass: "806407 — dense flint class",
      role: "Rear negative element of GR3.",
      diagramLabel: "L33",
    },
    {
      id: 11,
      name: "L41",
      label: "Element L41",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 21.5065,
      glass: "694532 — lanthanum crown class",
      role: "Aspheric positive front element of the fourth functional zoom group.",
      diagramLabel: "L41",
    },
    {
      id: 12,
      name: "L42",
      label: "Element L42",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: -23.4535,
      glass: "911353 — very-high-index low-dispersion class",
      role: "Negative component of the nearly afocal GR4f cemented pair.",
      diagramLabel: "L42",
      cemented: "J4",
    },
    {
      id: 13,
      name: "L43",
      label: "Element L43",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 24.4749,
      glass: "497816 — ED fluorophosphate class",
      role: "Positive ED-class partner of the nearly afocal GR4f cemented pair.",
      diagramLabel: "L43",
      cemented: "J4",
    },
    {
      id: 14,
      name: "L44",
      label: "Element L44",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 63.3558,
      glass: "618634 — phosphate crown class",
      role: "Positive GR4r image-stabilization element; translated transversely for blur compensation.",
      diagramLabel: "L44",
    },
    {
      id: 15,
      name: "L51",
      label: "Element L51",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -20.9828,
      glass: "694532 — lanthanum crown class",
      role: "Single-element negative GR5 focus group; moves axially for focusing.",
      diagramLabel: "L51",
    },
    {
      id: 16,
      name: "L61",
      label: "Element L61",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.15,
      focalLengthMm: 54.5299,
      glass: "517522 — crown-flint class",
      role: "Positive rear relay / sixth functional zoom group.",
      diagramLabel: "L61",
    },
  ],

  /* ── Surface prescription: patent Example 1, no scaling ── */
  /* (moved from asph) ── Aspherical coefficients ──
   * Patent convention already matches the project convention:
   * sqrt(1 - (1 + K)c^2 h^2). No conic conversion and no scale transform.
   */
  surfaces: [
    { label: "1", R: 84.34, d: 1.5, sd: 23.0, medium: 1 },
    { label: "2", R: 49.538, d: 4.58, sd: 22.2, medium: 2 },
    { label: "3", R: 176.09, d: 0.2, sd: 22.0 },
    { label: "4", R: 46.598, d: 4.41, sd: 21.0, medium: 3 },
    { label: "5", R: 155.0, sd: 20.6 },

    {
      label: "6A",
      R: 74.934,
      d: 1.3,
      sd: 12.5,
      medium: 4,
      asphere: { K: 0, A4: -1.7003e-5, A6: 2.9207e-7, A8: -1.4891e-9, A10: 2.4818e-12, A12: 0, A14: 0 },
    },
    { label: "7A", R: 11.384, d: 5.29, sd: 8.8, asphere: { K: 0, A4: -2.2803e-5, A6: 9.2713e-8, A8: 3.8834e-9, A10: 0, A12: 0, A14: 0 } },
    { label: "8", R: -96.216, d: 0.8, sd: 8.5, medium: 5 },
    { label: "9", R: 14.921, d: 4.42, sd: 8.0, medium: 6 },
    { label: "10", R: -32.137, d: 0.55, sd: 7.1 },
    { label: "11", R: -20.465, d: 0.8, sd: 7.5, medium: 7 },
    { label: "12A", R: -64.006, sd: 7.5, asphere: { K: 0, A4: -3.3902e-5, A6: 1.4348e-7, A8: -6.1643e-9, A10: 4.7703e-11, A12: 0, A14: 0 } },

    // Patent surface 13. Diameter is not published; nominalFno drives the zoom-dependent opening.
    { label: "STO", R: "flat", d: 0.5 },

    { label: "14", R: 22.009, d: 0.8, sd: 9.0, medium: 8 },
    { label: "15", R: 13.031, d: 4.25, sd: 8.2, medium: 9 },
    { label: "16", R: -54.421, d: 1.41, sd: 7.1 },
    { label: "17", R: -15.55, d: 0.8, sd: 7.8, medium: 10 },
    { label: "18", R: -39.947, sd: 8.5 },

    {
      label: "19A",
      R: 63.402,
      d: 3.49,
      sd: 10.4,
      medium: 11,
      asphere: { K: -7.4971, A4: -5.5873e-5, A6: 2.2331e-7, A8: -1.6262e-9, A10: 9.6401e-12, A12: 0, A14: 0 },
    },
    { label: "20", R: -19.063, d: 0.25, sd: 10.4 },
    { label: "21", R: 134.77, d: 0.8, sd: 9.6, medium: 12 },
    { label: "22", R: 18.387, d: 4.19, sd: 9.6, medium: 13 },
    { label: "23", R: -33.222, d: 1.0, sd: 9.6 },
    { label: "24", R: 41.268, d: 2.02, sd: 12.0, medium: 14 },
    { label: "25", R: -750.0, sd: 12.0 },

    {
      label: "26A",
      R: -242.5,
      d: 0.9,
      sd: 10.5,
      medium: 15,
      asphere: { K: 0, A4: -2.8193e-5, A6: 2.6882e-7, A8: -2.6307e-9, A10: 0, A12: 0, A14: 0 },
    },
    {
      label: "27A",
      R: 15.504,
      sd: 10.5,
      asphere: { K: -0.22886, A4: -4.4572e-5, A6: 8.5447e-8, A8: -5.6155e-10, A10: -1.2462e-11, A12: 0, A14: 0 },
    },

    { label: "28", R: 34.502, d: 3.16, sd: 12.5, medium: 16 },
    { label: "29", R: -150.0, sd: 12.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 16.48, label: "Wide" },
      { focalLengthMm: 35.0 },
      { focalLengthMm: 67.9, label: "Tele" },
    ],
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.35,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent-published GR5/L51-only axial focusing; close pairs are code-solved at Sony's 0.35 m sensor-plane MFD with fixed image plane and D25+D27=10.000 mm conserved at each zoom state.",
  },

  /* (moved from var) ── Zoom + focus variable air spacings ──
   * Each pair is [infinity, reconstructed close focus].
   * D25/D27 are the only focus-changing gaps; all others are zoom-only.
   */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.0, 1.0],
        [13.861, 13.861],
        [28.117, 28.117],
      ],
    },
    "12A": {
      label: "D12",
      values: [
        [12.717, 12.717],
        [5.608, 5.608],
        [1.6, 1.6],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [5.025, 5.025],
        [2.073, 2.073],
        [1.001, 1.001],
      ],
    },
    "25": {
      label: "D25 / FOCUS FRONT",
      values: [
        [5.437, 5.874716838453047],
        [3.829, 4.934917862487934],
        [2.502, 5.410553536658305],
      ],
    },
    "27A": {
      label: "D27 / FOCUS REAR",
      values: [
        [4.563, 4.125283161546953],
        [6.171, 5.065082137512066],
        [7.498, 4.589446463341695],
      ],
    },
    "29": {
      label: "BFD",
      values: [
        [14.754, 14.754],
        [28.957, 28.957],
        [41.773, 41.773],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Functional-group / cemented-pair annotations ── */
  groups: [
    { text: "GR1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "GR2 (-)", fromSurface: "6A", toSurface: "12A" },
    { text: "GR3 (+)", fromSurface: "14", toSurface: "18" },
    { text: "GR4 (+)", fromSurface: "19A", toSurface: "25" },
    { text: "GR5 (− / FOCUS)", fromSurface: "26A", toSurface: "27A" },
    { text: "GR6 (+)", fromSurface: "28", toSurface: "29" },
  ],
  doublets: [
    { text: "J1", fromSurface: "1", toSurface: "3" },
    { text: "J2", fromSurface: "8", toSurface: "10" },
    { text: "J3", fromSurface: "14", toSurface: "16" },
    { text: "J4 / GR4f", fromSurface: "21", toSurface: "23" },
    { text: "GR4r / OSS", fromSurface: "24", toSurface: "25" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
