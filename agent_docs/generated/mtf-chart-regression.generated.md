# MTF Chart Regression (auto-generated)

Status: current

Simulated MTF of 19 lens configurations against values digitized from the makers' published
MTF charts: 392 samples in `reports/data/mtfChartAnchors.csv`, one per charted field position at
10 and 30 lp/mm.

**Regenerate this file** by running `MTF_CHART_REPORT=1 npm run generate:reports -- mtfChartRegression`.
The provenance stamp records the UTC date, checkout, shared settings, per-configuration settings digests and input hashes.
Without the variable, only the status line is refreshed by comparing input hashes; no lenses are traced.

## Provenance

```text
{
  "version": 2,
  "generatedDateUtc": "2026-11-14",
  "gitCommit": "3ddf316f746089e9931c71a1588ec7899201b47e",
  "uncommittedSrcOrReports": false,
  "settings": {
    "focusT": 0,
    "dynamicEFL": 0,
    "diffraction": {"method":"diffraction","spectrum":"photopic","focus":"best-axial","maxGridSize":256,"frequenciesPerMm":[0,10,20,30,40,50]},
    "makerConvention": "Same as diffraction except method: geometric charts use geometric; all others use diffraction.",
    "crossCheck": {"gridSize":128,"frequenciesPerMm":[10,30,50],"phaseStepWaves":0.25,"focus":"best-axial","spectrum":"same as diffraction","fields":"same as diffraction","apertures":"wide open and f/8 or nearest attainable, each at its own best axial focus"},
    "configurations": [
      {"key":"nikkor-z-14-30f4s","zoomT":0,"fNumber":4,"makerConventionMethod":"geometric","fieldCount":10,"settingsSha256":"93aa817c96b5"},
      {"key":"nikkor-z-14-30f4s","zoomT":1,"fNumber":4,"makerConventionMethod":"geometric","fieldCount":10,"settingsSha256":"b0f3c022a452"},
      {"key":"nikkor-z-35f18s","zoomT":0,"fNumber":1.85,"makerConventionMethod":"geometric","fieldCount":10,"settingsSha256":"fb37392262c2"},
      {"key":"nikkor-z-85f18s","zoomT":0,"fNumber":1.85,"makerConventionMethod":"geometric","fieldCount":11,"settingsSha256":"dab7b07bdbb7"},
      {"key":"nikkor-z50f12","zoomT":0,"fNumber":1.23,"makerConventionMethod":"geometric","fieldCount":10,"settingsSha256":"6fb288aa0880"},
      {"key":"nikon-z-135f18-plena","zoomT":0,"fNumber":1.85,"makerConventionMethod":"geometric","fieldCount":10,"settingsSha256":"c1953a4d3bb9"},
      {"key":"nikon-z-24-70f4s","zoomT":0,"fNumber":4,"makerConventionMethod":"geometric","fieldCount":11,"settingsSha256":"638be4d1df46"},
      {"key":"nikon-z-24-70f4s","zoomT":1,"fNumber":4,"makerConventionMethod":"geometric","fieldCount":10,"settingsSha256":"5f6139b11d92"},
      {"key":"nikon-z-mc-105f28","zoomT":0,"fNumber":2.89,"makerConventionMethod":"geometric","fieldCount":10,"settingsSha256":"7b1f966ea518"},
      {"key":"sigma-105mm-f14-dg-hsm-art","zoomT":0,"fNumber":1.46,"makerConventionMethod":"diffraction","fieldCount":10,"settingsSha256":"a8fef952ae9a"},
      {"key":"sigma-105mm-f28-dg-dn-macro-art","zoomT":0,"fNumber":2.9,"makerConventionMethod":"diffraction","fieldCount":11,"settingsSha256":"aed865c130a5"},
      {"key":"sigma-16mm-f14-dc-dn","zoomT":0,"fNumber":1.46,"makerConventionMethod":"diffraction","fieldCount":11,"settingsSha256":"21a6fc346991"},
      {"key":"sigma-20mm-f14-dg-hsm-art","zoomT":0,"fNumber":1.46,"makerConventionMethod":"diffraction","fieldCount":10,"settingsSha256":"594339f63fea"},
      {"key":"sigma-23mm-f14-dc-dn-c","zoomT":0,"fNumber":1.46,"makerConventionMethod":"diffraction","fieldCount":11,"settingsSha256":"278c556d565b"},
      {"key":"sigma-35mm-f14-dg-hsm-a","zoomT":0,"fNumber":1.45,"makerConventionMethod":"diffraction","fieldCount":10,"settingsSha256":"61b3dea92a8e"},
      {"key":"sigma-45mm-f28-dg-dn-contemporary","zoomT":0,"fNumber":2.9,"makerConventionMethod":"diffraction","fieldCount":10,"settingsSha256":"2001177deff6"},
      {"key":"sigma-50f14-dg-hsm-a","zoomT":0,"fNumber":1.46,"makerConventionMethod":"diffraction","fieldCount":10,"settingsSha256":"2a2083eb6cb3"},
      {"key":"sigma-85f14-art","zoomT":0,"fNumber":1.46,"makerConventionMethod":"diffraction","fieldCount":10,"settingsSha256":"745c2b20dde3"},
      {"key":"sigma-art-85mm-f14-dgdn","zoomT":0,"fNumber":1.46,"makerConventionMethod":"diffraction","fieldCount":11,"settingsSha256":"f4ee2d438e18"}
    ]
  },
  "hashes": {
    "engineSources": "2b88a9bb4cf6ff2679e78b6bb57cad649a04f525cc401ebd0879a2524e55fe1c",
    "reportSources": "f31c182071cda6048dfe2f87ac024d9a8835757d07d6f593d99260bdf5834711",
    "anchors": "c5320ed7acf34280f9d353748044b868ac1653a69dbd5b9044d94ddc1d473ac2",
    "conventions": "87c4d5a210113ff86fe8343b5aec4afa3db9906af41b5d679b7507314a55b815",
    "lensFiles": {
      "src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts": "d8bb9ba1917b0dff58a6ac99a2c3741507991b580c7805df7ffd0d32b4410371",
      "src/lens-data/nikon/NikonNikkorZ2470mmf4S.data.ts": "b91bd00ea6c58167548fc48fe96f668137ed292b016f66aea221f52d39fe12c4",
      "src/lens-data/nikon/NikonNikkorZ50f12.data.ts": "5597998b6a7c428e39c47a48bbed03f9ae9e034cba8b807e77975d87878b3a1e",
      "src/lens-data/nikon/NikonZ105f28.data.ts": "c7399e9c90286fba5315f25493a5d0a0f1d7d2eed1474372188218019b4df6fb",
      "src/lens-data/nikon/NikonZ135f18.data.ts": "6cfb0feef125c787727216fa3007a2a12a115a7a3cf271214d87f82a05a26665",
      "src/lens-data/nikon/NikonZ35f18S.data.ts": "f6012bd5552a0d67589f1b8e333d4136a3f82282f677349231e53fc081736260",
      "src/lens-data/nikon/NikonZ85f18S.data.ts": "63b97ee3dcbe5a579766d189420ddf915196769859f3c516e0d8f925d6f5eb94",
      "src/lens-data/sigma/Sigma105mmf14DGHSMArt.data.ts": "58cbb039c71bec159d8b9dfadec044e1a79b4595e82871b3b03d68d50b4c2dd4",
      "src/lens-data/sigma/Sigma105mmf28DGDNMacroArt.data.ts": "08f09e6a15074f006db18809f82df83082c154a9ce4ef617f59a28c776000edf",
      "src/lens-data/sigma/Sigma16mmf14DCDN.data.ts": "32f1d4313c0c48b15ab880b297b716e0b6616ed5c6140310ddb7ea6d4e514605",
      "src/lens-data/sigma/Sigma20mmf14DGHSMArt.data.ts": "b34ef3827525edbc2c442de7e5730eae431d0dcf1a4782b04c1f1ce553163dff",
      "src/lens-data/sigma/Sigma23mmf14DCDNC.data.ts": "fa55b61c88fba8487ce4fa29fadc1970f79ea8dc3e87c95c675de059a546acc3",
      "src/lens-data/sigma/Sigma35mmf14DGHSMA.data.ts": "41fee4d92ce5aa73e720d49da7aafe9f7a67cac3daa7575a13522bd35dcb78bc",
      "src/lens-data/sigma/Sigma45mmf28DGDN.data.ts": "4d1df4f08d40d2b05fa24b4c92168feb92dd56f7b96bb43bdc5b997db9637883",
      "src/lens-data/sigma/Sigma50mmf14DGHSMA.data.ts": "4f7b131605132e91ab39d884dd58fc7b4a51af4210a22e0390fd35fdeabeebe2",
      "src/lens-data/sigma/Sigma85mmf14Art.data.ts": "b9e270cfc40ebb13e4447b9d33922ac295992bde63664ba991af7c7fdca1f2fd",
      "src/lens-data/sigma/SigmaDGDNA85mmf14.data.ts": "a4c5fdf1b8e75db53ff7c9e2aa19cbd12498b3218b42483213a875af670a6f55"
    }
  }
}
```

