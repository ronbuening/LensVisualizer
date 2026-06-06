/**
 * Nikon F mount SVG specification.
 *
 * One of the longest-lived mounts: an invariant three-lug bayonet foundation carried a long ladder
 * of metering/AF/aperture interfaces. The base profile holds only invariant geometry; named variant
 * overlays capture each mount-face era — pre-AI metering prong, AI / AI-S meter-coupling ridge and
 * indexing, AF-D screw drive + five CPU contacts, and AF-I/AF-S/AF-P in-lens motors with their CPU
 * contact block. Geometry is never averaged across eras. The MVP figure renders the AF-I/AF-S/G
 * representative so the default diagram matches modern CPU-contact lens rears.
 *
 * G (no aperture ring) and E (electromagnetic diaphragm) are aperture-design variations that ride on
 * the AF-S electrical interface rather than distinct mount-face geometry, so they are not modeled as
 * separate profiles; AF-P (stepping motor) is folded into the AF-I/AF-S in-lens-motor profile.
 *
 * Headline dimensions (flange focal distance 46.5 mm, 44 mm throat, three non-symmetric lugs, lock by
 * counter-clockwise rotation viewed from the camera front) and the variant ladder are sourced from
 * the Nikon F-mount reference [nf-1]. US4766453A directly documents an AF-era F-mount embodiment with
 * three bayonet pawls, body positioning pin / lens lock slot, five top contacts, a paired AF drive
 * shaft, and a diaphragm lever; US5185622A documents the later multi-contact connector/collar
 * arrangement. Fine production angular spans, the mounting-index clock position, and service contact
 * functions remain photo-scaled or descriptive where the patents do not specify them. Nikon F is the
 * package Section 4.1 lens-rear mirror reference: its mounting index is stored in the camera-front
 * frame and the mirror gate confirms the transform is the left-right reflection.
 */

import type { ContactFeature, MountSpecInput } from "../types/mount.js";
import { degListV, dirV, naV, unknownV, v } from "../optics/mount/authoring.js";

const REF = ["nf-1"];
const P1 = ["nf-p1"];
const P2 = ["nf-p2"];
const PHOTO = ["nf-photo-1"];
const P12 = ["nf-p1", "nf-p2"];
const REFP1 = ["nf-1", "nf-p1"];
const REFP12 = ["nf-1", "nf-p1", "nf-p2"];

const AF_D_CONTACT_FUNCTIONS = ["VCC (power)", "RW1 (tach)", "SCK (clock)", "SIO (data)", "LGND (ground)"] as const;

const AF_S_CONTACT_FUNCTIONS = [
  "VCC (power)",
  "RW / H-S",
  "LCLK (clock)",
  "LIO (data)",
  "RW2 (teleconverter)",
  "LBAT (AF-S)",
  "PGND (ground)",
  "PGND (AF-S)",
] as const;

interface NikonFContactBankInput {
  profileId: ContactFeature["profileId"];
  centerAnglesDeg: readonly number[];
  functions: readonly string[];
  widthMm: number;
  sourceRefs: string[];
  bodyShape: string;
  lensShape: string;
  bodyProtrusionMm: number;
  lensProtrusionMm: number;
}

function makeNikonFContactBank({
  profileId,
  centerAnglesDeg,
  functions,
  widthMm,
  sourceRefs,
  bodyShape,
  lensShape,
  bodyProtrusionMm,
  lensProtrusionMm,
}: NikonFContactBankInput): ContactFeature[] {
  const buildSide = (side: "body" | "lens", shape: string, protrusionMm: number): ContactFeature[] =>
    centerAnglesDeg.map((centerAngleDeg, index) => ({
      side,
      contactNo: index + 1,
      profileId,
      centerAngleDeg: v(centerAngleDeg, "patent", sourceRefs),
      centerRadiusMm: v(20, "patent", sourceRefs),
      widthMm: v(widthMm, "patent", sourceRefs),
      heightMm: v(2.5, "patent", sourceRefs),
      shape,
      protrusionMm: v(protrusionMm, "patent", sourceRefs),
      function: functions[index] ?? "patent connector contact",
    }));

  return [...buildSide("body", bodyShape, bodyProtrusionMm), ...buildSide("lens", lensShape, lensProtrusionMm)];
}

