# Audit Log - Nikon NIKKOR Z 35mm f/1.2 S

Patent: JP 2025-052870 A, Example 1

## 2026-05-20 - Six-digit missing-Sellmeier code review

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L42 / S29 | `glass` | `S-NPH7 (946180, OHARA S-NPH7)` | `FDS18 / H-ZF75A family (946180)` | Local patent `patents/JP2025052870A.pdf`, Example 1 row 29 lists nd=1.94594, vd=17.98, and theta_gF=0.6546. Public HOYA FDS18 has coefficient-backed code `946180` and nd=1.94595 / vd=17.98; public cross-tables also map `946180` to FDS18/H-ZF75A rather than a current OHARA S-NPH entry. |
| L44 / S32 | `glass` | `Barium crown / LaK family (624584, no exact catalog match)` | unchanged | Local patent row 32 lists nd=1.62372 and vd=58.4. Public catalog search found no coefficient-backed exact match for `624584`, so the existing unbroken code label remains. |

### Catalog-search disposition

- Confirmed `946180` against HOYA FDS18 / NHG H-ZF75A public data; no new catalog entry was needed because FDS18 is already present.
- Searched public catalog/refractiveindex.info-style sources for `624584` and the exact 1.62372 / 58.4 pair; no defensible coefficient-backed match was found.

### Phase 4 - Analysis sync

- Updated the L42 analysis from OHARA S-NPH7 wording to the FDS18/H-ZF75A property-family interpretation.

## 2026-05-19 - Glass relabel + patent-code fallback

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L13 / S5 | `glass` | `Ultra-high-index dense flint (921240...)` | `FDS24 (HOYA)` | Patent nd/vd is 1.92119 / 24.0; refractiveindex.info/HOYA gives exact code 921240. |
| L14 / S7 | `glass` | `S-NBH52 (738323...)` | `J-KZFH9 (Hikari)` | Patent nd/vd is 1.73800 / 32.3; J-KZFH9 is the exact d-code target. |
| L15 / S9 | `glass` | `S-LAH79 (954323...)` | `S-LAH98 (OHARA)` | Patent nd/vd is 1.95375 / 32.3; S-LAH98 is exact. |
| L19 / S16 | `glass` | `S-NBH52 (738323...)` | `J-KZFH9 (Hikari)` | Same patent glass as L14; retained patent theta note. |
| L21 / S19 | `glass` | `S-NBH55 (720347...)` | `N-KZFS8 (Schott)` | Patent nd/vd is 1.72047 / 34.7; N-KZFS8 is exact. |
| L43 / S30 | `glass` | `S-NBH56 (789284...)` | `789284 - dense flint (no exact public catalog match)` | Patent nd/vd is 1.78880 / 28.4; refractiveindex.info search found no exact catalog glass, so this remains a future-upgrade code fallback. |

### Phase 2 - Retained-information audit

- Spot-checked flagged rows against Example 1; stored nd/vd values match the patent table.
- No radius, spacing, focus-variable, or asphere edits were needed in this scoped glass pass.

### Phase 3 - Spectral / metadata enrichment

- Added `FDS24` from refractiveindex.info's HOYA Zemax source.
- Left `789284` unresolved by design; nearest public catalog rows were not exact enough to claim.

### Phase 4 - Analysis sync

- Updated the companion analysis names for L13, L14, L15, L19, L21, and L43.

## 2026-06-04 - Sweep 3 patent dPgF backfill

Local patent source: `patents/JP2025052870A.pdf` (untracked local file).

### Phase 3 - Spectral / metadata enrichment

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L19 / S16 | `dPgF` | absent | `0.0001` | Patent Example 1 row 16 lists `θgF = 0.5896`; subtracting the project normal line `0.6438 - 0.001682 * 32.3` gives `ΔPgF = +0.0001`. |
| L42 / S29 | `dPgF` | absent | `0.041` | Patent Example 1 row 29 lists `θgF = 0.6546`; subtracting the project normal line `0.6438 - 0.001682 * 17.98` gives `ΔPgF = +0.0410`. |

