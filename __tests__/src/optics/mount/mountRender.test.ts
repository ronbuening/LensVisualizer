/**
 * Mount render-pipeline tests against a tiny hand-built fixture.
 *
 * Exercises buildMountSvgDoc → mountSvgDocToString → emitMountJson before any real mount data
 * exists: layer ordering, determinism, the accessibility/metadata contract, the lens-rear mirror,
 * and structural conformance of the emitted JSON block.
 */
import { describe, expect, it } from "vitest";
import type {
  AngleListValue,
  AngleValue,
  CountValue,
  DirectionValue,
  LengthValue,
  MountSpecInput,
} from "../../../../src/types/mount.js";
import { normalizeMountSpec } from "../../../../src/optics/mount/defaults.js";
import { buildMountSvgDoc } from "../../../../src/optics/mount/renderMount.js";
import { mountSvgDocToString } from "../../../../src/optics/mount/toSvgString.js";
import { emitMountJson } from "../../../../src/optics/mount/emitMountJson.js";
import { MOUNT_LAYER_ORDER } from "../../../../src/optics/mount/layers.js";

/* ── envelope builders ── */
const len = (value: number | "unknown" | "not_applicable"): LengthValue => ({
  value,
  status: "official",
  sourceRefs: ["r1"],
});
const ang = (value: number | "unknown"): AngleValue => ({ value, status: "official", sourceRefs: ["r1"] });
const cnt = (value: number): CountValue => ({ value, status: "official", sourceRefs: ["r1"] });
const dir = (value: DirectionValue["value"]): DirectionValue => ({ value, status: "official", sourceRefs: ["r1"] });
const angList = (value: number[]): AngleListValue => ({ value, status: "official", sourceRefs: ["r1"] });

