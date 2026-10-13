import { describe, expect, it } from "vitest";
import buildLens from "../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import {
  cameraDirectionForDiagramField,
  tracePerspectiveDiagramFan,
} from "../../../../src/optics/perspective/diagramFan.js";
import {
  cameraPointToDiagram,
  perspectiveTraceToDiagram,
  perspectiveVectorLeadPoint,
} from "../../../../src/optics/perspective/diagramTrace.js";
import { createPerspectiveTraceContext } from "../../../../src/optics/perspective/trace.js";
import { LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";

/* The ray hooks mock these adapters, so this is their only direct coverage: the moved-optics
 * diagram rays drawn whenever shift or tilt is active. A real PC lens is the fixture because the
 * adapters need a perspective-control pose; the assertions describe the adapter contract only. */
const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
const context = createPerspectiveTraceContext({
  preparedState: prepareRuntimeState(L, 0, 0),
  movement: { shiftMm: 6, tiltDeg: 2 },
  tiltPivot: L.perspectiveControl?.tiltPivot,
});

function fan(fractions: readonly number[], fieldDeg = 10) {
  const result = tracePerspectiveDiagramFan({
    context,
    sceneDirectionCamera: cameraDirectionForDiagramField(fieldDeg),
    pupilSemiDiameterMm: L.EP.epSD,
    stopSemiDiameterMm: L.stopPhysSD,
    fractions,
  });
  expect(result).not.toBeNull();
  return result!;
}

describe("perspective diagram fan", () => {
  it("maps positive diagram field angles to the negative-y camera direction", () => {
    const direction = cameraDirectionForDiagramField(10);
    expect(Math.hypot(...direction)).toBeCloseTo(1, 12);
    expect(direction[0]).toBe(0);
    expect(direction[1]).toBeLessThan(0);
    expect(cameraDirectionForDiagramField(0)).toEqual([0, -0, 1]);
  });

  it("traces an ordered meridional fan whose usable rays end on the moved sensor", () => {
    const fractions = [-0.6, 0, 0.6];
    const { samples } = fan(fractions);

    expect(samples.map((sample) => sample.fraction)).toEqual(fractions);
    for (const { status, diagramTrace } of samples) {
      expect(status).toBe("usable");
      expect(diagramTrace.ray.clipped).toBe(false);
      expect(diagramTrace.ray.pts.flat().every(Number.isFinite)).toBe(true);
      expect(diagramTrace.sensorPoint).not.toBeNull();
      expect(diagramTrace.ray.pts.at(-1)).toEqual([...diagramTrace.sensorPoint!]);
    }
  });

  it("keeps clipped hits only as ghost points and never appends the sensor to a failed ray", () => {
    const clipped = fan([1.6]).samples[0];
    expect(clipped.status).not.toBe("usable");
    const trace = clipped.diagramTrace;
    expect(trace.ray.clipped).toBe(true);
    expect(trace.ray.ghostPts.length).toBeGreaterThan(0);
    const sensor = trace.sensorPoint;
    if (sensor) expect(trace.ray.pts.at(-1)).not.toEqual([...sensor]);

    const source = fan([1.6]).field.pupilBundle!;
    if (source.kind !== "meridional") throw new Error("expected a meridional bundle");
    const withoutGhosts = perspectiveTraceToDiagram(source.samples[0].trace, { ghost: false });
    expect(withoutGhosts.ray.ghostPts).toEqual([]);
    // Only the lead point differs (the fan passes a vector lead; the default is the launch origin).
    expect(withoutGhosts.ray.pts.slice(1)).toEqual(trace.ray.pts.slice(1));
  });

  it("starts the lead segment a fixed distance upstream of the first surface hit", () => {
    const source = fan([0]).field.pupilBundle!;
    if (source.kind !== "meridional") throw new Error("expected a meridional bundle");
    const trace = source.samples[0].trace;
    const firstHit = cameraPointToDiagram(trace.cameraTrace.hits[0].point);
    const [, dy, dz] = trace.cameraTrace.input.direction;

    const lead = perspectiveVectorLeadPoint(trace, 25);
    expect(Math.hypot(lead[0] - firstHit[0], lead[1] - firstHit[1])).toBeCloseTo(25 * Math.hypot(dy, dz), 9);
    expect(lead[0]).toBeLessThan(firstHit[0]);
    // A negative lead distance clamps to the first hit instead of drawing downstream.
    expect(perspectiveVectorLeadPoint(trace, -5)).toEqual([...firstHit]);
  });
});
