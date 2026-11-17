# Audit log

Duplicate check at authoring: no existing lens file cites US 912,352 or names Celor, Syntor or Zschokke.

Patent title, inventor, dates and the numerical table were checked against the page images. No production lens is claimed.
A first try with 18 mm rims made element edges cross. The common rim was reduced to 15 mm, and no prescription value was changed.

Model checks at authoring: no schema errors and no rendered edge trimmed by more than 0.25 mm. The iris clears the nearest glass by 5.55 mm in front and 4.20 mm behind. Stop radius 12.10 mm, entrance-pupil radius 14.29 mm. At full aperture, 7 of 9 sampled meridional rays pass at 0°, 5° and 10°, and 1 of 9 at 30° and at the viewer's default 31.3° half-field.

## 2026-11-16 — Deployment validation

**What was checked.** An independent re-read of US 912,352 from 300 dpi and 600 dpi renders of the page images, not the OCR text:

- **Table (PDF p. 2):** all 8 signed radii, all 7 axial intervals, and the 4 × (D index, G′ index, C−F) glass rows. No mismatch with the data file. The table prints the d5 label as a second "d6", which is harmless. Google's OCR reads r8 as 84.439, but the page prints 34.439.
- **Figure (PDF p. 1):** checked element count, shapes and diaphragm position. The drawing is to scale: once its 32.0 mm vertex span is set, every axial interval agrees to within about 0.3 mm.
- **Front page:** Walther Zschokke of Steglitz, assignor to the firm of Optische Anstalt C. P. Goerz Aktiengesellschaft of Friedenau; filed July 1, 1908, Serial No. 441,344; granted February 16, 1909.

**Verdict.** Valid with notes. Every printed number is transcribed exactly, and the model reproduces the printed f = 100 and 1:3.5.

**Product link.** No commercial embodiment is documented. AT 39,177 B (Goerz, filed June 30, 1908) is the same invention. The design belongs to the Goerz Celor four-singlet family. A Goerz Porträt-Celor f/3.5 is reported in a 1910 listing, seen only as quoted on a forum, and nothing found ties it to this prescription.

**Changes made (old → new, why):**

- `maker`: `"Goerz"` → `"C. P. Goerz"` (house maker string for Goerz).
- `source.patentNumber`: `"US 912,352"` → `"US 912,352 A"` (house kind-code form).
- `source.assignees`: `["C. P. Goerz"]` → `["Optische Anstalt C. P. Goerz Aktiengesellschaft"]`, as printed and as the corpus spells it.
- `catalog.focalLengthMm.design`: `100.00160777409897` → `100` (rounded to two decimals).
- Element `role` strings: the four identical provenance notes were replaced with optical roles: front positive crown (L1), weaker negative flint of the front pair (L2), symmetric negative flint of the rear pair (L3), rear positive crown (L4).
- One-line header comment → a plain JSDoc header naming the source, the example, scale 1 and the inferred stop, rims and back focus.
- Analysis rewritten to the house section layout.
- No prescription value, stop position, rim or image distance was changed.

**First-order after the changes (`built.mjs`):**

- EFL 100.0016 mm (printed 100, +0.0016 %), f/3.5, stop radius 12.10 mm.
- Paraxial back focus 85.4798 mm, equal to the last interval. The patent prints no back focus.
- Vertex length 32.00 mm; 117.48 mm from the front vertex to the image.
- Element focal lengths +44.55, −68.61, −37.50 and +39.69 mm. Pair focal lengths +109.07 mm (front) and +331.5 mm (rear), ratio 3.04, which meets the patent's "at least twice".

**Audit results:**

- `audit:surface`: OK, no validation errors.
- `audit:aperture --raise`: no surface below the axial ray.
- `audit:image-circle`: skipped, because there is no `imageFormat`.
- `audit:field-coverage`: skipped, because the file is hidden.
- Clearance trace: the axial marginal ray is 14.29 mm on r1 against the 15 mm rim, so nothing cuts the axial beam. The chief ray passes to 31.3°. At full aperture the bundle is heavily vignetted: up to 35 % clipped per surface at 15°, the lower rim lost at 20°, and only a narrow bundle at 25° and beyond. The patent states no field angle.

