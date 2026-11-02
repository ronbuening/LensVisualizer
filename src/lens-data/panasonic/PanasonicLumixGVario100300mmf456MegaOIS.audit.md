# Panasonic LUMIX G VARIO 100-300mm f/4.0-5.6 MEGA O.I.S. — Audit

## Package audit (condensed from the original package, 2026-10-13)

The original package (`original-v1`) transcribed US 8,451,542 B2, Numerical Example 1 (Tables 2–6, Fig. 1), for the
original H-FS100300. It held only the three printed infinity stations. What follows keeps the findings that still apply.
The package's process records (stage gates, hashes, verifier counts, archive manifests) are not repeated here.

- **Extraction and conventions.** Native d-line nd/νd, millimetres, spherical and plane surfaces only. Surfaces 2 and 8
  are real plane glass exits; 14 is the only stop. BF is the air distance from surface 30 to the image; there is no
  cover plate. There is no rescaling, no added asphere or plate, and no invented close-focus state. Table 3's middle
  station is kept although the description of Fig. 1 defines the middle position as the geometric mean of the end
  focal lengths.
- **Focus direction.** An early intake note had the focus direction wrong. The patent text and the Fig. 1 arrow both
  move G2 toward the object for close focus, and the patent supplies no displacement.
- **Rims.** A first 7.0 mm G4 rim made the S21 and S22 sags overlap (intrusion fraction 1.209) and was rejected. 6.05 mm
  passes the default 0.90 guard at 0.887. The minimum glass thickness is 0.80 mm and the largest rim slope 35.5°.
- **Glass.** Labels were chosen from six vendor catalogs by nd/νd. J-SF8 and J-SF03 are named explicitly so that the
  ambiguous "SF8" / "SF03" aliases do not resolve to other vendors' glasses. TAFD35 sits at the Abbe-rounding boundary
  of the printed 35.2. The labels are spectral equivalents, not supplier identifications.
- **Aperture control.** The control ceiling was corrected from the inherited f/16 to F22, the manual's minimum
  aperture.
- **Source comparisons.** Computed EFL 102.716989 / 174.182509 / 290.286073 mm. The paraxial focus lies −0.001864 /
  −0.003159 / −0.006038 mm from the printed image plane, consistent with source rounding. Table 6's middle G4
  magnification reads 49.44138 (an earlier misreading of 49.41138 was corrected) and computes as 49.372484. Printed
  values are kept.
- **Interpolation.** Straight interpolation of the printed spacings left up to 3.19 mm of paraxial focus drift at
  zoomT 0.80. At that point the package stored only the three printed stations.
- **Rays.** Exact skew-ray samples at the three printed stations passed every axial ray and every field chief ray.
  Edge-of-field off-axis bundles are partly vignetted.

## 2026-10-23 — Connected-zoom conversion (package v2)

The v2 package added 98 derived zoom stations between the printed rows (101 in all; printed rows at stations 0, 50 and
100). D19, D24 and BF interpolate linearly in the zoom coordinate between printed rows. An equal-and-opposite
correction to D5 and D8 moves G2 alone; it is solved by bisection on the paraxial rear-focus position so that the
focus error follows the linearly interpolated printed residuals. The maximum G2 shift is 0.6045 mm toward the object at
zoomT 0.78 (EFL 230.56 mm). Interior station focal lengths are the computed EFLs, and interior f-numbers interpolate
the printed values. No surface, glass or printed spacing changed. The focus keyframes stay identical, so no focus
travel is modelled.

## 2026-10-24 — Deployment validation

Source re-read from `patents/US8451542B2.pdf` (24 pp.; Example 1 on p. 20, cols. 11–12, from a 200 dpi render).

- **Front page.** US 8,451,542 B2, granted 28 May 2013. Application 13/183,445, filed 15 July 2011. Priority JP
  2010-160378 (15 July 2010) and JP 2011-124618 (2 June 2011). Inventors Tsuneo Uchida and Koji Hoshi; assignee
  Panasonic Corporation, Kadoma-shi.
