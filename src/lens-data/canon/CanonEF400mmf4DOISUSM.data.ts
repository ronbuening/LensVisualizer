import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 400mm f/4 DO IS USM                                               ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source prescription: US 2002/0015231 A1, Numerical Example 1 (Hideki Ogawa).           ║
 * ║ Production correlation: Canon EF 400mm f/4 DO IS USM, released December 2001.           ║
 * ║                                                                                          ║
 * ║ SOURCE CORRECTIONS USED BY THE MODEL                                                     ║
 * ║   • r17: A1 prints +87.040 mm; same-application US 6,473,232 B2 and the direct          ║
 * ║     divisional print -87.040 mm. The model uses -87.040 mm.                             ║
 * ║   • r22: A1/B2 print +131.344 mm; direct divisional US 2003/0053212 A1 prints           ║
 * ║     +131.844 mm. Independent EFL/source-precision verification supports +131.844 mm.    ║
 * ║                                                                                          ║
 * ║ MODEL NORMALIZATION                                                                       ║
 * ║   • Patent r28-r29 is a 2.20 mm plane-parallel plate (nd 1.51633, νd 64.1) at the image  ║
 * ║     side, drawn as a plane-parallel plate element with a ray-trace estimated             ║
 * ║     semi-diameter (the patent lists none) and not counted in elementCount; r27 keeps the ║
 * ║     printed d27 = 0.72 mm. The table ends at r29 = ∞ with no d29 or back focus, so the   ║
 * ║     63.3369041 mm plate-to-image air is derived from the file's paraxial image plane:    ║
 * ║     0.72 + 2.20/1.51633 + 63.3369041 = 65.507775640 mm air-equivalent r27-to-image       ║
 * ║     spacing. Association with the production lens's 52 mm drop-in filter is a modeling   ║
 * ║     inference, not a patent label.                                                       ║
 * ║   • The patent macro table therefore contributes 15 modeled refractive elements in      ║
 * ║     11 active air-separated groups. Canon markets the production lens as 17 elements    ║
 * ║     in 13 groups; the DOE microstructure/filter count cannot be mapped one-for-one.     ║
 * ║   • No prescription scaling is applied.                                                 ║
 * ║                                                                                          ║
 * ║ DIFFRACTIVE SURFACE                                                                       ║
 * ║   • r2 carries the patent phase polynomial C1=-4.22716e-5 mm^-1, C2=+4.71244e-10       ║
 * ║     mm^-3, represented as radial powers 2 and 4.                                        ║
 * ║   • The patent does not numerically print λ0 for Example 1. referenceWavelengthNm       ║
 * ║     uses 587.6 nm as a disclosed d-line modeling inference; the coefficients are        ║
 * ║     unchanged from the patent.                                                          ║
 * ║                                                                                          ║
 * ║ FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION                                                 ║
 * ║   Canon specifies inner focusing and 3.5 m MFD, but Example 1 provides no finite-focus  ║
 * ║   spacing table or moving-group law. No var gaps are invented.                          ║
 * ║                                                                                          ║
 * ║ SEMI-DIAMETERS                                                                            ║
 * ║   The patent does not tabulate clear semi-diameters. Values below are modeling          ║
 * ║   estimates from the f/4.12 pupil/ray envelope, Fig. 1 optical-section proportions,     ║
 * ║   Canon's 128 mm maximum barrel diameter, and independent edge/rim/cross-gap checks.    ║
 * ║   The August 2026 600-dpi review retained the pupil-critical DO pair and tightened the   ║
 * ║   L3/L5-L7/rear-unit rims to the optical outlines rather than the surrounding ray ink.   ║
 * ║   They are not presented as patent-published dimensions.                                ║
 * ║                                                                                          ║
 * ║ GLASS DATA                                                                                 ║
 * ║   Glass strings are coordinate-compatible classes/equivalents, not claims of Canon's    ║
 * ║   melt vendor. Example 1 publishes nd/νd only; nC, nF, ng, and dPgF are therefore not   ║
 * ║   authored without source-defensible line data.                                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-400mm-f4-do-is-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/4 DO IS USM",
  subtitle: "US 2002/0015231 A1 Example 1 — corrected family-source model",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "US 2002/0015231 A1 — Example 1",
      "15 powered elements / 11 active groups + rear plate",
      "Design f = 392.025 mm, F/4.12",
      "2ω = 6.32°",
      "r2 radial-polynomial DO phase",
    ],
    elementCount: 15,
    groupCount: 11,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 400, design: 392.0252037706986 },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2002/0015231 A1",
    patentYear: 2002,
    authors: ["Hideki Ogawa"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.56384,
      vd: 60.7,
      focalLengthMm: 316.28514596353614,
      glass: "S-BAL41-equivalent class (564607; vendor unproven)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 372.42409773436736,
      glass: "S-BSL7-equivalent class (516641; vendor unproven)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.9,
      focalLengthMm: 231.92404480834531,
      glass: "S-NSL3-equivalent class (518590; vendor unproven)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.3,
      focalLengthMm: -141.84105203269104,
      glass: "S-LAM7-equivalent class (750353; vendor unproven)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 202.33631758992254,
      glass: "S-FSL5-equivalent class (487702; vendor unproven)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.1,
      focalLengthMm: -328.9903060843815,
      glass: "S-TIM25-equivalent class (673321; vendor unproven)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: -136.25968443456784,
      glass: "Fluorite (CaF2) class",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -70.50627738595921,
      glass: "805254 class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 51.46802125959051,
      glass: "S-FSL5-equivalent class (487702; vendor unproven)",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.5,
      focalLengthMm: 42.349601965079444,
      glass: "762265 class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -25.858934903832207,
      glass: "804465/804466 class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -58.85570310158505,
      glass: "804465/804466 class (vendor unresolved)",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.6398,
      vd: 34.5,
      focalLengthMm: 35.444940733735066,
      glass: "S-TIM27 / 640345 class (vendor unproven)",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -48.01581954863957,
      glass: "804465/804466 class (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 91.12018098917984,
      glass: "S-BSL7-equivalent class (516641; vendor unproven)",
    },
    {
      id: 16,
      name: "F",
      label: "Rear plate F",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      role: "Plane-parallel plate at the image side of the patent prescription (US 2002/0015231 A1, Numerical Example 1 r28–r29); identifying it with the production drop-in filter is a modeling inference. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 115.683, d: 9.4, sd: 54.5, medium: 1 },
    {
      label: "2",
      R: 319.64,
      d: 9.0,
      sd: 54.5,
      medium: 2,
      diffractive: {
        kind: "radial-polynomial",
        referenceWavelengthNm: 587.6,
        diffractionOrder: 1,
        terms: [
          { radialPower: 2, coefficient: -4.22716e-5 },
          { radialPower: 4, coefficient: 4.71244e-10 },
        ],
      },
    },
    { label: "3", R: -478.031, d: 16.76, sd: 54.5 },
    { label: "4", R: 96.413, d: 8.6, sd: 39.0, medium: 3 },
    { label: "5", R: 472.518, d: 3.11, sd: 39.0 },
    { label: "6", R: -495.228, d: 3.6, sd: 36.6, medium: 4 },
    { label: "7", R: 135.791, d: 4.08, sd: 36.6 },
    { label: "8", R: 71.132, d: 8.4, sd: 34.0, medium: 5 },
    { label: "9", R: 245.218, d: 0.8, sd: 34.0 },
    { label: "10", R: 51.628, d: 5.3, sd: 31.0, medium: 6 },
    { label: "11", R: 40.134, d: 39.15, sd: 31.0 },
    { label: "12", R: 1141.04, d: 1.8, sd: 20.0, medium: 7 },
    { label: "13", R: 56.18, d: 22.84, sd: 20.0 },
    { label: "STO", R: "flat", d: 10.5 },
    { label: "15", R: 90.269, d: 1.3, sd: 12.0, medium: 8 },
    { label: "16", R: 34.628, d: 4.7, sd: 12.0, medium: 9 },
    { label: "17", R: -87.04, d: 0.5, sd: 12.0 },
    { label: "18", R: 68.906, d: 3.85, sd: 12.0, medium: 10 },
    { label: "19", R: -59.203, d: 1.3, sd: 12.0, medium: 11 },
    { label: "20", R: 32.357, d: 3.41, sd: 12.0 },
    { label: "21", R: -74.136, d: 1.3, sd: 11.5, medium: 12 },
    { label: "22", R: 131.844, d: 1.53, sd: 11.5 },
    { label: "23", R: 75.659, d: 6.2, sd: 12.5, medium: 13 },
    { label: "24", R: -31.349, d: 1.4, sd: 12.5, medium: 14 },
    { label: "25", R: -170.115, d: 14.65, sd: 12.5 },
    { label: "26", R: 82.731, d: 6.6, sd: 17.0, medium: 15 },
    { label: "27", R: -106.118, d: 0.72, sd: 17.0 }, // printed d27 to the r28–r29 plate
    // Rear plate F (US 2002/0015231 A1, Numerical Example 1 r28–r29), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: no d29/back focus printed; gap after derived from the paraxial image plane
    { label: "28", R: "flat", d: 2.2, sd: 18.5, medium: 16 },
    { label: "29", R: "flat", d: 63.3369041, sd: 18.5 }, // rear plate → image plane
  ],

  focus: {
    closeFocusM: 3.5,
    description:
      "Production lens: inner focusing with USM, 3.5 m MFD. Patent Example 1 publishes only the infinity prescription; no internal focus movement is reconstructed (NO_INTERNAL_RECONSTRUCTION).",
  },

  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [{ text: "DO", fromSurface: "1", toSurface: "3" }],
  doublets: [],

  layout: { yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
