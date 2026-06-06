import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const REF = ["hh-1", "hh-2"];
const PROFILE = "hasselblad-h/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 67.5,
  cameraOuterDiameterMm: 80,
  lensOuterDiameterMm: 78,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 34,
  lockCenterAngleDeg: 285,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "H-system bayonet sectors, photo-scaled",
});

const HASSELBLAD_H_MOUNT = makeSimpleMountSpec({
  mountId: "hasselblad-h",
  displayLabel: "Hasselblad H",
  projectNote: "Hasselblad H-system medium-format autofocus bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark", "electrical_contacts"],
  variantRequired: ["leaf_shutter_electrical_control"],
  referenceGrade: ["exact_lug_geometry", "contact_pinout"],
  appliesTo: "Hasselblad H-system lenses and bodies",
  adds: ["large medium-format bayonet", "electrical contact bank", "leaf-shutter communication"],
  removes: [],
  changes: ["renderable profile uses chart dimensions and photo-scaled feature placement"],
  flangeFocalDistanceMm: v(61.63, "secondary", REF),
  nominalThroatDiameterMm: v(67.5, "secondary", REF),
  effectiveClearApertureMm: v(67.5, "secondary", REF),
  cameraMountOuterDiameterMm: v(80, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(78, "photo_scaled", REF),
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
    flangeFocalDistanceMm: 61.63,
    mountOuterDiameterMm: 80,
    lugEngagementDiameterMm: 74,
    sensorFilmDiameterMm: 69.7,
    includeElectricalPlane: true,
  }),
  contacts: makeContactBank({
    profileId: PROFILE,
    refs: REF,
    count: 10,
    startAngleDeg: 215,
    stepDeg: 6,
    radiusMm: 36,
  }),
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 74, 2.5, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "hh-1",
      sourceType: "secondary",
      citation: "Film and Digital Times / IB/E Optics mount chart. Accessed 2026-06-06.",
      liveUrl: "FDTimes chart: https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
      archiveUrl: "https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
      archiveDate: "2026-06-06",
      appliesTo: "Hasselblad H 61.63 mm register and approx. 67.5 mm inside-diameter chart entry",
      confidence: "medium",
    },
    {
      ref: "hh-2",
      sourceType: "secondary",
      citation: "Hasselblad H mount body/lens visual references. Accessed 2026-06-06.",
      liveUrl: "Hasselblad product/service imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo: "bayonet sector and contact placement",
      confidence: "low",
    },
  ],
  openQuestions: [
    {
      issue: "H-system lug spans and contact geometry are photo-scaled; exact official drawing is still needed.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "contacts"],
      candidateValues: [],
      resolution: "Upgrade from Hasselblad service data or a measured H body/lens pair.",
    },
  ],
  includeElectricalLayers: true,
}) satisfies MountSpecInput;

export default HASSELBLAD_H_MOUNT;
