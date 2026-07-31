# Voigtländer Color-Skopar 35mm f/3.5 Aspherical — Independent Stage 4 Audit

## Job card

- **Patent:** JP 2026-121744 A
- **Lens:** Voigtländer Color-Skopar 35mm f/3.5 Aspherical
- **Embodiment:** Example 1 / first embodiment
- **Output stem:** `VoigtlanderColorSkopar35mmf35Aspherical`
- **Audit stage:** 4 — independent audit and clean delivery

The selected patent and embodiment were held fixed. The original patent and job card were not modified.

## Independence procedure

The first pass was performed from the rendered patent before the earlier audit conclusions were reviewed. Critical values
were re-entered from the following locations:

- page 6, Table 1: design focal length, f-number, half field, TL, TLo, BF, subgroup focal lengths, `Sag2b`, and conditions;
- page 7, Table 2: all radii, axial distances, `nd`, `νd`, and `ΔPgF` values for Example 1;
- page 8, Table 3: infinity and 450 mm focus rows;
- page 8, Table 4: both asphere radii, conic constants, and A4-A12 coefficients;
- page 9, Equation 1: the conic-polynomial convention.

The patent uses object-to-image sequential order, positive radius when the surface is convex toward the object, d-line
indices at 587.56 nm, and the standard conic denominator containing `1 - (1 + K)c²h²`. Thus `K = 0` is a spherical base.
The printed D3 and STO distances were retained as consecutive spacings because that interpretation reproduces the
published 40.03 mm infinity total. No scaling, dummy plane, filter, sensor cover, or synthetic cement layer was introduced.

A fresh reduced-angle height/ν trace and an independent ABCD multiplication were run from the re-entered arrays. Their
complete system matrices agree exactly at the stored precision. Glass matching was repeated from the numerical `nd`/`νd`
pairs rather than from the existing labels.

## Corrections

### 1. Surface 10A A12 sign

- **Old value:** `A12: +1.8531e-12` in the current data file and analysis table.
- **Corrected value:** `A12: -1.8531e-12`.
- **Source location:** patent page 8, Table 4, S10 column, A12 row.
- **Independent evidence:** direct inspection of the rendered table and fresh re-entry of the complete S10 polynomial.
- **Downstream consequences:** the 10A sag profile, slope reversal, source-sag roots, modeled semi-diameter, asphere
  departure, rim angle, L4 edge thickness, ray containment, condition (5), and all dependent prose were recomputed.

### 2. Patent `Sag2b`

- **Old value or wording:** the analysis and prior audit read `Sag2b = 3.09 mm`.
- **Corrected value or wording:** `Sag2b = 3.29 mm`.
- **Source location:** patent page 6, Table 1, `Sag2b` row.
- **Independent evidence:** direct inspection of the rendered table; the printed value is unambiguously 3.29.
- **Downstream consequences:** condition (5) changes from the erroneous `3.09/40.03 = 0.077192106` failure to
  `3.29/40.03 = 0.082188359`, which passes. The assertion that condition (5) was a source contradiction was removed.

### 3. Surface 10A semi-diameter

- **Old value:** `sd = 9.50 mm` on 10A, shared with 11A.
- **Corrected value:** `sd = 8.30 mm` on 10A; 11A remains at the independently inferred 9.50 mm.
- **Source location:** patent page 6, Table 1 defines `Sag2b = 3.29 mm` for the object-side concave asphere; page 8,
  Table 4 supplies the corrected polynomial.
- **Independent evidence:** solving `|z10A(h)| = 3.29 mm` on the physical pre-reversal branch gives
  `h = 8.296654461 mm`, stored as 8.30 mm. The second root is at 11.317748444 mm after the profile reversal and has a
  72.487370° rim angle, exceeding the 64.2° validator limit. At 8.30 mm, the actual rim angle is 48.253027°.
- **Downstream consequences:** the 10A departure becomes -2.241049386 mm, the L4 shared-band edge thickness becomes
  3.847302819 mm, and all geometry and exact-ray checks were rerun. Full-field chief-ray clearance remains positive:
  0.715652891 mm at 10A and 0.214532677 mm at 11A.

### 4. Asphere and condition prose

- **Old wording:** both aspheres used 9.50 mm; the 3.09 mm sag root was reported at 10.630674774 mm with an 84.077940°
  rim angle; conditions (1) and (5) were both described as contradictory.
