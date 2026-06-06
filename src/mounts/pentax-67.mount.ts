import type { MountSpecInput } from "../types/mount.js";
import { dirV, naV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["p67-1", "p67-2"];
const PROFILE = "pentax-67/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 72,
  cameraOuterDiameterMm: 86,
  lensOuterDiameterMm: 84,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 34,
  lockCenterAngleDeg: 90,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Pentax 67 large-format bayonet sectors, photo-scaled",
});

const PENTAX_67_MOUNT = makeSimpleMountSpec({
  mountId: "pentax-67",
  displayLabel: "Pentax 67",
  projectNote: "Pentax 6x7 / 67 medium-format bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["aperture_coupling"],
  referenceGrade: ["exact_lug_geometry"],
  appliesTo: "Pentax 6x7 and Pentax 67 lenses and bodies",
  adds: ["large medium-format bayonet", "aperture coupling"],
  removes: [],
  changes: ["feature placement is photo-scaled"],
  flangeFocalDistanceMm: v(84.95, "secondary", REF),
  nominalThroatDiameterMm: v(72, "photo_scaled", REF),
  effectiveClearApertureMm: v(72, "photo_scaled", REF),
  cameraMountOuterDiameterMm: v(86, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(84, "photo_scaled", REF),
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
    flangeFocalDistanceMm: 84.95,
    mountOuterDiameterMm: 86,
    lugEngagementDiameterMm: 80,
    sensorFilmDiameterMm: 90.2,
  }),
  mechanicalCouplings: [
    {
      featureId: "aperture-actuation-lever",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(55, "photo_scaled", REF),
      radiusMm: v(34, "photo_scaled", REF),
      sizeOrTravel: "lever",
      function: "body-driven aperture stop-down actuation",
      compatibilityNotes: "representative for 6x7/67 system",
    },
  ],
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 82, 3, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "p67-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "Wikipedia: https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "Pentax 67 register",
      confidence: "medium",
    },
    {
      ref: "p67-2",
      sourceType: "secondary",
      citation: "Pentax 67 mount visual references. Accessed 2026-06-06.",
      liveUrl: "Pentax 6x7 / 67 body and lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "large bayonet and coupling placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "Pentax 67 throat, lug sectors, and aperture lever clocking are photo-scaled.",
      affectedFields: [
        "coreDimensions.nominalThroatDiameterMm",
        "cameraSideFeatures",
        "lensSideFeatures",
        "mechanicalCouplings",
      ],
      candidateValues: [],
      resolution: "Upgrade with measured Pentax 67 body/lens samples.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default PENTAX_67_MOUNT;
