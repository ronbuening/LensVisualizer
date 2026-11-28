# Audit log — KodakAnastigmatUS1620337 (first filed as FrederickAltman1927Patent)

## Source

US 1,620,337 A, *Objective*, Charles W. Frederick and Fred E. Altman, assignors to Eastman Kodak Company. Filed
January 17, 1923 (Serial No. 613,270), granted March 8, 1927. Three pages. Page 1 is the drawing sheet: an axial
section with lenses L1–L4, surfaces R1–R8, thicknesses T1–T4 and air spaces S1–S3, and a table with signed radii.
Page 2 has the specification table ("aperture = F/2; focal length = 100"), which prints radii as magnitudes only.
Page 3 has the claims. The patent contains one numerical example. The USPTO and Google copies carry the same scans.

## Transcription

Every value was read from 300–450 dpi renders of the page images, not from the OCR text layer:

- 8 radii;
- 4 thicknesses and 3 air spaces;
- for each of the 4 lenses, the D index, G′ index and ν.

The file matches the patent exactly. Radius signs: +64.0, −126.0, −77.2, +684.5, +222.2, +52.4, +126.0, −64.0, as
printed on the drawing sheet. They agree with the drawn shapes: L1 and L4 biconvex, L2 biconcave, L3 a meniscus
concave towards L4. The data file does not store the printed G′ indices (crown 1.62448, flint 1.63920); the format
has no G′ field. Neither glass pair resolves to a catalogue glass at the D or d line. D-line indexing follows the
patent's own wording ("D and G′ lines").

## First order

| Quantity | Patent | Model |
|---|---|---|
| Focal length | 100 | 100.079 (+0.08 %) |
| Aperture | F/2 | f/2 (paraxial stop semi-diameter 20.93, entrance-pupil radius 25.02) |
| Field | 7° from the axis | 7° checked (image height 12.29) |
| Back focus | not printed | 74.339 (computed paraxial, D line) |
| R1 to R8 length | not printed | 54.70 |

Element focal lengths in air: L1 and L4 +71.18, L2 −112.25, L3 −112.21. Component focal lengths: front +166.9,
rear +165.4.

The claims' proportions hold:

- smallest radius 52.4, more than half the focal length;
- length 0.547 of the focal length, under 0.55;
- S1 / T1 = 0.125 and S3 / T4 = 0.25, each no more than a quarter.

The 0.08 % focal-length residual is within the table's rounding, so no misprint scan was needed.

## Inferred values

- Stop: placed at the middle of S2 (9.0 + 9.0). The patent prints no diaphragm and the figure shows none.
- Clear semi-diameters: none are printed. All are heuristic, held below the edge-contact heights that follow from
  the printed radii: S1 closes at 23.86 mm and S3 at 22.32 mm.
- Image plane: computed paraxial back focus.
- Focus: infinity only.

## 2026-11-16 — Deployment validation

What was checked: an independent re-read of the patent page images. That covered the drawing-sheet table, the
specification table, the figure (element count and shapes, the edge contact the text describes, no stop drawn) and
the front-page bibliography. Every prescription value matches. The file reproduces the printed focal length to
+0.08 %.

Verdict: valid as a hidden patent reference. (Closed 2026-11-17: the file is now visible as KODAK ANASTIGMAT 100mm
f/2 (US 1,620,337 Design).)

Product-link evidence: Kodak engraved this patent number on two products:

- a Kodak Anastigmat f/1.9 25 mm cine-camera lens (Ingenium 2010.0223.001, "PAT. NOS. 1,620,337 - 1,690,607"; the
  second number is a Kodak focusing-mount patent);
- a Kodascope projection lens of about 1929–1932 (Ingenium 2009.0389.002, "PAT. NO. 1,620,337").

The patent's 7° projection field fits a 2-inch projector lens for 16 mm film (half-diagonal 6.4 mm, about 7.2°) better
than the 25 mm camera lens (about 14°). Neither production prescription is published, so no product is named.

