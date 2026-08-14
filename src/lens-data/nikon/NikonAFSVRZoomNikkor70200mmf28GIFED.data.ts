import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S VR ZOOM-NIKKOR 70-200mm f/2.8G IF-ED             ║
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
 * ║ STO sd = 18.33612184 mm is the independently solved common paraxial value ║
 * ║ that reproduces FNO = 2.88 at all three infinity zoom stations.           ║
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
  key: "nikon-afs-vr-zoom-nikkor-70-200-f28g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S VR ZOOM-NIKKOR 70-200mm f/2.8G IF-ED",
  subtitle: "US 2003/0133200 A1 Example 1 — strong production correlation; tele source label corrected to 196 mm",
  specs: [
    "21 ELEMENTS / 15 GROUPS",
    "70-200mm MARKETED; 71.4-196.0mm DESIGN",
    "f/2.8 MARKETED; f/2.88 MODELED",
    "43.2mm IMAGE CIRCLE",
    "5 ED ELEMENTS (PRODUCTION)",
    "INTERNAL FOCUS / VR",
  ],

  focalLengthMarketing: [70, 200],
  focalLengthDesign: [71.399889, 195.999982],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2003/0133200 A1",
  patentAuthors: ["Susumu Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2003,
  elementCount: 21,
  groupCount: 15,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      fl: -161.067102,
      glass: "804466 — vendor unresolved",
      cemented: "D11-12",
      role: "G1F front negative meniscus; cemented to L12.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 200.898822,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      cemented: "D11-12",
      role: "G1F positive low-dispersion member of the front cemented pair.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 175.07934,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "G1F positive low-dispersion meniscus.",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "L14",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -320.145335,
      glass: "847238 — vendor unresolved",
      role: "G1R negative meniscus; part of the published internal-focus group.",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "L15",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.09,
      fl: 102.225052,
      glass: "S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)",
      role: "G1R positive meniscus; part of the published internal-focus group.",
    },
    {
      id: 6,
      name: "L21",
      diagramLabel: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      fl: -44.931332,
      glass: "741527 — vendor unresolved",
      role: "G2 leading negative element.",
    },
    {
      id: 7,
      name: "L22",
      diagramLabel: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.41,
      fl: -49.113407,
      glass: "487704 — vendor unresolved",
      cemented: "D22-23",
      role: "G2 negative member of the cemented positive pair.",
    },
    {
      id: 8,
      name: "L23",
      diagramLabel: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.43,
      fl: 42.123647,
      glass: "805254 — vendor unresolved",
      cemented: "D22-23",
      role: "G2 positive member of the cemented pair.",
    },
    {
      id: 9,
      name: "L24",
      diagramLabel: "L24",
      label: "L24",
      type: "Biconcave Negative",
      nd: 1.8044,
      vd: 39.59,
      fl: -74.62468,
      glass: "804396 — vendor unresolved",
      role: "G2 rear negative element.",
    },
    {
      id: 10,
      name: "L31",
      diagramLabel: "L31",
      label: "L31",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 168.000836,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "G3 leading positive low-dispersion meniscus.",
    },
    {
      id: 11,
      name: "L32",
      diagramLabel: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 65.510633,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      cemented: "D32-33",
      role: "G3 positive low-dispersion member of the cemented pair.",
    },
    {
      id: 12,
      name: "L33",
      diagramLabel: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.741,
      vd: 52.67,
      fl: -97.904609,
      glass: "741527 — vendor unresolved",
      cemented: "D32-33",
      role: "G3 negative member of the cemented pair.",
    },
    {
      id: 13,
      name: "L41",
      diagramLabel: "L41",
      label: "L41",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: -90.941473,
      glass: "805254 — vendor unresolved",
      cemented: "D41-42",
      role: "G4F negative member of the cemented positive pair behind the aperture stop.",
    },
    {
      id: 14,
      name: "L42",
      diagramLabel: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.52,
      fl: 56.837363,
      glass: "697555 — vendor unresolved",
      cemented: "D41-42",
      role: "G4F positive member of the cemented pair.",
    },
    {
      id: 15,
      name: "L43",
      diagramLabel: "L43",
      label: "L43",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.47,
      fl: 248.418099,
      glass: "603655 — vendor unresolved",
      role: "G4F rear positive meniscus.",
    },
    {
      id: 16,
      name: "L44",
      diagramLabel: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 59.499523,
      glass: "847238 — vendor unresolved",
      cemented: "D44-45",
      role: "G4M positive member of the transversely shifting VR group.",
    },
    {
      id: 17,
      name: "L45",
      diagramLabel: "L45",
      label: "L45",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      fl: -36.008011,
      glass: "741527 — vendor unresolved",
      cemented: "D44-45",
      role: "G4M negative member of the transversely shifting VR group.",
    },
    {
      id: 18,
      name: "L46",
      diagramLabel: "L46",
      label: "L46",
      type: "Biconcave Negative",
      nd: 1.741,
      vd: 52.67,
      fl: -97.357167,
      glass: "741527 — vendor unresolved",
      role: "G4M rear negative element of the transversely shifting VR group.",
    },
    {
      id: 19,
      name: "L47",
      diagramLabel: "L47",
      label: "L47",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 135.032628,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "G4R leading positive low-dispersion meniscus.",
    },
    {
      id: 20,
      name: "L48",
      diagramLabel: "L48",
      label: "L48",
      type: "Biconvex Positive",
      nd: 1.741,
      vd: 52.67,
      fl: 44.202853,
      glass: "741527 — vendor unresolved",
      cemented: "D48-49",
      role: "G4R positive member of the rear cemented pair.",
    },
    {
      id: 21,
      name: "L49",
      diagramLabel: "L49",
      label: "L49",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -78.509242,
      glass: "847238 — vendor unresolved",
      cemented: "D48-49",
      role: "G4R negative member of the rear cemented pair.",
    },
  ],

  surfaces: [
    { label: "1", R: 136.2696, d: 2.2, nd: 1.804, elemId: 1, sd: 35.5 },
    { label: "2", R: 65.921, d: 9, nd: 1.49782, elemId: 2, sd: 35.0 },
    { label: "3", R: 184.6175, d: 0.1, nd: 1.0, elemId: 0, sd: 34.5 },
    { label: "4", R: 73.1041, d: 8.9, nd: 1.49782, elemId: 3, sd: 34.5 },
    { label: "5", R: 435.0246, d: 14.1595, nd: 1.0, elemId: 0, sd: 34.0 },
    { label: "6", R: 65.0851, d: 1.8, nd: 1.84666, elemId: 4, sd: 31.5 },
    { label: "7", R: 51.8175, d: 1.92, nd: 1.0, elemId: 0, sd: 28.6 },
    { label: "8", R: 63.216, d: 8.7, nd: 1.64, elemId: 5, sd: 28.6 },
    { label: "9", R: 1772.4929, d: 2.52314, nd: 1.0, elemId: 0, sd: 30.0 },
    { label: "10", R: -1067.204, d: 1.9, nd: 1.741, elemId: 6, sd: 17.5 },
    { label: "11", R: 34.3923, d: 6.835, nd: 1.0, elemId: 0, sd: 16.1 },
    { label: "12", R: -61.8566, d: 1.8, nd: 1.48749, elemId: 7, sd: 16.1 },
    { label: "13", R: 39.434, d: 7, nd: 1.80518, elemId: 8, sd: 17.0 },
    { label: "14", R: -223.2401, d: 1.803, nd: 1.0, elemId: 0, sd: 16.95 },
    { label: "15", R: -64.5266, d: 1.9, nd: 1.8044, elemId: 9, sd: 16.95 },
    { label: "16", R: 872.3457, d: 34.06279, nd: 1.0, elemId: 0, sd: 17.6 },
    { label: "17", R: -599.1428, d: 3.9, nd: 1.49782, elemId: 10, sd: 18.0 },
    { label: "18", R: -73.5485, d: 0.2, nd: 1.0, elemId: 0, sd: 18.4 },
    { label: "19", R: 93.8405, d: 8, nd: 1.49782, elemId: 11, sd: 18.6 },
    { label: "20", R: -48.567, d: 2, nd: 1.741, elemId: 12, sd: 18.6 },
    { label: "21", R: -149.5043, d: 7.92945, nd: 1.0, elemId: 0, sd: 18.6 },
    { label: "STO", R: 1e15, d: 1, nd: 1.0, elemId: 0, sd: 18.33612184 },
    { label: "23", R: 117.0055, d: 2, nd: 1.80518, elemId: 13, sd: 18.7 },
    { label: "24", R: 44.695, d: 7, nd: 1.6968, elemId: 14, sd: 18.7 },
    { label: "25", R: -325.3499, d: 0.1, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "26", R: 76.1777, d: 3.5, nd: 1.603, elemId: 15, sd: 18.4 },
    { label: "27", R: 152.3247, d: 20.6216, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "29", R: 376.5966, d: 3.8, nd: 1.84666, elemId: 16, sd: 15.2 },
    { label: "30", R: -57.886, d: 1.5, nd: 1.741, elemId: 17, sd: 15.1 },
    { label: "31", R: 50.043, d: 3.9, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "32", R: -246.5579, d: 1.5, nd: 1.741, elemId: 18, sd: 14.8 },
    { label: "33", R: 102.2448, d: 6.6784, nd: 1.0, elemId: 0, sd: 14.7 },
    { label: "35", R: -427.7771, d: 4, nd: 1.49782, elemId: 19, sd: 15.8 },
    { label: "36", R: -58.2736, d: 0.1, nd: 1.0, elemId: 0, sd: 15.7 },
    { label: "37", R: 68.1118, d: 7.5, nd: 1.741, elemId: 20, sd: 15.8 },
    { label: "38", R: -60.14, d: 2, nd: 1.84666, elemId: 21, sd: 15.7 },
    { label: "39", R: -641.0882, d: 66.21049, nd: 1.0, elemId: 0, sd: 15.6 },
  ],

  asph: {},

  var: {
    "5": [
      [14.1595, 4.43994],
      [14.1595, 4.43994],
      [14.1595, 4.43994],
    ],
    "9": [
      [2.52314, 12.24271],
      [17.06549, 26.78505],
      [31.15139, 40.87095],
    ],
    "16": [
      [34.06279, 34.06279],
      [25.29743, 25.29743],
      [1.96176, 1.96176],
    ],
    "21": [
      [7.92945, 7.92945],
      [2.15247, 2.15247],
      [11.40223, 11.40223],
    ],
  },
  varLabels: [
    ["5", "D5 — FOCUS"],
    ["9", "D9 — ZOOM + FOCUS"],
    ["16", "D16 — ZOOM"],
    ["21", "D21 — ZOOM / REVERSAL"],
  ],

  zoomPositions: [71.4, 105, 196],
  zoomLabels: ["Wide", "Tele"],

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

  closeFocusM: 1.5,
  focusDescription:
    "PUBLISHED internal focusing: G1R (L14-L15) translates 9.71956 mm toward the object from infinity to the patent's R=1500 mm object-to-image condition; D5 decreases and D9 increases by the same amount at all three zoom stations.",

  nominalFno: 2.88,
  fstopSeries: [2.88, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  gapSagFrac: 0.93,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
