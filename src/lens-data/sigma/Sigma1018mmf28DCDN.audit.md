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
