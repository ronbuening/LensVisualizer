import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MAMIYA SEKOR AF 55mm f/2.8                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: JP 1997-297263 A, Example 1 (Mamiya-OP / Hisataro Shimada). ║
 * ║ Production correlation is a modeling inference: the worked design is      ║
 * ║ F/2.8, 2ω=64°, and 7 elements / 6 air-separated groups; historical       ║
 * ║ Mamiya literature gives the AF 55mm f/2.8 the same construction and field.║
 * ║                                                                            ║
 * ║ SCALE: the patent prescription is normalized to f=1.0. All radii,          ║
 * ║ thicknesses, air gaps, and the paraxial image distance are scaled          ║
 * ║ uniformly by s=55.0 to the marketed 55 mm focal length. The design is      ║
 * ║ all-spherical, so no asphere-coefficient transform is required. The        ║
 * ║ resulting paraxial EFL is 54.999970204812 mm.                              ║
 * ║                                                                            ║
 * ║ FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION. Manufacturer literature states  ║
 * ║ that the production lens uses a floating-element mechanism and focuses to ║
 * ║ 0.45 m, but the patent publishes no focus-spacing table, moving-group      ║
 * ║ designation, object-distance table, or travel. No focus var is invented.   ║
 * ║                                                                            ║
 * ║ STOP: the patent explicitly prints the flat stop row between B3 and C1.   ║
 * ║ Its diameter is not published. The stop radius is derived from the design  ║
 * ║ f-number, the published F/2.8.                                             ║
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
  schema: 2,
  key: "mamiya-sekor-af-55mm-f28",
  maker: "Mamiya",
  name: "MAMIYA SEKOR AF 55mm f/2.8",
  subtitle: "JP 1997-297263 A Example 1 — Mamiya-OP / Hisataro Shimada; normalized prescription scaled ×55",

  catalog: {
    lensMounts: ["mamiya-645"],
    imageFormat: "645",
    specs: ["7 ELEMENTS / 6 GROUPS", "f = 54.99997 mm (DESIGN)", "F/2.8", "2ω = 64°", "ALL-SPHERICAL"],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 55, design: 54.999970204812 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "JP 1997-297263 A",
    patentYear: 1997,
    authors: ["Hisataro Shimada"],
    assignees: ["Mamiya-OP Co., Ltd."],
  },

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
      focalLengthMm: -49.049651,
      glass: "BSL7 (legacy OHARA coordinate match; 516642)",
      apd: false,
      role: "Patent Group A negative meniscus, convex toward the object.",
      dPgF: -0.0007626221436916047,
      nC: 1.5138548101150109,
      nF: 1.521903585539572,
      ng: 1.526210781923536,
    },
    {
      id: 2,
      name: "L2",
      label: "B1 / Element 2",
      type: "Biconvex Positive",
      nd: 1.712995,
      vd: 53.84,
      indexReference: "d",
      focalLengthMm: 22.930145,
      glass: "LAL8 (legacy OHARA coordinate match; 713538)",
      apd: false,
      role: "Positive member of the cemented Group B doublet.",
      cemented: "B",
      dPgF: -0.00766822460750094,
      nC: 1.7089752941389829,
      nF: 1.7222167085676985,
      ng: 1.7294407354469452,
    },
    {
      id: 3,
      name: "L3",
      label: "B2 / Element 3",
      type: "Negative Meniscus",
      nd: 1.62374,
      vd: 47.09,
      indexReference: "d",
      focalLengthMm: -49.667315,
      glass: "BAM8 (legacy OHARA coordinate match; 624471)",
      apd: false,
      role: "Negative member of the cemented Group B doublet.",
      cemented: "B",
      dPgF: -0.0011586204170520586,
      nC: 1.6197849268009765,
      nF: 1.6330286010750563,
      ng: 1.6404904035012982,
    },
    {
      id: 4,
      name: "L4",
      label: "C1 / Element 4",
      type: "Positive Meniscus",
      nd: 1.799516,
      vd: 42.24,
      indexReference: "d",
      focalLengthMm: 53.49115,
      glass: "LAH52 (legacy OHARA coordinate match; 800422)",
      apd: false,
      role: "First positive lens of patent Group C.",
      dPgF: -0.006659945375013576,
      nC: 1.7938706533678523,
      nF: 1.8127979817878128,
      ng: 1.8235125549392115,
    },
    {
      id: 5,
      name: "L5",
      label: "C2 / Element 5",
      type: "Biconcave Negative",
      nd: 1.739997,
      vd: 31.71,
      indexReference: "d",
      focalLengthMm: -25.561149,
      glass: "BPH50 (legacy OHARA coordinate match; 740317)",
      apd: false,
      role: "Biconcave negative lens between the two patent-defined Group C air lenses.",
      dPgF: -0.0002685103562910518,
      nC: 1.7331846087331255,
      nF: 1.7565209956893681,
      ng: 1.770294020596221,
    },
    {
      id: 6,
      name: "L6",
      label: "C3 / Element 6",
      type: "Positive Meniscus",
      nd: 1.496999,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 89.960881,
      glass: "FPL51 (legacy OHARA coordinate match; 497816)",
      apd: "patent",
      apdNote:
        "The patent requires anomalous dispersion in the qualifying C5/C7 positive element; Example 1 qualifies at C5. Project dPgF uses the Schott Pg,F normal line; the catalog line indices give dPgF ≈ +0.03110. OHARA reports Δθg,F ≈ +0.0280 under its native convention.",
      role: "Low-index, low-dispersion positive meniscus used for the patent's lateral-chromatic correction strategy.",
      dPgF: 0.03110137690231729,
      nC: 1.4951381833807422,
      nF: 1.501227758939932,
      ng: 1.50450166955158,
    },
    {
      id: 7,
      name: "L7",
      label: "C4 / Element 7",
      type: "Positive Meniscus",
      nd: 1.740999,
      vd: 52.65,
      indexReference: "d",
      focalLengthMm: 96.7762,
      glass: "LAL61 (legacy OHARA coordinate match; 741527)",
      apd: false,
      role: "Final positive lens of patent Group C; numerical Example 1 has the weaker surface at C7 (object side).",
      dPgF: -0.008178338358753257,
      nC: 1.73672868117466,
      nF: 1.750803063339896,
      ng: 1.7585026852003374,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "A1", R: 118.990894, d: 2.469489, sd: 16.1, medium: 1 },
    { label: "A2", R: 20.7338725, d: 18.4467305, sd: 14.3 },
    { label: "B1", R: 41.8157135, d: 9.844868, sd: 14.5, medium: 2 },
    { label: "B2", R: -24.214223, d: 2.9655835, sd: 14.4, medium: 3 },
    { label: "B3", R: -116.0982735, d: 6.2731405, sd: 14.1 },
    { label: "STO", R: "flat", d: 5.028595 },
    { label: "C1", R: -3748.329794, d: 6.737412, sd: 12.0, medium: 4 },
    { label: "C2", R: -42.3183475, d: 1.4668115, sd: 11.5 },
    { label: "C3", R: -27.8780315, d: 2.178913, sd: 11.1, medium: 5 },
    { label: "C4", R: 60.789289, d: 3.3498245, sd: 11.4 },
    { label: "C5", R: -73.338133, d: 3.567454, sd: 12.1, medium: 6 },
    { label: "C6", R: -28.2251255, d: 0.4894725, sd: 12.6 },
    { label: "C7", R: -349.5042375, d: 2.989283, sd: 13.4, medium: 7 },
    { label: "C8", R: -59.7190055, d: 59.552260152106, sd: 13.7 },
  ],

  focus: {
    closeFocusM: 0.45,
    description:
      "NO_INTERNAL_RECONSTRUCTION — manufacturer literature describes floating-element focusing to 0.45 m, but JP 1997-297263 Example 1 publishes no focus-motion data. Only the published infinity-like state is modeled.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "A", fromSurface: "A1", toSurface: "A2" },
    { text: "B", fromSurface: "B1", toSurface: "B3" },
    { text: "C", fromSurface: "C1", toSurface: "C8" },
  ],
  doublets: [{ text: "B cemented", fromSurface: "B1", toSurface: "B3" }],

  layout: { yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
