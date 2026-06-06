import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeSimpleMountSpec, makeStandardAxialStack } from "./mountAuthoringShared.js";

const REF = ["crf-1", "crf-2"];
const PROFILE = "contax-rf/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 44,
  cameraOuterDiameterMm: 52,
  lensOuterDiameterMm: 50,
  lugCentersDeg: [0, 120, 240],
  lugSpanDeg: 32,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Contax rangefinder internal/external bayonet represented as shared bayonet sectors",
});

const CONTAX_RF_MOUNT = makeSimpleMountSpec({
  mountId: "contax-rf",
  displayLabel: "Contax RF",
  projectNote: "Contax rangefinder bayonet with internal/external focusing interfaces.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "hybrid",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["rangefinder_coupling"],
  referenceGrade: ["inner_outer_bayonet_split", "helical_coupling_geometry"],
  appliesTo: "Zeiss Ikon Contax rangefinder lenses and bodies",
  adds: ["internal bayonet for normal lenses", "external bayonet for larger lenses", "rangefinder focusing coupling"],
  removes: ["SLR mirror clearance"],
  changes: ["internal/external bayonet details are collapsed into one renderable MVP profile"],
  flangeFocalDistanceMm: v(34.85, "secondary", REF),
  nominalThroatDiameterMm: v(44, "photo_scaled", REF),
  effectiveClearApertureMm: v(44, "photo_scaled", REF),
  cameraMountOuterDiameterMm: v(52, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(50, "photo_scaled", REF),
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
    flangeFocalDistanceMm: 34.85,
    mountOuterDiameterMm: 52,
    lugEngagementDiameterMm: 47,
    sensorFilmDiameterMm: 43.3,
  }),
  mechanicalCouplings: [
    {
      featureId: "rangefinder-focusing-coupler",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(180, "photo_scaled", REF),
      radiusMm: v(18, "photo_scaled", REF),
      sizeOrTravel: "helical/cam coupling",
      function: "couples lens focus to rangefinder mechanism",
      compatibilityNotes: "internal/external focusing interfaces are simplified",
    },
  ],
  sourceRefs: [
    {
      ref: "crf-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Contax rangefinder register",
      confidence: "medium",
    },
    {
      ref: "crf-2",
      sourceType: "secondary",
      citation: "Contax rangefinder mount visual references. Accessed 2026-06-06.",
      liveUrl: "camera-wiki / rangefinder mount references",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "internal/external bayonet and focusing coupling placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "Internal and external Contax RF bayonet dimensions need a dedicated split profile.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Add inner/outer bayonet variants from a service manual or measured Contax body.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default CONTAX_RF_MOUNT;
