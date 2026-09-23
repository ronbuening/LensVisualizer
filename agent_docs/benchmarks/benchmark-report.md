# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-09-22T19:07:47.516Z
- Commit: 990d3273 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.42 | -52.8% | -45.7% |
| layout | 1.13 | -23.3% | -13.2% |
| rays | 1.61 | -3.1% | +5.8% |
| analysis | 74.54 | -43.7% | -0.5% |
| svgRender | 0.14 | -68.3% | +0.3% |
| totalCold | 163.44 | -4.7% | -2.4% |
| totalWarm | 75.94 | -2.5% | +0.0% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -86.9% | -1.0% |
| distortionCurve | 4.72 | -5.7% | +21.2% |
| distortionGrid | 1.73 | -3.6% | +20.5% |
| vignetting | 17.26 | -10.4% | +26.4% |
| pupils | 0.31 | -17.4% | +22.0% |
| bokehPair | 44.27 | -2.1% | +0.0% |
| bestFocus | 0.85 | -8.1% | +19.0% |
| perspectiveFocus | 212.93 | -2.9% | -0.7% |
| perspectiveFieldAberrations | 191.80 | -4.8% | -0.9% |
| perspectiveChromatic | 195.57 | -3.1% | -0.4% |
| perspectiveDistortion | 22.26 | -1.3% | -0.7% |
| perspectiveVignetting | 292.46 | -2.7% | -1.4% |
| perspectivePupils | 172.91 | -1.4% | -0.7% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 40.19 | -9.8% | +0.5% |
| data.coma | 8.82 | -5.9% | +1.8% |
| data.fieldCurvature | 34.36 | -2.6% | +2.1% |
| data.fieldCurvatureBundle | 40.94 | -6.2% | +0.3% |
| data.saBlurCharacter | 5.44 | -11.9% | -8.2% |
| data.saProfile | 0.86 | -9.5% | +20.9% |
| data.sphericalAberration | 0.97 | -4.4% | +17.5% |
| render.aberrationsTab | 0.28 | -99.5% | -7.0% |
| render.astigmatismSection | 0.06 | -24.5% | -1.3% |
| render.comaPreviewSection | 0.34 | -24.0% | -8.1% |
| render.comaTab | 0.49 | -95.0% | -9.1% |
| render.fieldCurvatureSection | 0.17 | -24.5% | -3.2% |
| render.meridionalComaSection | 0.05 | -25.7% | -0.6% |
| render.sagittalComaSection | 0.06 | -21.6% | -3.0% |
| render.sphericalSection | 0.03 | -54.4% | -2.1% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2136.87 |
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2123.99 |
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2073.78 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 606.70 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 405.55 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 372.00 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 356.38 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 312.95 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 91.12 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 84.90 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | stopped-close | 83.78 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | stopped-close | 82.63 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | stopped-close | 70.34 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 47.56 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 17.19 |
| rays | nikon-pc-nikkor-19mm-f4e-ed | interactive-drag | 15.89 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 13.79 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 9.39 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 4.06 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.36 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.34 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.73 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.67 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 1.64 |
| render.comaTab | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 0.95 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.70 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.67 |
| render.comaPreviewSection | canon-serenar-50f18 | stopped-close | 0.51 |
| svgRender | canon-serenar-50f18 | default | 0.38 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.32 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.10 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.09 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.09 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.08 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

