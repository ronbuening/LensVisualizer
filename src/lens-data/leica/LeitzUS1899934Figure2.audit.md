# Figure 2 audit

- US 1,899,934 pages 1–2 checked by eye. R = +93.6, +324.07, +71.315, −99.842, +445.72, −108.755, −40.828, +33.963, +62.846, +54.734, −69.71. Axial spacings = 8.91, 0.4457, 19.611, 5.348, 11.143, 10.697, 5.349, 12.034, 4.457, 12.480. nD/ν = 1.6240/58.2, 1.6240/58.2, 1.6219/36.1, 1.6242/44.8, 1.5673/42.8, 1.5407/47.2, 1.6240/58.2.
- Three cemented interfaces: R4, R7, R10. Index difference at the negative member's cement face 0.0569; dimensionless relative cement power (n′ − n)·f / r = 0.139. An independent paraxial-matrix and exact-ray check agrees with the engine's infinity D-line ray intercepts to 7.2e−14 mm across 193 traced rays (201 attempted across the full pupil).
- Model rims [39.5, 39.5, 38, 38, 33, 27.5, 27.5, 27.5, 22.5, 22.5, 22.5] are estimates. Minimum rim-to-rim glass or air separation 0.4457 mm; at most 39.34% of any air gap is taken up by surface sag. No gap or sag override. The section drawing needed no rim trimming larger than 0.25 mm. Across its full stroke the iris clears the glass by at least 1.62 mm in front and 3.634 mm behind.
- The data file loads, traces at infinity and type-checks. Figure 1 of the same patent is modelled separately. Handwritten notes on the drawing sheet cite a British patent 381,135; that family link has not been checked.
- Meridional rays passing at 0°, 5°, 10°, about 19.64° (the default half-field) and 20°: 7, 7, 5, 1 and 1 of 9. These are not coverage, MTF, glass-dispersion or production-fit claims. Colour is modelled from nD and ν alone (C and F indices estimated). (Superseded 2026-11-17: L5 and L6 now trace on catalogue curves.)

## 2026-11-16 — Deployment validation

**Checked:** an independent re-read of the patent page images, rendered at 300 and 600 dpi. The check covered the front page and drawing sheet (bibliography; Figure 2 element shapes, cemented pairs and proportions) and page 2 (the Figure 2 table). Every radius with its sign, all seven thicknesses and three air spaces, all seven nD and ν values, and the three cemented interfaces match the file. No mismatches. The patent prints no stop, diameters, back focus, focal length or field. The claim's four conditions hold at the printed values (0.0569; 0.139; a2/a3 = 0.93; total air / length = 0.26). The table computes to an EFL of 99.99 mm, the usual f = 100 normalisation. On-axis spherical aberration is small (+0.018 mm at full aperture, −0.198 mm at the 0.7 zone), consistent with no misprint.

**Verdict:** valid as a hidden patent reference (closed: the lens is now shown in the catalogue). No production lens is documented. The Leitz Xenon 5 cm f/1.5 (Taylor, Taylor & Hobson design) and Summarit 5 cm f/1.5 are seven-element, five-group double-Gauss lenses, and the Hektor 7.3 cm f/1.9 has six elements in three groups. None has Figure 2's single front meniscus followed by three cemented doublets, and no Leitz f/1.3 lens was found.

**Changes:**

- `maker`: "Leitz" → "Leica" (house maker for Leitz-era lenses; file moved to `leica/`).
- `source.assignees`: "Ernst Leitz Optische Werke GmbH" → "Ernst Leitz GmbH" (the corpus form for this company).
- `source.patentNumber`: "US 1,899,934" → "US 1,899,934 A" (house form).
- `catalog.focalLengthMm.design`: 99.99195539633102 → 99.99 (rounded).
- Added `cemented` "D1" (L2/L3), "D2" (L4/L5) and "D3" (L6/L7), and three matching `doublets` (surfaces 3–5, 6–8, 9–11), for the printed cemented pairs. (Renamed C1–C3 on 2026-11-17.)
- Added a plain-English header comment: source, example, scale, glass line, and what is inferred.
- Analysis rewritten to the house section layout.
- Process notes removed from this log.
- No prescription value, rim, stop position or image distance changed.

**After changes (`built.mjs`):** EFL 99.992 mm, f/1.3, iris radius 20.356 mm, total track 137.306 mm, default half-field 19.64°. `probe.mjs`: back focus 46.831 mm, which equals the last gap. Group focal lengths: L1 + D1 +82.1 mm, D2 −45.7 mm, D3 +55.2 mm.

**Audits:**

- `audit:surface`: OK, no validation errors.
- `audit:aperture --raise`: no surface below the on-axis ray.
- `audit:image-circle` and `audit:field-coverage` skip the lens (no image format; hidden). (Still skipped on 2026-11-17 for the missing image format.)
- `clearap` at f/1.3: no axial clipping. The real marginal ray reaches the stop at 21.17 mm against the 20.36 mm paraxial iris, so about the outer 3% of the pupil radius is stopped. At an image height of 21.6 mm (12.2°), the rear doublet's estimated rims vignette 20–26% of one side of the bundle. The chief ray clears L1's estimated rim up to about 18.5°, below the engine's 19.64° default half-field. The patent states no field.

