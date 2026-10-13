# Audit Log — Laowa 65mm f/2.8 2x Ultra Macro APO

Patent: CN 110161666A, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 | `glass` | `H-QK3L (CDGM)` | `S-PHM52 (OHARA)` | Example 2 lists nd=1.61800, vd=63.39; S-PHM52 matches the catalog-backed pair. |
| L5 | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Example 2 lists nd=1.80518, vd=25.46; CDGM H-ZF7LA matches. |
| L7 | `glass` | `H-ZLAF68C (CDGM)` | `H-ZLAF50D (CDGM)` | Example 2 lists nd=1.80420, vd=46.50; CDGM H-ZLAF50D matches. |
| L11 | `glass` | `H-ZF4A (CDGM)` | `S-TIH14 (OHARA)` | Example 2 lists nd=1.76182, vd=26.61; S-TIH14 is the catalog-backed match. |
| L12 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Example 2 lists nd=1.90366, vd=31.31; S-LAH95/TAFD25 class matches. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/CN110161666A.pdf`, Example 2 table. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated affected element notes and the glass identification table.

## 2026-06-24 — Full local patent audit

### Phase 1 — Glass, APD, and high-index status

- Reopened local `patents/CN110161666A.pdf`; the text layer skips the image table, so Example 2 pages were rendered and checked visually.
- Reconfirmed the 2026-05-20 catalog-backed relabels for L1, L5, L7, L11, and L12.
- Updated L3 from a slash-separated unmatched note to the unbroken patent code `773530 — high-index lanthanum crown`; no coefficient-backed exact public catalog match was verified.
- Updated L10 from a slash-separated unmatched note to the unbroken patent code `729577 — high-index lanthanum crown`; CDGM H-LAK52 matches nd but not vd, so the exact patent pair remains unresolved.
- No APD flag changes were made. The APO/ED behavior remains represented by the existing ED fluorophosphate rows; the patent provides no partial-dispersion data.

### Phase 2 — Prescription and SD check

- Checked Example 2 at f = 66.0242 mm, Fno = 2.9, half-field = 12.1384 deg. Stored radii, thicknesses, nd/vd rows, and focus variables D3 and D17 match the patent table after the intended data-file reductions.
- Confirmed the intentional model reductions: the flat patent spacer row 16 is folded into the preceding air thickness, and the patent cover-glass rows 27-28 are folded into the air-equivalent BFD.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and macro-prime geometry. The large fixed front doublet, narrower moving G2 focus pack, stop, and modest rear group opening are consistent with the figure and avoid implausible clear-aperture jumps. No SD values were changed.

### Phase 3 — Spectral / metadata enrichment

- The patent publishes only nd and vd for the glass rows. No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source was found in the local patent.
- Added a reviewed-sidecar row for L3 / `773530` and L10 / `729577`; regenerated reports now show `773530` as a reviewed sidecar hit. `729577` remains visible in Sellmeier/unresolved coverage but is not listed in the six-digit missing-Sellmeier report grouping.

### Phase 4 — Analysis sync

- Updated `Laowa65mmf28MacroAPO.analysis.md` so L3 and L10 use unbroken six-digit code labels and explicitly explain why they remain unresolved rather than resolved to H-LAK51/H-LAK52.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 2 on rendered PDF pages 8–9 ([0060]–[0061]) and the focus table [0070]: surface 26 d = 12.3000;
  surfaces 27–28 are one flat plate, 2.0000 mm, nd 1.51680, νd 64.20; D(28) = 1.0000 mm at infinity and 1.95×. No
  patent designation or clear aperture is printed, so the plate has no `label` or `sd`.
- Surface 24 (patent 26) now stores the physical 12.3 mm, with `rearPlates` glass H-K9L (exact CDGM 1.51680 / 64.20,
  matching the file's CDGM element labels) and gapAfter 1.0 mm. Paraxial check against the previous data: EFL
  identical; defocus changes by 0.0014 mm at both focus keyframes (rounding in the old folded 14.62 vs 14.6186).
  Physical track grows by 0.68 mm (2.0 × (1 − 1/1.5168)) to 111.57 mm.
