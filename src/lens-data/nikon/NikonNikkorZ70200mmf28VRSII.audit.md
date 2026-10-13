# NikonNikkorZ70200mmf28VRSII — Consolidated Audit (Stages 1–3 construction, Stage 4 independent review)

Lens Patent — Nikon Nikkor Z 70-200mm f/2.8 VR S II. Consolidated construction record. Stage 1 extraction and Stage 2 data construction are retained; Stage 3 (analysis authoring and its consistency gate) is added in §15. Sections 1–15 are construction verification, not an independent review; the Stage 4 source-first audit is §16.

## 1. Job and reference versions

| Item | Value |
|---|---|
| Patent | WO 2026/172598 A1 (PCT/JP2025/039307), applicant Nikon Corporation; inventor TAKAHASHI Akino (高橋 晶乃); priority JP 2025-022030 (2025-02-14); published 2026-08-20 |
| Embodiment | Example 1 (第1実施例, 表1, Fig. 1) |
| Output stem | `NikonNikkorZ70200mmf28VRSII` |
| WO_2026172598_A1.pdf | sha256 `1073732cef05eabf26dd3c8fe33d36507872af9faf09876ab1d95a7bca1e5e2a` (unchanged) |
| NikonNikkorZ70200mmf28VRSII.txt | sha256 `12fb44d39b4b495fb07605bd38160bf2655b378d2f6e66e395cd28699d9e731c` (unchanged) |

Project references at Stage 2 have the same hashes as at Stage 1 (manifest.references). The Stage 2 prompt is LensPatentStage2Data.txt `ece2224a…d058`.

Stage 2 entry gate:
- The incoming Stage 1 files matched the Stage 1 manifest hashes. The uploads used legacy underscore names (`NikonNikkorZ70200mmf28VRSII_evidence.json` etc.); they were renamed to the dot names without byte changes.
- Rerunning the Stage 1 verifier reproduced `sourceModel`, `comparisons`, `checks` (61) and `facts` identically.
- PDF pp. 33–35 (table rows 1–37, asphere blocks, gap and group tables) and p. 1 (applicant, inventor) were re-rasterized and agree with evidence.json. This covered the asphere coefficients and νd/θgF, which the first-order checks cannot detect.

Reference revision impact (MD-14): the LensVisualizer repository (read-only clone, commit `fee638fc`, 2026-10-01) has a newer `LENS_DATA_SPEC.md` (same-application assignment rule for assignees) and `LENS_MOUNT_FORMAT_OPTIONS.md` (cinema formats). Neither affects this lens. Template, defaults, analysis spec and Prettier config are byte-identical. `src/utils/catalog/lensTaxonomy.ts` confirms the ids `nikon-z` and `135-full-frame`. The authoring guide and integration handoff were still not supplied (OI-08).

Environment: Python 3.12.3, numpy 2.4.4, scipy 1.17.1 at Stage 2 (Stage 1 recorded numpy 2.5.3 / scipy 1.18.1; the Stage 1 replay was identical). Node 22.22.2, Prettier 3.8.1, TypeScript 5.9.3 from the repository lockfile (`npm ci --ignore-scripts`). The repository declares Node ≥ 24.15; the version difference is recorded and no engine-dependent failure was observed.

## 2. Extraction and conventions

The PDF has no text layer (113 image pages). Every value was read from rasterized pages. Table 1 was read at 200 dpi and then re-read row by row at 300–400 dpi crops (PDF pp. 32–35; printed pp. 30–33). This covered the system data, all 37 prescription rows, the four asphere blocks, the variable-gap table and the group table. The conditions table (pp. 69–70) and the definitions (¶0014–0121, claims pp. 74–80) were read at 200 dpi. Their values are cross-checked numerically in §5.

- Sign: R > 0 with the centre of curvature on the image side. Surfaces run object to image. nd and νd are at the d-line. θgF = (ng−nF)/(nF−nC), printed to 2 dp; L41 is 0.625 in the conditions table.
- Asphere (¶0135): X = (y²/R)/[1+√(1−κy²/R²)] + ΣA2i·y^2i, so K = κ−1. All four aspheres (s17, s18, s23, s34) have κ = 1.0000, giving K = 0. A2 = 0 is omitted. The mapping was identity-checked numerically (chk.asphere.conicMapping).
- TL and BF are air-equivalent at infinity (¶0132). Zoom movement is positive toward the image (¶0066). The decimal glyph is a comma-like point.
- Literal note: L33 νd is printed `95.1` (one decimal). D37 is printed as variable (可変) but is 0.174 in all states.

## 3. Model transformations (ledger: evidence.modelingDecisions)

Stage 1 decisions:
- MD-01: FL plate → rearPlates.
- MD-02: D37 fixed at 0.174.
- MD-03: zoomPositions from the published f.
- MD-04: K = κ − 1 = 0.
- MD-05: stop/SDs to be inferred.
- MD-06: focus plan.
- MD-07: Δ2Z raw retained.

All are implemented in the data file. Stage 2 adds:

- **MD-08** label mapping: patent numbers 1–35 retained; surface 19 → `STO`; 17A, 18A, 23A, 34A.
- **MD-09** focus reconstruction implemented (§6).
- **MD-10** aperture: `nominalFno` [2.891, 2.904, 2.905], fixed iris, no `zoomApertureModel`. The real-ray STO sd is 17.960 mm.
- **MD-11** semi-diameters modeled (§7a).
- **MD-12** glass annotation and spectral fields.
- **MD-13** metadata.
- **MD-14** reference impact.

The data file (`NikonNikkorZ70200mmf28VRSII.data.ts`) is the implemented model. evidence.json holds no second copy of it.

## 4. Glass review

An unseeded nearest-neighbour search was run over all six catalogs: Ohara 134, Hoya 238, Schott 122, Sumita 128, Hikari 144 and CDGM 321 glasses, all from opticalglass 2.0.2. The metric is √(Δnd² + (Δνd/50)²), with Exact < 0.001, Close < 0.003 and Equivalent < 0.015. The supplier was not inferred from the brand. The relevant catalog rows are stored in evidence.glassEvidence for offline replay.

| Elements | nd / νd / θgF(table) | Class | Label |
|---|---|---|---|
| L11 | 1.48749 / 70.32 / 0.53 | Exact | HIKARI J-FK5 (487-703 class; OHARA S-FSL5, Schott N-FK5 Close) |
| L12 | 1.77047 / 29.74 / 0.60 | Exact | HOYA NBFD29 (770-297) |
| L13 | 1.43384 / 95.24 / 0.54 | Equivalent | Calcium fluoride (fluorite). nd matches the Malitson (1963) CaF2 dispersion to 1e-5; νd 95.24 vs 95.00 from that dataset (published CaF2 Abbe values vary with dataset and temperature), so the metric class is Equivalent. No catalog glass is coordinate-identical: nearest HOYA FCD100 (Δnd +0.00316) has PgF 0.5336, rounding to 0.53 rather than the printed 0.54, while CaF2 PgF 0.5387 rounds to 0.54. The manufacturer lists one fluorite element. |
| L21 | 1.55298 / 55.07 / 0.54 | Exact | HIKARI J-KZFH4 (553-551) |
| L31 | 1.51860 / 69.89 / 0.53 | Exact | HIKARI J-PKH1 (519-699) |
| L32 | 2.00069 / 25.46 / 0.61 | Exact | 2.00069/25.46 — identical coordinates in HOYA TAFD40, CDGM H-ZLaF90A, HIKARI J-LASFH17; vendor not resolvable |
| L33 | 1.43700 / 95.1 / 0.53 | Exact | HOYA FCD100 (437-951) |
| L41 | 1.62200 / 30.66 / 0.62 | Exact | HIKARI J-SFH8 (622-307); θgF 0.6248 matches condition (10) 0.625 |
| L42 | 1.49710 / 81.56 / 0.54 | Exact | HOYA M-FCD1 / FCD1B (497-816); OHARA S-FPL51 Close |
| L43 | 1.85451 / 25.15 / 0.61 | Exact | HOYA NBFD25 (855-252) |
| L44 | 1.49782 / 82.57 / 0.54 | Exact | HIKARI J-FKH1 (498-826) |
| L45 | 1.59306 / 66.97 / 0.54 | Exact | 593-670 class. Metric-Exact to HOYA MP-PCD51-70 (Δnd −0.00035, Δνd 0.00) but not coordinate-identical to any catalog row; HIKARI J-PSKH4 and HOYA PCD51 Close. Aspheric (s23); molded-glass index shift possible; vendor/melt Unmatched. |
| L46+L51 | 1.80809 / 22.74 / 0.63 | Exact | HIKARI J-SFH1 (808-227); OHARA S-NPH1 Close |
| L47 | 1.80610 / 33.27 / 0.59 | Exact | 1.80610/33.27 — identical in HOYA NBFD15 and CDGM H-ZLaF56B; vendor not resolvable |
| L52 | 1.78800 / 47.35 / 0.56 | Exact | HIKARI J-LASF014 (788-474); OHARA S-LAH64 Close |
| L61 | 1.68376 / 37.64 / 0.58 | Exact | HIKARI J-KZFH6 (684-376) |
| L71 | 1.58335 / 59.55 / 0.54 | Exact | 583-595 class. Metric-Exact to CDGM D-ZK2A (Δnd −0.00022, Δνd −0.01) but not coordinate-identical; HOYA M-BACD12 family Close. Aspheric (s34); molded-glass index shift possible; vendor Unmatched. |
| FL | 1.51680 / 64.13 / 0.54 | Exact | HIKARI J-BK7A (517-641); Schott N-BK7 Close |

The L13 fluorite identification rests on four things. First, nd agrees with the Malitson CaF2 dispersion to +0.000009. Second, the CaF2 PgF (0.5387) rounds to the printed 0.54, whereas the nearest glass, FCD100, has PgF 0.5336, which rounds to 0.53. Third, no glass in any of the six catalogs is coordinate-identical. Fourth, the manufacturer lists one fluorite element. The νd difference (95.24 vs 94.996) is within the spread between published CaF2 datasets but is not resolved here. The label is therefore Equivalent, not Exact.

Manufacturer special-element correlation (an inference, not a confirmation): fluorite = L13; Super ED = L33 (FCD100 coordinate); aspherical ED = L42 (FCD1-family, aspheric on both faces); ED = L44 (J-FKH1 coordinate); 2 aspherical lenses = L45 (s23) and L71 (s34); SR = most plausibly L41 (θgF 0.625, singled out by conditions 8–10). The SR assignment is unconfirmed.

Stage 2 glass annotation (MD-12). The repository resolver (`explainCompatibleGlassResolution`) selects these entries:

| Element | Selected entry |
|---|---|
| L11 | J-FK5 |
| L12 | NBFD29 |
| L13 | CaF2 |
| L21 | J-KZFH4 |
| L31 | J-PKH1 |
| L32 | J-LASFH17 (index residual among identical coordinates) |
| L33 | FCD100 |
| L42 | M-FCD1 |
| L43 | NBFD25 |
| L44 | J-FKH1 |
| L45 | M-PCD51 (Δnd −0.00105) |
| L46, L51 | J-SFH1 |
| L47 | NBFD15 |
| L52 | J-LASF014 |
| L61 | J-KZFH6 |
| L71 | M-BACD12 (583595 code; Δnd −0.00022) |
| FL | J-BK7A |

- **L41.** J-SFH8 was not in the repository catalog when this section was written; it was added on 2026-10-05 and the label now resolves (see the 2026-10-05 glass note). It carries `dPgF` = 0.0328, from the condition-table θgF 0.625 and the engine normal line 0.6438 − 0.001682·νd (confirmed in `src/optics/dispersion.ts`).
- **No other spectral fields.** No `dPgF` is derived from the 2-dp table θgF, and no nC/nF/ng are authored.
- **`apd: "inferred"`.** Set on L13, L33, L41, L42 and L44, with catalog-based notes. L41 is labelled only as an unconfirmed SR candidate.

## 5. Numerical results (source model, executed in verify.py)

