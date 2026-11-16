# Audit Log — P. Angénieux Retrofocus Type R61 24mm f/3.5

Patent: FR 1,214,945, sole example, PDF pp. 1–3.
Engine/catalog baseline: `db50c52df466bbcf1b9654411b186a27d280f16e`.

## 2026-11-14 — Single-model representative reconstruction

This audit concerns one newly authored prescription. It does not revise another lens, certify a factory prescription, or authorize general source corrections. The literal patent remains separate from the reconstruction.

### Phase 1 — Glass and reference convention

All eight source index/Abbe pairs were read from the freshly rendered table and retained. L1/L4/L5/L6/L8 use 1.6203/60.20; L2/L3 use 1.6751/32.30; L7 uses 1.6498/33.70. The source says spectrum D line without a chemical/numeric wavelength. The modeled helium-d reference is an explicit convention. `Unmatched` labels keep all eight materials on Abbe estimates; no supplier, catalog identity or partial dispersion was inferred.

### Phase 2 — Retained-information audit and explicit exception

| Quantity | Source of record | Reconstruction | Status |
|---|---:|---:|---|
| R15, native units | −289.16 | +289.16 | Superseded 2026-11-15: the scan prints R15 as plus; no assumption is involved |
| R16, native units | −67.745 | −67.745 | Unchanged |
| Other fifteen radii | Printed table | Same signs and values × 0.24 | Fidelity check passed |
| Fifteen axial intervals | Printed table | Same values × 0.24; e12 split for STO | Fidelity check passed |
| Native EFL | Stated 100 | Computed 100.11723262 | Residual retained |
| Native BFD | Stated 153.3 | Computed 153.42839841 | Residual retained |
| Last image spacing | Not a table row | 36.82281562 mm | Computed paraxial infinity plane |

The unchanged literal prescription gives EFL 253.89824385 and BFD 400.35501950 source units. The positive-R15 variant restores the biconvex last element in both original sections and closely reproduces the source summary. The period Pignons drawing supplies no numerical radius and does not prove the replacement value or exact factory identity.

(Closed 2026-11-15: R15 is printed positive, so this paragraph no longer applies and the data file carries no erratum.) The maintainer specifically approved proceeding on this sign-error assumption on 13 November 2026 after the primary drawing comparison. This overrides the ordinary keep-literal rule only for this separately labeled reconstruction. The source-errata policy normally requires two enumerated kinds of source-internal evidence for a `corrected` entry. A section drawing is not an aberration plot, and the Pignons leaflet is not a family patent publication. No such categories were fabricated. `source.errata` therefore retains an `unresolved` disclosure of the source uncertainty and states the actual applied override. Machine-readable private provenance records printed/applied values, scale and the exact approval reference. The model is not a verified corrected-source transcription.

The original PDF, archived literal radii, independently authored `literal-patent.json` and sign-preserving `literal-patent.csv` retain negative R15/R16. An automated parity check rejoins the STO split and verifies every source radius, interval, medium assignment and index/Abbe pair, allowing only R15's disclosed sign.

### Aperture and native geometry

The iris location is inferred from the sole section, between E6/E7. Its modeled midpoint splits e12 into 1.1256 + 1.1256 mm. The engine derives the f/3.5 radius, 5.37416420 mm. No numeric clear apertures are published. All inferred radii and the final 24.2 mm front cap are listed in the analysis and data.

The initial 24.0 mm front cap missed one of 317 stop-plane targets at each signed 41.5° wide-open field. A bounded launch scan identified the first-cap boundary; enlarging the two inferred L1 caps to 24.2 mm resolves those targets. Previous results remain in the private attempts archive. No R/d/index change, artificial rim cut, `gapSagFrac` override, maximum-rim override or optical engine edit was used.

Native validation and 257-height geometry samples give minimum material thickness 1.2072 mm, minimum shared-gap clearance 0.1224 mm, maximum shared-gap intrusion fraction 0.83827367, and maximum rim angle 64.06919°. Iris clearances over the f/3.5–f/22 stroke remain positive; wide-open clearances are at least 0.825807 mm before and 0.712227 mm after STO. Native diagnostics report zero hidden render trim.

