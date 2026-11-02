# Source and inference audit

Table III and Fig. 3 contain 11 powered elements in 10 groups and no built-in filter prescription. The manufacturer drawing has an extra filter body after L5. Filter parameters remain absent; the model does not assert exact retail behavior.

Optical input source: second embodiment, Fig. 3 at PDF page 3 and Table III at PDF page 6. The label follows the numbered prescription table, not an invented Example 2. Lengths × 0.18 from F = 100; source back focus 199.7 × 0.18. Explicit d-line indices.

The author inspected the primary table, the optical figure and the supplied maker pages.

The package data used a midpoint iris and an inferred `sd` set; both were replaced on 2026-11-02 (closed, see below). No R, d, nd, νd or image-plane optimization occurred.

The optical data are static at infinity.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read from the page images of US 3,841,736 (Table III and the table in claim 2): 21 radii, 20 axial spacings, FB, 11 nd and 11 νd, each compared as printed value × 0.18. No mismatches. Table IV is captioned "Table I", but it recomputes from Table III: all five columns agree to 0.009 per surface, with sums 4.610, 0.396, −0.033, 0.142, 0.262 against the printed 4.61, 0.40, −0.03, 0.14, 0.26. Row 1 of S1 prints 0.20 for 0.02, and the sum confirms 0.02. The coma and astigmatism columns set the pupil 5.36 behind r12 at F = 100. Fig. 3's shapes match Table III. Exact rays give spherical aberration +1.26 at the margin and −1.30 at 0.7 of it, and distortion −4.8 % at 51°, as in Fig. 4. Table I as printed computes to EFL 117.5, so that embodiment is misprinted and was not a candidate.

Patent vs model: printed F = 100, 1:3.5, FB = 199.7, half field 51°. At × 0.18 that is 18.00 mm, F/3.5, 35.946 mm; the model gives EFL 17.998 mm, F/3.50, paraxial back focus 35.948 mm, total length 92.25 mm (summed; not printed). The printed F1234, F123456, F7 and F8 reproduce within 0.03 at F = 100. The 51° chief ray lands at 21.15 mm, 98 % of the 21.65 mm corner. The patent's back focus is the plate-free trace (199.71). A 1 mm plate in d10 with the gap unchanged would move EFL by +0.39 mm and back focus by +0.62 mm, so a retail plate is not a negligible omission; LENS_DATA_SPEC.md excludes any plate the source does not list.

Maker comparison: Asahi Pentax lens brochure (cameramanuals.org), p. 11 table: minimum aperture 22, 100°, 11–12 (groups–elements), FA, 0.25 m, 63 × 61.5 mm, 328 g, filter column BI (filters built in). The p. 2 text gives four built-in filters and provision for rear gelatin filters. The p. 2 section icon has 12 bodies. L1 to L6, L10 and L11 fit Table III's arcs. A thin plate sits right after L5. At the model's scale the cemented L7/L8 is about 4.3 mm against Table III's 5.33 mm, and L9 about 5.2 mm against 2.63 mm. The stepped rim is on L9, not L10. No Takumar 18mm f/3.5 was found in Wikipedia's list or on page 1 of the AOHC catalog (pages 2 and 3 unseen). US 3,976,367 (same inventors, about F/2.8 and 95°, lists a filter) fits worse.

Fields changed. Data fix: `projection`, the r12 gap split at 0.965 + 1.8574 mm, `catalog.elementCount` and `groupCount` to Pentax's 12 and 11, `closeFocusM` to 0.25, and all rims except S2. Fig. 3 was read by an arc fit (12.75 px/mm, vertical 1.04 × axial, 99.7 % of arc points on ink). Rims were held to a 2.9-point worst loss against the package rims (42°, 100.0 to 97.1 %); illumination at 51° went from 50.7 % to 48.1 %. In this cleanup: header comment, `subtitle`, `catalog.specs`, `focus.description`, element `role`, `focalLengthMm` added, `doublets` entry C1 added. The analysis lost its package-run diffraction and pupil-count sections, stray text about other lenses and the old `sd` list, and gained the Conditional Expressions section. No R, d, nd, νd or `sd` changed in the cleanup.

Open: Pentax's L9 and cemented L7/L8 differ in thickness from Table III, so the retail prescription may differ in that part of the lens. A later Asahi patent or a teardown could settle it.

