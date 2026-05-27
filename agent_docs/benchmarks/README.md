# Benchmarks

On-demand benchmark records for optics computation, SVG rendering, and aberration-panel analysis/rendering.

## Command

Run the benchmark manually:

```bash
npm run benchmark:optics-rendering
```

Useful options:

```bash
npm run benchmark:optics-rendering -- --dry-run
npm run benchmark:optics-rendering -- --report-only
npm run benchmark:optics-rendering -- --iterations=5 --warmups=2
```

- `--dry-run` validates the benchmark module and default lens keys without writing output.
- `--report-only` regenerates the Markdown report from existing JSON records without creating a new run.
- `--iterations` and `--warmups` tune the measured and warmup passes. Defaults are 3 measured iterations and 1 warmup.

## Output Policy

Each real benchmark run writes one machine-readable record:

```text
agent_docs/benchmarks/runs/<timestamp>-<short-sha>.json
```

When the run directory contains 15 or more JSON records, the runner removes the oldest records until 14 remain. Dry runs
do not write or prune files.

The human-readable report is regenerated from the newest 10 run records:

```text
agent_docs/benchmarks/benchmark-report.md
```

Do not hand-edit run JSON files. If report formatting changes, run `npm run benchmark:optics-rendering -- --report-only`
instead of creating another benchmark record.

## Coverage

The benchmark suite currently measures 12 representative lenses across three scenarios:

- simple classic prime
- Voigtlander APO-Lanthar 50mm f/2
- compact modern wide/aspheric
- fast high-correction prime
- standard and tele zooms
- macro/focus-heavy lens
- perspective-control wide
- fisheye/projection path
- large-format wide zoom
- fully Sellmeier-covered complex APO zoom
- folded mirror/reference path

Each run records:

- main pipeline categories: `build`, `layout`, `rays`, `analysis`, `svgRender`, `totalCold`, and `totalWarm`
- analysis subcategories: optical summary, distortion curve, distortion field grid, vignetting, pupil aberration,
  bokeh pair, and best focus
- aberration-panel data categories: spherical aberration, SA profile, SA blur character, field curvature, chromatic field
  curvature, and coma
- aberration-panel render categories: full tabs plus section-level spherical, field curvature, astigmatism, meridional
  coma, sagittal coma, and coma preview rendering
- explicit skips for folded-system sections guarded by the UI

## Notes

The runner builds the benchmark module through Vite SSR so TypeScript, TSX, React, and `import.meta.glob` catalog imports
resolve the same way they do in the app. It is intentionally opt-in and is not called by `test`, `build`, `lint`,
metadata generation, glass reports, or mirror reports.
