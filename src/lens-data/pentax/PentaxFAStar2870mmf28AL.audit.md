# Pentax FA★ 28–70mm F2.8 AL — reconstruction audit

## Disposition

**Candidate pending independent final review** (closed 2026-10-29: independent validation passed; see the deployment validation section below). This is a table-derived related-design/infinity-only reconstruction. It is not exact factory equivalence, a literal published-plane model, an official BF correction, a fully validated/finished package, or a deployment.

No source radii/materials/native optical spacing edits. The only applied official correction is the 1999 certificate's K=−1. The inferred image plane is BF=55.45−d20, preserving the wide printed BF39.87 and stationary G3/stop. Literal BF, E5 and both bounded E6 radius hypotheses remain archived. The source Figure 9/10 conflict is unresolved and its plots do not validate this model.

## Native construction and provenance

- 26 refracting surfaces plus a distinct stop; source d15 precedes STOP, followed by 1.68 mm to S16.
- 14 counted glass pieces / 11 components, plus one separate 0.13 mm resin medium.
- D-line indices; source named glass/secondary dispersion unavailable, no factory-glass identification.
- Only complete wide row marked published. Mid/tele retain literal optical rows but infer BF; their flags and every added cam control are false.
- Groups independently calculate −/+/−/+. A provisional draft's incorrect display group signs were corrected; it changed no optical numbers. Those raw draft/validation files remain in `validation/superseded_group_label_v001`.
- Source front-page barcode prints kindA. Final structured metadata includes it. `final_metadata_only_rebinding.json` proves this citation-only delta after numerical execution: every other JSON value is identical. Original input hashes and raw numerical receipts are preserved.

## Semi-diameter estimates

No numerical clear apertures are published. **The numeric seeds came from approximate E5 Figure 17 measurements**, recorded in `sources/inferred_rims_diagnostic.json` and `repro/build_native_diagnostics.py`, not from independent E3 or manufacturer measurements. They were transferred through the E6 hybrid diagnostic and then into E3, with geometry-driven reductions. Same-family topology is a rationale for an exploratory transfer, not proof of equal clear apertures: E5 is the rejected direct-glass exact-product association, not this hybrid prescription.

The primary manufacturer sketch supplies qualitative construction/envelope consistency only; it was not quantitatively measured to produce these rims. No precise photogrammetric uncertainty is established. Wrong E3 Figure 9 is explicitly excluded. `source_review/final_e3_rim_lineage_v002.json` preserves the exact per-element ancestry. These estimates are not source-certified E3 dimensions or production metrology. S1 front retains the transferred 26 mm estimate while its shared rear/hybrid rim is 24 mm.

| Modeled medium | Estimated rim, mm |
| -------------- | ----------------: |
| L1             |                24 |
| Resin          |                24 |
| L2             |              21.5 |
| L3             |                22 |
| L4             |              17.5 |
| L5             |              17.5 |
| L6             |              17.5 |
| L7             |              17.5 |
| L8             |              17.5 |
| L9             |              12.5 |
| L10            |              12.5 |
| L11            |              11.1 |
| L12            |              12.5 |
| L13            |              12.8 |
| L14            |                14 |

The preliminary L2 rim 22 mm violated the default gap-sag bound; 21.5 mm is retained. L13 was reduced from 12.9 to 12.8 mm to remain below the default bound. Original failures are retained. Shared resin rim 24 mm has positive thickness; larger trial rims produced negative resin edges in the separate E6 diagnostics. No source radius or center thickness is changed. There is **no gap-sag override** and no render trim.

## Cam density and stopping basis

The study preserves source d20 interpolation and solves d7/d15 at intermediate controls for interpolated actual native EFL and retained native plane residual. It is not a factory mechanical law. All native optical spacings remain exact. Across 1,025 scalar samples, added residual is 2.970 mm at 3 controls, 0.2333 mm at 9, 0.06093 mm at 17, 0.01558 mm at 33 and 0.003941 mm at 65. Native residual magnitude is at most 0.004091 mm. Existing runtime inconsistency limit is 10×2λN²≈0.0921 mm; this is reported separately from image quality, not used as sufficient proof of good interpolation.

17→33→65 reference-MTF sensitivities are retained. Reduced interpolation defocus can lower design-plane MTF when native spherical aberration has a different best axial plane. 65 is the bounded stopping density, not an optical optimization or new acceptance tolerance. No further density/radius search was performed.

