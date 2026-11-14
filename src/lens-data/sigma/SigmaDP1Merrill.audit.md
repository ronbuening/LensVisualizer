# Sigma DP1 Merrill patent and semi-diameter audit

## 2026-11-09 — Example 4 transcription and inferred rims

Source re-read: all 20 rows on PDF pp. 14–15, both asphere tables, Fig. 10 (PDF p. 25) and Sigma's catalog drawing. Kept as printed: 18.82 mm / F2.89 with no scaling, nine elements in eight groups, the stop at 6.10 / 2.20 mm, the 1.20 mm filter plate and the 4.9327 mm image gap. Example 4 is a probable match, not a confirmed factory prescription; Examples 3 and 7 remain alternatives. Infinity only.

Fig. 10 at 400 dpi: first to last vertex 608 px = 39.85 mm (15.257 px/mm). First outline readings were 12.1, 9.2, 6.9, 6.9, 8.3, 9.1, 9.3, 11.2 and 14.4 mm. S4 and S15 are drawn with flat lands. S4's clear radius of 5.2 mm is at the rim-slope limit; its blank stays at the drawn 9.2 mm. The cemented pair's 6.1 mm rims respect the S7 radius and the slope limit.

First attempt rejected: 9.3 mm clear radii on S14 and S15 give 8.969 mm of combined sag across the 6.63 mm gap, so the figure is schematic there; this is not an error in the prescription. Adopted: L7 at 7.8 mm on both faces and S15 at 7.8 mm clear on an 11.2 mm blank, inside the default 90 % gap bound of 7.880 mm. No gap-sag override and no prescription change.

Result: the stop (radius 3.4101 mm) limits the axial beam at F2.89; the iris stays in air over its full travel; no image-circle shortfall; the chief ray clears the format corner. At the patent's 37.59° edge about two-thirds of the f/2.89 beam passes the rims. The drawn section agrees with Fig. 10 in topology and lands; L7 is drawn lower than in the figure because the figure's height cannot be built. Chromatic MTF was then blocked by the unlabelled νd 95.1 glass (closed in the cleanup pass below).

## 2026-11-09 — Deployment validation

Independent check against JP 2013-137377 A Example 4 (PDF pp. 14–15): 18 surfaces plus the stop, both aspheres
(K, A4–A10), the filter and the 4.9327 image gap agree; scale 1. Engine EFL 18.821, F/2.89, BF 4.9326, TL 46.98;
group focal lengths and the three condition values reproduce. Front page: Sigma Corporation, inventor Atsushi
Yamazaki. Attribution: the DP1 Merrill lens is 9 elements / 8 groups with one FLD and two moulded aspheres; all
nine nd/νd pairs are exact Hoya rows including FCD100, and Example 4's symmetric biconvex last element matches
Sigma's catalog drawing better than Examples 2, 3 and 7.

Deployment change: none.

Open: glass labels (Hoya names); the 0.2 m close focus has no focus data; wording. (All three closed in the
cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten in plain English with the same facts. `subtitle` "JP 2013-137377 A Example 4 —
probable DP1 Merrill family" → "JP 2013-137377 A, Example 4 — probable match to the 2012 DP1 Merrill lens". `specs`
now read 9 ELEMENTS / 8 GROUPS, DESIGN f = 18.82 mm, DESIGN F/2.89, 2 ASPHERICAL SURFACES / 2 ELEMENTS and 1 FLD
ELEMENT (the 2ω line was dropped). `catalog.closeFocusM.marketing` 0.2 added from Sigma's specification page. Focus is
static: `focus.closeFocusM` 0.2 → 1e15, since the patent prints only the infinity state and the 0.2 m value had no
focus data behind it; the description now says so in plain words. Group labels L1 / L2 → G1 / G2, as in the DP2 and
DP3 Merrill files, so they no longer collide with the element names. Roles added to all nine elements.

Glass. All nine "Unmatched" labels became Hoya catalog equivalents. Each row equals the patent's nd and νd (TAF1 by
0.01 in νd), and each label resolves to its row: TAFD30, FCD100, TAF3, E-FD15, TAF1, M-TAF401, E-F5, E-FEL2 and
M-LAC130. Element 2 is tagged `apd: "inferred"` because Sigma lists one FLD glass and its drawing marks that position;
FCD100's catalog θgF is 0.5336, about +0.050 above the normal line. With FCD100 resolved, the spectral-MTF blocker
for νd 95.1 is gone; only the patent's filter plate still uses an nd/νd estimate.

Analysis. Removed package and process material: custody notes, test and sample counts, grid sizes, best-focus
diagnostics and the statement that C/d/F MTF is unavailable. Added the product facts (September 2012 release, Sigma's
construction and special glasses, 0.2 m and 1:8.4), the attribution with its caveats and the comparison with the
other eight examples, the catalog-drawing comparison, focal lengths for each element, the glass table, the patent's
asphere form, and the five conditional expressions with model values (−0.442, 0.529, 1.175, 1.608, 1.046).