**Open:**

- Name, subtitle and specs keep package wording: "PATENT REFERENCE", "PATENT-ONLY REFERENCE", "ESTIMATED STOP AND RIMS", "NO PRODUCTION MATCH". "No documented production match" would be more exact. (Closed 2026-11-17: the name was set by the coordinator; subtitle and specs were reworded in the cleanup pass.)
- The key keeps its delivered form. (Closed 2026-11-17: the key and file names were renamed by the coordinator.)
- The branch's `scripts/maker-prefixes.mjs` has no GOERZ prefix. The open AddLens261124 branch adds one ("GOERZ" → C. P. Goerz, `goerz/`), so this file should land with or after that branch. (Closed 2026-11-17: the maker prefix is handled by the coordinator.)
- Rims vs figure, for the SD pass: the to-scale drawing shows semi-diameters of about 14.35–14.4 mm on all four lenses, against the model's 15 mm. The drawn L1 edge is about 1.3 mm thick, the model's 0.92 mm. A 14.4 mm rim would still clear the 14.29 mm axial beam on r1. `sdSource` stays "heuristic" until then. (Closed 2026-11-17 by the semi-diameter pass: the figure reads about 14.2 mm; 15 mm is kept.)
- The drawn diaphragm sits about 5.8 ± 0.3 mm behind r4, against the model's 6.0 mm. That is within drawing precision, so no change.
- The glass class labels in the analysis (dense barium crown, flint, light flint) are inferred from nD and ν only. No factory glass is identified.
- Patent file: `patents/US912352A.pdf`.

## 2026-11-17 — Cleanup and wording pass

**Data file fields changed:**

- `subtitle`: "1908 DESIGN / 1909 GRANT — NO PRODUCTION MATCH" → "US 912,352 A, sole example — Celor-type dialyte objective".
- `catalog.specs`: ["4 ELEMENTS / 4 GROUPS", "PATENT-ONLY REFERENCE", "ESTIMATED STOP AND RIMS", "INFINITY ONLY"] → ["4 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/3.5", "FOUR AIR-SPACED SINGLETS"].
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value, house form).
- `focus.description`: "Infinity-only reference, no sourced finite focus motion." → "Infinity focus only; the patent gives no close-focus data."
- Header comment: dropped the scale-factor sentence, because the patent itself prints f = 100. Every other fact is kept.
- Unchanged: element types and roles, which were already plain shape names and optical roles.
- Unchanged: no cemented surfaces, so `doublets` stays empty.

**Glass labels added.** No catalogue row lies within |Δnd| ≤ 1e-4 and |Δνd| ≤ 0.15 of the printed values, so each element gets an `Unmatched` label. The values below are the label, then the nearest rows found:

- L1 and L4: "Unmatched (nD 1.6141 / V 56.44; no glass name printed)". Nearest is Hoya BACD6, 1.61375 / 56.38 (Δnd −0.0004).
- L2: "Unmatched (nD 1.6051 / V 38.15; no glass name printed)". Nearest are Hoya F15, 1.60565 / 37.90 (Δnd +0.0005, Δνd −0.25), and Schott F5, 1.60342 / 38.03 (Δnd −0.0017).
- L3: "Unmatched (nD 1.5513 / V 45.19; no glass name printed)". Nearest is Sumita LLF7, 1.54869 / 45.43 (Δnd −0.0027).

The labels resolve to no catalogue glass (checked with `trylabel.mjs`), so the elements still trace on the printed nD and derived ν.

**Analysis changes:**

