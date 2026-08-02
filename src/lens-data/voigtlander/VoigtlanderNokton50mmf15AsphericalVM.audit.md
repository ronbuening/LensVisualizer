# Voigtländer NOKTON Vintage Line 50mm F1.5 Aspherical II VM — Stage 4 Independent Audit

## Job card and audit boundary

- **Patent:** JP 2022-012964 A
- **Lens:** Voigtländer NOKTON Vintage Line 50mm F1.5 Aspherical II VM
- **Embodiment:** Example 2
- **Output stem:** `VoigtlanderNokton50mmf15AsphericalVM`
- **Focus status:** `PUBLISHED`
- **Stage:** Independent Stage 4 audit and clean delivery only

The first pass was performed from the original patent, the job card, the current data file, and a newly entered calculation. The earlier audit was not used to establish the prescription, conventions, or numerical conclusions. It was consulted only after the fresh extraction and computation were complete, to identify disagreements requiring resolution.

The repository was not mounted. No batch metadata generation, full build, corpus test run, Git operation, branch, commit, push, or pull request was performed.

## Independent source extraction

Patent page 20, Table 2, was read from the rendered original publication. The fresh transcription contains 16 listed planes including one `STO`, eight glass elements in seven air-separated groups, the L5/L6 cemented junction at surface 11, and the two aspherical surfaces 15A and 16A. Patent page 18 establishes a spherical-base asphere equation; the standard data convention is therefore `K = 0`. The F10/F14 focus table gives `ZD9 = 5.30 mm` and `ZD12 = 0.15 mm` in both states, while `ZD16` changes from `25.00 mm` to `29.12 mm` for the 630.00 mm object-to-first-surface row.

Figure 6 on patent page 27 was independently read for the Example 2 summary quantities: `AFL = 49.60 mm`, `TLL = 40.00 mm`, `TLi = 65.00 mm`, `IMD = 25.00 mm`, `FNO = 1.43`, `FL2 = 44.84 mm`, `SR1 = 14.62 mm`, `TLS = 11.90 mm`, and `FLE = -127.32 mm`.

The rendered official Cosina optical section was separately inspected. Its eight-element/seven-group layout, one cemented pair, and double-aspherical final element are consistent with the fixed Example 2 correlation. This remains an author correlation; neither the patent nor Cosina publicly names the production example.

## Corrections made

### 1. L5 glass annotation

- **Old value:** `603374 — custom/near-F5 class (no exact public match)`
- **Corrected value:** `Unmatched (nd=1.60286, vd=37.37; code 603374; near F5 class)`
- **Source location:** Patent Table 2, L5 at surfaces 10–11; glass audit row L5.
- **Independent evidence:** The published pair is `nd = 1.60286`, `νd = 37.37`. Public F5-family candidates are close but not exact, and the patent names no supplier. The near-name could otherwise be interpreted as an exact catalog F5 assignment.
- **Downstream consequences:** The data and analysis now use the same explicit `Unmatched` label. This prevents an unjustified vendor/Sellmeier identity from being acquired while retaining the useful F5-family context. No paraxial, geometry, focus, or condition result changes because the stored `nd` and `νd` are unchanged.

### 2. LE manufacturing wording

- **Old wording:** The data role called LE a “glass-molded” final meniscus, and the analysis treated the production element as a glass-molded asphere.
- **Corrected wording:** LE is described as a weak negative final meniscus with two aspherical surfaces. The analysis states that L-TIM28P is an exact catalog-equivalent low-softening material compatible with precision molding, but that the production manufacturing process is not established.
- **Source location:** Data element LE role; analysis LE subsection and glass table; patent Table 2; OHARA L-TIM28P catalog data.
- **Independent evidence:** The patent establishes two aspherical surfaces and the optical constants. OHARA establishes the catalog material family. Neither the patent nor the manufacturer source states how the commercial element was fabricated.
- **Downstream consequences:** Unsupported manufacturing attribution is removed. The exact catalog label and line indices remain, so spectral data quality and all optical calculations are unchanged.

### 3. Production focus-mechanism inference

- **Old wording:** The F14 state was said to be consistent with the production lens's “rangefinder-coupled unit-focusing mechanism.”
- **Corrected wording:** F14 is identified as the patent's whole-lens-extension optical state. It is optically compatible with the commercial lens's manual, rangefinder-coupled focusing, but Cosina does not publish the production lens's internal optical motion.
- **Source location:** Analysis identification criterion 6 and Focus Mechanism section; patent F10/F14 table and ¶0079; Cosina product specifications.
- **Independent evidence:** The patent directly fixes the internal gaps and changes only rear spacing. Cosina directly states manual helicoid focusing and rangefinder coupling, but not the internal optical motion.
- **Downstream consequences:** The production correlation remains supported without converting compatibility into a manufacturer-confirmed unit-focus claim. The authored focus state remains `PUBLISHED`, with no reconstruction.

