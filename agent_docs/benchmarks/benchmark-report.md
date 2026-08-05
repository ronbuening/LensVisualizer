# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-08-05T19:59:14.178Z
- Commit: ca853dac (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 1.37 | +6.3% | +107.3% |
| layout | 0.72 | -5.5% | -56.6% |
| rays | 1.15 | +5.3% | -22.3% |
| analysis | 68.47 | +3.9% | -9.0% |
| svgRender | 0.13 | -0.5% | -9.7% |
| totalCold | 126.64 | +2.8% | -27.2% |
| totalWarm | 69.61 | +5.3% | -8.8% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | +6.1% | +8.3% |
| distortionCurve | 3.99 | +7.5% | +6.1% |
| distortionGrid | 1.41 | +6.9% | -1.3% |
| vignetting | 13.73 | +1.2% | +12.8% |
| pupils | 0.26 | +4.1% | +14.3% |
| bokehPair | 42.26 | +5.7% | -4.0% |
| bestFocus | 0.72 | +3.2% | +6.9% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 41.93 | +3.3% | +24.7% |
| data.coma | 8.94 | +3.8% | +11.6% |
| data.fieldCurvature | 35.65 | +4.0% | +25.0% |
| data.fieldCurvatureBundle | 42.89 | +4.1% | +27.0% |
| data.saBlurCharacter | 5.67 | +1.9% | -14.8% |
| data.saProfile | 0.72 | +2.8% | +5.3% |
| data.sphericalAberration | 0.84 | +2.4% | +9.2% |
| render.aberrationsTab | 0.28 | +4.1% | -12.7% |
| render.astigmatismSection | 0.06 | +2.8% | -2.3% |
| render.comaPreviewSection | 0.34 | +0.0% | -13.3% |
| render.comaTab | 0.49 | +1.0% | -13.0% |
| render.fieldCurvatureSection | 0.17 | +0.9% | -5.6% |
| render.meridionalComaSection | 0.05 | +0.9% | -2.7% |
| render.sagittalComaSection | 0.06 | +1.0% | -5.3% |
| render.sphericalSection | 0.03 | +3.6% | +1.2% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | tele-dense-chromatic | 288.03 |
| analysis | fujifilm-gf-20-35mm-f4-r-wr | default | 144.86 |
| totalWarm | fujifilm-gf-20-35mm-f4-r-wr | default | 144.08 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 85.34 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | default | 85.17 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 84.03 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 72.02 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 71.97 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | stopped-close | 17.44 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 13.13 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 8.05 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | stopped-close | 5.42 |
| rays | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 3.88 |
| layout | sony-fe-70-200mm-f28-gm-ii | tele-dense-chromatic | 3.13 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 2.86 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | stopped-close | 1.56 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | default | 1.36 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | default | 1.32 |
| render.comaTab | canon-serenar-50f18 | default | 0.87 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.76 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.55 |
| render.fieldCurvatureSection | apo-lanthar-50f2 | tele-dense-chromatic | 0.48 |
| render.comaPreviewSection | apo-lanthar-50f2 | tele-dense-chromatic | 0.47 |
| svgRender | canon-serenar-50f18 | default | 0.39 |
| render.astigmatismSection | apo-lanthar-50f2 | tele-dense-chromatic | 0.18 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.09 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.09 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.07 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 20
- Warnings: 0