### Phase 3 — Numerical and metadata checks

- Uniform scale: 24/source-stated 100 = 0.24. Actual EFL 24.02813583 mm; BFD 36.82281562 mm; glass track 55.77168 mm; first vertex to derived image 92.59449562 mm. Independent matrix, sequential trace and native paraxial basis agree.
- Native aperture census: f/3.499999997 at the marked f/3.5, with no rim/trace limiter.
- Declared 83° full field: exact edge chief height 21.33907105 mm, 98.5638% of the project's full-frame corner radius. The clear-chief corner diagnostic is 41.86737°; it remains outside the declared 41.5° bound. No field inflation or fake published image circle was introduced.
- 317 uniformly sampled physical-stop targets × seven signed fields × two apertures = 4,438 final reference-index rays. All aim and transmit with no clipped hits, unresolved targets or non-forward segments. Largest stop-target residual is below 1e−9 mm; intersection residuals are near machine precision. This is sampled geometric validation, not proof of continuous-pupil or radiometric behavior.
- Centroid-relative geometric RMS at the fixed paraxial plane: axial 10.649 µm at f/3.5 and 2.819 µm at f/8; 41.5° edge 193.116 µm and 31.081 µm. The large wide-open edge blur is retained as a reconstruction limit, with no invented production-performance threshold.
- Eight spherical singlets; no aspheres or specified plates. Infinity-only sentinel 1e9 m, no variable gaps, identical focus endpoints. Period ALPA 16-inch MFD is separate 0.4064 m marketing metadata. Canonical mount `alpa` and format `135-full-frame` refer to the correlated product family, not a mechanical identity proof.

### Phase 4 — Analysis and qualification scope

The analysis names the primary sources, uncertainty, the sign assumption, scaling, inferred apertures/iris, glass convention, infinity-only state and numerical limits. The title and subtitle call the model a representative R61-lineage reconstruction.

Current-main textual checks found no FR 1,214,945/R61 entry. Scale-invariant ordered R/d/nd comparison scanned 1,122 data files including this addition; 40 other files had sixteen physical surfaces. Neither the literal nor reconstructed signature matched a prior entry. STO splits were merged and the final image spacing excluded.

The available private delivery/hold/source ledgers were read and searched, including Historical SourceQueue v21, Historical Reserve Inventory v7, Current Three Final Delivery v015, Eighth Six Qualified Integration v2, Eighth B Final Qualified v2 and Summilux-R50 hold clarification. No completed R61 model was found. Recent room history treats this Angénieux item as a held sign hypothesis before the scoped approval. These are bounded custody checks, not exhaustive nested-archive proof or a claim that the private search index is current through every November 13 artifact. The parent must reconcile the live next-pack ledger before crediting the entry; no pack count or ledger was changed here.

Scoped source/geometry validation is suitable for a qualified representative handoff under the disclosed assumption. Final full-suite and browser outcomes, private custody receipts and any remaining integration checks are recorded in the accompanying validation report. No commit, push, PR, merge, publication, deployment or pack delivery occurred.

## 2026-11-15 — Deployment validation

An independent checker re-read the three 300-dpi page scans of FR 1,214,945 (front page, table page, figure) without relying on the package's own transcription. Checked on the page image: all 16 radii with their signs, all 15 axial distances, all 8 index and 8 Abbe values, the stated F = 100 and "distance frontale" 153.3, the four stated focal lengths, the figure, and the front-page bibliographic data. Radii, distances and indices were also compared numerically with the data file divided by 0.24: no mismatch.

Verdict: valid with notes. The data file is a faithful 0.24× copy of the printed table and reproduces the patent's stated values. The product link is strong: the Pignons ALPA Reflex supplement (p. 3) lists the Angénieux 24 mm f/3.5 Retrofocus with 8 air-spaced elements and 83° coverage, and its section (drawn reversed) shows four front and four rear singlets, a biconvex last element and the stop between elements 6 and 7, as in this model.

