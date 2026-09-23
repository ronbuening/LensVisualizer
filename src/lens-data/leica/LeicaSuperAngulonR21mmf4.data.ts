import type { LensDataInput } from "../../types/optics.js";

/**
 * LEICA SUPER-ANGULON-R 21mm f/4 — US 3,512,874 Example 3.
 *
 * Source/model notes:
 * - The selected patent example is normalized to f=100 and is uniformly scaled by 0.21 to the patent's stated
 *   21 mm / 24x36 mm implementation. All radii, spacings, semi-diameters, and image-plane distances are scaled;
 *   indices and Abbe numbers remain at the native e-line reference. The design is all-spherical.
 * - Two source corrections are applied only in the modeled branch while the raw Table 3 values remain preserved in
 *   the dossier: r15 = -259.71 (Claim 3 and the printed surface power) and d10 = 18.45 (Claim 3 / priority family).
 * - The aperture stop is inferred from Fig. 3 inside the published d12 diaphragm space. The drawing uses a finite-width
 *   iris symbol rather than a dimensioned stop plane; the model retains a 37.5% split from r12 toward r13 as an
 *   approximate placement (1.08990 / 1.81650 mm after scaling), not as a published coordinate.
 * - Stop semi-diameter 4.3365993427 mm is calibrated from the published f/4 target using the modeled entrance pupil.
 *   It is not a published physical diaphragm diameter.
 * - NOTE ON SEMI-DIAMETERS: the patent publishes no clear diameters. Values began as exact spherical meridional ray
 *   envelopes (about 2% clearance at the 45° half-field where geometry permits; surfaces 6 and 14/15 limited by the
 *   90%-of-gap intrusion rule). The 2026-09-23 figure pass measured Fig. 3 at 300/600 dpi (≈21.7 px/mm at 300 dpi
 *   from the vertex track). The drawing's rims are uniformly about 0.73x the ray-envelope scale (its iris and L1 rim
 *   agree on that factor), so rims are compared proportionally. Surfaces 7 and 10-12 were reduced to follow the
 *   drawing's flat-topped members IV and V (8.7/8.65/8.5 and 6.4/6.4/6.3 mm); everything else already sat within
 *   ~10% of the drawing and is retained. The complete on-axis bundle, the default 0.6-field (27°) bundle, and the
 *   45° chief ray are contained; the extreme 45° f/4 meridional bundle is intentionally vignetted.
 * - Focus status is NO_INTERNAL_RECONSTRUCTION. The 0.2 m production MFD is retained only as product metadata; the
 *   patent supplies no focus-state prescription or internal-motion law, so no variable focus gaps are invented.
 * - Production correlation to Leica/Leitz code 11813 is strong research correlation, not manufacturer-confirmed
 *   patent attribution. The patent's 90° design field and the manufacturer's 92° marketed angle remain distinct.
 * - Leitz manufacturer literature confirms f/22 as an available production stop; maxFstop/fstopSeries retain that
 *   mechanical aperture range without changing the published f/4 wide-open optical state.
 */

