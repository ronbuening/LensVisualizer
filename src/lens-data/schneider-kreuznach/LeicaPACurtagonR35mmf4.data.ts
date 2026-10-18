import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — SCHNEIDER-KREUZNACH LEICA PA-CURTAGON-R 35mm f/4     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,410,632 (W. Wöltche; Jos. Schneider & Co.),       ║
 * ║    FIG. 2 embodiment, TABLE II (identical table in claim 2).         ║
 * ║  Retrofocus wide-angle for a perspective-control (shift) mount:      ║
 * ║    negative front component F′ (L1′ + L2′) followed by a positive    ║
 * ║    rear component R′ of four members; stop between the two weak      ║
 * ║    menisci L4′ and V′ (L5′ + L6′ cemented).                          ║
 * ║  7 elements / 6 groups, 0 aspherical surfaces.                       ║
 * ║  Focus: unit focus — CONSTRAINED RECONSTRUCTION (see below).         ║
 * ║                                                                      ║
 * ║  INDEX REFERENCE: the patent tabulates nₑ / νₑ (e-line, νₑ from      ║
 * ║    F′/C′). The nd / vd slots below retain those native e-line        ║
 * ║    values; every element carries indexReference: "e".               ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING: patent f = 100 units. Uniform scale s = 0.352      ║
 * ║    applied to every R and d (EFL 100.0003 → 35.2001 mm), matching    ║
 * ║    Schneider-Kreuznach's published effective focal length 35.2 mm.   ║
 * ║    All-spherical: no aspheric coefficients to transform.             ║
 * ║  NOTE ON BACK FOCUS: last d = computed paraxial BFD 45.8842 mm       ║
 * ║    (patent TABLE IV s = 130.4 units reproduced; the col. 4 prose     ║
 * ║    value 113.4 is a source misprint). No rear plates are listed.     ║
 * ║  NOTE ON STOP POSITION: not tabulated. STO inferred from FIG. 2 /    ║
 * ║    FIG. 2a diaphragm D inside d8′: 5.28 units after r8′, 4.14        ║
 * ║    before r9′ (±0.2 units). STO sd calibrated to the nominal f/4     ║
 * ║    exact axial beam (calibration, not a published diameter).         ║
 * ║  NOTE ON SEMI-DIAMETERS: not published. Taken from the element       ║
 * ║    heights drawn in FIG. 2 (7.108 px/unit at 300 DPI, ±0.1 mm),      ║
 * ║    with the cemented V′ pair at a shared 6.2 mm optical rim.        ║
 * ║    Finite ray samples retain exposed-surface vignetting; no         ║
 * ║    production illumination curve is asserted.                      ║
 * ║  NOTE ON FOCUS: only the infinity state is published. The 0.30 m     ║
 * ║    close state (object-to-film, manufacturer) is a code-solved unit- ║
 * ║    focus extension of 6.1501 mm; it is not a published conjugate.    ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gap.            ║
 * ║  See LENS_DATA_SPEC.md § Scope: What to Include.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  publishedAt: "2026-10-17T00:00:00Z", // Requested catalog publication date, independent of commit timezone.
  key: "schneider-pa-curtagon-r-35f4",
  maker: "Schneider-Kreuznach", // Schneider manufacture; Leica R mount association is recorded separately
  name: "SCHNEIDER-KREUZNACH PA-CURTAGON-R 35mm f/4",
  subtitle: "US 3,410,632 FIG. 2 / TABLE II — JOS. SCHNEIDER & CO. / W. WÖLTCHE",

  catalog: {
    lensMounts: ["leica-r"], // Leica order no. 11202; other Schneider mount versions are separate products
    imageFormat: "135-full-frame",
    imageCircleMm: 57, // Schneider-Kreuznach / Leitz published image circle (78° effective field)
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "f ≈ 35.2 mm",
      "F/4",
      "2ω ≈ 78° (57 mm IMAGE CIRCLE)",
      "SHIFT ±7 mm",
      "ALL SPHERICAL",
    ],
    elementCount: 7,
    groupCount: 6,
    /* ── Explicit metadata fields ── */
    focalLengthMm: {
      marketing: 35,
      design: 35.2, // Schneider-Kreuznach effective focal length; equals the scaled model EFL
    },
    fNumber: {
      marketing: 4, // model stop is calibrated to f/4, so apertureDesign is omitted (identical by construction)
    },
  },

  source: {
    patentNumber: "US 3,410,632",
    patentYear: 1968,
    authors: ["Walter Wöltche"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
  },

  /* ── Elements ── nd / vd hold the patent's native nₑ / νₑ (indexReference "e"); fl = thick lens in air. */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex",
      nd: 1.62287,
      vd: 60.06,
      indexReference: "e",
      focalLengthMm: 118.37,
      glass: "N-SK16 spectral proxy (Schott; native e-line dense-crown coordinates; supplier unconfirmed)",
      apd: false,
      role: "Weak positive front collector of F′ (member I′); flat rear face",
      diagramLabel: "L1′",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51871,
      vd: 63.96,
      indexReference: "e",
      focalLengthMm: -28.77,
      glass: "N-BK7 spectral proxy (Schott; native e-line borosilicate-crown coordinates; supplier unconfirmed)",
      apd: false,
      role: "Strong negative meniscus (member II′) supplying the retrofocus divergence of F′",
      diagramLabel: "L2′",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.70586,
      vd: 40.87,
      indexReference: "e",
      focalLengthMm: 68.1,
      glass: "BASF7 spectral proxy (Schott; native e-line BaSF52-type coordinates; supplier unconfirmed)",
      apd: false,
      role: "Strongly collective first member of R′ (III′)",
      diagramLabel: "L3′",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.70189,
      vd: 38.38,
      indexReference: "e",
      focalLengthMm: 242.1,
      glass: "Unmatched (historical BaSF13-type e-line coordinate; no verified compatible catalog curve)",
      apd: false,
      role: "Thick, weak object-side meniscus (IV′) concave toward the stop",
      diagramLabel: "L4′",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.70442,
      vd: 34.67,
      indexReference: "e",
      focalLengthMm: -15.06,
      glass: "BAFD14 spectral proxy (HOYA; native e-line BaSF14-type coordinates; supplier unconfirmed)",
      apd: false,
      role: "Negative flint of the image-side meniscus doublet V′; concave face bounds the stop space",
      diagramLabel: "L5′",
      cemented: "V′",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.62287,
      vd: 60.06,
      indexReference: "e",
      focalLengthMm: 15.5,
      glass: "N-SK16 spectral proxy (Schott; native e-line dense-crown coordinates; supplier unconfirmed)",
      apd: false,
      role: "Positive crown of doublet V′; the negative cemented junction corrects longitudinal colour",
      diagramLabel: "L6′",
      cemented: "V′",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6966,
      vd: 53.18,
      indexReference: "e",
      focalLengthMm: 54.53,
      glass: "LAC13 spectral proxy (HOYA; native e-line lanthanum-crown coordinates; supplier unconfirmed)",
      apd: false,
      role: "Strongly collective rear member (VI′), concave toward the object",
      diagramLabel: "L7′",
    },
  ],

  /* ── Surface prescription ── patent r1′–r13′ → labels "1"–"13"; STO inserted in d8′. sd = FIG. 2 heights (mm). */
  surfaces: [
    { label: "1", R: 73.72992, d: 5.5264, sd: 19.3, medium: 1 }, // r1′
    { label: "2", R: "flat", d: 0.1232, sd: 19.3 }, // r2′ = ∞ (plane)
    { label: "3", R: 110.48928, d: 2.21056, sd: 17.9, medium: 2 }, // r3′
    { label: "4", R: 13.05568, d: 14.24544, sd: 11.3 }, // r4′; d4′ = l1 (intercomponent space)
    { label: "5", R: 133.38336, d: 6.13888, sd: 7.6, medium: 3 }, // r5′
    { label: "6", R: -73.72992, d: 0.1232, sd: 7.6 }, // r6′
    { label: "7", R: 19.05024, d: 6.26208, sd: 6.2, medium: 4 }, // r7′
    { label: "8", R: 18.54688, d: 1.85856, sd: 6.2 }, // r8′ = r_A; 5.28 units to STO
    { label: "STO", R: "flat", d: 1.45728 }, // STO inferred from FIG. 2; f/4-calibrated
    { label: "9", R: -33.22176, d: 0.98208, sd: 6.2, medium: 5 }, // r9′ = r_B
    { label: "10", R: 15.7696, d: 4.29792, sd: 6.2, medium: 6 }, // r10′ cemented junction L5′/L6′
    { label: "11", R: -22.27808, d: 0.1232, sd: 6.2 }, // r11′
    { label: "12", R: -106.60672, d: 2.45696, sd: 7.2, medium: 7 }, // r12′
    { label: "13", R: -28.27264, sd: 7.2 }, // r13′; d = paraxial BFD at infinity
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    description:
      "Unit focus (reconstruction): the complete optical unit is assumed to translate on the helicoid, so only the back focal distance changes. The patent publishes only the infinity state; the 0.30 m close-focus spacing (+6.15 mm extension, about 1:5.7) is solved from the manufacturer's closest distance measured from the film plane and is not a published conjugate.",
  },

  /* (moved from var) ── Variable air spacing ── unit focus (reconstruction): only the back focal distance changes.
   *    Close value solved for 0.30 m object-to-film (manufacturer MFD); not a published patent state. */
  gaps: { "13": { label: "BF", values: [[45.8842, 52.0343]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  // Shift-only perspective control: 7 mm displacement in any direction on a rotating mount
  // (Schneider-Kreuznach data; Leitz publications). The viewer models the meridional shift-Y axis only; no tilt.
  perspectiveControl: { shiftRangeMm: [-7, 7], tiltRangeDeg: [0, 0], shiftStepMm: 0.1 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "F′", fromSurface: "1", toSurface: "4" },
    { text: "R′", fromSurface: "5", toSurface: "13" },
  ],
  doublets: [{ text: "V′", fromSurface: "9", toSurface: "11" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
