# CARL ZEISS JENA FLEKTOGON 35mm f/2.8: source and geometry audit

Whole source and scale: US 2,793,565 A, 0.35.
No optical row is retuned. Stop split is preserved as documented in the companion analysis.

Provisional surface caps (mm): [17, 17, 10, 10, 5.5, 5.5, 5.5, 7, 7, 7, 7]. No source clear diameters exist. (Superseded
draft list, closed 2026-11-10: the data file carries 7.8 / 7.5 / 5.79 mm on surfaces 5–7.)
Dense static samples include axis and rim; all adjacent optical faces are positively separated. The selected allowance and all native margins are reported below; the earlier 80% criterion applied only to the initial clipped draft.

The physically clear rear rim of surface 7 is 5.79 mm. Keeping the exact source stop and the initially required 5.803010 mm beam rim would put the iris plane 0.01344 mm inside the glass surface at the edge. The chosen rim leaves 0.0021003 mm axial clearance but produces a small, explicitly retained axial rim loss: the traced iris-relative equivalent is f/2.807153 rather than exactly f/2.8 (0.255478% penalty). The model is therefore not claimed to be perfectly iris-limited. This is a geometric reconstruction, not manufacturing-clearance certification. No gap-sag or rim-angle override is authored.

Reference-wavelength geometric and diffraction MTF were evaluated at maker-angle hypotheses 0°, 15.5° and 31°, plus the independently solved actual full-frame corner 32.208391206°. Neither patent gives a numerical field. Exact maker angles use chief-height mapping; the temporary 100 mm image-circle normalization exists only in the diagnostic request, not the authored model. Grid-128 nonconvergence is preserved. The supported adaptive cap of 256 converges through sampled 40 lp/mm at all maker angles. A requested 512 grid was rejected by the support guard and is not used. The derived-plane and best-axial results are separate: best-axial shift +0.027699359223 mm is diagnostic only and never authored.

At the actual full-frame corner both methods and both focus modes converge through sampled 40 lp/mm. Broadband accuracy, finite focus, manufactured rim sizes and exact factory performance are not established.

The final JSON interval zero is a computational endpoint, not a source BFL. The last authored gap is the independently calculated collimated BFL. The image plane is not optimized.

Original source handoff: flektogon35_recovery/RECOVERED_SOURCE_HANDOFF.txt. All source identity and archival limitations are retained.

## Deployment validation (2026-11-10)

Independent check against the US 2,793,565 page images: 11 R, 11 thicknesses/spacings (including the printed stop split
b1 7.55 / b2 8.09), 6 nd and 6 ν equal the First embodiment ×0.35; no mismatches. r11 reads −36.14 (DE 953471 prints the
same; −30.14 would give f = 74.6). EFL 34.965 (99.90 at patent scale), construction length exact. The 1957 Zeiss Jena
catalogue shows the 6/5 Flektogon 2.8/35 with this architecture; zeissikonveb.de notes the production glasses differ from the
patent's, so the model is the patent design of the lens, not the factory prescription.

Applied: `catalog.lensMounts` m42 / exakta / praktina (1957 catalogue).

Open: the header does not state the ×0.35 scale; `focalLengthMm.design` holds the traced 34.965; R/d values carry float
noise; the audit cap list above (5.5/5.5/5.5) is stale against the data (7.8/7.5/5.79); the analysis's "ASB Exakta" wording
(the catalogue gives Exakta as SB); public wording needs a cleanup pass. (Closed in the cleanup pass below.)

## 2026-11-10 — Cleanup and wording pass

Data file. Header rewritten in house form, keeping every fact: US 2,793,565 A First embodiment (Fig. 1), f = 100
scaled ×0.35, printed b1/b2 stop split, inferred rims with default geometry checks, f/2.8 and 62° from the 1957
catalogue, derived back focus, the surface-7 iris clearance and f/2.807 equivalent; process wording removed. `subtitle`
"US 2,793,565 A — PROBABLE FAMILY, WHOLE SOURCE EXAMPLE" → "US 2,793,565 A, Embodiment 1 — ×0.35 patent design of the
Flektogon 2.8/35; production glasses differ". `specs` → 6 ELEMENTS / 5 GROUPS, DESIGN f = 35.00 mm (×0.35), F/2.8,
2ω = 62°, ALL SPHERICAL. `focus.closeFocusM` 1e9 → 1e15 placeholder and a plain `focus.description`.
`catalog.focalLengthMm.design` 34.965… → 35, the scaled patent f = 100 (LENS_DATA_SPEC item 7); the Carl Zeiss Jena
folder uses both forms (Biogon 35, MC Pancolar 50 and Jena Sonnar 50/2 carry a round patent focal length; Flektogon 20
and 50 the traced EFL). Element `role` added and `indexReferenceNote` reworded. Float noise removed from R1, R3, R8, R9 and the
gaps after surfaces 2–5, 7 and the stop; each rounded value equals the printed value ×0.35. The derived last gap
(34.55906720080986) is unchanged.

