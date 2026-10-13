# Dispersion Estimate Exploration (paused)

A proposed exploration of how the MTF tab treats glasses known only by `nd` and `νd`. Ron paused it on 2026-10-04:
nothing here is scheduled, and the current behavior stays until it is resumed. The findings below were measured on the
catalog of that date; rerun the audit script before acting on them.

Two changes are proposed, in order:

- **A. Narrow the blur.** Blur the chart for estimated dispersion only when an estimated glass has `νd` below 30 or
  the lens reaches 200 mm. List the other cases in the collapsed warning line without a blur.
- **B. Refit the estimate.** Replace the two straight "normal lines" the estimate uses with quadratic fits to the
  glass catalog. After B, the blur would be needed at most for lenses that reach 200 mm.

## Current behavior

- The MTF data warning (`assessMtfDataLimitations` in `src/optics/analysis/mtfDataLimitations.ts`, drawn by
  `src/components/display/analysis/mtf/MtfDataWarning.tsx`) lists `estimated-dispersion` whenever a spectral chart uses
  a glass with no catalog or line-index data, and blurs the chart for it.
- The estimate is `abbeLineIndices` in `src/optics/dispersion.ts`. It keeps the F−C span exact and places the d line
  and the g line with two normal lines: `normalLinePdC`, a straight-line fit to the catalog, and `normalLinePgF`,
  Schott's standard line, which is not fitted to the catalog. Spectral MTF uses the estimate only up to `νd` 65
  (`MTF_ESTIMATED_DISPERSION_MAX_VD`).

## Findings

### Who is flagged

At default settings (photopic, best axial focus, wide end) 832 lenses have an MTF chart and 348 list a data gap. 231
list estimated dispersion, 183 of them with no other gap.

| Estimated glasses on the lens | Lenses |
| ----------------------------- | -----: |
| One glass                     |    108 |
| Up to 10 % of glasses         |     79 |
| 10–25 %                       |     93 |
| 25–50 %                       |     35 |
| Over 50 %, not all            |     12 |
| All                           |     12 |

- 62 lenses are flagged only by glasses thinner than 0.5 mm, mostly the resin layers of compound aspheres and cement
  layers.
- Of the 511 estimated glasses, 62 have `νd` below 30.

### How far the chart moves

The `degrade` mode takes every lens whose glasses all resolve to catalog data, replaces some glasses with the
estimate while keeping each one's exact F−C span, and compares the default chart. "Change" is the largest shift in any
of twelve charted values (10 and 30 lp/mm, sagittal and tangential, at the axis, 50 % and 80 % field) on the 0–1 MTF
scale; 0.02 is treated as visible and 0.05 as material. The run covered 628 lens states on 483 lenses.

One glass estimated, by its `νd`:

| `νd`  | Cases | Median | 90th percentile | Largest | Reach 0.02 | Reach 0.05 |
| ----- | ----: | -----: | --------------: | ------: | ---------: | ---------: |
| 10–20 |    74 |  0.015 |           0.052 |   0.195 |         31 |          8 |
| 20–25 |   230 |  0.009 |           0.031 |   0.076 |         46 |          5 |
| 25–30 |   295 |  0.005 |           0.019 |   0.236 |         25 |          1 |
| 30–35 |   109 |  0.002 |           0.010 |   0.023 |          1 |          0 |
| 35–40 |    87 |  0.001 |           0.005 |   0.010 |          0 |          0 |
| 40–50 |   149 |  0.001 |           0.004 |   0.015 |          0 |          0 |
| 50–60 |   114 |  0.001 |           0.004 |   0.018 |          0 |          0 |
| 60–66 |    88 |  0.001 |           0.005 |   0.022 |          1 |          0 |

Every eligible glass estimated, by focal length:

| Focal length      | Cases | Median | 90th percentile | Largest | Reach 0.02 | Reach 0.05 |
| ----------------- | ----: | -----: | --------------: | ------: | ---------: | ---------: |
| Under 85 mm       |   423 |  0.006 |           0.020 |   0.089 |         45 |          1 |
| 85–200 mm         |   130 |  0.010 |           0.030 |   0.049 |         26 |          0 |
| 200 mm and longer |    75 |  0.030 |           0.077 |   0.122 |         45 |         22 |