## Actual bounded checks

- 383 final source/model binding checks passed; independently keyed source review separately has 248 comparisons.
- 257 zoom geometry states: zero trim; minimum glass/resin 0.13 mm and air 0.10 mm; max gap-sag 0.892593775; no image-plane inconsistency under existing limit.
- Repeated focus geometry is identical: this is an infinity-only model, not validated finite focus.
- 585 support checks: 65 reference-infinity supported; 130 spectral guards and 390 finite guards correctly unavailable.
- 72 exact chief checks across 9 zoom states and source-mapped/full 135-format fields pass. No area/full-pupil claim follows.
- 5,490 requested polar pupil points: 4,675 transmitted, 541 physical clips, 226 unlaunched, 48 noBracket. Nonuniform polar counts are not area-weighted transmission.
- All 48 postlaunch failures encounter only backward sphere intersections of S19 outside its 11.1 mm inferred rim (vertex-sheet radii 11.856–12.359 mm). They remain raw failures, not passes; positive declared common-rim geometry is a different statement.
- 220 of 226 final attempted unlaunched aims physically clip before iris; 6 still fail before it. This does not prove alternate aims impossible.
- Projection coordinate contract verified to 7.11e−15 mm; maximum successful intersection residual 9.85e−13 mm.
- 23 reference-MTF cases / 92 fields: 90 converged at 128-grid; 2 needed supported 256 refinement, after which 92 converged. Native tele f/8 edge S40≈0.0675 is retained as weak, not a quality pass. No source-plot or spectral performance claim.

## Unrun and blocked gates

Whole-project typecheck, format-check, lint, main corpus, tooling and build are **NOT_RUN for this final candidate** under the standing resource-execution restriction. Prior other-lens passes/waivers do not transfer. Actual viewer QA is **NOT_RUN**; no public preview update or production operation occurred. The private checkpoint and final-authoring independent review are coordinated externally; their status must not be inferred from this local file. (Closed 2026-10-29: the independent review passed, the rendered page was viewed in the wording pass below, and repository-wide checks belong to the batch integration.)

## Source/reproducibility evidence

The controlling source is the original US PDF, which includes its certificate. Manufacturer recovered rawHTML and current primary text have distinct provenance. JP evidence is indexed text only, not inspected original pixels.

Unchanged independent source manifests:

- `independent_coordinator_source_check/manifest.json`.
- `independent_alternative_source_review/FROZEN_MANIFEST.json`.

Rebuild only the package's data/scripts; the pinned runtime remains read-only. No node_modules are bundled. See REBUILD.md and final manifests for exact inputs, scripts and evidence hashes.

## 2026-10-29 — Deployment validation and wording pass

An independent check transcribed Table 3 / Example 3 of the local `US5568323.pdf` (column 9, PDF p. 20) and found the data file exact: 27 radius rows including the stop, 23 fixed thicknesses, three variable gaps at three positions, 15 nd/νd pairs, and K with A4–A10 on S3. This pass re-read the same page and confirmed the rows. The certificate of correction dated 21 December 1999 (PDF p. 23) changes Table 3's K from −0.1000 to −0.1000E01; the file uses −1.0, and formula (2) is negative only with −1.0.

At wide / middle / tele the patent prints f = 29.00 / 50.00 / 68.00 mm, F/2.8 and ω = 37.8 / 23.1 / 17.3°; the model gives EFL 29.000701 / 50.001890 / 67.995339 mm, and the Table 7 conditions (3)–(8) match. The patent prints fB = 39.87 mm at all three positions. That is a printing error rather than a model choice: column 7 and claim 9 fix the third group with the diaphragm during zooming, and all six tables repeat a near-constant fB. With G3 and the stop fixed, the stop stays 80.19 mm from the image (80.19 / 29.00 = 2.765, Table 7 prints 2.76), so the model BF is 39.87 / 47.54 / 53.55 mm. The Gaussian BFD is 39.870129 / 47.544091 / 53.548695 mm, leaving offsets of +0.000129 / +0.004091 / −0.001305 mm. Linear interpolation of the three rows alone would add up to 2.970177 mm of defocus between them; the 65-position path adds at most 0.003941 mm. A paraxial check of Example 6 gives a wide EFL of 24.100 mm with the printed R22 = −22.946 mm and 28.999 mm with −26.946 mm. Example 5's text describes a glass asphere without resin, against the maker's hybrid wording.

