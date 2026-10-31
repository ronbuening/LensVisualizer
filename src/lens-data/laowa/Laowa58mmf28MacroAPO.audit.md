# Audit Log - Laowa 58 mm f/2.8 2x Ultra-Macro APO

Patent: CN 116520542 A, Example 2

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/CN116520542A.pdf`; local text extraction was spotty but confirmed the relevant nd/vd values.
- Updated L2 from `H-ZF88 (CDGM)` to `H-ZF13 (CDGM)` for nd=1.78472, vd=25.72.
- Updated L7 from `H-ZF13 (CDGM)` to `H-ZF52 (CDGM)` for nd=1.84666, vd=23.78.
- Replaced L1 and L11 with code-only patent glass annotations (`866450`, `545486`) because no exact public coefficient-backed catalog matches were found.
- Several other CDGM labels remain no-catalog coverage gaps, but they were outside this relabel queue batch.

## 2026-06-24 - Full local patent audit

### Phase 1 - Glass, APD, and high-index status

- Reopened local `patents/CN116520542A.pdf`; the text layer skips the image table, so Example 2 pages were rendered and checked visually.
- Reconfirmed the 2026-05-20 relabels: L2 remains CDGM `H-ZF13`, L7 remains CDGM `H-ZF52`, and L1 / `866450` plus L11 / `545486` remain unresolved code-label rows with no coefficient-backed exact public catalog match.
- No APD flag changes were made. The existing ED/APO-class rows remain supported by their nd/vd class and existing data-file notes; the patent itself does not publish partial-dispersion terms.

### Phase 2 - Prescription and SD check

- Checked Example 2 at f = 59.21 mm, Fno = 2.9, half-field = 19.95 deg. Stored radii, thicknesses, nd/vd rows, and published focus variables D4, D17, and D26 match the patent table.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and macro-prime geometry: the large fixed front group, narrower moving central focus group, stop, and rear field-corrector opening are consistent with the figure and the ray envelope used for rendering. No SD values were changed.

### Phase 3 - Spectral / metadata enrichment

- The patent publishes only nd and vd for the glass rows. No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source was found in the local patent.
- Added a reviewed-sidecar row for L1 / `866450` and L11 / `545486`; regenerated reports now show both as reviewed sidecar hits while still missing Sellmeier coverage.

## 2026-07-30 - Unsafe named-token cleanup

- Replaced L4's unresolved `H-LAK53A (CDGM)` attribution with HOYA `TAC8`, the current first-party coefficient-backed catalog equivalent that exactly reproduces the patent's 1.72916 / 54.67 coordinate and code 729547.
- The patent table does not identify a production supplier, so the annotation records catalog equivalence rather than asserting HOYA manufacture.
- Synchronized the analysis; no prescription geometry changed.

## 2026-10-29 — Nikon Z-mount all-face and glass reinspection

- Directly inspected original `patents/CN116520542A.pdf`, Example 2: Figure 3 on PDF p. 12 at 600 dpi; all 14 media rows on pp. 7–8, d-line definition ¶0063 on p. 9, and the focus tables on p. 8. Checked every air and cemented face. The source figure is an 842×573 px embedded image at 150 ppi, approximately 6.47 native px/mm from the lens vertex span. A separate high-resolution crop confirms row 13 really prints 3.7500 mm with R=17.7085, nd=1.49700, νd=81.61; no prescription correction is made.
- S19 (L10 rear) and S20 (L11 front) preserve their existing 8.5 mm clear caps and gain `rimExtensionSd: 10.5`, restoring source cap-end lands without growing clear aperture. L13 front S23 gains an inferred 4.89 mm cut, radius 11.94755 mm, with a land to the retained 14.5 mm outer rim. Its clearly drawn vertical stroke has q≈0.824±0.020 (native outer radius about 91 px). The cut passes the full beam sweep. An additional S9 trim is rejected: a native-pixel enlargement cannot securely distinguish a separate short land from the rasterized shallow curve. Do not clip merely to make the block look square. Remaining faces, including all cemented boundaries, keep their existing caps.
- Fresh glass check: all 14 nd/νd pairs match the source. Nine elements retain compatible coefficient-backed spectra; L1, L9, L10, L11 and L12 remain explicit unmatched coordinates. Four 1.49700/81.61 ED/APD tags remain inferred. The source supplies no nC/nF/ng, PgF, ΔPgF or Sellmeier coefficients. Updated the analysis to remove its contradictory all-CDGM/production-supplier assertion, unsourced generic ΔPgF and speculative reconciliation of marketing glass counts. No published spectral value is removed or replaced; all selected curves and native coordinates are retained.
- Verification: focused surface/beam validation passes, image-circle audit finds zero undersized surfaces, and aperture remains within 3% without a rim limiter. Actual SVG geometry at focus/zoom 0, 0.5, 1 has finite paths and zero hidden trim; the nine-state raster montage was visually checked. These are source-guided inferred blank edges, not measured manufactured apertures or certification of production APO behavior.

## 2026-10-31 — Scoped material/reference followup; bounded negative

Preserve June 24/October 29 whole source/shape dates. Checked every Example 2 medium directly in `CN116520542A.pdf`, pp. 7–8; explicit d-line paragraph 0063 p. 9; corresponding Figure 3 p. 12, native 842×573 at 150 ppi. All fourteen modeled glass members, three cemented pairs and the stop are accounted for, with no separate resin/plate row. No numeric per-element line/partial or patent APD evidence is supplied. Four source-pair ED/APD tags remain inferred. No new shape inspection or numerical geometry correction is claimed.

Additional NHG 2601 coefficient rows produce no closer viable proxy for the five native unresolved pairs. H-ZLaF64 misses L1/L12 indices by +0.00405/+0.00468; H-ZLaF70 misses L9 by +0.00584; H-K12 misses L11 by −0.01158 and νd by +6.84. The existing L10 TAF2 candidate is inside the broad resolver window but changes source F−C by +4.006603% (J-LASF017/Q-LASFPH3S about +4.25/+4.41%). No new source spectrum supports accepting that known mismatch. Earlier rejected material labels are not reinstated. Osaka/Kuraray public polymer information also gives no compatible coefficient lead; the analysis links the bounded primary search.

Coverage stays 9/14, all five unresolved coordinates retained. Every source numeric/spectral/APD field, surface, rim/cut, stop and control remains unchanged. No new row is requested and no whole-review count is added.