- The H1 now uses the lens name.
- The scale-factor remark was dropped from the Example details row.
- The production-link statement now appears once in the identification section. The Porträt-Celor evidence and its strength appear once in Design Heritage, and the Dogmar is named as a separate design under a different patent.
- AT 39,177 B is stated to print the same example.
- "Patent Conditions and Model Verification" was renamed "Patent Conditions and Model Scope".
- Removed the OCR remark, the transcription remark, "viewer's default" and "this review".
- Added the unmatched-glass sentence with the closest catalogue rows.

**Engine numbers, identical before and after:**

- EFL 100.0016 mm, FOPEN 3.5, half-field 31.278°.
- Stop radius 12.1033 mm, paraxial back focus 85.4798 mm, total track 117.4798 mm.
- Element focal lengths +44.55, −68.61, −37.50 and +39.69 mm.

**Audit results:**

- `audit:surface`: OK.
- `audit:aperture`: no rim limit; within 3 % of the stated f-number.

**Open:**

- Rims vs figure, for the SD pass: the drawing shows about 14.35–14.4 mm on all four lenses against the model's 15 mm, and L1's drawn edge is about 1.3 mm against the model's 0.92 mm. (Closed 2026-11-17: see the semi-diameter pass below.)
- `aperture.fStops` runs to f/22 with no source for the series; it is the usual default stop list.
- No product source for `lensMounts`, `imageFormat` or `catalog.closeFocusM.marketing`, so all three are left unset.

## 2026-11-17 — Semi-diameter pass against the patent figure

**Source.** US 912,352, the single figure on PDF page 1, rendered at 600 dpi. The scan is rotated by 1.18°, so every measurement was taken in a frame aligned with the drawn axis. Ink-stroke centres were used throughout.

**Scale.**
- Axial: the r1-to-r8 vertex span is 964 px for the printed 32.0 mm, giving 30.13 px/mm. Individual intervals agree with the table to within about 0.3 mm (d1 4.90 against 5.2, d6 3.52 against 3.6, d7 5.77 against 5.7).
- Vertical: fitting arcs of the printed radii to r1, r2, r6 and r8 gives 30.3–31.1 px/mm (median 30.3; r7 reads 28.7). The drawing is therefore close to isotropic.
- The diaphragm ticks sit about 5.6–5.8 mm behind r4 (5.75 mm at the axial scale, 5.6 mm as a fraction of the drawn d4). The model's stop at 6.0 mm is unchanged.

**Figure reading.** All four lenses are drawn square-cut at one height, with half-heights of 428–430 px in the axis frame. That is 14.1–14.3 mm, about 14.2 mm, against the model's common 15 mm (ratio 0.95). Measurement uncertainty is about ±0.2 mm.

**Decision: no change, all eight rims stay at 15 mm.**
- The 5 % difference is inside the measurement-noise band for a change.
- The drawn height sits at, or just under, the f/3.5 axial marginal ray on r1 (14.29 mm). The drawing was evidently made just large enough for the axial beam.
- Cutting to the figure costs corner light beyond the 3-point allowance. A square 14.3 mm on every surface takes the engine vignetting curve at 12.2° from 92.7 % to 84.8 % (−7.9 points; 10.2° from 95.8 % to 89.3 %). Restoring L1 wins back 4.8 points and restoring L4 wins back 3.2 points.
- The smallest common value within the allowance is 14.8 mm (−2.2 points at 12.2°; 14.7 mm costs −3.0). That is a 1 % change, not worth repainting.

The header comment and the analysis now state the drawn height and the resulting edge thicknesses:

| Edge thickness | At the drawn 14.2 mm | At the model's 15 mm |
|---|---:|---:|
| L1 | about 1.37 mm | 0.91 mm |
| L4 | about 1.34 mm | 0.81 mm |

**Clearance (unchanged rims):**
- No `CLIPS-AXIAL`. The axial marginal ray is 14.29 mm on r1 and 14.11 on r2, against 15.
- `audit:surface` OK; `audit:aperture` reports no rim limit.
- `audit:image-circle` is skipped (no `imageFormat`); `audit:field-coverage` is skipped (the file is hidden).
- Engine half-field 31.28° and f/3.5, the same before and after.
- The chief ray passes unblocked to about 31.8°. At 32° it reaches 15.1 and 15.4 mm on r7 and r8, so it is blocked there.
- The patent states no field angle.