Pentax lists 14 elements in 11 groups, a large-aperture hybrid aspherical element, anomalous low-dispersion and high-index low-dispersion glass, 75–34.5°, 0.43 m, F22 and a 67 mm filter. Example 3 has 14 elements in 11 groups with a resin asphere on the rear of L1 and 2ω = 75.6–34.6°. The independent check compared the maker's construction diagram (`https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/image/construct/sz-faz28-70f28.jpg`) with this layout; it was not measured and sets no rim. Figures 9 and 10 show another lens (three groups, r1–r20, W = 31.1°), so the semi-diameters stay carried over from Example 5's Figure 17. The rims are unchanged. A full f/2.8 axial beam at tele (entrance radius 12.14 mm) clips slightly at S11, S14, S16, S19 and S20, most at S20 (11.99 mm needed against the 11.1 mm rim); the 3.00 mm S18–S19 air space limits L11's rim.

Data changes are limited to the header comment, subtitle, the five catalog specification lines (formerly seven process lines), element labels (Glass N to Element N; the resin is "Element 1 resin layer"), the zoom station labels (now "Wide" and "Tele" only, replacing 62 interpolation labels and two middle/tele row labels), the G3 group text and the focus description. The coordinator's key, name, glass strings and APD tags are kept. The analysis now states the qualified production correlation, explains the fB printing error from the patent's own text, replaces the inaccurate "four nonlinear-moving units" with the maker's four-group nonlinear-movement wording and the patent's fixed G3, adds the measured group movements, names the catalog equivalents, drops the claim that colour analysis is unavailable, and replaces process counts and status lines with plain model limitations. In this file, the BUILT_AWAITING_VALIDATION_EXECUTION token and the source and manifest hashes are removed, and stale pending lines are marked closed.

Built summary and all 130 probe lines (65 zoom positions × two focus keyframes) are identical before and after: EFL 29.000701219314394 mm, FOPEN 2.7999999999999994, half-field 38.357855609939016°, stop radius 10.454890503804634 mm, BFD 39.8701 / 47.5441 / 53.5487 mm at the three printed positions. The surface audit reports “OK — no validation errors”. The rendered lens page reads cleanly.

Open: production identity beyond the qualified correlation, the factory zoom cam, the focusing method and travel, production melts and suppliers, and the cause of the small paraxial offsets remain unknown. The resin layer keeps an `Unmatched` glass label. The tele MTF figure in the analysis (edge sagittal 0.0675 at 40 lp/mm, f/8) is carried from the original package and was not re-run in this pass. lens-db dates the announcement to March 1993, before the November 1993 Japanese priority; that date is unconfirmed and not used. The maker's table pairs a 67 mm filter with hood PH-RBC77; not resolved.

## 2026-10-29 — Semi-diameter pass against the patent figure

Source: local `US5568323.pdf`. Example 3 has no drawing of its own (Figs. 9/10, PDF p. 6, show a three-group r1–r20 lens at W = 31.1°), so the measured sheet is **Fig. 17 (PDF p. 10, Sheet 9 of 14, Example 5, wide angle), used as a proxy**: it draws the same 14-element / 11-group layout. Fig. 21 (PDF p. 12, Sheet 11, Example 6, the hybrid construction of Example 3) was measured as a cross-check and agrees with Fig. 17 within about 1 % on every element after scaling. Fig. 1 (PDF p. 2, Example 1) was viewed but not measured: its first G2 component has a convex front, against Table 3's nearly plane S8. The scan is the native 1 px/pt CCITT raster; it is rotated about 0.9°, and the drawn elements sit 7–12 px above the axis line, so each rim is half the element's full top-to-bottom ink extent.

