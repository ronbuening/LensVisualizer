# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-07-08T13:00:12.381Z
- Commit: ae2d2405 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.65 | -0.6% | +56.3% |
| layout | 1.73 | +4.3% | +115.3% |
| rays | 1.46 | -4.1% | +93.8% |
| analysis | 76.64 | +0.3% | +0.2% |
| svgRender | 0.19 | +0.2% | +61.0% |
| totalCold | 178.87 | +0.4% | -5.5% |
| totalWarm | 78.01 | +0.4% | +1.4% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | +1.0% | +10.8% |
| distortionCurve | 3.83 | -0.3% | -5.1% |
| distortionGrid | 1.53 | +3.4% | -2.9% |
| vignetting | 12.40 | +2.1% | -23.5% |
| pupils | 0.21 | -4.7% | -13.5% |
| bokehPair | 44.42 | +0.0% | +6.4% |
| bestFocus | 0.69 | +2.5% | +3.9% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 33.82 | +1.0% | -6.5% |
| data.coma | 7.99 | -0.7% | +1.2% |
| data.fieldCurvature | 28.90 | +1.0% | -9.4% |
| data.fieldCurvatureBundle | 33.85 | +0.4% | -0.4% |
| data.saBlurCharacter | 6.77 | -0.8% | +12.1% |
| data.saProfile | 0.69 | +0.4% | +6.1% |
| data.sphericalAberration | 0.77 | +1.2% | +7.0% |
| render.aberrationsTab | 0.33 | +2.8% | +1.4% |
| render.astigmatismSection | 0.07 | +2.1% | +5.1% |
| render.comaPreviewSection | 0.40 | +4.0% | +1.0% |
| render.comaTab | 0.58 | +4.2% | +2.0% |
| render.fieldCurvatureSection | 0.18 | +1.2% | +12.5% |
| render.meridionalComaSection | 0.06 | +0.3% | +6.2% |
| render.sagittalComaSection | 0.07 | +5.5% | +8.0% |
| render.sphericalSection | 0.03 | +2.4% | +4.0% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | sony-fe-24-70mm-f28-gm-ii | stopped-close | 341.89 |
| totalWarm | sony-fe-24-70mm-f28-gm-ii | stopped-close | 147.99 |
| analysis | sony-fe-24-70mm-f28-gm-ii | stopped-close | 136.23 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | stopped-close | 85.47 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | stopped-close | 63.25 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | stopped-close | 62.05 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | stopped-close | 52.30 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 51.83 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 22.04 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 14.54 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | stopped-close | 13.02 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 7.35 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | interactive-drag | 3.97 |
| rays | leica-apo-vario-elmarit-sl-90-280-f28-4 | stopped-close | 3.87 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 2.82 |
| data.sphericalAberration | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 1.19 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | default | 1.14 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | default | 1.13 |
| render.comaTab | canon-serenar-50f18 | stopped-close | 0.95 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.63 |
| render.comaPreviewSection | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.57 |
| svgRender | sigma-apo-macro-150mm-f28-os-hsm | tele-dense-chromatic | 0.44 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.43 |
| render.fieldCurvatureSection | sigma-apo-macro-180mm-f28-os-hsm | tele-dense-chromatic | 0.28 |
| render.astigmatismSection | sigma-apo-macro-150mm-f28-os-hsm | stopped-close | 0.12 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.11 |
| render.meridionalComaSection | canon-rf-85f12l | default | 0.09 |
| render.sphericalSection | sigma-apo-macro-150mm-f28-os-hsm | interactive-drag | 0.07 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 20
- Warnings: 0

