# Audit Log — Canon EF-S 10-18mm f/4.5-5.6 IS STM

Patent: JP 2015-31869 A, Numerical Example 1 (Canon Inc.; Fig. 1; ¶0057-¶0060)
Catalog version: 88dde1c

## 2026-05-19 — Patent prescription and glass-label audit

### Phase 1 — Glass corrections

| Element / surface | Field   | Before             | After             | Justification                                                                                                                              |
| ----------------- | ------- | ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| L5 / S9           | `glass` | `S-TIM27 (OHARA)`  | `S-NBH8 (OHARA)`  | Patent ¶0059 row 9 gives nd=1.72047, νd=34.7. Catalog S-TIM27 is nd=1.63980; S-NBH8 round-trips the patent index and Abbe pair closely.    |
| L7 / S13          | `glass` | `S-LAH55V (OHARA)` | `TAFD35 (HOYA)`   | Patent ¶0059 row 13 gives nd=1.91082, νd=35.3. Catalog S-LAH55V is nd=1.83481; TAFD35/code 911353 matches the patent pair.                 |
| L8 / S14          | `glass` | `S-TIM22 (OHARA)`  | `S-TIM5 (OHARA)`  | Patent ¶0059 row 14 gives nd=1.60342, νd=38.0. S-TIM5 matches this pair; the prior S-TIM22 label belongs to the 648/338 glass used by L10. |
| L9 / S17          | `glass` | `S-LAH59 (OHARA)`  | `S-LAH55 (OHARA)` | Patent ¶0059 row 17 gives nd=1.83481, νd=42.7. S-LAH55 round-trips this pair; S-LAH59 is nd=1.81600.                                       |
| L10 / S18         | `glass` | `S-TIM5 (OHARA)`   | `S-TIM22 (OHARA)` | Patent ¶0059 row 18 gives nd=1.64769, νd=33.8. S-TIM22 matches this pair; the previous label was swapped with L8's 603/380 glass.          |
| L12 / S22         | `glass` | `S-LAH55V (OHARA)` | `TAFD35 (HOYA)`   | Patent ¶0059 row 22 gives nd=1.91082, νd=35.3; same 911353 dense flint as L7.                                                              |
| L13 / S24         | `glass` | `S-LAH55V (OHARA)` | `TAFD35 (HOYA)`   | Patent ¶0059 row 24 gives nd=1.91082, νd=35.3; same 911353 dense flint as L7.                                                              |
| L14 / S25         | `glass` | `S-BSM14 (OHARA)`  | `S-BAL42 (OHARA)` | Patent ¶0059 row 25 gives nd=1.58313, νd=59.4. S-BAL42/code 583594 matches; S-BSM14 is nd=1.60311.                                         |

### Phase 2 — Retained-information audit

- Surface radii, axial spacings, d-line indices, Abbe numbers, zoom gaps, F-number rows, image height, lens length, and BFD were rechecked against JP 2015-31869 A ¶0059 Numerical Example 1.
- Patent sign convention and the data-file sign convention agree for all radii.
- Surface `d` values for variable rows match the wide/infinity values in ¶0059: d10=18.12, d21=1.25, d23=3.80, and d26/BF=35.35.
- Aspherical coefficients for S4 and S26 match ¶0060 through the F/A12 term; S4 uses K=-0.475949 and S26 uses K=0.
- Patent Example 1 lists no semi-diameters. Existing estimated `sd` values were retained because this pass was limited to patent-table verification.

### Phase 3 — Spectral / metadata enrichment

- Patent ¶0059-¶0060 provides nd and νd only; no nC, nF, ng, PgF, or dPgF data were available to add.
- Relabeling L5, L7-L10, and L12-L14 upgrades those elements from false catalog matches to catalog entries whose stored nd values match the patent data.
- Existing metadata was retained: `subtitle`, `patentYear`, `focalLengthDesign`, `apertureDesign`, `elementCount`, `groupCount`, `lensMounts`, `imageFormat`, and `focusDescription`.

### Phase 4 — Analysis sync