- **Prescription.** All 30 surface rows (R, d, nd, νd) and the 15 printed variable spacings (D5, D8, D19, D24, BF at
  wide, middle and tele) match the data file with no differences. There are no aspheres. Element focal lengths agree
  with Table 4 to 0.01 mm, and unit focal lengths with Table 5 to 0.001 mm.
- **First order.** Computed EFL 102.7170 / 174.1825 / 290.2861 mm against the printed 102.7209 / 174.1910 / 290.3070.
  The longitudinal spherical-aberration misprint screen is small at every station (under 0.05 mm), so there is no
  sign of a misprint. The derived stations keep the paraxial focus within 0.0016–0.0061 mm of the printed image plane
  (after the 2026-10-24 rounding below).
- **Derived cam check.** Only D5 and D8 differ from linear interpolation, and always by an equal and opposite amount
  (maximum 0.6045 mm). D19, D24 and BF are exactly linear between printed rows. The published flags mark stations
  0, 50 and 100 only. This is the same kind of solved intermediate cam as other accepted zooms (Olympus M.Zuiko
  75-300, Olympus ZD 90-250, Nikon 50-300). No printed value is fitted, so the file is not a fitted prescription.
- **Example choice.** Example 1 is the only one of the four examples that matches Panasonic's "17 elements in 12 groups
  (1 ED lens)". It has five cemented pairs and one nd 1.49700 / νd 81.6 element (L3). Examples 2 and 3 carry three such
  elements and Example 4 carries four. The camera embodiment (Embodiment 5, col. 9) names Embodiment 1.

Production evidence:

- **Manual.** Panasonic VQT2Z58 operating instructions, read 2026-10-24 from
  https://help.na.panasonic.com/wp-content/uploads/2023/02/HFS100300_VQT2Z58_ENG_ESP.pdf. Page 11 gives f = 100–300 mm,
  F4.0–5.6, F22, seven circular blades, 17 elements in 12 groups (1 ED lens), 1.5 m minimum focus, 0.21×, a 67 mm
  filter, 73.6 mm diameter, 126 mm length and 520 g. The page stamps carry 17 August 2010.
- **Support page.** Panasonic's H-FS100300 support page gives the same figures.
- **Announcement.** DXOMARK records the announcement as September 2010, after the July 2010 priority date.
- **Construction diagram.** No manufacturer construction drawing was located in this pass. The package cites a
  Panasonic catalog mirrored on lens-club.ru, which was not opened. The match rests on counts, glass type and
  mechanism: inner-focus G2 and decentring G4 for MEGA O.I.S.
- **Later model.** The H-FSA100300 (2016) also lists 17 elements in 12 groups with one ED lens. It is not identified
  with this example.

## 2026-10-24 — Rim check against Fig. 1

Measured on Fig. 1(a) (wide, infinity) from the 300 dpi CCITT raster on PDF page 2 with `figprofile.mjs`. The axis is
at y = 1208.5 px. Readings are taken on the lower side, ignoring the d5/d8/d19/d24 leader lines. Scale: S1 vertex at
x ≈ 1040 px and the image plane at 1957 px span 142.4843 mm, giving 0.1554 mm/px. Check: S6 is predicted at 1337.6 px and
measured at 1338 px.

| Surfaces | Element(s) | sd (file) | Figure (mm)            | Decision        |
| -------- | ---------- | --------: | ---------------------- | --------------- |
| 1–2      | L1         |      26.3 | 26.1 (168 px)          | kept            |
| 3–5      | L2+L3      |      25.9 | 24.9–25.5 (160–164 px) | kept            |
| 6–8      | L4+L5      |      11.3 | 10.7–11.3 (69–73 px)   | kept            |
| 9–13     | L6–L8      |       8.2 | 7.8 (50 px)            | kept            |
| 15–19    | L9–L11     |       8.7 | 8.1–8.7 (52–56 px)     | kept            |
| 20–24    | L12–L14    |      6.05 | 6.4–6.5 (41–42 px)     | kept; see below |
| 25–26    | L15        |       8.7 | 8.4 (54 px)            | kept            |
| 27–30    | L16, L17   |       8.7 | 8.9 (57 px)            | kept            |