EFL is computed with a sequential y-nu trace and a separately coded ABCD product. The two agree to < 1e-9. The tolerance on each comparison is 0.0005 + 3σ, where σ comes from a seeded Monte-Carlo propagation of printed-input rounding.

| Quantity | W | M | T | Published |
|---|---|---|---|---|
| EFL (mm) | 71.4041 | 135.0001 | 196.0048 | 71.402 / 134.997 / 195.996 |
| σ(EFL) from rounding | 0.002056 | 0.00381 | 0.006203 | — |
| Paraxial image after s37 (mm) | 0.1770 | 0.1763 | 0.1797 | D37 = 0.174 |
| BF air-equivalent to published IP (mm) | 30.9789 | 30.9789 | 30.9789 | 30.979 |
| TL air-equivalent (mm) | 221.2259 | 221.2269 | 221.2259 | 221.226 |
| TL physical s1→IP (mm) | 221.771 | 221.772 | 221.771 | — |
| TL/EFL (physical) | 3.1059 | 1.6428 | 1.1315 | — |
| Front PP from s1 / rear PP from s37 (mm) | 99.40 / -71.23 | 105.62 / -134.82 | 28.99 / -195.83 | — |
| Entrance pupil from s1 (mm) | 80.35 | 165.39 | 225.10 | — |
| EPD = f/FNO (mm) | 24.699 | 46.488 | 67.472 | FNO 2.891/2.904/2.905 |
| Stop SD implied by FNO (mm) | 16.856 | 16.860 | 16.863 | — |
| Exit pupil from IP (mm) | -97.38 | -93.57 | -97.97 | — |
| f·tanω (mm) | 22.329 | 21.493 | 21.424 | Y = 21.700 |

The f-number-implied stop semi-diameter is nearly the same in all three states (16.856–16.863 mm). This means the three published FNO values are mutually consistent with a single fixed stop of about 33.72 mm diameter. It is a calibration result, not independent stop-diameter evidence.

Petzval sum (surface-by-surface φ/(n·n′), lens surfaces only) = 0.0008934 mm⁻¹, giving a Petzval radius of -1119.33 mm. It does not change with zoom.

The system is not telephoto (TL/EFL > 1 at every state) and not retrofocus (BFD < EFL).

Group focal lengths (standalone, thick lens in air) compared with Table 1 [レンズ群データ]:

| Group | Surfaces | Computed | Published |
|---|---|---|---|
| G1 | 1–6 | 144.4384 | 144.437 |
| G2 | 7–8 | -82.8647 | -82.865 |
| G3 | 9–14 | -116.8833 | -116.883 |
| G4 | 15–27 | 45.6083 | 45.608 |
| G5 | 28–31 | -54.3126 | -54.313 |
| G6 | 32–33 | 64.8027 | 64.803 |
| G7 | 34–35 | -83.2342 | -83.234 |

Element standalone focal lengths (thick lens in air, mm):

| Element | f | Element | f |
|---|---|---|---|
| L11 | 327.7834 | L12 | -294.1422 |
| L13 | 135.6489 | L21 | -82.8647 |
| L31 | -83.5847 | L32 | 88.103 |
| L33 | -125.9695 | L41 | 103.0443 |
| L42 | 93.7961 | L43 | -35.2015 |
| L44 | 100.4555 | L45 | 49.42 |
| L46 | -199.148 | L47 | 92.2101 |
| L51 | 130.7323 | L52 | -37.7154 |
| L61 | 64.8027 | L71 | -83.2342 |
| L43+L44 | -52.0489 | L45+L46 | 64.9317 |

All 18 power signs and all 18 radius-sign shapes agree with ¶0141–0147. The count is 18 elements in 16 groups (two cemented doublets), matching the manufacturer.

Zoom kinematics: G1, G4 and G7 are fixed (the gap sums are constant to ≤ 0.001 mm). G2 and G3 move monotonically toward the image. G5 and G6 reverse direction during zoom. G5 sits [3.004, 5.45, 3.287] mm behind G4 and G6 sits [37.363, 36.248, 37.977] mm behind G4. This satisfies claims 15 and 16.

Conditional expressions: all 21 are reproduced to the printed precision and lie within their claimed ranges (chk.cond.1–21). Selected values: (1) f2/f3 = 0.709; (5) −f3/f4 = 2.563; (11) |Δ3Z/Δ2Z| = 0.879; (15)–(18) use GM = G2+G3 with fmw = -43.672631 and fmt = -44.872676 mm.

## 5a. Implemented-model recomputation (Stage 2, parsed `.data.ts`)

All values below are computed in `verify.py` from the parsed data file, not from a second copy.

- **Parsing.** The strict literal parser accepts the file. Its self-test rejects six malformed fixtures. A copy with R12 altered by +0.0001 is detected by the source comparison (`chk.data.mutationDetected`).
- **Source comparison.** R, d, nd, labels, var infinity rows, asphere K and A4–A14, the FL plate, element nd/νd, `zoomPositions` and `nominalFno` all match the raw source plus ledger exactly (`chk.data.sourceMatch`).
- **First order.** EFL (ABCD = y-nu) is 71.4041 / 135.0001 / 196.0048 mm. Air-equivalent TL is 221.2259 / 221.2269 / 221.2259 mm and BF is 30.9789 mm. Paraxial defocus at the authored image plane is +0.003 / +0.002 / +0.006 mm.
- **Petzval, elements, groups.** The Petzval sum equals the source value (0.0008934 mm⁻¹). The stored element `fl` values match recomputed thick-lens values to 2 dp. The group-annotation spans reproduce all seven 表1 group focal lengths.
- **Real-ray field.** The real chief ray at the published ω lands at Y = 21.6997 / 21.6996 / 21.6983 mm. The published ω is therefore the real-ray field angle. The real height differs from paraxial f·tanω by −2.82 % / +0.96 % / +1.28 % (W/M/T).
- **Stop.** The real marginal ray at EP = f/(2·2.891) at W reaches the stop at 17.960 mm; paraxial calibration gives 16.856 mm. The 6.5 % difference is full-aperture pupil aberration in G1–G3. The same fixed iris gives f/2.9040 at M and f/2.9047 at T, against the published 2.904 / 2.905. The W value is calibration; M/T agreement supports a single fixed stop but does not measure it.
- **Asphere departures** from the base sphere at the modeled SD:

  | Surface | SD (mm) | Departure (µm) |
  |---|---|---|
  | 17A | 20.30 | −196.2 |
  | 18A | 19.70 | +201.5 |
  | 23A | 17.10 | −138.8 |
  | 34A | 15.55 | +335.7 |

## 6. Focus disposition: CONSTRAINED_RECONSTRUCTION (implemented)

Mechanism (¶0140, Fig. 1): G5 (−) moves toward the image and G6 (+) toward the object. G1–G4, G7 and the image plane are fixed. The close states are solved paraxially for Nikon's object-to-image distances 0.38 / 0.60 / 0.80 m.

| State | δ5 (G5, mm) | δ6 (G6, mm) | D27 / D31 / D33 close (mm) | β | Basis |
|---|---|---|---|---|---|
| W | +5.1050 | −4.4233 | 8.109 / 19.9307 / 10.0483 | −0.3000 | MFD + 0.30× (unique admissible solution) |
| M | +8.7468 | −6.9587 | 14.1968 / 10.1925 / 13.6987 | −0.2527 | MFD + declared rule δ6/δ5 = −0.79557 (mean of W −0.86646, T −0.72467) |
| T | +12.7854 | −9.2652 | 16.0724 / 7.7394 / 14.2762 | −0.2500 | MFD + 0.25× (unique admissible solution) |

- **Solution quality.** A fresh multi-start solve confirms the W and T solutions are unique among admissible solutions. Residual paraxial defocus at the three close states is < 0.0002 mm. D31 is computed from the conserved G4→G7 interval, so the sum is exact.
- **Rejected rule for M.** Stage 1's alternative rule (β linear in focal length) gives |β| = 0.2745 at 135 mm. That is outside the admissible family of 0.248–0.258, so it cannot be used.
- **Interpolated states.** The app interpolates gaps piecewise-linearly between stations, so intermediate states are not solved. Their paraxial defocus is up to 2.22 mm, at infinity as well as at close focus (OI-09). At zoom index 0.5 (EFL 98.3 mm) the interpolated MFD is 0.49 m; Nikon quotes 0.5 m at 105 mm.
- **Not certified.** `finiteConjugates` is deliberately omitted. The close states must not be presented as published.

## 7a. Geometry (modeled semi-diameters, MD-11)

Policy:
- sd = ceil₀.₀₅(1.04 × the maximum over 15 zoom/focus states of: the full-aperture axial marginal ray, the real full-field chief ray, and the 0.6-field ±0.5-pupil rays).
- The two cemented doublets are equalized.
- No figure-scaled values are used; Fig. 1 proportions were inspected qualitatively only.

Values (mm): 1 35.1, 2 35.0, 3 34.2, 4 33.15, 5 33.15, 6 32.65, 7 19.65, 8 18.65, 9 18.7, 10 19.05, 11 19.55, 12 18.72, 13 18.72, 14 19.9, 15 20.8, 16 20.6, 17A 20.3, 18A 19.7, STO 17.96, 20 17.35, 21 17.35, 22 17.35, 23A 17.1, 24 17.1, 25 17.1, 26 16.55, 27 16.3, 28 13.45, 29 13.05, 30 12.4, 31 11.6, 32 15.05, 33 15.4, 34A 15.55, 35 16.15.

Exception: surfaces 12/13. The 4 % rule would give 19.45 mm, but these rims touch at 19.16 mm. They are held at 18.72 mm, just above the tele axial marginal height (18.69 mm). Intrusion is 95.37 % of D12 = 3.78 mm, so `gapSagFrac` 0.96 is set. The default 0.90 would cap sd at 18.19 mm and clip the published tele f/2.905 bundle. Every other gap is ≤ 0.90 at all sampled states (`chk.geometry.gapOverrideScope`).

Results (`chk.geometry.*`):
- Minimum edge thickness is 1.27 mm (L47), using the validator formula. The maximum rim slope is 37.7° (s21) against a 64.16° limit. All surfaces lie in the conic domain, and the front/rear SD ratio is ≤ 1.07.
- Full-aperture axial rays with the fixed iris pass every SD at all 15 states.
- The real full-field chief ray passes every SD at all 15 states.
- Diagram off-axis rays (0.6 field, ±0.75 pupil) first clip at G5 rims (30/31), L71 or s1. That is ordinary vignetting; none clip at a cemented junction.

## 7b. LensVisualizer targeted checks (real code, repository `fee638fc`)

These were run by `verify.py --lv-repo` through `NikonNikkorZ70200mmf28VRSII.lvcheck.mjs`, with the data file copied temporarily into `src/lens-data/` and removed afterwards. All PASS:

- `validateLensData` (with the real defaults): no errors or warnings.
- `buildLens`: zoomEFLs 71.4041 / 135.0001 / 196.0048 mm; zoomFOPENs 2.891 / 2.904 / 2.905; stop sd 17.9600 mm.
- `tsc --noEmit` scoped to the data file: clean. A deliberately mistyped copy (`elementCount: "18"`) produced TS2322.
- `computeElementRenderDiagnostics`: 0.00 mm hidden trim at 15 zoom/focus states.
- Glass resolution as in §4.
- Validator mutation tests: duplicate STO, short var vector and `gapSagFrac` 0.90 were each rejected.

The app's own half-field estimate (17.67° / 9.43° / 6.38°) is its paraxial vignetting-limited value, not the patent's real-ray ω.

Not run (integration scope): `generate:metadata`, corpus validation and render sweeps, the batch glass reports, and the production build. Prettier was run with `/mnt/project/prettierrc.json` (identical to the repository `.prettierrc.json`); `--check` passes.

## 8. Correction and discrepancy register

