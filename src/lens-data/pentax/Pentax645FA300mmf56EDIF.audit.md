# Fresh audit — November 16, 2026

Historical October 2 association PR9902-06, not a new discovery. Newly modeled E1 with factory identity explicitly unverified. Primary PDF page 9/Table 1 visually checked against transcription; source stop and source image interval literal. Partial dispersion ratios transcribed into structured dPgF using engine normal line.

Geometry iteration: initial heuristic L3 SD 28 mm failed gap 4–5 intrusion check; SD 26 mm passes. No source radii/spacing changes or allowance overrides. Ingestion, axial samples, all 7 field stations, source-plane and render diagnostics pass; no hidden trimming. Source-plane offset +0.003191 mm, tolerance 0.381798 mm.

Fresh-main filename check f5b456fec7b69184844078f6ec6b1ac132f8ec58: no matching FA645300 file. Full source-body/alias and compatibility checks still required. Test snapshot /tmp/lens-derive-base, not asserted current-main. No full typecheck/regression or browser QA claimed. Estimated clear apertures and approximate glass dispersion limit performance predictions. No finite-focus positions invented.


## 2026-11-16 refinement
- Re-read original A1 Figure 1/Table 1; no defensible SD, literal prescription, glass, stop or image-plane change identified.
- Data changes: explicit infinity-only subtitle, required closeFocusM disclaimer and source/dispersion/field-boundary header. No optical numerical changes.
- Fresh independent d-line trace and geometry evidence plus pinned-engine ingestion/reference-geometric MTF recorded in analysis. No failed/unaimed rays in four app fields.
- Inherited earlier render check remains inherited, not newly run. Full regression/browser and finite-focus validation not claimed.

## 2026-11-16 — Deployment validation

Checked independently against US 2002/0041452 A1 (page image of Table 1): all 14 surfaces and the stop gaps match; no aspheres, no variable gaps printed. The model gives f 292.353 (292.35), F5.7, fB 116.663 (116.66), and reproduces the group focal lengths and Table 6 conditions. The `dPgF` values follow from the printed partial dispersion ratios (0.5774, 0.5703) on the engine normal line. Ricoh Imaging lists the smc PENTAX-FA645 300mmF5.6ED[IF] as 7 elements in 7 groups, ED glass, inner focus, 2.2 m; Pentax has published no construction diagram, so the product match rests on those figures. The FA★645 300mm F4 (8/8) does not fit this patent.

- Assignee changed to the corpus form "Asahi Kogaku Kogyo Co., Ltd.".
- Open: Embodiments 1 and 3 fit the product equally; Embodiment 1 is a choice, not a proven identity.
- Open: `focus.closeFocusM` carries the maker's 2.2 m although the model is infinity-only; name, key, specs, element types and glass labels are still in package wording. The corner bundle is cut 38–45 % one-sided at S1–S6 by the inferred rims.

## 2026-11-16 — Cleanup and wording pass

Public text and metadata only; no radius, thickness, index, Abbe number, semi-diameter or stop value changed.

- Data file: house header, unquoted keys, one-line surfaces. Subtitle is now "US 2002/0041452 A1, Embodiment 1 — production correlation by construction". Specs are 7 ELEMENTS / 7 GROUPS; ED GLASS, ALL SPHERICAL; 300 mm MARKETED / 292.35 mm DESIGN; F5.6 MARKETED / F5.7 DESIGN; INNER FOCUS, 2.2 m MINIMUM.
- Focus: `focus.closeFocusM` 2.2 → 1e15 (focus not modeled), the maker's 2.2 m moved to `catalog.closeFocusM.marketing`, description rewritten as "Infinity focus only; …". This closes the 2.2 m item in the deployment-validation section above.
- Elements: types named from the signs of R (L1, L2, L6 Biconvex Positive; L3 Biconcave Negative; L4, L7 Negative Meniscus; L5 Positive Meniscus), a specific role for each, `focalLengthMm` 148.21 / 130.45 / −102.74 / −85.35 / 176.83 / 128.83 / −123.58. Group brackets G1 (+) surfaces 1–6, G2 (−) focus 7–10, G3 (+) 11–14 from the patent text. No cemented pairs, so no `cemented` or `doublets` entries.
- Glass labels, exact catalog rows (Δnd, Δνd against the printed values): L1 S-FSL5 (0.00000, +0.04); L2 S-FPL51 (0.00000, −0.05); L3 S-BAH32 (0.00000, −0.03); L4 S-NBH5 (−0.00001, −0.02); L5 S-TIH6 (0.00000, +0.03); L6 S-TIL26 (0.00000, +0.02); L7 S-LAH60 (0.00000, −0.04). All were "Unmatched" before. The patent-printed `dPgF` is kept on L3 and L4: the printed ratios 0.5774 and 0.5703 are 0.0041 and 0.0035 below the catalog values of S-BAH32 (0.5815) and S-NBH5 (0.5738). N-KZFS5 (Schott, 0.5710) is nearer the printed L4 ratio; the Ohara row was kept for a single-vendor palette matching the folder's label form.
- `apd: "inferred"` on L2, the only ED-class glass in the prescription; the maker states ED glass without a count or position.
- Analysis: rewritten to the house skeleton with an H1; process passages (ray counts, sampling grids, build references) removed; the grant US 6,580,568 B2 (June 17, 2003, application 09/921,897) confirmed on Google Patents; the equal fit of Embodiments 1 and 3 stated; closing section renamed "Model Scope and Limitations".
- Engine numbers before and after are identical: EFL 292.35344, F5.7, stop radius 16.29557, BFD 116.6632, half-field 12.1196 (engine default), total length 246.00. The surface audit reports no errors, the aperture audit no rim, trace or iris limit, and field coverage is at least 99 %.

Open: `aperture.nominalFNumber` stays 5.7 with `fStops` starting at 5.7. The house pattern of the FA 645 120mm (nominal = marketed) would set 5.6 and enlarge the traced stop, since the stop has no stored semi-diameter.
Open: Embodiments 1 and 3 fit the product equally; Embodiment 1 is a choice, not a proven identity.
Open: the semi-diameters are estimates. At the 645 corner the bundle is cut 38–45 % one-sided at S1–S6, worst at S5, where L3 is held to 26 mm by the 0.99 mm gap behind L2. No maker cross-section is available to check the rims against.
Open: the L3 and L4 glass identities rest on nd/νd only; the printed partial dispersion ratios differ from the catalog rows by about 0.004.
Open: no close-focus state is modeled; the patent prints none.