Every rim is within about 6 % of the drawing, inside the noise band of the SD procedure, so no rim was changed. G4 is
drawn about 6 % larger than modelled. `npm run -s audit:surface` with G4 at 6.4 mm fails the S21→S22 gap: the
combined sag is 2.08 mm, the whole 2.0804 mm air space, so the faces would touch. At 6.2 mm it still
fails. 6.05 mm is kept.

Clearance with the file's rims: no surface clips the axial beam at the printed f-numbers or blocks the chief ray to
10.815 mm (`clearap.mjs`, all 101 stations). The engine's geometric transmission at the printed half-field is about
61 / 60 / 52 % at wide / middle / tele. It is limited by S30, S24 and S23 at wide and by S1–S4 at tele. The surface
validator passes.

## 2026-10-24 — Pre-deploy fixes

No R, d, nd, νd or printed spacing changed. No rim changed.

- **Header comment.** New block covering the source and correlation, the derived-cam construction, focus, stop, rim
  basis and glass labels.
- **Strings.**
  - `subtitle`: "US 8,451,542 B2, Numerical Example 1 — qualified production correlation".
  - `specs`: element/group count, design focal length and F-number, design 2ω, all spherical, and one ED element per
    the maker. The process wording is removed.
  - `focus.description` now describes G2 inner focus, the infinity-only data and the derived cam in reader language.
  - Element `label` is "Element N", and each element has a `role`.
  - Cemented-pair names use the "L2+L3" form.
- **Glass labels.** Labels now read "NAME (vendor catalog equivalent; production supplier unspecified)" in place of
  "class (coordinate-compatible spectral proxy; supplier unproven)". The same catalog entries are used: FK5 (Sumita),
  J-SF8 and J-SF03 (Hikari), FCD1, E-F2, FDS18, TAFD25, BSC7 and TAFD35 (HOYA), S-LAH66 (OHARA), N-SK5 (Schott). All 17
  resolve OK-compatible in `glasscheck.mjs`. L3 is marked `apd: "inferred"` (the one ED element; the FCD1 catalog
  dPgF is +0.032). The rest are `apd: false`.
- **Aperture.** `fStops` is now [4.11397, 5.6, 8, 11, 16, 22]; the two printed f-numbers above wide open are removed
  from the stop list. `blades: 7` comes from the manual.
- **Stations.** The first and last stations are labelled "Wide" and "Tele".
- **Source errata.** One unresolved erratum records the geometric-mean middle position (172.686 mm) against Table 3's
  174.1910 mm.
- **Rounding.** Derived interior zoom values are rounded: focal lengths and gaps to 0.0001 mm, f-numbers to 0.00001.
  The paraxial focus error across all 101 stations moved from 0.0019–0.0060 to 0.0016–0.0061 mm.
- **Formatting.** JSON-style quoted keys were converted to TypeScript and the file run through Prettier. Size went
  from 60.6 KB to 41.5 KB.
- **Analysis.** The analysis was rewritten to LENS_ANALYSIS_SPEC.
  - The empty Aspherical Surfaces section is removed, since the lens is all-spherical.
  - Process language (verification counts, MTF convergence logs, package status words) is removed.
  - The production evidence now cites the manual, the support page and the announcement date, plus the
    example-uniqueness argument.
  - Element roles, glass and condition tables are added, along with an honest description of the derived cam.

After the edit all 30 surfaces and the printed spacings still match the patent exactly, printed-station EFL and back
focus are unchanged, and the axial bundle and chief ray clear every rim.

## Open issues

- **Factory cam.** The intermediate zoom path is derived. Panasonic's cam is unknown, and the path changes slope at
  the middle station.
- **Focus.** Close focus is not modelled because the patent prints infinity states only. 1.5 m is the production
  value.
- **O.I.S.** The decentred G4 state (0.454 mm at tele for 0.3°, Table 1) is not modelled.
- **Construction diagram.** No manufacturer construction drawing was compared in this pass.
- **Glass.** The glass names are catalog equivalents. The production supplier is not established.

## 2026-10-24 — Semi-diameter pass against the patent figure

