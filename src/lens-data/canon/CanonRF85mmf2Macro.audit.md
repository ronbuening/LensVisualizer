# Audit Log - Canon RF 85mm f/2 Macro IS STM

Patent: US 2021/0072505 A1, Numerical Example 1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20210072505A1.pdf`; local text confirms the queued rows.
- Updated L6 to `TAFD37A (HOYA)` for nd=1.90043, vd=37.40.
- Updated L7 to `N-KZFS8 (Schott)` for nd=1.72047, vd=34.70.
- Updated L11 to `S-LAH55V (OHARA)` for nd=1.83481, vd=42.70.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L9 from modern `S-NPH2` to historical OHARA `PBH21`, the exact 1.92286 / 20.90 row.

## 2026-07-29 - Remaining catalog-coordinate correction

- Rechecked Numerical Example 1 in local `patents/US20210072505A1.pdf`; S19 remains 1.83400 / 37.20 and its
  R/d row is unchanged.
- S19 `S-LAH55 (OHARA)` -> `S-LAH60 (OHARA)`, the exact same-vendor coordinate family. Synchronized the L10
  element discussion and glass table.

## 2026-09-23 — First-added diagram audit, lens 88

Source: local `patents/US20210072505A1.pdf` (US 2021/0072505 A1, Kobayashi / Canon). Pages used: front page
(inventor, applicant, priority JP 2019-161981), sheet 1 FIG. 1 (Example 1 section, 300 dpi native raster), and the
page 19 First Numerical Example table (¶0058), read on the rendered image.

Re-verified and retained:

- Example 1 is the production match (12 elements / 11 groups, one UD-class 1.49700 / 81.5 element, β = −0.5 closest
  state). Every R, d, nd and νd row (surfaces 1–24, stop at 9) matches the table; no aspheric surfaces; no filter or
  cover plate, so the last gap is the patent BF 17.60 mm. Paraxial EFL 82.444 mm (patent 82.45), BFD 17.591 mm, so
  the stored back gap sits 0.01 mm from paraxial focus; TL 104.87 mm matches. Lens unit data 66.73 / −165.06 mm
  reproduce. All twelve stored `fl` values match thick-lens values to 0.1 mm; element types agree with R signs.
- Focus: FIG. 1 arrow and ¶0027 confirm the whole front group L1 (surfaces 1–12, stop included) moves toward the
  object and L2 is fixed. The three published d12 values (2.52 / 3.60 / 29.52 mm) were already stored as keyframes.
  Calculated conjugates from those gaps: β = −0.0200 at 4277.5 mm object-to-image and β = −0.5000 at 346.2 mm, which
  is the production 0.35 m MFD, so `closeFocusM` 0.35 is kept.
- Patent metadata (number, kind code, sole inventor Kana Kobayashi, assignee, 2021) and the subtitle are correct.
- Semi-diameters: FIG. 1 profiled on both sides of the axis at 0.0983 mm/px (S1–S24 vertex span 888 px = 87.27 mm).
  Drawn rims: L1 21.1, L2 20.6, L3 18.7, L4 15.6, L5/L6 14.25, L7 13.1, L8 12.7, L9 12.9, L10 13.6, L11 19.0,
  L12 19.0 mm. Stored rims are within ~15 % everywhere (front menisci about 7 % and L11/L12 11–13 % larger than drawn),
  so they were kept apart from the cemented doublet below.
- Glass: every label resolves to a catalog glass with the patent nd/νd.

Changes:

| Field | Before | After | Evidence |
|---|---|---|---|
| `nominalFno` / `fstopSeries` | 2.0 / starts at 2 | 2.06 / starts at 2.06 | Patent F-number 2.06; engine iris now 13.48 mm. |
| `maxFstop` | default 16 (series listed 22, 29) | 29 | Production minimum aperture f/29; the listed stops were unreachable. |
| STO `sd` | 13.1 | 13.5 | Real-ray f/2.06 iris radius 13.48 mm (13.1 gave paraxial f/2.06 but clipped the real marginal ray). |
| S10 / S11 `sd` | 13.6 / 13.8 | 14.2 / 14.2 | Finite-object trace at β = −0.5 with the fixed f/2.06 iris: axial ray 13.72 mm at S10 (clipped) and 13.67 mm at S11; FIG. 1 draws the doublet with a uniform 14.25 mm rim. |
| `focusPositions[1]` | 0.08228 | 0.0818 | 0.35 m ÷ 4.2775 m calculated object-to-image distance of the β = −0.02 state. |
| `varLabels` | D12 | d12 | Patent gap name. |
| L7 glass | N-KZFS8 (Schott) | S-NBH8 (OHARA) | Exact 1.72047 / 34.7 coordinate from Canon's usual supplier. |
| L9 glass | PBH21 (OHARA; historical) | E-FDS1 (HOYA), noting PBH21 / N-SF66 | Same 923209 coordinate; current lead-free glass. apdNote no longer calls it a niobium phosphate glass. |
| L8 role | "No exact OHARA match — TAFD30 closest" | exact S-LAH65V coordinate | S-LAH65V is 1.80400 / 46.58; TAFD30 is a different glass. |
| Header / specs / focusDescription | generic SD note, "forward", f ≈ 82.4 | FIG. 1-based SD note, focus direction and d12 states, f ≈ 82.45 | Findings above. |
| Analysis | stale glass names (S-LAH58, S-TIH4, TAFD30, FD60, S-LAH65, "niobium phosphate" PBH21) | synced with data labels; added MFD / f/29 rows and keyframe conjugates | Glass check and focus calculations above. |

Checks on the result: surface validator reports no errors; image-circle check 0 undersized; exact infinity trace
reaches Y = 21.64 mm at ω = 14.42° (the patent's 14.70° is the paraxial value, tan⁻¹(21.64 / 82.45)) with no
axial clip or chief-ray block at any focus state; the β = −0.5 finite-object trace clears every surface, with the
full-field chief ray at most 16.7 mm (S24, rim 21.0). Engine: FOPEN 2.06, stop radius 13.48 mm, maxFstop 29.
Live headless render: infinity and 35 cm states draw cleanly; the focus-movement overlay shows L1 travelling 27.00 mm
toward the object with L2 fixed, matching the FIG. 1 arrows.

Open limitations: no effective diameters are published, so rims remain ray/figure estimates. The IS group is not
disclosed in this patent. Glass identities are catalog coordinate equivalents; the patent names no glass and gives
no partial-dispersion data, so both `apd` flags stay "inferred".
