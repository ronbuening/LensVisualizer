import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — KODAK EKTAR 52mm f/1.5                                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2,397,565, Example 1 (Willy Schade / Eastman Kodak).       ║
 * ║ Seven elements in four air-spaced components; all surfaces are spherical.   ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. Example 1 publishes one fixed      ║
 * ║ prescription and no internal finite-focus motion.                           ║
 * ║                                                                              ║
 * ║ SCALE: the patent example is normalized to F = 100 mm. All dimensional      ║
 * ║ prescription values are uniformly scaled ×0.52 for the selected 52 mm       ║
 * ║ correlation. The resulting paraxial design EFL is 52.0206869999 mm.         ║
 * ║                                                                              ║
 * ║ INDEX REFERENCE: the patent explicitly gives N at the historical D line.    ║
 * ║ LensDataInput has d/e reference labels only, so the unchanged rounded D-line ║
 * ║ N/V coordinates are stored in the nd/vd slots with indexReference: "d" as  ║
 * ║ a source-precision schema approximation; no D→d numerical conversion is     ║
 * ║ claimed.                                                                     ║
 * ║                                                                              ║
 * ║ STOP: Fig. 1 places the diaphragm within source gap s3 (R7→R8) but does not  ║
 * ║ dimension it. A 600 dpi measurement of the figure places it about 0.78 of    ║
 * ║ the way from R7 to R8; the 10.9 mm source gap is therefore split 8.5/2.4 mm  ║
 * ║ before scaling. The STO sd (10.96 mm) records the real-ray stop radius the   ║
 * ║ engine derives for f/1.5 (paraxial EP 17.34 mm traced to the stop: 10.955    ║
 * ║ mm); Fig. 1's stop bar inner edge scales to about 10.7–10.9 mm. It is a      ║
 * ║ model value, not a published diaphragm diameter.                             ║
 * ║                                                                              ║
 * ║ NOTE ON SEMI-DIAMETERS: no numerical clear apertures are published. Values   ║
 * ║ follow the Fig. 1 silhouette (300 dpi, 0.0475 mm/px from the R1→R11 vertex   ║
 * ║ span) subject to the engine's wide-open axial marginal ray (S1 17.34, S2     ║
 * ║ 16.70, S3 15.61, S5 12.69, S8 11.00, S9 10.85 mm). Fig. 1 draws the front    ║
 * ║ components smaller than f/1.5 needs, so S1–S3 sit just above that floor.     ║
 * ║ S5 is capped by the R5→R6 shared-gap sag rule. Not production claims.        ║
 * ║                                                                              ║
 * ║ PRODUCT CORRELATION: the selected Kodak Ektar 52 mm f/1.5 association with   ║
 * ║ Example 1 is plausible from secondary specimen/design sources, but no exact  ║
 * ║ Kodak primary product source has been found confirming the attribution.       ║
 * ║ Original mount and image format therefore remain unset.                      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "kodak-ektar-52f15",
  maker: "Kodak",
  name: "KODAK EKTAR 52mm f/1.5",
  subtitle: "US 2,397,565 — Example 1; scaled ×0.52; production correlation plausible, not manufacturer-confirmed",
  specs: ["7 ELEMENTS / 4 GROUPS", "f = 52.0207 mm (scaled design)", "f/1.5", "ALL-SPHERICAL"],

  focalLengthDesign: 52.020686999914865,
  apertureDesign: 1.5,
  patentNumber: "US 2,397,565",
  patentAuthors: ["Willy Schade"],
  patentAssignees: ["Eastman Kodak Company"],
  patentYear: 1946,
  elementCount: 7,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "I",
      diagramLabel: "I",
      label: "Element I",
      type: "Positive Meniscus",
      nd: 1.638,
      vd: 55.5,
      indexReference: "d",
      fl: 79.38465029133101,
      glass: "K-SK18 catalog proxy; 638555 SK18 class (supplier unconfirmed)",
      apd: false,
      role: "Front positive collector; source coordinate N_D=1.638, V=55.5.",
    },
    {
      id: 2,
      name: "II",
      diagramLabel: "II",
      label: "Element II",
      type: "Negative Meniscus",
      nd: 1.617,
      vd: 38.5,
      indexReference: "d",
      fl: -70.98663744614885,
      glass: "Unmatched (vintage barium-flint class, N_D=1.617, V=38.5)",
      apd: false,
      role: "Negative front member of the cemented second component.",
      cemented: "C2",
    },
    {
      id: 3,
      name: "III",
      diagramLabel: "III",
      label: "Element III",
      type: "Positive Meniscus",
      nd: 1.638,
      vd: 55.5,
      indexReference: "d",
      fl: 33.19986560126641,
      glass: "K-SK18 catalog proxy; 638555 SK18 class (supplier unconfirmed)",
      apd: false,
      role: "Positive rear member of the cemented second component; higher index than II by 0.021.",
      cemented: "C2",
    },
    {
      id: 4,
      name: "IV",
      diagramLabel: "IV",
      label: "Element IV",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 32.2,
      indexReference: "d",
      fl: -25.302158057141042,
      glass: "SF5/ZF2-class dense flint; supplier unresolved",
      apd: false,
      role: "Air-spaced negative third component immediately ahead of the diaphragm gap.",
    },
    {
      id: 5,
      name: "V",
      diagramLabel: "V",
      label: "Element V",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 47.2,
      indexReference: "d",
      fl: 21.367121987236963,
      glass: "S-BAH10 catalog proxy; 670472 BAF10 class (supplier unconfirmed)",
      apd: false,
      role: "Positive front member of the cemented rear triplet.",
      cemented: "C4",
    },
    {
      id: 6,
      name: "VI",
      diagramLabel: "VI",
      label: "Element VI",
      type: "Biconcave Negative",
      nd: 1.541,
      vd: 47.5,
      indexReference: "d",
      fl: -20.216642437162793,
      glass: "S-TIL2 catalog proxy; 541472 light-flint class (supplier unconfirmed)",
      apd: false,
      role: "Low-index biconcave middle member of the cemented rear triplet.",
      cemented: "C4",
    },
    {
      id: 7,
      name: "VII",
      diagramLabel: "VII",
      label: "Element VII",
      type: "Biconvex Positive",
      nd: 1.734,
      vd: 51.1,
      indexReference: "d",
      fl: 33.22579852853801,
      glass: "734511/TAC4-class lanthanum crown; supplier unresolved",
      apd: false,
      role: "High-index positive rear member of the cemented rear triplet.",
      cemented: "C4",
    },
  ],

  surfaces: [
    { label: "1", R: 38.48, d: 6.552, nd: 1.638, elemId: 1, sd: 17.6 },
    { label: "2", R: 149.552, d: 0.312, nd: 1, elemId: 0, sd: 17 },
    { label: "3", R: 26.468, d: 3.12, nd: 1.617, elemId: 2, sd: 15.9 },
    { label: "4", R: 15.756, d: 7.384, nd: 1.638, elemId: 3, sd: 14.15 },
    { label: "5", R: 50.284, d: 2.288, nd: 1, elemId: 0, sd: 12.9 },
    { label: "6", R: -236.496, d: 1.872, nd: 1.673, elemId: 4, sd: 13 },
    { label: "7", R: 18.408, d: 4.42, nd: 1, elemId: 0, sd: 12 },
    { label: "STO", R: 1e15, d: 1.248, nd: 1, elemId: 0, sd: 10.96 },
    { label: "8", R: 63.076, d: 7.124, nd: 1.67, elemId: 5, sd: 11.4 },
    { label: "9", R: -17.68, d: 1.872, nd: 1.541, elemId: 6, sd: 11.4 },
    { label: "10", R: 29.744, d: 4.732, nd: 1.734, elemId: 7, sd: 14 },
    { label: "11", R: -126.308, d: 26.38628440114587, nd: 1, elemId: 0, sd: 14 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (+)", fromSurface: "3", toSurface: "5" },
    { text: "G3 (−)", fromSurface: "6", toSurface: "7" },
    { text: "G4 (+)", fromSurface: "8", toSurface: "11" },
  ],
  doublets: [
    { text: "C2", fromSurface: "3", toSurface: "5" },
    { text: "C4", fromSurface: "8", toSurface: "11" },
  ],

  closeFocusM: 1e15,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 1 is fixed at infinity; closeFocusM=1e15 is a UI sentinel, not product MFD.",

  nominalFno: 1.5,
  fstopSeries: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
