# Audit Log — Nikon AF-S NIKKOR 14-24mm f/2.8G ED

Patent: US 7,359,125 B2, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3 | `glass` | `S-BAH11 (OHARA)` | `LAC12 (HOYA)` | Patent Table 1 lists nd=1.67790, vd=55.34; LAC12 matches. |
| L3 / S5 | `glass` | `S-LAH53 (OHARA)` | `741527 — lanthanum crown` | Patent Table 1 lists nd=1.74100, vd=52.67; no unique public match found. |
| L4 / S6 | `glass` | `S-TIM25 (OHARA)` | `554381 — dense flint` | Patent Table 1 lists nd=1.55389, vd=38.09; no unique public match found. |
| L8 / S13 | `glass` | `S-BSM81 (OHARA)` | `624470 — barium flint` | Patent Table 1 lists nd=1.62374, vd=47.04; no unique public match found. |
| L11 / S20 | `glass` | `S-BAL42 (OHARA)` | `S-BAL2 (OHARA)` | Patent Table 1 lists nd=1.57099, vd=50.80; S-BAL2 matches. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/US7359125.pdf`, Table 1 text extraction. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated the companion analysis notes and glass table for the relabeled rows.

## 2026-09-23 — First-added diagram audit, lens 65

Source: local `patents/US7359125.pdf` (US 7,359,125 B2, 300 dpi CCITT scan). Front page p. 1; Fig. 1 p. 2
(sheet 1/6, wide and tele panels, axis vertical, object at the bottom); Figs. 2A–2C p. 3 (FNO and ω per station);
Example 1 text and Table 1 pp. 11–12.

### Retained after re-reading the source

- All 27 rows of `r`, `d`, `n`, `ν`, the stop position (surface 15), the three aspheres (κ → K = κ − 1, every
  C4–C14 including C12 = −0.60945E−17 and C14 = −0.74037E−19) and the infinity D11/D14/Bf rows match Table 1.
  Paraxial EFL 14.400 / 18.000 / 23.800 mm against 14.4 / 18.0 / 23.8; infinity defocus ≤ 0.005 mm. Stored
  element focal lengths agree with thick-lens values to the stored precision.
- Patent number, both inventors, assignee, 2008 grant year and the Example 1 subtitle confirmed on the front page.
- `closeFocusM` 0.3: the close rows are at object-to-image R = 300 at all three stations (D0 125.00 / 134.71 /
  140.46 plus TL 175.00 / 165.29 / 159.54); the stored close gaps focus paraxially at 300.1 / 300.0 / 299.9 mm.
- Group motion: G1 moves 15.46 mm toward the image and G2 15.27 mm toward the object from wide to tele, matching the
  Fig. 1 trajectories. A TL(f) = a + b·f + c/f fit through the three stations has its minimum at f ≈ 26.3 mm, so G1
  does not reverse within the range. L1 focuses toward the image (Fig. 1 "FOCUSING" arrow); D11 + D14 is conserved.
- G2 rims (12–27A) and S6–S11 retained: Fig. 1 reads L1 doublet 12.4–12.7, E9 12.4, E10 12.35, E11 13.0, J3 13.2,
  J4 13.2 mm, E5 20.1, E6 19.8, S6/S7A ≈ 20.4 mm (left/right averages, 0.0601 mm/px at 600 dpi), all within about
  15 % of the stored values. The Fig. 1 stop ticks start at 12.8 mm, at the neighbouring lens rims; a drawing
  symbol, not an iris.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| S1 `sd` | 35.5 | 41.0 | Fig. 1 front-surface end 695 px × 0.0601 mm/px = 41.8 mm (sag-consistent value 40.8 mm); scale from the 175.00 mm S1-to-image distance (1455.5 px at 300 dpi). Exact wide chief ray (ω = 57.36°, Y = 21.6 mm) crosses S1 at 37.52 mm; the old rim blocked it. |
| S3 `sd` | 24.0 | 29.5 | Fig. 1 rim 29.75 mm (sag-consistent 29.4). Chief ray 26.99 mm. |
| S4A `sd` | 19.5 | 25.2 | Fig. 1 curve end 25.8 mm, drawn sag 15.3 mm = formula sag at 25.2 mm. Chief ray 22.88 mm. Slope peaks at 45.0° near 23.8 mm and stays positive (no turnover to 28 mm). |
| S5 `sd` | 21.0 | 25.0 | Fig. 1 E3 front rim 25.2 mm (cemented rear stops at ≈ 20.4 mm behind a flat step, so S6/S7A are kept). Chief ray 20.80 mm left 0.2 mm margin. |
| S2 `sd` | 29.0 | 29.0 (kept) | Fig. 1 curve end 30.9 mm, but R = 32.27 mm and the renderer's rim-slope cap is 0.9·R = 29.04 mm. Chief ray 28.62 mm clears. |
| STO `sd` | 11.0 | 11.2 | Records the largest inferred iris (tele 11.151 mm). |
| `zoomApertureModel` | absent | `"from-nominal-fno"` | FNO 2.88 at W, M and T (Figs. 2A–2C) with the stop riding in G2; without it the engine held the wide-end 9.165 mm iris at every station (about f/3.3 at tele). Inferred radii 9.165 / 9.890 / 11.151 mm. |
| `fstopSeries`, `maxFstop` | starts 2.8; max 16 (default) | starts 2.88; max 22 | f/2.8 is not reachable at the source f/2.88; production minimum aperture is f/22. |
| `focusPositions`, `var` | two focus states | five keyframes `[0, 0.2789, 0.3539, 0.4215, 1]` | Table 1 β = −0.025 rows (object-to-image 711.77 / 847.81 / 1075.73 mm) preserved exactly at each station's own coordinate; the other intermediates interpolated on x = a·u/(1 − b·u). |
| `elementCount`, `specs` | 15 | 14 (+ resin layer in specs) | E4 (0.3 mm, 1.55389 / 38.09, carries asphere 7) is the resin shell of a hybrid asphere (inferred; the patent lists only n and ν); 14/11 is Nikon's published count. |
| E4 `label`/`type`/`glass`/`role` | "Element 4", dense flint `554381` code | "Element 3 resin layer", resin annotation | As above; not a catalog glass. |
| L1 `glass` | `S-LAH65 (OHARA)` (νd 46.57) | `S-LAH65V (OHARA catalog equivalent)` | Row 1: 1.804000 / 46.58; catalog 1.80400 / 46.58. |
| L2 `glass` | `LAC12 (HOYA)` (νd 55.52) | `S-LAL12 (OHARA catalog equivalent)` | Row 3: 1.677900 / 55.34; catalog 1.67790 / 55.34. |
| L3 `glass` | `741527 — lanthanum crown` code | `LAK011 (HIKARI catalog equivalent)` | Row 5: 1.741000 / 52.67; catalog 1.74100 / 52.67. |
| L5, L13 `glass`, `dPgF`, `apdNote` | `ED glass (FPL family, OHARA)`, dPgF 0.038 (unsourced), note "S-FPL52" | `J-FKH1 (HIKARI catalog equivalent)`, no dPgF | Rows 8, 23: 1.497820 / 82.52; catalog 1.49782 / 82.57. The patent gives no θgF; S-FPL52 is a different glass. `apd: "inferred"` kept. |
| L8 `glass` | `624470 — barium flint` code | `E-BAF8 (HIKARI catalog equivalent)` | Row 13: 1.623740 / 47.04; catalog 1.62374 / 47.04. |
| L9 `glass` | `S-BSL7 (OHARA)` (nd 1.51633, Δnd 4.7e-4) | `J-BK7A (HIKARI catalog equivalent)` | Row 16: 1.516800 / 64.10; catalog 1.51680 / 64.13. |
| L12 `glass` | `S-LAH66 (OHARA)` (nd 1.77250, Δnd 2.9e-4) | `Unmatched (…)` | Row 22: 1.772789 / 49.45; no catalog glass at this index. |
| Header, `focusDescription`, roles | box header; "No reversing groups" only; "(PGM)" | rewritten header with zoom motion, focus keyframes, aperture and SD notes | Findings above. |
| Analysis | several contradictions | synced | §1 count and close-focus claims, §2/§7 group motion ("both groups move toward the object" was wrong), §3/§5 glass names (S-LAH66 → S-LAH63 for E6, S-LAH58 → S-LAH53 for E14, others above), §4 7A description, §6 nine-row focus table, §7 2ω(M) = 100.6° and inferred iris, §10 SD method. |

### Checks on the result

- Exact real-ray trace (robust bracketing intersection; the shared `clearap` Newton solver fails to converge
  inside the 0.3 mm resin layer at the wide end and reports ω ≈ 46.5° instead) reaches Y = 21.600 mm at
  ω = 57.36° (W), 50.29° (M) and 41.92° (T), matching the patent's printed half-fields. Chief heights at W:
  S1 37.52, S2 28.62, S3 26.99, S4A 22.88, S5 20.80, S6 17.28, S7A 17.13 mm — all inside the new rims. No axial
  clipping at any station (tele axial beam 11.19 mm at S12 against 13.8).
- β = −0.025 keyframes focus paraxially at 713.4 / 846.7 / 1072.8 mm object-to-image (source 711.8 / 847.8 /
  1075.7); close rows at 300 mm.
- Validator passes; image-circle floor reports nothing; engine iris radii 9.165 / 9.890 / 11.151 mm.
- Engine wide-end half-field 43.5° → 45.7°, now limited by S2 (paraxial estimate); tele is capped at the format
  diagonal.
- Asphere 7A at its unchanged 20.0 mm rim: +2,534 µm from the base sphere, 57.7° slope (quoted in analysis §4).
- Live: production baseline (small front group) compared with local wide infinity, tele closest focus
  (G1/G2 gap closed, 30 cm label), 18 mm at the β keyframe (85 cm label), off-axis toggle and the f/2.88–f/22
  slider. The local silhouette now shows the large stepped front meniscus of Fig. 1.

### Open limitations

- The viewer's paraxial field estimate stops at about 45.7° at the wide end (S2 rim capped by the renderer's
  0.9·R rule); the patent's 57.36° wide field is not drawn. Rectilinear `projection` overrides are single-valued
  and unsuitable for a zoom.
- Iris radii are inferred from the nominal f-number, not published. E4's resin identity is inferred.
- S6–S11 and G2 rims remain estimates within about 15 % of Fig. 1.
