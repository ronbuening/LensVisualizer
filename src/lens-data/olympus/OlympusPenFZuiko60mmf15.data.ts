import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JPS389224B sole example / Figure 1; conditional uniform 60/100 scale.
 * Source radii, spacings and glass values are unchanged, including R8=-43.1,
 * plane S6, both cemented groups and n6=1.5407 / V6=47.2.
 * Figure 2 d/g labels support the nominal d-line design convention; the table
 * itself has no spectral subscript. No exact historical melt is assigned.
 * Probable May 1968 B-6 stock 18-9202 pairing, not all-version factory identity.
 * Central d7 midpoint iris is a declared reconstruction; no source stop is marked.
 * Clear apertures are source-figure hypotheses with disclosed minimal axial design-beam
 * floors, not printed dimensions or filters. The reduced S7 clear arc remains distinct
 * from the wider outer/plane cemented rim.
 * A 1958 bilingual Olympus-affiliated primary paper identifies Yoshisada Hayamizu;
 * the Japanese patent prints 早水良定.
 * The unprinted infinity image interval is the Gaussian BFD, 30.088696438703977 mm.
 * Unit focus translates the whole lens toward the object; only the final gap varies.
 * For the maker's 0.8 m object-to-image distance, the paraxial lens matrix M=(A B; C D)
 * gives (A+q*C)*(800-47.1-q)+B+q*D=0, where 47.1 mm is the fixed vertex span.
 * The near-infinity root q=35.36165557633644 mm gives 5.272959137632468 mm travel.
 * This finite spacing is calculated, not a printed patent state or measured helicoid law.
 * Stopped-down f/2–16 controls are modeled settings, not source prescription rows.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-pen-f-g-zuiko-auto-t-60mm-f15",
  maker: "Olympus",
  name: "OLYMPUS G.ZUIKO AUTO-T 60mm f/1.5",
  subtitle: "JP S38-9224 B, Sole Example — probable Pen F production correlation",
  visible: true,
  catalog: {
    lensMounts: ["olympus-pen-f"],
    imageFormat: "half-frame-135",
    elementCount: 7,
    groupCount: 5,
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "DESIGN f = 60.00 mm",
      "DESIGN F/1.5",
      "ALL SPHERICAL",
      "HALF-FRAME",
    ],
    focalLengthMm: {
      marketing: 60,
      design: 60,
    },
    fNumber: {
      marketing: 1.5,
      design: 1.5,
    },
  },
  source: {
    patentNumber: "JP S38-9224 B",
    patentYear: 1963,
    authors: ["Yoshisada Hayamizu"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6385,
      vd: 55.5,
      indexReference: "d",
      glass: "Unmatched (historical glass)",
      role: "Front positive meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6584,
      vd: 50.8,
      indexReference: "d",
      glass: "Unmatched (historical glass)",
      role: "Second positive meniscus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex Positive",
      nd: 1.67,
      vd: 47.2,
      indexReference: "d",
      glass: "Unmatched (historical glass)",
      role: "Positive front member of central cemented group.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      glass: "Unmatched (historical glass)",
      role: "Negative rear member with a reduced clear arc.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6889,
      vd: 31.1,
      indexReference: "d",
      glass: "Unmatched (historical glass)",
      role: "Single negative meniscus.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.5407,
      vd: 47.2,
      indexReference: "d",
      glass: "Unmatched (historical glass)",
      role: "Negative front member of rear doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.4,
      indexReference: "d",
      glass: "Unmatched (historical glass)",
      role: "Positive rear member of rear doublet.",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64.2,
      d: 3.48,
      sd: 20.01,
      medium: 1,
    },
    {
      label: "2",
      R: 163.98,
      d: 0.15,
      sd: 20.01,
    },
    {
      label: "3",
      R: 48.6,
      d: 3.12,
      sd: 19.43,
      medium: 2,
    },
    {
      label: "4",
      R: 82.2,
      d: 0.15,
      sd: 19.43,
    },
    {
      label: "5",
      R: 26.7,
      d: 14.28,
      sd: 17.9,
      medium: 3,
    },
    {
      label: "6",
      R: "flat",
      d: 3,
      sd: 17.9,
      medium: 4,
    },
    {
      label: "7",
      R: 15.6,
      d: 4.5,
      sd: 10.93,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.5,
    },
    {
      label: "8",
      R: -25.86,
      d: 8.04,
      sd: 11.53,
      medium: 5,
    },
    {
      label: "9",
      R: -36.6,
      d: 0.18,
      sd: 11.53,
    },
    {
      label: "10",
      R: 78,
      d: 0.8999999999999999,
      sd: 11.5,
      medium: 6,
    },
    {
      label: "11",
      R: 27.599999999999998,
      d: 4.8,
      sd: 11.5,
      medium: 7,
    },
    {
      label: "12",
      R: -58.812,
      sd: 11.5,
    },
  ],
  focus: {
    closeFocusM: 0.8,
    description:
      "Unit focus moves the whole lens toward the object with fixed internal spacings. The close position is calculated for the manufacturer’s 0.8 m minimum focus distance.",
  },
  gaps: { "12": { label: "BF", values: [[30.088696438703977, 35.36165557633644]] } },
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  layout: {
    yScFill: 0.72,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
