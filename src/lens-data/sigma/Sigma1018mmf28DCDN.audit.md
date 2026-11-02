# Audit Log - Sigma 10-18mm F2.8 DC DN | Contemporary

Patent: JP 2024-104911 A, Numerical Example 2

## 2026-06-13 - New lens patent audit

### Phase 1 - Glass corrections

| Element / surface       | Field     | Before                       | After                             | Justification                                                                                                                  |
| ----------------------- | --------- | ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| L1, L2, L4-L8, L11, L13 | `apd`     | `patent`                     | `false`                           | Patent Example 2 publishes theta_gF for every element, but those rows are not all special APD glasses.                         |
| L10                     | `apdNote` | `inferred SLD-class element` | `strongest non-FLD SLD candidate` | Keeps the APD highlight on the patent-listed dPgF = +0.0210 row while making the Sigma SLD placement explicit as an inference. |

L3, L9, and L12 remain patent-tagged APD rows because their nd/vd and dPgF match the three FLD-class elements. L10 remains patent-tagged as the strongest non-FLD SLD candidate. All elements retain their patent-derived `dPgF` values for chromatic tracing.

### Phase 2 - Retained-information audit

- Surface rows 1-24, the stop position, and the wide-end base spacings match JP 2024-104911 A Example 2.
- Variable spacings d7, d12, d18, d20, and BF match the wide / middle / telephoto table.
- All seven aspherical surfaces match the patent coefficients, including surface 4's complete odd/even A3-A14 row.
- Semi-diameters are inferred because the patent publishes no clear-aperture radii. They were visually checked against Figure 8 and pass renderer diagnostics with no trim above 0.25 mm at wide or telephoto.

### Phase 3 - Spectral / metadata enrichment

- Patent theta_gF-derived dPgF values were retained on all thirteen elements.
- No new top-level metadata was required; patent, element/group count, zoom positions, focus description, mount metadata, and format metadata were already present.

### Phase 4 - Analysis sync

- Updated the glass-identification discussion and verification summary to clarify that APD display tags are limited to L3, L9, L10, and L12 even though the patent publishes theta_gF for every element.

## 2026-07-24 - Odd-order asphere backfill

- Re-transcribed Numerical Example 2 from the local patent PDF.
- Replaced surface 4's even-order least-squares approximation with the exact A3-A14 row.
- Retained the patent's ordinary conic constant K = -0.2.
- Added edge-departure regression coverage at the 10.25 mm data-file semi-diameter.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Numerical Example 2 prints 2ω = 113.21° / 93.70° / 77.07° at Y = 14.20 mm for all three zoom states (p. 18), so the
design covers the APS-C corner (14.175 mm) throughout. The estimated rims, which the engine enforces at the file's
1.05 clip margin, stopped the real chief ray (solved through the stop centre) at 51.5° at the wide end (84% of the
corner; L1's rims also kept the corner chief ray from solving past 55.6°) and at 46.3° at the middle station (98%,
rim 23A). With the blocking rims opened, the wide-end corner chief ray (56.55°) crosses surface 1A at 16.28, 2 at 11.78,
22 at 6.46 and 23A at 6.60 mm; at the middle station it crosses 23A at 6.00 mm. Each new value is that height + ~0.5 mm,
rounded up, measured against the chief-ray height itself rather than the clip margin (which stays at 1.05). Scaling
surface 2 with 1A would give 13.4 mm, past the sd/|R| < 0.90 rim-slope limit (about 12.7 mm), so it takes its own floor
(L1 is also a strong meniscus). The partners 21 (L12) and 24A (L13) are scaled with 22 and 23A; 24A is held at 8.8 rather
than 8.9 so L13 keeps the ≤ 1.25 front/rear ratio the analysis states. Figure 8 is a thumbnail (sd-audit queue
Section C), so no figure measurement was used.

| Surface | Before | After | Justification                                                                                            |
| ------- | ------ | ----- | -------------------------------------------------------------------------------------------------------- |
| 1A      | 13.75  | 16.8  | wide corner chief ray 16.28 mm + clearance; no aspheric turnover to 20.2 mm                              |
| 2       | 11.0   | 12.3  | wide corner chief ray 11.78 mm + clearance; scaling with 1A fails sd/\|R\| < 0.90                        |
| 21      | 7.05   | 8.7   | scaled with surface 22 (×1.24); corner chief ray 5.78 mm                                                 |
| 22      | 5.65   | 7.0   | wide corner chief ray 6.46 mm + clearance                                                                |
| 23A     | 5.65   | 7.1   | wide corner chief ray 6.60 mm (middle 6.00 mm) + clearance; no turnover to 8.6 mm                        |
| 24A     | 7.05   | 8.8   | scaled with 23A (×1.26), held at 8.8 for the L13 ratio; corner chief ray 6.85 mm; no turnover to 10.7 mm |

