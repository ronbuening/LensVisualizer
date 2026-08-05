// Root-level draft for later same-stem pairing and batch integration.
import type { LensDataInput } from "../../types/optics.js";

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
 * 3.20 mm before STO and 2.05 mm after STO. Physical stop SD 7.397685555 mm
 * yields the patent's effective 16.7 mm entrance-pupil diameter. nominalFno uses
 * the computed design value 6.059522086 rather than the rounded f/6 designation.
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
  key: "voigtlander-dynar-f6-normalized-fd100",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER DYNAR 100mm f/6",
  subtitle: "US 765,006 A — sole worked example; unscaled normalized fD=100 prescription",
  specs: [
    "5 ELEMENTS / 3 GROUPS",
    "PATENT NORMALIZATION fD = 100",
    "COMPUTED EFL 101.194 mm",
    "MODELED f/6.060",
    "ALL-SPHERICAL",
  ],

  focalLengthDesign: 101.19401882931234,
  apertureMarketing: 6,
  apertureDesign: 6.059522085587566,
  patentNumber: "US 765,006 A",
  patentAuthors: ["Carl August Hans Harting"],
  patentAssignees: [],
  patentYear: 1904,
  elementCount: 5,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front crown",
      type: "Biconvex Positive",
      nd: 1.6133,
      fl: 30.893550021374857,
      glass: "Unmatched (vintage heaviest baryta crown; patent nD=1.61330, nG′=1.62723)",
      cemented: "D1",
      role: "Front positive component of the first cemented doublet.",
    },
    {
      id: 2,
      name: "L2",
      label: "Front flint",
      type: "Negative Meniscus",
      nd: 1.5698,
      fl: -195.3272859075487,
      glass: "Unmatched (vintage light baryta flint; patent nD=1.56980, nG′=1.58410)",
      cemented: "D1",
      role: "Weak negative partner in the first cemented doublet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Central singlet",
      type: "Biconcave Negative",
      nd: 1.60611,
      fl: -26.31283985368367,
      glass: "Unmatched (vintage heavy silicate flint; patent nD=1.60611, nG′=1.62424)",
      role: "Separate central negative group between the two positive cemented doublets.",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear silicate",
      type: "Biconcave Negative",
      nd: 1.5378,
      fl: -35.6041317339323,
      glass: "Unmatched (vintage silicate glass; patent nD=1.53780, nG′=1.55143)",
      cemented: "D2",
      role: "Negative front component of the rear cemented doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Rear crown",
      type: "Biconvex Positive",
      nd: 1.6133,
      fl: 22.991920980403233,
      glass: "Unmatched (vintage heavy baryta crown; patent nD=1.61330, nG′=1.62723)",
      cemented: "D2",
      role: "Positive rear component of the rear cemented doublet.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 25.84, d: 4.17, nd: 1.6133, elemId: 1, sd: 10.0 },
    { label: "2", R: -66.67, d: 0.42, nd: 1.5698, elemId: 2, sd: 10.0 },
    { label: "3", R: -166.65, d: 2.17, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "4", R: -41.71, d: 0.42, nd: 1.60611, elemId: 3, sd: 10.0 },
    { label: "5", R: 25.92, d: 3.2, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "STO", R: 1e15, d: 2.05, nd: 1.0, elemId: 0, sd: 7.397685554637342 },
    { label: "6", R: -65.26, d: 0.42, nd: 1.5378, elemId: 4, sd: 9.8 },
    { label: "7", R: 27.16, d: 3.33, nd: 1.6133, elemId: 5, sd: 9.0 },
    { label: "8", R: -27.96, d: 93.29898948930966, nd: 1.0, elemId: 0, sd: 9.0 },
  ],

  asph: {},
  groups: [
    { text: "FRONT DOUBLET", fromSurface: "1", toSurface: "3" },
    { text: "CENTRAL SINGLET", fromSurface: "4", toSurface: "5" },
    { text: "REAR DOUBLET", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  focusDescription:
    "Static published infinity prescription (NO_INTERNAL_RECONSTRUCTION); external camera/bed/bellows translation is outside the model.",
  closeFocusM: 1.0,
  nominalFno: 6.059522085587566,
  fstopSeries: [6.059522085587566, 8, 11, 16],
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
