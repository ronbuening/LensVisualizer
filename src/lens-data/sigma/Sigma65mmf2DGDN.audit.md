# Lens Patent — Sigma 65mm F2 DG DN | Contemporary — 4 Audit

## Disposition

**READY_FOR_BATCH** · **INTEGRATION_PENDING**

The native Numerical Example 1 prescription passes the mandatory source, model, glass, geometry, numerical and analysis review. The optical data file is byte-identical to the Stage 3 candidate. No patent radius, spacing, index, asphere, focus station or image plane was corrected or scaled. Presentation, reference-plane wording and citation improvements were made to the analysis. Actual LensVisualizer integration checks remain unperformed.

## Identity and governing references

- Patent: JP 2021-128263 A, Numerical Example 1; original PDF with PAJ wrapper, 27 physical pages.
- Lens research correlation: Sigma 65mm F2 DG DN | Contemporary, not manufacturer confirmation of this exact factory prescription.
- Original card stem: Sigma65mmf2DGDN.
- Pinned main: `53470da5a5cbda1807d1e523fbc71963e5a1adc7`.
- Original source PDF SHA-256: `464b24d40a65c8037529cec6a95a97a35ab4917c1f339499551c496e68309320`.
- Original card SHA-256: `b19b1ef1937298bc6b2667ebd8bdb6d44f72209022a9e66408a58f66456046e3`.

Current data/analysis specifications, template, taxonomy, defaults, surface math, dispersion convention and runtime aperture code govern model interpretation. Their reference identities appear in the manifest. Reading those sources does not constitute executing the application.

## Source-first independence and exposure

Before candidate inspection, the reviewer independently entered the original rendered surface table, coefficients, system/focus/group tables and conditions. The index convention, asphere equation, construction text, bibliography and Fig. 1 were visually checked. The source-only baseline includes fresh sequential reduced-angle tracing, separate ABCD multiplication, exact sag/Snell calculations and official vendor catalog research.

The baseline fingerprint is `a820de2b9d3e788f7ed53617300dfb5fc9c7c785920d7de877492d27fd84a857`. It was frozen before the candidate pair, extraction, glass labels or author calculations were inspected. The retained baseline in `evidence.independentPass` is not rewritten by reconciliation. Original source-input/result objects, code identities, exposure and file inventory are preserved; independently namespaced calculating functions are incorporated into the complete verifier.

The reviewer knew the selected job identity and current shared specifications. Adjacent examples' raw source values were incidentally visible on shared patent pages, and a search exposed a generic project glass-catalog reference snippet. They were not used as selected numerical inputs. This is qualified source/method independence, not a claim of total contextual blindness. Subsequent corrections were checked by the same reviewer against the frozen source baseline and separate numerical implementations, not by a second newly blinded reviewer.

Original candidate identities:

- Archive: `b0264504fb36f312d250c5ac368f9c2a91679c0fffe1463e675d488f66840db8`.
- Manifest: `0fccedde626bc15d590003de45dab8d9a1fea457c7eb6aba46cb9472304c951d`.
- Data: `78885ddf53634f0f31870db7730f659d3273f543d79f1c0eb0ddb39d3726611e`.
- Analysis: `3f460e8215e6876b8a26f7d292644b261a191787e2bf26d8c704f9030945e50b`.

## Extraction, conventions and transformations

Physical PDF page 14 / printed page 13 contains ¶0108 surface data and the ¶0101 equation. Physical page 15 / printed page 14 contains aspheres, system values, two focus configurations and functional-group EFLs. Index definitions are on physical page 13 / printed page 12, ¶0097. Conditions appear on physical page 21 / printed page 20, ¶0114; Fig. 1 is on physical page 22 / printed page 21. The English PAJ cover and Japanese front page agree on inventors Hitoshi Murakami and Ryosuke Sato, Sigma ownership, filing 2020-02-14 and publication 2021-09-02.

The model preserves native millimetres, positive imageward axis, signed radii and d-line indices at 587.56 nm. Blank index cells mean air. There are 12 glass elements, 9 air-separated components, 3 cemented doublets, 21 refracting interfaces and one stop at S11. Cemented boundary ownership is assigned to the downstream medium. No plate, dummy or lens surface is omitted.

The source conic expression includes `1+K`; its three K values map directly as zero. A4–A10 are copied without scaling; required unused A12/A14 slots are zero. Native focus endpoints are PUBLISHED. Only S12–S13 moves, 9.7694 mm imageward, with d11+d13 = 14.4912 mm and BF = 19.3302 mm fixed. Intermediate linear gaps and focus-distance labels remain modeled interpolation.

