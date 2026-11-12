# Canon FD400 bounded pilot audit
Parent admitted hidden representative Table1 pilot after independent topology review on2026-11-11. No factory-mechanical match; no publish/commit/delivery.
Reused full original patent/maker records in canon_fd400_source; admission refresh includes main/PR numerical screen and room custody checks. Primary later catalog PDF5 freshly inspected for6°10′, successor qualification retained.
All11R/10intervals literal4x; nativeD all6glasses; fixedsourceplane320.04. R4wholeTable1 notclaimsplice. Figure-derived stop194.92142545, clearance3.84142545 beyond finite rearvertex. No continuouscam.
All caps selected before rays. No optical changes after results; no overrides.
StrictTS0; nativeEFL400.0032373094622. Field results expose peripheral losses, not fullacceptance. All analysissections/source/mechanicalqualifications retained. Independent review/fullvalidation completed 2026-11-12; limitations recorded below.

## Deployment validation (2026-11-12)

- Source: US 4,045,128 A (Google Patents PDF, kept as `patents/US4045128A.pdf`). Table 1: 11 R, 10 d, 6 nd/νd and
  the variable gap at both printed states match the page images; every length is the patent value × 4. EFL 400.003,
  F/4.50, first surface to image 320.04 mm (defocus +0.006 mm).
- Product: Canon Museum confirms 6 elements / 5 groups, rear focusing, 4 m MFD, October 1975. The museum section
  (`https://global.canon/ja/c-museum/wp-content/uploads/2015/05/fd181-lens-construction.gif`) matches the element
  shapes and cementing. Probable family match, not a factory prescription.
- Integration fixes:
  - `indexReference` D → d on all six glasses: the printed pairs are helium-d catalog values (S-FSL5 1.487490 at d vs
    1.487427 at D; N-SK5 1.589130 vs 1.589044), whatever the patent prose says.
  - Rims raised to pass the f/4.5 axial bundle (`audit:aperture --raise`, least change): surfaces 7/8 20.5 → 20.9,
    9/10 17.6 → 18.5, 11 17.6 → 18.1. Before, the rims clipped the beam to about f/4.71.
  - Added `lensMounts` canon-fd and `catalog.closeFocusM` 4 m; static focus sentinel 1e15.
- Open: the retail lens takes a 34 mm filter in its own holder (manual). The patent prints no plate and gives no thickness, so none
  is drawn. Package wording (subtitle, specs, element types) completed in
  the cleanup pass below.

## 2026-11-12 — Cleanup and wording pass

Re-read the independent validation report, Table 1 and its continuation, Figure 1, and the Canon Museum product
record and construction section. The source check covers 11 radii, 10 separations, six nd/νd pairs and d8 at both
printed endpoints; there are no aspheric coefficients. No transcription mismatches were found. Table 1's
R4 = −258.3399 is retained over claim 1's −258.3899. The finite d8 change 2.250 → 9.656 mm is 7.406 mm, or
29.624 mm at model dimensions; this state remains unmodeled. The museum section matches the six elements in five
groups and rear cementing, includes a filter plate, and supplies no iris marker.

Replaced the header's process wording with the uniform scale, fixed image distance, figure-derived rims and stop,
helium-d interpretation, omitted filter and infinity placeholder. Replaced the subtitle with
“US 4,045,128 A, Table 1 — probable match to the 1975 production lens” and the specs with “6 ELEMENTS / 5 GROUPS”,
“ALL SPHERICAL”, “f/4.5–22”, “REAR FOCUSING”, and “4 m CLOSE FOCUS”. Element types now describe curvature-derived
shapes, and roles identify their groups. L5 and L6 both carry `cemented: C1`, with one `doublets` span over surfaces
9–11; three plain group annotations were added. No additional element or cement layer was introduced.
The focus description now states infinity-only scope and Canon's production rear focusing to 4 m;
`focus.closeFocusM = 1e15` remains a placeholder.

All six former “Literal d-line n and Abbe; no verified melt or partial dispersion” labels now resolve as catalog
equivalents with production supplier unspecified. Absolute differences below use catalog row minus printed values:

