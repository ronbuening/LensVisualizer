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
- L2′ keeps only about 0.04 mm of edge at the 15.02 mm rim. This follows from the printed 4.17 mm thickness at full
  aperture.
- L4 is not square (12.27 / 12.68 mm), because a square 12.68 mm rim would overlap L3. Check it against the figure.
- L1 and L5 rims (16 mm) have not been checked against the figure.
- The patent gives no field angle.
- There are no glass names; the patent prints nD and ν only.
