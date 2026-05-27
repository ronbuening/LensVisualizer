# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-05-27T17:24:56.161Z
- Commit: 1adfa3a (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 7 measured, 2 warmup
- Runs compared: 7

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.41 | +5.1% | +0.9% |
| layout | 0.70 | -6.1% | -8.4% |
| rays | 0.73 | -0.0% | -0.0% |
| analysis | 0.00 | -0.0% | -100.0% |
| svgRender | 0.11 | +2.3% | -0.5% |
| totalCold | 155.57 | -23.3% | -23.4% |
| totalWarm | 0.83 | +0.8% | -98.7% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -1.4% | -0.7% |
| distortionCurve | 4.23 | -93.1% | -93.0% |
| distortionGrid | 1.64 | +0.1% | +0.1% |
| vignetting | 20.02 | -2.2% | -1.3% |
| pupils | 0.28 | +2.2% | +1.7% |
| bokehPair | 40.30 | -0.8% | +1.6% |
| bestFocus | 0.66 | +3.7% | +3.0% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 36.66 | -2.0% | +0.4% |
| data.coma | 7.91 | +0.4% | +0.4% |
| data.fieldCurvature | 32.18 | -0.1% | 0.0% |
| data.fieldCurvatureBundle | 36.65 | -0.0% | 0.0% |
| data.saBlurCharacter | 6.03 | +2.6% | +0.1% |
| data.saProfile | 0.63 | +0.5% | -1.1% |
| data.sphericalAberration | 0.71 | +1.1% | 0.0% |
| render.aberrationsTab | 0.28 | +1.6% | -99.6% |
| render.astigmatismSection | 0.06 | +1.1% | -1.5% |
| render.comaPreviewSection | 0.40 | -1.9% | 0.0% |
| render.comaTab | 0.54 | -0.1% | -93.6% |
| render.fieldCurvatureSection | 0.14 | +1.6% | -0.4% |
| render.meridionalComaSection | 0.05 | -0.3% | -0.4% |
| render.sagittalComaSection | 0.05 | +0.8% | 0.0% |
| render.sphericalSection | 0.03 | +3.0% | -1.9% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | sony-fe-24-70mm-f28-gm-ii | stopped-close | 245.43 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 66.51 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 60.21 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | default | 56.44 |
| analysis.vignetting | canon-ef-8-15mm-f4l-fisheye-usm | default | 53.79 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 53.14 |
| data.coma | sony-fe-70-200mm-f28-gm-ii | stopped-close | 14.22 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 12.79 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 6.39 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 5.86 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 3.41 |
| totalWarm | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 3.25 |
| rays | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 2.91 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | stopped-close | 2.31 |
| data.sphericalAberration | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 1.16 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | default | 1.03 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.02 |
| render.comaTab | canon-serenar-50f18 | stopped-close | 0.64 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.50 |
| render.comaPreviewSection | leica-apo-vario-elmarit-sl-90-280-f28-4 | stopped-close | 0.45 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.43 |
| svgRender | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 0.38 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.19 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.11 |
| render.sagittalComaSection | apo-lanthar-50f2 | default | 0.07 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.06 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.04 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |
| analysis | canon-serenar-50f18 | default | 0.00 |

## Skips And Warnings

- Aberration panel skips: 15
- Warnings: 0

