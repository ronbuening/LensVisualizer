import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,352,544, sole example / claim 1, uniform conditional 28 mm scale.
 * All source R/d/n/V cells unchanged. Six separate singlets, not seven glasses.
 * Probable 1985 catalog 6/6 target; undated 7/6 leaflet and the inconsistent
 * 0181 MC-sheet drawing remain unresolved production-source conflicts.
 * Contextual nominal d-line from Figure 2 d/F/g/C labels, not a table subscript.
 * Source Figure 1 clear-height hypotheses are not factory aperture dimensions.
 * Initial middle clear caps overlapped across d8; minimum outward 0.01 mm
 * axial-beam caps at R7/R8 and shared L5 rim avoid any gap-sag override.
 * This inferred rim revision changes no source radius, thickness, index or Abbe value.
 * R4 is the reduced spherical clear arc, not the outer stepped shoulder.
 * The d6 midpoint iris is inferred, not a printed stop location.
 * Unprinted terminal interval is the literal Gaussian infinity BFD.
 * Straight-helicoid unit focus is inferred from the maker leaflet; no floating
 * elements are described. The patent prints only the infinity prescription.
 * For the 300 mm object-to-film distance, solve (A+qC)(300-37.828-q)+B+qD=0
 * for the first-to-last-vertex air-space ray matrix: A=1.311986362609,
 * B=27.428177214772 mm, C=-0.035747659648 /mm, D=0.014868185166.
 * The physical root q=40.2338651096151 mm extends the whole lens by
 * 3.5325432456011 mm from infinity BF=36.701321864014034 mm.
 * This calculated close state is not a source-published finite prescription.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-mc-auto-w-28mm-f28",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO MC AUTO-W 28mm f/2.8",
  subtitle: "US 4,352,544, Sole Example — qualified production correlation",
  visible: true,
  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 6,
    specs: [
      "6 ELEMENTS / 6 GROUPS",
      "DESIGN f = 27.97 mm",
      "DESIGN F/2.80",
      "ALL SPHERICAL",
    ],
    focalLengthMm: {
      marketing: 28,
      design: 28,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "US 4,352,544",
    patentYear: 1982,
    authors: ["Toshihiro Imai"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.7,
      indexReference: "d",
      glass: "Unidentified historical melt",
      role: "Positive front meniscus",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.27,
      indexReference: "d",
      glass: "Unidentified historical melt",
      role: "Negative front meniscus",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.8044,
      vd: 39.62,
      indexReference: "d",
      glass: "Unidentified historical melt",
      role: "Positive rear-component singlet",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.71,
      indexReference: "d",
      glass: "Unidentified historical melt",
      role: "Negative singlet after the iris",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.27,
      indexReference: "d",
      glass: "Unidentified historical melt",
      role: "Air-spaced positive meniscus",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.61272,
      vd: 58.75,
      indexReference: "d",
      glass: "Unidentified historical melt",
      role: "Rear positive singlet",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 74.732,
      d: 2.632,
      sd: 16.7,
      medium: 1,
    },
    {
      label: "2",
      R: 272.664,
      d: 0.084,
      sd: 16.7,
    },
    {
      label: "3",
      R: 35.867999999999995,
      d: 1.764,
      sd: 14.5,
      medium: 2,
    },
    {
      label: "4",
      R: 10.836,
      d: 15.064,
      sd: 9.7,
    },
    {
      label: "5",
      R: 24.5,
      d: 8.4,
      sd: 10,
      medium: 3,
    },
    {
      label: "6",
      R: -34.804,
      d: 1.274,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.274,
    },
    {
      label: "7",
      R: -23.884,
      d: 1.1760000000000002,
      sd: 6.68,
      medium: 4,
    },
    {
      label: "8",
      R: 27.887999999999998,
      d: 1.456,
      sd: 6.64,
    },
    {
      label: "9",
      R: -43.624,
      d: 2.072,
      sd: 6.85,
      medium: 5,
    },
    {
      label: "10",
      R: -16.464,
      d: 0.084,
      sd: 6.85,
    },
    {
      label: "11",
      R: 295.596,
      d: 2.548,
      sd: 9.5,
      medium: 6,
    },
    {
      label: "12",
      R: -27.832,
      sd: 9.5,
    },
  ],
  focus: {
    closeFocusM: 0.3,
    description:
      "Unit focus with a straight helicoid; the whole lens moves toward the object to focus at 0.3 m. Close-focus travel is calculated from the infinity prescription.",
  },
  gaps: { "12": { label: "BF", values: [[36.701321864014034, 40.2338651096151]] } },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  layout: {
    yScFill: 0.72,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
