# Audit Log — CANON EF 14mm f/2.8 L USM

Patent: JP H05-034592 A, Numerical Example 2

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 2 prints f = 14.2 mm (table p. 6) and w = 56.72° at the edge of the aberration plots (Fig. 5, p. 10), and the
data file declares that field as `maxTraceFieldDeg`. The estimated rims were sized for the 0.6 × 56.72° display field
and clipped the real chief ray (solved through the stop centre) at surface 1 from 41.8°, so the chief-ray solve failed
at the declared edge. At 56.72° the unclipped chief ray reaches 21.08 mm (97.4% of the 21.65 mm corner; barrel
distortion puts the corner itself at 57.4°) and crosses surfaces 1–9 and 23–25 above their rims. New values are those
chief-ray heights plus ~0.5 mm; L2 and L14 were scaled as elements, while the strong menisci L1, L3 and L4 and the
cemented partners of surfaces 9 and 23 keep their own floors. Fig. 4 (p. 7), scaled on the 128.36 mm track, draws
surface 1 ≈ 33, surface 2 ≈ 25, L2 ≈ 23.6, L3 ≈ 19.6 and L4 ≈ 14.7 mm, consistent with the new values; it was a
cross-check only. Surface 2, the steep rear of the L1 meniscus, needs 23.88 mm, past the default 64.2° rim-slope limit
(sd ≤ 0.9|R| = 23.39 mm on R 25.992). As on the EF 11-24mm f/4L, the file raises `maxRimAngleDeg` to 72, and surface 2
takes its floor + ~0.5 mm, 24.4 mm, a 69.8° rim that Fig. 4's ≈ 25 mm drawing supports. The chief ray now solves at the
declared 56.72° and clears every rim there and at the 57.4° corner.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 22.0 | 31.9 | chief ray 31.32 mm at 56.72° + clearance (Fig. 4 ≈ 33) |
| 2 | 20.5 | 24.4 | chief ray 23.88 mm + clearance; 69.8° rim under the lens-level 72° limit (Fig. 4 ≈ 25) |
| 3A | 16.0 | 22.5 | chief ray 21.92 mm + clearance; the asphere's slope rises monotonically to 27 mm (45.1° at the rim) |
| 4 | 15.0 | 21.1 | L2 scaled with surface 3A (chief ray 19.39 mm) |
| 5 | 13.8 | 18.4 | chief ray 17.86 mm + clearance |
| 6 | 12.5 | 14.6 | chief ray 14.06 mm + clearance; strong meniscus, not scaled |
| 7 | 11.0 | 13.6 | chief ray 13.01 mm + clearance |
| 8 | 10.2 | 12.0 | chief ray 11.43 mm + clearance; strong meniscus, not scaled |
| 9 | 9.2 | 9.8 | chief ray 9.21 mm + clearance; cemented junction 10 (chief ray 8.24 mm, sd 8.8) unchanged |
| 23 | 7.5 | 8.4 | chief ray 7.83 mm + clearance; cemented junction 22 unchanged |
| 24 | 8.0 | 9.9 | L14 scaled with surface 25 (chief ray 9.01 mm) |
| 25 | 8.2 | 10.1 | chief ray 9.55 mm + clearance |

The validator accepts the new values and the image-circle floor still reports nothing undersized. The field-coverage
audit reads 97%: the declared 56.72° field ends at 21.08 mm, and barrel distortion puts the corner at 57.4°. The
analysis note's surface 3A rim departure (now +2.794651 mm at 22.5 mm), its semi-diameter paragraph and its
geometry-check table were recomputed at the new values.

## 2026-10-30 — Original-PDF outer shoulders and unresolved spectral reference

### Exact publication and evidence

The supplied original 'patents/JPA 1993034592-000000.pdf' is JP H05-034592 A, published February 12, 1993,
Hideki Ogawa / Canon, with the title コンパクトなリアフォーカス方式の超広角レンズ. Numerical Example 2 is PDF page 6,
printed columns 9–10. Fig. 4 is the lower panel on PDF page 7, printed columns 11–12; the caption on PDF page 6
explicitly maps it to the second numerical example. Fig. 1 above it belongs to Example 1 and is not substituted.
The table-definition paragraph 0022 and asphere convention in paragraphs 0023–0024 are on PDF page 4.

