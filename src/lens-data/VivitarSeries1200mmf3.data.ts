// Vivitar Series 1 200mm f/3.0 VMC Auto Telephoto
// US Patent 3,942,876, Example 4 (Table IV, FIG. 5) — Ellis I. Betensky / Ponder & Best, Inc.
// Patent granted March 9, 1976 (filed May 9, 1974)
// Production by Komine Co., Ltd., Japan
//
// R7 corrected from patent-printed −1567.0 to −567.0 (see analysis for verification).
// Close-focus gap computed for production MFD of 1.2 m (patent tabulates only to 2,372 mm).
// STO position inferred from FIG. 5 iris placement (~15 mm into 29.21 mm gap after R6).
// Semi-diameters estimated via marginal + chief ray trace with 8% mechanical clearance;
// front elements capped by 72 mm filter thread constraint.
//
import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "vivitar-series1-200f3",
  name: "VIVITAR SERIES 1 200mm f/3.0 VMC",
  maker: "Vivitar",
  subtitle: "US 3,942,876 Ex. 4 (FIG. 5) — Betensky / Ponder & Best",
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
  patentYear: 1976,
  elementCount: 6,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.56873,
      vd: 63.1,
      fl: 101.4,
      glass: "PSK2 (Schott) / S-PHM51 (OHARA)",
      apd: false,
      role: "Front positive crown — dominant positive power; strongly convex front surface with nearly flat rear minimizes spherical aberration.",
    },
    {
      id: 2,
      name: "L12",
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
      name: "L13",
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
      name: "L14",
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
      name: "L15",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7127,
      vd: 43.3,
      fl: -71.0,
      glass: "713-433 region (LaF/BaSF boundary; likely discontinued Japanese type)",
      apd: false,
      role: "Petzval/aberration balancing — forms near-afocal pair with L4 (combined fl ≈ 7,000 mm). Index mismatch with L4 (1.713 vs 1.805) provides net negative Petzval contribution for field flattening.",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.57957,
      vd: 53.7,
      fl: -249.4,
      glass: "BaLF4 (Schott)",
      apd: false,
      role: "Stationary rear corrector (Betensky patent innovation) — fixed to mount, compensates off-axis aberrations during close focusing; negative power reduces EFL at close focus, decreasing required focusing travel.",
    },
  ],

  surfaces: [
    // ── L1: Front positive meniscus ──
    { label: "1", R: 56.828, d: 12.0, nd: 1.56873, elemId: 1, sd: 33.5 },
    { label: "2", R: 3586.0, d: 0.5, nd: 1.0, elemId: 0, sd: 31.5 },

    // ── L2: Second positive meniscus ──
    { label: "3", R: 62.384, d: 11.3, nd: 1.5168, elemId: 2, sd: 31.0 },
    { label: "4", R: 428.03, d: 5.46, nd: 1.0, elemId: 0, sd: 27.0 },

    // ── L3: Biconcave negative (SF6) ──
    { label: "5", R: -254.83, d: 4.13, nd: 1.80518, elemId: 3, sd: 24.0 },
    { label: "6", R: 64.06, d: 15.0, nd: 1.0, elemId: 0, sd: 23.0 },
    // ↑ d = distance from R6 to aperture stop (15.0 mm into the 29.21 mm gap)

    // ── Aperture stop (inferred from FIG. 5 iris placement) ──
    { label: "STO", R: 1e15, d: 14.21, nd: 1.0, elemId: 0, sd: 19.5 },
    // ↑ d = distance from stop to R7 (29.21 − 15.0 = 14.21 mm)

    // ── L4: Positive meniscus (SF6) — R7 corrected from −1567.0 to −567.0 ──
    { label: "8", R: -567.0, d: 5.61, nd: 1.80518, elemId: 4, sd: 17.5 },
    { label: "9", R: -54.7, d: 5.24, nd: 1.0, elemId: 0, sd: 17.0 },

    // ── L5: Negative meniscus ──
    { label: "10", R: -38.14, d: 1.85, nd: 1.7127, elemId: 5, sd: 15.0 },
    { label: "11", R: -157.93, d: 3.2, nd: 1.0, elemId: 0, sd: 14.5 },
    // ↑ Variable gap: 3.20 mm (infinity) → 33.80 mm (1.2 m close focus)

    // ── L6: Fixed rear corrector (negative meniscus) ──
    { label: "12", R: 71.98, d: 2.0, nd: 1.57957, elemId: 6, sd: 14.0 },
    { label: "13", R: 47.56, d: 75.5, nd: 1.0, elemId: 0, sd: 13.5 },
    // ↑ d = computed BFL at infinity (75.50 mm)
  ],

  asph: {},

  var: {
    "11": [3.2, 33.8],
  },
  varLabels: [["11", "D11"]],

  focusDescription:
    "Unit focus — front objective (L1–L5) translates as rigid unit; rear corrector L6 fixed to mount. Single variable gap between L5 and L6.",

  groups: [
    { text: "G1 (OBJECTIVE)", fromSurface: "1", toSurface: "11" },
    { text: "G2 (CORRECTOR)", fromSurface: "12", toSurface: "13" },
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
