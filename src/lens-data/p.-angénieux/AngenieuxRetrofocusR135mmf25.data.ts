import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — P. ANGÉNIEUX RETROFOCUS TYPE R1 35mm f/2.5                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: GB 673,358 A, Example I / Table I / Fig. 1 (Pierre Angénieux).   ║
 * ║  Six elements in five air-spaced groups; the final group is cemented.      ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes one fixed  ║
 * ║  infinity prescription and no focus movement table.                        ║
 * ║                                                                              ║
 * ║  SCALING: The patent is normalized to F=100. Every prescription length was ║
 * ║  scaled ×0.35 for the marketed 35mm lens. The traced EFL is 35.37154355mm; ║
 * ║  the marketed 35mm value remains separate. No aspheres are present.         ║
 * ║                                                                              ║
 * ║  BACK-FOCUS NORMALIZATION: Table I is labeled F=100, but its rounded rows   ║
 * ║  trace to EFL=101.06155299 and BFL=106.15136552. Renormalizing that trace   ║
 * ║  to exact EFL=100 gives BFL=105.03634902, only 0.05635 above the printed    ║
 * ║  104.98. Surface 11 uses the direct scaled trace, 37.15297793mm, so IMG is  ║
 * ║  at paraxial infinity focus; the printed direct-scaled BFL is 36.743mm.     ║
 * ║                                                                              ║
 * ║  STOP: Fig. 1 places the diaphragm in the R6–R7 air gap but does not give   ║
 * ║  its exact station. The gap is split at its midpoint. The stop SD is solved ║
 * ║  from the traced EFL and published f/2.5 through the modeled entrance pupil.║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: No clear apertures are tabulated. SDs were derived from    ║
 * ║  exact meridional marginal/chief-ray tracing at the published 65° field,    ║
 * ║  then constrained by edge thickness, spherical rim slope, cross-gap sag,   ║
 * ║  cemented-junction continuity, and representative off-axis containment.     ║
 * ║                                                                              ║
 * ║  PRODUCT METADATA: Angénieux identifies the 1950 R1 as a 35mm f/2.5 lens   ║
 * ║  for 24×36 reflex photography. Production mount variants are not asserted  ║
 * ║  because no complete manufacturer mount list was located. closeFocusM uses ║
 * ║  a representative Exakta production value (0.914m) only to satisfy catalog ║
 * ║  metadata; it does not create or imply a patent-derived focus model.        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "angenieux-retrofocus-r1-35mm-f25",
  maker: "P. Angénieux",
  name: "P. ANGÉNIEUX RETROFOCUS TYPE R1 35mm f/2.5",
  subtitle: "GB 673,358 A — Example I; patent-normalized F=100 prescription scaled ×0.35",
  specs: [
    "6 ELEMENTS / 5 GROUPS",
    "35mm MARKETING / 35.372mm DESIGN",
    "f/2.5",
    "65° FULL FIELD",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.37154354644883,
  apertureMarketing: 2.5,
  apertureDesign: 2.5,
  imageFormat: "135-full-frame",
  patentNumber: "GB 673,358 A",
  patentAuthors: ["Pierre Angénieux"],
  patentAssignees: ["Pierre Angénieux"],
  patentYear: 1952,
  elementCount: 6,
  groupCount: 5,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 65,
    maxTraceFieldDeg: 32.5,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6145,
      vd: 59.8,
      fl: -91.9151823764743,
      glass: "BACD4 (HOYA catalog equivalent to patent 615598 barium-crown coordinate; production supplier unspecified)",
      apd: false,
      role: "Front negative meniscus that establishes the extended retrofocus back focal distance.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6243,
      vd: 46.8,
      fl: 50.6180200225228,
      glass: "E-BAF8 (Hikari catalog equivalent to patent 624468 barium-flint coordinate; production supplier unspecified)",
      apd: false,
      role: "First positive singlet of the rear convergent member.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6226,
      vd: 53,
      fl: 52.8053547465857,
      glass: "SSK2 (Sumita catalog equivalent to patent 623530 dense-crown coordinate; production supplier unspecified)",
      apd: false,
      role: "Positive meniscus ahead of the diaphragm that contributes most of the pre-stop convergence.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6141,
      vd: 37,
      fl: -18.486495037015317,
      glass: "F3 (Sumita catalog equivalent to patent 614370 flint coordinate; production supplier unspecified)",
      apd: false,
      role: "Post-stop negative singlet used to balance the strongly convergent rear member.",
    },
    {
      id: 5,
      name: "L5a",
      diagramLabel: "5a",
      label: "Element 5a",
      type: "Negative Meniscus",
      nd: 1.6287,
      vd: 35.3,
      fl: -23.90903936964075,
      glass: "F1 (Sumita catalog equivalent to patent 629353 flint coordinate; production supplier unspecified)",
      apd: false,
      role: "Negative front member of the final cemented positive doublet.",
      cemented: "L5",
    },
    {
      id: 6,
      name: "L5b",
      diagramLabel: "5b",
      label: "Element 5b",
      type: "Biconvex Positive",
      nd: 1.6391,
      vd: 55.8,
      fl: 13.365261488338636,
      glass: "K-SK18 (Sumita catalog equivalent to patent 639558 dense-crown coordinate; production supplier unspecified)",
      apd: false,
      role: "Strong positive rear member of the final cemented doublet.",
      cemented: "L5",
    },
  ],

  surfaces: [
    { label: "1", R: 63.168, d: 2.2155, nd: 1.6145, elemId: 1, sd: 25.5 },
    { label: "2", R: 29.421, d: 32.613, nd: 1, elemId: 0, sd: 25.5 },
    { label: "3", R: 40.04, d: 3.192, nd: 1.6243, elemId: 2, sd: 12 },
    { label: "4", R: -145.3375, d: 0.1785, nd: 1, elemId: 0, sd: 12 },
    { label: "5", R: 24.213, d: 6.027, nd: 1.6226, elemId: 3, sd: 10.5 },
    { label: "6", R: 83.1075, d: 1.596, nd: 1, elemId: 0, sd: 10.5 },
    // Diaphragm station inferred from Fig. 1; the published 3.192mm gap is split at its midpoint.
    { label: "STO", R: 1e15, d: 1.596, nd: 1, elemId: 0, sd: 7.562132008461613 },
    { label: "7", R: -32.718, d: 1.505, nd: 1.6141, elemId: 4, sd: 8.2 },
    { label: "8", R: 17.689, d: 3.5455, nd: 1, elemId: 0, sd: 8.2 },
    { label: "9", R: 141.547, d: 0.798, nd: 1.6287, elemId: 5, sd: 8.75 },
    // Cemented junction: the downstream L5b element owns the interface.
    { label: "10", R: 13.559, d: 5.67, nd: 1.6391, elemId: 6, sd: 8.75 },
    // Active image gap uses the independently traced BFL; patent-scaled BFL is 36.743mm.
    { label: "11", R: -19.32, d: 37.15297793331098, nd: 1, elemId: 0, sd: 8.75 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT NEGATIVE", fromSurface: "1", toSurface: "2" },
    { text: "REAR CONVERGENT", fromSurface: "3", toSurface: "11" },
  ],
  doublets: [{ text: "L5", fromSurface: "9", toSurface: "11" }],

  closeFocusM: 0.914,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — GB 673,358 A publishes one fixed infinity prescription and no moving-group or object-distance table. The 0.914m catalog value is representative Exakta production metadata only; no focus var is authored.",

  nominalFno: 2.5,
  fstopSeries: [2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16, 22],

  scFill: 0.58,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