| ID | Item | Raw | Computed / treatment |
|---|---|---|---|
| D-1 | Δ2Z (表1 [全体諸元]) | 48.949 | Gap table gives 48.940 (cmp.delta2Z MISMATCH retained; chk.disc.delta2Z PASS). Not substituted. |
| D-2 | EFL residuals W/M/T | 71.402 / 134.997 / 195.996 | +0.0021 / +0.0031 / +0.0088 mm, within input-rounding propagation. |
| D-3 | Paraxial image after s37 | 0.174 | 0.177–0.180 mm; consistent with input rounding. |
| D-4 | Transcription corrections | — | None (Stage 1 and Stage 2 spot-check). |
| D-5 | Real vs paraxial stop SD | 16.856 (paraxial) | 17.960 (real, used by buildLens); explained by pupil aberration, see MD-10. |

## 9. Checks summary (results.json)

| Check | Scope | Status | Required at |
|---|---|---|---|
| chk.efl.W | CHAT_PREFLIGHT | PASS | stage1 |
| chk.efl.methods.W | CHAT_PREFLIGHT | PASS | stage1 |
| chk.focus.imageResidual.W | CHAT_PREFLIGHT | PASS | stage1 |
| chk.bf.airEquivalent.W | CHAT_PREFLIGHT | PASS | stage1 |
| chk.tl.W | CHAT_PREFLIGHT | PASS | stage1 |
| chk.efl.M | CHAT_PREFLIGHT | PASS | stage1 |
| chk.efl.methods.M | CHAT_PREFLIGHT | PASS | stage1 |
| chk.focus.imageResidual.M | CHAT_PREFLIGHT | PASS | stage1 |
| chk.bf.airEquivalent.M | CHAT_PREFLIGHT | PASS | stage1 |
| chk.tl.M | CHAT_PREFLIGHT | PASS | stage1 |
| chk.efl.T | CHAT_PREFLIGHT | PASS | stage1 |
| chk.efl.methods.T | CHAT_PREFLIGHT | PASS | stage1 |
| chk.focus.imageResidual.T | CHAT_PREFLIGHT | PASS | stage1 |
| chk.bf.airEquivalent.T | CHAT_PREFLIGHT | PASS | stage1 |
| chk.tl.T | CHAT_PREFLIGHT | PASS | stage1 |
| chk.gap.G1toG4 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.gap.G4toG7 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.delta3Z | CHAT_PREFLIGHT | PASS | stage1 |
| chk.disc.delta2Z | CHAT_PREFLIGHT | PASS | stage1 |
| chk.claim15.Gf2 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.claim16.Gf1 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.group.G1 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.group.G2 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.group.G3 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.group.G4 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.group.G5 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.group.G6 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.group.G7 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.element.signs | CHAT_PREFLIGHT | PASS | stage1 |
| chk.element.shapes | CHAT_PREFLIGHT | PASS | stage1 |
| chk.count.elements | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.1 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.2 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.3 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.4 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.5 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.6 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.7 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.8 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.9 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.10 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.11 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.12 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.13 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.14 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.15 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.16 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.17 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.18 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.19 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.20 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.cond.21 | CHAT_PREFLIGHT | PASS | stage1 |
| chk.asphere.conicMapping | CHAT_PREFLIGHT | PASS | stage1 |
| chk.asphere.departures | CHAT_PREFLIGHT | PASS | stage2 |
| chk.glass.replay | CHAT_PREFLIGHT | PASS | stage1 |
| chk.glass.pgf | CHAT_PREFLIGHT | PASS | stage1 |
| chk.focus.feasible.W | CHAT_PREFLIGHT | PASS | stage1 |
| chk.focus.feasible.T | CHAT_PREFLIGHT | PASS | stage1 |
| chk.field.realRay | CHAT_PREFLIGHT | PASS | stage2 |
| chk.geometry.sd | CHAT_PREFLIGHT | PASS | stage2 |
| chk.parser.selftest | CHAT_PREFLIGHT | PASS | stage2 |
| chk.data.parse | CHAT_PREFLIGHT | PASS | stage2 |
| chk.data.structure | CHAT_PREFLIGHT | PASS | stage2 |
| chk.data.metadata | CHAT_PREFLIGHT | PASS | stage2 |
| chk.data.sourceMatch | CHAT_PREFLIGHT | PASS | stage2 |
| chk.data.mutationDetected | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.efl.W | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.tl.W | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.focusInf.W | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.efl.M | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.tl.M | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.focusInf.M | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.efl.T | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.tl.T | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.focusInf.T | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.petzval | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.elementFl | CHAT_PREFLIGHT | PASS | stage2 |
| chk.impl.groups | CHAT_PREFLIGHT | PASS | stage2 |
| chk.focus.recon.W | CHAT_PREFLIGHT | PASS | stage2 |
| chk.focus.recon.M | CHAT_PREFLIGHT | PASS | stage2 |
| chk.focus.recon.T | CHAT_PREFLIGHT | PASS | stage2 |
| chk.focus.recon.Mrule | CHAT_PREFLIGHT | PASS | stage2 |
| chk.focus.recon.unique | CHAT_PREFLIGHT | PASS | stage2 |
| chk.focus.interpolation | CHAT_PREFLIGHT | PASS | stage2 |
| chk.stop.fixedIris | CHAT_PREFLIGHT | PASS | stage2 |
| chk.geometry.gapOverrideScope | CHAT_PREFLIGHT | PASS | stage2 |
| chk.geometry.axialContainment | CHAT_PREFLIGHT | PASS | stage2 |
| chk.geometry.chiefContainment | CHAT_PREFLIGHT | PASS | stage2 |
| chk.geometry.offAxisJunction | CHAT_PREFLIGHT | PASS | stage2 |
| chk.data.glassLabels | CHAT_PREFLIGHT | PASS | stage2 |
| lv.validateLensData | LENSVISUALIZER | PASS | integration |
| lv.buildLens | LENSVISUALIZER | PASS | integration |
| lv.typecheck | LENSVISUALIZER | PASS | integration |
| lv.renderTrim | LENSVISUALIZER | PASS | integration |
| lv.glassResolution | LENSVISUALIZER | PASS | integration |
| lv.mutations | LENSVISUALIZER | PASS | integration |

## 10. Quantitative-claim map (facts available to Stage 3)

Stage 1 facts F-EFL, F-FNO-PUB, F-BF, F-TL, F-TELEPHOTO, F-RETROFOCUS, F-PETZVAL, F-COUNTS, F-GROUPS and F-EP are retained. Stage 2 adds:

| Fact ID | Content |
|---|---|
| F-FOCUS-RECON | Reconstructed close states |
| F-STOP | Real-ray stop and fixed-iris f-number predictions |
| F-FIELD-REAL | Real-ray image heights and distortion |
| F-ASPH-DEP | Departures at modeled SDs |
| F-GEOM | Edge, gap and gapSagFrac record |
| F-ELEMENT-FL | Standalone element focal lengths |

Stage 3 must map every quantitative claim to a fact ID or a new executed result, and add the claim-to-fact rows here. Metadata strings in the data file map as follows:

| Data string | Source |
|---|---|
| specs "18 ELEMENTS / 16 GROUPS" | F-COUNTS |
| "f = 71.4–196.0 mm" | F-EFL |
| "F/2.89–2.91" | F-FNO-PUB |
| "2ω = 34.7°–12.5°" | 2 × published ω |
| "4 ASPHERICAL SURFACES" | F-COUNTS |
| focalLengthDesign | F-EFL |
| apertureDesign | 表1 FNO at W |
| element `fl` | F-ELEMENT-FL |
| header β and focus numbers | F-FOCUS-RECON |
| header 18.69 / 19.16 mm and 95.4 % | MD-11 / F-GEOM |

Manual interpretive check:
- The data-file role strings were limited to positional and sign descriptions.
- The only interpretive labels are the SR-candidate qualifier (inference, flagged) and the CaF2 inference (Equivalent label, flagged).

## 11. Product correlation

- Applicant is Nikon Corporation; priority date 2025-02-14 precedes the 2026-02-24 announcement.
- Patent Example 1 has 18 lens elements with two cemented doublets → 16 air-separated groups, matching 18/16 (plane filter FL excluded from the count).
- Constant TL (221.226 at W/M/T) and fixed G1 match the manufacturer's internal-zoom description.
- Two focus groups (G5, G6) moving on different trajectories match the 'multi-focusing system'.
- Three aspheric elements (L42 double-sided, L45 front, L71 front) match '1 aspherical ED + 2 aspherical lens' in count.
- Low-dispersion coordinates: L13 1.43384/95.24 ≈ calcium fluoride (fluorite count 1); L33 1.43700/95.1 (FCD100-class, Super-ED-class candidate); L42 1.49710/81.56 aspheric (aspherical ED candidate); L44 1.49782/82.57 (ED-class candidate). Counts match 1 fluorite + 1 Super ED + 1 aspherical ED + 1 ED.
- f 71.402–195.996 mm, FNO 2.891–2.905 consistent with a 70–200 mm f/2.8 product.
- Patent 2ω = 34.73°/12.48° vs manufacturer 34.33°/12.33°: close, with the residual attributable to rounding/distortion conventions (not independently resolved).

Contradictions and limits:
- Nikon UK product page describes 'two dual-sided aspherical lens elements'. In Example 1 only L42 is aspheric on both faces; L45 and L71 have one aspheric face each. → Marketing wording or a production change; Example 1 is retained as published. Record in analysis as an unresolved difference, not a source correction.
- SR element identity is not stated in the patent. L41 (1.62200/30.66, θgF 0.625), singled out by conditions (8)–(10), is a plausible but unconfirmed SR candidate. → Inference only; do not label L41 as SR in data without qualification.
- Vibration-reduction group is not identified in the patent. → No VR group may be asserted from patent evidence.
- No Nikon primary source links WO 2026/172598 Example 1 to the production lens. The correlation is convergent-evidence based, not manufacturer-confirmed.

## 12. Open issues

Stage 1 issues:

- **OI-01:** Δ2Z typo. Optional limitation; unchanged.
- **OI-02:** close focus. Implemented as a reconstruction (MD-09).
- **OI-03:** stop and SDs. Modeled (MD-10, MD-11).
- **OI-04:** real-ray field. Resolved (PASS).
- **OI-05:** VR group not identified; SR element inferred only. Unchanged.
- **OI-06:** "two dual-sided aspherical" wording. Unchanged; note it in the analysis.
- **OI-07:** repository checks. Targeted checks pass; full integration is pending.
- **OI-08:** authoring guide and integration handoff not supplied.

New at Stage 2:

- **OI-09:** interpolated intermediate-zoom defocus. Disclosed limitation.
- **OI-10:** `gapSagFrac` 0.96 per-lens override. Documented exception.

## 13. Independent review

Not performed during Stages 1–3. The Stage 4 source-first audit is recorded in §16.

## 14. Gate disposition

All mandatory Stage 1 and Stage 2 CHAT_PREFLIGHT checks pass, and the targeted LENSVISUALIZER checks that were run also pass. No substantive blocker is open.

**Gate: READY_FOR_ANALYSIS.** It is bound to the data/evidence/verifier/results hashes in the manifest's `stage2Checkpoint`. integrationStatus: INTEGRATION_PENDING.


## 15. Stage 3 — analysis authoring

### 15.1 Entry gate

- **Input identity.** All nine uploaded Stage 2 files matched the `stage2Checkpoint` hashes (data `d89aef84…6165`, evidence `8c9ab560…11d9`, verifier `31189abf…79d0`, results `c7b66429…f36e7`). The uploads again used underscore names; they were copied to the dot names byte-for-byte. All 14 project references have unchanged hashes. The repository `LENS_ANALYSIS_SPEC.md` is byte-identical to the project copy.
- **Replay of the Stage 2 verifier.** Without `--lv-repo`: exit 0, with the six LensVisualizer checks NOT_RUN by design. With a fresh read-only clone of the repository (HEAD `fee638fc`, `npm ci --ignore-scripts`): 96/96 PASS. Every stable section of `results.json` (`sourceModel`, `implementedModel`, `comparisons`, `checks`, `facts`, `limitations`, `summary`) was equal to the packaged Stage 2 file.
- **Gate status.** The data file was confirmed as the approved revision, and the READY_FOR_ANALYSIS checkpoint remained valid.

### 15.2 Data disposition

