# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-09-22T18:13:19.696Z
- Commit: 334d45b7 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 1 measured, 0 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.87 | +102.3% | +30.4% |
| layout | 1.58 | +63.3% | -1.8% |
| rays | 1.76 | +21.7% | +19.8% |
| analysis | 149.17 | +103.9% | +98.2% |
| svgRender | 0.45 | +243.2% | +224.6% |
| totalCold | 181.11 | +25.6% | +4.6% |
| totalWarm | 90.86 | +24.2% | +19.3% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.02 | +648.7% | +686.7% |
| distortionCurve | 5.35 | +19.9% | +41.4% |
| distortionGrid | 1.82 | +15.9% | +27.2% |
| vignetting | 20.25 | +16.2% | +61.5% |
| pupils | 0.39 | +32.9% | +75.0% |
| bokehPair | 48.04 | +12.7% | +9.1% |
| bestFocus | 0.99 | +18.5% | +43.4% |
| perspectiveFocus | 215.84 | +5.1% | +2.5% |
| perspectiveFieldAberrations | 195.26 | +4.8% | +2.3% |
| perspectiveChromatic | 197.26 | +7.8% | +3.8% |
| perspectiveDistortion | 23.05 | +16.1% | +7.4% |
| perspectiveVignetting | 303.41 | +4.8% | +2.3% |
| perspectivePupils | 181.79 | +7.3% | +3.5% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 44.15 | +10.9% | +23.8% |
| data.coma | 10.42 | +19.4% | +26.2% |
| data.fieldCurvature | 37.19 | +12.6% | +23.7% |
| data.fieldCurvatureBundle | 44.58 | +9.7% | +27.4% |
| data.saBlurCharacter | 6.64 | +21.8% | +1.2% |
| data.saProfile | 0.93 | +11.0% | +35.3% |
| data.sphericalAberration | 1.05 | +9.1% | +33.9% |
| render.aberrationsTab | 53.21 | +19340.2% | +16521.6% |
| render.astigmatismSection | 0.08 | +36.0% | +30.5% |
| render.comaPreviewSection | 0.46 | +34.4% | +20.1% |
| render.comaTab | 10.31 | +1967.3% | +1710.0% |
| render.fieldCurvatureSection | 0.24 | +38.2% | +30.1% |
| render.meridionalComaSection | 0.07 | +33.4% | +31.0% |
| render.sagittalComaSection | 0.08 | +28.6% | +21.8% |
| render.sphericalSection | 0.06 | +109.7% | +109.1% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2200.66 |
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2183.87 |
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2170.76 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 605.75 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 426.85 |
| render.aberrationsTab | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 394.85 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 374.16 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 360.18 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 320.23 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 116.11 |
| data.chromaticFieldCurvature | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 114.74 |
| data.fieldCurvatureBundle | sony-fe-24-70mm-f28-gm-ii | default | 102.21 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 91.39 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 85.91 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 47.80 |
| analysis.distortionCurve | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 25.33 |
| render.comaTab | sony-fe-24-70mm-f28-gm-ii | default | 22.05 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | stopped-close | 21.87 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 19.12 |
| rays | nikon-pc-nikkor-19mm-f4e-ed | interactive-drag | 15.80 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | stopped-close | 8.06 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 5.62 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | interactive-drag | 5.33 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | default | 4.21 |
| svgRender | canon-serenar-50f18 | default | 4.12 |
| data.sphericalAberration | sony-fe-24-70mm-f28-gm-ii | stopped-close | 3.03 |
| analysis.bestFocus | sony-fe-70-200mm-f28-gm-ii | stopped-close | 2.68 |
| render.comaPreviewSection | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 1.17 |
| analysis.pupils | sigma-apo-macro-150mm-f28-os-hsm | stopped-close | 0.85 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.58 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.27 |
| render.meridionalComaSection | sony-fe-70-200mm-f28-gm-ii | default | 0.24 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.19 |
| render.sagittalComaSection | sony-fe-70-200mm-f28-gm-ii | default | 0.16 |
| analysis.summary | sony-fe-24-70mm-f28-gm-ii | stopped-close | 0.05 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

