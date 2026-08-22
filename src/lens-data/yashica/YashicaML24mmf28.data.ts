import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — YASHICA ML 24mm f/2.8                                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: JP1975-110330, Example 1 (Yashica Co., Ltd.;               ║
 * ║  Yoshisato Fujioka). The patent normalizes the prescription to f = 100.     ║
 * ║  All radii, spacings, BFD, stop position, and inferred semi-diameters are   ║
 * ║  scaled uniformly by s = 0.24 for the 24 mm production correlation.         ║
 * ║  Refractive indices and Abbe numbers are unchanged. The design is spherical.║
 * ║                                                                              ║
 * ║  Production identity: Yashica Price List No. 10 (effective 1980-01-01),    ║
 * ║  p. 4, lists the ML 24mm f/2.8 as 9 elements / 8 groups, 84° field,        ║
 * ║  0.3 m minimum focus, f/2.8–16, and 62 mm filter. Yashica system literature ║
 * ║  identifies the Contax/Yashica bayonet and 35 mm SLR system.                 ║
 * ║                                                                              ║
 * ║  FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION. Example 1 publishes only the     ║
 * ║  infinity prescription. No finite-focus internal spacing changes are        ║
 * ║  invented; var is intentionally empty. closeFocusM is production metadata.  ║
 * ║                                                                              ║
 * ║  STOP MODEL: the patent locates the diaphragm only within d11, between r11 ║
 * ║  and r12. Figure 3 places it approximately two-thirds of the way from r11   ║
 * ║  toward r12. The scaled 3.924 mm gap is modeled as 2.620 + 1.304 mm.        ║
 * ║  With that inferred axial position, STO sd = 6.151135 mm is independently   ║
 * ║  solved so the paraxial entrance pupil gives f/2.80000 at EFL 23.999661 mm. ║
 * ║  Stop position and physical stop diameter are modeling inferences, not       ║
 * ║  patent-tabulated dimensions.                                                ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent does not tabulate clear apertures. SDs below are║
 * ║  inferred from exact meridional ray envelopes at the viewer's default       ║
 * ║  off-axis field (0.6 × 42° = 25.2°), including both stop-edge rays and      ║
 * ║  the full-field 42° chief ray, then checked against the relative taper in    ║
 * ║  patent Figure 3. Edge thickness, actual spherical rim slope, shared-band    ║
 * ║  cross-gap intrusion, and render-trim geometry constrain the final values.   ║
 * ║  They are model values, not source data.                                     ║
 * ║                                                                              ║
 * ║  GLASS: the patent gives nd/νd coordinates but no supplier or line-index    ║
 * ║  data. Vendor-neutral six-digit coordinate codes are used. nC, nF, ng, and  ║
 * ║  dPgF are unavailable from the selected embodiment and are therefore omitted.║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "yashica-ml-24mm-f2-8",
  maker: "Yashica",
  name: "YASHICA ML 24mm f/2.8",
  subtitle: "JP1975-110330 Example 1 — uniformly scaled ×0.24 production correlation",
  specs: ["9 ELEMENTS / 8 GROUPS", "24mm f/2.8", "84°", "0.3m MINIMUM FOCUS", "ALL SPHERICAL"],

  focalLengthMarketing: 24,
  focalLengthDesign: 23.999661,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["contax-yashica"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1975-110330",
  patentAuthors: ["Yoshisato Fujioka"],
  patentAssignees: ["Yashica Co., Ltd."],
  patentYear: 1975,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.66672,
      vd: 48.4,
      fl: -71.398624,
      glass: "667484 — nd/νd coordinate code (vendor unresolved)",
      role: "Strong negative front element of patent functional Group I; establishes the retrofocus front section.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      fl: 50.241242,
      glass: "603607 — nd/νd coordinate code (vendor unresolved)",
      role: "Positive component within functional Group I.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6583,
      vd: 57.3,
      fl: -28.118878,
      glass: "658573 — nd/νd coordinate code (vendor unresolved)",
      role: "Rear negative component of functional Group I.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.51823,
      vd: 59,
      fl: -35.448999,
      glass: "518590 — nd/νd coordinate code (vendor unresolved)",
      cemented: "D1",
      role: "Negative member of the cemented L4+L5 pair forming functional Group II.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7569,
      vd: 31.7,
      fl: 35.414226,
      glass: "757317 — E-LAF11 catalog equivalent (production supplier unspecified)",
      cemented: "D1",
      role: "Positive high-index partner of the nearly power-neutral cemented L4+L5 pair.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.5,
      fl: 31.539431,
      glass: "678555 — nd/νd coordinate code (vendor unresolved)",
      role: "Positive functional Group III immediately ahead of the aperture stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -19.388474,
      glass: "755275 — nd/νd coordinate code (vendor unresolved)",
      role: "Negative first element of the rear functional Group IV.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.2,
      fl: 30.198724,
      glass: "640602 — nd/νd coordinate code (vendor unresolved)",
      role: "Positive meniscus within rear functional Group IV.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      fl: 43.782864,
      glass: "697556 — nd/νd coordinate code (vendor unresolved)",
      role: "Final positive element of functional Group IV.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 48.1044, d: 1.7664, nd: 1.66672, elemId: 1, sd: 21.0 },
    { label: "2", R: 23.57472, d: 3.7272, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "3", R: 30.5964, d: 6.18, nd: 1.60311, elemId: 2, sd: 16.5 },
    { label: "4", R: -2899.92504, d: 0.0984, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "5", R: 33.40488, d: 1.2744, nd: 1.6583, elemId: 3, sd: 12.3 },
    { label: "6", R: 11.73024, d: 7.1592, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "7", R: -36.10152, d: 2.9424, nd: 1.51823, elemId: 4, sd: 9.5 },
    { label: "8", R: 38.44512, d: 9.7104, nd: 1.7569, elemId: 5, sd: 9.5 },
    { label: "9", R: -78.89856, d: 1.7664, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "10", R: 30.048, d: 6.0816, nd: 1.6779, elemId: 6, sd: 8.8 },
    { label: "11", R: -68.06064, d: 2.62, nd: 1.0, elemId: 0, sd: 8.8 },
    // STO position inferred from patent Figure 3; 2.620 + 1.304 mm preserves scaled d11 = 3.924 mm.
    // STO sd is solved from the modeled entrance pupil so the design is f/2.8 at EFL 23.999661 mm.
    { label: "STO", R: 1e15, d: 1.304, nd: 1.0, elemId: 0, sd: 6.151135 },
    { label: "12", R: -22.52688, d: 2.9424, nd: 1.7552, elemId: 7, sd: 7.45 },
    { label: "13", R: 44.18424, d: 0.8832, nd: 1.0, elemId: 0, sd: 7.45 },
    { label: "14", R: -199.08216, d: 2.844, nd: 1.64, elemId: 8, sd: 7.45 },
    { label: "15", R: -17.71512, d: 0.0984, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "16", R: 671.01528, d: 2.4528, nd: 1.6968, elemId: 9, sd: 9.0 },
    { label: "17", R: -31.91304, d: 37.272, nd: 1.0, elemId: 0, sd: 9.0 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "6" },
    { text: "II", fromSurface: "7", toSurface: "9" },
    { text: "III", fromSurface: "10", toSurface: "11" },
    { text: "IV", fromSurface: "12", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.3,
  focusDescription:
    "Production minimum focus is 0.3 m; patent Example 1 publishes only the infinity prescription. Focus status: NO_INTERNAL_RECONSTRUCTION; no internal spacing changes are modeled.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