**Open:**

- Name, subtitle and specs wording: "PATENT REFERENCE", "HIDDEN QUALIFIED REFERENCE", "PATENT ONLY; NO RETAIL MATCH". (Closed 2026-11-17.)
- `focus.description` wording ("BFD", "retail identity"). (Closed 2026-11-17.)
- Optional glass labels for the five printed nD/ν pairs. (Closed 2026-11-17: two catalogue equivalents, three Unmatched.)
- Rims against the drawing (8.17 px/mm along the axis). The drawing reads about L1 39.4, L2/L3 36.7 (the model's s5 at 33 cuts the drawn full-height r5), L4/L5 29.5 and L6/L7 24.6. The model has 39.5, 38/38/33, 27.5 and 22.5. With the drawn rear rims, vignetting at 12.2° falls to 12–17%.
- The drawing bevels L5's rear face at about 24 mm, while the model's r8 rim at 27.5 mm reaches 14.0 mm behind its vertex. That is past the stop plane, but outside the iris stroke.

## 2026-11-17 — Cleanup and wording pass

**Data file:**

- `subtitle`: "FIGURE 2 — HIDDEN QUALIFIED REFERENCE" → "US 1,899,934 A, Figure 2 — Leitz split-front triplet".
- `specs`: ["7 ELEMENTS / 4 GROUPS", "PATENT ONLY; NO RETAIL MATCH", "ESTIMATED STOP AND RIMS", "INFINITY ONLY"] → ["7 ELEMENTS / 4 GROUPS", "DESIGN F/1.3", "ALL SPHERICAL", "3 CEMENTED DOUBLETS"].
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value). No `catalog.closeFocusM.marketing` is set, because no product is documented.
- `focus.description` → "Infinity focus only; the patent gives no close-focus data."
- Element `label`: "L1" … "L7" → "Element 1" … "Element 7". Each element also has a plain optical `role`.
- Element `type`: "Biconvex" → "Biconvex Positive" (L2, L7); "Biconcave" → "Biconcave Negative" (L3, L5). The meniscus types already matched the radius signs.
- Cemented ids and `doublets` text: D1/D2/D3 → C1/C2/C3 on both members of each pair.
- Header comment: one long line reflowed. Added a GLASS note on the two catalogue equivalents.

**Glass labels**, added at the D line with `indexReference "D"`; each resolves:

| Element | Label | Catalogue nD / νD | ΔnD | Δν |
|---|---|---|---|---|
| L5 | "S-TIL26 (OHARA catalog equivalent)" | 1.56721 / 42.81 | −0.00009 | +0.01 |
| L6 | "S-TIL2 (OHARA catalog equivalent)" | 1.54062 / 47.22 | −0.00008 | +0.02 |
| L1, L2, L7 | "Unmatched (nD 1.6240 / V 58.2)" | nearest S-BSM15 1.62290 / 58.16 | −0.0011 | −0.04 |
| L3 | "Unmatched (nD 1.6219 / V 36.1)" | nearest F2 1.61989 / 36.36 | −0.0020 | +0.26 |
| L4 | "Unmatched (nD 1.6242 / V 44.8)" | nearest BAM8 1.62362 / 47.09 | −0.0006 | +2.29 |

Hoya E-FL6 (ΔnD −0.00010) and E-FEL2 tie with the two Ohara rows; Ohara was used for both so one vendor is named. The paraxial numbers do not depend on the labels. They change only the colour channels of L5 and L6, by catalogue dispersion within 0.03 of the printed ν. No `apd` tags.

**Analysis:**

- H1 → the new name.
- `**Patent:**` row → "US 1,899,934 A".
- Doublet ids → C1–C3; element headings carry "Element N".
- Glass section rewritten for the two catalogue equivalents.
- Removed: "hidden patent reference", "house rule", "computed by the engine", and the transcription-check remark.
- The no-product statement now appears once, in Design Heritage and Context.

**Engine numbers, before and after (identical):**

- `built.mjs`: EFL 99.99196 mm, FOPEN 1.3, half-field 19.640°, stop radius 20.3564 mm.
- `probe.mjs`: BFD 46.8314 mm, total track 137.3061 mm.

**Audits:** `audit:surface` OK; `audit:aperture` no rim limit; `audit:image-circle` and `audit:field-coverage` skip the lens (no image format).

**Open:**

- Rims against the drawing (L2/L3 ≈ 36.7 with s5 at 33, L4/L5 ≈ 29.5, L6/L7 ≈ 24.6), and the L5 rear bevel at about 24 mm. Both are listed above, for the semi-diameter pass.
- No `imageFormat` or field angle: the patent states none.
- The `fStops` list beyond f/1.3 is a model default, not printed by the patent.