Engine, before → after: EFL 18.8212, F/2.89, half-field 32.11°, stop radius 3.4101 mm, paraxial back focus 4.9326 mm
and total length 46.9827 mm, all unchanged; only `closeFocusM` changed. Surface audit OK; the aperture audit finds no
rim limit.

Open: the diagram's default half-field is 32.11° because S15's 7.8 mm clear radius sets the paraxial limit, while the
real chief ray clears to the patent's 37.59° (7.55 mm at S15). Rims were left as they are in this pass. (Partly
closed in the semi-diameter pass below: 33.73°; the rest needs a declared projection field.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/JP2013137377A.pdf`, PDF p. 25, Fig. 10 (Example 4), a 400 ppi CCITT raster, measured at 400 dpi with
the axis on row 1649. Axial scale: vertex crossings at x = 1748 (S1) and 2355 (S18) give 607 px for 39.85 mm,
15.23 px/mm; S6, S8, S12, S14, S15 and S17 land within 0.15 mm of their prescription positions. Height scale:
17.0 px/mm, not the axial one. Four independent checks agree: the image-plane line is 242–243 px high for the printed
14.20 mm image height (17.1); the S4 arc (R 5.79) fits at 17.0 and is impossible at 15.23; the S7 junction (R −6.84)
fits at 16.5–16.7; and the S17 asphere's sag at its drawn rim (23 px) matches the polynomial at 12.9 mm. The figure is
therefore drawn about 12 % taller than it is long. The first section above read heights at the axial scale, which
made every rim about 11 % too large and made L7 and L8 look as if they overlapped; at the true height scale they meet
without crossing, so the figure is not schematic there.

Readings (px at 17.0 px/mm), with the overlay confirming that every drawn arc follows the prescription to its rim:

| Surface | Before | Figure | After | Evidence |
|---|---|---|---|---|
| S1 | 12.1 | 184–185 px = 10.8–10.9 | 10.8 | S1 meets the outer edge at x = 1792, matching R 22.61 at 10.8 |
| S2 | 12.1 | clear 150.6 px = 8.86, land to 184 px | 8.9, land 10.8 | vertical land behind L1 at x = 1807 |
| S3 | 9.2 | 139 px = 8.2 | 8.2 | S3 meets the flat top at x = 1834, matching R 14.81 at 8.2 |
| S4 | 5.2, land 9.2 | clear 86–88 px = 5.1–5.2, land to 139 px | 5.2, land 8.2 | slope limit 5.21 kept |
| S6–S8 | 6.1 | 104–105 px = 6.1–6.2 | 6.1 (kept) | square-cut pair, within noise |
| S9, S10 | 8.3 | 125 px = 7.35 | 7.4 | flat run 2055–2074 matches both sags |
| S11, S12A | 9.1 | 138 px = 8.1 | 8.1 | flat run 2097–2123 matches both sags |
| S13 | 7.8 | 141 px = 8.3 | 8.3 | L7's outer edge, above L6 as drawn |
| S14 | 7.8 | clear 133 px = 7.8, land to 140.6 px | 7.8, land 8.3 | short land behind L7 (800 dpi crop) |
| S15 | 7.8, land 11.2 | clear 140.6 px = 8.27, land to 170–171 px | 8.3, land 10.1 | S15 ends at L7's corner |
| S16 | 11.2 | 171 px = 10.06 | 10.1 | S16 meets the flat top at x = 2256 |
| S17A, S18 | 14.4 | 219 px = 12.9 | 12.9 | flat run 2317–2342 matches both sags |

Most rims fall by 10–11 %: one scale correction, with element proportions unchanged. L7 and S15 rise 0.5 mm to the
figure; with L6 at 8.1 mm, keeping L7 at 7.8 would have reversed the drawn step between them. S14's land plane and S15
at 8.3 mm are 0.30 mm apart and do not cross; the cross-gap check counts 6.327 mm of the 6.630 mm gap, so
checks.gapSagFrac 0.96 is the smallest two-decimal value that admits them. No asphere approaches a turnover:
`--scan` shows S17A monotonic to 14.4 mm and S12A to 9.1 mm.

Clearance and light: no CLIPS-AXIAL or BLOCKS-CHIEF at Y = 14.2 mm; the stop still limits the axial beam at F2.89;
image circle and field coverage unchanged (37.5° reaches the 14.18 mm corner, clear). Corner transmission against
the starting rims is unchanged at every field to 34.7° (86.2 % there) and rises from 66.6 % to 78.7 % at 37.5°,
because of the wider S15; no cut costs light, and the cemented pair's rear face now limits the edge field. Engine:
EFL 18.8212 mm, F/2.89 and stop radius 3.4101 mm unchanged; half-field 32.11° → 33.73°.

Maker drawing (second check): Sigma's catalog drawing has the same nine elements in eight groups, the flanged L2,
the facing L7–L8 pair with L8 taller and stepped, and L9 the tallest element. It shades L2 (FLD) and L6 and L9
(moulded aspheres). It draws L4 taller than L3 and L7 relatively taller (0.87 of L1, against 0.77 here) and shows no
land behind L1; the patent figure governs.

Open: the engine's diagram half-field (33.73°) is still a paraxial S15 limit below the patent's 37.59°, and no rim the
figure allows can lift it (it would need S15 at about 9.6 mm, past where L7 and L8 meet). Declaring the patent's field
as a rectilinear projection (fullFieldDeg 75.18) would set it directly; that field is outside this pass. (Closed by
the field-angle section below; the diagram's off-axis fan is covered in the second review.)

## 2026-11-09 — Field angle

`projection` now declares the patent's printed field (2ω = 75.18°, half-field 37.59°) as rectilinear `fullFieldDeg` /
`maxTraceFieldDeg`. The rims alone let the engine's default field search reach only 33.73°, although the traced chief
ray reaches the 14.20 mm image height at 37.59° and 79 % of the f/2.89 beam passes there. Optics unchanged;
audit:surface, image-circle and field-coverage pass.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the live page (infinity; the lens is static) with Fig. 10 on PDF p. 25 at its proven scale, re-measured
today: S1 and S18 cross the axis at x = 1748 and 2355 (607 px for 39.85 mm, 15.23 px/mm), and the image-plane line is
243 px high for the printed 14.20 mm (17.1 px/mm). The overlay of the file's rims on the figure still follows every
drawn arc to its rim. On the page, G1 and G2 show their rear lands, the cemented pair is square, G7 squares out at
8.3 mm above G6, G8 steps out in front, and G9 is the tallest. The height order G1 > G2 > pair < G5 < G6 < G7 < G8 < G9
matches the figure. No rim changed.

Lands and cuts: every cut and the four lands (S2, S4, S14, S15) cost 0.0 points against the pre-SD rims at every
field. Each land removed alone also costs 0.0. The worst loss is 0.0, and the edge field gains 12.1 points
(66.6 % → 78.7 % at 37.5°). All verdicts from the semi-diameter pass stand.

| Change | Before | After | Evidence |
|---|---|---|---|
| Element `name` | L1–L9 | G1–G9 | The patent names the elements G1–G9 (¶0058–0059) |
| `groups` text | G1, G2 | L1, L2 | The patent names the groups L1 and L2 in Fig. 10 and ¶0058–0059; the ranges (S1–S12A, S13–S18) are unchanged |
| `focalLengthMm` | absent (inspector showed "FL = —") | 55.74, −22.44, 8.32, −10.08, 33.30, 22.32, −34.73, −41.20, 67.63 mm | paraxial element focal lengths |

Checked and correct:
- Element `type` strings agree with the signs of R and the patent's ¶0058–0059 wording.
- Only S12 and S17 carry the A suffix and an asphere.
- The stop sits between G2 and G3.
- The cemented bracket D1 spans S6–S8.
- `apd: "inferred"` sits only on G2, Sigma's FLD position.
- Movement: the lens is static, the focus overlay reports no group movement, and the slider reads "Not modeled".

The declared projection makes the engine half-field 37.59°. The diagram's off-axis fan is drawn at 0.6 × 33.73 =
20.24°, because its scale uses the tracing half-field (the paraxial S15 limit). The real chief ray clears at 37.59°.

Colour and aberrations, compared with Fig. 11 on PDF p. 25:
- On-axis focus, relative to the d paraxial focus, at full pupil: model d −0.017, C +0.009, g +0.091 mm. The plot
  reads d and C within −0.03 to +0.01 mm and g at about +0.10 mm.
- Paraxial: model C +0.034, g +0.018 mm, both inside the plot's ±0.03 mm bundle.
- Edge astigmatism: model ΔS −0.18, ΔM −0.02 mm; plot about −0.16 and −0.02 mm.
- Distortion: model −2.03 %; plot about −2.0 %.

All agree within the reading error. Engine values are unchanged: EFL 18.8212 mm, F/2.89, half-field 37.59°, stop
radius 3.4101 mm.

Open: the patent's filter plate (nd 1.52301, νd 58.59) carries no `glass` label. HOYA C12 (1.52307 / 58.64) is
within the exact-match window, and labelling the plate with it would put every medium on a catalog curve.

## 2026-11-09 — Filter plate glass

The filter plate F (printed 1.52301 / 58.59) now carries `glass: "C12 (HOYA catalog equivalent; production supplier
unspecified)"` (catalog 1.52307 / 58.64, inside |Δnd| ≤ 0.0001 and |Δνd| ≤ 0.15; confirmed with trylabel), so no medium
in the lens uses an estimated dispersion.
