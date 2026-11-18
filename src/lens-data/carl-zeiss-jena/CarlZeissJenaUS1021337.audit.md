# Audit log — CARL ZEISS JENA 100mm f/12.5 (US 1,021,337 Design)

## Author's checks — November 17, 2026

Drawing and table of the patent PDF inspected and transcribed: pass. Independent paraxial and spherical ray calculation: pass; the near-axis back focus agrees within 1e-5 mm. Glass thickness is positive at 1001 radial samples in each of the four lenses; the minimum rim thickness is 0.309 mm, in lens II. The repository geometry validation passes at default settings with no errors and no overrides. Nineteen axial rays across ±90 % of the entrance pupil pass, and the near-axis image intercept agrees; an 81-point pupil grid passes 81 of 81 rays on axis and 76 of 81 at 2.5° and 5°.

A duplicate search for patent numbers 1,035,408, 1,021,337 and 1,053,128 across the lens-data folder and the delivered packages found nothing. The patent is distinct from the earlier US 532,398 design and is not offered as a retail product.

The file was delivered with `visible: false` (closed: it is now visible).

## 2026-11-17 — Deployment validation

**Checked.** An independent re-read of both page images of US 1,021,337 at 300 and 400 dpi: the five radii and their signs, four thicknesses, the diaphragm distance b = 2.34, the four D-line indices, the nG′ column, the stated aperture 1:12.5 and focal length 100, Fig. 1 (lens shapes, cemented surfaces, front diaphragm) and the front-page names and dates. All 14 prescription values in the file match the print. The patent has one numerical example.

**Verdict.** Valid, with the fixes below. The patent calls the design an improvement of the Series VII Protar lens 1:12.5 of US 532,398, and the layout (four cemented lenses, front diaphragm, f/12.5) matches that product; no source shows that this recomputed table was manufactured, so the model stays a patent example in that family.

**Changes.**

- `maker`: `null` → `"Carl Zeiss Jena"` (the patent is assigned to the firm of Carl Zeiss).
- `source`: absent → `patentNumber` "US 1,021,337 A", `example` Sole example, `patentYear` 1912, `authors` ["Paul Rudolph"], `assignees` ["Carl-Zeiss-Stiftung"], `sdSource` "heuristic" (the rims are estimates).
- `catalog.focalLengthMm.design`: 100 → 99 (the printed table computes to 99.00; the patent's 100 is nominal).
- Last gap: 109.17471241064689 → 109.1747 (rounding only; still the computed paraxial back focus).
- Elements: added `cemented: "Q1"` to all four, a `doublets` entry spanning surfaces 1–5, element focal lengths (−18.9, +12.49, +32.48, −21.53) and short optical roles.
- Data file reformatted from a single-line object to the house layout; header rewritten to state source, scale and inferred values.
- Analysis rewritten to the standard sections. Audit wording cleaned.
- No radius, thickness, index, stop distance or semi-diameter was changed.

**First order after the changes.** EFL 98.997, f/12.5 (stop semi-diameter 3.960), back focus 109.1747, diaphragm to image 115.85. The 1.0 % shortfall against the stated 100 is table rounding: ±0.05 in r1 moves the focal length by 1.5 and in r5 by 1.9, and several different single-digit changes reach 100, so no misprint is indicated. Spherical aberration on axis: −1.31 at the f/12.5 margin, −1.52 at 0.85 of the aperture.

**Printed nG′ of lens II.** 1.6308 is probably a misprint: with the printed column the G′ back focus is 119.05 against 109.17 at D, contrary to the patent's statement of chromatic correction, while a value near 1.637 brings the two together. The model uses nD only, so no erratum is recorded in the data file; the point is described in the analysis.

**Audits.** `audit:surface`: no validation errors. `audit:aperture`: within 3 % of the stated f-number, no rim, trace or iris limit. Axial marginal ray 3.96 to 4.41 against rims of 4.5. `audit:image-circle` and `audit:field-coverage` do not run on this file (no image format; hidden).

**Open:**

- Name, key (`-d-line` suffix), subtitle, specs and element labels ("Patent I") keep the delivered wording for the cleanup pass; the name still says 100mm. (Closed by the cleanup pass below.)
- Field and rims: the 5° trace field and the uniform 4.5 rims are placeholders. The patent states no field, the Series VII lens is reported at about 80–85°, Fig. 1 is not to scale, and lens II reaches zero edge thickness at a semi-diameter of about 5.1. Off-axis clearance has not been checked.
- Abbe numbers: the nG′ − nD differences suggest roughly 66, 56 (with a corrected lens II value), 53 and 38.5 for lenses I–IV; no modern catalogue glass matched, and a period Schott list has not been consulted. The model stays monochromatic until one is.
- `closeFocusM: 1e15` awaits the house infinity form. (Closed: kept as the infinity-only placeholder.)

## 2026-11-17 — Cleanup and wording pass

Optics, stop and rims were not touched.

**Fields changed.**

- `subtitle`: "1912 ZEISS QUADRUPLE SINGLE OBJECTIVE; NO VERIFIED PRODUCTION MATCH" → "US 1,021,337 A, sole example — development of the Series VII Protar lens".
- `specs`: "4 ELEMENTS / 1 GROUP", "D-LINE ONLY", "PATENT REFERENCE" → "4 ELEMENTS / 1 GROUP", "DESIGN F/12.5", "ALL SPHERICAL", "CEMENTED QUADRUPLET".
- `focus.description`: "Infinity-only patent reconstruction." → "Infinity focus only; the patent gives no close-focus data." `closeFocusM` stays 1e15.
- Element labels "Patent I–IV" → "Element 1–4"; types "Biconcave" → "Biconcave Negative", "Biconvex" → "Biconvex Positive"; the role of element 3 reworded.
- Cemented group id `Q1` → `C1` on all four elements and in the single `doublets` entry spanning surfaces 1–5.
- Glass: each element now carries an `Unmatched (nD … / nG′ …; no Abbe number printed)` label. The patent prints no Abbe numbers, so no catalogue row can be matched and the model stays monochromatic.
- Header comment: the scaling remark removed (the patent itself prints focal length 100); the Series VII Protar lineage and the lens II nG′ note added.
- Analysis: title set to the model name; section "Model Notes and Verification" renamed "Model Scope and Limitations"; the nG′ misprint passage reduced to one sentence; the 1911 Britannica citation and the 85° figure removed, because that page was seen only as a search excerpt.

**Engine numbers before and after (identical).** EFL 98.99705, f/12.5, half-field 5°, stop semi-diameter 3.95988, back focus 109.1747. The surface audit reports no validation errors; the aperture audit reports no rim, trace or iris limit.

**Open:**

- Rims and field (SD pass): uniform 4.5 rims and a 5° trace field are placeholders; the patent states no field or diameters, Fig. 1 is not to scale, the Protar is reported at about 80° coverage, and lens II reaches zero edge thickness at a semi-diameter of about 5.1.
- `lensMounts`, `imageFormat` and image circle are not set: the patent states no format or field.
- Abbe numbers: rough values from nG′ − nD (about 66, 56 with a corrected lens II, 53, 38.5) are not in the data; a period Schott list has not been consulted.
- The name carries 100mm (the patent's nominal focal length) while the table computes to 99.00.