| Elements | Catalog equivalent | Absolute Δnd | Absolute Δνd |
| --- | --- | --- | --- |
| L1, L3 | Ohara S-FSL5 | 0 | 0.1363 |
| L2 | Ohara LAH53 | 0.000002 | 0.048508 |
| L4 | Hoya BACD5 | 0 | 0.15 |
| L5 | Schott SF4 | 0 | 0.08 |
| L6 | Hoya LAC8 | 0 | 0.04 |

Each authored label resolves with `trylabel.mjs`. Older LAH53, BACD5, SF4 and LAC8 names were preferred where
compatible rows exist; S-FSL5 is the compatible modern curve for L1/L3. Printed nd/νd and the coordinator's helium-d
reference remain unchanged. No copied nC/nF/ng fields were present to remove. No `apd` tags were added: the cited
maker source supplies no special-dispersion element positions. Catalog equivalence does not establish historical
supplier, melt, chemistry or manufacture.

No further catalog metadata was added. Existing canon-fd mount, 4 m marketing close focus, element/group counts
and f/22 endpoint were retained. Canon Museum fd181 supports the retail count, f/22, 4 m and rear focusing facts.
`catalog.focalLengthMm.design = 400` remains the uniformly scaled stated patent focal length, following the stated
design convention also used in Canon FD 24mm f/2.8 S.S.C.; it is not the rounded traced EFL. The analysis preserves
its section structure and citations, fixes sodium/helium wording and obsolete rim claims, adds the construction
section/manual citations, and removes process prose and old ray-count passages. Its length decreased from 674 to
666 words. Earlier audit history and the Deployment validation section remain; stale pending wording is closed.

Before → after engine values are identical: EFL 400.0032373094622 → 400.0032373094622 mm; FOPEN 4.5 → 4.5;
halfField 3.0833333333333335 → 3.0833333333333335°; stop radius 13.901430285036563 → 13.901430285036563 mm;
probe BFD from the final STO surface 125.1129 → 125.1129 mm; total track 320.04 → 320.04 mm. Both probe focus
keyframes are unchanged, including the second key's infinity best-focus offset. Last-glass paraxial BFD remains
158.578298 mm versus the derived 158.584 mm distance, leaving +0.005702 mm defocus. The nominal patent-scaled EFL
and F-number are 400 mm and f/4.5. Every surface object, rim, gap, printed glass coordinate and focus placeholder
compares exactly with the pre-cleanup snapshot.

Surface audit: OK, no validation errors. Aperture audit: one station within 3% of stated f-number, zero rim,
trace or iris limitations and zero failures. Field coverage: one station in the ≥99% band, none unsolved or
skipped. Prettier was skipped as instructed by the addendum. The screenshot helper emitted thermal/DNS observer
errors and created no `after.png`; the page's rendered title, specs and focus panel could not be inspected.
The manual URL could not be opened live; its 34 mm filter requirement is retained from the independent report.
No command was explicitly refused by the sandbox or approval policy; no retry or alternate render path was used.

Open:

- Required 34 mm filter plate: Table 1 gives no thickness/glass prescription, so it remains omitted.
- Stop placement conflicts with Canon Museum's rear-focusing definition; the figure-read coordinate and full
  production travel clearance remain uncertain.
- Table 3 has seven separate elements and fits less well; the production association remains probable.
- The printed finite endpoint and continuous production cam motion remain unmodeled; 4 m is a retail fact only.
- Figure-derived rims, including the coordinator's earlier rear enlargements, are not measured production clear
  apertures. No rims changed in this pass.
- The 6°10′ field comes from a successor catalog rather than a confirmed original S.S.C. field specification.
- Helium-d interpretation and catalog equivalents do not establish historical glass identities or partial dispersion.
- Closed in the second review below: the coordinator supplied the current page and all six element-inspector images; their visible content was inspected.

## 2026-11-12 — Semi-diameter pass against the patent figure

Source: local `patents/US4045128A.pdf`, PDF page 2, Figure 1 (Table 1). The text on PDF page 10 explicitly assigns
Tables 1 and 3 to Figures 1 and 2 respectively. The model is Table 1 at infinity, uniformly scaled ×4 from
f = 100 mm. No rim change is needed: the existing estimates and integration floors already agree with the optical
outline within the scan's local scale uncertainty. All eleven surface semi-diameters below remain unchanged; no lands,
cuts, stop edits or check overrides were introduced.

