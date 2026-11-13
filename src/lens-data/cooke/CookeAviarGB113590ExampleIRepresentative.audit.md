# Aviar GB Example I qualified pre-integration audit

One hidden representative based on original GB113590, not a correction of US1361207 or exact factory100mm assertion. Source owner and independent review confirm all eight GB radii, seven intervals and four glass pairs. SourceGB−.8152 andUS−.9152 second radii are preserved separately. GB+0.637% EFL residual is unresolved and retained; no scaling to force EFL100.

Scale100 is representative. Calculated infinityBFL92.278731268 is derived, not source image interval. SodiumD and Abbe definition explicit; engine d-reference is a disclosed approximation. No exactmelt/fullpartialdispersion or finitefocus claim.

Cap12 geometry-grid inference and central-gap midpoint1.81/1.81 are not source clearapertures/stopcoordinates. Fullcap iris clearancespositive. Defaults.9 retained, no source modification or geometry exception. Metadata source.example.idI corrected to1 to satisfy schema while labelExampleI retained; initial failure preserved, no optical change.

Final data differs from feasibilitypilot only key/name. Typednative, isolatedstricttsc and sparse traversals rerun. Sparse26OK perfield is not imageplane landing, MTF or commercial format proof. Full app/current corpus/lint/format/build/browser/MTF deferred to integration under agreed split. Final independent review governs qualified acceptance, not release.

MakerCompendium gives explicit primary retrospective patent/product link. No exact retail example selection or exhaustive live/historical/numerical novelty claim. Other ExampleII not built/countable. No publication,PR or deployment.

## 2026-11-13 — Deployment validation

Codex independently re-read the local GB 113,590 A and US 1,361,207 A PDF page 2 images, checking Example I's eight radii, seven thicknesses/air spaces, four index/Abbe pairs, unit focal length and f/4.5. The GB page also explicitly defines sodium D and the Abbe ratio. The supplied independent validator's verdict is **valid with notes**: GB r2 = −.8152 is retained, while the US −.9152 is a misprint; the +0.637% focal-length residual is inherent in the patent's loose normalization, not an error to fit away.

The product association is strong at the Aviar family level: the validator's Cooke Compendium evidence explicitly links Series II f/4.5 Aviar to British patent 113590, Warmisham and four separate, uncemented glasses. It does not establish an exact production Example I or a commercial 100 mm Aviar.

Changes made:

- File form: two leading line comments and the misplaced `../LensVisualizer/src/types/lensDataV2.js` import → first-line `../../types/lensDataV2.js` type import, one JSDoc header, `const LENS_DATA = { ... } satisfies LensDataV2Input;` and `export default LENS_DATA;`. The header now states ×100 normalized-unit-to-millimetre conversion, calculated EFL 100.64 mm and the inherent +0.637% residual, the US r2 misprint and retained GB value, inferred 12 mm rims and central stop, and calculated infinity back focus.
- `name`: `Cooke Aviar 100mm-class f/4.5 (GB Example I representative)` → `COOKE AVIAR f/4.5 (GB 113,590 Example I Design)`, avoiding an unsupported commercial 100 mm name.
- `source.patentNumber`: `GB 113590` → `GB 113,590 A`. Existing `source.example` remains label `Example I`, id `1`, in the specified shape.
- `catalog.lensMounts`: absent → `["large-format-lens-board"]`; `catalog.imageFormat`: absent → `6x9`, as assigned for the representative's coverage checks.
- L1/L4 `vd`: `56.400000000000006` → `56.4`, removing floating-point noise.
- L1–L4 `focalLengthMm`: absent → `36.21`, `−38.32`, `−42.18`, `36.21` mm. The element probe independently confirms each rounded isolated-element value.
- `focus.description`: `NO_INTERNAL_RECONSTRUCTION: infinity representative only` → `Only the infinity-focus prescription is modeled; no finite-focus movement is reconstructed.`
- Analysis: US/GB radius difference without an explicit misprint finding → explicit US misprint and retained GB value; unresolved EFL discrepancy → inherent normalization residual; uncertified element-focal-length statement → the four probe-verified, calculated values, distinguished from patent-published data.

After these changes, the engine summary gives EFL **100.636959925 mm**, **f/4.5**, total track **110.958731268 mm** and physical stop radius **9.697421739 mm**. The element probe gives back focus **92.2787 mm** and zero rounded image-plane defocus. Prescription radii, thicknesses, gaps, indices and rims are unchanged; `visible: false` is retained.

Validation:

- Surface audit: **OK — no validation errors**.
- Aperture audit: one station within 3% of the stated f-number; **zero rim limits, trace limits, iris limits or failures**.
- Image-circle audit: **1 lens checked, 0 undersized, 0 skipped**, using the assigned 6x9 format (101 mm diagonal).
- Field-coverage audit: the hidden original is skipped. An otherwise identical scratch copy with `visible: true` gives **100% coverage**, modeled half-field **26.558883°**, image semi-height **50.50 mm / 50.50 mm**, and a clear format-corner chief ray with no rim clips. This confirms modeled coverage, not patent-published field performance.

Open: the later cleanup pass still owns the key/file names, remaining subtitle/specs and analysis wording, generic element type and glass labels, sodium-D reference wording/metadata, the unsupported catalog marketing focal-length value, and comparison of inferred rims with the patent figure. The 6x9 assignment does not establish a documented commercial 100 mm variant. Full application checks and release work remain outside this assignment.

