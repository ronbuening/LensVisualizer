# PENTAX SMC M 135mm f/3.5 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 4,134,645 Example 2 (PDF p. 6 and Claim 2's table, p. 7): 10 R, 9 d, 5 nd/νd and the back
focus agree with the file at one scale factor ×1.35; the stop splits d6 into 5.4 + 26.244 (= 23.44 × 1.35). Engine EFL
134.973 (135.0), f/3.5, half-field 9.0°, total length 109.458; F1.2.3 and F1.2.3.4 reproduce.

Attribution probable: the three examples fit the 1977 Pentax-M 120/2.8, 135/3.5 and 150/3.5 trio by aperture and field
(PhotonsToPhotos maps Example 2 to this lens); marketed 5/5 all-spherical, 1.5 m, 49 mm filter. No maker diagram found.
Open: `focus.closeFocusM` 10 is a placeholder (production 1.5 m); `fStops` stop at 22 (lens closes to 32); four of the
five glasses equal catalog d-line rows; package wording remains for the cleanup pass. No deployment changes. (All four
closed in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten in plain terms, keeping the source facts (patent, example, ×1.35 scale, printed
against derived values, stop and rim choices) and adding the Petzval-sum difference and the glass reading; the float
noise 54.41850000000001 is gone. `subtitle` "US 4,134,645 A, Example 2; qualified product association, inferred
apertures" → "US 4,134,645 A, Example 2 — probable match to the 1977 production lens". `specs` [5 ELEMENTS / 5
GROUPS, ALL SPHERICAL, QUALIFIED PATENT RECONSTRUCTION] → [5 ELEMENTS / 5 GROUPS, DESIGN f = 135 mm, DESIGN F/3.5, ALL
SPHERICAL, PATENT f = 100 SCALED × 1.35]. `catalog.focalLengthMm.design` 134.9726 → 135 (the patent's F = 100 × 1.35).
`catalog.closeFocusM.marketing` 1.5 added. `focus.closeFocusM` 10 → 1e15 with a plain description: the patent prints
the infinity state only and the 1.5 m retail minimum focus is not modeled. `aperture`: f/32 added to `fStops`,
`maxFNumber` 22 → 32, `blades` 8. The retail figures are from Cine Lens Wiki and the PentaxUser review, cited in the
analysis. Roles added to all five elements; group labels FRONT / REAR → Front / Rear.

Glass (catalog minus patent), each label checked with the resolver: L1 S-BSL7 (OHARA) Δnd 0, Δνd +0.04. L2 PBH23
(OHARA) Δnd +0.000002, Δνd +0.017; S-TIH23 (OHARA, +0.09) and SF56A (SCHOTT, −0.12) are also within the window, and the
closest row, the period lead flint, was kept, as PBH53 was for the M 28mm f/2.8. L4 S-TIH10 (OHARA) Δnd 0, Δνd −0.04.
L5 S-BSM81 (OHARA) Δnd −0.000001, Δνd −0.12; LACL60 (HOYA) and J-LAK01 (Hikari) are exact, and OHARA was kept for
consistency with L1, L2 and L4. L3 stays Unmatched: the nearest row, PC2 (HOYA, 1.51821 / 65.16), is 0.16 off in νd.
Four of five pairs pass the d-line coordinate test, so the five `indexReferenceNote` fields were removed.

Analysis. Removed: the evidence-JSON, SHA-256, MTF sample-grid and sibling-duplicate text, "qualified" and the 10 m
"schema placeholder". Added: the product (1977, 5/5, eight blades to f/32, 1.5 m, 49 mm), a five-point attribution
with its caveats (no maker diagram, one retailer's 7/3 count), the seven patent conditions, a glass table, the stop
and rim basis, a patent-against-model table and the sources. Corrected: the L5 text said a higher index reduces the
Petzval sum; the patent says n5 > 1.62 prevents a decrease in it (col. 3).

Engine before and after: EFL 134.9726 mm, f/3.500, half-field 9.0°, stop radius 15.3038 mm, paraxial BFD 54.4069 mm
against the kept printed 54.4185 mm, track 109.458 mm, all unchanged; only `closeFocusM` (10 → 1e15) and the largest
f-number (22 → 32) differ. Surface audit OK; the aperture audit is within 3 % of f/3.5 with no rim limit. Wide-open
transmission 91.3 % at 4.5° and 67.4 % at 9.0°, unchanged. Axial spherical aberration at 135 mm −0.111 / −0.163 /
−0.171 / −0.120 mm at pupil 1 / 0.85 / 0.7 / 0.5, in line with Fig. 4.

Open: L3's edge is about 0.01 mm thick at its 21.33 mm rim, and the L4–L5 air space is 0.39 mm at the 9.45 mm rear
rims. Fig. 3 reads about 21 mm for the front elements and about 11 mm for the rear pair, so the rear rims sit inside the
drawing; rims were left unchanged in this pass. No Pentax construction diagram was found, so the attribution stays
probable. The printed Petzval sum (0.018) differs from the surface sum (0.0125 at F = 100); the convention is unstated.
