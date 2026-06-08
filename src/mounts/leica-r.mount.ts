import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["lr-1", "lr-2"];
const PROFILE = "leica-r/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 49,
  cameraOuterDiameterMm: 58,
  lensOuterDiameterMm: 56,
  lugCentersDeg: [35, 155, 275],
  lugSpanDeg: 36,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Leica R three-lug bayonet, photo-scaled",
});

const LEICA_R_MOUNT = makeSimpleMountSpec({
  mountId: "leica-r",
  displayLabel: "Leica R",
  projectNote: "Leica R SLR bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["cam_metering_couplings"],
  referenceGrade: ["1cam_2cam_3cam_rom_variant_geometry"],
  appliesTo: "Leica R SLR lenses and bodies",
  adds: ["three-lug bayonet", "mechanical aperture/metering cam interface"],
  removes: ["rangefinder coupling", "threaded LTM interface"],
  changes: ["variant cam and ROM details are not split into profile overlays yet"],
  flangeFocalDistanceMm: v(47, "secondary", REF),
  nominalThroatDiameterMm: v(49, "secondary", REF),
  effectiveClearApertureMm: v(49, "secondary", REF),
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
    flangeFocalDistanceMm: 47,
    mountOuterDiameterMm: 58,
    lugEngagementDiameterMm: 54,
    sensorFilmDiameterMm: 43.3,
  }),
  mechanicalCouplings: [
    {
      featureId: "metering-cam",
      side: "lens",
      profileId: PROFILE,
      centerAngleDeg: v(315, "photo_scaled", REF),
      radiusMm: v(25, "photo_scaled", REF),
      sizeOrTravel: "cam surface",
      function: "aperture/metering communication on R lenses",
      compatibilityNotes: "1-cam, 2-cam, 3-cam, R-only, and ROM variants are collapsed for MVP rendering",
    },
  ],
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 54, 2, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "lr-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "47 mm Leica R register and 49 mm inside diameter",
      confidence: "medium",
    },
    {
      ref: "lr-2",
      sourceType: "secondary",
      citation: "Leica R mount visual references. Accessed 2026-06-06.",
      liveUrl: "Leica R camera/lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "bayonet and cam feature placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "Leica R cam variants and exact lug profile need measured drawings.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Split R cam/ROM generations after sourcing service documentation.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default LEICA_R_MOUNT;
