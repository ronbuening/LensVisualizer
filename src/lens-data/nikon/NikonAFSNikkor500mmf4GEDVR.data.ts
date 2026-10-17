import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON AF-S NIKKOR 500mm f/4 G ED VR — patent-correlated model.
 *
 * Source prescription: US 2009/0190239 A1, Example 1 (Figs. 6-7), unscaled.
 * The optical-specification correlation to Nikon's production lens is substantial but not manufacturer-confirmed;
 * the source publication names Takashi Suzuki and no assignee/applicant. Same-application
 * assignment history identifies Fujinon Corporation (recorded 2009-01-22, effective 2009-01-07).
 *
 * Model: 15 lens elements / 12 air-spaced groups when the front protective meniscus
 * is counted; this corresponds to Nikon's 14 elements / 11 groups plus one protective glass.
 * Example 1 is all-spherical. G2 is the published axial focus group. G3a is the published
 * vibration-reduction group; its published lateral motion is not an
 * authored LensDataInput movement control.
 *
 * Focus status: PUBLISHED. The focus control ends at the patent's 5 m state (d11=49.88 mm,
 * d16=13.18 mm), not at Nikon's 4.0 m AF / 3.85 m MF production MFD. No 4 m internal state
 * is reconstructed.
 *
 * Rear plate: source GF surfaces 29-30 are drawn as a plane-parallel plate element and traced
 * by every analysis. Surface 28 therefore keeps the published 25.00 mm physical gap to GF; GF is
 * 2.00 mm thick at nd=1.51680, followed by the published Bf=82.68 mm air gap to the image plane.
 * The GF semi-diameter is a ray-trace estimate (the source lists none), and GF is not counted
 * in `elementCount`.
 *
 * Stop: the patent publishes the AD plane and Fno=4.08 but no physical diaphragm diameter.
 * The stop radius is derived from the design f-number, f/4.08; it is not a published stop
 * size.
 *
 * Semi-diameters: D1 gives surface 1 sd=60.2 mm; surface 18 uses the inferred centered
 * D30=(42.5-2*1.53)=39.44 mm, sd=19.72 mm; surface 28 uses Dk=32.8 mm, sd=16.4 mm.
 * Other SDs are modeled from exact meridional ray sampling and the published optical section,
 * then checked for edge thickness, spherical rim slope, shared-gap intrusion, and sampled
 * off-axis containment. The production renderer retains these optical rims without hidden trimming.
 *
 * Glass labels below are HIKARI catalog coordinate matches to the patent nd/vd pairs.
 * They are modeling identifications, not supplier or melt confirmation. The shared catalog supplies
 * dispersion curves; no catalog-derived line indices or partial-dispersion deviations are copied here.
 */
