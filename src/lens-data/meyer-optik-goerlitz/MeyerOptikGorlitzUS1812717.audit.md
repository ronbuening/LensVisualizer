# Audit log — Rudolph US 1,812,717 sole example

## Source

US 1,812,717 A, Paul Rudolph, "Lens System": filed October 14, 1926, German priority August 18, 1926, granted June 30,
1931; no assignee printed. The patent's only numerical example is printed three times on the scan: as a table on
specification page 1 (PDF page 2), as a glass table on page 2 (PDF page 3), and with the cross-section on the drawing
sheet (PDF page 1). Focal length 100, relative opening 1:3.2, diameter 31.3. Original scan:
https://patentimages.storage.googleapis.com/pdfs/US1812717.pdf

## Transcription (as delivered)

- The signed radii, thicknesses, air spaces, stop position and nD / ν values are copied as printed. Nothing is scaled,
  repaired or substituted.
- The printed zero air space l1 between r2 and r3 is kept. L1 touches L2′ on the axis and the air opens away from it.
  This is not a cemented joint; the only cemented surface is the flat r4.
- The stop is the printed diaphragm B: 5.41 mm behind r5 and 2.32 mm in front of r6.
- The back focus is not printed. The last gap is the computed paraxial back focus, 80.548 mm.

## First-order results (as delivered)

- EFL 100.11 mm against the printed 100 (+0.11 %).
- Computed entrance-pupil diameter 31.28 mm against the printed diameter 31.3.
- The author's independent paraxial and exact traces agreed with the engine.

## Clear apertures (as delivered)

The rims were estimates: 16 / 16 / 14 / 14 / 14 / 11 / 11 / 11.2 / 11.2 / 16 / 16 mm for r1–r11. The author recorded
that rays beyond about 90 % of the f/3.2 pupil were clipped (at r3 and r9) and that the field beyond the axis was only
partly transmitted. Those rims are replaced below.

## 2026-11-16 — Deployment validation

**Checked against the page images (300 dpi):**

- All 11 signed radii and all 11 axial spacings (d1, l1, d2′, d2, b1, b2, d3, l2, d4, l3, d5).
- nD and ν for the three glass pairs (L1 = L3, L2′ = L5, L2 = L4).
- The printed stop B, the single cemented surface r4, and the printed diameter.

No numeric mismatch was found.

**First order:** the printed table reproduces f = 100 to 0.11 %. The front member is +146.46 mm and the rear member
+163.73 mm, both collective as the claim requires. The drawing sheet's "Equivalent focus of L3: +111.4" does not match
the printed radii, which give +131.88 mm. Only r6 = −97.3 would give 111.4, and that makes the system 92.3 mm, so the
annotation is recorded as a drawing-sheet inconsistency.

**Verdict:** valid with notes. The transcription is exact.

**Product link:** a related family member, not a confirmed production lens.

- DE 456,912 (Rudolph, filed August 19, 1926) carries the same claim and opening radii.
- oldlens.com cites DE 456,912 as the patent of the Hugo Meyer Makro-Plasmat (f/2.7, six elements in five groups).
- This example is f/3.2, and no production prescription was found.

**Changes:**

- `maker`: null → "Meyer Optik Görlitz", in the folder `meyer-optik-goerlitz/`. No assignee is printed; Rudolph worked
  for Hugo Meyer, and the catalog files his other Plasmat-family patents there.
- `source.patentNumber`: "US 1,812,717" → "US 1,812,717 A" (house form).
- L3 `type`: "Negative Meniscus" → "Positive Meniscus". L4 `type`: "Positive Meniscus" → "Negative Meniscus". The claim
  and drawing make L3 the collective lens and L4 the dispersive one; computed f = +131.88 and −51.21 mm.
- L2′ `name` and `label`: "L2 prime" → "L2′".
- L2′ and L2: added `cemented: "D1"` and the `doublets` entry D1 (r3–r5) for the printed cemented pair, which was
  missing.
- `catalog.focalLengthMm.design`: 100.11059986650173 → 100.11.
- Spec "PATENT ONLY; NO RETAIL MATCH" → "PATENT ONLY; NO CONFIRMED RETAIL MATCH". The Makro-Plasmat family link makes
  "no match" too strong.
- Rims r3 14 → 15.02 and r4 14 → 15.02 (square L2′ rim); r6 11 → 12.29 and r7 11 → 12.29 (square L3 rim); r8 11.2 →
  12.27; r9 11.2 → 12.68. These are the least values that pass the f/3.2 axial beam. Before, the beam was clipped 5–10 %
  per side and traced at f/3.59.
- Rim r5 14 → 13.09. At 14 mm the rear edge of L2 sat 0.97 mm behind the printed stop plane; 13.09 mm is where r5
  meets that plane.
