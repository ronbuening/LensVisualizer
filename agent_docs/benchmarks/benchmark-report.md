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
| build | 0.41 | -0.3% | -16.5% |
| layout | 1.70 | +54.3% | +46.9% |
| rays | 1.51 | +4.0% | -1.8% |
| analysis | 78.53 | +9.4% | +6.2% |
| svgRender | 0.13 | -0.6% | -0.5% |
| totalCold | 143.06 | -8.2% | -9.2% |
| totalWarm | 79.85 | +8.4% | +5.0% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -0.0% | +8.3% |
| distortionCurve | 4.73 | +5.4% | +1.2% |
| distortionGrid | 1.72 | +9.2% | +4.2% |
| vignetting | 17.26 | +3.6% | -0.5% |
| pupils | 0.30 | +1.0% | -1.0% |
| bokehPair | 40.86 | -1.4% | -3.8% |
| bestFocus | 0.85 | +2.0% | -0.2% |
| perspectiveFocus | 213.99 | +5.1% | +0.2% |
| perspectiveFieldAberrations | 189.56 | +3.0% | -0.6% |
| perspectiveChromatic | 194.00 | +4.2% | -0.4% |
| perspectiveDistortion | 21.11 | +4.7% | -1.4% |
| perspectiveVignetting | 292.74 | +4.5% | +0.0% |
| perspectivePupils | 172.32 | +3.7% | -0.2% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 38.25 | -1.5% | -5.9% |
| data.coma | 8.45 | +0.8% | -3.6% |
| data.fieldCurvature | 32.40 | -1.0% | -5.6% |
| data.fieldCurvatureBundle | 38.19 | -1.4% | -6.6% |
| data.saBlurCharacter | 5.66 | +5.7% | +1.9% |
| data.saProfile | 0.85 | +1.4% | -0.2% |
| data.sphericalAberration | 0.96 | +2.7% | +0.2% |
| render.aberrationsTab | 0.26 | -2.1% | -4.7% |
| render.astigmatismSection | 0.06 | -4.3% | -3.0% |
| render.comaPreviewSection | 0.33 | -1.7% | -2.6% |
| render.comaTab | 0.45 | -2.5% | -7.4% |
| render.fieldCurvatureSection | 0.17 | -2.2% | -3.0% |
| render.meridionalComaSection | 0.05 | -3.8% | -3.2% |
| render.sagittalComaSection | 0.06 | -3.2% | -3.1% |
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

