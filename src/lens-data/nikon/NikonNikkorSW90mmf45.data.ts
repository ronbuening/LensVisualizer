// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR-SW 90mm f/4.5                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,176,915 Example 1 (Nippon Kogaku K.K. / Ikuo      ║
 * ║    Mori). Large-format wide-angle lens: negative meniscus L1,        ║
 * ║    cemented positive triplet L2 (L2A-L2B-L2C), diaphragm, cemented   ║
 * ║    positive doublet L3 (L3A-L3B), negative meniscus L4.              ║
 * ║  7 elements / 4 groups, 0 aspherical surfaces (all spherical).       ║
 * ║  Focus: unit focus by view-camera bellows; the whole lens moves and  ║
 * ║    only the rear-vertex-to-image gap (surface 11) changes.           ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING: patent prescription normalized to f = 100. Every   ║
 * ║    R and d scaled by s = 90.4 / EFL(f=100 model) = 0.9040227 and     ║
 * ║    rounded to 0.0001 mm; 90.4 mm is Nikon's published focal length   ║
 * ║    (nominal 90 mm). No aspherical coefficients to transform.         ║
 * ║  NOTE ON BACK FOCUS: surface 11 d is the computed paraxial BFD of    ║
 * ║    this rounded model (62.9794). The patent's Bf = 69.673 scales to  ║
 * ║    62.9860; the 0.007 mm difference is within source rounding.       ║
 * ║  NOTE ON STOP POSITION: inferred. The patent places diaphragm 10 in  ║
 * ║    d6 without a dimension. STO splits d6 at 2.0098 mm after r6       ║
 * ║    (fraction 0.611 of d6), measured from the to-scale Fig. 1.        ║
 * ║  NOTE ON STOP SIZE: STO sd calibrated so the paraxial entrance       ║
 * ║    pupil diameter is EFL / 4.5. This reproduces the published        ║
 * ║    1:4.5 by construction; it is not independent evidence of the      ║
 * ║    physical diaphragm diameter.                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: none published. Read from the to-scale      ║
 * ║    Fig. 1 section (scale 0.0779 mm/px at 300 dpi, from the r1–r11    ║
 * ║    vertex distance) and checked by real-ray trace: r1 32.3, r2 21.5  ║
 * ║    (the 0.9·|R| rim limit), r3 20.4, the L2 barrel r4–r6 12.7, r9    ║
 * ║    18.5, r10 19.6. r7/r8 10.85 and r11 24.61 keep the ray-derived    ║
 * ║    values, which the figure confirms within 2%; r11 agrees with the  ║
 * ║    patent's rear effective diameter of about 0.55f. The chief ray    ║
 * ║    reaches the 117.5 mm corner (52.4°); at f/16 the corner bundle    ║
 * ║    is trimmed only by the r2 rim. Full-aperture oblique bundles      ║
 * ║    beyond ~31° are mechanically vignetted, as the published          ║
 * ║    coverage implies.                                                 ║
 * ║  NOTE ON L3B: claim 1 calls L3B a "positive meniscus"; the table     ║
 * ║    (printed twice, reproducing f and Bf) gives a negative meniscus,  ║
 * ║    which is what is modeled.                                         ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gap.            ║
 * ║  The patent lists no cover glass, filter or rear plate.              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-nikkor-sw-90mm-f45",
  maker: "Nikon",
  name: "NIKON NIKKOR-SW 90mm f/4.5",
  subtitle: "US 4,176,915 EXAMPLE 1 — NIPPON KOGAKU K.K. / IKUO MORI",
  specs: [
    "7 ELEMENTS / 4 GROUPS",
    "f ≈ 90.4 mm",
    "F/4.5",
    "2ω ≈ 105° (f/16)",
    "IMAGE CIRCLE 235 mm (f/16)",
    "ALL SPHERICAL",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 90,
  focalLengthDesign: 90.4, // Nikon published focal length (Nikon Imaging Japan product page)
  apertureMarketing: 4.5,
  apertureDesign: 4.5, // patent aperture ratio 1:4.5
  lensMounts: ["large-format-lens-board"],
  imageFormat: "5x7", // Nikon labels the 235 mm f/16 image circle as 5x7
  imageCircleMm: 235, // Nikon published image circle at f/16
  patentNumber: "US 4,176,915", // no kind code printed on the 1979 grant
  patentAuthors: ["Ikuo Mori"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1979,
  elementCount: 7,
  groupCount: 4,

  /* ── Elements ── fl = standalone thick-lens focal length in air at f = 90.4 */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5725,
      vd: 57.5,
      fl: -56.07,
      glass: "573575 — barium crown, BaK1 class (N-BAK1 / H-BaK8 coordinate-exact)",
      apd: false,
      role: "Divergent front component, convex to the object; widens the accepted field ahead of the stop.",
    },
    {
      id: 2,
      name: "L2A",
      diagramLabel: "L2A",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.80218,
      vd: 44.4,
      fl: 23.1,
      glass: "802444 — lanthanum dense flint, LaSF11 class (nearest NBFD14 HOYA, Δnd −0.0005; supplier unconfirmed)",
      apd: false,
      role: "Thick high-index biconvex front of the cemented triplet; main positive power ahead of the stop.",
      cemented: "L2",
    },
    {
      id: 3,
      name: "L2B",
      diagramLabel: "L2B",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.67163,
      vd: 38.8,
      fl: -24.92,
      glass: "672388 — barium dense flint class (nearest S-NBH52V OHARA, Δnd +0.0014, Δνd −0.5; supplier unconfirmed)",
      apd: false,
      role: "Thin biconcave middle of the triplet; its lower index than L2A makes junction r4 converging (condition 3), while r5 against L2C diverges.",
      cemented: "L2",
    },
    {
      id: 4,
      name: "L2C",
      diagramLabel: "L2C",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.52,
      vd: 70.1,
      fl: 80.04,
      glass: "520701 — phosphate crown class (nearest J-PKH1 HIKARI, Δnd −0.0014; supplier unconfirmed)",
      apd: false,
      role: "Weak positive rear of the triplet with a nearly flat rear face (r6 ≈ 2193 mm) facing the stop.",
      cemented: "L2",
    },
    {
      id: 5,
      name: "L3A",
      diagramLabel: "L3A",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.60717,
      vd: 40.2,
      fl: 25.73,
      glass:
        "607402 — barium dense flint, BaSF/BaFD3 class (BAFD3 HOYA coordinate-compatible, Δνd +0.16; supplier unconfirmed)",
      apd: false,
      role: "Positive meniscus convex to the image directly behind the stop; front of the cemented doublet.",
      cemented: "L3",
    },
    {
      id: 6,
      name: "L3B",
      diagramLabel: "L3B",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -43.1,
      glass: "SF1 class (717295; Hoya E-FD1 / Ohara S-TIH1 / Schott SF1 coordinate-exact)",
      apd: false,
      role: "Thick dense-flint meniscus convex to the image; claim 1 calls it positive, the table makes it negative.",
      cemented: "L3",
    },
    {
      id: 7,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7335,
      vd: 51.0,
      fl: -75.54,
      glass:
        "734510 — lanthanum crown, LaKN12 class (LAKN12 SUMITA coordinate-compatible, Δνd +0.2; TAC4 HOYA alternate; supplier unconfirmed)",
      apd: false,
      role: "Divergent rear meniscus convex to the image; placed close to L3 (d9 < d2) to keep the rear diameter small.",
    },
  ],

  /* ── Surface prescription (f = 90.4 mm) ── */
  surfaces: [
    { label: "1", R: 96.1835, d: 1.5911, nd: 1.5725, elemId: 1, sd: 32.3 },
    { label: "2", R: 23.9213, d: 16.1458, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "3", R: 32.4933, d: 24.6165, nd: 1.80218, elemId: 2, sd: 20.4 },
    { label: "4", R: -28.5762, d: 0.7955, nd: 1.67163, elemId: 3, sd: 12.7 },
    { label: "5", R: 40.8654, d: 2.9923, nd: 1.52, elemId: 4, sd: 12.7 },
    { label: "6", R: 2192.7785, d: 2.0098, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "STO", R: 1e15, d: 1.2808, nd: 1.0, elemId: 0, sd: 10.3061 }, // STO position inferred from Fig. 1; sd calibrated to f/4.5
    { label: "7", R: -230.2419, d: 8.4707, nd: 1.60717, elemId: 5, sd: 10.85 },
    { label: "8", R: -14.8314, d: 15.6486, nd: 1.71736, elemId: 6, sd: 10.85 },
    { label: "9", R: -41.0643, d: 9.9714, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "10", R: -22.954, d: 1.4916, nd: 1.7335, elemId: 7, sd: 19.6 },
    { label: "11", R: -40.2679, d: 62.9794, nd: 1.0, elemId: 0, sd: 24.61 },
  ],

  asph: {},

  /* ── Variable air spacing: bellows (unit) focus ── */
  var: {
    "11": [62.9794, 73.5341], // [infinity, 1.0 m object-to-image]; exact paraxial conjugate
  },

  varLabels: [["11", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (L1–L2)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (L3–L4)", fromSurface: "7", toSurface: "11" },
  ],

  doublets: [
    { text: "L2", fromSurface: "3", toSurface: "6" },
    { text: "L3", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0, // modeling choice: no manufacturer minimum focus for a bellows-focused view-camera lens
  focusDescription:
    "Unit focus by view-camera bellows: the whole lens translates and only the rear-vertex-to-image distance changes. The 1.0 m close-focus state is a modeling choice, solved from the exact paraxial conjugate; Nikon publishes no minimum focus for this lens.",

  /* ── Aperture configuration ── */
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32, 45, 64],
  maxFstop: 64, // Nikon: minimum aperture f/64

  /* ── Layout tuning ── */
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