const LENS_DATA = {
  schema: 2,
  key: "nikon-af-s-nikkor-500mm-f4g-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 500mm f/4 G ED VR",
  subtitle: "US 2009/0190239 A1 Example 1 — optical-specification correlation; attribution not manufacturer-confirmed",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 11 GROUPS + PROTECTIVE GLASS",
      "DESIGN f = 489.79 mm",
      "DESIGN F/4.08",
      "5.0° FULL FIELD",
      "G2 INTERNAL FOCUS; G3a LENS-SHIFT VR",
    ],
    elementCount: 15,
    groupCount: 12,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: 500, design: 489.7886415279645 },
    fNumber: { marketing: 4, design: 4.08 },
  },

  source: {
    patentNumber: "US 2009/0190239 A1",
    patentYear: 2009,
    authors: ["Takashi Suzuki"],
    // Application 12/354,321 assignment to Fujinon, reel/frame 022139/0546, recorded before publication.
    // https://patents.google.com/patent/US20090190239A1/en (not printed on the A1 front page).
    assignees: ["Fujinon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "P1",
      label: "Protective glass",
      type: "Protective Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: 2555617.325959,
      glass: "J-BK7A (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "P1",
    },
    {
      id: 2,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.5,
      indexReference: "d",
      focalLengthMm: 302.793173,
      glass: "J-FKH1 (HIKARI coordinate match; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ED-class spectral proxy: catalog J-FKH1 dPgF ≈ +0.0337. Not patent-measured dispersion or confirmation of the production melt.",
      diagramLabel: "L1",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.5,
      indexReference: "d",
      focalLengthMm: 266.079062,
      glass: "J-FKH1 (HIKARI coordinate match; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ED-class spectral proxy: catalog J-FKH1 dPgF ≈ +0.0337. Not patent-measured dispersion or confirmation of the production melt.",
      diagramLabel: "L2",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.788,
      vd: 47.4,
      indexReference: "d",
      focalLengthMm: -219.162795,
      glass: "J-LASF014 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L3",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -212.79022,
      glass: "J-LAK14 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L4",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.5,
      indexReference: "d",
      focalLengthMm: 128.141296,
      glass: "J-FKH1 (HIKARI coordinate match; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ED-class spectral proxy: catalog J-FKH1 dPgF ≈ +0.0337. Not patent-measured dispersion or confirmation of the production melt.",
      diagramLabel: "L5",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      indexReference: "d",
      focalLengthMm: -83.571276,
      glass: "J-LASF010 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L6",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 79.595284,
      glass: "J-SF03 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L7",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -61.64199,
      glass: "J-LAK14 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L8",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: 105.345607,
      glass: "J-FK5 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L9",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -122.646595,
      glass: "J-SF03 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L10",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 35,
      indexReference: "d",
      focalLengthMm: 131.828186,
      glass: "J-LAF016 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L11",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 35,
      indexReference: "d",
      focalLengthMm: -98.467752,
      glass: "J-LAF016 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L12",
      cemented: "C3",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      focalLengthMm: 76.640053,
      glass: "J-F2 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L13",
      cemented: "C3",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: -189.50034,
      glass: "J-FK5 (HIKARI coordinate match; supplier unconfirmed)",
      diagramLabel: "L14",
    },
    {
      id: 16,
      name: "GF",
      label: "Rear plate GF",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      glass: "J-BK7A (HIKARI coordinate match; supplier unconfirmed)",
      role: "Plane-parallel plate GF of the patent prescription (US 2009/0190239 A1, Example 1 Fig. 6 surfaces 29-30). The patent describes it generically as an optical filter, cover glass or prism; it sits 82.68 mm ahead of the image, at the lens's slip-in filter position, so it is drawn and traced as part of the lens. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
  ],

  surfaces: [
    { label: "1", R: 1500, d: 5, sd: 60.2, medium: 1 },
    { label: "2", R: 1500, d: 1, sd: 60.2 },
    { label: "3", R: 179.07, d: 18.09, sd: 60.2, medium: 2 },
    { label: "4", R: -920.68, d: 10.77, sd: 59.6 },
    { label: "5", R: 185.07, d: 16.62, sd: 55.2, medium: 3 },
    { label: "6", R: -452.05, d: 1.04, sd: 53.9 },
    { label: "7", R: -435.27, d: 5, sd: 53.5, medium: 4 },
    { label: "8", R: 287.74, d: 98.05, sd: 51.2 },
    { label: "9", R: 94.676, d: 5, sd: 33.5, medium: 5 },
    { label: "10", R: 56.528, d: 13.12, sd: 31.4, medium: 6 },
    { label: "11", R: 458.17, sd: 30.4 },
    { label: "12", R: -1537, d: 3, sd: 19.7, medium: 7 },
    { label: "13", R: 73.074, d: 4.24, sd: 18.5 },
    { label: "14", R: -122.52, d: 4.84, sd: 18.5, medium: 8 },
    { label: "15", R: -44.264, d: 3, sd: 18.8, medium: 9 },
    { label: "16", R: 1489.6, sd: 18.9 },
    { label: "STO", R: "flat", d: 7 },
    { label: "18", R: 357.29, d: 6.28, sd: 19.72, medium: 10 },
    { label: "19", R: -59.63, d: 0.5, sd: 19.72 },
    { label: "20", R: -60.598, d: 1.8, sd: 19.5, medium: 11 },
    { label: "21", R: -147.5, d: 7.84, sd: 19.7 },
    { label: "22", R: 158.31, d: 3.85, sd: 19.7, medium: 12 },
    { label: "23", R: -313.68, d: 28, sd: 19.6 },
    { label: "24", R: 134.85, d: 2.5, sd: 16, medium: 13 },
    { label: "25", R: 49.355, d: 5.09, sd: 16, medium: 14 },
    { label: "26", R: -1227.6, d: 0.3, sd: 16 },
    { label: "27", R: 382.23, d: 2.5, sd: 16.4, medium: 15 },
    { label: "28", R: 74.239, d: 25, sd: 16.4 },
    // Rear plate GF (US 2009/0190239 A1, Example 1 Fig. 6 surfaces 29-30), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: Fig. 7 Bf=82.68 mm
    { label: "29", R: "flat", d: 2, sd: 18.5, medium: 16 },
    { label: "30", R: "flat", d: 82.68, sd: 18.5 }, // rear plate → image plane
  ],

  focus: {
    closeFocusM: 5,
    description:
      "PUBLISHED — G2 translates 10.84 mm imageward from infinity to the patent 5 m state; no production-MFD extrapolation.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "11": { label: "D11", values: [[39.04, 49.88]] }, "16": { label: "D16", values: [[24.02, 13.18]] } },

  aperture: { nominalFNumber: 4.08, fStops: [4.08, 5.6, 8, 11, 16, 22] },

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "11" },
    { text: "G2 - / FOCUS", fromSurface: "12", toSurface: "16" },
    { text: "G3a + / VR", fromSurface: "18", toSurface: "23" },
    { text: "G3b -", fromSurface: "24", toSurface: "28" },
  ],
  doublets: [
    { text: "C1", fromSurface: "9", toSurface: "11" },
    { text: "C2", fromSurface: "14", toSurface: "16" },
    { text: "C3", fromSurface: "24", toSurface: "26" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
