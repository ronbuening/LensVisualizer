import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeSimpleMountSpec, makeStandardAxialStack } from "./mountAuthoringShared.js";

const REF = ["p110-1", "p110-2"];
const PROFILE = "pentax-110/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 25,
  cameraOuterDiameterMm: 34,
  lensOuterDiameterMm: 32,
  lugCentersDeg: [0, 180],
  lugSpanDeg: 42,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Pentax 110 miniature bayonet sectors, photo-scaled",
});

const PENTAX_110_MOUNT = makeSimpleMountSpec({
  mountId: "pentax-110",
  displayLabel: "Pentax 110",
  projectNote: "Pentax Auto 110 miniature bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark", "in_body_aperture"],
  referenceGrade: ["exact_lug_geometry"],
  appliesTo: "Pentax Auto 110 lenses and bodies",
  adds: ["two-tab miniature bayonet interface", "in-body aperture/shutter system"],
  removes: ["lens aperture mechanism", "electrical contacts"],
  changes: ["rendered geometry is photo-scaled"],
  flangeFocalDistanceMm: v(27, "secondary", REF),
  nominalThroatDiameterMm: v(25, "photo_scaled", REF),
  effectiveClearApertureMm: v(25, "photo_scaled", REF),
  cameraMountOuterDiameterMm: v(34, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(32, "photo_scaled", REF),
  contactCount: naV(),
  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", REF),
    lockAngleDeg: v(45, "photo_scaled", REF),
    lockRotationDeg: v(45, "photo_scaled", REF),
    lockRotationDirection: dirV("clockwise", "photo_scaled", REF),
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
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Pentax 110 27 mm register",
      confidence: "medium",
    },
    {
      ref: "p110-2",
      sourceType: "secondary",
      citation: "ISO3200.org, “Pentax 110 mount lenses.” Accessed 2026-06-06.",
      liveUrl: "ISO3200: https://iso3200.org/blog/references/pentax-110-mount-lenses/",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "two-tab bayonet description and 27 mm register cross-check",
      confidence: "medium",
    },
  ],
  openQuestions: [
    {
      issue: "Pentax 110 lug spans and throat diameter are photo-scaled; two-tab count and 27 mm register are sourced.",
      affectedFields: ["coreDimensions.nominalThroatDiameterMm", "cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [],
      resolution: "Upgrade with measured Auto 110 body/lens samples.",
    },
  ],
}) satisfies MountSpecInput;

export default PENTAX_110_MOUNT;
