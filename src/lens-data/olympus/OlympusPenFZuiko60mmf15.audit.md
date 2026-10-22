# Audit Log — OLYMPUS G.ZUIKO AUTO-T 60mm f/1.5

Patent: JP S38-9224 B, sole numerical example / Figure 1.

## Historical source and construction review

The three-page national publication supplies twelve radii, eleven internal intervals and seven glass pairs on page 1, the Seidel table and optional same-material manufacturing split on page 2, and the section and d/g aberration plots on page 3. The literal r8 = −43.1 and n6 = 1.5407 were confirmed; neither was corrected to a catalog or guessed reading. The optional same-index split of optical unit L4 was omitted because it adds no distinct optical medium. The 28° full-field heading remains distinct from the plots' 15° labels. A bilingual 1958 Olympus-affiliated paper establishes Yoshisada Hayamizu's Latin name; the filing and publication dates do not establish a separate grant event.

All source lengths were uniformly scaled by 0.6 for the probable 60 mm production association, without fitting the calculated EFL to exactly 60 mm. The unprinted infinity image interval is derived. The initial schematic clear-arc estimates clipped the nominal axial f/1.5 beam. The adopted rims are the minimum outward-rounded 0.01 mm axial-envelope floors, preserving matched outer rims and the reduced S7 cap without off-axis MTF fitting or a gap-sag override. Source radii, thicknesses and glass coordinates stayed unchanged.

The plane-interface Petzval entry was initially given a generic rounding interval; its contribution is exactly zero. No printed Seidel coefficient was repaired. Glass-coordinate report labels were corrected from e-line to d-line terminology without changing calculations. The source table has no spectral subscript; Figure 2's d/g curves support the contextual d-line convention. Catalog analogues remain unassigned historical identities.

Historical infinity calculations agreed on paraxial properties, material containment and sampled transmission. Reference-line and approximate-photopic MTF were kept distinct, as were Gaussian and best-axial image planes. Nominal-beam clearance did not establish full transmission under the broader viewer pupil convention: ordinary clipping persisted at all eight aperture settings. Finite sampling did not establish universal ray coverage. The original focus control was static; these earlier aberration and material results describe infinity only.

## 2026-10-22 — Deployment validation and fix-up pass

Re-read the local patent's three pages, including all twelve radii, eleven internal intervals, seven n/ν pairs, medium transitions and both cemented boundaries. The model matches the printed values at uniform ×0.6 scale; d7 = 15 becomes the unchanged 4.5 + 4.5 mm iris split. No transcription mismatch or source erratum was found. There are no aspheric coefficients. S6 remains plane, r8 remains −43.1 before scaling, and all rims and source spacings remain unchanged.

The patent states f = 100, F/1.5 and 28° full field. The scaled first-order model remains EFL 60.003003987 mm and infinity BFD 30.088696439 mm, preserving the +0.003003987 mm nominal focal-length residual. The physical stop radius remains 10.919548871 mm; its paraxial f-number is 1.490290604, distinct from the nominal exact-marginal F/1.5 convention. Infinity track remains 77.188696439 mm.

The Olympus fourteen-lens guide, page 3, confirms 7/5, 28°, 0.8 m minimum focus, 49 mm filter and 270 g. All four guide pages show nothing contrary to whole-lens helicoid focus, but provide no measured movement law. Ponder & Best page B-6 (PDF page 6), May 1968, stock 18-9202, shows the matching two front menisci, plane-interface central doublet, opposed central cavity, separate negative meniscus and curved-interface rear doublet. Its orientation differs from the patent; propagation order agrees. This supports a probable sheet-specific association, not exact factory coordinates or all-version identity. May 1968 is the dealer-sheet date, not a lens-version date. The dealer's 2 ft 7 in and the guide's rounded 0.8 m remain distinct printed quantities; the 49 mm filter is mechanical.

Unit focus is reconstructed by varying only the final gap after surface label `12`, not array index 12. For lens matrix M = (A B; C D), the 800 mm film-plane conjugate satisfies (A + qC)(800 − 47.1 − q) + B + qD = 0. The near-infinity root q = 35.361655576336445 mm gives 5.272959137632468 mm travel, object-to-first-vertex distance 717.538344424 mm and first-vertex-to-image track 82.461655576 mm. High-precision source-matrix arithmetic and the engine probe agree. Internal geometry, EFL and stop remain fixed.

