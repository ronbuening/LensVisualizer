import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Rodenstock Apo-Sironar-W 150mm f/5.6
 *
 * Data source: DE 3907928 C2 (granted 1997), Table 5, Optische Werke G. Rodenstock; the values are identical to
 * Table 5 of the 1990 A1 publication. The C2 grant prints each thickness, index and Abbe number between its two
 * radius rows, which settles the A1 rear-row layout: 7 elements in 5 groups (L1 | L2+L3 | L4 | stop | L5 | L6+L7),
 * 12 curved surfaces, and a central air space of 8.60 mm from surface 7 to the stop plus 7.45 mm from the stop to
 * surface 8. This matches claim 1 (four front lenses, three rear lenses, rear second and third lenses cemented) and
 * the 7-element / 5-group construction in Rodenstock's 1995 film-lens brochure.
 *
 * One index is corrected. Taken literally, Table 5 computes f = 300.93 mm, not the printed 148.7 mm, and then fails
 * claim 3 (f < R4 < 2f with R4 = 169.09 mm) and claim 1's requirement that L4's focal length be about f or longer.
 * L3's printed nd = 1.69 is replaced by 1.55, the value all four sibling tables use for the same element; its printed
 * Abbe number 49.6 and every radius and spacing are kept. The result is f = 148.04 mm. A search over single changes
 * (each index, each radius sign or digit, each thickness or stop spacing digit) finds this as the only one within
 * 0.5 % of 148.7 mm, and the only one whose third-order aberration balance matches the four sibling examples. It
 * remains an inference: the C2 grant still prints 1.69.
 *
 * Semi-diameters: the patent gives none. Values follow the Photons to Photos aperture estimates for this example,
 * reduced at surfaces 5/6 and 9/10 so that facing sags stay inside the air gaps. The stop radius is derived at f/5.6.
 * They are not measured production clear apertures. The patent's only section, Fig. 1, draws Table 2 (f = 207.3 mm);
 * scaled by the 0.72 radius ratio to Table 5, its rims agree with every stored value within about 8 %, so none were
 * changed. Floor-checked by real-ray trace: the 126 mm corner chief ray clears every rim.
 *
 * Glasses: Table 5 rounds nd to two decimals, so catalog identities stay unresolved apart from the class labels
 * noted per element. Focus is unit focus on the view-camera bellows; the 3.5 m close endpoint is illustrative.
 */

