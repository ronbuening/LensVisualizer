import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeSimpleMountSpec } from "./mountAuthoringShared.js";

const PROFILE = "fixed-lens-camera/base";

const FIXED_LENS_CAMERA_MOUNT = makeSimpleMountSpec({
  mountId: "fixed-lens-camera",
  displayLabel: "Fixed-lens Camera",
  projectNote: "Not an interchangeable mount; rendered as an integral lens/sensor schematic.",
  researchStatus: "partial",
  mvpStatus: "not_applicable",
  mechanism: "fixed_lens",
  lockType: "not_applicable",
  profileId: PROFILE,
  refs: [],
  mvpRequired: ["integral_lens_module", "sensor_film_plane"],
  conditionalCoreRequired: [],
  referenceGrade: ["per_camera_internal_module_geometry"],
  appliesTo: "Cameras whose lens is permanently integrated with the body",
  adds: ["integral lens module datum"],
  removes: ["interchangeable mount throat", "bayonet lugs", "thread", "contacts"],
  changes: ["dimensions are deliberately not a generic mount standard"],
  flangeFocalDistanceMm: v(0, "not_applicable"),
  nominalThroatDiameterMm: v(28, "not_applicable"),
  effectiveClearApertureMm: v(28, "not_applicable"),
  cameraMountOuterDiameterMm: v(44, "not_applicable"),
  lensMountOuterDiameterMm: v(44, "not_applicable"),
  contactCount: naV(),
  lockGeometry: {
    insertionAngleDeg: v(0, "not_applicable"),
    lockAngleDeg: v(0, "not_applicable"),
    lockRotationDeg: v(0, "not_applicable"),
    lockRotationDirection: dirV("not_applicable", "not_applicable"),
  },
  cameraSideFeatures: [
    {
      featureId: "integral-lens-module",
      featureType: "fixed_lens_module",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "not_applicable"),
      startAngleDeg: v(0, "not_applicable"),
      endAngleDeg: v(360, "not_applicable"),
      innerRadiusMm: v(0, "not_applicable"),
      outerRadiusMm: v(22, "not_applicable"),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "representative fixed lens module, not an interchangeable interface",
    },
  ],
  lensSideFeatures: [
    {
      featureId: "integral-lens-rear",
      featureType: "fixed_lens_rear_group",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "not_applicable"),
      startAngleDeg: v(0, "not_applicable"),
      endAngleDeg: v(360, "not_applicable"),
      innerRadiusMm: v(0, "not_applicable"),
      outerRadiusMm: v(20, "not_applicable"),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "fixed lens has no user-detachable rear mount",
    },
  ],
  axialStack: [
    {
      planeId: "lens_module_datum",
      zPositionMm: v(0, "not_applicable"),
      thicknessMm: v(4, "not_applicable"),
      diameterMm: v(44, "not_applicable"),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-8, "not_applicable"),
      thicknessMm: v(0, "not_applicable"),
      diameterMm: v(28, "not_applicable"),
    },
  ],
  sourceRefs: [],
  openQuestions: [
    {
      issue:
        "Fixed-lens cameras do not share a standardized interchangeable mount; the diagram is a not-applicable placeholder.",
      affectedFields: ["coreDimensions", "cameraSideFeatures", "lensSideFeatures", "axialStack"],
      candidateValues: [],
      resolution: "Create per-camera internal module drawings only when a fixed-lens camera has service-level data.",
    },
  ],
}) satisfies MountSpecInput;

export default FIXED_LENS_CAMERA_MOUNT;
