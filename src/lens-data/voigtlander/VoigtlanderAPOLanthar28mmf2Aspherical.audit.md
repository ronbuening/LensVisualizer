# VoigtlanderAPOLanthar28mmf2Aspherical — Stage 4 Independent Audit

## Job Card and Scope

- **Patent:** JP 2026-98935 A / JP2026098935A
- **Lens:** Voigtländer APO-LANTHAR 28mm f/2 Aspherical
- **Fixed embodiment:** Example 2 (第2実施形態; Fig. 3, Tables 5–8)
- **Output stem:** `VoigtlanderAPOLanthar28mmf2Aspherical`
- **Audit boundary:** fresh adversarial audit of the supplied `.data.ts` / `.analysis.md` pair; no batch metadata generation, full corpus testing, Git operation, or publication work

The patent and embodiment were not substituted. The VM production correlation was retained because Example 2 publishes a 0.5 m-class endpoint, while the official Sony E- and Nikon Z-mount versions publish 0.28 m minimum focus distances. This is a correlation judgment, not a claim that the production prescription is numerically identical to the patent example.

## Independence Statement

The first-pass extraction and calculation were completed before the conclusions in the supplied prior audit were consulted. The following were independently re-entered from rendered patent pages:

- Table 5 summary values on patent p. 14;
- the complete Table 6 prescription on p. 15;
- Table 7 focus spacings and Table 8 asphere coefficients on p. 17;
- the Example 2 section drawing, Fig. 3, on p. 24;
- the d-line, radius-sign, spacing, anomalous-partial-dispersion, and standard-conic conventions in ¶0060–¶0070.

The fresh calculation used both height/reduced-angle (`y–ν`) and conventional height/angle ABCD matrices. A later secondary run of the supplied verification script reproduced the fresh numerical results, but it was not used to establish the first-pass conclusions.

## Fresh Source Extraction

### Table 5 summary

| Quantity | Patent value |
|---|---:|
| Overall focal length | 28.84 mm |
| F-number | 2.06 |
| Half field | 37.02° |
| TL | 71.19 mm |
| TLab | 10.47 mm |
| f1 | 58.33 mm |
| f1ab | −29.83 mm |
| f2 | 53.75 mm |
| f2abal | −47.89 mm |
| f2abalm | −12.67 mm |
| f2b | 20.63 mm |
| X1 | 1.61 mm |
| X2 | 2.08 mm |

### Table 6 active prescription

| Surface | Asph. | R (mm) | D∞ (mm) | Dclose (mm) | nd after | νd | ΔPgF |
|---:|:---:|---:|---:|---:|---:|---:|---:|
| 1 | yes | 120.686 | 1.20 | 1.20 | 1.51680 | 64.20 | +0.0031 |
| 2 | yes | 18.667 | 5.17 | 5.17 | 1.00000 | — | — |
| 3 |  | −26.163 | 3.10 | 3.10 | 1.85150 | 40.78 | −0.0054 |
| 4 |  | −17.394 | 1.00 | 1.00 | 1.78880 | 28.43 | +0.0037 |
| 5 |  | −45.310 | 0.30 | 0.30 | 1.00000 | — | — |
| 6 |  | 35.585 | 3.33 | 3.33 | 2.00100 | 29.13 | +0.0036 |
| 7 |  | −500.000 | 0.31 | 0.31 | 1.00000 | — | — |
| 8 |  | 51.264 | 3.86 | 3.86 | 1.90043 | 37.37 | −0.0044 |
| 9 |  | −51.262 | 1.00 | 1.00 | 1.85451 | 25.15 | +0.0072 |
| 10 |  | 98.206 | 3.84 | 3.84 | 1.00000 | — | — |
| STO |  | ∞ | 3.83 | 3.36 | 1.00000 | — | — |
| 12 |  | −19.549 | 1.00 | 1.00 | 1.72047 | 34.71 | −0.0025 |
| 13 |  | 17.500 | 5.84 | 5.84 | 1.62846 | 59.17 | +0.0139 |
| 14 |  | −34.531 | 0.30 | 0.30 | 1.00000 | — | — |
| 15 |  | 36.135 | 4.92 | 4.92 | 1.90525 | 35.04 | −0.0005 |
| 16 |  | −36.135 | 0.15 | 0.15 | 1.00000 | — | — |
| 17 |  | 580.103 | 5.15 | 5.15 | 1.55032 | 75.50 | +0.0277 |
| 18 |  | −19.000 | 1.00 | 1.00 | 1.72047 | 34.71 | −0.0025 |
| 19 |  | 161.504 | 5.64 | 5.64 | 1.00000 | — | — |
| 20 | yes | −116.659 | 2.10 | 2.10 | 1.80610 | 40.73 | −0.0056 |
| 21 | yes | 1000.000 | 18.21 | 20.28 | 1.00000 | — | — |

