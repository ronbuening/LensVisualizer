import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 28-90mm f/4-5.6 II USM.
 *
 * Source prescription: JP 2009-282554 A, Numerical Example 6.
 * Production correlation: author inference supported by the matching 10-element / 8-group construction,
 * four-group negative-lead architecture, one rear-group asphere, 135-format field, focal range, and timing.
 * Canon supplies the marketing identity, Canon EF mount, 28-90mm f/4-5.6 designation, September 2002 release,
 * five-blade diaphragm, micro-USM drive, 0.38 m closest focus, 0.30x maximum magnification at 90 mm,
 * and 58 mm filter diameter.
 *
 * Prescription treatment:
 * - No radius, thickness, refractive-index, Abbe-number, or asphere coefficient was corrected.
 * - Surface 12 is normalized to the required optically neutral "STO" plane.
 * - Patent surface 20 is an inactive flare cutter and is omitted.
 * - The patent's raw D19 values [0.00, 13.06, 36.80] mm terminate at the flare-cutter plane, not the image plane.
 *   The stored surface-19 gaps are the independently computed paraxial BFD values
 *   [38.719113072, 51.794644886, 75.537349273] mm, preserving the omitted fixed FC-to-IP distance.
 *
 * Scaling: none. Patent EFLs are 28.90 / 50.02 / 86.89 mm; computed EFLs from the stored prescription are
 * 28.904387667 / 50.014500526 / 86.899293947 mm. The marketed 28-90mm range is not a uniform scale of the design.
 * Asphere coefficients therefore remain unscaled; K remains 0.
 *
 * Aperture model: the patent does not publish a stop diameter. The stop radius is derived from each station's
 * nominal f-number. A single fixed stop fitted by minimizing the three-state f-number residual gives design
 * f-numbers of 3.846027780 / 4.451141943 / 5.878770585. Per project convention, nominalFno uses the marketed
 * f/4 wide endpoint and f/5.6 tele endpoint; the intermediate value remains the modeled 4.451141943.
 *
 * Focus model: CONSTRAINED_RECONSTRUCTION. The patent states that Group 1 focuses but publishes no finite-focus
 * spacing table. At each zoom state, Group 1 is translated objectward while Groups 2-4 and the image plane remain
 * fixed. D6 is increased by 4.555758879 / 4.425015168 / 4.611506721 mm to satisfy B = 0 at an assumed 0.38 m
 * image-plane-referenced object distance. The tele reconstruction gives |m| = 0.297530139 versus Canon's rounded
 * 0.30x specification. These close-focus spacings are computed, not patent-published.
 *
 * Semi-diameters: inferred, not patent-listed. They were constrained by exact spherical/aspherical meridional ray
 * tracing over all three zoom states and both focus endpoints, the patent's 21.6 mm design image height, Canon's
 * 58 mm filter thread, positive element edge thickness, actual rim slope, cemented-interface compatibility, and
 * the current 90% shared-band cross-gap rule and a minimum inferred element-edge thickness of about 0.12 mm. Surface
 * 2 is the binding front-group aperture: sd = 14.70 mm preserves
 * the D2 air-gap clearance and accepts normal full-field pupil vignetting rather than invalid element overlap. The
 * current 60% display field passes all sampled rays at every zoom/focus state; the full patent field clips six of 36
 * sampled marginal rays, principally in the front group. Surfaces 17A/18 are constrained by the 0.40 mm air gap.
 *
 * Glass annotations are catalog-derived equivalences, not patent-published melt names. OHARA names are used where
 * exact six-decimal nd matches and the catalog Abbe values reproduce the patent condition table. The S-TIH53 versus
 * optically identical S-TIH53W suffix is unresolved; S-TIH53 is retained as the canonical public entry. Element E9
 * remains an unmatched proprietary optical polymer, consistent with the patent's plastic-asphere disclosure.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28-90mm-f4-56-ii-usm",
  maker: "Canon",
  name: "CANON EF 28-90mm f/4-5.6 II USM",
  subtitle: "JP 2009-282554 A — Numerical Example 6; production correlation inferred",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "10 elements / 8 air-spaced groups",
      "28-90mm f/4-5.6",
      "Canon EF / 135 format",
      "4 moving zoom groups (- / + / - / +)",
      "1 aspherical surface",
      "Micro-USM; front-group focus",
    ],
    elementCount: 10,
    groupCount: 8,
    focalLengthMm: { marketing: [28, 90], design: [28.904387667, 86.899293947] },
    fNumber: { marketing: 4, design: 3.84602778 },
  },

  source: { patentNumber: "JP 2009-282554 A", patentYear: 2009, authors: ["Makoto Misaka"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Group 1 front negative meniscus",
      type: "Negative Meniscus, convex to object",
      nd: 1.622992,
      vd: 58.16,
      focalLengthMm: -59.434955,
      glass: "S-BSM15 (OHARA)",
      role: "Front negative collector; moderates wide-angle distortion and coma while limiting the front-group diameter.",
      dPgF: -0.0016,
      nC: 1.619739,
      nF: 1.63045,
      ng: 1.636296,
    },
    {
      id: 2,
      name: "E2",
      label: "Group 1 biconcave negative",
      type: "Biconcave Negative",
      nd: 1.622992,
      vd: 58.16,
      focalLengthMm: -46.69339,
      glass: "S-BSM15 (OHARA)",
      role: "Second negative member concentrating Group 1 power and shaping the negative-lead entrance geometry.",
      dPgF: -0.0016,
      nC: 1.619739,
      nF: 1.63045,
      ng: 1.636296,
    },
    {
      id: 3,
      name: "E3",
      label: "Group 1 positive meniscus",
      type: "Positive Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 76.59215,
      glass: "S-TIH53 (OHARA)",
      role: "High-dispersion positive member that balances Group 1 spherical and longitudinal chromatic aberration.",
      dPgF: 0.0175,
      nC: 1.836488,
      nF: 1.872096,
      ng: 1.894189,
    },
    {
      id: 4,
      name: "E4",
      label: "Group 2 front biconvex positive",
      type: "Biconvex Positive",
      nd: 1.701536,
      vd: 41.24,
      focalLengthMm: 60.21314,
      glass: "S-BAH27 (OHARA)",
      role: "Front positive singlet of the principal variator group.",
      dPgF: 0.0018,
      nC: 1.696503,
      nF: 1.713515,
      ng: 1.723323,
    },
    {
      id: 5,
      name: "E5",
      label: "Group 2 negative cemented member",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -41.769774,
      glass: "S-TIH53 (OHARA)",
      role: "Dispersive negative member of the Group 2 achromatizing doublet.",
      cemented: "J2",
      dPgF: 0.0175,
      nC: 1.836488,
      nF: 1.872096,
      ng: 1.894189,
    },
    {
      id: 6,
      name: "E6",
      label: "Group 2 positive cemented member",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.64,
      focalLengthMm: 22.061658,
      glass: "S-BSM14 (OHARA)",
      role: "Crown positive member providing most of the rear-doublet power and longitudinal color correction.",
      cemented: "J2",
      dPgF: -0.0019,
      nC: 1.600079,
      nF: 1.610024,
      ng: 1.615409,
    },
    {
      id: 7,
      name: "E7",
      label: "Group 3 negative cemented member",
      type: "Biconcave Negative",
      nd: 1.688931,
      vd: 31.07,
      focalLengthMm: -16.651422,
      glass: "S-TIM28 (OHARA)",
      role: "Strong negative member of the stop-coupled compensator group.",
      cemented: "J3",
      dPgF: 0.0092,
      nC: 1.682495,
      nF: 1.704665,
      ng: 1.717975,
    },
    {
      id: 8,
      name: "E8",
      label: "Group 3 positive cemented member",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 23.954582,
      glass: "S-TIH53 (OHARA)",
      role: "High-index positive partner controlling the net negative Group 3 power and cemented-interface coma.",
      cemented: "J3",
      dPgF: 0.0175,
      nC: 1.836488,
      nF: 1.872096,
      ng: 1.894189,
    },
    {
      id: 9,
      name: "E9",
      label: "Group 4 plastic negative asphere",
      type: "Negative Meniscus, concave to object (1× Asph)",
      nd: 1.58306,
      vd: 30.2,
      focalLengthMm: -277.806212,
      glass: "Unmatched (proprietary optical polymer; patent plastic-asphere class)",
      role: "Weak negative molded-plastic corrector; its rear asphere controls field curvature, distortion, and zoom-dependent spherical aberration.",
    },
    {
      id: 10,
      name: "E10",
      label: "Group 4 rear positive meniscus",
      type: "Positive Meniscus, concave to object",
      nd: 1.51633,
      vd: 64.14,
      focalLengthMm: 66.761785,
      glass: "S-BSL7 (OHARA)",
      role: "Rear positive relay and field-flattening member that completes the positive fourth group.",
      dPgF: -0.0024,
      nC: 1.513855,
      nF: 1.521905,
      ng: 1.526214,
    },
  ],

  surfaces: [
    { label: "1", R: 37.748, d: 1.8, sd: 17.2, medium: 1 },
    { label: "2", R: 18.35, d: 9.59, sd: 14.7 },
    { label: "3", R: -90.75, d: 1.6, sd: 15.2, medium: 2 },
    { label: "4", R: 43.103, d: 0.15, sd: 15.0 },
    { label: "5", R: 28.478, d: 2.62, sd: 14.0, medium: 3 },
    { label: "6", R: 48.635, sd: 14.0 },
    { label: "7", R: 50.008, d: 2.0, sd: 12.4, medium: 4 },
    { label: "8", R: -267.513, d: 0.1, sd: 12.4 },
    { label: "9", R: 26.915, d: 1.0, sd: 12.0, medium: 5 },
    { label: "10", R: 15.023, d: 5.26, sd: 10.78, medium: 6 },
    { label: "11", R: -101.063, sd: 10.78 },
    { label: "STO", R: "flat", d: 1.8 },
    { label: "13", R: -68.91, d: 0.8, sd: 8.4, medium: 7 },
    { label: "14", R: 13.828, d: 2.64, sd: 8.6, medium: 8 },
    { label: "15", R: 39.654, sd: 8.6 },
    { label: "16", R: -90.382, d: 1.0, sd: 10.8, medium: 9 },
    {
      label: "17A",
      R: -205.313,
      d: 0.4,
      sd: 10.82,
      asphere: { K: 0, A4: 1.91256e-5, A6: 4.84357e-8, A8: -2.85693e-10, A10: 1.98932e-12, A12: 0, A14: 0 },
    },
    { label: "18", R: -190.913, d: 2.42, sd: 10.82, medium: 10 },
    { label: "19", R: -29.325, sd: 11.3 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 28.9, nominalFNumber: 4, label: "28.90 mm" },
      { focalLengthMm: 50.02, nominalFNumber: 4.451141943 },
      { focalLengthMm: 86.89, nominalFNumber: 5.6, label: "86.89 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.38,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent identifies Group 1 focusing but gives no finite-focus table. D6 close-focus values are independently solved for a 0.38 m image-plane-referenced object distance while Groups 2-4 and the image plane remain fixed; the result is not patent-published.",
  },

  gaps: {
    "6": {
      label: "D6 / Focus",
      values: [
        [34.38, 38.935758879],
        [12.71, 17.135015168],
        [1.09, 5.701506721],
      ],
    },
    "11": {
      label: "D11",
      values: [
        [2.0, 2.0],
        [6.87, 6.87],
        [12.46, 12.46],
      ],
    },
    "15": {
      label: "D15",
      values: [
        [14.09, 14.09],
        [9.21, 9.21],
        [3.62, 3.62],
      ],
    },
    "19": {
      label: "BF",
      values: [
        [38.719113072, 38.719113072],
        [51.794644886, 51.794644886],
        [75.537349273, 75.537349273],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 5 },

  groups: [
    { text: "L1 (-)", fromSurface: "1", toSurface: "6" },
    { text: "L2 (+)", fromSurface: "7", toSurface: "11" },
    { text: "STO + L3 (-)", fromSurface: "STO", toSurface: "15" },
    { text: "L4 (+)", fromSurface: "16", toSurface: "19" },
  ],
  doublets: [
    { text: "J2", fromSurface: "9", toSurface: "11" },
    { text: "J3", fromSurface: "13", toSurface: "15" },
  ],

  layout: { yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