- **Corrected wording:** 10A uses 8.30 mm and 11A uses 9.50 mm; the physical 3.29 mm root is 8.296654461 mm, while the
  rejected post-reversal root is 11.317748444 mm at 72.487370°; only condition (1) remains contradictory.
- **Source location:** patent pages 6 and 8, Tables 1 and 4.
- **Independent evidence:** the corrected polynomial and source value were solved numerically and checked against the
  slope, edge-thickness, cross-gap, and exact-ray policies.
- **Downstream consequences:** the clean analysis, verification summary, conditional-expression table, and audit record
  now agree with the corrected data file.

No radii, axial spacings, refractive indices, Abbe numbers, partial-dispersion values, focus rows, element identities, or
glass class labels required correction. The focal, power, pupil, Petzval, focus, and classification results therefore
remain numerically unchanged except for the asphere-dependent geometry described above.

## Recomputed prescription results

| Quantity | Independent result |
|---|---:|
| Gaussian EFL | 35.663874742 mm |
| BFL from 11A | 15.121084285 mm |
| Front principal plane from S1 | -1.758814723 mm |
| Rear principal plane from S11 | -20.542790457 mm |
| Physical stop semi-diameter | 3.858166062 mm |
| Entrance-pupil semi-diameter | 4.939594840 mm |
| Modeled f-number | 3.610000000 |
| S1-to-S11 vertex track | 24.920000000 mm |
| Infinity total length | 40.030000000 mm |
| TL/EFL | 1.122424310 |
| BFD/EFL | 0.423678025 |
| Surface-by-surface Petzval sum | +0.005270846491 mm^-1 |
| Published focus travel | 3.080000000 mm |
| Close-state reduced-angle B residual | 0.161142604 mm |

The design is not telephoto because `TL/EFL > 1`, and it is not retrofocus because `BFD/EFL < 1`.

## Power audit

| Optical unit | Focal length |
|---|---:|
| L1f standalone | +14.482304821 mm |
| L1r standalone | -19.949512755 mm |
| L2f standalone | -26.611184710 mm |
| L2r standalone | +42.875834998 mm |
| L3 standalone | +29.059720752 mm |
| L4 standalone | -65.995539517 mm |
| Cemented G1 | +40.472275965 mm |
| Cemented G2a | -54.992797118 mm |
| G2b in situ | +43.777889632 mm |
| Complete system | +35.663874742 mm |

Standalone element powers, cemented powers, and in-situ subgroup power were kept distinct. Petzval was recomputed
surface by surface as `φ/(n n')`, not from element-level approximations.

## Focus and source-condition audit

The patent publishes whole-lens unit focus: D11 changes from 15.11 mm at infinity to 18.19 mm at a 450 mm object
distance. The model therefore varies only 11A and retains `PUBLISHED` status. The rounded close row is not exactly
conjugate in first order; its 0.161142604 mm matrix residual is disclosed rather than repaired.

Conditions (2)-(9) pass from the printed values or final arrays. Condition (1) remains a source reference-state conflict:
Table 1 reports `18.19/21.84 = 0.832875458`, while the sequential close ratio is `18.19/24.92 = 0.729935795`. The table's
21.84 mm value equals 40.03 - 18.19 and therefore combines the infinity total with the close-state BF. The prescription
was not altered to force agreement.

## Geometry and exact-ray gate

- Maximum actual rim angle: 48.253027° at 10A.
- Minimum element edge thickness: 1.398579426 mm at L1f.
- Minimum cross-gap policy margin: 0.887778611 mm at 7 to 8.
- 10A source-sag root: 8.296654461 mm before reversal.
- Rejected 10A post-reversal root: 11.317748444 mm at 72.487370°.
- Asphere departure at stored SD: -2.241049386 mm on 10A; -2.125295350 mm on 11A.
- Exact ray cases: 28, covering infinity on axis, infinity at ±18.516°, the 0.45 m on-axis state, and chief rays at the
  full published ±30.86° half field.
- All tested ray heights remain within the authored semi-diameters.

These checks establish model containment and geometry validity for the tested bundles. They do not claim a complete
higher-order aberration analysis over every field and pupil coordinate.

## Glass audit

The patent does not name vendors, so the clean data retains class/equivalent wording. The fresh numerical audit supports:

