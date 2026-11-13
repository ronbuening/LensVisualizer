# Speed Panchro patent-design audit

The initial model was hidden (closed: now visible). It has six elements in four groups, distinct from the eight-element Ultra Speed Panchro; no factory 1-inch retail identity is established. The source's explicit 1-inch f/2, 35-degree field and 16 mm cinema application are retained with the exact 25.4 mm-per-inch conversion. EFL is 25.385179309 mm and calculated BFL is 17.231299691 mm, without fitting or a claim that the source prints BFL.

Ten radii, six thicknesses, three air gaps, six index/Abbe pairs and both cemented interfaces are preserved. Chance catalog identifiers follow the source; the fifth glass is an unnumbered new glass. The source explicitly defines Abbe V. Its sodium-D indices are stored with the existing helium-d reference, a wavelength approximation. No full melt curve or modern replacement is claimed.

The stop is unspecified. S2 = 0.22 inch is an air gap; the vertex-image midpoint condition does not specify stop location. The assumed iris divides this gap into 0.11/0.11 inch. Initial 9/5/7 mm rims were inferred from a geometry grid, rather than measured or fitted to rays; the deployment section below supersedes S3/S4. Default 0.9 geometry limits are retained. No spacer, override or source optics were altered.

The initial report claimed 26 successful axial samples and, at the source's 17.5-degree edge, 8 successful and 18 clipped samples. The deployment section below supersedes the axial claim. These were optical-surface traversals only, without image-plane, coverage, throughput or MTF conclusions. The source concerns 16 mm cinema. No finite-focus state is modeled.

The initial final data differed from its draft only in key/name and had isolated syntax and field checks. Full application, current-corpus, lint, format, build, browser and MTF checks were deferred at that stage. Cooke's retrospective family association is distinguished from the 1930 advertisement, which predates the 1931 priority. No exact retail 1-inch identity, exhaustive historical novelty, publication or deployment was established.

## 2026-11-13 — Deployment validation

The independent validator re-read the patent page images and checked ten radii, six thicknesses, three air gaps, six index/Abbe rows, the inch-to-millimetre conversion, the six-element/four-group drawing and both cemented interfaces. Codex independently re-read PDF pages 1–3 for the drawing, bibliographic details, sole 1-inch f/2 example, 35-degree field, 16 mm camera context and L1 glass No. 8894. The validator’s approximately 6.9 mm front-doublet rim supports the minimum S3/S4 raises below; no other rims were changed.

