/**
 * Hasselblad XCD (X system) mount SVG specification.
 *
 * No dimensioned drawing of the X bayonet was located (no Hasselblad X-mount utility patent, no service
 * data). The X1D User Guide gives the attachment direction in text and shows the body mount in two
 * rendered figures; the contact count, contact row position, lock pin, index and ring screws are read or
 * scaled from those figures. Bayonet lug geometry and the ring diameters are still stand-in values.
 */

import type { ContactFeature, MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

/** Register chart plus the label-only imagery note that still carries the lug and ring stand-ins. */
const REF = ["xcd-1", "xcd-2"];
const IMAGERY = ["xcd-2"];
/** Hasselblad X1D User Guide v1.8: attachment text (p. 52) and the body-mount renders (pp. 52, 140). */
const GUIDE = ["xcd-3"];
const PROFILE = "hasselblad-xcd/base";

/*
 * Angles below are scaled from the p. 140 render, which shows the body mount from the camera front,
 * slightly from the right. The four ring screws give the in-plane axes (top/bottom pair vertical, left/
 * right pair parallel to the body's bottom edge), so each feature is read in that skewed frame; recessed
 * features are corrected for the parallax the sensor outline shows. Expect about +/-5 degrees.
 */
const CONTACT_COUNT = 9;
const CONTACT_START_DEG = 162;
const CONTACT_STEP_DEG = 4.5;
const CONTACT_RADIUS_MM = 26;
const LOCK_PIN_ANGLE_DEG = 133;
const LOCK_PIN_RADIUS_MM = 33.5;

const base = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 61,
  cameraOuterDiameterMm: 76,
  lensOuterDiameterMm: 74,
  lugCentersDeg: [20, 140, 260],
  lugSpanDeg: 34,
  lockCenterAngleDeg: LOCK_PIN_ANGLE_DEG,
  scalarStatus: "secondary",
  featureStatus: "photo_scaled",
  lugShapeNotes: "stand-in bayonet sectors; lug count, centres and spans are not sourced",
});

const cameraSideFeatures = base.cameraSideFeatures.map((feature) => {
  if (feature.featureId === "body-index-mark") {
    return {
      ...feature,
      centerAngleDeg: v(0, "photo_scaled", GUIDE),
      shapeNotes:
        "red mark on the camera body; the user guide callout (p. 52, D) points to the top of the mount ring, no angle is stated",
    };
  }
  if (feature.featureId === "body-lock-pin") {
    return {
      ...feature,
      centerAngleDeg: v(LOCK_PIN_ANGLE_DEG, "photo_scaled", GUIDE),
      outerRadiusMm: v(LOCK_PIN_RADIUS_MM, "photo_scaled", GUIDE),
      shapeNotes:
        "pin on the flange face beside the lens removal button, scaled from the user guide render (p. 140); the guide does not label it, so its lock function is inferred",
    };
  }
  return feature;
});

const lensSideFeatures = base.lensSideFeatures.map((feature) => {
  if (feature.featureId === "lens-index-mark") {
    return {
      ...feature,
      centerAngleDeg: v(0, "photo_scaled", GUIDE),
      shapeNotes: "red mark on the lens, lined up with the body red mark before turning (user guide p. 52)",
    };
  }
  if (feature.featureId === "lens-lock-notch") {
    return {
      ...feature,
      centerAngleDeg: v(LOCK_PIN_ANGLE_DEG, "photo_scaled", GUIDE),
      outerRadiusMm: v(LOCK_PIN_RADIUS_MM, "photo_scaled", GUIDE),
      shapeNotes: "stored at the body pin position; no lens-rear figure was found",
    };
  }
  return feature;
});

const contacts: ContactFeature[] = (["body", "lens"] as const).flatMap((side) =>
  Array.from({ length: CONTACT_COUNT }, (_, index) => ({
    side,
    contactNo: index + 1,
    profileId: PROFILE,
    centerAngleDeg: v(CONTACT_START_DEG + index * CONTACT_STEP_DEG, "photo_scaled", GUIDE),
    centerRadiusMm: v(CONTACT_RADIUS_MM, "photo_scaled", GUIDE),
    widthMm: v(1.3, "photo_scaled", IMAGERY),
    heightMm: v(2.8, "photo_scaled", IMAGERY),
    shape: side === "body" ? "pin" : "pad",
    protrusionMm: v(side === "body" ? 0.4 : 0, "photo_scaled", IMAGERY),
    function: "",
  })),
);

