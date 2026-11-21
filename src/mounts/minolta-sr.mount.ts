/**
 * Minolta SR mount SVG specification.
 *
 * Minolta's manual-focus SLR bayonet (1958 to 2001): three lens lugs pass through three gaps in the body
 * ring and turn clockwise behind three inward body flanges. The bayonet, the mounting index, the lock and
 * the automatic-diaphragm lever stayed the same through all three generations, so they live in the base
 * profile. Variant profiles overlay what each generation added on the aperture ring and around the body
 * ring: `minolta-sr/sr` (automatic diaphragm only, 1958+), `minolta-sr/mc` (meter-coupling lug, 1966+) and
 * `minolta-sr/md` (meter-coupling lug plus minimum-aperture lug, 1977+). The MVP figure renders MD.
 *
 * Evidence. No dimensioned Minolta drawing, patent or service-manual page for the bayonet was found.
 * US4118726A (Minolta, 1977) is the MD patent: it states the two-lug scheme and shows both body followers
 * at the upper left of the mount seen from the front, but gives no angle and no dimension [msr-p1]. The
 * X-700 manual states the index alignment and the clockwise locking turn [msr-m1]. The 43.5 mm register,
 * the 44.97 mm throat and the 54 deg turn are unreferenced Wikipedia table values [msr-1, msr-3]. Every
 * angle and every other radius is scaled from two square-on Wikimedia Commons photographs of body mounts
 * (an SR-1 and an X-700) with the 44.97 mm figure taken as the bore the lugs pass through [msr-c1, msr-c2],
 * so they stay `photo_scaled` (about +/-3 deg, +/-0.5 mm). The lock position and a few lens-side sizes
 * still rest on the unsourced first draft [msr-2]. All of this is listed in openQuestions.
 *
 * Drawing convention: `body-slot-n` is one of the three inward body flanges, not the open gap beside it,
 * and the lens is drawn as mounted, so lens-lug-n sits behind that flange. The index marks share one
 * angle, and the lens lugs on the aperture ring share their body followers' angles. The clockwise turn
 * that carries the lugs from the gaps to behind the flanges lives only in lockGeometry.
 */

import type { CameraSideFeature, LensSideFeature, MountSpecInput } from "../types/mount.js";
import { dirV, naV, unknownV, v } from "../optics/mount/authoring.js";
import { makeMountScrews } from "./mountAuthoringShared.js";

const WF = ["msr-1"]; // Wikipedia flange-focal-distance table
const LEGACY = ["msr-2"]; // unsourced first-draft estimates that nothing better has replaced yet
const WT = ["msr-3"]; // Wikipedia lens-mount table: 44.97 mm throat, "Bayonet (54 deg)"
const WA = ["msr-4"]; // Wikipedia SR-mount article: generations and dates
const PAT = ["msr-p1"]; // US4118726A, the MD two-lug patent
const MAN = ["msr-m1"]; // Minolta X-700 instruction manual, p. 11
const C1 = ["msr-c1"]; // Commons photo, SR-1 body mount, camera-front view
const C2 = ["msr-c2"]; // Commons photo, X-700 body, camera-front view
const C1W = ["msr-c1", "msr-3"]; // SR-1 photo scaled by the 44.97 mm bore
const C2W = ["msr-c2", "msr-3"]; // X-700 photo scaled by the 44.97 mm bore
const C2P = ["msr-c2"]; // X-700 photo for the position; the patent [msr-p1] supports the arrangement only

const BASE = "minolta-sr/base";
const SR = "minolta-sr/sr";
const MC = "minolta-sr/mc";
const MD = "minolta-sr/md";

/** Half of the 44.97 mm throat, taken as the bore the lens lugs pass through. */
const BORE_RADIUS_MM = 22.485;
/** Inner edge of the body flanges: 0.931 of the bore radius on the SR-1 photo. */
const FLANGE_INNER_RADIUS_MM = 20.95;
/** Lug/flange engagement depth is an unsourced stand-in carried over from the first draft. */
const LUG_DEPTH_MM = 1.8;

/**
 * The three inward body flanges, measured on the SR-1 photo: [centre, start, end] in degrees. The open
 * entry gaps between them span 33 to 85, 159 to 219 and 270 to 325 deg.
 */