An independent re-measurement of Fig. 1 on PDF page 2 (sheet 1 of 13) of `patents/US8451542B2.pdf`. The sheet is a
2560 × 3300 px, 300 dpi CCITT raster. Readings were taken with `figprofile.mjs` at native resolution, and the G4 rim
was checked by eye on 1200 and 2400 dpi renders. Panel (a) (wide, infinity) governs. Panel (c) (tele) was used as a
cross-check.

**Scale.** The panel (a) axis is the 1205–1209 px ink band, centred near y = 1207. Vertex crossings within 12 px of
the axis put S1 at x = 1040, S6 at 1338, S13 at 1452, S20 at 1725, S30 at 1858 and the image plane at 1958. These
match the wide prescription to 1 px at 0.1554 mm/px (S1 to image, 142.484 mm over 917 px). The S1 → S30 span
(127.064 mm over 818 px) gives 0.1553 mm/px. Panel (c) is drawn at the same scale: S1 at 662 and the image at 1958 px
span the 200.835 mm tele track, which gives 0.1550 mm/px.

**Rims.** Readings are outer-ink heights on the lower side of (a), with the upper side and panel (c) used where the
d5/d8/d19/d24 leaders interfere. The figure column subtracts about 1 px of line half-width.

| Surfaces | Element(s) | sd (file) | Figure (a) px → mm         | Panel (c) mm | Ratio file/figure | Decision |
| -------- | ---------- | --------: | -------------------------- | ------------ | ----------------- | -------- |
| 1–2      | L1         |      26.3 | 169–170 → 26.2             | 25.8         | 1.00              | kept     |
| 3–4      | L2         |      25.9 | 165 → 25.5                 | 25.4         | 1.02              | kept     |
| 5        | L3 rear    |      25.9 | 161 → 24.9                 | 24.8         | 1.04              | kept     |
| 6–7      | L4         |      11.3 | 74 → 11.3                  | 11.2         | 1.00              | kept     |
| 8        | L5 rear    |      11.3 | 70–71 → 10.8               | 10.8         | 1.05              | kept     |
| 9–13     | L6–L8      |       8.2 | 50–52 → 7.9                | 7.8          | 1.04              | kept     |
| 15–16    | L9         |       8.7 | 56–57 → 8.7                | 8.8          | 1.00              | kept     |
| 17–19    | L10+L11    |       8.7 | 53–55 → 8.3                | 8.4          | 1.05              | kept     |
| 20–24    | L12–L14    |      6.05 | 42.6 / 42.9 line centre → 6.64 | 6.6      | 0.91              | kept; see below |
| 25–26    | L15        |       8.7 | 53–55 → 8.2                | 8.3          | 1.06              | kept     |
| 27–28    | L16        |       8.7 | 55 → 8.4                   | 8.7          | 1.03              | kept     |
| 29–30    | L17        |       8.7 | 58 → 8.9                   | 9.1          | 0.98              | kept     |

Every rim except G4 is within 6 % of the drawing, so no value changed. The earlier same-day rim check reached the
same conclusion for these elements.

**G4.** The drawing gives G4 one square-cut rim height for all three elements. A continuous bottom edge runs from the
L12 rim to the L14 rim, with a short bridge where the L12 rear face and the L13 front face meet. Measured to the line
centres of the top and bottom rim lines, G4 is 6.64 mm in panel (a) and about 6.6 mm in panel (c). The file's
6.05 mm is 9 % below the drawing. The earlier check had read 6.4–6.5 mm from the outer ink on one side only.

The physical ceiling is lower than the drawing. The S21 (R 13.1034) and S22 (R −50.373) sags add up to the full
2.0804 mm air space at 6.41 mm. The combined sag is 1.943 mm at 6.2 mm (0.934 of the gap), 2.009 mm at 6.3 mm
(0.966) and 2.0775 mm at 6.4 mm (0.9986). At the default `gapSagFrac` of 0.90, the validator refuses every value from
6.2 mm up. It does so only on this pair, and only at the tele-end stations it lists. No other gap or edge check binds:
the D24 gap narrows to 1.07 mm at tele but opens outward.

The rays support a higher rim. With the rims stored now, G4 is the corner-vignetting limit at wide. The unvignetted
full-field bundle reaches 7.8–8.4 mm on S20–S24, and the axial marginal ray reaches 5.27 mm at S20. Engine
transmission at the edge of the field rises with G4:

