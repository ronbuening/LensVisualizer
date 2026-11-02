# Audit Log — Laowa 15mm f/4 Wide Angle 1:1 Macro

Patent: CN 205427291 U, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S5 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Patent Example 2 lists nd=1.90366, vd=31.31; OHARA S-LAH95 code 904313 matches. |
| L5 / S10 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Same patent glass as L3. |
| L6 / S12 | `glass` | `H-FK71 (CDGM)` | `H-QK3L (CDGM)` | Patent Example 2 lists nd=1.48749, vd=70.44; CDGM H-QK3L matches. |
| L9a / S20 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Same patent glass as L3. |
| L9b / S21 | `glass` | `H-FK71 (CDGM)` | `H-QK3L (CDGM)` | Same patent glass as L6. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/CN205427291U.pdf`, Example 2 tables. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated the analysis special-glass summary, element notes, and glass table for the relabeled rows.

## 2026-06-24 — Full local patent audit

### Phase 1 — Glass, APD, and high-index status

- Reopened local `patents/CN205427291U.pdf`; the PDF text layer is not usable for the tables, so Example 2 pages were rendered and checked visually.
- Reconfirmed the 2026-05-20 glass relabels for L3/L5/L9a to `S-LAH95 / TAFD25 class (904313)` and L6/L9b to CDGM `H-QK3L`.
- No APD or high-index metadata changes were made. The patent does not provide anomalous-partial-dispersion terms beyond the published nd/vd values.

### Phase 2 — Prescription and SD check

- Checked Example 2 at f = 16.0 mm, Fno = 4.1, half-field = 55.199 deg. Stored radii, thicknesses, nd/vd rows, and the published focus variables D13 and D22 match the patent table.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and prescription geometry: the large first meniscus, narrow front negative section, stop, and compact rear macro-corrector doublets follow the drawing proportions without implausible clear-aperture jumps. No SD values were changed.

### Phase 3 — Spectral / metadata enrichment

- The patent publishes only nd and vd. No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source was found in the local patent.

## 2026-07-30 — Unsafe named-token cleanup

- Replaced L7b's unsupported `H-LAF3 (CDGM)` label with Schott `N-LASF44`, a coefficient-backed catalog equivalent that exactly reproduces the patent's 1.80420 / 46.50 coordinate and code 804465.
- The patent table does not name a supplier, so the annotation records catalog equivalence without asserting Schott manufacture.
- Synchronized the analysis; no prescription geometry changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Patent Example 2 prints focal length 16.00, FNO 4.1 and half field angle ω = 55.199° (¶0061–0063, PDF p. 7), and FIG. 4
(PDF p. 14) labels its infinity image-height axis 21.63 mm, 99.9% of the full-frame corner (21.65 mm), so the design
covers the format. The estimated front rims of L2 and L3 (surfaces 3 and 5), sized for a chief ray at ~60% of the field,
clipped the real chief ray (solved through the stop centre) from 49.2°, leaving the analysis field at 80% of the
corner, and the corner solve failed past 53.7°. With those two rims opened the corner chief ray solves at 55.25° and
needs surface 3 ≥ 14.52 and surface 5 ≥ 10.08 mm; values are floor + ~0.5 mm. L2 and L3 are strong negative menisci,
so their rear surfaces keep their own values: surface 4 is crossed at 10.83 mm (rim 11.0) and surface 6 at 7.97 mm
(rim 8.0), both clear, while the shared factor would take surface 4 past a hemisphere (rim-slope limit reached at
11.3 mm) and surface 6 into the L4a air gap (gap-intrusion limit reached at 8.5 mm). No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 3 | 12.5 | 15.1 | corner chief ray 14.52 mm + clearance; strong-meniscus front, surface 4 unchanged |
| 5 | 9.2 | 10.6 | corner chief ray 10.08 mm + clearance; strong-meniscus front, surface 6 unchanged |

The validator accepts the new values, the traced edge now reaches 21.65 mm at 55.3° with every rim clear (100%), and the
image-circle floor still reports nothing undersized. All surfaces are spherical, and the analysis quotes none of the
changed semi-diameters.

## 2026-10-30 — Fresh F-mount optical rims and glass

- Reopened original `patents/CN 205427291 U.pdf`: Example 2 definitions/table/states PDFpp.7–9 and Figure 3/published 21.63 mm aberration image height p.14 at native resolution and 600 dpi. Every 12 nd/νd pair matches; d-line explicit¶0059. All 12 retain compatible coefficient proxies; S-LAH 95/TAFD 25 and H-QK 3 L are qualified coordinate models, never historical melt identities. No source nC/nF/ng/PgF/theta/Sellmeier or anomalous-material claim; no per-lens spectral copies.
- Figure independently resolves rear flat lands S 2/S 4/S 6/S 9. Retain clear caps 23/11/8/9 and extend blank only to 26/15.1/10.6/10.5 mm. Raise continuous/connected S 8:10→10.5 and S 10/S 11/S 12:9→10.5, S 13:8.5→10.5 mm. The drawn L 4 doublet/L 5/L 6 share the~10.5 mm envelope; no opaque interface land. All other rims retained. Figure uncertainty~0.2–0.4 mm, no printed effective diameters. Front land remains bounded below S 1 outer 27.5, following its unequal meniscus ends.
- No inferred cuts introduced. Canonical build and surface checks pass with existing gap/edge/slope rules; image-circle zero undersized, centered field reaches 21.65 mm. Actual 9-stateSVG inspected with finite paths/zero hidden trim. Common-field 16×16 lattice at 3 focus×5 field fractions:2914 retained,0 lost,18 gained; counts not flux. Centered full-frame trace does not establish production shifted-pupil coverage. Published finite endpoint remains 0.7836×, not production 1:1. R/d/stop/focus/aperture/tolerances unchanged.
