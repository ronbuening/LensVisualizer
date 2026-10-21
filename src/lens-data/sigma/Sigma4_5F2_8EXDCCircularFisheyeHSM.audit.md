# Sigma 4.5mm f/2.8 EX DC Circular Fisheye HSM — audit log

## Package as received

The data and analysis files arrived in package `Sigma4_5F2_8EXDCCircularFisheyeHSM_JP2009058817A_Example3_V2_20261018`
without an audit log; this file starts the record. The package modelled JP 2009-058817 A Example 3 at infinity only,
with the image distance set to the paraxial back focus (40.86277 mm, 0.0029 mm longer than the printed BF),
`closeFocusM` as the 1e15 infinity value, inferred clear apertures and `checks.maxRimAngleDeg: 71` for surface 2.

## 2026-10-21 — Deployment validation and wording pass

### Source re-read

The patent PDF (19 pages; page 1 is the PAJ abstract, so PDF page = printed page + 1) was read directly. Front page:
JP 2009-58817 A, published 19 March 2009, application 2007-226758 filed 31 August 2007, applicant 株式会社シグマ, sole
inventor 保科 あい (PAJ: HOSHINA AI). `patentNumber` `JP 2009-058817 A`, `patentYear` 2009, `patentAuthors` `Ai Hoshina`
and `patentAssignees` `Sigma Corporation` (the form 58 other Sigma files use) agree.

Example 3 is on printed page 8 (PDF page 9), Figure 7 on printed page 14. The table has no text layer and was read from a
300 dpi render: all 23 rows of R, D, Nd and Vd were compared with the data file, with no mismatch. There are no aspheres
and no variable gaps; the stop is row 16 (R 0.0000); cemented interfaces are 7–9, 10–12, 13–15 and 19–21. ¶0028 states
equisolid projection, y = 2f sin(ω/2), for all examples.

The other examples do not fit the product: Example 1 is 10 elements / 7 groups at f 4.7017, F3.58; Examples 2 and 4 are
12/9 at f 4.3276 and 3.8948. Example 3 is the only 13/9 example (f 4.4463, F2.90, 2ω 180°).

### First-order values

| Quantity | Patent | Model |
|---|---:|---:|
| f | 4.4463 | 4.44577 (paraxial, −0.011%) |
| FN | 2.90 | 2.90 (EP radius 0.7666 on the reference f 4.4463) |
| 2ω | 180° | 180° (half-field 90°) |
| BF | 40.8599 | 40.8599 image distance; paraxial BFD 40.86277 |
| LT | 121.8599 | 121.8599 (lens track 81.0000) |
| f/Bf (1) | 0.1088 | 0.10882 |
| \|fF\|/f (2) | 0.83 | 0.8293 (fF = −3.6872 over surfaces 1–15) |
| 2/(Nd1+Nd2) (5) | 0.55 | 0.5543 |
| Vdp (3) | 81.61 | L12 νd 81.61 |

Chief rays from 0° to 90° converge and reach the image; the 90° chief lands at 6.197 mm against the ideal equisolid
6.288 mm (−1.45%). The declared `imageCircleMm` 12.576 is the ideal value.

### Maker diagram comparison

Sigma's construction diagram (https://www.sigma-global.com/lenses/45_28_specification_01.jpg) shows the same 13/9
sequence: front meniscus with a stepped flange, a second meniscus, a biconcave singlet, two cemented pairs, a small
cemented pair before the stop, then a positive singlet, a cemented pair and a rear positive singlet behind it. The
blue (SLD) element is the positive member of the rear cemented pair, L12. Heights measured on Figure 7 (about 10.4
px/mm, scaled from the 121.86 mm total length) and on Sigma's drawing (scaled from L1 at 21.5 mm): L1 front 21.8 / —;
surface 2 rear bowl 12.4 / 12.6; L2 12.2 / 12.2; L3 10.6 / 10.3; first cemented pair 7.6 / 7.6; second cemented pair
6.5 / 6.9; third pair 4.8 / 5.65; G2 7.9–8.5 / 8.0–8.5. The stored values agreed except the first two cemented pairs
(8.2 and 8.0 mm), which were larger than both drawings.