Physical iris and clear radii are unpublished. Current runtime aperture source derives the ordinary air-stop radius by tracing a parallel ray at Gaussian EFL/(2 × nominal F-number). Independent calculation gives 11.99581990876344 mm, agreeing with the authored 11.995819908763362 mm. The frozen paraxial-only and exact-NA calibrations remain diagnostic alternatives; neither substitutes for the implemented convention. Stop agreement is calibration, not independent source-diameter evidence.

## Numerical reconciliation

Independent sequential and ABCD paths agree to machine precision. The small-ray limit of the independently written exact tracer agrees with the Gaussian EFL. Independently parsed final TypeScript agrees on 235 directly checked source/model fields, plus standalone powers and spectral conversion.

| Quantity | Independently computed result | Reference and treatment |
|---|---:|---|
| Infinity EFL | 63.1010491244 mm | Printed 63.10 mm |
| Closest EFL | 57.8310337339 mm | Printed 57.83 mm |
| Physical track | 89.0001 mm | Printed 89.00 mm; no forced gap adjustment |
| Infinity Gaussian BFD | 19.3312129121 mm | Authored physical gap stays 19.3302 mm |
| Closest Gaussian image distance | 19.3314422390 mm | Residual +0.0012422390 mm relative to authored image |
| Closest object-to-image distance | 549.9960 mm | d0 = 460.9959 mm plus rounded-table track |
| Closest magnification, Gaussian best plane | −0.1467425784 | Distinct from authored plane below |
| Closest magnification, authored image plane | −0.1467210979 | Slight difference follows residual defocus |
| Infinity H from first vertex | +2.7091211924 mm | Principal-plane reference, not a group boundary |
| Infinity H′ from last vertex | −43.7698362123 mm | Same convention |
| Infinity entrance pupil from first vertex | +23.4319224658 mm | Gaussian pupil position |
| Infinity exit pupil to authored image | 47.5002934786 mm | Operand for condition (10) |
| Petzval sum | +0.00117392905537 mm⁻¹ | Surface-by-surface φ/(n n′) |
| Infinity TL/EFL | 1.4104377223 | Not a telephoto-ratio construction |
| Infinity BFD/EFL | 0.3063532727 | Not retrofocus; precise value retained in results |

The three functional-group EFLs are +58.6551898154, −64.7863711187 and +72.7647536488 mm. Cemented-component EFLs are +56.3030194042, −184.8604260995 and +82.7126839221 mm. Individual thick-element powers are separately recomputed in air. All ten patent inequalities hold. Condition (8), 1.0100504754, also agrees with an independent image-sensitivity finite difference.

## Discrepancy register

The raw comparisons below remain **FAIL**; acceptance depends on supported interpretation rather than falsely reporting an exact match.

| Raw comparison | Computed | Printed | Residual | Independent resolution |
|---|---:|---:|---:|---|
| G1 EFL | 58.6551898154 mm | 58.65 mm | +0.0051898154 mm | One-index variations inside a printed nd rounding cell overlap the printed EFL bin |
| G3 EFL | 72.7647536488 mm | 72.77 mm | −0.0052463512 mm | Same independently reproduced existence test |
| Closest marginal-NA F-number | 2.3146561836 | 2.32 | −0.0053438164 | Exact calibration sweep inside the infinity F/2.07 rounding bin gives near 2.309067594–2.320245564, overlapping the near printed bin |

The group witnesses show possible source-rounding compatibility; they do not recover an unrounded prescription. No witness index becomes an authored value. The near-F sweep similarly does not change nominal F/2.07, iris radius or source F/2.32. The patent supplies no physical iris diameter and does not fully define its F-number convention. These narrow, source-supported qualifications are retained in the clean analysis.

The frozen paraxial aperture branch gives near F/2.331885, a different diagnostic. The implemented exact-ray convention is explicitly identified rather than replacing this baseline result. Raw source ΔPgF values also remain unchanged; only their application normal-line coordinates are transformed as described below.

## Glass and spectral review

The independent review scanned complete retrieved official AGF catalogs from HOYA (239 rows), OHARA (166), Nikon/Hikari (392), SUMITA (433) and SCHOTT (366). CDGM's downloadable catalog returned a file-not-found response; a limited public database check is recorded. No exhaustive six-vendor elimination or supplier identification is claimed.

