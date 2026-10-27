/**
 * The shared aimed launch: pupil coordinates are positions on the real stop. These cases pin the solve against
 * independent geometry (a stop on the launch plane, a paraxial closed form, finite and vector launches), the rim
 * rule, the three outcomes of a sample, and the tabs tracing exactly the rays the launch exports.
 */

import { describe, expect, it } from "vitest";
import { analysisRequestAt, apertureAt, build, buildSimplePositiveElementLens } from "../testLensFixtures.js";
import { CATALOG_CONSTRUCTION_FIXTURES, constructionFixtureData } from "../constructionFixtures.js";
import {
  AIMED_PUPIL_RESIDUAL_TOLERANCE,
  prepareAimedPupilLaunch,
  prepareAimedPupilTrace,
} from "../../../../src/optics/analysis/pupils/aimedPupil.js";
import type { AimedPupilLaunch, AimedPupilRay } from "../../../../src/optics/analysis/pupils/aimedPupil.js";
import {
  computeOffAxisFieldGeometry,
  computeOffAxisFieldGeometryScalar,
  isOffAxisVectorFieldGeometry,
  traceOffAxisChiefRay,
} from "../../../../src/optics/analysis/aberration/offAxis.js";
import { sampleCircularPupil, sampleOrthogonalPupilFan } from "../../../../src/optics/analysis/sampling.js";
import { computeMeridionalComa } from "../../../../src/optics/analysis/aberration/coma.js";
import { computeBokehFieldFootprint } from "../../../../src/optics/analysis/bokeh/bokeh.js";
import { computeFieldCurvature } from "../../../../src/optics/analysis/aberration/fieldCurvature.js";
import { bestRelativeFocusPlane } from "../../../../src/optics/analysis/aberration/shared.js";
import {
  BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
  MERIDIONAL_COMA_SAMPLE_COUNT,
} from "../../../../src/optics/analysis/aberration/types.js";
import { computeAnalysisFieldGeometryAtState } from "../../../../src/optics/state/fieldAdapters.js";
import { skewImagePlaneIntercept } from "../../../../src/optics/trace/rayAdapters.js";
import { sharedSonnar50f15 } from "../testLensFixtures.js";

import type { RuntimeLens } from "../../../../src/types/optics.js";

const CIRCULAR = sampleCircularPupil([1, 6, 12, 18, 24]);
const TANGENTIAL = sampleOrthogonalPupilFan(21, "tangential");
const SAGITTAL = sampleOrthogonalPupilFan(21, "sagittal");

function expectOnTarget(launch: AimedPupilLaunch, ray: AimedPupilRay): void {
  expect(ray.status).toBe("aimed");
  expect(ray.residualMm).toBeLessThanOrEqual(launch.residualToleranceMm);
}

/** Plano-convex singlet (front radius 50 mm, 5 mm of n = 1.5168) with the stop 20 mm behind its flat. */
function stopBehindLens(): RuntimeLens {
  const base = buildSimplePositiveElementLens();
  return build({
    ...constructionFixtureData(base),
    key: "test-aimed-stop-behind-lens",
    surfaces: [
      { label: "1", R: 50, nd: 1.5168, sd: 12, d: 5, elemId: 1 },
      { label: "2", R: 1e15, nd: 1, sd: 12, d: 20, elemId: 0 },
      { label: "STO", R: 1e15, nd: 1, sd: 5, d: 40, elemId: 0 },
    ],
  });
}

