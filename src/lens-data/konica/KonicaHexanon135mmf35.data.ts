import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — KONICA HEXANON 135mm f/3.5
 *
 * Source: JP 1955-009472, Example 1, Tomokazu Kazamaki / Fumio Kondo.
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
 * The source gap is split 12.5 mm / 2.7 mm (16.875 / 3.645 mm after ×1.35 scaling); that split is an
 * authoring choice and preserves the published d6 total exactly. The stop radius is derived from the design
 * f-number. The former paraxial calibration gave an entrance-pupil diameter of 38.5699877174 mm and
 * f/3.500000 for the scaled EFL.
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
  schema: 2,
  key: "konica-hexanon-135mm-f35",
  maker: "Konica",
  name: "KONICA HEXANON 135mm f/3.5",
  subtitle: "JP 1955-009472 Example 1 — 1.35× scaled correlation to early Konica F/FS lens",

  catalog: {
    lensMounts: ["konica-f"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 4 GROUPS", "f = 134.995mm DESIGN", "F/3.5", "2ω = 17°40′", "ALL-SPHERICAL"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { marketing: 135, design: 134.99495701107043 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "JP 1955-009472 B",
    patentYear: 1955,
    authors: ["Tomokazu Kazamaki", "Fumio Kondo"],
    assignees: [],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.0,
      focalLengthMm: 125.36381754512996,
      glass: "516640 crown class; S-BSL7 catalog-equivalent coefficient proxy (production supplier unspecified)",
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
      focalLengthMm: 91.54069345394589,
      glass: "516640 crown class; S-BSL7 catalog-equivalent coefficient proxy (production supplier unspecified)",
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
      focalLengthMm: -38.87997034359871,
      glass: "673322 dense-flint class; H-ZF2 catalog-equivalent coefficient proxy (production supplier unspecified)",
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
      focalLengthMm: 118.38277391944798,
      glass: "648339 flint class; E-FD2 catalog-equivalent coefficient proxy (production supplier unspecified)",
      apd: false,
      role: "Rear positive meniscus following the aperture stop.",
    },
  ],

  surfaces: [
    { label: "1", R: 45.9, d: 5.4, sd: 22.5, medium: 1 },
    { label: "2", R: 151.47, d: 0.27, sd: 22.5 },
    { label: "3", R: 36.2475, d: 8.1, sd: 21.5, medium: 2 },
    { label: "4", R: 143.667, d: 5.4, sd: 21.5 },
    { label: "5", R: 378.0, d: 9.855, sd: 16.0, medium: 3 },
    { label: "6", R: 24.2055, d: 16.875, sd: 16.0 },
    { label: "STO", R: "flat", d: 3.645 },
    { label: "7", R: 60.75, d: 5.4, sd: 12.5, medium: 4 },
    { label: "8", R: 282.2715, d: 73.40551451072612, sd: 12.5 },
  ],

  focus: {
    closeFocusM: 1.8288,
    description:
      "NO_INTERNAL_RECONSTRUCTION — Konica F/FS literature gives 6 ft (1.8288 m) closest focus, but JP 1955-009472 Example 1 publishes no focus-spacing state; the modeled prescription remains at infinity.",
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16] },

  groups: [],
  doublets: [],

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