All native coordinate pairs have exact displayed-precision HOYA options. Chosen names remain “class” labels, and same-coordinate alternatives are explicit. HOYA's n² power-series coefficients were independently evaluated; they are not mislabeled as Sellmeier coefficients. OHARA S/L families are not silently conflated. Catalog C/F/g values remain catalog-derived, not patent-melt measurements.

The patent uses ΔPgF = PgF − 0.64833 + 0.00180νd; the pinned application baseline is 0.6438 − 0.001682νd. Equivalent application dPgF values are 0.00472164, 0.04090836 and 0.023021 for source surfaces 3, 6 and 9. The native deviations 0.0081, 0.0385 and 0.0274 remain operands in patent-condition checks. Neither the coordinates nor those three deviations establish whole-lens apochromatic performance.

## Geometry and independent exact-ray checks

At all nine independent focus samples, 1,025 radial points per material band pass actual conic-polynomial slope/domain, positive thickness, 3× radius-ratio and shared-band intrusion checks. Minimum sampled element thickness is 0.1490291906 mm; maximum sampled actual slope is 52.70328293°. S20–S21 intrusion is 3.6184727487 mm against a 3.669570 mm policy limit, leaving 0.4588272513 mm physical clearance.

Verified departures at the stored modeled SDs are:

- S3A at 18.1 mm: −0.3473933589 mm.
- S17A at 17.0 mm: −0.1224283980 mm.
- S18A at 17.0 mm: +0.4872214716 mm.

A fresh xyz-coordinate exact tracer using tangential Snell decomposition sampled 9,261 rays over nine focus positions, seven apertures, three field fractions, four pupil radii and 22.5° azimuth increments. It found no invalid propagation, cemented-interface clipping or loss of the default 60%-field/75%-pupil bundle. Expected clipping at exposed rims or the stop is retained. The source endpoint chief image heights are 21.631961160 and 21.633388995 mm, within 0.01 mm of the printed 21.63 mm.

Ten isolated negative fixtures detect wrong radius sign, asphere exponent, K mapping, wavelength index, raw ΔPgF substitution, cemented ownership, focus gap, element omission, oversized D2 and rear-gap overlap. None changes the delivered model.

These are portable finite-sampling checks. They do not prove clearance at every pupil/field/wavelength or certify production rendering. No layout adjustment was used to hide a geometry defect.

## Corrections and quantitative-claim map

| Change | Old | Final | Optical effect |
|---|---|---|---|
| Two analysis tables | Blank lines broke GFM row continuity | Contiguous rows | None |
| Magnification wording | “Gaussian magnification” | Explicit Gaussian best-image plane | Clarifies existing result; no value changed |
| Cemented-EFL wording | Ambiguous comparison with constituents | Explicitly distinct standalone focal lengths | None |
| Review coverage | Construction samples only | Adds independent 9,261-ray and source-corner checks | New verified evidence |
| Product-renewal citation | Old product page only | Direct 2025 manufacturer renewal notice | Citation support only |

Every section was manually checked for source fact, calculation and inference distinctions. Element type/role text agrees with ¶0072–0075 and the source's stated design rationale; isolated aberration contributions are not invented.

| Claim family | Executed/source evidence |
|---|---|
| Native prescription, counts, focus, aspheres | `independentPass.baselineInputs`; `independentReconciliation.sourceComparison` |
| EFL/BFD/principal planes/finite magnification | `independentBaseline.sourceRecalculation.states`; `independentReconciliation.independentFinitePlanes` |
| Element, cemented and group powers | `independentBaseline.sourceRecalculation.elements`, `cementedGroups`, `groups` |
| Pupils, Petzval, conditions, motion | Independent source-recalculation result sections |
| Glass and spectral fields | `independentBaseline.glassReplay`; `spectralNative`; official vendor excerpts |
| SDs, departures, thickness, slope, gaps | `independentReconciliation.geometry` |
| Exact field/pupil sampling | `independentReconciliation.raySampling`, `cornerChiefChecks` |
| Rounding qualifications | Raw `comparisons`; independent `rounding` records |
| Metadata and production history | Patent bibliography; cited official Sigma sources |

## Replay, final binding and pending integration

The nine-file dossier includes the unchanged patent/card, clean root-level pair, evidence, complete verifier, results, this audit and manifest. The verifier contains the construction and independently namespaced methods and reads final TypeScript bytes. Standard-library Python replay requires no network or external numerical inputs:

`python Sigma65mmf2DGDN.verify.py --package-dir <extracted-directory> --output <external-results.json>`

