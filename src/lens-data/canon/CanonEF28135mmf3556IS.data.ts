import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 28-135mm f/3.5-5.6 IS USM
 *
 * Prescription source: US 6,061,180, Numerical Example 1 (Shingo Hayakawa / Canon).
 * The patent prescription is dimensional and is used without focal-length scaling.
 *
 * Zoom variable gaps: d5, d13, d14/STO, d17, d20, d23, and d29/BF.
 * Focus: unit II moves toward the object; d5 decreases and d13 increases by the same amount.
 * The close-focus columns are a first-order reconstruction constrained to Canon's 0.5 m MFD.
 *
 * The patent does not publish clear apertures. Semi-diameters are inferred for LensVisualizer from
 * a partial paraxial envelope and retained geometric limits. The original native Figure 1 was
 * reviewed on 2026-10-30: rear-unit clear caps now follow the resolved Figure 1 outlines, and
 * S7 has an outer shoulder to 16 mm while its 12.8 mm optical cap remains. The front cemented
 * component and unit-II caps retain documented edge, slope and gap limits where literal
 * full-height restoration is infeasible. The 72 mm production filter is product context,
 * not an optical-rim ruler.
 * Source ni/vi have no specified spectral reference; d-line tracing remains approximate, with
 * every medium explicitly Unmatched and no catalog curve asserted. R/d, asphere, zoom cams
 * and inferred 0.5 m focus spacings are unchanged. The nominal aperture targets
 * are restored separately to the printed f/3.60, f/4.36 and f/5.75 states; iris radii remain derived.
 * See the audit for source and runtime limits.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28-135mm-f3-5-5-6-is-usm",
  maker: "Canon",
  name: "CANON EF 28-135mm f/3.5-5.6 IS USM",
  subtitle: "US 6,061,180 Numerical Example 1 — Canon / Hayakawa",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 elements / 12 groups",
      "28-135mm f/3.5-5.6 marketed; 28.891-131.182mm patent design",
      "135 full-frame / Canon EF",
      "One asphere; unit II inner focus; unit V optical IS",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: [28, 135], design: [28.891, 131.182] },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: {
    patentNumber: "US 6,061,180",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2000,
    authors: ["Shingo Hayakawa"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -124.445,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-TIH53 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "High-index negative front member of the weak positive cemented front component.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 86.821,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-LAL14 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Lower-dispersion positive member of the front cemented component.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.8,
      focalLengthMm: 103.355,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-LAL8 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Air-spaced positive element completing unit I.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -20.187,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-LAH55V (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Strong leading negative element of the variator and inner-focus unit II.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -36.775,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-LAH65V (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Second negative element of unit II.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 20.12,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-TIH53 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Positive member embedded within the net-negative unit II.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -28.973,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-LAH55V (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Rear negative element completing unit II.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -47.414,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-TIH53 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Negative high-dispersion member of positive cemented unit III.",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: 19.34,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-BSM14 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Positive lower-dispersion member supplying the net power of unit III.",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.4,
      focalLengthMm: 28.005,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-NSL36 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Positive member of the weak positive relay unit IV.",
      cemented: "C3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -33.347,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-LAH55V (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Negative member reducing the net power of relay unit IV.",
      cemented: "C3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 25.843,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-TIH6 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Positive high-dispersion member of the transversely shifted IS doublet.",
      cemented: "C4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.70154,
      vd: 41.2,
      focalLengthMm: -16.565,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-BAH27 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Strong negative member making unit V net negative for optical stabilization.",
      cemented: "C4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.72342,
      vd: 38,
      focalLengthMm: 76.153,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-BAH28 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Leading positive element of rear unit VI.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 30.119,
      glass:
        "Unmatched (source spectral reference unspecified; prior L-BAL42 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Primary positive rear element; rear surface 27A is the source asphere. Its manufacturing route is not identified by the patent.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -34.559,
      glass:
        "Unmatched (source spectral reference unspecified; prior S-TIH53 (OHARA) comparison is conditional)",
      indexReferenceNote:
        "US 6,061,180, column 12 defines ni and vi without a spectral line; the retained d-line tracing convention is approximate, and no catalog curve or historical glass identity is established.",
      role: "Terminal negative meniscus completing positive rear unit VI.",
    },
  ],

  surfaces: [
    { label: "1", R: 111.994, d: 2, sd: 30.5, medium: 1 },
    { label: "2", R: 53.844, d: 8, sd: 29.5, medium: 2 },
    { label: "3", R: 459.765, d: 0.2, sd: 28.5 },
    { label: "4", R: 47.062, d: 6.2, sd: 25.5, medium: 3 },
    { label: "5", R: 123.091, sd: 25.5 },
    { label: "6", R: 96.212, d: 1.2, sd: 16.0, medium: 4 },
    { label: "7", R: 14.259, d: 5.8, sd: 12.8, rimExtensionSd: 16 },
    { label: "8", R: -68.032, d: 1.1, sd: 10.25, medium: 5 },
    { label: "9", R: 52.671, d: 0.2, sd: 11.0 },
    { label: "10", R: 24.884, d: 4.6, sd: 11.0, medium: 6 },
    { label: "11", R: -49.424, d: 0.3, sd: 9.5 },
    { label: "12", R: -38.098, d: 1.1, sd: 9.25, medium: 7 },
    { label: "13", R: 67.11, sd: 9.8 },
    { label: "STO", R: "flat" },
    { label: "15", R: 26.756, d: 1, sd: 9.75, medium: 8 },
    { label: "16", R: 15.78, d: 5, sd: 9.75, medium: 9 },
    { label: "17", R: -39.386, sd: 9.75 },
    { label: "18", R: 28.082, d: 3.9, sd: 9.75, medium: 10 },
    { label: "19", R: -28.52, d: 1, sd: 9.75, medium: 11 },
    { label: "20", R: 1182.852, sd: 9.75 },
    { label: "21", R: -51.345, d: 3.2, sd: 10.1, medium: 12 },
    { label: "22", R: -15.219, d: 1, sd: 10.1, medium: 13 },
    { label: "23", R: 50.487, sd: 10.1 },
    { label: "24", R: 101.396, d: 3.5, sd: 15.5, medium: 14 },
    { label: "25", R: -118.885, d: 0.2, sd: 15.5 },
    { label: "26", R: 57.922, d: 7.8, sd: 15.5, medium: 15 },
    {
      label: "27A",
      R: -23.956,
      d: 2,
      sd: 15.5,
      asphere: {
        K: 0,
        A4: 1.29656e-5,
        A6: 1.07517e-8,
        A8: -3.30087e-11,
        A10: 8.80605e-14,
      },
    },
    { label: "28", R: -25.378, d: 1.8, sd: 15.5, medium: 16 },
    { label: "29", R: -197.498, sd: 15.5 },
  ],

  zoom: {
    // Source targets: Numerical Example 1 heading and Figure 2(a/b/c) directly print f/3.60, f/4.36 and f/5.75.
    // These restore the paraxial/derived-iris rule; the patent supplies no physical iris-radius schedule.
    stations: [
      { focalLengthMm: 28.891048, nominalFNumber: 3.6, label: "28mm" },
      { focalLengthMm: 50.004242, nominalFNumber: 4.36 },
      { focalLengthMm: 131.182095, nominalFNumber: 5.75, label: "135mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.5,
    description:
      "Inner focus by complete negative unit II moving objectward; close-focus spacings are a first-order reconstruction constrained to Canon's 0.5 m minimum focus distance.",
  },

  gaps: {
    "5": {
      label: "d5: I-II / Focus",
      values: [
        [2, 0.527369],
        [13.78, 11.381075],
        [33.5, 25.741036],
      ],
    },
    "13": {
      label: "d13: II-STO / Focus",
      values: [
        [11.4, 12.872631],
        [6.97, 9.368925],
        [1.4, 9.158964],
      ],
    },
    STO: {
      label: "d14: STO-III",
      values: [
        [8.9, 8.9],
        [6.29, 6.29],
        [2.34, 2.34],
      ],
    },
    "17": {
      label: "d17: III-IV",
      values: [
        [0.8, 0.8],
        [3.41, 3.41],
        [7.36, 7.36],
      ],
    },
    "20": {
      label: "d20: IV-V",
      values: [
        [1.8, 1.8],
        [3.74, 3.74],
        [5.9, 5.9],
      ],
    },
    "23": {
      label: "d23: V-VI",
      values: [
        [12.5, 12.5],
        [7.95, 7.95],
        [1.84, 1.84],
      ],
    },
    "29": {
      label: "BF",
      values: [
        [40.065651, 40.065651],
        [48.032613, 48.032613],
        [55.933727, 55.933727],
      ],
    },
  },

  aperture: {
    fStops: [3.6, 4, 5.6, 8, 11, 16, 22, 32, 36],
    maxFNumber: 36,
    blades: 6,
  },

  groups: [
    { text: "I +", fromSurface: "1", toSurface: "5" },
    { text: "II − / Focus", fromSurface: "6", toSurface: "13" },
    { text: "III +", fromSurface: "15", toSurface: "17" },
    { text: "IV +", fromSurface: "18", toSurface: "20" },
    { text: "V − / IS", fromSurface: "21", toSurface: "23" },
    { text: "VI +", fromSurface: "24", toSurface: "29" },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "15", toSurface: "17" },
    { text: "C3", fromSurface: "18", toSurface: "20" },
    { text: "C4", fromSurface: "21", toSurface: "23" },
  ],

  layout: { scFill: 0.5, yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
