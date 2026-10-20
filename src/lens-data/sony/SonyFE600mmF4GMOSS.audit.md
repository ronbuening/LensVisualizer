# SonyFE600mmF4GMOSS — Extraction, Construction and Verification Record

Construction-verification record for Stage 1 (CHAT_PREFLIGHT scope). This is not the independent Stage 4 audit; no independence is claimed.

## 1. Job and reference versions

- Patent: **JP2025063175A** (特開2025-63175, published 2025-04-15; divisional of 特願2021-524834; priority JP 2019-104612, 2019-06-04). Applicant ソニーグループ株式会社; inventor 丸山 理樹.
- Lens: Sony FE 600mm F4 GM OSS; embodiment: Example 4 (実施例4); output stem `SonyFE600mmF4GMOSS`.
- Original patent `JP_2025063175_A.pdf` SHA-256 `6ed9695e44607578cf7fb5b34133164e761f8cac8c763b9bda0c398ecafd2b3e`; job card `SonyFE600mmF4GMOSS.txt` SHA-256 `8f45a452dd9bc3a5d85b10987891e0069852267f378d19d759d9a95ee59e0738`.
- Controlling references read in this session (SHA-256, `/mnt/project/`):

| Reference | SHA-256 |
|---|---|
| `LENS_DATA_SPEC.md` | `26e79f8ab045e9484a17edc73c902e75c5c4c19b02bca001c645489a19b6b634` |
| `LENS_ANALYSIS_SPEC.md` | `0cd49c0a05231cb8d273d1f1b1d1ab85eeebcf455b6d33de943a5a02906e99e7` |
| `LENS_MOUNT_FORMAT_OPTIONS.md` | `44aed8060cfb07a145d6380aad86970dafce46a461ad3ec3cbe93ec08a504a0a` |
| `TEMPLATE_data_ts.template` | `379e6bd9a52daa621fb361120cde226a9e29cceb0d79dc0e96fd4f5e54b6de51` |
| `defaults.ts` | `2f013eed8318264f130bd0783fec4458624e53780b7edc83180df00f86b95e1e` |
| `prettierrc.json` | `6cf80666a5e24499fb5eb5ecf800ee301c9be08fcd26a154ea4ef7c9afcbc0b2` |
| `LensPatentChatProtocol.md` | `72ba2a4b28b4f339ad9222f2daa96a467b359cfd486aea5072d15f01741a108e` |
| `LensPatentDossierContract.md` | `b6ddc19bf656238ed970137ea49081066d34d7c54f5012b3eed762a771ef159b` |
| `LensPatentStage1Extraction.txt` | `c06bbde912ac14a0d92cfa436559d55389b6c0395bb77c0a32553c01fb8e5f72` |
| `LensPatentWorkflowGuide.md` | `045de121434ad11e620dffda212fec3aebde09a23680be3d9cb99a4182201409` |
| `LensPatentStage2Data.txt` | `ece2224a1d6287c729a3a2c3030c9a685e1d19011d489bc0c0eed6dd1384d058` |
| `LensPatentStage3Analysis.txt` | `ea8663e86890063028c78f13f5553ab4af394356e907091fe468f16d3faf0f65` |
| `LensPatentStage4Audit.txt` | `c92f2d6289f1a8bdda2c3cdc0fe576151b2d9be77e9b61c8640fff91528fa8e9` |
| `LensPatentPromptPack_verify.py` | `9720bc31394d267dc4c208dec94ecb1d0200fb82d2de35a7df4ea88ca30ab65d` |

The workflow documents name `/mnt/data` as the output root and ChatGPT as the runtime; this job ran in Claude with `/mnt/user-data/outputs/` as the delivery location. `/mnt/transcripts/` was read-only, so no transcript/journal copy was written. The taxonomy reference, authoring guide and integration handoff named by the protocol were not present in the project and were not consulted.

## 2. Extraction and conventions

All numerical tables are embedded raster images (Table 10: xref 99, 1217×1737 px, ≈200 dpi native). Values were read visually from the native rasters and independently re-read by per-cell Tesseract OCR; every disagreement was an OCR dropout and was resolved by zoomed inspection (d13 = 2.23 and d22 = 2.87 re-checked specifically). **No transcription corrections and no proposed source corrections.**

- Locators: Table 10 (pdf p. 25) prescription; Table 11 (p. 26) f 581.97, Fno 4.12, ω 2.11°, Y 21.633, L 455.32, BF 39.18; Table 12 (p. 26) d14 51.20→31.73, d17 9.54→29.00 for 被写体距離 ∞ / 4.5m; Tables 35 and 39 (pp. 45, 50) condition values; Fig. 13 (p. 82) layout; ¶0073 symbol definitions; ¶0107–0110 group composition.
- Conventions: light left→right; r > 0 centre on image side; d_i from surface i to i+1; nd/νd at d-line 587.6 nm; θgF = (ng−nF)/(nF−nC). No aspheres anywhere in the publication. No cover glass or filter plate tabulated. Units mm; no scaling.
- Structure (verified, S1-STRUCT): 41 surfaces, stop S21, 23 elements in 17 air-separated groups. GR1 = L11–L17; GR2 = L21+L22 (cemented, focus); GR3a = L31+L32; stop; GR3b = L33+L34, L35 (OIS); GR3c = L36, L37, L38+L39, L40+L41, L42+L43, L44.
- Source observations: L33 (1.85478/24.80) has no printed θgF although L13/L15 with the same coordinate list 0.6122 (no value inferred). Table 39 prints Example 6's |f3cn/f| with negative signs (sibling table only; noted to prevent mixing).

## 3. Model transformations

- **MD-01** (image-plane): Set last gap to printed BF = 39.18 mm (source branch); also evaluate paraxial BFD (model branch) separately. Patent prints BF; computed BFD from rounded data differs by -0.03 mm. Choice of authored image distance is a Stage 2 decision; both branches are reported.
- **MD-02** (omission): No cover glass or filter plate modeled. Patent lists none (¶0016 says a cover glass may be present but none is tabulated). Sony counts one drop-in filter in 18/24; LENS_DATA_SPEC includes drop-in filters only when the source prescription lists the plate. No plate data exist; none invented.
- **MD-03** (focus): Two published states; GR2 translates, d14+d17 conserved (60.74 / 60.73). Published variable-gap table; 0.01 non-conservation is within two-value rounding (±0.01).
- **MD-04** (stop-inference): Not performed at Stage 1. Stage 2 must infer physical stop semi-diameter by calibration to Fno 4.12 at infinity and label it calibration.. Patent publishes no stop diameter or semi-diameters.
- **MD-05** (scope): Model the patent's all-spherical Example 4 as published; do not add an aspheric surface to emulate the production XA element. No source prescription exists for the production XA surface.

## 4. Glass review

Unseeded search over every evaluable glass in the opticalglass 2.0.2 bundled catalogs — OHARA (134), HOYA (238), SCHOTT (122), SUMITA (128), HIKARI (144), CDGM (321) — plus a crystalline CaF₂ reference (Malitson 1963 Sellmeier). Metric √(Δnd² + (Δνd/50)²). Catalog file hashes are in `evidence.glassEvidence.catalogCoverage`; coefficients of retained candidates are stored and replayed offline (S1-GLASS-REPLAY PASS).

| Coordinate (nd/νd) | Elements | Patent θgF | Nearest candidate (dist.) | Proposed label | Class |
|---|---|---|---|---|---|
| 1.59270/35.31 | L11, L21, L39 | — | OHARA S-FTM16 (0.00000) | S-FTM16 (OHARA) | Exact |
| 1.43385/95.23 | L12, L14 | 0.5387 | HOYA FCD100 (0.00408) | CaF2 (fluorite) class | Equivalent |
| 1.85478/24.80 | L13, L15, L33 | 0.6122 | OHARA S-NBH56 (0.00002) | S-NBH56 (OHARA) | Exact |
| 1.43700/95.10 | L16 | 0.5334 | HOYA FCD100 (0.00001) | FCD100 (HOYA) | Exact |
| 1.51680/64.20 | L17, L22 | — | CDGM H-K9L (0.00003) | 517642 (BK7 class) | Exact (code) |
| 1.71736/29.50 | L31 | — | HOYA E-FD1 (0.00001) | 717295 (E-FD1 class) | Exact (code) |
| 1.48749/70.44 | L32 | — | CDGM H-QK3L (0.00001) | 487704 (FC5 class) | Exact (code) |
| 1.49700/81.61 | L34 | — | SCHOTT N-PK52A (0.00001) | 497816 (FCD1 class) | Exact (code) |
| 1.77250/49.62 | L35 | — | HIKARI J-LASF016 (0.00000) | 773496 (TAF1 class) | Exact (code) |
| 1.58144/40.89 | L36, L37 | — | SCHOTT LF5HTi (0.00000) | 581409 (E-FL5 class) | Exact (code) |
| 1.95375/32.32 | L38 | — | HOYA TAFD45 (0.00003) | TAFD45 (HOYA) | Exact |
| 1.59282/68.63 | L40 | 0.5441 | HOYA FCD515 (0.00011) | FCD515 (HOYA) | Exact |
| 1.68893/31.16 | L41 | — | HOYA E-FD8 (0.00001) | E-FD8 (HOYA) | Exact |
| 1.72047/34.71 | L42 | — | OHARA S-NBH 8 (0.00004) | S-NBH8 (OHARA) | Exact |
| 1.92286/20.88 | L43, L44 | 0.6388 | CDGM H-ZF62 (0.00000) | 923209 (E-FDS1-W class) | Exact (code) |

