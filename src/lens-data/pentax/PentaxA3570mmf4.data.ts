import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PENTAX SMC A ZOOM 35-70mm f/4                                 ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: US 4,812,022, Example 3 (Shigetada Sato / Asahi Kogaku).  ║
 * ║  Product metadata source: Pentax Lenses & Accessories A-series catalog.    ║
 * ║  Patent prescription: 7 elements / 7 groups, all spherical, d-line.        ║
 * ║  Patent design range: 36-68.5 mm, f/4.1, 2ω = 64.5°-34.7°.                 ║
 * ║  Production metadata: 35-70 mm f/4, Pentax K/KA, 135 format, MFD 0.25 m.   ║
 * ║                                                                            ║
 * ║  SCALE: none. Patent dimensions are preserved at Example 3 scale.          ║
 * ║                                                                            ║
 * ║  ZOOM MODEL:                                                               ║
 * ║    - The patent publishes only d6 = 41.111 mm (wide) and 3.821 mm (tele).  ║
 * ║    - The required rear image-space distances are independently computed    ║
 * ║      infinity-focus BFDs, not patent table rows: 42.386856744 mm wide and  ║
 * ║      62.019383234 mm tele.                                                 ║
 * ║    - Only those two endpoint states are defined; no intermediate cam law   ║
 * ║      or reversal is inferred.                                              ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION.                                 ║
 * ║    The production 0.25 m MFD is retained as metadata only. The patent      ║
 * ║    publishes no close-focus spacing table, object distance, magnification, ║
 * ║    or focus cam law, so every authored focus pair is identical.            ║
 * ║                                                                            ║
 * ║  STOP MODEL (position inferred; iris traced from the patent f-number):     ║
 * ║    The patent states that the aperture lies in d6 and moves with the rear  ║
 * ║    group but gives neither coordinate nor diameter. The modeled STO sits   ║
 * ║    1.9105 mm objectward of r7, the midpoint of the minimum published d6 at ║
 * ║    68.5 mm, and rides with the rear group. Example 3 prints F number 1:4.1 ║
 * ║    for F = 36-68.5, and Figs. 10-12 are headed 1:4.1 at minimum, medium    ║
 * ║    and maximum focal length, so nominalFno is 4.1 at both stations. The    ║
 * ║    wide-open iris is traced per station from that f-number: 7.7842 mm      ║
 * ║    radius at 36 mm and 10.3442 mm at 68.5 mm. No single radius gives f/4.1 ║
 * ║    at both ends. The authored STO sd, 7.752338441 mm, is the paraxial      ║
 * ║    f/4.1 radius at 36 mm.                                                  ║
 * ║    The iris limits the axial beam at both stations, and both trace f/4.10. ║
 * ║    At 68.5 mm the f/4.1 marginal ray reaches 10.762 mm at surface 7 and    ║
 * ║    10.681 mm at surface 8 (L4, sd 10.8 mm), 10.201 mm at surface 9 and     ║
 * ║    9.698 mm at surface 10 (L5, sd 10.3 mm), 9.612 mm at surface 11 (L6     ║
 * ║    front, sd 9.7 mm), 7.731 mm at surface 12 (L6 rear, sd 9.4 mm), and     ║
 * ║    7.714 mm at surface 13 and 7.755 mm at surface 14 (L7, sd 7.8 mm), so   ║
 * ║    no rear-group rim cuts it.                                              ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS (inferred, not patent-listed):                             ║
 * ║    Front group (surfaces 1-6): inferred from exact spherical meridional    ║
 * ║    ray bundles at the patent endpoint fields, then constrained by edge     ║
 * ║    thickness, actual rim slope, the Fig. 9 silhouette, and the default     ║
 * ║    0.90 shared-band cross-gap rule.                                        ║
 * ║    Rear group (surfaces 7-14): sized to the stated beam. At 68.5 mm the    ║
 * ║    f/4.1 on-axis ray reaches 10.762, 10.681, 10.201, 9.698, 9.612, 7.731,  ║
 * ║    7.714 and 7.755 mm at surfaces 7 to 14. Rounded up to 0.1 mm, a ray     ║
 * ║    height is the smallest rim at that precision that passes the printed    ║
 * ║    f/4.1.                                                                  ║
 * ║    Square rims: Fig. 9 draws L4, L5 and L7 square-cut, one rim line        ║
 * ║    parallel to the axis joining the front and rear faces (L5's rear corner ║
 * ║    is cut by about 0.5 mm, little more than a drawn line width), so each   ║
 * ║    carries one value on both faces, the higher of its two rounded ray      ║
 * ║    heights: 10.8 mm (set by surface 7), 10.3 mm (set by surface 9) and     ║
 * ║    7.8 mm (surfaces 13 and 14 alike).                                      ║
 * ║    Fig. 9 draws L6 with a chamfer on its rear, so its two faces are sized  ║
 * ║    separately: surface 11 carries its rounded ray height, 9.7 mm, and      ║
 * ║    surface 12 carries 9.4 mm, inferred the same way as the front group.    ║
 * ║    Fig. 9 (sheet 5, the 36 mm section) is the check on those values, not   ║
 * ║    their source. Read as half the distance between the centres of each     ║
 * ║    element's upper and lower rim lines on the 300 dpi scan, at 15.25 px/mm ║
 * ║    (r7-r14 vertex span) and 15.17 px/mm (circles fitted to eight drawn     ║
 * ║    arcs), it draws L4 at 11.3 mm, L5 at 10.7 mm, L6 at 10.2 mm and L7 at   ║
 * ║    8.2 mm, each at least as large as that element's rims here. It ends     ║
 * ║    the r12 arc at a chamfer corner 8.4 mm from the axis; surface 12, at    ║
 * ║    9.4 mm, lies between that corner and L6's drawn outer rim. The patent   ║
 * ║    calls Fig. 9 a schematic view.                                          ║
 * ║    The rear rims pass the f/4.1 axial beam at both endpoints; at 68.5 mm   ║
 * ║    they stand outside its marginal ray by 0.04 mm (surface 7) to 0.12 mm   ║
 * ║    (surface 8) on L4, on the fronts of L5 and L6 and on L7, by 0.60 mm at  ║
 * ║    surface 10 and by 1.67 mm at surface 12. The format-corner chief ray is ║
 * ║    clear at both endpoints (32.2° at 36 mm, 17.4° at 68.5 mm, 21.65 mm     ║
 * ║    image height). The default 0.60-field fan passes whole at 36 mm; at     ║
 * ║    68.5 mm its lowest ray is cut at L7 (surface 13).                       ║
 * ║    The extreme wide-field outer-pupil ray is allowed to vignette at L2;    ║
 * ║    increasing L2 enough to pass that ray violates the d2 cross-gap rule.   ║
 * ║                                                                            ║
 * ║  GLASS: patent nd/νd only. Vendor identity is not unique; the `glass`      ║
 * ║    strings therefore use coordinate-class codes. nC/nF/ng/dPgF are omitted ║
 * ║    because the patent does not publish them. No APD/APO claim is modeled.  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-a-35-70f4",
  maker: "Pentax",
  name: "PENTAX SMC A ZOOM 35-70mm f/4",
  subtitle: "US 4,812,022 Example 3 — patent-scale 36-68.5mm f/4.1; production correlation to 35-70mm f/4",
  specs: [
    "7 ELEMENTS / 7 GROUPS",
    "35-70mm f/4 (MARKETED)",
    "36-68.5mm f/4.1 (PATENT)",
    "2ω = 64.5°-34.7°",
    "MFD 0.25 m",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [35, 70],
  focalLengthDesign: [36, 68.5],
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["pentax-k"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,812,022",
  patentAuthors: ["Shigetada Sato"],
  patentAssignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  patentYear: 1989,
  elementCount: 7,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (convex to object)",
      nd: 1.834,
      vd: 37.2,
      indexReference: "d",
      fl: -50.298759,
      glass: "834372 class (vendor unresolved)",
      apd: false,
      role: "Front-group negative meniscus; shares the front diverging power with L2.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      fl: -80.91124,
      glass: "806409 class (vendor unresolved)",
      apd: false,
      role: "Second negative element of the front diverging group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus (convex to object)",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: 59.199483,
      glass: "805254 class (vendor unresolved)",
      apd: false,
      role: "Positive front-group meniscus balancing the two negative front elements.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.7,
      indexReference: "d",
      fl: 41.324764,
      glass: "S-LAM2 (OHARA catalog equivalent for patent 744447; production supplier unspecified)",
      apd: false,
      role: "Leading positive element of the rear converging group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.65844,
      vd: 50.9,
      indexReference: "d",
      fl: 35.825718,
      glass: "658509 class (vendor unresolved)",
      apd: false,
      role: "Strong positive element in the rear converging group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -18.825967,
      glass: "805254 class (vendor unresolved)",
      apd: false,
      role: "Strong negative element used within the otherwise converging rear group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.58144,
      vd: 40.8,
      indexReference: "d",
      fl: 69.872603,
      glass: "581408 class (vendor unresolved)",
      apd: false,
      role: "Final positive element of the rear converging group.",
    },
  ],

  /* ── Surface prescription ──
   * The stop splits patent d6. At the base wide state:
   *   r6→STO = 41.111 - 1.9105 = 39.2005 mm
   *   STO→r7 = 1.9105 mm (fixed to the rear group)
   * Surface 14 d is the independently solved wide-end infinity BFD.
   */
  surfaces: [
    { label: "1", R: 93.72, d: 1.98, nd: 1.834, elemId: 1, sd: 21.5 },
    { label: "2", R: 28.7, d: 4.24, nd: 1, elemId: 0, sd: 21.5 },
    { label: "3", R: 69.12, d: 1.88, nd: 1.8061, elemId: 2, sd: 17.6 },
    { label: "4", R: 33.15, d: 2.95, nd: 1, elemId: 0, sd: 17.6 },
    { label: "5", R: 31.885, d: 5.37, nd: 1.80518, elemId: 3, sd: 18 },
    { label: "6", R: 89.072, d: 39.2005, nd: 1, elemId: 0, sd: 18 },
    { label: "STO", R: 1e15, d: 1.9105, nd: 1, elemId: 0, sd: 7.752338441 },
    { label: "7", R: 39.6, d: 3.5, nd: 1.744, elemId: 4, sd: 10.8 },
    { label: "8", R: -132.321, d: 0.1, nd: 1, elemId: 0, sd: 10.8 },
    { label: "9", R: 21.2, d: 4.04, nd: 1.65844, elemId: 5, sd: 10.3 },
    { label: "10", R: 193.485, d: 0.64, nd: 1, elemId: 0, sd: 10.3 },
    { label: "11", R: -206.849, d: 6.04, nd: 1.80518, elemId: 6, sd: 9.7 },
    { label: "12", R: 16.57, d: 6.7, nd: 1, elemId: 0, sd: 9.4 },
    { label: "13", R: -92.459, d: 2.23, nd: 1.58144, elemId: 7, sd: 7.8 },
    { label: "14", R: -28.475, d: 42.386856744, nd: 1, elemId: 0, sd: 7.8 },
  ],

  asph: {},

  /* ── Zoom / focus spacings ──
   * Every pair is [infinity, close]. Focus is intentionally not reconstructed,
   * so the two values in each pair are identical.
   */
  var: {
    "6": [
      [39.2005, 39.2005],
      [1.9105, 1.9105],
    ],
    "14": [
      [42.386856744, 42.386856744],
      [62.019383234, 62.019383234],
    ],
  },
  varLabels: [
    ["6", "D6 (ZOOM)"],
    ["14", "BF (ZOOM)"],
  ],

  zoomPositions: [36, 68.5],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "FRONT GROUP (-)", fromSurface: "1", toSurface: "6" },
    { text: "REAR GROUP (+)", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.25,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 3 publishes zoom-only infinity data. The production 0.25 m MFD is metadata only; no close-focus internal motion is modeled.",

  /* ── Aperture configuration ──
   * Patent F number 1:4.1 at both stations. The wide-open iris is traced per station from it: 7.7842 mm at 36 mm
   * and 10.3442 mm at 68.5 mm. The iris limits the axial beam at both stations, and both trace f/4.10.
   */
  nominalFno: 4.1,
  fstopSeries: [4.1, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout ── */
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
