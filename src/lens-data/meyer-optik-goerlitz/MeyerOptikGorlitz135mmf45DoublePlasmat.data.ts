import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MEYER OPTIK GÖRLITZ DOUBLE-PLASMAT 135mm f/4.5            ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: GB 135,853 A, Fig. 2 / Example 2 (Paul Rudolph).        ║
 * ║  The fixed job-card correlation to the Meyer 135mm f/4.5 Double-Plasmat ║
 * ║  is retained, but no manufacturer source found in the dossier confirms   ║
 * ║  that exact marketed variant.                                            ║
 * ║                                                                            ║
 * ║  SCALE: the patent states that the numerical table is normalized to a    ║
 * ║  100 mm double-objective focal distance while Fig. 2 represents 135 mm. ║
 * ║  Every dimensional prescription value is therefore scaled ×1.35.         ║
 * ║  The design is all spherical, so there are no A_p coefficients to scale. ║
 * ║                                                                            ║
 * ║  GLOBAL ORDER/SIGNS: the patent tabulates each identical half locally    ║
 * ║  from the median diaphragm outward. The object-side half is reversed and ║
 * ║  radius-sign-flipped to form one left-to-right sequential prescription.  ║
 * ║                                                                            ║
 * ║  STOP: the median diaphragm position is published; its physical diameter ║
 * ║  is not. The stop radius is derived from the design f-number, set so the ║
 * ║  entrance pupil is the patent's represented 30 mm "efficacious aperture".║
 * ║  The resulting modeled f-number is f/4.4653261630. This is calibration,  ║
 * ║  not independent evidence of an unpublished mechanical iris diameter.    ║
 * ║                                                                            ║
 * ║  IMAGE PLANE: the patent publishes no BFD. Surface 10 d is the computed  ║
 * ║  infinity-focus paraxial BFD of the scaled rounded prescription.          ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: the patent gives one fixed   ║
 * ║  prescription and no finite-object movement law. `var` is empty.          ║
 * ║  `closeFocusM = 1.0` is only the schema-required finite UI placeholder,  ║
 * ║  following the existing view-camera/static-prescription corpus convention;║
 * ║  it is not a modeled MFD. Bellows/standard translation is outside model. ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: none are published. The modeled SDs are symmetric about ║
 * ║  the stop and are sized from exact spherical ray envelopes, with positive║
 * ║  clearance for a ±15° off-axis stress sample and the full stop radius.   ║
 * ║  The ±15° sample is a geometry check only, not a source field or         ║
 * ║  production coverage claim. Edge thickness, rim slope, shared-gap        ║
 * ║  intrusion, and sampled exact-ray containment are checked by verify.py.  ║
 * ║                                                                            ║
 * ║  SPECTRAL LIMIT: the source prints historical nD (589.3 nm), nG′         ║
 * ║  (434.0 nm), and ν. The numeric nD values are retained in LensDataInput's║
 * ║  historical `nd` slot because the schema has no uppercase-D token. nG′   ║
 * ║  is not authored as modern ng (435.8 nm). Glass labels are intentionally ║
 * ║  Unmatched/class-level so catalog equivalence is not supplier attribution.║
 * ║ Fig. 2 rim review: inner menisci use 16.5/15.8 mm optical SDs.           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "meyer-optik-gorlitz-double-plasmat-135mm-f45",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ DOUBLE-PLASMAT 135mm f/4.5 (patent model)",
  subtitle: "GB 135,853 A, Example 2 — historical product name and Meyer attribution unconfirmed",

  catalog: {
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "PATENT REPRESENTATION 135mm f/4.5",
      "COMPUTED EFL 133.960 mm",
      "MODELED f/4.465",
      "ALL SPHERICAL",
    ],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { design: 133.9597848912345 },
    fNumber: { design: 4.4653261630411505 },
  },

  source: { patentNumber: "GB 135,853 A", patentYear: 1919, authors: ["Paul Rudolph"], assignees: [] },

  /* ── Glass elements: object side to image side ── */
  elements: [
    {
      id: 1,
      name: "L3′",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6207,
      vd: 56.9,
      focalLengthMm: 49.938342260088234,
      glass: "Unmatched (621569 — historical D-line crown-class coordinate; supplier unresolved)",
      role: "Object-side outer positive element of the first identical single objective.",
      diagramLabel: "L3′",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2′",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5398,
      vd: 47.3,
      focalLengthMm: -41.229503815174226,
      glass: "Unmatched (540473 — historical D-line low-index flint / LLF-FEL-class coordinate; supplier unresolved)",
      role: "Negative cemented partner of L3′; separated by air from the near-stop L1′ meniscus.",
      diagramLabel: "L2′",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L1′",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6223,
      vd: 53.2,
      focalLengthMm: 150.48019445506026,
      glass: "SSK2 (Schott) class (622532 — historical D-line SSK coordinate; catalog equivalent, supplier unresolved)",
      role: "Positive meniscus adjacent to the median diaphragm on the object-side half.",
      diagramLabel: "L1′",
    },
    {
      id: 4,
      name: "L1",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6223,
      vd: 53.2,
      focalLengthMm: 150.48019445506026,
      glass: "SSK2 (Schott) class (622532 — historical D-line SSK coordinate; catalog equivalent, supplier unresolved)",
      role: "Positive meniscus adjacent to the median diaphragm on the image-side half.",
      diagramLabel: "L1",
    },
    {
      id: 5,
      name: "L2",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5398,
      vd: 47.3,
      focalLengthMm: -41.229503815174226,
      glass: "Unmatched (540473 — historical D-line low-index flint / LLF-FEL-class coordinate; supplier unresolved)",
      role: "Negative cemented partner of L3; separated by air from the near-stop L1 meniscus.",
      diagramLabel: "L2",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L3",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6207,
      vd: 56.9,
      focalLengthMm: 49.938342260088234,
      glass: "Unmatched (621569 — historical D-line crown-class coordinate; supplier unresolved)",
      role: "Image-side outer positive element of the second identical single objective.",
      diagramLabel: "L3",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 36.4635, d: 7.614, sd: 19, medium: 1 },
    // Cemented L3′→L2′ junction: downstream L2′ owns the medium after surface 2.
    { label: "2", R: -190.215, d: 3.483, sd: 18.25, medium: 2 },
    { label: "3", R: 25.3665, d: 1.9035, sd: 14.75 },
    { label: "4", R: 31.698, d: 3.969, sd: 16.5, medium: 3 },
    { label: "5", R: 45.6165, d: 3.1725, sd: 15.8 },
    // Published median diaphragm; radius derived from the design f-number; GB 135,853 A Example 2 text (p. 2) states a 30 mm efficacious aperture.
    { label: "STO", R: "flat", d: 3.1725 },
    { label: "6", R: -45.6165, d: 3.969, sd: 15.8, medium: 4 },
    { label: "7", R: -31.698, d: 1.9035, sd: 16.5 },
    { label: "8", R: -25.3665, d: 3.483, sd: 14.75, medium: 5 },
    // Cemented L2→L3 junction: downstream L3 owns the medium after surface 9.
    { label: "9", R: 190.215, d: 7.614, sd: 18.25, medium: 6 },
    // Computed infinity-focus BFD of the final scaled prescription; not a published patent spacing.
    { label: "10", R: -36.4635, d: 115.80154476172397, sd: 19 },
  ],

  /* (moved from var) ── Focus: fixed patent state only ── */
  focus: {
    closeFocusM: 1,
    description:
      "The patent gives one fixed prescription and no verified minimum focus distance. Bellows or camera-standard focusing is not modeled.",
  },

  /* ── Aperture ── */
  aperture: {
    nominalFNumber: 4.4653261630411505,
    // No source minimum aperture is established for the fixed job-card product correlation.
    // Keep the quick-select range conservative; the project default maxFstop applies.
    fStops: [4.5, 5.6, 8, 11, 16],
  },

  /* ── Diagram annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
