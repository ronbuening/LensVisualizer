/**
 * Samsung NX mount SVG specification.
 *
 * Samsung's APS-C mirrorless bayonet uses a 25.5 mm register and a fully electronic interface.
 * The NX10 manual documents clockwise attachment and shows the mount index, three bayonet sectors,
 * eight contacts, and the lens-release arrangement. Production dimensions beyond the published
 * 42 mm mount opening are photo-scaled and kept explicit in the provenance/open-question fields.
 */

import type { MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeContactBank,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

const W = ["snx-1"];
const M = ["snx-2"];
const REF = [...W, ...M];
const PROFILE = "samsung-nx/base";

const { cameraSideFeatures, lensSideFeatures } = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 42,
  cameraOuterDiameterMm: 52,
  lensOuterDiameterMm: 50,
  lugCentersDeg: [30, 150, 292],
  lugSpanDeg: 40,
  lockCenterAngleDeg: 90,
  indexCenterAngleDeg: 240,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "Samsung NX three-sector bayonet, photo-scaled from NX10/NX100 manual illustrations",
  lockShapeNotes: "lock pin/notch beside the body-side lens-release control",
  indexShapeNotes: "red mounting index shown on the camera body",
});

const SAMSUNG_NX_MOUNT = makeSimpleMountSpec({
  mountId: "samsung-nx",
  displayLabel: "Samsung NX",
  projectNote: "Samsung NX APS-C mirrorless bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: REF,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["electrical_contacts"],
  referenceGrade: ["exact_lug_geometry", "contact_pitch", "mount_outer_diameter"],
  appliesTo: "Samsung NX lenses and APS-C NX bodies, 2010–2015",
  adds: [
    "three-sector short-register bayonet",
    "eight-contact fully electronic interface",
    "body-side sprung lock pin and red mounting index",
  ],
  removes: ["mechanical aperture and autofocus couplings"],
  changes: ["single base interface; NX Mini uses the separate, incompatible NX-M mount"],
  flangeFocalDistanceMm: v(25.5, "secondary", W),
  nominalThroatDiameterMm: v(42, "secondary", W),
  effectiveClearApertureMm: v(42, "secondary", W),
  cameraMountOuterDiameterMm: v(52, "photo_scaled", M),
  lensMountOuterDiameterMm: v(50, "photo_scaled", M),
  contactCount: v(8, "photo_scaled", M),
  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", M),
    lockAngleDeg: v(60, "photo_scaled", M),
    lockRotationDeg: v(60, "photo_scaled", M),
    lockRotationDirection: dirV("clockwise", "official", M),
  },
  cameraSideFeatures,
  lensSideFeatures,
  axialStack: makeStandardAxialStack({
    refs: REF,
    flangeFocalDistanceMm: 25.5,
    mountOuterDiameterMm: 52,
    lugEngagementDiameterMm: 47,
    sensorFilmDiameterMm: 28.35,
    includeElectricalPlane: true,
    electricalDiameterMm: 38,
  }),
  contacts: makeContactBank({
    profileId: PROFILE,
    refs: M,
    count: 8,
    startAngleDeg: 330,
    stepDeg: 8.5,
    radiusMm: 19,
  }),
  screwsGasketsBaffles: [makeMountScrews(M, 4, 47, 1.8, [35, 145, 215, 325])],
  sourceRefs: [
    {
      ref: "snx-1",
      sourceType: "secondary",
      citation: "“Samsung NX-mount,” Wikipedia. Accessed 2026-08-02.",
      liveUrl: "https://en.wikipedia.org/wiki/Samsung_NX-mount",
      archiveUrl: "http://web.archive.org/web/20260623060500/https://en.wikipedia.org/wiki/Samsung_NX-mount",
      archiveDate: "2026-06-23",
      appliesTo: "25.5 mm flange focal distance, 42 mm mount diameter, APS-C NX identity",
      confidence: "medium",
    },
    {
      ref: "snx-2",
      sourceType: "official",
      citation: "Samsung NX10 User Manual, version 1.3, pp. 17 and 21. Accessed 2026-08-02.",
      liveUrl: "https://www.samsung.com/ca/support/model/EV-NX10ZZBABCA/",
      archiveUrl: "https://nxfiles.nx.tc/files/NX10/Manual/NX10_English.pdf",
      archiveDate: "2026-08-02",
      appliesTo:
        "clockwise attachment, mount/index/release arrangement, and visual layout of the three bayonet sectors and eight electrical contacts",
      confidence: "medium",
    },
  ],
  openQuestions: [
    {
      issue:
        "NX mount outer diameters, lug spans/angles, lock rotation, contact pitch, and screw circle are photo-scaled; no production mechanical drawing was located.",
      affectedFields: [
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "cameraSideFeatures",
        "lensSideFeatures",
        "lockGeometry",
        "contacts",
        "screwsGasketsBaffles",
      ],
      candidateValues: [],
      resolution: "Upgrade from a Samsung service drawing or measured NX body/lens sample.",
    },
    {
      issue:
        "The commonly published 42 mm mount diameter is secondary-sourced and should be checked against metrology.",
      affectedFields: ["coreDimensions.nominalThroatDiameterMm", "coreDimensions.effectiveClearApertureMm"],
      candidateValues: ["42 mm"],
      resolution: "Confirm whether 42 mm denotes the clear throat or another mount-diameter convention.",
    },
  ],
  includeElectricalLayers: true,
}) satisfies MountSpecInput;

export default SAMSUNG_NX_MOUNT;
