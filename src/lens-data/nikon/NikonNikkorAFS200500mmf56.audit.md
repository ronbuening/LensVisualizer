# Audit Log — Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR

Patent: JP 2014-209144 A, Example 2

## 2026-05-19 — Patent glass audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `NBFD11 (HOYA)` | `S-LAH65 (OHARA)` | Patent ¶0043 row 1 gives nd=1.80400, νd=46.60. Catalog NBFD11 is nd=1.78590; S-LAH65 round-trips the patent nd and is within 0.03 Abbe units. |
| L2 / S2 | `glass` | `FPL51 variant [ED]` | `498826 — ED fluorophosphate crown (patent nd=1.49782, νd=82.57)` | Patent ¶0043 row 2 gives nd=1.49782, νd=82.57. No current catalog entry exactly round-trips this melt; code annotation preserves the patent pair and avoids a spurious S-FPL51 catalog hit. |
| L3 / S4 | `glass` | `FPL51 variant [ED]` | `498826 — ED fluorophosphate crown (patent nd=1.49782, νd=82.57)` | Patent ¶0043 row 4 gives the same nd/νd pair as L2; same code-based treatment. |
| L4 / S6 | `glass` | `S-TIM27 (OHARA)` | `S-TIM5 (OHARA)` | Patent ¶0043 row 6 gives nd=1.60342, νd=38.01. S-TIM27 is nd=1.63980; S-TIM5 matches the patent pair within catalog precision. |
| L6 / S9 | `glass` | `S-NSL3 (OHARA)` | `517522 — crown (patent nd=1.51742, νd=52.15)` | Patent ¶0043 row 9 gives nd=1.51742, νd=52.15. S-NSL3 has a much higher νd; no current catalog entry round-trips both values closely. |
| L8 / S12 | `glass` | `S-NBH51 (OHARA)` | `S-LAM60 (OHARA)` | Patent ¶0043 row 12 gives nd=1.74330, νd=49.22. S-NBH51 is nd=1.74950 and νd=35.33; S-LAM60 is the closest catalog match and clears the mismatch scan. |
| L9 / S14 | `glass` | `S-BAL35 (OHARA)` | `N-SK2 (Schott)` | Patent ¶0043 row 14 gives nd=1.60738, νd=56.82. S-BAL35 is nd=1.58913; N-SK2 matches nd exactly and νd within 0.17. |
| L10 / S15 | `glass` | `S-BAH28 (OHARA)` | `658509 — lanthanum crown (patent nd=1.65844, νd=50.85)` | Patent ¶0043 row 15 gives nd=1.65844, νd=50.85. No current catalog candidate is within tolerance, so the code annotation prevents a false S-BAH28 Sellmeier match. |
| L15 / S23 | `glass` | `S-NBH51 (OHARA)` | `S-LAM60 (OHARA)` | Patent ¶0043 row 23 repeats the L8 nd/νd pair; same S-LAM60 catalog resolution. |
| L18 / S29 | `glass` | `S-TIM2 (OHARA)` | `E-FL5 (HOYA)` | Patent ¶0043 row 29 gives nd=1.58144, νd=40.89. S-TIM2 is nd=1.62004; E-FL5 matches the patent pair. |

### Phase 2 — Retained-information audit

- Surface radii, center thicknesses, glass nd values, and air gaps S1-S32 were checked against patent ¶0043; no prescription numeric edits were needed.
- Infinity zoom variable gaps D5, D16, D19, D24, D25, D28 and constant bf were checked against patent ¶0044; existing `var` infinity entries match.
- Close-focus gaps for 2.2 m were checked against patent ¶0045; existing close-focus entries match.
- Patent Example 2 contains no aspherical coefficient table; `asph: {}` remains correct.
- Semi-diameters remain geometric estimates because the patent table provides no semi-diameter column.

### Phase 3 — Spectral / metadata enrichment

- No nC/nF/ng/Pg,F or dPgF table is present in JP 2014-209144 A Example 2, so no spectral line indices were added.
- Existing metadata already records the patent, design focal range, optical f-number range, 19 elements / 12 groups, 2014 publication year, Nikon maker, full-frame format, and internal-focus description.

### Phase 4 — Analysis sync

- Updated the analysis glass table and element narratives for L1, L2, L3, L4, L6, L8, L9, L10, L11, L15, L18, and L19 so prose matches the data file.

### Report status

- This lens no longer appears in the catalog-mismatch or relabel-candidate reports; the unresolved report intentionally lists L2/L3 `498826`, L6 `517522`, and L10 `658509` code annotations.

## 2026-05-19 — Six-digit glass-code backfill review

Reviewed `patents/JP2014209144A.pdf`, Example 2. The relevant rows remain row 2 and row 4 (nd=1.49782, νd=82.57) plus row 15 (nd=1.65844, νd=50.85).

Catalog disposition:

- Hikari/Nikon J-FKH1 is an exact coefficient-backed match for the `498826` ED fluorophosphate row.
- Schott N-SSK5 is a coefficient-backed extra-dense crown with code `658509.371` and matches the patent nd with only a small Abbe rounding difference.
- L6 / `517522` was already code-resolvable to HOYA E-CF6 in the project catalog.