function fixtureInput(): MountSpecInput {
  return {
    mountId: "canon-ef",
    displayLabel: "Canon EF",
    projectNote: "Test fixture.",
    researchStatus: "researched",
    mvpStatus: "renderable",
    mechanism: "bayonet",
    lockType: "sprung_detent",
    mvp: {
      requiredViews: ["camera_side_front_view", "lens_side_rear_view", "axial_register_schematic"],
      requirementLevels: {
        mvpRequired: ["flange_focal_distance_mm"],
        conditionalCoreRequired: [],
        variantRequired: [],
        mvpOptional: [],
        referenceGrade: [],
      },
      profileModel: {
        baseProfileId: "canon-ef/base",
        selectedMvpProfileId: "canon-ef/base",
        variantStrategy: "base_only",
        variantProfiles: [
          {
            profileId: "canon-ef/base",
            profileType: "base",
            appliesTo: "all EF",
            adds: [],
            removes: [],
            changes: [],
            sourceRefs: ["r1"],
          },
        ],
      },
    },
    coreDimensions: {
      flangeFocalDistanceMm: len(44),
      nominalThroatDiameterMm: len(54),
      effectiveClearApertureMm: len(54),
      cameraMountOuterDiameterMm: len(65),
      lensMountOuterDiameterMm: len(63),
      contactCount: cnt(8),
    },
    lockGeometry: {
      insertionAngleDeg: ang(0),
      lockAngleDeg: ang(60),
      lockRotationDeg: ang(60),
      lockRotationDirection: dir("clockwise"),
    },
    cameraSideFeatures: [
      {
        featureId: "body-throat",
        featureType: "body_throat",
        profileId: "canon-ef/base",
        count: 1,
        centerAngleDeg: ang(0),
        startAngleDeg: ang(0),
        endAngleDeg: ang(360),
        innerRadiusMm: len(0),
        outerRadiusMm: len(27),
        depthMm: len("not_applicable"),
        matesWith: "",
        shapeNotes: "",
      },
      {
        featureId: "body-mount-ring",
        featureType: "mount_ring",
        profileId: "canon-ef/base",
        count: 1,
        centerAngleDeg: ang(0),
        startAngleDeg: ang(0),
        endAngleDeg: ang(360),
        innerRadiusMm: len(27),
        outerRadiusMm: len(32.5),
        depthMm: len("not_applicable"),
        matesWith: "",
        shapeNotes: "",
      },
      {
        featureId: "body-slot-1",
        featureType: "bayonet_receiving_slot",
        profileId: "canon-ef/base",
        count: 1,
        centerAngleDeg: ang(90),
        startAngleDeg: ang(78),
        endAngleDeg: ang(102),
        innerRadiusMm: len(27),
        outerRadiusMm: len(30),
        depthMm: len(2),
        matesWith: "lens-lug-1",
        shapeNotes: "",
      },
      {
        featureId: "body-index-mark",
        featureType: "index_mark",
        profileId: "canon-ef/base",
        count: 1,
        centerAngleDeg: ang(0),
        startAngleDeg: ang("unknown"),
        endAngleDeg: ang("unknown"),
        innerRadiusMm: len("unknown"),
        outerRadiusMm: len(33),
        depthMm: len("not_applicable"),
        matesWith: "",
        shapeNotes: "",
      },
      {
        featureId: "body-lock-pin",
        featureType: "lock_pin",
        profileId: "canon-ef/base",
        count: 1,
        centerAngleDeg: ang(180),
        startAngleDeg: ang("unknown"),
        endAngleDeg: ang("unknown"),
        innerRadiusMm: len("unknown"),
        outerRadiusMm: len(28),
        depthMm: len(2),
        matesWith: "lens-lock-notch",
        shapeNotes: "",
      },
    ],
    lensSideFeatures: [
      {
        featureId: "lens-throat",
        featureType: "lens_throat",
        profileId: "canon-ef/base",
        count: 1,
        centerAngleDeg: ang(0),
        startAngleDeg: ang(0),
        endAngleDeg: ang(360),
        innerRadiusMm: len(0),
        outerRadiusMm: len(26),
        thicknessMm: len("not_applicable"),
        matesWith: "",
        shapeNotes: "",
      },
      {
        featureId: "lens-mount-ring",
        featureType: "lens_mount_ring",
        profileId: "canon-ef/base",
        count: 1,
        centerAngleDeg: ang(0),
        startAngleDeg: ang(0),
        endAngleDeg: ang(360),
        innerRadiusMm: len(26),
        outerRadiusMm: len(31.5),
        thicknessMm: len("not_applicable"),
        matesWith: "",
        shapeNotes: "",
      },
      {
        featureId: "lens-lug-1",
        featureType: "bayonet_lug",
        profileId: "canon-ef/base",
        count: 1,
        centerAngleDeg: ang(90),
        startAngleDeg: ang(78),
        endAngleDeg: ang(102),
        innerRadiusMm: len(27),
        outerRadiusMm: len(30),
        thicknessMm: len(2),
        matesWith: "body-slot-1",
        shapeNotes: "",
      },
    ],
    axialStack: [
      {
        planeId: "flange_datum",
        zPositionMm: { value: 0, status: "official", sourceRefs: ["r1"] },
        thicknessMm: len(0),
        diameterMm: len(65),
      },
      {
        planeId: "sensor_film_plane",
        zPositionMm: { value: -44, status: "official", sourceRefs: ["r1"] },
        thicknessMm: len(0),
        diameterMm: len(43.3),
      },
    ],
    contacts: [
      {
        side: "body",
        contactNo: 1,
        profileId: "canon-ef/base",
        centerAngleDeg: ang(150),
        centerRadiusMm: len(24),
        widthMm: len(1.2),
        heightMm: len(3),
        shape: "pad",
        protrusionMm: { value: 0.5, status: "official", sourceRefs: ["r1"] },
        function: "VBAT",
      },
      {
        side: "lens",
        contactNo: 1,
        profileId: "canon-ef/base",
        centerAngleDeg: ang(150),
        centerRadiusMm: len(24),
        widthMm: len(1.2),
        heightMm: len(3),
        shape: "pad",
        protrusionMm: { value: 0, status: "official", sourceRefs: ["r1"] },
        function: "VBAT",
      },
    ],
    mechanicalCouplings: [],
    screwsGasketsBaffles: [
      {
        featureId: "body-mount-screws",
        featureType: "mount_screws",
        side: "body",
        count: cnt(4),
        pcdMm: len(58),
        diameterMm: len(2),
        centerAnglesDeg: angList([20, 110, 200, 290]),
        shape: "round",
      },
    ],
    svgLayers: {
      mvpRequired: ["datum-axis", "camera-side-metal", "lens-side-metal", "axial-section", "uncertainty"],
      conditionalCoreRequired: ["clear-aperture", "camera-side-core-interface", "lens-side-core-interface"],
      variantRequired: ["camera-side-variant-electrical", "lens-side-variant-electrical"],
    },
    sourceRefs: [
      {
        ref: "r1",
        sourceType: "official",
        citation: "Test source",
        liveUrl: "https://example.com",
        archiveUrl: "https://web.archive.org/x",
        archiveDate: "2026-06-04",
        appliesTo: "all",
        confidence: "high",
      },
    ],
    openQuestions: [],
  };
}

