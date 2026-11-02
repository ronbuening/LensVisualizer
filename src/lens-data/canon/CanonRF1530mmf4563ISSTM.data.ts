import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * EP 4 174 551 A1, Second Numerical Embodiment, ¶0064–68 PDFpp10–12; Fig3 p26.
 * Native scale; production correlation inferred. Original reviewed 2026-10-30.
 * All source R/d, aspheres, media, stop position and zoom/focus controls retained.
 * Printed effective diameters supply clear sd. S2/S4 resolved outer shoulders
 * use rimExtensionSd and preserve their printed optical caps. S5 retains the
 * prior 12.289 mm cap versus printed 12.290 mm: a 1 µm model constraint inside
 * the ±.0025 mm half-diameter rounding bin, not proof of a physical source error.
 * Literal 12.290 exceeds the .90 cross-gap guard by .000825 mm of sag intrusion;
 * no tolerance, radius or gap is changed. The physical gap still remains positive.
 * Source STO ED10.25 is recorded separately from the canonical target-F iris;
 * the original does not establish the exact mechanical meaning of this difference.
 * Source d-line reference: ¶0056 PDFp8 defines nd at d587.6nm and vd from
 * F486.1/C656.3nm, with g435.8nm named. Positive citations stay outside
 * uncertainty-only indexReferenceNote. Thirteen qualified spectral proxies
 * include the 2026-10-31 E48R numerical proxy for E12; no source resin identity,
 * hybrid layer, supplier, melt or molding process is established.
 * No published numerical C/F/g or partial-dispersion data; none invented.
 * L3 close-focus cam is an authored reconstruction, not finite source data.
 * All1365 sampled zoom/focus states pass axial/chief samples, but the generic
 * full-frame wide corner reaches only92.22%, and interval close focus/defocus
 * remain illustrative. Source field-label/aggregate contradictions are unresolved.
 * No source camera plate, inferred cuts, bonded lands or IS decenter is added.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-15-30mm-f4-5-6-3-is-stm",
  maker: "Canon",
  name: "CANON RF 15-30mm f/4.5-6.3 IS STM",
  subtitle: "EP 4 174 551 A1 — Second Numerical Embodiment; production correlation inferred",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "13 ELEMENTS / 11 GROUPS",
      "15-30mm MARKETING / 15.45-29.15mm PATENT",
      "f/4.5-6.3 MARKETING / f/4.60-6.36 MODEL",
      "2 ASPHERICAL SURFACES / 2 UD-CLASS ELEMENTS",
    ],
    elementCount: 13,
    groupCount: 11,
    focalLengthMm: { marketing: [15, 30], design: [15.45, 29.15] },
    fNumber: { marketing: 4.5, design: 4.6 },
  },

  source: {
    patentNumber: "EP 4 174 551 A1",
    example: { label: "Numerical Embodiment 2", id: "2" },
    patentYear: 2023,
    authors: ["Hiroki Ebe", "Shunji Iwamoto"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "EP4174551A1 ¶0066 PDFp11 prints wide half-view49.88° and tele36.58°, but native Fig4A/4B PDFp27 labels54.5°/36.3°. Table1 PDFp21 condition7=-15.24% and imageheight18.34 imply wide angle about54.47° under the source y0=f tan(theta) definition. Literal source data and all controls retained; no unique replacement field schedule is established.",
      },
      {
        status: "unresolved",
        note: "EP4174551A1 ¶0066 PDFp11 middle overall109.06mm versus literal surface/gap sum109.07mm; ¶0067 PDFp12 L1 structure25.25mm versus literal25.26mm. Independent rounding is a possible explanation, not source-proven. No R/d or cam adjustment made.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 2.001,
      indexReference: "d",
      vd: 29.1,
      focalLengthMm: -39.383139973231984,
      glass: "S-LAH99 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "First negative element of L1; source high-index front-group bending, chemistry unidentified.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.90043,
      indexReference: "d",
      vd: 37.4,
      focalLengthMm: -33.21923102003975,
      glass: "TAFD37A (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Second negative element of L1; adjacent negative lens B in the patent's ghost-control conditions.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.497,
      indexReference: "d",
      vd: 81.5,
      focalLengthMm: -41.23081291222841,
      glass: "K-PFK80 (SUMITA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "Third negative element of L1; one of two 1.49700/81.5 high-Abbe elements in the selected prescription.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8061,
      indexReference: "d",
      vd: 33.3,
      focalLengthMm: 33.5291172855741,
      glass: "J-LASFH6 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive rear element of L1; balances the three preceding negative elements.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6393,
      indexReference: "d",
      vd: 44.9,
      focalLengthMm: 67.565765186738,
      glass: "S-BAM12 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Front positive singlet of L2, immediately ahead of the aperture-stop region.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.804,
      indexReference: "d",
      vd: 46.5,
      focalLengthMm: -34.62710106228003,
      glass: "TAF3D (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative member of the first cemented pair in L2.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      indexReference: "d",
      vd: 53.9,
      focalLengthMm: 25.627994073423892,
      glass: "LAC8 (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive member of the first cemented pair in L2; D1 net power is positive.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.48749,
      indexReference: "d",
      vd: 70.2,
      focalLengthMm: 41.11098455450291,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive singlet in the central L2 relay.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.90043,
      indexReference: "d",
      vd: 37.4,
      focalLengthMm: -15.922545914281494,
      glass: "TAFD37A (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative member of the second cemented pair in L2.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      indexReference: "d",
      vd: 81.5,
      focalLengthMm: 17.06424022513546,
      glass: "K-PFK80 (SUMITA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "Positive high-Abbe member of the second cemented pair; D2 has weak net negative power.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.801,
      indexReference: "d",
      vd: 35,
      focalLengthMm: -32.49554579342068,
      glass: "S-LAM66 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Single negative L3 focusing element translated for the constrained close-focus reconstruction.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.5311,
      indexReference: "d",
      vd: 55.9,
      focalLengthMm: 185.11915939007292,
      glass: "E48R (published ZEON catalog curve; qualified numerical polymer proxy; source composition and supplier unspecified)",
      apd: false,
      role: "Weak positive L4 element with both surfaces aspheric; original medium chemistry and manufacturing process unidentified.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.804,
      indexReference: "d",
      vd: 46.5,
      focalLengthMm: 72.63443548521461,
      glass: "TAF3D (HOYA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Final positive L5 element; fixed relative to the image plane in the published zoom states.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 39.485, d: 1.8, sd: 17.99, medium: 1 },
    { label: "2", R: 19.277, d: 6.35, sd: 14.53, rimExtensionSd: 17.99 },
    { label: "3", R: 81.393, d: 1.4, sd: 13.945, medium: 2 },
    { label: "4", R: 21.695, d: 6.53, sd: 12.375, rimExtensionSd: 13.945 },
    // Patent effective diameter is 24.58 mm (sd 12.290 mm). The 1 µm reduction is an explicit
    // retained model constraint within source rounding precision, not a proved source error; audit records the literal trial.
    { label: "5", R: -37.674, d: 1.3, sd: 12.289, medium: 3 },
    { label: "6", R: 45.445, d: 1.55, sd: 12.4 },
    { label: "7", R: 48.066, d: 6.33, sd: 12.68, medium: 4 },
    { label: "8", R: -58.121, sd: 12.595 },
    { label: "9", R: 75.709, d: 2.91, sd: 6.31, medium: 5 },
    { label: "10", R: -99.071, d: 5, sd: 5.875 },
    // Source surface-11 ED is10.25 mm; its mechanical relationship to the target-F iris is not established.
    // The stop radius is derived from the design f-number at each zoom station.
    { label: "STO", R: "flat", d: 3 },
    { label: "12", R: 90.807, d: 1, sd: 5.1, medium: 6 },
    { label: "13", R: 21.203, d: 2.41, sd: 5.055, medium: 7 },
    { label: "14", R: -125.965, d: 2, sd: 5.025 },
    { label: "15", R: 14.434, d: 3.39, sd: 5.23, medium: 8 },
    { label: "16", R: 47.619, d: 3.38, sd: 5.35 },
    { label: "17", R: 40.616, d: 1, sd: 5.77, medium: 9 },
    { label: "18", R: 10.473, d: 5.52, sd: 5.76, medium: 10 },
    { label: "19", R: -36.785, sd: 6.36 },
    { label: "20", R: -24.105, d: 1.1, sd: 7.395, medium: 11 },
    { label: "21", R: -332.736, sd: 7.97 },
    {
      label: "22A",
      R: -50,
      d: 3,
      sd: 10.605,
      medium: 12,
      asphere: { K: 0, A4: -3.17244e-5, A6: 2.39294e-7, A8: -2.65521e-9, A10: 1.39956e-11, A12: 0, A14: 0 },
    },
    {
      label: "23A",
      R: -33.834,
      sd: 11.635,
      asphere: { K: 0, A4: 7.7828e-6, A6: 1.77889e-7, A8: -9.23774e-10, A10: 4.78158e-12, A12: 0, A14: 0 },
    },
    { label: "24", R: -186.603, d: 4.91, sd: 18.73, medium: 13 },
    { label: "25", R: -45, d: 13.5, sd: 19.205 },
  ],

  zoom: {
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 15.45, nominalFNumber: 4.6, label: "Wide" },
      { focalLengthMm: 20.53, nominalFNumber: 5.27 },
      { focalLengthMm: 29.15, nominalFNumber: 6.36, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.28,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent ¶0047 identifies L3 (surfaces 20-21) as the focusing unit but publishes no finite-focus spacing table. Close-focus D19/D21 values are code-solved for Canon's 0.280 m AF MFD by translating L3 toward the image and conserving D19+D21=11.86 mm at every zoom state. The 0.128 m / 0.52× 15 mm manual-focus special state is not modeled across the zoom range.",
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: {
    "8": {
      label: "D8 (ZOOM)",
      values: [
        [24.84, 24.84],
        [12.64, 12.64],
        [1.2, 1.2],
      ],
    },
    "19": {
      label: "D19 (FOCUS)",
      values: [
        [2.86, 3.624009364502819],
        [4.14, 5.261253083711491],
        [6.51, 8.37506622301785],
      ],
    },
    "21": {
      label: "D21 (FOCUS)",
      values: [
        [9, 8.235990635497181],
        [7.72, 6.598746916288508],
        [5.35, 3.4849337769821487],
      ],
    },
    "23A": {
      label: "D23 (ZOOM)",
      values: [
        [1.2, 1.2],
        [7.19, 7.19],
        [16.16, 16.16],
      ],
    },
  },

  aperture: { fStops: [4.6, 5.6, 6.3, 8, 11, 16, 22], blades: 7 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "8" },
    { text: "L2", fromSurface: "9", toSurface: "19" },
    { text: "L3", fromSurface: "20", toSurface: "21" },
    { text: "L4", fromSurface: "22A", toSurface: "23A" },
    { text: "L5", fromSurface: "24", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "12", toSurface: "14" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