No `nC`, `nF`, or `ng` rows were found in the extracted local patent text. The remaining unresolved six-digit rows in this lens are catalog/source issues rather than patent line-index rows.

## 2026-07-30 - L-LAH85 identity correction

- Rendered JP 2025-052870 A Example 1 / Table 1 and confirmed L32 at `nd=1.77503`, `νd=47.3`; the patent does not identify a vendor.
- Rejected the prior OHARA `L-LAH85` attribution. OHARA's official all-products row is `1.854000 / 40.378368` and is incompatible with the patent coordinate.
- Relabeled L32 to `M-TAF401 (HOYA catalog equivalent; production supplier unspecified)`. The coefficient-backed `1.77377 / 47.17` row is safely inside both compatibility limits.
- Synchronized the analysis and limited the PGM claim to the separately identified L-PHM52 element. No prescription geometry or aspheric coefficients changed.

## 2026-09-23 — First-added diagram audit, lens 82

Source: local `patents/JP2025052870A.pdf` (JP 2025-052870 A, text-layer PDF). Example 1 text ¶[0117]–[0121]
p. 19–20, Table 1 pp. 20–21 (rows confirmed on the rendered pages), condition table p. 39–40, Fig. 1 p. 41
(native 812 ppi raster, axis horizontal, infinity state in the upper half). Inventor romanization from the Google
Patents record of the same publication.

### Retained after re-reading the source

- All 33 rows of `R`, `d`, `nd`, `νd`, the stop position, both θgF entries and the five aspheres match Table 1.
  The patent formula uses κ with κ = 1 for a sphere; every surface prints κ = 1.00000, so K = κ − 1 = 0 is
  correct. All A4–A16 coefficients match, including signs and exponents; no odd terms.
- Native scale kept: paraxial EFL 34.405 mm (patent 34.4), infinity BFD 12.4344 mm against the stored 12.434 mm
  last gap (defocus −0.0004 mm). The last gap is already the patent's BFa: d33 10.38 + 1.6/1.5168 + d35 1.00.
- Close state: stored d18/d22/d26 = 13.738/3.693/5.676 focus an object 308.08 mm ahead of S1 at β = −0.1000
  (patent d0 308.07, β −0.1000). F1 moves 5.351 mm and F2 3.677 mm toward the object, matching ¶[0120]. Only two
  states are published, so no `focusPositions`.
- Element `fl` values agree with thick-lens values to 0.1 mm; cemented D1 −98.62 mm and D2 −102.72 mm. Element
  types and signs match the ¶[0118] shape descriptions. Group focal lengths and condition values quoted in the
  analysis match the patent tables.
- Example choice: Example 1 retained (representative example, abstract figure). Example 2 has the same 17/15
  layout and aspherical elements with f = 35.00 mm; the product match is an inference either way.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| STO `sd` | 14.0 | 19.9 | Exact f/1.23 stop radius 19.86 mm (calculated); Fig. 1 stop ticks start at 19.5 (upper) and 20.1 mm (lower). |