- Updated `CanonEFS1018mmf4.analysis.md` element narratives for L5, L7-L10, and L12-L14 to match the corrected glass labels.
- Updated the glass-selection table and source list to reflect S-NBH8, TAFD35, S-TIM5, S-LAH55, S-TIM22, and S-BAL42.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 (pp. 10–11) prints a wide-end 半画角 of 52.98° with 像高 13.66 mm; the angle is the paraxial atan(Y/f), and
the traced chief ray reaches Y = 13.66 mm at 54.0° and the 14.175 mm APS-C corner at 55.15°. The estimated rims clipped
the real chief ray (solved through the stop centre) at surface 4A from 43.3°, leaving the wide station at 9.63 mm (68% of
the corner); the 13.96 mm and 17.46 mm stations already reached their corners. At the corner the chief ray crosses
surface 1 at 20.80 mm and 4A at 14.21 mm; every other rim clears it (surface 2 at 15.91 of 16.9, 3 at 15.82 of 16.7).
New values are those heights plus ~0.5 mm, sized to the corner rather than to Y because 図1 (p. 16), scaled on the
117.61 mm wide-end track, draws L1 at about 21.7 mm and the 4A rim at about 14.7 mm. Neither partner was scaled: L1 and
L2 are strong menisci, and surfaces 2 and 3 already sit near their 0.9|R| rim-slope limits. Surface 4A's K = −0.476
conic is defined out to h = 17.0 mm, so its 14.8 mm rim lies beyond |R| = 12.3 mm legitimately.

| Surface | Before | After | Justification                                                                                                                                     |
| ------- | ------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1       | 18.5   | 21.3  | corner chief ray 20.80 mm + clearance (図1 ≈ 21.7)                                                                                                |
| 4A      | 10.9   | 14.8  | corner chief ray 14.21 mm + clearance (図1 ≈ 14.7); the asphere's slope rises monotonically to the conic's 17.0 mm domain edge (45.7° at the rim) |

The validator accepts the new values, all three zoom stations now reach the corner with every rim clear, and the
image-circle floor still reports nothing undersized. The analysis note quotes 4A departures only at fixed heights (10 and
11.5 mm), not at the semi-diameter, so it is unchanged.

## 2026-10-30 — Original-PDF full shape and glass review

Exact original: `patents/JP2015031869A.pdf`, SHA-256 `72ceb991f765897fbb32a0a52dadff0a58093b9a9bd8c70dde882a442445805e`. The rendered cover confirms JP 2015-031869 A, published 2015-02-16, Makoto Nakahara / Canon Inc. Numerical Example 1 (`数値実施例1`) is on PDF pages 10–11: all S1–S26 R/d and 14 material pairs, two aspheres through A12, summary/zoom rows and standalone/group powers. Paragraphs 0057–0058 on page 9 explicitly define d-line material coordinates, first-to-image total length and aspheric convention. The native corresponding section is Figure 1 on page 16; Figure 2(a)/(b), page 17, gives wide/tele aberrations. No other publication or numerical example is substituted.

The earlier 2026-05-19 table/glass work and 2026-09-24 S1/S4A corner-cap correction retain their actual dates. Current original/source-reference, full outline, glass qualification and runtime checks are dated today. This is one reviewed entry; the older partial work does not create another reused lens count.

### Native outline and adopted geometry

Figure 1 embeds a 1002 × 699 JPEG at approximately 200 ppi. The vector-text tables were rendered separately at 200 ppi; this is distinct from the section's native raster. First-vertex-to-IP span is about 910 native pixels over the retained 117.61 mm track, giving about 7.74 px/mm. Adopt practical ±0.6 mm height uncertainty from broad JPEG strokes and modest outline anisotropy. Enlarged crops aid inspection without new source detail. Exclude SP/IP leaders, unit brackets, focus/zoom arrows and the optical axis. No production mechanical dimension establishes a clear cap.

All 14 elements, every concave end, the three cemented interfaces and both aspheric caps were inspected. The source has no effective-diameter column. The following remain inferred drawing-based clear caps, not source-published manufacturing dimensions:

