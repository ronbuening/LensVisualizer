import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["cy-1", "cy-2"];
const PROFILE = "contax-yashica/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 48,
  cameraOuterDiameterMm: 58,
  lensOuterDiameterMm: 56,
  lugCentersDeg: [30, 150, 270],
  lugSpanDeg: 38,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Contax/Yashica SLR bayonet sectors, photo-scaled",
});

const CONTAX_YASHICA_MOUNT = makeSimpleMountSpec({
  mountId: "contax-yashica",
  displayLabel: "Contax / Yashica",
  projectNote: "Contax/Yashica manual-focus SLR bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["aperture_coupling"],
  referenceGrade: ["exact_lug_geometry", "AE_MM_variant_details"],
  appliesTo: "Contax/Yashica manual-focus SLR lenses and bodies",
  adds: ["three-lug bayonet", "aperture coupling"],
  removes: ["rangefinder focusing coupling"],
  changes: ["AE/MM generation details are collapsed for MVP rendering"],
  flangeFocalDistanceMm: v(45.5, "secondary", REF),
  nominalThroatDiameterMm: v(48, "secondary", REF),
  effectiveClearApertureMm: v(48, "secondary", REF),
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
    flangeFocalDistanceMm: 45.5,
    mountOuterDiameterMm: 58,
    lugEngagementDiameterMm: 53,
    sensorFilmDiameterMm: 43.3,
  }),
  mechanicalCouplings: [
    {
      featureId: "aperture-coupling",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(320, "photo_scaled", REF),
      radiusMm: v(25, "photo_scaled", REF),
      sizeOrTravel: "lever",
      function: "aperture control/reporting",
      compatibilityNotes: "AE/MM differences are not separated in this MVP profile",
    },
  ],
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 54, 2, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "cy-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "45.5 mm Contax/Yashica register",
      confidence: "medium",
    },
    {
      ref: "cy-2",
      sourceType: "secondary",
      citation: "Contax/Yashica mount visual references. Accessed 2026-06-06.",
      liveUrl: "JAPB / camera-wiki Contax-Yashica mount references",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "bayonet and aperture coupling placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "C/Y lug geometry and AE/MM coupling details are photo-scaled.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Upgrade with measured C/Y bodies and lenses or service drawings.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default CONTAX_YASHICA_MOUNT;
