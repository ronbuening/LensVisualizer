/**
 * Zeiss Contarex mount SVG specification.
 *
 * Zeiss Ikon's 1959 Contarex bayonet is built the other way round from most SLR mounts: the body
 * carries three outward lugs on a short barrel, the lens carries a female bayonet (three openings
 * between three inward tabs), and the release button and lock pin are on the body. The lens has no
 * aperture ring; a ring gear around the optical axis in the body turns the lens diaphragm ring, and
 * a nose on the lens, clocked by the lens's speed, shifts the body's aperture index.
 *
 * Evidence. No source found states a mount diameter or a mount angle, so everything drawn is
 * `photo_scaled`. Angles on the body come from the lensless front photos in the Contarex and
 * Contarex Special manuals [zcx-man1, zcx-man2] (camera-front views, read with the foreshortening
 * taken off using the mount-ring screws). The lens-side pattern comes from JAPB's annotated
 * lens-rear photo [zcx-japb], converted with theta_front = (K - theta_rear) and clocked by its lock
 * groove sitting on the body lock pin. DE1230309B [zcx-p1] supports the arrangement of the two
 * couplings only. Radii are the first draft's stand-ins, kept because JAPB's proportions agree with
 * them; they hang on an unsourced 56 mm lens rear ring.
 *
 * Generations. The Contarex I, Special, Professional and Super Electronic manuals show the same
 * bayonet, release button and index dot [zcx-man1..4], so there is one base profile. The flash
 * ("Blitz") lenses add a pin through a recess in the lens mount face in DE1230309B, but no source
 * gives its position or shows it on a production body; it is recorded in openQuestions, not drawn.
 *
 * Angle convention: each lens-side feature is stored at the camera-front angle of the body feature
 * it mates with (openings on their lugs at insertion, lock groove on the lock pin). The quarter
 * turn lives only in lockGeometry.
 */

import type { CameraSideFeature, LensSideFeature, MountSpecInput } from "../types/mount.js";
import { dirV, naV, unknownV, v } from "../optics/mount/authoring.js";
import { makeMountScrews, makeSimpleMountSpec, makeStandardAxialStack } from "./mountAuthoringShared.js";

const M1 = ["zcx-man1"]; // Contarex (1959/60) instructions
const MAN = ["zcx-man1", "zcx-man2"]; // both lensless front photos
const MANUALS = ["zcx-man1", "zcx-man2", "zcx-man3"]; // lens-changing text, three bodies
const J = ["zcx-japb"]; // JAPB annotated lens-rear photo
const P = ["zcx-p1f"]; // DE1230309B Fig. 2, scaled
const MJ = ["zcx-man1", "zcx-man2", "zcx-japb"];
const WJ = ["zcx-westin", "zcx-japb"]; // 46 mm register
const ALL = ["zcx-man1", "zcx-man2", "zcx-man3", "zcx-man4", "zcx-p1", "zcx-japb", "zcx-westin"];

const PROFILE = "zeiss-contarex/base";

/** Body lug span read off the two manual photos (33 to 35 deg). */
const LUG_SPAN_DEG = 34;

function bodyLug(index: number, centerDeg: number, note: string): CameraSideFeature {
  return {
    featureId: `body-lug-${index}`,
    featureType: "bayonet_lug",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", MJ),
    startAngleDeg: v(centerDeg - LUG_SPAN_DEG / 2, "photo_scaled", MJ),
    endAngleDeg: v(centerDeg + LUG_SPAN_DEG / 2, "photo_scaled", MJ),
    innerRadiusMm: v(23, "photo_scaled", J),
    outerRadiusMm: v(25, "photo_scaled", J),
    depthMm: unknownV(MJ),
    matesWith: `lens-slot-${index}`,
    shapeNotes: `outward lug on the body bayonet barrel, about 34 deg. ${note}`,
  };
}

