import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US4264136A Example 2, TABLE 2 / FIG.3 and FIG.4a, uniformly scaled by 2.5.
 * Source N5 literally prints 11.7400 in both Table 2 and claim 12. The model
 * uses the explicit 1.7400 source-typo hypothesis, supported by independent
 * f=100.0 and fR=-27.15 consistency checks; raw printing is preserved in evidence.
 * Image plane is the calculated paraxial reference only. Patent col. 7-8 places
 * actual useful focus behind it without a numerical offset; none is invented.
 * Five physical blanks / four groups; six rendered entries because M1 is split
 * into the annular silvered shell and clear central plug L3 of the same blank.
 * Both M1 and M2 are second-surface mirrors. Automatic physical traversal is
 * required after the mandatory STO prefix (surfaceOrder=["STO"]): an exiting ray can cross M1F or the coincident
 * clear CF surface. A fixed full lens list can silently omit that refraction.
 * The STO-only prefix enforces the inferred entrance stop, which auto mode
 * otherwise skips as a same-index plane. No added physical baffle is implied.
 * Listed stations reset by -4 mm from CB to M1F; this is not ordinary sequential
 * propagation. The imaging branch revisits the two Mangin entrance surfaces.
 * Inferred SDs: front 30, primary annulus 14–26, secondary 14, central plug 14,
 * rear doublet 12.2 mm. The secondary's inactive coating side blocks incident
 * central light; no extra mechanical baffle or invented filter is included.
 * STO is inferred 0.25 mm before r1 and calibrated to source f/4.5, not marketed
 * f/5.6. The modeled aperture geometry is not a measured production prescription.
 * NO_INTERNAL_RECONSTRUCTION: fixed infinity only; MFD is product metadata.
 * Element fl is standalone refractive-pass EFL, not mirror or in-situ power.
 * Glass labels identify qualified catalog spectral proxies; source coordinates are retained.
 * The source leaves the spectral reference line unnamed; d-line interpretation remains a model assumption.
 */
