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
 * 1.7174 / 1.7492 / 29.5 for lenses II and III. The patent names no glass. The flint pair is the Schott SF1
 * catalogue row (1.71736 / 29.51) at the printed precision and carries that label; the crown pair matches no
 * catalogue row within 0.0001 (the nearest, SK16 at 1.62041 / 60.3, is 0.0002 away) and stays unmatched. The trace
 * keeps the printed Nd in both cases.
 *
 * STOP (inferred): the drawing shows the diaphragm A in the 40.56 mm central air space s2 but the table gives it no
 * position. It is placed at the middle, 20.28 mm from each neighbouring surface, where the drawing shows it.
 *
 * SEMI-DIAMETERS (inferred): the patent prints no diameters. The drawing is to scale (7.91 px per mm at 300 dpi:
 * the first-to-last vertex span and the central air space both agree with the table within 1 %, and the outer arcs
 * of R1 and R10 lie on the drawn outlines). It draws every lens with its convex face running out to the element's
 * edge and its concave face, the one toward the diaphragm, ending a little lower with a short stroke square to the
 * axis. Read from the drawing, the convex faces reach about 34.3 (I), 24.1 (II, III), 33.4 (IV) and 35.9 mm (V),
 * and the concave faces end at about 33.0, 20.8, 21.0, 32.0 and 33.75 mm (±0.15 mm). Each rim is the height a
 * chief ray reaches at the patent's 50° half-field (image height 231.8 mm), rounded up to 0.1 mm, except lens IV,
 * which is drawn larger than that and keeps its drawn rims. No rim exceeds the drawing:
 * - Lens I: R1 33.4 mm (50° chief ray 33.38). R2 32.5 mm with a flat land (rimExtensionSd) to 33.4 mm, as drawn.
 * - Lenses II and III: 23.7 mm on the convex faces and 20.6 mm on the concave ones (50° chief ray 23.63 and 20.50);
 *   the concave faces carry lands out to 23.7 mm.
 * - Lens IV: 32 mm on R7 with a land to 33.4 mm, and 33.4 mm on R8, read from the drawing (the 50° chief ray needs
 *   31.13 and 32.78).
 * - Lens V: 33.9 mm on R9 with a land to 35.8 mm, and 35.8 mm on R10 (50° chief ray 33.92 and 35.75); R9 sits at
 *   the upper end of its drawing reading.
 * The lands are drawn only and do not affect the trace. R1 and R10 run past the validator's default rim-slope limit
 * (64.2°), as the drawing shows them; checks.maxRimAngleDeg = 68 is the smallest whole degree that admits R1 at
 * 33.4 mm (67.5°). The chief ray passes every rim to a half-field of 50.0° (image height about 231.5 mm), the
 * patent's 100° field; R1 stops it just past that. Off-axis bundles are vignetted well before the edge.
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
  subtitle: "US 2,116,264 A, sole example — five-meniscus wide-angle design",
  visible: true,
  catalog: {
    specs: ["5 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN f = 194.5 mm", "DESIGN F/5.6", "100° FIELD"],
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
      label: "Element 1",
      type: "Positive Meniscus",
      glass: "Unmatched (Nd 1.6202 / V 60.4)",
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
      label: "Element 2",
      type: "Negative Meniscus",
      glass: "SF1 (Schott)",
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
      label: "Element 3",
      type: "Negative Meniscus",
      glass: "SF1 (Schott)",
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
      label: "Element 4",
      type: "Positive Meniscus",
      glass: "Unmatched (Nd 1.6202 / V 60.4)",
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
      label: "Element 5",
      type: "Positive Meniscus",
      glass: "Unmatched (Nd 1.6202 / V 60.4)",
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
      sd: 33.4,
      medium: 1,
    },
    {
      label: "2",
      R: 54.15,
      d: 0.06,
      sd: 32.5,
      rimExtensionSd: 33.4,
    },
    {
      label: "3",
      R: 29.45,
      d: 1.61,
      sd: 23.7,
      medium: 2,
    },
    {
      label: "4",
      R: 23.75,
      d: 20.28,
      sd: 20.6,
      rimExtensionSd: 23.7,
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
      sd: 20.6,
      rimExtensionSd: 23.7,
      medium: 3,
    },
    {
      label: "6",
      R: -29.45,
      d: 0.06,
      sd: 23.7,
    },
    {
      label: "7",
      R: -55.65,
      d: 6.2,
      sd: 32,
      rimExtensionSd: 33.4,
      medium: 4,
    },
    {
      label: "8",
      R: -44.05,
      d: 0.06,
      sd: 33.4,
    },
    {
      label: "9",
      R: -47.9,
      d: 10.7,
      sd: 33.9,
      rimExtensionSd: 35.8,
      medium: 5,
    },
    {
      label: "10",
      R: -38.95,
      d: 152.9768,
      sd: 35.8,
    },
  ],
  aperture: {
    nominalFNumber: 5.6,
    maxFNumber: 22,
    fStops: [5.6, 8, 11, 16, 22],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [],
  checks: {
    maxRimAngleDeg: 68,
  },
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
