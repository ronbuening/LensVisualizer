# Audit Log — Canon EF 180mm f/3.5 L Macro USM

Patent: JP 1997-211319 A, Numerical Example 1.

## 2026-10-30 — Original-PDF rear heights, concave ends, media and four focus rows

### Exact source and native resolution

The exact supplied original is 'patents/JPA 1997211319-000000.pdf', JP 1997-211319 A (特開平9-211319), Macro Lens,
Hideki Ogawa / Canon, published August 15, 1997. Numerical Example 1 is ¶0057 on PDF page 6, printed columns 9–10,
including the complete prescription and infinity/0.1×/0.5×/1.0× spacing table. Paragraph 0054 on PDF page 5 defines
the n/ν columns. Fig. 1 is the upper-left section on PDF page 17 (columns 31–32), identified by the original captions;
Figs. 12–15 on PDF page 19 are this example's four aberration/focus plots, not the other examples on the same sheets.

The native figure is 661 × 373 pixels at approximately 200/202 dpi. The numerical table is 787 × 964 pixels at
200/201 dpi. Both were extracted and inspected directly, with full-sheet renders for figure identity and context.
Higher-resolution rendering only upsamples those raster originals. The R1–R27 vertex span is about 593 native pixels
for 155.97 mm (223.51 mm track minus 67.54 mm rear spacing), about 3.80 px/mm. A two-pixel edge reading is about
±0.53 mm before drawing uncertainty. Unit brackets, SP strokes, motion arrows and leaders are excluded from optical rims.

### Rear-element correction and retained constraints

| Surface | Before sd (mm) | After sd (mm) | Native figure evidence |
|---|---:|---:|---|
| S24 | 14.0 | 17.6 | Final negative meniscus reaches about 67 native pixels from the axis. |
| S25 | 14.6 | 17.6 | Same meniscus has a resolved square-ended outline, about 17.6 ±0.5 mm. |
| S26 | 14.6 | 19.0 | Final positive element reaches about 72 native pixels from the axis. |
| S27 | 14.6 | 19.0 | Same positive element is about 19.0 ±0.5 mm high. |

The rear-pair relative heights were roughly 25–30% below the native figure. The adopted clear caps follow the
connected spherical profiles to their visible endpoints; no separate shoulder is resolved here. The revised caps pass
edge, slope, cross-gap and control-state geometry without a tolerance change and improve the actual SVG proportions.
All other clear radii remain inferred and retained. Every element, concave end and both cemented interfaces (S16/S22)
was inspected. No opaque bonded-interface land, unsupported equal-height block, resin wing, inferred cut or fabricated
'rimCutDepthSource' is added. There are no source-indexed hybrid layers, filters or rear plates.

Two otherwise attractive figure fits are rejected. Giving S9–S12 a common 19.5 mm radius makes the S10–S11 air-gap
sag 4.35 mm against a 3.70 mm gap (allowed 3.330 mm); the physical profiles would cross. Increasing S14 to the
approximately 16.8 mm height suggested by its schematic square rim similarly makes S14–S15 sag 4.45 mm against
4.25 mm spacing (allowed 3.825 mm at the shared 16.3 mm radius). Raising S10 alone to 19.5 mm passes the geometric
screen but merely moves finite full-iris clipping to the next air-facing rim, S11; it does not resolve the full beam.
These trials are not applied. Source R/d, the stop and all published focus gaps are preserved instead of forcing blocks
through the neighbors or relaxing the geometry policy. The remaining front/L1b and moving-unit outline is constrained.

### Every modeled medium

