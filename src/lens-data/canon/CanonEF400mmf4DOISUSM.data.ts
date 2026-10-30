import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 400mm f/4 DO IS USM                                               ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source prescription: US 2002/0015231 A1, Numerical Example 1 (Hideki Ogawa).           ║
 * ║ Production correlation: Canon EF 400mm f/4 DO IS USM, released December 2001.           ║
 * ║                                                                                          ║
 * ║ NONLITERAL RADII — PROVENANCE UNRESOLVED IN THE 2026-10-30 ORIGINAL REVIEW                         ║
 * ║ A1 prints r17=+87.040, r19=+59.203 and r22=+131.344; the existing model retains                    ║
 * ║ -87.040/-59.203/+131.844. Prior family-source correction claims are not freshly verified:           ║
 * ║ their local originals are absent. The literal A1 block contradicts its 392 mm summary, but does      ║
 * ║ not uniquely prove these exact replacements. See structured unresolved source.errata and audit.     ║
 * ║                                                                                                  ║
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
 * ║   The 2026-10-30 native 300-dpi review adds S11 outer 31/cap 28.1 and corrects S6/S7 to 36.75 mm.      ║
 * ║   The old 600-dpi view was upsampling; retained cap heights remain inferred and geometry-constrained.║
 * ║   They are not presented as patent-published dimensions.                                ║
 * ║                                                                                          ║
 * ║ GLASS DATA                                                                                ║
 * ║ The bulk table defines ni/νi without a wavelength identity. All 16 media remain Unmatched,          ║
 * ║ with approximate default d-line tracing and qualified coordinate candidates, never chemistry proof.║
 * ║ No per-lens C/F/g or partial-dispersion data are published. The two UV-layer nd/vd pairs are          ║
 * ║ separately preserved in analysis as source microstructure data, not invented macro resin elements.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-400mm-f4-do-is-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/4 DO IS USM",
  subtitle: "US 2002/0015231 A1 Example 1 — qualified nonliteral model; radius provenance unresolved",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "US 2002/0015231 A1 — Example 1",
      "15 powered elements / 11 active groups + rear plate",
      "PATENT f = 392.00 mm, F/4.12",
      "2ω = 6.32°",
      "r2 radial-polynomial DO phase",
    ],
    elementCount: 15,
    groupCount: 11,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 400, design: 392.0 },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2002/0015231 A1",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2002,
    authors: ["Hideki Ogawa"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 1 on original A1 PDF page 17/printed 7 prints r17=+87.040, r19=+59.203, r22=+131.344 mm. The pre-existing -87.040/-59.203/+131.844 mm model is retained. Prior B2/divisional correction claims cannot be freshly checked because those local originals are absent. Fully literal values give EFL 1088.527323 mm against printed 392; that contradiction does not uniquely prove the exact adopted replacements. See the audit and generic follow-up queue.",
      },
    ],
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
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: 316.28514596353614,
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-BAL41)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: 372.42409773436736,
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-BSL7)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.9,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: 231.92404480834531,
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-NSL3)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.3,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: -141.84105203269104,
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-LAM7)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: 202.33631758992254,
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-FSL5)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.1,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: -328.9903060843815,
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-TIM25)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.43387,
      vd: 95.1,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: -136.25968443456784,
      glass:
        "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate CaF2 coordinate curve)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: -70.50627738595921,
      glass:
        "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate 805254 coordinate class)",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: 51.46802125959051,
      glass:
        "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate 762265 coordinate class)",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.5,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: 42.349601965079444,
      glass:
        "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate 804465/804466 coordinate class)",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: -25.858934903832207,
      glass:
        "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate 804465/804466 coordinate class)",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: -58.85570310158505,
      glass:
        "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate 804465/804466 coordinate class)",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.6398,
      vd: 34.5,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: 35.444940733735066,
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-TIM27)",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: -48.01581954863957,
      glass:
        "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate 804465/804466 coordinate class)",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      focalLengthMm: 91.12018098917984,
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-BSL7)",
    },
    {
      id: 16,
      name: "F",
      label: "Rear plate F",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      indexReferenceNote:
        "The selected original defines ni/νi without a d/e reference for the bulk table. Default d-line tracing and any catalog coordinate candidate are approximate; source supplier and chemistry remain unresolved.",
      glass: "Unmatched (source N/ν reference unspecified; qualified d-line coordinate candidate S-BSL7)",
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
    { label: "6", R: -495.228, d: 3.6, sd: 36.75, medium: 4 },
    { label: "7", R: 135.791, d: 4.08, sd: 36.75 },
    { label: "8", R: 71.132, d: 8.4, sd: 34.0, medium: 5 },
    { label: "9", R: 245.218, d: 0.8, sd: 34.0 },
    { label: "10", R: 51.628, d: 5.3, sd: 31.0, medium: 6 },
    { label: "11", R: 40.134, d: 39.15, sd: 28.1, rimExtensionSd: 31.0 },
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
