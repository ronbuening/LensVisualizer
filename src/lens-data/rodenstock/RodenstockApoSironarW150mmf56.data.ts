import type { LensDataInput } from "../../types/optics.js";

/**
 * Rodenstock Apo-Sironar-W 150mm f/5.6
 *
 * Data source: DE 3907928 A1, Table 5, Optische Werke G. Rodenstock.
 * The patent table is internally inconsistent: the production literature and
 * patent claim/figure indicate a 7-element, 5-group lens, but the printed
 * Table 5 cannot reproduce f = 148.7 mm under that reading. This prescription
 * is therefore an EFL-reconciled reconstruction of Table 5 using the patent's
 * stated surface-medium convention, an inferred CaF2-class medium after
 * surface 8, and an implicit flat rear surface for the final printed glass
 * thickness. The added surface 13 is not a patent-numbered surface; it is a
 * data-model closure for the EFL-reconciled convention.
 *
 * Reconstructed table: 8 elements / 5 groups, all spherical.
 * Production product line: 7 elements / 5 groups, 80 degrees published field,
 * 252 mm image circle at f/22 for the 150 mm lens.
 *
 * Stop placement: Table 5 gives d7 = 8.60 and a separate Blende distance of
 * 7.45. Fig. 1 places the stop close to the first rear surface, so the data
 * file splits the surface 7 -> 8 air space into 7.45 mm from surface 7 to STO
 * and 1.15 mm from STO to surface 8.
 *
 * Semi-diameters: The patent omits clear-aperture semi-diameters. The values
 * below are conservative renderer semi-diameters sized from paraxial f/5.6
 * rays and reduced where necessary to satisfy edge-thickness and cross-gap sag
 * constraints. They should not be read as measured production clear apertures
 * or as proof of full f/5.6 coverage at the 80 degree published field.
 *
 * Focus: Unit focus on the view-camera bellows. The close-focus endpoint is an
 * illustrative 3.5 m object distance used only to expose the unit-focus BF
 * slider in LensVisualizer; the original lens has no fixed minimum focus
 * distance independent of the camera.
 */

const LENS_DATA = {
  key: "rodenstock-apo-sironar-w-150f56",
  maker: "Rodenstock",
  name: "RODENSTOCK APO-SIRONAR-W 150mm f/5.6",
  subtitle: "DE 3907928 A1 Table 5 - EFL-reconciled reconstruction",
  specs: [
    "150mm marketed / 148.7mm design",
    "f/5.6",
    "8 elements / 5 groups in reconstructed table",
    "80° published field",
    "all-spherical",
  ],

  focalLengthMarketing: 150,
  focalLengthDesign: 148.7,
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  imageFormat: "5x7",
  patentYear: 1990,
  elementCount: 8,
  groupCount: 5,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 80,
    maxTraceFieldDeg: 40,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.52,
      vd: 64.2,
      fl: 297.3,
      glass: "N-BK7 class (Schott equivalent; patent-rounded nd/vd)",
      apd: false,
      role: "Weak positive front collector in the object-side wide-angle meniscus set.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 63.5,
      fl: 64.2,
      glass: "N-PSK53A class (Schott equivalent; patent-rounded nd/vd)",
      apd: "inferred",
      apdNote: "Phosphate-crown / ED-class assignment inferred from rounded nd/vd only.",
      role: "Positive component of the front cemented chromatic-correction doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.69,
      vd: 49.6,
      fl: -33.0,
      glass: "Unmatched (dense lanthanum/barium flint class; patent-rounded nd=1.69, vd=49.6)",
      apd: false,
      role: "High-index negative partner that overcorrects L2 and makes the front cemented group net negative.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.5,
      vd: 56.4,
      fl: 220.6,
      glass: "K10 class (Schott equivalent; patent-rounded nd/vd)",
      apd: false,
      role: "Fourth front-group meniscus required by the patent to redistribute power and field curvature.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.43384,
      vd: 95.23,
      fl: 177.9,
      glass: "CaF2 class (inferred; EFL-reconciled Table 5 model)",
      apd: "inferred",
      apdNote:
        "CaF2-class medium inferred because Table 5 omits the surface-8 glass data; no patent line-index data published.",
      role: "Inferred ultra-low-dispersion first component of the reconstructed rear doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.46,
      vd: 65.8,
      fl: 109.6,
      glass: "FK3 class (Schott legacy equivalent; patent-rounded nd/vd)",
      apd: "inferred",
      apdNote: "Legacy fluor-crown class assignment inferred from rounded nd/vd only.",
      role: "Rear component of the first reconstructed rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.65,
      vd: 39.6,
      fl: 54.2,
      glass: "N-KZFS5 class (Schott equivalent; patent-rounded nd/vd)",
      apd: "inferred",
      apdNote: "KZFS-class negative anomalous-partial-dispersion role inferred from rounded nd/vd and design position.",
      role: "High-dispersion positive component of the final cemented field-corrector doublet.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Plano-Concave Negative",
      nd: 1.62,
      vd: 53.2,
      fl: -45.5,
      glass: "Unmatched (dense crown / short-flint class; patent-rounded nd=1.62, vd=53.2)",
      apd: false,
      role: "Negative rear field-flattener; the flat rear face is implicit in the printed table and explicit here as surface 13.",
      cemented: "D3",
    },
  ],

  surfaces: [
    { label: "1", R: 32.66, d: 5.0, nd: 1.52, elemId: 1, sd: 15.0 },
    { label: "2", R: 39.24, d: 0.1, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "3", R: 32.9, d: 9.2, nd: 1.62, elemId: 2, sd: 15.0 },
    { label: "4", R: 169.09, d: 2.1, nd: 1.69, elemId: 3, sd: 15.0 },
    { label: "5", R: 19.95, d: 2.91, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "6", R: 36.13, d: 2.45, nd: 1.5, elemId: 4, sd: 13.2 },
    { label: "7", R: 52.52, d: 7.45, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "STO", R: 1e15, d: 1.15, nd: 1.0, elemId: 0, sd: 10.992131162998318 },
    { label: "8", R: -163.71, d: 2.6408840731727103, nd: 1.43384, elemId: 5, sd: 12.0 },
    { label: "9", R: -52.71, d: 2.35, nd: 1.46, elemId: 6, sd: 12.5 },
    { label: "10", R: -26.13, d: 1.92, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "11", R: -136.26, d: 2.4, nd: 1.65, elemId: 7, sd: 11.8 },
    { label: "12", R: -28.18, d: 9.55, nd: 1.62, elemId: 8, sd: 11.8 },
    { label: "13", R: 1e15, d: 116.09130644532162, nd: 1.0, elemId: 0, sd: 14.0 },
  ],

  asph: {},
  var: {
    "13": [116.09130644532162, 122.67034675574259],
  },
  varLabels: [["13", "BF"]],

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "7" },
    { text: "REAR", fromSurface: "8", toSurface: "13" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
  ],

  closeFocusM: 3.5,
  focusDescription:
    "Unit focus on a view-camera bellows; close endpoint is an illustrative 3.5 m object distance, not a manufacturer minimum-focus specification.",
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,
  scFill: 0.62,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
