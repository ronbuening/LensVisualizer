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