function lensSlot(index: number, centerDeg: number, spanDeg: number, rearSpan: string): LensSideFeature {
  return {
    featureId: `lens-slot-${index}`,
    featureType: "bayonet_receiving_slot",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(centerDeg, "photo_scaled", MJ),
    startAngleDeg: v(centerDeg - spanDeg / 2, "photo_scaled", MJ),
    endAngleDeg: v(centerDeg + spanDeg / 2, "photo_scaled", MJ),
    innerRadiusMm: v(23.5, "photo_scaled", J),
    outerRadiusMm: v(25, "photo_scaled", J),
    thicknessMm: unknownV(J),
    matesWith: `body-lug-${index}`,
    shapeNotes: `opening, about ${spanDeg} deg, between two inward tabs of the lens's female bayonet; ${rearSpan} on the JAPB lens-rear photo. Stored on the body lug it passes over at insertion. The tab that then turns onto the lug ends in a slit spring finger`,
  };
}

const cameraSideFeatures: CameraSideFeature[] = [
  {
    featureId: "body-throat",
    featureType: "body_throat",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(0, "photo_scaled", J),
    startAngleDeg: v(0, "photo_scaled", J),
    endAngleDeg: v(360, "photo_scaled", J),
    innerRadiusMm: v(0, "photo_scaled", J),
    outerRadiusMm: v(23, "photo_scaled", J),
    depthMm: naV(),
    matesWith: "",
    shapeNotes:
      "outside of the body bayonet barrel that the lens tabs ride on, 46 mm stand-in; the clear light opening inside the barrel and the aperture ring gear is smaller and unsourced",
  },
  {
    featureId: "body-mount-ring",
    featureType: "mount_ring",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(0, "photo_scaled", MAN),
    startAngleDeg: v(0, "photo_scaled", MAN),
    endAngleDeg: v(360, "photo_scaled", MAN),
    innerRadiusMm: v(23, "photo_scaled", J),
    outerRadiusMm: v(29, "photo_scaled", MAN),
    depthMm: naV(),
    matesWith: "",
    shapeNotes:
      "screwed mount plate around the bayonet barrel, visible in both manual photos; the 58 mm outer diameter is the first draft's stand-in, not scaled against a known dimension",
  },
  bodyLug(
    1,
    51,
    "Upper right seen from the front: 38 to 72 deg on the Contarex manual Fig. 13 and 39 to 70 deg on the Contarex Special manual Fig. 13 (both camera-front views). The stored centre is the best fit of JAPB's three-opening pattern to the two lugs visible in those photos",
  ),
  bodyLug(
    2,
    172,
    "Near the bottom; hidden by the camera's lower rim in both manual photos. Placed from JAPB's lens openings, which the three lugs must pass through together (121 deg clockwise of lug 1)",
  ),
  bodyLug(
    3,
    303,
    "Upper left seen from the front: 282 to 317 deg on the Contarex manual Fig. 13 and 282 to 315 deg on the Contarex Special manual Fig. 13. JAPB's pattern puts it 108.5 deg anticlockwise of lug 1; the photos read 116 deg",
  ),
  {
    featureId: "body-index-mark",
    featureType: "index_mark",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(45, "photo_scaled", MAN),
    startAngleDeg: unknownV(MAN),
    endAngleDeg: unknownV(MAN),
    innerRadiusMm: unknownV(MAN),
    outerRadiusMm: v(29.5, "photo_scaled", MAN),
    depthMm: naV(),
    matesWith: "lens-index-mark",
    shapeNotes:
      "red dot on the front plate above right of the mount (item 10 in the Contarex manual, item 5 in the Special manual). It reads 44 to 45 deg on the Contarex manual's front view and on both Fig. 13 photos; the radius is a stand-in just outside the mount plate",
  },
  {
    featureId: "body-lock-pin",
    featureType: "lock_pin",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(82.5, "photo_scaled", MAN),
    startAngleDeg: unknownV(MAN),
    endAngleDeg: unknownV(MAN),
    innerRadiusMm: unknownV(MAN),
    outerRadiusMm: v(26.5, "photo_scaled", J),
    depthMm: unknownV(MAN),
    matesWith: "lens-lock-notch",
    shapeNotes:
      "small pin on the mount plate just above 3 o'clock, outside the lug circle, beside the release button: 82.8 deg on the Contarex manual Fig. 13 and 82.2 deg on the Special manual Fig. 13. Its radius is taken from the mating groove on JAPB's lens-rear photo",
  },
  {
    featureId: "body-release-button",
    featureType: "lens_release_button",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(73, "photo_scaled", MAN),
    startAngleDeg: unknownV(MAN),
    endAngleDeg: unknownV(MAN),
    innerRadiusMm: unknownV(MAN),
    outerRadiusMm: v(33, "photo_scaled", MAN),
    depthMm: naV(),
    matesWith: "",
    shapeNotes:
      "button for exchange of lenses on the front plate right of the mount (item 9 in the Contarex manual, item 6 in the Special manual); pressing it frees the lens and it springs out again when the lens locks. 72 to 73 deg on both Fig. 13 photos; the radius reads between 30 and 35 mm depending on the figure",
  },
];