Notes. (i) 1.43385/95.23: nd and θgF agree with crystalline CaF₂ (Malitson: nd 1.43385, θgF 0.5387) while νd differs by 0.23 (reference 95.00); no catalog glass matches, and the manufacturer states fluorite is used — labelled a CaF₂ class at Equivalent strength, not an exact catalog identity. (ii) 1.43700/95.10/0.5334 matches HOYA FCD100 exactly; it is a fluorophosphate glass, not fluorite. (iii) Coordinate-exact candidates exist from several vendors for most entries; vendor selection is a Stage 2 decision and does not establish supplier identity. (iv) Deviations from the patent's normal line (−0.001801νd + 0.648262) for elements with published θgF:

| Coordinate | θgF | ΔθgF (patent line) | ΔθgF (Schott normal 0.6438−0.001682νd, reference only) |
|---|---|---|---|
| 1.43385/95.23 | 0.5387 | +0.0619 | +0.0551 |
| 1.85478/24.80 | 0.6122 | +0.0086 | +0.0101 |
| 1.43700/95.10 | 0.5334 | +0.0564 | +0.0496 |
| 1.59282/68.63 | 0.5441 | +0.0194 | +0.0157 |
| 1.92286/20.88 | 0.6388 | +0.0281 | +0.0301 |

The engine's `dPgF` baseline (`src/optics/dispersion.ts`) was not available; Stage 2 must compute `dPgF` against it, not copy these values.

## 5. Numerical results (source branch)

Paraxial y-nu trace and an independently coded actual-angle ABCD method agree to < 1e-9 (S1-YNU-ABCD); an analytic singlet check passes (S1-ANALYTIC). Tolerances use a seeded 4000-sample Monte Carlo of uniform rounding of every printed r, d and nd (σ_EFL = 0.539 mm, σ_BFD = 0.085 mm).

| Quantity | Computed | Patent | Residual | Tolerance | Status |
|---|---|---|---|---|---|
| EFL (mm) | 582.088 | 581.97 | +0.118 | ±1.616 | PASS |
| BFD vs BF (mm) | 39.150 | 39.18 | -0.030 | ±0.254 | PASS |
| Σd + printed BF vs L (mm) | 455.340 | 455.32 | +0.020 | ±0.055 | PASS |
| Σd + paraxial BFD vs L (mm) | 455.310 | 455.32 | -0.010 | ±0.260 | PASS |
| Real chief-ray height at ω = 2.11° (mm) | 21.665 | 21.633 | +0.032 | ±0.051 (ω print precision) | PASS |

- EFL **582.088 mm**; BFD 39.150 mm (printed BF 39.18); vertex track S1–S41 416.16 mm; L with printed BF 455.34 mm.
- Telephoto ratio TL/EFL = **0.7823** (< 1, infinity, first vertex to printed-BF image plane) — telephoto verified (S1-TELEPHOTO).
- Rear principal plane H′ at z = -126.78 mm (ahead of S1 by 126.78 mm); front principal plane H at z = -2591.9 mm; front focal point at z = -3174.0 mm (z from S1, + toward image).
- Petzval sum Σφ/(n n′) = -1.8648e-04 mm⁻¹ (×EFL = -0.1085); Petzval radius 5363 mm.
- Paraxial entrance pupil at z = 1203.5 mm; stop/EP height ratio 0.2337. Exit pupil 38.25 mm ahead of S41 (77.43 mm from the image).
- **Calibration preview only:** an entrance-pupil radius f/(2·4.12) maps to a paraxial stop semi-diameter of 16.506 mm. This is not a published value and not independent f-number evidence.
- Real chief ray at ω = 2.11° vs f·tanω: +1.02 % (pincushion), at the printed-BF plane.

### Standalone element focal lengths (thick lens in air)

| Element | Group | nd | νd | f (mm) |
|---|---|---|---|---|
| L11 | GR1 | 1.59270 | 35.31 | +448.06 |
| L12 | GR1 | 1.43385 | 95.23 | +252.09 |
| L13 | GR1 | 1.85478 | 24.80 | -157.07 |
| L14 | GR1 | 1.43385 | 95.23 | +207.28 |
| L15 | GR1 | 1.85478 | 24.80 | -232.15 |
| L16 | GR1 | 1.43700 | 95.10 | +233.84 |
| L17 | GR1 | 1.51680 | 64.20 | -253.33 |
| L21 | GR2 | 1.59270 | 35.31 | +99.22 |
| L22 | GR2 | 1.51680 | 64.20 | -218.03 |
| L31 | GR3a | 1.71736 | 29.50 | +139.58 |
| L32 | GR3a | 1.48749 | 70.44 | -79.77 |
| L33 | GR3b | 1.85478 | 24.80 | +69.40 |
| L34 | GR3b | 1.49700 | 81.61 | -69.23 |
| L35 | GR3b | 1.77250 | 49.62 | -56.75 |
| L36 | GR3c | 1.58144 | 40.89 | +63.21 |
| L37 | GR3c | 1.58144 | 40.89 | +56.63 |
| L38 | GR3c | 1.95375 | 32.32 | -18.21 |
| L39 | GR3c | 1.59270 | 35.31 | +28.88 |
| L40 | GR3c | 1.59282 | 68.63 | -24.65 |
| L41 | GR3c | 1.68893 | 31.16 | +36.10 |
| L42 | GR3c | 1.72047 | 34.71 | +20.76 |
| L43 | GR3c | 1.92286 | 20.88 | -26.73 |
| L44 | GR3c | 1.92286 | 20.88 | -91.61 |

| Cemented unit | Net f (mm) |
|---|---|
| L21+L22 (S15–S17) | +176.54 |
| L31+L32 (S18–S20) | -194.05 |
| L33+L34 (S22–S24) | +2552.61 |
| L38+L39 (S31–S33) | -55.38 |
| L40+L41 (S34–S36) | -69.52 |
| L42+L43 (S37–S39) | +70.25 |

| Group | Surfaces | f (mm, standalone in air) |
|---|---|---|
| GR1 | S1–S14 | +520.21 |
| GR2 | S15–S17 | +176.54 |
| GR3a | S18–S20 | -194.05 |
| GR3b | S22–S26 | -59.94 |
| GR3c | S27–S41 | +87.93 |
| GR3 | S18–S41 | -46.65 |

Group signs agree with the patent (GR1 +, GR2 +, GR3 −; S1-GROUP-SIGNS PASS). GR3c is positive (+87.93 mm) inside the negative GR3; the patent's condition (12) is stated on |f3c|.

### Focus (published states)

- GR2 moves 19.47 mm toward the object; d14 + d17 = 60.74 / 60.73 (conserved within the ±0.02 rounding of four printed values; S1-GAP-CONSERVE PASS).
- Solved conjugate of the close state (closed-form ABCD and y-nu bisection agree; S1-FOCUS-SOLVE PASS): object-to-image **4.4838 m** with printed BF (4.4853 m with paraxial BFD); object-to-first-vertex 4.0284 m. The printed '4.5m' (±0.05 m) is consistent only with the image-plane reading (S1-CLOSE-DIST PASS).
- Paraxial magnification at the close state -0.1364 (|β| 0.136); marketed maximum magnification 0.14× (kept separate as a marketing quantity).

### Patent conditions (Example 4)

| Condition | Computed | Printed | Tolerance | Reproduced | Range satisfied |
|---|---|---|---|---|---|
| (1) L/f | 0.78225 | 0.782 | ±0.0022 | yes | yes |
| (1)-L L (mm) | 455.340 | 455.3 | ±0.10 | yes | yes |
| (1)-f f (mm) | 582.088 | 582.0 | ±1.62 | yes | yes |
| (2) D_g1max/f | 0.29760 | 0.298 | ±0.0010 | yes | yes |
| (3) D_3bImg/f (S22 vertex to image) | 0.17350 | 0.174 | ±0.0010 | yes | yes |
| (4)/(5) L12 PgF_1p - line | 0.061947 | 0.062 | ±0.00010 | yes | yes |
| (4)/(5) L14 PgF_1p - line | 0.061947 | 0.062 | ±0.00010 | yes | yes |
| (4)/(5) L16 PgF_1p - line | 0.056413 | 0.0564 | ±0.00010 | yes | yes |
| (6) L43 PgF_3cn - line | 0.028143 | 0.0281 | ±0.00010 | yes | yes |
| (6) L44 PgF_3cn - line | 0.028143 | 0.0281 | ±0.00010 | yes | yes |
| (6) L40 PgF_3cn - line | 0.019441 | 0.0194 | ±0.00010 | yes | yes |
| (7) vd_3cn (L43, L44) | 20.8800 | 20.88 | ±0.010 | yes | yes |
| (8) L40 f3cn (mm, standalone in air) | -24.6465 | -24.65 | ±0.010 | yes | yes |
| (8) L40 ratio |f3cn/f| | 0.04234 | 0.042 | ±0.0010 | yes | yes |
| (8) L43 f3cn (mm, standalone in air) | -26.7298 | -26.72 | ±0.013 | yes | yes |
| (8) L43 ratio |f3cn/f| | 0.04592 | 0.046 | ±0.0010 | yes | yes |
| (8) L44 f3cn (mm, standalone in air) | -91.6104 | -91.62 | ±0.048 | yes | yes |
| (8) L44 ratio |f3cn/f| | 0.15738 | 0.157 | ±0.0010 | yes | no |
| (9) L40 D_3cnImg/f (object-side vertex to image) | 0.11052 | 0.111 | ±0.0010 | yes | yes |
| (9) L43 D_3cnImg/f (object-side vertex to image) | 0.07884 | 0.079 | ±0.0010 | yes | yes |
| (9) L44 D_3cnImg/f (object-side vertex to image) | 0.06937 | 0.069 | ±0.0010 | yes | yes |
| (10)/(11) L13 PgF_1n - line | 0.008603 | 0.0086 | ±0.00010 | yes | yes |
| (10)/(11) L15 PgF_1n - line | 0.008603 | 0.0086 | ±0.00010 | yes | yes |
| (12) f3c (mm) | 87.9342 | 87.88 | ±0.121 | yes | yes |
| (12) ratio |f3c/f| | 0.15107 | 0.151 | ±0.0010 | yes | yes |

