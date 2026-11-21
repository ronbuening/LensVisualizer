/**
 * Hasselblad H mount SVG specification.
 *
 * No dimensioned drawing of the H bayonet was located (no Victor Hasselblad AB or Fuji mount patent, no
 * service manual). Hasselblad's H2 and H6D user manuals give the attachment procedure in text, and maker
 * figures of body-side H mounts (H2 parts drawing, Macro Converter H photograph, Fujifilm H Mount Adapter G
 * drawing) agree on a nine-pin contact row at the bottom of the throat with a pin beside it and the red
 * index at the top. Those positions are scaled from the figures; lug geometry and ring diameters are still
 * stand-in values.
 */

import type { ContactFeature, MountSpecInput } from "../types/mount.js";
import { dirV, v } from "../optics/mount/authoring.js";
import {
  makeBayonetFeatures,
  makeMountScrews,
  makeSimpleMountSpec,
  makeStandardAxialStack,
} from "./mountAuthoringShared.js";

/** Register chart plus the label-only imagery note that still carries the lug, ring and screw stand-ins. */
const REF = ["hh-1", "hh-2"];
const IMAGERY = ["hh-2"];
/** Hasselblad H2 User Manual: attachment text and the parts drawing. */
const H2_MANUAL = ["hh-3"];
/** H2 manual, H6D guide (Macro Converter H photograph) and the Fujifilm H Mount Adapter G manual. */
const FIGURES = ["hh-3", "hh-4", "hh-5"];
const PROFILE = "hasselblad-h/base";

/*
 * Angles below are scaled from the Macro Converter H photograph (hh-4), a near-front oblique view of a
 * body-side H mount, read against the mount ring's ellipse with a parallax allowance for the recessed
 * contact block, and cross-checked against the two line drawings. Expect about +/-8 degrees. The pin is
 * placed from its offset beyond the end of the contact row, which the three figures agree on.
 */
const CONTACT_COUNT = 9;
const CONTACT_START_DEG = 160;
const CONTACT_STEP_DEG = 5;
const CONTACT_RADIUS_MM = 27;
const LOCK_PIN_ANGLE_DEG = 145;
const LOCK_PIN_RADIUS_MM = 29;

const base = makeBayonetFeatures({
  profileId: PROFILE,
  refs: REF,
  throatDiameterMm: 67.5,
  cameraOuterDiameterMm: 80,
  lensOuterDiameterMm: 78,
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
      centerAngleDeg: v(0, "photo_scaled", FIGURES),
      shapeNotes:
        "red index on the camera mount (H2 manual p. 8); figures show it at the top of the mount, no angle is stated",
    };
  }
  if (feature.featureId === "body-lock-pin") {
    return {
      ...feature,
      centerAngleDeg: v(LOCK_PIN_ANGLE_DEG, "photo_scaled", FIGURES),
      outerRadiusMm: v(LOCK_PIN_RADIUS_MM, "photo_scaled", FIGURES),
      shapeNotes:
        "pin inside the throat just beyond the end of the contact row, on the lens release button side; scaled from maker figures, which do not label it, so its lock function is inferred",
    };
  }
  return feature;
});

const lensSideFeatures = base.lensSideFeatures.map((feature) => {
  if (feature.featureId === "lens-index-mark") {
    return {
      ...feature,
      centerAngleDeg: v(0, "photo_scaled", H2_MANUAL),
      shapeNotes:
        "red index on the lens mount, aligned with the camera-mount red index before turning (H2 manual p. 8)",
    };
  }
  if (feature.featureId === "lens-lock-notch") {
    return {
      ...feature,
      centerAngleDeg: v(LOCK_PIN_ANGLE_DEG, "photo_scaled", FIGURES),
      outerRadiusMm: v(LOCK_PIN_RADIUS_MM, "photo_scaled", FIGURES),
      shapeNotes: "stored at the body pin position; the notch itself is not visible in any figure found",
    };
  }
  return feature;
});

