import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER-KREUZNACH TECHNIKA SUPER-ANGULON 75mm f/8        ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S42-023896 / US 2,781,695, Numerical Example 1         ║
 * ║  (Günter Klemt / Jos. Schneider & Co.).                                 ║
 * ║  Quasi-symmetric wide-angle objective: 6 elements / 4 groups,           ║
 * ║  two cemented doublets, all spherical.                                  ║
 * ║  Focus: unit movement by the view-camera standard and bellows.           ║
 * ║                                                                            ║
 * ║  NOTE ON IDENTIFICATION AND SCALING:                                     ║
 * ║    The patent example is normalized to f′ = 100. Schneider's published  ║
 * ║    production data give an effective focal length of 76.5 mm for the     ║
 * ║    nominal 75 mm lens, so every patent R and d is scaled ×0.765.          ║
 * ║    The resulting paraxial EFL is 76.5087 mm. The scaled patent BFD is     ║
 * ║    56.1528 mm, 0.6528 mm longer than Schneider's published 55.5 mm;      ║
 * ║    this file therefore models the patent family at production scale,     ║
 * ║    not a proven factory prescription.                                    ║
 * ║                                                                            ║
 * ║  NOTE ON STOP POSITION:                                                   ║
 * ║    The patent specifies d5 as the diaphragm space. The numerical table    ║
 * ║    does not divide that gap; the STO plane is placed at its midpoint,     ║
 * ║    as indicated approximately by Fig. 1.                                  ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                  ║
 * ║    The patent omits clear apertures. SDs follow the relative rim heights  ║
 * ║    in Fig. 1, with exact-trace and geometry checks used as constraints.   ║
 * ║    The stepped inner-doublet profile is intentional: the stop-facing      ║
 * ║    faces are visibly much smaller than the outer menisci.                 ║
 * ║                                                                            ║
 * ║  NOTE ON FOCUS RANGE:                                                     ║
 * ║    A view-camera lens has no lens-intrinsic minimum focus distance.       ║
 * ║    The 0.75 m endpoint is a declared visualization reference measured    ║
 * ║    from object to image plane; its BFD was solved paraxially.              ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "schneider-technika-super-angulon-75mm-f8",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH TECHNIKA SUPER-ANGULON 75mm f/8",
  subtitle: "JP S42-023896 EXAMPLE 1 — JOS. SCHNEIDER & CO. / GÜNTER KLEMT",
  specs: ["6 ELEMENTS / 4 GROUPS", "f = 76.51 mm (75 mm nominal)", "F/8", "2ω = 100° AT F/22", "ALL-SPHERICAL"],

  focalLengthMarketing: 75,
  focalLengthDesign: 76.5087,
  apertureMarketing: 8,
  apertureDesign: 8,
  imageFormat: "4x5",
  patentNumber: "JP S42-023896",
  patentAuthors: ["Günter Klemt"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1967,
  elementCount: 6,
  groupCount: 4,

  // Schneider publishes 100° coverage stopped to f/22; full-aperture coverage is 92°.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 100,
    maxTraceFieldDeg: 50,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.7,
      fl: -43.6173,
      glass: "FK3 class (465/657; probable historical Schott FK3)",
      role: "Front negative meniscus and field-expanding outer component.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7174,
      vd: 29.5,
      fl: -55.4303,
      glass: "SF1 (Schott, legacy dense flint; 717/295)",
      cemented: "D1",
      role: "High-dispersion negative member of the front cemented doublet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5601,
      vd: 47,
      fl: 19.3353,
      glass: "Unmatched (560/470 light-flint position; probable historical Schott LLF3)",
      cemented: "D1",
      role: "Positive member of the front cemented doublet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.5827,
      vd: 46.5,
      fl: 18.485,
      glass: "BAF3 class (583/465; modern Schott N-BAF3 / Hikari J-BAF3 equivalents)",
      cemented: "D2",
      role: "Positive member of the rear cemented doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7174,
      vd: 29.5,
      fl: -48.7083,
      glass: "SF1 (Schott, legacy dense flint; 717/295)",
      cemented: "D2",
      role: "High-dispersion negative member of the rear cemented doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.7,
      fl: -41.741,
      glass: "FK3 class (465/657; probable historical Schott FK3)",
      role: "Rear negative meniscus and outer field component.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 140.52285, d: 1.66005, nd: 1.4645, elemId: 1, sd: 19.75 },
    { label: "2", R: 17.6409, d: 11.6433, nd: 1, elemId: 0, sd: 15.8 },
    { label: "3", R: 19.56105, d: 8.5221, nd: 1.7174, elemId: 2, sd: 10.85 },
    { label: "4", R: 10.7253, d: 8.39205, nd: 1.5601, elemId: 3, sd: 9.55 },
    { label: "5", R: 800.1441, d: 0.983025, nd: 1, elemId: 0, sd: 5.75 },
    // STO position inferred from Fig. 1: midpoint of the patent's undivided d5 diaphragm space.
    { label: "STO", R: 1e15, d: 0.983025, nd: 1, elemId: 0, sd: 5.288623 },
    { label: "6", R: 1e15, d: 7.7877, nd: 1.5827, elemId: 4, sd: 5.75 },
    { label: "7", R: -10.7712, d: 8.2926, nd: 1.7174, elemId: 5, sd: 9.55 },
    { label: "8", R: -20.5785, d: 11.6433, nd: 1, elemId: 0, sd: 10.85 },
    { label: "9", R: -17.83215, d: 1.66005, nd: 1.4645, elemId: 6, sd: 15.8 },
    { label: "10", R: -228.68145, d: 56.152788, nd: 1, elemId: 0, sd: 19.75 },
  ],

  asph: {},

  /* ── Unit-focus back-focus change ── */
  var: {
    "10": [56.152788, 66.57548],
  },
  varLabels: [["10", "BF"]],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 0.75,
  focusDescription:
    "Unit focus by camera standard/bellows; 0.75 m is a declared visualization endpoint, not a manufacturer MFD.",

  nominalFno: 8,
  fstopSeries: [8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.54,
  yScFill: 0.78,
} satisfies LensDataInput;

export default LENS_DATA;
