# Audit Log - Sigma 10-18mm F2.8 DC DN | Contemporary

Patent: JP 2024-104911 A, Numerical Example 2

## 2026-06-13 - New lens patent audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1, L2, L4-L8, L11, L13 | `apd` | `patent` | `false` | Patent Example 2 publishes theta_gF for every element, but those rows are not all special APD glasses. |
| L10 | `apdNote` | `inferred SLD-class element` | `strongest non-FLD SLD candidate` | Keeps the APD highlight on the patent-listed dPgF = +0.0210 row while making the Sigma SLD placement explicit as an inference. |

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

| Surface | Before | After | Justification |
|---|---|---|---|
| 1A | 13.75 | 16.8 | wide corner chief ray 16.28 mm + clearance; no aspheric turnover to 20.2 mm |
| 2 | 11.0 | 12.3 | wide corner chief ray 11.78 mm + clearance; scaling with 1A fails sd/\|R\| < 0.90 |
| 21 | 7.05 | 8.7 | scaled with surface 22 (×1.24); corner chief ray 5.78 mm |
| 22 | 5.65 | 7.0 | wide corner chief ray 6.46 mm + clearance |
| 23A | 5.65 | 7.1 | wide corner chief ray 6.60 mm (middle 6.00 mm) + clearance; no turnover to 8.6 mm |
| 24A | 7.05 | 8.8 | scaled with 23A (×1.26), held at 8.8 for the L13 ratio; corner chief ray 6.85 mm; no turnover to 10.7 mm |

The validator accepts the new values, all three stations now reach 100% of the corner with every rim clear, the
image-circle floor still reports nothing undersized, and no render trim appears at any zoom station. L1's front/rear
ratio is now 1.37; the analysis note on SD checks says so. Departures from the paraxial sphere at the new rims are
+1453.4 µm (1A at 16.8 mm), −143.4 µm (23A at 7.1 mm) and +264.8 µm (24A at 8.8 mm); none is quoted elsewhere, and the
quoted surface-4A departure at 10.25 mm is unchanged.

## 2026-10-08 - dPgF moved to the engine's normal line

- Read local `patents/JP2024104911A.pdf` (text PDF, 48 pages; printed page numbers equal PDF pages). The patent defines its deviation as dPgF = θgF − (0.648285 − 0.00180123·VD): claim 1 on PDF page 2, repeated in claims 3, 5 and 6 on page 3, ¶0010 on page 5, ¶0028 on page 8 and with conditions (5), (8) and (10) on pages 9-11. ¶0078 (pages 12-13) defines the θgF column as the g/F partial-dispersion ratio.
- Numerical Example 2 [面データ] on PDF page 17 prints an absolute θgF for every glass. The patent prints no per-element deviation; the condition table on page 31 gives only the group values (3) 0.0262, (5) 0.0569, (8) 0.0447 and (10) −0.0054, which the per-element deviations below reproduce.
- All thirteen stored `dPgF` values were the patent's own deviation (θgF minus the patent's line, rounded to four decimals), copied straight into the field. The engine rebuilds ng from `dPgF` against 0.6438 − 0.001682·νd, so the correct value is θgF − (0.6438 − 0.001682·νd) at the element's stored νd. The two lines differ by 0.004485 − 0.00011923·νd and cross near νd 37.6.

| Element | νd | Patent θgF | Patent's deviation | Stored before | Engine-line value | Stored after |
|---|---:|---:|---:|---:|---:|---:|
| L1 | 40.10 | 0.5694 | −0.0067 | −0.0067 | −0.006952 | −0.0067 (unchanged) |
| L2 | 67.02 | 0.5358 | +0.0082 | +0.0082 | +0.004728 | +0.004728 |
| L3 | 95.10 | 0.5335 | +0.0565 | +0.0565 | +0.049658 | +0.049658 |
| L4 | 40.73 | 0.5681 | −0.0068 | −0.0068 | −0.007192 | −0.007192 |
| L5 | 30.00 | 0.5978 | +0.0036 | +0.0036 | +0.004460 | +0.004460 |
| L6 | 26.94 | 0.6050 | +0.0052 | +0.0052 | +0.006513 | +0.006513 |
| L7 | 35.45 | 0.5926 | +0.0082 | +0.0082 | +0.008427 | +0.0082 (unchanged) |
| L8 | 31.60 | 0.5910 | −0.0004 | −0.0004 | +0.000351 | +0.000351 |
| L9 | 95.10 | 0.5335 | +0.0565 | +0.0565 | +0.049658 | +0.049658 |
| L10 | 71.68 | 0.5402 | +0.0210 | +0.0210 | +0.016966 | +0.016966 |
| L11 | 49.22 | 0.5493 | −0.0103 | −0.0103 | −0.011712 | −0.011712 |
| L12 | 95.10 | 0.5335 | +0.0565 | +0.0565 | +0.049658 | +0.049658 |
| L13 | 40.73 | 0.5693 | −0.0056 | −0.0056 | −0.005992 | −0.005992 |

- Left unchanged: L1 (stored −0.0067, 0.000252 from the engine-line value) and L7 (stored +0.0082, 0.000227 from it). Both sit close to the crossing of the two lines, so the copied deviation already equals the engine-line value within the 0.0003 tolerance and was not re-rounded. No element is e-line referenced and none authors nC/nF/ng.
- nd, νd, glass labels, `apd` tags and surfaces are untouched. The `apdNote` on L3, L9, L10 and L12 now quotes the patent θgF, the patent's deviation on the patent's line and the runtime value; no `apdNote` was added elsewhere. A header note in the data file names both lines.
- `Sigma1018mmf28DCDN.analysis.md`: the ΔPgF column and the condition (3) / (5) / (8) / (10) values are the patent's deviation, labelled as the patent's relation, and stay as they are. Two sentences that said the data file keeps the patent-derived ΔPgF (Glass Identification, and the APD bullet in the Verification Summary) now say the field holds θgF referred to the engine's line.
- The 2026-06-13 entries above ("retain their patent-derived `dPgF` values", "Patent theta_gF-derived dPgF values were retained") describe the file as it stood then and are superseded by this section.
