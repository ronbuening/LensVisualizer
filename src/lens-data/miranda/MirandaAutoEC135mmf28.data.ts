import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MIRANDA AUTO EC 135mm f/2.8                                 ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP1976-074627, Example 1 (Miranda Camera Co., Ltd.).             ║
 * ║ Five elements / four groups; all nine refracting surfaces are spherical. ║
 * ║                                                                            ║
 * ║ SCALE: the patent example is normalized to f = 100.0. All prescription   ║
 * ║ radii/thicknesses are scaled uniformly ×1.35 for the 135 mm product      ║
 * ║ correlation. Indices and Abbe numbers are unchanged. The unmodified      ║
 * ║ scaled surface table computes EFL = 137.433861 mm; it is not rescaled     ║
 * ║ again to force the marketed 135 mm value.                                ║
 * ║                                                                            ║
 * ║ SOURCE DISCREPANCY / IMAGE PLANE: the patent's printed f = 100.0 and      ║
 * ║ BFD = 46.916 do not reproduce from its unambiguous surface table. The     ║
 * ║ data preserves every refracting-surface value and places IMG at the       ║
 * ║ scaled table's computed paraxial BFD = 64.531597 mm. The printed scaled  ║
 * ║ BFD (63.3366 mm) remains preserved as a failed source comparison in the  ║
 * ║ dossier rather than being silently treated as reproduced.                ║
 * ║                                                                            ║
 * ║ STOP: Fig. 1 places the diaphragm inside D6 but gives no dimensions. The ║
 * ║ modeled stop is at 54.5% of D6 measured from R6 toward R7. Its physical  ║
 * ║ semi-diameter is calibrated paraxially so the entrance pupil gives f/2.8 ║
 * ║ for the computed design EFL. This is a model calibration, not an          ║
 * ║ independently published diaphragm diameter.                              ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: the patent publishes none. The modeled clear apertures    ║
 * ║ use about 10% or greater radial margin over the exact on-axis f/2.8       ║
 * ║ marginal bundle, rounded into element-wise physical apertures. Portable   ║
 * ║ exact spherical tracing verifies the full default 0.6-field / ±0.75      ║
 * ║ pupil sample fan. At the full published ±9° field, outer pupil rays are  ║
 * ║ intentionally vignetted by the front group; no zero-corner-vignetting    ║
 * ║ claim is made.                                                            ║
 * ║                                                                            ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent supplies only the infinity ║
 * ║ prescription. closeFocusM = 1.5 is manufacturer marketed metadata and    ║
 * ║ does not create an internal focus state or variable-gap law.              ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "miranda-auto-ec-135mm-f28",
  maker: "Miranda",
  name: "MIRANDA AUTO EC 135mm f/2.8",
  subtitle: "JP1976-074627 Example 1 — ×1.35 scaled production correlation; attribution not manufacturer-confirmed",
  specs: [
    "5 ELEMENTS / 4 GROUPS",
    "135 mm nominal / 137.434 mm computed",
    "F/2.8",
    "18° marketed angle of view",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 135,
  focalLengthDesign: 137.4338610617,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  imageFormat: "135-full-frame",
  patentNumber: "JP S51-074627 A",
  patentAuthors: ["Kunio Shimada"],
  patentAssignees: ["Miranda Camera Co., Ltd."],
  patentYear: 1976,
  elementCount: 5,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.0,
      indexReference: "d",
      fl: 104.036975,
      glass: "S-BAL35R — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      apd: false,
      role: "Front positive collector.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.0,
      indexReference: "d",
      fl: 103.526192,
      glass: "S-BAL35R — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      apd: false,
      role: "Second positive member of the front positive section.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.6,
      indexReference: "d",
      fl: -40.760867,
      glass: "J-SF11 — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      apd: false,
      role: "Strong negative meniscus separating the front positive section from the rear cemented group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      fl: 71.056841,
      glass: "S-TIH1 — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      apd: false,
      role: "Positive component of the final cemented net-positive group.",
      cemented: "G4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.2,
      indexReference: "d",
      fl: -119.611114,
      glass: "J-SK16 — supplier-neutral catalog proxy; patent nd/vd retained, production identity unproven",
      apd: false,
      role: "Negative cemented partner; L4+L5 remains net positive as a cemented group.",
      cemented: "G4",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 59.427, d: 8.7075, nd: 1.58913, elemId: 1, sd: 26.5 },
    { label: "2", R: 1847.61, d: 0.27, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "3", R: 33.9255, d: 7.6275, nd: 1.58913, elemId: 2, sd: 24.0 },
    { label: "4", R: 70.0785, d: 9.6525, nd: 1.0, elemId: 0, sd: 24.0 },
    { label: "5", R: 146.205, d: 2.7405, nd: 1.78472, elemId: 3, sd: 18.0 },
    { label: "6", R: 26.028, d: 13.0154175, nd: 1.0, elemId: 0, sd: 18.0 },
    // STO position inferred from Fig. 1: 54.5% of published D6 measured from R6 toward R7.
    // STO sd is calibrated to the modeled f/2.8 entrance pupil; it is not a source-published diameter.
    { label: "STO", R: 1e15, d: 10.8660825, nd: 1.0, elemId: 0, sd: 13.2893056765 },
    { label: "7", R: 173.3805, d: 3.6585, nd: 1.71736, elemId: 4, sd: 13.5 },
    // Cemented L4→L5 junction: downstream element L5 owns this interface.
    { label: "8", R: -71.5635, d: 2.241, nd: 1.62041, elemId: 5, sd: 13.5 },
    // IMG is placed at the paraxial BFD computed from the unmodified scaled surface table.
    { label: "9", R: -2032.29, d: 64.5315974682, nd: 1.0, elemId: 0, sd: 13.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [{ text: "G4", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 1.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: patent Example 1 supplies only infinity focus; 1.5 m is manufacturer marketed MFD metadata.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
