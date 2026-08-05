# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-08-05T19:19:31.587Z
- Commit: bc1ed089 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 1.29 | -4.9% | +98.1% |
| layout | 0.76 | +3.3% | -54.1% |
| rays | 1.09 | +1.7% | -26.2% |
| analysis | 65.92 | -4.0% | -12.4% |
| svgRender | 0.13 | +4.2% | -15.4% |
| totalCold | 123.18 | -0.5% | -29.2% |
| totalWarm | 66.10 | -2.3% | -13.4% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | -2.9% | +2.6% |
| distortionCurve | 3.71 | +3.7% | -0.9% |
| distortionGrid | 1.32 | +5.9% | -7.7% |
| vignetting | 13.57 | +7.1% | +11.7% |
| pupils | 0.25 | +10.2% | +11.1% |
| bokehPair | 39.99 | +0.7% | -9.2% |
| bestFocus | 0.70 | -3.0% | +3.6% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 40.61 | +8.3% | +21.0% |
| data.coma | 8.61 | +1.5% | +7.7% |
| data.fieldCurvature | 34.27 | +9.7% | +20.8% |
| data.fieldCurvatureBundle | 41.20 | +13.9% | +22.5% |
| data.saBlurCharacter | 5.57 | +7.7% | -16.4% |
| data.saProfile | 0.70 | +2.2% | +2.7% |
| data.sphericalAberration | 0.82 | +3.4% | +6.8% |
| render.aberrationsTab | 0.27 | -1.5% | -16.2% |
| render.astigmatismSection | 0.06 | -0.3% | -4.9% |
| render.comaPreviewSection | 0.33 | -2.3% | -13.3% |
| render.comaTab | 0.49 | -3.9% | -13.9% |
| render.fieldCurvatureSection | 0.17 | +0.1% | -6.4% |
| render.meridionalComaSection | 0.05 | +0.3% | -3.5% |
| render.sagittalComaSection | 0.06 | -0.0% | -6.3% |
| render.sphericalSection | 0.03 | -0.2% | -1.2% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | tele-dense-chromatic | 278.02 |
| analysis | fujifilm-gf-20-35mm-f4-r-wr | default | 141.81 |
| totalWarm | fujifilm-gf-20-35mm-f4-r-wr | default | 140.61 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | default | 85.40 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | default | 81.23 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | stopped-close | 79.72 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 68.88 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 67.04 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 16.87 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 12.43 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | stopped-close | 7.41 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | interactive-drag | 5.57 |
| rays | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 3.84 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 2.94 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | stopped-close | 2.67 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | default | 1.38 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.29 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.27 |
| render.comaTab | canon-serenar-50f18 | stopped-close | 0.70 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.67 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.54 |
| render.comaPreviewSection | canon-serenar-50f18 | stopped-close | 0.46 |
| svgRender | canon-serenar-50f18 | default | 0.33 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.26 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.11 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.09 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.08 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.06 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 20
- Warnings: 0

