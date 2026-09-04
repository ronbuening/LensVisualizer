# NikonAFMicroNikkor200mmf4D — Patent and Repository Integration Audit

## Job card

- **PATENT:** US 5,402,268
- **LENS:** NIKON AF MICRO-NIKKOR 200mm f/4D IF-ED
- **EMBODIMENT:** Example 1 / First Embodiment
- **OUTPUT STEM:** `NikonAFMicroNikkor200mmf4D`
- **Audit stage:** Stage 4 independent adversarial audit, followed by repository integration on 2026-08-11

The patent and embodiment were held fixed. The independent first pass was completed before the prior Stage 1–2 audit was consulted. The prior audit was then used only as a post-pass comparison; it did not supply the fresh transcription or calculation inputs.

## Independent source re-extraction

The uploaded patent PDF was freshly rendered and inspected. The first embodiment is Fig. 1 and Table 1. The rendered source, not the PDF text layer, governs values where OCR drops signs or digits.

Critical source locations:

- Patent PDF page 1: Fig. 1, showing functional groups G1–G4, the variable intervals d5, d8 and d14, the long G4 air interval DA, back focus Bf, and focus-motion arrows. No explicit aperture-stop or iris symbol is shown.
- Patent PDF page 7 (printed columns 7–8): Table 1 and the detailed focus-spacing table for infinity, β = −0.5000 and β = −1.0000.
- Patent PDF pages 9–10 (printed columns 11–14): claim 14, which repeats the first-embodiment prescription and variable intervals.
- Patent PDF pages 4–6: the + / + / − / + group-power description, focus-motion description, and conditions (1)–(7).

Fresh Table-1 transcription used for the audit, with the precise infinity variable rows substituted for the rounded base rows:

| S | R (mm) | d after (mm) | n(d) after | νd |
|---:|---:|---:|---:|---:|
| 1 | +197.971 | 2.5000 | 1.80384 | 33.9 |
| 2 | +85.604 | 7.0000 | 1.49782 | 82.6 |
| 3 | −206.085 | 0.3000 | 1.00000 | — |
| 4 | +71.626 | 6.0000 | 1.49782 | 82.6 |
| 5 | +432.817 | 6.6432 | 1.00000 | — |
| 6 | +79.137 | 2.5000 | 1.79631 | 40.9 |
| 7 | +39.959 | 8.8000 | 1.60311 | 60.7 |
| 8 | +484.258 | 5.1405 | 1.00000 | — |
| 9 | +196.475 | 2.0000 | 1.62280 | 57.0 |
| 10 | +31.414 | 5.0000 | 1.80384 | 33.9 |
| 11 | +62.330 | 3.7000 | 1.00000 | — |
| 12 | −105.523 | 4.0000 | 1.80518 | 25.4 |
| 13 | −59.020 | 2.0000 | 1.62041 | 60.1 |
| 14 | +49.151 | 45.1242 | 1.00000 | — |
| 15 | +1213.454 | 2.0000 | 1.68893 | 31.1 |
| 16 | +69.615 | 6.0000 | 1.62041 | 60.1 |
| 17 | −59.143 | 46.5000 | 1.00000 | — |
| 18 | −72.715 | 2.5000 | 1.77279 | 49.4 |
| 19 | −436.246 | 0.4000 | 1.00000 | — |
| 20 | +86.920 | 6.0000 | 1.54814 | 45.9 |
| 21 | +815.561 | 58.9638 | 1.00000 | — |

The independently read focus table is:

| state | d0 (mm) | d5 (mm) | d8 (mm) | d14 (mm) | Bf (mm) |
|---|---:|---:|---:|---:|---:|
| infinity | ∞ | 6.6432 | 5.1405 | 45.1242 | 58.9638 |
| β = −0.5000 | 480.7237 | 14.2044 | 17.7426 | 32.5222 | 58.9638 |
| β = −1.0000 | 272.5885 | 6.6432 | 37.1142 | 13.1506 | 58.9638 |

The source correspondence values for conditions (1)–(7) are 2.12, −1.65, 0.87, −5.08, 0.23, 1.67 and 2.50 respectively.

## Conventions re-established

