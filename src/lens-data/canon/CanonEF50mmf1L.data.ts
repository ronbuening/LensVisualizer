import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CANON EF 50mm f/1.0 L USM
 * Original: US 4,717,245, Numerical Example 2, PDF page 8 / column 5;
 * Figure 2, PDF page 2 / sheet 1; Figure 5 aberrations, PDF page 4 / sheet 3.
 * Certificate of correction dated February 7, 1989 is included as PDF page 10.
 * Production correlation is inferred; the patent does not name the commercial lens.
 *
 * REUSED COVERAGE: source prescription, scale, polynomial-asphere conversion and
 * retained geometric constraints reuse the actual 2026-09-23 review. The 2026-10-30
 * scoped reopening adds native-resolved air shoulders at stored S9 and S10, preserving
 * sd 18.8/17.4 with outer rimExtensionSd 21.2/20.6 mm, and qualifies source spectral
 * uncertainty and current runtime limitations. No opaque cemented land or cut.
 *
 * SCALE: source F=100; existing s=0.50008 maps R/d/sd and A_n/s^(n-1) to ~50 mm.
 * Stored 1-9 correspond to source R1-R9, STO to R10, stored 10-20 to R11-R21.
 * Stored 5A=R5 and 14A=R15. All numeric R/d, aspheres, caps and controls remain.
 *
 * ASPHERES: source R=infinity, X=A H^2+B H^4+C H^6+D H^8+E H^10.
 * Existing osculating sphere R=1/(2A), K=0 and residual even coefficients through
 * h^10 are retained. Prior source/conversion review found <0.02 micrometre sag
 * residual at the 23.8 mm rim; this approximation is not an exact infinite series.
 *
 * CAPS: prior figure-measured/beam-constrained estimates and gapSagFrac=0.97 remain.
 * Native Figure 2 scale is about 8.69 px/mm after production scaling; practical height
 * reading uncertainty +/-0.6 mm, separately from schematic distortion. The claim-6
 * positive-form air lenses remain narrow. Current f/1.0 iris-rim probes clip retained
 * caps; old blanket full-beam-clearance wording is no longer a current runtime claim.
 *
 * GLASS: source column 4 defines only refractive indices N and Abbe numbers nu,
 * without a reference wavelength. Current d-line tracing is retained as approximate,
 * with explicit indexReferenceNote and eleven Unmatched media. Old catalog classes
 * are conditional comparisons only and all eleven catalog curves are disabled.
 * Source numeric pairs are unchanged; no source C/F/g, partial or APD data exist.
 * No supplier, melt, chemistry, cement or grinding/polishing identity is established.
 *
 * FOCUS: source prefers whole-system motion but publishes only infinity spacings.
 * Existing unit-extension BF 37.226 -> 42.18 mm is an approximate reconstruction
 * for correlated product 0.6 m MFD. Intermediate motion is not focus preserving;
 * no production floating displacement is invented.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-50f10l",
  maker: "Canon",
  name: "CANON EF 50mm f/1.0 L USM",
  subtitle: "US 4,717,245 EXAMPLE 2 — CANON / TAKAHASHI",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: ["11 ELEMENTS / 9 GROUPS", "f ≈ 50.0 mm", "F/1.0", "2ω ≈ 45.2°", "2 ASPHERICAL SURFACES"],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 50, design: 50.0 },
    fNumber: { marketing: 1.0, design: 1.0 },
  },

  source: {
    patentNumber: "US 4,717,245",
    example: { label: "Numerical Example 2", id: "2" },
    patentYear: 1988,
    authors: ["Sadatoshi Takahashi"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: 278.2,
      glass: "Unmatched (source reference unspecified; prior BACD14 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Front positive meniscus — begins converging the f/1.0 marginal ray bundle with weak power and minimal angle of incidence.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: 176.1,
      glass: "Unmatched (source reference unspecified; prior S-LAL14 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Second positive meniscus — additional convergence for the large-aperture marginal bundle; two-element front unit is key to Example 2.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51742,
      vd: 52.4,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: -196.9,
      glass: "Unmatched (source reference unspecified; prior S-NSL36 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Negative meniscus with aspherical front — shares negative Petzval burden with L5, reducing sagittal flare. Source asphere; manufacturing method unresolved.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: 59.2,
      glass: "Unmatched (source reference unspecified; prior S-LAH58 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "First source high-index positive — strong convergence toward stop; cemented to L3 for Petzval sum reduction.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.4,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: -52.1,
      glass: "Unmatched (source reference unspecified; prior S-NSL36 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Classical front Gauss negative — concave rear surface (R9) faces stop; curvature weakened by L3's power sharing.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: -21.5,
      glass: "Unmatched (source reference unspecified; prior PBH53 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Classical rear Gauss negative — strongest negative power in system; high-dispersion material for chromatic correction.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: 28.4,
      glass: "Unmatched (source reference unspecified; prior S-LAH58 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Thick biconvex positive cemented to L6 — controls higher-order spherical aberration over the long path length required at f/1.0.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: -71.7,
      glass: "Unmatched (source reference unspecified; prior S-TIH6 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Negative meniscus with aspherical rear — symmetric counterpart to L3, shares rear Gauss negative burden. Source asphere; material chemistry and manufacturing method unresolved.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: 73.2,
      glass: "Unmatched (source reference unspecified; prior S-LAH58 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Positive meniscus (concave toward front) — begins converging the wide post-stop beam toward the image.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: 76.4,
      glass: "Unmatched (source reference unspecified; prior S-LAH58 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Nearly plano-convex positive — primary convergence element in rear group; thick to handle the large-diameter beam.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.55963,
      vd: 61.2,
      indexReference: "d",
      indexReferenceNote:
        "Source column 4 defines N and Abbe nu without a reference wavelength. The retained d-line tracing convention is approximate; catalog spectral curves are disabled, not identified as historical media.",
      focalLengthMm: 148.8,
      glass: "Unmatched (source reference unspecified; prior S-BAL50 coordinate class is conditional only)",
      apd: false,
      apdNote:
        "No source APD designation or published partial dispersion; this does not establish a normal production melt.",
      role: "Weak positive meniscus (convex toward the front) — last element, trimming field curvature and residual aberrations.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 132.766, d: 4.906, sd: 28.6, medium: 1 }, // L1 front
    { label: "2", R: 627.515, d: 0.095, sd: 28.1 }, // L1 rear → air
    { label: "3", R: 84.118, d: 4.711, sd: 26.4, medium: 2 }, // L2 front
    { label: "4", R: 261.422, d: 0.145, sd: 26.0 }, // L2 rear → air
    {
      label: "5A",
      R: 65.353,
      d: 3.846,
      sd: 23.8,
      medium: 3,
      asphere: { K: 0, A4: 7.3596e-8, A6: 1.5082e-9, A8: -2.1608e-12, A10: 2.3245e-15 },
    }, // L3 front (asph)
    { label: "6", R: 39.016, d: 7.501, sd: 22.2, medium: 4 }, // L3/L4 junction
    { label: "7", R: 140.162, d: 1.25, sd: 20.8 }, // L4 rear → air
    { label: "8", R: 546.837, d: 2.595, sd: 21.2, medium: 5 }, // L5 front
    { label: "9", R: 25.634, d: 8.941, sd: 18.8, rimExtensionSd: 21.2 }, // L5 rear → air
    { label: "STO", R: "flat", d: 8.941 }, // Aperture stop
    { label: "10", R: -24.444, d: 1.93, sd: 17.4, rimExtensionSd: 20.6, medium: 6 }, // L6 front
    { label: "11", R: 74.017, d: 12.752, sd: 20.6, medium: 7 }, // L6/L7 junction
    { label: "12", R: -34.806, d: 1.575, sd: 21.1 }, // L7 rear → air
    { label: "13", R: -30.075, d: 2.405, sd: 21.6, medium: 8 }, // L8 front
    {
      label: "14A",
      R: -65.013,
      d: 0.145,
      sd: 23.8,
      asphere: { K: 0, A4: 7.2364e-7, A6: 2.7505e-9, A8: -4.2075e-12, A10: 2.7366e-15 },
    }, // L8 rear (asph) → air
    { label: "15", R: -200.987, d: 6.541, sd: 25.8, medium: 9 }, // L9 front
    { label: "16", R: -49.643, d: 0.095, sd: 25.6 }, // L9 rear → air
    { label: "17", R: 1873.333, d: 6.346, sd: 26.0, medium: 10 }, // L10 front
    { label: "18", R: -69.821, d: 0.48, sd: 26.0 }, // L10 rear → air
    { label: "19", R: 71.206, d: 4.426, sd: 22.6, medium: 11 }, // L11 front
    { label: "20", R: 480.841, sd: 22.6 }, // L11 rear → BFD (var)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.6,
    description:
      "CONSTRAINED_RECONSTRUCTION: unit extension of the whole optical block follows the source preferred mechanism; the existing close-focus back gap is calculated for the correlated 0.6 m endpoint. The original supplies no finite table or production floating-group displacements, and linear intermediate motion is approximate.",
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: { "20": { label: "BF", values: [[37.226, 42.18]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.0, fStops: [1.0, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 8 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (L1–L5)", fromSurface: "1", toSurface: "9" },
    { text: "REAR (L6–L11)", fromSurface: "10", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5A", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  layout: { scFill: 0.55, yScFill: 0.5 },

  /* ── Layout tuning ── */
  checks: { gapSagFrac: 0.97 },
} satisfies LensDataV2Input;

export default LENS_DATA;