| Field | Old → new |
|---|---|
| `name` | `OLYMPUS G.ZUIKO AUTO-T 60mm f/1.5 (Pen F, May 1968)` → `OLYMPUS G.ZUIKO AUTO-T 60mm f/1.5` |
| `subtitle` | `JPS389224B sole example; probable B-6 stock 18-9202 pairing, conditional 0.6 scale` → `JP S38-9224 B, Sole Example — probable Pen F production correlation` |
| `visible` | `false` → `true` |
| `catalog.specs` | Six long lines on probable May 1968 stock pairing, dimensionless ×0.6 scale, seven glasses/five groups and S6/S11, distinct field limits, metadata-only 0.8 m, and mechanical 49 mm filter → `7 ELEMENTS / 5 GROUPS`; `DESIGN f = 60.00 mm`; `DESIGN F/1.5`; `ALL SPHERICAL`; `HALF-FRAME`. The qualifications remain in the analysis. |
| L1–L7 `label` | `Glass element 1` … `Glass element 7` → `Element 1` … `Element 7`, matching neighboring Olympus files; names remain L1–L7. |
| L1–L7 `glass` | `Unidentified historical melt; catalog equivalents not adopted` → `Unmatched (historical glass)`; no catalog identity or spectrum added. |
| L1 `role` | `Front positive meniscus, source optical unit L1.` → `Front positive meniscus.` |
| L2 `role` | `Second positive meniscus, source optical unit L2.` → `Second positive meniscus.` |
| L3 `role` | `Positive front glass of source unit L3; plane rear is a real glass-to-glass interface.` → `Positive front member of central cemented group.` |
| L4 `role` | `Negative rear glass of source unit L3; reduced rear clear arc meets a source-figure shoulder.` → `Negative rear member with a reduced clear arc.` |
| L5 `role` | `Single negative meniscus, source unit L4; optional same-index manufacturing split is not adopted.` → `Single negative meniscus.` |
| L6 `role` | `Negative front member of source rear unit L5, curved cemented boundary S11.` → `Negative front member of rear doublet.` |
| L7 `role` | `Positive rear member of source unit L5.` → `Positive rear member of rear doublet.` |
| Surface `12` `d` / `gaps` | Fixed `d: 30.088696438703977`, no variable gaps → omitted surface `d` and `gaps["12"] = { label: "BF", values: [[30.088696438703977, 35.361655576336445]] }`. |
| `focus.description` | `NO_INTERNAL_RECONSTRUCTION` and metadata-only infinity description → whole-lens movement with fixed internal spacings and a calculated 0.8 m endpoint. `closeFocusM` remains 0.8. |
| Header comment | Static-focus/process terminology → explicit film-plane conjugate equation and travel; all source, scale, stop, rim and name qualifications retained. |

The public analysis now opens with patent identification, uses the existing normalized bibliographic spelling, and describes the calculated unit-focus endpoint. The correction preamble, hashes, private link, obsolete static-focus claims, code identifiers, ray/segment tallies and file-production narrative were removed. Technical architecture, glass analogues, numerical limitations, source citations and infinity-only scope of historical aberration results remain. The audit's former external-file instructions and pipeline receipts were condensed into the substantive history above; obsolete self-references to the former filename stem were removed.

Before and after the changes, the named-file surface audit reports no errors and the aperture audit accepts the single station without rim, trace or iris failure. The engine summary is unchanged. At the close keyframe, the probe changes the final gap 30.0887 → 35.3617 mm, track 77.1887 → 82.4617 mm, unbounded object conjugate → 800.00 mm object-to-image distance, and transverse magnification 0.0000 → −0.0879. These are all consequences of the added unit-focus endpoint; infinity and element/group powers stay unchanged. Full test suites, generators, formatting tools, builds, dev servers and state-changing git operations were excluded by this assignment. Changes remain uncommitted.

Open: exact factory prescription and version coverage; historical melts and exact production dispersion; source iris and clear dimensions; full non-Petzval Berek convention; finite-focus aberration behavior and full viewer-pupil transmission. Catalog-equivalent dispersion coverage for L1–L7 is closed by the glass classification pass below. Existing infinity viewer clipping remains disclosed; the nominal aperture audit does not resolve it.

## 2026-10-22 — Semi-diameter pass against the patent figure

Source: the local scan `patents/JPS389224B.pdf`, page 3. The upper drawing is the sole example's lens section (Figure 1); the axis is horizontal, with the object on the left. The scan's native raster is 352 dpi, and measurements were taken at that resolution on the upper side of the section. The lower side carries the r-number leader lines. The L3 and L5 group brackets were excluded by position.

Scale: vertex crossings at page x ≈ 1102 (r1), 1465 (plane r6), 1518 (r7), 1670 (r8) and 1912 (r12). Against the ×0.6 model spacings, these give 47.10 mm / 810 px = 0.0582 mm/px from r1 to r12. The shorter spans give 0.0584 (r1→r6), 0.0592 (r7→r8) and 0.0575 (r8→r12). The scale is consistent to about ±2%, and 0.0582 mm/px is used.

| Surface | Stored sd | Figure sd | Figure/stored | f/1.5 axial floor | Decision |
|---|---:|---:|---:|---:|---|
| 1, 2 (L1) | 20.01 | 19.9 (342 px) | 0.99 | 20.00 | keep; agrees |
| 3, 4 (L2) | 19.43 | 18.7 (322 px) | 0.96 | 19.43 | keep; within noise and on the floor |
| 5, 6 (L3/L4 outer rim) | 17.90 | 16.5 (284 px, flat cylindrical rim) | 0.92 | 17.89 | keep; the floor governs |
| 7 (L4 reduced arc) | 10.93 | 10.2 (shoulder at ≈175 px) | 0.93 | 10.92 | keep; the floor governs |
| 8, 9 (L5) | 11.53 | 12.0 (206 px, square-cut) | 1.04 | 11.52 | keep; within noise |
| 10, 11, 12 (L6/L7) | 11.50 | 12.0 (≈206 px) | 1.04 | 11.39 | keep; within noise |

