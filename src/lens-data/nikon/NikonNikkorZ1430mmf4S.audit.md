# Audit Log — Nikon NIKKOR Z 14-30mm f/4 S

Patent: JP 2019-008031 A, Example 1 (Uehara / Nikon)
Catalog version: 8178e13

---

## 2026-05-02 — Patent audit and glass-label cleanup

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `S-BAM4 (OHARA)` | `694533 — high-index crown (patent nd=1.69370, νd=53.32)` | Patent Table 1 row 1 gives nd=1.69370, νd=53.32. Catalog S-BAM4 is nd=1.60562, so the old label forced a wrong Sellmeier match. No catalog entry within tolerance; use the patent-derived 6-digit code. |
| L12 / S3 | `glass` | `S-BAM4 (OHARA)` | `694533 — high-index crown (patent nd=1.69370, νd=53.32)` | Same patent glass as L11, Table 1 row 3. |
| L14 / S7 | `glass` | `S-TIH53 (OHARA)` | `903357 — dense flint (patent nd=1.90265, νd=35.73)` | Patent Table 1 row 7 gives nd=1.90265, νd=35.73. Catalog S-TIH53 is nd=1.84666 and does not match. |
| L21 / S9 | `glass` | `S-PHM52 (OHARA)` | `S-FPM2 class (OHARA; patent nd=1.59349, νd=67.00)` | Patent Table 1 row 9 gives nd=1.59349, νd=67.00. Current catalog S-PHM52 is nd=1.61800; S-FPM2 is the nearest catalog class in the generated candidate scan. |
| L23 / S12 | `glass` | `S-BAL42 (OHARA)` | `S-BAL14 (OHARA)` | Patent Table 1 row 12 gives nd=1.56883, νd=56.00. S-BAL14 catalog nd=1.56883 and is the generated candidate; S-BAL42 is nd=1.58313. |
| L41 / S22 | `glass` | `S-LAH51 (OHARA)` | `795453 — high-index lanthanum (patent nd=1.79500, νd=45.31)` | Patent Table 1 row 22 gives nd=1.79500, νd=45.31. Catalog S-LAH51 is nd=1.78590, outside the current mismatch tolerance. No catalog entry within tolerance. |
| L52 / S26 | `glass` | `Lanthanum flint (catalog uncertain; near S-LAH64)` | `765468 — lanthanum flint (patent nd=1.76546, νd=46.75)` | Patent Table 1 row 26 gives nd=1.76546, νd=46.75. Catalog S-LAH64 is nd=1.78800, so the old hint caused a false resolver match. No catalog entry within tolerance. |

Confirmed without data-file changes:

| Element / surface | Glass annotation | Patent value | Status |
|---|---|---|---|
| L13 / S5, L33 / S18, L34 / S20, L51 / S24 | `S-FPL51 family (OHARA)` | nd=1.49782, νd=82.57 | ED family label retained; catalog value is close and the structured `dPgF` remains an inferred family estimate, not patent data. |
| L22 / S11 | `S-LAH58 (OHARA)` | nd=1.88300, νd=40.66 | Retained; earlier follow-up had already corrected this from S-LAH66/S-LAH79-class labels. |
| L31 / S15 | `S-LAH59 (OHARA)` | nd=1.81600, νd=46.59 | Retained; earlier follow-up had already corrected this from S-LAH63. |
| L32 / S16 | `S-BSL7 (OHARA)` | nd=1.51612, νd=64.08 | Retained; BK7-class match is within tolerance. |

### Phase 2 — Retained-information audit

- Patent convention confirmed from ¶0076: positive radius means curvature center on the image side; the data file uses the same sign convention.
- All 27 surface radii, axial thicknesses, and d-line indices match JP 2019-008031 A Table 1 rows 1-27. The stop row is surface 14, with flat aperture `R = ∞` and variable spacing D2.
- Variable spacing table confirmed: D1, D2, D3, D4, Bf, and total length match the patent's wide/middle/tele values. Data-file `d` values use the wide-column infinity values.
- Overall patent summary confirmed: f=14.420/20.000/29.101, FNO=4.00/4.00/4.00, omega=57.68/46.85/35.27 degrees, Y=21.70, and group focal lengths f1=-23.297, f2=48.882, f3=26.663, f4=-37.580, f5=-1392.883.
- Aspherical surfaces 2, 4, 17, and 26 match Table 1 exactly for κ, A4, A6, A8, A10, and A12. Patent ¶0078 defines the sag equation directly with κ in the square-root term; the existing data convention remains unchanged.
- Element shape/group prose confirmed against ¶0088-¶0093: G1(-), G2(+), G3(+), G4(-), G5(-); G4 is the focusing group; G2 and G5 share the same zoom trajectory.
- Patent does not provide semi-diameters. Existing `sd` values remain author estimates documented in the file header and analysis methodology.

### Phase 3 — Spectral / metadata enrichment

