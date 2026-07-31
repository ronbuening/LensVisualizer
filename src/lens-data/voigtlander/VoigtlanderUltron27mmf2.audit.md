# VoigtlanderUltron27mmf2 — Stage 4 Independent Audit

## Job card and audit scope

| Field | Fixed value |
|---|---|
| Patent | JP 2024-167569 A |
| Lens | Voigtlander Ultron 27mm f/2 |
| Embodiment | Example 1 |
| Output stem | `VoigtlanderUltron27mmf2` |
| Focus status | `PUBLISHED` unit focus |
| Stage | 4 — independent audit and clean delivery |

The audit treated the supplied data and analysis files as third-party work. The prescription, spacing states, conditions,
and figure morphology were re-extracted from the patent before the earlier audit was consulted. A fresh calculation was
then entered independently from Table 1 and Table 4. The prior audit was reviewed only after that first pass.

## Independent source re-extraction

Example 1 was re-established from the original patent as follows:

- Page 7, Table 1: eleven sequential planes including one aperture stop; six elements in four air-spaced groups; all
  refracting surfaces spherical.
- Page 7, variable-spacing table: `D0 = infinity / 206.40 mm` and `D11 = 15.28 / 19.41 mm`.
- Page 12, Table 4: `f = 27.8000 mm`, `Fno = 2.0441`, half-field `26.8273°`, `L-H = 38.5290 mm`,
  `L-BF = 15.2788 mm`, G1 focal length `35.9552 mm`, and G2 focal length `54.3874 mm`.
- Page 13, Figure 1: front cemented pair, stop, rear cemented pair, positive singlet, and final negative meniscus.
- Page 13, Figure 2: the rear-glass admissible band has the negative slope implied by its reversed νd axis, contrary to
  the positive-slope equation printed in Claim 5 and paragraphs 0012/0025.

The numerical radii were re-read directly from the rendered Table 1 page. This exposed three element-shape terminology
errors that were present in both the patent prose and the supplied pair.

## Corrections made

### 1. L1r shape

- **Old data/prose:** `type: "Negative Meniscus"`; analysis called L1r a negative meniscus.
- **Corrected data/prose:** `type: "Biconcave Negative"`; analysis now identifies a biconcave negative element and
  records the patent terminology conflict.
- **Source location:** Patent page 7, Table 1, surfaces 2–3; paragraph 0019 and Figure 1 use the conflicting meniscus
  terminology.
- **Independent evidence:** `R2 = −59.566 mm`, `R3 = +32.202 mm`. The modeled center thickness is `0.90 mm`; at the
  audited shared semi-diameter of `8.0 mm`, the edge thickness is `2.449216 mm`, which is biconcave morphology.
- **Downstream consequences:** Element type metadata, element prose, and the explicit source-correction list changed.
  Radii, thickness, index, standalone power, cemented-group power, focus, Petzval, pupils, and geometry limits did not
  change.

### 2. L2f shape

- **Old data/prose:** `type: "Negative Meniscus"`; analysis called L2f a strong negative meniscus.
- **Corrected data/prose:** `type: "Biconcave Negative"`; analysis now identifies a strong biconcave negative element
  and records the patent terminology conflict.
- **Source location:** Patent page 7, Table 1, surfaces 5–6; paragraph 0021 uses the conflicting meniscus terminology.
- **Independent evidence:** `R5 = −10.126 mm`, `R6 = +61.183 mm`. The modeled center thickness is `1.20 mm`; at the
  audited shared semi-diameter of `7.4 mm`, the edge thickness is `4.863149 mm`, which is biconcave morphology.
- **Downstream consequences:** Element type metadata, element prose, and the explicit source-correction list changed.
  The prescription and every dependent optical calculation remained unchanged.

### 3. L3 shape

- **Old data/prose:** `type: "Plano-Convex Positive"`; analysis followed the patent's plano-convex wording while noting
  a finite weak surface.
- **Corrected data/prose:** `type: "Biconvex Positive"`; analysis now states that the element is a weak-front biconvex
  positive singlet and treats “plano-convex” as a source terminology defect.
- **Source location:** Patent page 7, Table 1, surfaces 8–9; paragraph 0021 calls L3 plano-convex.
- **Independent evidence:** `R8 = +430.535 mm` is finite and `R9 = −33.211 mm`; both faces are convex in the numerical
  prescription. At `sd = 10.5 mm`, the modeled edge thickness is `0.468410 mm` versus a `2.30 mm` center thickness.
- **Downstream consequences:** Element type metadata, element prose, and the source-correction list changed. The
  numerical model, focal powers, field, focus, and all geometry results remained unchanged.

No prescription row, spacing endpoint, refractive index, Abbe number, spectral field, semi-diameter, stop size, group
annotation, or structured patent/product metadata required correction.

## Independent optical verification

