import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — CARL ZEISS PLANAR 80mm f/2.8 (Graflex XL)
 *
 * Source prescription: US 2,799,207, Embodiment I (job-card Example 1), Günther Lange / Carl Zeiss.
 * The patent normalizes all dimensions to f=1; every patent length was uniformly scaled by 80.0 mm per source unit.
 * The resulting paraxial design EFL is 79.9996065 mm. The marketed focal length remains 80 mm.
 *
 * Production correlation: high-confidence inference, not manufacturer-confirmed patent attribution. Graflex literature
 * independently lists an 80mm Zeiss Planar f/2.8 with five elements for the Graflex XL. The patent publishes a 56°
 * full field; the Graflex catalog states 58° diagonal coverage on the ideal 2¼×2¾-inch format. That difference is retained.
 *
 * Stop model: the patent figure places diaphragm D inside l2 but gives no numerical station or physical diameter.
 * Fig. 1 shows D approximately midway between r4 and r5, so l2 is split equally: 9.7968 mm + 9.7968 mm.
 * STO.sd = 10.278583 mm is calibrated from the published f/2.8 using the paraxial entrance-pupil magnification of the
 * implemented front group. Agreement with f/2.8 therefore verifies the calibration, not an unpublished diaphragm diameter.
 *
 * Semi-diameters are modeled, not patent-published. They were chosen from exact d-line meridional ray envelopes through
 * the calibrated stop, checked at 17.5565° (0.6 × the canonical 6×7 paraxial half-field at the implemented EFL), and
 * reconciled with the Fig. 1 optical section plus current edge-thickness/rim-slope/cross-gap rules. A separate 29° catalog-
 * edge diagnostic vignettes; it is not represented as unvignetted full-pupil clearance. No layout control hides geometry.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent supplies one infinity prescription. Graflex documents external
 * bayonet/focusing-ring operation and a 2.5 ft scale-focus limit, but no optical close-focus spacing state or barrel travel;
 * this file therefore leaves var empty and uses closeFocusM only as product metadata.
 *
 * Glass labels are coordinate/class identifications only. Supplier/melt identity is unresolved, and no catalog nC/nF/ng
 * or dPgF values are promoted into the patent model.
 */

const LENS_DATA = {
  key: "carl-zeiss-planar-80mm-f28-graflex-xl",
  maker: "Carl Zeiss",
  name: "CARL ZEISS PLANAR 80mm f/2.8 (Graflex XL)",
  subtitle: "US 2,799,207 — Embodiment I; high-confidence Graflex XL correlation, not manufacturer-confirmed",
  specs: [
    "5 ELEMENTS / 4 GROUPS",
    "80 mm / f ≈ 80.00 mm DESIGN",
    "f/2.8 — CALIBRATED STOP MODEL",
    "PATENT FIELD 56° / PRODUCT CATALOG 58°",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 80,
  focalLengthDesign: 79.9996065,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  imageFormat: "6x7",
  patentNumber: "US 2,799,207",
  patentAuthors: ["Günther Lange"],
  patentAssignees: ["Carl-Zeiss-Stiftung"],
  patentYear: 1957,
  elementCount: 5,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "LI",
      diagramLabel: "LI",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 69.090354,
      glass: "N-SK16 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      role: "Outer positive member on the object side.",
    },
    {
      id: 2,
      name: "LII",
      diagramLabel: "LII",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      fl: -106.177114,
      glass: "SF4 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      role: "Inner negative member before the diaphragm.",
    },
    {
      id: 3,
      name: "LIII",
      diagramLabel: "LIII",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      fl: -22.405177,
      glass: "SF1 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      cemented: "D1",
      role: "Negative component nearest the diaphragm in the rear cemented member.",
    },
    {
      id: 4,
      name: "LIV",
      diagramLabel: "LIV",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.69067,
      vd: 54.9,
      indexReference: "d",
      fl: 31.845955,
      glass: "K-LaK9 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      cemented: "D1",
      role: "Positive component cemented to LIII; together they form the rear inner dispersive member.",
    },
    {
      id: 5,
      name: "LV",
      diagramLabel: "LV",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      fl: 69.546577,
      glass: "SF4 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      role: "Outer positive member on the image side.",
    },
  ],

  surfaces: [
    { label: "1", R: 27.77752, d: 6.0584, nd: 1.62041, elemId: 1, sd: 20 },
    { label: "2", R: 72.33048, d: 0.1056, nd: 1, elemId: 0, sd: 20 },
    { label: "3", R: 24.75696, d: 4.9888, nd: 1.7552, elemId: 2, sd: 17.5 },
    { label: "4", R: 17.2764, d: 9.7968, nd: 1, elemId: 0, sd: 14 },
    { label: "STO", R: 1e15, d: 9.7968, nd: 1, elemId: 0, sd: 10.278583 },
    { label: "5", R: -18.29944, d: 1.0592, nd: 1.71736, elemId: 3, sd: 16.2 },
    { label: "6", R: 135.2712, d: 7.5936, nd: 1.69067, elemId: 4, sd: 16.5 },
    { label: "7", R: -25.66352, d: 0.1056, nd: 1, elemId: 0, sd: 16.5 },
    { label: "8", R: -227.0856, d: 5.296, nd: 1.7552, elemId: 5, sd: 20 },
    { label: "9", R: -43.08392, d: 58.888, nd: 1, elemId: 0, sd: 20 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "MEMBER I", fromSurface: "1", toSurface: "2" },
    { text: "MEMBER II", fromSurface: "3", toSurface: "4" },
    { text: "MEMBER III", fromSurface: "5", toSurface: "7" },
    { text: "MEMBER IV", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  closeFocusM: 0.762,
  focusDescription:
    "Infinity prescription only; the patent gives no focus travel. The Graflex lens focuses to 2.5 ft (0.762 m).",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
