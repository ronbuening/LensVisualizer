# Audit log — Busch / Martin 210 mm f/11 (US 759,537 A)

## Source

US 759,537 A, K. Martin, *Photographic Objective*. Filed October 3, 1901 (Serial No. 77,445), granted May 10, 1904.
Assigned to Rathenower Optische Industrie-Anstalt vormals Emil Busch A.-G. The scan has three pages: the drawing sheet
(Figures 1 and 2) and specification pages 1–2. The patent has one numerical example, shown in Figure 1; Figure 2
combines two such sets into a double objective. Stored as `patents/US759537A.pdf`.

## Transcription check

Read from 300–1200 dpi renders of the page images, not the scan's text layer.

| Item | Printed | File |
|---|---|---|
| R1, R2, R3, R4 | −22.36, −42.56, −383.35, −33.64 (signs printed) | same |
| D1 (L1), D2 (air), D3 (L2) | 6.15, 3.31, 5.73 | same |
| nD | 1.6031, 1.4967 | same, `indexReference` "D" |
| nG′ | 1.62386, 1.50627 | not traced (no G′ field); recorded in the analysis |
| Glass labels | 0.318, 0.802 (Schott O. 318, O. 802) | not recorded |
| Stop to R1 vertex | Δ/2 = 3.79 | 3.79 (was 3.00, see below) |
| Back focus | not printed | computed paraxial, 250.14 |
| Clear radii | not printed | estimated 12 on all surfaces |

The page-2 curvature values ρ = F/R (−6.02, −3.16, −0.35, −4.01) match the printed radii with F ≈ 134.7. That is the
paraxial focal length of the Figure 2 double built from two sets at Δ = 7.58 mm (134.77 mm), so the radii and the
Δ/2 value agree with each other.

## First-order and aberration checks

- Paraxial EFL 210.19 mm against the stated 210 (+0.09 %).
- At f/11 the marginal ray lands within 0.01 mm of the paraxial focus, as stated ("exactly spherically corrected").
  The zone error at the 0.7 zone is about 0.39 mm, which is 0.19 mm scaled to f = 100; the patent states 0.25 mm.
- Using the printed nG′, the G′ focus lies 0.110 mm beyond the D focus, 0.52 per mille of f. The patent states
  0.5 per mille overcorrection.
- Coddington trace at 34° half-field (the stated 68° field), stop at 3.79 mm: sagittal +0.70 mm, tangential
  +0.17 mm. With the stop at 3.00 mm the tangential focus is +16.5 mm.

## Inferred values

- Clear radii: 12 mm on every surface, an estimate. Figure 1, drawn to scale, shows L1 at about 14 mm (concave face
  about 10 mm, with a flat land outside it) and L2 at about 15.4 mm.
- Back focus: the computed paraxial D-line value.
- Abbe numbers: not printed and not entered, so the model traces at one wavelength.

## 2026-11-16 — Deployment validation

The page images were re-read independently:

- every radius with its sign, every thickness and air space, both nD and nG′ pairs, the Δ/2 entry;
- the bibliographic data on the drawing sheet and the specification heading;
- Figure 1, against the data file's elements and stop.

Verdict: the prescription is transcribed exactly and reproduces the stated focal length, f/11 spherical correction,
chromatic overcorrection and 68° astigmatic correction once the printed stop distance is used. The product link is a
design-family one. Martin's 1902 article and the 1911 *Encyclopædia Britannica* tie this two-meniscus principle to
Busch's 1902 Omnar, a symmetrical doublet whose back half can be used alone. The Austrian counterpart, AT 8364 B, covers
the same objective. No catalogue ties the 210 mm f/11 example to a listed Omnar size.

Changes:

- Stop-to-R1 gap: 3.00 → 3.79. The patent prints Δ/2 = 3.79; Figure 1 measures about 3.8 mm. The 3.00 mm estimate
  lost the stated astigmatic correction (tangential focus +16.5 mm at 34°). It also left the R1 rim at 12 mm 0.49 mm
  ahead of the stop plane. At 3.79 mm the rim clears the plane by 0.30 mm.
- `catalog.specs`: "ESTIMATED STOP OFFSET AND RIMS" → "ESTIMATED RIMS".
- `source.patentNumber`: "US 759,537" → "US 759,537 A".
- `source.assignees`: "Rathenower Optische Industrie Anstalt vormals Emil Busch AG" → "Rathenower Optische
  Industrie-Anstalt vormals Emil Busch A.-G.", the company form of the patent heading.