Open: the filter plate's thickness and index are unknown. Adding it needs a source that prints them.

Closed: S2 went from 13.8 to 14.3 mm, the height Fig. 3 draws, in the semi-diameter pass below.

## 2026-11-02 — Semi-diameter pass against the patent figure

Source: US 3,841,736, Fig. 3 of Table III, on PDF page 3 (sheet 2 of 2), read from the native 2320 × 3408 raster. No lateral-aberration fans are printed, so the figure is the only rim evidence. Pentax's section drawing was used as a check on order and proportions.

Axial scale: 19 ink crossings beside the axis give the 21 vertices, with r4/r5 and r17/r18 merged. A least-squares fit gives 9.229 px/mm, and r1 to r21 gives 519.5 px over 56.304 mm, or 9.227 px/mm. The largest residual is 3.9 px (0.42 mm), which is drafting. Vertical scale: arc fits with Table III's radii held fixed give vertical/axial ratios of 0.93 to 1.15 on the faces with |R| < 30 mm, mean 1.04, median 1.05. r1 gives 0.99 and r2 gives 1.03. The figure is therefore a hand drawing with about 4 % stretch, not a clean anamorphic sheet, and heights use 9.60 px/mm. Reading r1 and r2 by the axial position of their tips, which needs no vertical scale, gives 19.0 and 14.4 mm.

Offset: the elements sit above the drawn axis line, by 3.75 px at L5, 3.25 px at L6, and 2.5 px at L7/L8, against about 1 px at L1. A height read above the axis alone runs high, so every reading here is half the top-to-bottom span, stroke centre to stroke centre. The tops carry the leader lines; the lower side is clean, and the two sides agree apart from that offset.

| Surfaces | Package | Before | Fig. 3 | After | Evidence |
| --- | --- | --- | --- | --- | --- |
| 1 | 27.37 | 18.6 | 18.1 to 19.0 | 18.6 | Retained: within the reading, and 18.3 would cost 4.5 points at 51° |
| 2 | 13.8 | 13.8 | 14.0 to 14.4 | 14.3 | Raised: the tip of L1 and its slanted rim now lie on the drawing, and light past 42° rises |
| 3, 4 | 18.68 | 14.1 | 13.8 | 14.1 | Retained: noise, and L2's top edge stays square |
| 5 | 14.54 | 9.4 | 9.0 | 9.4 | Retained: noise, and at the budget |
| 6 | 8.0 | 7.65 | 7.3 | 7.65 | Retained: noise, and at the budget |
| 7 | 11.58 | 7.5 | 6.7 | 7.5 | Retained: at the budget |
| 8 | 8.0 | 6.9 | 5.6 to 6.1 | 6.9 | Retained: at the budget |
| 9, 10 | 10.26 | 6.95 | 5.4 | 6.95 | Retained: at the budget |
| 11, 12 | 8.64 | 6.9 | 5.8 | 7.1 | Raised for step order: Fig. 3 draws L6 0.37 mm taller than L5 and 0.8 mm taller than L7/L8, and both sides agree. No light cost |
| 13, 14, 15 | 7.5, 7.5, 8.5 | 6.7 | 5.0 | 6.7 | Retained: at the budget, and one height for the square rim |
| 16 | 7.5 | 7.15 | 5.2 | 7.15 | Retained: at the budget |
| 17 | 7.5 | 7.35 | 5.6 | 7.35 | Retained: at the budget; the arc's axial end agrees at 5.6 |
| 18, 19 | 11.44, 9.0 | 8.2, 8.4 | 6.9 | 8.0, 8.0 | Lowered, one height as drawn; stops where 42° starts to pay |
| 20, 21 | 10.2 | 9.1 | 7.6 | 8.7 | Lowered, square rim kept; stops where 42° starts to pay |

Light, full-pupil lattice, wide open at infinity, for this exact rim set:

| Field | Package rims | Before | After |
| --- | --- | --- | --- |
| 39° | 100.0 % | 99.4 % | 99.6 % |
| 42° | 100.0 % | 97.1 % | 97.2 % |
| 45° | 90.1 % | 88.4 % | 88.5 % |
| 48° | 72.0 % | 69.9 % | 74.3 % |
| 51° | 50.7 % | 48.1 % | 52.5 % |

