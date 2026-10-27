/**
 * The shared aimed launch: pupil coordinates are positions on the real stop. These cases pin the solve against
 * independent geometry (a stop on the launch plane, a paraxial closed form, finite and vector launches), the rim
 * rule, the three outcomes of a sample, and the tabs tracing exactly the rays the launch exports.
 */

import { describe, expect, it } from "vitest";
import { analysisRequestAt, apertureAt, build, buildSimplePositiveElementLens } from "../testLensFixtures.js";
import { CATALOG_CONSTRUCTION_FIXTURES, constructionFixtureData } from "../constructionFixtures.js";
import {
  AIMED_PUPIL_POLISH_TOLERANCE,
  AIMED_PUPIL_RESIDUAL_TOLERANCE,
  prepareAimedPupilLaunch,
  prepareAimedPupilTrace,
} from "../../../../src/optics/analysis/pupils/aimedPupil.js";
import type { AimedPupilLaunch, AimedPupilRay } from "../../../../src/optics/analysis/pupils/aimedPupil.js";
import {
  computeOffAxisFieldGeometry,
  computeOffAxisFieldGeometryScalar,
  isOffAxisVectorFieldGeometry,
  traceOffAxisBundleFromSamples,
  traceOffAxisChiefRay,
} from "../../../../src/optics/analysis/aberration/offAxis.js";
import { sampleCircularPupil, sampleOrthogonalPupilFan } from "../../../../src/optics/analysis/sampling.js";
import { computeMeridionalComa } from "../../../../src/optics/analysis/aberration/coma.js";
import { computeBokehFieldFootprint } from "../../../../src/optics/analysis/bokeh/bokeh.js";
import { computeFieldCurvature } from "../../../../src/optics/analysis/aberration/fieldCurvature.js";
import {
  bestRelativeFocusPlane,
  prepareAxialZoneLaunch,
  symmetricZoneFractions,
} from "../../../../src/optics/analysis/aberration/shared.js";
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

/** Components compared by value, with −0 and 0 alike, for mirror images whose zero components keep either sign. */
const byValue = (v: readonly number[]) => v.map((component) => component + 0);

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

type Vec3 = readonly [number, number, number];
const dot = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const along = (p: Vec3, d: Vec3, t: number): Vec3 => [p[0] + d[0] * t, p[1] + d[1] * t, p[2] + d[2] * t];

/**
 * Trace a ray to the stop through spherical and flat surfaces with Snell's law in vector form, sharing no code with
 * the engine: the stop crossing an aimed ray must have, by geometry alone.
 */
function independentStopCrossing(L: RuntimeLens, z: readonly number[], origin: Vec3, direction: Vec3): number[] {
  let p = origin;
  let d = direction;
  let n = 1;
  for (let i = 0; i <= L.stopIdx; i++) {
    const { R, nd } = L.S[i];
    let normal: Vec3 = [0, 0, -1];
    if (Math.abs(R) > 1e12) {
      p = along(p, d, (z[i] - p[2]) / d[2]);
    } else {
      const toCentre: Vec3 = [p[0], p[1], p[2] - z[i] - R];
      const b = dot(toCentre, d);
      p = along(p, d, -b - Math.sign(R) * Math.sqrt(b * b - dot(toCentre, toCentre) + R * R));
      normal = [p[0] / R, p[1] / R, (p[2] - z[i] - R) / R];
    }
    if (i === L.stopIdx) return [p[0], p[1]];
    const cosIn = -dot(normal, d);
    const mu = n / nd;
    const cosOut = Math.sqrt(1 - mu * mu * (1 - cosIn * cosIn));
    d = along([d[0] * mu, d[1] * mu, d[2] * mu], normal, mu * cosIn - cosOut);
    n = nd;
  }
  throw new Error("no stop");
}

