# Meike 50mm f/0.95 — audit log

Package notes as delivered (the file was then named for the 7Artisans 50mm f/0.95; superseded where the sections below differ):

User authorized image-plane adjustment November 15, 2026. Native reference checkout 70600ffc23af48a81994cf8fc834048fdf9d21a1.
Exactly one optical change: final image interval 13.89 -> 14.759082880782301 mm. All original radii, internal distances, glasses, clear apertures, stop position and 22.74 mm stop diameter retained. Original literal triad and primary evidence preserved under input/checkpoint.
Fresh native geometry, aperture and field census pass. Plane alternatives and dense ring-sampled RMS solve recorded in evidence. Final 24 MTF cells all converge; see mtf-log.jsonl and full outputs. Paraxial versus RMS-spot and source contradictions are disclosed in analysis. Full app/browser/current-main/polychromatic QA not run (closed: see the sections below). No publishing, deployment or Drive mutation.
Fresh independent exact sphere/Snell replay agrees with native axis crossings to <1e-9 mm; all direct-ray detector coordinates are explicitly projected from terminal point/direction, not raw trace.y. Marginal spherical aberration remains: at 95% paraxial entrance pupil the derived detector miss is −65.7 µm, versus +415.1 µm printed.

## 2026-11-15 — Deployment validation

An independent re-read of the patent page images (CN 216526483 U; Table 1 is an image on specification p. 4/5, read from a 200 dpi render) checked all 13 surface rows for radius, spacing, glass name and clear diameter, the stop row and the conic column. No mismatch was found. The semi-diameters are the printed diameters halved, the two zero-gap cemented rows are entered once, and Fig. 1 agrees with the table in element count, groups, cemented pairs, surface signs and stop position.

Product link: Meike, not 7Artisans. The patentee, Chengdu Weizheng Digital Technology Co., Ltd., is reported as the company behind Meike; the filing (17 November 2021) came three months after the 7Artisans 50mm f/0.95 went on sale (August 2021) and seven months before the Meike 50mm f/0.95 was announced (June 2022); and the 7Artisans diagram marks two HOYA low-dispersion elements (L3 and L6) where Table 1 has one (L3, FCD515; L6 is H-ZLaF55D). The link is by assignee and construction; no Meike construction diagram was found.

Image plane: Table 1 prints 13.89 mm; the printed prescription's d-line paraxial focus is 14.7591 mm, with marginal rays within 0.19 mm of it. Fig. 3 puts the on-axis focus of all four wavelengths within 0.08 mm of the image plane, and Fig. 1 draws the sensor as a plate about 1.4 mm thick beginning 14.4–14.8 mm behind L7 (a 1.3 mm cover plate of index 1.52 would account for the 0.87 mm exactly). A scan of every radius, spacing and index for a single-value change that restores 13.89 mm found one digit-level candidate, R7 14.29 → 14.59 (back focus 13.897 mm, EFL 50.19 mm). It was rejected: it gives −0.95 % distortion at 15.8° against about −2.2 % in Fig. 3, where the printed table gives −1.8 %.

Aperture: the printed 22.74 mm stop gives a paraxial F/0.985 at EFL 50.4815 mm, not the stated F/0.95; the real axial beam at that pupil just exceeds the printed rim of surface 6 (16.54 against 16.49 mm), so the tabulated design works at about F/0.99. Other source inconsistencies: stated f = 50 mm against 50.48 mm, and claim 7 (1.66 < N5 < N6 − 0.2), which is an empty range for the tabulated L6 and is not met by H-ZF1.

Changes made:

