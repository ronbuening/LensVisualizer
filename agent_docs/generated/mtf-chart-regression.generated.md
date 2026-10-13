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

- **Diffraction**: method `diffraction` for every maker, the tab's default. The audit that digitized the
  charts also ran one method for every maker, the diffraction-corrected product `geometric-dl`, which
  the engine no longer has; its values are kept under The Audit's Recorded Values.
- **Maker convention**: the method the maker's charts are computed with, from
  `reports/data/mtfChartConventions.ts`. A geometric chart is simulated as `geometric`, every other as
  `diffraction`. The basis of a convention is part of the claim.

| Maker | Chart method | Basis | Simulated as | Evidence |
|---|---|---|---|---|
| Nikon | geometric | inferred | `geometric` | Charts exceed the diffraction limit at the stated aperture: f/4 zooms read 0.99 / 0.95 at 10 / 30 lp/mm against a limit of 0.972 / 0.915 at 555 nm. https://imaging.nikon.com/imaging/lineup/lens/mtf_chart/ |
| Sigma | diffraction | documented | `diffraction` | Sigma publishes a "Diffraction MTF" and a "Geometrical MTF" chart for each lens; the anchors are digitized from the diffraction charts. https://www.sigma-global.com/en/lenses/a020_105_28/ |

## Summary

`Recorded by the audit` is the audit's own S and T from the anchor file, computed with `geometric-dl`; it is a frozen reference, not a recomputation. 20 of its samples belong to prescriptions corrected since the audit (listed under The Audit's Recorded Values), so those rows still include the printed, uncorrected tables.

| Maker | Comparison | Samples | Mean signed | Mean absolute | Negative |
|---|---|---:|---:|---:|---:|
| All | Diffraction | 392 | -0.0373 | 0.0517 | 75.5% |
| All | Maker convention | 392 | -0.0257 | 0.0504 | 55.4% |
| All | Recorded by the audit | 392 | -0.0631 | 0.0731 | 80.9% |
| Nikon | Diffraction | 184 | -0.0373 | 0.0467 | 82.6% |
| Nikon | Maker convention | 184 | -0.0127 | 0.0439 | 39.7% |
| Nikon | Recorded by the audit | 184 | -0.0719 | 0.0796 | 83.2% |
| Sigma | Diffraction | 208 | -0.0373 | 0.0561 | 69.2% |
| Sigma | Maker convention | 208 | -0.0373 | 0.0561 | 69.2% |
| Sigma | Recorded by the audit | 208 | -0.0553 | 0.0674 | 78.8% |

## By Frequency and Field Band

Field is the fraction of the reference image height. Each comparison lists mean signed delta, mean absolute
delta and the share of negative samples.

| Maker | lp/mm | Field | Samples | Diffraction: signed | absolute | negative | Convention: signed | absolute | negative |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| All | 10 | 0-0.3 | 76 | -0.0078 | 0.0166 | 68.4% | +0.0013 | 0.0137 | 34.2% |
| All | 10 | 0.4-0.7 | 76 | -0.0335 | 0.0357 | 86.8% | -0.0245 | 0.0309 | 64.5% |
| All | 10 | 0.8-1.0 | 44 | -0.0522 | 0.0607 | 81.8% | -0.0446 | 0.0557 | 72.7% |
| All | 30 | 0-0.3 | 76 | -0.0068 | 0.0486 | 57.9% | +0.0127 | 0.0555 | 34.2% |
| All | 30 | 0.4-0.7 | 76 | -0.0679 | 0.0784 | 81.6% | -0.0532 | 0.0759 | 65.8% |
| All | 30 | 0.8-1.0 | 44 | -0.0795 | 0.0904 | 81.8% | -0.0747 | 0.0893 | 77.3% |
| Nikon | 10 | 0-0.3 | 36 | -0.0176 | 0.0194 | 83.3% | +0.0015 | 0.0133 | 11.1% |
| Nikon | 10 | 0.4-0.7 | 36 | -0.0339 | 0.0341 | 97.2% | -0.0150 | 0.0240 | 50.0% |
| Nikon | 10 | 0.8-1.0 | 20 | -0.0482 | 0.0487 | 95.0% | -0.0314 | 0.0377 | 75.0% |
| Nikon | 30 | 0-0.3 | 36 | -0.0170 | 0.0463 | 61.1% | +0.0244 | 0.0608 | 11.1% |
| Nikon | 30 | 0.4-0.7 | 36 | -0.0551 | 0.0688 | 80.6% | -0.0242 | 0.0636 | 47.2% |
| Nikon | 30 | 0.8-1.0 | 20 | -0.0722 | 0.0777 | 85.0% | -0.0617 | 0.0753 | 75.0% |
| Sigma | 10 | 0-0.3 | 40 | +0.0011 | 0.0141 | 55.0% | +0.0011 | 0.0141 | 55.0% |
| Sigma | 10 | 0.4-0.7 | 40 | -0.0332 | 0.0371 | 77.5% | -0.0332 | 0.0371 | 77.5% |
| Sigma | 10 | 0.8-1.0 | 24 | -0.0556 | 0.0707 | 70.8% | -0.0556 | 0.0707 | 70.8% |
| Sigma | 30 | 0-0.3 | 40 | +0.0023 | 0.0506 | 55.0% | +0.0023 | 0.0506 | 55.0% |
| Sigma | 30 | 0.4-0.7 | 40 | -0.0793 | 0.0870 | 82.5% | -0.0793 | 0.0870 | 82.5% |
| Sigma | 30 | 0.8-1.0 | 24 | -0.0856 | 0.1009 | 79.2% | -0.0856 | 0.1009 | 79.2% |

