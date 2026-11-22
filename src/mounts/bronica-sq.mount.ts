/**
 * Zenza Bronica SQ mount SVG specification.
 *
 * Still partial. SQ is the 6x6 Bronica leaf-shutter bayonet with an 85 mm register. Nothing here is
 * copied from the ETR or GS entries: the SQ arrangement comes from the SQ-A owner manual and from two
 * magazine strip-down reports on the SQ and SQ-A. Those give the four-claw count, the attach
 * direction, six contacts at the top of the mount and the clock positions of the shutter cocking
 * lugs and release catch, but no claw angles and no dimensioned drawing, so the claws are recorded in
 * the profile and open questions but not drawn. The cited Bronica patent is an ETR-era filing kept as lineage only.
 */

import type {
  ContactFeature,
  ContactSide,
  MechanicalCoupling,
  MountProfileId,
  MountSpecInput,
} from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const PROFILE: MountProfileId = "bronica-sq/base";

/** Register listings carried over from the original entry. */
const W = ["bsq-1", "bsq-2"];
/** US4063264A, lineage only. */
const P = ["bsq-p1"];
/** SQ-A owner manual. */
const OM = ["bsq-om"];
/** Modern Photography “Modern Tests” report on the SQ. */
const MT = ["bsq-mt"];
/** Popular Photography lab report on the SQ-A, May 1983. */
const PP = ["bsq-pp"];

/** "Lower right (looking into the open mount)" for the lens release catch, taken as 135°. */
const LOCK_CATCH_DEG = 135;

/**
 * Contact angles, numbered clockwise through 12 o'clock. Scaled from the body-front and lens-rear
 * photographs in the Modern Tests report (two groups of three), about ±8°.
 */
const CONTACT_ANGLES = [323, 330, 338, 22, 30, 37];

function contactPin(side: ContactSide, index: number): ContactFeature {
  return {
    side,
    contactNo: index + 1,
    profileId: PROFILE,
    centerAngleDeg: v(CONTACT_ANGLES[index], "photo_scaled", MT),
    centerRadiusMm: unknownV([]),
    widthMm: unknownV([]),
    heightMm: unknownV([]),
    shape: side === "body" ? "spring-loaded pin" : "stud",
    protrusionMm: unknownV([]),
    function: "",
  };
}

function cockingLug(no: number, angleDeg: number, clock: string): MechanicalCoupling {
  return {
    featureId: `shutter-cocking-lug-${no}`,
    side: "both",
    profileId: PROFILE,
    centerAngleDeg: v(angleDeg, "secondary", MT),
    radiusMm: unknownV([]),
    sizeOrTravel: "lug on the body shutter-cocking and trip ring; the lens lug runs in an arcuate groove",
    function: "tensions and trips the leaf shutter in the lens",
    compatibilityNotes: `Stated as “about ${clock}” looking into the open mount, good to about ±15°. Radius not sourced. The cocked position is marked by green dots on body and lens.`,
  };
}

