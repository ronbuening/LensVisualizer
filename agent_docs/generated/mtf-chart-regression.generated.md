# MTF Chart Regression (auto-generated)

Simulated MTF of 19 lens configurations against values digitized from the makers' published
MTF charts: 392 samples in `reports/data/mtfChartAnchors.csv`, one per charted field position at
10 and 30 lp/mm.

**Regenerate this file** by running `MTF_CHART_REPORT=1 npm run generate:reports -- mtfChartRegression`.
Without the variable the run is skipped, because it traces every configuration at a 256 pupil-grid cap.

## Reading the Numbers

- **Delta** is simulation minus chart, `(S + T) / 2 - (pair_min + pair_max) / 2`, in MTF units on the 0-1
  scale. A negative delta means the simulation reads below the chart.
- **Only pair midpoints are compared.** The digitization records the envelope of a chart's two strokes at each
  image height without assigning them to sagittal and meridional, so a midpoint can hide opposite errors in S
  and T.
- **Samples are correlated, not independent measurements.** The 392 samples come from
  19 charts of 17 lenses; neighbors on a curve share a prescription, an image plane
  and a digitization. The means describe this set and carry no confidence interval.
- **Digitization allowance: ±0.035 MTF.** A heuristic for reading a value off a published
  raster, not an error bound; it does not cover differences between the charted lens and the model.
- **Agreement is reported, never a test threshold.** No test asserts on these numbers, and a published chart is
  not evidence for changing a prescription.
- The simulation is the authored prescription at infinity, wide open, in the photopic spectrum, on the best
  axial focus plane. The chart is the production lens under conditions the maker mostly leaves unstated.

Two comparisons are tabulated:

- **Audit settings**: method `geometric-dl` for every maker, as the audit that digitized the charts ran it.
- **Maker convention**: the method the maker's charts are computed with, from
  `reports/data/mtfChartConventions.ts`. A geometric chart is simulated as `geometric`, every other as
  `geometric-dl`. The basis of a convention is part of the claim.

| Maker | Chart method | Basis | Simulated as | Evidence |
|---|---|---|---|---|
| Nikon | geometric | inferred | `geometric` | Charts exceed the diffraction limit at the stated aperture: f/4 zooms read 0.99 / 0.95 at 10 / 30 lp/mm against a limit of 0.972 / 0.915 at 555 nm. https://imaging.nikon.com/imaging/lineup/lens/mtf_chart/ |
| Sigma | diffraction | documented | `geometric-dl` | Sigma publishes a "Diffraction MTF" and a "Geometrical MTF" chart for each lens; the anchors are digitized from the diffraction charts. https://www.sigma-global.com/en/lenses/a020_105_28/ |

## Summary

`Recorded by the audit` is the audit's own S and T from the anchor file, not a recomputation. 20 of its samples belong to prescriptions corrected since the audit (listed under Reproduction of the Audit), so those rows still include the printed, uncorrected tables.

| Maker | Comparison | Samples | Mean signed | Mean absolute | Negative |
|---|---|---:|---:|---:|---:|
| All | Audit settings | 392 | -0.0556 | 0.0639 | 85.2% |
| All | Maker convention | 392 | -0.0376 | 0.0576 | 62.2% |
| All | Recorded by the audit | 392 | -0.0631 | 0.0731 | 80.9% |
| Nikon | Audit settings | 184 | -0.0510 | 0.0573 | 88.6% |
| Nikon | Maker convention | 184 | -0.0127 | 0.0439 | 39.7% |
| Nikon | Recorded by the audit | 184 | -0.0719 | 0.0796 | 83.2% |
| Sigma | Audit settings | 208 | -0.0597 | 0.0697 | 82.2% |
| Sigma | Maker convention | 208 | -0.0597 | 0.0697 | 82.2% |
| Sigma | Recorded by the audit | 208 | -0.0553 | 0.0674 | 78.8% |

## By Frequency and Field Band

Field is the fraction of the reference image height. Each comparison lists mean signed delta, mean absolute
delta and the share of negative samples.

