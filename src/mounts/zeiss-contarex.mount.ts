import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["zcx-1", "zcx-2"];
const PROFILE = "zeiss-contarex/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 46,
  cameraOuterDiameterMm: 58,
  lensOuterDiameterMm: 56,
  lugCentersDeg: [0, 120, 240],
  lugSpanDeg: 34,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Contarex bayonet sectors, photo-scaled",
});

const ZEISS_CONTAREX_MOUNT = makeSimpleMountSpec({
  mountId: "zeiss-contarex",
  displayLabel: "Zeiss Contarex",
  projectNote: "Zeiss Ikon Contarex SLR bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["aperture_coupling"],
  referenceGrade: ["exact_bayonet_geometry", "meter_coupling_geometry"],
  appliesTo: "Zeiss Ikon Contarex SLR lenses and bodies",
  adds: ["Contarex bayonet", "aperture/metering coupling"],
  removes: ["rangefinder mount coupling"],
  changes: ["feature placement is photo-scaled"],
  flangeFocalDistanceMm: v(46, "secondary", REF),
  nominalThroatDiameterMm: v(46, "secondary", REF),
  effectiveClearApertureMm: v(46, "secondary", REF),
  cameraMountOuterDiameterMm: v(58, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(56, "photo_scaled", REF),
  contactCount: naV(),
  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", REF),
    lockAngleDeg: v(60, "photo_scaled", REF),
    lockRotationDeg: v(60, "photo_scaled", REF),
    lockRotationDirection: dirV("clockwise", "photo_scaled", REF),
  },
  cameraSideFeatures,
  lensSideFeatures,
  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 46,
    mountOuterDiameterMm: 58,
    lugEngagementDiameterMm: 52,
    sensorFilmDiameterMm: 43.3,
  }),
  mechanicalCouplings: [
    {
      featureId: "aperture-metering-coupler",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(320, "photo_scaled", REF),
      radiusMm: v(25, "photo_scaled", REF),
      sizeOrTravel: "mechanical tab/cam",
      function: "communicates aperture/metering state",
      compatibilityNotes: "representative Contarex coupling placement",
    },
  ],
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 54, 2, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "zcx-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "46 mm Contarex register",
      confidence: "medium",
    },
    {
      ref: "zcx-2",
      sourceType: "secondary",
      citation: "Contarex mount visual references. Accessed 2026-06-06.",
      liveUrl: "Camera-wiki / Contarex body and lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "bayonet and coupling placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "Contarex bayonet and coupling geometry are photo-scaled.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Upgrade with Zeiss service drawings or measured examples.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default ZEISS_CONTAREX_MOUNT;
