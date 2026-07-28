// This import is correct for a root-level draft. generate:metadata will rewrite it after organization.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PENTAX HD D FA645 35mm f/3.5 AL [IF]                                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2001/0007512 A1, Embodiment 4 (Takayuki Sensui / Asahi Kogaku Kogyo).              ║
 * ║  Unscaled 36.000133 mm d-line retrofocus prescription; 10 physical elements / 8 patent groups.       ║
 * ║  The authored elements array has 11 entries because the bonded synthetic-resin asphere is modeled    ║
 * ║  as a separate optical medium while elementCount retains the patent's 10 physical elements.          ║
 * ║  Focus status: PUBLISHED. G2 (surfaces 13–19A, including STO) moves 7.810 mm objectward; the          ║
 * ║  endpoint gaps are published, and linear interpolation reproduces the x=-1/40 row within 0.003 mm.  ║
 * ║                                                                                                      ║
 * ║  PRODUCT-CORRELATION CAVEAT: the patent is a plausible FA645-lineage design, not a confirmed exact   ║
 * ║  2015 HD production formula. The patent has 10 elements / 8 groups and m=0.200 at minimum distance;  ║
 * ║  Ricoh lists the production lens as 10 elements / 7 groups and 0.25x. Ricoh also states that the      ║
 * ║  2015 HD revision introduced a newly designed glass-molded asphere.                                   ║
 * ║                                                                                                      ║
 * ║  NO SCALING: all radii, spacings, image coordinates, K values, and asphere coefficients are the raw   ║
 * ║  Embodiment 4 values. Marketing values remain separate from the computed design values.              ║
 * ║                                                                                                      ║
 * ║  SEMI-DIAMETERS: inferred rather than published. Figure 13 sets the strong front-to-rear taper; the   ║
 * ║  ray envelope and geometry limits set the minimum clear apertures. Surface 5A is capped below its     ║
 * ║  K>0 conic and rim-slope limits. The final SDs were validated for edge thickness, actual rim slope,  ║
 * ║  cross-gap intrusion, and the authored infinity/close ray states. The physical stop SD 10.119123 mm  ║
 * ║  is inferred from the published f/3.6.                                                               ║
 * ║                                                                                                      ║
 * ║  No cover glass, filter, inactive dummy/flare-cutter plane, blocker, or mechanical part is included. ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-hd-d-fa645-35f35-al-if",
  maker: "Pentax",
  name: "PENTAX HD D FA645 35mm f/3.5 AL [IF]",
  subtitle:
    "US 2001/0007512 A1 Embodiment 4 — plausible FA645-lineage correlation; not confirmed as the exact 2015 HD formula",
  specs: [
    "10 PHYSICAL ELEMENTS / 8 PATENT GROUPS",
    "PATENT DESIGN f = 36.000 mm",
    "MODELED f/3.6",
    "2ω = 89.6° AT y = 34.85 mm",
    "2 ASPHERICAL SURFACES",
    "PUBLISHED REAR-FOCUS ENDPOINT m = 0.200",
  ],
  focalLengthMarketing: 35,
  focalLengthDesign: 36.000133,
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  lensMounts: ["pentax-645"],
  imageFormat: "645",
  patentNumber: "US 2001/0007512 A1",
  patentAuthors: ["Takayuki Sensui"],
  patentAssignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  patentYear: 2001,
  elementCount: 10,
  groupCount: 8,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 89.6,
    maxTraceFieldDeg: 44.8,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -55.10757,
      glass: "773496 — lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Front negative meniscus of the fixed negative group.",
    },
    {
      id: 2,
      name: "L2g",
      label: "Element 2 glass substrate",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: -56.961549,
      glass: "729547 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Glass substrate of the bonded hybrid asphere.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L2r",
      label: "Element 2 synthetic-resin layer",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.527,
      vd: 43.7,
      fl: -252.107126,
      glass: "Unmatched (synthetic resin; patent nd=1.52700, νd=43.7)",
      apd: false,
      role: "Bonded 0.400 mm resin layer carrying the image-side hybrid asphere 5A.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.5,
      fl: 68.226169,
      glass: "755275 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Positive element following the front negative pair.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.51742,
      vd: 52.4,
      fl: 52.347624,
      glass: "517524 — crown-flint class (vendor unresolved)",
      apd: false,
      role: "Positive front member of the first cemented pair.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -31.141651,
      glass: "804466 — lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Negative rear member of D1; the cemented pair is net negative in air.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 59,
      fl: 59.735483,
      glass: "518590 — crown class (vendor unresolved)",
      apd: false,
      role: "Final positive element of the fixed negative group G1.",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 46.87832,
      glass: "487702 — fluor-crown class (vendor unresolved)",
      apd: false,
      role: "Positive front member of the moving rear cemented pair.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -135.995313,
      glass: "847238 — special dense-flint class (vendor unresolved)",
      apd: false,
      role: "Negative rear member of D2; the cemented pair remains net positive in air.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -110.619878,
      glass: "847238 — special dense-flint class (vendor unresolved)",
      apd: false,
      role: "Negative meniscus behind the internal diaphragm.",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58636,
      vd: 60.9,
      fl: 108.520463,
      glass: "Unmatched (barium-crown vicinity; no exact public-catalog match)",
      apd: false,
      role: "Final positive element with aspherical image-side surface 19A.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 53.064, d: 2.2, nd: 1.7725, elemId: 1, sd: 26.8 },
    { label: "2", R: 23.194, d: 10.016, nd: 1, elemId: 0, sd: 20.8 },
    { label: "3", R: 59.563, d: 2, nd: 1.72916, elemId: 2, sd: 20.3 },
    { label: "4", R: 24.124, d: 0.4, nd: 1.527, elemId: 3, sd: 18.3 },
    { label: "5A", R: 20.3, d: 12.107, nd: 1, elemId: 0, sd: 13.4 },
    { label: "6", R: 53.743, d: 5.485, nd: 1.7552, elemId: 4, sd: 18.8 },
    { label: "7", R: -1193.312, d: 2.137, nd: 1, elemId: 0, sd: 18.8 },
    { label: "8", R: -192.777, d: 11, nd: 1.51742, elemId: 5, sd: 18.5 },
    { label: "9", R: -24.211, d: 2, nd: 1.804, elemId: 6, sd: 18.5 },
    { label: "10", R: -760.091, d: 0.165, nd: 1, elemId: 0, sd: 18.4 },
    { label: "11", R: -440.523, d: 8.739, nd: 1.51823, elemId: 7, sd: 17.5 },
    { label: "12", R: -29.12, d: 11.274, nd: 1, elemId: 0, sd: 18.7 },
    { label: "13", R: 35.438, d: 5.24, nd: 1.48749, elemId: 8, sd: 12.4 },
    { label: "14", R: -61.231, d: 1.5, nd: 1.84666, elemId: 9, sd: 12.4 },
    { label: "15", R: -132.245, d: 9.424, nd: 1, elemId: 0, sd: 12.4 },
    { label: "STO", R: 1e15, d: 12.318, nd: 1, elemId: 0, sd: 10.119123 },
    { label: "16", R: 97.265, d: 1.492, nd: 1.84666, elemId: 10, sd: 10.5 },
    { label: "17", R: 47.378, d: 0.949, nd: 1, elemId: 0, sd: 10.5 },
    { label: "18", R: 182.535, d: 2.752, nd: 1.58636, elemId: 11, sd: 10.2 },
    { label: "19A", R: -97.141, d: 57.8, nd: 1, elemId: 0, sd: 10.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "5A": {
      K: 1,
      A4: 3.06e-6,
      A6: 2.868e-9,
      A8: 1.268e-11,
      A10: 4.817e-16,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: 7.658e-6,
      A6: 9.964e-9,
      A8: 2.314e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published rear-focus movement ── */
  var: {
    "12": [11.274, 3.464],
    "19A": [57.8, 65.61],
  },
  varLabels: [
    ["12", "D12"],
    ["19A", "BF"],
  ],

  /* ── Visual annotations ── */
  groups: [
    { text: "G1 — FIXED NEGATIVE", fromSurface: "1", toSurface: "12" },
    { text: "G2 — MOVING POSITIVE", fromSurface: "13", toSurface: "19A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.336052,
  focusDescription:
    "PUBLISHED rear focus: G2 (13–19A, including STO) translates 7.810 mm objectward. " +
    "The patent endpoint is m=0.200 and solves to 0.336052 m object-to-image distance; the marketed " +
    "0.3 m / 0.25x values are not forced onto this prescription.",

  /* ── Aperture configuration ── */
  nominalFno: 3.6,
  fstopSeries: [3.6, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 9,

  /* ── Layout ── */
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
