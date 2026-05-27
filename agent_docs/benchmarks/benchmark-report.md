# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-05-27T17:17:02.110Z
- Commit: 33b4438 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 7 measured, 2 warmup
- Runs compared: 6

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.39 | -0.9% | -2.5% |
| layout | 0.75 | -2.9% | -2.7% |
| rays | 0.73 | +1.5% | -0.4% |
| analysis | 0.00 | -100.0% | -100.0% |
| svgRender | 0.10 | -0.7% | -4.2% |
| totalCold | 202.77 | +1.6% | -0.5% |
| totalWarm | 0.82 | -99.3% | -99.3% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | +5.9% | 0.0% |
| distortionCurve | 61.10 | +1.5% | +1.3% |
| distortionGrid | 1.63 | +0.5% | 0.0% |
| vignetting | 20.47 | +1.0% | +0.8% |
| pupils | 0.27 | +1.1% | 0.0% |
| bokehPair | 40.64 | +4.0% | +4.0% |
| bestFocus | 0.63 | +1.2% | 0.0% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 37.39 | +3.7% | +2.6% |
| data.coma | 7.88 | +0.3% | +0.1% |
| data.fieldCurvature | 32.20 | +0.9% | +0.1% |
| data.fieldCurvatureBundle | 36.67 | +1.2% | +0.6% |
| data.saBlurCharacter | 5.88 | +0.9% | -2.1% |
| data.saProfile | 0.63 | +0.7% | -2.0% |
| data.sphericalAberration | 0.70 | +0.6% | -1.3% |
| render.aberrationsTab | 0.27 | -99.4% | -99.6% |
| render.astigmatismSection | 0.06 | -2.6% | -5.5% |
| render.comaPreviewSection | 0.41 | -1.0% | +1.2% |
| render.comaTab | 0.54 | -93.6% | -93.7% |
| render.fieldCurvatureSection | 0.14 | -1.9% | -7.0% |
| render.meridionalComaSection | 0.05 | +0.6% | -5.7% |
| render.sagittalComaSection | 0.05 | -0.4% | -5.7% |
| render.sphericalSection | 0.02 | -4.8% | -6.8% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 365.78 |
| analysis.distortionCurve | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 120.51 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 67.03 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 60.65 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | default | 56.94 |
| analysis.vignetting | canon-ef-8-15mm-f4l-fisheye-usm | default | 54.77 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 53.46 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 12.65 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 12.26 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 5.93 |
| totalWarm | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 3.40 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | stopped-close | 3.36 |
| rays | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 2.90 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 2.37 |
| data.sphericalAberration | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 1.15 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.03 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | default | 1.01 |
| render.comaTab | fujifilm-gf-20-35mm-f4-r-wr | stopped-close | 0.74 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.53 |
| render.comaPreviewSection | canon-serenar-50f18 | stopped-close | 0.49 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.43 |
| svgRender | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 0.39 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.18 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.08 |
| render.sagittalComaSection | apo-lanthar-50f2 | default | 0.07 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.06 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.03 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |
| analysis | canon-serenar-50f18 | default | 0.00 |

## Skips And Warnings

- Aberration panel skips: 15
- Warnings: 0

