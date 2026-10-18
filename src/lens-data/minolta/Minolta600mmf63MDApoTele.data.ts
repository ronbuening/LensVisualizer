import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Minolta MD Apo-Tele 600mm f/6.3: US4126378A Example 3, Table 5.
 * Source 15 surfaces, 8 powered elements / 7 groups; all spherical.
 * All source lengths scaled 6×; no aspheric terms. Final BFD computed from rounded source.
 * Focus PUBLISHED: two internal groups move; source photographic distance 2000 is interpreted image-plane-referenced, giving 12 m,
 * not the marketed ~5 m MFD. Continuous linear interpolation is only a UI model.
 * STOP IS INFERRED: Table 6 Seidel SII/SI chief/marginal invariant inversion constrains
 * the optical pupil in d8. It is not an explicitly published physical iris position.
 * Fixed iris position during focus is a modeling assumption; no source iris-motion law is published.
 * Stop aperture calibrated to f/6.3; all surface SDs inferred and checked geometrically.
 * Patent spectral line not specified; n/nu retained with d-line proxy disclosures.
 * Manufacturer9/8 includes one filter; no patent filter prescription is invented.
 * Body condition (2) reverses the inequality in abstract/claim 3; raw conflict is audited.
 * Selected production correlation does not establish exact production prescription or APO performance.
 */
const LENS_DATA = {
  schema: 2,
  publishedAt: "2026-10-17T00:00:00Z", // Requested catalog publication date, independent of commit timezone.
  key: "minolta-md-apo-tele-600mm-f63",
  maker: "Minolta",
  name: "MINOLTA MD APO TELE 600mm f/6.3",
  subtitle: "US4126378A EXAMPLE 3 — selected production correlation, not manufacturer-confirmed",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["8 POWERED ELEMENTS / 7 GROUPS", "f ≈ 599.639 mm", "F/6.3 CALIBRATED", "ALL SPHERICAL"],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 600, design: 599.6387023857857 },
    fNumber: { marketing: 6.3 },
  },

  source: {
    patentNumber: "US 4,126,378 A",
    patentYear: 1978,
    authors: ["Shuji Ogino"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.0,
      indexReferenceNote:
        "Patent n and ν have no named spectral line; retained source values use an approximate d-line tracing proxy.",
      focalLengthMm: -2552.5497988541774,
      glass: "N-BK7 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed)",
      role: "Weak negative front meniscus in the fixed positive front assembly.",
      diagramLabel: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.4339,
      vd: 95.0,
      indexReferenceNote:
        "Patent n and ν have no named spectral line; retained source values use an approximate d-line tracing proxy.",
      focalLengthMm: 196.6902097699322,
      glass: "CaF2 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed)",
      role: "Strong positive low-dispersion element; product literature identifies fluorite in this slot, without confirming the patent melt.",
      diagramLabel: "G2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.757,
      vd: 47.7,
      indexReferenceNote:
        "Patent n and ν have no named spectral line; retained source values use an approximate d-line tracing proxy.",
      focalLengthMm: -213.5150846978666,
      glass: "H-LaF6LA spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed)",
      role: "Negative partner in the fixed front assembly; no isolated aberration claim from sign alone.",
      diagramLabel: "G3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex",
      nd: 1.5038,
      vd: 66.8,
      indexReferenceNote:
        "Patent n and ν have no named spectral line; retained source values use an approximate d-line tracing proxy.",
      focalLengthMm: 294.6169114728138,
      glass: "PC1 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed)",
      role: "Positive final element of the fixed front assembly.",
      diagramLabel: "G4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.689,
      vd: 49.4,
      indexReferenceNote:
        "Patent n and ν have no named spectral line; retained source values use an approximate d-line tracing proxy.",
      focalLengthMm: -107.38576444239753,
      glass: "LAFL23 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed)",
      role: "Negative group I, moving objectward by the published endpoint travel.",
      diagramLabel: "G5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.0,
      indexReferenceNote:
        "Patent n and ν have no named spectral line; retained source values use an approximate d-line tracing proxy.",
      focalLengthMm: 97.39927295979773,
      glass: "N-BK7 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed)",
      role: "Positive group II, moving objectward faster than group I.",
      diagramLabel: "G6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.6583,
      vd: 57.3,
      indexReferenceNote:
        "Patent n and ν have no named spectral line; retained source values use an approximate d-line tracing proxy.",
      focalLengthMm: -44.40120322685976,
      glass: "K-LaK11 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed)",
      role: "Negative member of the stationary rear cemented doublet.",
      diagramLabel: "G7",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Plano-Convex",
      nd: 1.5955,
      vd: 39.4,
      indexReferenceNote:
        "Patent n and ν have no named spectral line; retained source values use an approximate d-line tracing proxy.",
      focalLengthMm: 66.38790931989968,
      glass: "S-TIM8 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed)",
      role: "Positive member of the stationary rear cemented doublet; its net doublet power remains negative.",
      diagramLabel: "G8",
      cemented: "D1",
    },
  ],

  surfaces: [
    { label: "1", R: 172.794, d: 5.13, sd: 52.5, medium: 1 },
    { label: "2", R: 151.236, d: 2.562, sd: 52.5 },
    { label: "3", R: 135.678, d: 15.792, sd: 50.5, medium: 2 },
    { label: "4", R: -221.946, d: 8.286, sd: 50.5 },
    { label: "5", R: -206.484, d: 4.104, sd: 49, medium: 3 },
    { label: "6", R: 750.45, d: 10.656, sd: 49 },
    { label: "7", R: 148.428, d: 9.228, sd: 47, medium: 4 },
    { label: "8", R: "flat", d: 150.15291460431655, sd: 47 },
    { label: "STO", R: "flat" },
    { label: "9", R: -54.006, d: 1.536, sd: 16, medium: 5 },
    { label: "10", R: -202.284, sd: 16 },
    { label: "11", R: 220.98, d: 3.282, sd: 16, medium: 6 },
    { label: "12", R: -64.854, sd: 16 },
    { label: "13", R: -113.868, d: 1.536, sd: 13, medium: 7 },
    { label: "14", R: 39.534, d: 3.69, sd: 13.2, medium: 8 },
    { label: "15", R: "flat", d: 155.281786373648, sd: 13.2 },
  ],

  focus: {
    closeFocusM: 12,
    published: [1],
    description:
      "PUBLISHED endpoints: G5/I and G6/II move objectward 9.120 and 14.592 mm; front and rear doublet fixed. Source photographic distance 2000, interpreted object-to-image, scales 6× to 12 m; this is not the production ≈5 m MFD. Linear gap interpolation is not a published cam law. Infinity stop position inferred from Seidel data and held fixed by modeling assumption; no physical iris-motion law is published. Diameter calibrated at infinity.",
  },

  gaps: {
    STO: { label: "d8 remainder", values: [[26.33108539568346, 17.21108539568346]] },
    "10": { label: "d10", values: [[10.65, 5.178]] },
    "12": { label: "d12", values: [[2.214, 16.806]] },
  },

  aperture: { nominalFNumber: 6.3, fStops: [6.3, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "FIXED FRONT", fromSurface: "1", toSurface: "8" },
    { text: "I", fromSurface: "9", toSurface: "10" },
    { text: "II", fromSurface: "11", toSurface: "12" },
    { text: "III FIXED", fromSurface: "13", toSurface: "15" },
  ],
  doublets: [{ text: "D1", fromSurface: "13", toSurface: "15" }],

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
