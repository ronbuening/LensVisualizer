import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  STOP: the patent publishes neither stop location nor diameter. The STO is ║
 * ║  explicitly inferred at the midpoint of source gap d6 (between L3 and L4), ║
 * ║  the largest rear-component air gap and a physically plausible iris        ║
 * ║  location. Scaled d6=2.99754 mm is split 1.49877 + 1.49877 mm. The stop    ║
 * ║  radius is derived from the design f-number f/2.8. It is not a published   ║
 * ║  diaphragm diameter.                                                       ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: no source SDs are published. Element SDs are modeled    ║
 * ║  from exact spherical ray tracing at the scaled infinity state: full      ║
 * ║  on-axis marginal rays, the default visual fan at ±18.75° (0.6× the      ║
 * ║  Schneider 62.5° full field), and full-field chief rays. A 10% clearance ║
 * ║  was applied to the governing ray height for each element and rounded up ║
 * ║  to 0.1 mm. The front pair is refined to 9.5 mm from the patent figure;  ║
 * ║  axial and full-field chief rays clear, with peripheral vignetting.       ║
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
  schema: 2,
  key: "schneider-curtagon-35mm-f28-gen2",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH CURTAGON 35mm f/2.8",
  subtitle: "US 3,318,653 sole example — six-element 35/2.8 design; production linkage inferred",

  catalog: {
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 6 GROUPS", "35mm NOMINAL / 36.6mm EFFECTIVE", "f/2.8–22", "62.5° DIAGONAL", "MFD 0.30m"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 35, design: 36.6423060342 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,318,653",
    patentYear: 1967,
    authors: ["Karl Heinrich Macher"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.79,
      indexReference: "d",
      focalLengthMm: -49.3496,
      glass: "FK3 — 464658 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Negative front component I; isolated front meniscus.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.7018,
      vd: 41.14,
      indexReference: "d",
      focalLengthMm: 29.2655,
      glass: "BASF7 — 702411 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "First positive lens of rear component II.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6172,
      vd: 54.04,
      indexReference: "d",
      focalLengthMm: 54.1488,
      glass: "K-SSK1 — 617540 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Positive meniscus in rear component II.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      indexReference: "d",
      focalLengthMm: -16.3433,
      glass: "SF56A — 785261 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Biconcave negative lens in rear component II.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.589,
      vd: 48.64,
      indexReference: "d",
      focalLengthMm: 49.4166,
      glass: "BAFN6 — coordinate-compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Positive lens in rear component II.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      focalLengthMm: 50.535,
      glass: "LAC10 — 720503 coordinate; compatible spectral proxy (supplier unconfirmed)",
      apd: false,
      role: "Rear positive meniscus in rear component II.",
      diagramLabel: "L6",
    },
  ],

  surfaces: [
    { label: "1", R: 72.9438, d: 2.196, sd: 9.5, medium: 1 },
    { label: "2", R: 17.2752, d: 13.79088, sd: 9.5 },
    { label: "3", R: 28.68708, d: 4.89708, sd: 9.3, medium: 2 },
    { label: "4", R: -67.2159, d: 0.35136, sd: 9.3 },
    { label: "5", R: 14.75712, d: 1.83732, sd: 8.2, medium: 3 },
    { label: "6", R: 25.16982, d: 1.49877, sd: 8.2 },
    { label: "STO", R: "flat", d: 1.49877 },
    { label: "7", R: -64.05, d: 1.1895, sd: 7.4, medium: 4 },
    { label: "8", R: 16.16622, d: 1.99836, sd: 7.4 },
    { label: "9", R: 145.68264, d: 2.29848, sd: 7.5, medium: 5 },
    { label: "10", R: -36.1608, d: 1.5189, sd: 7.5 },
    { label: "11", R: -30.9636, d: 2.7267, sd: 8.5, medium: 6 },
    { label: "12", R: -17.34474, d: 37.7894782771, sd: 8.5 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "The production lens focuses from infinity to 0.30 m. The patent supplies only the infinity prescription, so focus travel is not modeled.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "COMPONENT I", fromSurface: "1", toSurface: "2" },
    { text: "COMPONENT II", fromSurface: "3", toSurface: "12" },
  ],
  doublets: [],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