## Reading the Numbers

**Midpoint delta** is simulation minus chart, `(S + T) / 2 - (pair_min + pair_max) / 2`, in MTF units;
negative means the simulation reads below the chart. **Separation delta** is `|S - T| - (pair_max - pair_min)`:
positive means more simulated S/T splitting (astigmatism/lateral blur asymmetry), negative less, without
assigning the chart's strokes to sagittal and meridional. Both have mean signed and mean absolute values;
neither is a test threshold, and nothing is fitted to the charts.

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

| Maker | Comparison | Samples | Midpoint: signed | absolute | negative | Separation: signed | absolute |
|---|---|---:|---:|---:|---:|---:|---:|
| All | Diffraction | 392 | -0.0265 | 0.0460 | 67.1% | +0.0001 | 0.0317 |
| All | Maker convention | 392 | -0.0141 | 0.0458 | 49.2% | +0.0024 | 0.0337 |
| All | Recorded by the audit | 392 | -0.0631 | 0.0731 | 80.9% | +0.0071 | 0.0386 |
| Nikon | Diffraction | 184 | -0.0344 | 0.0471 | 77.2% | -0.0027 | 0.0280 |
| Nikon | Maker convention | 184 | -0.0080 | 0.0465 | 39.1% | +0.0021 | 0.0322 |
| Nikon | Recorded by the audit | 184 | -0.0719 | 0.0796 | 83.2% | +0.0118 | 0.0412 |
| Sigma | Diffraction | 208 | -0.0195 | 0.0451 | 58.2% | +0.0026 | 0.0350 |
| Sigma | Maker convention | 208 | -0.0195 | 0.0451 | 58.2% | +0.0026 | 0.0350 |
| Sigma | Recorded by the audit | 208 | -0.0553 | 0.0674 | 78.8% | +0.0030 | 0.0364 |

