# Audit Log — Panasonic Leica DG Summilux 15mm f/1.7 ASPH

Patent: US 2015/0268449 A1, Numerical Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3A | `glass` | `S-TIM2 class` | `585417 — light flint` | Patent Table 6 lists nd=1.58542, vd=41.7; no unique public match found. |
| L3 / S5 | `glass` | `L-LAH53 (OHARA)` | `882408 — high-index lanthanum glass` | Patent Table 6 lists nd=1.88234, vd=40.8; close candidates were not unique. |
| L4 / S6 | `glass` | `S-NPH5 class` | `754260 — dense flint` | Patent Table 6 lists nd=1.75409, vd=26.0. |
| L5 / S8 | `glass` | `TAFD33 (HOYA)` | `916364 — high-index lanthanum glass` | Patent Table 6 lists nd=1.91597, vd=36.4. |
| L6 / S11 | `glass` | `NbFD15 class` | `786275 — dense flint` | Patent Table 6 lists nd=1.78630, vd=27.5. |
| L7 / S12 | `glass` | `TAF5 (HOYA)` | `769497 — lanthanum crown` | Patent Table 6 lists nd=1.76864, vd=49.7. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/US_2015268449_A1.pdf`, Table 6. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated the analysis narrative, glass table, manufacturing notes, and source note to use patent-code labels instead of unsupported vendor claims.

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Rendered `patents/US_2015268449_A1.pdf` pages containing Numerical Example 2 / Tables 6-10 because the OCR text is incomplete.
- Confirmed the prescription, focus variables, aspherical coefficients, and element focal-length table against the current data file.
- The patent table does not publish semi-diameters or effective diameters.

### Updates

| Area | Before | After | Disposition |
|---|---|---|---|
| L1 APD | `apd: false` | `apd: "inferred"` | FPL51-family ED fluorophosphate row; patent lists nd/vd only. |
| Glass labels | May code-backed relabels | unchanged | L2-L7 remain patent-code labels where public catalog candidates are not unique enough. |
| High-index status | L5 ultra-high-index role | unchanged | Patent nd = 1.91597 supports the UHR/Petzval-controller note. |
| SDs | ray-trace-derived estimates | unchanged | No patent clear-aperture column; current front/rear proportions remain visually plausible. |

## 2026-07-30 - L-LAH83 identity correction

- Rechecked US 2015/0268449 A1 Numerical Example 2 / Table 6. Surface 14, L8 is `nd=1.77074`, `νd=49.5`; the table names no vendor glass.
- Rejected the prior OHARA `L-LAH83` attribution. OHARA's official all-products row is `1.864000 / 40.577742`, outside the compatibility window.
- Relabeled L8 to `M-TAF1 (HOYA catalog equivalent; production supplier unspecified)`. The discontinued HOYA coefficient row is `1.77250 / 49.46` and is compatible with the patent coordinate.
- Synchronized the analysis and removed the unsupported PGM claim. No prescription geometry or semi-diameter changed.

## 2026-10-27 — Rimmer localization audit (asphere data)

Patent: US 2015/0268449 A1, Numerical Example 2. PDF page 15 (printed page 8), Tables 6–10; PDF page 14 (printed page 7), ¶0141–0148; PDF page 3 (drawing sheet 2), FIGS. 3–4. Numbers were read from a 400 dpi table render; rims were inspected at 400/600 dpi.

| Item / field | Before | After | Evidence / disposition |
|---|---|---|---|
| 3A / K, A4–A18 | Table 7 values | unchanged | Signs, mantissas, exponents and powers all match; A14–A18 are zero. |
| 4A / K, A4–A18 | Table 7 values | unchanged | All terms match; A14–A18 are zero. |
| 13A / K, A4–A18 | Table 7 values | unchanged | All terms match, including A14 = −1.77737e−13, A16 = +1.87772e−14, A18 = −1.59045e−16. |
| 16A / K, A4–A18 | Table 7 values | unchanged | All terms match; A16/A18 are zero. |
| 17A / K, A4–A18 | Table 7 values | unchanged | All terms match; A16/A18 are zero. |
| All surfaces / R, d, nd, vd | stored prescription | unchanged | Table 6 rows 1–18 match; final air distance 14.2306 represents row 17's 14.23040 + Table 8 BF 0.00022, rounded to four decimals. Infinity gaps STO = 5.8655 and 15 = 2.1001 match; close-focus gaps remain derived, not tabulated. |
| 13A / sd | 8.5 mm | 8.5 mm | FIG. 3 manual optical rim ≈8.3 mm; no turnover within sd. |
| 16A / sd | 9.0 mm | 9.0 mm | FIG. 3 manual optical rim ≈10.0 mm; difference below figure-change threshold; no turnover within sd. |
| 17A / sd | 9.2 mm | 9.2 mm | Same FIG. 3 optical rim ≈10.0 mm; no turnover within sd. |
| Header / audit note | no localization qualification | coefficient/rim review and unresolved localization noted | Numerical data unchanged. |
| Analysis / off-axis qualification | no full-pupil limitation stated | rim metrics, source comparison, independent trace and unresolved RI recorded | FIG. 4 validates only the plotted aberrations, not the full off-axis pupil. |

### Source and geometry findings

The equation in ¶0141 is conic plus Σ Aₙhⁿ with `(1 + κ)` in the square root: stored K = κ directly. Table 7 lists even powers A4 through A18 only. Length units are millimeters, with no normalization or scale conversion. No coefficient transcription error, missing odd term or even-order refit was found.

The accepted FIG. 3 measurement crop was page fractions (0.34, 0.275, 0.65, 0.41), axis 0.342 at 600 dpi. The measured glass span was 1753–3166 px, corresponding to −0.18–39.58 mm and 28.14 µm/px. L7 ENV/RIM estimates were 8.25/7.68 mm; L9's 9.15/8.02 mm estimates disagreed, so the zoomed optical contours took precedence. On the 400 dpi crop at (1720,1300), L7 spans approximately y = 107–501 (8.3 mm half-height), and L9 y = 68–541 (10.0 mm half-height), using 42.21 µm/px. Leader lines and the d15 arrows were excluded. No strong figure evidence supports reducing either element.

At the authored rims, 13A/16A/17A departures are +575.3/+2979.7/+2142.5 µm and slope angles −59.7°/−22.1°/−9.8°. No surface turns over inside its sd; 4A's first turnover is outside its 9.3 mm rim at about 10.25 mm. There is no turnover cap to apply, and the stated on-axis f-number beam passes the inferred apertures.

### Localization and source comparison

The first refused sampled field remains 26.122°. Its worst lattice cell (x,y) = (−0.140625,−0.953125) reaches surface 12 at h = 7.4927 mm and 13A at h = 7.8587 mm, within both rims, then 16A at h = 7.6815 mm. It arrives 2.5224 mm from the chief ray meridionally and 0.2480 mm sagittally, with referred deviation 0.05506 rad. The steepening 13A profile produces a large change in the outgoing bundle, propagated through L8/L9. A separate direct-power-sum sag/derivative, Newton-intersection and vector-Snell tracer, sharing only the aimed launch, agrees with the engine's image intercept within 1.2e−13 mm on that ray. The larger angle jumps reported by the initial meridional helper include unclipped diagnostic rays and are not, by themselves, evidence of a 16A error.

On-axis d-line LSA at pupil fractions 1/0.85/0.7/0.5 is −0.039/−0.015/−0.011/−0.015 mm, consistent with FIG. 4's ±0.10 mm scale and negative marginal branch. Close-ray T/S shifts remain within a few hundredths of a millimeter over Y ≤10 mm; distortion is about −8.7% at Y =10 mm, consistent with FIG. 4's −5/0/+5% axis ticks and curve extending left of −5%. EFL =15.4834 mm and track length =53.8153 mm agree with Table 8 (15.4836/53.8153 mm). The plotted comparisons do not show a source contradiction that warrants a single-slip correction search or a source.errata entry.

### Unresolved disposition

Verdict: other — unresolved full-pupil off-axis localization, with missing effective-aperture information. Retain all numerical values. The format-corner sweep goes to 37.73°, outside Table 8's 35.256° / Y =10 mm field, but failure begins inside that field. The source has no effective-diameter column, off-axis ray-fan plot or pupil-mask data establishing which marginal zones it used. A printed erratum, actual aperture masking, or another limitation cannot be distinguished from this source alone. Queue an independent full-pupil optical-design comparison and effective-aperture/family-source research; no erratum is asserted without a demonstrated source contradiction. The numerical checks continue to accept the surface geometry, on-axis aperture and image-circle floor while outer-field RI remains refused.