| 19–24A, 26–30, 32A, 33 `sd` | 16.5 → 10.5 | 19.0–19.6 | Fig. 1 rims 133–138 px × 0.1429 mm/px (scale from the 1057 px / 151.008 mm S1–S33 span; S19, S24, S25, S27, S31, S32 vertex crossings land within 1 px). Old values clipped the f/1.23 axial beam at 19–26 and blocked the full-field chief ray at 25A–33. |
| 25A `sd` | 14.5 | 17.2 | Asphere slope turns over at ≈17.25 mm; the figure draws L32 to ≈19.3 mm. Axial need 15.15 mm, chief 15.26 mm. |
| 31 `sd` | 10.5 | 18.0 | Drawn 19.1 mm would make S31/S32A sag exceed the 7.53 mm gap allowance; 18.0 passes the validator and clears the chief ray (15.38 mm). |
| 1 `sd` | 27.5 | 31.2 | Fig. 1 front rim 219 px. At ω = 25° the lower rim ray needs 30.5 mm at S1; the old rim cut 21 % of that bundle. |
| 9/10, 11/12, 13/14 `sd` | 25.0/25.0, 26.0/25.5, 25.0/24.0 | 27.5/27.5, 27.9/27.9, 26.0/26.0 | Fig. 1 L15 193 px, L16 195 px, L17 182 px. Old S11, S12 and S14 clipped the f/1.23 axial beam (need 26.84/26.85/24.42 mm). |
| `nominalFno`, `fstopSeries` | 1.2; starts 1.2 | 1.23; starts 1.23 | Table 1 FNo 1.23. |
| `closeFocusM` | 0.3 | 0.472 | Patent close state d0 308.07 + TL 163.987 = 472.1 mm object-to-image (calculated). 0.3 m is the production MFD, which the tabulated gaps do not reach. |
| `varLabels` | D(STO) / D22 / BF | D18 / D22 / D26 | d26 is the F2→R gap, not back focus. |
| L12, L15, L16/L17, L18/L22/L41 `glass` | BK7 family / S-LAH98 / 593670 S-FPM2 approx. / 593679 "L-PHM52 nearest" | J-BK7A / J-LASFH21 / J-PSKH4 / J-PSKH1 (HIKARI catalog equivalents) | Exact coordinates: 1.51680/64.13, 1.95375/32.33, 1.59349/67.00, 1.59319/67.90. S-FPM2 was Δnd 1.7e-3 off; Hikari is Nikon's usual supplier. |
| L31 `glass` | "PGM phosphate crown ED (593679, OHARA L-PHM52)" | J-PSKH1 family, nearest (patent nd 0.00025 lower) | OHARA L-PHM52 is an alias of S-PHM52 (1.61800/63.33) and does not fit 1.59294/67.9. Same resolved catalog glass as before. |
| L43 `glass` | 789284 code, "no exact match" | S-NBH58 (OHARA catalog equivalent) | Catalog 1.78880/28.43 matches row 30 exactly. |
| L13, L14/L19, L21 `glass` | vendor names | same glasses, worded as catalog equivalents | The patent names no vendors. |
| Header, roles, `focusDescription`, subtitle | 82 mm filter-thread SD rationale; "ED element" as fact; PGM claims | Figure-based SD note; ED role marked inferred; PGM claims removed; patent-number format | Consistency with the evidence above. |

S2–S8 and D1 (S15–S17) are retained: Fig. 1 reads L11 rear 25.9 (optical end, flat annulus beyond), L12 26.0,
L13 25.7, L14 24.4 optical / 26.8 rim, L18 24.8, L19 rear 20.5 optical / 23.7 rim, all within ≈15 % of the
stored values and none clipping the axial beam.

### Analysis sync

Inventor corrected to Masaki Harada. Example-choice caveat and the Example 2 alternative added. Close focus
restated as the patent's β = −0.10 state (0.472 m, calculated), with the production 0.3 m MFD shown as
unpublished travel. Glass names updated (J-BK7A, J-LASFH21, J-PSKH4, J-PSKH1, S-NBH58, FDS18-class, FDS24);
L-PHM52/PGM and S-NPH7 claims removed; the "hybrid asphere" speculation for L12 removed (no resin layer is
listed). Back-focus paragraph now describes the patent filter and the Z-mount position correctly. Stop radius,
the SD method and the 25A turnover (departure −1.23 mm at 17.2 mm) added.

### Checks on the result

- Exact trace at f/1.23 and Y = 21.7 mm (ω = 32.72°, patent 32.7°): no clipped axial rays and no blocked chief
  ray at infinity or at β = −0.10. Off-axis vignetting of 1–14 % per side at 10° comes from S8–S25A.
