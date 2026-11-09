# SMC Pentax-M 28mm f/3.5 audit

2026-11-09, initial transcription.

Primary PDF cover, physical pages 3, 5 and 6 were inspected as actual pixels. Table II and Claim 2 agree numerically. Source prose field 75° and figure half-field 37.6° differ by rounding. All 12 radii and 11 physical thickness/gap values are scaled exactly by 0.28; glass coordinates remain unchanged. Printed final BFD remains 36.43164 mm. The inserted flat stop splits d6 into zero and 2.9568 mm; total optical gap is unchanged.

All semi-diameters are half the Photons to Photos diameter list: [17.415, 17.415, 14.245, 9.46, 7.42, 7.975, 5.975, 7.74, 6.7, 6.84, 6.805, 7.16] mm. These are inferred clear apertures; the patent prints none. The Photons to Photos stop diameter of 10.938 mm is not used; the stop radius follows from f/3.5. All default geometry checks pass with no hidden rim trim and no gap-sag override.

The fixed infinity geometry has no focus movement. No close-focus law is invented. `closeFocusM` was first set to 1 (closed in the cleanup pass below: now the static 1e15 convention with the retail 0.3 m in `catalog.closeFocusM`).

A scale-normalized radius/index comparison against the 1,095 catalog data files then present found no duplicate. nd/νd alone do not establish secondary-spectrum behavior.

## 2026-11-09 — Deployment validation

Independent check of US 3,955,883 Example 2 (Table II and Claim 2, page images): 12 R, 11 d, 6 nd/νd and the back focus
130.113 → 36.432 agree at one scale factor ×0.28. Engine EFL 27.995, f/3.5, half-field 37.6°, total length 78.574;
F1,2 −101.751 (printed −101.729). Different design from the catalog's Pentax-M 28mm f/2.8 (US 4,143,945) and
Super-Takumar 28mm f/3.5 (US 3,506,339). Attribution probable: the M 28/3.5 is 6 elements / 6 groups (the patent's six
singlets), 1977–85, 0.3 m; Example 1 is f/2.8, and PhotonsToPhotos labels Example 2 as this lens. No maker drawing
found. No deployment changes.
Open: rear rims S5–S10 (PhotonsToPhotos) draw wider than Fig. 3 (S8 about 38 % larger), which hides some of the corner
vignetting the figure implies; to be read against the figure in the review pass (still open, below). `focus.closeFocusM` 1 is a placeholder
(production 0.3 m) (closed in the cleanup pass); name style against the catalog's "PENTAX SMC M 28mm f/2.8" (closed:
renamed "PENTAX SMC M 28mm f/3.5", key `pentax-m-28mm-f35`); package wording remains (closed in the cleanup pass).

## 2026-11-09 — Cleanup and wording pass

Data file: the header comment was rewritten in plain terms with the same facts (patent, example, ×0.28 scale, printed
versus derived values, stop and rim basis, the figure comparison). Subtitle "US 3,955,883 — qualified product
association" became "US 3,955,883, Example 2 — probable match to the 1977 production lens". Added `catalog.specs`
(6 ELEMENTS / 6 GROUPS, DESIGN f = 28 mm, DESIGN F/3.5, ALL SPHERICAL, PATENT f = 100 SCALED × 0.28) and
`catalog.closeFocusM.marketing` 0.3 (Allphotolenses and Cine Lens Wiki retail data). `focus.closeFocusM` 1 became
1e15, the catalog's static-lens convention, with a plain description; the patent prints infinity only. Added
`aperture.blades` 5 from the same retail sources. Added a `role` to each element. All four glasses match OHARA catalog
rows to the printed precision, so the `Unmatched` labels became catalog equivalents: L1 and L5 S-BSM10 (1.62280 /
57.05), L2 and L6 S-BSM16 (1.62041 / 60.29), L3 S-LAM52 (1.72000 / 43.69), L4 S-TIH13 (1.74077 / 27.79). No `apd`:
no special-dispersion element is reported for this lens, and none of the four glasses is one. R, d, nd, νd, sd and the stop position are unchanged.

Engine before and after: EFL 27.9951 mm, f/3.5, half-field 37.6°, stop radius 5.3333 mm, paraxial BFD 36.4288 mm,
printed final gap 36.4316 mm, total length 78.5744 mm; only `closeFocusM` changed. Surface audit clean; aperture audit
within 3 % of f/3.5 with no rim limit.

Analysis: removed process material (package and evidence wording, the MTF and pupil-sampling counts, the placeholder
note) and rewrote the identification as a five-point case with its caveats (no Pentax drawing found; Example 1 is the
f/2.8 version; the earlier 28mm f/3.5 lenses have seven or eight elements). Added the patent's three conditions,
the claim's positive-meniscus misprint for L2, the glass table, a Fig. 3 rim comparison and a scope table.

Open: rear rims S5–S10 stay as transcribed but draw wider than Fig. 3 (L3 about 6.3 mm in the figure against 7.42 /
7.98; L4 about 5.6 against 5.98 / 7.74; L5 about 6.0 against 6.70 / 6.84), so the model likely understates corner
vignetting. The axial f/3.5 beam (at most 5.8 mm) would clear the drawn rims.
