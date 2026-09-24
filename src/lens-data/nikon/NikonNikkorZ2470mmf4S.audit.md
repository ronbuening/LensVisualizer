# Audit Log — NIKON NIKKOR Z 24-70mm f/4 S

Patent: JP WO2019/049372 A1, Example 1

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L21 / S4 | `glass` | `Uncertain (glass code 744495, no exact catalog match; PGM low-Tg lanthanum crown)` | `744495 — PGM low-Tg lanthanum crown (patent nd=1.74353, νd=49.5; no exact public catalog match)` | Local patent `patents/JPWO2019049372A1.pdf`, Example 1 row 4 lists nd=1.74353 and νd=49.5. The stored values match. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `744495` and the exact 1.74353 / 49.5 pair.
- No coefficient-backed exact match was found. This agrees with the earlier Nikon Z 24-70/2.8 and AF-S 24-70/2.8E dispositions for the same code family.

### Analysis sync

- Updated the L21 wording to use the code-led label and avoid an unnecessary proprietary marker.

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JPWO2019049372A1.pdf`.
- Example 1 / Table 1 rows confirmed from local patent text:
  - S2 / L12: nd = 1.75500, vd = 52.3.
  - S6 / L22: nd = 1.75500, vd = 52.3.
  - S17 / L35: nd = 1.59319, vd = 67.9.
  - S19 / L41: nd = 1.80100, vd = 34.9.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L12 / S2 | `S-LAL14 (OHARA)` | `J-LASKH2 (Hikari)` | Exact nd/vd catalog match. |
| L22 / S6 | `S-LAL14 (OHARA)` | `J-LASKH2 (Hikari)` | Same glass as L12. |
| L35 / S17 | `L-LAM60 (OHARA)` | `J-PSKH1 (Hikari)` | Exact nd/vd catalog match. |
| L41 / S19 | `S-TIH18 (OHARA)` | `J-LAF016 (Hikari)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public Hikari catalog pages/refractiveindex.info-style entries and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated the affected element notes, glass sourcing summary, ED note, and table rows.

## 2026-08-18 — Hoya M-NBF1 coefficient assignment

- Visually rechecked local `patents/JPWO2019049372A1.pdf`, PDF page 13, Example 1 / Table 1. Surface 4 remains `nd = 1.74353`, `νd = 49.5`.
- Relabeled L21 to coefficient-backed Hoya M-NBF1 as a catalog equivalent (`1.743300 / 49.326`), retaining patent code `744495`, the PGM context, and the unspecified production supplier. No geometry changed.

## 2026-09-23 — First-added diagram audit, lens 70

Source: local `patents/JPWO2019049372A1.pdf` (JP re-publication of WO 2019/049372 A1; digital text layer checked
against the rendered pages). Front page p. 1 and inventor p. 51; Example 1 text ¶0051–0061 pp. 11–13; Table 1
pp. 13–14; Fig. 1A–1C p. 38 (300 dpi raster, axis horizontal); Fig. 3 close-focus aberration plots p. 39.

### Retained after re-reading the source

- Identity: WO 2019/049372 A1, applicant Nikon Corporation, sole inventor 梅田 武 (Takeshi Umeda), international
  publication 2019-03-14. Example 1 is kept. All eight examples are 24–70 mm f/4-class designs; Examples 3–6 have
  FNo 4.09–4.28 at M, Examples 7–8 have different element counts, and Examples 1 and 2 both fit 14/11 with four
  aspheres and constant f/4. The patent does not name the production example, so the attribution stays "most likely".
- All 26 lens rows of `R`, `d`, `nd`, `νd`, the stop position (surface 10, 1.500 mm ahead of G3), the four aspheres
  (κ → K = κ − 1; 5 κ = 0, 11/22/24 κ = 1; A4–A10 signs and exponents) and the W/M/T infinity and close rows of
  D3/D9/D18/D22 match Table 1. Paraxial EFL 24.720 / 46.311 / 67.912 mm against 24.72 / 46.31 / 67.91; group focal
  lengths +125.09 / −28.96 / +39.65 / +56.05 / −51.52 mm reproduce. Element `fl` values match thick-lens values.
- Glass: all 14 stored nd/νd pairs equal Table 1 and every label resolves compatibly (L21 M-NBF1 Δnd −2.3e-4 as a
  documented catalog equivalent). No relabels.
- `closeFocusM = 0.3`: the patent prints no close object distance. With the image plane held at each station's
  infinity focus, the close rows focus 298.5 mm object-to-image at W, M and T (magnification −0.119 / −0.216 /
  −0.300), matching the production 0.30 m / 0.3×; the Fig. 3 object heights (195.48 / 97.62 / 69.67 mm for
  Y = 21.7) are consistent. Two focus states only, so no `focusPositions`.
- Focus mechanism: ¶0056 says G4 moves toward the object; D18 + D22 is conserved to 0.001 mm. Zoom labels, `var`
  keys and `varLabels` are correct.
- Rims within about 15 % of Fig. 1A were left: S1–S3 (figure 29.3 / 27.6 mm), S4 (19.4–20.1), L22 (13.8–14.1),
  L23 (13.3), L42 (12.8 vs 14.0), L51 (13.8 vs 15.0/15.5), L52 (16.5–16.7 vs 18.0/17.5). The stop symbol in the
  figure is a drawing tick, not an iris radius.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| D26 (`d` and `var`) | 15.558 / 28.486 / 36.145 | 15.013 / 27.941 / 35.599 | Stored value was the physical BF through the 1.6 mm filter, leaving the image plane 0.545 mm behind paraxial focus at every station. Now the patent's printed BF (air-equivalent) = D26 + 1.60/1.5168 + D28. Defocus 0.000 / 0.000 / −0.002 mm. |
