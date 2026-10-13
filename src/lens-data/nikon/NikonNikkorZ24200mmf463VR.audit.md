# Audit Log — Nikon NIKKOR Z 24-200mm f/4-6.3 VR

Patent: JPWO2020/157904 A1, Example 1 (Table 1)
Catalog version: local working tree, 2026-05-02

## 2026-05-02 — Patent audit and glass relabel cleanup

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L21 / S7 | `glass` | `S-LAH79 (195375/3233)` | `954323 — ultra-high-index lanthanum (S-LAH98 / TAFD45 family)` | Patent Table 1 lists nd=1.953750, vd=32.33. The old label resolved to catalog S-LAH79 (nd=2.00330), so the code-based family label prevents a false Sellmeier match. |
| L31 / S16 | `glass` | `TAFD30 equiv. (190265/3572)` | `903357 — high-index lanthanum flint (patent nd=1.90265, νd=35.72)` | Patent Table 1 lists nd=1.902650, vd=35.72. The old label resolved to catalog TAFD30 (nd=1.88300), not the stored patent glass. |
| L32 / S18 | `glass` | `S-NPH53 (200100/2912)` | `001291 — ultra-high-index dense flint (patent nd=2.00100, νd=29.12)` | Patent Table 1 lists nd=2.001000, vd=29.12. The old label resolved to catalog S-NPH53 (nd=1.84666), not the patent value. |
| L34 / S21 | `glass` | `S-LAH79 (195375/3233)` | `954323 — ultra-high-index lanthanum (S-LAH98 / TAFD45 family)` | Same patent constants as L21 (nd=1.953750, vd=32.33); relabeled to avoid the false S-LAH79 catalog match. |
| L43 / S26 | `glass` | `S-LAH79 (195375/3233)` | `954323 — ultra-high-index lanthanum (S-LAH98 / TAFD45 family)` | Same patent constants as L21 (nd=1.953750, vd=32.33); relabeled to avoid the false S-LAH79 catalog match. |
| L44 / S27 | `glass` | `S-FPL51 (149710/8149)` | `S-FPL51 (OHARA)` | Patent Table 1 lists nd=1.497100, vd=81.49, which round-trips acceptably against catalog S-FPL51. The canonical name preserves Sellmeier resolution. |
| L51 / S29 | `glass` | `TAFD37 equiv. (184666/2380)` | `S-TIH53 (OHARA)` | Patent Table 1 lists nd=1.846660, vd=23.80. Catalog S-TIH53 matches within tolerance; the old TAFD37 label resolved to nd=1.90043. |
| L52 / S30 | `glass` | `TAFD33 equiv. (185135/4013)` | `851401 — dense lanthanum flint (near S-LAH89; patent nd=1.85135, νd=40.13)` | Patent Table 1 lists nd=1.851350, vd=40.13. The old label resolved to catalog TAFD33 (nd=1.88100), so the code-based label keeps Abbe fallback honest. |
| L62 / S34 | `glass` | `S-TIM22 equiv. (168376/3757)` | `684376 — titanium flint (patent nd=1.68376, νd=37.57)` | Patent Table 1 lists nd=1.683760, vd=37.57. The old label resolved to catalog S-TIM22 (nd=1.64769), not the patent glass. |

### Phase 2 — Retained-information audit

- Patent Table 1 lens prescription rows 1-35 match the stored `R`, `d`, `nd`, and `vd` values at infinity wide position, including stop surface S15 and image-side BF row S35.
- Patent Table 1 variable-spacing data matches all stored `var` entries for W, M1, M2, and T at infinity and close focus: D1, D2, D3, D4, D5, and BF.
- Patent Table 1 aspherical data for S28, S31, and S33 matches the stored coefficients. The patent uses κ=1.0000, so the data file's `K: 0` convention is correct.
- Patent paragraphs 0088-0091 confirm G4/G5/G6 construction, G5 image-side focus motion, and the L32+L33 VR sub-group.
- Semi-diameters remain estimated because the patent does not publish clear apertures.

### Phase 3 — Spectral / metadata enrichment