/** The plano-convex singlet behind which the stop is a sphere of radius −30 mm, concave to the front. */
function curvedStopBehindLens(): RuntimeLens {
  const base = buildSimplePositiveElementLens();
  return build({
    ...constructionFixtureData(base),
    key: "test-aimed-curved-stop",
    surfaces: [
      { label: "1", R: 50, nd: 1.5168, sd: 12, d: 5, elemId: 1 },
      { label: "2", R: 1e15, nd: 1, sd: 12, d: 20, elemId: 0 },
      { label: "STO", R: -30, nd: 1, sd: 5, d: 40, elemId: 0 },
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

  it("reports a ray stopped by a clear aperture before the stop as blocked, with no stop crossing", () => {
    // The biconvex element's spheres meet 8.7 mm out, past its 5 mm rims; the stop's rim needs about 10.8 mm there.
    // Toward it, the aim reaches a ray that already leaves the element's rim, so the sample is blocked at that rim.
    const base = buildSimplePositiveElementLens();
    const L = build({
      ...constructionFixtureData(base),
      key: "test-aimed-blocked-rim",
      surfaces: [
        { label: "1", R: 20, nd: 1.5168, sd: 5, d: 4, elemId: 1 },
        { label: "2", R: -20, nd: 1, sd: 5, d: 5, elemId: 0 },
        { label: "STO", R: 1e15, nd: 1, sd: 8, d: 40, elemId: 0 },
      ],
    });
    const request = analysisRequestAt(L, { currentEPSD: 8, currentPhysStopSD: 8 });
    const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, 0)!;
    const launch = prepareAimedPupilLaunch(request, TANGENTIAL, geometry)!;
    const blocked = launch.rays.filter((ray) => ray.status === "blocked");
    expect(blocked.length).toBeGreaterThan(0);
    expect(launch.blockedCount).toBe(blocked.length);
    expect(launch.unaimedCount).toBe(0);
    const trace = prepareAimedPupilTrace(request.preparedGeometry, launch);
    for (const ray of blocked) {
      expect(ray.achievedStopMm).toBeNull();
      expect(ray.residualMm).toBeNaN();
      expect([0, 1]).toContain(ray.blockedAtSurfaceIndex);
      expect(trace.skew(ray).clipped).toBe(true);
    }
    // The bundle counts these apart from the aimed rays a later rim vignettes.
    const bundle = traceOffAxisBundleFromSamples(request, TANGENTIAL, geometry, undefined)!;
    const vignetted = launch.rays.filter((ray) => ray.status === "aimed" && trace.skew(ray).clipped).length;
    expect(bundle.blockedSampleCount).toBe(blocked.length);
    expect(bundle.clippedSampleCount).toBe(vignetted);
    expect(bundle.validSampleCount + bundle.clippedSampleCount + bundle.blockedSampleCount).toBe(TANGENTIAL.length);
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

  it("crosses a flat or a curved stop where an independent trace puts the aimed ray", () => {
    for (const L of [stopBehindLens(), curvedStopBehindLens()]) {
      const request = analysisRequestAt(L, { currentEPSD: 3, currentPhysStopSD: 2 });
      for (const fieldFraction of [0, 0.5, 1]) {
        const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, fieldFraction)!;
        const launch = prepareAimedPupilLaunch(request, [...CIRCULAR, ...TANGENTIAL, ...SAGITTAL], geometry)!;
        expect(launch.aimedCount).toBe(launch.rays.length);
        for (const ray of launch.rays) {
          if (ray.status !== "aimed") continue;
          const [x, y] = independentStopCrossing(L, request.preparedGeometry.z, ray.origin, ray.direction);
          expect(Math.hypot(x - ray.targetStopMm[0], y - ray.targetStopMm[1])).toBeLessThanOrEqual(
            launch.residualToleranceMm,
          );
          expect(Math.hypot(x - ray.achievedStopMm[0], y - ray.achievedStopMm[1])).toBeLessThan(1e-9);
        }
      }
    }
  });

  it("polishes every converged aim to the optics' own precision", () => {
    // Past the 1e-7 R acceptance, Newton continues to 1e-12 R, so a ray does not depend on the path its seed took.
    const L = build(CATALOG_CONSTRUCTION_FIXTURES["sony-fe-20mm-f18-g"]);
    const request = analysisRequestAt(L, apertureAt(L, 0, 0));
    const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, 0.8)!;
    const launch = prepareAimedPupilLaunch(request, CIRCULAR, geometry)!;
    const R = request.aperture.stopSemiDiameterMm;
    for (const ray of launch.rays.slice(1))
      if (ray.status === "aimed") expect(ray.residualMm).toBeLessThanOrEqual(AIMED_PUPIL_POLISH_TOLERANCE * R);
  });

  it("stays on target stopped down and at a zoomed, focused state", () => {
    const sony = build(CATALOG_CONSTRUCTION_FIXTURES["sony-fe-20mm-f18-g"]);
    const zoom = build(CATALOG_CONSTRUCTION_FIXTURES["nikon-z-24-70f4s"]);
    const states = [
      { L: sony, request: analysisRequestAt(sony, apertureAt(sony, 0, 0.6)) },
      { L: zoom, request: analysisRequestAt(zoom, { zoomT: 1, focusT: 1, ...apertureAt(zoom, 1, 0) }) },
    ];
    expect(states[0].request.aperture.stopSemiDiameterMm).toBeLessThan(sony.stopPhysSD / 2);
    for (const { request } of states) {
      const R = request.aperture.stopSemiDiameterMm;
      for (const fieldFraction of [0.5, 1]) {
        const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, fieldFraction)!;
        const launch = prepareAimedPupilLaunch(request, [...CIRCULAR, ...TANGENTIAL], geometry)!;
        expect(launch.stopSemiDiameterMm).toBe(R);
        expect(launch.unaimedCount).toBe(0);
        for (const ray of launch.rays) if (ray.status === "aimed") expectOnTarget(launch, ray);
      }
    }
    // The zoomed state's rays are its own, not the wide end's.
    const wide = analysisRequestAt(zoom, { zoomT: 0, focusT: 1, ...apertureAt(zoom, 0, 0) });
    const sample = [{ xFraction: 0, yFraction: 0.5 }];
    const at = (request: typeof wide) =>
      prepareAimedPupilLaunch(request, sample, computeOffAxisFieldGeometry(request.preparedGeometry, 0.5)!)!.rays[0];
    expect(at(wide).origin).not.toEqual(at(states[1].request).origin);
  });

  it("solves axis zones at exactly f·R, with −f the exact negation of +f", () => {
    const L = build(CATALOG_CONSTRUCTION_FIXTURES["sony-fe-20mm-f18-g"]);
    const request = analysisRequestAt(L, apertureAt(L, 0, 0));
    const R = request.aperture.stopSemiDiameterMm;
    const fractions = [1, 0.7, 0.3];
    const zones = prepareAxialZoneLaunch(request, symmetricZoneFractions(fractions))!;
    for (const f of fractions) {
      const plus = zones.ray(f)!;
      const minus = zones.ray(-f)!;
      expect(plus.status).toBe("aimed");
      expect(minus.status).toBe("aimed");
      if (plus.status !== "aimed" || minus.status !== "aimed") continue;
      expect(plus.targetStopMm).toEqual([0, f * R]);
      expectOnTarget(zones.launch, plus);
      expect(plus.origin[0]).toBe(0);
      expect(plus.direction[0]).toBe(0);
      expect(plus.achievedStopMm[0]).toBe(0);
      expect(byValue(minus.origin)).toEqual(byValue([plus.origin[0], -plus.origin[1], plus.origin[2]]));
      expect(byValue(minus.direction)).toEqual(byValue([plus.direction[0], -plus.direction[1], plus.direction[2]]));
      expect(byValue(minus.achievedStopMm)).toEqual(byValue([0, -plus.achievedStopMm[1]]));
    }
  });

  it("keeps a meridional field exactly symmetric", () => {
    // x = 0 rays stay in the meridian to the bit, and ±px rays are exact mirror images.
    const L = build(CATALOG_CONSTRUCTION_FIXTURES["sony-fe-20mm-f18-g"]);
    const request = analysisRequestAt(L, apertureAt(L, 0, 0));
    const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, 0.8)!;
    const pairs = [
      [0.3, 0.4],
      [0.7, -0.5],
      [0.9, 0],
    ];
    const samples = [
      ...TANGENTIAL,
      ...pairs.flatMap(([x, y]) => [
        { xFraction: x, yFraction: y },
        { xFraction: -x, yFraction: y },
      ]),
    ];
    const launch = prepareAimedPupilLaunch(request, samples, geometry)!;
    const rays = launch.rays;
    for (const ray of rays.slice(0, TANGENTIAL.length)) {
      if (ray.status !== "aimed") continue;
      expect(ray.origin[0]).toBe(0);
      expect(ray.direction[0]).toBe(0);
      expect(ray.achievedStopMm[0]).toBe(0);
    }
    for (let i = TANGENTIAL.length; i < rays.length; i += 2) {
      const [plus, minus] = [rays[i], rays[i + 1]];
      expect(minus.status).toBe(plus.status);
      if (plus.status !== "aimed" || minus.status !== "aimed") continue;
      expect(byValue(minus.origin)).toEqual(byValue([-plus.origin[0], plus.origin[1], plus.origin[2]]));
      expect(byValue(minus.direction)).toEqual(byValue([-plus.direction[0], plus.direction[1], plus.direction[2]]));
      expect(byValue(minus.achievedStopMm)).toEqual(byValue([-plus.achievedStopMm[0], plus.achievedStopMm[1]]));
    }
  });

  it("lands a vector field's samples on the side of the stop their targets name", () => {
    // The bounding-sphere frame offsets along its own pupil axes; the targets are still the stop's x and y.
    const L = build(CATALOG_CONSTRUCTION_FIXTURES["nikon-fisheye-nikkor-6mm-f28"]);
    const request = analysisRequestAt(L, apertureAt(L, 0, 0.5));
    const geometry = computeOffAxisFieldGeometry(request.preparedGeometry, 0.6)!;
    expect(isOffAxisVectorFieldGeometry(geometry)).toBe(true);
    const R = request.aperture.stopSemiDiameterMm;
    const samples = [
      { xFraction: 0, yFraction: 0.5 },
      { xFraction: 0, yFraction: -0.5 },
      { xFraction: 0.4, yFraction: 0.3 },
      { xFraction: -0.4, yFraction: 0.3 },
    ];
    const launch = prepareAimedPupilLaunch(request, samples, geometry)!;
    launch.rays.forEach((ray, index) => {
      const { xFraction, yFraction } = samples[index];
      expect(ray.targetStopMm).toEqual([xFraction * R, yFraction * R]);
      expectOnTarget(launch, ray);
      if (ray.status !== "aimed") return;
      expect(Math.sign(ray.achievedStopMm[1])).toBe(Math.sign(yFraction));
      if (xFraction === 0) expect(ray.achievedStopMm[0]).toBe(0);
      else expect(Math.sign(ray.achievedStopMm[0])).toBe(Math.sign(xFraction));
    });
    const [, , plus, minus] = launch.rays;
    if (plus.status !== "aimed" || minus.status !== "aimed") return;
    expect(byValue(minus.achievedStopMm)).toEqual(byValue([-plus.achievedStopMm[0], plus.achievedStopMm[1]]));
  });

  it("keeps signed zero apart in the field-model cache, in either call order", () => {
    const solve = (request: ReturnType<typeof analysisRequestAt>, zero: number) =>
      prepareAimedPupilLaunch(request, CIRCULAR, { uField: zero, yChief: zero })!;
    const fresh = () => {
      const L = stopBehindLens();
      return analysisRequestAt(L, { currentEPSD: 3, currentPhysStopSD: 2 });
    };
    const alone = { plus: solve(fresh(), 0), minus: solve(fresh(), -0) };
    const plusFirst = fresh();
    const minusFirst = fresh();
    const afterPlus = { plus: solve(plusFirst, 0), minus: solve(plusFirst, -0) };
    const afterMinus = { minus: solve(minusFirst, -0), plus: solve(minusFirst, 0) };
    expect(Object.is(alone.minus.chief.launch[1], -0)).toBe(true);
    expect(afterPlus).toEqual(alone);
    expect(afterMinus).toEqual(alone);
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

  it("takes the bundle's chief from the launch's own (0, 0) ray", () => {
    const geometry = computeOffAxisFieldGeometry(state, 0.75, fieldGeometryState)!;
    const bundle = traceOffAxisBundleFromSamples(request, TANGENTIAL, geometry, undefined)!;
    const trace = prepareAimedPupilTrace(state, bundle.launch);
    const chief = bundle.launch.chief;
    expect(chief.status).toBe("aimed");
    if (chief.status !== "aimed") return;
    expect(bundle.chiefRay.trace).toEqual(trace.skew(chief));
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