All 25 printed Example-4 condition values are reproduced (S1-CONDITIONS PASS). L44's |f3cn/f| = 0.157 lies outside range (8), as the patent's own table shows; the condition requires at least one qualifying negative lens, which L40 and L43 provide.

## 6. Correction and discrepancy register

| ID | Item | Observation | Disposition |
|---|---|---|---|
| D-01 | EFL | 582.088 vs printed 581.97 (+0.118 mm, +0.22σ) | Within source rounding; no correction |
| D-02 | BF | paraxial 39.150 vs printed 39.18 (-0.030 mm, -0.35σ) | Within rounding; image-distance choice deferred to Stage 2 (MD-01) |
| D-03 | L | Σd + 39.18 = 455.34 vs 455.32 (+0.02) | Within rounding of 41 printed spacings |
| D-04 | f3c (12) | 87.934 vs 87.88 (+0.054; MC σ 0.040) | Exceeds one printed unit but within 3σ of source rounding; reproduced |
| D-05 | d14+d17 | 60.74 → 60.73 | Two-value rounding; no correction |
| D-06 | Y at ω | real 21.665 vs 21.633 | Within ω print precision (±0.051 mm) |
| D-07 | Product | XA asphere and third fluorite element in production; Example 4 all-spherical with two CaF₂-class elements | Correlation limitation; disclose; not a construction blocker |

No printed mismatch was suppressed; all raw comparisons remain in `results.comparisons`.

## 7. Product correlation

Manufacturer (Sony specification page, retrieved 2026-10-02): Sony E-mount, 35mm full frame, 600 mm F4–F22, 18-24 *Including one filter, angle of view 4°10', 11 blades, minimum focus 4.5 m, maximum magnification 0.14x, 40.5 mm slide-in filter slot, 163.6 x 449 mm, 3040 g; optical features: newly-developed large XA (extreme aspherical) element and three fluorite elements. Announced 2019-06-11.

Convergent evidence:
- Optical element/group count: 23 elements in 17 groups + Sony's counted filter = 24/18
- Published close state 4.5 m equals manufacturer minimum focus 4.5 m
- ω 2.11° vs manufacturer full-frame angle of view 4°10' (half 2.083°)
- Single moving positive cemented focus group, fixed front group (inner focus) consistent with 'large focus group' driven by linear motors
- Patent priority 2019-06-04, one week before announcement
- Optical length L=455.32 mm (≈437.3 mm ahead of the E-mount flange plane at 18 mm) fits within the 449 mm barrel

Contradictions:
- Manufacturer: large XA aspherical element. Example 4 (and every example in this publication) is all-spherical.
- Manufacturer: three fluorite elements. Example 4 has two elements at the crystalline CaF2 coordinate (L12, L14) plus L16 at 1.43700/95.10, which matches HOYA FCD100 (glass), not fluorite.
- Sibling Example 6 (f=587.9) has three νd 95.23 elements per Table 35 but L=490.0 mm, which cannot fit in the 449 mm barrel; consulted only to explain the fluorite contradiction.

Disposition: Example 4 is a close design-family counterpart with the production element/group architecture and focus range, not a manufacturer-confirmed production prescription. The production lens differs at least in the XA asphere and fluorite allocation. Sony's 0.14× and 4°10′ are marketed quantities and are not used as design references.

## 8. Focus disposition

**PUBLISHED.** Inner focus by GR2 alone with two published states (∞ and 4.5 m object-to-image). No reconstruction is required. The image-plane distance reference is supported by the conjugate solve (S1-CLOSE-DIST). Stage 2 authors `var` for surfaces 14 and 17 from Table 12.

## 9. Quantitative-claim map (for Stage 3)

| Claim class | Fact / result ID | Governing source |
|---|---|---|
| EFL, BFD, track, telephoto ratio | F-EFL, F-BFD, F-TRACK-GLASS, F-TL-PRINTEDBF, F-TELE-RATIO | Table 10/11; results |
| Principal planes, pupils | F-PRINCIPAL, F-EP, F-XP | results |
| Petzval | F-PETZVAL, F-PETZVAL-TERMS | results |
| Element / cemented / group powers and roles | F-ELEMENTS, F-CEMENTED, F-GROUPS | results |
| Focus travel, close conjugate, magnification | F-FOCUS-TRAVEL, F-FOCUS-CONJ | Table 12; results |
| Element/group/asphere counts | F-COUNTS | Table 10; Fig. 13 |
| Glass labels, θgF deviations | F-GLASS; evidence.glassEvidence | catalogs; Table 10 |
| Conditions (1)–(12) | sourceModel.conditions | Tables 35/39 |
| Edge distortion (real ray) | F-DISTORTION-EDGE | results |
| Stop size | F-STOP-PREVIEW (calibration only) | Stage 2 must replace with implemented-model result |
| Production correlation statements | evidence.productCorrelation | S-SONY-SPEC, S-PRESS |

Stage 2/3 must re-bind these to the implemented `.data.ts` revision; interpretive prose and citations require manual review.

## 10. Gate disposition

| Check | Scope | Status | Required at |
|---|---|---|---|
| S1-STRUCT | CHAT_PREFLIGHT | PASS | stage1 |
| S1-YNU-ABCD | CHAT_PREFLIGHT | PASS | stage1 |
| S1-ANALYTIC | CHAT_PREFLIGHT | PASS | stage1 |
| S1-FIRST-ORDER | CHAT_PREFLIGHT | PASS | stage1 |
| S1-GAP-CONSERVE | CHAT_PREFLIGHT | PASS | stage1 |
| S1-FOCUS-SOLVE | CHAT_PREFLIGHT | PASS | stage1 |
| S1-CLOSE-DIST | CHAT_PREFLIGHT | PASS | stage1 |
| S1-POWERS | CHAT_PREFLIGHT | PASS | stage1 |
| S1-GROUP-SIGNS | CHAT_PREFLIGHT | PASS | stage1 |
| S1-FIELD | CHAT_PREFLIGHT | PASS | stage1 |
| S1-CONDITIONS | CHAT_PREFLIGHT | PASS | stage1 |
| S1-GLASS-REPLAY | CHAT_PREFLIGHT | PASS | stage1 |
| S1-GLASS-COVERAGE | CHAT_PREFLIGHT | PASS | stage1 |
| S1-TELEPHOTO | CHAT_PREFLIGHT | PASS | stage1 |
| LV-TYPECHECK | LENSVISUALIZER | NOT_RUN | integration |
| LV-BUILDLENS | LENSVISUALIZER | NOT_RUN | integration |
| LV-VALIDATE | LENSVISUALIZER | NOT_RUN | integration |
| LV-RENDER | LENSVISUALIZER | NOT_RUN | integration |
| LV-GLASS-RESOLVE | LENSVISUALIZER | NOT_RUN | integration |
| S2-STOP-SD | CHAT_PREFLIGHT | NOT_APPLICABLE | stage2 |

All 14 mandatory Stage 1 chat checks pass. Repository checks remain NOT_RUN (integration). **Gate: READY_FOR_DATA.** `integrationStatus: INTEGRATION_PENDING` (closed: integrated 2026-10-20).

### Stage 2 tasks

- Author the 41-surface model from Table 10 with `var` {"14": [51.20, 31.73], "17": [9.54, 29.00]}; decide the authored image distance (printed BF 39.18 vs paraxial 39.150) and disclose it (MD-01).
- Infer the physical stop semi-diameter by calibration to Fno 4.12 and label it as calibration (preview 16.51 mm paraxial).
- Derive semi-diameters and pass the current edge-thickness, rim-slope, gap-intrusion and containment rules.
- `closeFocusM`: 4.5 (manufacturer and patent); a `finiteConjugates` entry may use `distanceReference: "image-plane"`, citing Table 12 and S1-CLOSE-DIST.
- Choose glass label strings from the evidence (CaF₂ class for L12/L14; FCD100 (HOYA) for L16, etc.); put published θgF-derived `dPgF` on L12, L13, L14, L15, L16, L40, L43, L44 using the engine baseline.
- Do not add a drop-in filter plate (no source data; MD-02); `elementCount` 23, 17 groups.
- Disclose in the header/analysis that the production XA asphere and third fluorite element are not in this example (MD-05).
- Patent metadata: `patentNumber` 'JP 2025-063175 A', `patentYear` 2025, `patentAssignees` ['Sony Group Corporation'], `patentAuthors` source-script '丸山 理樹' unless an official Latin form is found.
- Taxonomy: `lensMounts: ["sony-fe"]`, `imageFormat: "135-full-frame"`; maker slug from the assignee (Sony).
- Format the `.data.ts` with the project Prettier configuration.

### Pending integration (closed)

LensVisualizer type checking, `buildLens()`, `validateLensData()`, render diagnostics and runtime glass resolution are NOT_RUN and required at integration. Closed: done at integration, 2026-10-20.



