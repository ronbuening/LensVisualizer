import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SCHACHT TRAVENAR 90mm f/2.8                                ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2,721,501, sole numerical "Example" (job-card Example 1).    ║
 * ║ Four elements / three groups; all seven refracting surfaces spherical.   ║
 * ║ Production correlation: strong inferred match, not manufacturer-confirmed.║
 * ║                                                                            ║
 * ║ SOURCE CORRECTION                                                         ║
 * ║   The patent table prints r2 = -181.91. The implemented model uses       ║
 * ║   r2 = +181.91 because that single sign change reproduces both the        ║
 * ║   patent's f = 100 normalization and its printed 5.14 curvature identity.║
 * ║   The raw printed sign remains preserved in the Stage 2 evidence dossier.║
 * ║                                                                            ║
 * ║ SCALING                                                                   ║
 * ║   The corrected f = 100 source prescription is uniformly scaled x0.9.    ║
 * ║   Every radius and axial spacing is scaled; indices and Abbe numbers      ║
 * ║   are unchanged. There are no aspheres. Computed EFL = 90.0123058875 mm. ║
 * ║                                                                            ║
 * ║ STOP                                                                      ║
 * ║   The patent only draws diaphragm B1 within l2. From the patent figure,   ║
 * ║   B1 is modeled at approximately 32% of l2 measured from r5. The scaled   ║
 * ║   22.239 mm gap is therefore split 7.11648 / 15.12252 mm. The physical   ║
 * ║   stop SD = 9.6550061489 mm is calibrated from the modeled entrance pupil║
 * ║   to f/2.8; it is not a published diaphragm diameter.                    ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS                                                            ║
 * ║   No clear apertures are published. SDs are modeled from exact spherical ║
 * ║   meridional tracing over the marketed 28° full field (±14°) and the full║
 * ║   f/2.8 stop. A nominal 10% ray-height allowance was used where geometry ║
 * ║   permits. L1 is geometry-limited: SD 22.2 mm retains positive edge       ║
 * ║   thickness while still containing the sampled ±14° full-pupil bundle.   ║
 * ║                                                                            ║
 * ║ Rear-element SDs follow the optical rim on US 2,721,501 p. 1: 12.2/12.3 mm. ║
 * ║ The smaller figure-based rim can vignette the full-field pupil.             ║
 * ║ REAR SPACING                                                              ║
 * ║   The patent draws l3 but gives no numerical value. Surface 7 d uses the ║
 * ║   independently computed infinity paraxial BFD = 42.9293644880 mm.       ║
 * ║                                                                            ║
 * ║ FOCUS                                                                     ║
 * ║   NO_INTERNAL_RECONSTRUCTION. Manufacturer literature gives 1 m to       ║
 * ║   infinity, but neither the patent nor retained manufacturer evidence     ║
 * ║   defines an internal finite-focus spacing law. closeFocusM is therefore ║
 * ║   marketed metadata only; no focus var is authored.                      ║
 * ║                                                                            ║
 * ║ GLASS                                                                     ║
 * ║   The patent publishes nd/Vd only. Class labels below are catalog-derived ║
 * ║   coordinate equivalents with supplier/melt unconfirmed; L2 is Unmatched.║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "schacht-travenar-90f28",
  maker: "Schacht",
  name: "SCHACHT TRAVENAR 90mm f/2.8",
  subtitle: "US 2,721,501 Example 1 — strong inferred production correlation",
  specs: ["4 ELEMENTS / 3 GROUPS", "f = 90.012 mm (modeled)", "f/2.8", "28° FULL FIELD", "ALL-SPHERICAL"],

  focalLengthMarketing: 90,
  focalLengthDesign: 90.0123058875,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["exakta"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,721,501",
  patentAuthors: ["Ludwig Bertele"],
  patentAssignees: [],
  patentYear: 1955,
  elementCount: 4,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Front positive meniscus",
      type: "Positive Meniscus",
      nd: 1.66994,
      vd: 47.2,
      indexReference: "d",
      fl: 97.5650489315,
      glass: "BAF10 / S-BAH10 class (supplier unconfirmed)",
      role: "Positive front member; begins convergence before the negative-power cemented middle member.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Cemented positive lens",
      type: "Biconvex Positive",
      nd: 1.56536,
      vd: 55.8,
      indexReference: "d",
      fl: 38.3045677292,
      glass: "Unmatched (nd=1.56536, nu_d=55.8; nearest BAK4/BAL14 family outside delta-n=0.003)",
      cemented: "D1",
      role: "Positive component of the cemented middle member.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Cemented negative lens",
      type: "Biconcave Negative",
      nd: 1.68981,
      vd: 31.2,
      indexReference: "d",
      fl: -23.2546036275,
      glass: "SF8 / S-TIM28 class (supplier unconfirmed)",
      cemented: "D1",
      role: "Negative component of the cemented middle member; reduces convergence before the rear member.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Rear positive meniscus",
      type: "Positive Meniscus",
      nd: 1.72747,
      vd: 28.4,
      indexReference: "d",
      fl: 123.1193262091,
      glass: "SF10 / ZF4 / FD10 class (supplier unconfirmed)",
      role: "Positive rear member; restores convergence after the negative cemented middle member.",
    },
  ],

  surfaces: [
    { label: "1", R: 47.187, d: 4.14, nd: 1.66994, elemId: 1, sd: 22.2 },
    { label: "2", R: 163.719, d: 0.414, nd: 1.0, elemId: 0, sd: 22.2 },
    { label: "3", R: 23.796, d: 12.105, nd: 1.56536, elemId: 2, sd: 20.1 },
    { label: "4", R: -196.551, d: 2.79, nd: 1.68981, elemId: 3, sd: 17.7 },
    { label: "5", R: 17.568, d: 7.11648, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "STO", R: 1e15, d: 15.12252, nd: 1.0, elemId: 0, sd: 9.6550061489 },
    { label: "6", R: 62.379, d: 2.277, nd: 1.72747, elemId: 4, sd: 12.2 },
    { label: "7", R: 202.347, d: 42.929364488, nd: 1.0, elemId: 0, sd: 12.3 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT MEMBER", fromSurface: "1", toSurface: "2" },
    { text: "MIDDLE MEMBER", fromSurface: "3", toSurface: "5" },
    { text: "REAR MEMBER", fromSurface: "6", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  closeFocusM: 1.0,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — manufacturer literature specifies 1 m to infinity, but no internal finite-focus spacing law is published; the fixed patent prescription is retained without focus var.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