Changes made:

- Added Hikari J-FKH1 and Schott N-SSK5 to `glassCatalogData.ts`.
- Relabeled L2/L3 to J-FKH1 and L10 to N-SSK5 in `NikonNikkorAFS200500mmf56.data.ts`.
- Updated `NikonNikkorAFS200500mmf56.analysis.md` so the front ED elements and L2C doublet no longer read as unresolved code fallbacks.

## 2026-07-29 - Glass classification follow-up

- Corrected L16 from the false E-ADF10 annotation to HOYA E-FD2.
- The stored `nd=1.64769`, `vd=33.84`, and code coordinate `648338` match E-FD2 exactly; discontinued E-ADF10
  is instead `1.61310 / 44.36` (`613444`).
- Synchronized the analysis. This makes the lens fully catalog-backed without changing its prescription.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked JP 2014-209144 A Example 2 surfaces 7, 21, and 27; the patent rows (`-61.4135/1.5000`, `-54.0683/1.7000`, and `-106.5949/1.1000`) and stored `nd`/`νd` values agree.
- Surfaces 7 and 27: canonicalized `TAC4 / S-LAL18` to exact-coordinate OHARA `S-LAL18` at 1.72916 / 54.67.
- Surface 21: changed `S-LAH55V / TAFD5` to explicit `Unmatched (834373...)`; 1.83400 / 37.34 is patent-backed, but the table gives no vendor/type and several catalog families are plausible.
- Synchronized the analysis. No prescription geometry changed.

## 2026-07-30 - NBFD10 catalog-equivalent recovery

- Rechecked JP 2014-209144 A Example 2 surface 21 on rendered patent page 11: `R=-54.0683`, `d=1.7000`,
  `nd=1.83400`, and `νd=37.34` remain unchanged.
- Relabeled E14 from explicit unmatched `834373` to `NBFD10 (HOYA catalog equivalent; production supplier
  unspecified)`. The official obsolete-inclusive HOYA coefficient row is exactly `1.83400 / 37.34` with code
  `834373`.
- Synchronized the E13/E14 analysis narrative. No prescription geometry or supplier attribution changed.

## 2026-09-23 — First-added diagram audit, lens 67

Source: local `patents/JP2014209144A.pdf`. Used page 1 (bibliographic block: applicants Nikon and Tamron), page 17
(inventor order), pages 10–12 (Example 2 general data ¶0042, table ¶0043, variable gaps ¶0044–¶0045, conditions
¶0046) and page 15 (Fig. 5 section and zoom-movement arrows). Every table number was read off the rendered page. The
Google Patents record of the same publication was used only for the inventor romanization (Takeshi Suzuki for 鈴木 剛司).

### Re-verified and retained

- All 32 surface rows (R, d, nd, νd), the stop at surface 25, the infinity and 2.2 m gap tables at all three
  stations, and constant bf = 54.3185 match the page. No aspheres. EFL computes to 205.041 / 299.981 / 486.969 mm
  (patent 205.0431 / 299.9821 / 486.9688). Close-focus EFL is 175.705 / 225.066 / 280.493 mm (patent 175.7064 /
  225.0670 / 280.4931). Element focal lengths match their thick-lens values. Defocus at infinity is below 0.07 mm.
- `closeFocusM: 2.2`: the patent object distance plus total length is 1890.00 + 309.32 = 2199.3 mm. The stored close
  gaps focus at 2202.9 / 2200.0 / 2198.2 mm object-to-image. Only two focus states are published, so no
  `focusPositions`.
