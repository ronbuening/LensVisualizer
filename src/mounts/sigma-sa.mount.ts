import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["ssa-1", "ssa-2"];
const PROFILE = "sigma-sa/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 44,
  cameraOuterDiameterMm: 54,
  lensOuterDiameterMm: 52,
  lugCentersDeg: [30, 150, 270],
  lugSpanDeg: 38,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Sigma SA bayonet sectors, photo-scaled from body/lens rear views",
});

const SIGMA_SA_MOUNT = makeSimpleMountSpec({
  mountId: "sigma-sa",
  displayLabel: "Sigma SA",
  projectNote: "Sigma SA autofocus SLR/DSLR bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark", "electrical_contacts"],
  variantRequired: ["aperture_actuation"],
  referenceGrade: ["exact_lug_geometry", "contact_pinout"],
  appliesTo: "Sigma SA autofocus lenses and bodies",
  adds: ["three-lug bayonet", "electrical contact bank", "aperture actuation lever"],
  removes: [],
  changes: ["geometry is represented at MVP level pending a dimensioned Sigma drawing"],
  flangeFocalDistanceMm: v(44, "secondary", REF),
  nominalThroatDiameterMm: v(44, "secondary", REF),
  effectiveClearApertureMm: v(44, "secondary", REF),
  cameraMountOuterDiameterMm: v(54, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(52, "photo_scaled", REF),
  contactCount: v(8, "photo_scaled", REF),
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
    flangeFocalDistanceMm: 44,
    mountOuterDiameterMm: 54,
    lugEngagementDiameterMm: 49,
    sensorFilmDiameterMm: 43.3,
    includeElectricalPlane: true,
  }),
  contacts: makeContactBank({ profileId: PROFILE, refs: REF, count: 8, startAngleDeg: 230, stepDeg: 7, radiusMm: 23 }),
  mechanicalCouplings: [
    {
      featureId: "aperture-actuation-lever",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(55, "photo_scaled", REF),
      radiusMm: v(23, "photo_scaled", REF),
      sizeOrTravel: "lever",
      function: "body-driven aperture stop-down actuation",
      compatibilityNotes: "position is photo-scaled",
    },
  ],
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 50, 2, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "ssa-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "44 mm Sigma SA register",
      confidence: "medium",
    },
    {
      ref: "ssa-2",
      sourceType: "secondary",
      citation: "Sigma SA mount visual references and mount charts. Accessed 2026-06-06.",
      liveUrl: "JAPB / manufacturer imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "SA bayonet, throat estimate, contact count, and mechanical feature placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "SA lug geometry, exact throat, contact pitch, and aperture lever position need a measured sample.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts", "mechanicalCouplings"],
      candidateValues: [],
      resolution: "Upgrade with Sigma service documentation or calibrated body/lens measurements.",
    },
  ],
  includeElectricalLayers: true,
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default SIGMA_SA_MOUNT;