const SPEC = normalizeMountSpec(fixtureInput());

describe("buildMountSvgDoc", () => {
  it("computes an integer-bounded viewBox and three views", () => {
    for (const view of ["camera_side_front", "lens_side_rear", "axial_section"] as const) {
      const doc = buildMountSvgDoc(SPEC, "canon-ef/base", view);
      expect(doc.viewBox).toMatch(/^-?\d+ -?\d+ \d+ \d+$/);
    }
  });

  it("emits layers in the fixed package order", () => {
    const doc = buildMountSvgDoc(SPEC, "canon-ef/base", "camera_side_front");
    const order = doc.layers.map((l) => l.name);
    const expectedIndexes = order.map((n) => MOUNT_LAYER_ORDER.indexOf(n));
    const sorted = [...expectedIndexes].sort((a, b) => a - b);
    expect(expectedIndexes).toEqual(sorted);
    // throat/ring on metal, slot on core-interface, contact on variant-electrical
    expect(order).toContain("camera-side-metal");
    expect(order).toContain("camera-side-core-interface");
    expect(order).toContain("camera-side-variant-electrical");
  });

  it("orders features within a layer by angle then id", () => {
    const doc = buildMountSvgDoc(SPEC, "canon-ef/base", "camera_side_front");
    for (const layer of doc.layers) {
      const keys = layer.elements.map((e) => [e.sortAngle, e.sortKey] as const);
      const sorted = [...keys].sort((a, b) => a[0] - b[0] || (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0));
      expect(keys).toEqual(sorted);
    }
  });
});

describe("lens-rear mirror", () => {
  it("places the mirror of a 90° feature at 270° (3 → 9 o'clock)", () => {
    const front = buildMountSvgDoc(SPEC, "canon-ef/base", "camera_side_front");
    const rear = buildMountSvgDoc(SPEC, "canon-ef/base", "lens_side_rear");
    // The body slot at 90° draws on the +x side; the mirrored lens lug should draw on the −x side.
    const frontSlot = front.layers.flatMap((l) => l.elements).find((e) => e.sortKey === "body-slot-1");
    const rearLug = rear.layers.flatMap((l) => l.elements).find((e) => e.sortKey === "lens-lug-1");
    expect(frontSlot?.sortAngle).toBe(90);
    expect(rearLug?.sortAngle).toBe(270);
  });
});

describe("mountSvgDocToString", () => {
  it("is byte-identical across renders (determinism)", () => {
    const a = mountSvgDocToString(buildMountSvgDoc(SPEC, "canon-ef/base", "camera_side_front"));
    const b = mountSvgDocToString(buildMountSvgDoc(SPEC, "canon-ef/base", "camera_side_front"));
    expect(a).toBe(b);
  });

  it("carries the accessibility + metadata contract", () => {
    const svg = mountSvgDocToString(buildMountSvgDoc(SPEC, "canon-ef/base", "lens_side_rear"));
    expect(svg).toContain('role="img"');
    expect(svg).toContain("aria-labelledby=");
    expect(svg).toContain("<title");
    expect(svg).toContain("<desc");
    expect(svg).toContain("<metadata>");
    expect(svg).toContain('"schemaVersion":"1.3"');
    expect(svg).toContain('"view":"lens_side_rear"');
    expect(svg).toMatch(/^<svg /);
    expect(svg.endsWith("</svg>")).toBe(true);
  });

  it("rounds every emitted coordinate to <= 3 decimals", () => {
    const svg = mountSvgDocToString(buildMountSvgDoc(SPEC, "canon-ef/base", "camera_side_front"));
    const longDecimals = svg.match(/\d+\.\d{4,}/g);
    expect(longDecimals).toBeNull();
  });
});

describe("emitMountJson", () => {
  it("fills render.views viewBoxes and stays schemaVersion 1.3", () => {
    const json = emitMountJson(SPEC);
    expect(json.schemaVersion).toBe("1.3");
    expect(json.render.views.cameraSideFront.viewBox).toMatch(/^-?\d+ -?\d+ \d+ \d+$/);
    expect(json.render.views.lensSideRear.viewBox).toMatch(/^-?\d+ -?\d+ \d+ \d+$/);
    expect(json.render.views.axialSection.viewBox).toMatch(/^-?\d+ -?\d+ \d+ \d+$/);
    // round-trips through JSON cleanly
    expect(() => JSON.parse(JSON.stringify(json))).not.toThrow();
  });
});