### Correction to the earlier sections: R15 is printed positive

The statements above that the source prints R15 = −289.16, and that +289.16 is an assumption or reconstruction, are wrong. The table uses two sign glyphs. Measured on the 300-dpi bitmap of page 2:

| Glyph | Bar width | Surfaces |
|---|---:|---|
| Plus (short bar, hairline vertical stroke that often drops out) | 24–27 px | R1, R2, R3, R5, R7, R8, R9, R11, R12, R14, R15 |
| Minus (long dash) | 36–40 px | R4, R6, R10, R13, R16 |

R15's bar is 25 px wide with no visible vertical stroke, the same as R14 (24 px), R7 and R8, all of which are positive and were read as positive by the package. R15 is therefore printed +289.16. Supporting evidence: read as a minus, the prescription gives EFL 253.90 and back focus 400.36 against the stated 100 and 153.3, and from that reading flipping R15 is the only single sign change that gives a usable lens (the other fifteen give EFL between −282 and +727); the patent text calls the last element "une lentille convergente"; the patent figure and the ALPA section both draw it biconvex. Nothing in the prescription is assumed or corrected.

### First-order check (patent / model, normalized units)

| Quantity | Patent | Model |
|---|---:|---:|
| Focal length | 100 | 100.117 |
| Back focus | 153.3 | 153.428 |
| Component I | −137.80 | −137.86 |
| Component II | +109.67 | +109.61 |
| Second lens | +937.60 | +937.57 |
| Third lens | +938.33 | +938.30 |

The patent prints no f-number table, field angle, apertures, stop position or close-focus data; it says only that the aperture is of the order of 1:3.5.

### Changes made

- `source.errata`: the single `unresolved` R15 entry removed. The printed sign is plus, so there is no source error to record.
- `subtitle`: clause "assumed positive R15;" removed (false).
- `catalog.specs`: chip "R15 SIGN ASSUMPTION" removed (false).
- Element 8 `role`: "Final converger; biconvex only under the disclosed R15 sign assumption." → "Final converger."
- Header comment: rewritten to state the source, scale, the sign reading and the inferred values; the wording about an authorized assumption and a separate literal transcription is gone.
- `focus.closeFocusM`: 1e9 → 1e15, the house infinity placeholder.
- `catalog.lensMounts`: `["alpa"]` → `["alpa", "exakta"]`. The Exakta Circle lens list (exaktacircle.org/length.html) carries the R61 24 mm f/3.5 for the 35 mm Exakta in 1959 and 1961. That list's "6El" entry conflicts with the ALPA leaflet's eight elements and looks like a list error.
- Float noise rounded in nine surface values (for example 54.016799999999996 → 54.0168, 1.1256000000000002 → 1.1256). No prescription value changed.
- `indexReference` kept at `"d"`. The patent heads the column nd "pour la raie D". The one recognisable glass, 1.6203/60.2, sits near SK16 (nd 1.62041, sodium-D index about 1.6203), which leans towards sodium D, but the two lines differ by about one unit in the last printed digit, which does not exceed print precision.
- Analysis: the section "Explicit R15 reconstruction assumption" replaced by "Reading of the R15 sign"; the L8 heading and text, the opening description, the reference-line sentence, the infinity placeholder value and the "literal and reconstructed" sentence corrected to match.

### Results after the changes

- Built model: EFL 24.0281 mm, f/3.500, back focus 36.8228 mm, first vertex to image 92.5945 mm, stop radius 5.3742 mm.
- Surface audit: OK, no validation errors.
- Aperture audit: within 3 % of the stated f-number; no rim, trace or iris limit.
- Image circle: 0 undersized. Field coverage: 21.34 of 21.65 mm at the declared 41.5° (99 %), corner clear at 41.9°.
- Real-ray clearance at 21.63 mm image height: no axial clipping and no blocked chief ray; the inferred 5.8 mm rear rims vignette the corner bundle by 13 %, 14 % and 25 % at surfaces 14, 15 and 16.