const HASSELBLAD_XCD_MOUNT = makeSimpleMountSpec({
  mountId: "hasselblad-xcd",
  displayLabel: "Hasselblad XCD",
  projectNote: "Hasselblad XCD mirrorless medium-format bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: [...REF, ...GUIDE],
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark", "electrical_contacts"],
  referenceGrade: ["exact_lug_geometry", "contact_pinout"],
  appliesTo: "Hasselblad XCD lenses and X-system bodies (X1D, X1D II, X2D, 907X)",
  adds: [
    "short-register mirrorless medium-format bayonet",
    "nine-pin electrical contact row at the bottom of the throat",
  ],
  removes: ["SLR mirror box spacing"],
  changes: [
    "single base interface: the maker lists XCD lenses for all X-system and 907X cameras, and no source shows a change in drawn geometry between bodies",
    "contact row, lock pin, index and ring screws are scaled from the X1D User Guide renders; lugs and ring diameters remain stand-ins",
  ],
  flangeFocalDistanceMm: v(18.14, "secondary", REF),
  nominalThroatDiameterMm: v(61, "secondary", REF),
  effectiveClearApertureMm: v(61, "secondary", REF),
  cameraMountOuterDiameterMm: v(76, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(74, "photo_scaled", REF),
  contactCount: v(CONTACT_COUNT, "secondary", GUIDE),
  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", GUIDE),
    lockAngleDeg: v(60, "photo_scaled", REF),
    lockRotationDeg: v(60, "photo_scaled", REF),
    lockRotationDirection: dirV("clockwise", "official", GUIDE),
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
    electricalDiameterMm: CONTACT_RADIUS_MM * 2,
  }),
  contacts,
  screwsGasketsBaffles: [makeMountScrews(GUIDE, 4, 68, 2.5, [0, 90, 180, 270])],
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
      appliesTo:
        "stand-in bayonet lug sectors, mount ring outer diameters, lock rotation angle, contact pad size and axial stack",
      confidence: "low",
    },
    {
      ref: "xcd-3",
      sourceType: "official",
      citation:
        "Victor Hasselblad AB, X1D User Guide, version 1.8, 2017-12-19, pp. 51–52 (Remove and Attach a Lens) and p. 140 (Clean the Sensor Filter). The archive copy is an earlier 124-page edition with the same sections on pp. 51 and 123. Accessed 2026-11-21.",
      liveUrl: "https://cdn.hasselblad.com/manuals/x1d/current/en.pdf",
      archiveUrl: "https://www.manualslib.com/manual/1232924/Hasselblad-X1d.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: red mark on lens to red mark on body, then turn the lens clockwise to lock (the p. 52 arrow shows this as seen from the camera front). Figures: rendered views of the body mount from the camera front, slightly oblique, so angles are already in the camera-front frame and none were mirrored; nine contact pins at the bottom of the throat, four ring screws, a pin beside the lens removal button, index callout at the top of the ring. No dimensions or angles are printed; every angle and radius taken from these figures is photo-scaled",
      confidence: "medium",
    },
  ],
  openQuestions: [
    {
      issue:
        "Bayonet lug count, centre angles and spans are stand-ins. No dimensioned X-mount drawing was found: no Hasselblad X-mount utility patent turned up (the 2016 design patent USD868868 shows a different camera), the X1D User Guide and X2D II / XCD data sheets print no mount dimensions, and the user-guide renders do not resolve the lug edges.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "lockGeometry.lockRotationDeg"],
      candidateValues: [],
      resolution:
        "Needs Hasselblad service data, a dimensioned third-party X-mount drawing, or a calibrated measurement of a body and lens.",
    },
    {
      issue:
        "Contact row, lock pin, index and ring screw positions are photo-scaled from oblique user-guide renders (about +/-5 degrees; contact radius 24.5 to 27.5 mm, lock pin radius 32.5 to 34.5 mm, screw circle 65.5 to 69.5 mm, all scaled against the 61 mm throat). The nine contacts are counted on the body; no lens-rear figure was found, so the lens pads are assumed to mate one to one. Contact pad size and pinout are not sourced.",
      affectedFields: ["contacts", "coreDimensions.contactCount", "screwsGasketsBaffles"],
      candidateValues: [],
      resolution: "Replace with dimensioned positions from service data or a measured sample.",
    },
    {
      issue:
        "The user guide's red-mark callout and the top ring screw fall at the same place in the figures; whether the red mark is a separate dot beside that screw is not visible. The pin scaled as the lock pin is not labelled in the guide.",
      affectedFields: ["cameraSideFeatures.body-index-mark", "cameraSideFeatures.body-lock-pin"],
      candidateValues: [],
      resolution: "Check against a straight-on photograph of the body mount with a known scale.",
    },
    {
      issue:
        "The 18.14 mm register, 61 mm throat and ring outer diameters have no maker-stated value: Hasselblad's X1D guide, X2D II data sheet and XCD lens data sheets do not print them, and the adapter lengths Hasselblad lists (XH 53 mm, XV 64 mm, XPan 21.4 mm) are overall lengths, not register differences.",
      affectedFields: [
        "coreDimensions.flangeFocalDistanceMm",
        "coreDimensions.nominalThroatDiameterMm",
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
      ],
      candidateValues: [],
      resolution: "Upgrade if Hasselblad publishes the mount dimensions or a service drawing is found.",
    },
  ],
  includeElectricalLayers: true,
}) satisfies MountSpecInput;

export default HASSELBLAD_XCD_MOUNT;
