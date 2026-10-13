// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS S-BIOGON 40mm f/5.6                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,997,247 Example 11 (FIG. 2) (Carl-Zeiss-Stiftung; ║
 * ║    E. Glatzel, H. Zajadatz). Granted 14 Dec 1976.                    ║
 * ║  Unsymmetrical Biogon-type wide-angle objective, f/5.6, 2ω₀ = 63°:   ║
 * ║    A (L1) + B (L2) front menisci, dispersing in combination;         ║
 * ║    C (L3a+L3b) cemented converging doublet; central space CS;        ║
 * ║    D (L4a+L4b+L4c) cemented converging triplet; E (L5) rear negative ║
 * ║    meniscus convex to the rear.                                      ║
 * ║  8 elements / 5 groups, all spherical (no aspherical surfaces).      ║
 * ║  Focus: none in the lens (fixed focus, fixed aperture). The patent   ║
 * ║    publishes only the infinity state. The close state is a           ║
 * ║    CALCULATED whole-lens translation (BFD 14.0108 → 15.3441 mm) to   ║
 * ║    the 1:30 working reduction reported by third-party sources; it is ║
 * ║    not a patent or manufacturer state.                               ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING: patent normalized to F = 1.00000; uniform scale    ║
 * ║    s = 40 mm/F applied to every R, d and the back focus s′∞. All     ║
 * ║    spherical, so no asphere coefficients are transformed. Computed   ║
 * ║    EFL 39.9996 mm. Indices/Abbe numbers (He d-line) unchanged.       ║
 * ║  NOTE ON BACK FOCUS: surface 13 d = patent s′∞ 0.35027 F × 40 =      ║
 * ║    14.0108 mm (paraxial focus of the scaled table: 14.0106 mm).      ║
 * ║  NOTE ON STOP POSITION: inferred from the FIG. 2 iris marks, about   ║
 * ║    0.68 of the central space CS (s34 = 3.02512 mm) behind L3b;       ║
 * ║    split 2.06 + 0.96512 mm. FIG. 2 is not drawn to scale.            ║
 * ║  NOTE ON STOP SIZE: STO sd 3.757 mm is calibrated so that the        ║
 * ║    paraxial entrance pupil gives f/5.6 at infinity; it is not a      ║
 * ║    published diaphragm diameter. The production lens has no iris;    ║
 * ║    smaller f-stops in fstopSeries are viewer simulation only.        ║
 * ║  NOTE ON SEMI-DIAMETERS: none published. Modeled from an exact       ║
 * ║    meridional ray trace of the stop-filled 31.5° half-field bundle   ║
 * ║    (≈4–8% clearance), reduced where rim slope (S1) or the S2/S3      ║
 * ║    cross-gap intrusion limit binds.                                  ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gap. No rear    ║
 * ║  plate is listed for Example 11. See LENS_DATA_SPEC.md § Scope.      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-s-biogon-40f56",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS S-BIOGON 40mm f/5.6",
  subtitle: "US 3,997,247 EXAMPLE 11 — CARL-ZEISS-STIFTUNG / GLATZEL, ZAJADATZ",
  specs: ["8 ELEMENTS / 5 GROUPS", "f ≈ 40.0 mm", "F/5.6", "2ω ≈ 63°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 40,
  apertureMarketing: 5.6,
  // lensMounts / imageFormat intentionally unset: industrial M50 × 0.75 microfilm thread and microfilm
  // reduction format have no canonical taxonomy id (LENS_MOUNT_FORMAT_OPTIONS.md, "leave uncertain metadata unset").
  patentNumber: "US 3,997,247",
  patentAuthors: ["Erhard Glatzel", "Heinz Zajadatz"],
  patentAssignees: ["Carl-Zeiss-Stiftung"],
  patentYear: 1976,
  elementCount: 8,
  groupCount: 5,

  /* ── Elements ── standalone thick-lens focal lengths in air (mm) at s = 40 */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.64769,
      vd: 33.86,
      fl: 1475.6,
      glass: "SF2 (Schott)",
      apd: false,
      role: "Thin, very weak positive front meniscus (component A); dispersing only in combination with L2 (Φ_AB ≈ −0.581 Φ)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51454,
      vd: 54.68,
      fl: -60.9,
      glass: "KF3 class (Sumita; historical supplier unconfirmed)",
      apd: false,
      role: "Negative meniscus convex to the object (component B); carries the front pair's negative power",
    },
    {
      id: 3,
      name: "L3a",
      diagramLabel: "L3a",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.52,
      fl: -44.0,
      glass: "SF1 (Schott)",
      apd: false,
      cemented: "III",
      role: "Thick dense-flint negative meniscus; front element of converging cemented doublet C",
    },
    {
      id: 4,
      name: "L3b",
      diagramLabel: "L3b",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.85,
      fl: 13.6,
      glass: "N-LAK8 (Schott); LaK8-type lanthanum crown",
      apd: false,
      cemented: "III",
      role: "Strong biconvex positive; rear element of doublet C, lower index than L3a (claim 3)",
    },
    {
      id: 5,
      name: "L4a",
      diagramLabel: "L4a",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.54883,
      vd: 45.43,
      fl: -14.7,
      glass: "LLF7 class (Sumita; historical supplier unconfirmed)",
      apd: false,
      cemented: "IV",
      role: "Thin biconcave negative behind the stop; lower index ahead of the front-convex cemented surface of triplet D (claim 4)",
    },
    {
      id: 6,
      name: "L4b",
      diagramLabel: "L4b",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.61772,
      vd: 49.78,
      fl: 9.4,
      glass: "N-SSK8 (Schott); SSK8-type",
      apd: false,
      cemented: "IV",
      role: "Strongest positive element; centre of converging cemented triplet D",
    },
    {
      id: 7,
      name: "L4c",
      diagramLabel: "L4c",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.85,
      fl: -24.8,
      glass: "N-LAK8 (Schott); LaK8-type lanthanum crown",
      apd: false,
      cemented: "IV",
      role: "Thick negative meniscus convex to the rear; rear element of triplet D",
    },
    {
      id: 8,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.7,
      fl: -59.0,
      glass: "FK3 (Schott, inquiry glass)",
      apd: false,
      role: "Rear negative meniscus convex to the rear (component E); low-index fluor crown",
    },
  ],

  /* ── Surface prescription ── patent R, d × 40; nd = medium after the surface; sd modeled (none published) */
  surfaces: [
    { label: "1", R: 30.5736, d: 5.14472, nd: 1.64769, elemId: 1, sd: 27.0 }, // R1
    { label: "2", R: 29.4948, d: 10.31928, nd: 1.0, elemId: 0, sd: 24.5 }, // R1′; s12 (air lens α)
    { label: "3", R: 100.9536, d: 1.7912, nd: 1.51454, elemId: 2, sd: 23.3 }, // R2
    { label: "4", R: 23.7652, d: 30.918, nd: 1.0, elemId: 0, sd: 19.6 }, // R2′; s23 (air lens β)
    { label: "5", R: 29.072, d: 17.86216, nd: 1.71736, elemId: 3, sd: 13.0 }, // R3a
    { label: "6", R: 11.2468, d: 4.56756, nd: 1.713, elemId: 4, sd: 6.9 }, // R3a′ = R3b, cemented
    { label: "7", R: -58.0068, d: 2.06, nd: 1.0, elemId: 0, sd: 6.1 }, // R3b′; CS part 1 (CS = 3.02512)
    { label: "STO", R: 1e15, d: 0.96512, nd: 1.0, elemId: 0, sd: 3.757 }, // STO position inferred from FIG. 2; sd calibrated to f/5.6
    { label: "8", R: -33.332, d: 1.57228, nd: 1.54883, elemId: 5, sd: 4.4 }, // R4a
    { label: "9", R: 10.8496, d: 7.35384, nd: 1.61772, elemId: 6, sd: 5.4 }, // R4a′ = R4b, cemented
    { label: "10", R: -9.2608, d: 9.86152, nd: 1.713, elemId: 7, sd: 6.5 }, // R4b′ = R4c, cemented
    { label: "11", R: -28.046, d: 11.89152, nd: 1.0, elemId: 0, sd: 9.9 }, // R4c′; s45 (air lens γ)
    { label: "12", R: -14.4668, d: 5.493, nd: 1.4645, elemId: 8, sd: 12.2 }, // R5
    { label: "13", R: -34.3072, d: 14.0108, nd: 1.0, elemId: 0, sd: 16.3 }, // R5′; d = patent s′∞ × 40
  ],

  /* ── Aspherical coefficients ── all-spherical design */
  asph: {},

  /* ── Variable air spacing ── unit (whole-lens) translation; close value CALCULATED for m = −1/30 */
  var: {
    "13": [14.0108, 15.3441],
  },

  varLabels: [["13", "BF"]],

  /* ── Group and doublet annotations ── patent component letters and member numerals */
  groups: [
    { text: "A", fromSurface: "1", toSurface: "2" },
    { text: "B", fromSurface: "3", toSurface: "4" },
    { text: "C", fromSurface: "5", toSurface: "7" },
    { text: "D", fromSurface: "8", toSurface: "11" },
    { text: "E", fromSurface: "12", toSurface: "13" },
  ],

  doublets: [
    { text: "III", fromSurface: "5", toSurface: "7" },
    { text: "IV", fromSurface: "8", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.3144, // object-to-image distance (paraxial conjugate of the calculated close spacing, m ≈ −1/30)
  focusDescription:
    "No focusing mechanism or iris in the lens. US 3,997,247 publishes only the infinity state. The close state is a calculated whole-lens translation (+1.333 mm back focus) to the 1:30 reduction reported by third-party sources for its microfilm use; it is not a patent or manufacturer-published state.",

  /* ── Aperture configuration ── */
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
