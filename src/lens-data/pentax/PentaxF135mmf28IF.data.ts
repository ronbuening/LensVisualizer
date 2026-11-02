import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US4793698 Example1, literal normalized f100 prescription uniformly scaled1.35.
 * Correlated Pentax-F135/2.8 [IF], not an identified factory prescription.
 * Infinity slice of the previously frozen lower figure-informed L8 SD17.238mm branch;
 * all R/N/v, infinity gaps, otherSDs and derived lastgap46.38522359437118mm preserved.
 * Stop z30.7101375mm is an unmarked75%-of-d8 hypothesis. No iris-attachment or finite
 * conjugate is certified. Patent focus endpoints/retail0.7m are discussed, not simulated.
 * Source d-line, half-field9.4deg; brochure18deg full retained separately in analysis.
 * NO_INTERNAL_RECONSTRUCTION: closeFocusM1e15 is the canonical infinity-only control state.
 * Native monochromatic diffraction is an estimate; old1DOPL reference interpretation withdrawn.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-f-135mm-f28-if",
  maker: "Pentax",
  name: "PENTAX SMC F 135mm f/2.8 [IF]",
  subtitle: "US 4,793,698 Example 1; inferred iris and figure-based apertures; infinity configuration",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: {
      marketing: 135,
      design: 135,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "US 4,793,698",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1988,
    authors: ["Hiroyuki Hirano"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      indexReference: "d",
      focalLengthMm: 165.38620994641423,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Fixed front unit 10",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61,
      indexReference: "d",
      focalLengthMm: 126.65958621482311,
      glass: "S-BAL35 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Fixed front unit 10",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.8,
      indexReference: "d",
      focalLengthMm: 87.37968763004585,
      glass: "S-LAL8 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Fixed front unit 10",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: -45.0252130367558,
      glass: "S-TIH14 (OHARA, SF14 class; patent prints νd 27.5 where this index is 26.5)",
      role: "Fixed front unit 10",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -54.06471997450982,
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Source inner-focus unit 20; infinity state",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.74077,
      vd: 27.8,
      indexReference: "d",
      focalLengthMm: 110.57789341393003,
      glass: "S-TIH13 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Source inner-focus unit 20; infinity state",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -287.7257967910607,
      glass: "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Source floating unit 30; infinity state",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.53172,
      vd: 48.9,
      indexReference: "d",
      focalLengthMm: 96.9881887753813,
      glass: "LLF6 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Fixed rear unit 40",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 73.92195,
      sd: 26.52,
      medium: 1,
      d: 5.83605,
    },
    {
      label: "2",
      R: 866.23965,
      sd: 26.52,
      d: 0.1755,
    },
    {
      label: "3",
      R: 43.6725,
      sd: 25.81,
      medium: 2,
      d: 6.04125,
    },
    {
      label: "4",
      R: 99.90405,
      sd: 25.81,
      d: 0.1755,
    },
    {
      label: "5",
      R: 30.52755,
      sd: 23.81,
      medium: 3,
      d: 6.27885,
    },
    {
      label: "6",
      R: 54.73305,
      sd: 23.81,
      d: 2.80395,
    },
    {
      label: "7",
      R: 56.55015,
      sd: 18.58,
      medium: 4,
      d: 2.06145,
    },
    {
      label: "8",
      R: 21.0141,
      sd: 18.58,
      d: 7.3375875,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.4458625000000005,
    },
    {
      label: "9",
      R: 89.6967,
      sd: 14.85,
      medium: 5,
      d: 2.06145,
    },
    {
      label: "10",
      R: 28.21095,
      sd: 14.85,
      medium: 6,
      d: 3.14415,
    },
    {
      label: "11",
      R: 40.99005,
      sd: 14.85,
      d: 14.51655,
    },
    {
      label: "12",
      R: -92.55195,
      sd: 11.69,
      medium: 7,
      d: 2.06145,
    },
    {
      label: "13",
      R: -247.3497,
      sd: 11.69,
      d: 19.00125,
    },
    {
      label: "14",
      R: 60.93225,
      sd: 17.238,
      medium: 8,
      d: 5.47425,
    },
    {
      label: "15",
      R: -325.188,
      sd: 17.238,
      d: 46.38522359437118,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity-only patent reconstruction; exact factory prescription pairing is unproven. The stop and clear apertures are explicit modeling hypotheses; the retained rear-element SD17.238 mm branch is figure-informed, not a contrast-selected factory dimension. The125.8003235944 mm image plane is computed and fixed. Manufacturer0.7 m minimum focus is descriptive only; no finite conjugates, calibrated group motion or iris motion are certified. Native monochromatic diffraction is a scalar estimate. Earlier line-based OPL reference validation is withdrawn, including axial cases; numerical convergence does not establish independent physical or factory validation.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  groups: [
    {
      text: "10 FIXED",
      fromSurface: "1",
      toSurface: "8",
    },
    {
      text: "20 INNER UNIT",
      fromSurface: "9",
      toSurface: "11",
    },
    {
      text: "30 FLOATING UNIT",
      fromSurface: "12",
      toSurface: "13",
    },
    {
      text: "40 FIXED",
      fromSurface: "14",
      toSurface: "15",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "9",
      toSurface: "11",
    },
  ],
  layout: {
    yScFill: 0.3,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 18.8,
    maxTraceFieldDeg: 9.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
