# Audit Log — Nikon AI Nikkor 135mm f/2.8

Patent: US 4,057,330, Example 2

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `S-BSM18 (OHARA)` | `S-BSM16 (OHARA)` | Patent Example 2 row L1 lists nd=1.62041 and vd=60.3; S-BSM16 is the sourced Ohara match. |
| L2 / 3 | `glass` | `S-BSM18 (OHARA)` | `S-BSM16 (OHARA)` | Patent Example 2 row L2 repeats nd=1.62041 and vd=60.3; reused S-BSM16 consistently with L1. |
| L3 / 5 | `glass` | `S-TIH14 (OHARA)` | `S-TIH23 (OHARA)` | Patent Example 2 row L3 lists nd=1.78470 and vd=26.1; S-TIH23 round-trips the pair in the Ohara catalog source. |
| L4 / 6 | `glass` | `S-TIH4 (OHARA)` | `S-TIH13 (OHARA)` | Patent Example 2 row L4 lists nd=1.74000 and vd=28.2; S-TIH13 is the sourced Ohara match. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 2 rows against the patent table; stored `nd`, `vd`, and element mapping already matched.
- No curvature, spacing, scale factor, stop-placement, mount, or format edits made.

### Phase 3 — Spectral / metadata enrichment

- Reviewed existing catalog entries before relabeling. S-BSM16, S-TIH23, and S-TIH13 already include manufacturer/refractiveindex.info-backed source data.
- No generic code fallback or new catalog addition was required.

### Phase 4 — Analysis sync

- Updated L1/L2/L3/L4 prose, glass summary, and glass-selection discussion.

## 2026-09-21 — First-added diagram audit, lens 47

Source: local `patents/US4057330.pdf` (6 pages, 300 dpi bitonal scan). Front page and Fig. 1 on pp. 1–2, aberration
plots Figs. 2–4 on pp. 2–3, text and Examples 1–3 on p. 5, claims (Claim 3 repeats the Example 2 table) on p. 6.

### Retained after re-reading the source

- Front page: US 4,057,330, granted Nov. 8, 1977, assignee Nippon Kogaku K.K., sole inventor printed "Sei Matui".
  `patentAuthors` keeps the corpus-canonical "Sei Matsui" (same person as US 4,062,630, 4,099,850, 4,303,314,
  4,338,001); the printed spelling is recorded in the data header, the analysis and the unchanged `subtitle`.
  The patent prints no kind code, so `patentNumber` stays `US 4,057,330`.
- Example 2 (f = 100, 1:2.8, angle of view 18.1°): all nine radii with signs, all eight spacings and the five
  nd/νd pairs match the table on p. 5 and the Claim 3 table. Σd = 49.481 and (d1…d6) = 22.147 reproduce.
- Scale: every stored R and d equals the Example 2 value × 1.35 rounded to 0.001 mm (largest rounding residue
  0.0005 mm); one uniform factor. The patent lists no clear apertures, so `sd` is not a scaled patent quantity.
  Paraxial EFL 135.002 mm, back focus 59.512 mm (100.006 / 44.087 at patent scale); stored last gap 59.51 mm.
  × 1.35 returns round thicknesses (7.3 / 0.6 / 13.0 / 2.8 / 4.7 / 1.5 / 34.7 / 2.2 mm) in all three examples.
- Stored element focal lengths (104.3 / 105.7 / 74.1 / −26.7 / 172.0 mm) equal the thick-lens values; doublet
  −42.86 mm. Element types, cemented group, group and doublet ranges, mount, format, f/2.8–f/32 series retained.
