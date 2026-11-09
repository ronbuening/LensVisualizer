# PENTAX SMC TAKUMAR 6x7 300mm f/4 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 3,467,462 Example 1 (p. 5 col. 3 at 300 dpi and Claim 2, p. 6): 10 R, 9 d, 5 nd/νd and the
back focus 40.16 → 120.48 agree at one scale factor ×3. Two printed sign conflicts (the table's r9 = +18 and the claim's
r3 = +1.1700F) are resolved by the patent's Seidel Petzval column (−0.357 at r3, −1.879 at r9); all ten per-surface
Petzval terms reproduce (sum 0.174 against 0.173 printed), so the file's r3 −351 and r9 −54 are right. Engine EFL
300.051, f/4, half-field 8°, paraxial back focus 120.531. Stop 3 mm behind r8 and the clear diameters come from
PhotonsToPhotos and agree with Fig. 1 within the figure's scale.

Attribution probable: Ricoh lists 5/5, 17°, 5.0 m, 186 mm long (model front vertex to flange 184.6 mm); PhotonsToPhotos
titles this example the SMC Takumar 6×7 300mm f/4, and the catalog's 6×7 600mm patent (US 3,502,393) cites this
application. Against: the 1964 priority predates the 6×7 camera (1969), and scaled ×1.5 the example fits the 35 mm
Super-Takumar 150mm f/4 equally well. No maker drawing found. No deployment changes.
Open: `focus.closeFocusM` 10 is a placeholder (production 5.0 m); name style against the catalog's "PENTAX SMC TAKUMAR
6x7 600mm f/4"; package wording remains for the cleanup pass. (All three closed: name and key changed with this
section's rename; focus and wording in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. The one-line header became a full comment: patent, embodiment, ×3 scale, printed versus derived values, the
r3/r9 sign resolution from the Seidel Petzval column, image plane, stop and rim sources, static focus and the
probable attribution with the Super-Takumar 150mm f/4 caveat. Subtitle "Qualified patent reconstruction; assumed clear
apertures and approximate dispersion" became "US 3,467,462 A, Example 1 — probable match to the 1969 production lens".
Added `catalog.specs` (5 ELEMENTS / 5 GROUPS, DESIGN f = 300 mm, DESIGN F/4, ALL SPHERICAL, PATENT f = 100 SCALED × 3)
and `catalog.closeFocusM.marketing` 5 (Ricoh 67II catalog). `focus.closeFocusM` 10 became 1e15 with a plain static
description. The aperture scale now runs to f/45 (`fStops` add 32 and 45, `maxFNumber` 22 → 45) per Ricoh's
catalog; blade count left unset because references disagree (7 or 9). Glass labels changed from "Unmatched (patent
coordinates)" to OHARA catalog equivalents that match the printed pairs within print precision: L1 and L3 S-BSL7
(1.51633/64.14), L2 S-TIH1 (1.71736/29.52), L4 S-TIM5 (1.60342/38.03), L5 NSL7 (1.51112/60.49); each label resolves to
that row. The `indexReferenceNote` boilerplate was removed and a `role` added per element. R, d, nd, νd, sd, stop,
key, name, patent fields, mount and format are unchanged.

Engine numbers are identical before and after: EFL 300.0513, FOPEN 4.000, half-field 8°, stop radius 21.978, paraxial
BFD 120.531, last gap 120.48. Only the focus placeholder (10 → 1e15) and the maximum f-number (22 → 45) differ. The
surface audit reports no errors and the aperture audit no rim limit. Transmission at f/4 is 77.9 % at 4° and 44.1 %
at 8°.

Analysis. Removed the package and process material (evidence packet, "not OCR repairs", literal sign-combination EFLs
to eight decimals, MTF grid and convergence notes, sampled-transmission grid, "placeholder"). Added the metadata
block with priority and Ser. No., the product and its version history from Ricoh and Cine Lens Wiki, five numbered
association points (construction, field, barrel length, the US 3,502,393 reference to Ser. No. 470,711,
PhotonsToPhotos), the two caveats (1964 priority before the 6x7 system; the same example at ×1.5 suits the 1965
Super-Takumar 150mm f/4), the Seidel-column confirmation of r3 and r9 with the four sign combinations' focal lengths,
the patent's chromatic and astigmatism rationale per element, a glass table, the stop and Fig. 1 rim readings, and a
scope table.

Open: no Pentax construction drawing of the 6x7 300mm f/4 or of the Super-Takumar 150mm f/4 was found, so the choice
between the two remains open. Open: L1's rim equals the f/4 entrance pupil (PhotonsToPhotos diameters; Fig. 1 reads
about 36.4 mm), which cuts the oblique beam to 44 % at 8°; the retail 82 mm filter would allow a larger front clear
aperture, but rims were left unchanged in this pass. Open: the projection traces to the patent's 8°, 94 % of the 6x7
half-diagonal.