describe("prepareAimedPupilLaunch", () => {
  it("launches every sample at its target when the stop is the launch plane", () => {
    // The singlet's stop is its first surface: a collimated ray crosses it where it is launched, at any field.
    const L = buildSimplePositiveElementLens("test-aimed-stop-at-lens");
    const request = analysisRequestAt(L, { currentEPSD: 5, currentPhysStopSD: 5 });
    for (const fieldFraction of [0, 0.6, 1]) {
      const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, fieldFraction)!;
      const launch = prepareAimedPupilLaunch(request, [...CIRCULAR, ...TANGENTIAL, ...SAGITTAL], geometry)!;
      expect(launch.launchSurface).toBe("object-plane");
      for (const ray of launch.rays) {
        expectOnTarget(launch, ray);
        expect(Math.hypot(ray.launch[0] - ray.targetStopMm[0], ray.launch[1] - ray.targetStopMm[1])).toBeLessThan(
          launch.residualToleranceMm,
        );
      }
    }
  });

  it("matches closed-form paraxial launch heights behind a lens of known power, on and off the axis", () => {
    // For launch height h and slope u on the front vertex plane, the stop height is h(1 − φD) + uD with
    // φ = (n − 1)/r and D = t/n + d. A 1 µm stop and a 2e-5 rad field keep the real rays paraxial to ~1e-11 mm.
    const n = 1.5168;
    const phi = (n - 1) / 50;
    const D = 5 / n + 20;
    const R = 1e-3;
    const L = stopBehindLens();
    const request = analysisRequestAt(L, { currentEPSD: R / (1 - phi * D), currentPhysStopSD: R });
    for (const u of [0, 2e-5]) {
      const yChief = (-u * D) / (1 - phi * D);
      const launch = prepareAimedPupilLaunch(request, [...TANGENTIAL, ...SAGITTAL], { uField: u, yChief })!;
      for (const ray of launch.rays) {
        expectOnTarget(launch, ray);
        const expected = [ray.targetStopMm[0] / (1 - phi * D), (ray.targetStopMm[1] - u * D) / (1 - phi * D)];
        expect(Math.abs(ray.launch[0] - expected[0])).toBeLessThan(2e-10);
        expect(Math.abs(ray.launch[1] - expected[1])).toBeLessThan(2e-10);
      }
    }
  });

  it("lands every sample of a retrofocus wide angle within tolerance of its target", () => {
    // Strong pupil aberration: the paraxial entrance pupil misplaces these rays by a sizeable share of the stop.
    const L = build(CATALOG_CONSTRUCTION_FIXTURES["sony-fe-20mm-f18-g"]);
    const request = analysisRequestAt(L, apertureAt(L, 0, 0));
    for (const fieldFraction of [0, 0.5, 0.8, 1]) {
      const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, fieldFraction)!;
      const launch = prepareAimedPupilLaunch(request, CIRCULAR, geometry)!;
      expect(launch.unaimedCount).toBe(0);
      for (const ray of launch.rays) if (ray.status === "aimed") expectOnTarget(launch, ray);
    }
  });

  it("lands a rim fan end of an unvignetted field", () => {
    // The rim ray is aimed at R itself; the full trace admits the stop out to R plus the solve's tolerance.
    const L = stopBehindLens();
    const request = analysisRequestAt(L, { currentEPSD: 3, currentPhysStopSD: 2 });
    const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, 0.2)!;
    const launch = prepareAimedPupilLaunch(request, TANGENTIAL, geometry)!;
    const trace = prepareAimedPupilTrace(request.preparedGeometry, launch);
    expect(launch.clipSemiDiameterMm).toBe(2 + AIMED_PUPIL_RESIDUAL_TOLERANCE * 2);
    for (const end of [launch.rays[0], launch.rays.at(-1)!]) {
      expectOnTarget(launch, end);
      if (end.status !== "aimed") return;
      expect(Math.hypot(...end.targetStopMm)).toBe(2);
      expect(trace.skew(end).clipped).toBe(false);
    }
  });

  it("reports a target the field cannot reach as unaimed with its reason", () => {
    // Inside n = 1.9 glass, rays above 4.2 mm meet the 8 mm rear sphere past the critical angle, and those just inside
    // it leave at a slope near −1.6, so 2 mm behind the vertex no transmitted ray strays much past 1 mm from the axis.
    // The 2 mm stop's rim is out of reach; total internal reflection is no aperture, so the rim stays unaimed.
    const base = buildSimplePositiveElementLens();
    const L = build({
      ...constructionFixtureData(base),
      key: "test-aimed-unreachable-stop",
      elements: [{ ...base.elements[0], nd: 1.9 }],
      surfaces: [
        { label: "1", R: 1e15, nd: 1.9, sd: 7, d: 8, elemId: 1 },
        { label: "2", R: -8, nd: 1, sd: 7, d: 2, elemId: 0 },
        { label: "STO", R: 1e15, nd: 1, sd: 2, d: 40, elemId: 0 },
      ],
    });
    const request = analysisRequestAt(L, { currentEPSD: 2, currentPhysStopSD: 2 });
    const launch = prepareAimedPupilLaunch(request, TANGENTIAL, { uField: 0, yChief: 0 })!;
    const rim = launch.rays.at(-1)!;
    expect(rim.status).toBe("unaimed");
    expect(rim.reason).toBe("stop-unreachable");
    expect(rim.origin).toBeNull();
    expect(launch.unaimedByReason["stop-unreachable"]).toBe(launch.unaimedCount);
    expect(launch.unaimedCount).toBeGreaterThan(0);
    expect(launch.rays[(TANGENTIAL.length - 1) / 2].status).toBe("aimed");
  });

  it("vignettes a sample past another aperture instead of leaving it unaimed", () => {
    // The 3 mm element rims sit behind a 5 mm stop: the ray aimed at 0.9 R reaches the stop and is clipped behind it.
    const L = buildSimplePositiveElementLens("test-aimed-vignetting-rims", { elementSd: 3 });
    const request = analysisRequestAt(L, { currentEPSD: 5, currentPhysStopSD: 5 });
    const launch = prepareAimedPupilLaunch(request, [{ xFraction: 0, yFraction: 0.9 }], { uField: 0, yChief: 0 })!;
    const [ray] = launch.rays;
    expectOnTarget(launch, ray);
    if (ray.status === "unaimed") return;
    expect(prepareAimedPupilTrace(request.preparedGeometry, launch).skew(ray).clipped).toBe(true);
  });

  it("aims a finite object from the object point", () => {
    const L = stopBehindLens();
    const request = analysisRequestAt(L, { currentEPSD: 3, currentPhysStopSD: 2 });
    const objectPoint: [number, number, number] = [0, 40, -400];
    const launch = prepareAimedPupilLaunch(request, CIRCULAR, { kind: "finite-object", objectPoint, leadZ: -10 })!;
    expect(launch.launchSurface).toBe("finite-object");
    expectOnTarget(launch, launch.chief);
    for (const ray of launch.rays) {
      expectOnTarget(launch, ray);
      if (ray.status !== "aimed") continue;
      // The ray's line passes through the object point.
      const back = ray.origin.map((value, axis) => value - objectPoint[axis]);
      const length = Math.hypot(...back);
      for (let axis = 0; axis < 3; axis++) expect(back[axis] / length).toBeCloseTo(ray.direction[axis], 12);
    }
  });

  it("aims bounding-sphere fisheye fields through their vector launch", () => {
    const L = build(CATALOG_CONSTRUCTION_FIXTURES["nikon-fisheye-nikkor-6mm-f28"]);
    const request = analysisRequestAt(L, apertureAt(L, 0, 0.5));
    // 0.6 of the 110° half field: past the slope cap, with a traceable chief (the full field has none).
    const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, 0.6)!;
    expect(isOffAxisVectorFieldGeometry(geometry)).toBe(true);
    const launch = prepareAimedPupilLaunch(request, CIRCULAR, geometry)!;
    expect(launch.launchSurface).toBe("bounding-sphere");
    expectOnTarget(launch, launch.chief);
    expect(launch.unaimedCount).toBe(0);
    for (const ray of launch.rays) if (ray.status === "aimed") expectOnTarget(launch, ray);
  });

  it("solves each sample independently of the others requested", () => {
    const L = build(CATALOG_CONSTRUCTION_FIXTURES["sony-fe-20mm-f18-g"]);
    const request = analysisRequestAt(L, apertureAt(L, 0, 0));
    const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, 0.9)!;
    const sample = { xFraction: 0.31, yFraction: -0.77 };
    const alone = prepareAimedPupilLaunch(request, [sample], geometry)!.rays[0];
    const amongOthers = prepareAimedPupilLaunch(request, [...CIRCULAR, sample, ...TANGENTIAL], geometry)!.rays[
      CIRCULAR.length
    ];
    expect(amongOthers.origin).toEqual(alone.origin);
    expect(amongOthers.direction).toEqual(alone.direction);
    expect(amongOthers.iterations).toBe(alone.iterations);
  });
});

