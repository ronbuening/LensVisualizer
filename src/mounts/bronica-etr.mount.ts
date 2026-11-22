/**
 * Zenza Bronica ETR mount SVG specification.
 *
 * Still partial. What is sourced: the 69.0 mm register (ETRSi repair manual), the four-claw count and
 * the counterclockwise attach rotation (owner manuals), and the arrangement of claws, lock pin, stop
 * pin and shutter drive pins from FIG. 2 of US4063264A, which is a true camera-front view. That
 * patent states no dimension and no angle, so every angle read from FIG. 2 is a figure scaling
 * (`photo_scaled`, cited to the `patent_figure` source), not a patent-stated value. Radii, the throat
 * and the lens flange diameter have no source and stay unknown.
 */

import type {
  ContactFeature,
  ContactSide,
  MechanicalCoupling,
  MountProfileId,
  MountSpecInput,
} from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const PROFILE: MountProfileId = "bronica-etr/base";

/** Register listings carried over from the original entry. */
const W = ["betr-1", "betr-2"];
/** US4063264A text: mechanism and arrangement only. */
const P = ["betr-p1"];
/** US4063264A FIG. 2, scaled by hand (camera-front view, index 31 at 12 o'clock). */
const PF = ["betr-p1f"];
/** Zenza Bronica ETRSi Repair Manual, March 1990. */
const SM = ["betr-sm"];
/** ETR owner manual (1976 body). */
const OM1 = ["betr-om1"];
/** ETRSi owner manual. */
const OM2 = ["betr-om2"];
/** Modern Photography, Fall 1980 reprint. */
const MP = ["betr-mp"];

/**
 * Body claws 15 as drawn in FIG. 2: [start, centre, end] in the camera-front frame, numbered clockwise
 * from 12 o'clock. Read from the radial steps at each claw end, about ±2°. The open gaps between them
 * are centred near 0, 89.5, 181.5 and 269 deg.
 */
const BODY_CLAWS: [number, number, number][] = [
  [22, 45, 68],
  [111, 136, 161],
  [202, 224, 246],
  [292, 315, 338],
];

const LOCK_PIN_DEG = 121;
const STOP_PIN_DEG = 209;

/**
 * Contact pin angles, numbered clockwise through 12 o'clock. Scaled from the oblique lens-rear and
 * body photographs on p. 39 of the ETRSi owner manual; two groups of three, about ±8°.
 */
const CONTACT_ANGLES = [322, 330, 338, 22, 30, 38];

function contactPin(side: ContactSide, index: number): ContactFeature {
  return {
    side,
    contactNo: index + 1,
    profileId: PROFILE,
    centerAngleDeg: v(CONTACT_ANGLES[index], "photo_scaled", OM2),
    centerRadiusMm: unknownV([]),
    widthMm: unknownV([]),
    heightMm: unknownV([]),
    shape: "pin",
    protrusionMm: unknownV([]),
    function: "",
  };
}

function drivePin(no: number, angleDeg: number, bodyPins: string, lensPin: string): MechanicalCoupling {
  return {
    featureId: `shutter-drive-pin-${no}`,
    side: "both",
    profileId: PROFILE,
    centerAngleDeg: v(angleDeg, "photo_scaled", PF),
    radiusMm: unknownV([]),
    sizeOrTravel:
      "pin on the body shutter drive ring 19; FIG. 2 also draws a dashed second position about 40° counterclockwise",
    function: `${bodyPins} drives lens connecting pin ${lensPin} on the lens shutter drive ring 10 (cocks and trips the leaf shutter)`,
    compatibilityNotes:
      "Angle scaled from US4063264A FIG. 2 (solid position); the patent gives no angle. The two pins are stated to be symmetric about the lens axis. Radius not sourced.",
  };
}