- JP 2019-008031 A Table 1 provides only nd and νd for Example 1; it does not publish nC, nF, ng, PgF, or dPgF line-index data. No patent-sourced spectral fields were added.
- Existing top-level metadata was already present and confirmed: `subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, and `focusDescription`.
- Existing inferred `dPgF` fields on the four S-FPL51-family ED elements were retained as family estimates. They are not patent-sourced values.

### Phase 4 — Analysis sync

- Updated `NikonNikkorZ1430mmf4S.analysis.md` element narratives for L11, L12, L14, L21, L22, L23, L31, L41, and L52 to match the corrected data-file labels.
- Updated the glass-selection section to distinguish catalog-resolved glasses from patent-code-only glasses.
- Removed the remaining "apochromatic correction pair" wording because the patent does not publish measured partial-dispersion or line-index data for this example.

### Outstanding follow-ups

- Consider adding catalog entries only if public Sellmeier sources are found for patent codes 694533, 903357, 795453, and 765468. Until then these labels intentionally fall back to Abbe approximation using the patent's stored nd/νd.

## 2026-05-19 — Six-digit glass-code backfill review

Reviewed `patents/JP2019008031A.pdf`, Example 1 / Table 1. The rows rechecked here were L41 / surface 22 (nd=1.79500, νd=45.31, code `795453`) and L52 / surface 26 (nd=1.76546, νd=46.75, code `765468`).

Catalog-search disposition:

- Hikari J-LASF017 exactly backs `795453` with nd=1.795000, νd=45.31, and published formula-3 power-series coefficients.
- Nikon/Hikari Q-LASFPH2S backs `765468` with nd=1.765437, νd=46.75, and published formula-3 power-series coefficients. The tiny nd difference is within rounding between the patent and catalog values.

Changes made:

- Added Hikari J-LASF017 and Q-LASFPH2S to `glassCatalogData.ts`.
- Relabeled L41 and L52 in `NikonNikkorZ1430mmf4S.data.ts`.
- Updated `NikonNikkorZ1430mmf4S.analysis.md` so the lanthanum-glass discussion no longer treats those elements as unresolved code-only melts.

## 2026-09-23 — First-added diagram audit, lens 68

Source: local `patents/JP2019008031A.pdf` (JPO publication with a native text layer). Front page p. 1 (inventor
上原 健), ¶0073–¶0098 pp. 10–12, Table 1 pp. 12–14, Fig. 1 p. 29 (300 dpi raster, axis vertical, object at the
bottom). All table numbers were read off the rendered pages.

### Retained after re-reading the source

- All 27 rows of `R`, `d`, `nd` and `νd`, the stop row (surface 14), the four aspheres (κ, A4–A12), and the D1–D4/Bf
  wide/middle/tele rows match Table 1. Paraxial EFL is 14.420/20.000/29.101 mm and TL is 126.464/116.239/114.999 mm.
  The group focal lengths (−23.297/48.882/26.663/−37.580/−1392.883) reproduce. No cover glass or filter is listed,
  so `Bf` is air to the image.
- Conic convention kept at K = κ, now with evidence. Formula (a) in ¶0078 prints √(1 − κ·y²/R²), which would mean
  K = κ − 1, but the table does not follow it. With K = κ, an exact trace lands the chief ray on Y = 21.70 mm at
  46.85° and 35.27° exactly, and the f/4 longitudinal spherical aberration stays at or below 0.07 mm. With K = κ − 1
  on all four surfaces the middle station reaches only 39.85°. On S2A alone the middle reaches only 40.63°, and on
  S17A alone the tele spherical aberration grows to 0.28 mm.
- Group motion (¶0093 and the Fig. 1 arrows): from wide to tele, G1 moves toward the image and G2–G5 move toward the
  object; the stop moves with G2. The distances from the image plane, calculated from the table, confirm this. G1
  moves −11.47 mm; G2 and G5 move +14.94 mm (identical, as ¶0093 states); G3 moves +18.90 mm and G4 +18.47 mm. Every
  group moves monotonically, and only the D3 gap reverses.
- Focus: ¶0092 says G4 (L41) moves toward the image. The stored close pairs keep D3 + D4 constant and put the
  paraxial conjugate at 278.3/278.9/279.2 mm object-to-image, which matches the production 0.28 m MFD. These pairs
  are retained and labelled as calculated.
- `patentAuthors` stays "Takeru Uehara". Google Patents romanizes 上原 健 as "Takeshi". The repo's US-sourced Nikon
  lenses spell the same inventor "Takeru Uehara".

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| 1 / 2A / 3 `sd` | 22.4 / 18.3 / 16.1 | 29.2 / 22.4 / 19.3 | Fig. 1 scale 0.1004 mm/px (105.104 mm S1–S27 span = 1047 px). L11 outer rim 291 px; S2 curve ends at 223 px, where the flat annulus begins; L12 outer rim 193 px. Exact chief ray at Y = 21.70 needs 28.48 / 21.49 / 18.09 mm, so the old rims blocked the corner (`BLOCKS-CHIEF`). The 2A slope is 30.2° at 22.4 mm with no turnover. |
| 9, 10 / 11–13 `sd` | 11.6, 11.0 / 10.0 | 9.0 / 8.8 | Fig. 1 L21 89 px, L22/L23 83–86 px. The f/4 axial beam needs at most 8.40 mm. |
| 15–21 `sd` | 10.8 / 10.0 / 10.2 | 8.6 (L31/L32), 8.5 (L33), 8.7 (L34) | Fig. 1 82–87 px. The axial beam needs at most 8.09 mm. |
| 22, 23 `sd` | 12.4 | 8.9 | Fig. 1 L41 88 px. Axial 6.58 mm, chief 6.70 mm. |
| 24, 25 / 26A, 27 `sd` | 12.4 / 16.0, 16.5 | 11.0 / 11.7 | Fig. 1 L51 107–108 px, L52 115 px. Chief ray at most 10.29 mm. |
| STO `sd`, `zoomApertureModel` | 5.6, fixed iris | 8.1, `"from-nominal-fno"` | FNO is 4.00 at every station, but the fixed iris gave paraxial f/3.98 / f/4.51 / f/5.55. The inferred iris radii are 5.64 / 6.44 / 8.08 mm. The authored value records the tele radius. The Fig. 1 stop ticks (about 5.8 mm, wide state) agree with the wide iris. |
| `maxFstop` | default 16 | 22 | The production minimum aperture is f/22; `fstopSeries` already ended at 22. |
| L22 / L31 `fl` | +27.2 / +44.6 | −35.9 / −28.6 | Thick-lens values; both are negative menisci. |
| L13, L33, L34, L51 `glass` | `S-FPL51 family (OHARA)` (1.49700/81.55) | J-FKH1 (HIKARI catalog equivalent) | Table 1 1.49782/82.57 is an exact catalog match. |
| L14 `glass` | `903357 — dense flint` | J-LASFH9 (HIKARI catalog equivalent) | 1.90265/35.73 is an exact match. |
| L21 `glass` | `S-FPM2 class` (Δnd 1.7e-3) | J-PSKH4 (HIKARI catalog equivalent) | 1.59349/67.00 is an exact match. |
| L22 / L31 `glass` | S-LAH58 / S-LAH59 | J-LASF08A / J-LASF09A (HIKARI catalog equivalents) | 1.88300/40.66 (Δνd 0.03) and 1.81600/46.59 (exact). |
| L23 `glass` | S-BAL14 (νd 56.36) | N-BAK4 (SCHOTT catalog equivalent) | 1.56883/56.00; catalog 1.56883/55.98. |
| Header, `focusDescription`, roles | "Uehara Ken"; "real-ray calibration"; SD method from ray estimates; conic claim without numbers | Rewritten | The text now records the findings above. |
| Analysis | "G1 fixed in barrel"; S-FPL51/S-LAH names; asphere departures at old rims; §5, §8, §9 method text | Rewritten | G1 moves toward the image (¶0093). The group-motion table is now referenced to the image plane. Departures are recomputed at the stored rims: 2A 9.29 mm sag at 22.4; 4A +2,084 µm and 57.0° at 14.5; 17A +66 µm at 8.6; 26A −595 µm at 11.7. |

L11/L12 (694533) and L32 (S-BSL7 class) keep their labels. They resolve compatibly (Δnd 2.0e-4 and 2.1e-4), and no
exact catalog glass exists for either. Surfaces 4A–8 are within 15 % of Fig. 1 (about 14.5–15.1 mm) and are
unchanged.

### Checks on the result

- The surface validator and the image-circle check pass. No surface clips the f/4 axial beam or blocks the chief ray
  at infinity or at close focus at any station. Corner-bundle clipping in G3/L41 reaches about 36–45 % per side,
  which is ordinary ultra-wide vignetting consistent with the figure's slim relay.
- The engine's wide-end paraxial half-field estimate rises from 45.6° to 48.1°, limited by 4A. The live off-axis
  fan (28.9°) passes cleanly.
- Live: the production baseline shows a small front group with oversized G2/G3. The local page at wide infinity,
  tele close focus (28 cm) and wide off-axis now matches Fig. 1: a large L11/L12 and a slim relay, with G1
  approaching the image at tele. The aperture slider runs f/4.0–f/22.

### Open limitations

- Source conflict: at the wide end the exact trace needs ω = 59.77° to reach Y = 21.70 mm. The published 57.68° chief
  ray lands at 20.36 mm. The middle and tele ω values reproduce exactly.
- The viewer's wide half-field (48.1°) is a paraxial estimate below the published 57.68°. A rectilinear
  `projection` override is single-valued and would be wrong at tele, so none was added.
- The close-focus D3/D4 pairs and the iris schedule are calculated, not published. All rims are figure measurements,
  because the patent lists no effective diameters.
