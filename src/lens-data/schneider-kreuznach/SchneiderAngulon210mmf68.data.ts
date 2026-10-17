import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SCHNEIDER-KREUZNACH ANGULON 210mm f/6.8                    ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 1,882,530 A, sole numerical construction (job-card Example 1).║
 * ║  Six elements in two cemented triplets; all spherical; central diaphragm. ║
 * ║                                                                            ║
 * ║  SCALE: The patent construction is normalized to focal distance 1 and     ║
 * ║  explicitly states EFL = 200 mm. This fixed 210 mm job applies a uniform  ║
 * ║  1.05× scale to every patent length. The scaled prescription computes to  ║
 * ║  paraxial EFL = 210.020516450 mm. This is a disclosed product-correlation ║
 * ║  model, not proof that every production 210 mm Angulon used an exact      ║
 * ║  1.05× homothety of the patent construction.                              ║
 * ║                                                                            ║
 * ║  STOP MODEL: The patent fixes diaphragm B at the midpoint of Δ = 0.04050   ║
 * ║  normalized units, so the scaled R4→R5 gap is represented as 4.2525 mm +   ║
 * ║  STO + 4.2525 mm. Physical stop diameter is not published. The stop radius ║
 * ║  is derived from the design f-number f/6.8. It is not a source diaphragm   ║
 * ║  measurement.                                                              ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes only an approximate usable diameter ║
 * ║  of 0.20× focal distance for the outer menisci. The exposed outer faces   ║
 * ║  therefore use the 21.0 mm scaled semi-diameter anchor. Internal SDs are  ║
 * ║  modeled clear apertures derived from exact wide-open ray envelopes and   ║
 * ║  the patent section, then constrained by positive edge thickness, actual  ║
 * ║  rim slope, sphere domain, and the R4→R5 shared-gap intrusion limit.      ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: The patent publishes no       ║
 * ║  internal focus states or variable air gaps. `var` is empty.              ║
 * ║  closeFocusM = 1.0 m is only the current large-format schema/UI          ║
 * ║  placeholder and is not a product MFD; view-camera bellows translation    ║
 * ║  lies outside this optical prescription.                                  ║
 * ║                                                                            ║
 * ║  GLASS / SPECTRAL LIMIT: The patent publishes sodium-D `n_D` and ν only. ║
 * ║  The schema cannot tag sodium D separately from Fraunhofer d/e, so        ║
 * ║  indexReference is intentionally omitted while the published numbers are  ║
 * ║  retained in `nd`/`vd`. No D→d conversion is claimed. Glass labels are   ║
 * ║  qualified catalog proxies checked at D and d; nC/nF/ng/dPgF are not added. ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "schneider-kreuznach-angulon-210-f68",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH ANGULON 210mm f/6.8",
  subtitle:
    "US 1,882,530 A, sole numerical construction (job-card Example 1) — 1.05× scale to 210 mm product correlation",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "8x10",
    imageCircleMm: 382, // Schneider vintage lens data: 382 mm at f/16 (85°); other period sources give 362–420 mm
    specs: [
      "6 ELEMENTS / 2 GROUPS",
      "MODEL EFL 210.021 mm",
      "F/6.8",
      "ALL-SPHERICAL",
      "1.05× SCALE OF 200 mm PATENT CONSTRUCTION",
    ],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { marketing: 210, design: 210.02051645047416 },
    fNumber: { marketing: 6.8, design: 6.8 },
  },

  source: { patentNumber: "US 1,882,530 A", patentYear: 1932, authors: ["Albrecht Wilhelm Tronnier"], assignees: [] },

  /* ── Elements ──
   * `fl` is the independently computed standalone-in-air paraxial focal length
   * at the implemented 210 mm scale, not the cemented-triplet or in-situ power.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6035,
      vd: 38.0,
      focalLengthMm: -62.40095336900824,
      glass: "F5 — sodium-D-compatible spectral proxy (supplier unconfirmed)",
      role: "Outer negative meniscus of the front cemented triplet.",
      diagramLabel: "L1",
      cemented: "T1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.5715,
      vd: 50.8,
      focalLengthMm: 30.347089716770792,
      glass: "S-BAL2 — sodium-D-compatible spectral proxy (supplier unconfirmed)",
      role: "Strong positive middle element of the front cemented triplet.",
      diagramLabel: "L2",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.4631,
      vd: 64.9,
      focalLengthMm: -62.26708151130013,
      glass: "FK3 — sodium-D-compatible spectral proxy (supplier unconfirmed)",
      role: "Low-index biconcave element adjacent the central diaphragm in the front triplet.",
      diagramLabel: "L3",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.4631,
      vd: 64.9,
      focalLengthMm: -62.26708151130013,
      glass: "FK3 — sodium-D-compatible spectral proxy (supplier unconfirmed)",
      role: "Low-index biconcave element adjacent the central diaphragm in the rear triplet.",
      diagramLabel: "L4",
      cemented: "T2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5715,
      vd: 50.8,
      focalLengthMm: 30.347089716770792,
      glass: "S-BAL2 — sodium-D-compatible spectral proxy (supplier unconfirmed)",
      role: "Strong positive middle element of the rear cemented triplet.",
      diagramLabel: "L5",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6035,
      vd: 38.0,
      focalLengthMm: -66.46947001364958,
      glass: "F5 — sodium-D-compatible spectral proxy (supplier unconfirmed)",
      role: "Outer negative meniscus of the rear cemented triplet; its thickness is the patent's asymmetric departure.",
      diagramLabel: "L6",
      cemented: "T2",
    },
  ],

  /* ── Surface prescription ──
   * R and patent-internal d values are the source construction scaled uniformly by 210.
   * Surface 8 d is the independently computed paraxial infinity-image BFD; the patent does not tabulate an image gap.
   */
  surfaces: [
    { label: "1", R: 49.1295, d: 2.5137, sd: 21.0, medium: 1 },
    { label: "2", R: 20.9076, d: 8.3181, sd: 15.538, medium: 2 },
    { label: "3", R: -87.0156, d: 2.4213, sd: 15.538, medium: 3 },
    { label: "4", R: 43.5078, d: 4.2525, sd: 14.0 },
    { label: "STO", R: "flat", d: 4.2525 },
    { label: "5", R: -43.5078, d: 2.4213, sd: 14.0, medium: 4 },
    { label: "6", R: 87.0156, d: 8.3181, sd: 15.538, medium: 5 },
    { label: "7", R: -20.9076, d: 4.2273, sd: 15.538, medium: 6 },
    { label: "8", R: -46.9896, d: 198.93084187542706, sd: 21.0 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.0,
    description:
      "The patent supplies a fixed optical cell. View-camera bellows focusing is not modeled, and no minimum focus distance is established.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 6.8, fStops: [6.8, 8, 11, 16] },

  groups: [
    { text: "FRONT TRIPLET", fromSurface: "1", toSurface: "4" },
    { text: "REAR TRIPLET", fromSurface: "5", toSurface: "8" },
  ],
  doublets: [],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
