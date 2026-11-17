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
- Rims vs figure, for the SD pass: the to-scale drawing shows semi-diameters of about 14.35–14.4 mm on all four lenses, against the model's 15 mm. The drawn L1 edge is about 1.3 mm thick, the model's 0.92 mm. A 14.4 mm rim would still clear the 14.29 mm axial beam on r1. `sdSource` stays "heuristic" until then.
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

- Rims vs figure, for the SD pass: the drawing shows about 14.35–14.4 mm on all four lenses against the model's 15 mm, and L1's drawn edge is about 1.3 mm against the model's 0.92 mm.
- `aperture.fStops` runs to f/22 with no source for the series; it is the usual default stop list.
- No product source for `lensMounts`, `imageFormat` or `catalog.closeFocusM.marketing`, so all three are left unset.
