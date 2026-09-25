# Audit Log — Laowa 24mm f/14 2x Macro Probe

Patent: CN 210573001 U, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L7 / patent row | `glass` | `H-ZF7LA (CDGM)` | `N-SF66 / E-FDS1 class (923209)` | Example 1 lists nd=1.92286, vd=20.88; the previous CDGM label resolves to 805/255, not 923/209. |
| L11 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Example 1 lists nd=1.80518, vd=25.46; CDGM H-ZF7LA matches. |
| L14 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Same patent glass as L11. |
| L19 / patent row | `glass` | `H-ZF7LA (CDGM)` | `N-SF66 / E-FDS1 class (923209)` | Same patent glass as L7. |
| L22 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Same patent glass as L11. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/CN210573001U.pdf`, Example 1 tables. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated the analysis glass summary and affected element notes for the swapped 923/209 and 805/255 classes.

## 2026-06-24 — Full local patent audit

### Phase 1 — Glass, APD, and high-index status

- Reopened local `patents/CN210573001U.pdf` and checked Example 1 against the data file using the text layer plus rendered table pages.
- Reconfirmed the 2026-05-20 relabels for the swapped dense-flint rows: L7/L19 use the `N-SF66 / E-FDS1 class (923209)` annotation and L11/L14/L22 use CDGM `H-ZF7LA`.
- No APD or high-index metadata changes were made. ED and high-index roles remain supported by nd/vd class only where the data file already records them.

### Phase 2 — Prescription and SD check

- Checked Example 1 at f = 23.7059 mm, Fno = 14, half-field = 44.6 deg. Stored radii, thicknesses, nd/vd rows, published variables D44 and D46, and fixed BFD match the patent table after the intended data-file reductions.
- Confirmed the intentional model reductions: P1 internal flats are collapsed into a single 12 mm rod, P2 and P3 remain plane plates, the blank patent row 43 is omitted, and the single L23 focus element carries the published focus motion.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered probe drawing and prescription geometry. The tiny objective section, long relay rod/plate train, larger post-relay macro section, stop placement, and rear focus-element clear apertures follow the drawing proportions and avoid irrational scaling in the viewer. No SD values were changed.

### Phase 3 — Spectral / metadata enrichment

- The patent publishes only nd and vd. No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source was found in the local patent.

## 2026-07-30 — TAFD5F catalog-equivalent recovery

### Phase 1 — Glass correction

- Rechecked CN 210573001 U Example 1 on rendered patent pages 8 and 10. L1 and L25 remain
  `nd=1.83481`, `νd=42.72`; the patent does not name a production glass vendor.
- Relabeled both unsupported `H-ZLaF4A (CDGM)` supplier claims to HOYA `TAFD5F` catalog equivalents. The
  coefficient-backed TAFD5F row reproduces `1.83481 / 42.72` exactly; the annotations explicitly leave the
  production supplier unspecified.
- Updated the glass palette and both element narratives. No prescription geometry changed.

## 2026-07-30 — CDGM datasheet recovery

- Added the official CDGM H-ZLaF75B and H-ZF2 Sellmeier rows after checking their rendered datasheets.
- Removed the tentative qualifier from P1's H-ZLaF75B annotation. The datasheet confirms nd = 1.90366; its
  νd = 31.42 remains compatible with the patent's 31.31 value.
- L24's exact 1.67270 / 32.17 H-ZF2 annotation now resolves directly to the CDGM coefficient row.
- No prescription geometry changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Patent Example 1 (实施例1) prints focal length 23.70, F/14 and half field angle ω = 44.6° (¶0046–0048, PDF p. 5; the
¶0083 table on p. 13 gives f = 23.7059), and FIG. 2 (PDF p. 16) labels its infinity image-height axis 21.60 mm, 99.8%
of the full-frame corner (21.65 mm); at ω = 44.6° the traced chief ray lands at 21.70 mm, so the design covers the
format. The relay-exit rim (surface 32) and the rear corrector rims (surfaces 44–47), estimated for a chief ray at 60%
of the field, clipped the real chief ray (solved through the stop centre) from 38.6°, leaving the analysis field at 83%
of the corner. The traced corner chief ray (44.52°) needs surface 32 ≥ 4.15, 44 ≥ 6.41, 45 ≥ 7.11, 46 ≥ 7.27 and
47 ≥ 8.38 mm. Surfaces 32, 45 and 47 take floor + ~0.5 mm; L24 (biconcave) and L25 (plano-convex) are scaled as whole
elements by their rear surfaces' factors, which leaves surfaces 44 and 46 above their own floors plus clearance.
Surface 31, the front of the thick L17 meniscus, keeps 4.1 mm: the corner chief ray crosses it at 2.72 mm, and the
shared factor (4.7 mm) fails the air-gap intrusion check against L16 across the 0.54 mm gap (largest accepted 4.6 mm).
Surface 32 stays inside the ≈ 9 mm relay-section bound in the header. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 32 | 4.1 | 4.7 | corner chief ray 4.15 mm + clearance; surface 31 unchanged (scaled value fails the 30→31 gap check) |
| 44 | 5.9 | 7.4 | corner chief ray 6.41 mm; L24 scaled with surface 45 |
| 45 | 6.1 | 7.7 | corner chief ray 7.11 mm + clearance |
| 46 | 6.4 | 7.9 | corner chief ray 7.27 mm; L25 scaled with surface 47 |
| 47 | 7.2 | 8.9 | corner chief ray 8.38 mm + clearance |

The validator accepts the new values (the tightest new clearance is the 45→46 air gap, 0.15 mm at 7.7 mm, 86% intrusion
against the 90% limit), the traced edge now reaches 21.65 mm at 44.5° with every rim clear (100%), and the image-circle
floor still reports nothing undersized. All surfaces are spherical, and the analysis quotes none of the changed
semi-diameters.
