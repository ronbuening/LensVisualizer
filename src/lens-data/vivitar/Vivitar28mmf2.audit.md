# Audit: Vivitar 28mm f/2

Pinned native engine: 70600ffc23af48a81994cf8fc834048fdf9d21a1. The image plane was moved on November 15, 2026 to the on-axis best geometric spot at f/2 (superseded: see the deployment validation section below). Original compact checkpoint restored from private archive, kept unchanged under source/. Original full /tmp checkout was unavailable after environment restart; fresh pinned checkout used.

Only S16 image gap and explanatory metadata changed. Literal 38.08 mm preserved in reference; final 38.19374065616819 mm. No glass/cap/stop/internal-spacing change or geometry override. All source identity limitations remain; brochure eight elements/eight groups, patent72 versus retail75 degrees.

Fresh final geometry, axial aperture and full-frame chief coverage pass. Three-plane 24 MTF cells plus exact-patent-field two cells converge (d line, geometric/diffraction,0–40 lp/mm,max256 grid). Selected plane is geometric wide-open RMS optimum, not paraxial focus. Diagnostic +0.133534 mm remains intentionally disclosed. Off-axis sagittal contrast and pupil transmission remain low; no quality threshold was invented or silently waived. See paired analysis for numbers.

Independent exact-Snell solver agrees at 1,000 area-weighted rings; it independently computes optics but uses native admitted pupil radius. Final plane was based on 100 rings, convergence difference10.5 nm. Exploratory terminal-surface/image-plane projection bug was corrected before final solve; valid evidence uses terminalPoint projection. MTF source script explicitly reset original38.08 before each comparison to prevent double shifting on reruns.

Fresh targeted TypeScript status in evidence/typecheck.txt; full app/browser/current-main checks remain integration work. No publish, commit, upload or delivery performed by this worker.

## 2026-11-15 — Deployment validation

An independent checker re-read US 4,258,980 from the page images: the front page, Table 2 (300 dpi crops), its repeat in claim 6, Table 7, Figure 1 and Figures 4A/4B. Checked: all 16 radii, 8 thicknesses, 7 air spaces and 8 Nd/Vd pairs against the file at 28x; the header values; the bibliographic fields.

Verdict: valid with notes. Every prescription value matches Table 2 times 28, and claim 6 repeats the table digit for digit. Front page: US 4,258,980, March 31, 1981, Jacob Moskovich, Vivitar Corporation. Computed against printed: focal length 1.0005 F against 1.0; F1 -1.002 against -0.996; F2 0.929 against 0.926; paraxial back focus 1.3688 F against 1.36. Product link: moderate. Lens listings name a Kiron-made Vivitar 28mm f/2 "Compact" (serial 22xxxxxx, 55 mm filter, 1978, 8 elements in 8 groups, 0.30 m), which fits the patent's eight air-spaced elements, compactness aim, 1978 priority and 1:10 close focus; the Komine-made "Close Focus" version (49 mm filter, 0.23 m) is a different lens. Tables 2, 3 and 4 are all 72-degree f/2 examples and no public construction diagram was found to choose between them.

Changes:

- Last gap (surface 16): 38.19374065616819 -> 38.3273 mm. This is the paraxial back focus of the printed prescription. The patent prints BFL only as 1.36 F; its printed values are truncated paraxial ones (Table 1 computes 1.5969 against 1.59; Table 2 1.3688 against 1.36), its astigmatism plots are zeroed on the axial focus, and it has no spherical-aberration plot, so it does not support a best-spot plane. A single-value misprint scan (435 variants) found no repair for the spherical aberration or the F1/F2/BFL differences.
- `subtitle`, the last `specs` entry and `focus.description`: the clauses describing a derived wide-open plane and a +0.113741 mm shift were replaced by the paraxial plane, because they became false.
- `source.patentNumber`: "US 4,258,980" -> "US 4,258,980 A".
- `catalog.lensMounts`: added `["pentax-k"]`. Source: the Pentax Forums lens database lists the Vivitar 28mm 1:2 Auto Wide-Angle No. 22xxxxxx (Kiron, 55 mm filter) in K mount. Other mounts were certainly sold but were not confirmed from a source for this version.
- `catalog.closeFocusM.marketing`: added 0.3 (listings for the 55 mm Kiron-made version).
- Float noise rounded: 1.9600000000000002 -> 1.96, 11.228000000000002 -> 11.228, 1.6720000000000002 -> 1.672, 2.0240000000000005 -> 2.024, 2.3800000000000003 -> 2.38, 72.32400000000001 -> 72.324, 3.9200000000000004 -> 3.92.
- Header comment replaced by a description of source, scale, image plane and inferred values.
- Analysis: the image-plane section was rewritten for the paraxial plane; the claim "axial aperture f/1.999999998, iris-limited" was corrected (the paraxially sized 8.62 mm stop admits a real axial beam of 6.46 mm radius, about f/2.17); the MTF and spot figures computed at the earlier 38.1937 mm plane were removed when the analysis was rewritten.
- Analysis rewritten to the house section skeleton.
- No semi-diameter was changed. The real f/2 marginal ray needs 9.49 / 9.50 / 10.06 mm at surfaces 12 / 13 / 14 (stored 9.0 / 9.3 / 9.3), but L6 and L7 reach edge contact at 9.50 mm and the surface check allows surface 12 no more than about 9.0 mm before the 12-13 air gap is flagged, so surface 12 cannot be opened; with it fixed, raising 13 and 14 passes no extra light. The aperture audit reports no rim limit as the file stands.