| Element | Class/equivalent | Patent `nd` / `νd` | Catalog residual |
|---|---|---:|---:|
| L1f | TAFD37A-class | 1.90043 / 37.37 | exact pair |
| L1r | S-TIH6-class | 1.80518 / 25.45 | Δnd = 0; catalog Δνd = +0.03 |
| L2f | S-NBM51-class | 1.61340 / 44.27 | exact pair |
| L2r | TAFD32-class | 1.87070 / 40.73 | exact pair |
| L3 | FCD705-class | 1.55032 / 75.50 | exact pair |
| L4 | M-BACD12-class | 1.58313 / 59.46 | exact pair |

All six patent `dPgF` values remain stored directly. No unpublished line indices were added, no vendor identity was
asserted as a patent fact, and no APO claim was made.

## Data-analysis consistency

The companion analysis was checked against the corrected TypeScript object for structured patent metadata, product name,
embodiment, element/group count, element shapes, all `nd`/`νd`/glass/`dPgF` fields, standalone focal lengths, asphere
coefficients, focus data, conditional expressions, corrected semi-diameters, computed first-order values, Petzval,
geometry, and classification. Required section order is present. Stale 3.09 mm, positive S10 A12, 9.50 mm S10,
60.227003°, 10.630674774 mm, and 84.077940° claims are absent.

## Targeted final gate

| Gate | Result |
|---|---|
| Fresh source transcription check | PASS |
| Reduced-angle y-ν trace | PASS |
| Independent ABCD cross-check | PASS; maximum matrix delta 0 |
| Schema and array consistency checks | PASS |
| All published focus states | PASS |
| Pupil and exact f-number checks | PASS |
| Standalone, cemented, subgroup, and complete powers | PASS |
| Surface-by-surface Petzval | PASS |
| Asphere convention, coefficients, departures, and roots | PASS |
| Edge thickness, rim slope, conic, and cross-gap checks | PASS |
| Exact ray containment, including full-field chief rays | PASS |
| Glass residual audit | PASS |
| Data-analysis metadata and quantitative consistency | PASS |
| Consolidated verification script | PASS — 242/242 checks |
| Local TypeScript 5.8.3 structural check against specification-derived stub | PASS |
| Static `.prettierrc` style checks | PASS; no tabs, 2-space indentation, max data line 114 |
| Repository-locked Prettier | NOT RUN — formatter/package unavailable |
| Actual repository `LensDataInput` typecheck | NOT RUN — repository unavailable |
| Repository `buildLens()` / `validateLensData()` | NOT RUN — repository unavailable |
| Production render diagnostics and trim threshold | NOT RUN — repository unavailable |
| Repository glass reports and directly relevant tests | NOT RUN — repository unavailable |

`generate:metadata`, full corpus tests, full build, Git operations, and publication work were not run by instruction.

## Handoff package

The Stage 4 ZIP contains nine files: the original patent, the original job card, the corrected data/analysis pair, this
consolidated audit, one complete verification script, one calculation-results file, one validation manifest, and one
checksum manifest. Duplicate drafts, prior audits, rasterized pages, caches, and repetitive logs are excluded.

`READY_FOR_BATCH`

## 2026-07-31 — Patent-figure and naming follow-up

Figure 1 on patent page 17 was rendered at high resolution and measured against the prescription's axial scale. The
first three group envelopes were tightened to follow the published section more closely:

| Surfaces | Previous `sd` | Revised `sd` |
|---|---:|---:|
| 1–3 | 5.85 mm | 5.6 mm |
| 5–7 | 4.65 mm | 4.3 mm |
| 8–9 | 6.8 mm | 6.5 mm |

Aspheric surfaces 10A and 11A remain at 8.3 mm and 9.5 mm respectively: 10A stays inside the patent asphere's first
sag-domain turnover, while 11A preserves full-field chief-ray containment. The stop remains at its calculated f/3.5
semi-diameter. Trial surface-domain validation and the image-circle audit both pass with zero undersized surfaces.

The display name was reordered and recased from `VOIGTLÄNDER COLOR-SKOPAR VM 35mm f/3.5 ASPHERICAL` to the official
product form, `VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical VM`.

Final repository verification for this follow-up passed `audit:surface`, `audit:image-circle`,
`generate:glass-reports`, `format:check`, `typecheck`, lint with zero errors and three pre-existing warnings, all 213 test
files / 2,527 tests, and the 984-route production build. The in-app browser exposed no runnable browser session, so the
final application-page visual check could not be repeated; the high-resolution patent measurement, geometry validator,
and built SVG data are the recorded comparison evidence.