No patent radius, spacing, index, Abbe number, element focal length, asphere coefficient, or focus-table value required correction.

## Independent paraxial verification

A fresh script enters the patent prescription directly and only then compares it with the TypeScript object. Sequential height/reduced-angle tracing agrees with independent ABCD multiplication to `1.110e-15` for the tested rays. The system determinant is `1.0000000000000002`.

| Quantity | Independent result | Patent/summary value | Difference |
|---|---:|---:|---:|
| Effective focal length | 49.598277061 mm | 49.60 mm | -0.001722939 mm |
| Back focal distance | 24.972488217 mm | 25.00 mm | -0.027511783 mm |
| Front principal plane from surface 1 | 17.413689056 mm | — | — |
| Rear principal plane from surface 16A | -24.625788844 mm | — | — |
| Printed-row lens track | 40.01 mm | 40.00 mm | +0.01 mm |
| Printed-row first surface to image | 65.01 mm | 65.00 mm | +0.01 mm |
| Modeled f-number | 1.429950605 | 1.43 | -0.000049395 |

The stored stop radius is `10.762470 mm`. A fresh solution using the patent-published 49.60 mm and F/1.43 values gives `10.762472095 mm`, a residual of `-0.000002095 mm`.

Using the strict project definitions, `TLL/EFL = 0.806479627 < 1`, so the design is telephoto. `BFD/EFL = 0.503495075 < 1`, so it is not retrofocus.

## Element, group, and Petzval audit

All eight isolated element focal lengths reproduce the patent values within `0.035272 mm`. The complete rear group is `+44.845556 mm`, versus the patent's `+44.84 mm`. The cemented Ja pair is net negative at `-93.292738 mm`, while the L7+LE rear-B assembly is positive at `+32.072467 mm`.

Petzval was recomputed surface by surface as `φ/(n·n′)`. The sum is `+0.003276657924 mm⁻¹`, giving a signed radius of `-305.189014 mm` under the stated `-1/sum` convention. No element-level approximation was substituted for the surface computation.

## Focus and condition audit

The authored focus model exactly preserves the published F10/F14 gaps. The extension is `4.12 mm`. Exact paraxial focus for the rounded table at a 630.00 mm object-to-first-surface distance requires `29.087452532 mm`; the published 29.12 mm row differs by `+0.032547468 mm`. The corresponding exact paraxial magnification is `-0.082965872`, or approximately 1:12.053149. The normalized object-to-image distance is `699.097453 mm`, consistent with the marketed 0.7 m minimum-focus specification without equating different reference planes.

All nine patent conditions pass. The data retains the patent-defined summary quantities for these conditions rather than replacing them with recomputed values from rounded rows.

## Asphere audit

The patent equation is a spherical base plus even polynomial terms, so both surfaces use standard `K = 0`. No scale factor or coefficient conversion is applied. At the modeled 13.5 mm semi-diameter, the polynomial departures are `+0.971261 mm` on 15A and `+2.117472 mm` on 16A. These are model-rim values, not patent-published clear-aperture departures.

## Semi-diameter, ray, and render audit

The patent does not publish clear semi-diameters. The stored values remain disclosed modeling inferences. The current validator policy was reproduced directly:

- Minimum element edge thickness: `0.592596897 mm` at L7.
- Maximum actual rim angle: `63.673066°` at surface 8, below 64.2°.
- Minimum shared-gap policy clearance: `0.010282943 mm` at surfaces 6→7.
- All required on-axis, default off-axis, and full-field core bundles pass at infinity and at the published close state.
- Maximum required utilization: `0.980205131` at surface 14 in `infinity_full_field_core`.
- The locally rendered silhouette was inspected. Element order, cemented contact, stop placement, clear gaps, and the final double-aspherical meniscus are visible without hidden trim or crossed rims.

No inactive dummy plane, flare cutter, generic cement layer, sensor cover glass, or filter element is present. The patent's omitted sensor-side plates remain folded into the documented air-equivalent rear spacing.

## Glass audit

The glass audit was repeated without starting from the existing labels. The final decisions are:

- 883408, 729547, and 847238 remain cross-vendor class labels because the pairs do not establish a supplier.
- L3, L5, and L7 are explicit `Unmatched` entries.
- LE remains `L-TIM28P (OHARA)` because its `nd`, `νd`, `nC`, `nF`, and `ng` agree with authoritative catalog data. The line-derived Abbe number is `30.663576159`, a residual of `+0.003576159` from the stored 30.66.
- Every `apd` flag remains false. Example 2 does not provide the data needed for a complete-lens APO or anomalous-partial-dispersion claim.

The detailed residuals and candidate families are recorded in `VoigtlanderNokton50mmf15AsphericalVM.glass-audit.csv`.

## Data/analysis consistency