- L1/L2 `S-BSM16 (OHARA)` retained: catalog 1.62041 / 60.29 against the patent 1.62041 / 60.3.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| STO position | in d4: `4` d = 2.0, STO d = 0.8; header and analysis said "estimated from Fig. 1" | in d7: `4` d = 2.8, `7` d = 13.5, STO d = 21.2 | The patent neither tabulates, describes nor draws a stop (Fig. 1 shows five elements only). Real-ray S/T foci against Figs. 2(b)/3(b)/4(b) at 6.3° and 9.05°: d4 stop misses by 0.075 / 0.078 / 0.075 mm RMS (Ex. 1–3); a stop 10 / 8 / 11–12 units behind r7 fits to 0.010 / 0.015 / 0.012 mm. 10 units × 1.35 = 13.5 mm adopted, about ±3 mm. Distortion +0.62…+0.67 % for every trial position (plot ≈ +0.6 %), so it does not discriminate. Inferred, not a patent value. |
| STO `sd` | 17.4 | 13.5 | Traced f/2.8 marginal-ray height at the new plane is 13.52 mm. At the old plane the engine-derived iris was 18.63 mm, larger than the neighbouring rims and 0.11 mm inside L2's rear surface at that height. |
| 1 `sd` | 24.0 | 24.8 | Clipped the f/2.8 axial beam (needs 24.11). Fig. 1 rim 239 px × 0.1071 mm/px = 25.6 mm; drawn sag corresponds to 23.8 mm; mid-bracket value used, inside the 52 mm filter thread. |
| 2 `sd` | 22.0 | 24.8 | Clipped the axial beam (needs 23.65). Fig. 1 draws one common L1 rim. |
| 4 `sd` | 18.0 | 19.2 | Clipped the axial beam (needs 18.57). Fig. 1: r4 ends at 19.7 mm below the L2 bevel; × 0.97 for the figure's height bias. |
| 5, 6 `sd` | 17.0 / 16.5 | 19.2 / 19.2 | Clipped the axial beam (needs 17.81 / 17.15). Fig. 1 doublet rim 185 px = 19.8 mm on both sides of the axis; × 0.97. |
| 8, 9 `sd` | 18.0 / 17.5 | 14.5 / 14.5 | Fig. 1 L5 rim 134–137 px on both sides = 14.5 mm; stored values were 21–24 % larger. Chief ray for Y = 21.6 mm needs 6.31 / 6.58 mm, axial beam 10.98 / 10.77 mm (11.74 / 11.57 mm at closest focus). |
| `var["9"]` close value | 75.16 | 77.54 | 75.16 mm focuses a subject-to-film distance of 1451.6 mm (the old derivation used 1300 mm as the object distance from the lens). 77.54 mm gives 1300.25 mm, extension 18.03 mm, magnification −0.1336. Calculated; the patent has no finite-distance data. |
| `projection` | absent | rectilinear, `fullFieldDeg` 18.1, `maxTraceFieldDeg` 9.05 | Patent angle of view 18.1°. The engine's vignetting-based estimate was 14.3° before and 16.8° after the stop move; the exact chief ray to Y = 21.6 mm leaves at 9.03°. |
| L3 `glass`, `apd`, `dPgF` | `S-TIH23 (OHARA)`, `"inferred"`, 0.014 | `SF56A (Schott catalog-equivalent, 785261; …)`, `false`, removed | Patent 1.78470 / 26.1. Catalog SF56A 1.78470 / 26.08; S-TIH23 is 26.29. The patent's Condition II uses nd and νd only; ΔPgF ≈ +0.010 is ordinary for a dense flint. |
| L4 `glass`, `apd`, `dPgF` | `S-TIH13 (OHARA)`, `"inferred"`, 0.013 | `FD3 (HOYA catalog-equivalent, 740282; …)`, `false`, removed | Patent 1.74000 / 28.2. Catalog FD3 1.74000 / 28.25; S-TIH13 is 1.74077 / 27.79 (Δnd 7.7e-4), so the 2026-05-19 relabel did not match the patent index. |
| L5 `glass` | `SF10 (Schott) / S-TIH11 (OHARA)` | `E-FD10 (HOYA catalog-equivalent, 728283; SF10 type, …)` | Patent 1.72825 / 28.3. Catalog E-FD10 1.72825 / 28.32. S-TIH11 is the SF11 equivalent (1.78472 / 25.68), not an SF10 equivalent. |
| Header | six comment lines | scaling / stop / semi-diameter / focusing notes | Records what is patent value, derived, inferred or estimated. |

Surfaces 3 (22.0 mm) and 7 (16.5 mm) are retained: Fig. 1 gives 24.3 mm (22.0 mm from the drawn sag) and
14.5 mm, both within 15 % of the stored values, and the axial beam needs 21.95 and 14.58 mm.

Figure scale: vertex crossings r1 = 811.5 px and r9 = 1435.5 px on p. 2 at 300 dpi give 624 px for Σd = 49.481, i.e.
12.61 px per patent mm. Intermediate vertices fall within 6 px of the Example 2 positions; the drawn d7 / Σd is 0.505
against 0.519 (Ex. 2), 0.558 (Ex. 1) and 0.431 (Ex. 3).

### Analysis sync

- Inventor line and first paragraph: corpus spelling with the printed form noted; unverifiable kanji removed.
- Scale section: `sd` no longer described as scaled patent data; round-number support for × 1.35 added.
- L3 / L4 / L5 glass paragraphs, glass table and summary: new catalog equivalents; anomalous-dispersion narrative
  removed; "S-TIH11" corrected. Example 3's nd = 1.91761 flint no longer called a lanthanum glass.
- Aperture-stop section rewritten (not in the patent; inferred from the astigmatism plots; d7).
- Focusing section: extension 15.6 → 18.0 mm, close BFD 75.2 → 77.5 mm, magnification −0.134.
- Aberration notes re-read from Fig. 3: d-line SA about −0.13 mm zonal and −0.05 mm marginal (trace −0.08 /
  −0.03 mm), g-line about +0.17 mm at f/2.8; astigmatism within 0.1 mm; distortion about +0.6 % (trace +0.66 %).
  The earlier text called the d-line overcorrected by +0.2 mm.
- Semi-diameter section rewritten; the d2 "cross-gap" limit claim removed (the d2 gap opens outward).

### Checks on the result

- Surface validator reports no errors; image-circle floor reports 0 undersized. Exact trace at f/2.8, Y = 21.6 mm
  (ω = 9.03°): no axial clipping, no chief-ray blocking; stored/needed axial heights 24.8/24.11, 24.8/23.65,
  22.0/21.95, 19.2/18.57, 19.2/17.81, 19.2/17.15, 16.5/14.58, 14.5/10.98, 14.5/10.77 mm. Corner-bundle clipping
  35 % per side at L1, 28 % per side at L5. At closest focus the fixed iris needs less of surfaces 1–7.
- Engine: EFL 135.002, f/2.8, stop radius 13.52 mm, half-field 9.05°.
- Every glass label resolves to a catalog entry compatible with the stored pair (largest Δνd 0.05).
- Live: production baseline (stop between L2 and L3, large L5) compared with the local page at infinity, at 1.3 m
  and with the off-axis bundle on; the local silhouette follows Fig. 1 (L2 rear bevel, doublet bevel, small L5).

### Open limitations

- The stop position is inferred from scanned aberration plots (about ±3 mm); the iris radius is derived from f/2.8.
- All semi-diameters are estimates from a schematic figure that is self-consistent only to about ±7 %. Surface 3
  clears the f/2.8 axial beam by 0.05 mm.
- Which of the three examples was produced is not documented; Example 2 remains the file's stated assumption.
- Glass names are catalog equivalents; SF3 (Schott, 740282) and SF58 are not in the project catalog.