- Kept existing `dPgF: 0.028` on L44. The patent table provides only nd/vd; this APD value is a catalog-family enrichment from S-FPL51 rather than a patent-listed value.
- No new patent spectral line data was available in JPWO2020/157904 A1 Table 1.
- Existing metadata already included patent year, design focal lengths, design apertures, element/group counts, maker, and focus description.

### Phase 4 — Analysis sync

- Updated the element narrative for L21, L31, L32, L34, L43, L44, L51, L52, and L62 to match the corrected labels.
- Replaced summary references to S-LAH79, S-NPH53, TAFD33, TAFD37, and S-TIM22 where those names were no longer supported by the audited data file.

## 2026-05-19 — Six-digit glass-code backfill review

Reviewed `patents/JPWO2020157904A1.pdf`, Example 1 / Table 1. The L62 / surface 34 row gives nd=1.683760 and νd=37.57, code `684376`.

Catalog-search disposition:

- Public Nikon/Hikari catalog data identifies `684376` as Hikari J-KZFH6, nd=1.683760, νd=37.64, with published formula-3 power-series coefficients.
- The Abbe-number difference is the patent/catalog rounding already seen in this family; the d-line index and code are exact.

Changes made:

- Added Hikari J-KZFH6 to `glassCatalogData.ts`.
- Relabeled L62 in `NikonNikkorZ24200mmf463VR.data.ts` to `J-KZFH6 (Hikari) — titanium flint (684376)`.
- Updated `NikonNikkorZ24200mmf463VR.analysis.md` so L62 is no longer described as catalog-unresolved.

## 2026-05-20 — Glass relabel follow-up

- Opened the data, analysis, and local patent PDF `patents/JPWO2020157904A1.pdf`; local text confirms the queued rows.
- Updated L11 and L42 to `S-LAH95 (OHARA)`.
- Updated L13 to `S-LAH59 (OHARA)`.
- Updated the L12/L13 ED pair to `J-PSKH1 (Hikari)` to improve Sellmeier coverage for the repeated 593/679 glass.
- Remaining coverage gaps are unrelated no-catalog patent glasses at 157957/5374 and 182080/4251 plus existing code-only rows.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L23 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.88 row.

## 2026-07-30 - Unsafe named-token cleanup

- Removed the speculative CDGM `H-LAF3` attribution from L61. Patent Table 1 gives nd=1.82080 and νd=42.51 but no supplier.
- The nearest coefficient-backed public row shares the d-line index but misses the Abbe number; without patent line indices or partial dispersion, applying that spectrum would be an unsupported quality trade. L61 is now explicitly `Unmatched`.
- Synchronized the analysis; no prescription geometry changed.

## 2026-08-18 — L61 M-TAFD51 coefficient assignment

- Visually rechecked `patents/JPWO2020157904A1.pdf`, PDF page 16, Example 1. L61 remains `nd = 1.82080`, `νd = 42.51`.
- HOYA M-TAFD51 reproduces the d-line index essentially exactly and is within the runtime Abbe window (`Δnd = -0.000002`, `Δνd = +0.20`).
- Relabeled L61 as an M-TAFD51 optical equivalent while leaving the production supplier unspecified. No prescription, asphere, focus, or zoom geometry changed.

## 2026-09-23 — First-added diagram audit, lens 69

Source: local `patents/JPWO2020157904A1.pdf` (JP WO2020/157904 A1, 71 pp.). Pages used: p. 1 (bibliography), pp. 14–17
(¶0075–0093, Example 1 text and Table 1), p. 56 (Fig. 1, 300 ppi native raster), and the Example 2 and Example 13
tables for the identification check. Every Table 1 row was read on the rendered page. Inventor Latin spellings come
from the US family member US 2025/0306348 A1 on Google Patents, because the JP publication gives kanji only.

### Re-verified and retained

- All 35 prescription rows (R, D, nd, νd, stop at S15) match Table 1. The three aspheres match, including
  A12 = 0.32673E-14 and 0.98445E-14. The patent's κ = 1.0000 on all three means K = 0 under Eq. (A).
