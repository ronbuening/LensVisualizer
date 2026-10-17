import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S DX ZOOM-NIKKOR 18-55mm f/3.5-5.6 G ED II                                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2006/0007559 A1, Example 4, Table 4 / Figs. 13-16 (Haruo Sato; Nikon Corporation). ║
 * ║  Correlation: selected ED II target; optical evidence is family-level and also overlaps the 2005 ED lens. ║
 * ║  Physical count: 7 elements / 5 groups, one hybrid aspherical element and one low-dispersion element.  ║
 * ║  Modeled media entries: 8 because the bonded resin layer of physical L1 is represented separately.      ║
 * ║                                                                                                          ║
 * ║  Zoom positions: 18.5 / 35.0 / 53.5 mm (patent design values; marketed range is 18-55 mm).             ║
 * ║  Wide-open design FNO: 3.56 / 4.65 / 5.90. nominalFNumber uses these modeled values, not 3.5-5.6.      ║
 * ║  Zoom + focus gap: D5 at surface 5. G1 translates toward the object for close focus.                    ║
 * ║  Zoom-only rear gap: surface 14 stores normalized D14 + D15 after omission of flare stopper F.         ║
 * ║  G1 reverses axial direction between the mid and tele infinity states; piecewise zoom interpolation     ║
 * ║  therefore retains all three patent zoom positions.                                                     ║
 * ║                                                                                                          ║
 * ║  Focus status: PUBLISHED. The data model stores the published infinity/closest endpoints.               ║
 * ║  Published intermediate beta=-0.025 D5 values, retained here for provenance, are                       ║
 * ║  45.43445 / 13.89826 / 1.67141 mm at wide / mid / tele. Their independently resolved inverse-distance ║
 * ║  coordinates differ by zoom position, so one shared focus keyframe cannot represent the row exactly.   ║
 * ║  Closest endpoints independently solve to about 0.250 m from the focal plane. Nikon markets 0.28 m     ║
 * ║  and 0.31x; those production values are not used to alter the patent focus spacings.                    ║
 * ║                                                                                                          ║
 * ║  Source surface 15 is a moving flare stopper with no published clear aperture. It is omitted from the  ║
 * ║  ordinary sequential prescription. Surface 14 rear spacing is D14+D15, preserving the source image     ║
 * ║  plane station: 41.84285 / 62.00951 / 84.62063 mm.                                                     ║
 * ║                                                                                                          ║
 * ║  Asphere: patent surface 3 uses sqrt(1-kappa*(y/R)^2) with kappa=0.0375. LensVisualizer uses           ║
 * ║  sqrt(1-(1+K)*(h/R)^2), so K=-0.9625. The patent C3|y|^3 term is stored as radial A3*h^3.              ║
 * ║  No scale factor is applied; radii, spacings, and asphere coefficients remain at patent scale.          ║
 * ║                                                                                                          ║
 * ║  Semi-diameters are inferred because Example 4 publishes none. They were constrained from the            ║
 * ║  first-order stop solution, exact non-paraxial chief/marginal ray traces at all zoom/focus endpoints,    ║
 * ║  the default 0.6-field off-axis bundle, the full published chief-ray fields, Fig. 13 proportions, edge   ║
 * ║  thickness, actual rim slope, conic domain, shared-gap intrusion, and render-trim proxy checks. The stop ║
 * ║  radius is derived from the design f-number at each zoom station with a real marginal ray, giving        ║
 * ║  7.893 / 7.962 / 8.007 mm for F/3.56 / 4.65 / 5.90 (first-order equivalents 7.799 / 7.791 / 7.748 mm).   ║
 * ║  Neither set fits one radius within the print rounding of Figs. 14-16, and Example 4 gives the stop a    ║
 * ║  position but no diameter. The iris, not a lens rim, limits the axial beam at all three stations.        ║
 * ║                                                                                                          ║
 * ║  Glass labels are deliberately conservative. Example 4 publishes only nd/vd, not trade names or       ║
 * ║  nC/nF/ng/dPgF. Ambiguous media therefore use six-digit/classes or Unmatched(...) instead of a         ║
 * ║  speculative vendor identity, and no unsupported spectral fields are authored.                          ║
 * ║                                                                                                          ║
 * ║  Source contradiction retained: paragraph 0131 calls L2ap+L2an a "cemented negative lens," while      ║
 * ║  Table 4 gives that cemented pair weak positive net paraxial power. Table 4 is transcribed unchanged.   ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-af-s-dx-zoom-nikkor-18-55-f35-56g-ed-ii",
  maker: "Nikon",
  name: "NIKON AF-S DX ZOOM-NIKKOR 18-55mm f/3.5-5.6 G ED II",
  subtitle:
    "US 2006/0007559 A1 Example 4 — Haruo Sato / Nikon Corporation; selected ED II correlation, not unique within the 18-55 ED family",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "aps-c",
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "18-55mm f/3.5-5.6 (MARKETED)",
      "18.5-53.5mm f/3.56-5.90 (EXAMPLE 4)",
      "1 ED / 1 ASPHERICAL ELEMENT (PRODUCTION)",
    ],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: [18, 55], design: [18.5, 53.5] },
  },

  source: {
    patentNumber: "US 2006/0007559 A1",
    patentYear: 2006,
    authors: ["Haruo Sato"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1g",
      label: "L1 glass substrate",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.61,
      focalLengthMm: -24.7341,
      glass: "773496 class (vendor ambiguous; patent nd=1.772500, vd=49.61)",
      role: "Glass body of the front negative hybrid compound element.",
      cemented: "H1",
    },
    {
      id: 2,
      name: "L1r",
      label: "L1 bonded resin layer",
      type: "Negative Meniscus (1x Asph)",
      nd: 1.55389,
      vd: 38.09,
      focalLengthMm: -90.7827,
      glass: "Unmatched (aspheric resin; trade name unpublished; patent nd=1.553890, vd=38.09)",
      role: "Thin bonded resin layer carrying the image-side aspherical surface of physical L1.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L1p",
      label: "L1p",
      type: "Positive Meniscus",
      nd: 1.86074,
      vd: 23.06,
      focalLengthMm: 77.9678,
      glass: "861231 dense-flint class (HIKARI J-SFH2 is a close catalog equivalent; identity inferred)",
      role: "Positive meniscus completing the negative first zoom group.",
    },
    {
      id: 4,
      name: "L2a",
      label: "L2a",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 59.4042,
      glass: "497816 low-dispersion class (vendor/composition ambiguous)",
      apd: "inferred",
      apdNote:
        "The unique very-high-Abbe position correlates with Nikon's one-ED production specification; the patent does not identify a melt or publish partial-dispersion data.",
      role: "Low-dispersion positive element at the front of G2; correlated with the production ED element.",
    },
    {
      id: 5,
      name: "L2ap",
      label: "L2ap",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: 28.6323,
      glass: "517641 crown class (vendor ambiguous; BK7-family coordinates)",
      role: "Positive constituent of the front cemented pair in G2-1.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L2an",
      label: "L2an",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      focalLengthMm: -30.169,
      glass: "773496 class (vendor ambiguous; patent nd=1.772500, vd=49.61)",
      role: "Negative constituent of the front cemented pair; the Table 4 pair is weakly net positive in situ.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "Lbn",
      label: "Lbn",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.17,
      focalLengthMm: -26.4573,
      glass: "834372 high-index class (vendor/composition ambiguous)",
      role: "Negative constituent of the rear cemented pair in G2-2.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "Lbp",
      label: "Lbp",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: 21.5866,
      glass: "517641 crown class (vendor ambiguous; BK7-family coordinates)",
      role: "Positive constituent of the rear cemented pair in G2-2.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 181.0591, d: 2.0, sd: 15.5, medium: 1 },
    { label: "2", R: 17.2, d: 0.2, sd: 14.3, medium: 2 },
    {
      label: "3A",
      R: 12.763,
      d: 12.25,
      sd: 14.3,
      asphere: { K: -0.9625, A4: 3.0368e-6, A6: -2.1516e-8, A8: 5.2594e-11, A10: -2.5891e-13, A3: 7.9879e-6 },
    },
    { label: "4", R: 33.8814, d: 2.8, sd: 12.4, medium: 3 },
    { label: "5", R: 65.8125, sd: 12.4 },
    { label: "6", R: 42.5378, d: 2.6, sd: 9.2, medium: 4 },
    { label: "7", R: -94.5446, d: 1.8, sd: 9.2 },
    { label: "STO", R: "flat", d: 2.0 },
    { label: "9", R: 24.2385, d: 4.0, sd: 8.8, medium: 5 },
    { label: "10", R: -35.8523, d: 0.8, sd: 8.8, medium: 6 },
    { label: "11", R: 67.243, d: 11.2, sd: 8.8 },
    { label: "12", R: 54.1555, d: 0.8, sd: 9.2, medium: 7 },
    { label: "13", R: 15.5723, d: 4.5, sd: 8.95, medium: 8 },
    { label: "14", R: -35.4635, sd: 8.95 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom configuration ── */
    // (moved from publishedStations) The close-focus row is source-tabulated.
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 18.5, nominalFNumber: 3.56, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 35.0, nominalFNumber: 4.65, published: true, publishedFocus: [1] },
      { focalLengthMm: 53.5, nominalFNumber: 5.9, label: "Tele", published: true, publishedFocus: [1] },
    ],
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.25,
    description:
      "PUBLISHED Example 4 focus: G1 translates toward the object while G2-to-image spacing is unchanged at each zoom position; closest endpoints solve to about 0.250 m from the focal plane. Production MFD 0.28 m is not used to alter the patent model.",
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: {
    "5": {
      label: "D5 (G1-G2)",
      values: [
        [44.09357, 51.15122],
        [13.18951, 19.7238],
        [1.20774, 8.25968],
      ],
    },
    "14": {
      label: "BF (D14+D15)",
      values: [
        [41.84285, 41.84285],
        [62.00951, 62.00951],
        [84.62063, 84.62063],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Group annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "14" },
  ],
  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
