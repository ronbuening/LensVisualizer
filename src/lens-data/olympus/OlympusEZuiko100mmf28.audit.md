# OLYMPUS E.ZUIKO AUTO-T 100mm f/2.8 — source audit

## 2026-11-02 — Deployment validation and cleanup

Patent re-read. US 3,749,478 Example 2 and its repeat in claim 3 were read from the page images: 10 R, 9 d, 5 n and 5 ν, 29 values, no mismatches at exactly ×100. The printed d8 of 25.78 mm is split around the stop as 8.76 + 17.02 mm. The patent has no aspheres, variable gaps, printed back focus, close state or stop. The front page matches `source` for number, grant year, inventors and assignee; the patent spells the assignee Olympus Optical Company Limited, and the file uses the corpus form.

Index line. The table prints plain n and ν. All five pairs reproduce a catalog nd / νd within the d-line window of `LENS_DATA_SPEC.md`, and none reproduces a catalog ne / νe, so the elements carry no `indexReferenceNote`. Fig. 3a plots d and g.

Patent against model, at f = 1 scale where the patent prints it: f 1.0 / 1.0005 (100.047 mm); f1,2,3 0.407 / 0.4052; f3 2.0 / 1.987; F2.8 / 2.800; telephoto ratio about 0.93 / 0.928; back focus not printed / 42.869 mm; image plane not printed / 92.839 mm from S1. A single-slip search over the table found seven changes that reach 0.407, and all seven worsen the fit to Fig. 3a. Example 1's printed group values are similarly loose (0.392 against 0.3913), so the table stands as printed. Fig. 3a plots about −0.073 mm at the 0.7 zone and the model gives −0.074 mm; Fig. 3c plots +1.18 % and the model gives +1.15 %. The conditions in the patent all hold.

Stop. The patent marks none. A fit to 34 points digitized from Fig. 3b gives 30.4 mm from S1, with an acceptable range of about 29 to 31.5 mm; rms 0.054 × 10⁻³ f against 0.324 × 10⁻³ f at the former midpoint of 34.53 mm, where the tangential focus at 12°10′ fell on the wrong side of the plotted curve. Fig. 2b is too flat to constrain Example 1.

Public diagrams. Olympus's *The Zuiko Interchangeable Lens Group* catalog, p. 12, lists 5 elements / 5 groups, f/2.8–22, 1 m, 230 g and 49 mm. It prints the 85mm f/2 and 100mm f/2.8 drawings under each other's text; the five-singlet section is this lens. Scaled by its axial length (10.16 px/mm) the section has Example 2's spacing: L5 2.26 mm and d8 25.55 mm, against printed 2.55 and 25.78 mm for Example 2 and 1.50 and 27.58 mm for Example 1. Its rims read L1 18.9, L2 17.9, L3 16.9, L4 14.5 and L5 13.4 mm, and the break in the axis lies about 29 % of the way from S8 to S9. Patent Fig. 1 is drawn at Example 1's spacing and reads 17.9, 17.3, 15.3, 13.2 and 9.9 mm.

Fields changed against the package. Data fixes: `closeFocusM` 1e15 → 1; S8 d 12.89 → 8.76; STO d 12.89 → 17.02, iris radius 9.45 → 9.93 mm; L5 sd 8.76 → 11.0. Corner transmission at 12.1° went from 29.4 % to 47.5 %, and no field loses light. Trial values: L1 at 18.9 mm costs 4.2 points and was declined; L2 and L3 at their drawn heights cost nothing but were left, because L1 stays and their ratios to L1 already match the drawing. Wording: header comment, `subtitle`, `catalog.specs`, `focus.description`, element `role`, removal of `indexReferenceNote`, and the analysis rewritten to the skeleton.

Open: the L5 rim is the owner's to confirm. 11.0 mm sits below the drawn 13.4 mm; 12.4 mm keeps the drawn L5/L4 ratio (corner 59.5 %) and 13.4 mm matches the drawn height (corner 67.0 %) but passes L4's 13.37 mm.

Open: L4 stays at 13.37 mm against a drawn 14.5 mm. A raise was not in scope.

Open: the automatic correction mechanism for close distances named in the catalog is not modeled, and no close state exists in the patent.
