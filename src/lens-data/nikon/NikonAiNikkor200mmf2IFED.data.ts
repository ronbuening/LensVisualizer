import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI NIKKOR ED 200mm f/2S IF                           ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,176,913 A, Example 2 / Second Embodiment.              ║
 * ║ Production correlation: Nikon NIKKOR — The Thousand and One Nights No.31.║
 * ║ 10 elements / 8 air-separated groups; all spherical.                     ║
 * ║ Focus status: PUBLISHED. The complete negative middle group translates   ║
 * ║ 17.000 mm toward the image side: d6 41.201→58.201 mm and d11             ║
 * ║ 22.912→5.912 mm. The published endpoint is β≈-0.1; it is not a          ║
 * ║ reconstruction of the marketed minimum-focus setting.                    ║
 * ║                                                                            ║
 * ║ STOP MODELING INFERENCE: Example 2 publishes F/2.0 but no stop surface.   ║
 * ║ Nikon's production cross-section places the iris in the 22.000 mm air gap ║
 * ║ between r16 and r17. The gap is therefore split 12.000 / 10.000 mm,       ║
 * ║ preserving the patent's total axial spacing. STO sd=19.210431 mm is       ║
 * ║ solved paraxially so the infinity-state entrance-pupil radius is          ║
 * ║ 50.000000 mm at EFL=200.000531 mm, giving modeled F/#≈2.000005.           ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETER MODELING INFERENCE: the patent does not tabulate clear      ║
 * ║ apertures. SDs are constrained from the 50 mm entrance pupil, Nikon's     ║
 * ║ production cross-section, the relative group apertures in FIG. 2, and     ║
 * ║ edge/rim/cross-gap geometry checks. The focus and rear groups were        ║
 * ║ enlarged from their draft values to follow FIG. 2's optical rims more     ║
 * ║ closely while retaining positive edge thickness. They are not patent      ║
 * ║ values.                                                                    ║
 * ║                                                                            ║
 * ║ SPECTRAL DATA LIMIT: the patent provides only nd and νd. No nC, nF, ng,   ║
 * ║ PgF, or dPgF values are published, so those fields are intentionally      ║
 * ║ omitted rather than synthesized from Abbe numbers or speculative glass    ║
 * ║ identities.                                                               ║
 * ║                                                                            ║
 * ║ No dimensional scaling is applied. No protective filter is included.     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-nikkor-200mm-f2-if-ed",
  maker: "Nikon",
  name: "NIKON AI NIKKOR ED 200mm f/2S IF",
  subtitle: "US 4,176,913 A — Example 2 / Second Embodiment",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "f = 200 mm",
    "F/2",
    "2ω = 12.32°",
    "2 ED ELEMENTS",
    "INTERNAL FOCUS",
  ],

  focalLengthMarketing: 200,
  focalLengthDesign: 200.00053148612758,
  apertureMarketing: 2,
  apertureDesign: 2.000005314861276,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,176,913 A",
  patentAuthors: ["Soichi Nakamura", "Kiyoshi Hayashi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1979,
  elementCount: 10,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11 / ED",
      label: "Front ED element 1",
      type: "Biconvex Positive",
      nd: 1.50032,
      vd: 81.9,
      fl: 293.5572522177496,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 500819; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification follows Nikon's identification of the first two production elements; J-FKH1 is only a coordinate-compatible spectral proxy.",
      role: "First ED collector element in the fixed front positive group.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12 / ED",
      label: "Front ED element 2",
      type: "Biconvex Positive",
      nd: 1.50032,
      vd: 81.9,
      fl: 191.26204226142167,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 500819; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification follows Nikon's identification of the first two production elements; J-FKH1 is only a coordinate-compatible spectral proxy.",
      role: "Second ED collector element in the fixed front positive group.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Front negative element",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -300.2647401993833,
      glass: "E-FD4 catalog-equivalent coefficient proxy (patent 755275; production supplier unspecified)",
      role: "Negative element completing the fixed front group.",
    },
    {
      id: 4,
      name: "L21a",
      diagramLabel: "L21a",
      label: "Focus cemented component front",
      type: "Positive Meniscus (cemented)",
      nd: 1.79504,
      vd: 28.4,
      fl: 229.60181776620763,
      glass: "J-LAFH3 catalog-equivalent coefficient proxy (patent 795284; production supplier unspecified)",
      cemented: "L21",
      role: "Front element of the cemented component in the translating negative focus group.",
    },
    {
      id: 5,
      name: "L21b",
      diagramLabel: "L21b",
      label: "Focus cemented component rear",
      type: "Biconcave Negative (cemented)",
      nd: 1.4645,
      vd: 65.8,
      fl: -186.9234437553487,
      glass: "FK3 catalog-equivalent coefficient proxy (patent 465658; production supplier unspecified)",
      cemented: "L21",
      role: "Rear element of the cemented component in the translating negative focus group.",
    },
    {
      id: 6,
      name: "L22",
      diagramLabel: "L22",
      label: "Focus negative element",
      type: "Biconcave Negative",
      nd: 1.4645,
      vd: 65.8,
      fl: -102.27879840366104,
      glass: "FK3 catalog-equivalent coefficient proxy (patent 465658; production supplier unspecified)",
      role: "Strong negative element completing the translating focus group.",
    },
    {
      id: 7,
      name: "L31",
      diagramLabel: "L31",
      label: "Rear positive element",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.6,
      fl: 108.35947367893924,
      glass: "H-LaK6A catalog-equivalent coefficient proxy (patent 694536; production supplier unspecified)",
      role: "First positive element of the fixed rear group.",
    },
    {
      id: 8,
      name: "L32a",
      diagramLabel: "L32a",
      label: "Rear cemented component front",
      type: "Biconcave Negative (cemented)",
      nd: 1.59507,
      vd: 35.6,
      fl: -79.47120316877235,
      glass: "FF5 catalog-equivalent coefficient proxy (patent 595356; production supplier unspecified)",
      cemented: "L32",
      role: "Negative member of the rear cemented component.",
    },
    {
      id: 9,
      name: "L32b",
      diagramLabel: "L32b",
      label: "Rear cemented component rear",
      type: "Biconvex Positive (cemented)",
      nd: 1.6968,
      vd: 55.6,
      fl: 67.74215628357854,
      glass: "K-LaK14 catalog-equivalent coefficient proxy (patent 697556; production supplier unspecified)",
      cemented: "L32",
      role: "Positive member of the rear cemented component.",
    },
    {
      id: 10,
      name: "L33",
      diagramLabel: "L33",
      label: "Rear Petzval-reducing element",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.8,
      fl: -482.6304664419211,
      glass: "FK3 catalog-equivalent coefficient proxy (patent 465658; production supplier unspecified)",
      role: "Final negative element; Nikon identifies this element as reducing the Petzval sum.",
    },
  ],

  surfaces: [
    { label: "1", R: 200, d: 14, nd: 1.50032, elemId: 1, sd: 55 },
    { label: "2", R: -540, d: 0.3, nd: 1, elemId: 0, sd: 54 },
    { label: "3", R: 112.869, d: 15.5, nd: 1.50032, elemId: 2, sd: 53 },
    { label: "4", R: -600, d: 0.65, nd: 1, elemId: 0, sd: 52 },
    { label: "5", R: -480, d: 5, nd: 1.7552, elemId: 3, sd: 49 },
    { label: "6", R: 431.735, d: 41.201, nd: 1, elemId: 0, sd: 47 },
    { label: "7", R: -386, d: 7.5, nd: 1.79504, elemId: 4, sd: 44 },
    { label: "8", R: -125, d: 2.6, nd: 1.4645, elemId: 5, sd: 44 },
    { label: "9", R: 286.185, d: 21.5, nd: 1, elemId: 0, sd: 44 },
    { label: "10", R: -161.181, d: 3.4, nd: 1.4645, elemId: 6, sd: 38 },
    { label: "11", R: 67.815, d: 22.912, nd: 1, elemId: 0, sd: 38 },
    { label: "12", R: 171, d: 6.5, nd: 1.6935, elemId: 7, sd: 30.5 },
    { label: "13", R: -131.975, d: 2, nd: 1, elemId: 0, sd: 30.5 },
    { label: "14", R: -213, d: 2, nd: 1.59507, elemId: 8, sd: 30 },
    { label: "15", R: 61, d: 11, nd: 1.6968, elemId: 9, sd: 30 },
    { label: "16", R: -193.237, d: 12, nd: 1, elemId: 0, sd: 30 },
    { label: "STO", R: 1e15, d: 10, nd: 1, elemId: 0, sd: 19.210431380028215 },
    { label: "17", R: -130, d: 3, nd: 1.4645, elemId: 10, sd: 19 },
    { label: "18", R: -311.705, d: 63.596682553977026, nd: 1, elemId: 0, sd: 19 },
  ],

  asph: {},
  var: {
    "6": [41.201, 58.201],
    "11": [22.912, 5.912],
  },
  varLabels: [
    ["6", "D6"],
    ["11", "D11"],
  ],
  focusDescription:
    "PUBLISHED internal-focus states from US 4,176,913 A Example 2: the complete negative middle group translates 17.000 mm imageward; D6 increases 41.201→58.201 mm while D11 decreases 22.912→5.912 mm, preserving D6+D11=64.113 mm. The patent labels the close endpoint β≈-0.1; this slider endpoint is not reconstructed from the production 2.5 m MFD.",

  groups: [
    { text: "G1 (+) / FIXED", fromSurface: "1", toSurface: "6" },
    { text: "G2 (−) / FOCUS → IMG", fromSurface: "7", toSurface: "11" },
    { text: "G3 (+) / FIXED", fromSurface: "12", toSurface: "18" },
  ],
  doublets: [
    { text: "L21", fromSurface: "7", toSurface: "9" },
    { text: "L32", fromSurface: "14", toSurface: "16" },
  ],

  // Computed object-to-image-plane distance at the patent's published 17 mm focus endpoint.
  closeFocusM: 2.331245682553977,
  nominalFno: 2.000005314861276,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