| Maker | lp/mm | Field | Samples | Audit: signed | absolute | negative | Convention: signed | absolute | negative |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| All | 10 | 0-0.3 | 76 | -0.0164 | 0.0226 | 75.0% | -0.0068 | 0.0192 | 40.8% |
| All | 10 | 0.4-0.7 | 76 | -0.0411 | 0.0425 | 93.4% | -0.0306 | 0.0363 | 71.1% |
| All | 10 | 0.8-1.0 | 44 | -0.0591 | 0.0658 | 84.1% | -0.0476 | 0.0571 | 72.7% |
| All | 30 | 0-0.3 | 76 | -0.0367 | 0.0619 | 75.0% | -0.0103 | 0.0650 | 43.4% |
| All | 30 | 0.4-0.7 | 76 | -0.0948 | 0.0982 | 93.4% | -0.0689 | 0.0876 | 75.0% |
| All | 30 | 0.8-1.0 | 44 | -0.1098 | 0.1144 | 93.2% | -0.0862 | 0.0966 | 84.1% |
| Nikon | 10 | 0-0.3 | 36 | -0.0187 | 0.0203 | 83.3% | +0.0015 | 0.0133 | 11.1% |
| Nikon | 10 | 0.4-0.7 | 36 | -0.0370 | 0.0372 | 97.2% | -0.0150 | 0.0240 | 50.0% |
| Nikon | 10 | 0.8-1.0 | 20 | -0.0568 | 0.0568 | 100.0% | -0.0314 | 0.0377 | 75.0% |
| Nikon | 30 | 0-0.3 | 36 | -0.0315 | 0.0543 | 77.8% | +0.0244 | 0.0608 | 11.1% |
| Nikon | 30 | 0.4-0.7 | 36 | -0.0787 | 0.0860 | 86.1% | -0.0242 | 0.0636 | 47.2% |
| Nikon | 30 | 0.8-1.0 | 20 | -0.1135 | 0.1143 | 95.0% | -0.0617 | 0.0753 | 75.0% |
| Sigma | 10 | 0-0.3 | 40 | -0.0143 | 0.0246 | 67.5% | -0.0143 | 0.0246 | 67.5% |
| Sigma | 10 | 0.4-0.7 | 40 | -0.0447 | 0.0473 | 90.0% | -0.0447 | 0.0473 | 90.0% |
| Sigma | 10 | 0.8-1.0 | 24 | -0.0611 | 0.0732 | 70.8% | -0.0611 | 0.0732 | 70.8% |
| Sigma | 30 | 0-0.3 | 40 | -0.0415 | 0.0687 | 72.5% | -0.0415 | 0.0687 | 72.5% |
| Sigma | 30 | 0.4-0.7 | 40 | -0.1092 | 0.1092 | 100.0% | -0.1092 | 0.1092 | 100.0% |
| Sigma | 30 | 0.8-1.0 | 24 | -0.1066 | 0.1144 | 91.7% | -0.1066 | 0.1144 | 91.7% |

## Per Configuration

`Label f/` is the aperture printed on the chart; `Traced f/` is the working f-number of the simulated axial
beam, and `Limited by` the surface that bounds it. Focus shift is the best axial focus plane relative to the
authored image plane, in mm. Each comparison lists mean signed and mean absolute delta.