Open:

- (Closed 2026-11-15, cleanup pass.) Name, key, file name and subtitle still say "R61-lineage reconstruction" and "representative"; with the sign question settled this is a plain scaled transcription correlated with the Type R61.
- (Closed 2026-11-15 for the analysis; the 2026-11-14 sections stay as history.) The 2026-11-14 sections above and several analysis passages keep the "reconstruction" wording and package terms (private ledgers, literal-patent files, custody checks).
- (Closed 2026-11-15, cleanup pass.) Glass labels read "Unmatched (… coordinate …)"; specs chips use "MODELED" and "PERIOD PRODUCT" wording.
- `patentNumber` is "FR 1,214,945" without a kind code, matching the sibling R11 file; decide the house form.
- Rear rims (surfaces 14–16) are inferred and not compared with the figure.

## 2026-11-15 — Cleanup and wording pass

Public text and labels only; no radius, thickness, index, Abbe number, stop position or semi-diameter changed. The files now carry the key `angenieux-retrofocus-r61-24mm-f35` and the stem `AngenieuxRetrofocusR6124mmf35`.

### Fields changed

- `subtitle`: "FR 1,214,945 sole example — representative 0.24× model; factory identity unverified" → "FR 1,214,945 sole example — correlated to the Type R61" (the form of the R11 sibling).
- `catalog.specs`: "24.028 mm MODELED EFL", "f/3.5 MODELED APERTURE", "83° PERIOD PRODUCT FIELD", "INFINITY ONLY" → "f/3.5", "83° PUBLISHED FIELD", "ALL SPHERICAL"; "8 ELEMENTS / 8 GROUPS" kept. The 83° figure is the ALPA leaflet's, cited in the analysis.
- `focus.description`: the pipeline keyword sentence → "Infinity focus only; the patent prints one prescription and no focusing movement. The 0.41 m (16 inch) minimum focus is the figure from the period ALPA leaflet." `focus.closeFocusM` stays 1e15 and `catalog.closeFocusM.marketing` stays 0.4064.
- Element `role` text reworded on L1, L2, L3, L5 and L8. Element names L1–L8, labels "Element 1–8" and the eight `type` values were already in house form and agree with the signs of the radii.
- `groups` text: "FRONT NEGATIVE COMPONENT I" / "REAR POSITIVE COMPONENT II" → "COMPONENT I (NEGATIVE)" / "COMPONENT II (POSITIVE)", the patent's own names. No cemented pairs; `doublets` stays empty.
- Header comment: process wording removed, the Type R61 named, the glass sentence brought in line with the labels.

### Glass labels

All eight stay Unmatched, in the house form "Unmatched (patent nd=…, νd=…; supplier unconfirmed)" instead of "Unmatched (FR 1,214,945 coordinate …; supplier unspecified; assumed helium d reference)".

| Printed nd / νd | Elements | Nearest catalog row | Δnd | Δνd | Result |
|---|---|---|---:|---:|---|
| 1.6203 / 60.2 | L1, L4, L5, L6, L8 | SK16 (Schott N-SK16 1.62041 / 60.32) | 0.00011 | 0.12 | Not exact: 1.6204 at the printed precision; stays Unmatched |
| 1.6751 / 32.3 | L2, L3 | SF5 (1.67270 / 32.21) | 0.0024 | 0.09 | Stays Unmatched |
| 1.6498 / 33.7 | L7 | SF2 (1.64769 / 33.85) | 0.0021 | 0.15 | Stays Unmatched |

No `apd` tag: the maker published no special-dispersion element for this lens.

### Analysis

Title line added. The identification section now states the correlation to the Type R61 plainly and cites the Exakta Circle list for the Exakta version. The R15 note is shortened. The section on numerical checks is renamed "Model Scope and Limitations" and keeps only properties of the model; the passages on ray counts, stop-plane sampling, render checks and the spot-size table from the package were removed, as were the pipeline keywords and the references to private source copies. Element headings and glass lines follow the data file.

