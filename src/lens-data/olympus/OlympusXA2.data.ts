import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** QUALIFIED REPRESENTATIVE. Native reference diagnostics and integration evidence accompany the package.
 * Literal whole embodiment; assumed d reference; unmatched glasses.
 * Source-derived plane is soft and strongly vignetted; numerical convergence is not good performance.
 * Source31.5deg differs from catalog corner31.086275deg. No diagnostic focus shift is authored.
 * Midpoint stop and engineered rims are hypotheses, not recovered factory dimensions.
 * No variable gaps. 1e9 m focus scalar is only a schema sentinel, not a finite-focus claim.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-xa2-35mm-f35",
  maker: "Olympus",
  name: "OLYMPUS XA2 35mm f/3.5",
  subtitle: "US 4,303,313 A EMBODIMENT 1 — REPRESENTATIVE SOURCE DESIGN",
  visible: true,
  layout: {
    yScFill: 0.35,
  },
  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "STATIC INFINITY REPRESENTATIVE",
      "ASSUMED D REFERENCE",
      "SOURCE HALF FIELD 31.5°; QUALIFIED REFERENCE ONLY",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      marketing: 35,
      design: 35.007882081401284,
    },
    fNumber: {
      marketing: 3.5,
      design: 3.5,
    },
    closeFocusM: {
      marketing: 1,
    },
  },
  source: {
    patentNumber: "US 4,303,313 A",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 1981,
    authors: ["Toshihiro Imai", "Hiroshi Takase"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.25,
      indexReference: "d",
      indexReferenceNote:
        "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      glass: "Unmatched (literal source n/v; no named catalog glass)",
      focalLengthMm: 19.839785679205562,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.71,
      indexReference: "d",
      indexReferenceNote:
        "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      glass: "Unmatched (literal source n/v; no named catalog glass)",
      focalLengthMm: -15.49777259610344,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.70154,
      vd: 41.1,
      indexReference: "d",
      indexReferenceNote:
        "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      glass: "Unmatched (literal source n/v; no named catalog glass)",
      focalLengthMm: 17.2366927469433,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.18,
      indexReference: "d",
      indexReferenceNote:
        "Assumed helium-d convention; source n/v definitions do not establish numerical reference wavelength.",
      glass: "Unmatched (literal source n/v; no named catalog glass)",
      focalLengthMm: -33.5548413997538,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 9.817499999999999,
      d: 3.1919999999999997,
      sd: 7,
      medium: 1,
    },
    {
      label: "2",
      R: 27.1208,
      d: 0.9274999999999999,
      sd: 7,
    },
    {
      label: "3",
      R: -51.5333,
      d: 1.029,
      sd: 5,
      medium: 2,
    },
    {
      label: "4",
      R: 16.05765,
      d: 1.9495,
      sd: 5,
    },
    {
      label: "5",
      R: 20.5184,
      d: 3.6959999999999997,
      sd: 6,
      medium: 3,
    },
    {
      label: "6",
      R: -27.2587,
      d: 2.8857499999999994,
      sd: 6,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.8857499999999994,
    },
    {
      label: "7",
      R: -7.0062999999999995,
      d: 1.337,
      sd: 5,
      medium: 4,
    },
    {
      label: "8",
      R: -10.3425,
      d: 16.943253243868504,
      sd: 5,
    },
  ],
  focus: {
    closeFocusM: 1000000000.0,
    description:
      "NO_INTERNAL_RECONSTRUCTION: static infinity-only source. Required 1e9 m schema sentinel is NOT a validated close endpoint. Generic slider/fallback labels can appear but do not represent recovered optical conjugates. No finite movement law.",
  },
  gaps: {},
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16],
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
