import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER TELOMAR 180mm f/5.5                           ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: FR 1,045,076, Example 1 / "EXEMPLE CHIFFRÉ".                 ║
 * ║  The patent example is normalized to f = 1 and is all spherical.        ║
 * ║  Five glass elements form four air-separated groups; L4 + L5 are        ║
 * ║  cemented at surface 8.                                                  ║
 * ║                                                                            ║
 * ║  SCALE: The normalized patent prescription is uniformly scaled ×180.     ║
 * ║  R, d, semi-diameters, stop position, and image-plane distance are       ║
 * ║  therefore in millimeters at this scale. There are no aspheres, so no    ║
 * ║  A_p scaling is required. Indices and Abbe numbers remain unchanged.     ║
 * ║                                                                            ║
 * ║  SOURCE/TRACE DISCREPANCY: The printed rounded table does not reproduce  ║
 * ║  the patent headers exactly. From the actual arrays below, independent   ║
 * ║  y–ν/ABCD tracing gives EFL = 182.2663057875 mm and BFD =                ║
 * ║  71.4282597274 mm. The patent headers scale to f = 180 mm and            ║
 * ║  p0' = 68.8446 mm. No radius, spacing, or index has been altered to      ║
 * ║  force agreement.                                                         ║
 * ║                                                                            ║
 * ║  STOP: The patent publishes only the 49.0356 mm R4→R5 diaphragm chamber. ║
 * ║  Figure 3 is used to place STO at q = 0.60 of that gap from R4. The stop ║
 * ║  radius is derived from the design f-number. nominalFno/apertureDesign   ║
 * ║  use the modeled f/5.4734626363 from the source effective entrance-pupil ║
 * ║  aperture of 33.3 mm, while apertureMarketing remains the production     ║
 * ║  f/5.5.                                                                  ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: The patent supplies no       ║
 * ║  finite-object spacing table or internal motion. `var` is empty.          ║
 * ║  `closeFocusM = 1.0` is only the schema-required finite UI placeholder;  ║
 * ║  it is not a modeled MFD. View-camera bellows/standard translation is    ║
 * ║  outside this optical model.                                              ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes none. Values below are modeling    ║
 * ║  inferences from the exact wide-open axial marginal envelope, the        ║
 * ║  relative clear-aperture proportions in Fig. 3, the documented 6×9      ║
 * ║  application, and exact-ray containment at the default 0.60 field        ║
 * ║  fraction. The front group intentionally provides the principal          ║
 * ║  off-axis vignetting limit; no sampled 0.60-field ray clips inside the   ║
 * ║  cemented L4/L5 member. Edge thickness, actual rim slope, shared-gap      ║
 * ║  intrusion, and ray containment are checked in the audit artifacts.     ║
 * ║                                                                            ║
 * ║  GLASS / SPECTRAL LIMIT: FR 1,045,076 publishes nd and νd only. The      ║
 * ║  class labels below are modern catalog-coordinate neighborhoods, not      ║
 * ║  proof of historical vendor melts. nC, nF, ng, dPgF, and APD flags are  ║
 * ║  therefore not invented. The data remain native d-line values.           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "voigtlander-telomar-180mm-f55",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER TELOMAR 180mm f/5.5",
  subtitle: "FR 1,045,076, Example 1 — normalized f=1 prescription scaled ×180",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "6x9",
    specs: [
      "5 ELEMENTS / 4 GROUPS",
      "MARKETED 180mm f/5.5",
      "COMPUTED EFL 182.266 mm",
      "MODELED f/5.473",
      "ALL SPHERICAL",
    ],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 180, design: 182.26630578751642 },
    fNumber: { marketing: 5.5, design: 5.473462636261754 },
  },

  source: { patentNumber: "FR 1,045,076", patentYear: 1953, authors: [], assignees: ["Voigtländer AG"] },

  /* ── Glass elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5836,
      vd: 46.2,
      indexReference: "d",
      focalLengthMm: 50.15266184010561,
      glass: "Barium-flint BAF3/BAM3 class",
      role: "Front positive collector of the positive front member.",
      diagramLabel: "I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72755,
      vd: 28.4,
      indexReference: "d",
      focalLengthMm: -77.15568257139638,
      glass: "SF10 class",
      role: "Negative partner of the positive front member; separated from L1 by the very small a1 air gap.",
      diagramLabel: "II",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62355,
      vd: 47,
      indexReference: "d",
      focalLengthMm: 154.582978552772,
      glass: "E-BAF8 compatible barium-flint spectral proxy; patent vendor unspecified",
      role: "Positive element following the diaphragm chamber in the rear functional member.",
      diagramLabel: "III",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.58264,
      vd: 42.1,
      indexReference: "d",
      focalLengthMm: -38.018971363666665,
      glass: "LF3 / PBL23 / QF5 class",
      role: "Strong negative component of the cemented rear member IV.",
      diagramLabel: "IVa",
      cemented: "IV",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.75512,
      vd: 27,
      indexReference: "d",
      focalLengthMm: 82.48216402326774,
      glass: "SF4-family flint class",
      role: "Positive cemented partner; the surface-8 junction has positive paraxial interface power.",
      diagramLabel: "IVb",
      cemented: "IV",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 43.6482, d: 6.6888, sd: 18.5, medium: 1 },
    { label: "2", R: -83.8296, d: 0.2106, sd: 18.5 },
    { label: "3", R: -83.8296, d: 2.511, sd: 18.5, medium: 2 },
    // STO position inferred from Fig. 3: q = 0.60 of the published a2 gap from surface 4 toward surface 5.
    { label: "4", R: 172.0566, d: 29.42136, sd: 18.5 },
    { label: "STO", R: "flat", d: 19.61424 },
    { label: "5", R: 172.0566, d: 5.2308, sd: 17.3, medium: 3 },
    { label: "6", R: -216.621, d: 7.9434, sd: 17.3 },
    { label: "7", R: -32.0292, d: 3.1338, sd: 18.5, medium: 4 },
    // Cemented L4→L5 junction: downstream element L5 owns the medium after surface 8.
    { label: "8", R: 74.4138, d: 5.5764, sd: 18.5, medium: 5 },
    // Image-space d is the independently recomputed BFD of the rounded, scaled prescription.
    { label: "9", R: -369.7776, d: 71.4282597274377, sd: 18.5 },
  ],

  /* (moved from var) ── Focus ── */
  focus: {
    closeFocusM: 1,
    description: "The patent provides only an infinity prescription. View-camera bellows focusing is not modeled.",
  },

  /* ── Aperture ── */
  aperture: { nominalFNumber: 5.473462636261754, fStops: [5.5, 8, 11, 16] },

  /* ── Diagram annotations ── */
  groups: [
    { text: "FRONT I–II", fromSurface: "1", toSurface: "4" },
    { text: "REAR III–IV", fromSurface: "5", toSurface: "9" },
  ],
  doublets: [{ text: "IV", fromSurface: "7", toSurface: "9" }],

  /* ── Layout ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
