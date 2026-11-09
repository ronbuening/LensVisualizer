# PENTAX SMC M 150mm f/3.5 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 4,134,645 Example 3 (PDF p. 6 and Claim 3's table, p. 7): 10 R, 9 d, 5 nd/νd and the back
focus 40.40 → 60.6 agree with the file at one scale factor ×1.5; the stop splits d6 into 6.0 + 29.985 (= 23.99 × 1.5).
Engine EFL 149.998 (150), f/3.5, half-field 8.2°, total length 119.01; F123 and F1234 reproduce.

Attribution probable: the 8.2° field is a 150 mm lens on 24×36, the sibling examples fit the M 120/2.8 and M 135/3.5,
JP priority August 1976 precedes the 1977 product; marketed 5/5, 1.8 m, 49 mm filter. No maker diagram found.
Open: `focus.closeFocusM` 10 is a placeholder (production 1.8 m); the analysis says L5's high index reduces the Petzval
sum where the patent says n5 > 1.62 prevents a decrease; package wording remains for the cleanup pass. No deployment
changes. (All three closed in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Subtitle "Example 3; qualified product association, inferred apertures" became "Example 3 — probable match
to the 1977 production lens". Specs now read 5 ELEMENTS / 5 GROUPS, DESIGN f = 150 mm, DESIGN F/3.5, ALL SPHERICAL,
PATENT f = 100 SCALED × 1.5 (was 5/5, ALL SPHERICAL, QUALIFIED PATENT RECONSTRUCTION). `focalLengthMm.design` 150
(the patent's F = 100 × 1.5; was the computed 149.9977). Added `catalog.closeFocusM.marketing` 1.8. Focus is static:
`closeFocusM` 1e15 replaces the 10 m placeholder, with a plain description. Aperture `fStops` gain f/32,
`maxFNumber` 32, `blades` 6; minimum focus, f/32 and six blades are from Cine Lens Wiki (Kamerastore agrees on 1.8 m
and six blades). Header comment rewritten in plain terms with the same facts; the float 60.599999999999994 is 60.6.
Group labels Front / Rear. Every element gained a role.

Glass. The five patent pairs are exact catalog codes, so the Unmatched labels became OHARA equivalents, each checked to
resolve to its row: L1 NSL7 (1.511121 / 60.49), L2 S-TIH6 (1.805181 / 25.43), L3 S-BSL7 (1.51633 / 64.14), L4 S-TIH10
(1.72825 / 28.46), L5 S-LAL7 (1.651597 / 58.55). The `indexReferenceNote` boilerplate is gone.

Analysis. Removed the evidence-file, SHA-256, MTF-run and sample-lattice material and the placeholder wording. Added
the product (1977–1986, 5/5, 1.8 m, f/3.5–32, six blades, 49 mm, 75 mm long), the four-point attribution with its
caveats, the patent's seven conditions with Example 3's values, a glass table, a semi-diameter table and a
patent-versus-model table. L5 now says what the patent says: a high Abbe number and an index above 1.62 prevent a
decrease in the Petzval sum. The off-axis transmission figures are the engine's vignetting curve (95 % at 5.4°, 88 %
at 6.8°, 80 % at 8.1°).

Engine numbers are unchanged: EFL 149.9977 mm, f/3.5, half-field 8.2°, stop radius 17.3185 mm, paraxial back focus
60.5688 mm on a 60.6 mm final gap. Only `closeFocusM` and the largest f-number moved. The surface audit reports no
validation errors, and the aperture audit reports no rim limit.

Open: no Pentax construction diagram was found, so element shapes and the iris position are unchecked against a maker
drawing. The PhotonsToPhotos Optical Bench lists the lens, but the patent example behind that listing could not be
read. The patent's printed Petzval sum (0.020) differs from the surface sum of its own table (0.018), as it also does
for Examples 1 and 2.