After the changes: focal length 28.0137 mm, f/2.0 (paraxial stop, 8.62 mm), back focus 38.3273 mm with zero paraxial defocus, total length 86.8793 mm, half-field 37.5 degrees. Surface check: OK. Aperture audit: no surface below the on-axis ray. Image circle: not undersized. Field coverage: 100 % (21.65 mm at 38.2 degrees).

Open:

- (Closed 2026-11-15 by the cleanup and wording pass below.) Wording, names, keys, spec chips and glass labels ("Unmatched ...") are still in the package's style; the four flint/crown types BK7, FK5, SF4 and SF6 are recognisable, the four lanthanum crowns need matching.
- Corner light is low (bundle needs 13.4 mm at surface 12; L6/L7 contact limits it to 9.5 mm): mostly the design, partly the inferred rims. Figure 1 is schematic and of the Table 1 form.
- The patent's 1:10 close-focus state (Table 7: S4 = 0.116 F, L5-L8 moving differentially) is not modeled.
- Further mounts, the maker brochure's 75-degree field and a construction diagram remain unchecked.

## 2026-11-15 — Cleanup and wording pass

The file and key were renamed by the coordinator to `Vivitar28mmf2` / `vivitar-28mm-f2`; the word "Compact" was dropped from the header and the analysis because no Vivitar document supporting it was read.

Fields changed in the data file:

- `subtitle`: "US4258980 Table 2; paraxial infinity image plane, not factory prescription" -> "US 4,258,980 A, Table 2 — construction-based association with the Kiron-made Vivitar 28mm f/2".
- `specs`: "8 ELEMENTS / 8 GROUPS", "TABLE 2 AT 28×", "72° PATENT / 75° RETAIL", "INFINITY ONLY", "PARAXIAL INFINITY IMAGE PLANE 38.3273 MM" -> "8 ELEMENTS / 8 GROUPS", "ALL SPHERICAL", "f/2", "MINIMUM FOCUS 0.3 m".
- `focus.description`: now begins "Infinity focus only; ..." and names the unmodeled 1:10 state. `focus.closeFocusM` stays 1e15 and `catalog.closeFocusM.marketing` stays 0.3.
- Element 5 `type`: "Plano-convex Positive" -> "Plano-Convex Positive". A `role` line was added to each element.
- Header comment: product named as the Kiron-made version, with a glass paragraph and a statement that this is not the Komine-made Close Focus lens.
- No cemented pairs: `doublets` stays empty and no element carries `cemented`. Groups G1 (L1-L3) and G2 (L4-L8) follow the patent text.
- No `apd` tags: the maker publishes no special-dispersion positions for this lens.

Glass labels (printed Nd is exact at three decimals for every row; difference in Abbe number is catalogue minus printed):

- L1: Unmatched -> N-BK7 (SCHOTT; BK7-class equivalent), 1.51680 / 64.17, -0.03.
- L2: Unmatched -> LAC12 (HOYA), 1.67790 / 55.52, +0.02.
- L3: Unmatched -> N-FK5 (SCHOTT; FK5-class equivalent), 1.48749 / 70.41, +0.01.
- L4: Unmatched -> SF4 (SCHOTT legacy), 1.75520 / 27.58, +0.08.
- L5: Unmatched -> LACL60 (HOYA), 1.64000 / 60.20, 0.00.
- L6: Unmatched -> SF6 (SCHOTT legacy), 1.80518 / 25.43, -0.07.
- L7: Unmatched -> K-LaK11 (SUMITA), 1.65830 / 57.29, -0.01.
- L8: Unmatched -> LAC14 (HOYA), 1.69680 / 55.46, -0.04.

