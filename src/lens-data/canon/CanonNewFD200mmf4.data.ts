import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,240,703, Example I (Kikuo Momiyama, Canon). All lengths in the f = 1
 * prescription are scaled by 200 for the marketed 200 mm lens. Figure 1 gives
 * the clear rims and the iris position, 46.41 mm behind the first vertex.
 * The stop radius follows from f/4 and the film lies at paraxial infinity focus.
 * The two printed focus positions fix the ends of the cemented doublet's travel.
 * Nine intermediate positions are solved for focus at the fixed film plane,
 * at equal steps in reciprocal object-to-film distance. D8 + D11 stays 57.42 mm.
 * The table gives longer system focal lengths than the printed headings and
 * different powers for members II and IV. The prescription follows the table.
 * Its indices agree with helium d-line glasses, although the text names sodium.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-new-fd-200mm-f4",
  maker: "Canon",
  name: "CANON NEW FD 200mm f/4",
  visible: true,
  subtitle: "US 4,240,703, Example I — Canon / Momiyama",
  source: {
    patentNumber: "US 4,240,703",
    example: {
      label: "Example I",
      id: "1",
    },
    patentYear: 1980,
    authors: ["Kikuo Momiyama"],
    assignees: ["Canon Inc."],
    sdSource: "figure-measured",
    errata: [
      {
        status: "unresolved",
        note: "The printed spacings and glass data give focal lengths of 200.89 mm at infinity and 169.44 mm at 9.13f. The focus table gives 200.00 and 168.78 mm. Members II and IV give −288.83 and +936.58 mm, while the patent lists −286.90 and +687.52 mm. Example II's table gives the same +0.45% focal length, and its member II value misses the listed one by 18%, so no single entry of Example I explains the difference.",
      },
      {
        status: "unresolved",
        note: "The text calls d a sodium line. All five distinct refractive indices agree with helium d-line catalog values at the printed precision, so the model uses helium d.",
      },
    ],
  },
  catalog: {
    lensMounts: ["canon-fd"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: {
      marketing: 200,
      design: 200.89,
    },
    fNumber: {
      marketing: 4,
      design: 4,
    },
    closeFocusM: {
      marketing: 1.5,
    },
    specs: ["7 ELEMENTS / 6 GROUPS", "ALL SPHERICAL", "DESIGN f = 200.89 mm", "REAR FOCUS"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      indexReference: "d",
      focalLengthMm: 85.16,
      glass: "S-FSL5 (OHARA)",
      role: "Converges the incoming beam at the front of member I.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72342,
      vd: 38,
      indexReference: "d",
      focalLengthMm: -95.22,
      glass: "BASF8 (SUMITA)",
      role: "Balances the chromatic power of the two positive crowns in member I.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      indexReference: "d",
      focalLengthMm: 121.89,
      glass: "S-FSL5 (OHARA)",
      role: "Adds positive power at the rear of member I. Its rear surface is nearly flat.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      indexReference: "d",
      focalLengthMm: -288.83,
      glass: "S-BAL35 (OHARA)",
      role: "Diverges the beam ahead of the diaphragm and stays fixed during focusing.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: 103.93,
      glass: "S-TIH4 (OHARA)",
      role: "Forms the positive front element of the moving doublet in member III.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.66755,
      vd: 41.9,
      indexReference: "d",
      focalLengthMm: -59.5,
      glass: "J-BASF6 (HIKARI)",
      role: "Gives the moving doublet its net negative power.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: 936.58,
      glass: "S-TIH4 (OHARA)",
      role: "Weak positive meniscus that offsets residual positive distortion from a fixed position behind the focusing doublet.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 69.76,
      d: 9.64,
      sd: 26.2,
      medium: 1,
    },
    {
      label: "2",
      R: -97.9,
      d: 3.98,
      sd: 26.2,
    },
    {
      label: "3",
      R: -85.56,
      d: 2.52,
      sd: 24.9,
      medium: 2,
    },
    {
      label: "4",
      R: 357.74,
      d: 0.58,
      sd: 24.9,
    },
    {
      label: "5",
      R: 58.92,
      d: 6.6,
      sd: 24,
      medium: 3,
    },
    {
      label: "6",
      R: 6773,
      d: 12.34,
      sd: 24,
    },
    {
      label: "7",
      R: 32.14,
      d: 3.7,
      sd: 19,
      medium: 4,
    },
    {
      label: "8",
      R: 25.88,
      d: 7.05,
      sd: 16.8,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "9",
      R: 78.72,
      d: 2.02,
      sd: 12.7,
      medium: 5,
    },
    {
      label: "10",
      R: -26173.24,
      d: 1.52,
      sd: 12.7,
      medium: 6,
    },
    {
      label: "11",
      R: 39.78,
      sd: 12.7,
    },
    {
      label: "12",
      R: 42.32,
      d: 2.52,
      sd: 16.4,
      medium: 7,
    },
    {
      label: "13",
      R: 43.86,
      d: 61.156,
      sd: 16.4,
    },
  ],
  gaps: {
    "11": {
      label: "D11 · Doublet to rear meniscus",
      values: [[31.02, 29.5117, 27.9386, 26.2963, 24.5795, 22.7826, 20.8991, 18.9218, 16.8426, 14.6522, 12.34]],
    },
    STO: {
      label: "Iris to focusing doublet",
      values: [[19.35, 20.8583, 22.4314, 24.0737, 25.7905, 27.5874, 29.4709, 31.4482, 33.5274, 35.7178, 38.03]],
    },
  },
  aperture: {
    nominalFNumber: 4,
    fStops: [4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
    blades: 8,
  },
  focus: {
    closeFocusM: 1.826,
    keyframes: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    published: [10],
    description:
      "Member III moves 18.68 mm toward the film between infinity and the 1.826 m position in the patent. Nine calculated positions describe the intervening travel. The other members and the iris stay fixed.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 10,
        objectDistanceMm: 1826,
        distanceReference: "image-plane",
        source:
          "US 4,240,703, Example I, columns 3–4. The focus table gives 9.13f, interpreted as the distance from object to film. At that distance the paraxial image falls 0.0206 mm behind the film.",
      },
    ],
  },
  groups: [
    {
      text: "I",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "II",
      fromSurface: "7",
      toSurface: "8",
    },
    {
      text: "III",
      fromSurface: "9",
      toSurface: "11",
    },
    {
      text: "IV",
      fromSurface: "12",
      toSurface: "13",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "9",
      toSurface: "11",
    },
  ],
  layout: {
    yScFill: 0.65,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