### Drawing scale and optical endpoints

The scan is natively 300 dpi, inspected at 600 dpi without treating interpolation as extra source resolution.
Figure 1 has its object end at the bottom of the unrotated page. At 600 dpi the first and last glass vertices are
approximately y = 4692 and 3172 pixels: 1520 pixels / 161.456 mm = 9.4143 px/mm. The independent front-group span
is approximately 414 pixels / 41.936 mm = 9.87 px/mm, about 5% higher. The local axis shifts from approximately
x = 1492 at the front to x = 1500 at the rear; measurements follow that axis rather than the full-page vertical.

Checks across the axis support the same approximate scale. Spherical-arc samples at 200–400 pixels from the axis
track the prescribed front-surface shapes to about 1–16 pixels; the larger discrepancy is S2, confirming that the
schematic is not an exact isotropic prescription plot. The stationary stop tick is near y = 2844–2848: its
first-vertex separation gives approximately 9.46 px/mm at the inferred z = 194.921425 mm. The tick's clear
half-opening is about 129–133 pixels, or 13.7–14.1 mm at the whole-span scale, consistent with the engine's
13.90143 mm radius. Neither tick supplies a printed stop coordinate or production aperture measurement.

The following readings exclude lettering, leaders, the group/travel bracket and the dashed finite-focus copy of C.
Ranges cover both sides and the whole-span/front-group scale difference; they are schematic estimates, not a
printed clear-aperture column. Existing S11's 0.4 mm step is below the reading uncertainty and is retained.

| Surface | Before sd (mm) | After sd (mm) | Figure optical sd, approximate (mm) | Decision |
| --- | --- | --- | --- | --- |
| 1 | 45.7 | 45.7 | 45.4–47.8 | Front collector agrees within scale uncertainty. |
| 2 | 45.7 | 45.7 | 45.4–47.8 | Retain L1's common rim height. |
| 3 | 44.6 | 44.6 | 43.3–45.9 | Negative meniscus agrees; no land is drawn. |
| 4 | 44.6 | 44.6 | 43.3–45.9 | Retain L2's common rim height. |
| 5 | 43.4 | 43.4 | 43.2–45.9 | Front positive member agrees within uncertainty. |
| 6 | 43.4 | 43.4 | 43.2–45.9 | Retain L3's common rim height. |
| 7 | 20.9 | 20.9 | 20.3–21.8 | Figure agrees; integration floor retained. |
| 8 | 20.9 | 20.9 | 20.3–21.8 | Retain L4's common rim height and floor. |
| 9 | 18.5 | 18.5 | 18.2–19.7 | Figure agrees; integration floor retained. |
| 10 | 18.5 | 18.5 | 18.2–19.7 | Cemented interface and integration floor retained. |
| 11 | 18.1 | 18.1 | 18.2–19.7 | Difference remains below a clear 10% mismatch; floor retained. |

### Ray clearance and illumination

The surface audit reports OK, no validation errors. Image-circle audit: one lens, zero undersized, zero skipped.
Aperture audit: one station within 3% of stated f-number, zero rim/trace/iris limitations or failures; its raise
proposal reports zero surfaces below the admitted stated beam. Field coverage: one station in the ≥99% band,
zero unsolved or skipped, with the corner chief clear. Only infinity is encoded; neither the printed finite
endpoint nor a continuous focus trajectory is claimed to have been checked by this model pass.

The generic clearance helper selects a spurious chief root (45.252 mm image height instead of requested
21.6333 mm). Its nearest-root counterpart correctly reaches 21.6333 mm at 3.07° with every chief ray inside its
rim, but still reports axial heights 20.936/18.529 mm at S7/S9. That helper constructs a real-ray stop radius of
13.986 mm from the paraxial entrance radius 44.444804 mm; it is larger than the engine's actual 13.901430 mm iris.
Thus those small axial flags do not describe the beam admitted by the modeled iris and are not grounds to enlarge
the rims. The on-axis LSA at pupil fractions 1/0.85/0.7/0.5 is −0.041/+0.028/+0.010/−0.013 mm.