Final archive extraction, member identities, hashes and clean replay are recorded in the manifest. Regenerated stable result content must agree; only the run timestamp is excluded from equality. Manual source/citation/prose assessments are identified as recorded review, not disguised as executable proofs. Final review binds to the exact manifest-listed bytes.

Eight real-project checks remain **NOT_RUN**, required at integration: buildLens, validateLensData, LensDataInput type checking, production render diagnostics, runtime glass resolution, Prettier, corpus checks and production build. No application acceptance is implied by READY_FOR_BATCH.

## 2026-10-06 — Semi-diameter pass against the patent figure

**Source.** `patents/JP2021128263A.pdf`, PDF page 22 (printed 21), 【図1】: the Numerical Example 1 cross-section at infinity. The embedded 1-bit raster (855 × 576 px) was measured at native resolution, upper and lower halves separately; the two halves agree to the pixel about an axis at row 311.5. The upper half carries the group brackets and the lower half the P1/P2 leaders and focus arrow; neither touches a rim.

**Axial scale.** All 21 refracting vertices and the image plane cross the axis within 1 px of the prescription at infinity. S1 to image is 704 px for 89.0001 mm, giving 0.12642 mm/px; S1–S22 (551 px, 69.6699 mm) and S14–S22 (202 px, 25.5068 mm) give 0.12644 and 0.12627. The drawing is a faithful plot of this example: the S3 asphere is drawn with its polynomial (drawn sag at the rim 3.38 mm, computed 3.36 mm at 17.4 mm), and the iris dashes end at ±97.5 px.

**Vertical scale.** The raster is not isotropic, so heights were calibrated on their own. Fitting the drawn arcs of the strongly curved S4, S9 and S15 to their tabulated radii gives 0.1228–0.1247 mm/px over both halves, mean 0.1237 mm/px. Two independent features agree: the drawn iris half-height is 12.06 mm at that scale against the modeled 11.996 mm, and the S20 and S21 lines merge at ±120 px (14.85 mm) against the 14.95 mm height at which the two prescription surfaces intersect. The raster is therefore about 2.2% taller than isotropic, and the PDF places it at 402 × 395 ppi, a further 1.8%. Heights read off a page render at the axial scale come out about 4% high; the automatic figure screen, which does exactly that, reported a median figure/data ratio of 1.007 for the incoming values.

**Measurement and decision.** "Curve end" is the height at which the drawn line stops following the tabulated surface and becomes a flat land; "outer rim" is the top of the element outline. Ranges are the one-pixel bins in which the transition falls.

| Surface | Before | Figure curve end (mm) | Figure outer rim (mm) | Before / figure | After | Basis |
|---|---:|---:|---:|---:|---:|---|
| 1 | 18.8 | 16.9–17.4 | 18.1 | 1.10 (1.04 at the rim) | 18.8 | Retained at the drawn outer rim; see the note below the table |
| 2 | 18.8 | 15.7–16.85 | 18.1 | ≥ 1.12 (1.04 at the rim) | 18.8 | Retained with S1 |
| 3A, 4, 5 | 18.1 | 17.4 | 17.4 | 1.04 | 18.1 | Retained, inside tolerance |
| 6, 7 | 17.2 | 16.5 | 16.5 | 1.04 | 17.2 | Retained |
| 8 | 15.5 | 15.5 | 15.5 | 1.00 | 15.5 | Retained |
| 9 | 15.5 | 15.1 | — | 1.03 | 15.5 | Retained |
| 10 | 15.5 | 13.0–13.7 | 15.1 | 1.13–1.19 | 13.8 | Flat land behind L6; clears the full-field bundle (13.39 mm) |
| 12 | 12.9 | not resolvable (R = 225 mm) | 12.4 | 1.04 | 12.9 | Retained |
| 13 | 12.9 | 10.7–11.0 | 12.4 | 1.17–1.21 | 11.0 | Land on the concave rear face; floor 10.85 mm |
| 14, 15, 16 | 15.9 | 15.3 | 15.3 | 1.04 | 15.9 | Retained |
| 17A, 18A | 17.0 | 16.3 | 16.3 | 1.04 | 17.0 | Retained |
| 19 | 16.8 | 16.1 | 16.1 | 1.04 | 16.8 | Retained |
| 20, 21 | 14.1 | 14.85 (edge contact) | 16.1 / 16.5 | 0.95 | 14.1 | Retained; 14.1 mm is already at the air-gap intrusion limit |
| 22 | 17.2 | 16.5 | 16.5 | 1.04 | 17.2 | Retained |

