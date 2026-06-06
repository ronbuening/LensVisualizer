import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["xcd-1", "xcd-2"];
const PROFILE = "hasselblad-xcd/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 61,
  cameraOuterDiameterMm: 76,
  lensOuterDiameterMm: 74,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 34,
  lockCenterAngleDeg: 285,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Hasselblad XCD mirrorless bayonet sectors, photo-scaled",
});

const HASSELBLAD_XCD_MOUNT = makeSimpleMountSpec({
  mountId: "hasselblad-xcd",
  displayLabel: "Hasselblad XCD",
  projectNote: "Hasselblad XCD mirrorless medium-format bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark", "electrical_contacts"],
  referenceGrade: ["exact_lug_geometry", "contact_pinout"],
  appliesTo: "Hasselblad XCD lenses and X-system bodies",
  adds: ["short-register mirrorless medium-format bayonet", "electrical contact bank"],
  removes: ["SLR mirror box spacing"],
  changes: ["feature placement is photo-scaled pending official drawings"],
  flangeFocalDistanceMm: v(18.14, "secondary", REF),
  nominalThroatDiameterMm: v(61, "secondary", REF),
  effectiveClearApertureMm: v(61, "secondary", REF),
  cameraMountOuterDiameterMm: v(76, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(74, "photo_scaled", REF),
  contactCount: v(10, "photo_scaled", REF),
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
    flangeFocalDistanceMm: 18.14,
    mountOuterDiameterMm: 76,
    lugEngagementDiameterMm: 69,
    sensorFilmDiameterMm: 54.78,
    includeElectricalPlane: true,
  }),
  contacts: makeContactBank({ profileId: PROFILE, refs: REF, count: 10, startAngleDeg: 215, stepDeg: 6, radiusMm: 33 }),
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 70, 2.5, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "xcd-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "18.14 mm Hasselblad XCD register",
      confidence: "medium",
    },
    {
      ref: "xcd-2",
      sourceType: "secondary",
      citation: "Hasselblad XCD mount visual references. Accessed 2026-06-06.",
      liveUrl: "Hasselblad X-system body/lens imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "XCD bayonet and electrical contact placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "XCD contact count/position and lug spans are photo-scaled.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts"],
      candidateValues: [],
      resolution: "Upgrade from Hasselblad service data or measured XCD body/lens samples.",
    },
  ],
  includeElectricalLayers: true,
}) satisfies MountSpecInput;

export default HASSELBLAD_XCD_MOUNT;
