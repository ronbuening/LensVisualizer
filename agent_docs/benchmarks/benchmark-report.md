# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-05-27T16:56:38.985Z
- Commit: a81ee2d (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 7 measured, 2 warmup
- Runs compared: 4

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.40 | +4.7% | -1.1% |
| layout | 0.77 | +10.3% | -4.2% |
| rays | 0.73 | -0.8% | -1.3% |
| analysis | 120.36 | -3.1% | -1.1% |
| svgRender | 0.11 | +3.0% | -6.6% |
| totalCold | 206.35 | +0.9% | +0.4% |
| totalWarm | 123.96 | n/a | 0.0% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | n/a | 0.0% |
| distortionCurve | 60.33 | n/a | 0.0% |
| distortionGrid | 1.65 | n/a | 0.0% |
| vignetting | 20.32 | n/a | 0.0% |
| pupils | 0.28 | n/a | 0.0% |
| bokehPair | 38.70 | n/a | 0.0% |
| bestFocus | 0.64 | n/a | 0.0% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 36.37 | +0.2% | -0.2% |
| data.coma | 7.82 | -0.3% | -2.0% |
| data.fieldCurvature | 32.13 | +0.8% | -0.1% |
| data.saBlurCharacter | 6.03 | +0.7% | -0.2% |
| data.saProfile | 0.65 | +1.6% | +0.4% |
| data.sphericalAberration | 0.70 | -2.0% | -3.2% |
| render.aberrationsTab | 71.98 | -1.5% | -1.1% |
| render.astigmatismSection | 0.06 | +8.2% | -2.9% |
| render.comaPreviewSection | 0.39 | -4.3% | -1.6% |
| render.comaTab | 8.25 | -4.2% | -5.7% |
| render.fieldCurvatureSection | 0.16 | +13.0% | -1.5% |
| render.meridionalComaSection | 0.05 | +11.8% | -2.4% |
| render.sagittalComaSection | 0.06 | +11.3% | -1.5% |
| render.sphericalSection | 0.03 | +7.0% | -4.1% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 348.40 |
| totalWarm | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 212.84 |
| analysis | canon-ef-8-15mm-f4l-fisheye-usm | stopped-close | 209.30 |
| analysis.distortionCurve | canon-ef-8-15mm-f4l-fisheye-usm | stopped-close | 118.47 |
| render.aberrationsTab | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 117.94 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 65.40 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 56.77 |
| analysis.vignetting | canon-ef-8-15mm-f4l-fisheye-usm | default | 53.27 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 49.13 |
| render.comaTab | sony-fe-24-70mm-f28-gm-ii | default | 12.89 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 12.57 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | default | 12.16 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 6.09 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | stopped-close | 3.47 |
| rays | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 2.85 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | stopped-close | 2.31 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | stopped-close | 1.18 |
| data.sphericalAberration | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 1.16 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.02 |
| render.comaPreviewSection | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 0.44 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.43 |
| svgRender | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 0.40 |
| render.fieldCurvatureSection | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 0.19 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.08 |
| render.sagittalComaSection | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 0.07 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.06 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.03 |
| analysis.summary | sony-fe-70-200mm-f28-gm-ii | default | 0.00 |

## Skips And Warnings

- Aberration panel skips: 12
- Warnings: 0

