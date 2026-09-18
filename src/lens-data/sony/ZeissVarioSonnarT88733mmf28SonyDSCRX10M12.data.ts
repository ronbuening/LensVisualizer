// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * +======================================================================+
 * |        LENS DATA - SONY ZEISS VARIO-SONNAR T* 8.8-73.3mm f/2.8       |
 * |                        (Sony Cyber-shot DSC-RX10 / DSC-RX10 II)      |
 * +======================================================================+
 * |  Data source: US 2014/0354857 A1, Numerical Example 7 / Seventh      |
 * |    Embodiment (Sony Corporation; Kato, Oohata, Hagiwara).            |
 * |  Positive-lead five-group zoom, powers + - + - +, with the fourth    |
 * |    group reduced to a single biconcave element used for focus.       |
 * |  14 elements / 11 air-separated groups, 13 aspherical surfaces on    |
 * |    7 elements.                                                       |
 * |  Focus: inner focus by axial translation of G4 (L12 alone).          |
 * |                                                                      |
 * |  ZOOM MODEL                                                          |
 * |    Zoom positions are the patent's three published infinity states,  |
 * |      f = 9.193 / 24.376 / 64.678 mm (Table 21).                      |
 * |    Zoom variable gaps: D5, D12, D20, D22.                            |
 * |    Focus variable gaps: none modelled (see FOCUS DISPOSITION).       |
 * |    Reversing group: D20 is non-monotonic (2.974 -> 6.090 -> 4.759),  |
 * |      so the published intermediate state must be preserved.          |
 * |    G5 is axially fixed during zoom for this example (para 0169), so  |
 * |      the rear spacing to the image plane is constant.                |
 * |                                                                      |
 * |  NOTE ON SCALING: none. s = 1. The production 8.8-73.3 mm range is   |
 * |    not a uniform scaling of the patent's 9.193-64.678 mm design      |
 * |    range (8.8/9.193 = 0.957 versus 73.3/64.678 = 1.133), so the      |
 * |    prescription is kept at patent scale and the marketed values are  |
 * |    carried separately in focalLengthMarketing / apertureMarketing.   |
 * |    No aspheric coefficient transform was required.                   |
 * |                                                                      |
 * |  NOTE ON A SOURCE CORRECTION: rendered Table 19 prints Nd = 1.168    |
 * |    for surface 21 (L12 front). That literal value reproduces none    |
 * |    of the published focal lengths (6.961 / 20.570 / 77.680 mm versus |
 * |    9.193 / 24.376 / 64.678 mm) and gives L12 f = -119.24 mm against  |
 * |    the patent's own Table 25 value f4 = -25.904 mm. Nd = 1.768 is    |
 * |    implemented here: it reproduces all three published focal lengths |
 * |    within source rounding and gives f4 = -26.03 mm. Example 6 uses   |
 * |    the same 1.768 / 49.241 coordinate for its analogous focus        |
 * |    element. This is a proposed patent-source correction, not a       |
 * |    transcription fix; the raw 1.168 row is preserved in the dossier. |
 * |                                                                      |
 * |  NOTE ON OMITTED PLANES: patent surfaces 27-30 are two plane-        |
 * |    parallel 1.517 / 64.166 rear plates (sensor cover / filter        |
 * |    stack). They are excluded per LENS_DATA_SPEC.md § Scope. Their    |
 * |    propagation is replaced by the d-line air-equivalent distance     |
 * |    sum(d/n) = 6.107356625 mm carried on surface 26, which preserves  |
 * |    the axial position of the patent image plane.                     |
 * |                                                                      |
 * |  NOTE ON SEMI-DIAMETERS: not published for Example 7. Every sd here  |
 * |    is modelled, not sourced. They are the envelope of exact          |
 * |    meridional ray traces - axial marginal bundles at the calibrated  |
 * |    stop, 0.60-half-field bundles, and full-half-field chief rays -   |
 * |    sampled at nine zoom stations, plus about 8 % clearance.          |
 * |    Surfaces 2/3 (4.4 % / 6.9 %) and surface 8 (5.9 %) carry reduced  |
 * |    clearance because L2 rim thickness and the 7A-8 air gap bind.     |
 * |                                                                      |
 * |  NOTE ON STOP POSITION AND DIAMETER: the axial stop position is      |
 * |    published (patent surface 13, between G2 and G3, moving with G3   |
 * |    during zoom, para 0311). The physical iris diameter is not        |
 * |    published. The authored STO sd is the wide-station radius         |
 * |    calibrated from the published Fno = 2.912, and zoomApertureModel  |
 * |    is set so the builder derives the remaining station radii the     |
 * |    same way. A single fixed iris cannot hold Fno = 2.912 across this |
 * |    zoom range (it would give about f/4.65 at the telephoto end), so  |
 * |    the schedule is a calculated aperture model, not source data.     |
 * |                                                                      |
 * |  FOCUS DISPOSITION: NO_INTERNAL_RECONSTRUCTION. The patent names     |
 * |    G4 as the focus group (para 0304) but publishes no close-focus    |
 * |    spacing rows for Example 7, and the manufacturer's minimum        |
 * |    focusing distance alone does not determine a unique internal      |
 * |    focus law. Every var entry therefore repeats its infinity value   |
 * |    at both focus positions: the gaps vary with zoom only, and no     |
 * |    internal focus travel is invented. closeFocusM is a product-      |
 * |    derived label, described at that field.                           |
 * |                                                                      |
 * |  PRODUCT CORRELATION: convergent, not manufacturer-confirmed. Sony   |
 * |    publishes 14 elements in 11 groups with 7 aspheric elements for   |
 * |    the RX10 and RX10 II, matching the resolved Example 7 structure,  |
 * |    and the patent's 2013-05-31 priority precedes the 2013-10-16      |
 * |    announcement. No primary Sony source names this patent.           |
 * |                                                                      |
 * |  NOTE ON ATTRIBUTION: maker is Sony. US 2014/0354857 A1 names Sony   |
 * |    Corporation as both applicant (71) and assignee (73), with all    |
 * |    three inventors at Tokyo; Zeiss appears nowhere in the document.  |
 * |    ZEISS Vario-Sonnar T* is a branding mark carried on the product,  |
 * |    so it is kept as the optical-line name after the manufacturer in  |
 * |    the display title rather than as the maker-page owner.            |
 * |                                                                      |
 * |  Optical design only: glass surfaces, stop, variable gaps.           |
 * |  No sensor glass, filters, mechanics, or parent/donor designs.       |
 * |  See LENS_DATA_SPEC.md § Scope: What to Include.                     |
 * +======================================================================+
 */