Glass. L4 "Unmatched (literal source index and Abbe value)" → "BaSF2-class barium flint (catalog row J-BASF2, Hikari)":
J-BASF2 1.66446 / 35.87 against the printed 1.6645 / 35.9 (Δnd −4×10⁻⁵, Δνd −0.03); the label resolves to that row. No
other element has an exact row: L1/L6 1.6224 / 60.3 (nearest N-SK16 1.62041, Δnd −0.0020), L2 1.6051 / 42.2 (nearest
BAM25 1.60323, Δnd −0.0019), L3 1.6583 / 51.0 (nearest N-SSK5 1.65844 / 50.88, Δnd +1.4×10⁻⁴, outside 1×10⁻⁴), L5
1.7588 / 26.7 (nearest FD140 1.76182, Δnd +0.0030). These keep `Unmatched (…)` labels stating the printed values. No
`apd` tags: the maker publishes no special-dispersion elements.

Engine numbers, before and after (built.mjs, probe.mjs and a full-precision paraxial trace): EFL 34.965364713964 mm,
BFD 34.559067200810 mm, FOPEN 2.8, half-field 29.709723794°, stop radius 5.803458387 mm, total track 81.620067201 mm;
differences only beyond the 13th significant digit from the rounding. `closeFocusM` changed from 1e9 to 1e15 as
intended. audit:surface OK; audit:aperture within 3 % of f/2.8, no rim limit.

Analysis. Removed the staging, census, MTF-grid and convergence paragraphs, the schema-placeholder focus text and the
"four other models" / "both models" leftovers; "Model Qualifications and Validation" is now "Model Scope and
Limitations". Corrected "ASB Exakta/Exa": the 1957 catalogue lists Exakta and Exa with the spring diaphragm (SB) and the
automatic spring diaphragm (ASB) only for the Praktina IIA and Praktisix. Added DD 10604 and DE 953 471, the
zeissikonveb.de production history (patent based on the 1952 V118 calculation; production glasses differ; production
f ≈ 36.7 mm with a back focus over 37 mm), the claim conditions with the example's values, element roles, the J-BASF2
match, the catalogue mounts and the 0.36 m close-focus source. The surface-7 figures were rechecked: a rim equal to the
stop radius (5.8035 mm) meets the iris plane 0.0134 mm inside the glass; the 5.79 mm rim leaves 0.0021 mm.

Open:

- Rims were not compared with the patent figure in this pass (sd unchanged). At the full-frame corner the chief ray
  crosses surface 1 at 16.98 mm against sd 17. (Closed 2026-11-10 by the semi-diameter pass below.)
- `aperture.fStops` / `maxFNumber` end at f/22; secondary sources give f/16 as the smallest aperture of the 1950s lens.
  Left until a maker source confirms it.
- The 0.36 m close focus rests on lens-db (Type 1) and a Kadlubek catalogue figure; the 1957 catalogue gives none.
- The 0.0021 mm surface-7 iris clearance is tight; a rim pass should keep the printed stop split. (The semi-diameter
  pass below keeps surface 7 at 5.79 mm and the stop split as printed.)

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: US 2,793,565 A (patents/US2793565A.pdf), page 1, Fig. 1 (First embodiment, the modeled example), a 300 dpi
bilevel scan. Scale: the r1 arc fits R1 = 113.42 at 620–650 px and the r1–r11 vertex span is 758 px for 134.46, so
the figure runs at about 5.6 px per patent unit, 16.0 px per model mm at ×0.35. Element I's r2 arc agrees (96 px sag at
241 px height against 92 px predicted). The internal axial spacings are not to scale (l1 about 5.0, element II about
6.7 and stop-to-r11 about 7.6 px per unit), so only heights were read: line centres (outer ink less 4 px), top and
bottom averaged (they differ by up to 7 % on the cemented block). Element V's drawn edge thickness (≈2.3 mm) matches the
model's 2.0 mm at the drawn height, a further check on the height scale.