Changes made:

- `source.patentNumber`: "US 1,620,337" → "US 1,620,337 A" (house kind-code form).
- `catalog.focalLengthMm.design`: 100.07863175683997 → 100.08 (rounded).
- Surface 2 `sd`: 22.5 → 22.9, and surface 3 `sd`: 22.5 → 22.8. These are the least raises that let the f/2 axial
  beam through. At 22.5, the aperture audit found R2 and R3 below the on-axis f/2 ray, which needs 22.84 at R2 and
  22.78 at R3.
- `checks.gapSagFrac` added: 0.91 (default 0.9). This is the least value at which the raised R2/R3 pass the cross-gap
  check: at 22.8 the S1 sag intrusion is 1.364 of 1.5. The patent states that L1 and L2 touch at their edges, so the
  air space is meant to close near the rim; the true contact is at 23.86 mm.
- Added a JSDoc header stating the source, scale and inferred values.
- Rewrote the analysis to the house section skeleton.
- Replaced this audit file, which was a copy of the analysis.

First order after the changes (built.mjs): EFL 100.079, f/2.000, stop semi-diameter 20.93, total track 129.04.

Audit results:

- `audit:surface`: OK.
- `audit:aperture`: no rim limit (within 3 % of the stated f-number).
- `audit:image-circle` and `audit:field-coverage`: skipped (no image format; hidden).
- `clearap` at 7° (Y 12.29): no surface blocks the chief ray. Oblique-beam vignetting is 12–13 % on one side at R2 and
  R3, 7 % at R4, and 3–5 % at R1, R6 and R7.
- `clearap` also sizes f/2 by a real marginal ray (stop radius 22.36). On that basis R2–R4 would need 24.30, 24.33
  and 23.52. That is beyond the 23.86 mm edge contact of L1 and L2, so this real-ray criterion cannot be met by any
  rim the printed radii allow. The paraxially sized f/2 iris that the viewer uses is fully clear.

Open:

- Name, subtitle and specs: package wording to reword in the cleanup pass. That covers "HIDDEN QUALIFIED REFERENCE",
  "PATENT REFERENCE; RETAIL IDENTITY UNPROVED", and "reciprocal" in `focus.description`. The name could take the
  batch form "KODAK FREDERICK-ALTMAN 100mm f/2 PATENT REFERENCE". (Closed 2026-11-17: renamed and reworded; see the
  cleanup section below.)
- An optional `catalog.imageCircleMm` of about 24.6 (the patent's 7° field) for field-dependent analyses. Without it,
  the engine's field comes from the rims (34.5° half-field). (Closed 2026-11-17: set to 24.6 in the semi-diameter
  pass.)
- Rims against the figure, for the SD pass. The drawing shows all four lenses with outer semi-diameters of about 25–26
  at the drawn scale, with small chamfers where the lenses meet. The model's R4 and R5 (23) and R6 and R7 (21) are
  smaller than the drawn outer edges. (Closed 2026-11-17: see the semi-diameter pass.)
- G′ indices are not represented. An honest dispersion fit would need period glass data matching both the D and G′
  indices.

## 2026-11-17 — Cleanup and wording pass

The file, key, name (KODAK ANASTIGMAT 100mm f/2 (US 1,620,337 Design)) and `visible: true` were set before this
pass. This pass changed only text and labels; optics, rims, stop and image plane are unchanged.

Data file changes:

- `subtitle`: "1927 PROJECTION EXAMPLE; HIDDEN QUALIFIED REFERENCE" → "US 1,620,337 A, sole example — Kodak Anastigmat
  f/1.9 and Kodascope lenses".
- `specs`: "PATENT REFERENCE; RETAIL IDENTITY UNPROVED", "ESTIMATED STOP AND RIMS" and "INFINITY ONLY" → "ALL
  SPHERICAL", "DESIGN F/2" and "PROJECTION OBJECTIVE". "4 ELEMENTS / 4 GROUPS" is kept. No focal-length line,
  because the design focal length is 100.
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value). `focus.description`: "Infinity-only reciprocal
  projection reference; computed paraxial BFD. Exact retail prescription not established." → "Infinity focus only;
  the patent gives no close-focus data."
