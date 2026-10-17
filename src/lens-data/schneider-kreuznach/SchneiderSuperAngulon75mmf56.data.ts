import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER SUPER-ANGULON 75mm f/5.6                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,376,091 Table I (Wagner & Macher / Schneider). ║
 * ║  Quasi-symmetric wide-angle objective, negative-positive           ║
 * ║  architecture with outer meniscus singlets and inner cemented      ║
 * ║  triplets around a central diaphragm.                             ║
 * ║  8 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (bellows extension on view camera).             ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=100; all R, d, and sd values scaled ×0.75 to       ║
 * ║    f≈75mm production focal length.                                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs.  Estimated via combined marginal +    ║
 * ║    chief ray trace at 60% of the 50° half-field (30°), with 8%     ║
 * ║    mechanical clearance.  Capped at sd/|R| ≤ 0.85 for surfaces     ║
 * ║    r2, r9, r11 where the raw trace exceeded physical limits.       ║
 * ║    The outer menisci (L1, L8) naturally vignette at full field;    ║
 * ║    SDs represent the physically constrained clear aperture.        ║
 * ║    Surfaces 1, 2 and 12 were raised to pass the traced chief ray   ║
 * ║    to the 198 mm image-circle corner (52.7°; 2026-09-24            ║
 * ║    field-coverage audit); r2 is now above the 0.85 cap (0.89).     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "schneider-super-angulon-75-f56",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH SUPER-ANGULON 75mm f/5.6",
  subtitle: "US 3,376,091 TABLE I — WAGNER & MACHER / SCHNEIDER",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    imageCircleMm: 198, // Schneider Super-Angulon brochure (1976): 198 mm at f/22 (105°), 156 mm at f/5.6
    specs: ["8 ELEMENTS / 4 GROUPS", "f ≈ 75.1 mm", "F/5.6", "2ω ≈ 100°", "ALL SPHERICAL"],
    elementCount: 8,
    groupCount: 4,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 75, design: 75.1 },
    fNumber: { marketing: 5.6 },
  },

  // audit:image-circle flags rear surfaces 10–12 at this circle through its wide-angle exit-pupil proxy; the exact
  // chief ray to the 99 mm corner (52.7°) clears 10 and 11, and surface 12 was raised to pass it (2026-09-24).
  source: {
    patentNumber: "US 3,376,091",
    patentYear: 1968,
    authors: ["Werner Wagner", "Karl Heinrich Macher"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.8,
      focalLengthMm: -53.2,
      glass: "FK3 (Schott)",
      apd: false,
      role: "Front dispersive meniscus (Group I). Field lens bending oblique rays into the front triplet; major negative Petzval contributor flattening the field.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.717,
      vd: 47.9,
      focalLengthMm: -89.1,
      glass: "LaF3 (Schott 717479) / S-LAM3 optical equivalent",
      apd: false,
      role: "Outer negative of front cemented triplet (Group II). Highest nd in front triplet; progressive index gradient from diaphragm outward corrects coma.",
      cemented: "TF",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.61405,
      vd: 55.1,
      focalLengthMm: 15.2,
      glass: "614551 — SSK-class dense barium crown (Schott historical; Hikari SK9 optical equivalent)",
      apd: false,
      role: "Central positive of front triplet. Carries the majority of Group II's positive power; nearly symmetric biconvex form minimizes spherical aberration.",
      cemented: "TF",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56138,
      vd: 45.3,
      focalLengthMm: -27.1,
      glass: "LLF4 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Inner negative of front triplet, adjacent to diaphragm. Extremely thin (patent constraint: d₅+d₇ ≤ 0.03f); concave toward the diaphragm to suppress coma, astigmatism, and field curvature.",
      cemented: "TF",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.56883,
      vd: 56.0,
      focalLengthMm: -30.7,
      glass: "BaK4 (Schott) / S-BAL14 optical equivalent",
      apd: false,
      role: "Inner negative of rear triplet, adjacent to diaphragm. Symmetry partner of L4; uses a distinctly different glass (νd=56.0 vs 45.3) providing additional degrees of freedom for chromatic balance.",
      cemented: "TR",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.61375,
      vd: 56.3,
      focalLengthMm: 13.7,
      glass: "BACD6 (HOYA catalog-equivalent; patent supplier unspecified)",
      apd: false,
      role: "Central positive of rear triplet. Most powerful element in the system (shortest focal length); carries the greatest share of the system's positive refractive power.",
      cemented: "TR",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.70181,
      vd: 41.1,
      focalLengthMm: -46.1,
      glass: "BaSF-class barium dense flint (Schott 702411; S-BAH27 / BAFD7 optical equivalent)",
      apd: false,
      role: "Outer negative of rear triplet. Highest nd in rear triplet; lower νd than L2 provides stronger chromatic correction in the rear half to balance the asymmetric inner negative glasses.",
      cemented: "TR",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.52015,
      vd: 63.6,
      focalLengthMm: -47.6,
      glass: "BK7G18 optical match (Schott 520636; K/BK crown class)",
      apd: false,
      role: "Rear dispersive meniscus (Group IV). Symmetry partner of L1; acts as field lens and Petzval flattener on the image side. Higher nd than L1 compensates for the rear-biased power distribution.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent US 3,376,091 Table I, scaled ×0.75 from f=100 to f=75mm.
   *  Diaphragm space d6 split equally for STO placement.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // Group I — L1 front dispersive meniscus
    { label: "1", R: 92.063, d: 5.28, sd: 26.2, medium: 1 },
    { label: "2", R: 19.118, d: 10.988, sd: 17.0 },

    // Group II — front cemented triplet (L2 + L3 + L4)
    { label: "3", R: 26.168, d: 9.75, sd: 17.5, medium: 2 },
    { label: "4", R: 15.675, d: 12.36, sd: 13.0, medium: 3 },
    { label: "5", R: -16.11, d: 1.11, sd: 9.0, medium: 4 },
    { label: "6", R: 270.203, d: 1.11, sd: 8.0 },

    // Aperture stop (centered in d6 air space)
    { label: "STO", R: "flat", d: 1.11 },

    // Group III — rear cemented triplet (L5 + L6 + L7)
    { label: "7", R: -789.458, d: 1.11, sd: 8.0, medium: 5 },
    { label: "8", R: 17.88, d: 10.703, sd: 9.0, medium: 6 },
    { label: "9", R: -12.218, d: 9.668, sd: 10.3, medium: 7 },
    { label: "10", R: -26.055, d: 9.03, sd: 15.0 },

    // Group IV — L8 rear dispersive meniscus
    { label: "11", R: -19.485, d: 3.203, sd: 17.0, medium: 8 },
    { label: "12", R: -96.24, sd: 22.7 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.5,
    description:
      "Unit focus — entire lens moves via view camera bellows or focusing rail. No internal focus mechanism.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Entire lens moves as a rigid unit on a view camera bellows.
   *  Only the BFD (surface 12 → image plane) changes.
   *  Close focus at 0.5 m from the film plane.
   */
  gaps: { "12": { label: "BF", values: [[50.87, 69.52]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 5.6, fStops: [5.6, 8, 11, 16, 22, 32, 45], maxFNumber: 45 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "10" },
    { text: "IV", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "TF", fromSurface: "3", toSurface: "6" },
    { text: "TR", fromSurface: "7", toSurface: "10" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