---

# Stage 2 — Data construction (CHAT_PREFLIGHT and targeted LensVisualizer checks)

Construction verification by the authoring session; no independence is claimed.

## 11. Entry gate and references

- Incoming Stage 1 files matched every manifest hash. The upload had renamed `<stem>.x` to `<stem>_x`; canonical dotted names were restored without byte changes. The four job-card fields are unchanged.
- Stage 1 verifier replay: exit 0, all 14 Stage 1 checks PASS, EFL 582.0885 mm.
- Table 10, Table 11 and Table 12 were re-read from the native rasters (xrefs 99, 104, 106) and match `evidence.rawPrescription` exactly; L33's θgF cell is blank.
- Project references are byte-identical to the Stage 1 hashes. The LensVisualizer clone (commit `9e10e39`, 2026-10-02) carries a newer `LENS_DATA_SPEC.md` (sha256 `7a17daf0…`). Its differences are additive (`maker: null`, assignment-history assignees, `maxSdRatio`, `indexReferenceNote`) and none applies to this lens. Template, defaults and Prettier configuration are identical.

## 12. Construction and transformation ledger (Stage 2)

| ID | Decision |
|---|---|
| MD-01 | Last gap = printed BF 39.18 mm; paraxial BFD 39.150 mm recorded (C2-BF). |
| MD-04 | STO sd 16.50583 mm = paraxial calibration to Fno 4.12 at EFL 582.0885 mm. This is the value `buildLens()` adopts: its real-ray marginal at the nominal entrance pupil is clipped at S4, so it falls back to paraxial. The unclipped real-ray value would be 16.748 mm. Calibration only. |
| MD-06 | Modeled SDs from exact meridional envelopes. L11 = 76.0 mm is the off-axis vignetting aperture (Fig. 13 rim ≈ 76.1 mm). |
| MD-07 | L35 sd 12.8 mm (cross-gap cap 12.868 mm at gap 24). |
| MD-08 | S4/S5 sd capped at 34.2 mm; the surfaces intersect at h = 36.088 mm. |
| MD-09 | L21/L22 sd 27.6 mm; L21 knife edge at h = 28.684 mm. |
| MD-10 | `patentNumber` "JP 2025-63175 A" and `patentAuthors` ["Riki Maruyama"] follow the corpus-canonical forms used by `SonyFE400mmF28GMOSS` (Example 2 of the same publication). Glass labels are runtime-resolvable proxies. |
| MD-11 | dPgF uses the engine baseline 0.6438 − 0.001682νd and is authored only where θgF is printed. apd "patent" per ¶0033 / ¶0037. |

Glass labels in the data file (all resolve and pass the runtime compatibility window):

| Elements | Label |
|---|---|
| L11, L21, L39 | S-FTM16 |
| L12, L14 | CaF2 optical fluorite crystal |
| L13, L15, L33 | S-NBH56 |
| L16 | FCD100 |
| L17, L22 | H-K9L |
| L31 | S-TIH1 |
| L32 | H-QK3L |
| L34 | FCD1 |
| L35 | J-LASF016 |
| L36, L37 | E-FL5 |
| L38 | TAFD45 |
| L40 | FCD515 |
| L41 | E-FD8 |
| L42 | S-NBH8 |
| L43, L44 | E-FDS1 |

Every label except CaF2 carries the corpus qualifier "coordinate-compatible spectral proxy; supplier unconfirmed"; CaF2 carries "supplier unconfirmed". Supplier identity is not asserted.

dPgF values: L12/L14 +0.05507686; L16 +0.0495582; L13/L15 +0.0101136; L40 +0.01573566; L43/L44 +0.03012016.

## 13. Implemented-model results (parsed from `SonyFE600mmF4GMOSS.data.ts`, sha256 `ab000e3719c8b860ead3f5faec98bba25a074acaafed58910613a6fd26e7135d`)

The verifier loads the actual file with a strict literal parser. That parser accepts its fixture and rejects duplicate keys, arithmetic, spreads, computed keys, identifier values and leftover tokens (S2-LOADER-SELFTEST).

| Check | Scope | Status | Note |
|---|---|---|---|
| S2-LOADER-SELFTEST | CHAT_PREFLIGHT | PASS | 1 accepted, 6 rejected fixtures |
| S2-STRUCT | CHAT_PREFLIGHT | PASS | 41 surfaces, 1 STO, 23 elements, taxonomy, patent metadata, counts 23/17 |
| S2-SOURCE-MATCH | CHAT_PREFLIGHT | PASS | every R/d/nd/νd/elemId and var row equals the raw source plus MD-01 |
| S2-FIRST-ORDER | CHAT_PREFLIGHT | PASS | EFL 582.0885 mm (y-nu = ABCD = Stage 1); TL/EFL 0.7823; stop = calibration |
| S2-ELEMENT-FIELDS | CHAT_PREFLIGHT | PASS | authored fl and dPgF reproduce |
| S2-FOCUS | CHAT_PREFLIGHT | PASS | close state 4.4838 m object-to-image; β −0.1364; travel 19.47 mm |
| S2-GEOMETRY | CHAT_PREFLIGHT | PASS | min edge 0.548 mm; no slope, gap, ratio or cement violations at focusT 0, 0.25, 0.5, 0.75, 1 |
| **S2-AXIAL-CONTAINMENT** | CHAT_PREFLIGHT | **FAIL** | stop-filling axial bundle clipped at S4, S5 (∞ and 4.5 m), S15, S16 (4.5 m); unvignetted ≈ f/4.84 at ∞ |
| S2-OFFAXIS-CLIP-LOCATION | CHAT_PREFLIGHT | PASS | 0.6-field ±0.75 rays first clip at L11 (element edge), never inside a cemented group |
| LV-TYPECHECK | LENSVISUALIZER | PASS | real `tsc` 5.9.3 on this file against `LensDataInput` |
| LV-VALIDATE | LENSVISUALIZER | PASS | real `validateLensData`: no errors; mutation (S4/S5 sd 41) rejected for gap overlap |
| LV-BUILDLENS | LENSVISUALIZER | PASS | EFL 582.0885 mm, stop 16.50583 mm, EP 70.642 mm |
| LV-RENDER | LENSVISUALIZER | PASS | element render diagnostics: 0 mm trim (infinity layout only) |
| LV-GLASS-RESOLVE | LENSVISUALIZER | PASS | 23/23 labels resolve and pass the compatibility window |

