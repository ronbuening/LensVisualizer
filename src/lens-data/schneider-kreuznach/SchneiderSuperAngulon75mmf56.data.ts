import type { LensDataInput } from "../../types/optics.js";

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
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Patent does not list SDs.  Estimated via combined marginal +   ║
 * ║    chief ray trace at 60% of the 50° half-field (30°), with 8%   ║
 * ║    mechanical clearance.  Capped at sd/|R| ≤ 0.85 for surfaces   ║
 * ║    r2, r9, r11 where the raw trace exceeded physical limits.      ║
 * ║    The outer menisci (L1, L8) naturally vignette at full field;   ║
 * ║    SDs represent the physically constrained clear aperture.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "schneider-super-angulon-75-f56",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH SUPER-ANGULON 75mm f/5.6",
  subtitle: "US 3,376,091 TABLE I — WAGNER & MACHER / SCHNEIDER",
  specs: ["8 ELEMENTS / 4 GROUPS", "f ≈ 75.1 mm", "F/5.6", "2ω ≈ 100°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 75,
  focalLengthDesign: 75.1,
  apertureMarketing: 5.6,
  imageFormat: "4x5" as const,
  patentYear: 1968,
  elementCount: 8,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.8,
      fl: -53.2,
      glass: "FK3 (Schott)",
      apd: false as const,
      role: "Front dispersive meniscus (Group I). Field lens bending oblique rays into the front triplet; major negative Petzval contributor flattening the field.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.717,
      vd: 47.9,
      fl: -89.1,
      glass: "LaF3 (Schott 717479) / S-LAM3 optical equivalent",
      apd: false as const,
      cemented: "TF",
      role: "Outer negative of front cemented triplet (Group II). Highest nd in front triplet; progressive index gradient from diaphragm outward corrects coma.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.61405,
      vd: 55.1,
      fl: 15.2,
      glass: "614551 — SSK-class dense barium crown (Schott historical; Hikari SK9 optical equivalent)",
      apd: false as const,
      cemented: "TF",
      role: "Central positive of front triplet. Carries the majority of Group II's positive power; nearly symmetric biconvex form minimizes spherical aberration.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56138,
      vd: 45.3,
      fl: -27.1,
      glass: "561453 — BaLF-class barium light flint (Schott historical; no exact public Sellmeier)",
      apd: false as const,
      cemented: "TF",
      role: "Inner negative of front triplet, adjacent to diaphragm. Extremely thin (patent constraint: d₅+d₇ ≤ 0.03f); concave toward the diaphragm to suppress coma, astigmatism, and field curvature.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.56883,
      vd: 56.0,
      fl: -30.7,
      glass: "BaK4 (Schott) / S-BAL14 optical equivalent",
      apd: false as const,
      cemented: "TR",
      role: "Inner negative of rear triplet, adjacent to diaphragm. Symmetry partner of L4; uses a distinctly different glass (νd=56.0 vs 45.3) providing additional degrees of freedom for chromatic balance.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.61375,
      vd: 56.3,
      fl: 13.7,
      glass: "614563 — SSK-class dense barium crown (Schott historical; no exact public Sellmeier)",
      apd: false as const,
      cemented: "TR",
      role: "Central positive of rear triplet. Most powerful element in the system (shortest focal length); carries the greatest share of the system's positive refractive power.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.70181,
      vd: 41.1,
      fl: -46.1,
      glass: "BaSF-class barium dense flint (Schott 702411; S-BAH27 / BAFD7 optical equivalent)",
      apd: false as const,
      cemented: "TR",
      role: "Outer negative of rear triplet. Highest nd in rear triplet; lower νd than L2 provides stronger chromatic correction in the rear half to balance the asymmetric inner negative glasses.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.52015,
      vd: 63.6,
      fl: -47.6,
      glass: "BK7G18 optical match (Schott 520636; K/BK crown class)",
      apd: false as const,
      role: "Rear dispersive meniscus (Group IV). Symmetry partner of L1; acts as field lens and Petzval flattener on the image side. Higher nd than L1 compensates for the rear-biased power distribution.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent US 3,376,091 Table I, scaled ×0.75 from f=100 to f=75mm.
   *  Diaphragm space d6 split equally for STO placement.
   */
  surfaces: [
    // Group I — L1 front dispersive meniscus
    { label: "1", R: 92.063, d: 5.28, nd: 1.4645, elemId: 1, sd: 23.0 },
    { label: "2", R: 19.118, d: 10.988, nd: 1.0, elemId: 0, sd: 16.0 },

    // Group II — front cemented triplet (L2 + L3 + L4)
    { label: "3", R: 26.168, d: 9.75, nd: 1.717, elemId: 2, sd: 17.5 },
    { label: "4", R: 15.675, d: 12.36, nd: 1.61405, elemId: 3, sd: 13.0 },
    { label: "5", R: -16.11, d: 1.11, nd: 1.56138, elemId: 4, sd: 9.0 },
    { label: "6", R: 270.203, d: 1.11, nd: 1.0, elemId: 0, sd: 8.0 },

    // Aperture stop (centered in d6 air space)
    { label: "STO", R: 1e15, d: 1.11, nd: 1.0, elemId: 0, sd: 7.0 },

    // Group III — rear cemented triplet (L5 + L6 + L7)
    { label: "7", R: -789.458, d: 1.11, nd: 1.56883, elemId: 5, sd: 8.0 },
    { label: "8", R: 17.88, d: 10.703, nd: 1.61375, elemId: 6, sd: 9.0 },
    { label: "9", R: -12.218, d: 9.668, nd: 1.70181, elemId: 7, sd: 10.3 },
    { label: "10", R: -26.055, d: 9.03, nd: 1.0, elemId: 0, sd: 15.0 },

    // Group IV — L8 rear dispersive meniscus
    { label: "11", R: -19.485, d: 3.203, nd: 1.52015, elemId: 8, sd: 17.0 },
    { label: "12", R: -96.24, d: 50.87, nd: 1.0, elemId: 0, sd: 18.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Entire lens moves as a rigid unit on a view camera bellows.
   *  Only the BFD (surface 12 → image plane) changes.
   *  Close focus at 0.5 m from the film plane.
   */
  var: {
    "12": [50.87, 69.52],
  },

  varLabels: [["12", "BF"]],

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

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "Unit focus — entire lens moves via view camera bellows or focusing rail. No internal focus mechanism.",

  /* ── Aperture configuration ── */
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