- Radii use the ordinary sequential sign convention: positive center of curvature toward image space, negative toward object space.
- Thicknesses are positive forward axial distances in the ordinary sequential prescription.
- Refractive indices are d-line values; the patent explicitly defines λ = 587.6 nm.
- The first embodiment is all-spherical. There is no conic constant, polynomial asphere, coefficient scaling, diffractive phase term, or aspheric-departure calculation.
- The prescription is used at native scale; no focal-length scale transformation is applied.
- The patent publishes no aperture-stop position, stop diameter, or clear semi-diameters. Any `STO` and `sd` values are therefore disclosed modeling inferences.
- The source caption “Variable Interval in Zooming” is a wording error for this fixed-focal-length prime. The three columns are focus states.
- The prose says G1 moves objectward along a convex nonlinear path, but the numerical table returns d5 to 6.6432 mm at β = −1.0000 after an intermediate 14.2044 mm excursion. The numerical table is retained as an explicit focus keyframe, so the published reversal is represented exactly at all three source states.

## Fresh optical calculation

A new self-contained verification script re-entered the patent prescription independently and implemented both reduced-angle y–ν sequential tracing and explicit ABCD multiplication. The two paths agree to machine precision. The final data object was then parsed separately and subjected to the same calculations; the neutral inferred `STO` split was recombined before source comparison.

Infinity matrix from immediately before S1 to immediately after S21, excluding Bf:

`[[0.29459407810400695, 148.49787361474884], [-0.004996359647006213, 0.8759552067911373]]`

| Quantity | Fresh result | Source/comparison |
|---|---:|---|
| EFL | 200.145720214355 mm | patent detailed f = 200.1499 mm; Δ = −0.004179786 mm |
| BFL from S21 | 58.961743933010 mm | patent Bf = 58.9638 mm; Δ = −0.002056067 mm |
| H1 from S1 | +24.827034475629 mm | independent calculation |
| H2 from S1 | +22.923923718655 mm | independent calculation |
| S1→S21 track | 164.1079 mm | independent sum |
| S1→image track | 223.0717 mm | independent sum |
| TL/EFL | 1.114546440269 | fails project telephoto criterion TL/EFL < 1 |
| BFD/EFL | 0.294604350954 | fails retrofocus criterion BFD > EFL |
| Petzval sum | +0.000478851988865 mm⁻¹ | surface-by-surface Σφ/(n·n′) |
| Petzval reciprocal magnitude | 2088.327966163 mm | independent calculation |

The patent title uses “telephoto” as source terminology, but the project’s explicit geometric rule is not satisfied. The data and analysis correctly avoid classifying the modeled prescription as telephoto under that rule.

### Finite focus

- β = −0.5000: A = −0.500004099708, B = −0.004492923683 mm.
- β = −1.0000: A = −0.999998254310, B = −0.001826423633 mm.
- At β = −1.0000, the object-to-image vertex distance is 495.6603 mm, consistent with Nikon’s rounded 0.5 m production minimum-focus specification after reference-plane normalization.
- G3 moves imageward by 12.6021 mm at β = −0.5 and 31.9737 mm at β = −1 relative to infinity.
- G1’s intermediate objectward excursion is 7.5612 mm, while its net endpoint displacement at 1:1 is 0 mm.
- d8+d14 is 50.2647, 50.2648 and 50.2648 mm across the three source states, consistent with 0.0001 mm source rounding.
- The β = −0.5 G3 travel fraction is 0.394139558450. Linear interpolation of d14 at that fraction gives 32.522139414 mm, only −0.000060586 mm from the published 32.5222 mm. The same endpoint interpolation for d5 gives 6.6432 mm versus the published 14.2044 mm, confirming the current schema limitation rather than a data error.

## Power audit

Standalone element powers, isolated cemented powers, and in-situ functional-group powers were recomputed independently and kept distinct.

| Unit | EFL (mm) |
|---|---:|
| L11 standalone | −189.502330591 |
| L12 standalone | +122.468927446 |
| L2 standalone | +171.464632098 |
| L31 standalone | −104.311476088 |
| L32 standalone | +71.679575650 |
| L41 standalone | −60.320053192 |
| L42 standalone | +73.492675254 |
| L51 standalone | +160.184961917 |
| L52 standalone | −42.921844971 |
| L61 standalone | −107.274379164 |
| L62 standalone | +52.477311605 |
| L7 standalone | −113.254744664 |
| L8 standalone | +176.972875113 |
| cemented L1 | +344.592346979 |
| cemented L3 | +243.701006883 |
| cemented L4 | −276.455203317 |
| cemented L5 | −57.630123183 |
| cemented L6 | +99.174536222 |
| G1 | +114.998349334 |
| G2 | +243.701006883 |
| G3 | −47.991137307 |
| G4 | +119.999894315 |
| G1+G2 | +80.011115751 |