An independent exact engine trace solved the admitted launch radius as 44.177878 mm, reached the existing iris
without trace failure, and gave the following marginal heights and clearances (unchanged before/after):

| Surface | Marginal height (mm) | Rim clearance (mm) |
| --- | --- | --- |
| 1 | 44.177878 | 1.522122 |
| 2 | 44.001388 | 1.698612 |
| 3 | 41.660085 | 2.939915 |
| 4 | 42.139476 | 2.460524 |
| 5 | 42.405482 | 0.994518 |
| 6 | 42.196615 | 1.203385 |
| 7 | 20.822803 | 0.077197 |
| 8 | 19.065289 | 1.834711 |
| 9 | 18.417143 | 0.082857 |
| 10 | 18.067081 | 0.432919 |
| 11 | 17.397311 | 0.702689 |

Engine before → after: EFL 400.0032373094622 → 400.0032373094622 mm, half-field
3.0833333333333335 → 3.0833333333333335°, FOPEN 4.5 → 4.5, stop radius
13.901430285036563 → 13.901430285036563 mm, track 320.04 → 320.04 mm. The rim-cost comparison against
`.lens-work/base1122sd/CanonFD400mmf45SSC.data.ts`, including element leave-one-out, finds zero changes and zero
loss at every sampled field. Geometric transmissions at approximately 0/0.5/1.0/1.5/2.0/2.6/3.1° are
100.0/94.7/87.5/80.2/72.4/64.8/57.1% both before and after. Corner illumination is 57.1 → 57.1%, with ordinary
off-axis vignetting retained; these are geometric pupil fractions, not radiometric illuminance.

### Rendered comparison and source limits

The matched-scale side-by-side was rendered through the coordinator queue and inspected at
`/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/fd400/overlay.png`.
Black current and blue baseline profiles coincide. The three large front singlets, smaller negative member and
rear cemented pair follow Figure 1's relative sizes; remaining width/curvature differences are schematic. The
sketch uses 9.4143 px/mm and straight rim joins, with no live browser or page check in this assignment.

The already supplied Canon Museum construction GIF was also inspected. It agrees in six elements / five groups
and rear cementing; the large front singlets and smaller rear members have comparable proportions. It adds the
rear filter plate and has no iris marker or identified special-glass/aspheric positions. All modeled interfaces
are spherical. The earlier Deployment validation section records the same maker comparison.

PDF page 1 confirms inventor Kikuo Momiyama, assignee Canon Kabushiki Kaisha, publication US 4,045,128 A,
August 30, 1977, filed April 22, 1975. No new name or bibliographic mismatch was found. Existing production-name
qualification remains material: omitted required 34 mm filter, uncertain stop placement, unmodeled finite focus
and successor-derived field angle remain outside this rim pass. No sandbox or approval refusal occurred.

## 2026-11-12 — Second review: diagram, labels and movement

Compared the coordinator's current 1400×900 page and all six inspector shots with local US4045128A.pdf,
Figure 1 on PDF page 2, Table 1 on pages 10–11, and the matched-scale SD side-by-side. The supplied page
shows the correct six spherical elements, rear cemented pair, C1 label, stop behind C and disabled infinity-only
focus control. The front singlets retain their descending heights; no new square-rim or step-order defect is
visible. The previous maker comparison is retained as recorded under Deployment validation: Canon Museum
matches six elements/five groups and rear cementing, adds the required filter and identifies no special-glass
or aspheric positions. No maker image was newly viewed in this review.

### Rims and light

No rim change. A fresh scan profile locates the front axis at x ≈1495–1497 and the first vertex at
y ≈4691 at 600 dpi. The rear vertex is around y ≈3172: approximately 1519 pixels / 161.456 mm =
9.408 px/mm, consistent with the side-by-side's 9.4143 px/mm. The front-group span of about 414 pixels /
41.936 mm gives 9.872 px/mm, confirming the previously documented local scale variation. Clean front
rim runs are about 430–452 pixels from the local axis; the rear pair has approximately 183–185-pixel
optical endpoints before labels interfere. These independent samples support the earlier reading ranges
and do not justify repainting values within the schematic uncertainty.

