import { describe, expect, it } from "vitest";
import { mtfFiniteConjugate, mtfFiniteObjectPoint } from "../../../../src/optics/analysis/mtfConjugates.js";
import { paraxialTrace } from "../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import {
  attachTeleconverter,
  TeleconverterAttachError,
  teleconverterGroupLabel,
} from "../../../../src/optics/prescription/teleconverter.js";
import {
  MIN_TELECONVERTER_GAP_MM,
  rearPlateAirEquivalentMm,
  teleconverterCompatibility,
  teleconverterGeometry,
} from "../../../../src/optics/prescription/teleconverterCompatibility.js";
import validateLensData from "../../../../src/optics/validateLensData.js";
import validateTeleconverterData from "../../../../src/optics/validateTeleconverterData.js";
import type { LensData, RuntimeLens } from "../../../../src/types/optics.js";
import type { TeleconverterIncompatibility } from "../../../../src/types/teleconverter.js";
import {
  build,
  REAR_PLATE_FIXTURE,
  TELECONVERTER_FIXTURE_OBJECT_DISTANCE_MM,
  teleconverterFixture,
  teleconverterHostData,
  teleconverterZoomHostData,
} from "../testLensFixtures.js";

/** Signed distance from the authored image plane to the paraxial focus of the built system, in mm. */
function paraxialDefocus(L: RuntimeLens): number {
  const { y, u } = paraxialTrace(L.S, 1, 0, { skipLastTransfer: true });
  return -y / u - L.S[L.N - 1].d;
}

function lastGapOf(data: LensData): number {
  return data.surfaces[data.surfaces.length - 1].d;
}

describe("teleconverterCompatibility", () => {
  const tc = teleconverterFixture();

  it("accepts a declared host that shares a mount and reports the composed spacing", () => {
    const host = teleconverterHostData();
    const fit = teleconverterCompatibility(host, tc);

    expect(fit.ok).toBe(true);
    if (!fit.ok) return;
    const tcBackFocus = lastGapOf(tc as unknown as LensData);
    expect(fit.geometry.minJunctionGapMm).toBeCloseTo(lastGapOf(host) - TELECONVERTER_FIXTURE_OBJECT_DISTANCE_MM, 9);
    expect(fit.geometry.finalGapMm).toBeCloseTo(tcBackFocus, 9);
    /* Extension = converter vertex length (2 mm) + back focus − object distance. */
    expect(fit.geometry.extensionMm).toBeCloseTo(2 + tcBackFocus - TELECONVERTER_FIXTURE_OBJECT_DISTANCE_MM, 9);
  });

  it("names the first failing fit rule", () => {
    const cases: [TeleconverterIncompatibility, LensData, Parameters<typeof teleconverterFixture>[0]][] = [
      ["mount", teleconverterHostData({ overrides: { lensMounts: ["canon-ef"] } }), {}],
      ["not-declared", teleconverterHostData({ overrides: { acceptsTeleconverters: false } }), {}],
      ["excluded", teleconverterHostData(), { incompatibleLensKeys: ["test-teleconverter-host"] }],
      ["folded-host", teleconverterHostData({ overrides: { opticalPath: { mode: "auto" } } }), {}],
      [
        "projection",
        teleconverterHostData({
          overrides: { projection: { kind: "fisheye-equidistant", focalLengthMm: 16, fullFieldDeg: 180 } },
        }),
        {},
      ],
      [
        "perspective-control",
        teleconverterHostData({ overrides: { perspectiveControl: { shiftRangeMm: [-10, 10], tiltRangeDeg: [0, 0] } } }),
        {},
      ],
      ["host-too-fast", teleconverterHostData(), { minHostFno: 2.8 }],
      ["clearance", teleconverterHostData(), { masterImageDistanceMm: 60 }],
      /* A plate behind the converter's first vertex but too deep to fit behind its last one: the converter's body
         would have to occupy it. */
      [
        "clearance",
        teleconverterHostData({ plates: [{ ...REAR_PLATE_FIXTURE, thicknessMm: 30, gapAfterMm: 29 }] }),
        {},
      ],
    ];

    for (const [reason, host, tcOverrides] of cases) {
      expect(teleconverterCompatibility(host, teleconverterFixture(tcOverrides))).toEqual({ ok: false, reason });
    }
  });

  it("lets a universal converter mount on an undeclared host, but never on a composed system", () => {
    const undeclared = teleconverterHostData({ overrides: { acceptsTeleconverters: undefined } });
    const universal = teleconverterFixture({ universal: true });

    expect(teleconverterCompatibility(undeclared, universal).ok).toBe(true);
    expect(teleconverterCompatibility(attachTeleconverter(undeclared, universal), universal)).toEqual({
      ok: false,
      reason: "stacked",
    });
  });

  it("requires the junction to clear by the minimum gap in every authored focus state", () => {
    const host = teleconverterHostData({ lastGapFocusOffsets: [0, -lastGapOf(teleconverterHostData()) + 30.05] });
    const geometry = teleconverterGeometry(host, tc);

    expect(geometry.minJunctionGapMm).toBeCloseTo(0.05, 9);
    expect(geometry.minJunctionGapMm).toBeLessThan(MIN_TELECONVERTER_GAP_MM);
    expect(teleconverterCompatibility(host, tc)).toEqual({ ok: false, reason: "clearance" });
  });
});

