# Optics 2 Stage 05 Performance Pass

Generated: 2026-05-26T19:28:36.614Z

## Protocol

- Machine: darwin arm64, Apple M4 Pro
- Node: v24.15.0
- Branch: ronbuening/NewOpticsEngineProposal
- Commit: a5a300c
- Sample count: 7; warmups per case: 2
- Old engine: retained legacy builder/barrels under `src/optics/*Legacy.ts`
- New engine: `src/optics-2` compatibility facades selected by stable `src/optics` imports
- Counts are successful/clipped/failed trace or sampled-point counts accumulated across measured samples.

## Results

| Case | Lens | Old median ms | New median ms | New/old | Worst ms | Old counts | New counts | Status |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Sequential on-axis display rays | nikkor-z-50f18s | 13.447 | 19.047 | 1.42x | 19.432 | 7000/0/0 | 7000/0/0 | regression |
| Sequential off-axis display rays | nikon-z-24-70f4s | 0.087 | 0.116 | 1.34x | 0.129 | 35/0/0 | 35/0/0 | regression |
| Skew ray trace | nikon-z-58f095-noct | 16.765 | 22.604 | 1.35x | 23.070 | 4669/2331/0 | 4669/2331/0 | regression |
| Chromatic fan | apo-lanthar-50f2 | 0.362 | 0.417 | 1.15x | 0.515 | 168/0/0 | 168/0/0 | regression |
| Distortion grid | canon-ef-8-15mm-f4l-fisheye-usm | 2.725 | 2.507 | 0.92x | 3.556 | 434/0/756 | 434/0/756 | faster |
| Vignetting sweep | sony-fe-16-35mm-f28-gm-ii | 48.755 | 47.828 | 0.98x | 49.293 | 105/35/0 | 105/35/0 | noise |
| Bokeh point cloud | nikon-z-58f095-noct | 61.861 | 60.372 | 0.98x | 64.411 | 0/0/10311 | 0/0/10311 | noise |
| Folded auto-path fixture | reference-newtonian-side-focus | 0.089 | 0.082 | 0.93x | 0.121 | 28/14/0 | 28/14/0 | faster |

## Exit Assessment

- Normal display rendering: accepted for this migration pass. The repeated on-axis microbenchmark remains slower by
  0.0056 ms/ray, and the full off-axis display fan delta is 0.030 ms;
  both paths preserved trace/clipped/failed counts exactly. Follow-up target: reduce sequential adapter overhead by
  moving legacy result projection closer to the engine-native trace result.
- Nested analysis path faster: Distortion grid, Folded auto-path fixture.
- Regressions over 15%: Sequential on-axis display rays, Sequential off-axis display rays, Skew ray trace, Chromatic fan. These are accepted only for the post-flip safe window because absolute display deltas are below a frame-budget concern and counts match.

## Notes

- This pass is informational and intentionally records counts alongside timings so speed changes cannot hide trace
  count, clipping, or failure-count drift.
- Analysis cases that still delegate through compatibility adapters should be treated as settled-correctness baselines,
  not final optimization proof.