const contacts: ContactFeature[] = (["body", "lens"] as const).flatMap((side) =>
  Array.from({ length: CONTACT_COUNT }, (_, index) => ({
    side,
    contactNo: index + 1,
    profileId: PROFILE,
    centerAngleDeg: v(CONTACT_START_DEG + index * CONTACT_STEP_DEG, "photo_scaled", FIGURES),
    centerRadiusMm: v(CONTACT_RADIUS_MM, "photo_scaled", FIGURES),
    widthMm: v(1.3, "photo_scaled", IMAGERY),
    heightMm: v(2.8, "photo_scaled", IMAGERY),
    shape: side === "body" ? "pin" : "pad",
    protrusionMm: v(side === "body" ? 0.4 : 0, "photo_scaled", IMAGERY),
    function: "",
  })),
);

const HASSELBLAD_H_MOUNT = makeSimpleMountSpec({
  mountId: "hasselblad-h",
  displayLabel: "Hasselblad H",
  projectNote: "Hasselblad H-system medium-format autofocus bayonet mount.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: [...REF, ...FIGURES],
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark", "electrical_contacts"],
  variantRequired: ["leaf_shutter_electrical_control"],
  referenceGrade: ["exact_lug_geometry", "contact_pinout"],
  appliesTo: "Hasselblad H-system bodies and HC/HCD lenses",
  adds: [
    "large medium-format bayonet",
    "nine-pin databus contact row at the bottom of the throat",
    "leaf-shutter communication",
  ],
  removes: [],
  changes: [
    "single base interface: the H2 (2005) and H6D (2018) manuals give the same index position and clockwise attachment, and no source shows a mechanical change between body or lens generations",
    "contact row, pin and index are scaled from maker figures; register and throat are chart values; lugs, ring diameters and screws remain stand-ins",
  ],
  flangeFocalDistanceMm: v(61.63, "secondary", REF),
  nominalThroatDiameterMm: v(67.5, "secondary", REF),
  effectiveClearApertureMm: v(67.5, "secondary", REF),
  cameraMountOuterDiameterMm: v(80, "photo_scaled", REF),
  lensMountOuterDiameterMm: v(78, "photo_scaled", REF),
  contactCount: v(CONTACT_COUNT, "conflicting", FIGURES),
  lockGeometry: {
    insertionAngleDeg: v(0, "photo_scaled", H2_MANUAL),
    lockAngleDeg: v(90, "official", H2_MANUAL),
    lockRotationDeg: v(90, "official", H2_MANUAL),
    lockRotationDirection: dirV("clockwise", "official", H2_MANUAL),
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
    electricalDiameterMm: CONTACT_RADIUS_MM * 2,
  }),
  contacts,
  screwsGasketsBaffles: [makeMountScrews(REF, 4, 74, 2.5, [45, 135, 225, 315])],
  sourceRefs: [
    {
      ref: "hh-1",
      sourceType: "secondary",
      citation: "Film and Digital Times / IB/E Optics mount chart. Accessed 2026-06-06.",
      liveUrl: "https://www.fdtimes.com/wp-content/uploads/2017/05/81-82-FDTimes-IBE-Optics-Update.pdf",
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
      appliesTo:
        "stand-in bayonet lug sectors, mount ring outer diameters, mount screws, contact pad size and axial stack",
      confidence: "low",
    },
    {
      ref: "hh-3",
      sourceType: "official",
      citation:
        "Victor Hasselblad AB, H2 User Manual, 2005, p. 6 (parts drawing, items 34, 42 and 44), p. 8 (step 8 and figures 5 and 8) and p. 30 (Attaching a lens). Accessed 2026-11-21.",
      liveUrl: "https://cdn.hasselblad.com/manuals/h2/H2_user_manual.pdf",
      archiveUrl: "https://www.manualslib.com/manual/66533/Hasselblad-H2.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: align the red index on the lens mount with the red index on the camera mount and turn approximately one quarter turn clockwise until it clicks; clockwise is as seen from the camera front (figure 5 draws the matching counter-clockwise cover removal from the front). Figures: p. 6 upper drawing is an oblique camera-front view of the body mount (nine databus pins at the bottom of the throat, a pin to their right), so no mirroring was applied; the lower drawing shows the lens rear obliquely and is used only for the pad count it draws (ten). No dimensions or angles are printed",
      confidence: "medium",
    },
    {
      ref: "hh-4",
      sourceType: "official",
      citation:
        "Victor Hasselblad AB, H6D User Guide, 2018, p. 51 (Change Lens) and p. 177 (Optional HC Lens Accessories, Macro Converter H photograph). The archive copy is a 192-page edition with the same sections on pp. 162 and 174. Accessed 2026-11-21.",
      liveUrl: "https://cdn.hasselblad.com/manuals/h6d/current/en.pdf",
      archiveUrl: "https://www.manualslib.com/manual/1081614/Hasselblad-H6d.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: red mark on the lens to red mark on the camera body, then turn the lens clockwise to lock. Figure: the Macro Converter H photograph shows the converter's front, a body-side H mount, from the front and slightly left, so angles are already in the camera-front frame and none were mirrored; red index at the top, nine contact pins at the bottom, a pin beyond the right end of the row. No dimensions or angles are printed; angles and radii taken from it are photo-scaled",
      confidence: "medium",
    },
    {
      ref: "hh-5",
      sourceType: "secondary",
      citation:
        "FUJIFILM Corporation, H MOUNT ADAPTER G Owner's Manual, pp. EN-5 (Parts of the Adapter) and EN-7 (Attaching Lenses). Accessed 2026-11-21.",
      liveUrl: "https://dl.fujifilm-x.com/support/manual/accessories/hmadapter_manual_ja_en_fr_de_zhs_es_it_ru_01.pdf",
      archiveUrl: "https://www.manualslib.mx/manual/275971/Fujifilm-H-Mount-Adapter-G.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "Fujifilm's body-side H mount on the GFX adapter, drawn obliquely from the front (no mirroring applied): lens mounting mark at the top, nine lens signal contacts at the bottom of the throat (one hidden behind the callout dot), a pin beyond the right end of the row, lens turned clockwise to attach. Used as a cross-check on count and arrangement only; it is not a Hasselblad body",
      confidence: "medium",
    },
  ],
  openQuestions: [
    {
      issue:
        "Bayonet lug count, centre angles and spans, the ring outer diameters and the mount screws are stand-ins. No dimensioned H-mount drawing was found: searches for Victor Hasselblad AB and Fuji Photo Optical mount patents from 2000 to 2003 found only US 7,500,796 (accessory status detection, no mount geometry), no H service manual was located, and the H2 and H6D manuals print no mount dimensions.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "screwsGasketsBaffles"],
      candidateValues: [],
      resolution:
        "Needs Hasselblad or Fujifilm service data, a dimensioned third-party H-mount drawing, or a calibrated measurement of a body and lens. Searched again on 2026-11-21: Google Patents for Hasselblad lens-mount and bayonet filings from 1995 to 2020 (18 results); the only H-system hit is the US 7,500,796 family.",
    },
    {
      issue:
        "Contact row, pin and index positions are photo-scaled from oblique maker figures (about +/-8 degrees; contact radius 25.5 to 29 mm and pin radius 26.5 to 33 mm, depending on which ring edge the 67.5 mm chart diameter refers to). Contact pad size and pinout are not sourced, and the pin's lock function is inferred from its place beside the lens release control.",
      affectedFields: ["contacts", "cameraSideFeatures.body-lock-pin", "lensSideFeatures.lens-lock-notch"],
      candidateValues: [],
      resolution: "Replace with dimensioned positions from service data or a measured sample.",
    },
    {
      issue:
        "Contact count: three maker figures of body-side H mounts show nine pins (H2 manual p. 6 body drawing, Macro Converter H photograph, Fujifilm adapter drawing), but the H2 manual's lens-rear drawing on the same page shows ten pads.",
      affectedFields: ["coreDimensions.contactCount", "contacts"],
      candidateValues: [9, 10],
      resolution: "Count the pads on a straight-on photograph of an HC lens rear, or use a service pinout.",
    },
    {
      issue:
        "Lock rotation is the H2 manual's wording, approximately one quarter turn; the exact detent angle is not sourced. The H6D guide gives the direction only.",
      affectedFields: ["lockGeometry.lockRotationDeg", "lockGeometry.lockAngleDeg"],
      candidateValues: [90],
      resolution: "Upgrade from a service drawing or a measured rotation between the index marks.",
    },
  ],
  includeElectricalLayers: true,
}) satisfies MountSpecInput;

export default HASSELBLAD_H_MOUNT;
