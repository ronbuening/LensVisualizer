# Audit Log — Nikon NIKKOR Z 14-24mm f/2.8 S

Patent: WO 2021/117563 A1, Example 4 (Table 4)
Catalog version: ab3a508

---

## 2026-05-11 — Patent audit and glass-label cleanup

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / S3 | `glass` | `S-LAM51 (OHARA)` | `S-LAM60 (OHARA)` | Patent Table 4 row 3 gives nd=1.743104, νd=49.4. S-LAM60 catalog nd=1.743198, νd=49.34; S-LAM51 resolves to nd≈1.700. |
| L14 / S7 | `glass` | `S-TIH14 (OHARA)` | `738323 — dense flint (patent nd=1.73800, νd=32.3)` | Patent Table 4 row 7 gives nd=1.737999, νd=32.3. S-TIH14 resolves to nd≈1.76182, outside tolerance; no current catalog entry round-trips the patent pair. |
| L21 / S9 | `glass` | `S-NPH2 (OHARA) — ultra-high-index dense flint` | `TAFD40 (HOYA) — ultra-high-index dense flint` | Patent Table 4 row 9 gives nd=2.000600, νd=25.4. TAFD40 catalog nd=2.00069, νd=25.46; S-NPH2 resolves to nd≈1.92286. |
| L22 / S10 | `glass` | `S-TIM27 (OHARA)` | `S-TIM22 (OHARA)` | Patent Table 4 row 10 gives nd=1.647690, νd=33.7. S-TIM22 catalog nd=1.64769, νd=33.79; S-TIM27 resolves to nd≈1.63980. |
| L31 / S12 | `glass` | `Dense flint (nd = 1.850, uncertain catalog match)` | `850270 — dense flint (patent nd=1.85000, νd=27.0)` | Patent Table 4 row 12 gives nd=1.850000, νd=27.0. Existing label was intentionally uncertain but had no future-upgrade code; no confident catalog match was retained. |
| L32 / S13 | `glass` | `Near S-FPM3 (OHARA) — fluorophosphate crown` | `S-FPM2 (OHARA) — fluorophosphate crown` | Patent Table 4 row 13 gives nd=1.593490, νd=67.0. Current S-FPM3 resolves to nd≈1.53775; S-FPM2 is the closest OHARA fluorophosphate candidate in tolerance. |
| L33 / S16 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent Table 4 row 16 gives nd=1.953750, νd=32.3. S-LAH98 catalog nd=1.95375, νd=32.32; S-LAH79 resolves to nd≈2.00330. |
| L40 / S27A | `glass` | `Probable S-LAH97 (OHARA)` | `S-LAH89 (OHARA)` | Patent Table 4 row 27 gives nd=1.851080, νd=40.1. S-LAH89 is the nearest current LAH catalog match; S-LAH97 resolves to nd≈1.755. |

Confirmed without data-file changes:

| Element / surface | Glass annotation | Patent value | Status |
|---|---|---|---|
| L11 / S1 | `S-BAL35 / L-BAL35 (OHARA)` | nd=1.588870, νd=61.1 | Retained; close catalog match and no mismatch report entry. |
| L13 / S5, L35 / S19, L37 / S22, L38 / S24 | `S-FPL51 (OHARA) — ED fluorophosphate` | nd=1.497820, νd=82.6 | Retained; data file was already corrected to S-FPL51-class. Analysis prose still said S-FPL52 and was fixed in Phase 4. |
| L34 / S17 | `S-TIH53 (OHARA)` | nd=1.846660, νd=23.7 | Retained; catalog nd round-trips. |
| L36 / S21, L39 / S25 | `S-LAH55 (OHARA)` | nd=1.834810, νd=42.7 | Retained; catalog nd round-trips. |

### Phase 2 — Retained-information audit

