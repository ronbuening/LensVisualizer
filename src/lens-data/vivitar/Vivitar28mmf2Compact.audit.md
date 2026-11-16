# Derived-plane audit: Vivitar 28 mm f/2 Compact

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
- Analysis: the image-plane section was rewritten for the paraxial plane; the claim "axial aperture f/1.999999998, iris-limited" was corrected (the paraxially sized 8.62 mm stop admits a real axial beam of 6.46 mm radius, about f/2.17); the MTF figures are now marked as computed at the earlier 38.1937 mm plane.
- No semi-diameter was changed. The real f/2 marginal ray needs 9.49 / 9.50 / 10.06 mm at surfaces 12 / 13 / 14 (stored 9.0 / 9.3 / 9.3), but L6 and L7 reach edge contact at 9.50 mm and the surface check allows surface 12 no more than about 9.0 mm before the 12-13 air gap is flagged, so surface 12 cannot be opened; with it fixed, raising 13 and 14 passes no extra light. The aperture audit reports no rim limit as the file stands.

After the changes: focal length 28.0137 mm, f/2.0 (paraxial stop, 8.62 mm), back focus 38.3273 mm with zero paraxial defocus, total length 86.8793 mm, half-field 37.5 degrees. Surface check: OK. Aperture audit: no surface below the on-axis ray. Image circle: not undersized. Field coverage: 100 % (21.65 mm at 38.2 degrees).

Open:

- MTF and spot figures in the analysis were computed at 38.1937 mm and need recomputing at the paraxial plane.
- Wording, names, keys, spec chips and glass labels ("Unmatched ...") are still in the package's style; the four flint/crown types BK7, FK5, SF4 and SF6 are recognisable, the four lanthanum crowns need matching.
- Corner light is low (bundle needs 13.4 mm at surface 12; L6/L7 contact limits it to 9.5 mm): mostly the design, partly the inferred rims. Figure 1 is schematic and of the Table 1 form.
- The patent's 1:10 close-focus state (Table 7: S4 = 0.116 F, L5-L8 moving differentially) is not modeled.
- Further mounts, the maker brochure's 75-degree field and a construction diagram remain unchecked.