- Element `type`: L1 and L4 "Biconvex" → "Biconvex Positive"; L2 "Biconcave" → "Biconcave Negative"; L3 stays
  "Negative Meniscus". Labels L1–L4 are kept because they are the patent's own numerals.
- Element `role` added for each lens: front and rear positive collectors, and the two achromatising flints (each
  touching its crown at the rim, as the patent states).
- Element `glass` added: L1 and L4 "Unmatched (barium crown, nD 1.61088 / V 57.2)"; L2 and L3 "Unmatched (dense
  flint, nD 1.61680 / V 36.4)". Neither label resolves to a catalogue row.
  - Nearest rows at the d line, none exact: P-SK60 (Schott) 1.61035/57.90 and BACD8 (Hoya) 1.61117/55.77 for the
    crown; F4 (Sumita) 1.61659/36.62 and F2 (Schott) 1.62004/36.37 for the flint.
  - The patent's values are D-line, which sit about 0.0002 below d-line values for these glasses. No row is within
    1e-4 / 0.15 at either line.
- Header comment: replaced the scaling wording ("normalised scale … unscaled", since the patent itself prints a focal
  length of 100). Added the Kodak Anastigmat and Kodascope engraving facts, and that neither glass matches a catalogue
  row.
- No `cemented` tags or `doublets`: all four lenses are air-spaced. The patent describes lenses that touch at the rim,
  not cemented pairs.

Analysis changes:

- H1 set to the model name.
- Removed the "patent reference" label and the scaling sentences.
- The name now cites the Kodak Anastigmat f/1.9 25 mm engraving. The Ingenium records (2010.0223.001,
  2009.0389.002) and the 7° fit to a 2-inch Kodascope lens on 16 mm film are kept.
- "Verification Summary" renamed "Model Scope and Limitations", with the check-procedure sentence turned into a
  statement about the model.
- The drawing allowance is described in plain words.
- The glass paragraph now says the glasses are labelled as unmatched.

Engine numbers before and after this pass are identical (built.mjs and probe.mjs output compared byte for byte):
EFL 100.0786, f/2.000, half-field 34.51°, stop semi-diameter 20.93, BFD 74.3391, total track 129.0391.

Audit results:

- `audit:surface`: OK.
- `audit:aperture`: no rim limit.
- `audit:image-circle` and `audit:field-coverage`: skipped (no image format).

Open:

