import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY DT 16-50mm f/2.8 SSM                                           ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: US 2012/0307129 A1, Numerical Value Embodiment 1 / Example 1.    ║
 * ║ Production identity: Sony SAL1650 official specifications.                       ║
 * ║ Correlation: 16 physical lenses / 13 groups, APS-C, 16.48-48.50 mm, f/2.89.      ║
 * ║ No prescription scaling is applied.                                              ║
 * ║                                                                                    ║
 * ║ MODELING NOTE — COMPOUND ASPHERES                                                 ║
 * ║ G4 and G13 are patent-counted single lenses with optically active 1.53420/41.7   ║
 * ║ compound-asphere layers. The schema therefore uses 18 optical-media entries      ║
 * ║ while elementCount remains the patent/production physical count of 16.            ║
 * ║ The layer material is not identified by the patent and is kept Unmatched.         ║
 * ║                                                                                    ║
 * ║ ZOOM / FOCUS                                                                      ║
 * ║ Infinity zoom gaps are Table 4 values D5, D15, D22, and BF.                      ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that GR2 alone       ║
 * ║ focuses but publishes no close-focus spacing table. At each zoom state, GR2      ║
 * ║ is translated with D5 + D15 conserved, all other groups and IMG fixed, and the   ║
 * ║ close pairs are code-solved for Sony's 0.300 m sensor-plane minimum focus.       ║
 * ║ Tele close focus gives |m| = 0.194595x, consistent with Sony's rounded 0.2x.      ║
 * ║ D22 and BF are zoom-only. GR2 reverses direction in sensor-normalized zoom       ║
 * ║ motion between the wide/intermediate and tele states.                             ║
 * ║                                                                                    ║
 * ║ STOP                                                                              ║
 * ║ S16 is the patent aperture stop and moves with GR3. Its published diameter is    ║
 * ║ absent. STO.sd = 6.971 mm is the independently reconstructed wide-state radius   ║
 * ║ for the modeled f/2.89. The reconstructed wide/mid/tele stop radii are           ║
 * ║ 6.9714 / 8.1516 / 9.4947 mm; nominalFno=2.89 is the authoritative zoom-wide-open ║
 * ║ aperture target for buildLens() stop/pupil geometry.                              ║
 * ║                                                                                    ║
 * ║ SEMI-DIAMETERS                                                                    ║
 * ║ The patent publishes no clear apertures. SDs were derived from the maximum of     ║
 * ║ infinity and reconstructed-close paraxial marginal+chief-ray envelopes at the     ║
 * ║ default 0.60 field fraction, then given approximately 3% clearance where the     ║
 * ║ current edge/rim/cross-gap geometry allowed. S27A is geometry-limited to 12.25   ║
 * ║ mm by the 2.45 mm S27A-S28 air gap and still contains the 0.60-field envelope.   ║
 * ║ The Fig. 2 optical section and Sony's 72 mm filter / 81 mm barrel were used only ║
 * ║ as reasonableness checks, not as scale-accurate aperture sources.                 ║
 * ║                                                                                    ║
 * ║ SOURCE CORRECTIONS / OMISSIONS                                                    ║
 * ║ - Paragraph 0099 says D6/D17/D24; Table 4 and the actual group boundaries give   ║
 * ║   D5/D15/D22. The Table 4 values are used.                                        ║
 * ║ - Paragraph 0093 repeats G15 for the final GR4 lens; Fig. 2 explicitly identifies ║
 * ║   the final lens as G16; Table 1's last biconvex surface pair is consistent.      ║
 * ║ - The unparameterized filter and sensor cover glass mentioned in paragraph 0094  ║
 * ║   are excluded. No defensible air-equivalent plate correction can be computed.   ║
 * ║ - Patent spectral data are d-line nd/vd only; no nC, nF, ng, or dPgF are invented.║
 * ║                                                                                    ║
 * ║ Manufacturer source:                                                             ║
 * ║ https://www.sony.com/electronics/support/lenses-a-mount-lenses/sal1650/specifications ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-dt-16-50mm-f28-ssm",
  maker: "Sony",
  name: "SONY DT 16-50mm f/2.8 SSM",
  subtitle: "US 2012/0307129 A1 Example 1 — unscaled patent prescription correlated to Sony SAL1650",
  specs: [
    "16 ELEMENTS / 13 GROUPS",
    "PATENT f = 16.48-48.50 mm",
    "F/2.89 DESIGN (f/2.8 MARKETED)",
    "85.5°-33.0° PATENT FULL FIELD",
    "2 COMPOUND ASPHERES / 3 INFERRED ED ELEMENTS",
  ],

  focalLengthMarketing: [16, 50],
  focalLengthDesign: [16.48, 48.5],
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  lensMounts: ["sony-a"],
  imageFormat: "aps-c",
  patentNumber: "US 2012/0307129 A1",
  patentAuthors: ["Hideki Kai", "Makoto Kanai"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2012,
  elementCount: 16,
  groupCount: 13,

  /* ── Optical media / elements ──
   * Named glasses are catalog equivalents selected from the stored d-line nd/vd pair; they do not assert a
   * production vendor melt. The two compound-asphere layers remain explicitly Unmatched.
   */
  elements: [
    {
      id: 1,
      name: "G1",
      diagramLabel: "G1",
      label: "G1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.7,
      indexReference: "d",
      fl: -122.94155,
      glass: "J-SF03 catalog equivalent (patent class 847237; production supplier unspecified)",
      role: "GR1 front negative component; cemented to G2.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "G2",
      diagramLabel: "G2",
      label: "G2",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: 102.08879,
      glass: "N-LASF44 (SCHOTT catalog equivalent; production supplier unspecified; patent class 804465)",
      role: "GR1 positive component cemented to G1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "G3",
      diagramLabel: "G3",
      label: "G3",
      type: "Positive Meniscus",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: 97.85381,
      glass: "N-LASF44 (SCHOTT catalog equivalent; production supplier unspecified; patent class 804465)",
      role: "GR1 rear positive meniscus.",
    },
    {
      id: 4,
      name: "G4r",
      diagramLabel: "G4r",
      label: "G4 compound layer",
      type: "Hybrid Asphere Layer",
      nd: 1.5342,
      vd: 41.7,
      indexReference: "d",
      fl: -205.55725,
      glass: "Unmatched (compound-asphere layer; material unspecified by patent)",
      role: "Thin object-side compound-asphere optical layer on G4.",
      cemented: "H1",
    },
    {
      id: 5,
      name: "G4",
      diagramLabel: "G4",
      label: "G4 substrate",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.2,
      indexReference: "d",
      fl: -21.52816,
      glass: "K-LaSFn23 (SUMITA catalog equivalent; production supplier unspecified; patent class 911352)",
      role: "GR2 negative-meniscus substrate carrying the front compound asphere.",
      cemented: "H1",
    },
    {
      id: 6,
      name: "G5",
      diagramLabel: "G5",
      label: "G5",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      fl: -24.67788,
      glass: "S-LAH58 (OHARA catalog equivalent; production supplier unspecified; patent class 883408)",
      role: "GR2 biconcave negative element.",
    },
    {
      id: 7,
      name: "G6",
      diagramLabel: "G6",
      label: "G6",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      indexReference: "d",
      fl: 27.10242,
      glass: "E-FD2 (HOYA catalog equivalent; production supplier unspecified; patent class 648338)",
      role: "GR2 positive element.",
    },
    {
      id: 8,
      name: "G7",
      diagramLabel: "G7",
      label: "G7",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -18.78792,
      glass: "J-LASF016 (HIKARI catalog equivalent; production supplier unspecified; patent class 773496)",
      role: "GR2 negative component cemented to G8.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "G8",
      diagramLabel: "G8",
      label: "G8",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: 32.09372,
      glass: "J-SF03 (HIKARI catalog equivalent; production supplier unspecified; patent class 847238)",
      role: "GR2 positive component cemented to G7.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "G9",
      diagramLabel: "G9",
      label: "G9",
      type: "Biconvex Positive",
      nd: 1.80611,
      vd: 40.7,
      indexReference: "d",
      fl: 31.16461,
      glass: "NBFD13 (HOYA catalog equivalent; production supplier unspecified; patent class 806407)",
      role: "GR3 front positive element.",
    },
    {
      id: 11,
      name: "G10",
      diagramLabel: "G10",
      label: "G10",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 70.91781,
      glass: "H-FK61 (CDGM catalog equivalent; production supplier unspecified; patent class 497816)",
      apd: "inferred",
      apdNote:
        "One of Sony's three production ED positions; the patent nd/vd row maps to an ED fluorophosphate class, but publishes no partial-dispersion value.",
      role: "GR3 positive meniscus.",
    },
    {
      id: 12,
      name: "G11",
      diagramLabel: "G11",
      label: "G11",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      fl: -24.45707,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified; patent class 835427)",
      role: "GR3 rear negative element.",
    },
    {
      id: 13,
      name: "G12",
      diagramLabel: "G12",
      label: "G12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 32.40868,
      glass: "H-FK61 (CDGM catalog equivalent; production supplier unspecified; patent class 497816)",
      apd: "inferred",
      apdNote:
        "One of Sony's three production ED positions; the patent nd/vd row maps to an ED fluorophosphate class, but publishes no partial-dispersion value.",
      role: "GR4 front positive element.",
    },
    {
      id: 14,
      name: "G13",
      diagramLabel: "G13",
      label: "G13 substrate",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      fl: -72.97715,
      glass: "N-LASF46B (SCHOTT catalog equivalent; production supplier unspecified; patent class 904313)",
      role: "GR4 negative substrate carrying the rear compound asphere.",
      cemented: "H2",
    },
    {
      id: 15,
      name: "G13r",
      diagramLabel: "G13r",
      label: "G13 compound layer",
      type: "Hybrid Asphere Layer",
      nd: 1.5342,
      vd: 41.7,
      indexReference: "d",
      fl: 228.60257,
      glass: "Unmatched (compound-asphere layer; material unspecified by patent)",
      role: "Thin image-side compound-asphere optical layer on G13.",
      cemented: "H2",
    },
    {
      id: 16,
      name: "G14",
      diagramLabel: "G14",
      label: "G14",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      fl: -31.35274,
      glass: "J-SF03 (HIKARI catalog equivalent; production supplier unspecified; patent class 847238)",
      role: "GR4 negative component cemented to G15.",
      cemented: "D3",
    },
    {
      id: 17,
      name: "G15",
      diagramLabel: "G15",
      label: "G15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 45.48899,
      glass: "H-FK61 (CDGM catalog equivalent; production supplier unspecified; patent class 497816)",
      apd: "inferred",
      apdNote:
        "One of Sony's three production ED positions; the patent nd/vd row maps to an ED fluorophosphate class, but publishes no partial-dispersion value.",
      role: "GR4 positive component cemented to G14.",
      cemented: "D3",
    },
    {
      id: 18,
      name: "G16",
      diagramLabel: "G16",
      label: "G16",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      fl: 41.24211,
      glass: "E-F2 (HOYA catalog equivalent; production supplier unspecified; patent class 620363)",
      role: "GR4 final positive element.",
    },
  ],

  /* ── Surface prescription: US 2012/0307129 A1 Table 1 ── */
  surfaces: [
    { label: "1", R: 546.11, d: 1.5, nd: 1.84666, elemId: 1, sd: 22.6 },
    { label: "2", R: 87.316, d: 6.5, nd: 1.8042, elemId: 2, sd: 22.5 },
    { label: "3", R: -1328.7, d: 0.15, nd: 1.0, elemId: 0, sd: 21.7 },
    { label: "4", R: 46.384, d: 4.98, nd: 1.8042, elemId: 3, sd: 21.7 },
    { label: "5", R: 107.566, d: 2.43, nd: 1.0, elemId: 0, sd: 20.1 },
    { label: "6A", R: 94.01, d: 0.2, nd: 1.5342, elemId: 4, sd: 10.4 },
    { label: "7", R: 50.611, d: 0.9, nd: 1.91082, elemId: 5, sd: 10.3 },
    { label: "8", R: 14.013, d: 7.27, nd: 1.0, elemId: 0, sd: 9.9 },
    { label: "9", R: -37.64, d: 1.0, nd: 1.883, elemId: 6, sd: 8.2 },
    { label: "10", R: 52.394, d: 0.3, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "11", R: 34.2, d: 4.5, nd: 1.64769, elemId: 7, sd: 8.4 },
    { label: "12", R: -34.2, d: 2.19, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "13", R: -16.454, d: 0.9, nd: 1.7725, elemId: 8, sd: 8.8 },
    { label: "14", R: 126.01, d: 3.1, nd: 1.84666, elemId: 9, sd: 9.0 },
    { label: "15", R: -34.252, d: 13.35, nd: 1.0, elemId: 0, sd: 9.7 },
    { label: "STO", R: 1e15, d: 1.3, nd: 1.0, elemId: 0, sd: 6.971 },
    { label: "17", R: 42.385, d: 4.29, nd: 1.80611, elemId: 10, sd: 10.5 },
    { label: "18", R: -58.895, d: 0.2, nd: 1.0, elemId: 0, sd: 11.1 },
    { label: "19", R: 32.06, d: 3.62, nd: 1.497, elemId: 11, sd: 11.1 },
    { label: "20", R: 341.362, d: 2.49, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "21", R: -38.864, d: 1.0, nd: 1.83481, elemId: 12, sd: 11.0 },
    { label: "22", R: 43.518, d: 7.54, nd: 1.0, elemId: 0, sd: 11.1 },
    { label: "23", R: 26.197, d: 7.0, nd: 1.497, elemId: 13, sd: 11.5 },
    { label: "24", R: -38.11, d: 0.5, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "25", R: -379.68, d: 2.0, nd: 1.90366, elemId: 14, sd: 12.5 },
    { label: "26", R: 80.008, d: 0.3, nd: 1.5342, elemId: 15, sd: 12.5 },
    { label: "27A", R: 231.713, d: 2.45, nd: 1.0, elemId: 0, sd: 12.25 },
    { label: "28", R: -79.73, d: 0.9, nd: 1.84666, elemId: 16, sd: 12.9 },
    { label: "29", R: 40.0, d: 5.02, nd: 1.497, elemId: 17, sd: 13.1 },
    { label: "30", R: -49.83, d: 0.2, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "31", R: 122.57, d: 4.75, nd: 1.62004, elemId: 18, sd: 14.5 },
    { label: "32", R: -31.834, d: 37.34, nd: 1.0, elemId: 0, sd: 15.1 },
  ],

  /* ── Aspheres: patent Table 2, standard conic K convention ── */
  asph: {
    "6A": {
      K: 4.4,
      A4: 2.35559e-5,
      A6: -6.0351e-8,
      A8: 3.97207e-10,
      A10: -1.64571e-12,
      A12: 3.67325e-15,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: 3.58853e-5,
      A6: 1.32515e-8,
      A8: 1.07342e-10,
      A10: -1.35072e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom / focus variable spacings ── */
  zoomPositions: [16.48, 28.28, 48.5],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [2.43, 0.9811863735174566],
      [14.09, 12.062067209511502],
      [25.76, 22.688735588749136],
    ],
    "15": [
      [13.35, 14.798813626482543],
      [6.08, 8.107932790488498],
      [1.1, 4.171264411250865],
    ],
    "22": [
      [7.54, 7.54],
      [3.11, 3.11],
      [1.0, 1.0],
    ],
    "32": [
      [37.34, 37.34],
      [47.98, 47.98],
      [59.87, 59.87],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["15", "D15"],
    ["22", "D22"],
    ["32", "BF"],
  ],

  groups: [
    { text: "GR1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "GR2 (-)", fromSurface: "6A", toSurface: "15" },
    { text: "GR3 (+)", fromSurface: "17", toSurface: "22" },
    { text: "GR4 (+)", fromSurface: "23", toSurface: "32" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "H2", fromSurface: "25", toSurface: "27A" },
    { text: "D3", fromSurface: "28", toSurface: "30" },
  ],

  closeFocusM: 0.3,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent publishes GR2-only close-range focusing but no close-focus spacing " +
    "table. " +
    "At each zoom position, only GR2 translates; D5 + D15 is conserved, GR1/GR3/GR4/STO/IMG stay fixed, and the " +
    "close pairs are code-solved for a 0.300 m sensor-plane object distance. Tele |m| = 0.194595x; these rows " +
    "are not " +
    "patent-published focus data.",

  nominalFno: 2.89,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,

  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