The active model contains 12 glass elements in 8 air-spaced groups, exactly one `STO`, four aspherical surfaces, and no sensor cover, filter, inactive dummy plane, flare cutter, folded-path surface, or synthetic cement layer. Surface number 11 is intentionally absent because the virtual stop row carries D11.

### Table 8 aspheres and convention

The patent uses the standard conic constant `K` in `sqrt(1 − (1+K)c²h²)`; no `κ` conversion or coefficient scaling is required.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1A | 0 | 1.5630E−05 | −2.0081E−07 | 1.7924E−09 | −8.9064E−12 | 1.8450E−14 | 0 |
| 2A | 1.111 | −2.4287E−06 | −3.6870E−07 | 2.3518E−09 | −1.5366E−11 | 0 | 0 |
| 20A | 52.843 | −3.2860E−05 | 0 | 0 | 0 | 0 | 0 |
| 21A | 0 | 4.4019E−06 | 4.5548E−08 | −6.0419E−11 | 1.0810E−12 | −4.5187E−15 | 0 |

## Independent Optical Verification

### System cardinal points and cross-check

| Quantity | Fresh result | Patent comparator |
|---|---:|---:|
| EFL | 29.126006271204 mm | 28.84 mm summary |
| BFL from S21 vertex | 18.582765364142 mm | D21 = 18.21 mm |
| Front principal plane from S1 | +21.435577439021 mm | not tabulated |
| Rear principal plane from S21 | −10.543240907062 mm | not tabulated |
| S1-to-IMG track | 71.250000000000 mm | TL = 71.19 mm |
| Matrix determinant | 1.000000000000 | air-to-air expectation 1 |
| y–ν / θ-ABCD maximum difference | 3.553E−15 | numerical roundoff |

The patent summary focal length and printed final image gap are not reproduced by the raw prescription. A 50,000-sample uniform half-last-digit perturbation gave:

| Quantity | Minimum | Maximum |
|---|---:|---:|
| EFL | 29.092811 mm | 29.160213 mm |
| BFL | 18.539654 mm | 18.627580 mm |
| Track | 71.197327 mm | 71.303881 mm |
| Published close-state matrix B | 5.406118 mm | 6.757974 mm |

Thus 28.84 mm, 18.21 mm as a paraxial BFL, and zero close-state B all remain outside the source-precision ranges. The prescription is preserved; no summary value is substituted into the optical arrays.

### Standalone, cemented, and functional powers

| Unit | EFL (mm) | Classification |
|---|---:|---|
| L9 | −42.901440 | standalone element |
| L10f | +52.423822 | standalone element |
| L10r | −36.365402 | standalone element |
| L10 | −98.936654 | cemented net air-to-air unit |
| L11 | +33.291042 | standalone element |
| L12f | +28.982846 | standalone element |
| L12r | −39.294469 | standalone element |
| L12 | +98.774343 | cemented net air-to-air unit |
| G1a+G1b | −29.801877 | combined air-to-air subsystem |
| G1 | +58.393064 | functional macro-group |
| L13f | −12.673277 | standalone element |
| L13r | +19.316970 | standalone element |
| L13 | −47.894535 | cemented net air-to-air unit |
| L14 | +20.625740 | standalone element / G2b |
| L15f | +33.532749 | standalone element |
| L15r | −23.541155 | standalone element |
| L15 | −80.346997 | cemented net air-to-air unit |
| L16 | −129.492431 | standalone element |
| G2 | +54.220839 | functional macro-group |