| G4 rim  | Wide, 6.0° | Middle, 3.5° | Tele, 2.1° |
| ------- | ---------: | -----------: | ---------: |
| 6.05 mm |     60.4 % |       59.9 % |     52.6 % |
| 6.3 mm  |     64.6 % |       63.0 % |     55.2 % |
| 6.4 mm  |     66.1 % |       64.6 % |     56.3 % |

Two settings were tried on scratch copies that set `checks.gapSagFrac`. G4 at 6.3 mm with 0.97 gives
"OK — no validation errors" in the surface validator. G4 at 6.4 mm with 1.00 also passes, but leaves only 3 µm at the
rim. Neither setting makes any surface clip the axial beam or block the chief ray.

This pass may change only `sd` values, so it left the 6.05 mm rim in place. The coordinator can choose between two
options, both applied to S20–S24:

- **6.3 mm with `gapSagFrac` 0.97.** This is the smallest raise that brings G4 within 5 % of the drawing, and 0.97 is
  the smallest two-decimal value that admits it.
- **6.4 mm with `gapSagFrac` 1.00.** This is the literal drawn contact.

**Clearance with the stored rims.** Over all 101 stations, `clearap.mjs` finds no clipped axial beam at the printed
f-numbers and no chief ray blocked to 10.815 mm. `built.mjs` reports a wide-end EFL of 102.717 mm, FOPEN 4.11397, a
stop radius of 6.80 mm and a 6.51° engine half-field. The image-circle check finds nothing undersized, traced field
coverage is 100 % at every station, and the surface validator passes.

**Live check.** The local app was viewed at 102.7, 174.2 and 290.3 mm. Focus is infinity-only, so the closest-focus
view is the same as infinity. At all three focal lengths the rendered silhouette matches Fig. 1 in proportion. G4
renders a little shorter than the drawing, consistent with the 9 % noted above.

**Maker diagram.** No manufacturer construction drawing has been compared, as the earlier deployment section records.
The count agrees with Panasonic's 17 elements in 12 groups with one ED element, which is L3, element 3 front to rear.
There are no aspheres.

**Open limitations.** The G4 rim stays 9 % under the drawing until the coordinator makes a `gapSagFrac` decision.
The figure cannot settle G4's rim more finely than about 0.15 mm (1 px).

## 2026-10-24 — G4 rim applied with a gap-sag allowance

The semi-diameter pass above recommended its option 1, which is now applied: surfaces 20–24 go from 6.05 to 6.3 mm
(Fig. 1 draws G4 square-cut at about 6.6 mm). The L12 rear and L13 front faces meet across their 2.08 mm air gap at
6.41 mm, and at 6.3 mm their combined sag uses 0.966 of the gap, so `checks.gapSagFrac` is set to 0.97, the smallest
two-decimal value that admits the rim. The surface validator passes, no axial bundle or chief ray clips at any station,
and edge transmission at the printed half-field rises from about 60 / 60 / 53 % to 65 / 63 / 55 % at wide / middle /
tele.

## 2026-10-24 — Second review: diagram, labels and movement

An independent look at the lens as the local site renders it, compared with Fig. 1 (sheet 1 of 13, PDF page 2) and the
Embodiment 1 text of `patents/US8451542B2.pdf`. The site was shot at 102.7 and 290.3 mm, with both movement overlays
and with the inspector open on L3, L13 and L16.

**Silhouette.** Both sides of Fig. 1(a) were profiled at 300 dpi (axis y = 1207 px, 0.1554 mm/px). The upper side
reads 2–5 px lower than the lower side, so half-heights below are the mean of the two sides where both are clean.

