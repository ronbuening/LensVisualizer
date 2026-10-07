import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MEYER OPTIK GÖRLITZ PRIMAGON 35mm f/4.5              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Source: DE 1 749 770 U, numerical example / claim 4.               ║
 * ║ Four air-spaced spherical elements: negative meniscus followed by   ║
 * ║ a positive / negative / positive rear triplet.                      ║
 * ║                                                                    ║
 * ║ Scaling: the patent table is normalized to f = 100 mm. All radii,  ║
 * ║ thicknesses, air gaps, inferred SDs, and the source s' image-plane ║
 * ║ distance are uniformly scaled ×0.35 for the 35 mm production       ║
 * ║ correlation. The scaled rounded prescription computes EFL           ║
 * ║ 34.5749063963 mm rather than exactly 35 mm; the mismatch is kept.   ║
 * ║                                                                    ║
 * ║ Stop: patent Fig. p.6 places B inside the L3-L4 air gap but gives   ║
 * ║ no numerical split or diaphragm diameter. The drawing is schematic;║
 * ║ this model retains a rounded 60/40 split of l6 from r6 toward r7   ║
 * ║ (1.575 mm + 1.050 mm) as an authoring choice, not source metrology. ║
 * ║ STO sd is calibrated paraxially to the published f/4.5 target. Agreement  ║
 * ║ with f/4.5 is therefore a calibration result, not independent       ║
 * ║ evidence for the physical production diaphragm diameter.           ║
 * ║                                                                    ║
 * ║ Semi-diameters: the patent publishes none. These modeled SDs were   ║
 * ║ derived from exact meridional spherical-ray envelopes at the       ║
 * ║ source 62° full field plus the default 0.6-field fan, then rounded ║
 * ║ outward to retain about 10% clearance at the binding surfaces.      ║
 * ║ The optical-rim review retains these modeled clear apertures.       ║
 * ║                                                                    ║
 * ║ Focus: the patent publishes only one fixed prescription. Period    ║
 * ║ Meyer literature gives a 0.4 m minimum focusing distance, but no   ║
 * ║ optical spacing law is reconstructed here (NO_INTERNAL_RECONSTRUCTION).║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "meyer-optik-gorlitz-primagon-35f45",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ PRIMAGON 35mm f/4.5",
  subtitle: "DE 1 749 770 U — Example 1; 0.35× scaled patent prescription",
  specs: [
    "4 ELEMENTS / 4 GROUPS",
    "35 mm MARKETED / 34.575 mm MODELED EFL",
    "f/4.5 CALIBRATED STOP",
    "62° PATENT FULL IMAGE ANGLE",
    "ALL-SPHERICAL",
  ],

  /* ── Marketing, design, taxonomy, and patent metadata ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 34.5749063963,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  // 1957 Meyer technical table lists Praktica/Contax D/E/Pentacon, Praktina,
  // EXAKTA Varex/Exa, and Altix V/N. The first three canonical families below
  // exist in the current taxonomy; Altix has no canonical id and is omitted.
  lensMounts: ["m42", "praktina", "exakta"],
  imageFormat: "135-full-frame",
  patentNumber: "DE 1 749 770 U",
  patentAuthors: [],
  patentAssignees: ["VEB Feinoptisches Werk Görlitz"],
  patentYear: 1957,
  elementCount: 4,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48709,
      vd: 70.3,
      indexReference: "d",
      fl: -115.163256332,
      glass: "FK5 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Strongly separated negative front meniscus providing the long-back-focus wide-angle architecture.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.65883,
      vd: 51,
      indexReference: "d",
      fl: 19.0926559061,
      glass: "N-SSK5 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "First positive element of the rear triplet.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.62542,
      vd: 35.5,
      indexReference: "d",
      fl: -11.5860001132,
      glass: "F7 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Negative middle element of the rear triplet; aperture stop follows in air.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.56905,
      vd: 63,
      indexReference: "d",
      fl: 18.810602722,
      glass: "H-ZK1 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Final positive element of the rear triplet.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 53.2, d: 3.15, nd: 1.48709, elemId: 1, sd: 19 },
    { label: "2", R: 26.775, d: 25.2, nd: 1, elemId: 0, sd: 19 },
    { label: "3", R: 13.475, d: 2.975, nd: 1.65883, elemId: 2, sd: 7.5 },
    { label: "4", R: -172.55, d: 3.325, nd: 1, elemId: 0, sd: 7.5 },
    { label: "5", R: -15.75, d: 0.7, nd: 1.62542, elemId: 3, sd: 4.8 },
    { label: "6", R: 13.65, d: 1.575, nd: 1, elemId: 0, sd: 4.8 },
    // Patent p.6 fixes only that STO lies inside l6; the 60/40 split of scaled l6 = 2.625 mm is modeled.
    // Physical stop size is not published. This SD is calibrated to modeled f/4.5.
    { label: "STO", R: 1e15, d: 1.05, nd: 1, elemId: 0, sd: 3.69376560327 },
    { label: "7", R: 67.2, d: 1.925, nd: 1.56905, elemId: 4, sd: 5.7 },
    // Source s' = 101 mm is scaled ×0.35 to 35.35 mm. The rounded prescription's
    // paraxial BFD is 34.8547584837 mm, so this source image plane lies 0.4952415163 mm behind it.
    { label: "8", R: -12.6, d: 35.35, nd: 1, elemId: 0, sd: 5.7 },
  ],

  asph: {},

  /* ── Focus ── */
  var: {},
  varLabels: [],
  closeFocusM: 0.4,
  focusDescription:
    "Focus travel is not modeled. Patent Example 1 supplies one fixed prescription only. Period Meyer literature gives 0.4 m minimum focus, but no production unit-focus travel or internal spacing law is encoded.",

  /* ── Visual group annotations ── */
  groups: [
    { text: "FRONT NEGATIVE", fromSurface: "1", toSurface: "2" },
    { text: "REAR TRIPLET", fromSurface: "3", toSurface: "8" },
  ],
  doublets: [],

  /* ── Aperture ── */
  // Calibrated modeled value, not an independently measured production stop.
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16],

  /* ── Layout ── */
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
