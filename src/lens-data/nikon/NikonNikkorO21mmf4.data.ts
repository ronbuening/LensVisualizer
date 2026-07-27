import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON NIKKOR-O 2.1cm f/4                                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 1968-030782, Example 2 / Figure 2, Zenji Wakimoto.             ║
 * ║ Production correlation: Nikon NIKKOR-O 2.1cm f/4, 8 elements / 4 groups. ║
 * ║ All 12 refracting surfaces are spherical.                                 ║
 * ║                                                                            ║
 * ║ SCALING: The patent prescription is normalized to f = 100. All radii,     ║
 * ║ thicknesses, air gaps, semi-diameters, stop coordinates, and image-plane  ║
 * ║ distances are uniformly scaled by 0.21. There are no aspheric             ║
 * ║ coefficients to transform. The resulting paraxial EFL is 21.000059 mm.    ║
 * ║                                                                            ║
 * ║ STOP: Figure 2 places stop B within l2 but does not publish the split.     ║
 * ║ The 1.1508 mm scaled gap is divided at its midpoint: 0.5754 mm before     ║
 * ║ and after STO. The physical stop SD, 3.296263 mm, is solved paraxially     ║
 * ║ from the modeled f/4 entrance pupil at that inferred position.            ║
 * ║                                                                            ║
 * ║ IMAGE PLANE: The patent omits the distance after r42. Surface 12 uses the ║
 * ║ independently solved paraxial BFD of 7.346549773 mm.                       ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: The patent publishes none. SDs were measured from the     ║
 * ║ Figure 2 section, rounded to 0.1 mm, and checked against exact tracing.    ║
 * ║ Edge thickness, spherical rim slope, shared-band cross-gap intrusion,     ║
 * ║ and off-axis containment were checked.                                    ║
 * ║                                                                            ║
 * ║ FOCUS STATUS — INFERRED UNIT FOCUS: The patent publishes infinity only.   ║
 * ║ Production-era focusing and rigid internal spacings support unit focus;   ║
 * ║ the modeled 0.9 m state increases BF from 7.346550 to 7.875786 mm.        ║
 * ║                                                                            ║
 * ║ SPECTRAL DATA: The patent publishes nd and νd only. nC, nF, ng, and dPgF ║
 * ║ are intentionally omitted; glass labels are vendor-neutral classes.       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer identity reference:
 * https://imaging.nikon.com/imaging/information/story/0001/
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-nikkor-o-21mm-f4",
  maker: "Nikon",
  name: "NIKON NIKKOR-O 2.1cm f/4",
  subtitle: "JP 1968-030782 Example 2 — production-correlated; uniformly scaled ×0.21",
  specs: ["8 ELEMENTS / 4 GROUPS", "f = 21.000 mm", "f/4", "92° FULL FIELD", "ALL SPHERICAL"],

  focalLengthMarketing: 21,
  focalLengthDesign: 21.000059353675855,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["nikon-s", "nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1968-030782",
  patentAuthors: ["Zenji Wakimoto"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1968,
  elementCount: 8,
  groupCount: 4,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 92,
    maxTraceFieldDeg: 46,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (convex to object)",
      nd: 1.6201,
      vd: 60.1,
      fl: -23.417540891093882,
      glass: "620603 — SK16 / BSM16 / BACD16 class",
      apd: false,
      role: "Front negative collector; Group I.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.7264,
      vd: 37.8,
      fl: 16.22428982787574,
      glass: "723380 — BAFD8 / S-BAH28 / J-BASF8 class",
      apd: false,
      role: "Positive outer member of the front cemented triplet.",
      cemented: "GII",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6484,
      vd: 33.8,
      fl: -8.165977470375733,
      glass: "648338 — SF2 / E-FD2 / J-SF2 class",
      apd: false,
      role: "Negative central member of the front cemented triplet.",
      cemented: "GII",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.5816,
      vd: 42.1,
      fl: 9.236689830244343,
      glass: "LF3 (Sumita coefficient-backed equivalent), 582420",
      apd: false,
      role: "Positive inner member of the front cemented triplet adjacent to the stop.",
      cemented: "GII",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus (convex to image)",
      nd: 1.517,
      vd: 58.8,
      fl: 10.260016969483221,
      glass: "518588–518590 — K3 / C3 / NSL3 class",
      apd: false,
      role: "Positive inner member of the rear cemented triplet adjacent to the stop.",
      cemented: "GIII",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6484,
      vd: 33.8,
      fl: -7.878934694706496,
      glass: "648338 — SF2 / E-FD2 / J-SF2 class",
      apd: false,
      role: "Negative central member of the rear cemented triplet.",
      cemented: "GIII",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7264,
      vd: 37.8,
      fl: 16.945460472109048,
      glass: "723380 — BAFD8 / S-BAH28 / J-BASF8 class",
      apd: false,
      role: "Positive outer member of the rear cemented triplet.",
      cemented: "GIII",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus (convex to image)",
      nd: 1.6422,
      vd: 58.2,
      fl: -20.47421473662872,
      glass: "LAK6 (Sumita coefficient-backed equivalent), 643581",
      apd: false,
      role: "Rear negative collector; Group IV.",
    },
  ],

  /* ── Surface prescription ──
   * Patent mapping: 1=r11, 2=r12, 3=r21, 4=r22, 5=r23, 6=r24,
   * 7=r31, 8=r32, 9=r33, 10=r34, 11=r41, 12=r42.
   */
  surfaces: [
    { label: "1", R: 100.569, d: 0.8001, nd: 1.6201, elemId: 1, sd: 13.0 },
    { label: "2", R: 12.6504, d: 11.9994, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "3", R: 12.3942, d: 4.8993, nd: 1.7264, elemId: 2, sd: 7.7 },
    { label: "4", R: -199.9998, d: 0.9996, nd: 1.6484, elemId: 3, sd: 7.7 },
    { label: "5", R: 5.4495, d: 4.0992, nd: 1.5816, elemId: 4, sd: 4.3 },
    { label: "6", R: -273.462, d: 0.5754, nd: 1.0, elemId: 0, sd: 4.3 },
    // Stop position inferred at the midpoint of patent gap l2; stop SD solved from f/4 pupil geometry.
    { label: "STO", R: 1e15, d: 0.5754, nd: 1.0, elemId: 0, sd: 3.296263 },
    { label: "7", R: -299.9997, d: 4.599, nd: 1.517, elemId: 5, sd: 3.8 },
    { label: "8", R: -5.2395, d: 0.9996, nd: 1.6484, elemId: 6, sd: 4.2 },
    { label: "9", R: 220.0002, d: 5.5503, nd: 1.7264, elemId: 7, sd: 6.7 },
    { label: "10", R: -12.9003, d: 11.6004, nd: 1.0, elemId: 0, sd: 6.7 },
    { label: "11", R: -10.9809, d: 0.8001, nd: 1.6422, elemId: 8, sd: 8.8 },
    // Patent omits the image distance; d is the solved paraxial BFD from r42 to IMG.
    { label: "12", R: -68.5062, d: 7.346549772552723, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  // Inferred unit focus: rigid internal spacings; only the final image-space gap changes.
  var: { "12": [7.346549772552723, 7.875785503615887] },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "10" },
    { text: "IV", fromSurface: "11", toSurface: "12" },
  ],

  doublets: [],

  closeFocusM: 0.9,
  focusDescription:
    "Inferred unit focus to 0.9 m, modeled by increasing the final BF gap from 7.346550 to 7.875786 mm; " +
    "the patent publishes only the infinity prescription.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16],

  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
