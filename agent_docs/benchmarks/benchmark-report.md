# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-09-25T03:57:05.530Z
- Commit: 7bd8d753 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.41 | -0.3% | -28.6% |
| layout | 1.70 | +54.3% | +48.9% |
| rays | 1.51 | +4.0% | +2.0% |
| analysis | 78.53 | +9.4% | +7.1% |
| svgRender | 0.13 | -0.6% | -0.2% |
| totalCold | 143.06 | -8.2% | -4.7% |
| totalWarm | 79.85 | +8.4% | +6.8% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -0.0% | +21.0% |
| distortionCurve | 4.73 | +5.4% | +11.8% |
| distortionGrid | 1.72 | +9.2% | +14.1% |
| vignetting | 17.26 | +3.6% | +13.6% |
| pupils | 0.30 | +1.0% | +8.0% |
| bokehPair | 40.86 | -1.4% | -3.4% |
| bestFocus | 0.85 | +2.0% | +9.4% |
| perspectiveFocus | 213.99 | +5.1% | +3.0% |
| perspectiveFieldAberrations | 189.56 | +3.0% | +0.6% |
| perspectiveChromatic | 194.00 | +4.2% | +1.8% |
| perspectiveDistortion | 21.11 | +4.7% | +3.1% |
| perspectiveVignetting | 292.74 | +4.5% | +1.1% |
| perspectivePupils | 172.32 | +3.7% | +1.7% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 38.25 | -1.5% | -2.7% |
| data.coma | 8.45 | +0.8% | -1.1% |
| data.fieldCurvature | 32.40 | -1.0% | -1.5% |
| data.fieldCurvatureBundle | 38.19 | -1.4% | -3.0% |
| data.saBlurCharacter | 5.66 | +5.7% | +1.9% |
| data.saProfile | 0.85 | +1.4% | +9.2% |
| data.sphericalAberration | 0.96 | +2.7% | +8.6% |
| render.aberrationsTab | 0.26 | -2.1% | -3.9% |
| render.astigmatismSection | 0.06 | -4.3% | -3.0% |
| render.comaPreviewSection | 0.33 | -1.7% | -3.5% |
| render.comaTab | 0.45 | -2.5% | -8.2% |
| render.fieldCurvatureSection | 0.17 | -2.2% | -3.0% |
| render.meridionalComaSection | 0.05 | -3.8% | -2.8% |
| render.sagittalComaSection | 0.06 | -3.2% | -2.8% |
| render.sphericalSection | 0.03 | -5.8% | -4.2% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2093.70 |
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2080.50 |
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2079.95 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 594.65 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 403.80 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 358.49 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 341.88 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 309.97 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 88.95 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | stopped-close | 83.62 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | stopped-close | 82.23 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 67.90 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 58.59 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 46.50 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | stopped-close | 17.10 |
| rays | nikon-pc-nikkor-19mm-f4e-ed | interactive-drag | 15.31 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 14.14 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | default | 10.04 |
| layout | fujifilm-gf-20-35mm-f4-r-wr | default | 4.37 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 4.11 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.56 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | default | 1.70 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | default | 1.61 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 1.58 |
| render.comaTab | canon-tse-50f28l-macro | stopped-close | 0.84 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.69 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.69 |
| render.comaPreviewSection | canon-serenar-50f18 | default | 0.54 |
| svgRender | canon-serenar-50f18 | default | 0.36 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.25 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.11 |
| render.sagittalComaSection | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 0.09 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.08 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.06 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