The complete verification script reads the final TypeScript default export and cross-checks it against a separate patent
transcription. Sequential height/reduced-angle tracing and conventional height/angle ABCD calculation agree to
`2.22 × 10⁻¹⁶` in the system matrix.

| Quantity | Independent result | Patent/authored reference | Assessment |
|---|---:|---:|---|
| Equivalent focal length | `27.799082060 mm` | `27.8000 mm` | Pass |
| Front principal plane from first vertex | `+8.530884791 mm` | independently derived | Pass |
| Rear principal plane from last vertex | `−12.526875500 mm` | independently derived | Pass |
| Paraxial BFD from rounded surfaces | `15.272206560 mm` | `15.2788 mm` | Pass at source precision |
| First-surface-to-image track | `38.528800000 mm` | `38.5290 mm` | Pass |
| G1 / D1 equivalent focal length | `+35.958665582 mm` | `+35.9552 mm` | Pass |
| G2 equivalent focal length | `+54.402399603 mm` | `+54.3874 mm` | Pass |
| D2 cemented-pair focal length | `+284.432610131 mm` | independently derived | Weak positive net power |
| Stop-derived f-number | `2.044099875` | `2.0441` | Pass |
| Petzval sum | `+0.005958245572 mm⁻¹` | independently derived | Radius `−167.834640 mm` |

The surface-by-surface Petzval audit uses `φ/(n·n′)` at every refracting interface. The system is neither telephoto
(`track/EFL = 1.385974`) nor retrofocus (`BFD/EFL = 0.549615` using the authored patent BFD).

## Focus and pupil audit

The final model varies only D11. All internal gaps remain fixed, which is consistent with published unit focus.

| State/result | Value |
|---|---:|
| Infinity D11 | `15.2788 mm` |
| Published close D11 | `19.41 mm` |
| Published unit extension | `4.1312 mm` |
| Solved close image gap from D0 = 206.40 mm | `19.401857171 mm` |
| Paraxial magnification | `−0.148553488` |
| Reproduction ratio | `1:6.731582` |
| Object-plane-to-image-plane reference distance | `249.06 mm` |
| Entrance-pupil semi-diameter | `6.799834586 mm` |
| Exit-pupil semi-diameter | `7.736641149 mm` |

Both defined focus endpoints were recomputed. The published close endpoint agrees after the precision of the patent's
spacing table is respected.

## Patent conditions and source defects

- `nd > 1.9` for the highest-index positive G2 element: L3 has `nd = 2.00100`; pass.
- `L-H / L-BF > 2.5`: `38.5290 / 15.2788 = 2.521729`; pass.
- Rear element `56 > νd > 34`: L4 has `νd = 39.68`; pass.
- All refracting surfaces spherical: pass.
- Unit focus toward the object: represented by the published D0/D11 state; pass.
- Claim 5 as printed gives `2.293576 ≤ nd ≤ 2.343576` at `νd = 39.68` and fails its own Example 1.
- The negative-slope band implied by Figure 2 gives `1.642824 ≤ nd ≤ 1.692824`; L4 at `nd = 1.65411` passes.

The previously documented paragraph 0024 track typo, paragraph 0028 focal-length typo, paragraph 0017 track/focal-length
confusion, and Table 4 L2 label error remain disclosed. No source defect was silently altered.

## Glass audit

Glass labels were checked from the patent names rather than from the supplied labels. The final identifications remain:
HOYA TAFD37A, HIKARI J-SF14, HOYA FDS90, HOYA TAFD55, and OHARA S-NBH5. Patent `nd`/`νd` values govern the
prescription; catalog line data are stored separately.

- Maximum absolute patent-versus-catalog `nd` residual: `0.00001` for J-SF14 and S-NBH5.
- All catalog `νd` residuals: `0.00` at recorded precision.
- All stored line indices have the required ordering `nC < nd < nF < ng`.
- Maximum Abbe reconstruction residual from stored line indices: `0.011141` for S-NBH5.
- The line data support element-level anomalous-partial-dispersion discussion; they do not establish an APO claim for the
  complete lens.

## Geometry, containment, and render audit

| Check | Result |
|---|---|
| Minimum edge thickness | `0.139644 mm` at L2r; pass |
| Maximum actual spherical rim angle | `53.003428°` at surface 10; below `64.2°` |
| Tightest cross-gap policy margin | `0.037988 mm` for gap 9→10; pass |
| Physical clearance at gap 9→10 | `0.426988 mm` |
| Representative infinity bundles | contained |
| Representative close-focus bundles | contained |
| Full-pupil first-order clipping | only external surface 7 at both states; no STO or cemented-interface clipping |
| Conic-domain checks | not applicable; all surfaces spherical |
| Independent geometry render | visually inspected; coherent spans, no bow-ties, crossings, or geometry-triggered trim |