Scale: the vertex crossings of Fig. 17 line up with Example 3's wide spacings. S1 to the last vertex is 1036 px for Example 3's 129.25 mm, giving 0.1248 mm/px (Example 5's own 130.29 mm would give 0.1258). Check spans: L4 front to L11 rear, 284.5 px for 35.56 mm (0.1250); S1 to L4 front, 532 px for 64.93 mm (0.1220); G4, 103.5 px for 13.18 mm (0.1273). Fig. 21 gives 0.1207 mm/px on the same S1–S26 span (1071 px).

| Surfaces | Element | Fig. 17 half-height, px | Fig. 17, mm | Fig. 21, mm | Before, mm | After, mm | Evidence |
| -------- | ------- | ----------------------: | ----------: | ----------: | ---------: | --------: | -------- |
| 1 | L1 front | 205 | 25.6 | 25.5 | 26 | 26 | agrees within 2 % |
| 2, 3A | L1 rear / resin | 171 | 21.3 | 21.4–21.6 | 24 | 24 | curve ends inside a wide flange; kept for the half-field floor (below) |
| 4, 5 | L2 | 172 | 21.5 | 21.4 | 21.5 | 21.5 | agrees |
| 6, 7 | L3 | 172 | 21.5 | 21.5 | 22 | 22 | agrees within 2 % |
| 8–10 | L4/L5 | 132.5 | 16.5 | 16.5 | 17.5 | 17.5 | 6 %, inside the noise band |
| 11–13 | L6/L7 | 138.5 | 17.3 | 17.3 | 17.5 | 17.5 | agrees |
| 14, 15 | L8 | 137 | 17.1 | 17.0 | 17.5 | 17.5 | agrees within 3 % |
| 16–18 | L9/L10 | 97 | 12.1 | 12.0 | 12.5 | 12.5 | agrees within 4 % |
| 19 | L11 front | 90 | 11.3 | 11.2 | 11.1 | 11.1 | square rim in both figures; held by the S18–S19 cross-gap limit |
| 20 | L11 rear | 90 | 11.3 | 11.2 | 11.1 | 11.3 | stated f/2.8 beam at tele (engine iris) |
| 21, 22 | L12 | 96.5 | 12.0 | 12.0 | 12.5 | 12.5 | agrees within 4 % |
| 23, 24 | L13 | 102 | 12.7 | 12.7 | 12.8 | 12.8 | agrees |
| 25, 26 | L14 | 109 | 13.6 | 13.6 | 14 | 14 | agrees within 3 % |

One surface changed. S20 rises from 11.1 to 11.3 mm, the height the aperture census reports for the engine's f/2.8 beam; before the change S20 limited the tele end to f/2.84 (+1.5 %) over the four longest positions, and afterwards all 65 positions are within 1 % of f/2.8. Both figures draw L11 square-cut at 11.2–11.3 mm, so S19 should match, but at 11.3 mm the S18–S19 combined sag is 2.72 mm (S18 0.970, S19 1.755) of the 3.00 mm gap, above the default 2.70 mm limit. The faces do not cross (0.28 mm of air remains at that height). The smallest admitting cross-gap fraction is 0.91; with it, S19 = 11.3 mm builds and gives the same tele half-field and vignetting. It is not applied here.

The L1 rear / resin rim is the one clear departure: 24 mm against about 21.4 mm in both figures (and roughly the same proportion in the maker's sketch). It is kept because S2 and S3A are the surfaces that limit the engine's paraxial half-field at the wide end. Trial values give 38.36° at 24 mm, 37.89° at 23.6, 36.57° at 22.5, 35.96° at 22.0 and 35.21° at 21.4, so any reduction shrinks the traced field and the drawn value falls below the patent's 37.8°. The real chief ray at 37.8° crosses S2 at 19.17 mm, so the drawn value would not stop the real corner ray, only the engine's paraxial field estimate.

Clearance after the change: the surface validator reports no errors; the image-circle check finds nothing undersized; field coverage reaches 21.65 mm at all 65 positions; EFL 29.0007 mm, f/2.80 and the wide half-field 38.36° are unchanged, as is the tele half-field 29.56°. Wide vignetting is unchanged (41.9 % at 37.8°); at tele it improves from 82.8 to 83.5 % at 14.4° and from 72.8 to 73.4 % at 17.3°. The stricter real-ray check, which launches the full f/2.8 entrance radius (12.14 mm at tele) and reaches the stop at 12.88 mm against the engine's paraxial 12.16 mm iris, still reports marginal heights above the rims at S11 (18.13 mm against 17.5), S14 (17.59), S16 (12.55 against 12.5), S19 (11.75 against 11.1) and S20 (11.99 against 11.3). Meeting it would put L11 at about 11.8 mm, where L10 and L11 almost touch, and the figures draw all of these elements smaller, so it stays a limitation.

The maker's construction diagram, a 315 × 220 px image, was viewed for proportions only. It shows 14 elements in 11 groups at a tele-like setting: L1 marked as high-index low-dispersion glass with an aspherical crescent bonded to its rear (element 1, the hybrid layer), and elements 12 and 13 marked as anomalous low-dispersion glass. Its front-element rear face and its G2 and G4 diameters stand in about the same ratios to the front rim as in Figs. 17 and 21.

Open: the rims stay estimates from another example's drawing. The S19 square-rim raise waits on the cross-gap fraction; the L1 rear reduction waits on a decision about the engine's paraxial field limit.

Coordinator follow-up (same day): S19 raised from 11.1 to 11.3 mm so L11 is square at the S20 height, as Figs. 17
and 21 draw it. The S18→S19 air gap then needs `checks.gapSagFrac` 0.91 (0.90 is refused: 2.72 mm combined sag
against 2.700 mm allowed of 3.00 mm; the faces stay 0.28 mm apart). All 65 stations are within 3% of f/2.8; the
surface, image-circle and field-coverage audits pass. The S2/S3A rim stays 24 mm (see the section above).

## 2026-10-29 — Second review: diagram, labels and movement

Compared: the local lens page at 29, 50 and 68 mm, at `focus=1`, both movement overlays (`mv=zoom` at wide and tele,
`mv=focus`) and the inspector for L1, the resin, L4, L12 and L13, against `US5568323.pdf` Fig. 17 (PDF p. 10,
Example 5, the proxy drawing), Fig. 1 (p. 2), the text of columns 1–7 and 9 (pp. 16–20), Table 3 (p. 20) and the maker's
construction diagram (`sz-faz28-70f28.jpg`, viewed locally).

Fig. 17 was re-measured independently on the native 72 dpi raster. S1's vertex crosses the axis at x ≈ 525 px and S26's
at x ≈ 1561 px; Example 3's wide S1–S26 span of 129.25 mm gives 0.1248 mm/px. The axis tilts about 0.9° and the elements
sit above it, so each rim is half the element's full top-to-bottom ink height.

| Element | Fig. 17 full height, px | Fig. 17 rim, mm | Stored, mm |
| ------- | ----------------------: | --------------: | ---------: |
| L1 front (S1) | 414 | 25.8 | 26 |
| L1 rear curve end (S2/S3A) | 342 | 21.3 | 24 |
| L2 | 348 | 21.7 | 21.5 |
| L3 | 349 | 21.8 | 22 |
| L4/L5 | 268 | 16.7 | 17.5 |
| L6/L7 | 282 | 17.6 | 17.5 |
| L8 | 278 | 17.3 | 17.5 |
| L9/L10 | 196 | 12.2 | 12.5 |
| L11 | 184 | 11.5 | 11.3 |
| L12 | 197 | 12.3 | 12.5 |
| L13 | 207 | 12.9 | 12.8 |
| L14 | 223 | 13.9 | 14 |

Visible silhouette differences, and why no rim changed:

- L1. The figure draws a level outer edge at about 25.8 mm and a flat flange that ends just in front of L2. The site
  slopes the edge from 26 to 24 mm, and L1's rear rim tip sits 1.46 mm behind L2's front rim (S3A sag 11.65 mm at
  24 mm against L2's front rim 10.19 mm behind S3) and 2.5 mm above it. Squaring L1 is impossible: S2/S3A at 25.8 mm
  gives the resin a −0.161 mm edge. The 24 mm rim stays for the engine half-field reason recorded above.
- L3 renders 0.5 mm taller than L2; the figure draws them equal at 21.7–21.8 mm. Within measurement noise; unchanged.
- L4/L5 renders level with L6/L7 and L8; the figure draws it 4–5 % lower (16.7 mm). Within noise, and the strict
  tele axial check needs 17.14 mm at S10; unchanged.
- Every other element agrees within 4 %, in the drawn order of heights (G2 above G3; L12 < L13 < L14 in G4; L9/L10 above
  L11). All other elements are square, as drawn.

| Field | Before | After | Evidence |
| ----- | ------ | ----- | -------- |
| `cemented` names | H1, D2, D3, D4 | H1, C1, C2, C3 | D2–D4 read like the D7/D15/D20 gap labels and skipped D1; H marks the hybrid as in the data spec |
| `doublets` | none | H1 S1–S3A, C1 S8–S10, C2 S11–S13, C3 S16–S18 | Table 3's four cemented components; none were drawn |
| `diagramLabel` | none, so the diagram showed ids 1–15 (L2 drawn as "3", L14 as "15") | L1, L1r, L2–L14 | now matches the element names and the analysis |
| L12, L13 `apdNote` | νd 68.3 "where Pentax describes" anomalous glass | cites the maker diagram's marking of elements 12 and 13 | the diagram colours them as anomalous low-dispersion glass |
| Header and analysis | no label notes | label scheme; patent designations 11-1, 11-2, 11-3 and 11-1a; H1/C1–C3; maker markings for L1 and L12/L13; L1 flange difference | col. 5 and col. 7 text, maker diagram |

The analysis also said "no gap-sag override is used" beside the 0.91 S18–S19 allowance, and quoted the stored rear rims as
11.1–14 mm; both now read correctly.

Checked and found correct:

- Groups G1 S1–S7, G2 S8–S15, G3 S16–S20 and G4 S21–S26 bracket the patent's first lens group 11 and second to fourth
  lens groups 22, 23 and 24 (Fig. 1, Fig. 17, column 7). The G1–G4 text follows the patent's "first … fourth lens group"
  wording; 11, 22, 23 and 24 are only figure reference numerals. The patent gives element designations only in G1, so
  sequential L-numbers are kept.
- All 15 element types agree with the radius signs (for example L2 −894 / +50.854 biconcave, L9 −762 / −35.114 positive
  meniscus, L13 +57.346 / −101.4 biconvex). Table 3 stars only surface 3; only 3A carries `A` and an asphere. The stop
  sits after d15 and 1.68 mm before S16, as in Table 3, and between groups 22 and 23 in the figures.
- APD: the patent designates no special glass. The maker diagram marks elements 12 and 13 (the two νd 68.3 G4 elements,
  L12 and L13) as anomalous low-dispersion glass and L1 as high-index low-dispersion glass, so the two `inferred` tags
  stand and L7 (νd 70.2) stays untagged. The inspector shows them as "APD (INFERRED)", L1 and the resin as "DOUBLET H1"
  and L4 as "DOUBLET C1".
- Zoom order: 65 stations ascend from 29 to 68 mm, labelled only "Wide" and "Tele". Stations 0, 32 and 64 carry Table 3's
  d7 44.65 / 13.61 / 2.97, d15 1.87 / 12.75 / 21.91 and d20 15.58 / 7.91 / 1.90 mm, with BF 39.87 / 47.54 / 53.55 mm.
- Zoom direction, measured from the image plane at wide / middle / tele: G1's front vertex 169.12 / 148.96 / 147.48 mm
  (21.64 mm toward the image; the interpolated path dips to 147.30 mm near 62.9 mm and returns 0.18 mm, so the overlay
  reports 21.82 mm maximum travel); G2's front 104.19 / 115.07 / 124.23 mm (20.04 mm toward the object); G3's front
  78.51 mm and the stop 80.19 mm at every station; G4's front 53.05 / 60.72 / 66.73 mm (13.68 mm toward the object).
  Figs. 1 and 17 draw G1 on a curved path toward the image that ends almost vertical, straight arrows toward the
  object for G2 and G4, and a vertical arrow for G3; column 7 states that G3 is integral with the stop and does not move.
  The G2–G3 space opens and the G3–G4 space closes, as the patent requires.
- Focus: infinity only. Both keyframes repeat the infinity spacings, the slider's far end reads "Not modeled", the
  movement overlay greys out its focus option and opens on zoom, and the focus description says so accurately.

After the edits the engine values are unchanged: EFL 29.0007 mm, f/2.80, half-field 38.36° at wide and 29.56° at tele,
geometric transmission 41.9 % at 37.8° (wide) and 73.4 % at 17.3° (tele). The surface validator reports no errors, the
image-circle check finds nothing undersized, field coverage passes at all 65 stations, and the strict real-ray check
flags the same five S11, S14, S16, S19 and S20 axial heights described above. On the page the labels read L1r / L1,
L2, L3, L4–L8, L9–L11 and L12–L14 without overlap at all three zoom positions, and H1, C1, C2 and C3 stand over their
pairs.

Open: the L1 rear / resin rim (24 mm against the figure's 21.3 mm) and the sloped L1 edge stay until the engine's paraxial
field limit no longer depends on S2/S3A. The resin's `Unmatched` label cannot be improved from the patent: Table 3 gives
only nd 1.52010 and νd 50.8, and columns 2 and 7 call it a resin layer cemented to a glass lens, with no name, no
other line indices and no partial dispersion.
