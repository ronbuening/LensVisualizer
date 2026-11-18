# Audit

Source: US 886,416 (Paul Rudolph, assigned to the firm of Carl Zeiss; granted 1908), Example 2, Fig. 2. The drawing sheet and specification page 1 were transcribed by eye. The diaphragm distance b is labelled on each half of the drawing. Radius signs come from the drawing; no value was fitted. Indices are the printed D-line values only. No exact product attribution is made. Example 1 of the patent is not modelled.

## 2026-11-17 — Deployment validation

**Checked.** An independent re-read of the patent page images at 300 dpi (specification page 1, lines 80–100, and Fig. 2) against the data file: four radii (20.3, 54.8, 10.7, 22.6), the diaphragm distance (2.7), three thicknesses (1.0, 4.1, 2.1) and three nD values (1.4626, 1.5832, 1.6240), each used twice in the symmetric objective. No mismatch. Radius signs agree with Fig. 2 and with the claims. The front page gives No. 886,416, filed July 12, 1907, patented May 5, 1908, Paul Rudolph, assignor to the firm of Carl Zeiss, of Jena.

**Verdict.** Valid: a faithful transcription that reproduces the patent's focal length of 100 within 0.13 %. The patent names no product. The Zeiss Doppel-Amatar 1:6.8 is the nearest known product (two cemented triplets), but the link is unproven: the patent example is f/6.3, and a Zeiss brochure section is reported to show a plano-convex centre element where the patent has a biconvex one.

**Changes.**

- File form: single-line object → multi-line house form with a header comment stating source, scale, signs and inferred values.
- `maker`: `null` → `"Carl Zeiss Jena"` (the patent is assigned to the firm of Carl Zeiss).
- `source`: absent → `US 886,416 A`, Example 2, 1908, Paul Rudolph, Carl-Zeiss-Stiftung, `sdSource: "heuristic"` (the rims are estimates).
- `catalog.focalLengthMm.design`: 100 → 99.87 (the computed value).
- Elements: `cemented` tags `T1` (L1–L3) and `T2` (L4–L6) added; `doublets` entries added for surfaces 1–4 and 6–9; labels "Patent glass N" → "Element N"; `focalLengthMm` and `role` added.
- Last gap: 91.18100437324723 → 91.181 (same computed paraxial back focus, float noise rounded).
- No radius, thickness, index, stop position or rim was changed.
- Analysis rewritten to the house section layout. The first paragraph of this audit was reworded in plain English.

**First-order values after the changes.** Focal length 99.867 mm, f/6.3, back focus 91.181 mm (paraxial, zero defocus), vertex length 19.8 mm, total length 110.981 mm, stop radius 6.89 mm. Each cemented triplet: 173.58 mm.

**Validator results.** Surface audit: no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. Real-ray clearance at f/6.3 and a 8.7 mm image height (5°): no axial clipping and no blocked chief ray. The image-circle and field-coverage audits skip the lens (no image format; hidden).

**Open:**

- Name, key, subtitle and specs are as delivered ("D-line patent reference", "NO VERIFIED PRODUCTION MATCH", "PATENT REFERENCE", `focus.description`) and need the house wording; the file stem may also change.
- `closeFocusM: 1e15` awaits the house infinity form.
- Rims are estimates (8.5 / 7.8 mm); Fig. 2 scales to roughly 7.4 mm. For the semi-diameter pass.
- The 5° trace field is arbitrary; the patent states no field.
- Dispersion: the patent prints nG′ (1.4714, 1.5972, 1.6448) but no Abbe number. A two-term fit through nD and nG′ gives roughly ν ≈ 67, 53 and 38 for glasses I, II and III. These are estimates, not source data, and are not in the model; no modern or period glass was matched.
- Product link to the Doppel-Amatar remains unproven; no public optical section was obtained.