The Schott N-LAK21 row (index 1.64049, Abbe number 60.10) fits L5 less closely than LACL60 and was not used. The vendors are catalogue equivalents only; the patent names no glass.

Analysis: title line added, glass section replaced by the table of catalogue equivalents, and the product paragraph now says which Vivitar 28mm f/2 this is and is not.

Engine numbers before and after are identical: focal length 28.0137 mm, f/2 (stop semi-diameter 8.6226 mm), half-field 37.528 degrees, back focus 38.3273 mm, total length 86.8793 mm. Surface check: OK. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. Field coverage: at least 99 %.

Open:

- (Closed 2026-11-15 by the semi-diameter pass below.) Rims are estimates, not read from a figure of this example. The real f/2 marginal ray needs 9.49 / 9.50 / 10.06 mm at surfaces 12 / 13 / 14 against stored 9.0 / 9.3 / 9.3, and L6 and L7 touch at 9.50 mm.
- The stop is sized paraxially; the real axial beam it admits is about f/2.17.
- The patent's 1:10 close-focus state (Table 7) is not modeled.
- Only the Pentax K mount is sourced; other mounts, the maker brochure and a construction diagram of the production lens remain unchecked.
- Tables 3 and 4 are also 72-degree f/2 examples; nothing found chooses between them and Table 2.

## 2026-11-15 — Semi-diameter pass against the patent figure

Source: US 4,258,980, sheet 1, FIG. 1 (PDF page 2). FIG. 1 draws the Table 1 (84-degree) form, not Table 2, so it was used for proportions only. Its scale was checked on two spans against Table 1: first to last vertex 365 px for 2.084 F and last vertex to focal plane 273 px for 1.59 F (175 and 172 px per focal length at 110 dpi, 2 % apart). Read at that scale the rear-group rim heights stand as L5 : L6 : L7 : L8 = 1 : 0.94 : 1.0 : 1.15, and L6 and L7 are drawn meeting at the rim. The file had 1 : 0.81 : 0.84 : 1.17.

Source geometry: the rear face of L6 (R = 72.324) and the front face of L7 (R = -37.548) across the 1.848 mm air space touch at a semi-diameter of 9.50 mm. The real f/2 marginal ray passes those faces at 9.49 and 9.50 mm, so the prescription itself puts the clear aperture at the contact ring. A rim of 9.49 mm would need a gap fraction of 0.998, above the 0.98 ceiling, so the real f/2 beam cannot be admitted in full; 9.4 mm is the largest one-decimal rim that stays inside 0.98 (remaining air 0.039 mm, fraction 0.979).

| Surface       | Before | After | Evidence                                                                                                |
| ------------- | ------ | ----- | ------------------------------------------------------------------------------------------------------- |
| 11 (L6 front) | 9.0    | 9.4   | square with surface 12                                                                                  |
| 12 (L6 rear)  | 9.0    | 9.4   | contact ring at 9.50 mm; FIG. 1 draws L6 and L7 meeting; real f/2 ray at 9.49 mm                        |
| 13 (L7 front) | 9.3    | 9.4   | as surface 12; real f/2 ray at 9.50 mm                                                                  |
| 14 (L7 rear)  | 9.3    | 10.1  | real f/2 marginal ray at 10.06 mm; the old value clipped the beam just off axis (97.3 % at 2.9 degrees) |

`checks.gapSagFrac` was set to 0.98, the smallest two-decimal value that admits 9.4 mm on the 12-13 air space; the faces do not cross. All other rims are kept: FIG. 1 belongs to a wider-field example, so the front-group heights cannot be read from it, and nothing else clips the axial beam or the chief ray.

Illumination, geometric, wide open, before -> after: 2.9 degrees 97.3 -> 100.0 %; 11.8 degrees 88.5 -> 97.5; 20.6 degrees 67.5 -> 78.1; 29.4 degrees 41.2 -> 52.0; 35.3 degrees 22.6 -> 30.9; 38.2 degrees (corner) 13.0 -> 16.9. No field loses light; the largest gain is 11.0 points. No rim is below its starting value.

