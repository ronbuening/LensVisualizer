import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON NIKKOR-S AUTO 5cm f/2                                ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 1964-025754, Embodiment 1 (Saburo Murakami /            ║
 * ║ Nippon Kogaku Kogyo Kabushiki Kaisha).                                  ║
 * ║ Five groups / seven elements, all spherical.                            ║
 * ║ Focus status: INFERRED UNIT FOCUS. The patent publishes infinity only;  ║
 * ║ the production linear helicoid supports rigid-unit extension to 0.6 m.  ║
 * ║ The modeled BF changes from 37.562469 to 42.591706 mm.                   ║
 * ║                                                                          ║
 * ║ SCALING: The worked prescription is normalized to f = 100. All radii,   ║
 * ║ thicknesses, semi-diameters, and image-plane distances are scaled ×0.5  ║
 * ║ to the patent's stated 5 cm target. There are no aspheres to transform. ║
 * ║                                                                          ║
 * ║ STOP: The patent draws the iris within d7 but does not tabulate its      ║
 * ║ exact station or diameter. The model places STO at the midpoint of the   ║
 * ║ scaled 9.0 mm gap. Its semi-diameter is code-solved so the modeled EFL   ║
 * ║ and entrance pupil give exactly f/2.                                     ║
 * ║                                                                          ║
 * ║ SEMI-DIAMETERS: The patent publishes none. Values were measured from     ║
 * ║ Figure 1, rounded to 0.1 mm, and checked against exact ray tracing.       ║
 * ║ Geometry checks cover edge thickness, actual spherical rim slope,       ║
 * ║ shared-band air-gap intrusion, and off-axis containment.                 ║
 * ║                                                                          ║
 * ║ SPECTRAL DATA: The patent publishes only nd and νd. No nC, nF, ng, or    ║
 * ║ dPgF values are invented. Glass names are class-level catalog matches,   ║
 * ║ not claims about Nikon's production melt supplier.                       ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer identity and release source:
 * https://imaging.nikon.com/imaging/information/story/0002/
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-nikkor-s-auto-50f2",
  maker: "Nikon",
  name: "NIKON NIKKOR-S AUTO 5cm f/2",
  subtitle: "JP 1964-025754, Embodiment 1 — correlated to the June 1959 production lens",
  specs: ["7 ELEMENTS / 5 GROUPS", "EFL 50.006 mm", "f/2", "2ω = 46° (PATENT)", "ALL-SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.0055831592,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1964-025754",
  patentAuthors: ["Saburo Murakami"],
  patentAssignees: ["Nippon Kogaku Kogyo Kabushiki Kaisha"],
  patentYear: 1964,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6127,
      vd: 58.6,
      fl: -5607.536,
      glass: "613586 — SK4 class (catalog equivalent; vendor unconfirmed)",
      apd: false,
      role: "Extremely weak negative front meniscus that extends back focus with little net system power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6141,
      vd: 55.1,
      fl: 66.909,
      glass: "614551 — SK9 / S-BSM9 / H-ZK8 class (catalog equivalent; vendor unconfirmed)",
      apd: false,
      role: "Positive collector preceding the front cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6141,
      vd: 55.1,
      fl: 65.57,
      glass: "614551 — SK9 / S-BSM9 / H-ZK8 class (catalog equivalent; vendor unconfirmed)",
      apd: false,
      role: "Positive crown member of the front cemented pair.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6483,
      vd: 33.8,
      fl: -37.651,
      glass: "648338 — SF2 class (catalog equivalent; vendor unconfirmed)",
      apd: false,
      role: "Negative flint member facing the stop; the D1 cemented group is weakly negative in situ.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7408,
      vd: 27.7,
      fl: -25.51,
      glass: "741278 — SF13 / S-TIH13 class (catalog equivalent; vendor unconfirmed)",
      apd: false,
      role: "High-index flint member immediately behind the stop.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      fl: 32.41,
      glass: "744449 — LAF2 / S-LAM2 class (catalog equivalent; vendor unconfirmed)",
      apd: false,
      role: "Positive lanthanum-crown-class member of the rear cemented pair.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      fl: 57.691,
      glass: "744449 — LAF2 / S-LAM2 class (catalog equivalent; vendor unconfirmed)",
      apd: false,
      role: "Rear positive element that completes the Gaussian core and supplies final convergence.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 328.5, d: 2.4, nd: 1.6127, elemId: 1, sd: 12.4 },
    { label: "2", R: 299, d: 0.3, nd: 1, elemId: 0, sd: 12.2 },
    { label: "3", R: 31.3, d: 3.4, nd: 1.6141, elemId: 2, sd: 12.4 },
    { label: "4", R: 125.95, d: 0.4, nd: 1, elemId: 0, sd: 11.2 },
    { label: "5", R: 18.36, d: 3.5, nd: 1.6141, elemId: 3, sd: 11.5 },
    { label: "6", R: 31.3, d: 3.1, nd: 1.6483, elemId: 4, sd: 11.5 },
    { label: "7", R: 13.18, d: 4.5, nd: 1, elemId: 0, sd: 11.5 },
    // STO position inferred at the midpoint of patent gap d7; stop SD solved for the modeled f/2 entrance pupil.
    { label: "STO", R: 1e15, d: 4.5, nd: 1, elemId: 0, sd: 8.9416853989 },
    { label: "8", R: -13.35, d: 2.8, nd: 1.7408, elemId: 5, sd: 9.5 },
    { label: "9", R: -49.535, d: 3.2, nd: 1.744, elemId: 6, sd: 10.1 },
    { label: "10", R: -16.665, d: 0.05, nd: 1, elemId: 0, sd: 10.1 },
    { label: "11", R: 274.25, d: 2.35, nd: 1.744, elemId: 7, sd: 10.5 },
    { label: "12", R: -50.7, d: 37.5624686038, nd: 1, elemId: 0, sd: 10.5 },
  ],

  asph: {},
  var: { "12": [37.5624686038, 42.59170554323104] },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  /*
   * Official Nikon history states that the closest focusing distance was 0.6 m before the 1974 redesign changed it
   * to 0.45 m: https://imaging.nikon.com/imaging/information/story/0002/
   */
  closeFocusM: 0.6,
  focusDescription:
    "Inferred unit focus to 0.6 m, modeled by increasing the final BF gap from 37.562469 to 42.591706 mm; " +
    "the production lens used a linear helicoid, while the patent publishes only the infinity prescription.",

  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
