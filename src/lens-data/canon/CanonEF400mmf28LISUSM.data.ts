import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Source: US 6,115,188 A, Numerical Example 25, PDF p. 79 col. 34; Fig. 88, PDF p. 59.
 * Original source and shape/glass review: 2026-10-30. Native 2320×3408 at 300 ppi; about
 * 6.14 px/mm in the section, practical ±0.8 mm rim uncertainty. Enlargements add no resolution.
 * All 31 modeled source R/d rows and all 17 literal N/nu pairs are preserved, including HG and FL.
 * The source defines Ni/nu-i without naming a material spectral reference (PDF p. 78 col. 32).
 * Every medium is unresolved; approximate d-reference tracing is not proof of wavelength or chemistry.
 * No catalog curve, per-lens spectral override, or APD claim is active. Product fluorite/UD associations
 * remain qualified correlations, not a source bill of materials or historical supplier/melt identification.
 *
 * The model has 17 elements / 13 groups including source HG and required drawn FL. The inactive FC is omitted;
 * D31+D32=54.23 mm remains behind FL. Existing D29=15.016884094 mm retains the documented +0.016884094 mm
 * paraxial-focus normalization of printed 15.00 mm. Source f = 392.15 mm, F/2.9 remains separate from 400 mm f/2.8 marketing.
 *
 * Figure heights and five resolved concave shoulders replace oversized inferred rims. rimExtensionSd
 * preserves each optical cap; no bonded-interface land, inferred cut or unsupported compound blank is added.
 * The pre-existing gapSagFrac 0.97 remains unchanged: S6–S7 retain 0.097669 mm physical air at the 55.5 mm rim.
 * R/d, stops, aperture rule and L2 focus controls are unchanged. Filling the close-focus pupil would require
 * unsupported/crossing rims: 49/101 sampled reconstructed focus states retain axial outer-ring clipping,
 * at S7 or the figure-constrained S5. All sampled chiefs clear; infinity aperture/field checks pass.
 * Source fidelity, sampled runtime clearance and production correlation remain separate conclusions.
 * Only centered IS is encoded; no numerical transverse actuator travel or converter clearance is established.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-400mm-f28l-is-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/2.8 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 25; production correlation to EF 400mm f/2.8 L IS USM",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "400mm f/2.8 (marketed)",
      "Patent f = 392.15 mm, F/2.9",
      "17 elements / 13 groups including HG and required FL",
      "3.0 m minimum focus",
      "1 fluorite + 2 UD elements (manufacturer correlation)",
    ],
    elementCount: 17,
    groupCount: 13,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 400, design: 392.15 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 6,115,188 A",
    example: { label: "Numerical Example 25", id: "25" },
    patentYear: 2000,
    authors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "HG",
      label: "Protection glass",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front protection glass retained from the patent and Canon's production element count.",
    },
    {
      id: 2,
      name: "L1a",
      label: "L1a positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 303.186311,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Single positive front subunit; one of the two production-correlated UD-class elements.",
    },
    {
      id: 3,
      name: "L1b-P",
      label: "L1b positive",
      type: "Plano-Convex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 227.594019,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive member of the negative-power L1b middle subunit; second production-correlated UD-class element.",
    },
    {
      id: 4,
      name: "L1b-N",
      label: "L1b negative",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -165.488385,
      glass:
        "TAFD5G (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative member completing the net-negative L1b middle subunit.",
    },
    {
      id: 5,
      name: "L1c-P",
      label: "L1c positive",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 212.185301,
      glass:
        "CaF2 (fluorite spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "High-Abbe positive element in L1c; the production fluorite association remains a correlation, with source wavelength and chemistry unresolved.",
    },
    {
      id: 6,
      name: "L1c-N",
      label: "L1c negative",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: -462.297887,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative meniscus completing the net-positive L1c rear subunit.",
    },
    {
      id: 7,
      name: "L2-P",
      label: "L2 positive",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.4,
      focalLengthMm: 194.582241,
      glass:
        "S-TIH6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive component of the cemented inner-focus group L2.",
      cemented: "L2",
    },
    {
      id: 8,
      name: "L2-N",
      label: "L2 negative",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -80.042831,
      glass:
        "H-ZLaF50D (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative component of the net-negative cemented inner-focus group L2.",
      cemented: "L2",
    },
    {
      id: 9,
      name: "L3a-N",
      label: "L3a negative",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: -93.365654,
      glass:
        "PBH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative first component of the cemented, net-positive L3a subunit.",
      cemented: "L3a",
    },
    {
      id: 10,
      name: "L3a-P",
      label: "L3a positive",
      type: "Biconvex Positive",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: 52.93004,
      glass:
        "E-LASF016 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive second component of L3a, converging the beam before the stabilization subunit.",
      cemented: "L3a",
    },
    {
      id: 11,
      name: "L3b-P",
      label: "L3b positive",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: 72.40268,
      glass:
        "PBH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive first component of the transversely movable L3b image-stabilization subunit.",
      cemented: "L3b-1",
    },
    {
      id: 12,
      name: "L3b-N1",
      label: "L3b negative 1",
      type: "Biconcave Negative",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: -53.607318,
      glass:
        "S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative cemented partner in the first L3b pair.",
      cemented: "L3b-1",
    },
    {
      id: 13,
      name: "L3b-N2",
      label: "L3b negative 2",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -53.979361,
      glass:
        "H-ZLaF50D (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Separate negative element after the strongly curved L3b air lens; completes the net-negative IS subunit.",
    },
    {
      id: 14,
      name: "L3c-P1",
      label: "L3c positive 1",
      type: "Biconvex Positive",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: 117.502293,
      glass:
        "S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "First positive element of the rear L3c subunit.",
    },
    {
      id: 15,
      name: "L3c-P2",
      label: "L3c positive 2",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.3,
      focalLengthMm: 53.972822,
      glass:
        "S-LAL12 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive component of the final cemented pair in L3c.",
      cemented: "L3c-2",
    },
    {
      id: 16,
      name: "L3c-N",
      label: "L3c negative",
      type: "Biconcave Negative",
      nd: 1.882997,
      vd: 40.8,
      focalLengthMm: -80.89395,
      glass:
        "S-LAH58 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative partner of the final cemented pair; the pair remains net positive within L3c.",
      cemented: "L3c-2",
    },
    {
      id: 17,
      name: "FL",
      label: "Drop-in filter FL",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Plane-parallel filter plate of the patent prescription (US 6,115,188 A, Numerical Example 25 surfaces R30–R31), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is inferred from original Fig. 88; the numerical table lists none. Included in elementCount with source HG, matching the selected 17-media / 13-group source configuration and retained maker count.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: "flat", d: 6.0, sd: 69, medium: 1 },
    { label: "2", R: "flat", d: 1.5, sd: 69 },
    { label: "3", R: 231.603, d: 19.3, sd: 68.1, medium: 2 },
    { label: "4", R: -419.344, d: 22.34, sd: 68.1 },
    { label: "5", R: 113.114, d: 19.2, sd: 57.5, medium: 3 },
    { label: "6", R: "flat", d: 2.68, sd: 57.5 },
    { label: "7", R: -597.7, d: 6.25, sd: 55.5, medium: 4 },
    { label: "8", R: 180.537, d: 10.24, sd: 52.0, rimExtensionSd: 55.5 },
    { label: "9", R: 94.288, d: 17.8, sd: 49.5, medium: 5 },
    { label: "10", R: -3674.804, d: 1.4, sd: 49.5 },
    { label: "11", R: 64.7, d: 7.3, sd: 41.4, medium: 6 },
    { label: "12", R: 48.947, sd: 36.5, rimExtensionSd: 41.4 },
    { label: "13", R: 5483.964, d: 4.7, sd: 33, medium: 7 },
    { label: "14", R: -161.22, d: 3.2, sd: 33, medium: 8 },
    { label: "15", R: 108.057, sd: 30.8, rimExtensionSd: 33 },
    { label: "STO", R: "flat", d: 9.94 },
    { label: "17", R: 125.228, d: 1.8, sd: 20, medium: 9 },
    { label: "18", R: 48.14, d: 6.5, sd: 20, medium: 10 },
    { label: "19", R: -255.466, d: 4.62, sd: 20 },
    { label: "20", R: 76.097, d: 4.1, sd: 18.8, medium: 11 },
    { label: "21", R: -307.47, d: 1.7, sd: 18.8, medium: 12 },
    { label: "22", R: 37.546, d: 5.65, sd: 16.8, rimExtensionSd: 18.8 },
    { label: "23", R: -133.531, d: 1.8, sd: 16.8, rimExtensionSd: 17.8, medium: 13 },
    { label: "24", R: 64.683, d: 2.85, sd: 17.8 },
    { label: "25", R: 86.153, d: 5.0, sd: 20, medium: 14 },
    { label: "26", R: -476.151, d: 0.2, sd: 20 },
    { label: "27", R: 55.777, d: 9.7, sd: 20, medium: 15 },
    { label: "28", R: -98.88, d: 1.8, sd: 20, medium: 16 },
    { label: "29", R: 259.489, d: 15.016884094, sd: 20 },
    // Drop-in filter FL (US 6,115,188 A, Numerical Example 25 surfaces R30–R31), drawn as a plane-parallel plate.
    // Its sd follows original Fig. 88; the numerical table lists no clear aperture.
    // Gap to the image: FC plane R32 omitted; D31 15.28 to the inactive FC plane + D32 38.95 to IP
    { label: "30", R: "flat", d: 2.2, sd: 25, medium: 17 },
    { label: "31", R: "flat", d: 54.23, sd: 25 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 3.0,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent-defined cemented L2 translates imageward. Canon's 3.0 m focal-plane MFD solves D12 = 24.36 + δ and D15 = 98.83 − δ with δ = 18.794827332 mm; D12 + D15 stays 123.19 mm. Rear drop-in filter FL is a drawn plane-parallel element (FC omitted); R29→FL is 15.016884094 mm at infinity (printed 15.00 plus the +0.016884094 mm paraxial-focus normalization).",
  },

  gaps: {
    "12": { label: "D12 / pre-L2", values: [[24.36, 43.154827332]] },
    "15": { label: "D15 / post-L2", values: [[98.83, 80.035172668]] },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "HG", fromSurface: "1", toSurface: "2" },
    { text: "L1", fromSurface: "3", toSurface: "12" },
    { text: "L2 / FOCUS", fromSurface: "13", toSurface: "15" },
    { text: "L3", fromSurface: "17", toSurface: "29" },
  ],
  doublets: [
    { text: "L1a", fromSurface: "3", toSurface: "4" },
    { text: "L1b", fromSurface: "5", toSurface: "8" },
    { text: "L1c", fromSurface: "9", toSurface: "12" },
    { text: "L2", fromSurface: "13", toSurface: "15" },
    { text: "L3a", fromSurface: "17", toSurface: "19" },
    { text: "L3b IS", fromSurface: "20", toSurface: "24" },
    { text: "L3c", fromSurface: "25", toSurface: "29" },
  ],

  layout: { yScFill: 0.42 },

  checks: {
    gapSagFrac: 0.97, // R6 / R7 (L1b-P rear, L1b-N front) nearly meet at the 55.5 mm rim: 0.098 mm of air remains
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
