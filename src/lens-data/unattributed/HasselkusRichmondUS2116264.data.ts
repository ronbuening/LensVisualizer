import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,116,264 A, sole numerical example (table on printed p. 1, right column; one drawing sheet). Inventors John
 * William Hasselkus and George Arthur Richmond, Clapham, London; no assignee is printed. Filed 8 June 1937 (British
 * priority 9 June 1936), patented 3 May 1938. The patent states a focal length of 194.5 mm, a relative aperture of
 * about F/5.6 and a field of approximately 100°. Five air-spaced menisci, all concave toward a central diaphragm:
 * positive I and negative II in front of it, negative III and positive IV and V behind it.
 *
 * SCALE: none. Radii, thicknesses and separations are the printed millimetre values. The printed table computes to
 * a paraxial focal length of 194.93 mm, 0.22 % above the stated 194.5 mm; nothing is adjusted to close that gap.
 *
 * SIGNS: the table prints radius magnitudes only. The signs follow the drawing and the text, which say every lens
 * turns its concave side to the diaphragm.
 *
 * GLASS: the patent prints Nd, Ng and ν for two glasses: 1.6202 / 1.6329 / 60.4 for lenses I, IV and V, and
 * 1.7174 / 1.7492 / 29.5 for lenses II and III. The model traces the printed Nd and ν; the patent names no glass.
 *
 * STOP (inferred): the drawing shows the diaphragm A in the 40.56 mm central air space s2 but the table gives it no
 * position. It is placed at the middle, 20.28 mm from each neighbouring surface, where the drawing shows it.
 *
 * SEMI-DIAMETERS (inferred): the patent prints no diameters. The rims are the heights the chief ray needs to pass
 * at a half-field of about 47.7°, rounded up to 0.1 mm. That is the widest field the front surface allows inside
 * the validator's rim-slope limit (32.5 mm on R1 = 36.15 mm); the full 50° would need about 33.4 mm there and
 * 35.8 mm on the last surface. Surfaces 4 and 5 keep the delivered 20 mm, which is a little more than the chief
 * ray needs. All values are at or below the rims scaled from the drawing (about 34 mm for lens I, 23.6 mm for
 * lenses II and III, 35 mm for lenses IV and V). The model therefore passes a chief ray over about 95° of the
 * patent's roughly 100° field; off-axis bundles are vignetted before that.
 *
 * IMAGE PLANE (computed): the patent prints no back focus. The final spacing is the paraxial back focus of the
 * printed prescription, 152.9768 mm.
 *
 * FOCUS: only the infinity state is printed, so no focus movement is modeled; closeFocusM = 1e15 marks focus as not
 * modeled and is not a minimum focus distance.
 */
const LENS_DATA = {
  schema: 2,
  key: "hasselkus-richmond-195mm-f56-us2116264",
  maker: null,
  name: "HASSELKUS & RICHMOND 195mm f/5.6 (US 2,116,264 Design)",
  subtitle: "1938 f/5.6; PATENT ONLY",
  visible: true,
  catalog: {
    specs: ["5 ELEMENTS / 5 GROUPS", "PATENT ONLY; RETAIL IDENTITY UNPROVED", "ESTIMATED STOP AND RIMS", "INFINITY ONLY"],
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      design: 194.93,
    },
    fNumber: {
      design: 5.6,
    },
  },
  source: {
    patentNumber: "US 2,116,264 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1938,
    authors: ["John William Hasselkus", "George Arthur Richmond"],
    assignees: [],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive Meniscus",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "d",
      indexReferenceNote: "The patent prints Nd 1.6202, Ng 1.6329 and ν 60.4 for lenses I, IV and V.",
      focalLengthMm: 134.39,
      role: "Thick front positive crown meniscus, concave to the stop",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Negative Meniscus",
      nd: 1.7174,
      vd: 29.5,
      indexReference: "d",
      indexReferenceNote: "The patent prints Nd 1.7174, Ng 1.7492 and ν 29.5 for lenses II and III.",
      focalLengthMm: -193.93,
      role: "Thin negative flint shell in front of the stop",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Negative Meniscus",
      nd: 1.7174,
      vd: 29.5,
      indexReference: "d",
      indexReferenceNote: "The patent prints Nd 1.7174, Ng 1.7492 and ν 29.5 for lenses II and III.",
      focalLengthMm: -193.93,
      role: "Thin negative flint shell behind the stop, mirror image of L2",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Positive Meniscus",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "d",
      indexReferenceNote: "The patent prints Nd 1.6202, Ng 1.6329 and ν 60.4 for lenses I, IV and V.",
      focalLengthMm: 282.87,
      role: "First rear positive crown meniscus",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Positive Meniscus",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "d",
      indexReferenceNote: "The patent prints Nd 1.6202, Ng 1.6329 and ν 60.4 for lenses I, IV and V.",
      focalLengthMm: 230.59,
      role: "Added deep rear positive crown meniscus",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 36.15,
      d: 14.33,
      sd: 32.5,
      medium: 1,
    },
    {
      label: "2",
      R: 54.15,
      d: 0.06,
      sd: 29.1,
    },
    {
      label: "3",
      R: 29.45,
      d: 1.61,
      sd: 22.8,
      medium: 2,
    },
    {
      label: "4",
      R: 23.75,
      d: 20.28,
      sd: 20,
    },
    {
      label: "STO",
      R: "flat",
      d: 20.28,
    },
    {
      label: "5",
      R: -23.75,
      d: 1.61,
      sd: 20,
      medium: 3,
    },
    {
      label: "6",
      R: -29.45,
      d: 0.06,
      sd: 22.8,
    },
    {
      label: "7",
      R: -55.65,
      d: 6.2,
      sd: 29.4,
      medium: 4,
    },
    {
      label: "8",
      R: -44.05,
      d: 0.06,
      sd: 31.4,
    },
    {
      label: "9",
      R: -47.9,
      d: 10.7,
      sd: 32.4,
      medium: 5,
    },
    {
      label: "10",
      R: -38.95,
      d: 152.9768,
      sd: 34.8,
    },
  ],
  aperture: {
    nominalFNumber: 5.6,
    maxFNumber: 22, fStops: [5.6, 8, 11, 16, 22],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity only. Printed radii, thicknesses, air gaps and Nd/ν are kept as they stand; the back focus is the computed paraxial value; the central iris position and the rim diameters are estimated. The chief ray clears to about 95° of the patent's roughly 100° field. No production lens is identified.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