The validator accepts the new values, all three stations now reach 100% of the corner with every rim clear, the
image-circle floor still reports nothing undersized, and no render trim appears at any zoom station. L1's front/rear
ratio is now 1.37; the analysis note on SD checks says so. Departures from the paraxial sphere at the new rims are
+1453.4 µm (1A at 16.8 mm), −143.4 µm (23A at 7.1 mm) and +264.8 µm (24A at 8.8 mm); none is quoted elsewhere, and the
quoted surface-4A departure at 10.25 mm is unchanged.

## 2026-10-08 - dPgF moved to the engine's normal line

- Read local `patents/JP2024104911A.pdf` (text PDF, 48 pages; printed page numbers equal PDF pages). The patent defines its deviation as dPgF = θgF − (0.648285 − 0.00180123·VD): claim 1 on PDF page 2, repeated in claims 3, 5 and 6 on page 3, ¶0010 on page 5, ¶0028 on page 8 and with conditions (5), (8) and (10) on pages 9-11. ¶0078 (pages 12-13) defines the θgF column as the g/F partial-dispersion ratio.
- Numerical Example 2 [面データ] on PDF page 17 prints an absolute θgF for every glass. The patent prints no per-element deviation; the condition table on page 31 gives only the group values (3) 0.0262, (5) 0.0569, (8) 0.0447 and (10) −0.0054, which the per-element deviations below reproduce.
- All thirteen stored `dPgF` values were the patent's own deviation (θgF minus the patent's line, rounded to four decimals), copied straight into the field. The engine rebuilds ng from `dPgF` against 0.6438 − 0.001682·νd, so the correct value is θgF − (0.6438 − 0.001682·νd) at the element's stored νd. The two lines differ by 0.004485 − 0.00011923·νd and cross near νd 37.6.

| Element |    νd | Patent θgF | Patent's deviation | Stored before | Engine-line value |        Stored after |
| ------- | ----: | ---------: | -----------------: | ------------: | ----------------: | ------------------: |
| L1      | 40.10 |     0.5694 |            −0.0067 |       −0.0067 |         −0.006952 | −0.0067 (unchanged) |
| L2      | 67.02 |     0.5358 |            +0.0082 |       +0.0082 |         +0.004728 |           +0.004728 |
| L3      | 95.10 |     0.5335 |            +0.0565 |       +0.0565 |         +0.049658 |           +0.049658 |
| L4      | 40.73 |     0.5681 |            −0.0068 |       −0.0068 |         −0.007192 |           −0.007192 |
| L5      | 30.00 |     0.5978 |            +0.0036 |       +0.0036 |         +0.004460 |           +0.004460 |
| L6      | 26.94 |     0.6050 |            +0.0052 |       +0.0052 |         +0.006513 |           +0.006513 |
| L7      | 35.45 |     0.5926 |            +0.0082 |       +0.0082 |         +0.008427 | +0.0082 (unchanged) |
| L8      | 31.60 |     0.5910 |            −0.0004 |       −0.0004 |         +0.000351 |           +0.000351 |
| L9      | 95.10 |     0.5335 |            +0.0565 |       +0.0565 |         +0.049658 |           +0.049658 |
| L10     | 71.68 |     0.5402 |            +0.0210 |       +0.0210 |         +0.016966 |           +0.016966 |
| L11     | 49.22 |     0.5493 |            −0.0103 |       −0.0103 |         −0.011712 |           −0.011712 |
| L12     | 95.10 |     0.5335 |            +0.0565 |       +0.0565 |         +0.049658 |           +0.049658 |
| L13     | 40.73 |     0.5693 |            −0.0056 |       −0.0056 |         −0.005992 |           −0.005992 |

