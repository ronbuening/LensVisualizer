/**
 * Pentax 110 mount SVG specification.
 *
 * Sourced from the maker: the Auto 110 operating manual states that the lens turns "approximately 90
 * degrees", to the right to mount and to the left to remove, and that the lens's red distance index is
 * matched to a red dot on the body and ends "at the top" [p110-3]. That fixes the lock rotation, its
 * direction and the body index clocking. The 27 mm register and the two-tab count are secondary [p110-1],
 * [p110-2]. Two published throat diameters disagree (19.5 mm and 20.6 mm, [p110-4]), so the throat is
 * tagged `conflicting`. Lug centres, spans and radii, the ring diameters and the lock-pin position are
 * still photo-scaled stand-ins; no patent, service-manual drawing or measured sample was found for them.
 */

import type { CameraSideFeature, LensSideFeature, MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeSimpleMountSpec, makeStandardAxialStack } from "./mountAuthoringShared.js";

const REF = ["p110-1", "p110-2"];
const MANUAL = ["p110-3"]; // Auto 110 operating manual (maker text and camera-front photographs)
const THROAT = ["p110-4"]; // two conflicting published throat diameters
const PROFILE = "pentax-110/base";

/** Published throat row drawn in the figure; the other candidate (19.5 mm) is listed in openQuestions. */
const THROAT_DIAMETER_MM = 20.6;
/** Body red dot: the lens index ends at the top (0°) after a ~90° clockwise turn, so it starts at 270°. */
const INDEX_ANGLE_DEG = 270;

const bayonet = makeBayonetFeatures({
  profileId: PROFILE,
  refs: [...REF, ...MANUAL],
  throatDiameterMm: THROAT_DIAMETER_MM,
  cameraOuterDiameterMm: 34,
  lensOuterDiameterMm: 32,
  lugCentersDeg: [0, 180],
  lugSpanDeg: 42,
  lockCenterAngleDeg: 90,
  indexCenterAngleDeg: INDEX_ANGLE_DEG,
  scalarStatus: "conflicting",
  featureStatus: "photo_scaled",
  lugShapeNotes:
    "Pentax 110 miniature bayonet tab; two-tab count is sourced, centre, span and radial depth are photo-scaled stand-ins",
  lockShapeNotes:
    "lens release lever sits to the right of the mount seen from the camera front (manual p. 12 photograph); pin clock position and radius are photo-scaled",
  indexShapeNotes:
    "red dot on the body; manual p. 12 photograph (camera-front view) shows it at 9 o'clock, matching the stated ~90° turn that ends with the lens index at the top",
  bodyThroatNotes: `${THROAT_DIAMETER_MM} mm throat opening (published values conflict: 19.5 mm and 20.6 mm)`,
});

/**
 * The helper tags every throat-derived value with one status and one ref list. Point those values at the
 * conflicting throat source, and give the index marks the maker-manual clocking.
 */
function withSourcedOverrides<T extends CameraSideFeature | LensSideFeature>(feature: T): T {
  if (feature.featureType === "body_throat" || feature.featureType === "lens_throat") {
    return {
      ...feature,
      centerAngleDeg: { ...feature.centerAngleDeg, sourceRefs: THROAT },
      startAngleDeg: { ...feature.startAngleDeg, sourceRefs: THROAT },
      endAngleDeg: { ...feature.endAngleDeg, sourceRefs: THROAT },
      innerRadiusMm: { ...feature.innerRadiusMm, sourceRefs: THROAT },
      outerRadiusMm:
        feature.featureType === "body_throat"
          ? { ...feature.outerRadiusMm, sourceRefs: THROAT }
          : feature.outerRadiusMm,
    };
  }
  if (feature.featureType === "mount_ring") {
    return { ...feature, innerRadiusMm: { ...feature.innerRadiusMm, sourceRefs: THROAT } };
  }
  if (feature.featureType === "index_mark") {
    return {
      ...feature,
      centerAngleDeg: v(INDEX_ANGLE_DEG, "secondary", MANUAL),
      shapeNotes:
        feature.featureId === "lens-index-mark"
          ? "red distance-scale index of the lens, stored at the insertion position where it meets the body red dot; it sits at the top (0°) once locked"
          : feature.shapeNotes,
    };
  }
  return feature;
}

const cameraSideFeatures = bayonet.cameraSideFeatures.map(withSourcedOverrides);
const lensSideFeatures = bayonet.lensSideFeatures.map(withSourcedOverrides);