All seven patent conditions independently recompute to 2.119169608044, −1.647870005864, 0.866966647984, −5.076205149246, 0.232330723586, 1.667206076818 and 2.500459481663. All are inside the patent’s required intervals and reproduce its rounded correspondence values.

## Stop, pupils and f-number

Because the patent supplies no physical stop, the data’s stop is a modeling inference. `STO` is placed 2.57025 mm after S8, splitting the infinity d8 gap equally, and is fixed to the G2 side. The authored stop semi-diameter is 19.097853 mm.

At infinity, the independent pre-stop trace gives an entrance-pupil semi-diameter of 25.018215569 mm and modeled f-number 3.999999913386 at the computed EFL. The inferred pupil results are therefore internally consistent with the source f/4.0 but are not source-published dimensions.

Model-derived pupil stations and semi-diameters:

| state | entrance-pupil z from S1 (mm) | entrance-pupil SD (mm) | exit-pupil z from S21 (mm) | exit-pupil SD (mm) |
|---|---:|---:|---:|---:|
| infinity | +32.446143686 | 25.018215569 | −133.844273481 | 24.100752699 |
| β = −0.5000 | +45.099191365 | 27.238566482 | −119.204477688 | 18.459035158 |
| β = −1.0000 | +32.446143686 | 25.018215569 | −94.787774415 | 12.610435763 |

These pupil quantities are outputs of the inferred stop model and are not promoted to patent facts.

## Geometry and rendering prerequisites

The current specifications no longer use a universal `sd/|R| < 0.90` element rule. The fresh Stage-4 script therefore checks positive element edge thickness, actual spherical rim slope, shared-gap sag intrusion, stop clearance, ray containment, and the all-spherical conic status.

- Minimum element edge thickness: 0.619564833 mm.
- Maximum actual rim angle: 40.736049904°; below the default 64.2° policy.
- Maximum non-stop shared-gap intrusion fraction: 0.894226235; below the default 0.90 policy.
- S8 rim-to-STO axial clearance: 1.924502289 mm.
- STO-to-S9 vertex clearance at infinity: 2.57025 mm.
- Conic limits: not applicable; all surfaces are spherical.
- Full on-axis pupil: contained at all three published source states.
- Default visible off-axis fan (0.6 field / 0.75 pupil): contained at all three source states.
- Full-field/full-pupil corner rays exceed some exterior element semi-diameters at infinity and β = −0.5, but none at β = −1. This is reported as physical wide-open vignetting rather than suppressed by layout controls.

The repository `elementRenderDiagnostics` corpus gate passes with the replacement installed, so the production renderer does not require an impermissible hidden-trim workaround for this lens.

## Glass audit

The patent names no glass vendor and publishes only d-line nd and νd. A fresh vendor audit was performed against current authoritative HIKARI, OHARA, HOYA, SCHOTT, CDGM and SUMITA sources. The separate Stage-4 CSV records 60 vendor/coordinate rows and residuals.

The exhaustive compatibility pass selected one coefficient-backed optical equivalent for every patented coordinate:

| Patent coordinate | Selected catalog curve | Coordinate residual |
|---|---|---|
| 1.80384 / 33.9 | E-LAFH2 | Δnd = 0; Δνd = −0.011 |
| 1.49782 / 82.6 | J-FKH1 | Δnd = 0; Δνd = −0.030 |
| 1.79631 / 40.9 | NBFD2 | Δnd = +0.000889; Δνd = +0.244 |
| 1.60311 / 60.7 | J-SK14 | Δnd = 0; Δνd = −0.010 |
| 1.62280 / 57.0 | S-BSM10 | exact rounded six-digit code; Δνd = +0.050 |
| 1.80518 / 25.4 | S-TIH6 | exact rounded six-digit code; Δνd = +0.025 |
| 1.62041 / 60.1 | J-SK16 | Δnd = 0; Δνd = +0.150 |
| 1.68893 / 31.1 | S-TIM28 | exact rounded six-digit code; Δνd = −0.025 |
| 1.77279 / 49.4 | M-TAF1 | Δnd = −0.000290; Δνd = +0.060 |
| 1.54814 / 45.9 | E-FEL1 | Δnd = 0; Δνd = −0.080 |