### Engine numbers before and after (identical)

EFL 24.028135828731198 mm, f/3.5, half-field 41.5°, stop radius 5.374164198807729 mm, back focus 36.8228 mm, first vertex to image 92.5945 mm. Surface audit OK; aperture audit reports no rim limit.

Open:

- `patentNumber` is "FR 1,214,945" without a kind code, matching the R11 sibling.
- (Closed 2026-11-15, semi-diameter pass: compared with the figure; surface 14 raised, 15 and 16 kept.) Rims are inferred throughout. The rear rims (surfaces 14–16, 5.8 mm) vignette the 41.5° bundle by 13 %, 14 % and 25 % and have not been compared with the patent figure.
- `indexReference` is "d"; the patent's wording and the SK16-like crown lean towards sodium D, within one unit of the last printed digit.
- The Exakta Circle list gives six elements for the R61, against eight in the ALPA leaflet and the patent; a second source for the Exakta-mount version would settle it.
- No focusing movement is modelled.

## 2026-11-15 — Semi-diameter pass against the patent figure

Source: FR 1,214,945, page 3 (the only figure), measured on the 300-dpi scan; the Pignons ALPA leaflet section was used only to confirm the element shapes.

### Scale

Vertex crossings on the axis (row 1668) against the prescription: first to last vertex 967 px for 55.77 mm, 17.34 px per lens mm. By span: front component 16.5 px/mm, the long air space 17.2, rear component 18.6; L8 is drawn 30 % thicker than the table. The axial spacings therefore depart from the table by more than 10 % in places, and the figure is used for proportions (relative rim heights, lands, step order), with the whole-track scale for heights. Heights at that scale reproduce the two largest starting values: L1 edge 416.5 px = 24.0 mm (file 24.2) and L5 122.5 px = 7.06 mm (file 7.0).

### Readings and decisions

| Surface | Before | Figure | After | Evidence |
|---|---:|---:|---:|---|
| 1 | 24.2 | 24.0 | 24.2 | Agrees; kept |
| 2 | 24.2 | cap ends 19.6–20.2, land to the edge | 23.1, land to 24.2 | The rear curve leaves the vertical edge stroke 345–352 px from the axis (q = 0.84 of the edge); the sag there, 7.5 mm, gives 19.6 mm from the radius |
| 3–6 | 18.5 | 19.7 | 18.5 | 6 % apart: inside measurement noise; kept |
| 7 | 14.0 | 15.1 | 14.0 | 8 % apart: inside measurement noise; kept |
| 8 | 13.8 | cap ends 11.9–12.1, land to the edge | 13.3, land to 14.0 | The curve meets the flat land 205–208 px from the axis (q = 0.78); the sag there, 5.9 mm, gives 12.1 mm from the radius |
| 9–12 | 7.0 / 7.0 / 6.8 / 6.8 | 7.06 / 7.06 / 7.1 / 7.1 | unchanged | Agree |
| 13 | 6.5 | cap ends about 5.5, chamfer out to the rim | 6.5 | Kept: the corner beam reaches 5.78 mm here, so a smaller cap would leave no margin; the slanted edge to the taller rear rim now draws the chamfer |
| 14 | 5.8 | rear face runs to the full rim, 132–138 px: 7.3 at the rear-component scale, 7.7 against L5 | 7.3 | The figure draws L7's rear face as the tallest rim of the rear component, cupped around L8; the file had it lower than L5 and L6. The lower reading is used |
| 15, 16 | 5.8 | 5.8 at the rear-component scale, 6.2 at the whole-track scale | 5.8 | 0–8 % apart; kept, and with them the corner vignetting |