const NIKON_F_MOUNT = {
  mountId: "nikon-f",
  displayLabel: "Nikon F",
  projectNote: "Nikon F SLR mount.",
  researchStatus: "researched",
  mvpStatus: "mvp_complete",
  mechanism: "bayonet",
  lockType: "sprung_detent",

  mvp: {
    requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
    requirementLevels: {
      mvpRequired: ["flange_focal_distance_mm", "nominal_throat_diameter_mm", "camera_mount_outer_diameter_mm"],
      conditionalCoreRequired: ["bayonet_lugs", "lock_pin", "index_mark"],
      variantRequired: ["metering_prong", "ai_meter_coupling_ridge", "cpu_contacts", "af_screw_coupler"],
      mvpOptional: ["mount_screws"],
      referenceGrade: ["lug_ramp_undercut", "contact_pitch"],
    },
    profileModel: {
      baseProfileId: "nikon-f/base",
      selectedMvpProfileId: "nikon-f/af-i-af-s",
      variantStrategy: "variant_profiles_defined",
      variantProfiles: [
        {
          profileId: "nikon-f/base",
          profileType: "base",
          appliesTo: "all Nikon F bodies and lenses, 1959–present",
          adds: ["three non-symmetric bayonet lugs", "lock pin/notch", "mounting index", "diaphragm lever"],
          removes: [],
          changes: [],
          sourceRefs: REFP1,
        },
        {
          profileId: "nikon-f/non-ai",
          profileType: "variant",
          appliesTo: "pre-AI ('F') lenses, 1959–1977",
          adds: ["metering coupling prong ('rabbit ears') / coupling shoe"],
          removes: [],
          changes: ["maximum-aperture metering set by the prong/shoe"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: REF,
        },
        {
          profileId: "nikon-f/ai",
          profileType: "variant",
          appliesTo: "AI (Automatic Indexing) lenses, 1977+",
          adds: ["meter coupling ridge", "lens speed indexing post", "aperture direct readout (ADR) prong"],
          removes: [],
          changes: ["maximum-aperture indexing automated vs the pre-AI prong"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: REF,
        },
        {
          profileId: "nikon-f/ai-s",
          profileType: "variant",
          appliesTo: "AI-S lenses, 1981+ (renders the AI/AI-S meter-coupling ridge introduced by AI)",
          adds: ["AI-S lens-type signal notch", "focal-length indexing ridge"],
          removes: [],
          changes: ["linear aperture actuation for shutter-priority / program AE"],
          cameraSideOverlayLayers: ["camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-mechanical"],
          status: "researched",
          sourceRefs: REF,
        },
        {
          profileId: "nikon-f/af-d",
          profileType: "variant",
          appliesTo: "AF / AF-D screw-drive autofocus lenses",
          adds: ["AF screw-drive coupler", "five CPU contacts ('4+1')", "subject-distance (D) encoding"],
          removes: [],
          changes: ["electronic aperture/distance reporting added"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical", "camera-side-variant-mechanical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: REFP12,
        },
        {
          profileId: "nikon-f/af-i-af-s",
          profileType: "variant",
          appliesTo: "AF-I, AF-S and AF-P in-lens-motor lenses (incl. G and E aperture variants)",
          adds: [
            "in-lens AF motor (AF-I coreless / AF-S SWM / AF-P stepping)",
            "CPU contact block (eight-contact representative; up to ten across later variants)",
          ],
          removes: [],
          changes: ["body AF screw coupler unused; AF driven in the lens; AF-P incompatible with many older bodies"],
          cameraSideOverlayLayers: ["camera-side-variant-electrical"],
          lensSideOverlayLayers: ["lens-side-variant-electrical"],
          status: "researched",
          sourceRefs: ["nf-1", "nf-p2"],
        },
      ],
    },
  },

  coreDimensions: {
    flangeFocalDistanceMm: v(46.5, "secondary", REF),
    nominalThroatDiameterMm: v(44, "secondary", REF),
    effectiveClearApertureMm: v(44, "secondary", REF),
    cameraMountOuterDiameterMm: v(54, "photo_scaled", REF),
    lensMountOuterDiameterMm: v(50, "photo_scaled", REF),
    contactCount: v(8, "photo_scaled", PHOTO),
  },

  lockGeometry: {
    insertionAngleDeg: v(0, "secondary", REF),
    lockAngleDeg: v(60, "patent", P2),
    lockRotationDeg: v(60, "patent", P2),
    lockRotationDirection: dirV("counterclockwise", "secondary", REF),
  },

  cameraSideFeatures: [
    {
      featureId: "body-throat",
      featureType: "body_throat",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(0, "secondary", REF),
      startAngleDeg: v(0, "secondary", REF),
      endAngleDeg: v(360, "secondary", REF),
      innerRadiusMm: v(0, "secondary", REF),
      outerRadiusMm: v(22, "secondary", REF),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "44 mm throat opening",
    },
    {
      featureId: "body-mount-ring",
      featureType: "mount_ring",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", REF),
      startAngleDeg: v(0, "photo_scaled", REF),
      endAngleDeg: v(360, "photo_scaled", REF),
      innerRadiusMm: v(22, "secondary", REF),
      outerRadiusMm: v(27, "photo_scaled", REF),
      depthMm: naV(),
      matesWith: "",
      shapeNotes: "visible body mount ring",
    },
    {
      featureId: "body-slot-1",
      featureType: "bayonet_receiving_slot",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(60, "patent", P12),
      startAngleDeg: v(44, "patent", P12),
      endAngleDeg: v(76, "patent", P12),
      innerRadiusMm: v(22, "patent", P12),
      outerRadiusMm: v(24.5, "patent", P12),
      depthMm: v(1.5, "patent", P12),
      matesWith: "lens-lug-1",
      shapeNotes: "three-place Nikon F bayonet slot, patent embodiment normalized to production clocking",
    },
    {
      featureId: "body-slot-2",
      featureType: "bayonet_receiving_slot",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(180, "patent", P12),
      startAngleDeg: v(164, "patent", P12),
      endAngleDeg: v(196, "patent", P12),
      innerRadiusMm: v(22, "patent", P12),
      outerRadiusMm: v(24.5, "patent", P12),
      depthMm: v(1.5, "patent", P12),
      matesWith: "lens-lug-2",
      shapeNotes: "three-place Nikon F bayonet slot, patent embodiment normalized to production clocking",
    },
    {
      featureId: "body-slot-3",
      featureType: "bayonet_receiving_slot",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(300, "patent", P12),
      startAngleDeg: v(284, "patent", P12),
      endAngleDeg: v(316, "patent", P12),
      innerRadiusMm: v(22, "patent", P12),
      outerRadiusMm: v(24.5, "patent", P12),
      depthMm: v(1.5, "patent", P12),
      matesWith: "lens-lug-3",
      shapeNotes: "three-place Nikon F bayonet slot, patent embodiment normalized to production clocking",
    },
    {
      featureId: "body-index-mark",
      featureType: "index_mark",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(60, "photo_scaled", REF),
      startAngleDeg: unknownV(REF),
      endAngleDeg: unknownV(REF),
      innerRadiusMm: unknownV(REF),
      outerRadiusMm: v(28, "photo_scaled", REF),
      depthMm: naV(),
      matesWith: "lens-index-mark",
      shapeNotes: "mounting index for alignment",
    },
    {
      featureId: "body-lock-pin",
      featureType: "lock_pin",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(90, "patent", P1),
      startAngleDeg: v(90, "patent", P1),
      endAngleDeg: v(90, "patent", P1),
      innerRadiusMm: v(23, "patent", P1),
      outerRadiusMm: v(23, "patent", P1),
      depthMm: v(2, "patent", P1),
      matesWith: "lens-lock-notch",
      shapeNotes: "body positioning pin 33 engaging the lens-side lock slot in US4766453A",
    },
  ],

  lensSideFeatures: [
    {
      featureId: "lens-throat",
      featureType: "lens_throat",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(0, "secondary", REF),
      startAngleDeg: v(0, "secondary", REF),
      endAngleDeg: v(360, "secondary", REF),
      innerRadiusMm: v(0, "secondary", REF),
      outerRadiusMm: v(21, "photo_scaled", REF),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "rear opening",
    },
    {
      featureId: "lens-mount-ring",
      featureType: "lens_mount_ring",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(0, "photo_scaled", REF),
      startAngleDeg: v(0, "photo_scaled", REF),
      endAngleDeg: v(360, "photo_scaled", REF),
      innerRadiusMm: v(21, "photo_scaled", REF),
      outerRadiusMm: v(25, "photo_scaled", REF),
      thicknessMm: naV(),
      matesWith: "",
      shapeNotes: "lens flange ring",
    },
    {
      featureId: "lens-lug-1",
      featureType: "bayonet_lug",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(60, "patent", P12),
      startAngleDeg: v(44, "patent", P12),
      endAngleDeg: v(76, "patent", P12),
      innerRadiusMm: v(22, "patent", P12),
      outerRadiusMm: v(24.5, "patent", P12),
      thicknessMm: v(1.5, "patent", P12),
      matesWith: "body-slot-1",
      shapeNotes: "three-place Nikon F lens pawl, patent embodiment normalized to production clocking",
    },
    {
      featureId: "lens-lug-2",
      featureType: "bayonet_lug",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(180, "patent", P12),
      startAngleDeg: v(164, "patent", P12),
      endAngleDeg: v(196, "patent", P12),
      innerRadiusMm: v(22, "patent", P12),
      outerRadiusMm: v(24.5, "patent", P12),
      thicknessMm: v(1.5, "patent", P12),
      matesWith: "body-slot-2",
      shapeNotes: "three-place Nikon F lens pawl, patent embodiment normalized to production clocking",
    },
    {
      featureId: "lens-lug-3",
      featureType: "bayonet_lug",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(300, "patent", P12),
      startAngleDeg: v(284, "patent", P12),
      endAngleDeg: v(316, "patent", P12),
      innerRadiusMm: v(22, "patent", P12),
      outerRadiusMm: v(24.5, "patent", P12),
      thicknessMm: v(1.5, "patent", P12),
      matesWith: "body-slot-3",
      shapeNotes: "three-place Nikon F lens pawl, patent embodiment normalized to production clocking",
    },
    {
      featureId: "lens-index-mark",
      featureType: "index_mark",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(60, "photo_scaled", REF),
      startAngleDeg: unknownV(REF),
      endAngleDeg: unknownV(REF),
      innerRadiusMm: unknownV(REF),
      outerRadiusMm: v(26, "photo_scaled", REF),
      thicknessMm: naV(),
      matesWith: "body-index-mark",
      shapeNotes: "aligns with body index (white dot)",
    },
    {
      featureId: "lens-lock-notch",
      featureType: "lock_notch",
      profileId: "nikon-f/base",
      count: 1,
      centerAngleDeg: v(90, "patent", P1),
      startAngleDeg: v(90, "patent", P1),
      endAngleDeg: v(90, "patent", P1),
      innerRadiusMm: v(23, "patent", P1),
      outerRadiusMm: v(23, "patent", P1),
      thicknessMm: v(2, "patent", P1),
      matesWith: "body-lock-pin",
      shapeNotes: "lens-side lock slot 1a receiving the body positioning pin in US4766453A",
    },
  ],

  axialStack: [
    {
      planeId: "flange_datum",
      zPositionMm: v(0, "secondary", REF),
      thicknessMm: v(0, "secondary", REF),
      diameterMm: v(54, "photo_scaled", REF),
    },
    {
      planeId: "bayonet_lug_engagement",
      zPositionMm: v(1.2, "photo_scaled", REF),
      thicknessMm: v(1.5, "photo_scaled", REF),
      diameterMm: v(49, "photo_scaled", REF),
    },
    {
      planeId: "sensor_film_plane",
      zPositionMm: v(-46.5, "secondary", REF),
      thicknessMm: v(0, "secondary", REF),
      diameterMm: v(43.3, "secondary", REF),
    },
  ],

  contacts: [
    ...makeNikonFContactBank({
      profileId: "nikon-f/af-d",
      centerAnglesDeg: [348, 354, 0, 6, 12],
      functions: AF_D_CONTACT_FUNCTIONS,
      widthMm: 1.4,
      sourceRefs: P1,
      bodyShape: "fixed pad",
      lensShape: "spring pin",
      bodyProtrusionMm: 0,
      lensProtrusionMm: 0.4,
    }),
    ...makeNikonFContactBank({
      profileId: "nikon-f/af-i-af-s",
      centerAnglesDeg: [340, 346, 352, 358, 4, 10, 16, 22],
      functions: AF_S_CONTACT_FUNCTIONS,
      widthMm: 1.3,
      sourceRefs: P2,
      bodyShape: "mixed fixed/spring connector pad",
      lensShape: "mixed fixed/spring connector pad",
      bodyProtrusionMm: 0.4,
      lensProtrusionMm: 0.4,
    }),
  ],

  mechanicalCouplings: [
    {
      featureId: "metering-prong",
      side: "both",
      profileId: "nikon-f/non-ai",
      centerAngleDeg: v(30, "photo_scaled", REF),
      radiusMm: v(27, "photo_scaled", REF),
      sizeOrTravel: "prong ('rabbit ears') on aperture ring",
      function: "pre-AI maximum-aperture metering coupling",
      compatibilityNotes: "couples to the body metering pin/shoe",
    },
    {
      featureId: "ai-meter-coupling-ridge",
      side: "both",
      profileId: "nikon-f/ai-s",
      centerAngleDeg: v(25, "photo_scaled", REF),
      radiusMm: v(26, "photo_scaled", REF),
      sizeOrTravel: "ridge on aperture ring",
      function: "open-aperture metering coupling (AI/AI-S)",
      compatibilityNotes: "AI follower on body",
    },
    {
      featureId: "lens-speed-indexing-post",
      side: "body",
      profileId: "nikon-f/ai-s",
      centerAngleDeg: v(35, "photo_scaled", REF),
      radiusMm: v(24, "photo_scaled", REF),
      sizeOrTravel: "post on mounting flange",
      function: "maximum-aperture indexing",
      compatibilityNotes: "",
    },
    {
      featureId: "diaphragm-driving-lever",
      side: "both",
      profileId: "nikon-f/base",
      centerAngleDeg: v(270, "patent", P1),
      radiusMm: v(18, "patent", P1),
      sizeOrTravel: "stop-down lever exposed through the mount opening",
      function: "mechanical diaphragm actuation",
      compatibilityNotes: "patent places the diaphragm lever about 180 degrees from the lock slot",
    },
    {
      featureId: "af-screw-coupler",
      side: "both",
      profileId: "nikon-f/af-d",
      centerAngleDeg: v(250, "patent", P1),
      radiusMm: v(19, "patent", P1),
      sizeOrTravel: "paired slotted coupling shafts",
      function: "mechanical AF drive",
      compatibilityNotes: "US4766453A places the drive shaft in the lower bayonet gap for body-driven AF lenses",
    },
  ],

  screwsGasketsBaffles: [
    {
      featureId: "body-mount-screws",
      featureType: "mount_screws",
      side: "body",
      count: v(5, "photo_scaled", REF),
      pcdMm: v(50, "photo_scaled", REF),
      diameterMm: v(2, "photo_scaled", REF),
      centerAnglesDeg: degListV([30, 102, 174, 246, 318], "photo_scaled", REF),
      shape: "round",
    },
    {
      featureId: "lens-mount-screws",
      featureType: "mount_screws",
      side: "lens",
      count: v(5, "photo_scaled", PHOTO),
      pcdMm: v(49, "photo_scaled", PHOTO),
      diameterMm: v(2.2, "photo_scaled", PHOTO),
      centerAnglesDeg: degListV([0, 138, 180, 222, 303], "photo_scaled", PHOTO),
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
      ref: "nf-1",
      sourceType: "secondary",
      citation: "“Nikon F-mount,” Wikipedia. Accessed 2026-06-04.",
      liveUrl: "https://en.wikipedia.org/wiki/Nikon_F-mount",
      archiveUrl: "http://web.archive.org/web/20260513020722/https://en.wikipedia.org/wiki/Nikon_F-mount",
      archiveDate: "2026-05-13",
      appliesTo:
        "flange focal distance, throat, three non-symmetric lugs, CCW lock, AI/AI-S/AF/AF-S ladder, CPU contacts",
      confidence: "high",
    },
    {
      ref: "nf-p1",
      sourceType: "patent",
      citation: "US4766453A, Nikon AF-era F-mount bayonet/drive/contact arrangement. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US4766453A/en",
      archiveUrl: "https://patents.google.com/patent/US4766453A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "AF-era three-pawl F bayonet embodiment, body positioning pin / lens lock slot, five top contacts, diaphragm lever, and paired screw-drive coupling shafts",
      confidence: "high",
    },
    {
      ref: "nf-p2",
      sourceType: "patent",
      citation: "US5185622A, Nikon AF-era F-mount/contact arrangement. Accessed 2026-06-06.",
      liveUrl: "https://patents.google.com/patent/US5185622A/en",
      archiveUrl: "https://patents.google.com/patent/US5185622A/en",
      archiveDate: "2026-06-06",
      appliesTo:
        "later Nikon F electrical connector arrangement with movable/fixed contact units, three collars/notches, and 60 degree mounting rotation embodiment",
      confidence: "high",
    },
    {
      ref: "nf-photo-1",
      sourceType: "field_photo",
      citation: "User-supplied rear view of an AF-S G-type Nikon F lens (IMG_1872.jpeg), 2026-06-06.",
      liveUrl: "",
      archiveUrl: "",
      archiveDate: "unknown",
      appliesTo: "AF-S/G lens-side contact-bank orientation and five-screw rear flange clocking",
      confidence: "high",
    },
  ],

  openQuestions: [
    {
      issue:
        "Bayonet lug/slot spans now carry patent-embodiment provenance, but exact production F-mount spans and the mounting-index clock position still need an official Nikon drawing or measured sample.",
      affectedFields: ["cameraSideFeatures", "lensSideFeatures", "body-index-mark", "lens-index-mark"],
      candidateValues: [],
      resolution: "Upgrade to an official Nikon mount drawing or measured sample.",
    },
    {
      issue:
        "US4766453A supports the five-contact AF-D embodiment; US5185622A supports a later multi-contact connector layout but not the production per-contact service functions. AF-I/AF-S/AF-P carry up to ten contacts, while the eight-contact set modeled here remains representative.",
      affectedFields: ["contacts", "contactCount"],
      candidateValues: [5, 7, 8, 10],
      resolution: "Model per-variant contact maps from an official Nikon service reference.",
    },
  ],
} satisfies MountSpecInput;

export default NIKON_F_MOUNT;