## 2026-11-13 — Rescale and rename

Codex applied the owner-approved uniform rescale to the delivered Example I model and checked the parsed lengths and engine results before and after. The independent validator's report re-read GB 113,590 A page 2 against US 1,361,207, confirming all eight radii, seven thicknesses/air spaces and four index/Abbe pairs; its verdict remains **valid with notes**, including the GB r2 = −.8152 value, US −.9152 misprint and inherent +0.637% EFL residual.

Reason: the validator's Cooke Compendium evidence links Series II f/4.5 Aviar to patent 113590, Warmisham and four separate uncemented glasses. It documents f/4.5 focal lengths of 5, 6, 7, 8¼ and 10½ inches, including the assigned **8¼ in = 209.55 mm**; the former 100 mm scale did not identify a documented retail focal length. This remains a qualified Example I representative, not proof of an exact factory prescription.

Changes made:

- Scale: patent-unit conversion ×100 → **×209.55**, applying **one factor ×2.0955** to every delivered model length by a script over the parsed numbers. All **29 stored lengths** were independently checked after serialization: eight numeric `R`, nine `d` (including both stop gaps and the final image-side interval), eight surface `sd`, and four element `focalLengthMm` values. Each new length equals the old value ×2.0955 to within 0.0000005 mm print rounding. No explicit stop radius, projection/field length or `imageCircleMm` is authored in this file; the engine-derived stop radius independently scales by the same factor. Indices, Abbe numbers, aperture settings and dimensionless values are unchanged. The infinity-only `closeFocusM` sentinel is retained; it is not a reconstructed finite-focus distance.
- `name`: `COOKE AVIAR f/4.5 (GB 113,590 Example I Design)` → **`COOKE AVIAR 8¼ in f/4.5`**.
- `catalog.focalLengthMm`: marketing **100 → 209.55 mm**; design **100 → 210.88 mm**, the traced EFL rounded to two decimals as assigned, rather than a fit of the optics to 209.55 mm.
- Surface `sd`: **12 → 25.146 mm** throughout; central stop gaps **1.81 / 1.81 → 3.792855 / 3.792855 mm**; final image-side interval **92.278731268 → 193.370081 mm**. The final interval is rounded to six decimal places, with less than 0.0000004 mm change from exact multiplication.
- Stored L1–L4 `focalLengthMm`: **36.21 / −38.32 / −42.18 / 36.21 → 75.878055 / −80.29956 / −88.38819 / 75.878055 mm**. These scale the delivered rounded labels exactly; the independent element probe gives 75.87 / −80.30 / −88.38 / 75.87 mm when freshly calculated and rounded to two decimals. No label was independently refitted.
- `catalog.imageFormat`: **6x9 → 5x7**, selected because the otherwise identical visible scratch copy gives **99.999999734% coverage** (displayed as 100%), exceeding the required 98%. `catalog.lensMounts` remains `["large-format-lens-board"]`; `key`, filenames and `visible: false` remain unchanged.
- Header and analysis: former ×100 / 100 mm identification → ×209.55 and the documented 8¼ in identification; scaled radii, gaps, rims, back focus, iris radius, clearance and focal-length statements updated. The +0.637% residual and explicit US r2 misprint notes are retained. Earlier sparse checks are identified as measurements at the former scale; the current 5×7 coverage result is recorded separately.

First-order comparison (old → new):

- Engine EFL: **100.636959924994 → 210.884749522826 mm**; ratio **2.095499999999999**, differing from exact ×2.0955 multiplication by only 0.000000000000114 mm numerical roundoff.
- Paraxial BFD: **92.278731268277 → 193.370081372674 mm**; ratio ×2.0955 within numerical roundoff. The stored final interval differs from calculated best focus only by print rounding; `probe.mjs` reports defocus −0.0000 mm.
- Total track including image-side interval: **110.958731268 → 232.514021 mm**; exact scaled value 232.514021372094 mm, with the 0.000000372 mm difference solely from rounding that interval.
- Physical iris radius: **9.697421739097 → 20.320947254277 mm**, ratio ×2.0955 within numerical roundoff. `built.mjs` reports **f/4.5 → f/4.5**; `probe.mjs` independently reports **4.500 → 4.500**.

Audits, run from the main checkout against this worktree file:

- Surface: **OK — no validation errors**.
- Aperture: **1 lens / 1 station within 3% of the stated f-number; zero rim limits, trace limits, iris limits or failures**.
- Image circle: **1 lens checked, 0 undersized, 0 skipped**, for the 5×7 format's 218.5 mm diagonal.
- Field coverage: hidden original skipped, as expected. The visible scratch copy has **100% coverage**, modeled half-field **27.286873°**, image semi-height **109.249999710 / 109.25 mm**, a converged edge solution and a clear format-corner chief ray with no rim clips. This is model coverage, not a measured production image circle or source field specification.

Open: the later cleanup pass retains responsibility for key/file naming, remaining subtitle/specs and analysis wording, generic element type and glass labels, sodium-D reference wording/metadata, and comparison of inferred rims with the patent figure. The former unsupported 100 mm marketing value is resolved by this assignment. Full application checks and release work remain outside this assignment.