const LENS_DATA = {
  /* -- Identity -- */
  key: "sony-vario-sonnar-88-733f28-rx10",
  maker: "Sony",
  name: "SONY ZEISS VARIO-SONNAR T* 8.8-73.3mm f/2.8 (Sony Cyber-shot DSC-RX10 / DSC-RX10 II)",
  subtitle: "US 2014/0354857 A1 EXAMPLE 7 - SONY CORPORATION / KATO, OOHATA, HAGIWARA",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "f = 9.19-64.68 mm (DESIGN)",
    "F/2.91 (DESIGN)",
    "2ω = 81.98°-12.93°",
    "13 ASPHERICAL SURFACES / 7 ELEMENTS",
  ],

  /* -- Explicit metadata -- marketing values are the Sony/ZEISS product figures;
   *    design values are the patent's Example 7 Table 21 figures. */
  focalLengthMarketing: [8.8, 73.3],
  focalLengthDesign: [9.193, 64.678],
  apertureMarketing: 2.8,
  apertureDesign: 2.912,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1-inch-type",
  patentNumber: "US 2014/0354857 A1",
  patentAuthors: ["Takuya Kato", "Atsushi Oohata", "Hiroki Hagiwara"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2014,
  elementCount: 14,
  groupCount: 11,

  /* -- Elements -- front to rear. Standalone thick-lens focal lengths in air,
   *    recomputed from the values in this file. Glass strings are vendor-neutral six-digit
   *    classes: the patent names no supplier, and no catalog coordinate uniquely establishes
   *    the production melt. See LENS_DATA_SPEC.md § Glass Identification. */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.847,
      vd: 23.784,
      fl: -216.23,
      glass: "FDS90 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      cemented: "D1",
      role: "Front cemented flint; corrects axial colour that peaks at the telephoto end",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.607,
      fl: 101.43,
      glass: "FCD1 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      cemented: "D1",
      apd: "inferred",
      apdNote: "ED/APD inferred from the FCD1-class catalog match; the patent does not identify the production glass or publish partial dispersion.",
      role: "Cemented partner to L1; high-Abbe crown carrying the doublet's positive power",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.593,
      vd: 67.001,
      fl: 123.56,
      glass: "J-PSKH4 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Second positive element of the fixed-power front collector",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (2x Asph)",
      nd: 1.803,
      vd: 45.57,
      fl: -13.45,
      glass: "803456 - high-index lanthanum class (catalog unresolved)",
      role: "Leading variator element; both surfaces aspheric for wide-end astigmatism control",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.729,
      vd: 54.673,
      fl: -20.67,
      glass: "S-LAL18 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      cemented: "D2",
      role: "Cemented negative of the variator's achromatising pair",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 25.458,
      fl: 15.55,
      glass: "TAFD40 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      cemented: "D2",
      role: "Cemented positive partner to L5; very high index limits variator Petzval load",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (2x Asph)",
      nd: 1.834,
      vd: 37.285,
      fl: -36.64,
      glass: "NBFD10 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Rear variator element, concave to the object; both surfaces aspheric",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Pos. (2x Asph)",
      nd: 1.592,
      vd: 67.138,
      fl: 20.95,
      glass: "M-PCD51 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "First positive element of the zooming group behind the stop; both surfaces aspheric",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.487,
      vd: 70.44,
      fl: 34.75,
      glass: "FC5 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      cemented: "D3",
      role: "Cemented positive of the G3 achromatising pair",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.806,
      vd: 33.269,
      fl: -13.69,
      glass: "NBFD15 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      cemented: "D3",
      role: "Cemented negative partner to L9; the pair has net negative power",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Pos. (2x Asph)",
      nd: 1.589,
      vd: 61.177,
      fl: 17.98,
      glass: "S-BAL35 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Rear G3 element; displaced transversely for vibration reduction (para 0312)",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Neg. (2x Asph)",
      nd: 1.768,
      vd: 49.241,
      fl: -26.03,
      glass: "M-TAF101 — coordinate-compatible spectral proxy; production supplier unconfirmed; nd follows the documented patent correction",
      role: "The complete fourth group; single-element axial focus member",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Pos. (2x Asph)",
      nd: 1.592,
      vd: 67.022,
      fl: 17.63,
      glass: "M-PCD51 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Positive member of the axially fixed rear group",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Neg. (1x Asph)",
      nd: 1.619,
      vd: 63.533,
      fl: -43.57,
      glass: "M-PCD4 — coordinate-compatible spectral proxy; production supplier unconfirmed",
      role: "Rear negative element; controls peripheral field curvature and chief-ray incidence",
    },
  ],

  /* -- Surface prescription -- patent Table 19 surface numbering is retained; an "A"
   *    suffix marks an aspherical surface. Patent surfaces 27-30 (rear plates) are omitted
   *    and surface 26 carries the air-equivalent distance to the image plane. */
  surfaces: [
    { label: "1", R: 63.103, d: 1.3, nd: 1.847, elemId: 1, sd: 25.98 }, // L1 front
    { label: "2", R: 46.489, d: 6.4, nd: 1.497, elemId: 2, sd: 23.7 }, // L1 -> L2 cemented junction
    { label: "3", R: 570.0, d: 0.2, nd: 1.0, elemId: 0, sd: 23.7 }, // L2 rear -> air
    { label: "4", R: 49.72, d: 4.5, nd: 1.593, elemId: 3, sd: 22.94 }, // L3 front
    { label: "5", R: 149.486, d: 1.92, nd: 1.0, elemId: 0, sd: 22.57 }, // L3 rear -> air (D5, zoom)
    { label: "6A", R: 300.0, d: 0.8, nd: 1.803, elemId: 4, sd: 11.3 }, // L4 front (asph)
    { label: "7A", R: 10.415, d: 5.63, nd: 1.0, elemId: 0, sd: 8.58 }, // L4 rear -> air (asph)
    { label: "8", R: -24.535, d: 0.85, nd: 1.729, elemId: 5, sd: 8.02 }, // L5 front
    { label: "9", R: 39.6, d: 4.0, nd: 2.001, elemId: 6, sd: 8.04 }, // L5 -> L6 cemented junction
    { label: "10", R: -24.356, d: 1.52, nd: 1.0, elemId: 0, sd: 7.89 }, // L6 rear -> air
    { label: "11A", R: -16.109, d: 1.0, nd: 1.834, elemId: 7, sd: 7.17 }, // L7 front (asph)
    { label: "12A", R: -35.036, d: 25.033, nd: 1.0, elemId: 0, sd: 7.47 }, // L7 rear -> air (asph, D12, zoom)
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 4.75 }, // aperture stop, patent surface 13; travels with G3
    { label: "14A", R: 18.617, d: 6.2, nd: 1.592, elemId: 8, sd: 9.15 }, // L8 front (asph)
    { label: "15A", R: -32.54, d: 0.4, nd: 1.0, elemId: 0, sd: 9.39 }, // L8 rear -> air (asph)
    { label: "16", R: 37.588, d: 5.3, nd: 1.487, elemId: 9, sd: 9.0 }, // L9 front
    { label: "17", R: -29.355, d: 1.2, nd: 1.806, elemId: 10, sd: 8.42 }, // L9 -> L10 cemented junction
    { label: "18", R: 18.005, d: 2.86, nd: 1.0, elemId: 0, sd: 8.07 }, // L10 rear -> air
    { label: "19A", R: 17.843, d: 5.5, nd: 1.589, elemId: 11, sd: 8.82 }, // L11 front (asph)
    { label: "20A", R: -23.092, d: 2.974, nd: 1.0, elemId: 0, sd: 8.81 }, // L11 rear -> air (asph, D20, zoom)
    { label: "21A", R: -87.0, d: 0.82, nd: 1.768, elemId: 12, sd: 7.28 }, // L12 front (asph)
    { label: "22A", R: 26.061, d: 6.789, nd: 1.0, elemId: 0, sd: 7.02 }, // L12 rear -> air (asph, D22, zoom)
    { label: "23A", R: 25.131, d: 7.0, nd: 1.592, elemId: 13, sd: 10.69 }, // L13 front (asph)
    { label: "24A", R: -16.0, d: 0.8, nd: 1.0, elemId: 0, sd: 10.66 }, // L13 rear -> air (asph)
    { label: "25A", R: -102.89, d: 1.5, nd: 1.619, elemId: 14, sd: 9.93 }, // L14 front (asph)
    { label: "26", R: 36.75, d: 6.107356625, nd: 1.0, elemId: 0, sd: 9.49 }, // L14 rear -> air-equivalent BFD to image plane
  ],

  /* -- Aspherical coefficients -- patent Table 20. The Example 7 equation is the standard
   *    (1 + K) conic form, so the printed conic constants map directly; all are 0. Only the
   *    published even orders A4-A10 exist, so A12/A14 are carried as 0 and no odd orders
   *    are declared. No scaling transform was applied. */
  asph: {
    "6A": { K: 0.0, A4: -3.93629e-5, A6: 3.95479e-7, A8: -1.09912e-9, A10: 0.0, A12: 0, A14: 0 },
    "7A": { K: 0.0, A4: -7.86178e-5, A6: -1.27061e-7, A8: -1.97636e-9, A10: 5.44302e-11, A12: 0, A14: 0 },
    "11A": { K: 0.0, A4: 4.69636e-5, A6: -1.01321e-6, A8: 9.68569e-9, A10: 0.0, A12: 0, A14: 0 },
    "12A": { K: 0.0, A4: 1.71182e-5, A6: -8.70926e-7, A8: 7.13914e-9, A10: 0.0, A12: 0, A14: 0 },
    "14A": { K: 0.0, A4: -4.28289e-5, A6: -6.05947e-8, A8: -6.34692e-10, A10: -3.14342e-11, A12: 0, A14: 0 },
    "15A": { K: 0.0, A4: -1.39722e-5, A6: 1.34774e-7, A8: -4.09781e-9, A10: -5.61077e-12, A12: 0, A14: 0 },
    "19A": { K: 0.0, A4: -6.10744e-5, A6: 6.49748e-7, A8: -1.2169e-8, A10: 5.57526e-11, A12: 0, A14: 0 },
    "20A": { K: 0.0, A4: 6.06683e-6, A6: 6.56512e-7, A8: -1.16512e-8, A10: 5.19636e-11, A12: 0, A14: 0 },
    "21A": { K: 0.0, A4: 7.86577e-5, A6: -7.12349e-7, A8: 1.05051e-8, A10: -6.55397e-11, A12: 0, A14: 0 },
    "22A": { K: 0.0, A4: 9.18156e-5, A6: -1.06249e-6, A8: 2.03069e-8, A10: -1.45685e-10, A12: 0, A14: 0 },
    "23A": { K: 0.0, A4: 4.00117e-6, A6: -2.08628e-7, A8: 1.18572e-9, A10: -3.42647e-12, A12: 0, A14: 0 },
    "24A": { K: 0.0, A4: 0.000138672, A6: -4.09166e-7, A8: 1.49433e-9, A10: -3.22392e-14, A12: 0, A14: 0 },
    "25A": { K: 0.0, A4: -7.74228e-5, A6: 1.48954e-6, A8: -1.12176e-8, A10: 4.31348e-11, A12: 0, A14: 0 },
  },

  /* -- Variable air spacings -- zoom only. Each vector repeats its infinity value at both
   *    focus positions because Example 7 publishes no close-focus spacing states and the
   *    focus disposition is NO_INTERNAL_RECONSTRUCTION. D20 reverses across the published
   *    intermediate station, which is why all three source states are retained. */
  var: {
    "5": [
      [1.92, 1.92],
      [18.225, 18.225],
      [39.492, 39.492],
    ],
    "12A": [
      [25.033, 25.033],
      [9.558, 9.558],
      [4.784, 4.784],
    ],
    "20A": [
      [2.974, 2.974],
      [6.09, 6.09],
      [4.759, 4.759],
    ],
    "22A": [
      [6.789, 6.789],
      [17.332, 17.332],
      [29.926, 29.926],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["12A", "D12"],
    ["20A", "D20"],
    ["22A", "D22"],
  ],

  /* -- Zoom -- the three published infinity states of Example 7 (Table 21). */
  zoomPositions: [9.193, 24.376, 64.678],
  zoomLabels: ["Wide", "Tele"],

  /* -- Group and doublet annotations -- visual only. */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6A", toSurface: "12A" },
    { text: "G3", fromSurface: "14A", toSurface: "20A" },
    { text: "G4 FOCUS", fromSurface: "21A", toSurface: "22A" },
    { text: "G5", fromSurface: "23A", toSurface: "26" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
  ],

  /* -- Focus configuration --
   *    closeFocusM is product-derived, not a patent value, and no internal focus travel is
   *    modelled. Sony publishes an AF range from about 3 cm at the wide end measured from the
   *    front of the lens; adding the modelled wide-state front-vertex-to-image distance of
   *    101.876 mm gives an object-to-image conjugate of about 0.132 m. The unpublished offset
   *    from the barrel front to the first optical vertex makes this a lower bound. The telephoto
   *    product figure (about 25 cm from the lens front) is not carried, because Example 7
   *    publishes no intermediate-station close-focus conjugate to interpolate through. */
  closeFocusM: 0.132,
  focusDescription:
    "Inner focus: the fourth group, the single biconcave element L12, translates along the axis; all other groups are stationary during focus. The patent publishes no close-focus spacing states, so no internal focus travel is modelled.",

  /* -- Aperture configuration --
   *    nominalFno is the patent's modelled open f-number, constant across the zoom range.
   *    zoomApertureModel derives a per-station iris radius from it (about 4.75 / 6.30 / 7.59 mm
   *    at the three published states); this is a calculated model, not a published diameter
   *    schedule. The f-stop series ends at the RX10's marketed F16 minimum aperture. */
  nominalFno: 2.912,
  zoomApertureModel: "from-nominal-fno",
  fstopSeries: [2.8, 3.5, 4, 5.6, 8, 11, 16],

  /* -- Layout tuning -- yScFill is set so the vertical scale is close to isotropic with the
   *    default scFill at the telephoto-end track of about 144 mm. */
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