| Element / source faces | Final clear front / rear sd (mm) | Confirmed source n / ν | Derived coordinate-class hint |
|---|---|---|---|
| L1, S1–S2 | 31 / 31 | 1.48749 / 70.2 | 487702 |
| L2, S3–S4 | 30.8 / 29.2 | 1.49700 / 81.6 | 497816 |
| L3, S5–S6 | 28.5 / 28.5 | 1.80100 / 35.0 | 801350 |
| L4, S7–S8 | 27.8 / 26 | 1.49700 / 81.6 | 497816 |
| L5, S9–S10 | 22.5 / 18 | 1.80518 / 25.4 | 805254 |
| L6, S11–S12 | 17.4 / 18.5 | 1.48749 / 70.2 | 487702 |
| L7, S13–S14 | 17.5 / 15.1 | 1.88300 / 40.8 | 883408 |
| L8, S15–S16 | 16.3 / 16.3 | 1.48749 / 70.2 | 487702 |
| L9, S16–S17 | 16.3 / 16 | 1.84666 / 23.9 | 847239 |
| L10, S19–S20 | 15.5 / 14.8 | 1.76200 / 40.1 | 762401 |
| L11, S21–S22 | 14.7 / 13.6 | 1.49700 / 81.6 | 497816 |
| L12, S22–S23 | 13.6 / 13 | 1.59270 / 35.3 | 593353 |
| L13, S24–S25 | 17.6 / 17.6 | 1.83400 / 37.2 | 834372 |
| L14, S26–S27 | 19 / 19 | 1.48749 / 70.2 | 487702 |

All 14 numeric index/Abbe pairs match the native numerical rows. Paragraph 0054 defines n and ν as refractive index
and Abbe number without naming a d/e spectral reference. The d/g legend on the aberration sheets names plotted rays,
not the numerical-column reference. All 14 labels are therefore explicit Unmatched entries and all 14 elements carry
'indexReferenceNote' that d-line tracing is an approximation. Derived six-digit class hints do not establish the source
reference, supplier, melt or chemistry; no coefficient curves are counted as resolved (0/14). The numeric pairs remain
unchanged. No per-lens C/F/g or dPgF overrides exist to remove, and no genuine source spectral datum is discarded.
The three production-position UD classifications remain inferred and do not establish source-glass APD behavior.

### Published states and sampled runtime limitations

All four source spacing rows are confirmed exactly: d12 = 2.20/5.19/17.03/31.58; d17 = 32.31/29.32/17.48/2.93;
d18 = 17.54/15.39/7.93/1.10; d23 = 28.15/30.30/37.76/44.59; d27 = 67.54 at every state, in mm. The d12+d17
and d18+d23 invariants keep the stop, L1/L4 and image plane fixed while the two moving units counter-move. No focus
keyframe or interpolation control is changed. The infinity heading's 2ω = 13.8° and Fig. 12's inconsistent ω = 13.8°
label remain distinguished; the finite plots use ω = 6.85°. Their f/3.9, f/4.8 and f/5.8 labels are retained as source
effective-aperture context and do not replace the infinity nominal f/3.6.

Fresh actual SVG outlines at the source keyframes and a 0.05 focus grid remain finite, closed and connected with zero
hidden renderer trimming. There are 23 distinct checked positions, including all four exact source keyframes. A separate
paraxial object-distance solution gives m = −0.099994/−0.500081/−1.000360 at the three finite source rows, and an object-
to-image distance of 475.566 mm at 1.0×. These derived object points are runtime-check inputs under the approximate
spectral reference; they are not newly authored source distances.

Sampled pupil tracing aims 49 samples at the fixed stop for axial, 0.6-field and corner fields at each of those 23
positions. Infinity fields use the chief solver; finite fields use object points derived from the current paraxial
conjugate and catalog-format image heights. Every field retains a clear chief and every sample is aimed. The full iris
is not wholly clear: at the four source rows the axial survivor counts are 45/49, 45/49, 37/49 and 21/49. Clips occur
at air-facing rims, with no sampled first clip at the bonded interfaces. This is retained finite-beam vignetting and a
model limitation, not proof of source f/5.8 full-iris clearance. The ordinary infinity aperture census remains within
its 3% tolerance of f/3.6; image-circle and full-frame corner chief checks pass. No inferred cut is present for the full
cut-beam guard to exempt. The revised rear caps and sampled clearance do not identify production dimensions or fully
validate the unpublished continuous focus trajectory, skew-field transmission, historical glass or production formula.
