# Scoped audit
Status: final independent scoped review PASS, qualified representative handoff. Private preservation, batch count and delivery remain with the parent.

Reproduce with prepare.py, native.mjs, validate.mjs, states.mjs, endpoint.mjs, diagnostics.mjs, parity.py, export.py and validate-export.mjs against recovered LensVisualizer 4caca439. Node loader: --import ./lens_recovery_20261112/LensVisualizer/scripts/ts-js-specifier-hook-register.mjs. FOCUS=1 selects literal near; diagnostics explicitly uses 4000mm object before first surface.

Canonical geometry errors[], actual export identicalOptics=true and hidden. (Closed 2026-11-15: the lens is now visible.) Author parity194 and independent parity218 pass. Independent reruns of all4872 rays match full JSON; exact axial endpoints pass both states. Independent entire-line sphere proof classifies all302 noBracket rays as authored surface-1 cap misses. Scripts, roots and results are in sibling Laowa200_PilotIndependent_20261113.

Edge sampled blocking remains61.57635468% infinity and53.94088670% near, not measured illumination. Inferred caps/default90% sag retained, no override. Initial failed caps remain in INITIAL_GEOMETRY.json. Literal2mm filter, image plane, both focus stations and all source optical values unchanged. Source fullPDF unavailable; verified original page images and maker connected diagram preserved separately. Full-app regression/current-main/browser QA deferred to integration. (Closed 2026-11-15: the file is on the deployment branch; see the dated sections below.)

Metadata correction only: closeFocusM now equals native computed4.199386517866485m, distinct from literal4.2000176m source object-to-image. Cover李大勇 rendered Dayong Li as explicitly qualified transliteration, not official English spelling. Final independent metadata/export rerun passed.

## 2026-11-15 — Deployment validation

An independent re-read of the patent page images (CN 120949408 A, 18 pages, no text layer) checked the data file against Example 2.

**Checked.** All 23 surfaces (radius, thickness, d-line index, Abbe number), the stop position, both variable gaps at both printed states, the image-side gap, the front-page bibliographic data, Figure 3 (element count, cemented pairs, element shapes, stop position) and Figure 4. No mismatch was found. The patent has no aspherical surfaces and the file has none. The patent states the indices are for the d line, and three glasses match catalogue values at helium d exactly (1.4586/90.19, 1.497/81.61, 1.5168/64.2), so `indexReference: "d"` stands.

**Verdict.** Valid. Example 2 is the only example of the patent that matches Laowa's published construction of 11 elements in 9 groups: an ultra-high-refraction first lens (nd 1.92286), an anomalous-dispersion second lens (1.4586/90.19), an ED lens cemented to the fourth lens, and a thin negative ED singlet ahead of the rear cemented pair. Example 1 has 10 elements in 8 groups and Example 3 has 11 in 8 without the ED singlet. Maker diagram: https://www.venuslens.net/wp-content/uploads/2025/10/%E9%95%9C%E7%89%87%E7%BB%93%E6%9E%84-scaled.png. One visible difference: the maker draws the ED singlet's curved face toward the object, while Example 2 has it toward the image (R17 = 644.0417, R18 = 103.3711).

**Changes made.**

