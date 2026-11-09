import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,844,640 (Jihei Nakagawa, Olympus Optical), sole example, printed twice with identical values: in the
 * description table (col. 3) and in claim 1 (col. 4); section in Fig. 1. It is associated with the OM-system
 * H.Zuiko Auto-W 35mm f/2 (8 elements / 7 groups); this is a patent design, not a confirmed factory prescription.
 * Scale: the patent is normalized to f = 1.0. Every printed R and d and the printed back focus are multiplied by
 * exactly 35 (computed EFL 34.998 mm). All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, d-line n, Abbe number, f = 1.0, f_B = 1.1338 (39.683 mm here), aperture ratio 1:2, 2ω = 64°.
 * Both tables print r5 = 81.3104 and r7 = 0.7053 (24.6855 mm). The PhotonsToPhotos transcription lists r7 as
 * 0.7035 (24.6225 mm); that radius gives a back focus of 39.585 mm instead of the printed 39.683 mm, so the
 * printed 0.7053 is kept.
 * Image plane: the final gap keeps the printed back focus; the paraxial back focus is 39.685 mm, 0.002 mm longer.
 * Stop: the patent neither prints nor draws one. It sits in the 4.7145 mm air space d9 between the cemented pair and
 * the biconcave element, 1.6745 mm behind S9 and 3.04 mm ahead of S10, as in the PhotonsToPhotos layout; its radius
 * is set by the paraxial entrance pupil at f/2.
 * Semi-diameters are inferred, none is printed. They start from the PhotonsToPhotos clear diameters and are checked
 * against Fig. 1, scaled by the axial vertex span and by the cemented pair's height (L1, L2, L3 and the pair agree
 * with the figure to within about 5 %). S4 stays at 10.0 mm (figure about 10.5 mm, PhotonsToPhotos 10.235 mm): its
 * deep concave face reaches the validator's rim-slope limit there. Fig. 1 draws L5 and L6 square-cut and touching at
 * the rim, at about the height of L7 (about 11.5 mm); their facing surfaces S11 and S12 meet at 11.07 mm, so S11–S13
 * are 11.0 mm, 0.02 mm short of contact, and `checks.gapSagFrac` is 0.99 to admit the S11/S12 pair. S10 (10.77 mm) matches the
 * end of L5's front curve before the small chamfer the figure draws.
 * Element names follow Fig. 1, which labels the seven components L1–L7; the cemented fourth component is L4a + L4b.
 * Focus: the patent prints the infinity state only and names no focusing motion, so no gap varies. The production
 * lens focuses as a unit on a straight helicoid to 0.3 m; that movement is not modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-auto-w-35mm-f2",
  maker: "Olympus",
  name: "OLYMPUS H.ZUIKO AUTO-W 35mm f/2",
  subtitle: "US 3,844,640, Sole example \u2014 probable to strong match to the production lens",
  catalog: {
    specs: ["8 ELEMENTS / 7 GROUPS", "DESIGN f = 35 mm", "DESIGN F/2", "ALL SPHERICAL", "PATENT f = 1 SCALED \u00d7 35"],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: {
      marketing: 35,
      design: 35,
    },
    fNumber: {
      marketing: 2,
      design: 2,
    },
    closeFocusM: {
      marketing: 0.3,
    },
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
  },
  source: {
    patentNumber: "US 3,844,640",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1974,
    authors: ["Jihei Nakagawa"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  layout: {
    yScFill: 0.4,
  },
  checks: {
    gapSagFrac: 0.99,
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7234,
      vd: 37.9,
      glass: "S-BAH28 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 58.75746376009973,
      role: "Positive front meniscus, convex to the object; the patent sets its power for distortion and lateral color correction.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.5163,
      vd: 64.0,
      glass: "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -32.91825065018318,
      role: "Strong negative meniscus with a deep rear face; gives the long back focus and keeps the Petzval sum small.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.8052,
      vd: 25.4,
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -31.524341519145427,
      role: "Nearly plano-concave dense-flint negative; its rear face nearly matches L4a's front across a thin air space for edge coma.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.8,
      glass: "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 20.8629063870343,
      cemented: "D1",
      role: "High-index biconvex front member of the cemented pair ahead of the stop; the strongest positive element.",
      diagramLabel: "L4a",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.699,
      vd: 30.1,
      glass: "S-TIM35 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -223.0025182224957,
      cemented: "D1",
      role: "Weak flint negative meniscus cemented behind L4a; the patent uses the cemented pair for chromatic correction.",
      diagramLabel: "L4b",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7174,
      vd: 29.5,
      glass: "S-TIH1 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -32.89242292571106,
      role: "Thick biconcave flint negative behind the stop; the only negative element of the rear group.",
      diagramLabel: "L5",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7292,
      vd: 54.6,
      glass: "S-LAL18 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 37.59930840993501,
      role: "Positive meniscus, convex to the image, close behind L5; the patent ties that short air space to coma and distortion.",
      diagramLabel: "L6",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      glass: "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 50.446655427022904,
      role: "Rear biconvex positive element; shares the final convergence to the image with L6.",
      diagramLabel: "L7",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 27.2335,
      sd: 19.94,
      d: 6.7935,
      medium: 1,
    },
    {
      label: "2",
      R: 67.8615,
      sd: 19.94,
      d: 0.14,
    },
    {
      label: "3",
      R: 35.014,
      sd: 16.19,
      d: 2.2365,
      medium: 2,
    },
    {
      label: "4",
      R: 11.193,
      sd: 10,
      d: 11.6095,
    },
    {
      label: "5",
      R: 2845.864,
      sd: 9.46,
      d: 2.9155,
      medium: 3,
    },
    {
      label: "6",
      R: 25.1475,
      sd: 9.06,
      d: 0.5495,
    },
    {
      label: "7",
      R: 24.6855,
      sd: 10.01,
      d: 5.0435,
      medium: 4,
    },
    {
      label: "8",
      R: -47.9535,
      sd: 10.01,
      d: 0.9975,
      medium: 5,
    },
    {
      label: "9",
      R: -69.853,
      sd: 10.01,
      d: 1.6745,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.04,
    },
    {
      label: "10",
      R: -28.014,
      sd: 10.77,
      d: 4.3645,
      medium: 6,
    },
    {
      label: "11",
      R: 159.4005,
      sd: 11.0,
      d: 1.4,
    },
    {
      label: "12",
      R: -60.9,
      sd: 11.0,
      d: 3.885,
      medium: 7,
    },
    {
      label: "13",
      R: -19.4145,
      sd: 11.0,
      d: 0.1015,
    },
    {
      label: "14",
      R: 92.302,
      sd: 10.97,
      d: 2.9155,
      medium: 8,
    },
    {
      label: "15",
      R: -56.035,
      sd: 10.97,
      d: 39.683,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The patent names no focusing group or motion and prints the infinity state only, with its back focus of 1.1338 at f = 1 (39.683 mm here), so the lens is modeled at infinity with no focus movement. The production lens focuses as a unit to Olympus's retail minimum of 0.3 m; that movement is not modeled.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 6,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 64,
    maxTraceFieldDeg: 32.0,
  },
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],
} satisfies LensDataV2Input;
export default LENS_DATA;