All front rims remain 45.7/44.6/43.4 mm; S7/8 remain 20.9, S9/10 18.5 and S11 18.1 mm.
The rear values retain their admitted f/4.5 ray floors. There are no lands, cuts against the package
baseline, or policy overrides. The full-pupil rim-cost comparison with leave-one-out reports worst loss
0.0 points at every sampled field; edge transmission is 57.1% before and after. Its complete baseline
and final curves at 0/0.5/1.0/1.5/2.0/2.6/3.1° are 100.0/94.7/87.5/80.2/72.4/64.8/57.1%.

### Label and inspector changes

The patent calls the fixed positive front group A, fixed negative member B and focusing doublet C
(Figure 1 and PDF page 10, printed columns 3–4). Their spans were already correct. Short labels restore
that notation and avoid the long adjacent captions seen on the supplied page.

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| Group, surfaces 1–6 | Fixed front positive group | A (fixed positive) | Figure 1, fixed front group A. |
| Group, surfaces 7–8 | Fixed rear negative member | B (fixed negative) | Figure 1, stationary member B. |
| Group, surfaces 9–11 | Rear focusing doublet | C (rear focusing) | Figure 1, movable member C. |
| L1 focal length | Missing; FL = — | +184.25 mm | Isolated thick-lens calculation. |
| L2 focal length | Missing; FL = — | −156.60 mm | Isolated thick-lens calculation. |
| L3 focal length | Missing; FL = — | +195.72 mm | Isolated thick-lens calculation. |
| L4 focal length | Missing; FL = — | −1151.57 mm | Isolated thick-lens calculation. |
| L5 focal length | Missing; FL = — | +287.10 mm | Isolated thick-lens calculation in air. |
| L6 focal length | Missing; FL = — | −130.01 mm | Isolated thick-lens calculation in air. |

The focal-length calculation uses 1/f = (n−1)[1/Rfront−1/Rrear+(n−1)t/(n Rfront Rrear)],
the scaled prescription and printed nd. The cemented components' individual values describe each element
in air; they are not the combined C doublet's approximately −244.34 mm EFL. The analysis and header explain
this convention. Types agree with radius signs and powers: L1/L3 biconvex positive, L2/L4/L6 negative
menisci, L5 positive meniscus. L1–L6 are neutral sequential names because the patent names groups rather
than individual elements. C1 spans surfaces 9–11 and both cemented elements carry C1; no false triplet.
There are no aspheric markers or APD tags, and none is supported by the source.

### Movement

No zoom or focus ordering change is required. A and B are fixed. In the patent, C moves imageward from
the solid infinity position to the dashed near position; d8 increases 2.250 → 9.656 mm, a displacement
7.406 mm native or 29.624 mm at ×4. The file has no variable gap, focus keyframe or zoom table:
all three groups are static in the model. Its existing description correctly states production rear focusing
to 4 m and the patent's imageward C motion while explicitly withholding modeled close focus. The helper's
synthetic focusKey[1] output is not an authored finite-focus state.

### Glass and colour

All six labels resolve; no label or tag changed. The exact catalog-coordinate differences are:
L1/L3 S-FSL5 Δnd = 0, Δνd = +0.1363; L2 LAH53 −0.000002/+0.048508;
L4 BACD5 0/+0.15; L5 SF4 0/+0.08; L6 LAC8 0/+0.04. Every row meets the allowed exact window;
the 0.15 boundary for BACD5 is retained. Catalog equivalents remain supplier-neutral. No medium is
constant-index or nd-only, and no copied line-index fields bypass the resolver. Table 1 gives only
nd/νd, no named glass, C/F/g indices or partial dispersion. Table 3 repeats the L1/L3, L2, L5 and L6
pairs; L4's 1.58913/61.1 pair is absent there. There are no unresolved elements requiring backfill.

