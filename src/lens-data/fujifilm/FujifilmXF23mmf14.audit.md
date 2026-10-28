# Audit Log - Fujifilm XF 23mm F1.4 R

Patent: US 2014/0368926 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20140368926A1.pdf`; OCR is imperfect but the queued row values are present in the local table.
- Updated L112 to `S-TIM3 (OHARA)`, L124 to `S-LAL8 (OHARA)`, and L23 to `S-TIM28 (OHARA)`.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L123 and L25 from `S-TIH6` to OHARA `S-NPH1`, the exact 1.80809 / 22.76 row.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Table 7 (Example 4, PDF p. 18) and Table 11 (p. 19) from the rendered page: D20 = 10.00, PP surfaces 21–22 t = 2.80, Nd 1.51680, νd 64.2; D22 is not printed. S20 now stores the physical 10.00 mm and PP is a `rearPlates` entry (`N-BK7`, exact nd/νd match); the 0.754 mm gap to the image is derived, not printed, from Table 11 BF = 12.60 (air-equivalent) − 10.00 − 2.80/1.5168, preserving the previous image plane.
- Against the previous folded data, EFL is identical and paraxial defocus changes by at most 8.4e-6 mm (rounding of the derived 0.754 gap) at infinity and at the estimated 0.28 m keyframe; physical track grows by 0.954 mm = 2.80 × (1 − 1/1.5168), to 75.06 mm S1 → image.

## 2026-10-27 — Rimmer localization audit (asphere data)

US 2014/0368926 A1, Example 4: Table 7 (all R, d, nd, vd rows, PDF p.18 / printed p.8), Table 8 (both complete asphere columns, same page), Table 11 (f = 23.74 mm, BF = 12.60 mm, 2ω = 61.7°, Fno = 1.45, PDF p.19 / printed p.9), sag equation ¶0074 (PDF p.15 / printed p.5), Figure 4 (PDF p.5), and Figure 9A–C (PDF p.8). Tables and equation were read from rendered images, including a 350 dpi Table 8 crop.

| Surface / scope | Field | Before | After | Evidence |
|---|---|---|---|---|
| 13A | `A3` | omitted (0) | 1.6085859e-4 | Table 8, 13 column, A3 row (PDF p.18). |
| 14A | `A3` | omitted (0) | -3.8031887e-5 | Table 8, 14 column, A3 row (PDF p.18). |
| 13A | `A5` | omitted (0) | 1.3528598e-4 | Table 8, 13 column, A5 row (PDF p.18). |
| 14A | `A5` | omitted (0) | -6.7979931e-4 | Table 8, 14 column, A5 row (PDF p.18). |
| 13A | `A7` | omitted (0) | 8.4990030e-5 | Table 8, 13 column, A7 row (PDF p.18). |
| 14A | `A7` | omitted (0) | -1.4922693e-4 | Table 8, 14 column, A7 row (PDF p.18). |
| 13A | `A9` | omitted (0) | -5.8141716e-6 | Table 8, 13 column, A9 row (PDF p.18). |
| 14A | `A9` | omitted (0) | 1.5049108e-6 | Table 8, 14 column, A9 row (PDF p.18). |
| 13A | `A11` | omitted (0) | 1.8591384e-7 | Table 8, 13 column, A11 row (PDF p.18). |
| 14A | `A11` | omitted (0) | 3.5630785e-7 | Table 8, 14 column, A11 row (PDF p.18). |
| 13A | `A13` | omitted (0) | 2.8662325e-10 | Table 8, 13 column, A13 row (PDF p.18). |
| 14A | `A13` | omitted (0) | -1.0368272e-8 | Table 8, 14 column, A13 row (PDF p.18). |
| 13A | `A15` | omitted (0) | -2.2027007e-10 | Table 8, 13 column, A15 row (PDF p.18). |
| 14A | `A15` | omitted (0) | 5.4804383e-11 | Table 8, 14 column, A15 row (PDF p.18). |
| 13A | `A17` | omitted (0) | 6.4318314e-12 | Table 8, 13 column, A17 row (PDF p.18). |
| 14A | `A17` | omitted (0) | 1.1008282e-12 | Table 8, 14 column, A17 row (PDF p.18). |
| 13A | `A19` | omitted (0) | -5.4568937e-14 | Table 8, 13 column, A19 row (PDF p.18). |
| 14A | `A19` | omitted (0) | -9.6542271e-15 | Table 8, 14 column, A19 row (PDF p.18). |
| 10 | `sd` (mm) | 7.9 | 8.2 | Stated f/1.45 on-axis ray, rounded up to 0.1 mm; Figure 4 near-contact check. |
| 13A | `sd` (mm) | 4.5 | 6.5 | Restored beam needs 6.4 mm; square L21 rim takes the larger face's 6.5 mm floor. |
| 14A | `sd` (mm) | 3.1 | 6.5 | Restored f/1.45 beam; Figure 4 square-cut L21 rim. |
| Lens checks | `gapSagFrac` | default 0.90 | 0.972 | S9/S10 intrusion 0.2428703 mm in the printed 0.25 mm gap at h=8.2; clearance +0.0071297 mm. |

The even coefficients already matched Table 8. All Table 7 prescription R/d/nd/vd values, including stop and focus gaps at infinity and the rear PP plate, match the print; no such values changed. The equation uses KA directly under the radical: tabulated K = KA = 0.10 correctly maps to standard K = −0.90 on both aspheres. Units are mm and no scale factor applies. This is restoration of omitted source terms, not a source erratum; no errata entry is warranted.

With the old even-only polynomial, 14A turned over at about 2.20 mm inside its 3.10 mm rim; neighbouring ±0.35/±0.40 stop-pupil rays left multi-mm transverse errors after the L21 block. With the exact polynomial, no turnover lies inside either 6.5 mm rim; 13A's first sampled turnover is about 7.5 mm. The f/1.45 beam passes after the documented floor raises. The source's Figure 4 square-cut L21 rim was retained; manual optical-rim height is about 7.1 mm, within approximately 10% of the 6.5 mm floor. Automated envelope/RIM values were contaminated by leader/ray ink and rejected. The changed outlines and exact traced axis/edge rays were also inspected using the engine's SVG geometry in a scratch render; no surface is trimmed by the renderer.

On-axis LSA changed from non-finite at pupil fractions 1 / 0.85 / 0.7 / 0.5 to −0.017 / −0.009 / −0.003 / −0.013 mm, with EFL unchanged at 23.7377 mm. Figure 9's spherical and astigmatism scales are ±0.2 mm; the restored small negative d-line LSA, sagittal field excursion to roughly −0.076 mm, near-zero tangential focus shifts and near-zero distortion (−0.032% to +0.092%) agree in scale and shape. No coefficient fitting or single-slip errata search was needed because the full transcription resolves the contradiction.

The axis now localizes (max referred deviation 0.000114 rad), and the sampled half-field expands from 15.18° to 30.825°, consistent with the source's 30.85°. Relative illumination is available throughout, with maximum referred deviation 0.001375 rad at the edge and edge RI about 0.161. These illumination values depend on estimated rims; they do not establish production-lens illumination.

Analysis sync: replaced obsolete even-only/asymmetric-sag claims with the full Table 8 transcription and radial-symmetry explanation; old approximate h=5 mm departures of 190/210 µm were replaced with +973.4/+794.9 µm at the actual new h=6.5 mm rims (S13/S14). Header notes now identify the restored coefficients, source convention, beam floors, and S9/S10 clearance.

Follow-up: coordinator retains responsibility for repository-wide gates and a live lens-page/aspheric-overlay review; browser access was unavailable in this worker. No unresolved source contradiction remains at design focus. Close-focus gaps remain the previously estimated, non-patent keyframe and were not qualified by this infinity-focus audit.
