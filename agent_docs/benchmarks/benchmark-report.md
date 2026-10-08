# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-10-08T22:56:04.576Z
- Commit: 674d4ee5 (dirty)
- Node: v24.19.0 on linux/x64
- Iterations: 5 measured, 2 warmup
- Runs compared: 10

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 1.71 | -14.8% | +244.5% |
| layout | 4.91 | -1.9% | +260.3% |
| rays | 4.94 | -0.8% | +206.5% |
| analysis | 207.75 | +1.0% | +171.4% |
| svgRender | 0.38 | +1.0% | +174.2% |
| totalCold | 419.97 | -2.0% | +153.8% |
| totalWarm | 205.68 | -3.3% | +165.7% |

## Analysis Work Trends

| Analysis category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| summary | 0.01 | -1.0% | +127.4% |
| distortionCurve | 13.32 | -9.3% | +181.9% |
| distortionGrid | 4.97 | -4.9% | +188.4% |
| vignetting | 48.76 | -2.9% | +174.2% |
| pupils | 0.88 | +12.2% | +189.1% |
| bokehPair | 115.39 | +2.1% | +161.5% |
| bestFocus | 2.40 | -1.2% | +172.1% |
| perspectiveFocus | 609.13 | -11.5% | +183.4% |
| perspectiveFieldAberrations | 537.62 | -10.6% | +177.8% |
| perspectiveChromatic | 571.75 | -8.0% | +191.1% |
| perspectiveDistortion | 57.02 | -6.7% | +159.4% |
| perspectiveVignetting | 819.40 | -9.8% | +176.3% |
| perspectivePupils | 563.69 | +3.4% | +223.7% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 103.22 | +5.3% | +153.1% |
| data.coma | 23.20 | +3.3% | +160.4% |
| data.fieldCurvature | 89.77 | +10.8% | +159.8% |
| data.fieldCurvatureBundle | 105.93 | +9.4% | +159.1% |
| data.saBlurCharacter | 16.80 | +2.9% | +199.9% |
| data.saProfile | 2.38 | +1.8% | +176.9% |
| data.sphericalAberration | 2.73 | +2.7% | +176.4% |
| render.aberrationsTab | 0.78 | +9.3% | +180.4% |
| render.astigmatismSection | 0.15 | +5.7% | +134.5% |
| render.comaPreviewSection | 1.24 | +16.3% | +249.4% |
| render.comaTab | 1.86 | +18.8% | +262.7% |
| render.fieldCurvatureSection | 0.45 | +7.7% | +159.9% |
| render.meridionalComaSection | 0.12 | +6.9% | +118.5% |
| render.sagittalComaSection | 0.13 | +9.0% | +127.1% |
| render.sphericalSection | 0.06 | +13.3% | +125.2% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| totalCold | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 7455.28 |
| totalWarm | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 7198.27 |
| analysis | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 6838.93 |
| analysis.perspectiveVignetting | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 2040.40 |
| data.fieldCurvatureBundle | sony-fe-70-200mm-f28-gm-ii | default | 1426.74 |
| analysis.perspectiveFocus | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 1374.34 |
| analysis.perspectiveFieldAberrations | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 1166.81 |
| analysis.perspectiveChromatic | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 1146.61 |
| analysis.perspectivePupils | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 1012.72 |
| data.chromaticFieldCurvature | nikon-pc-nikkor-19mm-f4e-ed | tele-dense-chromatic | 312.91 |
| analysis.bokehPair | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 305.93 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | default | 196.10 |
| analysis.vignetting | fujifilm-gf-20-35mm-f4-r-wr | default | 174.17 |
| analysis.perspectiveDistortion | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 151.00 |
| layout | sony-fe-70-200mm-f28-gm-ii | stopped-close | 134.91 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | default | 108.32 |
| data.coma | nikon-pc-nikkor-19mm-f4e-ed | tele-dense-chromatic | 69.40 |
| analysis.distortionCurve | sony-fe-24-70mm-f28-gm-ii | default | 63.48 |
| build | sony-fe-70-200mm-f28-gm-ii | stopped-close | 57.25 |
| rays | nikon-pc-nikkor-19mm-f4e-ed | interactive-drag | 56.58 |
| analysis.distortionGrid | sony-fe-24-70mm-f28-gm-ii | default | 22.17 |
| data.sphericalAberration | canon-tse-50f28l-macro | stopped-close | 11.01 |
| data.saProfile | nikon-pc-nikkor-19mm-f4e-ed | default | 6.54 |
| render.comaTab | nikon-pc-nikkor-19mm-f4e-ed | stopped-close | 6.24 |
| analysis.bestFocus | sony-fe-70-200mm-f28-gm-ii | default | 5.20 |
| render.comaPreviewSection | nikon-pc-nikkor-19mm-f4e-ed | tele-dense-chromatic | 3.79 |
| analysis.pupils | sony-fe-70-200mm-f28-gm-ii | stopped-close | 3.26 |
| render.aberrationsTab | sony-fe-70-200mm-f28-gm-ii | default | 2.40 |
| render.fieldCurvatureSection | sony-fe-70-200mm-f28-gm-ii | default | 1.94 |
| svgRender | canon-serenar-50f18 | default | 1.22 |
| render.astigmatismSection | sony-fe-70-200mm-f28-gm-ii | default | 0.42 |
| render.sphericalSection | sony-fe-70-200mm-f28-gm-ii | default | 0.35 |
| render.sagittalComaSection | sigma-apo-macro-180mm-f28-os-hsm | tele-dense-chromatic | 0.29 |
| render.meridionalComaSection | sony-fe-70-200mm-f28-gm-ii | default | 0.28 |
| analysis.summary | canon-serenar-50f18 | default | 0.02 |

## Skips And Warnings

- Aberration panel skips: 56
- Warnings: 0

