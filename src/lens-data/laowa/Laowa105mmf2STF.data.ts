import type { LensDataInput } from "../../types/optics.js";

/**
 * LAOWA 105mm f/2 Smooth Trans Focus (STF) — CN 104991330 B, Example 1 (PDF pp. 5–6, Fig. 1).
 * Patent radii, spacings and d-line indices are used unscaled; all 22 table rows are kept.
 * S4/S5: the patent prints the L2/L3 interface twice (R = 400.1135, D4 = 0). Both rows are
 * kept, so the pair is joined across a zero-thickness air boundary.
 * 11 elements in 8 groups; Gr1 (L1–L6) and Gr2 (L7–L11) are the patent's two positive groups.
 * The patent states f = 102.2630 and an image gap of 39.6422 mm; its table computes to
 * EFL 102.270950 and paraxial BFD 39.647903 mm. The printed values are kept unchanged.
 *
 * Apodization: the patent gives d-line (587.56 nm) intensity transmission T = A^(D/2), where
 * A = 0.5 is the transmission of 2 mm of the neutral-gray glass. L8 carries the equivalent
 * alpha = ln(2)/2 per mm. Rays are attenuated over their actual path length in L8; the
 * patent's Figure 3 tabulates the same law against axial thickness. The coefficient is
 * applied at all wavelengths: no spectral absorption curve, coating loss, pupil-integrated
 * T-stop or production material is claimed. L8 carries the patent's own designation "A"
 * (Figure 1, ¶0034) in its inspector label only; the diagram keeps the numeral 8, because
 * "A" is the site's aspheric-surface marker and this lens has no aspheres.
 *
 * The patent has two stop planes. S12 (ST1) is its light-blocking stop, modeled as a fixed
 * clipping plane. S18 (patent ST2) is its aperture stop and is the model's STO: the only
 * adjustable aperture and the only one drawn with the stop symbol. The production lens's
 * two independently adjustable diaphragms are not reproduced. Both axial positions are the
 * patent's. Stop radii and all semi-diameters are inferred, not published: STO is set from
 * the patent's F/2.05, the others are estimated from Figure 1 (0.0846 mm/px over the
 * 85.47 mm vertex span) and floor-checked by exact ray trace under the default geometry
 * rules. S6 and S11 end where Figure 1 ends the concave rear faces of L3 and L6 at a flat
 * annulus (20.5 mm, inside the 19.7–20.7 mm the figure reads, and 15.6 mm); the renderer
 * joins those unequal rims with a straight edge where the figure draws a square block.
 * L4 is square-cut at 21.5 mm on both faces, as drawn. The narrow S6/S7 air gap admits
 * that only with S6 at 20.5 mm or less under the default gap rule; no gap-margin override
 * is used. Figure 1 draws the ST1 opening near 13.2 mm, below the 14.15 mm the F/2.05
 * axial ray needs there, so ST1 stays at 14.5 mm.
 *
 * Focus PUBLISHED: D11 and D22 at infinity and at 0.15x are the patent's rows. The 0.855 m
 * object-to-image distance of the 0.15x state is calculated, and is not the marketed 0.9 m
 * minimum focus distance. Positions between the two rows are linearly interpolated; the
 * patent gives no intermediate states.
 *
 * Production correlation rests on construction, not on a maker-confirmed prescription.
 * Laowa's published section has the same 11/8 layout with the apodization element ahead of
 * its positive partner, as in Figure 1, but draws that element concave-front with a
 * biconvex partner where Example 1 has plane outer faces: the production lens reads as a
 * refinement of this example. The 2021 catalogue's “Glass Aspherical” swatch falls on L2
 * (nd 1.92286), which Laowa's press material calls the high-refractive element; the patent
 * has no aspheric data and none is added. Laowa marks L4, L5 and L9 Low Dispersion; only
 * L5's nd/vd fits a low-dispersion crown, so only L5 carries the inferred tag.
 * Glass names are catalogue equivalents by nd/vd or marked unmatched; the patent names none.
 */

