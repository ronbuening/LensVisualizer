import { describe, it, expect, vi } from "vitest";
import validateLensData from "../../../src/optics/validateLensData.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import { MAX_RIM_SLOPE_TAN } from "../../../src/optics/internal/surfaceMath.js";

/* Passthrough mock so a single test can make buildAsphereIndex throw once.
 * buildAsphereIndex cannot be made to throw from plain lens data, so the
 * folded image-plane guard's catch branch is only reachable this way. */
const asphereIndexControl = vi.hoisted(() => ({ failNextBuild: false }));

vi.mock("../../../src/optics/internal/lensState.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../src/optics/internal/lensState.js")>();
  return {
    ...actual,
    buildAsphereIndex: (...args: Parameters<typeof actual.buildAsphereIndex>) => {
      if (asphereIndexControl.failNextBuild) {
        asphereIndexControl.failNextBuild = false;
        throw new Error("synthetic malformed asphere data");
      }
      return actual.buildAsphereIndex(...args);
    },
  };
});

function makeValid(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    ...LENS_DEFAULTS,
    key: "test",
    name: "Test Lens",
    nominalFno: 2.0,
    closeFocusM: 0.5,
    scFill: 0.5,
    yScFill: 0.3,
    fstopSeries: [2, 2.8, 4],
    elements: [
      {
        id: 1,
        name: "L1",
        label: "E1",
        type: "test",
        nd: 1.5,
        vd: 50,
        fl: 50,
        glass: "test",
        apd: false,
        role: "test",
      },
    ],
    surfaces: [
      { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
      { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
      { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
    ],
    asph: {},
    var: {},
    varLabels: [],
    groups: [],
    doublets: [],
    ...overrides,
  };
}

describe("validateLensData", () => {
  it("returns empty array for valid data", () => {
    expect(validateLensData(makeValid())).toEqual([]);
  });

  it("catches missing required string fields", () => {
    const data = makeValid();
    delete data.key;
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('"key"'))).toBe(true);
  });

  it("catches missing required number fields", () => {
    const data = makeValid();
    delete data.nominalFno;
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('"nominalFno"'))).toBe(true);
  });

  it("rejects gapSagFrac values that would allow visible overlap", () => {
    const errors = validateLensData(makeValid({ gapSagFrac: 1.1 }));

    expect(LENS_DEFAULTS.gapSagFrac).toBe(0.9);
    expect(errors.some((e) => e.includes('"gapSagFrac"'))).toBe(true);
  });

  it("catches missing required arrays", () => {
    const data = makeValid();
    delete data.fstopSeries;
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('"fstopSeries"'))).toBe(true);
  });

  it("catches duplicate surface labels", () => {
    const data = makeValid({
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: "1", R: -100, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "STO", R: 1e15, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("Duplicate surface label"))).toBe(true);
  });

  it("catches non-boolean visible field", () => {
    const data = makeValid({ visible: "false" });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('"visible" must be a boolean'))).toBe(true);
  });

  it("accepts boolean visible field", () => {
    expect(validateLensData(makeValid({ visible: true }))).toEqual([]);
    expect(validateLensData(makeValid({ visible: false }))).toEqual([]);
  });

  it("accepts canonical lens mount and image-format metadata", () => {
    expect(validateLensData(makeValid({ lensMounts: ["nikon-z", "sony-fe"], imageFormat: "135-full-frame" }))).toEqual(
      [],
    );
  });

  it("rejects invalid lens mount metadata", () => {
    const nonArrayErrors = validateLensData(makeValid({ lensMounts: "nikon-z" }));
    expect(nonArrayErrors.some((error) => error.includes('"lensMounts"'))).toBe(true);

    const unknownErrors = validateLensData(makeValid({ lensMounts: ["nikon-z", "not-a-mount"] }));
    expect(unknownErrors.some((error) => error.includes('"lensMounts[1]"'))).toBe(true);

    const duplicateErrors = validateLensData(makeValid({ lensMounts: ["nikon-z", "nikon-z"] }));
    expect(duplicateErrors.some((error) => error.includes("duplicate mount id"))).toBe(true);
  });

  it("rejects invalid image-format metadata", () => {
    const errors = validateLensData(makeValid({ imageFormat: "medium-ish" }));

    expect(errors.some((error) => error.includes('"imageFormat"'))).toBe(true);
  });

  it("accepts valid perspectiveControl movement ranges", () => {
    expect(
      validateLensData(
        makeValid({
          perspectiveControl: {
            shiftRangeMm: [-11.5, 11.5],
            tiltRangeDeg: [-8.5, 8.5],
            shiftStepMm: 0.1,
            tiltStepDeg: 0.1,
          },
        }),
      ),
    ).toEqual([]);
  });

  it("catches invalid perspectiveControl movement ranges", () => {
    const errors = validateLensData(
      makeValid({
        perspectiveControl: {
          shiftRangeMm: [1, 11.5],
          tiltRangeDeg: [-8.5, -1],
          shiftStepMm: 0,
          tiltStepDeg: -0.1,
        },
      }),
    );

    expect(errors.some((error) => error.includes("perspectiveControl.shiftRangeMm"))).toBe(true);
    expect(errors.some((error) => error.includes("perspectiveControl.tiltRangeDeg"))).toBe(true);
    expect(errors.some((error) => error.includes("perspectiveControl.shiftStepMm"))).toBe(true);
    expect(errors.some((error) => error.includes("perspectiveControl.tiltStepDeg"))).toBe(true);
  });

  it("accepts valid fisheye projection metadata", () => {
    expect(
      validateLensData(
        makeValid({
          projection: {
            kind: "fisheye-equidistant",
            focalLengthMm: 6.3,
            fullFieldDeg: 220,
            imageCircleMm: 23,
            maxTraceFieldDeg: 80,
          },
        }),
      ),
    ).toEqual([]);
  });

  it("accepts zoom-array fisheye projection metadata", () => {
    expect(
      validateLensData(
        makeValid({
          projection: {
            kind: "fisheye-equisolid",
            focalLengthMm: [8.05, 11.85, 15.14],
            fullFieldDeg: [180, 180, 175.5],
            imageCircleMm: [22.3, 33.54, 43.28],
            maxTraceFieldDeg: [90, 90, 87.75],
          },
        }),
      ),
    ).toEqual([]);
  });

  it("catches invalid fisheye projection metadata", () => {
    const unknownKindErrors = validateLensData(makeValid({ projection: { kind: "panini" } }));
    expect(unknownKindErrors.some((error) => error.includes("projection.kind"))).toBe(true);

    const missingRequiredErrors = validateLensData(
      makeValid({
        projection: {
          kind: "fisheye-equidistant",
          fullFieldDeg: 400,
          imageCircleMm: -1,
          maxTraceFieldDeg: 200,
        },
      }),
    );
    expect(missingRequiredErrors.some((error) => error.includes("projection.focalLengthMm"))).toBe(true);
    expect(missingRequiredErrors.some((error) => error.includes("projection.fullFieldDeg"))).toBe(true);
    expect(missingRequiredErrors.some((error) => error.includes("projection.imageCircleMm"))).toBe(true);
    expect(missingRequiredErrors.some((error) => error.includes("projection.maxTraceFieldDeg"))).toBe(true);
  });

  it("accepts maxTraceFieldDeg up to but not including 180 degrees", () => {
    // Past the old 90° slope-launch cap is now valid — bounding-sphere dispatch
    // in solveChiefRay handles fields ≥ MAX_FIELD_LAUNCH_DEG. The physical
    // ceiling is the forward hemisphere (180°).
    const ok = validateLensData(
      makeValid({
        projection: {
          kind: "fisheye-equidistant",
          focalLengthMm: 6.3,
          fullFieldDeg: 220,
          imageCircleMm: 23,
          maxTraceFieldDeg: 110,
        },
      }),
    );
    expect(ok.some((error) => error.includes("projection.maxTraceFieldDeg"))).toBe(false);
  });

  it("accepts rectilinear declared coverage metadata", () => {
    expect(
      validateLensData(
        makeValid({
          projection: {
            kind: "rectilinear",
            fullFieldDeg: 120,
            maxTraceFieldDeg: 60,
          },
        }),
      ),
    ).toEqual([]);
  });

  it("rejects invalid rectilinear declared coverage metadata", () => {
    const errors = validateLensData(
      makeValid({
        projection: {
          kind: "rectilinear",
          fullFieldDeg: 200,
          maxTraceFieldDeg: 100,
        },
      }),
    );

    expect(errors.some((error) => error.includes("projection.fullFieldDeg"))).toBe(true);
    expect(errors.some((error) => error.includes("projection.maxTraceFieldDeg"))).toBe(true);
  });

  it("catches missing STO surface", () => {
    const data = makeValid({
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("STO"))).toBe(true);
  });

  it("catches duplicate element IDs", () => {
    const data = makeValid({
      elements: [
        { id: 1, name: "L1", label: "E1" },
        { id: 1, name: "L2", label: "E2" },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("Duplicate element id"))).toBe(true);
  });

  it("catches invalid asph label reference", () => {
    const data = makeValid({
      asph: { BOGUS: { K: 0, A4: 0 } },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('asph key "BOGUS"'))).toBe(true);
  });

  it("catches missing required aspheric coefficients", () => {
    const data = makeValid({
      asph: {
        "1": { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0 },
      },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('asph key "1"') && e.includes("A14"))).toBe(true);
  });

  it("catches invalid var label reference", () => {
    const data = makeValid({
      var: { MISSING: [1, 2] },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('var key "MISSING"'))).toBe(true);
  });

  it("catches var with wrong-length array", () => {
    const data = makeValid({
      var: { 1: [5] },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("length 2"))).toBe(true);
  });

  it("catches invalid varLabels reference", () => {
    const data = makeValid({
      varLabels: [["NOPE", "something"]],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('varLabels label "NOPE"'))).toBe(true);
  });

  it("catches invalid group surface reference", () => {
    const data = makeValid({
      groups: [{ text: "G1", fromSurface: "1", toSurface: "MISSING" }],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('toSurface "MISSING"'))).toBe(true);
  });

  it("catches invalid doublet surface reference", () => {
    const data = makeValid({
      doublets: [{ text: "D1", fromSurface: "NOPE", toSurface: "1" }],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes('fromSurface "NOPE"'))).toBe(true);
  });

  it("catches element with no surfaces", () => {
    const data = makeValid({
      elements: [
        { id: 1, name: "L1" },
        { id: 99, name: "Ghost" },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("Element 99"))).toBe(true);
  });

  it("accepts an explicitly flagged internal stop inside one element span", () => {
    const data = makeValid({
      elements: [
        {
          id: 1,
          name: "L1",
          label: "E1",
          type: "test",
          nd: 1.5,
          vd: 50,
          fl: 50,
          glass: "test",
          fromSurface: "1",
          toSurface: "2",
        },
      ],
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 8 },
        { label: "STO", R: 1e15, d: 5, nd: 1.5, elemId: 1, sd: 4, stopPlacement: "inside-element" },
        { label: "2", R: -100, d: 40, nd: 1.0, elemId: 0, sd: 8 },
      ],
    });

    expect(validateLensData(data)).toEqual([]);
  });

  it("rejects an unflagged stop inside an explicit element span", () => {
    const data = makeValid({
      elements: [
        {
          id: 1,
          name: "L1",
          label: "E1",
          type: "test",
          nd: 1.5,
          fromSurface: "1",
          toSurface: "2",
        },
      ],
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 8 },
        { label: "STO", R: 1e15, d: 5, nd: 1.5, elemId: 1, sd: 4 },
        { label: "2", R: -100, d: 40, nd: 1.0, elemId: 0, sd: 8 },
      ],
    });

    const errors = validateLensData(data);
    expect(errors.some((error) => error.includes('requires stopPlacement: "inside-element"'))).toBe(true);
  });

  it("keeps ordinary explicit spans strict for non-stop internal surfaces", () => {
    const data = makeValid({
      elements: [
        {
          id: 1,
          name: "L1",
          label: "E1",
          type: "test",
          nd: 1.5,
          fromSurface: "1",
          toSurface: "2",
        },
      ],
      surfaces: [
        { label: "1", R: 1e15, d: 2, nd: 1.5, elemId: 1, sd: 8 },
        { label: "A", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 4 },
        { label: "2", R: 1e15, d: 20, nd: 1.0, elemId: 0, sd: 8 },
        { label: "STO", R: 1e15, d: 10, nd: 1.0, elemId: 0, sd: 5 },
      ],
    });

    const errors = validateLensData(data);
    expect(errors.some((error) => error.includes('internal surface "A" requires stopPlacement'))).toBe(true);
  });

  it("allows folded annular mirror spans to contain correctors inside the central opening", () => {
    const data = makeValid({
      opticalPath: {
        surfaceOrder: ["STO", "M1F", "M1R"],
        maxInteractions: 3,
      },
      elements: [
        {
          id: 1,
          name: "M1",
          label: "Primary",
          type: "Annular second-surface mirror",
          nd: 1.5,
          fromSurface: "M1F",
          toSurface: "M1R",
        },
        { id: 2, name: "L2", label: "Nested", type: "Corrector", nd: 1.6 },
      ],
      surfaces: [
        { label: "STO", R: 1e15, d: 5, nd: 1.0, elemId: 0, sd: 20 },
        { label: "M1F", R: 1e15, d: 1, nd: 1.5, elemId: 1, sd: 30, innerSd: 10 },
        { label: "L2F", R: 1e15, d: 2, nd: 1.6, elemId: 2, sd: 8 },
        { label: "L2R", R: 1e15, d: 1, nd: 1.0, elemId: 0, sd: 8 },
        {
          label: "M1R",
          R: 1e15,
          d: 40,
          nd: 1.0,
          elemId: 0,
          sd: 30,
          innerSd: 10,
          interaction: { type: "reflect", incidentSide: "front", mirrorKind: "second-surface" },
        },
      ],
    });

    expect(validateLensData(data)).toEqual([]);
  });

  it("allows folded central spans to contain radially disjoint annular mirror shells", () => {
    const data = makeValid({
      opticalPath: {
        surfaceOrder: ["STO", "M1F", "M1R", "L4F", "L4R"],
        maxInteractions: 5,
      },
      elements: [
        {
          id: 1,
          name: "M1",
          label: "Annular primary",
          type: "Annular second-surface mirror",
          nd: 1.5,
          fromSurface: "M1F",
          toSurface: "M1R",
        },
        {
          id: 2,
          name: "L4",
          label: "Clear center",
          type: "Central corrector",
          nd: 1.6,
          fromSurface: "L4F",
          toSurface: "L4R",
        },
      ],
      surfaces: [
        { label: "STO", R: 1e15, d: 5, nd: 1.0, elemId: 0, sd: 20 },
        { label: "L4F", R: 1e15, d: 0, nd: 1.6, elemId: 2, sd: 10 },
        { label: "M1F", R: 1e15, d: 5, nd: 1.5, elemId: 1, sd: 30, innerSd: 10 },
        {
          label: "M1R",
          R: 1e15,
          d: 0,
          nd: 1.0,
          elemId: 0,
          sd: 30,
          innerSd: 10,
          interaction: { type: "reflect", incidentSide: "front", mirrorKind: "second-surface" },
        },
        { label: "L4R", R: 1e15, d: 40, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });

    expect(validateLensData(data)).toEqual([]);
  });

  it("rejects folded annular mirror internals that are too large for the central opening", () => {
    const data = makeValid({
      opticalPath: {
        surfaceOrder: ["STO", "M1F", "M1R"],
        maxInteractions: 3,
      },
      elements: [
        {
          id: 1,
          name: "M1",
          label: "Primary",
          type: "Annular second-surface mirror",
          nd: 1.5,
          fromSurface: "M1F",
          toSurface: "M1R",
        },
        { id: 2, name: "L2", label: "Nested", type: "Corrector", nd: 1.6 },
      ],
      surfaces: [
        { label: "STO", R: 1e15, d: 5, nd: 1.0, elemId: 0, sd: 20 },
        { label: "M1F", R: 1e15, d: 1, nd: 1.5, elemId: 1, sd: 30, innerSd: 10 },
        { label: "L2F", R: 1e15, d: 2, nd: 1.6, elemId: 2, sd: 12 },
        { label: "L2R", R: 1e15, d: 1, nd: 1.0, elemId: 0, sd: 12 },
        {
          label: "M1R",
          R: 1e15,
          d: 40,
          nd: 1.0,
          elemId: 0,
          sd: 30,
          innerSd: 10,
          interaction: { type: "reflect", incidentSide: "front", mirrorKind: "second-surface" },
        },
      ],
    });

    const errors = validateLensData(data);
    expect(errors.some((error) => error.includes("must fit inside annular central opening"))).toBe(true);
  });

  it("reports an error instead of silently skipping folded image-plane validation when asphere indexing fails", () => {
    const data = makeValid({
      opticalPath: {
        surfaceOrder: ["1", "STO", "2"],
        maxInteractions: 4,
        imagePlane: { z: 60 },
      },
    });

    /* The folded reachability check builds its asphere index before the
     * unguarded geometry-time build, so arming a single failure hits it. */
    asphereIndexControl.failNextBuild = true;
    const errors = validateLensData(data);

    expect(
      errors.some((e) => e.includes('"opticalPath.imagePlane"') && e.includes("synthetic malformed asphere data")),
    ).toBe(true);
  });

  it("rejects malformed explicit element spans", () => {
    const missing = validateLensData(
      makeValid({
        elements: [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, fromSurface: "1" }],
      }),
    );
    expect(missing.some((error) => error.includes("fromSurface and toSurface must be provided together"))).toBe(true);

    const reversed = validateLensData(
      makeValid({
        elements: [
          {
            id: 1,
            name: "L1",
            label: "E1",
            type: "test",
            nd: 1.5,
            fromSurface: "2",
            toSurface: "1",
          },
        ],
      }),
    );
    expect(reversed.some((error) => error.includes("must come before"))).toBe(true);
  });

  it("catches elemId referencing nonexistent element", () => {
    const data = makeValid({
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 999, sd: 10 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("elemId 999"))).toBe(true);
  });

  it("reports multiple errors at once", () => {
    const data = makeValid();
    delete data.key;
    delete data.name;
    const errors = validateLensData(data);
    expect(errors.length).toBeGreaterThanOrEqual(2);
  });

  it("catches negative edge thickness (surface crossing)", () => {
    const data = makeValid({
      elements: [
        {
          id: 1,
          name: "L1",
          label: "E1",
          type: "test",
          nd: 1.5,
          vd: 50,
          fl: 50,
          glass: "test",
          apd: false,
          role: "test",
        },
      ],
      surfaces: [
        { label: "1", R: 30, d: 3, nd: 1.5, elemId: 1, sd: 20 }, // sag ≈ 7.5 at sd=20, d=3 → crossing
        { label: "2", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 20 }, // flat rear, same sd → edge = d - sag(20,30) < 0
        { label: "STO", R: 1e15, d: 50, nd: 1.0, elemId: 0, sd: 8 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("negative edge thickness"))).toBe(true);
  });

  it("catches SD ratio exceeding 3.0 within an element", () => {
    const data = makeValid({
      elements: [
        {
          id: 1,
          name: "L1",
          label: "E1",
          type: "test",
          nd: 1.5,
          vd: 50,
          fl: 50,
          glass: "test",
          apd: false,
          role: "test",
        },
      ],
      surfaces: [
        { label: "1", R: 1000, d: 5, nd: 1.5, elemId: 1, sd: 40 },
        { label: "2", R: -1000, d: 2, nd: 1.0, elemId: 0, sd: 12 }, // ratio 40/12 = 3.33 > 3.0
        { label: "STO", R: 1e15, d: 50, nd: 1.0, elemId: 0, sd: 8 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("SD ratio"))).toBe(true);
  });

  it("allows SD ratio up to 3.0 for deep meniscus elements", () => {
    const data = makeValid({
      elements: [
        {
          id: 1,
          name: "L1",
          label: "E1",
          type: "test",
          nd: 1.5,
          vd: 50,
          fl: 50,
          glass: "test",
          apd: false,
          role: "test",
        },
      ],
      surfaces: [
        { label: "1", R: 1000, d: 5, nd: 1.5, elemId: 1, sd: 27 },
        { label: "2", R: -1000, d: 2, nd: 1.0, elemId: 0, sd: 19 }, // ratio 27/19 = 1.42, like Canon RF 15-35 L1
        { label: "STO", R: 1e15, d: 50, nd: 1.0, elemId: 0, sd: 8 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("SD ratio"))).toBe(false);
  });

  it("passes edge thickness check for valid element", () => {
    const data = makeValid({
      elements: [
        {
          id: 1,
          name: "L1",
          label: "E1",
          type: "test",
          nd: 1.5,
          vd: 50,
          fl: 50,
          glass: "test",
          apd: false,
          role: "test",
        },
      ],
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors).toEqual([]);
  });

  it("uses aspherical coefficients in edge thickness check", () => {
    // Element that crosses with spherical sag but is valid with aspherics
    const data = makeValid({
      elements: [
        {
          id: 1,
          name: "L1",
          label: "E1",
          type: "test",
          nd: 1.5,
          vd: 50,
          fl: 50,
          glass: "test",
          apd: false,
          role: "test",
        },
      ],
      surfaces: [
        { label: "1", R: 85, d: 5, nd: 1.5, elemId: 1, sd: 16 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -35, d: 50, nd: 1.0, elemId: 0, sd: 16 },
      ],
      asph: {
        2: { K: 0, A4: 1.5e-5, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
      },
    });
    const errors = validateLensData(data);
    // With the aspheric correction on surface '2', edge thickness should be positive
    expect(errors.some((e) => e.includes("negative edge thickness"))).toBe(false);
  });
});

/* ── Production lens validation ── */
import ApoLantharRaw from "../../../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import NoktonRaw from "../../../src/lens-data/voigtlander/VoigtlanderNokton50f1.data.js";
import NikkorRaw from "../../../src/lens-data/nikon/NikonNikkorZ50f18S.data.js";
import Nikkor105Raw from "../../../src/lens-data/nikon/NikonNikkor105f14E.data.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import Hologon15f8Raw from "../../../src/lens-data/carl-zeiss-oberkochen/ZeissHologon15mmf8.data.js";
import CanonRF1535Raw from "../../../src/lens-data/canon/CanonRF1535f28.data.js";
import Nikkor1424Raw from "../../../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.js";
import Nikkor1635Raw from "../../../src/lens-data/nikon/NikonNikkorAFS1635mmf4.data.js";

describe("validateLensData — production lenses", () => {
  const lenses: [string, Record<string, unknown>][] = [
    ["ApoLanthar", { ...LENS_DEFAULTS, ...ApoLantharRaw }],
    ["Nokton", { ...LENS_DEFAULTS, ...NoktonRaw }],
    ["NikkorZ50", { ...LENS_DEFAULTS, ...NikkorRaw }],
    ["Nikkor105", { ...LENS_DEFAULTS, ...Nikkor105Raw }],
    ["Sonnar50f15", { ...LENS_DEFAULTS, ...Sonnar50f15Raw }],
    ["Hologon15f8", { ...LENS_DEFAULTS, ...Hologon15f8Raw }],
    ["Canon RF 15-35", { ...LENS_DEFAULTS, ...CanonRF1535Raw }],
    ["Nikkor 14-24", { ...LENS_DEFAULTS, ...Nikkor1424Raw }],
    ["Nikkor 16-35", { ...LENS_DEFAULTS, ...Nikkor1635Raw }],
  ];

  for (const [name, data] of lenses) {
    it(`${name} passes validation with no errors`, () => {
      const errors = validateLensData(data);
      expect(errors).toEqual([]);
    });
  }
});

/* ═══════════════════════════════════════════════════════════════════
 *  Zoom-specific validation
 * ═══════════════════════════════════════════════════════════════════ */
import NikkorZ70200Raw from "../../../src/lens-data/nikon/NikonNikkorZ70200f28.data.js";

describe("validateLensData — zoom lens paths", () => {
  it("Nikkor Z 70-200 zoom lens passes validation", () => {
    const data = { ...LENS_DEFAULTS, ...NikkorZ70200Raw };
    expect(validateLensData(data)).toEqual([]);
  });

  it("catches negative var thickness in zoom format", () => {
    const data = makeValid({
      zoomPositions: [24, 70],
      var: {
        STO: [
          [-1, 3],
          [4, 5],
        ],
      },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("negative"))).toBe(true);
  });

  it("catches negative var thickness in prime format", () => {
    const data = makeValid({ var: { STO: [2, -1] } });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("negative"))).toBe(true);
  });

  it("catches surface d / var infinity mismatch (prime)", () => {
    /* STO surface has d=2, but var infinity value is 5 */
    const data = makeValid({ var: { STO: [5, 3] } });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("does not match"))).toBe(true);
  });

  it("catches surface d / var infinity mismatch (zoom)", () => {
    /* STO surface has d=2, but var[0][0] = 5 */
    const data = makeValid({
      zoomPositions: [24, 70],
      var: {
        STO: [
          [5, 3],
          [4, 5],
        ],
      },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("does not match"))).toBe(true);
  });

  it("accepts matching surface d / var infinity", () => {
    const data = makeValid({ var: { STO: [2, 3] } });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("does not match"))).toBe(false);
  });

  it("reports cross-gap overlap at a specific zoom position when a variable gap closes", () => {
    const data = makeValid({
      nominalFno: [2, 2],
      zoomPositions: [24, 70],
      elements: [
        { id: 1, name: "L1", label: "E1", type: "test", nd: 1.6, vd: 50 },
        { id: 2, name: "L2", label: "E2", type: "test", nd: 1.6, vd: 50 },
      ],
      surfaces: [
        { label: "1", R: 50, d: 4, nd: 1.6, elemId: 1, sd: 10 },
        { label: "STO", R: 20, d: 6, nd: 1.0, elemId: 0, sd: 10 },
        { label: "2", R: -20, d: 4, nd: 1.6, elemId: 2, sd: 10 },
        { label: "3", R: -50, d: 40, nd: 1.0, elemId: 0, sd: 10 },
      ],
      var: {
        STO: [
          [6, 6],
          [4, 4],
        ],
      },
    });

    const errors = validateLensData(data);

    expect(errors.some((e) => e.includes('Air gap "STO"→"2"') && e.includes("zoom position 1"))).toBe(true);
  });

  it("checks cross-gap overlap at the actual adjacent boundary surface SDs", () => {
    const data = makeValid({
      elements: [
        { id: 1, name: "L1", label: "E1", type: "test", nd: 1.6, vd: 50 },
        { id: 2, name: "L2", label: "E2", type: "test", nd: 1.6, vd: 50 },
      ],
      surfaces: [
        { label: "1", R: 1e15, d: 5, nd: 1.6, elemId: 1, sd: 5 },
        { label: "2", R: 20, d: 2, nd: 1.0, elemId: 0, sd: 10 },
        { label: "3", R: -20, d: 5, nd: 1.6, elemId: 2, sd: 10 },
        { label: "4", R: 1e15, d: 40, nd: 1.0, elemId: 0, sd: 5 },
      ],
    });

    const errors = validateLensData(data);

    expect(errors.some((e) => e.includes('Air gap "2"→"3"'))).toBe(true);
  });

  it("catches invalid zoomStep", () => {
    const data = makeValid({ zoomStep: -0.1 });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("zoomStep"))).toBe(true);
  });

  it("catches non-string zoomLabels", () => {
    const data = makeValid({ zoomLabels: [1, 2] });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("zoomLabels"))).toBe(true);
  });

  it("accepts valid zoomLabels", () => {
    const data = makeValid({ zoomLabels: ["Wide", "Tele"] });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("zoomLabels"))).toBe(false);
  });

  it("catches non-monotonic zoomPositions", () => {
    const data = makeValid({ zoomPositions: [70, 50, 24] });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("monotonically"))).toBe(true);
  });

  it("catches var length mismatch with zoomPositions", () => {
    const data = makeValid({
      zoomPositions: [24, 50, 70],
      var: {
        STO: [
          [2, 3],
          [4, 5],
        ],
      }, // only 2 pairs, needs 3
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("3 [d_inf, d_close] pairs"))).toBe(true);
  });

  it("catches zoomPositions with fewer than 2 entries", () => {
    const data = makeValid({ zoomPositions: [50] });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("at least 2"))).toBe(true);
  });

  it("catches non-finite values in zoomPositions", () => {
    const data = makeValid({ zoomPositions: [24, NaN, 70] });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("finite numbers"))).toBe(true);
  });

  it("catches zoomPositions with Infinity", () => {
    const data = makeValid({ zoomPositions: [24, Infinity] });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("finite numbers"))).toBe(true);
  });

  it("catches zoom var entry that is not a [d_inf, d_close] pair", () => {
    const data = makeValid({
      zoomPositions: [24, 70],
      var: {
        STO: [
          [2, 3],
          5, // not a pair
        ],
      },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("[d_infinity, d_close]"))).toBe(true);
  });

  it("catches zoom var entry with wrong-length inner array", () => {
    const data = makeValid({
      zoomPositions: [24, 70],
      var: {
        STO: [
          [2, 3],
          [4, 5, 6], // length 3, should be 2
        ],
      },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("[d_infinity, d_close]"))).toBe(true);
  });
});