describe("host rear plates around a teleconverter", () => {
  const tc = teleconverterFixture();
  /* 40 mm ahead of the image is in front of a converter whose object distance is 30 mm: a lens-side drop-in filter. */
  const dropIn = { ...REAR_PLATE_FIXTURE, label: "F", gapAfterMm: 40 };

  it("keeps a lens-side plate ahead of the converter and leaves the host's last gap alone", () => {
    const hostData = teleconverterHostData({ plates: [dropIn], lastGapFocusOffsets: [0, 3] });
    const geometry = teleconverterGeometry(hostData, tc);
    const composedData = attachTeleconverter(hostData, tc);
    const composed = build(composedData);

    expect(geometry).toMatchObject({ platesAhead: 1, lastGapShiftMm: 0 });
    expect(geometry.plateJunctionGapMm).toBeCloseTo(10, 9);
    expect(geometry.minJunctionGapMm).toBeCloseTo(10, 9);
    expect(composedData.surfaces[2].d).toBe(lastGapOf(hostData));
    expect(composedData.var!["2"]).toEqual(hostData.var!["2"]);
    expect(composedData.varLabels).toEqual([["2", "BF"]]);
    expect(composedData.attachedTeleconverter?.platesAhead).toBe(1);
    expect(composed.S.map((surface) => surface.label)).toEqual(["STO", "1", "2", "RP1a", "RP1b", "TC1", "TC2"]);
    expect(composed.S[4].d).toBeCloseTo(10, 9);
    expect(composed.lastLensSurfaceIdx).toBe(6);
  });

  it("gives the same first-order system whether the plate is modeled or folded into the back focus", () => {
    const bare = build(attachTeleconverter(teleconverterHostData(), tc));
    const plated = build(attachTeleconverter(teleconverterHostData({ plates: [dropIn] }), tc));
    const hostAlone = build(teleconverterHostData({ plates: [dropIn] }));

    expect(Math.abs(paraxialDefocus(plated))).toBeLessThan(1e-9);
    expect(plated.EFL).toBeCloseTo(bare.EFL, 9);
    expect(plated.stopPhysSD).toBeCloseTo(hostAlone.stopPhysSD, 9);
    expect(plated.EP.epSD).toBeCloseTo(hostAlone.EP.epSD, 9);
  });

  it("splits a mixed stack: the drop-in filter ahead, the sensor cover glass behind", () => {
    const hostData = teleconverterHostData({ plates: [{ ...dropIn, gapAfterMm: 38 }, REAR_PLATE_FIXTURE] });
    const coverAirEq = rearPlateAirEquivalentMm([REAR_PLATE_FIXTURE]);
    const composed = build(attachTeleconverter(hostData, tc));

    expect(composed.S.map((surface) => surface.label)).toEqual([
      "STO",
      "1",
      "2",
      "RP1a",
      "RP1b",
      "TC1",
      "TC2",
      "RP2a",
      "RP2b",
    ]);
    /* Junction: the drop-in's rear face is 38 mm + the cover stack (air) from the image; the object is 30 mm. */
    expect(composed.S[4].d).toBeCloseTo(38 + coverAirEq - TELECONVERTER_FIXTURE_OBJECT_DISTANCE_MM, 9);
    expect(composed.S[6].d).toBeCloseTo(lastGapOf(tc as unknown as LensData) - coverAirEq, 9);
    expect(Math.abs(paraxialDefocus(composed))).toBeLessThan(1e-9);
  });

  it("rejects a descriptor whose plates-ahead count does not match the plate list", () => {
    const composedData = attachTeleconverter(teleconverterHostData({ plates: [dropIn] }), tc);
    const errors = validateLensData({
      ...composedData,
      attachedTeleconverter: { ...composedData.attachedTeleconverter!, platesAhead: 2 },
    });

    expect(errors.some((error) => error.includes('"attachedTeleconverter.platesAhead"'))).toBe(true);
    expect(validateLensData(composedData)).toEqual([]);
  });
});