const LENS_DATA = {
  schema: 2,
  key: "rodenstock-apo-sironar-w-150f56",
  maker: "Rodenstock",
  name: "RODENSTOCK APO-SIRONAR-W 150mm f/5.6",
  subtitle: "DE 3907928 C2 Table 5 — one corrected index (L3)",
  catalog: {
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      marketing: 150,
      design: 148.7,
    },
    fNumber: {
      marketing: 5.6,
      design: 5.6,
    },
    lensMounts: ["large-format-lens-board"],
    imageFormat: "5x7",
    imageCircleMm: 252,
    specs: [
      "150mm marketed / 148.7mm design",
      "f/5.6",
      "7 elements / 5 groups",
      "80° published field",
      "all-spherical",
    ],
  },
  source: {
    patentNumber: "DE 3,907,928 C2",
    patentYear: 1997,
    authors: ["Ernst Rothe", "Josef Weiß"],
    assignees: ["Optische Werke G. Rodenstock"],
    errata: [
      {
        status: "corrected",
        surface: "4",
        field: "nd",
        printed: 1.69,
        applied: 1.55,
        evidence: ["source-summary", "sibling-example"],
        note: "Taken literally, Table 5 computes f = 300.93 mm against the printed 148.7 mm and fails claims 1 and 3. All four sibling tables use nd = 1.55 for this element; with only this index changed the model gives f = 148.04 mm, the only single change within 0.5 %. This is an inference, not a published correction: the C2 grant still prints 1.69. The printed Abbe number 49.6 is kept.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.52,
      vd: 64.2,
      glass: "Unmatched (520642 patent-rounded crown; no unique catalog identity)",
      apd: false,
      focalLengthMm: 297.3,
      indexReference: "d",
      role: "Weak positive object-side meniscus at the front of the wide-angle meniscus set.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 63.5,
      glass: "N-PSK53 class (Schott equivalent; patent-rounded nd/vd)",
      apd: "inferred",
      apdNote: "Phosphate-crown / ED-class assignment inferred from rounded nd/vd only.",
      cemented: "D1",
      focalLengthMm: 64.2,
      indexReference: "d",
      role: "Positive member of the front cemented chromatic-correction doublet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.55,
      vd: 49.6,
      glass: "Unmatched (nd=1.55 corrected from printed 1.69, vd=49.6 as printed; no unique catalog identity)",
      apd: false,
      cemented: "D1",
      focalLengthMm: -41.3,
      indexReference: "d",
      role: "Negative member of the front cemented doublet; its index is the one corrected value in this prescription.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.5,
      vd: 56.4,
      glass: "K10 class (Schott equivalent; patent-rounded nd/vd)",
      apd: false,
      focalLengthMm: 220.6,
      indexReference: "d",
      role: "Positive inner front meniscus adjacent to the central air space.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.46,
      vd: 65.8,
      glass: "Unmatched (460658 patent-rounded fluor-crown; no unique catalog identity)",
      apd: "inferred",
      apdNote: "Legacy fluor-crown class assignment inferred from rounded nd/vd only.",
      focalLengthMm: 167.9,
      indexReference: "d",
      role: "Positive rear singlet just behind the stop; the C2 grant places this glass between surfaces 8 and 9.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.65,
      vd: 39.6,
      glass: "Unmatched (650396 patent-rounded short flint; no unique catalog identity)",
      apd: false,
      cemented: "D2",
      focalLengthMm: -50.2,
      indexReference: "d",
      role: "Negative high-dispersion member of the rear cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 53.2,
      glass: "Unmatched (dense crown / short-flint class; patent-rounded nd=1.62, vd=53.2)",
      apd: false,
      cemented: "D2",
      focalLengthMm: 55.4,
      indexReference: "d",
      role: "Positive rear member of the cemented doublet; its curved rear face (surface 12) is the last surface.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.66,
      d: 5,
      medium: 1,
      sd: 25.555,
    },
    {
      label: "2",
      R: 39.24,
      d: 0.1,
      sd: 24.23,
    },
    {
      label: "3",
      R: 32.9,
      d: 9.2,
      medium: 2,
      sd: 22.8,
    },
    {
      label: "4",
      R: 169.09,
      d: 2.1,
      medium: 3,
      sd: 19.325,
    },
    {
      label: "5",
      R: 19.95,
      d: 2.91,
      sd: 13.2,
    },
    {
      label: "6",
      R: 36.13,
      d: 2.45,
      medium: 4,
      sd: 13.2,
    },
    {
      label: "7",
      R: 52.52,
      d: 8.6,
      sd: 12.67,
    },
    {
      label: "STO",
      R: "flat",
      d: 7.45,
    },
    {
      label: "8",
      R: -163.71,
      d: 2.35,
      medium: 5,
      sd: 13.17,
    },
    {
      label: "9",
      R: -52.71,
      d: 1.92,
      sd: 12.5,
    },
    {
      label: "10",
      R: -26.13,
      d: 2.4,
      medium: 6,
      sd: 12.5,
    },
    {
      label: "11",
      R: -136.26,
      d: 9.55,
      medium: 7,
      sd: 17.345,
    },
    {
      label: "12",
      R: -28.18,
      sd: 20.255,
    },
  ],
  focus: {
    closeFocusM: 3.5,
    description:
      "Unit focus on the view-camera bellows. The close endpoint is an illustrative 3.5 m object-to-image distance, not a manufacturer minimum-focus specification or a patent focus state.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22, 32, 45],
    maxFNumber: 45,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 80,
    maxTraceFieldDeg: 40,
  },
  layout: {
    scFill: 0.62,
    yScFill: 0.55,
  },
  gaps: {
    "12": {
      label: "BF",
      values: [[120.54115708741446, 127.38319388831465]],
    },
  },
  groups: [
    {
      text: "FRONT",
      fromSurface: "1",
      toSurface: "7",
    },
    {
      text: "REAR",
      fromSurface: "8",
      toSurface: "12",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "D2",
      fromSurface: "10",
      toSurface: "12",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
