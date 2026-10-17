// Root-level draft for later same-stem pairing and batch integration.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — VOIGTLÄNDER DYNAR f/6 — NORMALIZED fD=100
 *
 * Source: US 765,006 A, Carl August Hans Harting, the patent's sole worked
 * numerical example (1904). The patent publishes five elements in three groups:
 * a cemented positive doublet, a separate negative singlet, and a cemented
 * positive doublet. All surfaces are spherical. The patent names no assignee.
 *
 * NORMALIZATION: The patent states fD = 100, but the printed prescription
 * computes to EFL = 101.194018829 mm. Source dimensions are preserved unscaled,
 * with one patent unit represented as one millimeter. This is a normalized
 * patent model, not a selected production focal length.
 *
 * APERTURE STOP: The patent locates the stop only within d5 = 5.25. The drawing
 * places it approximately 61% of the way from surface 5 to surface 6, modeled as
 * 3.20 mm before STO and 2.05 mm after STO. The stop radius is derived from the
 * design f-number. nominalFno uses the computed design value 6.059522086 from
 * the patent's effective 16.7 mm entrance-pupil diameter rather than the rounded
 * f/6 designation.
 *
 * FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: Only an infinity prescription is
 * published. No variable gap or finite-focus state is invented; closeFocusM =
 * 1.0 is only the schema-required UI placeholder. External bed, bellows, plate,
 * or whole-cell translation lies outside this optical model.
 *
 * SEMI-DIAMETERS: The patent publishes no clear apertures. SDs were inferred
 * from exact axial marginal rays, the configured off-axis sample set, and an
 * additional conservative ±0.83 pupil-fraction check at 60% of the smallest
 * normalized catalogued diagonal field. A 600 dpi figure audit then brought
 * the three groups toward the drawing's nearly equal heights, capped where the
 * rear positive element reaches its edge-thickness limit. Edge thickness,
 * actual rim slope, shared-gap intrusion, and render-trim proxies were checked.
 *
 * GLASS DATA: The patent gives nD and nG′ (Hγ, approximately 434.047 nm), not
 * standard νd or C/F/g-line data. All glasses remain explicitly Unmatched; νd,
 * nC, nF, ng, and dPgF are intentionally omitted.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "voigtlander-dynar-f6-normalized-fd100",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER DYNAR 100mm f/6",
  subtitle: "US 765,006 A — sole worked example; unscaled normalized fD=100 prescription",

  catalog: {
    specs: [
      "5 ELEMENTS / 3 GROUPS",
      "PATENT NORMALIZATION fD = 100",
      "COMPUTED EFL 101.194 mm",
      "MODELED f/6.060",
      "ALL-SPHERICAL",
    ],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { design: 101.19401882931234 },
    fNumber: { marketing: 6, design: 6.059522085587566 },
  },

  source: { patentNumber: "US 765,006 A", patentYear: 1904, authors: ["Carl August Hans Harting"], assignees: [] },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front crown",
      type: "Biconvex Positive",
      nd: 1.6133,
      focalLengthMm: 30.893550021374857,
      glass: "Unmatched (vintage heaviest baryta crown; patent nD=1.61330, nG′=1.62723)",
      role: "Front positive component of the first cemented doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Front flint",
      type: "Negative Meniscus",
      nd: 1.5698,
      focalLengthMm: -195.3272859075487,
      glass: "Unmatched (vintage light baryta flint; patent nD=1.56980, nG′=1.58410)",
      role: "Weak negative partner in the first cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Central singlet",
      type: "Biconcave Negative",
      nd: 1.60611,
      focalLengthMm: -26.31283985368367,
      glass: "Unmatched (vintage heavy silicate flint; patent nD=1.60611, nG′=1.62424)",
      role: "Separate central negative group between the two positive cemented doublets.",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear silicate",
      type: "Biconcave Negative",
      nd: 1.5378,
      focalLengthMm: -35.6041317339323,
      glass: "Unmatched (vintage silicate glass; patent nD=1.53780, nG′=1.55143)",
      role: "Negative front component of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Rear crown",
      type: "Biconvex Positive",
      nd: 1.6133,
      focalLengthMm: 22.991920980403233,
      glass: "Unmatched (vintage heavy baryta crown; patent nD=1.61330, nG′=1.62723)",
      role: "Positive rear component of the rear cemented doublet.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 25.84, d: 4.17, sd: 10.0, medium: 1 },
    { label: "2", R: -66.67, d: 0.42, sd: 10.0, medium: 2 },
    { label: "3", R: -166.65, d: 2.17, sd: 10.0 },
    { label: "4", R: -41.71, d: 0.42, sd: 10.0, medium: 3 },
    { label: "5", R: 25.92, d: 3.2, sd: 10.0 },
    { label: "STO", R: "flat", d: 2.05 },
    { label: "6", R: -65.26, d: 0.42, sd: 9.8, medium: 4 },
    { label: "7", R: 27.16, d: 3.33, sd: 9.0, medium: 5 },
    { label: "8", R: -27.96, d: 93.29898948930966, sd: 9.0 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Static published infinity prescription (NO_INTERNAL_RECONSTRUCTION); external camera/bed/bellows translation is outside the model.",
  },

  aperture: { nominalFNumber: 6.059522085587566, fStops: [6.059522085587566, 8, 11, 16] },

  groups: [
    { text: "FRONT DOUBLET", fromSurface: "1", toSurface: "3" },
    { text: "CENTRAL SINGLET", fromSurface: "4", toSurface: "5" },
    { text: "REAR DOUBLET", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