const BRONICA_SQ_MOUNT = {
  mountId: "bronica-sq",
  displayLabel: "Zenza Bronica SQ",
  projectNote: "Bronica SQ 6x6 medium-format SLR mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["leaf_shutter_couplings", "electrical_contacts"],
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
          appliesTo: "Bronica SQ / SQ-A / SQ-Ai 6x6 leaf-shutter lenses and bodies",
          adds: [
            "four-claw bayonet",
            "pivoted lens-release catch",
            "two shutter cocking lugs on a rotating body ring",
            "six electrical contacts in two groups of three at the top of the mount",
          ],
          removes: ["separate mechanical aperture coupling (three of the six contacts carry the f-stop)"],
          changes: [
            "sources cover the SQ (1980) and SQ-A (1982); SQ-Ai and SQ-B bodies were not separately checked",
            "the cited Bronica patent is an ETR-era filing and supplies no SQ value",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical", "lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...W, ...P, ...OM, ...MT, ...PP],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(85, "secondary", W),
    nominalThroatDiameterMm: unknownV([]),
    effectiveClearApertureMm: unknownV([]),
    cameraMountOuterDiameterMm: v(76, "conflicting", MT),
    lensMountOuterDiameterMm: unknownV([]),
    contactCount: v(6, "secondary", [...MT, ...PP]),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", MT),
    lockAngleDeg: v(20, "secondary", MT),
    lockRotationDeg: v(20, "secondary", MT),
    lockRotationDirection: dirV("counterclockwise", "official", [...OM, ...MT, ...PP]),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", MT),
      startAngleDeg: v(0, "secondary", MT),
      endAngleDeg: v(360, "secondary", MT),
      innerRadiusMm: v(0, "secondary", MT),
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
      centerAngleDeg: v(0, "secondary", MT),
      startAngleDeg: v(0, "secondary", MT),
      endAngleDeg: v(360, "secondary", MT),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: v(38, "conflicting", MT),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "chromed brass body mount, described as “3 in. diameter” (76 mm) in the Modern Tests report; the same report's front photograph scales to about 83 mm against the 92 mm body width, so the round figure may describe the bore",
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", MT),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes: "orange dot on the body front above the lens mount; radius not sourced",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(LOCK_CATCH_DEG, "secondary", MT),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      depthMm: unknownV([]),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "pivoted catch for the lens-release lock, described only as “on the lower right (looking into the open mount)”; 135° is that phrase taken at its centre, good to about ±25°; worked by the release tab in front of the shutter-speed dial",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", MT),
      startAngleDeg: v(0, "secondary", MT),
      endAngleDeg: v(360, "secondary", MT),
      innerRadiusMm: v(0, "secondary", MT),
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
      centerAngleDeg: v(0, "secondary", MT),
      startAngleDeg: v(0, "secondary", MT),
      endAngleDeg: v(360, "secondary", MT),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "chrome-on-brass lens mount; diameters not sourced, drawn as a placeholder",
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", MT),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "raised red dot that is aligned with the body's orange dot before the lens is turned",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(LOCK_CATCH_DEG, "secondary", MT),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: unknownV([]),
      matesWith: "body-lock-pin",
      shapeNotes:
        "lens-side seat for the body release catch; no source describes it, so it is stored at the catch's angle and nothing else about it is known",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(76, "conflicting", MT),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-85, "secondary", W),
      thicknessMm: v(0, "secondary", W),
      diameterMm: v(78.6, "official", OM),
    },
  ],

  contacts: [
    ...CONTACT_ANGLES.map((_, index) => contactPin("body", index)),
    ...CONTACT_ANGLES.map((_, index) => contactPin("lens", index)),
  ],

  mechanicalCouplings: [cockingLug(1, 120, "4 o'clock"), cockingLug(2, 300, "10 o'clock")],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(8, "secondary", PP),
      pcdMm: unknownV([]),
      diameterMm: unknownV([]),
      centerAnglesDeg: degListV("unknown", "unknown", []),
      shape: "round",
    },
  ],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: [
      "camera-side-variant-electrical",
      "camera-side-variant-mechanical",
      "lens-side-variant-electrical",
      "lens-side-variant-mechanical",
    ],
  },

  sourceRefs: [
    {
      ref: "bsq-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "85.0 mm Zenza Bronica SQ register",
      confidence: "medium",
    },
    {
      ref: "bsq-2",
      sourceType: "secondary",
      citation: "“Bronica SQ,” Camera-wiki.org. Accessed 2026-06-06.",
      liveUrl: "https://camera-wiki.org/wiki/Bronica_SQ-Ai",
      archiveUrl: "https://camera-wiki.org/wiki/Bronica_SQ-Ai",
      archiveDate: "2026-06-06",
      appliesTo: "SQ system identity and leaf-shutter lens family",
      confidence: "medium",
    },
    {
      ref: "bsq-p1",
      sourceType: "patent",
      citation:
        "US4063264A, “Means for mounting an interchangeable lens on a single lens reflex camera,” Zenza Bronica Industries, filed 1976-07-26. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "Lineage only. This is the ETR-era lens-shutter mount filing, four years before the SQ; it states no dimension or angle and no SQ value is taken from it",
      confidence: "low",
    },
    {
      ref: "bsq-om",
      sourceType: "official",
      citation:
        "Zenza Bronica SQ-A instruction manual: specifications, “Exchanging Lenses,” and the “Cocking pin” care note.",
      liveUrl: "https://butkus.org/chinon/bronica/bronica_sq-a/bronica_sq-a.htm",
      archiveUrl: "https://www.cameramanuals.org/bronica/bronica_sq-a.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "“Exclusive four-claw Bronica SQ bayonet mount”; orange dot on the body and red dot on the lens aligned, then the lens is turned counterclockwise to lock and clockwise to remove; cocking pins on lens and body; 55.6 x 55.6 mm frame (78.6 mm diagonal); body 92 mm wide",
      confidence: "high",
    },
    {
      ref: "bsq-mt",
      sourceType: "secondary",
      citation:
        "Modern Photography “Modern Tests” report on the Bronica SQ (headed “Bronica SQ: Pro 2¼ SLR System”), reprint 5M/11-83, Pacific Rim Camera reference library. Original issue date not printed on the reprint.",
      liveUrl: "https://www.pacificrimcamera.com/rl/rlBronicash.htm",
      archiveUrl: "https://www.pacificrimcamera.com/rl/01117/01117.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "Text, looking into the open mount (camera-front frame): four mounting lugs, “3 in. diameter” mount, six gold-plated spring-loaded contacts just inside the top of the mount, shutter-cocking lugs at about 10 and 4 o'clock, pivoted release catch at lower right, orange dot above the mount, counterclockwise to mount, about 20° clockwise to remove. Photographs on PDF p. 5: a body-front view, and a lens-rear view held upside down (rotated 180° and mirrored into the camera-front frame), scaled for the two groups of three contacts",
      confidence: "medium",
    },
    {
      ref: "bsq-pp",
      sourceType: "secondary",
      citation:
        "N. Goldberg and M. A. Frank, lab report on the Bronica SQ-A, Popular Photography, vol. 90, no. 5, May 1983, reprint 10M/12-83, Pacific Rim Camera reference library.",
      liveUrl: "https://www.pacificrimcamera.com/rl/rlBronicash.htm",
      archiveUrl: "https://www.pacificrimcamera.com/rl/01116/01116.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "SQ-A strip-down: six front contacts (three carry the f-stop, two energize the shutter electromagnet, one is flash sync), four-claw body flange held by eight screws, shutter-cocking and trip ring in a ball race, short counterclockwise turn to mount",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "No source gives the clock positions, spans or radii of the four bayonet claws, so no claw is drawn; the four-claw count is recorded in the profile only. The earlier three lugs at 20°, 140° and 260° were unsourced and are removed.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [],
      resolution:
        "Needs an SQ service manual, a factory mount drawing or a measured body and lens. Checked: SQ and SQ-A owner manuals, the SQ-A sales brochure, the Modern Photography SQ report and the Popular Photography SQ-A report. No SQ-specific Bronica patent was found.",
    },
    {
      issue:
        "Mount diameters are unresolved. The only stated figure is “3 in.” for the body mount, while the same report's front photograph scales to about 83 mm against the 92 mm body width. Throat, clear aperture and lens flange diameter have no source; the earlier 57, 70 and 68 mm figures were unsourced stand-ins and are removed.",
      affectedFields: [
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.nominalThroatDiameterMm",
        "coreDimensions.effectiveClearApertureMm",
        "coreDimensions.lensMountOuterDiameterMm",
      ],
      candidateValues: [76, 83],
      resolution: "Measure a body and lens, or find a dimensioned mount drawing.",
    },
    {
      issue:
        "Cocking lug and release catch positions are clock-face descriptions (about ±15° and ±25°), and their radii are unknown. The lens-rear photograph puts the lens cocking lugs nearer 104° and 286°. The 20° lock rotation is the report's “about 20°”.",
      affectedFields: ["mechanicalCouplings", "cameraSideFeatures", "lensSideFeatures", "lockGeometry"],
      candidateValues: [104, 120, 286, 300],
      resolution: "Needs an SQ service drawing or a measured sample.",
    },
    {
      issue:
        "Contact angles are scaled from halftone photographs; pin circle radius and pin size are unknown, and no source says which of the six contacts carries which signal.",
      affectedFields: ["contacts"],
      candidateValues: [],
      resolution: "Needs an SQ lens or body wiring diagram.",
    },
    {
      issue:
        "The eight mount screws are counted on the SQ-A; their positions, pitch circle and size are unknown and they are not drawn. The 85 mm register still rests on secondary listings.",
      affectedFields: ["screwsGasketsBaffles", "coreDimensions.flangeFocalDistanceMm"],
      candidateValues: [],
      resolution: "An SQ repair manual would give both, as the ETRSi manual does for the ETR.",
    },
  ],
} satisfies MountSpecInput;

export default BRONICA_SQ_MOUNT;