| Surface | Before (mm) | Fig. 1 (mm) | After (mm) | Evidence |
| --- | --- | --- | --- | --- |
| 1 | 17 | 17.1 | 17 | agrees |
| 2 | 17 | ≈15 (end of the drawn bevel) | 15.8 | figure; 15.8 is the smallest rim that keeps the engine half-field at 29.71° (15.0 gave 28.47°) |
| 3, 4 | 10 / 10 | ≈8.7, square-cut | 9.7 / 9.7 | figure; light-limited (9.6 alone costs 3.6 points at 23.4°) |
| 5, 6 | 7.8 / 7.5 | ≈7.1, square-cut block | 7.7 / 7.7 | square as drawn; light-limited (7.5 costs 4.1 points at 14.6°; 7.6 with L2 at 9.7 exceeds 3) |
| 7 | 5.79 | ≈5.4 (bevel) | 5.79 | kept: axial floor (real-ray f/2.8 5.70 mm, engine paraxial beam 5.80 mm) and iris clearance |
| 8, 9 | 7 / 7 | ≈6.0, square-cut | 6.4 / 6.4 | figure; floor: 6.2 clips the axis (96.4 %), 6.3 costs 0.8 points at 2.9°, 6.4 costs nothing |
| 10, 11 | 7 / 7 | ≈6.7 | 7 / 7 | within noise (4 %) |

Clearance at the full-frame corner (Y 21.63 mm, ω 32.18°): no axial clip or blocked chief ray; margins are surface 2
chief 14.70 against 15.8, surface 3 axial 8.07 against 9.7, surface 5 7.39 against 7.7, surface 9 6.17 against 6.4.
Engine values unchanged: half-field 29.7097°, f/2.8, stop radius 5.8035 mm. The surface validator passes, the aperture
check reports no rim limit (surface 7 stays 0.3 % under the paraxial f/2.8 beam, as before), the image-circle check
finds nothing undersized and the field coverage is 100 % with the 32.2° corner clear.

Engine illumination wide open at infinity, before → after, at 0 / 8.8 / 14.6 / 17.6 / 20.5 / 23.4 / 26.4 / 29.3 /
32.2°: 99.0 / 96.3 / 90.6 / 86.9 / 81.3 / 74.7 / 62.1 / 42.4 / 22.1 % → 99.0 / 95.6 / 89.3 / 84.9 / 78.6 / 71.8 /
61.0 / 42.4 / 22.1 %. Worst loss 2.9 points at 23.4°; the corner is unchanged. Restoring each element alone wins back
2.6 points (L2), 0.9 (L3–L4) and nothing for surface 2 or L5.

The 1957 catalogue section (p. 32, viewed in the deployment validation) is a small schematic; it agrees on 6 elements
in 5 groups and the order of element sizes but gives no rim scale.

Open:

- L2 and the cemented L3–L4 block stay about 10 % larger than drawn; further cuts cost more than 3 points of
  mid-field illumination.
- Surface 7 stays at 5.79 mm. The engine's paraxial f/2.8 beam needs 5.81 mm there; the validator accepts 5.81, but
  that rim would sit 0.021 mm behind the iris plane, so the 1 % on-axis loss in the engine is kept.

## 2026-11-10 — Second review: diagram, labels and movement

Compared the local page (1400×900, infinity, element inspectors 1–6) with US 2,793,565 A page 1, Fig. 1 (First
embodiment), re-measured at the native 300 dpi from per-column ink runs, axis at page row 1265. Scale re-checked on
the r2 arc of element I (R2 = 64.09 units): fits at 115, 165 and 225 px heights give 5.4–5.6 px per unit, consistent
with the semi-diameter pass's 16.0 px per model mm.

