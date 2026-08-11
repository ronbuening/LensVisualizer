# Audit Log — Nikon AI AF Zoom-Nikkor 24-120mm f/3.5-5.6 D IF

Patent: US 5,734,508 A, Working Example 1 / Figure 2.

## 2026-07-29 — Patent-figure SD, display-name, and glass audit

### Semi-diameter review

Figure 2 does not publish a full clear-aperture table, so the values below remain figure-derived visualization
estimates. The two explicit asphere apertures were preserved: surface 17A remains at `27.3 / 2 = 13.65 mm`, and
surface 34A remains at `15.6 / 2 = 7.8 mm`.

| Surfaces | Before | After | Figure evidence and constraint |
|---|---:|---:|---|
| 12–13 | 23.0, 22.5 mm | 34.0, 34.0 mm | Figure 2 shows the cemented front pair with the widest optical envelope in the system. |
| 14–16 | 22.0, 21.3, 20.5 mm | 28.0, 28.0, 28.0 mm | The rear of the front pair and the following L13 are visibly smaller than the first two surfaces but substantially larger than the original model. |
| 21–24 | 9.2, 8.9, 9.0, 8.5 mm | 11.5, 11.5, 11.5, 11.0 mm | Enlarged the central cemented/positive section to follow the Figure 2 envelope. Surface 20 remains smaller because a larger value causes a real 19→20 sag overlap. |
| 36–38 | 7.8, 8.1, 8.6 mm | 11.0, 11.0, 11.0 mm | Enlarged the final cemented pair to match the visibly broader rear silhouette while staying below its edge-thickness limit. |

The very large mechanical outlines around G1 and G3R were not treated as optical clear apertures. Candidate values
that crossed spherical domains, produced negative edge thickness, or caused cross-gap overlap were rejected.
The automated figure screener could not isolate this panel from its dense labels and group brackets without a
crop-edge warning, so the changed elements were measured on the 300 dpi render and confirmed by eye.

### Glass classification

| Element | Before | After | Disposition |
|---|---|---|---|
| L11 | `861230 — dense flint class (vendor unresolved)` | `J-SFH2 (Hikari; patent code 861230)` | Current Hikari J-SFH2 retains the same `nd`; its code and rounded `νd` differ by one final digit. |
| L12 | `713539 — LaK8/LAL8 class (vendor unresolved)` | `LAC8 (coordinate equivalent; patent code 713539)` | Exact published code/coordinate equivalent already present in the catalog; no supplier claim is made. |
| L3R1 | `658508 — SSK5 class (vendor unresolved)` | `J-SSK5 (Hikari; patent code 658508)` | Exact Hikari code and optical-coordinate match. |
| L3R4 | `518589 — K3/C3 class (vendor unresolved)` | `J-K3 (Hikari; patent code 518589)` | Current Hikari J-K3 retains the same `nd`; its code and rounded `νd` differ by one final digit. |

Added the previously absent J-SFH2, J-SSK5, and J-K3 vendor formula-3 rows to the shared glass catalog. Other
code-only glasses remain unresolved where no comparably strong, coefficient-backed match was found.

### Metadata and analysis sync

- Normalized the display name to separate the aperture from the `D` designation.
- Updated the analysis glass table, element descriptions, patent-figure SD provenance, and Hikari catalog source.

### Verification

- Stored prescription: `npm run audit:surface -- <data-file>` — passed.
- Image-circle floor: `npm run audit:image-circle -- <data-file>` — passed.
- `npm test -- elementRenderDiagnostics` — passed (6 tests).
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed; lint retained three unrelated pre-existing warnings.
- `npm run test` — passed (209 files, 2450 tests).
- `npm run build` — passed (966 routes prerendered).
- In-app browser screenshots were unavailable; visual comparison used the rendered 300 dpi patent page plus the passing full-catalog render diagnostics.

## 2026-07-29 - `796409` coefficient-source review

- Rendered and visually checked the prescription. Working Example 1 row 30 confirms L3F3 at
  `R = -21.224`, `d = 1.8`, `nd = 1.79631`, and `vd = 40.9`, matching the stored row.
- Official OHARA, HOYA, Hikari, and Sumita coefficient catalogs contain no exact `796409` row.
  Nearby named high-index families do not reproduce both coordinates and do not establish a supplier.
- Retained L3F3's explicit unmatched `796409` annotation. No catalog model, prescription geometry,
  focus reconstruction, or spectral claim changed.

## 2026-07-30 — `834374` coefficient-equivalent recovery

### Patent evidence

- Rendered and visually checked local `patents/US5734508.pdf`, PDF page 31, Working Example 1 / Table 1 continued.
- Surface 36 / L3R3 is printed as `R = -83.063`, `d = 1.70`, `νd = 37.4`, and `nd = 1.83400`, matching the
  stored prescription.
- The patent defines the table values as D-line index and Abbe number but names no glass supplier and publishes no
  secondary line index or partial-dispersion value for this row.

### Catalog disposition

- Legacy HOYA NBFD10 publishes `nd = 1.83400`, `νd = 37.34` with a vendor formula-3 polynomial already verified in
  the shared catalog. The `834373` catalog code differs from the patent-derived `834374` only because the patent
  rounds the Abbe number to one decimal.
- Independent first-party catalogs corroborate the family: SUMITA K-LaSFn14 publishes `1.83400 / 37.3`, and OHARA
  S-LAH60 publishes `1.83400 / 37.16`.
- Relabeled L3R3 to `NBFD10 (HOYA catalog equivalent; production supplier unspecified; patent 834374)`.
  Prescription geometry and optical coordinates are unchanged.

### Analysis sync

- Updated the L3R3 description, glass inventory, and catalog-evidence paragraph. The wording treats NBFD10 as the
  coefficient model, not a claim about Nikon's production procurement.

### Verification

- `npm run generate:glass-reports` — passed (8 files / 10 tests); strict/trusted coverage rose to 12/16 elements
  for this lens and 4667/4679 surfaces overall.
- `npm test -- dispersion.test.ts lensDataTyping.test.ts validateLensData.test.ts buildLens.test.ts` — passed
  (4 files / 237 tests).
- `npm run typecheck`, `npm run format:check`, and `git diff --check` — passed.

## 2026-08-11 — Phase 92 HOYA legacy-catalog recovery

- Visually rechecked the `1.79631 / 40.9` L3F3 row in US 5,734,508 Table 4.
- HOYA NBFD2 (`1.797199 / 41.143795`) is a coefficient-backed optical equivalent inside the runtime safety window.
- Relabeled L3F3 and synchronized the analysis while leaving the production supplier unspecified. No geometry,
  asphere, zoom, focus, aperture, or semi-diameter values changed.
