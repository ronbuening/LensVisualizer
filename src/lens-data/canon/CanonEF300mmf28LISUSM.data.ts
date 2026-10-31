import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 300mm f/2.8L IS USM — US 6,115,188 A, Numerical Example 1.
 * Native source prescription: PDF pp. 68–69 (cols. 12–13), Fig. 1: PDF p. 3, sheet 1. All source R/d, stop position,
 * source filter and reconstructed L2 focus trajectories remain unchanged. Existing 59.3221048 mm filter-to-image
 * distance stays independently derived because printed D29 = 0.00 is not a physical back focus.
 *
 * Original Ni/νi definitions do not identify their spectral reference. All 16 source media, including filter FL,
 * remain Unmatched with explicit approximate d-line tracing. Historical material, supplier and melt are unresolved.
 * The production fluorite/UD association remains qualified correlation; it does not establish this source's wavelength.
 * No per-lens line index, partial-dispersion override or APD evidence is published or invented.
 *
 * No numerical clear diameters are printed. Inferred heights follow native Fig. 1 at about 5.35 px/mm with practical
 * uncertainty ±0.8 mm. S10 has a resolved rear shoulder; S20/21 retain gap-constrained clear caps and add the resolved
 * opposed outer shoulders. No opaque bonded land, resin wing or inferred cut is added. Existing gapSagFrac 0.96
 * remains unchanged for the thin R4–R5 and R20–R21 gaps; it is not increased to obtain a passing fit.
 *
 * Selected-source count is 16 elements / 12 groups including required FL, distinct from the 17/13 production
 * count with protection glass that is not tabulated by Example 1. No front plate is invented.
 * Table 1 condition (5), 0.828, does not follow literal f/f3 = 1.152326 and remains unresolved in source.errata.
 * The certificate does not alter Example 1. IS remains a centered model: no source physical actuator stroke is encoded.
 * The source's 0.3-degree displaced-image plots are not a production lateral-travel specification.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-300mm-f28l-is-usm",
  maker: "Canon",
  name: "CANON EF 300mm f/2.8 L IS USM",
  subtitle: "US 6,115,188 A — Numerical Example 1; production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 source elements / 12 groups including required FL",
      "MODELED EFL ≈ 293.600 mm",
      "MODELED F/2.9",
      "PATENT 2ω = 8.4°",
      "INNER FOCUS / IS",
    ],
    elementCount: 16,
    groupCount: 12,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 300, design: 293.58 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 6,115,188 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2000,
    authors: ["Akihiro Nishio", "Hideki Ogawa", "Makoto Misaka"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Table 1, Numerical Example 1 (PDF p. 72, printed col. 19), lists condition (5) f/f3=0.828, while literal R15–R27 give f3=254.788656 mm and f/f3=1.152326 using the model's 293.599594 mm EFL. Source equations (5)/(5a), PDF pp. 67–68, identify the same f/f3 convention. The certificate of correction (PDF pp. 82–83) does not amend this factor or an Example 1 prescription row. Source R/d is retained; the cause is unresolved and no coefficient is tuned to fit the table.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 193.47696,
      glass:
        "K-PFK80 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive front collector in L1; correlated with one of the production lens's two UD elements.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 218.62316,
      glass:
        "K-PFK80 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Second positive low-dispersion element in L1; correlated with the other production UD element.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.785896,
      vd: 44.2,
      focalLengthMm: -114.74478,
      glass:
        "S-LAH51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative correction element in the positive L1 front unit.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 158.49796,
      glass:
        "CaF2 (fluorite spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive L1 element; the production lens's fluorite element provides the manufacturer-backed material correlation.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -466.48479,
      glass:
        "S-FSL5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Weak negative rear element of L1 preceding the inner-focus unit.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.805181,
      vd: 25.4,
      focalLengthMm: 125.83165,
      glass:
        "S-TIH6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive component of the cemented negative L2 focusing doublet.",
      cemented: "L2",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -59.90749,
      glass:
        "TAFD5G (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative component that makes the cemented L2 group net negative for inner focusing.",
      cemented: "L2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: -76.187,
      glass:
        "PBH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative component of the net-positive L31 cemented subunit.",
      cemented: "L31",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.719995,
      vd: 50.2,
      focalLengthMm: 43.10923,
      glass:
        "S-LAL10 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strong positive component of L31, immediately behind the aperture stop.",
      cemented: "L31",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.846658,
      vd: 23.9,
      focalLengthMm: 66.28386,
      glass:
        "PBH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive component of the cemented pair within the transversely movable L32 IS subunit.",
      cemented: "L32a",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.603112,
      vd: 60.6,
      focalLengthMm: -43.96039,
      glass:
        "N-SK14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative component of the L32 cemented pair and front boundary of the patent's biconvex air lens.",
      cemented: "L32a",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: -45.60909,
      glass:
        "E-LASF016 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Second negative element of L32 and rear boundary of the biconvex air lens.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.719995,
      vd: 50.2,
      focalLengthMm: 37.81764,
      glass:
        "S-LAL10 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strong positive component at the front of the positive L33 rear subunit.",
      cemented: "L33a",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -64.09925,
      glass:
        "J-LASF010 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative cemented partner within L33.",
      cemented: "L33a",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Plano-Convex Positive",
      nd: 1.696797,
      vd: 55.5,
      focalLengthMm: 117.32398,
      glass:
        "S-LAL14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Final positive element of L33; its plane rear surface precedes the 8.00 mm air gap to the rear filter FL.",
    },
    {
      id: 16,
      name: "FL",
      label: "Drop-in filter FL",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Plane-parallel filter plate of the patent prescription (US 6,115,188 A, Numerical Example 1 R28–R29), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Its 25 mm inferred semi-diameter follows native Fig. 1; the numerical table lists none. Included in the selected-source 16-element / 12-group count; the production 17/13 count additionally includes protection glass absent from Example 1 numerical rows.",
    },
  ],

  surfaces: [
    { label: "1", R: 130.154, d: 16.56, sd: 51.5, medium: 1 },
    { label: "2", R: -352.589, d: 14.11, sd: 51.5 },
    { label: "3", R: 96.004, d: 11.02, sd: 44.0, medium: 2 },
    { label: "4", R: 793.095, d: 4.07, sd: 44.0 },
    { label: "5", R: -311.697, d: 4.0, sd: 41.7, medium: 3 },
    { label: "6", R: 127.604, d: 0.15, sd: 42.0 },
    { label: "7", R: 79.467, d: 13.88, sd: 39.0, medium: 4 },
    { label: "8", R: -483.755, d: 0.17, sd: 39.0 },
    { label: "9", R: 51.083, d: 5.9, sd: 33.5, medium: 5 },
    { label: "10", R: 40.134, sd: 30.0, rimExtensionSd: 33.5 },
    { label: "11", R: 1686.885, d: 4.61, sd: 24.5, medium: 6 },
    { label: "12", R: -107.66, d: 2.2, sd: 24.5, medium: 7 },
    { label: "13", R: 94.265, sd: 24.5 },
    { label: "STO", R: "flat", d: 8.51 },
    { label: "15", R: 79.49, d: 1.8, sd: 17.5, medium: 8 },
    { label: "16", R: 35.239, d: 7.2, sd: 17.5, medium: 9 },
    { label: "17", R: -238.114, d: 0.95, sd: 17.5 },
    { label: "18", R: 129.72, d: 4.25, sd: 17.0, medium: 10 },
    { label: "19", R: -97.425, d: 1.65, sd: 17.0, medium: 11 },
    { label: "20", R: 36.658, d: 5.52, sd: 15.85, rimExtensionSd: 17.0 },
    { label: "21", R: -76.051, d: 1.6, sd: 15.85, rimExtensionSd: 17.0, medium: 12 },
    { label: "22", R: 66.247, d: 2.82, sd: 17.0 },
    { label: "23", R: 78.646, d: 9.3, sd: 19.0, medium: 13 },
    { label: "24", R: -39.586, d: 1.8, sd: 19.0, medium: 14 },
    { label: "25", R: -155.699, d: 4.0, sd: 19.0 },
    { label: "26", R: 81.751, d: 5.5, sd: 21.0, medium: 15 },
    { label: "27", R: "flat", d: 8.0, sd: 21.0 },
    // Drop-in filter FL (US 6,115,188 A, Numerical Example 1 R28–R29), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: D29 = 0.00 printed; gap after derived from the paraxial image plane
    { label: "28", R: "flat", d: 2.0, sd: 25.0, medium: 16 },
    { label: "29", R: "flat", d: 59.3221048, sd: 25.0 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 2.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent L2 moves imageward; close endpoint solves a rigid 14.743206096 mm L2 translation to Canon's marketed 2.5 m MFD, conserving D10 + D13 = 67.11 mm. No published close-focus spacing table exists for Example 1.",
  },

  gaps: {
    "10": { label: "D10", values: [[26.71, 41.453206096]] },
    "13": { label: "D13", values: [[40.4, 25.656793904]] },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "10" },
    { text: "L2 FOCUS", fromSurface: "11", toSurface: "13" },
    { text: "L3", fromSurface: "15", toSurface: "27" },
  ],
  doublets: [
    { text: "L2", fromSurface: "11", toSurface: "13" },
    { text: "L31", fromSurface: "15", toSurface: "17" },
    { text: "L32 IS", fromSurface: "18", toSurface: "22" },
    { text: "L33", fromSurface: "23", toSurface: "27" },
  ],

  layout: { yScFill: 0.35 },

  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
