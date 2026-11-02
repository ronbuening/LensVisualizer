import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * TAMRON SP 70-300mm f/4-5.6 Di VC USD (A005).
 * Source: US8,228,605B2 Example2, native scale; all17 media freshly checked PDF28,
 * d587.56nm plot convention PDF25, Fig12 PDF13 (native300dpi /600dpi inspection).
 * Source summary71.75/150/292.00mm vs adjacent tele heading292.50 is retained as a source erratum.
 * All spherical. Source stop13 is modeled flat; no plate, dummy plane or fabricated VC decenter.
 * Source nd/vd only; vendor-neutral classes resolve17 qualified compatible curves, without
 * production supplier/melt or measured partial-dispersion attribution.
 * NO_INTERNAL_RECONSTRUCTION: identical infinity/close zoom pairs, production MOD1.5m metadata only.
 * D5/D12/D18/BF retain all3 source states and D18 reversal. Marketing70–300/f4–5.6 remains separate.
 * Printed FNO4.1/4.83/5.85 admits paraxial fixed-iris midpoint13.9203457mm; authored nominal values
 *4.1218709542/4.8269570055/5.8526252296 retain it. Real iris14.0201mm gives f4.122/4.838/5.875.
 * 2026-10-30 source-outline review: continuous caps S6→14.1,S9/S10→15.8,S12→15,
 * S14/S15→16.2,S16/S17→16.7,S19/S20→15.6. Independently drawn air-facing lands preserve
 * caps S8=13.06→outer15.8,S11=13.5→15,S18=14.5→16.7,S21=14.3→15.6.
 * The full S7 rear land to14.1 is rejected: unchanged .96 gap rule to S8 permits only a cap
 * below the full-beam requirement. S7 stays12.7, so L104 retains its constrained rear outline.
 * The tight7→8 gap keeps .959985 intrusion and .122mm air; no tolerance/gap/source-radius edits.
 * Source figures give inferred outer rims, never measured production clear apertures.
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
    focalLengthMm: {
      marketing: [70, 300],
      design: [71.74990140102719, 292.0140449910131],
    },
    fNumber: { marketing: 4, design: 4.121870954179845 },
  },

  source: {
    patentNumber: "US 8,228,605 B2",
    example: { label: "Example 2", id: "2" },
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
    { label: "6", R: -213.5045, d: 1.2, sd: 14.1, medium: 4 },
    { label: "7", R: 56.253, d: 3.0571, sd: 12.7 },
    {
      label: "8",
      R: -55.1425,
      d: 1.2,
      sd: 13.06,
      medium: 5,
      rimExtensionSd: 15.8,
    },
    { label: "9", R: 47.9635, d: 4.1563, sd: 15.8, medium: 6 },
    { label: "10", R: -133.8489, d: 1.3243, sd: 15.8 },
    {
      label: "11",
      R: -49.3822,
      d: 1.2,
      sd: 13.5,
      medium: 7,
      rimExtensionSd: 15,
    },
    { label: "12", R: -169.9332, sd: 15 },
    { label: "STO", R: "flat", d: 1.0 },
    { label: "14", R: 79.138, d: 4.3069, sd: 16.2, medium: 8 },
    { label: "15", R: -79.138, d: 0.2, sd: 16.2 },
    { label: "16", R: 56.1087, d: 5.8909, sd: 16.7, medium: 9 },
    { label: "17", R: -45.5752, d: 1.2, sd: 16.7, medium: 10 },
    { label: "18", R: 156.9544, sd: 14.5, rimExtensionSd: 16.7 },
    { label: "19", R: 49.6914, d: 5.071, sd: 15.6, medium: 11 },
    { label: "20", R: -64.2211, d: 1.0, sd: 15.6, medium: 12 },
    { label: "21", R: 64.2211, d: 0.2, sd: 14.3, rimExtensionSd: 15.6 },
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
      {
        focalLengthMm: 71.75,
        nominalFNumber: 4.121870954179845,
        label: "Wide",
      },
      { focalLengthMm: 150.0, nominalFNumber: 4.826957005511833 },
      {
        focalLengthMm: 292.0,
        nominalFNumber: 5.852625229580979,
        label: "Tele",
      },
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

  aperture: {
    fStops: [4, 5.6, 8, 11, 16, 22, 32, 45],
    maxFNumber: 45,
    blades: 9,
  },

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
