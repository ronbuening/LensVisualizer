import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeSimpleMountSpec, makeStandardAxialStack, makeThreadedFeatures } from "./mountAuthoringShared.js";

const REF = ["m42-1", "m42-2"];
const PROFILE = "m42/base";

const { cameraSideFeatures, lensSideFeatures } = makeThreadedFeatures({
  profileId: PROFILE,
  refs: REF,
  threadDiameterMm: 42,
  pitchMm: 1,
  cameraOuterDiameterMm: 50,
  lensOuterDiameterMm: 48,
  threadShapeNotes: "M42 x 1 screw mount",
});

const M42_MOUNT = makeSimpleMountSpec({
  mountId: "m42",
  displayLabel: "M42",
  projectNote: "M42 x 1 screw mount.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "threaded",
  lockType: "friction_shoulder",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "thread_diameter_mm", "thread_pitch"],
  conditionalCoreRequired: ["male_thread", "female_thread", "seating_shoulder"],
  variantRequired: ["aperture_stop_down_pin"],
  referenceGrade: ["thread_start_clocking", "auto_aperture_variants"],
  appliesTo: "M42 x 1 SLR screw-mount lenses and bodies",
  adds: ["42 mm screw thread", "automatic aperture stop-down pin on common variants"],
  removes: ["bayonet lugs", "electrical contacts"],
  changes: [],
  flangeFocalDistanceMm: v(45.46, "secondary", REF),
  nominalThroatDiameterMm: v(42, "secondary", REF),
  effectiveClearApertureMm: v(42, "secondary", REF),
  cameraMountOuterDiameterMm: v(50, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(48, "photo_scaled", REF),
  contactCount: naV(),
  lockGeometry: {
    insertionAngleDeg: v(0, "not_applicable"),
    lockAngleDeg: v(0, "not_applicable"),
    lockRotationDeg: v(360, "secondary", REF),
    lockRotationDirection: dirV("clockwise", "secondary", REF),
  },
  cameraSideFeatures,
  lensSideFeatures,
  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 45.46,
    mountOuterDiameterMm: 50,
    lugEngagementDiameterMm: 42,
    sensorFilmDiameterMm: 43.3,
  }),
  mechanicalCouplings: [
    {
      featureId: "aperture-stop-down-pin",
      side: "lens",
      profileId: PROFILE,
      centerAngleDeg: v(180, "photo_scaled", REF),
      radiusMm: v(18, "photo_scaled", REF),
      sizeOrTravel: "spring-loaded pin",
      function: "stops the lens aperture down on automatic M42 lenses",
      compatibilityNotes: "not present or not used on every M42 lens variant",
    },
  ],
  sourceRefs: [
    {
      ref: "m42-1",
      sourceType: "secondary",
      citation: "“M42 lens mount,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/M42_lens_mount",
      archiveUrl: "http://web.archive.org/web/20260513021006/https://en.wikipedia.org/wiki/M42_lens_mount",
      archiveDate: "2026-05-13",
      appliesTo: "M42 x 1 thread and 45.46 mm register",
      confidence: "medium",
    },
    {
      ref: "m42-2",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "M42 register cross-check",
      confidence: "medium",
    },
  ],
  openQuestions: [
    {
      issue: "Aperture pin clocking and thread-start position vary by body/lens implementation.",
      affectedFields: ["mechanicalCouplings", "cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [],
      resolution: "Add body-family variants if a specific M42 implementation needs exact clocking.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default M42_MOUNT;