const LENS_DATA = {
  schema: 2,
  publishedAt: "2026-10-17T00:00:00Z", // Requested catalog publication date, independent of commit timezone.
  key: "minolta-250mm-f56-rf",
  maker: "Minolta",
  name: "MINOLTA RF 250mm f/5.6",
  subtitle: "US4264136A EXAMPLE 2 \u2014 MINOLTA / SHUJI OGINO",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["5 PHYSICAL ELEMENTS / 4 GROUPS", "2 SECOND-SURFACE MIRRORS", "EXAMPLE 2 DESIGN f/4.5; MARKETED f/5.6"],
    elementCount: 5.0,
    groupCount: 4.0,
    focalLengthMm: { marketing: 250.0, design: 249.948717765602 },
    fNumber: { marketing: 5.6, design: 4.5 },
  },

  source: {
    patentNumber: "US 4,264,136 A",
    patentYear: 1981.0,
    authors: ["Shuji Ogino"],
    assignees: ["Minolta Camera Co., Ltd."],
    errata: [{
      status: "corrected",
      surface: "8",
      field: "nd",
      printed: 11.7400,
      applied: 1.7400,
      evidence: ["source-summary", "claims"],
      note: "Table 2 and claim 12 print N5 = 11.7400. Using 1.7400 reproduces the stated normalized f = 100 and fR = -27.15; literal 11.7400 gives f = 25.81 and positive fR = 7.35, contradicting the negative rear-component power required by claims 1 and 6. This is an explicit source-typo hypothesis, not an independently confirmed production index.",
    }],
  },

  elements: [
    {
      id: 1.0,
      name: "L1",
      diagramLabel: "L1",
      label: "L1",
      type: "Positive Meniscus",
      nd: 1.5176,
      vd: 53.5,
      indexReference: "d",
      indexReferenceNote: "Source N/ν have no named line; d-line tracing is a catalog-informed interpretation.",
      focalLengthMm: 446.3574099632947,
      glass: "S-NSL36 spectral proxy (OHARA; light crown; patent vd 53.5 retained versus catalog 52.43; supplier unconfirmed)",
      apd: false,
      role: "Source-prescribed refractive component; no isolated aberration assignment.",
      span: ["1", "2"],
    },
    {
      id: 2.0,
      name: "M2",
      diagramLabel: "M2",
      label: "M2",
      type: "Positive Meniscus Second-Surface Mirror",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      indexReferenceNote: "Source N/ν have no named line; d-line tracing is a catalog-informed interpretation.",
      focalLengthMm: 193.38980110893078,
      glass: "N-BK7 spectral proxy (Schott; borosilicate crown; production supplier unconfirmed)",
      apd: false,
      role: "Standalone refractive-pass power; mirror reflection is handled by explicit optical path.",
      span: ["M2B", "M2F"],
    },
    {
      id: 3.0,
      name: "M1",
      diagramLabel: "M1",
      label: "M1",
      type: "Negative Meniscus Second-Surface Mirror",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      indexReferenceNote: "Source N/ν have no named line; d-line tracing is a catalog-informed interpretation.",
      focalLengthMm: -354.89800546804923,
      glass: "N-BK7 spectral proxy (Schott; borosilicate crown; production supplier unconfirmed)",
      apd: false,
      role: "Standalone refractive-pass power; mirror reflection is handled by explicit optical path.",
      span: ["M1F", "M1B"],
    },
    {
      id: 4.0,
      name: "L3",
      diagramLabel: "L3",
      label: "L3",
      type: "Clear Central Primary Plug",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      indexReferenceNote: "Source N/ν have no named line; d-line tracing is a catalog-informed interpretation.",
      focalLengthMm: -354.89800546804923,
      glass: "N-BK7 spectral proxy (Schott; borosilicate crown; production supplier unconfirmed)",
      apd: false,
      role: "Clear central zone of the same physical M1 blank, not an additional physical element.",
      span: ["CF", "CB"],
    },
    {
      id: 5.0,
      name: "L4",
      diagramLabel: "L4",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      indexReference: "d",
      indexReferenceNote: "Source N/ν have no named line; d-line tracing is a catalog-informed interpretation.",
      focalLengthMm: -59.988598936194556,
      glass: "N-BK7 spectral proxy (Schott; borosilicate crown; production supplier unconfirmed)",
      apd: false,
      role: "Source-prescribed refractive component; no isolated aberration assignment.",
      cemented: "L4 + L5",
      span: ["7", "8"],
    },
    {
      id: 6.0,
      name: "L5",
      diagramLabel: "L5",
      label: "L5",
      type: "Biconvex Positive",
      nd: 1.74,
      vd: 28.3,
      indexReference: "d",
      indexReferenceNote: "Source N/ν have no named line; d-line tracing is a catalog-informed interpretation.",
      focalLengthMm: 204.02440545462355,
      glass: "S-TIH3 spectral proxy (OHARA; dense flint; production supplier unconfirmed)",
      apd: false,
      role: "Source-prescribed refractive component; no isolated aberration assignment.",
      cemented: "L4 + L5",
      span: ["8", "9"],
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 0.25, sd: 27.772079751733557 },
    { label: "1", R: 151.43, d: 5.0, sd: 30.0, medium: 1 },
    { label: "2", R: 434.5425, d: 2.5, sd: 30.0 },
    {
      label: "M2B",
      R: -92.3175,
      d: 2.5,
      sd: 14,
      medium: 2,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "second-surface" },
    },
    { label: "M2F", R: -48.4325, d: 34.0, sd: 14 },
    { label: "CF", R: -74.5625, d: 4.0, sd: 14.0, medium: 4 },
    { label: "CB", R: -127.935, d: -4.0, sd: 14.0 },
    { label: "M1F", R: -74.5625, d: 4.0, sd: 26, innerSd: 14.0, medium: 3 },
    {
      label: "M1B",
      R: -127.935,
      d: 3.0,
      sd: 26,
      innerSd: 14.0,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "second-surface" },
    },
    { label: "7", R: -32.5375, d: 1.4, sd: 12.2, medium: 5 },
    { label: "8", R: 666.6175, d: 1.9, sd: 12.2, medium: 6 },
    { label: "9", R: -194.9475, d: 42.5814441604686, sd: 12.2 },
  ],

  focus: {
    closeFocusM: 2.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the fixed prescription uses a calculated paraxial image plane. The patent places actual useful focus behind this plane without a numerical offset. The 2.5 m close-focus value is manufacturer metadata; no internal movement or finite-focus optical result is claimed.",
  },

  aperture: { nominalFNumber: 4.5, fStops: [4.5], maxFNumber: 4.5 },

  opticalPath: {
    surfaceOrder: ["STO"],
    imagePlane: { z: 97.13144416046856, label: "IMG" },
    maxInteractions: 32,
    mode: "auto",
  },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "2" },
    { text: "M2", fromSurface: "M2B", toSurface: "M2F" },
    { text: "M1 / L3", fromSurface: "CF", toSurface: "M1B" },
    { text: "REAR DOUBLET", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "L4 + L5", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.7 },
} satisfies LensDataV2Input;

export default LENS_DATA;
