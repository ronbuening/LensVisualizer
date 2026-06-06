import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeSimpleMountSpec, makeStandardAxialStack, makeThreadedFeatures } from "./mountAuthoringShared.js";

const REF = ["ltm-1", "ltm-2"];
const PROFILE = "leica-ltm/base";

const { cameraSideFeatures, lensSideFeatures } = makeThreadedFeatures({
  profileId: PROFILE,
  refs: REF,
  threadDiameterMm: 39,
  pitchMm: 26 / 25.4,
  cameraOuterDiameterMm: 46,
  lensOuterDiameterMm: 44,
  threadShapeNotes: "Leica thread mount / LTM 39 mm screw mount",
});

const LEICA_LTM_MOUNT = makeSimpleMountSpec({
  mountId: "leica-ltm",
  displayLabel: "Leica LTM / M39",
  projectNote: "Leica thread mount 39 mm screw interface.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "threaded",
  lockType: "friction_shoulder",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "thread_diameter_mm", "thread_pitch"],
  conditionalCoreRequired: ["male_thread", "female_thread", "seating_shoulder"],
  referenceGrade: ["thread_start_clocking"],
  appliesTo: "Leica screw-mount / M39 rangefinder lenses",
  adds: ["39 mm screw thread", "friction seating shoulder"],
  removes: ["bayonet lugs", "electrical contacts"],
  changes: [],
  flangeFocalDistanceMm: v(28.8, "secondary", REF),
  nominalThroatDiameterMm: v(39, "secondary", REF),
  effectiveClearApertureMm: v(39, "secondary", REF),
  cameraMountOuterDiameterMm: v(46, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(44, "photo_scaled", REF),
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
    flangeFocalDistanceMm: 28.8,
    mountOuterDiameterMm: 46,
    lugEngagementDiameterMm: 39,
    sensorFilmDiameterMm: 43.3,
  }),
  sourceRefs: [
    {
      ref: "ltm-1",
      sourceType: "secondary",
      citation: "“Leica M39 lens mount,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Leica_M39_lens_mount",
      archiveUrl: "http://web.archive.org/web/20260513020949/https://en.wikipedia.org/wiki/Leica_M39_lens_mount",
      archiveDate: "2026-05-13",
      appliesTo: "39 mm screw thread and 28.8 mm register",
      confidence: "medium",
    },
    {
      ref: "ltm-2",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "LTM register cross-check",
      confidence: "medium",
    },
  ],
  openQuestions: [
    {
      issue:
        "Thread start clocking is not meaningful across generic screw-mount bodies and is diagrammed representatively.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [],
      resolution: "Keep as representative unless adding a specific camera-body thread-start variant.",
    },
  ],
}) satisfies MountSpecInput;

export default LEICA_LTM_MOUNT;