Product page (https://www.sigma-global.com/en/lenses/45_28/, discontinued): 13 elements in 9 groups, SLD glass, 180°,
13.5 cm minimum focus, 1:6, 6 blades, F22, rear gelatin filter, SA / EF / F / Pentax / A mounts, APS-C [DC]. These
match `lensMounts` (`sigma-sa`, `canon-ef`, `nikon-f`, `pentax-k`, `sony-a`), `imageFormat` `aps-c`, the blade count and
the f-stop range. Sigma announced the lens at the end of 2007; LensTip's review dates from January 2008.

### Fields changed in this pass

- Back focus: the `BF` gap is the printed 40.8599 mm (was the paraxial 40.86276762628765). Total track 121.8599 mm;
  EFL, f-number, half-field and stop radius are unchanged.
- Semi-diameters: surfaces 7, 8, 9 from 8.2 to 7.6 mm and surfaces 10, 11, 12 from 8.0 to 6.9 mm, the drawn heights.
  The f/2.9 axial marginal ray reaches 2.24–3.88 mm on those surfaces. The meridional transmission curve is identical
  before and after (1.000, 0.948, 0.875, 0.781, 0.708, 0.594, 0.573, 0.500 at 0°, 30°, 45°, 60°, 69°, 81°, 84°, 90°),
  and all chief rays to 90° still reach the image; a test at 4.0 / 3.6 mm did change both, so the check is sensitive.
  The surface validator reports no error.
- `closeFocusM`: 0.135, Sigma's minimum focus. Of 160 infinity-only primes in the corpus, 146 carry the production
  minimum focus and 14 the 1e15 value. No gap moves, so traces at the near end of the focus control are identical to
  infinity.
- L12: `apd: "patent"` with an `apdNote`. Claim 2 and conditions (3)–(4) define element LP as a positive G2 element with
  νd > 62.5 and PgF above 0.6675 − 0.002νd, Figure 7 leads LP to the rear cemented pair, and Table 1 gives PgF 0.5387
  for Example 3 (0.034 above that line). The patent therefore designates the element, so the tag is `patent` rather
  than `inferred`; it is also Sigma's SLD position.
- Element roles added for all 13 elements; header comment, `subtitle`, `specs` and focus description rewritten in plain
  language (`specs` now 13 ELEMENTS / 9 GROUPS, DESIGN f = 4.45 mm, DESIGN F/2.9, ALL SPHERICAL, EQUISOLID PROJECTION).
- Analysis: the back-focus, focus, clear-aperture and limitation sections were rewritten to match the data file; a
  description of a rejected focus trial, ray-sample counts and statements about the authoring checks were removed; the
  heading "Validation and Limits" became "Model Scope and Limitations".

The surface-2 rim (12.5 mm, 70.0° rim slope, `maxRimAngleDeg: 71`) is backed by both drawings. Under the default limit
(surface 2 capped at 11.95 mm) chief rays from about 85° outward fail to reach the image.

Open: none.

## 2026-10-21 — Final review: metadata, glass and semi-diameters

An independent re-check of the whole file against the patent PDF, Sigma's product page (re-read today) and Sigma's
section drawing.

### Semi-diameters

Figure 7 (PDF page 15) was profiled at 200 dpi on both sides of the axis. Vertex crossings give 7.42 px/mm from
surface 1 to surface 23 (601 px for 81.00 mm) and the same scale from surface 1 to the image (904 px for 121.86 mm);
surface 7 falls within 1 px of its prescription position. Sigma's drawing was scaled from surface 1 to surface 23
(about 11.9 px/mm, which also puts L1's rim at 21.5 mm). Top and bottom sides of Figure 7 agree to 1 px.

| Element (surfaces) | Stored | Figure 7 | Sigma drawing | Result |
|---|---:|---:|---:|---|
| L1 front (1) | 21.5 | 22.0 | 21.5 (scale reference) | kept |
| L1 rear bowl (2) | 12.5 | 12.4 (end of the flat at 92 px) | 12.6 | kept |
| L2 (3–4) | 12.3 | 12.3 | 12.2 | kept |
| L3 (5–6) | 10.2 | 10.5 | 10.3 | kept |
| L4–L5 (7–9) | 7.6 | 7.55 | L4 7.6, L5 flange 8.25 | kept |
| L6–L7 (10–12) | 6.9 | 6.5–6.6 | L6 6.6, L7 7.1 | kept |
| L8–L9 (13–15) | 5.5 | 4.85, one square-cut block | L8 5.05, L9 5.6 | changed to 5.0 |
| L10 (17–18) | 8.1 | 7.8 | 8.0 | kept |
| L11–L12 (19–21) | 8.1 | 8.1 | 8.25 / 7.6 | kept |
| L13 (22–23) | 8.5 | 8.6 | 8.5 | kept |

The two pairs narrowed earlier today are confirmed: 7.6 and 6.9 mm are within 1% and 5% of Figure 7, and widening
them back to 8.2 / 8.0 mm leaves the engine vignetting curve identical, while a 6.5 / 6.0 mm trial cuts 90° from 50.0%
to 36.5%, so the curve is sensitive to those rims. The third pair was 13% taller than Figure 7 and 9% taller than
L8 in Sigma's drawing, the only place where the two drawings agree that the stored value is too large. All three
surfaces are now 5.0 mm, the least reduction that matches L8 in both drawings and keeps the square-cut block Figure 7
draws. The f/2.9 axial marginal ray is 4.18 mm on surface 13 and 4.07 mm on 14–15; at 45° the full unvignetted
bundle reaches 4.90 mm on surface 13, so nothing clips there. The surface validator reports no error before or after.

The engine vignetting analysis is projection-aware and evaluates the full 0–90° range. Wide-open transmission before
→ after: 0° 100 → 100, 45° 87.5 → 87.5, 60° 78.1 → 77.1, 69° 70.8 → 68.8, 81° 59.4 → 56.3, 84° 57.3 → 54.2,
90° 50.0 → 46.9%; only surface 13 contributes. The bounding-sphere chief-ray solve converges at every angle from 0° to
90°, and the 90° chief ray lands at 6.197 mm in both versions (traced circle 12.39 mm). `audit:image-circle` passes;
`audit:field-coverage` skips fisheye projections by design. Paraxial EFL 4.4458 mm, BFD 40.8628 mm, engine f-number
2.864 at the 4.75 mm stop radius and half-field 90° are unchanged. The surface-2 rim (12.5 mm) still needs the
lens's 71° rim-slope limit; that policy value was not changed.

### Glass

All 13 labels resolve to rows equal to the printed nd/νd at the printed precision (4 decimals in nd, 2 in νd; the
largest residuals are 0.00004 in nd for E-FEL1 and E-F2 and 0.01 in νd for NBFD10). No element is `Unmatched`.
Coordinate-equal Hoya rows exist for the Schott and CDGM labels (TAF3 for 1.8042/46.50, TAF1 for 1.7725/49.62 at
νd +0.01, FC5 for 1.4875/70.44 at +0.01); the resolver's exact matches were left as they are. L12's `apd: "patent"`
stands: claim 2 and conditions (3)–(4) define element LP, ¶0023 calls its glass low-dispersion with a high partial
dispersion ratio, Figure 7 leads LP to the positive member of the rear cemented pair, and Table 1 gives Vdp 81.61 and
PgFp 0.5387 for Example 3. L10 and L13 (νd 70.44) are not tagged: the patent names only LP, and Sigma marks one SLD
element.

### Metadata

Front page (PAJ and JP page 1): publication 2009-58817 A of 19 March 2009, application 2007-226758 filed 31 August
2007, applicant Sigma Corp, inventor Hoshina Ai; `patentNumber`, `patentYear` 2009, `authors` "Ai Hoshina" (one
spelling in the corpus) and `assignees` "Sigma Corporation" (the form all Sigma files use) agree, as do the analysis
header dates. The Example 3 table (printed page 8) matches all 23 rows of the file, f 4.4463, FN 2.90, 2ω 180°, BF
40.8599, LT 121.8599. Sigma's page: 13 elements in 9 groups, SLD glass, 180°, 6 blades, F22, 13.5 cm, 1:6, mounts
SIGMA SA, Canon EF, Nikon F, Pentax and Sony A, APS-C [DC]; these match `elementCount`/`groupCount`, `aperture.blades`
6, `maxFNumber` 22, `closeFocusM` 0.135, `lensMounts` (all canonical ids) and `imageFormat` `aps-c`. `name` follows the
SIGMA prefix form of the other Sigma files, and `subtitle`, `specs`, marketing 4.5 mm / f/2.8 and design 4.4463 /
2.9 are consistent. `projection.imageCircleMm` is the ideal equisolid value 12.576 mm (displayed as 12.6 mm); Sigma
publishes no image-circle figure, and the corpus uses the ideal value for patent-derived 180° equisolid lenses such
as the Canon EF 15 mm; the traced circle is 12.39 mm.

Open: none.

## 2026-10-21 — Second review: diagram, labels and movement

The local page was shot at 2× and set beside Figure 7 (PDF page 15, the native 200 dpi raster) and Sigma's section
drawing from the package. Figure 7 was profiled again on the lower side, which has no leader lines. Vertex crossings
put surface 1 at 398 px and surface 23 at 999 px, 7.42 px/mm for 81.00 mm; surfaces 1 to 11 give 7.40 px/mm. Every
other vertex falls within 1 px of its prescription position.

### Silhouette

| Element (surfaces) | Stored | Figure 7 | Site before this pass |
|---|---:|---:|---|
| L1 (1 / 2) | 21.5 / 12.5 | 21.8 front; rear flat land from 12.3–12.5 up to the rim | pointed crescent |
| L2 (3 / 4) | 12.3 / 12.3 | 12.1–12.4 front; rear curve ends at 10.2–10.5 below a flat land | rear rim over L3's front rim |
| L3 (5–6) | 10.2 | 10.4 | matches |
| L4–L5 (7–9) | 7.6 | 7.4; L5's rear curve ends at 5.4 below a land | flat top 1.2 mm longer |
| L6–L7 (10–12) | 6.9 | 6.5 | matches |
| L8–L9 (13–15) | 5.0 | 4.7 | matches |
| L10 (17–18) | 8.1 | 7.7 | matches |
| L11–L12 (19–21) | 8.1 | 7.95 | matches |
| L13 (22–23) | 8.5 | 8.5 | matches |

One value changed. Surface 4 went from 12.3 to 10.4 mm, where Figure 7 ends L2's rear curve. On the lower side the land
runs from 76 to 89 px (10.2–12.0 mm) and on the upper side from 78 to 92 px (10.5–12.4 mm), at the column where R 20.8
reaches 10.4 mm. Sigma's drawing shows the same land, with the curve ending near 9.7 mm. At 12.3 mm the rear rim sat
1.0 mm behind L3's front rim and overlapped it on the page. Figure 7 leaves a gap there. At 10.4 mm the rim ends 0.2 mm
ahead of L3. The site now draws L2's step as a short bevel from 12.3 to 10.4 mm. The surviving meridional rays reach
10.00 mm on surface 4 at 90°, so the rim does not clip. The engine transmission curve is the same before and after:
100, 87.5, 77.1, 68.8, 56.3, 54.2 and 46.9% at 0°, 45°, 60°, 69°, 81°, 84° and 90°. The surviving ray count is also
identical at every degree from 0° to 90°. The surface validator reports no error.

Two other places differ from the figure but were left unchanged:

- L1's stepped flange cannot be drawn. The renderer joins the 21.5 mm front rim to the 12.5 mm rear rim with a straight
  edge, so L1 shows as a crescent. Surface 2 (R 13.3 mm) cannot reach the flange height.
- L5's rear land was not adopted. Figure 7 ends L5's rear curve at 5.4 mm, but rays reach 6.07 mm there at 88°. Any
  value below 7.6 mm would also turn L5's flat top into a 7 mm bevel. The flat top at 7.6 mm is the closer picture.

The drawn height order holds on the page: L1 > L2 > L3 > L4–L5 > L6–L7 > L8–L9, and L13 is the tallest element in G2.

### Labels, tags and movement

The `G1 negative` bracket covers surfaces 1–15 and `G2 positive` covers 17–23. That matches the Figure 7 brackets and
the patent's front group G1 (negative) and rear group G2 (positive). D1–D4 cover surfaces 7–9, 10–12, 13–15 and 19–21,
the four cemented interfaces of the table. Figure 7 and Sigma's drawing carry no pair labels, so D1–D4 are the file's
own consistent labels. The patent names only Lm (claim 1, the front meniscus) and LP (claim 2), so L1–L13 stay
sequential. The roles of L1 and L12 cite Lm and LP, and the patent uses "L" for nothing else. All 13 `type` strings
agree with the signs of R. There are no aspheres and no `A` labels. The stop sits between L9 and L10, where Figure 7
draws S. L12's `apd: "patent"` was re-checked: claim 2 sets conditions (3) νd > 62.5 and (4) PgF > −0.002νd + 0.6675;
¶0023 calls LP's glass low-dispersion with a high partial dispersion ratio; and Figure 7's LP leader ends on that
element. Sigma's drawing marks the same element in blue. The inspectors for elements 2 and 12 show the expected
type, glass, focal length and role.

Nothing moves. The focus slider runs from ∞ to "Not modeled", and the group-movement overlay reports no focus or zoom
movement. Engine values are unchanged: paraxial EFL 4.4458 mm, f-number 2.864 at the 4.75 mm stop radius, nominal
f/2.9, half-field 90°. The bounding-sphere chief-ray solve converges from 0° to 90°, and the 90° chief ray lands at
6.197 mm. `audit:image-circle` passes; `audit:field-coverage` skips fisheye projections by design.
`checks.maxRimAngleDeg` 71 is still needed for surface 2 and was not changed.

Open: none.
