// Root-level draft import. generate:metadata rewrites it when organizing the file into a maker folder.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CARL ZEISS JENA SONNAR 50mm f/1.5 (US 2,186,621)        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2,186,621, Fig. 1 numerical example (the patent's first  ║
 * ║ table). The patent labels Fig. 1 "Prior Art Lens System" and cites  ║
 * ║ US 1,975,678 for it: this is a 1937 calculation of the 7/3 Contax   ║
 * ║ Sonnar 50/1.5, not the four-unit design the patent claims. Its      ║
 * ║ radii and glasses differ from the US 1,975,678 example (sonnar-     ║
 * ║ 50f15). No source ties it to a specific production batch; a link to ║
 * ║ the postwar Zeiss-Opton 50/1.5 is unconfirmed.                      ║
 * ║                                                                      ║
 * ║ 7 elements / 3 air-spaced groups; all spherical.                    ║
 * ║ Focus: modeled unit focus (Contax helicoid); the patent prints no    ║
 * ║ focus data. BF grows 3.138 mm at a 0.9 m object-to-image endpoint.  ║
 * ║                                                                      ║
 * ║ R5: the PDF text layer reads −846.31; the page image prints −646.31 ║
 * ║ (−323.155 here), which gives f = 99.99 at patent scale.             ║
 * ║                                                                      ║
 * ║ SCALE: the patent's nominal 100 mm prescription is uniformly scaled ║
 * ║ by s = 0.5 to the 50 mm product scale. All R, d, sd, and image-plane║
 * ║ distances are scaled; indices and Abbe numbers are unchanged.        ║
 * ║                                                                      ║
 * ║ STOP: the patent only places the iris inside l2. The stop here is    ║
 * ║ inferred from rendered Fig. 1 at approximately 82% of the R6→R7    ║
 * ║ air gap measured from R6. Its radius is set by the engine from the  ║
 * ║ nominal f/1.5, not from a published diaphragm diameter.             ║
 * ║                                                                      ║
 * ║ SEMI-DIAMETERS: unpublished. Estimated from Fig. 1 (axially to      ║
 * ║ scale, 0.062 mm/px at 300 dpi after ×0.5) and floor-checked by      ║
 * ║ real-ray trace. L1 is drawn at 16.5 mm, below the f/1.5 axial       ║
 * ║ marginal ray (16.66 mm), so it sits at 17.0 mm. The cemented        ║
 * ║ triplets are drawn square-cut (14.5 mm; 9.9 mm, capped by the R9    ║
 * ║ rim-slope limit); L4 and L7 carry the drawn chamfers to R6 and R10. ║
 * ║                                                                      ║
 * ║ IMAGE PLANE: the final d is the independently calculated infinity   ║
 * ║ paraxial BFD, not a patent-published image distance.                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-jena-sonnar-50f15-us2186621",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA SONNAR 50mm f/1.5 (US 2,186,621 Design)",
  subtitle: "US 2,186,621, Fig. 1 — prior-art Contax Sonnar 50/1.5 example",

  catalog: {
    lensMounts: ["contax-rf"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 3 GROUPS", "DESIGN f = 100 (NORMALIZED; SCALED 0.5× TO 50 mm)", "DESIGN F/1.50", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 3,
    focalLengthMm: { marketing: 50, design: 49.993430512311164 },
    fNumber: { marketing: 1.5 },
  },

  source: {
    patentNumber: "US 2,186,621",
    patentYear: 1940,
    authors: ["Ludwig Bertele"],
    assignees: ["Zeiss Ikon AG"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.671,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 60.73709098402312,
      glass: "671472 — catalog coordinate (supplier unconfirmed)",
      role: "Positive front meniscus forming the first collective unit.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.671,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 41.93293950099485,
      glass: "671472 — catalog coordinate (supplier unconfirmed)",
      role: "Positive front component of the dispersive cemented meniscus group.",
      diagramLabel: "L2",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.4892,
      vd: 70.1,
      indexReference: "d",
      focalLengthMm: 77.64652716054326,
      glass: "489701 — fluor-crown class (supplier unconfirmed)",
      role: "Low-index, high-Abbe positive middle component of the front cemented triplet.",
      diagramLabel: "L3",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7394,
      vd: 28.2,
      indexReference: "d",
      focalLengthMm: -15.32154619215802,
      glass: "Unmatched (739282 — dense-flint class; supplier unconfirmed)",
      role: "Strong negative rear component of the dispersive front cemented triplet.",
      diagramLabel: "L4",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Concave Negative",
      nd: 1.5232,
      vd: 50.9,
      indexReference: "d",
      focalLengthMm: -48.82454128440367,
      glass: "Unmatched (523509 — supplier unconfirmed)",
      role: "Negative front component of the rear cemented triplet.",
      diagramLabel: "L5",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6578,
      vd: 51.2,
      indexReference: "d",
      focalLengthMm: 13.14481308000608,
      glass: "Unmatched (658512 — SSK-class dense crown, near N-SSK5; supplier unconfirmed)",
      role: "Strong positive core of the rear cemented triplet.",
      diagramLabel: "L6",
      cemented: "T2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.5894,
      vd: 61.2,
      indexReference: "d",
      focalLengthMm: -24.399057372977705,
      glass: "Unmatched (589612 — crown class, near SK5; supplier unconfirmed)",
      role: "Rear negative meniscus completing the rear cemented triplet.",
      diagramLabel: "L7",
      cemented: "T2",
    },
  ],

  surfaces: [
    { label: "1", R: 34.605, d: 4.665, sd: 17.0, medium: 1 },
    { label: "2", R: 216.92, d: 0.19, sd: 17.0 },
    { label: "3", R: 17.93, d: 5.905, sd: 14.5, medium: 2 },
    { label: "4", R: 42.89, d: 3.525, sd: 14.5, medium: 3 },
    { label: "5", R: -323.155, d: 0.95, sd: 14.5, medium: 4 },
    { label: "6", R: 11.755, d: 6.2484, sd: 9.8 },
    // Iris coordinate inferred from Fig. 1: 82% of the scaled l2 = 7.62 mm gap from R6 toward R7.
    // No sd: the engine sizes the stop for the nominal f/1.5.
    { label: "STO", R: "flat", d: 1.3716 },
    { label: "7", R: "flat", d: 1.24, sd: 9.9, medium: 5 },
    { label: "8", R: 25.545, d: 9.905, sd: 9.9, medium: 6 },
    { label: "9", R: -11.06, d: 2.285, sd: 9.9, medium: 7 },
    // Image distance from gaps: infinity value computed from this same scaled prescription; the patent does not publish it.
    { label: "10", R: -51.565, sd: 11.6 },
  ],

  // Carl Zeiss Contax literature gives 3 ft (0.9144 m) for the 50mm f/1.5; 0.9 m is the rounded value, used here as
  // the object-to-image endpoint, as in sonnar-50f15.
  focus: {
    closeFocusM: 0.9,
    description:
      "Modeled unit focus: the patent prints only the infinity prescription. The Contax Sonnar focuses as a unit through the camera's helicoid, so the whole lens and stop move objectward 3.14 mm at the modeled 0.9 m object-to-image endpoint; this extension is calculated, not a patent value.",
  },

  gaps: { "10": { label: "BF (modeled)", values: [[22.457601191379936, 25.595534]] } },

  // Nominal f-number; the engine sizes the stop for it. The patent gives no diaphragm diameter.
  aperture: { nominalFNumber: 1.5, fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "6" },
    { text: "G3", fromSurface: "7", toSurface: "10" },
  ],
  doublets: [
    { text: "T1", fromSurface: "3", toSurface: "6" },
    { text: "T2", fromSurface: "7", toSurface: "10" },
  ],

  layout: { yScFill: 0.52 },
} satisfies LensDataV2Input;

export default LENS_DATA;
