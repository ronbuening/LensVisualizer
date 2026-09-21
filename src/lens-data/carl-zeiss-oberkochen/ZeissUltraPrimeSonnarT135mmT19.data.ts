// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — CARL ZEISS ULTRA PRIME SONNAR T* 135mm T1.9       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2017/0307860 A1, first specific embodiment          ║
 * ║    (job-card Example 1), Carl Zeiss AG; inventors M. Pretorius and   ║
 * ║    V. Blahnik. Construction table p. 8; ¶¶0076–0086; Fig. 7.         ║
 * ║  135 mm f/1.8 cine objective with a removable free-form wavefront    ║
 * ║    manipulator (soft-focus/SA module) ahead of the stop.             ║
 * ║  Modeled: 8 elements / 7 groups, all spherical; the two N-LASF44     ║
 * ║    manipulator plates (source surfaces 8–11) are omitted.            ║
 * ║  Focus: infinity only. Production focus is floating/internal         ║
 * ║    (ARRI/ZEISS); the patent publishes no finite-object spacings.     ║
 * ║                                                                      ║
 * ║  PRODUCTION CORRELATION: research inference, not manufacturer-       ║
 * ║    confirmed. Supported by 8/7 construction, 135 mm class, Super 35  ║
 * ║    field, and a 168.6 mm vertex-to-image track consistent with ARRI  ║
 * ║    119 mm mount-to-front + 52 mm PL flange distance. ARRI lists the  ║
 * ║    entrance pupil 56.9 mm behind the sensor; this model gives 23.5   ║
 * ║    mm behind (same sign, ~33 mm magnitude difference). ARRI's Ultra  ║
 * ║    Prime brochure states the series was developed with lead-free and ║
 * ║    arsenic-free glasses, whereas this example names the lead-        ║
 * ║    containing SF1 and SF2; that conflict is unresolved.              ║
 * ║                                                                      ║
 * ║  NOTE ON MODULE OMISSION: patent d7+d8+d9+d10+d11 = 35.0758 mm is    ║
 * ║    kept as one physical air gap so the stop and rear group keep      ║
 * ║    their source axial stations (no air-equivalent shortening).       ║
 * ║  NOTE ON IMAGE PLANE: patent spacing after surface 20 is 33.9542 mm. ║
 * ║    With catalog indices the zero-position paraxial focus lies at     ║
 * ║    33.5117 mm (full system); no sign, wavelength, field-focus, or    ║
 * ║    spherical-aberration explanation reproduces 33.9542. ¶0086 states ║
 * ║    the Fig. 7 pencils focus exactly on the sensor, so the last d is  ║
 * ║    the implemented model's d-line paraxial BFL (33.2175 mm).         ║
 * ║  NOTE ON INDICES: the patent names glasses but prints no nd/νd.      ║
 * ║    nd, νd and ΔPg,F are nominal SCHOTT/OHARA catalog values ║
 * ║    for the named glasses. N-PSK53 is kept (SCHOTT inquiry glass),    ║
 * ║    not N-PSK53A; the lead-containing SF1/SF2 are kept as named (both ║
 * ║    still in SCHOTT's current preferred catalog), not N-SF1/N-SF2.    ║
 * ║  NOTE ON SEMI-DIAMETERS: no SDs published. SDs read from the to-     ║
 * ║    scale Fig. 7 layout (±0.5 mm reading), then checked against real  ║
 * ║    f/1.8 marginal rays, field bundles, and edge/slope/gap rules.     ║
 * ║    STO SD is calibrated paraxially to the patent's f/1.8; it is not  ║
 * ║    a published diaphragm diameter.                                   ║
 * ║  NOTE ON STOP POSITION: source surface 12 "(stop)", ¶0084.           ║
 * ║  NOTE ON FIELD: projection declares ARRI's 31.14 mm design image     ║
 * ║    diameter (real half-field 6.56°); SD-limited chief rays would     ║
 * ║    otherwise imply a ~35 mm image height. PL mount and Super 35 have ║
 * ║    no canonical taxonomy ids, so lensMounts/imageFormat are unset.   ║
 * ║  No scaling (s = 1). Labels keep patent surface numbers.             ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop. No sensor glass,         ║
 * ║  filters, mechanics, or the removable manipulator module.            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-ultra-prime-135-t19",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS ULTRA PRIME SONNAR T* 135mm T1.9",
  subtitle: "US 2017/0307860 A1 EXAMPLE 1 — CARL ZEISS AG / PRETORIUS, BLAHNIK (MANIPULATOR OMITTED)",
  specs: ["8 ELEMENTS / 7 GROUPS", "f ≈ 134.3 mm", "F/1.8", "2ω ≈ 13.1° (31.14 mm ID)", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 135,
  focalLengthDesign: 134.3, // computed d-line EFL of this model (patent states 135 mm)
  // apertureMarketing omitted: marketed value is T1.9, a transmission stop, not an f-number.
  apertureDesign: 1.8, // patent ¶0078 relative aperture
  patentNumber: "US 2017/0307860 A1",
  patentAuthors: ["Marco Pretorius", "Vladan Blahnik"],
  patentAssignees: ["Carl Zeiss AG"],
  patentYear: 2017,
  elementCount: 8, // modeled donor lens; patent Example 1 with manipulator plates = 10 elements / 9 groups
  groupCount: 7,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 13.12, // real chief ray to 15.57 mm image height (ARRI design ID 31.14 mm)
    maxTraceFieldDeg: 6.56,
  },

  // Spectral line indices are evaluated from the catalog curves at runtime.
  // Do not duplicate rounded vendor line indices as patent-published measurements.
  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.41,
      fl: 204.5,
      glass: "N-FK5 (Schott)",
      apd: false,
      dPgF: 0.0036,
      role: "Front positive collector; rear face nearly flat (R = −2511.9 mm)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.54,
      fl: 160.6,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote:
        "ΔPg,F = +0.0308 on the SCHOTT normal line, from the OHARA catalog line indices; OHARA prints Δθg,F = +0.0280 on its own normal line. Not published in the patent.",
      dPgF: 0.0308,
      role: "Second positive meniscus, convex to object, in fluorophosphate crown",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex",
      nd: 1.80518,
      vd: 25.36,
      fl: 117.2,
      glass: "N-SF6 (Schott)",
      apd: false,
      dPgF: 0.0146,
      role: "Flat-fronted dense-flint positive component of the front cemented doublet",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.85,
      fl: -42.0,
      glass: "SF2 (Schott)",
      apd: false,
      dPgF: 0.0017,
      role: "Negative component of D1; doublet net f ≈ −67.0 mm",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.62014,
      vd: 63.48,
      fl: 69.2,
      glass: "N-PSK53 (Schott)",
      apd: false,
      dPgF: 0.0053,
      role: "First rear-group positive, 1.0 mm behind the stop",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.51,
      fl: -97.5,
      glass: "SF1 (Schott)",
      apd: false,
      dPgF: 0.0042,
      role: "Rear-group negative flint, air-spaced 0.2 mm from L7",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.41,
      fl: -781.9,
      glass: "N-FK5 (Schott)",
      apd: false,
      dPgF: 0.0036,
      role: "Thick (17.3 mm) meniscus, convex to object; weak standalone power",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.36,
      fl: 141.4,
      glass: "N-SF6 (Schott)",
      apd: false,
      dPgF: 0.0146,
      role: "Last positive meniscus ahead of the image plane",
    },
  ],

  /* ── Surface prescription ── labels are patent surface numbers; 8–11 omitted, 12 = STO */
  surfaces: [
    { label: "1", R: 103.66, d: 12.8, nd: 1.48749, elemId: 1, sd: 42.5 }, // L1 front
    { label: "2", R: -2511.9, d: 0.3, nd: 1.0, elemId: 0, sd: 42.5 }, // L1 rear → air
    { label: "3", R: 51.212, d: 16.4, nd: 1.496999, elemId: 2, sd: 38.2 }, // L2 front
    { label: "4", R: 127.72, d: 8.0, nd: 1.0, elemId: 0, sd: 31.8 }, // L2 rear → air
    { label: "5", R: 1e15, d: 17.9, nd: 1.80518, elemId: 3, sd: 32.4 }, // L3 front (flat)
    { label: "6", R: -94.406, d: 3.95, nd: 1.64769, elemId: 4, sd: 32.4 }, // L3→L4 cemented junction
    { label: "7", R: 38.861, d: 35.0758, nd: 1.0, elemId: 0, sd: 22.3 }, // L4 rear → air; patent d7…d11 summed
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 18.22 }, // source surface 12 (stop); f/1.8 calibration
    { label: "13", R: 65.407, d: 7.8, nd: 1.62014, elemId: 5, sd: 21.9 }, // L5 front
    { label: "14", R: -118.85, d: 2.0, nd: 1.0, elemId: 0, sd: 21.9 }, // L5 rear → air
    { label: "15", R: -82.343, d: 3.6, nd: 1.71736, elemId: 6, sd: 20.9 }, // L6 front
    { label: "16", R: 473.15, d: 0.2, nd: 1.0, elemId: 0, sd: 20.9 }, // L6 rear → air
    { label: "17", R: 34.475, d: 17.3, nd: 1.48749, elemId: 7, sd: 21.5 }, // L7 front
    { label: "18", R: 26.416, d: 5.17, nd: 1.0, elemId: 0, sd: 16.2 }, // L7 rear → air
    { label: "19", R: 109.02, d: 3.9, nd: 1.80518, elemId: 8, sd: 18.2 }, // L8 front
    { label: "20", R: 2511.9, d: 33.2175, nd: 1.0, elemId: 0, sd: 18.2 }, // L8 rear → image; model paraxial BFL
  ],

  /* ── Aspherical coefficients ── all-spherical main lens (¶0078: k = 0) */
  asph: {},

  /* ── Variable air spacings ── none: no finite-object spacings are published */
  var: {},
  varLabels: [],

  /* ── Group and doublet annotations ── patent reference numerals 1 and 3 */
  groups: [
    { text: "FRONT (1)", fromSurface: "1", toSurface: "7" },
    { text: "REAR (3)", fromSurface: "13", toSurface: "20" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 1.5, // ARRI/ZEISS production close focus; not modeled optically
  focusDescription:
    "Infinity only. Production focus is floating/internal (ARRI/ZEISS); no close-focus spacings are published.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
