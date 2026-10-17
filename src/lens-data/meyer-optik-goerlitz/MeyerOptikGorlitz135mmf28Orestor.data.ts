import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MEYER OPTIK GÖRLITZ ORESTOR 135mm f/2.8              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: DE 1 282 311, Example 1, Hubert Ulbrich.                  ║
 * ║  Production correlation: Orestor 2.8/135; strong but inferred.     ║
 * ║  Five elements / four groups; all spherical.                       ║
 * ║                                                                    ║
 * ║  SCALE: the patent example is normalized to f=100 mm. All source   ║
 * ║  radii, thicknesses, air gaps, and image-plane distance are        ║
 * ║  uniformly scaled ×1.35. Indices and Abbe numbers are unchanged.  ║
 * ║                                                                    ║
 * ║  STOP: the patent states that the diaphragm arrangement is         ║
 * ║  indeterminate. The production brochure schematic places the iris  ║
 * ║  in the large central air space; this model puts STO at the        ║
 * ║  midpoint of the scaled l2 gap. The stop radius is derived from    ║
 * ║  the design f-number, modeled f/2.8. Position and physical         ║
 * ║  diameter are modeling choices, not published patent dimensions.   ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: no clear apertures are published. SDs are modeled ║
 * ║  from exact meridional spherical ray tracing of the full on-axis   ║
 * ║  pupil and the viewer's 0.6-half-field off-axis sample bundle,     ║
 * ║  then rounded outward with approximately 0.5 mm clearance. The    ║
 * ║  full 24×36 mm field chief ray passes; full edge-field pupil rays  ║
 * ║  vignette, consistent with the patent's small rear-lens condition.║
 * ║                                                                    ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. The production 1.50 m MFD is   ║
 * ║  metadata only; no unpublished internal spacing law is invented.   ║
 * ║                                                                    ║
 * ║  GLASS: patent d-line nd/νd coordinates are retained with generic ║
 * ║  six-digit class labels. No vendor-specific line data are authored.║
 * ║                                                                    ║
 * ║  IMAGE PLANE: final d uses the scaled published s′0 = 51.975 mm.   ║
 * ║  The rounded prescription computes paraxial BFD ≈ 52.01145 mm.    ║
 * ║ Figure review: S3/S4 share a 26.8 mm cemented rim; S5 excludes the bevel. ║
 * ║ Rear L5 uses 16.0 mm SD, below the patent two-thirds-EP diameter bound. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "meyer-optik-gorlitz-orestor-135f28",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ ORESTOR 135mm f/2.8",
  subtitle: "DE 1 282 311, Example 1 — uniformly scaled ×1.35; production correlation inferred",

  catalog: {
    lensMounts: ["exakta", "m42", "praktina"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "135mm f/2.8", "24×36 mm", "18° marketed field", "ALL-SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 135, design: 135.132418616 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "DE 1 282 311",
    patentYear: 1968,
    authors: ["Hubert Ulbrich"],
    assignees: ["VEB Pentacon Dresden Kamera- und Kinowerke"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front positive singlet",
      type: "Plano-Convex Positive",
      nd: 1.61375,
      vd: 56.3,
      indexReference: "d",
      focalLengthMm: 143.413442,
      glass: "BACD6 spectral proxy (patent 614563 coordinate; supplier unconfirmed)",
      role: "Front plano-convex positive collector.",
      diagramLabel: "L_I",
    },
    {
      id: 2,
      name: "L2",
      label: "Cemented positive component",
      type: "Biconvex Positive",
      nd: 1.60729,
      vd: 49.2,
      indexReference: "d",
      focalLengthMm: 52.432456,
      glass: "BAF5 spectral proxy (patent 607492 coordinate; supplier unconfirmed)",
      role: "Positive component of the cemented net-negative meniscus.",
      diagramLabel: "L_II",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Cemented negative component",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: -31.175634,
      glass: "699301 class (supplier unconfirmed)",
      role: "Negative component completing the cemented negative meniscus.",
      diagramLabel: "L_III",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear negative singlet",
      type: "Biconcave Negative",
      nd: 1.63854,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -352.956234,
      glass: "639555 class (supplier unconfirmed)",
      role: "Rear biconcave negative singlet.",
      diagramLabel: "L_IV",
    },
    {
      id: 5,
      name: "L5",
      label: "Rear positive singlet",
      type: "Biconvex Positive",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: 125.464334,
      glass: "699301 class (supplier unconfirmed)",
      role: "Rear biconvex positive singlet.",
      diagramLabel: "L_V",
    },
  ],

  surfaces: [
    { label: "1", R: 88.02, d: 7.425, sd: 29.5, medium: 1 },
    { label: "2", R: "flat", d: 0.675, sd: 29.5 },
    { label: "3", R: 39.69, d: 21.735, sd: 26.8, medium: 2 },
    { label: "4", R: -127.71, d: 5.4, sd: 26.8, medium: 3 },
    { label: "5", R: 26.73, d: 14.9175, sd: 15.5 },
    { label: "STO", R: "flat", d: 14.9175 },
    { label: "6", R: -670.95, d: 4.185, sd: 14, medium: 4 },
    { label: "7", R: 340.2, d: 5.94, sd: 14 },
    { label: "8", R: 226.8, d: 4.725, sd: 16, medium: 5 },
    { label: "9", R: -141.75, d: 51.975, sd: 16 },
  ],

  focus: {
    closeFocusM: 1.5,
    description:
      "Production MFD is 1.50 m; the patent publishes only one design state, so no internal focus movement is reconstructed.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