- All six variable gaps (D1–D5, BF) at W/M1/M2/T, infinity and near, match Table 1.
- No cover glass or filter is listed; BF is the air-equivalent distance, so no plate is folded in.
- Paraxial EFL is 24.720 / 50.001 / 105.054 / 193.996 mm against the patent's 24.720 / 50.000 / 105.051 / 193.991. Infinity defocus is 0.0004–0.0021 mm. Group focal lengths reproduce the lens-group table. The data stays at native scale.
- Real-ray field check: the stored design reaches the patent's image heights at ω = 42.69° / 22.67° / 11.14° / 6.13°,
  against the patent's 42.59° / 22.67° / 11.14° / 6.13°. At the wide end the maximum real image height is about
  20.57 mm, against the patent's Y = 20.50 mm.
- Zoom motion: per the Fig. 1 arrows and ¶0084, every group moves toward the object from W to T, and stop S, G3 and G6
  move as one unit. Derived travel is G1 62.02, G2 8.99, S/G3/G6 26.73, G4 37.48 and G5 41.02 mm. These reproduce
  conditions (1) 1.402, (2) 0.364, (10) 1.535 and (11) 0.366. The live group-movement overlay shows the same
  direction for all six groups.
- Focus: G5 moves toward the image (¶0091). D4 + D5 is conserved at every station, with G5 travel of 0.894 / 1.625 /
  4.312 / 9.698 mm.
- Glass: every stored nd/νd equals Table 1. All labels resolve to coordinate-compatible catalog glasses.
- Metadata retained: counts, specs, mounts and format, groups/doublets, varLabels and element types (Example 1 has a biconcave L24,
  ¶0086). `patentAuthors` was already correct.
- Example identity: Example 1 is kept. Example 13 has 20 elements (an added fixed G7), so it is excluded. Example 2 is
  a 19-element sibling whose near states come to exactly 0.500 / 0.700 m, against Example 1's 0.492 / 0.692 m. Public
  specifications cannot separate Examples 1 and 2, and Example 1 is the publication's representative example
  (abstract figure), so the analysis now says the match is to the design family.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| L24 sd (S13/S14) | 11.0 / 11.0 | 9.5 / 9.5 | Fig. 1 rim 73–74 px (9.45 mm) on both sides; stored value 16 % larger; axial 7.02 / 7.20 mm clears it |