The final script verifies the required analysis section order, structured patent metadata, all eight element glass strings, the focus wording, the corrected L5 annotation, the absence of the unsupported manufacturing claim, and every shared quantitative claim used by the analysis. All checks pass.

## Targeted final gate

| Check | Result |
|---|---|
| Fresh patent transcription versus data | Pass |
| Sequential y–ν versus ABCD | Pass |
| Element/group powers and surface Petzval | Pass |
| Published infinity and close focus states | Pass |
| Conditions [1]–[9] | Pass |
| Asphere convention, coefficients, and departures | Pass |
| Edge thickness, rim slope, conic limits, shared gaps | Pass |
| Exact required ray bundles | Pass |
| Local render-diagnostic inspection | Pass |
| Glass labels and LE line-index consistency | Pass |
| Data/analysis metadata and quantitative consistency | Pass |
| Local formatting/style proxy against `.prettierrc.json` | Pass |
| Strict TypeScript compile against a Stage 4 schema surrogate | Pass, `tsc` exit 0 |
| Official Prettier execution | Unavailable; Prettier is not installed in the environment |
| Repository `LensDataInput` typecheck | Unavailable; repository not mounted |
| Repository `buildLens()` / `validateLensData()` | Unavailable; repository not mounted |
| Production `computeElementRenderDiagnostics()` and hidden-trim test | Unavailable; local equivalent was run and inspected |
| Repository glass report and directly relevant corpus tests | Unavailable; repository not mounted |

The unavailable items are batch-integration checks, not unresolved prescription, focus, glass, geometry, or analysis defects.

## Handoff package

The ZIP contains 12 files, below the 14-file limit. It includes the original unmodified patent and job card, the clean data/analysis pair, one fresh consolidated audit, one complete verification script, one calculation-results file, one glass audit, one source manifest, one validation manifest, one checksum manifest, and the official manufacturer diagram. Superseded drafts, the previous audit, rasterized patent pages, temporary renders, and repetitive logs are excluded.

## Stage gate

**READY_FOR_BATCH**

## Repository integration audit — 2026-08-01

The untracked publication `patents/JPA 2022012964-000000.pdf` was rendered again at repository integration. Figure 7
on PDF page 27 is the Example 2 section and confirms the existing diameter progression. Two authored radii exceeded
the gap-safe SVG outline even though the display layer silently reduced them. The final modeling values make that
effective silhouette explicit:

| Surface | Previous SD | Final SD | Reason |
|---|---:|---:|---|
| 8 | 13.1 mm | 12.7 mm | Removes a 0.40 mm hidden gap trim at the rear of L4 |
| 10 | 13.0 mm | 12.7 mm | Removes a 0.30 mm hidden gap trim at the front of L5 |

The resulting section retains the patent's relative outline, `audit:image-circle` reports no undersized surface, and
the production render-diagnostics suite now passes without an exception. No aspheric surface or coefficient changed.

OHARA's vendor-published 2026-07-01 all-products Zemax catalog contains the special-order `L-TIM28P` row. Its
Sellmeier coefficients reproduce `nC = 1.687955`, `nd = 1.694529`, `nF = 1.710611`, `ng = 1.724188`, and
`νd = 30.655992`, independently confirming the stored line indices. The catalog row was added so LE now receives
full coefficient-backed dispersion instead of line-index-only coverage. L3, L5, and L7 remain explicitly unmatched;
the reviewed current OHARA, HOYA, HIKARI, SUMITA, Schott, and CDGM rows do not justify forcing a nearby material.

The display name is corrected to
`VOIGTLÄNDER NOKTON Vintage Line 50mm f/1.5 Aspherical II VM`, matching Cosina's product-family name.

## Second SD audit — 2026-08-02

The repository silhouette was compared again with Example 2 Figure 7 on PDF page 27. The previously corrected surface-8
and surface-10 apertures remain the renderer-safe values that most closely preserve the patent outline; no hidden trim
or undersized image-circle surface remains. No further SD correction was supported. Inventor metadata now reuses the
repository's established `Yasuyuki Sugano` romanization.

## Screenshot and label audit — 2026-08-02

The supplied renderer view was checked against Example 2 Figure 7 and Cosina's official optical section. The front
taper, stop-adjacent L4, rear cemented pair, and final double-aspherical element remain inside the procedure's 15%
no-change band. The renderer-safe surface-8 and surface-10 values remain the closest valid outline.

- No semi-diameter changed.
- Figure 7's previously omitted `102A` (L5/L6) and `102B` (L7/LE) subgroup labels are now included.
- The product name and two-aspherical-surface count remain correct.
- The header now distinguishes modeled, patent, and marketed focal/aperture values and the 46.58° patent field from
  Cosina's 46.3° marketed angle of view.

Verification: `audit:image-circle`, `audit:surface`, production render diagnostics, glass reports, typecheck, formatting,
lint, full tests, and production build all pass.
