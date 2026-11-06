/** Request bokeh preserves separate source layouts, sampling and weighted best focus. */
import { describe, expect, it } from "vitest";
import { computeBestFocusZ } from "../../../../src/optics/analysis/aberration/bestFocus.js";
import {
  computeBokehPreview,
  computeBokehPreviewPair,
  computeBokehFieldFootprint,
} from "../../../../src/optics/analysis/bokeh/bokeh.js";
import { createAnalysisRequest } from "../../../../src/optics/analysis/request.js";
import { stateWithZ } from "../../../../src/optics/state/preparedGeometry.js";
import { doLayout } from "../../../../src/optics/state/layout.js";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import { computeAnalysisFieldGeometryAtState } from "../../../../src/optics/state/fieldAdapters.js";
import {
  computeOffAxisFieldGeometry,
  traceOffAxisBundleFromSamples,
} from "../../../../src/optics/analysis/aberration/offAxis.js";
import { sampleCircularPupil } from "../../../../src/optics/analysis/sampling.js";
import { BOKEH_CIRCULAR_PUPIL_RING_SAMPLES } from "../../../../src/optics/analysis/aberration/types.js";
import { constructionFixtureData } from "../constructionFixtures.js";
import { analysisRequestAt, build, buildSimplePositiveElementLens } from "../testLensFixtures.js";

describe("bokeh analysis requests", () => {
  it.each([null, { R: -90, sd: 30 }, { R: -90, sd: 30, cylindrical: true as const }])(
    "pairs previews at their own source focus layouts and preserves sampling overrides with image shape %j",
    (imageSurface) => {
      const base = buildSimplePositiveElementLens("test-bokeh-request");
      /* A cylinder's sections follow the frame, so it needs a format. */
      const format = imageSurface && "cylindrical" in imageSurface ? { imageFormat: "135-full-frame" } : {};
      const lens = imageSurface === null ? base : build({ ...constructionFixtureData(base), imageSurface, ...format });
      const focusT = 0.15;
      const requestAt = (focusT: number) =>
        analysisRequestAt(lens, {
          focusT,
          sampling: { bokehRingSamples: [1, 8, 16], bokehFieldFractions: [0, 0.5] },
        });
      const request = requestAt(focusT);
      const inf = requestAt(0);
      const near = requestAt(1);
      const complementary = requestAt(1 - focusT);
      const bf0 = computeBestFocusZ(inf);
      const bf1 = computeBestFocusZ(near);
      const infZ =
        bf0 + (doLayout(focusT, 0, lens).imgZ - doLayout(0, 0, lens).imgZ) + (bf0 - computeBestFocusZ(request));
      const nearZ =
        bf1 +
        (doLayout(1 - focusT, 0, lens).imgZ - doLayout(0, 0, lens).imgZ) +
        (bf0 - computeBestFocusZ(complementary));
      const pair = computeBokehPreviewPair(request);
      expect(pair).toStrictEqual({
        infinity: computeBokehPreview(inf, infZ, "Infinity"),
        nearFocus: computeBokehPreview(near, nearZ, "Near Focus"),
      });
      expect(pair.infinity!.fields.map((field) => field.fieldFraction)).toEqual([0, 0.5]);
      expect(pair.infinity!.fields[0].totalRays).toBe(25);

      // Camera anchoring and a view field override must not replace each source's layout/field solve.
      const shifted = createAnalysisRequest({
        preparedState: stateWithZ(
          request.preparedGeometry,
          request.preparedGeometry.z.map((z) => z + 123),
        ),
        dynamicEFL: 0,
        currentEPSD: request.aperture.entrancePupilSemiDiameterMm,
        currentPhysStopSD: request.aperture.stopSemiDiameterMm,
        sampling: request.sampling,
        fieldGeometry: { halfFieldDeg: 1, yRatio: 0.1, b: 0.2, epRatio: 0.3 },
      });
      expect(computeBokehPreviewPair(shifted)).toStrictEqual(pair);
      expect(computeBokehFieldFootprint(request, 0, infZ)!.totalRays).toBe(337);
    },
  );

  it.each([-3, 3])("re-lands bokeh on the whole sphere translated by %s mm, retaining lateral offsets", (delta) => {
    const R = -90;
    const lens = build({
      ...constructionFixtureData(buildSimplePositiveElementLens("test-bokeh-curved-translation")),
      imageSurface: { R, sd: 30 },
    });
    const request = analysisRequestAt(lens, { currentEPSD: 1, currentPhysStopSD: 1 });
    const sensorZ = doLayout(0, 0, lens).imgZ + delta;
    const geometry = computeOffAxisFieldGeometry(
      request.preparedGeometry,
      0.5,
      computeAnalysisFieldGeometryAtState(0, 0, lens, 0),
    )!;
    const bundle = traceOffAxisBundleFromSamples(
      request,
      sampleCircularPupil(BOKEH_CIRCULAR_PUPIL_RING_SAMPLES),
      geometry,
    )!;
    expect(bundle).not.toBeNull();
    // Independent line/sphere quadratic: the sphere's centre translates with its vertex to sensorZ + R.
    const landing = (ray: { x: number; y: number; ux: number; uy: number }) => {
      const z = geometry.lastSurfZ - (sensorZ + R);
      const a = 1 + ray.ux ** 2 + ray.uy ** 2;
      const b = ray.x * ray.ux + ray.y * ray.uy + z;
      const c = ray.x ** 2 + ray.y ** 2 + z ** 2 - R ** 2;
      const roots = [(-b - Math.sqrt(b * b - a * c)) / a, (-b + Math.sqrt(b * b - a * c)) / a];
      const t = roots.find((t) => geometry.lastSurfZ + t > sensorZ + R)!;
      expect(t).toBeDefined();
      return { x: ray.x + ray.ux * t, y: ray.y + ray.uy * t };
    };
    const chief = landing(bundle.chiefRay.trace);
    const field = computeBokehFieldFootprint(request, 0.5, sensorZ)!;
    expect(field.usable).toBe(true);
    expect(field.points).toHaveLength(bundle.samples.length);
    field.points.forEach((point, i) => {
      const expected = landing(bundle.samples[i].trace);
      expect(point.sagittalOffset).toBeCloseTo(expected.x - chief.x, 11);
      expect(point.tangentialOffset).toBeCloseTo(expected.y - chief.y, 11);
    });
    const preview = computeBokehPreview(request, sensorZ, "Translated sensor")!;
    expect(preview.defocusDeltaMm).toBe(delta);
  });

  it("keeps closed-aperture previews empty and best focus at the layout fallback", () => {
    const lens = buildSimplePositiveElementLens("test-bokeh-closed");
    const request = createAnalysisRequest({
      preparedState: prepareRuntimeState(lens, 0.15, 0),
      dynamicEFL: lens.EFL,
      currentEPSD: 0,
      currentPhysStopSD: 0,
    });
    expect(computeBestFocusZ(request)).toBe(doLayout(0.15, 0, lens).imgZ);
    expect(computeBokehPreviewPair(request)).toStrictEqual({ infinity: null, nearFocus: null });
  });
});