No values were changed. Every element agrees with the drawing to within 5%, apart from two places where the drawing is smaller than the nominal f/1.5 axial beam: the central doublet's outer rim and its reduced S7 arc. There the axial floor governs, and the stored values sit at it, about 8% above the drawing. The figure is a hand-drawn schematic, and the stop position (the d7 midpoint) is a reconstruction. A drawn rim below the floor therefore does not justify going under the stated beam.

Clearance: at infinity and at the 0.8 m keyframe, the exact real-ray trace shows no clipped axial ray or blocked chief ray. ω reaches Y = 15.0 mm at 14.20° at infinity and 12.89° at close focus. The surface validator reports no errors, the image-circle floor check reports no undersized surface, and traced corner coverage is 100% (14.2° → 15.00 mm). The engine half-field is 21.31°, FOPEN is 1.500 and the stop radius is 10.92 mm, all unchanged. Wide open at infinity, the engine's geometric transmission is 52% at 14.2°. Ordinary rear-group vignetting remains at S9–S12, where the clearance trace flags up to 61% of the full-field bundle on one side. This vignetting is real and was kept.

The rendered section was viewed in the local app at infinity and at close focus, and its silhouette matches Figure 1. It shows two thin positive menisci, the large central doublet with a square outer rim and a stepped shoulder to the reduced S7 arc, the separate negative meniscus, and the rear doublet at about the same height as L5.

Maker diagram: the Ponder & Best May 1968 sheet B-6 (dealer PDF page 6, lower right) draws 7 elements in 5 groups with the axis vertical and the object at the top. It shows the same two front menisci, a plane-interface central doublet with a reduced rear arc, a separate meniscus and a rear doublet. Measured relative to L1, its half-heights are about 0.92 (L2), 0.87 (central doublet), 0.59 (S7 arc) and 0.55 (L5 and the rear doublet). The patent figure gives 0.94, 0.83, 0.51 and 0.60, and the model gives 0.97, 0.89, 0.55 and 0.57. The model lies between the two sources. The sheet is a solid silhouette with no special-glass or aspheric marking. The Olympus fourteen-lens guide is a specification table without a section drawing.

## 2026-10-22 — Glass classification and metadata pass

JP S38-9224 B, sole numerical example, page 1: all seven printed n/ν pairs remain unchanged under the contextual d-line convention. The catalog rows below now supply dispersion, including secondary spectrum. Residuals are catalog minus printed values; the catalog coordinates are those returned by `hasglass.mjs`.

| Element | Glass label old → new | Printed n_d / ν_d | Catalog row n_d / ν_d | Δn_d | Δν_d |
|---|---|---|---|---:|---:|
| L1 | `Unmatched (historical glass)` → `K-SK18 (SUMITA coordinate equivalent; supplier unconfirmed)` | 1.6385 / 55.5 | SUMITA K-SK18: 1.63854 / 55.5 | +0.00004 | 0 |
| L2 | `Unmatched (historical glass)` → `BACED5 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.6584 / 50.8 | HOYA BACED5: 1.65844 / 50.86 | +0.00004 | +0.06 |
| L3 | `Unmatched (historical glass)` → `BAF10 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.6700 / 47.2 | HOYA BAF10: 1.67003 / 47.19 | +0.00003 | −0.01 |
| L4 | `Unmatched (historical glass)` → `E-FD4 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.7552 / 27.5 | HOYA E-FD4: 1.7552 / 27.53 | 0 | +0.03 |
| L5 | `Unmatched (historical glass)` → `E-FD8 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.6889 / 31.1 | HOYA E-FD8: 1.68893 / 31.16 | +0.00003 | +0.06 |
| L6 | `Unmatched (historical glass)` → `S-TIL2 (OHARA coordinate equivalent; supplier unconfirmed)` | 1.5407 / 47.2 | OHARA S-TIL2: 1.54072 / 47.227127 | +0.00002 | +0.027127 |
| L7 | `Unmatched (historical glass)` → `LAC13 (HOYA coordinate equivalent; supplier unconfirmed)` | 1.6935 / 53.4 | HOYA LAC13: 1.6935 / 53.34 | 0 | −0.06 |

All seven rows agree with the printed index precision and have |Δν_d| ≤ 0.1. No elements remain unmatched, so there are no rejected nearest rows to list. These are catalog coordinate equivalents for dispersion, not identified historical melts or suppliers. The printed n_d/ν_d remain authoritative at d; exact production dispersion remains unknown.

No additional metadata changes accompany this glass classification. The element descriptions and glass map now name the adopted equivalents and retain the production-material uncertainty. The earlier normal-line photopic calculations remain explicitly historical; they are not recalculated catalog-spectrum results.

Element `focalLengthMm` values were added in this pass: thick-lens focal lengths in air computed from each element's printed radii, thickness and nd (the same standalone values the analysis quotes), so the element inspector shows them.