## By Frequency and Field Band

Field is the fraction of the reference image height. Each comparison lists mean signed and mean absolute
midpoint and separation deltas, with the share of negative midpoint samples.

| Maker | lp/mm | Field | Samples | Diffraction midpoint: signed | absolute | negative | separation: signed | absolute | Convention midpoint: signed | absolute | negative | separation: signed | absolute |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| All | 10 | 0-0.3 | 76 | -0.0038 | 0.0161 | 53.9% | -0.0058 | 0.0103 | +0.0058 | 0.0138 | 21.1% | -0.0056 | 0.0104 |
| All | 10 | 0.4-0.7 | 76 | -0.0263 | 0.0294 | 82.9% | -0.0023 | 0.0233 | -0.0171 | 0.0251 | 61.8% | -0.0022 | 0.0234 |
| All | 10 | 0.8-1.0 | 44 | -0.0384 | 0.0443 | 79.5% | +0.0081 | 0.0397 | -0.0306 | 0.0394 | 72.7% | +0.0092 | 0.0412 |
| All | 30 | 0-0.3 | 76 | +0.0126 | 0.0497 | 42.1% | -0.0134 | 0.0197 | +0.0347 | 0.0596 | 21.1% | -0.0127 | 0.0196 |
| All | 30 | 0.4-0.7 | 76 | -0.0559 | 0.0717 | 76.3% | +0.0184 | 0.0490 | -0.0402 | 0.0701 | 64.5% | +0.0235 | 0.0540 |
| All | 30 | 0.8-1.0 | 44 | -0.0711 | 0.0778 | 77.3% | -0.0022 | 0.0661 | -0.0659 | 0.0772 | 75.0% | +0.0067 | 0.0733 |
| Nikon | 10 | 0-0.3 | 36 | -0.0163 | 0.0191 | 80.6% | -0.0089 | 0.0138 | +0.0039 | 0.0141 | 11.1% | -0.0085 | 0.0140 |
| Nikon | 10 | 0.4-0.7 | 36 | -0.0344 | 0.0347 | 94.4% | 0.0000 | 0.0220 | -0.0150 | 0.0257 | 50.0% | +0.0001 | 0.0222 |
| Nikon | 10 | 0.8-1.0 | 20 | -0.0483 | 0.0491 | 90.0% | +0.0076 | 0.0348 | -0.0312 | 0.0383 | 75.0% | +0.0101 | 0.0381 |
| Nikon | 30 | 0-0.3 | 36 | -0.0090 | 0.0494 | 55.6% | -0.0221 | 0.0224 | +0.0375 | 0.0703 | 11.1% | -0.0208 | 0.0223 |
| Nikon | 30 | 0.4-0.7 | 36 | -0.0511 | 0.0691 | 72.2% | +0.0165 | 0.0327 | -0.0179 | 0.0658 | 47.2% | +0.0273 | 0.0434 |
| Nikon | 30 | 0.8-1.0 | 20 | -0.0690 | 0.0744 | 75.0% | -0.0063 | 0.0590 | -0.0576 | 0.0733 | 70.0% | +0.0131 | 0.0749 |
| Sigma | 10 | 0-0.3 | 40 | +0.0075 | 0.0135 | 30.0% | -0.0029 | 0.0072 | +0.0075 | 0.0135 | 30.0% | -0.0029 | 0.0072 |
| Sigma | 10 | 0.4-0.7 | 40 | -0.0190 | 0.0246 | 72.5% | -0.0043 | 0.0244 | -0.0190 | 0.0246 | 72.5% | -0.0043 | 0.0244 |
| Sigma | 10 | 0.8-1.0 | 24 | -0.0301 | 0.0402 | 70.8% | +0.0085 | 0.0438 | -0.0301 | 0.0402 | 70.8% | +0.0085 | 0.0438 |
| Sigma | 30 | 0-0.3 | 40 | +0.0322 | 0.0499 | 30.0% | -0.0055 | 0.0172 | +0.0322 | 0.0499 | 30.0% | -0.0055 | 0.0172 |
| Sigma | 30 | 0.4-0.7 | 40 | -0.0603 | 0.0741 | 80.0% | +0.0202 | 0.0636 | -0.0603 | 0.0741 | 80.0% | +0.0202 | 0.0636 |
| Sigma | 30 | 0.8-1.0 | 24 | -0.0728 | 0.0805 | 79.2% | +0.0013 | 0.0721 | -0.0728 | 0.0805 | 79.2% | +0.0013 | 0.0721 |