The caps of surfaces 2 and 8 stop at 23.1 and 13.3 instead of the figure's 20 and 12 because the display's traced half-field is set from first-order chief-ray heights: at 20.2 and 12.0 it fell from 41.33° to 37.65°. 23.1 and 13.3 are the smallest one-decimal values that keep 41.33°. The real corner rays need only 19.30 and 10.90 mm on these faces.

### Results

- Corner illumination, geometric, wide open: 45.5 % at 41.5° before and after; identical at every field (worst loss 0.0 points). Restoring any one of the three changed surfaces wins back 0.0 points.
- Built model before and after: EFL 24.0281 mm, f/3.5, half-field 41.5°, traced half-field 41.33°, stop radius 5.3742 mm.
- Surface audit OK; aperture audit within 3 % of f/3.5 with no rim limit; image circle 0 undersized; field coverage 21.34 of 21.65 mm at the declared 41.5°, corner clear at 41.9°.
- Real-ray clearance at 21.63 mm: no axial clip, no blocked chief ray; surface 14 no longer clips, surfaces 15 and 16 vignette the corner bundle by 14 % and 25 %.
- Stop: the figure's dashed stop line sits 20 px behind the vertex of surface 12 and 17 px ahead of surface 13, the middle of the gap, as modelled. No stop change is suggested.
- Comparison image kept outside the repository.

### Product name and metadata

The ALPA leaflet titles the lens "Automatic ALPA Retrofocus 24 mm f/3.5 (Angénieux, Paris)"; the Exakta Circle list enters it as Angénieux R61, 24 mm, f/3.5–22. The display name "P. ANGÉNIEUX RETROFOCUS TYPE R61 24mm f/3.5" follows the R11 sibling and agrees with both. No metadata changed: the mounts (`alpa`, `exakta`), the format, the 0.41 m close focus and the f/22 minimum aperture each agree with one of these two sources, and no source read gives the blade count.

Open:

- The rear caps of L1 and L4 are still deeper than the figure draws them (23.1 against about 20, 13.3 against about 12), held by the traced-field rule above.
- L2, L3 and L4's edge read 6–8 % larger in the figure than in the file; surface 7 at 14.0 is what sets the 41.33° traced half-field, just short of the declared 41.5°.
- The front cap of L7 (6.5) is larger than the figure's cap end (about 5.5).
- Blade count and other mounts (the R61 was offered for several reflex cameras) need a maker or period source.

## 2026-11-15 — Second review on the local site

