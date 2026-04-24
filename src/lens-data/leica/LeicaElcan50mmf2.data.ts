import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA ELCAN 50mm f/2                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,649,104 Example 3 (Edwards, Mandler, Wagner).   ║
 * ║  Ernst Leitz GmbH / ELCAN (Leitz Canada), filed 1970.             ║
 * ║  Four-element, four-group all-spherical objective.                 ║
 * ║  4 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire lens translates).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100 mm; all R, d, sd values scaled ×0.5 to       ║
 * ║    f ≈ 50 mm production focal length.                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Estimated via combined marginal (f/2) + chief (60% field)      ║
 * ║    ray trace with 8% mechanical clearance. Front element           ║
 * ║    constrained by ~39 mm filter thread (Series V).                ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                           ║
 * ║    Patent does not list stop as a surface. Position inferred from  ║
 * ║    Fig. 1 iris placement — approximately mid-gap between L2 and   ║
 * ║    L3 (a₄ split evenly).                                          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-elcan-50f2",
  maker: "Leica",
  name: "LEICA ELCAN 50mm f/2",
  subtitle: "US 3,649,104 EXAMPLE 3 — ERNST LEITZ / EDWARDS, MANDLER, WAGNER",
  specs: ["4 ELEMENTS / 4 GROUPS", "f ≈ 50.0 mm", "F/2.0", "2ω = 45°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 2,
  apertureDesign: 2.0,
  patentYear: 1972,
  elementCount: 4,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.694,
      vd: 54.5,
      fl: 33.1,
      glass: "LaK9 (Schott / Leitz)",
      apd: false,
      role: "Primary positive power; front surface carries highest positive surface power (φ₁₁ = +1.832)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6734,
      vd: 46.8,
      fl: 59.0,
      glass: "≈BaF10 (Leitz proprietary)",
      apd: false,
      role: "Secondary positive power; nearly in contact with L1, forming a closely spaced front pair",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7471,
      vd: 27.4,
      fl: -17.8,
      glass: "≈SF4 (dense flint)",
      apd: false,
      role: "Sole diverging element; rear surface carries strongest power in the system (φ₃₂ = −3.189)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7546,
      vd: 34.7,
      fl: 52.0,
      glass: "≈LAFN7 (lanthanum flint)",
      apd: false,
      role: "Rear field-correcting element; high-index lanthanum flint for chromatic fine-tuning",
    },
  ],

  /* ── Surface prescription ──
   *  Patent Example 3 (f = 100) scaled ×0.5 to production f ≈ 50 mm.
   *  Stop position inferred from Fig. 1 — mid-gap in a₄.
   */
  surfaces: [
    { label: "1", R: 18.941, d: 5.1888, nd: 1.694, elemId: 1, sd: 13.0 },
    { label: "2", R: 95.1681, d: 0.0961, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "3", R: 16.06985, d: 2.97875, nd: 1.6734, elemId: 2, sd: 11.0 },
    { label: "4", R: 24.9725, d: 0.8168, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "STO", R: 1e15, d: 0.8168, nd: 1.0, elemId: 0, sd: 9.1 },
    { label: "5", R: 100.24065, d: 0.7687, nd: 1.7471, elemId: 3, sd: 9.5 },
    { label: "6", R: 11.7132, d: 10.9541, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "7", R: 47.6244, d: 5.7653, nd: 1.7546, elemId: 4, sd: 12.5 },
    { label: "8", R: -212.1935, d: 25.255, nd: 1.0, elemId: 0, sd: 12.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — only BFD changes) ── */
  var: {
    "8": [25.255, 28.77],
  },
  varLabels: [["8", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT PAIR", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "7", toSurface: "8" },
  ],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.762,
  focusDescription: "Unit focusing — entire optical assembly translates as a rigid unit.",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