| `zoomApertureModel` | absent (fixed 5.94 mm iris) | `"from-nominal-fno"` | FNo 4.00 at W/M/T with the stop moving in G3; the fixed wide iris gave about f/5.8 at tele. No iris diameters published; inferred radii 5.936 / 7.692 / 8.758 mm. |
| STO `sd` | 8.5 | 8.8 | Records the largest inferred iris radius (tele 8.758 mm). |
| `maxFstop` | default 16 | 22 | Production minimum aperture f/22; `fstopSeries` already listed 22. |
| 5A `sd` | 16.7 | 14.4 | Fig. 1A: L21's rear curve ends where its flat annulus starts, 59 px × 0.2423 mm/px = 14.3 mm (scale from the 437.5 px / 106.026 mm S1–S26 span; vertex crossings check to 1 px). Old rim slope 64°, new 53°; exact chief ray 12.63 mm. |
| 11A, 12 `sd` | 12.4 / 12.2 | 9.8 / 9.8 | Fig. 1A L31 rim 40 px = 9.7 mm on both sides of the axis. Axial f/4 beam 9.20 mm. |
| 13, 14, 15 `sd` | 10.8 / 10.8 / 10.6 | 9.6 | Fig. 1A L32/L33 rim 39–40 px = 9.45–9.7 mm. Axial beam 8.95 mm. Changed with L31 so G3 keeps the figure's equal-height front. |
| 16, 17, 18 `sd` | 10.0 | 8.8 | Fig. 1A L34/L35 rim 36 px = 8.7 mm on both sides; rim x-positions agree with the S16/S18 sags at 8.8 mm. Axial beam 8.24 mm. |
| 19, 20 `sd` | 13.0 / 13.5 | 11.0 / 11.0 | Fig. 1A L41 rim 45 px = 10.9 mm (lower side, inside the G4 bracket). Axial beam 7.29 mm. |
| L31 `apd` | `"inferred"` | `"patent"` | ¶0031: the low-dispersion G3 lens meeting condition (6) gives G3 anomalous dispersion; Example 1's value νd3p = 71.6835 is L31. L35 stays inferred. |
| Header | "no reversing groups"; physical-BF track 121.6–151.0 | G2 reversal and G3/G5 common motion documented; patent TL vs stored air-equivalent track | Positions from Table 1 gaps: G1 +29.44, G2 −2.20 then +1.99, G3 and G5 +20.59 (D18 + G4 + D22 = 20.04 mm constant), G4 +14.34 mm; Fig. 1A/1B arrows show the G2 reversal. |

### Checks on the result

- Surface validator: no errors. Image-circle floor: 0 undersized. Glass check: all compatible.
- Exact trace at Y = 21.7 mm reaches the image at ω = 43.28° / 23.99° / 16.66° (patent 43.3 / 24.0 / 16.7). No
  surface clips the f/4 axial beam or blocks the full-field chief ray at any station. Corner-bundle clipping per side
  at the wide end is about 13 % at 5A, 5–13 % in L31–L33, 28–52 % at L34/L35 and 43–60 % at L41.
- Engine: FOPEN 4.0 at all stations with the inferred iris; paraxial half-field 38.3° / 30.0° / 21.1° (wide limited by
  5A, previously 42.5° with the 16.7 mm rim).
- Live: production baseline at 24.72 mm compared with local 24.72 mm, 46.31 mm and 67.91 mm at infinity, 67.91 mm at
  0.3 m (stop Ø 17.52 mm at f/4), f/4–f/22 slider and the zoom-movement overlay (G1 max travel 29.44 mm). G3 and L41
  now read at the Fig. 1A proportions. Off-axis toggle not exercised (headless capture).

### Open limitations

- Iris radii are inferred from the nominal f-number, not published.
- Rims remain figure measurements or ray-trace estimates; the patent publishes no clear apertures.
- The viewer's wide-end half-field is a paraxial estimate (38.3°) below the patent's 43.3°, because it overstates the
  chief-ray height on 5A; the exact trace covers the full field.
- Example 1 versus Example 2 as the production basis is not settled by the patent.

## 2026-09-23 — Filter modeled as `rearPlates`

- Replaced the air-equivalent D26 with Table 1's physical rear stack (PDF pp. 13–14): D26 = 13.858 / 26.785 / 34.444 mm,
  then `rearPlates` FL 1.600 mm, nd 1.51680, νd 64.1 (J-BK7A), and D28 = 0.100 mm. Table 1 prints D28 as
  0.100 / 0.101 / 0.101, and `rearPlates` holds one fixed trailing gap, so the extra 0.001 mm at mid and tele is carried
  in D26 (26.786 / 34.445).
- Paraxial check against the previous data: EFL identical; defocus changes by at most 0.0009 mm (tele), the rounding in
  the patent's printed air-equivalent BF (35.599 against 34.444 + 1.600/1.5168 + 0.101 = 35.5999). Physical track grows
  by 0.545 mm and now matches the patent's 121.58–151.03 mm total length.