const SLOTS: [number, number, number][] = [
  [359, 325, 33],
  [122, 85, 159],
  [244.5, 219, 270],
];

function bodySlot(index: number): CameraSideFeature {
  const [center, start, end] = SLOTS[index - 1];
  return {
    featureId: `body-slot-${index}`,
    featureType: "bayonet_receiving_slot",
    profileId: BASE,
    count: 1,
    centerAngleDeg: v(center, "photo_scaled", C1),
    startAngleDeg: v(start, "photo_scaled", C1),
    endAngleDeg: v(end, "photo_scaled", C1),
    innerRadiusMm: v(FLANGE_INNER_RADIUS_MM, "photo_scaled", C1W),
    outerRadiusMm: v(BORE_RADIUS_MM, "secondary", WT),
    depthMm: v(LUG_DEPTH_MM, "photo_scaled", LEGACY),
    matesWith: `lens-lug-${index}`,
    shapeNotes:
      "inward body flange that retains a lens lug, scaled from the square-on SR-1 body photo (camera-front view, no conversion). The open entry gaps sit between the flanges at about 33 to 85, 159 to 219 and 270 to 325 deg. Each flange end is filleted over 3 to 5 deg, and the edge is taken at mid-fillet. The X-700 photo gives the same edges within about 4 deg. Depth is an unsourced stand-in",
  };
}

/** Widths of the entry gaps anticlockwise of flanges 1 to 3 (270-325, 33-85, 159-219 deg): upper bounds for the lugs. */
const LUG_MAX_SPANS = [55, 52, 60];

function lensLug(index: number): LensSideFeature {
  const [center] = SLOTS[index - 1];
  const halfSpan = LUG_MAX_SPANS[index - 1] / 2;
  return {
    featureId: `lens-lug-${index}`,
    featureType: "bayonet_lug",
    profileId: BASE,
    count: 1,
    centerAngleDeg: v(center, "photo_scaled", C1),
    startAngleDeg: v((center - halfSpan + 360) % 360, "photo_scaled", C1),
    endAngleDeg: v((center + halfSpan) % 360, "photo_scaled", C1),
    innerRadiusMm: v(FLANGE_INNER_RADIUS_MM, "photo_scaled", C1W),
    outerRadiusMm: v(BORE_RADIUS_MM, "photo_scaled", C1W),
    thicknessMm: v(LUG_DEPTH_MM, "photo_scaled", LEGACY),
    matesWith: `body-slot-${index}`,
    shapeNotes:
      "drawn where it sits on a mounted lens, behind the body flange of the same number, at that flange's centre. No square-on lens-rear photograph with a second stable copy was found, so the lug's own arc is not measured: it is drawn with the width of the entry gap anticlockwise of its flange, which it must pass through, and that is an upper bound. Radii are the flange band, an upper bound; thickness is an unsourced stand-in",
  };
}