## Per Configuration

`Label f/` is the aperture printed on the chart; `Traced f/` is the working f-number of the simulated axial
beam, and `Limited by` the surface that bounds it. Focus shift is the best axial focus plane relative to the
authored image plane, in mm. Each comparison lists mean signed and mean absolute delta.

| Lens | zoomT | Maker | Chart convention | Label f/ | Traced f/ | Limited by | Focus shift | Diffraction: signed | absolute | Convention: signed | absolute |
|---|---:|---|---|---:|---:|---|---:|---:|---:|---:|---:|
| `nikkor-z-14-30f4s` | 0 | Nikon | geometric (inferred) | 4.00 | 4.00 | iris | -0.0494 | -0.0643 | 0.0643 | -0.0248 | 0.0535 |
| `nikkor-z-14-30f4s` | 1 | Nikon | geometric (inferred) | 4.00 | 4.00 | iris | -0.0314 | -0.0602 | 0.0602 | -0.0199 | 0.0290 |
| `nikkor-z-35f18s` | 0 | Nikon | geometric (inferred) | 1.80 | 1.85 | 9 | +0.0147 | +0.0320 | 0.0327 | +0.0480 | 0.0480 |
| `nikkor-z-85f18s` | 0 | Nikon | geometric (inferred) | 1.80 | 1.85 | iris | -0.0800 | -0.1323 | 0.1325 | -0.1282 | 0.1291 |
| `nikkor-z50f12` | 0 | Nikon | geometric (inferred) | 1.20 | 1.23 | iris | -0.0515 | -0.0060 | 0.0201 | -0.0008 | 0.0219 |
| `nikon-z-135f18-plena` | 0 | Nikon | geometric (inferred) | 1.80 | 1.85 | iris | -0.0109 | -0.0085 | 0.0114 | +0.0062 | 0.0153 |
| `nikon-z-24-70f4s` | 0 | Nikon | geometric (inferred) | 4.00 | 4.00 | iris | -0.0734 | -0.0292 | 0.0336 | +0.0066 | 0.0460 |
| `nikon-z-24-70f4s` | 1 | Nikon | geometric (inferred) | 4.00 | 4.00 | iris | +0.0181 | -0.0355 | 0.0355 | -0.0044 | 0.0260 |
| `nikon-z-mc-105f28` | 0 | Nikon | geometric (inferred) | 2.80 | 2.89 | iris | +0.0294 | -0.0229 | 0.0229 | +0.0125 | 0.0178 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | Sigma | diffraction (documented) | 1.40 | 1.46 | iris | -0.0243 | -0.0263 | 0.0263 | -0.0263 | 0.0263 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | Sigma | diffraction (documented) | 2.80 | 2.90 | iris | -0.0215 | -0.0452 | 0.0456 | -0.0452 | 0.0456 |
| `sigma-16mm-f14-dc-dn` | 0 | Sigma | diffraction (documented) | 1.40 | 1.47 | 16 | -0.0052 | -0.0259 | 0.0598 | -0.0259 | 0.0598 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | Sigma | diffraction (documented) | 1.40 | 1.46 | iris | -0.0145 | -0.0342 | 0.0371 | -0.0342 | 0.0371 |
| `sigma-23mm-f14-dc-dn-c` | 0 | Sigma | diffraction (documented) | 1.40 | 1.46 | iris | -0.0307 | -0.2013 | 0.2013 | -0.2013 | 0.2013 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | Sigma | diffraction (documented) | 1.40 | 1.49 | 14 | -0.0256 | -0.0440 | 0.0465 | -0.0440 | 0.0465 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | Sigma | diffraction (documented) | 2.80 | 2.90 | iris | -0.0316 | +0.0258 | 0.0258 | +0.0258 | 0.0258 |
| `sigma-50f14-dg-hsm-a` | 0 | Sigma | diffraction (documented) | 1.40 | 1.46 | iris | -0.0073 | -0.0037 | 0.0357 | -0.0037 | 0.0357 |
| `sigma-85f14-art` | 0 | Sigma | diffraction (documented) | 1.40 | 1.50 | 27A | -0.0225 | +0.0301 | 0.0391 | +0.0301 | 0.0391 |
| `sigma-art-85mm-f14-dgdn` | 0 | Sigma | diffraction (documented) | 1.40 | 1.46 | iris | +0.0010 | -0.0323 | 0.0327 | -0.0323 | 0.0327 |

