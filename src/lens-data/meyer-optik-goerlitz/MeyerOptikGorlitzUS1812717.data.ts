import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,812,717 A, Paul Rudolph, "Lens System" (filed October 14, 1926; German priority August 18, 1926; granted
 * June 30, 1931). Sole numerical example: an objective of five separated lenses, relative opening 1:3.2, focal
 * length 100, printed diameter 31.3. Radii, thicknesses, air spaces, nD and ν are the printed values at the patent's
 * own scale; nothing is scaled.
 *
 * Printed: all eleven signed radii, every thickness and air space, the diaphragm B (b1 = 5.41 behind r5, b2 = 2.32
 * before r6), l1 = 0 (L1 touches L2′ at the vertex; the air between them opens off axis), the single cemented pair
 * L2′/L2 on the flat r4, and nD / ν for the three glass pairs L1 = L3, L2′ = L5, L2 = L4.
 *
 * Glass: indices are stored against the sodium D line, as printed. L2′/L5 and L2/L4 carry modern catalogue rows
 * that match the printed nD and ν at the D line (N-BALF4: nD 1.57946 / ν 53.86; QF3: nD 1.57490 / ν 41.29); they
 * supply the dispersion curve only and do not name the 1926 melts. L1/L3 (nD 1.5331 / ν 58.0) matches the discontinued
 * Hoya zinc crown ZNC1 (nD 1.53312 / ν 58.05 at the D line), the equivalent of Schott's ZK1 zinc-crown type.
 *
 * Inferred: the back focus is the computed paraxial value (the patent prints none). Clear semi-diameters are
 * estimates: raised only as far as the f/3.2 axial beam needs, with L2's rear rim held in front of the printed stop
 * plane. The gap-sag check is relaxed to 0.96 because the patent figure draws L3 and L4 meeting at the rim. Against
 * the drawing sheet the relative rim heights agree within about 8 %; the sheet draws the whole lens about 14 % smaller
 * than the f/3.2 beam needs, and draws L4 square-cut at a height its front face cannot reach without meeting L3.
 *
 * Infinity only: the patent gives no close-focus data or field angle. No assignee is printed; Rudolph designed for
 * Hugo Meyer & Co. of Görlitz at the time. The German patent DE 456,912 prints this same example as its Example 2, and
 * a collector reference cites DE 456,912 for the Makro-Plasmat; no production prescription is confirmed.
 */
const LENS_DATA = {
  schema: 2,
  key: "meyer-optik-gorlitz-100mm-f32-us1812717",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ 100mm f/3.2 (US 1,812,717 Design)",
  subtitle: "US 1,812,717 A, sole example — Rudolph Plasmat-lineage design",
  visible: true,
  catalog: {
    specs: ["6 ELEMENTS / 5 GROUPS", "DESIGN F/3.2", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      design: 100.11,
    },
    fNumber: {
      design: 3.2,
    },
  },
  source: {
    patentNumber: "US 1,812,717 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1931,
    authors: ["Paul Rudolph"],
    assignees: [],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive Meniscus",
      nd: 1.5331,
      vd: 58,
      indexReference: "D",
      glass: "ZNC1 (Hoya catalog equivalent; zinc crown)",
      role: "Front collective meniscus; touches L2′ on the axis",
    },
    {
      id: 2,
      name: "L2′",
      label: "L2′",
      type: "Plano-Convex Positive",
      nd: 1.5795,
      vd: 53.8,
      indexReference: "D",
      glass: "N-BALF4 (Schott)",
      role: "Positive front half of the thick cemented dispersive component",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L2",
      label: "L2",
      type: "Plano-Concave Negative",
      nd: 1.5749,
      vd: 41.3,
      indexReference: "D",
      glass: "QF3 (CDGM)",
      role: "Negative rear half of the cemented component, deeply concave toward the stop",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L3",
      label: "L3",
      type: "Positive Meniscus",
      nd: 1.5331,
      vd: 58,
      indexReference: "D",
      glass: "ZNC1 (Hoya catalog equivalent; zinc crown)",
      role: "Weak collective meniscus just behind the stop",
    },
    {
      id: 5,
      name: "L4",
      label: "L4",
      type: "Negative Meniscus",
      nd: 1.5749,
      vd: 41.3,
      indexReference: "D",
      glass: "QF3 (CDGM)",
      role: "Dispersive meniscus of the rear member, concave toward the stop",
    },
    {
      id: 6,
      name: "L5",
      label: "L5",
      type: "Positive Meniscus",
      nd: 1.5795,
      vd: 53.8,
      indexReference: "D",
      glass: "N-BALF4 (Schott)",
      role: "Rear collective meniscus",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.46,
      d: 3.86,
      sd: 16,
      medium: 1,
    },
    {
      label: "2",
      R: 185.5,
      d: 0,
      sd: 16,
    },
    {
      label: "3",
      R: 29.37,
      d: 4.17,
      sd: 15.02,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 2.01,
      sd: 15.02,
      medium: 3,
    },
    {
      label: "5",
      R: 18.55,
      d: 5.41,
      sd: 13.09,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.32,
    },
    {
      label: "6",
      R: -77.3,
      d: 1.7,
      sd: 12.29,
      medium: 4,
    },
    {
      label: "7",
      R: -37.1,
      d: 1.08,
      sd: 12.29,
    },
    {
      label: "8",
      R: -25.66,
      d: 3.09,
      sd: 12.27,
      medium: 5,
    },
    {
      label: "9",
      R: -208.7,
      d: 8.97,
      sd: 12.68,
    },
    {
      label: "10",
      R: -219.5,
      d: 4.17,
      sd: 16,
      medium: 6,
    },
    {
      label: "11",
      R: -32.31,
      d: 80.54759592754,
      sd: 16,
    },
  ],
  aperture: {
    nominalFNumber: 3.2,
    fStops: [3.2, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [{ text: "C1", fromSurface: "3", toSurface: "5" }],
  checks: { gapSagFrac: 0.96 },
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