One older exact-coordinate row is available outside the repo catalog: Ohara FSL5, discontinued,
nd = 1.487490, νd = 70.210260, Δnd = 0, Δνd = +0.110260, in
the main checkout's tmp/pdfs/ohara-260701/OHARA_260701.AGF, lines 3194–3201.
NM marks formula 1, status 2; the CD coefficients are
[2.189801, −0.0098715424, 0.0081379561, 0.00042431698, −0.000043722026, 0.0000023005833],
with wavelength range 0.334–2.325 µm. Evaluating that n² polynomial gives nd = 1.487489581,
νd = 70.2102603 and PgF = 0.5296786. This is a catalog-row proposal for the coordinator,
not a production-glass identification or an applied relabel.

PDF page 3, Figure 3a prints C/d/g curves, but no separate F curve. With the d paraxial focus as zero,
the model's paraxial → full nominal entrance-pupil focus shifts are C +0.363 → +0.404 mm,
d 0 → −0.041 mm, F −0.134 → −0.281 mm, g +0.253 → +0.076 mm.
These are unclipped prescription traces, not illumination measurements. Reading from the local sloping
plot axis and interpreting longitudinal values at the prescription's ×4 scale, C is approximately
+0.32–0.36 → +0.36–0.44 mm, while g is approximately +0.28–0.32 → +0.16–0.22 mm.
The g marginal discrepancy exceeds the approximately 0.02–0.04 mm reading uncertainty. That scale
interpretation remains qualified because the chart labels Y = 21.6 without stating its focal-length scale.
The source is not evidence for fitting a replacement dispersion curve.

A +0.00001 scratch-only g-index perturbation changes marginal focus by −0.0190 mm in L1,
−0.0170 in L3 and +0.0123 in L2, versus at most 0.0028 mm in any rear element.
Thus L1/L3's borrowed fluor-crown dispersion is the first candidate to investigate, with L2 also
material; it does not isolate a wrong historical glass. A scratch-only FSL5 curve substitution for L1/L3
gives g +0.243 → +0.064 mm and does not close the discrepancy. Nothing was copied into the data file.

Figure 3c's roughly +0.9% pincushion at Y = 21.6 agrees with the engine's +0.932% at 21.650 mm.
Figure 3b bends both astigmatism curves objectward at the edge; the engine's parabasal tangential/sagittal
shifts are +0.239/+0.008 mm, while its finite-pupil diagnostic fits are −0.068/+0.042 mm.
The source and model therefore do not demonstrate an astigmatism match. The uncertain inferred stop,
field/plot normalization and differing focus definitions remain relevant; no radius, spacing, stop or field
was changed to fit these plots.

### Final checks and remaining limits

Before → after EFL is 400.0032373 → 400.0032373 mm, engine half-field
3.0833333 → 3.0833333°, FOPEN 4.5 → 4.5, stop radius 13.9014303 → 13.9014303 mm
and track 320.04 → 320.04 mm. Surface audit reports OK, no validation errors;
aperture audit has zero rim/trace/iris limitations, image-circle has zero undersized/skipped,
and field coverage has one clear ≥99% station with zero unsolved/skipped. The engine builds normally.
The two Markdown files pass the requested Prettier check, and the three-file diff has no whitespace errors.
The original matched-scale side-by-side was re-inspected at
/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/fd400/overlay.png.
A fresh post-edit geometry sketch is rv-current.png in the same directory; its black and blue profiles
coincide. The coordinator must re-shoot the final A/B/C captions and populated inspector FL fields;
the supplied pre-edit screenshots establish the earlier visible state only.

The front page prints Canon Kabushiki Kaisha; Canon Inc. is already the consistent canonical spelling
across the Canon corpus. No assignee edit or consolidation is needed for this row. Inventor Kikuo Momiyama,
US 4,045,128 A and August 30, 1977 agree. No changelog entry was added.
No sandbox or approval denial occurred.

Open: required 34 mm filter remains omitted without a source plate prescription; the patent describes a
filter holder/optical-path plate on PDF page 12, but Table 1 gives no thickness or glass.
Open: stop coordinate/production diaphragm relation, probable retail association, successor-derived field
and unmodeled finite focus remain qualified as above.
Open: Figure 3a g-line and Figure 3b astigmatism agreement remain unestablished; FSL5 is a catalog proposal
only and does not cure the g-line discrepancy.
Open: final live-page re-shoot belongs to the coordinator.