- `catalog.focalLengthMm.design`: 210.19329162195746 → 210.19.
- `aperture.maxFNumber`: added, 32. Without it the f/22 and f/32 stops were hidden.
- A plain-English header comment was added to the data file.
- The analysis was rewritten.

First order after the changes (`built.mjs`, `probe.mjs`):

- EFL 210.19 mm, f/11, stop radius 9.55 mm.
- Back focus 250.14 mm; stop-to-image length 269.12 mm.
- L1 f = −88.22 mm, L2 f = +73.84 mm.

Audits:

- `audit:surface`: OK.
- `audit:aperture`: no rim limit at f/11.
- `audit:image-circle`: skipped (no image format).
- `audit:field-coverage`: skipped (hidden).

Open:

- Maker prefix: `scripts/maker-prefixes.mjs` has no entry for "Emil Busch". The organizer would derive the folder
  `emil/` from the first word, so add `EMIL BUSCH` → `emil-busch`. Use the same maker string for any other Busch
  file. (Closed: the entry was added with the file move.)
- Wording: `name`, `subtitle`, the "PATENT ONLY; NO RETAIL MATCH" spec (understates the Omnar family link),
  `indexReferenceNote` ("Reference-line-only analysis") and `focus.description` still need the cleanup pass.
  (Closed 2026-11-17, see below.)
- `source.example`: "Figure 1" is kept. The patent has one numerical example, which it introduces as shown in
  Figure 1; decide whether the house form should be "Sole example". (Closed: "Figure 1" kept, as the subtitle form
  follows the figure the file uses.)
- Glass labels: Schott O. 318 and O. 802 could go into `glass` on L1 and L2. (Closed 2026-11-17: unmatched labels
  naming them.)
- Abbe numbers: estimates near 38 and 65 come from nG′ − nD. Enter a νd only if a period Schott list gives O. 318
  and O. 802 values that also match the printed nD and nG′.
- Rims against Figure 1, for the SD pass: R1 about 10 mm plus a flat land to about 14 mm, R2 about 14 mm, R3/R4
  about 15.4 mm. At 34° the 12 mm rims pass about 64 % of the meridional beam, against about 81 % at the drawn sizes.
  (Closed 2026-11-17 by the semi-diameter pass below.)

## 2026-11-17 — Cleanup and wording pass

The optics are unchanged. No radius, thickness, index, stop or rim was edited.

Data file:

- `subtitle`: "1901 DESIGN / 1904 GRANT — MONOCHROME REFERENCE" → "US 759,537 A, Figure 1 — Busch Omnar-type
  anastigmat".
- `specs`: "2 ELEMENTS / 2 GROUPS", "PATENT ONLY; NO RETAIL MATCH", "ESTIMATED RIMS", "INFINITY ONLY" →
  "2 ELEMENTS / 2 GROUPS", "DESIGN f = 210 mm", "DESIGN F/11", "ALL SPHERICAL", "68° FIELD".
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value).
- `focus.description`: → "Infinity focus only; the patent gives no close-focus data."
- `indexReferenceNote` (both elements): reworded in plain words. The D-line index is as printed; nG′ is printed but
  no Abbe number.
- `glass` added:
  - L1 "Unmatched (Schott O. 318; nD 1.6031, nG′ 1.62386, no Abbe number printed)".
  - L2 "Unmatched (Schott O. 802; nD 1.4967, nG′ 1.50627, no Abbe number printed)".
  - Neither label resolves to a catalogue row. The nearest rows are F5 for L1 (nd 1.60342 / νd 38.03, about 0.0002 above
    the printed nD at the D line and 0.0003 off at G′) and BSC3 / BSL3 for L2 (nd 1.49831, about 0.0015 off). Neither is
    exact, so both elements stay monochromatic.
- `role` added to both elements: the flint meniscus that flattens the field and corrects astigmatism; the crown
  meniscus that carries the positive power.
- The header comment's glass paragraph now mentions the unmatched labels.
- No cemented pairs: `groups` and `doublets` stay empty.

Analysis:

