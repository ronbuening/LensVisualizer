// Vivitar Series 1 200mm f/3.0 VMC Auto Telephoto
// US Patent 3,942,876, Table IV (FIG. 5; also claims 6 and 13) — Ellis I. Betensky / Ponder & Best, Inc.
// Patent granted March 9, 1976 (filed May 9, 1974). The patent does not number its examples; Table IV is the
// fourth of five tabulated embodiments: "200mm EFL, as scaled for a 24 x 36mm image frame ... f/3.0".
// Production by Komine Co., Ltd., Japan
//
// SCALE: patent values are already at production scale and are stored unscaled (mm).
//
// SOURCE CONFLICT — R7: Table IV, claim 6 and claim 13 (and Table IV of the family member GB 1,408,910) all print
// R7 = -1567.0. As printed the table computes to f = 183.4 mm / BFL 67.4 mm with 1.9 mm of undercorrected marginal
// spherical aberration at f/3, against the patent's own "200mm EFL", BFL 77.5 and FVD 157.9 (Tables II and III of the
// same patent reproduce their stated EFL/BFL to 0.2 / 0.05 mm). This file keeps the earlier single-character repair
// R7 = -567.0 (inferred, not a patent value): it is the only R7 reading that simultaneously balances the f/3 spherical
// aberration (0.85-zone +0.21 / marginal -0.19 mm) and brings the paraxial F-C focus difference to -0.01 mm.
// Calculated result: f = 202.03 mm, BFL = 75.50 mm, FVD = 156.0 mm, L6 f = -249.4 mm (patent text: 200 / 77.5 /
// 157.9 / -240.4). The residual disagreement is an unresolved source inconsistency; the last gap is the calculated
// BFL so the drawn image plane is the paraxial focus of the stored prescription.
//
// FOCUS: the objective L1-L5 moves with the barrel; the compensator L6 is fixed to the mount and film plane.
// Patent row D10 = 3.2 - 15.0 mm ("infinity and 2372mm or about 93 inches") is preserved as the middle focus
// keyframe. In the stored prescription the 15.0 mm state is conjugate to an object 2.286 m from R1 (2.453 m from
// the film), which fixes its focus coordinate at 1.2 / 2.4535. The 33.8 mm endpoint is a calculated extension of the
// same single gap to the production 1.2 m film-plane MFD (m = -0.253); it is not a patent value.
//
// STOP: the patent places the aperture stop after L3 but gives no station. FIG. 5 draws it 14.5-14.9 mm behind R6
// (gap 29.21 mm, i.e. the midpoint within drawing resolution); 15.0 + 14.21 mm is retained. The authored STO sd is
// the exact-ray f/3 iris radius, 20.65 mm (paraxial 19.4 mm; the difference is front-group spherical aberration
// at the stop).
//
// NOTE ON SEMI-DIAMETERS: the patent publishes no clear apertures and FIG. 5 is a schematic drawn at roughly
// 0.103 mm/px whose rims (L1 31.5, L2 28.8, L3 24.4, L4 17.0, L5 14.0, L6 12.6 mm; iris 17.4 mm) are all too small to
// pass the f/3 axial beam, so it fixes proportions only. Surfaces 1, 2, 4, 5, 6, 8 and 9 are set from the exact
// meridional f/3 marginal ray (33.67, 33.39, 28.06, 25.68, 22.92, 17.71, 17.40 mm) plus 0.4-5 % clearance; the
// remaining values are the earlier marginal + chief-ray estimates, which already clear the beam. L1 stops at
// 33.8 mm (67.6 mm clear diameter, inside the 72 mm filter thread) because its edge thickness is already down to
// 1.0 mm there, as FIG. 5 also draws it. Off-axis bundles are mechanically vignetted, as expected.
//
import type { LensDataInput } from "../../types/optics.js";