The native Fig. 4 raster is 961 × 497 pixels at approximately 201 dpi. It was extracted and inspected at its actual
resolution; a 400/600-dpi render would not add source detail. The numerical table is an approximately 200-dpi
1079 × 1436 raster, also inspected directly. The R1–R25 vertex span is about 569 pixels for the 89.63 mm summed
physical span, approximately 6.35 native px/mm. Two pixels correspond to about ±0.31 mm before drawing/scale
uncertainty. Brackets I/II, axis strokes, stop and image-plane marks are excluded from glass measurements.

### Element heights, outer shoulders and concave ends

| Surface | Before clear / drawn radius (mm) | After clear / drawn radius (mm) | Evidence and adopted constraint |
|---|---|---|---|
| S2 | 24.4 / 24.4 | 24.4 / 31.9 | Native rear shoulder; cap/outer ratio about 0.76 ±0.02. |
| S4 | 21.1 / 21.1 | 21.1 / 22.5 | Native short rear shoulder; ratio about 0.88 ±0.03. |
| S6 | 14.6 / 14.6 | 14.6 / 18.4 | Native rear shoulder; ratio about 0.77 ±0.03. |
| S8 | 12.0 / 12.0 | 12.0 / 13.6 | Native short rear shoulder; ratio about 0.86 ±0.04. |

The ratio ranges include two-pixel endpoint ambiguity and schematic stroke/shape uncertainty. The adopted outer
heights follow each element's opposite retained face, rather than moving a working optical cap to fit the drawing.
The four fields are 'rimExtensionSd': the prior 2026-09-24 chief-ray floors remain the clear apertures. In particular,
extending S2's sphere to 31.9 mm or S6's to 18.4 mm would exceed their |R| values, 25.992 and 17.786 mm. Those
larger-cap trials are rejected geometrically; vertical shoulders preserve the existing caps and their steep slopes.
No inferred concave cut is added and no 'rimCutDepthSource' is fabricated.

All 14 elements, every concave end and all four cemented interfaces were compared with the native Fig. 4 and fresh
actual SVG outlines. The remaining bonded stacks do not resolve a separate cap end/shoulder: no equal-height block,
opaque interface land or resin wing is invented. Source radii, thicknesses, stop, asphere and focus controls are
unchanged. The existing 72° rim-angle policy is retained, with no tolerance relaxation. The four lands pass the
normal edge/stop/cross-gap checks; source-plane and sampled runtime clearance remain distinct from drawing resemblance.

### Every modeled medium and its source reference

| Element / source faces | Retained clear front / rear sd (mm) | Confirmed source n / ν | D-line coordinate candidate only |
|---|---|---|---|
| L1, S1–S2 | 31.9 / 24.4 | 1.69680 / 55.5 | S-LAL14 |
| L2, S3A–S4 | 22.5 / 21.1 | 1.60311 / 60.7 | S-BSM14 |
| L3, S5–S6 | 18.4 / 14.6 | 1.69680 / 55.5 | S-LAL14 |
| L4, S7–S8 | 13.6 / 12 | 1.77250 / 49.6 | S-LAH66 |
| L5, S9–S10 | 9.8 / 8.8 | 1.69680 / 55.5 | S-LAL14 |
| L6, S10–S11 | 8.8 / 8 | 1.59551 / 39.2 | S-TIM8 |
| L7, S12–S13 | 7 / 6.4 | 1.56732 / 42.8 | S-TIL26 |
| L8, S13–S14 | 6.4 / 6.4 | 1.77250 / 49.6 | S-LAH66 |
| L9, S15–S16 | 6.3 / 6.3 | 1.77250 / 49.6 | S-LAH66 |
| L10, S18–S19 | 6.5 / 6.7 | 1.60311 / 60.7 | S-BSM14 |
| L11, S19–S20 | 6.7 / 6.8 | 1.74320 / 49.3 | S-LAM60 |
| L12, S21–S22 | 6.8 / 6.9 | 1.92286 / 21.3 | PBH71 |
| L13, S22–S23 | 6.9 / 8.4 | 1.48749 / 70.2 | S-FSL5 |
| L14, S24–S25 | 9.9 / 10.1 | 1.80400 / 46.6 | S-LAH65V |