**The data file did not change during Stage 3.** Its bytes, its hash and its Prettier `--check` result (project `prettierrc.json`, Prettier 3.8.1) are unchanged. No analysis finding exposed a data or source-model error, so the upstream-correction rule was not triggered.

### 15.3 Evidence changes (additive only)

Each of the following additions is recorded in `evidence.json`. No raw prescription value, ledger entry or model input was altered. The Stage 1/2 portions of `results.json` regenerated identically afterwards, as did all 96 prior checks.

- **`rawPrescription.conditions.narrowestPreferredLimits`.** The narrowest preferred sub-limits for conditions (1), (8), (9), (10) and (11), from ¶0018–0019, ¶0050–0051, ¶0054–0055, ¶0058–0059 and ¶0068–0069, with locators.
- **`sources[SRC-PATENT].stage3PassagesRead`.** The passages read for the interpretive prose (¶0002–0151 ranges), with the read method.
- **`sources[SRC-NIKON-PRODUCT|SRC-NIKON-NEWS].stage3Recheck`.** A 2026-10-01 re-check through search excerpts. It confirmed the construction count, special elements, angle of view, minimum focus distances, 0.3×, VR 5.5/6.0 stops and the weight-reduction wording.
- **`sources[SRC-NIKON-MK1]` and two `productCorrelation.manufacturerFacts` rows.** The predecessor's specification (21/18; 6 ED, 2 aspherical, 1 fluorite, 1 SR; 0.5/1.0 m; 0.2×) and Nikon's attribution of the weight reduction.
- **`openIssues`.**
  - **OI-08 resolved for Stage 3.** The repository `agent_docs/adding_a_lens.md` and `agent_docs/lens-data-integration-handoff.md` were found and consulted read-only.
  - **New OI-11.** The two-decimal θgF cannot sign the g–F focus separation.

### 15.4 Verifier changes

`verify.py` gains a Stage 3 branch, `stage3()`. Stage derivation now returns 3 when the analysis file is present, and `requiredAt: stage3` checks become mandatory. The Stage 1 and Stage 2 code paths are untouched.

New computations, all from the parsed `.data.ts` and evidence:

- **Chromatic accounting.** A first-order axial-color calculation per element, per group and for the system. Each element's index is advanced by Δn = (nd − 1)/νd, i.e. from the C-line to the F-line index, and the derivative of the paraxial image distance is taken. This is cross-checked against an independently coded Welford primary axial-colour sum (C = n·i·y·Δ(δn/n), δl′ = −ΣC/(n′u′²)). The two agree to 1e-6 mm for every element at W, M and T (`chk.chromatic.methods`).
- **g–F estimate.** The g–F focus separation is estimated from the table θgF, with worst-case bounds of ±0.005 (L41 ±0.0005).
- **Petzval by group.** Computed surface by surface as φ/(n·n′); the sum equals `implementedModel.petzval`.
- **ΔPgF.** Computed against the engine normal line 0.6438 − 0.001682·νd, from both the table θgF and the catalog PgF.
- **Element and doublet focal lengths.** Recomputed independently as thick standalone values (D1 −52.0489 mm, D2 +64.9317 mm).
- **Asphere departures.** Recomputed at the modeled semi-diameters.

New checks (all PASS):

| Check | What it tests |
| --- | --- |
| `chk.analysis.structure` | Portable re-implementation of the repository analysis-file floor, plus LENS_ANALYSIS_SPEC section order and ≤ 650 lines |
| `chk.analysis.metadata` | Bold-label block vs data `patentNumber`/`patentAuthors`/`patentAssignees`/`patentYear` and evidence SRC-PATENT |
| `chk.analysis.elements` | 18 element first lines: nd/νd raw text, data glass label, fresh f to 0.1 mm, heading, type string |
| `chk.analysis.claims` | 156 quantitative claim strings regenerated from data/evidence/this run and found verbatim |
| `chk.analysis.language` | No marketing vocabulary; νd only; APO only as a disclaimer; 12 required disclosure phrases |
| `chk.analysis.mutationDetected` | One-token mutations of a claim value, an element f, a metadata name and a section heading each fail |
| `chk.chromatic.methods` | Two-method agreement of the chromatic accounting |

The repository corpus test `__tests__/src/lens-data/analysisFiles.test.ts` was **not run**, because it sweeps the corpus. Its five assertions are re-implemented portably in `chk.analysis.structure`, and that test remains an integration-stage check.

### 15.5 Quantitative-claim map

Each row is regenerated by `verify.py` from the governing source on every run. The data revision is `d89aef84…6165`; the source is WO 2026/172598 A1 as recorded in `evidence.json`; the run-time results are in `results.json`. Element first lines (nd, νd, glass, f) for all 18 elements are covered separately by `chk.analysis.elements`.