- Header: one-line note → a full source comment (patent, example, stop, semi-diameters, image plane, source note, focus).
- `catalog.lensMounts`: absent → Sony E, Fujifilm X, Nikon Z, Canon EF-M, Micro Four Thirds (Meike's June 2022 announcement as reported by Photo Rumors; the corpus uses the `sony-fe` id for APS-C E-mount lenses).
- `catalog.closeFocusM.marketing`: absent → 0.45 (same announcement).
- Last spacing: 14.759082880782302 → 14.7591 (float noise). `catalog.focalLengthMm.design`: 50.48152158616866 → 50.48.
- `patentNumber`, assignee, inventor and `imageFormat` were already in house form and are unchanged. The design f-number stays 0.9846087232798052 so that the engine reproduces the printed 11.37 mm stop radius exactly.

After the change: EFL 50.4815 mm, F/0.9846, stop radius 11.37 mm, back focus 14.7591 mm, total length 73.0291 mm, half-field 17.51°. The surface audit reports no errors, the aperture audit no rim limit, the image-circle audit 0 undersized, and field coverage is 100 % at the 14.18 mm APS-C corner.

## 2026-11-15 — Cleanup and wording pass

Fields changed:

- `subtitle`: "CN216526483U Table 1 — derived paraxial infinity image plane; retail identity unconfirmed" → "CN 216526483 U, Table 1 — construction-based association with the Meike 50mm f/0.95".
- `specs`: the image-plane and identity chips → "ALL SPHERICAL", "F/0.95 MARKETED; PRINTED STOP GIVES F/0.99", "MINIMUM FOCUS 0.45 m" (the element and group chip is kept).
- `focus.description`: rewritten as plain sentences beginning "Infinity focus only".
- Elements: `indexReference` "d", `focalLengthMm` and `role` added; cemented ids D1 / D2 → C1 / C2 on both members of each pair, and the two `doublets` entries renamed to match. Element types already agreed with the radius signs.
- Glass labels, casing only: H-ZLAF55D → H-ZLaF55D (CDGM), H-ZLAF50E → H-ZLaF50E (CDGM); FCD515 (HOYA), H-ZF52 (CDGM) and H-ZF1 (CDGM) unchanged. All five resolve to catalog rows with Δnd = 0 and Δνd ≤ 0.01 (FCD515 carries νd 68.62 against the catalog's 68.63). No `apd` tag: Meike publishes no special-dispersion positions for this lens.
- Analysis: rewritten to the house skeleton under the H1 "Meike 50mm f/0.95"; the 7Artisans attribution, the third-party optical-bench reference, the authorization sentence, the spot and MTF census paragraphs and the validation-run paragraph were removed; the product link, image-plane evidence and source inconsistencies are stated from the deployment validation.

Engine numbers before and after this pass are identical: EFL 50.48152158616866 mm, F/0.9846087232798052, half-field 17.514377159698086°, stop radius 11.37 mm, back focus 14.7591 mm. The surface audit reports no errors and the aperture audit no rim limit.

Open:

- No Meike construction diagram was found; the element shapes, the glasses and the single low-dispersion position are the patent's, not confirmed for the production lens.
- (Closed 2026-11-15 by the semi-diameter pass below.) Rims are the printed clear diameters and were not compared with Fig. 1 edge by edge. The real axial beam at the paraxial pupil overfills surface 6 by 0.05 mm, and F/0.95 is not reachable inside the printed rims of surfaces 5 to 7.
- `aperture.fStops` begins at the design 0.9846. (Blade count entered 2026-11-15, see below; the maker's range ends at f/16, the schema default.)
- Infinity only; the production focusing movement and the 0.45 m state are not modelled.
- The cause of the 13.89 mm printed distance (a cover plate) is an inference; the patent tabulates no plate, so none is entered in `rearPlates`.

## 2026-11-15 — Semi-diameter pass against the patent figure

Source: CN 216526483 U, Fig. 1 (drawings p. 1/3), rendered at 300 dpi. Scale 15.74 px/mm from the 58.27 mm first-to-last vertex length (917 px); the vertices of surfaces 2, 4, 6, 10, 11 and 13 and the stop then fall within 0.5 mm of the table, so the figure is drawn to the tabulated prescription.

Rims kept: Table 1 prints a clear diameter for every surface, and a printed diameter outranks a figure reading. All 13 semi-diameters equal the printed diameter halved (53.69, 52.45, 44.00, 41.74, 36.34, 32.98, 23.59, 22.74 stop, 21.38, 28.06, 29.96, 32.42, 31.11 mm). No `sd` was changed.

Figure, for information (edge half-heights against the file's semi-diameters): L1 26.8 mm against 26.845; L2 23.4 against 22.0; L3 19.2 against 18.17; L4 block 17.5 against 16.49 at the junction; L5 block 14.9 against 14.03 at the junction; L6 15.6 against 14.98; L7 16.6 against 16.21. The figure draws element edges 0.4 to 1.4 mm beyond the clear apertures, as mounting margin.

Changed, drawing only: the figure draws L4 and L5 as square-edged blocks, with the concave face on the stop side of each ending in a flat land (L4's rear cap ends about 6.7 mm of sag behind its vertex, a 12.1 mm reading against the printed 11.795; L5's front cap ends 2.6–3.3 mm ahead of its vertex against 2.84 mm for the printed 10.69).

| Surface | Before | After | Evidence |
| --- | --- | --- | --- |
| 7 (L4 rear) | sd 11.795, bevelled edge | sd 11.795, `rimExtensionSd` 16.49 | Fig. 1 flat land to the block edge; height held to the cemented junction's 16.49 (figure 17.5) so the block edge stays cylindrical |
| 9 (L5 front) | sd 10.69, bevelled edge | sd 10.69, `rimExtensionSd` 14.03 | Fig. 1 flat land to the block edge; height held to the junction's 14.03 (figure 14.9) |

The lands lie outside the clear apertures and clip nothing: bundle transmission is unchanged at 100 / 97.0 / 90.9 / 82.7 / 73.1 / 60.3 / 33.5 % for 0 / 2.7 / 5.3 / 8.0 / 10.6 / 13.3 / 16.0° before and after. Engine numbers are unchanged (EFL 50.4815 mm, F/0.9846, stop radius 11.37 mm, half-field 17.51°). The surface audit reports no errors, the aperture audit no rim limit, and field coverage is 100 %.

Metadata: `aperture.blades` 13 added (Meike's June 2022 announcement as reported by Photo Rumors: 13 blades, f/0.95–16, 62 mm filter, 420 g, 0.45 m). Mounts, format and marketing close focus were re-checked against the same source and stand.

Product name: the announcement calls the lens "Meike 50mm f/0.95" (an APS-C manual-focus lens); dealer listings carry the model code MK-50mm F0.95 APS-C. The display name MEIKE 50mm f/0.95 agrees.

Open:

- The axial beam at the paraxial pupil overfills surface 6 by 0.05 mm (16.54 against the printed 16.49 mm). This is the source's geometry and is left.
- The corner bundle keeps 33.5 % at 16.0°; the patent states a relative illumination above 42 % at the edge of its field (¶0057). The rims are the printed ones, so the difference is not adjusted.
- (Closed 2026-11-15 by the second review below.) The local outline sketch does not draw rim extensions; the two lands should be looked at on the live page.

## 2026-11-15 — Second review on the local site

Compared: the live page (1400×900, infinity) and the inspector of all seven elements against CN 216526483 U Fig. 1 at matched scale (figure 15.74 px/mm, page 6.61 px/mm), Table 1 (specification p. 4/5) and the text (¶0031, ¶0037–0048, ¶0053–0057). No field of the data file was changed.

Table 1 re-read row by row: all 13 radii, spacings, glass names and clear diameters agree with the file, and each `sd` is the printed diameter halved. The stop row (22.74 mm, 7.85 mm behind L4, 6.11 mm ahead of L5) agrees.

Silhouette: the page draws L4 and L5 as square-edged blocks with a flat land on the stop side of each, as Fig. 1 does. The step order matches the figure: L1 > L2 > L3 > L4 block in front, and L5 block < L6 < L7 behind the stop. The figure's edges stand 0.4 to 1.4 mm beyond the printed clear apertures; the printed diameters are kept.

Lands (both drawing-only): surface 7 `rimExtensionSd` 16.49 and surface 9 `rimExtensionSd` 14.03 cost 0.0 points at every field (bundle transmission 100 / 97.0 / 90.9 / 82.7 / 73.1 / 60.3 / 33.5 % with and without them, at 0 to 16.0°). The figure draws both, so both stay. No face is below its baseline.

Labels and brackets: the patent names no lens groups. Its fU1 and fU2 are the focal lengths of the first and second cemented lenses (reference numerals 91 and 92), which the C1 and C2 brackets already mark over surfaces 5–7 and 9–11, so `groups` stays empty. Element types agree with the signs of the radii and with ¶0048. Stored focal lengths agree with the traced values (71.84, 110.54, 53.86, −19.39, −20.55, 21.48, 44.92 mm; cemented pairs −38.49 and +135.22 mm). The stop is drawn between L4 and L5. No aspheric marker and no `apd` tag: the patent designates no special glass and no maker construction drawing was found.

Movement: none. `gaps` is empty and `focus.description` states infinity only and explains the 14.7591 mm image distance against the printed 13.89 mm.

Glass: all five named glasses resolve to their catalog rows (Δnd ≤ 5e-6, Δνd ≤ 0.01). The patent prints no indices, partial dispersions or line data.

Engine numbers, unchanged: EFL 50.4815 mm, F/0.9846, stop radius 11.37 mm, half-field 17.51°. The surface audit reports no errors, the aperture audit no rim limit, and field coverage is 100 % (14.17 of 14.18 mm at 16.0°).

Open:

- The spec chip reads "PRINTED STOP GIVES F/0.99", while the page's aperture readout shows f/0.98 (the paraxial 0.9846). The 0.99 follows from the 0.05 mm overfill of surface 6; the two numbers on one page read as a contradiction. Not changed here.
- The inspector shows νd to six decimals (for example 42.725177) because the values were computed from catalog dispersion formulas; the catalogs print two decimals. Not changed here.
- L3 (FCD515, νd 68.62) carries no `apd` tag. It stays untagged unless a maker source marks a low-dispersion element.

## 2026-11-24 — production-match review

- Company link settled: the USPTO registers the MEIKE trademark (registration 7,492,283, serial 98134510, filed 15 August 2023, goods including lenses for cameras) to Chengdu Weizheng Digital Technology Co. Ltd., the patentee. The earlier open item about the single trade-directory page is closed.
- PhotonsToPhotos Optical Bench lists CN 216526483, Example 1, under "7Artisans APS-C 50mm F0.95". The patentee and the low-dispersion count (one element in Table 1, two in the 7Artisans diagram) contradict that label, so the Meike attribution stands.
- The lens is classed as a production match in the Lens Library. No Meike section drawing was found, so element shapes and glasses remain the patent's.
