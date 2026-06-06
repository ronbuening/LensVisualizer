import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import { makeBayonetFeatures, makeSimpleMountSpec, makeStandardAxialStack } from "./mountAuthoringShared.js";

const REF = ["ns-1", "ns-2"];
const PROFILE = "nikon-s/base";

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
  lugShapeNotes: "Nikon S / Contax-derived internal/external rangefinder bayonet sectors",
});

const NIKON_S_MOUNT = makeSimpleMountSpec({
  mountId: "nikon-s",
  displayLabel: "Nikon S",
  projectNote: "Nikon S rangefinder bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "hybrid",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["rangefinder_coupling"],
  referenceGrade: ["inner_outer_bayonet_split", "contax_compatibility_offsets"],
  appliesTo: "Nikon S rangefinder lenses and bodies",
  adds: ["internal/external rangefinder bayonet", "rangefinder focusing coupling"],
  removes: ["SLR mirror clearance"],
  changes: ["inner/outer bayonet detail is simplified for MVP rendering"],
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
      compatibilityNotes: "Contax-derived mount with Nikon-specific rangefinder calibration details",
    },
  ],
  sourceRefs: [
    {
      ref: "ns-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Nikon S rangefinder register",
      confidence: "medium",
    },
    {
      ref: "ns-2",
      sourceType: "secondary",
      citation: "Nikon S rangefinder mount visual references. Accessed 2026-06-06.",
      liveUrl: "camera-wiki / Nikon S mount references",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "bayonet and focusing coupling placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "Nikon S inner/outer bayonet and Contax compatibility differences need a split, measured profile.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Upgrade with measured Nikon S and Contax rangefinder samples.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default NIKON_S_MOUNT;