const BRONICA_ETR_MOUNT = {
  mountId: "bronica-etr",
  displayLabel: "Zenza Bronica ETR",
  projectNote: "Bronica ETR 6x4.5 medium-format SLR mount.",
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
          appliesTo: "Bronica ETR / ETRS / ETRSi 6x4.5 leaf-shutter lenses and bodies",
          adds: [
            "four-claw bayonet",
            "spring-loaded lock pin and fixed stop pin",
            "two shutter drive pins on a rotating body ring",
            "six electrical contact pins in two groups of three",
          ],
          removes: ["separate mechanical aperture coupling (aperture values are passed through the contacts)"],
          changes: [
            "the ETRSi repair manual says the ETRS body mount ring is not interchangeable with the ETRSi ring (two holes are 2.3 mm against 2.0 mm); no source shows a difference in the lens-facing geometry, so no variant profile is drawn",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical", "lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...W, ...P, ...PF, ...SM, ...OM1, ...OM2, ...MP],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(69, "service_manual", SM),
    nominalThroatDiameterMm: unknownV([]),
    effectiveClearApertureMm: unknownV([]),
    cameraMountOuterDiameterMm: v(84, "photo_scaled", OM2),
    lensMountOuterDiameterMm: unknownV([]),
    contactCount: v(6, "secondary", [...OM2, ...SM]),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", PF),
    lockAngleDeg: unknownV([]),
    lockRotationDeg: unknownV([]),
    lockRotationDirection: dirV("counterclockwise", "official", [...OM1, ...OM2, ...P]),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", OM2),
      startAngleDeg: v(0, "secondary", OM2),
      endAngleDeg: v(360, "secondary", OM2),
      innerRadiusMm: v(0, "secondary", OM2),
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
      centerAngleDeg: v(0, "photo_scaled", OM2),
      startAngleDeg: v(0, "photo_scaled", OM2),
      endAngleDeg: v(360, "photo_scaled", OM2),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: v(42, "photo_scaled", OM2),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "chromed body mount ring; outer diameter about 84 mm scaled from the body photograph on p. 39 of the ETRSi owner manual against the 87 mm body height in its specifications, about ±5 mm",
    },
    ...BODY_CLAWS.map(([start, center, end], index) => ({
      featureId: `body-slot-${index + 1}`,
      featureType: "bayonet_receiving_slot",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(center, "photo_scaled", PF),
      startAngleDeg: v(start, "photo_scaled", PF),
      endAngleDeg: v(end, "photo_scaled", PF),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      depthMm: unknownV([]),
      matesWith: `lens-lug-${index + 1}`,
      shapeNotes:
        "inwardly bent body bayonet claw 15, the solid part that retains a lens claw; the open entry gaps sit between the claws. Edges scaled from US4063264A FIG. 2 (camera-front view, no stated angles or scale), about ±2°; four claws per the owner manuals; radii and depth not sourced",
    })),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", PF),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: v(42, "photo_scaled", OM2),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red dot (index 31) on the periphery of the mount, drawn at 12 o'clock in US4063264A FIG. 2; the patent text gives only 'a predetermined position'",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(LOCK_PIN_DEG, "photo_scaled", PF),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      depthMm: unknownV([]),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "spring-loaded lock pin 17, inside the claws; angle scaled from US4063264A FIG. 2; it is linked to the lens release button at the lower corner of the body front",
    },
    {
      featureId: "body-stop-pin",
      featureType: "alignment_pin",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(STOP_PIN_DEG, "photo_scaled", PF),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      depthMm: unknownV([]),
      matesWith: "lens-stop-pin",
      shapeNotes:
        "fixed stop pin 18 that ends the mounting rotation; angle scaled from US4063264A FIG. 2; radius not sourced",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "secondary", OM2),
      startAngleDeg: v(0, "secondary", OM2),
      endAngleDeg: v(360, "secondary", OM2),
      innerRadiusMm: v(0, "secondary", OM2),
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
      centerAngleDeg: v(0, "secondary", OM2),
      startAngleDeg: v(0, "secondary", OM2),
      endAngleDeg: v(360, "secondary", OM2),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens rear face 2a and flange; diameters not sourced, drawn as a placeholder",
    },
    ...BODY_CLAWS.map(([start, center, end], index) => ({
      featureId: `lens-lug-${index + 1}`,
      featureType: "bayonet_lug",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(center, "photo_scaled", PF),
      startAngleDeg: v(start, "photo_scaled", PF),
      endAngleDeg: v(end, "photo_scaled", PF),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: unknownV([]),
      matesWith: `body-slot-${index + 1}`,
      shapeNotes:
        "outwardly bent lens bayonet claw 3, drawn where it sits on a mounted lens, behind the body claw at the same angle; the drawn arc is the body claw it engages, and the lens claw's own length is not sourced, because US4063264A FIG. 1 is a perspective view and cannot be scaled",
    })),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", PF),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "red dot (index 32) that is aligned with the body dot before the lens is turned",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(LOCK_PIN_DEG, "photo_scaled", PF),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: unknownV([]),
      matesWith: "body-lock-pin",
      shapeNotes:
        "notch 7 at the end of arcuate guide rail 6; the rail holds the lock pin down during rotation and the pin drops into the notch at the stop; stored at the lock pin angle",
    },
    {
      featureId: "lens-stop-pin",
      featureType: "alignment_pin",
      profileId: PROFILE,
      count: 1,
      centerAngleDeg: v(STOP_PIN_DEG, "photo_scaled", PF),
      startAngleDeg: unknownV([]),
      endAngleDeg: unknownV([]),
      innerRadiusMm: unknownV([]),
      outerRadiusMm: unknownV([]),
      thicknessMm: unknownV([]),
      matesWith: "body-stop-pin",
      shapeNotes:
        "fixed lens pin 5, which meets the body stop pin when the lens is locked; a second fixed pin 4 sits on the far side of the stop pin at insertion; stored at the stop pin angle",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "service_manual", SM),
      thicknessMm: v(0, "service_manual", SM),
      diameterMm: v(84, "photo_scaled", OM2),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-69, "service_manual", SM),
      thicknessMm: v(0, "service_manual", SM),
      diameterMm: v(69.6, "official", OM1),
    },
  ],

  contacts: [
    ...CONTACT_ANGLES.map((_, index) => contactPin("body", index)),
    ...CONTACT_ANGLES.map((_, index) => contactPin("lens", index)),
  ],

  mechanicalCouplings: [
    drivePin(1, 107, "fixed pin 21 with retractable pin 22", "11"),
    drivePin(2, 288, "fixed pin 20", "12"),
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(9, "service_manual", SM),
      pcdMm: unknownV([]),
      diameterMm: v(2, "service_manual", SM),
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
      ref: "betr-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "69.0 mm Zenza Bronica ETR register",
      confidence: "medium",
    },
    {
      ref: "betr-2",
      sourceType: "secondary",
      citation: "“Zenza Bronica ETRSi,” Lunar Stage. Accessed 2026-06-06.",
      liveUrl: "https://lunarstage.com/bronica-etrsi/",
      archiveUrl: "https://lunarstage.com/bronica-etrsi/",
      archiveDate: "2026-06-06",
      appliesTo: "ETR system identity, 69.0 mm flange-to-focal-plane distance",
      confidence: "medium",
    },
    {
      ref: "betr-p1",
      sourceType: "patent",
      citation:
        "US4063264A, “Means for mounting an interchangeable lens on a single lens reflex camera,” Zenza Bronica Industries, filed 1976-07-26, granted 1977-12-13. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "Text only: bayonet claws on lens and body, lock pin 17 and notch 7, stop pin 18 and lens pins 4 and 5, index marks 31 and 32, lock release button 23, and the paired shutter drive pins (20, 21, 22 on the body ring; 11, 12 on the lens ring). The mounting sense follows from FIGS. 1, 2 and 4. The patent states no dimension, no angle and no claw count",
      confidence: "medium",
    },
    {
      ref: "betr-p1f",
      sourceType: "patent_figure",
      citation:
        "US4063264A, FIG. 2 (drawing sheet 1 of 3): front view of the camera body. Angles scaled by hand from the figure, 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/US4063264A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/ff/03/60/00c9f2bed7855b/US4063264.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "Camera-front view with index 31 at 12 o'clock, so angles are read directly with no mirroring: four body claws, lock pin 17 at about 121°, stop pin 18 at about 209°, drive pins 21 and 20 at about 107° and 288°. The figure carries no dimensions, angles or scale, so these are figure scalings and not patent-stated values. Lens-side FIG. 1 is a perspective view and was used for arrangement only",
      confidence: "low",
    },
    {
      ref: "betr-sm",
      sourceType: "service_manual",
      citation: "Zenza Bronica, ETRSi Repair Manual, March 1990, pp. P-16, P-18 and P-29.",
      liveUrl: "https://butkus.org/chinon/bronica/bronica_etrsi_repair_manual/bronica_etrsi_repair_manual.htm",
      archiveUrl: "https://www.cameramanuals.org/bronica/bronica_etrsi_repair_manual.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "P-29: mechanical body back 69.0 ± 0.03 mm, lens mount held by nine M2.0 x 4.0 screws, ETRS and ETRSi mount rings told apart by two 2.3 mm or 2.0 mm holes. P-16 and P-18: body lens connector drawn with two groups of three pins. The mount sketches carry no angles",
      confidence: "high",
    },
    {
      ref: "betr-om1",
      sourceType: "official",
      citation: "Zenza Bronica ETR instruction manual, specifications and section 7, “Exchanging Lenses.”",
      liveUrl: "https://www.butkus.org/chinon/bronica/bronica_etr/bronica_etr.htm",
      archiveUrl: "https://www.cameramanuals.org/prof_pdf/bronica_etr-scan.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "“Exclusive four-claw Bronica bayonet mount”; red dots aligned, then the lens is turned counterclockwise to lock and clockwise to remove; winding pins on lens and body set to green dots; 42.5 x 55.1 mm frame (69.6 mm diagonal)",
      confidence: "high",
    },
    {
      ref: "betr-om2",
      sourceType: "official",
      citation:
        "Zenza Bronica ETRSi instruction manual, specifications, p. 22 “Exchanging Lenses,” and p. 39 “Shutter cocking pins” photographs.",
      liveUrl: "https://butkus.org/chinon/bronica/bronica_etrsi/bronica_etrsi.htm",
      archiveUrl: "https://www.cameramanuals.org/bronica/bronica_etr_si.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "“Exclusive four claw Bronica ETR bayonet mount”; counterclockwise attach; body 92 x 87 x 69 mm. The p. 39 photographs are oblique views of the body front and of the lens rear (lens rear angles mirrored into the camera-front frame): they show two groups of three contact pins either side of 12 o'clock and the cocking pins, and were scaled for the contact angles and the body ring diameter. Text statements are firm; the scaled values are rough",
      confidence: "medium",
    },
    {
      ref: "betr-mp",
      sourceType: "secondary",
      citation:
        "“World's Best Cameras,” Bronica ETRS article reprinted from the Fall 1980 issue of Modern Photography (reprint 10M-11/83), Pacific Rim Camera reference library.",
      liveUrl: "https://www.pacificrimcamera.com/rl/rlBronicash.htm",
      archiveUrl: "https://www.pacificrimcamera.com/rl/02213/02213.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "Function only: shutter timing goes to the lens and the lens reports its maximum and set apertures through contacts inside the bayonet mount; a ring concentric with the mount cocks the shutter",
      confidence: "medium",
    },
  ],

  openQuestions: [
    {
      issue:
        "No dimensioned drawing of the ETR bayonet was found. Claw, lock pin, stop pin and drive pin angles are scaled from US4063264A FIG. 2, which has no stated angles or scale. Claw radii and depth, the length of the lens claws, and the radii of the lock pin, stop pin and drive pins are unknown. The earlier three lugs at 20°, 140° and 260°, the 1.2 mm lug engagement plane and the aperture coupler at 320° had no source and are removed.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "mechanicalCouplings", "axialStack"],
      candidateValues: [],
      resolution:
        "Needs a factory lens-mount drawing or a measured body and lens. Checked: US4063264A, its Japanese counterpart JPS5221036A, connector utility model JPS5850335Y2, the ETRSi repair manual, the ETR and ETRSi owner manuals, and the Modern Photography 1980 reprint.",
    },
    {
      issue:
        "Throat diameter, clear aperture and lens flange diameter have no source; the earlier 54, 64 and 62 mm figures were unsourced stand-ins and are removed. The 84 mm body ring diameter is scaled from an oblique manual photograph and is good to about ±5 mm.",
      affectedFields: [
        "coreDimensions.nominalThroatDiameterMm",
        "coreDimensions.effectiveClearApertureMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "coreDimensions.cameraMountOuterDiameterMm",
      ],
      candidateValues: [84],
      resolution: "Measure a body and lens, or find a dimensioned mount drawing.",
    },
    {
      issue:
        "The lock rotation angle is not stated anywhere. Comparing the perspective lens view (FIG. 1) with FIG. 2 suggests roughly 30°, too loose to store. The earlier 60° was an unsourced stand-in.",
      affectedFields: ["lockGeometry.lockAngleDeg", "lockGeometry.lockRotationDeg"],
      candidateValues: [30],
      resolution: "Measure on a body, or find a manual or drawing that states the angle.",
    },
    {
      issue:
        "Contact pin angles are scaled from oblique photographs; pin circle radius, pin size and the function of each pin are unknown. The count of six comes from ETRSi-era sources and is not separately confirmed for the 1976 ETR. JPS5850335Y2 describes radially sprung body pins against fixed lens pins but shows four or eight, not six.",
      affectedFields: ["contacts", "coreDimensions.contactCount"],
      candidateValues: [],
      resolution: "Needs an ETR lens wiring diagram or a measured lens rear.",
    },
    {
      issue:
        "The nine mount screws have no sourced positions or pitch circle and are not drawn. The repair manual says the ETRS mount ring is not interchangeable with the ETRSi ring and tells them apart by two holes of 2.3 mm or 2.0 mm, without saying what the holes are.",
      affectedFields: ["screwsGasketsBaffles", "mvp.profileModel"],
      candidateValues: [2.0, 2.3],
      resolution:
        "An ETRS repair manual or parts list would show whether this difference needs separate ETRS and ETRSi profiles.",
    },
  ],
} satisfies MountSpecInput;

export default BRONICA_ETR_MOUNT;