Alternatives were evaluated across every compatible catalog candidate rather than simply restoring the names from the prior revision. In particular, J-SK14 is preferred over the close BACD14/BSM14 family in Nikon/Hikari context; S-TIH6 and S-TIM28 reproduce the rounded patent codes; M-TAF1 is the closest combined nd/νd residual at 773494; and E-FEL1 exactly reproduces nd at 548459. NBFD2 is the only compatible coefficient-backed catalog curve for 796409 and remains within the repository's strict coordinate tolerances.

All 13 elements therefore resolve to compatible Sellmeier curves. No catalog expansion was necessary because the discontinued-inclusive sources already contain every selected entry. Each annotation explicitly says “catalog equivalent” and “production supplier unspecified”; no historical melt/vendor attribution, APO claim, or anomalous-partial-dispersion claim is inferred from those computational assignments. The production diagram’s two ED-marked front positions align with the two patent elements at 1.49782 / 82.6, supporting an ED-class description without identifying a production glass maker.

Authoritative catalog sources consulted for the fresh check:

- HIKARI optical-glass catalog and J-FK family data: https://www.hikari-g.co.jp/optical_glass/catalog/ and https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-fk/
- OHARA current catalog download: https://www.ohara-inc.co.jp/en/product/catalog/
- HOYA Optics data download: https://www.hoya-opticalworld.com/english/datadownload/index.html
- SCHOTT Advanced Optics optical-glass downloads: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- CDGM current optical-glass data/download portal: https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
- SUMITA optical-glass downloads/data book: https://www.sumita-opt.co.jp/en/download/

## Production correlation audit

The patent does not name the commercial lens, so the product tie remains an inference. Nikon’s current official product information gives the production lens as 200 mm f/4, Nikon F-bayonet, FX/35 mm, 13 elements in 8 groups, 12°20′ maximum FX angle of view, 1.0× maximum reproduction, two ED elements, and internal focusing. Those values independently converge with Example 1’s 200 mm f/4, 13-element/8-group topology, 12.33° full field, published 1:1 endpoint, and two front low-dispersion coordinates.

The supplied Nikon optical-section image was also compared visually against Fig. 1. It shows the same 13-element/8-group topology and marks two front elements as ED at the positions corresponding to patent L12 and L2. The shape sequence and the conspicuously long rear fixed-group separation also agree. This supports, but does not convert, the correlation into a manufacturer-confirmed patent attribution.

Official production source consulted: https://www.nikonusa.com/p/af-micro-nikkor-200mm-f4d-if-ed/1989/overview

## Data-file adversarial comparison

The final data file matches the fresh patent transcription for all 21 refracting surfaces, refractive indices, source spacings and focus endpoints once the intentionally neutral `STO` split is recombined. Cemented interfaces use the downstream element ID and downstream index. There are exactly 13 physical elements, eight air-separated physical groups, and exactly one `STO`. No sensor plate, filter, dummy plane, generic cement layer, asphere, diffractive surface, or inactive optical plane has been introduced.

The data’s `var` base values match surface `d` values. The source d8 endpoint totals are exactly recovered as S8.d + STO.d = 5.1405 mm at infinity and 37.1142 mm at 1:1. G1’s unrepresentable intermediate reversal is explicitly disclosed instead of being silently reconstructed.

No Stage-4 correction was required in the patent-derived radii, spacings, indices, or focus fields. Repository integration preserves the maker-folder import and pre-existing catalog key; the later screenshot review adds patent-facing diagram labels, adjusts only inferred clear apertures, and assigns compatible dispersion models without changing the patented prescription.

## Analysis-file adversarial comparison and corrections

Two clean-file corrections were made. Both remove workflow/audit-history language from the scholarly analysis; neither changes an optical fact or numeric result.

1. **Focus Mechanism wording**
   - Old: “the β = −0.5 source state remains documented here and in the audit.”
   - Corrected: “the β = −0.5 source state is documented here.”
   - Source location: supplied analysis, Focus Mechanism, around lines 225–229.
   - Independent evidence: the intermediate state is directly published in patent Table 1, so the analysis can state it directly without referring to an audit artifact.
   - Downstream consequence: prose-only cleanup; no data, focus, or calculation changes.

