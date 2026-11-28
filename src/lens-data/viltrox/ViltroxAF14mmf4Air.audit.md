# Patent and viewer audit

## 2026-09-11 — Direct local-viewer review

Compared both local-viewer focus endpoints with Fig. 1, local `patents/CN_121091494_A.pdf`, p.20 (600 dpi; 54.73 mm glass span, 14.75 µm/px). Retained the refined optical rims. L11 remains smaller than its drawn outline because the published S20 polynomial turns over near 7.8 mm; its 7.7 mm rear SD preserves the usable branch. The four aspherical surfaces and twelve element labels are correct. G2/L7–L9 moves objectward 1.10 mm, with D1 + D2 fixed at 8.31 mm. Infinity precedes the constrained close state; there is no zoom travel.

Added inferred-APD colors to L1 (E-FDS1, ΔPgF ≈ +0.03029), L2 (J-FKH1, +0.03368), L3 (K-GFK68, +0.01712), L7/L9 (FCD10A, +0.04304), and L12 (FCD515, +0.01575). These are classifications from compatible catalog curves, not patent-listed APD, supplier identities, or an asserted production ED count. L1 is a high-dispersion anomalous partner.

Ten of twelve elements resolve. L10's rounded 1.78/25.7 fails the catalog index tolerance for the familiar 1.78472/25.68 SF11 family; L11's 1.64/23.5 has no supported catalog curve. Neither was assigned an unverified material or given relaxed tolerances. The Fujinar's four source-incomplete elements account for the remaining batch gaps (67/73 covered).

Preserved the printed Viltrox-era assignee. Corporate history now connects it to Leiying through the CP03 name-change event recorded on 2025-04-18 in CN218630458U. Historical publications retain their original legal name.

## 2026-09-25 - MTF census: folded plate restored; source contradiction retained

Source: local `patents/CN_121091494_A.pdf`, Example 1 Tables 1-3, PDF pages
12-14 (description pages 9-11), paragraphs 0124-0135. Checked every R/d/nd/vd
row S1-S24 and all four aspheres' K/A4-A12 against rendered source tables.
They match. Infinity D1 = 4.85 and D2 = 3.46 mm match Table 3; no scaling.
The existing constrained close-focus D2 is outside this infinity audit and
remains explicitly distinguished from the printed close station.

| Rear path | Before | After |
|---|---|---|
| S22 d | 15.365 mm folded air | 12.49 mm physical air |
| S23-S24 PP | Folded | `rearPlates`: 2.85 mm, nd 1.52, vd 64.2, gap after 1.00 mm |
| Physical image distance from S22 | 15.365 mm | 16.34 mm |
| Paraxial offset | -1.072437 mm | -1.072437 mm |

Independent reduced-angle propagation gives EFL 14.192130 mm versus the
source 14.3 mm, and air-equivalent BFL 14.292563 mm versus the source's
12.49 + 2.85/1.52 + 1.00 = 15.365 mm. In the physical representation,
paraxial BFL is 15.267563 mm versus the authored 16.34 mm. Unfolding moves
both focal and image coordinates by 0.975 mm, preserving the mismatch.
No further transcription mismatch was found; the published rounded
prescription and image distance do not reproduce paraxial infinity focus.
Keep them, without inventing a glass index or changing a spacing to focus.
The header and analysis disclose this source contradiction. Section E row
deleted; the lens is expected to remain in the numerical census.

The plate has source nd/vd only, with no established vendor identity or
line indices. Existing qualified spectral proxies and unresolved glasses
are unchanged. The analysis now describes the traced physical filter path.


## 2026-10-29 — Z-mount surface and glass reinspection

Fresh direct source review: `patents/CN_121091494_A.pdf`, Example 1: Figure 1, PDF page 20; prescription Table 1 on pages 12–13, spectral-line convention and Table 3 continuation on page 14. Page images were rendered and read again; earlier notes supplied locators only.

Every convex/concave face and cemented boundary was rechecked in a fresh 600 dpi Figure 1 crop. Native raster 300 dpi; the approximately 3710 px S1–S22 span at 600 dpi over 54.73 mm gives 67.787 px/mm, or 33.894 native px/mm. The figure resolves concave rear seats on L1 and L2: added extensions 2→12.7 and 4A→9.7 mm, preserving the existing optical caps 9.8 and 7.6 mm. Those drawn outer radii match their existing front-face rims.

No additional resolved concave air-face cap break supports a new cut. Stepped cemented interfaces 6, 9 and 13 remain outside this air-boundary feature. L11’s source silhouette continues its curved faces toward a larger rim, but the source polynomial’s usable branch ends near the existing 7.2/7.7 mm caps and turns over near 7.8 mm. There is no source flat seat at those caps; inventing an extension there would hide that prescription/figure limitation. Its current geometry is retained. The four asphere caps and their quoted departures remain unchanged.

