import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S DX ZOOM-NIKKOR 18-55mm f/3.5-5.6G ED II                                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2006/0007559 A1, Example 4, Table 4 / Figs. 13-16 (Haruo Sato; Nikon Corporation). ║
 * ║  Correlation: selected ED II target; optical evidence is family-level and also overlaps the 2005 ED lens. ║
 * ║  Physical count: 7 elements / 5 groups, one hybrid aspherical element and one low-dispersion element.  ║
 * ║  Modeled media entries: 8 because the bonded resin layer of physical L1 is represented separately.      ║
 * ║                                                                                                          ║
 * ║  Zoom positions: 18.5 / 35.0 / 53.5 mm (patent design values; marketed range is 18-55 mm).             ║
 * ║  Wide-open design FNO: 3.56 / 4.65 / 5.90. nominalFno uses these modeled values, not 3.5-5.6.          ║
 * ║  Zoom + focus gap: D5 at surface 5. G1 translates toward the object for close focus.                    ║
 * ║  Zoom-only rear gap: surface 14 stores normalized D14 + D15 after omission of flare stopper F.         ║
 * ║  G1 reverses axial direction between the mid and tele infinity states; piecewise zoom interpolation     ║
 * ║  therefore retains all three patent zoom positions.                                                     ║
 * ║                                                                                                          ║
 * ║  Focus status: PUBLISHED. The data model stores the published infinity/closest endpoints.               ║
 * ║  Published intermediate beta=-0.025 D5 values, retained here for provenance, are                       ║
 * ║  45.43445 / 13.89826 / 1.67141 mm at wide / mid / tele. The LensData focus schema has endpoint       ║
 * ║  pairs only, so that intermediate source row is not a separate UI state.                                ║
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
 * ║  Semi-diameters are inferred because Example 4 publishes none. They were constrained from the          ║
 * ║  first-order stop solution, exact non-paraxial chief/marginal ray traces at all zoom/focus endpoints,   ║
 * ║  the default 0.6-field off-axis bundle, the full published chief-ray fields, Fig. 13 proportions,       ║
 * ║  edge thickness, actual rim slope, conic domain, shared-gap intrusion, and render-trim proxy checks.    ║
 * ║  The 7.799 mm stop semi-diameter is the wide-state first-order solution for F/3.56; the published       ║
 * ║  rounded mid/tele FNO values imply 7.791 / 7.748 mm, a 0.65% spread consistent with one physical iris. ║
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
  key: "nikon-af-s-dx-zoom-nikkor-18-55-f35-56g-ed-ii",
  maker: "Nikon",
  name: "NIKON AF-S DX ZOOM-NIKKOR 18-55mm f/3.5-5.6G ED II",
  subtitle:
    "US 2006/0007559 A1 Example 4 — Haruo Sato / Nikon Corporation; selected ED II correlation, not unique within the 18-55 ED family",
  specs: [
    "7 ELEMENTS / 5 GROUPS",
    "18-55mm f/3.5-5.6 (MARKETED)",
    "18.5-53.5mm f/3.56-5.90 (EXAMPLE 4)",
    "1 ED / 1 ASPHERICAL ELEMENT (PRODUCTION)",
  ],

  focalLengthMarketing: [18, 55],
  focalLengthDesign: [18.5, 53.5],
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 2006/0007559 A1",
  patentAuthors: ["Haruo Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2006,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1g",
      label: "L1 glass substrate",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.61,
      fl: -24.7341,
      glass: "773496 class (vendor ambiguous; patent nd=1.772500, vd=49.61)",
      cemented: "H1",
      role: "Glass body of the front negative hybrid compound element.",
    },
    {
      id: 2,
      name: "L1r",
      label: "L1 bonded resin layer",
      type: "Negative Meniscus (1x Asph)",
      nd: 1.55389,
      vd: 38.09,
      fl: -90.7827,
      glass: "Unmatched (aspheric resin; trade name unpublished; patent nd=1.553890, vd=38.09)",
      cemented: "H1",
      role: "Thin bonded resin layer carrying the image-side aspherical surface of physical L1.",
    },
    {
      id: 3,
      name: "L1p",
      label: "L1p",
      type: "Positive Meniscus",
      nd: 1.86074,
      vd: 23.06,
      fl: 77.9678,
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
      fl: 59.4042,
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
      fl: 28.6323,
      glass: "517641 crown class (vendor ambiguous; BK7-family coordinates)",
      cemented: "D1",
      role: "Positive constituent of the front cemented pair in G2-1.",
    },
    {
      id: 6,
      name: "L2an",
      label: "L2an",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      fl: -30.169,
      glass: "773496 class (vendor ambiguous; patent nd=1.772500, vd=49.61)",
      cemented: "D1",
      role: "Negative constituent of the front cemented pair; the Table 4 pair is weakly net positive in situ.",
    },
    {
      id: 7,
      name: "Lbn",
      label: "Lbn",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.17,
      fl: -26.4573,
      glass: "834372 high-index class (vendor/composition ambiguous)",
      cemented: "D2",
      role: "Negative constituent of the rear cemented pair in G2-2.",
    },
    {
      id: 8,
      name: "Lbp",
      label: "Lbp",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      fl: 21.5866,
      glass: "517641 crown class (vendor ambiguous; BK7-family coordinates)",
      cemented: "D2",
      role: "Positive constituent of the rear cemented pair in G2-2.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 181.0591, d: 2.0, nd: 1.7725, elemId: 1, sd: 15.5 },
    { label: "2", R: 17.2, d: 0.2, nd: 1.55389, elemId: 2, sd: 14.3 },
    { label: "3A", R: 12.763, d: 12.25, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "4", R: 33.8814, d: 2.8, nd: 1.86074, elemId: 3, sd: 12.4 },
    { label: "5", R: 65.8125, d: 44.09357, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "6", R: 42.5378, d: 2.6, nd: 1.497, elemId: 4, sd: 9.2 },
    { label: "7", R: -94.5446, d: 1.8, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 7.799 },
    { label: "9", R: 24.2385, d: 4.0, nd: 1.5168, elemId: 5, sd: 8.8 },
    { label: "10", R: -35.8523, d: 0.8, nd: 1.7725, elemId: 6, sd: 8.8 },
    { label: "11", R: 67.243, d: 11.2, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "12", R: 54.1555, d: 0.8, nd: 1.834, elemId: 7, sd: 9.2 },
    { label: "13", R: 15.5723, d: 4.5, nd: 1.5168, elemId: 8, sd: 8.95 },
    { label: "14", R: -35.4635, d: 41.84285, nd: 1.0, elemId: 0, sd: 8.95 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: -0.9625,
      A3: 7.9879e-6,
      A4: 3.0368e-6,
      A6: -2.1516e-8,
      A8: 5.2594e-11,
      A10: -2.5891e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ── */
  var: {
    "5": [
      [44.09357, 51.15122],
      [13.18951, 19.7238],
      [1.20774, 8.25968],
    ],
    "14": [
      [41.84285, 41.84285],
      [62.00951, 62.00951],
      [84.62063, 84.62063],
    ],
  },

  varLabels: [
    ["5", "D5 (G1-G2)"],
    ["14", "BF (D14+D15)"],
  ],

  /* ── Zoom configuration ── */
  zoomPositions: [18.5, 35.0, 53.5],
  zoomLabels: ["Wide", "Tele"],

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

  /* ── Focus configuration ── */
  closeFocusM: 0.25,
  focusDescription:
    "PUBLISHED Example 4 focus: G1 translates toward the object while G2-to-image spacing is unchanged at each zoom position; closest endpoints solve to about 0.250 m from the focal plane. Production MFD 0.28 m is not used to alter the patent model.",

  /* ── Aperture configuration ── */
  nominalFno: [3.56, 4.65, 5.9],
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  /* ── Layout ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
