# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-07-08T13:17:08.409Z
- Commit: a36cfd88 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.65 | -0.2% | +0.2% |
| layout | 1.69 | +2.7% | +2.6% |
| rays | 1.55 | -4.8% | +5.0% |
| analysis | 76.14 | +1.1% | +1.2% |
| svgRender | 0.14 | -0.3% | -8.7% |
| totalCold | 175.58 | +1.8% | +0.4% |
| totalWarm | 78.03 | +2.8% | +2.2% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | +2.1% | -0.0% |
| distortionCurve | 3.66 | -3.4% | -3.2% |
| distortionGrid | 1.44 | +1.0% | -1.6% |
| vignetting | 12.09 | -0.8% | -0.5% |
| pupils | 0.22 | -2.6% | -1.2% |
| bokehPair | 44.27 | +0.1% | +0.6% |
| bestFocus | 0.67 | +0.1% | +0.1% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 33.55 | -0.1% | -0.1% |
| data.coma | 7.84 | -2.2% | -1.3% |
| data.fieldCurvature | 28.42 | +1.3% | +0.2% |
| data.fieldCurvatureBundle | 33.45 | -0.0% | -0.5% |
| data.saBlurCharacter | 6.69 | -1.0% | +0.5% |
| data.saProfile | 0.69 | +1.8% | +1.3% |
| data.sphericalAberration | 0.77 | +0.0% | +0.9% |
| render.aberrationsTab | 0.33 | -0.2% | +1.7% |
| render.astigmatismSection | 0.07 | -0.9% | +2.5% |
| render.comaPreviewSection | 0.39 | -1.1% | -0.4% |
| render.comaTab | 0.58 | -2.5% | +2.3% |
| render.fieldCurvatureSection | 0.18 | -0.3% | +0.5% |
| render.meridionalComaSection | 0.06 | -0.9% | -0.1% |
| render.sagittalComaSection | 0.06 | -1.1% | +0.8% |
| render.sphericalSection | 0.03 | -0.9% | +1.6% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | sony-fe-24-70mm-f28-gm-ii | stopped-close | 324.35 |
| totalWarm | sony-fe-24-70mm-f28-gm-ii | stopped-close | 135.97 |
| analysis | sony-fe-24-70mm-f28-gm-ii | stopped-close | 130.28 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 81.63 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 60.14 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 59.88 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 53.20 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 51.12 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 20.15 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 13.94 |
| data.coma | sigma-apo-macro-180mm-f28-os-hsm | stopped-close | 12.99 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | stopped-close | 6.74 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 4.43 |
| rays | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.90 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | default | 2.68 |
| data.sphericalAberration | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 1.19 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.08 |
| render.comaTab | canon-serenar-50f18 | default | 1.02 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.02 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.63 |
| render.comaPreviewSection | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 0.49 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.44 |
| svgRender | canon-serenar-50f18 | default | 0.33 |
| render.fieldCurvatureSection | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.28 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.15 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.11 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.11 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.06 |
| analysis.summary | sigma-apo-macro-150mm-f28-os-hsm | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 20
- Warnings: 0