Engine values are unchanged: focal length 28.0137 mm, f/2, stop semi-diameter 8.6226 mm, half-field 37.528 degrees. Surface check OK; aperture audit shows no rim, trace or iris limit; image circle not undersized; field coverage 100 % (21.65 mm at 38.2 degrees). The real-ray clearance trace still marks surfaces 12 and 13 as 0.09 and 0.10 mm short of the true f/2 marginal ray, which is the contact limit described above.

Product name: the lens is engraved "Vivitar 28mm 1:2 Auto Wide-Angle" in lens listings (Pentax Forums lens database, serial 22xxxxxx, Kiron-made); the file's name "VIVITAR 28mm f/2" is the short form of that. No further metadata was changed: no source was found for the blade count or for mounts other than Pentax K.

Open:

- The stop is sized paraxially (8.62 mm); a true f/2 beam needs 9.58 mm there. Enlarging it is not recommended while surfaces 12 and 13 cannot pass that beam.
- Front-group rims (L1-L4) and L8 are unverified estimates; no figure of Table 2 exists.
- Corner light remains low (16.9 %); the L6/L7 contact ring limits it.
- Blade count, further mounts and a maker construction diagram remain unsourced.

## 2026-11-15 — Second review on the local site

Compared: the live page (infinity, inspector open on L6 and L7) with US 4,258,980 FIG. 1, which draws the Table 1 form and is used for proportions only; Table 2 and Table 7 re-read from the page images; the semi-diameter section above re-measured with the rim-cost and clearance traces.

Change:

| Surface       | Before            | After                           | Evidence                                                                                                                                                               |
| ------------- | ----------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13 (L7 front) | `sd` 9.4, no land | `sd` 9.4, `rimExtensionSd` 10.1 | FIG. 1 draws L7 as a square-edged block standing slightly above L6; the page drew a slanted edge from 9.4 to 10.1 mm. The land squares L7 at the height of surface 14. |

Lands and cuts: no face is below its starting value. Two lands: surface 4 (to 14.6 mm, from the package) and surface 13 (to 10.1 mm, new). Both cost 0.0 points at every field; the file's curve is unchanged by the new land (corner 16.9 %, worst loss against the starting rims 0.0 points, largest gain 11.0). Surface check OK with `gapSagFrac` 0.98; the land lies outside L6's 9.4 mm rim, so nothing crosses.

Found correct:

- L6 and L7 meet at the rim on the page without overlapping (0.039 mm of air at 9.4 mm).
- Figure proportions against L5 (figure / file): L1 1.78 / 1.72, L2 1.35 / 1.31, L3 0.73 / 0.73, L4 0.97 / 0.95, L8 1.19 / 1.17. Step order matches. L6 is 0.85 of L5 against the figure's 0.94; the 9.50 mm contact ring of Table 2 sets that.
- Table 2 spot values at 28x (R5, R9-R13, T5-T6, S4-S6, all eight Nd/Vd) and Table 7 (S4 = 0.116 for Table 2) agree with the file. Element types agree with the signs of the radii; stored focal lengths agree with the computed ones to the printed digits.
- Brackets G1 (surfaces 1-6) and G2 (7-16) follow the patent text ("first group G1", "group G2"; the figure letters them GP1 and GP2). No cemented pairs, no aspheres, no special-dispersion tags. The stop is drawn between L4 and L5.
- Movement: no variable gap; the focus slider shows "Not modeled" and `focus.description` states only what the patent says.
- Glass: all eight labels resolve to rows equal to the printed pairs at the printed precision (largest index difference 4.9e-4 on a three-decimal print, largest Abbe difference 0.08). The patent names no glass and prints no further line indices or partial dispersions.
- Assignee "Vivitar Corporation" matches the front page and the other Vivitar files.
- Engine values unchanged: focal length 28.0137 mm, f/2, stop 8.6226 mm, half-field 37.528 degrees. Aperture audit: no rim, trace or iris limit. Image circle not undersized. Field coverage at least 99 %.

Open:

- Closed 2026-11-15: L1 and L3 were relabelled from the modern Schott names N-BK7 and N-FK5 to the equally exact period Hoya rows BSC7 (1.51680 / 64.20) and FC5 (1.48749 / 70.45), and all eight labels now use the "catalog equivalent" wording. The set still mixes Hoya, Schott (SF4, SF6) and Sumita (K-LaK11), because no single vendor has an exact row for every element.
- Only the Pentax K mount is sourced.
- The earlier open items stand (paraxial stop, unverified front-group rims, low corner light, 1:10 state not modeled).
