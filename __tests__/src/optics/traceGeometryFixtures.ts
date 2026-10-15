/** Physical geometry fixtures for traversal tests, without constructing build-time lens constants. */
import type { RuntimeLens, SurfaceData } from "../../../src/types/optics.js";
import type { Ray3 } from "../../../src/optics/types.js";
import { compileSurfaces } from "../../../src/optics/prescription/surfaces.js";
import { createTraceGeometry } from "../../../src/optics/trace/geometry.js";
import { traceGeometryToStop } from "../../../src/optics/trace/stopTrace.js";
import type { TraceOptions } from "../../../src/optics/trace/types.js";
import { directionFromSkewSlope } from "../../../src/optics/math/vector.js";
import { resolvedImagePlaneToPlane3 } from "../../../src/optics/prescription/interactions.js";

export interface GeometryFixture extends Partial<
  Pick<RuntimeLens, "opticalPath" | "imagePlane" | "isFoldedOptics" | "stopIdx">
> {
  S: SurfaceData[];
  asphByIdx: RuntimeLens["asphByIdx"];
}
interface FixtureOptions extends TraceOptions {
  zPos?: number[];
  leadDistance?: number;
}

export function fixtureGeometry(lens: GeometryFixture, zPos?: number[]) {
  const z = zPos ?? [0];
  if (!zPos) for (let i = 0; i < lens.S.length - 1; i++) z.push(z[i] + lens.S[i].d);
  const compiled = compileSurfaces(lens.S, lens.S, lens.asphByIdx);
  return createTraceGeometry({
    surfaces: compiled.map((surface, i) => ({ ...surface, base: surface, z: z[i] })),
    z,
    stopSurfaceIndex: lens.stopIdx ?? lens.S.findIndex((surface) => surface.label === "STO"),
    imagePlane: resolvedImagePlaneToPlane3(
      lens.imagePlane ?? { z: z.at(-1)! + lens.S.at(-1)!.d, y: 0, normal: { y: 0, z: 1 }, label: "IMG" },
    ),
    pathPlan: lens.opticalPath ?? {
      mode: "sequential",
      surfaceOrder: null,
      surfaceLabels: null,
      maxInteractions: lens.S.length + 1,
    },
    isFoldedOptics: lens.isFoldedOptics ?? false,
  });
}

export function traceFixtureVector(lens: GeometryFixture, input: Ray3, options: FixtureOptions = {}) {
  const geometry = fixtureGeometry(lens, options.zPos);
  return (options.stopAt === undefined ? geometry.traversal.full : geometry.traversal.partial)(
    geometry,
    input,
    options,
  );
}

export function fixtureSlopeRay(
  lens: GeometryFixture,
  input: { y0: number; uy0: number; x0?: number; ux0?: number },
  options: FixtureOptions = {},
): Ray3 {
  const first = fixtureGeometry(lens, options.zPos).surfaces[0];
  const lead = options.leadDistance ?? Math.max(1, Math.abs(first.profile.sag(first.sd)) + 1);
  return {
    origin: [(input.x0 ?? 0) - (input.ux0 ?? 0) * lead, input.y0 - input.uy0 * lead, first.z - lead],
    direction: directionFromSkewSlope(input.ux0 ?? 0, input.uy0)!,
  };
}

export function traceFixtureSlope(
  lens: GeometryFixture,
  input: { y0: number; uy0: number; x0?: number; ux0?: number },
  options: FixtureOptions = {},
) {
  return traceFixtureVector(lens, fixtureSlopeRay(lens, input, options), options);
}

export function traceFixtureToStop(
  lens: GeometryFixture,
  input: { y0: number; uy0: number },
  stopIndex: number,
  options: FixtureOptions & { stopOccurrence?: number } = {},
) {
  return traceGeometryToStop(
    fixtureGeometry(lens, options.zPos),
    fixtureSlopeRay(lens, input, options),
    stopIndex,
    options,
  );
}