The two changed faces, S10 and S13, are ones the drawing ends at a land well inside the stored radius. S1 and S2 were first cut to their curve ends (17.0 mm) and then restored to 18.8 mm on review: that value is L1's drawn outer rim at the same 1.04 ratio as every retained rim, the 17.0 mm cut was a 10% change that made L1 render 1.1 mm shorter than D1 although the figure draws it 0.7 mm taller, and it raised the corner trim at S1 from 28% to 39%. S13 is the clearest: its curve stops at the axial marginal-ray height for F/2.07 (10.85 mm at infinity), so 11.0 mm is the figure value rounded up to stay above that floor. The stop radius was not touched.

**Values retained.** Every other rim sits a uniform 3–4% above the figure's calibrated scale, which is the page-render effect described above and is inside this pass's tolerance, so those values were not repainted. No aspheric semi-diameter changed, so the departures quoted in the analysis at 18.1, 17.0 and 17.0 mm stand. The analysis paragraph on modeled apertures was updated: with S10 at 13.8 mm the thinnest glass is no longer the L6 rim (0.149 mm at 15.5 mm) but the L8 rim, 0.808966 mm at 15.9 mm; the largest surface slope is still S9 at 15.5 mm, 52.703283°.

**Clearance after the change.** Exact meridional real-ray trace with the modeled iris (11.996 mm):

- Axial marginal ray at F/2.07, infinity: 15.24 mm at S1, 15.48 at S2, 12.52 at S10, 11.39 at S12 and 10.85 at S13; the smallest margin is 0.15 mm at S13. At the closest station (object 460.9959 mm ahead of S1) the same ray is lower on the focus element: 9.34 mm at S12 and 8.99 mm at S13.
- Corner chief ray to Y = 21.63 mm: 18.52° at infinity and 15.74° at the closest station, both as printed in the patent; its largest height is 12.48 mm at S22 and no surface blocks it.
- Corner bundle at infinity, with S1/S2 at the restored 18.8 mm: S1 trims 28% of the half-bundle on its side and S4 29% (both as before the pass), S13 trims 14% (none before) and S21 still trims 53%. At the closest station from the real object point S13 trims 31% and S21 25%.
- The default display bundle (12.6° field, 75% pupil) passes every surface untrimmed at both endpoints.
- Engine-derived values are unchanged: EFL 63.101 mm, F/2.07, stop radius 11.9958 mm, half-field 21.005° (limited by S21). The image-circle floor reports nothing undersized, traced corner coverage is 100% (18.5° to 21.63 mm), the surface validator reports no errors, and the element render diagnostics report no trim at focus 0, 0.5 and 1.

**Open limitations.**

- The renderer joins the two rim points of an element with a straight line, so the lands of L6 and L7 appear as slanted rims rather than the drawn square shoulders. L1 is drawn at its outer rim, so its short lands beyond about 17 mm are rendered as curved glass.
- A fully rescaled set was checked and not applied: 3A/4/5 = 17.4, 6/7 = 16.5, 9 = 15.1, 12 = 12.4, 14/15/16 = 15.3, 17A/18A = 16.3, 19 = 16.1 and 22 = 16.5 mm pass the surface validator with no axial clip and no blocked chief ray. Adopting it would move three aspheric rims and require recomputing the quoted departures.
- S20/S21 remain 5% inside the drawn contact height because the air-gap policy rejects 14.2 mm (3.67 mm combined sag against a 3.670 mm limit).
- The S2 and S12 curve ends are weakly constrained; both faces are too flat for a land to show within a pixel.

## 2026-10-06 — Glass catalog coverage and metadata

- L1 (`E-FEL2 class`, 1.54072 / 47.20) and L11 (`E-FD15L class`, 1.69895 / 30.05) named HOYA glasses that the project
  catalog did not hold, so both traced on the Abbe approximation. HOYA's E-FEL2 and E-FD15L rows were added from the
  vendor AGF of 2026-07-07 (formula-1 polynomials; coefficient-evaluated 1.540720 / 47.20 and 1.698949 / 30.05).
  Their product codes 541-472 and 699-301 are shared with other catalog rows and were left off, so bare-code labels
  elsewhere keep their existing rows. All twelve elements now resolve to catalog dispersion curves; no label, nd or
  νd changed, and the three source-derived `dPgF` values stay authoritative at the g line.
- `specs` lines for the design focal length and f-number were put in the catalog's usual upper-case form.
- Display name, mounts (L-Mount, Sony E), format and the 43.26 mm image circle were reviewed and left as authored.