| Claim ID | Analysis section | Expected text (verbatim) | Governing source / computation | Status |
| --- | --- | --- | --- | --- |
| `doublet.D1` | Element-by-Element (D1, D2) | −52.05 mm | fresh ABCD, surfaces 20–22 | PASS |
| `doublet.D2` | Element-by-Element (D1, D2) | +64.93 mm | fresh ABCD, surfaces 23A–25 | PASS |
| `G1.elements` | Element-by-Element (G1) | (+327.8 and −294.1 mm) | fresh element f L11, L12 | PASS |
| `L13.f` | Element-by-Element (L13) | L13 alone (+135.6 mm) | fresh element f L13 | PASS |
| `L13.thickest` | Element-by-Element (L13) | thickest element in the prescription (12.30 mm) | data d; max | PASS |
| `L43.strongestNegative` | Element-by-Element (D1) | L43 is the strongest negative element in the system | shortest negative focal length = L43 | PASS |
| `D1.junction` | Element-by-Element (D1) | The junction (R 28.38 mm) is the most strongly curved interface in G4 | data R; min |R| in G4 | PASS |
| `efl.table` | Optical Architecture | \| EFL, computed (mm) \| 71.404 \| 135.000 \| 196.005 \| | implementedModel.firstOrder (ABCD = y-nu) | PASS |
| `efl.published` | Optical Architecture | \| EFL, published (mm) \| 71.402 \| 134.997 \| 195.996 \| | evidence systemData f | PASS |
| `efl.residuals` | Optical Architecture | (+0.002, +0.003 and +0.009 mm) | implementedModel.firstOrder − evidence | PASS |
| `distortion` | Optical Architecture | \| −2.82 % \| +0.96 % \| +1.28 % \| | implementedModel.realField | PASS |
| `chiefY` | Optical Architecture | within 0.002 mm of Y = 21.70 mm | implementedModel.realField | PASS |
| `tl.physical` | Optical Architecture / Identification | \| Physical length, surface 1 to image (mm) \| 221.771 \| 221.772 \| 221.771 \| | implementedModel.firstOrder | PASS |
| `tl.ratio` | Optical Architecture / Identification | \| Length / EFL \| 3.11 \| 1.64 \| 1.13 \| | implementedModel.firstOrder | PASS |
| `bf` | Optical Architecture | 30.979 mm | implementedModel.firstOrder.bfAirEquivalent | PASS |
| `tl.air` | Optical Architecture / Identification | 221.226 mm | implementedModel.firstOrder.tlAirEquivalent | PASS |
| `stop.sd` | Optical Architecture | (17.96 mm) | implementedModel.stop | PASS |
| `stop.fno` | Optical Architecture | f/2.9040 at M and f/2.9047 at T | implementedModel.stop | PASS |
| `stop.position` | Optical Architecture | 3.46 mm behind L42 and 6.57 mm ahead of L43 | data d 18A, STO | PASS |
| `G2.travel` | Optical Architecture | G2 moves 48.940 mm | data var D6 | PASS |
| `G3.travel` | Optical Architecture | G3 moves 43.009 mm | data var D6+D8 | PASS |
| `D8` | Optical Architecture | from 16.234 to 10.303 mm | data var D8 | PASS |
| `D14` | Optical Architecture | from 44.546 to 1.537 mm | data var D14 | PASS |
| `GM` | Optical Architecture | from −43.673 mm at wide to −44.873 mm at tele | sourceModel.intermediateGroup | PASS |
| `G5.pos` | Optical Architecture | G5 sits 3.004, 5.450 and 3.287 mm behind G4 | data var D27 | PASS |
| `G6.pos` | Optical Architecture | G6 sits 37.363, 36.248 and 37.977 mm behind G4 | data var D27 + G5 thicknesses + D31 | PASS |
| `groups.residual` | Optical Architecture | within 0.0014 mm of the printed values | comparisons cmp.group.* (this run) | PASS |
| `petz.sum` | Aberration Correction Strategy | is 0.000893 mm⁻¹, corresponding to a Petzval radius of −1119 mm | fresh Petzval; equals implementedModel.petzval | PASS |
| `petz.groups` | Aberration Correction Strategy | \| +5.20 \| −7.79 \| −7.77 \| +20.19 \| −10.56 \| +9.27 \| −7.63 \| | fresh Petzval by group | PASS |
| `petz.posneg` | Aberration Correction Strategy | positive groups contribute +34.66 and the negative groups −33.76 | fresh Petzval by group | PASS |
| `petz.residual` | Aberration Correction Strategy | leaving a residual under 3 % of either | fresh | PASS |
| `petz.G7` | Aberration Correction Strategy | G7 alone offsets more than a third of G4's contribution | fresh | PASS |
| `petz.G5G6` | Aberration Correction Strategy | G5 offsets more than G6 adds | fresh | PASS |
| `chrom.G1` | Chromatic Correction Strategy | \| G1 \| −0.043 \| −0.154 \| −0.324 \| | implementedModel.chromaticAccounting | PASS |
| `chrom.G2` | Chromatic Correction Strategy | \| G2 \| +0.891 \| +1.786 \| +2.595 \| | implementedModel.chromaticAccounting | PASS |
| `chrom.G3` | Chromatic Correction Strategy | \| G3 \| −0.920 \| −1.690 \| −2.339 \| | implementedModel.chromaticAccounting | PASS |
| `chrom.G4` | Chromatic Correction Strategy | \| G4 \| −0.326 \| −0.236 \| −0.329 \| | implementedModel.chromaticAccounting | PASS |
| `chrom.G5` | Chromatic Correction Strategy | \| G5 \| +0.861 \| +0.813 \| +0.857 \| | implementedModel.chromaticAccounting | PASS |
| `chrom.G6` | Chromatic Correction Strategy | \| G6 \| −0.650 \| −0.704 \| −0.622 \| | implementedModel.chromaticAccounting | PASS |
| `chrom.G7` | Chromatic Correction Strategy | \| G7 \| +0.212 \| +0.212 \| +0.212 \| | implementedModel.chromaticAccounting | PASS |
| `chrom.system` | Chromatic Correction Strategy | \| System, including FL \| +0.030 \| +0.034 \| +0.056 \| | implementedModel.chromaticAccounting | PASS |
| `chrom.W.L43` | Chromatic Correction Strategy | L43 contributes +8.706 mm at W | implementedModel.chromaticAccounting.W | PASS |
| `chrom.W.L41` | Chromatic Correction Strategy | L41 (−3.833 mm) | implementedModel.chromaticAccounting.W | PASS |
| `chrom.W.L45` | Chromatic Correction Strategy | L45 (−2.260 mm) | implementedModel.chromaticAccounting.W | PASS |
| `chrom.W.L47` | Chromatic Correction Strategy | L47 (−2.130 mm) | implementedModel.chromaticAccounting.W | PASS |
| `chrom.W.L42` | Chromatic Correction Strategy | L42 (−1.490 mm) | implementedModel.chromaticAccounting.W | PASS |
| `chrom.W.L44` | Chromatic Correction Strategy | L44 (−0.903 mm) | implementedModel.chromaticAccounting.W | PASS |
| `chrom.W.L46` | Chromatic Correction Strategy | L46 adding +1.583 mm | implementedModel.chromaticAccounting.W | PASS |
| `chrom.G4range` | Chromatic Correction Strategy | between −0.236 and −0.329 mm | implementedModel.chromaticAccounting | PASS |
| `chrom.G1range` | Chromatic Correction Strategy | from −0.043 mm to −0.324 mm | implementedModel.chromaticAccounting | PASS |
| `chrom.residual` | Chromatic Correction Strategy | under 0.06 mm throughout the zoom range | implementedModel.chromaticAccounting | PASS |
| `chrom.G2G3cancel` | Chromatic Correction Strategy | (computed relation) | sign(G2) = −sign(G3), |G2|,|G3| increase W→T | PASS |
| `chrom.L32dominant` | Chromatic Correction Strategy | (computed relation) | |L32| largest within G3 | PASS |
| `chrom.gF` | Chromatic Correction Strategy | g–F focus separation of +0.092, +0.075 and +0.098 mm | implementedModel.chromaticAccounting | PASS |
| `chrom.gF.W` | Chromatic Correction Strategy | at W runs from −0.046 to +0.231 mm | implementedModel.chromaticAccounting | PASS |
| `chrom.gF.M` | Chromatic Correction Strategy | −0.098 to +0.247 mm at M | implementedModel.chromaticAccounting | PASS |
| `chrom.gF.T` | Chromatic Correction Strategy | −0.111 to +0.308 mm at T | implementedModel.chromaticAccounting | PASS |
| `dPgF.L13` | Glass Identification / L41 / L21 | \| L13 \| 1.43384 / 95.24 \| 0.54 \| +0.056 \| +0.055 \| | fresh: evidence θgF / sourceModel.glass PgF vs 0.6438 − 0.001682·νd | PASS |
| `dPgF.L33` | Glass Identification / L41 / L21 | \| L33 \| 1.43700 / 95.1 \| 0.53 \| +0.046 \| +0.050 \| | fresh: evidence θgF / sourceModel.glass PgF vs 0.6438 − 0.001682·νd | PASS |
| `dPgF.L42` | Glass Identification / L41 / L21 | \| L42 \| 1.49710 / 81.56 \| 0.54 \| +0.033 \| +0.032 \| | fresh: evidence θgF / sourceModel.glass PgF vs 0.6438 − 0.001682·νd | PASS |
| `dPgF.L44` | Glass Identification / L41 / L21 | \| L44 \| 1.49782 / 82.57 \| 0.54 \| +0.035 \| +0.034 \| | fresh: evidence θgF / sourceModel.glass PgF vs 0.6438 − 0.001682·νd | PASS |
| `dPgF.L41` | Glass Identification / L41 / L21 | \| L41 \| 1.62200 / 30.66 \| 0.625 \| +0.033 \| +0.033 \| | fresh: evidence θgF / sourceModel.glass PgF vs 0.6438 − 0.001682·νd | PASS |
| `dPgF.L46` | Glass Identification / L41 / L21 | \| L46, L51 \| 1.80809 / 22.74 \| 0.63 \| +0.024 \| +0.023 \| | fresh: evidence θgF / sourceModel.glass PgF vs 0.6438 − 0.001682·νd | PASS |
| `dPgF.L21` | Glass Identification / L41 / L21 | \| L21 \| 1.55298 / 55.07 \| 0.54 \| −0.011 \| −0.006 \| | fresh: evidence θgF / sourceModel.glass PgF vs 0.6438 − 0.001682·νd | PASS |
| `dPgF.L41max` | Glass Identification / L41 / L21 | larger than the deviation of any other flint in the prescription | fresh dPgF over νd < 50 elements | PASS |
| `dPgF.L41` | Glass Identification / L41 / L21 | this is ΔPgF = +0.033 | fresh (catalog PgF 0.6248) | PASS |
| `dPgF.L21text` | Glass Identification / L41 / L21 | catalog ΔPgF −0.006 | fresh | PASS |
| `glass.identical` | Glass Identification | Fifteen of the eighteen element coordinates | sourceModel.glass coordinateIdentical | PASS |
| `caf2.nd` | Element-by-Element (L13) | to within 0.00001 | sourceModel.caf2Reference | PASS |
| `caf2.pgf` | Element-by-Element (L13) | (PgF 0.5387, which rounds to 0.54) | sourceModel.caf2Reference | PASS |
| `fcd100.pgf` | Element-by-Element (L13) | (0.5336, which rounds to 0.53) | sourceModel.glass L33 | PASS |
| `caf2.vd` | Element-by-Element (L13) | Malitson value of 95.00 | sourceModel.caf2Reference | PASS |
| `focus.W` | Focus Mechanism | \| W (71.4 mm) \| 0.38 m \| 5.105 mm \| 4.423 mm \| 8.109 / 19.9307 / 10.0483 \| −0.300 \| | implementedModel.focusReconstruction | PASS |
| `focus.M` | Focus Mechanism | \| M (135.0 mm) \| 0.60 m \| 8.747 mm \| 6.959 mm \| 14.1968 / 10.1925 / 13.6987 \| −0.253 \| | implementedModel.focusReconstruction | PASS |
| `focus.T` | Focus Mechanism | \| T (196.0 mm) \| 0.80 m \| 12.785 mm \| 9.265 mm \| 16.0724 / 7.7394 / 14.2762 \| −0.250 \| | implementedModel.focusReconstruction | PASS |
| `focus.rule` | Focus Mechanism | (−0.7956) | implementedModel.focusReconstruction W/T | PASS |
| `focus.band` | Focus Mechanism | (about −0.248 to −0.258) | sourceModel.focusExploration.M | PASS |
| `focus.residual` | Focus Mechanism | below 0.0002 mm | implementedModel.focusReconstruction | PASS |
| `focus.interp` | Focus Mechanism | reaches 2.22 mm | implementedModel.focusInterpolationSamples | PASS |
| `focus.mid` | Focus Mechanism | (EFL 98.3 mm) the interpolated minimum focus distance is 0.49 m | implementedModel.focusInterpolationSamples | PASS |
| `focus.inf` | Focus Mechanism | 3.004/29.459/5.625 mm (W), 5.450/25.898/6.740 mm (M) and 3.287/29.790/5.011 mm (T) | data var infinity | PASS |
| `focus.G5growth` | Focus Mechanism | from 5.1 mm at W to 12.8 mm at T | implementedModel.focusReconstruction | PASS |
| `asph.17A` | Aspherical Surfaces | \| 17A \| L42 front \| 51.0231 \| −1.14012E-06 \| −3.66784E-11 \| — \| — \| | evidence rawText; data R | PASS |
| `asph.18A` | Aspherical Surfaces | \| 18A \| L42 rear \| −515.3446 \| 1.30042E-06 \| 1.61832E-10 \| −1.7047E-13 \| — \| | evidence rawText; data R | PASS |
| `asph.23A` | Aspherical Surfaces | \| 23A \| L45 front \| 52.6942 \| −1.60023E-06 \| 8.51352E-11 \| −5.5987E-13 \| — \| | evidence rawText; data R | PASS |
| `asph.34A` | Aspherical Surfaces | \| 34A \| L71 front \| −34.6941 \| 5.46682E-06 \| 2.52568E-10 \| 4.7014E-12 \| −4.3092E-15 \| | evidence rawText; data R | PASS |
| `asphdep.17A` | Aspherical Surfaces | \| 17A \| 20.30 \| −196.2 \| | fresh sag difference at data sd (equals implementedModel.asphereDepartures) | PASS |
| `asphdep.18A` | Aspherical Surfaces | \| 18A \| 19.70 \| +201.5 \| | fresh sag difference at data sd (equals implementedModel.asphereDepartures) | PASS |
| `asphdep.23A` | Aspherical Surfaces | \| 23A \| 17.10 \| −138.8 \| | fresh sag difference at data sd (equals implementedModel.asphereDepartures) | PASS |
| `asphdep.34A` | Aspherical Surfaces | \| 34A \| 15.55 \| +335.7 \| | fresh sag difference at data sd (equals implementedModel.asphereDepartures) | PASS |
| `cond.1` | Conditional Expressions | \| 0.71 \| 0.709 \| | checks chk.cond.1 | PASS |
| `cond.2` | Conditional Expressions | \| 0.43 \| 0.434 \| | checks chk.cond.2 | PASS |
| `cond.3` | Conditional Expressions | \| 0.57 \| 0.574 \| | checks chk.cond.3 | PASS |
| `cond.4` | Conditional Expressions | \| 1.24 \| 1.236 \| | checks chk.cond.4 | PASS |
| `cond.5` | Conditional Expressions | \| 2.56 \| 2.563 \| | checks chk.cond.5 | PASS |
| `cond.6` | Conditional Expressions | \| 0.16 \| 0.158 \| | checks chk.cond.6 | PASS |
| `cond.7` | Conditional Expressions | \| 3.10 \| 3.098 \| | checks chk.cond.7 | PASS |
| `cond.11` | Conditional Expressions | \| 0.879 \| 0.879 \| | checks chk.cond.11 | PASS |
| `cond.15` | Conditional Expressions | \| 0.30 \| 0.302 \| | checks chk.cond.15 | PASS |
| `cond.16` | Conditional Expressions | \| 0.96 \| 0.958 \| | checks chk.cond.16 | PASS |
| `cond.17` | Conditional Expressions | \| 0.31 \| 0.311 \| | checks chk.cond.17 | PASS |
| `cond.18` | Conditional Expressions | \| 0.98 \| 0.984 \| | checks chk.cond.18 | PASS |
| `narrow.1` | Conditional Expressions | \| (1) \| 0.22 – 0.75 \| ¶0018–0019 \| 0.709 \| | evidence narrowestPreferredLimits; checks chk.cond.* | PASS |
| `narrow.8` | Conditional Expressions | \| (8) \| 1.61 – 1.68 \| ¶0050–0051 \| 1.622 \| | evidence narrowestPreferredLimits; checks chk.cond.* | PASS |
| `narrow.9` | Conditional Expressions | \| (9) \| 27.00 – 30.80 \| ¶0054–0055 \| 30.66 \| | evidence narrowestPreferredLimits; checks chk.cond.* | PASS |
| `narrow.10` | Conditional Expressions | \| (10) \| 0.620 – 0.635 \| ¶0058–0059 \| 0.625 \| | evidence narrowestPreferredLimits; checks chk.cond.* | PASS |
| `narrow.11` | Conditional Expressions | \| (11) \| 0.75 – 0.95 \| ¶0068–0069 \| 0.879 \| | evidence narrowestPreferredLimits; checks chk.cond.* | PASS |
| `delta2Z` | Conditional Expressions | G2 travel of 48.940 mm | checks chk.disc.delta2Z | PASS |
| `edge.L47` | Element-by-Element (L47) | (1.27 mm at the modeled semi-diameter) | implementedModel.geometry.edges | PASS |
| `gap.1213` | Verification Summary / Architecture | reaches 95.4 % | implementedModel.geometry.worstGap | PASS |
| `sd.G5` | Element-by-Element (G5) / Design Heritage | (11.6–13.45 mm semi-diameter) | data sd | PASS |
| `sd.focus` | Element-by-Element (G5) / Design Heritage | at most 15.4 mm | data sd | PASS |
| `R.L11` | Element-by-Element | rear radius (1994.3 mm) | data R s2 | PASS |
| `R.L12` | Element-by-Element | (80.09 and 58.62 mm) | data R s3, s4 | PASS |
| `R.L32` | Element-by-Element | (61.70 and 199.94 mm) | data R s11, s12 | PASS |
| `R.L33` | Element-by-Element | (R −65.63 mm) sits 3.78 mm behind L32 | data R s13, d12 | PASS |
| `d35` | Element-by-Element (L71) | It sits 29.75 mm ahead of the filter plate FL | data d35 | PASS |
| `FL` | Element-by-Element (FL) | (nd = 1.51680, νd = 64.13, 1.60 mm, J-BK7A-class) | data rearPlates | PASS |
| `D37` | Verification Summary | D37 = 0.174 mm | data rearPlates.gapAfterMm | PASS |
| `sd.1213` | Element-by-Element (G5) / Design Heritage | at 18.72 mm | data sd s12/s13 | PASS |
| `gap.D12` | Verification Summary / Architecture | into the 3.78 mm gap | data d12 | PASS |
| `sfh8.pgf` | Conditional Expressions / L41 | J-SFH8 catalog value is 0.6248 | sourceModel.glass L41 | PASS |
| `dPgF.about001` | Glass Identification / L41 / L21 | about 0.01 larger than theirs | fresh: table 0.0083, catalog 0.0093 | PASS |
| `gap.constant` | Verification Summary / Architecture | constant to within 0.001 mm | checks chk.gap.G1toG4/G4toG7 | PASS |
| `fno.row` | Optical Architecture | \| FNO, published \| 2.891 \| 2.904 \| 2.905 \| | evidence systemData FNO | PASS |
| `omega.row` | Optical Architecture | \| Half-field ω, published \| 17.365° \| 9.046° \| 6.238° \| | evidence systemData ω | PASS |
| `tl.src` | Optical Architecture / Identification | 221.226 mm at all three published states | evidence systemData TL | PASS |
| `grouptable.G1` | Optical Architecture | \| +144.437 \| | evidence groupData rawText | PASS |
| `grouptable.G2` | Optical Architecture | \| −82.865 \| | evidence groupData rawText | PASS |
| `grouptable.G3` | Optical Architecture | \| −116.883 \| | evidence groupData rawText | PASS |
| `grouptable.G4` | Optical Architecture | \| +45.608 \| | evidence groupData rawText | PASS |
| `grouptable.G5` | Optical Architecture | \| −54.313 \| | evidence groupData rawText | PASS |
| `grouptable.G6` | Optical Architecture | \| +64.803 \| | evidence groupData rawText | PASS |
| `grouptable.G7` | Optical Architecture | \| −83.234 \| | evidence groupData rawText | PASS |
| `condrange.1` | Conditional Expressions | \| 0.01 – 2.00 \| 0.71 \| | evidence conditions range/example rawText | PASS |
| `condrange.2` | Conditional Expressions | \| 0.10 – 1.50 \| 0.43 \| | evidence conditions range/example rawText | PASS |
| `condrange.3` | Conditional Expressions | \| 0.10 – 1.50 \| 0.57 \| | evidence conditions range/example rawText | PASS |
| `condrange.4` | Conditional Expressions | \| 0.10 – 2.50 \| 1.24 \| | evidence conditions range/example rawText | PASS |
| `condrange.5` | Conditional Expressions | \| 0.50 – 15.00 \| 2.56 \| | evidence conditions range/example rawText | PASS |
| `condrange.6` | Conditional Expressions | \| 0.01 – 0.40 \| 0.16 \| | evidence conditions range/example rawText | PASS |
| `condrange.7` | Conditional Expressions | \| 1.00 – 5.00 \| 3.10 \| | evidence conditions range/example rawText | PASS |
| `condrange.8` | Conditional Expressions | \| 1.50 – 1.80 \| 1.622 \| | evidence conditions range/example rawText | PASS |
| `condrange.9` | Conditional Expressions | \| 22.00 – 35.00 \| 30.66 \| | evidence conditions range/example rawText | PASS |
| `condrange.10` | Conditional Expressions | \| 0.60 – 0.66 \| 0.625 \| | evidence conditions range/example rawText | PASS |
| `condrange.11` | Conditional Expressions | \| 0.50 – 1.20 \| 0.879 \| | evidence conditions range/example rawText | PASS |
| `condrange.12` | Conditional Expressions | \| 1.50 – 1.80 \| 1.622 \| | evidence conditions range/example rawText | PASS |
| `condrange.13` | Conditional Expressions | \| 22.00 – 35.00 \| 30.66 \| | evidence conditions range/example rawText | PASS |
| `condrange.14` | Conditional Expressions | \| 0.60 – 0.66 \| 0.625 \| | evidence conditions range/example rawText | PASS |
| `condrange.15` | Conditional Expressions | \| 0.05 – 1.00 \| 0.30 \| | evidence conditions range/example rawText | PASS |
| `condrange.16` | Conditional Expressions | \| 0.10 – 1.50 \| 0.96 \| | evidence conditions range/example rawText | PASS |
| `condrange.17` | Conditional Expressions | \| 0.05 – 1.00 \| 0.31 \| | evidence conditions range/example rawText | PASS |
| `condrange.18` | Conditional Expressions | \| 0.10 – 1.50 \| 0.98 \| | evidence conditions range/example rawText | PASS |
| `condrange.19` | Conditional Expressions | \| 0.10 – 1.50 \| 0.43 \| | evidence conditions range/example rawText | PASS |
| `condrange.20` | Conditional Expressions | \| 0.01 – 0.40 \| 0.16 \| | evidence conditions range/example rawText | PASS |
| `condrange.21` | Conditional Expressions | \| 1.00 – 5.00 \| 3.10 \| | evidence conditions range/example rawText | PASS |
| `d2z.raw` | Conditional Expressions | prints Δ2Z = 48.949 | evidence systemData.delta2Z rawText | PASS |

