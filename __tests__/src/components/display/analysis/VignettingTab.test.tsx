// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import VignettingTab from "../../../../../src/components/display/analysis/VignettingTab.js";
import type { VignettingSample } from "../../../../../src/optics/vignetteAnalysis.js";
import type { AnalysisComputationContext } from "../../../../../src/optics/compat.js";
import { mockTheme } from "../../../../testUtils.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";

function render(samples: VignettingSample[]) {
  return renderToStaticMarkup(
    <VignettingTab
      L={buildSimplePositiveElementLens()}
      t={mockTheme}
      focusT={0}
      zoomT={0}
      currentEPSD={5}
      currentPhysStopSD={5}
      analysisContext={
        { movementActive: false, computeVignettingCurve: () => samples } as unknown as AnalysisComputationContext
      }
    />,
  );
}

describe("vignetting model labels", () => {
  it.each(["converged", "undersampled"] as const)("identifies ideal sensor values and %s sampling", (status) => {
    const html = render(
      [0, 20].map((fieldAngleDeg, i) => ({
        fieldAngleDeg,
        geometricTransmission: 1,
        relativeIllumination: 0.8,
        sensorRelativeIllumination: i === 0 ? 1 : 0.9,
        sensorIrradiance: { status, irradiancePerRadiance: 0.1, estimatedRelativeError: 0.01, sampleCount: 100 },
      })),
    );
    expect(html).toContain("Sensor (ideal)");
    expect(html).toContain("90.0%");
    expect(html).toContain(status === "converged" ? "Sampling converged" : "has not converged");
    expect(html).toContain("excludes material and coating losses");
  });

  it("labels the fallback estimate and never plots null sensor values as zero", () => {
    const html = render(
      [0, 20].map((fieldAngleDeg) => ({
        fieldAngleDeg,
        geometricTransmission: 1,
        relativeIllumination: 0.8,
        sensorRelativeIllumination: null,
      })),
    );
    expect(html).toContain("Estimate (cos⁴)");
    expect(html).toContain("Sensor illumination is unavailable");
    expect(html).toContain("EDGE RI ESTIMATE");
    expect(html).not.toContain("NaN");
  });

  it("handles an unavailable normalization without a chart", () => {
    expect(render([])).toContain("Unable to compute");
    expect(render([])).not.toContain("<svg");
  });
});