Verdict: valid with notes after correction. The validator cites [Cooke’s History of Panchro, Part 1](https://cookeoptics.com/news-and-events/the-history-of-panchro-part-1/) for the patent’s Speed Panchro family association, while the example’s 16 mm camera context and absence of an identified retail 1-inch match limit that association to the family.

Changes:

- File form: two line comments and the incorrect `../LensVisualizer/src/types/lensDataV2.js` import → the required `../../types/lensDataV2.js` first line, one source JSDoc block, `const LENS_DATA` with `satisfies LensDataV2Input`, and `export default LENS_DATA`. The header now records the sole example, 1x design scale, ×25.4 inch-to-millimetre conversion, family-only attribution, and inferred iris, rims and back focus.
- S3 semi-diameter: 5.0 → 6.0 mm; S4: 5.0 → 5.1 mm. These are the exact least raises returned by `audit:aperture --raise`, replacing the f/2.41 axial limitation with an iris-limited f/2 beam and staying within the validator’s approximately 6.9 mm figure rim.
- `name`: `Cooke Speed Panchro 1-inch f/2 (patent representative)` → `COOKE SPEED PANCHRO f/2 (US 1,955,591 Design)` to describe the supported patent design rather than a specific retail lens.
- `source.patentNumber`: `US 1955591` → `US 1,955,591 A`; `source.example`: absent → `{ "label": "Sole example", "id": null }`.
- `catalog.focalLengthMm.design`: 25.4 → 25.385 mm, matching the validator’s paraxial value. `imageFormat` stays `16mm-cinema`, no `lensMounts` are added, and `visible` stayed false at this stage (closed: now true).
- L1 glass number: 3894 → 8894 in both the data annotation and analysis, matching the patent table.
- `focus.description`: the earlier internal marker → `Only the infinity prescription is modeled; no finite-focus movement is reconstructed.`
- Floating-point artifacts only: R2 100.27919999999999 → 100.2792; D2 3.8099999999999996 → 3.81; R4 26.288999999999998 → 26.289; D4 1.1429999999999998 → 1.143; R8 −10.540999999999999 → −10.541; R9 35.559999999999995 → 35.56. No source prescription value was fitted.
- Analysis: the old 9/5/7 mm rim summary → the corrected S3/S4 values and their reason; the claim of 26 successful axial samples → the validator’s finding of axial clipping before correction. The old off-axis counts are no longer presented as current results and have not been repeated after correction. All earlier audit lines above are retained as the historical record; the new measurements supersede its axial-success claim.

First-order values after correction from `built.mjs`: EFL 25.385179309223233 mm; design f-number (`FOPEN`) 2; derived stop radius 4.156363225316541 mm; total track 37.2210996905702 mm; paraxial final image interval 17.2312996905702 mm. The reported Petzval sum is 0.0077580882750595236 per mm (the validator reports the normalized value as 0.197).

Audit results:

- `audit:surface`: OK, no validation errors.
- `audit:aperture`: one lens/one station within 3%; zero rim, trace, iris or failed diagnoses. Exact traced f-number 1.999999997922163, limiter STO, diagnosis OK: no rim limit.
- `audit:image-circle`: one lens checked, zero undersized, zero skipped for the retained 16 mm format.
- `audit:field-coverage --below=1.01`: the hidden original was skipped. An otherwise identical scratch copy with `visible: true` reached 100% of the 6.35 mm format semi-diagonal at a reported 14.2-degree half-field; corner clear, one OK station, zero skipped. The actual lens remained hidden at this stage (closed: now visible).

Open at this stage (wording and naming items closed by the cleanup section below): the later cleanup pass owned key/file naming, element type and glass labels, subtitle/specs style, historical-D wording, analysis voice and the old audit’s run-together wording. The retained inferred rims still differ from the figure: validator measurements are approximately 6.9 mm for the front singlet/front doublet, 4.4 mm at R5/R6, and 6.2 mm for the rear doublet/rear singlet. Reconciling those drawing rims and square rim shapes was outside that assignment (closed by the semi-diameter section below, with illumination-constrained singlet rims). A specific retail lens identification and finite-focus data remain unsupported. Full application tests, typecheck, lint, build, generated metadata, browser checks and deployment were not run under the addendum’s restrictions.

## 2026-11-13 — Cleanup and wording pass

Re-read the supplied patent table and drawing renders and the validator/integration reports. The table's ten radii, six thicknesses, three air gaps, six nD/V rows and Chance identifiers agree with the retained data; both cemented interfaces remain intact. Cooke's [History of Panchro, Part 1](https://cookeoptics.com/news-and-events/the-history-of-panchro-part-1/) was re-read for its explicit association of US 1,955,591 A with Lee's Speed Panchro family. The analysis distinguishes the 1-inch 16 mm example from the 35 mm cinema line and does not identify it as a specific retail lens. No public production construction diagram is established; the manufacturer-hosted advertisement is not one.

Fields changed:

- Subtitle: absent → `US 1,955,591 A, sole example — Speed Panchro family design for 16 mm`.
- Catalog specs: absent → `6 ELEMENTS / 4 GROUPS`, `ALL SPHERICAL`, `f/2`. An initial top-level placement was rejected by V2 ingestion and corrected to `catalog.specs` before the successful audits below.
- Focus: the numerical placeholder is unchanged, `1000000000000000.0` → `1e15`; description → `Infinity focus only; the patent supplies no finite-focus spacings or focusing mechanism.` No production focusing method or marketing close-focus distance was invented.
- Element types: generic spherical-glass wording → Positive Meniscus, Positive Meniscus, Negative Meniscus, Biconcave Negative, Biconvex Positive, Biconvex Positive, in front-to-rear order. Added short roles; existing `Element N` labels remain.
- Cemented annotations: added `C1` to both L2/L3 and `C2` to both L4/L5, with matching `doublets` brackets over surfaces 3–5 and 6–8. No air gap or cement layer was inserted. No `apd` tags were added.
- Glass labels: each former `Source Chance Bros …` label with wavelength/process wording → the explicit Unmatched label below. `glassnear.mjs` found no exact catalog row at |Δnd| ≤ 0.0001 and |Δν| ≤ 0.15; `trylabel.mjs` and `glasscheck.mjs` confirm all six labels remain intentionally unresolved. No catalog-copied spectral values existed to remove. For every row, stored-value changes are Δnd = 0 and Δν = 0; catalog-match deltas are inapplicable because no row was assigned.

| Element | Old Chance identifier | New glass label |
|---|---|---|
| L1 | 8894 | Unmatched (Chance 8894, nD 1.6100 / V 53.3) |
| L2 | 3265 | Unmatched (Chance 3265, nD 1.6150 / V 56.1) |
| L3 | 4743 | Unmatched (Chance 4743, nD 1.6134 / V 36.9) |
| L4 | 337 | Unmatched (Chance 337, nD 1.6469 / V 33.7) |
| L5 | unnumbered new glass | Unmatched (Chance unnumbered new glass, nD 1.6437 / V 48.3) |
| L6 | 6665 | Unmatched (Chance 6665, nD 1.6234 / V 56.3) |

The header and analysis now use plain technical wording. The analysis retains the patent metadata, source citations, inch conversion and first-order numbers; removes package status, ray-count and TypeScript passages; replaces the old review heading with Model Scope and Field Limitation; and explains the sodium-D versus retained helium-d convention. Element and cemented-group powers were checked with the paraxial probe. Historical audit paragraphs were spaced and stale hidden/cleanup lines marked closed; the dated deployment section and its rim corrections remain recorded. Key, name, maker, visibility, source metadata, catalog focal lengths, format, aperture settings, index references and all optical geometry are unchanged. No mounts or other unsupported catalog metadata were added.

Before → after engine values are identical: EFL 25.385179309223233 → 25.385179309223233 mm; FOPEN 2 → 2; half-field 17.5 → 17.5°; stop radius 4.156363225316541 → 4.156363225316541 mm; BFD/final interval 17.2312996905702 → 17.2312996905702 mm; total track 37.2210996905702 → 37.2210996905702 mm. The complete `built.mjs` and `probe.mjs --elements` outputs compare identically, including the unchanged static focus keyframes.

Checks: `audit:surface` reports OK with no validation errors. `audit:aperture` checks one lens/one station within 3%, with zero rim, trace, iris or failed diagnoses. `audit:field-coverage --all` reports one station at ≥99% of the 16 mm corner, no unsolved stations and zero skipped. The screenshot helper exited without producing an image, so no rendered-page review is claimed. No explicit command or edit denial occurred. Prettier and broad application checks were omitted as required by the cleanup addendum.

Open:

- Closed by the semi-diameter section below: the then-current 9 mm front singlet, 6.0/5.1 mm front-doublet S3/S4, 5 mm R5/R6 and rear-doublet rims, and 7 mm rear singlet required reconciliation with the figure's proportions and square edges.
- The patent does not specify the physical iris location or clear apertures; the centered iris, derived radius and calculated BFD remain model assumptions/results. Peripheral illumination and image quality over the full 35° field are not established by the format-corner result.
- A specific retail 1-inch product, camera mount, focusing mechanism and marketing minimum-focus distance remain unsupported. No finite-focus state is available. The selectable f/22 endpoint lacks a retail source and remains unchanged.
- Printed sodium-D indices retain the existing helium-d reference by instruction; historical full dispersion and an exact catalog match remain unavailable for all six glasses.
- Visual page review remains incomplete because the screenshot helper produced no image; broader checks and deployment are outside this pass.

## 2026-11-13 — Semi-diameter pass against the patent figure

Source: local `patents/US1955591A.pdf`, PDF page 1, sole figure; PDF page 3 confirms the sole 1-inch f/2 example, 35° full field, inch units and absence of printed clear diameters. No further scaling beyond ×25.4 is applied. PDF pages 1–2 show Horace William Lee, assignor to Kapella Limited, US 1,955,591, patented 17 April 1934; filing 11 November 1932 and British application 14 November 1931. No new bibliographic or naming mismatch was found.

### Drawing scale and scope

The native page raster is 2560 × 3300 pixels. Its axis slopes upward to the right by about 0.014 pixel per pixel (0.8°); measurements use that local axis, excluding thickness/radius leaders, hatching and the S2 air-gap leader. Approximate axial vertices in native page x coordinates are S1 987, S2 1054, S3 1070, S4 1188, S5 1233, S6 1423, S7 1457, S8 1595, S9 1605 and S10 1661.

The S1–S10 span gives 674 px / 19.9898 mm = 33.72 px/mm. Independent checks give S1–S4: 201 px / 5.969 mm = 33.67 px/mm; S4–S8: 407 px / 11.8364 mm = 34.39 px/mm; S5–S6: 190 px / 5.588 mm = 34.00 px/mm. Transverse scale was checked against the clean S1 arc, R = 19.4564 mm: at axis offsets 150, 190 and 220 native pixels, measured sag after correcting the tilt is 0.507, 0.820 and 1.100 mm, implying 33.99, 33.99 and 34.12 px/mm. The shallow 110 px sample gives 35.15 px/mm and is more sensitive to line thickness.

Despite that global agreement, local thicknesses are schematic: D1 gives 67 px versus about 68.5 expected; D3 about 45 versus 37.7; D4 about 34 versus 38.5; D6 about 56 versus 69.4. The latter discrepancies exceed 10%. Accordingly the following values use rim proportions and curve endpoints, with roughly 0.2–0.3 mm reading uncertainty, rather than claiming exact scale-derived mechanical apertures. Outer heights are about 235 px at the front singlet/front doublet and 210–215 px at the rear doublet/rear singlet. Optical S5/S6 curves end at about 145–150 px before flat lands continue to the outer edges. Small corner bevels are not individually modeled.

### Rim decisions

All values below are millimetres. The baseline is `.lens-work/base1123sd/CookeSpeedPanchroUS1955591.data.ts`, the post-cleanup committed rims. Each numbered optical surface changed; the stop, prescription, glass and metadata did not.

| Surface | Baseline sd | Figure proportion | Final sd | Evidence and constraint |
|---|---:|---:|---:|---|
| S1 | 9.0 | ≈6.9 | 8.0 | Smaller front singlet; square pair with S2, retained above figure for light budget |
| S2 | 9.0 | ≈6.9 | 8.0 | Same square edge as S1 |
| S3 | 6.0 | ≈6.9 | 6.9 | Front doublet outer rim is about the same height as L1 in the figure |
| S4 | 5.1 | ≈6.9 | 6.9 | Cemented interface reaches the common outer edge; no land on the cemented junction |
| S5 | 5.0 | ≈4.4 optical / 6.9 outer | 4.4 | Flat land added with `rimExtensionSd: 6.9` |
| S6 | 5.0 | ≈4.4 optical / 6.3 outer | 4.4 | Flat land added with `rimExtensionSd: 6.3` |
| S7 | 5.0 | ≈6.3 | 6.3 | Rear cemented interface reaches the common outer rim |
| S8 | 5.0 | ≈6.3 | 6.3 | Same outer height as S7 and the S6 land |
| S9 | 7.0 | ≈6.3 | 6.7 | Smaller rear singlet; square pair with S10, retained above figure for light budget |
| S10 | 7.0 | ≈6.3 | 6.7 | Same square edge as S9 |

Both lands exceed 0.1 mm, are on glass/air boundaries and add no transmission loss relative to the same optical caps. No rim cut depth is authored. The S3/S4 and S7/S8 raises follow clear figure mismatches, rather than enlarging rims to suppress real vignetting. Geometry limits remain at their existing defaults; no `checks` override is added.

### Beam clearance and illumination

The complete trial, including both lands, passed the surface and aperture audits before editing. After editing, `audit:surface` again reports OK with no errors; `audit:aperture` reports one lens/one station within 3% of the stated aperture and zero rim, trace, iris or failed diagnoses. The image-circle audit checks one lens with zero undersized and zero skipped. Corner coverage remains 100%: 6.35 mm of 6.35 mm at about 14.2°, clear; one station, zero unsolved or skipped.

Real-ray checks at the corner (14.17°) and the patent's 17.5° half-field show no axial or chief-ray clip. The latter reaches image height 7.884 mm. Nominal f/2 axial marginal heights S1–S10 are 6.35, 6.20, 5.89, 5.02, 4.23, 3.93, 4.41, 4.75, 4.67 and 4.56 mm. The tightest cap is S5: about 0.17 mm above the nominal axial marginal ray. The real-ray helper sets an exact nominal-f/2 stop radius of about 4.105 mm; the engine's derived physical stop remains 4.156363225 mm and its separate aperture audit is iris-limited. No lateral-aberration fan is printed; the prescription-only LSA helper returns +0.003/−0.022/−0.027/−0.020 mm at pupil fractions 1/0.85/0.7/0.5, consistent with the earlier full-pupil LSA reading. No raise was needed to cure an axial clip in this pass.

The engine vignetting lattice compares the same infinity state and field angles against the baseline. These percentages are geometric pupil transmission, not measured photographic relative illumination:

| Field angle | Baseline % | Final % |
|---|---:|---:|
| 0.0° | 100.0 | 100.0 |
| 2.4° | 96.4 | 100.0 |
| 4.7° | 89.5 | 99.9 |
| 7.1° | 82.2 | 98.8 |
| 9.4° | 74.2 | 98.0 |
| 11.8° | 65.8 | 94.6 |
| 14.2°, format corner | 56.9 | 86.0 |

The final set loses zero points against baseline at every sampled field. `rimcost.mjs --loo` additionally limits each singlet reduction considered independently: restoring the front singlet to 9 mm wins at most 2.4 points; restoring the rear singlet to 7 mm wins at most 2.8 points. Separate next-smaller 0.1 mm trials, front 7.9 or rear 6.6 mm with the other component held at its final value, cost 3.5/3.8 points respectively. Thus 8.0/6.7 mm are the smallest accepted one-decimal square rims under this stronger individual-cut check. Restoring either cemented component gives no illumination gain. Separate optical-cap restores, holding their companion rims fixed, also satisfy the rule: S5 4.4 → 5.0 mm wins at most 1.9 points (at 9.4°), and S6 4.4 → 5.0 mm wins at most 0.1 point. Real vignetting remains: the format corner loses about 14% of the sampled pupil, and the 17.5° meridional full-bundle rays exceed several rims.

Engine before → after: EFL 25.385179309 → 25.385179309 mm; FOPEN 2 → 2; half-field 17.5 → 17.5°; stop radius 4.156363225 → 4.156363225 mm; BFD 17.231299691 → 17.231299691 mm; total track 37.221099691 → 37.221099691 mm. The diagnostic tracing half-field increases 24.5613 → 25.1883°; the declared field is unchanged.

### Rendered comparison and remaining limits

The standard sketch was rendered and inspected at 24 px/mm; it omits lands by design. A second, land-aware SVG comparison was rendered through the coordinator's queue and inspected at a matched 33.72 px/mm. It shows the corrected cemented-component heights, square outer edges and flat inner lands against the sole patent figure, with baseline outlines in blue. The front singlet remains visibly taller than the drawing because of the illumination rule. The comparison is at `/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-EIkiKm/8d989648-1a4e-43f9-bdb4-c4cbb0d8c850/scratchpad/sd/panchro/overlay.png`. Browser/live-page review remains for the coordinator; no browser was run. Only infinity is published/modelled, so there is no finite-focus or zoom state to inspect.

No iris change is recommended or applied. The S5/S6 optical caps and lands remain about 1.088/1.450 mm from the assumed iris plane, respectively. The patent's S2 leader labels the air gap and supplies no physical iris location; the midpoint position and derived radius remain assumptions. No public maker construction diagram is established in the validator/cleanup notes, and none was downloaded or viewed: six elements/four groups and cemented L2/L3, L4/L5 agree with the patent alone. All six elements are spherical; no maker special-glass-position comparison is available.

The existing family-only retail attribution, sodium-D versus stored helium-d convention, unknown full dispersion, unsupported f/22 retail endpoint and absence of finite-focus/mount data remain unchanged. No explicit tool-call or edit refusal occurred. Broad tests, generated files, repository state changes and deployment were outside the authorized pass.


## 2026-11-13 — Glass proxies and catalog metadata

The pre-relabel baseline is `.lens-work/base1123glass/CookeSpeedPanchroUS1955591.data.ts`. The current data carries these label changes; catalog differences below are catalog minus the printed patent pair:

- L3: `Unmatched (Chance 4743, nD 1.6134 / V 36.9)` → `F3 (spectral proxy; patent Chance 4743, nD 1.6134 / V 36.9; supplier and melt unspecified)`. The Sumita F3 catalog row has nd = 1.61293, νd = 36.90; Δn = −0.00047 and ΔV = 0.00.
- L4: `Unmatched (Chance 337, nD 1.6469 / V 33.7)` → `J-SF2 (spectral proxy; patent Chance 337, nD 1.6469 / V 33.7; supplier and melt unspecified)`. The Hikari J-SF2 catalog row has nd = 1.64769, νd = 33.73; Δn = +0.00079 and ΔV = +0.03.
- L1 (Chance 8894), L2 (Chance 3265), L5 (Chance unnumbered new glass) and L6 (Chance 6665) remain Unmatched; no catalog row lies within the proxy Abbe window.

The engine keeps the printed index at each element's reference line and borrows only the assigned row's wavelength dependence. All six printed index/Abbe pairs remain unchanged. The proxy rule allows about 0.25 in Abbe number and about 0.002 in index; these labels are not exact glass matches and do not identify historical glass, supplier or melt. The historical sodium-D versus stored helium-d convention remains. The open historical-dispersion/exact-match item above remains unresolved: proxy selection supplies a qualified model curve rather than historical measurements or an exact identity.

The paraxial `chan.mjs` comparison uses the baseline and current data, in that order, through the same engine. C/d/F/g correspond to R/G/B/V. BFD is measured from the final optical surface; the focus offset is relative to the d-line (G) BFD in each file. Values below are before → after:

| Line / channel | EFL (mm) | BFD (mm) | BFD offset from d (µm) |
|---|---|---|---|
| C / R | 25.3993 → 25.4000 | 17.2504 → 17.2512 | +19.1 → +19.9 |
| d / G | 25.3852 → 25.3852 | 17.2313 → 17.2313 | 0.0 → 0.0 |
| F / B | 25.3831 → 25.3837 | 17.2218 → 17.2218 | −9.5 → −9.5 |
| g / V | 25.4104 → 25.4171 | 17.2473 → 17.2522 | +16.0 → +20.9 |

REF likewise stays at EFL 25.3852 mm and BFD 17.2313 mm, with 0.0 µm offset from G. Rounded equality at F does not imply an exact spectral identity. These are paraxial model results, not measured chromatic performance.

Catalog metadata:

- Name: `COOKE SPEED PANCHRO f/2 (US 1,955,591 Design)` → `COOKE SPEED PANCHRO 1 in f/2 (US 1,955,591 Design)`.
- Specs: `6 ELEMENTS / 4 GROUPS`, `ALL SPHERICAL`, `f/2` → `6 ELEMENTS / 4 GROUPS`, `DESIGN f = 1 in`, `F/2`, `ALL SPHERICAL`.
- `catalog.focalLengthMm.marketing`: 25.4 mm → absent; `catalog.fNumber.marketing`: 2 → absent, because no retail 1-inch lens is established. The nominal 1-inch f/2 patent design remains; `catalog.focalLengthMm.design` stays 25.385 mm and `catalog.fNumber.design` stays 2.
- Six elements/four groups, the 16 mm cinema format, family-only attribution, absent mount, inferred iris/rims, source prescription and infinity-only focus remain unchanged. Retail identity and finite-focus/mount evidence remain open.

The analysis title, design-only catalog wording, L3/L4 proxy descriptions and consolidated glass discussion agree with the current data. Earlier audit entries remain the historical record. Only the two Markdown companions are edited; the data file is read-only for this assignment. The permitted checks are the catalog-row lookup, `chan.mjs` comparison and Prettier write/check; no broad application commands, server or git state changes are run.
