# Benchmarks

On-demand records for optics computation, SVG rendering and aberration-panel analysis/rendering.

## Command

```bash
npm run benchmark:optics-rendering
npm run benchmark:optics-rendering -- --dry-run
npm run benchmark:optics-rendering -- --report-only
npm run benchmark:optics-rendering -- --iterations=5 --warmups=2
npm run benchmark:optics-rendering -- --heavy --iterations=15 --warmups=2
npm run benchmark:optics-rendering -- --memory
npm run benchmark:optics-rendering -- --memory --heavy
```

A plain run measures the full matrix on the current checkout, writes one record, prunes old records and updates the
trend report. `--dry-run` validates module loading, schema and lens/cell keys without measuring or writing.
`--report-only` rebuilds the report from existing full-matrix records. It cannot be combined with heavy/memory modes
or a dry run. `--memory` runs only the memory session and takes no timing counts or dry-run flag. Unknown options fail.

The driver builds a Vite SSR bundle, then runs every measured pass in `scripts/benchmark-child.mjs`. Building and
measuring in the same process contaminates V8 object maps and heap measurements; the child imports only the prebuilt
bundle. A plain timed pass inherits the parent's Node flags. Heavy timed passes use raw heap mode; memory passes use
`--expose-gc`. Progress goes to stderr. There is no cross-commit benchmark mode or historical-engine adapter.

## Heavy Set

`--heavy` runs seven cells of the matrix, about half of its run time:

- `nikon-pc-nikkor-19mm-f4e-ed` at `default`, `stopped-close` and `interactive-drag`
- `canon-tse-50f28l-macro` at `stopped-close` and `interactive-drag`
- `sony-fe-24-70mm-f28-gm-ii` at `default`
- `fujifilm-gf-20-35mm-f4-r-wr` at `default`

The list is `HEAVY_BENCHMARK_CELLS` in `src/benchmarks/opticsRenderingBenchmark.tsx`, typed against the lens and
scenario lists. A cell runs on the caches the cells before it left, so a heavy record is comparable with other heavy
records and not with the same cells of a full run.

## Memory Session

`--memory` measures one scripted session on the current commit; `--heavy` selects the heavy set's four lenses,
otherwise all fifteen participate. A fresh child imports one prebuilt bundle with forced GC available.

Each of three cycles builds every lens in turn, sweeps focus, zoom, aperture and perspective shift/tilt one control
at a time, computes diagram rays and settled analysis for every state, then drops lens references. Measurements before
the first cycle, after each cycle and at the end include both `heapUsed` and `arrayBuffers`; their sum includes typed
array storage. The summary reports absolute retained memory and growth over the initial reading. Catalog size affects
the absolute figure, so record it with machine, Node and V8 versions.

A memory record has no timed scenarios. `config.memorySession` records the at-rest state, cycles and control sweeps.

## Output Policy

Plain runs write `agent_docs/benchmarks/runs/<timestamp>-<short-sha>.json`. At 15 JSON records, the runner prunes the
oldest until 14 remain. `benchmark-report.md` summarizes the newest ten full-matrix records. Dry runs never prune.
Records before 2026-10-12 were measured beside the build; later records use child processes, so that process change
can cause a step in the trend.

Heavy and memory records go to `agent_docs/benchmarks/sessions/`, outside the full-matrix trend and without automatic
pruning. Keep meaningful measurement records; delete trials. Heavy runs keep raw samples and untimed completed-work
tallies separately from timing so fast failure can be distinguished from successful computation. Status, grid size,
convergence and explicit skips remain evidence to review, not a cross-commit comparison verdict.

Do not hand-edit run JSON. After report-format changes use `--report-only`. Keep machine, Node version and workload
fixed when interpreting trends. Reduced sampling, unsupported returns and changed physical models do not establish a
speedup. Temporary instrumentation may measure evaluation counts; counters do not belong in production.

### Record Schema

`benchmarkReport.ts` owns schema version 3. Plain records retain the original result, summary, environment and git
shape, including schema-1 `total` compatibility. Session records add raw `samplesMs`, deduplicated `workTallies` with
entry references, subset `config.cells` / `caseSet`, or `memory.head` and `config.memorySession`. The `head` memory key
is retained as the single session's serialized name. Records contain no base side, bootstrap or regression verdict.

## MTF Benchmark

```bash
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/benchmark-mtf.mjs
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/benchmark-mtf.mjs --method=diffraction --spectrum=photopic --fields=11
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/benchmark-mtf.mjs --method=diffraction --finite --stopped-down --iterations=15 --warmups=2
```

This separate computation benchmark prints JSON to stdout without writing source files. It reports each sample and
median at grid caps 32/64/128/256, image-height coordinates, availability and convergence. Warmups default to one and
measured iterations to three. Method is `geometric` (default) or `diffraction`; spectrum is `reference` (default), `cdf`
or `photopic`. `--fields=N` chooses 2–101 evenly spaced fractions (default three); `--sweep` chooses nine.
`--stopped-down` uses one quarter of both open aperture radii. `--finite` selects the documented GF80mm station.
`--diffraction` and `--cdf` remain aliases. Value flags accept a following argument or `=value`; unknown flags fail.

Redirect stdout to JSON. `mtf-geometric.json`, `mtf-diffraction.json`, `mtf-spectral.json` and `mtf-finite.json` retain
the latest corresponding measurements. A rejected field is not a completed MTF timing. Browser latency also includes
worker startup, debouncing, messages and rendering, which these Node runs do not measure.

## Coverage

The rendering suite measures 15 representative lenses across four scenarios:

- simple classic prime
- Voigtlander APO-Lanthar 50mm f/2
- compact modern wide/aspheric
- fast high-correction prime
- standard and tele zooms
- macro/focus-heavy lens
- perspective-control wide (Nikon PC Nikkor 19mm f/4E ED)
- perspective-control close-focus macro (Canon TS-E 50mm f/2.8L Macro)
- fisheye/projection path
- large-format wide zoom
- fully Sellmeier-covered complex APO zoom
- Sigma APO Macro 180mm f/2.8 and 150mm f/2.8 heavy macro lenses
- folded mirror/reference path

The scenarios are `default`, `stopped-close`, `tele-dense-chromatic` and `interactive-drag`. `stopped-close` and
`interactive-drag` carry shift and tilt, which move the two perspective-control lenses and leave every other lens
centered; `interactive-drag` also uses reduced analysis sampling to represent slider-drag responsiveness.

Each run records:

- main pipeline categories: `build`, `layout`, `rays`, `analysis`, `svgRender`, `totalCold`, and `totalWarm`
- analysis subcategories for a centered lens: optical summary, distortion curve, distortion field grid, vignetting, pupil
  aberration, bokeh pair, and best focus
- analysis subcategories for a moved lens: perspective focus, field aberrations, chromatic, distortion, vignetting, and
  pupils, which replace the centered ones other than the optical summary
- aberration-panel data categories: spherical aberration, SA profile, SA blur character, field curvature, chromatic field
  curvature, field-curvature bundle, and coma
- aberration-panel render categories: full tabs plus section-level spherical, field curvature, astigmatism, meridional
  coma, sagittal coma, and coma preview rendering
- explicit skips for folded-system sections guarded by the UI, and for the centered sections a moved lens replaces

## Notes

The runner builds the benchmark module through Vite SSR so TypeScript, TSX, React, and `import.meta.glob` catalog imports
resolve the same way they do in the app. It is intentionally opt-in and is not called by `test`, `build`, `lint`,
metadata generation, glass reports, or mirror reports.
