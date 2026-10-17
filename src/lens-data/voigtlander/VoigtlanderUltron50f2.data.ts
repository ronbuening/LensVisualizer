import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US2627204 Example II, table p.6 and Figure3 p.2, normalized prescription scaled50×.
 * Rounded radii, thicknesses and source stop split retained. Example II d2=.06395
 * is preferred over conflicting claim4=.08393 because it reproduces source power/back focus.
 * Optical-rim comparison at600dpi does not justify changing the existing approximate SDs.
 * Unit focusing to an assumed1m object-image distance is reconstructed, not a patent station.
 * Commercial glass names are coordinate proxies; source chemistry and suppliers are unknown.
 * No cover glass or filter belongs to this prescription.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "ultron-50f2",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER ULTRON 50mm f/2",
  subtitle: "US 2,627,204 EXAMPLE II — VOIGTLÄNDER / A. W. TRONNIER",

  catalog: {
    lensMounts: ["voigtlander-prominent"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 50.0 mm", "F/2.0", "2ω ≈ 46.8° (35mm)", "PATENT FIELD 55°", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 50, design: 50 },
    fNumber: { marketing: 2.0, design: 2.0 },
  },

  source: {
    patentNumber: "US 2,627,204 A",
    patentYear: 1953,
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Voigtländer & Sohn AG"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62139,
      vd: 60.3,
      focalLengthMm: 77.79,
      glass: "N-SK16 coordinate proxy (source nd=1.62139, νd=60.3; production supplier unspecified)",
      apd: false,
      role: "Front collective element — gathers light with modest positive power and minimal spherical aberration contribution.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.65953,
      vd: 57.0,
      focalLengthMm: 53.58,
      glass: "K-LaK11 coordinate proxy (catalog nd=1.65830, νd=57.3; source 1.65953/57.0; supplier unspecified)",
      apd: false,
      role: "Strongest positive element in front half — carries the most effective converging curvature on the object side.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64691,
      vd: 33.9,
      focalLengthMm: -29.88,
      glass: "SF2 coordinate proxy (source nd=1.64691, νd=33.9; production supplier unspecified)",
      apd: false,
      role: "Strongest diverging element in front half — air-spaced from L2 (the Ultron's structural signature).",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.63652,
      vd: 35.5,
      focalLengthMm: -15.34,
      glass: "S-TIM6 coordinate proxy (catalog nd=1.636358, νd=35.391923; source 1.63652/35.5; supplier unspecified)",
      apd: false,
      role: "Post-diaphragm diverging flint — lowest index on image side, creating the 'index valley' central to Tronnier's coma correction.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.69347,
      vd: 53.5,
      focalLengthMm: 18.75,
      glass: "LAC13 coordinate proxy (catalog nd=1.69350, νd=53.34; source 1.69347/53.5; supplier unspecified)",
      apd: false,
      role: "Thickest element — provides strong converging power and achromatism with L4 across the cemented junction.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.72381,
      vd: 38.0,
      focalLengthMm: 45.62,
      glass: "S-BAH28 coordinate proxy (catalog nd=1.72342, νd=37.955602; source 1.72381/38.0; supplier unspecified)",
      apd: false,
      role: "Rear collective element — highest index in the system, satisfying Tronnier's progressive-index condition.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent at f=1.0; all values ×50 to production scale.
   *  Stop position: patent specifies b₁ = 0.09393, b₂ = 0.09493 (diaphragm between R6 and R7).
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 31.607, d: 2.998, sd: 14.0, medium: 1 }, // L1 front
    { label: "2", R: 88.006, d: 0.2, sd: 13.5 }, // L1 rear → air
    { label: "3", R: 21.914, d: 3.198, sd: 13.5, medium: 2 }, // L2 front
    { label: "4", R: 54.34, d: 3.598, sd: 12.2 }, // L2 rear → air
    { label: "5", R: 48.515, d: 2.448, sd: 10.5, medium: 3 }, // L3 front
    { label: "6", R: 13.548, d: 4.697, sd: 9.8 }, // L3 rear → air (b₁ to stop)
    { label: "STO", R: "flat", d: 4.747 }, // aperture stop (b₂ to L4)
    { label: "7", R: -13.222, d: 1.099, sd: 8.8, medium: 4 }, // L4 front
    { label: "8", R: 38.502, d: 4.847, sd: 9.0, medium: 5 }, // L4/L5 cemented junction
    { label: "9", R: -18.617, d: 0.15, sd: 10.0 }, // L5 rear → air
    { label: "10", R: 188.312, d: 3.897, sd: 10.0, medium: 6 }, // L6 front
    { label: "11", R: -39.691, sd: 9.8 }, // L6 rear → air (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "Reconstructed unit focus to an assumed 1 m object-to-image distance: all six elements and the stop move 2.766564 mm objectward. The patent tabulates infinity only; intermediate extension is interpolated.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates as a rigid body.
   *  Only the back focal distance (last surface to image) changes.
   */
  gaps: { "11": { label: "BF", values: [[34.86, 37.62656437420401]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.0, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "9" },
    { text: "IV", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
