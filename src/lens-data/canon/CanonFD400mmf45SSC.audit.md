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
- Rendered page review remains incomplete because the screenshot helper produced no image.

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
