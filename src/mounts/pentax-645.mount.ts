import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["p645-1", "p645-2"];
const PROFILE = "pentax-645/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 61,
  cameraOuterDiameterMm: 72,
  lensOuterDiameterMm: 70,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 36,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Pentax 645 bayonet sectors, photo-scaled",
});

const PENTAX_645_MOUNT = makeSimpleMountSpec({
  mountId: "pentax-645",
  displayLabel: "Pentax 645",
  projectNote: "Pentax 645 medium-format bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["aperture_coupling", "electrical_contacts_on_later_variants"],
  referenceGrade: ["A_FA_DFA_variant_contacts"],
  appliesTo: "Pentax 645 and 645A/FA lenses and bodies",
  adds: ["medium-format bayonet", "aperture coupling", "later electronic communication variants"],
  removes: [],
  changes: ["electrical variants are noted but not split in MVP"],
  flangeFocalDistanceMm: v(70.87, "secondary", REF),
  nominalThroatDiameterMm: v(61, "secondary", REF),
  effectiveClearApertureMm: v(61, "secondary", REF),
  cameraMountOuterDiameterMm: v(72, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(70, "photo_scaled", REF),
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
    flangeFocalDistanceMm: 70.87,
    mountOuterDiameterMm: 72,
    lugEngagementDiameterMm: 66,
    sensorFilmDiameterMm: 69.7,
  }),
  mechanicalCouplings: [
    {
      featureId: "aperture-coupling",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(320, "photo_scaled", REF),
      radiusMm: v(31, "photo_scaled", REF),
      sizeOrTravel: "lever/cam",
      function: "aperture actuation and reporting",
      compatibilityNotes: "representative for 645 family",
    },
  ],
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 68, 2.5, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "p645-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Pentax 645 register",
      confidence: "medium",
    },
    {
      ref: "p645-2",
      sourceType: "secondary",
      citation: "Pentax 645 mount visual references. Accessed 2026-06-06.",
      liveUrl: "Pentax 645 body/lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "bayonet and coupling placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "Pentax 645 lug spans, exact throat, and generation-specific contacts are unresolved.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "contacts"],
      candidateValues: [],
      resolution: "Add A/FA/D FA profile overlays after measured samples or service data.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default PENTAX_645_MOUNT;