| Lens | zoomT | Maker | Chart convention | Label f/ | Traced f/ | Limited by | Focus shift | Audit: signed | absolute | Convention: signed | absolute |
|---|---:|---|---|---:|---:|---|---:|---:|---:|---:|---:|
| `nikkor-z-14-30f4s` | 0 | Nikon | geometric (inferred) | 4.00 | 4.00 | iris | -0.0494 | -0.0801 | 0.0801 | -0.0248 | 0.0535 |
| `nikkor-z-14-30f4s` | 1 | Nikon | geometric (inferred) | 4.00 | 4.00 | iris | -0.0314 | -0.0743 | 0.0743 | -0.0199 | 0.0290 |
| `nikkor-z-35f18s` | 0 | Nikon | geometric (inferred) | 1.80 | 1.85 | 9 | +0.0147 | +0.0199 | 0.0257 | +0.0480 | 0.0480 |
| `nikkor-z-85f18s` | 0 | Nikon | geometric (inferred) | 1.80 | 1.85 | iris | -0.0800 | -0.1455 | 0.1455 | -0.1282 | 0.1291 |
| `nikkor-z50f12` | 0 | Nikon | geometric (inferred) | 1.20 | 1.23 | iris | -0.0515 | -0.0171 | 0.0287 | -0.0008 | 0.0219 |
| `nikon-z-135f18-plena` | 0 | Nikon | geometric (inferred) | 1.80 | 1.85 | iris | -0.0109 | -0.0181 | 0.0182 | +0.0062 | 0.0153 |
| `nikon-z-24-70f4s` | 0 | Nikon | geometric (inferred) | 4.00 | 4.00 | iris | -0.0734 | -0.0454 | 0.0461 | +0.0066 | 0.0460 |
| `nikon-z-24-70f4s` | 1 | Nikon | geometric (inferred) | 4.00 | 4.00 | iris | +0.0181 | -0.0566 | 0.0566 | -0.0044 | 0.0260 |
| `nikon-z-mc-105f28` | 0 | Nikon | geometric (inferred) | 2.80 | 2.89 | iris | +0.0294 | -0.0329 | 0.0329 | +0.0125 | 0.0178 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | Sigma | diffraction (documented) | 1.40 | 1.40 | iris | -0.0258 | -0.0496 | 0.0496 | -0.0496 | 0.0496 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | Sigma | diffraction (documented) | 2.80 | 2.90 | iris | -0.0215 | -0.0609 | 0.0609 | -0.0609 | 0.0609 |
| `sigma-16mm-f14-dc-dn` | 0 | Sigma | diffraction (documented) | 1.40 | 1.47 | 16 | -0.0052 | -0.0351 | 0.0625 | -0.0351 | 0.0625 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | Sigma | diffraction (documented) | 1.40 | 1.43 | 26A | -0.0151 | -0.0511 | 0.0532 | -0.0511 | 0.0532 |
| `sigma-23mm-f14-dc-dn-c` | 0 | Sigma | diffraction (documented) | 1.40 | 1.42 | 15 | -0.0313 | -0.2324 | 0.2324 | -0.2324 | 0.2324 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | Sigma | diffraction (documented) | 1.40 | 1.49 | 14 | -0.0256 | -0.0554 | 0.0569 | -0.0554 | 0.0569 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | Sigma | diffraction (documented) | 2.80 | 2.80 | iris | -0.0319 | -0.0220 | 0.0243 | -0.0220 | 0.0243 |
| `sigma-50f14-dg-hsm-a` | 0 | Sigma | diffraction (documented) | 1.40 | 1.40 | iris | -0.0077 | -0.0273 | 0.0361 | -0.0273 | 0.0361 |
| `sigma-85f14-art` | 0 | Sigma | diffraction (documented) | 1.40 | 1.50 | 27A | -0.0226 | +0.0229 | 0.0363 | +0.0229 | 0.0363 |
| `sigma-art-85mm-f14-dgdn` | 0 | Sigma | diffraction (documented) | 1.40 | 1.40 | iris | +0.0008 | -0.0700 | 0.0701 | -0.0700 | 0.0701 |

## Reproduction of the Audit

The anchor file keeps the S and T the audit itself computed at every sample, with the settings of the
`Audit settings` comparison and a pupil grid forced through 128 and 256. This report refines up to the same
cap but stops once successive grids agree within 0.01, usually on a coarser grid. Gaps of about that size
therefore come from sampling alone, and they carry into the `Audit settings` rows above; larger ones mean the
engine or the lens data changed. A small negative mean is consistent with the diffraction-limit lattice being
binned above 128 cells, which reads the audit's forced grids slightly high. Each row summarizes
`recomputed - recorded` over the S and T of every sample.

