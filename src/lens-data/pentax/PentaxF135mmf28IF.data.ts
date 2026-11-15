import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US 4,793,698 (Asahi Kogaku; Hirano), Example 1. A patent design associated with the smc PENTAX-F 135mm F2.8 [IF],
 * not a confirmed factory prescription; the later FA 135mm F2.8 [IF] shares those optics by report only.
 * Scale: every R and d is the printed f = 100 value × 1.35, giving EFL 135.007 mm.
 * Printed: R, d, Nd and νd at the d line, F2.8, half-field 9.4°, and d8, d11 and d13 at infinity and 1/4 magnification.
 * Derived: last gap 46.38522359437118 mm, the paraxial back focus at infinity, which puts the image plane 125.800 mm
 * from S1 at both focus states. The patent prints no object distance; the near state computes to 725 mm object to
 * image, about 3.6 % over the retail minimum focus used for closeFocusM.
 * Stop: the patent marks none. The iris is a fixed plane 75 % through the infinity d8, 30.7101375 mm from S1, sized
 * by paraxial EPD = F/N. The 75 % position is inferred; the field curves of Fig. 3 fit a fixed iris there and do
 * not fit one moving with unit 20.
 * Elements carry the patent's reference numerals: 12, 14, 16 and 18 in unit 10, 24 and 22 in unit 20, 32 and 42.
 * sd: inferred, not measured. S1 to S6, S8 to S11, S13 and S14 to S15 are read from Fig. 1 at its axial scale, and S7
 * keeps an earlier value within 1 % of it. The figure chamfers the rear rims of 16, 18 and 22, so S6, S8 and S11 stop
 * at the drawn cap ends, clear of every traced beam at both focus states. S8's rimExtensionSd 17.0 stands in for 18's
 * flat rim and chamfer, which one rim edge cannot draw, and keeps the land ahead of the iris plane. S12 at 12.0 sits
 * between the foot of 32's front bevel and its 12.27 outer rim, so the top edge leans the way the bevel does; any
 * lower costs mid-field light.
 * Erratum: the table and claim 7 print νd 27.5 for element 18, where nd 1.76182 is SF14 class at 26.5 and Figs. 2 and 3
 * fit 26.5. vd keeps the printed value and S-TIH14 catalog dispersion traces it at 26.5; see source.errata.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-f-135mm-f28-if",
  maker: "Pentax",
  name: "PENTAX SMC F 135mm f/2.8 [IF]",
  subtitle: "US 4,793,698, Example 1 — associated with the smc PENTAX-F 135mm F2.8 [IF]",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 7 GROUPS",
      "DESIGN f = 135 mm",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 1.35",
    ],
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
    errata: [
      {
        status: "unresolved",
        note: "The table and claim 7 print νd 27.5 for element 18 (i = 7), but nd 1.76182 is the SF14 class at 26.5, and Figs. 2 and 3 fit 26.5: their paraxial g-line offsets read +0.07 and +0.45 at f = 100; S-TIH14 traces +0.07 and +0.45, while νd 27.5 gives −0.16 and +0.14. Among Examples 2–5 only Example 4 uses this glass, and it prints 26.5; Examples 2 and 5 print 1.78470/26.2 and Example 3 prints 1.80518/25.4 for the same element. This file keeps the printed vd 27.5, and S-TIH14 catalog dispersion traces it at 26.5.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "12",
      label: "Element 12",
      diagramLabel: "12",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      indexReference: "d",
      focalLengthMm: 165.38620994641423,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Low-dispersion positive front meniscus of fixed unit 10",
    },
    {
      id: 2,
      name: "14",
      label: "Element 14",
      diagramLabel: "14",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61,
      indexReference: "d",
      focalLengthMm: 126.65958621482311,
      glass: "S-BAL35 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Second positive meniscus of fixed unit 10",
    },
    {
      id: 3,
      name: "16",
      label: "Element 16",
      diagramLabel: "16",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.8,
      indexReference: "d",
      focalLengthMm: 87.37968763004585,
      glass: "S-LAL8 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Third and strongest positive meniscus of fixed unit 10",
    },
    {
      id: 4,
      name: "18",
      label: "Element 18",
      diagramLabel: "18",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: -45.0252130367558,
      glass: "S-TIH14 (OHARA, SF14 class; patent prints νd 27.5 where this index is 26.5)",
      role: "Negative meniscus closing fixed unit 10, just ahead of the iris",
    },
    {
      id: 5,
      name: "24",
      label: "Element 24",
      diagramLabel: "24",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -54.06471997450982,
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative member of the cemented focusing unit 20",
      cemented: "C1",
    },
    {
      id: 6,
      name: "22",
      label: "Element 22",
      diagramLabel: "22",
      type: "Positive Meniscus",
      nd: 1.74077,
      vd: 27.8,
      indexReference: "d",
      focalLengthMm: 110.57789341393003,
      glass: "S-TIH13 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive member of the cemented focusing unit 20",
      cemented: "C1",
    },
    {
      id: 7,
      name: "32",
      label: "Element 32",
      diagramLabel: "32",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -287.7257967910607,
      glass: "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak negative meniscus forming focusing unit 30",
    },
    {
      id: 8,
      name: "42",
      label: "Element 42",
      diagramLabel: "42",
      type: "Biconvex Positive",
      nd: 1.53172,
      vd: 48.9,
      indexReference: "d",
      focalLengthMm: 96.9881887753813,
      glass: "LLF6 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Biconvex rear element forming fixed unit 40",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 73.92195,
      sd: 25.15,
      medium: 1,
      d: 5.83605,
    },
    {
      label: "2",
      R: 866.23965,
      sd: 25.15,
      d: 0.1755,
    },
    {
      label: "3",
      R: 43.6725,
      sd: 23.98,
      medium: 2,
      d: 6.04125,
    },
    {
      label: "4",
      R: 99.90405,
      sd: 23.98,
      d: 0.1755,
    },
    {
      label: "5",
      R: 30.52755,
      sd: 21.37,
      medium: 3,
      d: 6.27885,
    },
    {
      label: "6",
      R: 54.73305,
      sd: 19.7,
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
      sd: 15.7,
      rimExtensionSd: 17,
      d: 7.3375875,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "9",
      R: 89.6967,
      sd: 14.3,
      medium: 5,
      d: 2.06145,
    },
    {
      label: "10",
      R: 28.21095,
      sd: 14.3,
      medium: 6,
      d: 3.14415,
    },
    {
      label: "11",
      R: 40.99005,
      sd: 13,
    },
    {
      label: "12",
      R: -92.55195,
      sd: 12,
      medium: 7,
      d: 2.06145,
    },
    {
      label: "13",
      R: -247.3497,
      sd: 12.27,
    },
    {
      label: "14",
      R: 60.93225,
      sd: 18.3,
      medium: 8,
      d: 5.47425,
    },
    {
      label: "15",
      R: -325.188,
      sd: 18.3,
      d: 46.38522359437118,
    },
  ],
  focus: {
    closeFocusM: 0.7,
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 599.22,
        distanceReference: "first-surface",
        sourceMagnification: "1/4",
        source: "US 4,793,698, Example 1 (PDF p. 12): prints “a magnification of ¼” for the close-focus state whose gaps this keyframe carries, a magnification with no object distance. The object distance is solved from the prescription at that magnification; focused on its image plane the state gives 0.25001.",
      },
    ],
    published: [1],
    description:
      "PUBLISHED infinity and 1/4-magnification gaps. Units 20 and 30 move toward the image, by 24.78 mm and 14.87 mm, while units 10 and 40 and the iris stay fixed. At the printed 1/4 state the object-to-image distance computes to 725 mm, about 3.6 % over the retail 0.7 m minimum focus.",
  },
  gaps: {
    STO: { label: "d8b", values: [[2.4458625000000005, 27.2264625]] },
    "11": { label: "d11", values: [[14.51655, 4.6035]] },
    "13": { label: "d13", values: [[19.00125, 4.13235]] },
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
      text: "20 FOCUS",
      fromSurface: "9",
      toSurface: "11",
    },
    {
      text: "30 FOCUS",
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
      text: "C1",
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