const LENS_DATA = {
  key: "vivitar-series1-200f3",
  name: "VIVITAR SERIES 1 200mm f/3.0 VMC",
  maker: "Vivitar",
  subtitle: "US 3,942,876 Table IV (FIG. 5) — Betensky / Ponder & Best",
  specs: [
    "6 elements / 6 groups",
    "Sonnar-type telephoto with fixed rear corrector",
    "All-spherical design",
    "MFD 1.2 m (1:4 repro ratio)",
    "72 mm filter thread",
  ],
  focalLengthMarketing: 200,
  focalLengthDesign: 202.0,
  apertureMarketing: 3.0,
  apertureDesign: 3.0,
  imageFormat: "135-full-frame",
  patentNumber: "US 3,942,876",
  patentAuthors: ["Ellis I. Betensky"],
  patentAssignees: ["Ponder & Best, Inc."],
  patentYear: 1976,
  elementCount: 6,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.56873,
      vd: 63.1,
      fl: 101.4,
      glass: "569631 — PSK2 phosphate crown (Schott)",
      apd: false,
      role: "Front positive crown — dominant positive power; strongly convex front surface with nearly flat rear minimizes spherical aberration.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: 139.8,
      glass: "BSC7 (HOYA) / N-BK7 (Schott)",
      apd: false,
      role: "Secondary positive crown; forms air-spaced doublet with L1 (combined fl ≈ 60.5 mm) for spherical and coma correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      fl: -63.2,
      glass: "SF6 (Schott) / S-TIH6 (OHARA)",
      apd: false,
      role: "Telephoto diverger — strongest element in system; high-dispersion dense flint paired against front crowns for chromatic correction. Dominant rear surface R6 provides diverging power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: 74.8,
      glass: "SF6 (Schott) / S-TIH6 (OHARA)",
      apd: false,
      role: "Rear converger — first element after stop; reconverges beam toward image. Same glass as L3 (Sonnar characteristic). Nearly all power from strongly curved rear surface R8.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7127,
      vd: 43.3,
      fl: -71.0,
      glass: "LAFL4 (HOYA catalog-equivalent; production supplier unspecified)",
      apd: false,
      role: "Petzval/aberration balancing — forms near-afocal pair with L4 (combined fl ≈ 7,000 mm). Index mismatch with L4 (1.713 vs 1.805) provides net negative Petzval contribution for field flattening.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.57957,
      vd: 53.7,
      fl: -249.4,
      glass: "N-BALF4 (Schott; BaLF4-class equivalent)",
      apd: false,
      role: "Stationary rear corrector (Betensky patent innovation) — fixed to mount, compensates off-axis aberrations during close focusing; negative power reduces EFL at close focus, decreasing required focusing travel.",
    },
  ],

  surfaces: [
    // ── L1: Front positive meniscus ──
    { label: "1", R: 56.828, d: 12.0, nd: 1.56873, elemId: 1, sd: 33.8 },
    { label: "2", R: 3586.0, d: 0.5, nd: 1.0, elemId: 0, sd: 33.8 },

    // ── L2: Second positive meniscus ──
    { label: "3", R: 62.384, d: 11.3, nd: 1.5168, elemId: 2, sd: 31.0 },
    { label: "4", R: 428.03, d: 5.46, nd: 1.0, elemId: 0, sd: 28.5 },

    // ── L3: Biconcave negative (SF6) ──
    { label: "5", R: -254.83, d: 4.13, nd: 1.80518, elemId: 3, sd: 26.0 },
    { label: "6", R: 64.06, d: 15.0, nd: 1.0, elemId: 0, sd: 24.0 },
    // ↑ d = distance from R6 to aperture stop (15.0 mm into the 29.21 mm gap)

    // ── Aperture stop (station inferred from FIG. 5; sd = exact-ray f/3 iris radius) ──
    { label: "STO", R: 1e15, d: 14.21, nd: 1.0, elemId: 0, sd: 20.65 },
    // ↑ d = distance from stop to R7 (29.21 − 15.0 = 14.21 mm)

    // ── L4: Positive meniscus (SF6) — R7 printed −1567.0; inferred repair −567.0 (see header) ──
    { label: "8", R: -567.0, d: 5.61, nd: 1.80518, elemId: 4, sd: 18.2 },
    { label: "9", R: -54.7, d: 5.24, nd: 1.0, elemId: 0, sd: 18.0 },

    // ── L5: Negative meniscus ──
    { label: "10", R: -38.14, d: 1.85, nd: 1.7127, elemId: 5, sd: 15.0 },
    { label: "11", R: -157.93, d: 3.2, nd: 1.0, elemId: 0, sd: 14.5 },
    // ↑ Variable gap: 3.2 mm (infinity) → 15.0 mm (patent close row) → 33.8 mm (calculated, 1.2 m MFD)

    // ── L6: Fixed rear corrector (negative meniscus) ──
    { label: "12", R: 71.98, d: 2.0, nd: 1.57957, elemId: 6, sd: 14.0 },
    { label: "13", R: 47.56, d: 75.5, nd: 1.0, elemId: 0, sd: 13.5 },
    // ↑ d = computed BFL at infinity (75.50 mm)
  ],

  asph: {},

  /* Patent rows 3.2 and 15.0 mm, then the calculated production endpoint (1.2 m from the film plane). */
  focusPositions: [0, 0.489091, 1],
  var: {
    "11": [3.2, 15.0, 33.8],
  },
  varLabels: [["11", "D11"]],

  focusDescription:
    "Front objective L1–L5 translates objectward as a rigid unit; rear corrector L6 stays fixed to the mount and film plane. One variable gap: 3.2 mm (infinity), 15.0 mm (patent close row), 33.8 mm calculated for the 1.2 m production MFD.",

  groups: [
    { text: "OBJECTIVE (L1–L5)", fromSurface: "1", toSurface: "11" },
    { text: "CORRECTOR (L6)", fromSurface: "12", toSurface: "13" },
  ],
  doublets: [],

  closeFocusM: 1.2,
  nominalFno: 3.0,
  fstopSeries: [3, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.45,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