- One glass with `νd` of 30 or more on a lens under 200 mm reached 0.02 in 1 of 481 cases (largest 0.022).
- One glass picked at random: median 0.002, 90th percentile 0.009; 18 of 628 cases reach 0.02 and 3 reach 0.05.
- Rank correlation with the change, over the cases whose glasses were picked without regard to type: share of glasses
  estimated 0.31, number of glasses 0.51, focal length 0.30. A first-order focus sensitivity (each glass's share of
  axial color, summed in quadrature and divided by the f-number) reaches 0.69.

### Why

The error is a bias, not scatter. Catalog glasses sit systematically off both normal lines at low `νd`, and long focal
lengths magnify the resulting focus error.

| `νd`   | Glasses | Mean P_g,F minus Schott line | Scatter of P_g,F | Mean P_d,C minus engine line |
| ------ | ------: | ---------------------------: | ---------------: | ---------------------------: |
| 10–20  |       7 |                      +0.0410 |           0.0049 |                      −0.0064 |
| 20–25  |      23 |                      +0.0210 |           0.0059 |                      −0.0036 |
| 25–30  |      59 |                      +0.0108 |           0.0050 |                      −0.0019 |
| 30–35  |      56 |                      +0.0041 |           0.0035 |                      −0.0005 |
| 35–40  |      70 |                      +0.0002 |           0.0040 |                      +0.0003 |
| 40–50  |     166 |                      −0.0041 |           0.0041 |                      +0.0012 |
| 50–60  |     136 |                      −0.0034 |           0.0037 |                      +0.0014 |
| 60–66  |      61 |                      +0.0004 |           0.0036 |                      +0.0011 |

## Proposal A: narrow the blur

Candidate rules, with the lenses each would blur at default settings and how each scores on the experiment's cases
whose glasses were picked without regard to type (2,512 cases; 247 reach 0.02 and 43 reach 0.05):

| Blur for estimated dispersion when…        | Blurred for it | Blurred in total | Catches 0.02+ | Catches 0.05+ | Largest change let through |
| ------------------------------------------ | -------------: | ---------------: | ------------: | ------------: | -------------------------: |
| Any glass is estimated (current)           |            231 |              348 |         100 % |         100 % |                       none |
| Never                                      |              0 |              165 |           0 % |           0 % |                      0.122 |
| 25 % or more of glasses                    |             71 |              227 |          82 % |          86 % |                      0.098 |
| 50 % or more of glasses                    |             28 |              189 |          51 % |          53 % |                      0.117 |
| A glass has `νd` below 30                  |             37 |              190 |          94 % |          95 % |                      0.063 |
| `νd` below 30, or the lens reaches 200 mm  |             49 |              200 |          96 % |         100 % |                      0.032 |
| `νd` below 30, or focus sensitivity ≥ 1.6  |             57 |              209 |          99 % |         100 % |                      0.022 |

- Recommended: `νd` below 30, or the lens reaches 200 mm. It needs no new optics and names its reasons plainly.
- The sensitivity rule scores best but needs a paraxial marginal trace in the helper and an opaque threshold.
- Sketch: give `MtfDataLimitation` a blocking flag; `MtfDataWarning` blurs only while a blocking kind is undismissed
  and otherwise shows the collapsed line. The dismissal store and the gap texts do not change.

## Proposal B: refit the estimate

- Replace both normal lines with quadratics in `νd`, fitted to the 571 catalog glasses with `νd` of 65 or less. The
  `catalog` mode prints the coefficients for the current catalog.
- Apply the fit only as the default when no partial-dispersion data is authored. An authored `dPgF` keeps its standard
  meaning as a deviation from Schott's line, the glass-map diagram keeps drawing that line, and the `νd`-above-65
  block stays.
- Keep it in `src/optics/dispersion.ts`; `agent_docs/decisions.md` names `normalLinePgF` and `abbeLineIndices` as the
  single homes.

Residuals over the fitted glasses, as root mean square:

