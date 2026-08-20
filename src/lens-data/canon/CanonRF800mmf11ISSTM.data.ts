import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON RF 800mm f/11 IS STM                                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2020-173349 A, Numerical Example 2 (Canon Inc.).        ║
 * ║ Production correlation: Canon RF800mm F11 IS STM.                       ║
 * ║ 11 elements / 8 air-separated groups; one diffractive interface.        ║
 * ║ No geometric aspheres are present in the selected numerical example.     ║
 * ║                                                                            ║
 * ║ FOCUS STATUS — CONSTRAINED_RECONSTRUCTION:                               ║
 * ║ The patent prints d7/d9 = 35.90/21.43 mm at infinity, but that row       ║
 * ║ traces to EFL ≈ 725.60 mm rather than the separately published           ║
 * ║ 776.37 mm. The patent also states that the single L2 focus element       ║
 * ║ translates objectward and its two adjacent gaps conserve                 ║
 * ║ d7+d9 = 57.33 mm. Holding that sum fixed and solving only d7 for the     ║
 * ║ published EFL gives the modeled infinity state used here:                 ║
 * ║ d7 = 38.42721463001324 mm, d9 = 18.90278536998676 mm. The patent's      ║
 * ║ published near state, d7/d9 = 21.25/36.08 mm, is retained unchanged.     ║
 * ║ The raw contradictory infinity values remain recorded in the audit.       ║
 * ║                                                                            ║
 * ║ MARKETING VS DESIGN: production focal length/aperture are 800 mm f/11;   ║
 * ║ patent/design values are 776.37 mm and F/11.31. nominalFno uses 11.31.   ║
 * ║ Canon specifies a fixed f/11 opening with no diaphragm blades, so the     ║
 * ║ visualization is intentionally aperture-locked at the modeled F/11.31.    ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: the patent publishes none. STO sd is the paraxially      ║
 * ║ solved physical stop radius required by F/11.31 at the reconstructed      ║
 * ║ infinity state. Glass-surface SDs were derived from infinity/near         ║
 * ║ marginal and chief-ray envelopes, then constrained by edge thickness,     ║
 * ║ actual spherical rim slope, shared-gap intrusion, and comparison with     ║
 * ║ patent Fig. 2 and Canon's official optical block diagram. Outer off-axis  ║
 * ║ rays may vignette at the front element; no default off-axis ray first     ║
 * ║ clips at a cemented interface. A clean 600 dpi Fig. 2 row sets the E5     ║
 * ║ focus element to 16.1 mm.                                                  ║
 * ║                                                                            ║
 * ║ GLASS: the patent supplies only nd/νd and no vendor identities or line    ║
 * ║ indices. Elements retain their six-digit patent coordinates and identify ║
 * ║ the compatible catalog spectral proxy; production suppliers remain       ║
 * ║ unspecified.                                                               ║
 * ║                                                                            ║
 * ║ SCALE: s = 1.0; no dimensional or diffractive-coefficient scaling.        ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-800mm-f11-is-stm",
  maker: "Canon",
  name: "CANON RF 800mm f/11 IS STM",
  subtitle: "JP 2020-173349 A Numerical Example 2 — constrained infinity-focus reconstruction",
  specs: [
    "11 ELEMENTS / 8 GROUPS",
    "800mm f/11 (MARKETED)",
    "f = 776.37 mm / F/11.31 (PATENT)",
    "2ω = 3.20°",
    "S4 DIFFRACTIVE PHASE SURFACE",
    "OBJECTWARD SINGLE-ELEMENT INNER FOCUS",
  ],

  focalLengthMarketing: 800,
  focalLengthDesign: 776.37,
  apertureMarketing: 11,
  apertureDesign: 11.31,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2020-173349 A",
  patentAuthors: ["Maki Yokoya", "Tomohiro Ino"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2020,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 189.285305,
      glass: "487702 patent coordinate; S-FSL5 catalog spectral proxy (production supplier unspecified)",
      role: "Front positive collector in fixed unit L1.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 119.44558,
      glass: "487702 patent coordinate; S-FSL5 catalog spectral proxy (production supplier unspecified)",
      role: "Positive component of the cemented diffractive doublet in L1.",
      cemented: "DOE",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.8,
      fl: -91.715811,
      glass: "744448 patent coordinate; J-LAF2 catalog spectral proxy (production supplier unspecified)",
      role: "Negative partner of the cemented diffractive doublet; surface 4 carries the DOE phase polynomial.",
      cemented: "DOE",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -152.72303,
      glass: "697555 patent coordinate; J-LAK14 catalog spectral proxy (production supplier unspecified)",
      role: "Negative meniscus completing fixed unit L1.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 169.053213,
      glass: "487702 patent coordinate; S-FSL5 catalog spectral proxy (production supplier unspecified)",
      role: "Single positive L2 inner-focus element; translates objectward for close focus.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.90043,
      vd: 37.4,
      fl: -23.602837,
      glass: "900374 patent coordinate; TAFD37A catalog spectral proxy (production supplier unspecified)",
      role: "Negative component of the first cemented doublet in rear unit L3.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.7,
      fl: 27.148865,
      glass: "654397 patent coordinate; N-KZFS5 catalog spectral proxy (production supplier unspecified)",
      role: "Positive partner of the first cemented doublet in L3.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.7,
      fl: 28.539796,
      glass: "654397 patent coordinate; N-KZFS5 catalog spectral proxy (production supplier unspecified)",
      role: "Positive component of the second cemented doublet in L3.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.6,
      fl: -34.943037,
      glass: "593686 patent coordinate; FCD515 catalog spectral proxy (production supplier unspecified)",
      role: "Negative partner of the second cemented doublet in L3.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.5,
      fl: -39.371451,
      glass: "804465 patent coordinate; TAF3D catalog spectral proxy (production supplier unspecified)",
      role: "Negative rear singlet in L3.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      fl: 98.012225,
      glass: "596392 patent coordinate; E-F8 catalog spectral proxy (production supplier unspecified)",
      role: "Positive rear singlet completing L3.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 82.842, d: 9.45, nd: 1.48749, elemId: 1, sd: 39.8 },
    { label: "2", R: 780.1, d: 40.42, nd: 1.0, elemId: 0, sd: 39.8 },
    { label: "3", R: 81.828, d: 9.23, nd: 1.48749, elemId: 2, sd: 31.5 },
    {
      label: "4",
      R: -194.436,
      d: 2.76,
      nd: 1.744,
      elemId: 3,
      sd: 31.5,
      diffractive: {
        kind: "radial-polynomial",
        referenceWavelengthNm: 587.6,
        diffractionOrder: 1,
        terms: [
          { radialPower: 2, coefficient: -5.3801e-5 },
          { radialPower: 4, coefficient: 6.66877e-9 },
          { radialPower: 6, coefficient: -3.0464e-13 },
          { radialPower: 8, coefficient: -3.57268e-15 },
          { radialPower: 10, coefficient: 2.50469e-18 },
        ],
      },
    },
    { label: "5", R: 105.769, d: 70.95, nd: 1.0, elemId: 0, sd: 31.5 },
    { label: "6", R: -53.038, d: 1.35, nd: 1.6968, elemId: 4, sd: 17.0 },
    { label: "7", R: -106.842, d: 38.42721463001324, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "8", R: 69.898, d: 2.4, nd: 1.48749, elemId: 5, sd: 16.1 },
    { label: "9", R: 455.147, d: 18.90278536998676, nd: 1.0, elemId: 0, sd: 16.1 },
    { label: "STO", R: 1e15, d: 6.44, nd: 1.0, elemId: 0, sd: 8.323960831362765 },
    { label: "11", R: -42.741, d: 1.0, nd: 1.90043, elemId: 6, sd: 9.6 },
    { label: "12", R: 42.741, d: 3.85, nd: 1.65412, elemId: 7, sd: 9.6 },
    { label: "13", R: -29.3, d: 12.2, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "14", R: 107.876, d: 3.7, nd: 1.65412, elemId: 8, sd: 9.6 },
    { label: "15", R: -22.269, d: 0.8, nd: 1.59282, elemId: 9, sd: 9.6 },
    { label: "16", R: 300.803, d: 0.64, nd: 1.0, elemId: 0, sd: 8.1 },
    { label: "17", R: -75.518, d: 0.8, nd: 1.804, elemId: 10, sd: 8.1 },
    { label: "18", R: 54.756, d: 1.33, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "19", R: 63.816, d: 2.1, nd: 1.59551, elemId: 11, sd: 9.8 },
    { label: "20", R: -675.205, d: 138.3, nd: 1.0, elemId: 0, sd: 9.8 },
  ],

  /* ── No geometric aspheres ── */
  asph: {},

  /* ── Focus mechanism ── */
  var: {
    "7": [38.42721463001324, 21.25],
    "9": [18.90278536998676, 36.08],
  },
  varLabels: [
    ["7", "D7 (L1→L2)"],
    ["9", "D9 (L2→L3)"],
  ],

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "L2 FOCUS (+)", fromSurface: "8", toSurface: "9" },
    { text: "L3 (-)", fromSurface: "STO", toSurface: "20" },
  ],

  doublets: [
    { text: "DOE", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  closeFocusM: 6.0,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent infinity row conflicts with its own cardinal data. The modeled infinity state conserves d7+d9 = 57.33 mm and solves the single L2 translation for EFL = 776.37 mm (d7 = 38.42721463001324 mm, d9 = 18.90278536998676 mm). L2 moves objectward toward close focus. The published near row 21.25/36.08 mm is retained and traces to about 6.014 m from the image plane; Canon specifies a 6.0 m production MFD.",

  /* ── Fixed aperture ── */
  nominalFno: 11.31,
  fstopSeries: [11.31],
  maxFstop: 11.31,

  /* ── Layout ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
