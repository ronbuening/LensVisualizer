# Audit Log - Carl Zeiss Olympia-Sonnar 180mm f/2.8

Patent: DE 1,268,404 B, Example 2 / Table II  
Catalog version: local working tree, 2026-06-25

## 2026-07-06 - Mount metadata review

- Added `lensMounts: ["zeiss-contarex"]` and `imageFormat: "135-full-frame"`.
- The data file header identifies the design as a Contarex SLR telephoto Sonnar, and Contarex lens references list the 180 mm f/2.8 Olympia-Sonnar in the Contarex bayonet system.

### Sources

- DE 1,268,404 B, Example 2 / Table II.
- Contarex lens overview, https://en.wikipedia.org/wiki/Contarex_lenses

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott labels and patent constants | Retained | DE 1,268,404 Table II lists the four `nd`/`vd` pairs, and all four rows already resolve to trusted catalog/Sellmeier coverage in the generated reports. No glass relabel was needed. |

### Phase 2 - Retained-information audit

- Rechecked Table II after x180 scaling. Radii, thicknesses, glass constants, and the split of the post-L3 air space around the stop remain consistent with the patent.
- Confirmed the patent does not publish clear apertures. Stored SDs remain inferred from the f/2.8 marginal ray, drawing proportions, and 67 mm filter-thread clearance.
- The fixed unit-focus model remains appropriate; the patent does not publish internal focusing data.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate. The patent provides no partial-dispersion data.
- High-index/high-dispersion status for SF56A/SF11 and SF4 is already represented in glass names and element roles.

## 2026-09-25 — MTF image-plane census

Source `patents/DE_1268404_B.pdf`: visually checked Table II (Fig. 2), PDF p. 2; repeated prescription in claim 2 on p. 4; explanatory text on p. 1. All eight radii, seven intersurface distances, four nd/νd pairs and printed Schnittweite s′=0.4126 agree after ×180 scaling. All spherical/plano, no plate or published finite-focus station. Inferred stop splits d6=0.2685×180=48.33 into 17+31.33 mm without optical change.

Native EFL 1.000306832 and BFL 0.413154345 differ from normalized f=1 and s′=0.4126. Scaled BFL 74.367782142 versus authored 74.268 gives +0.099782142 mm, slightly over the 0.092129690 limit. There is no supported single transcription correction. Source text discusses balanced aberrations and Gauss error but does not identify the printed s′ as a designer best-focus plane.

As a diagnostic, the reference-index axial geometric MTF calculation (32 pupil grid, 812 accepted rays, 10/20/40 lp/mm) prefers +0.080320 mm shift, score 0.542973→0.788628. This is neither proof of designer intent nor a full-field optimization, and it does not validate the authored plane as axial best focus.

**Cause/action:** small source image-distance discrepancy of unresolved design/rounding origin; preserve the printed prescription and document the limit of attribution. Offset **+0.099782 → +0.099782 mm**; Section E row deleted. No numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