## Per Configuration

`Label f/` is the aperture printed on the chart, which the stop rule sizes the iris for; `Vignetted by` names the
surface that clips the axial marginal ray, as the Summary's working f-number reports it. Focus shift is the best
axial focus plane relative to the authored image plane, in mm. Each comparison lists mean signed and mean
absolute midpoint and separation deltas.

| Lens | zoomT | Maker | Chart convention | Label f/ | Vignetted by | Focus shift | Diffraction midpoint: signed | absolute | separation: signed | absolute | Convention midpoint: signed | absolute | separation: signed | absolute |
|---|---:|---|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `nikkor-z-14-30f4s` | 0 | Nikon | geometric (inferred) | 4.00 | — | -0.0505 | -0.0614 | 0.0614 | -0.0150 | 0.0408 | -0.0205 | 0.0510 | -0.0019 | 0.0475 |
| `nikkor-z-14-30f4s` | 1 | Nikon | geometric (inferred) | 4.00 | — | -0.0356 | -0.0570 | 0.0570 | +0.0043 | 0.0196 | -0.0118 | 0.0295 | +0.0122 | 0.0283 |
| `nikkor-z-35f18s` | 0 | Nikon | geometric (inferred) | 1.80 | — | +0.0148 | +0.0377 | 0.0382 | -0.0085 | 0.0200 | +0.0555 | 0.0555 | -0.0106 | 0.0233 |
| `nikkor-z-85f18s` | 0 | Nikon | geometric (inferred) | 1.80 | — | -0.0804 | -0.1329 | 0.1331 | +0.0362 | 0.0483 | -0.1281 | 0.1289 | +0.0381 | 0.0541 |
| `nikkor-z50f12` | 0 | Nikon | geometric (inferred) | 1.20 | — | -0.0511 | +0.0010 | 0.0226 | -0.0023 | 0.0190 | +0.0068 | 0.0267 | -0.0037 | 0.0187 |
| `nikon-z-135f18-plena` | 0 | Nikon | geometric (inferred) | 1.80 | — | -0.0097 | -0.0082 | 0.0159 | -0.0107 | 0.0143 | +0.0086 | 0.0213 | -0.0103 | 0.0148 |
| `nikon-z-24-70f4s` | 0 | Nikon | geometric (inferred) | 4.00 | — | -0.0743 | -0.0234 | 0.0311 | -0.0051 | 0.0265 | +0.0137 | 0.0496 | +0.0093 | 0.0381 |
| `nikon-z-24-70f4s` | 1 | Nikon | geometric (inferred) | 4.00 | — | +0.0152 | -0.0363 | 0.0363 | -0.0366 | 0.0366 | -0.0023 | 0.0278 | -0.0267 | 0.0330 |
| `nikon-z-mc-105f28` | 0 | Nikon | geometric (inferred) | 2.80 | — | +0.0308 | -0.0206 | 0.0215 | +0.0097 | 0.0249 | +0.0159 | 0.0200 | +0.0085 | 0.0293 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | Sigma | diffraction (documented) | 1.40 | — | -0.0235 | -0.0194 | 0.0250 | -0.0221 | 0.0271 | -0.0194 | 0.0250 | -0.0221 | 0.0271 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | Sigma | diffraction (documented) | 2.80 | — | -0.0192 | -0.0485 | 0.0511 | +0.0478 | 0.0492 | -0.0485 | 0.0511 | +0.0478 | 0.0492 |
| `sigma-16mm-f14-dc-dn` | 0 | Sigma | diffraction (documented) | 1.40 | — | -0.0041 | -0.0105 | 0.0585 | +0.0034 | 0.0241 | -0.0105 | 0.0585 | +0.0034 | 0.0241 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | Sigma | diffraction (documented) | 1.40 | — | -0.0125 | -0.0251 | 0.0297 | -0.0276 | 0.0296 | -0.0251 | 0.0297 | -0.0276 | 0.0296 |
| `sigma-23mm-f14-dc-dn-c` | 0 | Sigma | diffraction (documented) | 1.40 | — | -0.0292 | -0.0943 | 0.0944 | +0.0763 | 0.0769 | -0.0943 | 0.0944 | +0.0763 | 0.0769 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | Sigma | diffraction (documented) | 1.40 | — | -0.0228 | -0.0440 | 0.0530 | -0.0289 | 0.0344 | -0.0440 | 0.0530 | -0.0289 | 0.0344 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | Sigma | diffraction (documented) | 2.80 | — | -0.0327 | +0.0300 | 0.0300 | -0.0001 | 0.0224 | +0.0300 | 0.0300 | -0.0001 | 0.0224 |
| `sigma-50f14-dg-hsm-a` | 0 | Sigma | diffraction (documented) | 1.40 | — | -0.0064 | +0.0059 | 0.0455 | -0.0306 | 0.0377 | +0.0059 | 0.0455 | -0.0306 | 0.0377 |
| `sigma-85f14-art` | 0 | Sigma | diffraction (documented) | 1.40 | — | -0.0229 | +0.0260 | 0.0355 | +0.0065 | 0.0274 | +0.0260 | 0.0355 | +0.0065 | 0.0274 |
| `sigma-art-85mm-f14-dgdn` | 0 | Sigma | diffraction (documented) | 1.40 | — | +0.0020 | -0.0069 | 0.0238 | -0.0099 | 0.0182 | -0.0069 | 0.0238 | -0.0099 | 0.0182 |