| Element(s) | sd (file) | Figure (a) | Ratio | Visible difference on the site |
| ---------- | --------: | ---------- | ----: | ------------------------------ |
| L1         |      26.3 | 26.2       |  1.00 | none                           |
| L2         |      25.9 | 25.4       |  1.02 | none                           |
| L3 rear    |      25.9 | 24.8       |  1.04 | drawn with a slight step below L2; site squared |
| L4         |      11.3 | 11.3       |  1.00 | none                           |
| L5 rear    |      11.3 | 10.6–10.8  |  1.05 | drawn with a slight step below L4; site squared |
| L6–L8      |       8.2 | 7.8        |  1.05 | none                           |
| L9         |       8.7 | 8.7        |  1.00 | none                           |
| L10+L11    |       8.7 | 8.3        |  1.05 | L9 drawn a hair taller; site equal |
| L12–L14    |       6.3 | 6.6 (line centre) | 0.95 | square-cut in both; site slightly shorter |
| L15        |       8.7 | 8.4        |  1.04 | none                           |
| L16        |       8.7 | 8.5        |  1.02 | L17 drawn a hair taller; site equal |
| L17        |       8.7 | 8.9–9.0    |  0.97 | as L16                         |

Every element on the site is squared, as Fig. 1 draws them, and the drawn height order holds: L1 above L2+L3, and every
unit behind G1 well below it. The steps at the L3 and L5 rear faces and the L9 / L16 differences are all 3–5 %, inside
the noise band, and reproducing them would turn squared doublets into bevels. No `sd` changed. G4 stays at 6.3 mm with
`checks.gapSagFrac` 0.97: the L12 rear and L13 front sags fill the 2.0804 mm gap at 6.41 mm, so the drawn 6.6 mm is not
reachable, and 6.3 mm is the closest admissible value.

**Labels and markers, all found correct.** The groups G1 (S1–5), G2 (S6–8), G3 (S9–19, including the stop), G4
(S20–24) and G5 (S25–30) match the brackets G1(+) … G5(+) in Fig. 1. The five cemented brackets L2+L3, L4+L5, L7+L8,
L10+L11 and L13+L14 match the text's cemented pairs, giving 17 elements in 12 groups. Element names L1–L17 are the
patent's own. Every element `type` agrees with the radius signs and with the Embodiment 1 wording (plano-convex L1 and
L5; negative meniscus L2, L4, L10, L12; positive meniscus L3, L13; biconcave L6, L8, L14; biconvex L7, L9, L11, L15,
L17; negative meniscus L16 convex to the image). The sub-unit names G31 / G32 used in the roles come from the patent's
condition (3). The stop is drawn between L8 and L9, where Fig. 1 places the diaphragm A. There are no aspheres and no
`A` suffixes. L3 is the only `apd` tag (`"inferred"`): the patent text names no ED or anomalous-dispersion glass, and
L3 (νd 81.6) is the only low-dispersion element for Panasonic's "1 ED lens". The inspector shows L3 as a positive
meniscus, FCD1 equivalent, f +131.68 mm, inferred APD; L13 as a positive meniscus, f +31.44 mm; L16 as a negative
meniscus, f −21.26 mm.

**Zoom movement.** The 101 stations ascend from 102.72 to 290.31 mm and every gap array follows that order. Group front
vertices measured from the image move toward the object, monotonically, at every station: G1 by 58.35 mm, G2 by 8.32,
G3 by 13.42, G4 by 24.86 and G5 by 26.66 mm. This matches the patent's statement that every unit moves to the object
side with D5 growing and D8, D19 and D24 shrinking, and it matches the Fig. 1 arrows, which all point left. The zoom
overlay at wide and at tele shows the same direction.

**Focus.** The patent's arrow and text move G2 toward the object for close focus but print no close-focus spacing. The
two focus keyframes are identical, the focus slider is disabled ("Not modelled"), and the focus overlay shows no focus
travel. This is correct for infinity-only data.

**Text updated.** The analysis still described the old 6.05 mm G4 rim and the old 61 / 60 / 52 % edge transmission. It
now gives 6.3 mm and 65 / 63 / 55 % (engine values at the printed half-field: 64.6 % at 6.0°, 63.0 % at 3.5°, 55.2 % at
2.1°). The data file's header comment was reflowed to the 120-column width and notes this re-measurement. Engine
half-field (6.51°), FOPEN 4.11397 and the vignetting curve are unchanged, and the surface validator passes.

**Open points outside this review's edit list.** The `subtitle` reads "probable production correlation" while the
pre-deploy section above records "qualified production correlation". Gap labels read "D5" etc.; the patent prints d5,
d8, d19, d24 and BF.