**Metadata.** Unchanged. The patent's f = 100 is a normalisation with no documented product, so no mount, format or image circle applies. The f/22 stop list stays as delivered.

**Product name.** No source names a product for this example. The closest candidate is the Goerz Porträt-Celor f/3.5, known only from a forum quotation of a 1910 handbook. The name "C. P. GOERZ 100mm f/3.5 (US 912,352 Design)" correctly makes no product claim.

**Overlay.** The model outline at the figure's scale over the rotated figure is kept outside the repository, in the session scratch folder as `sd/zschokke/overlay.png`. It shows the model rims about 0.8 mm above the drawn flats, with matching element shapes and spacing.

## 2026-11-17 — Second review on the local site

**What was compared.** The live page on the branch's local site (1400×900, before and after the edits below) and the element inspector for all four elements, against the single figure of US 912,352 (PDF p. 1, re-rendered at 600 dpi from the 300 dpi native scan and levelled by 1.24° on the drawn axis line) and the table (PDF p. 2, re-read at 400 dpi). The rims were re-measured from scratch, not copied from the semi-diameter pass.

**Figure scale.**
- Axial: the r1-to-r8 vertex strokes are 964.5 px apart for the printed 32.0 mm, so 30.14 px/mm. The drawn intervals read 4.92, 1.48, 2.22, 12.33, 1.72, 3.54 and 5.80 mm against the printed 5.2, 1.6, 2.1, 12.0, 1.8, 3.6 and 5.7 mm (largest difference 0.33 mm).
- Vertical: arcs of the printed radii fitted to the strongly curved faces give 30.4 (r1), 30.4 (r2), 31.0 (r5), 30.6 (r6) and 31.0 px/mm (r8). The weak faces scatter more (r3 32.2, r7 28.4; r4 too flat to fit). The drawing is isotropic to within about 3 %.

**Rims.** All four lenses are drawn square-cut at one height: the flat-top stroke centres sit 426.8 px above and 430.8 px below the drawn axis line on every lens, a half-height of 428.8 px. That is 14.2 mm on the axial scale and 13.8–14.1 mm on the arc scale, against the model's common 15 mm (ratio 0.92–0.95). The earlier reading of about 14.2 mm is confirmed.

**Edge thicknesses.** Measured between stroke centres at the drawn flats, against the model at its 15 mm rims and at a 14.2 mm rim:

| Element | Drawn | Model at 15 mm | Model at 14.2 mm |
|---|---:|---:|---:|
| L1 | 1.13 mm | 0.91 mm | 1.37 mm |
| L2 | 4.4 mm | 4.84 mm | 4.55 mm |
| L3 | 6.4–6.6 mm | 7.39 mm | 6.79 mm |
| L4 | 1.40–1.51 mm | 0.81 mm | 1.33 mm |

The drawing's own centre thicknesses are off by the same amounts (d1 drawn 0.28 mm thin, d7 0.10 mm thick), so the drawn edges agree with the model at the drawn height. The thinner L1 and L4 edges on the live page come only from the 15 mm rims.