- `checks.gapSagFrac`: added at 0.96. L3 and L4 come within about 0.05 mm of each other at the rim, and the drawing
  shows them meeting. 0.95 was not enough for the least rims.
- A JSDoc header was added. The analysis was rewritten to the section skeleton.

**After the changes:**

- `built.mjs`: EFL 100.1106 mm, f/3.2, iris semi-diameter 12.42 mm, BFD 80.548 mm, total track 117.33 mm.
- Half-field 32.04°, set by the rims, not the patent.
- `audit:surface`: OK.
- `audit:aperture`: within 3 %, no rim limit, and `--raise` lists nothing.
- `audit:image-circle` and `audit:field-coverage`: skipped (hidden file, no image format).
- `clearap` at f/3.2 on axis: no clipping.

**Open (cleanup and SD passes):**

- Subtitle "1931 GRANT — HIDDEN QUALIFIED REFERENCE", the spec "ESTIMATED TAPERED RIMS", the name and the key.
  (Closed 2026-11-17: the coordinator renamed the file and set the name and key; the cleanup pass below rewrote the
  subtitle and specs.)
- L2′ keeps only about 0.04 mm of edge at the 15.02 mm rim. This follows from the printed 4.17 mm thickness at full
  aperture.
- L4 is not square (12.27 / 12.68 mm), because a square 12.68 mm rim would overlap L3. Check it against the figure.
  (Closed 2026-11-17 in the semi-diameter pass: kept, see below.)
- L1 and L5 rims (16 mm) have not been checked against the figure. (Closed 2026-11-17: checked, kept.)
- The patent gives no field angle.
- There are no glass names; the patent prints nD and ν only. (Closed 2026-11-17: catalogue equivalents added where
  exact; see below.)

## 2026-11-17 — Cleanup and wording pass

**Fields changed in the data file:**

- `subtitle`: "1931 GRANT — HIDDEN QUALIFIED REFERENCE" → "US 1,812,717 A, sole example — Rudolph Plasmat-lineage
  design".
- `specs`: ["6 ELEMENTS / 5 GROUPS", "PATENT ONLY; NO CONFIRMED RETAIL MATCH", "ESTIMATED TAPERED RIMS", "INFINITY
  ONLY"] → ["6 ELEMENTS / 5 GROUPS", "DESIGN F/3.2", "ALL SPHERICAL"].
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value). `focus.description`: "Infinity-only patent reference;
  computed paraxial image plane. No exact production match." → "Infinity focus only; the patent gives no close-focus
  data."
- Element `type`: L2′ "Plano-Convex" → "Plano-Convex Positive"; L2 "Plano-Concave" → "Plano-Concave Negative".
- Element `role`: added a short optical role to all six elements.
- Labels: kept as the patent's own designations (L1, L2′, L2, L3, L4, L5).
- Cemented group id: "D1" → "C1" on L2′ and L2 and in the `doublets` entry, so it does not read as a gap label.
- Header comment: added the glass paragraph and stated the DE 456,912 family evidence plainly.

**Glass relabels.** These are exact at the D line, the line the patent prints; values computed from the catalogue
Sellmeier data:

- L2′ and L5: none → "N-BALF4 (Schott)". nD 1.57946 against the printed 1.5795 (Δ −0.00004); νD 53.86 against 53.8
  (Δ +0.06).
- L2 and L4: none → "QF3 (CDGM)". nD 1.57490 against the printed 1.5749 (Δ 0.00000); νD 41.29 against 41.3
  (Δ −0.01). Ohara S-TIL27 and Hikari J-LF7 are close in index but miss on ν (41.50, Δ +0.20), so they were not used.
- L1 and L3: none → "Unmatched (nD 1.5331 / V 58.0)". No catalogue row lies within 0.00015 in nD and 0.3 in ν.

The printed nd / νd values are unchanged.

**Analysis:**

