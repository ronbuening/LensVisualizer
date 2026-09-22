# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-09-22T18:32:05.993Z
- Commit: 6877645a (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 1 measured, 0 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.89 | +2.7% | +15.1% |
| layout | 1.48 | -6.6% | -3.4% |
| rays | 1.66 | -5.8% | +11.9% |
| analysis | 132.37 | -11.3% | +75.9% |
| svgRender | 0.44 | -2.5% | +216.4% |
| totalCold | 171.53 | -5.3% | -0.3% |
| totalWarm | 77.87 | -14.3% | +2.2% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.02 | -1.2% | +658.2% |
| distortionCurve | 5.00 | -6.5% | +32.2% |
| distortionGrid | 1.79 | -1.8% | +25.0% |
| vignetting | 19.27 | -4.8% | +46.9% |
| pupils | 0.37 | -5.6% | +57.2% |
| bokehPair | 45.24 | -5.8% | +2.8% |
| bestFocus | 0.93 | -6.5% | +31.4% |
| perspectiveFocus | 219.22 | +1.6% | +1.6% |
| perspectiveFieldAberrations | 201.38 | +3.1% | +3.1% |
| perspectiveChromatic | 201.76 | +2.3% | +2.3% |
| perspectiveDistortion | 22.56 | -2.2% | 0.0% |
| perspectiveVignetting | 300.47 | -1.0% | 0.0% |
| perspectivePupils | 175.43 | -3.5% | 0.0% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 44.54 | +0.9% | +15.2% |
| data.coma | 9.37 | -10.0% | +9.7% |
| data.fieldCurvature | 35.27 | -5.2% | +9.7% |
| data.fieldCurvatureBundle | 43.66 | -2.1% | +13.7% |
| data.saBlurCharacter | 6.18 | -7.0% | -2.4% |
| data.saProfile | 0.95 | +2.3% | +37.0% |
| data.sphericalAberration | 1.02 | -3.0% | +26.4% |
| render.aberrationsTab | 52.01 | -2.3% | +16146.3% |
| render.astigmatismSection | 0.08 | -2.2% | +27.6% |
| render.comaPreviewSection | 0.44 | -4.9% | +14.3% |
| render.comaTab | 9.89 | -4.1% | +1636.3% |
| render.fieldCurvatureSection | 0.23 | -4.4% | +24.4% |
| render.meridionalComaSection | 0.07 | +1.4% | +32.9% |
| render.sagittalComaSection | 0.08 | -1.0% | +20.6% |
| render.sphericalSection | 0.06 | +2.7% | +114.1% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2570.65 |
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2519.59 |
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2259.83 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 762.34 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 502.06 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 486.15 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 458.42 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 404.67 |
| render.aberrationsTab | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 381.74 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 109.93 |
| data.chromaticFieldCurvature | sony-fe-70-200mm-f28-gm-ii | tele-dense-chromatic | 97.64 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 88.04 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 85.00 |
| data.fieldCurvature | fujifilm-gf-20-35mm-f4-r-wr | stopped-close | 71.52 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 53.59 |
| render.comaTab | sony-fe-70-200mm-f28-gm-ii | stopped-close | 26.38 |
| data.coma | sony-fe-70-200mm-f28-gm-ii | tele-dense-chromatic | 22.13 |
| rays | nikon-pc-nikkor-19mm-f4e-ed | interactive-drag | 15.49 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 14.01 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 9.79 |
| build | sony-fe-70-200mm-f28-gm-ii | tele-dense-chromatic | 6.64 |
| layout | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 4.42 |
| svgRender | canon-serenar-50f18 | default | 4.41 |
| analysis.distortionGrid | canon-ef-8-15mm-f4l-fisheye-usm | default | 3.93 |
| analysis.bestFocus | sony-fe-70-200mm-f28-gm-ii | interactive-drag | 3.17 |
| data.sphericalAberration | sony-fe-70-200mm-f28-gm-ii | tele-dense-chromatic | 2.04 |
| data.saProfile | sony-fe-70-200mm-f28-gm-ii | default | 1.89 |
| render.comaPreviewSection | sony-fe-70-200mm-f28-gm-ii | stopped-close | 1.50 |
| analysis.pupils | nikon-pc-nikkor-19mm-f4e-ed | default | 0.99 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.59 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.26 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.25 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.22 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.18 |
| analysis.summary | sony-fe-70-200mm-f28-gm-ii | stopped-close | 0.11 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