const lensSideFeatures: LensSideFeature[] = [
  {
    featureId: "lens-throat",
    featureType: "lens_throat",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(0, "photo_scaled", J),
    startAngleDeg: v(0, "photo_scaled", J),
    endAngleDeg: v(360, "photo_scaled", J),
    innerRadiusMm: v(0, "photo_scaled", J),
    outerRadiusMm: v(17.8, "photo_scaled", J),
    thicknessMm: naV(),
    matesWith: "",
    shapeNotes:
      "rear opening inside the aperture control ring, 0.64 of the rear ring's outer radius on the JAPB photo (a Sonnar 135 mm f/4)",
  },
  {
    featureId: "lens-mount-ring",
    featureType: "lens_mount_ring",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(0, "photo_scaled", J),
    startAngleDeg: v(0, "photo_scaled", J),
    endAngleDeg: v(360, "photo_scaled", J),
    innerRadiusMm: v(23.5, "photo_scaled", J),
    outerRadiusMm: v(28, "photo_scaled", J),
    thicknessMm: naV(),
    matesWith: "",
    shapeNotes:
      "rear bayonet ring of the lens; its inner edge is the tab bore, 0.84 of the outer radius on the JAPB photo. The 56 mm outer diameter is the first draft's stand-in and sets the scale of every lens-side radius",
  },
  lensSlot(1, 51, 39, "21 to 60 deg"),
  lensSlot(2, 172, 35, "262 to 297 deg"),
  lensSlot(3, 303, 36, "131 to 167 deg"),
  {
    featureId: "lens-stop-key",
    featureType: "rotation_stop_key",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(192, "photo_scaled", J),
    startAngleDeg: v(189.5, "photo_scaled", J),
    endAngleDeg: v(194.5, "photo_scaled", J),
    innerRadiusMm: v(23, "photo_scaled", J),
    outerRadiusMm: v(25, "photo_scaled", J),
    thicknessMm: unknownV(J),
    matesWith: "body-lug-2",
    shapeNotes:
      "small inward tooth at one end of opening 2 (257 to 262 deg on the JAPB lens-rear photo), reaching slightly further in than the tabs. It sits against body lug 2 at insertion; on locking, body lug 3 comes round to its other side after about 90 deg. Read as the rotation stop from the photo; no source names it",
  },
  {
    featureId: "lens-index-mark",
    featureType: "index_mark",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(45, "photo_scaled", MAN),
    startAngleDeg: unknownV(MAN),
    endAngleDeg: unknownV(MAN),
    innerRadiusMm: unknownV(MAN),
    outerRadiusMm: v(28.5, "photo_scaled", MAN),
    thicknessMm: naV(),
    matesWith: "body-index-mark",
    shapeNotes:
      "red dot on the side of the lens's rear ring, set against the body's red dot to insert and remove (Fig. 12 of both manuals); stored on the body dot",
  },
  {
    featureId: "lens-lock-notch",
    featureType: "lock_notch",
    profileId: PROFILE,
    count: 1,
    centerAngleDeg: v(82.5, "photo_scaled", MJ),
    startAngleDeg: unknownV(J),
    endAngleDeg: unknownV(J),
    innerRadiusMm: unknownV(J),
    outerRadiusMm: v(26.5, "photo_scaled", J),
    thicknessMm: unknownV(J),
    matesWith: "body-lock-pin",
    shapeNotes:
      "locking groove cut into the rim of the rear ring, about 5 deg wide, at 100.5 deg on the JAPB lens-rear photo (JAPB: about the 3:30 position); stored on the body lock pin it drops over when the lens is locked",
  },
];