- `catalog.imageCircleMm` of about 24.6 (the patent's 7° field) is still not set. Field-dependent analyses use the
  rim-limited 34.5° half-field. (Closed 2026-11-17: set to 24.6.)
- Rims against the figure (SD pass): the drawing shows outer semi-diameters of about 25–26 for all four lenses. The
  model's R4 and R5 (23) and R6 and R7 (21) are smaller. (Closed 2026-11-17: see the semi-diameter pass.)
- `aperture.fStops` runs f/2–f/16. A projection objective of this kind usually has no iris, and the patent prints only
  F/2, so the stop list is unsourced. (Closed 2026-11-17: F/2 only.)
- No `lensMounts` or `imageFormat`: no production prescription is tied to this example. (Mount closed 2026-11-17:
  `projection-lens`. The format stays unset.)
- G′ dispersion is still unrepresented (see above).

## 2026-11-17 — Semi-diameter pass against the patent figure

Source: `patents/US1620337A.pdf`, page 1, the single axial section of the only example. Measured at the scan's native
resolution (2320 × 3408 px; 300 dpi in the Google copy).

Scale: the drawn vertex span from R1 to R8 is 688 px for the printed 54.7, which gives 12.58 px per mm. Read at that
scale, the drawing reproduces every printed spacing within about 3 %: T1 12.2 (printed 12.0), S1 1.59 (1.5), T2 4.2
(4.1), S2 17.8 (18.0), T3 4.13 (4.1), S3 3.0 (3.0), T4 11.7 (12.0). The figure is therefore used for heights as well as
proportions.

The scan is slightly skewed: the top-side heights of L1 and L2 read about 9 px more than the bottom-side ones. Half the
full height was used for each lens:

| Lens | Top | Bottom | Half-height | In mm |
|---|---|---|---|---|
| L1 | 336.5 | 317 | 326.8 px | 26.0 |
| L2 | 335 | 318.5 | 326.8 px | 26.0 |
| L3 | 327 | 323.5 | 325.3 px | 25.9 |
| L4 | 325.5 | 326.5 | 326.0 px | 25.9 |

All four lenses are drawn square-topped at the same height.

Where the lenses touch:

- L1/L2: the drawing marks the contact at 308 px (top) and 292 px (bottom), a mean of 23.85 mm. That matches the
  23.86 computed from R2, R3 and S1. Above it, L1's rear face R2 continues on its sphere to the top flat, while L2's
  front edge is bevelled back to its top flat 12.2 behind R1.
- L3/L4: the contact reads 287 px on the clean top side (22.8 mm). The computed contact is 22.32, and the bottom side
  is crossed by the R6 leader. Above it, L3's rear edge is bevelled and L4's front face R7 continues to the top.

Changes (old → new, evidence):

| Surface | Old sd | New sd | Evidence |
|---|---|---|---|
| R1 | 26 | 26 (kept) | Figure 26.0. |
| R2 | 22.9 | 26 | L1 drawn square at 26.0, with R2 reaching the top; 12 % mismatch. |
| R3 | 22.8 | 22.8, plus `rimExtensionSd` 26 | Cap kept. The f/2 axial beam needs 22.78, and the cap is 4 % under the 23.85 contact, which is noise. A land to 26 stands for the bevel above the contact. |
| R4 | 23 | 26 | L2 drawn 26.0 at the rear; 12 % mismatch. |
| R5 | 23 | 26 | L3 drawn 25.9 at the front; 12 % mismatch. |
| R6 | 21 | 21, plus `rimExtensionSd` 26 | Cap kept; 6 % under the 22.3 contact, which is noise. A land to 26 stands for the bevel. |
| R7 | 21 | 26 | L4 drawn square at 25.9, with R7 reaching the top; 24 % mismatch. |
| R8 | 26 | 26 (kept) | Figure 25.9. |

How the lands behave: they are vertical where the drawing draws a short bevel. They change no ray, and they clear the
facing surface across S1 and S3. `checks.gapSagFrac` stays 0.91, since the R3 cap is unchanged. No face sits below its
baseline value, so nothing here is a cut.

Clearance (exact meridional trace at f/2 and the patent's 7°, image height 12.29):

- No surface blocks the chief ray.
- Oblique-beam vignetting is 13 % on one side at R3, 4 % at R6 and 3 % at R1. Before this pass it was also 12 % at
  R2 and 5–7 % at R4 and R7.
- The engine's paraxial f/2 axial beam is clear: the aperture audit shows no rim limit.
- On a real-marginal-ray f/2 basis, R3 would need 24.33. That is above the 23.86 contact, so no rim can meet it, as
  recorded earlier.

Light and field:

- Corner illumination at 7° is 95.0 % before and after. The leave-one-out restore of each changed element wins back
  0.0 points, so the raises are for the drawing only.
- Without the new image circle, the 12.2° edge of the default range went from 88.7 % to 89.2 %.
- Engine half-field: 34.51° → 34.64°. The paraxial chief-ray limit stays R8 at 44.0°. EFL 100.079 and f/2.000 are
  unchanged.

Metadata added:

- `catalog.lensMounts` `["projection-lens"]`: the patent describes the lens as "more particularly" for projection, and
  claims 4 and 7 claim "an objective designed for projection purposes".
- `catalog.imageCircleMm` 24.6: the patent's "field of 7 degrees from the axis" at f = 100.08.
- `aperture.fStops` [2] and `maxFNumber` 2: the patent prints only F/2, for a projection objective with no iris. This
  follows the Leica Colorplan projection lens in the corpus.

`imageFormat` stays unset. The f = 100 normalisation does not fit a film format as built: the 16 mm frame suits the
2-inch Kodascope lens, not a 100 mm lens.

Audit results afterwards:

- `audit:surface`: OK.
- `audit:aperture`: no rim limit.
- `audit:image-circle`: 0 undersized.
- `audit:field-coverage`: at least 99 % at the 24.6 circle.

Product name: the engraving on the patent-marked cine lens reads "KODAK ANASTIGMAT F-1.9 25MM" (Ingenium
2010.0223.001). The Kodascope projection lens record (Ingenium 2009.0389.002) gives no product name, and the Science
Museum Group's Model B record calls its lens an "anastigmat projection lens". The current name, KODAK ANASTIGMAT 100mm
f/2 (US 1,620,337 Design), matches the engraved family name. Its 100mm f/2 is the patent's design, not a product
rating.

Open:

- G′ dispersion is not represented.
- The bevels are drawn as vertical lands. A chamfered land is not a feature of the file format.

## 2026-11-17 — Second review on the local site

Compared: the live page on the branch's local site (diagram, every element inspector, the Vignetting tab and the
group-movement overlay) against the page-1 figure of `patents/US1620337A.pdf`, re-measured at the scan's native
resolution (2320 × 3408 px), and against the specification text on page 2.

Figure scale, re-measured: vertex crossings at 879, 1032, 1052, 1104.5, 1329.5, 1379.5, 1418.5 and 1566 px give
687 px for the printed 54.7 R1–R8 span, 12.56 px per mm; every intermediate vertex lands within 0.3 mm of the
prescription. The drawn axis line is tilted about 1.3° (1629 px at x 860, 1646 px at x 1600), so heights are half the
outer top-to-bottom extent of each lens: L1 26.0, L2 26.1, L3 26.0, L4 26.0 mm. This confirms the square tops at 26.

The two bevels, re-measured:

- L2 front: the drawn top corner sits 1.9 mm behind L1's top corner (1.8 mm on the bottom side), and the bevel leaves
  R2 at about 24.3 mm height. The model's land stands at the R3 cap's sag, 10.06 mm from R1, 0.77 mm behind L1's
  corner (9.29). It cannot move back: a smaller R3 cap would cut the f/2 axial beam, which needs 22.78 there.
- L3 rear: the drawn top flat ends 2.9 mm (top) and 2.6 mm (bottom) ahead of L4's front corner, and the bevel meets R7
  at about 23.2 mm. The model's land stands at 44.09 mm, 1.32 mm ahead of L4's corner (45.41), inside the drawn bevel's
  axial span (about 42.7 to 44.9).

Each vertical land therefore stands within the bevel it replaces. L1 and L4 draw a top flat of about 4.0 mm at the
line centres against the model's 3.77, which is within the reading error. No rim changed.

Lands and cuts: no face sits below its baseline, so there are no cuts. Taking out both lands (R3 and R6) changes
nothing: the transmission row stays 100.0, 99.0, 98.5, 97.6, 96.7, 96.0 and 95.0 % from 0 to 7°, the same as the
baseline rims. The worst loss against baseline is 0.0 points. The figure draws a bevel at each place, so both lands
stay.

Changes:

| Field | Before | After | Evidence |
|---|---|---|---|
| L1 `focalLengthMm` | missing ("FL = —" in the inspector) | 71.18 | Paraxial in-air focal length at the D line. |
| L2 `focalLengthMm` | missing | −112.25 | Same. |
| L3 `focalLengthMm` | missing | −112.21 | Same. |
| L4 `focalLengthMm` | missing | 71.18 | Same. |
| `groups` | none | FRONT (surfaces 1–4), REAR (5–8) | Page 2, column 1, lines 30–34: the central space S2 divides "the objective into two components"; claims 2 and 3 claim the same two components. |
| Analysis | "relative illumination at 7° is 95 %" | 95 % of the axial beam's light at 7°, relative illumination about 93 % | The Vignetting tab shows 95.0 % unvignetted and 92.6 % relative illumination at 7.0°. |

The live page after the edits shows FRONT under L1–L2 and REAR under L3–L4, clear of the element numbers. The
inspector shows FL +71.18 / −112.25 / −112.21 / +71.18 mm, and the group-movement overlay reports two groups with no
movement.

Checked and found correct:

- Types agree with the radius signs: L1 and L4 biconvex (+64/−126, +126/−64); L2 biconcave (−77.2/+684.5); L3 a
  negative meniscus concave towards L4 (+222.2/+52.4).
- Roles are true. The patent says that each negative lens contacts its positive neighbour at the edge (page 2, lines
  45–51) and that L4 is "identical both in glass and curvatures with L1" and symmetrically arranged (lines 27–30).
- Labels L1–L4 are the figure's own numerals.
- There are no doublets and no `cemented` tags (all four lenses are air-spaced). There are no aspheres and no `apd`
  tags: the patent names only barium crown and dense flint.
- The inferred stop is drawn in the middle of S2, between L2 and L3.
- Movement: there is no gap table and no zoom block. The focus slider reads "Not modeled", and the description states
  only that the patent gives no close-focus data.
- The Projection chip shows, and with `fStops: [2]` the page offers no aperture slider. The Vignetting tab's field is
  the patent's 7.0° (from the 24.6 image circle): edge 95.0 % unvignetted, 92.6 % relative illumination.
- The engine numbers are unchanged: EFL 100.079, f/2.000, half-field 34.64°, stop semi-diameter 20.93.
- `audit:surface` is OK, `audit:aperture` reports no rim limit, `audit:image-circle` finds none undersized, and
  field coverage is 100 % at 7.0°.
- The real-ray clearance trace at 7° blocks no chief ray. It again flags R3 against a real-marginal-ray f/2 stop of
  22.36, which would need 24.33, above the 23.86 contact. This is unchanged and was recorded on 2026-11-16.

Glass and colour: neither printed pair has a catalogue or vendor row within |Δn| ≤ 1e-4 and |Δν| ≤ 0.15, at the D
line or at d. The nearest rows are K-PSK200(M) (Sumita) 1.61083/58.90 and BACD8 (Hoya) 1.61117/55.77 for the crown,
and F4 (Sumita, Hoya) and PBM4 (Ohara) 1.61659/36.6 and PBM2R (Ohara) 1.62004/36.41 for the flint. Both labels stay
Unmatched. Beyond D and ν, the patent prints only the G′ indices (crown 1.62448, flint 1.63920; drawing-sheet table
and page 2 table). It has one example, so no pair can recur, and it prints no aberration curves to compare colour
against. Neither medium is nD-only: both carry ν, so the lens keeps colour through the Abbe fallback.

Assignee: "Eastman Kodak Company" matches the front page and the corpus spelling.

Open:

- The diagram's off-axis fan is drawn at 20.8° (0.6 of the 34.64° half-field the rims allow), three times the patent's
  7° field. A `projection: { kind: "rectilinear", fullFieldDeg: 14, maxTraceFieldDeg: 7 }` entry gives an engine
  half-field of 7° and a 4.2° fan (checked on a scratch copy). That field is outside this review's edit list.
- G′ dispersion is not represented (unchanged).
- The bevels are drawn as vertical lands (unchanged).

- Field follow-up (2026-11-17): `projection` now declares the patent's 7° half-field (14° full), so the diagram's
  off-axis fan and the analysis tabs use the stated projection field instead of the rims' 34.6° tracing limit.