describe("attachTeleconverter", () => {
  const tc = teleconverterFixture();

  it("keeps the host's physical stop and entrance pupil while lengthening the focal length", () => {
    const hostData = teleconverterHostData();
    const host = build(hostData);
    const composed = build(attachTeleconverter(hostData, tc));
    const ratio = composed.EFL / host.EFL;

    expect(composed.stopPhysSD).toBeCloseTo(host.stopPhysSD, 9);
    expect(composed.EP.epSD).toBeCloseTo(host.EP.epSD, 9);
    expect(composed.stopIdx).toBe(host.stopIdx);
    expect(ratio).toBeCloseTo(1.4, 1);
    expect(composed.FOPEN).toBeCloseTo(host.FOPEN * ratio, 9);
  });

  it("turns a scalar zoom f-number into per-station values that preserve every station's pupil", () => {
    const hostData = teleconverterZoomHostData();
    const composedData = attachTeleconverter(hostData, tc);
    const host = build(hostData);
    const composed = build(composedData);

    expect(Array.isArray(composedData.nominalFno)).toBe(true);
    expect(composed.stopPhysSD).toBeCloseTo(host.stopPhysSD, 9);
    host.zoomEPs!.forEach((epSD, station) => expect(composed.zoomEPs![station]).toBeCloseTo(epSD, 9));
    host.zoomEFLs!.forEach((efl, station) => {
      expect(composed.zoomEFLs![station] / efl).toBeCloseTo(1.4, 1);
      expect(composedData.zoomPositions![station]).toBeCloseTo(composed.zoomEFLs![station], 1);
    });
  });

  it("preserves per-station iris radii inferred from nominal f-numbers", () => {
    const hostData = teleconverterZoomHostData({ zoomApertureModel: "from-nominal-fno", nominalFno: [4, 4.5, 5.6] });
    const host = build(hostData);
    const composed = build(attachTeleconverter(hostData, tc));

    expect(host.zoomStopSDs).toHaveLength(3);
    host.zoomStopSDs!.forEach((sd, station) => expect(composed.zoomStopSDs![station]).toBeCloseTo(sd, 9));
  });

  it("leaves a focused host in paraxial focus, with or without modeled rear plates", () => {
    const plates = [REAR_PLATE_FIXTURE];
    const bare = build(attachTeleconverter(teleconverterHostData(), tc));
    const plated = build(attachTeleconverter(teleconverterHostData({ plates }), tc));

    expect(Math.abs(paraxialDefocus(bare))).toBeLessThan(1e-9);
    expect(Math.abs(paraxialDefocus(plated))).toBeLessThan(1e-9);
    expect(plated.EFL).toBeCloseTo(bare.EFL, 9);
    /* The plate stays behind the converter: its air-equivalent length comes out of the converter's back focus. */
    expect(plated.S[plated.lastLensSurfaceIdx].d).toBeCloseTo(
      lastGapOf(bare.data) - rearPlateAirEquivalentMm(plates),
      9,
    );
    expect(plated.S[plated.N - 1].synthetic).toBe("rearPlate");
  });

  it("moves the host's focus variation onto the junction gap", () => {
    const hostData = teleconverterHostData({ lastGapFocusOffsets: [0, 5] });
    const composed = attachTeleconverter(hostData, tc);
    const junction = lastGapOf(hostData) - TELECONVERTER_FIXTURE_OBJECT_DISTANCE_MM;

    expect(composed.surfaces[2].d).toBeCloseTo(junction, 9);
    expect((composed.var!["2"] as number[])[0]).toBeCloseTo(junction, 9);
    expect((composed.var!["2"] as number[])[1]).toBeCloseTo(junction + 5, 9);
    expect(composed.varLabels).toEqual([["2", "D(TC)"]]);
    expect(lastGapOf(composed)).toBeCloseTo(lastGapOf(tc as unknown as LensData), 9);
    expect(() => build(composed)).not.toThrow();
  });

  it("namespaces converter labels, element ids and cemented tags and records a descriptor", () => {
    const hostData = teleconverterHostData();
    const cemented = teleconverterFixture({
      elements: [{ ...tc.elements[0], cemented: "D1" }],
      doublets: [{ text: "D1", fromSurface: "1", toSurface: "2" }],
    });
    const composed = attachTeleconverter(
      { ...hostData, doublets: [{ text: "D1", fromSurface: "1", toSurface: "2" }] },
      cemented,
    );

    expect(composed.surfaces.map((surface) => surface.label)).toEqual(["STO", "1", "2", "TC1", "TC2"]);
    expect(composed.surfaces[3].elemId).toBe(2);
    expect(composed.elements[1]).toMatchObject({ id: 2, cemented: "TC D1", diagramLabel: "T1" });
    expect(composed.doublets).toEqual([
      { text: "D1", fromSurface: "1", toSurface: "2" },
      { text: "TC D1", fromSurface: "TC1", toSurface: "TC2" },
    ]);
    expect(composed.attachedTeleconverter).toEqual({
      key: "test-teleconverter",
      name: "Test 1.4x converter",
      magnification: 1.4,
      hostKey: "test-teleconverter-host",
      hostName: "Test converter host",
      firstSurfaceLabel: "TC1",
      lastSurfaceLabel: "TC2",
      firstElementId: 2,
    });
  });

  it("adds a converter group only when the host authors groups", () => {
    const hostData = teleconverterHostData();
    const grouped = { ...hostData, groups: [{ text: "G1", fromSurface: "1", toSurface: "2" }] };

    expect(attachTeleconverter(hostData, tc).groups).toBeUndefined();
    expect(attachTeleconverter(grouped, tc).groups).toEqual([
      { text: "G1", fromSurface: "1", toSurface: "2" },
      { text: teleconverterGroupLabel(1.4), fromSurface: "TC1", toSurface: "TC2" },
    ]);
  });

  it("rescales the first-order metadata buildLens and the controls rely on", () => {
    const hostData = teleconverterHostData({
      overrides: { focalLengthDesign: 49, focalLengthMarketing: 50, apertureMarketing: 2, zoomLabels: ["x"] },
    });
    const composedData = attachTeleconverter(hostData, tc);
    const composed = build(composedData);
    const ratio = composed.EFL / build(hostData).EFL;
    const extensionM = teleconverterGeometry(hostData, tc).extensionMm / 1000;

    expect(composedData.key).toBe("test-teleconverter-host-x-test-teleconverter");
    expect(composedData.name).toBe("Test converter host + Test 1.4x converter");
    expect(composedData.focalLengthDesign).toBeCloseTo(49 * ratio, 9);
    expect(composedData.focalLengthMarketing).toBe(70);
    expect(composedData.apertureMarketing).toBe(2.8);
    expect(composedData.closeFocusM).toBeCloseTo(0.5 + extensionM, 12);
    expect(composedData.elementCount).toBe(2);
    expect(composedData.acceptsTeleconverters).toBeUndefined();
    expect(composedData.zoomLabels).toBeUndefined();
    /* The first quick-stop must coincide with wide-open, and the last must survive the `<= maxFstop` filter. */
    expect(Math.abs(composedData.fstopSeries[0] - composed.FOPEN)).toBeLessThanOrEqual(0.001);
    expect(composedData.maxFstop).toBeGreaterThanOrEqual(composedData.fstopSeries[composedData.fstopSeries.length - 1]);
  });

  it("keeps a finite conjugate on the same object point, whichever end its distance is measured from", () => {
    /* MTF places the source at the conjugate's distance from its reference; the converter moves only the image plane. */
    const objectZ = (data: LensData): number => {
      const state = prepareRuntimeState(build(data), 1, 0);
      return mtfFiniteObjectPoint(state, mtfFiniteConjugate(state)!, 0)![2] - state.surfaces[0].z;
    };

    for (const plates of [undefined, [REAR_PLATE_FIXTURE]]) {
      for (const distanceReference of ["image-plane", "first-surface"] as const) {
        const conjugate = { focusT: 1, zoomT: 0, objectDistanceMm: 1000, distanceReference, source: "Synthetic" };
        const hostData = teleconverterHostData({
          lastGapFocusOffsets: [0, 5],
          plates,
          overrides: { finiteConjugates: [conjugate] },
        });
        const composedData = attachTeleconverter(hostData, tc);

        expect(validateLensData(composedData)).toEqual([]);
        expect(objectZ(composedData)).toBeCloseTo(objectZ(hostData), 9);
      }
    }
  });

  it("narrows a declared rectilinear coverage by the focal ratio", () => {
    const hostData = teleconverterHostData({
      overrides: { projection: { kind: "rectilinear", fullFieldDeg: 40, maxTraceFieldDeg: 18 } },
    });
    const composedData = attachTeleconverter(hostData, tc);
    const ratio = build(composedData).EFL / build(hostData).EFL;
    const projection = composedData.projection as { fullFieldDeg: number; maxTraceFieldDeg: number };
    const narrowed = (deg: number) => (Math.atan(Math.tan((deg * Math.PI) / 180) / ratio) * 180) / Math.PI;

    expect(projection.fullFieldDeg).toBeCloseTo(2 * narrowed(20), 9);
    expect(projection.maxTraceFieldDeg).toBeCloseTo(narrowed(18), 9);
  });

  it("throws a typed error instead of composing a system whose glass would touch", () => {
    const hostData = teleconverterHostData();
    const touching = teleconverterFixture({ masterImageDistanceMm: lastGapOf(hostData) });

    expect(() => attachTeleconverter(hostData, touching)).toThrow(TeleconverterAttachError);
    try {
      attachTeleconverter(hostData, touching);
    } catch (error) {
      expect((error as TeleconverterAttachError).reason).toBe("clearance");
    }
  });
});

