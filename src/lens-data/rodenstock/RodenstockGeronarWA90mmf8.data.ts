import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE 3026282 C2 (identical table in DE 3026282 A1), sole example, printed for
 * f' = 100, f/8, 2ω ≥ 85°. Radii, thicknesses and air gaps are scaled ×0.9 to
 * the 90 mm production focal length; the e-line glass values (ne / νe) are kept
 * unchanged with indexReference "e". Computed EFL 89.960 mm (−0.044 %).
 * Probable production match for the 1982 Geronar-WA 90 mm f/8, not a confirmed
 * factory prescription.
 * Both tables repeat the label d3 for the fourth thickness (10.21); both drawings
 * label it d4. The printed central gap 6.11 + 7.29 is split r4→stop 6.11,
 * stop→r5 7.29, as both drawings place the iris nearer r4.
 * The patent prints no back focus; the infinity BF is the paraxial value.
 * Stop diameter is set by the f/8 marginal ray; clear apertures are read from
 * the patent drawings (r7 at the drawn step on the L4 front face).
 * Maker coverage: 80° / 155 mm circle at f/11, 85° / 170 mm at f/22.
 * Focus: unit focus by view-camera bellows. Only the back-focus gap varies; the
 * 1.0 m (object to image) close state is computed paraxially for the slider and
 * is neither printed in the patent nor a maker minimum focus distance.
 */
const LENS_DATA = {
  schema: 2,
  key: "rodenstock-geronar-wa-90mm-f8",
  maker: "Rodenstock",
  name: "RODENSTOCK GERONAR-WA 90mm f/8",
  subtitle: "DE 3026282 C2, sole example — probable production correlation",
  visible: true,
  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    elementCount: 4,
    groupCount: 4,
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "DESIGN f = 100 (SCALED ×0.9)",
      "DESIGN F/8",
      "ALL SPHERICAL",
    ],
    focalLengthMm: {
      marketing: 90,
      design: 90,
    },
    fNumber: {
      marketing: 8,
      design: 8,
    },
  },
  source: {
    patentNumber: "DE 3026282 C2",
    patentYear: 1982,
    authors: ["Josef Weiß"],
    assignees: ["Optische Werke G. Rodenstock"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6207,
      vd: 49.47,
      indexReference: "e",
      glass: "Unmatched (unidentified historical melt, source ne 1.6207 / νe 49.47; catalog equivalents not adopted)",
      role: "Outer front positive meniscus, convex to the object; lower-dispersion collecting element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7918,
      vd: 25.87,
      indexReference: "e",
      glass: "Unmatched (unidentified historical melt, source ne 1.7918 / νe 25.87; catalog equivalents not adopted)",
      role: "Inner front negative meniscus, concave to the iris; high-index, high-dispersion flint.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7918,
      vd: 25.87,
      indexReference: "e",
      glass: "Unmatched (unidentified historical melt, source ne 1.7918 / νe 25.87, same as L2; catalog equivalents not adopted)",
      role: "Inner rear negative meniscus, concave to the iris; same glass as L2 but thinner and differently curved.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6251,
      vd: 52.86,
      indexReference: "e",
      glass: "Unmatched (unidentified historical melt, source ne 1.6251 / νe 52.86; catalog equivalents not adopted)",
      role: "Outer rear positive meniscus, convex to the image; the strongest positive element.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 26.631,
      d: 8.802,
      sd: 17.5,
      medium: 1,
    },
    {
      label: "2",
      R: 68.607,
      d: 0.099,
      sd: 17.5,
    },
    {
      label: "3",
      R: 27.414,
      d: 3.6,
      sd: 12.5,
      medium: 2,
    },
    {
      label: "4",
      R: 17.865000000000002,
      d: 5.4990000000000006,
      sd: 8.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.561,
    },
    {
      label: "5",
      R: -17.361,
      d: 2.331,
      sd: 9.6,
      medium: 3,
    },
    {
      label: "6",
      R: -24.786,
      d: 0.099,
      sd: 13,
    },
    {
      label: "7",
      R: -86.058,
      d: 9.189000000000002,
      sd: 16,
      medium: 4,
    },
    {
      label: "8",
      R: -25.506,
      sd: 18,
    },
  ],
  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focus by view-camera bellows; no internal focus groups. The slider varies only the back-focus gap, from 72.73 mm at infinity to 82.70 mm at a 1.0 m object-to-image distance. The close state is computed paraxially for illustration; neither the patent nor Rodenstock gives a minimum focus distance.",
  },

  gaps: { "8": { label: "BF", values: [[72.73122109844566, 82.69825064453137]] } },

  aperture: {
    nominalFNumber: 8,
    fStops: [8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
