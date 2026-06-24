# Audit Log - Laowa 15mm f/2 Zero-D

Patent: US 2018/0149842 A1, Example 1

## 2026-06-24 - Full local patent audit

### Phase 1 - Glass, APD, and high-index status

- Reopened local `patents/US20180149842A1.pdf` and checked Example 1 against the data file. The patent table text layer is usable for the prescription values.
- Stored glass nd/vd rows match the patent table. No catalog relabels were made.
- Updated L5, L9, and L11 from `apd: false` to `apd: "inferred"` with a note that the 1.49700 / 81.61 ED assignment is a fluorophosphate-class inference only. The patent publishes no partial-dispersion values, so no dPgF or line-index constants were added.
- The inferred APD marking does not change the lens claim to APO; it records the ED glass class used by the chromatic correction strategy.

### Phase 2 - Prescription and SD check

- Checked Example 1 at f = 15.5 mm, Fno = 2.06, half-field = 54.7 deg. Stored radii, thicknesses, nd/vd rows, double-sided aspheres, and the published infinity / 0.020x focus interval match the patent source.
- Confirmed the intentional modeling reductions: the patent image-side cover plate is excluded from the surface list and folded into the air-equivalent back-focus spacing; the zero-thickness contact around the front fixed group is kept condensed in the data file.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and prescription geometry. The large front meniscus, reduced waist through the ultra-wide front group, stop size, and moderate rear-group opening are visually rational for the 109.4 deg full-field patent design. No SD values were changed.

### Phase 3 - Spectral / metadata enrichment

- No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source is present in the local patent. The APD metadata added in this pass remains class-inferred only.

### Phase 4 - Analysis sync

- Updated `Laowa15mmf2ZeroD.analysis.md` to state that the three 1.49700 / 81.61 ED elements are marked as inferred APD while the patent itself provides only nd/vd.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `npm run build` - passed.
