import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER-KREUZNACH SUPER-ANGULON 90mm f/8                 ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: DE 975 637 C, sole numerical example (Günter Klemt /     ║
 * ║  Jos. Schneider & Co. Optische Werke).                                   ║
 * ║  Six spherical elements in four components, nearly symmetric about the   ║
 * ║  aperture stop.                                                           ║
 * ║                                                                            ║
 * ║  SCALING:                                                                 ║
 * ║  The patent prescription computes to f' = 100.011317 mm. All radii and   ║
 * ║  axial spacings were scaled ×0.9028978188 to the manufacturer-published  ║
 * ║  production EFL of 90.3 mm. The final infinity BFD is the independently  ║
 * ║  computed 66.274810 mm rather than the scaled form of the patent's        ║
 * ║  rounded 73.4 value.                                                      ║
 * ║                                                                            ║
 * ║  STOP:                                                                    ║
 * ║  The patent identifies d5 as the stop space but gives no axial split.     ║
 * ║  The stop is placed at its midpoint, consistent with the patent figure.  ║
 * ║  Its f/8 semi-diameter (6.241943 mm) was solved from the entrance-pupil   ║
 * ║  matrix.                                                                  ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS:                                                          ║
 * ║  The patent omits clear apertures. Values follow the relative rim heights ║
 * ║  in its sectional drawing, with exact-trace and geometry checks used as   ║
 * ║  constraints. The stepped inner-doublet profile is intentional: the       ║
 * ║  stop-facing faces are visibly much smaller than the outer menisci.       ║
 * ║                                                                            ║
 * ║  FOCUS:                                                                   ║
 * ║  Unit focus is supplied by the camera bellows. The 1.0 m endpoint is a   ║
 * ║  visualization convention, not a manufacturer-stated minimum distance.  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer reference:
 * https://www.pacificrimcamera.com/rl/02156/02156.pdf
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "schneider-super-angulon-90mm-f8",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH SUPER-ANGULON 90mm f/8",
  subtitle: "DE 975 637 C — SOLE NUMERICAL EXAMPLE / GÜNTER KLEMT",
  specs: [
    "6 ELEMENTS / 4 GROUPS",
    "f = 90.3 mm",
    "F/8",
    "92° FULL APERTURE / 100° AT f/22",
    "187.0 / 215.2 mm IMAGE CIRCLES",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 90,
  focalLengthDesign: 90.3,
  apertureMarketing: 8,
  apertureDesign: 8,
  imageFormat: "4x5",
  patentNumber: "DE 975 637 C",
  patentAuthors: ["Günter Klemt"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1962,
  elementCount: 6,
  groupCount: 4,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 100,
    maxTraceFieldDeg: 50,
  },

  /* ── Elements ──
   * fl values are standalone in-air element focal lengths at production scale.
   * Cemented-group EFLs are +48.775 mm (L2+L3) and +48.250 mm (L4+L5).
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.7,
      fl: -51.48,
      glass: "FK3-class (465/657; probable historical Schott FK3, vendor unspecified)",
      apd: false,
      role: "Front negative meniscus; supplies negative field curvature and bends the wide off-axis bundles toward the inner doublet.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7174,
      vd: 29.5,
      fl: -65.422,
      glass: "SF1 (Schott)",
      apd: false,
      role: "High-index negative member of the front cemented doublet; provides the junction index step required by claim 3.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5601,
      vd: 47,
      fl: 22.821,
      glass: "Unmatched (560/470 light-flint position; probable historical Schott LLF3)",
      apd: false,
      role: "Positive member of the front cemented doublet; its nearly plane stop-side surface participates in the field-curvature correction.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.5827,
      vd: 46.5,
      fl: 21.817,
      glass: "BAF3-class (583/465; Schott N-BAF3 / Hikari J-BAF3 equivalent)",
      apd: false,
      role: "Positive front member of the rear cemented doublet; its plane stop-side face is the counterpart to L3's weakly curved rear face.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7174,
      vd: 29.5,
      fl: -57.488,
      glass: "SF1 (Schott)",
      apd: false,
      role: "High-index negative member of the rear cemented doublet; balances L2 and contributes the second large cemented-interface index step.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.7,
      fl: -49.265,
      glass: "FK3-class (465/657; probable historical Schott FK3, vendor unspecified)",
      apd: false,
      role: "Rear negative meniscus; completes the near-symmetric field-correction arrangement.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 165.8533003292, d: 1.9592882667, nd: 1.4645, elemId: 1, sd: 23.25 },
    { label: "2", R: 20.8208237008, d: 13.7421048016, nd: 1, elemId: 0, sd: 18.6 },
    { label: "3", R: 23.0870972259, d: 10.0582817011, nd: 1.7174, elemId: 2, sd: 12.75 },
    { label: "4", R: 12.6586274191, d: 9.9047890719, nd: 1.5601, elemId: 3, sd: 11.25 },
    { label: "5", R: 944.3769445608, d: 1.1602236971, nd: 1, elemId: 0, sd: 6.75 },
    { label: "STO", R: 1e15, d: 1.1602236971, nd: 1, elemId: 0, sd: 6.2419427313 },
    { label: "6", R: 1e15, d: 9.191499795, nd: 1.5827, elemId: 4, sd: 6.75 },
    { label: "7", R: -12.7128012882, d: 9.7874123554, nd: 1.7174, elemId: 5, sd: 11.25 },
    { label: "8", R: -24.2879513248, d: 13.7421048016, nd: 1, elemId: 0, sd: 12.75 },
    { label: "9", R: -21.0465481555, d: 1.9592882667, nd: 1.4645, elemId: 6, sd: 18.6 },
    { label: "10", R: -269.9032449639, d: 66.2748101145, nd: 1, elemId: 0, sd: 23.25 },
  ],

  asph: {},

  /* ── Unit-focus visualization ── */
  focusDescription:
    "Unit focus by camera bellows; the 1.0 m endpoint is a visualization convention, not a manufacturer-stated minimum.",
  var: {
    "10": [66.2748101145, 76.7354540505],
  },
  varLabels: [["10", "BF"]],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1,
  nominalFno: 8,
  fstopSeries: [8, 11, 16, 22, 32, 45, 64],
  maxFstop: 64,

  scFill: 0.58,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
