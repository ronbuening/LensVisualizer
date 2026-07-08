# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-07-08T12:49:19.188Z
- Commit: 6f30a0d0 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 9

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.67 | +7.0% | +65.5% |
| layout | 1.67 | +2.4% | +117.3% |
| rays | 1.48 | +3.6% | +100.1% |
| analysis | 74.21 | +2.3% | -38.1% |
| svgRender | 0.16 | -1.0% | +46.2% |
| totalCold | 175.71 | +3.6% | -13.3% |
| totalWarm | 76.19 | +2.8% | +1.4% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | +2.1% | +27.6% |
| distortionCurve | 3.75 | +3.5% | -88.4% |
| distortionGrid | 1.45 | +3.5% | -11.0% |
| vignetting | 12.16 | +1.0% | -39.6% |
| pupils | 0.23 | +6.1% | -17.1% |
| bokehPair | 43.60 | +1.7% | +7.7% |
| bestFocus | 0.67 | -1.6% | +3.6% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 33.39 | +0.5% | -8.2% |
| data.coma | 7.96 | +1.1% | +1.0% |
| data.fieldCurvature | 28.24 | +0.6% | -12.1% |
| data.fieldCurvatureBundle | 33.97 | +1.3% | -6.3% |
| data.saBlurCharacter | 6.66 | +2.7% | +10.4% |
| data.saProfile | 0.68 | +1.0% | +4.7% |
| data.sphericalAberration | 0.76 | -0.2% | +6.0% |
| render.aberrationsTab | 0.31 | -1.4% | -99.3% |
| render.astigmatismSection | 0.06 | +1.2% | +2.5% |
| render.comaPreviewSection | 0.36 | -0.0% | -8.8% |
| render.comaTab | 0.55 | +3.9% | -93.3% |
| render.fieldCurvatureSection | 0.18 | +0.8% | +13.0% |
| render.meridionalComaSection | 0.05 | +0.5% | +4.6% |
| render.sagittalComaSection | 0.06 | +0.2% | +2.4% |
| render.sphericalSection | 0.03 | +0.1% | +3.3% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | sony-fe-24-70mm-f28-gm-ii | stopped-close | 322.02 |
| totalWarm | sony-fe-24-70mm-f28-gm-ii | stopped-close | 133.14 |
| analysis | sony-fe-24-70mm-f28-gm-ii | stopped-close | 129.22 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 80.98 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 60.31 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 59.71 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 50.76 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 49.83 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 19.99 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 13.66 |
| data.coma | sigma-apo-macro-180mm-f28-os-hsm | stopped-close | 12.78 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 6.82 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 4.21 |
| rays | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.64 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | default | 2.63 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | default | 1.19 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | default | 1.02 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | default | 1.02 |
| render.comaTab | sony-fe-24-70mm-f28-gm-ii | default | 0.74 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.63 |
| render.comaPreviewSection | sigma-apo-macro-150mm-f28-os-hsm | stopped-close | 0.50 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.44 |
| svgRender | leica-apo-vario-elmarit-sl-90-280-f28-4 | interactive-drag | 0.43 |
| render.meridionalComaSection | canon-rf-85f12l | stopped-close | 0.39 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.25 |
| render.sagittalComaSection | canon-rf-85f12l | default | 0.14 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.12 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.06 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 20
- Warnings: 0