const LENS_DATA = {
  key: "laowa-105mm-f2-stf",
  maker: "Laowa",
  name: "LAOWA 105mm f/2 Smooth Trans Focus (STF)",
  subtitle: "CN 104991330 B, Example 1 — construction-based production correlation",
  specs: ["11 ELEMENTS / 8 GROUPS", "DESIGN f = 102.26 mm", "DESIGN F/2.05", "ALL SPHERICAL", "APODIZATION ELEMENT"],
  focalLengthMarketing: 105,
  focalLengthDesign: 102.27095000035128,
  apertureMarketing: 2,
  apertureDesign: 2.05,
  lensMounts: ["canon-ef", "nikon-f", "sony-a", "sony-fe", "pentax-k"],
  imageFormat: "135-full-frame",
  patentNumber: "CN 104991330 B",
  patentAuthors: ["Xiaohua Zhang"],
  patentAssignees: ["Anhui Changgeng Optics Technology Co., Ltd."],
  patentYear: 2017,
  elementCount: 11,
  groupCount: 8,
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      fl: 185.707722,
      glass: "FC5 (HOYA; coordinate equivalent)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      fl: 70.446746,
      glass: "E-FDS1 (HOYA; coordinate equivalent)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.69449,
      vd: 29.84,
      indexReference: "d",
      fl: -49.811617,
      glass: "Unmatched (flint; source nd 1.69449, vd 29.84)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: 129.51116,
      glass: "TAF3 (HOYA; coordinate equivalent)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.55102,
      vd: 66.41,
      indexReference: "d",
      fl: 50.270486,
      glass: "Unmatched (crown; source nd 1.55102, vd 66.41)",
      apd: "inferred",
      apdNote:
        "Laowa's published construction marks this element Low Dispersion; nd 1.55102 / νd 66.41 lies in the phosphate-crown region but matches no catalogue glass, and the patent gives no partial-dispersion data.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.72,
      indexReference: "d",
      fl: -30.798184,
      glass: "SF11 (Schott; coordinate equivalent)",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: 102.535704,
      glass: "TAF3 (HOYA; coordinate equivalent)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8 (A)",
      type: "Plano-Concave",
      nd: 1.504,
      vd: 63.0,
      indexReference: "d",
      fl: -59.52381,
      glass: "Unmatched (neutral-gray apodization glass; source nd 1.50400, vd 63.00)",
      cemented: "D3",
      absorptionCoefficientPerMm: 0.34657359027997264,
      role: "Neutral-gray negative apodization element, cemented ahead of L9. Its thickness grows toward the rim, so d-line transmission falls from 0.71 on axis to 0.21 at 14 mm height (patent T = A^(D/2), A = 0.5 for 2 mm).",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Plano-Convex",
      nd: 1.67128,
      vd: 56.37,
      indexReference: "d",
      fl: 44.69074,
      glass: "Unmatched (crown; source nd 1.67128, vd 56.37)",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      fl: -39.933804,
      glass: "E-F2 (HOYA; coordinate equivalent)",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.81538,
      vd: 36.87,
      indexReference: "d",
      fl: 49.972461,
      glass: "Unmatched (high-index glass; source nd 1.81538, vd 36.87)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 40.6092,
      d: 6.6978,
      nd: 1.48749,
      elemId: 1,
      sd: 27,
    },
    {
      label: "2",
      R: 69.6626,
      d: 0.2,
      nd: 1.0,
      elemId: 0,
      sd: 27,
    },
    {
      label: "3",
      R: 56.3816,
      d: 6.8,
      nd: 1.92286,
      elemId: 2,
      sd: 25.2,
    },
    {
      label: "4",
      R: 400.1135,
      d: 0.0,
      nd: 1.0,
      elemId: 0,
      sd: 25.2,
    },
    {
      label: "5",
      R: 400.1135,
      d: 2.0,
      nd: 1.69449,
      elemId: 3,
      sd: 25.2,
    },
    {
      label: "6",
      R: 31.7755,
      d: 2.0812,
      nd: 1.0,
      elemId: 0,
      sd: 20.5,
    },
    {
      label: "7",
      R: 40.1264,
      d: 4.2823,
      nd: 1.8042,
      elemId: 4,
      sd: 21.5,
    },
    {
      label: "8",
      R: 62.1692,
      d: 0.2,
      nd: 1.0,
      elemId: 0,
      sd: 21.5,
    },
    {
      label: "9",
      R: 31.8589,
      d: 8.9787,
      nd: 1.55102,
      elemId: 5,
      sd: 20,
    },
    {
      label: "10",
      R: -190.9504,
      d: 4.1646,
      nd: 1.78472,
      elemId: 6,
      sd: 20,
    },
    {
      label: "11",
      R: 27.9354,
      d: 13.5722,
      nd: 1.0,
      elemId: 0,
      sd: 15.6,
    },
    {
      label: "ST1",
      R: 1000000000000000.0,
      d: 1.0,
      nd: 1.0,
      elemId: 0,
      sd: 14.5,
    },
    {
      label: "13",
      R: 90.8315,
      d: 3.0635,
      nd: 1.8042,
      elemId: 7,
      sd: 14.6,
    },
    {
      label: "14",
      R: -881.1564,
      d: 1.5,
      nd: 1.0,
      elemId: 0,
      sd: 14.6,
    },
    {
      label: "15",
      R: 1000000000000000.0,
      d: 1.0,
      nd: 1.504,
      elemId: 8,
      sd: 14,
    },
    {
      label: "16",
      R: 30.0,
      d: 4.6598,
      nd: 1.67128,
      elemId: 9,
      sd: 14,
    },
    {
      label: "17",
      R: 1000000000000000.0,
      d: 1.0,
      nd: 1.0,
      elemId: 0,
      sd: 14,
    },
    {
      label: "STO",
      R: 1000000000000000.0,
      d: 3.4,
      nd: 1.0,
      elemId: 0,
      sd: 11.923394366832653,
    },
    {
      label: "19",
      R: -45.3922,
      d: 3.0,
      nd: 1.62004,
      elemId: 10,
      sd: 12,
    },
    {
      label: "20",
      R: 55.8543,
      d: 8.8683,
      nd: 1.0,
      elemId: 0,
      sd: 12,
    },
    {
      label: "21",
      R: 131.6341,
      d: 9.0,
      nd: 1.81538,
      elemId: 11,
      sd: 16.5,
    },
    {
      label: "22",
      R: -57.2017,
      d: 39.6422,
      nd: 1.0,
      elemId: 0,
      sd: 16.5,
    },
  ],
  asph: {},
  var: {
    "11": [13.5722, 7.0],
    "22": [39.6422, 55.5496],
  },
  publishedStations: {
    focus: [1],
  },
  varLabels: [
    ["11", "D11"],
    ["22", "D22"],
  ],
  groups: [
    {
      text: "Gr1",
      fromSurface: "1",
      toSurface: "11",
    },
    {
      text: "Gr2",
      fromSurface: "13",
      toSurface: "22",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "D2",
      fromSurface: "9",
      toSurface: "11",
    },
    {
      text: "D3",
      fromSurface: "15",
      toSurface: "17",
    },
  ],
  closeFocusM: 0.8552552510148389,
  focusDescription:
    "PUBLISHED infinity and 0.15× states from CN 104991330 B Example 1 (D11 13.5722 → 7.0000 mm, D22 39.6422 → 55.5496 mm). Both positive groups move toward the object, Gr1 by 9.34 mm and Gr2 by 15.91 mm, closing the air space between them by 6.57 mm. The 0.855 m object-to-image distance of the 0.15× state is calculated from those spacings; the patent does not print it, and it is not the marketed 0.9 m minimum focus distance. Positions between the two states are linearly interpolated.",
  nominalFno: 2.05,
  maxFstop: 22,
  fstopSeries: [2.05, 2.8, 4, 5.6, 8, 11, 16, 22],
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
