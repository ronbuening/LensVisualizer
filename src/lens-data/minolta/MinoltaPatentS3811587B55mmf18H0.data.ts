/**
 * JP S38-11587 B, SOLE UNNUMBERED EXAMPLE; hidden STATIC H0, not a ready model.
 * Source F=1.0 is normalized. All R and internal d use hypothetical55mm/source-unit
 * scaling, NOT source millimetres or an exact-EFL fit. EFL55.006509819821mm is derived.
 * Probable SR-109 pictured Auto Rokkor55/1.8 family; rival50/1.8 identities remain.
 * Six literal nd/νd pairs, explicit d-line, no vendor-glass or full-dispersion claims.
 * Eleven original spherical interfaces plus inserted STO. t6=.2017 source unit is
 * split by inferred pupil conjugacy using printed P1=.5419 imageward from V1.
 * P1 is NOT the physical iris coordinate. Stop z=.408577964883395 source unit.
 * Iris radius is derived from source F1.8; no authored sd overrides the stop.
 * Last d is independent d-line infinity BFL; no finite focus/zoom law or mount claim.
 * H0 clear caps and rim extensions are rough Figure1 construction hypotheses,
 * not published factory dimensions. Opaque flat lands approximate drawn chamfers.
 * Source46deg full field stays distinct from maker43deg. No image circle is invented.
 * Source inequalities conflict; all printed variants are retained without repair.
 * No native geometry, finite-aperture rays, pupils, MTF, build or browser pass.
 * All default checks are retained; no gap-sag override or shared-engine edits.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "minolta-patent-s38-11587-55mm-f18-h0",
  maker: "Minolta",
  name: "MINOLTA PATENT 55mm f/1.8 (S38-11587, hypothetical scale)",
  subtitle: "JP S38-11587 B sole example; probable SR-109 Auto Rokkor family, not factory-exact; hidden unvalidated H0",
  visible: false,
  catalog: {
    specs: [
      "6 ELEMENTS / 5 GROUPS",
      "HYPOTHETICAL 55x SOURCE SCALE",
      "SOURCE F/1.8 AND 46° FULL FIELD",
      "INFINITY ONLY; UNVALIDATED H0",
    ],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      design: 55.00650981982096,
    },
    fNumber: {
      design: 1.8,
    },
  },
  source: {
    patentNumber: "JP S38-11587 B",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1963,
    authors: ["Yoshiya Matsui"],
    assignees: ["Minolta Camera Co., Ltd."],
    errata: [
      {
        status: "unresolved",
        note: "Printed condition differs: page1 n5−n4>.0065, page2 n5−n4>.065, page3 n5−n5>.065. Literal example preserved; no emendation.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      glass: "Unmatched (literal patent nd / νd; vendor and full dispersion unspecified)",
      focalLengthMm: 78.04691431299393,
      role: "Front positive meniscus. It shares the source nd/νd pair with L2, while its curvatures and thickness are distinct.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      glass: "Unmatched (literal patent nd / νd; vendor and full dispersion unspecified)",
      focalLengthMm: 48.88722805194922,
      role: "Second positive meniscus, air-spaced from L1 by t2=.00300 source unit. Together L1 and L2 form the front positive subsystem.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.699,
      vd: 30.1,
      indexReference: "d",
      glass: "Unmatched (literal patent nd / νd; vendor and full dispersion unspecified)",
      focalLengthMm: -26.066103467089356,
      role: "Negative meniscus ahead of the stop gap. The source t4=.0360 separates it from L2; its strongly curved rear face bounds the central air space.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5749,
      vd: 39.2,
      indexReference: "d",
      glass: "Unmatched (literal patent nd / νd; vendor and full dispersion unspecified)",
      focalLengthMm: -22.519187483639865,
      role: "Biconcave negative front member of the sole cemented pair, with the source lowest index nd1.5749. Its rear boundary is the shared r8 surface.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6667,
      vd: 48.4,
      indexReference: "d",
      glass: "Unmatched (literal patent nd / νd; vendor and full dispersion unspecified)",
      focalLengthMm: 24.679387999999545,
      role: "Biconvex positive rear member of the cemented pair. The literal n5−n4=.0918 is retained, and no correction of the inconsistent textual thresholds is applied.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 47.2,
      indexReference: "d",
      glass: "Unmatched (literal patent nd / νd; vendor and full dispersion unspecified)",
      focalLengthMm: 53.69262056523374,
      role: "Rear biconvex positive singlet, separated from L5 by t9=.0030. It ends the source train; the following image distance is calculated, not tabulated.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 40.854,
      d: 5.5,
      sd: 18.3,
      medium: 1,
    },
    {
      label: "2",
      R: 169.565,
      d: 0.165,
      sd: 18.3,
    },
    {
      label: "3",
      R: 22.539,
      d: 7.348,
      sd: 15.2,
      medium: 2,
    },
    {
      label: "4",
      R: 61.1765,
      d: 1.98,
      sd: 15.2,
    },
    {
      label: "5",
      R: 94.028,
      d: 1.65,
      sd: 15.2,
      medium: 3,
    },
    {
      label: "6",
      R: 15.1525,
      d: 5.828788068586729,
      sd: 10.2,
      rimExtensionSd: 15.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.264711931413272,
    },
    {
      label: "7",
      R: -18.557,
      d: 0.88,
      sd: 9.4,
      medium: 4,
      rimExtensionSd: 11.0,
    },
    {
      label: "8",
      R: 43.56,
      d: 5.1535,
      sd: 11.0,
      medium: 5,
    },
    {
      label: "9",
      R: -25.19,
      d: 0.165,
      sd: 11.0,
    },
    {
      label: "10",
      R: 117.315,
      d: 3.3,
      sd: 12.5,
      medium: 6,
    },
    {
      label: "11",
      R: -51.2985,
      d: 32.56998678531684,
      sd: 12.5,
    },
  ],
  focus: {
    closeFocusM: 1,
    description:
      "Fixed infinity source construction. closeFocusM=1 is an inactive schema placeholder; no variable gaps or finite-conjugate law are authored. Manufacturer 0.5m is context only.",
  },
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 46,
    maxTraceFieldDeg: 23,
  },
  groups: [
    {
      text: "Fixed infinity assembly",
      fromSurface: "1",
      toSurface: "11",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  layout: {
    scFill: 0.55,
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
