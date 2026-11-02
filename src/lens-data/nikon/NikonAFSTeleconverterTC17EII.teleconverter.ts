import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";

/**
 * Nikon AF-S Teleconverter TC-17E II: JP2005107261A, Example 5, Table 6.
 * Patent-to-product correlation inferred from the 7/4 construction, element order and 1.70x
 * multiplier; Nikon has not confirmed this prescription.
 * Detachable converter: seven elements, four air-separated groups; no stop.
 * MASTER REFERENCE: Table 1 paraxial BFD 78.9885819979 mm minus (36.9886 - 6.90)
 * gives 48.8999819979 mm; the file rounds it to 48.900 mm.
 * Last gap stays the printed 41.4775 mm. The patent's M reference plane is not Nikon's
 * flange datum.
 * Printed condition beta=1.699 and ratio=0.606 disagree with the literal prescription
 * (1.7029 and 0.6120); neither source values nor the nominal 1.7 multiplier have been
 * tuned to remove this.
 * SEMI-DIAMETERS: estimated from Figure 10 (about 15.6 px/mm), floor-checked by real-ray
 * trace; the f/2 axial cone of the patent's reference objective clears surface 1 by 1.3 mm.
 * Figure 10 draws L32 as a square-cut blank whose front curve ends near 14.9 mm inside a
 * flat shelf; both faces carry the 16.4 mm blank height so the diagram draws it square.
 * Surface 10 clips no in-format ray on the mounting host or the patent's reference
 * objective. Values are model estimates, not measured effective diameters.
 * GLASS: the patent gives nd/vd only; each label names the catalog glass at those
 * coordinates, production supplier unspecified. No measured C/F/g indices are added.
 * FIT: dedicated Nikon F; minHostFNumber 2 is the patent's f/2 reference objective. Mounts
 * on the AF-I Nikkor 300mm f/2.8 D IF-ED; incompatibleLensKeys holds the other accepting
 * hosts back pending review. No independent diaphragm measurement, finite-focus law or
 * rear plates.
 */
const TELECONVERTER_DATA = {
  schema: 2,
  key: "nikon-af-s-teleconverter-tc-17e-ii",
  maker: "Nikon",
  name: "NIKON AF-S TELECONVERTER TC-17E II",
  subtitle: "JP 2005-107261 A — Example 5",

  catalog: {
    lensMounts: ["nikon-f"],
    specs: ["7 ELEMENTS / 4 GROUPS", "1.7× REAR CONVERTER", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 4,
  },

  source: {
    patentNumber: "JP 2005-107261 A",
    example: { label: "Example 5", id: "5" },
    patentYear: 2005,
    authors: ["Naoko Fukuda", "Akiko Furuta"],
    assignees: ["Nikon Corporation"],
  },

  magnification: 1.7,
  masterImageDistanceMm: 48.9,
  minHostFNumber: 2,

  // Conservative release qualification policy, not a physical incompatibility claim.
  // Only the documented representative host has full design-plane MTF evidence.
  incompatibleLensKeys: [
    "nikkor-afs-120-300f28e",
    "nikkor-afs-200-500f56e",
    "nikon-af-i-nikkor-400mm-f28d-if-ed",
    "nikon-af-i-nikkor-600mm-f4d-if-ed",
    "nikon-af-s-70-200mm-f28g-vr-ii",
    "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr",
    "nikon-af-s-nikkor-180-400mm-f4e-tc14-fl-ed-vr-tc-in",
    "nikon-af-s-nikkor-300mm-f4e-pf-ed-vr",
    "nikon-af-s-nikkor-400mm-f28e-fl-ed-vr",
    "nikon-af-s-nikkor-500mm-f4e-fl-ed-vr",
    "nikon-af-s-nikkor-500mm-f4g-ed-vr",
    "nikon-af-s-nikkor-500mm-f56e-pf-ed-vr",
    "nikon-af-s-nikkor-600mm-f4d-if-ed-ii",
    "nikon-af-s-nikkor-600mm-f4e-fl-ed-vr",
    "nikon-af-s-nikkor-70-200mm-f4g-ed-vr",
    "nikon-af-s-nikkor-800f56e-fl-ed-vr",
    "nikon-afs-105f28-vr-micro",
    "nikon-afs-70-200-f28e-fl",
    "nikon-afs-80-400-f45-56g",
    "nikon-afs-vr-200400f4g-if-ed",
    "nikon-afs-vr-zoom-nikkor-70-200-f28g-if-ed",
    "nikon-afs-zoom-nikkor-80-200mm-f28d-if-ed",
    "nikon-ai-af-s-nikkor-300mm-f28d-if-ed",
    "nikon-ai-af-s-nikkor-500mm-f4d-if-ed"
],

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.53172,
      vd: 48.87,
      indexReference: "d",
      focalLengthMm: 59.7358181566,
      glass: "S-TIL6 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus at the front of the converter's cemented G1 doublet; the patent's condition (1) on its bending keeps clearance to the host's last element and back focus while holding spherical aberration with fast lenses",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.63,
      indexReference: "d",
      focalLengthMm: -102.3582348548,
      glass: "S-LAH59 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Higher-index negative meniscus cemented behind L11; leaves the converter's G1 doublet weakly positive",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Biconcave",
      nd: 1.804,
      vd: 46.58,
      indexReference: "d",
      focalLengthMm: -20.867888956,
      glass: "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconcave front negative of the converter's cemented G2 triplet, its strongest diverging group",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconvex",
      nd: 1.68893,
      vd: 31.07,
      indexReference: "d",
      focalLengthMm: 22.2566779055,
      glass: "S-TIM28 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex positive core of the G2 triplet, between two high-index negatives; the patent credits this one-positive, two-negative triplet with correcting axial and lateral colour, field curvature and coma",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Biconcave",
      nd: 1.883,
      vd: 40.77,
      indexReference: "d",
      focalLengthMm: -36.5961151194,
      glass: "S-LAH58 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconcave rear negative of the G2 triplet; completes the converter's negative group",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconvex",
      nd: 1.48749,
      vd: 70.24,
      indexReference: "d",
      focalLengthMm: 39.0984724733,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex positive front singlet of the converter's air-spaced rear group G3; the lowest-index, lowest-dispersion glass in the converter",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.77,
      indexReference: "d",
      focalLengthMm: -48.0999276752,
      glass: "S-LAH58 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus, convex to the image, closing the converter's weakly positive rear group G3",
    },
  ],

  surfaces: [
    { label: "1", R: -236.1536, d: 5.1, sd: 14.0, medium: 1 },
    { label: "2", R: -28.207, d: 1.5, sd: 14.0, medium: 2 },
    { label: "3", R: -43.6078, d: 8.0, sd: 14.2 },
    { label: "4", R: -80.0327, d: 2.2, sd: 13.7, medium: 3 },
    { label: "5", R: 21.488, d: 9.2, sd: 13.7, medium: 4 },
    { label: "6", R: -44.184, d: 1.5, sd: 13.7, medium: 5 },
    { label: "7", R: 122.2033, d: 1.4, sd: 14.1 },
    { label: "8", R: 45.6439, d: 8.3, sd: 15.1, medium: 6 },
    { label: "9", R: -30.7756, d: 0.4, sd: 15.1 },
    { label: "10", R: -36.4985, d: 1.5, sd: 16.4, medium: 7 },
    { label: "11", R: -264.4991, d: 41.4775, sd: 16.4 },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "7" },
    { text: "G3", fromSurface: "8", toSurface: "11" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "T1", fromSurface: "4", toSurface: "7" },
  ],
} satisfies TeleconverterDataV2Input;

export default TELECONVERTER_DATA;