| Surface(s)      | Before, mm      | Adopted sd, mm  | Native evidence                                                        |
| --------------- | --------------- | --------------- | ---------------------------------------------------------------------- |
| S5              | 11.2            | 10.1            | Smaller front cap of the isolated strong negative singlet              |
| S11 / S12       | 3.5 / 3.3       | 4.9 / 4.9       | Complete weak curved endpoints of Ls; previous caps visibly undersized |
| S13 / S14 / S15 | 3.0 / 2.8 / 2.3 | 4.9 / 4.9 / 4.9 | Complete D1 outline and continuous cemented interface                  |
| S17 / S18 / S19 | 2.9 / 3.1 / 3.9 | 5.6 / 5.6 / 5.6 | Complete D2 outline and continuous cemented interface                  |
| S20 / S21       | 3.9 / 4.7       | 6.0 / 6.0       | Biconvex singlet curved endpoints                                      |
| S22 / S23       | 4.9 / 5.0       | 6.2 / 6.2       | Both concave ends of LF                                                |
| S24 / S25       | 6.3 / 6.4       | 8.4 / 8.4       | Full rear-doublet front/interface; S26A stays 8.4                      |

The group outlines match the native section rather than merely the passing beam. Fifteen clear-cap estimates change. S1 21.3, S2 16.9, S3 16.7 and S4A 14.8 remain from the prior coverage, together with other unconstrained front caps. The equal doublet caps follow the source's complete curved surfaces, not invented opaque lands at bonded interfaces. L2 stays one aspheric element; no hybrid layer or disconnected resin wing is invented. No source filter or rear plate is present.

Four resolved vertical outer strokes beyond existing curved caps become `rimExtensionSd`, preserving clear aperture:

| Surface | Clear sd, mm | Outer sd, mm | Anchor                                                   |
| ------- | -----------: | -----------: | -------------------------------------------------------- |
| S2      |         16.9 |         21.3 | Existing own front cap and native front blank            |
| S4A     |         14.8 |         16.7 | Existing own front cap, native separate end stroke       |
| S6      |          8.2 |         10.1 | Adopted own front cap and native singlet blank           |
| S7      |          8.2 |          9.4 | Existing own rear cap and native negative-meniscus blank |

Rejected clear-cap trial S6 = 8.8 and S7 = 9.4 gives combined sag 6.19 mm versus permitted 5.274 mm intrusion in source d6 = 5.860 mm. The surface probe rejects it at all three source zooms. Keep 8.2 mm optical caps and the default guard, with resolved blank extensions modeled separately. S2/S3 retain their spherical rim limits; S4A clear 14.8 remains inside the actual K-conic domain. No R/d/asphere/stop/focus gap is tuned to fit the drawing. No inferred cut exists, and no cut-source exemption is authored.

### Separate source-aperture restoration

The page 10 numerical summary prints 4.64 / 5.19 / 5.71 at all three source zoom stations. Figure 2(a)/(b) on page 17 independently prints wide 4.64 / tele 5.71. Restore these exact design targets from old marketing-like 4.5 / 5.1 / 5.6 and start the preset list at source-wide 4.64. This is a source-target correction, not a physical iris measurement or a geometry fit. The existing derived/paraxial iris rule stays intact; the original publishes no physical diameter. All radii, d values, source gap rows, stop location/following gap and reconstructed close cams remain untouched.

### Glass review

Every one of the 14 index/Abbe pairs was read from the rendered original table. Paragraph 0057 explicitly supplies the d-line reference; there is no unknown-reference reclassification. Thirteen compatible catalog curves remain qualified spectral proxies. The full per-element table in the paired analysis gives the retained pairs and curve dispositions. Historical supplier, melt, chemistry, cement, coatings and manufacture remain unresolved.

L2 (1.52996 / 55.8) has no compatible curve and is now explicitly labeled Unmatched. Its source d-line pair and asphere remain; the production PMo correlation does not prove cyclo-olefin, acrylate, resin species or injection-molding conditions. No direct C/F/g or partial-dispersion measurements are printed. No unsupported per-lens spectral override exists or is added/removed.

