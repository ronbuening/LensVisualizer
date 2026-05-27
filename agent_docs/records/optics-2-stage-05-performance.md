# Historical Optics 2 Stage 05 Performance Pass

Status update, 2026-05-26: the migration safe window is closed. The old engine files, parity-only tests, and
`benchmark:optics-2` script were removed after the new engine moved into `src/optics`.

Generated: 2026-05-26T19:43:48.563Z

## Protocol

- Machine: darwin arm64, Apple M4 Pro
- Node: v24.15.0
- Branch: ronbuening/NewOpticsEngineProposal
- Commit: 4e93a05
- Sample count: 7; warmups per case: 2
- Old engine: retained builder/barrels under `src/optics/*Legacy.ts` at the time of this benchmark
- New engine: then-current `src/optics-2` compatibility facades selected by stable `src/optics` imports
- Counts are successful/clipped/failed trace or sampled-point counts accumulated across measured samples.

## Results

| Case | Lens | Old median ms | New median ms | New/old | Worst ms | Old counts | New counts | Status |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Sequential on-axis display rays | nikkor-z-50f18s | 13.206 | 17.845 | 1.35x | 18.062 | 7000/0/0 | 7000/0/0 | regression |
| Sequential off-axis display rays | nikon-z-24-70f4s | 0.084 | 0.110 | 1.31x | 0.111 | 35/0/0 | 35/0/0 | regression |
| Skew ray trace | nikon-z-58f095-noct | 16.142 | 21.941 | 1.36x | 22.427 | 4669/2331/0 | 4669/2331/0 | regression |
| Chromatic fan | apo-lanthar-50f2 | 0.352 | 0.410 | 1.16x | 0.647 | 168/0/0 | 168/0/0 | regression |
| Distortion grid | canon-ef-8-15mm-f4l-fisheye-usm | 2.647 | 2.268 | 0.86x | 2.929 | 434/0/756 | 434/0/756 | faster |
| Vignetting sweep | sony-fe-16-35mm-f28-gm-ii | 46.530 | 46.961 | 1.01x | 48.143 | 105/35/0 | 105/35/0 | noise |
| Bokeh point cloud | nikon-z-58f095-noct | 62.619 | 61.672 | 0.98x | 65.468 | 0/0/10311 | 0/0/10311 | noise |
| Folded auto-path fixture | reference-newtonian-side-focus | 0.099 | 0.095 | 0.96x | 0.238 | 28/14/0 | 28/14/0 | noise |

## Exit Assessment

- Normal display rendering: accepted for this migration pass. The repeated on-axis microbenchmark remained slower by
  0.0046 ms/ray, and the full off-axis display fan delta is 0.026 ms;
  both paths preserved trace/clipped/failed counts exactly.
- Nested analysis path faster: Distortion grid.
- Regressions over 15%: Sequential on-axis display rays, Sequential off-axis display rays, Skew ray trace, Chromatic fan.
  These were accepted for the post-flip safe window because absolute display deltas were below a frame-budget concern
  and counts matched.

## Notes

- This pass is informational and intentionally records counts alongside timings so speed changes cannot hide trace
  count, clipping, or failure-count drift.
- Analysis cases that still delegate through compatibility adapters should be treated as settled-correctness baselines,
  not final optimization proof.
