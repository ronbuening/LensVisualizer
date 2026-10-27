# Audit Log — Leica Elmarit 90mm f/2.8

Patent: US 2,995,980, sole numerical example / claim prescription

## 2026-06-24 — Folder audit

- Rechecked local `patents/US2995980.pdf` OCR for the sole numerical table and claim table.
- Corrected L3 from malformed `1640/346` notation to the unbroken six-digit `640346` code. The patent row is d-line nd=1.63980, vd=34.6; no exact coefficient-backed public catalog match was verified.
- Retained L1/L2/L4/L5 catalog-class assignments and the claim-table r1 choice already documented in the analysis.
- Rechecked APD/high-index status: the patent gives no partial-dispersion data or APO claim, so all elements remain non-APD. L1 and L5 remain high-index lanthanum glass roles by patent nd/vd.
- No patent clear-aperture or semi-diameter table was found. Current SDs remain inferred from the f/2.8 marginal ray, full-field chief ray, E39 front constraint, stop placement, and Fig. 1 proportions.

## 2026-08-18 - Sole-example coefficient backfill

- Visually rechecked the sole prescription table on rendered page 2 of `patents/US2995980.pdf`; it confirms all
  five stored d-line index/Abbe coordinates.
- Assigned K-LaK9 to L1, SF4 to L2, F1 to L4, and N-LAF2 to L5 as same-coordinate or same-family optical equivalents.
  Assigned E-FD7 to L3: its six-digit code is the patent's exact `640346`, resolving the row left open in the
  2026-06-24 audit and replacing the prior unsupported BaSF1 guess for L4 with an exact-coordinate curve.
- All assignments leave the production supplier unspecified. No prescription or geometry value changed.

## 2026-09-23 — First-added diagram audit, lens 84

Source: local `patents/US2995980.pdf` (2 pages). Page 1 carries Fig. 1 (section) and Fig. 2 (spherical-aberration
curves); page 2 carries the specification, the example table and the claim table, both read on the rendered 400 dpi
crop rather than the OCR layer.

### Re-verified and retained

- Identity: US 2,995,980, granted 15 Aug 1961, filed 11 Dec 1957, German priority 21 Dec 1956; inventors Otto
  Zimmermann and Georg Knetsch; assignee Ernst Leitz G.m.b.H. The patent has one example and names no product. The
  Elmarit 90mm f/2.8 (1959) attribution is inferred from assignee, date, f/2.8 (the text's 17.9 mm entrance height at
  f = 100) and the 5/3 layout with cemented middle and rear components; the analysis now says so.
- Prescription: all eight radii, five thicknesses, two air spaces and five nd/ν pairs match the claim table. The
  example table differs only at r₁ (+44.65 vs claim +44.05). Claim r₁ is retained: it gives EFL 100.12 against the
  patent's "per 100 mm of equivalent focal length" normalisation, the example value gives 101.88. An exact d-line
  on-axis trace also gives the claim version an under-corrected zone of about −0.25 % peaking near h = 12.5, the size
  the text quotes for Fig. 2, while the example value runs to +0.28 % over-correction at h = 17.9.
- Scale: every stored R and d is exactly 0.9 × the patent value (a₂ split 2.16 + 2.16); EFL 90.11 mm, BFD 74.333 mm
  against the stored 74.33 mm (−0.003 mm defocus), track 35.25 mm, TL 109.58 mm.
- Element `fl` values match thick-lens values (49.71, 63.32, −20.88, −40.99, 23.44 mm); doublets −29.55 and
  +49.42 mm. Element type names agree with the R signs (L1 biconvex, L2 positive meniscus concave to the object, L3
  biconcave, L4 biconcave with a nearly flat front, L5 biconvex).