## Estimator Cross-Check

The diffraction estimate is computed from where the rays land. As a check that shares only the ray trace, the
same bundles are traced with their optical path and the complex pupil is autocorrelated on the launch lattice
(`waveLatticeOtf`). Both are summed over the photopic lines on the best axial focus plane at a
128 pupil grid, and compared at 10 and 30 lp/mm on both cuts. The optical-path route is only
valid where its phase turns by less than 0.25 wave from one lattice cell to the next, so a field enters
only when every wavelength meets that; fast or strongly aberrated beams do not, and are counted as
undersampled. This is a consistency check between two routes in one engine, not a comparison with another tool.

| Lens | zoomT | Fields compared | Undersampled | Largest step (waves) | Values | Max abs | Mean abs | Above 0.004 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `nikkor-z-14-30f4s` | 0 | 10 | 0 | 0.073 | 40 | 0.0006 | 0.0002 | 0 |
| `nikkor-z-14-30f4s` | 1 | 10 | 0 | 0.057 | 40 | 0.0009 | 0.0002 | 0 |
| `nikkor-z-35f18s` | 0 | 9 | 1 | 0.223 | 36 | 0.0016 | 0.0006 | 0 |
| `nikkor-z-85f18s` | 0 | 2 | 9 | 0.245 | 8 | 0.0020 | 0.0011 | 0 |
| `nikkor-z50f12` | 0 | 2 | 8 | 0.224 | 8 | 0.0014 | 0.0009 | 0 |
| `nikon-z-135f18-plena` | 0 | 8 | 2 | 0.191 | 32 | 0.0011 | 0.0004 | 0 |
| `nikon-z-24-70f4s` | 0 | 11 | 0 | 0.098 | 44 | 0.0024 | 0.0003 | 0 |
| `nikon-z-24-70f4s` | 1 | 8 | 2 | 0.241 | 32 | 0.0015 | 0.0004 | 0 |
| `nikon-z-mc-105f28` | 0 | 10 | 0 | 0.125 | 40 | 0.0010 | 0.0002 | 0 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | 4 | 6 | 0.224 | 16 | 0.0018 | 0.0012 | 0 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | 11 | 0 | 0.142 | 44 | 0.0007 | 0.0003 | 0 |
| `sigma-16mm-f14-dc-dn` | 0 | 4 | 7 | 0.195 | 16 | 0.0019 | 0.0006 | 0 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | 1 | 9 | 0.138 | 4 | 0.0008 | 0.0006 | 0 |
| `sigma-23mm-f14-dc-dn-c` | 0 | 0 | 11 | n/a | 0 | n/a | n/a | 0 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | 1 | 9 | 0.221 | 4 | 0.0010 | 0.0009 | 0 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | 10 | 0 | 0.189 | 40 | 0.0025 | 0.0004 | 0 |
| `sigma-50f14-dg-hsm-a` | 0 | 1 | 9 | 0.160 | 4 | 0.0020 | 0.0016 | 0 |
| `sigma-85f14-art` | 0 | 8 | 2 | 0.194 | 32 | 0.0018 | 0.0009 | 0 |
| `sigma-art-85mm-f14-dgdn` | 0 | 4 | 7 | 0.221 | 16 | 0.0024 | 0.0012 | 0 |