const ZEISS_CONTAREX_MOUNT = makeSimpleMountSpec({
  mountId: "zeiss-contarex",
  displayLabel: "Zeiss Contarex",
  projectNote: "Zeiss Ikon Contarex SLR bayonet (1959 to 1972): lugs on the body, aperture set from the body.",
  researchStatus: "partial",
  mvpStatus: "renderable",
  mechanism: "bayonet",
  lockType: "sprung_detent",
  profileId: PROFILE,
  refs: ALL,
  mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
  conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
  variantRequired: ["aperture_coupling", "max_aperture_indexing"],
  referenceGrade: ["exact_bayonet_geometry", "mount_diameters", "meter_coupling_geometry", "flash_lens_switching_pin"],
  appliesTo:
    "Zeiss Ikon Contarex I (Bullseye), Special, Professional, Super and Super Electronic bodies and Carl Zeiss Contarex-mount lenses",
  adds: [
    "three outward lugs on the body with a female bayonet on the lens",
    "lock pin and release button on the body",
    "body-driven aperture ring coupling",
    "lens-speed indexing nose",
  ],
  removes: ["aperture ring on the lens"],
  changes: ["every drawn angle and radius is photo-scaled; no dimensioned source was found"],
  flangeFocalDistanceMm: v(46, "secondary", WJ),
  nominalThroatDiameterMm: v(46, "photo_scaled", J),
  effectiveClearApertureMm: unknownV(J),
  cameraMountOuterDiameterMm: v(58, "photo_scaled", MAN),
  lensMountOuterDiameterMm: v(56, "photo_scaled", J),
  contactCount: naV(),
  lockGeometry: {
    insertionAngleDeg: v(0, "official", M1),
    lockAngleDeg: v(90, "photo_scaled", MJ),
    lockRotationDeg: v(90, "photo_scaled", MJ),
    lockRotationDirection: dirV("clockwise", "official", MANUALS),
  },
  cameraSideFeatures,
  lensSideFeatures,
  axialStack: makeStandardAxialStack({
    refs: WJ,
    flangeFocalDistanceMm: 46,
    mountOuterDiameterMm: 58,
    lugEngagementDiameterMm: 50,
    sensorFilmDiameterMm: 43.3,
  }),
  mechanicalCouplings: [
    {
      featureId: "aperture-drive-ring",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(112, "photo_scaled", J),
      radiusMm: v(19, "photo_scaled", J),
      sizeOrTravel:
        "lens aperture control ring about 17.8 to 21.4 mm in radius with an 18 deg notch in its inner edge; body ring gear concentric with the optical axis",
      function:
        "the body's aperture wheel, preselection store and spring drive turn the lens diaphragm through a ring gear around the optical axis",
      compatibilityNotes:
        "DE1230309B (col. 4 l. 66 to col. 5 l. 2, col. 5 ll. 50 to 53) states the ring gear and that the lens diaphragm is coupled to it; it gives no angle. The stored angle is the notch on JAPB's photo of a detached lens with the diaphragm closed, turned to the insertion position; both rings rotate in use, so this is one state, not a fixed position. The body-side driver that enters the notch is not shown in any source used",
    },
    {
      featureId: "max-aperture-index",
      side: "both",
      profileId: PROFILE,
      centerAngleDeg: v(0, "photo_scaled", P),
      radiusMm: v(28, "photo_scaled", P),
      sizeOrTravel:
        "body lever swings about 24 deg (349 to 12 deg) across the four lens speeds drawn on DE1230309B Fig. 2",
      function:
        "a nose on the lens mount, clocked by the lens's maximum aperture, moves a lever on the body's aperture index ring so the scale starts at that lens's speed",
      compatibilityNotes:
        "DE1230309B col. 4 ll. 19 to 39: nose 14 on lens mount 12, lever 9 on index ring 8; the slowest lens has no nose. The manuals confirm the effect (meter range limited to the lens's speed on insertion). Angle and radius are read off Fig. 2, a camera-front view with no stated scale (lever under the meter housing at the top of the mount); the nose position differs per lens speed and none is dimensioned",
    },
  ],
  screwsGasketsBaffles: [makeMountScrews(MAN, 5, 54, 2, [30, 90, 210, 270, 330])],
  sourceRefs: [
    {
      ref: "zcx-man1",
      sourceType: "official",
      citation:
        "Zeiss Ikon AG, “Contarex 35 mm: Instructions for Use,” pp. 24–25 with Figs. 12–13 and the nomenclature fold-out (items 9, 10). Scan hosted by M. Butkus. Accessed 2026-11-21.",
      liveUrl: "https://www.butkus.org/chinon/zeiss_ikon/zeiss_ikon_contarex/zeiss_ikon_contarex.htm",
      archiveUrl: "https://www.cameramanuals.org/zeiss_ikon/zeiss_ikon_contarex.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "text: bayonet on lens and body, release knob beside the lens on the body, red dot to red dot, anticlockwise to remove and to the right to lock, meter limited to the lens's speed. Fig. 13 (PDF p. 27) and the front nomenclature view (PDF p. 4) are camera-front views used for lug, lock pin, button, dot and screw angles; no scale is stated",
      confidence: "medium",
    },
    {
      ref: "zcx-man2",
      sourceType: "official",
      citation:
        "Zeiss Ikon AG, “Contarex Special: Instructions for Use,” p. 19 with Figs. 12–13 (PDF pp. 22–24). Scan hosted by M. Butkus. Accessed 2026-11-21.",
      liveUrl: "https://www.butkus.org/chinon/zeiss_ikon/zeiss_ikon_contarex_special/zeiss_ikon_contarex_special.htm",
      archiveUrl: "https://www.cameramanuals.org/zeiss_ikon/zeiss_ikon_contarex_special.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "same lens-changing text on the meterless body; Fig. 13 is a second camera-front photo of the bare mount (150 dpi scan) used with the Contarex manual's for lug, lock pin, button, dot and screw angles",
      confidence: "medium",
    },
    {
      ref: "zcx-man3",
      sourceType: "official",
      citation:
        "Zeiss Ikon AG, “Contarex Professional” instructions, sections “Special flash lenses” and “Changing lenses” with Figs. 8–10 (PDF pp. 13–16). Scan hosted by M. Butkus. Accessed 2026-11-21.",
      liveUrl: "https://www.butkus.org/chinon/zeiss_ikon/zeiss_ikon_contarex_pro/zeiss_ikon_contarex_pro.htm",
      archiveUrl: "https://cameramanuals.org/zeiss_ikon/zeiss_ikon_contarex_professional.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "1966 body: same button, red dots and rotation (counter-clockwise to remove, to the right to lock); flash lenses with automatic flash control need no use of the body's aperture wheel. Supports one profile for the bayonet across bodies",
      confidence: "medium",
    },
    {
      ref: "zcx-man4",
      sourceType: "official",
      citation:
        "Zeiss Ikon / Voigtländer, Contarex Super Electronic instructions, nomenclature fold-outs. Scan hosted by M. Butkus. Accessed 2026-11-21.",
      liveUrl: "https://butkus.org/chinon/contax/contarex_super_electronic/contarex_super-electronic.htm",
      archiveUrl: "https://cameramanuals.org/contax/contarex_elextronic_diagrams.pdf",
      archiveDate: "2026-11-21",
      appliesTo:
        "front nomenclature view of the 1968 body (camera-front view) shows the release button right of the mount and the index dot above right of it, as on the earlier bodies; only the figure was read, not the key text",
      confidence: "low",
    },
    {
      ref: "zcx-p1",
      sourceType: "patent",
      citation:
        "E. Sauer (Zeiss Ikon AG), DE1230309B, “Einäugige Spiegelreflexkamera mit Wechselobjektiven und mit einer kameraseitigen Blendeneinstell-, Vorwahl-, Speicher- und Abtasteinrichtung,” filed 1964-04-30, published 1966-12-08. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/DE1230309B/en",
      archiveUrl: "https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=DE000001230309B",
      archiveDate: "2026-11-21",
      appliesTo:
        "arrangement only: ring gear 23 around the optical axis coupled to the lens diaphragm (col. 4 l. 66 to col. 5 l. 2; col. 5 ll. 50–53); lens nose 14 and body lever 9 for lens-speed indexing (col. 4 ll. 19–39); flash lenses with pin 34 through recess 35a in the lens mount face working body lever 36 (col. 6 l. 59 to col. 7 l. 10; col. 8 ll. 46–52). No dimension, angle or scale is stated; Fig. 2 is cited separately as [zcx-p1f]",
      confidence: "high",
    },
    {
      ref: "zcx-p1f",
      sourceType: "patent_figure",
      citation:
        "DE1230309B, Fig. 2: front view of the camera mount. Undimensioned drawing, scaled for this spec. Accessed 2026-11-21.",
      liveUrl: "https://patents.google.com/patent/DE1230309B/en",
      archiveUrl: "https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=DE000001230309B",
      archiveDate: "2026-11-21",
      appliesTo:
        "camera-front view (col. 4 ll. 4–8), used with no mirroring. No scale is stated, so the lens-speed indexing position read from it stays photo-scaled",
      confidence: "low",
    },
    {
      ref: "zcx-japb",
      sourceType: "secondary",
      citation: "P. Buttler, “Lens mounts: Contarex,” JAPB (japb.net), updated May 2025. Accessed 2026-11-21.",
      liveUrl: "https://japb.net/theory/lensmounts/contarex/",
      archiveUrl: "https://japb.net/wp-content/uploads/2025/05/ID-Contarex.jpg",
      archiveDate: "2026-11-21",
      appliesTo:
        "46.0 mm flange focal distance; three-opening female bayonet on the lens with the release on the camera; inner ring by which the camera sets the aperture. The annotated photo (archive URL) is a lens-rear view of a Sonnar 135 mm f/4, about 180 deg from lens-top-up; opening spans, stop key, lock groove and aperture-ring notch were measured on it in polar coordinates and converted with theta_front = (K - theta_rear), K fixed by the lock groove on the body pin. Radii are its proportions times an unsourced 56 mm rear ring",
      confidence: "medium",
    },
    {
      ref: "zcx-westin",
      sourceType: "secondary",
      citation:
        "S. H. Westin, “Alphabetical List of Camera Mounts” (after W.-J. Markerink), Cornell University, last modified 2016-02-11. Accessed 2026-11-21.",
      liveUrl: "https://www.graphics.cornell.edu/~westin/misc/mounts-alphabetical.html",
      archiveUrl: "https://www.graphics.cornell.edu/~westin/misc/mounts-by-register.html",
      archiveDate: "2026-11-21",
      appliesTo:
        "Contarex: bayonet, register 46 mm, diameter column blank; no aperture ring on lenses, aperture set by a control on the body",
      confidence: "medium",
    },
  ],
  openQuestions: [
    {
      issue:
        "No source states any Contarex mount diameter. The 46 mm bore, 58 mm body ring and 56 mm lens rear ring are the first draft's stand-ins; JAPB's lens-rear photo only fixes proportions (tab bore 0.84, openings 0.89, aperture ring 0.64 to 0.77 of the rear ring's outer radius). The clear light opening is unknown.",
      affectedFields: [
        "coreDimensions.nominalThroatDiameterMm",
        "coreDimensions.effectiveClearApertureMm",
        "coreDimensions.cameraMountOuterDiameterMm",
        "coreDimensions.lensMountOuterDiameterMm",
        "cameraSideFeatures",
        "lensSideFeatures",
      ],
      candidateValues: [],
      resolution:
        "Needs the Zeiss Ikon factory service manual (a German-language Contarex service manual is sold by learncamerarepair.com; not obtained) or a calibrated measurement. Searched without result: Zeiss Ikon patents DE1230309B, DE1047005B, US2830513A, US3034411A, US2926576A, US3074331A, US3075442A, US3075444A; Carl Zeiss DE1179101B; Zeiss Ikon catalogues at pacificrimcamera.com (rl/00079, 00252, 02113, 02114); JAPB; Westin; Camera-wiki; Wikipedia.",
    },
    {
      issue:
        "Lug, opening, lock pin, release button and index dot angles are scaled from two manual photos taken from above the lens axis and one third-party lens-rear photo (about +/-5 deg). Body lug 2 is hidden in both manual photos and is placed from the lens openings. The two visible lugs read 116 deg apart on the manuals against 108.5 deg between the matching openings on the JAPB photo.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures"],
      candidateValues: [51, 172, 303],
      resolution: "Replace with dimensioned service-manual or patent values, or a straight-on photo of a bare body.",
    },
    {
      issue:
        "The lock rotation of about 90 deg is derived, not stated: the manuals give only the direction. It follows from the lock groove and openings on the JAPB photo against the lock pin and lugs on the manual photos (87.5 to 95 deg), and from the stop key reaching the next lug (89 to 91 deg).",
      affectedFields: ["lockGeometry.lockAngleDeg", "lockGeometry.lockRotationDeg"],
      candidateValues: [90],
      resolution: "Confirm on a camera or from the service manual.",
    },
    {
      issue:
        "Aperture coupling: the stored angle is one state of a ring that turns with the aperture setting and shutter cocking, and the body-side driver is not shown in any source used. The lens-speed nose is drawn at the body lever's mid position; its angle per lens speed is not dimensioned.",
      affectedFields: ["mechanicalCouplings"],
      candidateValues: [],
      resolution: "Needs the service manual or a patent on the bayonet coupling itself; none was found.",
    },
    {
      issue:
        "Flash (Blitz) lenses: DE1230309B puts a feeler pin through a recess in the lens mount face, working a lever that passes through the body's front wall. No source gives its angle or radius, and the Professional manual does not show whether production bodies carry the lever, so no variant profile is defined. The Super Electronic's differences seen in its manual are in the body electronics, not in the mount.",
      affectedFields: ["mvp.profileModel", "mechanicalCouplings"],
      candidateValues: [],
      resolution:
        "Add a flash-lens variant profile once the pin and lever are located on a lens rear and a later body (Professional, Super).",
    },
    {
      issue:
        "Mount screws: five are visible at about 30, 90, 210, 270 and 330 deg; a sixth at 150 deg is likely but hidden in both photos. The 54 mm pitch circle and 2 mm size are the first draft's stand-ins. Lug thickness and the axial engagement plane are unsourced stand-ins as well.",
      affectedFields: ["screwsGasketsBaffles", "axialStack"],
      candidateValues: [],
      resolution: "Minor; confirm from a bare body or the service manual.",
    },
  ],
  includeMechanicalLayers: true,
}) satisfies MountSpecInput;

export default ZEISS_CONTAREX_MOUNT;