The worst loss against the package rims is 2.8 points at 42°, inside the 3-point rule, and the corner now beats the package by 1.8 points. S2 alone took 51° from 48.1 to 61.2 % and 48° from 69.9 to 78.4 %, and the L10 and L11 cuts spent part of that. It did nothing at or below 42°, where the budget binds. Below 45° each rim from L3 to L10 sits at about the same cut of the same beam: raising any two gains at most 0.2 points at 42°, and lowering any one by 0.05 mm costs 0.1 to 0.4 points there, which breaks the rule on S6, L5, L7/L8, S16 and L10 and leaves S5, S7, S8 and S17 less than 0.1 mm of room. L4 to L9 therefore cannot move toward the figure on this budget and stay 0.8 to 2 mm above it. Restoring one element at a time wins back 3.7 points at 48° on L3, 3.2 points at 51° on L11, 0.4 points at 39° on L5, and 0.1 or less elsewhere.

No lands or cuts were added: every drawn edge lies at or below its optical rim, so `rimExtensionSd`, which only adds height, has nothing to draw, and Fig. 3 draws no flat land on a deep rim. `checks.gapSagFrac` stays at its default. The validator's cross-gap check refuses S2 at 14.3 mm only if L2 rises to meet it, which the figure does not support.

Clearance: the image-circle check reports nothing undersized, the surface validator is clean, and the traced beam shows no axial clip or blocked chief ray. F/3.50, EFL 17.998 mm and the 5.66 mm stop are unchanged. The declared half field stays 51°, and the engine's ray-solved field limit rises from 39.5° to 40.5° because S2 sets it. The 51° chief ray still lands at 21.15 mm. Live render at the static infinity state and at the focus slider's far end (no modeled focus change) matches Fig. 3's outline at L1, L2, L3, and the rectangle of L7/L8.

Maker comparison from Pentax's section drawing at about 11.05 px/mm: L1 17.4, L2 13.5, L3 8.8, L4 7.4, L5 7.6, plate 5.4, L6 6.3, L7/L8 5.7, L9 6.1, L10 7.2, L11 7.9 mm. It has the model's order plus the plate after L5, 12 bodies in all, and no aspherical or special-glass mark. It is fuller than Fig. 3 from L4 back, which supports stopping above the figure there. It disagrees with Fig. 3 on one step: L5 is taller than L6 in Pentax's drawing and shorter in Fig. 3. Fig. 3 governs, and the two agree that L6 stands above L7/L8.

Limitations: S8 stays 0.05 mm below L5, where Fig. 3 has its tip 0.2 to 0.7 mm above; raising S8 would take L4's rim further from the drawing, and the two are a tip and a flat edge. L9 keeps a thin edge at 7.35 mm, about 0.46 mm against 1.3 mm in the figure.

## 2026-11-02 — Second review: diagram, labels and movement

Compared: the local page at the static infinity state and at the focus slider's far end, Fig. 3 of US 3,841,736 at its native raster (PDF p. 3), the text of columns 1 to 8, and Fig. 4. Pentax's section drawing was used for order only. Table III was re-read against the file: all 21 radii, 20 spacings and FB are the printed values × 0.18, and the 2.8224 mm of d12 is the 0.965 + 1.8574 mm stop split.

Changes:

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| S16, S17 `sd` | 7.15, 7.35 | 7.3, 7.3 | Fig. 3 draws L9 with a short flat top, under 1 mm long, and the site showed a slanted one. 7.30 is the smallest one-height value inside the budget; 7.29 loses 3.04 points |
| L7, L8 `cemented` | D1 | C1 | The inspector chip read DOUBLET D1 while the bracket and the `role` text read C1, and D1 collides with the gap label d1 |
| `groups` | absent | FRONT 1 to 8, REAR 9 to 21 | See below |
| `focus.description` | Spoke of close-focus spacings only | States that the patent says nothing about focusing | See below |
| `role` of L1, L2, L5, L9, L11 | "negative group", "positive section", "rear section" | "front group", "rear group" | Agree with the brackets and the patent's two names |

Groups: the patent names both units in words and gives neither numerals nor members: "front or object side lens group" and "image side or rear lens group" (col. 2, lines 15 to 25), then "object side group" and "image side group". The requirement (1) paragraph ties the front group to the negative lenses of F1234 and sets it against "the fifth lens and the following lenses", so the brackets divide at L4/L5. Requirement (2) goes on to "the seventh lens and the following lenses", and col. 2 puts the diaphragm before L7, so a division at the stop remains a possible reading. The analysis calls the brackets a reading of the text. The coordinator can delete `groups` without touching anything else.