**Lands and cuts.** No face sits below its baseline rim and there is no land, so the file loses nothing (worst loss 0.0 points on the app's full-pupil lattice, which reaches 12.2° here). Trial cuts, same lattice:
- A square 14.2 mm on all eight faces costs 9.0 points at 12.2° (92.7 % → 83.6 %). Restoring L1 wins back 5.3 points and L4 3.7 points; L2 and L3 win back nothing.
- A common 14.7 mm costs 3.0 points and 14.8 mm costs 2.2 points. Either is a 1–2 % change, inside the reading error.
- Cutting only L2 and L3 to the drawing costs nothing, but it would make L1 and L4 stand 0.8 mm taller than their neighbours, where the figure draws all four level.

**Verdict on rims: no change.** The figure differs by 5–8 %, inside the noise band, and the step order (all four level) already matches. The light rule forbids the full cut.

**Diaphragm.** The drawn diaphragm bars end 402 px above and 378 px below the axis line, an opening of about 12.9 mm radius (12.8 mm on the arc scale), 5.7 mm behind r4. The engine stop is 12.10 mm at 6.0 mm. The bars are schematic and the stop is outside this review's edits; no change.

**Changes made:**

| Field | Before | After | Evidence |
|---|---|---|---|
| Element `focalLengthMm` | missing; the inspector showed "FL = —" | L1 +44.55, L2 −68.61, L3 −37.5, L4 +39.69 mm | Thick-lens focal lengths in air from the engine's element probe; the inspector now shows them |
| `groups` | empty | "FRONT PAIR" (surfaces 1–4) and "REAR PAIR" (5–8) | PDF p. 2, lines 36–39: L1 and L2 form one half, L3 and L4 the other; the claim is for "two uncorrected halves", and the text calls them "two pairs of lenses". The labels sit under the element numbers on the live page without collisions |

**Checked and found correct.**
- Prescription: all 8 signed radii, 7 intervals, 4 D indices, 4 C−F values and 4 G′ indices match the table. Each derived νD equals (nD − 1)/(nF − nC).
- Element names L1–L4 are the figure's own designations; the diagram shows the default numbers 1–4. Every `type` agrees with the radius signs. The roles are true: L2 (−68.61 mm) is weaker than L1 (+44.55 mm), and L3 is equi-concave. There are no cemented surfaces or `doublets`, no aspheric faces and no `apd` tags; the patent names no special glass. The stop is drawn between L2 and L3.
- Movement: infinity only. There is no variable gap and no zoom block. The focus slider reads "Not modeled", and the movement dialog reports no modelled focus or zoom group movement. `focus.description` states only that the patent gives no close-focus data.
- Engine values are the same before and after: EFL 100.0016 mm, f/3.5, half-field 31.278°, stop radius 12.103 mm. The surface validator is OK. The aperture audit finds no rim limit and stays within 3 % of the stated f-number. The image-circle audit is skipped (no `imageFormat`), and so is field coverage (hidden lens).
- Off-axis clearance, unchanged: at 15°, up to 34 % of the bundle is clipped per side (r2). The chief ray is blocked on r7 and r8 at 32°, beyond the 31.28° engine half-field. The patent states no field angle.
- Assignee: "Optische Anstalt C. P. Goerz Aktiengesellschaft" is as printed on PDF p. 2 and is the only Goerz assignee spelling in the corpus.

**Glass and colour.** No glass name is printed, and no catalogue or vendor row matches within the exact window at the D line. The vendor-file candidates (matched at d, so candidates only) are:
- L1 and L4: Hoya BACD6 and Ohara BSM6, 1.61375 / 56.38 (Δn −0.0004).
- L2: Hoya F15, 1.60565 / 37.90; the Schott F5 family, 1.60342 / 38.0.
- L3: Hoya FEL7, 1.54883 / 45.44; Sumita LLF7, 1.54869 / 45.40.

The patent prints G′ (434 nm) indices as well, and a normal-dispersion estimate from nD and νD reproduces each one to within about 0.0002. The patent has only this one example, so no glass recurs across examples; L1 and L4 share one glass. Every element carries nD and νD, so the colour model stays on through the Abbe fallback, and no constant medium is present. The patent prints no aberration curves, so there is no colour comparison. No vendor row is proposed.

**Open:**
- The inspector prints νD with 15 digits (56.443014705882355, 38.15258511979823, 45.18852459016392), because `vd` stores the unrounded quotient. Two decimals (56.44, 38.15, 45.19) would read cleanly and change the colour model by less than 0.005 in ν. `vd` is outside this review's edits.
- `aperture.fStops` lists f/22, but the slider and the stop row end at f/16 (the default largest f-number).