An independent look at the page as served locally (1400 × 900 shots of the diagram and of each element's inspector) beside the figure on page 3 of FR 1,214,945 and the Pignons ALPA leaflet section. No field of the data file and no line of the analysis changed.

### Rims, lands and cuts

Read again on the 300-dpi figure, axis to rim, at the whole-track scale of 17.34 px per mm: L1 418 px (24.1 mm, file 24.2), L2 and L3 338 px (19.5, file 18.5), L4 256 px (14.8, file 14.0), L5 123 px (7.1, file 7.0), L6 121 px (7.0, file 6.8), L7 rear 136 px (7.8; 7.3 at the rear-component scale, file 7.3), L8 111 px (6.4; 6.0 at the rear-component scale, file 5.8). Every reading is within 10 % of the stored value, and the drawn step order holds on the page: L1 > L2 = L3 > L4 in front, L7 rear > L5 > L6 > L8 behind. No rim moved.

| Item | Baseline | Now | Cost in light | Verdict |
|---|---:|---:|---:|---|
| Surface 2 cap with land | 24.2 | 23.1, land to 24.2 | 0.0 points at every field | Keep: the figure ends the cap short of the edge and it costs nothing |
| Surface 8 cap with land | 13.8 | 13.3, land to 14.0 | 0.0 points at every field | Keep, same reason |
| Surface 14 raise | 5.8 | 7.3 | 0.0 points | Keep: figure-driven, L7 drawn as the tallest rim of component II |

Worst loss against the baseline rims: 0.0 points (corner 45.5 % at 41.5° in both). On the page the two lands draw as a short step at the outer edge of L1 and L4, where the figure draws a chamfer; L7 shows the slanted front edge running out to its taller rear rim, cupped around L8, as drawn. L1 and L4 show a wider flat edge than the figure (about 6.9 mm against roughly 4 mm) because the printed radii give that edge thickness at the drawn height; the figure is schematic there.

### Labels, brackets and inspector text

- All 16 radii, 15 distances and 8 index and Abbe pairs were read again from the table on page 2 and multiplied by 0.24: no mismatch. Front-page data (P. V. 776.240, filed 9 October 1958, granted 16 November 1959, published 12 April 1960, applicant Pierre Angénieux in person) agree with the analysis; `source.assignees` is empty, as in the four sibling Angénieux files.
- Brackets "COMPONENT I (NEGATIVE)" over surfaces 1–8 and "COMPONENT II (POSITIVE)" over 9–16 follow the patent's I and II and its text (front component negative, rear positive); they sit clear of each other and of the element numbers. No cemented pair, so no doublet bracket. The patent does not number its lenses; L1–L8 is the sequential form.
- Element types agree with the signs of the radii, and each role agrees with the patent's description (two outer diverging menisci and two inner converging lenses in front; converging lens, converging meniscus, biconcave lens, converging lens behind). Stored focal lengths agree with a fresh paraxial trace to 0.01 mm (−103.95, 225.02, 225.19, −36.11, 45.45, 39.08, −17.02, 21.49). The inspector shows type, nd, νd, focal length, the Unmatched label and the role for each element; nothing is blank.
- Stop: drawn between L6 and L7 in the middle of the gap, as the figure's dashed line shows.
- No `apd` tag and no aspheric marker, correctly.

### Movement

Infinity only. No variable gap exists; the focus panel reads "Not modeled", and `focus.description` states only that the patent prints one prescription and that 0.41 m is the leaflet's figure.

### Glass

All eight stay Unmatched. Line test on the nearest Schott types, computed from their dispersion formulas:

| Printed | Nearest | nd | nD | νd | Finding |
|---|---|---:|---:|---:|---|
| 1.6203 / 60.2 | SK16 | 1.62041 | 1.62032 | 60.32 | Equal to the printed index only if it is a sodium-D value; as a d value it is 0.00011 away and prints as 1.6204 |
| 1.6751 / 32.3 | SF5 | 1.67270 | 1.67252 | 32.21 | 0.0024 away on either line |
| 1.6498 / 33.7 | SF2 | 1.64769 | 1.64752 | 33.85 | 0.0021 away on either line |

The two flints match no Schott, Hoya, Ohara, Sumita or Hikari row on any line, which points to French melts (Parra-Mantois or Sovirel) not in the catalog. The patent prints no glass name, further line index or partial dispersion, and has only this one example. No constant-index medium is present, so colour stays on for the whole lens, on Abbe-number estimates.

### Results

Built model unchanged: EFL 24.0281 mm, f/3.5, half-field 41.5°, traced half-field 41.33°, stop radius 5.3742 mm. Surface audit OK; aperture audit within 3 % with no rim limit; image circle 0 undersized; field coverage 21.34 of 21.65 mm at the declared 41.5°. On-axis spherical aberration at f/3.5 runs +0.13 mm at the full pupil and −0.15 mm at 0.7 of it, as the analysis states.

Open:

- The crown 1.6203 / 60.2 becomes an exact SK16 match (Δn 0.0000, Δν 0.1) if `indexReference` is changed to sodium D, which the patent's wording "pour la raie D" supports; the evidence is one glass and one unit in the last printed digit. Left as it is for a decision.
- A Parra-Mantois or Sovirel catalogue of the 1950s would probably name all three glasses.
- L8 reads 6.0–6.4 mm in the figure against 5.8 (3–9 %, inside the reading error); it is the rim that sets the 45 % corner.
- The real marginal ray at the paraxial f/3.5 pupil height reaches 5.63 mm at the stop plane against the 5.37 mm derived stop radius; the aperture audit still reports the f-number within 3 %.
