import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP 2025-187904 A, Embodiment 1 (Cosina Co., Ltd.; Tatsuya Moriyama): f = 48.455 mm, Fno 2.254, ω = 23.797°,
 * 7 elements / 6 groups, all surfaces spherical (¶0040). No scale factor is applied. Probable match to the 2024
 * Voigtländer Color-Skopar 50mm F2.2 VM (Cosina: 7/6 with three anomalous partial dispersion elements); not a
 * confirmed factory prescription.
 * R, d, nd and νd follow Table 2 as printed. Table 2 gives L7 nd = 1.61339 while Table 1's condition row gives
 * 1.61340; the surface table is used. The stop is Table 2's STO row, 4.28 mm behind S6 and 6.31 mm ahead of S8; its
 * diameter is not printed, so the iris radius is derived from F2.254.
 * Unit focus (¶0023): Table 3 prints D14 = 13.99 mm at infinity and 17.96 mm with the object 642.00 mm ahead of S1
 * (702.45 mm object to image). Both rows are kept as printed. The surfaces sum to 56.48 mm against Table 1's
 * L-H = 56.482 mm and L-BF = 13.994 mm; the printed D14 lies 0.009 mm behind the paraxial focus (13.981 mm) and is
 * not refocused.
 * Semi-diameters are not printed. They are estimated from Fig. 1 (18.9 px/mm at 300 dpi from the S1–S14 vertex
 * span, checked on the S1 and S14 arcs) and floor-checked by real-ray trace at both printed focus states. The
 * cemented pair is 8.7 mm on all three faces, just inside L7 as Fig. 1 draws it. The figure reads L4 8.6 and L5
 * 8.3 mm; the pair is held at 8.7 mm because smaller rims there cut more of the wide-open beam at mid-field. The
 * other rims agree with Fig. 1 within about 5 %. Fig. 1 draws flat lands with square outer edges on S6 (curve end
 * about 9.0 mm, edge 10.0 mm) and S13 (9.7 mm, 12.7 mm) and draws L1 square; S2, S6 and S13 carry
 * `rimExtensionSd` lands out to the element's outer rim (12.0, 10.25 and 12.25 mm), which change no ray. At full
 * aperture the rims clip part of the edge-of-field beam.
 * Element names follow the patent: L6 is its name for the L4/L5 cemented pair, so the last two elements are L7 and
 * L8. Groups G1 (L1–L3) and G2 (L4–L8) are the patent's.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-color-skopar-50mm-f22-vm",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 50mm f/2.2 VM",
  subtitle: "JP 2025-187904 A, Embodiment 1 — probable match to the 2024 production lens",
  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 6,
    closeFocusM: {
      marketing: 0.5,
    },
    focalLengthMm: {
      marketing: 50,
      design: 48.455,
    },
    fNumber: {
      marketing: 2.2,
      design: 2.254,
    },
    specs: ["7 ELEMENTS / 6 GROUPS", "DESIGN f = 48.455 mm", "DESIGN F/2.254", "ALL SPHERICAL", "3 APD GLASS ELEMENTS"],
  },
  source: {
    patentNumber: "JP 2025-187904 A",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 2025,
    authors: ["Tatsuya Moriyama"],
    assignees: ["Cosina Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      glass: "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 56.999120795327535,
      role: "Front positive meniscus of the first group; its nd 2.001 glass meets the patent's Gr1P-nd > 1.90 condition for spherical aberration and coma control in a short lens (¶0034).",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 54.28910636913114,
      role: "Second positive meniscus of the first group; a low-dispersion crown with positive anomalous partial dispersion that corrects the front group's secondary color (¶0033).",
      apd: "inferred",
      apdNote:
        "Cosina marks this position as anomalous partial dispersion glass; the patent's nd/νd equal HOYA FCD1, whose catalog ΔPgF of +0.037 on the patent's normal line matches the printed Gr1P-ΔPgF = 0.0374.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.80808,
      vd: 22.76,
      indexReference: "d",
      glass: "FD225 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -28.533102950993445,
      role: "Negative meniscus closing the first group, concave to the stop; the air lens AL1 between it and L2 gives the first group its telephoto Gauss form (¶0028).",
      apd: "inferred",
      apdNote:
        "Cosina marks this position as anomalous partial dispersion glass; the patent's nd/νd equal HOYA FD225, a dense flint whose θgF lies well above the normal line.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      glass: "E-FD4 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -21.460133511738967,
      role: "Negative meniscus at the front of the cemented pair behind the stop; the dense-flint partner of L5.",
      cemented: "L6",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.90365,
      vd: 31.31,
      indexReference: "d",
      glass: "TAFD25 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 13.931109515814104,
      role: "Strong positive meniscus of the cemented pair; the pair (f21 = 41.06 mm) carries most of the rear group's power and shortens the lens (¶0029, ¶0035).",
      cemented: "L6",
    },
    {
      id: 6,
      name: "L7",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.61339,
      vd: 44.27,
      indexReference: "d",
      glass: "S-NBM51 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 178.2074251905621,
      role: "Weak positive meniscus concave to the object; its glass meets the patent's Gr2P-nd and Gr2P-νd conditions for color correction in the rear group (¶0013).",
      apd: "inferred",
      apdNote:
        "Cosina marks this position as anomalous partial dispersion glass; the patent's nd/νd equal OHARA S-NBM51, whose θgF lies below the normal line.",
    },
    {
      id: 7,
      name: "L8",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.54814,
      vd: 45.83,
      indexReference: "d",
      glass: "E-FEL1 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -64.18021769580106,
      role: "Thick rear negative meniscus concave to the object; a negative last lens shortens the back focus and with it the total length (¶0029).",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 28.618,
      d: 3.28,
      medium: 1,
      sd: 12.0,
    },
    {
      label: "2",
      R: 54.125,
      d: 0.15,
      sd: 11.5,
      rimExtensionSd: 12.0,
    },
    {
      label: "3",
      R: 20.865,
      d: 4.2,
      medium: 2,
      sd: 11.25,
    },
    {
      label: "4",
      R: 85.888,
      d: 0.64,
      sd: 11.25,
    },
    {
      label: "5",
      R: 367.195,
      d: 0.9,
      medium: 3,
      sd: 10.25,
    },
    {
      label: "6",
      R: 21.671,
      d: 4.28,
      sd: 9.25,
      rimExtensionSd: 10.25,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.31,
    },
    {
      label: "8",
      R: 52.439,
      d: 0.9,
      medium: 4,
      sd: 8.7,
    },
    {
      label: "9",
      R: 12.289,
      d: 5.47,
      medium: 5,
      sd: 8.7,
    },
    {
      label: "10",
      R: 406.929,
      d: 3.02,
      sd: 8.7,
    },
    {
      label: "11",
      R: -54.915,
      d: 2.58,
      medium: 6,
      sd: 8.75,
    },
    {
      label: "12",
      R: -37.205,
      d: 7.46,
      sd: 8.75,
    },
    {
      label: "13",
      R: -11.604,
      d: 3.3,
      medium: 7,
      sd: 9.25,
      rimExtensionSd: 12.25,
    },
    {
      label: "14",
      R: -19.059,
      sd: 12.25,
    },
  ],
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "G2",
      fromSurface: "8",
      toSurface: "14",
    },
  ],
  doublets: [
    {
      text: "L6",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  focus: {
    closeFocusM: 0.70245,
    description:
      "PUBLISHED unit focus: the whole lens moves toward the object and only D14 changes (¶0017, ¶0023). Table 3 prints D14 = 13.99 mm at infinity and 17.96 mm at the shortest distance, with the object 642.00 mm ahead of S1: 702.45 mm from object to image, a 3.97 mm extension at a computed −0.08×. That printed close state is the 0.7 m limit of Cosina's rangefinder coupling; the lens's 0.5 m minimum focus, reached beyond the coupled range, is not printed and not modeled. Positions between the two printed states are interpolated by the app, not a published cam law.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 642,
        distanceReference: "first-surface",
        source:
          "JP 2025-187904 A, Embodiment 1, Table 3: D0 = 642.00 mm (object to S1) and D14 = 17.96 mm at the shortest photographing distance, both printed.",
      },
    ],
    published: [1],
  },
  gaps: {
    "14": { label: "D14", values: [[13.99, 17.96]] },
  },
  aperture: {
    nominalFNumber: 2.254,
    fStops: [2.254, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 10,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 47.594,
    maxTraceFieldDeg: 23.797,
  },
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
