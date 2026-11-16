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
- The company link between Chengdu Weizheng Digital Technology and Meike rests on one trade-directory page; a registry or maker source would settle it.
- Rims are the printed clear diameters and were not compared with Fig. 1 edge by edge. The real axial beam at the paraxial pupil overfills surface 6 by 0.05 mm, and F/0.95 is not reachable inside the printed rims of surfaces 5 to 7.
- `aperture.fStops` begins at the design 0.9846 and no maximum f-number beyond 16 or blade count (13 per the announcement) is entered.
- Infinity only; the production focusing movement and the 0.45 m state are not modelled.
- The cause of the 13.89 mm printed distance (a cover plate) is an inference; the patent tabulates no plate, so none is entered in `rearPlates`.
