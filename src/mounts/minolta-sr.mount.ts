import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["msr-1", "msr-2"];
const PROFILE = "minolta-sr/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 45,
  cameraOuterDiameterMm: 55,
  lensOuterDiameterMm: 53,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 40,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Minolta SR/MC/MD bayonet sectors, photo-scaled",
});

const MINOLTA_SR_MOUNT = makeSimpleMountSpec({
  mountId: "minolta-sr",
  displayLabel: "Minolta SR",
  projectNote: "Minolta SR manual-focus SLR bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["aperture_metering_couplings"],
  referenceGrade: ["SR_MC_MD_variant_coupling_positions"],
  appliesTo: "Minolta SR, MC, and MD manual-focus lenses and bodies",
  adds: ["three-lug bayonet", "aperture and meter coupling levers"],
  removes: ["electrical contacts"],
  changes: ["SR/MC/MD couplings are collapsed for MVP rendering"],
  flangeFocalDistanceMm: v(43.5, "secondary", REF),
  nominalThroatDiameterMm: v(45, "secondary", REF),
  effectiveClearApertureMm: v(45, "secondary", REF),
  cameraMountOuterDiameterMm: v(55, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(53, "photo_scaled", REF),
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
    flangeFocalDistanceMm: 43.5,
    mountOuterDiameterMm: 55,
    lugEngagementDiameterMm: 50,
    sensorFilmDiameterMm: 43.3,
  }),
  mechanicalCouplings: [
    {
      featureId: "aperture-actuation-lever",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(55, "photo_scaled", REF),
      radiusMm: v(23, "photo_scaled", REF),
      sizeOrTravel: "lever",
      function: "stops down aperture at exposure",
      compatibilityNotes: "position is representative across SR/MC/MD generations",
    },
    {
      featureId: "meter-coupling-tab",
      side: "lens",
      profileId: PROFILE,
      centerAngleDeg: v(325, "photo_scaled", REF),
      radiusMm: v(25, "photo_scaled", REF),
      sizeOrTravel: "tab",
      function: "reports aperture setting to body",
      compatibilityNotes: "varies by MC/MD generation",
    },
  ],
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 51, 2, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "msr-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "43.5 mm Minolta SR register",
      confidence: "medium",
    },
    {
      ref: "msr-2",
      sourceType: "secondary",
      citation: "Minolta SR/MC/MD mount visual references. Accessed 2026-06-06.",
      liveUrl: "Minolta SR camera/lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "bayonet and mechanical coupling placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "Exact SR/MC/MD lever clocking and lug dimensions are photo-scaled.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Split generation variants after measured Minolta examples are available.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default MINOLTA_SR_MOUNT;
