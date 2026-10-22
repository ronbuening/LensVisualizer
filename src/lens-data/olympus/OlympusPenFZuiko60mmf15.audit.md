# Audit Log — OLYMPUS G.ZUIKO AUTO-T 60mm f/1.5

Patent: JP S38-9224 B, sole numerical example / Figure 1.

## Historical source and construction review

The three-page national publication supplies twelve radii, eleven internal intervals and seven glass pairs on page 1, the Seidel table and optional same-material manufacturing split on page 2, and the section and d/g aberration plots on page 3. The literal r8 = −43.1 and n6 = 1.5407 were confirmed; neither was corrected to a catalog or guessed reading. The optional same-index split of optical unit L4 was omitted because it adds no distinct optical medium. The 28° full-field heading remains distinct from the plots' 15° labels. A bilingual 1958 Olympus-affiliated paper establishes Yoshisada Hayamizu's Latin name; the filing and publication dates do not establish a separate grant event.

All source lengths were uniformly scaled by 0.6 for the probable 60 mm production association, without fitting the calculated EFL to exactly 60 mm. The unprinted infinity image interval is derived. The initial schematic clear-arc estimates clipped the nominal axial f/1.5 beam. The adopted rims are the minimum outward-rounded 0.01 mm axial-envelope floors, preserving matched outer rims and the reduced S7 cap without off-axis MTF fitting or a gap-sag override. Source radii, thicknesses and glass coordinates stayed unchanged.

The plane-interface Petzval entry was initially given a generic rounding interval; its contribution is exactly zero. No printed Seidel coefficient was repaired. Glass-coordinate report labels were corrected from e-line to d-line terminology without changing calculations. The source table has no spectral subscript; Figure 2's d/g curves support the contextual d-line convention. Catalog analogues remain unassigned historical identities.

Historical infinity calculations agreed on paraxial properties, material containment and sampled transmission. Reference-line and approximate-photopic MTF were kept distinct, as were Gaussian and best-axial image planes. Nominal-beam clearance did not establish full transmission under the broader viewer pupil convention: ordinary clipping persisted at all eight aperture settings. Finite sampling did not establish universal ray coverage. The original focus control was static; these earlier aberration and material results describe infinity only.

## 2026-10-22 — Deployment validation and fix-up pass

Re-read the local patent's three pages, including all twelve radii, eleven internal intervals, seven n/ν pairs, medium transitions and both cemented boundaries. The model matches the printed values at uniform ×0.6 scale; d7 = 15 becomes the unchanged 4.5 + 4.5 mm iris split. No transcription mismatch or source erratum was found. There are no aspheric coefficients. S6 remains plane, r8 remains −43.1 before scaling, and all rims and source spacings remain unchanged.

The patent states f = 100, F/1.5 and 28° full field. The scaled first-order model remains EFL 60.003003987 mm and infinity BFD 30.088696439 mm, preserving the +0.003003987 mm nominal focal-length residual. The physical stop radius remains 10.919548871 mm; its paraxial f-number is 1.490290604, distinct from the nominal exact-marginal F/1.5 convention. Infinity track remains 77.188696439 mm.

The Olympus fourteen-lens guide, page 3, confirms 7/5, 28°, 0.8 m minimum focus, 49 mm filter and 270 g. All four guide pages show nothing contrary to whole-lens helicoid focus, but provide no measured movement law. Ponder & Best page B-6 (PDF page 6), May 1968, stock 18-9202, shows the matching two front menisci, plane-interface central doublet, opposed central cavity, separate negative meniscus and curved-interface rear doublet. Its orientation differs from the patent; propagation order agrees. This supports a probable sheet-specific association, not exact factory coordinates or all-version identity. May 1968 is the dealer-sheet date, not a lens-version date. The dealer's 2 ft 7 in and the guide's rounded 0.8 m remain distinct printed quantities; the 49 mm filter is mechanical.

Unit focus is reconstructed by varying only the final gap after surface label `12`, not array index 12. For lens matrix M = (A B; C D), the 800 mm film-plane conjugate satisfies (A + qC)(800 − 47.1 − q) + B + qD = 0. The near-infinity root q = 35.361655576336445 mm gives 5.272959137632468 mm travel, object-to-first-vertex distance 717.538344424 mm and first-vertex-to-image track 82.461655576 mm. High-precision source-matrix arithmetic and the engine probe agree. Internal geometry, EFL and stop remain fixed.

