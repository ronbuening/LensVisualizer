import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ Stop inference: the patent only says a diaphragm may lie within fixed d15=2.5 mm. This model places STO at   ║
 * ║ the midpoint (r15→STO=1.25 mm, STO→r16=1.25 mm). The stop radius is derived from the design f-number f/2.8;  ║
 * ║ it is not a published physical diaphragm diameter. With the former hand-calibrated radius, parsed-data       ║
 * ║ paraxial checks reproduced f/2.8 at all four published zoom states within 0.00014 f-number.                  ║
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
  schema: 2,
  key: "schneider-variogon-45-100-f28",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH VARIOGON 45-100mm f/2.8",
  subtitle: "US 3,482,900 — Table I / job-card Example 1; production correlation qualified",

  catalog: {
    lensMounts: [
      "m42",
      "exakta",
      "praktina",
      "minolta-sr",
      "miranda-bayonet",
      "konica-f",
      "canon-r",
      "c-mount",
      "d-mount",
      "nikon-f",
      "leica-r",
    ],
    imageFormat: "135-full-frame",
    specs: ["14 ELEMENTS / 10 PATENT MEMBERS", "DESIGN 48-96 mm", "MARKETED 45-100 mm", "f/2.8", "ALL-SPHERICAL"],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: [45, 100], design: [48.060354, 96.04305] },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,482,900",
    patentYear: 1969,
    authors: ["Werner Wagner"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      indexReference: "d",
      focalLengthMm: -168.235,
      glass: "805255 coordinate class (supplier unresolved)",
      apd: false,
      role: "Front member of component I; cemented to L2.",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.55232,
      vd: 63.49,
      indexReference: "d",
      focalLengthMm: 139.001,
      glass: "552635 coordinate class (supplier unresolved)",
      apd: false,
      role: "Positive partner in the front cemented member of component I.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      focalLengthMm: 93.275,
      glass: "620603 coordinate class (supplier unresolved)",
      apd: false,
      role: "Rear positive member of component I.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6223,
      vd: 53.14,
      indexReference: "d",
      focalLengthMm: -48.445,
      glass: "622531 coordinate class (supplier unresolved)",
      apd: false,
      role: "Forward negative member of moving component II.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.89,
      indexReference: "d",
      focalLengthMm: -47.557,
      glass: "713539 coordinate class (supplier unresolved)",
      apd: false,
      role: "Front element of the rear cemented member of moving component II.",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7283,
      vd: 28.66,
      indexReference: "d",
      focalLengthMm: 48.975,
      glass: "S-TIH10 — coordinate-compatible spectral proxy (supplier unresolved)",
      apd: false,
      role: "Positive cemented partner completing moving component II.",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.60565,
      vd: 37.95,
      indexReference: "d",
      focalLengthMm: 82.643,
      glass: "F15 — coordinate-compatible spectral proxy (supplier unresolved)",
      apd: false,
      role: "Front element of moving component III.",
      diagramLabel: "L7",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.89,
      indexReference: "d",
      focalLengthMm: -40.444,
      glass: "713539 coordinate class (supplier unresolved)",
      apd: false,
      role: "Negative cemented partner completing moving component III.",
      diagramLabel: "L8",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.84,
      indexReference: "d",
      focalLengthMm: 68.691,
      glass: "658508 coordinate class (supplier unresolved)",
      apd: false,
      role: "Fixed positive component IV immediately ahead of the diaphragm gap.",
      diagramLabel: "L9",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      focalLengthMm: 82.67,
      glass: "620603 coordinate class (supplier unresolved)",
      apd: false,
      role: "First positive singlet of fixed component V.",
      diagramLabel: "L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.62364,
      vd: 36.75,
      indexReference: "d",
      focalLengthMm: -36.975,
      glass: "Unmatched (1.62364 / 36.75; supplier unresolved)",
      apd: false,
      role: "Negative front element of the cemented member in component V.",
      diagramLabel: "L11",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      focalLengthMm: 26.749,
      glass: "620603 coordinate class (supplier unresolved)",
      apd: false,
      role: "Positive cemented partner in component V.",
      diagramLabel: "L12",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.64831,
      vd: 33.77,
      indexReference: "d",
      focalLengthMm: -31.718,
      glass: "648338 coordinate class (supplier unresolved)",
      apd: false,
      role: "Negative singlet in the rear basic objective.",
      diagramLabel: "L13",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.57957,
      vd: 53.86,
      indexReference: "d",
      focalLengthMm: 43.977,
      glass: "580539 coordinate class (supplier unresolved)",
      apd: false,
      role: "Final positive singlet of component V.",
      diagramLabel: "L14",
    },
  ],

  surfaces: [
    { label: "1", R: 110.56, d: 2.3, sd: 28, medium: 1 },
    { label: "2", R: 60.31, d: 7.5, sd: 28, medium: 2 },
    { label: "3", R: 268.8, d: 0.1, sd: 28 },
    { label: "4", R: 46.49, d: 8.75, sd: 28, medium: 3 },
    { label: "5", R: 219.4, sd: 28 },
    { label: "6", R: 420.0, d: 1.5, sd: 16, medium: 4 },
    { label: "7", R: 28.09, d: 6.8, sd: 16 },
    { label: "8", R: -181.2, d: 1.0, sd: 16, medium: 5 },
    { label: "9", R: 41.81, d: 5.0, sd: 16, medium: 6 },
    { label: "10", R: -230.6, sd: 16 },
    { label: "11", R: -56.12, d: 3.0, sd: 11.5, medium: 7 },
    { label: "12", R: -26.99, d: 1.0, sd: 11.7, medium: 8 },
    { label: "13", R: -428.0, sd: 12.1 },
    { label: "14", R: 339.4, d: 3.0, sd: 12.2, medium: 9 },
    { label: "15", R: -52.0, d: 1.25, sd: 12.3 },
    // STO position is a Stage-2 midpoint inference within the patent's undimensioned d15 diaphragm space.
    { label: "STO", R: "flat", d: 1.25 },
    { label: "16", R: 48.73, d: 3.9, sd: 12.4, medium: 10 },
    { label: "17", R: 946.6, d: 0.1, sd: 12.1 },
    { label: "18", R: 26.9, d: 1.5, sd: 11.7, medium: 11 },
    { label: "19", R: 12.15, d: 5.0, sd: 10.5, medium: 12 },
    { label: "20", R: 38.21, d: 5.0, sd: 10.3 },
    { label: "21", R: -109.66, d: 1.55, sd: 11.3, medium: 13 },
    { label: "22", R: 25.45, d: 7.95, sd: 11.3 },
    { label: "23", R: 84.79, d: 3.5, sd: 11.9, medium: 14 },
    // Source-published paraxial back focal length is 48.2 mm; source rounding gives computed BFD ≈48.23 mm.
    { label: "24", R: -35.89, d: 48.2, sd: 12.0 },
  ],

  zoom: {
    // (moved from publishedStations) Every authored zoom station is a source row.
    stations: [
      { focalLengthMm: 48, label: "Wide", published: true },
      { focalLengthMm: 72, published: true },
      { focalLengthMm: 85, published: true },
      { focalLengthMm: 96, label: "Tele", published: true },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.2,
    description:
      "The patent describes front-component focusing but publishes no finite-focus spacings. Focus travel is not modeled; the production minimum focus distance is 1.2 m.",
  },

  gaps: {
    "5": {
      label: "d5",
      values: [
        [0.638, 0.638],
        [14.544, 14.544],
        [19.24, 19.24],
        [22.288, 22.288],
      ],
    },
    "10": {
      label: "d10",
      values: [
        [10.885, 10.885],
        [3.024, 3.024],
        [2.3, 2.3],
        [2.744, 2.744],
      ],
    },
    "13": {
      label: "d13",
      values: [
        [14.028, 14.028],
        [7.982, 7.982],
        [4.01, 4.01],
        [0.518, 0.518],
      ],
    },
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

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

  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
