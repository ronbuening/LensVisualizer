import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US 2,730,017 (A. W. Tronnier, Voigtländer), Example 1 / Fig. 1: f = 100 mm, 1:4.5, p0′ = 37.203 mm.
 * The table is printed at f = 100 mm and is used unscaled; the patent figures are drawn at f = 300 mm.
 * Indices and Abbe numbers are for the helium d line, as the patent states. The image plane sits at the
 * printed back focus; the computed paraxial back focus is 37.198 mm (+0.005 mm residual, not applied).
 * The patent prints no field angle, clear apertures or stop position. Fig. 1 is drawn to one scale along
 * and across the axis (its R1 and R8 arcs fit the printed radii), but every diameter in it is about 0.69
 * of what f/4.5 needs, so it sets shapes, not sizes. Semi-diameters are inferred: the front rim is 8.9%
 * above the f/4.5 entrance-pupil radius; R3 ends at 0.95 of the L1/L2 edge and L3's rear face is
 * chamfered to 10.3 mm, as in Fig. 1, just outside the 10.08 mm f/4.5 marginal ray; L5's front face is
 * clear to 0.84 of the doublet edge, with a flat land out to the edge, as in both Fig. 1 and the section
 * in Voigtländer's Prominent lens booklet. L4 and the rear doublet keep the booklet's proportions (0.79
 * and 0.86 of the front rim); Fig. 1 draws both at 0.70, which the doublet cannot match without a large
 * loss of corner illumination. The stop sits at 0.55 of the 25.819 mm diaphragm space, close to where
 * both drawings place it. The 25° full field is the booklet's figure. Infinity prescription only.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-dynaron-100mm-f45",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER DYNARON 100mm f/4.5",
  subtitle: "US 2,730,017 A — Example 1; patent design matching the production lens",
  catalog: {
    lensMounts: ["voigtlander-prominent"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      marketing: 100.0,
      design: 100.0,
    },
    fNumber: {
      marketing: 4.5,
      design: 4.5,
    },
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "DESIGN f = 100 mm",
      "DESIGN F/4.5",
      "ALL SPHERICAL",
    ],
  },
  source: {
    patentNumber: "US 2,730,017 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1956,
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Voigtländer AG"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.58987,
      vd: 61.2,
      indexReference: "d",
      glass: "SK5 (SUMITA; nearest catalog row to patent nd 1.58987, νd 61.2; production glass unspecified)",
      focalLengthMm: 27.90997794503012,
      role: "Strong biconvex collector of the front member, cemented to L2.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72381,
      vd: 38.0,
      indexReference: "d",
      glass: "BASF8 (SUMITA; nearest catalog row to patent nd 1.72381, νd 38.0; production glass unspecified)",
      focalLengthMm: -54.25622734098758,
      role: "First of the front member's two diverging lenses, cemented behind L1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72381,
      vd: 38.0,
      indexReference: "d",
      glass: "BASF8 (SUMITA; nearest catalog row to patent nd 1.72381, νd 38.0; production glass unspecified)",
      focalLengthMm: -183.89516375769853,
      role: "Separate negative meniscus, convex to the object, closing the front member before the diaphragm space.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.62355,
      vd: 47.0,
      indexReference: "d",
      glass: "E-BAF8 (Hikari catalog equivalent; production supplier unspecified)",
      focalLengthMm: 83.08897641868539,
      role: "Biconvex positive lens opening the rear member after the diaphragm space.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58192,
      vd: 40.8,
      indexReference: "d",
      glass: "LF5 (Schott; nearest catalog row to patent nd 1.58192, νd 40.8; production glass unspecified)",
      focalLengthMm: -20.484936257251555,
      role: "Negative lens of the rear cemented pair; its steep front face, concave toward L4, carries the rear member's diverging power.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.75512,
      vd: 27.5,
      indexReference: "d",
      glass: "SF4 (Schott catalog equivalent; production supplier unspecified)",
      focalLengthMm: 44.467892282237486,
      role: "Dense-flint positive cemented behind L5, completing the rear member.",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 24.288,
      d: 5.183,
      sd: 12.1,
      medium: 1,
    },
    {
      label: "2",
      R: -47.056,
      d: 1.382,
      sd: 12.1,
      medium: 2,
    },
    {
      label: "3",
      R: 240.306,
      d: 0.494,
      sd: 11.5,
    },
    {
      label: "4",
      R: 177.947,
      d: 1.185,
      sd: 11.1,
      medium: 3,
    },
    {
      label: "5",
      R: 75.934,
      d: 14.20045,
      sd: 10.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 11.618549999999999,
    },
    {
      label: "6",
      R: 92.523,
      d: 2.814,
      sd: 9.6,
      medium: 4,
    },
    {
      label: "7",
      R: -116.367,
      d: 4.305,
      sd: 9.6,
    },
    {
      label: "8",
      R: -17.229,
      d: 1.728,
      sd: 8.7,
      rimExtensionSd: 10.4,
      medium: 5,
    },
    {
      label: "9",
      R: 40.117,
      d: 2.962,
      sd: 10.4,
      medium: 6,
    },
    {
      label: "10",
      R: -199.48,
      d: 37.203,
      sd: 10.4,
    },
  ],
  groups: [
    { text: "FRONT (I)", fromSurface: "1", toSurface: "5" },
    { text: "REAR (II)", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "D2",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  focus: {
    closeFocusM: 0.9,
    description:
      "Static model: the patent tabulates only the infinity state and the Dynaron's internal focusing motion is not published, so no focus travel is modeled. Once mounted, the lens couples to the Prominent's rangefinder and is focused with the camera's rangefinder knob. The 0.9 m close-focus value is where the lens's green meter scale begins in Voigtländer's Prominent lens booklet.",
  },
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 25.0,
    maxTraceFieldDeg: 12.5,
  },
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