- No scaling (the patent is at production focal lengths). Patent authors, assignees, year and kind code are correct.
- Glass: every label resolves `OK-compatible`. There are no mismatches.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Zoom-motion description (header, G4 group label, analysis §5/§6.1/§10) | G2, G4, G6 fixed; "G4 (+) L4 [fixed]" | G2 and G6 fixed; L1, L3, L4, L5 and the stop move toward the object | Fig. 5 draws arrows under L1, L3, L4 and L5 and dashed lines under L2 and L6. From ¶0044, wide→tele travel is L1 75.38, L3 21.82, L4 10.97, stop 38.65 and L5 40.99 mm, all monotonic. d16 + d19 changes from 25.32 to 14.35 mm, so L4 cannot be fixed. Claim 5 is only a preferred option, and ¶0014 allows G4 to move. |
| S29/S30 (E18) sd | 10.0 / 10.0 | 17.5 / 17.5 | The full-field chief ray reaches 10.1 / 10.7 mm (`BLOCKS-CHIEF`), and Fig. 5 measures ≈17.6 mm. |
| S31/S32 (E19) sd | 6.5 / 6.5 | 17.2 / 17.2 | The chief ray reaches 12.0 / 12.4 mm (`BLOCKS-CHIEF`), and Fig. 5 measures ≈17.2 mm (1200 dpi crop). The edge thickness is 3.2 mm. |
| S11 sd | 16.9 | 17.4 | The f/4.62 axial marginal ray reaches 17.33 mm (`CLIPS-AXIAL`). |
| S12/S13 (E8) sd | 17.5 / 17.5 | 17.7 / 17.7 | Axial 17.34 / 17.58 mm (S13 `CLIPS-AXIAL`). Fig. 5 draws L2B at ≈19.3 mm, but the 2.0 mm S11→S12 air gap prevents that. |
| `gapSagFrac` | default 0.90 | 0.96 | The S11/S12 rim sag totals 1.90 mm in the 2.0 mm gap at the needed 17.4 mm, so 0.10 mm clearance remains. |
| `varLabels` for gap after S28 | "BF" | "D28" | Patent names the gap d28; bf is the separate fixed back focus. |
| E1, E11 `type` | Positive Meniscus | Negative Meniscus | Both radii are positive, and the power is −211.8 / −209.5 mm. |
| E4, E18 `type` | Negative Meniscus | Positive Meniscus | Both radii are negative, and the power is +115.7 / +131.4 mm. |
| E8, E15 `glass` | S-LAM60 (OHARA) | NBF1 (HOYA; exact 743492) | Patent 1.74330 / 49.22. S-LAM60 is 1.74320 / 49.34, while NBF1 is exact. |
| `specs` f-number | F/5.62–5.78 (optical) | F/4.62–5.78 (patent) | ¶0042 FNo = 4.62〜5.78. |
| `apertureDesign` | 5.6 | 4.62 | Patent wide-open value; `apertureMarketing` 5.6 is kept. |
| `fstopSeries` / `maxFstop` | [5.6 … 32] / default 16 | [4.62, 5.6 … 32] / 32 | The list now starts at the reachable patent value and reaches the production minimum aperture of f/32. f/22 and f/32 were previously filtered out by the f/16 cap. |
| Analysis | inventor romanization "Suzuki Tsuyoshi"; E14 "unmatched"; E2/E3 "not identical with any catalog glass"; stop "achieves constant f/5.6"; focus-physics sentences | synchronized | E14 and E2/E3 now match the data file's glass labels. The focus text now uses the patent's close-focus f values. |

Aperture model: kept the default fixed physical iris (no `zoomApertureModel`). ¶0016 says the moving stop keeps the
iris diameter constant. A real-ray trace needs a stop radius of 14.047 / 14.062 / 14.060 mm to give FNo 4.62 / 5.24 /
5.78, so one iris reproduces all three published values. The production constant f/5.6 is a diaphragm limit outside
the example.

Figure measurement: Fig. 5 was measured at 400 dpi, scale 3.403 px/mm from S1 (x 457) to IP (x 1509.5) = 309.32 mm;
the S32 vertex was predicted at x 1324.7 and found at 1324. Rims: L1 ≈ 45.7 (stored 45.5), L2A ≈ 19.3 (18.5), L2C ≈
21.4 (19.5–20.5), L3 ≈ 25.0 (24.0–24.5), L4 ≈ 24.4 / 23.7 (23.0–24.5), stop ≈ 13.7 (14.0), L5 ≈ 14.1 (13.0–13.5). All
of these are within 15 %, so they were left unchanged.

### Result checks

- Surface validator: no errors. Image-circle floor: 0 undersized.
- Real-ray clear-aperture trace (Y = 21.633 mm, ω 5.90 / 4.10 / 2.49°): no `CLIPS-AXIAL` or `BLOCKS-CHIEF` at infinity
  or 2.2 m at any station. Ordinary full-field vignetting remains (front group and L2 50–87 %, E19 54–62 % side).
- The engine's paraxial field limit rose from 4.0° / 2.5° / 1.3° (rear-group limited, below the patent ω) to 9.9° /
  6.5° / 3.5°. The built lens gives FOPEN 4.62 at the wide end and a stop radius of 14.05 mm.
- Local page, checked through DOM inspection because the browser pane was hidden and screenshots were unavailable: at
  the wide end, E18 and E19 now render at 47 / 46 px against L1's 123 px, where production showed 27 / 18 px. The
  ratio of about 0.38 matches Fig. 5. The group label now reads "G4 (+) L4", the aperture runs f/4.62–f/32 (f/5.78 at
  the telephoto end), and off-axis rays are 2.1° at the telephoto end. There were no console errors. The coordinator
  then rendered 205 mm and 487 mm fresh in headless Chromium with the zoom group-movement overlay: L1 travels
  75.38 mm toward the object, L3, L4 and L5 also move toward the object, L2 and L6 are drawn fixed, and the aperture
  readout runs f/4.62 → f/5.78 with a constant 28.09 mm iris.

### Open limitations

- L2B is drawn about 10 % smaller than Fig. 5 because the 2.0 mm S11→S12 gap limits the rim. The real lens presumably
  uses edge bevels or flats there.
- Semi-diameters remain ray-envelope and figure estimates; the patent publishes no effective diameters.
- The diagram models the patent's wide-open FNo 4.62–5.78, not the production constant f/5.6 maximum.
