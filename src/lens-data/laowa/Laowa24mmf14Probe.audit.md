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

## 2026-10-29 — Nikon Z-mount original figure and all-media reinspection

- Directly inspected original `patents/CN210573001U.pdf`, Example 1: Figure 1 on PDF p. 15 at 600 dpi, with separate objective, relay and rear crops; all media rows on pp. 6–7 and d-line definition ¶0055 on p. 8. Reviewed every convex/concave air face and all cemented interfaces, plus the continuous P1 rod and unfolded P2/P3 plates. Source prism fold variants were not mixed into the straight-through model.
- Retain all heights and caps. The source is an embedded 175×1292 px image at 150 ppi, about 2.77 native px/mm along its unfolded first-to-last vertex span. Its tiny objective and relay faces do not resolve a separate vertical cap-end stroke; the rear negative member also lacks an unambiguous land. Increasing resolution of that raster does not establish a new trim. No supported extra `rimCutDepthMm` or `rimExtensionSd` is added, and cemented curves remain intact. The existing different front/rear cap heights are not automatically squared without evidence.
- Fresh glass check confirms every source nd/νd pair for all 27 modeled media, including identical 1.90366/31.31 across the collapsed internal P1 flats. All 27 resolve compatible coefficient-backed catalog proxies. The source prints no nC/nF/ng, partial dispersion or Sellmeier coefficients; the two 1.49700/81.61 ED/APD assignments remain inferred. Added an explicit general proxy/vendor qualification to the data and analysis: catalog compatibility does not establish historical melt or production supplier.
- Verification: focused `audit:surface` passes; `audit:image-circle` reports zero undersized surfaces; actual SVG geometry has zero hidden trim across focus/zoom 0, 0.5, 1 and its full raster section was visually inspected. Shared dispersion/resolver tests pass (2 files / 93 tests). These checks do not convert the inferred radii or source diagram into manufactured clear apertures.

### Same-day catalog-label clarification

The ten 1.84666/23.78 rows previously named `H-ZF88A (CDGM)`. The shared resolver explicitly maps that label to OHARA S-TIH53 as a class surrogate (`glassCatalogAliases.ts`), rather than identifying a production supplier. Name the actually selected `S-TIH53` spectral proxy directly, with supplier uncertainty. Source coordinates and all 27 selected curves are unchanged; the analysis no longer guesses procurement from the manufacturer's country. Original source pp. 6–8 remain the authority for nd/νd. Resolver identity/compatibility and focused glass tests were rechecked after the label change.

## 2026-10-30 — Fresh F-mount all-face and glass review

- Reopened original `patents/CN210573001U.pdf`, Example 1: Figure 1 (PDF p. 15), fresh 600 dpi front/relay/rear crops, every glass row on pp. 6–7, and the complete focus/definition table on p. 8 (¶0055 defines d-line Nd). Rechecked every convex/concave air face, cement boundary, the continuous P1 rod and unfolded P2/P3 plates. No geometry is borrowed from folded Examples 2–3.
- Retain all clear/drawn heights, with no extra inferred cut or extension. The source figure is 175×1292 px at 150 ppi, about 2.77 native px/mm along the first-to-last vertex span. Its small objective faces, shallow relay curves and rear negative member do not resolve a separate flat land; enlarging this raster cannot establish a new endpoint. The existing asymmetric caps remain estimates constrained by real geometry/field reach, not published apertures. No cemented interface is flattened or squared speculatively.
- Reconfirmed all **27 modeled media**: 25 lens/rod elements plus two unfolded prism plates, with every P1 internal-flat row carrying the same 1.90366/31.31. All 27 retain compatible coefficient-backed proxies; H-ZLaF75B's catalog νd 31.42 is qualified against source 31.31. Ten 1.84666/23.78 media correctly name the actually resolved S-TIH53 curve, not its former cross-vendor alias. No source C/F/g, numerical partial dispersion or Sellmeier coefficients are supplied; both ED/APD tags remain inferred. Glass catalog consistency, per-medium resolver compatibility and production-supplier uncertainty were checked freshly.
- Clarified the header/catalog FOV string as **marketed** 84.1°; the source design half-field 44.6° is a different quantity already explained in the public analysis. No R/d, nd/νd, stop, aperture/focus control, SD, physical plate, or gap tolerance changes. The retained P1 reduction, absent row 43 and approximate finite-focus interpretation remain disclosed.
- Verification: canonical/surface checks pass; no inferred cuts exist. Image-circle reports no undersized surface with its wide-angle proxy qualification; direct centered-format field coverage is ≥99%, and the aperture census is within 3% without a rim limiter. Nine actual SVG shape states were generated, rasterized and viewed, with 27 finite, connected modeled-element paths and zero hidden renderer trim. Scoped catalog/resolver checks and the shared dispersion/glass-resolution/partial-dispersion tests pass (3 files/94 tests). The numerical prescription and every runtime control are byte-for-byte equivalent as parsed; only source/public provenance comments and the marketed-FOV display label change.