No isolated subassembly value is described as an in-situ power. The analysis now distinguishes standalone element, cemented net, combined subsystem, and functional macro-group results.

### Petzval, pupil, and classification

The surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is `+0.002241700126495 mm⁻¹`, giving a paraxial Petzval radius of `446.089995794 mm`. The complete surface table is retained in the calculation results JSON.

The patent omits the physical stop diameter. The inferred `STO.sd = 7.914161325747 mm` gives an entrance-pupil semi-diameter of `7.069418997865 mm` and exactly reproduces F/2.06 against the independently computed EFL. This remains a modeling inference rather than a source dimension.

- `TL/EFL = 2.446267413`; the design is not telephoto under `TL/EFL < 1`.
- `D21/EFL = 0.625214450`; the design is not retrofocus under `BFD > EFL`.

### Focus movement and published contradiction

| Quantity | Result |
|---|---:|
| ΔD11 | −0.47 mm |
| ΔD21 | +2.07 mm |
| X1 encoded by gaps | 1.60 mm |
| X2 encoded by gaps | 2.07 mm |
| Published object-to-image distance | 500.85 mm |
| Published close-state matrix B | +6.097173982880 mm |
| Required D0 if D11 and D21 are held | 539.855548332 mm |
| Required D21 if D0 and D11 are held | 20.700829433 mm |

The two published endpoint gaps remain `PUBLISHED`. No reconstructed endpoint is adopted. The discrepancy is disclosed in the data header, `focusDescription`, analysis, audit, and results JSON.

## Geometry, Asphere, and Ray Gate

The stored semi-diameters are inferred, because the patent provides no clear apertures. A 2026-08-01 integration follow-up measured the exact Example 2 Fig. 3 section at high resolution. Leader lines make the whole-figure automated radial peak unreliable, so axial scale was calibrated from the active prescription and element rims were measured by hand per the SD-audit runbook. G2a, G2b, and the L15 portion of G2c were visibly oversized and were tightened; the front group and terminal asphere retained their validated values.

| Surfaces | Previous SD | Audited SD | Figure interpretation |
|---|---:|---:|---|
| 12–14 (L13) | 8.7 / 10.5 / 11.1 mm | 9.0 / 9.0 / 9.0 mm | Fig. 3 envelope is approximately 9.0 mm |
| 15–16 (L14) | 12.9 / 12.9 mm | 8.6 / 8.6 mm | Fig. 3 envelope is approximately 8.6 mm |
| 17–19 (L15) | 12.6 / 12.6 / 12.5 mm | 9.7 / 9.7 / 9.7 mm | Fig. 3 envelope is approximately 9.7 mm |

The final values pass the surface validator and image-circle floor audit at both focus states. Surfaces 20A/21A remain 12.8/13.5 mm, so the published asphere-departure results below are unchanged.

Asphere departures from the same-radius sphere at the stored semi-diameters are:

| Surface | Semi-diameter | Departure |
|---|---:|---:|
| 1A | 11.50 mm | +0.095581763 mm |
| 2A | 9.66 mm | +0.067685693 mm |
| 20A | 12.80 mm | −1.059296246 mm |
| 21A | 13.50 mm | +0.407042754 mm |

The final file passes the repository's edge-thickness, rim-slope, conic-domain, shared-gap, and image-circle-floor checks. The locally rendered silhouette was visually compared with patent Fig. 3 and retains the same element order, stop location, and corrected group proportions.

## Glass Audit

The patent names no glass vendors. It publishes `nd`, `νd`, and `ΔPgF`; qualified catalog names are therefore equivalence results, not source identities. All stored line indices satisfy `nC < nd < nF < ng`. The largest line-index-derived `ΔPgF` residual is `+0.000441765` for L10r; this remains within the disclosed catalog-equivalence limitations and does not alter the patent-stored `ΔPgF`.