- The H1 now uses the model name.
- The scaling sentence was removed, because the patent itself prints f = 100.
- The product evidence is stated once, as Plasmat lineage at family level. DE 456,912 prints this prescription as its
  Example 2 (radii, spacings and glass checked against Google's text of the German patent). oldlens.com cites
  DE 456,912 for the Makro-Plasmat, which was sold at f/2.7 against this example's f/3.2.
- The glass table now shows the catalogue equivalents.
- The gap-sag wording was made plain.
- The heritage paragraph no longer repeats the lineage.

**Engine numbers, identical before and after:** EFL 100.1106 mm, f/3.2, half-field 32.04°, stop semi-diameter
12.4216 mm, BFD 80.5476 mm, total track 117.3276 mm. `audit:surface` is OK. `audit:aperture` is within 3 % with no rim
limit.

**Open (SD pass):**

- L4 rims are not square (12.27 / 12.68 mm). Check them against the figure, which draws a flat top edge. (Closed
  2026-11-17: kept; the front face cannot reach the drawn square rim, see below.)
- L1 and L5 rims (16 mm) have not been checked against the figure. (Closed 2026-11-17: checked, kept.)
- L2′ keeps about 0.04 mm of edge at its 15.02 mm rim.
- The patent gives no field angle or image size.

## 2026-11-17 — Semi-diameter pass against the patent figure

**Source and scale.** The cross-section is on the drawing sheet (PDF page 1), scanned at a native 300 dpi. It is the
patent's only example.

- The axis is slightly skewed: the row is 2043 at x 825 and 2037 at x 1350. Rim heights were therefore read as half
  the top-to-bottom span of each element.
- Axial scale from the vertex crossings (rows 52 px above and below the axis, sag-corrected): r1–r11 gives 12.77
  px/mm, r1–r9 13.06 and r5–r10 13.05, so about 12.95 px/mm.
- Single element thicknesses are drawn 10–20 % off (L1 −15 %, L5 −21 %, L2′ +9 %), so the sheet is a hand drawing and
  serves for proportions.
- The diaphragm B sits at x 1065. That puts b1 : b2 at 0.64 : 0.36 against the printed 0.70 : 0.30, about 0.45 mm
  forward.

**Drawn half-heights (px), with the model's ratio to L2′ in brackets:**

| Element | Drawn half-height | Ratio to L2′ |
|---|---:|---|
| L1 (pointed edge) | 181 | 1.07 (model 1.07) |
| L2′/L2 (flat top) | 170 | 1.00 |
| r5 rim before the chamfer | 144 | 0.85 (model 0.87) |
| L3 | 135 | 0.79 (model 0.82) |
| L4 (square-cut, flat top) | 153 | 0.90 (model 0.82 / 0.84) |
| L5 (flat top) | 168 | 0.99 (model 1.07) |

At the axial scale the sheet draws every element about 14 % smaller than the model. That is below the f/3.2 axial
beam everywhere: L1 needs 15.64 mm and the sheet gives 14.0; L2′ needs 15.01 and the sheet gives 13.1. The drawn
diaphragm opening is 118 px (9.1 mm) against the 12.42 mm iris. So the sheet is not drawn at full aperture, and the
ray floors set the absolute values.

**Decision: no rim changed.**

- L1, L2′, r5 and L3 agree in proportion within 3 %.
- L5 is 7.5 % larger than its drawn proportion. That is inside the noise band. A cut to the proportional 14.8 mm would
  also cost 4.2 points of corner light at 12.2° (83.0 % to 78.8 %), more than the 3-point limit.
- L4: the sheet draws it square-cut, taller than L3, at a proportional 13.4–13.5 mm. Its rear face (12.68) is at the
  axial-ray floor (12.675). Its front face cannot follow:
  - At 12.68 its sag meets L3's rear face across the 1.08 mm gap (combined sag 1.12 mm). That is refused at any
    gap-sag factor up to the 0.98 cap.
  - The highest front rim the cap admits is about 12.38 mm, a 0.9 % change, which is noise.
  - With the printed radii, a square 13.4 mm L4 would wrap around L3's edge, so the drawing is not to scale there.
- `checks.gapSagFrac` stays 0.96.

**Results (unchanged, before = after):**

- Engine: EFL 100.1106 mm, f/3.2, half-field 32.04°. The chief ray is first blocked at r11 at 33.9°.
- `audit:surface`: OK.
- `audit:aperture`: within 3 %, no rim limit.
- `audit:image-circle` and `audit:field-coverage`: skipped (no image format).
- Corner illumination: 83.0 % at 12.2°, the same as the baseline.
- The overlay of the sheet and the model at matched axial scale is kept in the session scratch.

**Metadata:** no mount, format, image circle or marketing values were added. The patent states no format or field, and
the f = 100, f/3.2 example matches no documented product as built. The nearest product name in the sources is the Hugo
Meyer Makro-Plasmat, which oldlens.com ties to DE 456,912; it was sold at f/2.7 in 50 mm and 105 mm. The current name
carries no product word, which fits family-level evidence.

**Open:**

- L2′ keeps about 0.04 mm of edge at its 15.02 mm rim.
- L4's front and rear rims stay stepped.
- The f-stop list beyond f/3.2 is not from a source.

## 2026-11-17 — Glass coverage pass

- L1 and L3 (printed nD 1.5331 / ν 58.0) now carry `ZNC1 (Hoya catalog equivalent; zinc crown)`. Hoya's discontinued
  ZNC1 row, added to the catalog in this pass from the vendor's Zemax file, gives nD 1.53312 / ν 58.05 at the sodium D
  line (ΔnD −0.00003, Δν +0.05), inside the exact-match limits. It is the Hoya counterpart of Schott's ZK1 zinc crown;
  the label names a modern catalog equivalent, not the 1926 melt.
