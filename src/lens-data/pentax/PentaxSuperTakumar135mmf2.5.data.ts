import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — PENTAX SUPER-TAKUMAR 135mm f/2.5                            ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 3,459,469, Example 1 (Yasuo Takahashi / Asahi Kogaku).  ║
 * ║ Five elements in four groups; all surfaces are spherical or plane.       ║
 * ║                                                                            ║
 * ║ Scaling: the patent worked example is stated at F = 1000 mm. Patent      ║
 * ║ radii, thicknesses, and air spaces are uniformly scaled by s = 0.135.    ║
 * ║ BFD is recomputed from the scaled prescription; inferred semi-diameters, ║
 * ║ stop geometry, and reconstructed focus travel are authored directly in   ║
 * ║ scaled coordinates. The rounded prescription gives EFL = 134.4983305 mm. ║
 * ║ There are no aspheres, so no A_p transformation is required.             ║
 * ║                                                                            ║
 * ║ Stop model: the patent states only that the diaphragm lies between L4    ║
 * ║ and L5 and explicitly says it is not shown. The authored STO is therefore║
 * ║ a modeling inference, placed 4.000 mm behind surface 7 in the scaled     ║
 * ║ 21.600 mm L4-L5 gap. Its semi-diameter is solved to 10.7191680 mm so     ║
 * ║ the inferred 27.000 mm entrance-beam semi-height gives modeled           ║
 * ║ f/2.4907098. The marketed aperture remains f/2.5. The near-L4 placement  ║
 * ║ keeps the modeled entrance beam compatible with the period 58 mm filter  ║
 * ║ envelope and leaves positive cross-gap clearance under the current       ║
 * ║ geometry rules.                                                            ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent publishes none. They are inferred from the     ║
 * ║ on-axis f/2.4907098 marginal ray, the 9° chief ray, the patent optical   ║
 * ║ section, and the period 58 mm filter envelope. Figure 1 proportions set   ║
 * ║ the larger L4/L5 outlines where the ray envelope alone understated the    ║
 * ║ rear-group diameter. The full 9° wide-open bundle is allowed to vignette  ║
 * ║ at element edges; the on-axis marginal ray and full-field chief ray both  ║
 * ║ clear every authored optical surface.                                     ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes no focus   ║
 * ║ spacings. All internal optical spacings are fixed and unit focus is       ║
 * ║ represented by changing only the final image-space gap. At the period     ║
 * ║ 1.5 m MFD, R9-to-image increases from 42.7172941 to 57.4634638 mm,       ║
 * ║ equivalent to 14.7461697 mm whole-lens forward travel with fixed film.   ║
 * ║                                                                            ║
 * ║ Glass discipline: the patent gives nd/vd coordinates but no vendor.      ║
 * ║ Vendor-neutral coordinate or glass-family classes are retained for all   ║
 * ║ five elements; no historical melt/vendor identity is asserted. No        ║
 * ║ nC/nF/ng/dPgF values are authored because the source does not publish    ║
 * ║ them and vendor-specific historical identity remains unresolved.         ║
 * ║                                                                            ║
 * ║ Product metadata: period Asahi Optical literature gives 135 mm f/2.5,    ║
 * ║ five elements, 18° angle of view, 1.5 m minimum focus, f/22 minimum      ║
 * ║ aperture, 58 mm filter thread, and the 42 mm threaded Pentax mount.      ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-super-takumar-135mm-f2-5",
  maker: "Pentax",
  name: "PENTAX SUPER-TAKUMAR 135mm f/2.5",
  subtitle: "US 3,459,469 Example 1 — scaled x0.135 production correlation",
  specs: [
    "5 ELEMENTS / 4 GROUPS",
    "135mm f/2.5 MARKETED",
    "f = 134.498 mm MODELED",
    "f/2.4907 MODELED",
    "18° FULL FIELD",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 135,
  focalLengthDesign: 134.4983305166044,
  apertureMarketing: 2.5,
  apertureDesign: 2.4907098243815624,
  lensMounts: ["m42"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,459,469",
  patentAuthors: ["Yasuo Takahashi"],
  patentAssignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  patentYear: 1969,
  elementCount: 5,
  groupCount: 4,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 18,
    maxTraceFieldDeg: 9,
  },

  /* ── Physical glass elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.7,
      indexReference: "d",
      fl: -145.682718,
      glass: "741278 class (vendor unspecified)",
      apd: false,
      role: "Negative front member of the cemented positive first group; chromatic over-correction partner.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.2,
      indexReference: "d",
      fl: 82.051163,
      glass: "640602 class (vendor unspecified)",
      apd: false,
      role: "Positive member cemented to L1; the L1+L2 pair is positive as a net front group.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.61025,
      vd: 56.5,
      indexReference: "d",
      fl: 108.206555,
      glass: "SK1 class (vendor unspecified)",
      apd: false,
      role: "Positive second group preceding the long telephoto separation to L4.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.72,
      vd: 43.7,
      indexReference: "d",
      fl: -37.5,
      glass: "720437 class (vendor unspecified)",
      apd: false,
      role: "Strong negative third group establishing the rear telephoto power distribution.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.7,
      indexReference: "d",
      fl: 79.792031,
      glass: "720437 class (vendor unspecified)",
      apd: false,
      role: "Positive rear group following the aperture stop.",
    },
  ],

  /* ── Surface prescription ──
   * Patent R1-R9 are labels 1-9 below. STO is the single inferred diaphragm
   * inserted inside the published R7-R8 air gap. All dimensions are scaled x0.135.
   */
  surfaces: [
    { label: "1", R: 81.0, d: 1.08, nd: 1.74077, elemId: 1, sd: 28.5 },
    { label: "2", R: 46.008, d: 9.72, nd: 1.64, elemId: 2, sd: 28.2 },
    { label: "3", R: 340.79994, d: 0.27, nd: 1.0, elemId: 0, sd: 27.0 },
    { label: "4", R: 46.71, d: 7.4304, nd: 1.61025, elemId: 3, sd: 27.0 },
    { label: "5", R: 149.999985, d: 29.9997, nd: 1.0, elemId: 0, sd: 24.8 },
    { label: "6", R: 1e15, d: 4.7304, nd: 1.72, elemId: 4, sd: 19.0 },
    { label: "7", R: 27.0, d: 4.0, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "STO", R: 1e15, d: 17.6, nd: 1.0, elemId: 0, sd: 10.719168040234297 },
    { label: "8", R: 54.635985, d: 5.4, nd: 1.72, elemId: 5, sd: 15.8 },
    { label: "9", R: 1069.1865, d: 42.71729406584955, nd: 1.0, elemId: 0, sd: 15.8 },
  ],

  asph: {},

  /* ── Focus: constrained whole-unit reconstruction ── */
  var: {
    "9": [42.71729406584955, 57.463463770564715],
  },
  varLabels: [["9", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  closeFocusM: 1.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: whole-unit focusing only; all internal optical spacings remain fixed. The patent publishes no focus table. A 1.5 m object-to-image-plane MFD is modeled by increasing the R9-to-image gap from 42.717294 mm at infinity to 57.463464 mm at close focus, equivalent to 14.746170 mm lens-forward travel with a fixed film plane.",

  nominalFno: 2.4907098243815624,
  fstopSeries: [2.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.55,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
