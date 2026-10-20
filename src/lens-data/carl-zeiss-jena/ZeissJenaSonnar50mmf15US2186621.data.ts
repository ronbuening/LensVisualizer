// Root-level draft import. generate:metadata rewrites it when organizing the file into a maker folder.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — ZEISS-OPTON SONNAR CONTAX 50mm f/1.5                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2,186,621, first numerical block / Figure 1.            ║
 * ║ The patent explicitly describes that block as prior art; the link   ║
 * ║ to the postwar Zeiss-Opton Contax 50/1.5 is an inferred family /    ║
 * ║ architecture correlation, not a manufacturer-confirmed exact match. ║
 * ║                                                                      ║
 * ║ 7 elements / 3 air-spaced groups; all spherical.                    ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION.                            ║
 * ║                                                                      ║
 * ║ SCALE: the patent's nominal 100 mm prescription is uniformly scaled ║
 * ║ by s = 0.5 to the 50 mm product scale. All R, d, sd, and image-plane║
 * ║ distances are scaled; indices and Abbe numbers are unchanged.        ║
 * ║                                                                      ║
 * ║ STOP: the patent only places the iris inside l2. The stop here is    ║
 * ║ inferred from rendered Fig. 1 at approximately 82% of the R6→R7    ║
 * ║ air gap measured from R6. Its physical radius is calibrated so the  ║
 * ║ paraxial entrance pupil gives the published/model target f/1.5.      ║
 * ║ This is not independent evidence of the production diaphragm size.  ║
 * ║                                                                      ║
 * ║ SEMI-DIAMETERS: unpublished. They are modeled from exact spherical  ║
 * ║ ray containment (axial stop-edge rays; default 0.6-field / ±0.75    ║
 * ║ pupil off-axis bundle; full-format chief ray), then constrained by   ║
 * ║ edge thickness, rim slope, and shared-gap intrusion checks.          ║
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
  subtitle:
    "US 2,186,621 first numerical block (Fig. 1) — inferred family correlation; source block is explicitly prior art",

  catalog: {
    lensMounts: ["contax-rf"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 3 GROUPS", "50mm f/1.5", "CONTAX RF", "ALL-SPHERICAL"],
    elementCount: 7,
    groupCount: 3,
    focalLengthMm: { marketing: 50, design: 49.78667431326592 },
    fNumber: { marketing: 1.5 },
  },

  source: {
    patentNumber: "US 2,186,621",
    patentYear: 1940,
    authors: ["Ludwig Bertele"],
    assignees: ["Zeiss Ikon Aktiengesellschaft"],
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
      role: "Front positive collector.",
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
      focalLengthMm: 79.80344378426521,
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
      focalLengthMm: -15.453974612292921,
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
      glass: "658512 — dense-crown class (supplier unconfirmed)",
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
      glass: "589612 — crown class (supplier unconfirmed)",
      role: "Rear negative meniscus completing the rear cemented triplet.",
      diagramLabel: "L7",
      cemented: "T2",
    },
  ],

  surfaces: [
    { label: "1", R: 34.605, d: 4.665, sd: 18.5, medium: 1 },
    { label: "2", R: 216.92, d: 0.19, sd: 18.3 },
    { label: "3", R: 17.93, d: 5.905, sd: 14.7, medium: 2 },
    { label: "4", R: 42.89, d: 3.525, sd: 13.75, medium: 3 },
    { label: "5", R: -423.155, d: 0.95, sd: 13.0, medium: 4 },
    { label: "6", R: 11.755, d: 6.2484, sd: 9.8 },
    // Iris coordinate inferred from Fig. 1: 82% of the scaled l2 = 7.62 mm gap from R6 toward R7.
    // Radius calibrated from the parsed model's paraxial entrance pupil to nominal f/1.5.
    { label: "STO", R: "flat", d: 1.3716 },
    { label: "7", R: "flat", d: 1.24, sd: 9.6, medium: 5 },
    { label: "8", R: 25.545, d: 9.905, sd: 9.5, medium: 6 },
    { label: "9", R: -11.06, d: 2.285, sd: 9.35, medium: 7 },
    // Infinity image distance computed from this same scaled prescription; the patent does not publish it.
    { label: "10", R: -51.565, d: 22.268124607016322, sd: 10.25 },
  ],

  // Product metadata only; no finite-focus optical state is reconstructed in this data file.
  // Carl Zeiss postwar Contax literature gives 3 ft (0.9144 m) for the 50mm f/1.5; 0.9 m is the rounded UI value.
  focus: {
    closeFocusM: 0.9,
    description:
      "NO_INTERNAL_RECONSTRUCTION — the patent provides one fixed prescription. Contax body-helicoid unit focusing is external to this model; closeFocusM is rounded product-family metadata and does not define internal motion.",
  },

  // Modeled f-number from the calibrated inferred stop, not an independent measurement of a source diaphragm diameter.
  aperture: { nominalFNumber: 1.5, fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "6" },
    { text: "G3", fromSurface: "7", toSurface: "10" },
  ],
  doublets: [],

  layout: { yScFill: 0.52 },
} satisfies LensDataV2Input;

export default LENS_DATA;