- The H1 is now the model name.
- The Omnar link is stated once, under Design Heritage and Context.
- "Model Verification" is renamed "Model Scope and Limitations".
- Glass lines now match the unmatched labels.
- Process wording was removed ("reference", "reconstruction").

Engine numbers, identical before and after (`built.mjs`, `probe.mjs`):

- EFL 210.193 mm, f/11, stop radius 9.554 mm.
- Half-field 38.42°, BFD 250.141 mm, total length 269.121 mm.
- L1 −88.22 mm, L2 +73.84 mm.

Audits:

- `audit:surface`: OK.
- `audit:aperture`: no rim limit.
- `audit:image-circle` and `audit:field-coverage`: skipped (no image format).

Open:

- Rims against Figure 1, for the SD pass: R1 about 10 mm with a flat land to about 14 mm, R2 about 14 mm, R3/R4 about
  15.4 mm. (Closed 2026-11-17 by the semi-diameter pass below.)
- Abbe numbers: enter one only if a period Schott list gives O. 318 and O. 802 values that also match the printed nD
  and nG′.
- `catalog.imageFormat` and `lensMounts`: no source states a plate size or mount for this example, so both are unset.
  (Mount closed 2026-11-17, see below; the format stays open.)

## 2026-11-17 — Semi-diameter pass against the patent figure

Source: US 759,537 A, drawing sheet (PDF page 1), Figure 1, the single objective of the modelled example. The page was
read at 1200 dpi with the axis at row 4848.

Scale: 31.9 px/mm, from the axial thicknesses of L1 (198 px for 6.15 mm, 32.2 px/mm) and L2 (181 px for 5.73 mm,
31.6 px/mm). Three checks agree with it:

- The R1 arc: sag 54 px and 66 px at 268 px and 292 px from the axis, the 22.36 mm radius at 31.6 px/mm.
- The drawn stop opening: 302 px above and 310 px below the axis, 9.6 mm against f/11's 9.55 mm.
- The stop-to-vertex distance: about 125 px, 3.9 mm against the printed Δ/2 = 3.79.

The drawn air space is shorter than printed (87 px for 3.31 mm), so the figure gives heights and proportions, not
the gap. Outer heights were read on the clean lower side with the profiler and checked on the upper side.

| Surface | Before | Figure | After | Evidence |
|---|---|---|---|---|
| 1 (L1 front, concave) | 12 | curve ends at 320 px = 10.0; flat front land to 461 px = 14.45 | 10, `rimExtensionSd` 14.4 | Figure 1 draws the concave face ending in a vertical land at its edge sag |
| 2 (L1 rear) | 12 | runs to the 461 px edge = 14.45 | 14.4 | Square outer edge with the land |
| 3 (L2 front) | 12 | 507–511 px = 16.0 | 16 | L2 drawn square-cut at one height |
| 4 (L2 rear) | 12 | 507–511 px = 16.0 | 16 | as surface 3 |

The stop and its radius are unchanged. The land sits at R1's sag at 10 mm, 2.36 mm ahead of the vertex and 1.43 mm
behind the stop plane; the figure draws it about 1.2 mm behind the diaphragm. At 16 mm the edge of L2 is 2.0 mm
thick; the figure draws about 2.2 mm.

Light and clearance:

- The f/11 axial beam reaches 9.55 mm at R1, so the 10 mm concave face passes it. `audit:aperture` reports no rim
  limit, and `audit:surface` reports no validation errors with the land included.
- Chief ray: the old rims passed it to 43.3°; the new ones pass it to 55°.
- Corner light was measured on a scratch copy given a 283.6 mm image circle, the stated 68° at 210.19 mm, because the
  file has no format and the app's default field stops at 5.9°. Full-pupil transmission at 34.6° is 54.5 % with the
  old rims and 84.5 % with the new ones. The new rims gain 30 points there and lose nothing at any field.
- The 10 mm concave face is the only cut. Restoring it to 12 mm alone wins back at most 0.2 points (at 20–23°), so it
  stays under the lands rule.
- On the default field the worst change is a 4.3-point gain.

Engine before and after (`built.mjs`, `probe.mjs`):

- EFL 210.193 mm, f/11 and stop radius 9.554 mm are unchanged.
- BFD 250.141 mm is unchanged.
- The default half-field rises from 38.42° to 46.60°, set by the model's geometry, not by the patent.

