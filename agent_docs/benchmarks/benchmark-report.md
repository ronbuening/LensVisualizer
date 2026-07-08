# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-07-08T13:09:20.248Z
- Commit: 8a2f86db (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.68 | +8.2% | +8.3% |
| layout | 1.74 | +5.9% | +6.1% |
| rays | 1.49 | +1.0% | +3.3% |
| analysis | 75.57 | +0.5% | +0.2% |
| svgRender | 0.14 | -12.5% | -5.1% |
| totalCold | 174.05 | +0.1% | -1.6% |
| totalWarm | 77.05 | +0.8% | +0.4% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | +1.0% | +1.6% |
| distortionCurve | 3.78 | +1.0% | -1.6% |
| distortionGrid | 1.42 | -4.0% | -6.2% |
| vignetting | 12.14 | +0.8% | -1.1% |
| pupils | 0.21 | -3.0% | -5.2% |
| bokehPair | 44.41 | +1.4% | +2.7% |
| bestFocus | 0.67 | +0.4% | +0.2% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 33.47 | -0.5% | -0.8% |
| data.coma | 7.93 | -0.7% | +0.1% |
| data.fieldCurvature | 28.32 | +0.6% | -1.5% |
| data.fieldCurvatureBundle | 33.50 | +0.3% | -1.0% |
| data.saBlurCharacter | 6.66 | +2.7% | +2.7% |
| data.saProfile | 0.68 | +0.3% | +1.6% |
| data.sphericalAberration | 0.76 | +0.2% | +0.3% |
| render.aberrationsTab | 0.32 | -0.4% | -0.2% |
| render.astigmatismSection | 0.06 | -3.2% | +0.7% |
| render.comaPreviewSection | 0.39 | -1.5% | -1.1% |
| render.comaTab | 0.57 | +1.2% | +1.7% |
| render.fieldCurvatureSection | 0.18 | -2.5% | +1.8% |
| render.meridionalComaSection | 0.06 | -0.0% | +3.2% |
| render.sagittalComaSection | 0.06 | +0.3% | +2.7% |
| render.sphericalSection | 0.03 | -1.2% | +1.8% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | sony-fe-24-70mm-f28-gm-ii | stopped-close | 327.95 |
| totalWarm | sony-fe-24-70mm-f28-gm-ii | stopped-close | 135.85 |
| analysis | sony-fe-24-70mm-f28-gm-ii | stopped-close | 132.58 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 83.20 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 61.46 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | default | 61.19 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 51.70 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 51.02 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 20.51 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 14.35 |
| data.coma | sigma-apo-macro-180mm-f28-os-hsm | stopped-close | 12.87 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | stopped-close | 7.01 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 4.07 |
| rays | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.75 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | stopped-close | 2.77 |
| data.sphericalAberration | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 1.18 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | default | 1.05 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | default | 1.02 |
| render.comaTab | leica-apo-vario-elmarit-sl-90-280-f28-4 | stopped-close | 0.76 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.66 |
| render.comaPreviewSection | canon-serenar-50f18 | stopped-close | 0.52 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.43 |
| svgRender | canon-serenar-50f18 | default | 0.32 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.26 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.13 |
| render.sagittalComaSection | canon-rf100f28-macro | tele-dense-chromatic | 0.11 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.08 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.06 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 20
- Warnings: 0