The actual repository `computeElementRenderDiagnostics()` function could not be run because the repository was not
mounted. The independent render and numerical proxy do not replace that later repository-local gate.

## Data and analysis consistency

The final analysis H1 matches the final data `name`. Patent number, inventor, applicant, embodiment, mount, format,
counts, all six element names, corrected shapes, `nd`, `νd`, glass labels, focus endpoints, scaling statement,
conditional expressions, and every shared quantitative verification claim agree. The all-spherical analysis correctly
omits an asphere section. No stage marker, revision log, unsupported APO claim, or unsupported product-confirmation claim
appears in the clean analysis.

## Targeted final gate

| Gate | Result |
|---|---|
| Fresh patent re-extraction | Pass |
| Fresh y–ν calculation and y–θ ABCD cross-check | Pass |
| TypeScript transpilation/evaluation | Pass |
| Strict local `LensDataInput` type fixture | Pass |
| Source-row and structured-metadata comparison | Pass |
| Exactly one STO / unique labels / valid element references | Pass |
| Downstream cemented-junction `elemId` values | Pass |
| Base `d` / `var` endpoint consistency | Pass |
| Infinity and published close focus states | Pass |
| Pupil and exact f-number | Pass |
| Surface-by-surface Petzval | Pass |
| Glass and spectral-field comparison | Pass |
| Edge thickness, rim slope, gap intrusion, containment | Pass |
| Analysis section order and metadata synchronization | Pass |
| Prettier executable | Unavailable; manual conformance and TypeScript parse passed |
| Repository `buildLens()` / `validateLensData()` | Not run; repository unavailable |
| Repository render diagnostics / glass mismatch report / targeted corpus tests | Not run; repository unavailable |
| `generate:metadata`, full corpus tests, full build, Git | Not run, as prohibited |

## Sources

1. JP 2024-167569 A, original unmodified patent: Example 1 Table 1 (p. 7), Table 4 (p. 12), Figures 1–3 (p. 13),
   Claim 5, and paragraphs 0017–0028.
2. Cosina, official ULTRON 27mm F2 product page and official optical-section SVG.
3. Cosina, official product archive/release material for the 2023-06-14 release.
4. HOYA Optics Europe, Optical Glass Data and current glass-code lists.
5. HIKARI, J-SF14 official data sheet.
6. OHARA, S-NBH5 official catalog page and data sheet.

## Audit conclusion

The prescription itself was sound. Three source-derived shape labels were corrected in both files. All dependent
calculations were rerun after those edits and remained unchanged. The pair is clean and ready for the later authorized
batch-integration checks.

**READY_FOR_BATCH**

## 2026-07-31 — Patent-figure, naming, and glass follow-up

Figure 1 on patent page 13 was rendered at high resolution and measured from the prescription's 23.25 mm glass-track
scale. Leader lines prevent reliable automatic envelope extraction, so the four group rims were read directly from the
rendered section. The following coherent group envelopes replace the oversized provisional values:

| Surfaces | Previous `sd` values | Revised `sd` values |
|---|---|---:|
| 1–3 | 9.0 / 9.0 / 8.0 mm | 7.8 / 7.8 / 6.9 mm |
| 5–7 | 7.4 / 8.5 / 8.4 mm | 5.9 / 6.8 / 6.7 mm |
| 8–9 | 10.5 / 10.5 mm | 8.0 / 8.0 mm |
| 10–11 | 10.1 / 11.5 mm | 8.1 / 9.2 mm |

Each element's existing front/rear rim relationship was scaled to the measured group envelope and rounded to 0.1 mm.
The stop remains at its calculated f/2 semi-diameter. Trial surface-domain validation and the image-circle audit both
pass with zero undersized surfaces.

The display name was corrected from `VOIGTLÄNDER ULTRON X 27mm f/2` to Cosina's official product order,
`VOIGTLÄNDER ULTRON 27mm f/2`; X-mount remains explicit in the subtitle and mount metadata.

The glass audit also identified the only strict-dispersion gap in the three-lens set: J-SF14. Its official Hikari
catalog row was added with code 762266, `nd` 1.76182, `νd` 26.58, `PgF` 0.6127, and the published nine-term refractive
index formula. J-SF14 now resolves directly to source-backed dispersion, making all six Ultron elements strict catalog
matches. The duplicate numeric code shared with HOYA FD140 is resolved explicitly to the first source-order entry,
J-SF14; exact glass names remain unambiguous.

Final repository verification for this follow-up passed `audit:surface`, `audit:image-circle`,
`generate:glass-reports`, `format:check`, `typecheck`, lint with zero errors and three pre-existing warnings, all 213 test
files / 2,527 tests, and the 984-route production build. The in-app browser exposed no runnable browser session, so the
final application-page visual check could not be repeated; the high-resolution patent measurement, geometry validator,
and built SVG data are the recorded comparison evidence.
