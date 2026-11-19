/*
CARL ZEISS JENA ANASTIGMATLINSE f/12.5 (von Rohr 1899, Fig. 140)

Source: M. von Rohr, Theorie und Geschichte des photographischen Objektivs (Berlin: Julius Springer, 1899), p. 379,
Fig. 140, "P. Rudolph: Anastigmatlinse 1:12.5"; source line "Angaben des Verfassers" (the author's own data). On
p. 380 von Rohr calls it a somewhat later, longer-focus form of the Series VII single lens, not the data of Rudolph's
patent (E.P. 19,509 of 1894), whose three examples all differ from this table.

Printed: r1..r5 = 14.7, 23.4, 11.2, 7.4, 15.4 (magnitudes); stop distance b1 = 1.9 in front of r1; d1..d4 = 1.3, 1.7,
1.7, 1.3; nD = 1.51743, 1.61002, 1.51156, 1.58254; reduced to fD = 100 mm; computed for 1:10.5 and omega = 34 deg.
Von Rohr marks nothing as assumed; he notes only that the drawing is approximate.

Added by this model: radius signs (-, +, -, -, -) from the figure and the element shapes Rudolph's patent describes;
the last gap as the computed paraxial back focus (EFL 100.714, +0.71 % rounding residual against the printed 100);
clear radii 4.8 mm on every face (a modelling estimate: the figure draws one square-edged block, its absolute scale is
too rough to use, and L2 reaches zero edge thickness at 4.97 mm); f-stops 12.5/16/22 from the lens's rated 1:12.5;
the trace field at the printed 34 deg, which the chief ray passes with ordinary rim vignetting.

Indices are nD only: von Rohr prints no dispersion for this lens, so no Abbe number is given and no modern glass is
substituted.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-anastigmatlinse-von-rohr-1899",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA ANASTIGMATLINSE f/12.5 (von Rohr 1899, Fig. 140)",
  subtitle: "Rudolph's four-part cemented Series VII single anastigmat, later long-focus form",  catalog: {
    specs: ["4 ELEMENTS / 1 GROUP", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 1,
    focalLengthMm: { design: 100 },
    fNumber: { design: 12.5 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 379, Fig. 140",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=135",
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Lower-index negative (new pair)",
      type: "Biconcave Negative",
      nd: 1.51743,
      indexReference: "D",
      glass: "Unmatched (historical nD only, no dispersion published)",
      cemented: "Q1",
    },
    {
      id: 2,
      name: "L2",
      label: "Higher-index positive (new pair)",
      type: "Biconvex Positive",
      nd: 1.61002,
      indexReference: "D",
      glass: "Unmatched (historical nD only, no dispersion published)",
      cemented: "Q1",
    },
    {
      id: 3,
      name: "L3",
      label: "Lower-index positive (old pair)",
      type: "Positive Meniscus",
      nd: 1.51156,
      indexReference: "D",
      glass: "Unmatched (historical nD only, no dispersion published)",
      cemented: "Q1",
    },
    {
      id: 4,
      name: "L4",
      label: "Higher-index negative (old pair)",
      type: "Negative Meniscus",
      nd: 1.58254,
      indexReference: "D",
      glass: "Unmatched (historical nD only, no dispersion published)",
      cemented: "Q1",
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 1.9 },
    { label: "1", R: -14.7, d: 1.3, sd: 4.8, medium: 1 },
    { label: "2", R: 23.4, d: 1.7, sd: 4.8, medium: 2 },
    { label: "3", R: -11.2, d: 1.7, sd: 4.8, medium: 3 },
    { label: "4", R: -7.4, d: 1.3, sd: 4.8, medium: 4 },
    { label: "5", R: -15.4, d: 112.193, sd: 4.8 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; von Rohr gives no focusing data. The image plane is the computed paraxial focus.",
  },
  aperture: { nominalFNumber: 12.5, fStops: [12.5, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 34 },
  groups: [{ text: "G1", fromSurface: "1", toSurface: "5" }],
  doublets: [{ text: "Q1", fromSurface: "1", toSurface: "5" }],
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