## Estimator Cross-Check

The diffraction estimate reads ray landings; the optical-path route (`waveLatticeOtf`) autocorrelates the
complex pupil in direction space. The routes share the ray trace, so agreement is not proof against an outside
reference. Both are summed over the photopic lines on each aperture's own best axial focus plane, at a
128-cell pupil grid and 10, 30, 50 lp/mm on both cuts. The two passes use the same chart field fractions.
The stopped-down pass uses f/8, capped at the lens's maximum marked f-number (minimum aperture), and never opens
past wide open. The actual marked f-number and focus shift from the authored image plane (mm) appear below.

A field is compared only when every wavelength has an invertible direction map and a phase step strictly below
0.25 wave per cell, and the spectrally weighted unresolved flux stays within the product's cap.
Excluded fields are **not checked**: phase-step exclusions, non-invertible maps (whose gate returns infinity),
unresolved flux over the cap, and unavailable fields or bundles are counted separately. Each field has one
exclusion reason; an incomplete spectral bundle is unavailable. Largest excluded step covers phase and map
exclusions: n/a when neither occurs, and infinity for a non-invertible map. Magnitude gaps are |abs(estimate) - abs(reference)|; complex
gaps are abs(estimate - reference), after spectral combination. All gaps describe only compared fields.
These are report diagnostics, never test thresholds.

