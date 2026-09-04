# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-09-04T21:52:59.774Z
- Commit: 16163231 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.47 | +9.8% | -27.6% |
| layout | 1.00 | +3.1% | -24.3% |
| rays | 1.60 | +10.5% | +8.9% |
| analysis | 77.95 | +6.6% | +3.6% |
| svgRender | 0.15 | +10.6% | +4.6% |
| totalCold | 166.42 | +15.4% | -1.8% |
| totalWarm | 80.12 | +9.5% | +5.2% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -1.0% | +4.1% |
| distortionCurve | 5.00 | +12.0% | +32.1% |
| distortionGrid | 1.88 | +19.5% | +31.2% |
| vignetting | 17.77 | +2.0% | +41.7% |
| pupils | 0.33 | +12.8% | +48.6% |
| bokehPair | 44.33 | +4.0% | +0.7% |
| bestFocus | 0.93 | +11.3% | +34.7% |
| perspectiveFocus | 213.25 | +3.8% | +1.9% |
| perspectiveFieldAberrations | 193.33 | +3.8% | +1.8% |
| perspectiveChromatic | 187.98 | +2.7% | +1.3% |
| perspectiveDistortion | 20.70 | +4.2% | +2.1% |
| perspectiveVignetting | 292.15 | +0.9% | +0.4% |
| perspectivePupils | 173.63 | +2.5% | +1.2% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 45.30 | +13.8% | +27.0% |
| data.coma | 9.23 | +5.8% | +11.9% |
| data.fieldCurvature | 37.26 | +12.8% | +23.9% |
| data.fieldCurvatureBundle | 42.32 | +4.1% | +20.9% |
| data.saBlurCharacter | 5.68 | +4.2% | -6.6% |
| data.saProfile | 0.91 | +8.0% | +31.7% |
| data.sphericalAberration | 1.05 | +9.7% | +34.7% |
| render.aberrationsTab | 0.28 | +2.0% | -6.7% |
| render.astigmatismSection | 0.06 | +4.9% | +1.1% |
| render.comaPreviewSection | 0.34 | -0.6% | -6.1% |
| render.comaTab | 0.51 | +2.6% | -5.1% |
| render.fieldCurvatureSection | 0.18 | +3.2% | -1.4% |
| render.meridionalComaSection | 0.06 | +1.9% | +0.1% |
| render.sagittalComaSection | 0.06 | +1.4% | -2.0% |
| render.sphericalSection | 0.03 | +0.5% | +0.2% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 7719.78 |
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2165.09 |
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2154.70 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 1520.56 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 889.21 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 876.86 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 795.14 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 537.93 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 169.88 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 155.73 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 111.52 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 108.91 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 106.60 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 81.65 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 35.61 |
| rays | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 18.34 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 17.40 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 17.12 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 11.97 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 6.96 |
| build | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 6.80 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 3.35 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 3.08 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | stopped-close | 2.13 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 2.04 |
| render.comaTab | canon-tse-50f28l-macro | stopped-close | 0.86 |
| render.comaPreviewSection | ricoh-gr3-28f28 | default | 0.77 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.72 |
| svgRender | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.71 |
| render.fieldCurvatureSection | sony-fe-24-70mm-f28-gm-ii | default | 0.50 |
| render.sagittalComaSection | sony-fe-24-70mm-f28-gm-ii | default | 0.42 |
| render.meridionalComaSection | sony-fe-24-70mm-f28-gm-ii | default | 0.30 |
| render.astigmatismSection | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 0.19 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.07 |
| analysis.summary | canon-rf-85f12l | interactive-drag | 0.01 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

