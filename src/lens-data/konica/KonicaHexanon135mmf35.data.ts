import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — KONICA HEXANON 135mm f/3.5
 *
 * Source: JP1955-009472, Example 1, Tomokazu Kazamaki / Fumio Kondo.
 * The patent publishes an all-spherical 4-element / 4-group telephoto objective at F = 100 mm.
 * This production-correlated model is uniformly scaled ×1.35, giving EFL = 134.994957 mm.
 * All radii, thicknesses, inferred semi-diameters, stop coordinates, and rear image spacing are scaled;
 * nd and νd are unchanged. There are no aspheric coefficients to transform.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes no focus-spacing state. Konica F/FS
 * literature gives a 6 ft (1.8288 m) closest-focus specification, retained only as product metadata.
 * The optical prescription remains the infinity state and `var` is intentionally empty.
 *
 * STO MODEL — inferred, not patent-tabulated or clearly drawn:
 * The patent does not provide a numerical stop position, and Figure 1 does not clearly depict a diaphragm.
 * LensVisualizer requires one STO, so it is modeled inside source d6 = 15.2 mm between R6 and R7.
 * The source gap is split 12.5 mm / 2.7 mm (16.875 / 3.645 mm after ×1.35 scaling); that split is
 * an authoring choice and preserves the published d6 total exactly. STO sd = 11.2131895487 mm gives a
 * paraxial entrance-pupil diameter of 38.5699877174 mm and f/3.500000 for the scaled EFL.
 *
 * SEMI-DIAMETERS — modeled, not patent-tabulated:
 * The patent gives no clear apertures. Element SDs are derived from the wide-open on-axis marginal ray,
 * the chief/marginal bundle at 0.6 × the published 8°50′ half-field, the Fig. 1 diameter progression,
 * and mechanical clearance. Stage-4 verification checks edge thickness, actual spherical rim slope,
 * shared-gap sag intrusion, stop clearance, off-axis containment, and the absence of hidden geometry fixes.
 *
 * GLASS:
 * The patent publishes only d-line nd/νd and no vendor/type. Supplier-neutral coordinate classes retain
 * compatible catalog-equivalent curves; nC, nF, ng, and dPgF are not copied into the source prescription.
 */

const LENS_DATA = {
  key: "konica-hexanon-135mm-f35",
  maker: "Konica",
  name: "KONICA HEXANON 135mm f/3.5",
  subtitle: "JP1955-009472 Example 1 — 1.35× scaled correlation to early Konica F/FS lens",
  specs: [
    "4 ELEMENTS / 4 GROUPS",
    "f = 134.995mm DESIGN",
    "F/3.5",
    "2ω = 17°40′",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 135,
  focalLengthDesign: 134.99495701107043,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["konica-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1955-009472",
  patentAuthors: ["Tomokazu Kazamaki", "Fumio Kondo"],
  patentAssignees: ["Tomokazu Kazamaki", "Fumio Kondo"],
  patentYear: 1955,
  elementCount: 4,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.0,
      fl: 125.36381754512996,
      glass:
        "516640 crown class; S-BSL7 catalog-equivalent coefficient proxy (production supplier unspecified)",
      apd: false,
      role: "Strong front positive meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.0,
      fl: 91.54069345394589,
      glass:
        "516640 crown class; S-BSL7 catalog-equivalent coefficient proxy (production supplier unspecified)",
      apd: false,
      role: "Second positive meniscus in the front positive subsystem.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.2,
      fl: -38.87997034359871,
      glass:
        "673322 dense-flint class; H-ZF2 catalog-equivalent coefficient proxy (production supplier unspecified)",
      apd: false,
      role: "Strong negative meniscus forming the telephoto rear-negative contribution.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.64769,
      vd: 33.9,
      fl: 118.38277391944798,
      glass:
        "648339 flint class; E-FD2 catalog-equivalent coefficient proxy (production supplier unspecified)",
      apd: false,
      role: "Rear positive meniscus following the aperture stop.",
    },
  ],

  surfaces: [
    { label: "1", R: 45.9, d: 5.4, nd: 1.51633, elemId: 1, sd: 22.5 },
    { label: "2", R: 151.47, d: 0.27, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "3", R: 36.2475, d: 8.1, nd: 1.51633, elemId: 2, sd: 21.5 },
    { label: "4", R: 143.667, d: 5.4, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "5", R: 378.0, d: 9.855, nd: 1.6727, elemId: 3, sd: 16.0 },
    { label: "6", R: 24.2055, d: 16.875, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "STO", R: 1e15, d: 3.645, nd: 1.0, elemId: 0, sd: 11.213189548703372 },
    { label: "7", R: 60.75, d: 5.4, nd: 1.64769, elemId: 4, sd: 12.5 },
    { label: "8", R: 282.2715, d: 73.40551451072612, nd: 1.0, elemId: 0, sd: 12.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 1.8288,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — Konica F/FS literature gives 6 ft (1.8288 m) closest focus, but JP1955-009472 Example 1 publishes no focus-spacing state; the modeled prescription remains at infinity.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],

  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
