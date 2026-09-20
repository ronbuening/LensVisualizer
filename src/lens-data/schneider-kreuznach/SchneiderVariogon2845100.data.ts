import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SCHNEIDER-KREUZNACH VARIOGON 45-100mm f/2.8                                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 3,482,900, sole Table-I prescription (job-card Example 1), Werner Wagner / Jos. Schneider.     ║
 * ║ 14 physical glass elements / 10 air-spaced patent lens members / five power components; all spherical.     ║
 * ║ Zoom states: 48, 72, 85, 96 mm. Base data use the published 48-mm state as required by the zoom schema.    ║
 * ║ Zoom-only gaps: source d5, d10, d13. d10 reverses between the 85- and 96-mm states.                         ║
 * ║ Focus: NO_INTERNAL_RECONSTRUCTION. The patent permits component I or one member to move for focus but       ║
 * ║ publishes no finite-focus spacings. closeFocusM=1.2 is product/design metadata only; var pairs remain equal.║
 * ║                                                                                                              ║
 * ║ Stop inference: the patent only says a diaphragm may lie within fixed d15=2.5 mm. This model places STO      ║
 * ║ at the midpoint (r15→STO=1.25 mm, STO→r16=1.25 mm). STO sd=12.005 mm is calibrated to the published f/2.8 ║
 * ║ target; it is not a published physical diaphragm diameter. Parsed-data paraxial checks reproduce f/2.8 at   ║
 * ║ all four published zoom states within 0.00014 f-number.                                                     ║
 * ║                                                                                                              ║
 * ║ Semi-diameters are modeled, not source-published. They clear the full on-axis f/2.8 cone plus the current    ║
 * ║ default off-axis visualization bundle (0.6 of the 135-format diagonal half-field; pupil samples through      ║
 * ║ ±0.75) at all four published states and three interpolated midpoint states under exact spherical tracing.   ║
 * ║ Current CHAT_PREFLIGHT also checks edge thickness, actual spherical rim slope, shared-band gap intrusion,    ║
 * ║ and the spherical domain. Live SVG and 41-state render diagnostics verified; see audit log.      ║
 * ║                                                                                                              ║
 * ║ No uniform scale is applied. Marketing 45-100 mm remains separate from the unscaled 48-96 mm design states. ║
 * ║ Historical glass supplier/melts are unresolved; glass strings use coordinate classes or Unmatched labels.   ║
 * ║ No catalog candidate nC/nF/ng/dPgF values are promoted into this patent prescription.                        ║
 * ║                                                                                                              ║
 * ║ Preserved source discrepancies: Table I prints the r24 surface-power sign incorrectly; data retain            ║
 * ║ R=-35.89 and the published media. The component-focal-length list also prints fV=-67.19 even though V is     ║
 * ║ explicitly positive and the prescription computes +67.042 mm; the raw sign is preserved in the audit record. ║
 * ║ The printed index wavelength says "587.6 microns" and is normalized as d-line 587.6 nm. Component-V prose    ║
 * ║ mislabels L11-L14; Fig. 1/Table I/claim 1 establish the 14-element set. The worked prescription also fails   ║
 * ║ the patent's general C01 forward-member condition. A period brochure says 14 elements / 11 groups versus    ║
 * ║ this patent model's 14 elements / 10 air-spaced members. It also enumerates historical interchangeable       ║
 * ║ sockets; lensMounts remains omitted rather than encoding an incomplete subset of the current taxonomy.        ║
 * ║ The production correlation is research-supported but not manufacturer-confirmed formula identity.           ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "schneider-variogon-45-100-f28",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH VARIOGON 45-100mm f/2.8",
  subtitle: "US 3,482,900 — Table I / job-card Example 1; production correlation qualified",
  specs: ["14 ELEMENTS / 10 PATENT MEMBERS", "DESIGN 48-96 mm", "MARKETED 45-100 mm", "f/2.8", "ALL-SPHERICAL"],

  focalLengthMarketing: [45, 100],
  focalLengthDesign: [48.060354, 96.04305],
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  imageFormat: "135-full-frame",
  patentNumber: "US 3,482,900",
  patentAuthors: ["Werner Wagner"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1969,
  elementCount: 14,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      indexReference: "d",
      fl: -168.235,
      glass: "805255 coordinate class (supplier unresolved)",
      apd: false,
      cemented: "D1",
      role: "Front member of component I; cemented to L2.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.55232,
      vd: 63.49,
      indexReference: "d",
      fl: 139.001,
      glass: "552635 coordinate class (supplier unresolved)",
      apd: false,
      cemented: "D1",
      role: "Positive partner in the front cemented member of component I.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      fl: 93.275,
      glass: "620603 coordinate class (supplier unresolved)",
      apd: false,
      role: "Rear positive member of component I.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6223,
      vd: 53.14,
      indexReference: "d",
      fl: -48.445,
      glass: "622531 coordinate class (supplier unresolved)",
      apd: false,
      role: "Forward negative member of moving component II.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.89,
      indexReference: "d",
      fl: -47.557,
      glass: "713539 coordinate class (supplier unresolved)",
      apd: false,
      cemented: "D2",
      role: "Front element of the rear cemented member of moving component II.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7283,
      vd: 28.66,
      indexReference: "d",
      fl: 48.975,
      glass: "S-TIH10 — coordinate-compatible spectral proxy (supplier unresolved)",
      apd: false,
      cemented: "D2",
      role: "Positive cemented partner completing moving component II.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.60565,
      vd: 37.95,
      indexReference: "d",
      fl: 82.643,
      glass: "F15 — coordinate-compatible spectral proxy (supplier unresolved)",
      apd: false,
      cemented: "D3",
      role: "Front element of moving component III.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.89,
      indexReference: "d",
      fl: -40.444,
      glass: "713539 coordinate class (supplier unresolved)",
      apd: false,
      cemented: "D3",
      role: "Negative cemented partner completing moving component III.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.84,
      indexReference: "d",
      fl: 68.691,
      glass: "658508 coordinate class (supplier unresolved)",
      apd: false,
      role: "Fixed positive component IV immediately ahead of the diaphragm gap.",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      fl: 82.67,
      glass: "620603 coordinate class (supplier unresolved)",
      apd: false,
      role: "First positive singlet of fixed component V.",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.62364,
      vd: 36.75,
      indexReference: "d",
      fl: -36.975,
      glass: "Unmatched (1.62364 / 36.75; supplier unresolved)",
      apd: false,
      cemented: "D4",
      role: "Negative front element of the cemented member in component V.",
    },
    {
      id: 12,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      fl: 26.749,
      glass: "620603 coordinate class (supplier unresolved)",
      apd: false,
      cemented: "D4",
      role: "Positive cemented partner in component V.",
    },
    {
      id: 13,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.64831,
      vd: 33.77,
      indexReference: "d",
      fl: -31.718,
      glass: "648338 coordinate class (supplier unresolved)",
      apd: false,
      role: "Negative singlet in the rear basic objective.",
    },
    {
      id: 14,
      name: "L14",
      diagramLabel: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.57957,
      vd: 53.86,
      indexReference: "d",
      fl: 43.977,
      glass: "580539 coordinate class (supplier unresolved)",
      apd: false,
      role: "Final positive singlet of component V.",
    },
  ],

  surfaces: [
    { label: "1", R: 110.56, d: 2.3, nd: 1.80518, elemId: 1, sd: 28 },
    { label: "2", R: 60.31, d: 7.5, nd: 1.55232, elemId: 2, sd: 28 },
    { label: "3", R: 268.8, d: 0.1, nd: 1.0, elemId: 0, sd: 28 },
    { label: "4", R: 46.49, d: 8.75, nd: 1.62041, elemId: 3, sd: 28 },
    { label: "5", R: 219.4, d: 0.638, nd: 1.0, elemId: 0, sd: 28 },
    { label: "6", R: 420.0, d: 1.5, nd: 1.6223, elemId: 4, sd: 16 },
    { label: "7", R: 28.09, d: 6.8, nd: 1.0, elemId: 0, sd: 16 },
    { label: "8", R: -181.2, d: 1.0, nd: 1.713, elemId: 5, sd: 16 },
    { label: "9", R: 41.81, d: 5.0, nd: 1.7283, elemId: 6, sd: 16 },
    { label: "10", R: -230.6, d: 10.885, nd: 1.0, elemId: 0, sd: 16 },
    { label: "11", R: -56.12, d: 3.0, nd: 1.60565, elemId: 7, sd: 11.5 },
    { label: "12", R: -26.99, d: 1.0, nd: 1.713, elemId: 8, sd: 11.7 },
    { label: "13", R: -428.0, d: 14.028, nd: 1.0, elemId: 0, sd: 12.1 },
    { label: "14", R: 339.4, d: 3.0, nd: 1.65844, elemId: 9, sd: 12.2 },
    { label: "15", R: -52.0, d: 1.25, nd: 1.0, elemId: 0, sd: 12.3 },
    // STO position is a Stage-2 midpoint inference within the patent's undimensioned d15 diaphragm space.
    { label: "STO", R: 1e15, d: 1.25, nd: 1.0, elemId: 0, sd: 12.005 },
    { label: "16", R: 48.73, d: 3.9, nd: 1.62041, elemId: 10, sd: 12.4 },
    { label: "17", R: 946.6, d: 0.1, nd: 1.0, elemId: 0, sd: 12.1 },
    { label: "18", R: 26.9, d: 1.5, nd: 1.62364, elemId: 11, sd: 11.7 },
    { label: "19", R: 12.15, d: 5.0, nd: 1.62041, elemId: 12, sd: 10.5 },
    { label: "20", R: 38.21, d: 5.0, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "21", R: -109.66, d: 1.55, nd: 1.64831, elemId: 13, sd: 11.3 },
    { label: "22", R: 25.45, d: 7.95, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "23", R: 84.79, d: 3.5, nd: 1.57957, elemId: 14, sd: 11.9 },
    // Source-published paraxial back focal length is 48.2 mm; source rounding gives computed BFD ≈48.23 mm.
    { label: "24", R: -35.89, d: 48.2, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  var: {
    "5": [
      [0.638, 0.638],
      [14.544, 14.544],
      [19.24, 19.24],
      [22.288, 22.288],
    ],
    "10": [
      [10.885, 10.885],
      [3.024, 3.024],
      [2.3, 2.3],
      [2.744, 2.744],
    ],
    "13": [
      [14.028, 14.028],
      [7.982, 7.982],
      [4.01, 4.01],
      [0.518, 0.518],
    ],
  },
  varLabels: [
    ["5", "d5"],
    ["10", "d10"],
    ["13", "d13"],
  ],

  zoomPositions: [48, 72, 85, 96],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "5" },
    { text: "II", fromSurface: "6", toSurface: "10" },
    { text: "III", fromSurface: "11", toSurface: "13" },
    { text: "IV", fromSurface: "14", toSurface: "15" },
    { text: "V", fromSurface: "16", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
  ],

  closeFocusM: 1.2,
  focusDescription: "The patent describes front-component focusing but publishes no finite-focus spacings. Focus travel is not modeled; the production minimum focus distance is 1.2 m.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
