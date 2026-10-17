import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VIVITAR SERIES 1 450 mm f/4.5 VMC ASPHERICAL MIRROR  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,523,816, Table IV / Fig. 4 (Kreitzer / Vivitar).║
 * ║  Cassegrain catadioptric with an aspheric PMMA corrector, fixed    ║
 * ║  mirrors, fixed positive G1, and movable negative G2.              ║
 * ║  8 refractive elements + 2 mirrors / 7 air-spaced groups.         ║
 * ║                                                                    ║
 * ║  NOTE ON PATENT CONSISTENCY:                                       ║
 * ║    Table IV is retained without altering the M1–M2 spacing.        ║
 * ║    Its -64.55 mm value places M2 0.50 mm ahead of S1, matching     ║
 * ║    Fig. 4. A full repeated-pass paraxial trace of the retained     ║
 * ║    physical path gives EFL 590.178 mm and BFD 92.403 mm, not the  ║
 * ║    stated EFL 437.4 mm. The patent therefore does not provide a   ║
 * ║    uniquely self-consistent folded prescription. The published    ║
 * ║    437.4 mm EFL remains the design metadata; the explicit image    ║
 * ║    plane is placed at the paraxial focus of the unmodified table   ║
 * ║    for obstruction-aware folded-path rendering.                    ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                    ║
 * ║    The patent states that G2 moves axially and gives a general     ║
 * ║    close-focus condition near 3 m, but Table IV supplies no second║
 * ║    spacing state. No speculative focus-travel values are stored.   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. SDs were estimated from exact ║
 * ║    marginal/chief-ray envelopes at f/4.5 over the 24×36 mm field, ║
 * ║    then constrained by edge thickness, rim slope, cross-gap sag,   ║
 * ║    and element front/rear SD ratio. The resulting model allows    ║
 * ║    expected peripheral vignetting rather than using impossible    ║
 * ║    negative edge thicknesses in L5 or L7.                           ║
 * ║                                                                    ║
 * ║  NOTE ON MIRROR/FOLDED PATH:                                       ║
 * ║    M1 and M2 are first-surface mirrors. M1 is annular; M2 blocks   ║
 * ║    the incoming central pupil and reflects the returning beam.     ║
 * ║    Auto path tracing revisits L1 after each reflection. STO is a  ║
 * ║    synthetic entrance-pupil plane for the fixed f/4.5 aperture.   ║
 * ║    Patent-shown protective/sealing plates and the removable filter ║
 * ║    are omitted because no optical prescription is supplied and the ║
 * ║    project excludes filters.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "vivitar-s1-450-f45",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 450mm f/4.5 VMC ASPHERICAL MIRROR",
  subtitle: "US 4,523,816 Table IV / Fig. 4 — Kreitzer / Vivitar",

  catalog: {
    imageFormat: "135-full-frame",
    specs: [
      "10 POWERED COMPONENTS / 7 GROUPS",
      "f = 437.4 mm (PATENT)",
      "F/4.5 FIXED",
      "24×36 mm FORMAT",
      "1 ASPHERICAL SURFACE",
      "CASSEGRAIN / INTERNAL FOCUS",
    ],
    elementCount: 10,
    groupCount: 7,
    focalLengthMm: { marketing: 450, design: 437.4 },
    fNumber: { marketing: 4.5, design: 4.5 },
  },

  source: {
    patentNumber: "US 4,523,816",
    patentYear: 1985,
    authors: ["Melvyn H. Kreitzer"],
    assignees: ["Vivitar Corporation"],
  },

  /* ── Elements, in physical object-to-image order ── */
  elements: [
    {
      id: 1,
      name: "M2",
      label: "Secondary mirror",
      type: "Convex First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      focalLengthMm: -71.77,
      glass: "Reflective surface (substrate unprescribed)",
      apd: false,
      role: "Central convex secondary; blocks the incoming pupil core and reflects the primary-mirror beam forward.",
      span: ["M2", "M2B"],
    },
    {
      id: 2,
      name: "L1",
      label: "Aspheric corrector",
      type: "Plano-Convex Corrector (1× Asph)",
      nd: 1.491,
      vd: 57.2,
      focalLengthMm: 2256.19,
      glass: "PMMA (methyl methacrylate; historical attribution, not catalog glass)",
      apd: false,
      role: "Full-aperture, repeated-pass aspheric corrector for the spherical mirror pair.",
    },
    {
      id: 3,
      name: "L2",
      label: "G1 crown",
      type: "Biconvex Positive",
      nd: 1.517,
      vd: 64.2,
      focalLengthMm: 91.02,
      glass: "BSC7 (HOYA)",
      apd: false,
      role: "Positive crown member of the fixed G1 achromat.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L3",
      label: "G1 flint",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 32.2,
      focalLengthMm: -183.85,
      glass: "E-FD5 (HOYA)",
      apd: false,
      role: "Flint member of the fixed positive G1 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      focalLengthMm: 108.715,
      glass: "Reflective surface (substrate unprescribed)",
      apd: false,
      role: "Spherical annular primary with a clear central opening for G1 and the post-secondary beam.",
      span: ["M1", "M1B"],
    },
    {
      id: 6,
      name: "L4",
      label: "G2 doublet 1 front",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.3,
      focalLengthMm: -123.93,
      glass: "LAC10 (HOYA, legacy)",
      apd: false,
      role: "Negative meniscus in the first, net-positive component of movable G2.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L5",
      label: "G2 doublet 1 rear",
      type: "Biconvex Positive",
      nd: 1.728,
      vd: 26.1,
      focalLengthMm: 55.71,
      glass: "Unmatched (dense flint 728/261; no official HOYA or SUMITA catalog match)",
      apd: false,
      role: "Strong positive, high-dispersion member; L4+L5 has net focal length +101.77 mm in air.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L6",
      label: "G2 doublet 2 front",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.3,
      focalLengthMm: -36.73,
      glass: "NBFD10 (HOYA, legacy)",
      apd: false,
      role: "Strong negative member of the second G2 doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L7",
      label: "G2 doublet 2 rear",
      type: "Positive Meniscus",
      nd: 1.517,
      vd: 64.2,
      focalLengthMm: 90.33,
      glass: "BSC7 (HOYA)",
      apd: false,
      role: "Crown partner; L6+L7 has net focal length -60.69 mm in air.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L8",
      label: "G2 rear singlet",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.3,
      focalLengthMm: -73.36,
      glass: "LAC10 (HOYA, legacy)",
      apd: false,
      role: "Rear negative meniscus completing the movable negative group.",
    },
  ],

  /*
   * Physical z order. Coordinates are offset so the synthetic STO is z = 0.
   * Patent vertices relative to S1 are: M2 -0.50, S1 0, S2 36.75,
   * S3 53.00, S5 62.18, M1 64.05, S6 66.43, and S13 105.22 mm.
   */
  surfaces: [
    { label: "STO", R: "flat", d: 3.0, sd: 48.6 },
    {
      label: "M2",
      R: -143.54,
      d: 0.25,
      sd: 27.5,
      medium: 1,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M2B", R: "flat", d: 0.25, sd: 27.5 },
    {
      label: "1A",
      R: "flat",
      d: 36.75,
      sd: 51.0,
      medium: 2,
      asphere: { K: 0.01, A4: -2.89e-8, A6: 3.65e-13, A8: -5.79e-16, A10: 9.13e-20 },
    },
    { label: "2", R: -1107.79, d: 16.25, sd: 51.0 },
    { label: "3", R: 634.3, d: 6.88, sd: 23.7, medium: 3 },
    { label: "4", R: -50.64, d: 2.3, sd: 23.7, medium: 4 },
    { label: "5", R: -87.29, d: 1.87, sd: 23.7 },
    {
      label: "M1",
      R: -217.43,
      d: 0.5,
      sd: 51.0,
      innerSd: 24.0,
      medium: 5,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: "flat", d: 1.88, sd: 51.0, innerSd: 24.0 },
    { label: "6", R: 116.03, d: 2.2, sd: 22.5, medium: 6 },
    { label: "7", R: 50.04, d: 5.17, sd: 18.0, medium: 7 },
    { label: "8", R: -204.6, d: 0.72, sd: 19.4 },
    { label: "9", R: -800.99, d: 2.2, sd: 20.0, medium: 8 },
    { label: "10", R: 31.89, d: 3.5, sd: 16.0, medium: 9 },
    { label: "11", R: 96.8, d: 23.08, sd: 19.5 },
    { label: "12", R: -44.48, d: 1.92, sd: 16.5, medium: 10 },
    { label: "13", R: -286.84, d: 92.403458, sd: 16.5 },
  ],

  focus: {
    closeFocusM: 3.0,
    description:
      "Internal focus by axial translation of negative group G2; Table IV gives no close-focus spacing state, so the data file retains the single published configuration.",
  },

  aperture: { nominalFNumber: 4.5, fStops: [4.5], maxFNumber: 4.5 },

  projection: { kind: "rectilinear", fullFieldDeg: 5.66, maxTraceFieldDeg: 2.83 },

  opticalPath: { mode: "auto", imagePlane: { z: 201.123458, label: "IMG" }, maxInteractions: 28 },

  groups: [
    { text: "CORRECTOR", fromSurface: "1A", toSurface: "2" },
    { text: "G1", fromSurface: "3", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "13" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
  ],

  layout: { scFill: 0.61, yScFill: 0.68 },

  rays: { rayLeadFrac: 0.16 },
} satisfies LensDataV2Input;

export default LENS_DATA;
