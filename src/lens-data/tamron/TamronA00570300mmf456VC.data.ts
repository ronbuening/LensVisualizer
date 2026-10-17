import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — TAMRON SP 70-300mm f/4-5.6 Di VC USD (A005)                    ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 8,228,605 B2, Example 2 (Arakawa / Wei; Tamron Co., Ltd.).      ║
 * ║ Correlation: 17 elements / 12 air-spaced groups, 135/full-frame coverage,  ║
 * ║ four functional zoom groups (+/−/+/+), and IV-2 transverse VC subgroup.    ║
 * ║                                                                            ║
 * ║ DESIGN / SOURCE NORMALIZATION                                              ║
 * ║ - Scale factor s = 1.0. No production-focal-length rescaling is applied.   ║
 * ║ - Marketing 70–300mm is kept separate from the verified Example 2 design.  ║
 * ║ - Example 2 summary gives 71.75–150.00–292.00mm. The adjacent spacing      ║
 * ║   table prints 292.50 in its tele header; that raw typo is preserved in    ║
 * ║   the audit, while the modeled tele state is 292.00mm. Independent trace   ║
 * ║   gives EFL ≈ 292.014mm.                                                   ║
 * ║ - Surface 13 is the published aperture stop. Its raw R=0.0000 is modeled   ║
 * ║   as one flat STO plane (R=1e15), not a refracting zero-radius surface.    ║
 * ║ - All refracting surfaces are spherical; no aspheres are published.        ║
 * ║                                                                            ║
 * ║ ZOOM / FOCUS                                                               ║
 * ║ - Zoom-only variables: D5, D12, D18, BF. All infinity/close pairs are      ║
 * ║   intentionally identical because Example 2 publishes no focus movement.   ║
 * ║ - D18 reverses (4.3009 → 2.0000 → 6.0952mm); the group-II path also        ║
 * ║   reverses in the fixed-image reference frame. Piecewise zoom interpolation║
 * ║   must retain the intermediate 150mm state.                                ║
 * ║ - Focus status: NO_INTERNAL_RECONSTRUCTION. Tamron's 1.5m production MOD   ║
 * ║   is metadata only and is not used to invent internal focus travel.        ║
 * ║                                                                            ║
 * ║ STOP / F-NUMBER                                                            ║
 * ║ - The patent prints Fno. 4.1 / 4.83 / 5.85 and no stop diameter. The       ║
 * ║   midpoint of the paraxial fixed-stop interval (13.9147–13.9260 mm) fits   ║
 * ║   all three printed F-number rounding ranges.                              ║
 * ║ - nominalFno carries the paraxial f-numbers for that midpoint radius at    ║
 * ║   the three zoom states: 4.1218709542, 4.8269570055, 5.8526252296.         ║
 * ║ - zoomApertureModel "fixed-iris": the engine opens the iris to the         ║
 * ║   wide-end real-ray radius, 14.0201mm, and holds it. The iris alone gives  ║
 * ║   f/4.122, f/4.838 and f/5.875.                                            ║
 * ║ - Traced on axis: f/4.12 at 71.75mm, f/4.84 at 150mm and f/5.87 at 292mm,  ║
 * ║   each limited by the iris (at the stated value, 0.2% slower and 0.4%      ║
 * ║   slower). No rim sits below the stated on-axis ray (see SEMI-DIAMETERS).  ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS                                                             ║
 * ║ - The patent does not publish clear semi-diameters. Values below are a     ║
 * ║   constrained model inferred from paraxial marginal/chief-ray envelopes,   ║
 * ║   the Fig. 12 optical section, the production 62mm filter context, and the ║
 * ║   current edge-thickness/rim-slope/cross-gap rules.                        ║
 * ║ - Group II and L109 are sized by the stated on-axis ray (f/5.8526 at       ║
 * ║   292mm). It reaches 12.695 / 12.424mm on surfaces 6 / 7, 12.427 / 12.896  ║
 * ║   / 13.055mm on 8 / 9 / 10, 13.072 / 13.452mm on 11 / 12 and 14.554 /      ║
 * ║   14.581mm on 14 / 15.                                                     ║
 * ║ - Fig. 12 draws L104, the L105/L106 doublet, L107 and L109 with square-cut ║
 * ║   rims, so each carries one value: the highest ray height on its faces,    ║
 * ║   rounded up at the file's precision. L104 12.70mm, L105/L106 13.06mm,     ║
 * ║   L107 13.5mm, L109 14.6mm.                                                ║
 * ║ - gapSagFrac is 0.96 for the L104 rear / L105 front pair (surfaces 7→8,    ║
 * ║   3.0571mm gap). At the 12.70mm L104 rim the combined sag is ≈0.95999×gap  ║
 * ║   with 0.122mm of rim air, and Fig. 12 draws the L104 rear corners meeting ║
 * ║   the L105 front face. The next-tightest gap is 10→11 at ≈0.84543×gap.     ║
 * ║ - Fig. 12 draws the L105/L106 doublet about 5% taller than L107 and L109   ║
 * ║   about 4% shorter than L110/L111. The model has L107 0.44mm taller than   ║
 * ║   the doublet and L109 0.1mm taller than L110/L111, as the ray heights set.║
 * ║ - The L115/L116 VC doublet is limited to 11.80mm by L115 edge thickness;   ║
 * ║   the modeled L115 rim retains ≈0.265mm physical edge thickness.           ║
 * ║ - Default on/off-axis rendered ray fans are contained by every cemented    ║
 * ║   interface at all three published zoom states in the local Stage 2 check. ║
 * ║                                                                            ║
 * ║ GLASS                                                                      ║
 * ║ - The patent publishes nd/νd only. Glass strings are conservative six-digit║
 * ║   coordinate classes; vendor/melt identity is intentionally not asserted.  ║
 * ║ - No nC, nF, ng, or dPgF values are authored because none are published or ║
 * ║   independently established for the patent elements.                       ║
 * ║                                                                            ║
 * ║ No sensor cover glass, filter, inactive dummy plane, or mechanical part is ║
 * ║ included.                                                                  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "tamron-a005-70-300-f4-5-6-vc",
  maker: "Tamron",
  name: "TAMRON SP 70-300mm f/4-5.6 Di VC USD",
  subtitle: "US 8,228,605 B2 Example 2 — A005 correlation",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "17 ELEMENTS / 12 GROUPS",
      "DESIGN 71.75–292.00mm",
      "MODELED f/4.122–5.853",
      "2ω = 33.67°–8.46°",
      "ALL-SPHERICAL",
    ],
    elementCount: 17,
    groupCount: 12,
    focalLengthMm: { marketing: [70, 300], design: [71.74990140102719, 292.0140449910131] },
    fNumber: { marketing: 4, design: 4.121870954179845 },
  },

  source: {
    patentNumber: "US 8,228,605 B2",
    patentYear: 2012,
    authors: ["Akio Arakawa", "Lai Wei"],
    assignees: ["Tamron Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L101",
      label: "Lens 101",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 353.34117447240004,
      glass: "487702 class (vendor unspecified)",
      diagramLabel: "101",
    },
    {
      id: 2,
      name: "L102",
      label: "Lens 102",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -239.0731491348908,
      glass: "699301 class (vendor unspecified)",
      diagramLabel: "102",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L103",
      label: "Lens 103",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.9,
      focalLengthMm: 99.39558025335364,
      glass: "439950 class (vendor unspecified)",
      diagramLabel: "103",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L104",
      label: "Lens 104",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -57.522736144013585,
      glass: "773496 class (vendor unspecified)",
      diagramLabel: "104",
    },
    {
      id: 5,
      name: "L105",
      label: "Lens 105",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -33.03829029292086,
      glass: "773496 class (vendor unspecified)",
      diagramLabel: "105",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L106",
      label: "Lens 106",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 42.14722863317934,
      glass: "847238 class (vendor unspecified)",
      diagramLabel: "106",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L107",
      label: "Lens 107",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: -113.06905003326764,
      glass: "618634 class (vendor unspecified)",
      diagramLabel: "107",
    },
    {
      id: 8,
      name: "L109",
      label: "Lens 109",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 45.3912089340323,
      glass: "883408 class (vendor unspecified)",
      diagramLabel: "109",
    },
    {
      id: 9,
      name: "L110",
      label: "Lens 110",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 51.5922769268001,
      glass: "K-PFK80 / MC-FCD1-M20 class (production supplier unspecified)",
      diagramLabel: "110",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L111",
      label: "Lens 111",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -38.975233975684816,
      glass: "904313 class (vendor unspecified)",
      diagramLabel: "111",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L112",
      label: "Lens 112",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 58.31826512365908,
      glass: "487702 class (vendor unspecified)",
      diagramLabel: "112",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L113",
      label: "Lens 113",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: -35.12420070651399,
      glass: "911353 class (vendor unspecified)",
      diagramLabel: "113",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L114",
      label: "Lens 114",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.2,
      focalLengthMm: 48.06101519891134,
      glass: "517522 class (vendor unspecified)",
      diagramLabel: "114",
    },
    {
      id: 14,
      name: "L115",
      label: "Lens 115",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: 33.21188224322557,
      glass: "806333 class (vendor unspecified)",
      diagramLabel: "115",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L116",
      label: "Lens 116",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -21.354102833765726,
      glass: "773496 class (vendor unspecified)",
      diagramLabel: "116",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L117",
      label: "Lens 117",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.7,
      focalLengthMm: 55.2865614322084,
      glass: "806407 class (vendor unspecified)",
      diagramLabel: "117",
    },
    {
      id: 17,
      name: "L118",
      label: "Lens 118",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -68.67214951648853,
      glass: "773496 class (vendor unspecified)",
      diagramLabel: "118",
    },
  ],

  surfaces: [
    { label: "1", R: 343.8744, d: 3.8144, sd: 28.0, medium: 1 },
    { label: "2", R: -343.8744, d: 14.8434, sd: 28.0 },
    { label: "3", R: 65.4212, d: 1.5, sd: 24.8, medium: 2 },
    { label: "4", R: 46.5711, d: 8.4101, sd: 24.8, medium: 3 },
    { label: "5", R: -648.0663, sd: 24.8 },
    { label: "6", R: -213.5045, d: 1.2, sd: 12.7, medium: 4 },
    { label: "7", R: 56.253, d: 3.0571, sd: 12.7 },
    { label: "8", R: -55.1425, d: 1.2, sd: 13.06, medium: 5 },
    { label: "9", R: 47.9635, d: 4.1563, sd: 13.06, medium: 6 },
    { label: "10", R: -133.8489, d: 1.3243, sd: 13.06 },
    { label: "11", R: -49.3822, d: 1.2, sd: 13.5, medium: 7 },
    { label: "12", R: -169.9332, sd: 13.5 },
    { label: "STO", R: "flat", d: 1.0 },
    { label: "14", R: 79.138, d: 4.3069, sd: 14.6, medium: 8 },
    { label: "15", R: -79.138, d: 0.2, sd: 14.6 },
    { label: "16", R: 56.1087, d: 5.8909, sd: 14.5, medium: 9 },
    { label: "17", R: -45.5752, d: 1.2, sd: 14.5, medium: 10 },
    { label: "18", R: 156.9544, sd: 14.5 },
    { label: "19", R: 49.6914, d: 5.071, sd: 14.3, medium: 11 },
    { label: "20", R: -64.2211, d: 1.0, sd: 14.3, medium: 12 },
    { label: "21", R: 64.2211, d: 0.2, sd: 14.3 },
    { label: "22", R: 34.7404, d: 5.9458, sd: 14.1, medium: 13 },
    { label: "23", R: -82.3989, d: 14.1294, sd: 14.1 },
    { label: "24", R: 1471.7974, d: 3.0, sd: 11.8, medium: 14 },
    { label: "25", R: -27.2433, d: 1.0, sd: 11.8, medium: 15 },
    { label: "26", R: 42.4849, d: 3.5054, sd: 11.8 },
    { label: "27", R: 65.984, d: 3.1265, sd: 12.0, medium: 16 },
    { label: "28", R: -134.3988, d: 9.0657, sd: 12.0 },
    { label: "29", R: -20.1696, d: 1.2, sd: 12.5, medium: 17 },
    { label: "30", R: -33.3862, sd: 12.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 71.75, nominalFNumber: 4.121870954179845, label: "Wide" },
      { focalLengthMm: 150.0, nominalFNumber: 4.826957005511833 },
      { focalLengthMm: 292.0, nominalFNumber: 5.852625229580979, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.5,
    description:
      "NO_INTERNAL_RECONSTRUCTION: Example 2 publishes infinity-focus zoom spacings only. Tamron's 1.5 m production MOD is retained as metadata; no internal close-focus motion is modeled.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [3.5, 3.5],
        [32.0254, 32.0254],
        [46.4397, 46.4397],
      ],
    },
    "12": {
      label: "D12",
      values: [
        [31.2341, 31.2341],
        [17.5696, 17.5696],
        [2.5, 2.5],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [4.3009, 4.3009],
        [2.0, 2.0],
        [6.0952, 6.0952],
      ],
    },
    "30": {
      label: "BF",
      values: [
        [47.5369, 47.5369],
        [62.6975, 62.6975],
        [81.5776, 81.5776],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22, 32, 45], maxFNumber: 45, blades: 9 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "5" },
    { text: "II", fromSurface: "6", toSurface: "12" },
    { text: "III", fromSurface: "14", toSurface: "18" },
    { text: "IV", fromSurface: "19", toSurface: "30" },
    { text: "141", fromSurface: "19", toSurface: "23" },
    { text: "142", fromSurface: "24", toSurface: "26" },
    { text: "143", fromSurface: "27", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5 / VC", fromSurface: "24", toSurface: "26" },
  ],

  layout: { yScFill: 0.36 },

  checks: {
    gapSagFrac: 0.96, // L104 rear (7) / L105 front (8): 0.122 mm of rim air at the 12.7 mm L104 rim (0.95999 of the gap)
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