**Unmapped numbers (manual review).** A token scan listed every decimal number in the analysis not contained in a mapped claim string. Each was classified by hand into one of the following groups:

- **Patent source values, verified against `evidence.json`.** FNO and ω in prose, the conditional-expression ranges in prose, Δ2Z, κ = 1.0000, and the published EFL in the identification list.
- **Element nd/νd/f.** Covered by `chk.analysis.elements`.
- **Data-file restatements.** These match the data file: the modeled-SD policy constants 1.04, 0.6, 0.5 and 0.05 (MD-11), the 0.90 default gap allowance, and the plate D37 = 0.174.
- **Manufacturer values, verified against `productCorrelation.manufacturerFacts`.**
  - The 0.38/0.5/0.6/0.8 m minimum focus distances.
  - 0.3× and 0.25×.
  - 5.5/6.0 VR stops.
  - The predecessor's 0.5/1.0 m and 0.2×.
  - f/2.8.
- **Definitional constants.** 0.6438, 0.001682, ±0.005 and ±0.0005.
- **Narrowest limits.** Mapped through `narrow.*`.

No number was left unclassified.

### 15.6 Manual interpretive and citation review

Every interpretive statement was checked against the patent passage it cites, as read from rasterized pages. Each item below records how its wording was resolved.

- **Lens A.** Lens A is the most object-side lens of G4 (¶0060, ¶0114). Condition (8) is explained by lower specific gravity and suppressed zoom variation of spherical aberration (¶0049, repeated at ¶0076). Conditions (9)/(10) serve chromatic correction (¶0053, ¶0057).
- **G1 form.** The convex–concave–convex front group is explained by light weight with high performance (¶0025–0026).
- **G5/G6 reversals.** The reversing paths suppress zoom variation of field curvature (¶0061–0064). The data reproduces both reversals.
- **Condition (11).** It controls the zoom variation of spherical aberration, coma and field curvature (¶0067).
- **Negative final group.** It gives compactness with field-curvature correction (¶0070–0071).
- **Focus data.** The variable-gap table gives infinity states only (¶0136). Focus directions are stated in ¶0140.
- **Asphere sag convention.** Equation (A), ¶0134–0135; sag is measured from the tangent plane.
- **Prior art.** JP 2023-033649 A, cited in ¶0003, is not characterized.
- **Asphere effects.** The per-surface statements are worded as geometric consequences of departure sign and position. They are explicitly marked as not patent statements and not a computed aberration decomposition.
- **Chromatic statements.** These rest only on the computed accounting. No APO, secondary-spectrum or anomalous-dispersion performance claim is made, and the g–F bounds straddle zero at all states (OI-11).
- **SR (L41), Super ED (L33), aspherical ED (L42) and ED (L44).** Each is worded as the most plausible coordinate-based assignment, not as a Nikon statement.
- **VR.** The analysis states that no VR group is identified. The Nikon UK "two dual-sided aspherical" wording is reported as an unresolved difference.
- **Design Heritage.** The section uses Nikon specifications only. It makes no quantitative comparison with the corpus Mark I prescription (WO 2020/105104 A1), which was not re-verified.
- **Source precedence.** No third-party value overrides a Nikon value. The 0.25× tele ratio is identified as coming from announcement coverage and absent from the product page.
- **Citations.** The Sources list gives conventional references: the patent with paragraph/page locators, three Nikon pages with URLs and access dates, Malitson (1963), and the catalog set with package version.

### 15.7 Stage 3 gate disposition

The analysis agrees with the verified data revision and its supporting results.

- **CHAT_PREFLIGHT.** All 103 checks pass: 96 from Stages 1–2, reproduced identically, and 7 new Stage 3 checks.
- **LENSVISUALIZER.** The six targeted checks pass against `fee638fc`.
- **Not run at integration level.** `generate:metadata`, corpus sweeps (including the analysis-file corpus test), batch glass reports and the production build.

**Gate: READY_FOR_AUDIT.** integrationStatus: INTEGRATION_PENDING. Stage 4 (fresh source-first audit) has not begun.

## 16. Stage 4 — source-first independent audit

Lens Patent — Nikon Nikkor Z 70-200mm f/2.8 VR S II — 4 Audit. Performed 2026-10-01 in a claude.ai project chat.

### 16.1 Scope, references and exposure

Inputs consumed (SHA-256 of the files as uploaded, legacy underscore names): data.ts `d89aef84…796165`, analysis.md `54f95aed…46564c`, evidence.json `cccb89a1…bad`, results.json `4932a6a2…d0`, audit.md `60c14653…e1`, manifest.json `a9a8e69b…dc`, verify.py `0b68fa50…f`, lvcheck.mjs `f0310282…0f`, patent `1073732c…e5e2a`, job card `12fb44d3…731c`. The data, evidence, verifier and analysis hashes equal those recorded in the Stage 3 manifest (`stage3-r1`).

Controlling references read: LensPatentChatProtocol.md, LensPatentDossierContract.md, LensPatentStage4Audit.txt, LensPatentWorkflowGuide.md, LENS_DATA_SPEC.md, LENS_ANALYSIS_SPEC.md, defaults.ts, prettierrc.json (project copies). The repository copy of LENS_DATA_SPEC.md at HEAD differs from the project copy; see §16.7.

Exposure. Before the baseline was frozen, the session showed the candidate file names in the upload list, the job-card text, the project specifications and project memory (methodology and conventions only; no values for this lens). No candidate data, analysis, evidence, results, audit, manifest, verifier or lvcheck content was opened before the freeze. This is procedural source and method independence, not blindness: the candidates were present in the session and the reviewer has general product knowledge.

### 16.2 Pass A — independent baseline (frozen before reconciliation)

Extraction. Example 1 was re-read from rasterized pages: PDF pp. 29–35 at 170–220 DPI with 400–600 DPI row strips for Table 1; PDF pp. 68–70 for the conditions list and values; ¶0018–0019, ¶0043–0060, ¶0065–0066 and ¶0085 for definitions and preferred limits. Conventions established independently: d-line nd/νd (¶0133); R positive with centre of curvature on the image side; equation (A) with √(1 − κy²/R²), so K = κ − 1 = 0 for all four aspheres (¶0134–0135); TL and BF air-equivalent from the last lens surface at infinity (¶0132); the "θg / F" header wraps, so the column is θgF to two decimals; surface 19 is the stop ("(絞り)" wraps to the next line); only infinity spacings are published (D0 = ∞, β = −).

Calculation. A new script (sequential y-nu trace plus an independently coded 2×2 ABCD product) and an unseeded nearest-row glass search across 1,087 rows of the OHARA, HOYA, Schott, Sumita, HIKARI and CDGM catalogs (opticalglass 2.0.2; metric √(Δnd² + (Δνd/50)²)). Results: EFL 71.4041 / 135.0001 / 196.0048 mm (printed 71.402 / 134.997 / 195.996); y-nu vs ABCD agreement < 1e-12 mm; TL 221.2259 / 221.2269 / 221.2259 and BF 30.9789 mm; infinity defocus +0.003 / +0.002 / +0.006 mm; seven group focal lengths within 0.0014 mm; G1, G4 and G7 fixed on zoom; G5 and G6 reverse; paraxially calibrated stop semi-diameter 16.856 / 16.860 / 16.863 mm; Petzval sum 0.000893 mm⁻¹; conditions (1)–(7), (11), (15)–(21) round to the printed values; not telephoto (TL/EFL 1.129 at T); not retrofocus. The baseline independently found Δ2Z = 48.940 mm (G2 travel = ΔD6 with G1 fixed, ¶0065–0066) against the printed 48.949.