Over 114 fields (456 values): max absolute 0.0025, mean absolute 0.0005, 0 above 0.004. 82 fields were undersampled for the optical-path route and are not compared.

## The Audit's Recorded Values

The anchor file keeps the S and T the audit itself computed at every sample. It computed them with
`geometric-dl`, the geometric OTF multiplied by the diffraction limit of the traced pupil, on a pupil grid
forced through 128 and 256. The engine no longer has that method: the product double-counts blur at the pupil
rim and read low, and it was replaced by the diffraction estimate tabulated above. The recorded columns are
therefore a frozen reference and cannot be recomputed.

The last run of this report that still had the product reproduced them over 18 configurations
(744 values) within max absolute 0.0127, mean absolute 0.0047, mean signed
-0.0047: sampling differences only.

Each row below is `diffraction estimate - recorded product` over the S and T of every sample. It measures the
change of method on the same prescription, not agreement with a chart.

| Lens | zoomT | Values | Max abs | Mean abs | Mean signed | Fields converged | Final grids |
|---|---:|---:|---:|---:|---:|---:|---:|
| `nikkor-z-14-30f4s` | 0 | 40 | 0.1138 | 0.0162 | +0.0098 | 10/10 | 32-64 |
| `nikkor-z-14-30f4s` | 1 | 40 | 0.0905 | 0.0128 | +0.0082 | 10/10 | 32-64 |
| `nikkor-z-35f18s` | 0 | 40 | 0.0821 | 0.0104 | +0.0064 | 10/10 | 32-64 |
| `nikkor-z-85f18s` | 0 | 44 | 0.0375 | 0.0113 | +0.0109 | 11/11 | 32-128 |
| `nikkor-z50f12` | 0 | 40 | 0.0451 | 0.0088 | +0.0078 | 10/10 | 32-64 |
| `nikon-z-135f18-plena` | 0 | 40 | 0.0379 | 0.0077 | +0.0038 | 10/10 | 32-64 |
| `nikon-z-24-70f4s` | 0 | 44 | 0.0845 | 0.0147 | +0.0105 | 11/11 | 32-64 |
| `nikon-z-24-70f4s` | 1 | 40 | 0.0624 | 0.0174 | +0.0150 | 10/10 | 32-128 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | 40 | 0.0606 | 0.0205 | +0.0200 | 10/10 | 32-64 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | 44 | 0.0461 | 0.0135 | +0.0084 | 11/11 | 32-64 |
| `sigma-16mm-f14-dc-dn` | 0 | 44 | 0.0306 | 0.0071 | +0.0056 | 11/11 | 32-128 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | 40 | 0.0523 | 0.0139 | +0.0126 | 10/10 | 32-64 |
| `sigma-23mm-f14-dc-dn-c` | 0 | 44 | 0.0655 | 0.0289 | +0.0289 | 11/11 | 32-128 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | 40 | 0.0300 | 0.0088 | +0.0081 | 10/10 | 32-128 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | 40 | 0.1065 | 0.0418 | +0.0411 | 10/10 | 64-128 |
| `sigma-50f14-dg-hsm-a` | 0 | 40 | 0.0656 | 0.0201 | +0.0201 | 10/10 | 32-64 |
| `sigma-85f14-art` | 0 | 40 | 0.0200 | 0.0060 | +0.0019 | 10/10 | 32-64 |
| `sigma-art-85mm-f14-dgdn` | 0 | 44 | 0.0961 | 0.0344 | +0.0335 | 11/11 | 32-64 |

Over these 18 configurations (744 values): max absolute 0.1138, mean absolute
0.0164, mean signed +0.0141.

### Prescription corrected since the audit

Lenses with a `sourceErrata` entry of status `corrected` no longer carry the prescription the audit traced, so
their rows also include the correction and are left out of the aggregate above.

| Lens | zoomT | Values | Max abs | Mean abs | Mean signed | Fields converged | Final grids |
|---|---:|---:|---:|---:|---:|---:|---:|
| `nikon-z-mc-105f28` | 0 | 40 | 0.9002 | 0.2467 | +0.2443 | 10/10 | 32-64 |

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
