# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-05-27T17:06:36.481Z
- Commit: a594568 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 7 measured, 2 warmup
- Runs compared: 5

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.39 | -3.1% | -3.1% |
| layout | 0.77 | +0.4% | 0.0% |
| rays | 0.72 | -1.4% | -2.2% |
| analysis | 119.84 | -0.4% | -1.2% |
| svgRender | 0.10 | -4.9% | -4.9% |
| totalCold | 199.54 | -3.3% | -2.4% |
| totalWarm | 125.15 | +1.0% | +0.5% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -15.1% | -8.1% |
| distortionCurve | 60.22 | -0.2% | -0.1% |
| distortionGrid | 1.62 | -1.6% | -0.8% |
| vignetting | 20.27 | -0.2% | -0.1% |
| pupils | 0.27 | -2.1% | -1.1% |
| bokehPair | 39.07 | +0.9% | +0.5% |
| bestFocus | 0.62 | -2.7% | -1.4% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 36.08 | -0.8% | -0.8% |
| data.coma | 7.86 | +0.5% | 0.0% |
| data.fieldCurvature | 31.91 | -0.7% | -0.7% |
| data.fieldCurvatureBundle | 36.23 | n/a | 0.0% |
| data.saBlurCharacter | 5.83 | -3.3% | -3.3% |
| data.saProfile | 0.63 | -3.9% | -3.1% |
| data.sphericalAberration | 0.69 | -0.9% | -2.9% |
| render.aberrationsTab | 42.34 | -41.2% | -41.6% |
| render.astigmatismSection | 0.06 | -5.7% | -5.7% |
| render.comaPreviewSection | 0.41 | +5.8% | +3.3% |
| render.comaTab | 8.42 | +2.1% | -2.2% |
| render.fieldCurvatureSection | 0.14 | -10.0% | -10.0% |
| render.meridionalComaSection | 0.05 | -11.2% | -11.2% |
| render.sagittalComaSection | 0.05 | -10.1% | -10.1% |
| render.sphericalSection | 0.03 | -4.3% | -4.3% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 336.71 |
| totalWarm | canon-ef-8-15mm-f4l-fisheye-usm | stopped-close | 206.30 |
| analysis | canon-ef-8-15mm-f4l-fisheye-usm | default | 200.60 |
| analysis.distortionCurve | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 116.40 |
| render.aberrationsTab | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 70.15 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 66.97 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 58.98 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 55.41 |
| analysis.vignetting | canon-ef-8-15mm-f4l-fisheye-usm | default | 53.71 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 52.35 |
| render.comaTab | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 12.69 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 12.55 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 12.08 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 5.86 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | stopped-close | 3.33 |
| rays | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 2.83 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | stopped-close | 2.26 |
| data.sphericalAberration | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 1.18 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.08 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.00 |
| render.comaPreviewSection | canon-rf100f28-macro | stopped-close | 0.47 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.43 |
| svgRender | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 0.36 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.18 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.08 |
| render.sagittalComaSection | canon-rf100f28-macro | stopped-close | 0.06 |
| render.meridionalComaSection | canon-serenar-50f18 | stopped-close | 0.06 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.03 |
| analysis.summary | sony-fe-70-200mm-f28-gm-ii | default | 0.00 |

## Skips And Warnings

- Aberration panel skips: 15
- Warnings: 0