- Engine: FOPEN 1.23, stop radius 19.856 mm, paraxial half-field 34.1° (was 20.5° with the old rear rims),
  Petzval +0.00158 mm⁻¹. Surface validator clean; image-circle check passes.
- Glass check: 16 of 17 elements resolve to catalog glasses within tolerance. L44 (624584) has no catalog match
  and stays on Abbe fallback.
- Live (headless): production baseline shows the small rear group and the f/1.2 slider start; local infinity and
  close renders show the rear group near the front-group scale as in Fig. 1, f/1.23 start, 47 cm close label,
  and the focus-movement overlay moves F1 5.35 mm and F2 less, both toward the object. Off-axis rays not checked.

### Open limitations

- The production match to Example 1 (not Example 2) is inferred, not published.
- Production close focus (0.3 m) and its F1/F2 travel are not published; the viewer stops at β = −0.10.
- 25A and S31 rims are smaller than drawn (turnover and gap-clearance limits); front-group rims S2–S8 and D1 are
  estimates within about 15 % of the figure.
- L31 (1.59294/67.9) and L44 (1.62372/58.4) have no exact catalog glass; L32 uses a compatible M-TAF401 equivalent.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Source: local `patents/JP2025052870A.pdf`, Table 1 p. 21 rows 33–35 and the variable-gap table: d33 = 10.38 mm
  (both focus states), filter group FL t = 1.600 mm, nd 1.51680, νd 64.1, d35 = 1.00 mm (both states); BF 12.98,
  BFa 12.434. The last gap changed from the folded 12.434 mm to the physical 10.38 mm and FL moved to `rearPlates`
  (gapAfter 1.00 mm). Glass label J-BK7A (Hikari, 1.51680/64.13), matching L12 and resolving as compatible.
- Plate check against HEAD: EFL identical at both focus states; paraxial defocus shifts by +0.00085 mm because the
  legacy 12.434 was the patent's rounded BFa, while 10.38 + 1.6/1.5168 + 1.00 = 12.43485 mm. Physical track grows
  0.546 mm, t(1 − 1/n) = 0.545 mm plus rounding, and now matches the patent TL 163.987 mm. Surface validator and
  image-circle check pass.

## 2026-10-27 — Rim-cut figure review

Fig. 1 (PDF p. 41, the same image as the front-page abstract figure; native 2677 × 2909 raster at 812 ppi, scale
0.0704 mm/px from the 2144 px S1–S33 vertex span) was read element by element on both halves of the upper
(infinity) panel for flat lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 7 (L14 front, R −38.631) | 0.911 (24.4 / 26.7 mm) | 8.40 mm | 24.05 mm | 26.4 | 20.46 mm |
| 17 (L19 rear, R 56.178) | 0.88 (20.9 / 23.7 mm) | 4.49 mm | 22.01 mm | 23.0 (was 22.0) | 20.18 mm |
| 31 (L43 rear, R 37.802) | 0.955 (18.1 / 18.9 mm) | 4.56 mm | 18.00 mm | 19.3 (was 18.0) | 9.21 mm |
| 32A (L44 front, R −124.601) | 0.933 (17.6 / 18.9 mm) | 1.96 mm | 17.73 mm | 19.0 | 6.05 mm |

- 7 and 32A: the face's `sd` is the element edge, so the cut radius is the figure share of `sd`.
- 17 and 31: the stored `sd` sat inside the drawn square edge (31 was held at 18.0 for the L43/L44 gap). Each now
  takes its partner face's rim (16 at 23.0, 30 at 19.3 mm), and the cut sits at the old `sd`. The clear radius of 17
  goes from the old 22.0 mm rim to the 22.0073 mm cut radius, where the beams reach 19.4168 mm; that of 31 goes from
  18.0 to 17.9988 mm, where the beams reach 16.8163 mm. On 17 the figure share (cut radius 20.24 mm) would sit only
  0.06 mm above the close-focus axial ray, so the land drawn is shorter than the figure's (22.01 of 23.0 mm).