| Lens | zoomT | Values | Max abs | Mean abs | Mean signed | Above 0.01 | Fields converged | Final grids |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `nikkor-z-14-30f4s` | 0 | 40 | 0.0089 | 0.0060 | -0.0060 | 0 | 10/10 | 32-64 |
| `nikkor-z-14-30f4s` | 1 | 40 | 0.0075 | 0.0059 | -0.0059 | 0 | 10/10 | 32-64 |
| `nikkor-z-35f18s` | 0 | 40 | 0.0088 | 0.0056 | -0.0056 | 0 | 10/10 | 32-64 |
| `nikkor-z-85f18s` | 0 | 44 | 0.0068 | 0.0025 | -0.0023 | 0 | 11/11 | 64-128 |
| `nikkor-z50f12` | 0 | 40 | 0.0081 | 0.0035 | -0.0033 | 0 | 10/10 | 32-128 |
| `nikon-z-135f18-plena` | 0 | 40 | 0.0105 | 0.0059 | -0.0059 | 1 | 10/10 | 32-64 |
| `nikon-z-24-70f4s` | 0 | 44 | 0.0082 | 0.0056 | -0.0056 | 0 | 11/11 | 32-64 |
| `nikon-z-24-70f4s` | 1 | 40 | 0.0116 | 0.0061 | -0.0061 | 3 | 10/10 | 32-128 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | 40 | 0.0075 | 0.0033 | -0.0033 | 0 | 10/10 | 64-128 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | 44 | 0.0127 | 0.0073 | -0.0073 | 4 | 11/11 | 32-64 |
| `sigma-16mm-f14-dc-dn` | 0 | 44 | 0.0069 | 0.0037 | -0.0036 | 0 | 11/11 | 32-256 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | 40 | 0.0089 | 0.0044 | -0.0044 | 0 | 10/10 | 32-64 |
| `sigma-23mm-f14-dc-dn-c` | 0 | 44 | 0.0060 | 0.0024 | -0.0021 | 0 | 11/11 | 64-128 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | 40 | 0.0066 | 0.0033 | -0.0033 | 0 | 10/10 | 32-256 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | 40 | 0.0102 | 0.0066 | -0.0066 | 1 | 10/10 | 64 |
| `sigma-50f14-dg-hsm-a` | 0 | 40 | 0.0069 | 0.0035 | -0.0035 | 0 | 10/10 | 64-128 |
| `sigma-85f14-art` | 0 | 40 | 0.0087 | 0.0053 | -0.0053 | 0 | 10/10 | 32-64 |
| `sigma-art-85mm-f14-dgdn` | 0 | 44 | 0.0077 | 0.0042 | -0.0042 | 0 | 11/11 | 64-128 |

Over these 18 configurations (744 values): max absolute 0.0127, mean absolute
0.0047, mean signed -0.0047, 9 above 0.01.

### Prescription corrected since the audit

Lenses with a `sourceErrata` entry of status `corrected` no longer carry the prescription the audit traced, so
they are left out of the aggregate above.

| Lens | zoomT | Values | Max abs | Mean abs | Mean signed | Above 0.01 | Fields converged | Final grids |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `nikon-z-mc-105f28` | 0 | 40 | 0.8973 | 0.2393 | +0.2342 | 20 | 10/10 | 32-64 |

## Chart Sources

| Lens | zoomT | Method printed on the chart | Chart |
|---|---:|---|---|
| `nikkor-z-14-30f4s` | 0 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_14-30mmf4s/img/mtf_wide.jpg |
| `nikkor-z-14-30f4s` | 1 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_14-30mmf4s/img/mtf_tele.jpg |
| `nikkor-z-35f18s` | 0 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_35mmf18s/img/mtf.jpg |
| `nikkor-z-85f18s` | 0 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_85mmf18s/img/mtf.jpg |
| `nikkor-z50f12` | 0 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_50mmf12s/img/mtf.jpg |
| `nikon-z-135f18-plena` | 0 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_135mmf18s/img/mtf.jpg |
| `nikon-z-24-70f4s` | 0 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_24-70mmf4s/img/mtf_wide.jpg |
| `nikon-z-24-70f4s` | 1 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_24-70mmf4s/img/mtf_tele.jpg |
| `nikon-z-mc-105f28` | 0 | not stated in downloaded chart | https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_mc105mmf28_vr_s/img/mtf.jpg |
| `sigma-105mm-f14-dg-hsm-art` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/a018_105_14_specification_02_01.png |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/a020_105_28_specification_02_01.png |
| `sigma-16mm-f14-dc-dn` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/c017_16_14_specification_02_01.png |
| `sigma-20mm-f14-dg-hsm-art` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/a015_20_14_specification_02_01.jpg |
| `sigma-23mm-f14-dc-dn-c` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/c023_23_14_specification_02_01.png |
| `sigma-35mm-f14-dg-hsm-a` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/a012_35_14_specification_02_01.jpg |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/c019_45_28_specification_02_01.png |
| `sigma-50f14-dg-hsm-a` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/a014_50_14_specification_02_01.png |
| `sigma-85f14-art` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/a016_85_14_specification_02_01.png |
| `sigma-art-85mm-f14-dgdn` | 0 | Diffraction MTF | https://www.sigma-global.com/lenses/a020_85_14_specification_02_01.png |