- Left unchanged: L1 (stored −0.0067, 0.000252 from the engine-line value) and L7 (stored +0.0082, 0.000227 from it). Both sit close to the crossing of the two lines, so the copied deviation already equals the engine-line value within the 0.0003 tolerance and was not re-rounded. No element is e-line referenced and none authors nC/nF/ng.
- nd, νd, glass labels, `apd` tags and surfaces are untouched. The `apdNote` on L3, L9, L10 and L12 now quotes the patent θgF, the patent's deviation on the patent's line and the runtime value; no `apdNote` was added elsewhere. A header note in the data file names both lines.
- `Sigma1018mmf28DCDN.analysis.md`: the ΔPgF column and the condition (3) / (5) / (8) / (10) values are the patent's deviation, labelled as the patent's relation, and stay as they are. Two sentences that said the data file keeps the patent-derived ΔPgF (Glass Identification, and the APD bullet in the Verification Summary) now say the field holds θgF referred to the engine's line.
- The 2026-06-13 entries above ("retain their patent-derived `dPgF` values", "Patent theta_gF-derived dPgF values were retained") describe the file as it stood then and are superseded by this section.

## 2026-10-30 — Native-figure reopening and source/glass qualification

This is a scoped reopening for newly resolved Figure 8 evidence, the reproducible S10 nominal-beam clipping,
and material/APD qualifications. The June 13, July 24, September 24 and October 8 review dates and conclusions
above are historical; this section supersedes their old thumbnail and individual patent-APD claims.

Exact unchanged local original: `patents/JP2024104911A.pdf`, SHA256 `5d995181823781fc46275966651468a145eb4155bde85a6a0dfe7fc09dbe0433`.
Numerical Example 2: paragraphs 0097–0105 (pp. 16–17), all 24 surface/stop rows and thirteen nd/vd/θgF media
(p. 17), all seven aspheres including S4 A3–A14 (pp. 17–18), three infinity zoom stations and five group powers
(p. 18). Figure 8 on p. 36 is explicitly associated with Example 2 in paragraph 0097. All were checked directly
on rendered originals. No alternate family publication supplied numerical or shape evidence.

The native embedded Figure 8 is 2600 × 1506, one-bit, approximately 797 ppi; a 600 dpi page render downsamples
it. Native extraction resolves the optical rims and two free-air steps. This supersedes the stale Section C
thumbnail blocker without treating magnification as extra source resolution. Brackets, labels, arrows, leaders,
axis and image plane are excluded. S1–S7 vertex span about 544 px / 20.8164 mm gives 26.13 px/mm; inferred
heights carry about ±0.5 mm schematic/stroke/calibration uncertainty. They are not published effective diameters.

| Surface | Before clear SD mm | Reviewed clear SD mm |
| ------- | -----------------: | -------------------: |
| 1A      |               16.8 |                 17.8 |
| 3A      |                 12 |                 12.3 |
| 5       |              10.25 |                 10.5 |
| 8       |                  9 |                  7.5 |
| 9       |                7.2 |                  7.5 |
| 10      |               5.35 |                  7.5 |
| 12      |                  7 |                  7.5 |
| 14      |                7.7 |                  7.6 |
| 15      |                  8 |                  7.6 |
| 16      |                8.4 |                  7.6 |
| 17A     |                8.6 |                  7.6 |
| 18A     |                8.8 |                  7.6 |
| 19      |                8.8 |                  6.4 |
| 20      |                8.8 |                  6.4 |
| 21      |                8.7 |                  8.5 |
| 22      |                  7 |                  8.5 |
| 23A     |                7.1 |                  8.5 |
| 24A     |                8.8 |                  8.5 |

S2 retains clear 12.3 with outer 17.8; S4A retains clear 10.25 with outer 12.3. Both shoulders are connected,
air-facing and cap-anchored. Full-clear S2=17.8 fails its spherical domain and 64.2° rim-slope guard (90°).
Full-clear S4A=12.3 requires 6.48 mm cross-gap sag versus unchanged 6.237 mm allowed in the 6.9302 mm physical
gap; this is a guard violation, not a claim that 6.48 exceeds the entire physical gap. Both trials are rejected.
S11's shared bonded cap 6.68 remains; the native D2 blank steps cannot be represented by inventing opaque
lands. Coextensive D1/G3/G5 cap heights are supported by the native outlines. G4's smaller approximately 6.4 mm
height is retained in the final candidate and final SVG. No disconnected resin, cut or extra plate is authored.

