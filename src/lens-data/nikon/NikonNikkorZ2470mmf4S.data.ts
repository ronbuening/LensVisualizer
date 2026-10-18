import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 24-70mm f/4 S                     ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2019/049372 A1 (JP re-publication), Example 1,        ║
 * ║  Table 1 (Nikon / Takeshi Umeda). Stored at native patent scale.       ║
 * ║  Positive-lead 5-group zoom: G1(+) G2(−) G3(+) G4(+) G5(−).         ║
 * ║  14 elements / 11 groups, 4 aspherical surfaces.                      ║
 * ║  Focus: internal focus via G4 (2 elements) moving toward object.      ║
 * ║                                                                        ║
 * ║  Zoom variable gaps: D3, D9 (zoom only).                              ║
 * ║  Focus variable gaps: D18, D22 (zoom + focus).                        ║
 * ║  Rear gap D26 (zoom only) ends at the filter plate in `rearPlates`.   ║
 * ║  Zoom motion (Fig. 1A/1B arrows; positions from the Table 1 gaps):    ║
 * ║    G1 +29.4 mm toward object; G3 and G5 +20.6 mm as one unit          ║
 * ║    (D18 + L41/L42 + D22 = 20.04 mm at every station); G4 +14.3 mm;   ║
 * ║    G2 REVERSES: 2.2 mm toward the image W→M, 2.0 mm back M→T.        ║
 * ║  Patent TL 121.58–151.03 mm includes the 1.6 mm filter, as does the   ║
 * ║  stored physical track.                                               ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                               ║
 * ║    Patent publishes no clear apertures. G3 (L31–L35), L41 and the     ║
 * ║    optical extent of the L21 rear asphere (5A) follow rims measured   ║
 * ║    on Fig. 1A (300 dpi raster, 0.2423 mm/px from the S1–S26 vertex    ║
 * ║    span). The other rims are earlier ray-trace/filter-thread          ║
 * ║    estimates that agree with Fig. 1A within about 15 %. Every rim     ║
 * ║    clears the f/4 axial beam at all three stations; the wide-end      ║
 * ║    corner bundle is partly vignetted, as the figure implies (the      ║
 * ║    production lens corrects shading in camera).                       ║
 * ║                                                                        ║
 * ║  NOTE ON APERTURE:                                                     ║
 * ║    FNo 4.00 at W/M/T with the stop riding in G3. The patent lists no   ║
 * ║    iris diameters; the stop radius is derived from the design f-number ║
 * ║    at each zoom station (iris opens toward tele).                      ║
 * ║                                                                        ║
 * ║  NOTE ON COVER GLASS:                                                  ║
 * ║    Patent surfaces 27-28 (filter FL, nd=1.51680, νd=64.1, d=1.600)    ║
 * ║    are modeled in `rearPlates` (traced, not drawn) with D28 = 0.100.  ║
 * ║    D26 = patent 13.858 / 26.785 / 34.444 mm; Table 1 prints D28 as    ║
 * ║    0.100 / 0.101 / 0.101, so the extra 0.001 mm at mid and tele is    ║
 * ║    added to D26 (26.786 / 34.445). Air-equivalent BF matches the      ║
 * ║    patent 15.013 / 27.941 / 35.599 mm.                                ║
 * ║                                                                        ║
 * ║  NOTE ON CONIC CONVENTION:                                              ║
 * ║    Patent uses κ in sag equation where K(standard) = κ − 1.           ║
 * ║    S5A: patent κ = 0 → K = −1 (paraboloid).                          ║
 * ║    S11A, S22A, S24A: patent κ = 1 → K = 0 (spherical base).          ║
 * ║    Patent provides coefficients through A10 only; A12–A14 = 0.        ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-z-24-70f4s",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 24-70mm f/4 S",
  subtitle: "WO2019/049372 EXAMPLE 1 — NIKON / UMEDA",

  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 11 GROUPS",
      "f = 24.72 – 67.91 mm (2.75× zoom)",
      "F/4.0 (constant)",
      "2ω ≈ 86.6° (wide) – 33.4° (tele)",
      "4 ASPHERICAL SURFACES (1 AS-ED + 3 asph)",
    ],
    elementCount: 14,
    groupCount: 11,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: [24, 70], design: [24.72, 67.91] },
    fNumber: { marketing: 4, design: 4.0 },
  },

  source: {
    patentNumber: "WO 2019/049372 A1",
    patentYear: 2019,
    authors: ["Takeshi Umeda"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -167.0,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "G1 front — high-dispersion flint, chromatic correction against L12",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.3,
      focalLengthMm: 70.3,
      glass: "J-LASKH2 (Hikari)",
      apd: false,
      role: "G1 rear — dense lanthanum crown, primary positive collector power",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.74353,
      vd: 49.5,
      focalLengthMm: -24.0,
      glass: "M-NBF1 (Hoya catalog equivalent; patent code 744495, supplier unspecified)",
      apd: false,
      role: "G2 variator — strongest single element, paraboloidal rear asph corrects off-axis aberrations",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.755,
      vd: 52.3,
      focalLengthMm: -51.8,
      glass: "J-LASKH2 (Hikari)",
      apd: false,
      role: "G2 — distributes negative power across both surfaces for aberration balance",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 44.6,
      glass: "TAFD40 (HOYA)",
      apd: false,
      role: "G2 corrector — ultra-high index (nd > 2.0) tantalum flint, chromatic/spherical correction",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.55332,
      vd: 71.7,
      focalLengthMm: 42.7,
      glass: "M-FCD500 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote:
        "¶0031: the low-dispersion G3 lens satisfying condition (6) (Example 1 value νd3p = 71.6835, this element) gives G3 anomalous dispersion; Nikon markets it as the AS-ED element",
      role: "G3 lead — AS-ED element, post-stop spherical and axial chromatic aberration correction",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -65.1,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "G3 doublet front — high-index flint, achromatic correction partner to L33",
      cemented: "D3a",
    },
    {
      id: 8,
      name: "L33",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.3,
      focalLengthMm: 36.6,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "G3 doublet rear — phosphate crown, low-dispersion convergence",
      cemented: "D3a",
    },
    {
      id: 9,
      name: "L34",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: -13.9,
      glass: "S-LAH59 (OHARA)",
      apd: false,
      role: "G3 field-correcting doublet front — strong negative, Petzval/astigmatism correction",
      cemented: "D3b",
    },
    {
      id: 10,
      name: "L35",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: 17.7,
      glass: "J-PSKH1 (Hikari)",
      apd: "inferred",
      apdNote: "νd = 67.9, low-Tg lanthanum crown — Nikon's second designated ED element",
      role: "G3 field-correcting doublet rear — ED glass for secondary spectrum correction",
      cemented: "D3b",
    },
    {
      id: 11,
      name: "L41",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.9,
      focalLengthMm: -63.4,
      glass: "J-LAF016 (Hikari)",
      apd: false,
      role: "G4 focus group front — negative element in telephoto-like focusing pair",
    },
    {
      id: 12,
      name: "L42",
      label: "Element 12",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59201,
      vd: 67.0,
      focalLengthMm: 31.7,
      glass: "M-PCD51 (HOYA)",
      apd: false,
      role: "G4 focus group rear — largest aspherical departure, maintains correction across focus range",
    },
    {
      id: 13,
      name: "L51",
      label: "Element 13",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.2,
      focalLengthMm: 92.4,
      glass: "L-BAL35 (OHARA)",
      apd: false,
      role: "G5 field flattener front — aspherical rear corrects off-axis aberrations near image plane",
    },
    {
      id: 14,
      name: "L52",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.3,
      focalLengthMm: -32.0,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "G5 field flattener rear — Petzval correction, telecentricity for mirrorless sensor",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    /* G1 — cemented doublet (L11 + L12) */
    { label: "1", R: 73.0, d: 2.15, sd: 33.0, medium: 1 },
    { label: "2", R: 47.49515, d: 8.6, sd: 32.5, medium: 2 },
    { label: "3", R: 417.0433, sd: 26.5 }, // D3 var — G1/G2 zoom gap

    /* G2 — L21 (asph rear), L22, L23 */
    { label: "4", R: 400.0, d: 1.8, sd: 21.5, medium: 3 },
    {
      label: "5A",
      R: 17.04241,
      d: 8.087,
      sd: 14.4,
      asphere: {
        K: -1, // patent κ = 0 → K = κ − 1 = −1 (paraboloid)
        A4: 2.11342e-5,
        A6: 4.21453e-8,
        A8: -3.77216e-11,
        A10: 4.44697e-13,
        A12: 0,
        A14: 0,
      },
    }, // L21 rear (asph) → air; Fig. 1A curve end
    { label: "6", R: -181.13172, d: 1.35, sd: 13.8, medium: 4 },
    { label: "7", R: 49.98466, d: 2.108, sd: 13.5 },
    { label: "8", R: 37.80684, d: 3.693, sd: 14.5, medium: 5 },
    { label: "9", R: 235.22758, sd: 14.0 }, // D9 var — G2/G3 zoom gap

    /* Aperture stop — travels with G3 during zoom */
    { label: "STO", R: "flat", d: 1.5 }, // radius derived from the design f-number at each zoom station (tele: 8.758 mm)

    /* G3 — L31 (asph front), L32+L33 (cemented), L34+L35 (cemented) */
    {
      label: "11A",
      R: 25.88353,
      d: 4.048,
      sd: 9.8,
      medium: 6,
      // (moved from asph["11A"].K) patent κ = 1 → K = 0 (spherical base)
      asphere: {
        K: 0,
        A4: -5.01541e-6,
        A6: 1.10914e-9,
        A8: 4.72876e-11,
        A10: -3.5528e-13,
        A12: 0,
        A14: 0,
      },
    }, // L31 front (asph)
    { label: "12", R: -254.63176, d: 0.8, sd: 9.8 },
    { label: "13", R: 52.19394, d: 1.0, sd: 9.6, medium: 7 }, // L32 front
    { label: "14", R: 26.38369, d: 3.546, sd: 9.6, medium: 8 }, // L32/L33 junction
    { label: "15", R: -150.0, d: 3.743, sd: 9.6 }, // L33 rear → air
    { label: "16", R: -33.68615, d: 1.0, sd: 8.8, medium: 9 }, // L34 front
    { label: "17", R: 17.28639, d: 6.494, sd: 8.8, medium: 10 }, // L34/L35 junction
    { label: "18", R: -23.04098, sd: 8.8 }, // D18 var — G3/G4 gap

    /* G4 — focusing group (L41, L42 asph rear) */
    { label: "19", R: -22.45485, d: 1.0, sd: 11.0, medium: 11 },
    { label: "20", R: -41.05177, d: 0.103, sd: 11.0 },
    { label: "21", R: 59.92172, d: 6.115, sd: 14.0, medium: 12 },
    {
      label: "22A",
      R: -26.25646,
      sd: 14.0,
      // (moved from asph["22A"].K) patent κ = 1 → K = 0
      asphere: {
        K: 0,
        A4: 1.52181e-5,
        A6: -2.0973e-8,
        A8: -1.77284e-11,
        A10: -1.36838e-13,
        A12: 0,
        A14: 0,
      },
    }, // D22 var — G4/G5 gap

    /* G5 — field flattener (L51 asph rear, L52) */
    { label: "23", R: -40.60645, d: 3.489, sd: 15.0, medium: 13 },
    {
      label: "24A",
      R: -24.0,
      d: 5.786,
      sd: 15.5,
      // (moved from asph["24A"].K) patent κ = 1 → K = 0
      asphere: {
        K: 0,
        A4: 3.09258e-6,
        A6: 3.56902e-8,
        A8: -3.36788e-11,
        A10: 3.80333e-13,
        A12: 0,
        A14: 0,
      },
    }, // L51 rear (asph) → air
    { label: "25", R: -24.36536, d: 1.5, sd: 18.0, medium: 14 },
    { label: "26", R: 107.45414, sd: 17.5 }, // D26 var — gap to the FL plate
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom positions ── */
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 24.72, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 46.31, published: true, publishedFocus: [1] },
      { focalLengthMm: 67.91, label: "Tele", published: true, publishedFocus: [1] },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    description: "Internal focus: G4 (L41 + L42) translates toward object. D18 + D22 sum conserved.",
  },

  /* (moved from var) ── Variable air spacings ──
   *  D3, D9: zoom only (identical inf/close values).
   *  D18, D22: zoom + focus (G4 internal focus, D18+D22 conserved at each zoom position).
   *  D26: zoom only, gap to the FL plate (mid/tele +0.001 for Table 1's D28 = 0.101).
   */
  gaps: {
    "3": {
      label: "D3",
      values: [
        [1.6, 1.6],
        [17.195, 17.195],
        [31.254, 31.254],
      ],
    },
    "9": {
      label: "D9",
      values: [
        [23.69, 23.69],
        [8.562, 8.562],
        [2.895, 2.895],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [4.579, 2.148],
        [8.446, 3.205],
        [10.823, 2.313],
      ],
    },
    "22A": {
      label: "D22",
      values: [
        [8.245, 10.675],
        [4.378, 9.619],
        [2.0, 10.51],
      ],
    },
    "26": {
      label: "BF",
      values: [
        [13.858, 13.858],
        [26.786, 26.786],
        [34.445, 34.445],
      ],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.0, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Filter FL (patent surfaces 27–28): traced, not drawn ── */
  rearPlates: [
    {
      label: "FL",
      thicknessMm: 1.6,
      nd: 1.5168,
      vd: 64.1,
      glass: "J-BK7A",
      gapAfterMm: 0.1,
      source: "WO 2019/049372 A1, Example 1 Table 1 surfaces 27–28",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+125 mm)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (−29 mm)", fromSurface: "4", toSurface: "9" },
    { text: "G3 (+40 mm)", fromSurface: "11A", toSurface: "18" },
    { text: "G4 (+56 mm) FOCUS", fromSurface: "19", toSurface: "22A" },
    { text: "G5 (−52 mm)", fromSurface: "23", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D3a", fromSurface: "13", toSurface: "15" },
    { text: "D3b", fromSurface: "16", toSurface: "18" },
  ],

  /* ── Layout tuning ──
   * Patent Fig. 1 shows the 24 mm state reading taller and more expanded than
   * the raw default framing, especially through G1/G2 and the rear relay stack.
   * Bias the diagram toward that silhouette without altering the prescription.
   */
  layout: { scFill: 0.54, yScFill: 0.36, maxAspectRatio: 2.0, lensShiftFrac: 0.05 },
} satisfies LensDataV2Input;

export default LENS_DATA;