All 12 element index/Abbe pairs and the rear plate match the rounded source table. The D-line plotting convention is stated on page 14. No numerical source θgF/partial-dispersion or per-element line indices are published. Existing six catalog-derived APD flags remain inferred. L10 and L11 still have no compatible catalog curve; the rear plate remains source-only. Qualified proxy labels remain qualified.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L1 | 1.92000 / 20.9 | E-FDS1 |
| L2 | 1.50000 / 81.6 | J-FKH1 |
| L3 | 1.59000 / 68.3 | K-GFK68 |
| L4 | 1.65000 / 33.8 | H-ZF1 |
| L5 | 1.68000 / 55.5 | K-LaK12 |
| L6 | 1.67000 / 47.2 | BAF10 |
| L7 | 1.46000 / 90.2 | FCD10A |
| L8 | 2.00000 / 25.4 | H-ZLaF90 |
| L9 | 1.46000 / 90.2 | FCD10A |
| L10 | 1.78000 / 25.7 | unresolved; Abbe approximation |
| L11 | 1.64000 / 23.5 | unresolved; Abbe approximation |
| L12 | 1.59000 / 68.6 | FCD515 |

Coverage: 10/12 modeled media, representing 12 physical lens elements. Rear plate checked separately: 1.52000/64.2 (unresolved). Compatible catalog curves remain spectral proxies, not production supplier/melt identifications.

Verification: focused surface/inferred-beam and image-circle audits; aperture census for the new cuts; actual native SVG outlines and render diagnostics over nine zoom/focus states; current-label resolver and catalog-coordinate sweep, `assertCatalogConsistent()`, and the shared dispersion/partial-dispersion consistency tests. Full repository gates are recorded by the coordinator at commit time.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` stays 0.12 m. Source gives the nominal 0.12 m endpoint; at 14 mm, gap rounding moves the paraxial distance by several percent; Viltrox markets 0.13 m. The close row's modeled label reads within -7.3 % of it, so the close-endpoint corpus guard lists this lens as an exemption.

- `catalog.closeFocusM.marketing` 0.13 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-03 — Image-plane consistency (re-solve)

Source: CN 121091494 A Example 1, Tables 1–3 (PDF pp. 12–14). Every R, d, nd and νd matches the file, and the
printed rows did not focus with the printed two-decimal indices. Back focus first, per LENS_DATA_SPEC
Image-Plane Consistency: the S22 air gap is re-solved for paraxial infinity focus, the change is carried to the close
row, and G2 is then moved so the close row focuses at the source's 0.12 m.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| S22 `d` | 12.49 | 11.417563 | Back focus re-solved for paraxial infinity focus; the plate and its 1.00 mm air are unchanged |
| D1 (gap after STO), close | 3.75 | 3.608419 | G2 moved for paraxial focus at 0.12 m object to image |
| D2 (gap after S16), close | 4.56 (printed 4.65) | 4.701581 | Same G2 move; D1 + D2 stays 8.31 mm |
| `focus.closeFocusM` | 0.12 | 0.12 | Now the close row's paraxial object-to-image distance |

- Residual at infinity: −1.072437 → 0.000000 mm (57 → 0 depths at f/4). Before the re-solve the infinity row
  focused at 0.252 m and the close row at 0.111 m object to image.
- G2 travel: 1.10 → 1.241581 mm. EFL 14.192130 mm unchanged at infinity; close EFL 13.615918 → 13.545261 mm.
  Physical track 71.07 → 69.997563 mm.
- Close focus: the patent's "物距 0.12M" has no stated reference. The model reads it as object to image. With the
  residual removed, the printed 1.10 mm travel focuses at 0.128 m object to image, whereas the first-vertex reading
  needs only about 0.57 mm of travel. Viltrox's 0.13 m stays in `catalog.closeFocusM.marketing`.
- Cause: the indices are printed to two decimals. A ±0.005 change on one element moves infinity focus by up to
  0.55 mm (L5, L6, L7); rounding over all twelve gives σ ≈ 0.59 mm, so −1.07 mm is about 1.8σ. EFL 14.19 against
  the printed 14.3 mm is inside the matching σ ≈ 0.20 mm. ¶0135's f/1.47 and ω = 14.02° are boilerplate and do not
  point to any prescription cell. The close-endpoint exemption's "two-decimal gap rounding" explanation was wrong:
  the residual came from the indices, and the re-solved close row now reads 0.12 m.
- Clearance: the D1 and D2 minima are their vertex gaps, 4.85 / 3.608 mm and 3.46 / 4.702 mm at infinity / close.
  Aperture, image-circle, field-coverage and surface-probe audits are unchanged.

Follow-ups: none for the image plane. The f/1.47 aperture contradiction stays as recorded above.

## 2026-11-10 — Metadata fill

- `catalog.fNumber.design` stays unset. The only f-number CN 121091494 A prints for Example 1 is ¶0135 (PDF p. 14,
  description p. 11/16): the spherical-aberration plots are drawn at "光圈数为1.47" (F-number 1.47). The same paragraph
  gives a 14.02° half field that Fig. 3 (PDF p. 21, field axis to 56.2°) contradicts, Tables 1–3 (PDF pp. 12–14) and
  Figs. 2–5 print no F-number, and the analysis traces that f/1.47 cannot pass the Example 1 surfaces (on-axis limit
  about f/2.295). The value is treated as boilerplate, as the data file's aperture note already records.