describe("tabs trace the exported rays", () => {
  const L = sharedSonnar50f15();
  const request = analysisRequestAt(L, apertureAt(L, 0, 0.3));
  const state = request.preparedGeometry;
  const fieldGeometryState = computeAnalysisFieldGeometryAtState(0, 0, L, 0);

  const exportedImagePoints = (samples: Parameters<typeof prepareAimedPupilLaunch>[1], fieldFraction: number) => {
    const geometry = computeOffAxisFieldGeometry(state, fieldFraction, fieldGeometryState)!;
    if (isOffAxisVectorFieldGeometry(geometry)) throw new Error("expected a scalar field");
    const launch = prepareAimedPupilLaunch(request, samples, geometry)!;
    const trace = prepareAimedPupilTrace(state, launch);
    const traces = launch.rays.map((ray) => (ray.status === "unaimed" ? null : trace.skew(ray)));
    return { geometry, traces: traces.map((ray) => (ray && !ray.clipped ? ray : null)) };
  };

  it("holds the meridional coma fan to them", () => {
    const coma = computeMeridionalComa(request)!;
    const { geometry, traces } = exportedImagePoints(
      sampleOrthogonalPupilFan(coma.sampleCount, "tangential"),
      coma.fieldFraction,
    );
    coma.samples.forEach((sample, index) => {
      const ray = traces[index];
      const point =
        ray && skewImagePlaneIntercept(ray.x, ray.y, ray.ux, ray.uy, geometry.lastSurfZ, geometry.imagePlaneZ);
      expect(sample.imageHeight).toBe(point?.y ?? null);
    });
  });

  it("holds a bokeh tile to them", () => {
    const fieldFraction = 0.5;
    const sensorZ = computeOffAxisFieldGeometry(state, 0, fieldGeometryState)!.imagePlaneZ + 0.5;
    const tile = computeBokehFieldFootprint(request, fieldFraction, sensorZ)!;
    const { geometry, traces } = exportedImagePoints(
      sampleCircularPupil(BOKEH_CIRCULAR_PUPIL_RING_SAMPLES),
      fieldFraction,
    );
    const chief = traceOffAxisChiefRay(request, geometry)!.trace;
    const chiefPoint = skewImagePlaneIntercept(chief.x, chief.y, chief.ux, chief.uy, geometry.lastSurfZ, sensorZ)!;
    const points = traces.flatMap((ray) => {
      if (!ray) return [];
      const point = skewImagePlaneIntercept(ray.x, ray.y, ray.ux, ray.uy, geometry.lastSurfZ, sensorZ)!;
      return [{ sagittal: point.x - chiefPoint.x, tangential: point.y - chiefPoint.y }];
    });
    expect(tile.points.map((point) => [point.sagittalOffset, point.tangentialOffset])).toEqual(
      points.map((point) => [point.sagittal, point.tangential]),
    );
  });

  it("holds the real-ray field-curve fan to them", () => {
    const field = computeFieldCurvature(request)!.fields.find((entry) => entry.fieldFraction === 0.75)!;
    const geometry = computeOffAxisFieldGeometryScalar(state, 0.75, fieldGeometryState)!;
    const launch = prepareAimedPupilLaunch(
      request,
      sampleOrthogonalPupilFan(MERIDIONAL_COMA_SAMPLE_COUNT, "tangential"),
      geometry,
    )!;
    const trace = prepareAimedPupilTrace(state, launch);
    const hits = launch.rays.flatMap((ray) => {
      if (ray.status === "unaimed") return [];
      const result = trace.skew(ray);
      return result.clipped ? [] : [{ coordinate: result.y, slope: result.uy }];
    });
    const chief = traceOffAxisChiefRay(request, geometry)!.trace;
    const focusZ = bestRelativeFocusPlane(hits, { coordinate: chief.y, slope: chief.uy }, geometry.lastSurfZ);
    expect(field.diagnosticTangentialShiftMm).toBe(focusZ - geometry.imagePlaneZ);
  });
});
