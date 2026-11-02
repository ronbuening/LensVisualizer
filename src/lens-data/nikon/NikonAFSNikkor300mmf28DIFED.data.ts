import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 5,745,306 A, Example 1 / Table 1 / Fig. 1; unscaled source prescription.
 * Production correlation to the 1996 AF-S 300 mm f/2.8D remains inferential.
 * Eleven powered elements in eight groups; thirteen drawn/traced optical pieces including both source filters.
 * Restored front S1/S2: 4.0 mm, nd 1.5168/vd 64.10, followed by the printed0.6 mm gap. Its unprinted sd55.5 mm
 * is the full-field/focus beam floor 52.4131 mm plus 5%, rounded upward to 0.5 mm.
 * Rear S24/S25 remains2 mm, nd 1.5168/vd 64.10, after d22+d23=21.5 mm, then10+Bf74.1335=84.1335 mm.
 * Inactive source field-stop planes remain folded out. Physical track from source S1 is319.6747 mm.
 * Published negative-G2 motion10.8239 mm is retained. The complete finite endpoint is2.515307 m object-to-image,
 * consistent with the rounded2.5 m production correlation; no source spacing is changed to force that marketing value.
 * Fig. 1 and nominal beams restore L33 caps 19.5/19.6 mm. Other small raises keep conservative G2 caps 19.9 mm;
 * a20.3 mm common cap exceeds the unchanged90% gap policy (4.2063>4.059 mm; contact radius 21.006 mm).
 * All faces were inspected. No reliably resolved cap/land break justified a rim extension or inferred cut.
 * All13 source d-line nd/vd pairs are retained. Qualified compatible catalog curves do not identify production
 * suppliers/melts; the source supplies no individual C/F/g indices or partial-dispersion values.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-ai-af-s-nikkor-300mm-f28d-if-ed",
  maker: "Nikon",
  name: "NIKON AI AF-S NIKKOR 300mm f/2.8 D IF-ED",
  subtitle: "US 5,745,306 A — Example 1; correlated to the 1996 AF-S production lens",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 8 GROUPS",
      "3 ED ELEMENTS",
      "300mm f/2.8 (MARKETED)",
      "f = 294.13 mm / F/2.88 (MODEL)",
      "2.5 m MFD",
    ],
    elementCount: 11,
    groupCount: 8,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: 300, design: 294.129638 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 5,745,306 A",
    example: { label: "Example 1", id: "1" },
    patentYear: 1998,
    authors: ["Susumu Sato"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11 — ED",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 297.569744,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published three-element positions G1-1, G1-2, and G1-5.",
      role: "First positive ED element of the G11 front collector.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12 — ED",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 210.237398,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published three-element positions G1-1, G1-2, and G1-5.",
      role: "Second positive ED element of G11; cemented to negative L13.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconcave Negative",
      nd: 1.804109,
      vd: 46.54,
      focalLengthMm: -240.539235,
      glass: "TAF3D catalog equivalent (patent 804465; production supplier unspecified)",
      role: "Negative member of the L12/L13 cemented achromat in G11.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14a",
      label: "Element L14a",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 45,
      focalLengthMm: -175.442081,
      glass: "H-LaF3B catalog equivalent (patent 744450; production supplier unspecified)",
      role: "Negative meniscus front member of the positive G12 cemented group.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L14b",
      label: "Element L14b — ED",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 107.791053,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      apd: "inferred",
      apdNote: "ED assignment from Nikon's published three-element positions G1-1, G1-2, and G1-5.",
      role: "Positive ED rear member of G12; the third ED element in the active train.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: -92.911518,
      glass: "J-BK7A catalog equivalent (patent 517641; production supplier unspecified)",
      role: "Object-side negative element of the translating G2 internal-focus group.",
    },
    {
      id: 7,
      name: "L22a",
      label: "Element L22a",
      type: "Positive Meniscus",
      nd: 1.80384,
      vd: 33.89,
      focalLengthMm: 67.595194,
      glass: "E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified)",
      role: "Positive meniscus front member of the cemented negative L22 focus component.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L22b",
      label: "Element L22b",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.09,
      focalLengthMm: -47.922375,
      glass: "S-BAL35 catalog equivalent (patent 589611; production supplier unspecified)",
      role: "Negative rear member of the cemented L22 focus component.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.518601,
      vd: 69.98,
      focalLengthMm: 120.249843,
      glass: "J-PKH1 catalog equivalent (patent 519700; production supplier unspecified)",
      role: "Front positive element of the fixed G3 rear group, immediately after the stop.",
    },
    {
      id: 10,
      name: "L32",
      label: "Element L32",
      type: "Negative Meniscus",
      nd: 1.79504,
      vd: 28.56,
      focalLengthMm: -180.848752,
      glass: "J-LAFH3 catalog equivalent (patent 795286; production supplier unspecified)",
      role: "Negative meniscus in G3 for rear-group aberration balancing.",
    },
    {
      id: 11,
      name: "L33",
      label: "Element L33",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.41,
      focalLengthMm: 153.05176,
      glass: "N-FK5 catalog equivalent (patent 487704; production supplier unspecified)",
      role: "Final positive meniscus of G3 ahead of the normalized rear air space.",
    },
    {
      id: 12,
      name: "F",
      label: "Slip-in filter F",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      glass: "J-BK7A",
      role: "Plane-parallel filter plate of the patent prescription (US 5,745,306 A, Example 1 Table 1 surfaces 24–25), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
    {
      id: 13,
      name: "FF",
      label: "Front plane-glass filter",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      glass: "J-BK7A catalog-equivalent spectral proxy (source front filter; production supplier unspecified)",
      role: "Printed source surfaces 1–2, restored as a drawn/traced front filter. Excluded from the 11 powered-element catalog count. Its unprinted aperture is inferred from the full-field/focus beam floor plus 5%, rounded upward to 0.5 mm.",
    },
  ],

  /* ── Surface prescription ──
   * Labels preserve the patent's active source-surface numbers. Source S16 is the required STO label.
   * Cemented junctions S6, S9, and S14 carry the downstream element's elemId and refractive index.
   */
  surfaces: [
    // Source front plane-glass filter; unprinted rim inferred from full-field/focus beams.
    { label: "1", R: "flat", d: 4, sd: 55.5, medium: 13 },
    { label: "2", R: "flat", d: 0.6, sd: 55.5 },
    { label: "3", R: 173.8655, d: 12, sd: 51.2, medium: 1 },
    { label: "4", R: -978.0647, d: 0.2, sd: 50.8 },
    { label: "5", R: 133.6355, d: 15, sd: 50, medium: 2 },
    { label: "6", R: -464.694, d: 5, sd: 48.1, medium: 3 },
    { label: "7", R: 332.9179, d: 46.3, sd: 46.1 },
    { label: "8", R: 99.5535, d: 3.5, sd: 35.8, medium: 4 },
    { label: "9", R: 55.631, d: 15.9, sd: 35, medium: 5 },
    { label: "10", R: -1371.0602, sd: 31.8 },
    { label: "11", R: -169.9686, d: 2.7, sd: 21.7, medium: 6 },
    { label: "12", R: 67.2847, d: 4.51, sd: 19.9 },
    { label: "13", R: -192.9273, d: 7, sd: 19.9, medium: 7 },
    { label: "14", R: -43.081, d: 2.8, sd: 19.9, medium: 8 },
    { label: "15", R: 83.8867, sd: 19.9 },
    { label: "STO", R: "flat", d: 17 },
    { label: "17", R: 194.0386, d: 5.8, sd: 19.6, medium: 9 },
    { label: "18", R: -90.9579, d: 3.1, sd: 19.6 },
    { label: "19", R: -43.5951, d: 3.5, sd: 19.6, medium: 10 },
    { label: "20", R: -64.7897, d: 7.6, sd: 20 },
    { label: "21", R: -175.8037, d: 6.7, sd: 19.5, medium: 11 },
    // S22 → rear filter: source d22 14.5 + d23 7.0 (field-stop plane S23 folded out)
    { label: "22", R: -53.035, d: 21.5, sd: 19.6 },
    // Slip-in filter F (US 5,745,306 A, Example 1 Table 1 surfaces 24–25), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: d25 10.0 + Bf 74.1335, field-stop plane S26 folded out
    { label: "24", R: "flat", d: 2.0, sd: 19.5, medium: 12 },
    { label: "25", R: "flat", d: 84.1335, sd: 19.5 }, // slip-in filter → image plane
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 2.5,
    description:
      "PUBLISHED internal focus: negative G2 translates imageward by 10.8239 mm; D10 increases 29.5505→40.3744 mm while D15 decreases 19.2807→8.4568 mm. The rear image spacing is fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published internal-focus spacings ── */
  gaps: { "10": { label: "D10", values: [[29.5505, 40.3744]] }, "15": { label: "D15", values: [[19.2807, 8.4568]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.88, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "3", toSurface: "10" },
    { text: "G2", fromSurface: "11", toSurface: "15" },
    { text: "G3", fromSurface: "17", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.72, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
