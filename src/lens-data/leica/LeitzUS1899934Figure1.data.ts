import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,899,934 A (Max Berek, Ernst Leitz, granted 1933), Figure 1 example, f/2.
 * Radii, thicknesses, air spaces, nD and Abbe numbers are copied exactly as printed, with the table's own
 * signs; the table is normalised to f = 100 (the computed EFL is 99.998 mm). No scaling is applied.
 * Six spherical elements in four groups; L3/L4 and L5/L6 are the patent's two cemented members. The printed
 * nD (sodium D line) values match no catalogue glass at that line except L3, which matches Sumita K-SFLD8W
 * (nD 1.68901 / ν 31.16); the other glasses are left unmatched.
 * Inferred, not printed: the iris position (placed in the 7.56 mm air space behind the cemented negative
 * member, 6.5 mm behind r7 and 1.06 mm ahead of r8), all clear semi-diameters, and the back focus (the
 * computed paraxial infinity value). The patent states no focal length, field angle or close-focus data.
 * Semi-diameters are estimated from Figure 1 (300 dpi scan, about 16.4 px per mm at 600 dpi over the r1–r10
 * span) and floor-checked by real-ray trace: front pair 26 / 25 mm and the cemented negative member 23 mm
 * (drawn about 26.7 and 24.1 mm, within drawing noise); rear cemented member 19.7 mm (drawn 19.7 mm).
 * The figure ends the concave r7 face at 0.81 of the member's edge and bevels out to it, so r7 is cut flat
 * 4.68 mm behind its vertex (cut radius 18.62 mm), which also keeps its rim ahead of the iris plane; no
 * traced beam reaches that radius.
 */
const LENS_DATA = {
  schema: 2,
  key: "leitz-100mm-f2-us1899934-figure-1",
  maker: "Leica",
  name: "LEITZ 100mm f/2 (US 1,899,934 Figure 1 Design)",
  subtitle: "US 1,899,934 A, Figure 1 \u2014 Leitz split-front triplet",
  visible: true,
  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/2", "SPLIT-FRONT TRIPLET"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
  },
  source: {
    patentNumber: "US 1,899,934 A",
    example: {
      label: "Figure 1",
      id: "1",
    },
    patentYear: 1933,
    authors: ["Max Berek"],
    assignees: ["Ernst Leitz GmbH"],
    sdSource: "figure-measured",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6185,
      vd: 60.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.6185 / V 60.5)",
      role: "Front half of the split positive front member, convex to the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6185,
      vd: 60.5,
      indexReference: "D",
      glass: "Unmatched (nD 1.6185 / V 60.5)",
      role: "Rear half of the split positive front member, 1 mm behind Element 1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.689,
      vd: 31.2,
      indexReference: "D",
      glass: "K-SFLD8W (Sumita catalog equivalent)",
      role: "Positive dense-flint half of the cemented negative middle member.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6034,
      vd: 38,
      indexReference: "D",
      glass: "Unmatched (nD 1.6034 / V 38.0)",
      role: "Strong negative element of the cemented middle member; carries most of the system's negative power.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6034,
      vd: 38,
      indexReference: "D",
      glass: "Unmatched (nD 1.6034 / V 38.0)",
      role: "Negative flint meniscus of the cemented positive rear member.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.658,
      vd: 51.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.6580 / V 51.4)",
      role: "Positive crown of the cemented rear member, the last element before the image.",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 51.193,
      d: 9.07,
      sd: 26,
      medium: 1,
    },
    {
      label: "2",
      R: 148.9,
      d: 1,
      sd: 26,
    },
    {
      label: "3",
      R: 132,
      d: 8.06,
      sd: 25,
      medium: 2,
    },
    {
      label: "4",
      R: -153.6,
      d: 5.72,
      sd: 25,
    },
    {
      label: "5",
      R: -57.46,
      d: 9.07,
      sd: 23,
      medium: 3,
    },
    {
      label: "6",
      R: -30.55,
      d: 5.04,
      sd: 23,
      medium: 4,
    },
    {
      label: "7",
      R: 39.4,
      d: 6.5,
      sd: 23,
      rimCutDepthMm: 4.68,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.06,
    },
    {
      label: "8",
      R: 120.9,
      d: 4.03,
      sd: 19.7,
      medium: 5,
    },
    {
      label: "9",
      R: 33.558,
      d: 12.09,
      sd: 19.7,
      medium: 6,
    },
    {
      label: "10",
      R: -63.51,
      d: 69.65283913735544,
      sd: 19.7,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "8", toSurface: "10" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
