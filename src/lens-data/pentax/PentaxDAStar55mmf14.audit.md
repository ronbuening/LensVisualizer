# PENTAX SMC DA* 55mm f/1.4 SDM — audit log

## 2026-11-09 — Deployment validation

Independent check of US 2010/0073777 A1 Embodiment 1, Table 1 (p. 12, 300 dpi render): all 19 rows (R, d, nd, νd), the
stop 7.49 mm behind S6 (¶0061), the cemented L5/L6 interface, the S18–S19 cover glass (thickness printed, material not;
1.5168/64.2 assumed) and d15 1.00 → 13.27 agree; no aspheres; native scale. Engine EFL 56.357 (56.36), f/1.4,
half-field 14.3°, total length 93.2; close state −0.173× at 0.450 m, matching the patent's M and Ricoh's 0.45 m / 0.173×.
Attribution strong: Ricoh lists 9/8, 28.6°, one anomalous-dispersion element, and its drawing marks L8 (1.5924/68.3).

Deployment change (inferred rims only): the package's rims cut the f/1.4 axial beam at L4 and L6–L8 (`audit:aperture`
f/1.40 → f/1.50). L4's flat rear face meets the deep concave front of L5 (R −19.31, 5.49 mm gap) at h ≈ 13.49 mm, so
the tool's 13.6–13.7 mm is not reachable; L4 goes to 13.45 mm on both faces (square, as both drawings show it) with
`checks.gapSagFrac: 1`. The other raises are the `audit:aperture --raise` values: S1/S2 20.5 → 20.6, S10/S11 17 → 17.4,
S12/S13 16.8 → 17.4, S14/S15 16.5 → 16.8. After: `audit:surface` OK, aperture within 3 % of f/1.4, no axial clip at
infinity. The analysis paragraph that described the f/1.50 clip was rewritten.
Open: package wording (subtitle, repeated per-element sentence, MTF grid prose) and the name's ★ / missing "SDM" against
catalog peers ("DA* … SDM") remain for the cleanup pass. (Closed: name fixed by the coordinator; wording in the pass
below.)

## 2026-11-09 — Cleanup and wording pass

Data file: header comment rewritten as plain technical English with every fact kept (patent, embodiment, native scale,
stop split, assumed cover-glass index, focus states, inferred rims and why L4 stops at 13.45 mm). Subtitle "Qualified
patent reconstruction; assumed clear apertures and approximate dispersion" → "US 2010/0073777 A1, Example 1 — strong
match to the 2008 production lens". Added `catalog.specs` (9/8, design f = 56.36 mm, F/1.4, all spherical, one
anomalous-dispersion element) and `catalog.closeFocusM.marketing` 0.45 (Ricoh). Focus description now states the
printed d15 states, the 12.27 mm travel of L1–L8 with L9 fixed, and that the close spacing focuses at 0.45 m and
−0.173×, matching the patent's M and Ricoh's 0.45 m / 0.173×; the "catalog approximation" wording is gone. Gap label
"Front-group focus separation" → "D15". `aperture.blades` 9 (Ricoh: nine-blade round diaphragm). L5/L6 tagged
`cemented: "D1"` with a `doublets` entry over S9–S11 so the pair is badged. Every element gets a `role`; the
`indexReferenceNote` boilerplate is removed.

Glass labels, exact matches only (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15, each confirmed to resolve to that row): L1 S-LAH66,
L2/L7 S-LAH53, L3 S-TIM35, L4 S-TIL25, L5 S-TIH14, L6 S-LAH60, L9 S-FSL5 (OHARA catalog equivalents), L8 K-GFK68
(SUMITA catalog equivalent, the only exact row). OHARA rows were used throughout where available for one consistent set;
HOYA has exact rows for L1, L3, L5 and L6 only. Every lens element now traces on catalog Sellmeier data instead of the
Abbe estimate, which lifts the C/d/F MTF block on the νd 68.3 / 70.2 elements; only the cover plate (νd 64.2) stays on
the Abbe tier. L8 gets `apd: "inferred"`: Ricoh's drawing marks it as anomalous low-dispersion glass and K-GFK68's
θgF 0.546 is about +0.017 above the normal line (same tag as the FA* 28-70mm's νd 68.3 elements).

Analysis: removed the repeated per-element boilerplate sentence, the MTF grid and convergence prose, the "probable, not
factory-certified" and review-rating lines; renamed "Aperture, Geometry and Validation" to "Aperture and Model Scope".
Added the full bibliographic block (application, filing, priority, title), the numbered product evidence (SDM, the
September 22, 2008 announcement, HOYA as assignee and owner of Pentax), the Embodiment 1 versus 3 and 2 comparison, the
patent's rationale for L4 and the fixed L9 with paragraph citations, condition (1) = 0.22 and (2) = 68.3, a glass table,
and a focus table.

Engine before/after (identical): EFL 56.357185, FOPEN 1.4, half-field 14.3°, stop radius 13.875903, BFD 0.0018,
close keyframe 449.96 mm object to image at −0.1732×. Surface audit OK; aperture audit within 3 % of f/1.4, no rim
limit.
Open: Embodiment 3 cannot be excluded from the published specifications. The rear plate's label "CG (assumed material)"
and its source string keep package wording (rear plates are outside this pass). A `focus.conjugates` entry for the
close state was not added: the patent prints M, not an object distance.
