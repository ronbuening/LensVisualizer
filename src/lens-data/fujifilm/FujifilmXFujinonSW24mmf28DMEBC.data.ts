import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM EBC X-FUJINON W 24mm f/2.8 DM                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,158,482, Example 1 / Table I (Doi / Sakai; Fuji Photo  ║
 * ║ Optical Co., Ltd.). 9 elements / 8 groups, all spherical.                  ║
 * ║                                                                            ║
 * ║ Scaling: the patent example is normalized to f = 1.001. All radii,         ║
 * ║ thicknesses, air spaces, stop placement, semi-diameters, and rear image    ║
 * ║ spacing are scaled by s = 24 / 1.001 = 23.9760239760. The scaled paraxial ║
 * ║ EFL from the transcribed prescription is 24.0030 mm; this residual is      ║
 * ║ retained rather than forcing the design to exactly 24.000 mm.              ║
 * ║                                                                            ║
 * ║ Stop: the patent drawing places the iris in d11 but does not dimension it. ║
 * ║ The stop is modeled 40% of the way from r11 to r12, splitting d11 into    ║
 * ║ 1.285115 mm + 1.927672 mm. Its 6.309601 mm semi-diameter is back-solved   ║
 * ║ from the patent F/2.8 through the front group; this is a modeling          ║
 * ║ inference, not a published stop diameter.                                  ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent publishes only an approximate 32 mm effective   ║
 * ║ diameter for L1. L1 front is therefore anchored at 16.0 mm, while r2 is   ║
 * ║ reduced to 15.4 mm to satisfy the current actual-rim-slope limit. The      ║
 * ║ remaining apertures are derived from exact spherical ray envelopes, the    ║
 * ║ patent optical section, edge-thickness and cross-gap clearance checks.     ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The manufacturer-published       ║
 * ║ minimum focus distance is 0.25 m, but the patent gives no finite-conjugate ║
 * ║ spacing table or internal focus kinematics. No focus var is invented.      ║
 * ║                                                                            ║
 * ║ Glass: Table I publishes nd and νd only. Vendor identity and line indices   ║
 * ║ are underdetermined, so elements use vendor-neutral six-digit coordinate   ║
 * ║ classes. nC, nF, ng, and dPgF are intentionally omitted.                   ║
 * ║                                                                            ║
 * ║ Product naming: the fixed job card says “X-Fujinon-SW”, but Fuji-authored  ║
 * ║ system literature designates the 24mm f/2.8 as EBC X-FUJINON W; SW is      ║
 * ║ used for the 19mm f/3.5. The output stem remains fixed by the job card.     ║
 * ║                                                                            ║
 * ║ Mount taxonomy: lensMounts is intentionally omitted. The current           ║
 * ║ “fujifilm-x” id is the modern APS-C mirrorless mount, not the historical   ║
 * ║ Fujica-X bayonet used by this lens.                                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-x-fujinon-w-24mm-f28-dm-ebc",
  maker: "Fujifilm",
  name: "FUJIFILM EBC X-FUJINON W 24mm f/2.8 DM",
  subtitle: "US 4,158,482 — Example 1 / Table I; production correlation to EBC X-FUJINON W 24mm f/2.8 DM",
  specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 24.003 mm", "F/2.8", "2ω = 84°", "ALL-SPHERICAL"],

  focalLengthMarketing: 24,
  focalLengthDesign: 24.003005,
  apertureMarketing: 2.8,
  apertureDesign: 2.800000054,
  imageFormat: "135-full-frame",
  patentNumber: "US 4,158,482",
  patentAuthors: ["Yoshikazu Doi", "Yutaka Sakai"],
  patentAssignees: ["Fuji Photo Optical Co., Ltd."],
  patentYear: 1979,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6228,
      vd: 56.9,
      indexReference: "d",
      fl: -49.9632,
      glass: "S-BSM10 (623569 crown coordinate; catalog equivalent, vendor undetermined)",
      role: "Front negative meniscus of the retrofocus front assembly.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 59.0,
      indexReference: "d",
      fl: 128.8279,
      glass: "518590 crown coordinate class; vendor undetermined",
      role: "Positive lens within the front assembly, moderating the strong negative front-group power.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.1,
      indexReference: "d",
      fl: -33.0644,
      glass: "623581/582 crown coordinate class; vendor undetermined",
      role: "Negative meniscus completing the front negative assembly.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.68273,
      vd: 44.5,
      indexReference: "d",
      fl: -34.3316,
      glass: "BAF22 (683445 barium-flint coordinate; catalog equivalent, vendor undetermined)",
      role: "Negative member of the cemented L4-L5 positive doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      fl: 26.9812,
      glass: "699301 dense-flint coordinate class; vendor undetermined",
      role: "Positive member of the cemented L4-L5 doublet; νd contrast satisfies the patent chromatic condition.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.2,
      indexReference: "d",
      fl: 20.8164,
      glass: "J-LAK01 (640602 lanthanum-crown coordinate; catalog equivalent, vendor undetermined)",
      role: "Strong positive lens immediately before the inferred aperture stop.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.5,
      indexReference: "d",
      fl: -16.339,
      glass: "762265/266 dense-flint coordinate class; vendor undetermined",
      role: "Negative rear-group element following the stop.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Positive Meniscus (convex to rear)",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 48.2953,
      glass: "620603 crown coordinate class; vendor undetermined",
      role: "Positive rear meniscus; Table I and Figure 1 support the rear-convex orientation.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Near-Plano-Convex Positive",
      nd: 1.6223,
      vd: 53.1,
      indexReference: "d",
      fl: 34.4071,
      glass: "622531-533 dense-crown coordinate class; vendor undetermined",
      role: "Final positive element ahead of the long back-focus image space.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 39.551329, d: 1.438561, nd: 1.6228, elemId: 1, sd: 16.0 },
    { label: "2", R: 17.172348, d: 6.713287, nd: 1.0, elemId: 0, sd: 15.4 },
    { label: "3", R: 355.20024, d: 3.116883, nd: 1.51823, elemId: 2, sd: 11.0 },
    { label: "4", R: -81.969231, d: 0.23976, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "5", R: 28.97047, d: 0.959041, nd: 1.62299, elemId: 3, sd: 9.3 },
    { label: "6", R: 11.885874, d: 5.514486, nd: 1.0, elemId: 0, sd: 9.3 },
    { label: "7", R: 1e15, d: 1.198801, nd: 1.68273, elemId: 4, sd: 8.3 },
    { label: "8", R: 23.439201, d: 3.596404, nd: 1.69895, elemId: 5, sd: 8.3 },
    { label: "9", R: -90.407353, d: 0.23976, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "10", R: 27.99968, d: 11.988012, nd: 1.64, elemId: 6, sd: 7.5 },
    { label: "11", R: -21.168911, d: 1.285115, nd: 1.0, elemId: 0, sd: 7.5 },
    // STO position inferred from Figure 1: 40% of patent d11 measured from r11 toward r12.
    { label: "STO", R: 1e15, d: 1.927672, nd: 1.0, elemId: 0, sd: 6.309601 },
    { label: "12", R: -19.852627, d: 3.596404, nd: 1.76182, elemId: 7, sd: 6.6 },
    { label: "13", R: 35.983696, d: 1.498501, nd: 1.0, elemId: 0, sd: 6.6 },
    { label: "14", R: -40.066813, d: 2.308891, nd: 1.62041, elemId: 8, sd: 6.8 },
    { label: "15", R: -17.521199, d: 0.23976, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "16", R: 2397.602398, d: 2.397602, nd: 1.6223, elemId: 9, sd: 8.5 },
    { label: "17", R: -21.596164, d: 36.611389, nd: 1.0, elemId: 0, sd: 8.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.25,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: infinity prescription only; manufacturer MFD is 0.25 m, but patent focus kinematics are unpublished.",

  nominalFno: 2.800000054,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