- Stored nd/νd equal the patent rows. SF4, E-FD7, F1 and N-LAF2 resolve as compatible catalog equivalents.
- Mount/format ids `leica-m`, `leica-ltm` and `135-full-frame` are canonical. The patent names no mount; the ids rest on
  the production history already recorded in the analysis. Real-ray half field for Y = 21.6 mm is 13.45°, matching the
  stored 2ω ≈ 27.0°.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| sd surface 3 (L2 front) | 14.0 | 15.0 | f/2.8 axial marginal ray needs 14.07 mm (was flagged as clipping). Fig. 1 flat rim ≈ 15.1 mm (266 px ÷ 17.5 px/mm) |
| sd surface 4 (L2/L3 cement) | 13.8 | 15.0 | Axial marginal needs 13.97 mm (was clipping). In Fig. 1 the cement line runs to the flat rim |
| STO sd | 12.7 (paraxial) | 12.9 | Real f/2.8 marginal height at the stop is 12.92 mm, which is what the engine derives |
| Close-focus rear gap | 83.25 (thin-lens f²/(s−f)) | 84.40 (calculated) | Paraxial solve for 1 m object-to-image (the `closeFocusM` convention): object 880 mm from S1, extension 10.07 mm, magnification 0.112×. The old value focused at 1.102 m |
| `maxFstop` | default 16 (f/22 button unreachable) | 22 | Production minimum aperture f/22 (production literature, not the patent) |
| L1 glass label | K-LaK9 (Sumita) | N-LAK9 (Schott) | Same 691548 coordinate (1.69100/54.71). Schott is preferred for Leitz |
| Stop wording (header, comment, analysis §11) | "inferred from Fig. 1" | model choice | Fig. 1 draws no diaphragm, only elements and labels |
| Analysis §10 focus | 8.9 mm thin-lens extension | 10.1 mm calculated extension | See the gap row |
| Analysis L5 EFL, L2 "Confirmed" | +26.1 mm, "Confirmed" | +26.0 mm, "Coefficient-backed" | Thick-lens 23.44/0.9 = 26.04 mm. The patent names no glass |

Fig. 1 measurement (page 1, 600 dpi, axis at row 3450): vertex crossings at 0 / 103 / 210 / 298 / 340 / 425 / 471 /
617 px, against 0 / 105.5 / 215.8 / 300.8 / 348 / 423.7 / 471 / 617 px predicted from the table. The figure is
therefore to scale, at 15.75 px per patent unit, or 17.5 px per stored mm. The L1 rim averages 296 px (16.9 mm); the
L1 outline sits about 10 px high on the page. Both doublets have a flat rim of about 266 px (15.2 mm). The r₅ curve
ends in a bevel at about 224 px (12.8 mm) and r₆ at about 233 px (13.3 mm). Retained within about 7 % of the figure:
r₁ 17.0, r₂ 16.0, r₅ 13.5 (lowering it toward 12.8 would clip the 13.02 mm axial marginal ray), r₆ 13.5, r₇ 14.0,
r₈ 14.5.

### Checks on the result

The surface validator and the image-circle floor both pass. An exact trace at f/2.8 with Y = 21.6 mm shows no axial
clipping and no chief-ray blocking. Full-field side vignetting is 7 % at r₃, 4 % at r₄, 17 % at r₇ and 14 % at r₈,
and L1 has the ordinary 18–23 %. The engine builds EFL 90.11 mm, f/2.8, stop radius 12.92 mm and `maxFstop` 22. The
probe puts the close keyframe at 999.6 mm object-to-image. Headless live renders of production and the local page
at infinity and at 1 m show the group-II doublet now standing taller than its r₅ bevel, as in Fig. 1. The f/22 stop
is now selectable, and the rear gap reads 74.33 → 84.40 mm. Off-axis rays were not checked interactively.

### Open limitations

- The patent gives no clear apertures, stop position, field angle or close-focus data. Rims are figure measurements
  or estimates, the stop placement is a model choice and the close-focus gap is calculated.
- The patent does not name the production lens, mount or glass supplier. The M/LTM mount ids and the 12-blade, f/22,
  1 m production facts come from production history, not the patent.
- The r₁ example/claim discrepancy is resolved in favour of the claim by EFL and by the aberration trace. The example
  table's +44.65 is treated as a misprint.