describe("validateTeleconverterData", () => {
  const errorsFor = (overrides: Parameters<typeof teleconverterFixture>[0]) =>
    validateTeleconverterData(teleconverterFixture(overrides));
  const has = (errors: string[], text: string) => errors.some((error) => error.includes(text));

  it("accepts the fixture converter", () => {
    expect(errorsFor({})).toEqual([]);
  });

  it("rejects identity and fit fields that are missing or malformed", () => {
    const errors = validateTeleconverterData({
      ...teleconverterFixture(),
      key: "Bad Key",
      magnification: 1,
      lensMounts: [],
      universal: "yes",
      minHostFno: 0,
      incompatibleLensKeys: ["Not A Key"],
      masterImageDistanceMm: -1,
    });

    for (const text of [
      '"key" must be lowercase',
      '"magnification" must be a finite number > 1',
      '"lensMounts" must not be empty',
      '"universal" must be a boolean',
      '"minHostFno" must be',
      '"incompatibleLensKeys" must be',
      '"masterImageDistanceMm" must be',
    ]) {
      expect(has(errors, text)).toBe(true);
    }
  });

  it("rejects a stop, lens-only fields and explicit element spans", () => {
    const tc = teleconverterFixture();
    expect(
      has(errorsFor({ surfaces: [{ ...tc.surfaces[0], label: "STO" }, tc.surfaces[1]] }), "no aperture stop"),
    ).toBe(true);
    expect(has(validateTeleconverterData({ ...tc, var: { "2": [1, 2] } }), '"var" is a lens field')).toBe(true);
    expect(
      has(validateTeleconverterData({ ...tc, publishedStations: { focus: [1] } }), '"publishedStations" is a lens'),
    ).toBe(true);
    expect(
      has(
        errorsFor({ elements: [{ ...tc.elements[0], fromSurface: "1", toSurface: "2" }] }),
        "spans are not supported",
      ),
    ).toBe(true);
  });

  it("applies the lens surface rules to converter surfaces under default thresholds", () => {
    const tc = teleconverterFixture();
    /* sd 53 on |R| = 54 is past the default rim-slope limit; the message names the composed label. */
    const errors = errorsFor({
      surfaces: [
        { ...tc.surfaces[0], sd: 53 },
        { ...tc.surfaces[1], sd: 53 },
      ],
    });

    expect(has(errors, 'Surface "TC1": rim slope')).toBe(true);
  });

  it("checks the authored back focus and magnification against the converter's own first-order optics", () => {
    expect(has(errorsFor({ masterImageDistanceMm: 40 }), "Back focus mismatch")).toBe(true);
    expect(has(errorsFor({ magnification: 2 }), "Magnification mismatch")).toBe(true);
  });

  it("folds source-listed rear plates into the back focus it checks", () => {
    const tc = teleconverterFixture();
    const plates = [REAR_PLATE_FIXTURE];
    const lastGap = tc.surfaces[1].d - rearPlateAirEquivalentMm(plates);

    expect(errorsFor({ rearPlates: plates, surfaces: [tc.surfaces[0], { ...tc.surfaces[1], d: lastGap }] })).toEqual(
      [],
    );
    expect(has(errorsFor({ rearPlates: plates }), "Back focus mismatch")).toBe(true);
  });
});
