# Audit Log — Laowa 65mm f/2.8 2x Ultra Macro APO

Patent: CN 110161666A, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field   | Before             | After                             | Justification                                                                  |
| ----------------- | ------- | ------------------ | --------------------------------- | ------------------------------------------------------------------------------ |
| L1                | `glass` | `H-QK3L (CDGM)`    | `S-PHM52 (OHARA)`                 | Example 2 lists nd=1.61800, vd=63.39; S-PHM52 matches the catalog-backed pair. |
| L5                | `glass` | `H-ZF6 (CDGM)`     | `H-ZF7LA (CDGM)`                  | Example 2 lists nd=1.80518, vd=25.46; CDGM H-ZF7LA matches.                    |
| L7                | `glass` | `H-ZLAF68C (CDGM)` | `H-ZLAF50D (CDGM)`                | Example 2 lists nd=1.80420, vd=46.50; CDGM H-ZLAF50D matches.                  |
| L11               | `glass` | `H-ZF4A (CDGM)`    | `S-TIH14 (OHARA)`                 | Example 2 lists nd=1.76182, vd=26.61; S-TIH14 is the catalog-backed match.     |
| L12               | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Example 2 lists nd=1.90366, vd=31.31; S-LAH95/TAFD25 class matches.            |

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

## 2026-10-29 — Nikon Z-mount all-face and glass reinspection

- Directly inspected original `patents/CN110161666A.pdf`, Example 2: Figure 3 on PDF p. 12 at 600 dpi; all 14 lens media plus the physical rear plate on pp. 8–9, d-line definition ¶0065 and focus table on p. 9. Reviewed every convex/concave air face, four cemented interfaces and the rear plate. The 794×429 px embedded figure is 150 ppi, approximately 6.85 native px/mm along the lens vertex span.
- Additional source-supported concave trims: S17 (L10 rear) depth 1.57 mm, cap radius 6.81998 mm, land to 7.5 mm; S18 (L11 front) depth 0.57 mm, radius 6.75141 mm, land to 8.5 mm. Native figure shares are q≈0.91±0.042 (S17, edge about 46 px) and q≈0.79±0.026 (S18, about 70 px). A smaller S18 candidate radius 6.633 mm fails: the beam reaches 6.6464 mm at infinity / field 8.70°, so at least 6.6964 mm is required. The accepted cut moves outward and clears that beam plus 0.05 mm. S21 preserves its 8.5 mm cap with an opaque extension to 9 mm, following its cap-end stroke.
- A proposed S8 concave-front cut is rejected because traced beams reach its full 9.5000 mm cap at focus 0.200 / field 5.32°; adding the required 0.05 mm margin would exceed the outer rim. Other unresolved short strokes are left alone; all cemented caps remain intact. No numeric prescription values or source gaps change.
- Fresh glass check confirms all 14 source lens nd/νd pairs and the 1.51680/64.20 rear plate. Twelve lens elements plus the plate retain compatible catalog curves. L3 1.77250/53.00 and L10 1.72916/57.67 remain unresolved; no Abbe number is changed to force a match. Three ED/APD annotations remain class inferences. No source line indices, partial-dispersion values or coefficients were found. Analysis now qualifies supplier identities and spectral mechanisms as proxy-based interpretations rather than verified production APO correction, and removes the unsupported material-cost claim.
- Verification: focused surface validation including complete inferred-cut beams passes; image-circle audit reports zero undersized surfaces; aperture remains within 3% without a rim limiter. All nine actual SVG focus/zoom states have finite paths and zero hidden trim; their raster montage was visually inspected. Published source coordinates and all selected spectral curves remain unchanged.

## 2026-10-31 — Scoped all-media/reference and catalog follow-up

Preserve the complete Oct 29 source-shape/glass review and May 20/June 24/Sept 23 dates. Direct narrow source reads: exact `patents/CN110161666A.pdf`, Example 2 PDF page 8 ¶0060 all 14 lens medium rows plus S27 rear plate1.51680/64.20; page 9 ¶0061 S28 and ¶0065 explicit d-line Nd. Native table 792×1413, Figure 3 page 12 794×429,150 ppi; no enlargement is called native detail. Cemented interfaces S2/S9/S12/S21 and the separate plate were checked. No independent resin/cement/filter medium or individual C/F/g/partial values are prescribed. Three APD flags remain inferred, not patent evidence.

L6/S9 and L9/S14 source 1.92286/20.88 now use N-SF66, verified against [official SCHOTT data](https://media.schott.com/api/public/content/c2e0c3a77dcb4c94b349424ee621ee32?v=3320661c). Former H-ZF72A evaluates νd 18.895887 (−1.984113), versus N-SF66 nd 1.922860088/νd 20.879747/PgF 0.639418. L7/S11 source 1.80420/46.50 now uses existing N-LASF44, source residuals −0.000000104/+0.000636 versus H-ZLaF50D−0.000200007/+0.075016; its official historical SCHOTT sheet supplies the same coefficients. Both curves are estimates for source media, not historical suppliers or chemistry, and source PgF is absent.

The full prior manufacturer datasets plus official NHG2601 add no strong new row for L3/L10. Existing equivalent N-SF66/E-FDS1 makes a duplicate NHG H-ZF62 row unnecessary. Small last-digit alternatives elsewhere are not treated as proof of a better historical spectrum. All named data labels are qualified; L3's uncertain coordinate loses its unsupported chemistry inference, and L10 analysis loses the speculative proprietary-CDGM explanation. Role prose no longer claims source-measured partial allocation, three-wavelength coincidence or certified APO behavior.

Only glass-label and documentary role strings change; every source/numeric/APD/absorption/geometry/control/plate field remains equal. Current source coordinates andtwelve lens elements plus the plate coverage count stay fixed. No indexReferenceNote is used for known d provenance, no per-lens spectral override/new APD tag is added, and no complete source/shape review count or production claim is incremented.