Element numbers: Fig. 3 prints 1 to 11, complete, and col. 4 says the numerals "generally consecutively designate the lenses". The diagram already draws those numerals from the element ids, so `diagramLabel` stays absent and `name` stays L1 to L11. Fig. 3 has no f or d labels; those appear on Fig. 1 only. The surface labels 1 to 21 are the patent's r and f numbers. C1 is right: col. 4 cements lenses 7 and 8, Table III prints no air between r13 and r15, and the bracket spans 13 to 15.

Checked and found correct: every `type` against the signs of R, the `focalLengthMm` of all 11 elements (recomputed in air, all within 0.001 mm), each `role` against columns 2 and 3, the stop between L6 and L7 at Table IV's pupil position, no `A` suffix or `asph` entry (Table III is all spherical), and no `apd` tag (neither the patent nor Pentax's drawing marks a special glass). The patent's glass data are nd and νd only; no label is `Unmatched`. The conditional-expression values were not recomputed in this pass.

Focus: there is no paragraph to quote. The word appears only as "back focus" and "rear focus", so the patent names no focusing lens or direction. Group movement reads "This lens has no modeled focus or zoom group movement", and the slider's far end reads "Not modeled" and changes nothing. With no zoom and no `gaps`, no movement order applies.

Cuts and lands, with light measured against the package rims at infinity, wide open. Cost is the points won back by restoring that element alone from the final rims, at its best field. There are no lands: `rimExtensionSd` and `rimCutDepthMm` are absent and `checks.gapSagFrac` stays at its default.

| Surfaces | Figure | Baseline | Final | Cost | Verdict |
| --- | --- | --- | --- | --- | --- |
| 1 | 18.1 to 19.0 | 27.37 | 18.6 | 0.1 at 51° | Keep: slight, and inside the reading |
| 3, 4 | 13.8 | 18.68 | 14.1 | 0.0 | Keep: slight. The full restore is refused at the 2→3 gap, 7.79 against 7.706 mm |
| 5, 6 | 9.0, 7.3 | 14.54, 8.0 | 9.4, 7.65 | 3.7 at 48° | Keep: slight, since 48° stays above baseline |
| 7, 8 | 6.7, 5.6 to 6.1 | 11.58, 8.0 | 7.5, 6.9 | 0.0 | Keep: slight |
| 9, 10 | 5.4 | 10.26 | 6.95 | 0.4 at 39° | Keep: slight |
| 11, 12 | 5.8 | 8.64 | 7.1 | 0.0 | Keep: slight |
| 13, 14, 15 | 5.0 | 7.5, 7.5, 8.5 | 6.7 | 0.0 | Keep: slight |
| 16, 17 | 5.4, 5.6 | 7.5 | 7.3 | 0.1 at 42° | Keep: slight; squared here |
| 18, 19 | 6.9 | 11.44, 9.0 | 8.0 | 0.0 | Keep: slight |
| 20, 21 | 7.5 | 10.2 | 8.7 | 3.2 at 51° | Keep: slight, since 51° stays above baseline |

S2 is a raise, not a cut (13.8 to 14.3): Fig. 3's tip reads 14.0 by half span and 14.4 by its axial position, which supports it.

| Field | Baseline rims | Before | After |
| --- | --- | --- | --- |
| 39° | 100.0 % | 99.6 % | 99.6 % |
| 42° | 100.0 % | 97.2 % | 97.1 % |
| 45° | 90.1 % | 88.5 % | 88.5 % |
| 48° | 72.0 % | 74.3 % | 74.3 % |
| 51° | 50.7 % | 52.5 % | 52.5 % |

The final worst loss is 2.9 points at 42° (2.91), inside the 3-point rule.

