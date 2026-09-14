import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — HASSELBLAD XCD 45mm f/3.5                                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: WO 2017/221949 A1, Example 1; transcription checked against the Japanese   ║
 * ║ republication JP WO2017/221949 A1, Fig. 2 / Fig. 3 and ¶¶0015–0028.               ║
 * ║ Production correlation: strong but not explicit patent attribution. Hasselblad     ║
 * ║ publishes 45.0 mm, f/3.5, 9 elements / 7 groups, full focusing, 0.40 m MFD, and   ║
 * ║ X-system compatibility.                                                            ║
 * ║                                                                                     ║
 * ║ Prescription policy: raw Fig. 2 d-line nd/νd values are retained without repair.  ║
 * ║ The patent states f = 45.027 mm at d-line, but the stored Fig. 2 prescription      ║
 * ║ independently recomputes to EFL = 45.1191604368 mm. Fig. 3 focal values are also  ║
 * ║ internally inconsistent with the printed nd table. No source value is silently     ║
 * ║ altered; focalLengthDesign and element fl values below describe the stored arrays.  ║
 * ║                                                                                     ║
 * ║ Stop / f-number policy: Fig. 2 gives stop effective diameter De = 14.20 mm. With   ║
 * ║ that literal stop diameter, the stored d-line prescription gives entrance-pupil    ║
 * ║ diameter 13.2079299552 mm and modeled f/3.4160659990. nominalFno therefore uses    ║
 * ║ the modeled value; apertureMarketing remains the published f/3.5.                   ║
 * ║                                                                                     ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. Patent ¶0017 publishes rigid full-system ║
 * ║ focusing but no close-focus spacing row. The source infinity row retains d17 =      ║
 * ║ 26.88 mm even though the raw d-line model computes BFL = 27.0510181548 mm. The      ║
 * ║ close state changes only the rear image gap and solves the unit-focus mechanism      ║
 * ║ against Hasselblad's 0.40 m object-to-image-plane MFD: 34.1491136786 mm. No         ║
 * ║ internal gap or source infinity spacing is silently repaired.                       ║
 * ║                                                                                     ║
 * ║ Semi-diameters: patent Fig. 2 effective diameters De are used directly as sd=De/2. ║
 * ║ Two air gaps exceed the shared default gapSagFrac=0.90 by very small amounts        ║
 * ║ (S2→S3: 0.908867; S15→S16: 0.901019). This file uses gapSagFrac=0.91 rather than   ║
 * ║ trimming patent apertures. All clear rim gaps remain positive.                      ║
 * ║                                                                                     ║
 * ║ Glass labels: the patent names no glass vendor and publishes only nd/νd. Six-digit ║
 * ║ optical classes are stored with vendor explicitly unproven. Catalog-equivalent     ║
 * ║ line indices can diagnose the patent's separate focal-value wavelength mismatch,   ║
 * ║ but are not authored as nC/nF/ng/dPgF because they are not source-supported         ║
 * ║ properties of the patent elements.                                                  ║
 * ║                                                                                     ║
 * ║ Scaling: none (s = 1). Example 1 is all-spherical. No cover glass, filter, dummy,  ║
 * ║ flare-cutter, folded-path, or mechanical plane is inserted.                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer sources:
 * - https://cdn.hasselblad.com/datasheets/xcd-lenses/XCD45-Datasheet-en.pdf
 * - https://cdn.hasselblad.com/04e9d0f7-abdf-434d-8b5b-364c69af21ec_x-h-system-lenses_v2_28feb2017_a.pdf
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hasselblad-xcd-45f35",
  maker: "Hasselblad",
  name: "HASSELBLAD XCD 45mm f/3.5",
  subtitle: "WO 2017/221949 A1 Example 1 — strong production correlation; attribution not explicit",
  specs: [
    "9 ELEMENTS / 7 GROUPS",
    "45.0 mm f/3.5 (MARKETING)",
    "RAW d-LINE MODEL EFL ≈ 45.119 mm",
    "MODELED f/3.416 FROM PATENT STOP De",
    "56 mm IMAGE CIRCLE",
    "FULL / UNIT FOCUS",
  ],

  focalLengthMarketing: 45,
  // Patent ¶0020 prints f = 45.027 mm; the raw Fig. 2 d-line prescription stored below recomputes to this EFL.
  focalLengthDesign: 45.11916043675047,
  apertureMarketing: 3.5,
  // Literal Fig. 2 stop De = 14.20 mm produces this modeled d-line f-number.
  apertureDesign: 3.4160659989790303,
  lensMounts: ["hasselblad-xcd"],
  imageFormat: "44x33",
  patentNumber: "WO 2017/221949 A1",
  patentAuthors: ["Akira Sawamoto"],
  patentAssignees: ["Nittoh Inc."],
  patentYear: 2017,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ── */
  // `fl` values are independently recomputed from the stored raw d-line prescription,
  // not copied from inconsistent Fig. 3.
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.78,
      fl: -25.39257705493269,
      glass: "548458 class (vendor unproven)",
      apd: false,
      role: "Front negative element of G1; broadens field before the positive section.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus (convex to object)",
      nd: 1.9165,
      vd: 31.6,
      fl: 54.609088598765375,
      glass: "917316 class (vendor unproven)",
      apd: false,
      role: "High-index positive meniscus in G1 adjacent to L1.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.697,
      vd: 48.52,
      fl: 18.114434630599852,
      glass: "697485 class (vendor unproven)",
      apd: false,
      role: "Positive member of cemented pair C1 in G1.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Negative Meniscus (convex to image)",
      nd: 1.69895,
      vd: 30.13,
      fl: -75.31383816908316,
      glass: "699301 class (vendor unproven)",
      apd: false,
      role: "Negative member of cemented pair C1 facing the aperture stop.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.85026,
      vd: 32.27,
      fl: -11.251839875044984,
      glass: "850323 class (vendor unproven)",
      apd: false,
      role: "Negative member of cemented pair C2 immediately behind the stop.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6485,
      vd: 53.02,
      fl: 16.676075638187044,
      glass: "649530 class (vendor unproven)",
      apd: false,
      role: "Positive member of cemented pair C2 in G2.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.85026,
      vd: 32.27,
      fl: 28.666675349808884,
      glass: "850323 class (vendor unproven)",
      apd: false,
      role: "Positive rear-group element preceding the paired negative menisci.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Negative Meniscus (convex to object)",
      nd: 1.83481,
      vd: 42.72,
      fl: -57.657872992742185,
      glass: "835427 class (vendor unproven)",
      apd: false,
      role: "First of the two rear negative menisci; its concave image-side face opposes L9.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Negative Meniscus (convex to image)",
      nd: 1.48749,
      vd: 70.24,
      fl: -75.76931072217853,
      glass: "487702 class (vendor unproven)",
      apd: false,
      role: "Final negative meniscus of G2; expands the covered image circle while retaining back focus.",
    },
  ],

  /* ── Surface prescription: WO 2017/221949 A1 Example 1, Fig. 2 ── */
  surfaces: [
    { label: "1", R: -54.608, d: 1, nd: 1.54814, elemId: 1, sd: 12.2 },
    { label: "2", R: 18.801, d: 2.13, nd: 1, elemId: 0, sd: 10.75 },
    { label: "3", R: 40.829, d: 3.4, nd: 1.9165, elemId: 2, sd: 10.75 },
    { label: "4", R: 212.802, d: 6.47, nd: 1, elemId: 0, sd: 10.4 },
    { label: "5", R: 22.508, d: 5.2, nd: 1.697, elemId: 3, sd: 8.5 },
    // Cemented L3→L4 junction: downstream element L4 owns the interface.
    { label: "6", R: -26.028, d: 1, nd: 1.69895, elemId: 4, sd: 8.3 },
    { label: "7", R: -52.298, d: 2.92, nd: 1, elemId: 0, sd: 8.1 },
    { label: "STO", R: 1e15, d: 5.05, nd: 1, elemId: 0, sd: 7.1 },
    { label: "9", R: -22.886, d: 1, nd: 1.85026, elemId: 5, sd: 6.95 },
    // Cemented L5→L6 junction: downstream element L6 owns the interface.
    { label: "10", R: 16.769, d: 5.2, nd: 1.6485, elemId: 6, sd: 7.45 },
    { label: "11", R: -26.74, d: 0.93, nd: 1, elemId: 0, sd: 8.1 },
    { label: "12", R: 44.608, d: 4.4, nd: 1.85026, elemId: 7, sd: 8.8 },
    { label: "13", R: -51.3, d: 0.15, nd: 1, elemId: 0, sd: 9.2 },
    { label: "14", R: 43.104, d: 1, nd: 1.83481, elemId: 8, sd: 9.5 },
    { label: "15", R: 22.5, d: 6.63, nd: 1, elemId: 0, sd: 9.45 },
    { label: "16", R: -13.416, d: 1, nd: 1.48749, elemId: 9, sd: 9.6 },
    { label: "17", R: -21.583, d: 26.88, nd: 1, elemId: 0, sd: 10.8 },
  ],

  asph: {},

  /* ── Focus: constrained unit-focus reconstruction ── */
  var: {
    "17": [26.88, 34.14911367855676],
  },
  varLabels: [["17", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "7" },
    { text: "G2", fromSurface: "9", toSurface: "17" },
  ],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "9", toSurface: "11" },
  ],

  closeFocusM: 0.4,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent publishes rigid full-system focusing but no close-focus row. " +
    "The source infinity row keeps BF = 26.88 mm even though the retained raw d-line prescription computes " +
    "BFL = 27.0510181548 mm. The close state changes only the rear image gap, solving the published unit-focus " +
    "mechanism against Hasselblad's 0.40 m object-to-image-plane MFD at BF = 34.1491136786 mm; no internal " +
    "spacing or source infinity spacing is silently repaired.",

  // Preserve the patent's literal stop De = 14.20 mm; use its independently modeled pupil-derived f-number.
  nominalFno: 3.4160659989790303,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  // Patent effective diameters are preserved; 0.91 is the minimum practical override that clears both tight air gaps.
  gapSagFrac: 0.91,

  // Required per-lens layout value. This does not alter optical geometry or conceal validation failures.
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