2. **Verification Summary wording**
   - Old: “The final TypeScript arrays reproduce all seven patent conditions and the Stage 1 EFL, BFL, Petzval, and finite-focus results within floating-point noise. No upstream numerical correction to the Stage 2 data is required for this analysis.”
   - Corrected: “The final prescription reproduces all seven patent conditions and independently recomputed EFL, BFL, Petzval, and finite-focus results within floating-point noise.”
   - Source location: supplied analysis, Verification Summary, around lines 340–341.
   - Independent evidence: the Stage-4 y–ν/ABCD calculation independently reproduces those quantities; the clean analysis should not contain workflow/revision-history language.
   - Downstream consequence: prose-only cleanup; all quantitative claims remain unchanged.

The required analysis section order, structured patent metadata, element names/counts, nd/νd values, glass annotations, focus representation, stop/SD inference disclosures, scaling status, and quantitative claims all match the final data and fresh calculations.

## 2026-08-11 repository integration and SD audit

The replacement was installed at the existing `src/lens-data/nikon/NikonAFMicroNikkor200mmf4D` stem. The supplied root-level import was changed to the maker-folder import `../../types/optics.js`. The supplied key `nikon-af-micro-nikkor-200mm-f4d-if-ed` was not adopted: the existing key `nikon-af-micro-nikkor-200mm-f4d` is retained so `/lens/nikon-af-micro-nikkor-200mm-f4d` and existing article/bookmark links resolve directly to the replacement without an alias or redirect.

The local `patents/US5402268.pdf` and the supplied patent are SHA-256 identical. PDF pages 1 and 7 were rendered and inspected directly. Fig. 1 and Table 1 agree with the final 13-element/8-group prescription, all 21 radii and spacings, all ten distinct nd/νd coordinates, and the three published focus states.

The screenshot-driven display review produced two narrowly supported data changes:

- `audit:image-circle` reports 0 undersized surfaces.
- `audit:surface` reports no edge-thickness, rim-slope, shared-gap, or other validator errors.
- Each element now supplies the patent identifier through `diagramLabel`: `L11`, `L12`, `L2`, `L31`, `L32`, `L41`, `L42`, `L51`, `L52`, `L61`, `L62`, `L7`, and `L8`. This replaces generic numeric element tags in the SVG while leaving element IDs and all optical references intact.
- The Fig. 1 measurement tool was run against PDF page 1. The drawing is schematic and is contaminated by group brackets, labels, and focus arrows; its whole-lens vertical scale is not a reliable clear-aperture scale.
- The rear G3 doublet L51/L52 was the only actionable clear-aperture discrepancy. Uniformly enlarging surfaces 12–14 to 16.5 mm or more was rejected because S11→S12 would exceed the 90% air-gap intrusion limit. The accepted profile uses 16.0 mm at S12 and 17.0 mm at S13/S14, increasing the displayed L5 height without producing an edge crossing or a cross-gap collision.
- The inferred `STO` remains in d8 between G2 and G3. Fig. 1 publishes no stop; moving it into another gap merely to separate overlay text would be unsupported. The screenshot's `EP` and `XP` labels are optional pupil overlays rather than patent element annotations.
- The repository production render-diagnostics test passes. Minimum edge thickness remains 0.619565 mm, maximum rim angle remains 40.736050°, and maximum shared-gap intrusion fraction is now 0.894226, below the 0.90 limit.

Repository verification completed:

- Fresh patent-only y–ν trace and ABCD multiplication: PASS.
- Fresh patent vs final-data optical matrices: PASS to < 1×10⁻¹² at infinity, β = −0.5 and β = −1.
- Stage-4 verifier against the integrated data and analysis: PASS, 30 assertions.
- `npm run generate:glass-reports`: PASS; strict Sellmeier coverage is restored to 13/13 elements with no catalog mismatch.
- `npm run typecheck`: PASS.
- Focused analysis, patent-metadata, lens-data, catalog, and production render-diagnostics tests: PASS, 149 tests.
- `npm run format:check` and `npm run lint`: PASS.
- Full `npm run test`: PASS, 254 files / 2487 tests.
- `npm run build`: PASS; all 1080 routes prerendered. The build emits the updated US 5,402,268 page at `/lens/nikon-af-micro-nikkor-200mm-f4d/` and emits no `-if-ed` replacement route or redirect.

No patent-derived radius, spacing, refractive index, Abbe value, focus endpoint, element/group count, or spherical-surface status required correction during repository integration.
