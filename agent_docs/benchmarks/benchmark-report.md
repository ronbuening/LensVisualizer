# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-09-04T23:43:02.459Z
- Commit: 150d961b (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.45 | +3.5% | -30.4% |
| layout | 0.94 | -3.1% | -2.8% |
| rays | 1.45 | -4.7% | -1.4% |
| analysis | 93.06 | -0.8% | +23.4% |
| svgRender | 0.13 | -3.8% | -2.9% |
| totalCold | 171.46 | -0.2% | +1.5% |
| totalWarm | 94.79 | -0.4% | +23.9% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -70.9% | +28.4% |
| distortionCurve | 4.46 | +0.9% | +14.5% |
| distortionGrid | 1.56 | -2.5% | +8.8% |
| vignetting | 28.92 | -1.6% | +111.9% |
| pupils | 0.29 | -0.1% | +15.3% |
| bokehPair | 41.65 | +1.1% | -1.9% |
| bestFocus | 0.83 | -2.4% | +15.0% |
| perspectiveFocus | 206.00 | -0.2% | -0.1% |
| perspectiveFieldAberrations | 185.99 | +1.1% | -0.1% |
| perspectiveChromatic | 184.29 | +0.3% | +0.1% |
| perspectiveDistortion | 20.89 | +4.5% | +2.7% |
| perspectiveVignetting | 284.32 | +1.2% | -0.9% |
| perspectivePupils | 171.48 | +2.9% | +0.6% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 39.15 | -3.1% | -0.8% |
| data.coma | 8.74 | -1.8% | +0.8% |
| data.fieldCurvature | 33.35 | -3.0% | +0.5% |
| data.fieldCurvatureBundle | 38.97 | -0.9% | -0.5% |
| data.saBlurCharacter | 5.46 | -2.1% | -3.0% |
| data.saProfile | 0.83 | -1.6% | +17.0% |
| data.sphericalAberration | 0.94 | -3.8% | +14.4% |
| render.aberrationsTab | 0.27 | -1.7% | -3.6% |
| render.astigmatismSection | 0.06 | +0.4% | -1.6% |
| render.comaPreviewSection | 0.33 | -5.3% | -5.1% |
| render.comaTab | 0.46 | -8.0% | -9.0% |
| render.fieldCurvatureSection | 0.17 | -1.5% | -2.5% |
| render.meridionalComaSection | 0.05 | -1.3% | -2.4% |
| render.sagittalComaSection | 0.06 | -0.7% | -1.3% |
| render.sphericalSection | 0.03 | +1.1% | -2.2% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2079.56 |
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2066.78 |
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2037.00 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 576.90 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 394.21 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 357.57 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 335.39 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 301.31 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 147.35 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 84.17 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | default | 80.71 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 80.49 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 68.14 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 45.04 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 17.53 |
| rays | nikon-pc-nikkor-19mm-f4e-ed | interactive-drag | 14.74 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 13.26 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 9.14 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 5.08 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | default | 3.31 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.18 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 1.71 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 1.59 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.52 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.83 |
| render.comaTab | canon-tse-50f28l-macro | stopped-close | 0.82 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.62 |
| render.comaPreviewSection | canon-serenar-50f18 | default | 0.40 |
| svgRender | canon-serenar-50f18 | default | 0.37 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.26 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.10 |
| render.sagittalComaSection | sony-fe-24-70mm-f28-gm-ii | default | 0.10 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.08 |
| render.sphericalSection | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 0.08 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

