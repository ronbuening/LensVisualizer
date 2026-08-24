import type { LensDataInput } from "../../types/optics.js";

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
 * ║   • Patent r28-r29 is a 2.20 mm plane-parallel nd=1.51633 plate at the image side.      ║
 * ║     It is omitted under the project filter/cover-plate policy. Association with the     ║
 * ║     production lens's 52 mm drop-in filter is a modeling inference, not a patent label. ║
 * ║     Its translation is preserved with a 65.507775640 mm air-equivalent rear spacing.   ║
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
  key: "canon-ef-400mm-f4-do-is-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/4 DO IS USM",
  subtitle: "US 2002/0015231 A1 Example 1 — corrected family-source model",
  specs: [
    "US 2002/0015231 A1 — Example 1",
    "15 modeled elements / 11 active groups",
    "Design f = 392.025 mm, F/4.12",
    "2ω = 6.32°",
    "r2 radial-polynomial DO phase",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 392.0252037706986,
  apertureMarketing: 4,
  apertureDesign: 4.12,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2002/0015231 A1",
  patentAuthors: ["Hideki Ogawa"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2002,
  elementCount: 15,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.56384,
      vd: 60.7,
      fl: 316.28514596353614,
      glass: "S-BAL41-equivalent class (564607; vendor unproven)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      fl: 372.42409773436736,
      glass: "S-BSL7-equivalent class (516641; vendor unproven)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.9,
      fl: 231.92404480834531,
      glass: "S-NSL3-equivalent class (518590; vendor unproven)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.3,
      fl: -141.84105203269104,
      glass: "S-LAM7-equivalent class (750353; vendor unproven)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 202.33631758992254,
      glass: "S-FSL5-equivalent class (487702; vendor unproven)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.1,
      fl: -328.9903060843815,
      glass: "S-TIM25-equivalent class (673321; vendor unproven)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.43387,
      vd: 95.1,
      fl: -136.25968443456784,
      glass: "Fluorite (CaF2) class",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -70.50627738595921,
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
      fl: 51.46802125959051,
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
      fl: 42.349601965079444,
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
      fl: -25.858934903832207,
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
      fl: -58.85570310158505,
      glass: "804465/804466 class (vendor unresolved)",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.6398,
      vd: 34.5,
      fl: 35.444940733735066,
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
      fl: -48.01581954863957,
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
      fl: 91.12018098917984,
      glass: "S-BSL7-equivalent class (516641; vendor unproven)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 115.683, d: 9.4, nd: 1.56384, elemId: 1, sd: 54.5 },
    {
      label: "2",
      R: 319.64,
      d: 9.0,
      nd: 1.51633,
      elemId: 2,
      sd: 54.5,
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
    { label: "3", R: -478.031, d: 16.76, nd: 1.0, elemId: 0, sd: 54.5 },
    { label: "4", R: 96.413, d: 8.6, nd: 1.51823, elemId: 3, sd: 39.0 },
    { label: "5", R: 472.518, d: 3.11, nd: 1.0, elemId: 0, sd: 39.0 },
    { label: "6", R: -495.228, d: 3.6, nd: 1.7495, elemId: 4, sd: 36.6 },
    { label: "7", R: 135.791, d: 4.08, nd: 1.0, elemId: 0, sd: 36.6 },
    { label: "8", R: 71.132, d: 8.4, nd: 1.48749, elemId: 5, sd: 34.0 },
    { label: "9", R: 245.218, d: 0.8, nd: 1.0, elemId: 0, sd: 34.0 },
    { label: "10", R: 51.628, d: 5.3, nd: 1.6727, elemId: 6, sd: 31.0 },
    { label: "11", R: 40.134, d: 39.15, nd: 1.0, elemId: 0, sd: 31.0 },
    { label: "12", R: 1141.04, d: 1.8, nd: 1.43387, elemId: 7, sd: 20.0 },
    { label: "13", R: 56.18, d: 22.84, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "STO", R: 1e15, d: 10.5, nd: 1.0, elemId: 0, sd: 12.918024672655186 },
    { label: "15", R: 90.269, d: 1.3, nd: 1.80518, elemId: 8, sd: 12.0 },
    { label: "16", R: 34.628, d: 4.7, nd: 1.48749, elemId: 9, sd: 12.0 },
    { label: "17", R: -87.04, d: 0.5, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "18", R: 68.906, d: 3.85, nd: 1.76182, elemId: 10, sd: 12.0 },
    { label: "19", R: -59.203, d: 1.3, nd: 1.804, elemId: 11, sd: 12.0 },
    { label: "20", R: 32.357, d: 3.41, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "21", R: -74.136, d: 1.3, nd: 1.804, elemId: 12, sd: 11.5 },
    { label: "22", R: 131.844, d: 1.53, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "23", R: 75.659, d: 6.2, nd: 1.6398, elemId: 13, sd: 12.5 },
    { label: "24", R: -31.349, d: 1.4, nd: 1.804, elemId: 14, sd: 12.5 },
    { label: "25", R: -170.115, d: 14.65, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "26", R: 82.731, d: 6.6, nd: 1.51633, elemId: 15, sd: 17.0 },
    { label: "27", R: -106.118, d: 65.50777563957956, nd: 1.0, elemId: 0, sd: 17.0 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [{ text: "DO", fromSurface: "1", toSurface: "3" }],
  doublets: [],

  closeFocusM: 3.5,
  focusDescription:
    "Production lens: inner focusing with USM, 3.5 m MFD. Patent Example 1 publishes only the infinity prescription; no internal focus movement is reconstructed (NO_INTERNAL_RECONSTRUCTION).",

  nominalFno: 4.12,
  fstopSeries: [4.12, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 8,
  maxFstop: 32,

  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
