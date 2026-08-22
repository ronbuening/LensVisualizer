import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MAMIYA SEKOR AF 55mm f/2.8                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: JP 1997-297263 A, Example 1 (Mamiya-OP / Hisataro Shimada). ║
 * ║ Production correlation is a modeling inference: the worked design is      ║
 * ║ F/2.8, 2ω=64°, and 7 elements / 6 air-separated groups; historical       ║
 * ║ Mamiya literature gives the AF 55mm f/2.8 the same construction and field.║
 * ║                                                                            ║
 * ║ SCALE: the patent prescription is normalized to f=1.0. All radii,         ║
 * ║ thicknesses, air gaps, the inferred stop size, and the paraxial image     ║
 * ║ distance are scaled uniformly by s=55.0 to the marketed 55 mm focal       ║
 * ║ length. The design is all-spherical, so no asphere-coefficient transform   ║
 * ║ is required. The resulting paraxial EFL is 54.999970204812 mm.            ║
 * ║                                                                            ║
 * ║ FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION. Manufacturer literature states  ║
 * ║ that the production lens uses a floating-element mechanism and focuses to ║
 * ║ 0.45 m, but the patent publishes no focus-spacing table, moving-group      ║
 * ║ designation, object-distance table, or travel. No focus var is invented.   ║
 * ║                                                                            ║
 * ║ STOP: the patent explicitly prints the flat stop row between B3 and C1.   ║
 * ║ Its diameter is not published. STO.sd is inferred by imposing the          ║
 * ║ published F/2.8 on the verified paraxial entrance-pupil geometry.          ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: the patent publishes no clear apertures. SDs are modeled   ║
 * ║ from exact spherical ray traces using the F/2.8 on-axis marginal bundle,  ║
 * ║ a 0.60× field (19.2°) fan through stop fractions ±0.75/±0.375/0, and      ║
 * ║ the full-field 32° chief ray, then given ~5% clear-aperture margin and     ║
 * ║ rounded upward. These values were checked for edge thickness, actual rim   ║
 * ║ slope, shared-band cross-gap intrusion, and modeled off-axis containment.  ║
 * ║                                                                            ║
 * ║ GLASS: nd/νd are patent values. nC/nF/ng are catalog-derived from the      ║
 * ║ coherent legacy OHARA coordinate matches. dPgF is recomputed from those    ║
 * ║ line indices using the project-required Schott Pg,F normal-line formula.   ║
 * ║ The patent does not name a glass vendor; legacy names/codes are therefore  ║
 * ║ catalog inferences, not source identities.                                 ║
 * ║                                                                            ║
 * ║ SOURCE CONTRADICTION: the prose says Group-C element 4 has its weaker      ║
 * ║ surface image-side, but Example 1 (and Examples 2-4) put the weaker        ║
 * ║ curvature at C7 on the object side. The numerical Example-1 radii are      ║
 * ║ preserved without correction.                                              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer/product references used for identity/marketing fields:
 *   https://mamiya.co.uk/library/645AFD.pdf
 *   https://allphotolenses.com/public/files/pdfs/921a29c96be9a5d809921e415e1871a9.pdf
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "mamiya-sekor-af-55mm-f28",
  maker: "Mamiya",
  name: "MAMIYA SEKOR AF 55mm f/2.8",
  subtitle: "JP 1997-297263 A Example 1 — Mamiya-OP / Hisataro Shimada; normalized prescription scaled ×55",
  specs: ["7 ELEMENTS / 6 GROUPS", "f = 54.99997 mm (DESIGN)", "F/2.8", "2ω = 64°", "ALL-SPHERICAL"],

  focalLengthMarketing: 55,
  focalLengthDesign: 54.999970204812,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["mamiya-645"],
  imageFormat: "645",
  patentNumber: "JP 1997-297263 A",
  patentAuthors: ["Hisataro Shimada"],
  patentAssignees: ["Mamiya-OP Co., Ltd."],
  patentYear: 1997,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "A1 / Element 1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.15,
      indexReference: "d",
      fl: -49.049651,
      glass: "BSL7 (legacy OHARA coordinate match; 516642)",
      apd: false,
      nC: 1.5138548101150109,
      nF: 1.521903585539572,
      ng: 1.526210781923536,
      dPgF: -0.0007626221436916047,
      role: "Patent Group A negative meniscus, convex toward the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "B1 / Element 2",
      type: "Biconvex Positive",
      nd: 1.712995,
      vd: 53.84,
      indexReference: "d",
      fl: 22.930145,
      glass: "LAL8 (legacy OHARA coordinate match; 713538)",
      apd: false,
      nC: 1.7089752941389829,
      nF: 1.7222167085676985,
      ng: 1.7294407354469452,
      dPgF: -0.00766822460750094,
      role: "Positive member of the cemented Group B doublet.",
      cemented: "B",
    },
    {
      id: 3,
      name: "L3",
      label: "B2 / Element 3",
      type: "Negative Meniscus",
      nd: 1.62374,
      vd: 47.09,
      indexReference: "d",
      fl: -49.667315,
      glass: "BAM8 (legacy OHARA coordinate match; 624471)",
      apd: false,
      nC: 1.6197849268009765,
      nF: 1.6330286010750563,
      ng: 1.6404904035012982,
      dPgF: -0.0011586204170520586,
      role: "Negative member of the cemented Group B doublet.",
      cemented: "B",
    },
    {
      id: 4,
      name: "L4",
      label: "C1 / Element 4",
      type: "Positive Meniscus",
      nd: 1.799516,
      vd: 42.24,
      indexReference: "d",
      fl: 53.49115,
      glass: "LAH52 (legacy OHARA coordinate match; 800422)",
      apd: false,
      nC: 1.7938706533678523,
      nF: 1.8127979817878128,
      ng: 1.8235125549392115,
      dPgF: -0.006659945375013576,
      role: "First positive lens of patent Group C.",
    },
    {
      id: 5,
      name: "L5",
      label: "C2 / Element 5",
      type: "Biconcave Negative",
      nd: 1.739997,
      vd: 31.71,
      indexReference: "d",
      fl: -25.561149,
      glass: "BPH50 (legacy OHARA coordinate match; 740317)",
      apd: false,
      nC: 1.7331846087331255,
      nF: 1.7565209956893681,
      ng: 1.770294020596221,
      dPgF: -0.0002685103562910518,
      role: "Biconcave negative lens between the two patent-defined Group C air lenses.",
    },
    {
      id: 6,
      name: "L6",
      label: "C3 / Element 6",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.61,
      indexReference: "d",
      fl: 89.960881,
      glass: "FPL51 (legacy OHARA coordinate match; 497816)",
      apd: "patent",
      apdNote:
        "The patent requires anomalous dispersion in the qualifying C5/C7 positive element; Example 1 qualifies at C5. Project dPgF uses the Schott Pg,F normal line; the catalog line indices give dPgF ≈ +0.03110. OHARA reports Δθg,F ≈ +0.0280 under its native convention.",
      nC: 1.4951381833807422,
      nF: 1.501227758939932,
      ng: 1.50450166955158,
      dPgF: 0.03110137690231729,
      role: "Low-index, low-dispersion positive meniscus used for the patent's lateral-chromatic correction strategy.",
    },
    {
      id: 7,
      name: "L7",
      label: "C4 / Element 7",
      type: "Positive Meniscus",
      nd: 1.740999,
      vd: 52.65,
      indexReference: "d",
      fl: 96.7762,
      glass: "LAL61 (legacy OHARA coordinate match; 741527)",
      apd: false,
      nC: 1.73672868117466,
      nF: 1.750803063339896,
      ng: 1.7585026852003374,
      dPgF: -0.008178338358753257,
      role: "Final positive lens of patent Group C; numerical Example 1 has the weaker surface at C7 (object side).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "A1", R: 118.990894, d: 2.469489, nd: 1.51633, elemId: 1, sd: 16.1 },
    { label: "A2", R: 20.7338725, d: 18.4467305, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "B1", R: 41.8157135, d: 9.844868, nd: 1.712995, elemId: 2, sd: 14.5 },
    { label: "B2", R: -24.214223, d: 2.9655835, nd: 1.62374, elemId: 3, sd: 14.4 },
    { label: "B3", R: -116.0982735, d: 6.2731405, nd: 1.0, elemId: 0, sd: 14.1 },
    { label: "STO", R: 1e15, d: 5.028595, nd: 1.0, elemId: 0, sd: 12.204586191723 },
    { label: "C1", R: -3748.329794, d: 6.737412, nd: 1.799516, elemId: 4, sd: 12.0 },
    { label: "C2", R: -42.3183475, d: 1.4668115, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "C3", R: -27.8780315, d: 2.178913, nd: 1.739997, elemId: 5, sd: 11.1 },
    { label: "C4", R: 60.789289, d: 3.3498245, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "C5", R: -73.338133, d: 3.567454, nd: 1.496999, elemId: 6, sd: 12.1 },
    { label: "C6", R: -28.2251255, d: 0.4894725, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "C7", R: -349.5042375, d: 2.989283, nd: 1.740999, elemId: 7, sd: 13.4 },
    { label: "C8", R: -59.7190055, d: 59.552260152106, nd: 1.0, elemId: 0, sd: 13.7 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "A", fromSurface: "A1", toSurface: "A2" },
    { text: "B", fromSurface: "B1", toSurface: "B3" },
    { text: "C", fromSurface: "C1", toSurface: "C8" },
  ],
  doublets: [{ text: "B cemented", fromSurface: "B1", toSurface: "B3" }],

  closeFocusM: 0.45,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — manufacturer literature describes floating-element focusing to 0.45 m, but JP 1997-297263 Example 1 publishes no focus-motion data. Only the published infinity-like state is modeled.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