Freeze. Fingerprint `458da2e60c0b68c37c9d2c41196029fe672d6f71204521cabf7ec39adc9539eb`, frozen 2026-10-01T21:15:04Z (sha256 of the sorted-key map of component digests: inputs.json `2a42d7cc…ba58`, baseline_results.json `4184d766…bb8`, glass_baseline.json `882937bc…998`, baseline.py `b21a00dc…554`, glassmatch.py `0fd225ef…fe2`). The inputs are embedded verbatim in verify.py (`S4_BASELINE_INPUTS`) and in evidence.independentPass; `chk.s4.baseline.integrity` re-hashes them on every run. The digest does not prove review independence.

### 16.3 Pass B — reconciliation (raw patent / baseline / data / analysis)

| View pair | Result |
|---|---|
| Baseline vs evidence.rawPrescription | Identical: R, D, nd, νd and θgF raw text (including "95.1"), variable-gap raw text, aspheres (`chk.s4.source.vsAuthorTranscription`). |
| Baseline vs final data.ts | Identical: 35 surfaces, 18 element nd/νd, six var infinity rows, K = κ − 1 = 0, coefficients, FL rear plate 1.6 mm / 1.51680 / 64.13 / 0.174 mm (`chk.s4.source.vsData`). |
| Modeling transformations | Labels (STO, A suffix), rear plate, modeled SDs, gapSagFrac 0.96 on 12→13, fixed-iris calibration, constrained close focus: documented model choices, not transcription changes. |
| Real-ray (independent tracer) | Wide real marginal ray at the stop 17.9600 mm = data STO sd; fixed iris gives f/2.9040 (M) and f/2.9047 (T); chief ray at published ω lands at 21.6997 / 21.6996 / 21.6983 mm (`chk.s4.realRay`). The 16.86 mm paraxial and 17.96 mm real-ray values are different calibrations of the same iris; buildLens uses the real-ray value. |
| Close focus (independent finite-conjugate solve) | Defocus −0.00012 / 0.0000 / −0.00005 mm; β −0.3000 / −0.2527 / −0.2500; one admissible root at W and T in a coarse grid scan (`chk.s4.closeFocus`). |
| Geometry (independent sag code) | Edge thickness ≥ 1.19 mm (L47 at its own SDs; 1.27 mm at the shared SD); maximum rim slope 37.7° (surface 21); worst gap intrusion 95.4 % on 12→13, all others ≤ 70 % over 231 zoom×focus samples; interpolated zoom states reach 2.22 mm paraxial defocus (disclosed). |
| Analysis numbers | Petzval by group, asphere departures, conditions, distortion, element and doublet powers, G6 offsets behind G4 reproduced. The colour table reproduces only as linearized first-order terms (C-03). |
| Glass | 17 of 18 element labels agree with the unseeded search; L13 CaF2 supported by Malitson nd 1.43385 and PgF 0.5386 → 0.54 (`chk.s4.caf2`); L45 runtime resolution defect (C-01). |

Adversarial tests performed: wrong example/table mixing (Table 1 only; conditions from the Example 1 column); sign and exponent of every coefficient; d- vs e-line (d-line confirmed, ¶0133); κ mapping; scaling (none); inactive planes (stop only; FL is a real plate); synthetic cement (both pairs cemented per ¶0144); element/group counts (18/16 vs Nikon); standalone vs in-situ powers (analysis states standalone); speculative glass identity (labels carry supplier qualifiers); guessed focus law (declared as reconstruction with Nikon MFD and magnifications; mid rule declared); marketing vs design values (zoomPositions use design f; focalLengthMarketing separate); stale prose (manufacturer statements rechecked, §16.4).

### 16.4 Manufacturer re-verification (manufacturer governs hard specifications)

Nikon global specification page (full fetch 2026-10-01): f/22 minimum; 18 elements in 16 groups including 1 ED, 1 Super ED, 1 aspherical ED, 2 aspherical, 1 fluorite and 1 SR; FX angle of view 34°20′–12°20′; MFD 0.38 m (70, 85 mm), 0.5 m (105), 0.6 m (135), 0.8 m (200) from the focal plane; maximum reproduction 0.3× (70 mm); 11 blades; VR 5.5 stops, 6.0 with Synchro VR (CIPA 2024). Nikon Inc. (USA) and Nikon UK product pages (search excerpts): 0.3× at 70 mm and 0.25× at 200 mm; Nikon UK: "two dual-sided aspherical lens elements". Nikon news release 2026-02-24 (excerpt): weight reduction by a modified front-group configuration and removal of mechanical components in the moving groups; element count reduced with newly adopted Super ED and aspherical ED elements. Third-party reports that swap the two ratios (0.25× wide, 0.3× tele) are disregarded in favour of Nikon.

### 16.5 Corrections register (Stage 4)

| ID | File / location | Old | New | Source / evidence | Downstream |
|---|---|---|---|---|---|
| C-01 | data.ts `elements[L45].glass`; analysis L45 first line and D2 paragraph | `MP-PCD51-70 (HOYA) — 593670 class; not coordinate-identical, supplier/melt unresolved` | `J-PSKH4 (HIKARI) — 593670 class; not coordinate-identical (Δnd +0.00043), supplier/melt unresolved` | Real `explainCompatibleGlassResolution` at 9b5ed8ae resolved the old label to M-PCD51 (Δnd −0.00105, source-priority), a glass the label does not name, because MP-PCD51-70 is absent from the runtime catalog; J-PSKH4 resolves under its own name (only-compatible, Δnd +0.00043, Δνd +0.03). Both are metric-Exact in the unseeded search. | Chromatic engine now uses the named Sellmeier row (smaller index residual). Re-ran Prettier (unchanged formatting), parse, source match, element-line, claim, glass and LV checks. MD-15. |
| C-02 | analysis, Focus Mechanism, manufacturer paragraph; Sources; evidence productCorrelation | "A ratio of 0.25× at 200 mm is reported in coverage of Nikon's announcement … the product page does not list it." | "Nikon's global specification page gives … 0.3× at 70 mm only. Nikon's US and UK product pages give both 0.3× at 70 mm and 0.25× at 200 mm …" | SRC-NIKON-PRODUCT, SRC-NIKONUSA, SRC-NIKON-UK (2026-10-01). The release excerpt does not contain 0.25×. | The tele constraint of the focus reconstruction is a manufacturer statement; no numerical change. Source list renumbered (6 inserted). |
| C-03 | analysis, Chromatic Correction Strategy, method paragraph | "…the element's index is advanced from its C-line value to its F-line value… Summed, the contributions reproduce the separation obtained by shifting every element together." | Linearized definition (derivative × Δn), exact additivity, and the finite-step L43 value (+8.726 vs +8.706 mm at W) disclosed. | Independent recomputation: linearized terms reproduce every published value (L43 +8.706; system +0.030/+0.034/+0.056; g–F +0.092/+0.075/+0.098); finite central steps give L43 +8.726, G4 −0.308, system +0.049 at W. | Wording only; table values unchanged. |

All three corrections were made by the auditor; their validation reuses the auditor's own code and the real LensVisualizer resolver, so correction-validation independence is limited to that.

### 16.6 Findings recorded without change

- Δ2Z: printed 48.949 vs 48.940 from the gap table. Raw comparison retained (`cmp.delta2Z`, `cmp.s4.delta2Z`); resolution passes (`chk.disc.delta2Z`, `chk.s4.delta2Z.resolution`). No patent value substituted.
- §4 glass table describes HIKARI J-PSKH4 and HOYA PCD51 as "Close" for L45; with the stated metric their distance is 0.00074 (Exact). Historical Stage 1 text left in place; this note supersedes it.
- L21 catalog ΔPgF: −0.0065 from the opticalglass dispersion formula vs −0.006 quoted (author catalog PgF); within catalog-source variance (OI-S4-01).
- J-SFH8 PgF 0.62474 (dispersion formula) vs 0.6248 quoted; immaterial.
- The analysis lists the narrowest limits for conditions (1), (8)–(11); condition (7) also meets its narrowest offered window (3.00–3.35, ¶0046–0047). Not an error ("several conditions").
- `specs` "F/2.89–2.91" rounds the printed 2.905 half-up; acceptable.

### 16.7 Reference-version impact check and LensVisualizer reruns

Stage 2/3 targeted checks ran at repository `fee638fc`. HEAD on 2026-10-01 is `9b5ed8ae47dde0f829bdde6dcdf23e5e5e4fbb90`. Diff in scope: `validateLensData.ts` adds an optional element `maxSdRatio` (default 3, unchanged); `types/optics.ts` adds `maxSdRatio` and `maker: string | null`; the repository LENS_DATA_SPEC.md adds those fields and a same-application assignment rule for `patentAssignees`. None changes the meaning of a field this file uses; the applicant is printed on the front page. The targeted checks were rerun on the final data file at 9b5ed8ae (read-only clone, `npm ci --ignore-scripts`, Node 22.22.2 against an engine requirement of ≥ 24.15): validateLensData no errors; buildLens EFL 71.4041/135.0001/196.0048, FOPEN 2.891/2.904/2.905, STO sd 17.9600; scoped `tsc --noEmit` clean; zero hidden render trim at 15 states; glass resolution with only L41 unresolved (expected) and L45 → J-PSKH4; validator mutations detected. Not run (integration scope): corpus tests, `generate:metadata`, full build/prerender, batch glass reports.

### 16.8 Quantitative-claim map changes

No numerical claim changed. Added: L45 residual "Δnd +0.00043" → `lv.s4.namedResolutionL45` / glass baseline; "Δnd −0.00035" (MP-PCD51-70) → `S4_GLASS_BASELINE`; "+8.726 mm" finite-step L43 term → §16.5 C-03 recomputation (documented here; not a verifier fact). Existing claims continue to be checked by `chk.analysis.claims`; Stage 4 adds `chk.s4.*`.

### 16.9 Manual prose and citation review

Re-read the full analysis against the patent and Nikon sources. Paragraph citations spot-checked against the images: ¶0003 (JP 2023-033649 A), ¶0018–0019, ¶0049–0060, ¶0065–0066, ¶0085, ¶0132–0147. Voice is third-person technical; νd notation; no marketing language; no APO claim; fluorite, SR, Super ED and VR statements are labeled as inferences or absences. The fluorite reasoning (nd agreement, θgF rounding to 0.54 vs FCD100 0.53) is sound; the νd difference (95.24 vs 94.99) is disclosed. Line count 382 (≤ 650).

### 16.10 Independence statement

Fresh source extraction and fresh calculation were performed before the candidate content was opened, and they are preserved separately (`S4_BASELINE_INPUTS`, `S4_*` functions, evidence.independentPass). The final verifier reuses the author's literal parser (`parse_data_ts`) to read the data file; all Stage 4 numerical paths are separate. Application execution (LensVisualizer) is a third form of evidence and is limited to targeted checks.

### 16.11 Stage 4 gate disposition

All mandatory CHAT_PREFLIGHT checks for Stages 1–4 pass on the final bytes (verify.py exit 0, 115 checks), the targeted LENSVISUALIZER checks pass at 9b5ed8ae, and the clean-extraction replay is recorded in the manifest. Remaining limitations are disclosed model choices (reconstructed close focus with a declared 135 mm rule, modeled SDs and the 12→13 gap allowance, interpolated intermediate zoom states, calibrated stop) and the source discrepancy Δ2Z.

**Gate: READY_FOR_BATCH.** integrationStatus: INTEGRATION_PENDING.

## 2026-10-05 — Semi-diameter figure pass

**Source.** WO 2026/172598 A1, drawing sheet 1/27 (PDF p. 83), Fig. 1, wide-end panel (広角端). The patent tabulates no effective diameters, so the figure is the only aperture evidence.

