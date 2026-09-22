import type { LensDataInput } from "../../types/optics.js";

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
 * ║  is not. STO sd = 12.4457696865 mm is paraxially calibrated so its       ║
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
 * ║  clearance for a ±15° off-axis stress sample and the full calibrated stop║
 * ║  radius. The ±15° sample is a geometry check only, not a source field or ║
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
  key: "meyer-optik-gorlitz-double-plasmat-135mm-f45",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ DOUBLE-PLASMAT 135mm f/4.5 (patent model)",
  subtitle: "GB 135,853 A, Example 2 — historical product name and Meyer attribution unconfirmed",
  specs: [
    "6 ELEMENTS / 4 GROUPS",
    "PATENT REPRESENTATION 135mm f/4.5",
    "COMPUTED EFL 133.960 mm",
    "MODELED f/4.465",
    "ALL SPHERICAL",
  ],

  focalLengthDesign: 133.9597848912345,
  apertureDesign: 4.4653261630411505,
  patentNumber: "GB 135,853 A",
  patentAuthors: ["Paul Rudolph"],
  patentAssignees: [],
  patentYear: 1919,
  elementCount: 6,
  groupCount: 4,

  /* ── Glass elements: object side to image side ── */
  elements: [
    {
      id: 1,
      name: "L3′",
      diagramLabel: "L3′",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6207,
      vd: 56.9,
      fl: 49.938342260088234,
      glass: "Unmatched (621569 — historical D-line crown-class coordinate; supplier unresolved)",
      cemented: "D1",
      role: "Object-side outer positive element of the first identical single objective.",
    },
    {
      id: 2,
      name: "L2′",
      diagramLabel: "L2′",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5398,
      vd: 47.3,
      fl: -41.229503815174226,
      glass: "Unmatched (540473 — historical D-line low-index flint / LLF-FEL-class coordinate; supplier unresolved)",
      cemented: "D1",
      role: "Negative cemented partner of L3′; separated by air from the near-stop L1′ meniscus.",
    },
    {
      id: 3,
      name: "L1′",
      diagramLabel: "L1′",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6223,
      vd: 53.2,
      fl: 150.48019445506026,
      glass: "Unmatched (622532 — historical D-line SSK/BSM-class coordinate; supplier unresolved)",
      role: "Positive meniscus adjacent to the median diaphragm on the object-side half.",
    },
    {
      id: 4,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6223,
      vd: 53.2,
      fl: 150.48019445506026,
      glass: "Unmatched (622532 — historical D-line SSK/BSM-class coordinate; supplier unresolved)",
      role: "Positive meniscus adjacent to the median diaphragm on the image-side half.",
    },
    {
      id: 5,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5398,
      vd: 47.3,
      fl: -41.229503815174226,
      glass: "Unmatched (540473 — historical D-line low-index flint / LLF-FEL-class coordinate; supplier unresolved)",
      cemented: "D2",
      role: "Negative cemented partner of L3; separated by air from the near-stop L1 meniscus.",
    },
    {
      id: 6,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6207,
      vd: 56.9,
      fl: 49.938342260088234,
      glass: "Unmatched (621569 — historical D-line crown-class coordinate; supplier unresolved)",
      cemented: "D2",
      role: "Image-side outer positive element of the second identical single objective.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 36.4635, d: 7.614, nd: 1.6207, elemId: 1, sd: 19 },
    // Cemented L3′→L2′ junction: downstream L2′ owns the medium after surface 2.
    { label: "2", R: -190.215, d: 3.483, nd: 1.5398, elemId: 2, sd: 18.25 },
    { label: "3", R: 25.3665, d: 1.9035, nd: 1, elemId: 0, sd: 14.75 },
    { label: "4", R: 31.698, d: 3.969, nd: 1.6223, elemId: 3, sd: 16.5 },
    { label: "5", R: 45.6165, d: 3.1725, nd: 1, elemId: 0, sd: 15.8 },
    // Published median diaphragm; sd is calibrated from the 30 mm effective aperture, not source-published.
    { label: "STO", R: 1e15, d: 3.1725, nd: 1, elemId: 0, sd: 12.44576968653447 },
    { label: "6", R: -45.6165, d: 3.969, nd: 1.6223, elemId: 4, sd: 15.8 },
    { label: "7", R: -31.698, d: 1.9035, nd: 1, elemId: 0, sd: 16.5 },
    { label: "8", R: -25.3665, d: 3.483, nd: 1.5398, elemId: 5, sd: 14.75 },
    // Cemented L2→L3 junction: downstream L3 owns the medium after surface 9.
    { label: "9", R: 190.215, d: 7.614, nd: 1.6207, elemId: 6, sd: 18.25 },
    // Computed infinity-focus BFD of the final scaled prescription; not a published patent spacing.
    { label: "10", R: -36.4635, d: 115.80154476172397, nd: 1, elemId: 0, sd: 19 },
  ],

  asph: {},

  /* ── Focus: fixed patent state only ── */
  var: {},
  varLabels: [],
  closeFocusM: 1,
  focusDescription:
    "The patent gives one fixed prescription and no verified minimum focus distance. Bellows or camera-standard focusing is not modeled.",

  /* ── Diagram annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Aperture ── */
  nominalFno: 4.4653261630411505,
  // No source minimum aperture is established for the fixed job-card product correlation.
  // Keep the quick-select range conservative; the project default maxFstop applies.
  fstopSeries: [4.5, 5.6, 8, 11, 16],

  /* ── Layout ── */
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
