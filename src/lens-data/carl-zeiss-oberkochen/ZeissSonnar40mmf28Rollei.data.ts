// Root-level draft import. generate:metadata rewrites this when it organizes the file into a maker folder.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — CARL ZEISS SONNAR 40mm f/2.8 (Rollei 35 S)     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,994,576, Example 1 (Glatzel / Zajadatz).         ║
 * ║  Five-element / four-component expanded-Tessar-type patent design. ║
 * ║  Production correlation to the Rollei 35 S Sonnar is inferential.  ║
 * ║  Patent prescription: f/2.9, 50° total field, all spherical.        ║
 * ║                                                                      ║
 * ║  SCALE: all patent lengths (F = 1.00000) are multiplied by 40.0.   ║
 * ║  STOP: the patent only locates the diaphragm within s34. The model ║
 * ║    uses the midpoint of that schematic stop gap: 0.050815 F on     ║
 * ║    each side. Its radius is calibrated to the published f/2.9.     ║
 * ║  SEMI-DIAMETERS: modeled from exact spherical ray envelopes through ║
 * ║    the patent 25° half-field and checked against current geometry   ║
 * ║    rules. The rear positive element is edge-thickness-limited.      ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. The 0.9 m production MFD is    ║
 * ║    metadata only; Example 1 supplies no finite-focus spacing state. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-sonnar-40f28-rollei",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS SONNAR 40mm f/2.8 (Rollei 35 S)",
  subtitle: "US 3,994,576 Example 1 — 40× scale; Rollei 35 S correlation is inferential",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "40mm f/2.8 MARKETED", "DESIGN f/2.9", "50° PATENT FIELD", "ALL-SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 40, design: 40.0000127093 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 3,994,576",
    patentYear: 1976,
    authors: ["Erhard Glatzel", "Heinz Zajadatz"],
    assignees: ["Carl-Zeiss-Stiftung"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.681,
      indexReference: "d",
      focalLengthMm: 37.3439267434,
      glass: "Unmatched (Example 1 index-only preform; νd not published)",
      role: "Front collecting element A",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72,
      indexReference: "d",
      focalLengthMm: 36.0333686943,
      glass: "Unmatched (Example 1 index-only preform; multiple exact-nd catalog coordinates)",
      role: "Second collecting element B",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.785,
      indexReference: "d",
      focalLengthMm: -14.4533075297,
      glass: "Unmatched (Example 1 index-only preform; νd not published)",
      role: "Negative third element C in the front member",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.638,
      indexReference: "d",
      focalLengthMm: -23.1272676463,
      glass: "Unmatched (Example 1 index-only preform; νd not published)",
      role: "Negative element of the cemented rear component D",
      diagramLabel: "L4",
      cemented: "D",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.744,
      indexReference: "d",
      focalLengthMm: 13.8929086417,
      glass: "Unmatched (Example 1 index-only preform; multiple vendor candidates)",
      role: "Positive element of the cemented rear component D",
      diagramLabel: "L5",
      cemented: "D",
    },
  ],

  surfaces: [
    { label: "1", R: 15.6, d: 3.6, sd: 11.0, medium: 1 },
    { label: "2", R: 36.5812, d: 0.056, sd: 10.3 },
    { label: "3", R: 14.06, d: 2.8, sd: 8.85, medium: 2 },
    { label: "4", R: 28.1356, d: 1.1376, sd: 7.82 },
    { label: "5", R: 94.1544, d: 0.822, sd: 6.98, medium: 3 },
    { label: "6", R: 10.0868, d: 2.0326, sd: 5.6 },
    // STO position inferred from the patent's schematic figure; the drawing is expressly not to scale.
    { label: "STO", R: "flat", d: 2.0326 },
    { label: "7", R: 100.0068, d: 1.15996, sd: 7.42, medium: 4 },
    // Cemented L4→L5 junction: medium and elemId belong to the downstream element L5.
    { label: "8", R: 12.8, d: 4.6386, sd: 8.9, medium: 5 },
    { label: "9", R: -45.4, d: 25.364, sd: 8.9 },
  ],

  focus: {
    closeFocusM: 0.9,
    description:
      "Manual focus to 0.9 m is production metadata; no finite-focus internal spacings are reconstructed from Example 1.",
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "A", fromSurface: "1", toSurface: "2" },
    { text: "B", fromSurface: "3", toSurface: "4" },
    { text: "C", fromSurface: "5", toSurface: "6" },
    { text: "D", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "D", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