| L34 sd (S21/S22) | 10.1 / 10.3 | 8.3 / 8.3 | Fig. 1 rim 64 px (8.2 mm) on both sides, and the drawn edge thickness (≈ 1.8 mm) matches 8.2 mm; axial 7.57 / 7.64 mm |
| L41+L42 sd (S23–S25) | 12.9 / 12.9 / 13.0 | 11.1 ×3 | Fig. 1 rim 85–87 px (11.0 mm); at 12.9 mm L41's edge thickness was ≈ 0; at 11.1 mm it is 1.2 mm, matching the drawing |
| L43+L44 sd (S26–S28A) | 13.0 / 12.9 / 12.9 | 11.4 ×3 | Fig. 1 rim 86–89 px (11.3 mm); the L44 rear-rim position matches the S28A sag at 11.3 mm |
| G5 sd (S29–S31A) | 13.7 / 13.7 / 13.1 | 11.8 ×3 | Fig. 1 rim 89–93 px (11.4–12.0 mm), 13–17 % smaller than stored |
| L61 sd (S32/S33A) | 15.2 / 18.5 | 13.3 / 14.6 | Fig. 1 edge 113 px (14.5 mm); a flat annulus at 103–113 px marks where S32's optical surface ends (13.2 mm) |
| L62 sd (S34/S35) | 20.2 / 21.2 | 17.5 / 17.5 | Fig. 1 rim 135–137 px (17.5 mm); the drawn 1.5 mm edge matches the sags at 17.5 mm |
| STO sd | 7.4 | 7.5 | The inferred tele iris radius is 7.413 mm, so 7.4 was 0.01 mm short |
| `zoomApertureModel` | absent (fixed 6.36 mm iris) | `"from-nominal-fno"` | No iris diameters are published; the FNO schedule implies radii of 6.36 / 6.36 / 6.69 / 7.41 mm; Fig. 1 (wide end) draws the stop opening at ≈ 6.3 mm |
| `closeFocusM` / `zoomCloseFocusM` | 0.5 / absent | 0.4924 / [0.4924, 0.5425, 0.6426, 0.693] | Calculated D0 + lens length + near BF from Table 1; the near conjugate differs by station |
| `fstopSeries` / `maxFstop` | starts 4 / default 16 | starts 4.12 / 22 | The first stop must be reachable; the series already included f/22 |
| L44 glass | S-FPL51 (OHARA) | M-FCD1 (HOYA) catalog equivalent | Exact nd 1.49710 (S-FPL51 is 1.49700); νd 81.56 vs 81.49 |
| L52 glass | `851401 — … (near S-LAH89 …)`, which resolved to S-LAH89 (Δνd +0.65) | M-TAFD305 (HOYA) catalog equivalent | 1.85135 / 40.10 against the patent's 1.85135 / 40.13 |
| Element `fl` | stale, including L43 −31.0, L61 −84.3 and L32 −48.7 | thick-lens values (L43 −33.8, L61 −95.1, L32 −50.3, …) | Thick-lens trace of each element |
| Header / subtitle | "Makita, Itō", 0.5 m, paraxial-estimate SD note | Makida / Ito / Miwa, figure-based SD note, zoom-travel and iris notes | Family romanization; this audit |
| Analysis | Makita / Tetsushi; "confidently identified"; stale glass names (TAFD45 for L11/L42, PCD4, TAFD25, S-FPL51, 851401); doublet f +79.5 mm; MFD explained via flange distance | Corrected names, glasses and focal lengths; Example 2/13 sibling note; inferred iris schedule; calculated close conjugates; figure-based SD limitation; asphere departure-sign wording | Findings above |

G1 (31.0 / 29.4 / 28.0 mm) was left unchanged. Fig. 1 draws it at 27.1 / 26.5 / 25.7 mm, 8–13 % smaller, which is inside
the ~15 % tolerance. The earlier estimate was tied to the 67 mm filter thread. The remaining G2/G3 surfaces agree with
the figure within about 10 %: L21 13.4 mm, L22 11.1 mm, L23 9.6 mm, L31 8.4 mm and L32/L33 9.2 mm.

### Checks on the result

- The surface validator reports no errors, and the image-circle audit reports 0 undersized.
- The real-ray trace at Y = 21.7 mm (the wide station clamps at 20.57 mm) finds no axial clipping and no chief-ray
  blocking at infinity or at near focus. Full-field vignetting is up to about 50 % on one side at G4 and G2, which is ordinary.
- The engine derives stop radii of 6.362 / 6.358 / 6.691 / 7.413 mm and FOPEN of 4.12 / 5.59 / 6.40 / 6.50.
- The engine's paraxial wide half-field estimate is now 37.3°, limited by S32, where it was 39.9° (limited by S8).
  Both are below the patent's 42.59°. A real trace at 42.7° clears S32 at a chief-ray height of 11.7 mm.
- The near states focus at a calculated 492.4 / 542.5 / 642.6 / 693.0 mm object-to-image distance, with magnification
  −0.062 / −0.111 / −0.179 / −0.284, matching the patent's β.
- Prettier reports clean formatting.
- Live check with the headless local renderer: the wide-end infinity silhouette shows the smaller G4–G6 rims. At the
  tele end the stop reads Ø 14.83 mm, and near focus at tele shows 69 cm with D4 = 11.70. The zoom-movement overlay
  moves all six groups objectward; the focus overlay moves G5 imageward. The production baseline was shot at the wide
  end. Off-axis rays were not toggled.

### Open limitations

- Semi-diameters are figure measurements, not tabulated effective diameters. G1 remains an estimate.
- The iris schedule is inferred from the FNO values; no diameters are published.
- Example 1 versus Example 2 as the production design is unresolved from public data.
- L44's dPgF 0.028 is a family value; the patent lists no θgF.
- The engine's paraxial wide half-field (37.3°) underestimates the patent's 42.59°.