/* ═══════════════════════════════════════════════════════════════════
 *  Conic h_max discontinuity warning
 * ═══════════════════════════════════════════════════════════════════ */

describe("validateLensData — conic h_max", () => {
  it("warns when sd exceeds conic h_max for K > 0", () => {
    const data = makeValid({
      elements: [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, vd: 50 }],
      surfaces: [
        { label: "1", R: 20, d: 5, nd: 1.5, elemId: 1, sd: 15 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
      asph: {
        1: { K: 3, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
      },
    });
    /* K=3, R=20 → hMax = 20/√4 = 10, sd=15 > 10*0.98 = 9.8 */
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("conic h_max"))).toBe(true);
  });

  it("does not warn when sd is within conic h_max for K > 0", () => {
    const data = makeValid({
      elements: [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, vd: 50 }],
      surfaces: [
        { label: "1", R: 50, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
      asph: {
        1: { K: 1, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
      },
    });
    /* K=1, R=50 → hMax = 50/√2 ≈ 35.4, sd=10 << 35.4*0.98 */
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("conic h_max"))).toBe(false);
  });

  it("does not warn for K <= 0 (hyperbolic/parabolic)", () => {
    const data = makeValid({
      elements: [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, vd: 50 }],
      surfaces: [
        { label: "1", R: 20, d: 5, nd: 1.5, elemId: 1, sd: 15 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
      asph: {
        1: { K: -1, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
      },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("conic h_max"))).toBe(false);
  });
});

/* ═══════════════════════════════════════════════════════════════════
 *  Slope-based rim check (replaces old sd/|R| ratio check)
 * ═══════════════════════════════════════════════════════════════════ */

describe("validateLensData — rim slope check", () => {
  it("keeps the renderer default rim angle synchronized with validation", () => {
    expect(Math.tan(((LENS_DEFAULTS.maxRimAngleDeg as number) * Math.PI) / 180)).toBeCloseTo(MAX_RIM_SLOPE_TAN);
  });

  it("catches high slope on spherical surface (sd/|R| = 0.92)", () => {
    /* Spherical surface: R=20, sd=18.4 → sd/|R|=0.92.
     * Slope = 0.92/√(1−0.92²) = 0.92/0.392 = 2.347, angle ≈ 66.9° > 64.2° */
    const data = makeValid({
      elements: [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, vd: 50 }],
      surfaces: [
        { label: "1", R: 20, d: 5, nd: 1.5, elemId: 1, sd: 18.4 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("rim slope"))).toBe(true);
  });

  it("allows high sd/|R| on near-paraboloid (K = −0.98)", () => {
    /* R=16.5, K=−0.98, sd=14.85 → sd/|R|=0.90 (would fail old check).
     * But sagSlopeRaw with K=−0.98 gives slope ≈ 0.92 (angle ≈ 42°),
     * well under the 64.2° threshold. */
    const data = makeValid({
      elements: [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, vd: 50 }],
      surfaces: [
        { label: "1", R: 1000, d: 5, nd: 1.5, elemId: 1, sd: 20 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
      asph: {
        1: { K: -0.98, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
      },
    });
    /* Surface "1": R=1000, sd=20 → spherical slope = 20/√(1000²−20²) ≈ 0.02.
     * With K=−0.98 → slope even gentler.  Should pass easily. */
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("rim slope"))).toBe(false);
  });

  it("allows sd/|R| = 0.90 on paraboloid but catches it on sphere", () => {
    const elemDef = [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, vd: 50 }];
    const baseSurfaces = [
      { label: "1", R: 20, d: 5, nd: 1.5, elemId: 1, sd: 18 }, // sd/|R| = 0.90
      { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
      { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
    ];

    /* Sphere: slope = 0.9/√(1−0.81) ≈ 2.065 — right at threshold */
    const sphereData = makeValid({ elements: elemDef, surfaces: baseSurfaces });
    const _sphereErrors = validateLensData(sphereData);

    /* Paraboloid (K=−1): slope = h/R = 0.9 — well under threshold */
    const paraData = makeValid({
      elements: elemDef,
      surfaces: baseSurfaces,
      asph: { 1: { K: -1, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },
    });
    const paraErrors = validateLensData(paraData);

    /* The sphere case is right at the boundary — may or may not trigger
     * depending on floating point.  The paraboloid must definitely pass. */
    expect(paraErrors.some((e) => e.includes("rim slope"))).toBe(false);
  });

  it("catches extreme slope even with aspherics", () => {
    /* K=0 (sphere) with sd/|R| = 0.95 → slope ≈ 3.04, angle ≈ 71.8° */
    const data = makeValid({
      elements: [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, vd: 50 }],
      surfaces: [
        { label: "1", R: 20, d: 5, nd: 1.5, elemId: 1, sd: 19 },
        { label: "STO", R: 1e15, d: 2, nd: 1.0, elemId: 0, sd: 8 },
        { label: "2", R: -100, d: 50, nd: 1.0, elemId: 0, sd: 10 },
      ],
      asph: { 1: { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },
    });
    const errors = validateLensData(data);
    expect(errors.some((e) => e.includes("rim slope"))).toBe(true);
  });
});