Element designations. The patent numbers the lenses I–VI in Fig. 1 and in its glass table, and the analysis already
quoted the claim as n_IV − n_III. Elements 1–6: `name` L1…L6 → I…VI, `label` "Element 1…6" → "Element I…VI",
`diagramLabel` I…VI added (the Biotar, Biometar and MC Pancolar files in this folder carry the patent numerals the same
way). The cemented member had `cemented: "L4"` on element III only, so element III's inspector read "CEMENTED L4" and
element IV's showed nothing, and no doublet bracket was drawn: both now carry `cemented: "C1"` and
`doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }]` is added; both inspectors read "DOUBLET C1". Element IV
glass "BaSF2-class barium flint (catalog row J-BASF2, Hikari)" → "BaSF2-class dense barium flint (…)": BaSF is the
dense barium flint family; the label still resolves to J-BASF2 (Δnd −4×10⁻⁵, Δνd −0.03). Header notes and analysis
prose follow the numerals.

Rims: no change. Fig. 1 readings (line centres, mm at model scale) against the file: surface 1 17.0 / 17; surface 2
bevel end 14.9–15.5 / 15.8 (15.7 drops the engine half-field to 29.58°, 15.5 to 29.27°); element II 8.8 square / 9.7;
cemented III–IV 7.3 square / 7.7 with r7 ending at a bevel about 5.5 / 5.79; element V outer edge 6.2, r9 cap about
5.5–5.9 behind a drawn bevel / 6.4 square (the f/2.8 axial ray needs 6.17 at r9); element VI 6.7–6.9 / 7.0. Step order
I > II > III–IV > VI > V holds on the page. Element II remains the largest departure, light-limited as recorded above.
The page draws element I's top and IV's rear edge as single slants where the figure draws a flat top and a short bevel;
a land would need a new `rimExtensionSd` (on IV it would sit on the iris plane), so neither is added.

Lands and cuts: no `rimExtensionSd` or `rimCutDepthMm`. Cuts against the light-rule baseline (surface 2 17 → 15.8,
II 10 → 9.7, surface 5 7.8 → 7.7, V 7 → 6.4; surface 6 raised 7.5 → 7.7 to square the block): the full-pupil
corner-light sweep gives a worst loss of 2.91 points at 23.4° (74.72 → 71.81 %), within the 3-point rule; restoring
element II alone wins back 2.6 points, the cemented pair 0.9, surface 2 and element V nothing. Keep: slight.

Re-checked and found correct: `type` strings against the signs of R (I and IV negative menisci convex to the object,
II convexo-plano, III positive meniscus, V negative and VI positive menisci concave to the object); roles; inspector
focal lengths −87.4, +43.9, +19.3, −13.4, −41.3, +23.6 mm; the stop between IV and V at the printed b1/b2 split; no
aspheric labels (none in the patent); no `apd` tags (no special-dispersion glass in the patent or the 1957 catalogue).
Movement: static infinity model, `gaps: {}`, `focus.description` says so and the slider reads "Not modeled"; the patent
gives no focus travel. Engine half-field 29.7097° and f/2.8 (stop radius 5.8035 mm) unchanged; surface validator OK,
aperture check no rim limit, image circle and field coverage clean, no axial clip or blocked chief ray at the 32.2°
corner. Assignee "VEB Carl Zeiss Jena" matches the front page and the folder's other seven files.

Glass and colour. The patent prints d-line n and ν only (page 2, "Type of glass"): no glass names, other lines or
partial dispersions. All five unmatched pairs recur in the Second embodiment (lenses I–V identical), so they are stock
glasses, not fitted values. Exact-window candidates: element IV also matches vendor AGF rows not in the repo catalog
(Sumita BASF2 1.66446 / 35.90, Hoya BAFD2 1.66446 / 35.89, Ohara BAH22 1.66446 / 35.81); J-BASF2 stays, the only exact
row in the catalog. I/VI 1.6224 / 60.3, II 1.6051 / 42.2, III 1.6583 / 51.0 and V 1.7588 / 26.7 have no catalog or AGF row
inside 1×10⁻⁴ / 0.15 (nearest SK16 1.62041, BAM25 1.60323, SSK5 1.65844 / 50.88, SF14 1.76182). No constant-index medium.
The patent prints no aberration curves, so there is no colour comparison to make.

The semi-diameter pass's two `Open:` lines stand (element II, here 9.7 against a drawn 8.8 mm, with the cemented pair
now read about 5 % over; surface 7 at 5.79 mm), as do the cleanup pass's f/22 and 0.36 m lines.
