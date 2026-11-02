# Audit Log - Sigma APO Macro 105mm F2.8 EX DG OS HSM

Patent: JP 2012-58682 A, Example 4

## 2026-05-31 - Catalog mismatch remainder audit

### Phase 1 - Glass correction

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| E16 / 27 | `glass` | `BACD5 (HOYA) / S-BAL35 class` | `M-BACD5N (HOYA)` | Patent Example 4 row 27 lists nd=1.58913, vd=61.25. The `BACD5` token aliases to Schott N-SK16 in the resolver, which is the wrong 1.62041-index glass for this row. The coefficient-backed Hoya M-BACD5N catalog entry round-trips the 589613 code. |

### Phase 2 - Patent and SD review

- Checked the local `patents/JP2012058682A.pdf` prescription for Example 4. Row 27 gives R=53.7454, d=4.6951, nd=1.58913, and vd=61.25, matching the stored surface and element values.
- Rendered Figure 31, the Example 4 lens-section figure. The figure matches the 16-element layout, moving-focus grouping, stop placement, and rear L3b triplet used by the data file.
- The patent does not publish clear apertures or semi-diameters for Example 4. The existing data-file SDs are renderer-safe estimates, so no SD edits were made.

### Phase 3 - Analysis sync

- Updated the E16 element note and glass-selection table from the legacy BACD5/S-BAL35 wording to M-BACD5N.
- Added a HOYA M-BACD5N source note to the analysis references.

## 2026-10-07 — Display name

Display name changed from `SIGMA APO Macro 105mm f/2.8 EX DG OS HSM` to `SIGMA MACRO 105mm f/2.8 EX DG OS HSM`. Sigma's
name for this lens is MACRO 105mm F2.8 EX DG OS HSM; the APO prefix belongs to the 150mm and 180mm macro lenses of
the same generation. The lens key and file name are unchanged.

## 2026-10-30 — Fresh F-mount source, rim and glass review

- Reopened exact `patents/JP2012058682A.pdf` (SHA-256 `650f2d4da714df13d2a872adb9204f7baad0f716fb5e6ea609f60576de6defa1`), Example 4 PDFpp.17–18 all16 nd/νd pairs and three source focus states; native d-line definition¶0083p.12. Figure 31p.27 inspected at native/600dpi with its vertical layout rotated for comparison. No source clear apertures, C/F/g or actual partial ratios. All16 compatible coefficient curves retained as qualified spectra, not production suppliers or melts; E16 remains M-BACD5N for source1.58913/61.25, avoiding the old BACD5 alias mismatch.
- Add exposed flat lands S9to15.5mm,S23to15.5mm,S24to17mm, following Figure31 body contours. A fresh native aperture check found S10's previous12.4mm cap limited f-number by4.26%. Raise common S9/S10 clear caps to13mm (beam diagnostic required≥12.9), retaining S9land15.5mm and adding exposed S10land14mm. This reaches its existing adjoining body without putting a land on the opaque cemented interface. All literal radii, thicknesses, focus gaps, nd/νd and stop/iris controls remain unchanged; no new tolerance.
- Other short concave steps do not support reliable numeric cuts at native resolution. Canonical and full inferred-cut checks pass. Nine actual SVG states inspected: connected compounds,finite paths,zero hidden trim. Native f2.91 is iris-limited (traced2.909999997); image-circle0undersized and centered format chief clears. Matched16-point stop-lattice samples retain5,556,lost0,gained330 (not flux). All prescribed numeric/control invariants pass.
- Special-glass tags remain inferred from source coordinates and maker wording. A catalog code match is a spectral proxy; no source partial-ratio precision or historical supplier is inferred. Source focus states remain literal and intermediate motion approximate; inferred rims are not manufacturer mechanical dimensions.