- Header comment: replaced the one-line note with a plain statement of source, example, scale and which values are inferred.
- Element 12 `type`: `"Lens"` → `"Plane-Parallel Plate"`. The patent's 2 mm plate sits 3 mm behind the last lens and 45.2069 mm ahead of the image, which is the lens's own rear-filter position, not a camera cover glass, so it stays a drawn element.
- `catalog.closeFocusM.marketing`: added, 1.5 (maker's minimum focus distance). The patent's near state is a 4000 mm object in front of the first surface (4.20 m object to image); the model does not extrapolate to 1.5 m.
- `source.errata`: five entries → one. The remaining entry records the only contradiction inside the patent: the Example 2 table prints an Abbe number of 62.96 for the focusing lens, and the conditional-expression summary lists 62.900. The file keeps the table value. The four removed entries were not source errors; their content is under Open below.

No prescription value, gap, semi-diameter or focus state was changed.

**First-order values after the changes (patent in brackets).** EFL 194.5237 mm (194.5254); f/2.06 (2.06); half-field 6.303° (6.303°); image-side gap 45.2069 mm as printed, paraxial back focus 45.2054 mm; total length 200.0176 mm; stop radius 18.4554 mm. Near state: focus at 4000.01 mm in front of the first surface with the printed gaps (patent: 4000 mm). Conditional values reproduced: FL/F3 2.647, FL/D1-2 5.517, FL/D3-4 6.379.

**Audit results.** `audit:surface`: no validation errors. `audit:aperture`: within 3 % of the stated f-number, no rim limit. `audit:image-circle`: not undersized. `audit:field-coverage`: 100 %, 21.60 mm of 21.65 mm, corner clear (both coverage audits run on a copy with `visible: true`). Real-ray clearance at 21.6 mm image height: the axial beam and the chief ray clear every surface; the corner beam is cut by up to 66 % on one side at the rear group (semi-diameter 16 mm) and by 26–45 % at the front group. Figure 3 scales to about 16.5 mm for the rear group, 28 mm for the fifth lens and 49 mm for the front lens, against 16, 29 and 51 mm in the file, so this vignetting belongs to the design as drawn and the rims were left alone.

Analysis rewritten to the house section skeleton.

**Open.**

- Open: the inventor name 李大勇 is romanised as Dayong Li, the form the other Laowa files use; the patent prints no official English spelling.
- Open: the maker asks for rear filters under 1.5 mm thick (Sony E and Nikon Z versions only) and the patent's plate is 2 mm; the file keeps the patent's plate and makes no claim about the factory filter.
- Open: all semi-diameters are inferred, not printed; a later pass may compare them with Figure 3 in detail.
- Open: element 12 name and label ("Source filter"), the `specs` chips, the element glass labels, `focus.description` and the wording of the analysis and of the earlier lines of this audit still need the cleanup pass.
- Open: full application and browser checks have not been run on this file.

## 2026-11-15 — Cleanup and wording pass

Public text and metadata only; no radius, thickness, index, Abbe number, gap, semi-diameter, stop or focus state was changed.

**Fields changed.**

- Header comment: added the glass-label and maker-figure statements.
- `subtitle`: added, "CN 120949408 A, Example 2 — construction-based product association".
- `catalog.specs`: "11 GLASS / 9 GROUPS PLUS SOURCE FILTER", "BOTH LITERAL FOCUS ENDPOINTS", "INFERRED CLEAR APERTURES" → "11 ELEMENTS / 9 GROUPS", "2 ED / 1 ANOMALOUS-DISPERSION / 1 UHR ELEMENT", "ALL SPHERICAL", "F/2–22", "MIN. FOCUS 1.5 m". The special-glass counts are read from Laowa's construction diagram.
- Elements 1–11: `label` "L1"… → "Element 1"…; `type` "Lens" → shape names from the signs of R; `focalLengthMm` and `role` added. Element 12: name and label "Source filter" → "Rear filter", with a role.
- `cemented`: C1 on L3 and L4, C2 on L10 and L11; `doublets` C1 (surfaces 5–7) and C2 (19–21) added.
- `groups`: G1 (+) 1–7, G2 (+) 8–13, G3 (FOCUS) 15–16, G4 (+) 17–21, as the patent names them.
- `aperture`: `fStops` [2.06] → [2.06, 2.8, 4, 5.6, 8, 11, 16, 22], `maxFNumber` 22 and `blades` 9 added (Laowa: f/2–22, 9 blades).
- `focus.description`: rewritten in plain words. Both printed states and `closeFocusM` are unchanged.
- `apd: "inferred"` with a note on L2 (Laowa's anomalous-dispersion position, 1.45860 / 90.19) and on L3 and L9 (Laowa's extra-low-dispersion positions, 1.49700 / 81.61). L1 (ultra-high-refraction) is not tagged.

**Glass labels** (all were "Published nd/Vd, unassigned catalogue glass; approximate dispersion").

| Element | New label | Δnd | Δνd |
|---|---|---:|---:|
| L1 | E-FDS1 (HOYA, coordinate equivalent) | −4.0e-7 | 0.00 |
| L2 | FCD10A (HOYA, coordinate equivalent) | −2.8e-6 | 0.00 |
| L3, L9 | FCD1 (HOYA, coordinate equivalent) | −1.6e-7 | 0.00 |
| L7 | TAC8 (HOYA, coordinate equivalent) | 6.0e-8 | 0.00 |
| Rear filter | BSC7 (HOYA, coordinate equivalent) | −1.8e-6 | 0.00 |
| L4, L5, L6, L8, L10, L11 | Unmatched, with the printed nd and νd | — | — |

N-SF66 (Schott), H-FK61 (CDGM) and H-K9L (CDGM) equal E-FDS1, FCD1 and BSC7 at the printed precision. The Hoya rows were chosen because all five matched pairs exist in that one catalogue and the sibling Laowa 180mm files use the same labels, including BSC7 for the same 1.51680 / 64.20 plate. The nearest catalogue rows to the six unmatched pairs differ by more than 0.002 in nd or 1.5 in νd.

**Engine numbers, before and after (identical).** EFL 194.5237291877607 mm; f/2.06; half-field 6.303°; stop radius 18.455422315444228 mm; paraxial back focus 45.2054 mm; near state focused at 4000.01 mm in front of the first surface. `audit:surface`: no validation errors. `audit:aperture`: within 3 % of the stated f-number, no rim limit. `audit:field-coverage`: full coverage (99 % or better).

**Analysis.** Title changed to the display name; glass identifications brought into line with the labels above; the "Verification Summary" heading renamed "Model Scope and Limitations"; wording about how the file was checked removed.

**Open.**

- Open: Laowa's own product name is "Laowa 200mm f/2 AF FF"; the file's `name` and `key` use "AF 200mm f/2" and were left as set.
- Open: rims are inferred. Against Figure 3 the rear group reads about 16.5 mm (model 16), L5 about 28 mm (29), the front lens about 49 mm (51) and the rear filter about 16.5 mm (22). The corner beam is cut by up to 66 % on one side at the rear group; no rim was changed.
- Open: the near state has no `focus.conjugates` entry. The patent's object distance is 4000 mm and the model focuses at 4000.01 mm from the first surface, so a first-surface conjugate could be recorded in a later pass.
- Open: the model stops at the patent's 4 m state; the marketed 1.5 m minimum focus is not modeled.
- Open: Laowa asks for rear filters under 1.5 mm thick (Sony E and Nikon Z versions); the patent's plate is 2 mm and is kept.
- Open: six glasses are unmatched and trace from nd and νd alone.