Trading L4 to L9: none is worth it. My own readings of L2, L5, L6, C1, L9 and L11 agree with the first pass within 0.2 mm. At 42° the rims form two rails on opposite sides of the pupil, which is why opening any one element gains 0.1 points or less while cutting any one but L6 by 0.25 mm costs 2.0 to 3.6. L3 to L6 opened together by 1 mm take 42° from 97.2 to 99.3 %; L7 to L11 opened together by 0.6 mm take it to 98.0 %. A trade therefore has to move a whole rail. Front +0.1 mm with rear −0.1 mm gives 2.73 points, which is neutral and moves L3 off a good fit, +0.2 with −0.2 gives 3.10 and fails, and rear +0.1 with front −0.1 gives 3.66. A constrained search of 1606 trials from these rims found only L6 −0.1, S17 −0.05 and L11 −0.05, a 1.5 % better summed fit; all three are inside measurement noise, and the L6 move would eat its step above L5, 0.15 mm here against 0.37 mm drawn. The figure also cannot be reached at L7/L8 on any budget: its 5.0 mm lies under the F/3.5 axial ray, which is 5.57 mm at S13, and L6's 5.8 mm lies under 6.11 mm at S12.

Silhouette differences that remain: L5 to L9 stand 1.3 to 1.9 mm above the figure against 0.5 mm or less at L1 to L3, so that band reads larger on the page. Every drawn step between neighbouring elements keeps its order, except that S8's tip stays 0.05 mm under L5. L9's edge is 0.49 mm against about 1.3 mm drawn.

Clearance: the surface validator is clean, the image-circle check reports nothing undersized, the traced beam shows no axial clip or blocked chief ray, and the corner check still reads 51.0° to 21.15 mm of 21.65 mm. Engine half field 51° and tracing limit 40.5°, F/3.50, EFL 17.998 mm and the 5.66 mm stop are unchanged. The page's console shows no errors.

Maker drawing, order only: 12 bodies in 11 groups, namely L1 to L5, the thin plate, L6, cemented L7/L8, stepped L9, L10, L11. That matches Pentax's table and the model's order. The page's specs print 12 ELEMENTS / 11 GROUPS and FILTER PLATE NOT MODELED on one line above a diagram numbered 1 to 11, so the explanation is there but the line does not say the plate is in the count. `specs` is the coordinator's field.

Declared field: the Vignetting tab reads edge unvignetted 52.5 %, edge relative illumination 23.3 %, field 51.0°. The Distortion tab's printed −4.83 % is the edge value. Exact chief rays peak at −5.92 % at 46°, 0.83 of the image height, and turn back to −4.83 % at 51°. Fig. 4's panel has the same reversal: about −5.8 % near 0.88 of its height and about −5.2 % at the top. The off-axis fan is drawn at 24.3° (slope read from the page's SVG), while the legend prints 30.6°. `offAxisRayUtils.ts` scales the 0.6 fraction by the tracing limit (40.5 / 51) and `DiagramLegend.tsx` does not. This is shared code, not this lens's data. All five rays reach the image plane near 7.9 mm.

Colour against Fig. 4, which plots d and g only. The model's paraxial shifts from d at 18 mm are C +30.5, F +12.0 and g +85.9 µm, or +0.17, +0.07 and +0.48 at F = 100. Normal-line dispersion for every element gives +29.0, +10.0 and +90.1 µm. Fig. 4's d curve agrees with exact rays: zero near 0.93 of the aperture in both, a minimum of −1.27 at 0.64 on the spherical panel against −1.30 at 0.70, and +1.10 against +1.12 at 0.994. The chromatic panel draws that same d minimum at −1.10, so the plots repeat to about 0.15. Its g curve does not follow at the axis: both curves leave the origin together, as they also do in Fig. 2, g sits 0.25 left of d at 0.4 of the aperture and 0.19 left at 0.6, and the two merge above 0.75. The model's g − d runs +0.48 on the axis, +0.43 at 0.4, +0.37 at 0.6 and +0.10 at the margin; taken from each line's own paraxial focus it is −0.05, −0.11 and −0.37 at 0.4, 0.6 and the margin. Neither reading reproduces the plot. It does not indict F1 or SF6: their rows sit 0.0007 and 0.0092 above the normal line and move g by about 2 and 11 µm against it, while the strongest lever in the lens, L8, gives 32 µm per 0.01 of partial dispersion, so closing 86 µm would need a glass that does not exist at 1.834/37.2. Both plots starting at the origin suggests each line is drawn from its own paraxial focus, but the patent does not say so.

Open: Fig. 4's g curve is not reproduced, on either reading of its origin. Printed g indices or a statement of the plot's reference would settle it.

Open: the off-axis fan and its legend disagree (24.3° against 30.6°) on this lens and on any rectilinear lens whose tracing limit is below its half field.