### Wide open

| Lens | zoomT | Marked f/ | Focus shift (mm) | Fields compared | Fields excluded (not checked) | Phase step ≥ gate | Largest phase exclusion (waves/cell) | Non-invertible map | Unresolved flux over the cap | Unavailable field/bundle | Largest excluded step (waves/cell) | Largest compared step (waves/cell) | Values | Max magnitude gap | Mean magnitude gap | Max complex gap | Magnitude gaps above 0.004 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `nikkor-z-14-30f4s` | 0 | 4.00 | -0.0505 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.077 | 60 | 0.0008 | 0.0003 | 0.0021 | 0 |
| `nikkor-z-14-30f4s` | 1 | 4.00 | -0.0356 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.060 | 60 | 0.0029 | 0.0014 | 0.0029 | 0 |
| `nikkor-z-35f18s` | 0 | 1.85 | 0.0148 | 8 | 2 | 2 | 0.267 | 0 | 0 | 0 | 0.267 | 0.218 | 48 | 0.0017 | 0.0004 | 0.0018 | 0 |
| `nikkor-z-85f18s` | 0 | 1.85 | -0.0804 | 2 | 9 | 9 | 0.667 | 0 | 0 | 0 | 0.667 | 0.196 | 12 | 0.0010 | 0.0006 | 0.0010 | 0 |
| `nikkor-z50f12` | 0 | 1.23 | -0.0511 | 3 | 7 | 7 | 0.789 | 0 | 0 | 0 | 0.789 | 0.239 | 18 | 0.0006 | 0.0002 | 0.0008 | 0 |
| `nikon-z-135f18-plena` | 0 | 1.85 | -0.0097 | 9 | 1 | 1 | 0.308 | 0 | 0 | 0 | 0.308 | 0.222 | 54 | 0.0012 | 0.0005 | 0.0013 | 0 |
| `nikon-z-24-70f4s` | 0 | 4.00 | -0.0743 | 11 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.123 | 66 | 0.0020 | 0.0002 | 0.0021 | 0 |
| `nikon-z-24-70f4s` | 1 | 4.00 | 0.0152 | 9 | 1 | 1 | 0.275 | 0 | 0 | 0 | 0.275 | 0.243 | 54 | 0.0024 | 0.0008 | 0.0024 | 0 |
| `nikon-z-mc-105f28` | 0 | 2.89 | 0.0308 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.125 | 60 | 0.0005 | 0.0002 | 0.0007 | 0 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | 1.46 | -0.0235 | 4 | 6 | 6 | 0.486 | 0 | 0 | 0 | 0.486 | 0.189 | 24 | 0.0007 | 0.0003 | 0.0007 | 0 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | 2.90 | -0.0192 | 11 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.123 | 66 | 0.0015 | 0.0004 | 0.0016 | 0 |
| `sigma-16mm-f14-dc-dn` | 0 | 1.46 | -0.0041 | 5 | 6 | 6 | 2.595 | 0 | 0 | 0 | 2.595 | 0.246 | 30 | 0.0023 | 0.0013 | 0.0023 | 0 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | 1.46 | -0.0125 | 3 | 7 | 7 | 0.926 | 0 | 0 | 0 | 0.926 | 0.249 | 18 | 0.0011 | 0.0004 | 0.0012 | 0 |
| `sigma-23mm-f14-dc-dn-c` | 0 | 1.46 | -0.0292 | 4 | 7 | 7 | 0.502 | 0 | 0 | 0 | 0.502 | 0.203 | 24 | 0.0007 | 0.0002 | 0.0008 | 0 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | 1.45 | -0.0228 | 1 | 9 | 9 | 1.424 | 0 | 0 | 0 | 1.424 | 0.182 | 6 | 0.0001 | 0.0000 | 0.0001 | 0 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | 2.90 | -0.0327 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.195 | 60 | 0.0013 | 0.0005 | 0.0013 | 0 |
| `sigma-50f14-dg-hsm-a` | 0 | 1.46 | -0.0064 | 1 | 9 | 9 | 1.519 | 0 | 0 | 0 | 1.519 | 0.119 | 6 | 0.0005 | 0.0003 | 0.0005 | 0 |
| `sigma-85f14-art` | 0 | 1.46 | -0.0229 | 8 | 2 | 2 | 0.551 | 0 | 0 | 0 | 0.551 | 0.203 | 48 | 0.0008 | 0.0003 | 0.0009 | 0 |
| `sigma-art-85mm-f14-dgdn` | 0 | 1.46 | 0.0020 | 10 | 1 | 1 | 0.341 | 0 | 0 | 0 | 0.341 | 0.202 | 60 | 0.0012 | 0.0005 | 0.0013 | 0 |
| **Total** | — | — | — | 129 | 67 | 67 | 2.595 | 0 | 0 | 0 | 2.595 | 0.249 | 774 | 0.0029 | 0.0005 | 0.0029 | 0 |

