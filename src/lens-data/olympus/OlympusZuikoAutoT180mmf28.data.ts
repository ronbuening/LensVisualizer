import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US 4,114,992 Embodiment 1 (f = 100), every length scaled uniformly by 1.8 to 180 mm.
 * Linked to the Zuiko Auto-T 180mm f/2.8 by assignee, the patent's 180-200 mm F2.8 aim and the five-element,
 * five-group layout; not an identified factory prescription, and Embodiments 2-4 share the same layout.
 * Radii, thicknesses, indices and the printed back focus are unchanged apart from the scale.
 * Clear semi-diameters and the stop position (0.53 of d8, read from Fig. 1) are inferred; the rims follow the
 * Fig. 1 outline ratios, about 4 % fuller than drawn. Fig. 1 ends the concave r8 about 21 mm from the axis (0.85 of
 * its drawn edge) and runs a flat land out to the edge; the inferred cut sits at 20.89 mm (depth 7.22 mm), just
 * outside the wide-open beams, which reach 20.81 mm there at infinity and at 2.0 m.
 * The patent names no reference line for its indices; the d line is assumed.
 * Unit focus to 2.0 m: the close-focus back focus is a derived paraxial solve, not a printed state.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-auto-t-180mm-f28",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-T 180mm f/2.8",
  subtitle: "US 4,114,992 \u2014 Embodiment 1; patent design matching the production layout",
  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      marketing: 180,
      design: 180,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 100 (NORMALIZED; SCALED 1.8× TO 180 mm)",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
    ],
  },
  source: {
    patentNumber: "US 4,114,992",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 1978,
    authors: ["Tadashi Kimura"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.66672,
      vd: 48.32,
      glass: "S-BAH11 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent gives refractive index and Abbe number without naming a reference line; the d line is assumed.",
      focalLengthMm: 129.1868233570837,
      role: "Front positive meniscus collector, convex to the object, with a weak rear face (condition 1).",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.14,
      glass: "S-BSM15 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent gives refractive index and Abbe number without naming a reference line; the d line is assumed.",
      focalLengthMm: 269.67957665656496,
      role: "Second of the three closely spaced front positive menisci; its rear face r4 corrects astigmatism from r2.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      glass: "S-BSM14 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent gives refractive index and Abbe number without naming a reference line; the d line is assumed.",
      focalLengthMm: 361.4488021200887,
      role: "Third and thickest front positive meniscus, completing the closely spaced positive front section.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.71,
      glass: "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent gives refractive index and Abbe number without naming a reference line; the d line is assumed.",
      focalLengthMm: -56.971199257004656,
      role: "High-index negative meniscus; its strong rear face r8 corrects distortion and field curvature and shortens the lens.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.55,
      glass: "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent gives refractive index and Abbe number without naming a reference line; the d line is assumed.",
      focalLengthMm: 220.7307272858642,
      role: "Rear positive meniscus behind the stop and the long d8 airspace; its bending controls astigmatism (conditions 8 and 9).",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64.242,
      d: 8.1702,
      sd: 35.4,
      medium: 1,
    },
    {
      label: "2",
      R: 239.922,
      d: 0.12420000000000002,
      sd: 35.4,
    },
    {
      label: "3",
      R: 61.9488,
      d: 5.7438,
      sd: 33.1,
      medium: 2,
    },
    {
      label: "4",
      R: 94.64040000000001,
      d: 0.1008,
      sd: 33.1,
    },
    {
      label: "5",
      R: 55.6632,
      d: 9.2736,
      sd: 30.7,
      medium: 3,
    },
    {
      label: "6",
      R: 70.065,
      d: 4.5,
      sd: 30.7,
    },
    {
      label: "7",
      R: 151.4574,
      d: 6.8886,
      sd: 25.8,
      medium: 4,
    },
    {
      label: "8",
      R: 33.8274,
      d: 27.424638,
      sd: 25.8,
      rimCutDepthMm: 7.22,
    },
    {
      label: "STO",
      R: "flat",
      d: 24.319961999999997,
    },
    {
      label: "9",
      R: 93.7026,
      d: 5.4702,
      sd: 16.6,
      medium: 5,
    },
    {
      label: "10",
      R: 206.2872,
      sd: 16.6,
    },
  ],
  focus: {
    closeFocusM: 2.0,
    description:
      "Unit focus: Olympus specifies helicoid focusing to 2.0 m, so the whole optical block moves forward and only the back focus changes, by 19.95 mm at 2.0 m. The patent prints the infinity prescription only; the close-focus back focus is derived (paraxial solve for 2.0 m object to image, about 1:9) and is not a published state.",
  },
  gaps: { "10": { label: "BF", values: [[76.8834, 96.831]] } },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 13.8,
    maxTraceFieldDeg: 6.9,
  },
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