Every modeled medium was checked against the thirteen original p. 17 rows. Paragraph 0078, pp. 12–13, defines
d 587.56, g 435.84 and F 486.13 nm. There are no printed individual C/F/g indices, supplier names, melt or
chemistry identities. All thirteen existing compatible catalog curves remain identical and qualified. All
thirteen published θgF values are preserved; eleven active converted fields reconstruct them within rounded
precision. Per the specification's 0.0003 retention rule, L1/L7 retain their historical active approximations:
printed θ .5694/.5926 versus reconstructed .5696518/.5923731 (errors +.0002518/−.0002269, beyond the print bin).
The exact source ratios, source-specific normal and these limits remain explicit. No unsupported per-lens
catalog line override was present. Four APD tags become inferred: published partial-ratio conditions alone do
not establish individual patent-designated anomalous materials, FLD/SLD brand class or chemistry.

All source R/d, all aspheres, index/Abbe pairs, structured partial numbers, stop/iris derivation and controls
are protected by parsed equality; all thirteen curve identities are unchanged. Surface/image-circle audits
pass. All 65 zoom aperture/field checks pass with 3185/3185 axial rays and 195/195 chiefs, 8757/9555 total
pupil rays clear, 798 marginal clips, zero intersection/aim failures. Source field chiefs reach 14.200952 /
14.199978 / 14.200218 mm against printed 14.20; generic coverage minimum99.99936%. All455 working preset
calls trace. Current exact-working f/2.978431 / 2.998312 / 3.042380 is not the nominal2.92 calibration. The old
S10=5.35 cap's 3.7/11.3/21.6% nominal beam restriction is removed by source-supported7.5, without iris tuning.

All845 sampled actual element contours (65zooms ×13) are finite, closed, connected and untrimmed. Final SVG
comparison uses final G4=6.4; the earlier taller-G4 trial is rejected as unnecessary blank overextension.
All1365 zoom/focus combinations confirm inert focus; source d0 is∞ at every station, with no finite prescription.
The interpolation image residual −.381242mm, off-axis vignetting, inferred iris and production correlation
remain limitations. No rim cuts exist. Independent read-only original/candidate QA confirmed the two shoulders,
native hierarchy, bonded-interface constraint and APD qualifications. Runtime sampling is not production proof.

## 2026-10-31 — Source reference contract follow-up

The local original `patents/JP2024104911A.pdf` was reread for reference provenance and the selected media, separately from the complete 2026-10-30 shape and glass review. Paragraph 0078 spans PDF pp. 12–13: `nd` and `vd` refer to d 587.56 nm, and `θgF` uses g 435.84 nm and F 486.13 nm. Numerical Example 2, paragraph 0105 on PDF p. 17, prints all thirteen `nd`/`vd`/`θgF` rows, without individual C/F/g indices. Figure 8 on PDF p. 36 was inspected in its native 2600 × 1506, approximately 797 ppi image to confirm the selected element/interface context. This relevant-geometry check neither repeats the complete shape review nor reopens the superseded thumbnail limitation. The 180 dpi definition/table renders and display scaling are distinct from the native figure resolution.

All thirteen existing `indexReferenceNote` strings were positive citations, with no actual reference uncertainty. They move to the data header and this record, restoring the inspector's verified `nd`/`νd` labels. All thirteen qualified catalog identities, source pairs, source-derived partial fields, APD qualifications and actual chromatic R/G/B/V channels remain exactly unchanged. The patent's deviation normal, `0.648285 − 0.00180123·νd` (claim 1 and paragraph 0028, PDF p. 8), remains distinct from the model's `0.6438 − 0.001682·νd`; the source table prints absolute `θgF`, not that model deviation. Under the existing 0.0003 retention rule, L1/L7 still use historical `dPgF` −0.0067/+0.0082: reconstructed θ 0.5696518/0.5923731 versus printed 0.5694/0.5926, residuals +0.0002518/−0.0002269. These real rounding qualifications are retained rather than erased by the reference-field cleanup.

The seven aspheres, all R/d and caps, shoulders, inferred iris and infinity-only controls remain identical. The source-height, off-axis, sparse zoom interpolation, inert-focus and production-correlation limits in the October 30 review remain. No material supplier, melt or chemistry is identified. Earlier June 13, July 24, September 24 and October 8 history and the October 30 complete review date are retained. This contract correction adds zero whole-lens reviews and does not claim a new illumination validation.
