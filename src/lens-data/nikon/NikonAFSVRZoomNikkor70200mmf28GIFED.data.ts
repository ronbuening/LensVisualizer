import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S VR ZOOM-NIKKOR 70-200mm f/2.8 G IF-ED             ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2003/0133200 A1, Example 1 (Susumu Sato / Nikon Corp.).    ║
 * ║ Production correlation: Nikon AF-S VR Zoom-Nikkor 70-200mm f/2.8G IF-ED. ║
 * ║ 21 elements / 15 air-separated groups; all-spherical prescription.         ║
 * ║ Focus status: PUBLISHED. G1R (L14-L15) moves 9.71956 mm objectward.        ║
 * ║ Zoom stations: 71.4 / 105 / 196 mm modeled EFL control points.             ║
 * ║                                                                           ║
 * ║ SOURCE CORRECTION: Example 1 Table 1 prints tele F = 194.0000 mm, while   ║
 * ║ the same table's conditional block gives FT = 196.0000 mm and independent ║
 * ║ paraxial tracing gives 195.999982 mm. This model therefore uses 196 mm as  ║
 * ║ the tele zoom station and preserves 194 mm only in this source note/audit. ║
 * ║                                                                           ║
 * ║ ZOOM / FOCUS GAPS:                                                        ║
 * ║   D5  — focus only; D9 — zoom + focus; D16 and D21 — zoom only.          ║
 * ║   G3/D21 reverses after the middle station; all three stations retained.  ║
 * ║   BF is fixed at 66.21049 mm and is not authored as a variable gap.       ║
 * ║                                                                           ║
 * ║ OMITTED SOURCE PLANES: field stops S2 (source s28) and S3 (source s34)    ║
 * ║ are zero-power air/air bookkeeping planes with no published aperture.      ║
 * ║ Their air lengths are folded into s27→s29 (20.6216 mm) and s33→s35        ║
 * ║ (6.6784 mm), preserving every powered-surface axial station.               ║
 * ║                                                                           ║
 * ║ APERTURE: source S1 is the only STO. Its physical diameter is not listed. ║
 * ║ The stop radius is derived from the design f-number, FNO = 2.88, and held ║
 * ║ at every zoom station. The former independently solved common paraxial    ║
 * ║ stop reproduced FNO = 2.88 at all three infinity zoom stations.           ║
 * ║                                                                           ║
 * ║ SEMI-DIAMETERS: source-specific φF = 37.4 mm and φM = 30.4 mm set the     ║
 * ║ G4F/G4M maxima. Remaining SDs are constrained by exact-Snell marginal and ║
 * ║ chief-ray envelopes, the 21.6 mm image height, Nikon's 77 mm filter size, ║
 * ║ and the current edge/slope/shared-band geometry checks. gapSagFrac = 0.93 ║
 * ║ is required only by the nested L14→L15 gap: at sd = 28.6 mm the 1.92 mm  ║
 * ║ axial gap retains 0.15194 mm positive rim clearance (92.09% intrusion).   ║
 * ║ Figure 1 shows L47 and the L48/L49 pair at essentially equal apertures;     ║
 * ║ their near-equal 15.8/15.7 mm envelopes preserve that measured silhouette. ║
 * ║                                                                           ║
 * ║ GLASS: the patent gives nd/νd but no vendor names or per-line indices.     ║
 * ║ Compatible coefficient-backed catalog equivalents model dispersion without ║
 * ║ asserting production suppliers; nC/nF/ng/dPgF remain intentionally absent. ║
 * ║                                                                           ║
 * ║ No prescription scaling is applied.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-afs-vr-zoom-nikkor-70-200-f28g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S VR ZOOM-NIKKOR 70-200mm f/2.8 G IF-ED",
  subtitle: "US 2003/0133200 A1 Example 1 — strong production correlation; tele source label corrected to 196 mm",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "21 ELEMENTS / 15 GROUPS",
      "70-200mm MARKETED; 71.4-196.0mm DESIGN",
      "f/2.8 MARKETED; f/2.88 MODELED",
      "43.2mm IMAGE CIRCLE",
      "5 ED ELEMENTS (PRODUCTION)",
      "INTERNAL FOCUS / VR",
    ],
    elementCount: 21,
    groupCount: 15,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: [70, 200], design: [71.399889, 195.999982] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 2003/0133200 A1",
    patentYear: 2003,
    authors: ["Susumu Sato"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      focalLengthMm: -161.067102,
      glass: "804466 — vendor unresolved",
      role: "G1F front negative meniscus; cemented to L12.",
      diagramLabel: "L11",
      cemented: "D11-12",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 200.898822,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "G1F positive low-dispersion member of the front cemented pair.",
      diagramLabel: "L12",
      cemented: "D11-12",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 175.07934,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "G1F positive low-dispersion meniscus.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -320.145335,
      glass: "847238 — vendor unresolved",
      role: "G1R negative meniscus; part of the published internal-focus group.",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.09,
      focalLengthMm: 102.225052,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      role: "G1R positive meniscus; part of the published internal-focus group.",
      diagramLabel: "L15",
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      focalLengthMm: -44.931332,
      glass: "741527 — vendor unresolved",
      role: "G2 leading negative element.",
      diagramLabel: "L21",
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.41,
      focalLengthMm: -49.113407,
      glass: "487704 — vendor unresolved",
      role: "G2 negative member of the cemented positive pair.",
      diagramLabel: "L22",
      cemented: "D22-23",
    },
    {
      id: 8,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.43,
      focalLengthMm: 42.123647,
      glass: "805254 — vendor unresolved",
      role: "G2 positive member of the cemented pair.",
      diagramLabel: "L23",
      cemented: "D22-23",
    },
    {
      id: 9,
      name: "L24",
      label: "L24",
      type: "Biconcave Negative",
      nd: 1.8044,
      vd: 39.59,
      focalLengthMm: -74.62468,
      glass: "804396 — vendor unresolved",
      role: "G2 rear negative element.",
      diagramLabel: "L24",
    },
    {
      id: 10,
      name: "L31",
      label: "L31",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 168.000836,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "G3 leading positive low-dispersion meniscus.",
      diagramLabel: "L31",
    },
    {
      id: 11,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 65.510633,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "G3 positive low-dispersion member of the cemented pair.",
      diagramLabel: "L32",
      cemented: "D32-33",
    },
    {
      id: 12,
      name: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.741,
      vd: 52.67,
      focalLengthMm: -97.904609,
      glass: "741527 — vendor unresolved",
      role: "G3 negative member of the cemented pair.",
      diagramLabel: "L33",
      cemented: "D32-33",
    },
    {
      id: 13,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.43,
      focalLengthMm: -90.941473,
      glass: "805254 — vendor unresolved",
      role: "G4F negative member of the cemented positive pair behind the aperture stop.",
      diagramLabel: "L41",
      cemented: "D41-42",
    },
    {
      id: 14,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.52,
      focalLengthMm: 56.837363,
      glass: "697555 — vendor unresolved",
      role: "G4F positive member of the cemented pair.",
      diagramLabel: "L42",
      cemented: "D41-42",
    },
    {
      id: 15,
      name: "L43",
      label: "L43",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: 248.418099,
      glass: "603655 — vendor unresolved",
      role: "G4F rear positive meniscus.",
      diagramLabel: "L43",
    },
    {
      id: 16,
      name: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 59.499523,
      glass: "847238 — vendor unresolved",
      role: "G4M positive member of the transversely shifting VR group.",
      diagramLabel: "L44",
      cemented: "D44-45",
    },
    {
      id: 17,
      name: "L45",
      label: "L45",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      focalLengthMm: -36.008011,
      glass: "741527 — vendor unresolved",
      role: "G4M negative member of the transversely shifting VR group.",
      diagramLabel: "L45",
      cemented: "D44-45",
    },
    {
      id: 18,
      name: "L46",
      label: "L46",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      focalLengthMm: -97.357167,
      glass: "741527 — vendor unresolved",
      role: "G4M rear negative element of the transversely shifting VR group.",
      diagramLabel: "L46",
    },
    {
      id: 19,
      name: "L47",
      label: "L47",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 135.032628,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "G4R leading positive low-dispersion meniscus.",
      diagramLabel: "L47",
    },
    {
      id: 20,
      name: "L48",
      label: "L48",
      type: "Biconvex Positive",
      nd: 1.741,
      vd: 52.67,
      focalLengthMm: 44.202853,
      glass: "741527 — vendor unresolved",
      role: "G4R positive member of the rear cemented pair.",
      diagramLabel: "L48",
      cemented: "D48-49",
    },
    {
      id: 21,
      name: "L49",
      label: "L49",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -78.509242,
      glass: "847238 — vendor unresolved",
      role: "G4R negative member of the rear cemented pair.",
      diagramLabel: "L49",
      cemented: "D48-49",
    },
  ],

  surfaces: [
    { label: "1", R: 136.2696, d: 2.2, sd: 35.5, medium: 1 },
    { label: "2", R: 65.921, d: 9, sd: 35.0, medium: 2 },
    { label: "3", R: 184.6175, d: 0.1, sd: 34.5 },
    { label: "4", R: 73.1041, d: 8.9, sd: 34.5, medium: 3 },
    { label: "5", R: 435.0246, sd: 34.0 },
    { label: "6", R: 65.0851, d: 1.8, sd: 31.5, medium: 4 },
    { label: "7", R: 51.8175, d: 1.92, sd: 28.6 },
    { label: "8", R: 63.216, d: 8.7, sd: 28.6, medium: 5 },
    { label: "9", R: 1772.4929, sd: 30.0 },
    { label: "10", R: -1067.204, d: 1.9, sd: 17.5, medium: 6 },
    { label: "11", R: 34.3923, d: 6.835, sd: 16.1 },
    { label: "12", R: -61.8566, d: 1.8, sd: 16.1, medium: 7 },
    { label: "13", R: 39.434, d: 7, sd: 17.0, medium: 8 },
    { label: "14", R: -223.2401, d: 1.803, sd: 16.95 },
    { label: "15", R: -64.5266, d: 1.9, sd: 16.95, medium: 9 },
    { label: "16", R: 872.3457, sd: 17.6 },
    { label: "17", R: -599.1428, d: 3.9, sd: 18.0, medium: 10 },
    { label: "18", R: -73.5485, d: 0.2, sd: 18.4 },
    { label: "19", R: 93.8405, d: 8, sd: 18.6, medium: 11 },
    { label: "20", R: -48.567, d: 2, sd: 18.6, medium: 12 },
    { label: "21", R: -149.5043, sd: 18.6 },
    { label: "STO", R: "flat", d: 1 },
    { label: "23", R: 117.0055, d: 2, sd: 18.7, medium: 13 },
    { label: "24", R: 44.695, d: 7, sd: 18.7, medium: 14 },
    { label: "25", R: -325.3499, d: 0.1, sd: 18.5 },
    { label: "26", R: 76.1777, d: 3.5, sd: 18.4, medium: 15 },
    { label: "27", R: 152.3247, d: 20.6216, sd: 18.0 },
    { label: "29", R: 376.5966, d: 3.8, sd: 15.2, medium: 16 },
    { label: "30", R: -57.886, d: 1.5, sd: 15.1, medium: 17 },
    { label: "31", R: 50.043, d: 3.9, sd: 15.0 },
    { label: "32", R: -246.5579, d: 1.5, sd: 14.8, medium: 18 },
    { label: "33", R: 102.2448, d: 6.6784, sd: 14.7 },
    { label: "35", R: -427.7771, d: 4, sd: 15.8, medium: 19 },
    { label: "36", R: -58.2736, d: 0.1, sd: 15.7 },
    { label: "37", R: 68.1118, d: 7.5, sd: 15.8, medium: 20 },
    { label: "38", R: -60.14, d: 2, sd: 15.7, medium: 21 },
    { label: "39", R: -641.0882, d: 66.21049, sd: 15.6 },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 71.4, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 105, published: true, publishedFocus: [1] },
      { focalLengthMm: 196, label: "Tele", published: true, publishedFocus: [1] },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.5,
    description:
      "PUBLISHED internal focusing: G1R (L14-L15) translates 9.71956 mm toward the object from infinity to the patent's R=1500 mm object-to-image condition; D5 decreases and D9 increases by the same amount at all three zoom stations.",
  },

  gaps: {
    "5": {
      label: "D5 — FOCUS",
      values: [
        [14.1595, 4.43994],
        [14.1595, 4.43994],
        [14.1595, 4.43994],
      ],
    },
    "9": {
      label: "D9 — ZOOM + FOCUS",
      values: [
        [2.52314, 12.24271],
        [17.06549, 26.78505],
        [31.15139, 40.87095],
      ],
    },
    "16": {
      label: "D16 — ZOOM",
      values: [
        [34.06279, 34.06279],
        [25.29743, 25.29743],
        [1.96176, 1.96176],
      ],
    },
    "21": {
      label: "D21 — ZOOM / REVERSAL",
      values: [
        [7.92945, 7.92945],
        [2.15247, 2.15247],
        [11.40223, 11.40223],
      ],
    },
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1F", fromSurface: "1", toSurface: "5" },
    { text: "G1R", fromSurface: "6", toSurface: "9" },
    { text: "G2", fromSurface: "10", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "21" },
    { text: "G4F", fromSurface: "STO", toSurface: "27" },
    { text: "G4M", fromSurface: "29", toSurface: "33" },
    { text: "G4R", fromSurface: "35", toSurface: "39" },
  ],
  doublets: [
    { text: "D11", fromSurface: "1", toSurface: "3" },
    { text: "D22", fromSurface: "12", toSurface: "14" },
    { text: "D32", fromSurface: "19", toSurface: "21" },
    { text: "D41", fromSurface: "23", toSurface: "25" },
    { text: "D44", fromSurface: "29", toSurface: "31" },
    { text: "D48", fromSurface: "37", toSurface: "39" },
  ],

  layout: { yScFill: 0.58 },

  checks: { gapSagFrac: 0.93 },
} satisfies LensDataV2Input;

export default LENS_DATA;