| Partial dispersion | Current line | Quadratic fit | Current, `νd` < 30 | Quadratic, `νd` < 30 |
| ------------------ | -----------: | ------------: | -----------------: | -------------------: |
| P_g,F              |       0.0088 |        0.0040 |             0.0187 |               0.0051 |
| P_d,C              |       0.0018 |        0.0009 |             0.0031 |               0.0007 |

Measured on the same lenses and glasses as above, as cases reaching 0.02 and 0.05:

| Glasses estimated                     | Cases | Current lines | Fitted P_g,F only | Both fitted |
| ------------------------------------- | ----: | ------------: | ----------------: | ----------: |
| Every eligible glass                  |   628 |      116 / 23 |           88 / 16 |      32 / 3 |
| Every eligible glass, 200 mm and over |    75 |       45 / 22 |           43 / 15 |      15 / 2 |
| One random glass                      |   628 |        18 / 3 |             6 / 0 |       0 / 0 |
| Lowest-`νd` glass alone               |   628 |       96 / 14 |            35 / 4 |       3 / 0 |

- Fitting P_g,F alone helps little and can hurt: the two partials must change together.
- Both fits are better by more than 0.002 in 975 of 1,884 cases and worse in 100. The largest regression went from
  0.004 to 0.043 (Sony FE 400mm f/2.8 with every glass estimated).
- Reach: 288 lenses use the estimate for at least one glass, rear plates included, and 275 of them have a glass with
  no authored `dPgF`. Those 275 change in every chromatic display, not only MTF. Of the 679 estimated glasses, 27
  carry a `dPgF` and 45 are e-line referenced.

Work, as a separate PR:

- Engine: two fitted functions and the default selection in `src/optics/dispersion.ts`.
- Tests: `__tests__/src/optics/dispersion.test.ts` pins the current formulas and checks the P_d,C lines against the
  catalog; update the pin and extend the catalog check to P_g,F so the constants cannot drift.
- Docs: the Spectra paragraph of `agent_docs/architecture/optics-engine.md`, the single-home entry in
  `agent_docs/decisions.md`, the `dPgF` wording in `src/lens-data/LENS_DATA_SPEC.md`, and a changelog line.
- Validation: rerun `degrade` and `report` against the real implementation.

## Open questions

- **e-line glasses.** The 45 e-line referenced glasses use a third line, `normalLinePeC`. It has not been refitted or
  tested.
- **Out-of-sample.** The fits were scored on the catalog they were fitted to. Fit on some vendors and test on the
  others before trusting the gain.
- **Stand-ins.** The experiment uses catalog glasses in place of unknown ones. Real unknowns may sit further from any
  curve: obsolete lead flints, and proprietary materials such as Canon's BR resin (`canon-rf-14mm-f14-l-vcm`) and the
  ITO adhesive layer in `canon-ef-100300mm-f4556-usm`. The exotic ones found so far have `νd` below 30, so rule A
  covers them.
- **Thin layers.** A thickness cut would drop the 62 layer-only lenses but also real phone-lens elements under 0.5 mm.
  The focus-sensitivity weight separates the two; rule A does not treat thin layers specially.
- **Lens notes.** `*.analysis.md` prose that quotes color numbers for the 275 lenses could go stale under B. This has
  not been checked.

## Reproducing

`scripts/audit-mtf-dispersion.mjs` is read-only and takes one mode:

```bash
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf-dispersion.mjs census
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf-dispersion.mjs catalog
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf-dispersion.mjs degrade --jobs=12 --out=<dir>
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf-dispersion.mjs report --out=<dir>
```

- `census` gives "Who is flagged", the rule counts of Proposal A and the reach of the estimate.
- `catalog` gives the deviation table, the residuals and the quadratic coefficients.
- `degrade` writes one JSON file per shard to a directory outside the repository; it traces every eligible lens a
  dozen times, so run it with `--jobs`. `--limit=N` caps the lenses of each shard for a quick look.
  Each shard also runs a control and stops if it fails: line indices built from the engine's own normal lines must
  reproduce the nd/νd estimate, which is what lets authored line indices stand in for a refitted estimate without
  touching the engine.
- `report` gives the change tables, the rank correlations, the rule scores and the refit comparison.