| Field | Old → new |
|---|---|
| `name` | `OLYMPUS G.ZUIKO AUTO-T 60mm f/1.5 (Pen F, May 1968)` → `OLYMPUS G.ZUIKO AUTO-T 60mm f/1.5` |
| `subtitle` | `JPS389224B sole example; probable B-6 stock 18-9202 pairing, conditional 0.6 scale` → `JP S38-9224 B, Sole Example — probable Pen F production correlation` |
| `visible` | `false` → `true` |
| `catalog.specs` | Six long lines on probable May 1968 stock pairing, dimensionless ×0.6 scale, seven glasses/five groups and S6/S11, distinct field limits, metadata-only 0.8 m, and mechanical 49 mm filter → `7 ELEMENTS / 5 GROUPS`; `DESIGN f = 60.00 mm`; `DESIGN F/1.5`; `ALL SPHERICAL`; `HALF-FRAME`. The qualifications remain in the analysis. |
| L1–L7 `label` | `Glass element 1` … `Glass element 7` → `Element 1` … `Element 7`, matching neighboring Olympus files; names remain L1–L7. |
| L1–L7 `glass` | `Unidentified historical melt; catalog equivalents not adopted` → `Unmatched (historical glass)`; no catalog identity or spectrum added. |
| L1 `role` | `Front positive meniscus, source optical unit L1.` → `Front positive meniscus.` |
| L2 `role` | `Second positive meniscus, source optical unit L2.` → `Second positive meniscus.` |
| L3 `role` | `Positive front glass of source unit L3; plane rear is a real glass-to-glass interface.` → `Positive front member of central cemented group.` |
| L4 `role` | `Negative rear glass of source unit L3; reduced rear clear arc meets a source-figure shoulder.` → `Negative rear member with a reduced clear arc.` |
| L5 `role` | `Single negative meniscus, source unit L4; optional same-index manufacturing split is not adopted.` → `Single negative meniscus.` |
| L6 `role` | `Negative front member of source rear unit L5, curved cemented boundary S11.` → `Negative front member of rear doublet.` |
| L7 `role` | `Positive rear member of source unit L5.` → `Positive rear member of rear doublet.` |
| Surface `12` `d` / `gaps` | Fixed `d: 30.088696438703977`, no variable gaps → omitted surface `d` and `gaps["12"] = { label: "BF", values: [[30.088696438703977, 35.361655576336445]] }`. |
| `focus.description` | `NO_INTERNAL_RECONSTRUCTION` and metadata-only infinity description → whole-lens movement with fixed internal spacings and a calculated 0.8 m endpoint. `closeFocusM` remains 0.8. |
| Header comment | Static-focus/process terminology → explicit film-plane conjugate equation and travel; all source, scale, stop, rim and name qualifications retained. |

The public analysis now opens with patent identification, uses the existing normalized bibliographic spelling, and describes the calculated unit-focus endpoint. The correction preamble, hashes, private link, obsolete static-focus claims, code identifiers, ray/segment tallies and file-production narrative were removed. Technical architecture, glass analogues, numerical limitations, source citations and infinity-only scope of historical aberration results remain. The audit's former external-file instructions and pipeline receipts were condensed into the substantive history above; obsolete self-references to the former filename stem were removed.

Before and after the changes, the named-file surface audit reports no errors and the aperture audit accepts the single station without rim, trace or iris failure. The engine summary is unchanged. At the close keyframe, the probe changes the final gap 30.0887 → 35.3617 mm, track 77.1887 → 82.4617 mm, unbounded object conjugate → 800.00 mm object-to-image distance, and transverse magnification 0.0000 → −0.0879. These are all consequences of the added unit-focus endpoint; infinity and element/group powers stay unchanged. Full test suites, generators, formatting tools, builds, dev servers and state-changing git operations were excluded by this assignment. Changes remain uncommitted.

Open: exact factory prescription and version coverage; historical melts and exact dispersion; source iris and clear dimensions; full non-Petzval Berek convention; finite-focus aberration behavior and full viewer-pupil transmission. Existing infinity viewer clipping remains disclosed; the nominal aperture audit does not resolve it.
