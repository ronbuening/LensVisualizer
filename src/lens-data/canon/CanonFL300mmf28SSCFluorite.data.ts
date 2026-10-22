import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** US 3,868,174 A, Example 1 (f = 100, F/2.8, 2ω = 8.24°), every R and D scaled uniformly ×3; nd/νd as printed.
 * The patent example has five elements in four groups. Canon lists six elements in five groups; the mandatory 34 mm
 * rear drop-in filter is the likely sixth, but no thickness or position is published, so no plate is added.
 * The stop sits in D6 at 75 % of the gap from r6 (92.551275 / 30.850425 mm), read from FIG. 1; the patent prints no
 * stop coordinate. All sd values are estimates; the rear doublet's 14.5 mm is read from FIG. 1.
 * L1 is fluorspar per claim 1 and resolves to the catalog CaF2 dispersion curve. L2–L5 resolve to coordinate-equal
 * catalog equivalents (S-LAH51, S-FSL5, K-BK7, S-TIH18) for dispersion; the 1970s production melts are unidentified.
 * Infinity focus only: the patent prints no close-focus state. Image gap = printed back focus 23.73 × 3 = 71.19 mm.
 * The claim-3 aberration-coefficient table differs from the body table in two cells; R/D/N/V agree.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-fl-300mm-f28-ssc-fluorite",
  maker: "Canon",
  name: "CANON FL 300mm f/2.8 S.S.C. FLUORITE",
  subtitle: "US 3,868,174 A, Example 1 — probable production correlation, drop-in filter omitted",
  visible: true,
  layout: {
    yScFill: 0.85,
  },
  catalog: {
    lensMounts: ["canon-fl"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 300,
      design: 300,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: [
      "5 ELEMENTS / 4 GROUPS (PATENT; CANON LISTS 6/5)",
      "DESIGN f = 100 (SCALED ×3)",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "FLUORITE FRONT ELEMENT",
    ],
  },
  source: {
    patentNumber: "US 3,868,174 A",
    patentYear: 1975,
    authors: ["Hideo Yokota"], // US cover prints "Yakota"; EPO family records (DE 2339461, JP S49-36329) give Yokota
    assignees: ["Canon Inc."], // US cover prints "Canon Kobushiki Kaisha"
    errata: [
      {
        status: "unresolved",
        note: "In claim 3, the second-row P coefficient reads .4078 against .4708 in the description, and the total II reads +.1038 against −.1038. The R, D, N and V values agree in both places; the differences are confined to the aberration-coefficient table and do not affect the prescription.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive (Fluorspar)",
      nd: 1.43387,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 175.81,
      glass: "CaF2 (fluorspar, named in claim 1; catalog dispersion curve, patent nd and νd kept)",
      role: "Front positive collector of the three-element front group.",
      apd: "patent",
      apdNote:
        "The patent names fluorspar for this element to reduce secondary color; the dispersion curve is the catalog CaF2 room-temperature fit, not measured production material.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      focalLengthMm: -155.70,
      glass: "S-LAH51 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative flint of the front group; balances primary color against the fluorite and crown positives.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      indexReference: "d",
      focalLengthMm: 194.17,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive rear element of the front group, strongly convex toward the object.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -124.66,
      glass: "K-BK7 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Negative front element of the rear cemented doublet; concave toward the object.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72151,
      vd: 29.2,
      indexReference: "d",
      focalLengthMm: 317.11,
      glass: "S-TIH18 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive flint rear element of the cemented doublet; the pair forms the negative telephoto rear group.",
      cemented: "D1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 121.758,
      d: 22.4934,
      sd: 55,
      medium: 1,
    },
    {
      label: "2",
      R: -192.786,
      d: 15.1896,
      sd: 55,
    },
    {
      label: "3",
      R: -144.6156,
      d: 5.3787,
      sd: 50,
      medium: 2,
    },
    {
      label: "4",
      R: 808.3907999999999,
      d: 10.404,
      sd: 50,
    },
    {
      label: "5",
      R: 114.29820000000001,
      d: 16.7088,
      sd: 50,
      medium: 3,
    },
    {
      label: "6",
      R: -524.3616000000001,
      d: 92.55127499999999,
      sd: 50,
    },
    {
      label: "STO",
      R: "flat",
      d: 30.850424999999998,
    },
    {
      label: "7",
      R: -47.8584,
      d: 2.0808,
      sd: 14.5,
      medium: 4,
    },
    {
      label: "8",
      R: -189.3528,
      d: 3.7451999999999996,
      sd: 14.5,
      medium: 5,
    },
    {
      label: "9",
      R: -104.46629999999999,
      d: 71.19,
      sd: 14.5,
    },
  ],
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
    blades: 12,
  },
  focus: {
    closeFocusM: 3.5,
    keyframes: [0, 1],
    description:
      "Patent infinity state only; the production lens focuses to 3.5 m. The patent prints no close-focus spacing.",
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