const MINOLTA_SR_MOUNT = {
  mountId: "minolta-sr",
  displayLabel: "Minolta SR",
  projectNote: "Minolta SR manual-focus SLR bayonet mount (SR, MC and MD generations).",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["meter_coupling_lug", "minimum_aperture_lug"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_arc_and_thickness", "coupling_lug_travel", "lock_latch_position"],
    },
    profileModel: {
      baseProfileId: BASE,
      selectedMvpProfileId: MD,
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: BASE,
          profileType: "base",
          appliesTo: "every Minolta SR-mount body and lens, 1958 to 2001 (SR, MC and MD generations)",
          adds: [
            "three-lug bayonet on a 44.97 mm body bore",
            "red mounting index",
            "lens lock released by a button beside the mount",
            "automatic-diaphragm lever inside the mirror box",
          ],
          removes: [],
          changes: [],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: ["msr-1", "msr-3", "msr-4", "msr-m1", "msr-c1", "msr-c2"],
        },
        {
          profileId: SR,
          profileType: "variant",
          appliesTo: "SR bodies and Auto Rokkor lenses, 1958 to 1966",
          adds: [],
          removes: [],
          changes: [
            "automatic diaphragm only: no coupling lug on the aperture ring and no follower on the body, so the figure is the base alone",
          ],
          status: "partial",
          sourceRefs: [...WA, ...C1],
        },
        {
          profileId: MC,
          profileType: "variant",
          appliesTo: "MC (meter-coupled) lenses and full-aperture-metering bodies, 1966 to 1977",
          adds: ["meter-coupling lug on the aperture ring", "its follower on a ring around the body mount"],
          removes: [],
          changes: ["the lug reports how many stops the ring is set below full aperture"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...WA, ...PAT, ...C2],
        },
        {
          profileId: MD,
          profileType: "variant",
          appliesTo: "MD lenses and shutter-priority or program bodies (XD, X-700 and later), 1977 to 2001",
          adds: [
            "minimum-aperture lug on the aperture ring",
            "its follower lever beside the meter-coupling follower on the body",
          ],
          removes: [],
          changes: [
            "keeps the meter-coupling lug unchanged; the second lug reaches its follower only with the ring at minimum aperture and reports whether that is f/16, f/22 or f/32",
          ],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "partial",
          sourceRefs: [...WA, ...PAT, ...C2, "msr-c3"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(43.5, "secondary", ["msr-1", "msr-3"]),
    nominalThroatDiameterMm: v(44.97, "secondary", WT),
    effectiveClearApertureMm: v(41.9, "photo_scaled", ["msr-c1", "msr-3", "msr-5"]),
    cameraMountOuterDiameterMm: v(57.3, "photo_scaled", C1W),
    lensMountOuterDiameterMm: v(53, "photo_scaled", LEGACY),
    contactCount: naV(),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "official", MAN),
    lockAngleDeg: v(54, "secondary", WT),
    lockRotationDeg: v(54, "secondary", WT),
    lockRotationDirection: dirV("clockwise", "official", MAN),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", WT),
      startAngleDeg: v(0, "secondary", WT),
      endAngleDeg: v(360, "secondary", WT),
      innerRadiusMm: v(0, "secondary", WT),
      outerRadiusMm: v(BORE_RADIUS_MM, "secondary", WT),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "44.97 mm throat, taken as the bore the lens lugs pass through. The three inward flanges narrow the clear opening to about 41.9 mm (photo-scaled)",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", C1),
      startAngleDeg: v(0, "photo_scaled", C1),
      endAngleDeg: v(360, "photo_scaled", C1),
      innerRadiusMm: v(BORE_RADIUS_MM, "secondary", WT),
      outerRadiusMm: v(28.65, "photo_scaled", C1W),
      depthMm: naV(),
      matesWith: "",
      shapeNotes:
        "bright body mount ring; its outer edge is 1.274 of the bore radius on the SR-1 photo. The X-700 ring scales about 1 mm smaller in diameter, inside the photo error",
    },
    bodySlot(1),
    bodySlot(2),
    bodySlot(3),
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(1, "photo_scaled", C2),
      startAngleDeg: unknownV(C2),
      endAngleDeg: unknownV(C2),
      innerRadiusMm: unknownV(C2),
      outerRadiusMm: v(25.5, "photo_scaled", C2W),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes:
        "red index dot on the face of the mount ring, read at 1 deg (+/-2) on the X-700 photo. The SR-1 photo does not show an index on the ring, so the position on 1958-era bodies is not confirmed",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(90, "photo_scaled", LEGACY),
      startAngleDeg: unknownV(LEGACY),
      endAngleDeg: unknownV(LEGACY),
      innerRadiusMm: unknownV(LEGACY),
      outerRadiusMm: v(23.5, "photo_scaled", LEGACY),
      depthMm: v(LUG_DEPTH_MM, "photo_scaled", LEGACY),
      matesWith: "lens-lock-notch",
      shapeNotes:
        "unsourced first-draft position, kept because neither body photo shows the latch. The manual names only a lens-release button; on the X-700 photo that button sits outside the ring at about 56 deg",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "secondary", WT),
      startAngleDeg: v(0, "secondary", WT),
      endAngleDeg: v(360, "secondary", WT),
      innerRadiusMm: v(0, "secondary", WT),
      outerRadiusMm: unknownV(C1),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes:
        "rear opening inside the bayonet barrel; no source gives its size. The first draft's 21.5 mm radius was dropped because the barrel has to pass the 41.9 mm clear opening between the body flanges",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", LEGACY),
      startAngleDeg: v(0, "photo_scaled", LEGACY),
      endAngleDeg: v(360, "photo_scaled", LEGACY),
      innerRadiusMm: unknownV(C1),
      outerRadiusMm: v(26.5, "photo_scaled", LEGACY),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring; the 53 mm outer diameter is an unsourced first-draft estimate",
    },
    lensLug(1),
    lensLug(2),
    lensLug(3),
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(1, "photo_scaled", C2),
      startAngleDeg: unknownV(C2),
      endAngleDeg: unknownV(C2),
      innerRadiusMm: unknownV(C2),
      outerRadiusMm: v(27, "photo_scaled", LEGACY),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes:
        "red mounting index on the lens barrel, stored at the body index angle it is aligned with for insertion. Its radius is an unsourced first-draft estimate",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: BASE,
      count: 1,
      centerAngleDeg: v(90, "photo_scaled", LEGACY),
      startAngleDeg: unknownV(LEGACY),
      endAngleDeg: unknownV(LEGACY),
      innerRadiusMm: unknownV(LEGACY),
      outerRadiusMm: v(23.5, "photo_scaled", LEGACY),
      thicknessMm: v(LUG_DEPTH_MM, "photo_scaled", LEGACY),
      matesWith: "body-lock-pin",
      shapeNotes:
        "stored at the body lock position, which is itself unsourced. The oblique Commons photo of an MC Rokkor rear shows a notch at one end of one bayonet lug, which is where the latch would engage",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", WF),
      thicknessMm: v(0, "secondary", WF),
      diameterMm: v(57.3, "photo_scaled", C1W),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1.2, "photo_scaled", LEGACY),
      thicknessMm: v(LUG_DEPTH_MM, "photo_scaled", LEGACY),
      diameterMm: v(44.97, "secondary", WT),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-43.5, "secondary", WF),
      thicknessMm: v(0, "secondary", WF),
      diameterMm: v(43.3, "secondary", WF),
    },
  ],

  contacts: [],

  mechanicalCouplings: [
    {
      featureId: "aperture-actuation-lever",
      side: "both",
      profileId: BASE,
      centerAngleDeg: v(159, "photo_scaled", C1),
      radiusMm: v(19, "photo_scaled", C1W),
      sizeOrTravel: "lever blade, seen from about 17 to 22 mm radius; sideways travel not sourced",
      function: "holds the lens diaphragm open and lets it stop down at exposure",
      compatibilityNotes:
        "common to all three generations: the blade sits at 159 deg on the SR-1 photo and at 158 deg on the X-700 photo, both at rest with no lens. The lens-side pin is stored at the same angle",
    },
    {
      featureId: "meter-coupling-tab",
      side: "both",
      profileId: MC,
      centerAngleDeg: v(334, "photo_scaled", C2P),
      radiusMm: v(31.3, "photo_scaled", C2W),
      sizeOrTravel: "follower tab about 7 deg wide at rest; travel per stop not sourced",
      function: "reports how many stops the aperture ring is set below full aperture",
      compatibilityNotes:
        "position scaled from the follower at rest on an MD-era X-700 body, not from a 1966-era body; US4118726A states the lug sits at one fixed offset from the full-aperture mark on every lens and still works on earlier bodies. The lens lug is stored at the follower angle, where it sits at full aperture",
    },
    {
      featureId: "meter-coupling-tab-md",
      side: "both",
      profileId: MD,
      centerAngleDeg: v(334, "photo_scaled", C2P),
      radiusMm: v(31.3, "photo_scaled", C2W),
      sizeOrTravel: "follower tab about 7 deg wide at rest; travel per stop not sourced",
      function: "reports how many stops the aperture ring is set below full aperture",
      compatibilityNotes:
        "MD keeps the meter-coupling lug unchanged (first transmitting member 5 and receiving member 6 of US4118726A); scaled from the follower at rest on the X-700 photo",
    },
    {
      featureId: "minimum-aperture-tab",
      side: "both",
      profileId: MD,
      centerAngleDeg: v(310, "photo_scaled", C2P),
      radiusMm: v(31.9, "photo_scaled", C2W),
      sizeOrTravel:
        "follower pin in a slot running from about 306 to 322 deg; the three lug offsets are not dimensioned",
      function: "signals that the ring is at minimum aperture and whether that is f/16, f/22 or f/32",
      compatibilityNotes:
        "second transmitting member 8 and receiving member 9 of US4118726A, which places the follower below the meter-coupling follower at the upper left of the mount seen from the front and makes the lug longer along the axis so the shorter meter lug passes under it. Angle and radius are the follower pin at rest on the X-700 photo; the lens lug reaches it only at minimum aperture",
    },
  ],

  screwsGasketsBaffles: [makeMountScrews(C1W, 4, 53, 3.5, [45, 135, 225, 315])],

  svgLayers: {
    mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
    conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
    variantRequired: ["camera-side-variant-mechanical", "lens-side-variant-mechanical"],
  },

  sourceRefs: [
    {
      ref: "msr-1",
      sourceType: "secondary",
      citation: "“Flange focal distance,” Wikipedia. Accessed 2026-06-06.",
      liveUrl: "https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveUrl: "http://web.archive.org/web/20260526152456/https://en.wikipedia.org/wiki/Flange_focal_distance",
      archiveDate: "2026-05-26",
      appliesTo: "43.5 mm Minolta SR register",
      confidence: "medium",
    },
    {
      ref: "msr-2",
      sourceType: "secondary",
      citation: "Minolta SR/MC/MD mount visual references. Accessed 2026-06-06.",
      liveUrl: "Minolta SR camera/lens rear imagery",
      archiveUrl: "unknown",
      archiveDate: "unknown",
      appliesTo:
        "unsourced first-draft estimates still in use: lock pin and notch position, lens flange outer diameter, lens index radius, lug depth and thickness, and the axial position of the lug plane",
      confidence: "low",
    },
    {
      ref: "msr-3",
      sourceType: "secondary",
      citation:
        "“Lens mount,” Wikipedia, table of lens mounts, revision of 2026-11-13. Accessed 2026-11-21. Second copy: the permanent link to that revision.",
      liveUrl: "https://en.wikipedia.org/wiki/Lens_mount",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Lens_mount&oldid=1385498741",
      archiveDate: "2026-11-21",
      appliesTo:
        "Row “Minolta SR, 43.50 mm, 44.97 mm, Bayonet (54°)”. The row carries no reference, the page does not say which diameter the throat column means, and the same 54° appears in its Minolta A row. 44.97 mm is used here as the bore the lugs pass through and as the scale for both photographs",
      confidence: "low",
    },
    {
      ref: "msr-4",
      sourceType: "secondary",
      citation:
        "“Minolta SR-mount,” Wikipedia, revision of 2025-02-20. Accessed 2026-11-21. Second copy: the permanent link to that revision.",
      liveUrl: "https://en.wikipedia.org/wiki/Minolta_SR-mount",
      archiveUrl: "https://en.wikipedia.org/w/index.php?title=Minolta_SR-mount&oldid=1276636299",
      archiveDate: "2026-11-21",
      appliesTo:
        "three bayonet tabs; generations and dates (SR automatic diaphragm 1958 to 1966, MC coupling lug on the aperture ring 1966 to 1977, MD minimum-aperture tab 1977 to 2001); no positions or dimensions",
      confidence: "medium",
    },
    {
      ref: "msr-5",
      sourceType: "secondary",
      citation:
        "S. H. Westin, “Alphabetical List of Camera Mounts,” data from W.-J. Markerink, last modified 2016-02-11. Accessed 2026-11-21. Second copy: the same row on the site's by-register page.",
      liveUrl: "https://www.graphics.cornell.edu/~westin/misc/mounts-alphabetical.html",
      archiveUrl: "https://www.graphics.cornell.edu/~westin/misc/mounts-by-register.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "Row “Minolta SR/MC/MD, bayonet, 43.72 +0.01 -0.02, 41”. The page says 43.72 mm is a service-manual figure measured to the pressure-plate rails, not the film-plane register. The diameter column is not defined; 41 mm is cited only as rough support for the photo-scaled 41.9 mm clear opening between the body flanges",
      confidence: "low",
    },
    {
      ref: "msr-p1",
      sourceType: "patent",
      citation:
        'Y. Kuramoto, H. Ueda, and K. Uesugi (Minolta Camera K.K.), US4118726A, "Exchangeable lenses for use in internal light measuring type single lens reflex cameras," filed 1977-02-17, issued 1978-10-03. Accessed 2026-11-21.',
      liveUrl: "https://patents.google.com/patent/US4118726A/en",
      archiveUrl: "https://patentimages.storage.googleapis.com/4f/58/80/5dae08a1eaedb7/US4118726.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "MD two-lug scheme, arrangement only. Description of Figs. 1 to 5: first transmitting member 5 on the diaphragm ring at one fixed offset from the full-aperture mark on every lens, engaging body member 6; second transmitting member 8, longer along the axis, engaging body member 9 only at the minimum-aperture setting, with three offsets for f/16, f/22 and f/32. Fig. 1 is a perspective view from the camera front and shows members 6 and 9 at the upper left of the mount, 9 below 6. No angle, no dimension and no bayonet detail is stated",
      confidence: "high",
    },
    {
      ref: "msr-m1",
      sourceType: "official",
      citation:
        "Minolta Camera Co., Ltd., Minolta X-700 instruction manual, “Mounting and care of lenses,” p. 11. Accessed 2026-11-21. Second copy: the scan hosted by cameramanuals.org (PDF page 14).",
      liveUrl: "https://www.manualslib.com/manual/368228/Minolta-X-700.html?page=13",
      archiveUrl: "https://www.cameramanuals.org/minolta_pdf/minolta_x-700.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "“align the red mounting index on the lens barrel with the red index on the camera's lens mount, insert the lens bayonet into the socket, then turn the lens clockwise until it locks into place with a click”; removal by the lens-release button and a counterclockwise turn. The photographs beside the text are taken from the camera front, so clockwise is the camera-front sense. No angle is stated",
      confidence: "high",
    },
    {
      ref: "msr-c1",
      sourceType: "secondary",
      citation:
        "Runner1616, “Minolta SR mount” (female mount of a Minolta SR-1), photograph, Wikimedia Commons, 2025-02-25, CC BY-SA 4.0. Accessed 2026-11-21. Second copy: the original file on upload.wikimedia.org.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:Minolta_SR_mount.jpg",
      archiveUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Minolta_SR_mount.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "square-on camera-front view of an SR-1 body mount (3180 x 3103 px), so angles are read directly with no conversion; the four mount screws fall at 45/135/225/315 deg within 1 deg, which fixes the roll. Scaled with the bore in the gaps taken as 44.97 mm: gap and flange edges, flange inner edge, ring outer edge, screw circle and head size, and the diaphragm lever at rest. One uncalibrated photograph, about +/-3 deg and +/-0.5 mm",
      confidence: "low",
    },
    {
      ref: "msr-c2",
      sourceType: "secondary",
      citation:
        "M. Pettitt, “Close-up front view of Minolta X-700 SLR camera without lens,” photograph, Wikimedia Commons (from Flickr), 2022-04-15, CC BY 2.0. Accessed 2026-11-21. Second copy: the original file on upload.wikimedia.org.",
      liveUrl:
        "https://commons.wikimedia.org/wiki/File:Close-up_front_view_of_Minolta_X-700_SLR_camera_without_lens.jpg",
      archiveUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Close-up_front_view_of_Minolta_X-700_SLR_camera_without_lens.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "near square-on camera-front view of an X-700 body (1289 x 1766 px), angles read directly. Scaled with the bore in the gaps taken as 44.97 mm: red index dot, meter-coupling follower tab and minimum-aperture follower pin at rest with no lens, lens-release button, and a check that the gaps, screws and diaphragm lever match the SR-1 within about 4 deg. One uncalibrated photograph",
      confidence: "low",
    },
    {
      ref: "msr-c3",
      sourceType: "secondary",
      citation:
        "smial, “Bajonett manual minolta” (Minolta XD-7 body and MC Rokkor 58 mm f/1.4 rear), photograph, Wikimedia Commons, 2005-12-09, CC BY-SA 2.0 DE. Accessed 2026-11-21. Second copy: the original file on upload.wikimedia.org.",
      liveUrl: "https://commons.wikimedia.org/wiki/File:Bajonett_manual_minolta.jpg",
      archiveUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bajonett_manual_minolta.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "oblique view of an MC lens rear and an XD-7 body front, used for arrangement only: three lens lugs, a notch at one end of one lug, the coupling lug on the aperture ring, the diaphragm pin, and on the body the two followers at the upper left. No value is scaled from it",
      confidence: "low",
    },
  ],

  openQuestions: [
    {
      issue:
        "No dimensioned source for the bayonet was found. The body flanges come from one SR-1 photograph (about +/-3 deg), and the lens lugs are drawn behind them at the width of the gaps they enter through, an upper bound, because no usable lens-rear photograph was found, so true lug arcs, lug thickness and the flange ramp are unknown. The 1.8 mm depth and the axial lug plane still rest on the unsourced first draft [msr-2].",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "axialStack"],
      candidateValues: [],
      resolution:
        "A Minolta mount drawing, a patent with stated angles, or a calibrated measurement of a body ring and a lens bayonet.",
    },
    {
      issue:
        "Every photo-scaled millimetre value assumes the Wikipedia 44.97 mm throat is the bore the lugs pass through. The table row has no reference and does not define the diameter. On that scale the clear opening between the flanges is 41.9 mm and the ring is 57.3 mm across; Westin's list gives an undefined 41 mm.",
      affectedFields: [
        "nominalThroatDiameterMm",
        "effectiveClearApertureMm",
        "cameraMountOuterDiameterMm",
        "mechanicalCouplings",
        "screwsGasketsBaffles",
      ],
      candidateValues: [44.97, 41.9, 41],
      resolution: "A sourced bore and flange diameter.",
    },
    {
      issue:
        "The 54 deg locking turn is known only from the unreferenced Wikipedia table, which shows the same figure for the Minolta A mount. The first draft used 60. The body photo allows roughly 51 to 63 deg, so it does not decide between them; the manual states the direction but no angle.",
      affectedFields: ["lockAngleDeg", "lockRotationDeg"],
      candidateValues: [54, 60],
      resolution:
        "A Minolta figure for the turn, or the angle between the red dot and the aperture index measured on a lens.",
    },
    {
      issue:
        "The lock pin and notch position (90 deg, 23.5 mm) still rests only on the unsourced first draft [msr-2]. Neither body photograph shows the latch. Two places would fit the flange geometry: the start of the right-hand flange at about 85 deg, and the pocket at the end of the top flange at about 30 to 35 deg.",
      affectedFields: ["body-lock-pin", "lens-lock-notch"],
      candidateValues: [90, 85, 33],
      resolution: "A service-manual exploded view of the mount, or a photograph with the latch visible.",
    },
    {
      issue:
        "Lens-side sizes still on the unsourced first draft [msr-2]: flange outer diameter 53 mm and index radius 27 mm. The lens rear opening is now unknown; its first-draft 21.5 mm radius could not pass the 41.9 mm clear opening.",
      affectedFields: ["lensMountOuterDiameterMm", "lens-throat", "lens-mount-ring", "lens-index-mark"],
      candidateValues: [],
      resolution: "A square-on lens-rear photograph with a scale, or a lens service drawing.",
    },
    {
      issue:
        "The meter-coupling and minimum-aperture followers are placed from one X-700 photograph at rest with no lens. The MC profile reuses that position because no square-on photo of a 1966-era body was found. Lug sizes, travel per stop and the three minimum-aperture offsets are not dimensioned; US4118726A states the scheme only.",
      affectedFields: ["mechanicalCouplings"],
      candidateValues: [],
      resolution:
        "Minolta SR-T, XD or X-700 service-manual dimensions for the coupling ring and lever, or measured lenses.",
    },
    {
      issue:
        "The 43.5 mm register is a Wikipedia table value. The Minolta X-700 service manual gives a body back of 43.72 +0.01/-0.02 mm measured to the pressure-plate contact surface, which is a different plane; it was not added as a source because no second copy on another host was found.",
      affectedFields: ["flangeFocalDistanceMm", "axialStack"],
      candidateValues: [43.5, 43.72],
      resolution: "A Minolta statement of the film-plane register.",
    },
    {
      issue:
        "The body index is read from the X-700 only. The SR-1 photograph shows no index on the ring face, so its position on 1958-era bodies is not confirmed.",
      affectedFields: ["body-index-mark", "lens-index-mark"],
      candidateValues: [],
      resolution: "A front photograph or manual figure of an SR-1, SR-2 or SR-7 showing the index.",
    },
  ],
} satisfies MountSpecInput;

export default MINOLTA_SR_MOUNT;