const LENS_DATA = {
  key: "leica-super-angulon-r-21mm-f4",
  maker: "Leica",
  name: "LEICA SUPER-ANGULON-R 21mm f/4",
  subtitle: "US 3,512,874 Example 3 — strong research correlation; not manufacturer-confirmed attribution",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "21mm (20.9993mm MODELED EFL)",
    "f/4",
    "90° PATENT FIELD / 92° MARKETED ANGLE",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 21,
  focalLengthDesign: 20.9993225372,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["leica-r"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,512,874",
  patentAuthors: ["Walter Wöltche"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1970,
  elementCount: 10,
  groupCount: 8,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 90,
    maxTraceFieldDeg: 45,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.52736,
      vd: 64.31,
      indexReference: "e",
      fl: 164.830086,
      glass: "PC3 (HOYA e-line catalog equivalent of historical SCHOTT PK3 class; production supplier unspecified)",
      role: "Front positive meniscus preceding the two negative front menisci.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62287,
      vd: 60.06,
      indexReference: "e",
      fl: -53.796526,
      glass: "N-SK16 class (supplier unproven)",
      role: "First negative meniscus of the front retrofocus section.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.66104,
      vd: 57.08,
      indexReference: "e",
      fl: -23.689676,
      glass: "K-LaK11 (SUMITA e-line catalog equivalent of historical SCHOTT LaK11 class; production supplier unspecified)",
      role: "Second negative front meniscus; completes the strongly negative front component A.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.62287,
      vd: 60.06,
      indexReference: "e",
      fl: -27.484387,
      glass: "N-SK16 class (supplier unproven)",
      cemented: "IV",
      role: "Negative first lens of the thick positive fourth member.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5353,
      vd: 45.67,
      indexReference: "e",
      fl: 25.164583,
      glass: "FTM8 (OHARA e-line catalog proxy; production supplier unspecified)",
      cemented: "IV",
      role: "Positive second lens of member IV; the cemented member is deliberately thick ahead of the diaphragm.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.61114,
      vd: 45.92,
      indexReference: "e",
      fl: 29.548135,
      glass: "H-BaF6 class (supplier unproven)",
      cemented: "V",
      role: "Positive first lens of the fifth member immediately before the diaphragm.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.5343,
      vd: 48.66,
      indexReference: "e",
      fl: 53.773349,
      glass: "S-TIL6 class (supplier unproven)",
      cemented: "V",
      role: "Positive second lens of member V; its cemented interface is cited for higher-order pupil/asymmetry control.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.74618,
      vd: 27.97,
      indexReference: "e",
      fl: -15.13237,
      glass: "FD3 (HOYA e-line catalog equivalent of historical SCHOTT SF3 class; production supplier unspecified)",
      role: "Negative sixth member immediately behind the diaphragm.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.62287,
      vd: 60.06,
      indexReference: "e",
      fl: 29.256133,
      glass: "N-SK16 class (supplier unproven)",
      role: "Positive seventh member in the rear component.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Plano-Convex Positive",
      nd: 1.59142,
      vd: 61.03,
      indexReference: "e",
      fl: 34.715938,
      glass: "N-SK5 (SCHOTT e-line catalog equivalent; production supplier unspecified)",
      role: "Positive rear member completing the long-back-focus relay.",
    },
  ],

  surfaces: [
    { label: "1", R: 59.9151, d: 5.8128, nd: 1.52736, elemId: 1, sd: 27.45 },
    { label: "2", R: 186.3645, d: 0.0966, nd: 1, elemId: 0, sd: 26.4 },
    { label: "3", R: 29.0577, d: 2.1315, nd: 1.62287, elemId: 2, sd: 18.55 },
    { label: "4", R: 15.1242, d: 5.8128, nd: 1, elemId: 0, sd: 13.54 },
    { label: "5", R: 30.849, d: 1.743, nd: 1.66104, elemId: 3, sd: 13.15 },
    { label: "6", R: 10.1535, d: 5.3298, nd: 1, elemId: 0, sd: 8.6 },
    { label: "7", R: 1e15, d: 6.783, nd: 1.62287, elemId: 4, sd: 8.7 },
    { label: "8", R: 17.1192, d: 4.263, nd: 1.5353, elemId: 5, sd: 8.65 },
    { label: "9", R: -57.7164, d: 0.1932, nd: 1, elemId: 0, sd: 8.5 },
    { label: "10", R: 23.5347, d: 3.8745, nd: 1.61114, elemId: 6, sd: 6.4 },
    { label: "11", R: -72.7545, d: 5.6196, nd: 1.5343, elemId: 7, sd: 6.4 },
    { label: "12", R: -21.1512, d: 1.0899, nd: 1, elemId: 0, sd: 6.3 },
    { label: "STO", R: 1e15, d: 1.8165, nd: 1, elemId: 0, sd: 4.3365993427 },
    { label: "13", R: -15.1725, d: 1.0668, nd: 1.74618, elemId: 8, sd: 4.9 },
    { label: "14", R: 45.4692, d: 0.6783, nd: 1, elemId: 0, sd: 5.45 },
    { label: "15", R: -54.5391, d: 1.9383, nd: 1.62287, elemId: 9, sd: 5.45 },
    { label: "16", R: -13.8453, d: 0.0966, nd: 1, elemId: 0, sd: 6.3 },
    { label: "17", R: 1e15, d: 1.9383, nd: 1.59142, elemId: 10, sd: 7.3 },
    { label: "18", R: -20.5317, d: 36.5226699516, nd: 1, elemId: 0, sd: 7.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "A", fromSurface: "1", toSurface: "6" },
    { text: "B", fromSurface: "7", toSurface: "9" },
    { text: "C", fromSurface: "10", toSurface: "12" },
    { text: "D", fromSurface: "13", toSurface: "18" },
  ],

  doublets: [
    { text: "IV", fromSurface: "7", toSurface: "9" },
    { text: "V", fromSurface: "10", toSurface: "12" },
  ],

  closeFocusM: 0.2,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — static patent prescription only; production MFD 0.2 m is metadata, not a reconstructed focus state.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