- Patent Table 4 lens rows 1-28 (WO publication pages 39-40 in the supplied PDF) confirm all retained surface `R`, wide-end/infinity `d`, `nd`, and `vd` values in the data file. Surface 15 is the aperture stop, and surface 28 carries Bf.
- Variable spacings D8, D11, and Bf match the patent's infinity and close-focus tables on pages 40-41. The data file stores the infinity/close pairs and uses the wide/infinity values for surface `d`.
- Aspherical coefficients for surfaces 1, 2, 4, and 27 match the patent asphere table on page 40. The existing κ-to-K conversion remains correct: κ=1 -> K=0, κ=0 -> K=-1.
- Group focal lengths from the patent group table are G1=-21.401, G2=105.275, G3=39.261. Existing rounded group labels remain correct.
- The patent does not publish semi-diameters. Existing `sd` values remain documented rendering estimates from the file header and analysis methodology.

### Phase 3 — Spectral / metadata enrichment

- Example 4 publishes only nd and νd for the prescription; it does not provide nC, nF, ng, PgF, or dPgF line-index data. No patent-sourced spectral fields were added.
- Existing top-level metadata was already present and confirmed: `subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, `lensMounts`, `imageFormat`, and `focusDescription`.
- No lens-mount, format, zoom-position, or focus metadata changes were needed.

### Phase 4 — Analysis sync

- Updated `NikonZ1424f28S.analysis.md` element narratives and glass budget for L12, L14, L21, L22, L31, L32, L33, and L40.
- Replaced stale S-FPL52 wording with S-FPL51-class wording for L13, L35, L37, and L38.
- Softened the L13 anomalous-dispersion claim: the patent table supports ED-class glass there by nd/νd and the production four-ED-element spec, while the patent's rear-group "specific lens" condition is what explicitly covers the rear ED elements.

### Report status

- Temporary generated `catalog-mismatches.generated.md` and `glass-relabel-candidates.generated.md` no longer list `NikonZ1424f28S`.
- Temporary `unresolved-glass.generated.md` lists the intended patent-code fallbacks `738323` and `850270`.

### Outstanding follow-ups

- Consider adding catalog entries only if public Sellmeier sources are found for patent codes 738323 and 850270. Until then those labels intentionally fall back to Abbe approximation using the patent's stored nd/νd.

## 2026-05-19 — Six-digit glass-code backfill review

Reopened `patents/WO2021117563A1.pdf`, Example 4 / Table 4. The reviewed row is L31 / surface 12, nd=1.850000, νd=27.0, code `850270`.

Catalog-search disposition:

- Public Nikon/Hikari catalog data now provides Hikari J-LASFH23, d-code `850270`, nd=1.850000, νd=27.03, with formula-3 power-series coefficients.
- The Hikari row is a defensible coefficient-backed match for the patent row, allowing this element to leave the missing-Sellmeier queue.

Changes made:

- Added Hikari J-LASFH23 to `glassCatalogData.ts`.
- Relabeled L31 in `NikonZ1424f28S.data.ts` to `J-LASFH23 (Hikari) — dense flint (850270)`.
- Updated `NikonZ1424f28S.analysis.md` to replace the old unresolved 850270 narrative.

## 2026-09-21 — First-added diagram audit, lens 41

Source: local `patents/WO2021117563A1.pdf` (image-only scan). Example 4 text pp. 39–40, Table 4 pp. 41–43,
Fig. 10 p. 82 (sheet 10/23, native 72 dpi raster, axis vertical, object at the bottom).

### Retained after re-reading the source

- All 28 rows of `R`, `d`, `nd`, `νd`, the four aspheres (κ → K = κ − 1) and the four-station infinity and closest
  D8/D11/Bf rows match Table 4. Paraxial EFL 14.422/18.003/19.997/23.283 mm against 14.42/18.00/20.00/23.29.
  Stored element focal lengths agree with thick-lens values to the stored precision.
- Source conflict: the general-data block prints TL(T) = 132.362, but the tabulated tele gaps sum to 129.65 mm and
  reproduce f = 23.29. Tabulated gaps retained; the conflict is stated in the data header and analysis §7.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| 1A `sd` | 18.03 | 32.8 | Fig. 10 rim 418 px × 0.0784 mm/px (scale from the 1476 px / 115.72 mm glass span). Exact chief ray for Y = 21.6 mm needs 30.54 mm; the old rim blocked it. |
| 2A `sd` | 14.43 | 21.4 | Fig. 10 curve end (flat annulus starts 273.5 px from the axis). Chief ray 19.95 mm. |
| 3 `sd` | 16.5 | 20.6 | Fig. 10 rim 262.5 px. Chief ray 18.26 mm. |
| 4A `sd` | 14.5 | 15.6 | Fig. 10 curve end 15.25 mm; chief-ray floor 15.23 mm, so 0.35 mm margin added. Slope 48.7° at the rim, no turnover. |
| 5, 6, 7, 8 `sd` | 14.0 / 13.5 / 15.0 / 14.5 | 16.9 | Fig. 10 L13/L14 rim 216 px. Chief ray 14.1–14.7 mm; 5 and 6 were below it. |
| 9, 10, 11 `sd` | 14.0 / 13.5 / 13.0 | 11.9 / 11.6 / 11.3 | Fig. 10 L21 151 px, L22 144 px. Axial f/2.91 beam needs 10.47 mm at tele. |
| STO `sd` | 10.0 | 10.6 | Authored value now records the largest inferred iris (tele); the engine derives station radii. |
| `zoomApertureModel` | absent | `"from-nominal-fno"` | Source FNO 2.91 at W and T with the stop riding in G3; fixed 10.0 mm iris gave paraxial f/2.25 at wide. Inferred radii 7.971 / 9.000 / 9.584 / 10.580 mm. |
| `fstopSeries`, `maxFstop` | starts 2.8; max 16 | starts 2.91; max 22 | f/2.8 is not reachable at the source f/2.91; production minimum aperture is f/22. |
| `focusPositions`, `var` | two focus states | six keyframes `[0, 0.2692, 0.3082, 0.3368, 0.404, 1]` | Table 4 β = 0.025 rows preserved exactly at each station's own conjugate; other intermediates interpolated on x = a·u/(1 − b·u). |
| L13 `apd` | `"inferred"` | `"patent"` | ¶[0108]: L13 is made of anomalous-dispersion glass. Supersedes the 2026-05-11 softening. |
| Header | "4 variable gaps" | "3 variable gaps" | D8, D11, Bf. |
| L13, L35, L37, L38 `glass` | `S-FPL51 (OHARA)` (catalog 1.49700 / 81.55) | `J-FKH1 (HIKARI catalog equivalent…)` | Table 4 rows 5, 19, 22, 24: 1.497820 / 82.6; catalog J-FKH1 1.49782 / 82.57. |
| L32 `glass` | `S-FPM2 (OHARA)` (Δnd 1.7e-3) | `J-PSKH4 (HIKARI catalog equivalent…)` | Row 13: 1.593490 / 67.0; catalog 1.59349 / 67.00. |
| L40 `glass` | `S-LAH89 (OHARA)` (Δnd 4.2e-4, Δνd 0.68) | `Q-LASFH58S (HIKARI catalog equivalent…)` | Row 27: 1.851080 / 40.1; catalog 1.85108 / 40.12. |

G3 rims (12–28) are retained: Fig. 10 reads L31 11.8, L32 11.5, L33/L34 11.6, L35 11.8, L36 10.9, L37 10.0,
L38 9.8, L39 10.9, L40 11.8 mm, all within about 15 % of the stored values, and none clips the axial beam.
The stop tick marks in Fig. 10 (22 mm) are a drawing symbol, not an iris radius.

### Checks on the result

- Engine wide-end half-field 37.6° → 48.8°. Exact chief ray at 57.45° (Y = 21.6 mm; source ω = 57.6°) now passes
  every rim at all four stations; corner-bundle clipping by G1 is roughly 45–50 % per side.
- With the image plane held at each station's infinity best-focus offset, the paraxial conjugates of the published
  rows are 552.8/141.9 mm (wide; source 553/141) and 908.7/149.8 mm (tele; source 909/150); interpolated keyframes
  land within 2 mm of their intended object-to-image distances.
- Asphere rim values for the analysis: 1A +2,032 µm at 29.52 mm and +2,877 µm at 32.8 mm; 4A +814 µm at 14.04 mm
  and +1,369 µm at 15.6 mm; 2A rim 21.4 mm exceeds the 16.04 mm vertex radius (sag 15.18 mm, slope 54.7°);
  27A −449 µm at 10.8 mm (unchanged rim).
- Live: production baseline (small front group) compared with local wide infinity, tele closest focus, off-axis
  bundle and the f/2.91–f/22 slider.

### Open limitations

- The viewer's half-field is a paraxial estimate and stops at about 49° at the wide end because it overstates
  chief-ray heights on 2A/4A; rectilinear `projection` overrides are single-valued and unsuitable for a zoom.
- Iris radii are inferred from the nominal f-number, not published. Sub-aperture stop Sa is not modeled.
- G3 rims remain estimates; no published clear apertures exist.

## 2026-10-27 — Rim-cut figure review

Fig. 10 (PDF p. 82, sheet 10/23; native 2478 × 3507 raster, axis vertical on columns 1145–1146, object at the bottom)
was read element by element on the label-free half for flat lands square to the axis at the rims of concave faces,
the shape `rimCutDepthMm` draws. Scale 0.0784 mm/px, as in the 2026-09-21 audit.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 2A (L11 rear, R 16.04, asph) | 0.655 (273 / 417 px) | 15.18 mm | 21.40 mm | 21.4 → 32.8 | 3.97 mm |
| 4A (L12 rear, R 27.44, asph) | 0.82 (214 / 262 px) | 6.24 mm | 15.60 mm | 15.6 → 20.6 | 5.82 mm |

- Both rear faces stopped at their cap ends (sd 21.4 and 15.6, flat annuli excluded), so the diagram drew a slanted
  chamfer to the front rim. Fig. 10 draws each element's edge parallel to the axis at the front face's height
  (417 px = 32.7 mm, 262 px = 20.5 mm) and a land joining it to the cap. This review gave each rear face its front
  partner's sd, with the cut at the old sd (cut radii 21.403 and 15.604 mm, 0.003 and 0.004 mm outside the old rims).
  Neither cut remains: the rule section below returns both faces to their old 21.4 and 15.6 mm rims, uncut.
- 4A: Fig. 10 runs the cap out to 214 px (about 16.8 mm), where L12's land meets L13's front rim. The 15.25 mm read on
  2026-09-21 is the inner end of the land stroke, where L13's front face 5 joins it. This review put the cut at the
  stored 15.6 mm, which the rule section below drops. A figure-matched cut (radius 16.83 mm, depth 7.80 mm, 0.26 mm
  ahead of L13's front rim) would open 4A's traced rim by 1.2 mm (side vignetting there 86 % → 40 %) and is left for
  a separate decision.
- 27A (L40 front, R −68.43, asph) also carries a land: cap end ÷ edge 0.90 on both halves (136 / 151 px), so cut
  radius 10.81 mm at depth 1.31 mm, which matches the land's 17 px offset from the vertex. Not cut: at the wide-end
  full field (Y = 21.6 mm) it adds 21 points of side vignetting at that surface (0 % → 21 %) and removes 17.5 % of the
  meridional fan that passes every other rim at 14.42 mm (6.5 / 3.8 / 0.5 % at the other three stations).
- No land on the other concave faces (5, 6, 11, 14, 16, 23, 26): each cap meets its element edge within the figure's
  3 px line width. The steps at 10, 13, 22 and 25 are the larger element's annulus beside a cemented junction
  (L21, L31, L36, L39), not lands.
- No cap reaches the stop plane at any zoom or focus state (surface 14 clears it by 1.81 mm, surface 16 by 1.88 mm).
- All four stations still trace the stated f/2.91, with no rim, trace, iris or failed rows before or after, and
  `audit:surface` reports no validation errors. The vignetting and distortion tabs (field 57.5°) are unchanged.
- The viewer's vignetting-limited half-field bounds each face by its clear radius, now the uncut 21.4 and 15.6 mm
  rims on 2A and 4A; it is 48.8 / 49.9 / 50.5 / 51.3° at the four stations, and the 49° wide-end limit listed on
  2026-09-21 stands.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stops of #933 (EPD = F/N) with the rule's current search,
which follows beams that vanish between screened fields, seeds from the stop and refines near cuts on the full
measurement. The lens now carries no cut; both faces from the figure review above keep their old rims:

- Surface 2A: the review raised sd to L11's 32.8 mm edge and cut at the old 21.4 mm rim. Raising sd extended the
  asphere past its designed 21.4 mm extent, so sd returns to 21.4 mm with no cut. The land Fig. 10 draws outside it
  is not modelled.
- Surface 4A: the cut sat at the old 15.6 mm rim (cut radius 15.6042 mm). With the review's 20.6 mm sd and cut put
  back, the beams reach 16.5864 mm there (wide, focus keyframe 0.404, 57.46°), so the land stopped the rays that rim
  stops. The sd returns to 15.6 mm with no cut.

Both faces draw as they did before the figure review. With no cut left, no land is checked against the 0.1 mm minimum.
The surface audit and the beam rule pass.

## 2026-10-29 — Rim extensions from the original figure

Reopened `patents/WO2021117563A1.pdf`, Example 4, Figure 10 (PDF p. 82), and inspected every element on a 600 dpi crop. The 1476 native-pixel first-to-last-vertex span / 115.72 mm gives 12.76 native px/mm. The long square lands on L11 and L12 are directly resolved on both halves; the short L40 front land is also visible. Cemented shoulders remain junction geometry.

| Surface | Optical cap `sd` (retained) | New drawn `rimExtensionSd` | Evidence |
| --- | --- | --- | --- |
| 2A | 21.4 mm | 32.8 mm | L11 rear cap ends below the front-face edge, followed by a long square land. |
| 4A | 15.6 mm | 20.6 mm | L12 rear cap ends below the front-face edge; land returns to that edge. |
| 27A | 12.0 mm | 12.5 mm | L40 front carries a short land to its rear-face edge. |

The source's smaller L40 cap end (about 10.8 mm) and L12's approximately 16.8 mm reading do not replace the validated optical rims. Extensions retain the existing cap endpoints and add only opaque material, so the 2026-10-27 beam-rule exclusions remain in force; no asphere continues beyond its old `sd`. No additional concave cut is justified by the other faces. The public analysis now describes the drawn lands.

`audit:surface` passes; `audit:image-circle` reports 0 undersized and 0 skipped. No optical `sd`, curvature, gap, asphere coefficient, stop or glass changed.

## 2026-10-29 — Glass-only reinspection

Freshly rendered and inspected `patents/WO2021117563A1.pdf`, Example 4: Table 4 on PDF pp. 41–43 and the element-specific prose on pp. 39–40 (¶0108–¶0111). Every stored nd/νd pair for all 16 lens elements matches the d-line table, including L11 1.588870/61.1, L12 1.743104/49.4, the repeated 1.497820/82.6 group and the rounded 32.3/23.7/42.7 Abbe values.

All catalog counterparts were checked and retained: L11 S-BAL35; L12 S-LAM60; L13/L35/L37/L38 J-FKH1; L14 J-KZFH9; L21 TAFD40; L22 S-TIM22; L31 J-LASFH23; L32 J-PSKH4; L33 S-LAH98; L34 S-TIH53; L36/L39 S-LAH55; L40 Q-LASFH58S. All 16 have compatible coefficient-backed curves. The new data-file qualification makes the supplier-neutral proxy status explicit; no production glass identity is inferred.

The four `apd: "patent"` classifications are supported: ¶0108 identifies L13's anomalous-dispersion glass, and ¶0110 does so for L35/L37/L38. No numerical partial dispersion or C/F/g line-index table is supplied for them, so no such values were invented. The other APD flags remain false. `assertCatalogConsistent()` and the scoped resolver review pass; the three shared glass suites pass (94 tests). No optical or geometry values changed.
