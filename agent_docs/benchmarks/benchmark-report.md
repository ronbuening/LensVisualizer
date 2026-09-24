# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-09-23T18:34:50.543Z
- Commit: bfb59fe9 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.51 | +5.0% | -33.2% |
| layout | 1.25 | +5.4% | +7.7% |
| rays | 1.62 | +2.9% | +3.6% |
| analysis | 73.52 | -1.2% | -0.6% |
| svgRender | 0.13 | -6.1% | -4.2% |
| totalCold | 167.56 | +5.2% | +3.8% |
| totalWarm | 76.18 | -1.0% | +0.2% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.00 | +27.5% | +26.9% |
| distortionCurve | 4.70 | +1.1% | +3.1% |
| distortionGrid | 1.68 | +3.6% | +5.1% |
| vignetting | 18.05 | +3.0% | +4.1% |
| pupils | 0.30 | -0.5% | +1.3% |
| bokehPair | 43.97 | +3.9% | +1.6% |
| bestFocus | 0.91 | +6.7% | +7.4% |
| perspectiveFocus | 207.84 | -7.9% | -3.1% |
| perspectiveFieldAberrations | 188.37 | -5.5% | -2.7% |
| perspectiveChromatic | 190.56 | -5.1% | -3.0% |
| perspectiveDistortion | 20.48 | -5.7% | -6.9% |
| perspectiveVignetting | 287.06 | -5.5% | -3.2% |
| perspectivePupils | 169.00 | -7.3% | -3.0% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 40.64 | -0.7% | +0.0% |
| data.coma | 9.00 | +3.6% | +2.6% |
| data.fieldCurvature | 34.74 | +1.2% | +1.2% |
| data.fieldCurvatureBundle | 40.82 | +2.0% | -0.1% |
| data.saBlurCharacter | 5.54 | +2.0% | -0.2% |
| data.saProfile | 0.86 | +0.2% | +1.3% |
| data.sphericalAberration | 1.00 | +4.8% | +4.6% |
| render.aberrationsTab | 0.28 | +1.6% | -0.3% |
| render.astigmatismSection | 0.06 | -0.4% | -0.2% |
| render.comaPreviewSection | 0.37 | +7.1% | +6.2% |
| render.comaTab | 0.53 | +7.6% | +5.4% |
| render.fieldCurvatureSection | 0.17 | +0.8% | +1.3% |
| render.meridionalComaSection | 0.05 | +0.6% | -0.2% |
| render.sagittalComaSection | 0.06 | +1.1% | +0.3% |
| render.sphericalSection | 0.03 | -2.0% | -2.2% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2169.02 |
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2066.08 |
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2028.16 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 598.11 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 426.58 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 363.17 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 343.84 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 314.46 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 92.49 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 86.61 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 84.36 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 84.20 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 71.07 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 46.55 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 17.93 |
| rays | nikon-pc-nikkor-19mm-f4e-ed | interactive-drag | 14.36 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 14.12 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 9.65 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | interactive-drag | 3.85 |
| layout | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 3.62 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 3.47 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | default | 1.74 |
| analysis.bestFocus | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 1.66 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | interactive-drag | 1.58 |
| render.comaTab | canon-tse-50f28l-macro | stopped-close | 1.10 |
| render.aberrationsTab | canon-serenar-50f18 | default | 0.70 |
| analysis.pupils | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.65 |
| render.comaPreviewSection | canon-serenar-50f18 | tele-dense-chromatic | 0.51 |
| svgRender | canon-serenar-50f18 | default | 0.36 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.25 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.11 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.11 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.09 |
| render.sphericalSection | sigma-apo-macro-180mm-f28-os-hsm | interactive-drag | 0.06 |
| analysis.summary | canon-serenar-50f18 | default | 0.01 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

