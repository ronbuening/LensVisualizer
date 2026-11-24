/**
 * Zenza Bronica GS mount SVG specification.
 *
 * Still partial, and the thinnest of the three Bronica leaf-shutter entries. GS-1 is the 6x7 system;
 * it is quoted with the same 85 mm register as the SQ but nothing here is copied from the SQ or ETR
 * entries. The GS-1 owner manual gives the four-claw count, the attach direction, the index dots and
 * the existence of shutter cocking pins. No source gives claw positions, any diameter, the cocking
 * pin positions or the lens contact layout, so those parts are recorded in the profile and open
 * questions but not drawn. The cited Bronica patent is an ETR-era filing kept as lineage only.
 */

import type { MountProfileId, MountSpecInput } from "../types/mount.js";
import { dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const PROFILE: MountProfileId = "bronica-gs/base";

/** Register listings carried over from the original entry. */
const W = ["bgs-1", "bgs-2"];
/** US4063264A, lineage only. */
const P = ["bgs-p1"];
/** GS-1 owner manual. */
const OM = ["bgs-om"];

const BRONICA_GS_MOUNT = {
  mountId: "bronica-gs",
  displayLabel: "Zenza Bronica GS",
  projectNote: "Bronica GS-1 6x7 medium-format SLR mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["leaf_shutter_couplings"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["bayonet_lug_geometry", "shutter_cocking_coupling_positions", "contact_pin_positions"],
    },
    profileModel: {
      baseProfileId: PROFILE,
      selectedMvpProfileId: PROFILE,
      variantStrategy: "base_only",
      variantProfiles: [
        {
          profileId: PROFILE,
          profileType: "base",
          appliesTo: "Bronica GS-1 6x7 leaf-shutter lenses and bodies",
          adds: ["four-claw bayonet", "lens release button", "shutter cocking pins on body and lens"],
          removes: [],
          changes: [
            "the claws, the lock and the cocking pins have no sourced position, so they are listed here but not drawn",
            "lens-to-body electrical contacts are expected for the electronically timed shutter but no source consulted gives their count or layout, so none are drawn",
            "the cited Bronica patent is an ETR-era filing and supplies no GS value",
          ],
          cameraSideOverlayLayers: [],
          lensSideOverlayLayers: [],
          status: "partial",
          sourceRefs: [...W, ...P, ...OM],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(85, "secondary", W),
    nominalThroatDiameterMm: unknownV([]),
    effectiveClearApertureMm: unknownV([]),
    cameraMountOuterDiameterMm: unknownV([]),
    lensMountOuterDiameterMm: unknownV([]),
    contactCount: unknownV([]),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", OM),
    lockAngleDeg: unknownV([]),
    lockRotationDeg: unknownV([]),
    lockRotationDirection: dirV("counterclockwise", "official", OM),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", OM),
      startAngleDeg: v(0, "secondary", OM),
      endAngleDeg: v(360, "secondary", OM),
      innerRadiusMm: v(0, "secondary", OM),
      outerRadiusMm: unknownV([]),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "throat opening; diameter not sourced, drawn as a placeholder",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", OM),
      startAngleDeg: v(0, "secondary", OM),
      endAngleDeg: v(360, "secondary", OM),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "body mount ring; diameters not sourced, drawn as a placeholder at the renderer's default size",
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", OM),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "white dot on the main body, at the top of the mount in the owner manual's front-view photograph; radius not sourced",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", OM),
      startAngleDeg: v(0, "secondary", OM),
      endAngleDeg: v(360, "secondary", OM),
      innerRadiusMm: v(0, "secondary", OM),
      outerRadiusMm: unknownV([]),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "rear opening; diameter not sourced, drawn as a placeholder",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", OM),
      startAngleDeg: v(0, "secondary", OM),
      endAngleDeg: v(360, "secondary", OM),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring; diameters not sourced, drawn as a placeholder at the renderer's default size",
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", OM),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "red lens alignment dot that is aligned with the body's white dot before the lens is turned",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: unknownV([]),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-85, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(88.6, "official", OM),
    },
  ],

  contacts: [],

  mechanicalCouplings: [],

  screwsGasketsBaffles: [],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: [],
  },

  sourceRefs: [
    {
      ref: "bgs-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "85.0 mm Zenza Bronica GS register",
      confidence: "medium",
    },
    {
      ref: "bgs-2",
      sourceType: "secondary",
      citation: "“Bronica GS-1,” Camera-wiki.org. Accessed 2026-06-06.",
      liveUrl: "https://camera-wiki.org/wiki/Bronica_GS1",
      archiveUrl: "https://camera-wiki.org/wiki/Bronica_GS1",
      archiveDate: "2026-06-06",
      appliesTo: "GS-1 system identity and lens-mount distinction from SQ",
      confidence: "medium",
    },
    {
      ref: "bgs-p1",
      sourceType: "patent",
      citation:
        "US4063264A, “Means for mounting an interchangeable lens on a single lens reflex camera,” Zenza Bronica Industries, filed 1976-07-26. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "Lineage only. This is the ETR-era lens-shutter mount filing, seven years before the GS-1; it states no dimension or angle and no GS value is taken from it",
      confidence: "low",
    },
    {
      ref: "bgs-om",
      sourceType: "official",
      citation:
        "Zenza Bronica GS-1 instruction manual: specifications, p. 4 “Parts of the Zenza Bronica GS-1,” p. 22 “Exchanging Lenses,” and p. 36 “Cocking pins.”",
      liveUrl: "https://butkus.org/chinon/bronica/bronica_gs-1/bronica_gs-1.htm",
      archiveUrl: "https://www.cameramanuals.org/bronica/bronica_gs-1.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "“Bronica GS mount (exclusive four-claw bayonet)”; white dot on the main body and red dot on the lens aligned, then the lens is turned counterclockwise to lock and, with the lens release button pressed down, clockwise to remove; cocking pins on lens and body set to green dots; 55.6 x 69.0 mm frame (88.6 mm diagonal); body 106.5 x 99 x 80 mm. The p. 4 photograph is a camera-front view showing the white dot at the top of the mount",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue:
        "No source gives the clock positions, spans or radii of the four bayonet claws, the position of the lock, or the positions of the shutter cocking pins, so none of them is drawn; they are recorded in the profile only. The earlier three lugs at 20°, 140° and 260°, lock at 270°, cocking coupler at 40° and aperture coupler at 320° were unsourced and are removed.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings"],
      candidateValues: [],
      resolution:
        "Needs a GS-1 service manual, a factory mount drawing or a measured body and lens. Checked: the GS-1 owner manual and the Modern Photography January 1984 GS-1 reprint. No GS-specific Bronica patent was found, and Petersen's Photographic January 1986 was not read.",
    },
    {
      issue:
        "No mount diameter is sourced: throat, clear aperture, body ring and lens flange are all unknown, so the figures use the renderer's default size. The earlier 57, 70 and 68 mm figures matched the SQ stand-ins and had no source. The 85 mm register still rests on secondary listings.",
      affectedFields: [
        "coreDimensions.nominalThroatDiameterMm",
        "coreDimensions.effectiveClearApertureMm",
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "coreDimensions.flangeFocalDistanceMm",
      ],
      candidateValues: [],
      resolution: "Measure a body and lens, or find a dimensioned mount drawing or repair manual.",
    },
    {
      issue:
        "The lens-to-body electrical contacts are not documented in any source consulted: their count, layout and functions are unknown and none is drawn. Whether the GS mount has any mechanical aperture coupling is also unconfirmed.",
      affectedFields: ["contacts", "coreDimensions.contactCount", "mechanicalCouplings"],
      candidateValues: [],
      resolution:
        "Needs a clear photograph of a PG lens rear and GS-1 body mount from a citable source, or a wiring diagram.",
    },
    {
      issue:
        "The lock rotation angle and the mount screw count and positions are unknown; the earlier 60° and four screws were unsourced stand-ins and are removed.",
      affectedFields: ["lockGeometry.lockAngleDeg", "lockGeometry.lockRotationDeg", "screwsGasketsBaffles"],
      candidateValues: [],
      resolution: "Measure on a body, or find a GS-1 repair manual.",
    },
  ],
} satisfies MountSpecInput;

export default BRONICA_GS_MOUNT;
