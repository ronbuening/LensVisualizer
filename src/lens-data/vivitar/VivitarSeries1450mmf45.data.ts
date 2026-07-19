import type { LensDataInput } from "../../types/optics.js";

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
  key: "vivitar-s1-450-f45",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 450mm f/4.5 VMC ASPHERICAL MIRROR",
  subtitle: "US 4,523,816 Table IV / Fig. 4 — Kreitzer / Vivitar",
  specs: [
    "10 POWERED COMPONENTS / 7 GROUPS",
    "f = 437.4 mm (PATENT)",
    "F/4.5 FIXED",
    "24×36 mm FORMAT",
    "1 ASPHERICAL SURFACE",
    "CASSEGRAIN / INTERNAL FOCUS",
  ],

  focalLengthMarketing: 450,
  focalLengthDesign: 437.4,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  imageFormat: "135-full-frame",
  patentNumber: "US 4,523,816",
  patentAuthors: ["Melvyn H. Kreitzer"],
  patentAssignees: ["Vivitar Corporation"],
  patentYear: 1985,
  elementCount: 10,
  groupCount: 7,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 5.66,
    maxTraceFieldDeg: 2.83,
  },
  opticalPath: {
    mode: "auto",
    imagePlane: { z: 201.123458, label: "IMG" },
    maxInteractions: 28,
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
      fl: -71.77,
      glass: "Reflective surface (substrate unprescribed)",
      apd: false,
      fromSurface: "M2",
      toSurface: "M2B",
      role: "Central convex secondary; blocks the incoming pupil core and reflects the primary-mirror beam forward.",
    },
    {
      id: 2,
      name: "L1",
      label: "Aspheric corrector",
      type: "Plano-Convex Corrector (1× Asph)",
      nd: 1.491,
      vd: 57.2,
      fl: 2256.19,
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
      fl: 91.02,
      glass: "BSC7 (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Positive crown member of the fixed G1 achromat.",
    },
    {
      id: 4,
      name: "L3",
      label: "G1 flint",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 32.2,
      fl: -183.85,
      glass: "E-FD5 (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Flint member of the fixed positive G1 cemented doublet.",
    },
    {
      id: 5,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      fl: 108.715,
      glass: "Reflective surface (substrate unprescribed)",
      apd: false,
      fromSurface: "M1",
      toSurface: "M1B",
      role: "Spherical annular primary with a clear central opening for G1 and the post-secondary beam.",
    },
    {
      id: 6,
      name: "L4",
      label: "G2 doublet 1 front",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.3,
      fl: -123.93,
      glass: "LAC10 (HOYA, legacy)",
      apd: false,
      cemented: "D2",
      role: "Negative meniscus in the first, net-positive component of movable G2.",
    },
    {
      id: 7,
      name: "L5",
      label: "G2 doublet 1 rear",
      type: "Biconvex Positive",
      nd: 1.728,
      vd: 26.1,
      fl: 55.71,
      glass: "Unmatched (dense flint 728/261; no official HOYA or SUMITA catalog match)",
      apd: false,
      cemented: "D2",
      role: "Strong positive, high-dispersion member; L4+L5 has net focal length +101.77 mm in air.",
    },
    {
      id: 8,
      name: "L6",
      label: "G2 doublet 2 front",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.3,
      fl: -36.73,
      glass: "NBFD10 (HOYA, legacy)",
      apd: false,
      cemented: "D3",
      role: "Strong negative member of the second G2 doublet.",
    },
    {
      id: 9,
      name: "L7",
      label: "G2 doublet 2 rear",
      type: "Positive Meniscus",
      nd: 1.517,
      vd: 64.2,
      fl: 90.33,
      glass: "BSC7 (HOYA)",
      apd: false,
      cemented: "D3",
      role: "Crown partner; L6+L7 has net focal length -60.69 mm in air.",
    },
    {
      id: 10,
      name: "L8",
      label: "G2 rear singlet",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.3,
      fl: -73.36,
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
    { label: "STO", R: 1e15, d: 3.0, nd: 1.0, elemId: 0, sd: 48.6 },
    {
      label: "M2",
      R: -143.54,
      d: 0.25,
      nd: 1.0,
      elemId: 1,
      sd: 27.5,
      interaction: {
        type: "reflect",
        incidentSide: "rear",
        inactiveSide: "block",
        mirrorKind: "first-surface",
      },
    },
    { label: "M2B", R: 1e15, d: 0.25, nd: 1.0, elemId: 0, sd: 27.5 },
    { label: "1A", R: 1e15, d: 36.75, nd: 1.491, elemId: 2, sd: 51.0 },
    { label: "2", R: -1107.79, d: 16.25, nd: 1.0, elemId: 0, sd: 51.0 },
    { label: "3", R: 634.3, d: 6.88, nd: 1.517, elemId: 3, sd: 23.7 },
    { label: "4", R: -50.64, d: 2.3, nd: 1.673, elemId: 4, sd: 23.7 },
    { label: "5", R: -87.29, d: 1.87, nd: 1.0, elemId: 0, sd: 23.7 },
    {
      label: "M1",
      R: -217.43,
      d: 0.5,
      nd: 1.0,
      elemId: 5,
      sd: 51.0,
      innerSd: 24.0,
      interaction: {
        type: "reflect",
        incidentSide: "front",
        inactiveSide: "block",
        mirrorKind: "first-surface",
      },
    },
    { label: "M1B", R: 1e15, d: 1.88, nd: 1.0, elemId: 0, sd: 51.0, innerSd: 24.0 },
    { label: "6", R: 116.03, d: 2.2, nd: 1.72, elemId: 6, sd: 22.5 },
    { label: "7", R: 50.04, d: 5.17, nd: 1.728, elemId: 7, sd: 18.0 },
    { label: "8", R: -204.6, d: 0.72, nd: 1.0, elemId: 0, sd: 19.4 },
    { label: "9", R: -800.99, d: 2.2, nd: 1.834, elemId: 8, sd: 20.0 },
    { label: "10", R: 31.89, d: 3.5, nd: 1.517, elemId: 9, sd: 16.0 },
    { label: "11", R: 96.8, d: 23.08, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "12", R: -44.48, d: 1.92, nd: 1.72, elemId: 10, sd: 16.5 },
    { label: "13", R: -286.84, d: 92.403458, nd: 1.0, elemId: 0, sd: 16.5 },
  ],

  asph: {
    "1A": {
      K: 0.01,
      A4: -2.89e-8,
      A6: 3.65e-13,
      A8: -5.79e-16,
      A10: 9.13e-20,
      A12: 0,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],

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

  closeFocusM: 3.0,
  focusDescription:
    "Internal focus by axial translation of negative group G2; Table IV gives no close-focus spacing state, so the data file retains the single published configuration.",

  nominalFno: 4.5,
  fstopSeries: [4.5],
  maxFstop: 4.5,

  scFill: 0.61,
  yScFill: 0.68,
  rayLeadFrac: 0.16,
} satisfies LensDataInput;

export default LENS_DATA;