The most relevant adjudications are:

- **L9:** official CDGM H-K9LGT data reproduce the 517642 tuple and provide an exact coefficient-backed curve. The label remains an equivalent because the patent does not establish the production supplier.
- **L10f / L10r / L13f / L14:** official OHARA catalog entries reproduce the stored `nd`/`νd` pairs for S-LAH89, S-NBH58, S-NBH8, and S-LAH93, respectively. They remain explicitly labeled as equivalents.
- **L13r:** HIKARI J-PSKH8 reproduces the 628592 `nd`/`νd` tuple and remains an equivalent.
- **L16:** no audited public catalog candidate matches `nd = 1.80610`, `νd = 40.73`, and patent `ΔPgF = −0.0056` jointly. HIKARI Q-LASF03S is a close 806407-class line-index proxy, while HOYA NBFD13 better matches `nd`/`νd` but not the patent `ΔPgF`. The element remains explicitly `Unmatched`.

No catalog label is represented as a proven production melt. The manufacturer’s section marks six anomalous-partial-dispersion positions. Mapping its matching topology to Example 2 identifies L10r, L12r, L13f, L13r, L15f, and L15r; those six flags are recorded as `inferred`, while all twelve patent-published `ΔPgF` values remain numeric spectral data.

## Corrections Applied

| No. | Old value or wording | Corrected value or wording | Source location | Independent evidence | Downstream consequences |
|---:|---|---|---|---|---|
| 1 | L9 used H-K9LGT only as a line-index proxy because that exact catalog row was absent | Added the official CDGM H-K9LGT Sellmeier row and labeled L9 `H-K9LGT (CDGM) equivalent — 517642` | CDGM Optical Glass Data Sheet, June 2022, H-K9LGT p. 79; patent Table 6 | Vendor coefficients and d-code exactly reproduce the patent's 1.51680 / 64.20 tuple; `equivalent` still avoids claiming the production melt | L9 now has strict coefficient-backed dispersion without changing its authored patent constants |
| 2 | L16 label disclosed an unmatched 806407 class and Q-LASF03S proxy but did not state why it remained unmatched | Added `no joint nd/νd/ΔPgF match` to the data and analysis | Patent Table 6, p. 15; L16 data/analysis entries | Q-LASF03S is close on class and partial dispersion; NBFD13 is closer on nd/νd; neither matches all three patent quantities jointly | No optical-number change. Glass uncertainty is now explicit to readers and mismatch tooling |
| 3 | Analysis used `in-situ EFL` for G1a+G1b and cemented L10/L12/L13 calculations | Replaced with `combined air-to-air EFL` or `net air-to-air EFL` | Analysis Optical Architecture and L10/L12/L13 sections | Fresh isolated-subsystem matrices were evaluated between air reference planes; they are not powers measured inside the complete lens | No numerical change. The analysis now distinguishes standalone, cemented net, subsystem, and functional-group quantities |
| 4 | All twelve elements were labeled `apd: "patent"`, conflating published `ΔPgF` numbers with the production APD classification | Mapped Cosina's six marked production positions to L10r, L12r, L13f, L13r, L15f, and L15r as `inferred`; left all twelve patent `dPgF` values intact | Official Cosina optical section; JP 2026-98935 A Example 2 topology and Table 6 | The production drawing gives a direct six-position pattern, while Table 6 independently publishes partial-dispersion deviations for every glass | Corrects the UI classification without discarding patent spectral data |
| 5 | Rear G2a–G2c modeling apertures were visibly larger than Fig. 3 | Tightened surfaces 12–19 to 9.0 / 8.6 / 9.7 mm group envelopes | Patent Fig. 3, p. 24 | High-resolution hand measurement using the prescription's axial scale; surface and image-circle validators pass | Diagram proportions now follow the patent section more closely; first-order optics are unchanged |
| 6 | Clean analysis contained `Stage 2` and repository-availability process notes | Removed process-history wording while retaining the model limitations and quantitative disclosures | Analysis Aspherical Surfaces and Verification Summary; current analysis specification | Process notes belong in audit/manifest artifacts, not the reader-facing analysis | No quantitative or interpretive optical change. Clean analysis now conforms to the required scholarly form |

