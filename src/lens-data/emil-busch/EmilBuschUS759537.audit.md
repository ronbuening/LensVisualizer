# Audit log — Busch / Martin 210 mm f/11 (US 759,537 A)

## Source

US 759,537 A, K. Martin, *Photographic Objective*. Filed October 3, 1901 (Serial No. 77,445), granted May 10, 1904.
Assigned to Rathenower Optische Industrie-Anstalt vormals Emil Busch A.-G. The scan has three pages: the drawing sheet
(Figures 1 and 2) and specification pages 1–2. The patent has one numerical example, shown in Figure 1; Figure 2
combines two such sets into a double objective. Stored as `patents/US759537A.pdf`.

## Transcription check

Read from 300–1200 dpi renders of the page images, not the scan's text layer.

| Item | Printed | File |
|---|---|---|
| R1, R2, R3, R4 | −22.36, −42.56, −383.35, −33.64 (signs printed) | same |
| D1 (L1), D2 (air), D3 (L2) | 6.15, 3.31, 5.73 | same |
| nD | 1.6031, 1.4967 | same, `indexReference` "D" |
| nG′ | 1.62386, 1.50627 | not traced (no G′ field); recorded in the analysis |
| Glass labels | 0.318, 0.802 (Schott O. 318, O. 802) | not recorded |
| Stop to R1 vertex | Δ/2 = 3.79 | 3.79 (was 3.00, see below) |
| Back focus | not printed | computed paraxial, 250.14 |
| Clear radii | not printed | estimated 12 on all surfaces |

The page-2 curvature values ρ = F/R (−6.02, −3.16, −0.35, −4.01) match the printed radii with F ≈ 134.7. That is the
paraxial focal length of the Figure 2 double built from two sets at Δ = 7.58 mm (134.77 mm), so the radii and the
Δ/2 value agree with each other.

## First-order and aberration checks

- Paraxial EFL 210.19 mm against the stated 210 (+0.09 %).
- At f/11 the marginal ray lands within 0.01 mm of the paraxial focus, as stated ("exactly spherically corrected").
  The zone error at the 0.7 zone is about 0.39 mm, which is 0.19 mm scaled to f = 100; the patent states 0.25 mm.
- Using the printed nG′, the G′ focus lies 0.110 mm beyond the D focus, 0.52 per mille of f. The patent states
  0.5 per mille overcorrection.
- Coddington trace at 34° half-field (the stated 68° field), stop at 3.79 mm: sagittal +0.70 mm, tangential
  +0.17 mm. With the stop at 3.00 mm the tangential focus is +16.5 mm.

## Inferred values

- Clear radii: 12 mm on every surface, an estimate. Figure 1, drawn to scale, shows L1 at about 14 mm (concave face
  about 10 mm, with a flat land outside it) and L2 at about 15.4 mm.
- Back focus: the computed paraxial D-line value.
- Abbe numbers: not printed and not entered, so the model traces at one wavelength.

## 2026-11-16 — Deployment validation

The page images were re-read independently:

- every radius with its sign, every thickness and air space, both nD and nG′ pairs, the Δ/2 entry;
- the bibliographic data on the drawing sheet and the specification heading;
- Figure 1, against the data file's elements and stop.

Verdict: the prescription is transcribed exactly and reproduces the stated focal length, f/11 spherical correction,
chromatic overcorrection and 68° astigmatic correction once the printed stop distance is used. The product link is a
design-family one. Martin's 1902 article and the 1911 *Encyclopædia Britannica* tie this two-meniscus principle to
Busch's 1902 Omnar, a symmetrical doublet whose back half can be used alone. The Austrian counterpart, AT 8364 B, covers
the same objective. No catalogue ties the 210 mm f/11 example to a listed Omnar size.

Changes:

- Stop-to-R1 gap: 3.00 → 3.79. The patent prints Δ/2 = 3.79; Figure 1 measures about 3.8 mm. The 3.00 mm estimate
  lost the stated astigmatic correction (tangential focus +16.5 mm at 34°). It also left the R1 rim at 12 mm 0.49 mm
  ahead of the stop plane. At 3.79 mm the rim clears the plane by 0.30 mm.
- `catalog.specs`: "ESTIMATED STOP OFFSET AND RIMS" → "ESTIMATED RIMS".
- `source.patentNumber`: "US 759,537" → "US 759,537 A".
- `source.assignees`: "Rathenower Optische Industrie Anstalt vormals Emil Busch AG" → "Rathenower Optische
  Industrie-Anstalt vormals Emil Busch A.-G.", the company form of the patent heading.
- `catalog.focalLengthMm.design`: 210.19329162195746 → 210.19.
- `aperture.maxFNumber`: added, 32. Without it the f/22 and f/32 stops were hidden.
- A plain-English header comment was added to the data file.
- The analysis was rewritten.

First order after the changes (`built.mjs`, `probe.mjs`):

- EFL 210.19 mm, f/11, stop radius 9.55 mm.
- Back focus 250.14 mm; stop-to-image length 269.12 mm.
- L1 f = −88.22 mm, L2 f = +73.84 mm.

Audits:

- `audit:surface`: OK.
- `audit:aperture`: no rim limit at f/11.
- `audit:image-circle`: skipped (no image format).
- `audit:field-coverage`: skipped (hidden).

Open:

- Maker prefix: `scripts/maker-prefixes.mjs` has no entry for "Emil Busch". The organizer would derive the folder
  `emil/` from the first word, so add `EMIL BUSCH` → `emil-busch`. Use the same maker string for any other Busch
  file.
- Wording: `name`, `subtitle`, the "PATENT ONLY; NO RETAIL MATCH" spec (understates the Omnar family link),
  `indexReferenceNote` ("Reference-line-only analysis") and `focus.description` still need the cleanup pass.
- `source.example`: "Figure 1" is kept. The patent has one numerical example, which it introduces as shown in
  Figure 1; decide whether the house form should be "Sole example".
- Glass labels: Schott O. 318 and O. 802 could go into `glass` on L1 and L2.
- Abbe numbers: estimates near 38 and 65 come from nG′ − nD. Enter a νd only if a period Schott list gives O. 318
  and O. 802 values that also match the printed nD and nG′.
- Rims against Figure 1, for the SD pass: R1 about 10 mm plus a flat land to about 14 mm, R2 about 14 mm, R3/R4
  about 15.4 mm. At 34° the 12 mm rims pass about 64 % of the meridional beam, against about 81 % at the drawn sizes.
