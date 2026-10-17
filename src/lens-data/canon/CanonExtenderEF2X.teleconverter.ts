import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon Extender EF2X (the original 1987 version) — JP S63-106715 A, Example 2.
 * Seven elements in five air-spaced groups; the patent's three power groups
 * are positive, negative, positive; all surfaces are spherical. The match to
 * the production converter is strong, but Canon has not confirmed that this
 * example is the production prescription.
 *
 * MASTER LENS: the patent's f = 293.3 mm, F/2.8 master lens is used only as
 * the reference for the geometry below; it is not claimed to be a catalog host.
 * Its index N4 (page 4 of the patent scan) is read as 1.58313 in this file and
 * as 1.58913 in an independent re-read. The printed master focal length 293.3
 * favours 1.58313 (the master rows trace to 293.299101027 mm, against
 * 293.357 mm with 1.58913); the printed Abbe number 61.0 favours 1.58913.
 * The choice moves masterImageDistanceMm by 0.0003 mm and the last gap by
 * 0.0012 mm. No printed value was adjusted to fit.
 *
 * GEOMETRY: the patent prints neither the master's back focus nor the combined
 * back focus. The master rows (with N4 = 1.58313) trace to a paraxial back
 * focus of 125.798965641 mm from the last glass surface R14. The printed
 * master-to-converter interval L = 73.74 mm is measured from the master's
 * stop R15, which lies 2.93 mm behind R14, so R14 to the converter's first
 * surface r11 is 76.67 mm and masterImageDistanceMm = 125.798965641 − 76.67
 * = 49.128965641316. Measuring L from R14 instead gives 2.15× rather than
 * the stated 2×; that alternative is recorded in the audit log. The last gap,
 * d = 54.250153768237 mm, is the converter's paraxial (Gaussian) back focus
 * for that virtual object; it is derived, not tabulated in the patent. The
 * patent lists no plates behind the converter, and the converter has no stop
 * and no moving groups: the host supplies its own stop and focus.
 *
 * SEMI-DIAMETERS: the patent lists no clear apertures. The rims are measured
 * from patent Figure 3 (page 6 of the scan), scaled to all twelve vertex
 * positions of the prescription and rounded up to 0.1 mm. Figure 3 draws
 * all five units square-cut, so the two faces of each singlet and the four
 * faces of the cemented triplet share one height. The stored values agree
 * to about 0.1 mm with the centre of the drawn outline (13.31, 12.27, 10.29,
 * 13.14 and 13.06 mm) and none exceeds its outer edge, 0.14–0.18 mm further
 * out. The rear pair's 13.2 and 13.1 mm are also a ray floor: on the
 * declared hosts the chief ray to the 21.63 mm format corner reaches
 * 13.17 mm on surface 10 and 13.06 mm on surface 12. The rims keep the
 * off-axis clipping the drawing implies; they are not published production
 * apertures and do not guarantee clearance on every host. minHostFno = 2:
 * exact marginal rays of f/2.0–2.06 beams clear every rim, while an f/1.86
 * beam overfills surfaces 1 and 3 by 0.16 mm. Compatible hosts are declared
 * in the host lens files (acceptsTeleconverters); a new host still needs its
 * junction gap, axial beam and corner coverage checked first.
 *
 * GLASS: the patent's printed N and ν are kept as given. They are taken as
 * d-line values, inferred from the d and g curves of the aberration figures
 * and from the match to catalog glasses. The six-digit glass codes supply
 * catalog-equivalent dispersion; neither the supplier or melt nor any
 * apochromatic performance is established.
 */

const TELECONVERTER_DATA = {
  schema: 2,
  key: "canon-extender-ef2x",
  maker: "Canon",
  name: "CANON EXTENDER EF2X",
  subtitle: "JP S63-106715 A, Example 2 — production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    specs: ["7 ELEMENTS / 5 GROUPS", "2× REAR CONVERTER", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 5,
  },

  source: { patentNumber: "JP S63-106715 A", patentYear: 1988, authors: ["Hideki Ogawa"], assignees: ["Canon Inc."] },

  magnification: 2,
  masterImageDistanceMm: 49.1289656413155,
  minHostFNumber: 2, // f/2.0-2.06 marginal rays clear every rim; an f/1.86 beam overfills surfaces 1 and 3 by 0.16 mm

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.691,
      vd: 54.8,
      focalLengthMm: -57.267684448,
      glass: "691548 - lanthanum crown (coordinate equivalent; supplier unconfirmed)",
      role: "Front element of the positive first group (I): a negative meniscus, convex to the object.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: 34.341956895,
      glass: "593353 - FTM16-class flint (coordinate equivalent; supplier unconfirmed)",
      role: "Biconvex rear element of group I; it outweighs L11, so the group is positive (+72.8 mm).",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.60342,
      vd: 38,
      focalLengthMm: 48.357915943,
      glass: "603380 - flint (coordinate equivalent; supplier unconfirmed)",
      role: "Front element of the cemented triplet that forms the negative second group (II): a positive meniscus, convex to the image.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.9,
      focalLengthMm: -11.853493542,
      glass: "806409 - lanthanum flint (coordinate equivalent; supplier unconfirmed)",
      role: "Biconcave centre of the cemented triplet; the converter's strongest element and the source of group II's negative power.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.7,
      focalLengthMm: 32.118212132,
      glass: "581407 - light flint (coordinate equivalent; supplier unconfirmed)",
      role: "Biconvex rear element of the cemented triplet; its nearly flat rear surface faces the 12.19 mm air gap to group III.",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.51112,
      vd: 60.5,
      focalLengthMm: 46.012567759,
      glass: "511605 - crown (coordinate equivalent; supplier unconfirmed)",
      role: "Front element of the positive third group (III): biconvex, with a weak front surface and a strong rear surface.",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -58.008647322,
      glass: "773496 - lanthanum flint (coordinate equivalent; supplier unconfirmed)",
      role: "Biconcave last element of the converter; with L31 it forms the weakly positive group III (+206 mm).",
    },
  ],

  surfaces: [
    { label: "1", R: 101.227, d: 2.3, sd: 13.3, medium: 1 },
    { label: "2", R: 28.186, d: 2.2, sd: 13.3 },
    { label: "3", R: 36.841, d: 7.93, sd: 12.3, medium: 2 },
    { label: "4", R: -41.841, d: 2.28, sd: 12.3 },
    { label: "5", R: -52.458, d: 4.63, sd: 10.4, medium: 3 },
    { label: "6", R: -19.373, d: 1.5, sd: 10.4, medium: 4 },
    { label: "7", R: 19.506, d: 6.34, sd: 10.4, medium: 5 },
    { label: "8", R: -385.882, d: 12.19, sd: 10.4 },
    { label: "9", R: 246.435, d: 6, sd: 13.2, medium: 6 },
    { label: "10", R: -25.785, d: 0.15, sd: 13.2 },
    { label: "11", R: -88.802, d: 1.5, sd: 13.1, medium: 7 },
    { label: "12", R: 91.126, d: 54.250153768236906, sd: 13.1 },
  ],

  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "4" },
    { text: "II (−)", fromSurface: "5", toSurface: "8" },
    { text: "III (+)", fromSurface: "9", toSurface: "12" },
  ],
  doublets: [{ text: "T1", fromSurface: "5", toSurface: "8" }],
} satisfies TeleconverterDataV2Input;

export default TELECONVERTER_DATA;