The LensVisualizer checks were run as single-file checks in a read-only clone (Node 22.22.2, below the package's stated ≥24.15 engine). They are recorded in `SonyFE600mmF4GMOSS.lvcheck.json`, which is bound to the data hash. Not run: the full test suite, `generate:metadata`, the production build, and a visual check of the lens page. These remain integration items.

## 14. Discrepancy register (Stage 2 additions)

| ID | Item | Observation | Disposition |
|---|---|---|---|
| D-08 | S4/S5 airspace | R −217.05 / −202.53 with d4 = 0.22 intersect at h = 36.09 mm. The f/4.12 axial beam needs 40.78 mm at ∞ and 41.63 mm at 4.5 m. | **Unresolved source-geometry conflict.** The surfaces are capped at 34.2 mm; no correction to the patent is proposed. |
| D-09 | L21 edge | L21 reaches a knife edge at h = 28.68 mm; the 4.5 m stop-filling bundle needs 29.12 mm. | **Unresolved.** sd 27.6 mm; vignetting at close focus only. |
| D-10 | Runtime stop | `buildLens()` falls back to the paraxial stop calibration because its real marginal is clipped at S4. | Recorded; consequence of D-08. |

The raster re-read and the reproduction of the EFL and all 25 condition values exclude a transcription error. With the radii and spacing as printed, either the published Fno or physically realizable surfaces must give way. The production lens, which differs (XA asphere, three fluorite elements), is not evidence for either side.

## 15. Gate disposition (Stage 2)

Every mandatory Stage 2 chat check passes except **S2-AXIAL-CONTAINMENT (FAIL)**, which is a substantive source-geometry blocker (OI-07). **READY_FOR_ANALYSIS is not earned.** The last valid gate remains READY_FOR_DATA. `integrationStatus` stays INTEGRATION_PENDING.

Options for an informed decision. Each would be recorded as a ledger entry, followed by a rerun of the gate.

1. **Accept a documented model-of-record exception.** Keep the present candidate, with nominalFno 4.12 (patent) and geometry-valid SDs, and disclose the vignetting in the data and analysis. The containment check would be reclassified as a disclosed source limitation rather than a construction failure.
2. **Model what the geometry can realize.** Set `nominalFno` to the geometry-limited aperture (≈ 4.84; recomputed after the change) and keep `apertureDesign` 4.12 as the printed design value. This is internally consistent, but the viewer would no longer show the patent's f-number as the working aperture.
3. **Change the selected embodiment.** That requires a new job card.

## 16. Quantitative-claim map additions (for Stage 3)

| Claim | Fact / check | Governing revision |
|---|---|---|
| Implemented EFL, track, telephoto ratio, Petzval | F2-FIRST-ORDER | data sha256 above |
| Stop size (calibration) | F2-STOP-CAL | data sha256 above |
| Modeled SDs | F2-SD | data sha256 above |
| S4/S5 intersection, L21 knife edge | F2-SOURCE-GEOMETRY | Table 10 and verify.py |
| Effective unvignetted aperture | F2-EFFECTIVE-APERTURE | data sha256 above |
| Close-focus conjugate and magnification | F2-CLOSE, S2-FOCUS | Table 12 and data |



---

# Stage 3 — Analysis authoring (CHAT_PREFLIGHT and targeted LensVisualizer re-run)

Construction verification by the authoring session; no independence is claimed.

## 17. Entry gate and decision

- Incoming Stage 2 files matched the `stage2Checkpoint` hashes exactly (data `ab000e37…`, evidence `1425b736…`, verifier `af101847…`, results `e3ebd4a3…`); the upload had again renamed `<stem>.x` to `<stem>_x`, restored without byte changes. Patent and job card unchanged.
- The Stage 2 verifier replayed with exit 1 (only S2-AXIAL-CONTAINMENT failing) and stable output identical to the packaged results. READY_FOR_ANALYSIS had not been earned, so authoring was halted and the §15 options were put to the user.
- Table 10 rows 1–12 were re-read from the native raster (xref 99): r4 −217.05, d4 0.22, r5 −202.53 as transcribed. Independent sag solves gave the S4/S5 intersection at h = 36.0884 mm and the L21 knife edge at h = 28.6839 mm.
- **Decision (user, 2026-10-02): §15 option 1, documented model-of-record exception.** Recorded as MD-12 (`authorizedBy: user`). OI-07 closed by that decision. The §15 disposition is superseded; §§11–16 are retained as the Stage 2 record.

## 18. Corrections and changes made at Stage 3

| ID | Item | Before | After | Evidence | Consequence |
|---|---|---|---|---|---|
| D-11 / OI-08 | Verifier limitation text | hard-coded "≈f/4.91" | formatted from the computed fraction: f/4.84 (4.12 / 0.85158) | F2-EFFECTIVE-APERTURE | results/manifest limitation text corrected; data header already said f/4.84 |
| D-12 / MD-13 | Data header beam heights | "(40.8 mm at ∞)"; "the 4.5 m stop-filling bundle needs 29.1 mm"; "(unresolved …)" | both beam definitions stated: real ray at the f/4.12 EP radius (S5 40.78 mm at ∞; L21 29.12 mm at 4.5 m, stop height 16.748 mm) and the bundle filling the modeled 16.50583 mm stop (S5 40.18 mm; L21 28.678 mm, leaving a 0.003 mm edge); exception reference MD-12 | F2-APERTURE-BEAMS; S2-HEADER-CLAIMS | **data bytes changed (comment only)**: sha256 `ab000e37…` → `ce8afe5b…`; parsed object identical (strict loader equality); Prettier 3.8.1 with the project config: no change |
| MD-12 | Containment treatment | S2-AXIAL-CONTAINMENT FAIL gating | FAIL and C2-AXIAL-CONTAINMENT MISMATCH retained; gating by S2-AXIAL-CONTAINMENT-RESOLUTION | evidence MD-12 | READY_FOR_ANALYSIS re-earned on the new bytes |

The quoted 40.8/29.1 mm values were reproducible only under the real-pupil definition, while the header described the bundle as filling its own (paraxial-calibrated) stop; MD-13 makes the definitions explicit rather than choosing one silently. No prescription, SD, glass, focus or metadata value changed.

## 19. Stage 2 gate re-run on the corrected bytes

New checks added to the verifier's Stage 2 branch:

- **S2-HEADER-CLAIMS** — 28 numeric claims in the header comment are regenerated from executed values or evidence and must appear verbatim. PASS.
- **S2-AXIAL-CONTAINMENT-RESOLUTION** — passes only if MD-12 records user authorization; the conflict is inherent in the printed geometry (intersection below the beam; L21 edge < 0.5 mm at the modeled need; real-pupil bundle beyond the knife edge); clipping is confined to S4, S5, S15, S16; nominalFno = apertureDesign = printed Fno; S2-GEOMETRY, S2-OFFAXIS-CLIP-LOCATION and S2-HEADER-CLAIMS pass; and the header discloses the exception. PASS.
- S2-AXIAL-CONTAINMENT remains **FAIL** in `results.checks` with `resolvedBy`; it is reported under `summary.nonGatingFailures`, never converted to NOT_RUN/NOT_APPLICABLE.

LensVisualizer single-file checks were re-run on `ce8afe5b…` (clone at commit `9e10e39`, Node 22.22.2 with engine-strict off, `npm ci --ignore-scripts`, untracked files only): `tsc` type check PASS; `validateLensData` via `scripts/audit-surface-probe.mjs` PASS with the S4/S5 sd = 41 mutation rejected; `buildLens()` PASS (EFL 582.0885 mm, stop 16.50583 mm, EP 70.6418 mm; runtime tracing half-field 2.586° is a viewer quantity, not the patent ω); render diagnostics now cover focusT 0, 0.5 and 1 with 0 mm trim; 23/23 glass strings resolve and are compatible. Recorded in `SonyFE600mmF4GMOSS.lvcheck.json`, bound to the new data hash.

## 20. Stage 3 computations (all from the parsed `.data.ts`)

| Fact | Content | Second route (S3-COMPUTE-CROSSCHECK) |
|---|---|---|
| F3-GROUP-MAGNIFICATION | β2 0.4978 / 0.3875, β_rear 2.2480 / 2.2487 (∞ / 4.5 m); IS sensitivity (1−β3b)β3c −1.5221 / −1.5228; focus sensitivity (1−β2²)β_rear² 3.8015 / 4.2972 | decentred paraxial trace (agreement 2e-15); finite-difference image shift (≤ 7e-7) |
| F3-TELE-FACTOR | f_GR1 520.209 × 0.4978 × 2.2480 | equals EFL to 1e-12 mm |
| F3-PETZVAL-GROUPS | ×f: GR1 +1.239, GR2 +1.962, GR3a −2.459, GR3b −6.834, GR3c +5.982 | total equals Stage 2 Petzval |
| F3-CHROMATIC-SEIDEL | first-order F–C, Δn = (nd−1)/νd; LCA total +0.2769 mm (direct +0.2793); lateral −0.0061 (direct −0.0064); per-group and per-element splits | Seidel vs direct dispersed traces: 0.85 % / 4.1 % (second-order terms); element split sums to total |
| F3-RAY-HEIGHTS | paraxial marginal (f/4.12 EP radius) and chief (printed ω) heights per element | chief-ray EP location equals F-EP |
| F3-CONDITIONS-IMPLEMENTED | (1), (2), (3), (9), (12) from the parsed spacings | S3-CONDITIONS-BINDING: equal to the source-model values (< 1e-9) |
| F3-CEMENT-INTERFACE-POWER | φ = (n′−n)/R per cemented interface; strongest negative S32 −0.01719 mm⁻¹ | direct formula |

Limitations: no g–F (secondary-spectrum) total — θgF is printed for 8 of 23 elements and no catalog proxy is substituted; the lateral-colour Seidel/trace agreement is 4 %, so the analysis quotes the direct-trace total and uses the Seidel split only for group shares.

## 21. Analysis-consistency gate

| Check | Method | Status |
|---|---|---|
| S3-COMPUTE-CROSSCHECK | Each new Stage 3 quantity is checked by a second route: (1−β)β′ vs decentred paraxial trace; (1−β²)β′² vs finite difference; f_GR1·β2·β3 = EFL; group Petzval to | PASS |
| S3-CONDITIONS-BINDING | Spacing-dependent condition values recomputed from the parsed .data.ts equal the Stage 1 source-model values | PASS |
| S3-METADATA | Bold metadata block, title, counts and data specs/subtitle agree with data, evidence and job card | PASS |
| S3-SECTIONS | LENS_ANALYSIS_SPEC order (required 1–5, Aspherical omitted for an all-spherical design, conditional sections, Sources last); ≤ 650 lines | PASS |
| S3-ELEMENT-LINES | One '#### Lnn — <data type>' heading per element; first line nd (5 dp), νd (2 dp), glass token and signed f (2 dp) equal the data file | PASS |
| S3-CLAIMS | Claim registry regenerates each quantitative statement from results facts, evidence or the parsed data and requires it verbatim; a residual sweep then requires  | PASS |
| S3-DISCLOSURES | Required disclosures (inferred stop/SDs, research correlation, production differences, MD-12 exception, omitted plates, no scaling, spectral-proxy limits) | PASS |
| S3-CITATIONS | Every cited ¶ is in the verified paragraph index (evidence S-PATENT.verifiedParagraphs); every URL is a recorded source; cited tables belong to Example 4 or its | PASS |
| S3-STYLE | νd notation, third person, no marketing or process vocabulary, no unsupported APO assertion | PASS |

The S3-CLAIMS registry holds 219 literal claims (stored in `results.facts["F3-CLAIM-REGISTRY"]` with their bases). A residual sweep then requires that no digit outside the Sources section is left unexplained after removing registry claims, element lines and allow-listed non-claim tokens (¶ numbers, dates, table/figure/example numbers, surface/element/group labels, publication identifiers, glass names, six-digit codes, condition symbols).

**Mutation tests** (each on a scratch copy; every mutation made the verifier exit non-zero with the named check FAIL): EFL changed 582.09→582.10 (S3-CLAIMS); an unregistered number inserted (S3-CLAIMS sweep); L21 f +99.22→+99.23 (S3-ELEMENT-LINES); ¶0059→¶0099 (S3-CITATIONS); "νd"→"vd" (S3-STYLE); section order broken (S3-SECTIONS); a required disclosure removed (S3-DISCLOSURES); MD-12 `authorizedBy` removed (S2-AXIAL-CONTAINMENT-RESOLUTION); header 40.8→40.9 mm (S2-HEADER-CLAIMS, plus the LV report no longer binds).

**Manual review of interpretive prose and citations.** Every cited ¶ (0006, 0012–0016, 0018, 0020–0022, 0026–0029, 0032–0033, 0036–0037, 0049, 0052–0053, 0057, 0059, 0073, 0107–0110, 0115) was read against the patent text layer and is indexed in `evidence.sources[S-PATENT].verifiedParagraphs`. Manufacturer facts were re-read on Sony's own product pages (sony.ca, recorded as S-SONY-SPEC-CA; agrees with S-SONY-SPEC). Corrections made during review, before delivery:
- "the largest of any element in GR1" (L11 colour) → "the largest of the positive elements in GR1" (L13 is larger in magnitude).
- "the diverging beam leaving GR3b" → replaced by the computed near-parallel marginal ray (11.21 → 11.07 mm).
- An uncomputed claim that the L38/L39 interface works "against field curvature without a large chromatic penalty" → replaced by its computed interface power.
- "fluorophosphate-class" for L34 and "chromatic corrector" for L33+L34 → replaced by the computed fact that the near-afocal pair is not achromatic (−4.27 mm).
- FCD100 "matches θgF to printed precision" → catalog θgF is 0.0002 above the printed value; the CaF₂ label rationale now states that FCD100 is marginally nearer by the nd/νd metric.
- The lateral-colour sentence crediting "the rear of the lens" → GR2 carries most of the primary lateral offset; GR3c's patent role concerns secondary lateral colour, which an νd-only calculation cannot assess.
- Generic statements ("normal design-to-marketing gap", "typical of a long telephoto", "scaled to a longer focal length") removed as unsupported.
- No drive-motor count is stated: Sony's specification page does not give it, and retailer descriptions are third-party.

## 22. Quantitative-claim map (Stage 3)

| Analysis section | Claims | Fact / result | Governing revision / source |
|---|---|---|---|
| Patent Reference | f, Fno, ω, Y, L, BF; counts; 2ω; 3.0 % focal-length gap; 4.484 m; −0.136; dates | Table 11 (evidence.systemValues); data counts; F-FOCUS-CONJ; S-SONY-SPEC(-CA); S-PRESS; S-PATENT | data `ce8afe5b…`; Tables 11–12 |
| Optical Architecture | group f; EFL; TL; TL/EFL; H′; magnification chain; 173.23 mm / 0.298 f; marginal 70.64→42.03; 0.1735 f; stop 16.506 / 16.75; L11 76.0; S4/S5 and L21 geometry; 34.2 / 0.023 / 27.6; f/4.84; Petzval and group shares | F-GROUPS, F2-FIRST-ORDER, F-PRINCIPAL, F3-TELE-FACTOR, F3-CONDITIONS-IMPLEMENTED, F3-RAY-HEIGHTS, F2-APERTURE-BEAMS, F2-SOURCE-GEOMETRY, F2-EFFECTIVE-APERTURE, F-PETZVAL, F3-PETZVAL-GROUPS | data `ce8afe5b…`; Table 10; S-FIG13 |
| Element-by-Element | first lines (nd, νd, glass token, f); net cemented f; condition values; element colour; interface power; marginal heights | data elements (S3-ELEMENT-LINES), F-CEMENTED, sourceModel.conditions, F3-CHROMATIC-SEIDEL, F3-CEMENT-INTERFACE-POWER, F3-RAY-HEIGHTS, glassEvidence | data; Table 10; catalogs |
| Glass Identification | coordinates, θgF, ΔPgF, codes, CaF₂ reference, FCD100 distances | Table 10; data dPgF; glassEvidence (S1-GLASS-REPLAY) | catalogs (opticalglass 2.0.2); Malitson 1963 |
| Focus Mechanism | gaps, travel, Σ change, 4.484/4.028 m, −0.136, β2, β_rear, sensitivities | Table 12; F-FOCUS-TRAVEL; F-FOCUS-CONJ; F3-GROUP-MAGNIFICATION | data var |
| Chromatic Correction | group and element F–C colour; totals; 8 of 23 θgF | F3-CHROMATIC-SEIDEL; rawPrescription θgF count | data; Table 10 |
| Conditional Expressions | computed vs printed, ranges, f3c 87.93 vs 87.88 | sourceModel.conditions; conditionTables; conditionDefinitions | Tables 35/39; claims |
| Image Stabilization | 12.60 mm / 0.178 / 3.40 mm; −1.52 both states | F3-RAY-HEIGHTS; F3-GROUP-MAGNIFICATION | data |
| Verification Summary | EFL/BFD/L; 21.665 vs 21.633; 0.01°; +1.02 %; 4.484 m | F-EFL, F-BFD, C-Y-REAL, F-DISTORTION-EDGE, F-FOCUS-CONJ | data; Table 11 |
| Data-file header and metadata strings | 28 header numbers; specs; subtitle | S2-HEADER-CLAIMS; S3-METADATA | data `ce8afe5b…` |

## 23. Gate disposition (Stage 3)

All mandatory Stage 1, Stage 2 and Stage 3 CHAT_PREFLIGHT checks pass on the final bytes; S2-AXIAL-CONTAINMENT remains a recorded, non-gating FAIL resolved by S2-AXIAL-CONTAINMENT-RESOLUTION (MD-12). The five LENSVISUALIZER single-file checks pass on the final data bytes; the full test suite, `generate:metadata`, production build and visual page check remain integration items. **Data changed during Stage 3: yes — header comment only (MD-13); parsed values unchanged.** Gate: **READY_FOR_AUDIT**. `integrationStatus`: INTEGRATION_PENDING. No independence is claimed; Stage 4 must be performed in a fresh context.

---

# Stage 4 — Source-first independent audit and delivery

## 24. Job, inputs and reference versions

Job card unchanged (`8f45a452…`): JP2025063175A, Example 4, Sony FE 600mm F4 GM OSS, stem `SonyFE600mmF4GMOSS`. Patent PDF unchanged (`6ed9695e…`, 118 pp.). The Stage 3 candidate arrived with `_` in place of `.` before each suffix; names were restored, bytes unchanged. Received hashes (all equal to the Stage 3 manifest): data `ce8afe5b…`, analysis `23dc325c…`, evidence `ee0df7d8…`, verify `7bd92742…`, results `05c8b024…`, audit `8f2cbc97…`, manifest `e65574e0…`, lvcheck `2d0a4105…`.

Controlling references: the project copies recorded in the manifest (unchanged since Stage 3). Impact check: the repository HEAD (`3d44a1be`, 2026-10-02) carries a newer `LENS_DATA_SPEC.md` (`7a17daf0…`) whose differences concern `maker: null`, assignment-history assignees, `maxSdRatio`, and `indexReferenceNote`; none applies to this lens (front page names Sony Group Corporation; no SD-ratio override; d-line source). The engine normal line in `src/optics/dispersion.ts` at HEAD is `0.6438 − 0.001682·νd`, matching the stored `dPgF`.

## 25. Exposure and independence scope

Before the baseline froze, the reviewer had seen the job card, the candidate filenames, project workflow notes, and the auto-displayed `lvcheck.json` (which exposed the element glass strings, model EFL 582.0885, stop SD 16.506, EP SD 70.64, and the S4/S5 mutation message). The data, analysis, evidence, results, verifier, audit and manifest were not opened until after the freeze. The independence claimed is procedural (fresh raster extraction, re-entered inputs, separately written code, unseeded glass search), not blindness. Correction A4-C01 was derived and validated by the same reviewer.

## 26. Independent baseline (frozen before reconciliation)

Source: native rasters of Table 10 (xref 99), Tables 11–12 (xref 104/106), Table 35 and Table 39 Example-4 columns (xref 209/232, rotated), and Fig. 13 (xref 358). Fingerprint `1c570d05154b2e587cf69c0b399f339888c834da2d960468ef739cfb32b4c51d` (SHA-256 of `json.dumps(sort_keys=True, separators=(',',':'), ensure_ascii=False)` of the baseline content), stored verbatim in `evidence.independentPass.independentBaseline` and recomputed by `A4-BASELINE-FINGERPRINT`.

| Quantity | Independent | Printed |
|---|---|---|
| EFL (y-nu = ABCD to 1e-12) | 582.0885 mm | 581.97 (Table 11), 582.0 (Table 35) |
| Paraxial BFD | 39.1501 mm | 39.18 |
| TL (S1 → paraxial image) / TL÷EFL | 455.3101 mm / 0.7822 | 455.32 / 0.782 |
| Group f GR1 / GR2 / GR3 (3a / 3b / 3c) | +520.21 / +176.54 / −46.65 (−194.05 / −59.94 / +87.93) | f3c 87.88 |
| f3cn L40 / L43 / L44 | −24.65 / −26.73 / −91.61 | −24.65 / −26.72 / −91.62 |
| Close state (printed-BF image plane) | object 4.484 m from image, 4.028 m from S1; β −0.136 | 4.5 m |
| Gap sum d14+d17 | 60.74 → 60.73 | — |
| Petzval sum | −1.865e−4 mm⁻¹ (radius 5363 mm) | — |

All Table 35/39 Example-4 entries were reproduced within one printed unit except f3c (+0.054 mm), which lies inside the 3σ source-rounding envelope (σ = 0.041 mm, 300-sample half-unit perturbation). The six-catalog unseeded search (opticalglass 2.0.2: OHARA 134, HOYA 238, SCHOTT 122, SUMITA 128, HIKARI 144, CDGM 321 evaluable rows) produced the same coordinate identifications as the author; 1.43385/95.23 has no catalog row within 0.004 and matches the CaF₂ reference (nd 1.433849, νd 94.996, θgF 0.5387).

## 27. Reconciliation (four views: patent, baseline, data, analysis)

- **Prescription.** Independent re-entry = `evidence.rawPrescription` = parsed `.data.ts` for every R, d, nd, νd and θgF, both `var` rows, and every element nd/νd; documented transformations only (S21 → `STO` with R 1e15; last gap = printed BF 39.18). (`A4-SRC-TRANSCRIPTION`, `A4-SRC-VS-DATA`.)
- **Geometry exception D-08/D-09 (MD-12).** Confirmed inherent: S4/S5 intersect at 36.088 mm while the f/4.12 real beam reaches 40.755/40.778 mm; L21 reaches zero edge at 28.684 mm while the close-state stop-filling bundle needs 28.689 mm. Sibling Example 3 prints d4 = −0.01 mm at the same L12/L13 position and Fig. 13 draws L12/L13 meeting at the rim, so near-contact tabulation is a property of this publication, not a transcription error. Treatment (cap SDs, keep printed Fno, disclose) remains defensible.
- **Analysis numbers.** Independently reproduced: H′ −126.78 mm; β₂ 0.498, β_rear 2.248, product = EFL; marginal heights 70.64 → 42.03 (L12), 12.60 (L33), 11.21 → 11.07; chief 3.40 mm at L33; real chief Y 21.665 mm, distortion +1.02 %; Petzval shares (+1.239, +1.962, −2.459, −6.834, +5.982); primary colour (element L11 −21.27, L13 +27.91, L15 +16.98, L12 −4.72, L14 −5.29, L16 −4.22, L33 −5.97, L34 +1.70; groups +13.33/−8.08/−1.75/−1.29/−1.94; total +0.28 mm; lateral magnitudes 0.2464/0.1767/0.0163/0.0163/0.0636); focus sensitivity 3.80 → 4.30 (β₂ 0.387 at 4.5 m); stabilization sensitivity −1.52 at both states; interface power −0.01719 mm⁻¹; CaF₂ distance 0.00468 (0.00467 unrounded). Cross-reference "Example 2 … FE 400mm F2.8 GM OSS in this collection" verified in the repository (`src/lens-data/sony/SonyFE400mmF28GMOSS.*`).
- **Production metadata.** Sony specification pages (re-checked 2026-10-02): 18 groups / 24 elements including one filter, XA + three fluorite elements, F4, 4.5 m, 0.14×, 11 blades, 40.5 mm filter. The data and analysis disclose the XA and fluorite-count contradictions and treat Example 4 as a design-family counterpart, not a confirmed identity. The patent-number-to-lens correlation remains research-based.
- **Glass labels.** No change. Several coordinates also match HOYA rows exactly (E-FD1, FC5, TAF1, BSC7), which would improve vendor consistency, but the runtime catalog has no E-FD1 and resolves TAF1/BSC7 only through aliases to non-identical OHARA rows; the current labels resolve to exact runtime rows (`LV-GLASS-RESOLVE`). The "E-" prefix glasses are HOYA, as the analysis states. `apd: "patent"` is used only for L12, L14, L16 (¶0033 "anomalous low-dispersion") and L40, L43, L44 (¶0037 "anomalous-dispersion"); L13/L15 carry `dPgF` with `apd: false`.

## 28. Correction register (Stage 4)

| ID | Location | Old | New | Evidence | Downstream |
|---|---|---|---|---|---|
| A4-C01 | `data.ts` header line 40; `analysis.md` Optical Architecture ¶ "The transcribed values…"; `verify.py` F2-EFFECTIVE-APERTURE | "≈ f/4.84 at ∞" / "about f/4.84" (= 4.12 ÷ stop-height fraction 0.85158) | "≈ f/4.89 at ∞" / "about f/4.89" | Exact on-axis bisection against the authored SDs: unvignetted EP radius 59.534 mm → EFL/(2·59.534) = 4.889; image-space 1/(2 sin U′) = 4.889 (both in the patched author path and the independent `IndModel`). The stop SD is a paraxial calibration whose real stop-filling bundle is ≈ f/4.18, so scaling 4.12 by a real-ray height fraction understates the f-number. | Header comment only (no optical field); data sha256 `ce8afe5b…` → `c533676b…`; LensVisualizer checks rerun; analysis sentence; results/manifest limitation text. Supersedes OI-08 (recorded as OI-09). |

No prescription, semi-diameter, glass, metadata or focus value was changed. Prettier 3.8.1 with the project configuration reports the corrected data file as already formatted.

## 29. Verification on the final bytes

`verify.py` now has a separately coded Stage 4 section (`IND_*` inputs, `IndModel`, `ind_compute`, `stage4_independent`) alongside the author's branches. Final run: all mandatory Stage 1–4 CHAT_PREFLIGHT checks PASS; `S2-AXIAL-CONTAINMENT` remains a visible non-gating FAIL resolved by `S2-AXIAL-CONTAINMENT-RESOLUTION`. Stage 4 checks: `A4-BASELINE-FINGERPRINT`, `A4-INPUTS-FROZEN`, `A4-SRC-TRANSCRIPTION`, `A4-SRC-VS-DATA`, `A4-FIRST-ORDER`, `A4-ROUNDING`, `A4-CONDITIONS`, `A4-CLOSE-REFERENCE`, `A4-GEOMETRY-CONFLICT`, `A4-EFFECTIVE-APERTURE`, `A4-ANALYSIS-NUMBERS`.

Negative controls (scratch copies): R5 −202.53 → −202.35 in the data file fails `A4-SRC-VS-DATA` and the author's source/first-order/claim checks; reverting the analysis to "f/4.84" fails `A4-EFFECTIVE-APERTURE` and `S3-CLAIMS`.

**LensVisualizer (real code, repository HEAD `3d44a1be`, Node 22.22.2 with engine-strict off, TypeScript 5.9.3, `npm ci --ignore-scripts`; untracked files only, no Git writes):** `tsc` on the data file PASS (negative control TS2322 rejected); `validateLensData` via `scripts/audit-surface-probe.mjs` PASS, S4/S5 sd = 41 mutation rejected; `buildLens` PASS (EFL 582.0885, stop 16.5058, EP SD 70.6418, FOPEN 4.12); render diagnostics PASS with 0 mm trim at focusT 0, 0.25, 0.5, 0.75, 1; `resolveGlass`/`resolveCompatibleGlass` PASS for all 23 elements. Recorded in `lvcheck.json` bound to `c533676b…`.

## 30. Remaining limitations

- The modeled lens vignettes on axis (≈ f/4.89 at ∞) because the printed S4/S5 and L21 geometry cannot pass the f/4.12 beam; this is the disclosed model-of-record exception, not a production property.
- The stop diameter is calibrated to the printed Fno; all other SDs are modeled.
- Secondary spectrum cannot be totalled: θgF is printed for 8 of 23 elements.
- Glass names are coordinate-compatible proxies; supplier identity is unconfirmed. CaF₂ νd differs from the Malitson reference by 0.23.
- f/22 minimum aperture is taken from the manufacturer specification recorded at Stage 1; the Stage 4 re-check could not render that field, and B&H agrees.
- Correlation to the SEL600F40GM is research-based (XA element and third fluorite element absent from Example 4).

## 31. Gate disposition (Stage 4)

All mandatory CHAT_PREFLIGHT checks pass on the final bytes; the one justified correction is recorded above with its evidence; the independent baseline is preserved and reproduces its fingerprint; targeted LensVisualizer single-file checks pass on the final data bytes. Gate: **READY_FOR_BATCH**. `integrationStatus`: **INTEGRATION_PENDING** (full test suite, `generate:metadata`, catalog-policy tests, production build/prerender and visual page check remain for the batch session). Closed: integrated 2026-10-20.

## 2026-10-20 — Deployment validation and wording pass

Source re-read. Table 10 (PDF p. 25) and Tables 11–12 (p. 26) were re-read from 250 dpi page renders, not from the package notes: all 41 rows (R, d, nd, νd, θgF), the stop at S21, the six cemented interfaces, both variable gaps in both states and BF. No mismatches. The publication has no aspheric surfaces (no 非球面 anywhere in the text layer). Fig. 13 (p. 82) agrees with the data file's 23 elements in 17 groups, the cemented pairs, the R signs and the stop position, and draws L12 and L13 touching at the rim.

First-order, patent vs model: f 581.97 vs 582.09 mm; Fno 4.12 vs 4.12 (stop calibrated); BF 39.18 vs paraxial 39.150 mm (last gap uses 39.18); L 455.32 vs 455.34 mm; ω 2.11°, chief ray reaching 21.633 mm. Close state as published (d14 31.73, d17 29.00): EFL 321.30 mm, object 4028 mm from S1 and 4484 mm object to image (printed "4.5 m"), paraxial magnification −0.1364 against the marketed 0.14×. GR2 travel 19.47 mm toward the object; d14 + d17 = 60.74 / 60.73.

S4/S5 misprint test. The printed R4 −217.05, d4 0.22 and R5 −202.53 intersect at h = 36.09 mm, inside the 40.8 mm f/4.12 axial beam. Single-misprint alternatives that separate the surfaces all break the printed f and BF: R5 −205.23 (EFL −34 mm), R5 −220.53 (−163 mm), d4 1.22 (−35 mm), R4 −227.05 (+65 mm). The printed set reproduces f within 0.12 mm and every printed condition value, so the intersection belongs to the published design. clearap still reports CLIPS-AXIAL at S4/S5 (beam 40.75 mm vs sd 34.2 mm; unvignetted axial ≈ f/4.89); audit:surface, audit:image-circle and audit:field-coverage pass.

Maker-diagram comparison. Sony's construction diagram (https://www.sony.jp/products/picture/y_SEL600F40GM_lenscomposition.jpg) shows three fluorite elements interleaved with other elements in the front group, one XA meniscus behind them, two elements in the focus-group position and two ED elements in the rear group. Example 4 matches the front-group layout with L12 and L14 (CaF₂ class) and L16 (FCD100 class, not fluorite), has no XA asphere, and its plausible rear ED positions are L34 (497816) and L40 (FCD515). Example 9 of the same publication (f 581.9, Fno 4.12, 4.5 m, BF 39.18, 23 elements / 17 groups) has three CaF₂-class elements but L = 470.00 mm (front vertex about 452 mm ahead of the flange, beyond the 449 mm barrel) and a single-element focus group moving 31.03 mm toward the image. Example 4 (about 437 mm ahead of the flange) is kept. Examples 6 (L 490.00) and 2 (the 400 mm design) are not candidates.

Fields changed in this pass (no optical values): header comment reworded (V2 field names, audit IDs removed, XA/third-fluorite difference, rear ED positions and Example 9 stated); the template import comment removed; `subtitle`; `catalog.specs` (printed f 581.97, "ALL SPHERICAL", 2ω line dropped); `source.patentNumber` "JP 2025-63175 A" → "JP 2025-063175 A"; element labels → "Element N"; roles of L12, L14 and L16; `apdNote` on L12–L16, L40, L43 and L44; `apd: "inferred"` with a note on L34; `focus.description`; the conjugate `source` text. The analysis gained the production-difference, rear-ED and Example 9 statements, the misprint test result and the diagram source; glass wording now says "catalog match"; "Verification Summary" became "Model Scope and Limitations". Engine values are identical before and after (EFL 582.0885, FOPEN 4.12, half-field 2.5864, stop 16.5058, BFD 39.1501, close keyframe EFL 321.3036 / BFD −4.6572).

Closed the same day: SonyFE400mmF28GMOSS.data.ts now writes the patent as "JP 2025-063175 A" too. The glass strings keep the "(coordinate-compatible spectral proxy; supplier unconfirmed)" wording used by the 400 GM sibling and 55 other corpus files.

## 2026-10-20 — Second review: diagram, labels and movement

Compared: the local page (infinity, 4.5 m, the focus-movement overlay and five element inspectors) against patent Fig. 13 (PDF p. 82, a 200 dpi CCITT scan, measured at native resolution) and Tables 10–12 (pp. 25–26). Scale: S1 to the image plane, 455.34 mm over 1329 px, gives 0.3426 mm/px; S2→S3 (173.23 mm over 507 px, 0.3417) agrees, and the model's S3, S22 and S41 vertices land within 1 px of the figure's crossings. The drawn elements are centred 4 px to one side of the dash-dot axis, so every rim was read as half the full drawn width (rim-line centre to rim-line centre). This is the first figure-based rim pass for this lens; the package author's values came from ray envelopes.

Figure vs model before this pass (semi-diameter, mm): L11 75.0 / 76.0; L12–L13 43.4 / 44.2, 34.2, 34.2, 43.8; L14 42.2 / 43.0; L15 41.3 / 42.2; L16 40.0 / 40.8; L17 34.1 / 35.3; L21–L22 26.5 / 27.6; L31–L32 22.1 / 21.0; L33–L34 15.7 / 15.2; L35 14.1 / 12.8; L36 12.8 / 15.6; L37 12.85 / 14.8; L38–L39 12.85 / 14.0; L40–L41 13.45 / 13.3; L42–L43 14.2 / 13.3; L44 15.0 / 13.2. GR1, GR2, GR3a and L33–L34 agree within 5 % and are kept. In GR3c the order was wrong: the figure draws L36–L39 as the narrowest run, with the rims rising again through L40–L41 and L42–L43 to L44. The model had L36 the widest element of GR3c and L44 the narrowest.

| Surfaces | Element | Before | After | Evidence |
|---|---|---|---|---|
| 27, 28 | L36 | 15.6 | 12.8 | Fig. 13 rim 12.76 mm, both sides; square-cut |
| 29, 30 | L37 | 14.8 | 12.9 | Fig. 13 rim 12.85 mm |
| 31, 32, 33 | L38+L39 | 14.0 | 12.9 | Fig. 13 rim 12.85 mm, one cylinder for the pair |
| 37, 38, 39 | L42+L43 | 13.3 | 14.2 | Fig. 13 rim 14.2 mm, both sides; keeps L42–L43 above L40–L41 as drawn |
| 40, 41 | L44 | 13.2 | 15.0 | Fig. 13 rim 14.9 / 15.1 mm on the two sides |

Floors at f/4.12 on the new rims: the axial marginal ray needs at most 11.10 mm (S27) and the full-field chief ray at most 10.66 mm (S41), so every new rim clears both with at least 1.7 mm. audit:surface reports no validation errors, audit:image-circle reports 0 undersized, and audit:field-coverage puts the one station at or above 99 %. clearap shows CLIPS-AXIAL only at S4/S5, unchanged; that is the printed-geometry exception recorded above. The engine half-field rises from 2.586° to 2.918°, now limited by S41 at 3.0°. The f-number stays 4.12, EFL 582.088 mm and the stop radius 16.506 mm. The engine's meridional transmission at infinity, wide open, goes from 93.8 / 86.3 / 77.5 / 52.5 % to 91.2 / 82.5 / 73.8 / 62.5 % at 1.1° / 1.4° / 1.8° / 2.1°. L36 now clips more of the mid-field bundle, and the wider L42–L44 clip less at the corner. The curve is meridional only and does not measure sagittal vignetting.

Kept: L35 (S25/S26 at 12.8 mm). Fig. 13 draws L35 at 14.1 mm, taller than L36, with its front face touching L34's rear face at the rim, as it does for L12/L13. The printed S24 (R 40.01) and S25 (R −184.93), 2.86 mm apart, cross at h = 13.55 mm, and the validator's gap rule stops S25 at 12.8 mm. A gapSagFrac of 0.97 would admit 13.3 mm, and 0.98 would admit 13.4 mm, for both faces. The coordinator owns that field, and this pass does not change it. L31–L32 (21.0 against 22.1 drawn) and L21–L22 (27.6 against 26.5 drawn, capped by L21's knife edge) differ by no more than 5 % and are kept.

Labels and brackets found correct against Fig. 13 and the text. Group brackets GR1 (S1–S14), GR2 FOCUS (S15–S17), GR3a (S18–S20), GR3b IS (S22–S26) and GR3c (S27–S41) match the figure's brackets. The figure also draws an overall GR3 bracket, which the 400 GM sibling omits too. The six cemented brackets D1–D6 cover the six cemented interfaces (S16, S19, S23, S32, S35, S38). Their texts do not equal the gap labels "D14 (before GR2)" and "D17 (after GR2)" and follow the sibling. Element `name` and `diagramLabel` both carry the patent's L11–L44, and all 23 `type` strings agree with the R signs. The example has no aspheric surface and none is marked. The stop is drawn at S21 between L32 and L33, where the figure puts St. Role texts that cite conditions agree with the claims (p. 2–3) and the computed values: L13/L15 meet (10)/(11), L40 meets (6), (8) and (9), L43 meets (6)–(9), and L44 meets (6), (7) and (9) but not (8) (|f/F| = 0.157). The `apd` tags (patent on L12, L14, L16, L40, L43 and L44; inferred on L34; false on L13 and L15) agree with ¶0033 and ¶0037. The inspectors for L12, L21, L34, L40 and L44 show the expected type, glass, focal length and notes. The L21 inspector reads "DOUBLET D1", with no bonded-layer artefact.

Glass rows. Every label resolves to the catalog row its printed nd/νd pins: Δnd ≤ 4×10⁻⁶ and Δνd ≤ 0.02, except the CaF₂ row (νd 95.00 by its curve against 95.23 printed, recorded in §4). Where θgF is printed, the resolved row's curve gives CaF₂ 0.5387 (printed 0.5387), S-NBH56 0.6123 (0.6122), FCD100 0.5336 (0.5334), FCD515 0.5441 (0.5441) and E-FDS1 0.6390 (0.6388). The alternatives are worse: K-CaFK95 0.5321, NBFD25 0.6103, FCD505 0.5443, N-SF66 0.6394 and PBH21 0.6306. All fifteen coordinates are exact catalog glasses, so none is optimizer-floated, and every resolved row carries a dispersion curve.

Movement. Table 12 gives d14 51.20 → 31.73 and d17 9.54 → 29.00 for ∞ → 4.5 m. Keyframe 0 is infinity, and the focus overlay moves GR2 objectward by 19.46 mm (sum-rounding of the printed 19.47) with GR1 and GR3 fixed. That matches the Fig. 13 arrow under GR2 and the text ("第２レンズ群ＧＲ２が物体側に移動する"). The slider's far end reads 4.50 m. The lens is a prime, so it has no zoom table.

Aberration plots, Fig. 14 (p. 83, ∞): spherical aberration and astigmatism stay within about ±0.03 mm, and distortion rises to roughly +1 % at 21.63 mm. The model gives LSA +0.015 mm at 0.85 pupil and real-ray distortion of +1.02 % at the field edge, which agrees. (The full-pupil LSA ray is undefined because of the S4/S5 crossing.)