**Scale.** The page was rasterized at 600 dpi. Surface-vertex crossings were read on the optical axis (row 1716) for 34 surfaces from surface 1 (x = 1426.5 px) to the FL front face (x = 4240.5 px). The tabulated wide-end distance is 220.00 mm, giving 12.79 px/mm (0.0782 mm/px). Predicted and measured vertex columns agree within 3 px (0.25 mm) for every surface, so the panel is drawn to scale axially. The drawn image-plane half-height (21.9 mm after removing half a line width) agrees with Y = 21.65 within about 1 %, so the same scale holds radially. Rims were measured on the lower side (no leader lines), inside the group brackets, and reduced by half the 6 px line width.

| Surface | Before (mm) | Figure (mm) | After (mm) | Evidence |
| --- | --- | --- | --- | --- |
| 1 / 2 (L11) | 35.1 / 35.0 | 35.5 | unchanged | within 1.5 % |
| 3 (L12 front) | 34.2 | 33.7 | unchanged | within 1.5 % |
| 4 / 5 / 6 (L12 rear, L13) | 33.15 / 33.15 / 32.65 | 32.6 | unchanged | within 2 % |
| 7 (L21 front) | 19.65 | 22.6 | 22.6 | front face runs to the full rim; figure +15 % |
| 8 (L21 rear) | 18.65 | 20.7 | 20.7 | concave face ends at a flat annulus below the rim; figure +11 % |
| 9 / 10 (L31) | 18.7 / 19.05 | 19.3 | unchanged | within 3 % |
| 11–14 (L32, L33) | 19.55 / 18.72 / 18.72 / 19.9 | 19.6 | unchanged | within 5 %; L32/L33 drawn in edge contact, consistent with the 12/13 limit |
| 15 / 16 (L41) | 20.8 / 20.6 | 21.4 | unchanged | within 4 % |
| 17A / 18A (L42) | 20.3 / 19.7 | 20.4 | unchanged | within 4 % |
| 20–22 (D1) | 17.35 | 16.1–16.9 | unchanged | within 7 % |
| 23A–25 (D2) | 17.1 | 16.4 | unchanged | within 4 % |
| 26 / 27 (L47) | 16.55 / 16.3 | 16.4 | unchanged | within 1 % |
| 28 / 29 (L51) | 13.45 / 13.05 | 13.8 | unchanged | within 3–6 % |
| 30 / 31 (L52) | 12.4 / 11.6 | 12.6 / 11.1 | unchanged | within 4 % |
| 32 / 33 (L61) | 15.05 / 15.4 | 18.3 | 18.3 / 18.3 | biconvex drawn to a common rim; figure +19–22 % |
| 34A (L71 front) | 15.55 | 17.5 | 17.5 | concave face ends at a short flat; figure +13 % |
| 35 (L71 rear) | 16.15 | 18.7 | 18.7 | rear face runs to the full rim; figure +16 % |

The STO semi-diameter (17.96 mm, wide-end f/2.891 calibration) is unchanged.

**Checks on the result.** The repository surface validator reports no errors with the new set. Surface 34A shows no slope turnover out to 19 mm (slope monotone, −24.3° at 17.5 mm); its departure at the new rim is +549.7 µm (was +335.7 µm at 15.55 mm). L61's edge thickness at 18.3 mm is about 1.5 mm, so L47 (1.27 mm) remains the thinnest edge. The image-circle floor check passes, and traced field coverage is 100 % of 21.65 mm at all three stations (17.3° / 9.0° / 6.2°), unchanged. The meridional real-ray check at Y = 21.65 shows no axial clipping and no blocked chief ray at 71.4, 135 and 196 mm, at infinity and at closest focus; chief-ray field angles are 17.52° / 9.13° / 6.29° at infinity. Full-field one-sided vignetting at the changed surfaces drops from 69–93 % to 44–58 %. Engine EFL (71.404 / 135.000 / 196.005 mm), f-numbers and stop radius are unchanged. Local renders at the three zoom stations and at wide closest focus now show L21 standing above G3 and L61/L71 above G5, as in Fig. 1; the zoom movement overlay shows G2 and G3 moving imageward with G1, G4 and G7 fixed, matching the figure's arrows.

**Supersedes.** The earlier claim-map rows for the 34A departure (`asphdep.34A`) and the statements that all semi-diameters are ray-modeled are superseded by this section for the six changed surfaces.

**Open limitations.** Figure values are drawing measurements with roughly ±0.3 mm reading uncertainty and no stated tolerance; they are not published apertures. Only the wide panel was measured. Rims within about 7 % of the figure were deliberately left at the ray-modeled values.

## 2026-10-05 — Glass label and presentation note

- L41: HIKARI J-SFH8 (1.62200 / 30.66, code 622307) is now in the shared glass catalog, and the label resolves to it with Δnd ≈ 2e-8. The "not in the LensVisualizer catalog" wording was removed from the data file and analysis; the authored `dPgF` (+0.0328, from the patent's θgF = 0.625) and the supplier-unconfirmed caveat stay. All 18 elements now resolve to catalog dispersion curves.
- The remaining labels were reviewed against the stored patent coordinates. L45 (J-PSKH4, Δnd +4.3e-4) and L71 (M-BACD12 family, Δnd −2.2e-4) stay labelled as not coordinate-identical; no exact catalog row was found. L32's label resolves through the HIKARI J-LASFH17 row of the same coordinate.
- Subtitle changed to the house form "WO 2026/172598 A1 Example 1 — strong production correlation; not manufacturer-confirmed". The display name is unchanged. The correlation caveat remains in the data-file header and the analysis.

## 2026-10-05 — Second review (site diagram, labels, travel, glass, metadata)

**Sources.** WO 2026/172598 A1, PDF pp. 32–35 (general data, Table 1 rows 1–37, asphere blocks, variable-gap and group tables) and p. 83 (Fig. 1), re-rasterized for this review. Nikon's global product page, Nikon USA product page and Nikon's 2026-02-24 news release for the production facts. The local site was captured at 71.4, 135 and 196 mm, each at infinity and at closest focus, plus the zoom and focus group-movement overlays.

**Prescription and glass, re-read from the table image.** All 35 lens surfaces (R, D, nd, νd), the FL plate (1.600 / 1.51680 / 64.13, D37 = 0.174), the stop at surface 19, and the four asphere blocks (κ = 1 → K = 0; A4–A10 signs and exponents) equal the stored values. No transcription difference was found. The patent prints θgF to two decimals for every glass (0.53–0.63). All 18 elements resolve to catalog dispersion curves, and catalog Sellmeier data ranks above `dPgF` in the chromatic engine, so authoring two-decimal θgF values would add nothing and would be less precise than the curves. L41 keeps its `dPgF` (+0.0328) because its θgF = 0.625 is printed to three decimals in the conditions table. No glass label changed; no vendor glass missing from the repo catalog was needed.

**Zoom and focus travel.**

| Item | Patent | Stored / site | Result |
| --- | --- | --- | --- |
| Station order | wide 71.402, middle 134.997, tele 195.996 | `zoomPositions` and every `var` row in that order | agrees |
| D6 (G1–G2) | 2.309 / 34.810 / 51.249 | same | G2 moves toward the image, 48.94 mm |
| D8 (G2–G3) | 16.234 / 12.596 / 10.303 | same | G3 moves toward the image, less far than G2 |
| D14 (G3–G4) | 44.546 / 15.684 / 1.537 | same | closes onto fixed G4 |
| D27 / D31 / D33 | 3.004, 29.459, 5.625 / 5.450, 25.898, 6.740 / 3.287, 29.790, 5.011 | same (infinity column) | G5 and G6 shift slightly imageward at the middle station and return |
| FNO | 2.891 / 2.904 / 2.905 | `nominalFno` in that order | agrees |
| Fig. 1 arrows | G1, G4, G7 fixed; G2, G3 toward image; focus: G5 toward image, G6 toward object | zoom overlay shows only G2 and G3 with long travel (maximum 48.94 mm); focus overlay shows G5 moving right and G6 moving left | agrees |

The patent publishes infinity spacings only (D0 = ∞, β blank), so the close column remains the documented reconstruction. In each close column D27 grows (G5 toward the image), D33 grows (G6 toward the object) and D31 shrinks by the sum, which is the direction of the Fig. 1 focus arrows. The paraxial probe finds the close states focused at object-to-image distances of 379.4, 599.4 and 799.4 mm with magnifications −0.300, −0.253 and −0.250, matching `zoomCloseFocusM` [0.38, 0.6, 0.8] and Nikon's minimum focus distances at 70, 135 and 200 mm (Nikon also lists 0.38 m at 85 mm and 0.5 m at 105 mm, which the three-station model interpolates rather than reproduces). The 135 mm and close-focus renders, which the first pass did not inspect, show no overlap or inverted gap: at 135 mm close focus G5 sits 14.2 mm behind L47 and G6 10.2 mm behind G5; at 196 mm close focus the G5–G6 gap is 7.7 mm.

**Diagram against Fig. 1.** The three site renders match the three figure panels in element order, shape and relative rim heights: G1 tallest with L12/L13 stepped below L11; L21 taller than G3; L41/L42 the tallest elements behind the zoom groups; D1, D2 and L47 stepping down; G5 the smallest group; L61/L71 again taller. Group brackets G1–G7 carry the patent's signs (+ − − + − + −), D1 = L43+L44 and D2 = L45+L46 are the two cemented pairs of ¶0144, the stop is drawn between L42 and L43, and the four aspheric markers sit on surfaces 17, 18, 23 and 34. The patent names no vibration-reduction group in Example 1 and none is labelled. No semi-diameter was changed in this review.

**Production correlation of special elements.** Nikon lists 18 elements in 16 groups with 1 ED, 1 Super ED, 1 aspherical ED, 2 aspherical, 1 fluorite and 1 SR element. The model has the same census by inference: fluorite L13, Super ED-class L33, ED-class L44, aspherical ED-class L42 (both faces), aspherical L45 and L71, and the high-θgF short-flint L41 as the SR candidate. The patent itself calls none of them ED, fluorite or SR, so every `apd` tag stays "inferred".

**Changes.**

| Field | Before | After | Reason |
| --- | --- | --- | --- |
| `focalLengthDesign` | [71.404, 196.005] | [71.402, 195.996] | The patent's printed f, now identical to `zoomPositions` and the "71.4–196.0" chip. 71.404 / 135.000 / 196.005 are the EFLs computed from the rounded table and are recorded in the header and analysis as computed values. |
| `fstopSeries` | starts at 2.8 | starts at 4 | f/2.8 is the marketing aperture; the design opens to f/2.891–2.905, and the control already prepends the wide-open value, so the 2.8 entry was never reachable. |
| `acceptsTeleconverters` | absent | true | Nikon states compatibility with the Z TELECONVERTER TC-1.4x and TC-2.0x. No Nikon Z converter is modeled in the corpus yet, so nothing changes on the page today. |
| Header comment | — | focal-length / aperture note added | States which numbers are printed and which are computed. |

**Retained after checking.** Name "NIKON NIKKOR Z 70-200mm f/2.8 VR S II" (Nikon's designation is "NIKKOR Z 70-200mm f/2.8 VR S II", announced 2026-02-24), mount `nikon-z`, format `135-full-frame` (patent Y = 21.70), 18/16 counts, 11 blades, f/22 minimum aperture, `closeFocusM` 0.38, patent number, inventor, applicant and year, `zoomLabels`, `varLabels`, `specs`.

**Checks on the result.** The surface validator reports no errors; engine EFL 71.404 mm, f/2.891 and stop radius 17.96 mm are unchanged; the image-circle floor passes; traced field coverage is 100 % of 21.65 mm at all three stations; the meridional real-ray check shows no axial clipping and no blocked chief ray at infinity or closest focus; all 18 glasses resolve.

**Open limitations.** Close-focus spacings remain a reconstruction (the 135 mm state by a declared travel-ratio rule). Semi-diameters are modeled or figure-measured, not published. The sibling first-generation file does not set `acceptsTeleconverters`, although Nikon lists the same converters for it; that file was outside this review.
