# Ricoh GR IIIx 26.1mm f/2.8

## Patent Reference

**Patent:** US 2022/0026670 A1, *Imaging Lens, Camera, and Portable Information Terminal Apparatus*

**Inventor / Applicant:** Kazuyasu Ohashi (Chiba, Japan)

**Assignee:** Ricoh Co., Ltd. (assignment recorded before publication)

**Priority:** March 7, 2019 (JP 2019-041727)

**Published:** January 27, 2022

US 2022/0026670 A1, Kazuyasu Ohashi, Ricoh, Example 3. Table 3 and the asphere data are on PDF page 32 (printed page 7); Figure 3 is PDF page 4. The numerical design is 26.05 mm, f/2.87, with half-field 28.3°. The retail lens name and 26.1 mm f/2.8 marking are distinct from these source values.

## Architecture

Seven glass elements form five air-separated components. The patent groups these into four functional groups: front cemented doublet I; two singlets II; rear cemented doublet III; rear negative singlet IV. The stop is surface 8, represented by STO, with 1.20 mm gaps on each side. This is a fixed-focal-length model, with no zoom control.

## Element by element

| Element | nd / vd | Calculated isolated focal length (mm) | Description |
|---|---|---|---|
| L1 | 1.854 / 40.38 | 15.86 | Positive front element of cemented doublet D1; published front asphere |
| L2 | 1.7888 / 28.43 | -13.48 | Negative rear element of cemented doublet D1 |
| L3 | 1.6398 / 34.47 | -25.89 | Negative singlet in group II |
| L4 | 1.883 / 40.76 | 17.23 | Positive singlet in group II, before the stop |
| L5 | 1.755 / 52.32 | 9.12 | Positive front element of cemented doublet D2; patent glass-name row conflicts with its nd/vd |
| L6 | 1.53172 / 48.84 | -13.4 | Negative rear element of cemented doublet D2 |
| L7 | 1.9027 / 31 | -64.86 | Negative singlet forming group IV; rear asphere published, front asphere coefficients missing |

The individual focal lengths are paraxial thick-lens calculations from the rounded radii, thickness and index, rather than a published single-element focal-length table. The existing values agree to their two-decimal precision.

## Glass

The patent explicitly names OHARA L-LAH85V, S-NBH58, S-TIM27, S-LAH58, S-TIL6 and L-LAH86 for elements 1, 2, 3, 4, 6 and 7. These are source-listed optical materials; they do not establish actual production-lens suppliers or molding processes.

Element 5 is an exception: its row duplicates S-LAH58 and Pg,F=0.5667 despite publishing nd=1.75500 and vd=52.32, incompatible with that name. The numerical nd/vd pair is retained, with J-LASKH2 as a compatible catalog counterpart, not an asserted historical identity. The former TaC6 identity/chemistry claim is removed. No partial-dispersion override is inferred for this conflicting row.

| Element | Source Pg,F | Stored dPgF (rounded) |
|---|---|---|
| 1 | 0.5688 | −0.00708 |
| 2 | 0.6009 | +0.00492 |
| 3 | 0.5922 | +0.00638 |
| 4 | 0.5667 | −0.00854 |
| 6 | 0.5631 | +0.00145 |
| 7 | 0.5943 | +0.00264 |

These runtime values already matched Pg,F − (0.6438 − 0.001682 vd) and are retained. The earlier audit log incorrectly transcribed 0.6002 and 0.5602 for elements 2 and 6; original-page review confirms 0.6009 and 0.5631. No APD badges are asserted.

## Focus

The patent has no numerical finite-focus schedule for this example. The viewer's unit-focus motion and 0.20 m image-to-object endpoint are reconstructed assumptions. All seven elements and the stop translate together; no internal gaps change.

The source filter is omitted from the lens model. Its contribution is 1.40/1.51633 mm of equivalent air, giving rear spacing 14.378 + 1.40/1.51633 + 0.70 = 16.0012818714 mm. The table leaves the post-filter gap d15 blank: the retained 0.70 mm is inferred, not a transcribed value. Independent paraxial infinity focus predicts BF=16.001310496 mm, agreeing within 0.000029 mm; the reconstructed mechanical track 32.938 mm also agrees with the rounded source L/f=1.264. The former model incorrectly used the filter's full physical thickness, BF=16.478 mm.

Solving the rounded lens matrix for the assumed 0.20 m image-to-object distance gives near BF=20.8564680966 mm, extension 4.8551862252 mm. This replaces the former thin-lens estimate BF=20.38 mm. The aperture slider begins at the source f/2.87 rather than the retail f/2.8.

## Aspheres

The source equation in paragraph 134 uses the standard (1+K) convention. Published S1 and S13 coefficients are retained exactly, including K=0 for both. Source S12 carries an asphere star but has no coefficient block in Example 3. Its zero-coefficient spherical fallback remains explicitly unresolved. The header distinguishes two modeled aspheres from this missing source prescription; the star is not evidence that an all-zero polynomial is the true shape. No molding-process inference can supply the missing coefficients.

The printed S2 row reads “0 224.908”, with malformed surface numbering. The retained R=24.908 mm is an inferred layout repair supported by calculated EFL=26.051151313 mm and Figure 3, not an independently verified corrected publication. The source conditional-expression summary also contains copied index values that disagree with Table 3; optical rows take precedence.

## Semi-diameter notes

Figure 3 was inspected from the original at 600 dpi. Lens-only vertex span is 16.46 mm; the drawing's optical rims are approximately 10–15% larger than the existing estimated radii, within the procedure's drawing tolerance and below its strong-revision threshold. The existing SDs are retained rather than claiming exact measured clear apertures. Surface and image-circle audits pass, as do render diagnostics without hidden rim trimming at infinity, half slider and closest focus. The missing S12 prescription remains a limit on optical accuracy regardless of these checks.

## Sources

- Local original patents/US20220026670A1.pdf: Table 3, paragraphs 196–222, Figure 3 and equation paragraph 134.
- [US 2022/0026670 A1 patent record](https://patents.google.com/patent/US20220026670A1/en).
- Local glass catalog for the explicitly qualified J-LASKH2 counterpart.
