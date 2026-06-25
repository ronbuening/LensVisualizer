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

### Phase 4 - Analysis sync

- No analysis text changes were required for this pass.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `npm run build` - passed.