L11's prior `apd: "patent"` is changed to `inferred`. The original prints high Abbe 81.5, but no anomalous partial measurement or APD designation. The production UD count and compatible S-FPL51 coordinate support a qualified inferred position only. Chemical/process claims tied to catalog family names are removed from current public labels/prose; the original gives optical coordinates, not barium/lanthanum/niobate/titanium/fluorophosphate compositions or molding process. Catalog consistency and 13/14 current resolution were verified. Figure 2 d/g aberration curves are context, not material spectra.

### Runtime, source limits and actual SVG

Surface validator passes; image-circle audit reports zero undersized lenses. A 65-position diagnostic clone is identical to actual runtime z/sd at zoom nodes and focus 0/0.5/1 (maximum difference zero). All 65 infinity aperture-census stations satisfy the unchanged 3% criterion; field coverage reaches at least 99%. The derived source-station iris radii are 4.389875 / 4.367403 / 4.353613 mm. Real iris-rim working values are 4.662604 / 5.242989 / 5.794296, measured by 1/(2 n′ sin θ′), separate from the census's paraxial-reference beam ratio. No source physical schedule is asserted.

At 21 zoom × 21 focus positions × six presets, the candidate traces all 2646 working calls; baseline traced 1323 and vignetted 1323, chiefly S11, S15, S14 and S13. A separate current-iris 193-point pupil grid at 65 zoom × five focus positions × four fields gives 1300 field states. Minimum axial passing count improves 97/193 to 193/193. Source-station infinity corner counts improve 54 / 71 / 77 to 101 / 149 / 160; close corner counts become 101 / 151 / 161. Off-axis clipping remains, with no production illumination certification. No cap or tolerance is tuned beyond native support to force full transmission.

First-order EFLs 10.301524 / 13.964150 / 17.461241 mm and BFDs 35.354101 / 42.661186 / 49.421650 agree closely with source stations. Retain printed image gaps 35.35 / 42.66 / 49.42 and infinity residuals +0.004101 / +0.001186 / +0.001650 mm. Existing reconstructed close cams give source-zoom finite residuals +0.001193 / +0.017035 / −0.011812 mm at displayed 0.22 m; they are not printed near-focus data.

At 65 zoom × 21 focus states, worst intermediate infinity defocus is −0.617781 mm (zoom 0.265625); worst finite conjugate residual is −0.827938 mm (zoom 0.28125, focus 0.6 / displayed 0.366667 m). Source gives three infinity states, not a continuous compensator/focus cam. Retain interpolation and controls with these limits, rather than inventing travel to remove them. The Ls transverse IS calibration is absent; centered checks do not validate displaced optics.

All 1365 current APS-C corner chiefs clear near 14.175 mm. Actual generated SVGs across 65 zoom × 21 focus states have 19,110 finite, closed, connected element paths and zero hidden front/rear trim. Wide/middle/tele SVGs were compared with native Figure 1, which supplies only the wide section. The corrected small-group heights follow curved source endpoints; outer shoulders preserve the near-contact optical constraints. Source fidelity, centered sampled runtime, spectral proxies and production correlation remain separate. No original-source blocker remains. Coordinator owns metadata/reports and full validation gates.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions at nine zoom positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 7.0875 and 14.1750 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 14.1750 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 180 positive-real-object geometries, 540/540 target chiefs converge: 540 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 94,378 passed, 9,842 clipped, 0 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.220157802 |           0.220000 | 193 / 180 / 103                   | clear / clear / clear |
|          0.5 |                  0 |                  0.221282271 |           0.220000 | 193 / 183 / 149                   | clear / clear / clear |
|            1 |                  0 |                  0.219456993 |           0.220000 | 193 / 187 / 161                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 92.969174% at zoom 0.25, focus 0.05, aberration control 0: Gaussian 0.309356345 m versus label 4.400000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