### Stopped down

| Lens | zoomT | Marked f/ | Focus shift (mm) | Fields compared | Fields excluded (not checked) | Phase step ≥ gate | Largest phase exclusion (waves/cell) | Non-invertible map | Unresolved flux over the cap | Unavailable field/bundle | Largest excluded step (waves/cell) | Largest compared step (waves/cell) | Values | Max magnitude gap | Mean magnitude gap | Max complex gap | Magnitude gaps above 0.004 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `nikkor-z-14-30f4s` | 0 | 8.00 | -0.0194 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.016 | 60 | 0.0003 | 0.0002 | 0.0017 | 0 |
| `nikkor-z-14-30f4s` | 1 | 8.00 | 0.0015 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.017 | 60 | 0.0012 | 0.0007 | 0.0036 | 0 |
| `nikkor-z-35f18s` | 0 | 8.00 | 0.0236 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.011 | 60 | 0.0003 | 0.0002 | 0.0003 | 0 |
| `nikkor-z-85f18s` | 0 | 8.00 | -0.0112 | 11 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.016 | 66 | 0.0001 | 0.0001 | 0.0006 | 0 |
| `nikkor-z50f12` | 0 | 8.00 | -0.0147 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.013 | 60 | 0.0001 | 0.0000 | 0.0003 | 0 |
| `nikon-z-135f18-plena` | 0 | 8.00 | 0.0010 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.006 | 60 | 0.0003 | 0.0002 | 0.0004 | 0 |
| `nikon-z-24-70f4s` | 0 | 8.00 | -0.0186 | 11 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.038 | 66 | 0.0008 | 0.0001 | 0.0009 | 0 |
| `nikon-z-24-70f4s` | 1 | 8.00 | 0.0258 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.053 | 60 | 0.0006 | 0.0004 | 0.0013 | 0 |
| `nikon-z-mc-105f28` | 0 | 8.00 | 0.0239 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.023 | 60 | 0.0002 | 0.0001 | 0.0002 | 0 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | 8.00 | -0.0079 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.011 | 60 | 0.0001 | 0.0000 | 0.0012 | 0 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | 8.00 | -0.0043 | 11 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.013 | 66 | 0.0006 | 0.0002 | 0.0019 | 0 |
| `sigma-16mm-f14-dc-dn` | 0 | 8.00 | -0.0024 | 11 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.015 | 66 | 0.0009 | 0.0002 | 0.0009 | 0 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | 8.00 | -0.0101 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.019 | 60 | 0.0002 | 0.0000 | 0.0004 | 0 |
| `sigma-23mm-f14-dc-dn-c` | 0 | 8.00 | -0.0129 | 11 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.017 | 66 | 0.0002 | 0.0001 | 0.0002 | 0 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | 8.00 | -0.0122 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.013 | 60 | 0.0001 | 0.0001 | 0.0001 | 0 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | 8.00 | -0.0357 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.016 | 60 | 0.0001 | 0.0000 | 0.0003 | 0 |
| `sigma-50f14-dg-hsm-a` | 0 | 8.00 | -0.0105 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.010 | 60 | 0.0001 | 0.0001 | 0.0003 | 0 |
| `sigma-85f14-art` | 0 | 8.00 | -0.0134 | 10 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.009 | 60 | 0.0002 | 0.0001 | 0.0006 | 0 |
| `sigma-art-85mm-f14-dgdn` | 0 | 8.00 | -0.0092 | 11 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.010 | 66 | 0.0003 | 0.0001 | 0.0009 | 0 |
| **Total** | — | — | — | 196 | 0 | 0 | n/a | 0 | 0 | 0 | n/a | 0.053 | 1176 | 0.0012 | 0.0002 | 0.0036 | 0 |

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
| `nikkor-z-14-30f4s` | 0 | 40 | 0.1479 | 0.0189 | +0.0127 | 10/10 | 32-64 |
| `nikkor-z-14-30f4s` | 1 | 40 | 0.1041 | 0.0162 | +0.0114 | 10/10 | 32-64 |
| `nikkor-z-35f18s` | 0 | 40 | 0.0854 | 0.0148 | +0.0122 | 10/10 | 32-128 |
| `nikkor-z-85f18s` | 0 | 44 | 0.0633 | 0.0151 | +0.0102 | 11/11 | 64 |
| `nikkor-z50f12` | 0 | 40 | 0.0604 | 0.0149 | +0.0147 | 10/10 | 32-128 |
| `nikon-z-135f18-plena` | 0 | 40 | 0.0250 | 0.0087 | +0.0040 | 10/10 | 32-64 |
| `nikon-z-24-70f4s` | 0 | 44 | 0.1230 | 0.0196 | +0.0163 | 11/11 | 32-128 |
| `nikon-z-24-70f4s` | 1 | 40 | 0.0688 | 0.0167 | +0.0142 | 10/10 | 32-64 |
| `sigma-105mm-f14-dg-hsm-art` | 0 | 40 | 0.0769 | 0.0272 | +0.0269 | 10/10 | 64 |
| `sigma-105mm-f28-dg-dn-macro-art` | 0 | 44 | 0.0739 | 0.0142 | +0.0051 | 11/11 | 32-64 |
| `sigma-16mm-f14-dc-dn` | 0 | 44 | 0.0683 | 0.0226 | +0.0209 | 11/11 | 32-128 |
| `sigma-20mm-f14-dg-hsm-art` | 0 | 40 | 0.0827 | 0.0240 | +0.0216 | 10/10 | 32-128 |
| `sigma-23mm-f14-dc-dn-c` | 0 | 44 | 0.2697 | 0.1359 | +0.1359 | 11/11 | 32-128 |
| `sigma-35mm-f14-dg-hsm-a` | 0 | 40 | 0.0607 | 0.0200 | +0.0081 | 10/10 | 32-128 |
| `sigma-45mm-f28-dg-dn-contemporary` | 0 | 40 | 0.1142 | 0.0458 | +0.0454 | 10/10 | 64-128 |
| `sigma-50f14-dg-hsm-a` | 0 | 40 | 0.1073 | 0.0338 | +0.0297 | 10/10 | 32-64 |
| `sigma-85f14-art` | 0 | 40 | 0.0988 | 0.0187 | -0.0022 | 10/10 | 32-64 |
| `sigma-art-85mm-f14-dgdn` | 0 | 44 | 0.1687 | 0.0597 | +0.0589 | 11/11 | 64-128 |

Over these 18 configurations (744 values): max absolute 0.2697, mean absolute
0.0298, mean signed +0.0253.

### Prescription corrected since the audit

Lenses with a `sourceErrata` entry of status `corrected` no longer carry the prescription the audit traced, so
their rows also include the correction and are left out of the aggregate above.

| Lens | zoomT | Values | Max abs | Mean abs | Mean signed | Fields converged | Final grids |
|---|---:|---:|---:|---:|---:|---:|---:|
| `nikon-z-mc-105f28` | 0 | 40 | 0.9006 | 0.2486 | +0.2466 | 10/10 | 32-64 |

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