- Concave faces 4A (L12 rear), 6 (L13 rear), 14 (L17 rear), 26 (L32 rear), 28 (L41 rear) and 33 (L44 rear) run
  to their element edge in the figure; no cut.
- No cap reaches the stop plane: surface 17's land clears it by 1.14 mm (fixed gap), surface 19 by 8.68 mm.
- Surface audit clean; aperture audit unchanged (stated f/1.23 traced; no rim, trace, iris or failed rows, no
  rim-cut limiter); image-circle check passes. At Y = 21.6 mm (ω = 32.62°) the stop-edge rim rays fail on the
  lens's own geometry, so the cuts were first checked with a meridional fan scan. The beam rule (below) now covers
  them: each of the four cuts clears every traced ray of the wide-open beams by its margin and clips none of them.

Lands seen but not cut:

- 2 (L11 rear, R 31.105): land at 0.826 (cap end 25.8 mm, edge 31.2 mm). The stored `sd` 26.3 already sits at
  the cap end, but the face cannot take its partner's 31.2 mm rim because the sphere ends at 31.1 mm. The diagram
  keeps its sloped edge from 26.3 to 31.2 mm.
- 19 (L21 front, R −38.223): short land at 0.963 (18.2 / 18.9 mm). The cut radius would be 18.30 mm, inside the
  18.31 mm close-focus axial ray, so it would slow the lens.

The beam rule (`validateRimCutBeams`) asks an inferred cut to clear the furthest traced ray of the wide-open beams by
the larger of 0.05 mm and 0.3 % of its radius, at every field and focus state, traced through the lens without its
inferred cuts. The beams are traced on the paraxial stop of #933 (EPD = F/N) with the rule's current search, which
follows each beam to the field where it vanishes, seeds from the stop and refines near cuts on the full measurement.
All four cuts pass at their figure-review positions:

- Surface 7: cut radius 24.0509 mm. The beams reach 23.8438 mm there (focusT 0.2, 34.09°), a clearance of 0.2072 mm
  against a 0.0722 mm margin, 0.1350 mm spare.
- Surface 17: cut radius 22.0073 mm. The beams reach 19.4168 mm there (focusT 0.65, 8.34°), a clearance of 2.5905 mm
  against a 0.0660 mm margin, 2.5245 mm spare.
- Surface 31: cut radius 17.9988 mm. The beams reach 16.8163 mm there (focusT 0.9, 34.09°), a clearance of 1.1825 mm
  against a 0.0540 mm margin, 1.1285 mm spare.
- Surface 32A: cut radius 17.7264 mm. The beams reach 17.0970 mm there (focusT 0.65, 34.09°), a clearance of
  0.6294 mm against a 0.0532 mm margin, 0.5762 mm spare.

Figure scale and land length: Fig. 1's 2144 px S1–S33 vertex span over 151.008 mm is 14.198 native px per lens mm.
One native pixel at the cap end and at the edge moves q by ±(1 + q) / (edge px).

- 7: q 0.911 at a 374.8 px edge (26.4 mm), range 0.906–0.916. Land 2.3491 mm, over the 0.1 mm minimum.
- 17: q 0.88 at a 326.6 px edge (23.0 mm), range 0.874–0.886. The cut sits at the old 22.0 mm rim, 0.957 of `sd`.
  Land 0.9927 mm, over the minimum.
- 31: q 0.955 at a 274.0 px edge (19.3 mm), range 0.948–0.962. The cut sits at the old 18.0 mm rim, 0.933 of `sd`.
  Land 1.3012 mm, over the minimum.
- 32A: q 0.933 at a 269.8 px edge (19.0 mm), range 0.926–0.940. Land 1.2736 mm, over the minimum.