No correction was required to any patent radius, spacing, index, Abbe number, `ΔPgF`, asphere coefficient, conic constant, variable gap, cemented-junction `elemId`, element/group count, stop label, or structured patent/mount/format metadata. Only inferred semi-diameters and classification metadata changed.

## Targeted Final Gate

| Check | Result | Scope |
|---|---|---|
| Fresh Table 6–8 transcription comparison | PASS | every active surface, infinity/close spacing, medium index, element tuple, and asphere coefficient |
| y–ν / θ-ABCD agreement | PASS | maximum difference 3.553E−15 |
| Source-precision perturbation | PASS | 50,000 samples; discrepancies remain outside ranges |
| Local schema and authoring invariants | PASS | exactly one STO, unique labels, valid element references, canonical mount/format, var/base consistency |
| TypeScript syntax and local schema-derived typecheck | PASS | `tsc 5.8.3`; local stub, not repository `LensDataInput` |
| Infinity and close geometry | PASS | edge, slope, conic, gap, and local trim checks |
| Exact targeted meridional rays | PASS | on-axis, 0.60 field, full-field chief, finite D0 close rays, and vignetting scan |
| Glass line ordering and residual audit | PASS | all twelve elements |
| All nineteen patent conditions | PASS | recomputed from authored arrays and powers |
| Analysis structure and data consistency | PASS | required H2 order, metadata, quantitative claims, terminology, and process-note check |
| Prettier | NOT RUN | executable unavailable; supplied `.prettierrc.json` retained as the formatting reference |
| Repository `buildLens()` / `validateLensData()` | NOT RUN | LensVisualizer repository and node_modules unavailable |
| Repository render diagnostics / glass report / same-stem tests | NOT RUN | LensVisualizer repository unavailable |

The repository-dependent checks are deferred to the normal batch integration environment and are not claimed here. No local defect remains that blocks that batch gate.

## Sources

- Cosina Co., Ltd., JP 2026-98935 A, Example 2, especially Fig. 3, Tables 5–8, and ¶0047–¶0071.
- Cosina, VOIGTLÄNDER APO-LANTHAR 28mm F2 Aspherical VM: https://www.cosina.co.jp/voigtlander/en/vm-mount/apo-lanthar-28mm-f2-aspherical/
- Cosina, Japanese VM product page and release specification: https://www.cosina.co.jp/voigtlander/vm-mount/apo-lanthar-28mm-f2-aspherical/
- Cosina, release-date notice: https://www.cosina.co.jp/news/%E3%83%95%E3%82%A9%E3%82%AF%E3%83%88%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BCapo-lanthar-28mm-f2-aspherical-vm-%E7%99%BA%E5%A3%B2%E6%97%A5%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/
- Cosina, Sony E and Nikon Z product pages, consulted only to delimit the VM focus-state correlation.
- OHARA optical-glass catalog: https://www.ohara-inc.co.jp/en/product/catalog/
- HOYA optical-glass data: https://www.hoya-opticalworld.com/english/
- HIKARI optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
- CDGM H-K9LGT data sheet: https://www.cdgmgd.com/webapp/pdf/H-K9LGT.pdf

## Stage Gate

Local Stage 4 audit: **PASS**. Repository-specific integration checks remain for the batch environment.

**READY_FOR_BATCH**

## 2026-08-01 Repository Integration Gate

This final integration gate supersedes the earlier environment-availability notes. The stored prescription passes the repository surface and image-circle audits; refreshed glass reports show 11/12 strict and 12/12 trusted chromatic coverage with zero catalog mismatches. Typecheck, format check, all 2,528 tests in 213 files, and the 990-route production build pass. Lint reports only the repository's three pre-existing type-assertion warnings and no errors.
