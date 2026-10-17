import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-I NIKKOR 600mm f/4 D IF-ED                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP H04-238311 A, Example 5 (Nikon Corporation / Susumu Sato).  ║
 * ║ Production correlation: Nikon AF-I Nikkor 600mm f/4D IF-ED.               ║
 * ║ 9 active glass elements / 7 air-separated groups; all spherical.           ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION.                                  ║
 * ║ The patent publishes infinity and β=-0.13 states for translation of the    ║
 * ║ negative G2 group. The UI close endpoint instead uses a one-DOF solution   ║
 * ║ constrained to that mechanism at Nikon's 6.0 m image-plane-referenced MFD: ║
 * ║ d11 = 18.4700148248 mm, d16 = 6.6187851752 mm. The invariant               ║
 * ║ d11 + d16 = 25.0888 mm is preserved.                                      ║
 * ║                                                                            ║
 * ║ Source corrections:                                                        ║
 * ║ - The focus table's d20 = 93.3069 mm is a source error; independent focus  ║
 * ║   tracing requires 135.3064576 mm, consistent with corrected 135.3069 mm. ║
 * ║ - Example-5 f1 = 197.75 and Φ = 109.8 are stale copy-through values; they  ║
 * ║   are not used in this prescription.                                       ║
 * ║                                                                            ║
 * ║ Plane plates: patent surfaces 1-2 (front protective plate) are omitted;    ║
 * ║ their translation is normalized to air. The rear fixed filter F (surfaces  ║
 * ║ 19-20: 2.00 mm, nd 1.51680, vd 64.1) is drawn as a plane-parallel plate    ║
 * ║ element and traced by every analysis; its semi-diameter is a ray-trace     ║
 * ║ estimate (the source lists none) and it is not counted in `elementCount`.  ║
 * ║ STO keeps the physical 42.9 mm to F (65.20 - 22.3); F to image             ║
 * ║ is 135.3069 mm, the corrected focus-table d20 (constant table: 135.31).    ║
 * ║                                                                            ║
 * ║ Stop placement: the patent numerically gives 65.20 mm from surface 18 to   ║
 * ║ the rear filter but does not tabulate S. Figure 9 places S between G3 and  ║
 * ║ F. A local pixel calibration against that 65.20 mm interval gives          ║
 * ║ surface18→STO ≈ 22.3 mm. The stop radius is derived from the design        ║
 * ║ f-number, f/4.11.                                                          ║
 * ║                                                                            ║
 * ║ Semi-diameters: not tabulated by the patent. Values are inferred from the  ║
 * ║ f/4.11 marginal ray, 60% field ray containment, Figure-9 proportions,      ║
 * ║ edge-thickness limits, rim slope, cross-gap clearance, and focus endpoints.║
 * ║                                                                            ║
 * ║ Spectral data: the patent publishes only nd/νd. nC, nF, ng, and dPgF are   ║
 * ║ intentionally not authored because exact historical glass identities and   ║
 * ║ line-index/partial-dispersion data are not source-defensible.              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-af-i-nikkor-600mm-f4d-if-ed",
  maker: "Nikon",
  name: "NIKON AF-I NIKKOR 600mm f/4 D IF-ED",
  subtitle: "JP H04-238311 A Example 5 — constrained 6 m production-focus reconstruction",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 7 GROUPS",
      "MARKETED 600mm f/4",
      "DESIGN f = 587.9998 mm",
      "DESIGN F/4.11",
      "2ω ≈ 4.208°",
      "INNER FOCUS",
      "ALL SPHERICAL",
    ],
    elementCount: 9,
    groupCount: 7,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: 600, design: 587.9997827153087 },
    fNumber: { marketing: 4, design: 4.11 },
  },

  source: {
    patentNumber: "JP H04-238311 A",
    patentYear: 1992,
    authors: ["Susumu Sato"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "G11 Element 1",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 365.4359029248421,
      glass: "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      role: "First positive collector in G11.",
    },
    {
      id: 2,
      name: "L12",
      label: "G11 Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 324.5108131104215,
      glass: "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      role: "Second positive collector in G11.",
    },
    {
      id: 3,
      name: "L13",
      label: "G11 Element 3",
      type: "Biconcave Negative",
      nd: 1.75692,
      vd: 31.7,
      focalLengthMm: -386.8776830008698,
      glass: "E-LAF11 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Negative corrector completing the front G11 subgroup.",
    },
    {
      id: 4,
      name: "L14",
      label: "G12 Negative Member",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 54,
      focalLengthMm: -141.36497376349675,
      glass: "J-LAK8 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Negative-power front member of the weak positive G12 cemented pair.",
      cemented: "G12",
    },
    {
      id: 5,
      name: "L15",
      label: "G12 Positive Member",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: 120.23059517463462,
      glass: "J-PSKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Positive rear member of the G12 cemented pair.",
      cemented: "G12",
    },
    {
      id: 6,
      name: "L21",
      label: "G2 Cemented Pair Front",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 151.91731684889567,
      glass: "SF6 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Front member of the negative inner-focus G2 cemented pair.",
      cemented: "G2a",
    },
    {
      id: 7,
      name: "L22",
      label: "G2 Cemented Pair Rear",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 54,
      focalLengthMm: -80.85716359442007,
      glass: "J-LAK8 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Negative rear member of the G2 cemented pair.",
      cemented: "G2a",
    },
    {
      id: 8,
      name: "L23",
      label: "G2 Separated Negative",
      type: "Biconcave Negative",
      nd: 1.6935,
      vd: 53.8,
      focalLengthMm: -172.9338659086472,
      glass: "LAC13 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Separated negative member completing the translating G2 focus group.",
    },
    {
      id: 9,
      name: "L31",
      label: "G3 Element",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      focalLengthMm: 204.0001522615934,
      glass: "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      role: "Fixed positive rear group G3.",
    },
    {
      id: 10,
      name: "F",
      label: "Slip-in filter F",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      glass: "J-BK7A",
      role: "Plane-parallel filter plate of the patent prescription (JP H04-238311 A, Example 5 surfaces 19–20), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
  ],

  surfaces: [
    { label: "3", R: 201.438, d: 18, sd: 79, medium: 1 },
    { label: "4", R: -1821.902, d: 0.9, sd: 78.5 },
    { label: "5", R: 201.189, d: 19, sd: 76.5, medium: 2 },
    { label: "6", R: -794.165, d: 6.6, sd: 75 },
    { label: "7", R: -627.182, d: 7, sd: 70.5, medium: 3 },
    { label: "8", R: 551.955, d: 103.43, sd: 69 },
    { label: "9", R: 101.17, d: 5, sd: 39.5, medium: 4 },
    { label: "10", R: 49.452, d: 13, sd: 38.5, medium: 5 },
    { label: "11", R: 145.498, sd: 36.5 },
    { label: "12", R: -90000, d: 7, sd: 30, medium: 6 },
    { label: "13", R: -122.159, d: 3.3, sd: 29.5, medium: 7 },
    { label: "14", R: 110.402, d: 6.9, sd: 29 },
    { label: "15", R: -1527.933, d: 3.3, sd: 27.5, medium: 8 },
    { label: "16", R: 130.26, sd: 27 },
    { label: "17", R: 218.27, d: 7, sd: 27, medium: 9 },
    { label: "18", R: -187.896, d: 22.3, sd: 26.5 },
    // STO -> rear filter F: patent 18->F 65.20 mm minus the inferred 22.3 mm 18->STO
    { label: "STO", R: "flat", d: 42.9 },
    // Slip-in filter F (JP H04-238311 A, Example 5 surfaces 19–20), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: corrected focus-table d20 (the constant table prints 135.31)
    { label: "19", R: "flat", d: 2, sd: 25.5, medium: 10 },
    { label: "20", R: "flat", d: 135.3069, sd: 25.5 }, // slip-in filter → image plane
  ],

  focus: {
    closeFocusM: 6,
    description:
      "CONSTRAINED_RECONSTRUCTION: negative G2 translates imageward by 11.2563148248 mm from infinity to the Nikon 6.0 m MFD, with d11+d16 fixed at 25.0888 mm; the patent-published β=-0.13 state is retained only in the audit.",
  },

  gaps: {
    "11": { label: "D11", values: [[7.2137, 18.47001482476355]] },
    "16": { label: "D16", values: [[17.8751, 6.61878517523645]] },
  },

  aperture: { nominalFNumber: 4.11, fStops: [4.11, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1", fromSurface: "3", toSurface: "11" },
    { text: "G2 (FOCUS)", fromSurface: "12", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "18" },
  ],
  doublets: [
    { text: "G12", fromSurface: "9", toSurface: "11" },
    { text: "G2a", fromSurface: "12", toSurface: "14" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
