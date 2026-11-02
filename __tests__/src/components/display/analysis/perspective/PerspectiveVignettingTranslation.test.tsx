// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import PerspectiveVignettingView from "../../../../../../src/components/display/analysis/perspective/PerspectiveVignettingView.js";
import { build, buildSimplePositiveElementLens } from "../../../../optics/testLensFixtures.js";
import { prepareRuntimeState } from "../../../../../../src/optics/state/runtimeAdapters.js";
import { createAnalysisRequest } from "../../../../../../src/optics/analysis/request.js";
import { constructionFixtureData } from "../../../../optics/constructionFixtures.js";
import { createPerspectiveTraceContext } from "../../../../../../src/optics/perspective/trace.js";
import {
  computePerspectiveVignettingAnalysis,
  createAreaWeightedCircularPupilPoints,
  type PerspectiveVignettingAnalysis,
} from "../../../../../../src/optics/perspective/analysis/vignetting.js";
import { replaceTextForTranslation } from "../../../../../translationTestUtils.js";
import themes from "../../../../../../src/utils/theme/themes.js";
afterEach(cleanup);
it("removes translated throughput details when a retained sensor sample becomes unreachable", () => {
  const L = build({ ...constructionFixtureData(buildSimplePositiveElementLens()), imageFormat: "135-full-frame" });
  const preparedState = prepareRuntimeState(L, 0, 0);
  const request = createAnalysisRequest({
    preparedState,
    dynamicEFL: L.EFL,
    currentEPSD: 0.25,
    currentPhysStopSD: L.stopPhysSD,
    perspectiveTraceContext: createPerspectiveTraceContext({ preparedState, movement: { shiftMm: 0, tiltDeg: 0 } }),
  });
  const available = computePerspectiveVignettingAnalysis(request, {
    sensorUvs: [{ u: 0, v: 0 }],
    pupilPoints: createAreaWeightedCircularPupilPoints(1, 4),
  });
  expect(available.samples[0].throughput).not.toBeNull();
  // The optical engine retains this same requested coordinate when the chief solve fails.
  const unavailable: PerspectiveVignettingAnalysis = {
    ...available,
    samples: available.samples.map((sample) => ({
      ...sample,
      status: "chief-unreachable",
      throughput: null,
      geometricFactorNormalizedToZeroCenter: null,
      transmittedGeometricFactorNormalizedToZeroCenter: null,
      activeToZeroRatio: null,
      fieldSample: { ...sample.fieldSample, status: "chief-unreachable", pupilBundle: null },
    })),
  };
  const view = (analysis: PerspectiveVignettingAnalysis) => (
    <PerspectiveVignettingView analysis={analysis} t={themes.dark} />
  );
  const { container, rerender, unmount } = render(view(available));
  const statuses = container.querySelector('[aria-label="Vignetting sample status"]')!;
  expect(statuses.textContent).toContain("geometric");
  replaceTextForTranslation(container);
  rerender(view(unavailable));
  expect(statuses.textContent).toBe("center: chief-unreachable");
  replaceTextForTranslation(container);
  rerender(view(available));
  expect(statuses.textContent).toContain("center: usable; geometric");
  replaceTextForTranslation(container);
  unmount();
});
