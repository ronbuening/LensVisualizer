import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║   The patent only draws diaphragm B1 within l2. From the patent figure, B1║
 * ║   is modeled at approximately 32% of l2 measured from r5. The scaled      ║
 * ║   22.239 mm gap is therefore split 7.11648 / 15.12252 mm. The stop radius ║
 * ║   is derived from the design f-number f/2.8; it is not a published        ║
 * ║   diaphragm diameter.                                                     ║
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
  schema: 2,
  key: "schacht-travenar-90f28",
  maker: "Schacht",
  name: "SCHACHT TRAVENAR 90mm f/2.8",
  subtitle: "US 2,721,501 Example 1 — strong inferred production correlation",

  catalog: {
    lensMounts: ["exakta"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 3 GROUPS", "f = 90.012 mm (modeled)", "f/2.8", "28° FULL FIELD", "ALL-SPHERICAL"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { marketing: 90, design: 90.0123058875 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: { patentNumber: "US 2,721,501", patentYear: 1955, authors: ["Ludwig Bertele"], assignees: [] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front positive meniscus",
      type: "Positive Meniscus",
      nd: 1.66994,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 97.5650489315,
      glass: "BAF10 / S-BAH10 class (supplier unconfirmed)",
      role: "Positive front member; begins convergence before the negative-power cemented middle member.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Cemented positive lens",
      type: "Biconvex Positive",
      nd: 1.56536,
      vd: 55.8,
      indexReference: "d",
      focalLengthMm: 38.3045677292,
      glass: "Unmatched (nd=1.56536, nu_d=55.8; nearest BAK4/BAL14 family outside delta-n=0.003)",
      role: "Positive component of the cemented middle member.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Cemented negative lens",
      type: "Biconcave Negative",
      nd: 1.68981,
      vd: 31.2,
      indexReference: "d",
      focalLengthMm: -23.2546036275,
      glass: "SF8 / S-TIM28 class (supplier unconfirmed)",
      role: "Negative component of the cemented middle member; reduces convergence before the rear member.",
      diagramLabel: "L3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear positive meniscus",
      type: "Positive Meniscus",
      nd: 1.72747,
      vd: 28.4,
      indexReference: "d",
      focalLengthMm: 123.1193262091,
      glass: "SF10 / ZF4 / FD10 class (supplier unconfirmed)",
      role: "Positive rear member; restores convergence after the negative cemented middle member.",
      diagramLabel: "L4",
    },
  ],

  surfaces: [
    { label: "1", R: 47.187, d: 4.14, sd: 22.2, medium: 1 },
    { label: "2", R: 163.719, d: 0.414, sd: 22.2 },
    { label: "3", R: 23.796, d: 12.105, sd: 20.1, medium: 2 },
    { label: "4", R: -196.551, d: 2.79, sd: 17.7, medium: 3 },
    { label: "5", R: 17.568, d: 7.11648, sd: 12.4 },
    { label: "STO", R: "flat", d: 15.12252 },
    { label: "6", R: 62.379, d: 2.277, sd: 12.2, medium: 4 },
    { label: "7", R: 202.347, d: 42.929364488, sd: 12.3 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "NO_INTERNAL_RECONSTRUCTION — manufacturer literature specifies 1 m to infinity, but no internal finite-focus spacing law is published; the fixed patent prescription is retained without focus var.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT MEMBER", fromSurface: "1", toSurface: "2" },
    { text: "MIDDLE MEMBER", fromSurface: "3", toSurface: "5" },
    { text: "REAR MEMBER", fromSurface: "6", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
