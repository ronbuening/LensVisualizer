import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER-KREUZNACH CURTAGON 35mm f/2.8 (gen 2)            ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 3,318,653, sole numerical table (job Example 1).      ║
 * ║  Six air-spaced singlets: negative component I (L1) + positive II.       ║
 * ║  All surfaces are spherical. Focus status: NO_INTERNAL_RECONSTRUCTION.   ║
 * ║                                                                            ║
 * ║  SCALE: the patent is normalized to f=100. A Schneider archival product  ║
 * ║  brochure for the 24×36-mm CURTAGON 1:2.8/35 lists 36.6 mm effective    ║
 * ║  focal length (±1%). The implemented prescription therefore uses s=0.366.║
 * ║  Every patent R and axial d is multiplied by 0.366. No aspheres exist.   ║
 * ║  Marketing focal length remains 35 mm; modeled Gaussian EFL is ≈36.6423. ║
 * ║                                                                            ║
 * ║  STOP: the patent publishes neither stop location nor diameter. The STO  ║
 * ║  is explicitly inferred at the midpoint of source gap d6 (between L3 and ║
 * ║  L4), the largest rear-component air gap and a physically plausible iris ║
 * ║  location. Scaled d6=2.99754 mm is split 1.49877 + 1.49877 mm. The stop  ║
 * ║  semi-diameter 7.0301716886 mm is calibrated paraxially so the modeled    ║
 * ║  entrance pupil gives f/2.8. It is not a published diaphragm diameter.    ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: no source SDs are published. Element SDs are modeled    ║
 * ║  from exact spherical ray tracing at the scaled infinity state: full      ║
 * ║  on-axis marginal rays, the default visual fan at ±18.75° (0.6× the      ║
 * ║  Schneider 62.5° full field), and full-field chief rays. A 10% clearance ║
 * ║  was applied to the governing ray height for each element and rounded up ║
 * ║  to 0.1 mm. Geometry is independently checked in the dossier verifier.   ║
 * ║                                                                            ║
 * ║  PRODUCT CORRELATION: Schneider's archival 24×36-mm SLR brochure depicts ║
 * ║  a CURTAGON 1:2.8/35 six-element section and lists 6/6 construction,     ║
 * ║  36.6-mm effective focal length, 37.5-mm Schnittweite, 62.5° diagonal   ║
 * ║  field, and infinity–0.30 m focus. It does not print the patent number,  ║
 * ║  so the production-formula linkage remains a documented inference.       ║
 * ║  Mount variants remain unset because formula-specific mount attribution  ║
 * ║  is not established by the manufacturer source used here.                ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer brochure (archival scan):
 * https://allphotolenses.com/public/files/pdfs/25119a765bec1ca171328d90b98c2e84.pdf
 */

const LENS_DATA = {
  key: "schneider-curtagon-35mm-f28-gen2",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH CURTAGON 35mm f/2.8",
  subtitle: "US 3,318,653 sole example — six-element 35/2.8 design; production linkage inferred",
  specs: ["6 ELEMENTS / 6 GROUPS", "35mm NOMINAL / 36.6mm EFFECTIVE", "f/2.8–22", "62.5° DIAGONAL", "MFD 0.30m"],

  focalLengthMarketing: 35,
  focalLengthDesign: 36.6423060342,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  imageFormat: "135-full-frame",
  patentNumber: "US 3,318,653",
  patentAuthors: ["Karl H. Macher"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1967,
  elementCount: 6,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.79,
      indexReference: "d",
      fl: -49.3496,
      glass: "464658 — FK3-coordinate class (supplier unconfirmed)",
      apd: false,
      role: "Negative front component I; isolated front meniscus.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.7018,
      vd: 41.14,
      indexReference: "d",
      fl: 29.2655,
      glass: "702411 — BASF7/BAH27-class (supplier unresolved)",
      apd: false,
      role: "First positive lens of rear component II.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6172,
      vd: 54.04,
      indexReference: "d",
      fl: 54.1488,
      glass: "617540 — SSK1/BSM21-class (supplier unresolved)",
      apd: false,
      role: "Positive meniscus in rear component II.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      indexReference: "d",
      fl: -16.3433,
      glass: "785261 — SF56-class (supplier unconfirmed)",
      apd: false,
      role: "Biconcave negative lens in rear component II.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.589,
      vd: 48.64,
      indexReference: "d",
      fl: 49.4166,
      glass: "BAFN6 — coordinate-compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Positive lens in rear component II.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      fl: 50.535,
      glass: "720503 — LAK10-class (supplier unresolved)",
      apd: false,
      role: "Rear positive meniscus in rear component II.",
    },
  ],

  surfaces: [
    { label: "1", R: 72.9438, d: 2.196, nd: 1.4645, elemId: 1, sd: 12.1 },
    { label: "2", R: 17.2752, d: 13.79088, nd: 1.0, elemId: 0, sd: 12.1 },
    { label: "3", R: 28.68708, d: 4.89708, nd: 1.7018, elemId: 2, sd: 9.3 },
    { label: "4", R: -67.2159, d: 0.35136, nd: 1.0, elemId: 0, sd: 9.3 },
    { label: "5", R: 14.75712, d: 1.83732, nd: 1.6172, elemId: 3, sd: 8.2 },
    { label: "6", R: 25.16982, d: 1.49877, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "STO", R: 1e15, d: 1.49877, nd: 1.0, elemId: 0, sd: 7.0301716886 },
    { label: "7", R: -64.05, d: 1.1895, nd: 1.7847, elemId: 4, sd: 7.4 },
    { label: "8", R: 16.16622, d: 1.99836, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "9", R: 145.68264, d: 2.29848, nd: 1.589, elemId: 5, sd: 7.5 },
    { label: "10", R: -36.1608, d: 1.5189, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "11", R: -30.9636, d: 2.7267, nd: 1.72, elemId: 6, sd: 8.5 },
    { label: "12", R: -17.34474, d: 37.7894782771, nd: 1.0, elemId: 0, sd: 8.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "COMPONENT I", fromSurface: "1", toSurface: "2" },
    { text: "COMPONENT II", fromSurface: "3", toSurface: "12" },
  ],
  doublets: [],

  closeFocusM: 0.3,
  focusDescription:
    "Schneider product focus range is infinity to 0.30 m; the patent gives no finite-conjugate spacing state, so the optical prescription remains at the published infinity state (NO_INTERNAL_RECONSTRUCTION).",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
