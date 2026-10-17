import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — CANON EF 15mm f/2.8 Fisheye                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S63-17421 A, Numerical Example 3 (Canon).         ║
 * ║  Retrofocus diagonal fisheye; 8 elements / 7 groups, spherical.    ║
 * ║  Focus: unit focus / overall linear extension; only BF varies.      ║
 * ║                                                                    ║
 * ║  UNSCALED PATENT PRESCRIPTION:                                     ║
 * ║    Every patent radius, center thickness, and air gap is retained   ║
 * ║    exactly. Derived BF and inferred SDs use the same native-mm      ║
 * ║    coordinate scale. Patent F = 15.3 mm versus marketed 15 mm is    ║
 * ║    treated as ordinary focal-length rounding; no scale is applied.  ║
 * ║                                                                    ║
 * ║  NOTE ON PROJECTION:                                                ║
 * ║    Canon and the patent specify 180° diagonal coverage. The         ║
 * ║    equisolid reference is inferred from the 15.3 mm projection      ║
 * ║    constant and the 43.27 mm diagonal of the 135 frame.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not tabulate clear apertures. SDs are inferred   ║
 * ║    from the patent/Canon section drawings, the f/2.8 entrance       ║
 * ║    pupil, displayed-ray clearance, and renderer limits.             ║
 * ║    Verified constraints: sd/|R| < 0.90; same-element SD ratio       ║
 * ║    <= 1.25; edge thickness >= 0.50 mm; signed cross-gap sag        ║
 * ║    intrusion <= 90% of the axial air gap.                           ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design.           ║
 * ║    No rear gelatin filter, sensor cover glass, hood, or mechanics. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-15mm-f28-fisheye",
  maker: "Canon",
  name: "CANON EF 15mm f/2.8 Fisheye",
  subtitle: "JP S63-17421 A — NUMERICAL EXAMPLE 3",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 7 GROUPS",
      "PATENT F = 15.3 mm",
      "TRACED EFL = 15.2865 mm",
      "F/2.8",
      "180° DIAGONAL FISHEYE",
      "ALL SPHERICAL",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 15, design: 15.286506817 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "JP S63-17421 A",
    patentYear: 1988,
    authors: ["Takashi Matsushita"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -33.615501,
      glass: "S-BSM14 (OHARA exact catalog equivalent; patent vendor unspecified)",
      role: "Large front negative meniscus accepting the extreme field and beginning the retrofocus conversion.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.617,
      vd: 62.8,
      focalLengthMm: -59.765845,
      glass: "S-PHM51 (OHARA historical exact catalog equivalent; patent vendor unspecified)",
      role: "Second negative meniscus; continues field-angle compression with relatively weak standalone power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -45.777815,
      glass: "S-BSM14 (OHARA exact catalog equivalent; patent vendor unspecified)",
      role: "Final front negative meniscus; its rear radius participates in claim condition (1).",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 32.842152,
      glass: "S-NPH53 (OHARA historical exact catalog equivalent; patent vendor unspecified)",
      role: "Strong positive element before the stop; starts the positive relay after the negative front converter.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.51112,
      vd: 60.5,
      focalLengthMm: 63.06703,
      glass: "NSL7 (OHARA historical exact catalog equivalent; patent vendor unspecified)",
      role: "Weak positive post-stop meniscus with much stronger image-side refracting surface.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -26.480431,
      glass: "S-NPH53 (OHARA historical exact catalog equivalent; patent vendor unspecified)",
      role: "Negative component of the nearly afocal cemented doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 29.029791,
      glass: "S-FSL5 (OHARA exact catalog equivalent; patent vendor unspecified)",
      role: "Positive low-dispersion component of the nearly afocal cemented doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 45.834475,
      glass: "S-FSL5 (OHARA exact catalog equivalent; patent vendor unspecified)",
      role: "Symmetric final positive element; a principal discriminator of Numerical Example 3.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 78.06, d: 2.5, sd: 17.8, medium: 1 },
    { label: "2", R: 15.9, d: 11.83, sd: 14.25 },
    { label: "3", R: 22.22, d: 2.5, sd: 13.6, medium: 2 },
    { label: "4", R: 13.27, d: 7.54, sd: 11.4 },
    { label: "5", R: 127.88, d: 5.34, sd: 11.5, medium: 3 },
    { label: "6", R: 22.35, d: 1.85, sd: 10.0 },
    { label: "7", R: 32.04, d: 6.71, sd: 9.5, medium: 4 },
    { label: "8", R: -190.22, d: 3.84, sd: 8.5 },
    { label: "STO", R: "flat", d: 3.53 },
    { label: "10", R: -289.77, d: 2.72, sd: 7.4, medium: 5 },
    { label: "11", R: -29.1, d: 0.15, sd: 8.0 },
    { label: "12", R: -100.42, d: 3.99, sd: 8.2, medium: 6 },
    { label: "13", R: 29.39, d: 5.14, sd: 8.8, medium: 7 },
    { label: "14", R: -25.73, d: 0.15, sd: 9.0 },
    { label: "15", R: 43.88, d: 4.84, sd: 10.0, medium: 8 },
    { label: "16", R: -43.88, sd: 10.2 },
  ],

  focus: {
    closeFocusM: 0.2,
    description: "Overall linear extension / unit focus; 2.13274 mm extension from infinity to 0.20 m.",
  },

  /* (moved from var) Unit focus: increasing BF represents the complete optical unit moving toward the object. */
  gaps: { "16": { label: "BF", values: [[39.673478819, 41.806216499]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 5 },

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 15.3,
    fullFieldDeg: 180,
    imageCircleMm: 43.266615306,
    maxTraceFieldDeg: 90,
  },

  groups: [
    { text: "NEGATIVE FRONT CONVERTER", fromSurface: "1", toSurface: "6" },
    { text: "POSITIVE RELAY / CORRECTOR", fromSurface: "7", toSurface: "16" },
  ],
  doublets: [{ text: "D1", fromSurface: "12", toSurface: "14" }],

  layout: { scFill: 0.68, yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