Every numeric index/Abbe pair agrees with the original table. No indexed hybrid layer, source filter or rear plate
is present. The source does not print C/F/g line indices, per-material partial dispersion or APD measurements.
Paragraph 0022 calls Ni and νi the refractive index and Abbe number, without specifying their spectral line. The
aberration legend identifies d- and g-line rays but does not assign a d/e reference to those numerical-table columns.

Following the unknown-reference rule, all 14 labels are now explicit Unmatched entries and all 14 elements have
'indexReferenceNote' stating that d-line tracing is an approximation. The original numeric pairs are preserved.
The old named glasses remain qualified d-line coordinate candidates in the public notes, not resolved historical
materials. No media are counted as coefficient-curve coverage (0/14) while the source reference remains unspecified.
The source does not print six-digit glass codes; the former “patent code” heading is corrected to derived coordinate
code. Historical PBH71 remains a candidate under the assumed reference, not proof of source identity or supplier.

| Element | Previous nC / nF / ng | Disposition |
|---|---|---|
| L1 | 1.69297 / 1.70552 / 1.71234 | Removed catalog copies; not printed in the original. |
| L2 | 1.60008 / 1.61002 / 1.61541 | Removed catalog copies; not printed in the original. |
| L3 | 1.69297 / 1.70552 / 1.71234 | Removed catalog copies; not printed in the original. |
| L4 | 1.7678 / 1.78337 / 1.79197 | Removed catalog copies; not printed in the original. |
| L5 | 1.69297 / 1.70552 / 1.71234 | Removed catalog copies; not printed in the original. |
| L6 | 1.59103 / 1.60621 / 1.61501 | Removed catalog copies; not printed in the original. |
| L7 | 1.56339 / 1.57664 / 1.58423 | Removed catalog copies; not printed in the original. |
| L8 | 1.7678 / 1.78337 / 1.79197 | Removed catalog copies; not printed in the original. |
| L9 | 1.7678 / 1.78337 / 1.79197 | Removed catalog copies; not printed in the original. |
| L10 | 1.60008 / 1.61002 / 1.61541 | Removed catalog copies; not printed in the original. |
| L11 | 1.73865 / 1.75372 / 1.76205 | Removed catalog copies; not printed in the original. |
| L13 | 1.48534 / 1.49228 / 1.49596 | Removed catalog copies; not printed in the original. |
| L14 | 1.79882 / 1.81608 / 1.82569 | Removed catalog copies; not printed in the original. |

These 39 values were catalog-derived copies; none is a published selected-example measurement. Removing them
allows the unresolved source-pair approximation to remain honest. The analysis now uses n/ν for source values,
distinguishes d-line catalog candidates, and no longer calls these per-lens copies measured source data.

### Retained source damage, states and limitations

The Example-2 H^6 coefficient remains literally incomplete in the original ('C = 2.04161D'). The existing
+2.04161e-9 reconstruction from Example 1/dimensional context is retained as an inference, not promoted to a complete
source transcription. The reconstructed asphere's existing clear radius and quoted departure remain unchanged.
The heading's 113.4° full-field reading and the aberration plots' 56.72° half-field reading remain documented.

The source supplies no finite-focus spacing table. The existing Group-II close endpoint is inferred from production
0.25 m / 0.10× data and remains explicitly approximate. All 21 focus positions sampled at 0.05 intervals have 14
finite closed SVG paths and zero hidden renderer trim. Collimated axial samples aimed at each state's fixed iris and
chief samples at 0°, 28.36° and 56.72° clear all rims throughout that grid; these are runtime samples, not validation
of a source-published finite-object prescription. At infinity, aperture and image-circle checks pass. Field coverage
retains its declared 56.72° limit: 21.08 mm image height, about 97% of the 21.65 mm full-frame corner; the separately
solved 57.4° corner remains clear. Rims and source field are not enlarged to disguise that declared-field distinction.
The strong design-family correlation does not identify an exact production embodiment, factory blank dimensions,
supplier, melt or material chemistry.