`sdSource` changes from "heuristic" to "figure-measured". A side-by-side overlay of the figure and the model sketch at
matched scale was kept outside the repo. The sketch tool draws the land as a slanted line, but the profile, heights and
stop agree with the figure.

Metadata:

- `catalog.lensMounts` set to `["large-format-lens-board"]`. The patent describes a photographic objective of 210 mm
  focal length covering 68°, which is a plate-camera lens. A collector's record of the Busch Omnar shows a 255 mm Omnar
  used on a 13 × 18 cm wooden camera
  (https://apenasimagens.com/en/omnar-emil-busch-en/). The corpus files the 1902 Heliar patent design the same way.
- `imageFormat` stays unset. The patent names no plate size. A 283 mm circle would cover 5x7 (218.5 mm diagonal) but
  not 8x10, and no source ties this example to a format.

Product name: the best source, the 1911 *Encyclopædia Britannica*, calls the commercial lens the Omnar (Series I–III), a
symmetrical doublet; this file is one half of that type. The current `name`, "EMIL BUSCH 210mm f/11
(US 759,537 Design)", makes no product claim and matches the evidence. "Omnar" belongs in the subtitle, not the name.

Open:

- `imageFormat` / `imageCircleMm`: 5x7, or a 283 mm circle from the stated 68° field, if the coordinator accepts the
  patent's angle as the source. Until then the app's analysis field defaults to the 35 mm diagonal (5.9°). (Closed:
  see the next line.)

`catalog.imageCircleMm` set to 283, the stated 68° at the printed focal distance of 210 (coordinator's decision);
`imageFormat` stays unset. Results after the change:

- `audit:image-circle`: 0 undersized; the chief ray reaches 141.5 mm at 37.4° off axis, clear.
- `audit:field-coverage`: 1 station, at least 99 %.
- `built.mjs`: unchanged; EFL 210.193 mm, f/11, half-field 46.60°.
- `rimcost --loo` against the baseline:
  - corner light at 37.4° goes from 49.9 % to 79.8 %, and at 34.5° from 54.6 % to 84.6 %;
  - no field loses light;
  - restoring R1 to 12 mm wins back at most 0.2 points.

## 2026-11-17 — Second review on the local site

Compared: the live page on the branch's local server (the standard 1400 × 900 shot and a 4× device-scale shot of the
diagram, which is only about 40 px wide on the default page because of the 250 mm back focus), the inspector of both
elements and the focus-movement overlay, against Figure 1 on the drawing sheet (PDF page 1, a 300 dpi scan read at 600
and 1200 dpi) and the table on specification page 1.

Scale, re-derived (1200 dpi, axis at row 4847.5):

- Axial thicknesses, outer edge to outer edge: L1 200.5 px, L2 187 px, both 32.6 px/mm; their ratio, 1.072, matches
  the printed 6.15 / 5.73 = 1.073. Allowing for the line width gives about 32 px/mm.
- The R1 arc fits the printed 22.36 mm at 32 px/mm within 4 px at 13 of 15 heights on both sides of the axis; two
  upper points near the rim lie 7 px deeper.
- The diaphragm opening is 300.5 px above and 308.5 px below the axis, 9.55 mm at 31.9 px/mm against f/11's
  9.554 mm.
- The R4 arc is engraved flatter (it fits about 36 px/mm) and the air space shorter (85 px, 2.66 mm against the
  printed 3.31), so neither sets the scale.

Readings against the file, at 32 px/mm:

| Surface | File | Figure | Verdict |
|---|---|---|---|
| 1, concave face | 10 | curve leaves the land at 306.5 px above (9.6) and 317.5 px below (9.9); meets the land line's inner edge near 10.3 | keep |
| 1, land and L1 edge | `rimExtensionSd` 14.4 | top and bottom edges 457.5 / 465.5 px, 14.4 | keep |
| 2 | 14.4 | runs to the same edge; the top corner lies within 0.25 mm of R2's sag | keep |
| 3, 4 | 16, square | 254–256 px at 600 dpi, 15.9–16.0, flat top edge | keep |

The figure draws the land as a flat front annulus with a square top edge, which is how the page draws
`rimExtensionSd`. The drawn land plane lies 38 px (1.2 mm) behind the centre of the diaphragm bar, itself 1.25 mm
thick; the model puts it 1.43 mm behind the stop plane, at R1's sag for 10 mm. The drawn plane is about 0.45 mm ahead
of R1's sag at the drawn curve end, an engraving offset: matching it would need the curve to end near 10.8 mm, which
the drawn curve does not support. A side-by-side of the figure and the live diagram at 16 px/mm shows the heights, the
land, L1's square top edge and the square-cut L2 as drawn. No rim changes.

Lands and cuts, `rimcost.mjs --loo` against the rims before the semi-diameter pass: the R1 cut (12 → 10) costs at most
0.2 points (99.8 against 100.0 % at 20.1°), and the file is at or above the baseline at every field: worst loss 0.0,
gain 30.0 points at 37.4° (49.9 → 79.8 %). Removing the land changes no field. Both stay: the cut costs only slightly
and the land costs nothing and is drawn.

Change: element `focalLengthMm`. The inspector showed "FL = —" for both elements. L1 −88.22 and L2 +73.84 were added,
the D-line paraxial values from `probe.mjs --elements` that the analysis already quotes; the inspector now reads
"FL = −88.22 mm" and "FL = +73.84 mm". Engine EFL 210.193 mm, f/11, stop radius 9.554 mm and half-field 46.60° are
unchanged.

Checked and found correct:

- `type`: L1 a negative meniscus (R1 −22.36, R2 −42.56, the front more strongly curved), L2 a positive meniscus
  (R3 −383.35, R4 −33.64), both concave to the object. Roles are true.
- Names L1 and L2: the patent labels only the surfaces (R1–R4) and spacings (D1–D3). No aspheres, no `apd` tags (the
  patent names ordinary glasses), and no brackets: two air-spaced singlets, as Figure 1 draws.
- Stop: drawn 3.79 mm ahead of R1, the printed Δ/2, in front of L1.
- Movement: no gap or zoom block, `closeFocusM` 1e15, the slider shows "Not modeled", the movement overlay reports no
  modelled movement, and `focus.description` says only that the patent gives infinity data.
- Real chief ray (meridional trace): it reaches the 141.5 mm image-circle edge at 37.4° and clears every rim to 54.9°,
  where R4 limits.
- `audit:surface` OK; `audit:aperture` no rim limit; `audit:image-circle` 0 undersized; `audit:field-coverage` 100 %
  at 37.4°, clear. `clearap.mjs` and `clearap2.mjs` find no ray for this file (stop at index 0), so the field-coverage
  audit and the meridional trace stand in for them.

Glass and colour: both elements stay monochromatic. Every vendor AGF row was evaluated at the D (589.29 nm) and G′
(434.05 nm) lines; none matches both printed indices within 1e-4. For L1 the nearest are F5, E-F5, PBM5 and S-TIM5
(nD +0.00018, nG′ +0.00034 to +0.00042); BAM25, BAFD5 and BASF5 match nD within 2e-5 but miss nG′ by 0.002. For L2
only FCD1-type rows lie within 2e-4 at D, and they miss nG′ by 0.0017. The patent has one example and prints no other
line, Abbe number or aberration curve. Scaling (nD − 1)/(nG′ − nD) against F5 and N-BK7 gives νd of about 38.3 and 64,
as the analysis says. The stated 0.5 per mille G′ overcorrection is reproduced paraxially (0.52, recorded above).

Assignee: "Rathenower Optische Industrie-Anstalt vormals Emil Busch A.-G." is the only Busch assignee in the corpus,
so there is no variant to consolidate. The patent heading prints "Rathenower Optische Industrie, Anstalt, vormals Emil
Busch, A.-G.".

## 2026-11-20 — Maker merged into Busch

Main added a Busch maker for the von Rohr Pantoskop (`maker: "Busch"`, slug `busch`, with an `EMIL BUSCH` prefix)
while this file used its own "Emil Busch" maker and `emil-busch` slug. To keep one maker page for the Rathenow
works, `maker` is now "Busch", the file moves to `busch/`, and the separate `emil-busch` maker profile is dropped; its
paragraph on Karl Martin, the Omnar and this patent moved into the Busch profile. The name keeps its `EMIL BUSCH`
prefix, which maps to `busch`. The two profiles disagreed on the founding year (Busch 1800 from NDB 3; the dropped
profile 1801, the year of the royal privilege in NDB 4); the Busch profile's 1800 stands.
