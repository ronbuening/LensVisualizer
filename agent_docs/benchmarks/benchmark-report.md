# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-09-03T21:16:53.992Z
- Commit: 841be1ca (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.43 | -68.7% | -34.1% |
| layout | 0.97 | +35.2% | -41.1% |
| rays | 1.45 | +26.2% | -1.5% |
| analysis | 73.15 | +6.8% | -2.8% |
| svgRender | 0.13 | +2.8% | -5.4% |
| totalCold | 144.25 | +13.9% | -16.7% |
| totalWarm | 73.14 | +5.1% | -4.0% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -1.9% | +6.2% |
| distortionCurve | 4.46 | +11.7% | +17.9% |
| distortionGrid | 1.57 | +11.2% | +9.8% |
| vignetting | 17.42 | +26.9% | +41.8% |
| pupils | 0.30 | +15.4% | +31.9% |
| bokehPair | 42.61 | +0.8% | -3.2% |
| bestFocus | 0.84 | +16.8% | +23.2% |
| perspectiveFocus | 205.36 | n/a | 0.0% |
| perspectiveFieldAberrations | 186.32 | n/a | 0.0% |
| perspectiveChromatic | 182.98 | n/a | 0.0% |
| perspectiveDistortion | 19.86 | n/a | 0.0% |
| perspectiveVignetting | 289.61 | n/a | 0.0% |
| perspectivePupils | 169.36 | n/a | 0.0% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 39.80 | -5.1% | +18.0% |
| data.coma | 8.72 | -2.4% | +8.6% |
| data.fieldCurvature | 33.04 | -7.3% | +14.9% |
| data.fieldCurvatureBundle | 40.66 | -5.2% | +20.4% |
| data.saBlurCharacter | 5.45 | -3.9% | -17.0% |
| data.saProfile | 0.84 | +16.1% | +22.0% |
| data.sphericalAberration | 0.96 | +14.8% | +24.7% |
| render.aberrationsTab | 0.27 | -2.1% | -14.5% |
| render.astigmatismSection | 0.06 | -0.8% | -3.1% |
| render.comaPreviewSection | 0.35 | +3.2% | -10.5% |
| render.comaTab | 0.50 | +1.8% | -11.5% |
| render.fieldCurvatureSection | 0.17 | +0.1% | -5.5% |
| render.meridionalComaSection | 0.05 | +0.9% | -1.8% |
| render.sagittalComaSection | 0.06 | +0.7% | -4.6% |
| render.sphericalSection | 0.03 | -1.1% | -0.1% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2118.86 |
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2075.61 |
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2071.99 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 579.65 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 403.77 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 359.52 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 333.22 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 314.42 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 89.71 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 84.42 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | stopped-close | 81.45 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | stopped-close | 80.62 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 68.16 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 45.82 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 16.92 |
| rays | nikon-pc-nikkor-19mm-f4e-ed | interactive-drag | 14.94 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 13.62 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 9.05 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 3.82 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.29 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 3.28 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.67 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.54 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.54 |
| render.comaTab | canon-tse-50f28l-macro | stopped-close | 0.85 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.69 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.63 |
| render.comaPreviewSection | canon-serenar-50f18 | stopped-close | 0.43 |
| svgRender | canon-serenar-50f18 | default | 0.36 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.27 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.11 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.08 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.08 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.06 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

