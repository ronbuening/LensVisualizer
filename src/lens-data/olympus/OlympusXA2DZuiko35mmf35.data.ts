import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Olympus XA2 D.Zuiko 35mm f/3.5: 4 elements / 4 groups, all spherical.
 * Source: US 4,303,313 A, Embodiment 1, transcribed whole. The patent tabulates the design at f = 100; every R and d
 * is scaled ×0.35 to the 35 mm production focal length. nd/νd are as printed and read as d-line values (the patent's
 * aberration plots use the d and g lines). Glasses are the current OHARA rows that match the printed pairs; the
 * production supplier is not published.
 * The patent gives no image distance: the image plane is the derived paraxial back focus (16.943 mm), with no
 * best-focus shift, and it is soft at full aperture. The patent's half field is 31.5° (Fig. 3); the 135-format
 * corner is 31.21°.
 * The patent puts the stop between L3 and L4 without a position or diameter, and the repair manual shows the sector
 * blades (shutter and stop in one) without a measurable place in d6. The stop is placed from Fig. 3: its distortion
 * fits 0.35–0.4 of d6 and its meridional field 0.2–0.25, so d6 is split at 0.30 from L3's rear vertex
 * (1.73145 + 4.04005 mm, total unchanged).
 * Semi-diameters are estimated, not maker dimensions. The patent's only section, Fig. 2, follows Embodiment 2's
 * spacing (15.9 px per unit at f = 100); Olympus's XA2 repair-manual drawing (p. A-16, 44.4 px/mm at 600 dpi from the
 * vertex span) shows the production lens. L1 (7.0) follows the repair-manual drawing; Fig. 2 draws it at about 5.3 mm,
 * which would vignette far more. L3 (4.7) is the height both drawings give. L4's rear face (6.6) and the land on its
 * front face (rimExtensionSd 6.6; curved cap 5.0) follow both drawings (6.4–6.8). L2 is drawn 5.1–6.2 mm; its front
 * face meets L1's rear face 5.74 mm from the axis, so it stops at 5.6, and checks.gapSagFrac 0.96 admits that
 * L1-rear / L2-front pair. The corner chief ray needs 4.71 mm at L2's front face, so the whole frame is covered;
 * the corners still vignette (about 56 % geometric transmission wide open).
 * Infinity focus only; no variable gaps. focus.closeFocusM 1e15 is a placeholder for that.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-xa2-d-zuiko-35-f35",
  maker: "Olympus",
  name: "OLYMPUS D.ZUIKO 35mm f/3.5 (Olympus XA2)",
  subtitle: "US 4,303,313 A, Embodiment 1 — XA2 production correlation",
  visible: true,
  layout: {
    yScFill: 0.35,
  },
  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "DESIGN f = 35.0 mm",
      "DESIGN F/3.5",
      "ALL SPHERICAL",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      marketing: 35,
      design: 35.0,
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
      glass: "S-LAL10 (OHARA)",
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
      glass: "S-TIH11 (OHARA)",
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
      glass: "S-BAH27 (OHARA)",
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
      glass: "S-LAH51 (OHARA)",
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
      sd: 5.6,
      medium: 2,
    },
    {
      label: "4",
      R: 16.05765,
      d: 1.9495,
      sd: 5.6,
    },
    {
      label: "5",
      R: 20.5184,
      d: 3.6959999999999997,
      sd: 4.7,
      medium: 3,
    },
    {
      label: "6",
      R: -27.2587,
      d: 1.73145,
      sd: 4.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.04005,
    },
    {
      label: "7",
      R: -7.0062999999999995,
      d: 1.337,
      sd: 5,
      rimExtensionSd: 6.6,
      medium: 4,
    },
    {
      label: "8",
      R: -10.3425,
      d: 16.943253243868504,
      sd: 6.6,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent tabulates no finite-distance state. The production XA2 focuses by turning the front lens through three zones (marks at 1.2 m, 2.7 m and infinity), down to a 1 m minimum distance.",
  },
  gaps: {},
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16],
  },
  groups: [
    { text: "FRONT (+)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (−)", fromSurface: "7", toSurface: "8" },
  ],
  checks: {
    gapSagFrac: 0.96,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
