# Benchmark Report

Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.

## Latest Run

- Created: 2026-05-27T03:28:52.857Z
- Commit: 15b03e7 (dirty)
- Node: v24.15.0 on darwin/arm64
- Iterations: 3 measured, 1 warmup
- Runs compared: 2

## Main Pipeline Trends

| Category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| build | 0.42 | +2.8% | +1.4% |
| layout | 0.83 | -2.4% | -1.2% |
| rays | 0.77 | +3.7% | +1.8% |
| analysis | 122.19 | +0.7% | +0.4% |
| svgRender | 0.13 | +2.8% | +1.4% |
| total | 202.98 | -2.0% | -1.0% |

## Aberration Panel Trends

| Panel category | Current median ms | vs previous | vs 10-run median |
|---|---:|---:|---:|
| data.chromaticFieldCurvature | 36.51 | -4.6% | -2.4% |
| data.coma | 8.12 | -2.3% | -1.2% |
| data.fieldCurvature | 32.22 | -1.8% | -0.9% |
| data.saBlurCharacter | 6.05 | -0.5% | -0.3% |
| data.saProfile | 0.65 | -3.0% | -1.5% |
| data.sphericalAberration | 0.73 | -0.6% | -0.3% |
| render.aberrationsTab | 73.20 | +0.9% | +0.5% |
| render.astigmatismSection | 0.07 | +2.2% | +1.1% |
| render.comaPreviewSection | 0.40 | +1.6% | +0.8% |
| render.comaTab | 8.95 | +0.7% | +0.3% |
| render.fieldCurvatureSection | 0.17 | +2.5% | +1.2% |
| render.meridionalComaSection | 0.05 | +0.5% | +0.2% |
| render.sagittalComaSection | 0.06 | -0.4% | -0.2% |
| render.sphericalSection | 0.03 | +2.3% | +1.2% |

## Slowest Current Cases

| Category | Lens | Scenario | Median ms |
|---|---|---|---:|
| total | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 367.52 |
| analysis | canon-ef-8-15mm-f4l-fisheye-usm | tele-dense-chromatic | 208.78 |
| render.aberrationsTab | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 121.19 |
| data.chromaticFieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 57.35 |
| data.fieldCurvature | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 49.87 |
| render.comaTab | sony-fe-24-70mm-f28-gm-ii | default | 13.57 |
| data.saBlurCharacter | sony-fe-24-70mm-f28-gm-ii | stopped-close | 12.59 |
| data.coma | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 12.33 |
| layout | sony-fe-24-70mm-f28-gm-ii | stopped-close | 6.03 |
| build | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 3.74 |
| rays | sony-fe-24-70mm-f28-gm-ii | tele-dense-chromatic | 3.01 |
| data.sphericalAberration | leica-apo-vario-elmarit-sl-90-280-f28-4 | default | 1.22 |
| data.saProfile | sony-fe-24-70mm-f28-gm-ii | default | 1.06 |
| render.comaPreviewSection | leica-apo-vario-elmarit-sl-90-280-f28-4 | stopped-close | 0.60 |
| svgRender | leica-apo-vario-elmarit-sl-90-280-f28-4 | tele-dense-chromatic | 0.49 |
| render.fieldCurvatureSection | canon-serenar-50f18 | default | 0.23 |
| render.astigmatismSection | canon-serenar-50f18 | default | 0.12 |
| render.sagittalComaSection | canon-serenar-50f18 | default | 0.09 |
| render.meridionalComaSection | canon-serenar-50f18 | default | 0.08 |
| render.sphericalSection | canon-serenar-50f18 | default | 0.07 |

## Skips And Warnings

- Aberration panel skips: 12
- Warnings: 0

