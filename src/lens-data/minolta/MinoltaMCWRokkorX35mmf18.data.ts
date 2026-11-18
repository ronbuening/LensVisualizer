import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP S45-39874 B, Example 3 (Minolta Camera; inventor Toshinobu Ogura), the whole printed table.
 * The patent prints the example at f = 1 (F/1.8, 2ω = 64°, back focus 1.05); every length here is the
 * printed value × 35, a uniform scale to the 35 mm production focal length. All surfaces are spherical.
 * The table gives plain N / V without naming the line; they are modeled as nd / νd (d-line), which the
 * patent's d-line aberration plots and exact d-line catalog matches for L1 and L5 support.
 * The patent prints no stop position. Its printed Seidel coma, astigmatism and distortion coefficients
 * place the chief ray's axis crossing 0.6295 of the way through dB4, so the stop sits 4.0033 mm behind
 * surface 7 and 2.3562 mm ahead of surface 8 (dB4 itself unchanged).
 * Semi-diameters are estimated from Fig. 3, which is drawn to scale (20.33 px/mm at 347 dpi, from the
 * surface 1 to 14 vertex span), and floor-checked by real-ray trace. The front doublet's faces reach the
 * drawn 20.1 mm edge; surface 3's concave cap ends at 15.2 mm and a land draws L2's chamfered flange to
 * 20.1 mm. L3 sits at 16.0 mm (Fig. 3: 15.2 mm) to keep mid-field illumination within 3 points of the
 * earlier rims. L4 sits at 14.2 mm, level with L5's flange as Fig. 3 draws it (14.0 mm) and just above the
 * 14.10 mm the f/1.8 marginal ray reaches on surface 6. Surfaces 8 and 9 (12.6 / 11.4 mm) pass the real f/1.8
 * marginal ray the patent's spherical aberration plot reaches; lands draw the biconcave L5's flange at Fig. 3's
 * 14.1 mm.
 * The last gap is the printed back focus (1.05 × 35 = 36.75 mm), kept as printed rather than fitted to
 * the paraxial back focus (36.7524 mm). Infinity focus only; the correlation with the production lens
 * is at design-family level, not a factory prescription.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-mc-w-rokkor-x-35f18",
  maker: "Minolta",
  name: "MINOLTA MC W.ROKKOR-X 35mm f/1.8",
  subtitle: "JP S45-39874 B, Example 3 — scaled ×35; production correlation",
  visible: true,
  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 6 GROUPS", "DESIGN f = 35.00 mm", "DESIGN F/1.8", "ALL SPHERICAL"],
    elementCount: 8,
    groupCount: 6,
    closeFocusM: {
      marketing: 0.3,
    },
    focalLengthMm: {
      marketing: 35,
      design: 35,
    },
    fNumber: {
      marketing: 1.8,
      design: 1.8,
    },
  },
  source: {
    patentNumber: "JP S45-39874 B",
    example: {
      label: "Example 3",
      id: "3",
    },
    patentYear: 1970,
    authors: ["Toshinobu Ogura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Positive front element of the cemented front doublet (negative group A)",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      focalLengthMm: 66.16,
      glass: "LAC10 (HOYA catalog equivalent; production supplier unspecified)",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Negative rear element of the front doublet; its deep rear surface carries most of group A's power",
      nd: 1.6176,
      vd: 52.7,
      indexReference: "d",
      focalLengthMm: -25.31,
      glass: "Unmatched (nd 1.6176, νd 52.7 as printed; no exact catalog row)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      role: "Thick biconvex collector (I_B) opening the positive rear group",
      nd: 1.6775,
      vd: 55.4,
      indexReference: "d",
      focalLengthMm: 38.45,
      glass: "Unmatched (nd 1.6775, νd 55.4 as printed; no exact catalog row)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      role: "Positive meniscus (II_B), convex to the object, just ahead of the stop",
      nd: 1.6775,
      vd: 55.4,
      indexReference: "d",
      focalLengthMm: 88.08,
      glass: "Unmatched (nd 1.6775, νd 55.4 as printed; no exact catalog row)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      role: "Biconcave flint (III_B) just behind the stop, the rear group's main negative element",
      nd: 1.6477,
      vd: 33.9,
      indexReference: "d",
      focalLengthMm: -28.45,
      glass: "SF2 (SCHOTT catalog equivalent; production supplier unspecified)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      role: "Positive meniscus (IV_B), concave to the object",
      nd: 1.708,
      vd: 53.3,
      indexReference: "d",
      focalLengthMm: 60.28,
      glass: "Unmatched (nd 1.7080, νd 53.3 as printed; no exact catalog row)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      role: "Dense-flint negative front element of the rear cemented doublet (V_B)",
      nd: 1.7557,
      vd: 27.2,
      indexReference: "d",
      focalLengthMm: -59.91,
      glass: "Unmatched (nd 1.7557, νd 27.2 as printed; no exact catalog row)",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      role: "Biconvex positive rear element of the rear doublet, last element before the image",
      nd: 1.708,
      vd: 53.3,
      indexReference: "d",
      focalLengthMm: 33.78,
      glass: "Unmatched (nd 1.7080, νd 53.3 as printed; no exact catalog row)",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 225.19,
      d: 5.775,
      sd: 20.1,
      medium: 1,
    },
    {
      label: "2",
      R: -59.7625,
      d: 1.225,
      sd: 20.1,
      medium: 2,
    },
    {
      label: "3",
      R: 21.3325,
      d: 19.0295,
      sd: 15.2,
      rimExtensionSd: 20.1,
    },
    {
      label: "4",
      R: 46.34,
      d: 17.0205,
      sd: 16,
      medium: 3,
    },
    {
      label: "5",
      R: -50.68,
      d: 0.1715,
      sd: 16,
    },
    {
      label: "6",
      R: 27.0235,
      d: 2.9295,
      sd: 14.2,
      medium: 4,
    },
    {
      label: "7",
      R: 47.2255,
      d: 4.0033,
      sd: 14.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.3562,
    },
    {
      label: "8",
      R: -60.9665,
      d: 5.558,
      sd: 12.6,
      rimExtensionSd: 14.1,
      medium: 5,
    },
    {
      label: "9",
      R: 27.349,
      d: 3.64,
      sd: 11.4,
      rimExtensionSd: 14.1,
    },
    {
      label: "10",
      R: -135.3695,
      d: 2.9155,
      sd: 12,
      medium: 6,
    },
    {
      label: "11",
      R: -32.739,
      d: 0.175,
      sd: 12,
    },
    {
      label: "12",
      R: 113.085,
      d: 0.9205,
      sd: 12,
      medium: 7,
    },
    {
      label: "13",
      R: 32.2175,
      d: 3.7135,
      sd: 12,
      medium: 8,
    },
    {
      label: "14",
      R: -88.403,
      d: 36.75,
      sd: 12,
    },
  ],
  layout: {
    yScFill: 0.3,
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent tabulates only the infinity state, so the model has no focusing movement. The marketed minimum focus distance is 0.3 m.",
  },
  gaps: {},
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "C2",
      fromSurface: "12",
      toSurface: "14",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