const PENTAX_110_MOUNT = makeSimpleMountSpec({
  mountId: "pentax-110",
  displayLabel: "Pentax 110",
  projectNote: "Pentax Auto 110 miniature bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: [...REF, ...MANUAL, ...THROAT],
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark", "in_body_aperture"],
  referenceGrade: ["exact_lug_geometry"],
  appliesTo: "Pentax Auto 110 and Auto 110 Super bodies and Pentax-110 lenses",
  adds: ["two-tab miniature bayonet interface", "in-body aperture/shutter system"],
  removes: ["lens aperture mechanism", "electrical contacts"],
  changes: [
    "lock rotation (about 90° clockwise) and index clocking follow the maker manual",
    "throat uses a published value that conflicts with a second published value",
    "lug sectors, ring diameters and lock-pin position are photo-scaled",
  ],
  flangeFocalDistanceMm: v(27, "secondary", REF),
  nominalThroatDiameterMm: v(THROAT_DIAMETER_MM, "conflicting", THROAT),
  effectiveClearApertureMm: v(THROAT_DIAMETER_MM, "conflicting", THROAT),
  cameraMountOuterDiameterMm: v(34, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(32, "photo_scaled", REF),
  contactCount: naV(),
  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", REF),
    lockAngleDeg: v(90, "official", MANUAL),
    lockRotationDeg: v(90, "official", MANUAL),
    lockRotationDirection: dirV("clockwise", "official", MANUAL),
  },
  cameraSideFeatures,
  lensSideFeatures,
  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 27,
    mountOuterDiameterMm: 34,
    lugEngagementDiameterMm: 30,
    sensorFilmDiameterMm: 21.4,
  }),
  sourceRefs: [
    {
      ref: "p110-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Pentax 110 27 mm register",
      confidence: "medium",
    },
    {
      ref: "p110-2",
      sourceType: "secondary",
      citation: "ISO3200.org, “Pentax 110 mount lenses.” Accessed 2026-06-06.",
      liveUrl: "https://iso3200.org/blog/references/pentax-110-mount-lenses/",
      archiveUrl:
        "http://web.archive.org/web/20260508081500/https://iso3200.org/blog/references/pentax-110-mount-lenses/",
      archiveDate: "2026-05-08",
      appliesTo: "two-tab bayonet description and 27 mm register cross-check",
      confidence: "medium",
    },
    {
      ref: "p110-3",
      sourceType: "official",
      citation:
        "Asahi Optical Co., Pentax Auto 110 operating manual, pp. 4 and 12 (scan in the M. Butkus camera manual library). Accessed 2026-11-21.",
      liveUrl: "https://www.butkus.org/chinon/pentax/pentax_auto_110/pentax_auto_110.htm",
      archiveUrl: "https://www.cameramanuals.org/pentax_pdf/pentax_auto_110.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "p. 12 text: lens turns approximately 90 degrees, to the right to mount and to the left to remove, with the red distance index matched to the body red dot and ending at the top; p. 12 photographs are camera-front views (no angle conversion) showing the red dot at 9 o'clock and the lens release lever to the right of the mount; p. 4 parts list names the 110-Bayonet Mount and the lens release button",
      confidence: "high",
    },
    {
      ref: "p110-4",
      sourceType: "secondary",
      citation: "“Lens mount,” Wikipedia, list of lens mounts, revision of 2026-11-13. Accessed 2026-11-21.",
      liveUrl: "https://en.wikipedia.org/wiki/Lens_mount",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Lens_mount&oldid=1385498741",
      archiveDate: "2026-11-21",
      appliesTo:
        "two Pentax Auto 110 rows with different throat diameters: 19.5 mm (uncited) and 20.6 mm (cited to a hobbyist adapter model); neither is a maker dimension",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue:
        "Throat diameter is unresolved. Wikipedia's lens-mount list carries two Auto 110 rows, 19.5 mm (uncited) and 20.6 mm (cited to a hobbyist adapter model); the earlier 25 mm value in this file was an unsourced photo-scale. The figure draws 20.6 mm with the conflicting stroke. No maker dimension, patent or service-manual value was found.",
      affectedFields: [
        "coreDimensions.nominalThroatDiameterMm",
        "coreDimensions.effectiveClearApertureMm",
        "cameraSideFeatures.body-throat",
        "cameraSideFeatures.body-mount-ring",
      ],
      candidateValues: [19.5, 20.6, 25],
      resolution:
        "Measure the body throat on an Auto 110, or find the dimension in the Asahi Auto 110 service manual or a dimensioned mount drawing.",
    },
    {
      issue:
        "Tab geometry is a stand-in. The two-tab count is sourced, but tab centres (0°/180°), the 42° span, the 1.8 mm depth and the tab radii are not: the radii are generated from the throat radius plus a fixed 2.5 mm, not measured. Ring outer diameters (34 mm body, 32 mm lens) are photo-scaled with no identified photograph.",
      affectedFields: [
        "cameraSideFeatures.body-slot-1",
        "cameraSideFeatures.body-slot-2",
        "lensSideFeatures.lens-lug-1",
        "lensSideFeatures.lens-lug-2",
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
      ],
      candidateValues: [],
      resolution:
        "Measure an Auto 110 body and a Pentax-110 lens rear, or scale a straight-on dimensioned photograph of each.",
    },
    {
      issue:
        "Lock-pin clock position (90°) and radius are photo-scaled. The manual only shows the release lever to the right of the mount seen from the front; it does not show where the pin meets the lens.",
      affectedFields: ["cameraSideFeatures.body-lock-pin", "lensSideFeatures.lens-lock-notch"],
      candidateValues: [],
      resolution: "Read the pin position from a service-manual exploded view or a measured lens-rear notch.",
    },
    {
      issue:
        "Searched without result: Asahi Kogaku US/JP patents for the Auto 110 lens mount (web searches 1977 to 1980; US4032938A and US3956759A are earlier cassette-SLR optics/layout patents with no mount; US4251134A is Canon), and the Asahi Auto 110 service manual, which is listed online (manualzz, elektrotanya) but could not be read through plain page fetches.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [],
      resolution:
        "A readable service-manual copy, or the figures of DE2838823 (Asahi, Japanese priority 1977, a camera with a bayonet lens and a shutter-release interlock): a Google Patents assignee search on 2026-11-21 (Asahi, bayonet mount, 1960 to 1985, 36 results) found it, but its text names no camera model, Google Patents carries no figures for it, and J-PlatPat document display was under maintenance and Espacenet behind a bot check that day.",
    },
  ],
}) satisfies MountSpecInput;

export default PENTAX_110_MOUNT;
